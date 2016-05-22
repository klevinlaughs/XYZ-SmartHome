document.addEventListener("DOMContentLoaded", function(evt){
  // var menuItem = $("ul.menu > li");
  // menuItem.height(menuItem.width());

  var quickbutton = $("#quickbutton");
  quickbutton.width(quickbutton.height());


  $("#oven-toggle").click(function(){
    toggleOven();
    $(this).toggleClass("btn-danger btn-success");
  });

  $('#ovenModal').on('hidden.bs.modal', function (e) {
    if(!savedOven){
      if(ovenStatus !== $("#oven-toggle").text()){
        // loadSnapshot();
        $("#oven-toggle").click();
      }
    }
  });

  $("#ovenModal").on('show.bs.modal', function(e){
    savedOven = false;
    ovenStatus = $("#oven-toggle").text();
    // ovenSnapshot();
  });

  $("#oven-form").submit(function(e){
    $('#ovenModal').modal('hide');
    savedOven = true;

    if ($("#oven-toggle").text() === "ON" ) {
      createOnAlert();

      $("#oven-block").css("fill", "var(--light3)");
      $("#oven-block").hover(function(){
        $(this).css("fill", "var(--norm1)");
      },function(){
        $(this).css("fill", "var(--light3)");
      });

    } else {

      $("#oven-block").css("fill", "white");
      $("#oven-block").hover(function(){
        $(this).css("fill", "var(--norm1)");
      },function(){
        $(this).css("fill", "white");
      });

    }

    e.preventDefault();
  });

});
var savedOven;
var ovenStatus;

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
  /*if (btn.text() === "OFF"){
    btn.text("ON");
    btn.attr("target", "#oven-off-tab");
  } else {
    btn.text("OFF");
    btn.attr("target", "#oven-on-tab");
  }*/

}

/*var ovenTemp;
var tempUnit;
var ovenTime;
var ovenMode;

function ovenSnapshot(){
  ovenTemp = $("#oven-temp").val();
  tempUnit = $("input:radio[name=unit]:checked").val();
  ovenTime = $("#oven-time").val();
  ovenMode = $("#oven-mode").val();
}

function loadSnapshot(){
  $("#oven-temp").val(ovenTemp);
  $("input:radio[name=unit][value=" + tempUnit + "]").prop("checked", true);
  $("#oven-time").val(ovenTime);
  $("#oven-mode").val(ovenMode);
}*/

function createOnAlert() {
  $("#internal-pane").after(
    '<div id="oven-alert" class="alert alert-success alert-dismissible overlay" role="alert" >' +
      '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button>' +
      'The oven has been turned on at '+ $("#oven-temp").val() + ' &deg;' + $("input:radio[name=unit]:checked").val() + ' for ' + $("#oven-time").val() + ' minutes on ' + $("#oven-mode").val() + ' mode.' +
    '</div>'
  );
}

function switchArrow() {
  $("#quickicon").toggleClass("fa-arrow-up fa-arrow-down");
}
