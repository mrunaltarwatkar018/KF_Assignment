const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');

hamburgerBtn.addEventListener('click', () => {
  // Toggle the 'open' class on navLinks
  navLinks.classList.toggle('open');
  
  // Change icon to X if menu is open, otherwise revert to hamburger
  if (navLinks.classList.contains('open')) {
    hamburgerBtn.textContent = '✕';
  } else {
    hamburgerBtn.textContent = '☰';
  }
});
