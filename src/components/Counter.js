import { useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
    // We need to pass a function to useSelector.
    // A function which will be executed by a React Redux,
    // a function which then basically determines which piece
    // of data we wanna extract from our store.
    const counter = useSelector((state) => state.counter);

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
