import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PollIcon from "@material-ui/icons/Poll";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Typography from "@material-ui/core/Typography";

import TopPerformers from "../TopPerformers/TopPerformers";

import Home from "../Home/Home";

import HitParade from "../TopHits/HitParade";

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
        <Typography variant="headline" align="center" color="inherit">
          Data Analytics
        </Typography>
        <br />
        <br />
        <Paper square className={classes.root}>
          <br />
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
          >
            <Tab icon={<PollIcon />} label="ALL STARS" />
            <Tab icon={<FavoriteIcon />} label="TOP PERFORMERS" />
            <Tab icon={<FavoriteIcon />} label="TOP HITS" />
          </Tabs>
          {value === 0 && (
            <TabContainer>
              <Home />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <TopPerformers />
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <HitParade />
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
