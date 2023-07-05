//import React, { useState } from 'react'
import PropTypes from 'prop-types'
//import {Link} from "react-router-dom";

export default function Navbar(props) {

return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<a className="navbar-brand" href="/">{props.title}</a>

<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse " id="navbarSupportedContent">
<ul className="navbar-nav mr-auto ">
 <li className="nav-item active">
 <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
 </li>

 <li className="nav-item">
 <a className="nav-link" href="/about">{props.about}</a>
</li> 
</ul>
   {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form> 
 <div className="form-check form-switch ">
 <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode("light")}}/>
 <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable lightMode</label>
</div> */}
<div className="form-check form-switch ">
  <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode("dark")}}/>
  <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable darkMode</label>
</div>
{/*<div className="form-check form-switch ">
  <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode("primary")}}/>
  <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable blueMode</label>
</div>
<div className="form-check form-switch ">
  <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode("danger")}}/>
  <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable Redmode</label>
</div>
<div className="form-check form-switch ">
  <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode("success")}}/>
  <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable GreenMode</label>
</div>
<div className="form-check form-switch ">
  <input className="form-check-input mx-1" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode("warning")}}/>
  <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault">Enable yellowMode</label>
</div>*/}
</div>
</nav>
)
}

Navbar.propTypes= {
   title: PropTypes.string.isRequired,
   about: PropTypes.string
    
}
Navbar.defaultProps={
   title: "set title here",
   about: "about text here"
}