import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import React from "react";

import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

interface AboutPageProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
      };
    };
    file: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

const AboutPage: React.SFC<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO title="About" />
      <section className="jumbotron-fluid pt-5">
        <div className="container pt-5 p-3">
          <div className="row">
            <div className="col-lg-3">
              <Img className="self-portrait m-auto" fluid={props.data.file.childImageSharp.fluid} />
            </div>
            <div className="col-lg-9">
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
    markdownRemark(fileAbsolutePath: {regex: "/.*/about\\.md$/"}) {
      html
      frontmatter {
        title
      }
    },
    file(relativePath: { eq: "self_portrait.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;
