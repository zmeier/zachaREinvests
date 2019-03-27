import { Link } from "gatsby";
import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import forSale from "../images/for_sale.svg";
import "../styles/index.scss";

const IndexPage: React.SFC = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `land`,
          `invest`,
          `investment`,
          `realestate`,
          `real`,
          `estate`,
          `zachary`,
          `zachare`,
          `zachareinvests`,
          `house`,
          `sell`,
          `buy`,
          `house`,
        ]}
      />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={forSale} alt="for sale sign" />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
