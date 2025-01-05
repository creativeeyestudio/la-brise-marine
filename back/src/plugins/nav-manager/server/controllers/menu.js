'use strict';

module.exports = {
  async create(ctx) {
    try {
      console.log('Requête reçue pour créer un menu'); // Pour déboguer

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

      console.log('Menu créé avec succès :', menu);

      // Réponse au client
      ctx.send({ data: menu });
    } catch (error) {
      console.error('Erreur lors de la création du menu :', error);

      // Gérer les erreurs inattendues
      ctx.internalServerError('Une erreur est survenue lors de la création du menu.');
    }
  },
};
