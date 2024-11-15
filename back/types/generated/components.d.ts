import type { Attribute, Schema } from '@strapi/strapi';

export interface CommonCarousel extends Schema.Component {
  collectionName: 'components_common_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'picture';
  };
  attributes: {
    Images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface CommonTextDoubleImage extends Schema.Component {
  collectionName: 'components_common_text_double_images';
  info: {
    description: '';
    displayName: 'text-double-image';
  };
  attributes: {
    content: Attribute.Blocks & Attribute.Required;
    image1: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.carousel': CommonCarousel;
      'common.text-double-image': CommonTextDoubleImage;
    }
  }
}
