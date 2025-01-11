import { ImageProps } from "./_image";

interface PostProps {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: Date;
    slug: string;
    meta_title: string;
    meta_description: string;
    main_image: ImageProps;
  };
}

export default PostProps