// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) =>{  
     return dollar*oneEuroIs['JPY']/oneEuroIs['USD'];
}
const fromEuroToDollar  = (euro) =>{ 
    return euro*oneEuroIs["USD"];  
}
const fromYanToPound  = (yan) =>{  
    return yan*oneEuroIs['GBP']/oneEuroIs["JPY"]; 
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum ,fromDollarToYen,fromEuroToDollar,fromYanToPound};