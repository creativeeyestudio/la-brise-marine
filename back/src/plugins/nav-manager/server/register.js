'use strict';

module.exports = ({ strapi }) => {
  // Optionnel : afficher les types de contenu détectés
  const contentTypes = Object.keys(strapi.contentTypes).filter((type) =>
    type.startsWith('plugin::nav-manager.')
  );
};
