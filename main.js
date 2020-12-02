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