import { useState } from 'react';

import './App.css';
import SearchBox from './components/Search';
import { Result } from './types';
import Results from './components/Results';
import ToggleSwitch from './components/Toggle';

function App() {

  // State for the search result
  const [results, setResults] : Array<any> = useState();
  const [sortedResults, setSortedResults] : Array<any> = useState();
  const [toggled, setToggled] = useState(false);

  // Function to call the API
  async function callAPI(search: string) {
    const response = await fetch(`https://openlibrary.org/search.json?q=${search}`);
    const data : Result = await response.json();
    setResults(data.docs);
    setSortedResults( [...data.docs].sort((a, b) => a.first_publish_year - b.first_publish_year));
  }
  
  return (
    <div className="container">
       <div className="element"><SearchBox onSearch={callAPI}/></div>
       <div className="element"><ToggleSwitch onToggle={setToggled}/></div>
       <div className="element"><Results books={toggled ? sortedResults : results}/></div>
    </div>
  );
}

export default App;
