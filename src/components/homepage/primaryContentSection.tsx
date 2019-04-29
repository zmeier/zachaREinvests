import { Grid, Paper, StyleRulesCallback, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

import { SellPropertyForm } from "../sell/sellPropertyForm";

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 14,
    paddingBottom: theme.spacing.unit * 6,
  },
  [theme.breakpoints.down("xs")]: {
    root: {
      paddingTop: theme.spacing.unit * 12,
    },
  },
  paper: {
    ...theme.mixins.gutters(),
    maxWidth: 500,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  tagline: {
    textAlign: "center",
  }
});

interface PrimaryContentSectionProps extends WithStyles<typeof styles> {}

const PrimaryContentSectionComponent: React.SFC<PrimaryContentSectionProps> = props => {
  return (
    <Grid id="background-image" container={true} className={props.classes.root} justify="center">
      <Grid item={true} md={6}>
        <div className={props.classes.tagline}>
          <Typography color="primary" variant="h3">
            Sell your land quickly!
          </Typography>
          <Typography color="primary" variant="h5">
            I pay back taxes and closing costs
          </Typography>
        </div>
      </Grid>
      <Grid item={true} md={6}>
        <Paper className={props.classes.paper}>
          <Typography variant="h5" color="primary" align="center">
            Get a free offer for your land!
          </Typography>
          <SellPropertyForm useSimpleForm={true} />
        </Paper>
      </Grid>
    </Grid>
  );
};

const PrimaryContentSection = withStyles(styles)(PrimaryContentSectionComponent);
export { PrimaryContentSection };
