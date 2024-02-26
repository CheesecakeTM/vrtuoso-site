document.addEventListener("DOMContentLoaded", function() {
    const fotoButton = document.querySelector('.foto-evento');
    const imagesContainer = document.querySelector('.image-grid');

    function toggleImages() {
        imagesContainer.classList.toggle('active');
    }

    fotoButton.addEventListener('click', toggleImages);
});