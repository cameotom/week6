function loading() {
    alert("Winter is coming...");
}

function accept() {
    document.querySelector("#cookies").remove();
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temperature"+i);
        var tempInt = parseInt(tempSpan.innerText);
        if (element.value == "C") {
            tempSpan.innerText = f2c(tempInt);
        }
        else {
            tempSpan.innerText = c2f(tempInt);
        }
    }
}

function c2f(temp) {
    return Math.round(9/5*temp+32);
}

function f2c(temp) {
    return Math.round(5/9*(temp-32));
}