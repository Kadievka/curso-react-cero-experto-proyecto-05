import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

const AppRouter = () => {
  return (
    <Router>
      <div>

        <NavBar />
        <div className="container" data-testid="app-router-container">
          <Routes>

            <Route path="/" element={ <HomeScreen /> } />

            <Route path="/about" element={ <AboutScreen /> } />

            <Route path="/login" element={ <LoginScreen /> } />

            <Route path="*" element={ <HomeScreen /> } />

          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default AppRouter