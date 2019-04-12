import { Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";

const styles = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
  },
});

interface SubmissionReceivedProps extends WithStyles<typeof styles> {}

const SubmissionReceivedComponent: React.SFC<SubmissionReceivedProps> = props => {
  return (
    <div className={props.classes.container}>
      <Typography align="center">
        <CheckIcon nativeColor="green" fontSize="large" />
      </Typography>
      <Typography variant="h5" align="center">
        I have received your submission!
      </Typography>
      <Typography paragraph={true} align="center">
        I look forward to working with you and will get back to you as soon as possible
      </Typography>
    </div>
  );
};

const SubmissionReceived = withStyles(styles)(SubmissionReceivedComponent);
export { SubmissionReceived };
