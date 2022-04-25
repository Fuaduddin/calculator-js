const numberButtons = document.querySelectorAll('[data-num]');
const specialButtons = document.querySelectorAll('[data-number]');
const operatorsButtons = document.querySelectorAll('[data-oper]');
const clearButtons = document.querySelectorAll('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalButtons = document.querySelector('[data-equals]');
const currInput = document.querySelector('[data-current]');
var NewNumber= '';
var sum=0;
var PrevNumber='';
function Delete()
{
  var Value=currInput.innerHTML;
  var NewValue = Value.slice(0, -1);
  currInput.innerHTML=NewValue;
  return NewValue;
}
function clear()
{ 
  var clear='0';
  return clear;

}
function AppendNumber(Number)
{
  var UNumber=NewNumber
  if (Number === '.' && UNumber.includes(".")) 
{ 
  return;
}
else
{
  NewNumber = NewNumber.toString() + Number.toString();
  currInput.innerHTML=NewNumber;
}
}
function calculate()
{
var Value=NewNumber;
console.log(Value);
console.log(NewNumber.length)
console.log("i am value",Value);
let operator=/[*,+,/,m,÷,%]/;
let re = /[*,+,÷,/,m,^,%]/g;
var Digit=Value.split(operator);
var length=Digit.length;
if(length == 2)
{
console.log("i am digit",Digit);
var search=Value.search(re);
console.log("I am search",search);
if(search>-1)
{
    var Split= Value.substring(search,search+1);
    console.log("i am split",Split);
    switch(Split)
    {
        case "+":
            Digit.forEach(item => {
                var multiple = parseFloat(item);
                sum+= multiple;
                console.log("i am +",sum);
            });
            currInput.innerHTML=sum;
            NewNumber=sum;
            sum=0;
            break;
        case "m":
             Digit.forEach(item => {
                var multiple = parseFloat(item);
                if(sum==0)
                {
                sum=multiple;
                }
                else
                {
                sum-=multiple;
                console.log("i am m",sum);
                }
                 });
            currInput.innerHTML=sum;
            NewNumber=sum;
            sum=0;
            break;
         case "*":
           Digit.forEach(item => {
            var multiple = parseFloat(item);
             if(sum==0)
             {
               sum=multiple;
             }
             else
             {
               sum*= multiple;
               console.log("i am *",sum);
             }
           });
          currInput.innerHTML=sum;
           NewNumber=sum;
           sum=0;
           break;
           case "÷":
            Digit.forEach(item => {
               var multiple = parseFloat(item);
               if(sum==0)
               {
               sum=multiple;
             }
              else
               {
                 sum/= multiple;
               console.log("i am /",sum);
             }
           });
            currInput.innerHTML=sum;
            NewNumber=sum;
             sum=0;
          break;
           case "/":
             Digit.forEach(item => {
               var multiple = parseFloat(item);
                 if(sum==0)
                {
                 sum=multiple;
                }
                else
                {
                 sum/= multiple;
                 console.log("i am 1/x",sum);
                }
               });
            currInput.innerHTML=sum;
            NewNumber=sum;
             sum=0;
             break;
              case "^":
               Digit.forEach(item => {
                 var multiple = parseFloat(item);
                 sum=Math.sqrt(multiple);
                  console.log("i am ^",sum);
              });
               currInput.innerHTML=sum;
              NewNumber=sum;
              sum=0;
               break;
               case "%":
               Digit.forEach(item => {
                  var multiple = parseFloat(item);
                 if(sum==0)
                  {
                    sum=multiple;
                  }
                  else
                   {
                sum=sum % multiple;
                      console.log("i am %",sum);
                    }
                  });
                 currInput.innerHTML=sum;
                  NewNumber=sum;
                  sum=0;
                  break;
      }
    }
     else
      {
        Digit.forEach(item => {
        var multiple = parseFloat(item);
         sum= multiple * multiple ;
        });
        currInput.innerHTML=sum;
        NewNumber=sum;
         sum=0;
      } 
} 
else
{   
  var tr=Value.replace(/[0-9]|\./g, "");
  console.log(tr);
  var tr2=tr.split("");
  console.log(tr2);
  var operators = Value.replace(/[0-9]|\./g, "").split("");
  console.log(operators);
  var divide = operators.indexOf("÷");
  while (divide != -1) {
    Digit.splice(divide, 2,  Digit[divide] /  Digit [divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }
  var multiply = operators.indexOf("*");
  while (multiply != -1) {
    Digit.splice(multiply, 2,   Digit[multiply] *  Digit[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("*");
  }

  var subtract = operators.indexOf("m");
  console.log(subtract);
  while (subtract != -1) {
   var tr4= Digit.splice(subtract, 2,  Digit[subtract] -  Digit[subtract + 1]);
   console.log(tr4);
    operators.splice(subtract, 1);
    console.log(operators);
    subtract = operators.indexOf("m");
    console.log(subtract);
  }

  var add = operators.indexOf("+");
  console.log(add);
  while (add != -1) {
   var tr3= Digit.splice(add, 2, parseFloat( Digit[add]) + parseFloat( Digit[add + 1]));
    console.log(tr3);
    operators.splice(add, 1);
    console.log(operators);
    add = operators.indexOf("+");
    console.log(add);
  }
  NewNumber = Digit[0];
  currInput.innerHTML=NewNumber;
    }
 }
numberButtons.forEach(function(button){
  button.addEventListener('click',function(Numbers){
    let Gvalue=Numbers.target.dataset.num;
    AppendNumber(Numbers.target.dataset.num);
  })
});
equalButtons.addEventListener('click', function(button){
  calculate();
});
deleteButton.addEventListener('click', function(button){ 
 var newVlaue =  Delete();
 NewNumber = newVlaue; 
});
clearButtons.forEach(button => {
  button.addEventListener('click', () => {

     var newVlaue = clear();
     currInput.innerHTML=newVlaue;
     NewNumber='';
  })
});
specialButtons.forEach(button => {
  button.addEventListener('click', () => {
 calculate();
  })
});