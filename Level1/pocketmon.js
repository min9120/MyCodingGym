function solution(nums){
    var answer = 0; 
    let num =nums.length/2;
    let setArr = new Set(nums);
    const uniArr = [...setArr];
    console.log(uniArr)
    return answer;

}
solution([3, 3, 3, 2, 2, 4])