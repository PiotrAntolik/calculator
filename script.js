
var firstNumber = 0;
var secondNumber = 0;
var sign = "";

var inputOutput =  document.getElementById("input");

function add(number)
{
     
            if(inputOutput.innerHTML == 0)
            {
                  inputOutput.innerHTML = number; 
            }
            else
            {
                  inputOutput.innerHTML = inputOutput.innerHTML + number;
            }       
}

function sum()
{
      
      firstNumber =  inputOutput.innerHTML;
      inputOutput.innerHTML = 0;
      sign = "plus";
}

function result()
{
      secondNumber = inputOutput.innerHTML;
      firstNumber = parseInt(firstNumber);
      secondNumber = parseInt(secondNumber);
     
      switch(sign)
      {
            case "plus":
            inputOutput.innerHTML = firstNumber + secondNumber;
            break;
      }
}

