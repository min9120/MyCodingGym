function solution(progresses, speeds) {
  var answer = [];
  let days = [];
  for (let i = 0; i < progresses.length; i++) {
    let todo = 100 - progresses[i];
    let day = Math.ceil(todo / speeds[i]);
    days.push(day);
  }
  console.log(days);
  //1번 할일 : max 값이랑 count 를 초기화 한다. max는 처음에는 무조건 days의 첫번째 값부터 시작 count는 1
  //2번 할일 : max와 현재 값을 비교해서 max>current일때 count++, else 일때 max= current, 지금 까지의 count answer push
  //그리고 count 다시 1부터
  let max = days.shift();
  let count = 1;
  while (days.length) {
    let day = days.shift();
    if (max >= day) {
      count++;
    } else {
      answer.push(count);
      max = day;
      count = 1;
    }
  }
  answer.push(count);
  console.log(answer);
  return answer;
}
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
