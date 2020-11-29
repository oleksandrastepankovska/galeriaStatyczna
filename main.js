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
