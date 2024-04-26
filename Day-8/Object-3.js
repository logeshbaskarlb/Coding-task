// Write a function to deep clone a JSON object, i.e., create a new JSON object with the same structure and values as the original object, but not referencing the same memory.


function compareObjs(obj1,obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for (let key in obj1){
        if(typeof obj1[key] === 'object' && obj2[key] === "object"){
            if(!compareObjs(obj1[key],obj2[key])){
                return false;
            }
    }else if(obj1[ky] !== obj2[key]){
        return false;
}
}
return true
}


function cloneObject(obj) {
    let clone = {};
    for (let key in obj){
        if(typeof obj[key] === "object" ){
            clone[key] = cloneObject(obj[key]);
        }else {
            clone[key] = obj[key]
        }
    }  
    return clone
}



const obj = {
    name : "Logesh",
    age : 21,
    address : {
        doorNo : 29 ,
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
const clonedObj = cloneObject(obj);
console.log(compareObjs(obj, clonedObj))
clonedObj.address.doorNo = 29;
console.log(compareObjs(obj, clonedObj))