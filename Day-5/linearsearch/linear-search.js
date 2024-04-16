


let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]
let searchValue = 8;
let index = -1

for(let i=0;i<arr.length;i++){
    if(arr[i] === searchValue){
        index = i;
        break
    }
}

console.log(index);