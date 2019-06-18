// function typeWriter() {
//   var i = 0,
//     txt = "Hi, my name's Alex and I am a front-end web developer.",
//     speed = 75,
//     typed = document.getElementById('typewriter');

// (function addChar() {
//   if (i < txt.length) {
//     typed.innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(addChar, speed);
//   }
// })();

// (function blinkingCursor() {
//   let cursor = true;
//   let speed = 275;

//   setInterval(() => {
//     if(cursor) {
//       document.getElementById('typewriter').style.opacity = 0;
//       cursor = false;
//     } else {
//       document.getElementById('typewriter').style.opacity = 1;
//       cursor = true;
//     }
//   }, speed)
// })();
// }

// document.onload = typeWriter();

// ==============================================================================================================

var p = document.getElementById('first-typewriter');
var p2 = document.getElementById('second-typewriter');
var cursor = document.getElementById('cursor');
var hide = document.querySelector('.hide');
p.innerHTML = "";
p2.innerHTML = "";
var n = 0;
var m = 0;
var str = "Hi, my name's Alex Lee and I'm a web developer.";
var str2 = "HTML5. CSS3. Bootstrap4. Javascript ES6. React JS. Redux.";

var typeTimer = setInterval(function () {
  n = n + 1;
  p.innerHTML = str.slice(0, n);
  if (n === str.length) {
    clearInterval(typeTimer);
    p.innerHTML = str;
    n = 0;

    var secondTypeTimer = setInterval(() => {
      m = m + 1;
      p2.innerHTML = str2.slice(0, m);
      if(m === str2.length) {
        clearInterval(secondTypeTimer);

        setInterval(function () {
          if (n === 0) {
            p2.innerHTML = str2 + "|";
            n = 1;
          } else {
              p2.innerHTML = str2
              n = 0;
          };
        }, 500);
      }  
    }, 80);
  };
}, 70);