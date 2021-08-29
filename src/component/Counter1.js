import React from "react";
import { useContextData } from "../contextProvider/ContextProvider";

const Counter1 = () => {
  const { state, dispatch } = useContextData();

  return (
    <div>
      <h1>Counter 1: {state.counter1} </h1>
      <p>Increment or decrement by 1</p>
      <button
        disabled={state.counter1 <= 0 && true}
        onClick={() =>
          dispatch({ type: "counter1", value: state.counter1 - 1 })
        }
      >
        Decrement 1
      </button>
      <button
        onClick={() =>
          dispatch({ type: "counter1", value: state.counter1 + 1 })
        }
      >
        Increment 1
      </button>
    </div>
  );
};

export default Counter1;
