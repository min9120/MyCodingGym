function solution(nums) {
  let sumArr = [];
  let primeNum = 0;

  while (nums.length) {
    let sum = 0;
    let num = nums.shift();

    for (let i = 0; i < nums.length - 1; i++) {
      for (let k = i + 1; k < nums.length; k++) {
        sum = num + nums[i];
        sum += nums[k];
        sumArr.push(sum);
      }
    }
  }

  while (sumArr.length > 0) {
    let i = sumArr.shift();
    let prime = false;
    for (let num = 2; num < i; num++) {
      if (i % num === 0) {
        prime = false;
        break;
      } else prime = true;
    }
    if (prime) primeNum++;
  }
  console.log(sumArr, primeNum);

  return primeNum;
}

console.log(solution([1, 2, 3]));
solution([1, 2, 3]);
