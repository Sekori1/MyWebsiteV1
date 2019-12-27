var select = 1;
var max;
var delay;

$(function() {
    max = ( $("#projects").find(".card").length);
    for (var i = 0; i < max; i++) {
        $(".plan-container").append("<div class=\"point\"></div>");
    }
    update()
    
    $("#p-left").click(function() {
        if(checkDelay())selectPrevious()
    })

    $("#p-right").click(function() {
        if(checkDelay())selectNext()
    })
})

function checkDelay() {
    let time = Date.now();
    if(delay == null || time - delay > 300) {
        delay = time;
        return true;
    }
    return false;
}


function selectNext(){
    if(max > 3){
        select++;
        if(select > max )select = 1;
        update();
    }
}

function selectPrevious(){
    if(max > 3){
        select--;
        if(select < 1)select = $("#projects").find(".card").length;
        update()
    }
}


function update(){
    $(".point").removeClass("select");
    $("#projects").find(".card").each(function(index) {

        console.log($(this))
        index++;

        $(this).removeClass("hide");
        $(this).removeClass("show");
        $(this).removeClass("back");
        $(this).removeClass("left");
        $(this).removeClass("right");


        let dif =  index - select;
        if(dif < 0)dif = max - select + index;

        if( dif > (max/2) ) {
            $(this).addClass("right");
            if( dif ==  max-1) {
                $(this).addClass("back");
            }else{
                $(this).addClass("hide");
            }
        } else if( index == select ) {
            $(this).addClass("show");
        } else {
            $(this).addClass("left");
            if( dif  ==  1) {
                $(this).addClass("back");
            }else{
                $(this).addClass("hide");
            }
        } 
    })
    $(".point").slice( select-1, select ).addClass("select");
}

