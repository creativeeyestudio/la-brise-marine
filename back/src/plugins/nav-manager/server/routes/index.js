module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
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
];
