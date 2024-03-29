//1) Write a program that displays the result of 5+6+7+8+9+10.

function addNumbers() {
  console.log(5+6+7+8+9+10);
}

addNumbers()

//2) Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.

function rectanglePerimeter() {
return((5*9) + " is the perimeter of this rectangle.");
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

function sumOfDigits(num){
  var sum = 0;
  var newString = num.toString();
  for(i = 0; i <= newString.length - 1; i++){
    sum += parseInt(newString[i]);
  }
  
  return sum;
}

console.log(sumOfDigits(22))

//8) Write a function that takes an argument in seconds and specifies the equivalent number of years.

function getYears (seconds) {
return (seconds/31536000).toFixed(5) + " number of years";
}

console.log(getYears(1000));

//8) Write the same function above, but that takes an input from the built-in browser function, prompt().

function getYears () {
  var seconds = prompt("how many second?");
  return((seconds/31536000).toFixed(5) + " number of years");
  }

console.log(getYears());

//9) Write a function that returns the current date and time.

function newDate () {
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  return dateTime;
  } 

  console.log(newDate());


//10) Write a function that returns the date 33 days from now.

function subtractDays (days) {
  var date= new Date();
  date.setDate(date.getDate()-days);
  return date
}

console.log(subtractDays(33))

//11) Write a function that returns the mean of an array of numbers.

function meanArray (array) {
    var sum=0;
    for(let i =0; i<array.length;i++) {
        sum = sum + array[i];
    } return sum/array.length
}

var arrayRuben =[1,6,7,8];
console.log(mean(arrayRuben))

//12) Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month.

function getMonth() {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var number = (Math.floor(Math.random()*12));
  return monthNames[number];
}

console.log(getMonth());

//13) Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order (more specifically, non-decreasing order if multiple numbers are the same).

function increaseNumbers(num1,num2, num3) {
  if(num1>num2 &&num1>num3 && num2>num3) {
      return ([num1,num2,num3])
  } else if (num1>num2 &&num1>num3 && num3>num2) {
      return ([num1,num3,num2]);
  } else if (num2>num1 &&num2>num3 && num1>num3) {
      return ([num2,num1,num3]);
  } else if (num2>num1 &&num2>num3 && num3>num1) {
      return ([num2,num3,num1]);
  } else if (num3>num1 &&num3>num2 && num1>num2) {
      return ([num3,num1,num2]);
  } else {
      return ([num3, num2, num1])
  }
}

console.log(increaseNumbers(90,7,100));

//14) Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
//Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.

function isPalindrome (string) {
  var halfString = Math.floor(string.length / 2);
  for (var i = 0; i < halfString; i++)
    if (string[i] !== string[string.length - i - 1])
      return false;
  return true;
}

console.log(isPalindrome("racertrtrecar"));

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

function isEven2(number) {
  return number%2 ===0
}

console.log(isEven2(45));

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

function multipleOf32 (number) {
  return number%3===0
}

console.log(multipleOf32(10));

//19) Write a function that takes two arguments. Check if the first argument is the multiple of the second argument. Return the appropriate boolean.
//Ex. checkMultiple(20,5) returns true. checkMultiple(21,5) returns false.

function checkMultiple (num1,num2) {
  if(num1%num2===0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkMultiple(8,2));

function checkMultiple2 (num1,num2) {
  return num1%num2===0
}

console.log(checkMultiple2(21,5))

//20) Write a function that takes an array of numbers as an argument and returns the smallest number in the array.


function smallestNumber(array) {
  return Math.min(...array) 
}

var someNumbers = [567,6,8,34,12,23,423];
console.log(smallestNumber(someNumbers));

function smallestNumber2(array) {
  for(let i=0; i<array.length;i++) {
      for(let j=0; j<i;j++) {
          if (array[i] < array[j]) {
         let temp = array[i] 
          array[i] = array[j];
          array[j] = temp;
          }
      }
  } return array[0]
}


var someNumbers = [567,6,8,34,12,23,423];
console.log(smallestNumber2(someNumbers))

function smallestNumber3(array) {
  return Math.min.apply(null, array) 
}

var someNumbers = [567,6,8,34,12,23,423];
console.log(smallestNumber3(someNumbers));

//21) Write a function that returns the largest integer n where n*n is still less than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument)


function largestInteger () {
  let n=0;
  let count =0;
  while(n*n<=4) {
    count =n;
    n++;
  } return count;
}

console.log(largestInteger());


function largestInterger2 () {
  let n=0;
  let count =0;
  do {
    count=n;
    n++
  } while (n*n<=12000)
  return count;
}

console.log(largestInterger2())

//22) Write a function that returns the largest integer n where n*n is still less than a given argument.
//Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller than 5, but 3*3 is 9, which is larger than 5. 

function smallestN(num) {
  let n =1;
  let count = 0;
  while(n*n<=num) {
      count = n;
      n++;
  } return count;
} 

console.log(smallestN(5));

//23) Write a function that takes a string as an argument and returns the reverse of that string.

function reverseString(string) {
  let reverse="";
  for(let i=string.length-1;i>=0;i--) {
    reverse = reverse+string[i];
  } return reverse;
}

console.log(reverseString("hola"));

function reverseString2(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString2("hello"));


//24) Write a function that counts the occurences of a specific element in an array, specified as a function argument.
//For example, for the array [5,7,12,5,3,3,5], the function countOccurences(3) would return a value of 2.


function ocurrences (array,num) {
    var count = 0;
    for (let i =0; i<array.length; i++) {
        if(array[i]===num) {
            count++
        } 
    } return count;
}

let rubenArray = [5,7,12,5,3,3,5,3,3];
console.log(ocurrences(rubenArray,3));


function ocurrences2 (array, num) {
  count=0;
  var newArray = array.filter(item=>{return item===3})
  return newArray.length;
}

var rubenArray = [5,7,12,5,3,3,5,3,3];
console.log(ocurrences2(rubenArray, 3))

//25) Write a function that returns a multidimensional array that contains number of occurences for every element of an array.
//For example, for the array [5,7,12,5,3,3,5], the function countAllOccurences(array) would return: [[5,3],[7,1],[12,1],[3,2]]

function countAllOccurences(array) {
  var arrayA = [], arrayB = [], prev;
  var newArray=[]


  array.sort();
  for ( var i = 0; i < array.length; i++ ) {
      if ( array[i] !== prev ) {
          arrayA.push(array[i]);
          arrayB.push(1);
      } else {
          arrayB[arrayB.length-1]++;
      }
      prev = array[i];
  }

 
  return newArray = arrayA.map((e, i) => [e, arrayB[i]]);
}

console.log(countAllOccurences([5,7,12,5,3,3,5]))


//26) Write a function that takes an array of numbers as an input, and checks to see if the array is sorted in non-decreasing order. (i.e. each element in the array is less than or equal to the next element.)

function order (array) {
  for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
          return false; 
      }
  }
  return true;
}

