
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";





function App() {

  const[mode , setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
       type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#020b3f';
      showAlert("Dark mode has been Enabled","success");
      document.title ="Textutils-Dark Mode";

      // if you want to flash you title you can use the setInterval function  
      // setInterval(() => {
      //   document.title="Install textutils now ! ";
      // }, 2000);

      // setInterval(() => {
      //   document.title="TextUtils is amazing ";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
      document.title ="Textutils-Light Mode";
    }
  }
  return (
   <>
    {/* <Router>  */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Switch> */}
               {/* <Route exact path="/About"> */}
                 {/* <About/> */}
               {/* </Route> */}
               {/* <Route exact path="/"> */}
                   <TextForm showAlert={showAlert} heading="Enter the text below to analyze it " mode={mode}/>
               {/* </Route> */}
        {/* </Switch> */}
      </div>
       
    {/* </Router> */}
   </>



  );
} 

export default App;

