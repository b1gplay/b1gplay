import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Slider, InputNumber } from "antd";
import "antd/dist/antd.css";

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

    total: 0,

    inputValue: 0
  };

  onChange = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value
    });
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
      proPotential
    } = this.state;

    const { inputValue } = this.state;

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <Grid container spacing={0}>
            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Rebounding
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Defence
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Scoring
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Leadership
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Discipline
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Basketball 1.Q
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Energy
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Determination
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Clutch
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <br />
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 20 }}
              >
                Pro-potential
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <br />
              <br />

              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={0}
                    max={10}
                    onChange={this.onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={0}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={inputValue}
                      onChange={this.onChange}
                    />
                  </div>
                </Grid>
              </Grid>
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
