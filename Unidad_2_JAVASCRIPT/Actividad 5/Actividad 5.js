var nombre, apelliddos, salario, edad;

var salariofinal;

nombre = prompt('nombre del usuario');
apelliddos = prompt(`apellidos del usuario`);
edad = parseInt(prompt('edad del usuario'));
salario = parseFloat(prompt('salario del usuario'));



if(isNaN(salario))
{
    alert('el salario no puede tener letras');
}

if(salario > 2000)
{
    alert('salario mayor a 2000')
}
else if(salario >= 1000 && salario < 2000)
{
    if(edad > 45)
    {
        salariofinal= salario * 1.03;
    }
    else
    {
        salariofinal = salario * 1.1;
    }
}
else
{
    if(edad < 30)
    {
        salariofinal= 1100;
    }
    else if(edad >= 30 && edad <= 45)
    {
        salariofinal = salario * 1.03;
    }
    else
    {
        salariofinal = salario * 1.15;
    }
}

document.write('nombre '+ nombre + ' <br/>' + 'apellido ' +  apelliddos + ' <br/>' + ' edad '+ edad + ' <br/> '+ 'salario ' + salario + '<br/> ' + 'salario final ' + salariofinal);








