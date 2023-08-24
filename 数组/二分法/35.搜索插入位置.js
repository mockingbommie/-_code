/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let mid, left = 0,
        right = nums.length - 1, //左开右闭
        ans = nums.length //定位取最右
    while (left <= right) {
        //mid = ((right - left) >> 1);
        // mid = left + Math.floor((right - left) >> 1);
        mid = Math.floor((left + right) / 2)
        if (target > nums[mid]) {
            left = mid + 1
        } else {
            ans = mid
            right = mid - 1
        }
    }
    return ans
};
// @lc code=end