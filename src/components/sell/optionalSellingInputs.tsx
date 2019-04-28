import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import { StyleRulesCallback, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import React from "react";

const styles: StyleRulesCallback = (theme: Theme) => ({
  formField: {
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    display: "block"
  },
});

export interface OptionalSellingInputsData {
  propertySize?: string;
  roadAccess?: "yes" | "no";
  waterConnection?: "yes" | "no";
  electricalConnection?: "yes" | "no";
  backTaxes?: "yes" | "no";
}

interface OptionalSellingInputsProps extends WithStyles<typeof styles> {
  data: OptionalSellingInputsData;
  disabled: boolean;
  onDataChanged: (name: keyof OptionalSellingInputsData) => (event: React.ChangeEvent<any>) => void;
}

const OptionalSellingInputsComponent: React.SFC<OptionalSellingInputsProps> = props => {
  return (
    <div>
      <FormControl className={props.classes.formField}>
        <FormLabel>Does the property have direct road access?</FormLabel>
        <RadioGroup
          aria-label="Road access"
          name="roadAccess"
          value={props.data.waterConnection}
          onChange={props.onDataChanged("roadAccess")}
          >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          />
        </RadioGroup>
      </FormControl>
      <FormControl className={props.classes.formField}>
        <FormLabel>Property Size</FormLabel>
        <RadioGroup
          aria-label="Property Size"
          name="propertySize"
          value={props.data.propertySize}
          onChange={props.onDataChanged("propertySize")}
          >
          <FormControlLabel value="<1 acre" control={<Radio />} label="<1 acre" />
          <FormControlLabel value="1-5 acres" control={<Radio />} label="1 to 5 acres" />
          <FormControlLabel value="5-15 acres" control={<Radio />} label="5 to 15 acres" />
          <FormControlLabel value="15-30 acres" control={<Radio />} label="15 to 30 acres" />
          <FormControlLabel value=">30 acres" control={<Radio />} label=">30 acres" />
          />
        </RadioGroup>
      </FormControl>
      <FormControl className={props.classes.formField}>
        <FormLabel>Is the property connected to a water supply?</FormLabel>
        <RadioGroup
          aria-label="Water connection"
          name="waterConnection"
          value={props.data.waterConnection}
          onChange={props.onDataChanged("waterConnection")}
          >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          />
        </RadioGroup>
      </FormControl>
      <FormControl className={props.classes.formField}>
        <FormLabel>Is the property connected to the power grid?</FormLabel>
        <RadioGroup
          aria-label="Power grid connection"
          name="electricalConnection"
          value={props.data.electricalConnection}
          onChange={props.onDataChanged("electricalConnection")}
          >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          />
        </RadioGroup>
      </FormControl>
      <FormControl className={props.classes.formField}>
        <FormLabel>Are there back taxes owed on the property?</FormLabel>
        <RadioGroup
          aria-label="Back taxes owed"
          name="backTaxes"
          value={props.data.backTaxes}
          onChange={props.onDataChanged("backTaxes")}
          >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

const OptionalSellingInputs = withStyles(styles)(OptionalSellingInputsComponent);
export { OptionalSellingInputs };
