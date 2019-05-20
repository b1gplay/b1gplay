import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  button: {
    margin: theme.spacing.unit
  }
});

class OneStar extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/7.jpg"
              className={classes.bigAvatar}
            />
          }
          action={
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Follow
            </Button>
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
          <Typography variant="subheading" gutterBottom align="left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's ...
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing />
      </Card>
    );
  }
}

OneStar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OneStar);
