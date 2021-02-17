
function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

}

function redirecionar(){
    window.open("https://www.instagram.com/");

}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value)

}
/*
function soma(n1, n2){
    return n1 + n2
}

function setReplace(frase, nome, novonome){
    return frase.replace(nome, novonome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


function validaridade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaridade(idade));

/*
var lista = ['Batata frita', 'Carne', 'Carré', 'Bife Bovino']
alert(list2[3])


var contador;
for(contador = 0; contador <= 10; contador++){
    alert(contador)
}



var d = new Date();
// alert(d.getMonth()+1);
alert(d.getUTCMinutes());
alert(d.getDay());
alert(d.getFullYear());
alert(d);


var count
for(count=0; count <= 5; count++){
    alert(count)
};



var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}



var idade = prompt("Qual é a sua idade?");

if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};


var frutas = [{nome:"maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome)


var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
alert(fruta.cor)

var lista = ["Maçã", "Pêra", "Laranja"]
lista.push("Uva");
lista.pop();
console.log(lista);
alert(lista[1]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.join(" - "));

var nome = "Iago Oliveira da Silva";
var idade = 16;
var idade2 = 10;
n1 = 5;
n2 = 3;
var frase = 'Japão é o melhor time do mundo';
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
alert(n1 * n2);
console.log(nome);
console.log(idade + idade2);
console.log(n1 * n2);
console.log(frase.replace("Japão", "Brasil").toUpperCase())
console.log(frase.toLowerCase())
*/