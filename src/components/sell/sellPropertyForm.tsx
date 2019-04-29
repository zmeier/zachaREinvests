import { LinearProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { StyleRulesCallback, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import React, { FormEvent } from "react";

import { postForm, SELL_API_URL } from "../../api/contactUsApi";
import { OptionalSellingInputsData } from "./optionalSellingInputs";
import { PrimarySellingInputs, PrimarySellingInputsData } from "./primarySellingInputs";
import { SecureFormMessage } from "./secureFormMessage";
import { SellPropertyStepper } from "./sellPropertyStepper";
import { SubmissionReceived } from "./submissionReceived";

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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  progress: {
    width: "100%",
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
});

// tslint:disable-next-line: no-empty-interface
export interface SellingInputs extends PrimarySellingInputsData, OptionalSellingInputsData {}

export enum SubmissionStatus {
  NONE,
  IN_PROGRESS,
  SUBMITTED,
}

interface SellPropertyFormProps extends WithStyles<typeof styles> {
  useSimpleForm?: boolean;
}

interface SellPropertyFormData {
  data: SellingInputs;
  inputGroup: "primary" | "optional";
  submitted: SubmissionStatus;
}

class SellPropertyFormComponent extends React.Component<SellPropertyFormProps, SellPropertyFormData> {
  constructor(props: SellPropertyFormProps) {
    super(props);
    this.state = {
      data: {},
      submitted: SubmissionStatus.NONE,
      inputGroup: "primary",
    };
    this.handleDataChanged = this.handleDataChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDataChanged(name: keyof SellingInputs) {
    return (event: React.ChangeEvent<any>) => {
      const updatedData: SellingInputs = { ...this.state.data };
      updatedData[name] = event.target.value;
      this.setState({ data: updatedData });
    };
  }

  handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    if (this.state.submitted === SubmissionStatus.IN_PROGRESS) {
      return;
    }
    this.setState({ submitted: SubmissionStatus.IN_PROGRESS });
    postForm(this.state.data, SELL_API_URL)
      .then(() => this.setState({ submitted: SubmissionStatus.SUBMITTED }))
      .catch(error => {
        console.log(error);
        this.setState({ submitted: SubmissionStatus.NONE });
      });
  }

  public render() {
    const formDisabled = this.state.submitted !== SubmissionStatus.NONE;
    if (!this.props.useSimpleForm) {
      return (
          <SellPropertyStepper
            data={this.state.data}
            submissionStatus={this.state.submitted}
            formDisabled={formDisabled}
            onDataChanged={this.handleDataChanged}
            onSubmit={this.handleSubmit}
          />
      );
    }

    if (this.state.submitted === SubmissionStatus.SUBMITTED) {
      return (
        <SubmissionReceived />
      );
    }

    return (
      <form className={this.props.classes.container} onSubmit={this.handleSubmit}>
        <SecureFormMessage />
        <PrimarySellingInputs data={this.state.data} disabled={formDisabled} onDataChanged={this.handleDataChanged} />
        <Button color="primary" className={this.props.classes.button} type="submit" disabled={formDisabled}>
          Get an offer
        </Button>
        {this.state.submitted === SubmissionStatus.IN_PROGRESS ? <LinearProgress className={this.props.classes.progress} /> : null}
      </form>
    );
  }
}

const SellPropertyForm = withStyles(styles)(SellPropertyFormComponent);
export { SellPropertyForm };
