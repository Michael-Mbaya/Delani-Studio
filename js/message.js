$(document).ready(function(){
  $("form").submit(function(){
    alert("Thank you Customer! We have received your Message.");
  });
});

$(document).ready(function(){
  $("form").hover(function(){
    $("#subscribe").toggle();
    }, function(){
    $("#subscribe").toggle(500);
  });
});