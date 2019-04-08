import InputAdornment from "@material-ui/core/InputAdornment";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import PlaceIcon from "@material-ui/icons/Place";
import React from "react";

const styles = (theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
  });

export interface PrimarySellingInputsData {
  ownerName?: string;
  propertyAddress?: string;
  emailAddress?: string;
  phoneNumber?: string;
}

interface PrimarySellingInputsProps extends WithStyles<typeof styles> {
  data: PrimarySellingInputsData;
  disabled: boolean;
  onDataChanged: (name: keyof PrimarySellingInputsData) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PrimarySellingInputsComponent: React.SFC<PrimarySellingInputsProps> = props => {
  return (
    <div>
      <TextField
        id="owner-name"
        name="name"
        label="Owner Name"
        disabled={props.disabled}
        fullWidth={true}
        className={props.classes.textField}
        value={props.data.ownerName}
        required={true}
        onChange={props.onDataChanged("ownerName")}
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
        id="email-address"
        name="email"
        label="Email Address"
        type="email"
        disabled={props.disabled}
        fullWidth={true}
        className={props.classes.textField}
        value={props.data.emailAddress}
        required={true}
        onChange={props.onDataChanged("emailAddress")}
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
        id="phone-number"
        name="phone"
        label="Phone Number"
        type="phone"
        disabled={props.disabled}
        fullWidth={true}
        className={props.classes.textField}
        value={props.data.phoneNumber}
        onChange={props.onDataChanged("phoneNumber")}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="property-address"
        name="propertyAddress"
        label="Property Address"
        disabled={props.disabled}
        fullWidth={true}
        className={props.classes.textField}
        value={props.data.propertyAddress}
        required={true}
        onChange={props.onDataChanged("propertyAddress")}
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PlaceIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

const PrimarySellingInputs = withStyles(styles)(PrimarySellingInputsComponent);
export { PrimarySellingInputs };
