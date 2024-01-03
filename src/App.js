import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import List from './List'

function App() {
  const [visibleList, setVisibleList] = useState(true);

  const toggleList = () =>{
    setVisibleList(visible => !visible);
  }

  return (
    <div className="App">
        {visibleList && <List/>}
        <button onClick={toggleList}>Hide/Show list</button>
    </div>
  );
}

export default App;
