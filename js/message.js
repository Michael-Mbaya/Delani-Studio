$(document).ready(function(){
  $("form").submit(function(){
    alert("Thank you "+document.getElementById("name").value+ "! We have received your Message. Subscribe in the next step and get our feedback.");
  });
});

$(document).ready(function(){
  $("#submit").hover(function(){
    $("#subscribe").toggle();
    }, function(){
    $("#subscribe").toggle();
  });
});