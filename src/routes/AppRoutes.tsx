import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Resgister/Register';
import ForgotPassword from '../pages/ForgotPassword';
import PrivateRoute from './PrivateRoutes';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route 
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
