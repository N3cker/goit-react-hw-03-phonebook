import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <form>
      <label>
        Search:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </label>
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
