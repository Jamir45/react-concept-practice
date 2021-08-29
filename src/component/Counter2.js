import React from "react";
import { useContextData } from "../contextProvider/ContextProvider";

const Counter2 = () => {
  const { state, dispatch } = useContextData();

  return (
    <div>
      <h1>Counter 2: {state.counter2} </h1>
      <p>Increment or decrement by 5</p>
      <button
        disabled={state.counter2 <= 0 && true}
        onClick={() =>
          dispatch({ type: "counter2", value: state.counter2 - 5 })
        }
      >
        Decrement 5
      </button>
      <button
        onClick={() =>
          dispatch({ type: "counter2", value: state.counter2 + 5 })
        }
      >
        Increment 5
      </button>
    </div>
  );
};

export default Counter2;
