import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
//import MoreVertIcon from "@material-ui/icons/MoreVert";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
//import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10
  },
  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "24px",
    textAlign: "center"
  }
});

class PersonalInfo extends Component {
  state = {};

  componentDidMount() {
    this.props.getProfile();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              title: classes.title
            }}
            action={
              <IconButton>
                <PersonAddIcon />
              </IconButton>
            }
            title="Personal Info"
          />

          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={5} sm={5}>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Date of birth:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Position:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Height:
                </Typography>

                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Wingspan:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Vertical leap:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Time to run 40m:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Time to run 100m:
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.birth_date}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.position}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.height}
                </Typography>

                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.wingspan}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.vertical_leap}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.time_to_run_40m}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.time_to_run_100m}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography variant="title" gutterBottom align="center">
                  Affiliation
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5}>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Club:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Country:
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.affiliation}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.residence_country}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(withStyles(styles)(PersonalInfo));
