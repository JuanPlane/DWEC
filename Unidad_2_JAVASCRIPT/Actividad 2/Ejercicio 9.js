let num;
let factorial =1;
let cont =1;
num = parseInt(prompt("introduce el numero"));


while(cont <= num)
{
    factorial *= cont;
    cont++;
}

alert("El factorial de " + num + " es " + factorial);