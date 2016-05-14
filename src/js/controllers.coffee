#全局级的directive，和模块无关
'use strict'
define [
  './ng-module'
  './utils'
  './vendor/lodash'
], (_module, _utils, _) ->

  _module.controllerModule

  .controller('homeController', ['$scope', '$stateParams', 'API',
  ($scope, $stateParams, API)->

  ])
