var a =[1,2,3,4,5]
var b =["a","b","c","d"]
var c =[true,false,false,true]

var d =[1,2,3,"gyt",true,"ytr",false]

var city =["London","Newyork","Bombay","Chennai","Dakota"]
undefined
city.pop(1)
"Dakota"
city
(4) ["London", "Newyork", "Bombay", "Chennai"]
city.push('dakota')
5
city
(5) ["London", "Newyork", "Bombay", "Chennai", "dakota"]
city.slice(1,4)
(3) ["Newyork", "Bombay", "Chennai"]
city.splice(1,4,6)

var city =["London","Newyork","Bombay","Chennai","Dakota"]
undefined
city.indexOf('bombay')

-1
city.indexOf('Arizona')
-1

city.concat('a')
(6) ["London", "Newyork", "Bombay", "Chennai", "Dakota", "a"]
city.concat(12)
(6) ["London", "Newyork", "Bombay", "Chennai", "Dakota", 12]

city
(5) ["London", "Newyork", "Bombay", "Chennai", "Dakota"]
city.toString
ƒ toString() { [native code] }
city.split()
VM2306:1 Uncaught TypeError: city.split is not a function
    at <anonymous>:1:6
(anonymous) @ VM2306:1
city
(5) ["London", "Newyork", "Bombay", "Chennai", "Dakota"]

city.sort()
(5) ["Bombay", "Chennai", "Dakota", "London", "Newyork"]


var a =['Delhi','Mumbai','California','Kolkata','Hydrabad']
undefined
a.sort()
(5) ["California", "Delhi", "Hydrabad", "Kolkata", "Mumbai"]
a.reverse()
(5) ["Mumbai", "Kolkata", "Hydrabad", "Delhi", "California"]