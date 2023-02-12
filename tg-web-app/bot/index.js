const { Telegraf } = require("telegraf");
const bot_token = "5870776747:AAGRFvMF2wlnJNqUvBV6EmIM5tGk_-4hOOw";

const bot = new Telegraf(bot_token);

const web_app_link = "https://telegram-web-app-delta.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome Durger King Bot :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_app_link } }]],
    },
  })
);

bot.launch();
