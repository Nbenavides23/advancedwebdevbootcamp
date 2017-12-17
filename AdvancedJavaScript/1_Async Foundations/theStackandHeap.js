/*
        What is the Stack?
    An ordered data structure
    Keeps track of function invocations
    Part of the JaveScript runtime(you don't access it directly)
    
        
        How Your Code Changes the Stack
    Whenever you invoke a function, the details of the invocation are saved to the top
    of the stack (pushed to the top)

    Whenever a function returns, the information about the invocation is taken off the top 
    of the stack (popped off of the top)
    
    Stack Frame Contents
    2 function: multiply
    5 function: main
    ----------------------------
    The function that invoked
    The parameters that were passed to the function
    Current line number
    
    Stack Definition
    An ordered set of stack frames
    Most recently invoked function is on the top of the stck
    The bottomof the stack is the first function invoked 
    The stack is processed from top to bottom
    
    
            Heap Definition
            An area in memory where the your data is stored
            
            
*/