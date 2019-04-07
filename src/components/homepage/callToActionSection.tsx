import { Button, Grid, StyleRulesCallback, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

const styles: StyleRulesCallback = (theme: Theme) => ({
  root: {
    textAlign: "center"
  },
  header: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    maxWidth: 500,
    margin: "auto"
  },
});

interface CallToActionSectionProps extends WithStyles<typeof styles> {}

const CallToActionSectionComponent: React.SFC<CallToActionSectionProps> = props => {
  return (
    <div className={props.classes.root}>
      <Typography id="how-it-works" variant="h3" className={props.classes.header}>
        Get started selling your property today
      </Typography>
      <Button variant="contained" color="primary" size="large" href="/sell">
        Get an offer
      </Button>
    </div>
  );
};

const CallToActionSection = withStyles(styles)(CallToActionSectionComponent);
export { CallToActionSection };
