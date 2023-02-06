const form = document.getElementById('tarefa-nova'); 
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeTarefa = document.getElementById('tarefa');

    let linha = '<li>';
    linha += `<div>${inputNomeTarefa.value}</div>`;
    linha += '</li>';

    linhas += linha;

    const corpoUl = document.querySelector('ul');
    corpoUl.innerHTML = linhas;
})

$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('a').click(function() {
        $('ul').fadeIn()
    })

    $('ul').on('click',function(){
        $('li').css("text-decoration","line-through")
    });

})