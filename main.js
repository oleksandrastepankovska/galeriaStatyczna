function klaudia() {

    const urls = ["https://cdn.pixabay.com/photo/2019/11/04/07/48/pumpkins-4600419_960_720.jpg",
        "https://cdn.pixabay.com/photo/2014/11/21/15/45/geese-540663_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/06/26/08/56/living-room-3498914_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/05/08/18/23/pipes-4189258_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/06/21/09/48/hill-5324149_960_720.jpg"
    ]


    let section = document.querySelector(".klaudia")
    section.querySelectorAll('.slider-box').forEach(console.log)


    function createImage(url) {
        const img = new Image();
        img.src = url;
        const slider = section.querySelector('.slider-box');
        let imgBox = document.createElement("div");
        imgBox.classList.add("slide-img");
        console.dir(imgBox);
        slider.appendChild(imgBox);
        imgBox.appendChild(img);
    }

    for (el in urls) {
        createImage(urls[el]);
    }

    const prev = section.querySelector(".prev");
    const next = section.querySelector(".next");


    const slider = section.querySelector('.slider-box');
    let current = slider.children[0];

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

    show(current);
}

klaudia();