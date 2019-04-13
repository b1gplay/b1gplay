import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  media: {
    height: 340
  },

  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class Ratings extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    return (
      <Grid item xs={12}>
        <Paper className={classes.root} elevation={1}>
          <Grid container justify="center" alignItems="center" />
          <div>
            <br />
            <Grid container spacing={24}>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Rater
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5}>
                <Button
                  aria-owns={anchorEl ? "simple-menu" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  style={{ marginBottom: "5px" }}
                >
                  <Typography
                    variant="title"
                    gutterBottom
                    style={{ fontSize: "13px" }}
                  >
                    Select Raters
                  </Typography>
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>All</MenuItem>
                  <MenuItem onClick={this.handleClose}>Coaches</MenuItem>
                  <MenuItem onClick={this.handleClose}>Players</MenuItem>
                  <MenuItem onClick={this.handleClose}>Fans</MenuItem>
                  <MenuItem onClick={this.handleClose}>Scourts</MenuItem>
                  <MenuItem onClick={this.handleClose}>Media</MenuItem>
                  <MenuItem onClick={this.handleClose}>Agents</MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </div>
          <Divider />
          <Grid container justify="center" alignItems="center" />
          <div>
            <br />
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Rebounding
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  2
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Defence
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
                <span
                  class="fas fa-basketball-ball"
                  style={{ margin: "1px" }}
                />
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  8
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Scoring
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  3
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Leadership
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  6
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Discipline
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  2
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Basketball IQ
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  3
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Energy
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  9
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Determination
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  7
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Cluth
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  6
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Pro-potential
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Ratings
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  4
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <Grid container spacing={24}>
              <Grid item xs={10} sm={10}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  Total
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2}>
                <Typography
                  variant="title"
                  gutterBottom
                  style={{ fontSize: "13px" }}
                >
                  45.58
                </Typography>
              </Grid>
            </Grid>
          </div>
          <div>
            <br />
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <Grid container justify="center" alignItems="center" />
                <div>
                  <br />
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Rebounding
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        2
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Defence
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        8
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Scoring
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        3
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Leadership
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        6
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Discipline
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        2
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Basketball IQ
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        3
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Energy
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        9
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Determination
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        7
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Cluth
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        6
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={4} sm={4}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Pro-potential
                      </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        Following
                      </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1}>
                      <Typography
                        variant="title"
                        gutterBottom
                        style={{ fontSize: "13px" }}
                      >
                        4
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={24}>
                    <Grid item xs={7} sm={7} />
                    <Grid item xs={5} sm={5}>
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        className={classes.margin}
                        onClick={this.handleOpen}
                        style={{ backgroundColor: "#D23E58" }}
                      >
                        Rate Player
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Modal>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.margin}
              onClick={this.handleOpen}
              style={{ backgroundColor: "#D23E58" }}
            >
              Rate Player
            </Button>
          </div>
        </Paper>
      </Grid>
    );
  }
}

Ratings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ratings);
