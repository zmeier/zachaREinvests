import { Button, Grid, StyleRulesCallback, Theme, Typography, WithStyles, withStyles } from "@material-ui/core";
import { graphql, useStaticQuery } from "gatsby";
import Img, { FixedObject } from "gatsby-image";
import React from "react";

interface AboutQueryData {
  about: {
    excerpt: string;
    frontmatter: {
      title: string;
    };
  };
  aboutPic: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

const aboutQuery = graphql`
  query {
    about: markdownRemark(fileAbsolutePath: {regex: "/.*/about\\.md$/"}) {
      excerpt
      frontmatter {
        title
      }
    },
    aboutPic: file(relativePath: { eq: "self_portrait.png" }) {
      childImageSharp {
        fixed(width: 120) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;

const styles: StyleRulesCallback = (theme: Theme) => ({
  header: {
    textAlign: "center",
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  button: {
    textAlign: "center",
    paddingTop: theme.spacing.unit
  },
});

interface CallToActionSectionProps extends WithStyles<typeof styles> {}

const AboutSectionComponent: React.SFC<CallToActionSectionProps> = props => {
  const data: AboutQueryData = useStaticQuery(aboutQuery);
  return (
    <div className={props.classes.root}>
      <Typography variant="h3" className={props.classes.header}>
        {data.about.frontmatter.title}
      </Typography>
      <Grid container={true} justify="space-evenly" alignItems="center">
        <Grid item={true}>
          <Img className="self-portrait m-auto" fixed={data.aboutPic.childImageSharp.fixed} />
        </Grid>
        <Grid item={true} md={10} xs={12}>
          <div dangerouslySetInnerHTML={{ __html: data.about.excerpt }} />
        </Grid>
        <div className={props.classes.button}>
          <Button color="primary" variant="outlined" size="large" href="/about">
            Learn more about me
          </Button>
        </div>
      </Grid>
    </div>
  );
};

const AboutSection = withStyles(styles)(AboutSectionComponent);
export { AboutSection };
