import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import TourDetail from './pages/Home/Home/TourDetail/TourDetail';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/tourDetail/:singleTourId">
            <TourDetail></TourDetail>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
