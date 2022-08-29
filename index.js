// function receivesAFunction(callBack){
//     return "call Back function lab"

// }
// receivesAFunction("firstCallBack",function(callBack){
// return 'name'
// })

// function returnsANamedFunction(){

// }

// function returnsAnAnonymousFunction() {
    
// }


let receivesAFunction = callBack => console.log(callBack());
receivesAFunction(function() {"Great!"});

function returnsANamedFunction () {
    let firstCallBack = function(){};
    return firstCallBack
}

function returnsAnAnonymousFunction () {
    return function(){}
}