/*Home page animations
Created by Isaac Archambault
*/

var header = document.getElementById("header");
var smallLogo = document.getElementById("smallLogo");
var statictext = document.getElementById("statictext");

var section1 = document.getElementById("head");
var section2 = document.getElementById("divimage1");
var section3 = document.getElementById("divimage2");
var section4 = document.getElementById("divimage4");
var section5 = document.getElementById("divimage3");

var pagedotholder = document.getElementById("pagedotholder");
var pagedot1 = document.getElementById("pagedot1");
var pagedot2 = document.getElementById("pagedot2");
var pagedot3 = document.getElementById("pagedot3");
var pagedot4 = document.getElementById("pagedot4");

var hpimages1 = document.getElementsByClassName("hpimages1");
var h7 = document.getElementsByClassName("h7");

var x;

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

var intFrameHeight = window.innerHeight;

//animations and properties

if (intFrameHeight < 700) {
	
		imageresize70();
		
	
}

if (intFrameHeight > 700 && intFrameHeight < 1000) {
	
		imageresize80();
	
}

window.addEventListener('resize', function () {
	
	intFrameHeight = window.innerHeight;
	
	if (intFrameHeight < 700) {
		
		imageresize70();
	
	}
	
	
	if (intFrameHeight > 700 && intFrameHeight < 1000) {
	
		imageresize80();
	
}

	
}, false);
						

if (viewportWidth > 1000) {
	
	cachereloader();
	
	window.onscroll = function() {
		
        pageone();
			pagetwo();
				pagethree();
					pagefour();
						headerfade();
    };
	
} if (viewportWidth < 1000) {
	
		x = 1;
		headernormal();
		
		console.log("reload");
		window.onscroll = function() {
		
        smallsite()
		
    };
	
}

window.addEventListener('resize', function () {
	
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	
	if (viewportWidth > 1000) {
		
		cachereloader();
		
		window.onscroll = function() {
		
        pageone();
			pagetwo();
				pagethree();
					pagefour();
						headerfade();
    };
		
	} if (viewportWidth < 1000) {
		
		x = 1;
		headernormal();
		
		console.log("width");
		window.onscroll = function() {
		
        smallsite()
			
    };
	
}
						
}, false);

function pageone() {
	
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {

        setTimeout(function() {

            section1.style.opacity = "0.0";
            section2.style.opacity = "1.0";
			
			pagedotholder.style.opacity = "1.0";
			
			pagedot1.style.backgroundColor = "#ffffff";
			pagedot1.style.boxShadow = "0px 0px 10px white";
			

        }, 500);

        setTimeout(function() {

            section1.style.display = "none";
            section2.style.display = "block";
			
			pagedotholder.style.display = "block";
	

        }, 450)
		
    } else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
		
        setTimeout(function() {
			
            section1.style.opacity = "1.0";
            section2.style.opacity = "0.0";
            document.body.style.backgroundImage = null;
			
			pagedotholder.style.opacity = "0.0";
			
			pagedot1.style.backgroundColor = null;
			pagedot1.style.boxShadow = null;
			
					
        }, 500);
		
        setTimeout(function() {
			
            section1.style.display = "block";
            section2.style.display = "none";
			
			pagedotholder.style.display = "none";
			
			
        }, 450)
    }
	
	return false;
	
}

function pagetwo() {
	
    if (document.body.scrollTop >= 1545 || document.documentElement.scrollTop >= 1545) {

        setTimeout(function() {

            section2.style.opacity = "0.0";
            section3.style.opacity = "1.0";
			
			pagedot1.style.backgroundColor = null;
			pagedot1.style.boxShadow = null;
			
			pagedot2.style.backgroundColor = "#ffffff";
			pagedot2.style.boxShadow = "0px 0px 10px white";

        }, 500);

        setTimeout(function() {

            section2.style.display = "none";
            section3.style.display = "block";

        }, 450)
		
    } else if (document.body.scrollTop < 1545 && document.body.scrollTop > 700 || document.documentElement.scrollTop < 1545 && document.documentElement.scrollTop > 700) {

        setTimeout(function() {

            section2.style.opacity = "1.0";
            section3.style.opacity = "0.0";
			
			pagedot2.style.backgroundColor = null;
			pagedot2.style.boxShadow = null;

        }, 500);

        setTimeout(function() {

            section2.style.display = "block";
            section3.style.display = "none";

        }, 450)
    }
	
	return false;
	
}

