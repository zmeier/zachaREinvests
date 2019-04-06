import { graphql, Link } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import React, { FormEvent } from "react";

import { Button, Grid, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import { postContactUsForm } from "../api/contactUsApi";
import HowItWorksCard from "../components/howItWorksCard";
import { Layout } from "../components/layout";
import SellPropertyForm from "../components/sellPropertyForm";
import { SEO } from "../components/seo";

const styles = (theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
  },
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  card: {
    minWidth: 275,
  },
});

interface HowItWorksEdge {
  node: {
    rawMarkdownBody: string;
    frontmatter: {
      header: string;
      link: string;
      linkLabel: string;
      icon: string;
    };
  };
}

interface KeyWordsEdge {
  node: {
    keywords: string[];
  };
}

interface IndexPageProps extends WithStyles<typeof styles> {
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
      <Grid id="background-image" container={true} className={props.classes.root} justify="space-evenly">
        <Grid item={true} md={6}>
          <div style={{ textAlign: "center" }}>
            <Typography color="primary" variant="h3">
              Sell your land quickly!
            </Typography>
            <Typography color="primary" variant="h6">
              I will buy your land without all of the hassle.
            </Typography>
          </div>
        </Grid>
        <Grid item={true} md={6}>
          <SellPropertyForm />
        </Grid>
      </Grid>

      <Grid container={true} justify="center" alignItems="center" className={props.classes.container}>
        <Grid item={true} sm={10}>
          <Typography id="how-it-works" variant="h3">
            How it works
          </Typography>
          <Grid container={true} justify="space-evenly" alignItems="stretch" spacing={16}>
            {props.data.allMarkdownRemark.edges.map((edge, index) => {
              return (
                <Grid key={index} item={true} md={3} sm={4}>
                  <HowItWorksCard
                    title={edge.node.frontmatter.header}
                    body={edge.node.rawMarkdownBody}
                    icon={edge.node.frontmatter.icon}
                    action={edge.node.frontmatter.link ? { link: edge.node.frontmatter.link, linkLabel: edge.node.frontmatter.linkLabel } : undefined}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid container={true} justify="center" alignItems="center" className={props.classes.container}>
          <Grid item={true} sm={10}>
            <Grid item={true}>
              <Img className="self-portrait m-auto" fixed={props.data.aboutPic.childImageSharp.fixed} />
            </Grid>
            <Grid item={true}>
              <h2 id="about-me-excerpt">{props.data.about.frontmatter.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.data.about.excerpt }} />
              <Link to="/about">Learn more about me</Link>
            </Grid>
          </Grid>

          <Grid container={true} justify="center" alignItems="center" className={props.classes.container}>
            <Grid item={true} sm={10}>
              <h2>Get started selling your property</h2>
              <Button variant="contained" color="primary" size="large" href="/sell">
                Get an offer
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
            icon
          }
        }
      }
    }
  }
`;

export default withStyles(styles)(IndexPage);
