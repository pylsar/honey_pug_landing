import './style.scss';

import {TweenMax} from "gsap/all";


// курсор
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor__follower');
const links = document.querySelectorAll('.cursor__links')

function changeCursor(){
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;
  
  TweenMax.to({}, 0.01, {
    repeat: -1,
    onRepeat: () =>{
      posX += (mouseX - posX) / 5;
      posY += (mouseY - posY) / 5;
      TweenMax.set(follower, {
        css: {
          left: posX - 8,
          top: posY - 8
        }
      })
      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      })
    }
  });
  
  window.addEventListener('mousemove', event => {
    cursor.style.display = 'block';
    follower.style.display = 'block';
    mouseX = event.clientX;
    mouseY = event.clientY;
    // console.log(mouseX, mouseY);
  })
  
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('active');
      follower.classList.add('active');
    });
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
      follower.classList.remove('active');
    });
  })
}
changeCursor();



// меню
// function fixmenu(){
//     const fixMenu = document.querySelector('.main__navigation-list');
 
//     function getCoords(fixMenu) {
//         let menuTop = fixMenu.getBoundingClientRect();
      
//         return {
//           top: Math.round(menuTop.top + pageYOffset),
//           left: Math.round(menuTop.left + pageXOffset)
//         };
//     }
//     getCoords(fixMenu);

//     window.addEventListener('scroll', () => {
//         let menuTop = fixMenu.getBoundingClientRect();
//         // console.log(fixMenu)
//         if(window.scrollTop > menuTop){
//             // fixMenu.style.color = 'green';
//             console.log(1)
//         }
//     })
// }
// fixmenu();




