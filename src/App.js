import { ContextProvider } from "./contextProvider/ContextProvider";
import Counter1 from "./component/Counter1";
import Counter2 from "./component/Counter2";

function App() {
  return (
    <ContextProvider>
      <Counter1 />
      <Counter2 />
    </ContextProvider>
  );
}

export default App;
