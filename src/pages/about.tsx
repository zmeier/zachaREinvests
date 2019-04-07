import { Grid, StyleRulesCallback, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import { graphql } from "gatsby";
import Img, { FluidObject } from "gatsby-image";
import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  image: {
    maxWidth: 300,
    margin: "auto"
  }
});

interface AboutPageProps extends WithStyles<typeof styles> {
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
      <Grid container={true} justify="space-evenly" alignItems="flex-start" className={props.classes.container}>
        <Grid item={true} xs={11}>
          <Typography align="center" variant="h3">{props.data.markdownRemark.frontmatter.title}</Typography>
        </Grid>
        <Grid item={true} lg={3} md={4} xs={11}>
          <Img className={props.classes.image} fluid={props.data.file.childImageSharp.fluid} />
        </Grid>
        <Grid item={true} md={8} xs={11}>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </Grid>
      </Grid>
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

export default withStyles(styles)(AboutPage);
