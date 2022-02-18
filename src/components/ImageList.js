import React from "react";
import Image from "./Image";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <Image
        key={image.id}
        src={image.urls.small}
        alt={image.altDescription}
      ></Image>
    );
  });

  return <div className="image__list">{renderedImages}</div>;
};

export default ImageList;
