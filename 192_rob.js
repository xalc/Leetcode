const cache = [];
var rob = function (nums) {
    const package = (i) => {
        if (i === 0) {
            cache[0] = nums[0];
            return cache[0];
        }
        if (i === 1) {
            cache[1] = nums[1] >= nums[0] ? nums[1] : nums[0];
            return cache[1];
        }


        // const select =  package(i-2) + nums[i];
        // const unselect = package(i -1);
        const select = (cache[i - 2] ? cache[i - 2] : package(i - 2)) + nums[i];
        const unselect = cache[i - 1] ? cache[i - 1] : package(i - 1);
        cache[i] = select >= unselect ? select : unselect;
        return cache[i];
    }
    return package(nums.length - 1);

};

const nums = [2, 7, 9, 3, 1];
console.log(rob(nums))