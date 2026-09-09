const sortedIds = [10, 25, 34, 45, 50, 75, 89, 100, 150];
const targetId = 75;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) {
            return `Found ${target} at index ${mid}! Took O(log n) time.`;
        }
        if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return "Not Found";
}

console.log(binarySearch(sortedIds, targetId));