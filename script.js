// FAÇA UM SITE QUE PEÇA PARA O USUÁRIO PARA INSERIR SEU EMAIL E SUA SENHA, VOCÊ IRÁ CHECAR SE A CONTA INSERIDA PERTENCE AO "BANCO DE DADOS" QUE NO NOSSO CASO É UMA LISTA COM AS CONTAS CADASTRAS, SEGUE A LISTA:
// usuarios = [
//     ["joao@gmail.com", "123456"],
//     ["abel@gmail.com", "deusefiel"],
//     ["maria@gmail.com", "456789"],
//     ["antonio@gmail.com", "euamominhamae"],
//     ["ana@gmail.com", "ana1996"],
//     ]

// const formulario = document.querySelector('#formulario')
// const caixaEmail = document.querySelector('#login')
// const caixaSenha = document.querySelector('#password')
// const resultado = document.querySelector('#resultado')

// const usuarios = [
//     ["joao@gmail.com", "123456"],
//     ["abel@gmail.com", "deusefiel"],
//     ["maria@gmail.com", "456789"],
//     ["antonio@gmail.com", "euamominhamae"],
//     ["ana@gmail.com", "ana1996"],
// ]

// function Logar(event){
//     event.preventDefault()
//     let controle = false
//     for(let usuario_atual of usuarios){
//         if(usuario_atual[0] === caixaEmail.value && usuario_atual[1] === caixaSenha.value){
//             resultado.textContent = "Login efetuado com sucesso"
//             controle = true
//             caixaEmail.value = ""
//             caixaSenha.value = ""
//             break
//         }
//     }
//     if(!controle){
//         resultado.textContent = "Email ou Senha Incorreto!"
//     }
// }

// formulario.addEventListener('submit', Logar)

// const titulo = document.querySelector('#titulo')
// const principal = document.querySelector('#principal')
// const secundario = document.querySelector('#secundario')
// const terciario = document.querySelector('#terciario')
// const normal = document.querySelector('#normal')

// function mudarClasse(nome_da_classe){
//     titulo.className = ""
//     titulo.classList.add(nome_da_classe)
// }

// principal.addEventListener('click', ()=> mudarClasse("titulo_principal"))
// secundario.addEventListener('click', ()=> mudarClasse("titulo_secundario"))
// terciario.addEventListener('click', ()=> mudarClasse("titulo_terciario"))
// normal.addEventListener('click', ()=> mudarClasse(""))

const imagem = document.querySelector('#img')
const grande = document.querySelector('#grande')
const medio = document.querySelector('#medio')
const pequeno = document.querySelector('#pequeno')
const arred = document.querySelector('#arredondado')
const circulo = document.querySelector('#circular')

function alterarTamanho(style){
    imagem.style.maxWidth = "";
    imagem.style.maxWidth = style;
}

function arredondar(style){
    imagem.style.borderRadius = "";
    imagem.style.borderRadius = style;
}

grande.addEventListener('click',() => alterarTamanho("420px"))
medio.addEventListener('click',() => alterarTamanho("320px"))
pequeno.addEventListener('click',() => alterarTamanho("180px"))
arred.addEventListener('click', ()=> arredondar("15px"))
circulo.addEventListener('click',()=>arredondar("50%"))