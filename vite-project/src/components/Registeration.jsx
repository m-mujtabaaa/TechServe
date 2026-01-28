import React from 'react'

function Registeration() {
  return (
    <div>
        <div className="banner">
    <img src="f3cbf387-8e8c-4f81-aebc-a15d216b0f7a-Picsart-CropImage.jpg" alt="" className="bimg"/>
        <h1 className="bh">REGISTERATION</h1>
        <div className="lgrg"><h3 className="lgn">Registeration</h3>
        <h3 className="sl">/</h3>
        <h3 className="rg"><a href="/" className="rg2">Home</a></h3>
    </div>
    </div>


     <div className="md2">
                <form className="rform">
                    <h2 className="lg2">REGISTERATION</h2>
                        <label className="label">User Name </label><br/>
                        <input type="text" required  placeholder="User Name" className="input2"/><br/>
                        <label className="label">Email</label><br/>
                        <input type="email" required  placeholder="Email" className="input2"/><br/>
                        <label className="label">Gender</label>
                        <label className="sublabel"> Male:</label><input type="radio"  name="gender" id="gender" className="male" />
                        <label className="sublabel"> Female:</label><input type="radio" name="gender" id="gender"/><br/>
                        <label className="label">Date of birth</label><br/>
                        <input type="date" required  placeholder="email" className="input2"/><br/>
                        <label className="label">Password</label><br/>
                        <input type="password"  placeholder="Password" className="input2"/><br/>
                        <label className="label">Confirm Password</label><br/>
                        <input type="password"  placeholder="Password" className="input2"/><br/>
                        <input type="checkbox" className="rm"/><label for="">Remember me</label>
                        <button className="button"><b>Submit</b></button>
                    </form>
                </div>
                </div>
  )
}

export default Registeration