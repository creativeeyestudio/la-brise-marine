'use strict';

module.exports = {
  info: {
    singularName: 'sheet', // Nom au singulier
    pluralName: 'sheets',  // Nom au pluriel
    displayName: 'Fiche établissement', // Nom affiché dans l'interface
    description: "Fiche descriptive de l'établissement",
  },
  options: {
    draftAndPublish: true,
  },
  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true,
      description: "Nom de l'hôtel ou du restaurant",
    },
    description: {
      type: 'richtext',
      required: true,
      description: "Description détaillée de l'établissement",
    },
    category: {
      type: 'enumeration',
      enum: ['hotel', 'restaurant'],
      required: true,
      description: "Catégorie de l'établissement",
    },
  },
};
