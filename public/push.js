var push = require('web-push');

let vapidKeys = {
    "publicKey":"BCuSL5HShzvtb2ZtYEVAEcKrrPioUqPUsltjWkHqcRgVWB1t2hIaXyuDgyqFk-MdkNsj3RV6yl9vvaY_YruYmus",
    "privateKey":"rGt36dLGbQNvBK6jf8kPGasROHBW88AE3Cgai8OHH8g"
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {}
push.sendNotification(sub, 'test message')

