document.addEventListener("DOMContentLoaded", function(){
  const col = document.getElementsByClassName("col");
  const display = document.getElementsByClassName("display")[0];
  const enter = document.getElementsByClassName("enter")[0];
  const sum = document.getElementsByClassName("sum")[0];
  let tempNumber = "";
  let numbers = [];
  let op = [];

  console.log(col);

  for(let i = 0; i < 16; i++){
    const num = col[i].innerHTML
    col[i].addEventListener("mousedown", function(){
      if(col[i].innerHTML === "C"){
        sum.innerHTML = "";
        display.innerHTML = ""
      }
      else if(col[i].innerHTML === "+"){
        display.innerHTML += num;
        numbers.push(tempNumber);
        tempNumber = "";
        op.push("+");
        console.log(numbers)
        console.log(op)
      }
      else if(col[i].innerHTML === "-"){
        display.innerHTML += num;
        numbers.push(tempNumber);
        tempNumber = "";
        op.push("-");
        console.log(numbers)
        console.log(op)
      }
      else if(col[i].innerHTML === "/"){
        display.innerHTML += num;
        numbers.push(tempNumber);
        tempNumber = "";
        op.push("/");
        console.log(numbers)
        console.log(op)
      }
      else if(col[i].innerHTML === "*"){
        display.innerHTML += num;
        numbers.push(tempNumber);
        tempNumber = "";
        op.push("*");
        console.log(numbers)
        console.log(op)
      }
      else{
        display.innerHTML += num;
        tempNumber += num;
      }
    });
  }
  enter.addEventListener("mousedown", function(){
    numbers.push(tempNumber);
    console.log(numbers);
    const s = display.innerHTML;
    display.innerHTML = "";
    sum.innerHTML = s+"=";
    for (let i = 0; i < numbers.length; i++) {
      if(numbers[i] != numbers.length){
        for (let i = 0; i < op.length; i++) {
          console.log(op[i] + " " + i)
          calaculation(numbers[i], numbers[i+1], "+");
          console.log( calaculation(numbers[i], numbers[i+1], "+"))
        }
      }
    }
  });
});


function calaculation(num1, num2, op){
  if(op === "+"){
    return parseInt(num1) + parseInt(num2);
  }
  else if(op === "-"){
    return parseInt(num1) - parseInt(num2);
  }
  else if(op === "/"){
    return parseInt(num1) / parseInt(num2);
  }
  else{
    return parseInt(num1) * parseInt(num2);
  }

}