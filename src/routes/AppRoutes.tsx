import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
// import RegisterPage from '../pages/RegisterPage';
// import DashboardPage from '../pages/DashboardPage';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" />
      <Route path="/dashboard" />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
