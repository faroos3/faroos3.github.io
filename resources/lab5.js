/*Lab 5 JavaScript File 
   Place variables and functions in this file */
   
window.onload = function() {
  var input = document.getElementById("firstName").focus();
};

function validate(formObj) {
  // put your validation code here
  // it will be a series of if statements
  var alertMessage = ""; 
  var displayAlert = false; 
  //bunch of tedious if statements. 
  if (formObj.firstName.value == "") {
    alertMessage += "You must enter a first name\n"; 
    formObj.firstName.focus();
	displayAlert = true; 
  }
  
  if (formObj.lastName.value == ""){
    alertMessage += "You must enter a last name\n";
	formObj.lastName.focus();  
	displayAlert = true; 
  }
  if (formObj.title.value == ""){
	alertMessage += "You must enter a title\n";
 
	formObj.title.focus();  
	displayAlert = true; 
  }
  if (formObj.org.value == ""){
	alertMessage += "You must enter an organization\n";
 
	formObj.org.focus();  
	displayAlert = true; 
  }
  if (formObj.pseudonym.value == ""){
	alertMessage += "You must enter a nickname\n";
 
	formObj.pseudonym.focus();  
	displayAlert = true; 
  }
   if (formObj.comments.value == ""){
	alertMessage += "You must enter comments\n";
 
	formObj.comments.focus();  
	displayAlert = true; 
  }
  if (displayAlert == true){
	alert(alertMessage); 
	return false; 
  }
  else{
	alert("Thank you for your input!");
  }
};

function buttonFunc(){ //tryna just use document.getElementById
	//pretty much uses the same style as the above function, but uses getElementById
  var badAlertMessage = ""; 
  var displayAlert = false; 
  if (document.getElementById("firstName").value == ""){
    badAlertMessage += "Before you click this, please enter your first name.\n"; 
	displayAlert = true; 
  }
  if (document.getElementById("lastName").value == ""){
    badAlertMessage += "Before you click this, please enter your last name.\n"; 
    displayAlert = true; 
  }
  if (document.getElementById("pseudonym").value == ""){
	badAlertMessage += "Before you click this, please enter your nickname.\n"; 
	displayAlert = true; 
  }
  if (displayAlert == true){
    alert(badAlertMessage);
  }
  else{
    alert(document.getElementById("firstName").value + " " + document.getElementById("lastName").value + " is " + document.getElementById("pseudonym").value+"."); 
  }
};

function textChanger(){ //use for onfocus. 
  //document.getElementById("comments").value = ""; 
  if (document.getElementById("comments").value == "Please enter your comments"){
    document.getElementById("comments").value = ""; 
  }
};

function textChecker(){ //use for onblur. 
  if (document.getElementById("comments").value == ""){
    document.getElementById("comments").value = "Please enter your comments"; 
  }
};
