var books = ['Math', 'English', 'Science', 'Islam', 'ICT', 'Chemistry'];
var scienceIndex = books.indexOf('Science');
console.log(scienceIndex);
var ictIndex = books.indexOf('ICT');
console.log(ictIndex);

var oddNumbers = [1, 3, 5, 7, 9, 11];
var index = oddNumbers.indexOf(7);
console.log(index);

var zeroIndex = books[0];
console.log(zeroIndex);

var fifthIndex = books[5];
console.log(fifthIndex);

console.log(oddNumbers);
oddNumbers[0] = 100;
oddNumbers[2] = 500;
console.log(oddNumbers);