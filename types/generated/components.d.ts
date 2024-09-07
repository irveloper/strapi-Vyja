import type { Schema, Attribute } from '@strapi/strapi';

export interface UiLinks extends Schema.Component {
  collectionName: 'components_ui_links';
  info: {
    displayName: 'links';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface UiHeroBanner extends Schema.Component {
  collectionName: 'components_ui_hero_banners';
  info: {
    displayName: 'HeroBanner';
    icon: 'cast';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'ui.links'>;
  };
}

export interface UiHeading extends Schema.Component {
  collectionName: 'components_ui_headings';
  info: {
    displayName: 'Heading';
    icon: 'strikeThrough';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ui.links': UiLinks;
      'ui.hero-banner': UiHeroBanner;
      'ui.heading': UiHeading;
    }
  }
}
