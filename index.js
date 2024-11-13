const dotenv=require('dotenv');
const Telegrambot=require('node-telegram-bot-api');//module ko import kra hai q ki common js moduling hai thats why we use here require not import
const axois=require('axios');
dotenv.config();
const bot=new Telegrambot(process.env.TELEGRAM_BOT_TOKEN,{polling:true})

bot.onText(/\/joke/,async(option)=>{
    const response=await axois.get('http://www.official-joke-api.appspot.com/random_joke');
    //console.log(response.data);
    const setup=response.data.setup;
    const punchline=response.data.punchline;
    //send the joke to the user
    bot.sendMessage(option.chat.id, setup+", "+punchline);
    });
    