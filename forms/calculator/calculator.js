/*
Has a new form named calculator.
Program gets two numbers from the user but does not use prompts - instead, uses controls to do this.
All input and output must be prefaced with the users' name.
The program uses at least one event and controls for all input and output. 
Uses at least one button, one label, and one input control
Controls are appropriately named. 
Control properties are used at design time to specify how the controls should look.
The program may not use any alerts, popups or console.log for output. You can use console.log for debugging however. 
*/

// user's name
inptName

// multiplication function
function multNums(x,y) {
  return x * y
}  

// addition function
function addNums(x,y) {
  return Number(x) + Number(y) 
}  

// call addition function
btnAdd.onclick=function(){
  lblAns.value = 'Hello ' + inptName.value + ', your answer is ' + addNums(InptNum1.value, inptNum2.value)
}

// call multiplication function
btnMult.onclick=function(){
  lblAns.value = 'Hello ' + inptName.value + ', your answer is ' + multNums(InptNum1.value, inptNum2.value)
}

// call reset function
btnReset.onclick=function(){
  inptName = ""
  InptNum1.value = ""
  inptNum2.value = ""
  lblAns.value = ""
}
