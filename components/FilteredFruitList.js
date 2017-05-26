import React from 'react';

const FilteredFruitList = ({
  fruit,
  currentFilter
}) => {
  const fruitList = !currentFilter ? fruit : fruit.filter(i => i.fruit_type == currentFilter);

  return (
    <ul className="fruit-list">
      {
        fruitList.map((fruit,idx) => (
          <li key={idx}>{fruit.char}</li>
        ))
      }
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
