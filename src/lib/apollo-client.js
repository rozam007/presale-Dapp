import { ApolloClient, InMemoryCache } from "@apollo/client";

const subgraphUrl = import.meta.env.VITE_SUBGRAPH_URL;
const client = new ApolloClient({
  uri:  subgraphUrl,
  cache: new InMemoryCache(),
});

export default client;
