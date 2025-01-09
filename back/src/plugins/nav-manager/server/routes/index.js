module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },

  // POST
  {
    method: 'POST',
    path: '/menus',
    handler: 'MenuController.create',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },

  // GET
  {
    method: 'GET',
    path: '/menus',
    handler: 'MenuController.find',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'GET',
    path: '/menus/:id',
    handler: 'MenuController.findOne',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },

  // DELETE
  {
    method: 'DELETE',
    path: '/menus/:id',
    handler: 'MenuController.delete',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    }
  },

  // ADD LINKS
  {
    method: 'PATCH',
    path: '/menus/:id/add-links',
    handler: 'MenuController.addLink',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    }
  }
];
