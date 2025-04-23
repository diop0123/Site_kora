
let index = 0;
setInterval(() => {
  const slides = document.querySelector('.slides');
  index = (index + 1) % 3;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 3000);
