'use strict'

module.exports = ({ strapi }) => ({
    /**
     * @param {any} data
     */
    async create(data) {
        try {
            const result = await strapi.entityService.create(
                'plugin::etablis.sheet',
                { data }
            );
            return result;
        } catch (error) {
            strapi.log.error('Erreur dans le service create :', error);
            throw new Error('Échec de la création.');
        }
    }
})