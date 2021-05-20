function solution(priorities, location) {
  let answer = 0;

  let count = 0;
  let myDoc = location;
  while (priorities.length > 0) {
    var front = priorities.shift();
    if (priorities.filter((e) => e > front).length > 0) {
      priorities.push(front);
    } else {
      count++;
      if (myDoc == 0) {
        return (answer = count);
      }
    }
    myDoc--;
    if (myDoc === -1) {
      myDoc = priorities.length - 1;
    }
  }
  return answer;
}
solution([6, 8, 7, 9], 2);
