/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
//滑动窗口
var minSubArrayLen = function (target, nums) {
    let start = 0,
        end = 0
    let sum = 0
    let ans = Infinity //无限大
    while (end < nums.length) {
        sum += nums[end]
        while (sum >= target) {
            ans = Math.min(ans, (end - start + 1))
            sum -= nums[start]
            start++
        }
        end++
    }
    return ans === Infinity ? 0 : ans
};
// @lc code=end