// contact features

var submit = document.getElementById('sub');
var asterisk1 = document.getElementById('asterisk1');
var asterisk2 = document.getElementById('asterisk2');
var asterisk3 = document.getElementById('asterisk3');
var asterisk4 = document.getElementById('asterisk4');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');
var comments = document.getElementById('comments');

submit.onclick = function checkContactInputs() {
	
	'use strict';
	
	//pre checking
	
	if(fname.value === "") {
		
		asterisk1.style.color = "red";
		
		}
	
	if(lname.value === "") {
		
		asterisk2.style.color = "red";
			
		}
	
	
	if(email.value === "") {
		
		asterisk3.style.color = "red";
			
		}
	
	
	if(comments.value === "") {
		
		asterisk4.style.color = "red";
			
		}
	
	//post checking
	
	if (fname.value.length >= "2") {
		
		asterisk1.style.color = null;
		
	} else { 
		
		asterisk1.style.color = "red";
		
	}
	
	if (lname.value.length >= "1") {
		
		asterisk2.style.color = null;
		
	} else { 
		
		asterisk2.style.color = "red";
		
	}
	
	if (email.value.indexOf('@') >= "1") {
		
		asterisk3.style.color = null;
		
	} else { 
		
		asterisk3.style.color = "red";
		
	}
	
	if (comments.value.length >= "3") {
		
		asterisk4.style.color = null;
		
	} else { 
		
		asterisk4.style.color = "red";
		
	}
	
	//final check
	
	if (fname.value.length >= "2" &&
		lname.value.length >= "1" &&
	   	email.value.indexOf('@') >= "1" &&
		comments.value.length >= "3") {
		
		return true;
		
	} else {
	
	return false;
	
	}
	
};




