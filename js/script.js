document.addEventListener("DOMContentLoaded", function(evt){
  // var menuItem = $("ul.menu > li");
  // menuItem.height(menuItem.width());

  var quickbutton = $("#quickbutton");
  quickbutton.width(quickbutton.height());

  // $("#floor-svg").load(function(){
  //   var svgDoc = this.contentDocument;
  //   console.log(svgDoc);
  // });

});
// document.getElementById("svg1").addEventListener("load", function() {
//     var doc = this.getSVGDocument();
//     var rect = doc.querySelector("rect"); // suppose our image contains a <rect>
//     rect.setAttribute("fill", "green");
// });
// window.onload = function(){
//   //http://stackoverflow.com/questions/4906148/how-to-apply-a-style-to-an-embedded-svg
//   var svgDoc = document.getElementById("floor-svg").contentDocument;
//   // var svgDoc = $("#floor-svg");
//   console.log(svgDoc);
//   var linkElm = svgDoc.createElementNS("http://www.w3.org/1999/xhtml", "link");
//   linkElm.setAttribute("href", "css/floor-plan.css");
//   linkElm.setAttribute("type", "text/css");
//   linkElm.setAttribute("rel", "stylesheet");
//   svgDoc.getElementsByTagName( "svg" )[0].appendChild(linkElm);
// };

function switchArrow() {
  var quickicon = $("#quickicon");
  if(quickicon.hasClass("fa-arrow-up")){
    quickicon.removeClass("fa-arrow-up").addClass("fa-arrow-down");
  } else if(quickicon.hasClass("fa-arrow-down")) {
    quickicon.removeClass("fa-arrow-down").addClass("fa-arrow-up");
  }
}
