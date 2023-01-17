//02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados.

function tipoTriangulo(l1,l2,l3){
let tipo =""
if (l1==l2&&l2==l3) {
    tipo="Equilatero"    
}
else if ((l1==l2&&l2!=l3)||(l2==l3&&l3!=l1)||(l3==l1&&l1!=l2)) {
    tipo="Isósceles"
}
else if ((l1!=l2&&l2!=l3&&l3!=l1)) {
    tipo="Escaleno"
}
console.log(tipo)
}
tipoTriangulo(4,4,4)