import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Account } from './components/Account';
import { Admin } from './components/Admin';
import { Home } from './components/Home';
import { Landing } from './components/Landing';
import { Navigation } from './components/Navigation';
import { PasswordChange } from './components/PasswordChange';
import { SignInPage } from './components/SignInPage';
import { SignUpPage } from './components/SignUpPage';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<SignUpPage />} path="/signup" />
        <Route element={<SignInPage />} path="/signin" />
        <Route element={<Admin />} path="/admin" />
        <Route element={<PasswordChange />} path="/pw-forget" />
        <Route element={<Home />} path="/home" />
        <Route element={<Account />} path="/account" />
      </Routes>
    </div>
  </Router>
);

export { App };
