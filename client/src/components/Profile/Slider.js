import React from "react";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/lab/Slider";
import Input from "@material-ui/core/Input";

export default function InputSlider() {
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div style={{ width: 310 }}>
      <Grid container spacing={8} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <div style={{ marginTop: -30 }}>
            <Input
              style={{ width: 63 }}
              value={value}
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
