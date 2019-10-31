let newSkill;

$( "#new-skill" ).on("submit",function(event) {
    newSkill = $("input").val();
    if (newSkill === "") return;
    $("ul").append(`<li><button>x</button><span>${newSkill}</span></li>`);
    $('input[type="text"]').val("");
    // $(this).val("");
    console.log("new skill submitted");
    console.log(`new skill is ${newSkill}`);
});

let listItem = $("ul").html(`<li><button>x</button><span>${newSkill}</span></li>`)

$("ul").on("click", "button", function(){
    function clear() {$(this).closest("li").remove()}
    $(this).closest("li").fadeOut("fast", clear);
    console.log($('li').closest("tr"));
    console.log("list button clicked");})


