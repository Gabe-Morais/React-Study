// import createContext
import { createContext, useState } from "react";

// Exportanto context
export const CounterContext = createContext();

// Criar Provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContextProvider value={{ counter, setCounter }}>
      {children}
    </CounterContextProvider>
  );
};
