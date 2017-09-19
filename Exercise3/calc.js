/*
 * Implement all your JavaScript in this file!
 */

var operation = 0,
curNum = '',
oldNum = '',
resNum = '',
operator = '';
 

$(".num").click(function () {
    curNum += $(this).text();
    $("#display").val(curNum);
    console.log('oldNum exist, curNum value if op not clicked ', curNum);
});
 


$(".op").click(function(){
    if(resNum) {
        oldNum = resNum;
        curNum = '';
        operator = $(this).val();
        doOps(operator);
    } else {
        if( oldNum && curNum && operator) {
            console.log('what is operator if it exists ', operator);
            doOps(operator);
            console.log('previous op exist', operation);
            doCalc(operation);
            console.log('exist previous op - resnum ', resNum);
            curNum = resNum;
            operation = 0;;
            $("#display").val(resNum);
            oldNum = curNum;
            curNum ='';
            operator = $(this).val();
            doOps(operator);
            console.log('oldNum, operator, operation ', oldNum, operator, operation);
        } else {
            if(operator !== '') {
                console.log('operation exists', operation);
                operation = 0;;
                console.log('operation after reset', operation);
                operator = $(this).val();
                doOps(operator);
            } else {
                console.log('operation does not exist', operation);
                operator = $(this).val();
                oldNum = curNum;
                curNum = '';
                doOps(operator);
            }
        }  
    }
    
    
});

$("#equalsButton").click(function() {
        if(curNum && oldNum){
            doCalc(operation);
            curNum = '';
            $("#display").val(resNum);
        } else {
            $("#display").val(curNum);
        }
});

$("#clearButton").click( function() {
    curNum = '';
    resNum = '';
    oldNum = '';
    operation = 0;;
    operator = '';
    $("#display").val(curNum);
});

//functions

function doOps(val) {
    console.log('oldNum in .op click event ', oldNum);
    console.log('operator value after op click event ', operator);
    switch(operator) {
        case 'plus':
            operation = 1;
            console.log('click operation ', operation);
            break;

        case 'minus':
            operation = 2;
            console.log('click operation ', operation);
            break;

        case 'divide':
            operation = 3;
            console.log('click operation ', operation);
            break;

        case 'multiply':
            operation = 4;
            console.log('click operation ', operation);
            break;  
            
        default:
            resNum = curNum;
            console.log('click operation default result ', resNum); 
    }
}

function doCalc(val) {
    switch(operation) {
        case 0:
            break;
        case 1:
            resNum = eval(oldNum) + eval(curNum);
            console.log('equal pressed result is ',resNum);
            break;

        case 2:
            resNum = eval(oldNum) - eval(curNum);
            console.log('equal pressed result is ',resNum);
            break;

        case 3:
            if(curNum == 0) {
                resNum = 'Infinity';
                break;
            } else {
                resNum = eval(oldNum) / eval(curNum);
                console.log('equal pressed result is ',resNum);
                break;
            }
        case 4:
            resNum = eval(oldNum) * eval(curNum);
            console.log('equal pressed result is ',resNum);
            break;

        default:
            break;
    }
}