AOS.init();

$(".header_menu").click(function() {
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

nav();
function nav() {
    $(".header_nav li").each(function() {
        if($(this).find("a").hasClass("active")) {
            let index = $(this).index();
            if(index => 1) {
                let preIndex = index - 1;
                $(".header_nav li").eq(preIndex).find("a").addClass("noline");
            }
        }
    })
}

$(".btn-back").click(function() {
    history.back();
})