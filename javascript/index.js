/**
 * Function for smooth scrolling based on anchor tag href
 * @param {anchor tag} element, ideally and anchor tag to smooth scroll
 */
function scroll(element){
    var elementToScroll = element.attr("href");
    $('html, body').animate({
        scrollTop: $(elementToScroll).offset().top - 50},
        'slow');
}

// For on click anchor tag in the footer
$("footer a").click(function(){
    scroll($(this));
});

// For on click anchor tag in the navigation
$("#fixed-nav a").click(function(){
    scroll($(this));
});

// Handle the projects click switch
$("#lst-projects li").click(function(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    $(".project-content").removeClass("display-block");
    $(".project-content").removeClass("display-none");
    $(".project-content").addClass("display-none");
    for (var i = 0; i<$(".project-content").length; i++){
        if ($($(".project-content")[i]).attr("name") == $(this).html()){
            $($(".project-content")[i]).addClass("display-block");
            return;
        }
    }
}); 

// Handle the hamburger button on click events
let menuOpen = false;
$('#fixed-nav .menu-btn').click(function(){
    var sidebar = $("#fixed-nav .reg-nav");
    if(!menuOpen) {
        $(this).addClass("open");
        sidebar.addClass("active");
    }else{
        $(this).removeClass("open");
        sidebar.removeClass("active");
    }
    menuOpen = !menuOpen;
});

// Handle the click event on the anchor tag for navigation 
// When hamburger button is enabled, on anchor click, close the hamburger button
$("#fixed-nav .reg-nav a").click(function(){
    $("#fixed-nav .reg-nav").removeClass("active")
    $("#fixed-nav .menu-btn").removeClass("open");
    menuOpen = !menuOpen;
});