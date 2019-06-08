import React, {Component} from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import NavBar from './Components/NavBar/Navbar';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import DoctorCards from "./Components/Cards/doctorCards"
import HomeCards from './Components/Cards/homeCards';
class App extends Component {
  
  render() {
    return(
      <div>
         <NavBar/>
        <HomePage/>
        <Register/>
        <SignIn/>
       <DoctorCards/>
       <HomeCards/>
      </div>
    )
  }
}

export default App;
