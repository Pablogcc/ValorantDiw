const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const sections = document.querySelectorAll('header, section.bg-gray-800, footer');
const texts = document.querySelectorAll('h1, h2, h3, p, a');

themeToggle.addEventListener('change', () => {
  body.classList.toggle('bg-gray-900');
  body.classList.toggle('text-white');
  body.classList.toggle('bg-red-100');
  body.classList.toggle('text-blue-950');

  sections.forEach((section) => {
    section.classList.toggle('bg-gray-800');
    section.classList.toggle('bg-red-300');
  });

  texts.forEach((text) => {
    text.classList.toggle('text-gray-300');
    text.classList.toggle('text-blue-950');
  });

  const buttons = document.querySelectorAll('a.bg-red-500');
  buttons.forEach((button) => {
    button.classList.toggle('bg-red-500');
    button.classList.toggle('hover:bg-red-600');
    button.classList.toggle('bg-red-800');
    button.classList.toggle('hover:bg-red-900');
  });
});
