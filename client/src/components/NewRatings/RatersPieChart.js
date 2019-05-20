import React from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import Card from "@material-ui/core/Card";
import PieChart from "highcharts-react-official";
import CardActionArea from "@material-ui/core/CardActionArea";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 100
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

const options = {
  chart: {
    type: "pie"
  },
  title: {
    text: "Raters breakdown"
  },
	plotOptions: {
	  pie: {
	  	dataLabels: {
	  		format: '{point.name}: {point.percentage:.1f} %'
	  	},
	  }
	},
  series: [{
		  name: 'Percentage',
		  colorByPoint: true,
	      data: [
	        {
	          name: 'Coaches',
	          y: 30,
	          color: '#3498db'
	        },
	        {
	          name: 'Players',
	          y: 30,
	          color: '#9b59b6'
	        },
	        {
	          name: 'Media',
	          y: 20,
	          color: '#2ecc71'
	        },
	        {
	          name: 'Fan',
	          y: 10,
	          color: '#f1c40f'
	        },
	        {
	          name: 'Agents',
	          y: 10,
	          color: '#990000'
	        }
	      ]
	    }]
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
	<div>
      <Card>
        <CardActionArea>
        	<PieChart highcharts={Highcharts} options={options} />
        </CardActionArea>
      </Card>
    </div>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);