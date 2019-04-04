import React from "react";

import { Layout } from "../components/layout";
import SellPropertyForm from "../components/sellPropertyForm";
import { SEO } from "../components/seo";

const SellPage: React.SFC = props => {
  return (
    <Layout>
      <SEO title="Sell Land" />
      <section className="jumbotron-fluid pt-5">
        <div className="container pt-5 p-3">
          <SellPropertyForm />
        </div>
      </section>
    </Layout>
  );
};

export default SellPage;
