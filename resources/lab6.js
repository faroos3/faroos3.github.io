/* Lab 6 JavaScript File  */

// this is the block that allows code to execute only after the DOM
// is fully loaded:
$(document).ready(function() {
  
  //have my name appear in the title and header in this file, not in the HTML file
  $("em").html("Samad Farooqui")
  $("title").html("Samad Farooqui: Lab 6")
  
  
  // example event handler:
  $("#lab6Button").click(function() {
    alert("You've clicked the lab 6 button");
  });
  
  // Problem 1: Make an alert appear when the user clicks on the h1 (your name).
  //name is in an h1 tag, 
  $("h1").click(function(){
    var myMsg = $("h1 em").html(); 
    alert("Why did you bother clicking on my name? It is " + myMsg +" by the way.");
  });
  
  
  
  // Problem 2: Make the "lorem ipsum" paragraphs vanish when a user clicks 
  // "Hide text"; make it appear when a user clicks "Show text":
  $("#hideText").click(function(){
    $("#showHideBlock").find("p").hide("slow");
  }); 
  
  $("#showText").click(function(){
    $("#showHideBlock").find("p").show("slow");
  }); 
  
  // Problem 3: When a list item is clicked, make it turn red using addClass.
  // (Note that there is a css style named ".red" in lab6.css.)
  $("#lab6List li").click(function(){
    $(this).toggleClass("red"); 
  });
  
  
  // Extra: lookup jquery toggle() and use this code on the "Toggle Text"
  // link to show/hide the text:
  
  $("#toggleText").click(function(){
    $("#showHideBlock").find("p").toggle("fast");
  }); 
  
  /* When you are done:
     Post this lab to your iit website,
     link it from your projects page,
     and post a *working* hyperlink to your projects
     page in the assignment dropbox.
     
     Lab 6 is due by midnight Oct 24, 2011. */
});

