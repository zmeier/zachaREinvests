import { Grid, Paper, StyleRulesCallback, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import React from "react";

import { Layout } from "../components/common/layout";
import { SEO } from "../components/common/seo";
import { ContactForm } from "../components/contact/contactForm";
import { ContactUs } from "../components/contact/contactUs";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    maxWidth: 500
  }
});

interface ContactPageProps extends WithStyles<typeof styles> {}

const ContactPage: React.SFC<ContactPageProps> = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Grid container={true} justify="center" alignItems="flex-start" className={props.classes.container}>
        <Grid item={true} xs={12} className={props.classes.container}>
          <Typography variant="h3" align="center">
            We would love to hear from you!
          </Typography>
        </Grid>
        <Grid item={true} lg={4} md={5} sm={6} xs={12}  className={props.classes.container}>
          <Paper className={props.classes.paper}>
            <ContactForm />
          </Paper>
        </Grid>
        <Grid item={true} sm={3} xs={12}  className={props.classes.container}>
          <ContactUs />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withStyles(styles)(ContactPage);
