// Implement a function to flatten a nested JSON object, i.e., convert it into a flat JSON object where each key is a dot-separated path to a leaf node in the original object.


function flatten(obj,parentkey = "" ) {
    let flatten = {};
    for (let key in obj) {
        let newkey = parentkey ? parentkey + "." + key : key;
        if(typeof obj[key] === "object"){
            flatten = {...flatten , ...flatten(obj[key], newkey)}
        }else{
            flatten[newkey] = obj[key]
        }
    }
return flatten
}

const obj = {
    "level1": {
        "key1": "value1",
        "key2": {
            "level2_key1": "value2",
            "level2_key2": {
                "level3_key1": "value3",
                "level3_key2": {
                    "level4_key1": "value4"
                }
            }
        }
    }
}
console.log(flatten(obj));
const expAns = {
    "level1.key1": "value1",
    "level1.key2.level2_key1": "value2",
    "level1.key2.level2_key2.level3_key1": "value3",
    "level1.key2.level2_key2.level3_key2.level4_key1": "value4"
}