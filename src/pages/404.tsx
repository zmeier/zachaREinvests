import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

const PageNotFound: React.SFC = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="jumbotron-fluid pt-5">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>
    </Layout>
  );
};

export default PageNotFound;
