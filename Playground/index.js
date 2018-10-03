
toggleDarkMode();

function toggleDarkMode() {

    var paragraphs = document.getElementsByClassName("square");
    var body = document.querySelector("body");
    var button = document.querySelector("button");

    button.addEventListener("click", function () {
        console.log("Clicked the button");
        for (var i = 0; i < paragraphs.length; i++) {

            paragraphs[i].classList.toggle("dark");
    }
        body.classList.toggle("dark");
    });

}

