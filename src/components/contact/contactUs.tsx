import { Typography } from "@material-ui/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

interface ContactData {
  addressQuery: {
    nodes: Array<{ address: { street: string; cityState: string } }>;
  };
  phoneQuery: {
    nodes: Array<{ phoneNumber: { raw: string; pretty: string } }>;
  };
}

const contactQuery = graphql`
  query {
    addressQuery: allDataJson(filter: { address: { street: { ne: null } } }) {
      nodes {
        address {
          street
          cityState
        }
      }
    }
    phoneQuery: allDataJson(filter: { phoneNumber: { raw: { ne: null } } }) {
      nodes {
        phoneNumber {
          raw
          pretty
        }
      }
    }
  }
`;

const ContactUs: React.SFC = () => {
  const { addressQuery, phoneQuery }: ContactData = useStaticQuery(contactQuery);
  let addressElement;
  if (addressQuery.nodes && addressQuery.nodes.length > 0 && addressQuery.nodes[0].address && addressQuery.nodes[0].address.street) {
    addressElement = (
      <div>
        {addressQuery.nodes[0].address.street}
        <br />
        {addressQuery.nodes[0].address.cityState}
      </div>
    );
  }
  let phoneElement;
  if (phoneQuery.nodes && phoneQuery.nodes.length > 0) {
    phoneElement = (
      <div>
        Call: <a href={`tel:${phoneQuery.nodes[0].phoneNumber.raw}`}>{phoneQuery.nodes[0].phoneNumber.pretty}</a>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h5">Contact Me</Typography>
      {addressElement}
      {phoneElement}
    </div>
  );
};

export { ContactUs };
