
const formConsultarCep = document.querySelector('#consultarCep') //  const está form por boa patica, para descrever da onde que veio essa variavel 
const inputCep = formConsultarCep.Cep
const divDados = document.querySelector('#dados')

 formConsultarCep.addEventListener('submit',function(event){
  event.preventDefault() // anula comportamento padrao de envio do form
  ConsultarCep( inputCep.value)
  
})
// consumir uma promise 
 async function ConsultarCep(cep){
  let response =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  let dadosCep = await response.json()
  divDados.innerHTML = `
  <p> Endereço: ${dadosCep.logradouro} </p>
  <p> localidade: ${dadosCep.localidade} </p>
  console.log(data) 
  `

}


