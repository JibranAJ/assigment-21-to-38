alert("Welcome to my asigment chapter 21 to 38");
alert("use git hub link to see code of chapter 21 to 38");
// //.............................CHAPTER 21-25...............................//
// //1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
// var fname = prompt("Enter First name: ");
// var lname = prompt("Enter last name: ");
// var fullname = fname + lname;
// alert("Welcome " + fullname);

// //2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var input = prompt("Enter your Favourite Mobile Phone Model: ");
// var length = input.length;
// document.write("My Favourite Mobile Phone is: " + input);
// document.write("Length Of String :" + length);

// //3. Write a program to find the index of letter �n� in the word �Pakistani� and display the result in your browser .
// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write("String: " + str);
// document.write("Index of 'n': " + n);

// //4. Write a program to find the last index of letter �l� in the word �Hello World� and display the result in your browser.
// var str = "Hello World";
// var n = str.lastindexOf("l");
// document.write("String: " + str);
// document.write("Index of 'n': " + n);

// //5. Write a program to find the character at 3rd index in the word �Pakistani� and display the result in your browser.
// var str = "Pakistani";
// var thirdchar = str.charAt(3);
// document.write("String: " + str);
// document.write("Character at index 3: " + thirdchar);

// //6. Repeat Q1 using string concat() method.
// var str = "Pakistani";
// var str1 = str.slice(0, 3);
// var str2 = str.charAt(3);
// var str3 = str.slice(3);
// var res = str1.concat(str2, str3);
// document.write(res);

