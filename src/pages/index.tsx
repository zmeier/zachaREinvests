import "jquery";
import "popper.js";

import { graphql, Link } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import React, { FormEvent } from "react";

import { InterestForm } from "../components/interestForm";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { postContactUsForm } from "../api/contactUsApi";

interface HowItWorksEdge {
  node: {
    rawMarkdownBody: string;
    frontmatter: {
      header: string;
      link: string;
      linkLabel: string;
      icon: string;
      iconAlt: string;
    };
  };
}

interface KeyWordsEdge {
  node: {
    keywords: string[];
  };
}

interface IndexPageProps {
  data: {
    allDataJson: {
      edges: KeyWordsEdge[];
    };
    about: {
      excerpt: string;
      frontmatter: {
        title: string;
      };
    };
    aboutPic: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    allMarkdownRemark: {
      edges: HowItWorksEdge[];
    };
  };
}

const handleFormSubmit = (formEvent: FormEvent<HTMLFormElement>) => {
  formEvent.preventDefault();
  const formData = new FormData(formEvent.currentTarget);
  postContactUsForm(formData);
};

const IndexPage: React.SFC<IndexPageProps> = props => {
  let allKeyWords: string[] = [];
  props.data.allDataJson.edges.map(edge => (allKeyWords = allKeyWords.concat(edge.node.keywords)));
  return (
    <Layout>
      <SEO title="Home" keywords={allKeyWords} />
      <section id="index-primary-content" className="jumbotron-fluid pt-5">
        <div className="container pt-5 p-3">
          <div className="row justify-content-center align-items-center p-4">
            <div className="col-lg-5 col-md-6 text-center text-light">
              <h1>Sell your land quickly!</h1>
              <div>I will buy your land without all of the hassle.</div>
            </div>
            <div className="col-lg-5 col-md-6 text-center">
              <InterestForm className="interest-form bg-white shadow-sm rounded p-4 m-auto" onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container p-3 anchor-points">
          <h2 id="how-it-works">How it works</h2>
          {props.data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <div key={index}>
                <h5>{edge.node.frontmatter.header}</h5>
                <div>{edge.node.rawMarkdownBody}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div className="container p-3">
          <div className="row">
            <div className="col-lg-2 col-md-3">
              <Img className="self-portrait m-auto" fixed={props.data.aboutPic.childImageSharp.fixed} />
            </div>
            <div className="col-lg-10 col-md-9">
              <h2 id="about-me-excerpt">{props.data.about.frontmatter.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.data.about.excerpt }} />
              <Link to="/about">Learn more about me</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allDataJson(filter: { keywords: { ne: null}}) {
      edges {
        node {
          keywords
        }
      }
    },
    about: markdownRemark(fileAbsolutePath: {regex: "/.*/about\\.md$/"}) {
      excerpt
      frontmatter {
        title
      }
    },
    aboutPic: file(relativePath: { eq: "self_portrait.png" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: {regex: "/.*/howitworks/.*\\.md$/"}}, sort: { order: ASC, fields: fileAbsolutePath }) {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            header
            link
            linkLabel
            iconAlt
          }
        }
      }
    }
  }
`;

export default IndexPage;
