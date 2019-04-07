import { Grid, StyleRulesCallback, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import { HowItWorksCard } from "./howItWorksCard";

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

interface HowItWorksCardData {
  howItWorks: {
    edges: HowItWorksEdge[];
  };
}

const dataQuery = graphql`
query {
  howItWorks: allMarkdownRemark(filter: { fileAbsolutePath: {regex: "/.*/howitworks/.*\\.md$/"}}, sort: { order: ASC, fields: fileAbsolutePath }) {
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

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    textAlign: "center"
  }
});

interface HowItWorksSectionProps extends WithStyles<typeof styles> {}

const HowItWorksSectionComponent: React.SFC<HowItWorksSectionProps> = props => {
  const data: HowItWorksCardData = useStaticQuery(dataQuery);
  return (
    <div id="how-it-works">
      <Typography variant="h3" className={props.classes.container}>
        How it works
      </Typography>
      <Grid container={true} justify="space-evenly" alignItems="stretch" spacing={16} className={props.classes.container}>
        {data.howItWorks.edges.map((edge, index) => {
          return (
            <Grid key={index} item={true} md={3} sm={4}>
              <HowItWorksCard
                title={edge.node.frontmatter.header}
                body={edge.node.rawMarkdownBody}
                icon={edge.node.frontmatter.icon}
                action={
                  edge.node.frontmatter.link
                    ? { link: edge.node.frontmatter.link, linkLabel: edge.node.frontmatter.linkLabel }
                    : undefined
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const HowItWorksSection = withStyles(styles)(HowItWorksSectionComponent);
export { HowItWorksSection };
