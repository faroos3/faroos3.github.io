/*
This is the js file for lab7 of ITWS 1100 F16. It is supposed to load the projects
page of my website using an ajax call and json. 
*/


$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "resources/lab7json.json", 
    dataType: "json",
    success: function(dataList, status){
      var output = "<ul>"; 
        $.each(dataList.menuItems, function(i, item){ //have to have i there in order to work
          output += '<li><a href ="'+"resources/" +item.menuURL + '"target="_blank">';
          output += item.menuName + ': ' + item.menuDesc; 
          output += '</a></li>'; 
        });
        output += "</ul>"; 
        $("#outputList").html(output); 

    }, error: function(msg){
        alert("There was a problem: " + msg.status + " "+ msg.statusText);
    }
  });
});