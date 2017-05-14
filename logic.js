
let aInp = document.getElementById('a');
let bInp = document.getElementById('b');
let cInp = document.getElementById('c');
let res = document.getElementById('res');
function calculate() {
    let a = parseInt(aInp.value);
    let b = parseInt(bInp.value);
    let c = parseInt(cInp.value);
    res.innerText = b * b - 4 * a * c;
    if (isNaN(res.innerText)) {
        res.innerText = '';
    }
}
document.getElementById('calcbutten').onclick = calculate;

