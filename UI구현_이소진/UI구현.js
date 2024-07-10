const font1 = document.querySelector(".box1");
const font2 = document.querySelector(".box2");
const font3 = document.querySelector(".box3");
const font4 = document.querySelector(".box4");
const font5 = document.querySelector(".box5");
const font6 = document.querySelector(".box6");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", function (){
  result.style.width = `${font1.value}px`;
  result.style.height = `${font2.value}px`;
  result.style.fontSize = `${font3.value}px`;
  result.style.color = `${font4.value}`;
  result.style.backgroundColor = `${font5.value}`;
  result.innerHTML = `${font6.value}`;
  const check1 = document.querySelector("[name=check1]:checked");
  result.style.fontWeight = check1.value;
  const check2 = document.querySelector("[name=check2]:checked");
  result.style.justifyContent = check2.value;
  const check3 = document.querySelector("[name=check3]:checked");
  result.style.alignItems = check3.value;
})