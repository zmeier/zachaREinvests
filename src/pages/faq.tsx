import { Grid, StyleRulesCallback, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import { graphql } from "gatsby";
import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  }
});

interface FAQPageProps extends WithStyles<typeof styles> {
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
      <SEO title="FAQ" />
      <Grid container={true} justify="center" className={props.classes.container}>
        <Grid item={true} xs={11}>
          <Typography align="center" variant="h3">{props.data.markdownRemark.frontmatter.title}</Typography>
        </Grid>
        <Grid item={true} lg={3} md={10} xs={11} className={props.classes.soloTOC}>
          <div className="table-of-contents">
            <Typography
              paragraph={true}
              dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.tableOfContents }}
            />
          </div>
        </Grid>
        <Grid item={true} lg={7} md={10} xs={11}>
          <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </Grid>
      </Grid>
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

export default withStyles(styles)(FAQPage);
