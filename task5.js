function addition(a, b)
{
    return a + b;
}

function subtraction(a, b)
{
    return a - b;
}

function multiplication(a, b)
{
    return a * b;
}

function division(a, b)
{
    if(b != 0)
    {
        return a / b
    }
    else
    {
        return 0;
    }
}

function mathOperation(arg1, arg2, operation)
{
    switch(operation)
    {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        default:
            console.log("mathOperation: вызвана неизвестная функция: " + operation);
    }
}