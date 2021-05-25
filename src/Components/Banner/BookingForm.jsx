// import { Note, Assessment } from "@material-ui/icons";

import React from "react";
import "./BookingForm.css";
import MaterialUIPickers from "./DatePicker";
import SimpleMenu from "./Dropdown";
import SimpleMenuClass from "./Dropdown2";
import ColorTextFields from "./inputbox";
import Checkbox from "@material-ui/core/Checkbox";
import RadioButtonsGroup from "./Checkbox";
import { Button } from "@material-ui/core";

function BookingForm() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="bookingForm">
      <div className="formtop">
        <h4> PNR Status</h4>
        <h4> Charts / Vacancy</h4>
      </div>
      <div className="formMain">
        <h2>Book Ticket</h2>
        <div className="container">
          <div className="container__left">
            <ColorTextFields />
            <SimpleMenu />
          </div>
          <div className="container__right">
            <MaterialUIPickers />
            <SimpleMenuClass />
          </div>
        </div>
        <div className="checkbox">
          <RadioButtonsGroup />
        </div>
      </div>
      <div className="btn">
      <Button className="btn__primary" variant="contained" color="primary">
        Search
      </Button>
      </div>
    </div>
  );
}

export default BookingForm;
