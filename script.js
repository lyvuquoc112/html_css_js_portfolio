function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    // Thêm hoặc xóa lớp "open" để hiển thị hoặc ẩn menu
}