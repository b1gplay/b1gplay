import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "../Layout/Header";
//import Typography from "@material-ui/core/Typography";

const elasticsearch = require("elasticsearch");
const client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace"
  //apiVersion: "7.4" // use the same version of your Elasticsearch instance
});

const styles = {
  root: {
    flexGrow: 1,
    maxWidth: "100%"
  }
};

class AnalyticsEngine extends Component {
  state = {};

  componentDidMount() {
    const response = client.search({
      index: "b1gplay",
      type: "ratings",
      body: {
        //size: 0,
        query: {
          match_all: {}
        }
      }
    });

    console.log(response);
  }

  render() {
    //const { classes } = this.props;
    //const { value } = this.state;

    return (
      <div>
        <Header />
      </div>
    );
  }
}

AnalyticsEngine.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AnalyticsEngine);
