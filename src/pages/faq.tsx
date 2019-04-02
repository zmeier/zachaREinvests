import "jquery";
import "popper.js";

import { graphql } from "gatsby";
import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

interface FAQPageProps {
  data: {
    markdownRemark: {
      html: string;
      tableOfContents: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const FAQPage: React.SFC<FAQPageProps> = props => {
  return (
    <Layout>
      <SEO title="Frequently Asked Questions" />
      <section className="jumbotron-fluid pt-5 anchor-points">
        <div className="container pt-5 p-3">
          <div className="row">
            <div
              id="table-of-contents"
              className="col-lg-4"
              dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.tableOfContents }}
            />
            <div className="col-lg-8">
              <h1>{props.data.markdownRemark.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: {regex: "/.*/faq\\.md$/"}) {
      html
      tableOfContents(pathToSlugField: "frontmatter.slug")
      frontmatter {
        title
      }
    }
  }
`;

export default FAQPage;
