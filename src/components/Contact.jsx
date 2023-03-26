import React from "react"

export default function Contact(){
  return(
     <div id="contact">
		   <h3 style={{color:"black",textShadow:"none"}}>Contact<hr/></h3> 
       <br/>
       <p style={{color:"black"}}><strong>I'd Love To Hear From You</strong></p>
       <br/>
       <br/>
		    <div class="social-media1">
			  <a style={{textDecoration:"none"}} href="https://www.linkedin.com/in/mohit-agarwal-099744235/" target="_blank"><i class='fab fa-linkedin'></i> linkedIn</a>
		    </div>
       <p href="www.gmail.com" className="contactMail"><i class='fa solid fa-envelope'></i> mohitagarwal4567@gmail.com</p>
		  </div>
  )
}