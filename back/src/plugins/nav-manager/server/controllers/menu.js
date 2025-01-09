'use strict';

module.exports = {

  async create(ctx) {
    try {
      const { name, pages, posts } = ctx.request.body;

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
          pages: pages || [],
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
      const menus = await strapi.db.query('plugin::nav-manager.menu').findMany({
        populate: ['pages'], // Inclure les relations que vous voulez
      });
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
        where: { id },
        populate: ['pages'], // Inclure les relations que vous voulez
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

  async addLink(ctx) {
    const { id } = ctx.params; // ID du menu à mettre à jour
    const { pages } = ctx.request.body; // Liste des pages à ajouter
  
    try {
      // Vérifier que l'ID est fourni
      if (!id) {
        return ctx.badRequest("L'ID du menu est requis.");
      }
  
      // Vérifier que des pages sont fournies
      if (!pages || !Array.isArray(pages)) {
        return ctx.badRequest("La liste des pages est requise et doit être un tableau.");
      }
  
      // Récupérer le menu existant avec ses relations actuelles
      const existingMenu = await strapi.db.query('plugin::nav-manager.menu').findOne({
        where: { id },
        populate: ['pages'], // Récupérer les pages actuelles
      });
  
      if (!existingMenu) {
        return ctx.notFound("Menu introuvable.");
      }
  
      // Combiner les pages existantes avec les nouvelles sans créer de doublons
      const updatedPages = [
        ...(existingMenu.pages || []).map((page) => page.id), // Récupérer les IDs des pages existantes
        ...pages, // Ajouter les nouvelles pages
      ];
  
      // Supprimer les doublons
      const uniquePages = [...new Set(updatedPages)];
  
      // Mettre à jour le menu avec la nouvelle liste de pages
      const updatedMenu = await strapi.entityService.update('plugin::nav-manager.menu', id, {
        populate: ['pages'], // Récupérer les pages actuelles
        data: { pages },
      });
  
      ctx.send({ data: updatedMenu });
      
    } catch (error) {
      console.error("Erreur lors de l'ajout des pages au menu :", error);
      ctx.internalServerError("Une erreur est survenue lors de la mise à jour du menu.");
    }
  }
};
