let num1;
let num2;
let operacao;
let escolha;

do{

    operacao = prompt`
    
    Somar ............. 1
    Subtrair .......... 2
    Multiplicar........ 3
    Dividir............ 4

    Qual operação deseja execultar ? 
    `
    num1 = prompt("Digite um número: ")
    num2 = prompt("Digite outro número: ")
    
    
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
    else if(operacao == "3"){
        function multiplicar(num1,num2){
            return Number(num1)*Number(num2)
        }
        alert(multiplicar(num1,num2))
    }
    else if(operacao == "4"){
        function Dividir(num1,num2){
            return Number(num1)/Number(num2)
        }
        alert(Dividir(num1,num2))
    }
    else{
        alert("Operação Inválida!")
    }

    escolha = prompt("Deseja continuar? S/N")

}while(escolha == "s" || escolha == "S")