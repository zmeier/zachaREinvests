import { Grid, StyleRulesCallback, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import { Link } from "gatsby";
import React from "react";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

interface TermsAndConditionsProps extends WithStyles<typeof styles> {}

const TermsAndConditionsComponent: React.SFC<TermsAndConditionsProps> = props => {
  return (
    <Grid container={true} justify="center" className={props.classes.container}>
      <Grid item={true} md={7}>
        <Typography variant="h4">Terms and Conditions ("Terms")</Typography>

        <Typography paragraph={true}>Last updated: April 07, 2019</Typography>

        <Typography paragraph={true}>
          Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the
          https://zachareinvests.com website (the "Service") operated by zachaREI LLC ("us", "we", or "our").
        </Typography>

        <Typography paragraph={true}>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all visitors, users and others who access or use the Service.
        </Typography>

        <Typography paragraph={true}>
          By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
          terms then you may not access the Service. The Terms and Conditions agreement for zachaREI LLC has been created
          with the help of{" "}
          <a href="https://termsfeed.com/terms-conditions/generator/">TermsFeed Terms and Conditions Generator</a>.
        </Typography>

        <Typography variant="h5">Links To Other Web Sites</Typography>

        <Typography paragraph={true}>
          Our Service may contain links to third-party web sites or services that are not owned or controlled by
          zachaREI LLC.
        </Typography>

        <Typography paragraph={true}>
          zachaREI LLC  has no control over, and assumes no responsibility for, the content, privacy policies, or practices
          of any third party web sites or services. You further acknowledge and agree that zachaREI LLC  shall not be
          responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in
          connection with use of or reliance on any such content, goods or services available on or through any such web
          sites or services.
        </Typography>

        <Typography paragraph={true}>
          We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or
          services that you visit.
        </Typography>

        <Typography variant="h5">Termination</Typography>

        <Typography paragraph={true}>
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any
          reason whatsoever, including without limitation if you breach the Terms.
        </Typography>

        <Typography paragraph={true}>
          All provisions of the Terms which by their nature should survive termination shall survive termination,
          including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
          liability.
        </Typography>

        <Typography variant="h5">Governing Law</Typography>

        <Typography paragraph={true}>
          These Terms shall be governed and construed in accordance with the laws of Arizona, United States, without
          regard to its conflict of law provisions.
        </Typography>

        <Typography paragraph={true}>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
          these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our
          Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </Typography>

        <Typography variant="h5">Changes</Typography>

        <Typography paragraph={true}>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes
          a material change will be determined at our sole discretion.
        </Typography>

        <Typography paragraph={true}>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by
          the revised terms. If you do not agree to the new terms, please stop using the Service.
        </Typography>

        <Typography variant="h5">Contact Us</Typography>

        <Typography paragraph={true}>
          If you have any questions about these Terms, please contact us using the information on our{" "}
          <Link to="/contact">Contact Us</Link> page.
        </Typography>
      </Grid>
    </Grid>
  );
};

const TermsAndConditions = withStyles(styles)(TermsAndConditionsComponent);
export { TermsAndConditions };
