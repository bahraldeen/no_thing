let age = document.getElementById("age");
let amount = document.getElementById("amount");
let result = document.getElementById("result");
let calc = document.getElementById("calc");

function getAge(){
    let ageValue = age.value;
    amount.innerHTML = ageValue;
    calc.onclick = function(){
        let sum = 2025 - ageValue;
        result.innerHTML = `عمرك الحالي هو ${sum} سنة تقريبا. اطال الله في عمرك.`;
    }
}
