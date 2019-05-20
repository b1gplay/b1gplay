import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";


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
        <div>
            <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Rebounder
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Scorer
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Defender
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Leader
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Discipline
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Basketball IQ
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Energy
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Determination
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Clutch
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4} sm={4}>
                    <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }}>
                        Pro-potential
                    </Typography>
                    <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/7.jpg"
                                    style={{
                                    width: 50,
                                    height: 50,
                                    border: "5px solid white"
                                }}/>
                            }
                            action={
                              <Fab color="secondary" className={classes.fab} style={{ width: 40, height: 40, marginTop: 10 }}>
                                <Typography variant="h6" gutterBottom color="inherit" >
                                  34
                                </Typography>
                              </Fab>
                            }
                            title="Otim Tony"
                            subheader="@otim.tony"
                        />
                        <CardMedia
                          className={classes.media}
                          image="/static/images/bb.jpg"
                          title="Paella dish"
                        />
                        <CardContent>
                            <Grid container spacing={24}>
                              <Grid item xs={5} sm={5}>
                                <Typography variant="body1" gutterBottom align="left">
                                  Date of birth:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Nationality:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Club:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Country:
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Position:
                                </Typography>
                              </Grid>
                              <Grid item xs={7} sm={7}>
                                <Typography variant="body1" gutterBottom align="left">
                                  12th Dec, 1997
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Ugandan
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Tigerhead
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Uganda
                                </Typography>
                                <Typography variant="body1" gutterBottom align="left">
                                  Point guard
                                </Typography>
                              </Grid>
                            </Grid>
                        </CardContent>
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
