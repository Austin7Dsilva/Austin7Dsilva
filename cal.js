
var displayArea = document.getElementById('display')

function isOperator(buttonText) {
  if (
    buttonText == "+" ||
    buttonText == "-" ||
    buttonText == "*" ||
    buttonText == "/" ||
    buttonText == "%"
  )
    return true;
  else return false;
}

function buttonClicked(buttonText)
{
  if (buttonText != "CLR" && buttonText != "DEL" && buttonText != "=") {
  if (displayArea.innerText === "0") {
      if(buttonText != "0" && buttonText != "00")
      {
        if(buttonText == '.' || isOperator(buttonText)){
          displayArea.innerText = displayArea.innerText + buttonText;
       }else
       { 
       displayArea.innerText = buttonText;
       }
      }
  }else {
      if (isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator(buttonText)) 
       {
        displayArea.innerText = displayArea.innerText.slice(0, -1) + buttonText;
      }
      else{
      displayArea.innerText = displayArea.innerText + buttonText;
      }
    }
  }
  else{
    if (buttonText === "CLR") {
           displayArea.innerText = "0";
         } else if (buttonText === "DEL") {
           displayArea.innerText = displayArea.innerText.slice(0, -1);
         } else {
           try {
             displayArea.innerText = eval(displayArea.innerText);
           } catch (error) {
             displayArea.innerText = 0;
           }
         }
  }  
} 

