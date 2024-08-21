import NavigationBar from "./components/navigation/NavigationBar";
import { useState } from "react";
import { Route, 
  Routes, 
  Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AccountPage from "./components/pages/AccountPage";
import OrderFormPage from "./components/orderForm/OrderFormPage";
import ManageEmployees from "./components/pages/ManageEmployees";
import DailyReport from "./components/pages/DailyReport";
import Tutorial from "./components/pages/Tutorial";
import LoginPage from "./components/pages/LoginPage";
import Register from "./components/pages/Register";
import LogoutPage from "./components/pages/LogoutPage";



function App() {

  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
    <NavigationBar authenticated={authenticated} />
    <Routes>
      {!authenticated ? (
        <>
        <Route path="/login" element={<LoginPage setAuthenticated={setAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/home" element={<HomePage />} />
          <Route path="/order" element={<OrderFormPage />} />
          <Route path="/manage" element={<ManageEmployees />} />
          <Route path="/report" element={<DailyReport />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/logout" element={<LogoutPage setAuthenticated={setAuthenticated} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </>
      )}

    </Routes>
    </>
  )



  
}

export default App;
