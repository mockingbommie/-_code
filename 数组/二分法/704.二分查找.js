/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 * 有序数组
 * 无重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//左闭右闭
// var search = function (nums, target) {
//     let mid, left = 0,
//         right = nums.length - 1; //右边的取值要包含在内
//     while (left <= right) { //右边值能取到 要包含在循环内
//         mid = left + ((right - left) >> 1); //中间位置的下标
//         if (nums[mid] > target) {
//             right = mid - 1
//         } else if (nums[mid] < target) {
//             left = mid + 1
//         } else {
//             return mid
//         }
//     }
//     return -1
// };
//左闭右开
var search = function (nums, target) {
    let mid, left = 0,
        right = nums.length; //右边的取值不包含在内 可以等于长度
    while (left < right) { //右边值不能取到 不用等于
        // mid = left + ((right - left) >> 1); //中间位置的下标
        mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid //右边值取不到 不用减1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
};
// @lc code=end