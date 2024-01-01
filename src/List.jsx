import React, {useState} from "react";

const List = () => {
    const [items, setItems] = useState([1, 2, 3]);

    const addNumber = () =>{
      const randomNum = Math.round(Math.random() * 10);
      setItems([...items, randomNum]);
    }

    return (
        <>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>

            <button onClick={addNumber}>New number</button>
        </>
    );
}

export default List