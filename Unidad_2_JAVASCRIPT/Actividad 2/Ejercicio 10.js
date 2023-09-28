let rand, i=0;

/*numero = parseInt(prompt("escribe un numero"));*/

let numero=Math.round(Math.random()* 10);

while( i < 10 )
{
    rand= parseInt(prompt("adivida el numero"));

    if(numero === rand)
    {
        alert("Numero acertado");
    }
    else if(numero < rand)
    {
        alert("el numero es menor");
    }
    else if(numero > rand)
    {
        alert("el numero es mayor")
    }
    i++;
    
}

alert("Fin de los intentos");