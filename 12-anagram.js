const string1 = "listen";
const string2 = "silent";

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const charMap = {};
    for (let char of str1) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    for (let char of str2) {
        if (!charMap[char]) {
            return false;
        }
        charMap[char]--;
    }
    return true;
}

console.log(isAnagram(string1, string2));