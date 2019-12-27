var select = 1;

$(function() {
    update()
    
    $("#p-left").click(function() {
        selectPrevious()
    })

    $("#p-right").click(function() {
        selectNext()
    })
})

function selectPrevious(){
    select++;
    if(select > $("#projects").find(".card").lenght )select = 1;
    update();
}

function selectNext(){
    select--;
    if(select < 1)select = $("#projects").find(".card").lenght;
    update()
}


function update(){

    console.log("UPDATE")
    console.log(select)

    $("#projects").find(".card").each(function(index) {

        $(this).removeClass("hide");
        $(this).removeClass("show");
        $(this).removeClass("back");
        $(this).removeClass("left");
        $(this).removeClass("right");


        if( (index) < select) {
            $(this).addClass("left")
            if( (index+1) ==  select) {
                $(this).addClass("back")
            }else{
                $(this).addClass("hide")
            }
        } else if( index == select ) {
            $(this).addClass("show")
        } else {
            $(this).addClass("right")
            if( (index-1) ==  select) {
                $(this).addClass("back")
            }else{
                $(this).addClass("hide")
            }
        } 


    })
}

