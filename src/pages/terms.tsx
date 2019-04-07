import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { TermsAndConditions } from "../components/privacy/termsAndConditions";

const TermsPage: React.SFC = () => {
  return (
    <Layout>
      <SEO title="Terms and Conditions" />
      <TermsAndConditions />
    </Layout>
  );
};

export default TermsPage;
