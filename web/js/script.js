var tema = document.querySelector(".tema");
var temaKicsi = document.querySelector(".temaKicsi");
var body = document.body;
var gombF = document.querySelector(".gombF")
var gombV = document.querySelector(".gombV")
var logo = document.querySelector(".logo")

tema.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        tema.textContent = '🌙';
        logo.innerHTML = '<img class="w-50" src="kepek/logoVilagos.png" alt="logo" title="logo"></img>'
        tema.classList.remove("btn-outline-warning");
        tema.classList.add("btn-outline-dark");
        gombF.classList.remove("btn-outline-warning");
        gombF.classList.add("btn-outline-dark");
        gombV.classList.remove("btn-outline-warning");
        gombV.classList.add("btn-outline-dark");
    } else {
        tema.textContent = '☀️';
        logo.innerHTML = '<img class="w-50" src="kepek/logo.png" alt="logo" title="logo">'
        tema.classList.remove("btn-outline-dark");
        tema.classList.add("btn-outline-warning");
        gombF.classList.remove("btn-outline-dark");
        gombF.classList.add("btn-outline-warning");
        gombV.classList.remove("btn-outline-dark");
        gombV.classList.add("btn-outline-warning");
    }
});
temaKicsi.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        temaKicsi.textContent = '🌙';
        logo.innerHTML ='<img class="w-50" src="kepek/logoVilagos.png" alt="logo" title="logo">'
        temaKicsi.classList.remove("btn-outline-warning");
        temaKicsi.classList.add("btn-outline-dark");
        gombF.classList.remove("btn-outline-warning");
        gombF.classList.add("btn-outline-dark");
        gombV.classList.remove("btn-outline-warning");
        gombV.classList.add("btn-outline-dark");
    } else {
        temaKicsi.textContent = '☀️';
        logo.innerHTML = '<img class="w-50" src="kepek/logo.png" alt="logo" title="logo">'
        temaKicsi.classList.remove("btn-outline-dark");
        temaKicsi.classList.add("btn-outline-warning");
        gombF.classList.remove("btn-outline-dark");
        gombF.classList.add("btn-outline-warning");
        gombV.classList.remove("btn-outline-dark");
        gombV.classList.add("btn-outline-warning");
    }
});