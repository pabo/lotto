import {observer} from 'mobx-react';

import './App.css';
import entries from './entries';
import LottoStore from './LottoStore';

const store = window.lottoStore = LottoStore;

const Entries = (props) => {
  const filteredEntries = props.entries.filter((entry) => {
    return store.filters.every((filter) => {
      const position = entry.indexOf(filter);
      // only filter on first 5 (exclude multiball)
      return filter === "" || (position > -1 && position < 5);
    })
  }) 

  return <div className='entries'>
    <h3>Entries</h3>
    { filteredEntries.length ? 
      filteredEntries.map((entry) => {
      return <Entry key={entry} numbers={entry} />
    }) :
    <span>(none)</span>
  }
  </div>
}

const Entry = (props) => {
  return <div className="number-cards">
    {props.numbers.map((number) => {
      return <NumberCard number={number} />
    })}
  </div>
}

const NumberCard = (props) => {
  const filterNumber = store.filters.indexOf(props.number);

  return (
      <div className='number-card'>
        <div className='number-x' onClick={store.handleCardClick}>x</div>
        <div className={`number filter-${filterNumber}`} onClick={store.handleCardClick}>{props.number}</div>
    </div>
    );
};

const SearchForm = (props) => {
  return <form onSubmit = {store.submitHandler}>
    <input type='text' placeholder="add" onChange={store.changeHandler} value={props.filterValue}></input>
    <input type='button' value='Clear Filters' onClick={store.clearHandler}></input>
  </form>
}

const Filters = (props) => {
  return <div className='filters'>
    <h3>Filters</h3>
      <Entry {...props} />
      <SearchForm {...props}/>
  </div>
}

const App = observer(() => {
  return (
    <div>
      <h1>IPU lotto</h1>
      <p>Click on or enter the numbers as they are drawn to filter down the list. Does not filter on the multiplier ball.</p>
      <p>Click on filters to remove them.</p>
      <Filters
        filterValue={store.currentFilter}
        numbers={[...store.filters]}
        />
      <Entries entries={entries}/>
    </div>
  );
});

export default App;