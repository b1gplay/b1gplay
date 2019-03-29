import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 130
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
        <Typography variant="h5" gutterBottom color="primary">
          Coach Ratings
        </Typography>

        <div>
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
            <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Rebounder
          </Typography>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/bb.jpg"
                    title="Contemplative Reptile"
                  />
                  <Button variant="contained" color="secondary" className={classes.button} style={{ marginLeft: 200, marginTop: -130, borderRadius: 200 }}>
                    <Typography component="h5" variant="h4" style={{ color: "#ffffff" }}>
                    56
                    </Typography>
                  </Button>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/7.jpg"
                    style={{
                    marginLeft: 20,
                    marginTop: -50,
                    width: 70,
                    height: 70,
                    border: "5px solid red"
                    }}
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
            <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Rebounder
          </Typography>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/bb.jpg"
                    title="Contemplative Reptile"
                  />
                  <Button variant="contained" color="secondary" className={classes.button} style={{ marginLeft: 200, marginTop: -130, borderRadius: 200 }}>
                    <Typography component="h5" variant="h4" style={{ color: "#ffffff" }}>
                    56
                    </Typography>
                  </Button>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/7.jpg"
                    style={{
                    marginLeft: 20,
                    marginTop: -50,
                    width: 70,
                    height: 70,
                    border: "5px solid red"
                    }}
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
            <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
              Rebounder
          </Typography>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/bb.jpg"
                    title="Contemplative Reptile"
                  />
                  <Button variant="contained" color="secondary" className={classes.button} style={{ marginLeft: 200, marginTop: -130, borderRadius: 200 }}>
                    <Typography component="h5" variant="h4" style={{ color: "#ffffff" }}>
                    56
                    </Typography>
                  </Button>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/7.jpg"
                    style={{
                    marginLeft: 20,
                    marginTop: -50,
                    width: 70,
                    height: 70,
                    border: "5px solid red"
                    }}
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
