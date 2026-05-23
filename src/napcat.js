const http = require('http');
const https = require('https');

function sendHttpRequest(targetUrl, payload) {
  const transport = targetUrl.protocol === 'https:' ? https : http;

  return new Promise((resolve, reject) => {
    const request = transport.request(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }, (response) => {
      let rawBody = '';

      response.setEncoding('utf8');
      response.on('data', (chunk) => {
        rawBody += chunk;
      });
      response.on('end', () => {
        resolve({
          status: response.statusCode,
          body: rawBody
        });
      });
    });

    request.on('error', reject);
    request.setTimeout(15000, () => {
      request.destroy(new Error('NapCat 请求超时'));
    });
    request.write(JSON.stringify(payload));
    request.end();
  });
}

async function sendNapcatMessage({ baseUrl, messageType = 'private', userId, groupId, text, mediaUrl }) {
  if (!baseUrl) {
    throw new Error('NAPCAT_BASE_URL is required');
  }

  const endpoint = messageType === 'group' ? '/send_group_msg' : '/send_private_msg';
  const payload = {
    message: mediaUrl
      ? `视频链接：${mediaUrl}`
      : text || '未获取到可发送的视频链接'
  };

  if (messageType === 'group') {
    payload.group_id = groupId;
  } else {
    payload.user_id = userId;
  }

  const response = await sendHttpRequest(new URL(endpoint, baseUrl), payload);

  if (!response.status || response.status < 200 || response.status >= 300) {
    throw new Error(`NapCat 请求失败: ${response.status} ${response.body}`);
  }

  return {
    ok: true,
    status: response.status,
    body: response.body
  };
}

module.exports = {
  sendNapcatMessage
};
