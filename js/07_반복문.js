/* 12345 출력 */
function check1(){
  // 조건식 자리에 num < 6 num이 1부터 1씩 증가하다가 5 이상인 순간 반복을 종료하는 반복문
  // num <= 5로 기입하면 num이 1부터 1씩 증가하다가 5 이하가 아닌 순간 반복을 종료하는 반복문
  for(let num = 1 ; num <= 5 ; num++){
    console.log(num)
  }
}

/* 1부터 10까지 1씩 증가하며 출력하기 */
function check2(){
  for(let num = 1 ; num <= 10 ; num++){
    console.log(num);
  }
}

/* 5부터 13까지 1씩 증가하며 출력하기 */
function check3(){
  for(let num = 5 ; num <= 13 ; num++){
    console.log(num);
  }
}

/* 1부터 5까지 1씩 증가하며 한줄로 출력하기 */
function check4(){
  // 결과 저장용 변수에 빈칸('string');
  let result = '';
  for(let num = 1 ; num <= 5 ; num++){
    // result = result + num;
    result += num;
  }
  console.log(result);
}

/* 1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */
function check5(){
  // 더했을 때 영향이 없는 숫자 0을 대입
  let result = 0;
  for(let num = 1 ; num <= 10 ; num++){
    result += num;
  }
  console.log(result);
}

/* 1부터 10까지 1씩 증가한 숫자들의 합을 출력하기
function check6(){
  // 더했을 때 영향이 없는 숫자 0을 대입
  // result가 아닌 sum으로 해도 됨
  let sum = 0;
  for(let num = 1 ; num <= 10 ; num++){
    sum += num;
  }
  console.log(sum);
} */

  /* 1부터 10까지 2씩 증가하며 출력하기 */
function check6(){
  // 증감식을 2씩 증가하도록 변경(복합 대입 연산자 사용)
  for(let num = 1 ; num <= 10 ; num+=2){
    console.log(num);
  }
}

  /* 3부터 30까지 3의 배수만 출력하기 */
function check7(){
  for(let num = 3 ; num <= 30 ; num+=3){
    console.log(num);
  }
}