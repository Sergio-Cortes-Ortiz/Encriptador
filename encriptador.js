
var input = document.querySelector("#textoOriginal");
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var resultado = document.querySelector("#resultado");
var copiar = document.querySelector("#copiar");

encriptar.onclick = encriptarTexto;
desencriptar.onclick = desencriptarTexto;
copiar.onclick = copiarAPortapapeles;

function verificar()
{
    var regex = /[A-Z\d\Á\É\Í\Ó\Ú\á\é\í\ó\ú\!\#\$\%\&\/\(\)\=\?\¡\¿\!]/;


    if(regex.test(input.value))
    {
        alert("El texto no debe de contener mayusculas, acentos o caracteres especiales");
        return false;
    }else
    {
        return true;
    }
}

function encriptarTexto()
{
    var texto = input.value;
    var antes = "";
    var despues = "";
    var cambio = ""; 

    if(verificar() == true)
    {
        ocultar();
        for(var i = 0; i < texto.length; i++)
        {
        switch(texto[i])
        {
            case "e":
                antes = texto.substr(0,i);
                despues = texto.substr(i+1, texto.length-1);
                cambio = texto[i] + "n" + "t" + "e" + "r";
                i = i + cambio.length-1;
                texto = antes + cambio + despues;
                break;
            case "i":
                antes = texto.substr(0,i);
                despues = texto.substr(i+1, texto.length-1);
                cambio = texto[i] + "m" + "e" + "s";
                i = i + cambio.length-1;
                texto = antes + cambio + despues;
                break;
            case "a":
                antes = texto.substr(0,i);
                despues = texto.substr(i+1, texto.length-1);
                cambio = texto[i] + "i";
                i = i + cambio.length-1;
                texto = antes + cambio + despues;
                break;
            case "o":
                antes = texto.substr(0,i);
                despues = texto.substr(i+1, texto.length-1);
                cambio = texto[i] + "b" + "e" + "r";
                i = i + cambio.length-1;
                texto = antes + cambio + despues;
                break;
            case "u":
                antes = texto.substr(0,i);
                despues = texto.substr(i+1, texto.length-1);
                cambio = texto[i] + "f" + "a" + "t";
                i = i + cambio.length-1;
                texto = antes + cambio + despues;
                break;
            default:
                break;        
        }

        resultado.value = texto;
        mostrar();
        }
    }
}

function desencriptarTexto()
{
    var texto = input.value;
    var antes = "";
    var despues = "";
    var comparar = ""; 

    if(verificar() == true)
    {
        ocultar();
        for(var i = 0; i < texto.length; i++)
        {
        switch(texto[i])
        {
            case "e":
                comparar = texto[i] + texto[i+1] + texto[i+2] + texto[i+3] + texto[i+4];
                if(comparar == "enter")
                {
                    antes = texto.substr(0,i);
                    despues = texto.substr(i+comparar.length, texto.length-1);
                    texto = antes + texto[i] + despues;
                }
                break;
            case "i":
                comparar = texto[i] + texto[i+1] + texto[i+2] + texto[i+3];
                if(comparar == "imes")
                {
                    antes = texto.substr(0,i);
                    despues = texto.substr(i+comparar.length, texto.length-1);
                    texto = antes + texto[i] + despues;
                }
                break;
            case "a":
                comparar = texto[i] + texto[i+1];
                if(comparar == "ai")
                {
                    antes = texto.substr(0,i);
                    despues = texto.substr(i+comparar.length, texto.length-1);
                    texto = antes + texto[i] + despues;
                }
                break;
            case "o":
                comparar = texto[i] + texto[i+1] + texto[i+2] + texto[i+3];
                if(comparar == "ober")
                {
                    antes = texto.substr(0,i);
                    despues = texto.substr(i+comparar.length, texto.length-1);
                    texto = antes + texto[i] + despues;
                }
                break;
            case "u":
                comparar = texto[i] + texto[i+1] + texto[i+2] + texto[i+3];
                if(comparar == "ufat")
                {
                    antes = texto.substr(0,i);
                    despues = texto.substr(i+comparar.length, texto.length-1);
                    texto = antes + texto[i] + despues;
                }
                break;
            default:
                break;        
        }

        resultado.value = texto;
        mostrar();
        }
    }
}

function copiarAPortapapeles()
{
    resultado.select();
    
    if(document.execCommand('copy'))
    {
        alert("El resulatdo ha sido copiado con exito");
    }
    
}

function ocultar()
{
    document.getElementById("esperandoTexto").style.visibility = "hidden";
}

function mostrar()
{
    document.getElementById("copiar").style.visibility = "visible";
}