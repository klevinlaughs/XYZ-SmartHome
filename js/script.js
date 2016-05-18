document.addEventListener("DOMContentLoaded", function(evt){
  // var menuItem = $("ul.menu > li");
  // menuItem.height(menuItem.width());

  var quickbutton = $("#quickbutton");
  quickbutton.width(quickbutton.height());
});

function switchArrow() {
  var quickicon = $("#quickicon");
  if(quickicon.hasClass("fa-arrow-up")){
    quickicon.removeClass("fa-arrow-up").addClass("fa-arrow-down");
  } else if(quickicon.hasClass("fa-arrow-down")) {
    quickicon.removeClass("fa-arrow-down").addClass("fa-arrow-up");
  }
}
