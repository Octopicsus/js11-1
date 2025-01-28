// const defaultImages = [
//   { src: "/img/menu/Ingredients/beef.webp" },
//   { src: "/img/menu/Ingredients/buns.webp" },
//   { src: "/img/menu/Ingredients/cheese.webp" },
//   { src: "/img/menu/Ingredients/ketchup.webp" },
//   { src: "/img/menu/Ingredients/pickles.webp" },
// ];

// //
// // ------ GENERATE SLIDER LAYOUT -------

// function generateSliderLayout() {
//   return `    <div class="slider">
//         <div class="slider-wrapper"></div>
//         <div class="levels"></div>

//         <div class="navigaion"> <button type="button" class="btn prev-btn" data-action="prev"><svg class='svg'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
//             <polygon points="15.293 3.293 6.586 12 15.293 20.707 16.707 19.293 9.414 12 16.707 4.707 15.293 3.293"/>
//           </svg>
//           </button>
//         <button type="button" class="btn next-btn" data-action="next"><svg class='svg' xmlns="http://www.w3.org/2000/svg" width="20"
//                 height="20" viewBox="0 0 24 24">
//                 <polygon
//                     points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707"/>
//             </svg></button></div>
//     </div>`;
// }

// //
// // ------ INITIALIZE SLIDER -------

// function initializeSlider(imagesArray = defaultImages) {
//   let interval = 3; // sec
//   let sliderCount = imagesArray.length;

//   const sliderWin = document.querySelector(".slider-wrapper");
//   const pointsWin = document.querySelector(".levels");
//   const nextBTN = document.querySelector(".next-btn");
//   const prevBTN = document.querySelector(".prev-btn");

//   let selected = 0;
//   let pauseOn = false;
//   let showTools = false;

//   let dragging = {
//     startX: 0,
//     endX: 0,
//   };

//   //
//   // ------ GENERATE SLIDER  -------

//  /*  function generateSlider() {
//     imagesArray.forEach((image, index) => {
//       generateSlide(image, index, slidesElement);

//       generateIndicator(index, indicatorsElement);
//     });
//   } */

//   //
//   // ------ GENERATE SLIDER ELEMENTS -------

//   function generateSlides(image, index, parent) {
//     let slide = document.createElement("div");
//     slide.classList.add("slide");
//     if (index === 0) {
//       slide.classList.add("active");
//     }
//     parent.appendChild(slide);

//     const img = document.createElement("img");
//     img.src = image.src;
//     img.classList.add("slide-img");
//     slide.appendChild(img);
//   }

//   function generateLevels(index, parent) {
//     let point = document.createElement("div");
//     point.classList.add("point");

//     if (index === 0) {
//       point.classList.add("active");
//     }

//     point.setAttribute("data-id", index);
//     parent.appendChild(point);
//   }

//   // generateSlider();

//   //
//   //------- SHOW DYNAMIC SLIDER -------

//   function showSlider() {
//     imagesArray.forEach((image, index) => {
//       generateSlides(image, index, sliderWin);
//       generateLevels(index, pointsWin);
//     });
//   }

//   showSlider();

//   //
//   //
//   // ------ MAIN SLIDER LOGIC -------

//   function changeSlide(actionType = "next", slideNum = null) {
//     sliderWin.children[selected].classList.remove("active");
//     pointsWin.children[selected].classList.remove("active");

//     if (slideNum !== null) {
//       selected = slideNum;
//     } else {
//       if (actionType === "next") {
//         selected++;
//         if (selected === sliderCount) {
//           selected = 0;
//         }
//       } else if (actionType === "prev") {
//         selected--;
//         if (selected < 0) {
//           selected = sliderCount - 1;
//         }
//       }
//     }

//     sliderWin.children[selected].classList.add("active");
//     pointsWin.children[selected].classList.add("active");

//     if (actionType || slideNum !== null) {
//       clearInterval(timer);
//       timer = setInterval(changeSlide, interval * 1000);
//     }
//   }

//   let timer = setInterval(changeSlide, interval * 1000);

//   //
//   //
//   // ------ NAVIGATION -------

//   // --- BTN

//   nextBTN.addEventListener("click", () => changeSlide("next"));
//   prevBTN.addEventListener("click", () => changeSlide("prev"));

//   // --- LEVELS

//   pointsWin.addEventListener("click", (event) => {
//     if (event.target.classList.contains("point")) {
//       let pointID = parseInt(event.target.getAttribute("data-id"));
//       changeSlide(null, pointID);
//     }
//   });

//   // --- KEYS

//   document.addEventListener("keydown", (event) => {
//     if (event.code === "KeyT") {
//       if (!showTools) {
//         clearInterval(timer);
//         document.querySelector(".showNavPanel").classList.add("active");
//       } else {
//         timer = setInterval(changeSlide, interval * 1000);
//         document.querySelector(".showNavPanel").classList.remove("active");
//       }
//       showTools = !showTools;
//       console.log(showTools);
//     }

