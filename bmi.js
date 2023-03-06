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
    if(Iname.value == 'ujjwal'){
    print.innerText = ` This is only for humans`;
    health.innerText = `khu khu kr krkr rkr krkr krk`;
    return
    }
    if(Iname.value === ""){
        alert('enter a valid name');
    // }
    // if(Iweight.value === ""){
    //     alert('enter valid weight');
    // }
    // if(Iheight.value === ""){
    //     alert('enter valid height');
    // }
    h = Iheight.value/100;
    let bmi = (Iweight.value/(h*h)).toFixed(2);
    if(bmi < 18.50){
        bmiInt = "underweight";
    }
    if(bmi > 18.50 && bmi < 24.90 ){
        bmiInt = "normal weight";
    }
    if(bmi >= 25.00 && bmi <= 29.9 ){
        bmiInt = "overweight";
    }
    if(bmi >= 30.00 && bmi <= 35.00 ){
        bmiInt = "obese";
    }
    if(bmi > 35.00){
        bmiInt = "morbid obesity";
    }
  
    
    print.innerText = `${Iname.value} your bmi is ${bmi}`;
    health.innerText = `you are ${bmiInt}`;
    
});

