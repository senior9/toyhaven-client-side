import React, { useEffect } from "react";
import "./Gallery.css";
import galleryOne from "../../../assets/Gallery/gallery-1.png";
import galleryTwo from "../../../assets/Gallery/gallery-2.png";
import galleryThree from "../../../assets/Gallery/gallery-3.png";
import galleryFour from "../../../assets/Gallery/gallery-4.png";
import galleryFive from "../../../assets/Gallery/gallery-5.png";
import gallerySix from "../../../assets/Gallery/gallery-6.png";
import gif from "../../../assets/Gallery/gif.gif"
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <>
      <div className="mt-16 p-4 flex flex-col md:flex-row gap-20 items-center justify-around rounded-md container mx-auto gallery-backgorund">
        <div className="space-y-5">
        <h1 className="text-center text-5xl font-bold text-white">What We Do</h1>
        <h1 className="text-center text-stone-400 text-xl font-semibold">
          Brisa is a leading edge fashion footwear specialist, <br /> providing style
          conscious customers  <br /> innovative shoes to suit every occasion.  <br /> We
          pride ourselves on our unique product range <br /> - created by our in-house
          design team and global brand partnerships,<br /> all of which are
          recognisable by their individuality, design and quality. 
        </h1>
        </div>
        <div>
          <img src={gif} alt="" />
        </div>
      </div>

      <div className="bg-slate-100 py-16 space-y-8 mt-16">
        <h1 className="text-center text-5xl font-semibold">
          A photo Gallery of the Toys
        </h1>
        <p className="text-blue-950 text-center text-xl">
          Discover Our Captivating Gallery of Imagination and Wonder, Where
          Every Toy Tells a Story.
        </p>
      </div>
      <div className="gallery-backgorund pt-10 mx-auto mt-3 space-y-3 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 md:m-32">
          <div className="avatar" data-aos="fade-up">
            <div className="w-full md:w-100 rounded">
              <img className="custom-img" src={galleryOne} alt="Gallery One" />
            </div>
          </div>
          <div className="avatar" data-aos="fade-up">
            <div className="w-full md:w-50 rounded">
              <img src={galleryTwo} alt="Gallery Two" />
            </div>
          </div>
          <div className="avatar" data-aos="fade-up">
            <div className="w-full md:w-100 rounded">
              <img src={galleryThree} alt="Gallery Three" />
            </div>
          </div>
          <div className="avatar" data-aos="fade-up">
            <div className="w-full md:w-100 rounded">
              <img src={galleryFour} alt="Gallery Four" />
            </div>
          </div>
          <div className="avatar" data-aos="fade-up">
            <div className="w-full md:w-100 rounded">
              <img src={galleryFive} alt="Gallery Five" />
            </div>
          </div>
          <div className="avatar" data-aos="fade-up">
            <div className="w-full md:w-100 rounded">
              <img src={gallerySix} alt="Gallery Six" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
