class Ninja {
    constructor (nombre, salud) {
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;
    }
    sayName(){
        return this.nombre;
    }
    
    showStats(){
        const stats = this.nombre + " " +this.salud + " " + this.velocidad + " " + this.fuerza;
        return stats;
    }

    drinkSake (){
        return this.salud += 10;
        
    }
}

const ninja1 = new Ninja("Hyabusa", 20);

console.log (ninja1.sayName());
console.log(ninja1.showStats());
console.log (ninja1.drinkSake());