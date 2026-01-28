import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'



function Navbar() {
//  const toggle = document.querySelector('.toggle');
//   const ul = document.querySelector('.ul');

// toggle.addEventListener('click', () => {
//     ul.classNameList.toggle('active');
// });


  return (
    <div>
        <nav className="nav">
          <img scr='${logo}' alt="" className="logo"></img>
    <ul className="ul">
        <li className="li"><a href="/" className="a">Home</a></li>
        <li className="li"><a href="#about" className="a">About us</a></li>
        <li className="li"><a href="#courses" className="a">Courses</a></li>
        <li className="li"><a href="/privacyp" className="a">Privacy Policy</a></li>
        <li className="li"><a href="/contact" className="a">Contact</a></li>
    </ul>
    <button className="buttonn">Login</button>
    <div className="toggle">
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>
    </div>
  )
}

export default Navbar