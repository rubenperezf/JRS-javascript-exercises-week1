//1) Write a program that displays the result of 5+6+7+8+9+10.
function addNumbers() {
  return(5+6+7+8+9+10);
}
console.log(addNumbers());

//2) Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.
function rectanglePerimeter() {
return((5*8) + " is the perimeter of this rectangle.");
}
console.log(rectanglePerimeter());

//3)Write a new function that returns the perimeter of a rectangle with the width and height being specified as arguments to the function.
function recPerimeter(width, height) {
return(width*height + " is the perimeter of this rectangle.");
}
console.log(recPerimeter(5,8));

//4) Write a function that converts fahrenheit, given as an argument, to celcius.
function getCelcius(fahrenheit) {
return(fahrenheit +" Fahrenghit are " +(fahrenheit-32)*5/9) + " in Celcius";
}
console.log(getCelcius(234));

//5) Write a function that converts celcius, given as an argumen, to fahrenheit.
function getFahrenheit(celcius) {
return(celcius + " Celcius are " + (celcius*9/5+32) + " in Fahrenheit");
}
console.log(getFahrenheit(25));

//6) Write a function that calculates tip with 2 arguments, the bill and the tip percentage. Use the build-in JS toFixed() method to round the answer to two decimal places.
function getTip (bill, percentage) {
return ("You have to pay "+ (bill*(percentage/100) +bill).toFixed(2));
}
console.log(getTip(100,10));

//7) Write a function that takes a number an an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26.

//8) Write a function that takes an argument in seconds and specifies the equivalent number of years.
function getYears (seconds) {
return (seconds/31536000).toFixed(5) + " number of years";
}
console.log(getYears(1000));

//8) Write the same function above, but that takes an input from the built-in browser function, prompt().
function getYears (seconds) {
  seconds = prompt("how many second?");
  return((seconds/31536000).toFixed(5) + " number of years");
  }
console.log(getYears());

//9) Write a function that returns the current date and time.
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime);


//10) Write a function that returns the date 33 days from now.

//11) Write a function that returns the mean of an array of numbers.

//12) Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month.
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
function getMonth() {
var number = (Math.floor(Math.random()*12));
return monthNames[number];
}
console.log(getMonth());

//13) Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order (more specifically, non-decreasing order if multiple numbers are the same).

//14) Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
//Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.

//15) Write a function that returns true when two inputs are equivalent when using coercion, but not equivalent without coercion.
//Ex: isCoerced(5,"5") returns true. isCoerced(5,5) returns false. isCoerced(4,"shoe") returns false.
function isCoerced(a,b) {
  if (a===b) {
    return false
  } else if(a==b){
    return true
  } else if (a !=b) {
    return false
  }
  }
  console.log(isCoerced(5,"5"));
  console.log(isCoerced(5,5));
  console.log(isCoerced(4,"shoe"));
  
  //16) Write a function called isEven() that returns true if a given argument is even.
  function isEven(number) {
    if(number%2 ===0) {
        return true 
    } else {
        return false;
    }
}
console.log(isEven(44));

//17) Write a function called isOdd() that returns true if a given argument is odd. Do this by only using the isEven() function you wrote previously.
function isOdd(number) {
  if(isEven(number)===true){
      return false;
  } else {
      return true;
  }
}
console.log(isOdd(55));
function isOdd2(number) {
return !isEven(number)
}
console.log(isOdd2(54));

//18) Write a function that returns true if a given argument is a multiple of 3. Examples of multiples of 3 are 0,3,6,9 ...
function multipleOf3 (number) {
  if(number%3===0) {
    return true;
  } else {
    return false;
  }
}
console.log(multipleOf3(10));
//19) Write a function that takes two arguments. Check if the first argument is the multiple of the second argument. Return the appropriate boolean.
//Ex. checkMultiple(20,5) returns true. checkMultiple(21,5) returns false.
function multipleNumber(num1,num2) {
  if(num2%num1===0) {
    return true;
  } else {
    return false;
  }
}
console.log(multipleNumber(2,9));

//20) Write a function that takes an array of numbers as an argument and returns the smallest number in the array.

var someNumbers = [3,567,6,8,34,12,23,423];
function smallestNumber() {
  return Math.min.apply(null, someNumbers) 
}
console.log(smallestNumber());

//21) Write a function that returns the largest integer n where n*n is still less than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument)

//22) Write a function that returns the largest integer n where n*n is still less than a given argument.
//Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller than 5, but 3*3 is 9, which is larger than 5. 

//23) Write a function that takes a string as an argument and returns the reverse of that string.
function reverseString(string) {
  for(let i=string.length;i=0;i--) {
    return string[i];
  }
}
console.log(reverseString("hola"));