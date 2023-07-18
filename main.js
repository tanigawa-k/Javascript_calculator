let result = document.getElementById('result');

function pushOperator1(operator1) {
     let lastText = result.value.slice(-1);
     let doubleCheckText=["+","-","*","/","."]
     if(doubleCheckText.indexOf(lastText) !== -1 ){
        result.value += "";
    }
    else{
        result.value += operator1;
    }
     document.getElementById("commaButton").removeAttribute("disabled");
}

function pushOperator2(operator2) {
     let lastText = result.value.slice(-1);
     let doubleCheckText=["+","-","*","/",".",""]
     if(doubleCheckText.indexOf(lastText) !== -1 ){
        result.value += "";
    }
    else{
        result.value += operator2;
    }
     document.getElementById("commaButton").removeAttribute("disabled");
}


function pushZero(zero) {
    let lastText = result.value.slice(-1);
    if(lastText == ""){
        result.value += "0.";
        document.getElementById("commaButton").setAttribute("disabled", true);
    }
    else{
        result.value += "0";
    }
    document.getElementById("dividedButton").removeAttribute("disabled");
    document.getElementById("timesButton").removeAttribute("disabled");
}

function pushZeroZero(ZeroZero) {
    let lastText = result.value.slice(-1);
    if(lastText == ""){
        result.value += "";
    }
    else{
        result.value += "00";
    }
}

function pushComma(comma) {
    let lastText = result.value.slice(-1);
    let doubleCheckText=["+","-","*","/",".",""]
    if(doubleCheckText.indexOf(lastText) !== -1){
        result.value += "";
    }
    else{
        result.value += ".";
        document.getElementById("commaButton").setAttribute("disabled", true);
    }
}


function pushNumber(number) {
        result.value += number;
        document.getElementById("dividedButton").removeAttribute("disabled");
        document.getElementById("timesButton").removeAttribute("disabled");
}




function calculateResult() {
     result.value = eval(result.value);
}

function clearResult() {
     result.value = "";
     document.getElementById("commaButton").removeAttribute("disabled");
}

