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
    content_text: Attribute.Blocks & Attribute.Required;
    image_1: Attribute.Media<'images'> & Attribute.Required;
    image_2: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface CommonTextImage extends Schema.Component {
  collectionName: 'components_common_text_images';
  info: {
    displayName: 'Text-image';
  };
  attributes: {
    content_image: Attribute.Media<'images'> & Attribute.Required;
    content_text: Attribute.Blocks & Attribute.Required;
    content_title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.carousel': CommonCarousel;
      'common.text-double-image': CommonTextDoubleImage;
      'common.text-image': CommonTextImage;
    }
  }
}
