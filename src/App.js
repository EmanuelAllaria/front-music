import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import CreateNewStandard from './Pages/CreateNewStandard';
import Login from './Pages/login';
import Register from './Pages/register';
import EditRelease from './Pages/EditRelease';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/create-new-version" element={<CreateNewStandard />} />
          <Route path="/edit-release/:id" element={<EditRelease />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
