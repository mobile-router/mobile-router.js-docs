define(['ajax'], function(ajax) {

  function controller() {}

  function destroy() {}

  function render(cb) {
    var id = this.params.id;
    var paths = '/api/';
    if (id) {
      paths += id;
    } else {
      // index
      paths += 'index';
    }
    ajax.get(paths, cb);
  }

  return {
    render: render,
    controller: controller,
    destroy: destroy
  };

});