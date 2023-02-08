// loadscreen

document.body.style.overflow = 'hidden';

document.body.style.position = "fixed";

function loaded() {
	
	var elements = document.getElementsByClassName("loadscreen");
	
		setTimeout(function() {
	
		for(var i = 0, length = elements.length; i < length; i++) {
			

            elements[i].style.opacity = "0.0";
			
			document.body.style.overflow = null;
			
			document.body.style.position = null;
		
			
			}
			
      }, 800);
	
	setTimeout(function() {
	
		for(var i = 0, length = elements.length; i < length; i++) {
			

            elements[i].style.display = "none";
		
			
			}
			
      }, 1100);
	
  /*var element = document.getElementById("myprogressBar");   
	
  var width = 1; 
	
  var identity = setInterval(scene, 10); 
	
  function scene() { 
	
    if (width >= 100) { 
		
      clearInterval(identity); 
		
    } else { 
		
      width++;  
		
      element.style.width = width + '%';  
    } 
 
  }*/
	
}

window.onload = loaded;