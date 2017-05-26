import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    }

    this.fetchFilters = this.fetchFilters.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this);
  }

  componentWillMount(){
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters(){
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit }));
  }

  updateFilter(ev){
    this.setState({ currentFilter: ev.target.value });
  }

  render(){
    const { fruit, filters, currentFilter } = this.state;
    return (
      <FruitBasket
        fruit={fruit}
        filters={filters}
        currentFilter={currentFilter}
        updateFilterCallback={this.updateFilter}
      />
    );
  }
}
