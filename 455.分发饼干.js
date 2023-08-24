/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g  //小孩
 * @param {number[]} s  //饼干
 * @return {number}
 */
var findContentChildren = function (g, s) {
    //排序 按从小到大
    g = g.sort((a, b) => a - b) //升序
    s = s.sort((a, b) => a - b)
    //计数
    let result = 0
    //从后往前遍历
    let index = s.length - 1
    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            result++
            index--
        }
    }
    return result
};
// @lc code=end