import React, { createContext, useReducer } from 'react';
export const TabMenuContext = createContext();

const initialState = {
  TabMenuOpen: 0,
  SubActiveValue: -1,
};

const TabMenuReducer = (state, action) => {
  switch (action.type) {
    case 'Dashboard_Insight':
      return { TabMenuOpen: 0, SubActiveValue: 0 };
    case 'Dashboard_RemedialAction':
      return { TabMenuOpen: 1, SubActiveValue: 1 };
    case 'DataSource_Source':
      return { TabMenuOpen: 2, SubActiveValue: 2 };
    case 'DataSource_Connection':
      return { TabMenuOpen: 3, SubActiveValue: 3 };
    case 'JobScheduling_Jobs':
      return { TabMenuOpen: 4, SubActiveValue: 4 };
    case 'JobScheduling_Schedule':
      return { TabMenuOpen: 5, SubActiveValue: 5 };
    case 'JobScheduling_Calender':
      return { TabMenuOpen: 6, SubActiveValue: 6 };
    case 'JobScheduling_Application':
      return { TabMenuOpen: 7, SubActiveValue: 7 };
    case 'JobScheduling_ApplicationTemplate':
      return { TabMenuOpen: 8, SubActiveValue: 8 };
    case 'Settings_Config':
      return { TabMenuOpen: 9, SubActiveValue: 9 };
    case 'Settings_User':
      return { TabMenuOpen: 10, SubActiveValue: 10 };
    case 'Settings_Roles':
      return { TabMenuOpen: 11, SubActiveValue: 11 };
    case 'Settings_Tag':
      return { TabMenuOpen: 12, SubActiveValue: 12 };
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
