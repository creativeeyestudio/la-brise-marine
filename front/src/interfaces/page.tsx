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
  image: ImageProps;
  image1: ImageProps;
  image2: ImageProps;
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
