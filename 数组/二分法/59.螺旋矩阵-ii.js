/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let loop = Math.floor(n / 2)
    let mid = Math.floor(n / 2)
    let startX = startY = 0
    let count = 1
    let offset = 1
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
    while (loop--) {
        let i = startX,
            j = startY
        //上行 从左到右 左闭右开
        for (; j < startY + n - offset; j++) {
            res[i][j] = count++
        }
        //右列 从上到下 左闭右开
        for (; i < startX + n - offset; i++) {
            res[i][j] = count++
        }
        //下行 从右到左 左闭右开
        for (; j > startY; j--) {
            res[i][j] = count++
        }
        //  左列 从下到上 左闭右开
        for (; i > startX; i--) {
            res[i][j] = count++
        }
        startX++;
        startY++;
        offset += 2; //  为什么是2 因为前面加1了 所以后面要减2
    }
    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2) {
        res[mid][mid] = count
    }
    return res
};
// @lc code=end