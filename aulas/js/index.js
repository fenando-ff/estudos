let imagens = document.querySelectorAll('.galeria img');
let modal = document.getElementById('modal');
let modalImag = document.getElementById('modalImg');
let close = document.getElementById('close');

imagens.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImag.src = img.src;
    });
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
});