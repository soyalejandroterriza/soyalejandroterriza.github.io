///////////////////////// FUNCIONES /////////////////////////


function addTilting() { // Adds the tilting effct
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // Prevents addding tilting when is a mobile device.
    if (isMobileDevice() == true){
        return;
    }

    let script = document.createElement("script");
    script.src = "/resources/Code/vanilla-tilt.js";
    document.head.appendChild(script);
}

///////////////////////// EJECUCIÓN /////////////////////////

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
addTilting();




