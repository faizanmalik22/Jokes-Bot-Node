// const dotenv=require('dotenv');
// const Telegrambot=require('node-telegram-bot-api');//module ko import kra hai q ki common js moduling hai thats why we use here require not import
// const axois=require('axios');
// dotenv.config();
// const bot=new Telegrambot(process.env.TELEGRAM_BOT_TOKEN,{polling:true})

// bot.onText(/\/joke/,async(option)=>{
//     const response=await axois.get('http://www.official-joke-api.appspot.com/random_joke');
//     //console.log(response.data);
//     const setup=response.data.setup;
//     const punchline=response.data.punchline;
//     //send the joke to the user
//     bot.sendMessage(option.chat.id, setup+", "+punchline);
//     });
    
const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const http = require('http'); // Import the http module for the minimal server

dotenv.config();

// Initialize the Telegram bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

// Joke command
bot.onText(/\/joke/, async (msg) => {
  try {
    const response = await axios.get('http://www.official-joke-api.appspot.com/random_joke');
    const setup = response.data.setup;
    const punchline = response.data.punchline;
    // Send the joke to the user
    bot.sendMessage(msg.chat.id, `${setup} - ${punchline}`);
  } catch (error) {
    console.error("Error fetching joke:", error);
    bot.sendMessage(msg.chat.id, "Sorry, I couldn't fetch a joke for you right now.");
  }
});

// Minimal server to keep the hosting provider happy
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot is running');
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
