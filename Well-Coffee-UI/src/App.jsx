import NavigationBar from "./components/navigation/NavigationBar";
import { useState } from "react";
import { Route, 
  Routes, 
  Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AccountPage from "./components/pages/AccountPage";
import OrderPage from "./components/pages/OrderPage";
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
          <Route path="/order" element={<OrderPage />} />
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



  // return (
  //     <nav>
  //       {!authenticated ? (
  //         <>
  //               <NavigationBar /> 
  //               {/* <NavigationRoutes />  */}
  //         </>
  //       ) : (
  //       <>

  //       <Link to="/home">Home</Link>
  //       <Link to="/tutorial">Tutorial</Link>
  //       <Link to="/report">Daily Report</Link>
  //       <Link to="/manage">Manage Employees</Link>
  //       <Link to="/order">Order</Link>
  //       <Link to="/logout">Logout</Link>
  //       </>
  //       )}
  //       <Routes>
  //         {/* Public Routes */}
  //         <Route 
  //         path="/login" 
  //         element={<LoginPage setAuthenticated={setAuthenticated} />} 
  //         />
  //         <Route 
  //         path="tutorial" 
  //         element={<Tutorial />} 
  //         />
  //         <Route 
  //         path="/register" 
  //         element={<Register />} 
  //         />
  //           {/* Private Routes */}
  //           {authenticated ? (
              
  //             <>
  //             <NavigationRoutes />

  //             <Route path="/tutorial" element={<Tutorial />} />
  //             <Route path="/home" element={<HomePage />} />
  //             <Route path="/report" element={<DailyReport />} />
  //             <Route path="/manage" element={<ManageEmployees />} />
  //             <Route path="/order" element={<OrderPage />} />
  //             {/* <NavigationRoutes /> */}

  //               </>
  //           ) : (
              
  //             /* Redirect non-authenticated users to login */

  //             <Route path="*" element={<Navigate to="/login" replace />} />

  //           )}


  //       </Routes>
  //     </nav>
  // );
}

export default App;
