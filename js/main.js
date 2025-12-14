const images = [
  "assets/perfumeBottle.jpeg",
  "assets/perfumeBottle2.jpeg",
  "assets/perfumeBottle3.jpeg",
  "assets/perfumeBottle4.jpeg"
];

let currentImageIndex = 0;

const mainImage = document.getElementById("mainImage");
const dots = document.querySelectorAll(".dot");
const thumbs = document.querySelectorAll(".thumb");

const prevBtn = document.getElementById("prevImg");
const nextBtn = document.getElementById("nextImg");

function updateGallery(index) {
  const actualIndex = index % images.length;
  currentImageIndex = actualIndex;
  mainImage.src = images[actualIndex];

  dots.forEach(d => d.classList.remove("active"));
  dots[actualIndex].classList.add("active");

  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  let idx = currentImageIndex - 1;
  if (idx < 0) idx = images.length - 1;
  updateGallery(idx);
});

nextBtn.addEventListener("click", () => {
  let idx = currentImageIndex + 1;
  if (idx >= images.length) idx = 0;
  updateGallery(idx);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    updateGallery(parseInt(dot.dataset.index));
  });
});

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    updateGallery(parseInt(thumb.dataset.index));
  });
});

const accHeaders = document.querySelectorAll(".acc-header");

accHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const parent = header.parentElement;
    const isOpen = parent.classList.contains("open");

    document.querySelectorAll(".acc-item").forEach(item => {
      item.classList.remove("open");
    });

    if (!isOpen) {
      parent.classList.add("open");
    }
  });
});

const subscriptionRadios = document.querySelectorAll('input[name="subscriptionType"]');
const singleSubContent = document.getElementById("singleSubContent");
const doubleSubContent = document.getElementById("doubleSubContent");
const mainPrice = document.querySelector('.price-wrap h3.price');
const mainOldPrice = document.querySelector('.price-wrap .old-price');

subscriptionRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "single") {
      singleSubContent.classList.add("show");
      doubleSubContent.classList.remove("show");
      if (mainPrice) mainPrice.textContent = "$99.99";
      if (mainOldPrice) mainOldPrice.textContent = "$146";
    } else if (radio.value === "double") {
      singleSubContent.classList.remove("show");
      doubleSubContent.classList.add("show");
      if (mainPrice) mainPrice.textContent = "$169.99";
      if (mainOldPrice) mainOldPrice.textContent = "$246";
    }
  });
});
