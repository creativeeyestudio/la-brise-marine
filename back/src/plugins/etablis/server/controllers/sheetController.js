'use strict';

module.exports = {
    async create(ctx) {
        try {
            const data = ctx.request.body;

            if (data.name) {
                return ctx.badRequest("Le champ 'Nom' est obligatoire")
            }

            const entity = await strapi.plugin('etablis')
                .service('sheet')
                .create(data);
            
            return ctx.created(entity); 
        } catch (error) {
            strapi.log.error("Erreur lors de la création : " + error);
            return ctx.internalServerError("Une erreur est survenue lors de la création de la fiche établissement")
        }
    }
}