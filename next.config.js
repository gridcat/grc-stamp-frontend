/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: 'http://localhost:7000',
    EXPLORER_BLOCK_URL: 'https://testnet.gridcoinstats.eu/block/[data]',
    EXPLORER_TX_URL: 'https://testnet.gridcoinstats.eu/tx/[data]',
  }
};
