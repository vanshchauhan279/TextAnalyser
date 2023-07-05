import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; 

function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]=useState(null);
  

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },1000)
  }

  const toggleMode = ()=>{
   // removeClasslist();
  //  document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor="#20203e";
      showAlert("dark mode enable","success")
      document.title='TextUtils - Dark Mode';
      /*
      setInterval(()=>{
        document.title='install-TextUtilies';
      },2000)
      setInterval(()=>{
        document.title='textUtilies is best source';
      },1000)  */
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("light mode enable","success")
      document.title='TextUtils - Light Mode'
    }
  }
 /* const removeClasslist= ()=>{
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
  } */

return (
<>
<Navbar title="we are here" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>

<div className="container my-3">    
<Router>
    <Routes>
        <Route exact path="/about" element={ <About mode={mode}/>} />
        <Route exact path="/" element={< TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
    </Routes>
</Router>  


</div>

</>
   );
 }
export default App;
