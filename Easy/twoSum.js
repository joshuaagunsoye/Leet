function twoSum (nums,target) {
    for (let i = 0; i<nums.length;i++)
    {
        if (nums[i]+nums[i+1] ===  target)
        {
            return [i,i+1]
        }
        
    }

}

console.log(twoSum  ([3,3],6))
