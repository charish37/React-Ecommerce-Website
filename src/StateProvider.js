import React, { createContext, useContext, useReducer} from 'react';

//  creates a context to manage and share state across the component tree.
export const StateContext = createContext();

// Sharing context between tree hierarchy
export const StateProvider = ({ reducer,initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
  </StateContext.Provider>
)

// pull the information from the context
export const useStateValue = () => useContext(StateContext);