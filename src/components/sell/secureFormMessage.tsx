import { Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React from "react";

const styles = (theme: Theme) => ({
  container: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
});

interface SecureFormMessageProps extends WithStyles<typeof styles> {}

const SecureFormMessageComponent: React.SFC<SecureFormMessageProps> = props => {
  return (
    <div className={props.classes.container}>
      <Typography variant="caption">
        <LockIcon style={{ height: "1rem" }} /> All information is kept secure
      </Typography>
    </div>
  );
};

const SecureFormMessage = withStyles(styles)(SecureFormMessageComponent);
export { SecureFormMessage };
