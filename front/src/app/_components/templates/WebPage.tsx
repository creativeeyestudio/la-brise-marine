import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Heroscreen from "../panels/Heroscreen";
import TextDoubleImage from "../panels/TextDoubleImage";

const WebPage: React.FC<ImageProps> = (
  hero: ImageProps | undefined = undefined,
  text2img: {
    title: string;
    content: string;
    image1: ImageProps;
    image2: ImageProps;
  } | undefined = undefined
) => {
  return (
    <>
      <Header />

      <Heroscreen img={hero} />
      
      <TextDoubleImage
        title={text2img?.title}
        content={text2img?.content}
        image1={text2img?.image1}
        image2={text2img?.image2}
      />

      <Footer />
    </>
  );
};

export default WebPage;
