import { Avatar, Button, CardActions, CardHeader, Icon } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = (theme: Theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.dark,
  },
  card: {
    height: "100%",
  },
  actions: {
    display: "flex",
  },
});

interface HowItWorksCardProps extends WithStyles<typeof styles> {
  title: string;
  body: string;
  icon?: string;
  action?: { link: string; linkLabel: string };
}

const HowItWorksCard: React.SFC<HowItWorksCardProps> = props => {
  let iconAvatar;
  if (props.icon) {
    iconAvatar = (
      <Avatar aria-label="Recipe" className={props.classes.avatar}>
        <Icon>{props.icon}</Icon>
      </Avatar>
    );
  }

  return (
    <Card className={props.classes.card}>
      <CardHeader avatar={iconAvatar} title={props.title} titleTypographyProps={{variant: "h5" }}/>
      <CardContent>
        <Typography color="inherit" component="p">
          {props.body}
        </Typography>
      </CardContent>
      {props.action ? (
        <CardActions className={props.classes.actions} disableActionSpacing={true}>
          <Button href={props.action.link} color="primary">
            {props.action.linkLabel}
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};

export default withStyles(styles)(HowItWorksCard);
