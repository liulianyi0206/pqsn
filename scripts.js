// 脚本内容可以根据需要添加
document.addEventListener('DOMContentLoaded', () => {
    // 示例事件处理
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', event => {
            alert(`Navigating to ${event.target.textContent}`);
        });
    });

    // 示例自定义函数
    function showAlert(message) {
        alert(message);
    }

    // 使用自定义函数
    showAlert('欢迎来到排球少年网站！');
});
// scripts.js

let slideIndex = 0;
let images =[]; // 存储所有图片路径的数组

// 添加你希望轮播的图片路径到数组中，这里假设文件名为 1.jpg, 2.jpg, 3.jpg...
for (let i = 1; i <= 6; i++) {
    images.push(`images/${i}.jpg`);
}

function startSlideshow() {
    const container = document.getElementById('slideshow-container');
    
    // 动态创建 img 元素并添加到 slideshow-container 中
    images.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add('mySlides', 'fade');
        container.appendChild(img);
    });

    showSlides();
}

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // 每 2 秒切换一张图片
}

// 页面加载完毕时开始轮播
window.onload = function() {
    startSlideshow();
};
