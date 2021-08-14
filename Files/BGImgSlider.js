const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
    "contBcg-5"
]
$(document).ready(function () {
    let counter = 0;
    $(".BtnLeft").click(function (e) {
        e.preventDefault();
        counter--;
        if (counter < 0) {
            counter = pictures.length - 1;
        }
        $("img").attr("src", `./images/${pictures[counter]}.jpg`);
    });
    $(".BtnRight").click(function (e) {
        e.preventDefault();
        counter++
        if (counter > pictures.length - 1) {
            counter = 0
        }
        $("img").attr("src", `./images/${pictures[counter]}.jpg`);
    });
});
