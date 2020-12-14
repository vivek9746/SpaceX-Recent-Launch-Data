import React from 'react';

import './App.css';
import Landing from './components/LandingPage';
import Dashboard from './components/Dashboard';
import NavigationBar from './components/Navbar';
import LaunchesButton from './components/RecentLaunch';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Gallery from './components/gallery';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar/>
      <Switch>
        <Route exact path="/spacex.com/vehicles/falcon-9/" render={() => (window &&
           (window.location = "https://spacex.com/vehicles/falcon-9/"))}/>
      </Switch>
      <LaunchesButton/>
     <Landing/>
     <Dashboard/>
     <Gallery/>
     <Footer/>
     </Router>
    </div>
  );
}

export default App;
