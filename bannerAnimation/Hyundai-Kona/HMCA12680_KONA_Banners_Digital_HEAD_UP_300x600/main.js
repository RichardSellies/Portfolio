// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var bgExit;
var discLink;
var disclaimer;
var disclaimerCopy;
var cta;
var reportingLabel;
var allText;
var carText;
var disclaimerString;
var init;
var TimelineMax;
var allText;
var gif;

//Function to run with any animations starting on load, or bringing in images etc
init = function(){
	
	//Assign All the elements to the element on the page
	container = document.getElementById('container_dc');
	content = document.getElementById('content_dc');
	bgExit = document.getElementById('background_exit_dc');
	discLink = document.getElementById("discLink");
	disclaimer = document.getElementById("disclaimer");
	disclaimerCopy = document.getElementById("disclaimerCopy");
	cta = document.getElementById("button");
	
	
	//Bring in listeners i.e. if a user clicks or rollsover
	addListeners();
	//Show Ad
	//container.style.display = "block";
	
	
	
	container.style.display = "block";

	
	function playSequence1() {
		monster1 = new TimelineMax({});
		monster1.kill();
		monster1
		.set("#monster1", {backgroundPosition:"0px 70%"})
		.to("#monster1", 0.9, {backgroundPosition:"-6080px 70%", ease:SteppedEase.config(16), delay:0})
		;
		
	}
	
	
	
	var tl = new TimelineMax().repeat(-1);
	
	tl	
	
	
	
	
	
.to("#monster", 0.8, {ease: Back.easeOut.config(3), y:-130}, "+=0.3")
	.to("#copy000", 0.8, {opacity:1}, "-=0.8")

	.to("#display", 0.8, {ease:Power2.easeInOut, y:-40}, "-=0.1")
	
	.to("#copy000", 1, {ease:Power2.easeOut, opacity:0}, "+=0.5")

	
	.to("#main_group", 2, {ease:Power2.easeInOut, x:-290, y:2}, "+=0.0")
	
	
	.to("#car_group", 2, {ease:Power2.easeInOut, bottom:"-=150px", scale:1.3}, "-=2")
	
		.call(playSequence1, [], this, "-=0.7")
	
	
	
	
		
	
		.to("#copy010", 1, {ease:Power2.easeOut, opacity:1, y:-15}, "-=0.5")
		  .to("#copy020", 1, {ease:Power2.easeOut, opacity:1}, "-=0.6")
	
			  .to("#button", 0.7, {opacity:1}, "-=0.0")

			  .to({}, 3, {});
	
	;


	
	
	
	
	
	   TweenMax.set("#disclaimerClose", {rotation:"45"});
	
	
	
		discLink.onmouseover = function() {
			TweenMax.to("#discLink", 0.3, {ease:Power2.easeOut, rotation:"90"});
		}
		discLink.onmouseleave = function() {
			TweenMax.to("#discLink", 0.3, {ease:Power2.easeOut, rotation:"0"});
		}
	
		discLink.onclick = function() {
		if(disclaimerCopy.clientHeight + disclaimerHeading.clientHeight + 43  > disclaimer.clientHeight){
		disclaimer.style.top = "0px";
		disclaimerClose.style.display = "block";
		TweenMax.to("#disclaimerClose", 0.3, {opacity:"1", delay:0.2})
		TweenMax.set("#disclaimerScroll", {width:"283px"})		
		discLink.style.opacity = "0";
		}
		else {
		disclaimer.style.top = "0px";
		disclaimerClose.style.display = "block";
		TweenMax.to("#disclaimerClose", 0.3, {opacity:"1", delay:0.2})
		discLink.style.opacity = "0";
		}
	}
	
	disclaimerClose.onclick = function() {
		disclaimer.style.top = "110%";
		disclaimerClose.style.display = "none";
		TweenMax.to("#disclaimerClose", 0.3, {opacity:"0"});	
		discLink.style.opacity = "1";
		var myDiv = document.getElementById('disclaimerScroll');
		myDiv.scrollTop = 0;
	}


}

//Add Event Listeners
addListeners = function() {
	bgExit.addEventListener('click', bgExitHandler, false);
cta.addEventListener('click', bgExitHandler, false);}

bgExitHandler = function(e) {
	//Call Exits
	Enabler.exit('HTML5_Background_Clickthrough');
	//Enabler.exitOverride('HTML5_Background_Clickthrough', dynamicContent.HMCA11535_Digital_Q1_Dynamic_Keyword_Protection_banner[0].car_cta_link.Url);
}

init();



        

      

