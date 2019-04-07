import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import SellPropertyForm from "../components/sell/sellPropertyForm";

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
