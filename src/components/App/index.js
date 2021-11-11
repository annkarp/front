import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';
import { Signup } from '../Signup';
import { Login } from '../Login';
import { Dashboard } from '../Dashboard';
import '../../services';
import './index.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
