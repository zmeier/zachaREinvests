import { Grid, Paper, StyleRulesCallback, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { SellPropertyForm } from "../components/sell/sellPropertyForm";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  itemContainer: {
    padding: theme.spacing.unit * 2,
  },
});

interface SellPageProps extends WithStyles<typeof styles> {}

const SellPage: React.SFC<SellPageProps> = props => {
  return (
    <Layout>
      <SEO title="Sell Land" />
      <Grid container={true} justify="center" alignItems="center" className={props.classes.container}>
        <Grid item={true} sm={10} xs={12} className={props.classes.itemContainer}>
          <Typography variant="h3" align="center">
            I want to buy your property!
          </Typography>
        </Grid>
        <Grid item={true} md={8} sm={10} xs={12} className={props.classes.itemContainer}>
          <SellPropertyForm />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withStyles(styles)(SellPage);
