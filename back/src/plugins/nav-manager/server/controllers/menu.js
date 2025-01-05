'use strict';

module.exports = {

  async create(ctx) {
    try {
      const { name, items } = ctx.request.body;

      // Vérification des champs obligatoires
      if (!name) {
        console.warn('Le champ "name" est manquant dans la requête.');
        return ctx.badRequest('Le champ "name" est obligatoire.');
      }

      // Vérifier si un menu avec le même nom existe déjà
      const existingMenu = await strapi.db.query('plugin::nav-manager.menu').findOne({
        where: { name },
      });

      if (existingMenu) {
        console.warn(`Un menu avec le nom "${name}" existe déjà.`);
        return ctx.badRequest('Un menu avec ce nom existe déjà.');
      }

      // Créer le menu
      const menu = await strapi.db.query('plugin::nav-manager.menu').create({
        data: {
          name,
          items: items || [], // Par défaut, items sera un tableau vide si non fourni
        },
      });

      // Réponse au client
      ctx.send({ data: menu });
    } catch (error) {
      console.error('Erreur lors de la création du menu :', error);

      // Gérer les erreurs inattendues
      ctx.internalServerError('Une erreur est survenue lors de la création du menu.');
    }
  },

  async find(ctx) {
    try {
      const menus = await strapi.db.query('plugin::nav-manager.menu').findMany();
      ctx.send({ data: menus });
    } catch (error) {
      console.error('Erreur lors de la récupération des menus :', error);
      ctx.internalServerError('Erreur interne lors de la récupération des menus.');
    }
  },

  async findOne(ctx) {
    const { id } = ctx.params;

    try {
      if (!id) {
        return ctx.badRequest('L\'ID est requis pour récupérer un menu.');
      }
      
      const menu = await strapi.db.query('plugin::nav-manager.menu').findOne({
        where: { id }
      });

      if (!menu) {
        return ctx.notFound('Aucun menu trouvé avec cet ID.');
      }

      ctx.send({ data:menu });
    } catch (error) {
      console.error('Erreur lors de la récupération du menu :', error);
      ctx.internalServerError('Erreur interne lors de la récupération du menu.');
    }
  },

  async delete(ctx) {
    const { id } = ctx.params;

    try {
      if (!id) {
        return ctx.badRequest('L\'ID est requis pour récupérer un menu.');
      }

      const menu = await strapi.db.query('plugin::nav-manager.menu').delete({
        where: { id }
      });

      ctx.send(menu);
      
    } catch (error) {
      console.error('Erreur lors de la suppression du menu :', error);
      ctx.internalServerError('Erreur interne lors de la suppression du menu.');
    }
  },
};
