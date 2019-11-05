var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-paciente");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var ul = document.querySelector(".mensagens-de-erro");
    ul.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var trPaciente = montaTr(paciente);

    var table = document.querySelector("#tabela-pacientes");

    table.appendChild(trPaciente);
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {
    var trPaciente = document.createElement("tr");
    trPaciente.classList.add("paciente");

    trPaciente.appendChild(criaTd(paciente.nome, "info-nome"));
    trPaciente.appendChild(criaTd(paciente.peso, "info-peso"));
    trPaciente.appendChild(criaTd(paciente.altura, "info-altura"));
    trPaciente.appendChild(criaTd(paciente.gordura, "info-dordura"));
    trPaciente.appendChild(criaTd(paciente.imc, "info-imc"));

    return trPaciente;
}

function criaTd(dados, classe) {
    var td = document.createElement("td");
    td.textContent = dados;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if(!validaNome(paciente.nome)){
        erros.push("Nome inválido! Precisa ser maior que 2");
    }

    if(!validaGordura(paciente.gordura)){
        erros.push("Quantidad de gordura inválida! Precisa ser maior que 0");
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector(".mensagens-de-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}