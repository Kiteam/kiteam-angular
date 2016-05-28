"use strict"
define [
  '../vendor/angular'
  '../ng-module'
  '../vendor/charm'
  '../utils'
  '../apis'
], (_ng, _module, _charm, _utils, _api) ->
  BASEAPI = '/api/'
  
  _module.serviceModule
  .factory('API', ['$http', '$location', '$q', 'NOTIFY', '$sce', '$rootScope', 'LOADING'
  ($http, $location, $q, NOTIFY, $sce, $rootScope, LOADING)->

    options =
      prefix: '/api'
      promise: $q
      ajax: (url, method, data, success)->
        ajaxOps = url: url, method: method
        if method.toLowerCase() in ['post', 'put', 'patch']
          ajaxOps.data = data
        else
          ajaxOps.params = data

        $http(ajaxOps).success(success).error((data, status) ->
          LOADING.loaded()
          switch status
            when 404
              NOTIFY.error "404 Not Found"
            when 500
              NOTIFY.error "抱歉，服务器发生错误，请稍候再试"
            when 406
              message = data.message or data
              NOTIFY.error "提示：" + message
            when 403
              message = data.message or data
              NOTIFY.error "你没有权限操作此项功能"
            when 401
              NOTIFY.error "您需要登录才能使用此功能"
            when 413
              NOTIFY.error "文件好象太大，上传失败！"
            else
            #以后再考虑不同的处理
              console.error "未知错误"
        )


    router = _charm(options)
    ###
    router.parse('apis')
    router.apis().retrieve().then (result)->
      router.parse result
      $rootScope.$broadcast 'api:ready'
    ###
    router.parse _api

    ###
    #获取jsonp的数据
    oldAjax = (ajaxOps)->
      console.warn "警告：此方法已经停用，请使用charm.js调用API，#{ajaxOps.url}"
      #如果没有baseUrl，则加上
      ajaxOps.url = "#{options.prefix}/#{ajaxOps.url}" if ajaxOps.url.indexOf(options.prefix) < 0
      deferred = $q.defer()
      options.ajax(ajaxOps.url, ajaxOps.method, ajaxOps.data || ajaxOps.params, (result)->
        deferred.resolve result
      )

      deferred.promise

    #兼容旧数据，以后需要删除这些代码
    router.get = (url, params)-> oldAjax url: url, params: params, method: 'GET'
    router.post = (url, data)-> oldAjax url: url, data: data, method: 'POST'
    router.delete = (url, params)-> oldAjax url: url, params: params, method: 'DELETE'
    router.put = (url, id, data)->
      #如果第二个参数为number，则将id加到url后面
      if typeof(id) is 'number'
        url += "/#{id}"
      else
        data = id

      oldAjax url: url, data: data, method: 'PUT'

    router.save = (url, data)->
      if data.id
        url = "#{url}/#{data.id}"
        delete data.id

      oldAjax url: url, data: data
    ###

    return router
  ])