const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(nums, target) {
    const numMap = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const neededNum = target - currentNum;

        if (numMap[neededNum] !== undefined) {
            return [numMap[neededNum], i];
        }
        numMap[currentNum] = i;
    }
    return [];
}

console.log(twoSum(nums, target));