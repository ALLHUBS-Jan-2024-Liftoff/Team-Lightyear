import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import OrderPage from '../pages/OrderPage';
import ManageEmployees from '../pages/ManageEmployees';
import DailyReport from '../pages/DailyReport';
import Tutorial from '../pages/Tutorial';
import AccountPage from '../pages/AccountPage';
import LogoutPage from '../pages/LogoutPage';

const NavigationRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/manage" element={<ManageEmployees />} />
        <Route path="/report" element={<DailyReport />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
    </>
  )
}

export default NavigationRoutes