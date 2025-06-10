window.onload = function() {
    setTimeout(function() {
        
        const jumpscare = document.getElementById("jumpscare");
        const screamSound = document.getElementById("scream-sound");

        jumpscare.classList.remove("hidden");
        jumpscare.style.opacity = 1;
        screamSound.play();
    }, 5000);
};