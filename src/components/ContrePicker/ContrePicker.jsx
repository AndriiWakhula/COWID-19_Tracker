import React from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./ContrePicker.module.css";

import { fetchCounries } from "../../api/index";

const ContrePicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = React.useState([]);

  React.useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCounries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value=""> Global</option>
        {fetchedCountries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export default ContrePicker;
