// 汉堡菜单交互功能
$(document).ready(function() {
    // 获取菜单相关元素
    const mobileMenuBtn = $('.mobile-menu-btn');
    const mobileMenu = $('.mobile-menu');
    const mobileNavLinks = $('.mobile-nav a');
    
    // 点击汉堡菜单按钮或图标切换菜单显示/隐藏
    mobileMenuBtn.on('click', function() {
        mobileMenu.toggleClass('open');
        mobileMenuBtn.find('i').toggleClass('fa-bars fa-times');
    });
    
    // 也为图标本身添加点击事件处理
    mobileMenuBtn.find('i').on('click', function(event) {
        event.stopPropagation(); // 阻止事件冒泡
        mobileMenu.toggleClass('open');
        $(this).toggleClass('fa-bars fa-times');
    });
    
    // 点击移动菜单中的链接后关闭菜单
    mobileNavLinks.on('click', function() {
        mobileMenu.removeClass('open');
        mobileMenuBtn.find('i').removeClass('fa-times').addClass('fa-bars');
    });
    
    // 点击菜单外部区域关闭菜单
    $(document).on('click', function(event) {
        if (!mobileMenuBtn.is(event.target) && !mobileMenu.is(event.target) && mobileMenu.has(event.target).length === 0) {
            mobileMenu.removeClass('open');
            mobileMenuBtn.find('i').removeClass('fa-times').addClass('fa-bars');
        }
    });
    
    // 同步搜索按钮功能
    $('#mobile-search-button').on('click', function() {
        $('#search-button').click();
    });
});