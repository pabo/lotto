import './App.css';
import entries from './entries';
import {useState} from 'react';

const SearchForm = (props) => {
  return <form onSubmit = {props.submitHandler}>
    <input type='text' onChange={props.changeHandler} value={props.filterValue}></input>
    <input type='button' value='Clear Filters' onClick={props.clearHandler}></input>
  </form>
}

const Filters = (props) => {
  return <div className='filters'>
    <h3>Filters</h3>
    {props.numbers.length ?
      <NumberCards handleCardClick={props.handleCardClick} {...props} /> :
      <span>(none)</span>
    }
  </div>
}

const NumberCards = (props) => {
  return <div>
    {props.numbers.map((number) => {
      return <NumberCard {...props}  number={number} />
    })}
  </div>
}

const NumberCard = (props) => {
  const filterNumber = props.filters.indexOf(props.number);

  return (
      <div className='number-card'>
        <div className='number-x' onClick={props.handleCardClick}>x</div>
        <div className={`number filter-${filterNumber}`} onClick={props.handleCardClick}>{props.number}</div>
    </div>
    );
};

const Entries = (props) => {
  const filteredEntries = props.entries.filter((entry) => {
    return props.filters.every((filter) => {
      const [one, two, three, four, five, multiball] = entry;

      return filter === "" || [one, two, three, four, five].includes(filter);
    })
  }) 

  return <div>
    <h3>Entries</h3>
    { filteredEntries.length ? 
      filteredEntries.map((entry) => {
      return <NumberCards {...props} key={entry} numbers={entry}  />
    }) :
    <span>(none)</span>
  }
  </div>
}

const App = () => {
  const [filters, setFilters] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");

  const clearFilters = () => {
    setCurrentFilter("");
    setFilters([]);
  }

  const changeHandler = (e) => {
    setCurrentFilter(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
  
    setFilters(Array.from(new Set([...filters, currentFilter])));
    setCurrentFilter("");
  }

  const handleCardClick = (e) => {
    const value = e.target.classList.contains('number') ?
      e.target.innerText :
      e.target.nextSibling.innerText;

    if (e.target.closest('div.filters')) {
      // clickd on a filter; remove it
      setFilters(filters.filter(x => x !== value))
    }
    else {
      // clicked on non-a-filter, add as filter
      setFilters(Array.from(new Set([...filters, value])));
    }
  }

  return (
    <div>
      <h1>IPU lotto</h1>
      <p>Click on or enter the numbers as they are drawn to filter down the list. Does not filter on the multiplier ball.</p>
      <p>Click on filters to remove them.</p>
      <SearchForm filterValue={currentFilter} clearHandler={clearFilters} changeHandler={changeHandler} submitHandler={submitHandler}/>
      <Filters handleCardClick={handleCardClick} filters={filters} numbers={filters} />
      <Entries handleCardClick={handleCardClick} entries={entries} filters={filters}/>
    </div>
  );
}



export default App;
