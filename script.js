var firstNumber = 0;
var secondNumber = 0;
var sign = "";
var mark;
var markTask;
var inputOutput =  document.getElementById("resultHooker");
var taskOutput = document.getElementById("taskHooker");
var number = inputOutput.innerHTML;


function add(number)
{
      inputOutput.innerHTML = inputOutput.innerHTML + number;
      
            if(inputOutput.innerHTML == 0+number)
            {
                  inputOutput.innerHTML = number; 
            
            }
      if(mark)
      {
            inputOutput.innerHTML = number; 
            mark = false;
      }

      if(markTask)
      {
            taskOutput.innerHTML = "";
            markTask = false;
      }
               
}

function operation(action)
{
      
      firstNumber =  inputOutput.innerHTML;
      taskOutput.innerHTML = firstNumber + " " + action + " ";
      sign = action;
      mark = true;
      console.log(sign);
}

function result()
{
      
      secondNumber = inputOutput.innerHTML;
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);
     
      switch(sign)
      {
            case "+":
            inputOutput.innerHTML = firstNumber + secondNumber;
            break;

            case "-":
            inputOutput.innerHTML = firstNumber - secondNumber;
            break;

            case "/":
            inputOutput.innerHTML = firstNumber / secondNumber;
            break;

            case "*":
            inputOutput.innerHTML = firstNumber * secondNumber;
            break;

            
      }
      taskOutput.innerHTML = firstNumber + " " + sign + " " + secondNumber + " =";
      mark = true;
      markTask = true;
}


function clearInput()
{
      inputOutput.innerHTML = 0;
      taskOutput.innerHTML = null;
      firstNumber = 0;
      secondNumber = 0;
      sign = "";
     
}

function clearEnter()
{
      inputOutput.innerHTML = 0;
}

function deleteLastChar()
{
     
     var text =  inputOutput.innerHTML;
     if(text.length == 1)
     {
           inputOutput.innerHTML = "0";     
     }
     else
     {
      inputOutput.innerHTML = text.substring(0, text.length -1 );
     }
  
     
    
}

function mirror()
{
    var number = inputOutput.innerHTML;
    var result = number/-1;
    inputOutput.innerHTML = result;

}

function dot()
{
    
      var number = inputOutput.innerHTML;
    
      if(!number.includes("."))
      {
            var result = number+".";
            inputOutput.innerHTML = result;
      }
      
      

      
          

      
}


