function areAnagrams(str1,str2) {
    
    const normalizedStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

    if(normalizedStr1.length !== normalizedStr2.length){
        return false;
    }

    const freMap1 = {};
    const freMap2 = {};

    for(let char of normalizedStr1){
        freMap1[char] = (freMap1[char] || 0) + 1;
    }
    for(let char of normalizedStr2){
        freMap2[char] = (freMap2[char] || 0) + 1;
    }

    for (let char in frequencyMap1) {
        if (frequencyMap1[char] !== frequencyMap2[char]) {
            return false;
        }
    }
    return true;
    
}

const str1 = "listen";
const str2 = "silent";
const result = areAnagrams(str1, str2);
console.log(`"${str1}" and "${str2}" are ${result ? 'anagrams' : 'not anagrams'}.`);