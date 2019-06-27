/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // if(!nums) return [];
    
    // var result = [];
    // var window = [];
    // var index = 0;

    // while(index < nums.length) {
    //     // point 1
    //     while(window.length && nums[index] > nums[window[window.length -1]]) {
    //         window.splice(window.length -1,1);
    //     }
    //     window.push(index);
    //     // point 2
    //     if(index - window[0] === k) window.shift();
    //     // point 3
    //     if(index >= k - 1) result.push(nums[window[0]]);
    //     index ++;
    // }
    // return result;
    
    
    // if(!nums || !k) return [];

    // var result = [];
    // for (let i = k - 1; i < nums.length; i++) {
    //     result.push(Math.max(...nums.slice(i - k + 1, i + 1)));
    // }
    // return result;
};

console.log(maxSlidingWindow([1,3,1,2,0,5],3));
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));