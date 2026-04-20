var tema = document.querySelector(".tema");
var temaKicsi = document.querySelector(".temaKicsi");
var body = document.body;

tema.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        tema.textContent = '🌙';
        tema.classList.remove("btn-outline-warning");
        tema.classList.add("btn-outline-danger");
    } else {
        tema.textContent = '☀️';
        tema.classList.remove("btn-outline-danger");
        tema.classList.add("btn-outline-warning");
    }
});
temaKicsi.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        temaKicsi.textContent = '🌙';
        temaKicsi.classList.remove("btn-outline-warning");
        temaKicsi.classList.add("btn-outline-danger");
    } else {
        temaKicsi.textContent = '☀️';
        temaKicsi.classList.remove("btn-outline-danger");
        temaKicsi.classList.add("btn-outline-warning");
    }
});