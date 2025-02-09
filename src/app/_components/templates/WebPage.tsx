import React from "react";
import Heroscreen from "../panels/Heroscreen";
import TextDoubleImage from "../panels/TextDoubleImage";
import { ContentPage } from "@/app/interfaces/page";
import TextImage from "../panels/TextImage";
import Gallery from "../panels/Gallery";
import HtmlContent from "../panels/HtmlContent";
import Parallax from "../panels/Parallax";

import '../../globals.css';

// Ici, on définit un type pour les props attendues par le composant.
interface WebPageProps {
  blocks: ContentPage[]; // blocks est un tableau d'objets de type ContentPage.
}

const WebPage: React.FC<WebPageProps> = ({ blocks }) => {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.__component) {
          case "common.heroscreen":
            return <Heroscreen image={block.image} key={index} />;
          case "common.text-image":
            return (
              <TextImage
                title={block.title}
                text={block.text[0].children[0].text}
                image={block.image}
                links={block.links}
                key={index}
              />
            );
          case "common.text-double-image":
            return (
              <TextDoubleImage
                title={block.title}
                text={block.text[0].children[0].text}
                links={block.links}
                image1={block.image1}
                image2={block.image2}
                key={index}
              />
            );
          case "common.parallax":
            return <Parallax image={block.image} key={index} />;
          case "common.gallery":
            return <Gallery data={block.images.data} key={index} />;
          case "common.html-content":
            return (
              <HtmlContent
                htmlContent={block.code_html[0].children[0].text}
                key={index}
              />
            );
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default WebPage;
