import React from "react";
import Highcharts from "highcharts";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import HighchartsReact from "highcharts-react-official";

const options = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column"
  },
  title: {
    text: "Pro-potential"
  },
  xAxis: {
    categories: ["Raters"]
  },
  series: [
    {
      name: "All",
      data: [54.23]
    },
    {
      name: "Coaches",
      data: [86.23]
    },
    {
      name: "Players",
      data: [67.45]
    },
    {
      name: "Fans",
      data: [77.84]
    },
    {
      name: "Media",
      data: [40.85]
    },
    {
      name: "Own",
      data: [78.23]
    }
  ]
};

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
  },
  avatar: {
    margin: 10
  }
});

function ProPotential(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </CardActionArea>
      </Card>
    </div>
  );
}

ProPotential.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProPotential);
