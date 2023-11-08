"use strict"
let numAlmacenado = Array();
let numActual = Array("0");
let operacion = "none";
let resultado = 0;

function operar(num1, num2, operacion){
    switch (operacion) {
        case "+":
            resultado = (num1+num2)
            break;
        case "-":
            resultado = (num1-num2)
            break;
        case "*":
            resultado = (num1*num2)
            break;
        case "/":
            resultado = (num1/num2)
            break;
        case "none":
            resultado = (num1+num2) //cuando recive una resta se le pasa un numero negativo, para así poder hacer operaciones más complejas (por ejemplo, 5 * -6)
            break;
        default:
            resultado = "ERROR";
            alert(operacion);
            
            break;
    }

    return resultado;





}



$(function(){
    //numeros
    let dotTester=false;
    $(".pantalla").html(numActual);
    $(".equalbtn").prop("disabled", true) 

    $(".numbtn").click(function(){
        //mantener/quitar ZERO (si en el array solo hay un 0... y el boton dado no es un ".", eliminar 0)
        if(((numActual.length == 1) && (numActual[0] == "0") && ($(this).attr("value") != ".")))
        numActual.pop();

        //el punto solo saldrá una vez
        if($(this).attr("value") == "."){
            dotTester=true;
        }
            $(".dot").prop("disabled", dotTester) 

    
        
        //meter numeros en numActual
        numActual.push($(this).attr("value"));
        $(".pantalla").html(numActual);
        opTester=false;
    });

    //se pulsa una operacion y se mantiene hasta que se pulsa un boton
    let opTester=false;
    let masOperaciones=false;
    $(".opbtn").click(function(){
        $(".equalbtn").prop("disabled", false) 
        dotTester=false;
        $(".dot").prop("disabled", dotTester) 
        //posibilidad de numeros negativos 
        if(((numAlmacenado.length == 0) && (numActual.length == 1) && ($(this).attr("value")== "-")) || (opTester==true)){
            numAlmacenado = numActual;
            numActual = Array("0");
            numActual.pop();
            numActual.push($(this).attr("value"));
            $(".pantalla").html(numActual);
            opTester=false;
        } else {       
            //realizar más de una operación
            if(masOperaciones== true){
                let num1 = parseFloat(numAlmacenado.join(''))
                let num2 = parseFloat(numActual.join(''))
                let resultadoTemporal = operar(num1, num2, operacion);
                $(".pantalla").html(resultadoTemporal.toString());
                numAlmacenado = Array(resultadoTemporal.toString());
                numActual = Array("0");
                
            } else {
                numAlmacenado = numActual;
                numActual = Array("0");
            }

            operacion = $(this).attr("value");
            opTester=true;
            masOperaciones=true;
            
        }

        
        
    });


    $(".cbtn").click(function(){
        $(".equalbtn").prop("disabled", true) 
        numAlmacenado = Array();
        numActual = Array("0");
        operacion = "none";
        masOperaciones=false;
        opTester=false;
        dotTester=false;
        $(".dot").prop("disabled", dotTester) 
        resultado = 0;
        $(".pantalla").html(numActual);
    });

    
    $(".equalbtn").click(function(){
        $(this).prop("disabled", true) 
        dotTester=false;
        $(".dot").prop("disabled", dotTester) 
        let num1 = parseFloat(numAlmacenado.join(''))
        let num2 = parseFloat(numActual.join(''))
        $(".pantalla").html(operar(num1, num2, operacion));
        let stringTemporal = operar(num1, num2, operacion).toString();
        operacion = "none";
        numAlmacenado = Array(stringTemporal);
        numActual = Array("0");


    });

}) 
