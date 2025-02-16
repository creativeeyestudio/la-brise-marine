import React from "react";
import Heroscreen from "../panels/Heroscreen";
import TextDoubleImage from "../panels/TextDoubleImage";
import { ContentPage } from "@/app/interfaces/page";
import TextImage from "../panels/TextImage";
import Gallery from "../panels/Gallery";
import HtmlContent from "../panels/HtmlContent";
import Parallax from "../panels/Parallax";

import '../../globals.css';
import TextIntro from "../panels/TextIntro";
import TextBlock from "../panels/Text";

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
          default:
            return <></>;
        }
      })}
    </>
  );
};

export default WebPage;
