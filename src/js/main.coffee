require('../css/main.less');

window.name = "NG_DEFER_BOOTSTRAP!";

require [
  "./vendor/angular"
  "./app"
  "./routes"
], (_ng, _app) ->
  timer = null
  $window = $(window).resize(->
    timer = setTimeout(->
      $window.trigger "onResizeEx"
    , 500)
  )

  _ng.element().ready ->
    _ng.resumeBootstrap [_app.name]
    $('#loading').fadeOut()

