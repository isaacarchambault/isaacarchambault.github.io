
/*mobile/smallviewport animations*/

var menuicon = document.getElementById("smallmenuicon");
var verticalmenu = document.getElementById("smallmenucontroller");
var i;


menuicon.addEventListener('click', function() {
	
		openmenu();
		
}, false);

var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth > 1000) {

			revertmenu();
	
} if (viewportWidth < 1000) {
		
		console.log("reload");
	
}

window.addEventListener('resize', function () {
	
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	
	if (viewportWidth > 1000) {
		
			revertmenu();
		
	} if (viewportWidth < 1000) {
		
		console.log("width");
}
						
}, false);

function openmenu() {
	
	verticalmenu.style.transform = "translate(0%)";
	
	setTimeout(function() {
		
		menuicon.style.transform = "rotate(90deg)";
		
		i = 1;
		
	}, 100);
	
	if (i == 1) {
		
		verticalmenu.style.transform = null;
	
	setTimeout(function() {
		
		menuicon.style.transform = null;
		
		i = 0;
		
		}, 100);
		
	}
	
	return false;
	
}


function revertmenu() {
	
	verticalmenu.style.transform = null;
	menuicon.style.transform = null;
	
}