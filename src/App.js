import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Dashboard,
  Welcome,
  Stepper,
  TabMenu,
  Roles,
  Application,
} from './components';
import { CssBaseline } from '@mui/material';
import BasicButtons from './components/Stapper';
function App() {
  return (
    <Router>
      <CssBaseline />
      {/* App js */}
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        {/* <Route path="/Welcome" element={<Welcome />} /> */}
        <Route path="/help" element={<Welcome />} />
        <Route path="/Stepper" element={<Stepper />} />
        <Route path="/TabMenu" element={<TabMenu />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Roles" element={<Roles />} />
      </Routes>
    </Router>
  );
}

export default App;
