import { GalleryImageProps } from "@/app/_components/panels/Gallery";
import { ImageProps } from "./_image";

interface PageProps {
  id: number;
  attributes: {
    title: string;
    slug: string;
    meta_title: string;
    meta_desc: string;
    secondary_page: boolean;
    content_page: ContentPage[];
  };
}

interface ContentPage {
  __component: string;
  title: string;
  text: TextBlock[];
  code_html: TextBlock[];
  image: ImageProps;
  image1: ImageProps;
  image2: ImageProps;
  images: GalleryImageProps;
}

export interface TextBlock {
  type: string;
  children: TextChild[];
}

interface TextChild {
  text: string;
  type: string;
}

export default PageProps;
