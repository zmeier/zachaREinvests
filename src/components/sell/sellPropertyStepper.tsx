import { Paper, Step, StepContent, StepLabel, Stepper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { StyleRulesCallback, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import React, { FormEvent } from "react";

import { OptionalSellingInputs } from "./optionalSellingInputs";
import { PrimarySellingInputs } from "./primarySellingInputs";
import { SellingInputs, SubmissionStatus } from "./sellPropertyForm";
import { SubmissionReceived } from "./submissionReceived";

const styles: StyleRulesCallback = (theme: Theme) => ({
  container: {
    padding: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    width: "100%",
    background: "transparent",
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
  stepContent: {
    padding: theme.spacing.unit,
    margin: "auto",
    maxWidth: 500,
  },
});

interface SellPropertyStepperProps extends WithStyles<typeof styles> {
  data: SellingInputs;
  submissionStatus: SubmissionStatus;
  formDisabled: boolean;
  onDataChanged: (name: keyof SellingInputs) => (event: React.ChangeEvent<any>) => void;
  onSubmit: (formEvent: FormEvent<HTMLFormElement>) => void;
}

interface SellPropertyStepperState {
  inputGroup: "primary" | "optional";
  stepperMode: "horizontal" | "vertical";
}

class SellPropertyStepperComponent extends React.Component<SellPropertyStepperProps, SellPropertyStepperState> {
  private formReference!: HTMLFormElement;

  constructor(props: SellPropertyStepperProps) {
    super(props);
    this.state = {
      inputGroup: "primary",
      stepperMode: "vertical",
    };
    this.handleToOptional = this.handleToOptional.bind(this);
    this.handleToPrimary = this.handleToPrimary.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    const newStepperMode = window.innerWidth <= 960 ? "vertical" : "horizontal";
    if (newStepperMode !== this.state.stepperMode) {
      this.setState({ stepperMode: newStepperMode });
    }
  }

  handleToOptional() {
    if (this.formReference.reportValidity()) {
      this.setState({ inputGroup: "optional" });
    }
  }

  handleToPrimary() {
    this.setState({ inputGroup: "primary" });
  }

  public render() {
    let activeStep;
    if (this.props.submissionStatus === SubmissionStatus.SUBMITTED) {
      activeStep = 2;
    } else if (this.state.inputGroup === "optional") {
      activeStep = 1;
    } else {
      activeStep = 0;
    }

    if (this.state.stepperMode === "vertical") {
      return (
        <form
          ref={(formElem: HTMLFormElement) => (this.formReference = formElem)}
          className={this.props.classes.container}
          onSubmit={this.props.onSubmit}
        >
          <Paper className={this.props.classes.stepContent}>
            <Stepper className={this.props.classes.container} activeStep={activeStep} orientation="vertical">
              <Step>
                <StepLabel>Property Info</StepLabel>
                <StepContent>{this.getPrimaryInputsContent()}</StepContent>
              </Step>
              <Step>
                <StepLabel>Additional Info (Optional)</StepLabel>
                <StepContent>{this.getOptionalInputsContent()}</StepContent>
              </Step>
              <Step completed={activeStep === 2}>
                <StepLabel>Thank you!</StepLabel>
                <StepContent>
                  <SubmissionReceived />
                </StepContent>
              </Step>
            </Stepper>
          </Paper>
        </form>
      );
    }

    return (
      <form
        ref={(formElem: HTMLFormElement) => (this.formReference = formElem)}
        className={this.props.classes.container}
        onSubmit={this.props.onSubmit}
      >
        <Stepper className={this.props.classes.container} activeStep={activeStep} orientation="horizontal">
          <Step>
            <StepLabel>Property Info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Additional Info (Optional)</StepLabel>
          </Step>
          <Step completed={activeStep === 2}>
            <StepLabel>Thank you!</StepLabel>
          </Step>
        </Stepper>
        <Paper className={this.props.classes.stepContent}>
          {activeStep === 0 ? this.getPrimaryInputsContent() : null}
          {activeStep === 1 ? this.getOptionalInputsContent() : null}
          {activeStep === 2 ? <SubmissionReceived /> : null}
        </Paper>
      </form>
    );
  }

  getPrimaryInputsContent() {
    return (
      <>
        <PrimarySellingInputs
          data={this.props.data}
          disabled={this.props.formDisabled}
          onDataChanged={this.props.onDataChanged}
        />
        <div className={this.props.classes.actionsContainer}>
          <div>
            <Button color="primary" onClick={this.handleToOptional} className={this.props.classes.button}>
              Next
            </Button>
          </div>
        </div>
      </>
    );
  }

  getOptionalInputsContent() {
    return (
      <>
        <OptionalSellingInputs
          data={this.props.data}
          disabled={this.props.formDisabled}
          onDataChanged={this.props.onDataChanged}
        />
        <div className={this.props.classes.actionsContainer}>
          <Button onClick={this.handleToPrimary} className={this.props.classes.button}>
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={this.props.classes.button}
            type="submit"
            disabled={this.props.formDisabled}
          >
            Get an offer
          </Button>
        </div>
      </>
    );
  }
}

const SellPropertyStepper = withStyles(styles)(SellPropertyStepperComponent);
export { SellPropertyStepper };
