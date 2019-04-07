import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { PrivacyPolicy } from "../components/privacy/privacyPolicy";

const PrivacyPage: React.SFC = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <PrivacyPolicy />
    </Layout>
  );
};

export default PrivacyPage;
