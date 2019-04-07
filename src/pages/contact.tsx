import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";

const ContactPage: React.SFC = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="jumbotron-fluid pt-5">
        <div className="container pt-5 p-3">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit contact
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
