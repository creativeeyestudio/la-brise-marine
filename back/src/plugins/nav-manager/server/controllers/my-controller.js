'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('nav-manager')
      .service('myService')
      .getWelcomeMessage();
  },
});
