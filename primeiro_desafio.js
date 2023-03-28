// Faça um programa para calcular o valor de uma viagem.

// você terá 3 variaveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por km;
// 3- Distância em km da viagem;
//
const PrecoCombustivel = 5.79;
const kmPorlitros = 10;
const distanciaEmk = 100;

const litrosConsumidos = distanciaEmk / kmPorlitros;
const valorGasto = litrosConsumidos * PrecoCombustivel;
console.log(valorGasto);