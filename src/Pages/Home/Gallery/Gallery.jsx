import React from "react";
import "./Gallery.css";
import galleryOne from "../../../assets/Gallery/gallery-1.png"
import galleryTwo from "../../../assets/Gallery/gallery-2.png"
import galleryThree from "../../../assets/Gallery/gallery-3.png"
import galleryFour from "../../../assets/Gallery/gallery-4.png"
import galleryFive from "../../../assets/Gallery/gallery-5.png"
import gallerySix from "../../../assets/Gallery/gallery-6.png"

const Gallery = () => {
  return (
    <div className="gallery-backgorund container mx-auto mt-3 space-y-3 pb-5">
      <h1 className="text-5xl  text-center text-white pt-5 ">
        A photo Gallery of the Toys
      </h1>
      <p className="text-white text-center">
        Discover Our Captivating Gallery of Imagination and Wonder, Where Every
        Toy Tells a Story.
      </p>
      <div className="grid grid-cols-3 gap-5  m-32 ">
        <div className="avatar">
          <div className="w-100 rounded">
            <img className="custom-img" src={galleryOne} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-50 rounded">
            <img src={galleryTwo} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-100 rounded">
            <img src={galleryThree}/>
          </div>
        </div>
        <div className="avatar">
          <div className="w-100 rounded">
            <img src={galleryFour} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-100 rounded">
            <img src={galleryFive} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-100 rounded">
            <img src={gallerySix} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
