require.config({
  baseUrl: '/javascripts/app/',
  paths: {
    'm.router': '/javascripts/lib/m.min'
  }
});

require(['m.router', 'home'], function(M, home) {

  M.router.init([
    {
      path: '/',
      getTemplate: home.render,
      callback: home.controller,
      onDestroy: home.destroy
    },
    {
      path: '/:id',
      getTemplate: home.render,
      callback: home.controller,
      onDestroy: home.destroy
    }
  ], {
    viewsSelector: '.pages',
    viewClass: 'markdown-body',
    aniClass: 'turn',
    showLoading: false,
    error: function() {
      M.router.navigate('/');
    }
  });

  M.history.start({
    history: true
  });

});