import React, { createContext, useReducer } from 'react';
export const TabMenuContext = createContext();

const initialState = {
  TabMenuOpen: 0,
  SubActiveValue: -1,
  TabMenuSettings: 0,
  TabMenuDataSource: 0,
};

const TabMenuReducer = (state, action) => {
  switch (action.type) {
    case 'Dashboard_Insight':
      return { TabMenuOpen: 0, SubActiveValue: 0 };
    case 'Dashboard_RemedialAction':
      return { TabMenuOpen: 1, SubActiveValue: 1 };
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
      return { TabMenuSettings: 0, SubActiveValue: 9 };
    case 'Settings_User':
      return { TabMenuSettings: 1, SubActiveValue: 10 };
    case 'Settings_Roles':
      return { TabMenuSettings: 2, SubActiveValue: 11 };
    case 'Settings_Tag':
      return { TabMenuSettings: 3, SubActiveValue: 12 };
    case 'DataSource_Source':
      return { TabMenuDataSource: 0, SubActiveValue: 13 };
    case 'DataSource_Connection':
      return { TabMenuDataSource: 1, SubActiveValue: 14 };
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
