import { Grid, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import React from "react";

import SellPropertyForm from "../sell/sellPropertyForm";

const styles = (theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
  },
});

interface PrimaryContentSectionProps extends WithStyles<typeof styles> {}

const PrimaryContentSectionComponent: React.SFC<PrimaryContentSectionProps> = props => {
  return (
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
  );
};

const PrimaryContentSection = withStyles(styles)(PrimaryContentSectionComponent);
export { PrimaryContentSection };
