// changing context
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  // destructuring CounterContext.
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Incrementar contador
      </button>
    </div>
  );
};

export default ChangeCounter;
