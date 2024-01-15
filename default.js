
function addTwoNumber(num1, num2 = 0){
    // num2 = num2 || 0; ai vahbe o deua jay default value
    // if(num2 == undefined){  function call korar somoy parameter ar value nah dile ai vabe default value deua jay
    //     num2 = 0;
    // }
    return num1 + num2;
}

const result = addTwoNumber(5, 95);
console.log(result);