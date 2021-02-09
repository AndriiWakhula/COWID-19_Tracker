import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableURL = url;

  if (country) {
    changeableURL = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableURL);

    const modifieldData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifieldData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifieldData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deats: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifieldData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCounries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
