import '@picocss/pico';
import '.'
const formConsultarCep = document.querySelector('#consultarCep');
const inputCep = formConsultarCep.cep;
const divDados = document.querySelector('#dados')
const btnConsultarCep = document.querySelector('#btnConsultarCep')
/*
const loader = ` <a href="#" aria-busy="true">Consultando CEP, aguarde...</a>
` */

formConsultarCep.addEventListener('submit', event => {
  event.preventDefault()  //anula o comportamento padrão de envio do form  
ativaLoader(true)
  consultarCep(inputCep.value)

})


async function consultarCep(cep) {
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  let dadosCep = await response.json()
  if(dadosCep.erro){
    divDados.innerHTML=`
    <div class="erro"> CEP nao encontrado!<div/>`
  }else{

  divDados.innerHTML = `
    <p>Endereço: ${dadosCep.logradouro}</p>
    <p>Localidade: ${dadosCep.localidade} </p>

    <p>UF:${dadosCep.uf} </p>
    <p>DDD:${dadosCep.ddd} </p>
    `
  }
ativaLoader(false)
}

function ativaLoader(ativo) {
  if (ativo) {
    btnConsultarCep.setAttribute('aria-busy', 'true')
    btnConsultarCep.textContent('Consultando CEP...')
  } else {
    btnConsultarCep.removeAttribute('aria-busy')
    btnConsultarCep.textContent= 'consultar'
  }
}
