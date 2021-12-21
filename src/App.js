import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, DataExtracter } from './components';
import { CssBaseline } from '@mui/material';
function App() {
  return (
    <Router>
      <CssBaseline />
      {/* App js */}
      <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path="/DataExtracter" element={<DataExtracter />} exact />
      </Routes>
    </Router>
  );
}

export default App;
