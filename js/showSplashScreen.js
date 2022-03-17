(function() {
    const referrer = document.referrer;

    if (referrer.includes("index") == true) {
        const splash_screen = document.getElementById("splash-screen");
        splash_screen.classList.remove("invisible");
    }
})();

