import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Slider from "@material-ui/lab/Slider";
import Input from "@material-ui/core/Input";

const styles = theme => ({});

class RatingForm extends Component {
  state = {
    rebounding: 0,
    defence: 0,
    scoring: 0,
    leadership: 0,
    discipline: 0,
    basketballIQ: 0,
    energy: 0,
    determination: 0,
    clutch: 0,
    proPotential: 0,

    total: 0
  };

  onSliderChangeRebounding = (event, newValue) => {
    this.setState({
      rebounding: Number(newValue)
    });
  };

  onSliderChangeDefence = (event, newValue) => {
    this.setState({
      defence: newValue
    });
  };

  onSliderChangeScoring = (event, newValue) => {
    this.setState({
      scoring: newValue
    });
  };

  onSliderChangeLeadership = (event, newValue) => {
    this.setState({
      leadership: newValue
    });
  };

  onSliderChangeDiscipline = (event, newValue) => {
    this.setState({
      discipline: newValue
    });
  };

  onSliderChangeBasketbalIQ = (event, newValue) => {
    this.setState({
      basketballIQ: newValue
    });
  };

  onSliderChangeEnergy = (event, newValue) => {
    this.setState({
      energy: newValue
    });
  };

  onSliderChangeDetermination = (event, newValue) => {
    this.setState({
      determination: newValue
    });
  };

  onSliderChangeClutch = (event, newValue) => {
    this.setState({
      clutch: newValue
    });
  };

  onSliderChangeProPotential = (event, newValue) => {
    this.setState({
      proPotential: newValue
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]:
        event.target.value === "" ? "" : Number(event.target.value)
    });
  };

  handleBlur = event => {
    if (event.target.name < 0) {
      this.setState({
        [event.target.name]: 0
      });
    } else if (event.target.name > 100) {
      this.setState({
        [event.target.name]: 100
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      rebounding: 0,
      defence: 0,
      scoring: 0,
      leadership: 0,
      discipline: 0,
      basketballIQ: 0,
      energy: 0,
      determination: 0,
      clutch: 0,
      proPotential: 0,
      total: 0
    });
  };

  render() {
    //const { classes } = this.props;
    const {
      rebounding,
      defence,
      scoring,
      leadership,
      discipline,
      basketballIQ,
      energy,
      determination,
      clutch,
      proPotential,
      total
    } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={8}>
            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Rebounding
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof rebounding === "number" ? rebounding : 0}
                      onChange={this.onSliderChangeRebounding}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={rebounding}
                        name="rebounding"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Defence
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof defence === "number" ? defence : 0}
                      onChange={this.onSliderChangeDefence}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={defence}
                        name="defence"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Scoring
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof scoring === "number" ? scoring : 0}
                      onChange={this.onSliderChangeScoring}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={scoring}
                        name="scoring"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Leadership
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof leadership === "number" ? leadership : 0}
                      onChange={this.onSliderChangeLeadership}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={leadership}
                        name="leadership"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Discipline
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof discipline === "number" ? discipline : 0}
                      onChange={this.onSliderChangeDiscipline}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={discipline}
                        name="discipline"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Basketball I.Q
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={
                        typeof basketballIQ === "number" ? basketballIQ : 0
                      }
                      onChange={this.onSliderChangeBasketbalIQ}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={basketballIQ}
                        name="basketballIQ"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Energy
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof energy === "number" ? energy : 0}
                      onChange={this.onSliderChangeEnergy}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={energy}
                        name="energy"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Determination
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={
                        typeof determination === "number" ? determination : 0
                      }
                      onChange={this.onSliderChangeDetermination}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={determination}
                        name="determination"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Clutch
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={typeof clutch === "number" ? clutch : 0}
                      onChange={this.onSliderChangeClutch}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={clutch}
                        name="clutch"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Pro-potential
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />
              <br />
              <div style={{ width: 310 }}>
                <Grid container spacing={8} alignItems="center">
                  <Grid item xs>
                    <Slider
                      value={
                        typeof proPotential === "number" ? proPotential : 0
                      }
                      onChange={this.onSliderChangeProPotential}
                      aria-labelledby="input-slider"
                    />
                  </Grid>
                  <Grid item>
                    <div style={{ marginTop: -30 }}>
                      <Input
                        style={{ width: 63 }}
                        value={proPotential}
                        name="proPotential"
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur}
                        inputProps={{
                          step: 0.0001,
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
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="headline"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Total
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <br />

              <Typography
                variant="headline"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {(rebounding +
                  defence +
                  scoring +
                  leadership +
                  discipline +
                  basketballIQ +
                  energy +
                  determination +
                  clutch +
                  proPotential) /
                  10}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Button
                type="submit"
                variant="contained"
                size="medium"
                color="primary"
                fullWidth
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >
                Rate Player
              </Button>
            </Grid>
          </Grid>
        </form>
      </Fragment>
    );
  }
}

RatingForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RatingForm);
