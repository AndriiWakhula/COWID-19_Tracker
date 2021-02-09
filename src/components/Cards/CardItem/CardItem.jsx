import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

const CardItem = ({ value, lastUpdate, title, style, descr }) => {
  return (
    <Grid item component={Card} xs={12} md={3} className={style}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{descr}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CardItem;
