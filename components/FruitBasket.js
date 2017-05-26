import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({
  fruit,
  filters,
  currentFilter,
  updateFilterCallback
}) => (
  <div className="fruit-basket">
    <Filter
      handleChange={updateFilterCallback}
      filters={filters}
    />
    <FilteredFruitList
      fruit={fruit}
      filter={currentFilter}
    />
  </div>
);

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

module.exports = FruitBasket;
