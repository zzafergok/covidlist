import React from "react";
import CovidSummary from "../api/CovidSummary";
import Layout from "../components/Layout";
import CovidGlobal from "../api/CovidGlobal";

const App = () => {
  return (
    <Layout>
      <CovidGlobal />
      <CovidSummary />
    </Layout>
  );
};

export default App;
