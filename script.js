let num1;
let num2;
let operacao;
let escolha;

do{
    num1 = prompt("Digite um número: ")
    num2 = prompt("Digite outro número: ")
    
    operacao = prompt`
    somar ............. 1
    subtrair .......... 2

    Qual operação deseja execultar ? 
    `
    if(operacao == "1"){
        function soma(num1,num2){
            return parseFloat(num1) + parseFloat(num2)
        }
        alert(soma(num1,num2))
    }
    else if(operacao == "2"){
        function subtracao(num1,num2){
            return parseFloat(num1) - parseFloat(num2)
        }
        alert(subtracao(num1,num2))
    }

    escolha = prompt("Deseja continuar? S/N")
}while(escolha != "s" || escolha != "S")