import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import CreateNewStandard from './Pages/CreateNewStandard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/create-new-standard" element={<CreateNewStandard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
