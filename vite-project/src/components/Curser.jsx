import React from 'react'
import './curser.css'

function Curser() {
    const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.top = y +"px";
    cursor.style.left = x +"px"
     cursor.style.display = "block";
})

document.addEventListener("mouseleave" , (e) =>{
    cursor.style.display = "none";
})

  return (
    <div><div class="cursor"></div></div>
  )
}

export default Curser