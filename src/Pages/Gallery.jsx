import React from "react";
import "./Styles/Gallery.css";
import person from "../Assets/person.png";
import main from "../Assets/top.png";

function Gallery() {
  const dummyimg = {
    images: [
      { src: `${person}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${main}` },
      { src: `${main}` },
      { src: `${main}` },
      { src: `${main}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${main}` },
      { src: `${main}` },
      { src: `${main}` },
      { src: `${main}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${person}` },
      { src: `${main}` },
      { src: `${main}` },
    ],
  };
  let coloum1 = [];
  let coloum2 = [];
  let coloum3 = [];
  let coloum4 = [];
  let c = 0;
  for (let i = 0; i < dummyimg.images.length; i++) {
    if (c === 0) {
      coloum2.push(dummyimg.images[i]);
      c += 1;
    } else if (c === 1) {
      coloum3.push(dummyimg.images[i]);
      c += 1;
    } else if (c === 2) {
      coloum1.push(dummyimg.images[i]);
      c += 1;
    } else if (c === 3) {
      coloum4.push(dummyimg.images[i]);
      c += 1;
    }
    if (c === 4) {
      c = 0;
    }
  }

  return (
    <div className="Gallerybox">
      <div className="eighty">
        <div className="gallerytext">Gallery</div>
        <div className="maingallery">
          <div className="coloum first">
            {coloum1.map((elem) => {
              return (
                <div>
                  <img src={elem.src} alt="" />
                </div>
              );
            })}
          </div>
          <div className="coloum second">
            {coloum2.map((elem) => {
              return (
                <div>
                  <img src={elem.src} alt="" />
                </div>
              );
            })}
          </div>
          <div className="coloum third">
            {coloum3.map((elem) => {
              return (
                <div>
                  <img src={elem.src} alt="" />
                </div>
              );
            })}
          </div>
          <div className="coloum fourth">
            {coloum1.map((elem) => {
              return (
                <div>
                  <img src={elem.src} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
