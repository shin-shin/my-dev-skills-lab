let newSkill;

$("#new-skill").on("submit", function (event) {
    event.preventDefault();
    newSkill = $("input").val();
    if (newSkill === "") return;
    $("ul").append(`<li><button>x</button><span>${newSkill}</span></li>`);
    $('input[type="text"]').val("");
});

$("ul").on("click", "button", function () {
    function clear() { $(this).closest("li").remove() }
    $(this).closest("li").fadeOut("fast", clear);
})


