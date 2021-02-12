// A = (G - PG) / P
// P = G / (G + A)
// G = PA / (1 - P)

function clearFields() {
    alloy = document.getElementById('alloy');
    grain = document.getElementById('grain');
    percent = document.getElementById('percent'); 
    alloy.value = "";
    grain.value = "";
    percent.value = "";
}

function getThird() {
    alloy = document.getElementById('alloy');
    grain = document.getElementById('grain');
    percent = document.getElementById('percent');    
    if (alloy.value === "") {
        g = Number(grain.value);
        p = Number(percent.value);
        a = (g - (p * g)) / p;
        alloy.value = Number(a).toFixed(3);
    } else if (grain.value === "") {
        a = Number(alloy.value);
        p = Number(percent.value);
        g = (p * a) / (1 - p);
        grain.value = Number(g).toFixed(3);
    } else if (percent.value === "") {
        a = Number(alloy.value);
        g = Number(grain.value);
        p = g / (g + a);
        percent.value = Number(p).toFixed(3);
    }
}