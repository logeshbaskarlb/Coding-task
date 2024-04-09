

function areAnagrams(str1, str2) {
    const normalizedStr1 = str1.replace(/[^\w]/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/[^\w]/g, '').toLowerCase();

    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Sort both strings and compare
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

const str1 = "listen";
const str2 = "silent";
const result = areAnagrams(str1, str2);
console.log(`"${str1}" and "${str2}" are ${result ? 'anagrams' : 'not anagrams'}.`); // Output: "listen" and "silent" are anagrams.
