import React from 'react'
import './Footer.css'

function Homediv8() {
  return (
    <div>
        <div className="fdiv">
        <footer className="footer">
         <div className="fdiv1">
             <h2 className="tsc">thetechserve.com</h2>
             <h5 className="tsia">TechServe IT Acadeny</h5>
             <div className="tri"></div>
         </div>
         <div className="fdiv2">
             <h3 className="Resources">Resources</h3>
             <div className="line1"></div>
             <ul className="relist">
                <li className="rli"><a href="/registeration" className="ip2">Register</a></li>
                <li className="rli"><a href="/login" className="ip">Login</a></li>
                <li className="rli"><a href="/login"className="ip">Profile</a></li>
                <li className="rli"><a href="/contact" className="ip">Contact</a></li>
                <li className="rli"><a href="/privacyp" className="ip">Privacy Policy</a></li>
              
            </ul>
        </div>
        <div className="fdiv3">
            <h3 className="Resources">Explore</h3>
            <div className="line2"></div>
            <ul className="relist">
                <li className="rli"><p className="hh"><a href="/" className="ip">Home</a></p></li>
                <li className="rli"><p className="hh"><a href="#courses" className="ip">Courses</a></p></li>
                <li className="rli"><p className="hh"><a href="#gallary" className="ip">Gallery</a></p></li>
            </ul></div>
         <div className="fdiv4">
             <h3 className="Resources">Address</h3>
             <div className="line3"></div>
             <p className="af">3-A 12/1 Near Tayaba Masjid Nazimabad No # 3 ,Karachi</p>
             <p className="af">+92 311 5994479</p>
             <p className="af">contact@thetechserve.com</p>
            
             
             <div className="lline">
                 <div>
                 <h5 className="inc">©2023 TechServe is Proudly Crafted by <a href="https://www.linkedin.com/in/muhammad-mujtaba-47b763327/" className="mmww"> Muhammad Mujtaba WW.</a></h5>
                 <h5 className="inc2"><p className="pp">Privacy Policy </p> | <p className="tc"> Terms and Conditions</p></h5>
             </div>
                </div>
            </div>
         </footer>
        </div>
    </div>
  )
}

export default Homediv8