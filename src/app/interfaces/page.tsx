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
  content: string
  text: TextBlock[];
  links: LinkItem[];
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

interface TextChild {
  text: string;
  type: string;
}

export default PageProps;
