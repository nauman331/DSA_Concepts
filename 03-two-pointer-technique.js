const productPrices = [10, 20, 35, 50, 65, 80, 120];
const targetVoucher = 100;

function findExactPair(prices, target) {
    let left = 0;
    let right = productPrices.length - 1;
    while (left < right) {
        const currentTotal = productPrices[left] + productPrices[right];
        if (currentTotal === target) {
            return `Match found! Product 1: $${prices[left]}, Product 2: $${prices[right]}`;
        }
        else if (currentTotal > target) {
            right--;
        }
        else if (currentTotal < target) {
            left++;
        }
    }
    return "No exact match found for the voucher.";
}

console.log(findExactPair(productPrices, targetVoucher));