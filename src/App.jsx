import React from "react";
import Layout from "./layout";
import routes from "./routes/index"; // Ensure it exports valid JSX elements or components

const App = () => {
  return <Layout>{routes}</Layout>;
};

export default App;
