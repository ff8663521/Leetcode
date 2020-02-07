/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i =0;i<nums.length-1;i++){
        let frist = nums[i];
        for(let j=i+1;j<nums.length;j++){
            let sceond = nums[j];
            if(frist+sceond == target){
                return [i,j]
            }
        }
    }
};
//124 ms	34.3 MB

var twoSum = function(nums, target) {
    let dic =  {};
    for(let i = 0; i<nums.length;i++){
        let ti = nums[i];
        let temp = dic[ti];
        if(temp){
            temp.push(i)
        }else{
            temp = [i];
        }
        dic[ti] = temp;
    }

    for(let i = 0; i<nums.length;i++){
        let answer = target - nums[i];
        if(dic[answer]){
            let  index = dic[answer][0];
            if(index == i){
                if(dic[answer].length>1){
                    return [i, dic[answer][1]]
                }
            }else{
                return [i,index]
            }
        }

    }
};
//72 ms	37 MB

var twoSum = function(nums, target) {
    let dic =  {};
    for(let i = 0; i<nums.length;i++){
        let ti = nums[i];
        let temp = dic[ti];
        if(temp){
            temp.push(i)
        }else{
            temp = [i];
        }
        dic[ti] = temp;

        let answer = target - nums[i];
        if(dic[answer]){
            let  index = dic[answer][0];
            if(index == i){
                if(dic[answer].length>1){
                    return [i, dic[answer][1]]
                }
            }else{
                return [i,index]
            }
        }

    }

    
};
//64 ms	36.4 MB

let result = twoSum([3,3],6);
console.log(result);