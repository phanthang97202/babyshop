const menu__active = document.getElementById("menu__active");
const modal__cover = document.querySelector(".modal__cover");
const closeIcon = document.querySelector(".menu__cover--close ion-icon");
// console.log(menu__active, modal__cover, closeIcon);

// <button id="menu__active">Add</button>; 

closeIcon.addEventListener("click", () =>{
    modal__cover.style.display = "none";
})
menu__active.addEventListener("click", function (e) {
  modal__cover.style.display = "block";
});
modal__cover.addEventListener("click", function (e) {
//   console.log(e.target);
  if (e.target === modal__cover) {
    modal__cover.style.display = "none";
  }
});


// bắt sự kiện cuộng trang thanh menu 
var container = document.querySelector(".container");
var headerMenu = document.querySelector(".header__menu");
const introduce = document.querySelector(".introduce");
// console.log(container, headerMenu, introduce);


// setTimeout(,1000)

let offSetTopHeaderMenu = headerMenu.offsetTop

const hanlderScroll = function () {
  // console.log(offSetTopHeaderMenu)
  // console.log("window.pageYOffset", window.pageYOffset);
  // console.log("headerMenu.offsetTop", headerMenu.offsetTop);
  // console.log([hanlderScroll]);

  if (Math.ceil(window.pageYOffset) >= offSetTopHeaderMenu) {
    container.classList.add("activeScroll");
    // introduce.style.display = "none";
  } else {
    container.classList.remove("activeScroll");
    // introduce.style.display = "block";
  }
  // if(container) {
  //   if (Math.ceil(window.pageYOffset) >= 200) {
  //     container.classList.add("activeScroll");
  //   } else {
  //     container.classList.remove("activeScroll");
  //   }
  // }
};

const header = document.querySelector(".header");

window.addEventListener("scroll", hanlderScroll);
// window.onscroll = hanlderScroll

// 
// window.addEventListener("scroll", () => {
//   console.log("scroll", Math.ceil(window.pageYOffset));
// });
window.addEventListener("resize", function(e) {
  let widthWindow = window.innerWidth;
  
  if (widthWindow > 1200) {
    window.addEventListener("scroll", hanlderScroll);
  } else {
    window.removeEventListener("scroll", hanlderScroll);
  }
})
