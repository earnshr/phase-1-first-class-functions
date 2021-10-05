function receivesAFunction(callback) {
    return (callback());
}

receivesAFunction();

function returnsANamedFunction() {
     return function test() {}
}

function returnsAnAnonymousFunction() {
    return function() {}
}
     






















// // function receivesAFunction(callback) {
// //     callback()
// // }

// // function returnsANamedFunction() {
// //     return function namedAFunction () {};
// // }


// // function returnsAnAnonymousFunction() {
// //     return function (){}
// // }


// // //receivesAFunction(callback) - receives a function and calls it
// // //Identify receivesAFunction
// function receivesAFunction(callback) {
//     callback ();
// }

// // //index returnsANamedFunction() "before all" hook: Define function.
// function returnsANamedFunction() {
//     return function namedAFunction(){};
// }

// // //index returnsAnAnonymousFunction() "before all"
// function returnsAnAnonymousFunction() {
//     return function(){}
// }
