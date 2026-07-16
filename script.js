// Selektiranje svih slika u galeriji
const images = document.querySelectorAll('.gallery img');

// Elementi lightboxa
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// Klik na sliku → otvara fullscreen prikaz
images.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

// Klik na X → zatvara fullscreen prikaz
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
