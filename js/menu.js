function toggleMenu() {
    $(".nav-icon").toggleClass("open");
    $("header").toggleClass("open");
    $("body").toggleClass("nav");
}


$(function() {

    $(".nav-icon").click(function() {
        $("body").scrollTop(0);
        toggleMenu();
    });

    $("a").click(function(){
        if($("body").hasClass("nav")){
            toggleMenu()
        }
    })
    
});

