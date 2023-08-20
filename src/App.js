import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import CreateNewStandard from './Pages/CreateNewStandard';
import Login from './Pages/login';
import Register from './Pages/register';
import EditRelease from './Pages/EditRelease';
import Index from './Pages/Index';
import Support from './Pages/Support';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/create-new-version" element={<CreateNewStandard />} />
          <Route exact path="/edit-release/:id" element={<EditRelease />} />
          <Route exact path="/support" element={<Support />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
