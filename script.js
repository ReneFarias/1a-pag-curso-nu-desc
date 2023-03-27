/* atribulo console.log usado para imprimir coisas no cosole de navegador */
/* console.log("teste"); */
/* a function pode definir parametros antes dos parentes para a mesma, mas sua utilidade é para executar trechos blocos de codigos para executar algo especifico */
function getValue() {
    /* a var para definir uma variavel, documente.getElementById("") serve para pegar o elemento pelo id dado, o value que seria o valor que é o campo de texto */
    var value = document.getElementById("nome").value;
    /* console.log(value); */
    /* pegou o elemento result pela id, e com  o hinnerHTML que pega o valor de dentro do html desse elemento, e depois atribui valores para ele depois do = */
    document.getElementById("result").innerHTML = 'Bem Vindo ' + value + "!";
}
/* removeValue para remover o valor, pega e altera o valor para o valor nada */
function removeValue(){
    document.getElementById("nome").value = "";
    /* segue a mesma logica para limpar o valor colocado no campo entrar */
    document.getElementById("result").innerHTML = "";
}