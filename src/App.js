import './App.css';
import CompanyDetails from './components/UserSide/UserDashboard/CompanyDetails';
import HallbookingPage from './components/UserSide/UserDashboard/HallbookingPage';
//import UserDashboard from './components/UserSide/UserDashboard/UserDashboard';
import UserNavbar from './components/UserSide/UserNavbar/UserNavbar';
//import Product from './Product';
// useState hook
//import { useState } from 'react';
//import Signup from './components/Auth/Signup/Signup';
//import Login from './components/Auth/Login/Login';

const App = () => {
  return (
    <div className="App">
      <UserNavbar/>
       <HallbookingPage/>
    </div>
  );
}

export default App;
