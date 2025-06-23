const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");



// 让"考虑考虑"按钮逃跑
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// 万一点击到了"我不愿意"按钮
noBtn.addEventListener("click", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);
  
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
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