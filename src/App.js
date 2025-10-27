import "./App.css";
import "./components/css/theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import CreateNewStandard from "./Pages/CreateNewStandard";
import Login from "./Pages/login";
import Register from "./Pages/register";
import EditRelease from "./Pages/EditRelease";
import Index from "./Pages/Index";
import Support from "./Pages/Support";
import Reports from "./Pages/Reports";
import Account from "./Pages/Account";

function App() {
  return (
    <BrowserRouter basename="/front-music">
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-new-version" element={<CreateNewStandard />} />
          <Route path="/edit-release/:id" element={<EditRelease />} />
          <Route path="/support" element={<Support />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
