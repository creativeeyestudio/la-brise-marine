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
    description: '';
    displayName: 'gallery';
    icon: 'picture';
  };
  attributes: {
    images: Attribute.Media<'images', true>;
  };
}

export interface CommonHeroscreen extends Schema.Component {
  collectionName: 'components_common_heroscreens';
  info: {
    displayName: 'heroscreen';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface CommonHtmlContent extends Schema.Component {
  collectionName: 'components_common_html_contents';
  info: {
    displayName: 'html-content';
    icon: 'code';
  };
  attributes: {
    code_html: Attribute.Blocks & Attribute.Required;
  };
}

export interface CommonParallax extends Schema.Component {
  collectionName: 'components_common_parallaxes';
  info: {
    description: '';
    displayName: 'parallax';
    icon: 'picture';
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
    icon: 'stack';
  };
  attributes: {
    content_image_1: Attribute.Media<'images'> & Attribute.Required;
    content_image_2: Attribute.Media<'images'> & Attribute.Required;
    content_text: Attribute.Blocks & Attribute.Required;
    content_title: Attribute.String & Attribute.Required;
  };
}

export interface CommonTextImage extends Schema.Component {
  collectionName: 'components_common_text_images';
  info: {
    description: '';
    displayName: 'text-image';
    icon: 'stack';
  };
  attributes: {
    content_image: Attribute.Media<'images'>;
    content_text: Attribute.Blocks;
    content_title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.carousel': CommonCarousel;
      'common.gallery': CommonGallery;
      'common.heroscreen': CommonHeroscreen;
      'common.html-content': CommonHtmlContent;
      'common.parallax': CommonParallax;
      'common.text-double-image': CommonTextDoubleImage;
      'common.text-image': CommonTextImage;
    }
  }
}
