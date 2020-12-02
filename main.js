function klaudia() {

    const urls = ["https://cdn.pixabay.com/photo/2014/11/21/15/45/geese-540663_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/11/04/07/48/pumpkins-4600419_960_720.jpg",
        "https://cdn.pixabay.com/photo/2018/06/26/08/56/living-room-3498914_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/05/08/18/23/pipes-4189258_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/06/21/09/48/hill-5324149_960_720.jpg"
    ]

    let section = document.querySelector(".klaudia")

    function createImage(url, index) {
        const img = new Image();
        img.src = url;
        const slider = section.querySelector('.slider');
        img.addEventListener('load', event => loadImg(index + 1))
        slider.appendChild(img);
    }

    function loadImg(index) {
        if (index < urls.length) {
            createImage(urls[index], index)
        }
    }

    loadImg(0)

}

klaudia();