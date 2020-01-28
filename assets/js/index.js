 //cria referência aos elemntos da página
 const $ = document.querySelector.bind(document)
 const formProduto = $("#formProduto")
 const inFrase = $("#inFrase")
 const tableFrase = $("#table")


function handleSubmitForm (event){
  event.preventDefault()
  const data = getData()
  createDataTable(data)

}

function handleDeleteAll(){
  tableFrase.lastElementChild.innerHTML= ""
}


function getData(){
  const fraseValue = inFrase.value
  const pali = palindrome(fraseValue)
  inFrase.value = ""


  const produtoCadastrado = {
      frase: fraseValue,
      palindrome: pali  
  }

  return produtoCadastrado
}

function createDataTable(verifica){

  const tableRow = createTableRow()
  const tableDataFrase = createTableData(verifica.frase)
  const tableDataValor = createTableData(verifica.palindrome)
  tableRow.appendChild(tableDataFrase)
  tableRow.appendChild(tableDataValor)
  tableFrase.children[1].appendChild(tableRow)
 
}

function createTableData(valor){
  const data = document.createElement("td")
  
  if (typeof valor === "string"){
      data.textContent = valor
  }else{
      data.appendChild(valor)
  }

  return data
  
}

function createTableRow(){
  const row = document.createElement("tr")
  return row
}

// function createButton (text, callback){
// const button = document.createElement("button")
// button.textContent = text
// button.onclick = callback

// return button

// }
function palindrome(str) {

  str1 = str.replace(/[^a-zA-Z0-9]/g, "")
  tam = str1.length

  fraseMod = str1.toUpperCase().split('')
  fraseInv = str1.toUpperCase().split('').reverse()
  iguais = true
  for (var i = 0; i < tam; i++) {
      if (fraseMod[i].charCodeAt() !== fraseInv[i].charCodeAt()) {
          iguais = false
          break
      }
  }
  if(iguais){
    return "Sim"
  }else{
    return "Não"
  }
  
}

inFrase.addEventListener("keydown", function(key){
  if(key.keyCode == 13){
    handleSubmitForm(key)
  }
})    
