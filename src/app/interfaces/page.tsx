import { GalleryImageProps } from "@/app/_components/panels/Gallery";
import { ImageProps } from "./_image";
import PostProps from "./post";

interface PageProps {
  id: number;
  attributes: {
    title: string;
    slug: string;
    meta_title: string;
    meta_desc: string;
    homepage: boolean,
    secondary_page: boolean;
    content_page: ContentPage[];
  };
}

export interface ContentPage {
  __component: string;
  title: string;
  text: TextBlock[]
  content: TextBlock[]
  links: LinkItem[]
  code_html: TextBlock[]
  image: ImageProps
  image1: ImageProps
  image2: ImageProps
  images: GalleryImageProps
}

export interface TextBlock {
  type: string;
  children: TextChild[];
}

export interface LinkItem {
  id: number;
  label: string;
  external_link: string | null;
  pages: {
    data: PageProps[]
  },
  posts: {
    data: PostProps[]
  }
}

export interface TextChild {
  type: "text" | "link"; // Ajout du type "link"
  text?: string; // Texte des éléments de type "text" ou contenu d'un lien
  bold?: boolean; // Optionnel, pour les éléments "text" ou "link"
  italic?: boolean; // Optionnel, pour les éléments "text" ou "link"
  url?: string; // Lien URL, seulement pour les éléments de type "link"
  children?: TextChild[]; // Pour les liens, qui peuvent avoir des sous-éléments de texte
}



export default PageProps;
