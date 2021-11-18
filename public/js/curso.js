$(document).ready(()=> {
    $("#baristaCompleto_info").hide();
})

let baristaCompleto_btn = $("#baristaCompleto_btn");

baristaCompleto_btn.click(() => {
    $("#baristaCompleto_info").slideToggle("slow");
});