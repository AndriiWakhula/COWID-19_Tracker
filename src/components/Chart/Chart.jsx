import React from "react";
import { fetchDailyData } from "../../api/index";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chard = ({ data, country }) => {
  const [dailyData, setDailyData] = React.useState([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

  const monthData = dailyData.slice(dailyData.length - 30, dailyData.length);

  const lineChart = dailyData.length ? (
    <React.Fragment>
      <h1 className={styles.title}>Last Month</h1>
      <Line
        data={{
          labels: monthData.map(({ date }) => date),
          datasets: [
            {
              data: monthData.map(({ confirmed }) => confirmed),
              label: "Ifected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: monthData.map(({ deats }) => deats),
              label: "Deats",
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, .5)",
              fill: true,
            },
          ],
        }}
      />
    </React.Fragment>
  ) : null;

  const barChart = data.confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Cuurent state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chard;
