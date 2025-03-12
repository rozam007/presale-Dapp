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
    "Participating in ICOs involves risks, including financial loss and regulatory uncertainties. We do not endorse or guarantee any project listed on this platform. Conduct your own research before investing. We are not liable for any losses or legal issues.",
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
  {title: 'Start Date: ', value: '300000'},
  {title: 'End Date: ', value: '300000'},
  {title: 'Sale Rate: ', value: '300000'},
  {title: 'Listing Rate: ', value: '300000'},
  {title: 'Hard Cap: ', value: '10000'},
  {title: 'Soft Cap: ', value: '5000'},
  {title: 'Max Buy: ', value: '5000'},
  {title: 'Min Buy: ', value: '5000'},
  {title: 'Time Left: ', value: '2 days'},
]

//  <----------How To Buy Section------>

export const buySectionCard = [
  // {
  //   image: "/wallet.svg",
  //   title: "Sign-Up",
  //   paragraph:
  //     "Open your preferred web browser and visit our official website: https://earlymint.io, Click “connect wallet & pay” button and ensure you are on the Ethereum blockchain (ERC20).",
  // },
  {
    image: "/coins.svg",
    title: "Select Presale",
    paragraph:
      "Explore and select a presale of your choice! Browse through available presales and choose the one that best fits your investment goals. Stay informed, make confident decisions, and participate seamlessly in the presale of your preference.",
  },
  {
    image: "/user.svg",
    title: "Buy & Claim",
    paragraph:
      "Select a presale, purchase tokens, and claim them effortlessly! Choose your preferred presale, complete your purchase securely, and claim your tokens once they become available—all in just a few clicks.",
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
    inputType: "number",
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