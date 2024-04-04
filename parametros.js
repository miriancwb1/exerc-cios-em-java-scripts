function nomeIdade (nome,idade){

    return `meu nome ${nome} e minha idade e ${idade}`;
}
nomeIdade ('josé',18);

console.log (nomeIdade( 19, "Mirian")) 
console.log (nomeIdade( "Mirian",19)) 

function soma (numero1, numero2) {
    return numero1 + numero2;
}

function mutiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

console.log (soma(2)) 
console.log (mutiplica(soma(4, 5)))

