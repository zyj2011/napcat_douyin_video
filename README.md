# napcat_douyin_video

基于 Playwright 的抖音分享链接视频提取组件，可直接解析出视频直链，并通过 NapCat 发送消息。

## 安装

```bash
npm install
```

## 运行方式

### 1. 仅提取视频地址

```bash
npm start -- --url "https://www.douyin.com/video/7332527133258592073"
```

示例输出：

```json
{
  "title": "",
  "inputUrl": "https://www.douyin.com/video/7332527133258592073",
  "mediaUrl": "https://lf-douyin-pc-web.douyinstatic.com/obj/douyin-pc-web/uuu_265.mp4",
  "currentSrc": "https://lf-douyin-pc-web.douyinstatic.com/obj/douyin-pc-web/uuu_265.mp4",
  "pageUrl": "https://www.douyin.com/video/7332527133258592073"
}
```

### 2. 提取并发送到 NapCat（私聊）

```bash
npm start -- \
  --url "https://www.douyin.com/video/7332527133258592073" \
  --send \
  --napcat-url "http://127.0.0.1:5700" \
  --message-type private \
  --user-id 123456
```

### 3. 提取并发送到 NapCat（群聊）

```bash
npm start -- \
  --url "https://www.douyin.com/video/7332527133258592073" \
  --send \
  --napcat-url "http://127.0.0.1:5700" \
  --message-type group \
  --group-id 654321
```

## 发送内容说明

当前发送的是**视频直链文本消息**，消息内容会类似下面这样：

```text
视频链接：https://lf-douyin-pc-web.douyinstatic.com/obj/douyin-pc-web/uuu_265.mp4
```

也就是说，当前版本会把解析出的直链发给 NapCat，而不是直接以“附件消息段”的形式发送。

## 参数说明

| 参数 | 必填 | 说明 |
| --- | --- | --- |
| `--url` | 是 | 抖音分享链接，例如 `https://www.douyin.com/video/7332527133258592073` |
| `--send` | 否 | 开启发送模式 |
| `--napcat-url` | 发送时必填 | NapCat 接口地址，例如 `http://127.0.0.1:5700` |
| `--message-type` | 发送时必填 | `private` 或 `group` |
| `--user-id` | 私聊时必填 | 接收私聊消息的 QQ 号 |
| `--group-id` | 群聊时必填 | 接收群消息的群号 |

## 常见用法

### 本地调试 NapCat

如果你本地启动了 NapCat，通常可在浏览器或终端里访问：

```bash
http://127.0.0.1:5700
```

然后使用上面的命令进行发送测试。

### 仅测试提取，不发消息

```bash
node index.js --url "https://www.douyin.com/video/7332527133258592073"
```

## 代码位置

- 提取逻辑：`src/douyin.js`
- NapCat 发送逻辑：`src/napcat.js`
- CLI 入口：`index.js`

## 后续可扩展

如果你希望把当前的文本消息改成 NapCat 的**真正附件发送**，可以继续在 `src/napcat.js` 中扩展消息段格式。