//     //

//     if (event.code === "Space") {
//       if (!pauseOn) {
//         clearInterval(timer);
//       } else {
//         timer = setInterval(changeSlide, interval * 1000);
//       }
//       pauseOn = !pauseOn;
//     }

//     //

//     if (event.code === "ArrowLeft") {
//       changeSlide("prev");
//     }

//     //

//     if (event.code === "ArrowRight") {
//       changeSlide("next");
//     }
//   });

//   // --- TOUCH

//   sliderWin.addEventListener("touchstart", (event) => {
//     dragging.startX = event.touches[0].clientX;
//   });

//   sliderWin.addEventListener("touchend", (event) => {
//     dragging.endX = event.changedTouches[0].clientX;

//     if (dragging.startX < dragging.endX) {
//       changeSlide("prev");
//     } else {
//       changeSlide("next");
//     }
//   });
// }

const defaultImages = [
  { src: "/img/menu/Ingredients/beef.webp" },
  { src: "/img/menu/Ingredients/buns.webp" },
  { src: "/img/menu/Ingredients/cheese.webp" },
  { src: "/img/menu/Ingredients/ketchup.webp" },
  { src: "/img/menu/Ingredients/pickles.webp" },
];

function initializeSlider(imagesArray) {
  let interval = 3; // sec
  let sliderCount = imagesArray.length;

  const sliderWin = document.querySelector(".slider-wrapper");
  const pointsWin = document.querySelector(".levels");
  const nextBTN = document.querySelector(".next-btn");
  const prevBTN = document.querySelector(".prev-btn");

  let selected = 0;
  let pauseOn = false;
  let showTools = false;

  let dragging = {
    startX: 0,
    endX: 0,
  };

  function generateSlides(image, index, parent) {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) {
      slide.classList.add("active");
    }
    parent.appendChild(slide);

    const img = document.createElement("img");
    img.src = image.src;
    img.classList.add("slide-img");
    slide.appendChild(img);
  }

  function generateLevels(index, parent) {
    let point = document.createElement("div");
    point.classList.add("point");

    if (index === 0) {
      point.classList.add("active");
    }

    point.setAttribute("data-id", index);
    parent.appendChild(point);
  }

  function showSlider() {
    imagesArray.forEach((image, index) => {
      generateSlides(image, index, sliderWin);
      generateLevels(index, pointsWin);
    });
  }

  showSlider();

  function changeSlide(actionType = "next", slideNum = null) {
    sliderWin.children[selected].classList.remove("active");
    pointsWin.children[selected].classList.remove("active");

    if (slideNum !== null) {
      selected = slideNum;
    } else {
      if (actionType === "next") {
        selected++;
        if (selected === sliderCount) {
          selected = 0;
        }
      } else if (actionType === "prev") {
        selected--;
        if (selected < 0) {
          selected = sliderCount - 1;
        }
      }
    }

    sliderWin.children[selected].classList.add("active");
    pointsWin.children[selected].classList.add("active");

    if (actionType || slideNum !== null) {
      clearInterval(timer);
      timer = setInterval(changeSlide, interval * 1000);
    }
  }

  let timer = setInterval(changeSlide, interval * 1000);

  nextBTN.addEventListener("click", () => changeSlide("next"));
  prevBTN.addEventListener("click", () => changeSlide("prev"));

  pointsWin.addEventListener("click", (event) => {
    if (event.target.classList.contains("point")) {
      let pointID = parseInt(event.target.getAttribute("data-id"));
      changeSlide(null, pointID);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyT") {
      if (!showTools) {
        clearInterval(timer);
        document.querySelector(".showNavPanel").classList.add("active");
      } else {
        timer = setInterval(changeSlide, interval * 1000);
        document.querySelector(".showNavPanel").classList.remove("active");
      }
      showTools = !showTools;
    }

    if (event.code === "Space") {
      if (!pauseOn) {
        clearInterval(timer);
      } else {
        timer = setInterval(changeSlide, interval * 1000);
      }
      pauseOn = !pauseOn;
    }

    if (event.code === "ArrowLeft") {
      changeSlide("prev");
    }

    if (event.code === "ArrowRight") {
      changeSlide("next");
    }
  });

  sliderWin.addEventListener("touchstart", (event) => {
    dragging.startX = event.touches[0].clientX;
  });

  sliderWin.addEventListener("touchend", (event) => {
    dragging.endX = event.changedTouches[0].clientX;

    if (dragging.startX < dragging.endX) {
      changeSlide("prev");
    } else {
      changeSlide("next");
    }
  });
}
