import { createContext, useContext, useReducer } from "react";

// creating context
const DataContext = createContext();
export const useContextData = () => useContext(DataContext);

// creating context provider
export const ContextProvider = ({ children }) => {
  const contexts = Contexts();
  return (
    <DataContext.Provider value={contexts}>{children}</DataContext.Provider>
  );
};

function Contexts() {
  const initialState = {
    counter1: 0,
    counter2: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "counter1":
        return { ...state, counter1: action.value };
      case "counter2":
        return { ...state, counter2: action.value };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
}

export default Contexts;
