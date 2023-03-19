'use strict';

// Cat animation
let looper;
let degrees = 1;
let clockwise = true;
function rotateAnimation(el, speed) {
  let elem = document.querySelector(el);
  elem.style.WebkitTransform = "rotate(" + degrees + "deg)";
  looper = setTimeout('rotateAnimation(\'' + el + '\',' + speed + ')', speed);
  if (degrees >= 25 || degrees <= 0) {
    clockwise = !clockwise;
  }

  if (clockwise) {
    degrees++;
  } else if (!clockwise) {
    degrees--;
  }
}
