'use strict'
  
define [
  './vendor/angular'
  './services/index'
  './filters'
  './project/index'
  './issue/index'
  './comment/index'
  './member/index'
  './commit/index'
  './assets/index'
  './report/index'
  './team/index'
  './stream/index'
  './gitlab/index'
  './vendor/angular-route'
  './vendor/ui-router'
  './controllers'
  './global-directives/index'
], (_ng) ->
  _ng.module 'mic', [
    'ngRoute'
    'mic.services'
    'mic.directives'
    'mic.controllers'
    'mic.filters'
    'ui.router'
  ]