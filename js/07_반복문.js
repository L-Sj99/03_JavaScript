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

/* if + for */
/* 1부터 30/가지 4의 배수만 출력하고, 합계도 구하기 */
function check8() {
  // 합계 저장용 변수
  let sum = 0; 
  for (let num = 1; num <= 20; num++) {
    // num이 4의 배수인 경우
    if (num % 4 === 0){
      console.log(num);
      // 합계 누적
      sum += num;
    }
    console.log("합계 : ", sum);
  }
}

/* 입력받은 범위 내 지정된 배수 출력 / 합계 구하기 */
function check9(){
  // 해당 기능(함수) 수행에 필요한 요소들 모두 얻어오기
  const start = document.getElementById("start9");
  const end = document.getElementById("end9");
  const multiple = document.getElementById("multiple9");
  
  // input 요소에 작성된 값을 얻어와 숫자로 변환해서 저장
  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multiple.value);

  // 합계 저장용 변수
  let sum = 0;

  // 입력된 값의 범위 만큼 반복
  for(let num = s ; num <= e ; num++){
    // 지정된 배수(m)가 맞을 경우
    if(num % m === 0){
      console.log(num);
      sum += num;
    }
  }
  console.log("합계 : ", sum);
}

/* 입력 받은 단(2~9)의 구구단 출력하기 */
function check10(){
  // 단이 입력 되는 요소 얻어오기
  const input = document.getElementById("dan10");

  // 단이 입력되지 않은 경우
  if(input.value.length === 0){
    alert("단을 입력해주세요.");
    // 합수를 "즉시 종료"하고 호출한 곳으로 돌아감
    return;
  }
  // 단이 2~9 사이가 아닌 경우
  const dan = Number(input.value);
  if(dan < 2 || dan > 9 ){
    alert("2~9 사이 숫자를 입력해주세요.");
    return;
  }
  // 구구단 출력
  for(let num = 1 ; num <= 9 ; num++){
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}

/* 연습 문제 */
function change1(){
  const input = document.getElementById("ab");
  if(input.value.length === 0){
    alert("연습문제 단 입니다.");
    return;
  }
  const ab = Number(input.value);
  if(ab < 2 || ab > 20){
    alert("2~20사이 숫자를 입력해주세요.");
    return;
  }
  for(let num = 1 ; num <= 20 ; num++){
    console.log(`${ab} X ${num} = ${ab*num}`);
  }
}

/* 10부터 1까지 1씩 감소하며 출력하기 */
function check11(){
  for(let num = 10 ; num > 0 ; num--){
    console.log(num);
  }
}



/* 입력 받은 단 거꾸로 출력하기 */
function check12(){
  const input = document.getElementById("dan12");
  if(input.value.length === 0){
    alert("단을 입력해주세요.");
    return;
  }
  const dan = Number(input.value);
  if(dan < 2 || dan > 9){
    alert("2와 9 사이의 숫자를 입력해주세요.")
    return;
  }
  for(let num = 9 ; num >- 1 ; num--){
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}

/* 특정 배수마다 지정된 모양으로 출력하기 */
function check13(){

  // 기능 수행에 필요한 요소 모두 얻어오기
  const input = document.getElementById("input13");
  const output = document.getElementById("output13");
  const result = document.getElementById("result13");

  // 배수
  const multiple = Number(input.value);

  // 출력 모양
  const shape = output.value;

  //출력될 문자열을 저장할 변수
  let str = '';

  // 1 ~ 20, 1씩 증가하는 반복문
  for(let num = 1 ; num <= 20 ; num++){

    // 현재 반복되는 숫자가 miltiple의 배수인 경우
    if(num % multiple === 0){
      // console.log(shape);
      str += `'${shape} '`;
    } //배수가 아니면 현재 반복 숫자 출력
    else{
      // console.log(num);
      str += `${num} `;
    }
    // num === 10 인 경우 줄 변경 <br> 추가
    // 한줄ㅇ니 경우 {} 생략 가능
    if(num ===10) str += "<br>";
  }
  // 화면에 결과 출력 (HTML 태그 해석)
  result.innerHTML = str;
}

/* 다음 모양 출력하기 
1234 
1234
1234
*/
function check14(){
  // 행은 3번 반복 -> 1행마다 4번 반복
  // 3행 반복
  for(let row = 1 ; row <= 3 ; row++){
    // 한 행의 출력될 문자열을 저장할 변수
    let str = ``;

    // 1행 마다 4번 반복
    for(let col = 1 ; col <=4 ; col++){
      str += col;
    }
    // 안쪽 for문 반복 결과를 출력
    console.log(str);
    console.log("--------");

  }
}

/* 다음 모양 출력하기 
01234
01234
01234
01234
*/
function check15(){
  for(let row = 0 ; row < 4 ; row++){
    let str = ``;
    for(let col = 0 ; col < 5 ; col++){
      //  01234 -> +1
      str += col + 1;
    }
    console.log(str);
  }
}

/* 다음 모양 출력하기 
654321
654321
654321
*/
function check16(){
  for(let row = 0 ; row < 3 ; row++){
    let str = ``;
    for(let col = 6 ; col >= 1 ; col--){
      str += col;
    }
    console.log(str);
    console.log("-----------");
  }
}

/* 다음 모양 출력하기 
1
12
123
1234
*/
/* 우연하게 찾은 다른 방법
function check17(){
  for(let row = 0 ; row < 4 ; row++){
    let str = ``;
    for(let col = 0 ; col < 4 ; col++){
      str += col + 1;
      console.log(str);
    }
  }
} 
*/
function check17(){
  for(let row = 0 ; row < 4 ; row++){
    let str = ``;
    for(let col = 0 ; col <= row ; col++){
      str += col + 1;
    }
    console.log(str);
  }
}

/* 다음 모양 출력하기 
*
**
***
****
*/
function check18(){
  for(let row = 1 ; row <= 4 ; row++){
    let str = ``;
    for(let col = 1 ; col <= row ; col++){
      str += '*';
    }
    console.log(str);
  }
}

/* 다음 모양 출력하기 
12345
1234
123
12
1
*/
function check19(){
  for(let row = 5 ; row >= 1 ; row--){
    let str = ``;
    for(let col = 1 ; col <= row ; col++){
      str += col;
    }
    console.log(str);
  }
}

/* 1부터 30 사이의 정수 중 4배수의 개수 구하기 */
function check20(){
  // 4의 배수를 세기 위한 변수
  let count = 0;
  for(let num = 1 ; num <= 30 ; num++){
    // 4의 배수인 경우
    if(num % 4 === 0){
      // count 1 증가
      count++;
    }
  }
  alert(`count : ${count}`);
}

/* 1부터 100 사이의 정수 중 입력받은 값의 배수가 몇개인지 구하기 */
function check21(){
  const input = document.getElementById("input21");
  const multiple = Number(input.value);
  let count = 0;
  for(let num = 1 ; num <= 100 ; num++){
    // 입력 받은 수의 배수인 경우
    if(num % multiple === 0 ){
      count++;
    }
  }
  alert(`cont : ${count}`);
}

/* count를 이용해 다음 모양 출력하기 */
/* 
1 2 3 4 
5 6 7 8 
9 10 11 12
*/
function check22() {
  let count = 1;
  for (let row = 1; row <= 3; row++) {
    let str = ``;
    for (let col = 1; col <= 4; col++) {
/*       str += count; // count값 대입하기
      count++; */ // count 1 증가
      str += count++;
    }
    console.log(str);
  }
}

/* 0이 입력될 때 까지 입력된 값 누적하기 */
function check23(){
  // 누적용 변수
  let sum = 0;
  let value;
  // 입력된 숫자가 0이 아니면 반복
  while( (value=Number(prompt("숫자 입력"))) !=0 ){
    //누적
    sum += value;
  }
  alert(`합계: ${sum}`);
}

/* 메뉴 주문하기(while + count + switch + if) */
function check24(){
  // 메뉴 가격을 저장한 변수 선언
  const bap = 4000;
  const ra = 4500;
  const don = 9000;

  // 주문 개수 카운트
  let bapcount = 0; // 김밥 주문 개수 카운트하는 변수
  let racount = 0; // 라면 주문 개수 카운트하는 변수
  let doncount = 0; // 돈까스 주문 개수 카운트하는 변수
  
  // (선언만 한 경우 undefined상태) prompt에 입력된 값을 저장할 변수
  let input;

  // input이 undefined이기 때문에 while문 첫 반복은 무조건 수행됨
  // input이 null이 아니면 반복
  while(input !== null){
    // prompt -> 확인 : 작성한 값 반환
    // prompt -> 취소 : null -> 취소 선택 시 while문 다음 반복 수행 X
    input = prompt("메뉴 번호 입력");

    // input 값에 따라서 알맞는 case 수행
    switch(input){
      case '1' : bapcount++; break;
      case '2' : racount++; break;
      case '3' : doncount++; break;
      case null : alert("주문 완료"); break;
      default : alert("메뉴에 작성된 번호만 입력해 주세요.");
    }
  } // while end
  // 화면에 출력될 html 코드를 저장할 변수
  let html = '';
  if(bapcount > 0){
    html += `<li>김밥(${bapcount}개) : ${bapcount * bap}원</li>`;
  }
  if(racount > 0){
    html += `<li>라면(${racount}개) : ${racount * ra}원</li>`;
  }
  if(doncount > 0){
    html += `<li>돈까스(${doncount}개) : ${doncount * don}원</li>`;
  }
  // 주문한 메뉴 합계 저장
  const sum = (bapcount * bap) + (racount * ra) + (doncount * don);
  html +=`<li>합계 : ${sum}원</li>`;

  // id가 "result24"인 요소에 내용으로 html 변수 값 추가 + HTML 태그 해석
  document.getElementById("result24").innerHTML = html;
}