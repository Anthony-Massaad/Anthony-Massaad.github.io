const PROJECT_SELECTED_TXT = ".selected";

// function for scrolling when nav
function scroll(element){
    var elementToScroll = element.attr("href");
    $('html, body').animate({
        scrollTop: $(elementToScroll).offset().top - 50},
        'slow');
}

$("footer .arrow-up a").click(function(){
    scroll($(this));
});

$("#fixed-nav a").click(function(){
    scroll($(this));
});

// Handle the projects click switch
$("#lst-projects li").click(function(){
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    var divText = PROJECTS[$(this).html()];
    $("#project-content").html(divText);
}); 

let menuOpen = false;
$('#fixed-nav .menu-btn').click(function(){
    var sidebar = $("#fixed-nav .sidebar");
    if(!menuOpen) {
        $(this).addClass("open");
        sidebar.addClass("active");
    }else{
        $(this).removeClass("open");
        sidebar.removeClass("active");
    }
    menuOpen = !menuOpen;
});

$("#fixed-nav .sidebar a").click(function(){
    $("#fixed-nav .sidebar").removeClass("active")
    $("#fixed-nav .menu-btn").removeClass("open");
    menuOpen = !menuOpen;
});