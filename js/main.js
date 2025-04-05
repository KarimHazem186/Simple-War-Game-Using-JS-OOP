
function Character(name,strength,health){
    this.name = name;
    this.strength = strength;
    this.health = health;

    /*this.attackBtn = document.querySelector(`#${this.name}-attack`);
    this.healthBtn = document.querySelector(`#${this.name}-make-health`);
    this.progress = document.querySelector(`.${this.name}-health span`);
    this.alive = document.querySelector(`#${this.name}-alive`);
    */
   this.elements = new UIElements(this.name); 

}
function UIElements(name){
    this.attackBtn = document.querySelector(`#${name}-attack`);
    this.healthBtn = document.querySelector(`#${name}-make-health`);
    this.alive = document.querySelector(`#${name}-alive`);
    this.progress = document.querySelector(`.${name}-health span`);
}



Character.prototype.attack = function(opponent){
    // console.log("this",this);
    // console.log("opponent",opponent);
    /* opponent.health -= this.strength;

       opponent.progress.style.width = `${opponent.health}% `;
    */

    // console.log(opponent.health);
    if(opponent.health > 0){
        opponent.health -= this.strength;
        opponent.elements.progress.style.width = `${opponent.health}%`;
    } else {
        opponent.elements.attackBtn.remove()
        opponent.elements.healthBtn.remove()
        opponent.elements.alive.innerHTML = `${opponent.name} is died`
    }


}

Character.prototype.status = function(){
    console.log(`Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Health: ${this.health}`);
}

Character.prototype.makeHealth = function() {
    if(this.health < 100){
        this.health +=10;

        this.elements.progress.style.width = `${this.health}% `;

    }else 
     if (this.health > 100){
        this.health = 100;
        this.elements.progress.style.width = `${this.health}% `;
    }
}



let nartoo = new Character('nartoo',10,100);
let sasakii = new Character('sasakii',5,100);

// console.log(nartoo);

// nartoo.attack(sasakii); // this = nartoo; opponent = sasakii; 
// sasakii.attack(nartoo); // this = sasakii; opponent = nartoo;
// nartoo.status();
// nartoo.makeHealth();
// nartoo.status();

nartoo.elements.attackBtn.addEventListener('click', function(){
    nartoo.attack(sasakii);
})

sasakii.elements.attackBtn.addEventListener('click',function(){
    sasakii.attack(nartoo);
})

nartoo.elements.healthBtn.addEventListener('click',function(){
    nartoo.makeHealth();
})

sasakii.elements.healthBtn.addEventListener('click',function(){
    sasakii.makeHealth();
})