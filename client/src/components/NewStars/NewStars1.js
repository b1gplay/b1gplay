import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { connect } from "react-redux";
import { getIndividualRatings } from "../../actions/individualRatings";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  bigAvatar: {
    width: 60,
    height: 60
  },

  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "19px"
  },
  subheader: {
    fontSize: "16px"
  }
});

class NewStars1 extends Component {
  state = {};

  componentDidMount() {
    this.props.getIndividualRatings();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <br />
        <br />

        <Grid container spacing={24}>
          {this.props.individualRatings.reverse().map(individual => (
            <Grid item lg={4} xs={12} sm={12}>
              <Card className={classes.card}>
                <CardHeader
                  classes={{
                    title: classes.title,
                    subheader: classes.subheader
                  }}
                  avatar={
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/7.jpg"
                      className={classes.bigAvatar}
                    />
                  }
                  action={
                    <Fab color="secondary" className={classes.fab}>
                      <Typography variant="h5" gutterBottom color="inherit">
                        34
                      </Typography>
                    </Fab>
                  }
                  title={individual.firstname + " " + individual.lastname}
                  //subheader={individual.firstname + "." + individual.lastname}
                />
                <CardMedia
                  className={classes.media}
                  image="/static/images/bb.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={6}>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b>Date of birth:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Nationality:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Club:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Country:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Position:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Height:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Wingspan:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Vertical leap:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Time to run 40m:</b>
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        <b> Time to run 100m:</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.birth_date}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.residence_country}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.affiliation}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.residence_country}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.position}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.height}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.wingspan}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.vertical_leap}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.time_to_run_40m}
                      </Typography>
                      <Typography
                        variant="subheading"
                        gutterBottom
                        align="left"
                      >
                        {individual.time_to_run_100m}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Fragment>
    );
  }
}

NewStars1.propTypes = {
  classes: PropTypes.object.isRequired,
  individualRatings: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  individualRatings: state.individualRatings.individualRatings
});

export default connect(
  mapStateToProps,
  { getIndividualRatings }
)(withStyles(styles)(NewStars1));
