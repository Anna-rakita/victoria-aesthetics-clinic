// Slider testimonials

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const indicators = document.querySelectorAll(".indicator");

const testimonials = [
  {
    icon: "review-one.png",
    text: "Sarah: Victoria Aesthetic Clinic has transformed my skin! The facials are incredible, and the staff is so friendly and professional.",
  },
  {
    icon: "review-two.png",
    text: "John: I’ve tried several body treatments here, and the results are amazing. I feel more confident and my skin looks great",
  },
  {
    icon: "review-one.png",
    text: "David: After a deep tissue massage at Victoria, my back stopped hurting. I recommend it to anyone suffering from chronic pain.",
  },
  {
    icon: "review-two.png",
    text: "Elena: The anti-cellulite treatments here are simply magical. My legs became smooth and toned after just a few sessions.",
  },
  {
    icon: "review-one.png",
    text: "Daniel: I'm glad I found this salon. Reflexology sessions help me cope with stress and fatigue. Excellent specialists!",
  },
  {
    icon: "review-two.png",
    text: "Yael: I completed a course of mesotherapy for my face, and the results exceeded all expectations. ",
  },
  {
    icon: "review-two.png",
    text: "Leah: Laser hair removal here is a real find. The procedure is quick and painless, and the result lasts a long time.",
  },
];

let i = 0;

const updateCarousel = () => {
  document.querySelectorAll(".testimonial")[0].querySelector(".icon").src =
    testimonials[i].icon;
  document
    .querySelectorAll(".testimonial")[0]
    .querySelector(".text").textContent = testimonials[i].text;

  document.querySelectorAll(".testimonial")[1].querySelector(".icon").src =
    testimonials[(i + 1) % testimonials.length].icon;
  document
    .querySelectorAll(".testimonial")[1]
    .querySelector(".text").textContent =
    testimonials[(i + 1) % testimonials.length].text;

  indicators.forEach((indicator, index) => {
    if (index === Math.floor(i / 2)) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
};

btnNext.addEventListener("click", () => {
  i += 2;
  if (i >= testimonials.length) {
    i = 0;
  }
  updateCarousel();
});

btnPrev.addEventListener("click", () => {
  i -= 2;
  if (i < 0) {
    i = testimonials.length - 2;
  }
  updateCarousel();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    i = index * 2;
    updateCarousel();
  });
});

// Initial update
updateCarousel();
