var table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick", function (event) {
    // var alvo = event.target;//TD
    // var paiDoAlvo = alvo.parentNode;//TR
    // paiDoAlvo.classList.Add("fadeOut");
    // paiDoAlvo.remove();
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 300);
});
