import dotenv from 'dotenv';
import Web3 from 'web3';
dotenv.config();

// Create a websocket provider
const wsProvider = new Web3.providers.WebsocketProvider(process.env.WSS_URL);

// Create a web3 instance
const web3 = new Web3(wsProvider);

// Check connection
web3.eth.net.isListening()
  .then(() => console.log('Websocket provider connected'))
  .catch(e => console.error('Websocket provider error:', e));
