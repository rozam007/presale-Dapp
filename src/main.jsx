import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles.css"; // Ensure this file exists
import { ThirdwebProvider } from "thirdweb/react";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo-client.js";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Root element with id "root" not found in index.html');
}

createRoot(rootElement).render(
  <StrictMode>
    <ThirdwebProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ThirdwebProvider>
  </StrictMode>
);
