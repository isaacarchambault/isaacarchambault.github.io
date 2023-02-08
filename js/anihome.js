
/*mobile/smallviewport animations (for homepage)*/

var menuicon = document.getElementById("smallmenuicon");
var verticalmenu = document.getElementById("smallmenucontroller");
var x;


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

menuicon.onclick = function openmenu() {
	
	verticalmenu.style.transform = "translate(0%)";
	
	setTimeout(function() {
		
		menuicon.style.transform = "rotate(90deg)";
		
		x = 1;
		
	}, 100);
	
	if (x == 1) {
		
		verticalmenu.style.transform = null;
	
	setTimeout(function() {
		
		menuicon.style.transform = null;
		
		x = 0;
		
		}, 100);
		
	}
	
	return false;
	
}

function revertmenu() {
	
	verticalmenu.style.transform = null;
	menuicon.style.transform = null;
	
}