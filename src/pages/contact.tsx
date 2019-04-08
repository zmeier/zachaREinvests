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
});

interface ContactPageProps extends WithStyles<typeof styles> {}

const ContactPage: React.SFC<ContactPageProps> = props => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Grid container={true} justify="center" alignItems="flex-start" className={props.classes.container} spacing={40}>
        <Grid item={true} xs={10}>
          <Typography variant="h4" align="center">
            We would love to hear from you!
          </Typography>
        </Grid>
        <Grid item={true} lg={4} md={5} sm={6} xs={10}>
          <Paper>
            <ContactForm />
          </Paper>
        </Grid>
        <Grid item={true} sm={3} xs={10}>
          <ContactUs />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default withStyles(styles)(ContactPage);
