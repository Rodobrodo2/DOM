const $form = document.getElementById('formRegistrazione');

// eventListener per il submit
$form.addEventListener('submit', event => {
    event.preventDefault(); //Per prevenire l'invio del form

    const $nome = document.getElementById('nome').value.trim();
    const $cognome = document.getElementById('cognome').value.trim();

    if (!$nome || !$cognome) {
        alert("Compila i campi")
        return;
    }

    alert("Campi compilati corretamente. Invio in corso... ")
    $form.submit();
});