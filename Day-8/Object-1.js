// Create a JSON object representing a person with properties like name, age, and address. Add methods to the object to calculate the person's birth year and full address.

const obj = {
    name : "Logesh",
    age : 21,
    address : {
        doorNo : "29 A/9",
        streetName  : "Sekkadi street",
        area : " Rasipuram",
        landmark : "Opp. BSNL office",
        city : "Namakkal",
        state : "TamilNadu",
        pin : 637408
    },
    getBirthYear : function (){
        return new Date().getFullYear() - this.age;
    },
    getFullAddress : function (){
        return `${this.address.doorNo}, ${this.address.streetName}
        ${this.address.area}, ${this.address.landmark}, 
        ${this.address.city}, ${this.address.state}, 
        ${this.address.pin}`
    }
}

console.log(obj.getBirthYear());
console.log(obj.getFullAddress());