var tema = document.querySelector(".tema");
var temaKicsi = document.querySelector(".temaKicsi");
var body = document.body;
var logo = document.querySelector(".logo")

function gombokFrissitese(isLightMode) {
    var reszletekGombok = document.querySelectorAll(".btn-outline-light, .btn-outline-dark");
    var erdekelGombok = document.querySelectorAll(".btn-outline-warning, .btn-outline-danger");

    reszletekGombok.forEach(gomb => {
        if (isLightMode) {
            gomb.classList.remove("btn-outline-light");
            gomb.classList.add("btn-outline-dark");
        } else {
            gomb.classList.remove("btn-outline-dark");
            gomb.classList.add("btn-outline-light");
        }
    });
}

tema.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    var isLight = body.classList.contains('light-mode');
    
    if (isLight) {
        tema.textContent = '🌙';
        tema.classList.remove("btn-outline-warning");
        tema.classList.add("btn-outline-dark");
        logo.innerHTML = '<img class="w-50" src="kepek/logoVilagos.png" alt="logo" title="logo"></img>'
    } else {
        tema.textContent = '☀️';
        tema.classList.remove("btn-outline-dark");
        tema.classList.add("btn-outline-warning");
        logo.innerHTML = '<img class="w-50" src="kepek/logo.png" alt="logo" title="logo"></img>'
    }
    gombokFrissitese(isLight);
});

temaKicsi.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    var isLight = body.classList.contains('light-mode');
    
    if (isLight) {
        temaKicsi.textContent = '🌙';
        temaKicsi.classList.remove("btn-outline-warning");
        temaKicsi.classList.add("btn-outline-dark");
        logo.innerHTML = '<img class="w-50" src="kepek/logoVilagos.png" alt="logo" title="logo"></img>'
    } else {
        temaKicsi.textContent = '☀️';
        temaKicsi.classList.remove("btn-outline-dark");
        temaKicsi.classList.add("btn-outline-warning");
        logo.innerHTML = '<img class="w-50" src="kepek/logo.png" alt="logo" title="logo"></img>'
    }
    gombokFrissitese(isLight);
});