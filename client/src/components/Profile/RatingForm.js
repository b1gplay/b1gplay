import React from "react";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Slider from "./Slider";

export default function RatingForm() {
  return (
    <div>
      <Grid container spacing={8}>
        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Rebounding
          </Typography>
        </Grid>
        <Grid item xs={9} sm={9}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Defence
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Scoring
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Leadership
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Discipline
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Basketball I.Q
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Energy
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Determination
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Clutch
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="subtitle1"
            gutterBottom
            //style={{ fontSize: "13px" }}
          >
            Pro-potential
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />
          <br />
          <Slider />
        </Grid>

        <Grid item xs={3} sm={3}>
          <br />
          <Typography
            variant="headline"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            Total
          </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
          <br />

          <Typography
            variant="headline"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            30.8
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
