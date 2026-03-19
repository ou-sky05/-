// 1. 回到顶部功能
const backTopBtn = document.getElementById('backTop');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backTopBtn.style.display = 'block';
    } else {
        backTopBtn.style.display = 'none';
    }
});
backTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 2. 暗黑模式切换
const darkBtn = document.getElementById('darkBtn');
darkBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    // 切换按钮文字
    if (document.body.classList.contains('dark')) {
        darkBtn.textContent = '亮色模式';
    } else {
        darkBtn.textContent = '暗黑模式';
    }
});