import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PollIcon from "@material-ui/icons/Poll";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import NewStars1 from "../NewStars/NewStars1";
import NewPersonalRating from "../NewRatings/NewPersonalRating";
import Filter from "../NewRatings/Filter";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: "100%"
  }
};

class IconLabelTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <br />
        <Paper square className={classes.root}>
          <br />
          <Typography variant="headline" align="center" color="inherit">
            Personal Ratings
          </Typography>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<PollIcon />} label="RATINGS" />
            <Tab icon={<StarIcon />} label="STARS" />
          </Tabs>
          {value === 0 && (
            <TabContainer>
              <NewPersonalRating />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <Filter />
              <NewStars1 />
            </TabContainer>
          )}
        </Paper>
      </div>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelTabs);
