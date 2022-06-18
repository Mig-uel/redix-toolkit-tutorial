import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "./store/counter";

function App() {
  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const onClickIncreaseHandler = () => {
    dispatch(increment())
  }

  const onClickDecreaseHandler = () => {
    dispatch(decrement())
  }

  const onClickAmountHandler = () => {
    dispatch(incrementByAmount(30))
  }

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={onClickIncreaseHandler}>Increase</button>
      <button onClick={onClickDecreaseHandler}>Decrease</button>
      <button onClick={onClickAmountHandler}>Increment by 30</button>
    </div >
  );
}

export default App;
