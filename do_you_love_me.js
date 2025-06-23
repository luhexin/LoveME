const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const questionText = document.querySelector(".question");

// 让"考虑考虑"按钮逃跑
noBtn.addEventListener("mouseover", () => {
  // const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  // const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  
  // noBtn.style.left = `${newX}px`;
  // noBtn.style.top = `${newY}px`;
});

let resetTimeoutId = null; // 用来保存上一次的定时器 ID
// 万一点击到了"我不愿意"按钮
noBtn.addEventListener("click", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
  
  if (resetTimeoutId) { // 先清除旧的定时器（如果有）
    clearTimeout(resetTimeoutId);
  }
  questionText.textContent = "没点到😏";
  // 设置新的定时器，并保存 ID
  resetTimeoutId = setTimeout(() => {
    questionText.textContent = "Do you love me?";
    resetTimeoutId = null; // 定时器结束后清空 ID
  }, 1500);
});


// 点击"我愿意"按钮
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    gifResult.currentTime = 0; // 从头播放
    gifResult.play();
  }, 3000);
});


// 移动端适配
function checkMobile() {
  if (window.innerWidth <= 768) {
    document.querySelector('.question').style.fontSize = '2rem';
    document.querySelector('.btn').style.fontSize = '1rem';
  }
}

window.addEventListener('resize', checkMobile);
checkMobile();