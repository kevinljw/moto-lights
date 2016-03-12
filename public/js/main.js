$(document).ready(function() {

  // Place JavaScript code here...
  // console.log(webTitle);
  // console.log(cp_state);

  if(typeof cp_state != undefined && webTitle=='Left Light'){
  	
  	switch(cp_state){
  		case 'l_blink':
  			if(cp_value>25){
		  		setInterval(function(){
		  			// console.log('toggleClass')
		  			$("#divtoBlink").toggleClass("backgroundGreen");
		     	},600);
	  		}
	  		else if(cp_value>10){
		  		setInterval(function(){
		  			// console.log('toggleClass')
		  			$("#divtoBlink").toggleClass("backgroundGreen");
		     	},300);
	  		}
	  		else if(cp_value>0){
		  		setInterval(function(){
		  			// console.log('toggleClass')
		  			$("#divtoBlink").toggleClass("backgroundGreen");
		     	},250);
	  		}
	  		else{
	  			$("#divtoBlink").addClass("backgroundGreen");
	  		}
  			break;
  		case 'straight':
  			
	  		$("#divtoBlink").toggleClass("colorBlue");
	     	
  			break;
  		default:

  			$("#divtoBlink").toggleClass("backgroundNone");
  			break;
  	}
  }
  else if(typeof cp_state != undefined && webTitle=='Right Light'){
  	// console.log(cp_state);
  	switch(cp_state){
  		case 'r_blink':
  			if(cp_value>25){
		  		setInterval(function(){
		  			// console.log('cp_value>25')
		  			$("#divtoBlink").toggleClass("backgroundGreen");
		     	},1000);
	  		}
	  		else if(cp_value>10){
		  		setInterval(function(){
		  			// console.log('cp_value>10')
		  			$("#divtoBlink").toggleClass("backgroundGreen");
		     	},250);
	  		}
	  		else if(cp_value>0){
		  		setInterval(function(){
		  			// console.log('cp_value>0')
		  			$("#divtoBlink").toggleClass("backgroundGreen");
		     	},150);
	  		}
	  		else{
	  			$("#divtoBlink").addClass("backgroundGreen");
	  		}
  			break;
  		case 'straight':
  			
	  		$("#divtoBlink").toggleClass("colorBlue");
	     	
  			break;
  		default:

  			$("#divtoBlink").toggleClass("backgroundNone");
  			break;
  	}
  }

});