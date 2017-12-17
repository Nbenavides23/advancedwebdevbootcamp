/*
    findIndex Definition
    Return the index of the first element in the array
     for which the callback returns a truthy value. -1 is retured
     if the the callback never returns a truthy value.
     
     function findIndex(array, callback) {
         // findIndex code to be implemnted
     }
     
     function callback(curElemnent, curIndex, array) {
         // callback implemented by caller of function
     }
     
     */
     
     
    function findIndex(arr, callback) {
        for(var i = 0; i < arr.length; i++){
            if(callback(arr[i], i, arr)){
                return i;
            }
        }
        return -1;
    }