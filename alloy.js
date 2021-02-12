/* 
The math:
A = (G - PG) / P
P = G / (G + A)
G = PA / (1 - P)
*/

function process() {
    alloy = document.getElementById('alloy');
    grain = document.getElementById('grain');
    percent = document.getElementById('percent');    
    if (alloy.value === "") {
        g = Number(grain.value);
        p = Number(percent.value);
        if (p > 1) {
            p = p/100
        }
        a = (g - (p * g)) / p;
        alloy.value = Number(a).toFixed(3);
    } else if (grain.value === "") {
        a = Number(alloy.value);
        p = Number(percent.value);
        if (p > 1) {
            p = p/100
        }
        g = (p * a) / (1 - p);
        grain.value = Number(g).toFixed(3);
    } else if (percent.value === "") {
        a = Number(alloy.value);
        g = Number(grain.value);
        p = g / (g + a);
        percent.value = Number(p).toFixed(3);
    }    
}

function clearFields() {
    alloy = document.getElementById('alloy');
    grain = document.getElementById('grain');
    percent = document.getElementById('percent'); 
    alloy.value = "";
    grain.value = "";
    percent.value = "";
    grain.focus();
}

function pressEnter(event) {
    if (event.which === 13 || event.keyCode === 13) {
        process();
    } else {
    }
}