const botonQR = document.getElementById('QR');
const imagenContainer = document.getElementById('imagenContainer');

botonQR.addEventListener('click', () => {
    imagenContainer.style.visibility = 'visible';
    imagenContainer.style.opacity = '1';
});

imagenContainer.addEventListener('click', () => {
    imagenContainer.style.opacity = '0';
    setTimeout(() => {
        imagenContainer.style.visibility = 'hidden';
    }, 200);
});