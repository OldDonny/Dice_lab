
var generate = document.getElementById('die');
var rollDie = document.getElementById('roll');
var sum = document.getElementById('sum');
let dieArray = [];

//push new die into array
document.addEventListener('DOMContentLoaded', function () {
    generate.addEventListener('click', function () {
        dieArray.push(new die());
    });
});
//push new die into array


//die constructer 
var die = function () {
    this.value = random();
    this.div = document.createElement('div')
    this.div.className = 'dice'
    this.div.innerText = this.value;
    document.body.appendChild(this.div);
    this.div.addEventListener('click', this.change.bind(this));
    this.div.addEventListener('dblclick', this.removeDie.bind(this));
};
//die constructer 


//prototype for on click die flip
die.prototype.change = function () {
    var randNum = random();
    this.div.innerText = randNum;
    this.value = randNum;
};
//prototype for on click die flip

//prototype remove
die.prototype.removeDie = function () {
    var current = dieArray.indexOf(this);
    dieArray.splice(current, 1);
    this.div.remove();
};
//prototype remove

//random die
function random() {
    return Math.floor(Math.random() * (6 - 0)) + 1;
}
//random die


//roll die button and loop
rollDie.addEventListener('click', function () {
    var arrayLength = dieArray.length;
    for (var i = 0; i < arrayLength; i++) {
        var dieNum = dieArray[i];
        dieNum.value = random();
        dieNum.div.innerText = dieNum.value;
    }
});
//roll die button and loop

//sum all dice
sum.addEventListener('click', function () {
    var total = dieArray.reduce(function (acc, curr) {
        return acc + curr.value;
    }, 0); alert(`total of all die on screen is ${total}`)
});
//sum all dice
