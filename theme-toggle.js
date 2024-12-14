
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const sections = document.querySelectorAll('header, section.bg-gray-800, footer');
const texts = document.querySelectorAll('h1, h2, h3, p, a');


themeToggle.addEventListener('change', () => {
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-white');
  body.classList.toggle('bg-gray-100');
  body.classList.toggle('text-gray-900');

  sections.forEach((section) => {
    section.classList.toggle('bg-gray-800');
    section.classList.toggle('bg-gray-300');
  });

  texts.forEach((text) => {
    text.classList.toggle('text-gray-300');
    text.classList.toggle('text-gray-700');
  });
});
