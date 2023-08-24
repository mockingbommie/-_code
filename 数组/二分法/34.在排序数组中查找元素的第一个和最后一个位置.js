/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let ans = [-1, -1]
    let n = nums.length
    if (n == 0) return ans
    let mid, left = 0,
        right = n - 1
    while (left < right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] >= target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    if (nums[right] != target) return ans
    ans[0] = right
    left = 0, right = nums.length - 1
    while (left < right) {
        mid = Math.floor((left + right + 1) / 2)
        if (nums[mid] <= target) {
            left = mid
        } else {
            right = mid - 1
        }
    }
    ans[1] = right
    return ans
}
// console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
// @lc code=end