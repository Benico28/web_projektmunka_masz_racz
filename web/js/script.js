var tema = document.querySelector(".tema");
var body = document.body;
var gombF = document.querySelector(".gombF")
var gombV = document.querySelector(".gombV")

tema.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        tema.textContent = '🌙';
        tema.classList.remove("btn-outline-warning");
        tema.classList.add("btn-outline-danger");
        gombF.classList.remove("btn-outline-warning");
        gombF.classList.add("btn-outline-danger");
        gombV.classList.remove("btn-outline-warning");
        gombV.classList.add("btn-outline-danger");
    } else {
        tema.textContent = '☀️';
        tema.classList.remove("btn-outline-danger");
        tema.classList.add("btn-outline-warning");
        gombF.classList.remove("btn-outline-danger");
        gombF.classList.add("btn-outline-warning");
        gombV.classList.remove("btn-outline-danger");
        gombV.classList.add("btn-outline-warning");
    }
});