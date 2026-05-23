const { chromium } = require('playwright');

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

function isLikelyVideoUrl(url) {
  if (!url) return false;
  return /\.(mp4|m4v|mov|webm|m3u8)(\?.*)?$/i.test(url) || /douyinstatic\.com/.test(url);
}

function normalizeVideoSource(currentSrc, fallbackMediaUrl) {
  if (!currentSrc || currentSrc === 'about:blank') {
    return fallbackMediaUrl || null;
  }
  if (currentSrc.startsWith('blob:')) {
    return fallbackMediaUrl || null;
  }
  return currentSrc;
}

async function waitForVideoState(page, timeout) {
  const deadline = Date.now() + timeout;

  while (Date.now() < deadline) {
    const state = await page.evaluate(() => {
      const video = document.querySelector('video');
      if (!video) {
        return { hasVideo: false, currentSrc: '', src: '' };
      }

      return {
        hasVideo: true,
        currentSrc: video.currentSrc || '',
        src: video.src || ''
      };
    });

    if (state.hasVideo && (state.currentSrc || state.src)) {
      return state;
    }

    await page.waitForTimeout(500);
  }

  return null;
}

async function extractDouyinVideoUrl(inputUrl, options = {}) {
  const browser = await chromium.launch({ headless: options.headless ?? true });
  const page = await browser.newPage({
    userAgent: options.userAgent || DEFAULT_USER_AGENT,
    viewport: options.viewport || { width: 1280, height: 720 }
  });

  let mediaUrl = null;
  let currentSrc = '';
  let title = '';

  page.on('response', async (response) => {
    if (mediaUrl) return;
    const url = response.url();
    const contentType = response.headers()['content-type'] || '';
    const resourceType = response.request().resourceType();
    if (
      (resourceType === 'media' || /video\//i.test(contentType) || /application\/octet-stream/i.test(contentType)) &&
      isLikelyVideoUrl(url)
    ) {
      mediaUrl = url;
    }
  });

  try {
    await page.goto(inputUrl, { waitUntil: 'load', timeout: options.timeout || 120000 });
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});

    const videoState = await waitForVideoState(page, options.videoWaitTimeout || 30000);

    ({ currentSrc, title } = await page.evaluate(() => {
      const video = document.querySelector('video');
      return {
        currentSrc: video?.currentSrc || '',
        title: document.title || ''
      };
    }));

    if (!currentSrc && videoState) {
      currentSrc = videoState.currentSrc || videoState.src || '';
    }

    const deadline = Date.now() + (options.mediaWaitTimeout || 8000);
    while (!mediaUrl && Date.now() < deadline) {
      const resolved = await page.evaluate(() => {
        const video = document.querySelector('video');
        return video?.currentSrc || '';
      });
      if (resolved && !resolved.startsWith('blob:')) {
        mediaUrl = resolved;
        break;
      }
      await page.waitForTimeout(250);
    }

    if (!mediaUrl && currentSrc && !currentSrc.startsWith('blob:')) {
      mediaUrl = currentSrc;
    }

    if (currentSrc && currentSrc.startsWith('blob:') && mediaUrl) {
      currentSrc = mediaUrl;
    }

    return {
      inputUrl,
      title,
      currentSrc,
      mediaUrl: normalizeVideoSource(currentSrc, mediaUrl),
      pageUrl: page.url()
    };
  } finally {
    await browser.close();
  }
}

module.exports = {
  extractDouyinVideoUrl
};
