// import EthSymbolImage from "./../../public/eth-symbol.png";
// import USDTSymbolImage from "./../../public/usdt-symbol.png";
// import CardImage from "./../../public/card.png";
// import EthImage from "./../../public/eth.png";
// import USDTImage from "./../../public/usdt.png";
// import Logo from "./../../public/logo.svg";
// import walletImage from "../../public/wallet.svg";
// import coinsImage from "../../public/coins.svg";
// import userImage from "../../public/user.svg";

export const logoTitle = {
  title: "EarlyMint",
};

export const disclaimer = {
  title: "Disclaimer",
  Paragraph:
    " Digital currencies may be unregulated in your jurisdiction. The value of digital currencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.",
};

export const contactInfo = [
  {
    title: "support@remittix.io",
    mail: "support@remittix.io",
  },
  // {
  //   title: "marketing@remittix.io",
  //   mail: "marketing@remittix.io",
  // },
];

export const formFields = [
  // { label: "Token Address", fieldName: "tokenAddress" },
  // { label: "Decimals", fieldName: "tokenDecimals" },
  // { label: "Uniswap Router", fieldName: "uniswapRouter" },
  // { label: "Uniswap Fatcory", fieldName: "uniswapFactory" },
  // { label: "Team Wallet", fieldName: "teamWallet" },
  // { label: "WETH Addresss", fieldName: "wEthAddress" },
  // { label: "Burn Unsold Tokens", fieldName: "burnUnsoldTokens" },
  // { label: "Whitelist Enabled", fieldName: "whitelistEnabled" },
  { label: "Start Time", fieldName: "startTime" },
  { label: "End Time", fieldName: "endTime" },
  { label: "Liquidity", fieldName: "liquidity" },
  { label: "Sale Rate", fieldName: "saleRate" },
  { label: "Listing Rate", fieldName: "listingRate" },
  { label: "Hard Cap", fieldName: "hardCap" },
  { label: "Soft Cap", fieldName: "softCap" },
  { label: "Max Buy", fieldName: "maxBuy" },
  { label: "Min Buy", fieldName: "minBuy" },
];

export const presaleSummary = [
  {title: 'ETH Raised: ', value: '3000'},
  {title: 'Token Sold: ', value: '300000'},
  {title: 'Soft Cap: ', value: '5000'},
  {title: 'Hard Cap: ', value: '10000'},
  {title: 'Time Left: ', value: '2 days'},
]

//  <----------How To Buy Section------>

export const buySectionCard = [
  {
    image: "/wallet.svg",
    title: "Sign-Up",
    paragraph:
      "Open your preferred web browser and visit our official website: https://earlymint.io, Click “connect wallet & pay” button and ensure you are on the Ethereum blockchain (ERC20).",
  },
  {
    image: "/coins.svg",
    title: "Select Currency",
    paragraph:
      "Via the EarlyMint web3 dApp, select which cryptocurrency you want to use to make your purchase. If you do not have crypto you can use your card.",
  },
  {
    image: "/user.svg",
    title: "Buy & Claim",
    paragraph:
      "Verify the transaction details inside your wallet and confirm the transaction, once this is successful your tokens will automatically be sent to your dashboard within 5-10 minutes depending on network congestion.",
  },
];


// <------------Hero Section------------>

export const currencyNavTabs = [
  {
    name: "ETH",
    image: "/eth-symbol.png",
  },
  {
    name: "USDT",
    image: "usdt-symbol.png",
  },
  {
    name: "Card",
    image: "card.png",
  },
];

export const exchangeRateInput = [
  {
    currency: "ETH",
    rate: 0.0539,
    image: "/eth.png",
    inputType: "text",
  },
  {
    currency: "USDT",
    rate: 0.0539,
    image: "/usdt.png",
    inputType: "text",
  },
];

export const exchangedToken = {
  token: "Tokens",
  rate: 0.0539,
  image: "/logo.svg",
  inputType: "text",
};