const km = document.getElementById("km");
const dollars = document.getElementById("dollars");
const times = document.getElementById("times");
const weeks = document.getElementById("weeks");
const kg = document.getElementById("kg");
const add = document.getElementById("add-to-cart");
const luxury = document.getElementById("luxury");
const standart = document.getElementById("standart");
const cheap = document.getElementById("cheap");

function changeValues(){
    if (document.getElementById("luxury").checked){
        km.innerHTML = "110";
        kg.innerHTML = "1500";
        weeks.innerHTML = "14";
        times.innerHTML = ">6";
        dollars.innerHTML = "15000";
    } else if (document.getElementById("standart").checked){
        km.innerHTML = "110";
        kg.innerHTML = "1000";
        weeks.innerHTML = "10";
        times.innerHTML = "5";
        dollars.innerHTML = "10000";
    } else{
        km.innerHTML = "110";
        kg.innerHTML = "750";
        weeks.innerHTML = "8";
        times.innerHTML = "3";
        dollars.innerHTML = "7500";
    }
}

document.querySelector('.radio-button').addEventListener('click', changeValues);