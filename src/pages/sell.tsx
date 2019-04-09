import { Grid, Paper, StyleRulesCallback, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import SellPropertyForm from "../components/sell/sellPropertyForm";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  itemContainer: {
    padding: theme.spacing.unit * 2,
  },
  paper: {
    maxWidth: 500
  }
});

interface SellPageProps extends WithStyles<typeof styles> {}

const SellPage: React.SFC<SellPageProps> = props => {
  return (
    <Layout>
      <SEO title="Sell Land" />
      <Grid container={true} justify="center" alignItems="center" className={props.classes.container} direction="column">
        <Grid item={true} md={6} sm={8} xs={12} className={props.classes.itemContainer}>
          <Typography variant="h3" align="center">
            I want to buy your property!
          </Typography>
        </Grid>
        <Grid item={true} lg={4} md={5} sm={6} xs={12} className={props.classes.itemContainer}>
          <Paper className={props.classes.paper}>
            <SellPropertyForm />
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withStyles(styles)(SellPage);
