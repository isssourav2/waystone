import { TabMenu, Welcome, Stepper, Settings } from './components';

import { CssBaseline } from '@mui/material';
import OctaApp from './lib/octaApp';

import { BrowserRouter as OldRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom-latest';

const App = () => {
  return (
    <>
      <Router>
        <CssBaseline />
        {/* App js */}
        <Routes>
          <Route path="/help" element={<Welcome />} />
          <Route path="/Stepper" element={<Stepper />} />
          {/* <Route path="/TabMenu" element={<TabMenu />} /> */}

          <Route path="/Settings" element={<Settings />} />

          {/* <Route path="/Connections" element={<Connections />} /> */}
        </Routes>
      </Router>
      <OldRouter>
        <OctaApp />
      </OldRouter>
    </>
  );
};

export default App;
