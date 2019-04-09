import { LinearProgress, StyleRulesCallback, Theme, Typography, withStyles, WithStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import React, { FormEvent } from "react";

import { CONTACT_US_API_URL, postForm } from "../../api/contactUsApi";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit,
  },
  submittedContainer: {
    padding: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  progress: {
    width: "100%",
  },
});

interface ContactFormProps extends WithStyles<typeof styles> {}

interface ContactFormInputs {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFormState {
  data: ContactFormInputs;
  submitted: "none" | "in_progress" | "submitted";
}

class ContactFormComponent extends React.Component<ContactFormProps, ContactFormState> {
  constructor(props: ContactFormProps) {
    super(props);
    this.state = { data: {}, submitted: "none" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name: keyof ContactFormInputs) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedData: ContactFormInputs = { ...this.state.data };
      updatedData[name] = event.target.value;
      this.setState({ data: updatedData });
    };
  }

  handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (this.state.submitted === "in_progress") {
      return;
    }
    this.setState({ submitted: "in_progress" });
    postForm(this.state.data, CONTACT_US_API_URL)
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
          value={this.state.data.name}
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
          value={this.state.data.email}
          required={true}
          onChange={this.handleChange("email")}
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
          value={this.state.data.message}
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
