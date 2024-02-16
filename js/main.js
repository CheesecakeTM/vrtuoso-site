document.addEventListener("DOMContentLoaded", function() {
    const subscribeButton = document.querySelector('.subscribe');
    const popupContainer = document.querySelector('.popup-container');
    const popupCloseButton = document.querySelector('.popup-close-btn');

    // Function to toggle popup-container's active state
    function togglePopup() {
        popupContainer.classList.toggle('active');
    }

    // Event listener for subscribe button
    subscribeButton.addEventListener('click', togglePopup);

    // Event listener for popup close button
    popupCloseButton.addEventListener('click', togglePopup);
});