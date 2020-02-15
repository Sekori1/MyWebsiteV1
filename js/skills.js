function injectSkillOf(box) {
    let title = box.data("title");
    let desc = box.data("desc");
    $("#skill-title").text(title)
    $("#skill-desc").text(desc)
    $(".skill-box").removeClass("active")
    box.addClass("active")
}

$(".skill-box").mouseenter(function(event) {
    injectSkillOf($(this))
})

injectSkillOf($(".skill-box").first())
