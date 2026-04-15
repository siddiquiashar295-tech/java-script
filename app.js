console.log("Hello World!");


chapter = 38 - 42

// question = 1

// function power(a, b) {
//     let result = 1;
//     for (let i = 0; i < b; i++) {
//         result *= a;
//     }
//     return result;
// }


// question = 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// question = 3

// function areaOfTriangleBySides(a, b, c) {
//     let s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }

// console.log(areaOfTriangleBySides(3, 4, 5)); // Should be 6



// question = 4

// function calculateAverage(marks) {  
//     let total = 0;
//     for (let i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }   
//     return total / marks.length;
// }   
// function calculatePercentage(marks, totalMarks) {
//     let totalObtained = 0;
//     for (let i = 0; i < marks.length; i++) {
//         totalObtained += marks[i];
//     }
//     return (totalObtained / totalMarks) * 100;
// }
// function calculateGrade(percentage) {
//     if (percentage >= 90) {
//         return "A";
//     } else if (percentage >= 80) {
//         return "B";
//     } else if (percentage >= 70) {
//         return "C";
//     } else if (percentage >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }

// let marks = [85, 90, 78];
// let totalMarks = 300;

// let average = calculateAverage(marks);
// let percentage = calculatePercentage(marks, totalMarks);
// let grade = calculateGrade(percentage);

// console.log("Average Marks: " + average);
// console.log("Percentage: " + percentage + "%");
// console.log("Grade: " + grade);



// question = 5

// function findIndexOfCharacter(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;    
//         }
//     }
//     return -1; // Character not found
// }



// question = 6

// function removeVowels(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }   
// console.log(removeVowels("Hello World")); // Should be "Hll Wrld"


// question = 7

// function countOccurrences(str, char) {   
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             count++;
//         }
//     }
//     return count;
// }   
// console.log(countOccurrences("Hello World", "o")); // Should be 2



// question = 8

// function convertDistance(km) {
//     let meters = km * 1000;
//     let feet = km * 3280.84;
//     let inches = km * 39370.1;
//     let centimeters = km * 100000;
//     return {
//         meters: meters,
//         feet: feet,
//         inches: inches,
//         centimeters: centimeters
//     };
// }
// console.log(convertDistance(2));




// question = 9

// function calculateOvertimePay(hoursWorked) {
//     let regularHours = Math.min(hoursWorked, 40);   
//     let overtimeHours = Math.max(0, hoursWorked - 40);
//     let regularPay = regularHours * 10;
//     let overtimePay = overtimeHours * 15;
//     return regularPay + overtimePay;
// }   



// question = 10

// function currencyDenominations(amount) {
//     let denominations = [100, 50, 20, 10, 5, 1];
//     let result = {};
//     for (let i = 0; i < denominations.length; i++) { 
//         let count = Math.floor(amount / denominations[i]);
//         if (count > 0) {
//             result[denominations[i]] = count;
//             amount -= count * denominations[i];
//         }
//     }    
//     return result;
// }   
// console.log(currencyDenominations(286)); // Should be {100: 2, 50: 1, 20: 1, 10: 1, 5: 1, 1: 1}


chapter = 43 - 48

// question = 1 

// document.getElementById('alertLink').addEventListener('click', function(event) {
//     event.preventDefault();
//     alert('Alert box shown!');
// }); 

// question = 2

    // let images = document.querySelectorAll('.mobileImg');
    // images.forEach(img => {
    //     img.addEventListener('click', function() {
    //         alert('You clicked on ' + this.alt);
    //     });
    // });


// question = 3

// let deleteButtons = document.querySelectorAll('.deleteBtn');
// deleteButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         this.closest('tr').remove();
//     });
// });


// question = 4

// let img = document.getElementById('rolloverImg');
// img.addEventListener('mouseover', function() {
//     this.src = 'https://via.placeholder.com/300x200?text=Image+2';
// });
// img.addEventListener('mouseout', function() {
//     this.src = 'https://via.placeholder.com/300x200?text=Image+1';
// });


// question = 5

// let counter = 0;
// const counterDisplay = document.getElementById('counter');
// const increaseBtn = document.getElementById('increaseBtn');
// const decreaseBtn = document.getElementById('decreaseBtn');

// increaseBtn.addEventListener('click', function() {
//     counter++;
//     counterDisplay.textContent = counter;
// });

// decreaseBtn.addEventListener('click', function() {
//     counter--;
//     counterDisplay.textContent = counter;
// });






