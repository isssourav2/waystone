import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Dashboard,
  DataExtracter,
  Stepper,
  TabMenu,
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
        <Route path="/DataExtracter" element={<DataExtracter />} />
        <Route path="/Stepper" element={<Stepper />} />
        <Route path="/TabMenu" element={<TabMenu />} />
        <Route path="/Application" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;
