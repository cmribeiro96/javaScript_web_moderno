//04)Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function valores(valor1, valor2) {
  console.log(
    `divisão=${Math.floor(valor1 / valor2)}\nresto=${valor1 % valor2}`
  );
}
valores(7, 3);
