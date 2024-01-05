import {
    React,
    // Component,
    useState,
    useEffect,
    useRef,
} from "react";

// class List extends Component {
//     state = {
//         numbers: [1, 2, 3],
//     };

//     addRandomNumber = () => {
//         const randomNum = Math.round(Math.random() * 10);
//         this.setState({
//             numbers: [...this.state.numbers, randomNum]
//         })
//     };

//     componentDidMount(){
//         console.log("Component mounted")
//     }

//     componentDidUpdate(prevProps, prevState){
//         console.log(prevProps, prevState);
//     }

//     componentWillUnmount(){
//         console.log("Component will unmount");
//     }

//     render() {
//         return (
//             <>
//                 <ul>
//                     {this.state.numbers.map((item, index) => {
//                         return <li key={index}>{item}</li>;
//                     })}
//                 </ul>

//                 <button onClick={this.addRandomNumber}>New number</button>
//             </>
//         );
//     }
// }

const List = () => {
    const [items, setItems] = useState([1, 2, 3]);
    const [count, setCount] = useState(0);
    const timerRef = useRef();

    const addNumber = () => {
        const randomNum = Math.round(Math.random() * 10);
        setItems((items) => [...items, randomNum]);
    };

    useEffect(() => {
        console.log("counter was updated");
    }, [count]);

    useEffect(() => {
        console.log("items list was updated");
    }, [items]);

    useEffect(() => {
        console.log("component was updated");
    });

    useEffect(() => {
        console.log("Component did mount");
        return () => {
            console.log("Component did unmount");
        };
    }, []);

    const start = () => {
        timerRef.current = setInterval(addNumber, 1000);
    };

    const stop = () => {
        clearInterval(timerRef.current);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ul>
                {items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <div className="buttons">
                <button onClick={addNumber}>New number</button>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
            </div>
        </>
    );
};

export default List;
