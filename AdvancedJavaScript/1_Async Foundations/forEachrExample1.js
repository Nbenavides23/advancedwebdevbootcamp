/***********************
    Print Array Value Doubled
****************************/

var arr = [1,2,3,4,5,6];
function double(arr) {
    for(var i=0; i < arr.lengthl; i++) {
        console.log(arr[i] * 2);
    }
}
double(arr);

// Refactor 
/**********************
    Double with forEach
************************/

var arr = [1,2,3,4,5,6];
forEach(arr, function(number) {
    console.log(number * 2);
});


/*******************
forEach Function Definition
********************/

function forEach(arra, callback) {
    // To be implemented
}

//callback signature
function callback(curElement, currentIndex, array){
    //Implemented by the caller of forEach
}

