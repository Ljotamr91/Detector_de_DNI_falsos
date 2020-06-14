/*
    Detector_de_DNI_falsos
*/

function calcularLetra(){
    var psoiblesLetras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    var dniCompleto = document.getElementById("dni").value;    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dniMayuscula = "";
    var comprobar = 0;
    var numerosDNI = 0;
    var letra = "";
    var resto;
    var contador = 0;
    var dniArray = dniCompleto.split("");
//calcula que el dni tenga los digitos que tiene que tener
    for(contador = 0; contador < dniArray.length; contador++){
        if(contador <= 7){
            if(isNaN(dniArray[contador])){
                comprobar = 1;
            }
        }
        else {
            if(isNaN(dniArray[8])){
                //Convierte las letras en mayuscula
                dniArray[8] = dniArray[8].toUpperCase();
            } else{
                comprobar = 1;
            }
        }
    }

    //Comporbar la longitud sea la correcta
    if(contador != 9){
        comprobar = 1;
    }else{
        dniMayuscula = dniArray.join("");
        //juntar los numeros 
        numerosDNI = dniMayuscula.substring(0,8);
        //almacenamos la letra dni
        letra = dniMayuscula.substring(8,9);

        //comprueba que la letra sea la correcta
        resto = numerosDNI % 23;
        if(psoiblesLetras[resto] != letra){
            comprobar = 2;
        }
    }
        //RESPUESTA SI EL DNI SI ES CORRECTO
    if(comprobar == 0){
        document.getElementById("nombre_usuario").innerHTML = nombre;
        document.getElementById("apellido_usuario").innerHTML = apellido;
        document.getElementById("total_datos").innerHTML = "El dni es CORRECTO";
    }   
        //RESPUESTA SI EL DNI NO ES CORRECTO
    else if(comprobar == 1){               
        document.getElementById("nombre_usuario").innerHTML = nombre;
        document.getElementById("apellido_usuario").innerHTML = apellido;
        document.getElementById("total_datos").innerHTML = "El dni NO ES CORRECTO";
        
        //RESPUESTA SI LA LETRA NO ES CORRECTA
    } else if(comprobar == 2){
        document.getElementById("nombre_usuario").innerHTML = nombre;
        document.getElementById("apellido_usuario").innerHTML = apellido;
        document.getElementById("total_datos").innerHTML = "La letra de el DNI NO ES CORRECTA";
    }
}