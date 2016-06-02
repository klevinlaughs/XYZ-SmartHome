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
      createNotice();

      $("#oven-block").css("fill", "#538D57");
      $("#oven-block").hover(function(){
        $(this).css("fill", "#95ACA5");
      },function(){
        $(this).css("fill", "#538D57");
      });

    } else {

      $("#oven-block").css("fill", "white");
      $("#oven-block").hover(function(){
        $(this).css("fill", "#95ACA5");
      },function(){
        $(this).css("fill", "white");
      });

    }

    e.preventDefault();
  });

  $("#instructions").modal("show");
  $("#landing").focus();

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
  $("#content").append(
    '<div id="oven-alert" class="alert alert-success alert-dismissible overlay custom-alert" role="alert" >' +
      '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button>' +
      '<p>' +
        'The oven has been turned on at ' + $("#oven-temp").val() + ' &deg;' + $("input:radio[name=unit]:checked").val() + ' for ' + $("#oven-time").val() + ' minute(s) on ' + $("#oven-mode").val() + ' mode.' +
      '</p>' +
    '</div>'
  );
}

function createNotice() {
  $("#column1").append(
    '<div id="oven-alert" class="alert alert-success alert-dismissible custom-alert" role="alert" draggable="true" ondragstart="drag(event)">' +
      '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true" class="glyphicon glyphicon-remove"></span></button>' +
      '<h4>Oven Notice</h4>' +
      '<p>' +
        'The oven has been turned on at ' + $("#oven-temp").val() + ' &deg;' + $("input:radio[name=unit]:checked").val() + ' for ' + $("#oven-time").val() + ' minute(s) on ' + $("#oven-mode").val() + ' mode.' +
      '</p>' +
      '<i class="fa fa-arrows alert-move"></i>' +
    '</div>'
  );
}

function switchArrow() {
  $("#quickicon").toggleClass("fa-arrow-up fa-arrow-down");
}

// http://www.w3schools.com/html/html5_draganddrop.asp
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
