import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrePicker from "./components/ContrePicker/ContrePicker";

import { fetchData } from "./api/";

import styles from "./App.module.css";

import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} />
        <Cards data={data} />
        <CountrePicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
