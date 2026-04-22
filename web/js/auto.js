var tema = document.querySelector(".tema");
var temaKicsi = document.querySelector(".temaKicsi");
var body = document.body;
var logo = document.querySelector(".logo")

tema.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
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
});
temaKicsi.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
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
});