
var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < buttons.length; i++)
{
    display.innerText = 0;
    buttons[i].addEventListener('click', function() //here function is event handler button
     {
         //This function will be called when action 
         //click on the button has happened

         // I need to get the value of that button
         //how will i get the value?
         //From the value attribute

         // I will get the value attribute of this button
          //that is there
         //  current button on which this func 
         // is called, we can get this by this.
       var value = this.getAttribute('data-value');
         console.log(value);
       // this.getattribute is the func that you have 
       //to call to find the attribute. 
       // you have to give the attribute 'value' for which 
       //you have to find out
       // value is the attribute you have to find out'
       // this is the value of the button that is clicked


       if(value == '+') // if an operator is clicked
       {
         operator = '+';
         //display.textcontent or display.innertext 
         //will give the text content of the display
         // Now you need to parse it to get no out of 
         // of it. so use parseFloat for that.
         //This text content will be a string.
         operand1 = parseFloat(display.textContent);
         console.log(operand1);
         display.innerText = 0;

       } 
       else if(value == '-') // if an operator is clicked
       {
         operator = '-';
         operand1 = parseFloat(display.textContent);
         console.log(operand1);
         display.innerText = 0;
         
         

       } 
       else if(value == '*') // if an operator is clicked
       {
         operator = '*';
         operand1 = parseFloat(display.textContent);
         console.log(operand1);
         display.innerText = 0;
        

       } 
       else if(value == '/') // if an operator is clicked
       {
         operator = '/';
         operand1 = parseFloat(display.textContent);
         console.log(operand1);
         display.innerText = 0;
        

       } 
       else if(value == '%') // if an operator is clicked
       {
         operator = '%';
         operand1 = parseFloat(display.textContent);
         console.log(operand1);
         display.innerText = 0;
      

       } 
       else if(value == '.') // if an operator is clicked
       {
        if(display.textContent.length && !display.textContent.includes('.')){
            console.log(". is clicked");
            display.textContent=display.textContent+'.'; 
        }

       } 
       else if(value == '+/-') 
       {
         operator = '+/-';
         
         operand1 = parseFloat(display.textContent);
         console.log(operand1);
            if(operand1 >0)
            {
                display.innerText= display.innerText  * -1;
                operand1 = display.innerText;
                console.log(operand1);
            }
            else{
                display.innerText= display.innerText  * -1;
                operand1 = display.innerText;
                console.log(operand1);
            } 
         console.log(display.innerText);
       
         

        //display.innerText = 0;
       } 
       else if(value == 'AC')
       {    
           display.innerText = 0;
       }
       
       else if(value == '=')
       {
           console.log(display.textContent);
           operand2 = parseFloat(display.textContent);
           console.log("operand2:", operand2);
           //use eval to get the result;
           if(operand1 != null && operand2 != null)
           {
            var op1 = operand1;
            var op2 = operand2;
            
            
            //var result = eval(op1 + " " + operator + " " + op2);
            console.log("operand1:", op1);
            console.log("operand2:", op2);
            console.log("operator:", operator);
            var result = eval(op1 + " " + operator + " " + op2);
           
            if(op1!=0 && op2 == 0)
            {
                result ="Error";
                // console.log(result);
                display.innerText = result;
                console.log(display.innerText);
                
            }
            
            // Show result on display
            console.log(result);
            display.textContent = result;
            console.log(op1, operator, op2);
            
           }
        //    var result = eval(op1 + " " + operator + " " + op2);
        //    console.log(result);
       }
       else{
           display.innerText += value;
           
       }
       
    });
}























// var toggle = true;

// var button1 = document.getElementById('btn-1');
// var button2 = document.getElementById('btn-2');

// var outer = document.getElementById('outer');
// var inner = document.getElementById('inner');


// var numberArr = ["AC","0","1","2","3","4","5","6","7","8","9"];

// var OperatorArr = [".","+/-","%","/","*","-","+","=","."];

// var i = 0;

// button1.addEventListener('click', function Calculator()

// {
  
  
//   inner.classList.add(numberArr[i]);
//   console.log("inner");
//   i++;

// })



// var i = 0;

// button2.addEventListener('click', function Calc()

// {
 
 
//   inner.classList.add(operatorArr[i]);
//   i++;
  
// })

// var i = 0, j = 0;

// button1.addEventListener('click', function Evaluate()

// {
// //   if(numberArr[i] / 0)
// //   {
// //       console.log("Error");

// //   }
// //   if(i==numberArr.length)
// //   {
// //     i = 0;
// //   }

//   var op1 = numberArr[i];
//   var op2 = numberArr[++i];

//   var operator = operatorArr[i];
  
//   var result = eval(op1 + " " + operator + " " + op2);
  
//   console.log(result);

// })