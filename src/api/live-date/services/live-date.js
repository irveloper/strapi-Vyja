'use strict';

/**
 * live-date service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live-date.live-date');
