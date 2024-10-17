import PropTypes from "prop-types";

import styles from "./CountryItem.module.css";

function CountryItem({ country, flagemojiToPNG }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.object,
  flagemojiToPNG: PropTypes.func,
};

export default CountryItem;
