
class Parents{
    constructor(){
        this.fatherName = "Schowargneger";
    }
}


class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

class parents2{
    constructor(){
        this.fatherName = "Dr Abdul Mannan";
    }
}

class child2 extends parents2{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}


class Parents3{
    constructor(){
        this.fatherName = "Dr Abdul Mannan";
    }
}

class Child3 extends Parents3{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName2(){
        return this.name + " " + this.fatherName;
    }
}
const baby3 = new child2('Rejaul Karim');
const baby = new Child('Arnold');
const baby2 = new Child('Tom');

// console.log(baby.getFullName());
// console.log(baby2.getFullName());

console.log(baby3.getFullName());