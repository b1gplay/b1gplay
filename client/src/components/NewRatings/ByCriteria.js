import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
//import FormControl from "@material-ui/core/FormControl";
//import NativeSelect from "@material-ui/core/NativeSelect";
//import Input from "@material-ui/core/Input";

//import Typography from "@material-ui/core/Typography";

const options = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column"
  },
  title: {
    text: "Ratings by criteria"
  },
  xAxis: {
    categories: ["Criteria"]
  },
  yAxis: {
    label: "Raters"
  },
  series: [
    {
      name: "Rebounding",
      data: [5.23]
    },
    {
      name: "Defence",
      data: [6.23]
    },
    {
      name: "Scoring",
      data: [7.45]
    },
    {
      name: "Leadership",
      data: [7.84]
    },
    {
      name: "Discipline",
      data: [4.85]
    },
    {
      name: "Basketball IQ",
      data: [8.23]
    },
    {
      name: "Energy",
      data: [6.45]
    },
    {
      name: "Determination",
      data: [2.84]
    },
    {
      name: "Cluth",
      data: [1.85]
    },
    {
      name: "Pro Potential",
      data: [9.23]
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

function ByCriteria(props) {
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

ByCriteria.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ByCriteria);
