export interface ImageProps {
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
        };
        small: {
          width: number;
          height: number;
        };
        medium: {
          width: number;
          height: number;
        };
        large: {
          width: number;
          height: number;
        };
      };
    };
  };
}

export interface GalleryProps {
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
      };
      small: {
        width: number;
        height: number;
      };
      medium: {
        width: number;
        height: number;
      };
      large: {
        width: number;
        height: number;
      };
    };
  };
}
