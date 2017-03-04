
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// FOR EACH
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
  sum += number;
});
console.log(sum);
// FILTER
console.log(filter(ancestry, function(person) {
  return person.born > 1900 && person.born < 1925;
}));
// → [{name: "Philibert Haverbeke", …}, …]
// MAP
console.log(map(overNinety, function(person) {
  return person.name;
}));
// REDUCE
console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));
//ARRAY

a.concat(b) // [1,2,3] + [1,2] = [1,2,3,1,2]
slice() console.log(a);      // [ "zero", "one", "two", "three" ]
        a.slice(2, 3) // [ "one", "two" ]
join() a.join();      // 'Wind,Rain,Fire'
splice() var removed = myFish.splice(3, 1);
         var removed = myFish.splice(2, 0, "drum");
sort()    var scores = [1, 10, 21, 2]; 
          scores.sort(); // [1, 10, 2, 21] // UNICODE ORDER
length
pop()   // QUITAR DEL ULTIMO
push() //AGREGAR AL ULTIMO

unshift() // AGREGA AL PRINCIPIO
shift()  //QUITAR EL PRIMERO

toSource()

toString()
reverse() var a = ['one', 'two', 'three'];
          a.reverse(); 

          console.log(a); // ['three', 'two', 'one']

valueOf()

typeof 

//STRINGS
charAt()
slice()   var str1 = 'The morning is upon us.', // the length of str1 is 23.
          str2 = str1.slice(1, 8);
          console.log(str2); // OUTPUT: he morn
charCodeAt()    'ABC'.charCodeAt(0); // returns 65
split()          var str = "How are you doing today?";
                 var res = str.split(" ");
concat() a + b = ab;
substr()
fromCharCode()
substring()
indexOf()         var str = "Hello world, welcome to the universe.";
                  var n = str.indexOf("welcome");
toLowerCase()     var str = "Hello World!";
                  var res = str.toLowerCase();
toUpperCase()
lastIndexOf()     var str = "Hello planet earth, you are a great planet.";
                  var n = str.lastIndexOf("planet");
length
toLocaleLowerCase()
localeCompare()
toLocaleUpperCase()
match() x
toSource()
replace() x
valueOf()
search() x

//OTHER
decode­URI()
isNaN()
decode­URI­Com­pon­ent()
Number()
encode­URI()
parseF­loat()
encode­URI­Com­pon­ent()
parseInt()
escape()
String()
eval()
unescape()
isFinite()

//MATH
abs()
min()
acos()
NEGATIVE_INFINITY
asin()
PI
atan()
POSITIVE_INFINITY
atan2()
pow()
ceil()
random()
cos()
round()
E
sin()
exp()
sqrt()
floor()
SQRT1_2
LN10
SQRT2
LN2
tan()
log()
toSource()
LOG10E
toExponential()
LOG2E
toFixed()
max()
toPrecision()
MAX_VALUE
toString()
MIN_VALUE
valueOf()
NaN

//DATES
Date()
setMonth()
getDate()
setFul­lYear()
getDay()
setHours()
getMonth
setMin­utes()
getFul­lYear
setSec­onds()
getYear
setMil­lis­eco­nds()
getHours
setTime()
getMinutes
setUTC­Date()
getSeconds
setUTC­Day()
getMil­lis­econds
setUTC­Month()
getTime
setUTC­Ful­lYear()
getTim­ezo­neO­ffset()
setUTC­Hours()
getUTC­Date()
setUTC­Min­utes()
getUTC­Day()
setUTC­Sec­onds()
getUTC­Month()
setUTC­Mil­lis­eco­nds()
getUTC­Ful­lYear()
toSource()
getUTC­Hours()
toString()
getUTC­Min­utes()
toGMTS­tring()
getUTC­Sec­onds()
toUTCS­tring()
getUTC­Mil­lis­eco­nds()
toLoca­leS­tring()
parse()
UTC()
setDate()
valueOf()

//EVENTS
onabort
onmous­edown
onblur
onmous­emove
onchange
onmouseout
onclick
onmous­eover
ondblclick
onmouseup
ondragdrop
onmove
onerror
onreset
onfocus
onresize
onkeydown
onselect
onkeypress
onsubmit
onkeyup
onunload
onload

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980