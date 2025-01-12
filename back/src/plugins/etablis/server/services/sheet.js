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
    },

    async find(ctx) {
        try {
            // Appel au service pour récupérer l'entité unique
            const entity = await strapi.plugin('etablis').service('sheet').find();
        
            if (!entity) {
                return ctx.notFound('La fiche n\'existe pas.');
            }
        
            return ctx.send(entity);
        } catch (error) {
            strapi.log.error('Erreur lors de la récupération de la fiche :', error);
            return ctx.internalServerError('Impossible de récupérer la fiche.');
        }
    },
})