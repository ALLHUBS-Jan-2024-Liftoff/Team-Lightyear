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
import SearchPage from "./components/pages/SearchPage";
import Footer from "./components/footer/Footer";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar authenticated={authenticated} />
      <main className="flex-grow-1">
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
              <Route path="/search" element={<SearchPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/logout" element={<LogoutPage setAuthenticated={setAuthenticated} />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </>
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
