

// Comportamiento del botón GitHub
document.getElementById("github_button").addEventListener("click", function() {
    var url = "https://github.com/soyalejandroterriza";
    window.open(url, "_blank");
});

// Comportamiento del botón LinkedIn
document.getElementById("linkedin_button").addEventListener("click", function() {
    var url = "https://www.linkedin.com/in/soyalejandroterriza";
    window.open(url, "_blank");
});

// Comportamiento del botón Email
document.getElementById("linkedin_button").addEventListener("click", function() {
    var url = "mailto:soyalejandroterriza@gmail.com";
    window.open(url);
});

// Comportamiento del botón Itch.io
document.getElementById("itch.io_button").addEventListener("click", function() {
    var url = "https://soyalejandroterriza.itch.io/";
    window.open(url);
});

// Añadir tilting
let script = document.createElement("script");
script.src = "/resources/Code/vanilla-tilt.js";
document.head.appendChild(script);

/* data-tilt data-tilt-reverse="true" data-tilt-scale="1.2" */




