// Nav

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const nav = document.querySelector(".nav nav");

  hamburgerBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    hamburgerBtn.classList.toggle("change");
  });
});

// Gallery

const btnPrevMedia = document.querySelector(".btn-prev-media");
const btnNextMedia = document.querySelector(".btn-next-media");

const mediaItems = [
  { type: "video", src: "video1.mp4" },
  { type: "image", src: "photo1.jpg" },
  { type: "video", src: "video2.mp4" },
  { type: "image", src: "photo2.jpg" },
  { type: "video", src: "video3.mp4" },
  { type: "image", src: "photo3.jpg" },
  { type: "video", src: "video4.mp4" },
  { type: "image", src: "photo4.jpg" },
  { type: "video", src: "video5.mp4" },
  { type: "image", src: "photo5.jpg" },
  { type: "video", src: "video7.mp4" },
  { type: "image", src: "photo6.jpg" },
  { type: "video", src: "video8.mp4" },
  { type: "image", src: "photo7.jpg" },
];

let currentMediaIndex = 0;

const updateMediaCarousel = () => {
  const mediaContainer = document.querySelector(".media-container");
  mediaContainer.innerHTML = '';

  let numberOfItems;
  const viewportWidth = window.innerWidth;

  if (viewportWidth <= 600) {
    numberOfItems = 1;
  } else if (viewportWidth <= 1025) {
    numberOfItems = 2;
  } else {
    numberOfItems = 3;
  }

  for (let j = 0; j < numberOfItems; j++) {
    const mediaIndex = (currentMediaIndex + j) % mediaItems.length;
    const mediaItem = mediaItems[mediaIndex];
    let mediaElement;

    if (mediaItem.type === "video") {
      mediaElement = `<video class="media" src="${mediaItem.src}" controls></video>`;
    } else if (mediaItem.type === "image") {
      mediaElement = `<img class="media" src="${mediaItem.src}" alt="Image ${mediaIndex + 1}" />`;
    }

    mediaContainer.innerHTML += `<div class="media-item">${mediaElement}</div>`;
  }

  const videoElements = document.querySelectorAll(".media-item video");
  videoElements.forEach(video => {
    video.addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      }
    });

    video.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        video.controls = true;
      } else {
        video.controls = false;
      }
    });
  });
};

btnNextMedia.addEventListener("click", () => {
  const viewportWidth = window.innerWidth;
  let numberOfItems = 3;

  if (viewportWidth <= 600) {
    numberOfItems = 1;
  } else if (viewportWidth <= 1025) {
    numberOfItems = 2;
  }

  currentMediaIndex += numberOfItems;
  if (currentMediaIndex >= mediaItems.length) {
    currentMediaIndex = 0;
  }
  updateMediaCarousel();
});

btnPrevMedia.addEventListener("click", () => {
  const viewportWidth = window.innerWidth;
  let numberOfItems = 3;

  if (viewportWidth <= 600) {
    numberOfItems = 1;
  } else if (viewportWidth <= 1025) {
    numberOfItems = 2;
  }

  currentMediaIndex -= numberOfItems;
  if (currentMediaIndex < 0) {
    currentMediaIndex = mediaItems.length - numberOfItems;
  }
  updateMediaCarousel();
});

updateMediaCarousel();

window.addEventListener("resize", updateMediaCarousel);



