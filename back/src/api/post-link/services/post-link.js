'use strict';

/**
 * post-link service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::post-link.post-link');
