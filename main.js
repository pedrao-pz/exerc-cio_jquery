const form = $('#lista-tarefas');
let linhas = '';

$(document).ready(function () {
    alert('Bem vindo à sua Lista de Tarefas!');
    alert('Adicione suas tarefas na lista a seguir, depois pode descartá-las');
    
    const inputAdicionarTarefa = document.getElementById('add-tarefas');
        $('form').on('submit', function (e) {
            e.preventDefault();


    let linha = '<tr>';
    linha += `<td>${inputAdicionarTarefa.value}</td>`;
    linha += '</tr>';

    linhas =+ linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;
        })
})