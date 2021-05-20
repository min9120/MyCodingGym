// 트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다.
//모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
//트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
// ※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

// 예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

function solution(bridge_length, weight, truck_weights) {
  let second = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  //bridge length 만큼 배열에 0을 넣는 것
  //Array.from({length:num}, callback) 을 통해 원하는 만큼 배열 초기화 가능

  while (bridge_length) {
    bridge.shift();
    second += 1;

    if (truck_weights.length) {
      let sum = bridge.reduce(function add(sum, curValue) {
        return sum + curValue;
      }); //이해가 잘 안되는 부분
      console.log(sum);
      if (sum + truck_weights[0] <= weight) {
        console.log(`sum + truck_weights[0] : ${sum + truck_weights[0]}`);
        bridge.push(truck_weights.shift());
      } else {
        console.log(`sum + truck_weights[0] : ${sum + truck_weights[0]}`);
        bridge.push(0);
      }
    }
  }
  return second;
}

solution(2, 10, [7, 4, 5, 6]);
