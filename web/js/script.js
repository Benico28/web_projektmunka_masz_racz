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
        logo.innerHTML = '<img class="w-50" src="kepek/logoVilagos.webp" alt="logo" title="logo"></img>'
        tema.classList.remove("btn-outline-warning");
        tema.classList.add("btn-outline-dark");
        gombF.classList.remove("btn-outline-warning");
        gombF.classList.add("btn-outline-dark");
        gombV.classList.remove("btn-outline-warning");
        gombV.classList.add("btn-outline-dark");
    } else {
        tema.textContent = '☀️';
        logo.innerHTML = '<img class="w-50" src="kepek/logo.webp" alt="logo" title="logo">'
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
        logo.innerHTML = '<img class="w-50" src="kepek/logoVilagos.webp" alt="logo" title="logo">'
        temaKicsi.classList.remove("btn-outline-warning");
        temaKicsi.classList.add("btn-outline-dark");
        gombF.classList.remove("btn-outline-warning");
        gombF.classList.add("btn-outline-dark");
        gombV.classList.remove("btn-outline-warning");
        gombV.classList.add("btn-outline-dark");
    } else {
        temaKicsi.textContent = '☀️';
        logo.innerHTML = '<img class="w-50" src="kepek/logo.webp" alt="logo" title="logo">'
        temaKicsi.classList.remove("btn-outline-dark");
        temaKicsi.classList.add("btn-outline-warning");
        gombF.classList.remove("btn-outline-dark");
        gombF.classList.add("btn-outline-warning");
        gombV.classList.remove("btn-outline-dark");
        gombV.classList.add("btn-outline-warning");
    }
});

$(document).ready(function () {
    var maiDatum = new Date().toISOString().split('T')[0];

    var datumMezo = document.getElementById('vDatum');
    if (datumMezo) {
        datumMezo.value = maiDatum;
    }
});

$(document).ready(function () {
    var kivalasztott = localStorage.getItem('valasztottAuto');
    if (kivalasztott) {
        $('.autoInput').val(kivalasztott);
        localStorage.removeItem('valasztottAuto');
    }
});

$(document).ready(function () {
    var wrapper = document.getElementById('velemeny-sor');
    var gomb = document.querySelector('.gombV');

    function kartyaBeallitas(kartya) {
        var kontener = kartya.querySelector('.velemeny-szoveg-container');
        var szoveg = kartya.querySelector('.velemeny-szoveg');
        var ikon = kartya.querySelector('.nyito-ikon');

        if (szoveg && kontener && szoveg.scrollHeight > kontener.clientHeight) {
            ikon.style.display = 'block';
            kartya.style.cursor = 'pointer';
            kartya.onclick = function () {
                this.classList.toggle('nyitva');
            };
        }
    }

    document.querySelectorAll('.velemeny-kartya').forEach(kartyaBeallitas);

    if (gomb) {
        gomb.addEventListener('click', function () {
            var nev = document.getElementById('vNev')?.value || "Vendég";
            var datumInput = document.getElementById('vDatum').value;
            var veglegesDatum = datumInput ? datumInput.replace(/-/g, '.') : new Date().toISOString().split('T')[0].replace(/-/g, '.');
            var uzenet = document.getElementById('vUzenet')?.value || "";

            if (uzenet.trim() === "") {
                alert("Írj be üzenetet!");
            } else {
                var uj = document.createElement('div');
                uj.className = 'velemeny-kartya rovidBem p-3 m-2 rounded-3 flex-shrink-0';
                uj.innerHTML = `
                <h5 class="fw-bold">${nev}</h5>
                <p class="small">${veglegesDatum}</p>
                <div class="velemeny-szoveg-container">
                    <p class="velemeny-szoveg">${uzenet}</p>
                </div>
                <div class="text-center nyito-ikon" style="display: none;"><i class="bi bi-chevron-down"></i></div>
                `;

                if (wrapper) {
                    wrapper.appendChild(uj);
                    kartyaBeallitas(uj);

                    document.getElementById('vNev').value = "";
                    document.getElementById('vUzenet').value = "";
                    document.getElementById('vDatum').value = new Date().toISOString().split('T')[0];

                    uj.scrollIntoView({ behavior: 'smooth', inline: 'end' });
                } else {
                    console.error("Nem találom a #velemeny-sor elemet!");
                }
            }
        });
    }
});