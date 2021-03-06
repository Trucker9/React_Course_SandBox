// we Extract the data we need from store with useSelector. we dont use the whole store.
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../store';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();

  // This function gets the whole state and returns what we are interested in.
  const extractorFn = (state) => {
    return state.counter;
  };
  // Extracting data from store with useSelector and extractorFn.
  // useSelector automatically subscribes this component to the store.
  // by subscribing, whenever the counter (or generally the data) changes in the redux store, the component will be updated with the latest value.
  // Changes to the redux store will cause this component to run again and show the latest counter.
  // if we unmount this component, the subscription will be removed automatically.
  const counterValue = useSelector(extractorFn);

  const showCounter = useSelector((state) => state.showCounter);
  const incHandler = () => {
    dispatch(counterAction.increment());
  };
  const decHandler = () => {
    dispatch(counterAction.decrement);
  };
  const IncreaseHandler = () => {
    // What counterAction.increase(5) return?
    /* {
      type: 'SOME_UNIQUE_ID',
      payload: 'argument of reducer we chose',
    }*/
    dispatch(counterAction.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counterValue} --</div>}
      <div>
        <button onClick={incHandler}>Increment</button>
        <button onClick={IncreaseHandler}>Increase by 5</button>
        <button onClick={decHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
