import './App.css';
import entries from './entries';
import {useState} from 'react';



const Filters = (props) => {
  return <div>
    Filters:
    {props.filters.join(", ")}
  </div>
}

const SearchForm = (props) => {
  return <form onSubmit = {props.submitHandler}>
    <input type='text' onChange={props.changeHandler} value={props.filterValue}></input>
    <input type='button' value='Clear Filters' onClick={props.clearHandler}></input>
  </form>
}

const Entry = (props) => {
  return <tr>
    {props.numbers.map((number) => {
      return <td>{number}</td>
    })}
  </tr>
}

const Entries = (props) => {

  const filteredEntries = props.entries.filter((entry) => {
    console.log("filters are", props.filters)
    return props.filters.every((filter) => {
      console.log("checking entry", entry);
      console.log("with filter", filter);
      const [one, two, three, four, five, multiball] = entry;

      return filter === "" || [one, two, three, four, five].includes(filter);
    })
  }) 

  return <table>
    <tbody>
    {filteredEntries.map((entry) => {
      return <Entry key={entry} numbers={entry} />
    })}
    </tbody>
  </table>
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
  
    setFilters([...filters, currentFilter]);
    setCurrentFilter("");
  }

  return (
    <div>
      <h1>IPU lotto</h1>
      <p>Enter the numbers as they are drawn to filter down the list. Does not filter on the multiplier ball.</p>
      <SearchForm filterValue={currentFilter} clearHandler={clearFilters} changeHandler={changeHandler} submitHandler={submitHandler}/>
      <Entries entries={entries} filters={[...filters, currentFilter]}/>
      <Filters filters={filters} currentFilter={currentFilter}/>
    </div>
  );
}



export default App;
