import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { Slider, InputNumber } from "antd";
import "antd/dist/antd.css";

import { connect } from "react-redux";
import { addRating } from "../../actions/individualRatings";

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

  onChangeRebounding = value => {
    if (isNaN(value)) {
      return;
    }

    this.setState({
      rebounding: value
    });
  };

  onChangeDefence = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      defence: value
    });
  };

  onChangeScoring = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      scoring: value
    });
  };

  onChangeLeadership = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      leadership: value
    });
  };

  onChangeDiscipline = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      discipline: value
    });
  };

  onChangeBasketballIQ = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      basketballIQ: value
    });
  };

  onChangeEnergy = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      energy: value
    });
  };

  onChangeDetermination = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      determination: value
    });
  };

  onChangeClutch = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      clutch: value
    });
  };

  onChangeProPotential = value => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      proPotential: value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    // save newRating data into object
    const newRating = {
      rebounding: this.state.rebounding,
      defence: this.state.defence,
      scoring: this.state.scoring,
      leadership: this.state.leadership,
      discipline: this.state.discipline,
      basketballIQ: this.state.basketballIQ,
      energy: this.state.energy,
      determination: this.state.determination,
      clutch: this.state.clutch,
      proPotential: this.state.proPotential,
      ratedBy: this.props.profileID
    };

    this.props.addRating(newRating);
    //console.log(newRating);

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

    return (
      <Fragment>
        <form onSubmit={this.onSubmit}>
          <br />
          <Grid container spacing={8}>
            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Rebounding
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeRebounding}
                    value={typeof rebounding === "number" ? rebounding : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={rebounding}
                      onChange={this.onChangeRebounding}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Defence
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeDefence}
                    value={typeof defence === "number" ? defence : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={defence}
                      onChange={this.onChangeDefence}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Scoring
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeScoring}
                    value={typeof scoring === "number" ? scoring : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={scoring}
                      onChange={this.onChangeScoring}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Leadership
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeLeadership}
                    value={typeof leadership === "number" ? leadership : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={leadership}
                      onChange={this.onChangeLeadership}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Discipline
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeDiscipline}
                    value={typeof discipline === "number" ? discipline : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={discipline}
                      onChange={this.onChangeDiscipline}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Basketball 1.Q
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeBasketballIQ}
                    value={typeof basketballIQ === "number" ? basketballIQ : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={basketballIQ}
                      onChange={this.onChangeBasketballIQ}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Energy
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeEnergy}
                    value={typeof energy === "number" ? energy : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={energy}
                      onChange={this.onChangeEnergy}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Determination
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeDetermination}
                    value={
                      typeof determination === "number" ? determination : 0
                    }
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={determination}
                      onChange={this.onChangeDetermination}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Clutch
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeClutch}
                    value={typeof clutch === "number" ? clutch : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={clutch}
                      onChange={this.onChangeClutch}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="subtitle1"
                gutterBottom
                style={{ fontWeight: "bold", paddingTop: 1 }}
              >
                Pro-potential
              </Typography>
            </Grid>
            <Grid item xs={9} sm={9}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    min={1}
                    max={10}
                    onChange={this.onChangeProPotential}
                    value={typeof proPotential === "number" ? proPotential : 0}
                    step={0.1}
                  />
                </Grid>
                <Grid item>
                  <div style={{ marginTop: -30 }}>
                    <InputNumber
                      min={1}
                      max={10}
                      style={{ marginLeft: 16 }}
                      step={0.1}
                      value={proPotential}
                      onChange={this.onChangeProPotential}
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Typography
                variant="headline"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Total
              </Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography
                variant="headline"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                {rebounding +
                  defence +
                  scoring +
                  leadership +
                  discipline +
                  basketballIQ +
                  energy +
                  determination +
                  clutch +
                  proPotential}
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
                  fontSize: "18px",
                  background: "#C12424"
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

const mapStateToProps = state => ({
  profileID: state.profile.id
});
export default connect(
  mapStateToProps,
  { addRating }
)(withStyles(styles)(RatingForm));
