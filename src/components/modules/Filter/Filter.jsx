import PropTypes from 'prop-types';

import styles from './filter.module.css';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.filterGroup}>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
