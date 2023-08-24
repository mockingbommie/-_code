/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    //双指针
    let slowIndex = 0
    for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
        if (nums[slowIndex] != nums[fastIndex]) {
            nums[++slowIndex] = nums[fastIndex]
        }
    }
    return nums
};
console.log(removeDuplicates([1, 1, 2]))
// @lc code=end