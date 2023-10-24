/**
 * @param {number[][]} triangle
 * @return {number}
 */

/**
 * 4 1 8 3
 * 6 5 7
 * 3 4
 * 2
 */
var minimumTotal = function(triangle) {
    // 역삼각형으로 두고 bottom -> up으로 계산
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
        }
    }

    return triangle[0][0]
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));