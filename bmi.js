const btn = document.getElementById('btn');
const print = document.querySelector('.print');
const health = document.querySelector('.health');
const Iname = document.querySelector('#Iname');
const Iheight = document.querySelector('#Iheight');
const Iweight = document.getElementById('Iweight');
// let bmi = 80;
let bmiInt = "helthy";
// let weight = Iweight.value + Iheight.value;
// console.log(weight);
// console.log(Iweight);
// console.log(Iweight.value);



btn.addEventListener('click' ,function() {
    if(Iname.value == 'ujjwal' ){
    print.innerText = ` This is only for humans`;
    health.innerText = `khu khu kr krkr rkr krkr krk`;
    return
    }
    if(Iname.value === ""){
        alert('enter a valid name');
    }else
    if(Iheight.value === ""){
        alert('enter valid height');
    }else
    if(Iweight.value === ""){
        alert('enter valid weight');
    }
    h = Iheight.value/100;
    let bmi = (Iweight.value/(h*h)).toFixed(2);
    if(bmi < 18.50){
        bmiInt = "underweight";
        health.style.backgroundColor = "rgb(146, 146, 197)";
    }
    if(bmi > 18.50 && bmi < 24.90 ){
        bmiInt = "normal weight";
        health.style.backgroundColor = "rgb(69, 206, 81)";
        }
    if(bmi >= 25.00 && bmi <= 29.9 ){
        bmiInt = "overweight";
        health.style.backgroundColor = "rgb(199, 113, 113)";
    }
    if(bmi >= 30.00 && bmi <= 35.00 ){
        bmiInt = "obese";
        health.style.backgroundColor = "rgb(213, 33, 33)";
    }
    if(bmi > 35.00){
        bmiInt = "morbid obesity";
        health.style.backgroundColor = "rgb(38, 23, 23)";
    }
  
    
    print.innerText = `${Iname.value} your bmi is ${bmi}`;
    health.innerText = `${bmiInt}`;
    document.querySelector(".display").style.display = "block";
});

