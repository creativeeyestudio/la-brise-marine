module.exports = {
    kind: 'collectionType', // Détermine le type : collectionType ou singleType
    collectionName: 'menus', // Nom de la collection dans la base de données
    info: {
      singularName: 'menu', // Nom au singulier
      pluralName: 'menus',  // Nom au pluriel
      displayName: 'Menu',  // Nom affiché dans l'interface
    },
    options: {
      draftAndPublish: true, // Activer l'état "Brouillon" et "Publié"
    },
    attributes: {
      name: {
        type: 'string', // Type de champ : chaîne de caractères
        required: true, // Champ obligatoire
        unique: true,   // Valeur unique
      },
      pages: {
        type: 'relation', // Relation avec le content-type `page`
        relation: 'manyToMany',
        target: 'api::page.page', // Content-type `page`
      },
      posts: {
        type: 'relation', // Relation avec le content-type `post`
        relation: 'manyToMany',
        target: 'api::post.post', // Content-type `post`
      },
    },
  };