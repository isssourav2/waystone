import React, { createContext, useReducer } from 'react';
export const TabMenuContext = createContext();

const initialState = {
  TabMenuOpen: 0,
  SubActiveValue: 0,
};

const TabMenuReducer = (state, action) => {
  switch (action.type) {
    case 'Tab1':
      return { TabMenuOpen: 0, SubActiveValue: 0 };
    case 'Tab2':
      return { TabMenuOpen: 1, SubActiveValue: 1 };
    case 'Tab3':
      return { TabMenuOpen: 2, SubActiveValue: 2 };
    default:
      return { TabMenuOpen: -1, SubActiveValue: -1 };
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
