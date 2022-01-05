import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  TabMenu,
  Welcome,
  Stepper,
  Roles,
  Application,
  Settings,
  User,
  Email,
  Tags,
  Connections
} from './components';
import { CssBaseline } from '@mui/material';
import BasicButtons from './components/Stapper';
function App() {
  return (
    <Router>
      <CssBaseline />
      {/* App js */}
      <Routes>
        <Route path="/" element={<TabMenu />} exact />
        {/* <Route path="/Welcome" element={<Welcome />} /> */}
        <Route path="/help" element={<Welcome />} />
        <Route path="/Stepper" element={<Stepper />} />
        <Route path="/TabMenu" element={<TabMenu />} />
        <Route path="/Application" element={<Application />} />
        <Route path="/Roles" element={<Roles />} />
        <Route path="/User" element={<User />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Tags" element={<Tags />} />
        <Route path="/Connections" element={<Connections />} />
      </Routes>
    </Router>
  );
}

export default App;
