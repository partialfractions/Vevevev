$(document).ready(function() {
  var scroller = {};
  scroller.e = document.getElementById("main");

  if (scroller.e.addEventListener) {
  scroller.e.addEventListener("mousewheel", MouseWheelHandler, false);
  scroller.e.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
  } else scroller.e.attachEvent("onmousewheel", MouseWheelHandler);

  function MouseWheelHandler(e) {

  // cross-browser wheel delta
  var e = window.event || e;
  var delta = - 10 * (Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail))));

  var pst = $('#main').scrollLeft() + delta;

  if (pst < 0) {
      pst = 0;
  } else if (pst > $('mainContainer').width()) {
      pst = $('mainContainer').width();
  }

  $('#main').scrollLeft(pst);

  return false;
  }

});