console.log(order([1,2,3]));

//27) Write a function that takes an array of numbers as an argument and sorts them in increasing order.

function increasing(array) {
    
  for(let i=0; i<array.length;i++) {
      for(let j=0; j<i;j++) {
          if (array[i] < array[j]) {
          let temp = array[i] 
          array[i] = array[j];
          array[j] = temp;
          }
      }
  } return array;
}

var rubenArray = [10,2,6,4,89,8,9]
console.log(increasing(rubenArray));

//28) Write a function that takes two sorted arrays of numbers as arguments, and returns one new sorted array containing the numbers from both of the arrays given as arguments. Call this function merge().

function merge(array1,array2) {
    var newArray = [];
    newArray = array1.concat(array2);
    return newArray.sort()
}

var arrayKatie = [1,2,3,4,5,6]
var arrayRuben = [20,5,6,7,8,9]
console.log(merge(arrayKatie,arrayRuben))

function merge2(array1,array2) {
  var newArray = [];
  newArray = array1.concat(array2);
  for(let i=0; i<newArray.length;i++) {
    for(let j=0; j<i;j++) {
        if (newArray[i] < newArray[j]) {
        let temp = newArray[i] 
        newArray[i] = newArray[j];
        newArray[j] = temp;
        }
    }
  } return newArray;
}

var arrayKatie = [1,2,3,4,5,6]
var arrayRuben = [20,5,6,7,8,9]
console.log(merge2(arrayKatie,arrayRuben))

//29) Leibniz's formula can compute pi. the formula is given below:
//pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + ...).
//The elipsis (the three dots) means this pattern continues forever.
//Notice that the operators ( + and - ) alternate each time.
//Write a function called calculatePi(), that takes an argument that specifies the number of terms to calculate from (don't include the 4 in the count) with this formula and returns the value. For example if you said:
//Ex. calculatePi(5) would return the result of the first 5 terms in the parentheses, meaning 1 through (1/9) in this case.

function calculatedPi(num) {
  var count =1;
  var pi=0;
  
  for(let i=1; i<=num;i++) {
      if(i%2!=0) {
         pi = pi  + (1/count)
         count = count +2;
      } else {
         pi = pi - (1/count)
         count = count +2
      }

  } return num*pi
}

console.log(calculatedPi(4))

//30 double(array) return array doble value

function doubleArray (array) {
  return array.map( item=>{return item*2});
}

var newArray = [2,3,4];
console.log(doubleArray(newArray));
