$(".skill-box").mouseenter(function(event) {
    let title = $(this).data("title");
    let desc = $(this).data("desc");
    $("#skill-title").text(title)
    $("#skill-desc").text(desc)
})