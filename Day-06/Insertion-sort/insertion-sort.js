

let arr = Array.from({ length : 10 }, (_ , k) =>Math.floor(Math.random() * 100 ))

for (let i =1; i < arr.length; i++) {
    let currentElement = arr[i];
    let index = i;
    while (index > 0 && arr[index -1] > currentElement){
        arr[index]=arr[index-1];
        index--;
    }
    arr[index] = currentElement;
}