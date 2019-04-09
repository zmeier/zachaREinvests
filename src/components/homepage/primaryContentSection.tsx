import { Grid, Paper, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

import SellPropertyForm from "../sell/sellPropertyForm";

const styles = (theme: Theme) => ({
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
});

interface PrimaryContentSectionProps extends WithStyles<typeof styles> {}

const PrimaryContentSectionComponent: React.SFC<PrimaryContentSectionProps> = props => {
  return (
    <Grid id="background-image" container={true} className={props.classes.root} justify="center">
      <Grid item={true} md={6}>
        <div style={{ textAlign: "center" }}>
          <Typography color="primary" variant="h3">
            Sell your land quickly!
          </Typography>
          <Typography color="primary" variant="h6">
            I will buy your land without all of the hassle
          </Typography>
        </div>
      </Grid>
      <Grid item={true} md={6}>
        <Paper className={props.classes.paper}>
          <Typography variant="h5" color="primary" align="center">
            Get a free offer to buy your land!
          </Typography>
          <SellPropertyForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

const PrimaryContentSection = withStyles(styles)(PrimaryContentSectionComponent);
export { PrimaryContentSection };
