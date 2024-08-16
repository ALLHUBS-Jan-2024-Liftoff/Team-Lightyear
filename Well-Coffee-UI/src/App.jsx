import NavigationBar from "./components/navigation/NavigationBar";
import NavigationRoutes from "./components/navigation/NavigationRoutes";
import { useState } from "react";
import { BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import Tutorial from "./components/pages/Tutorial";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
      <nav>
        {!authenticated ? (
          <>
                <NavigationBar />
                <NavigationRoutes />
          </>
        ) : (
        <>
        <Link to="/home">Home</Link>
        <Link to="/tutorial">Tutorial</Link>
        <Link to="/report">Daily Report</Link>
        <Link to="/manage">Manage Employees</Link>
        <Link to="/order">Order</Link>
        <Link to="/logout">Logout</Link>
        </>
        )}
        <Routes>
          {/* Public Routes */}
          <Route 
          path="/login" 
          element={<LoginPage setAuthenticated={setAuthenticated} />} 
          />
          <Route 
          path="tutorial" 
          element={<Tutorial />} 
          />
            {/* Private Routes */}
            {authenticated ? (
              <>
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/report" element={<DailyReport />} />
              <Route path="/manage" element={<ManageEmployees />} />
              <Route path="/order" element={<OrderPage />} />
                </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />

            )}


        </Routes>
      </nav>
  );
}

export default App;
