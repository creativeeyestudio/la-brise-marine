import React from "react";
import { ContentPage } from "@/app/interfaces/page";

import '../../globals.css';
import TextIntro from "../panels/TextIntro";
import TextBlock from "../panels/Text";
import TextImage from "../panels/TextImage";
import TextDoubleImage from "../panels/TextDoubleImage";
import Parallax from "../panels/Parallax";
import Heroscreen from "../panels/Heroscreen";

// Ici, on définit un type pour les props attendues par le composant.
interface WebPageProps {
  blocks: ContentPage[]; // blocks est un tableau d'objets de type ContentPage.
}

const WebPage: React.FC<WebPageProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__component) {
          case "page.text-intro":
            return (
              <TextIntro title={block.title} content={block.content} key={index} />
            );
          case "page.text":
            return (
              <TextBlock title={block.title} content={block.content} key={index} />
            );
          case "page.text-image":
            return (
              <TextImage title={block.title} text={block.text} links={block.links} image={block.image} key={index} />
            );
          case "page.text-double-image":
            return (
              <TextDoubleImage title={block.title} text={block.text} links={block.links} image1={block.image1} image2={block.image2} key={index} />
            );
          case "page.parallax":
            return (
              <Parallax image={block.image} speed={block.speed} key={index} />
            );
          case "page.heroscreen":
            return (
              <Heroscreen images={block.images} key={index} />
            );
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default WebPage;
