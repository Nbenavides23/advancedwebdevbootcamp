function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseBane(name) {
    return name.toUpperCase();
}

greet("Tim, upperCaseName");


/**************************
 Callbacks with Anonymous Function
 **************************/
 
 function greet(name, formatter) {
     return "Hello, " + formatter(name);
 }
 
greet("Tim", function(name) {
     return name.toUpperCase();
 });
 
greet("Tim", function(name) {
     return name + "!!!!!!";
 });