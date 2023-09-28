let num1,num2, oper;

oper=prompt("Pon uno de los siguiente simbolos\n+\n-\n*");
num1=parseInt(prompt("numero1"));
num2=parseInt(prompt("numero2"));


switch(oper){
    case '+': document.write(" suma " +num1+ " + "+num2+ " = "  +(num1+num2));
        break;
    case '-':  document.write(" suma " +num1+ " - "+num2+ " =  "  +(num1-num2));
        break;
    case '*': document.write("multiplicacion" +num1+ " * "+num2+ " = " +(num1*num2));
        break;
    /*case 4: if (num1>num2) document.write("division" +num1+ " / " +num2+" as" +(num1/num2));
    break;*/
    default: alert(" no es ningun operador de los indicados")
}