function pagethree() {

    if (document.body.scrollTop >= 2390 || document.documentElement.scrollTop >= 2390) {

        setTimeout(function() {

            section3.style.opacity = "0.0";
            section4.style.opacity = "1.0";
			
			pagedot2.style.backgroundColor = null;
			pagedot2.style.boxShadow = null;
			
			pagedot3.style.backgroundColor = "#ffffff";
			pagedot3.style.boxShadow = "0px 0px 10px white";

        }, 500);

        setTimeout(function() {

            section3.style.display = "none";
            section4.style.display = "block";

        }, 450)
		
    } else if (document.body.scrollTop < 2390 && document.body.scrollTop > 1545 || document.documentElement.scrollTop < 2390 && document.documentElement.scrollTop > 1545) {

        setTimeout(function() {

            section3.style.opacity = "1.0";
            section4.style.opacity = "0.0";
			
			pagedot3.style.backgroundColor = null;
			pagedot3.style.boxShadow = null;

        }, 500);

        setTimeout(function() {

            section3.style.display = "block";
            section4.style.display = "none";

        }, 450)
    }
	
	return false;
	
}

function pagefour() {

    if (document.body.scrollTop >= 3235 || document.documentElement.scrollTop >= 3235) {

        setTimeout(function() {

            section4.style.opacity = "0.0";
            section5.style.opacity = "1.0";
			
			pagedot3.style.backgroundColor = null;
			pagedot3.style.boxShadow = null;
			
			pagedot4.style.backgroundColor = "#ffffff";
			pagedot4.style.boxShadow = "0px 0px 10px white";

        }, 500);

        setTimeout(function() {

            section4.style.display = "none";
            section5.style.display = "block";

        }, 450)
		
    } else if (document.body.scrollTop < 3235 && document.body.scrollTop > 2390 || document.documentElement.scrollTop < 3235 && document.documentElement.scrollTop > 2390) {
		
        setTimeout(function() {

            section4.style.opacity = "1.0";
            section5.style.opacity = "0.0";
			
			pagedot4.style.backgroundColor = null;
			pagedot4.style.boxShadow = null;

        }, 500);

        setTimeout(function() {

            section4.style.display = "block";
            section5.style.display = "none";

        }, 450)
    }
	
	return false;
	
}


function smallsite() {
		
		section1.style.display = "block";
		section1.style.opacity = "1.0";
		
}

function cachereloader() {
	
	if (x == 1) {
		
		window.top.location = window.top.location;
	} 
	
	else { 
		
		null;
		
	}
	
	return false;
}

//better laptop styles


function imageresize70() {
	
		var i;
	
			for (i = 0; i < hpimages1.length; i++) {
			
				hpimages1[i].style.width = "70%";
				
			
		}

	
			for (i = 0; i < h7.length; i++) {
			
				h7[i].style.lineHeight = "20px";
			
		}
	
	return false;
	
}

function imageresize80() {
	
		var i;
	
			for (i = 0; i < hpimages1.length; i++) {
			
				hpimages1[i].style.width = "80%";
				
			
		}

	
			for (i = 0; i < h7.length; i++) {
			
				h7[i].style.lineHeight = null;
			
		}
	
	return false;
	
}
						
function headerfade() {
	
	if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {

        setTimeout(function() {

            header.style.backgroundColor = "transparent";
			header.style.boxShadow = "0px 0px 0px black";
			smallLogo.style.opacity = "0.0";
			statictext.style.opacity = "0.0";

        }, 500);
		
		setTimeout(function() {
			
			smallLogo.style.display = "none";
			statictext.style.display = "none";

        }, 450);
		
    } else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
		
        setTimeout(function() {
			
            header.style.backgroundColor = null;
			header.style.boxShadow = null;
			smallLogo.style.opacity = "1.0";
			statictext.style.opacity = "1.0";

        }, 500);
		
		setTimeout(function() {
			
			smallLogo.style.display = "block";
			statictext.style.display = "block";

        }, 450);
	
	}
	
	return false;
	
}

function headernormal() {
	
	smallLogo.style.display = "block";
	smallLogo.style.opacity = "1.0";
	header.style.backgroundColor = null;
	header.style.boxShadow = null;
	statictext.style.display = "none";
	
}