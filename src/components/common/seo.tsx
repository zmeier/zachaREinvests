import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

interface KeyWordsEdge {
  node: {
    keywords: string[];
  };
}

interface SEOData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
    };
  };
  allDataJson: {
    edges: KeyWordsEdge[];
  };
}

const seoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allDataJson(filter: { keywords: { ne: null } }) {
      edges {
        node {
          keywords
        }
      }
    }
  }
`;

interface SEOProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: [];
}

const SEO: React.SFC<SEOProps> = props => {
  const data: SEOData = useStaticQuery(seoQuery);

  const metaDescription = props.description || data.site.siteMetadata.description;
  let allKeyWords: string[] = [];
  data.allDataJson.edges.map(edge => (allKeyWords = allKeyWords.concat(edge.node.keywords)));

  return (
    <Helmet
      htmlAttributes={{ lang: props.lang }}
      title={props.title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: props.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: props.title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          allKeyWords && allKeyWords.length > 0
            ? {
                name: `keywords`,
                content: allKeyWords.join(`, `),
              }
            : []
        )
        .concat(props.meta ? props.meta : [])}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

export { SEO };
