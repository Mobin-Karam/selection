'use strict'

const sectionUp = document.querySelectorAll('#section-up');
let sectionDown = document.querySelectorAll('#section-down');

for (let sectionUpChild = 0; sectionUpChild < sectionUp.length; sectionUpChild++) {
  sectionUp[sectionUpChild].addEventListener('click', () => {
    sectionDown[sectionUpChild].className === "section-down" ? sectionDown[sectionUpChild].classList.add('display-block') : sectionDown[sectionUpChild].classList.remove('display-block')
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
