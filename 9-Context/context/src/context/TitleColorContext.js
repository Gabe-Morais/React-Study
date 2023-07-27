import { createContext, useReducer } from "react";
// Exporting the context
export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
  // every reducer has an action
  switch (action.type) {
    case "RED":
      // returns all data in state and change
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

// exporting the Provider
export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  console.log("Title Color Context:", state);

  return (
    // spread operator to send all properties inside DISPATCH
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
