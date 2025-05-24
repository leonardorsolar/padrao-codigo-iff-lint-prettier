console.log('IFF')
// Variável declarada, mas nunca usada
const mensagem = 'hello world'

//Uso de variável antes da declaração (hoisting problem)
console.log(idade) // erro: 'idade' is used before it is defined
const idade = 30

// Função sem retorno explícito ou retorno inconsistente
function soma(a: number, b: number) {
  if (a > 0) {
    return a + b
  }
  // falta return aqui
}
