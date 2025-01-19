// (function() {
//     function controls() {
//       this.className += ' selected';
//       var siblings = this.parentNode.children;
//       for (var i = 0; i < siblings.length; i++) {
//         if (siblings[i] !== this) {
//           siblings[i].className = siblings[i].className.replace(' selected', '');
//         }
//       }
  
//       var containerHeight = document.querySelector('.container').offsetHeight;
//       var slideDiv = document.querySelector('.slideDiv');
//       var index = Array.prototype.indexOf.call(this.parentNode.children, this);
  
//       slideDiv.style.transition = 'top 0.45s';
//       slideDiv.style.top = '-' + (containerHeight * index) + 'px';
//     }
  
//     function runCode() {
//       var buttons = document.querySelectorAll('.button');
//       for (var i = 0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', controls, false);
//       }
//     }
  
//     runCode();
//   })();
  
  