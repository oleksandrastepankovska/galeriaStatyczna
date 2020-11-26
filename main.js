const galleryMaker = () => {
  const imageObject = {
    number: Math.floor(Math.random() * 5 + 1),
    src: "https://picsum.photos/200/300?random=",
    img: new Image(),
  };
  const imageDivs = document.querySelectorAll(".gallery__image");

  for (let i = 0; i < imageDivs.length; i++) {
    imageDivs[i].appendChild();
  }
};
