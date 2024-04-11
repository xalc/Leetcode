var cache = { 1: 1, 2: 2 };

var climbStairs = function (n) {
    if (n === 1) {

        return 1;
    }
    if (n === 2) {

        return 2;
    }

    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2]

    }

    return cache[n]

};
const res = climbStairs(30);
console.log(res)