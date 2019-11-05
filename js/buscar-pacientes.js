var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    var erroAjax = document.querySelector("#erro-ajax");
    xhr.addEventListener("load", function () {
        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            // for (var i = 0; i < pacientes.length; i++) {
            //     var paciente = pacientes[i];

            //     adicionaPacienteNaTabela(paciente);
            // }

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        xhr.send();

    });
});