$(function () {
    $(".sidePanel>label:first").next().slideToggle("slow");
    $(".sidePanel>label").click(function () {
        $(this).next().stop(true, true)
        $(".sidePanel>label").next().slideUp("slow");
        $(this).next().slideToggle("slow");
        
    });
})