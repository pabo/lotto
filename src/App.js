import {observer} from 'mobx-react';

import './App.css';
import entries from './entries';
import LottoStore from './LottoStore';

const store = window.lottoStore = LottoStore;

const INDEX_OF_MULTIBALL = 5;

const Entries = observer((props) => {
  const filteredEntries = store.hideNonMatching ? props.entries.filter((entry) => {
    return store.filters.every((filter) => {
      const position = entry.indexOf(filter);
      // filter normal balls
      return filter === "" || (position > -1 && position < INDEX_OF_MULTIBALL);
    }) && 
      // multiball filter
      (!store.multiFilter || store.multiFilter === entry[INDEX_OF_MULTIBALL])
  }) : props.entries; 

  return <div className='entries'>
    <h3>Entries</h3>
    { filteredEntries.length ? 
      filteredEntries.map((entry) => {
       const mainEntry = entry.slice(0, INDEX_OF_MULTIBALL);
       const multi = entry[INDEX_OF_MULTIBALL];
      return <Entry key={entry} numbers={mainEntry} multi={multi} />
    }) :
    <span>(none)</span>
  }
  </div>
});

const Entry = (props) => {
  return <div className="number-cards">
    {props.numbers.map((number) => {
      return <NumberCard key={number} isFilter={props.isFilter} number={number} />
    })}
    {props.multi && <NumberCard isMulti={true} isFilter={props.isFilter} number={props.multi} />}
  </div>
}

const NumberCard = observer((props) => {
  const filterNumber = store.filters.indexOf(props.number);
  const isMultiMatch = store.multiFilter === props.number;
  if (!props.number) {
    return <></>;
  }

  return (
      <div className={`number-card ${props.isMulti ? 'multi': 'number'}`}>
        { props.isFilter && <div
          className='number-x'
          data-value={props.number}
          onClick={(e) => store.handleFilterClick(e, props.isMulti)}>x</div>
        }
        <div
          className={`number-card-inner ${props.isMulti ? `multi ${isMultiMatch ? 'filter-multi' : ''}` : `number filter-${filterNumber}`}`}
          data-value={props.number}
          onClick={(e) => store.handleCardClick(e, props.isMulti)}>
            {props.number}
          </div>
    </div>
    );
});

const SearchForm = observer(() => {
  return <form onSubmit = {store.submitHandler}>
    <input type='text' placeholder="add" onChange={store.changeHandler} value={store.currentFilter} disabled={store.filters.length >= INDEX_OF_MULTIBALL} ></input>
    <input type='button' value='Clear Filters' onClick={store.clearState}></input>
    <input type='checkbox' checked={store.hideNonMatching} onChange={store.handleToggle} />Hide non-matching entries
  </form>
})

const Filters = observer((props) => {
  return <div className='filters'>
    <h3>Filters</h3>
      <Entry isFilter={true} {...props} numbers={[...store.filters]} multi={store.multiFilter} />
      <SearchForm {...props}/>
  </div>
});

const App = () => {
  return (
    <div>
      <h1>The lion does not win lotteries</h1>
      <p>Click on numbers or enter the numbers to filter down the list.</p>
      <p>Click on filters to remove them.</p>
      <Filters />
      <Entries entries={entries}/>
    </div>
  );
};

export default App;