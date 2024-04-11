
const cache = {};
var fib = function (n) {
    if (n == 1 || n === 2) {
        return 1;
    }
    if (cache[n]) {
        return cache[n]
    } else
        cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
};
console.log(fib(100));
