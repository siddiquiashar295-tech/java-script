console.log("hello java")

chapter = 21, 25

// question = 1

// let Firstname = prompt("Enter Your First Name");
// let Lastname = prompt("Enter Your Last Name");

// let FullName =  Firstname + " " + Lastname;

// if (Firstname && Lastname){
//     alert("HELLO", + FullName + "!wELCOME")
// }else{
//     alert("Please enter both name")
// }

// question = 2

// let MobileModel = prompt("What is your favorite Mobile Model ?");
// if(MobileModel !== null && MobileModel.trim() !== ""){
//     let inputlenght = MobileModel.length;
//     alert("the length of your input is: " + inputlenght + " characters.");
//     console.log("the lenght of you input, " + MobileModel + ", is: " + inputlenght + "characters.");
// }else{
//     alert("No Input Received.");
// }

// question = 3

// var word = "pakistani";
// var index = word.indexOf("n");

// console.log("the word is: " + word + "<br>");
// console.log("the index of letter 'n' is: " + index);

// question = 4

// const word = "HELLO WORLD";
// const letter = "I";

// const lastIndex = word.lastIndexOf(letter)
// console.log("Result")
// console.log("last index:" + lastIndex);

// question = 5

// var word = "pakistani";
// var index = word.indexOf("n");

// console.log("the word is: " + word + "<br>");
// console.log("character is index  'n' is: " + index);

// question = 6

// string original = "Hi";
// string result = "";
// int times = 3;

// for (int i = 0; i < times; i++){
//     result = result.concat(original);
// }

// question = 7
// var originalText = "hyderabad";
// var newText = originalText.replace("hyder", "islam");

// console.log("original: " + originalText  );
// console.log("updated: " + newText);

// question = 8

// let text = "All and Samu are heat friends They play cricket and";
// let replacedText = text.replace(/and/g, "&");

// question = 9

// let str = "472"
// let  num = Number(str); 

// console.log("value: " + str + ", type " + typeof str );
// console.log("value: " + num + ", type " + typeof num );

// question = 10

// user_input = prompt("enter  some text: ")
// capitalized_input = user_input.upper()
// console.log("In Capital Letter:", capitalized_input )

// question = 11

// let user_input = prompt("enter some text: ")
// let titleCasedInput = user_input.charAt(0).toUpperCase() + user_input.slice(1).toLowerCase();
// console.log("In Title Case:", titleCasedInput)

// question = 12

// var num = 35.36
// var str = num.toString( ).replace(".", "")
// console.log(str)


// question = 15

// let password = "";
// let isValid = false;

// do {
//     password = prompt("Enter your password:");
//     let hasAlpha = false;
//     let hasNum = false;
//     let startsWithNum = false;

//     if (password.length >= 6) {
        
//         let firstCharCode = password.charCodeAt(0);
//         if (firstCharCode >= 48 && firstCharCode <= 57) {
//             startsWithNum = true;
//         }

//         for (let i = 0; i < password.length; i++) {
//             let code = password.charCodeAt(i);
//             if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//                 hasAlpha = true;
//             } else if (code >= 48 && code <= 57) {
//                 hasNum = true;
//             }
//         }
//     }

//     if (password.length >= 6 && !startsWithNum && hasAlpha && hasNum) {
//         isValid = true;
//         alert("Password is valid!");
//     } else {
//         alert("Invalid password! Ensure it is 6+ chars, contains letters & numbers, and doesn't start with a number.");
//     }

// } while (!isValid);

// question = 16

// var university = "university of karachi"

// var universityArray= university.split("")

// console.log(universityArray)
// for (var i = 0; i < universityArray.length; i++){
//     console.log(universityArray[i])
// }

// question = 17

// const   userInput = "Hello WORLD";
// if  (userInput.length > 0){
//     const lastChar = userInput[userInput.length - 1];
//     console.log("Last Character: " + lastChar)
// }else{
//     console.log("Input is empty")
// }

CHAPTER= 26, 30

// question = 1

// var number = 3.45214
// var roundedNumber = Math.round(number)
// var floorNumber = Math.floor(number)
// var ceilNumber = Math.ceil(number)
// console.log("number: " + number)
// console.log("round off value: " + roundedNumber)
// console.log("floor value: " + floorNumber)
// console.log("ceil value: " + ceilNumber)


// question = 2

// var number = -2.673
// var roundedNumber = Math.round(number)
// var floorNumber = Math.floor(number)
// var ceilNumber = Math.ceil(number)
// console.log("number: " + number)
// console.log("round off value: " + roundedNumber)
// console.log("floor value: " + floorNumber)
// console.log("ceil value: " + ceilNumber)

// question = 3

// var number = 4
// var absoluteValue = Math.abs(number)
// console.log("the absolute value of " + number + " is: " + absoluteValue) 

// question = 4
// var randomDecimal = Math.random()
// var randomNumber = Math.floor(randomDecimal * 6) + 1
// console.log("random dice value: " + randomNumber)



