import React from "react"

export default function Projects(){
  return(
     <div id="projects">
		 <h3>My Projects<hr/></h3>
		  <p>Here are some of my projects, you may like.</p>
		  <div class="work-box">
		  <div class="work">
			<div class="card">
			    <img class="work-img" src="news.png"/>
			    <a href="https://replit.com/@mohitagarwal20/IndiaFission" target="_blank"> 
				<div class="work-content">News app that fetches news based on different categories.</div></a>
            </div>
			<div class="card">
			    <img class="work-img" src="text.png"/>
				<a href="https://replit.com/@mohitagarwal20/TextUtils" target="_blank"> 
				<div class="work-content">Text Utility App that lets us play with any text provided.</div></a>
            </div>
            <div class="card">
			    <img class="work-img" src="weather.png"/>
				<a href="https://replit.com/@mohitagarwal20/Weather-app" target="_blank">
				<div class="work-content">Weather Forecasting app to give us daily weather updates of any location we want.</div></a>
            </div>
        <div style={{height:"400px"}}></div>
         </div>
		  </div>
	  </div>
		 
  )
}