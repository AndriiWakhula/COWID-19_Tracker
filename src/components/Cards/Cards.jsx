import React from "react";
import { Grid } from "@material-ui/core";
import cx from "classnames";
import CardItem from "./CardItem/CardItem";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spaicing={3} justify="center">
        <CardItem
          title={"Confirmed"}
          value={confirmed.value}
          lastUpdate={lastUpdate}
          style={cx(styles.card, styles.infected)}
          descr={"Number of active cases of Covid-19"}
        />
        <CardItem
          title={"Recovered"}
          value={recovered.value}
          lastUpdate={lastUpdate}
          style={cx(styles.card, styles.recovered)}
          descr={"Number of revovered of Covid-19"}
        />
        <CardItem
          title={"Deaths"}
          value={deaths.value}
          lastUpdate={lastUpdate}
          style={cx(styles.card, styles.deaths)}
          descr={"Number deats of Covid-19"}
        />
      </Grid>
    </div>
  );
};

export default Cards;
