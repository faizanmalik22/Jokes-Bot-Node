# Faiz Jokes Bot 🤖

Welcome to Faiz Jokes Bot! This Telegram bot brings a smile to your face by providing random jokes on demand.

## Bot Link
You can interact with the bot by clicking on this link: [Faiz Jokes Bot](https://web.telegram.org/k/#@faiz_jokes_bot)

## Features
- Get a random joke anytime by sending the `/joke` command.
- Uses the [Official Joke API](https://official-joke-api.appspot.com/) to fetch new jokes.

## Usage

### How to Use
1. Click the link above to open the bot in Telegram.
2. Type the command `/joke` in the chat and send it.
3. The bot will respond with a joke, including a setup and punchline, to brighten your day!

## Technology Stack
- **Node.js**: For running the bot's backend logic.
- **Telegram Bot API**: To communicate with Telegram and respond to user commands.
- **Axios**: To fetch jokes from the joke API.
- **dotenv**: For securely storing the bot's token in a `.env` file.

## Installation

If you want to run this bot locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Bot_project
   
2.**Install the required dependencies**:
  npm install
  
3.**Create a .env file in the root directory and add your bot token:**
  TELEGRAM_BOT_TOKEN=your-telegram-bot-token
  
4.**Start the bot:**
  node index.js

