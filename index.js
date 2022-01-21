function replicarTexto(texto){

    document.write(texto);
    console.log("Texto pero desde replicarTexto" + texto);

} //Función no utilizada porque el document.write me borra lo demas.

function mostrarTexto(texto){

    var salida = document.querySelector(".parrafo-encriptado");
    salida.innerHTML = texto;

}

function validarTexto(texto){

    var reg1 = /[a-z]/gs;   //gs -> global, no solo busca en el primero. Busca en todos. s -> admite espacio en blanco
    var reg2 = /[A-Z]/gs;
    var reg3 = /[áéíóúÑ]/gs; 
    var bandera = reg1.test(texto);

    if(bandera){

        console.log("Pertenece a reg1");
        bandera = reg2.test(texto);

        if (bandera == false) {

        console.log("Dentro del reg2");
        bandera = reg3.test(texto);

            if (bandera == false){

                return true;

            }
        }
    }
    
}

function obtenerTexto(){

    var entrada = document.querySelector(".entrada-encriptar");
    
    texto = encriptarLetras(entrada.value);
    
   if (validarTexto(texto)){

        mostrarTexto(texto);
   }

   else {

        alert("No se admiten: mayusculas, letras especiales o el contenido en blanco");

   }

}


function cambiarLetra(texto1,texto2,indicemedio){

    var izquierda = texto1.slice(0,indicemedio);
    izquierda = texto1.slice(0,indicemedio);
    var medio = texto1[indicemedio] + texto2;
    var derecha = texto1.slice(indicemedio + 1 ,texto1.length);

    return izquierda + medio + derecha;

}

function encriptarLetras (texto){

    i = 0 ;
    
    while ( i!= texto.length){

        var cambio = false ;

        if (texto[i] == "a"){

            texto = cambiarLetra(texto,"i",i);
            i = i+2;
            cambio = true;
        }

        if (texto[i] == "e"){

            texto = cambiarLetra(texto,"nter",i);
            i=i+5;
            cambio = true;
        }

        if (texto[i] == "i"){

            texto = cambiarLetra(texto,"mes",i);
            i=i+4;
            cambio = true;
        }

        if (texto[i] == "o"){

            texto = cambiarLetra(texto,"ber",i);
            i=i+4;
            cambio = true;
        }

        if (texto[i] == "u"){

            texto = cambiarLetra(texto,"fat",i);
            i=i+4;
            cambio = true;
        }

        if (cambio == false){

            i++;

        }
        
    }
    
    return texto;
}



var boton = document.querySelector(".boton-encriptar");
boton.onclick = obtenerTexto;


/* Entendiendo Expresiones regulares lenguajejs.com

    var reg = /[a-z]/;
    
    console.log(reg.test("hola"));

    SE DETIENE AL PRIMER ENCUENTRO sin la g

*/


/*

Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.*/