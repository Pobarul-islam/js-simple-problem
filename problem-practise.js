// Find The Largest Numbers

/*  function Numbers(firstNum, secondNum, thirdNum) {
    if (firstNum > secondNum && firstNum > thirdNum) {
        return firstNum;
    }
    else if (secondNum > firstNum && secondNum > thirdNum) {
        return secondNum;
    }
    else {
        return thirdNum;
   }
}

const maxNum = Numbers(50, 300, 200);
console.log('Largest Number is:', maxNum); */


 

// Find The smallest Number

function smallestNum(firstNum, secondNum, ThirdNum) {
    if (firstNum < secondNum && firstNum < ThirdNum) {
        return firstNum;
    }
    else if (secondNum < firstNum && secondNum < ThirdNum) {
        return secondNum;
    }
    else {
        return ThirdNum;
    }
}

const result = smallestNum(55, 33, 11);
console.log('Small number is', result);