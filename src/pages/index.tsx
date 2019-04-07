import { Grid, StyleRulesCallback, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { AboutSection } from "../components/homepage/aboutSection";
import { CallToActionSection } from "../components/homepage/callToActionSection";
import { HowItWorksSection } from "../components/homepage/howItWorksSection";
import { PrimaryContentSection } from "../components/homepage/primaryContentSection";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  itemContainer: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 2,
  },
});

interface IndexPageProps extends WithStyles<typeof styles> {}

const IndexPage: React.SFC<IndexPageProps> = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <PrimaryContentSection />
      <Grid container={true} justify="center" alignItems="center" className={props.classes.container}>
        <Grid item={true} sm={10} className={props.classes.itemContainer}>
          <HowItWorksSection />
        </Grid>
        <Grid item={true} sm={10} className={props.classes.itemContainer}>
          <AboutSection />
        </Grid>
        <Grid item={true} sm={10} className={props.classes.itemContainer}>
          <CallToActionSection />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withStyles(styles)(IndexPage);
