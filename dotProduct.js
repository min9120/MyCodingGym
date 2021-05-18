function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  console.log(answer);
  return answer;
}
solution([1, 2, 3, 4], [-3, -1, 0, 2]);

function otherSolution(a, b) {
  let answer = a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
  console.log(answer);
  return answer;
}
otherSolution([1, 2, 3, 4], [-3, -1, 0, 2]);
