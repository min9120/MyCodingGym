function solution(jobs){
//1. jobs 를 map 으로 각 시점에서
//let startSec =jobs[0][0];
let runningSec = 0;
let nextJob = []
let jobArry =[...jobs];

while(jobArry.length>0){
    let current = jobArry.shift();
    let startSec = current[0];
    runningSec = startSec + current[1];
    // 러닝 타임보다 현재 시작 초가 크면 그 초부터 시간 측정 
    if((startSec+current[1])<jobArry[0][0]){
        
    }
    for(let i = 0; i< jobArry.length; i++){
    if(current[1]>=jobArry[i][0]){
        nextJob.push(jobArry.shift());
    }else{
        jobs.push(jobArry.shift())
    }
}
nextJob.sort((a,b)=> a[1]-b[1]);
jobArry = nextJob.concat(jobArry);
}
console.log(jobArry)
}
solution([[0, 3], [1, 9], [2, 6]])