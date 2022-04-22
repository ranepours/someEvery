function hasOddNumber(arr){
    return arr.some(function(num){
        return num % 2 !== 0;
    })
}

function hasAZero(num){
    let strOfNum = num.toString().split('');
    return strOfNum.some(function(val){
        if(val === '0') return true;
    })
}

// a copy/paste but change some to every
function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        return num % 2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(input){
      return arr.indexOf(input) === arr.lastIndexOf(input);
    });
  }

let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ];
function hasCertainKey(arr, key){
    return arr.every(function(input){
        return key in input;
    })
}

function hasCertainValue(arr, key, value){
    return arr.every(function(input){
        return input[key] === value;
    })
}
