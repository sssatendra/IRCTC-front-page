import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./Checkbox.css";

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="checkbox">
      <FormControl component="fieldset">
        <FormLabel component="legend"></FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <div className="checkbox__in">
            <FormControlLabel
              value="Divyaang Concession"
              control={<Radio />}
              label="Divyaang Concession"
            />
            <FormControlLabel
              value="Flexible With date"
              control={<Radio />}
              label="Flexible With date"
            />
            <FormControlLabel
              value="Train with Available Berth"
              control={<Radio />}
              label="Train with Available Berth"
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
