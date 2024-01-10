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
		.to("#monster1", 0.7, {backgroundPosition:"-5320px 70%", ease:SteppedEase.config(14), delay:0})
		;
		
	}
	
	function playSequence2() {
		monster2 = new TimelineMax({});
		monster2.kill();
		monster2
		.set("#monster2", {backgroundPosition:"-380px 70%"})
		.to("#monster2", 0.7, {backgroundPosition:"-4940px 70%", ease:SteppedEase.config(12), delay:0})
		;
		
	}
	
	function playSequence3() {
		monster3 = new TimelineMax({});
		monster3.kill();
		monster3
		.set("#monster3", {backgroundPosition:"0px 70%"})
		.to("#monster3", 0.7, {backgroundPosition:"-4940px 70%", ease:SteppedEase.config(13), delay:0})
		;
		
	}
	
	function playSequence4() {
		monster4 = new TimelineMax({});
		monster4.kill();
		monster4
		.set("#monster4", {backgroundPosition:"0px 70%"})
		.to("#monster4", 0.7, {backgroundPosition:"-4940px 70%", ease:SteppedEase.config(13), delay:0})
		;
		
	}
	
	function playSequence5() {
		monster5 = new TimelineMax({});
		monster5.kill();
		monster5
		.set("#monster5", {backgroundPosition:"0px 70%"})
		.to("#monster5", 0.7, {backgroundPosition:"-6840px 70%", ease:SteppedEase.config(18), delay:0})
		;
		
	}
	
	
	
	
	var tl = new TimelineMax().repeat(-1);
	
	tl	
	.set("#main_group", {scale:1.06})
	.to("#main_group", 2, {ease:Power2.easeInOut, x:-38, scale:1}, "+=0.4")
	.to("#monster1", 1, {ease:Power2.easeInOut, x:-25}, "-=1.6")
	.to("#monster2", 1, {ease:Power2.easeInOut, x:-83}, "-=1.6")
	.to("#monster3", 1, {ease:Power2.easeInOut, x:+53, y:+9}, "-=1.6")
	.to("#monster4", 1, {ease:Power2.easeInOut, x:+115}, "-=1.6")
	
	.call(playSequence1, [], this, "-=1.67")
	.call(playSequence2, [], this, "-=1.6")
	.call(playSequence3, [], this, "-=1.76")
	.call(playSequence4, [], this, "-=1.55")
	
	.to("#monster3", 0.1, {opacity:0}, "-=1.2")
	.to("#monster5", 0.1, {opacity:1}, "-=1.2")
	.call(playSequence5, [], this, "-=1.1")
	
		
		
		.to("#copy010", 1, {ease:Power2.easeOut, opacity:1, y:-15}, "-=1.1")
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



        

      

