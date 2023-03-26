import React,{useState} from "react"

export default function Navbar(){
  const [opacity,setOpacity] = useState(false)
  function changeOpacity(){
   if(window.scrollY>0){
     setOpacity(true)
   }
    else if(window.scrollY===0){
      setOpacity(false)
    }
  }
  window.addEventListener("scroll",changeOpacity)
  return(
    <header className={opacity===true?"nav-show":""}>
		<nav>	
		 <ul class="nav-bar"><div class="bg"></div>
			<li><a class="nav-link active" href="#home">Home</a></li>
			<li><a class="nav-link" href="#projects">Projects</a></li>
			<li><a class="nav-link" href="#contact">Contact</a></li>
		 </ul>
			
			<div class="hamburger">
				<div class="line1"></div>
            <div class="line2"></div>
				<div class="line3"></div>
			</div>
		</nav>
	</header>
  )
}