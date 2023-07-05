// ####################### 밤낮버튼 #######################
const nightButton = document.getElementById("nightButton");
const dayButton = document.getElementById("dayButton");
const body = document.body;
const links = document.querySelectorAll(".header-inner");
const pElement = document.querySelector("#contact p");
const animatedTitles = document.querySelectorAll(".animated-title");

// 초기 스타일 설정 - 낮
body.style.backgroundImage = 'url("./images/noise_wh.jpg")';
body.style.color = "black";
pElement.classList.remove("clicked");
animatedTitles.forEach((title) => title.classList.add("clicked"));

// 링크 초기 색상 설정 - 낮
links.forEach((link) => (link.style.color = "black"));

// 밤 버튼 클릭 시 스타일 변경
nightButton.addEventListener("click", function () {
  body.style.backgroundImage = 'url("./images/noise.jpg")';
  body.style.color = "white";
  pElement.classList.add("clicked");
  animatedTitles.forEach((title) => {
    title.classList.remove("day");
    title.classList.add("night");
  });

  // 링크 글자 색상 변경
  links.forEach((link) => (link.style.color = "white"));
});

// 낮 버튼 클릭 시 스타일 변경
dayButton.addEventListener("click", function () {
  body.style.backgroundImage = 'url("./images/noise_wh.jpg")';
  body.style.color = "black";
  pElement.classList.remove("clicked");
  animatedTitles.forEach((title) => {
    title.classList.remove("night");
    title.classList.add("day");
  });

  // 링크 글자 색상 변경
  links.forEach((link) => (link.style.color = "black"));
});

// 스크롤 이벤트 핸들러
window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // 스크롤 위치에 따라 버튼의 클릭 가능 여부를 제어
  if (scrollPosition > windowHeight) {
    nightButton.classList.add("scrollable");
    dayButton.classList.add("scrollable");
  } else {
    nightButton.classList.remove("scrollable");
    dayButton.classList.remove("scrollable");
  }
});

// ####################### skills 텍스트 애니메이션 #######################
function startAnimation(element) {
  element.classList.add("marquee");
}

function stopAnimation(element) {
  element.classList.remove("marquee");
}

function showDescription(element) {
  const descElement = element.querySelector(".skill-desc");
  descElement.style.display = "block";
}

const textElements = document.querySelectorAll(".text");
textElements.forEach((element) => {
  element.addEventListener("mouseover", () => startAnimation(element));
  element.addEventListener("mouseout", () => stopAnimation(element));
  element.addEventListener("click", () => showDescription(element));
});
