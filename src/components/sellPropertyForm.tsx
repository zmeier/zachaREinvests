// tslint:disable: no-submodule-imports
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import PlaceIcon from "@material-ui/icons/Place";
import PropTypes from "prop-types";
import React, { FormEvent } from "react";

interface SellPropertyFormProps extends WithStyles<typeof styles> {}

interface SellPropertyFormData {
  ownerName: string;
  propertyAddress: string;
  emailAddress: string;
  phoneNumber: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.gutters(),
      maxWidth: 500,
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
    },
    button: {
      margin: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: "100%",
    },
  });

class SellPropertyForm extends React.Component<SellPropertyFormProps, SellPropertyFormData> {
  constructor(props: SellPropertyFormProps) {
    super(props);
    this.state = { ownerName: "", propertyAddress: "", emailAddress: "", phoneNumber: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name: keyof SellPropertyFormData) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState(({ [name]: event.target.value } as any) as Pick<SellPropertyFormData, keyof SellPropertyFormData>);
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  public render() {
    return (
      <Paper className={this.props.classes.root} elevation={1}>
        <Typography variant="h5" color="primary">
          Get a free offer to buy your land!
        </Typography>
        <form className={this.props.classes.container}>
          <TextField
            id="owner-name"
            label="Owner Name"
            className={this.props.classes.textField}
            value={this.state.ownerName}
            required={true}
            onChange={this.handleChange("ownerName")}
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>,
            }}
          />
          <TextField
            id="email-address"
            label="Email Address"
            type="email"
            className={this.props.classes.textField}
            value={this.state.emailAddress}
            required={true}
            onChange={this.handleChange("emailAddress")}
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
            }}
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            type="phone"
            className={this.props.classes.textField}
            value={this.state.phoneNumber}
            onChange={this.handleChange("phoneNumber")}
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start"><PhoneIcon /></InputAdornment>,
            }}
          />
          <TextField
            id="property-address"
            label="Property Address"
            className={this.props.classes.textField}
            value={this.state.propertyAddress}
            required={true}
            onChange={this.handleChange("propertyAddress")}
            margin="normal"
            InputProps={{
              startAdornment: <InputAdornment position="start"><PlaceIcon /></InputAdornment>,
            }}
          />
          <Button color="primary" className={this.props.classes.button} type="submit">
            Get offer
          </Button>
        </form>
      </Paper>
    );
  }
}

(SellPropertyForm as React.ComponentClass<SellPropertyFormProps>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(SellPropertyForm);
