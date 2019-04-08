import { createStyles, LinearProgress, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import React, { FormEvent } from "react";

import { CONTACT_US_API_URL, postForm } from "../../api/contactUsApi";

const styles = (theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing.unit,
      display: "flex",
      flexWrap: "wrap",
    },
    submittedContainer: {
      padding: theme.spacing.unit * 2,
    },
    button: {
      margin: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    progress: {
      width: "100%"
    }
  });

interface ContactFormProps extends WithStyles<typeof styles> {}

interface ContactFormData {
  name: string;
  emailAddress: string;
  message: string;
  submitted: "none" | "in_progress" | "submitted";
}

class ContactFormComponent extends React.Component<ContactFormProps, ContactFormData> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = { name: "", emailAddress: "", message: "", submitted: "none" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name: keyof ContactFormData) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState(({ [name]: event.target.value } as any) as Pick<ContactFormData, keyof ContactFormData>);
    };
  }

  handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (this.state.submitted === "in_progress") {
      return;
    }
    const formData = new FormData(formEvent.currentTarget);
    this.setState({ submitted: "in_progress" });
    postForm(formData, CONTACT_US_API_URL)
      .then(() => this.setState({ submitted: "submitted" }))
      .catch(error => {
        console.log(error);
        this.setState({ submitted: "none" });
      });
  }

  public render() {
    if (this.state.submitted === "submitted") {
      return (
        <div className={this.props.classes.submittedContainer}>
          <Typography align="center">
            <CheckIcon nativeColor="green" fontSize="large" />
          </Typography>
          <Typography variant="h5" align="center">
            Thank you for sending us a message!
          </Typography>
          <Typography paragraph={true} align="center">
            We will get back to you as soon as we can. Feel free to give us a call if you need a quicker response. We
            look forward to speaking with you.
          </Typography>
        </div>
      );
    }

    const formDisabled = this.state.submitted !== "none";
    return (
      <form className={this.props.classes.container} onSubmit={this.handleSubmit}>
        <TextField
          id="contact-name"
          name="name"
          label="Name"
          disabled={formDisabled}
          fullWidth={true}
          className={this.props.classes.textField}
          value={this.state.name}
          required={true}
          onChange={this.handleChange("name")}
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="contact-email-address"
          name="email"
          label="Email Address"
          type="email"
          disabled={formDisabled}
          fullWidth={true}
          className={this.props.classes.textField}
          value={this.state.emailAddress}
          required={true}
          onChange={this.handleChange("emailAddress")}
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="contact-message"
          name="message"
          label="Message"
          multiline={true}
          rows="8"
          disabled={formDisabled}
          fullWidth={true}
          className={this.props.classes.textField}
          value={this.state.message}
          required={true}
          onChange={this.handleChange("message")}
          margin="normal"
        />
        <Button color="primary" className={this.props.classes.button} type="submit" disabled={formDisabled}>
          Send
        </Button>
        {this.state.submitted === "in_progress" ? <LinearProgress className={this.props.classes.progress} /> : null}
      </form>
    );
  }
}

const ContactForm = withStyles(styles)(ContactFormComponent);
export { ContactForm };
