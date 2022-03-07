//add elements to an array
var lastBench = ['Shohan', 'Nibir', 'Nahid'];
lastBench.push('Suraiya');
lastBench.push('Saif');
lastBench.push('Purnima');
console.log(lastBench);

var ages = [21, 22, 25, 27];
ages.push(15);
ages.push(24);
console.log(ages);

//remove elements from an array
ages.pop();
ages.pop();
console.log(ages);

//add elements in starting
lastBench.unshift('Rumman');
console.log(lastBench);
ages.unshift(13);
console.log(ages);

//remove elements in starting
ages.shift();
console.log(ages);
lastBench.shift();
console.log(lastBench);