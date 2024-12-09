import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Register from '../pages/Resgister/Register';
// import DashboardPage from '../pages/DashboardPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/dashboard" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
