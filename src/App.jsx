import React from "react";
import HomePage from "./page/HomePage";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <div className="text-center">
        <HomePage />
      </div>
    </Layout>
  );
}

export default App;
