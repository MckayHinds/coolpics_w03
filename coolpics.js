document.querySelector('#menu-button')?.addEventListener('click', () => {
  document.querySelector('nav ul')?.classList.toggle('show');
});
// --- Mobile Menu Toggle ---
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// --- Responsive Menu Reset ---
function handleResize() {
  if (window.innerWidth > 1000) {
    navMenu.classList.add('show');
  } else {
    navMenu.classList.remove('show');
  }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// --- Modal Viewer Setup ---
const gallery = document.querySelector('.gallery');

// Create the <dialog> dynamically and append to body
const modal = document.createElement('dialog');
modal.id = 'image-viewer';
modal.innerHTML = `
  <img id="viewer-img" src="" alt="">
  <button class="close-viewer" aria-label="Close modal">X</button>
`;
document.body.appendChild(modal);

const modalImage = modal.querySelector('#viewer-img');
const closeButton = modal.querySelector('.close-viewer');

// Open modal with clicked image
gallery.addEventListener('click', (event) => {
  const img = event.target.closest('img');
  if (img) {
    const base = img.getAttribute('src').split('-')[0]; // e.g., "norris"
    const alt = img.getAttribute('alt');
    modalImage.src = `${base}-full.jpeg`;
    modalImage.alt = alt;
    modal.showModal();
  }
});

// Close modal on close button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// Close modal on outside click
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
