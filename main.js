function marcelina(images){
    if(images.length == 0) return;
    const divForImg = document.querySelector('.galleryBox');

       const img = new Image();
       const url = images.shift();
       img.addEventListener("load", marcelina(images));

       img.src = url;
       divForImg.appendChild(img);
}
document.addEventListener("DOMContentLoaded", () => {
    marcelina(
    [
        "https://picsum.photos/400/400?random=1",
        "https://picsum.photos/400/400?random=2",
        "https://picsum.photos/400/400?random=3",
        "https://picsum.photos/400/400?random=4",
        "https://picsum.photos/400/400?random=5"
       
    ]);
});
const ps_galleryMaker = (images) => {
  if (!images.length) return;

  const imgDiv = document.querySelector(".ps_gallery");

  const img = new Image();
  const url = images.shift();

  img.onload = () => ps_galleryMaker(images);
  img.src = url;
  imgDiv.appendChild(img);
};

document.addEventListener("DOMContentLoaded", () => {
  ps_galleryMaker([
    "https://picsum.photos/500/500?random=1",
    "https://picsum.photos/500/500?random=2",
    "https://picsum.photos/500/500?random=3",
    "https://picsum.photos/500/500?random=4",
    "https://picsum.photos/500/500?random=5",
  ]);
});
function klaudia() {
  const urls = [
    "https://cdn.pixabay.com/photo/2014/11/21/15/45/geese-540663_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/11/04/07/48/pumpkins-4600419_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/06/26/08/56/living-room-3498914_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/05/08/18/23/pipes-4189258_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/06/21/09/48/hill-5324149_960_720.jpg",
  ];

  let section = document.querySelector(".klaudia");

  function createImage(url, index) {
    const img = new Image();
    img.src = url;
    const slider = section.querySelector(".slider");
    img.addEventListener("load", (event) => loadImg(index + 1));
    slider.appendChild(img);
  }

  function loadImg(index) {
    if (index < urls.length) {
      createImage(urls[index], index);
    }
  }

  loadImg(0);
}

klaudia();
