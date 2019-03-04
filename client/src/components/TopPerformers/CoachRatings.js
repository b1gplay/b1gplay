import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 140
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
});
function CoachRatings(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <Typography variant="h5" gutterBottom align="center" color="primary">
          Coach Ratings
        </Typography>

        <div>
          <br />
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/bb.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="title" gutterBottom align="center">
                      Otim Tony
                    </Typography>
                    <Typography
                      component="p"
                      align="center"
                      color="textSecondary"
                      gutterBottom
                    >
                      @otimtony
                    </Typography>
                    <Typography variant="title" gutterBottom align="center">
                      Power Tigerhead
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/bb.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="title" gutterBottom align="center">
                      Otim Tony
                    </Typography>
                    <Typography
                      component="p"
                      align="center"
                      color="textSecondary"
                      gutterBottom
                    >
                      @otimtony
                    </Typography>
                    <Typography variant="title" gutterBottom align="center">
                      Power Tigerhead
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={4} sm={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/bb.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography variant="title" gutterBottom align="center">
                      Otim Tony
                    </Typography>
                    <Typography
                      component="p"
                      align="center"
                      color="textSecondary"
                      gutterBottom
                    >
                      @otimtony
                    </Typography>
                    <Typography variant="title" gutterBottom align="center">
                      Power Tigerhead
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
}

CoachRatings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoachRatings);
