import React, { createContext, useReducer } from 'react';
export const TabMenuContext = createContext();

const initialState = {
  TabMenuOpen: -1,
};

const TabMenuReducer = (state, action) => {
  switch (action.type) {
    case 'Tab1':
      return { TabMenuOpen: 0 };
    case 'Tab2':
      return { TabMenuOpen: 1 };
    case 'Tab3':
      return { TabMenuOpen: 2 };
    default:
      return { TabMenuOpen: -1 };
  }
};

export function TabMenuProvider(props) {
  const [state, dispatch] = useReducer(TabMenuReducer, initialState);

  return (
    <TabMenuContext.Provider value={{ state, dispatch }}>
      {props.children}
    </TabMenuContext.Provider>
  );
}
