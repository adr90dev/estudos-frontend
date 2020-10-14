//var a viavel var é uma variavel de escopo (escopo é algo que esta em determinado local) global, ou seja, podera ser acessado por todo o codigo, e não só ponde ele foi criado.
//let é uma variavel de escopo local
//const é de escopo global, mas imutável

/*
case sensitive

há outras mandeiras de acessar elementos alem do id. Podemos acessar por tags(getElementByTagName()).
podemos acessar por id: getElementById()
podemos acessar por nome: getElementsByName()
podemos acessar por classe: getELementsByClassName()
podemos acessar por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome(){
    let txtNome =   document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector ('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto (){
    let txtAssunto = document.querySelector ('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Digite um assunto de no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso!')
    }else{
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}

function mapaZoomIn(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaZoomOut(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}



