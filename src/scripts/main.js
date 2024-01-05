'use strict'

const sectionUp = document.querySelectorAll('#section-up');
let sectionDown = document.querySelectorAll('#section-down');
let downArrow = document.querySelectorAll('.fa-chevron-down');
let leftDots = document.querySelectorAll('#left-dot');

console.log(leftDots)

for (let sectionUpChild = 0; sectionUpChild < sectionUp.length; sectionUpChild++) {
  sectionUp[sectionUpChild].addEventListener('click', () => {
    if (sectionDown[sectionUpChild].className === "section-down") {
      sectionDown[sectionUpChild].classList.add('display-block');
      downArrow[sectionUpChild].style.rotate = "180deg";
    } else {
      sectionDown[sectionUpChild].classList.remove('display-block');
      downArrow[sectionUpChild].style.rotate = "0deg"
    }
  })
}

// switch (sectionDown.className) {
//   case "section-down":
//     sectionUp.addEventListener('click', () => {
//       console.log('hello')
//       sectionDown.classList.add('display-block');
//       console.log(sectionDown.className)
//     })
//     break
//   case "section-down display-block":
//     sectionUp.addEventListener('click', () => {
//       console.log('by')
//       sectionDown.classList.remove('display-block');
//       console.log(sectionDown.className)
//     })
//     break
//   default: console.log('Have Error');
// }
