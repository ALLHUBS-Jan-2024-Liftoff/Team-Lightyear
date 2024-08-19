import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import OrderPage from '../pages/OrderPage';
import ManageEmployees from '../pages/ManageEmployees';
import DailyReport from '../pages/DailyReport';
import Tutorial from '../pages/Tutorial';
import AccountPage from '../pages/AccountPage';
import LogoutPage from '../pages/LogoutPage';
import HomePage from '../pages/HomePage';
import Register from '../pages/Register';

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/manage" element={<ManageEmployees />} />
        <Route path="/report" element={<DailyReport />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </>
  )
}

export default NavigationRoutes