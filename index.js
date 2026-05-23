#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { extractDouyinVideoUrl } = require('./src/douyin');
const { sendNapcatMessage } = require('./src/napcat');

function parseArgs(argv) {
  const args = Object.create(null);
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (!key.startsWith('--')) continue;
    const normalized = key.slice(2);
    const value = argv[i + 1];
    if (!value || value.startsWith('--')) {
      args[normalized] = true;
    } else {
      args[normalized] = value;
      i += 1;
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.url) {
    console.error('用法: node index.js --url <douyin-share-url> [--send] [--napcat-url <url>] [--message-type private|group] [--user-id <id>] [--group-id <id>]');
    process.exit(1);
  }

  const result = await extractDouyinVideoUrl(args.url);

  if (!result.mediaUrl) {
    console.error('未能提取到可播放的视频地址');
    process.exit(2);
  }

  console.log(JSON.stringify({
    title: result.title,
    inputUrl: result.inputUrl,
    mediaUrl: result.mediaUrl,
    currentSrc: result.currentSrc,
    pageUrl: result.pageUrl
  }, null, 2));

  if (!args.send) {
    return;
  }

  const baseUrl = args['napcat-url'];
  if (!baseUrl) {
    console.error('发送模式需要 --napcat-url');
    process.exit(3);
  }

  const messageType = args['message-type'] || 'private';
  const userId = args['user-id'];
  const groupId = args['group-id'];

  if (messageType === 'group' && !groupId) {
    console.error('群发模式需要 --group-id');
    process.exit(4);
  }

  if (messageType !== 'group' && !userId) {
    console.error('私聊模式需要 --user-id');
    process.exit(5);
  }

  const response = await sendNapcatMessage({
    baseUrl,
    messageType,
    userId,
    groupId,
    text: `抖音视频已解析：${result.mediaUrl}`,
    mediaUrl: result.mediaUrl
  });

  console.log(JSON.stringify(response, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
