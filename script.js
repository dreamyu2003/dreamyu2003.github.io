document.getElementById('year').textContent = new Date().getFullYear();
const links = [...document.querySelectorAll('nav a')];
const sections = links.map(link => document.querySelector(link.getAttribute('href')));
let scheduled = false;
function updateNavigation() {
  const current = sections.reduce((active, section) => section.getBoundingClientRect().top <= 150 ? section : active, sections[0]);
  links.forEach(link => {
    const active = link.getAttribute('href') === `#${current.id}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
}, { passive: true });
updateNavigation();
