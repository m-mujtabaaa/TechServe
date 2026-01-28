import React from 'react'

function Login() {
  return (
    <div>

<div className="banner">
    <img src="f3cbf387-8e8c-4f81-aebc-a15d216b0f7a-Picsart-CropImage.jpg" alt="" className="bimg"/>
        <h1 className="bh">LOGIN</h1>
        <div className="lgrg"><h3 className="lgn">Login</h3>
        <h3 className="sl">/</h3>
        <h3 className="rg"><a href="/" className="rg2">Home</a></h3>
    </div>
    </div>
    <div className="mainmd">
    <div className="md">
        <form className="lform">
            <h2 className="lg">LOGIN</h2>
                <label className="label">User Name or Email</label><br/>
                <input type="text" required  placeholder="User Name or Email" className="inputl" id="input1"/><br/>
                <label className="label">Password</label><br/>
                <input type="password"  placeholder="Password" className="inputl" id="input2"/><br/>
                <input type="checkbox" className="rm"/><label for="">Remember me</label>
                <button className="button" onclick="login()"><b>Submit</b></button>
                <p className="lyp"><a href="" className="lypa">Forget your password ?</a></p>
            </form>
             </div>
            </div>
</div>
  )
}

export default Login