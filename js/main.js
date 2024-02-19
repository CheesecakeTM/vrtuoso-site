document.addEventListener("DOMContentLoaded", function() {
    const subscribeButton = document.querySelector('.subscribe');
    const popupContainer = document.querySelector('.popup-container');
    const popupCloseButton = document.querySelector('.popup-close-btn');

    function togglePopup() {
        popupContainer.classList.toggle('active');
    }

    subscribeButton.addEventListener('click', togglePopup);

    popupCloseButton.addEventListener('click', togglePopup);
});