// 1.0 Oggetto document
console.log(document);

// 2.0 getElementById
const $paragrafo = document.getElementById("paragrafo");
console.log($paragrafo);

// 3.0 querySelector
const $titolo = document.querySelector("#titolo");
console.log($titolo);

// 4.0 Modifica il testo di un paragrafo
// 5.0 cambia lo stile
function modificaTesto() {
    $paragrafo.innerText = "Il testo e stato modificato!";
    $paragrafo.style.backgroundColor = "yellow";
    $paragrafo.style.fontSize = "30px";
}
modificaTesto();

// 6.0 Modifica l'HTML
const $button = document.querySelector("#mio");
$button.innerHTML = "<button> Ero un P </button>"


// 7.0 Crea una lista
// 8.0 Crea i list item
const $body = document.body;
const $container = document.getElementById("contenitore_lista");
const $ul = document.createElement('ul');
const elementi = ['primo', 'secondo', 'terzo', 'quarto', 'quinto'];

elementi.forEach((elemento) => {
    const $li = document.createElement('li');
    $li.innerText = elemento;
    $ul.appendChild($li);
});

$body.appendChild($ul);