


var square = document.querySelectorAll(".square");

for (var i = 0; i < square.length; i++){
    square[i].addEventListener("mouseenter", function () {
            this.classList.add("on-hover");
            console.log("Hovered over object");
        });

        square[i].addEventListener("mouseleave", function () {
        this.classList.remove("on-hover");
        console.log("Hover left");
    });
}
