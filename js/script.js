document.addEventListener("DOMContentLoaded", function(evt){
  // var menuItem = $("ul.menu > li");
  // menuItem.height(menuItem.width());

  var quickbutton = $("#quickbutton");
  quickbutton.width(quickbutton.height());


  $("#oven-toggle").click(function(){
    toggleOven();
    $(this).toggleClass("btn-danger btn-success");
  });

  $('#ovenModal').on('hide.bs.modal', function (e) {
    console.log("hidden");
    // do something...
  });
});

function toggleOven() {
  var btn = $("#oven-toggle");

  // btn.attr("data-target", "#oven-" + btn.text().toLowerCase() + "-tab");
  btn.text(btn.text() === "OFF" ? "ON" : "OFF");

  var isDisabled = $("#oven-fields").prop("disabled");

  if (isDisabled) {
    $("#oven-fields").prop("disabled", false);
  } else {
    $("#oven-fields").prop("disabled", true);
  }

  // $("#oven-off-tab, #oven-on-tab").toggleClass("in active");

  // if (btn.text() === "OFF"){
  //   btn.text("ON");
  //   btn.attr("target", "#oven-off-tab");
  // } else {
  //   btn.text("OFF");
  //   btn.attr("target", "#oven-on-tab");
  // }

}

function switchArrow() {
  var quickicon = $("#quickicon");
  if(quickicon.hasClass("fa-arrow-up")){
    quickicon.removeClass("fa-arrow-up").addClass("fa-arrow-down");
  } else if(quickicon.hasClass("fa-arrow-down")) {
    quickicon.removeClass("fa-arrow-down").addClass("fa-arrow-up");
  }
}