// //7. Write a program to replace the �Hyder� to �Islam� in the word �Hyderabad� and display the result in your browser.
// var text = "Hyderabad";
// document.write("City: " + text);
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "Hyder") {
//         text = text.slice(0, 1) + "Islam" + text.slice(i + 12);
//     }
// }
// document.write("After Replacemewnt: " + text);

// //8. Write a program to replace all occurrences of �and� in the string with �&� and display the result in your browser. 
// //var message = �Ali and Sami are best friends. They play cricket and football together.�;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Message: " + message);
// var newMessage = message.replace(/and/g, "&");
// document.write("Message after replacement: " + newMessage);

// //9. Write a program that converts a string �472� to a number 472. Display the values & types in your browser.
// var value = "472";
// document.write("Value: " + value);
// var result = typeof value;
// document.write("Type: " + result);
// var value1 = parseInt(value);
// document.write("Value: " + value1);
// var result1 = typeof value1;
// document.write("Type: " + result1);

// //10. Write a program that takes user input. Convert and show the input in capital letters.
// var str = prompt("Input a String: ");
// document.write(str);
// str = str.toUpperCase();
// document.write(str);

// //11. Write a program that takes user input. Convert and show the input in title case.
// var text = prompt("Enter some text");
// document.write("Users input : " + text)
// var captializeStrig = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
// var res = text.split(' ').map(captializeStrig);
// var capitalizeSentence = res.join(' ');
// document.write("<br>Upper case : " + capitalizeSentence)

// //12. Write a program that converts the variable num to string. var num = 35.
// var num = 35.36;
// document.write("Number: " + num);
// num = num.toString();
// num = num.replace('.', '');
// document.write("Result: " + num);

// //13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// //Note: ASCII code of ! is 33 
// //ASCII code of , is 44 
// //ASCII code of . is 46 
// //ASCII code of @ is 64
// var username = prompt("Enter user name: ");
// if (username.includes("@")||username.includes(".")||username.includes(",")||username.includes("!"));
// alert("Please enter a valid user name")
// else
// alert("Valid user name")

// //14. You have an array A = [cake�, �apple pie�, �cookie�, �chips�, �patties�] Write a program to enable �search by user input� in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
// var item =prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ?: ");
// var fruits = ["cake", "cake pie", "cookie", "chips", "patties"];
// // Check if a value exists in the fruits array
// var index =fruits.indexOf(item);
// if(fruits.indexOf("cake") !== item)
// {
        
//     document.write(item + " is present at index " +index +" in our bakery");
// }
//  else if(fruits.indexOf("cake pie") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
// else if(fruits.indexOf("chips") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
// else if(fruits.indexOf("cookie") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
// else if(fruits.indexOf("patties") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
//  else{
//    alert("we are soory")
// }

// //15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// // Declare variables and constants
// var username;           // username entered by user
// var charAny;            // text character identified in username
// var anyNum = false;     // digit variable used to detect whether the username has one or not
// var index;              // index loop variable
// var BR = "<br />";      //break
// var ES = "";            //space

// // Display program requirements for the username requested
// document.write("We'll begin helping you select a username" + BR);
// document.write("Your username must have at least 8 characters," + BR);
// document.write("   start with a letter, and contain at least 1 numeric character." + BR);
// username = prompt("Please enter your username: ", ES);

// // Check for length of username
// while (username.length < 8) {
//     document.write("Your username must be at least 8 characters long." + BR);
//     username = prompt("Please enter your username: ", ES);
// }

// // Check that first character is a letter
// // Substring function has three arguments: string, starting position, and ending position
// charAny = username.substr(0, 1);
// while (charAny !== isLetter()) {
//     document.write("The first character of your username must be a letter." + BR);
//     username = prompt("Please enter your username: ", ES);
// }

// // Check that there's at least one digit in the username
// while (anyNum !== false) {
//     // Check each character, set anyNum to true if a digit
//     for (index = 1; index < username.substr(index, index); index++) {
//         anyNum = username.substr(index, index);
//         if (isNumeric(charAny)) {
//             anyNum = true;
//         }
//     }

//     // If anyNum is false there were no numerics
//     if (anyNum !== true) {
//         document.write("Your username must include at least 1 digit." + BR);
//         username = prompt("Please enter your username: ", ES);
//     }
// }

// // Thank the user and end the program
// document.write("Thank you! Your new username is: " + username);

// //16. Write a program to convert the following string to an array using string split method. var university = �University of Karachi�; Display the elements of array in your browser.
// var str = "University of Karachi";
// var array = str.split('');
// document.write(array + <br>)
// str1= str.charAt(str.length-1);
// document.write(array[i] + </br>)

// //17. Write a program to display the last character of a user input.
// var str = prompt("User input: ");
// str1= str.charAt(str.length-1);
// document.write("Last character of input is: " + str1)

// //18. You have a string �The quick brown fox jumps over the lazy dog�. Write a program to count number of occurrences of word �the� in given string.
// var str="You have a string �The quick brown fox jumps over the lazy dog";
// document.write("Text : " +str)
// var count = (str.match(/The/g) || []).length;
// var count1= (str.match(/The/g) || []).length;
// count2=count+count1;
// document.write("\n nThere are "+count2 +"occurrences of word �the�")

// //.............................CHAPTER 26-30...............................//

// //1. Write a program that takes a positive integer from user & display the following in your browser.
// //a. number
// //b. round off value of the number
// //c. floor value of the number
// //d. ceil value of the number

// number =+prompt("Enter positive integer:")
// if (number<=0){
// alert("not a positive number")
// }
// else{
// document.write("number =" +number)
// }
// var roundOffValue = Math.round(number)
// document.write("<br>Round off value = " +roundOffValue)
// var floorValue = Math.floor(number)
// document.write("<br>Floor value of number =" +floorValue)
// var ceilValue =Math.ceil(number)
// document.write("<br>Ceil value of number = " +number)

// //2. Write a program that takes a negative floating point number from user & display the following in your browser.
// //a. number
// //b. round off value of the number
// //c. floor value of the number
// //d. ceil value of the number

// var number =+prompt("Enter a negative floating point integer:")
// if (number>=0){
// alert("not a negative floating point number")
// }
// else{
// document.write("number =" +number)
// }
// var roundOffValue = Math.round(number)
// document.write("<br>Round off value = " +roundOffValue)
// var floorValue = Math.floor(number)
// document.write("<br>Floor value of number =" +floorValue)
// var ceilValue =Math.ceil(number)
// document.write("<br>Ceil value of number = " +number)

// //3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num =+prompt("Enter positive or negative number")
// var absoluteValue =Math.abs(num)
// document.write("Absolute value of" +num +"=" +absoluteValue)

// //4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
// document.write('Random dice value : ' + diceRoll1);
// var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
// document.write('<br>Random dice value : ' + diceRoll2);

// //5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var heads = 0;
// var tails = 0;
// if (Math.random() < 0.5){
//     document.write("2<br> Random coin value:Heads")
// }else{
//     document.write("1<br> Random coin value: Tails")
// }

// //6. Write a program that shows a random number between 1 and 100 in your browser.

// var number = Math.floor(Math.random() * 100);
// document.write("Random number between 1 and 100 : " +number)

// //7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// var weight = prompt("Enter your weight in Kilograms")
// document.write("The weight of users is "+weight)

// //8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input 
// //equals the secret number, congratulate the user.

// var secretNum=Math.floor(Math.random()*10)
// var number =+prompt("Enter a number between 1 and 10")
// if (number===secretNum){
//     alert("Congratulation you won!")
// }
// else{
//     alert("Try again!")
// }

// //1. Write a program that displays current date and time in your browser.
// function formatAMPM();
// {
//     var date = new Date();
//     var hours = date.getHours();
//     var days = date.getDay();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
//     return strTime;
// }
// document.getElementById("para1").innerHTML = formatAMPM();

// //2. Write a program that alerts the current month in words.For example December.
// const monthNames = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];
// const d = new Date();
// document.write("current month" + monthNames[d.getMonth()]);

// //3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var now = new Date();        // current date/time
// var hrs = now.getHours();    // 0 to 23
// var mins = now.getMinutes();
// var secs = now.getSeconds();


// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var day = weekday[now.getDay()];
// document.writeln("<p>Today is " + day + "</p>");

// //4. Write a program that displays a message �It�s Fun day� if its Saturday or Sunday today.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var rightNow = new Date();
// var theDay = rightNow.getDay();
// if (theDay=="Sat"||theDay=="Sun")
// alert("It's Fun Day")
// else alert("It's not Fun Day")

// //5. Write a program that shows the message �First fifteen days of the month� if the date is less than 16th of the month
// //else shows �Last days of the month�.
// var d = new Date();
// var n = d.getUTCDate();
// if (n <= 15) {
//     document.write("First fifteen days of the month")
// }
// else {
//     document.write("Last days of the month")
// }

// //6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// //hasn't been declared beforehand. Use any variable you like to represent the Date object.
// var now = new Date();
// document.write("Current Date : " + now);
// var d = new Date();
// var n = d.getTime();
// document.write("<br>Elapsed milliseconds since January 1,1970 : " + n);
// var minutes = n / 60000;
// document.write("<br>Elapsed minutes since January 1,1970 : " + minutes);

// //7. Write a program that tests whether it's before noon and alert �Its AM� else �its PM�.
// var d = new Date();
// var n = d.getUTCHours();
// var m = d.getUTCMinutes();
// var s = d.getUTCSeconds();
// if (n <= 12 && m == 00 && s == 00) {
//     alert("It's AM")
// }
// else {
//     alert("It's PM");
// }

// //8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
// var d = new Date();
// d.setDate(0);
// var laterDate=d;
// document.write("LaterDate : " +laterDate);

// //9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// //Note: 1st Ramadan was on June 18, 2015
// // To set two dates to two variables 
// var date1 = new Date("05/18/2015"); 
// var date2 = new Date(); 
  
// // To calculate the time difference of two dates 
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
  
// // To calculate the no. of days between two dates 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  
// //To display the final no. of days (result) 
// document.write(Difference_In_Days+"Days have passed since 1st Ramadan, 2015");

// //10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
// var now1 = new Date("Jan/01/2015 01:00:00");
//  var now2 =new Date();
//  var Difference_In_Time = now2.getTime() - now1.getTime()/1000;
//  document.write("On reference date "+now2 +", " +Difference_In_Time +" seconds has passed since beginning of 2015");

// //11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// //finally display the date object in your browser.
// var d = new Date();
// document.write("Current Date: "+d);
// var currHour = d.getHours();
// var resetHour = d.setHours(currHour - 1);
// document.write("1 hour ago, It was: "+resetHour);

// //12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var d = new Date();
// document.write("Current Date: "+d);
// var currYear = d.getFullYear();
// var resetYear = d.setFullYear(1920);
// document.write("100 years back, It was: "+resetYear);

// //13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
// var dob = prompt("Enter Your Date of Birth","Jan 25.1999")
// var dobmill = dob.getTime();
// var today = new Date();
// var todaymill = today.getTime();
// var diff = Math.floor(diff/(1000*60*60*24*30*12))
// document.write("Your age is: "+ diff)
// d = dob.getFullYear();
// document.write("Your birth year is: "+d)

// //14. Write a program to generate your K-Electric bill in your
// //browser. All the amounts should be rounded off to 2
// //decimal places. Display the following fields:
// //a. Customer Name
// //b. Current Month
// //c. Number of units
// //d. Charges per unit
// //e. Net Amount Payable (within Due Date)
// //f. Late Payment Surcharge
// //g. Gross Amount Payable (after Due Date)
// //Where,Net Amount Payable (within Due Date) = Number of units * Charges per unit
// //& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name : <strong>ABC Customer</strong>");
// var monthNames = ["jan", "febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var month=now.getMonth();
// var nameOfCurrentMonth=monthNames[month];
// document.write("<br>Month : " +"<b>"+nameOfCurrentMonth +"</b>");
// var units=prompt("Enter Number of units")
// var charges=16;
// document.write("<br>Number of units : " +"<b>"+units+"</b>" +"<br>Charges per unit : "+"<b>"+charges +"<b/><br>");
// var Net_Amount_Payable= units * charges;
// document.write("<br>Net Amount Payable (within Due Date) : " +"<b>" +Net_Amount_Payable + "</b>");
// var lateCharges =350;
// document.write("<br>Late Payment Charges : " +lateCharges);
// var Gross_Amount_Payable = Net_Amount_Payable + lateCharges;
// document.write("<br>Gross Amount Payable (after Due Date) : "+Gross_Amount_Payable);

// // // //..............................CHAPTER#35 to 38                //                                                                                                                                                                         / / 1. Write a function that displays current date & time in your
// // // 1.Write a function that displays current date & time in your browser..
// // var today = new Date();
// // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


// // // 2. Write a function that takes first & last name and then it greets the user using his full name.
// // function MyFunction() {
// //     var first, second;
// //     first = document.getElementById("firstname").value;
// //     second = document.getElementById("lastname").value;

// //     document.GetElementById("here").InnerHTML = first;
// //     document.GetElementById("here").InnerHTML = second;
// // }
// // // 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// // function addNumbers() {
// //     var val1 = parseInt(document.getElementById("value1").value);
// //     var val2 = parseInt(document.getElementById("value2").value);
// //     var ansD = document.getElementById("answer");
// //     ansD.value = val1 + val2;
// // }


// // // 5. Write a function that squares its argument.
// // function sumOfSquares(num) {
// //     var i;

// //     for (i = 0; i <= num; i++) {
// //         var sum = 0;
// //         var i = i * i;
// //         sum = i;
// //     }
// //     document.write("The sum of squares for numbers up to and including " + num + "is " + sum);
// // }
// // var num = parseInt(prompt("Enter a number:"));
// // sumOfSquares(num);


// // // 6. Write a function that computes factorial of a number.
// // var up = document.getElementById('GFG_UP');
// // var down = document.getElementById('GFG_DOWN');
// // var n = 5;

// // up.innerHTML = "Click on the button to calculate"
// //     + " the factorial of n.<br>n = " + n;

// // function Factorial(n) {
// //     var ans = 1;

// //     for (var i = 2; i <= n; i++)
// //         ans = ans * i;
// //     return ans;
// // }

// // function GFG_Fun() {
// //     down.innerHTML = Factorial(n);
// // }

// // 7. Write a function that take start and end number as inputs & display counting in your browser.
// // function sum() {
// //     var FirstNumber = parseInt(prompt("Enter first number:"));
// //     var SecondNumber = parseInt(prompt("Enter second number:"));

// //     var result = 0;

// //     for (var i = FirstNumber; i <= SecondNumber; i++) {
// //         result += i;
// //     }

// //     alert(result);
// // }


// //chp35 - 38
// //1. Write a function that displays current date & time in your browser.
// function nowdate() {

//     var d = new Date()
//     var months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
//     var days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
//     return days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " GMT+0500 (PKT)"
// }
// document.write(nowdate())

// //2. Write a function that takes first & last name and then it greets the user using his full name.
// function name(fName, lName) {
//     return "Welcome " + fName + lName

// }
// var firstName = prompt("Enter firstname")
// var lastName = prompt("Enter lastname")
// document.write(name(firstName, lastName))

// //3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function add(num1, num2) {
//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1 + Inum2
// }
// var numb1 = prompt("Enter number1")
// var numb2 = prompt("Enter number2")
// document.write(add(numb1, numb2))

// //4. Calculator:
// //Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// //show the desired result in your browser.
// function add(num1, num2) {

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1 + Inum2
// }
// function sub(num1, num2) {

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1 - Inum2
// }
// function mul(num1, num2) {

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1 * Inum2
// }
// function div(num1, num2) {

//     Inum1 = parseInt(num1)
//     Inum2 = parseInt(num2)
//     return Inum1 / Inum2
// }

// var numb1 = prompt("Enter number1")
// var op = prompt("Enter Operator")
// var numb2 = prompt("Enter number2")

// if (op == "+") {

//     document.write(add(numb1, numb2))
// } else if (op == "-") {

//     document.write(sub(numb1, numb2))
// } else if (op == "*") {

//     document.write(mul(numb1, numb2))
// } else if (op == "/") {

//     document.write(div(numb1, numb2))
// }

// //5. Write a function that squares its argument.
// function sqrt(num1) {

//     Inum1 = parseInt(num1)
//     return Inum1 * Inum1
// }
// var numb1 = prompt("Enter number1")
// document.write(sqrt(numb1))

// //6. Write a function that computes factorial of a number.
// function factorial(num) {

//     if (num <= 1) {

//         return 1
//     }
//     else {
//         temp = num
//         var fct = 1
//         for (i = 0; i < num; i++) {

//             fct = fct * temp
//             temp--
//         }
//         return fct
//     }
// }
// num = prompt("enter num")
// numI = parseInt(num)

// document.write(factorial(numI))

// //7. Write a function that take start and end number as inputs & display counting in your browser.
// function count(num1, num2) {

//     var numb = []
//     temp = num1
//     for (i = 0; i < num2 - temp; i++) {
//         numb[i] = num1 + 1
//         num1++
//     }
//     return numb
// }
// var start = prompt("Enter start num")
// var end = prompt("Enter end num")
// startI = parseInt(start)
// endI = parseInt(end)
// document.writeln(count(startI, endI))

// //8. Write a nested function that computes hypotenuse of a right angle triangle.
// //Hypotenuse2 = Base2 + Perpendicular2 
// //Take base and perpendicular as inputs.
// //Outer function : calculateHypotenuse()
// //Inner function: calculateSquare()
// function sq(num1) {

//     Inum1 = parseInt(num1)
//     return Inum1 * Inum1
// }
// function hyp(num1, num2) {

//     return Math.sqrt(sq(num1) + sq(num2))
// }

// num = prompt("enter base")
// numI = parseInt(num)

// num1 = prompt("enter perp")
// num1I = parseInt(num1)

// document.write(hyp(numI, num1I))

// //9. Write a function that calculates the area of a rectangle.
// //A = width * height
// //Pass width and height in following manner:
// //i. Arguments as value
// //ii. Arguments as variables
// function rectA(height, width) {
//     return height * width
// }
// var height = prompt("Enter Height")
// var width = prompt("Enter width ")

// document.write(rectA(height, width))


// //10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// //A palindrome is word, phrase, or sequence that reads the same backward as
// //forward, e.g., madam.
// var wordR = ""
// var ln = prompt("Enter to check palindrome")
// var tempWord = ln.split("");


// for (i = tempWord.length - 1; i >= 0; i--) {

//     wordR = wordR + tempWord[i]
// }
// if (ln == wordR) {
//     document.write("word is a palindrome")
// } else {
//     document.write("word isn't a palindrome")
// }

// //11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// //EXAMPLE STRING : 'the quick brown fox'
// //EXPECTED OUTPUT : 'The Quick Brown Fox'
// function small(inp) {

//     var inpSmall = inp.toLowerCase()
//     var chrCap = inpSmall.charAt(0)
//     chrCap = chrCap.toUpperCase()
//     var sep = inpSmall.split("")
//     sep[0] = chrCap
//     inpSmall = sep.join("")
//     return inpSmall

// }

// //12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// //EXAMPLE STRING : 'Web Development Tutorial'
// //EXPECTED OUTPUT : 'Development'
// function Capsent(inp) {

//     var propSent = ""
//     var inpSmall = inp.toLowerCase()
//     var sp = inpSmall.split(" ")

//     for (i = 0; i < sp.length; i++) {

//         propSent = propSent + small(sp[i]) + " "
//     }
//     return propSent
// }

// var inp = prompt("Enter ")
// document.write(Capsent(inp))

// //13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
// //Sample arguments : 'JSResourceS.com', 'o'
// function Long(sent) {
//     var strSp = sent.split(' ')
//     var longestWord = 0
//     for (var i = 0; i < strSp.length; i++) {
//         if (strSp[i].length > longestWord) {
//             longestWord = strSp[i].length
//             num = i
//         }
//     }
//     return strSp[num]
// }

// var sen = prompt("Enter Sentence")
// document.write(Long(sen))

// //14. The Geometrizer
// function chec(sent, chr) {
//     var strSp = sent.split('');
//     num = 0
//     for (var i = 0; i < strSp.length; i++) {
//         if (strSp[i] == chr) {
//             num = num + 1
//         }
//     }
//     return num
// }

// var sen = prompt("Enter Sentence")
// var ch = prompt("Enter character")
// document.write(chec(sen, ch))
// function calcCircumference(radius) {
//     return "The circumference is" + (2 * 3.14 * radius)
// }
// function calcCircumference(radius) {
//     return "The area is" + (3.14 * radius * radius)
// }