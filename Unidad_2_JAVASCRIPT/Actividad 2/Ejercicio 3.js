let hermanos;

let precio;

hermanos = parseInt(prompt("numero de hermanos"));
precio = parseInt(prompt("Introduce cantidad"));

if(hermanos >=3)
{
    precio = precio/0.15;
    alert("descuento del 15% "+ precio);
}
else
{
    precio = precio/0.05;
    alert("descuento del 5% " + precio);
}
