import { LinearProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import React, { FormEvent } from "react";

import { postForm, SELL_API_URL } from "../../api/contactUsApi";
import { PrimarySellingInputs, PrimarySellingInputsData } from "./primarySellingInputs";

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
      width: "100%",
    },
  });

// tslint:disable-next-line: no-empty-interface
export interface SellingInputs extends PrimarySellingInputsData {}

interface SellPropertyFormProps extends WithStyles<typeof styles> {}

interface SellPropertyFormData {
  data: SellingInputs;
  submitted: "none" | "in_progress" | "submitted";
}

class SellPropertyForm extends React.Component<SellPropertyFormProps, SellPropertyFormData> {
  constructor(props: SellPropertyFormProps) {
    super(props);
    this.state = {
      data: {},
      submitted: "none",
    };
    this.handleDataChanged = this.handleDataChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDataChanged(name: keyof SellingInputs) {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const updatedData: SellingInputs = { ...this.state.data };
      updatedData[name] = event.target.value;
      this.setState({ data: updatedData });
    };
  }

  handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (this.state.submitted === "in_progress") {
      return;
    }
    const formData = this.getDataAsFormData();
    this.setState({ submitted: "in_progress" });
    postForm(formData, SELL_API_URL)
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
            We have received your submission!
          </Typography>

          <Typography paragraph={true} align="center">
            We look forward to working with you and will get back to you as soon as possible
          </Typography>
        </div>
      );
    }

    const formDisabled = this.state.submitted !== "none";
    return (
      <form className={this.props.classes.container} onSubmit={this.handleSubmit}>
        <PrimarySellingInputs
          data={this.state.data}
          disabled={formDisabled}
          onDataChanged={this.handleDataChanged}
        />
        <Button color="primary" className={this.props.classes.button} type="submit" disabled={formDisabled}>
          Get an offer
        </Button>
        {this.state.submitted === "in_progress" ? <LinearProgress className={this.props.classes.progress} /> : null}
      </form>
    );
  }

  getDataOrDefault(dataName: keyof SellingInputs, defaultValue: string): string {
    if (this.state.data[dataName]) {
      return this.state.data[dataName] as string;
    }
    return defaultValue;
  }

  getDataAsFormData(): FormData {
    const formData = new FormData();
    formData.append("name", this.getDataOrDefault("ownerName", ""));
    formData.append("email", this.getDataOrDefault("emailAddress", ""));
    formData.append("phone", this.getDataOrDefault("phoneNumber", ""));
    formData.append("propertyAddress", this.getDataOrDefault("propertyAddress", ""));
    return formData;
  }
}

export default withStyles(styles)(SellPropertyForm);
