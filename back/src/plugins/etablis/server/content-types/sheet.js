'use strict';

module.exports = {
    kind: "singleType",
    collectionName: "etablis_sheet",
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
            description: "Nom de l'hôtel ou du restaurant"
        },
        category: {
            type: "enumeration",
            enum: [
                "hotel",
                "restaurant",
                "hotel-restaurant"
            ],
            required: true,
            description: "Catégorie de l'établissement"
        },
        location: {
            type: "customField",
            required: true,
            customField: "plugin::google-maps.location-picker"
        },
        phone_number: {
            type: "string",
            required: true
        },
        mail_adress: {
            type: "string",
            required: true
        },
        stars: {
            type: "integer",
            max: 5,
            min: 0
        }
    },
};
