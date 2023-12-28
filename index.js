let nome = "Guilherme"; // Substitua pelo seu nome
let nivel = "15.000"; // Substitua pelo numero de pontos de nível
let rank

if(nivel <= 1.000){
    rank = "Ferro"
}
else if(nivel >= 1.001 && nivel <= 2.000){
    rank = "Bronze"
}
else if(nivel >= 2.001 && nivel <= 5.000){
    rank = "Prata"
}
else if(nivel >= 5.001 && nivel <= 7.000){
    rank = "Ouro"
}
else if(nivel >= 7.001 && nivel <= 8.000){
    rank = "Platina"
}
else if(nivel >= 8.001 && nivel <= 9.000){
    rank = "Ascendente"
}
else if(nivel >= 9.001 && nivel <= 10.000){
    rank = "Imortal"
}
else if(nivel >= 10.001) {
    rank = "Radiante"
}

let texto = `O Herói de nome ${nome} está no nível de ${rank}`
console.log(texto);