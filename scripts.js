
var generate = document.getElementById('die');
var rollDie = document.getElementById('roll');

let dieArray = [];


document.addEventListener('DOMContentLoaded', function () {
    generate.addEventListener('click', function () {
        dieArray.push(new die());
    });
});



//die constructer 
var die = function () {
    this.value = random();
    this.div = document.createElement('div')
    this.div.className = 'dice'
    this.div.innerText = this.value;
    document.body.appendChild(this.div);
    this.div.addEventListener('click', this.change.bind(this));
};
//die constructer 


function random() {
    return Math.floor(Math.random() * (7 - 0)) + 0;
}

die.prototype.change = function () {
    var randNum = random();
    this.div.innerText = randNum;
    this.value = randNum;
};



rollDie.addEventListener('click', function(){
    var arrayLength = dieArray.length;
    for (var i = 0; i < arrayLength; i++) {
        
        
        
    }
});




console.log(dieArray);