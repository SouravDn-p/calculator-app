// let previousValueNumber=0;
// let presentValueNumber=0;

// document.getElementById('key-1').addEventListener('click',function(){
//     addNumberOnDisplay('key-1');
// });
// document.getElementById('key-2').addEventListener('click',function(){
//     addNumberOnDisplay('key-2');
// });
// document.getElementById('key-3').addEventListener('click',function(){
//     addNumberOnDisplay('key-3');
// });
// document.getElementById('key-4').addEventListener('click',function(){
//     addNumberOnDisplay('key-4');
// });
// document.getElementById('key-5').addEventListener('click',function(){
//     addNumberOnDisplay('key-5');
// });
// document.getElementById('key-6').addEventListener('click',function(){
//     addNumberOnDisplay('key-6');
// });
// document.getElementById('key-7').addEventListener('click',function(){
//     addNumberOnDisplay('key-7');
// });
// document.getElementById('key-8').addEventListener('click',function(){
//     addNumberOnDisplay('key-8');
// });
// document.getElementById('key-9').addEventListener('click',function(){
//     addNumberOnDisplay('key-9');
// });
// document.getElementById('key-0').addEventListener('click',function(){
//     addNumberOnDisplay('key-0');
// });

// function addNumberOnDisplay(id){
//     let  valueOfBtn= document.getElementById(id).innerText;
//     console.log(valueOfBtn);
//     let displayValue=document.getElementById('display').innerText;
//     console.log(displayValue);
//     displayValueNumber = parseFloat(displayValue);
//     console.log(displayValueNumber);
//     if (displayValueNumber == 0.00){
//         document.getElementById('display').innerText=valueOfBtn; 
//     }
//     else {
//         document.getElementById('display').innerText=displayValue+valueOfBtn;
//         presentValueNumber=displayValue+valueOfBtn;
//         presentValueNumber = parseFloat(presentValueNumber);
//     }
//     console.log("This is the present value",+ presentValueNumber);
// }





// document.getElementById("key-c").addEventListener('click',function () {
//     document.getElementById("display").innerText="0";
//      previousValueNumber=0;
//      presentValueNumber=0;
// });

// document.getElementById("key-equal").addEventListener('click',function() {
//     document.getElementById("display").innerText=presentValueNumber;
//     previousValueNumber=0;
//     presentValueNumber=0;
// });









// function CalculatingOperation(operation){
//     let presentValue = document.getElementById('display').innerText;
//     presentValueNumber = parseFloat(presentValue);
//     console.log(previousValueNumber);
//     console.log(presentValueNumber);

//     if (operation == '+'){
//         presentValueNumber = previousValueNumber + presentValueNumber;
//     }
//     else if (operation == '-'){
//         presentValueNumber = previousValueNumber - presentValueNumber;
//     }
//     else if (operation == '*'){
//         if (previousValueNumber == 0){
//             previousValueNumber =1;
//         }
//         presentValueNumber = previousValueNumber * presentValueNumber;
//     }
//     else {
//         presentValueNumber = previousValueNumber / presentValueNumber;
//     }
//     document.getElementById('display').innerText = presentValueNumber;
//     previousValueNumber=presentValueNumber;
//     presentValueNumber=0;
//     return previousValueNumber;
// }

// function clearDisplay(){
//     document.getElementsByClassName('key').addEventListener('click',function(){
//         document.getElementById('display').innerText="0";
//     })
// }




// document.getElementById('key-x').addEventListener('click',function(){
//     previousValueNumber= CalculatingOperation('*');
 
//     document.getElementsByClassName('key').addEventListener('click', clearDisplay);
 
//  });

 
