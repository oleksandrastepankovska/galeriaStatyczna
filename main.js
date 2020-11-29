const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = document.getElementById("one");

next.addEventListener("click", nextImg);
prev.addEventListener("click", prevImg);

function show(image) {
    console.dir(image)
    if (current) {
        current.style.visibility = "hidden"
    }

    if (!image.nextElementSibling) {
        next.style.visibility = "hidden";
    } else {
        next.style.visibility = "visible";
    }


    if (!image.previousElementSibling) {
        prev.style.visibility = "hidden";
    } else {
        prev.style.visibility = "visible";
    }

    current = image;
    image.style.visibility = "visible"

}


function nextImg(event) {
    console.log("Xddd")
    if (current.nextElementSibling)
        show(current.nextElementSibling)
}

function prevImg(event) {
    console.log("xds")
    if (current.previousElementSibling)
        show(current.previousElementSibling)
}

show(current)