/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
//双指针
var sortedSquares = function (nums) {
    let n = nums.length
    let res = new Array(n).fill(0)
    let i = 0,
        j = n - 1,
        k = n - 1
    while (i <= j) {
        if (nums[i] * nums[i] < nums[j] * nums[j]) {
            res[k--] = nums[j] * nums[j];
            j--;
        } else {
            res[k--] = nums[i] * nums[i];
            i++;
        }
    }
    return res
};
// //暴力
// var sortedSquares = function (nums) {
//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = nums[i] * nums[i]
//     }
//     return nums.sort((a, b) => a - b)
// };
// @lc code=end