async function typeWriter(text, speed) {
    const el = document.getElementById("typewriter"); // 獲取要顯示文字的HTML元素
    for (let char of text) {
      el.innerHTML += char; // 將每個字符添加到HTML元素中
      await new Promise((resolve) => setTimeout(resolve, speed)); // 等待指定的時間
    }
  }

function begin() {
    typeWriter("Hello, world!", 120);
}