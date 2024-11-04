const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const indicators = document.querySelectorAll(".indicator");

const testimonials = [
  {
    icon: "review-one.png",
    text: "שרה: קליניקת Victoria Aesthetic שינתה את העור שלי! הטיפולים פנים הם מדהימים, והצוות כל כך ידידותי ומקצועי.",
  },
  {
    icon: "review-two.png",
    text: "יוחנן: ניסיתי כמה טיפולי גוף כאן, והתוצאות מדהימות. אני מרגיש יותר בטוח והעור שלי נראה נהדר.",
  },
  {
    icon: "review-one.png",
    text: "דוד: אחרי עיסוי רקמות עמוק בויקטוריה, הגב שלי הפסיק לכאוב. אני ממליץ על זה לכל מי שסובל מכאב כרוני.",
  },
  {
    icon: "review-two.png",
    text: "אלנה: הטיפולים נגד צלוליט כאן הם פשוט קסם. הרגליים שלי נהיו חלקות ומחוזקות אחרי רק כמה טיפולים.",
  },
  {
    icon: "review-one.png",
    text: "דניאל: אני שמח שמצאתי את הסלון הזה. טיפולי רפלקסולוגיה עוזרים לי להתמודד עם לחץ ועייפות. מומחים מצוינים!",
  },
  {
    icon: "review-two.png",
    text: "יעל: השלמתי סדרת מזותרפיה לפנים, והתוצאות עלו על כל הציפיות.",
  },
  {
    icon: "review-two.png",
    text: "לאה: הסרת שיער בלייזר כאן היא באמת מציאה. ההליך מהיר ולא כואב, והתוצאה מחזיקה מעמד זמן רב.",
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
