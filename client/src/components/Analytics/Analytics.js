import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";

import Typography from "@material-ui/core/Typography";

import NewStars1 from "../NewStars/NewStars1";
import Home from "../Home/Home";

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class Analytics extends React.Component {
  state = {
    value: 1
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <br />
        <Typography variant="h4" align="center" gutterBottom>
          Data Analytics
        </Typography>
        <br />
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Female Stars" icon={<PhoneIcon />} />
            <Tab label="Map" icon={<FavoriteIcon />} />
            <Tab label="Male Stars" icon={<PersonPinIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <NewStars1 />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Home />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <NewStars1 />
          </TabContainer>
        )}
      </div>
    );
  }
}

Analytics.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Analytics);
