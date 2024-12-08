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

export interface CommonGallery extends Schema.Component {
  collectionName: 'components_common_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
  };
}

export interface CommonParallax extends Schema.Component {
  collectionName: 'components_common_parallaxes';
  info: {
    displayName: 'parallax';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
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
    content_title: Attribute.String;
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
      'common.gallery': CommonGallery;
      'common.parallax': CommonParallax;
      'common.text-double-image': CommonTextDoubleImage;
      'common.text-image': CommonTextImage;
    }
  }
}
