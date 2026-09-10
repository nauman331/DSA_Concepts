const numbers = [4, 2, 2, 8, 3, 3, 1, 4, 4];

function sortByFrequency(arr) {
    const frequencyMap = {};
    for (let num of arr) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }
    arr.sort((a, b) => {
        const freqA = frequencyMap[a];
        const freqB = frequencyMap[b];
        if (freqA !== freqB) {
            return freqB - freqA;
        }
        else {
            return a - b;
        }
    })
    return arr;
}

console.log(sortByFrequency(numbers));