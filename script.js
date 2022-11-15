let num1;/*cria uma varivel que recebe o primeiro numero para ser calculado */ 
let num2;/*let num2, cria uma varivel que recebe o segundo numero para ser calculado */ 
let operacao;/*Let operação serve pra definir qual a operação que será executada.*/
let escolha; /*Let  escolha guarda o número correspondente a operação que ele deseja fazer o cálculo.*/

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

   /* 
    Prompt é o comando que mostra o texto e guardar na variável. Desse modo
    o usuário vai ver as opções e escolher a de sua preferência, para iniciar o calculo.
    Num1 irá guardar o primeiro número que o usuário digitou e o Num2 guarda o segundo número que foi digitado*/

    
    
    if(operacao == "1"){
        function soma(num1,num2){
            return parseFloat(num1) + parseFloat(num2)
        }
        alert(soma(num1,num2))
        /*If operação da uma condição, se operação for igual a:

        o Function soma, irá dizer se o usuário colocar 1 os dois números serão somados. 
        
        O return vai específicar o os valores retornados pela função, e O parseFloat tem a função de analisar um argumento de string e retorna um número de ponto flutuante. Logo o alert que funciona como uma caixa, irá guardar os diálogo que foram mostrados na  tela do usuário.*/
        


    }
    else if(operacao == "2"){
        function subtracao(num1,num2){
            return parseFloat(num1) - parseFloat(num2)
        }
        alert(subtracao(num1,num2))
        
       /* O Else é a contradição do If pra dar vez a outras operações esse primeiro é o Else da operação 2 que se refere a subtração.
        
        o Function subtração, irá dizer q a operação 2 irá subtrair os valores. O return vai específicar o os valores retornados pela função assim o alert que funciona como uma caixa irá guardar os diálogo que foram mostrados na  tela do usuário.*/
        
    }
    else if(operacao == "3"){
        function multiplicar(num1,num2){
            return Number(num1)*Number(num2)
        }
        alert(multiplicar(num1,num2))

        /*O Else If  é a contradição dos anteriores pra dar vez a outro que será o  Else da operação 3 referente a multiplicação .
        o Function multiplicação, irá dizer q a operação 3 irá multiplicar os valores. O return vai específicar o os valores retornados pela função assim o alert que funciona como uma caixa irá guardar os diálogo que foram mostrados na  tela do usuário*/

    }
    else if(operacao == "4"){
        function Dividir(num1,num2){
            return Number(num1)/Number(num2)
        }
        alert(Dividir(num1,num2))

        /*O último Else If  é a contradição dos outro agora se operação for igual a 4  Ele irá  dividir os números.
        o Function divisão, irá dizer q a operação 4 irá dividir os valores. O return vai específicar o os valores retornados pela função assim o alert que funciona como uma caixa irá guardar os diálogo que foram mostrados na  tela do usuário. */
    }
    else{
        alert("Operação Inválida!")
    }

    escolha = prompt("Deseja continuar? S/N")

}while(escolha == "s" || escolha == "S")

    /*O Else ele diz se não for escolhido nenhuma das opções sugeridas pela calculadora então essa opção é inválida. E logo mostra a mensagem:  
    "deseja continuar? S/N", uma proposta do while  que é uma estrutura de repetição, enquanto a  mensagem for igual a s o usuário deseja continuar se a mensagem for N o usuário não deseja mais utilizar a calculadora. */