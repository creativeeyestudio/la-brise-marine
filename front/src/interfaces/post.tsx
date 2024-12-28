// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: Date;
    slug: string;
    main_image: {
      data: {
        attributes: {
          alternativeText: string;
          mime: string;
          url: string;
          width: number;
          height: number;
          formats: {
            thumbnail: {
              width: number;
              height: number;
            }
            small: {
              width: number;
              height: number;
            }
            medium: {
              width: number;
              height: number;
            }
            large: {
              width: number;
              height: number;
            }
          }
          
        }
      }
    }
  };
}