// question = 5
// var randomDecimal = Math.random()
// var randomNumber = Math.floor(randomDecimal * 2) + 1
// var coinSide = randomNumber === 1 ? "Heads" : "Tails"
// console.log("random coin value: " + coinSide)

// question = 6
// var randomDecimal = Math.random()
// var randomNumber = Math.floor(randomDecimal * 100) + 1
// console.log("random number between 1 and 100: " + randomNumber)

// question = 7 
// var userWeight = prompt("Enter your weight in kilograms:")
// var weightInKg = parseFloat(userWeight)
// if (!isNaN(weightInKg)) {

//     console.log("Your weight is: " + weightInKg + " kg") 
// } else {
//     console.log("Invalid input. Please enter a valid weight.")
// }


// question = 8
// var secretNumber = Math.floor(Math.random() * 10) + 1
// var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"))
// if (userGuess === secretNumber) {
//     console.log("Congratulations! You guessed the secret number: " + secretNumber)
// } else {
//     console.log("Sorry, the secret number was: " + secretNumber + ". Try again!")
// }


CHAPTER = 31, 34

// question = 1
// var currentDate = new Date()
// console.log("Current Date and Time: " + currentDate)

// question = 2
// var currentDate = new Date()
// var currentMonth = currentDate.getMonth()
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log("Current Month: " + monthNames[currentMonth])

// question = 3
// var currentDate = new Date()
// var currentDay = currentDate.getDay()
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// console.log("Current Day: " + dayNames[currentDay])

// question = 4
// var currentDate = new Date()
// var currentDay = currentDate.getDay()
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var currentDayName = dayNames[currentDay]
// if (currentDayName === "Sat" || currentDayName === "Sun") {
//     console.log("It's Fun Day")
// } else {
//     console.log("It's a Working Day")
// }

// question = 5
// var currentDate = new Date()
// var currentDateOfMonth = currentDate.getDate()
// if (currentDateOfMonth < 16) {
//     console.log("First fifteen days of the month")
// }   else {
//     console.log("Last days of the month")
// }   

// QUESTION = 6
// var currentDate = new Date()
// var milliseconds = currentDate.getTime()
// var minutes = milliseconds / (1000 * 60)
// console.log("Current Date: " + currentDate)
// console.log("Elapsed milliseconds since January 1, 1970: " + milliseconds)
// console.log("Elapsed minutes since January 1, 1970: " + minutes)

// question = 7
// var currentDate = new Date()
// var currentHour = currentDate.getHours()
// if (currentHour < 12) {
//     console.log("It's AM")
// } else {
//     console.log("It's PM")
// }

// question = 8    
// var laterDate = new Date(2020, 11, 31)
// console.log("Later Date: " + laterDate)

// question = 9
// var ramadanDate = new Date(2023, 2, 22)
// var currentDate = new Date()
// var timeDifference = currentDate.getTime() - ramadanDate.getTime()
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
// console.log(daysPassed + " days have passed since Ramadan 2023")


// question = 10
// var referenceDate = new Date(2015, 0, 1)
// var currentDate = new Date()
// var timeDifference = currentDate.getTime() - referenceDate.getTime()
// var secondsPassed = Math.floor(timeDifference / 1000)
// console.log(secondsPassed + " seconds have passed since the beginning of 2015")

// question = 11
// var currentDate = new Date()
// var currentHour = currentDate.getHours()
// var oneHourAgo = new Date(currentDate.getTime() - (60 * 60 * 1000))
// console.log("Current Date and Time: " + currentDate)
// console.log("One Hour Ago: " + oneHourAgo)


// question = 12
// var currentDate = new Date()
// var currentYear = currentDate.getFullYear()
// var hundredYearsAgo = new Date(currentDate.getTime() - (100 * 365 * 24 * 60 * 60 * 1000))
// console.log("Current Date: " + currentDate)
// console.log("100 Years Ago: " + hundredYearsAgo)

// question = 13
// var userAge = parseInt(prompt("Enter your age:"))
// var currentDate = new Date()
// var currentYear = currentDate.getFullYear()
// var birthYear = currentYear - userAge
// console.log("Your Birth Year is: " + birthYear)

// question = 14
// var customerName = "John Doe"
// var currentMonth = new Date().getMonth()
// var currentYear = new Date().getFullYear()
// var numberOfUnits = 350
// var chargePerUnit = 16
// var netAmountPayable = numberOfUnits * chargePerUnit
// var latePaymentSurcharge = 350
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge
// console.log("Customer Name: " + customerName)
// console.log("Month: " + currentMonth)
// console.log("Number of Units: " + numberOfUnits)
// console.log("Charges Per Unit: " + chargePerUnit)
// console.log("Net Amount Payable (within Due Date): " + netAmountPayable)
// console.log("Late Payment Surcharge: " + latePaymentSurcharge)
// console.log("Gross Amount Payable (after Due Date): " + grossAmountPayable)


CHAPTER = 35, 38

