
// ------------------------------------------
// problem 1:Let's play a mind game
// --------------------

function mindGame(number){
    const multiply = number * 3;  
    const multiplyAdd = multiply + 10;
    const dividedAdd = multiplyAdd / 2;
    const subtractionAdd = dividedAdd - 5;
    return subtractionAdd;
}
const total = mindGame(5);
console.log(total);



// --------------------------------
// problem 2:Finding even or odd
// ----------------

function evenOdd(number){
    const stringLength = number.length;
    if(stringLength % 2 === 0){
        return 'even';
    }else{
        return 'odd';
    }
}
console.log(evenOdd ('chatgpt'));



// -----------------------------------
// problem 3: ls less or greater than
// -----------------

function isLGSeven(input){
        const difference = input - 7;
    if(difference < 0){
            return difference;
    }else{
            return  input * 2;
    }
}
console.log(isLGSeven(15))


// -----------------------------
// problem 4: finding Bad data 
// ----------------

function findingBadData(array){
    let BeddataTrue = []
    for (i = 0; i < array.length;i++){
        const arrayElement = array[i];
        if (arrayElement < 0){
            BeddataTrue.push(arrayElement)
        }
    }
    const bad = BeddataTrue.length
    return bad;
}
const arraydata = [1,2,5]
const callArrydata = findingBadData(arraydata);
console.log(callArrydata);



// ------------------------------
// problem -5: convert your gems
// ------------------------------

function gemsToDiamond(m1,m2,m3){
    const total = m1 * 21 + m2 * 32 + m3 * 43;
    return total > 2000 ?
    total - 2000 : total;
}
console.log(gemsToDiamond(100,5,1));