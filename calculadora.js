// criando calculadora
function calculadora() {

    // Aqui definimos as operações e recebemos o valor de entrada do usuário    
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));
    
    // Verificar se o valor correspondente a operação é válido
    if (!operacao ||  operacao >= 7) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {

        // Variáveis definidas, todas as entradas devem ser do tipo number        
        let n1 = Number(prompt('Digite o primeiro valor:'));
        let n2 = Number(prompt('Digite o segundo valor:'));
        let resultado;

        // Verificar se as variáveis tem validade (se string = Erro)
        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos!');
            calculadora();
        } else {

            // Definir as funções
            function soma() {
                resultado = n1 + n2;

                // Mostrar o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
                novaOperacao();
            }

            // Função para realizaruma nova operação
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    } 

/*     // Escolhendo operação, usando if && else
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    } 
*/
    // Switch case
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
}

calculadora(); 