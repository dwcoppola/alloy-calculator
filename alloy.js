/* 
The math:
A = (G - PG) / P
P = G / (G + A)
G = PA / (1 - P)
*/

function processIndex() {
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

function pressEnterIndex(event) {
    if (event.which === 13 || event.keyCode === 13) {
        processIndex();
    } else {
    }
}

/* 
The Math:
NEED = ( (Target% * Total Weight) - Old Alloy Weight - New Alloy Weight ) / ( 1 - target )
*/

function processMixer() {
    targetPercent = Number(document.getElementById('target-percent').value);
    target = 1 - targetPercent;
    newPercent = Number(document.getElementById('new-percent').value);
    oldPercent = Number(document.getElementById('old-percent').value);
    newWeight = Number(document.getElementById('new-weight').value);
    oldWeight = Number(document.getElementById('old-weight').value);
    newAlloyWeight = newWeight * (1 - newPercent);
    oldAlloyWeight = oldWeight * (1 - oldPercent);
    totalWeight = newWeight + oldWeight;
    output = ((target * totalWeight) - newAlloyWeight - oldAlloyWeight) / (1 - target);
    need = document.getElementById('need');
    need.value = output.toFixed(2)
}

function clearMixerFields() {
    newWeight = document.getElementById('new-weight');
    newPercent = document.getElementById('new-percent');   
    if (newPercent > 1) {
        newPercent /= 100;
    }
    oldWeight = document.getElementById('old-weight');
    oldPercent = document.getElementById('old-percent');
    if (oldPercent > 1) {
        oldPercent /= 100;
    }
    targetPercent = document.getElementById('target-percent');
    if (targetPercent > 1) {
        targetPercent /= 100;
    }
    need = document.getElementById('need');
    newWeight.value = ""
    newPercent.value = ""
    oldWeight.value = ""
    oldPercent.value = ""
    targetPercent.value = ""
    need.value = ""
    newWeight.value = ""
}

function pressEnterMixer(event) {
    if (event.which === 13 || event.keyCode === 13) {
        processMixer();
    } else {
    }
}