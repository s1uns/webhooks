import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import List from "./List";
import Count from "./Count";
import IsFive from "./IsFive";

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // const [visibleList, setVisibleList] = useState(true);

    // const toggleList = () =>{
    //   setVisibleList(visible => !visible);
    // }

    // return (
    //   <div className="App">
    //       {visibleList && <List/>}
    //       <button onClick={toggleList}>Hide/Show list</button>
    //   </div>
    // );

    return (
        <>
            <h5>Counter 1:</h5>
            <div className="counter">
                <Count id={1} value={count1} />
                <button onClick={() => setCount1((count1) => count1 + 1)}>
                    +
                </button>
            </div>

            <h5>Counter 2:</h5>
            <div className="counter">
                <Count id={2} value={count2} />
                <IsFive value={count2} />
                <button onClick={() => setCount2((count2) => count2 + 1)}>
                    +
                </button>
            </div>
        </>
    );
}

export default App;
