// Your code here
function saturdayFun(action="roller-skate"){
    return `This Saturday, I want to ${action}!`
}

function mondayWork(action = "go to the office"){
    return `This Monday, I will ${action}.`
}

function wrapAdjective(param2='*'){

        return function(param1="special")
        {
            return `You are ${param2}${param1}${param2}!`
        }
}

// const [answer, theBase] = 
// (
//     function(thingToAdd) 
//     {
//       const base = 3;
//       return 
//       [
//         function() { return base + thingToAdd; },
//         function() { return base; }
//       ];
//     }
//   )(2)

let Calculator = {
    add: function (a,b)
    {
        return a + b
    },
    subtract: function (a,b)
    {
        return a - b
    },

    multiply: function (a,b)
    {
        return a * b
    },

    divide: function (a,b)
    {
        return a / b
    },
}

function actionApplyer(int, array){
    let start = int
    // const array = [function(a){ return a * 2 },
    // function(a){ return a + 1000},
    // function(a){ return a % 7 }]

    for (let i = 0; i < array.length; i++){
         int = array[i](int)
    }
    return int
}