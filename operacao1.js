function calcular(){
    var operacao = document.querySelector('#operacao').value;
    var numero1 = document.querySelector('#numero1').value;
    var numero2 = document.querySelector('#numero2').value;

    if(numero1 == '' || numero1 == null){
        alert('Por favor digite um numero válido para operacao (numero1)');
        document.querySelector('#resul').value="Sem resultado";

    }else if (numero2 == '' || numero2 == null){
        alert('Por favor digite um numero válido para operacao (numero2)');
        document.querySelector('#resul').value="Sem resultado";

    }else if (document.querySelector('#resul').value==NaN){
        document.querySelector('#resul').value=resultado;

    }else{
        var resultado = null;
        //forçando o tipo de variável
        numero1 = parseFloat(numero1);
        numero2 = parseFloat(numero2);
    
        switch(operacao){
            case '1': //subtração
            resultado = numero1 - numero2;
            break;
    
            case '2': //adição
            resultado = numero1 + numero2;
            break;
    
            case '3': //multiplicação
            resultado = numero1 * numero2;
            break;
    
            case '4': //divisão
            resultado = numero1 / numero2;
            break;
    
            default:
            alert('A opção selecionada é inválida');
            return false;
        }
    document.querySelector('#resul').value=resultado;
    }  
}