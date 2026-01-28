import React from 'react'

function Contact() {
  return (
    <div>
      <div class="banner">
    <img src="f3cbf387-8e8c-4f81-aebc-a15d216b0f7a-Picsart-CropImage.jpg" alt="" class="bimg"></img>
        <h1 class="bh">CONTACT</h1>
        <div class="lgrg"><h3 class="lgn">Contact</h3>
        <h3 class="sl">/</h3>
        <h3 class="rg"><a  href="/" class="rg2">Home</a></h3>
    </div>
    </div>
        <div className="maindiv">
        <div className="div1">
            <h5 className="git">Get In Touch</h5>
            <h1 className="cd">CONTACT DETAILS</h1>
            <div className="line"></div>
            <h2 className="h2">Our Address</h2>
            <p className="p1">3-A 12/1 Near Tayaba Masjid Nazimabad No # 3 Karachi</p>
            <div className="line"></div>
            <h2 className="h2">E-mail</h2>
            <p className="p">Mail: contact@thetechserve.com</p>
            <div className="line"></div>
            <h2 className="h2">Contact</h2>
            <p className="p">Mobile: +92 311 5994479</p><p className="p2">Mobile: +92 335 0354042</p>
            <div className="line"></div>
            <h2 className="h2">Hours of Operation</h2>
            <p className="p">Monday - Friday: 09.00 - 20.00</p><p className="p2">Sunday & Saturday: 10.30 - 22.30</p>
        </div>
        <div className="div2">
            <h1 className="grts">Ready to Get Started?</h1>
            <p className="blah">Your email address will not be published. Required fields are marked *</p>
            <input type="text" required  placeholder="Your Name" className="inputc"/><br/>
            <input type="text" required  placeholder="Your email address" className="inputc"/><br/>
            <input type="text" required  placeholder="Your subject" className="inputc"/><br/>
            <input type="text" required  placeholder="Write your message..." className="input2c"/><br/>
            <input type="checkbox" className="rm"/><label for="" className="rm2">Accept terms and privacy policy</label><br/>
            <button className="button"><b>Send Message</b></button>
        </div>
    </div>
    <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5035188943393!2d67.02724637460419!3d24.914911277893815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fa2235b5867%3A0xbc45d3b350c0d8f9!2sTechServe%20Computing%20Institute!5e0!3m2!1sen!2sus!4v1753617648668!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    
  )
}

export default Contact