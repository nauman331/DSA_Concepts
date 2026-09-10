const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6];

function mergeSortDescending(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftHalf = mergeSortDescending(arr.slice(0, mid));
    const rightHalf = mergeSortDescending(arr.slice(mid));

    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSortDescending(unsortedArray));