// question = 1
// function displayCurrentDateTime() {
//    var currentDate = new Date()
//    console.log("Current Date and Time: " + currentDate)
// }
// displayCurrentDateTime()


// question = 2
// function greetUser() {
//     var firstName = prompt("Enter your first name:")
//     var lastName = prompt("Enter your last name:")
//     var fullName = firstName + " " + lastName
//     console.log("Hello, " + fullName + "! Welcome!")
// }
// greetUser()


// question = 3
// function addNumbers(num1, num2) {
//     return num1 + num2
// }                            
// var number1 = parseFloat(prompt("Enter the first number:"))
// var number2 = parseFloat(prompt("Enter the second number:"))
// var sum = addNumbers(number1, number2)
// console.log("The sum of " + number1 + " and " + number2 + " is: " + sum) 


// question = 4
// function calculator(num1, num2, operator) {
//     var result
//     switch (operator) {
//         case "+":
//             result = num1 + num2
//             break
//         case "-":
//             result = num1 - num2
//             break
//         case "*":
//             result = num1 * num2
//             break
//         case "/":
//             result = num1 / num2
//             break
//         default:
//             console.log("Invalid operator")

//     }
//     return result
// }   
// var number1 = parseFloat(prompt("Enter the first number:"))
// var number2 = parseFloat(prompt("Enter the second number:"))
// var operator = prompt("Enter the operator (+, -, *, /):")
// var calculationResult = calculator(number1, number2, operator)
// console.log("The result of the calculation is: " + calculationResult)   


// question = 5
// function square(number) {
//     return number * number
// }
// var number = parseFloat(prompt("Enter a number:"))
// var squaredResult = square(number)
// console.log("The square of " + number + " is: " + squaredResult)    

// question = 6
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     } else {
//         return n * factorial(n - 1)
//     }
// }
// var number = parseFloat(prompt("Enter a number:"))
// var factorialResult = factorial(number)
// console.log("The factorial of " + number + " is: " + factorialResult)


// question = 7
// function countNumbers(start, end) {
//     for (var i = start; i <= end; i++) {
//         console.log(i)
//     }
// }
// var startNumber = parseFloat(prompt("Enter the starting number:"))
// var endNumber = parseFloat(prompt("Enter the ending number:"))
// countNumbers(startNumber, endNumber)

// question = 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//         return num * num
//     }
//     var hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular)
//     var hypotenuse = Math.sqrt(hypotenuseSquare)
//     return hypotenuse
// }
// var base = parseFloat(prompt("Enter the base of the triangle:"))
// var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"))
// var hypotenuseResult = calculateHypotenuse(base, perpendicular)
// console.log("The length of the hypotenuse is: " + hypotenuseResult)


// question = 9
// function calculateArea(width, height) {
//     return width * height    
// }
// var width = parseFloat(prompt("Enter the width of the rectangle:"))
// var height = parseFloat(prompt("Enter the height of the rectangle:"))
// var areaResult = calculateArea(width, height)
// console.log("The area of the rectangle is: " + areaResult)



// question = 10
// function isPalindrome(str) {
//     var cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase()
//     var reversedStr = cleanedStr.split("").reverse().join("")
//     return cleanedStr === reversedStr
// }
// var inputString = prompt("Enter a string:")
// var isPalindromeResult = isPalindrome(inputString)
// console.log("Is the string a palindrome? " + isPalindromeResult)



// question = 11
// function capitalizeFirstLetter(str) {
//     var words = str.split(" ")
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
//     }
//     return words.join(" ")
// }
// var inputString = prompt("Enter a string:")
// var capitalizeFirstLetterResult = capitalizeFirstLetter(inputString)
// console.log("The string with capitalized first letters is: " + capitalizeFirstLetterResult)



// question = 12
// function findLongestWord(str) {
//     var words = str.split(" ")
//     var longestWord = ""
//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i]
//         }
//     }
//     return longestWord
// }
// var inputString = prompt("Enter a string:")
// var findLongestWordResult = findLongestWord(inputString)
// console.log("The longest word in the string is: " + findLongestWordResult)



// question = 13
// function calculator(num1, num2, operator) {
//     var result
//     switch (operator) {
//         case "+":
//             result = num1 + num2
//             break
//         case "-":
//             result = num1 - num2
//             break
//         case "*":
//             result = num1 * num2
//             break
//         case "/":
//             result = num1 / num2
//             break
//         default:
//             console.log("Invalid operator")

//     }
//     return result
// }



// question = 14
// function countVowels(str) {
//     var vowelCount = 0
//     var vowels = "aeiouAEIOU"
//     for (var i = 0; i < str.length; i++) {
//         if (vowels.indexOf(str[i]) !== -1) {
//             vowelCount++
//         }   
//     }   
//     return vowelCount
// }
// var inputString = prompt("Enter a string:")
// var vowelCountResult = countVowels(inputString)
// console.log("The number of vowels in the string is: " + vowelCountResult)   




