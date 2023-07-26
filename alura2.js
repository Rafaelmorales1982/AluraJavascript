console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvadorkkk";
let destinoExiste = false;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
//utilizando while para pegar a lista de cidade no Array

let contador = 0; //sempre inicia com 0
while (contador < listaDeDestinos.length) {
  //utilizando listaDeDestinos.length verifica tamanho da lista

  if (listaDeDestinos[contador] == destino) {
    console.log(`Destino existe "${destino}"`);
    destinoExiste = true;
    break; //para quando achar o destino
  } else {
    console.log(`Destino não existe "${destino}"`);
    destinoExiste = false;
    break; //para quando não ter o destino
  }
  contador += 1;
}

if (destinoExiste == true) {
  const ok = "Boa viagem!!";
  console.log(`${ok} para ${destino}`);
} else {
  const nao = "infelizmente não vai viajar";
  console.log(`${nao}`);
}
