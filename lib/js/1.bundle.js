webpackJsonp([1],Array(35).concat([
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(86), __webpack_require__(47), __webpack_require__(48), __webpack_require__(55), __webpack_require__(64), __webpack_require__(67), __webpack_require__(76), __webpack_require__(80), __webpack_require__(36), __webpack_require__(97), __webpack_require__(101), __webpack_require__(105), __webpack_require__(110), __webpack_require__(111), __webpack_require__(112), __webpack_require__(113)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng) {
	  return _ng.module('mic', ['ngRoute', 'mic.services', 'mic.directives', 'mic.controllers', 'mic.filters', 'ui.router']);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(37), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(39), __webpack_require__(43), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _moment, _, _utils) {
	  return _module.controllerModule.controller('reportController', [
	    '$scope', 'API', function($scope, API) {
	      var updateTeamCategory;
	      $scope.title = "我的报表";
	      updateTeamCategory = function() {
	        return API.team().retrieve({
	          role: 'l'
	        }).then(function(result) {
	          return $scope.teamCategory = result;
	        });
	      };
	      return updateTeamCategory();
	    }
	  ]).controller('weeklyReportListController', [
	    '$scope', '$stateParams', '$location', 'API', 'WEEKLIST', function($scope, $stateParams, $location, API, WEEKLIST) {
	      $scope.weeks = WEEKLIST(30);
	      $scope.title = "项目周报";
	      if ($stateParams.team_id) {
	        $scope.title = "【" + $location.$$search.title + "】团队周报";
	      }
	      if (parseInt($stateParams.team_id) === 0) {
	        $scope.title = "我的周报";
	      }
	      $scope.teamName = $location.$$search.title;
	      return $scope.createReport = function() {
	        return $scope.$broadcast("report:create:show");
	      };
	    }
	  ]).controller('reportWeeklyDetailsController', [
	    '$rootScope', '$scope', '$stateParams', '$location', 'API', function($rootScope, $scope, $stateParams, $location, API) {
	      var cond, end_time, project_id, start_time, team_id;
	      start_time = $stateParams.start_time || $location.$$search.start_time;
	      end_time = $stateParams.end_time || $location.$$search.end_time;
	      project_id = $stateParams.project_id || $location.$$search.project_id || null;
	      team_id = $stateParams.team_id || $location.$$search.team_id || null;
	      $scope.printExtraUrl = "";
	      if (team_id) {
	        $scope.printExtraUrl += "&team_id=" + team_id;
	      }
	      if (project_id) {
	        $scope.printExtraUrl += "&project_id=" + project_id;
	      }
	      cond = {
	        start_time: start_time,
	        end_time: end_time,
	        project_id: project_id
	      };
	      _.extend($scope, cond);
	      return API.report(team_id).weekly().retrieve(cond).then(function(result) {
	        return $scope.report = result;
	      });
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng) {
	  return {
	    directiveModule: _ng.module("mic.directives", ["mic.services", "mic.filters"]),
	    controllerModule: _ng.module("mic.controllers", ["mic.services"]),
	    serviceModule: _ng.module("mic.services", []),
	    filterModule: _ng.module("mic.filters", [])
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {var slice = [].slice;

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  return {
	    trim: function(text) {
	      return text && text.replace(/^\s+/, "").replace(/\s+$/, "");
	    },
	    formatString: function() {
	      var args, text;
	      text = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	      if (!text) {
	        return text;
	      }
	      if (args.length === 1 && args[0] instanceof Array) {
	        args = args[0];
	      }
	      return text.replace(/\{(\d+)\}/g, function(m, i) {
	        return args[i];
	      });
	    },
	    extractTemplate: function(expr, text) {
	      var html, ids, j, len;
	      if (typeof expr === 'string') {
	        return $(text).find(expr).val();
	      } else if (expr instanceof Array) {
	        html = "";
	        for (j = 0, len = expr.length; j < len; j++) {
	          ids = expr[j];
	          html += $(text).find(ids).val();
	        }
	        return html;
	      }
	    },
	    hex2rgba: function(hex) {
	      
	    var rgba = {r: 0, g: 0, b: 0, a: 0}
	    var c, o = [], k = 0, m = hex.match(
	      /^#(([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})|([0-9a-f])([0-9a-f])([0-9a-f]))$/i);

	    if (!m) return rgba;
	    for (var i = 2, s = m.length; i < s; i++) {
	      if (undefined === m[i]) continue;
	      c = parseInt(m[i], 16);
	      o[k++] = c + (i > 4 ? c * 16 : 0);
	    }
	    rgba.r = o[0]
	    rgba.g = o[1]
	    rgba.b = o[2]
	    ;
	      return rgba;
	    },
	    toDyadicArray: function(array, length) {
	      var __arr, _arr, i, index, item, j, k, l, len, ref, ref1, ref2, ref3, ref4;
	      _arr = [];
	      ref = length;
	      for ((ref > 0 ? (index = j = 0, len = array.length) : index = j = array.length - 1); ref > 0 ? j < len : j >= 0; index = j += ref) {
	        item = array[index];
	        if (index + length < array.length) {
	          __arr = [];
	          for (i = k = ref1 = index, ref2 = index + length; ref1 <= ref2 ? k < ref2 : k > ref2; i = ref1 <= ref2 ? ++k : --k) {
	            __arr.push(array[i]);
	          }
	        } else {
	          __arr = [];
	          for (i = l = ref3 = index, ref4 = array.length; ref3 <= ref4 ? l < ref4 : l > ref4; i = ref3 <= ref4 ? ++l : --l) {
	            __arr.push(array[i]);
	          }
	        }
	        _arr.push(__arr);
	      }
	      return _arr;
	    },
	    detectFileType: function(filename) {
	      if (/\.(7z|zip|rar)$/i.test(filename)) {
	        return 'bundle';
	      } else if (/\.(png|jpg|jpeg|gif|bmp)$/i.test(filename)) {
	        return 'image';
	      } else if (/\.(md|markdown|mark|mkd|mark)$/i.test(filename)) {
	        return 'markdown';
	      } else if (/\.(js|json|html|htm|less|css|coffee|hbs|xml)/i.test(filename)) {
	        return 'code';
	      } else if (/\.(txt)/i.test(filename)) {
	        return 'text';
	      } else {
	        return 'other';
	      }
	    }
	  };
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(46)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _template) {
	  return _module.directiveModule.directive('reportWeeklyDetailsMember', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          source: '='
	        },
	        template: _utils.extractTemplate('#tmpl-report-weekly-details-member', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('reportTeamCategoryMenu', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-report-team-menu-category', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('reportWeeklyDetailsContent', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-report-weekly-details-content', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('reportWeeklyDetailsPrint', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-report-weekly-details-print', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('indexTeamFinishedChart', [
	    "API", function(API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-index-team-finished-chart', _template),
	        link: function(scope, element, attrs) {
	          API.team().retrieve({
	            status: 1
	          }).then(function(result) {
	            scope.teams = result ? result : [];
	            return scope.current_team = scope.teams.length > 0 ? scope.teams[0] : 0;
	          });
	          return scope.teamClick = function(team) {
	            scope.current_team = team;
	            return scope.$broadcast("team:chart:change", team.team_id, "team");
	          };
	        }
	      };
	    }
	  ]).directive('reportCreate', [
	    "WEEKLIST", "API", "NOTIFY", function(WEEKLIST, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-report-create', _template),
	        link: function(scope, element, attrs) {
	          var $o;
	          scope.weekList = WEEKLIST(5);
	          scope.profile = {};
	          scope.profile.time = scope.weekList[0].start;
	          $o = $(element);
	          scope.$on('report:create:show', function(event) {
	            return $o.modal({
	              showClose: false
	            });
	          });
	          scope.$on('report:create:hide', function() {
	            return $.modal.close();
	          });
	          scope.dropDownChange = function() {
	            return API.report().retrieve({
	              time: scope.profile.time
	            }).then(function(result) {
	              scope.profile.content = result.content;
	              return scope.profile.id = result.id;
	            });
	          };
	          scope.onClickSave = function() {
	            var isEdit, method, reportAPI;
	            isEdit = false;
	            reportAPI = API.report();
	            method = !scope.profile.id ? 'create' : 'update';
	            return reportAPI[method](scope.profile).then(function(res) {
	              NOTIFY.success('保存成功！');
	              return scope.$emit("report:create:hide");
	            });
	          };
	          scope.onClickCancel = function() {
	            return scope.$emit("report:create:hide");
	          };
	          return scope.dropDownChange();
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 46 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>  <textarea id=\"tmpl-report-layout\">\n        <div class=\"frame project-view team-view\">\n            <global-message ng-show=\"false\"></global-message>\n            <header-global></header-global>\n            <div class=\"container\">\n                \n                <div class=\"master-panel\">\n                    \n                    <div class=\"project-menu\">\n                        <ul class=\"master-menu\" project-menu-highlight>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a href=\"/report/0/weekly-report?title=我的周报\">我的周报</a>\n                                        </label>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"issue-category\" ng-show=\"teamCategory.length > 0\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a>团队周报</a>\n                                        </label>\n                                    </div>\n                                    <report-team-category-menu></report-team-category-menu>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <project-salve-panel></project-salve-panel>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-report-team-menu-category\">\n        <ul class=\"sub-menu\">\n            <li ng-repeat=\"item in teamCategory\" ng-if=\"item.status==1\">\n                <a href=\"/report/{{item.team_id}}/weekly-report?title={{item.name}}\" class=\"text-overflow\">{{item.name}}</a>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-report-weekly-list\">\n        <div class=\"list\">\n            <header>\n                <h3>{{title}}<button class=\"primary default\" style=\"float:right;margin-bottom:5px\" ng-click=\"createReport()\" ng-if=\"title=='我的周报'\">添加</button></h3>\n            </header>\n\n            <ul class=\"details\">\n                <li class=\"row\" ng-repeat=\"week in weeks\">\n                    <a class=\"title\" href=\"/{{null | projectLink: 'normal'}}/weekly-report/{{week.start}}~{{week.end}}?title={{teamName}}\">\n                        {{week.start|date: 'yyyy年第ww周'}}\n                    </a>\n\n                    <div class=\"info\">\n                        <span class=\"memo\">{{week.start | date}} 至 {{week.end | date}}</span>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <report-create></report-create>\n    </textarea>  <textarea id=\"tmpl-report-weekly-details-member\">\n        <div>\n            <div class=\"somebody\" ng-repeat=\"item in source\">\n                <div class=\"member\">{{item.member.realname || item.member.username}}({{item.issue.length+item.others.length}})</div>\n                <ul class=\"tasks\">\n                    <li ng-repeat=\"issue in item.issue\">\n                        <a href=\"/project/{{issue.project_id}}/issue/{{issue.id}}\"><span ng-if=\"issue.issue_title\">{{issue.issue_title}}--></span>{{issue.title}} </a>\n                        <div class=\"info\">\n                            <span class=\"plain gray\">{{(issue.finish_time || issue.timestamp) | date: 'EEEE'}}</span>\n                            <span class=\"plain gray\">{{issue.project_name}}</span>\n                        </div>\n                    </li>\n                    <li ng-show=\"item.others.length>0 && item.issue.length>0\" class=\"devide\"></li>\n                    <li ng-repeat=\"other in item.others\">\n                        {{other}}\n                    </li>\n                </ul>\n            </div>\n            <div ng-show=\"source.length == 0\" class=\"somebody\">暂无数据</div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-report-weekly-details\">\n        <div class=\"weekly-report-details inner-view\">\n            <header>\n                <div class=\"title\">\n                    {{start_time | date: 'yyyy年第ww周'}}周报\n                    <em>{{start_time | date: 'yyyy-MM-dd'}} 至 {{end_time | date: 'yyyy-MM-dd'}}</em>\n                </div>\n                <div class=\"print\">\n                    <i class=\"icon small\"></i>\n                    <a href=\"/report/weekly.html?start_time={{start_time}}&end_time={{end_time}}{{printExtraUrl}}\" target=\"_blank\">打印版</a>\n                </div>\n            </header>\n            \n            <report-weekly-details-content></report-weekly-details-content>\n        </div>\n    </textarea>  <textarea id=\"tmpl-report-weekly-details-print\">\n        <div class=\"report-weekly-print\">\n            <header>\n                <h3>\n                    {{start_time | date: 'yyyy年第ww周'}}周报\n                    <em>{{start_time | date: 'yyyy-MM-dd'}} 至 {{end_time | date: 'yyyy-MM-dd'}}</em>\n                </h3>\n            </header>\n            <report-weekly-details-content></report-weekly-details-content>\n            <footer>\n                本报表由BHF自动生成\n            </footer>\n        </div>\n    </textarea>  <textarea id=\"tmpl-report-weekly-details-content\">\n        <div>\n            \n            <section class=\"done report-view\">\n                <div class=\"title\">\n                    <i class=\"icon small\"></i>\n                    <h3>本周完成任务</h3>\n                </div>\n\n                <report-weekly-details-member data-source=\"report.finished\"></report-weekly-details-member>\n            </section>\n\n            \n            <section class=\"undone report-view\">\n                <div class=\"title\">\n                    <i class=\"icon small\"></i>\n                    <h3>本周未完成任务</h3>\n                </div>\n\n                <report-weekly-details-member data-source=\"report.unfinished\"></report-weekly-details-member>\n            </section>\n\n            \n            <section class=\"lazybone report-view\" ng-hide=\"true\">\n                <div class=\"title\">\n                    <i class=\"icon small\"></i>\n                    <h3>本周无任务和周报记录(共{{report.lazybones.length}}人)</h3>\n                </div>\n\n                <ul class=\"member-list\">\n                    <li ng-repeat=\"member in report.lazybones\">\n                        <div class=\"avatar\">\n                            {{member.realname | lastName}}\n                        </div>\n                        <label>{{member.realname}}</label>\n                    </li>\n                </ul>\n            </section>\n        </div>\n    </textarea> <textarea id=\"tmpl-index-team-finished-chart\">\n        <div ng-if=\"teams.length > 0\">\n            <div class=\"chart-box\">\n                <h3>【{{current_team.name}}】年度开发者完成任务Top 5</h3>\n                \n                <div class=\"chart\" issue-finished-total-chart data-name=\"team\" data-id=\"{{current_team.team_id}}\" data-flag=\"team\"></div>\n            </div>\n            <ul class=\"team-chart\" ng-show=\"teams.length > 1\">\n                <li ng-repeat=\"team in teams\" ng-click=\"teamClick(team)\" ng-class=\"{true: 'selected', false: ''}[(team == current_team)]\">\n                    {{team.name}}\n                </li>\n            </ul>\n        </div>\n    </textarea> <textarea id=\"tmpl-report-create\">\n        <div class=\"modal\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <div class=\"simple-tab\" simple-tab=\"\" data-active-index=\"0\">\n                    <div class=\"nav title\" data-field=\"nav\">\n                        <span>添加周报</span>\n                    </div>\n                </div>\n                <div class=\"content\" data-field=\"content\">\n                    <div class=\"panel\">\n                        <div class=\"standard-form\">\n                            <div class=\"row\">\n                                <label class=\"caption\">\n                                    时间：\n                                </label>\n                                <select class=\"width\" ng-change=\"dropDownChange()\" ng-model=\"profile.time\" ng-options=\"week.start as ((week.start|date: 'yyyy年第ww周')+'('+(week.start|date: 'MM月dd日')+'至'+(week.end|date: 'MM月dd日')+')') for week in weekList\"></select>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"caption float\">\n                                    内容：\n                                </label>\n                                &lt;textarea ng-model=\"profile.content\"&gt;&lt;/textarea&gt;\n                            </div>\n\n                            <div class=\"row control\">\n                                <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                                <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("report-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _moment) {
	  return _module.filterModule.filter('unsafe', [
	    '$sce', function($sce) {
	      return function(text) {
	        return $sce.trustAsHtml(text);
	      };
	    }
	  ]).filter('projectMemberRole', function() {
	    return function(role) {
	      return {
	        a: '管理员',
	        d: '开发',
	        p: '产品',
	        l: 'Leader',
	        g: '客人',
	        t: '测试'
	      }[role];
	    };
	  }).filter('teamMemberRole', function() {
	    return function(role) {
	      return {
	        m: '成员',
	        l: 'Leader'
	      }[role];
	    };
	  }).filter('teamMemberStatus', function() {
	    return function(status) {
	      return ['未接受', ''][status];
	    };
	  }).filter('assetThumbnail', function() {
	    return function(asset) {
	      var ext, pattern, template, url;
	      if (/\.(png|jpg|jpeg|gif|bmp)$/i.test(asset.url)) {
	        url = "/api/project/" + asset.project_id + "/asset/" + (asset.asset_id || asset.id) + "/thumbnail";
	        return url;
	      }
	      pattern = /\.(7z|ai|aif|asf|asp|asx|avi|bmp|cab|chm|css|directory|doc|docx|dwg|eps|exe|fla|gz|htm|html|ico|iso|jpeg|jpg|js|log|md|mid|mov|mp3|mp4|mpg|others|pdf|png|ppt|psd|rar|rm|rtf|swf|tif|txt|wav|xls|xml|zip)$/i;
	      template = "/images/file-extension/file_extension_{0}.png";
	      ext = asset.url && pattern.test(asset.url) ? asset.url.replace(/\.(\w)$/i, '$1') : 'others';
	      return _utils.formatString(template, ext);
	    };
	  }).filter('extensionImage', [
	    '$filter', function($filter) {
	      return function(filename, is_dir) {
	        if (is_dir) {
	          return 'folder';
	        }
	        if ($filter('assetIsPicture')(filename)) {
	          return 'png';
	        }
	        if ($filter('assetIsBundle')(filename)) {
	          return 'zip';
	        }
	        return 'other';
	      };
	    }
	  ]).filter('getAssetThumbnailClass', [
	    '$filter', function($filter) {
	      return function(url) {
	        if ($filter('assetIsPicture')(url)) {
	          return 'thumbnail';
	        } else {
	          return 'extension';
	        }
	      };
	    }
	  ]).filter('assetIsBundle', function() {
	    return function(filename) {
	      return /\.(7z|zip|rar)$/i.test(filename);
	    };
	  }).filter('assetIsDocx', function() {
	    return function(filename) {
	      return /\.(docx)$/i.test(filename);
	    };
	  }).filter('assetIsPicture', function() {
	    return function(url) {
	      return /\.(png|jpg|jpeg|gif|bmp)$/i.test(url);
	    };
	  }).filter('friendlyFileSize', function() {
	    return function(size) {
	      if ((size = size / 1024) < 1024) {
	        return Math.round(size * 100) / 100 + "KB";
	      } else if ((size = size / 1024) < 1024) {
	        return Math.round(size * 100) / 100 + "MB";
	      } else {
	        return Math.round(size * 100 / 1024) / 100 + "GB";
	      }
	    };
	  }).filter('rawText', function() {
	    return function(html) {
	      var div;
	      div = document.createElement('div');
	      div.innerHTML = html;
	      return $(div).text();
	    };
	  }).filter('timeAgo', function() {
	    return function(date) {
	      _moment.lang('zh-cn');
	      return _moment(date).fromNow();
	    };
	  }).filter('dateAgo', function() {
	    return function(date) {
	      var dt;
	      dt = new Date(date);
	      if (new Date().toDateString() === dt.toDateString()) {
	        return '今天';
	      }
	      if (new Date().toDateString() === new Date(date + 24 * 3600 * 1000).toDateString()) {
	        return '昨天';
	      }
	      return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
	    };
	  }).filter('currentProjectVersion', [
	    '$stateParams', function($stateParams) {
	      return function(versions) {
	        var current;
	        if (!versions || !($stateParams != null ? $stateParams.version_id : void 0)) {
	          return '所有版本';
	        }
	        current = _.find(versions, {
	          id: Number($stateParams.version_id)
	        });
	        return (current != null ? current.title : void 0) || '未知版本';
	      };
	    }
	  ]).filter('wikiLink', [
	    '$stateParams', function($stateParams) {
	      return function(data, type) {
	        return ['wiki', $stateParams.project_id].join('/');
	      };
	    }
	  ]).filter('isActiveIssue', [
	    '$stateParams', function($stateParams) {
	      return function(issue) {
	        return $stateParams.issue_id === String(issue.id);
	      };
	    }
	  ]).filter('projectLink', [
	    '$stateParams', '$state', '$location', function($stateParams, $state, $location) {
	      return function(data, type) {
	        var hasCategory, hasVersion, parts, ref;
	        if ($stateParams.team_id && type === 'normal') {
	          return "report/" + $stateParams.team_id;
	        }
	        hasVersion = type === 'issue' || type === 'normal' || type === 'test' || type === 'form';
	        hasCategory = type === 'issue' || type === 'form';
	        if ((ref = $state.current.data) != null ? ref.wiki : void 0) {
	          parts = ['wiki', $stateParams.project_id];
	          if (hasCategory && $stateParams.category_id) {
	            parts.push('category');
	            parts.push($stateParams.category_id);
	          }
	          if (type === 'issue') {
	            parts.push('issue');
	          }
	          return parts.join('/');
	        }
	        parts = [];
	        parts.push('project');
	        parts.push($stateParams.project_id);
	        if (hasVersion && $stateParams.version_id) {
	          parts.push('version');
	          parts.push($stateParams.version_id);
	        }
	        if ((type === 'issue' || type === 'form') && $stateParams.myself) {
	          parts.push('issue');
	          parts.push('myself');
	        }
	        if (type === 'test') {
	          parts.push('test');
	        }
	        if (hasCategory && $stateParams.category_id) {
	          parts.push('category');
	          parts.push($stateParams.category_id);
	        }
	        if ((type === 'issue' || type === 'form') && !$stateParams.myself) {
	          parts.push('issue');
	        }
	        return parts.join('/');
	      };
	    }
	  ]).filter('filenameIsPicture', function() {
	    return function(filename) {
	      var ext;
	      ext = filename.replace(/.+\.(\w+)$/, '$1');
	      return /^(jpg|jpeg|png|gif|bmp)$/i.test(ext);
	    };
	  }).filter('replace', function() {
	    return function(value, from, to) {
	      return value.replace(from, to);
	    };
	  }).filter('replaceWithRegExp', function() {
	    return function(value, from, to) {
	      var reg;
	      reg = new RegExp(from);
	      return value.replace(from, to);
	    };
	  }).filter('lastName', function() {
	    return function(realname) {
	      return realname.substr(0, 1);
	    };
	  }).filter('assetLink', function() {
	    return function(asset, download) {
	      var url;
	      if (!asset) {
	        return;
	      }
	      url = "/api/project/" + asset.project_id + "/asset/" + asset.id + "/read";
	      if (download) {
	        url += '?download=true';
	      }
	      return url;
	    };
	  }).filter('highlightKeyword', function() {
	    return function(text, keyword) {
	      var reg;
	      if (!keyword) {
	        return text;
	      }
	      reg = new RegExp(keyword, 'ig');
	      return text.replace(reg, "<span class='highlight'>" + keyword + "</span>");
	    };
	  }).filter('removeTag', function() {
	    return function(text) {
	      return text && text.replace(/(#.+?#)/ig, '');
	    };
	  }).filter('removeCommand', function() {
	    return function(text) {
	      return text && text.replace(/#p\-\d+/ig, '').replace(/#(doing|done|pause)/, '').replace(/#(.+)/, '');
	    };
	  }).filter('dateOrNow', function() {
	    return function(date) {
	      return date || new Date();
	    };
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(49), __webpack_require__(50), __webpack_require__(54)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(39), __webpack_require__(43), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _moment, _, _utils) {
	  return _module.controllerModule.controller('projectController', [
	    '$rootScope', '$scope', '$routeParams', '$location', '$stateParams', 'API', 'STORE', function($rootScope, $scope, $routeParams, $location, $stateParams, API, STORE) {
	      var projectAPI, projectVersionSelected, updateProject, updateProjectCategory, updateProjectMember, updateProjectVersion;
	      projectAPI = API.project($stateParams.project_id);
	      updateProject = function() {
	        return projectAPI.retrieve().then(function(result) {
	          $scope.project = result;
	          return $rootScope.$broadcast('project:loaded', result);
	        });
	      };
	      updateProjectMember = function() {
	        return projectAPI.member().retrieve().then(function(result) {
	          $scope.projectMember = result;
	          return STORE.projectMemberList.data = result;
	        });
	      };
	      updateProjectCategory = function() {
	        return projectAPI.category().retrieve().then(function(result) {
	          $scope.projectCategory = result;
	          return STORE.projectCategory.data = result;
	        });
	      };
	      updateProjectVersion = function() {
	        return projectAPI.version().retrieve({
	          status: 'available'
	        }).then(function(result) {
	          $scope.projectVersion = result;
	          STORE.projectVersion.data = result;
	          return $rootScope.$broadcast('project:version:loaded', result);
	        });
	      };
	      projectVersionSelected = function(value) {
	        var url;
	        if (value === '-1') {
	          return alert('新建版本的功能暂未发');
	        }
	        url = "/project/" + $stateParams.project_id;
	        if (value !== 'all') {
	          url += "/version/" + value;
	        }
	        url += "/issue";
	        return $scope.$apply(function() {
	          return $location.path(url);
	        });
	      };
	      $scope.user = STORE.user.data;
	      $scope.$on("project:member:request", function() {
	        return updateProjectMember();
	      });
	      $scope.$on("project:category:request", function() {
	        return updateProjectCategory();
	      });
	      $scope.$on("member:creator:toshow", function(event, data) {
	        return $scope.$broadcast("member:creator:show", data);
	      });
	      $scope.$on('dropdown:selected', function(event, type, value) {
	        switch (type) {
	          case 'project:version':
	            return projectVersionSelected(value);
	        }
	      });
	      updateProjectMember();
	      updateProjectCategory();
	      updateProject();
	      return updateProjectVersion();
	    }
	  ]).controller('myProjectController', [
	    '$rootScope', '$scope', '$routeParams', '$location', '$stateParams', 'API', 'STORE', function($rootScope, $scope, $routeParams, $location, $stateParams, API, STORE) {
	      var params, updateProject, updateProjectCategory, updateProjectMember, updateProjectVersion;
	      $scope.myproject = true;
	      $scope.title = "个人中心";
	      updateProjectMember = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).member().retrieve().then(function(result) {
	          $scope.projectMember = result;
	          return STORE.projectMemberList.data = result;
	        });
	      };
	      updateProjectCategory = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).category().retrieve().then(function(result) {
	          $scope.projectCategory = result;
	          return STORE.projectCategory.data = result;
	        });
	      };
	      updateProjectVersion = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).version().retrieve({
	          status: 'available'
	        }).then(function(result) {
	          $scope.projectVersion = result;
	          STORE.projectVersion.data = result;
	          return $rootScope.$broadcast('project:version:loaded', result);
	        });
	      };
	      updateProject = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).retrieve().then(function(result) {
	          return $scope.project = result;
	        });
	      };
	      $scope.$on("project:member:request", function(event, project_id) {
	        return updateProjectMember(project_id);
	      });
	      $scope.$on("project:category:request", function(event, project_id) {
	        return updateProjectCategory(project_id);
	      });
	      $scope.$on("project:version:request", function(event, project_id) {
	        return updateProjectVersion(project_id);
	      });
	      $scope.$on("project:refresh:request", function(event, project_id) {
	        return updateProject(project_id);
	      });
	      params = {
	        pageSize: 9999,
	        myself: true
	      };
	      return API.project().retrieve(params).then(function(result) {
	        return $scope.projects = result;
	      });
	    }
	  ]).controller('myFollowController', [
	    '$rootScope', '$scope', '$routeParams', '$location', '$stateParams', 'API', 'STORE', function($rootScope, $scope, $routeParams, $location, $stateParams, API, STORE) {
	      var params, updateProject, updateProjectCategory, updateProjectMember, updateProjectVersion;
	      $scope.myproject = true;
	      $scope.title = "我的关注";
	      updateProjectMember = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).member().retrieve().then(function(result) {
	          $scope.projectMember = result;
	          return STORE.projectMemberList.data = result;
	        });
	      };
	      updateProjectCategory = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).category().retrieve().then(function(result) {
	          $scope.projectCategory = result;
	          return STORE.projectCategory.data = result;
	        });
	      };
	      updateProjectVersion = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).version().retrieve({
	          status: 'available'
	        }).then(function(result) {
	          $scope.projectVersion = result;
	          STORE.projectVersion.data = result;
	          return $rootScope.$broadcast('project:version:loaded', result);
	        });
	      };
	      updateProject = function(project_id) {
	        if (!project_id) {
	          project_id = $stateParams.project_id;
	        }
	        return API.project(project_id).retrieve().then(function(result) {
	          return $scope.project = result;
	        });
	      };
	      $scope.$on("project:member:request", function(event, project_id) {
	        return updateProjectMember(project_id);
	      });
	      $scope.$on("project:category:request", function(event, project_id) {
	        return updateProjectCategory(project_id);
	      });
	      $scope.$on("project:version:request", function(event, project_id) {
	        return updateProjectVersion(project_id);
	      });
	      $scope.$on("project:refresh:request", function(event, project_id) {
	        return updateProject(project_id);
	      });
	      params = {
	        pageSize: 9999
	      };
	      return API.project().retrieve(params).then(function(result) {
	        return $scope.projects = result;
	      });
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(51), __webpack_require__(52), __webpack_require__(53)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _tmplAll, _tmplEditors) {
	  return _module.directiveModule.directive('projectMenu', [
	    '$rootScope', '$stateParams', 'API', function($rootScope, $stateParams, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-menu', _tmplAll),
	        link: function(scope, element, attrs) {
	          var parts;
	          parts = ['project', $stateParams.project_id];
	          if ($stateParams.version_id) {
	            parts.push('version');
	            parts.push($stateParams.version_id);
	          }
	          scope.baseLink = parts.join('/');
	          API.project($stateParams.project_id).issue().stat().test().retrieve().then(function(result) {
	            return scope.testStat = result;
	          });
	          return scope.onClickInvite = function() {
	            return $rootScope.$broadcast('member:invite:show');
	          };
	        }
	      };
	    }
	  ]).directive('projectMemberDropdown', function() {
	    return {
	      restrict: 'E',
	      replace: true,
	      template: _utils.extractTemplate('#tmpl-project-member-dropdown', _tmplAll),
	      link: function(scope, element, attrs) {
	        var loaded;
	        loaded = false;
	        return attrs.$observe('items', function() {
	          if (loaded || !attrs.items) {
	            return;
	          }
	          return scope.items = _utils.toDyadicArray(JSON.parse(attrs.items), 10);
	        });
	      }
	    };
	  }).directive('projectTiles', [
	    '$location', '$rootScope', '$timeout', '$filter', 'API', 'NOTIFY', 'ENUM', function($location, $rootScope, $timeout, $filter, API, NOTIFY, ENUM) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-project-tiles', _tmplAll),
	        link: function(scope, element, attrs) {
	          var condition, searchProject;
	          condition = {};
	          scope.isLogin = $rootScope.__member.isLogin;
	          scope.onClickCreate = function() {
	            return $rootScope.$broadcast('project:editor:show');
	          };
	          scope.onClickTile = function(event, project) {
	            var url;
	            url = "/project/" + project.id;
	            if (project.active_version) {
	              url += "/version/" + project.active_version;
	            }
	            url += "/issue";
	            if (project.flag === ENUM.projectFlag.wiki) {
	              url = "/wiki/" + project.id + "/issue";
	            }
	            return $location.path(url);
	          };
	          scope.onClickEdit = function(event, project) {
	            event.stopPropagation();
	            $rootScope.$broadcast('project:editor:show', project.id);
	          };
	          scope.onClickFavorite = function(event, project) {
	            var data, method;
	            event.stopPropagation();
	            data = {
	              type: 'project',
	              target_id: project.id
	            };
	            method = project.favorite ? 'delete' : 'create';
	            API.project(project.id).favorite(data)[method](data).then(function() {
	              return searchProject();
	            });
	          };
	          scope.onClickDelete = function(event, project) {
	            event.stopPropagation();
	            if (!confirm('您确定要删除该项目吗？')) {
	              return;
	            }
	            return API.project(project.id).update({
	              status: 'trash'
	            }).then(function() {
	              var $tile;
	              $tile = $(event.target).closest('li.tile');
	              $tile.fadeOut();
	              return NOTIFY.success('该项目已经删除成功');
	            });
	          };
	          scope.$on('instant-search:change', function(event, keyword) {
	            if (condition.keyword === keyword) {
	              return;
	            }
	            return searchProject({
	              keyword: keyword
	            });
	          });
	          scope.$on('project:change', function(event) {
	            return searchProject({
	              keyword: condition.keyword
	            });
	          });
	          searchProject = function(cond) {
	            var params;
	            params = {
	              pageSize: 9999,
	              special: true
	            };
	            condition = _.extend(params, cond);
	            return API.project().retrieve(condition).then(function(result) {
	              scope.projects = result;
	              _.map(result.items, function(item) {
	                return item.finished_rate = item.undone_task_total === item.task_total ? 100 : 100 - item.undone_task_total / item.task_total * 100;
	              });
	              return $timeout((function() {
	                return scope.$emit('project:tile:loaded');
	              }), 0);
	            });
	          };
	          return searchProject();
	        }
	      };
	    }
	  ]).directive('projectTileResize', [
	    function() {
	      return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	          var $element, caculateTiles;
	          $element = $(element);
	          caculateTiles = function() {
	            var $items, boxWidth, margin, numberOfRow, realWidth, tileWidth;
	            $items = $element.find('>li.tile');
	            boxWidth = $element.width();
	            tileWidth = 250;
	            margin = 10;
	            numberOfRow = Math.round(boxWidth / (tileWidth + margin * 2));
	            realWidth = (boxWidth - (margin * numberOfRow * 2) - 10) / numberOfRow;
	            return $items.css({
	              width: realWidth
	            });
	          };
	          $(window).on('onResizeEx', caculateTiles);
	          scope.$on('project:tile:loaded', function() {
	            return caculateTiles();
	          });
	          return scope.$on('$destroy', function() {
	            return $(window).off('onResizeEx', caculateTiles);
	          });
	        }
	      };
	    }
	  ]).directive('projectCategoryMenu', [
	    'STORE', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-menu-category', _tmplAll),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('myProjectMenu', [
	    'STORE', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-my-project-menu', _tmplAll),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('myFollowMenu', [
	    'STORE', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-my-follow-menu', _tmplAll),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('projectCategoryDropdown', [
	    'STORE', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-category-dropdown', _tmplAll),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('projectSalvePanel', [
	    '$stateParams', function($stateParams) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-salve-panel', _tmplAll),
	        link: function(scope, element, attrs) {
	          var _windowChange;
	          _windowChange = function(event, showWindow) {
	            var showWindowFlag;
	            if (showWindow) {
	              showWindowFlag = showWindow;
	            }
	            scope.needchange = (document.body.clientWidth < 1280) && window.location.href.indexOf("weekly-report") > -1;
	            if (!scope.needchange) {
	              scope.leftViewStyle = {
	                'width': '40%',
	                'display': 'block'
	              };
	              scope.rightViewStyle = {
	                'display': 'block'
	              };
	              showWindowFlag = 1;
	              return;
	            }
	            if (showWindowFlag === 1) {
	              scope.leftViewStyle = {
	                'width': '100%'
	              };
	              scope.rightViewStyle = {
	                'display': 'none'
	              };
	              return showWindowFlag = 2;
	            } else if (showWindowFlag === 2) {
	              scope.leftViewStyle = {
	                'display': 'none'
	              };
	              scope.rightViewStyle = {
	                'width': '100%'
	              };
	              return showWindowFlag = 1;
	            }
	          };
	          scope.windowChange = function() {
	            return _windowChange(null, null);
	          };
	          scope.$on("project:window:change", function(event, showWindow) {
	            return _windowChange(event, showWindow);
	          });
	          if ($stateParams.issue_id) {
	            return _windowChange(null, 2);
	          } else {
	            return _windowChange(null, 1);
	          }
	        }
	      };
	    }
	  ]).directive('projectVersionDropdown', [
	    'STORE', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-versions-dropdown', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.showMore = attrs.showMore === 'true';
	        }
	      };
	    }
	  ]).directive('projectMenuHighlight', [
	    '$stateParams', '$location', function($stateParams, $location) {
	      return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('projectMenuBar', [
	    '$rootScope', '$stateParams', function($rootScope, $stateParams) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-menu-bar', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.$on('dropdown:selected', function(event, type, value) {
	            if (type !== 'project:menu:manage') {
	              return;
	            }
	            switch (value) {
	              case 'category':
	                return $rootScope.$broadcast('issue-category:editor:show');
	              case 'version':
	                return $rootScope.$broadcast('project:version:editor:show');
	              case 'project':
	                return $rootScope.$broadcast('project:editor:show', $stateParams.project_id);
	              case 'webhook':
	                return $rootScope.$broadcast('project:webhook:editor:show', $stateParams.project_id);
	            }
	          });
	        }
	      };
	    }
	  ]).directive('projectProcessing', [
	    '$timeout', function($timeout) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attrs) {
	          return $timeout(function() {
	            return Circles.create({
	              id: attrs.domId,
	              radius: 60,
	              value: Math.round(scope.project.finished_rate),
	              maxValue: 100,
	              width: 6,
	              text: function(value) {
	                return value + '%';
	              },
	              colors: ['#2d9ab5', '#FFF'],
	              duration: 60,
	              wrpClass: 'circles-wrp',
	              textClass: 'circles-text'
	            });
	          }, 0);
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 51 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <textarea id=\"tmpl-project-menu\">\n        <div class=\"project-menu\">\n            <ul class=\"master-menu\" project-menu-highlight>\n                <li class=\"myself\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/issue/myself\">我相关的任务</a>\n                        </label>\n                    </div>\n                </li>\n                <li class=\"discussion\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/discussion\">讨论</a>\n                        </label>\n                    </div>\n                </li>\n                <li class=\"test\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/test\">测试专区</a>\n                        </label>\n                        <span class=\"badge small gray stat\">{{testStat.undone || 0}}/{{testStat.all || 0}}</span>\n                    </div>\n                </li>\n                <li class=\"issue-category\">\n                    <div class=\"inner\">\n                        <div class=\"title\">\n                            <i class=\"icon small\"></i>\n                            <label>\n                                <a href=\"/{{baseLink}}/issue\">全部任务</a>\n                            </label>\n                            \n                        </div>\n                        <project-category-menu data-project-id=\"{{project.id}}\"></project-category-menu>\n                    </div>\n                </li>\n                <li class=\"document\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/document\">文档</a>\n                        </label>\n                    </div>\n                </li>\n                <li class=\"asset\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/assets\">素材</a>\n                        </label>\n                    </div>\n                </li>\n                <li class=\"member\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/member\">成员</a>\n                        </label>\n                        <a class=\"invite\" href=\"javascript:void(0)\" title=\"邀请请成员加入此项目\" ng-click=\"onClickInvite($event)\">邀请新成员</a>\n                    </div>\n                </li>\n                <li class=\"commit\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/commit\">Commit</a>\n                        </label>\n                    </div>\n                </li>\n                <li class=\"gitlab\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/gitlab\">Gitlab</a>\n                        </label>\n                    </div>\n                </li>\n                <li class=\"report\" ng-show=\"project.role == 'l'\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/weekly-report\">项目周报</a>\n                        </label>\n                    </div>\n                </li>\n                \n                <li class=\"stat\" ng-hide=\"true\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/stat\">统计</a>\n                        </label>\n                    </div>\n                </li>\n                <li class=\"plugin\" ng-hide=\"true\">\n                    <div class=\"inner\">\n                        <i class=\"icon small\"></i>\n                        <label>\n                            <a href=\"/{{baseLink}}/plugin\">插件</a>\n                        </label>\n                    </div>\n                </li>\n            </ul>\n\n            <project-menu-bar></project-menu-bar>\n            <invite-member></invite-member>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-menu-bar\">\n        <div>\n            <div class=\"menu-bar\">\n                \n\n                <div class=\"setting item\" dropdown data-name=\"project:menu:manage\">\n                    <i class=\"icon\"></i>\n                    <span>管理工具</span>\n                    <div class=\"dropdown dropdown-tip dropdown-up\">\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a data-value=\"project\"><span>项目设置</span></a>\n                            </li>\n                            <li>\n                                <a data-value=\"version\"><span>版本</span></a>\n                            </li>\n                            <li>\n                                <a data-value=\"category\"><span>任务分类</span></a>\n                            </li>\n                            <li>\n                                <a data-value=\"webhook\"><span>Webhook</span></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n            <project-editor></project-editor>\n            <issue-category-editor></issue-category-editor>\n            <project-version-editor></project-version-editor>\n            <project-webhook-editor></project-webhook-editor>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-menu-category\">\n        <ul class=\"sub-menu\">\n            <li ng-repeat=\"item in projectCategory\">\n                <a href=\"/{{item | projectLink: 'normal'}}/category/{{item.id}}/issue?title={{item.title}}\" class=\"text-overflow\">{{item.title}}</a>\n                <span class=\"badge small gray stat\">{{item.issue_undone_total}}/{{item.issue_total}}</span>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-team-menu-category\">\n        <ul class=\"sub-menu\">\n            <li ng-repeat=\"item in projectCategory\">\n                <a href=\"/{{item | projectLink: 'normal'}}/category/{{item.id}}/issue?title={{item.title}}\" class=\"text-overflow\">{{item.title}}</a>\n                <span class=\"badge small gray stat\">{{item.issue_undone_total}}/{{item.issue_total}}</span>\n            </li>\n        </ul>\n    </textarea>   <textarea id=\"tmpl-project-member-dropdown\">\n        <div class=\"dropdown dropdown-tip members\">\n            <ul class=\"dropdown-menu\" ng-repeat=\"array in items\">\n                \n                <li ng-repeat=\"item in array\">\n                    <a data-value=\"{{item.member_id}}\">\n                        {{item.realname}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-category-dropdown\">\n        <div class=\"dropdown dropdown-tip\">\n            <ul class=\"dropdown-menu\">\n                <li ng-repeat=\"item in projectCategory\">\n                    <a data-value=\"{{item.id}}\"><span>{{item.title}}</span></a>\n                </li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-versions-dropdown\">\n        <div class=\"dropdown dropdown-tip\">\n            <ul class=\"dropdown-menu\">\n                <li ng-repeat=\"item in projectVersion\">\n                    <a data-value=\"{{item.id}}\"><span>{{item.title}}</span></a>\n                </li>\n                <li ng-show=\"showMore\">\n                    <a data-value=\"all\"><span>全部版本</span></a>\n                </li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-tiles\">\n        <ul class=\"project-tiles\" project-tile-resize>\n            <li class=\"create tile\" ng-click=\"onClickCreate()\">\n                <i class=\"icon\"></i>\n            </li>\n\n            <li class=\"tile\" ng-repeat=\"project in projects.items\" ng-click=\"onClickTile($event, project)\" ng-class=\"{true: 'favorite'}[project.favorite > 0]\" title=\"{{project.description}}\">\n               <div class=\"title\">\n                   {{project.title}}\n                   <i class=\"icon small favorite\"></i>\n               </div>\n\n               <div class=\"processing\" project-processing data-dom-id=\"project-tile-{{project.id}}\" id=\"project-tile-{{project.id}}\">\n                \n               </div>\n\n               <div class=\"tile-toolbar\">\n                   <div class=\"description\">{{project.description || '无项目说明' | limitTo: 38}}</div>\n                   <ul class=\"menu\">\n                       <li class=\"sub-menu favorite\">\n                           <button class=\"default\" ng-click=\"onClickFavorite($event, project)\">\n                               <i class=\"small icon\"></i>\n                               <span ng-show=\"project.favorite == 0\">收藏</span>\n                               <span ng-show=\"project.favorite > 0\">取消</span>\n                           </button>\n                       </li>\n                       <li class=\"sub-menu edit\" ng-show=\"project.role == 'l'\">\n                           <button class=\"default\" ng-click=\"onClickEdit($event, project)\">\n                            <i class=\"small icon\"></i>\n                               编辑\n                           </button>\n                       </li>\n                       <li class=\"sub-menu remove\" ng-show=\"project.role == 'l'\">\n                           <button class=\"default\" ng-click=\"onClickDelete($event, project)\">\n                               <i class=\"small icon\"></i>\n                               删除\n                           </button>\n                       </li>\n                   </ul>\n               </div>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-project-layout\">\n        <div class=\"frame project-view\">\n            <global-message ng-show=\"false\"></global-message>\n            <header-global data-project=\"project\" data-projectversion=\"{{projectVersion}}\"></header-global>\n            <div class=\"container\">\n                \n                <div class=\"master-panel\">\n                    <project-menu></project-menu>\n                </div>\n                <project-salve-panel></project-salve-panel>\n\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-salve-panel\">\n        <div class=\"salve-panel\">\n            <div class=\"list-panel\" ui-view=\"listPanel\" ng-style=\"leftViewStyle\"></div>\n         \n            <div class=\"details-panel full\" ui-view=\"detailsPanel\" ng-style=\"rightViewStyle\"></div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-my-project-layout\">\n        <div class=\"frame project-view team-view portal\">\n            <global-message ng-show=\"false\"></global-message>\n            <header-global></header-global>\n            <div class=\"container\">\n                \n                <div class=\"master-panel\">\n                    \n                    <div class=\"project-menu\">\n                        <ul class=\"master-menu\" project-menu-highlight>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a href=\"/myproject/all/issue/myself?title=我的所有任务\">所有任务</a>\n                                        </label>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a>我的项目</a>\n                                        </label>\n                                    </div>\n                                    <div ng-show=\"projects.items.length == 0\" class=\"empty ng-binding\">\n                                        尚未参加任何项目\n                                    </div>\n                                    <my-project-menu></my-project-menu>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <project-salve-panel></project-salve-panel>\n            </div>\n        </div>\n    </textarea> <textarea id=\"tmpl-my-project-menu\">\n        <ul class=\"sub-menu\">\n            <li ng-repeat=\"item in projects.items\">\n                <a title=\"{{item.title}}\" href=\"/myproject/{{item.id}}/issue/myself?title={{item.title}}\" class=\"text-overflow\">\n                    {{item.title}}\n                </a>\n                <span class=\"badge small gray stat\">{{item.undone_task_total}}/{{item.task_total}}</span>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-my-follow-layout\">\n        <div class=\"frame project-view team-view\">\n            <global-message ng-show=\"false\"></global-message>\n            <header-global></header-global>\n            <div class=\"container\">\n                \n                <div class=\"master-panel\">\n                    \n                    <div class=\"project-menu\">\n                        <ul class=\"master-menu\" project-menu-highlight>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a href=\"/myfollow/all/issue/follow?title=我的关注\">所有关注</a>\n                                        </label>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a>我的项目</a>\n                                        </label>\n                                    </div>\n                                    <div ng-show=\"projects.items.length == 0\" class=\"empty ng-binding\">\n                                        尚未参加任何项目\n                                    </div>\n                                    <my-follow-menu></my-follow-menu>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n                <project-salve-panel></project-salve-panel>\n            </div>\n        </div>\n    </textarea> <textarea id=\"tmpl-my-follow-menu\">\n        <ul class=\"sub-menu\">\n            <li ng-repeat=\"item in projects.items\">\n                <a class=\"text-overflow wide\" href=\"/myfollow/{{item.id}}/issue/follow?title={{item.title}}\" class=\"text-overflow\">{{item.title}}</a>\n            </li>\n        </ul>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("project-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 52 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>   <textarea id=\"tmpl-project-editor\">\n        <div class=\"modal project-editor\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <header>\n                    {{editor_title}}项目\n                </header>\n                <section>\n                    <form class=\"standard-form\">\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                项目名称\n                            </label>\n                            <input class=\"medium text\" type=\"text\" ng-model=\"data.title\" maxlength=\"40\"/>\n                        </div>\n\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                摘要说明\n                            </label>\n\n                            \n                            &lt;textarea class=\"medium text\" placeholder=\"简单描述项目\" ng-model=\"data.description\">{{data.description}}&lt;/textarea>\n                        </div>\n\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                项目状态\n                            </label>\n                            <div class=\"inline\">\n                                <label>\n                                    <input type=\"radio\" value=\"active\" name=\"status\" ng-model=\"data.status\"/> 活动\n                                </label>\n\n                                <label>\n                                    <input type=\"radio\" value=\"archive\" name=\"status\" ng-model=\"data.status\"/> 存档\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                访问级别\n                            </label>\n                            <div class=\"inline\">\n                                <label>\n                                    <input type=\"radio\" value=\"0\" name=\"visibility_level\" ng-model=\"data.visibility_level\"/> 私有\n                                </label>\n\n                                <label>\n                                    <input type=\"radio\" value=\"10\" name=\"visibility_level\" ng-model=\"data.visibility_level\"/> 团队内\n                                </label>\n                                <label>\n                                    <input type=\"radio\" value=\"20\" name=\"visibility_level\" ng-model=\"data.visibility_level\"/> 公开\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class=\"row control\">\n                            <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                            <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                            <button class=\"delete default\" ng-click=\"onClickDelete()\" ng-show=\"data.id\">删除</button>\n                        </div>\n                    </form>\n                </section>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-category-editor\">\n        <div class=\"modal issue-category-editor\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <header>\n                    任务分类管理\n                </header>\n                <section>\n                    <form class=\"standard-form\">\n                        <div class=\"row\">\n                            <table class=\"standard-table full simple-line\">\n                                <tr ng-repeat=\"item in category\">\n                                    <td>{{item.title}}</td>\n                                    <td>{{item.short_title}}</td>\n                                    <td>{{item.issue_undone_total}}/{{item.issue_total}}</td>\n                                    <td class=\"right\">\n                                        <a href=\"javascript:void(0)\" ng-click=\"onClickEdit($event, item)\">编辑</a> |\n                                        <a href=\"javascript:void(0)\" ng-click=\"onClickDelete($event, item)\">删除</a>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                分类名称\n                            </label>\n                            <input class=\"medium text\" type=\"text\" ng-model=\"editModel.title\" maxlength=\"20\"/>\n                        </div>\n\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                别名\n                            </label>\n                            <input class=\"medium text\" type=\"text\" ng-model=\"editModel.short_title\" maxlength=\"10\" placeholder=\"别名用于git commit指令指定分类用\"/>\n                        </div>\n                        <div class=\"row control\">\n                            <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                            <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                        </div>\n                    </form>\n                </section>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-version-editor\">\n        <div class=\"modal project-version-editor\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <header>\n                    版本管理\n                </header>\n                <section>\n                    <table class=\"standard-table full simple-line\">\n                        <thead>\n                        <tr class=\"left\">\n                            <th>名称</th>\n                            <th>别名</th>\n                            <th>状态</th>\n                            <th class=\"right\">操作</th>\n                        </tr>\n                        </thead>\n                        <tr ng-repeat=\"item in version\">\n                            <td>{{item.title}}</td>\n                            <td>{{item.short_title}}</td>\n                            <td class=\"status {{item.status}}\">{{item.status}}</td>\n                            <td class=\"right\">\n                                <span ng-show=\"item.status == 'deactive'\">\n                                    <a href=\"javascript:void(0)\" title=\"存档后，将不会显示在版本列表中\" ng-click=\"onChangeStatus($event, item, 'archive')\">存档</a> |\n                                </span>\n\n                                <span ng-show=\"item.status == 'deactive'\">\n                                    <a href=\"javascript:void(0)\" title=\"将此版本设置为活动版本\" ng-click=\"onChangeStatus($event, item, 'active')\">激活</a> |\n                                </span>\n\n                                <a href=\"javascript:void(0)\" ng-click=\"onClickEdit($event, item)\">编辑</a> |\n                                <a href=\"javascript:void(0)\" ng-click=\"onClickDelete($event, item)\">删除</a>\n                            </td>\n                        </tr>\n                    </table>\n                    <form class=\"standard-form\">\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                版本名称\n                            </label>\n                            <input class=\"medium text\" type=\"text\" ng-model=\"editModel.title\" maxlength=\"20\"/>\n                        </div>\n\n                        \n\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                别名\n                            </label>\n                            <input class=\"medium text\" type=\"text\" ng-model=\"editModel.short_title\" maxlength=\"5\" placeholder=\"用于git commit，建议英文或者数字\"/>\n                        </div>\n                        <div class=\"row control\">\n                            <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                            <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                        </div>\n                    </form>\n                </section>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-webhook-editor\">\n        <div class=\"modal project-webhook-editor\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <header>\n                    webhook管理\n                </header>\n                <section>\n                    <table class=\"standard-table full simple-line\">\n                        <thead>\n                        <tr class=\"left\">\n                            <th>类型</th>\n                            <th>URL</th>\n                            <th class=\"right\">操作</th>\n                        </tr>\n                        </thead>\n                        <tr ng-repeat=\"item in webhook\">\n                            <td>{{item.trigger}}</td>\n                            <td>{{item.url}}</td>\n                            <td class=\"right\">\n                                <a href=\"javascript:void(0)\" ng-click=\"onClickEdit($event, item)\">编辑</a> |\n                                <a href=\"javascript:void(0)\" ng-click=\"onClickDelete($event, item)\">删除</a>\n                            </td>\n                        </tr>\n                        <tr ng-if=\"webhook.length == 0\">\n                            <td colspan=\"4\">暂无webhook</td>\n                        </tr>\n                    </table>\n                    <form class=\"standard-form\">\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                类型\n                            </label>\n                            issue<input type=\"radio\" name=\"trigger\" value=\"issue\" ng-model=\"editModel.trigger\"/>\n                            comment<input type=\"radio\" name=\"trigger\" value=\"comment\" ng-model=\"editModel.trigger\"/>\n                            mention<input type=\"radio\" name=\"trigger\" value=\"mention\" ng-model=\"editModel.trigger\"/>\n                        </div>\n\n\n                        <div class=\"row\">\n                            <label class=\"caption\">\n                                URL\n                            </label>\n                            <input class=\"medium text\" type=\"text\" ng-model=\"editModel.url\" placeholder=\"\"/>\n                        </div>\n                        <div class=\"row control\">\n                            <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                            <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                        </div>\n                    </form>\n                </section>\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("project-editors.html",v1)}]);
	module.exports=v1;

/***/ },
/* 53 */
/***/ function(module, exports) {

	// circles
	// copyright Artan Sinani
	// https://github.com/lugolabs/circles

	/*
	 Lightwheight JavaScript library that generates circular graphs in SVG.

	 Call Circles.create(options) with the following options:

	 id         - the DOM element that will hold the graph
	 radius     - the radius of the circles
	 width      - the width of the ring (optional, has value 10, if not specified)
	 value      - init value of the circle (optional, defaults to 0)
	 maxValue   - maximum value of the circle (optional, defaults to 100)
	 text       - the text to display at the centre of the graph (optional, the current "htmlified" value will be shown if not specified)
	 if `null` or an empty string, no text will be displayed
	 can also be a function: the returned value will be the displayed text
	 ex1. function(currentValue) {
	 return '$'+currentValue;
	 }
	 ex2.  function() {
	 return this.getPercent() + '%';
	 }
	 colors     - an array of colors, with the first item coloring the full circle
	 (optional, it will be `['#EEE', '#F00']` if not specified)
	 duration   - value in ms of animation duration; (optional, defaults to 500);
	 if 0 or `null` is passed, the animation will not run
	 wrpClass     - class name to apply on the generated element wrapping the whole circle.
	 textClass:   - class name to apply on the generated element wrapping the text content.

	 API:
	 updateRadius(radius) - regenerates the circle with the given radius (see spec/responsive.html for an example hot to create a responsive circle)
	 updateWidth(width) - regenerates the circle with the given stroke width
	 updateColors(colors) - change colors used to draw the circle
	 update(value, duration) - update value of circle. If value is set to true, force the update of displaying
	 getPercent() - returns the percentage value of the circle, based on its current value and its max value
	 getValue() - returns the value of the circle
	 getMaxValue() - returns the max value of the circle
	 getValueFromPercent(percentage) - returns the corresponding value of the circle based on its max value and given percentage
	 htmlifyNumber(number, integerPartClass, decimalPartClass) - returned HTML representation of given number with given classes names applied on tags

	 */

	(function() {

	    var requestAnimFrame = window.requestAnimationFrame       ||
	            window.webkitRequestAnimationFrame ||
	            window.mozRequestAnimationFrame    ||
	            window.oRequestAnimationFrame      ||
	            window.msRequestAnimationFrame     ||
	            function (callback) {
	                setTimeout(callback, 1000 / 60);
	            },

	        Circles = window.Circles = function(options) {
	            var elId = options.id;
	            this._el = document.getElementById(elId);

	            if (this._el === null) return;

	            this._radius         = options.radius || 10;
	            this._duration       = options.duration === undefined ? 500 : options.duration;

	            this._value           = 0;
	            this._maxValue       = options.maxValue || 100;

	            this._text           = options.text === undefined ? function(value){return this.htmlifyNumber(value);} : options.text;
	            this._strokeWidth    = options.width  || 10;
	            this._colors         = options.colors || ['#EEE', '#F00'];
	            this._svg            = null;
	            this._movingPath     = null;
	            this._wrapContainer  = null;
	            this._textContainer  = null;

	            this._wrpClass       = options.wrpClass || 'circles-wrp';
	            this._textClass      = options.textClass || 'circles-text';

	            var endAngleRad      = Math.PI / 180 * 270;
	            this._start          = -Math.PI / 180 * 90;
	            this._startPrecise   = this._precise(this._start);
	            this._circ           = endAngleRad - this._start;

	            this._generate().update(options.value || 0);
	        };

	    Circles.prototype = {
	        VERSION: '0.0.5',

	        _generate: function() {

	            this._svgSize        = this._radius * 2;
	            this._radiusAdjusted = this._radius - (this._strokeWidth / 2);

	            this._generateSvg()._generateText()._generateWrapper();

	            this._el.innerHTML = '';
	            this._el.appendChild(this._wrapContainer);

	            return this;
	        },

	        _setPercentage: function(percentage) {
	            this._movingPath.setAttribute('d', this._calculatePath(percentage, true));
	            this._textContainer.innerHTML	=	this._getText(this.getValueFromPercent(percentage));
	        },

	        _generateWrapper: function() {
	            this._wrapContainer	=	document.createElement('div');
	            this._wrapContainer.className = this._wrpClass;
	            this._wrapContainer.style.position	=	'relative';
	            this._wrapContainer.style.display	=	'inline-block';

	            this._wrapContainer.appendChild(this._svg);
	            this._wrapContainer.appendChild(this._textContainer);

	            return this;
	        },

	        _generateText: function() {

	            this._textContainer = document.createElement('div');
	            this._textContainer.className = this._textClass;

	            var style	=	{
	                position:   'absolute',
	                top:        0,
	                left:       0,
	                textAlign:  'center',
	                width:      '100%',
	                fontSize:   (this._radius * .7) + 'px',
	                height:     this._svgSize + 'px',
	                lineHeight: this._svgSize + 'px'
	            };

	            for(var prop in style) {
	                this._textContainer.style[prop]	=	style[prop];
	            }

	            this._textContainer.innerHTML	=	this._getText(0);
	            return this;
	        },

	        _getText: function(value) {
	            if (!this._text) return '';

	            if (value === undefined) value = this._value;

	            value = parseFloat(value.toFixed(2));

	            return typeof this._text === 'function' ? this._text.call(this, value) : this._text;
	        },

	        _generateSvg: function() {

	            this._svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	            this._svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	            this._svg.setAttribute('width', this._svgSize);
	            this._svg.setAttribute('height', this._svgSize);

	            this._generatePath(100, false, this._colors[0])._generatePath(1, true, this._colors[1]);

	            this._movingPath = this._svg.getElementsByTagName('path')[1];

	            return this;
	        },

	        _generatePath: function(percentage, open, color) {
	            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	            path.setAttribute('fill', 'transparent');
	            path.setAttribute('stroke', color);
	            path.setAttribute('stroke-width', this._strokeWidth);
	            path.setAttribute('d',  this._calculatePath(percentage, open));

	            this._svg.appendChild(path);

	            return this;
	        },

	        _calculatePath: function(percentage, open) {
	            var end      = this._start + ((percentage / 100) * this._circ),
	                endPrecise = this._precise(end);
	            return this._arc(endPrecise, open);
	        },

	        _arc: function(end, open) {
	            var endAdjusted = end - 0.001,
	                longArc       = end - this._startPrecise < Math.PI ? 0 : 1;

	            return [
	                'M',
	                    this._radius + this._radiusAdjusted * Math.cos(this._startPrecise),
	                    this._radius + this._radiusAdjusted * Math.sin(this._startPrecise),
	                'A', // arcTo
	                this._radiusAdjusted, // x radius
	                this._radiusAdjusted, // y radius
	                0, // slanting
	                longArc, // long or short arc
	                1, // clockwise
	                    this._radius + this._radiusAdjusted * Math.cos(endAdjusted),
	                    this._radius + this._radiusAdjusted * Math.sin(endAdjusted),
	                open ? '' : 'Z' // close
	            ].join(' ');
	        },

	        _precise: function(value) {
	            return Math.round(value * 1000) / 1000;
	        },

	        /*== Public methods ==*/

	        htmlifyNumber: function(number, integerPartClass, decimalPartClass) {

	            integerPartClass = integerPartClass || 'circles-integer';
	            decimalPartClass = decimalPartClass || 'circles-decimals';

	            var parts = (number + '').split('.'),
	                html  = '<span class="' + integerPartClass + '">' + parts[0]+'</span>';

	            if (parts.length > 1) {
	                html += '.<span class="' + decimalPartClass + '">' + parts[1].substring(0, 2) + '</span>';
	            }
	            return html;
	        },

	        updateRadius: function(radius) {
	            this._radius = radius;

	            return this._generate().update(true);
	        },

	        updateWidth: function(width) {
	            this._strokeWidth = width;

	            return this._generate().update(true);
	        },

	        updateColors: function(colors) {
	            this._colors = colors;

	            var paths = this._svg.getElementsByTagName('path');

	            paths[0].setAttribute('stroke', colors[0]);
	            paths[1].setAttribute('stroke', colors[1]);

	            return this;
	        },

	        getPercent: function() {
	            return (this._value * 100) / this._maxValue;
	        },

	        getValueFromPercent: function(percentage) {
	            return (this._maxValue * percentage) / 100;
	        },

	        getValue: function()
	        {
	            return this._value;
	        },

	        getMaxValue: function()
	        {
	            return this._maxValue;
	        },

	        update: function(value, duration) {
	            if (value === true) {//Force update with current value
	                this._setPercentage(this.getPercent());
	                return this;
	            }

	            if (this._value == value || isNaN(value)) return this;
	            if (duration === undefined) duration = this._duration;

	            var self          = this,
	                oldPercentage = self.getPercent(),
	                delta         = 1,
	                newPercentage, isGreater, steps, stepDuration;

	            this._value = Math.min(this._maxValue, Math.max(0, value));

	            if (!duration) {//No duration, we can't skip the animation
	                this._setPercentage(this.getPercent());
	                return this;
	            }

	            newPercentage   = self.getPercent();
	            isGreater       = newPercentage > oldPercentage;

	            delta           += newPercentage % 1; //If new percentage is not an integer, we add the decimal part to the delta
	            steps           = Math.floor(Math.abs(newPercentage - oldPercentage) / delta);
	            stepDuration    = duration / steps;


	            (function animate(lastFrame) {
	                if (isGreater)
	                    oldPercentage += delta;
	                else
	                    oldPercentage -= delta;

	                if ((isGreater && oldPercentage >= newPercentage) || (!isGreater && oldPercentage <= newPercentage))
	                {
	                    requestAnimFrame(function(){ self._setPercentage(newPercentage); });
	                    return;
	                }

	                requestAnimFrame(function() { self._setPercentage(oldPercentage); });

	                var now     = Date.now(),
	                    deltaTime = now - lastFrame;

	                if (deltaTime >= stepDuration) {
	                    animate(now);
	                } else {
	                    setTimeout(function() {
	                        animate(Date.now());
	                    }, stepDuration - deltaTime);
	                }

	            })(Date.now());

	            return this;
	        }
	    };

	    Circles.create = function(options) {
	        return new Circles(options);
	    };
	})();


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(52)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _tmplEditors) {
	  return _module.directiveModule.directive('projectEditor', [
	    '$rootScope', '$location', 'API', 'NOTIFY', function($rootScope, $location, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-project-editor', _tmplEditors),
	        link: function(scope, element, attrs) {
	          var $element, loadProject;
	          $element = $(element);
	          loadProject = function(project_id) {
	            var params;
	            params = {
	              get_role: true
	            };
	            return API.project(project_id).retrieve(params);
	          };
	          scope.onClickDelete = function(event, project_id) {
	            if (!confirm('您确定将要删除这个项目吗？')) {
	              return;
	            }
	            return API.project(project_id).update({
	              status: 'trash'
	            }).then(function() {
	              $.modal.close();
	              return NOTIFY.success('删除成功，刷新项目列表（功能未开发）');
	            });
	          };
	          scope.onClickSave = function() {
	            var method;
	            if (!scope.data.title) {
	              return NOTIFY.error('项目名称必需输入');
	            }
	            method = scope.data.id ? 'update' : 'create';
	            return API.project(scope.data.id)[method](scope.data).then(function(result) {
	              NOTIFY.success('项目信息保存成功');
	              $.modal.close();
	              return $rootScope.$broadcast('project:change', method, scope.data.id || result.id);
	            });
	          };
	          scope.onClickCancel = function() {
	            $.modal.close();
	            return false;
	          };
	          scope.$on("project:editor:show", function(event, project_id) {
	            scope.editor_title = '新建';
	            scope.contextName = 'project';
	            scope.data = {
	              status: 'active'
	            };
	            if (!project_id) {
	              return $element.modal({
	                showClose: false
	              });
	            }
	            return loadProject(project_id).then(function(result) {
	              if (result.role !== 'l') {
	                return NOTIFY.error('您没有权限修改此项目');
	              }
	              scope.editor_title = '编辑';
	              scope.data = {
	                id: result.id,
	                title: result.title,
	                description: result.description,
	                visibility_level: result.visibility_level,
	                status: result.status
	              };
	              return $element.modal({
	                showClose: false
	              });
	            });
	          });
	          return scope.$on('project:editor:hide', function() {
	            return $model.close();
	          });
	        }
	      };
	    }
	  ]).directive('issueCategoryEditor', [
	    '$stateParams', '$location', 'API', 'NOTIFY', function($stateParams, $location, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-issue-category-editor', _tmplEditors),
	        link: function(scope, element, attrs) {
	          var $element, loadIssueCategory, projectAPI;
	          scope.editModel = {};
	          projectAPI = API.project($stateParams.project_id);
	          $element = $(element);
	          loadIssueCategory = function(cb) {
	            return projectAPI.category().retrieve().then(function(result) {
	              scope.category = result;
	              return typeof cb === "function" ? cb() : void 0;
	            });
	          };
	          scope.onClickSave = function() {
	            var method, short_title;
	            if (!scope.editModel.title) {
	              NOTIFY.warn('分类名称必需输入');
	              return;
	            }
	            short_title = scope.editModel.short_title;
	            if (short_title && !/^[\w\d_]+$/i.test(short_title)) {
	              NOTIFY.warn('别名只能是英文数字和下划线');
	              return;
	            }
	            method = scope.editModel.id ? 'update' : 'create';
	            return projectAPI.category(scope.editModel.id)[method](scope.editModel).then(function() {
	              NOTIFY.success('分类保存成功');
	              loadIssueCategory();
	              return scope.editModel = {};
	            });
	          };
	          scope.onClickDelete = function(event, data) {
	            if (!confirm('您确定要删除这个分类么？')) {
	              return;
	            }
	            return projectAPI.category(data.id)["delete"]().then(function() {
	              NOTIFY.success('删除分类成功');
	              loadIssueCategory();
	              if (scope.editModel.id === data.id) {
	                return scope.editModel = {};
	              }
	            });
	          };
	          scope.onClickEdit = function(event, data) {
	            scope.editModel = _.pick(data, 'id', 'title', 'short_title');
	          };
	          scope.onClickCancel = function() {
	            $.modal.close();
	          };
	          scope.$on('issue-category:editor:show', function(event) {
	            return loadIssueCategory(function() {
	              return $element.modal({
	                showClose: false
	              });
	            });
	          });
	          return scope.$on('issue-category:editor.hide', function() {
	            return $.modal.close();
	          });
	        }
	      };
	    }
	  ]).directive('projectVersionEditor', [
	    '$stateParams', '$location', 'API', 'NOTIFY', function($stateParams, $location, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-project-version-editor', _tmplEditors),
	        link: function(scope, element, attrs) {
	          var $element, loadProjectVersion, projectAPI;
	          scope.editModel = {};
	          projectAPI = API.project($stateParams.project_id);
	          $element = $(element);
	          loadProjectVersion = function(cb) {
	            return projectAPI.version().retrieve().then(function(result) {
	              scope.version = result;
	              return typeof cb === "function" ? cb() : void 0;
	            });
	          };
	          scope.onClickSave = function() {
	            var method, short_title;
	            if (!scope.editModel.title) {
	              NOTIFY.warn('版本名称必需输入');
	              return;
	            }
	            short_title = scope.editModel.short_title;
	            if (short_title && !/^[\w\d_]+$/i.test(short_title)) {
	              NOTIFY.warn('别名只能是英文数字和下划线');
	              return;
	            }
	            method = scope.editModel.id ? 'update' : 'create';
	            return projectAPI.version(scope.editModel.id)[method](scope.editModel).then(function() {
	              NOTIFY.success('版本保存成功');
	              loadProjectVersion();
	              return scope.editModel = {};
	            });
	          };
	          scope.onChangeStatus = function(event, data, status) {
	            projectAPI.version(data.id).update({
	              status: status
	            }).then(function() {});
	            NOTIFY.success('状态修改成功');
	            return loadProjectVersion();
	          };
	          scope.onClickDelete = function(event, data) {
	            if (!confirm('您确定要删除这个版本么？')) {
	              return;
	            }
	            return projectAPI.version(data.id)["delete"]().then(function() {
	              NOTIFY.success('删除版本成功');
	              loadProjectVersion();
	              if (scope.editModel.id === data.id) {
	                return scope.editModel = {};
	              }
	            });
	          };
	          scope.onClickEdit = function(event, data) {
	            scope.editModel = _.pick(data, 'id', 'title', 'short_title', 'status');
	          };
	          scope.onClickCancel = function() {
	            $.modal.close();
	          };
	          scope.$on('project:version:editor:show', function(event) {
	            return loadProjectVersion(function() {
	              return $element.modal({
	                showClose: false
	              });
	            });
	          });
	          return scope.$on('project:version:editor.hide', function() {
	            return $.modal.close();
	          });
	        }
	      };
	    }
	  ]).directive('projectWebhookEditor', [
	    '$stateParams', '$location', 'API', 'NOTIFY', function($stateParams, $location, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-project-webhook-editor', _tmplEditors),
	        link: function(scope, element, attrs) {
	          var $element, loadProjectWebhook, projectAPI;
	          scope.editModel = {
	            trigger: 'issue'
	          };
	          projectAPI = API.project($stateParams.project_id);
	          $element = $(element);
	          loadProjectWebhook = function(cb) {
	            return projectAPI.webhook().retrieve().then(function(result) {
	              scope.webhook = result;
	              return typeof cb === "function" ? cb() : void 0;
	            });
	          };
	          scope.onClickSave = function() {
	            var method;
	            if (!scope.editModel.url) {
	              return NOTIFY.warn('必须输入URL');
	            }
	            method = scope.editModel.id ? 'update' : 'create';
	            return projectAPI.webhook(scope.editModel.id)[method](scope.editModel).then(function() {
	              NOTIFY.success('保存成功');
	              loadProjectWebhook();
	              return scope.editModel = {
	                trigger: 'issue'
	              };
	            });
	          };
	          scope.onClickEdit = function(event, data) {
	            return scope.editModel = _.pick(data, 'id', 'trigger', 'url');
	          };
	          scope.onClickDelete = function(event, data) {
	            if (!confirm('您确定要删除么？')) {
	              return;
	            }
	            return projectAPI.webhook(data.id)["delete"]().then(function() {
	              NOTIFY.success('删除成功');
	              loadProjectWebhook();
	              if (scope.editModel.id === data.id) {
	                return scope.editModel = {};
	              }
	            });
	          };
	          scope.onClickCancel = function() {
	            $.modal.close();
	          };
	          return scope.$on('project:webhook:editor:show', function(event) {
	            return loadProjectWebhook(function() {
	              return $element.modal({
	                showClose: false
	              });
	            });
	          });
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(56), __webpack_require__(60), __webpack_require__(61), __webpack_require__(63)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(57), __webpack_require__(58)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _template, _templateForm) {
	  return _module.directiveModule.directive('issueListCell', [
	    '$rootScope', '$location', '$filter', 'API', function($rootScope, $location, $filter, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-list-cell', _template),
	        link: function(scope, element, attrs) {
	          scope.onClickIssue = function(event, issue) {
	            var baseUrl;
	            if ($location.$$url.indexOf("/myproject/") > -1) {
	              $location.path($location.$$url.split('?')[0].split("/myself")[0] + "/myself/" + issue.id);
	            } else if ($location.$$url.indexOf("/myfollow/") > -1) {
	              $location.path($location.$$url.split('?')[0].split("/follow")[0] + "/follow/" + issue.id);
	            } else {
	              baseUrl = $filter('projectLink')(issue, issue.tag);
	              $location.path(baseUrl + "/" + issue.id);
	            }
	            return scope.$emit("project:window:change", 2);
	          };
	          scope.onClickStatus = function(event, issue) {
	            scope.$emit('issue:status-dropdown:show', event, issue);
	          };
	          scope.getDelayClass = function(issue) {
	            if (issue.plan_finish_time && issue.status !== 'done' && issue.plan_finish_time < new Date().valueOf()) {
	              return 'delay';
	            } else {
	              return '';
	            }
	          };
	          return scope.$on('dropdown:selected', function(event, type, value) {
	            if (type !== 'issue:status') {
	              return;
	            }
	            return API.project(scope.issue.project_id).issue(scope.issue.id).update({
	              status: value
	            }).then(function() {
	              return scope.$emit('issue:change', 'status', scope.issue.id);
	            });
	          });
	        }
	      };
	    }
	  ]).directive('issuePriorityDropdown', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-priority-dropdown', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('issueStatusDropdown', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-issue-status-dropdown', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('issueSplitStatusDropdown', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-issue-status-dropdown', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('issueStatusDropdownAction', [
	    function() {
	      return {
	        restrict: 'A',
	        replace: false,
	        link: function(scope, element, attrs) {
	          var $dropdown, currentIssue, initDropdown, statusVisibility;
	          $dropdown = null;
	          currentIssue = null;
	          scope.$on('issue:status-dropdown:show', function(ngEvent, event, issue) {
	            var $this, position;
	            event.stopPropagation();
	            currentIssue = issue;
	            statusVisibility(issue);
	            $this = $(event.target);
	            position = $this.position();
	            position.top += $this.height();
	            position.left -= 6;
	            $dropdown.css(position).fadeIn();
	            $('body').one('click', function() {
	              return $dropdown.fadeOut();
	            });
	          });
	          initDropdown = function() {
	            if ($dropdown) {
	              return;
	            }
	            $dropdown = $(element).find('div.dropdown.status');
	            $dropdown.bind('mouseleave', function() {
	              return $dropdown.fadeOut();
	            });
	            return $dropdown.find('a').bind('click', function() {
	              var $this, type, value;
	              $this = $(this);
	              value = $this.attr('data-value');
	              type = currentIssue.issue_id != null;
	              return scope.$emit('issue:status:change', currentIssue.id, currentIssue.status, value, type);
	            });
	          };
	          return statusVisibility = function(issue) {
	            var displayRules, isTest, ref, ref1;
	            isTest = issue.tag === 'test';
	            displayRules = {
	              doing: true,
	              pause: issue.status !== 'done',
	              repaired: isTest && issue.status === 'repairing',
	              repairing: isTest && ((ref = issue.status) === 'doing' || ref === 'reviewing' || ref === 'repaired'),
	              reviewing: isTest && ((ref1 = issue.status) === 'doing' || ref1 === 'repairing' || ref1 === 'repaired'),
	              done: !isTest && issue.status !== 'done',
	              reviewed: isTest && issue.status === 'reviewing'
	            };
	            initDropdown();
	            return $dropdown.find('li').each(function() {
	              var $this, value;
	              $this = $(this);
	              value = $this.attr('data-status');
	              return $this.toggle(displayRules[value]);
	            });
	          };
	        }
	      };
	    }
	  ]).directive('issueQuickEditor', [
	    '$rootScope', '$state', '$stateParams', '$location', '$timeout', 'API', 'NOTIFY', function($rootScope, $state, $stateParams, $location, $timeout, API, NOTIFY) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attrs) {
	          var gotoIssue, titleMap;
	          titleMap = {
	            issue: '任务',
	            document: '文档',
	            discussion: '讨论',
	            test: '测试'
	          };
	          gotoIssue = function(issue_id) {
	            var url;
	            url = $location.$$path.replace(/(.+)(\/\d+)$/, '$1') + '/' + issue_id;
	            $location.path(url);
	            return $timeout((function() {
	              return $rootScope.$broadcast('issue:editor:show');
	            }), 1000);
	          };
	          scope.onKeyDown = function(event) {
	            var data, text;
	            if (event.keyCode !== 13) {
	              return;
	            }
	            text = _utils.trim(event.target.value);
	            if (!text) {
	              return;
	            }
	            data = {
	              tag: attrs.tag,
	              title: text,
	              category_id: $stateParams.category_id,
	              version_id: $stateParams.version_id
	            };
	            return API.project(scope.project.id).issue().create(data).then(function(result) {
	              NOTIFY.success("创建" + titleMap[attrs.tag] + "成功");
	              event.target.value = null;
	              scope.$emit('issue:change', {
	                status: 'new',
	                tag: attrs.tag,
	                id: result.id
	              });
	              return gotoIssue(result.id);
	            });
	          };
	          return scope.createForm = function(form) {
	            form = $stateParams.category_id;
	            return scope.$broadcast('issue:form:show', -1, form);
	          };
	        }
	      };
	    }
	  ]).directive('issueLog', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-issue-log', _template),
	        link: function(scope, element, attrs) {
	          return API.project($stateParams.project_id).issue($stateParams.issue_id).log().retrieve().then(function(result) {
	            return scope.logs = result.items;
	          });
	        }
	      };
	    }
	  ]).directive('issueTagDropdown', [
	    '$stateParams', 'API', 'NOTIFY', function($stateParams, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-tag-dropdown', _template),
	        link: function(scope, element, attrs) {
	          return scope.$on('dropdown:selected', function(event, type, value) {
	            if (type !== 'issue:tag') {
	              return;
	            }
	            return API.project($stateParams.project_id).issue($stateParams.issue_id).update({
	              tag: value
	            }).then(function() {
	              return NOTIFY.success("修改成功");
	            });
	          });
	        }
	      };
	    }
	  ]).directive('issuePlainList', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          title: '@',
	          emptyMemo: '@',
	          showDetails: '@',
	          needPagination: "@",
	          uuid: "@"
	        },
	        template: _utils.extractTemplate('#tmpl-issue-plain-list', _template),
	        link: function(scope, element, attrs) {
	          scope.emptyMemo = scope.emptyMemo || (scope.title + "的任务为空");
	          scope.onClickToggle = function() {
	            return scope.showDetails = !scope.showDetails;
	          };
	          return attrs.$observe('source', function() {
	            if (!attrs.source) {
	              return;
	            }
	            return scope.source = JSON.parse(attrs.source);
	          });
	        }
	      };
	    }
	  ]).directive('issueForm', [
	    '$rootScope', '$stateParams', '$compile', 'API', 'NOTIFY', function($rootScope, $stateParams, $compile, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          type: '@',
	          issue: '@',
	          editflag: '@',
	          change: '@'
	        },
	        link: function(scope, element, attrs) {
	          if (scope.issue !== -1 && $stateParams.issue_id !== null) {
	            API.project($stateParams.project_id).issue($stateParams.issue_id).retrieve().then(function(result) {
	              var temp, type;
	              if (result.tag !== "form") {
	                return;
	              }
	              scope.entity = JSON.parse(result.content);
	              scope.title = result.title;
	              type = scope.entity.uuid;
	              temp = _utils.extractTemplate(["#temp-form-head", "#tmpl-issue-form-" + type, "#temp-form-foot"], _templateForm);
	              temp = temp.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
	              element.html(temp);
	              return $compile(element.contents())(scope);
	            });
	          }
	          scope.editable = scope.editflag !== '-1';
	          scope.$on('issue:form:submit', function(event) {
	            var isEdit, issueAPI, method, params;
	            if (!scope.myForm.$valid) {
	              NOTIFY.error("请检查必填项是否漏填！");
	              return;
	            }
	            params = {
	              tag: "form",
	              title: scope.entity.name + '-' + scope.entity.department + '-' + scope.entity.title,
	              category_id: $stateParams.category_id,
	              content: JSON.stringify(scope.entity)
	            };
	            if (!scope.entity.name) {
	              params.title = scope.entity.title;
	            }
	            isEdit = scope.issue === '-1';
	            issueAPI = API.project($stateParams.project_id).issue(isEdit ? '' : $stateParams.issue_id);
	            method = isEdit ? 'create' : 'update';
	            return issueAPI[method](params).then(function() {
	              NOTIFY.success("保存" + params.title + "成功");
	              scope.$emit('issue:list:reload');
	              return scope.$emit('issue:form:hide');
	            });
	          });
	          return scope.$on('issue:form:change', function(event, issueId, index) {
	            var temp;
	            if (scope.change === '-1') {
	              return;
	            }
	            scope.editable = scope.editflag !== '-1';
	            temp = _utils.extractTemplate(["#temp-form-head", "#tmpl-issue-form-" + index, "#temp-form-foot"], _templateForm);
	            temp = temp.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
	            element.html(temp);
	            scope.entity = {};
	            if (issueId !== -1) {
	              API.project($stateParams.project_id).issue($stateParams.issue_id).retrieve().then(function(result) {
	                scope.entity = JSON.parse(result.content);
	                return scope.title = result.title;
	              });
	            } else {
	              scope.entity.uuid = index;
	            }
	            return $compile(element.contents())(scope);
	          });
	        }
	      };
	    }
	  ]).directive('issueFormModal', [
	    '$timeout', function($timeout) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate("#tmpl-issue-form-modal", _templateForm),
	        scope: {},
	        link: function(scope, element, attrs) {
	          scope.btname = 1;
	          scope.issueId = -1;
	          scope.onClickSubmit = function() {
	            return scope.$broadcast('issue:form:submit');
	          };
	          scope.onClickCancel = function() {
	            return scope.$emit('issue:form:hide');
	          };
	          scope.$on('issue:form:show', function(event, issueId, index) {
	            var $o;
	            scope.activeIndex = index;
	            scope.issueId = issueId;
	            $o = $(element);
	            $timeout((function() {
	              return $o.modal({
	                showClose: false
	              });
	            }), 200);
	            return scope.$broadcast('issue:form:change', issueId, index);
	          });
	          return scope.$on('issue:form:hide', function(event) {
	            return $.modal.close();
	          });
	        }
	      };
	    }
	  ]).directive('windowChangeButton', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: "<button class='primary default' ng-click='windowChange()'>返回列表</button>",
	        scope: {},
	        link: function(scope, element, attrs) {
	          return scope.windowChange = function() {
	            return scope.$emit("project:window:change", 1);
	          };
	        }
	      };
	    }
	  ]).directive('uploadDocx', [
	    '$rootScope', '$stateParams', 'API', 'NOTIFY', function($rootScope, $stateParams, API, NOTIFY) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attr) {
	          var filterFn, uploadFn;
	          filterFn = function(file, info) {
	            var confirmSize, maxSize;
	            confirmSize = Math.pow(2, 28);
	            maxSize = Math.pow(2, 30);
	            if (file.size > confirmSize) {
	              return confirm('上传大文件浏览器可能会出现卡死的情况，你确定要上传么');
	            } else if (file.size > maxSize) {
	              alert("上传文件不能超过" + (maxSize / 1024 / 1024) + "M");
	              return false;
	            }
	            return true;
	          };
	          uploadFn = function(files, rejected) {
	            if (files.length === 0) {
	              NOTIFY.warn('无可上传的文件');
	              return;
	            }
	            return FileAPI.upload({
	              url: "/api/project/" + $stateParams.project_id + "/" + $stateParams.version_id + "/" + $stateParams.category_id + "/issue/create/assets",
	              files: {
	                assets: files
	              },
	              complete: function(err, xhr) {
	                if (err) {
	                  return NOTIFY.error('文件上传失败');
	                }
	                NOTIFY.success('所有文件已经上传成功啦');
	                return $rootScope.$broadcast('issue:list:reload');
	              },
	              progress: function(event, file, xhr, options) {}
	            });
	          };
	          return __webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(59)]; (function() {
	            var target;
	            target = element[0];
	            return FileAPI.event.on(target, 'change', function(event) {
	              var files;
	              files = FileAPI.getFiles(event);
	              return FileAPI.filterFiles(files, filterFn, uploadFn);
	            });
	          }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	        }
	      };
	    }
	  ]).directive('issueFollowMemberDropdown', [
	    'API', 'NOTIFY', function(API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-follow-member-dropdown', _template),
	        link: function(scope, element, attrs) {
	          var loaded;
	          loaded = false;
	          attrs.$observe('items', function() {
	            if (loaded || !attrs.items) {
	              return;
	            }
	            loaded = true;
	            return scope.items = _utils.toDyadicArray(JSON.parse(attrs.items), 15);
	          });
	          return scope.$on('dropdown:selected', function(event, type, value) {
	            if (type !== 'issue:follow') {
	              return;
	            }
	            return API.project(scope.issue.project_id).issue(scope.issue.id).follow().create({
	              member_id: value
	            }).then(function(res) {
	              scope.$emit("issue:follow:change");
	              return NOTIFY.success('关注成功');
	            });
	          });
	        }
	      };
	    }
	  ]).directive('issueFollowMembers', [
	    '$stateParams', 'API', 'NOTIFY', function($stateParams, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-follow-members', _template),
	        link: function(scope, element, attrs) {
	          var followAPI, refreshFollow;
	          followAPI = API.project($stateParams.project_id).issue($stateParams.issue_id).follow();
	          refreshFollow = function() {
	            return followAPI.retrieve().then(function(res) {
	              return scope.followMembers = res;
	            });
	          };
	          scope.removeFollow = function(member) {
	            return followAPI["delete"]({
	              id: member.member_id
	            }).then(function(res) {
	              scope.$emit("issue:follow:change");
	              return NOTIFY.success('取消关注成功');
	            });
	          };
	          scope.$on("issue:follow:change", function(event) {
	            return refreshFollow();
	          });
	          return refreshFollow();
	        }
	      };
	    }
	  ]).directive('issueFollowIcon', [
	    '$stateParams', 'API', 'NOTIFY', function($stateParams, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-follow-icon', _template),
	        link: function(scope, element, attrs) {
	          var followAPI;
	          followAPI = API.project($stateParams.project_id).issue($stateParams.issue_id).follow();
	          return scope.clickFollow = function(follow) {
	            if (follow === 1) {
	              return followAPI["delete"]().then(function(res) {
	                scope.$emit("issue:follow:change");
	                scope.issue.follow = 0;
	                return NOTIFY.success('取消关注成功');
	              });
	            } else {
	              return followAPI.create().then(function(res) {
	                scope.$emit("issue:follow:change");
	                scope.issue.follow = 1;
	                return NOTIFY.success('关注成功');
	              });
	            }
	          };
	        }
	      };
	    }
	  ]).directive('issueSplit', [
	    '$rootScope', '$stateParams', '$timeout', 'API', 'NOTIFY', function($rootScope, $stateParams, $timeout, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-split', _template),
	        link: function(scope, element, attrs) {
	          var issueAPI;
	          issueAPI = API.project($stateParams.project_id).issue($stateParams.issue_id);
	          scope.recentSplit = {};
	          scope.$on('datetime:change', function(event, name, date) {
	            if (name.indexOf('plan_finish_time_') === -1) {
	              return;
	            }
	            return issueAPI.split(name.split('_').pop()).update({
	              plan_finish_time: date
	            }).then(function(result) {
	              if (result) {
	                return $rootScope.$broadcast('issue:detail:reload');
	              }
	            });
	          });
	          scope.blur = function() {
	            scope.splitShow = false;
	            return scope.recentSplit = {};
	          };
	          scope.splitSave = function() {
	            var method, splitAPI;
	            if (event.keyCode !== 13) {
	              return;
	            }
	            splitAPI = issueAPI.split();
	            if (scope.recentSplit.id) {
	              splitAPI = issueAPI.split(scope.recentSplit.id);
	            }
	            method = scope.recentSplit.id ? 'update' : 'create';
	            return splitAPI[method](scope.recentSplit).then(function(result) {
	              NOTIFY.success('保存成功');
	              scope.recentSplit = {};
	              return $rootScope.$broadcast('issue:detail:reload');
	            });
	          };
	          scope.splitEdit = function(item) {
	            $timeout((function() {
	              return $("#split-text").focus();
	            }), 100);
	            scope.splitShow = true;
	            return scope.recentSplit = item;
	          };
	          return scope.splitDelete = function(item) {
	            if (!confirm('您确定要删除这个子任务吗？')) {
	              return;
	            }
	            return issueAPI.split(item.id)["delete"]().then(function(result) {
	              if (result) {
	                return $rootScope.$broadcast('issue:detail:reload');
	              }
	            });
	          };
	        }
	      };
	    }
	  ]).directive('issueSplitMemberDropdown', [
	    '$stateParams', 'API', 'NOTIFY', function($stateParams, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-issue-split-member-dropdown', _template),
	        link: function(scope, element, attrs) {
	          var loaded;
	          loaded = false;
	          attrs.$observe('items', function() {
	            if (loaded || !attrs.items) {
	              return;
	            }
	            loaded = true;
	            return scope.items = _utils.toDyadicArray(JSON.parse(attrs.items), 15);
	          });
	          return scope.$on('dropdown:selected', function(event, type, value) {
	            if (type.indexOf('issue:split') === -1) {
	              return;
	            }
	            return API.project($stateParams.project_id).issue($stateParams.issue_id).split(type.split(':').pop()).update({
	              owner: value
	            }).then(function() {});
	          });
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 57 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>  <textarea id=\"tmpl-issue-list-cell\">\n        <div class=\"row\" ng-class=\"getDelayClass(issue)\" ng-click=\"onClickIssue($event, issue)\">\n            <div class=\"body\">\n                <div class=\"issue-status\" data-selected=\"{{issue.status}}\" data-name=\"issue:status\" ng-click=\"onClickStatus($event, issue)\">\n                    <i class=\"icon small\" ng-class=\"issue.status\" ng-click=\"clickStatus()\"></i>\n                </div>\n                <i class=\"priority\" ng-class=\"'priority-' + issue.priority\" ng-click=\"clickPriority()\"></i>\n                <a class=\"title\" ng-bind-html=\"issue.title | removeCommand | removeTag | highlightKeyword: condition.keyword | unsafe\"></a>\n            </div>\n            <div class=\"info\">\n                <span class=\"issue-id memo\">#{{issue.id}}</span>\n                <span class=\"member memo\">责任人：{{(issue.owner_name) || '未分配'}}</span>\n                <span class=\"date memo\" title=\"实际完成时间\">实际完成：{{(issue.finish_time | date) || '未完成'}}</span>\n                <span class=\"date memo\" title=\"计划完成时间\"> 计划完成：{{(issue.plan_finish_time | date) || '无限期'}}</span>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-list\">\n        <div class=\"issue-list list\" issue-status-dropdown-action style=\"position: relative\">\n            <h3>{{title}}\n                <button issue-form-button class=\"primary default\" style=\"float:right;margin-bottom:5px\" ng-if=\"project.flag==2&&showQuickEditor\" ng-click=\"createForm()\">申请</button>\n                <button issue-form-button upload-docx class=\"primary default upload-docx\" style=\"float:right;margin-bottom:5px\" ng-if=\"project.flag==0&&showQuickEditor\">\n                    批量创建\n                    <input type=\"file\"/>\n                </button>\n                <a href=\"/wiki/17/category/89/issue/6902\" ng-if=\"project.flag==0&&showQuickEditor\" class=\"stubborn\">如何批量创建任务？</a>\n            </h3>\n            <div class=\"create\" ng-show=\"project.flag!=2&&!myproject\">\n                <input type=\"text\" placeholder=\"请输入您将要创建的任务，支持指令\" autofocus issue-quick-editor ng-keydown=\"onKeyDown($event)\" data-category=\"1\" ng-show=\"showQuickEditor\" data-tag=\"issue\"/>\n                <div ng-show=\"!showQuickEditor\" class=\"empty\">\n                    您需要切换到具体任务分类下才能创建任务，<a href=\"/wiki/17/category/89/issue/2956\" class=\"stubborn\">这是什么意思？</a>\n                </div>\n            </div>\n\n            <div>\n                \n                <issue-plain-list data-source=\"{{undoneIssues}}\" data-title=\"未完成\"></issue-plain-list>\n                <issue-plain-list data-source=\"{{doneIssues}}\" data-title=\"已经完成\" data-show-details=\"false\" data-need-pagination=\"true\" data-uuid=\"done_issues\"></issue-plain-list>\n            </div>\n\n            <issue-status-dropdown></issue-status-dropdown>\n\n            <issue-form-modal></issue-form-modal>\n\n\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-editor\">\n        <div>\n            <div class=\"title\">\n                <input type=\"text\"/>\n            </div>\n            <editor></editor>\n            <div class=\"control\">\n                <label class=\"always-top\" ng-show=\"showAlwaysTop\">\n                    <input type=\"checkbox\"/>\n                    置顶\n                </label>\n                <button>保存</button>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-discussion-list\">\n        <div class=\"list issue-list\">\n            <header>\n                <h3>讨论</h3>\n            </header>\n\n            <div class=\"create\">\n                <input type=\"text\" placeholder=\"你想说点什么？\" autofocus issue-quick-editor ng-keydown=\"onKeyDown($event)\" data-category=\"1\" data-tag=\"discussion\"/>\n            </div>\n\n            <ul class=\"details\">\n                <li ng-repeat=\"item in discussion.items\" class=\"row\" ng-class=\"{'active': (item | isActiveIssue)}\">\n                    <a href=\"/{{item | projectLink: 'normal'}}/discussion/{{item.id}}\">\n                        <span class=\"badge gray small\">{{item.comment_count}}</span>\n\n                        <span class=\"title\" ng-bind-html=\"item.title | highlightKeyword: condition.keyword | unsafe\"></span>\n                    </a>\n                    <div class=\"info\">\n                        <span class=\"member memo\">{{item.owner_name}}</span>\n                        <span class=\"date memo\">{{item.timestamp | date}}</span>\n                    </div>\n                    <p class=\"summary\" ng-show=\"item.content\">\n                        {{item.content | rawText | limitTo: 40}}\n                    </p>\n                </li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-priority-dropdown\">\n        <div class=\"dropdown dropdown-tip priority\">\n            <ul class=\"dropdown-menu\">\n                <li>\n                    <a data-value=\"2\"><i class=\"icon small priority-2\"></i><span>低</span></a>\n                </li>\n                <li>\n                    <a data-value=\"3\"><i class=\"icon small priority-3\"></i><span>一般</span></a>\n                </li>\n                <li>\n                    <a data-value=\"4\"><i class=\"icon small priority-4\"></i><span>紧急</span></a>\n                </li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-status-dropdown\">\n        <div class=\"dropdown dropdown-tip status issue-status\">\n            <ul class=\"dropdown-menu\">\n                <li data-status=\"doing\">\n                    <a data-value=\"doing\"><i class=\"icon small doing\"></i><span>进行中</span></a>\n                </li>\n                <li data-status=\"pause\">\n                    <a data-value=\"pause\"><i class=\"icon small pause\"></i><span>暂停</span></a>\n                </li>\n                <li data-status=\"repairing\">\n                    <a data-value=\"repairing\"><i class=\"icon small repairing\"></i><span>需要修改</span></a>\n                </li>\n                <li data-status=\"repaired\">\n                    <a data-value=\"repaired\"><i class=\"icon small repaired\"></i><span>修复完成</span></a>\n                </li>\n                <li data-status=\"reviewing\">\n                    <a data-value=\"reviewing\"><i class=\"icon small reviewing\"></i><span>测试已审</span></a>\n                </li>\n                <li data-status=\"reviewed\">\n                    <a data-value=\"done\"><i class=\"icon small done\"></i><span>产品已审</span></a>\n                </li>\n                <li data-status=\"done\">\n                    <a data-value=\"done\"><i class=\"icon small done\"></i><span>已完成</span></a>\n                </li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-log\">\n        <ul class=\"list\">\n            <li ng-repeat=\"log in logs\" title=\"{{log.timestamp | date: 'yyyy-MM-dd hh:mm'}}\">\n                <span class=\"realname gray\">{{log.realname}}</span>\n                在\n                <span class=\"timestamp gray\">{{log.timestamp | timeAgo}}</span>\n                <span class=\"content\">{{log.content}}</span>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-document-list\">\n        <div class=\"list\">\n            <header>\n                <h3>文档</h3>\n            </header>\n\n            <div class=\"create\">\n                <input type=\"text\" placeholder=\"想要新建文档吗？输入文档标题后回车\" autofocus issue-quick-editor ng-keydown=\"onKeyDown($event)\" data-category=\"1\" data-tag=\"document\"/>\n            </div>\n\n            <div ng-show=\"document.pagination.recordCount == 0\" class=\"empty\">\n                还没有任何文档哦，快创建一个吧\n            </div>\n\n            <ul class=\"details\">\n                <li ng-repeat=\"item in document.items\" class=\"row\" ng-class=\"{'active': (item | isActiveIssue)}\">\n                    <a href=\"/{{item | projectLink: 'normal'}}/document/{{item.id}}\">\n                        <span class=\"title\">{{item.title}}</span>\n                    </a>\n\n                    <div class=\"info\">\n                        <span class=\"member memo\">{{item.owner_name}}</span>\n                        <span class=\"date memo\">{{item.timestamp | date}}</span>\n                    </div>\n\n                    <p class=\"summary\" ng-show=\"item.content\">\n                        {{item.content | rawText}}\n                    </p>\n                </li>\n            </ul>\n\n            <pagination ng-hide=\"document.pagination.pageCount<2\" data-uuid=\"document_pagination\" data-paginations=\"{{document.pagination}}\"></pagination>\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-tag-dropdown\">\n        <div class=\"dropdown dropdown-tip tag\">\n            <ul class=\"dropdown-menu\">\n                <li>\n                    <a data-value=\"issue\"><span>任务</span></a>\n                </li>\n                <li>\n                    <a data-value=\"document\"><span>文档</span></a>\n                </li>\n                <li>\n                    <a data-value=\"discussion\"><span>讨论</span></a>\n                </li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-issue-plain-list\">\n        <div class=\"list\">\n            <header>\n                <h3>\n                    {{title}}\n                    <span class=\"badge\">({{source.pagination.recordCount}})</span>\n                </h3>\n                <div class=\"toggle\" ng-class=\"{'collapse': showDetails}\" ng-click=\"onClickToggle()\">\n                    <i class=\"icon small\"></i>\n                </div>\n            </header>\n            <ul class=\"details\" ng-hide=\"showDetails\">\n                <li ng-repeat=\"issue in source.items\" class=\"row\" id=\"issue-list-{{issue.id}}\" ng-class=\"{'active': (issue | isActiveIssue)}\">\n                    <issue-list-cell></issue-list-cell>\n                </li>\n            </ul>\n            <div ng-show=\"source.items.length == 0\" class=\"empty\">\n                {{emptyMemo || '太棒了，所有的任务都已经完成了'}}\n            </div>\n            <pagination ng-if=\"needPagination\" ng-hide=\"showDetails||source.pagination.pageCount<2\" data-uuid=\"{{uuid}}\" data-paginations=\"{{source.pagination}}\"></pagination>\n        </div>\n    </textarea>  <textarea id=\"tmpl-test-list\">\n        <div class=\"issue-list list\" issue-status-dropdown-action style=\"position: relative\">\n            <h3>测试任务</h3>\n            <div class=\"create\">\n                <input type=\"text\" placeholder=\"请输入您将要创建的测试任务\" autofocus issue-quick-editor ng-keydown=\"onKeyDown($event)\" data-category=\"1\" data-tag=\"test\"/>\n            </div>\n\n\n            <div>\n                \n                <issue-plain-list data-source=\"{{doing}}\" data-title=\"待办中\" data-name=\"doing\"></issue-plain-list>\n                \n                <issue-plain-list data-source=\"{{repairing}}\" data-title=\"修复中\" data-name=\"repairing\"></issue-plain-list>\n                \n                <issue-plain-list data-source=\"{{reviewing}}\" data-title=\"产品审核\" data-name=\"reviewing\"></issue-plain-list>\n                \n                <issue-plain-list data-source=\"{{done}}\" data-title=\"已完成\" data-name=\"done\" data-show-details=\"false\"></issue-plain-list>\n            </div>\n\n            <issue-status-dropdown></issue-status-dropdown>\n        </div>\n        <div>\n    </div>\n    </textarea> <textarea id=\"tmpl-issue-follow-icon\">\n        <div class=\"follow-icon\">\n            <i class=\"icon follow\"></i>\n        </div>\n    </textarea> <textarea id=\"tmpl-issue-follow-member-dropdown\">\n        <div class=\"dropdown dropdown-tip members\">\n            <ul class=\"dropdown-menu\" ng-repeat=\"array in items\">\n                <li ng-repeat=\"item in array\">\n                    <a data-value=\"{{item.member_id}}\">\n                        {{item.realname}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </textarea> <textarea id=\"tmpl-issue-follow-members\">\n        <div class=\"follow-members\">\n\n            <ul class=\"follow-members\">\n                <li class=\"follow-title\">\n                    关注成员：\n                </li>\n                <li class=\"follow-member\" ng-repeat=\"item in followMembers\">\n                        {{item.realname}}\n                    <i class=\"icon remove\" ng-click=\"removeFollow(item)\" title=\"删除关注\"></i>\n                </li>\n\n                <li class=\"follow-title no-follower\" ng-if=\"followMembers.length==0\">\n                    暂无\n                </li>\n                <li>\n                    <div class=\"follow\" dropdown data-name=\"issue:follow\" ng-hide=\"articleOnly\" data-empty=\"添加关注\">\n                        <issue-follow-icon></issue-follow-icon>\n                        <issue-follow-member-dropdown data-items=\"{{projectMember}}\"></issue-follow-member-dropdown>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </textarea> <textarea id=\"tmpl-issue-split-member-dropdown\">\n        <div class=\"dropdown dropdown-tip members\">\n            <ul class=\"dropdown-menu\" ng-repeat=\"array in items\">\n                <li ng-repeat=\"item in array\">\n                    <a data-value=\"{{item.member_id}}\">\n                        {{item.realname}}\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </textarea> <textarea id=\"tmpl-issue-split\">\n        <div class=\"issue-split\">\n\n            <ul class=\"issue-split\">\n                <li ng-repeat=\"item in issue.splitArr\" issue-status-dropdown-action>\n                    <div class=\"split-major\">\n                        <div class=\"issue-status\" data-selected=\"{{item.status}}\" ng-click=\"onClickStatus($event, item)\">\n                            <i class=\"icon small\" ng-class=\"item.status\"></i>\n                        </div>\n                        <div class=\"title\">{{item.title}}</div>\n                        <div class=\"ids\">#{{item.issue_id}}-{{item.id}}</div>\n                    </div>\n                    <div class=\"operation\">\n\n                        <div class=\"member text-only\" dropdown data-name=\"issue:split:{{item.id}}\" data-text-container=\"label.display\" title=\"责任人\" data-empty=\"{{item.realname || '责任人'}}\">\n                            <i class=\"icon owner\"></i>\n                            <label class=\"display\">{{item.realname || '责任人'}}</label>\n                            <issue-split-member-dropdown data-split-id=\"item.id\" data-member-id=\"item.owner\"></issue-split-member-dropdown>\n                        </div>\n\n                        <div class=\"finish-date\" ng-show=\"item.status!='done'\">\n                            <a datetime-picker data-name=\"plan_finish_time_{{item.id}}\" data-date=\"{{item.plan_finish_time}}\">\n                                <i class=\"icon date\"></i>\n                                <span>{{(item.plan_finish_time | date:'yyyy-MM-dd') || '计划完成' }}</span>\n                            </a>\n                        </div>\n                        \n                        <div class=\"toolbar\">\n                            <a ng-click=\"splitEdit(item)\" href=\"javascript:void(0)\" class=\"edit\">\n                                <i class=\"icon edit\"></i>\n                                <span class=\"tollbar-text\">编辑</span>\n                            </a>\n                            <a ng-click=\"splitDelete(item)\" href=\"javascript:void(0)\" class=\"delete\">\n                                <i class=\"icon delete\"></i>\n                                <span class=\"tollbar-text\">删除</span>\n                            </a>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <div class=\"create\" ng-show=\"issue.splited==1&&splitShow\">\n                <input type=\"text\" id=\"split-text\" placeholder=\"请输入子任务的名称后回车\" ng-model=\"recentSplit.title\" ng-blur=\"blur()\" ng-keydown=\"splitSave($event)\">\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("issue-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 58 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1=" <div> <textarea id=\"tmpl-issue-form-234\">\n\n<tr>\n\t<td class=\"mtitle\" colspan=\"2\">基本信息</td>\n</tr>\n<tr>\n\t<td>\n\t\t<b><i ng-show=\"editable\">*&nbsp;</i>标题：</b>\n\t\t<input name=\"title\" ng-model=\"entity.title\" required ng-show=\"editable\" type=\"text\"/>\n\t\t<span ng-show=\"!editable\">{{entity.title}}</span>u\n\t</td>\n\t<td>\n\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请部门：</b>\n\t\t<select required ng-show=\"editable\" ng-model=\"entity.department\">\n\t\t\t<option value=\"市场营销中心\">市场营销中心</option>\n\t\t\t<option value=\"平台部\">平台部</option>\n\t\t\t<option value=\"平台运营部\">平台运营部</option>\n\t\t\t<option value=\"运营支撑部\">运营支撑部</option>\n\t\t\t<option value=\"芒果OTT部\">芒果OTT部</option>\n\t\t\t<option value=\"芒果MPP部\">芒果MPP部</option>\n\t\t\t<option value=\"综合事务部\">综合事务部</option>\n\t\t</select>\n\t\t\n\t\t<span ng-show=\"!editable\">{{entity.department}}</span>\n\t</td>\n</tr>\n<tr>\n\t<td>\n\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请人：</b>\n\t\t<input name=\"name\" required type=\"text\" ng-show=\"editable\" ng-model=\"entity.name\"/>\n\t\t<span ng-show=\"!editable\">{{entity.name}}</span>\n\t</td>\n<td>\n\t<b>协办部门：</b>\n\t<select ng-show=\"editable\" class=\"form-control\" ng-model=\"entity.assdepartment\">\n\t\t<option value=\"市场营销中心\">市场营销中心</option>\n\t\t<option value=\"平台部\">平台部</option>\n\t\t<option value=\"平台运营部\">平台运营部</option>\n\t\t<option value=\"运营支撑部\">运营支撑部</option>\n\t\t<option value=\"芒果OTT部\">芒果OTT部</option>\n\t\t<option value=\"芒果MPP部\">芒果MPP部</option>\n\t\t<option value=\"综合事务部\">综合事务部</option>\n\t</select>\n\t<span ng-show=\"!editable\">{{entity.assdepartment}}</span>\n</td>\n</tr>\n<tr>\n\t<td>\n\t\t<b>协办人：</b>\n\t\t<input type=\"text\" ng-show=\"editable\" ng-model=\"entity.assname\"/>\t\n\t\t<span ng-show=\"!editable\">{{entity.assname}}</span>\n\t</td>\n\t<td></td>\n</tr>\n<tr>\n\t<td class=\"mtitle\" colspan=\"2\">设备变更</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b>设备管理：</b> \n\t\t<div class=\"line\">\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value1\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t设备上架\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value2\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t设备下架\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value3\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t设备入机房\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value4\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t设备出机房\n\t\t\t</div>\n\t\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b>系统操作：</b>\n\t\t<div class=\"line\">\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value5\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t系统安装\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value6\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t登录密码更改\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value7\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t软件安装\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value8\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t权限申请\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value9\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t来路限制\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value10\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t端口配置\n\t\t\t</div>\n\t\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b>业务系统：</b>\n\t\t<div class=\"line\">\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value11\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t系统配置更改\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value12\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t业务系统上线\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value13\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t系统维护割接\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value14\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t版本升级\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value15\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t服务安装\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value16\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t版本更新\n\t\t\t</div>\n\t\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b>数据库：</b>\n\t\t<div class=\"line\">\n\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value17\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t数据库备份\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value18\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t数据库密码更改\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value19\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t数据库割接\n\t\t\t</div>\n\t\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b>网络配置：</b>\n\t\t<div class=\"line\">\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value20\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t服务器IP更改\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value21\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t路由器配置\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value22\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t交换机配置\n\t\t\t</div>\n\t\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b>负载均衡配置：</b>\n\t\t<div class=\"line\">\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value25\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t流量控制配置\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value26\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\tVPN权限配置\n\t\t\t</div>\n\t\t\t<div class=\"check\">\n\t\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value27\" ng-true-value=\"1\" ng-false-value=\"0\"/>\t\n\t\t\t\t设备密码更改\n\t\t\t</div>\n\t\t</div>\n\t</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b>其他配置：</b>\n\t\t&lt;textarea ng-show=\"editable\" ng-model=\"entity.other\" &gt;&lt;/textarea&gt;\n\t\t<label ng-show=\"!editable\">{{entity.other}}</label>\n\t</td>\n</tr>\n<tr>\n\t<td class=\"mtitle\" colspan=\"2\">申请原因</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b><i ng-show=\"editable\">*&nbsp;</i>详细说明变更需求：</b>\n\t\t&lt;textarea ng-show=\"editable\" ng-model=\"entity.detail\" &gt;&lt;/textarea&gt;\n\t\t<label ng-show=\"!editable\">{{entity.detail}}</label>\n\t</td>\n</tr>\n<tr>\n\t<td colspan=\"2\">\n\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请原因及用途：</b>\n\t\t&lt;textarea ng-show=\"editable\" ng-model=\"entity.reason\" &gt;&lt;/textarea&gt;\n\t\t<label ng-show=\"!editable\">{{entity.reason}}</label>\n\t</td>\n</tr>\n</textarea> <textarea id=\"tmpl-issue-form-233\">\n\n\t<tr>\n\t\t<td class=\"mtitle\" colspan=\"2\">基本信息</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>标题：</b>\n\t\t\t<input name=\"title\" ng-model=\"entity.title\" required ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.title}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请部门：</b>\n\t\t\t<select required ng-show=\"editable\" ng-model=\"entity.department\">\n\t\t\t\t<option value=\"市场营销中心\">市场营销中心</option>\n\t\t\t\t<option value=\"平台部\">平台部</option>\n\t\t\t\t<option value=\"平台运营部\">平台运营部</option>\n\t\t\t\t<option value=\"运营支撑部\">运营支撑部</option>\n\t\t\t\t<option value=\"芒果OTT部\">芒果OTT部</option>\n\t\t\t\t<option value=\"芒果MPP部\">芒果MPP部</option>\n\t\t\t\t<option value=\"综合事务部\">综合事务部</option>\n\t\t\t</select>\n\t\t\t\n\t\t\t<span ng-show=\"!editable\">{{entity.department}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请人：</b>\n\t\t\t<input name=\"name\" required type=\"text\" ng-show=\"editable\" ng-model=\"entity.name\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.name}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>项目名称：</b>\n\t\t\t<input type=\"text\" required ng-show=\"editable\" ng-model=\"entity.pname\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.pname}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b>上线类型：</b>\n\t\t\t<select ng-show=\"editable\" ng-model=\"entity.type\">\n\t\t\t\t<option value=\"小型\">小型</option>\n\t\t\t\t<option value=\"中大型\">中大型</option>\n\t\t\t</select>\n\t\t\t<span ng-show=\"!editable\">{{entity.type}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b>紧急程度：</b>\n\t\t\t<select ng-show=\"editable\" ng-model=\"entity.j\">\n\t\t\t\t<option value=\"高\">高</option>\n\t\t\t\t<option value=\"中\">中</option>\n\t\t\t\t<option value=\"低\">低</option>\n\t\t\t</select>\n\t\t\t<span ng-show=\"!editable\">{{entity.j}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b>上线时间：</b>\n\t\t\t<input type=\"text\" datetype=\"datetime\" placeholder=\"开始时间，精确到小时\" ng-show=\"editable\" ng-model=\"entity.time\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.time}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b>上线时间：</b>\n\t\t\t<input type=\"text\" datetype=\"datetime\" placeholder=\"结束时间，精确到小时\" ng-show=\"editable\" ng-model=\"entity.endtime\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.endtime}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"2\">\n\t\t\t<b>上线描述：</b>\n\t\t\t&lt;textarea rows=\"10\" placeholder=\"对上线内容进行清晰描述，着重描述功能点和影响范围。（内容可直接让产品人员提供）\" ng-show=\"editable\" ng-model=\"entity.details\" &gt;&lt;/textarea&gt;\n\t\t\t<label ng-show=\"!editable\">{{entity.details}}</label>\n\t\t</td>\n\t</tr>\t\n\t<tr>\n\t\t<td colspan=\"2\">\n\t\t\t<b>上线重点：</b>\n\t\t\t&lt;textarea rows=\"10\" placeholder=\"对本次上线可能造成的影响范围，以便上线后重点关注。\" ng-show=\"editable\" ng-model=\"entity.importance\" &gt;&lt;/textarea&gt;\n\t\t\t<label ng-show=\"!editable\">{{entity.importance}}</label>\n\t\t</td>\n\t</tr>\t\n</textarea> <textarea id=\"tmpl-issue-form-207\">\n\t<tr>\n\t\t<td class=\"mtitle\" colspan=\"2\">基本信息</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>标题：</b>\n\t\t\t<input name=\"title\" ng-model=\"entity.title\" required ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.title}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请部门：</b>\n\t\t\t<select required ng-show=\"editable\" ng-model=\"entity.department\">\n\t\t\t\t<option value=\"市场营销中心\">市场营销中心</option>\n\t\t\t\t<option value=\"平台部\">平台部</option>\n\t\t\t\t<option value=\"平台运营部\">平台运营部</option>\n\t\t\t\t<option value=\"运营支撑部\">运营支撑部</option>\n\t\t\t\t<option value=\"芒果OTT部\">芒果OTT部</option>\n\t\t\t\t<option value=\"芒果MPP部\">芒果MPP部</option>\n\t\t\t\t<option value=\"综合事务部\">综合事务部</option>\n\t\t\t</select>\n\t\t\t\n\t\t\t<span ng-show=\"!editable\">{{entity.department}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请人：</b>\n\t\t\t<input name=\"name\" required type=\"text\" ng-show=\"editable\" ng-model=\"entity.name\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.name}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>签呈时间：</b>\n\t\t\t<input type=\"text\" ng-show=\"editable\" datetype=\"date\" datetime-picker format=\"yyyy年mm月dd日\" ng-model=\"entity.time\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.time}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>业务模块：</b>\n\t\t\t<input type=\"text\" required ng-show=\"editable\" ng-model=\"entity.model\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.model}}</span>\n\t\t</td>\n\t\t<td></td>\n\t</tr>\t\t\n\n\t<tr>\n\t\t<td colspan=\"2\">\n\t\t\t<b>功能描述：</b>\n\t\t\t&lt;textarea ng-show=\"editable\" ng-model=\"entity.detail\" &gt;&lt;/textarea&gt;\n\t\t\t<label ng-show=\"!editable\">{{entity.detail}}</label>\n\t\t</td>\n\t</tr>\t\n\n\n\n\t<tr>\n\t\t<td class=\"mtitle\" colspan=\"2\">资源配置</td>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"2\" class=\"table\">\n\t\t\t<table class=\"inner\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th>名称</th><th>CPU</th><th>内存</th><th>硬盘</th><th>RAID</th><th>网口数量</th><th>外网</th><th>机架高度</th><th>电源模块</th><th>功耗</th><th>数量</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr class=\"cel\">\n\t\t\t\t\t<td>负载均衡</td><td>E3-1220<br/>4核</td><td>4*8G</td><td>2*500G</td><td>RAID1</td><td>千兆*2</td><td>有</td><td>1U</td><td>单电源冗余</td><td>550W</td><td><input ng-disabled=\"!editable\" onkeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false\" ng-model=\"entity.num1\"/></td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr>\n\t\t\t\t\t<td>web层</td><td>2*E5-2420<br/>6核</td><td>4*8G</td><td>2*1T</td><td>RAID1</td><td>千兆*2</td><td>有</td><td>1U</td><td>单电源冗余</td><td>550W</td><td><input ng-disabled=\"!editable\" onkeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false\" ng-model=\"entity.num2\"/></td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr class=\"cel\">\n\t\t\t\t\t<td>缓存层</td><td>2*E5-2420<br/>6核</td><td>8*8G</td><td>2*1T</td><td>RAID1</td><td>千兆*2</td><td>有</td><td>1U</td><td>单电源冗余</td><td>550W</td><td><input ng-disabled=\"!editable\" onkeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false\" ng-model=\"entity.num3\"/></td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr>\n\t\t\t\t\t<td>数据层</td><td>2*E5-2440<br/>8核</td><td>8*8G</td><td>2*300G(系统)<br/>4*600G(数据)</td><td>RAID5</td><td>千兆*2</td><td>无</td><td>1U</td><td>双电源冗余</td><td>550W</td><td><input ng-disabled=\"!editable\" onkeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false\" ng-model=\"entity.num4\"/></td>\n\t\t\t\t</tr>\n\n\t\t\t\t<tr class=\"cel\">\n\t\t\t\t\t<td>CDN</td><td>2*E5-2620<br/>6核</td><td>8*8G</td><td>2*300G(系统)<br/>12*4T(数据)</td><td>RAID1(系统)<br/>RAID0(数据)</td><td>千兆*4</td><td>有</td><td>2U</td><td>双电源冗余</td><td>750W</td><td><input ng-disabled=\"!editable\" onkeypress=\"if (event.keyCode < 45 || event.keyCode > 57) event.returnValue = false\" ng-model=\"entity.num5\"/></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</td>\n\t</tr>\n\t<tr ng-show=\"editable\">\n\t\t<td colspan=\"2\">\n\t\t\t<tip>说明：以上为推荐配置，如有其他需求请按照格式在备注中填写。</tip>\n\t\t</td>\n\t</tr>\n\n\t<tr>\n\t\t<td class=\"mtitle\" colspan=\"2\">环境说明</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>部署环境：</b>\n\t\t\t<input type=\"text\" required ng-show=\"editable\" ng-model=\"entity.env\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.env}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b>监控内容：</b>\n\t\t\t<input type=\"text\" ng-show=\"editable\" ng-model=\"entity.content\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.content}}</span>\n\t\t</td>\n\t</tr>\n\n\t<tr>\n\t\t<td colspan=\"2\">\n\t\t\t<b>备注：</b>\n\t\t\t&lt;textarea rows=\"10\" ng-show=\"editable\" ng-model=\"entity.ext\" &gt;&lt;/textarea&gt;\n\t\t\t<label ng-show=\"!editable\">{{entity.ext}}</label>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"2\">\n\t\t\t<b>域名：</b>\n\t\t\t<span class=\"text\">如有需要请到备注说明。</span>\n\t\t</td>\n\t</tr>\n\t\n</textarea> <textarea id=\"tmpl-issue-form-316\">\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>标题：</b>\n\t\t\t<input name=\"title\" ng-model=\"entity.title\" required ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.title}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请部门：</b>\n\t\t\t<input name=\"department\" ng-model=\"entity.department\" required ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.department}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>申请人：</b>\n\t\t\t<input name=\"name\" required type=\"text\" ng-show=\"editable\" ng-model=\"entity.name\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.name}}</span>\n\t\t</td>\n\t\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>联系电话：</b>\n\t\t\t<input type=\"text\" required ng-show=\"editable\" ng-model=\"entity.phone\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.phone}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>节目名称：</b>\n\t\t<input type=\"text\" required ng-show=\"editable\" ng-model=\"entity.pname\"/>\n\t\t<span ng-show=\"!editable\">{{entity.pname}}</span>\n\t\t</td>\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>录制形式：</b>\n\t\t\t<select ng-show=\"editable\" required ng-model=\"entity.j\">\n\t\t\t\t<option value=\"语言录音\">语言录音</option>\n\t\t\t\t<option value=\"视频配音\">视频配音</option>\n\t\t\t\t<option value=\"歌唱录音\">歌唱录音</option>\n\t\t\t</select>\n\t\t\t<span ng-show=\"!editable\">{{entity.j}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td><b><i ng-show=\"editable\">*&nbsp;</i>使用时间：</b>\n\t\t<input type=\"text\" required datetype=\"datetime\" placeholder=\"开始时间，精确到分\" datetype=\"date\" datetime-picker format=\"yyyy年mm月dd日 hh时:ii分\" ng-show=\"editable\" ng-model=\"entity.stime\"/>\n\t\t<span ng-show=\"!editable\">{{entity.stime}}</span>\n\t\t</td>\n\t\t<td>\n\t\t<b><i ng-show=\"editable\">*&nbsp;</i>使用时长：</b>\n\t\t<input type=\"text\" required ng-show=\"editable\" ng-model=\"entity.time\"/>\n\t\t<span ng-show=\"!editable\">{{entity.time}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"2\">\n\t\t\t<b>备注：</b>\n\t\t&lt;textarea rows=\"10\" placeholder=\"如无特别要求可不填写\" ng-show=\"editable\" ng-model=\"entity.details\" &gt;&lt;/textarea&gt;\n\t\t<label ng-show=\"!editable\">{{entity.details}}</label>\n\t\t</td>\n\t</tr>\n\t<tr ng-show=\"editable\">\n\t\t<td colspan=\"2\">\n\t\t\t<b class=\"tips\">说明：</b>\n\t\t\t<dl>\n\t\t\t\t<dd>语言录音：纯语言录音，如娱乐新闻配音。</dd>\n\t\t\t\t<dd>视频配音：对照视频口型录音，如动画配音。</dd>\n\t\t\t\t<dd>歌唱录音：歌唱、乐器小样录音。</dd>\n\t\t\t</dl>\n\t\t</td>\n\t</tr>\n\t\n</textarea> <textarea id=\"temp-form-head\">\n\t<form name=\"myForm\">\n\t\t<table class=\"body\">\n</table></form></textarea> <textarea id=\"temp-form-foot\">\n\t\n</textarea> <textarea id=\"tmpl-issue-form-modal\">\n\t<div class=\"inner issue-form\">\n\t\t<div class=\"title\">\n\t\t\t<span>申请表单</span>\n\t\t</div>\n\t\t<a class=\"close-modal\" rel=\"modal:close\"> <i class=\"icon\"></i>\n\t\t</a>\n\t\t<div class=\"main\">\n\t\t\t<div class=\"simple-tab\" simple-tab=\"\" data-active-index=\"0\">\n\t\t\t\t<issue-form data-type=\"{{activeIndex}}\" data-issue=\"{{issueId}}\"></issue-form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"right footer\">\n\t\t\t<button class=\"primary default\" ng-click=\"onClickSubmit()\">提&nbsp;&nbsp;交</button>\n\n\t\t\t<button class=\"cancel default\" ng-click=\"onClickCancel()\">取&nbsp;&nbsp;消</button>\n\t\t</div>\n\t</div>\n</textarea> <textarea id=\"tmpl-issue-form-395\">\n\n\t<tr>\n\t\t<td class=\"mtitle\">基本信息</td>\n\t\t<td class=\"mtitle\" style=\"text-align:right\"><span>以下尺寸单位统一为px（像素）</span></td>\n\t</tr>\n\t<tr>\n\t\t\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>项目名称：</b>\n\t\t\t<input name=\"title\" ng-model=\"entity.title\" ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.title}}</span>\n\t\t</td>\n\t\t\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>上线日期：</b>\n\t\t\t<input name=\"title\" ng-model=\"entity.date\" datetype=\"date\" datetime-picker format=\"yyyy年mm月dd日\" ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.date}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>项目性质：</b>\n\t\t\t<select ng-show=\"editable\" required ng-model=\"entity.j\">\n\t\t\t\t<option value=\"专题\">专题</option>\n\t\t\t\t<option value=\"H5单页\">H5单页</option>\n\t\t\t\t<option value=\"栏目\">栏目</option>\n\t\t\t\t<option value=\"其他\">其他</option>\n\t\t\t</select>\n\t\t\t<span ng-show=\"!editable\">{{entity.j}}</span>\n\t\t</td>\n\t\t\n\t\t<td>\n\t\t\t<b>项目适配：</b>\t\t\t\t\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value1\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>PC端</span>\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value2\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>平板</span>\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value3\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>手机</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t\n\t\t<td>\n\t\t\t<b>默认尺寸：</b>\n\t\t\t<input placeholder=\"内容区域的默认最大宽度\" type=\"text\" ng-show=\"editable\" ng-model=\"entity.assname\"/>\t\n\t\t\t<span ng-show=\"!editable\">{{entity.assname}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t\n\t\t<td class=\"mtitle\" colspan=\"2\">\n\t\t\t<b>适配档位：</b>\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value4\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>1580</span>\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value5\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>1400</span>\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value6\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>1180</span>\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value7\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>940</span>\n\t\t\t<input type=\"checkbox\" ng-disabled=\"!editable\" ng-model=\"entity.ckbox_value8\" ng-true-value=\"1\" ng-false-value=\"0\"/><span>720</span>\n\t\t</td>\n\t</tr>\n\t<tr ng-show=\"editable\">\n\t\t<td colspan=\"2\" class=\"tips\">\n\t\t\t<b>说明：</b>\n\t\t\t<span>当选择专题时，默认不适配，会将默认尺寸做等比缩小，H5单页无需填写此项。</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>复用性：</b>\n\t\t\t<select ng-show=\"editable\" ng-model=\"entity.fyx\">\n\t\t\t\t<option value=\"是\">是</option>\n\t\t\t\t<option value=\"否\">否</option>\n\t\t\t</select>\n\t\t\t<span ng-show=\"!editable\">{{entity.fyx}}</span>\n\t\t</td>\n\t\t\n\t\t<td>\n\t\t\t<b>合作方：</b>\n\t\t\t<select ng-show=\"editable\" ng-model=\"entity.hzf\">\n\t\t\t\t<option value=\"是\">是</option>\n\t\t\t\t<option value=\"否\">否</option>\n\t\t\t</select>\n\t\t\t<span ng-show=\"!editable\">{{entity.hzf}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>产品负责人：</b>\n\t\t\t<input name=\"title\" ng-model=\"entity.person\" ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.person}}</span>\n\t\t</td>\n\t\t\n\t\t<td>\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>联系电话：</b>\n\t\t\t<input name=\"title\" ng-model=\"entity.phone\" ng-show=\"editable\" type=\"text\"/>\n\t\t\t<span ng-show=\"!editable\">{{entity.phone}}</span>\n\t\t</td>\n\t</tr>\n\t<tr>\n\t\t<td colspan=\"2\">\n\t\t\t<b><i ng-show=\"editable\">*&nbsp;</i>补充说明：</b>\n\t\t\t&lt;textarea ng-show=\"editable\" ng-model=\"entity.reason\" &gt;&lt;/textarea&gt;\n\t\t\t<label ng-show=\"!editable\">{{entity.reason}}</label>\n\t\t</td>\n\t</tr>\n</textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("issue-form.html",v1)}]);
	module.exports=v1;

/***/ },
/* 59 */,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils) {
	  return _module.controllerModule.controller('issueListController', [
	    '$rootScope', '$scope', '$stateParams', 'API', '$state', '$location', function($rootScope, $scope, $stateParams, API, $state, $location) {
	      var getSearchIssueParams, searchIssue;
	      searchIssue = function(condition) {
	        var cond, issueAPI, params;
	        $scope.$parent.$broadcast("project:window:change", 1);
	        cond = _.extend({
	          tag: $state.params.tag,
	          category_id: $state.params.category_id
	        }, condition);
	        $scope.condition = cond;
	        params = getSearchIssueParams(cond);
	        issueAPI = API.project($stateParams.project_id).issue();
	        issueAPI.retrieve(_.extend({
	          status: 'undone',
	          pageSize: 9999
	        }, params)).then(function(result) {
	          return $scope.undoneIssues = result;
	        });
	        $scope.showQuickEditor = Boolean(cond.category_id);
	        return issueAPI.retrieve(_.extend({
	          status: 'done',
	          pageSize: 10
	        }, params)).then(function(result) {
	          return $scope.doneIssues = result;
	        });
	      };
	      getSearchIssueParams = function(cond) {
	        var params;
	        params = {};
	        if (cond.keyword) {
	          $scope.title = "搜索：" + cond.keyword;
	          params.keyword = cond.keyword;
	        } else if ($stateParams.myself) {
	          $scope.title = "我相关的任务";
	          if ($location.$$search.title) {
	            $scope.title = $location.$$search.title;
	          }
	          params.myself = true;
	        } else if ($stateParams.follow) {
	          $scope.title = "我相关注";
	          if ($location.$$search.title) {
	            $scope.title = $location.$$search.title;
	          }
	          params.follow = true;
	        } else if (cond.category_id) {
	          $scope.title = $location.$$search.title;
	        } else {
	          $scope.title = "所有任务";
	        }
	        params.category_id = $state.params.category_id;
	        params.version_id = $state.params.version_id;
	        return params;
	      };
	      $rootScope.$on('pagination:change', function(event, page, uuid, cb) {
	        var issueAPI, params;
	        if (uuid !== 'done_issues') {
	          return;
	        }
	        params = getSearchIssueParams($scope.condition);
	        issueAPI = API.project($stateParams.project_id).issue();
	        return issueAPI.retrieve(_.extend({
	          status: 'done',
	          pageSize: 10,
	          pageIndex: page
	        }, params)).then(function(result) {
	          return $scope.doneIssues = result;
	        });
	      });
	      $scope.$on('issue:list:reload', function(event) {
	        return searchIssue();
	      });
	      $scope.$on('issue:change', function() {
	        return searchIssue();
	      });
	      $scope.$on('instant-search:change', function(event, keyword) {
	        if ($scope.condition.keyword === keyword) {
	          return;
	        }
	        return searchIssue({
	          keyword: keyword
	        });
	      });
	      $scope.$on('issue:status:change', function(event, issue_id, oldStatus, newStatus) {
	        if (oldStatus === newStatus) {
	          return;
	        }
	        return API.project($stateParams.project_id).issue(issue_id).update({
	          status: newStatus
	        }).then(function() {
	          return searchIssue();
	        });
	      });
	      return searchIssue();
	    }
	  ]).controller('testListController', [
	    '$scope', '$stateParams', 'API', '$state', '$location', function($scope, $stateParams, API, $state, $location) {
	      var issueAPI, searchIssue;
	      $scope.condition = {};
	      issueAPI = API.project($stateParams.project_id).issue();
	      searchIssue = function(condition) {
	        var params;
	        params = _.extend({
	          tag: 'test'
	        }, condition);
	        issueAPI.retrieve(_.extend({
	          status: ['doing', 'repaired', 'pause']
	        }, params)).then(function(result) {
	          return $scope.doing = result;
	        });
	        issueAPI.retrieve(_.extend({
	          status: 'repairing'
	        }, params)).then(function(result) {
	          return $scope.repairing = result;
	        });
	        issueAPI.retrieve(_.extend({
	          status: 'reviewing'
	        }, params)).then(function(result) {
	          return $scope.reviewing = result;
	        });
	        return issueAPI.retrieve(_.extend({
	          status: 'done'
	        }, params)).then(function(result) {
	          return $scope.done = result;
	        });
	      };
	      $scope.$on('instant-search:change', function(event, keyword) {
	        if ($scope.condition.keyword === keyword) {
	          return;
	        }
	        $scope.condition.keyword = keyword;
	        return searchIssue({
	          keyword: keyword
	        });
	      });
	      $scope.$on('issue:status:change', function(event, issue_id, oldStatus, newStatus) {
	        if (oldStatus === newStatus) {
	          return;
	        }
	        return API.project($stateParams.project_id).issue(issue_id).update({
	          status: newStatus
	        }).then(function() {
	          return searchIssue();
	        });
	      });
	      return searchIssue();
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(62)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _hljs, _template) {
	  return _module.controllerModule.controller('issueDetailsController', [
	    '$scope', '$stateParams', 'API', '$state', '$timeout', function($scope, $stateParams, API, $state, $timeout) {
	      var issueLoad, ref;
	      $scope.articleOnly = (ref = $state.current.data) != null ? ref.articleOnly : void 0;
	      issueLoad = function() {
	        return API.project($stateParams.project_id).issue($stateParams.issue_id).retrieve().then(function(result) {
	          $scope.issue = result;
	          $scope.notFound = !result;
	          if (!$scope.projectMember || $stateParams.project_id !== $scope.issue.project_id) {
	            $scope.$emit('project:member:request', $scope.issue.project_id);
	          }
	          if (!$scope.projectCategory || $stateParams.project_id !== $scope.issue.project_id) {
	            $scope.$emit('project:category:request', $scope.issue.project_id);
	          }
	          if (!$scope.projectVersion || $stateParams.project_id !== $scope.issue.project_id) {
	            $scope.$emit('project:version:request', $scope.issue.project_id);
	          }
	          if (!$scope.projectVersion || $stateParams.project_id !== $scope.issue.project_id) {
	            $scope.$emit('project:refresh:request', $scope.issue.project_id);
	          }
	          return $timeout(_hljs.initHighlighting, 100);
	        });
	      };
	      $scope.$on("assets:upload:finish", function() {
	        $scope.$broadcast("assets:list:update");
	      });
	      $scope.$on("issue:detail:reload", function() {
	        issueLoad();
	      });
	      return issueLoad();
	    }
	  ]).controller('discussionListController', [
	    '$scope', '$stateParams', '$location', '$filter', 'API', function($scope, $stateParams, $location, $filter, API) {
	      var loadDiscussion;
	      $scope.condition = {};
	      loadDiscussion = function() {
	        return API.project($stateParams.project_id).discussion().retrieve($scope.condition).then(function(result) {
	          return $scope.discussion = result;
	        });
	      };
	      $scope.$on('issue:change', function(event, data) {
	        var url;
	        loadDiscussion();
	        if (data.status !== 'new') {
	          return;
	        }
	        url = "/" + ($filter('projectLink')(null, 'normal')) + "/discussion/" + data.id;
	        return $location.path(url).search('editing', 'true');
	      });
	      $scope.$on('instant-search:change', function(event, value) {
	        if ($scope.condition.keyword === value) {
	          return;
	        }
	        $scope.condition.keyword = value;
	        return loadDiscussion();
	      });
	      return loadDiscussion();
	    }
	  ]).controller('commentListController', ['$scope', '$stateParams', 'API', function($scope, $stateParams, API) {}]).controller('documentListController', [
	    '$rootScope', '$scope', '$stateParams', '$location', '$filter', 'API', function($rootScope, $scope, $stateParams, $location, $filter, API) {
	      var cond, loadDocument;
	      cond = {
	        tag: 'document',
	        pageSize: 20
	      };
	      loadDocument = function(pageIndex) {
	        if (pageIndex) {
	          cond.pageIndex = pageIndex;
	        }
	        return API.project($stateParams.project_id).issue().retrieve(cond).then(function(result) {
	          return $scope.document = result;
	        });
	      };
	      $scope.$on('issue:change', function(event, data) {
	        return loadDocument();
	      });
	      $rootScope.$on('pagination:change', function(event, page, uuid, cb) {
	        if (uuid !== 'document_pagination') {
	          return;
	        }
	        return loadDocument(page);
	      });
	      return loadDocument();
	    }
	  ]).controller('documentDetailsController', ['$state', '$scope', function($state, $scope) {}]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 62 */
/***/ function(module, exports) {

	var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function n(e,t){var n=e&&e.exec(t);return n&&0==n.index}function r(e){var t=(e.className+" "+(e.parentNode?e.parentNode.className:"")).split(/\s+/);return t=t.map(function(e){return e.replace(/^lang(uage)?-/,"")}),t.filter(function(e){return m(e)||/no(-?)highlight/.test(e)})[0]}function i(e,t){var n={};for(var r in e)n[r]=e[r];if(t)for(var r in t)n[r]=t[r];return n}function a(e){var n=[];return function r(e,i){for(var a=e.firstChild;a;a=a.nextSibling)3==a.nodeType?i+=a.nodeValue.length:1==a.nodeType&&(n.push({event:"start",offset:i,node:a}),i=r(a,i),t(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:i,node:a}));return i}(e,0),n}function s(n,r,i){function a(){return n.length&&r.length?n[0].offset!=r[0].offset?n[0].offset<r[0].offset?n:r:"start"==r[0].event?n:r:n.length?n:r}function s(n){function r(t){return" "+t.nodeName+'="'+e(t.value)+'"'}l+="<"+t(n)+Array.prototype.map.call(n.attributes,r).join("")+">"}function o(e){l+="</"+t(e)+">"}function c(e){("start"==e.event?s:o)(e.node)}for(var u=0,l="",f=[];n.length||r.length;){var h=a();if(l+=e(i.substr(u,h[0].offset-u)),u=h[0].offset,h==n){f.reverse().forEach(o);do c(h.splice(0,1)[0]),h=a();while(h==n&&h.length&&h[0].offset==u);f.reverse().forEach(s)}else"start"==h[0].event?f.push(h[0].node):f.pop(),c(h.splice(0,1)[0])}return l+e(i.substr(u))}function o(e){function t(e){return e&&e.source||e}function n(n,r){return RegExp(t(n),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,s){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},c=function(t,n){e.cI&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");o[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=o}a.lR=n(a.l||/\b[A-Za-z0-9_]+\b/,!0),s&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=n(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=n(a.e)),a.tE=t(a.e)||"",a.eW&&s.tE&&(a.tE+=(a.e?"|":"")+s.tE)),a.i&&(a.iR=n(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var u=[];a.c.forEach(function(e){e.v?e.v.forEach(function(t){u.push(i(e,t))}):u.push("self"==e?a:e)}),a.c=u,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,s);var l=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(t).filter(Boolean);a.t=l.length?n(l.join("|"),!0):{exec:function(){return null}}}}r(e)}function c(t,r,i,a){function s(e,t){for(var r=0;r<t.c.length;r++)if(n(t.c[r].bR,e))return t.c[r]}function l(e,t){return n(e.eR,t)?e:e.eW?l(e.parent,t):void 0}function f(e,t){return!i&&n(t.iR,e)}function h(e,t){var n=x.cI?t[0].toLowerCase():t[0];return e.k.hasOwnProperty(n)&&e.k[n]}function g(e,t,n,r){var i=r?"":N.classPrefix,a='<span class="'+i,s=n?"":"</span>";return a+=e+'">',a+t+s}function p(){if(!w.k)return e(B);var t="",n=0;w.lR.lastIndex=0;for(var r=w.lR.exec(B);r;){t+=e(B.substr(n,r.index-n));var i=h(w,r);i?(y+=i[1],t+=g(i[0],e(r[0]))):t+=e(r[0]),n=w.lR.lastIndex,r=w.lR.exec(B)}return t+e(B.substr(n))}function v(){if(w.sL&&!E[w.sL])return e(B);var t=w.sL?c(w.sL,B,!0,L[w.sL]):u(B);return w.r>0&&(y+=t.r),"continuous"==w.subLanguageMode&&(L[w.sL]=t.top),g(t.language,t.value,!1,!0)}function b(){return void 0!==w.sL?v():p()}function d(t,n){var r=t.cN?g(t.cN,"",!0):"";t.rB?(M+=r,B=""):t.eB?(M+=e(n)+r,B=""):(M+=r,B=n),w=Object.create(t,{parent:{value:w}})}function R(t,n){if(B+=t,void 0===n)return M+=b(),0;var r=s(n,w);if(r)return M+=b(),d(r,n),r.rB?0:n.length;var i=l(w,n);if(i){var a=w;a.rE||a.eE||(B+=n),M+=b();do w.cN&&(M+="</span>"),y+=w.r,w=w.parent;while(w!=i.parent);return a.eE&&(M+=e(n)),B="",i.starts&&d(i.starts,""),a.rE?0:n.length}if(f(n,w))throw new Error('Illegal lexeme "'+n+'" for mode "'+(w.cN||"<unnamed>")+'"');return B+=n,n.length||1}var x=m(t);if(!x)throw new Error('Unknown language: "'+t+'"');o(x);for(var w=a||x,L={},M="",k=w;k!=x;k=k.parent)k.cN&&(M=g(k.cN,"",!0)+M);var B="",y=0;try{for(var C,I,j=0;;){if(w.t.lastIndex=j,C=w.t.exec(r),!C)break;I=R(r.substr(j,C.index-j),C[0]),j=C.index+I}R(r.substr(j));for(var k=w;k.parent;k=k.parent)k.cN&&(M+="</span>");return{r:y,value:M,language:t,top:w}}catch(A){if(-1!=A.message.indexOf("Illegal"))return{r:0,value:e(r)};throw A}}function u(t,n){n=n||N.languages||Object.keys(E);var r={r:0,value:e(t)},i=r;return n.forEach(function(e){if(m(e)){var n=c(e,t,!1);n.language=e,n.r>i.r&&(i=n),n.r>r.r&&(i=r,r=n)}}),i.language&&(r.second_best=i),r}function l(e){return N.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t){return t.replace(/\t/g,N.tabReplace)})),N.useBR&&(e=e.replace(/\n/g,"<br>")),e}function f(e,t,n){var r=t?R[t]:n,i=[e.trim()];return e.match(/(\s|^)hljs(\s|$)/)||i.push("hljs"),r&&i.push(r),i.join(" ").trim()}function h(e){var t=r(e);if(!/no(-?)highlight/.test(t)){var n;N.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e;var i=n.textContent,o=t?c(t,i,!0):u(i),h=a(n);if(h.length){var g=document.createElementNS("http://www.w3.org/1999/xhtml","div");g.innerHTML=o.value,o.value=s(h,a(g),i)}o.value=l(o.value),e.innerHTML=o.value,e.className=f(e.className,t,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function g(e){N=i(N,e)}function p(){p.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,h);}function v(){addEventListener("DOMContentLoaded",p,!1),addEventListener("load",p,!1)}function b(e,t){var n=E[e]=t(this);n.aliases&&n.aliases.forEach(function(t){R[t]=e})}function d(){return Object.keys(E)}function m(e){return E[e]||E[R[e]]}var N={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},E={},R={};this.highlight=c,this.highlightAuto=u,this.fixMarkup=l,this.highlightBlock=h,this.configure=g,this.initHighlighting=p,this.initHighlightingOnLoad=v,this.registerLanguage=b,this.listLanguages=d,this.getLanguage=m,this.inherit=i,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]},this.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},this.CLCM={cN:"comment",b:"//",e:"$",c:[this.PWM]},this.CBCM={cN:"comment",b:"/\\*",e:"\\*/",c:[this.PWM]},this.HCM={cN:"comment",b:"#",e:"$",c:[this.PWM]},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.CSSNM={cN:"number",b:this.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},this.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]},this.TM={cN:"title",b:this.IR,r:0},this.UTM={cN:"title",b:this.UIR,r:0}};hljs.registerLanguage("javascript",function(r){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:"("+r.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[r.CLCM,r.CBCM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+r.IR,r:0}]}});hljs.registerLanguage("sql",function(e){var t={cN:"comment",b:"--",e:"$"};return{cI:!0,i:/[<>]/,c:[{cN:"operator",bK:"begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup",e:/;/,eW:!0,k:{keyword:"abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",literal:"true false null",built_in:"array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM,e.CBCM,t]},e.CBCM,t]}});hljs.registerLanguage("python",function(e){var r={cN:"prompt",b:/^(>>>|\.\.\.) /},b={cN:"string",c:[e.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[r],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[r],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/},{b:/(b|br)"/,e:/"/},e.ASM,e.QSM]},i={cN:"number",r:0,v:[{b:e.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:e.CNR+"[lLjJ]?"}]},l={cN:"params",b:/\(/,e:/\)/,c:["self",r,i,b]},n={e:/:/,i:/[${=;\n]/,c:[e.UTM,l]};return{aliases:["py","gyp"],k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[r,i,b,e.HCM,e.inherit(n,{cN:"function",bK:"def",r:10}),e.inherit(n,{cN:"class",bK:"class"}),{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("perl",function(e){var t="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",r={cN:"subst",b:"[$@]\\{",e:"\\}",k:t},s={b:"->{",e:"}"},n={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@][^\s\w{]/,r:0}]},o={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5},i=[e.BE,r,n],c=[n,e.HCM,o,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:!0},s,{cN:"string",c:i,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[e.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[e.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+e.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[e.HCM,o,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[e.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];return r.c=c,s.c=c,{aliases:["pl"],k:t,c:c}});hljs.registerLanguage("apache",function(e){var r={cN:"number",b:"[\\$%]\\d+"};return{aliases:["apacheconf"],cI:!0,c:[e.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",r]},r,e.QSM]}}],i:/\S/}});hljs.registerLanguage("less",function(e){var r="[\\w-]+",t="("+r+"|@{"+r+"})+",a=[],c=[],n=function(e){return{cN:"string",b:"~?"+e+".*?"+e}},i=function(e,r,t){return{cN:e,b:r,r:t}},s=function(r,t,a){return e.inherit({cN:r,b:t+"\\(",e:"\\(",rB:!0,eE:!0,r:0},a)},b={b:"\\(",e:"\\)",c:c,r:0};c.push(e.CLCM,e.CBCM,n("'"),n('"'),e.CSSNM,i("hexcolor","#[0-9A-Fa-f]+\\b"),s("function","(url|data-uri)",{starts:{cN:"string",e:"[\\)\\n]",eE:!0}}),s("function",r),b,i("variable","@@?"+r,10),i("variable","@{"+r+"}"),i("built_in","~?`[^`]*?`"),{cN:"attribute",b:r+"\\s*:",e:":",rB:!0,eE:!0});var o=c.concat({b:"{",e:"}",c:a}),u={bK:"when",eW:!0,c:[{bK:"and not"}].concat(c)},l={cN:"attribute",b:t,r:0,starts:{e:"[;}]",rE:!0,c:c,i:"[<=$]"}},C={cN:"at_rule",b:"@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",starts:{e:"[;{}]",rE:!0,c:c,r:0}},d={cN:"variable",v:[{b:"@"+r+"\\s*:",r:15},{b:"@"+r}],starts:{e:"[;}]",rE:!0,c:o}},p={v:[{b:"[\\.#:&\\[]",e:"[;{}]"},{b:"(?="+t+")("+["//.*","/\\*(?:[^*]|\\*+[^*/])*\\*+/","\\[[^\\]]*\\]","@{.*?}","[^;}'\"`]"].join("|")+")*?[^@'\"`]{",e:"{"}],rB:!0,rE:!0,i:"[<='$\"]",c:[e.CLCM,e.CBCM,u,i("keyword","all\\b"),i("variable","@{"+r+"}"),i("tag",t+"%?",0),i("id","#"+t),i("class","\\."+t,0),i("keyword","&",0),s("pseudo",":not"),s("keyword",":extend"),i("pseudo","::?"+t),{cN:"attr_selector",b:"\\[",e:"\\]"},{b:"\\(",e:"\\)",c:o},{b:"!important"}]};return a.push(e.CLCM,e.CBCM,C,d,p,l),{cI:!0,i:"[=>'/<($\"]",c:a}});hljs.registerLanguage("xml",function(){var t="[A-Za-z0-9\\._:-]+",e={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},c={eW:!0,i:/</,r:0,c:[e,{cN:"attribute",b:t,r:0},{b:"=",r:0,c:[{cN:"value",c:[e],v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xsl","plist"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[c],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[c],starts:{e:"</script>",rE:!0,sL:"javascript"}},e,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:/[^ \/><\n\t]+/,r:0},c]}]}});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",a={cN:"function",b:c+"\\(",rB:!0,eE:!0,e:"\\("};return{cI:!0,i:"[=/|']",c:[e.CBCM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:"tag",b:c,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBCM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("cpp",function(t){var e={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c","h","c++","h++"],k:e,i:"</",c:[t.CLCM,t.CBCM,t.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},t.CNM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line pragma",c:[{b:'include\\s*[<"]',e:'[>"]',k:"include",i:"\\n"},t.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:e,c:["self"]},{b:t.IR+"::"}]}});hljs.registerLanguage("json",function(e){var t={literal:"true false null"},i=[e.QSM,e.CNM],l={cN:"value",e:",",eW:!0,eE:!0,c:i,k:t},c={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:l}],i:"\\S"},n={b:"\\[",e:"\\]",c:[e.inherit(l,{cN:null})],i:"\\S"};return i.splice(i.length,0,c,n),{c:i,k:t,i:"\\S"}});hljs.registerLanguage("coffeescript",function(e){var c={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module global window document"},n="[A-Za-z$_][0-9A-Za-z$_]*",t={cN:"subst",b:/#\{/,e:/}/,k:c},r=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,t]},{b:/"/,e:/"/,c:[e.BE,t]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[t,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{cN:"property",b:"@"+n},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];t.c=r;var i=e.inherit(e.TM,{b:n}),s="(\\(.*\\))?\\s*\\B[-=]>",o={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:c,c:["self"].concat(r)}]};return{aliases:["coffee","cson","iced"],k:c,i:/\/\*/,c:r.concat([{cN:"comment",b:"###",e:"###",c:[e.PWM]},e.HCM,{cN:"function",b:"^\\s*"+n+"\\s*=\\s*"+s,e:"[-=]>",rB:!0,c:[i,o]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:s,e:"[-=]>",rB:!0,c:[o]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[i]},i]},{cN:"attribute",b:n+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("php",function(e){var c={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},i={cN:"preprocessor",b:/<\?(php)?|\?>/},a={cN:"string",c:[e.BE,i],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},n={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},i]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:e.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},i,c,{b:/->+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",c,e.CBCM,a,n]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},a,n]}});hljs.registerLanguage("swift",function(e){var t={keyword:"class deinit enum extension func import init let protocol static struct subscript typealias var break case continue default do else fallthrough if in for return switch where while as dynamicType is new super self Self Type __COLUMN__ __FILE__ __FUNCTION__ __LINE__ associativity didSet get infix inout left mutating none nonmutating operator override postfix precedence prefix right set unowned unowned safe unsafe weak willSet",literal:"true false nil",built_in:"abs advance alignof alignofValue assert bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords enumerate equal false filter find getBridgedObjectiveCType getVaList indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC isUniquelyReferenced join lexicographicalCompare map max maxElement min minElement nil numericCast partition posix print println quickSort reduce reflect reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split startsWith strideof strideofValue swap swift toString transcode true underestimateCount unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer withUnsafePointerToObject withUnsafePointers withVaList"},i={cN:"type",b:"\\b[A-Z][\\w']*",r:0},n={cN:"comment",b:"/\\*",e:"\\*/",c:[e.PWM,"self"]},r={cN:"subst",b:/\\\(/,e:"\\)",k:t,c:[]},s={cN:"number",b:"\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b",r:0},o=e.inherit(e.QSM,{c:[r,e.BE]});return r.c=[s],{k:t,c:[o,e.CLCM,n,i,s,{cN:"func",bK:"func",e:"{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/,i:/\(/}),{cN:"generics",b:/\</,e:/\>/,i:/\>/},{cN:"params",b:/\(/,e:/\)/,k:t,c:["self",s,o,e.CBCM,{b:":"}],i:/["']/}],i:/\[|%/},{cN:"class",k:"struct protocol class extension enum",b:"(struct|protocol|class(?! (func|var))|extension|enum)",e:"\\{",eE:!0,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/})]},{cN:"preprocessor",b:"(@assignment|@class_protocol|@exported|@final|@lazy|@noreturn|@NSCopying|@NSManaged|@objc|@optional|@required|@auto_closure|@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|@infix|@prefix|@postfix)"}]}});hljs.registerLanguage("nginx",function(e){var r={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+e.UIR}]},b={eW:!0,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[e.HCM,{cN:"string",c:[e.BE,r],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:!0,eE:!0,c:[r]},{cN:"regexp",c:[e.BE,r],v:[{b:"\\s\\^",e:"\\s|{|;",rE:!0},{b:"~\\*?\\s+",e:"\\s|{|;",rE:!0},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},r]};return{aliases:["nginxconf"],c:[e.HCM,{b:e.UIR+"\\s",e:";|{",rB:!0,c:[{cN:"title",b:e.UIR,starts:b}],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("diff",function(){return{aliases:["patch"],c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("objectivec",function(e){var t={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSData NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView NSView NSViewController NSWindow NSWindowController NSSet NSUUID NSIndexSet UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection NSURLSession NSURLSessionDataTask NSURLSessionDownloadTask NSURLSessionUploadTask NSURLResponseUIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},o=/[a-zA-Z@][a-zA-Z0-9_]*/,a="@interface @class @protocol @implementation";return{aliases:["m","mm","objc","obj-c"],k:t,l:o,i:"</",c:[e.CLCM,e.CBCM,e.CNM,e.QSM,{cN:"string",v:[{b:'@"',e:'"',i:"\\n",c:[e.BE]},{b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"}]},{cN:"preprocessor",b:"#",e:"$",c:[{cN:"title",v:[{b:'"',e:'"'},{b:"<",e:">"}]}]},{cN:"class",b:"("+a.split(" ").join("|")+")\\b",e:"({|$)",eE:!0,k:a,l:o,c:[e.UTM]},{cN:"variable",b:"\\."+e.UIR,r:0}]}});hljs.registerLanguage("makefile",function(e){var a={cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]};return{aliases:["mk","mak"],c:[e.HCM,{b:/^\w+\s*\W*=/,rB:!0,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:!0,starts:{e:/$/,r:0,c:[a]}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,r:0,c:[e.QSM,a]}]}});hljs.registerLanguage("ruby",function(e){var b="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",c={cN:"yardoctag",b:"@[A-Za-z]+"},a={cN:"value",b:"#<",e:">"},s={cN:"comment",v:[{b:"#",e:"$",c:[c]},{b:"^\\=begin",e:"^\\=end",c:[c],r:10},{b:"^__END__",e:"\\n$"}]},n={cN:"subst",b:"#\\{",e:"}",k:r},t={cN:"string",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]},i={cN:"params",b:"\\(",e:"\\)",k:r},l=[t,a,s,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},s]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":",c:[t,{b:b}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[a,s,{cN:"regexp",c:[e.BE,n],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];n.c=l,i.c=l;var u=[{b:/^\s*=>/,cN:"status",starts:{e:"$",c:l}},{cN:"prompt",b:/^\S[^=>\n]*>+/,starts:{e:"$",c:l}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,c:[s].concat(u).concat(l)}});hljs.registerLanguage("bash",function(e){var r={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]},s={cN:"string",b:/"/,e:/"/,c:[e.BE,r,{cN:"variable",b:/\$\(/,e:/\)/,c:[e.BE]}]},t={cN:"string",b:/'/,e:/'/};return{aliases:["sh","zsh"],l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec function",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:!0,c:[e.inherit(e.TM,{b:/\w[\w\d_]*/})],r:0},e.HCM,e.NM,s,t,r]}});hljs.registerLanguage("cs",function(e){var r="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",t=e.IR+"(<"+e.IR+">)?";return{aliases:["csharp"],k:r,i:/::/,c:[{cN:"comment",b:"///",e:"$",rB:!0,c:[{cN:"xmlDocTag",v:[{b:"///",r:0},{b:"<!--|-->"},{b:"</?",e:">"}]}]},e.CLCM,e.CBCM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},e.ASM,e.QSM,e.CNM,{bK:"class namespace interface",e:/[{;=]/,i:/[^\s:]/,c:[e.TM,e.CLCM,e.CBCM]},{bK:"new",e:/\s/,r:0},{cN:"function",b:"("+t+"\\s+)+"+e.IR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:r,c:[{b:e.IR+"\\s*\\(",rB:!0,c:[e.TM]},{cN:"params",b:/\(/,e:/\)/,k:r,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]}]}});hljs.registerLanguage("markdown",function(){return{aliases:["md","mkdown","mkd"],c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|	)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]:",eB:!0,eE:!0,starts:{cN:"link_url",e:"$"}}]}]}});hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}});hljs.registerLanguage("scss",function(e){{var t="[a-zA-Z-][a-zA-Z0-9_-]*",i={cN:"variable",b:"(\\$"+t+")\\b"},r={cN:"function",b:t+"\\(",rB:!0,eE:!0,e:"\\("},o={cN:"hexcolor",b:"#[0-9A-Fa-f]+"};({cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[r,o,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"important",b:"!important"}]}})}return{cI:!0,i:"[=/|']",c:[e.CLCM,e.CBCM,r,{cN:"id",b:"\\#[A-Za-z0-9_-]+",r:0},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"tag",b:"\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",r:0},{cN:"pseudo",b:":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"},{cN:"pseudo",b:"::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"},i,{cN:"attribute",b:"\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",i:"[^\\s]"},{cN:"value",b:"\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"},{cN:"value",b:":",e:";",c:[r,i,o,e.CSSNM,e.QSM,e.ASM,{cN:"important",b:"!important"}]},{cN:"at_rule",b:"@",e:"[{;]",k:"mixin include extend for if else each while charset import debug media page content font-face namespace warn",c:[r,i,e.QSM,e.ASM,o,e.CSSNM,{cN:"preprocessor",b:"\\s[A-Za-z0-9_.-]+",r:0}]}]}});hljs.registerLanguage("http",function(){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}});hljs.registerLanguage("java",function(e){var t=e.UIR+"(<"+e.UIR+">)?",a="false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private";return{aliases:["jsp"],k:a,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",r:0,c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:"class",bK:"class interface",e:/[{;=]/,eE:!0,k:"class interface",i:/[:"\[\]]/,c:[{bK:"extends implements"},e.UTM]},{bK:"new throw",e:/\s/,r:0},{cN:"function",b:"("+t+"\\s+)+"+e.UIR+"\\s*\\(",rB:!0,e:/[{;=]/,eE:!0,k:a,c:[{b:e.UIR+"\\s*\\(",rB:!0,c:[e.UTM]},{cN:"params",b:/\(/,e:/\)/,k:a,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},e.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("actionscript",function(e){var a="[a-zA-Z_$][a-zA-Z0-9_$]*",c="([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)",t={cN:"rest_arg",b:"[.]{3}",e:a,r:10};return{aliases:["as"],k:{keyword:"as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",literal:"true false null undefined"},c:[e.ASM,e.QSM,e.CLCM,e.CBCM,e.CNM,{cN:"package",bK:"package",e:"{",c:[e.TM]},{cN:"class",bK:"class interface",e:"{",eE:!0,c:[{bK:"extends implements"},e.TM]},{cN:"preprocessor",bK:"import include",e:";"},{cN:"function",bK:"function",e:"[{;]",eE:!0,i:"\\S",c:[e.TM,{cN:"params",b:"\\(",e:"\\)",c:[e.ASM,e.QSM,e.CLCM,e.CBCM,t]},{cN:"type",b:":",e:c,r:10}]}]}});

	/*** EXPORTS FROM exports-loader ***/
	module.exports = hljs;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(43), __webpack_require__(62)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _, _hljs) {
	  return _module.directiveModule.directive('issueDetails', [
	    '$rootScope', '$stateParams', '$location', '$http', '$timeout', 'API', 'NOTIFY', function($rootScope, $stateParams, $location, $http, $timeout, API, NOTIFY) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attr) {
	          var editorKey, issueAPI, submitComment;
	          editorKey = 'issue';
	          issueAPI = null;
	          scope.notFound = false;
	          scope.editing = false;
	          scope.assetPreviewer = {
	            show: false
	          };
	          scope.showAlwaysTop = true;
	          submitComment = function(data) {
	            return issueAPI.comment().create({
	              content: data.content
	            }).then(function(result) {
	              NOTIFY.success('评论保存成功');
	              return scope.$broadcast('comment:list:reload');
	            });
	          };
	          scope.onClickStatus = function(event, issue) {
	            scope.$emit('issue:status-dropdown:show', event, issue);
	          };
	          scope.onClickCloseAssetPreviewer = function() {
	            return scope.assetPreviewer.show = false;
	          };
	          scope.onClickIssue = function(event) {
	            if (scope.editing) {
	              event.stopPropagation();
	            }
	          };
	          scope.$watch('issue', function() {
	            if (!scope.issue) {
	              return;
	            }
	            issueAPI = API.project(scope.issue.project_id).issue(scope.issue.id);
	            scope.uploadUrl = "/api/project/" + scope.issue.project_id + "/attachment";
	            if ($location.$$search.editing === 'true') {
	              return scope.onClickEdit();
	            }
	          });
	          scope.$on('asset:bundle:preview', function(event, asset_id, bundleName) {
	            scope.assetPreviewer.show = true;
	            scope.assetPreviewer.bundleName = bundleName;
	            return issueAPI.assets(asset_id).retrieve().then(function(result) {
	              return scope.$broadcast('asset:bundle:load', result);
	            });
	          });
	          scope.$on('dropdown:selected', function(event, type, value) {
	            var data, field;
	            field = null;
	            switch (type) {
	              case 'issue:owner':
	                if (~~value !== scope.issue.owner) {
	                  field = 'owner';
	                }
	                break;
	              case 'issue:priority':
	                if (~~value !== scope.issue.priority) {
	                  field = 'priority';
	                }
	                break;
	              case 'issue:category':
	                if (~~value !== scope.issue.category_id) {
	                  field = 'category_id';
	                }
	                break;
	              case 'issue:version':
	                if (~~value !== scope.issue.version_id) {
	                  field = 'version_id';
	                }
	            }
	            if (!field) {
	              return;
	            }
	            data = {};
	            data[field] = value;
	            return issueAPI.update(data).then(function() {
	              scope.issue[field] = value;
	              return $rootScope.$broadcast('issue:list:reload');
	            });
	          });
	          scope.$on('issue:status:change', function(event, issue_id, oldStatus, newStatus, split) {
	            var _issueAPI;
	            if (oldStatus === newStatus) {
	              return;
	            }
	            _issueAPI = issueAPI;
	            if (split) {
	              _issueAPI = API.project(scope.issue.project_id).issue(scope.issue.id).split(issue_id);
	            }
	            return _issueAPI.update({
	              status: newStatus
	            }).then(function() {
	              $rootScope.$broadcast('issue:list:reload');
	              return $rootScope.$broadcast('issue:detail:reload');
	            });
	          });
	          scope.$on('datetime:change', function(event, name, date) {
	            switch (name) {
	              case 'plan_finish_time':
	                return issueAPI.update({
	                  plan_finish_time: date
	                }).then(function(result) {
	                  if (result) {
	                    return scope.issue.plan_finish_time = date;
	                  }
	                });
	            }
	          });
	          scope.onClickSplit = function() {
	            scope.splitShow = true;
	            $timeout((function() {
	              return $("#split-text").focus();
	            }), 100);
	            if (!scope.issue.splited) {
	              return issueAPI.update({
	                splited: 1
	              }).then(function(result) {
	                scope.splitShow = true;
	                if (result) {
	                  return $rootScope.$broadcast('issue:detail:reload');
	                }
	              });
	            }
	          };
	          scope.onClickDelete = function() {
	            if (!confirm('您确定要删除这条记录吗')) {
	              return;
	            }
	            return issueAPI.update({
	              status: 'trash'
	            }).then(function() {
	              var url;
	              NOTIFY.success('删除成功');
	              url = $location.$$path.replace(/(.+)\/\d+$/, '$1');
	              $location.path(url);
	              return $rootScope.$broadcast('issue:change');
	            });
	          };
	          scope.onClickEdit = function() {
	            scope.splitShow = false;
	            if (scope.issue.tag !== 'form') {
	              scope.editing = true;
	              window.setTimeout(function() {
	                return scope.$broadcast('editor:content', editorKey, scope.issue.id, scope.issue.content, scope.uploadUrl);
	              }, 1);
	              $('body').one('click', function() {
	                return scope.$broadcast('editor:will:cancel', editorKey);
	              });
	            } else {
	              $rootScope.$broadcast('issue:form:show', scope.issue.id, JSON.parse(scope.issue.content).uuid);
	            }
	          };
	          scope.$on('editor:submit', function(event, name, data) {
	            var newData;
	            if (name === 'comment') {
	              return submitComment(data);
	            }
	            scope.editing = false;
	            scope.issue.content = data.content;
	            newData = _.pick(scope.issue, ['content', 'title']);
	            return issueAPI.update(newData).then(function(result) {
	              NOTIFY.success('更新成功');
	              $timeout(_hljs.initHighlighting, 100);
	              return $rootScope.$broadcast('issue:list:reload');
	            });
	          });
	          scope.$on('editor:cancel', function(event, name) {
	            if (editorKey !== name) {
	              return;
	            }
	            scope.editing = false;
	            if (!scope.$$phase) {
	              return scope.$apply();
	            }
	          });
	          scope.$on('issue:editor:show', function() {
	            return scope.onClickEdit();
	          });
	          return scope.followIssue = function() {
	            return issueAPI.follow().create().then(function(res) {});
	          };
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(65)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(66), __webpack_require__(62)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _template, _hljs) {
	  return _module.directiveModule.directive('commentList', [
	    '$rootScope', '$stateParams', 'API', '$timeout', function($rootScope, $stateParams, API, $timeout) {
	      return {
	        restrict: 'E',
	        scope: {
	          data: '='
	        },
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-comment-list', _template),
	        link: function(scope, element, attr) {
	          var searchComment;
	          searchComment = function(pageIndex, cb) {
	            return API.project($stateParams.project_id).issue($stateParams.issue_id).comment().retrieve({
	              pageSize: 20,
	              pageIndex: pageIndex
	            }).then(function(result) {
	              scope.comments = result;
	              return $timeout(_hljs.initHighlighting, 200);
	            });
	          };
	          scope.$on('comment:list:reload', function() {
	            return searchComment(1, null);
	          });
	          $rootScope.$on('pagination:change', function(event, page, uuid, cb) {
	            if (uuid !== 'comment_list') {
	              return;
	            }
	            return searchComment(page);
	          });
	          return searchComment();
	        }
	      };
	    }
	  ]).directive('commentCell', [
	    '$stateParams', 'API', 'NOTIFY', function($stateParams, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        scope: {
	          data: '='
	        },
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-comment-cell', _template),
	        link: function(scope, element, attr) {
	          scope.onClickEdit = function(event, comment) {};
	          return scope.onClickDelete = function(event, comment) {
	            if (!confirm('您确定要删除这个评论么，删除将无法恢复')) {
	              return;
	            }
	            API.project($stateParams.project_id).issue($stateParams.issue_id).comment(comment.id)["delete"]().then(function() {
	              NOTIFY.success('删除评论成功');
	              return element.fadeOut();
	            });
	          };
	        }
	      };
	    }
	  ]).directive('commentEditor', [
	    '$stateParams', '$timeout', 'API', function($stateParams, $timeout, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-comment-editor', _template),
	        link: function(scope, element, attrs) {
	          var activeClass, editorKey, resizeCommentEditor;
	          activeClass = 'active';
	          editorKey = 'comment';
	          resizeCommentEditor = function() {
	            if (element.parent()) {
	              return element.css('width', element.parent().css('width'));
	            }
	          };
	          scope.onFocusEditor = function() {
	            var issue_id;
	            issue_id = $stateParams.issue_id || null;
	            element.addClass(activeClass);
	            scope.$broadcast('editor:content', editorKey, issue_id, null, attrs.uploadUrl);
	            $('body').one('click', function() {
	              return scope.$broadcast('editor:will:cancel', editorKey);
	            });
	            return true;
	          };
	          scope.$on('editor:cancel', function(event, name) {
	            if (editorKey !== name) {
	              return;
	            }
	            return element.removeClass(activeClass);
	          });
	          scope.$on('editor:submit', function(event, name, data) {
	            if (editorKey !== name) {
	              return;
	            }
	            return element.removeClass(activeClass);
	          });
	          element.bind('click', function(e) {
	            return e.stopPropagation();
	          });
	          $(window).on('onResizeEx', resizeCommentEditor);
	          scope.$on('$destroy', function() {
	            return $(window).off('onResizeEx', resizeCommentEditor);
	          });
	          return $timeout(resizeCommentEditor, 1000);
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 66 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <textarea id=\"tmpl-comment-cell\">\n        <div class=\"row\">\n            <div class=\"information\">\n                <span class=\"floor\">{{$index + 1}}楼</span> ->\n                <span class=\"owner\">{{data.creator_name}}在</span>&nbsp;\n                <span class=\"timestamp\">{{data.timestamp | date: 'yyyy-MM-dd HH:mm:ss'}}</span>\n                说：\n                <div class=\"toolbar\">\n                    <a class=\"edit\" href=\"javascript:void(0)\" ng-click=\"onClickEdit($event, data)\" ng-hide=\"true\">编辑</a>\n                    <a class=\"delete\" href=\"javascript:void(0)\" ng-click=\"onClickDelete($event, data)\">删除</a>\n                </div>\n            </div>\n\n            <div class=\"content editor-style\" ng-bind-html=\"data.content | unsafe\" full-size-image-previewer></div>\n        </div>\n    </textarea> <textarea id=\"tmpl-comment-list\">\n        <div>\n            <div ng-repeat=\"comment in comments.items\">\n                \n                <comment-cell data=\"comment\"></comment-cell>\n            </div>\n            <pagination data-uuid=\"comment_list\" ng-hide=\"comments.pagination.pageCount<2\" data-paginations=\"{{comments.pagination}}\"></pagination>\n        </div>\n    </textarea>  <textarea id=\"tmpl-comment-editor\">\n        <div class=\"comment-editor\">\n            <div class=\"full-editor\">\n                <header>添加评论</header>\n                \n                <editor data-name=\"comment\" data-show-always-top=\"false\" data-upload-url=\"{{uploadUrl}}\" data-member-list=\"\"></editor>\n            </div>\n            \n            <div class=\"simple\">\n                <input type=\"text\" placeholder=\"来，说点什么？\" ng-focus=\"onFocusEditor($event)\"/>\n                \n                <div class=\"top\"></div>\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("comment-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(68), __webpack_require__(73), __webpack_require__(74)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(69), __webpack_require__(71), __webpack_require__(72)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _template, _autocomplete) {
	  return _module.directiveModule.directive('memberSetting', [
	    '$rootScope', 'API', function($rootScope, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-member-setting', _template),
	        link: function(scope, element, attr) {
	          var $o;
	          scope.activeIndex = 0;
	          $o = $(element);
	          $rootScope.$on('member:setting:show', function(event, index) {
	            scope.activeIndex = index;
	            $o.modal({
	              showClose: false
	            });
	            scope.$broadcast("member:setting:bindAll");
	            return scope.$broadcast("member:notification:bindAll");
	          });
	          return $rootScope.$on('member:setting:hide', function() {
	            return $.modal.close();
	          });
	        }
	      };
	    }
	  ]).directive('memberProfile', [
	    '$location', 'API', 'NOTIFY', '$rootScope', function($location, API, NOTIFY, $rootScope) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-member-profile', _template),
	        link: function(scope, element, attr) {
	          scope.contextName = 'memberProfile';
	          scope.bean = {
	            setGits: function(data) {
	              return scope.gits = data;
	            }
	          };
	          scope.onClickSave = function() {
	            scope.profile.gits = scope.gits;
	            if (!scope.profile.email) {
	              return NOTIFY.warn('请输入您的邮箱');
	            }
	            if (!scope.profile.username) {
	              return NOTIFY.warn('用户名必需输入');
	            }
	            if (attr.action === 'account-profile') {
	              API.account().profile().update(scope.profile).then(function() {
	                NOTIFY.success('保存成功！');
	                return scope.$emit('member:setting:hide');
	              });
	            }
	            if (attr.action === 'create-member') {
	              scope.profile.password = '888888';
	              return API.member().create(scope.profile).then(function(result) {
	                NOTIFY.success('创建成员成功！');
	                scope.$emit('member:creator:hide');
	                $rootScope.$broadcast('lookup:update');
	                return $rootScope.$broadcast('member:created:save', result.id);
	              });
	            }
	          };
	          scope.onClickCancel = function() {
	            scope.$emit('member:setting:hide');
	          };
	          scope.$on('member:setting:bindAll', function() {
	            return API.account().profile().retrieve().then(function(result) {
	              scope.profile = result;
	              scope.gits = _.map(result.gits, function(item) {
	                return item.git;
	              });
	              return scope.$broadcast("gitList:load", scope.gits);
	            });
	          });
	          return scope.$on('member:creator:bindAll', function(event, data) {
	            scope.profile = data;
	            scope.$apply();
	          });
	        }
	      };
	    }
	  ]).directive('memberChangePassword', [
	    '$location', 'API', 'NOTIFY', function($location, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: true,
	        template: _utils.extractTemplate('#tmpl-member-change-password', _template),
	        link: function(scope, element, attr) {
	          scope.profile = {};
	          scope.onClickCancel = function() {
	            scope.$emit('member:setting:hide');
	          };
	          return scope.onClickSave = function() {
	            if (scope.profile.new_password !== scope.profile.new_password2) {
	              NOTIFY.warn('您两次输入的密码不一致');
	              return;
	            }
	            API.account().changePassword().update(scope.profile).then(function() {
	              NOTIFY.success('您的密码修改成功！');
	              scope.profile = {};
	              return scope.onClickCancel();
	            });
	          };
	        }
	      };
	    }
	  ]).directive('memberNotification', [
	    '$location', 'API', '$stateParams', 'NOTIFY', function($location, API, $stateParams, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-member-notification', _template),
	        link: function(scope, element, attr) {
	          scope.onClickCancel = function() {
	            return scope.$emit('member:setting:hide');
	          };
	          scope.onClickSave = function() {
	            scope.profile.notification = JSON.stringify(scope.profile.notification);
	            return API.account().profile().update(scope.profile).then(function() {
	              NOTIFY.success('保存成功！');
	              return scope.$emit('member:setting:hide');
	            });
	          };
	          return scope.$on('member:notification:bindAll', function() {
	            return API.account().profile().retrieve().then(function(result) {
	              scope.profile = result;
	              if (result.notification) {
	                scope.profile.notification = JSON.parse(result.notification);
	              }
	              if (scope.profile.notification && (scope.profile.notification.weixin == null)) {
	                scope.profile.notification.weixin = 1;
	              }
	              if (scope.profile.notification && (scope.profile.notification.realtime == null)) {
	                scope.profile.notification.realtime = 1;
	              }
	              if (scope.profile.notification && (scope.profile.notification.email == null)) {
	                scope.profile.notification.email = 1;
	              }
	              if (scope.profile.notification && (scope.profile.notification.client == null)) {
	                return scope.profile.notification.client = 1;
	              }
	            });
	          });
	        }
	      };
	    }
	  ]).directive('memberWeixin', [
	    'API', 'NOTIFY', function(API, NOTIFY) {
	      return {
	        scope: {},
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-member-weixin', _template),
	        link: function(scope, element, attr) {
	          scope.onClickCancel = function() {
	            scope.$emit('member:setting:hide');
	          };
	          return scope.onClickSaveWeixin = function() {
	            API.account().weixin().create({
	              weixin: scope.weixin
	            }).then(function() {
	              NOTIFY.success('微信绑定成功！');
	              return scope.onClickCancel();
	            });
	          };
	        }
	      };
	    }
	  ]).directive('membersLookup', [
	    '$stateParams', 'API', 'STORE', function($stateParams, API, STORE) {
	      return {
	        restrict: 'AC',
	        link: function(scope, element, attrs) {
	          var $this, addMember, buildLookupData, createMember, initLookup, memberAPI, options;
	          $this = $(element);
	          if ($stateParams.project_id) {
	            memberAPI = API.project($stateParams.project_id).member();
	          }
	          if ($stateParams.team_id) {
	            memberAPI = API.team($stateParams.team_id).member();
	          }
	          addMember = function(member_id) {
	            var data;
	            data = {
	              member_id: member_id,
	              role: "d",
	              status: 0
	            };
	            return memberAPI.create(data).then(function() {
	              $this.val("");
	              scope.selectSuggestion = "";
	              if ($stateParams.project_id) {
	                scope.$emit('project:member:request');
	              }
	              if ($stateParams.team_id) {
	                scope.$emit('team:member:request');
	              }
	              return initLookup();
	            });
	          };
	          createMember = function() {
	            var value;
	            value = $this.val();
	            $this.val("");
	            return scope.$emit('member:creator:toshow', value);
	          };
	          $this.on("keyup", function(event) {
	            if (event.keyCode === 13 && scope.selectSuggestion) {
	              addMember(scope.selectSuggestion);
	            }
	            if (event.keyCode === 13 && !scope.selectSuggestion) {
	              return createMember();
	            }
	          });
	          options = {
	            lookup: [],
	            showNoSuggestionNotice: true,
	            noSuggestionNotice: '未找到该用户，按回车键添加该用户',
	            onSelect: function(suggestion) {
	              return scope.selectSuggestion = suggestion.data;
	            }
	          };
	          buildLookupData = function(list) {
	            memberAPI.retrieve().then(function(projectMemberList) {
	              return _.remove(list, function(item) {
	                var result;
	                result = _.findIndex(projectMemberList, function(pItem) {
	                  return item.id === pItem.member_id;
	                }) >= 0;
	                if (!result) {
	                  item.value = item.realname + " -> " + (item.username || '未设置') + " -> " + item.email;
	                  item.data = item.id;
	                  delete item.realname;
	                  delete item.username;
	                  delete item.id;
	                  delete item.role;
	                }
	                return result;
	              });
	            });
	            return list;
	          };
	          initLookup = function() {
	            return API.member().retrieve({
	              pageSize: 9999
	            }).then(function(result) {
	              options.lookup = buildLookupData(result.items);
	              return $this.autocomplete(options);
	            });
	          };
	          scope.$on("lookup:update", function() {
	            return initLookup();
	          });
	          scope.$on('member:created:save', function(event, data) {
	            return addMember(data);
	          });
	          return initLookup();
	        }
	      };
	    }
	  ]).directive('memberCreatorModel', [
	    '$location', 'API', function($location, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-member-creator', _template),
	        link: function(scope, element, attr) {
	          var $o;
	          $o = $(element);
	          scope.$on("member:creator:show", function(event, data) {
	            scope.$broadcast('member:creator:bindAll', {
	              username: data,
	              realname: data
	            });
	            return $o.modal({
	              showClose: false
	            });
	          });
	          return scope.$on('member:creator:hide', function() {
	            return $.modal.close();
	          });
	        }
	      };
	    }
	  ]).directive('projectMemberItem', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'AE',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-member-item', _template),
	        link: function(scope, element, attr) {
	          return scope.removeProjectMember = function(member) {
	            return API.project($stateParams.project_id).member(member.member_id)["delete"]().then(function() {
	              return scope.$emit('project:member:request');
	            });
	          };
	        }
	      };
	    }
	  ]).directive('projectMemberRoleDropdown', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'AE',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-project-member-role-dropdown', _template),
	        link: function(scope, element, attr) {
	          return scope.$on('dropdown:selected', function(event, name, value) {
	            if ('project-member-item' === name) {
	              return API.project($stateParams.project_id).member(scope.member.member_id).update({
	                role: value
	              }).then(function() {
	                return scope.$emit('project:member:request');
	              });
	            }
	          });
	        }
	      };
	    }
	  ]).directive('teamMemberItem', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'AE',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-team-member-item', _template),
	        link: function(scope, element, attr) {
	          return scope.removeTeamMember = function(member) {
	            return API.team($stateParams.team_id).member(member.member_id)["delete"]().then(function() {
	              return scope.$emit('team:member:request');
	            });
	          };
	        }
	      };
	    }
	  ]).directive('teamMemberRoleDropdown', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'AE',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-team-member-role-dropdown', _template),
	        link: function(scope, element, attr) {
	          return scope.$on('dropdown:selected', function(event, name, value) {
	            if ('team-member-item' === name) {
	              return API.team($stateParams.team_id).member(scope.member.member_id).update({
	                role: value
	              }).then(function() {
	                return scope.$emit('team:member:request');
	              });
	            }
	          });
	        }
	      };
	    }
	  ]).directive('memberMessageNotifier', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-member-message-notifier', _template),
	        link: function(scope, element, attr) {
	          var $dropdown, loadMessage;
	          $dropdown = $(element).find('div.message-list');
	          $dropdown.bind('click', function(event) {
	            return event.stopPropagation();
	          });
	          $dropdown.bind('mouseleave', function() {
	            return scope.onCloseNotifier();
	          });
	          scope.onCloseNotifier = function() {
	            return $dropdown.fadeOut();
	          };
	          scope.onClickNotifier = function(event) {
	            event.stopPropagation();
	            $dropdown.fadeIn();
	            $('body').one('click', function() {
	              return scope.onCloseNotifier();
	            });
	          };
	          scope.onClickItem = function(item, hide) {
	            if (hide) {
	              scope.onCloseNotifier();
	            }
	            return API.message(item.id).update().then(function() {
	              return loadMessage();
	            });
	          };
	          scope.onClickReadAll = function() {
	            scope.onCloseNotifier();
	            return API.message().update().then(function() {
	              return loadMessage();
	            });
	          };
	          loadMessage = function() {
	            return API.message().retrieve({
	              pageSize: 10,
	              status: 'new'
	            }).then(function(result) {
	              return scope.message = result;
	            });
	          };
	          scope.$on('member:message:reload', function() {
	            return loadMessage();
	          });
	          return loadMessage();
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>                              <textarea id=\"tmpl-project-member-list\">\n        <member-creator-model></member-creator-model>\n        <div class=\"list project-list-panel member-list\">\n            <header>\n                <h3>项目成员</h3>\n            </header>\n            <div class=\"create\">\n                <input type=\"text\" placeholder=\"请输入将要添加用户的姓名\" members-lookup autofocus/>\n            </div>\n            <ul class=\"details\">\n                <project-member-item></project-member-item>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-project-member-item\">\n        <li ng-repeat=\"member in projectMember\" class=\"row\">\n            <span class=\"name\">{{member.realname}}</span>\n            <span class=\"email\">{{member.email}}</span>\n\n            <div class=\"control\">\n                <a class=\"remove\" ng-if=\"member.member_id!=user.member_id\" ng-click=\"removeProjectMember(member)\">删除</a>\n                <a class=\"remove\" ng-if=\"member.member_id==user.member_id\" ng-click=\"removeProjectMember(member)\">退出</a>\n                <div class=\"role\" dropdown data-name=\"project-member-item\">\n                    {{ member.role | projectMemberRole }}\n                    <i class=\"small icon cell\"></i>\n                    <project-member-role-dropdown></project-member-role-dropdown>\n                </div>\n            </div>\n        </li>\n    </textarea>  <textarea id=\"tmpl-project-member-role-dropdown\">\n        <div class=\"dropdown dropdown-tip\">\n            <ul class=\"dropdown-menu\">\n                <li><a data-value=\"d\">开发</a></li>\n                <li><a data-value=\"l\">Leader</a></li>\n                <li><a data-value=\"p\">产品</a></li>\n                <li><a data-value=\"t\">测试</a></li>\n                <li><a data-value=\"g\">客人</a></li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-team-member-item\">\n        <li ng-repeat=\"member in teamMember\" class=\"row\">\n            <span class=\"name\">{{member.realname}}</span>\n            <span class=\"email\">{{member.email}}</span>\n\n            <div class=\"control\">\n                <span class=\"email\">{{member.status | teamMemberStatus}}</span>\n                <a class=\"remove\" ng-click=\"removeTeamMember(member)\">删除</a>\n                <div class=\"role\" dropdown data-name=\"team-member-item\">\n                    {{ member.role | teamMemberRole }}\n                    <i class=\"small icon cell\"></i>\n                    <team-member-role-dropdown></team-member-role-dropdown>\n                </div>\n            </div>\n        </li>\n    </textarea>  <textarea id=\"tmpl-team-member-role-dropdown\">\n        <div class=\"dropdown dropdown-tip\">\n            <ul class=\"dropdown-menu\">\n                <li><a data-value=\"m\">成员</a></li>\n                <li><a data-value=\"l\">Leader</a></li>\n            </ul>\n        </div>\n    </textarea>  <textarea id=\"tmpl-member-change-password\">\n        <div class=\"panel\">\n            <form class=\"standard-form\" ng-submit=\"onClickSave()\">\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        原密码\n                    </label>\n                    <input class=\"medium text\" type=\"password\" placeholder=\"您的旧密码\" ng-model=\"profile.old_password\" required/>\n                </div>\n\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        新密码\n                    </label>\n                    <input class=\"medium text\" type=\"password\" placeholder=\"请输入新密码\" ng-model=\"profile.new_password\" required ng-minlength=\"6\"/>\n                </div>\n\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        重复密码\n                    </label>\n                    <input class=\"medium text\" type=\"password\" placeholder=\"两次输入的密码必需一致\" ng-model=\"profile.new_password2\" required ng-minlength=\"6\"/>\n                </div>\n\n                <div class=\"row control\">\n                    <button class=\"primary default\">保存</button>\n                    <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                </div>\n            </form>\n        </div>\n    </textarea>  <textarea id=\"tmpl-member-profile\">\n        <div class=\"panel\">\n            <form class=\"standard-form\">\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        用户名\n                    </label>\n                    <input class=\"medium text\" type=\"text\" placeholder=\"用于登录的用户名\" ng-model=\"profile.username\"/>\n                </div>\n\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        姓名\n                    </label>\n                    <input class=\"medium text\" type=\"text\" placeholder=\"用户姓名\" ng-model=\"profile.realname\"/>\n                </div>\n\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        <a href=\"http://git.hunantv.com/profile/account\" target=\"_blank\" title=\"gitlab的个人密钥，用于BHF创建项目时自动新建git仓库. 点击查看自己的token\">Git Token</a>\n                    </label>\n                    <input class=\"medium text\" type=\"text\" placeholder=\"用于创建项目自动新建git仓库\" ng-model=\"profile.gitlab_token\"/>\n                </div>\n\n                <div class=\"row\">\n                  <label class=\"caption\">\n                    邮箱\n                  </label>\n                  <input class=\"medium text\" type=\"text\" placeholder=\"用于接收邮件通知\" ng-model=\"profile.email\"/>\n                </div>\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        Git帐号\n                    </label>\n                    <div class=\"inline\">\n                        <git-list-editor bean=\"bean\" max-count=\"5\">\n                        </git-list-editor>\n                    </div>\n                </div>\n\n                <div class=\"row control\">\n                    <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                    <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                </div>\n            </form>\n        </div>\n    </textarea> <textarea id=\"tmpl-member-notification\">\n        <div class=\"panel\">\n            <form class=\"standard-form\">\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        微信通知\n                    </label>\n                        <input type=\"checkbox\" name=\"weixin\" ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"profile.notification.weixin\"/>\n                    <label class=\"caption\">\n                        客户端推送\n                    </label>\n                        <input type=\"checkbox\" name=\"client\" ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"profile.notification.client\"/>\n                </div>\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        邮件通知\n                    </label>\n                        <input type=\"checkbox\" name=\"email\" ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"profile.notification.email\"/>\n                    <label class=\"caption\">\n                        实时通知\n                    </label>\n                        <input type=\"checkbox\" name=\"realtime\" ng-true-value=\"1\" ng-false-value=\"0\" ng-model=\"profile.notification.realtime\"/>\n                </div>\n                <div class=\"row control\">\n                    <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                    <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                </div>\n            </form>\n        </div>\n    </textarea> <textarea id=\"tmpl-member-weixin\">\n        <div class=\"panel\">\n            <form class=\"standard-form\">\n                <p class=\"title\">扫一扫下面二维码，关注企业微信号，然后绑定自己的微信</p>\n\n                <div class=\"row\">\n                    <img src=\"" + __webpack_require__(70) + "\">\n                </div>\n\n                <div class=\"row\">\n                    <label class=\"caption\">\n                        <a href=\"http://bhf.hunantv.com/wiki/17/category/89/issue/7230?title=FAQs\" target=\"_blank\" title=\"微信号用于接收任务通知等，微信号不是昵称，点击查看如何获取自己的微信号\">\n                            微信号\n                        </a>\n                    </label>\n                    <input class=\"medium text\" type=\"text\" placeholder=\"用于接收微信通知\" ng-model=\"weixin\"/>\n                </div>\n                <div class=\"row control\">\n                    <button class=\"primary default\" ng-click=\"onClickSaveWeixin()\">保存</button>\n                    <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                </div>\n            </form>\n        </div>\n    </textarea> <textarea id=\"tmpl-member-setting\">\n        <div class=\"modal\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <div class=\"simple-tab\" simple-tab data-active-index=\"{{activeIndex}}\">\n                    <ul class=\"nav\" data-field=\"nav\">\n                        <li>个人资料</li>\n                        <li>修改密码</li>\n                        <li>微信绑定</li>\n                        <li>通知设置</li>\n                    </ul>\n                    <div class=\"content\" data-field=\"content\">\n                        <member-profile action=\"account-profile\"></member-profile>\n                        <member-change-password></member-change-password>\n                        <member-weixin></member-weixin>\n                        <member-notification></member-notification>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-member-creator\">\n        <div class=\"modal\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <header>\n                    创建项目成员\n                </header>\n                <section>\n                    <member-profile action=\"create-member\"></member-profile>\n                </section>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-member-message-notifier\">\n        <div class=\"notify\" ng-click=\"onClickNotifier($event)\">\n            <i class=\"small icon\">\n                <span class=\"badge red small\" ng-show=\"message.pagination.recordCount > 0\">{{message.pagination.recordCount}}</span>\n            </i>\n            <span>消息</span>\n            <div class=\"message-list\">\n                <ul>\n                    <li class=\"title\">\n                        您有{{message.pagination.recordCount}}条新消息\n                    </li>\n                    <li class=\"empty\" ng-show=\"message.items.length == 0\">没有任何新消息哦</li>\n                    <li ng-repeat=\"item in message.items\">\n                        <p class=\"content\">\n                            <a href=\"{{item.link}}\" ng-click=\"onClickItem(item, true)\" class=\"title\">{{item.content | limitTo: 60}}</a>\n                            <a href=\"javascript:void(0)\" class=\"readit\" ng-click=\"onClickItem(item, false)\">已读</a>\n                        </p>\n                    </li>\n                    <li class=\"footer\" ng-show=\"message.items.length > 0\">>\n                        <a href=\"javascript:void(0)\" ng-click=\"onClickReadAll()\">全部已读</a>\n                        <a href=\"javascript:void(0)\">查看全部{{message.pagination.recordCount}}条消息</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("member-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "../images/weixin-qy-qrcode.jpg";

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 *  Ajax Autocomplete for jQuery, version 1.2.14
	 *  (c) 2014 Tomas Kirda
	 *
	 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
	 *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
	 */

	/*jslint  browser: true, white: true, plusplus: true */
	/*global define, window, document, jQuery, exports */

	// Expose plugin as an AMD module if AMD loader is present:
	(function (factory) {
	    'use strict';
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object' && typeof require === 'function') {
	        // Browserify
	        factory(require('jquery'));
	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	}(function ($) {
	    'use strict';

	    var
	        utils = (function () {
	            return {
	                escapeRegExChars: function (value) {
	                    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	                },
	                createNode: function (containerClass) {
	                    var div = document.createElement('div');
	                    div.className = containerClass;
	                    div.style.position = 'absolute';
	                    div.style.display = 'none';
	                    return div;
	                }
	            };
	        }()),

	        keys = {
	            ESC: 27,
	            TAB: 9,
	            RETURN: 13,
	            LEFT: 37,
	            UP: 38,
	            RIGHT: 39,
	            DOWN: 40
	        };

	    function Autocomplete(el, options) {
	        var noop = function () { },
	            that = this,
	            defaults = {
	                ajaxSettings: {},
	                autoSelectFirst: false,
	                appendTo: document.body,
	                serviceUrl: null,
	                lookup: null,
	                onSelect: null,
	                width: 'auto',
	                minChars: 1,
	                maxHeight: 300,
	                deferRequestBy: 0,
	                params: {},
	                formatResult: Autocomplete.formatResult,
	                delimiter: null,
	                zIndex: 9999,
	                type: 'GET',
	                noCache: false,
	                onSearchStart: noop,
	                onSearchComplete: noop,
	                onSearchError: noop,
	                containerClass: 'autocomplete-suggestions',
	                tabDisabled: false,
	                dataType: 'text',
	                currentRequest: null,
	                triggerSelectOnValidInput: true,
	                preventBadQueries: true,
	                lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
	                    return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1;
	                },
	                paramName: 'query',
	                transformResult: function (response) {
	                    return typeof response === 'string' ? $.parseJSON(response) : response;
	                },
	                showNoSuggestionNotice: false,
	                noSuggestionNotice: 'No results',
	                orientation: 'bottom',
	                forceFixPosition: false
	            };

	        // Shared variables:
	        that.element = el;
	        that.el = $(el);
	        that.suggestions = [];
	        that.badQueries = [];
	        that.selectedIndex = -1;
	        that.currentValue = that.element.value;
	        that.intervalId = 0;
	        that.cachedResponse = {};
	        that.onChangeInterval = null;
	        that.onChange = null;
	        that.isLocal = false;
	        that.suggestionsContainer = null;
	        that.noSuggestionsContainer = null;
	        that.options = $.extend({}, defaults, options);
	        that.classes = {
	            selected: 'autocomplete-selected',
	            suggestion: 'autocomplete-suggestion'
	        };
	        that.hint = null;
	        that.hintValue = '';
	        that.selection = null;

	        // Initialize and set options:
	        that.initialize();
	        that.setOptions(options);
	    }

	    Autocomplete.utils = utils;

	    $.Autocomplete = Autocomplete;

	    Autocomplete.formatResult = function (suggestion, currentValue) {
	        var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';

	        return suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
	    };

	    Autocomplete.prototype = {

	        killerFn: null,

	        initialize: function () {
	            var that = this,
	                suggestionSelector = '.' + that.classes.suggestion,
	                selected = that.classes.selected,
	                options = that.options,
	                container;

	            // Remove autocomplete attribute to prevent native suggestions:
	            that.element.setAttribute('autocomplete', 'off');

	            that.killerFn = function (e) {
	                if ($(e.target).closest('.' + that.options.containerClass).length === 0) {
	                    that.killSuggestions();
	                    that.disableKillerFn();
	                }
	            };

	            // html() deals with many types: htmlString or Element or Array or jQuery
	            that.noSuggestionsContainer = $('<div class="autocomplete-no-suggestion"></div>')
	                .html(this.options.noSuggestionNotice).get(0);

	            that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);

	            container = $(that.suggestionsContainer);

	            container.appendTo(options.appendTo);

	            // Only set width if it was provided:
	            if (options.width !== 'auto') {
	                container.width(options.width);
	            }

	            // Listen for mouse over event on suggestions list:
	            container.on('mouseover.autocomplete', suggestionSelector, function () {
	                that.activate($(this).data('index'));
	            });

	            // Deselect active element when mouse leaves suggestions container:
	            container.on('mouseout.autocomplete', function () {
	                that.selectedIndex = -1;
	                container.children('.' + selected).removeClass(selected);
	            });

	            // Listen for click event on suggestions list:
	            container.on('click.autocomplete', suggestionSelector, function () {
	                that.select($(this).data('index'));
	            });

	            that.fixPositionCapture = function () {
	                if (that.visible) {
	                    that.fixPosition();
	                }
	            };

	            $(window).on('resize.autocomplete', that.fixPositionCapture);

	            that.el.on('keydown.autocomplete', function (e) { that.onKeyPress(e); });
	            that.el.on('keyup.autocomplete', function (e) { that.onKeyUp(e); });
	            that.el.on('blur.autocomplete', function () { that.onBlur(); });
	            that.el.on('focus.autocomplete', function () { that.onFocus(); });
	            that.el.on('change.autocomplete', function (e) { that.onKeyUp(e); });
	        },

	        onFocus: function () {
	            var that = this;
	            that.fixPosition();
	            if (that.options.minChars <= that.el.val().length) {
	                that.onValueChange();
	            }
	        },

	        onBlur: function () {
	            this.enableKillerFn();
	        },

	        setOptions: function (suppliedOptions) {
	            var that = this,
	                options = that.options;

	            $.extend(options, suppliedOptions);

	            that.isLocal = $.isArray(options.lookup);

	            if (that.isLocal) {
	                options.lookup = that.verifySuggestionsFormat(options.lookup);
	            }

	            options.orientation = that.validateOrientation(options.orientation, 'bottom');

	            // Adjust height, width and z-index:
	            $(that.suggestionsContainer).css({
	                'max-height': options.maxHeight + 'px',
	                'width': options.width + 'px',
	                'z-index': options.zIndex
	            });
	        },


	        clearCache: function () {
	            this.cachedResponse = {};
	            this.badQueries = [];
	        },

	        clear: function () {
	            this.clearCache();
	            this.currentValue = '';
	            this.suggestions = [];
	        },

	        disable: function () {
	            var that = this;
	            that.disabled = true;
	            clearInterval(that.onChangeInterval);
	            if (that.currentRequest) {
	                that.currentRequest.abort();
	            }
	        },

	        enable: function () {
	            this.disabled = false;
	        },

	        fixPosition: function () {
	            // Use only when container has already its content

	            var that = this,
	                $container = $(that.suggestionsContainer),
	                containerParent = $container.parent().get(0);
	            // Fix position automatically when appended to body.
	            // In other cases force parameter must be given.
	            if (containerParent !== document.body && !that.options.forceFixPosition)
	                return;

	            // Choose orientation
	            var orientation = that.options.orientation,
	                containerHeight = $container.outerHeight(),
	                height = that.el.outerHeight(),
	                offset = that.el.offset(),
	                styles = { 'top': offset.top, 'left': offset.left };

	            if (orientation == 'auto') {
	                var viewPortHeight = $(window).height(),
	                    scrollTop = $(window).scrollTop(),
	                    topOverflow = -scrollTop + offset.top - containerHeight,
	                    bottomOverflow = scrollTop + viewPortHeight - (offset.top + height + containerHeight);

	                orientation = (Math.max(topOverflow, bottomOverflow) === topOverflow)
	                    ? 'top'
	                    : 'bottom';
	            }

	            if (orientation === 'top') {
	                styles.top += -containerHeight;
	            } else {
	                styles.top += height;
	            }

	            // If container is not positioned to body,
	            // correct its position using offset parent offset
	            if(containerParent !== document.body) {
	                var opacity = $container.css('opacity'),
	                    parentOffsetDiff;

	                if (!that.visible){
	                    $container.css('opacity', 0).show();
	                }

	                parentOffsetDiff = $container.offsetParent().offset();
	                styles.top -= parentOffsetDiff.top;
	                styles.left -= parentOffsetDiff.left;

	                if (!that.visible){
	                    $container.css('opacity', opacity).hide();
	                }
	            }

	            // -2px to account for suggestions border.
	            if (that.options.width === 'auto') {
	                styles.width = (that.el.outerWidth() - 2) + 'px';
	            }

	            $container.css(styles);
	        },

	        enableKillerFn: function () {
	            var that = this;
	            $(document).on('click.autocomplete', that.killerFn);
	        },

	        disableKillerFn: function () {
	            var that = this;
	            $(document).off('click.autocomplete', that.killerFn);
	        },

	        killSuggestions: function () {
	            var that = this;
	            that.stopKillSuggestions();
	            that.intervalId = window.setInterval(function () {
	                that.hide();
	                that.stopKillSuggestions();
	            }, 50);
	        },

	        stopKillSuggestions: function () {
	            window.clearInterval(this.intervalId);
	        },

	        isCursorAtEnd: function () {
	            var that = this,
	                valLength = that.el.val().length,
	                selectionStart = that.element.selectionStart,
	                range;

	            if (typeof selectionStart === 'number') {
	                return selectionStart === valLength;
	            }
	            if (document.selection) {
	                range = document.selection.createRange();
	                range.moveStart('character', -valLength);
	                return valLength === range.text.length;
	            }
	            return true;
	        },

	        onKeyPress: function (e) {
	            var that = this;

	            // If suggestions are hidden and user presses arrow down, display suggestions:
	            if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
	                that.suggest();
	                return;
	            }

	            if (that.disabled || !that.visible) {
	                return;
	            }

	            switch (e.which) {
	                case keys.ESC:
	                    that.el.val(that.currentValue);
	                    that.hide();
	                    break;
	                case keys.RIGHT:
	                    if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
	                        that.selectHint();
	                        break;
	                    }
	                    return;
	                case keys.TAB:
	                    if (that.hint && that.options.onHint) {
	                        that.selectHint();
	                        return;
	                    }
	                // Fall through to RETURN
	                case keys.RETURN:
	                    if (that.selectedIndex === -1) {
	                        that.hide();
	                        return;
	                    }
	                    that.select(that.selectedIndex);
	                    if (e.which === keys.TAB && that.options.tabDisabled === false) {
	                        return;
	                    }
	                    break;
	                case keys.UP:
	                    that.moveUp();
	                    break;
	                case keys.DOWN:
	                    that.moveDown();
	                    break;
	                default:
	                    return;
	            }

	            // Cancel event if function did not return:
	            e.stopImmediatePropagation();
	            e.preventDefault();
	        },

	        onKeyUp: function (e) {
	            var that = this;

	            if (that.disabled) {
	                return;
	            }

	            switch (e.which) {
	                case keys.UP:
	                case keys.DOWN:
	                    return;
	            }

	            clearInterval(that.onChangeInterval);

	            if (that.currentValue !== that.el.val()) {
	                that.findBestHint();
	                if (that.options.deferRequestBy > 0) {
	                    // Defer lookup in case when value changes very quickly:
	                    that.onChangeInterval = setInterval(function () {
	                        that.onValueChange();
	                    }, that.options.deferRequestBy);
	                } else {
	                    that.onValueChange();
	                }
	            }
	        },

	        onValueChange: function () {
	            var that = this,
	                options = that.options,
	                value = that.el.val(),
	                query = that.getQuery(value),
	                index;

	            if (that.selection && that.currentValue !== query) {
	                that.selection = null;
	                (options.onInvalidateSelection || $.noop).call(that.element);
	            }

	            clearInterval(that.onChangeInterval);
	            that.currentValue = value;
	            that.selectedIndex = -1;

	            // Check existing suggestion for the match before proceeding:
	            if (options.triggerSelectOnValidInput) {
	                index = that.findSuggestionIndex(query);
	                if (index !== -1) {
	                    that.select(index);
	                    return;
	                }
	            }

	            if (query.length < options.minChars) {
	                that.hide();
	            } else {
	                that.getSuggestions(query);
	            }
	        },

	        findSuggestionIndex: function (query) {
	            var that = this,
	                index = -1,
	                queryLowerCase = query.toLowerCase();

	            $.each(that.suggestions, function (i, suggestion) {
	                if (suggestion.value.toLowerCase() === queryLowerCase) {
	                    index = i;
	                    return false;
	                }
	            });

	            return index;
	        },

	        getQuery: function (value) {
	            var delimiter = this.options.delimiter,
	                parts;

	            if (!delimiter) {
	                return value;
	            }
	            parts = value.split(delimiter);
	            return $.trim(parts[parts.length - 1]);
	        },

	        getSuggestionsLocal: function (query) {
	            var that = this,
	                options = that.options,
	                queryLowerCase = query.toLowerCase(),
	                filter = options.lookupFilter,
	                limit = parseInt(options.lookupLimit, 10),
	                data;

	            data = {
	                suggestions: $.grep(options.lookup, function (suggestion) {
	                    return filter(suggestion, query, queryLowerCase);
	                })
	            };

	            if (limit && data.suggestions.length > limit) {
	                data.suggestions = data.suggestions.slice(0, limit);
	            }

	            return data;
	        },

	        getSuggestions: function (q) {
	            var response,
	                that = this,
	                options = that.options,
	                serviceUrl = options.serviceUrl,
	                params,
	                cacheKey,
	                ajaxSettings;

	            options.params[options.paramName] = q;
	            params = options.ignoreParams ? null : options.params;

	            if (options.onSearchStart.call(that.element, options.params) === false) {
	                return;
	            }

	            if (that.isLocal) {
	                response = that.getSuggestionsLocal(q);
	            } else {
	                if ($.isFunction(serviceUrl)) {
	                    serviceUrl = serviceUrl.call(that.element, q);
	                }
	                cacheKey = serviceUrl + '?' + $.param(params || {});
	                response = that.cachedResponse[cacheKey];
	            }

	            if (response && $.isArray(response.suggestions)) {
	                that.suggestions = response.suggestions;
	                that.suggest();
	                options.onSearchComplete.call(that.element, q, response.suggestions);
	            } else if (!that.isBadQuery(q)) {
	                if (that.currentRequest) {
	                    that.currentRequest.abort();
	                }

	                ajaxSettings = {
	                    url: serviceUrl,
	                    data: params,
	                    type: options.type,
	                    dataType: options.dataType
	                };

	                $.extend(ajaxSettings, options.ajaxSettings);

	                that.currentRequest = $.ajax(ajaxSettings).done(function (data) {
	                    var result;
	                    that.currentRequest = null;
	                    result = options.transformResult(data);
	                    that.processResponse(result, q, cacheKey);
	                    options.onSearchComplete.call(that.element, q, result.suggestions);
	                }).fail(function (jqXHR, textStatus, errorThrown) {
	                    options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown);
	                });
	            } else {
	                options.onSearchComplete.call(that.element, q, []);
	            }
	        },

	        isBadQuery: function (q) {
	            if (!this.options.preventBadQueries){
	                return false;
	            }

	            var badQueries = this.badQueries,
	                i = badQueries.length;

	            while (i--) {
	                if (q.indexOf(badQueries[i]) === 0) {
	                    return true;
	                }
	            }

	            return false;
	        },

	        hide: function () {
	            var that = this;
	            that.visible = false;
	            that.selectedIndex = -1;
	            clearInterval(that.onChangeInterval);
	            $(that.suggestionsContainer).hide();
	            that.signalHint(null);
	        },

	        suggest: function () {
	            if (this.suggestions.length === 0) {
	                this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide();
	                return;
	            }

	            var that = this,
	                options = that.options,
	                groupBy = options.groupBy,
	                formatResult = options.formatResult,
	                value = that.getQuery(that.currentValue),
	                className = that.classes.suggestion,
	                classSelected = that.classes.selected,
	                container = $(that.suggestionsContainer),
	                noSuggestionsContainer = $(that.noSuggestionsContainer),
	                beforeRender = options.beforeRender,
	                html = '',
	                category,
	                formatGroup = function (suggestion, index) {
	                    var currentCategory = suggestion.data[groupBy];

	                    if (category === currentCategory){
	                        return '';
	                    }

	                    category = currentCategory;

	                    return '<div class="autocomplete-group"><strong>' + category + '</strong></div>';
	                },
	                index;

	            if (options.triggerSelectOnValidInput) {
	                index = that.findSuggestionIndex(value);
	                if (index !== -1) {
	                    that.select(index);
	                    return;
	                }
	            }

	            // Build suggestions inner HTML:
	            $.each(that.suggestions, function (i, suggestion) {
	                if (groupBy){
	                    html += formatGroup(suggestion, value, i);
	                }

	                html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value) + '</div>';
	            });

	            this.adjustContainerWidth();

	            noSuggestionsContainer.detach();
	            container.html(html);

	            // Select first value by default:
	            if (options.autoSelectFirst) {
	                that.selectedIndex = 0;
	                container.children().first().addClass(classSelected);
	            }

	            if ($.isFunction(beforeRender)) {
	                beforeRender.call(that.element, container);
	            }

	            that.fixPosition();

	            container.show();
	            that.visible = true;

	            that.findBestHint();
	        },

	        noSuggestions: function() {
	            var that = this,
	                container = $(that.suggestionsContainer),
	                noSuggestionsContainer = $(that.noSuggestionsContainer);

	            this.adjustContainerWidth();

	            // Some explicit steps. Be careful here as it easy to get
	            // noSuggestionsContainer removed from DOM if not detached properly.
	            noSuggestionsContainer.detach();
	            container.empty(); // clean suggestions if any
	            container.append(noSuggestionsContainer);

	            that.fixPosition();

	            container.show();
	            that.visible = true;
	        },

	        adjustContainerWidth: function() {
	            var that = this,
	                options = that.options,
	                width,
	                container = $(that.suggestionsContainer);

	            // If width is auto, adjust width before displaying suggestions,
	            // because if instance was created before input had width, it will be zero.
	            // Also it adjusts if input width has changed.
	            // -2px to account for suggestions border.
	            if (options.width === 'auto') {
	                width = that.el.outerWidth() - 2;
	                container.width(width > 0 ? width : 300);
	            }
	        },

	        findBestHint: function () {
	            var that = this,
	                value = that.el.val().toLowerCase(),
	                bestMatch = null;

	            if (!value) {
	                return;
	            }

	            $.each(that.suggestions, function (i, suggestion) {
	                var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
	                if (foundMatch) {
	                    bestMatch = suggestion;
	                }
	                return !foundMatch;
	            });

	            that.signalHint(bestMatch);
	        },

	        signalHint: function (suggestion) {
	            var hintValue = '',
	                that = this;
	            if (suggestion) {
	                hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length);
	            }
	            if (that.hintValue !== hintValue) {
	                that.hintValue = hintValue;
	                that.hint = suggestion;
	                (this.options.onHint || $.noop)(hintValue);
	            }
	        },

	        verifySuggestionsFormat: function (suggestions) {
	            // If suggestions is string array, convert them to supported format:
	            if (suggestions.length && typeof suggestions[0] === 'string') {
	                return $.map(suggestions, function (value) {
	                    return { value: value, data: null };
	                });
	            }

	            return suggestions;
	        },

	        validateOrientation: function(orientation, fallback) {
	            orientation = $.trim(orientation || '').toLowerCase();

	            if($.inArray(orientation, ['auto', 'bottom', 'top']) === -1){
	                orientation = fallback;
	            }

	            return orientation;
	        },

	        processResponse: function (result, originalQuery, cacheKey) {
	            var that = this,
	                options = that.options;

	            result.suggestions = that.verifySuggestionsFormat(result.suggestions);

	            // Cache results if cache is not disabled:
	            if (!options.noCache) {
	                that.cachedResponse[cacheKey] = result;
	                if (options.preventBadQueries && result.suggestions.length === 0) {
	                    that.badQueries.push(originalQuery);
	                }
	            }

	            // Return if originalQuery is not matching current query:
	            if (originalQuery !== that.getQuery(that.currentValue)) {
	                return;
	            }

	            that.suggestions = result.suggestions;
	            that.suggest();
	        },

	        activate: function (index) {
	            var that = this,
	                activeItem,
	                selected = that.classes.selected,
	                container = $(that.suggestionsContainer),
	                children = container.find('.' + that.classes.suggestion);

	            container.find('.' + selected).removeClass(selected);

	            that.selectedIndex = index;

	            if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
	                activeItem = children.get(that.selectedIndex);
	                $(activeItem).addClass(selected);
	                return activeItem;
	            }

	            return null;
	        },

	        selectHint: function () {
	            var that = this,
	                i = $.inArray(that.hint, that.suggestions);

	            that.select(i);
	        },

	        select: function (i) {
	            var that = this;
	            that.hide();
	            that.onSelect(i);
	        },

	        moveUp: function () {
	            var that = this;

	            if (that.selectedIndex === -1) {
	                return;
	            }

	            if (that.selectedIndex === 0) {
	                $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
	                that.selectedIndex = -1;
	                that.el.val(that.currentValue);
	                that.findBestHint();
	                return;
	            }

	            that.adjustScroll(that.selectedIndex - 1);
	        },

	        moveDown: function () {
	            var that = this;

	            if (that.selectedIndex === (that.suggestions.length - 1)) {
	                return;
	            }

	            that.adjustScroll(that.selectedIndex + 1);
	        },

	        adjustScroll: function (index) {
	            var that = this,
	                activeItem = that.activate(index),
	                offsetTop,
	                upperBound,
	                lowerBound,
	                heightDelta = 25;

	            if (!activeItem) {
	                return;
	            }

	            offsetTop = activeItem.offsetTop;
	            upperBound = $(that.suggestionsContainer).scrollTop();
	            lowerBound = upperBound + that.options.maxHeight - heightDelta;

	            if (offsetTop < upperBound) {
	                $(that.suggestionsContainer).scrollTop(offsetTop);
	            } else if (offsetTop > lowerBound) {
	                $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta);
	            }

	            that.el.val(that.getValue(that.suggestions[index].value));
	            that.signalHint(null);
	        },

	        onSelect: function (index) {
	            var that = this,
	                onSelectCallback = that.options.onSelect,
	                suggestion = that.suggestions[index];

	            that.currentValue = that.getValue(suggestion.value);

	            if (that.currentValue !== that.el.val()) {
	                that.el.val(that.currentValue);
	            }

	            that.signalHint(null);
	            that.suggestions = [];
	            that.selection = suggestion;

	            if ($.isFunction(onSelectCallback)) {
	                onSelectCallback.call(that.element, suggestion);
	            }
	        },

	        getValue: function (value) {
	            var that = this,
	                delimiter = that.options.delimiter,
	                currentValue,
	                parts;

	            if (!delimiter) {
	                return value;
	            }

	            currentValue = that.currentValue;
	            parts = currentValue.split(delimiter);

	            if (parts.length === 1) {
	                return value;
	            }

	            return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value;
	        },

	        dispose: function () {
	            var that = this;
	            that.el.off('.autocomplete').removeData('autocomplete');
	            that.disableKillerFn();
	            $(window).off('resize.autocomplete', that.fixPositionCapture);
	            $(that.suggestionsContainer).remove();
	        }
	    };

	    // Create chainable jQuery plugin:
	    $.fn.autocomplete = $.fn.devbridgeAutocomplete = function (options, args) {
	        var dataKey = 'autocomplete';
	        // If function invoked without argument return
	        // instance of the first matched element:
	        if (arguments.length === 0) {
	            return this.first().data(dataKey);
	        }

	        return this.each(function () {
	            var inputElement = $(this),
	                instance = inputElement.data(dataKey);

	            if (typeof options === 'string') {
	                if (instance && typeof instance[options] === 'function') {
	                    instance[options](args);
	                }
	            } else {
	                // If instance already exists, destroy it:
	                if (instance && instance.dispose) {
	                    instance.dispose();
	                }
	                instance = new Autocomplete(this, options);
	                inputElement.data(dataKey, instance);
	            }
	        });
	    };
	}));


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(33);

	/*
	    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
	    Version 0.5.5
	*/
	(function($) {

	  var current = null;

	  $.modal = function(el, options) {
	    $.modal.close(); // Close any open modals.
	    var remove, target;
	    this.$body = $('body');
	    this.options = $.extend({}, $.modal.defaults, options);
	    this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10));
	    if (el.is('a')) {
	      target = el.attr('href');
	      //Select element by id from href
	      if (/^#/.test(target)) {
	        this.$elm = $(target);
	        if (this.$elm.length !== 1) return null;
	        this.open();
	      //AJAX
	      } else {
	        this.$elm = $('<div>');
	        this.$body.append(this.$elm);
	        remove = function(event, modal) { modal.elm.remove(); };
	        this.showSpinner();
	        el.trigger($.modal.AJAX_SEND);
	        $.get(target).done(function(html) {
	          if (!current) return;
	          el.trigger($.modal.AJAX_SUCCESS);
	          current.$elm.empty().append(html).on($.modal.CLOSE, remove);
	          current.hideSpinner();
	          current.open();
	          el.trigger($.modal.AJAX_COMPLETE);
	        }).fail(function() {
	          el.trigger($.modal.AJAX_FAIL);
	          current.hideSpinner();
	          el.trigger($.modal.AJAX_COMPLETE);
	        });
	      }
	    } else {
	      this.$elm = el;
	      this.open();
	    }
	  };

	  $.modal.prototype = {
	    constructor: $.modal,

	    open: function() {
	      var m = this;
	      if(this.options.doFade) {
	        this.block();
	        setTimeout(function() {
	          m.show();
	        }, this.options.fadeDuration * this.options.fadeDelay);
	      } else {
	        this.block();
	        this.show();
	      }
	      if (this.options.escapeClose) {
	        $(document).on('keydown.modal', function(event) {
	          if (event.which == 27) $.modal.close();
	        });
	      }
	      if (this.options.clickClose) this.blocker.click($.modal.close);
	    },

	    close: function() {
	      this.unblock();
	      this.hide();
	      $(document).off('keydown.modal');
	    },

	    block: function() {
	      var initialOpacity = this.options.doFade ? 0 : this.options.opacity;
	      this.$elm.trigger($.modal.BEFORE_BLOCK, [this._ctx()]);
	      this.blocker = $('<div class="jquery-modal blocker"></div>').css({
	        top: 0, right: 0, bottom: 0, left: 0,
	        width: "100%", height: "100%",
	        position: "fixed",
	        zIndex: this.options.zIndex,
	        background: this.options.overlay,
	        opacity: initialOpacity
	      });
	      this.$body.append(this.blocker);
	      if(this.options.doFade) {
	        this.blocker.animate({opacity: this.options.opacity}, this.options.fadeDuration);
	      }
	      this.$elm.trigger($.modal.BLOCK, [this._ctx()]);
	    },

	    unblock: function() {
	      if(this.options.doFade) {
	        this.blocker.fadeOut(this.options.fadeDuration, function() {
	          $(this).remove();
	        });
	      } else {
	        this.blocker.remove();
	      }
	    },

	    show: function() {
	      this.$elm.trigger($.modal.BEFORE_OPEN, [this._ctx()]);
	      if (this.options.showClose) {
	        this.closeButton = $('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + '</a>');
	        this.$elm.append(this.closeButton);
	      }
	      this.$elm.addClass(this.options.modalClass + ' current');
	      this.center();
	      if(this.options.doFade) {
	        this.$elm.fadeIn(this.options.fadeDuration);
	      } else {
	        this.$elm.show();
	      }
	      this.$elm.trigger($.modal.OPEN, [this._ctx()]);
	    },

	    hide: function() {
	      this.$elm.trigger($.modal.BEFORE_CLOSE, [this._ctx()]);
	      if (this.closeButton) this.closeButton.remove();
	      this.$elm.removeClass('current');

	      if(this.options.doFade) {
	        this.$elm.fadeOut(this.options.fadeDuration);
	      } else {
	        this.$elm.hide();
	      }
	      this.$elm.trigger($.modal.CLOSE, [this._ctx()]);
	    },

	    showSpinner: function() {
	      if (!this.options.showSpinner) return;
	      this.spinner = this.spinner || $('<div class="' + this.options.modalClass + '-spinner"></div>')
	        .append(this.options.spinnerHtml);
	      this.$body.append(this.spinner);
	      this.spinner.show();
	    },

	    hideSpinner: function() {
	      if (this.spinner) this.spinner.remove();
	    },

	    center: function() {
	      this.$elm.css({
	        position: 'fixed',
	        top: "50%",
	        left: "50%",
	        marginTop: - (this.$elm.outerHeight() / 2),
	        marginLeft: - (this.$elm.outerWidth() / 2),
	        zIndex: this.options.zIndex + 1
	      });
	    },

	    //Return context for custom events
	    _ctx: function() {
	      return { elm: this.$elm, blocker: this.blocker, options: this.options };
	    }
	  };

	  //resize is alias for center for now
	  $.modal.prototype.resize = $.modal.prototype.center;

	  $.modal.close = function(event) {
	    if (!current) return;
	    if (event) event.preventDefault();
	    current.close();
	    var that = current.$elm;
	    current = null;
	    return that;
	  };

	  $.modal.resize = function() {
	    if (!current) return;
	    current.resize();
	  };

	  // Returns if there currently is an active modal
	  $.modal.isActive = function () {
	    return current ? true : false;
	  }

	  $.modal.defaults = {
	    overlay: "#000",
	    opacity: 0.75,
	    zIndex: 1000,
	    escapeClose: true,
	    clickClose: true,
	    closeText: 'Close',
	    closeClass: '',
	    modalClass: "modal",
	    spinnerHtml: null,
	    showSpinner: true,
	    showClose: true,
	    fadeDuration: null,   // Number of milliseconds the fade animation takes.
	    fadeDelay: 1.0        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
	  };

	  // Event constants
	  $.modal.BEFORE_BLOCK = 'modal:before-block';
	  $.modal.BLOCK = 'modal:block';
	  $.modal.BEFORE_OPEN = 'modal:before-open';
	  $.modal.OPEN = 'modal:open';
	  $.modal.BEFORE_CLOSE = 'modal:before-close';
	  $.modal.CLOSE = 'modal:close';
	  $.modal.AJAX_SEND = 'modal:ajax:send';
	  $.modal.AJAX_SUCCESS = 'modal:ajax:success';
	  $.modal.AJAX_FAIL = 'modal:ajax:fail';
	  $.modal.AJAX_COMPLETE = 'modal:ajax:complete';

	  $.fn.modal = function(options){
	    if (this.length === 1) {
	      current = new $.modal(this, options);
	    }
	    return this;
	  };

	  // Automatically bind links with rel="modal:close" to, well, close the modal.
	  $(document).on('click.modal', 'a[rel="modal:close"]', $.modal.close);
	  $(document).on('click.modal', 'a[rel="modal:open"]', function(event) {
	    event.preventDefault();
	    $(this).modal();
	  });
	})(jQuery);



/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils) {
	  return _module.controllerModule.controller('projectMemberListController', ['$scope', '$stateParams', 'API', function($scope, $stateParams, API) {}]).controller('loginController', ['$scope', 'API', function($scope, API) {}]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(75)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _template) {
	  return _module.directiveModule.directive('signIn', [
	    '$location', '$state', 'API', 'NOTIFY', 'STORE', function($location, $state, API, NOTIFY, STORE) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: true,
	        template: _utils.extractTemplate('#tmpl-member-signin', _template),
	        link: function(scope, element, attr) {
	          scope.model = {};
	          if ($location.$$search.openid_token) {
	            scope.model.openid_token = $location.$$search.openid_token;
	          }
	          if (scope.model.openid_token) {
	            alert("这是您第一次使用openid登录请登录您的BHF账号来进行绑定");
	          }
	          scope.onSubmitSignIn = function() {
	            if (!scope.model.account) {
	              return scope.error = '请输入您的E-mail或者用户名';
	            }
	            if (!scope.model.password) {
	              return scope.error = '请输入您的密码';
	            }
	            return API.session().create(scope.model).then(function(result) {
	              STORE.user.data = result;
	              return $location.path($state.params.next || '/myproject/all/issue/myself');
	            });
	          };
	          scope.onClickResetPassword = function() {
	            if (!scope.model.account) {
	              return scope.error = '请输入您的E-mail或者用户名';
	            }
	            return API.account().resetPassword().retrieve({
	              account: scope.model.account
	            }).then(function(result) {
	              var email;
	              email = result.email.replace(/(.)(.+)(@.+)/i, function(text, first, middle, last) {
	                return first + _.repeat('*', middle.length) + last;
	              });
	              return NOTIFY.success("您的密码已经被重置，新密码已经发送至：" + email, {
	                timeout: 60000
	              });
	            });
	          };
	          return scope.openidLogin = function() {
	            return window.location = "http://openids.intra.hunantv.com/oauth/login/?return_to=http://" + window.location.host + "/api/member/git-token&days=7";
	          };
	        }
	      };
	    }
	  ]).directive('signUp', [
	    '$stateParams', 'API', 'NOTIFY', function($stateParams, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: true,
	        template: _utils.extractTemplate('#tmpl-member-signup', _template),
	        link: function(scope, element, attr) {
	          var model;
	          model = scope.model = {
	            token: $stateParams.token
	          };
	          return scope.onClickSignUp = function() {
	            if (!scope.model.realname) {
	              return scope.error = '请输入您的真实姓名';
	            }
	            if (!scope.model.password) {
	              return scope.error = '密码没有输入或者密码太短';
	            }
	            if (scope.model.password !== scope.model.confirmPassword) {
	              return scope.error = '您两次的密码输入不一致';
	            }
	            return API.member().create(model).then(function() {
	              NOTIFY.success("恭喜您注册成功，请登录");
	              return scope.onClickSwitchPanel('0px');
	            });
	          };
	        }
	      };
	    }
	  ]).directive('authorityPanel', [
	    '$stateParams', function($stateParams) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attrs) {
	          scope.onClickSwitchPanel = function(offset) {
	            $(element).find('.sign-up').css('visibility', 'visible');
	            $(element).css('margin-left', offset);
	          };
	          if ($stateParams.token) {
	            return scope.onClickSwitchPanel('-350px');
	          }
	        }
	      };
	    }
	  ]).directive('inviteMember', [
	    '$location', '$stateParams', 'NOTIFY', 'API', 'HOST', function($location, $stateParams, NOTIFY, API, HOST) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-member-invite', _template),
	        link: function(scope, element, attrs) {
	          var inviteAPI, loadInvitedMember;
	          scope.host = HOST;
	          inviteAPI = API.project($stateParams.project_id).member().invite();
	          loadInvitedMember = function(cb) {
	            return inviteAPI.retrieve().then(function(result) {
	              scope.invitedMember = result;
	              return typeof cb === "function" ? cb() : void 0;
	            });
	          };
	          scope.onClickInvite = function() {
	            return inviteAPI.create().then(function() {
	              NOTIFY.success('您的邀请码已经成功创建，请将链接发给要邀请的同事');
	              return loadInvitedMember();
	            });
	          };
	          return scope.$on('member:invite:show', function() {
	            return loadInvitedMember(function() {
	              return element.modal({
	                showClose: false
	              });
	            });
	          });
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 75 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>  <textarea id=\"tmpl-member-authority\">\n        <div class=\"frame login-view full\">\n            <div class=\"box\">\n                <div class=\"welcome\">\n                    <div class=\"logo\"></div>\n                    <h3>\n                        欢迎登录Kiteam\n                    </h3>\n                    <p class=\"slogan\">\n                        Just for fun\n                    </p>\n                </div>\n\n                <div class=\"body-form\">\n                    <div class=\"inner\" authority-panel>\n                        <div class=\"sign-in\">\n                            <sign-in></sign-in>\n                        </div>\n                        <div class=\"sign-up\">\n                            <sign-up></sign-up>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-member-signin\">\n        <form>\n            <ul>\n                <li class=\"error\">\n                    <span>{{error}}</span>\n                </li>\n                <li>\n                    <input type=\"text\" autofocus=\"true\" ng-model=\"model.account\" class=\"text\" placeholder=\"E-mail或者用户名\">\n                </li>\n                <li>\n                    <input type=\"password\" maxlength=\"16\" ng-model=\"model.password\" class=\"text\" placeholder=\"密码\">\n                </li>\n                <li class=\"additional\">\n                    <label>\n                        <input type=\"checkbox\" ng-model=\"model.remember\"/>记住密码\n                    </label>\n                    <a href=\"javascript:void(0)\" ng-click=\"onClickResetPassword()\">忘记密码</a>\n                </li>\n                <li>\n                    <button ng-click=\"onSubmitSignIn()\">登&nbsp;&nbsp;&nbsp;&nbsp;录\n                    </button>\n                </li>\n            </ul>\n        </form>\n    </textarea>  <textarea id=\"tmpl-member-signup\">\n        <form ng-submit=\"onClickSignUp()\">\n            <ul sign-up>\n                <li class=\"error\">\n                    <span>{{error}}</span>\n                </li>\n                <li>\n                    <input type=\"text\" autofocus=\"true\" ng-model=\"model.realname\" class=\"text\" placeholder=\"您的真实姓名\" required ng-minlength=\"2\" ng-maxlength=\"4\" name=\"realname\">\n                </li>\n                <li>\n                    <input type=\"email\" class=\"text\" placeholder=\"请输入您的常用邮箱\" ng-model=\"model.email\" required name=\"email\">\n                </li>\n                <li>\n                    <input type=\"password\" ng-minlength=\"6\" ng-maxlength=\"16\" class=\"text\" placeholder=\"设置您的密码\" ng-model=\"model.password\" required name=\"password\">\n                </li>\n                <li>\n                    <input type=\"password\" ng-minlength=\"6\" ng-maxlength=\"16\" class=\"text\" placeholder=\"请重复您的密码\" ng-model=\"model.confirmPassword\" required name=\"confirmPassword\">\n                </li>\n                <li>\n                    <button>\n                        注&nbsp;&nbsp;&nbsp;&nbsp;册\n                    </button>\n                </li>\n                <li class=\"right additional\">\n                    <a href=\"javascript:void(0)\" ng-click=\"onClickSwitchPanel('0px')\">已经注册？马上登录</a>\n                </li>\n            </ul>\n        </form>\n    </textarea>  <textarea id=\"tmpl-member-invite\">\n        <div class=\"modal\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <header>\n                    邀请新成员\n                </header>\n                <section>\n                    <form class=\"standard-form\">\n                        <div class=\"row\">\n                            将邀请链接发给其它同事，他们就可以用这个邀请链接注册并加入此项目\n                        </div>\n                        <div class=\"row\" ng-repeat=\"item in invitedMember\">\n                            <input class=\"text large\" value=\"{{host}}/invite/{{item.token}}\">\n                        </div>\n                        <div class=\"row\">\n                            <button class=\"primary default\" ng-click=\"onClickInvite()\">生成</button>\n                        </div>\n                    </form>\n                </section>\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("authority.html",v1)}]);
	module.exports=v1;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(77), __webpack_require__(79)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(78)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _template) {
	  return _module.directiveModule.directive('commitIssueList', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: false,
	        template: _utils.extractTemplate('#tmpl-commit-issue-list', _template),
	        link: function(scope, element, attrs) {
	          var loadCommitList;
	          loadCommitList = function() {
	            return API.project($stateParams.project_id).issue($stateParams.issue_id).commit().retrieve({
	              pageSize: 9999
	            }).then(function(result) {
	              return scope.commits = result.items;
	            });
	          };
	          return loadCommitList();
	        }
	      };
	    }
	  ]).directive('commitImportModal', [
	    '$stateParams', 'API', 'NOTIFY', 'LOADING', function($stateParams, API, NOTIFY, LOADING) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: false,
	        template: _utils.extractTemplate('#tmpl-commit-import', _template),
	        link: function(scope, element, attrs) {
	          var $element, loadGitlabProjects, project_id;
	          project_id = $stateParams.project_id;
	          $element = $(element);
	          scope.$on("commit:import:modal:show", function() {
	            return loadGitlabProjects(function() {
	              return $element.modal({
	                showClose: false
	              });
	            });
	          });
	          loadGitlabProjects = function(cb) {
	            return API.project(project_id).ownedGits().retrieve().then(function(gits) {
	              scope.git_project = gits[0];
	              scope.gits = gits;
	              scope.git_project_branch = gits[0].branches[0];
	              return cb && cb();
	            });
	          };
	          scope.gitChanges = function() {
	            return scope.git_project_branch = scope.git_project.branches[0];
	          };
	          scope.onClickSave = function() {
	            var limit, params;
	            LOADING.loading();
	            limit = parseInt(scope.limit) || 0;
	            params = {
	              project_id: project_id,
	              git_project_id: scope.git_project.id,
	              git_project_branch: scope.git_project_branch,
	              limit: limit
	            };
	            return API.commit()["import"]().retrieve(params).then(function() {
	              LOADING.loaded();
	              NOTIFY.success("导入完成，如未显示请刷新页面");
	              $.modal.close();
	              return scope.$emit("commit:refresh:ready");
	            });
	          };
	          return scope.onClickCancel = function() {
	            $.modal.close();
	            return false;
	          };
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 78 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <textarea id=\"tmpl-commit-list\">\n        <div class=\"commit-list list\">\n            <header>\n                <h3>Commit列表 <button class=\"primary default btn_import\" ng-click=\"showImportModal()\">同步</button></h3>\n            </header>\n            <ul class=\"details\">\n                <li class=\"row\" ng-repeat=\"item in commit.items\">\n                    <a href=\"/{{item | projectLink:'normal'}}/commit/{{item.sha}}?url={{item.url}}\">{{item.message}}</a>\n                    <div class=\"info\">\n                        <span class=\"memo\">\n                            {{item.sha | limitTo: 10}}\n                        </span>\n                        <span class=\"memo\">{{item.realname}}</span>\n                        <span class=\"memo\">{{item.timestamp | date: 'yyyy-MM-dd hh:mm'}}</span>\n                    </div>\n                </li>\n            </ul>\n\n            <div class=\"empty\" ng-show=\"commit.items.length == 0\">\n                没有任何Commit，需要<a href=\"/wiki/17/issue/2993\">了解如何同步到Commit到BHF吗？</a>\n            </div>\n            <commit-import-modal></commit-import-modal>\n\n            <pagination ng-hide=\"commit.pagination.pageCount<2\" data-uuid=\"commit_pagination\" data-paginations=\"{{commit.pagination}}\"></pagination>\n        </div>\n    </textarea> <textarea id=\"tmpl-commit-details\">\n        <iframe frameborder=\"0\" width=\"100%\" height=\"100%\" ng-src=\"{{url}}\" equal-parent-height></iframe>\n    </textarea>  <textarea id=\"tmpl-commit-issue-list\">\n        <div>\n            <ul class=\"list\">\n                <li ng-repeat=\"item in commits\" class=\"row\">\n                    <span class=\"timestamp gray\">{{item.timestamp | date: 'medium'}}</span>\n                    <span class=\"realname gray\">{{item.realname}}</span>\n\n                    <a href=\"{{item.url}}\" target=\"_blank\">{{item.message}}</a>\n                </li>\n            </ul>\n\n            <div class=\"empty\" ng-show=\"commits.length == 0\">\n                哟，此任务还没有提交任何代码呢\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-commit-import\">\n      <div class=\"modal modal_import-commit\">\n          <div class=\"inner\">\n              <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n              <header>\n                  Commits Import\n              </header>\n              <section>\n                  <form class=\"standard-form\">\n                      <div class=\"row\">\n                          <label class=\"caption\">\n                              git仓库:\n                          </label>\n                          <select class=\"form-select\" ng-options=\"item as item.path_with_namespace for item in gits track by item.id\" ng-model=\"git_project\" ng-change=\"gitChanges()\">\n                          </select>\n                      </div>\n                      <div class=\"row\">\n                          <label class=\"caption\">\n                              分支名:\n                          </label>\n                          <select class=\"form-select\" ng-options=\"item for item in git_project.branches\" ng-model=\"git_project_branch\">\n                          </select>\n                      </div>\n                      <div class=\"row\">\n                          <label class=\"caption\">\n                              导入条数：\n                          </label>\n                          <input class=\"small text\" type=\"text\" placeholder=\"最多支持最近100条导入(默认50)\" ng-model=\"limit\" maxlength=\"40\"/>\n                      </div>\n                      <div class=\"row control\">\n                          <button class=\"primary default\" ng-click=\"onClickSave()\">导入</button>\n                          <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                      </div>\n                  </form>\n              </section>\n          </div>\n      </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("commit-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils) {

	  /*
	    Modify:
	      Author: ec.huyinghuan@gmail.com
	      Date: 2015.07.16
	      Describe:
	        提取首次加载数据为一个函数，并且添加一个事件监听器刷新数据
	   */
	  return _module.controllerModule.controller('commitListController', [
	    '$rootScope', '$scope', '$stateParams', 'API', function($rootScope, $scope, $stateParams, API) {
	      var cond, loadData;
	      cond = {
	        pageSize: 20
	      };
	      loadData = function() {
	        return API.project($stateParams.project_id).issue(0).commit().retrieve({
	          pageSize: 20
	        }).then(function(result) {
	          return $scope.commit = result;
	        });
	      };
	      loadData();
	      $scope.$on("commit:refresh:ready", function() {
	        return loadData();
	      });
	      $scope.showImportModal = function() {
	        return $scope.$broadcast("commit:import:modal:show");
	      };
	      return $rootScope.$on('pagination:change', function(event, page, uuid, cb) {
	        if (uuid !== 'commit_pagination') {
	          return;
	        }
	        return API.project($stateParams.project_id).issue(0).commit().retrieve({
	          pageSize: 20,
	          pageIndex: page
	        }).then(function(result) {
	          return $scope.commit = result;
	        });
	      });
	    }
	  ]).controller('commitDetailsController', [
	    '$scope', '$sce', '$state', function($scope, $sce, $state) {
	      return $scope.url = $sce.trustAsResourceUrl($state.params.url);
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(81), __webpack_require__(82)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(43)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _) {
	  return _module.controllerModule.controller('assetsListController', [
	    '$rootScope', '$scope', '$stateParams', 'API', function($rootScope, $scope, $stateParams, API) {
	      var searchAssets;
	      $scope.condition = {};
	      searchAssets = function(query) {
	        $scope.condition = _.extend({
	          pageSize: 20
	        }, query);
	        return API.project($stateParams.project_id).assets().retrieve($scope.condition).then(function(result) {
	          return $scope.assets = result;
	        });
	      };
	      $rootScope.$on('pagination:change', function(event, page, uuid, cb) {
	        if (uuid !== 'asset_pagination') {
	          return;
	        }
	        return searchAssets({
	          pageIndex: page
	        });
	      });
	      $scope.$on('instant-search:change', function(event, keyword) {
	        if ($scope.condition.keyword === keyword) {
	          return;
	        }
	        return searchAssets({
	          keyword: keyword
	        });
	      });
	      return searchAssets();
	    }
	  ]).controller('assetsDetailsController', [
	    '$scope', '$stateParams', '$filter', 'API', function($scope, $stateParams, $filter, API) {
	      return API.project($stateParams.project_id).issue(0).assets($stateParams.asset_id).retrieve().then(function(result) {
	        $scope.asset = result;
	        if ($scope.assetIsBundle = $filter('assetIsBundle')(result.file_name)) {
	          return $scope.$broadcast('asset:bundle:load', result);
	        } else {
	          return $scope.assetType = _utils.detectFileType(result.original_name);
	        }
	      });
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(43), __webpack_require__(83), __webpack_require__(84), __webpack_require__(62), __webpack_require__(85)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _, _marked, _template, _hljs) {
	  return _module.directiveModule.directive('uploadAssets', [
	    '$stateParams', 'API', 'NOTIFY', function($stateParams, API, NOTIFY) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attr) {
	          var $mask, $percent, $progress, filterFn, resetProgress, uploadFn;
	          $progress = $(element).find('.progress');
	          $percent = $(element).find('.percent');
	          $mask = $(element).find('.mask');
	          filterFn = function(file, info) {
	            var confirmSize, maxSize;
	            confirmSize = Math.pow(2, 28);
	            maxSize = Math.pow(2, 30);
	            if (file.size > confirmSize) {
	              return confirm('上传大文件浏览器可能会出现卡死的情况，你确定要上传么');
	            } else if (file.size > maxSize) {
	              alert("上传文件不能超过" + (maxSize / 1024 / 1024) + "M");
	              return false;
	            }
	            return true;
	          };
	          resetProgress = function() {
	            $progress.text('0%');
	            $percent.css('width', '0');
	            return $mask.hide();
	          };
	          uploadFn = function(files, rejected) {
	            if (files.length === 0) {
	              NOTIFY.warn('无可上传的文件');
	              return;
	            }
	            $mask.show();
	            return FileAPI.upload({
	              url: "/api/project/" + $stateParams.project_id + "/issue/" + $stateParams.issue_id + "/assets",
	              files: {
	                assets: files
	              },
	              complete: function(err, xhr) {
	                resetProgress();
	                scope.$emit("assets:upload:finish");
	                if (err) {
	                  return NOTIFY.error('文件上传失败');
	                }
	                return NOTIFY.success('所有文件已经上传成功啦');
	              },
	              progress: function(event, file, xhr, options) {
	                var percent;
	                percent = event.loaded / event.total * 100;
	                $progress.text(percent.toFixed(2) + '%');
	                return $percent.css('width', percent + '%');
	              }
	            });
	          };
	          return __webpack_require__.e/* require */(2/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(59)]; (function() {
	            var target;
	            target = element[0];
	            return FileAPI.event.on(target, 'change', function(event) {
	              var files;
	              files = FileAPI.getFiles(event);
	              return FileAPI.filterFiles(files, filterFn, uploadFn);
	            });
	          }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	        }
	      };
	    }
	  ]).directive('assetThumbnails', [
	    '$stateParams', 'API', function($stateParams, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-asset-thumbnails', _template),
	        link: function(scope, element, attr) {
	          var assetAPI, getAssetList;
	          assetAPI = API.project($stateParams.project_id).issue($stateParams.issue_id);
	          getAssetList = function() {
	            return assetAPI.assets().retrieve({
	              pageSize: 10
	            }).then(function(result) {
	              return scope.assets = result;
	            });
	          };
	          scope.onClickRemove = function(event, asset) {
	            if (!confirm('您确定要删除这个素材吗？')) {
	              return;
	            }
	            return assetAPI.assets(asset.id)["delete"]().then(function() {
	              return getAssetList();
	            });
	          };
	          scope.onClickPreviewPicture = function(event, asset) {
	            $(event.target).colorbox({
	              maxWidth: 1024,
	              photo: true
	            });
	            event.preventDefault();
	            return false;
	          };
	          scope.onClickPreviewBundle = function(event, asset) {
	            return scope.$emit('asset:bundle:preview', asset.id, asset.original_name);
	          };
	          scope.$on("assets:list:update", function() {
	            return getAssetList();
	          });
	          return getAssetList();
	        }
	      };
	    }
	  ]).directive('assetUnwindPreviewer', [
	    '$sce', '$state', function($sce, $state) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-asset-unwind-previewer', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('assetFilePreviewer', [
	    '$stateParams', '$http', 'API', function($stateParams, $http, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-asset-file-previewer', _template),
	        link: function(scope, element, attrs) {
	          var formatCode, formatMarkdown, loadAsset;
	          formatMarkdown = function(content) {
	            return scope.markdownContent = _marked(content);
	          };
	          formatCode = function(content) {
	            var obj;
	            obj = $(element).find('code');
	            obj.text(content);
	            return _hljs.highlightBlock(obj[0]);
	          };
	          loadAsset = function() {
	            var url;
	            url = "/api/project/" + $stateParams.project_id + "/asset/" + $stateParams.asset_id + "/read";
	            scope.assetUrl = url;
	            if (scope.assetType === 'image') {
	              return;
	            }
	            return $http.get(url).success(function(body) {
	              switch (scope.assetType) {
	                case 'markdown':
	                  return formatMarkdown(body);
	                case 'code':
	                  return formatCode(body);
	              }
	            });
	          };
	          return scope.$watch('assetType', function() {
	            if (scope.assetType) {
	              return loadAsset();
	            }
	          });
	        }
	      };
	    }
	  ]).directive('assetPreviewerHeader', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-asset-previewer-header', _template),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('assetBundleUnwind', [
	    '$stateParams', '$filter', 'API', function($stateParams, $filter, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-assets-unwind', _template),
	        link: function(scope, element, attrs) {
	          var loadBundle;
	          scope.bundleName = '';
	          scope.subdir = [];
	          scope.onClickNav = function(event, index) {
	            scope.subdir = scope.subdir.slice(0, index + 1);
	            return loadBundle();
	          };
	          scope.onClickAsset = function(event, asset) {
	            if (asset.is_dir) {
	              scope.subdir.push(asset.original_name);
	              loadBundle();
	            }
	          };
	          scope.$on('asset:bundle:load', function(event, asset) {
	            scope.asset = asset;
	            scope.unwind = [];
	            return loadBundle();
	          });
	          return loadBundle = function() {
	            var params;
	            params = {
	              subdir: scope.subdir.join('/')
	            };
	            return API.project($stateParams.project_id).assets(scope.asset.id).unwind().retrieve(params).then(function(result) {
	              _.map(result, function(item) {
	                var dig;
	                if (item.is_dir) {
	                  return;
	                }
	                dig = "?dig=" + (scope.subdir.join('/')) + "/" + item.original_name;
	                return item.url = $filter('assetLink')(scope.asset, false) + dig;
	              });
	              return scope.unwind = result;
	            });
	          };
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */

	;(function() {

	/**
	 * Block-Level Grammar
	 */

	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};

	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();

	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();

	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();

	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();

	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();

	/**
	 * Normal Block Grammar
	 */

	block.normal = merge({}, block);

	/**
	 * GFM Block Grammar
	 */

	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/
	});

	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();

	/**
	 * GFM + Tables Block Grammar
	 */

	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});

	/**
	 * Block Lexer
	 */

	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;

	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}

	/**
	 * Expose Block Rules
	 */

	Lexer.rules = block;

	/**
	 * Static Lex Method
	 */

	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};

	/**
	 * Preprocessing
	 */

	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');

	  return this.token(src, true);
	};

	/**
	 * Lexing
	 */

	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;

	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }

	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3]
	      });
	      continue;
	    }

	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }

	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }

	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }

	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);

	      this.tokens.push({
	        type: 'blockquote_start'
	      });

	      cap = cap[0].replace(/^ *> ?/gm, '');

	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);

	      this.tokens.push({
	        type: 'blockquote_end'
	      });

	      continue;
	    }

	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];

	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });

	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);

	      next = false;
	      l = cap.length;
	      i = 0;

	      for (; i < l; i++) {
	        item = cap[i];

	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }

	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }

	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }

	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });

	        // Recurse.
	        this.token(item, false, bq);

	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }

	      this.tokens.push({
	        type: 'list_end'
	      });

	      continue;
	    }

	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style',
	        text: cap[0]
	      });
	      continue;
	    }

	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }

	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);

	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };

	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }

	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }

	      this.tokens.push(item);

	      continue;
	    }

	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return this.tokens;
	};

	/**
	 * Inline-Level Grammar
	 */

	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};

	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();

	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();

	/**
	 * Normal Inline Grammar
	 */

	inline.normal = merge({}, inline);

	/**
	 * Pedantic Inline Grammar
	 */

	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});

	/**
	 * GFM Inline Grammar
	 */

	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});

	/**
	 * GFM + Line Breaks Inline Grammar
	 */

	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});

	/**
	 * Inline Lexer & Compiler
	 */

	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;

	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }

	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}

	/**
	 * Expose Inline Rules
	 */

	InlineLexer.rules = inline;

	/**
	 * Static Lexing/Compiling Method
	 */

	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};

	/**
	 * Lexing/Compiling
	 */

	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;

	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }

	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }

	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? escape(cap[0])
	        : cap[0];
	      continue;
	    }

	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }

	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }

	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }

	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }

	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }

	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }

	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += escape(this.smartypants(cap[0]));
	      continue;
	    }

	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }

	  return out;
	};

	/**
	 * Compile Link
	 */

	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;

	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};

	/**
	 * Smartypants Transformations
	 */

	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/--/g, '\u2014')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};

	/**
	 * Mangle Links
	 */

	InlineLexer.prototype.mangle = function(text) {
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;

	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }

	  return out;
	};

	/**
	 * Renderer
	 */

	function Renderer(options) {
	  this.options = options || {};
	}

	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }

	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }

	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};

	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};

	Renderer.prototype.html = function(html) {
	  return html;
	};

	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};

	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};

	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};

	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};

	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};

	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};

	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};

	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};

	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};

	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};

	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};

	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};

	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};

	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};

	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};

	/**
	 * Parsing & Compiling
	 */

	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}

	/**
	 * Static Parse Method
	 */

	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};

	/**
	 * Parse Loop
	 */

	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();

	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }

	  return out;
	};

	/**
	 * Next Token
	 */

	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};

	/**
	 * Preview Next Token
	 */

	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};

	/**
	 * Parse Text Tokens
	 */

	Parser.prototype.parseText = function() {
	  var body = this.token.text;

	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }

	  return this.inline.output(body);
	};

	/**
	 * Parse Current Token
	 */

	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;

	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);

	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];

	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }

	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';

	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }

	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;

	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }

	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';

	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }

	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};

	/**
	 * Helpers
	 */

	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}

	function unescape(html) {
	  return html.replace(/&([#\w]+);/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}

	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}

	function noop() {}
	noop.exec = noop;

	function merge(obj) {
	  var i = 1
	    , target
	    , key;

	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }

	  return obj;
	}


	/**
	 * Marked
	 */

	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }

	    opt = merge({}, marked.defaults, opt || {});

	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;

	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }

	    pending = tokens.length;

	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }

	      var out;

	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }

	      opt.highlight = highlight;

	      return err
	        ? callback(err)
	        : callback(null, out);
	    };

	    if (!highlight || highlight.length < 3) {
	      return done();
	    }

	    delete opt.highlight;

	    if (!pending) return done();

	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }

	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}

	/**
	 * Options
	 */

	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};

	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};

	/**
	 * Expose
	 */

	marked.Parser = Parser;
	marked.parser = Parser.parse;

	marked.Renderer = Renderer;

	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;

	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;

	marked.parse = marked;

	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}

	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 84 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>  <textarea id=\"tmpl-asset-thumbnails\">\n        <ul class=\"asset-thumbnails\">\n            <li ng-repeat=\"asset in assets.items\" title=\"{{asset.original_name}}\">\n                <div ng-class=\"asset.url | getAssetThumbnailClass\" style=\"background-image: url({{asset | assetThumbnail}})\">\n                </div>\n                <div class=\"description\">\n                    <p class=\"filename\">\n                        {{asset.original_name}}\n                    </p>\n                    <p class=\"secondary\">\n                        {{asset.timestamp | date: 'MM月dd日 hh:mm'}}\n                    </p>\n                    <p class=\"secondary\">\n                        {{asset.realname}}/{{asset.file_size | friendlyFileSize}}\n                    </p>\n                </div>\n                <div class=\"overlay\">\n                    <ul>\n                        <li ng-show=\"asset.url | assetIsPicture\">\n                            <a href=\"{{asset | assetLink}}\" ng-click=\"onClickPreviewPicture($event, asset)\">预览</a>\n                        </li>\n\n                        <li ng-show=\"asset.url | assetIsBundle\">\n                            <a href=\"javascript:void(0)\" ng-click=\"onClickPreviewBundle($event, asset)\">预览</a>\n                        </li>\n\n                  \n\n                        <li><a href=\"{{asset | assetLink:true}}\" target=\"_blank\">下载</a></li>\n                        <li><a href=\"javascript:void(0)\" ng-click=\"onClickRemove($event, asset)\">删除</a></li>\n                    </ul>\n                </div>\n            </li>\n            <li>\n                <div class=\"create asset-uploader\" upload-assets>\n                    <input type=\"file\" multiple=\"multiple\"/>\n                    <div class=\"mask\">\n                        <div class=\"progress\">0%</div>\n                        <div class=\"percent-bar\">\n                            <div class=\"percent\"></div>\n                        </div>\n                        <div>上传中</div>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-assets-list\">\n        <div class=\"list\">\n            <header>\n                <h3>素材库({{assets.pagination.recordCount}})</h3>\n            </header>\n            <ul class=\"details\">\n                <li ng-repeat=\"item in assets.items\" class=\"row\">\n                    <a href=\"/{{item | projectLink: 'normal'}}/assets/previewer/{{item.id}}\" class=\"title\" ng-bind-html=\"item.original_name | highlightKeyword: condition.keyword | unsafe\">\n                    </a>\n\n                    <div class=\"info\">\n                        <span class=\"memo\">{{item.file_size | friendlyFileSize}}</span>\n                        <span class=\"memo\">{{item.creator_name}}</span>\n                        <span class=\"memo\">{{item.timestamp | date}}</span>\n                    </div>\n                </li>\n            </ul>\n\n            <div ng-show=\"assets.pagination.recordCount == 0\" class=\"empty\">\n                没有任何素材哦\n            </div>\n\n            <pagination ng-hide=\"assets.pagination.pageCount<2\" data-uuid=\"asset_pagination\" data-paginations=\"{{assets.pagination}}\"></pagination>\n        </div>\n    </textarea>  <textarea id=\"tmpl-assets-details\">\n        <div class=\"inner-view\">\n            <asset-unwind-previewer ng-show=\"assetIsBundle\"></asset-unwind-previewer>\n            <asset-file-previewer ng-show=\"!assetIsBundle\" data-type=\"{{assetType}}\" data-asset-id=\"{{asset.id}}\" data-project-id=\"{{asset.project_id}}\"></asset-file-previewer>\n        </div>\n    </textarea>  <textarea id=\"tmpl-asset-file-previewer\">\n        <div class=\"asset-previewer\">\n            <div class=\"previewer\">\n                <asset-previewer-header></asset-previewer-header>\n\n                \n                <div class=\"download\" ng-show=\"assetType == 'other'\">\n                    很抱歉，此文件无法预览\n                </div>\n\n                \n                <pre ng-show=\"assetType == 'code'\">\n                    <code ng-bind=\"contentHTML\"></code>\n                </pre>\n\n                <div class=\"image\" ng-show=\"assetType == 'image'\">\n                    <a ng-href=\"{{assetUrl}}\" target=\"-_blank\"><img ng-src=\"{{assetUrl}}\"/></a>\n                </div>\n\n                \n                <div class=\"markdown markdown-body\" ng-bind-html=\"markdownContent | unsafe\" ng-show=\"assetType == 'markdown'\"></div>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-asset-unwind-previewer\">\n        <div class=\"asset-unwind-container\">\n            <asset-previewer-header></asset-previewer-header>\n            <asset-bundle-unwind></asset-bundle-unwind>\n        </div>\n    </textarea>  <textarea id=\"tmpl-assets-unwind\">\n       <div class=\"full asset-unwind\">\n           <nav>\n               <a href=\"javascript:void(0)\" ng-click=\"onClickNav($event, -1)\">根目录</a>\n               <span ng-repeat=\"item in subdir\">->\n                   <a href=\"javascript:void(0)\" ng-click=\"onClickNav($event, $index)\">{{item}}</a>\n               </span>\n           </nav>\n\n           <ul class=\"list\">\n               <li class=\"title\">\n                   <span class=\"filename\">文件名</span>\n                   <span class=\"size\">文件大小</span>\n                   <span class=\"size\">修改日期</span>\n               </li>\n               <li ng-repeat=\"asset in unwind\">\n                   <span class=\"filename\">\n                       <img ng-src=\"/images/file-extension-small/{{asset.original_name | extensionImage: asset.is_dir}}.png\"/>\n\n                       <a href=\"javascript:void(0)\" ng-click=\"onClickAsset($event, asset)\" ng-show=\"asset.is_dir\">{{asset.original_name}}</a>\n                       <a href=\"{{asset.url}}\" ng-show=\"!asset.is_dir\" target=\"_blank\">{{asset.original_name}}</a>\n                       <a href=\"{{asset.url}}&download=true\" target=\"_blank\" ng-show=\"!asset.is_dir\" class=\"download\">下载</a>\n                   </span>\n                   <span class=\"size\">{{asset.file_size | friendlyFileSize}}</span>\n                   <span class=\"mtime\">{{asset.timestamp | date: 'medium'}}</span>\n               </li>\n           </ul>\n       </div>\n   </textarea>  <textarea id=\"tmpl-asset-previewer-header\">\n       <header class=\"asset-previewer-header\">\n           <h3>{{asset.original_name}}</h3>\n           <p>\n               <span>文件大小：{{asset.file_size | friendlyFileSize}}</span>\n               |\n               <span>上传日期：{{asset.timestamp | date:'medium'}}</span>\n               |\n               <a ng-href=\"{{asset | assetLink:true}}\" target=\"_blank\">下载</a>\n           </p>\n       </header>\n   </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("assets-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
		Colorbox 1.5.14
		license: MIT
		http://www.jacklmoore.com/colorbox
	*/
	(function ($, document, window) {
		var
		// Default settings object.
		// See http://jacklmoore.com/colorbox for details.
		defaults = {
			// data sources
			html: false,
			photo: false,
			iframe: false,
			inline: false,

			// behavior and appearance
			transition: "elastic",
			speed: 300,
			fadeOut: 300,
			width: false,
			initialWidth: "600",
			innerWidth: false,
			maxWidth: false,
			height: false,
			initialHeight: "450",
			innerHeight: false,
			maxHeight: false,
			scalePhotos: true,
			scrolling: true,
			opacity: 0.9,
			preloading: true,
			className: false,
			overlayClose: true,
			escKey: true,
			arrowKey: true,
			top: false,
			bottom: false,
			left: false,
			right: false,
			fixed: false,
			data: undefined,
			closeButton: true,
			fastIframe: true,
			open: false,
			reposition: true,
			loop: true,
			slideshow: false,
			slideshowAuto: true,
			slideshowSpeed: 2500,
			slideshowStart: "start slideshow",
			slideshowStop: "stop slideshow",
			photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,

			// alternate image paths for high-res displays
			retinaImage: false,
			retinaUrl: false,
			retinaSuffix: '@2x.$1',

			// internationalization
			current: "image {current} of {total}",
			previous: "previous",
			next: "next",
			close: "close",
			xhrError: "This content failed to load.",
			imgError: "This image failed to load.",

			// accessbility
			returnFocus: true,
			trapFocus: true,

			// callbacks
			onOpen: false,
			onLoad: false,
			onComplete: false,
			onCleanup: false,
			onClosed: false,

			rel: function() {
				return this.rel;
			},
			href: function() {
				// using this.href would give the absolute url, when the href may have been inteded as a selector (e.g. '#container')
				return $(this).attr('href');
			},
			title: function() {
				return this.title;
			}
		},

		// Abstracting the HTML and event identifiers for easy rebranding
		colorbox = 'colorbox',
		prefix = 'cbox',
		boxElement = prefix + 'Element',
		
		// Events
		event_open = prefix + '_open',
		event_load = prefix + '_load',
		event_complete = prefix + '_complete',
		event_cleanup = prefix + '_cleanup',
		event_closed = prefix + '_closed',
		event_purge = prefix + '_purge',

		// Cached jQuery Object Variables
		$overlay,
		$box,
		$wrap,
		$content,
		$topBorder,
		$leftBorder,
		$rightBorder,
		$bottomBorder,
		$related,
		$window,
		$loaded,
		$loadingBay,
		$loadingOverlay,
		$title,
		$current,
		$slideshow,
		$next,
		$prev,
		$close,
		$groupControls,
		$events = $('<a/>'), // $({}) would be prefered, but there is an issue with jQuery 1.4.2
		
		// Variables for cached values or use across multiple functions
		settings,
		interfaceHeight,
		interfaceWidth,
		loadedHeight,
		loadedWidth,
		index,
		photo,
		open,
		active,
		closing,
		loadingTimer,
		publicMethod,
		div = "div",
		requests = 0,
		previousCSS = {},
		init;

		// ****************
		// HELPER FUNCTIONS
		// ****************
		
		// Convenience function for creating new jQuery objects
		function $tag(tag, id, css) {
			var element = document.createElement(tag);

			if (id) {
				element.id = prefix + id;
			}

			if (css) {
				element.style.cssText = css;
			}

			return $(element);
		}
		
		// Get the window height using innerHeight when available to avoid an issue with iOS
		// http://bugs.jquery.com/ticket/6724
		function winheight() {
			return window.innerHeight ? window.innerHeight : $(window).height();
		}

		function Settings(element, options) {
			if (options !== Object(options)) {
				options = {};
			}

			this.cache = {};
			this.el = element;

			this.value = function(key) {
				var dataAttr;

				if (this.cache[key] === undefined) {
					dataAttr = $(this.el).attr('data-cbox-'+key);

					if (dataAttr !== undefined) {
						this.cache[key] = dataAttr;
					} else if (options[key] !== undefined) {
						this.cache[key] = options[key];
					} else if (defaults[key] !== undefined) {
						this.cache[key] = defaults[key];
					}
				}

				return this.cache[key];
			};

			this.get = function(key) {
				var value = this.value(key);
				return $.isFunction(value) ? value.call(this.el, this) : value;
			};
		}

		// Determine the next and previous members in a group.
		function getIndex(increment) {
			var
			max = $related.length,
			newIndex = (index + increment) % max;
			
			return (newIndex < 0) ? max + newIndex : newIndex;
		}

		// Convert '%' and 'px' values to integers
		function setSize(size, dimension) {
			return Math.round((/%/.test(size) ? ((dimension === 'x' ? $window.width() : winheight()) / 100) : 1) * parseInt(size, 10));
		}
		
		// Checks an href to see if it is a photo.
		// There is a force photo option (photo: true) for hrefs that cannot be matched by the regex.
		function isImage(settings, url) {
			return settings.get('photo') || settings.get('photoRegex').test(url);
		}

		function retinaUrl(settings, url) {
			return settings.get('retinaUrl') && window.devicePixelRatio > 1 ? url.replace(settings.get('photoRegex'), settings.get('retinaSuffix')) : url;
		}

		function trapFocus(e) {
			if ('contains' in $box[0] && !$box[0].contains(e.target) && e.target !== $overlay[0]) {
				e.stopPropagation();
				$box.focus();
			}
		}

		function setClass(str) {
			if (setClass.str !== str) {
				$box.add($overlay).removeClass(setClass.str).addClass(str);
				setClass.str = str;
			}
		}

		function getRelated(rel) {
			index = 0;
			
			if (rel && rel !== false && rel !== 'nofollow') {
				$related = $('.' + boxElement).filter(function () {
					var options = $.data(this, colorbox);
					var settings = new Settings(this, options);
					return (settings.get('rel') === rel);
				});
				index = $related.index(settings.el);
				
				// Check direct calls to Colorbox.
				if (index === -1) {
					$related = $related.add(settings.el);
					index = $related.length - 1;
				}
			} else {
				$related = $(settings.el);
			}
		}

		function trigger(event) {
			// for external use
			$(document).trigger(event);
			// for internal use
			$events.triggerHandler(event);
		}

		var slideshow = (function(){
			var active,
				className = prefix + "Slideshow_",
				click = "click." + prefix,
				timeOut;

			function clear () {
				clearTimeout(timeOut);
			}

			function set() {
				if (settings.get('loop') || $related[index + 1]) {
					clear();
					timeOut = setTimeout(publicMethod.next, settings.get('slideshowSpeed'));
				}
			}

			function start() {
				$slideshow
					.html(settings.get('slideshowStop'))
					.unbind(click)
					.one(click, stop);

				$events
					.bind(event_complete, set)
					.bind(event_load, clear);

				$box.removeClass(className + "off").addClass(className + "on");
			}

			function stop() {
				clear();
				
				$events
					.unbind(event_complete, set)
					.unbind(event_load, clear);

				$slideshow
					.html(settings.get('slideshowStart'))
					.unbind(click)
					.one(click, function () {
						publicMethod.next();
						start();
					});

				$box.removeClass(className + "on").addClass(className + "off");
			}

			function reset() {
				active = false;
				$slideshow.hide();
				clear();
				$events
					.unbind(event_complete, set)
					.unbind(event_load, clear);
				$box.removeClass(className + "off " + className + "on");
			}

			return function(){
				if (active) {
					if (!settings.get('slideshow')) {
						$events.unbind(event_cleanup, reset);
						reset();
					}
				} else {
					if (settings.get('slideshow') && $related[1]) {
						active = true;
						$events.one(event_cleanup, reset);
						if (settings.get('slideshowAuto')) {
							start();
						} else {
							stop();
						}
						$slideshow.show();
					}
				}
			};

		}());


		function launch(element) {
			var options;

			if (!closing) {

				options = $(element).data(colorbox);

				settings = new Settings(element, options);
				
				getRelated(settings.get('rel'));

				if (!open) {
					open = active = true; // Prevents the page-change action from queuing up if the visitor holds down the left or right keys.

					setClass(settings.get('className'));
					
					// Show colorbox so the sizes can be calculated in older versions of jQuery
					$box.css({visibility:'hidden', display:'block', opacity:''});
					
					$loaded = $tag(div, 'LoadedContent', 'width:0; height:0; overflow:hidden; visibility:hidden');
					$content.css({width:'', height:''}).append($loaded);

					// Cache values needed for size calculations
					interfaceHeight = $topBorder.height() + $bottomBorder.height() + $content.outerHeight(true) - $content.height();
					interfaceWidth = $leftBorder.width() + $rightBorder.width() + $content.outerWidth(true) - $content.width();
					loadedHeight = $loaded.outerHeight(true);
					loadedWidth = $loaded.outerWidth(true);

					// Opens inital empty Colorbox prior to content being loaded.
					var initialWidth = setSize(settings.get('initialWidth'), 'x');
					var initialHeight = setSize(settings.get('initialHeight'), 'y');
					var maxWidth = settings.get('maxWidth');
					var maxHeight = settings.get('maxHeight');

					settings.w = (maxWidth !== false ? Math.min(initialWidth, setSize(maxWidth, 'x')) : initialWidth) - loadedWidth - interfaceWidth;
					settings.h = (maxHeight !== false ? Math.min(initialHeight, setSize(maxHeight, 'y')) : initialHeight) - loadedHeight - interfaceHeight;

					$loaded.css({width:'', height:settings.h});
					publicMethod.position();

					trigger(event_open);
					settings.get('onOpen');

					$groupControls.add($title).hide();

					$box.focus();
					
					if (settings.get('trapFocus')) {
						// Confine focus to the modal
						// Uses event capturing that is not supported in IE8-
						if (document.addEventListener) {

							document.addEventListener('focus', trapFocus, true);
							
							$events.one(event_closed, function () {
								document.removeEventListener('focus', trapFocus, true);
							});
						}
					}

					// Return focus on closing
					if (settings.get('returnFocus')) {
						$events.one(event_closed, function () {
							$(settings.el).focus();
						});
					}
				}

				var opacity = parseFloat(settings.get('opacity'));
				$overlay.css({
					opacity: opacity === opacity ? opacity : '',
					cursor: settings.get('overlayClose') ? 'pointer' : '',
					visibility: 'visible'
				}).show();
				
				if (settings.get('closeButton')) {
					$close.html(settings.get('close')).appendTo($content);
				} else {
					$close.appendTo('<div/>'); // replace with .detach() when dropping jQuery < 1.4
				}

				load();
			}
		}

		// Colorbox's markup needs to be added to the DOM prior to being called
		// so that the browser will go ahead and load the CSS background images.
		function appendHTML() {
			if (!$box) {
				init = false;
				$window = $(window);
				$box = $tag(div).attr({
					id: colorbox,
					'class': $.support.opacity === false ? prefix + 'IE' : '', // class for optional IE8 & lower targeted CSS.
					role: 'dialog',
					tabindex: '-1'
				}).hide();
				$overlay = $tag(div, "Overlay").hide();
				$loadingOverlay = $([$tag(div, "LoadingOverlay")[0],$tag(div, "LoadingGraphic")[0]]);
				$wrap = $tag(div, "Wrapper");
				$content = $tag(div, "Content").append(
					$title = $tag(div, "Title"),
					$current = $tag(div, "Current"),
					$prev = $('<button type="button"/>').attr({id:prefix+'Previous'}),
					$next = $('<button type="button"/>').attr({id:prefix+'Next'}),
					$slideshow = $tag('button', "Slideshow"),
					$loadingOverlay
				);

				$close = $('<button type="button"/>').attr({id:prefix+'Close'});
				
				$wrap.append( // The 3x3 Grid that makes up Colorbox
					$tag(div).append(
						$tag(div, "TopLeft"),
						$topBorder = $tag(div, "TopCenter"),
						$tag(div, "TopRight")
					),
					$tag(div, false, 'clear:left').append(
						$leftBorder = $tag(div, "MiddleLeft"),
						$content,
						$rightBorder = $tag(div, "MiddleRight")
					),
					$tag(div, false, 'clear:left').append(
						$tag(div, "BottomLeft"),
						$bottomBorder = $tag(div, "BottomCenter"),
						$tag(div, "BottomRight")
					)
				).find('div div').css({'float': 'left'});
				
				$loadingBay = $tag(div, false, 'position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;');
				
				$groupControls = $next.add($prev).add($current).add($slideshow);
			}
			if (document.body && !$box.parent().length) {
				$(document.body).append($overlay, $box.append($wrap, $loadingBay));
			}
		}

		// Add Colorbox's event bindings
		function addBindings() {
			function clickHandler(e) {
				// ignore non-left-mouse-clicks and clicks modified with ctrl / command, shift, or alt.
				// See: http://jacklmoore.com/notes/click-events/
				if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey)) {
					e.preventDefault();
					launch(this);
				}
			}

			if ($box) {
				if (!init) {
					init = true;

					// Anonymous functions here keep the public method from being cached, thereby allowing them to be redefined on the fly.
					$next.click(function () {
						publicMethod.next();
					});
					$prev.click(function () {
						publicMethod.prev();
					});
					$close.click(function () {
						publicMethod.close();
					});
					$overlay.click(function () {
						if (settings.get('overlayClose')) {
							publicMethod.close();
						}
					});
					
					// Key Bindings
					$(document).bind('keydown.' + prefix, function (e) {
						var key = e.keyCode;
						if (open && settings.get('escKey') && key === 27) {
							e.preventDefault();
							publicMethod.close();
						}
						if (open && settings.get('arrowKey') && $related[1] && !e.altKey) {
							if (key === 37) {
								e.preventDefault();
								$prev.click();
							} else if (key === 39) {
								e.preventDefault();
								$next.click();
							}
						}
					});

					if ($.isFunction($.fn.on)) {
						// For jQuery 1.7+
						$(document).on('click.'+prefix, '.'+boxElement, clickHandler);
					} else {
						// For jQuery 1.3.x -> 1.6.x
						// This code is never reached in jQuery 1.9, so do not contact me about 'live' being removed.
						// This is not here for jQuery 1.9, it's here for legacy users.
						$('.'+boxElement).live('click.'+prefix, clickHandler);
					}
				}
				return true;
			}
			return false;
		}

		// Don't do anything if Colorbox already exists.
		if ($[colorbox]) {
			return;
		}

		// Append the HTML when the DOM loads
		$(appendHTML);


		// ****************
		// PUBLIC FUNCTIONS
		// Usage format: $.colorbox.close();
		// Usage from within an iframe: parent.jQuery.colorbox.close();
		// ****************
		
		publicMethod = $.fn[colorbox] = $[colorbox] = function (options, callback) {
			var settings;
			var $obj = this;

			options = options || {};

			if ($.isFunction($obj)) { // assume a call to $.colorbox
				$obj = $('<a/>');
				options.open = true;
			} else if (!$obj[0]) { // colorbox being applied to empty collection
				return $obj;
			}


			if (!$obj[0]) { // colorbox being applied to empty collection
				return $obj;
			}
			
			appendHTML();

			if (addBindings()) {

				if (callback) {
					options.onComplete = callback;
				}

				$obj.each(function () {
					var old = $.data(this, colorbox) || {};
					$.data(this, colorbox, $.extend(old, options));
				}).addClass(boxElement);

				settings = new Settings($obj[0], options);
				
				if (settings.get('open')) {
					launch($obj[0]);
				}
			}
			
			return $obj;
		};

		publicMethod.position = function (speed, loadedCallback) {
			var
			css,
			top = 0,
			left = 0,
			offset = $box.offset(),
			scrollTop,
			scrollLeft;
			
			$window.unbind('resize.' + prefix);

			// remove the modal so that it doesn't influence the document width/height
			$box.css({top: -9e4, left: -9e4});

			scrollTop = $window.scrollTop();
			scrollLeft = $window.scrollLeft();

			if (settings.get('fixed')) {
				offset.top -= scrollTop;
				offset.left -= scrollLeft;
				$box.css({position: 'fixed'});
			} else {
				top = scrollTop;
				left = scrollLeft;
				$box.css({position: 'absolute'});
			}

			// keeps the top and left positions within the browser's viewport.
			if (settings.get('right') !== false) {
				left += Math.max($window.width() - settings.w - loadedWidth - interfaceWidth - setSize(settings.get('right'), 'x'), 0);
			} else if (settings.get('left') !== false) {
				left += setSize(settings.get('left'), 'x');
			} else {
				left += Math.round(Math.max($window.width() - settings.w - loadedWidth - interfaceWidth, 0) / 2);
			}
			
			if (settings.get('bottom') !== false) {
				top += Math.max(winheight() - settings.h - loadedHeight - interfaceHeight - setSize(settings.get('bottom'), 'y'), 0);
			} else if (settings.get('top') !== false) {
				top += setSize(settings.get('top'), 'y');
			} else {
				top += Math.round(Math.max(winheight() - settings.h - loadedHeight - interfaceHeight, 0) / 2);
			}

			$box.css({top: offset.top, left: offset.left, visibility:'visible'});
			
			// this gives the wrapper plenty of breathing room so it's floated contents can move around smoothly,
			// but it has to be shrank down around the size of div#colorbox when it's done.  If not,
			// it can invoke an obscure IE bug when using iframes.
			$wrap[0].style.width = $wrap[0].style.height = "9999px";
			
			function modalDimensions() {
				$topBorder[0].style.width = $bottomBorder[0].style.width = $content[0].style.width = (parseInt($box[0].style.width,10) - interfaceWidth)+'px';
				$content[0].style.height = $leftBorder[0].style.height = $rightBorder[0].style.height = (parseInt($box[0].style.height,10) - interfaceHeight)+'px';
			}

			css = {width: settings.w + loadedWidth + interfaceWidth, height: settings.h + loadedHeight + interfaceHeight, top: top, left: left};

			// setting the speed to 0 if the content hasn't changed size or position
			if (speed) {
				var tempSpeed = 0;
				$.each(css, function(i){
					if (css[i] !== previousCSS[i]) {
						tempSpeed = speed;
						return;
					}
				});
				speed = tempSpeed;
			}

			previousCSS = css;

			if (!speed) {
				$box.css(css);
			}

			$box.dequeue().animate(css, {
				duration: speed || 0,
				complete: function () {
					modalDimensions();
					
					active = false;
					
					// shrink the wrapper down to exactly the size of colorbox to avoid a bug in IE's iframe implementation.
					$wrap[0].style.width = (settings.w + loadedWidth + interfaceWidth) + "px";
					$wrap[0].style.height = (settings.h + loadedHeight + interfaceHeight) + "px";
					
					if (settings.get('reposition')) {
						setTimeout(function () {  // small delay before binding onresize due to an IE8 bug.
							$window.bind('resize.' + prefix, publicMethod.position);
						}, 1);
					}

					if ($.isFunction(loadedCallback)) {
						loadedCallback();
					}
				},
				step: modalDimensions
			});
		};

		publicMethod.resize = function (options) {
			var scrolltop;
			
			if (open) {
				options = options || {};
				
				if (options.width) {
					settings.w = setSize(options.width, 'x') - loadedWidth - interfaceWidth;
				}

				if (options.innerWidth) {
					settings.w = setSize(options.innerWidth, 'x');
				}

				$loaded.css({width: settings.w});
				
				if (options.height) {
					settings.h = setSize(options.height, 'y') - loadedHeight - interfaceHeight;
				}

				if (options.innerHeight) {
					settings.h = setSize(options.innerHeight, 'y');
				}

				if (!options.innerHeight && !options.height) {
					scrolltop = $loaded.scrollTop();
					$loaded.css({height: "auto"});
					settings.h = $loaded.height();
				}

				$loaded.css({height: settings.h});

				if(scrolltop) {
					$loaded.scrollTop(scrolltop);
				}
				
				publicMethod.position(settings.get('transition') === "none" ? 0 : settings.get('speed'));
			}
		};

		publicMethod.prep = function (object) {
			if (!open) {
				return;
			}
			
			var callback, speed = settings.get('transition') === "none" ? 0 : settings.get('speed');

			$loaded.remove();

			$loaded = $tag(div, 'LoadedContent').append(object);
			
			function getWidth() {
				settings.w = settings.w || $loaded.width();
				settings.w = settings.mw && settings.mw < settings.w ? settings.mw : settings.w;
				return settings.w;
			}
			function getHeight() {
				settings.h = settings.h || $loaded.height();
				settings.h = settings.mh && settings.mh < settings.h ? settings.mh : settings.h;
				return settings.h;
			}
			
			$loaded.hide()
			.appendTo($loadingBay.show())// content has to be appended to the DOM for accurate size calculations.
			.css({width: getWidth(), overflow: settings.get('scrolling') ? 'auto' : 'hidden'})
			.css({height: getHeight()})// sets the height independently from the width in case the new width influences the value of height.
			.prependTo($content);
			
			$loadingBay.hide();
			
			// floating the IMG removes the bottom line-height and fixed a problem where IE miscalculates the width of the parent element as 100% of the document width.
			
			$(photo).css({'float': 'none'});

			setClass(settings.get('className'));

			callback = function () {
				var total = $related.length,
					iframe,
					complete;
				
				if (!open) {
					return;
				}
				
				function removeFilter() { // Needed for IE8 in versions of jQuery prior to 1.7.2
					if ($.support.opacity === false) {
						$box[0].style.removeAttribute('filter');
					}
				}
				
				complete = function () {
					clearTimeout(loadingTimer);
					$loadingOverlay.hide();
					trigger(event_complete);
					settings.get('onComplete');
				};

				
				$title.html(settings.get('title')).show();
				$loaded.show();
				
				if (total > 1) { // handle grouping
					if (typeof settings.get('current') === "string") {
						$current.html(settings.get('current').replace('{current}', index + 1).replace('{total}', total)).show();
					}
					
					$next[(settings.get('loop') || index < total - 1) ? "show" : "hide"]().html(settings.get('next'));
					$prev[(settings.get('loop') || index) ? "show" : "hide"]().html(settings.get('previous'));
					
					slideshow();
					
					// Preloads images within a rel group
					if (settings.get('preloading')) {
						$.each([getIndex(-1), getIndex(1)], function(){
							var img,
								i = $related[this],
								settings = new Settings(i, $.data(i, colorbox)),
								src = settings.get('href');

							if (src && isImage(settings, src)) {
								src = retinaUrl(settings, src);
								img = document.createElement('img');
								img.src = src;
							}
						});
					}
				} else {
					$groupControls.hide();
				}
				
				if (settings.get('iframe')) {
					iframe = document.createElement('iframe');
					
					if ('frameBorder' in iframe) {
						iframe.frameBorder = 0;
					}
					
					if ('allowTransparency' in iframe) {
						iframe.allowTransparency = "true";
					}

					if (!settings.get('scrolling')) {
						iframe.scrolling = "no";
					}
					
					$(iframe)
						.attr({
							src: settings.get('href'),
							name: (new Date()).getTime(), // give the iframe a unique name to prevent caching
							'class': prefix + 'Iframe',
							allowFullScreen : true // allow HTML5 video to go fullscreen
						})
						.one('load', complete)
						.appendTo($loaded);
					
					$events.one(event_purge, function () {
						iframe.src = "//about:blank";
					});

					if (settings.get('fastIframe')) {
						$(iframe).trigger('load');
					}
				} else {
					complete();
				}
				
				if (settings.get('transition') === 'fade') {
					$box.fadeTo(speed, 1, removeFilter);
				} else {
					removeFilter();
				}
			};
			
			if (settings.get('transition') === 'fade') {
				$box.fadeTo(speed, 0, function () {
					publicMethod.position(0, callback);
				});
			} else {
				publicMethod.position(speed, callback);
			}
		};

		function load () {
			var href, setResize, prep = publicMethod.prep, $inline, request = ++requests;
			
			active = true;
			
			photo = false;
			
			trigger(event_purge);
			trigger(event_load);
			settings.get('onLoad');
			
			settings.h = settings.get('height') ?
					setSize(settings.get('height'), 'y') - loadedHeight - interfaceHeight :
					settings.get('innerHeight') && setSize(settings.get('innerHeight'), 'y');
			
			settings.w = settings.get('width') ?
					setSize(settings.get('width'), 'x') - loadedWidth - interfaceWidth :
					settings.get('innerWidth') && setSize(settings.get('innerWidth'), 'x');
			
			// Sets the minimum dimensions for use in image scaling
			settings.mw = settings.w;
			settings.mh = settings.h;
			
			// Re-evaluate the minimum width and height based on maxWidth and maxHeight values.
			// If the width or height exceed the maxWidth or maxHeight, use the maximum values instead.
			if (settings.get('maxWidth')) {
				settings.mw = setSize(settings.get('maxWidth'), 'x') - loadedWidth - interfaceWidth;
				settings.mw = settings.w && settings.w < settings.mw ? settings.w : settings.mw;
			}
			if (settings.get('maxHeight')) {
				settings.mh = setSize(settings.get('maxHeight'), 'y') - loadedHeight - interfaceHeight;
				settings.mh = settings.h && settings.h < settings.mh ? settings.h : settings.mh;
			}
			
			href = settings.get('href');
			
			loadingTimer = setTimeout(function () {
				$loadingOverlay.show();
			}, 100);
			
			if (settings.get('inline')) {
				var $target = $(href);
				// Inserts an empty placeholder where inline content is being pulled from.
				// An event is bound to put inline content back when Colorbox closes or loads new content.
				$inline = $('<div>').hide().insertBefore($target);

				$events.one(event_purge, function () {
					$inline.replaceWith($target);
				});

				prep($target);
			} else if (settings.get('iframe')) {
				// IFrame element won't be added to the DOM until it is ready to be displayed,
				// to avoid problems with DOM-ready JS that might be trying to run in that iframe.
				prep(" ");
			} else if (settings.get('html')) {
				prep(settings.get('html'));
			} else if (isImage(settings, href)) {

				href = retinaUrl(settings, href);

				photo = new Image();

				$(photo)
				.addClass(prefix + 'Photo')
				.bind('error',function () {
					prep($tag(div, 'Error').html(settings.get('imgError')));
				})
				.one('load', function () {
					if (request !== requests) {
						return;
					}

					// A small pause because some browsers will occassionaly report a 
					// img.width and img.height of zero immediately after the img.onload fires
					setTimeout(function(){
						var percent;

						$.each(['alt', 'longdesc', 'aria-describedby'], function(i,val){
							var attr = $(settings.el).attr(val) || $(settings.el).attr('data-'+val);
							if (attr) {
								photo.setAttribute(val, attr);
							}
						});

						if (settings.get('retinaImage') && window.devicePixelRatio > 1) {
							photo.height = photo.height / window.devicePixelRatio;
							photo.width = photo.width / window.devicePixelRatio;
						}

						if (settings.get('scalePhotos')) {
							setResize = function () {
								photo.height -= photo.height * percent;
								photo.width -= photo.width * percent;
							};
							if (settings.mw && photo.width > settings.mw) {
								percent = (photo.width - settings.mw) / photo.width;
								setResize();
							}
							if (settings.mh && photo.height > settings.mh) {
								percent = (photo.height - settings.mh) / photo.height;
								setResize();
							}
						}
						
						if (settings.h) {
							photo.style.marginTop = Math.max(settings.mh - photo.height, 0) / 2 + 'px';
						}
						
						if ($related[1] && (settings.get('loop') || $related[index + 1])) {
							photo.style.cursor = 'pointer';
							photo.onclick = function () {
								publicMethod.next();
							};
						}

						photo.style.width = photo.width + 'px';
						photo.style.height = photo.height + 'px';
						prep(photo);
					}, 1);
				});
				
				photo.src = href;

			} else if (href) {
				$loadingBay.load(href, settings.get('data'), function (data, status) {
					if (request === requests) {
						prep(status === 'error' ? $tag(div, 'Error').html(settings.get('xhrError')) : $(this).contents());
					}
				});
			}
		}
			
		// Navigates to the next page/image in a set.
		publicMethod.next = function () {
			if (!active && $related[1] && (settings.get('loop') || $related[index + 1])) {
				index = getIndex(1);
				launch($related[index]);
			}
		};
		
		publicMethod.prev = function () {
			if (!active && $related[1] && (settings.get('loop') || index)) {
				index = getIndex(-1);
				launch($related[index]);
			}
		};

		// Note: to use this within an iframe use the following format: parent.jQuery.colorbox.close();
		publicMethod.close = function () {
			if (open && !closing) {
				
				closing = true;
				open = false;
				trigger(event_cleanup);
				settings.get('onCleanup');
				$window.unbind('.' + prefix);
				$overlay.fadeTo(settings.get('fadeOut') || 0, 0);
				
				$box.stop().fadeTo(settings.get('fadeOut') || 0, 0, function () {
					$box.hide();
					$overlay.hide();
					trigger(event_purge);
					$loaded.remove();
					
					setTimeout(function () {
						closing = false;
						trigger(event_closed);
						settings.get('onClosed');
					}, 1);
				});
			}
		};

		// Removes changes Colorbox made to the document, but does not remove the plugin.
		publicMethod.remove = function () {
			if (!$box) { return; }

			$box.stop();
			$[colorbox].close();
			$box.stop(false, true).remove();
			$overlay.remove();
			closing = false;
			$box = null;
			$('.' + boxElement)
				.removeData(colorbox)
				.removeClass(boxElement);

			$(document).unbind('click.'+prefix).unbind('keydown.'+prefix);
		};

		// A method for fetching the current element Colorbox is referencing.
		// returns a jQuery object.
		publicMethod.element = function () {
			return $(settings.el);
		};

		publicMethod.settings = defaults;

	}(jQuery, document, window));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(87), __webpack_require__(90), __webpack_require__(94), __webpack_require__(95), __webpack_require__(96)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(38), __webpack_require__(88), __webpack_require__(44), __webpack_require__(89)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng, _module, _charm, _utils, _api) {
	  var BASEAPI;
	  BASEAPI = '/api/';
	  return _module.serviceModule.factory('API', [
	    '$http', '$location', '$q', 'NOTIFY', '$sce', '$rootScope', 'LOADING', function($http, $location, $q, NOTIFY, $sce, $rootScope, LOADING) {
	      var options, router;
	      options = {
	        prefix: '/api',
	        promise: $q,
	        ajax: function(url, method, data, success) {
	          var ajaxOps, ref;
	          ajaxOps = {
	            url: url,
	            method: method
	          };
	          if ((ref = method.toLowerCase()) === 'post' || ref === 'put' || ref === 'patch') {
	            ajaxOps.data = data;
	          } else {
	            ajaxOps.params = data;
	          }
	          return $http(ajaxOps).success(success).error(function(data, status) {
	            var message;
	            LOADING.loaded();
	            switch (status) {
	              case 404:
	                return NOTIFY.error("404 Not Found");
	              case 500:
	                return NOTIFY.error("抱歉，服务器发生错误，请稍候再试");
	              case 406:
	                message = data.message || data;
	                return NOTIFY.error("提示：" + message);
	              case 403:
	                message = data.message || data;
	                return NOTIFY.error("你没有权限操作此项功能");
	              case 401:
	                return NOTIFY.error("您需要登录才能使用此功能");
	              case 413:
	                return NOTIFY.error("文件好象太大，上传失败！");
	              default:
	                return console.error("未知错误");
	            }
	          });
	        }
	      };
	      router = _charm(options);

	      /*
	      router.parse('apis')
	      router.apis().retrieve().then (result)->
	        router.parse result
	        $rootScope.$broadcast 'api:ready'
	       */
	      router.parse(_api);

	      /*
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
	       */
	      return router;
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {
	/*
	  用更优雅的方式调用RESTful APIs
	  Author: wvv8oo
	  Github: https://github.com/wvv8oo/charm.js
	 */
	var slice = [].slice;

	(function() {
	  var SegmentEntity, SegmentModel, charm, jQueryAjax;
	  SegmentEntity = (function() {
	    function SegmentEntity(parent1, segmentModel1) {
	      this.parent = parent1;
	      this.segmentModel = segmentModel1;
	      this.params = [];
	      this._updateProperties();
	      this._addMethods();
	    }

	    SegmentEntity.prototype._addMethod = function(verb, funcName) {
	      var self;
	      self = this;
	      return this[funcName] = function(data, cb) {
	        if (typeof data === 'function') {
	          cb = data;
	          data = {};
	        }
	        return self._doAction(verb, data, cb);
	      };
	    };

	    SegmentEntity.prototype._addMethods = function() {
	      var funcName, map, method, methods, results;
	      map = {
	        post: 'create',
	        put: 'update',
	        patch: 'patch',
	        "delete": 'delete',
	        get: 'retrieve',
	        jsonp: 'jsonp'
	      };
	      methods = this.segmentModel.options.methods || map;
	      results = [];
	      for (funcName in methods) {
	        method = methods[funcName];
	        results.push(this._addMethod(funcName, method));
	      }
	      return results;
	    };

	    SegmentEntity.prototype._addPlainParam = function(param, index) {
	      var placeholder;
	      placeholder = this.segmentModel.placeholders[index];
	      if (!placeholder) {
	        return;
	      }
	      return this.params[index] = {
	        key: placeholder.key,
	        value: String(param)
	      };
	    };

	    SegmentEntity.prototype._addObjectParam = function(param) {
	      var findIndex, i, index, item, key, len, ref, results, value;
	      results = [];
	      for (key in param) {
	        value = param[key];
	        findIndex = -1;
	        ref = this.segmentModel.placeholders;
	        for (index = i = 0, len = ref.length; i < len; index = ++i) {
	          item = ref[index];
	          if (item.key === key) {
	            findIndex = index;
	            break;
	          }
	        }
	        results.push(this._addPlainParam(value, findIndex));
	      }
	      return results;
	    };

	    SegmentEntity.prototype._addParams = function(params) {
	      var i, index, len, param, ref, results;
	      results = [];
	      for (index = i = 0, len = params.length; i < len; index = ++i) {
	        param = params[index];
	        if ((ref = typeof param) === 'string' || ref === 'number') {
	          results.push(this._addPlainParam(param, index));
	        } else {
	          results.push(this._addObjectParam(param));
	        }
	      }
	      return results;
	    };

	    SegmentEntity.prototype._currentToString = function() {
	      var i, len, param, ref, url;
	      url = this.segmentModel.name;
	      ref = this.params;
	      for (i = 0, len = ref.length; i < len; i++) {
	        param = ref[i];
	        if (param.value) {
	          url += "/" + param.value;
	        }
	      }
	      return url;
	    };

	    SegmentEntity.prototype._extractMethodName = function(name) {
	      if (this.segmentModel.options.rawMethodName) {
	        return name;
	      }
	      name = name.replace(/[\-](\w)/, function(m, n) {
	        return n.toUpperCase();
	      });
	      return name;
	    };

	    SegmentEntity.prototype._updateProperties = function() {
	      var child, i, len, method, ref, results;
	      ref = this.segmentModel.children;
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        child = ref[i];
	        method = this._extractMethodName(child.name);
	        if (this[method]) {
	          continue;
	        }
	        results.push(this[method] = SegmentEntity.create(this, child));
	      }
	      return results;
	    };

	    SegmentEntity.prototype._doAction = function(method, data, cb) {
	      var ajax, deferred, q, url;
	      q = this.segmentModel.options.promise;
	      ajax = this.segmentModel.options.ajax;
	      url = this.toString();
	      if (!q) {
	        return ajax(url, method, data, cb);
	      }
	      deferred = q.defer();
	      ajax(url, method, data, (function(result) {
	        return deferred.resolve(result);
	      }), function(result) {
	        return deferred.reject(result);
	      });
	      return deferred.promise;
	    };

	    SegmentEntity.prototype.parse = function(urls) {
	      this.segmentModel.parse(urls);
	      return this._updateProperties();
	    };

	    SegmentEntity.prototype.toString = function(ignoreSuffix) {
	      var ops, ref, url;
	      if (!this.parent) {
	        return '';
	      }
	      ops = this.segmentModel.options;
	      url = ((ref = this.parent) != null ? ref.toString(true) : void 0) || ops.prefix || '';
	      url += "/" + (this._currentToString());
	      if (!ignoreSuffix && ops.suffix) {
	        url += ops.suffix;
	      }
	      return url;
	    };

	    return SegmentEntity;

	  })();
	  SegmentEntity.create = function(parent, segmentModel) {
	    return function() {
	      var args, entity;
	      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	      entity = new SegmentEntity(parent, segmentModel);
	      entity._addParams(args);
	      return entity;
	    };
	  };
	  SegmentModel = (function() {
	    function SegmentModel(parent1, name1, options1) {
	      this.parent = parent1;
	      this.name = name1;
	      this.options = options1;
	      this.children = [];
	      this.placeholders = [];
	    }

	    SegmentModel.prototype.parseUrl = function(api) {
	      var i, len, parent, part, ref, results, url;
	      parent = this;
	      url = api.url || api;
	      ref = url.split('/');
	      results = [];
	      for (i = 0, len = ref.length; i < len; i++) {
	        part = ref[i];
	        results.push(parent = parent.addChild(part));
	      }
	      return results;
	    };

	    SegmentModel.prototype.parse = function(apis) {
	      var api, i, len, results;
	      if (!(apis instanceof Array)) {
	        apis = [apis];
	      }
	      results = [];
	      for (i = 0, len = apis.length; i < len; i++) {
	        api = apis[i];
	        results.push(this.parseUrl(api));
	      }
	      return results;
	    };

	    SegmentModel.prototype.setPlaceholders = function(value, index) {
	      if (typeof value === 'object') {
	        return this.addPlaceholders(value);
	      }
	    };

	    SegmentModel.prototype.addPlaceholder = function(identifier) {
	      return this.placeholders.push({
	        key: identifier
	      });
	    };

	    SegmentModel.prototype.addChild = function(part) {
	      var child, i, len, ref;
	      if (/^:.+/.test(part)) {
	        this.addPlaceholder(part.substr(1));
	        return this;
	      }
	      ref = this.children;
	      for (i = 0, len = ref.length; i < len; i++) {
	        child = ref[i];
	        if (child.name === part) {
	          return child;
	        }
	      }
	      return this.createSegmentModel(part);
	    };

	    SegmentModel.prototype.createSegmentModel = function(part) {
	      var segment;
	      segment = new SegmentModel(this, part);
	      segment.options = this.options;
	      this.children.push(segment);
	      return segment;
	    };

	    return SegmentModel;

	  })();
	  jQueryAjax = function(url, type, data, cb) {
	    var dataType;
	    if (!(typeof $ !== "undefined" && $ !== null ? $.ajax : void 0)) {
	      return console.error('请设置options.ajax参数或引用jQuery');
	    }
	    dataType = type === 'jsonp' ? 'JSONP' : 'JSON';
	    if (type === 'jsonp') {
	      type = 'GET';
	    }
	    return $.ajax(url, {
	      type: type,
	      data: data,
	      dataType: dataType,
	      success: function(response) {
	        return typeof cb === "function" ? cb(response) : void 0;
	      }
	    });
	  };
	  charm = function(options) {
	    var entity, model;
	    options = options || {};
	    options.ajax = options.ajax || jQueryAjax;
	    model = new SegmentModel(null, null, options);
	    entity = new SegmentEntity(null, model);
	    return entity;
	  };
	  if (true) {
	    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return charm;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    return module.exports = charm;
	  } else {
	    return window.charm = charm;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	  return [
	    {
	      "url": "mine",
	      "methods": {
	        "patch": false
	      }
	    }, {
	      "url": "session",
	      "methods": {
	        "put": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/attachment/:filename",
	      "methods": {}
	    }, {
	      "url": "project",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/category/:category_id",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/version/:version_id",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/webhook/:webhook_id",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/deploy",
	      "methods": {
	        "get": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/git",
	      "methods": {
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "git/commit",
	      "methods": {
	        "get": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/owned-gits",
	      "methods": {
	        "get": true,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/gitlab/:id/fork",
	      "methods": {
	        "get": true,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "commit/import",
	      "methods": {
	        "get": true,
	        "post": false,
	        "delete": true,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/git/tags",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/member/:member_id",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/git/commit",
	      "methods": {
	        "get": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/commit",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/split/:id",
	      "methods": {
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/follow/:id",
	      "methods": {
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/follow",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/assets",
	      "methods": {
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/assets/:id",
	      "methods": {
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/commit",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/commit",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "assets/:project_id/:zipfile/unwind",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/issue",
	      "methods": {
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/report",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "report/issue",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "report",
	      "methods": {
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/stat",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/report/weekly",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/comment/:comment_id",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/discussion",
	      "methods": {
	        "put": false,
	        "post": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/status",
	      "methods": {
	        "get": false,
	        "delete": false,
	        "post": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/tag",
	      "methods": {
	        "get": false,
	        "delete": false,
	        "post": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/issue/:issue_id/priority",
	      "methods": {
	        "get": false,
	        "delete": false,
	        "post": false
	      }
	    }, {
	      "url": "project/:project_id/favorite",
	      "methods": {
	        "get": false,
	        "put": false
	      }
	    }, {
	      "url": "account/change-password",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "get": false,
	        "patch": false
	      }
	    }, {
	      "url": "account/reset-password",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "put": false,
	        "patch": false
	      }
	    }, {
	      "url": "account/weixin",
	      "methods": {
	        "delete": false,
	        "get": false,
	        "patch": false
	      }
	    }, {
	      "url": "member/role",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "get": false,
	        "patch": false
	      }
	    }, {
	      "url": "account/token",
	      "methods": {
	        "put": false,
	        "delete": false,
	        "get": false,
	        "patch": false
	      }
	    }, {
	      "url": "member",
	      "methods": {
	        "put": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "member/mail",
	      "methods": {
	        "get": false,
	        "put": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "account/profile",
	      "methods": {
	        "delete": false,
	        "post": false,
	        "patch": false
	      }
	    }, {
	      "url": "account/avatar/:member_id",
	      "methods": {
	        "put": false,
	        "delete": false,
	        "post": false,
	        "patch": false
	      }
	    }, {
	      "url": "apis",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/issue/:issue_id/log",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "report/project/issue-finish",
	      "methods": {
	        "put": false,
	        "post": false,
	        "path": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "report/member/issue-finish",
	      "methods": {
	        "put": false,
	        "post": false,
	        "path": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "report/team/:team_id/issue-finish",
	      "methods": {
	        "put": false,
	        "post": false,
	        "path": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "report/weekly",
	      "methods": {
	        "put": false,
	        "post": false,
	        "path": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "report/:team_id/weekly",
	      "methods": {
	        "put": false,
	        "post": false,
	        "path": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/member/invite",
	      "methods": {}
	    }, {
	      "url": "project/:project_id/assets/:asset_id/unwind",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false,
	        "put": false
	      }
	    }, {
	      "url": "message/:message_id",
	      "methods": {
	        "post": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "project/:project_id/issue/stat/test",
	      "method": {
	        "post": false,
	        "delete": false,
	        "patch": false
	      }
	    }, {
	      "url": "team/:team_id/member/:member_id",
	      "method": {
	        "patch": false
	      }
	    }, {
	      "url": "stream",
	      "method": {
	        "post": false,
	        "delete": false,
	        "put": false,
	        "patch": false
	      }
	    }
	  ];
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(38), __webpack_require__(91), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng, _module, _notify, _moment) {
	  return _module.serviceModule.factory('NOTIFY', function() {
	    return _notify;
	  }).factory('WEEKLIST', function() {
	    return function(total) {
	      var end, i, index, list, now, ref, start;
	      list = [];
	      now = _moment().startOf('week');
	      for (index = i = 0, ref = total; 0 <= ref ? i <= ref : i >= ref; index = 0 <= ref ? ++i : --i) {
	        start = now.clone().subtract(index, 'weeks');
	        end = start.clone().add(6, 'days');
	        list.push({
	          text: start.clone().subtract(1, 'days').format('YYYY年第W周'),
	          start: start.startOf('days').valueOf(),
	          end: end.endOf('days').valueOf()
	        });
	      }
	      return list;
	    };
	  }).factory('ENUM', function() {
	    return {
	      projectFlag: {
	        normal: 0,
	        wiki: 1
	      }
	    };
	  }).factory('HOST', [
	    '$location', function($location) {
	      var parts;
	      parts = [$location.$$protocol, '://', $location.$$host];
	      if ($location.$$port !== 80) {
	        parts.push(':');
	        parts.push($location.$$port);
	      }
	      return parts.join('');
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict"

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(92), __webpack_require__(93)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_io, _noty){
	    var Notify = function(){}
	    //======================== web notify start
	    var extend = function(source, destination){
	        destination = destination || {}
	        for(var property in destination){
	            source[property] = destination[property]
	        }
	        return source
	    }

	    var special_setting = {
	        "success":{
	            type: "success",
	            force: true
	        },
	        "error":{
	            type: 'error'
	        },
	        "warn":{
	            type: 'warning'
	        },
	        'info':{
	            type: 'information',
	            layout: 'topRight',
	            force: true,
	            timeout: false
	        }
	    }

	    var getSetting = function(type){
	        var base_setting =  {
	            layout: 'top',
	            theme: 'defaultTheme',
	            type: 'alert',
	            dismissQueue: true, // If you want to use queue feature set this true
	            timeout: 4 * 1000, // delay for closing event. Set false for sticky notifications
	            force: false, // adds notification to the beginning of queue when set to true
	            modal: false,
	            maxVisible: 3, // you can set max visible notification for dismissQueue true option,
	            killer: false, // for close all notifications before show
	            closeWith: ['click'], // ['click', 'button', 'hover']
	            buttons: false // an array of buttons
	        }
	        return extend(base_setting, special_setting[type])
	    }

	    var base = function(content, setting){
	        var body = extend(setting, { text: content})
	        _noty(body)
	    }

	    var notifyFactory = function(type){
	        return function(content, config){
	            var setting = getSetting(type)
	            var settting = extend(setting, config)
	            base(content, setting)
	        }
	    }


	    Notify.success = notifyFactory('success')
	    Notify.error = notifyFactory('error')
	    Notify.warn = notifyFactory('warn')
	    Notify.info = notifyFactory('info')
	    //======================== web notify end


	    //======================== Desktop notify start

	    Notify.desktop = {}

	    var so = _io.connect("ws://"+window.location.hostname+":8001")

	    //消息签名
	    var getSignature = function(response){
	        var senderName = response.sender.realname
	        return  "\n\n             send by " + senderName
	    }

	    var jumpLink =  function(response){
	        if(response.data.link){
	            window.location.href = response.data.link
	        }
	    }

	    //给项目成员或者所有人发送消息
	    var doTalk = function(response){
	        var title = response.data.title || ''
	        var content = response.data.content || ''
	        deskShow(title, content, response)
	    }

	    //任务发起人的任务被完成通知
	    var doIssueChange = function(response){
	        var title
	        if(response.data.issue.status !== 'done'){
	            title = '将状态改为->' + response.data.issue.status
	        }else{
	            title = '完成了任务'
	        }

	        title = response.sender.realname + title
	        var content = response.data.issue.title
	        deskShow(title, content, response)
	    }

	    //任务被指定通知
	    var doIssueAssigned = function(response){
	        var plan_finish_time, title = "您有新任务"

	        if(plan_finish_time = response.data.issue.plan_finish_time){

	            title +=  "，于" + moment(plan_finish_time).format("MM月DD日") + "到期"
	        }

	        var content = response.data.issue.title
	        deskShow(title, content, response)
	    }
	    //某人被@通知
	    var doMemtion = function(response){
	        var title = response.data.issue.title
	//        var content = "";
	//        if(response.data.comment){
	//            content = $(response.data.comment.content).text()
	//        }
	//        if(content.length > 20){
	//            content = content.substr(0, 20) + "..."
	//        }
	        deskShow('有人在提到你了', title, response)
	    }

	    //被团队邀请
	    var doTeamInvitation = function(response){

	        var content = response.sender.realname + "邀请你加入团队【" + response.data.teamName + "】";

	        deskShow(response.sender.realname + '邀请你加入团队', content, response)
	    }

	    var doEvent = {
	        'talk:project': doTalk,
	        'talk:all': doTalk,
	        "issue:status:change": doIssueChange,
	        'issue:assigned' : doIssueAssigned,
	        'mention': doMemtion,
	        'team:invitation': doTeamInvitation
	    }

	    so.on('message', function(response){
	        var _doShow = doEvent[response.event] || function(){ console.log('unknown event', response) }
	        _doShow(response)
	    })

	    so.on('connect', function(){
	        so.emit('ready')
	    })


	    var isSupport = (function(){
	        if(!("Notification" in window)){
	            Notify.warn('您的浏览器不支持桌面通知，建议使用Chrome,Firefox 或者 Safari',{timeout: 5 * 1000})
	            return false
	        }
	        if (Notification.permission === 'default') {
	            Notification.requestPermission(function (permission) {
	                if(!('permission' in Notification)) {
	                    Notification.permission = permission;
	                }
	            })
	        }
	        if(Notification.permission === "denied"){
	            var msg =  '该浏览器桌面通知已被禁用,推荐开启! 点击查看开启方式 '
	            Notify.warn(msg,{
	                timeout:false,
	                callback: {
	                    onClose: function(){
	                        window.open("http://bhf.hunantv.com/project/17/issue/1506", "_blank" )
	                    }
	                }
	            })
	        }
	        return true
	    })()

	    var deskShow = function(title, body, response){
	        title = title ? title : 'BHF友好提醒: '
	        body = body ? body : ''
	        body = body + getSignature(response)
	        if(!isSupport){
	            Notify.info(title + body)
	            return;
	        }
	        var options = {
	            lang: "UTF-8",
	            icon: '/images/desktop.png',
	            body: body
	        }
	        var cb = function(){
	            var notification = new Notification(title, options);
	            notification.onclick = function(){
	                jumpLink(response)
	            }
	        }
	        if (Notification.permission === "granted") {
	            cb()
	            return;
	        }
	        if (Notification.permission === 'default') {
	            Notification.requestPermission(function (permission) {
	                if(!('permission' in Notification)) {
	                    Notification.permission = permission;
	                }
	                if (permission === "granted") {
	                    cb()
	                }
	            })
	        }
	        if(Notification.permission === 'denied'){
	            Notify.info(title + body)
	        }

	    }

	    var realMessage = function(event, data){
	        var message = {
	            event: event,
	            data: data
	        }
	        so.emit('message', message)
	    }

	    Notify.desktop.online  = function(){
	        so.emit('ready')
	    }

	    Notify.desktop.offline = function(){
	        so.disconnect()
	    }

	    Notify.desktop.busy = function(){

	    }

	    Notify.desktop.toAll = function(broadcast){
	        realMessage('talk:all', broadcast)
	    }
	    Notify.desktop.toProject = function(project_id, broadcast){
	        broadcast.project_id = project_id
	        realMessage('talk:project', broadcast)
	    }
	    Notify.desktop.toMember = function (member_id){
	//        console.log('abc')
	        broadcast.project_id = project_id
	        realMessage('talk:member', broadcast)
	    }
	    //======================== Desktop notify end
	    return Notify
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 92 */,
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
	 @package noty - jQuery Notification Plugin
	 @version version: 2.2.4
	 @contributors https://github.com/needim/noty/graphs/contributors

	 @documentation Examples and Documentation - http://needim.github.com/noty/

	 @license Licensed under the MIT licenses: http://www.opensource.org/licenses/mit-license.php
	 */

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	    if (typeof Object.create !== 'function') {
	        Object.create = function (o) {
	            function F() {
	            }

	            F.prototype = o;
	            return new F();
	        };
	    }

	    (function ($) {

	        var NotyObject = {

	            init:function (options) {

	                // Mix in the passed in options with the default options
	                this.options = $.extend({}, $.noty.defaults, options);

	                this.options.layout = (this.options.custom) ? $.noty.layouts['inline'] : $.noty.layouts[this.options.layout];

	                if ($.noty.themes[this.options.theme])
	                    this.options.theme = $.noty.themes[this.options.theme];
	                else
	                    options.themeClassName = this.options.theme;

	                delete options.layout;
	                delete options.theme;

	                this.options = $.extend({}, this.options, this.options.layout.options);
	                this.options.id = 'noty_' + (new Date().getTime() * Math.floor(Math.random() * 1000000));

	                this.options = $.extend({}, this.options, options);

	                // Build the noty dom initial structure
	                this._build();

	                // return this so we can chain/use the bridge with less code.
	                return this;
	            }, // end init

	            _build:function () {

	                // Generating noty bar
	                var $bar = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr('id', this.options.id);
	                $bar.append(this.options.template).find('.noty_text').html(this.options.text);

	                this.$bar = (this.options.layout.parent.object !== null) ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append($bar) : $bar;

	                if (this.options.themeClassName)
	                    this.$bar.addClass(this.options.themeClassName).addClass('noty_container_type_' + this.options.type);

	                // Set buttons if available
	                if (this.options.buttons) {

	                    // If we have button disable closeWith & timeout options
	                    this.options.closeWith = [];
	                    this.options.timeout = false;

	                    var $buttons = $('<div/>').addClass('noty_buttons');

	                    (this.options.layout.parent.object !== null) ? this.$bar.find('.noty_bar').append($buttons) : this.$bar.append($buttons);

	                    var self = this;

	                    $.each(this.options.buttons, function (i, button) {
	                        var $button = $('<button/>').addClass((button.addClass) ? button.addClass : 'gray').html(button.text).attr('id', button.id ? button.id : 'button-' + i)
	                            .appendTo(self.$bar.find('.noty_buttons'))
	                            .on('click', function () {
	                                if ($.isFunction(button.onClick)) {
	                                    button.onClick.call($button, self);
	                                }
	                            });
	                    });
	                }

	                // For easy access
	                this.$message = this.$bar.find('.noty_message');
	                this.$closeButton = this.$bar.find('.noty_close');
	                this.$buttons = this.$bar.find('.noty_buttons');

	                $.noty.store[this.options.id] = this; // store noty for api

	            }, // end _build

	            show:function () {

	                var self = this;

	                (self.options.custom) ? self.options.custom.find(self.options.layout.container.selector).append(self.$bar) : $(self.options.layout.container.selector).append(self.$bar);

	                if (self.options.theme && self.options.theme.style)
	                    self.options.theme.style.apply(self);

	                ($.type(self.options.layout.css) === 'function') ? this.options.layout.css.apply(self.$bar) : self.$bar.css(this.options.layout.css || {});

	                self.$bar.addClass(self.options.layout.addClass);

	                self.options.layout.container.style.apply($(self.options.layout.container.selector));

	                self.showing = true;

	                if (self.options.theme && self.options.theme.style)
	                    self.options.theme.callback.onShow.apply(this);

	                if ($.inArray('click', self.options.closeWith) > -1)
	                    self.$bar.css('cursor', 'pointer').one('click', function (evt) {
	                        self.stopPropagation(evt);
	                        if (self.options.callback.onCloseClick) {
	                            self.options.callback.onCloseClick.apply(self);
	                        }
	                        self.close();
	                    });

	                if ($.inArray('hover', self.options.closeWith) > -1)
	                    self.$bar.one('mouseenter', function () {
	                        self.close();
	                    });

	                if ($.inArray('button', self.options.closeWith) > -1)
	                    self.$closeButton.one('click', function (evt) {
	                        self.stopPropagation(evt);
	                        self.close();
	                    });

	                if ($.inArray('button', self.options.closeWith) == -1)
	                    self.$closeButton.remove();

	                if (self.options.callback.onShow)
	                    self.options.callback.onShow.apply(self);

	                self.$bar.animate(
	                    self.options.animation.open,
	                    self.options.animation.speed,
	                    self.options.animation.easing,
	                    function () {
	                        if (self.options.callback.afterShow) self.options.callback.afterShow.apply(self);
	                        self.showing = false;
	                        self.shown = true;
	                    });

	                // If noty is have a timeout option
	                if (self.options.timeout)
	                    self.$bar.delay(self.options.timeout).promise().done(function () {
	                        self.close();
	                    });

	                return this;

	            }, // end show

	            close:function () {

	                if (this.closed) return;
	                if (this.$bar && this.$bar.hasClass('i-am-closing-now')) return;

	                var self = this;

	                if (this.showing) {
	                    self.$bar.queue(
	                        function () {
	                            self.close.apply(self);
	                        }
	                    )
	                    return;
	                }

	                if (!this.shown && !this.showing) { // If we are still waiting in the queue just delete from queue
	                    var queue = [];
	                    $.each($.noty.queue, function (i, n) {
	                        if (n.options.id != self.options.id) {
	                            queue.push(n);
	                        }
	                    });
	                    $.noty.queue = queue;
	                    return;
	                }

	                self.$bar.addClass('i-am-closing-now');

	                if (self.options.callback.onClose) {
	                    self.options.callback.onClose.apply(self);
	                }

	                self.$bar.clearQueue().stop().animate(
	                    self.options.animation.close,
	                    self.options.animation.speed,
	                    self.options.animation.easing,
	                    function () {
	                        if (self.options.callback.afterClose) self.options.callback.afterClose.apply(self);
	                    })
	                    .promise().done(function () {

	                        // Modal Cleaning
	                        if (self.options.modal) {
	                            $.notyRenderer.setModalCount(-1);
	                            if ($.notyRenderer.getModalCount() == 0) $('.noty_modal').fadeOut('fast', function () {
	                                $(this).remove();
	                            });
	                        }

	                        // Layout Cleaning
	                        $.notyRenderer.setLayoutCountFor(self, -1);
	                        if ($.notyRenderer.getLayoutCountFor(self) == 0) $(self.options.layout.container.selector).remove();

	                        // Make sure self.$bar has not been removed before attempting to remove it
	                        if (typeof self.$bar !== 'undefined' && self.$bar !== null ) {
	                            self.$bar.remove();
	                            self.$bar = null;
	                            self.closed = true;
	                        }

	                        delete $.noty.store[self.options.id]; // deleting noty from store

	                        if(self.options.theme.callback && self.options.theme.callback.onClose) {
	                            self.options.theme.callback.onClose.apply(self);
	                        }

	                        if (!self.options.dismissQueue) {
	                            // Queue render
	                            $.noty.ontap = true;

	                            $.notyRenderer.render();
	                        }

	                        if (self.options.maxVisible > 0 && self.options.dismissQueue) {
	                            $.notyRenderer.render();
	                        }
	                    })

	            }, // end close

	            setText:function (text) {
	                if (!this.closed) {
	                    this.options.text = text;
	                    this.$bar.find('.noty_text').html(text);
	                }
	                return this;
	            },

	            setType:function (type) {
	                if (!this.closed) {
	                    this.options.type = type;
	                    this.options.theme.style.apply(this);
	                    this.options.theme.callback.onShow.apply(this);
	                }
	                return this;
	            },

	            setTimeout:function (time) {
	                if (!this.closed) {
	                    var self = this;
	                    this.options.timeout = time;
	                    self.$bar.delay(self.options.timeout).promise().done(function () {
	                        self.close();
	                    });
	                }
	                return this;
	            },

	            stopPropagation:function (evt) {
	                evt = evt || window.event;
	                if (typeof evt.stopPropagation !== "undefined") {
	                    evt.stopPropagation();
	                } else {
	                    evt.cancelBubble = true;
	                }
	            },

	            closed:false,
	            showing:false,
	            shown:false

	        }; // end NotyObject

	        $.notyRenderer = {};

	        $.notyRenderer.init = function (options) {

	            // Renderer creates a new noty
	            var notification = Object.create(NotyObject).init(options);

	            if (notification.options.killer)
	                $.noty.closeAll();

	            (notification.options.force) ? $.noty.queue.unshift(notification) : $.noty.queue.push(notification);

	            $.notyRenderer.render();

	            return ($.noty.returns == 'object') ? notification : notification.options.id;
	        };

	        $.notyRenderer.render = function () {

	            var instance = $.noty.queue[0];

	            if ($.type(instance) === 'object') {
	                if (instance.options.dismissQueue) {
	                    if (instance.options.maxVisible > 0) {
	                        if ($(instance.options.layout.container.selector + ' li').length < instance.options.maxVisible) {
	                            $.notyRenderer.show($.noty.queue.shift());
	                        } else {

	                        }
	                    } else {
	                        $.notyRenderer.show($.noty.queue.shift());
	                    }
	                } else {
	                    if ($.noty.ontap) {
	                        $.notyRenderer.show($.noty.queue.shift());
	                        $.noty.ontap = false;
	                    }
	                }
	            } else {
	                $.noty.ontap = true; // Queue is over
	            }

	        };

	        $.notyRenderer.show = function (notification) {

	            if (notification.options.modal) {
	                $.notyRenderer.createModalFor(notification);
	                $.notyRenderer.setModalCount(+1);
	            }

	            // Where is the container?
	            if (notification.options.custom) {
	                if (notification.options.custom.find(notification.options.layout.container.selector).length == 0) {
	                    notification.options.custom.append($(notification.options.layout.container.object).addClass('i-am-new'));
	                } else {
	                    notification.options.custom.find(notification.options.layout.container.selector).removeClass('i-am-new');
	                }
	            } else {
	                if ($(notification.options.layout.container.selector).length == 0) {
	                    $('body').append($(notification.options.layout.container.object).addClass('i-am-new'));
	                } else {
	                    $(notification.options.layout.container.selector).removeClass('i-am-new');
	                }
	            }

	            $.notyRenderer.setLayoutCountFor(notification, +1);

	            notification.show();
	        };

	        $.notyRenderer.createModalFor = function (notification) {
	            if ($('.noty_modal').length == 0) {
	                var modal = $('<div/>').addClass('noty_modal').addClass(notification.options.theme).data('noty_modal_count', 0);

	                if (notification.options.theme.modal && notification.options.theme.modal.css)
	                    modal.css(notification.options.theme.modal.css);

	                modal.prependTo($('body')).fadeIn('fast');
	            }
	        };

	        $.notyRenderer.getLayoutCountFor = function (notification) {
	            return $(notification.options.layout.container.selector).data('noty_layout_count') || 0;
	        };

	        $.notyRenderer.setLayoutCountFor = function (notification, arg) {
	            return $(notification.options.layout.container.selector).data('noty_layout_count', $.notyRenderer.getLayoutCountFor(notification) + arg);
	        };

	        $.notyRenderer.getModalCount = function () {
	            return $('.noty_modal').data('noty_modal_count') || 0;
	        };

	        $.notyRenderer.setModalCount = function (arg) {
	            return $('.noty_modal').data('noty_modal_count', $.notyRenderer.getModalCount() + arg);
	        };

	        // This is for custom container
	        $.fn.noty = function (options) {
	            options.custom = $(this);
	            return $.notyRenderer.init(options);
	        };

	        $.noty = {};
	        $.noty.queue = [];
	        $.noty.ontap = true;
	        $.noty.layouts = {};
	        $.noty.themes = {};
	        $.noty.returns = 'object';
	        $.noty.store = {};

	        $.noty.get = function (id) {
	            return $.noty.store.hasOwnProperty(id) ? $.noty.store[id] : false;
	        };

	        $.noty.close = function (id) {
	            return $.noty.get(id) ? $.noty.get(id).close() : false;
	        };

	        $.noty.setText = function (id, text) {
	            return $.noty.get(id) ? $.noty.get(id).setText(text) : false;
	        };

	        $.noty.setType = function (id, type) {
	            return $.noty.get(id) ? $.noty.get(id).setType(type) : false;
	        };

	        $.noty.clearQueue = function () {
	            $.noty.queue = [];
	        };

	        $.noty.closeAll = function () {
	            $.noty.clearQueue();
	            $.each($.noty.store, function (id, noty) {
	                noty.close();
	            });
	        };

	        var windowAlert = window.alert;

	        $.noty.consumeAlert = function (options) {
	            window.alert = function (text) {
	                if (options)
	                    options.text = text;
	                else
	                    options = {text:text};

	                $.notyRenderer.init(options);
	            };
	        };

	        $.noty.stopConsumeAlert = function () {
	            window.alert = windowAlert;
	        };

	        $.noty.defaults = {
	            layout:'top',
	            theme:'defaultTheme',
	            type:'alert',
	            text:'',
	            dismissQueue:true,
	            template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
	            animation:{
	                open:{height:'toggle'},
	                close:{height:'toggle'},
	                easing:'swing',
	                speed:500
	            },
	            timeout:false,
	            force:false,
	            modal:false,
	            maxVisible:5,
	            killer: false,
	            closeWith:['click'],
	            callback:{
	                onShow:function () {
	                },
	                afterShow:function () {
	                },
	                onClose:function () {
	                },
	                afterClose:function () {
	                },
	                onCloseClick:function () {
	                }
	            },
	            buttons:false
	        };

	        $(window).on('resize', function () {
	            $.each($.noty.layouts, function (index, layout) {
	                layout.container.style.apply($(layout.container.selector));
	            });
	        });

	    })(jQuery);

	// Helpers
	    window.noty = function noty(options) {
	        return jQuery.notyRenderer.init(options);
	    };

	    (function($) {

	        $.noty.layouts.bottom = {
	            name: 'bottom',
	            options: {},
	            container: {
	                object: '<ul id="noty_bottom_layout_container" />',
	                selector: 'ul#noty_bottom_layout_container',
	                style: function() {
	                    $(this).css({
	                        bottom: 0,
	                        left: '5%',
	                        position: 'fixed',
	                        width: '90%',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 9999999
	                    });
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.layouts.bottomCenter = {
	            name: 'bottomCenter',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_bottomCenter_layout_container" />',
	                selector: 'ul#noty_bottomCenter_layout_container',
	                style: function() {
	                    $(this).css({
	                        bottom: 20,
	                        left: 0,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    $(this).css({
	                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
	                    });
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);

	    (function($) {

	        $.noty.layouts.bottomLeft = {
	            name: 'bottomLeft',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_bottomLeft_layout_container" />',
	                selector: 'ul#noty_bottomLeft_layout_container',
	                style: function() {
	                    $(this).css({
	                        bottom: 20,
	                        left: 20,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    if (window.innerWidth < 600) {
	                        $(this).css({
	                            left: 5
	                        });
	                    }
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.layouts.bottomRight = {
	            name: 'bottomRight',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_bottomRight_layout_container" />',
	                selector: 'ul#noty_bottomRight_layout_container',
	                style: function() {
	                    $(this).css({
	                        bottom: 20,
	                        right: 20,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    if (window.innerWidth < 600) {
	                        $(this).css({
	                            right: 5
	                        });
	                    }
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.layouts.center = {
	            name: 'center',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_center_layout_container" />',
	                selector: 'ul#noty_center_layout_container',
	                style: function() {
	                    $(this).css({
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    // getting hidden height
	                    var dupe = $(this).clone().css({visibility:"hidden", display:"block", position:"absolute", top: 0, left: 0}).attr('id', 'dupe');
	                    $("body").append(dupe);
	                    dupe.find('.i-am-closing-now').remove();
	                    dupe.find('li').css('display', 'block');
	                    var actual_height = dupe.height();
	                    dupe.remove();

	                    if ($(this).hasClass('i-am-new')) {
	                        $(this).css({
	                            left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px',
	                            top: ($(window).height() - actual_height) / 2 + 'px'
	                        });
	                    } else {
	                        $(this).animate({
	                            left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px',
	                            top: ($(window).height() - actual_height) / 2 + 'px'
	                        }, 500);
	                    }

	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.layouts.centerLeft = {
	            name: 'centerLeft',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_centerLeft_layout_container" />',
	                selector: 'ul#noty_centerLeft_layout_container',
	                style: function() {
	                    $(this).css({
	                        left: 20,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    // getting hidden height
	                    var dupe = $(this).clone().css({visibility:"hidden", display:"block", position:"absolute", top: 0, left: 0}).attr('id', 'dupe');
	                    $("body").append(dupe);
	                    dupe.find('.i-am-closing-now').remove();
	                    dupe.find('li').css('display', 'block');
	                    var actual_height = dupe.height();
	                    dupe.remove();

	                    if ($(this).hasClass('i-am-new')) {
	                        $(this).css({
	                            top: ($(window).height() - actual_height) / 2 + 'px'
	                        });
	                    } else {
	                        $(this).animate({
	                            top: ($(window).height() - actual_height) / 2 + 'px'
	                        }, 500);
	                    }

	                    if (window.innerWidth < 600) {
	                        $(this).css({
	                            left: 5
	                        });
	                    }

	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);

	    (function($) {

	        $.noty.layouts.centerRight = {
	            name: 'centerRight',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_centerRight_layout_container" />',
	                selector: 'ul#noty_centerRight_layout_container',
	                style: function() {
	                    $(this).css({
	                        right: 20,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    // getting hidden height
	                    var dupe = $(this).clone().css({visibility:"hidden", display:"block", position:"absolute", top: 0, left: 0}).attr('id', 'dupe');
	                    $("body").append(dupe);
	                    dupe.find('.i-am-closing-now').remove();
	                    dupe.find('li').css('display', 'block');
	                    var actual_height = dupe.height();
	                    dupe.remove();

	                    if ($(this).hasClass('i-am-new')) {
	                        $(this).css({
	                            top: ($(window).height() - actual_height) / 2 + 'px'
	                        });
	                    } else {
	                        $(this).animate({
	                            top: ($(window).height() - actual_height) / 2 + 'px'
	                        }, 500);
	                    }

	                    if (window.innerWidth < 600) {
	                        $(this).css({
	                            right: 5
	                        });
	                    }

	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);

	    (function($) {

	        $.noty.layouts.inline = {
	            name: 'inline',
	            options: {},
	            container: {
	                object: '<ul class="noty_inline_layout_container" />',
	                selector: 'ul.noty_inline_layout_container',
	                style: function() {
	                    $(this).css({
	                        width: '100%',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 9999999
	                    });
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.layouts.top = {
	            name: 'top',
	            options: {},
	            container: {
	                object: '<ul id="noty_top_layout_container" />',
	                selector: 'ul#noty_top_layout_container',
	                style: function() {
	                    $(this).css({
	                        top: 0,
	                        left: '5%',
	                        position: 'fixed',
	                        width: '90%',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 9999999
	                    });
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.layouts.topCenter = {
	            name: 'topCenter',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_topCenter_layout_container" />',
	                selector: 'ul#noty_topCenter_layout_container',
	                style: function() {
	                    $(this).css({
	                        top: 20,
	                        left: 0,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    $(this).css({
	                        left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
	                    });
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);

	    (function($) {

	        $.noty.layouts.topLeft = {
	            name: 'topLeft',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_topLeft_layout_container" />',
	                selector: 'ul#noty_topLeft_layout_container',
	                style: function() {
	                    $(this).css({
	                        top: 20,
	                        left: 20,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    if (window.innerWidth < 600) {
	                        $(this).css({
	                            left: 5
	                        });
	                    }
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.layouts.topRight = {
	            name: 'topRight',
	            options: { // overrides options

	            },
	            container: {
	                object: '<ul id="noty_topRight_layout_container" />',
	                selector: 'ul#noty_topRight_layout_container',
	                style: function() {
	                    $(this).css({
	                        top: 20,
	                        right: 20,
	                        position: 'fixed',
	                        width: '310px',
	                        height: 'auto',
	                        margin: 0,
	                        padding: 0,
	                        listStyleType: 'none',
	                        zIndex: 10000000
	                    });

	                    if (window.innerWidth < 600) {
	                        $(this).css({
	                            right: 5
	                        });
	                    }
	                }
	            },
	            parent: {
	                object: '<li />',
	                selector: 'li',
	                css: {}
	            },
	            css: {
	                display: 'none',
	                width: '310px'
	            },
	            addClass: ''
	        };

	    })(jQuery);
	    (function($) {

	        $.noty.themes.defaultTheme = {
	            name: 'defaultTheme',
	            helpers: {
	                borderFix: function() {
	                    if (this.options.dismissQueue) {
	                        var selector = this.options.layout.container.selector + ' ' + this.options.layout.parent.selector;
	                        switch (this.options.layout.name) {
	                            case 'top':
	                                $(selector).css({borderRadius: '0px 0px 0px 0px'});
	                                $(selector).last().css({borderRadius: '0px 0px 5px 5px'}); break;
	                            case 'topCenter': case 'topLeft': case 'topRight':
	                            case 'bottomCenter': case 'bottomLeft': case 'bottomRight':
	                            case 'center': case 'centerLeft': case 'centerRight': case 'inline':
	                            $(selector).css({borderRadius: '0px 0px 0px 0px'});
	                            $(selector).first().css({'border-top-left-radius': '5px', 'border-top-right-radius': '5px'});
	                            $(selector).last().css({'border-bottom-left-radius': '5px', 'border-bottom-right-radius': '5px'}); break;
	                            case 'bottom':
	                                $(selector).css({borderRadius: '0px 0px 0px 0px'});
	                                $(selector).first().css({borderRadius: '5px 5px 0px 0px'}); break;
	                            default: break;
	                        }
	                    }
	                }
	            },
	            modal: {
	                css: {
	                    position: 'fixed',
	                    width: '100%',
	                    height: '100%',
	                    backgroundColor: '#000',
	                    zIndex: 10000,
	                    opacity: 0.6,
	                    display: 'none',
	                    left: 0,
	                    top: 0
	                }
	            },
	            style: function() {

	                this.$bar.css({
	                    overflow: 'hidden',
	                    background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"
	                });

	                this.$message.css({
	                    fontSize: '13px',
	                    lineHeight: '16px',
	                    textAlign: 'center',
	                    padding: '8px 10px 9px',
	                    width: 'auto',
	                    position: 'relative'
	                });

	                this.$closeButton.css({
	                    position: 'absolute',
	                    top: 4, right: 4,
	                    width: 10, height: 10,
	                    background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAATpJREFUeNoszrFqVFEUheG19zlz7sQ7ijMQBAvfYBqbpJCoZSAQbOwEE1IHGytbLQUJ8SUktW8gCCFJMSGSNxCmFBJO7j5rpXD6n5/P5vM53H3b3T9LOiB5AQDuDjM7BnA7DMPHDGBH0nuSzwHsRcRVRNRSysuU0i6AOwA/02w2+9Fae00SEbEh6SGAR5K+k3zWWptKepCm0+kpyRoRGyRBcpPkDsn1iEBr7drdP2VJZyQXERGSPpiZAViTBACXKaV9kqd5uVzCzO5KKb/d/UZSDwD/eyxqree1VqSu6zKAF2Z2RPJJaw0rAkjOJT0m+SuT/AbgDcmnkmBmfwAsJL1dXQ8lWY6IGwB1ZbrOOb8zs8thGP4COFwx/mE8Ho9Go9ErMzvJOW/1fY/JZIJSypqZfXX3L13X9fcDAKJct1sx3OiuAAAAAElFTkSuQmCC)",
	                    display: 'none',
	                    cursor: 'pointer'
	                });

	                this.$buttons.css({
	                    padding: 5,
	                    textAlign: 'right',
	                    borderTop: '1px solid #ccc',
	                    backgroundColor: '#fff'
	                });

	                this.$buttons.find('button').css({
	                    marginLeft: 5
	                });

	                this.$buttons.find('button:first').css({
	                    marginLeft: 0
	                });

	                this.$bar.on({
	                    mouseenter: function() { $(this).find('.noty_close').stop().fadeTo('normal',1); },
	                    mouseleave: function() { $(this).find('.noty_close').stop().fadeTo('normal',0); }
	                });

	                switch (this.options.layout.name) {
	                    case 'top':
	                        this.$bar.css({
	                            borderRadius: '0px 0px 5px 5px',
	                            borderBottom: '2px solid #eee',
	                            borderLeft: '2px solid #eee',
	                            borderRight: '2px solid #eee',
	                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
	                        });
	                        break;
	                    case 'topCenter': case 'center': case 'bottomCenter': case 'inline':
	                    this.$bar.css({
	                        borderRadius: '5px',
	                        border: '1px solid #eee',
	                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
	                    });
	                    this.$message.css({fontSize: '13px', textAlign: 'center'});
	                    break;
	                    case 'topLeft': case 'topRight':
	                    case 'bottomLeft': case 'bottomRight':
	                    case 'centerLeft': case 'centerRight':
	                    this.$bar.css({
	                        borderRadius: '5px',
	                        border: '1px solid #eee',
	                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
	                    });
	                    this.$message.css({fontSize: '13px', textAlign: 'left'});
	                    break;
	                    case 'bottom':
	                        this.$bar.css({
	                            borderRadius: '5px 5px 0px 0px',
	                            borderTop: '2px solid #eee',
	                            borderLeft: '2px solid #eee',
	                            borderRight: '2px solid #eee',
	                            boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
	                        });
	                        break;
	                    default:
	                        this.$bar.css({
	                            border: '2px solid #eee',
	                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
	                        });
	                        break;
	                }

	                switch (this.options.type) {
	                    case 'alert': case 'notification':
	                    this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'}); break;
	                    case 'warning':
	                        this.$bar.css({backgroundColor: '#FFEAA8', borderColor: '#FFC237', color: '#826200'});
	                        this.$buttons.css({borderTop: '1px solid #FFC237'}); break;
	                    case 'error':
	                        this.$bar.css({backgroundColor: 'red', borderColor: 'darkred', color: '#FFF'});
	                        this.$message.css({fontWeight: 'bold'});
	                        this.$buttons.css({borderTop: '1px solid darkred'}); break;
	                    case 'information':
	                        this.$bar.css({backgroundColor: '#57B7E2', borderColor: '#0B90C4', color: '#FFF'});
	                        this.$buttons.css({borderTop: '1px solid #0B90C4'}); break;
	                    case 'success':
	                        this.$bar.css({backgroundColor: 'lightgreen', borderColor: '#50C24E', color: 'darkgreen'});
	                        this.$buttons.css({borderTop: '1px solid #50C24E'});break;
	                    default:
	                        this.$bar.css({backgroundColor: '#FFF', borderColor: '#CCC', color: '#444'}); break;
	                }
	            },
	            callback: {
	                onShow: function() { $.noty.themes.defaultTheme.helpers.borderFix.apply(this); },
	                onClose: function() { $.noty.themes.defaultTheme.helpers.borderFix.apply(this); }
	            }
	        };

	    })(jQuery);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

	/*** EXPORTS FROM exports-loader ***/
	module.exports = noty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng, _module) {
	  return _module.serviceModule.service('STORE', [
	    '$q', 'API', function($q, API) {
	      var CacheData, service;
	      service = {};
	      CacheData = (function() {
	        function CacheData() {
	          this.data;
	        }

	        CacheData.prototype.update = function(entity, params) {
	          var self;
	          self = this;
	          if (source instanceof SegmentEntity) {
	            return source.retrieve(params);
	          }
	        };

	        CacheData.prototype.get = function() {
	          return this.data;
	        };

	        CacheData.prototype.set = function(data) {
	          return this.data = data;
	        };

	        return CacheData;

	      })();
	      service.user = new CacheData();
	      service.session = new CacheData();
	      service.projectMemberList = new CacheData();
	      service.projectCategory = new CacheData();
	      service.projectVersion = new CacheData();
	      service.teamMemberList = new CacheData();
	      service.teamCategory = new CacheData();
	      return service;
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng, _module) {
	  return _module.serviceModule.service('EDITORSTORE', [
	    '$q', 'API', function($q, API) {
	      var _myStorage, myStorage, service;
	      service = {};
	      _myStorage = (function() {
	        function _myStorage() {
	          this.storage = (JSON.parse(localStorage.getItem("EDITORSTORE"))) || [];
	        }

	        _myStorage.prototype.getItem = function(key) {
	          var i, item, len, ref;
	          this.storage = JSON.parse(localStorage.getItem("EDITORSTORE") || []);
	          if (this.storage) {
	            ref = this.storage;
	            for (i = 0, len = ref.length; i < len; i++) {
	              item = ref[i];
	              if (item.key === key) {
	                return item.value;
	              }
	            }
	          }
	        };

	        _myStorage.prototype.setItem = function(key, string, auto) {
	          var i, item, len, ref, time;
	          time = new Date() * 1;
	          if (time - this.time < 5000 && auto) {
	            return;
	          }
	          this.time = time;
	          if (this.storage) {
	            ref = this.storage;
	            for (i = 0, len = ref.length; i < len; i++) {
	              item = ref[i];
	              if (!(item.key === key)) {
	                continue;
	              }
	              item.value = string;
	              item.time = time;
	              localStorage.setItem("EDITORSTORE", JSON.stringify(this.storage));
	              return;
	            }
	          }
	          this.storage.push({
	            key: key,
	            value: string,
	            time: time
	          });
	          return localStorage.setItem("EDITORSTORE", JSON.stringify(this.storage));
	        };

	        _myStorage.prototype.getList = function() {
	          return JSON.parse(localStorage.getItem("EDITORSTORE"));
	        };

	        return _myStorage;

	      })();
	      myStorage = new _myStorage();
	      service = {
	        get: function(key) {
	          return myStorage.getItem(key);
	        },
	        set: function(key, string, auto) {
	          return myStorage.setItem(key, string, auto);
	        },
	        list: function() {
	          return myStorage.getList();
	        }
	      };
	      return service;
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng, _module) {
	  return _module.serviceModule.factory('LOADING', [
	    function() {
	      var loaded, loading;
	      loading = function() {
	        return $("#loading").fadeIn();
	      };
	      loaded = function() {
	        return $("#loading").fadeOut();
	      };
	      return {
	        loading: loading,
	        loaded: loaded
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(98), __webpack_require__(99)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(39), __webpack_require__(43), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _moment, _, _utils) {
	  return _module.controllerModule.controller('teamController', [
	    '$rootScope', '$scope', '$routeParams', '$location', '$stateParams', 'API', 'STORE', 'NOTIFY', function($rootScope, $scope, $routeParams, $location, $stateParams, API, STORE, NOTIFY) {
	      var getTeamAndInvitation, projectVersionSelected, removeTeam, teamAPI, updateTeamCategory, updateTeamMember;
	      teamAPI = API.team($stateParams.team_id);
	      $scope.team_id = $stateParams.team_id;
	      $scope.title = $location.$$search.title;
	      updateTeamMember = function() {
	        return teamAPI.member().retrieve().then(function(result) {
	          $scope.teamMember = result.members;
	          $scope.teamRole = result.role;
	          return STORE.teamMemberList.data = result;
	        });
	      };
	      updateTeamCategory = function() {
	        return API.team().retrieve().then(function(result) {
	          $scope.team = getTeamAndInvitation(result);
	          return STORE.teamCategory.data = result;
	        });
	      };
	      getTeamAndInvitation = function(teams) {
	        var i, len, team, teamObj, type;
	        teamObj = {
	          teamCategory: [],
	          inviteCategory: []
	        };
	        type = ["inviteCategory", "teamCategory"];
	        for (i = 0, len = teams.length; i < len; i++) {
	          team = teams[i];
	          teamObj[type[team.status]].push(team);
	        }
	        return teamObj;
	      };
	      projectVersionSelected = function(value) {
	        var url;
	        if (value === '-1') {
	          return alert('新建版本的功能暂未发');
	        }
	        url = "/team/" + $stateParams.team_id;
	        return $scope.$apply(function() {
	          return $location.path(url);
	        });
	      };
	      removeTeam = function() {
	        return teamAPI["delete"]().then(function(result) {
	          NOTIFY.success('删除成功！');
	          return window.location.href = "/team/0/list";
	        });
	      };
	      $scope.createTeam = function() {
	        return $scope.$broadcast('team:setting:show');
	      };
	      $scope.editTeam = function() {
	        return $scope.$broadcast('team:setting:show', $scope.title, $scope.team_id);
	      };
	      $scope.$on("team:remove", function() {
	        return removeTeam();
	      });
	      $scope.$on("team:member:request", function() {
	        return updateTeamMember();
	      });
	      $scope.$on("team:category:request", function() {
	        return updateTeamCategory();
	      });
	      $scope.$on("member:creator:toshow", function(event, data) {
	        return $scope.$broadcast("member:creator:show", data);
	      });
	      $scope.$on('dropdown:selected', function(event, type, value) {
	        switch (type) {
	          case 'project:version':
	            return projectVersionSelected(value);
	        }
	      });
	      if (parseInt($stateParams.team_id) > 0) {
	        updateTeamMember();
	      }
	      return updateTeamCategory();
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(100), __webpack_require__(53)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _tmplAll) {
	  return _module.directiveModule.directive('teamCategoryMenu', [
	    'STORE', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-team-menu-category', _tmplAll),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('teamInviteMenu', [
	    'STORE', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-team-menu-invite', _tmplAll),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('teamMenuBar', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-team-menu-bar', _tmplAll),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('teamCreate', [
	    'API', function(API) {
	      return {
	        restrict: 'AC',
	        link: function(scope, element, attrs) {
	          var $this, addTeam;
	          $this = $(element);
	          addTeam = function(member_id) {
	            var data;
	            data = {
	              name: $this.val()
	            };
	            return API.team().create(data).then(function(team) {
	              return window.location.href = "/team/" + team.id + "/list?title=" + team.name;
	            });
	          };
	          return $this.on("keyup", function(event) {
	            if (event.keyCode === 13 && $this.val()) {
	              return addTeam();
	            }
	          });
	        }
	      };
	    }
	  ]).directive('teamInviteItem', [
	    'API', 'NOTIFY', function(API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-team-invite-item', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.inviteAccept = function(team, flag) {
	            var entity, memberAPI, method;
	            method = ["update", "delete"];
	            entity = {
	              status: 1
	            };
	            memberAPI = API.team(team.team_id).member(team.member_id);
	            return memberAPI[method[flag]](entity).then(function(result) {
	              NOTIFY.success('操作成功！');
	              return scope.$emit("team:category:request");
	            });
	          };
	        }
	      };
	    }
	  ]).directive('teamSetting', [
	    '$location', 'API', 'NOTIFY', function($location, API, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-team-setting', _tmplAll),
	        link: function(scope, element, attr) {
	          var $o;
	          $o = $(element);
	          scope.$on('team:setting:show', function(event, name, id) {
	            $o.modal({
	              showClose: false
	            });
	            scope.isEdit = name || id;
	            return scope.profile = {
	              teamName: name,
	              team_id: id
	            };
	          });
	          scope.$on('team:setting:hide', function() {
	            return $.modal.close();
	          });
	          scope.onClickCancel = function() {
	            return scope.$emit("team:setting:hide");
	          };
	          scope.onClickSave = function() {
	            var entity, method;
	            if (scope.profile.teamName === scope.title) {
	              return;
	            }
	            entity = {
	              name: scope.profile.teamName
	            };
	            method = "create";
	            if (scope.isEdit) {
	              method = "update";
	            }
	            return API.team(scope.profile.team_id)[method](entity).then(function(result) {
	              NOTIFY.success('保存成功！');
	              scope.profile = {};
	              $.modal.close();
	              if (result.id) {
	                return $location.url("/team/" + result.id + "/list?title=" + result.name);
	              }
	            });
	          };
	          return scope.onClickDelete = function() {
	            if (confirm("删除团队后，团队的成员关系将不复存在，请慎重操作！")) {
	              if (confirm("你真的确定要删除该团队了吗？")) {
	                if (confirm("要不要再考虑一下呢？")) {
	                  return scope.$emit("team:remove");
	                }
	              }
	            }
	          };
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 100 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <textarea id=\"tmpl-team-layout\">\n        <div class=\"frame project-view team-view\">\n            <global-message ng-show=\"false\"></global-message>\n            <header-global></header-global>\n            <div class=\"container\">\n                \n                <div class=\"master-panel\">\n                    \n                    <div class=\"project-menu\">\n                        <ul class=\"master-menu\" project-menu-highlight>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a href=\"/team/0/invite?title=我收到的邀请\">我收到的邀请</a>\n                                        </label>\n                                    </div>\n                                </div>\n                            </li>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a>我的团队</a>\n                                        </label>\n                                    </div>\n                                    <div ng-show=\"team.teamCategory.length == 0\" class=\"empty ng-binding\">\n                                        尚未加入任何团队\n                                    </div>\n                                    <team-category-menu></team-category-menu>\n                                </div>\n                            </li>\n                        </ul>\n                        <team-menu-bar></team-menu-bar>\n                    </div>\n                </div>\n\n\n                <project-salve-panel></project-salve-panel>\n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-team-menu-category\">\n        <ul class=\"sub-menu\">\n            <li ng-repeat=\"item in team.teamCategory\">\n                <a href=\"/team/{{item.team_id}}/list?title={{item.name}}\" class=\"text-overflow\">{{item.name}}</a>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-team-member-list\">\n        <member-creator-model></member-creator-model>\n        <div class=\"list project-list-panel member-list\">\n            <header ng-show=\"title\">\n                <h3>\n                    {{title}}-团队成员\n                    <a class=\"edit\" ng-if=\"teamRole=='l'\" ng-click=\"editTeam()\">编辑</a>\n                </h3>\n            </header>\n            <div class=\"create\">\n                <input type=\"text\" placeholder=\"请输入将要添加的组名\" ng-if=\"team_id==-1\" team-create/>\n            </div>\n            <div class=\"create\">\n                <input type=\"text\" placeholder=\"请输入将要添加用户的姓名\" ng-if=\"team_id>0\" members-lookup autofocus/>\n            </div>\n            <ul class=\"details\">\n                <team-member-item></team-member-item>\n            </ul>\n\n            <team-setting></team-setting>\n        </div>\n    </textarea>  <textarea id=\"tmpl-team-invite-list\">\n        <member-creator-model></member-creator-model>\n        <div class=\"list project-list-panel member-list\">\n            <header ng-show=\"title\">\n                <h3>\n                    我的邀请\n                </h3>\n            </header>   \n            <div ng-show=\"team.inviteCategory.length == 0\" class=\"empty ng-binding\">\n                    还没有新的团队邀请哦\n            </div>\n            <ul class=\"details\">\n                <team-invite-item></team-invite-item>\n            </ul>\n            <team-setting></team-setting>\n        </div>\n    </textarea>  <textarea id=\"tmpl-team-invite-item\">\n        <li ng-repeat=\"team in team.inviteCategory\" class=\"row\">\n            <span class=\"invite\">{{team.inviter_name}}邀请你加入团队：{{team.name}}</span>\n            <a class=\"invite\" ng-click=\"inviteAccept(team, 1)\">拒绝</a>\n            <a class=\"invite\" ng-click=\"inviteAccept(team, 0)\">接受</a>\n        </li>\n    </textarea>  <textarea id=\"tmpl-team-menu-bar\">\n        <div>\n            <div class=\"menu-bar\">\n                <div class=\"create item\">\n                    <a ng-click=\"createTeam()\" class=\"team\">\n                        <i class=\"icon create\"></i>\n                        <span>创建团队</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </textarea> <textarea id=\"tmpl-team-setting\">\n        <div class=\"modal\">\n            <div class=\"inner\">\n                <a class=\"close-modal\" rel=\"modal:close\"><i class=\"icon\"></i></a>\n                <div class=\"simple-tab\" simple-tab=\"\" data-active-index=\"0\">\n                    <div class=\"nav title\" data-field=\"nav\">\n                        <span>编辑团队</span>\n                    </div>\n                </div>\n                <div class=\"content\" data-field=\"content\">\n                    <div class=\"panel\">\n                        <div class=\"standard-form\">\n                            <div class=\"row\">\n                                <label class=\"caption\">\n                                    团队名：\n                                </label>\n                                <input class=\"medium text\" type=\"text\" ng-model=\"profile.teamName\" required/>\n                            </div>\n                            <div class=\"row\">\n                                <label class=\"caption\">\n                                    注意事项：\n                                </label>\n                                <span ng-show=\"!isEdit\">请在保存后继续添加团队成员！</span>\n                                <span ng-show=\"isEdit\">删除团队后，团队的成员关系将不复存在，请慎重操作！</span>\n                            </div>\n\n                            <div class=\"row control\">\n                                <button class=\"primary default\" ng-click=\"onClickSave()\">保存</button>\n                                <button class=\"delete default\" ng-click=\"onClickDelete()\" ng-show=\"isEdit\">删除</button>\n                                <button class=\"cancel default\" ng-click=\"onClickCancel()\">取消</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("team-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(102), __webpack_require__(103)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(62)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _hljs, _template) {
	  return _module.controllerModule.controller('streamListController', [
	    '$scope', '$timeout', 'API', function($scope, $timeout, API) {
	      var partByDay;
	      partByDay = function(items) {
	        var day, days, i, index, item, len;
	        days = [];
	        day = {
	          timestamp: 0,
	          items: []
	        };
	        for (index = i = 0, len = items.length; i < len; index = ++i) {
	          item = items[index];
	          if ((index > 0 && new Date(item.timestamp).toDateString() === new Date(items[index - 1].timestamp).toDateString()) || index === 0) {
	            day.items.push(item);
	          } else {
	            days.push({
	              timestamp: day.timestamp,
	              items: day.items
	            });
	            day.items = [item];
	          }
	          day.timestamp = item.timestamp;
	          if (index + 1 === items.length) {
	            days.push(day);
	          }
	        }
	        return days;
	      };
	      API.stream().retrieve().then(function(result) {
	        $scope.days = partByDay(result);
	        return $timeout(_hljs.initHighlighting, 500);
	      });
	      return API.session().retrieve().then(function(result) {
	        return $scope.member = result;
	      });
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(104)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _tmplAll) {
	  return _module.directiveModule.directive('streamList', [
	    '$timeout', 'API', function($timeout, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-list', _tmplAll),
	        link: function(scope, element, attrs) {
	          var partByDay;
	          partByDay = function(items) {
	            var day, days, i, index, item, len;
	            days = [];
	            day = {
	              timestamp: 0,
	              items: []
	            };
	            for (index = i = 0, len = items.length; i < len; index = ++i) {
	              item = items[index];
	              if ((index > 0 && new Date(item.timestamp).toDateString() === new Date(items[index - 1].timestamp).toDateString()) || index === 0) {
	                day.items.push(item);
	              } else {
	                days.push({
	                  timestamp: day.timestamp,
	                  items: day.items
	                });
	                day.items = [item];
	              }
	              day.timestamp = item.timestamp;
	              if (index + 1 === items.length) {
	                days.push(day);
	              }
	            }
	            return days;
	          };
	          return API.stream().retrieve().then(function(result) {
	            return scope.days = partByDay(result);
	          });
	        }
	      };
	    }
	  ]).directive('streamIssueDay', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-issue-day', _tmplAll),
	        link: function(scope, element, attrs) {
	          scope.day = JSON.parse(attrs.day);
	          if (new Date(scope.day.timestamp).toDateString() === new Date().toDateString()) {
	            return scope.today = "today";
	          }
	        }
	      };
	    }
	  ]).directive('streamListCell', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-list-cell', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.item = JSON.parse(attrs.item);
	        }
	      };
	    }
	  ]).directive('streamIssueAssigned', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-issue-assigned', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.item = JSON.parse(attrs.item);
	        }
	      };
	    }
	  ]).directive('streamIssueStatusChange', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-issue-status-change', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.item = JSON.parse(attrs.item);
	        }
	      };
	    }
	  ]).directive('streamIssueCommentPost', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-issue-comment-post', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.item = JSON.parse(attrs.item);
	        }
	      };
	    }
	  ]).directive('streamIssueAssetPost', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-issue-asset-post', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.item = JSON.parse(attrs.item);
	        }
	      };
	    }
	  ]).directive('streamIssueMention', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-issue-mention', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.item = JSON.parse(attrs.item);
	        }
	      };
	    }
	  ]).directive('streamTeamInvitation', [
	    'API', function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-stream-team-invitation', _tmplAll),
	        link: function(scope, element, attrs) {
	          return scope.item = JSON.parse(attrs.item);
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 104 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <textarea id=\"tmpl-stream-list\">\n\t\t<div class=\"stream\">\n\t\t\t<stream-issue-day data-day=\"{{day}}\" ng-repeat=\"day in days\"></stream-issue-day>\n\t\t</div>\n\t</textarea> <textarea id=\"tmpl-stream-issue-day\">\n\t\t\n\t\t<div class=\"stream-day\">\n\t\t\t<div class=\"date-title\" ng-class=\"today\">{{day.timestamp | dateAgo}}</div>\n\t\t\t<ul class=\"stream-body\">\n\t\t\t\t<stream-list-cell data-item=\"{{item}}\" ng-repeat=\"item in day.items\"></stream-list-cell>\n\t\t\t</ul>\n\n\t\t</div>\n\n\t</textarea> <textarea id=\"tmpl-stream-list-cell\">\n\t\t<li class=\"stream-cell\">\n\t\t\t<stream-issue-assigned data-item=\"{{item}}\" ng-if=\"item.eventName=='issue:assigned'\"></stream-issue-assigned>\n\t\t\t<stream-issue-status-change data-item=\"{{item}}\" ng-if=\"item.eventName=='issue:status:change'\"></stream-issue-status-change>\n\t\t\t<stream-issue-comment-post data-item=\"{{item}}\" ng-if=\"item.eventName=='issue:comment:post'\"></stream-issue-comment-post>\n\t\t\t<stream-issue-asset-post data-item=\"{{item}}\" ng-if=\"item.eventName=='issue:asset:post'\"></stream-issue-asset-post>\n\t\t\t<stream-issue-mention data-item=\"{{item}}\" ng-if=\"item.eventName=='issue:mention'\"></stream-issue-mention>\n\t\t\t<stream-team-invitation data-item=\"{{item}}\" ng-if=\"item.eventName=='team:invitation'\"></stream-team-invitation>\n\n\t\t</li>\n\t</textarea> <textarea id=\"tmpl-stream-issue-assigned\">\n\t\t<div>\n\t\t\t<span class=\"stream-time\">{{item.timestamp | timeAgo}}</span>\n\t\t\t<span ng-if=\"member.member_id!=item.data.owner_id\">{{item.sender}}为{{item.data.owner_name}}指定了任务</span>\n\t\t\t<span ng-if=\"member.member_id==item.data.owner_id\">{{item.sender}}为你指定了任务</span>\n\t\t\t<a class=\"stream-title\" href=\"/project/{{item.data.project_id}}/issue/{{item.data.issue_id}}\">{{item.data.title}}</a>\n\t\t\t<span ng-if=\"item.data.plan_finish_time\">{{item.data.plan_finish_time|date:yyyy-mm-dd}}前完成</span>\n\t\t</div>\n\t\t\n\n\t</textarea> <textarea id=\"tmpl-stream-issue-status-change\">\n\t    <div>\n\t\t\t<span class=\"stream-time\">{{item.timestamp | timeAgo}}</span>\n\t\t\t<i class=\"icon small pause\" ng-class=\"item.data.status\"></i>\n\t\t\t<span ng-if=\"item.data.status=='done'\">\n\t\t\t\t{{item.sender}}完成了任务\n\t\t\t</span>\n\t\t\t<span ng-if=\"item.data.status=='doing'\">\n\t\t\t\t{{item.sender}}将任务状态改为正在进行中\n\t\t\t</span>\n\t\t\t<span ng-if=\"item.data.status=='pause'\">\n\t\t\t\t{{item.sender}}暂停了任务\n\t\t\t</span>\n\t\t\t<a class=\"stream-title\" href=\"/project/{{item.data.project_id}}/issue/{{item.data.issue_id}}\">{{item.data.title}}</a>\n\t\t</div>\n\t</textarea> <textarea id=\"tmpl-stream-issue-comment-post\">\n\t\t<div>\n\t\t\t<span class=\"stream-time\">{{item.timestamp | timeAgo}}</span>\n\t\t\t<span>{{item.sender}}添加了评论</span>\n\t\t\t<a class=\"stream-title\" href=\"/project/{{item.data.project_id}}/issue/{{item.data.issue_id}}\">{{item.data.title}}</a>\n\t\t\t<div class=\"comment\" ng-bind-html=\"item.data.comment | unsafe\">\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\n\n\t</textarea> <textarea id=\"tmpl-stream-issue-asset-post\">\n\t\t<div>\n\t\t\t<span class=\"stream-time\">{{item.timestamp | timeAgo}}</span>\n\t\t\t<span>{{item.sender}}上传了附件</span><span class=\"file-name\">{{item.data.original_name}}</span>\n\t\t\t<a class=\"stream-title\" href=\"/project/{{item.data.project_id}}/issue/{{item.data.issue_id}}\">{{item.data.title}}</a>\n\t\t\t<div ng-class=\"item.data.url | getAssetThumbnailClass\" style=\"background-image: url({{item.data | assetThumbnail}})\">\n\t\t\t</div>\n\t\t</div>\n\t</textarea> <textarea id=\"tmpl-stream-issue-mention\">\n\t\t<div>\n\t\t\t<span class=\"stream-time\">{{item.timestamp | timeAgo}}</span>\n\t\t\t<span>{{item.sender}}提到了你</span>\n\t\t\t<a class=\"stream-title\" href=\"/project/{{item.data.project_id}}/issue/{{item.data.issue_id}}\">{{item.data.title}}</a>\n\t\t\t<div class=\"comment\" ng-bind-html=\"item.data.content | unsafe\">\n\t\t\t\t\n\t\t\t</div>\n\t\t</div>\t\n\n\t</textarea> <textarea id=\"tmpl-stream-team-invitation\">\n\t\t<div>\n\t\t\t<span class=\"stream-time\">{{item.timestamp | timeAgo}}</span>\n\t\t\t<span>{{item.sender}}邀请你加入团队</span>\n\t\t\t<a class=\"stream-title\" href=\"/team/0/invite\">{{item.data.teamName}}</a>\n\t\t</div>\t\n\n\t</textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("stream-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(106), __webpack_require__(107), __webpack_require__(108), __webpack_require__(109)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/*
	  Author: ec.huyinghuan@gmail.com
	  Date: 2015.07.07
	  Describe:
	    gitlab与项目相关关系的增删改
	 */
	"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils) {
	  return _module.controllerModule.controller('gitlabController', [
	    '$rootScope', '$scope', '$stateParams', 'API', 'NOTIFY', function($rootScope, $scope, $stateParams, API, NOTIFY) {
	      var addGitToProject, createGitForProject, doAction, doDelGitMap, forkGit, getData, projectAPI;
	      projectAPI = API.project($stateParams.project_id);
	      getData = function(name) {
	        return projectAPI[name]().retrieve();
	      };
	      doDelGitMap = function(id) {
	        return projectAPI.gitlab(id)["delete"]().then(function(result) {
	          NOTIFY.success("删除成功！");
	          return $scope.$broadcast("component:gitlab:reload");
	        });
	      };
	      forkGit = function(git_id) {
	        return projectAPI.gitlab(git_id).fork().retrieve().then(function() {
	          NOTIFY.success("fork成功！");
	          return $scope.$broadcast("component:gitlab:reload");
	        });
	      };
	      addGitToProject = function(gitlab_url) {
	        return projectAPI.gitlab().update({
	          gitlab_url: gitlab_url
	        }).then(function() {
	          NOTIFY.success("添加成功！");
	          $scope.$broadcast("component:gitlab:reload");
	          return $scope.$broadcast("component:gitlab_add_form:reset");
	        });
	      };
	      createGitForProject = function(gitlab_name) {
	        return projectAPI.gitlab().create({
	          gitlab_name: gitlab_name
	        }).then(function() {
	          NOTIFY.success("创建项目成功");
	          $scope.$broadcast("component:gitlab:reload");
	          return $scope.$broadcast("component:gitlab_create_form:reset");
	        });
	      };
	      doAction = function(name, value) {
	        switch (name) {
	          case "fork":
	            return forkGit(value);
	          case "del":
	            return doDelGitMap(value);
	          case "add":
	            return addGitToProject(value);
	          case "create":
	            return createGitForProject(value);
	        }
	      };
	      return $scope.bean = {
	        getData: getData,
	        doAction: doAction
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/*
	  Author: ec.huyinghuan@gmail.com
	  Date: 2015.07.06
	  Describe:
	    Gitlab仓库的delete, fork, 和 commit的同步
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module) {
	  var templateActionBar, templateList;
	  templateList = "<div class='gitlab-list'> <header> <h3><i class='icon small list title'></i>Git仓库列表</h3> </header> <ul> <li ng-repeat='item in gitList' title='{{item.git}}'> {{onlyShowName(item.git)}} <gitlab-action-bar item='item' bean='bean'></gitlab-action-bar> </li> </ul> </div>";
	  templateActionBar = "<div class='action-bar'> <a ng-click='del()'><i class='icon small del action'></i>删除</a> <a ng-click='fork()'><i class='icon small fork action'></i>Fork</a> </div>";
	  return _module.directiveModule.directive('gitlabList', [
	    '$stateParams', function($stateParams) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          bean: "=",
	          name: "@"
	        },
	        template: templateList,
	        link: function(scope, element, attrs) {
	          var loadData;
	          scope.onlyShowName = function(gitUrl) {
	            gitUrl = gitUrl || "";
	            return gitUrl.split(":")[1];
	          };
	          loadData = function() {
	            return scope.bean.getData(scope.name).then(function(data) {
	              return scope.gitList = data;
	            });
	          };
	          scope.$on("component:" + scope.name + ":reload", function() {
	            return loadData();
	          });
	          return loadData();
	        }
	      };
	    }
	  ]).directive('gitlabActionBar', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          item: "=",
	          bean: "="
	        },
	        template: templateActionBar,
	        link: function(scope, element, attrs) {
	          scope.fork = function() {
	            return scope.bean.doAction("fork", scope.item.git_id);
	          };
	          return scope.del = function() {
	            return scope.bean.doAction("del", scope.item.id);
	          };
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/*
	  Author: ec.huyinghuan@gmail.com
	  Date: 2015.07.07 15:30 PM
	  Describe:
	    添加已有仓库关联到项目
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module) {
	  var template;
	  template = "<div class='gitlab-add-form'> <header> <h3><i class='icon small add title'></i>添加已有仓库</h3> </header> <p>如果你的gitlab中已经存在与此项目关联的，请在此处添加 <a href='' >如何知道我的Git仓库地址?</a></p> <input type='text' placeholder='git@git.hunantv.com:honey-lab/bhf.git' ng-model='gitlab_url' > <button ng-click='save()'  class='primary default btn_import'>添加</button> </div>";
	  return _module.directiveModule.directive('gitlabAddToProject', [
	    '$stateParams', 'NOTIFY', function($stateParams, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          bean: '=',
	          name: "@"
	        },
	        template: template,
	        link: function(scope, element, attrs) {
	          var reg;
	          reg = /^git@git\.hunantv\.com:.+\/.+\.git$/;
	          scope.save = function() {
	            if (!scope.gitlab_url) {
	              return NOTIFY.warn("gitlab地址不能为空");
	            }
	            if (!reg.test(scope.gitlab_url)) {
	              return NOTIFY.warn("gitlab地址格式不正确");
	            }
	            return scope.bean.doAction('add', scope.gitlab_url);
	          };
	          return scope.$on("component:" + scope.name + ":reset", function() {
	            return scope.gitlab_url = "";
	          });
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
	/*
	  Author: ec.huyinghuan@gmail.com
	  Date: 2015.07.09 15:30 PM
	  Describe:
	    创建gitlab 新仓库并关联到项目
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module) {
	  var template;
	  template = "<div class='gitlab-create-form'> <header> <h3><i class='icon small create title'></i>创建新的仓库</h3> </header> <input type='text' placeholder='字母,数字,_ 的组合' ng-model='gitlab_name' > <button ng-click='save()' class='primary default btn_import'>创建</button> </div>";
	  return _module.directiveModule.directive('gitlabCreateForProject', [
	    '$stateParams', 'NOTIFY', function($stateParams, NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          bean: '=',
	          name: "@"
	        },
	        template: template,
	        link: function(scope, element, attrs) {
	          var reg;
	          reg = /^\w+$/;
	          scope.save = function() {
	            if (!scope.gitlab_name) {
	              return NOTIFY.warn("仓库名不能为空");
	            }
	            if (!reg.test(scope.gitlab_name)) {
	              return NOTIFY.warn("只能是字母，数字和下划线组成");
	            }
	            return scope.bean.doAction('create', scope.gitlab_name);
	          };
	          return scope.$on("component:" + scope.name + ":reset", function() {
	            return scope.gitlab_name = "";
	          });
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 110 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.3.0-beta.17
	 * (c) 2010-2014 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';

	/**
	 * @ngdoc module
	 * @name ngRoute
	 * @description
	 *
	 * # ngRoute
	 *
	 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
	 *
	 * ## Example
	 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
	 *
	 *
	 * <div doc-module-components="ngRoute"></div>
	 */
	 /* global -ngRouteModule */
	var ngRouteModule = angular.module('ngRoute', ['ng']).
	                        provider('$route', $RouteProvider);

	/**
	 * @ngdoc provider
	 * @name $routeProvider
	 * @kind function
	 *
	 * @description
	 *
	 * Used for configuring routes.
	 *
	 * ## Example
	 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
	 *
	 * ## Dependencies
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 */
	function $RouteProvider(){
	  function inherit(parent, extra) {
	    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
	  }

	  var routes = {};

	  /**
	   * @ngdoc method
	   * @name $routeProvider#when
	   *
	   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
	   *    contains redundant trailing slash or is missing one, the route will still match and the
	   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
	   *    route definition.
	   *
	   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
	   *        to the next slash are matched and stored in `$routeParams` under the given `name`
	   *        when the route matches.
	   *    * `path` can contain named groups starting with a colon and ending with a star:
	   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
	   *        when the route matches.
	   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
	   *
	   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
	   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
	   *
	   *    * `color: brown`
	   *    * `largecode: code/with/slashes`.
	   *
	   *
	   * @param {Object} route Mapping information to be assigned to `$route.current` on route
	   *    match.
	   *
	   *    Object properties:
	   *
	   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
	   *      newly created scope or the name of a {@link angular.Module#controller registered
	   *      controller} if passed as a string.
	   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
	   *      published to scope under the `controllerAs` name.
	   *    - `template` – `{string=|function()=}` – html template as a string or a function that
	   *      returns an html template as a string which should be used by {@link
	   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
	   *      This property takes precedence over `templateUrl`.
	   *
	   *      If `template` is a function, it will be called with the following parameters:
	   *
	   *      - `{Array.<Object>}` - route parameters extracted from the current
	   *        `$location.path()` by applying the current route
	   *
	   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
	   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
	   *
	   *      If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *      - `{Array.<Object>}` - route parameters extracted from the current
	   *        `$location.path()` by applying the current route
	   *
	   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
	   *      be injected into the controller. If any of these dependencies are promises, the router
	   *      will wait for them all to be resolved or one to be rejected before the controller is
	   *      instantiated.
	   *      If all the promises are resolved successfully, the values of the resolved promises are
	   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
	   *      fired. If any of the promises are rejected the
	   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
	   *      is:
	   *
	   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
	   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
	   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
	   *        and the return value is treated as the dependency. If the result is a promise, it is
	   *        resolved before its value is injected into the controller. Be aware that
	   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
	   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
	   *
	   *    - `redirectTo` – {(string|function())=} – value to update
	   *      {@link ng.$location $location} path with and trigger route redirection.
	   *
	   *      If `redirectTo` is a function, it will be called with the following parameters:
	   *
	   *      - `{Object.<string>}` - route parameters extracted from the current
	   *        `$location.path()` by applying the current route templateUrl.
	   *      - `{string}` - current `$location.path()`
	   *      - `{Object}` - current `$location.search()`
	   *
	   *      The custom `redirectTo` function is expected to return a string which will be used
	   *      to update `$location.path()` and `$location.search()`.
	   *
	   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
	   *      or `$location.hash()` changes.
	   *
	   *      If the option is set to `false` and url in the browser changes, then
	   *      `$routeUpdate` event is broadcasted on the root scope.
	   *
	   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
	   *
	   *      If the option is set to `true`, then the particular route can be matched without being
	   *      case sensitive
	   *
	   * @returns {Object} self
	   *
	   * @description
	   * Adds a new route definition to the `$route` service.
	   */
	  this.when = function(path, route) {
	    routes[path] = angular.extend(
	      {reloadOnSearch: true},
	      route,
	      path && pathRegExp(path, route)
	    );

	    // create redirection for trailing slashes
	    if (path) {
	      var redirectPath = (path[path.length-1] == '/')
	            ? path.substr(0, path.length-1)
	            : path +'/';

	      routes[redirectPath] = angular.extend(
	        {redirectTo: path},
	        pathRegExp(redirectPath, route)
	      );
	    }

	    return this;
	  };

	   /**
	    * @param path {string} path
	    * @param opts {Object} options
	    * @return {?Object}
	    *
	    * @description
	    * Normalizes the given path, returning a regular expression
	    * and the original path.
	    *
	    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
	    */
	  function pathRegExp(path, opts) {
	    var insensitive = opts.caseInsensitiveMatch,
	        ret = {
	          originalPath: path,
	          regexp: path
	        },
	        keys = ret.keys = [];

	    path = path
	      .replace(/([().])/g, '\\$1')
	      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
	        var optional = option === '?' ? option : null;
	        var star = option === '*' ? option : null;
	        keys.push({ name: key, optional: !!optional });
	        slash = slash || '';
	        return ''
	          + (optional ? '' : slash)
	          + '(?:'
	          + (optional ? slash : '')
	          + (star && '(.+?)' || '([^/]+)')
	          + (optional || '')
	          + ')'
	          + (optional || '');
	      })
	      .replace(/([\/$\*])/g, '\\$1');

	    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
	    return ret;
	  }

	  /**
	   * @ngdoc method
	   * @name $routeProvider#otherwise
	   *
	   * @description
	   * Sets route definition that will be used on route change when no other route definition
	   * is matched.
	   *
	   * @param {Object} params Mapping information to be assigned to `$route.current`.
	   * @returns {Object} self
	   */
	  this.otherwise = function(params) {
	    this.when(null, params);
	    return this;
	  };


	  this.$get = ['$rootScope',
	               '$location',
	               '$routeParams',
	               '$q',
	               '$injector',
	               '$http',
	               '$templateCache',
	               '$sce',
	      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

	    /**
	     * @ngdoc service
	     * @name $route
	     * @requires $location
	     * @requires $routeParams
	     *
	     * @property {Object} current Reference to the current route definition.
	     * The route definition contains:
	     *
	     *   - `controller`: The controller constructor as define in route definition.
	     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
	     *     controller instantiation. The `locals` contain
	     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
	     *
	     *     - `$scope` - The current route scope.
	     *     - `$template` - The current route template HTML.
	     *
	     * @property {Object} routes Object with all route configuration Objects as its properties.
	     *
	     * @description
	     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
	     * It watches `$location.url()` and tries to map the path to an existing route definition.
	     *
	     * Requires the {@link ngRoute `ngRoute`} module to be installed.
	     *
	     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
	     *
	     * The `$route` service is typically used in conjunction with the
	     * {@link ngRoute.directive:ngView `ngView`} directive and the
	     * {@link ngRoute.$routeParams `$routeParams`} service.
	     *
	     * @example
	     * This example shows how changing the URL hash causes the `$route` to match a route against the
	     * URL, and the `ngView` pulls in the partial.
	     *
	     * Note that this example is using {@link ng.directive:script inlined templates}
	     * to get it working on jsfiddle as well.
	     *
	     * <example name="$route-service" module="ngRouteExample"
	     *          deps="angular-route.js" fixBase="true">
	     *   <file name="index.html">
	     *     <div ng-controller="MainController">
	     *       Choose:
	     *       <a href="Book/Moby">Moby</a> |
	     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
	     *       <a href="Book/Gatsby">Gatsby</a> |
	     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
	     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
	     *
	     *       <div ng-view></div>
	     *
	     *       <hr />
	     *
	     *       <pre>$location.path() = {{$location.path()}}</pre>
	     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
	     *       <pre>$route.current.params = {{$route.current.params}}</pre>
	     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
	     *       <pre>$routeParams = {{$routeParams}}</pre>
	     *     </div>
	     *   </file>
	     *
	     *   <file name="book.html">
	     *     controller: {{name}}<br />
	     *     Book Id: {{params.bookId}}<br />
	     *   </file>
	     *
	     *   <file name="chapter.html">
	     *     controller: {{name}}<br />
	     *     Book Id: {{params.bookId}}<br />
	     *     Chapter Id: {{params.chapterId}}
	     *   </file>
	     *
	     *   <file name="script.js">
	     *     angular.module('ngRouteExample', ['ngRoute'])
	     *
	     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
	     *          $scope.$route = $route;
	     *          $scope.$location = $location;
	     *          $scope.$routeParams = $routeParams;
	     *      })
	     *
	     *      .controller('BookController', function($scope, $routeParams) {
	     *          $scope.name = "BookController";
	     *          $scope.params = $routeParams;
	     *      })
	     *
	     *      .controller('ChapterController', function($scope, $routeParams) {
	     *          $scope.name = "ChapterController";
	     *          $scope.params = $routeParams;
	     *      })
	     *
	     *     .config(function($routeProvider, $locationProvider) {
	     *       $routeProvider
	     *        .when('/Book/:bookId', {
	     *         templateUrl: 'book.html',
	     *         controller: 'BookController',
	     *         resolve: {
	     *           // I will cause a 1 second delay
	     *           delay: function($q, $timeout) {
	     *             var delay = $q.defer();
	     *             $timeout(delay.resolve, 1000);
	     *             return delay.promise;
	     *           }
	     *         }
	     *       })
	     *       .when('/Book/:bookId/ch/:chapterId', {
	     *         templateUrl: 'chapter.html',
	     *         controller: 'ChapterController'
	     *       });
	     *
	     *       // configure html5 to get links working on jsfiddle
	     *       $locationProvider.html5Mode(true);
	     *     });
	     *
	     *   </file>
	     *
	     *   <file name="protractor.js" type="protractor">
	     *     it('should load and compile correct template', function() {
	     *       element(by.linkText('Moby: Ch1')).click();
	     *       var content = element(by.css('[ng-view]')).getText();
	     *       expect(content).toMatch(/controller\: ChapterController/);
	     *       expect(content).toMatch(/Book Id\: Moby/);
	     *       expect(content).toMatch(/Chapter Id\: 1/);
	     *
	     *       element(by.partialLinkText('Scarlet')).click();
	     *
	     *       content = element(by.css('[ng-view]')).getText();
	     *       expect(content).toMatch(/controller\: BookController/);
	     *       expect(content).toMatch(/Book Id\: Scarlet/);
	     *     });
	     *   </file>
	     * </example>
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeChangeStart
	     * @eventType broadcast on root scope
	     * @description
	     * Broadcasted before a route change. At this  point the route services starts
	     * resolving all of the dependencies needed for the route change to occur.
	     * Typically this involves fetching the view template as well as any dependencies
	     * defined in `resolve` route property. Once  all of the dependencies are resolved
	     * `$routeChangeSuccess` is fired.
	     *
	     * @param {Object} angularEvent Synthetic event object.
	     * @param {Route} next Future route information.
	     * @param {Route} current Current route information.
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeChangeSuccess
	     * @eventType broadcast on root scope
	     * @description
	     * Broadcasted after a route dependencies are resolved.
	     * {@link ngRoute.directive:ngView ngView} listens for the directive
	     * to instantiate the controller and render the view.
	     *
	     * @param {Object} angularEvent Synthetic event object.
	     * @param {Route} current Current route information.
	     * @param {Route|Undefined} previous Previous route information, or undefined if current is
	     * first route entered.
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeChangeError
	     * @eventType broadcast on root scope
	     * @description
	     * Broadcasted if any of the resolve promises are rejected.
	     *
	     * @param {Object} angularEvent Synthetic event object
	     * @param {Route} current Current route information.
	     * @param {Route} previous Previous route information.
	     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
	     */

	    /**
	     * @ngdoc event
	     * @name $route#$routeUpdate
	     * @eventType broadcast on root scope
	     * @description
	     *
	     * The `reloadOnSearch` property has been set to false, and we are reusing the same
	     * instance of the Controller.
	     */

	    var forceReload = false,
	        $route = {
	          routes: routes,

	          /**
	           * @ngdoc method
	           * @name $route#reload
	           *
	           * @description
	           * Causes `$route` service to reload the current route even if
	           * {@link ng.$location $location} hasn't changed.
	           *
	           * As a result of that, {@link ngRoute.directive:ngView ngView}
	           * creates new scope, reinstantiates the controller.
	           */
	          reload: function() {
	            forceReload = true;
	            $rootScope.$evalAsync(updateRoute);
	          }
	        };

	    $rootScope.$on('$locationChangeSuccess', updateRoute);

	    return $route;

	    /////////////////////////////////////////////////////

	    /**
	     * @param on {string} current url
	     * @param route {Object} route regexp to match the url against
	     * @return {?Object}
	     *
	     * @description
	     * Check if the route matches the current url.
	     *
	     * Inspired by match in
	     * visionmedia/express/lib/router/router.js.
	     */
	    function switchRouteMatcher(on, route) {
	      var keys = route.keys,
	          params = {};

	      if (!route.regexp) return null;

	      var m = route.regexp.exec(on);
	      if (!m) return null;

	      for (var i = 1, len = m.length; i < len; ++i) {
	        var key = keys[i - 1];

	        var val = m[i];

	        if (key && val) {
	          params[key.name] = val;
	        }
	      }
	      return params;
	    }

	    function updateRoute() {
	      var next = parseRoute(),
	          last = $route.current;

	      if (next && last && next.$$route === last.$$route
	          && angular.equals(next.pathParams, last.pathParams)
	          && !next.reloadOnSearch && !forceReload) {
	        last.params = next.params;
	        angular.copy(last.params, $routeParams);
	        $rootScope.$broadcast('$routeUpdate', last);
	      } else if (next || last) {
	        forceReload = false;
	        $rootScope.$broadcast('$routeChangeStart', next, last);
	        $route.current = next;
	        if (next) {
	          if (next.redirectTo) {
	            if (angular.isString(next.redirectTo)) {
	              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
	                       .replace();
	            } else {
	              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
	                       .replace();
	            }
	          }
	        }

	        $q.when(next).
	          then(function() {
	            if (next) {
	              var locals = angular.extend({}, next.resolve),
	                  template, templateUrl;

	              angular.forEach(locals, function(value, key) {
	                locals[key] = angular.isString(value) ?
	                    $injector.get(value) : $injector.invoke(value, null, null, key);
	              });

	              if (angular.isDefined(template = next.template)) {
	                if (angular.isFunction(template)) {
	                  template = template(next.params);
	                }
	              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
	                if (angular.isFunction(templateUrl)) {
	                  templateUrl = templateUrl(next.params);
	                }
	                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
	                if (angular.isDefined(templateUrl)) {
	                  next.loadedTemplateUrl = templateUrl;
	                  template = $http.get(templateUrl, {cache: $templateCache}).
	                      then(function(response) { return response.data; });
	                }
	              }
	              if (angular.isDefined(template)) {
	                locals['$template'] = template;
	              }
	              return $q.all(locals);
	            }
	          }).
	          // after route change
	          then(function(locals) {
	            if (next == $route.current) {
	              if (next) {
	                next.locals = locals;
	                angular.copy(next.params, $routeParams);
	              }
	              $rootScope.$broadcast('$routeChangeSuccess', next, last);
	            }
	          }, function(error) {
	            if (next == $route.current) {
	              $rootScope.$broadcast('$routeChangeError', next, last, error);
	            }
	          });
	      }
	    }


	    /**
	     * @returns {Object} the current active route, by matching it against the URL
	     */
	    function parseRoute() {
	      // Match a route
	      var params, match;
	      angular.forEach(routes, function(route, path) {
	        if (!match && (params = switchRouteMatcher($location.path(), route))) {
	          match = inherit(route, {
	            params: angular.extend({}, $location.search(), params),
	            pathParams: params});
	          match.$$route = route;
	        }
	      });
	      // No route matched; fallback to "otherwise" route
	      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
	    }

	    /**
	     * @returns {string} interpolation of the redirect path with the parameters
	     */
	    function interpolate(string, params) {
	      var result = [];
	      angular.forEach((string||'').split(':'), function(segment, i) {
	        if (i === 0) {
	          result.push(segment);
	        } else {
	          var segmentMatch = segment.match(/(\w+)(.*)/);
	          var key = segmentMatch[1];
	          result.push(params[key]);
	          result.push(segmentMatch[2] || '');
	          delete params[key];
	        }
	      });
	      return result.join('');
	    }
	  }];
	}

	ngRouteModule.provider('$routeParams', $RouteParamsProvider);


	/**
	 * @ngdoc service
	 * @name $routeParams
	 * @requires $route
	 *
	 * @description
	 * The `$routeParams` service allows you to retrieve the current set of route parameters.
	 *
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 *
	 * The route parameters are a combination of {@link ng.$location `$location`}'s
	 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
	 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
	 *
	 * In case of parameter name collision, `path` params take precedence over `search` params.
	 *
	 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
	 * (but its properties will likely change) even when a route change occurs.
	 *
	 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
	 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
	 * Instead you can use `$route.current.params` to access the new route's parameters.
	 *
	 * @example
	 * ```js
	 *  // Given:
	 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
	 *  // Route: /Chapter/:chapterId/Section/:sectionId
	 *  //
	 *  // Then
	 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
	 * ```
	 */
	function $RouteParamsProvider() {
	  this.$get = function() { return {}; };
	}

	ngRouteModule.directive('ngView', ngViewFactory);
	ngRouteModule.directive('ngView', ngViewFillContentFactory);


	/**
	 * @ngdoc directive
	 * @name ngView
	 * @restrict ECA
	 *
	 * @description
	 * # Overview
	 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
	 * including the rendered template of the current route into the main layout (`index.html`) file.
	 * Every time the current route changes, the included view changes with it according to the
	 * configuration of the `$route` service.
	 *
	 * Requires the {@link ngRoute `ngRoute`} module to be installed.
	 *
	 * @animations
	 * enter - animation is used to bring new content into the browser.
	 * leave - animation is used to animate existing content away.
	 *
	 * The enter and leave animation occur concurrently.
	 *
	 * @scope
	 * @priority 400
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 *
	 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
	 *                  $anchorScroll} to scroll the viewport after the view is updated.
	 *
	 *                  - If the attribute is not set, disable scrolling.
	 *                  - If the attribute is set without value, enable scrolling.
	 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
	 *                    as an expression yields a truthy value.
	 * @example
	    <example name="ngView-directive" module="ngViewExample"
	             deps="angular-route.js;angular-animate.js"
	             animations="true" fixBase="true">
	      <file name="index.html">
	        <div ng-controller="MainCtrl as main">
	          Choose:
	          <a href="Book/Moby">Moby</a> |
	          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
	          <a href="Book/Gatsby">Gatsby</a> |
	          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
	          <a href="Book/Scarlet">Scarlet Letter</a><br/>

	          <div class="view-animate-container">
	            <div ng-view class="view-animate"></div>
	          </div>
	          <hr />

	          <pre>$location.path() = {{main.$location.path()}}</pre>
	          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
	          <pre>$route.current.params = {{main.$route.current.params}}</pre>
	          <pre>$routeParams = {{main.$routeParams}}</pre>
	        </div>
	      </file>

	      <file name="book.html">
	        <div>
	          controller: {{book.name}}<br />
	          Book Id: {{book.params.bookId}}<br />
	        </div>
	      </file>

	      <file name="chapter.html">
	        <div>
	          controller: {{chapter.name}}<br />
	          Book Id: {{chapter.params.bookId}}<br />
	          Chapter Id: {{chapter.params.chapterId}}
	        </div>
	      </file>

	      <file name="animations.css">
	        .view-animate-container {
	          position:relative;
	          height:100px!important;
	          position:relative;
	          background:white;
	          border:1px solid black;
	          height:40px;
	          overflow:hidden;
	        }

	        .view-animate {
	          padding:10px;
	        }

	        .view-animate.ng-enter, .view-animate.ng-leave {
	          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
	          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

	          display:block;
	          width:100%;
	          border-left:1px solid black;

	          position:absolute;
	          top:0;
	          left:0;
	          right:0;
	          bottom:0;
	          padding:10px;
	        }

	        .view-animate.ng-enter {
	          left:100%;
	        }
	        .view-animate.ng-enter.ng-enter-active {
	          left:0;
	        }
	        .view-animate.ng-leave.ng-leave-active {
	          left:-100%;
	        }
	      </file>

	      <file name="script.js">
	        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
	          .config(['$routeProvider', '$locationProvider',
	            function($routeProvider, $locationProvider) {
	              $routeProvider
	                .when('/Book/:bookId', {
	                  templateUrl: 'book.html',
	                  controller: 'BookCtrl',
	                  controllerAs: 'book'
	                })
	                .when('/Book/:bookId/ch/:chapterId', {
	                  templateUrl: 'chapter.html',
	                  controller: 'ChapterCtrl',
	                  controllerAs: 'chapter'
	                });

	              // configure html5 to get links working on jsfiddle
	              $locationProvider.html5Mode(true);
	          }])
	          .controller('MainCtrl', ['$route', '$routeParams', '$location',
	            function($route, $routeParams, $location) {
	              this.$route = $route;
	              this.$location = $location;
	              this.$routeParams = $routeParams;
	          }])
	          .controller('BookCtrl', ['$routeParams', function($routeParams) {
	            this.name = "BookCtrl";
	            this.params = $routeParams;
	          }])
	          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
	            this.name = "ChapterCtrl";
	            this.params = $routeParams;
	          }]);

	      </file>

	      <file name="protractor.js" type="protractor">
	        it('should load and compile correct template', function() {
	          element(by.linkText('Moby: Ch1')).click();
	          var content = element(by.css('[ng-view]')).getText();
	          expect(content).toMatch(/controller\: ChapterCtrl/);
	          expect(content).toMatch(/Book Id\: Moby/);
	          expect(content).toMatch(/Chapter Id\: 1/);

	          element(by.partialLinkText('Scarlet')).click();

	          content = element(by.css('[ng-view]')).getText();
	          expect(content).toMatch(/controller\: BookCtrl/);
	          expect(content).toMatch(/Book Id\: Scarlet/);
	        });
	      </file>
	    </example>
	 */


	/**
	 * @ngdoc event
	 * @name ngView#$viewContentLoaded
	 * @eventType emit on the current ngView scope
	 * @description
	 * Emitted every time the ngView content is reloaded.
	 */
	ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
	function ngViewFactory(   $route,   $anchorScroll,   $animate) {
	  return {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    link: function(scope, $element, attr, ctrl, $transclude) {
	        var currentScope,
	            currentElement,
	            previousElement,
	            autoScrollExp = attr.autoscroll,
	            onloadExp = attr.onload || '';

	        scope.$on('$routeChangeSuccess', update);
	        update();

	        function cleanupLastView() {
	          if(previousElement) {
	            previousElement.remove();
	            previousElement = null;
	          }
	          if(currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }
	          if(currentElement) {
	            $animate.leave(currentElement, function() {
	              previousElement = null;
	            });
	            previousElement = currentElement;
	            currentElement = null;
	          }
	        }

	        function update() {
	          var locals = $route.current && $route.current.locals,
	              template = locals && locals.$template;

	          if (angular.isDefined(template)) {
	            var newScope = scope.$new();
	            var current = $route.current;

	            // Note: This will also link all children of ng-view that were contained in the original
	            // html. If that content contains controllers, ... they could pollute/change the scope.
	            // However, using ng-view on an element with additional content does not make sense...
	            // Note: We can't remove them in the cloneAttchFn of $transclude as that
	            // function is called before linking the content, which would apply child
	            // directives to non existing elements.
	            var clone = $transclude(newScope, function(clone) {
	              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
	                if (angular.isDefined(autoScrollExp)
	                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
	                  $anchorScroll();
	                }
	              });
	              cleanupLastView();
	            });

	            currentElement = clone;
	            currentScope = current.scope = newScope;
	            currentScope.$emit('$viewContentLoaded');
	            currentScope.$eval(onloadExp);
	          } else {
	            cleanupLastView();
	          }
	        }
	    }
	  };
	}

	// This directive is called during the $transclude call of the first `ngView` directive.
	// It will replace and compile the content of the element with the loaded template.
	// We need this directive so that the element content is already filled when
	// the link function of another directive on the same element as ngView
	// is called.
	ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
	function ngViewFillContentFactory($compile, $controller, $route) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    link: function(scope, $element) {
	      var current = $route.current,
	          locals = current.locals;

	      $element.html(locals.$template);

	      var link = $compile($element.contents());

	      if (current.controller) {
	        locals.$scope = scope;
	        var controller = $controller(current.controller, locals);
	        if (current.controllerAs) {
	          scope[current.controllerAs] = controller;
	        }
	        $element.data('$ngControllerController', controller);
	        $element.children().data('$ngControllerController', controller);
	      }

	      link(scope);
	    }
	  };
	}


	})(window, window.angular);


/***/ },
/* 111 */,
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(43)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _) {
	  return _module.controllerModule.controller('homeController', ['$scope', '$stateParams', '$rootScope', 'API', function($scope, $stateParams, $rootScope, API) {}]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(114), __webpack_require__(119), __webpack_require__(120), __webpack_require__(121)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(43), __webpack_require__(115), __webpack_require__(51), __webpack_require__(116), __webpack_require__(117), __webpack_require__(118)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _, _tmplGlobal, _template, _keybroad) {
	  return _module.directiveModule.directive('datetimePicker', function() {
	    return {
	      restrict: 'AC',
	      link: function(scope, element, attrs) {
	        var $this, dateOpt, dateTimeOpt, format, name, timeOpt, type;
	        dateOpt = {
	          format: 'yyyy-mm-dd',
	          startView: 2,
	          minView: 2
	        };
	        timeOpt = {
	          format: 'hh:ii:ss',
	          startView: 1,
	          minView: 0,
	          maxView: 1
	        };
	        dateTimeOpt = {
	          format: 'yyyy-mm-dd hh:ii:ss',
	          startView: 2
	        };
	        name = attrs.name;
	        type = attrs.datetype;
	        format = attrs.format;
	        switch (type) {
	          case 'time':
	            dateOpt = timeOpt;
	            break;
	          case 'datetime':
	            dateOpt = dateTimeOpt;
	        }
	        dateOpt.showMeridian = true;
	        dateOpt.autoclose = true;
	        if (format) {
	          dateOpt.format = format;
	        }
	        $this = $(element);
	        $this.datetimepicker(dateOpt);
	        $this.on('changeDate', function(ev) {
	          return scope.$emit('datetime:change', name, ev.date.valueOf() - 8 * 3600 * 1000);
	        });
	        return $this.on('show', function() {
	          var current;
	          current = attrs.date;
	          if (current) {
	            current = new Date(Number(current));
	          }
	          return $this.datetimepicker('setDate', current || new Date());
	        });
	      }
	    };
	  }).directive('simpleTab', function() {
	    return {
	      restrict: 'A',
	      replace: false,
	      link: function(scope, element, attrs) {
	        var $o;
	        $o = $(element).simpleTab();
	        return attrs.$observe('activeIndex', function() {
	          return $o.simpleTab('change', parseInt(attrs.activeIndex));
	        });
	      }
	    };
	  }).directive('headerToolbar', [
	    '$rootScope', '$location', 'API', function($rootScope, $location, API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: _utils.extractTemplate('#tmpl-global-header-toolbar', _tmplGlobal),
	        link: function(scope, element, attrs) {
	          scope.onClickSetting = function(target) {
	            return $rootScope.$emit('member:setting:show', target);
	          };
	          scope.onClickTeam = function() {
	            return $location.url("/team/0/invite?title=我收到的邀请");
	          };
	          scope.onClickReport = function() {
	            return $location.url("/report/0/weekly-report");
	          };
	          scope.onClickIssues = function() {
	            return $location.url("/myproject/all/issue/myself");
	          };
	          scope.onClickFollow = function() {
	            return $location.url("/myfollow/all/issue/follow?title=我的关注");
	          };
	          scope.onClickByUrl = function(url) {
	            return $location.url(url);
	          };
	          scope.onClickLogout = function() {
	            return API.session()["delete"]().then(function() {
	              return $location.path('/login');
	            });
	          };
	          scope.onClickLogin = function() {
	            return $location.path('/login');
	          };
	          return scope.isLogin = $rootScope.__member.isLogin;
	        }
	      };
	    }
	  ]).directive('hotKey', [
	    function() {
	      return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	          var key, onDownCallback, onUpCallback;
	          key = attrs.key;
	          _keybroad.clear.key(key);
	          onDownCallback = function() {};
	          onUpCallback = function() {
	            return $(element).click();
	          };
	          return _keybroad.on(key, onDownCallback, onUpCallback);
	        }
	      };
	    }
	  ]).directive('reportWeeklyPrint', [
	    'API', function(API) {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate,
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('instantSearch', [
	    '$rootScope', function($rootScope) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attrs) {
	          element.bind('focus', function(event) {
	            return element.css({
	              width: '100%',
	              opacity: 1
	            });
	          });
	          element.bind('blur', function(event) {
	            return element.css({
	              width: '80%',
	              opacity: 0.8
	            });
	          });
	          return element.bind('keyup', function(event) {
	            var value;
	            value = element.val();
	            return $rootScope.$broadcast('instant-search:change', _utils.trim(value));
	          });
	        }
	      };
	    }
	  ]).directive('globalMessage', [
	    function() {
	      return {
	        restrict: 'E',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-global-message', _tmplGlobal),
	        link: function(scope, element, attrs) {}
	      };
	    }
	  ]).directive('equalParentHeight', [
	    function() {
	      return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	          var resetHeight;
	          resetHeight = function() {
	            return element.css('height', element.parent().outerHeight());
	          };
	          $(window).on('onResizeEx', resetHeight);
	          scope.$on('$destroy', function() {
	            return $(window).off('onResizeEx', resetHeight);
	          });
	          return resetHeight();
	        }
	      };
	    }
	  ]).directive('fullSizeImagePreviewer', [
	    function() {
	      return {
	        restrict: 'A',
	        link: function(scope, element, attrs) {
	          return element.bind('click', function(event) {
	            var $this, link;
	            $this = $(event.target);
	            if (!$this.is('img')) {
	              return;
	            }
	            link = $this.attr('src');
	            return window.open(link);
	          });
	        }
	      };
	    }
	  ]).directive('pagination', [
	    "$rootScope", function($rootScope) {
	      return {
	        restrict: 'EA',
	        replace: true,
	        template: _utils.extractTemplate('#tmpl-pagination', _tmplGlobal),
	        link: function(scope, element, attrs) {
	          var bindPage, getPages, makePage;
	          makePage = function(number, text, isActive) {
	            return {
	              number: number,
	              text: text,
	              active: isActive
	            };
	          };
	          getPages = function(currentPage, totalPages) {
	            var endPage, i, isMaxSized, j, maxSize, pages, ref, ref1, startPage;
	            startPage = 1;
	            endPage = totalPages;
	            maxSize = 5;
	            isMaxSized = maxSize < totalPages;
	            if (isMaxSized) {
	              startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
	              endPage = startPage + maxSize - 1;
	              if (endPage > totalPages) {
	                endPage = totalPages;
	                startPage = endPage - maxSize + 1;
	              }
	            }
	            if (endPage > totalPages) {
	              endPage = totalPages;
	              startPage = endPage - maxSize + 1;
	            }
	            pages = [];
	            for (i = j = ref = startPage, ref1 = endPage; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
	              pages.push(makePage(i, i, i === currentPage));
	            }
	            if (startPage > 1) {
	              pages.unshift(makePage(startPage - 1, '...', false));
	            }
	            if (endPage < totalPages) {
	              pages.push(makePage(endPage + 1, '...', false));
	            }
	            return pages;
	          };
	          bindPage = function(pagination) {
	            scope.currentPage = pagination.pageIndex;
	            scope.totalPages = pagination.pageCount;
	            return scope.pages = getPages(pagination.pageIndex, pagination.pageCount);
	          };
	          scope.selectPage = function(page) {
	            return $rootScope.$broadcast('pagination:change', page, attrs.uuid, function(pagination) {
	              return bindPage(pagination);
	            });
	          };
	          scope.nextPage = function() {
	            if (scope.currentPage + 1 > scope.totalPages) {
	              return;
	            }
	            return scope.selectPage(scope.currentPage + 1);
	          };
	          scope.previousPage = function() {
	            if (scope.currentPage === 1) {
	              return;
	            }
	            return scope.selectPage(scope.currentPage - 1);
	          };
	          scope.noPrevious = function() {
	            return scope.page === 1;
	          };
	          scope.noNext = function() {
	            return scope.page === scope.totalPages;
	          };
	          return attrs.$observe('paginations', function() {
	            var pagination;
	            if (!attrs.paginations) {
	              return;
	            }
	            pagination = JSON.parse(attrs.paginations);
	            return bindPage(pagination);
	          });
	        }
	      };
	    }
	  ]).directive('headerGlobal', function() {
	    return {
	      restrict: 'E',
	      replace: true,
	      template: _utils.extractTemplate('#tmpl-header', _tmplGlobal),
	      link: function(scope, element, attrs) {
	        if (attrs.project) {
	          scope.project = attrs.project;
	        }
	        if (attrs.projectVersion) {
	          return scope.projectVersion = attrs.projectVersion;
	        }
	      }
	    };
	  });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 115 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>  <textarea id=\"tmpl-global-blank-page\">\n        <div class=\"blank-page\">\n            <div class=\"inner\">\n                \n            </div>\n        </div>\n    </textarea>  <textarea id=\"tmpl-global-git-list\">\n        <ul class=\"git-list\">\n            <li ng-repeat=\"account in gitAccounts track by $index\" ng-click=\"onClickEdit($event, $index, account)\">\n                <label>{{account}}</label>\n                <button ng-click=\"onClickRemove($event, $index)\">\n                    <i class=\"icon small remove\"></i>\n                </button>\n            </li>\n            <li class=\"create\">\n                <input type=\"text\" class=\"text medium\" placeholder=\"输入git地址后回车\" class=\"medium\" ng-keypress=\"onKeypressAdd($event)\" ng-blur=\"onKeyupAddLastItem($event)\" ng-model=\"currentText\"/>\n            </li>\n        </ul>\n    </textarea>  <textarea id=\"tmpl-global-header-toolbar\">\n        <div class=\"header-toolbar\">\n            <div class=\"search\">\n                <input type=\"text\" placeholder=\"请输入搜索关键字\" class=\"text\" instant-search/>\n            </div>\n            <div class=\"menu\">\n                <div class=\"profile\" ng-if=\"!isLogin\">\n                    <a ng-click=\"onClickLogin()\">\n                        <i class=\"small icon\"></i>\n                        <span>登录</span>\n                    </a>\n                </div>\n\n                <div class=\"profile\" dropdown ng-if=\"isLogin\">\n                    <i class=\"small icon\"></i>\n                    <span>我的</span>\n                    <div class=\"dropdown dropdown-tip\">\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a ng-click=\"onClickIssues()\">个人中心</a>\n                            </li>\n                            <li>\n                                <a ng-click=\"onClickFollow()\">我的关注</a>\n                            </li>\n                            <li>\n                                <a ng-click=\"onClickTeam()\">我的团队</a>\n                            </li>\n                            <li class=\"spliter\">\n                                <a ng-click=\"onClickReport()\">我的报表</a>\n                            </li>\n                            <li>\n                                <a ng-click=\"onClickSetting(0)\">个人资料</a>\n                            </li>\n                            <li class=\"spliter\">\n                                <a ng-click=\"onClickSetting(3)\">通知设置</a>\n                            </li>\n                            <li>\n                                <a ng-click=\"onClickSetting(1)\">修改密码</a>\n                            </li>\n                            <li>\n                                <a ng-click=\"onClickLogout()\">退出</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n\n                <member-message-notifier></member-message-notifier>\n                <div class=\"help\" dropdown>\n                    <i class=\"small icon\"></i>\n                    <span>关于</span>\n                    <div class=\"dropdown dropdown-tip\">\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a ng-click=\"onClickByUrl('/wiki/17/issue')\">帮助</a>\n                            </li>\n                            <li>\n                                <a ng-click=\"onClickByUrl('/wiki/17/category/30/issue')\">反馈建议</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </textarea> <textarea id=\"tmpl-global-message\">\n        <div class=\"global-message\">\n            <span>公告：</span>\n            <a href=\"/wiki/17/category/90/issue/2607\">BHF 2.0正式发布，新增19项新功能</a>\n        </div>\n    </textarea> <textarea id=\"tmpl-pagination\">\n        <div class=\"pagination\">\n            <ul>\n                <li ng-class=\"{disabled: noPrevious()}\">\n                    <a href ng-click=\"selectPage(1)\">首页</a>\n                </li>\n                <li ng-class=\"{disabled: noPrevious()}\">\n                    <a href ng-click=\"previousPage()\">上一页</a>\n                </li>\n                \n                <li ng-class=\"{disabled: noNext()}\">\n                    <a href ng-click=\"nextPage()\">下一页</a>\n                </li>\n                <li ng-class=\"{disabled: noNext()}\">\n                    <a href ng-click=\"selectPage(totalPages)\">尾页</a>\n                </li>\n            </ul>\n        </div>\n    </textarea> <textarea id=\"tmpl-header\">\n        <header>\n            \n            <div class=\"overview\">\n                <a href=\"/\" class=\"home\">\n                    <i class=\"icon small\"></i>\n                </a>\n                <div class=\"content\" ng-show=\"project\">\n                    <div class=\"title\">\n                        <label>{{project.title}}</label>\n                        <i class=\"small icon\"></i>\n                    </div>\n                    <i class=\"small icon open\"></i>\n                    <div class=\"version\" dropdown data-name=\"project:version\" data-text-container=\"label.display\" data-selected=\"{{projectVersion}}\" data-exclude-value=\"-1\">\n                        <label class=\"display\">{{projectVersion | currentProjectVersion}}</label>\n                        <i class=\"small icon\"></i>\n                        <project-version-dropdown data-show-more=\"true\"></project-version-dropdown>\n                    </div>\n                </div>\n                <div class=\"content\" ng-show=\"title\">\n                    <div class=\"title\">\n                        <label>{{title}}</label>\n                        <i class=\"small icon\"></i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"logo\">\n                <i class=\"icon\"></i>\n            </div>\n                \n            <header-toolbar></header-toolbar>\n        </header>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("global-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Title: KeyboardJS
	 * Version: v0.4.1
	 * Description: KeyboardJS is a flexible and easy to use keyboard binding
	 * library.
	 * Author: Robert Hurst.
	 *
	 * Copyright 2011, Robert William Hurst
	 * Licenced under the BSD License.
	 * See https://raw.github.com/RobertWHurst/KeyboardJS/master/license.txt
	 */
	(function(context, factory) {

		//INDEXOF POLLYFILL
		[].indexOf||(Array.prototype.indexOf=function(a,b,c){for(c=this.length,b=(c+~~b)%c;b<c&&(!(b in this)||this[b]!==a);b++);return b^c?b:-1;});

		//AMD
		if(true) { !(__WEBPACK_AMD_DEFINE_FACTORY__ = (constructAMD), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); }

		//CommonJS
		else if(typeof module !== 'undefined') {constructCommonJS()}

		//GLOBAL
		else { constructGlobal(); }

		/**
		 * Construct AMD version of the library
		 */
		function constructAMD() {

			//create a library instance
			return init(context);

			//spawns a library instance
			function init(context) {
				var library;
				library = factory(context, 'amd');
				library.fork = init;
				return library;
			}
		}

		/**
		 * Construct CommonJS version of the library
		 */
		function constructCommonJS() {

			//create a library instance
			module.exports = init(context);

			return;

			//spawns a library instance
			function init(context) {
				var library;
				library = factory(context, 'CommonJS');
				library.fork = init;
				return library;

			}

		}

		/**
		 * Construct a Global version of the library
		 */
		function constructGlobal() {
			var library;

			//create a library instance
			library = init(context);

			//spawns a library instance
			function init(context) {
				var library, namespaces = [], previousValues = {};

				library = factory(context, 'global');
				library.fork = init;
				library.noConflict = noConflict;
				library.noConflict('KeyboardJS', 'k');
				return library;

				//sets library namespaces
				function noConflict(    ) {
					var args, nI, newNamespaces;

					newNamespaces = Array.prototype.slice.apply(arguments);

					for(nI = 0; nI < namespaces.length; nI += 1) {
						if(typeof previousValues[namespaces[nI]] === 'undefined') {
							delete context[namespaces[nI]];
						} else {
							context[namespaces[nI]] = previousValues[namespaces[nI]];
						}
					}

					previousValues = {};

					for(nI = 0; nI < newNamespaces.length; nI += 1) {
						if(typeof newNamespaces[nI] !== 'string') {
							throw new Error('Cannot replace namespaces. All new namespaces must be strings.');
						}
						previousValues[newNamespaces[nI]] = context[newNamespaces[nI]];
						context[newNamespaces[nI]] = library;
					}

					namespaces = newNamespaces;

					return namespaces;
				}
			}
		}

	})(this, function(targetWindow, env) {
		var KeyboardJS = {}, locales = {}, locale, map, macros, activeKeys = [], bindings = [], activeBindings = [],
		activeMacros = [], aI, usLocale;
		targetWindow = targetWindow || window;

		///////////////////////
		// DEFAULT US LOCALE //
		///////////////////////

		//define US locale
		//If you create a new locale please submit it as a pull request or post
		// it in the issue tracker at
		// http://github.com/RobertWhurst/KeyboardJS/issues/
		usLocale = {
			"map": {

				//general
				"3": ["cancel"],
				"8": ["backspace"],
				"9": ["tab"],
				"12": ["clear"],
				"13": ["enter"],
				"16": ["shift"],
				"17": ["ctrl"],
				"18": ["alt", "menu"],
				"19": ["pause", "break"],
				"20": ["capslock"],
				"27": ["escape", "esc"],
				"32": ["space", "spacebar"],
				"33": ["pageup"],
				"34": ["pagedown"],
				"35": ["end"],
				"36": ["home"],
				"37": ["left"],
				"38": ["up"],
				"39": ["right"],
				"40": ["down"],
				"41": ["select"],
				"42": ["printscreen"],
				"43": ["execute"],
				"44": ["snapshot"],
				"45": ["insert", "ins"],
				"46": ["delete", "del"],
				"47": ["help"],
				"91": ["command", "windows", "win", "super", "leftcommand", "leftwindows", "leftwin", "leftsuper"],
				"92": ["command", "windows", "win", "super", "rightcommand", "rightwindows", "rightwin", "rightsuper"],
				"145": ["scrolllock", "scroll"],
				"186": ["semicolon", ";"],
				"187": ["equal", "equalsign", "="],
				"188": ["comma", ","],
				"189": ["dash", "-"],
				"190": ["period", "."],
				"191": ["slash", "forwardslash", "/"],
				"192": ["graveaccent", "`"],
				"219": ["openbracket", "["],
				"220": ["backslash", "\\"],
				"221": ["closebracket", "]"],
				"222": ["apostrophe", "'"],

				//0-9
				"48": ["zero", "0"],
				"49": ["one", "1"],
				"50": ["two", "2"],
				"51": ["three", "3"],
				"52": ["four", "4"],
				"53": ["five", "5"],
				"54": ["six", "6"],
				"55": ["seven", "7"],
				"56": ["eight", "8"],
				"57": ["nine", "9"],

				//numpad
				"96": ["numzero", "num0"],
				"97": ["numone", "num1"],
				"98": ["numtwo", "num2"],
				"99": ["numthree", "num3"],
				"100": ["numfour", "num4"],
				"101": ["numfive", "num5"],
				"102": ["numsix", "num6"],
				"103": ["numseven", "num7"],
				"104": ["numeight", "num8"],
				"105": ["numnine", "num9"],
				"106": ["nummultiply", "num*"],
				"107": ["numadd", "num+"],
				"108": ["numenter"],
				"109": ["numsubtract", "num-"],
				"110": ["numdecimal", "num."],
				"111": ["numdivide", "num/"],
				"144": ["numlock", "num"],

				//function keys
				"112": ["f1"],
				"113": ["f2"],
				"114": ["f3"],
				"115": ["f4"],
				"116": ["f5"],
				"117": ["f6"],
				"118": ["f7"],
				"119": ["f8"],
				"120": ["f9"],
				"121": ["f10"],
				"122": ["f11"],
				"123": ["f12"]
			},
			"macros": [

				//secondary key symbols
				['shift + `', ["tilde", "~"]],
				['shift + 1', ["exclamation", "exclamationpoint", "!"]],
				['shift + 2', ["at", "@"]],
				['shift + 3', ["number", "#"]],
				['shift + 4', ["dollar", "dollars", "dollarsign", "$"]],
				['shift + 5', ["percent", "%"]],
				['shift + 6', ["caret", "^"]],
				['shift + 7', ["ampersand", "and", "&"]],
				['shift + 8', ["asterisk", "*"]],
				['shift + 9', ["openparen", "("]],
				['shift + 0', ["closeparen", ")"]],
				['shift + -', ["underscore", "_"]],
				['shift + =', ["plus", "+"]],
				['shift + (', ["opencurlybrace", "opencurlybracket", "{"]],
				['shift + )', ["closecurlybrace", "closecurlybracket", "}"]],
				['shift + \\', ["verticalbar", "|"]],
				['shift + ;', ["colon", ":"]],
				['shift + \'', ["quotationmark", "\""]],
				['shift + !,', ["openanglebracket", "<"]],
				['shift + .', ["closeanglebracket", ">"]],
				['shift + /', ["questionmark", "?"]]
			]
		};
		//a-z and A-Z
		for (aI = 65; aI <= 90; aI += 1) {
			usLocale.map[aI] = String.fromCharCode(aI + 32);
			usLocale.macros.push(['shift + ' + String.fromCharCode(aI + 32) + ', capslock + ' + String.fromCharCode(aI + 32), [String.fromCharCode(aI)]]);
		}
		registerLocale('us', usLocale);
		getSetLocale('us');


		//////////
		// INIT //
		//////////

		//enable the library
		enable();


		/////////
		// API //
		/////////

		//assemble the library and return it
		KeyboardJS.enable = enable;
		KeyboardJS.disable = disable;
		KeyboardJS.activeKeys = getActiveKeys;
		KeyboardJS.on = createBinding;
		KeyboardJS.clear = removeBindingByKeyCombo;
		KeyboardJS.clear.key = removeBindingByKeyName;
		KeyboardJS.locale = getSetLocale;
		KeyboardJS.locale.register = registerLocale;
		KeyboardJS.macro = createMacro;
		KeyboardJS.macro.remove = removeMacro;
		KeyboardJS.key = {};
		KeyboardJS.key.name = getKeyName;
		KeyboardJS.key.code = getKeyCode;
		KeyboardJS.combo = {};
		KeyboardJS.combo.active = isSatisfiedCombo;
		KeyboardJS.combo.parse = parseKeyCombo;
		KeyboardJS.combo.stringify = stringifyKeyCombo;
		return KeyboardJS;


		//////////////////////
		// INSTANCE METHODS //
		//////////////////////

		/**
		 * Enables KeyboardJS
		 */
		function enable() {
			if(targetWindow.addEventListener) {
				targetWindow.document.addEventListener('keydown', keydown, false);
				targetWindow.document.addEventListener('keyup', keyup, false);
				targetWindow.addEventListener('blur', reset, false);
				targetWindow.addEventListener('webkitfullscreenchange', reset, false);
				targetWindow.addEventListener('mozfullscreenchange', reset, false);
			} else if(targetWindow.attachEvent) {
				targetWindow.document.attachEvent('onkeydown', keydown);
				targetWindow.document.attachEvent('onkeyup', keyup);
				targetWindow.attachEvent('onblur', reset);
			}
		}

		/**
		 * Exits all active bindings and disables KeyboardJS
		 */
		function disable() {
			reset();
			if(targetWindow.removeEventListener) {
				targetWindow.document.removeEventListener('keydown', keydown, false);
				targetWindow.document.removeEventListener('keyup', keyup, false);
				targetWindow.removeEventListener('blur', reset, false);
				targetWindow.removeEventListener('webkitfullscreenchange', reset, false);
				targetWindow.removeEventListener('mozfullscreenchange', reset, false);
			} else if(targetWindow.detachEvent) {
				targetWindow.document.detachEvent('onkeydown', keydown);
				targetWindow.document.detachEvent('onkeyup', keyup);
				targetWindow.detachEvent('onblur', reset);
			}
		}


		////////////////////
		// EVENT HANDLERS //
		////////////////////

		/**
		 * Exits all active bindings. Optionally passes an event to all binding
		 *  handlers.
		 * @param  {KeyboardEvent}	event	[Optional]
		 */
		function reset(event) {
			activeKeys = [];
			pruneMacros();
			pruneBindings(event);
		}

		/**
		 * Key down event handler.
		 * @param  {KeyboardEvent}	event
		 */
		function keydown(event) {
			var keyNames, keyName, kI;
			keyNames = getKeyName(event.keyCode);
			if(keyNames.length < 1) { return; }
			event.isRepeat = false;
			for(kI = 0; kI < keyNames.length; kI += 1) {
			    keyName = keyNames[kI];
			    if (getActiveKeys().indexOf(keyName) != -1)
			        event.isRepeat = true;
				addActiveKey(keyName);
			}
			executeMacros();
			executeBindings(event);
		}

		/**
		 * Key up event handler.
		 * @param  {KeyboardEvent} event
		 */
		function keyup(event) {
			var keyNames, kI;
			keyNames = getKeyName(event.keyCode);
			if(keyNames.length < 1) { return; }
			for(kI = 0; kI < keyNames.length; kI += 1) {
				removeActiveKey(keyNames[kI]);
			}
			pruneMacros();
			pruneBindings(event);
		}

		/**
		 * Accepts a key code and returns the key names defined by the current
		 *  locale.
		 * @param  {Number}	keyCode
		 * @return {Array}	keyNames	An array of key names defined for the key
		 *  code as defined by the current locale.
		 */
		function getKeyName(keyCode) {
			return map[keyCode] || [];
		}

		/**
		 * Accepts a key name and returns the key code defined by the current
		 *  locale.
		 * @param  {Number}	keyName
		 * @return {Number|false}
		 */
		function getKeyCode(keyName) {
			var keyCode;
			for(keyCode in map) {
				if(!map.hasOwnProperty(keyCode)) { continue; }
				if(map[keyCode].indexOf(keyName) > -1) { return keyCode; }
			}
			return false;
		}


		////////////
		// MACROS //
		////////////

		/**
		 * Accepts a key combo and an array of key names to inject once the key
		 *  combo is satisfied.
		 * @param  {String}	combo
		 * @param  {Array}	injectedKeys
		 */
		function createMacro(combo, injectedKeys) {
			if(typeof combo !== 'string' && (typeof combo !== 'object' || typeof combo.push !== 'function')) {
				throw new Error("Cannot create macro. The combo must be a string or array.");
			}
			if(typeof injectedKeys !== 'object' || typeof injectedKeys.push !== 'function') {
				throw new Error("Cannot create macro. The injectedKeys must be an array.");
			}
			macros.push([combo, injectedKeys]);
		}

		/**
		 * Accepts a key combo and clears any and all macros bound to that key
		 * combo.
		 * @param  {String} combo
		 */
		function removeMacro(combo) {
			var macro;
			if(typeof combo !== 'string' && (typeof combo !== 'object' || typeof combo.push !== 'function')) { throw new Error("Cannot remove macro. The combo must be a string or array."); }
			for(mI = 0; mI < macros.length; mI += 1) {
				macro = macros[mI];
				if(compareCombos(combo, macro[0])) {
					removeActiveKey(macro[1]);
					macros.splice(mI, 1);
					break;
				}
			}
		}

		/**
		 * Executes macros against the active keys. Each macro's key combo is
		 *  checked and if found to be satisfied, the macro's key names are injected
		 *  into active keys.
		 */
		function executeMacros() {
			var mI, combo, kI;
			for(mI = 0; mI < macros.length; mI += 1) {
				combo = parseKeyCombo(macros[mI][0]);
				if(activeMacros.indexOf(macros[mI]) === -1 && isSatisfiedCombo(combo)) {
					activeMacros.push(macros[mI]);
					for(kI = 0; kI < macros[mI][1].length; kI += 1) {
						addActiveKey(macros[mI][1][kI]);
					}
				}
			}
		}

		/**
		 * Prunes active macros. Checks each active macro's key combo and if found
		 *  to no longer to be satisfied, each of the macro's key names are removed
		 *  from active keys.
		 */
		function pruneMacros() {
			var mI, combo, kI;
			for(mI = 0; mI < activeMacros.length; mI += 1) {
				combo = parseKeyCombo(activeMacros[mI][0]);
				if(isSatisfiedCombo(combo) === false) {
					for(kI = 0; kI < activeMacros[mI][1].length; kI += 1) {
						removeActiveKey(activeMacros[mI][1][kI]);
					}
					activeMacros.splice(mI, 1);
					mI -= 1;
				}
			}
		}


		//////////////
		// BINDINGS //
		//////////////

		/**
		 * Creates a binding object, and, if provided, binds a key down hander and
		 *  a key up handler. Returns a binding object that emits keyup and
		 *  keydown events.
		 * @param  {String}		keyCombo
		 * @param  {Function}	keyDownCallback	[Optional]
		 * @param  {Function}	keyUpCallback	[Optional]
		 * @return {Object}		binding
		 */
		function createBinding(keyCombo, keyDownCallback, keyUpCallback) {
			var api = {}, binding, subBindings = [], bindingApi = {}, kI,
			subCombo;

			//break the combo down into a combo array
			if(typeof keyCombo === 'string') {
				keyCombo = parseKeyCombo(keyCombo);
			}

			//bind each sub combo contained within the combo string
			for(kI = 0; kI < keyCombo.length; kI += 1) {
				binding = {};

				//stringify the combo again
				subCombo = stringifyKeyCombo([keyCombo[kI]]);

				//validate the sub combo
				if(typeof subCombo !== 'string') { throw new Error('Failed to bind key combo. The key combo must be string.'); }

				//create the binding
				binding.keyCombo = subCombo;
				binding.keyDownCallback = [];
				binding.keyUpCallback = [];

				//inject the key down and key up callbacks if given
				if(keyDownCallback) { binding.keyDownCallback.push(keyDownCallback); }
				if(keyUpCallback) { binding.keyUpCallback.push(keyUpCallback); }

				//stash the new binding
				bindings.push(binding);
				subBindings.push(binding);
			}

			//build the binding api
			api.clear = clear;
			api.on = on;
			return api;

			/**
			 * Clears the binding
			 */
			function clear() {
				var bI;
				for(bI = 0; bI < subBindings.length; bI += 1) {
					bindings.splice(bindings.indexOf(subBindings[bI]), 1);
				}
			}

			/**
			 * Accepts an event name. and any number of callbacks. When the event is
			 *  emitted, all callbacks are executed. Available events are key up and
			 *  key down.
			 * @param  {String}	eventName
			 * @return {Object}	subBinding
			 */
			function on(eventName    ) {
				var api = {}, callbacks, cI, bI;

				//validate event name
				if(typeof eventName !== 'string') { throw new Error('Cannot bind callback. The event name must be a string.'); }
				if(eventName !== 'keyup' && eventName !== 'keydown') { throw new Error('Cannot bind callback. The event name must be a "keyup" or "keydown".'); }

				//gather the callbacks
				callbacks = Array.prototype.slice.apply(arguments, [1]);

				//stash each the new binding
				for(cI = 0; cI < callbacks.length; cI += 1) {
					if(typeof callbacks[cI] === 'function') {
						if(eventName === 'keyup') {
							for(bI = 0; bI < subBindings.length; bI += 1) {
								subBindings[bI].keyUpCallback.push(callbacks[cI]);
							}
						} else if(eventName === 'keydown') {
							for(bI = 0; bI < subBindings.length; bI += 1) {
								subBindings[bI].keyDownCallback.push(callbacks[cI]);
							}
						}
					}
				}

				//construct and return the sub binding api
				api.clear = clear;
				return api;

				/**
				 * Clears the binding
				 */
				function clear() {
					var cI, bI;
					for(cI = 0; cI < callbacks.length; cI += 1) {
						if(typeof callbacks[cI] === 'function') {
							if(eventName === 'keyup') {
								for(bI = 0; bI < subBindings.length; bI += 1) {
									subBindings[bI].keyUpCallback.splice(subBindings[bI].keyUpCallback.indexOf(callbacks[cI]), 1);
								}
							} else {
								for(bI = 0; bI < subBindings.length; bI += 1) {
									subBindings[bI].keyDownCallback.splice(subBindings[bI].keyDownCallback.indexOf(callbacks[cI]), 1);
								}
							}
						}
					}
				}
			}
		}

		/**
		 * Clears all binding attached to a given key combo. Key name order does not
		 * matter as long as the key combos equate.
		 * @param  {String}	keyCombo
		 */
		function removeBindingByKeyCombo(keyCombo) {
			var bI, binding, keyName;
			for(bI = 0; bI < bindings.length; bI += 1) {
				binding = bindings[bI];
				if(compareCombos(keyCombo, binding.keyCombo)) {
					bindings.splice(bI, 1); bI -= 1;
				}
			}
		}

		/**
		 * Clears all binding attached to key combos containing a given key name.
		 * @param  {String}	keyName
		 */
		function removeBindingByKeyName(keyName) {
			var bI, kI, binding;
			if(keyName) {
				for(bI = 0; bI < bindings.length; bI += 1) {
					binding = bindings[bI];
					for(kI = 0; kI < binding.keyCombo.length; kI += 1) {
						if(binding.keyCombo[kI].indexOf(keyName) > -1) {
							bindings.splice(bI, 1); bI -= 1;
							break;
						}
					}
				}
			} else {
				bindings = [];
			}
		}

		/**
		 * Executes bindings that are active. Only allows the keys to be used once
		 *  as to prevent binding overlap.
		 * @param  {KeyboardEvent}	event	The keyboard event.
		 */
		function executeBindings(event) {
			var bI, sBI, binding, bindingKeys, remainingKeys, cI, killEventBubble, kI, bindingKeysSatisfied,
			index, sortedBindings = [], bindingWeight;

			remainingKeys = [].concat(activeKeys);
			for(bI = 0; bI < bindings.length; bI += 1) {
				bindingWeight = extractComboKeys(bindings[bI].keyCombo).length;
				if(!sortedBindings[bindingWeight]) { sortedBindings[bindingWeight] = []; }
				sortedBindings[bindingWeight].push(bindings[bI]);
			}
			for(sBI = sortedBindings.length - 1; sBI >= 0; sBI -= 1) {
				if(!sortedBindings[sBI]) { continue; }
				for(bI = 0; bI < sortedBindings[sBI].length; bI += 1) {
					binding = sortedBindings[sBI][bI];
					bindingKeys = extractComboKeys(binding.keyCombo);
					bindingKeysSatisfied = true;
					for(kI = 0; kI < bindingKeys.length; kI += 1) {
						if(remainingKeys.indexOf(bindingKeys[kI]) === -1) {
							bindingKeysSatisfied = false;
							break;
						}
					}
					if(bindingKeysSatisfied && isSatisfiedCombo(binding.keyCombo)) {
						activeBindings.push(binding);
						for(kI = 0; kI < bindingKeys.length; kI += 1) {
							index = remainingKeys.indexOf(bindingKeys[kI]);
							if(index > -1) {
								remainingKeys.splice(index, 1);
								kI -= 1;
							}
						}
						for(cI = 0; cI < binding.keyDownCallback.length; cI += 1) {
							if (binding.keyDownCallback[cI](event, getActiveKeys(), binding.keyCombo) === false) {
								killEventBubble = true;
							}
						}
						if(killEventBubble === true) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		/**
		 * Removes bindings that are no longer satisfied by the active keys. Also
		 *  fires the key up callbacks.
		 * @param  {KeyboardEvent}	event
		 */
		function pruneBindings(event) {
			var bI, cI, binding, killEventBubble;
			for(bI = 0; bI < activeBindings.length; bI += 1) {
				binding = activeBindings[bI];
				if(isSatisfiedCombo(binding.keyCombo) === false) {
					for(cI = 0; cI < binding.keyUpCallback.length; cI += 1) {
						if (binding.keyUpCallback[cI](event, getActiveKeys(), binding.keyCombo) === false) {
							killEventBubble = true;
						}
					}
					if(killEventBubble === true) {
						event.preventDefault();
						event.stopPropagation();
					}
					activeBindings.splice(bI, 1);
					bI -= 1;
				}
			}
		}


		///////////////////
		// COMBO STRINGS //
		///////////////////

		/**
		 * Compares two key combos returning true when they are functionally
		 *  equivalent.
		 * @param  {String}	keyComboArrayA keyCombo A key combo string or array.
		 * @param  {String}	keyComboArrayB keyCombo A key combo string or array.
		 * @return {Boolean}
		 */
		function compareCombos(keyComboArrayA, keyComboArrayB) {
			var cI, sI, kI;
			keyComboArrayA = parseKeyCombo(keyComboArrayA);
			keyComboArrayB = parseKeyCombo(keyComboArrayB);
			if(keyComboArrayA.length !== keyComboArrayB.length) { return false; }
			for(cI = 0; cI < keyComboArrayA.length; cI += 1) {
				if(keyComboArrayA[cI].length !== keyComboArrayB[cI].length) { return false; }
				for(sI = 0; sI < keyComboArrayA[cI].length; sI += 1) {
					if(keyComboArrayA[cI][sI].length !== keyComboArrayB[cI][sI].length) { return false; }
					for(kI = 0; kI < keyComboArrayA[cI][sI].length; kI += 1) {
						if(keyComboArrayB[cI][sI].indexOf(keyComboArrayA[cI][sI][kI]) === -1) { return false; }
					}
				}
			}
			return true;
		}

		/**
		 * Checks to see if a key combo string or key array is satisfied by the
		 *  currently active keys. It does not take into account spent keys.
		 * @param  {String}	keyCombo	A key combo string or array.
		 * @return {Boolean}
		 */
		function isSatisfiedCombo(keyCombo) {
			var cI, sI, stage, kI, stageOffset = 0, index, comboMatches;
			keyCombo = parseKeyCombo(keyCombo);
			for(cI = 0; cI < keyCombo.length; cI += 1) {
				comboMatches = true;
				stageOffset = 0;
				for(sI = 0; sI < keyCombo[cI].length; sI += 1) {
					stage = [].concat(keyCombo[cI][sI]);
					for(kI = stageOffset; kI < activeKeys.length; kI += 1) {
						index = stage.indexOf(activeKeys[kI]);
						if(index > -1) {
							stage.splice(index, 1);
							stageOffset = kI;
						}
					}
					if(stage.length !== 0) { comboMatches = false; break; }
				}
				if(comboMatches) { return true; }
			}
			return false;
		}

		/**
		 * Accepts a key combo array or string and returns a flat array containing all keys referenced by
		 * the key combo.
		 * @param  {String}	keyCombo	A key combo string or array.
		 * @return {Array}
		 */
		function extractComboKeys(keyCombo) {
			var cI, sI, kI, keys = [];
			keyCombo = parseKeyCombo(keyCombo);
			for(cI = 0; cI < keyCombo.length; cI += 1) {
				for(sI = 0; sI < keyCombo[cI].length; sI += 1) {
					keys = keys.concat(keyCombo[cI][sI]);
				}
			}
			return keys;
		}

		/**
		 * Parses a key combo string into a 3 dimensional array.
		 * - Level 1 - sub combos.
		 * - Level 2 - combo stages. A stage is a set of key name pairs that must
		 *  be satisfied in the order they are defined.
		 * - Level 3 - each key name to the stage.
		 * @param  {String|Array}	keyCombo	A key combo string.
		 * @return {Array}
		 */
		function parseKeyCombo(keyCombo) {
			var s = keyCombo, i = 0, op = 0, ws = false, nc = false, combos = [], combo = [], stage = [], key = '';

			if(typeof keyCombo === 'object' && typeof keyCombo.push === 'function') { return keyCombo; }
			if(typeof keyCombo !== 'string') { throw new Error('Cannot parse "keyCombo" because its type is "' + (typeof keyCombo) + '". It must be a "string".'); }

			//remove leading whitespace
			while(s.charAt(i) === ' ') { i += 1; }
			while(true) {
				if(s.charAt(i) === ' ') {
					//white space & next combo op
					while(s.charAt(i) === ' ') { i += 1; }
					ws = true;
				} else if(s.charAt(i) === ',') {
					if(op || nc) { throw new Error('Failed to parse key combo. Unexpected , at character index ' + i + '.'); }
					nc = true;
					i += 1;
				} else if(s.charAt(i) === '+') {
					//next key
					if(key.length) { stage.push(key); key = ''; }
					if(op || nc) { throw new Error('Failed to parse key combo. Unexpected + at character index ' + i + '.'); }
					op = true;
					i += 1;
				} else if(s.charAt(i) === '>') {
					//next stage op
					if(key.length) { stage.push(key); key = ''; }
					if(stage.length) { combo.push(stage); stage = []; }
					if(op || nc) { throw new Error('Failed to parse key combo. Unexpected > at character index ' + i + '.'); }
					op = true;
					i += 1;
				} else if(i < s.length - 1 && s.charAt(i) === '!' && (s.charAt(i + 1) === '>' || s.charAt(i + 1) === ',' || s.charAt(i + 1) === '+')) {
					key += s.charAt(i + 1);
					op = false;
					ws = false;
					nc = false;
					i += 2;
				} else if(i < s.length && s.charAt(i) !== '+' && s.charAt(i) !== '>' && s.charAt(i) !== ',' && s.charAt(i) !== ' ') {
					//end combo
					if(op === false && ws === true || nc === true) {
						if(key.length) { stage.push(key); key = ''; }
						if(stage.length) { combo.push(stage); stage = []; }
						if(combo.length) { combos.push(combo); combo = []; }
					}
					op = false;
					ws = false;
					nc = false;
					//key
					while(i < s.length && s.charAt(i) !== '+' && s.charAt(i) !== '>' && s.charAt(i) !== ',' && s.charAt(i) !== ' ') {
						key += s.charAt(i);
						i += 1;
					}
				} else {
					//unknown char
					i += 1;
					continue;
				}
				//end of combos string
				if(i >= s.length) {
					if(key.length) { stage.push(key); key = ''; }
					if(stage.length) { combo.push(stage); stage = []; }
					if(combo.length) { combos.push(combo); combo = []; }
					break;
				}
			}
			return combos;
		}

		/**
		 * Stringifys a key combo.
		 * @param  {Array|String}	keyComboArray	A key combo array. If a key
		 *  combo string is given it will be returned.
		 * @return {String}
		 */
		function stringifyKeyCombo(keyComboArray) {
			var cI, ccI, output = [];
			if(typeof keyComboArray === 'string') { return keyComboArray; }
			if(typeof keyComboArray !== 'object' || typeof keyComboArray.push !== 'function') { throw new Error('Cannot stringify key combo.'); }
			for(cI = 0; cI < keyComboArray.length; cI += 1) {
				output[cI] = [];
				for(ccI = 0; ccI < keyComboArray[cI].length; ccI += 1) {
					output[cI][ccI] = keyComboArray[cI][ccI].join(' + ');
				}
				output[cI] = output[cI].join(' > ');
			}
			return output.join(' ');
		}


		/////////////////
		// ACTIVE KEYS //
		/////////////////

		/**
		 * Returns the a copy of the active keys array.
		 * @return {Array}
		 */
		function getActiveKeys() {
			return [].concat(activeKeys);
		}

		/**
		 * Adds a key to the active keys array, but only if it has not already been
		 *  added.
		 * @param {String}	keyName	The key name string.
		 */
		function addActiveKey(keyName) {
			if(keyName.match(/\s/)) { throw new Error('Cannot add key name ' + keyName + ' to active keys because it contains whitespace.'); }
			if(activeKeys.indexOf(keyName) > -1) { return; }
			activeKeys.push(keyName);
		}

		/**
		 * Removes a key from the active keys array.
		 * @param  {String}	keyNames	The key name string.
		 */
		function removeActiveKey(keyName) {
			var keyCode = getKeyCode(keyName);
			if(keyCode === '91' || keyCode === '92') { activeKeys = []; } //remove all key on release of super.
			else { activeKeys.splice(activeKeys.indexOf(keyName), 1); }
		}


		/////////////
		// LOCALES //
		/////////////

		/**
		 * Registers a new locale. This is useful if you would like to add support for a new keyboard layout. It could also be useful for
		 * alternative key names. For example if you program games you could create a locale for your key mappings. Instead of key 65 mapped
		 * to 'a' you could map it to 'jump'.
		 * @param  {String}	localeName	The name of the new locale.
		 * @param  {Object}	localeMap	The locale map.
		 */
		function registerLocale(localeName, localeMap) {

			//validate arguments
			if(typeof localeName !== 'string') { throw new Error('Cannot register new locale. The locale name must be a string.'); }
			if(typeof localeMap !== 'object') { throw new Error('Cannot register ' + localeName + ' locale. The locale map must be an object.'); }
			if(typeof localeMap.map !== 'object') { throw new Error('Cannot register ' + localeName + ' locale. The locale map is invalid.'); }

			//stash the locale
			if(!localeMap.macros) { localeMap.macros = []; }
			locales[localeName] = localeMap;
		}

		/**
		 * Swaps the current locale.
		 * @param  {String}	localeName	The locale to activate.
		 * @return {Object}
		 */
		function getSetLocale(localeName) {

			//if a new locale is given then set it
			if(localeName) {
				if(typeof localeName !== 'string') { throw new Error('Cannot set locale. The locale name must be a string.'); }
				if(!locales[localeName]) { throw new Error('Cannot set locale to ' + localeName + ' because it does not exist. If you would like to submit a ' + localeName + ' locale map for KeyboardJS please submit it at https://github.com/RobertWHurst/KeyboardJS/issues.'); }

				//set the current map and macros
				map = locales[localeName].map;
				macros = locales[localeName].macros;

				//set the current locale
				locale = localeName;
			}

			//return the current locale
			return locale;
		}
	});


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, __webpack_provided_window_dot_jQuery) {/*** IMPORTS FROM imports-loader ***/
	var jQuery = __webpack_require__(33);


	/*
	  简单的tab实现
	  调用：$(expr).simpleTab(options)
	  切换到指定的标签tab
	  $(expr).simpleTab('change', target); //其中target可以是索引或者命名
	  options：请参考defaultOptions

	  HTML的格式如下：
	  <div class="tab" tab>
	      <ul class="nav" data-field="nav">
	          <li class="active">menu 1</li>
	          <li>menu 1</li>
	          <li>menu 1</li>
	      </ul>
	      <div class="content" data-field="content">
	          <div>panel 1</div>
	          <div>panel 2</div>
	          <div>panel 3</div>
	      </div>
	  </div>
	 */
	var slice = [].slice,
	  indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	(function($) {
	  var SimpleTab;
	  SimpleTab = (function() {
	    function SimpleTab($container, options) {
	      var defaultOptions;
	      defaultOptions = {
	        navExpr: '[data-field="nav"]',
	        panelExpr: '[data-field="content"]',
	        eventName: 'click',
	        activeClass: 'active',
	        activePanel: null
	      };
	      this.options = $.extend(defaultOptions, options);
	      this.initElements($container);
	      this.initSelected();
	    }

	    SimpleTab.prototype.initElements = function($o) {
	      var els, ops, self;
	      self = this;
	      ops = this.options;
	      els = this.elements = {
	        menus: $o.find(ops.navExpr),
	        panels: $o.find(ops.panelExpr)
	      };
	      return els.menus.children().bind(ops.eventName, function() {
	        var $this, target;
	        $this = $(this);
	        target = $this.attr('data-value') || $this.index();
	        return self.change(target);
	      });
	    };

	    SimpleTab.prototype.initSelected = function() {
	      var $current, els;
	      if (this.options.activePanel) {
	        return this.change(this.options.activePanel);
	      }
	      els = this.elements;
	      $current = els.menus.find(">." + this.options.activeClass);
	      if ($current.length === 0) {
	        $current = els.menus.eq(0);
	      }
	      return this.change($current.index());
	    };

	    SimpleTab.prototype.change = function(target) {
	      var els, expr, index, klass, useIndex;
	      klass = this.options.activeClass;
	      els = this.elements;
	      useIndex = typeof target === 'number';
	      expr = useIndex ? ">:eq(" + target + ")" : ">[data-value='" + target + "']";
	      els.menus.find(">." + klass).removeClass(klass);
	      index = els.menus.find(expr).addClass(klass).index();
	      els.panels.find('>*').hide();
	      return els.panels.find(expr).show();
	    };

	    return SimpleTab;

	  })();
	  SimpleTab.publicMethods = ['change'];
	  return $.fn.simpleTab = function() {
	    var arg, args, instance, storeKey;
	    arg = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
	    storeKey = 'honey.tab';
	    if (typeof arg === 'string' && indexOf.call(SimpleTab.publicMethods, arg) >= 0) {
	      instance = this.data(storeKey);
	      if (!instance || !instance[arg]) {
	        return console.log('Plugin or Method not defined.');
	      }
	      return instance[arg].apply(instance, args);
	    }
	    instance = new SimpleTab(this, arg);
	    this.data(storeKey, instance);
	    return this;
	  };
	})($ || __webpack_provided_window_dot_jQuery || window.jquery);


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), __webpack_require__(33)))

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {/* =========================================================
	 * bootstrap-datetimepicker.js
	 * =========================================================
	 * Copyright 2012 Stefan Petre
	 * Improvements by Andrew Rowls
	 * Improvements by Sébastien Malot
	 * Improvements by Yun Lai
	 * Improvements by Kenneth Henderick
	 * Project URL : http://www.malot.fr/bootstrap-datetimepicker
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 * ========================================================= */

	/*
	 * Improvement by CuGBabyBeaR @ 2013-09-12
	 *
	 * Make it work in bootstrap v3
	 */

	!function ($) {

	    function elementOrParentIsFixed(element) {
	        var $element = $(element);
	        var $checkElements = $element.add($element.parents());
	        var isFixed = false;
	        $checkElements.each(function(){
	            if ($(this).css("position") === "fixed") {
	                isFixed = true;
	                return false;
	            }
	        });
	        return isFixed;
	    }

		function UTCDate() {
			return new Date(Date.UTC.apply(Date, arguments));
		}

		function UTCToday() {
			var today = new Date();
			return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate(), today.getUTCHours(), today.getUTCMinutes(), today.getUTCSeconds(), 0);
		}

		// Picker object

		var Datetimepicker = function (element, options) {
			var that = this;

			this.element = $(element);

			// add container for single page application
			// when page switch the datetimepicker div will be removed also.
			this.container = options.container || 'body';

			this.language = options.language || this.element.data('date-language') || "en";
			this.language = this.language in dates ? this.language : "en";
			this.isRTL = dates[this.language].rtl || false;
			this.formatType = options.formatType || this.element.data('format-type') || 'standard';
			this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || dates[this.language].format || DPGlobal.getDefaultFormat(this.formatType, 'input'), this.formatType);
			this.isInline = false;
			this.isVisible = false;
			this.isInput = this.element.is('input');
			this.fontAwesome = options.fontAwesome || this.element.data('font-awesome') || false;

			this.bootcssVer = options.bootcssVer || (this.isInput ? (this.element.is('.form-control') ? 3 : 2) : ( this.bootcssVer = this.element.is('.input-group') ? 3 : 2 ));

			this.component = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find('.input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-calendar, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o').parent() : this.element.find('.add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar .fa-calendar .fa-clock-o').parent()) : false;
			this.componentReset = this.element.is('.date') ? ( this.bootcssVer == 3 ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent():this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()) : false;
			this.hasInput = this.component && this.element.find('input').length;
			if (this.component && this.component.length === 0) {
				this.component = false;
			}
			this.linkField = options.linkField || this.element.data('link-field') || false;
			this.linkFormat = DPGlobal.parseFormat(options.linkFormat || this.element.data('link-format') || DPGlobal.getDefaultFormat(this.formatType, 'link'), this.formatType);
			this.minuteStep = options.minuteStep || this.element.data('minute-step') || 5;
			this.pickerPosition = options.pickerPosition || this.element.data('picker-position') || 'bottom-right';
			this.showMeridian = options.showMeridian || this.element.data('show-meridian') || false;
			this.initialDate = options.initialDate || new Date();
			this.zIndex = options.zIndex || this.element.data('z-index') || undefined;

			this.icons = {
				leftArrow: this.fontAwesome ? 'fa-arrow-left' : (this.bootcssVer === 3 ? 'glyphicon-arrow-left' : 'icon-arrow-left'),
				rightArrow: this.fontAwesome ? 'fa-arrow-right' : (this.bootcssVer === 3 ? 'glyphicon-arrow-right' : 'icon-arrow-right')
			};
			this.icontype = this.fontAwesome ? 'fa' : 'glyphicon';

			this._attachEvents();

			this.formatViewType = "datetime";
			if ('formatViewType' in options) {
				this.formatViewType = options.formatViewType;
			} else if ('formatViewType' in this.element.data()) {
				this.formatViewType = this.element.data('formatViewType');
			}

			this.minView = 0;
			if ('minView' in options) {
				this.minView = options.minView;
			} else if ('minView' in this.element.data()) {
				this.minView = this.element.data('min-view');
			}
			this.minView = DPGlobal.convertViewMode(this.minView);

			this.maxView = DPGlobal.modes.length - 1;
			if ('maxView' in options) {
				this.maxView = options.maxView;
			} else if ('maxView' in this.element.data()) {
				this.maxView = this.element.data('max-view');
			}
			this.maxView = DPGlobal.convertViewMode(this.maxView);

			this.wheelViewModeNavigation = false;
			if ('wheelViewModeNavigation' in options) {
				this.wheelViewModeNavigation = options.wheelViewModeNavigation;
			} else if ('wheelViewModeNavigation' in this.element.data()) {
				this.wheelViewModeNavigation = this.element.data('view-mode-wheel-navigation');
			}

			this.wheelViewModeNavigationInverseDirection = false;

			if ('wheelViewModeNavigationInverseDirection' in options) {
				this.wheelViewModeNavigationInverseDirection = options.wheelViewModeNavigationInverseDirection;
			} else if ('wheelViewModeNavigationInverseDirection' in this.element.data()) {
				this.wheelViewModeNavigationInverseDirection = this.element.data('view-mode-wheel-navigation-inverse-dir');
			}

			this.wheelViewModeNavigationDelay = 100;
			if ('wheelViewModeNavigationDelay' in options) {
				this.wheelViewModeNavigationDelay = options.wheelViewModeNavigationDelay;
			} else if ('wheelViewModeNavigationDelay' in this.element.data()) {
				this.wheelViewModeNavigationDelay = this.element.data('view-mode-wheel-navigation-delay');
			}

			this.startViewMode = 2;
			if ('startView' in options) {
				this.startViewMode = options.startView;
			} else if ('startView' in this.element.data()) {
				this.startViewMode = this.element.data('start-view');
			}
			this.startViewMode = DPGlobal.convertViewMode(this.startViewMode);
			this.viewMode = this.startViewMode;

			this.viewSelect = this.minView;
			if ('viewSelect' in options) {
				this.viewSelect = options.viewSelect;
			} else if ('viewSelect' in this.element.data()) {
				this.viewSelect = this.element.data('view-select');
			}
			this.viewSelect = DPGlobal.convertViewMode(this.viewSelect);

			this.forceParse = true;
			if ('forceParse' in options) {
				this.forceParse = options.forceParse;
			} else if ('dateForceParse' in this.element.data()) {
				this.forceParse = this.element.data('date-force-parse');
			}
			var template = this.bootcssVer === 3 ? DPGlobal.templateV3 : DPGlobal.template;
			while (template.indexOf('{iconType}') !== -1) {
				template = template.replace('{iconType}', this.icontype);
			}
			while (template.indexOf('{leftArrow}') !== -1) {
				template = template.replace('{leftArrow}', this.icons.leftArrow);
			}
			while (template.indexOf('{rightArrow}') !== -1) {
				template = template.replace('{rightArrow}', this.icons.rightArrow);
			}
			this.picker = $(template)
				.appendTo(this.isInline ? this.element : this.container) // 'body')
				.on({
					click:     $.proxy(this.click, this),
					mousedown: $.proxy(this.mousedown, this)
				});

			if (this.wheelViewModeNavigation) {
				if ($.fn.mousewheel) {
					this.picker.on({mousewheel: $.proxy(this.mousewheel, this)});
				} else {
					console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option");
				}
			}

			if (this.isInline) {
				this.picker.addClass('datetimepicker-inline');
			} else {
				this.picker.addClass('datetimepicker-dropdown-' + this.pickerPosition + ' dropdown-menu');
			}
			if (this.isRTL) {
				this.picker.addClass('datetimepicker-rtl');
				var selector = this.bootcssVer === 3 ? '.prev span, .next span' : '.prev i, .next i';
				this.picker.find(selector).toggleClass(this.icons.leftArrow + ' ' + this.icons.rightArrow);
			}
			$(document).on('mousedown', function (e) {
				// Clicked outside the datetimepicker, hide it
				if ($(e.target).closest('.datetimepicker').length === 0) {
					that.hide();
				}
			});

			this.autoclose = false;
			if ('autoclose' in options) {
				this.autoclose = options.autoclose;
			} else if ('dateAutoclose' in this.element.data()) {
				this.autoclose = this.element.data('date-autoclose');
			}

			this.keyboardNavigation = true;
			if ('keyboardNavigation' in options) {
				this.keyboardNavigation = options.keyboardNavigation;
			} else if ('dateKeyboardNavigation' in this.element.data()) {
				this.keyboardNavigation = this.element.data('date-keyboard-navigation');
			}

			this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
			this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);

			this.weekStart = ((options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7);
			this.weekEnd = ((this.weekStart + 6) % 7);
			this.startDate = -Infinity;
			this.endDate = Infinity;
			this.daysOfWeekDisabled = [];
			this.setStartDate(options.startDate || this.element.data('date-startdate'));
			this.setEndDate(options.endDate || this.element.data('date-enddate'));
			this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
			this.setMinutesDisabled(options.minutesDisabled || this.element.data('date-minute-disabled'));
			this.setHoursDisabled(options.hoursDisabled || this.element.data('date-hour-disabled'));
			this.fillDow();
			this.fillMonths();
			this.update();
			this.showMode();

			if (this.isInline) {
				this.show();
			}
		};

		Datetimepicker.prototype = {
			constructor: Datetimepicker,

			_events:       [],
			_attachEvents: function () {
				this._detachEvents();
				if (this.isInput) { // single input
					this._events = [
						[this.element, {
							focus:   $.proxy(this.show, this),
							keyup:   $.proxy(this.update, this),
							keydown: $.proxy(this.keydown, this)
						}]
					];
				}
				else if (this.component && this.hasInput) { // component: input + button
					this._events = [
						// For components that are not readonly, allow keyboard nav
						[this.element.find('input'), {
							focus:   $.proxy(this.show, this),
							keyup:   $.proxy(this.update, this),
							keydown: $.proxy(this.keydown, this)
						}],
						[this.component, {
							click: $.proxy(this.show, this)
						}]
					];
					if (this.componentReset) {
						this._events.push([
							this.componentReset,
							{click: $.proxy(this.reset, this)}
						]);
					}
				}
				else if (this.element.is('div')) {  // inline datetimepicker
					this.isInline = true;
				}
				else {
					this._events = [
						[this.element, {
							click: $.proxy(this.show, this)
						}]
					];
				}
				for (var i = 0, el, ev; i < this._events.length; i++) {
					el = this._events[i][0];
					ev = this._events[i][1];
					el.on(ev);
				}
			},

			_detachEvents: function () {
				for (var i = 0, el, ev; i < this._events.length; i++) {
					el = this._events[i][0];
					ev = this._events[i][1];
					el.off(ev);
				}
				this._events = [];
			},

			show: function (e) {
				this.picker.show();
				this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
				if (this.forceParse) {
					this.update();
				}
				this.place();
				$(window).on('resize', $.proxy(this.place, this));
				if (e) {
					e.stopPropagation();
					e.preventDefault();
				}
				this.isVisible = true;
				this.element.trigger({
					type: 'show',
					date: this.date
				});
			},

			hide: function (e) {
				if (!this.isVisible) return;
				if (this.isInline) return;
				this.picker.hide();
				$(window).off('resize', this.place);
				this.viewMode = this.startViewMode;
				this.showMode();
				if (!this.isInput) {
					$(document).off('mousedown', this.hide);
				}

				if (
					this.forceParse &&
						(
							this.isInput && this.element.val() ||
								this.hasInput && this.element.find('input').val()
							)
					)
					this.setValue();
				this.isVisible = false;
				this.element.trigger({
					type: 'hide',
					date: this.date
				});
			},

			remove: function () {
				this._detachEvents();
				this.picker.remove();
				delete this.picker;
				delete this.element.data().datetimepicker;
			},

			getDate: function () {
				var d = this.getUTCDate();
				return new Date(d.getTime() + (d.getTimezoneOffset() * 60000));
			},

			getUTCDate: function () {
				return this.date;
			},

			setDate: function (d) {
				this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)));
			},

			setUTCDate: function (d) {
				if (d >= this.startDate && d <= this.endDate) {
					this.date = d;
					this.setValue();
					this.viewDate = this.date;
					this.fill();
				} else {
					this.element.trigger({
						type:      'outOfRange',
						date:      d,
						startDate: this.startDate,
						endDate:   this.endDate
					});
				}
			},

			setFormat: function (format) {
				this.format = DPGlobal.parseFormat(format, this.formatType);
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component) {
					element = this.element.find('input');
				}
				if (element && element.val()) {
					this.setValue();
				}
			},

			setValue: function () {
				var formatted = this.getFormattedDate();
				if (!this.isInput) {
					if (this.component) {
						this.element.find('input').val(formatted);
					}
					this.element.data('date', formatted);
				} else {
					this.element.val(formatted);
				}
				if (this.linkField) {
					$('#' + this.linkField).val(this.getFormattedDate(this.linkFormat));
				}
			},

			getFormattedDate: function (format) {
				if (format == undefined) format = this.format;
				return DPGlobal.formatDate(this.date, format, this.language, this.formatType);
			},

			setStartDate: function (startDate) {
				this.startDate = startDate || -Infinity;
				if (this.startDate !== -Infinity) {
					this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language, this.formatType);
				}
				this.update();
				this.updateNavArrows();
			},

			setEndDate: function (endDate) {
				this.endDate = endDate || Infinity;
				if (this.endDate !== Infinity) {
					this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language, this.formatType);
				}
				this.update();
				this.updateNavArrows();
			},

			setDaysOfWeekDisabled: function (daysOfWeekDisabled) {
				this.daysOfWeekDisabled = daysOfWeekDisabled || [];
				if (!$.isArray(this.daysOfWeekDisabled)) {
					this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/);
				}
				this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function (d) {
					return parseInt(d, 10);
				});
				this.update();
				this.updateNavArrows();
			},

			setMinutesDisabled: function (minutesDisabled) {
				this.minutesDisabled = minutesDisabled || [];
				if (!$.isArray(this.minutesDisabled)) {
					this.minutesDisabled = this.minutesDisabled.split(/,\s*/);
				}
				this.minutesDisabled = $.map(this.minutesDisabled, function (d) {
					return parseInt(d, 10);
				});
				this.update();
				this.updateNavArrows();
			},

			setHoursDisabled: function (hoursDisabled) {
				this.hoursDisabled = hoursDisabled || [];
				if (!$.isArray(this.hoursDisabled)) {
					this.hoursDisabled = this.hoursDisabled.split(/,\s*/);
				}
				this.hoursDisabled = $.map(this.hoursDisabled, function (d) {
					return parseInt(d, 10);
				});
				this.update();
				this.updateNavArrows();
			},

			place: function () {
				if (this.isInline) return;

				if (!this.zIndex) {
					var index_highest = 0;
					$('div').each(function () {
						var index_current = parseInt($(this).css("zIndex"), 10);
						if (index_current > index_highest) {
							index_highest = index_current;
						}
					});
					this.zIndex = index_highest + 10;
				}

				var offset, top, left, containerOffset;
				if (this.container instanceof $) {
					containerOffset = this.container.offset();
				} else {
					containerOffset = $(this.container).offset();
				}

				if (this.component) {
					offset = this.component.offset();
					left = offset.left;
					if (this.pickerPosition == 'bottom-left' || this.pickerPosition == 'top-left') {
						left += this.component.outerWidth() - this.picker.outerWidth();
					}
				} else {
					offset = this.element.offset();
					left = offset.left;
				}

				if(left+220 > document.body.clientWidth){
	            			left = document.body.clientWidth-220;
	          		}

				if (this.pickerPosition == 'top-left' || this.pickerPosition == 'top-right') {
					top = offset.top - this.picker.outerHeight();
				} else {
					top = offset.top + this.height;
				}

				top = top - containerOffset.top;
				left = left - containerOffset.left;

	            if( !elementOrParentIsFixed(this.element) ){
				    top = top + document.body.scrollTop;
	            }

				this.picker.css({
					top:    top,
					left:   left,
					zIndex: this.zIndex
				});
			},

			update: function () {
				var date, fromArgs = false;
				if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
					date = arguments[0];
					fromArgs = true;
				} else {
					date = (this.isInput ? this.element.val() : this.element.find('input').val()) || this.element.data('date') || this.initialDate;
					if (typeof date == 'string' || date instanceof String) {
					  date = date.replace(/^\s+|\s+$/g,'');
					}
				}

				if (!date) {
					date = new Date();
					fromArgs = false;
				}

				this.date = DPGlobal.parseDate(date, this.format, this.language, this.formatType);

				if (fromArgs) this.setValue();

				if (this.date < this.startDate) {
					this.viewDate = new Date(this.startDate);
				} else if (this.date > this.endDate) {
					this.viewDate = new Date(this.endDate);
				} else {
					this.viewDate = new Date(this.date);
				}
				this.fill();
			},

			fillDow: function () {
				var dowCnt = this.weekStart,
					html = '<tr>';
				while (dowCnt < this.weekStart + 7) {
					html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>';
				}
				html += '</tr>';
				this.picker.find('.datetimepicker-days thead').append(html);
			},

			fillMonths: function () {
				var html = '',
					i = 0;
				while (i < 12) {
					html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>';
				}
				this.picker.find('.datetimepicker-months td').html(html);
			},

			fill: function () {
				if (this.date == null || this.viewDate == null) {
					return;
				}
				var d = new Date(this.viewDate),
					year = d.getUTCFullYear(),
					month = d.getUTCMonth(),
					dayMonth = d.getUTCDate(),
					hours = d.getUTCHours(),
					minutes = d.getUTCMinutes(),
					startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
					startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() + 1 : -Infinity,
					endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
					endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() + 1 : Infinity,
					currentDate = (new UTCDate(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate())).valueOf(),
					today = new Date();
				this.picker.find('.datetimepicker-days thead th:eq(1)')
					.text(dates[this.language].months[month] + ' ' + year);
				if (this.formatViewType == "time") {
					var formatted = this.getFormattedDate();
					this.picker.find('.datetimepicker-hours thead th:eq(1)').text(formatted);
					this.picker.find('.datetimepicker-minutes thead th:eq(1)').text(formatted);
				} else {
					this.picker.find('.datetimepicker-hours thead th:eq(1)')
						.text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
					this.picker.find('.datetimepicker-minutes thead th:eq(1)')
						.text(dayMonth + ' ' + dates[this.language].months[month] + ' ' + year);
				}
				this.picker.find('tfoot th.today')
					.text(dates[this.language].today)
					.toggle(this.todayBtn !== false);
				this.updateNavArrows();
				this.fillMonths();
				/*var prevMonth = UTCDate(year, month, 0,0,0,0,0);
				 prevMonth.setUTCDate(prevMonth.getDate() - (prevMonth.getUTCDay() - this.weekStart + 7)%7);*/
				var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
					day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
				prevMonth.setUTCDate(day);
				prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
				var nextMonth = new Date(prevMonth);
				nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
				nextMonth = nextMonth.valueOf();
				var html = [];
				var clsName;
				while (prevMonth.valueOf() < nextMonth) {
					if (prevMonth.getUTCDay() == this.weekStart) {
						html.push('<tr>');
					}
					clsName = '';
					if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
						clsName += ' old';
					} else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
						clsName += ' new';
					}
					// Compare internal UTC date with local today, not UTC today
					if (this.todayHighlight &&
						prevMonth.getUTCFullYear() == today.getFullYear() &&
						prevMonth.getUTCMonth() == today.getMonth() &&
						prevMonth.getUTCDate() == today.getDate()) {
						clsName += ' today';
					}
					if (prevMonth.valueOf() == currentDate) {
						clsName += ' active';
					}
					if ((prevMonth.valueOf() + 86400000) <= this.startDate || prevMonth.valueOf() > this.endDate ||
						$.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
						clsName += ' disabled';
					}
					html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
					if (prevMonth.getUTCDay() == this.weekEnd) {
						html.push('</tr>');
					}
					prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
				}
				this.picker.find('.datetimepicker-days tbody').empty().append(html.join(''));

				html = [];
				var txt = '', meridian = '', meridianOld = '';
				var hoursDisabled = this.hoursDisabled || [];
				for (var i = 0; i < 24; i++) {
					if (hoursDisabled.indexOf(i) !== -1) continue;
					var actual = UTCDate(year, month, dayMonth, i);
					clsName = '';
					// We want the previous hour for the startDate
					if ((actual.valueOf() + 3600000) <= this.startDate || actual.valueOf() > this.endDate) {
						clsName += ' disabled';
					} else if (hours == i) {
						clsName += ' active';
					}
					if (this.showMeridian && dates[this.language].meridiem.length == 2) {
						meridian = (i < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
						if (meridian != meridianOld) {
							if (meridianOld != '') {
								html.push('</fieldset>');
							}
							html.push('<fieldset class="hour"><legend>' + meridian.toUpperCase() + '</legend>');
						}
						meridianOld = meridian;
						txt = (i % 12 ? i % 12 : 12);
						html.push('<span class="hour' + clsName + ' hour_' + (i < 12 ? 'am' : 'pm') + '">' + txt + '</span>');
						if (i == 23) {
							html.push('</fieldset>');
						}
					} else {
						txt = i + ':00';
						html.push('<span class="hour' + clsName + '">' + txt + '</span>');
					}
				}
				this.picker.find('.datetimepicker-hours td').html(html.join(''));

				html = [];
				txt = '', meridian = '', meridianOld = '';
				var minutesDisabled = this.minutesDisabled || [];
				for (var i = 0; i < 60; i += this.minuteStep) {
					if (minutesDisabled.indexOf(i) !== -1) continue;
					var actual = UTCDate(year, month, dayMonth, hours, i, 0);
					clsName = '';
					if (actual.valueOf() < this.startDate || actual.valueOf() > this.endDate) {
						clsName += ' disabled';
					} else if (Math.floor(minutes / this.minuteStep) == Math.floor(i / this.minuteStep)) {
						clsName += ' active';
					}
					if (this.showMeridian && dates[this.language].meridiem.length == 2) {
						meridian = (hours < 12 ? dates[this.language].meridiem[0] : dates[this.language].meridiem[1]);
						if (meridian != meridianOld) {
							if (meridianOld != '') {
								html.push('</fieldset>');
							}
							html.push('<fieldset class="minute"><legend>' + meridian.toUpperCase() + '</legend>');
						}
						meridianOld = meridian;
						txt = (hours % 12 ? hours % 12 : 12);
						//html.push('<span class="minute'+clsName+' minute_'+(hours<12?'am':'pm')+'">'+txt+'</span>');
						html.push('<span class="minute' + clsName + '">' + txt + ':' + (i < 10 ? '0' + i : i) + '</span>');
						if (i == 59) {
							html.push('</fieldset>');
						}
					} else {
						txt = i + ':00';
						//html.push('<span class="hour'+clsName+'">'+txt+'</span>');
						html.push('<span class="minute' + clsName + '">' + hours + ':' + (i < 10 ? '0' + i : i) + '</span>');
					}
				}
				this.picker.find('.datetimepicker-minutes td').html(html.join(''));

				var currentYear = this.date.getUTCFullYear();
				var months = this.picker.find('.datetimepicker-months')
					.find('th:eq(1)')
					.text(year)
					.end()
					.find('span').removeClass('active');
				if (currentYear == year) {
					// getUTCMonths() returns 0 based, and we need to select the next one
	                // To cater bootstrap 2 we don't need to select the next one
	                var offset = months.length - 12;
					months.eq(this.date.getUTCMonth() + offset).addClass('active');
				}
				if (year < startYear || year > endYear) {
					months.addClass('disabled');
				}
				if (year == startYear) {
					months.slice(0, startMonth + 1).addClass('disabled');
				}
				if (year == endYear) {
					months.slice(endMonth).addClass('disabled');
				}

				html = '';
				year = parseInt(year / 10, 10) * 10;
				var yearCont = this.picker.find('.datetimepicker-years')
					.find('th:eq(1)')
					.text(year + '-' + (year + 9))
					.end()
					.find('td');
				year -= 1;
				for (var i = -1; i < 11; i++) {
					html += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
					year += 1;
				}
				yearCont.html(html);
				this.place();
			},

			updateNavArrows: function () {
				var d = new Date(this.viewDate),
					year = d.getUTCFullYear(),
					month = d.getUTCMonth(),
					day = d.getUTCDate(),
					hour = d.getUTCHours();
				switch (this.viewMode) {
					case 0:
						if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
							&& month <= this.startDate.getUTCMonth()
							&& day <= this.startDate.getUTCDate()
							&& hour <= this.startDate.getUTCHours()) {
							this.picker.find('.prev').css({visibility: 'hidden'});
						} else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
							&& month >= this.endDate.getUTCMonth()
							&& day >= this.endDate.getUTCDate()
							&& hour >= this.endDate.getUTCHours()) {
							this.picker.find('.next').css({visibility: 'hidden'});
						} else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
					case 1:
						if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
							&& month <= this.startDate.getUTCMonth()
							&& day <= this.startDate.getUTCDate()) {
							this.picker.find('.prev').css({visibility: 'hidden'});
						} else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
							&& month >= this.endDate.getUTCMonth()
							&& day >= this.endDate.getUTCDate()) {
							this.picker.find('.next').css({visibility: 'hidden'});
						} else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
					case 2:
						if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()
							&& month <= this.startDate.getUTCMonth()) {
							this.picker.find('.prev').css({visibility: 'hidden'});
						} else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()
							&& month >= this.endDate.getUTCMonth()) {
							this.picker.find('.next').css({visibility: 'hidden'});
						} else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
					case 3:
					case 4:
						if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
							this.picker.find('.prev').css({visibility: 'hidden'});
						} else {
							this.picker.find('.prev').css({visibility: 'visible'});
						}
						if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
							this.picker.find('.next').css({visibility: 'hidden'});
						} else {
							this.picker.find('.next').css({visibility: 'visible'});
						}
						break;
				}
			},

			mousewheel: function (e) {

				e.preventDefault();
				e.stopPropagation();

				if (this.wheelPause) {
					return;
				}

				this.wheelPause = true;

				var originalEvent = e.originalEvent;

				var delta = originalEvent.wheelDelta;

				var mode = delta > 0 ? 1 : (delta === 0) ? 0 : -1;

				if (this.wheelViewModeNavigationInverseDirection) {
					mode = -mode;
				}

				this.showMode(mode);

				setTimeout($.proxy(function () {

					this.wheelPause = false

				}, this), this.wheelViewModeNavigationDelay);

			},

			click: function (e) {
				e.stopPropagation();
				e.preventDefault();
				var target = $(e.target).closest('span, td, th, legend');
				if (target.is('.' + this.icontype)) {
					target = $(target).parent().closest('span, td, th, legend');
				}
				if (target.length == 1) {
					if (target.is('.disabled')) {
						this.element.trigger({
							type:      'outOfRange',
							date:      this.viewDate,
							startDate: this.startDate,
							endDate:   this.endDate
						});
						return;
					}
					switch (target[0].nodeName.toLowerCase()) {
						case 'th':
							switch (target[0].className) {
								case 'switch':
									this.showMode(1);
									break;
								case 'prev':
								case 'next':
									var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
									switch (this.viewMode) {
										case 0:
											this.viewDate = this.moveHour(this.viewDate, dir);
											break;
										case 1:
											this.viewDate = this.moveDate(this.viewDate, dir);
											break;
										case 2:
											this.viewDate = this.moveMonth(this.viewDate, dir);
											break;
										case 3:
										case 4:
											this.viewDate = this.moveYear(this.viewDate, dir);
											break;
									}
									this.fill();
									this.element.trigger({
										type:      target[0].className + ':' + this.convertViewModeText(this.viewMode),
										date:      this.viewDate,
										startDate: this.startDate,
										endDate:   this.endDate
									});
									break;
								case 'today':
									var date = new Date();
									date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);

									// Respect startDate and endDate.
									if (date < this.startDate) date = this.startDate;
									else if (date > this.endDate) date = this.endDate;

									this.viewMode = this.startViewMode;
									this.showMode(0);
									this._setDate(date);
									this.fill();
									if (this.autoclose) {
										this.hide();
									}
									break;
							}
							break;
						case 'span':
							if (!target.is('.disabled')) {
								var year = this.viewDate.getUTCFullYear(),
									month = this.viewDate.getUTCMonth(),
									day = this.viewDate.getUTCDate(),
									hours = this.viewDate.getUTCHours(),
									minutes = this.viewDate.getUTCMinutes(),
									seconds = this.viewDate.getUTCSeconds();

								if (target.is('.month')) {
									this.viewDate.setUTCDate(1);
									month = target.parent().find('span').index(target);
									day = this.viewDate.getUTCDate();
									this.viewDate.setUTCMonth(month);
									this.element.trigger({
										type: 'changeMonth',
										date: this.viewDate
									});
									if (this.viewSelect >= 3) {
										this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
									}
								} else if (target.is('.year')) {
									this.viewDate.setUTCDate(1);
									year = parseInt(target.text(), 10) || 0;
									this.viewDate.setUTCFullYear(year);
									this.element.trigger({
										type: 'changeYear',
										date: this.viewDate
									});
									if (this.viewSelect >= 4) {
										this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
									}
								} else if (target.is('.hour')) {
									hours = parseInt(target.text(), 10) || 0;
									if (target.hasClass('hour_am') || target.hasClass('hour_pm')) {
										if (hours == 12 && target.hasClass('hour_am')) {
											hours = 0;
										} else if (hours != 12 && target.hasClass('hour_pm')) {
											hours += 12;
										}
									}
									this.viewDate.setUTCHours(hours);
									this.element.trigger({
										type: 'changeHour',
										date: this.viewDate
									});
									if (this.viewSelect >= 1) {
										this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
									}
								} else if (target.is('.minute')) {
									minutes = parseInt(target.text().substr(target.text().indexOf(':') + 1), 10) || 0;
									this.viewDate.setUTCMinutes(minutes);
									this.element.trigger({
										type: 'changeMinute',
										date: this.viewDate
									});
									if (this.viewSelect >= 0) {
										this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
									}
								}
								if (this.viewMode != 0) {
									var oldViewMode = this.viewMode;
									this.showMode(-1);
									this.fill();
									if (oldViewMode == this.viewMode && this.autoclose) {
										this.hide();
									}
								} else {
									this.fill();
									if (this.autoclose) {
										this.hide();
									}
								}
							}
							break;
						case 'td':
							if (target.is('.day') && !target.is('.disabled')) {
								var day = parseInt(target.text(), 10) || 1;
								var year = this.viewDate.getUTCFullYear(),
									month = this.viewDate.getUTCMonth(),
									hours = this.viewDate.getUTCHours(),
									minutes = this.viewDate.getUTCMinutes(),
									seconds = this.viewDate.getUTCSeconds();
								if (target.is('.old')) {
									if (month === 0) {
										month = 11;
										year -= 1;
									} else {
										month -= 1;
									}
								} else if (target.is('.new')) {
									if (month == 11) {
										month = 0;
										year += 1;
									} else {
										month += 1;
									}
								}
								this.viewDate.setUTCFullYear(year);
								this.viewDate.setUTCMonth(month, day);
								this.element.trigger({
									type: 'changeDay',
									date: this.viewDate
								});
								if (this.viewSelect >= 2) {
									this._setDate(UTCDate(year, month, day, hours, minutes, seconds, 0));
								}
							}
							var oldViewMode = this.viewMode;
							this.showMode(-1);
							this.fill();
							if (oldViewMode == this.viewMode && this.autoclose) {
								this.hide();
							}
							break;
					}
				}
			},

			_setDate: function (date, which) {
				if (!which || which == 'date')
					this.date = date;
				if (!which || which == 'view')
					this.viewDate = date;
				this.fill();
				this.setValue();
				var element;
				if (this.isInput) {
					element = this.element;
				} else if (this.component) {
					element = this.element.find('input');
				}
				if (element) {
					element.change();
					if (this.autoclose && (!which || which == 'date')) {
						//this.hide();
					}
				}
				this.element.trigger({
					type: 'changeDate',
					date: this.date
				});
				if(date == null)
					this.date = this.viewDate;
			},

			moveMinute: function (date, dir) {
				if (!dir) return date;
				var new_date = new Date(date.valueOf());
				//dir = dir > 0 ? 1 : -1;
				new_date.setUTCMinutes(new_date.getUTCMinutes() + (dir * this.minuteStep));
				return new_date;
			},

			moveHour: function (date, dir) {
				if (!dir) return date;
				var new_date = new Date(date.valueOf());
				//dir = dir > 0 ? 1 : -1;
				new_date.setUTCHours(new_date.getUTCHours() + dir);
				return new_date;
			},

			moveDate: function (date, dir) {
				if (!dir) return date;
				var new_date = new Date(date.valueOf());
				//dir = dir > 0 ? 1 : -1;
				new_date.setUTCDate(new_date.getUTCDate() + dir);
				return new_date;
			},

			moveMonth: function (date, dir) {
				if (!dir) return date;
				var new_date = new Date(date.valueOf()),
					day = new_date.getUTCDate(),
					month = new_date.getUTCMonth(),
					mag = Math.abs(dir),
					new_month, test;
				dir = dir > 0 ? 1 : -1;
				if (mag == 1) {
					test = dir == -1
						// If going back one month, make sure month is not current month
						// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
						? function () {
						return new_date.getUTCMonth() == month;
					}
						// If going forward one month, make sure month is as expected
						// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
						: function () {
						return new_date.getUTCMonth() != new_month;
					};
					new_month = month + dir;
					new_date.setUTCMonth(new_month);
					// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
					if (new_month < 0 || new_month > 11)
						new_month = (new_month + 12) % 12;
				} else {
					// For magnitudes >1, move one month at a time...
					for (var i = 0; i < mag; i++)
						// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
						new_date = this.moveMonth(new_date, dir);
					// ...then reset the day, keeping it in the new month
					new_month = new_date.getUTCMonth();
					new_date.setUTCDate(day);
					test = function () {
						return new_month != new_date.getUTCMonth();
					};
				}
				// Common date-resetting loop -- if date is beyond end of month, make it
				// end of month
				while (test()) {
					new_date.setUTCDate(--day);
					new_date.setUTCMonth(new_month);
				}
				return new_date;
			},

			moveYear: function (date, dir) {
				return this.moveMonth(date, dir * 12);
			},

			dateWithinRange: function (date) {
				return date >= this.startDate && date <= this.endDate;
			},

			keydown: function (e) {
				if (this.picker.is(':not(:visible)')) {
					if (e.keyCode == 27) // allow escape to hide and re-show picker
						this.show();
					return;
				}
				var dateChanged = false,
					dir, day, month,
					newDate, newViewDate;
				switch (e.keyCode) {
					case 27: // escape
						this.hide();
						e.preventDefault();
						break;
					case 37: // left
					case 39: // right
						if (!this.keyboardNavigation) break;
						dir = e.keyCode == 37 ? -1 : 1;
						viewMode = this.viewMode;
						if (e.ctrlKey) {
							viewMode += 2;
						} else if (e.shiftKey) {
							viewMode += 1;
						}
						if (viewMode == 4) {
							newDate = this.moveYear(this.date, dir);
							newViewDate = this.moveYear(this.viewDate, dir);
						} else if (viewMode == 3) {
							newDate = this.moveMonth(this.date, dir);
							newViewDate = this.moveMonth(this.viewDate, dir);
						} else if (viewMode == 2) {
							newDate = this.moveDate(this.date, dir);
							newViewDate = this.moveDate(this.viewDate, dir);
						} else if (viewMode == 1) {
							newDate = this.moveHour(this.date, dir);
							newViewDate = this.moveHour(this.viewDate, dir);
						} else if (viewMode == 0) {
							newDate = this.moveMinute(this.date, dir);
							newViewDate = this.moveMinute(this.viewDate, dir);
						}
						if (this.dateWithinRange(newDate)) {
							this.date = newDate;
							this.viewDate = newViewDate;
							this.setValue();
							this.update();
							e.preventDefault();
							dateChanged = true;
						}
						break;
					case 38: // up
					case 40: // down
						if (!this.keyboardNavigation) break;
						dir = e.keyCode == 38 ? -1 : 1;
						viewMode = this.viewMode;
						if (e.ctrlKey) {
							viewMode += 2;
						} else if (e.shiftKey) {
							viewMode += 1;
						}
						if (viewMode == 4) {
							newDate = this.moveYear(this.date, dir);
							newViewDate = this.moveYear(this.viewDate, dir);
						} else if (viewMode == 3) {
							newDate = this.moveMonth(this.date, dir);
							newViewDate = this.moveMonth(this.viewDate, dir);
						} else if (viewMode == 2) {
							newDate = this.moveDate(this.date, dir * 7);
							newViewDate = this.moveDate(this.viewDate, dir * 7);
						} else if (viewMode == 1) {
							if (this.showMeridian) {
								newDate = this.moveHour(this.date, dir * 6);
								newViewDate = this.moveHour(this.viewDate, dir * 6);
							} else {
								newDate = this.moveHour(this.date, dir * 4);
								newViewDate = this.moveHour(this.viewDate, dir * 4);
							}
						} else if (viewMode == 0) {
							newDate = this.moveMinute(this.date, dir * 4);
							newViewDate = this.moveMinute(this.viewDate, dir * 4);
						}
						if (this.dateWithinRange(newDate)) {
							this.date = newDate;
							this.viewDate = newViewDate;
							this.setValue();
							this.update();
							e.preventDefault();
							dateChanged = true;
						}
						break;
					case 13: // enter
						if (this.viewMode != 0) {
							var oldViewMode = this.viewMode;
							this.showMode(-1);
							this.fill();
							if (oldViewMode == this.viewMode && this.autoclose) {
								this.hide();
							}
						} else {
							this.fill();
							if (this.autoclose) {
								this.hide();
							}
						}
						e.preventDefault();
						break;
					case 9: // tab
						this.hide();
						break;
				}
				if (dateChanged) {
					var element;
					if (this.isInput) {
						element = this.element;
					} else if (this.component) {
						element = this.element.find('input');
					}
					if (element) {
						element.change();
					}
					this.element.trigger({
						type: 'changeDate',
						date: this.date
					});
				}
			},

			showMode: function (dir) {
				if (dir) {
					var newViewMode = Math.max(0, Math.min(DPGlobal.modes.length - 1, this.viewMode + dir));
					if (newViewMode >= this.minView && newViewMode <= this.maxView) {
						this.element.trigger({
							type:        'changeMode',
							date:        this.viewDate,
							oldViewMode: this.viewMode,
							newViewMode: newViewMode
						});

						this.viewMode = newViewMode;
					}
				}
				/*
				 vitalets: fixing bug of very special conditions:
				 jquery 1.7.1 + webkit + show inline datetimepicker in bootstrap popover.
				 Method show() does not set display css correctly and datetimepicker is not shown.
				 Changed to .css('display', 'block') solve the problem.
				 See https://github.com/vitalets/x-editable/issues/37

				 In jquery 1.7.2+ everything works fine.
				 */
				//this.picker.find('>div').hide().filter('.datetimepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
				this.picker.find('>div').hide().filter('.datetimepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
				this.updateNavArrows();
			},

			reset: function (e) {
				this._setDate(null, 'date');
			},

			convertViewModeText:  function (viewMode) {
				switch (viewMode) {
					case 4:
						return 'decade';
					case 3:
						return 'year';
					case 2:
						return 'month';
					case 1:
						return 'day';
					case 0:
						return 'hour';
				}
			}
		};

		var old = $.fn.datetimepicker;
		$.fn.datetimepicker = function (option) {
			var args = Array.apply(null, arguments);
			args.shift();
			var internal_return;
			this.each(function () {
				var $this = $(this),
					data = $this.data('datetimepicker'),
					options = typeof option == 'object' && option;
				if (!data) {
					$this.data('datetimepicker', (data = new Datetimepicker(this, $.extend({}, $.fn.datetimepicker.defaults, options))));
				}
				if (typeof option == 'string' && typeof data[option] == 'function') {
					internal_return = data[option].apply(data, args);
					if (internal_return !== undefined) {
						return false;
					}
				}
			});
			if (internal_return !== undefined)
				return internal_return;
			else
				return this;
		};

		$.fn.datetimepicker.defaults = {
		};
		$.fn.datetimepicker.Constructor = Datetimepicker;
		var dates = $.fn.datetimepicker.dates = {
			en: {
				days:        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
				daysShort:   ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
				daysMin:     ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
				months:      ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				meridiem:    ["am", "pm"],
				suffix:      ["st", "nd", "rd", "th"],
				today:       "Today"
			}
		};

		var DPGlobal = {
			modes:            [
				{
					clsName: 'minutes',
					navFnc:  'Hours',
					navStep: 1
				},
				{
					clsName: 'hours',
					navFnc:  'Date',
					navStep: 1
				},
				{
					clsName: 'days',
					navFnc:  'Month',
					navStep: 1
				},
				{
					clsName: 'months',
					navFnc:  'FullYear',
					navStep: 1
				},
				{
					clsName: 'years',
					navFnc:  'FullYear',
					navStep: 10
				}
			],
			isLeapYear:       function (year) {
				return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
			},
			getDaysInMonth:   function (year, month) {
				return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
			},
			getDefaultFormat: function (type, field) {
				if (type == "standard") {
					if (field == 'input')
						return 'yyyy-mm-dd hh:ii';
					else
						return 'yyyy-mm-dd hh:ii:ss';
				} else if (type == "php") {
					if (field == 'input')
						return 'Y-m-d H:i';
					else
						return 'Y-m-d H:i:s';
				} else {
					throw new Error("Invalid format type.");
				}
			},
			validParts:       function (type) {
				if (type == "standard") {
					return /hh?|HH?|p|P|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
				} else if (type == "php") {
					return /[dDjlNwzFmMnStyYaABgGhHis]/g;
				} else {
					throw new Error("Invalid format type.");
				}
			},
			nonpunctuation:   /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
			parseFormat:      function (format, type) {
				// IE treats \0 as a string end in inputs (truncating the value),
				// so it's a bad format delimiter, anyway
				var separators = format.replace(this.validParts(type), '\0').split('\0'),
					parts = format.match(this.validParts(type));
				if (!separators || !separators.length || !parts || parts.length == 0) {
					throw new Error("Invalid date format.");
				}
				return {separators: separators, parts: parts};
			},
			parseDate:        function (date, format, language, type) {
				if (date instanceof Date) {
					var dateUTC = new Date(date.valueOf() - date.getTimezoneOffset() * 60000);
					dateUTC.setMilliseconds(0);
					return dateUTC;
				}
				if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(date)) {
					format = this.parseFormat('yyyy-mm-dd', type);
				}
				if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(date)) {
					format = this.parseFormat('yyyy-mm-dd hh:ii', type);
				}
				if (/^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(date)) {
					format = this.parseFormat('yyyy-mm-dd hh:ii:ss', type);
				}
				if (/^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(date)) {
					var part_re = /([-+]\d+)([dmwy])/,
						parts = date.match(/([-+]\d+)([dmwy])/g),
						part, dir;
					date = new Date();
					for (var i = 0; i < parts.length; i++) {
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						switch (part[2]) {
							case 'd':
								date.setUTCDate(date.getUTCDate() + dir);
								break;
							case 'm':
								date = Datetimepicker.prototype.moveMonth.call(Datetimepicker.prototype, date, dir);
								break;
							case 'w':
								date.setUTCDate(date.getUTCDate() + dir * 7);
								break;
							case 'y':
								date = Datetimepicker.prototype.moveYear.call(Datetimepicker.prototype, date, dir);
								break;
						}
					}
					return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), 0);
				}
				var parts = date && date.toString().match(this.nonpunctuation) || [],
					date = new Date(0, 0, 0, 0, 0, 0, 0),
					parsed = {},
					setters_order = ['hh', 'h', 'ii', 'i', 'ss', 's', 'yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'D', 'DD', 'd', 'dd', 'H', 'HH', 'p', 'P'],
					setters_map = {
						hh:   function (d, v) {
							return d.setUTCHours(v);
						},
						h:    function (d, v) {
							return d.setUTCHours(v);
						},
						HH:   function (d, v) {
							return d.setUTCHours(v == 12 ? 0 : v);
						},
						H:    function (d, v) {
							return d.setUTCHours(v == 12 ? 0 : v);
						},
						ii:   function (d, v) {
							return d.setUTCMinutes(v);
						},
						i:    function (d, v) {
							return d.setUTCMinutes(v);
						},
						ss:   function (d, v) {
							return d.setUTCSeconds(v);
						},
						s:    function (d, v) {
							return d.setUTCSeconds(v);
						},
						yyyy: function (d, v) {
							return d.setUTCFullYear(v);
						},
						yy:   function (d, v) {
							return d.setUTCFullYear(2000 + v);
						},
						m:    function (d, v) {
							v -= 1;
							while (v < 0) v += 12;
							v %= 12;
							d.setUTCMonth(v);
							while (d.getUTCMonth() != v)
								if (isNaN(d.getUTCMonth()))
									return d;
								else
									d.setUTCDate(d.getUTCDate() - 1);
							return d;
						},
						d:    function (d, v) {
							return d.setUTCDate(v);
						},
						p:    function (d, v) {
							return d.setUTCHours(v == 1 ? d.getUTCHours() + 12 : d.getUTCHours());
						}
					},
					val, filtered, part;
				setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
				setters_map['dd'] = setters_map['d'];
				setters_map['P'] = setters_map['p'];
				date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
				if (parts.length == format.parts.length) {
					for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
						val = parseInt(parts[i], 10);
						part = format.parts[i];
						if (isNaN(val)) {
							switch (part) {
								case 'MM':
									filtered = $(dates[language].months).filter(function () {
										var m = this.slice(0, parts[i].length),
											p = parts[i].slice(0, m.length);
										return m == p;
									});
									val = $.inArray(filtered[0], dates[language].months) + 1;
									break;
								case 'M':
									filtered = $(dates[language].monthsShort).filter(function () {
										var m = this.slice(0, parts[i].length),
											p = parts[i].slice(0, m.length);
										return m.toLowerCase() == p.toLowerCase();
									});
									val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
									break;
								case 'p':
								case 'P':
									val = $.inArray(parts[i].toLowerCase(), dates[language].meridiem);
									break;
							}
						}
						parsed[part] = val;
					}
					for (var i = 0, s; i < setters_order.length; i++) {
						s = setters_order[i];
						if (s in parsed && !isNaN(parsed[s]))
							setters_map[s](date, parsed[s])
					}
				}
				return date;
			},
			formatDate:       function (date, format, language, type) {
				if (date == null) {
					return '';
				}
				var val;
				if (type == 'standard') {
					val = {
						// year
						yy:   date.getUTCFullYear().toString().substring(2),
						yyyy: date.getUTCFullYear(),
						// month
						m:    date.getUTCMonth() + 1,
						M:    dates[language].monthsShort[date.getUTCMonth()],
						MM:   dates[language].months[date.getUTCMonth()],
						// day
						d:    date.getUTCDate(),
						D:    dates[language].daysShort[date.getUTCDay()],
						DD:   dates[language].days[date.getUTCDay()],
						p:    (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
						// hour
						h:    date.getUTCHours(),
						// minute
						i:    date.getUTCMinutes(),
						// second
						s:    date.getUTCSeconds()
					};

					if (dates[language].meridiem.length == 2) {
						val.H = (val.h % 12 == 0 ? 12 : val.h % 12);
					}
					else {
						val.H = val.h;
					}
					val.HH = (val.H < 10 ? '0' : '') + val.H;
					val.P = val.p.toUpperCase();
					val.hh = (val.h < 10 ? '0' : '') + val.h;
					val.ii = (val.i < 10 ? '0' : '') + val.i;
					val.ss = (val.s < 10 ? '0' : '') + val.s;
					val.dd = (val.d < 10 ? '0' : '') + val.d;
					val.mm = (val.m < 10 ? '0' : '') + val.m;
				} else if (type == 'php') {
					// php format
					val = {
						// year
						y: date.getUTCFullYear().toString().substring(2),
						Y: date.getUTCFullYear(),
						// month
						F: dates[language].months[date.getUTCMonth()],
						M: dates[language].monthsShort[date.getUTCMonth()],
						n: date.getUTCMonth() + 1,
						t: DPGlobal.getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth()),
						// day
						j: date.getUTCDate(),
						l: dates[language].days[date.getUTCDay()],
						D: dates[language].daysShort[date.getUTCDay()],
						w: date.getUTCDay(), // 0 -> 6
						N: (date.getUTCDay() == 0 ? 7 : date.getUTCDay()),       // 1 -> 7
						S: (date.getUTCDate() % 10 <= dates[language].suffix.length ? dates[language].suffix[date.getUTCDate() % 10 - 1] : ''),
						// hour
						a: (dates[language].meridiem.length == 2 ? dates[language].meridiem[date.getUTCHours() < 12 ? 0 : 1] : ''),
						g: (date.getUTCHours() % 12 == 0 ? 12 : date.getUTCHours() % 12),
						G: date.getUTCHours(),
						// minute
						i: date.getUTCMinutes(),
						// second
						s: date.getUTCSeconds()
					};
					val.m = (val.n < 10 ? '0' : '') + val.n;
					val.d = (val.j < 10 ? '0' : '') + val.j;
					val.A = val.a.toString().toUpperCase();
					val.h = (val.g < 10 ? '0' : '') + val.g;
					val.H = (val.G < 10 ? '0' : '') + val.G;
					val.i = (val.i < 10 ? '0' : '') + val.i;
					val.s = (val.s < 10 ? '0' : '') + val.s;
				} else {
					throw new Error("Invalid format type.");
				}
				var date = [],
					seps = $.extend([], format.separators);
				for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
					if (seps.length) {
						date.push(seps.shift());
					}
					date.push(val[format.parts[i]]);
				}
				if (seps.length) {
					date.push(seps.shift());
				}
				return date.join('');
			},
			convertViewMode:  function (viewMode) {
				switch (viewMode) {
					case 4:
					case 'decade':
						viewMode = 4;
						break;
					case 3:
					case 'year':
						viewMode = 3;
						break;
					case 2:
					case 'month':
						viewMode = 2;
						break;
					case 1:
					case 'day':
						viewMode = 1;
						break;
					case 0:
					case 'hour':
						viewMode = 0;
						break;
				}

				return viewMode;
			},
			headTemplate:     '<thead>' +
								  '<tr>' +
								  '<th class="prev"><i class="{iconType} {leftArrow}"/></th>' +
								  '<th colspan="5" class="switch"></th>' +
								  '<th class="next"><i class="{iconType} {rightArrow}"/></th>' +
								  '</tr>' +
				'</thead>',
			headTemplateV3:   '<thead>' +
								  '<tr>' +
								  '<th class="prev"><span class="{iconType} {leftArrow}"></span> </th>' +
								  '<th colspan="5" class="switch"></th>' +
								  '<th class="next"><span class="{iconType} {rightArrow}"></span> </th>' +
								  '</tr>' +
				'</thead>',
			contTemplate:     '<tbody><tr><td colspan="7"></td></tr></tbody>',
			footTemplate:     '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
		};
		DPGlobal.template = '<div class="datetimepicker">' +
			'<div class="datetimepicker-minutes">' +
			'<table class=" table-condensed">' +
			DPGlobal.headTemplate +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-hours">' +
			'<table class=" table-condensed">' +
			DPGlobal.headTemplate +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-days">' +
			'<table class=" table-condensed">' +
			DPGlobal.headTemplate +
			'<tbody></tbody>' +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-months">' +
			'<table class="table-condensed">' +
			DPGlobal.headTemplate +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-years">' +
			'<table class="table-condensed">' +
			DPGlobal.headTemplate +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'</div>';
		DPGlobal.templateV3 = '<div class="datetimepicker">' +
			'<div class="datetimepicker-minutes">' +
			'<table class=" table-condensed">' +
			DPGlobal.headTemplateV3 +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-hours">' +
			'<table class=" table-condensed">' +
			DPGlobal.headTemplateV3 +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-days">' +
			'<table class=" table-condensed">' +
			DPGlobal.headTemplateV3 +
			'<tbody></tbody>' +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-months">' +
			'<table class="table-condensed">' +
			DPGlobal.headTemplateV3 +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'<div class="datetimepicker-years">' +
			'<table class="table-condensed">' +
			DPGlobal.headTemplateV3 +
			DPGlobal.contTemplate +
			DPGlobal.footTemplate +
			'</table>' +
			'</div>' +
			'</div>';
		$.fn.datetimepicker.DPGlobal = DPGlobal;

		/* DATETIMEPICKER NO CONFLICT
		 * =================== */

		$.fn.datetimepicker.noConflict = function () {
			$.fn.datetimepicker = old;
			return this;
		};

		/* DATETIMEPICKER DATA-API
		 * ================== */

		$(document).on(
			'focus.datetimepicker.data-api click.datetimepicker.data-api',
			'[data-provide="datetimepicker"]',
			function (e) {
				var $this = $(this);
				if ($this.data('datetimepicker')) return;
				e.preventDefault();
				// component click requires us to explicitly show it
				$this.datetimepicker('show');
			}
		);
		$(function () {
			$('[data-provide="datetimepicker-inline"]').datetimepicker();
		});

	}(__webpack_provided_window_dot_jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(43), __webpack_require__(115)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _, _tmplGlobal) {
	  return _module.directiveModule.directive('gitListEditor', [
	    'NOTIFY', function(NOTIFY) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {
	          bean: '=',
	          maxCount: '@',
	          expression: '@'
	        },
	        template: _utils.extractTemplate('#tmpl-global-git-list', _tmplGlobal),
	        link: function(scope, element, attrs) {
	          var addGitAccount, bindDataForInput, maxCount, nowEditingIndex, testExpr, updateGitAccount;
	          testExpr = new RegExp(scope.expression);
	          maxCount = parseInt(scope.maxCount);
	          nowEditingIndex = -1;
	          addGitAccount = function(account) {
	            if (scope.gitAccounts.length >= maxCount) {
	              return;
	            }
	            scope.gitAccounts.push(account);
	            return updateGitAccount();
	          };
	          updateGitAccount = function(account) {
	            if (account == null) {
	              account = [];
	            }
	            return scope.bean.setGits(scope.gitAccounts.concat(account));
	          };
	          bindDataForInput = function(value) {
	            return $(element).find("input").val(value);
	          };
	          scope.$on('gitList:load', function(e, data) {
	            scope.currentText = "";
	            scope.gitAccounts = data || [];
	            return updateGitAccount();
	          });
	          scope.onKeypressAdd = function(event) {
	            var account;
	            if (event.keyCode !== 13) {
	              return;
	            }
	            event.preventDefault();
	            account = _utils.trim(event.currentTarget.value);
	            if (account === '') {
	              return;
	            }
	            if (!testExpr.test(account)) {
	              return NOTIFY.error('您输入的内容不合法');
	            }
	            if (_.indexOf(scope.gitAccounts, account) > -1) {
	              bindDataForInput('');
	              return;
	            }
	            if (nowEditingIndex === -1) {
	              addGitAccount(account);
	            } else {
	              scope.gitAccounts[nowEditingIndex] = account;
	            }
	            bindDataForInput('');
	            nowEditingIndex = -1;
	          };
	          scope.onKeyupAddLastItem = function(event) {
	            var account;
	            if (event.keyCode === 13) {
	              return;
	            }
	            if (nowEditingIndex !== -1) {
	              return;
	            }
	            account = _utils.trim(event.currentTarget.value);
	            if (account === '') {
	              return updateGitAccount();
	            }
	            if (!testExpr.test(account)) {
	              return updateGitAccount();
	            }
	            return updateGitAccount(account);
	          };
	          scope.onClickRemove = function(event, index) {
	            scope.gitAccounts.splice(index, 1);
	            nowEditingIndex = -1;
	            updateGitAccount();
	          };
	          return scope.onClickEdit = function(event, index, account) {
	            nowEditingIndex = index;
	            bindDataForInput(account);
	          };
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {'use strict';
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils) {
	  return _module.directiveModule.directive('dropdown', [
	    '$rootScope', function($rootScope) {
	      return {
	        restrict: 'A',
	        replace: true,
	        link: function(scope, element, attrs) {
	          var $menus, $self, $text, exclude, setText;
	          $self = $(element);
	          $menus = $self.find('div.dropdown');
	          $text = $self.find(attrs.textContainer);
	          exclude = (attrs.excludeValue || '').split(',');
	          scope.$on('dropdown:show', function(event, source) {
	            if (source === element) {
	              return;
	            }
	            return $menus.fadeOut();
	          });
	          setText = function(text) {
	            text = _utils.formatString(attrs.formatter || '{0}', text);
	            return $text.text(text);
	          };
	          $menus.bind('mouseleave', function() {
	            return $menus.fadeOut();
	          });
	          $self.bind('click', function(e) {
	            $menus.fadeIn();
	            e.stopPropagation();
	            $rootScope.$broadcast('dropdown:show', element);
	            return $('body').one('click', function() {
	              return $menus.fadeOut();
	            });
	          });
	          attrs.$observe('selected', function() {
	            var $current;
	            if (!scope.items) {
	              return;
	            }
	            if (attrs.selected) {
	              $current = $menus.find("a[data-value='" + attrs.selected + "']");
	              return setText($current.text());
	            } else {
	              return setText(attrs.empty || "");
	            }
	          });
	          return $menus.bind('click', function(e) {
	            var $parent, $this, value;
	            e.stopPropagation();
	            $this = $(e.target);
	            $parent = $this.closest('a');
	            $menus.fadeOut();
	            value = $parent.attr('data-value');
	            if (!value) {
	              return;
	            }
	            scope.$emit('dropdown:selected', attrs.name, value);
	            if (_.indexOf(exclude, value) === -1) {
	              return setText($parent.text());
	            }
	          });
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($, Simditor) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(122), __webpack_require__(123), __webpack_require__(83), __webpack_require__(127), __webpack_require__(126), __webpack_require__(125), __webpack_require__(124)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_module, _utils, _simditor) {
	  return _module.directiveModule.directive('editor', [
	    '$location', '$timeout', 'STORE', 'EDITORSTORE', function($location, $timeout, STORE, EDITORSTORE) {
	      return {
	        restrict: 'E',
	        replace: true,
	        scope: {},
	        template: __webpack_require__(128),
	        link: function(scope, element, attrs) {
	          var currentUUID, ensureEditor, getCache, getCacheKey, ref, removeCache, setCache, simditor;
	          simditor = null;
	          currentUUID = null;
	          ensureEditor = function(uploadUrl, cb) {
	            var options;
	            if (simditor) {
	              return cb(simditor);
	            }
	            options = {
	              textarea: $(element).find('textarea'),
	              pasteImage: true,
	              params: {},
	              upload: {
	                params: {
	                  host: ($location.protocol()) + "://" + ($location.host()) + ":" + ($location.port())
	                },
	                url: uploadUrl,
	                connectionCount: 3,
	                leaveConfirm: '正在上传文件，如果离开上传会自动取消'
	              },
	              tabIndent: true,
	              toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'color', 'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'hr', 'indent', 'outdent', 'marked', 'fullscreen'],
	              toolbarFloat: false,
	              pasteImage: true,
	              maxImageHeight: 2000,
	              maxImageWidth: 2000,
	              mention: {
	                items: STORE.projectMemberList.data,
	                nameKey: "realname"
	              }
	            };
	            simditor = new Simditor(options);
	            simditor.on('valuechanged', function(e, src) {
	              var content;
	              content = e.currentTarget.getValue();
	              return setCache(attrs.name, currentUUID, content, true);
	            });
	            return cb(simditor);
	          };
	          getCacheKey = function(name, uuid) {
	            return name + "_" + uuid;
	          };
	          getCache = function(key) {
	            return EDITORSTORE.get(key);
	          };
	          setCache = function(name, uuid, content, auto) {
	            return EDITORSTORE.set(getCacheKey(name, uuid), content, auto);
	          };
	          removeCache = function(name, uuid) {
	            return EDITORSTORE.remove(getCacheKey(name, uuid));
	          };
	          scope.showAlwaysTop = (ref = attrs.showAlwaysTop) === true || ref === 'true';
	          scope.$on('editor:content', function($event, name, uuid, content, uploadUrl) {
	            if (attrs.name && attrs.name !== name) {
	              return;
	            }
	            currentUUID = uuid;
	            return ensureEditor(uploadUrl, function() {
	              if (!content) {
	                return;
	              }
	              simditor.setValue(content);
	            });
	          });
	          scope.$on('editor:will:cancel', function(event, name) {
	            if (attrs.name !== name || !simditor) {
	              return;
	            }
	            setCache(attrs.name, currentUUID, simditor.getValue());
	            return scope.$emit('editor:cancel', attrs.name);
	          });
	          scope.onClickCancel = function() {
	            simditor.setValue('');
	            return scope.$emit('editor:cancel', attrs.name);
	          };
	          scope.onClickSubmit = function() {
	            var data;
	            if (!simditor) {
	              return;
	            }
	            data = {
	              content: simditor.getValue(),
	              always_top: scope.always_top
	            };
	            simditor.setValue('');
	            return scope.$emit('editor:submit', attrs.name, data);
	          };
	          scope.backList = EDITORSTORE.list();
	          scope.onClickChoose = function(key) {
	            return simditor.setValue(getCache(key));
	          };
	          return scope.onClickBack = function() {
	            var key;
	            key = getCacheKey(attrs.name, currentUUID);
	            return simditor.setValue(getCache(key));
	          };
	        }
	      };
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33), __webpack_require__(122)))

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33),__webpack_require__(123),__webpack_require__(124),__webpack_require__(125)], __WEBPACK_AMD_DEFINE_RESULT__ = function(c,d,e,f){return a.Simditor=b(c,d,e,f)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=b(require("jquery"),require("simple-module"),require("simple-hotkeys"),require("simple-uploader")):a.Simditor=b(jQuery,SimpleModule,simple.hotkeys,simple.uploader)}(this,function(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J=function(a,b){function c(){this.constructor=a}for(var d in b)K.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},K={}.hasOwnProperty,L=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},M=[].slice;return y=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.pluginName="Selection",c.prototype._init=function(){return this.editor=this._module,this.sel=document.getSelection()},c.prototype.clear=function(){var a;try{return this.sel.removeAllRanges()}catch(b){a=b}},c.prototype.getRange=function(){return this.editor.inputManager.focused&&this.sel.rangeCount?this.sel.getRangeAt(0):null},c.prototype.selectRange=function(a){return this.clear(),this.sel.addRange(a),this.editor.inputManager.focused||!this.editor.util.browser.firefox&&!this.editor.util.browser.msie||this.editor.body.focus(),a},c.prototype.rangeAtEndOf=function(b,c){var d,e,f;return null==c&&(c=this.getRange()),null!=c&&c.collapsed?(b=a(b)[0],d=c.endContainer,e=this.editor.util.getNodeLength(d),c.endOffset===e-1&&a(d).contents().last().is("br")||c.endOffset===e?b===d?!0:a.contains(b,d)?(f=!0,a(d).parentsUntil(b).addBack().each(function(){return function(b,c){var d,e;return e=a(c).parent().contents().filter(function(){return!(this!==c&&3===this.nodeType&&!this.nodeValue)}),d=e.last(),d.get(0)===c||d.is("br")&&d.prev().get(0)===c?void 0:(f=!1,!1)}}(this)),f):!1:!1):void 0},c.prototype.rangeAtStartOf=function(b,c){var d,e;return null==c&&(c=this.getRange()),null!=c&&c.collapsed?(b=a(b)[0],e=c.startContainer,0!==c.startOffset?!1:b===e?!0:a.contains(b,e)?(d=!0,a(e).parentsUntil(b).addBack().each(function(){return function(b,c){var e;return e=a(c).parent().contents().filter(function(){return!(this!==c&&3===this.nodeType&&!this.nodeValue)}),e.first().get(0)!==c?d=!1:void 0}}(this)),d):!1):void 0},c.prototype.insertNode=function(b,c){return null==c&&(c=this.getRange()),null!=c?(b=a(b)[0],c.insertNode(b),this.setRangeAfter(b,c)):void 0},c.prototype.setRangeAfter=function(b,c){return null==c&&(c=this.getRange()),null!=c?(b=a(b)[0],c.setEndAfter(b),c.collapse(!1),this.selectRange(c)):void 0},c.prototype.setRangeBefore=function(b,c){return null==c&&(c=this.getRange()),null!=c?(b=a(b)[0],c.setEndBefore(b),c.collapse(!1),this.selectRange(c)):void 0},c.prototype.setRangeAtStartOf=function(b,c){return null==c&&(c=this.getRange()),b=a(b).get(0),c.setEnd(b,0),c.collapse(!1),this.selectRange(c)},c.prototype.setRangeAtEndOf=function(b,c){var d,e,f,g,h,i;return null==c&&(c=this.getRange()),e=a(b),b=e.get(0),e.is("pre")?(f=e.contents(),f.length>0?(g=f.last(),h=g.text(),"\n"===h.charAt(h.length-1)?c.setEnd(g[0],this.editor.util.getNodeLength(g[0])-1):c.setEnd(g[0],this.editor.util.getNodeLength(g[0]))):c.setEnd(b,0)):(i=this.editor.util.getNodeLength(b),3!==b.nodeType&&i>0&&(d=a(b).contents().last(),d.is("br")?i-=1:3!==d[0].nodeType&&this.editor.util.isEmptyNode(d)&&(d.append(this.editor.util.phBr),b=d[0],i=0)),c.setEnd(b,i)),c.collapse(!1),this.selectRange(c)},c.prototype.deleteRangeContents=function(a){var b,c;return null==a&&(a=this.getRange()),c=a.cloneRange(),b=a.cloneRange(),c.collapse(!0),b.collapse(!1),!a.collapsed&&this.rangeAtStartOf(this.editor.body,c)&&this.rangeAtEndOf(this.editor.body,b)?(this.editor.body.empty(),a.setStart(this.editor.body[0],0),a.collapse(!0),this.selectRange(a)):a.deleteContents(),a},c.prototype.breakBlockEl=function(b,c){var d;return null==c&&(c=this.getRange()),d=a(b),c.collapsed?(c.setStartBefore(d.get(0)),c.collapsed?d:d.before(c.extractContents())):d},c.prototype.save=function(b){var c,d,e;return null==b&&(b=this.getRange()),this._selectionSaved?void 0:(d=b.cloneRange(),d.collapse(!1),e=a("<span/>").addClass("simditor-caret-start"),c=a("<span/>").addClass("simditor-caret-end"),d.insertNode(c[0]),b.insertNode(e[0]),this.clear(),this._selectionSaved=!0)},c.prototype.restore=function(){var a,b,c,d,e,f,g;return this._selectionSaved?(e=this.editor.body.find(".simditor-caret-start"),a=this.editor.body.find(".simditor-caret-end"),e.length&&a.length?(f=e.parent(),g=f.contents().index(e),b=a.parent(),c=b.contents().index(a),f[0]===b[0]&&(c-=1),d=document.createRange(),d.setStart(f.get(0),g),d.setEnd(b.get(0),c),e.remove(),a.remove(),this.selectRange(d)):(e.remove(),a.remove()),this._selectionSaved=!1,d):!1},c}(b),k=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.pluginName="Formatter",c.prototype.opts={allowedTags:null,allowedAttributes:null},c.prototype._init=function(){return this.editor=this._module,this._allowedTags=this.opts.allowedTags||["br","a","img","b","strong","i","u","font","p","ul","ol","li","blockquote","pre","h1","h2","h3","h4","hr"],this._allowedAttributes=this.opts.allowedAttributes||{img:["src","alt","width","height","data-image-src","data-image-size","data-image-name","data-non-image"],a:["href","target"],font:["color"],pre:["data-lang","class"],p:["data-indent"],h1:["data-indent"],h2:["data-indent"],h3:["data-indent"],h4:["data-indent"]},this.editor.body.on("click","a",function(){return function(){return!1}}(this))},c.prototype.decorate=function(a){return null==a&&(a=this.editor.body),this.editor.trigger("decorate",[a])},c.prototype.undecorate=function(b){return null==b&&(b=this.editor.body.clone()),this.editor.trigger("undecorate",[b]),a.trim(b.html())},c.prototype.autolink=function(b){var c,d,e,f,g,h,i,j,k,l,m;for(null==b&&(b=this.editor.body),h=[],d=function(c){return c.contents().each(function(c,e){var f,g;return f=a(e),f.is("a")||f.closest("a, pre",b).length?void 0:f.contents().length?d(f):(g=f.text())&&/https?:\/\/|www\./gi.test(g)?h.push(f):void 0})},d(b),j=/(https?:\/\/|www\.)[\w\-\.\?&=\/#%:,@\!\+]+/gi,e=0,g=h.length;g>e;e++){for(c=h[e],l=c.text(),k=[],i=null,f=0;null!==(i=j.exec(l));)k.push(document.createTextNode(l.substring(f,i.index))),f=j.lastIndex,m=/^(http(s)?:\/\/|\/)/.test(i[0])?i[0]:"http://"+i[0],k.push(a('<a href="'+m+'" rel="nofollow"></a>').text(i[0])[0]);k.push(document.createTextNode(l.substring(f))),c.replaceWith(a(k))}return b},c.prototype.format=function(b){var c,d,e,f,g,h,i,j,k,l;if(null==b&&(b=this.editor.body),b.is(":empty"))return b.append("<p>"+this.editor.util.phBr+"</p>"),b;for(k=b.contents(),e=0,g=k.length;g>e;e++)i=k[e],this.cleanNode(i,!0);for(l=b.contents(),f=0,h=l.length;h>f;f++)j=l[f],c=a(j),c.is("br")?("undefined"!=typeof d&&null!==d&&(d=null),c.remove()):this.editor.util.isBlockNode(j)?c.is("li")?d&&d.is("ul, ol")?d.append(j):(d=a("<ul/>").insertBefore(j),d.append(j)):d=null:((!d||d.is("ul, ol"))&&(d=a("<p/>").insertBefore(j)),d.append(j));return b},c.prototype.cleanNode=function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;if(e=a(b),e.length>0){if(3===e[0].nodeType)return s=e.text().replace(/(\r\n|\n|\r)/gm,""),void(s?(t=document.createTextNode(s),e.replaceWith(t)):e.remove());if(j=e.contents(),k=e.is('[class^="simditor-"]'),e.is(this._allowedTags.join(","))||k){if(e.is("a")&&(d=e.find("img")).length>0&&(e.replaceWith(d),e=d,j=null),e.is("img")&&e.hasClass("uploading")&&e.remove(),!k)for(h=this._allowedAttributes[e[0].tagName.toLowerCase()],q=a.makeArray(e[0].attributes),l=0,n=q.length;n>l;l++)i=q[l],null!=h&&(r=i.name,L.call(h,r)>=0)||e.removeAttr(i.name)}else 1!==e[0].nodeType||e.is(":empty")?(e.remove(),j=null):e.is("div, article, dl, header, footer, tr")?(e.append("<br/>"),j.first().unwrap()):e.is("table")?(f=a("<p/>"),e.find("tr").each(function(){return function(b,c){return f.append(a(c).text()+"<br/>")}}(this)),e.replaceWith(f),j=null):e.is("thead, tfoot")?(e.remove(),j=null):e.is("th")?(g=a("<td/>").append(e.contents()),e.replaceWith(g)):j.first().unwrap();if(c&&null!=j&&!e.is("pre"))for(m=0,o=j.length;o>m;m++)p=j[m],this.cleanNode(p,!0);return null}},c.prototype.clearHtml=function(b,c){var d,e,f;return null==c&&(c=!0),d=a("<div/>").append(b),e=d.contents(),f="",e.each(function(b){return function(d,g){var h,i;return 3===g.nodeType?f+=g.nodeValue:1===g.nodeType&&(h=a(g),i=h.contents(),i.length>0&&(f+=b.clearHtml(i)),c&&d<e.length-1&&h.is("br, p, div, li, tr, pre, address, artticle, aside, dl, figcaption, footer, h1, h2, h3, h4, header"))?f+="\n":void 0}}(this)),f},c.prototype.beautify=function(b){var c;return c=function(a){return!!(a.is("p")&&!a.text()&&a.children(":not(br)").length<1)},b.each(function(){return function(b,d){var e;return e=a(d),e.is(':not(img, br, col, td, hr, [class^="simditor-"]):empty')&&e.remove(),c(e)&&e.remove(),e.find(':not(img, br, col, td, hr, [class^="simditor-"]):empty').remove()}}(this))},c}(b),p=function(b){function d(){return d.__super__.constructor.apply(this,arguments)}return J(d,b),d.pluginName="InputManager",d.prototype.opts={pasteImage:!1},d.prototype._modifierKeys=[16,17,18,91,93,224],d.prototype._arrowKeys=[37,38,39,40],d.prototype._init=function(){var b;return this.editor=this._module,this.throttledTrigger=this.editor.util.throttle(function(a){return function(){var b;return b=1<=arguments.length?M.call(arguments,0):[],setTimeout(function(){var c;return(c=a.editor).trigger.apply(c,b)},10)}}(this),300),this.opts.pasteImage&&"string"!=typeof this.opts.pasteImage&&(this.opts.pasteImage="inline"),this._keystrokeHandlers={},this.hotkeys=c({el:this.editor.body}),this._pasteArea=a("<div/>").css({width:"1px",height:"1px",overflow:"hidden",position:"fixed",right:"0",bottom:"100px"}).attr({tabIndex:"-1",contentEditable:!0}).addClass("simditor-paste-area").appendTo(this.editor.el),a(document).on("selectionchange.simditor"+this.editor.id,function(a){return function(){return a.focused?(a._selectionTimer&&(clearTimeout(a._selectionTimer),a._selectionTimer=null),a._selectionTimer=setTimeout(function(){return a.editor.trigger("selectionchanged")},20)):void 0}}(this)),this.editor.on("valuechanged",function(b){return function(){return!b.editor.util.closestBlockEl()&&b.focused&&(b.editor.selection.save(),b.editor.formatter.format(),b.editor.selection.restore()),b.editor.body.find("hr, pre, .simditor-table").each(function(c,d){var e,f;return e=a(d),(e.parent().is("blockquote")||e.parent()[0]===b.editor.body[0])&&(f=!1,0===e.next().length&&(a("<p/>").append(b.editor.util.phBr).insertAfter(e),f=!0),0===e.prev().length&&(a("<p/>").append(b.editor.util.phBr).insertBefore(e),f=!0),f)?setTimeout(function(){return b.editor.trigger("valuechanged")},10):void 0}),b.editor.body.find("pre:empty").append(b.editor.util.phBr),!b.editor.util.support.onselectionchange&&b.focused?b.editor.trigger("selectionchanged"):void 0}}(this)),this.editor.on("selectionchanged",function(a){return function(){return a.editor.undoManager.update()}}(this)),this.editor.body.on("keydown",a.proxy(this._onKeyDown,this)).on("keypress",a.proxy(this._onKeyPress,this)).on("keyup",a.proxy(this._onKeyUp,this)).on("mouseup",a.proxy(this._onMouseUp,this)).on("focus",a.proxy(this._onFocus,this)).on("blur",a.proxy(this._onBlur,this)).on("paste",a.proxy(this._onPaste,this)).on("drop",a.proxy(this._onDrop,this)).on("input",a.proxy(this._onInput,this)),this.editor.util.browser.firefox&&(this.addShortcut("cmd+left",function(a){return function(b){return b.preventDefault(),a.editor.selection.sel.modify("move","backward","lineboundary"),!1}}(this)),this.addShortcut("cmd+right",function(a){return function(b){return b.preventDefault(),a.editor.selection.sel.modify("move","forward","lineboundary"),!1}}(this)),this.addShortcut("cmd+a",function(a){return function(){var b,c,d,e;return b=a.editor.body.children(),b.length>0?(c=b.first().get(0),d=b.last().get(0),e=document.createRange(),e.setStart(c,0),e.setEnd(d,a.editor.util.getNodeLength(d)),a.editor.selection.selectRange(e),!1):void 0}}(this))),b=this.editor.util.os.mac?"cmd+enter":"ctrl+enter",this.addShortcut(b,function(a){return function(){return a.editor.el.closest("form").find("button:submit").click(),!1}}(this)),this.editor.textarea.attr("autofocus")?setTimeout(function(a){return function(){return a.editor.focus()}}(this),0):void 0},d.prototype._onFocus=function(){return this.editor.el.addClass("focus").removeClass("error"),this.focused=!0,this.lastCaretPosition=null,setTimeout(function(a){return function(){return a.editor.triggerHandler("focus"),a.editor.trigger("selectionchanged")}}(this),0)},d.prototype._onBlur=function(){var a;return this.editor.el.removeClass("focus"),this.editor.sync(),this.focused=!1,this.lastCaretPosition=null!=(a=this.editor.undoManager.currentState())?a.caret:void 0,this.editor.triggerHandler("blur")},d.prototype._onMouseUp=function(){return this.editor.util.support.onselectionchange?void 0:setTimeout(function(a){return function(){return a.editor.trigger("selectionchanged")}}(this),0)},d.prototype._onKeyDown=function(b){var c,d,e,f;if(this.editor.triggerHandler(b)===!1)return!1;if(!this.hotkeys.respondTo(b)){if(b.which in this._keystrokeHandlers){if(f="function"==typeof(c=this._keystrokeHandlers[b.which])["*"]?c["*"](b):void 0)return this.editor.trigger("valuechanged"),!1;if(this.editor.util.traverseUp(function(c){return function(d){var e,g;if(d.nodeType===document.ELEMENT_NODE)return e=null!=(g=c._keystrokeHandlers[b.which])?g[d.tagName.toLowerCase()]:void 0,f="function"==typeof e?e(b,a(d)):void 0,f===!0||f===!1?!1:void 0}}(this)),f)return this.editor.trigger("valuechanged"),!1}if(d=b.which,!(L.call(this._modifierKeys,d)>=0||(e=b.which,L.call(this._arrowKeys,e)>=0)||this.editor.util.metaKey(b)&&86===b.which))return this.editor.util.support.oninput||this.throttledTrigger("valuechanged",["typing"]),null}},d.prototype._onKeyPress=function(a){return this.editor.triggerHandler(a)===!1?!1:void 0},d.prototype._onKeyUp=function(b){var c,d;return this.editor.triggerHandler(b)===!1?!1:!this.editor.util.support.onselectionchange&&(d=b.which,L.call(this._arrowKeys,d)>=0)?void this.editor.trigger("selectionchanged"):void(8!==b.which&&46!==b.which||!this.editor.util.isEmptyNode(this.editor.body)||(this.editor.body.empty(),c=a("<p/>").append(this.editor.util.phBr).appendTo(this.editor.body),this.editor.selection.setRangeAtStartOf(c)))},d.prototype._onPaste=function(b){var c,d,e,f,g,h,i,j,k;if(this.editor.triggerHandler(b)===!1)return!1;if(i=this.editor.selection.deleteRangeContents(),i.collapsed||i.collapse(!0),c=this.editor.util.closestBlockEl(),d=c.is("pre, table"),b.originalEvent.clipboardData&&b.originalEvent.clipboardData.items&&b.originalEvent.clipboardData.items.length>0&&(g=b.originalEvent.clipboardData.items[0],/^image\//.test(g.type)&&!d)){if(e=g.getAsFile(),null==e||!this.opts.pasteImage)return;return e.name||(e.name="Clipboard Image.png"),k={},k[this.opts.pasteImage]=!0,null!=(j=this.editor.uploader)&&j.upload(e,k),!1}return h=function(b){return function(e){var f,g,h,j,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B;if(b.editor.triggerHandler("pasting",[e])!==!1&&e){if(d)if(c.is("table")){for(v=e.split("\n"),o=v.pop(),l=0,p=v.length;p>l;l++)u=v[l],b.editor.selection.insertNode(document.createTextNode(u)),b.editor.selection.insertNode(a("<br/>"));b.editor.selection.insertNode(document.createTextNode(o))}else for(e=a("<div/>").text(e),z=e.contents(),m=0,q=z.length;q>m;m++)x=z[m],b.editor.selection.insertNode(a(x)[0],i);else if(c.is(b.editor.body))for(n=0,r=e.length;r>n;n++)x=e[n],b.editor.selection.insertNode(x,i);else{if(e.length<1)return;if(1===e.length)if(e.is("p")){if(h=e.contents(),1===h.length&&h.is("img")){if(f=h,/^data:image/.test(f.attr("src"))){if(!b.opts.pasteImage)return;return g=b.editor.util.dataURLtoBlob(f.attr("src")),g.name="Clipboard Image.png",k={},k[b.opts.pasteImage]=!0,void(null!=(A=b.editor.uploader)&&A.upload(g,k))}if(f.is('img[src^="webkit-fake-url://"]'))return}for(w=0,s=h.length;s>w;w++)x=h[w],b.editor.selection.insertNode(x,i)}else if(c.is("p")&&b.editor.util.isEmptyNode(c))c.replaceWith(e),b.editor.selection.setRangeAtEndOf(e,i);else if(e.is("ul, ol"))if(1===e.find("li").length)for(e=a("<div/>").text(e.text()),B=e.contents(),y=0,t=B.length;t>y;y++)x=B[y],b.editor.selection.insertNode(a(x)[0],i);else c.is("li")?(c.parent().after(e),b.editor.selection.setRangeAtEndOf(e,i)):(c.after(e),b.editor.selection.setRangeAtEndOf(e,i));else c.after(e),b.editor.selection.setRangeAtEndOf(e,i);else c.is("li")&&(c=c.parent()),b.editor.selection.rangeAtStartOf(c,i)?j="before":b.editor.selection.rangeAtEndOf(c,i)?j="after":(b.editor.selection.breakBlockEl(c,i),j="before"),c[j](e),b.editor.selection.setRangeAtEndOf(e.last(),i)}return b.editor.trigger("valuechanged")}}}(this),d?(b.preventDefault(),f=this.editor.util.browser.msie?window.clipboardData.getData("Text"):b.originalEvent.clipboardData.getData("text/plain"),h(f)):(this.editor.selection.save(i),this._pasteArea.focus(),this.editor.util.browser.msie&&10===this.editor.util.browser.version&&(b.preventDefault(),this._pasteArea.html(window.clipboardData.getData("Text"))),setTimeout(function(b){return function(){return b._pasteArea.is(":empty")?f=null:(f=a("<div/>").append(b._pasteArea.contents()),f.find("table colgroup").remove(),b.editor.formatter.format(f),b.editor.formatter.decorate(f),b.editor.formatter.beautify(f.children()),f=f.contents()),b._pasteArea.empty(),i=b.editor.selection.restore(),h(f)}}(this),10))},d.prototype._onDrop=function(a){return this.editor.triggerHandler(a)===!1?!1:setTimeout(function(a){return function(){return a.editor.trigger("valuechanged")}}(this),0)},d.prototype._onInput=function(){return this.throttledTrigger("valuechanged",["oninput"])},d.prototype.addKeystrokeHandler=function(a,b,c){return this._keystrokeHandlers[a]||(this._keystrokeHandlers[a]={}),this._keystrokeHandlers[a][b]=c},d.prototype.addShortcut=function(b,c){return this.hotkeys.add(b,a.proxy(c,this))},d}(b),r=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.pluginName="Keystroke",c.prototype._init=function(){var b;return this.editor=this._module,this.editor.util.browser.safari&&this.editor.inputManager.addKeystrokeHandler("13","*",function(b){return function(c){var d,e;if(c.shiftKey&&(d=b.editor.util.closestBlockEl(),!d.is("pre")))return e=a("<br/>"),b.editor.selection.rangeAtEndOf(d)?(b.editor.selection.insertNode(e),b.editor.selection.insertNode(a("<br/>")),b.editor.selection.setRangeBefore(e)):b.editor.selection.insertNode(e),!0}}(this)),(this.editor.util.browser.webkit||this.editor.util.browser.msie)&&(b=function(b){return function(c,d){var e;if(b.editor.selection.rangeAtEndOf(d))return e=a("<p/>").append(b.editor.util.phBr).insertAfter(d),b.editor.selection.setRangeAtStartOf(e),!0}}(this),this.editor.inputManager.addKeystrokeHandler("13","h1",b),this.editor.inputManager.addKeystrokeHandler("13","h2",b),this.editor.inputManager.addKeystrokeHandler("13","h3",b),this.editor.inputManager.addKeystrokeHandler("13","h4",b),this.editor.inputManager.addKeystrokeHandler("13","h5",b),this.editor.inputManager.addKeystrokeHandler("13","h6",b)),this.editor.inputManager.addKeystrokeHandler("8","*",function(a){return function(){var b,c,d;return d=a.editor.util.furthestBlockEl(),c=d.prev(),c.is("hr")&&a.editor.selection.rangeAtStartOf(d)?(a.editor.selection.save(),c.remove(),a.editor.selection.restore(),!0):(b=a.editor.util.closestBlockEl(),a.editor.util.browser.webkit&&a.editor.selection.rangeAtStartOf(b)?(a.editor.selection.save(),a.editor.formatter.cleanNode(b,!0),a.editor.selection.restore(),null):void 0)}}(this)),this.editor.inputManager.addKeystrokeHandler("9","*",function(a){return function(b){var c;return c=a.editor.toolbar.findButton("code"),a.editor.opts.tabIndent||c&&c.active?(b.shiftKey?a.editor.util.outdent():a.editor.util.indent(),!0):void 0}}(this)),this.editor.inputManager.addKeystrokeHandler("13","li",function(b){return function(c,d){var e,f,g,h;if(e=d.clone(),e.find("ul, ol").remove(),b.editor.util.isEmptyNode(e)&&d.is(b.editor.util.closestBlockEl())){if(f=d.parent(),d.next("li").length>0){if(!b.editor.util.isEmptyNode(d))return;f.parent("li").length>0?(g=a("<li/>").append(b.editor.util.phBr).insertAfter(f.parent("li")),h=a("<"+f[0].tagName+"/>").append(d.nextAll("li")),g.append(h)):(g=a("<p/>").append(b.editor.util.phBr).insertAfter(f),h=a("<"+f[0].tagName+"/>").append(d.nextAll("li")),g.after(h))}else f.parent("li").length>0?(g=a("<li/>").insertAfter(f.parent("li")),g.append(d.contents().length>0?d.contents():b.editor.util.phBr)):(g=a("<p/>").append(b.editor.util.phBr).insertAfter(f),d.children("ul, ol").length>0&&g.after(d.children("ul, ol")));return d.prev("li").length?d.remove():f.remove(),b.editor.selection.setRangeAtStartOf(g),!0}}}(this)),this.editor.inputManager.addKeystrokeHandler("13","pre",function(b){return function(c,d){var e,f,g;return c.preventDefault(),c.shiftKey?(e=a("<p/>").append(b.editor.util.phBr).insertAfter(d),b.editor.selection.setRangeAtStartOf(e),!0):(g=b.editor.selection.getRange(),f=null,g.deleteContents(),!b.editor.util.browser.msie&&b.editor.selection.rangeAtEndOf(d)?(f=document.createTextNode("\n\n"),g.insertNode(f),g.setEnd(f,1)):(f=document.createTextNode("\n"),g.insertNode(f),g.setStartAfter(f)),g.collapse(!1),b.editor.selection.selectRange(g),!0)}}(this)),this.editor.inputManager.addKeystrokeHandler("13","blockquote",function(a){return function(b,c){var d,e;return d=a.editor.util.closestBlockEl(),d.is("p")&&!d.next().length&&a.editor.util.isEmptyNode(d)?(c.after(d),e=document.createRange(),a.editor.selection.setRangeAtStartOf(d,e),!0):void 0}}(this)),this.editor.inputManager.addKeystrokeHandler("8","li",function(b){return function(c,d){var e,f,g,h,i,j,k,l;return f=d.children("ul, ol"),i=d.prev("li"),f.length>0&&i.length>0?(l="",j=null,d.contents().each(function(b,c){if(1===c.nodeType&&/UL|OL/.test(c.nodeName))return!1;if(1!==c.nodeType||!/BR/.test(c.nodeName))return 3===c.nodeType&&c.nodeValue?l+=c.nodeValue:1===c.nodeType&&(l+=a(c).text()),j=a(c)}),j&&1===l.length&&b.editor.util.browser.firefox&&!j.next("br").length?(e=a(b.editor.util.phBr).insertAfter(j),j.remove(),b.editor.selection.setRangeBefore(e),!0):l.length>0?!1:(k=document.createRange(),h=i.children("ul, ol"),h.length>0?(g=a("<li/>").append(b.editor.util.phBr).appendTo(h),h.append(f.children("li")),d.remove(),b.editor.selection.setRangeAtEndOf(g,k)):(b.editor.selection.setRangeAtEndOf(i,k),i.append(f),d.remove(),b.editor.selection.selectRange(k)),!0)):!1}}(this)),this.editor.inputManager.addKeystrokeHandler("8","pre",function(b){return function(c,d){var e,f,g;if(b.editor.selection.rangeAtStartOf(d))return f=d.html().replace("\n","<br/>"),e=a("<p/>").append(f||b.editor.util.phBr).insertAfter(d),d.remove(),g=document.createRange(),b.editor.selection.setRangeAtStartOf(e,g),!0}}(this)),this.editor.inputManager.addKeystrokeHandler("8","blockquote",function(a){return function(b,c){var d,e;if(a.editor.selection.rangeAtStartOf(c))return d=c.children().first().unwrap(),e=document.createRange(),a.editor.selection.setRangeAtStartOf(d,e),!0}}(this))},c}(b),G=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.pluginName="UndoManager",c.prototype._index=-1,c.prototype._capacity=50,c.prototype._timer=null,c.prototype._init=function(){var a,b;return this.editor=this._module,this._stack=[],this.editor.util.os.mac?(b="cmd+z",a="shift+cmd+z"):this.editor.util.os.win?(b="ctrl+z",a="ctrl+y"):(b="ctrl+z",a="shift+ctrl+z"),this.editor.inputManager.addShortcut(b,function(a){return function(b){return b.preventDefault(),a.undo(),!1}}(this)),this.editor.inputManager.addShortcut(a,function(a){return function(b){return b.preventDefault(),a.redo(),!1}}(this)),this.editor.on("valuechanged",function(a){return function(b,c){return"undo"!==c&&"redo"!==c?(a._timer&&(clearTimeout(a._timer),a._timer=null),a._timer=setTimeout(function(){return a._pushUndoState(),a._timer=null},200)):void 0}}(this))},c.prototype._pushUndoState=function(){var a,b;if(this.editor.triggerHandler("pushundostate")!==!1&&(a=this.currentState(),b=this.editor.body.html(),!a||a.html!==b))return this._index+=1,this._stack.length=this._index,this._stack.push({html:b,caret:this.caretPosition()}),this._stack.length>this._capacity?(this._stack.shift(),this._index-=1):void 0},c.prototype.currentState=function(){return this._stack.length&&this._index>-1?this._stack[this._index]:null},c.prototype.undo=function(){var a;if(!(this._index<1||this._stack.length<2))return this.editor.hidePopover(),this._index-=1,a=this._stack[this._index],this.editor.body.html(a.html),this.caretPosition(a.caret),this.editor.body.find(".selected").removeClass("selected"),this.editor.sync(),this.editor.trigger("valuechanged",["undo"])},c.prototype.redo=function(){var a;if(!(this._index<0||this._stack.length<this._index+2))return this.editor.hidePopover(),this._index+=1,a=this._stack[this._index],this.editor.body.html(a.html),this.caretPosition(a.caret),this.editor.body.find(".selected").removeClass("selected"),this.editor.sync(),this.editor.trigger("valuechanged",["redo"])},c.prototype.update=function(){var a,b;if(!this._timer&&(a=this.currentState()))return b=this.editor.body.html(),a.html=b,a.caret=this.caretPosition()},c.prototype._getNodeOffset=function(b,c){var d,e,f;return d=c?a(b):a(b).parent(),f=0,e=!1,d.contents().each(function(){return function(a,d){return c===a||b===d?!1:(3===d.nodeType?e||(f+=1,e=!0):(f+=1,e=!1),null)}}(this)),f},c.prototype._getNodePosition=function(a,b){var c,d;if(3===a.nodeType)for(d=a.previousSibling;d&&3===d.nodeType;)a=d,b+=this.editor.util.getNodeLength(d),d=d.previousSibling;else b=this._getNodeOffset(a,b);return c=[],c.unshift(b),this.editor.util.traverseUp(function(a){return function(b){return c.unshift(a._getNodeOffset(b))}}(this),a),c},c.prototype._getNodeByPosition=function(b){var c,d,e,f,g,h,i,j;for(h=this.editor.body[0],j=b.slice(0,b.length-1),e=f=0,g=j.length;g>f;e=++f){if(i=j[e],d=h.childNodes,i>d.length-1){if(e!==b.length-2||!a(h).is("pre")){h=null;break}c=document.createTextNode(""),h.appendChild(c),d=h.childNodes}h=d[i]}return h},c.prototype.caretPosition=function(a){var b,c,d,e,f;if(a){if(this.editor.inputManager.focused||this.editor.body.focus(),!a.start)return void this.editor.body.blur();if(e=this._getNodeByPosition(a.start),f=a.start[a.start.length-1],a.collapsed?(b=e,c=f):(b=this._getNodeByPosition(a.end),c=a.start[a.start.length-1]),!e||!b)throw new Error("simditor: invalid caret state");return d=document.createRange(),d.setStart(e,f),d.setEnd(b,c),this.editor.selection.selectRange(d)}return d=this.editor.selection.getRange(),this.editor.inputManager.focused&&null!=d?(a={start:[],end:null,collapsed:!0},a.start=this._getNodePosition(d.startContainer,d.startOffset),d.collapsed||(a.end=this._getNodePosition(d.endContainer,d.endOffset),a.collapsed=!1),a):{}},c}(b),I=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.pluginName="Util",c.prototype._init=function(){return this.editor=this._module,this.browser.msie&&this.browser.version<11?this.phBr="":void 0},c.prototype.phBr="<br/>",c.prototype.os=function(){var a;return a={},/Mac/.test(navigator.appVersion)?a.mac=!0:/Linux/.test(navigator.appVersion)?a.linux=!0:/Win/.test(navigator.appVersion)?a.win=!0:/X11/.test(navigator.appVersion)&&(a.unix=!0),/Mobi/.test(navigator.appVersion)&&(a.mobile=!0),a}(),c.prototype.browser=function(){var a,b,c,d,e,f,g,h,i;return i=navigator.userAgent,c=/(msie|trident)/i.test(i),a=/chrome|crios/i.test(i),h=/safari/i.test(i)&&!a,b=/firefox/i.test(i),c?{msie:!0,version:1*(null!=(d=i.match(/(msie |rv:)(\d+(\.\d+)?)/i))?d[2]:void 0)}:a?{webkit:!0,chrome:!0,version:1*(null!=(e=i.match(/(?:chrome|crios)\/(\d+(\.\d+)?)/i))?e[1]:void 0)}:h?{webkit:!0,safari:!0,version:1*(null!=(f=i.match(/version\/(\d+(\.\d+)?)/i))?f[1]:void 0)}:b?{mozilla:!0,firefox:!0,version:1*(null!=(g=i.match(/firefox\/(\d+(\.\d+)?)/i))?g[1]:void 0)}:{}}(),c.prototype.support=function(){return{onselectionchange:function(){var a,b;if(b=document.onselectionchange,void 0!==b)try{return document.onselectionchange=0,null===document.onselectionchange}catch(c){a=c}finally{document.onselectionchange=b}return!1}(),oninput:function(){return!/(msie|trident)/i.test(navigator.userAgent)}()}}(),c.prototype.reflow=function(b){return null==b&&(b=document),a(b)[0].offsetHeight},c.prototype.metaKey=function(a){var b;return b=/Mac/.test(navigator.userAgent),b?a.metaKey:a.ctrlKey},c.prototype.isEmptyNode=function(b){var c;return c=a(b),c.is(":empty")||!c.text()&&!c.find(":not(br, span, div)").length},c.prototype.blockNodes=["div","p","ul","ol","li","blockquote","hr","pre","h1","h2","h3","h4","table"],c.prototype.isBlockNode=function(b){return b=a(b)[0],b&&3!==b.nodeType?new RegExp("^("+this.blockNodes.join("|")+")$").test(b.nodeName.toLowerCase()):!1},c.prototype.closestBlockEl=function(b){var c,d,e;return null==b&&(e=this.editor.selection.getRange(),b=null!=e?e.commonAncestorContainer:void 0),c=a(b),c.length?(d=c.parentsUntil(this.editor.body).addBack(),d=d.filter(function(a){return function(b){return a.isBlockNode(d.eq(b))}}(this)),d.length?d.last():null):null},c.prototype.furthestNode=function(b,c){var d,e,f;return null==b&&(f=this.editor.selection.getRange(),b=null!=f?f.commonAncestorContainer:void 0),d=a(b),d.length?(e=d.parentsUntil(this.editor.body).addBack(),e=e.filter(function(){return function(b){var d;return d=e.eq(b),a.isFunction(c)?c(d):d.is(c)}}(this)),e.length?e.first():null):null},c.prototype.furthestBlockEl=function(b){return this.furthestNode(b,a.proxy(this.isBlockNode,this))},c.prototype.getNodeLength=function(a){switch(a.nodeType){case 7:case 10:return 0;case 3:case 8:return a.length;default:return a.childNodes.length}},c.prototype.traverseUp=function(b,c){var d,e,f,g,h,i,j;if(null==c&&(h=this.editor.selection.getRange(),c=null!=h?h.commonAncestorContainer:void 0),null==c||!a.contains(this.editor.body[0],c))return!1;for(g=a(c).parentsUntil(this.editor.body).get(),g.unshift(c),j=[],d=0,e=g.length;e>d&&(f=g[d],i=b(f),i!==!1);d++)j.push(void 0);return j},c.prototype.indent=function(){var b,c,d,e,f,g,h,i,j,k;if(b=this.editor.util.closestBlockEl(),!(b&&b.length>0))return!1;if(b.is("pre"))j=document.createTextNode("  "),this.editor.selection.insertNode(j);else if(b.is("li")){if(e=b.prev("li"),e.length<1)return!1;this.editor.selection.save(),k=b.parent()[0].tagName,c=e.children("ul, ol"),c.length>0?c.append(b):a("<"+k+"/>").append(b).appendTo(e),this.editor.selection.restore()}else if(b.is("p, h1, h2, h3, h4"))g=null!=(i=b.attr("data-indent"))?i:0,g=1*g+1,g>10&&(g=10),b.attr("data-indent",g);else if(b.is("table")){if(h=this.editor.selection.getRange(),f=a(h.commonAncestorContainer).closest("td"),d=f.next("td"),d.length>0||(d=f.parent("tr").next("tr").find("td:first")),!(f.length>0&&d.length>0))return!1;this.editor.selection.setRangeAtEndOf(d)}else j=document.createTextNode("    "),this.editor.selection.insertNode(j);return this.editor.trigger("valuechanged"),!0},c.prototype.outdent=function(){var b,c,d,e,f,g,h,i,j;if(b=this.editor.util.closestBlockEl(),!(b&&b.length>0))return!1;if(b.is("pre"))return!1;if(b.is("li")){if(c=b.parent(),d=c.parent("li"),d.length<1)return g=this.editor.toolbar.findButton(c[0].tagName.toLowerCase()),null!=g&&g.command(),!1;this.editor.selection.save(),b.next("li").length>0&&a("<"+c[0].tagName+"/>").append(b.nextAll("li")).appendTo(b),b.insertAfter(d),c.children("li").length<1&&c.remove(),this.editor.selection.restore()}else if(b.is("p, h1, h2, h3, h4"))h=null!=(j=b.attr("data-indent"))?j:0,h=1*h-1,0>h&&(h=0),b.attr("data-indent",h);else{if(!b.is("table"))return!1;if(i=this.editor.selection.getRange(),f=a(i.commonAncestorContainer).closest("td"),e=f.prev("td"),e.length>0||(e=f.parent("tr").prev("tr").find("td:last")),!(f.length>0&&e.length>0))return!1;
	this.editor.selection.setRangeAtEndOf(e)}return this.editor.trigger("valuechanged"),!0},c.prototype.dataURLtoBlob=function(a){var b,c,d,e,f,g,h,i,j,k,l;if(g=window.Blob&&function(){var a;try{return Boolean(new Blob)}catch(b){return a=b,!1}}(),f=g&&window.Uint8Array&&function(){var a;try{return 100===new Blob([new Uint8Array(100)]).size}catch(b){return a=b,!1}}(),b=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,!((g||b)&&window.atob&&window.ArrayBuffer&&window.Uint8Array))return!1;for(e=a.split(",")[0].indexOf("base64")>=0?atob(a.split(",")[1]):decodeURIComponent(a.split(",")[1]),c=new ArrayBuffer(e.length),i=new Uint8Array(c),h=j=0,l=e.length;l>=0?l>=j:j>=l;h=l>=0?++j:--j)i[h]=e.charCodeAt(h);return k=a.split(",")[0].split(":")[1].split(";")[0],g?new Blob([f?i:c],{type:k}):(d=new b,d.append(c),d.getBlob(k))},c.prototype.throttle=function(a,b){var c,d,e;return c=null,d=0,e=function(){return c?(clearTimeout(c),c=null):void 0},function(){var f,g,h,i;return g=Date.now(),d||(d=g),h=b-(g-d),i=null,h>0&&b>h?(d=g,e(),f=arguments,c=setTimeout(function(){return d=0,c=null,i=a.apply(null,f)},b)):(e(),d!==g&&(d=0),i=a.apply(null,arguments)),i}},c.prototype.formatHTML=function(b){var c,d,e,f,g,h,i,j,k;for(h=/<(\/?)(.+?)(\/?)>/g,j="",f=0,e=null,d="  ",i=function(a,b){return new Array(b+1).join(a)};null!==(g=h.exec(b));)g.isBlockNode=a.inArray(g[2],this.blockNodes)>-1,g.isStartTag="/"!==g[1]&&"/"!==g[3],g.isEndTag="/"===g[1]||"/"===g[3],c=e?e.index+e[0].length:0,(k=b.substring(c,g.index)).length>0&&a.trim(k)&&(j+=k),g.isBlockNode&&g.isEndTag&&!g.isStartTag&&(f-=1),g.isBlockNode&&g.isStartTag&&(e&&e.isBlockNode&&e.isEndTag||(j+="\n"),j+=i(d,f)),j+=g[0],g.isBlockNode&&g.isEndTag&&(j+="\n"),g.isBlockNode&&g.isStartTag&&(f+=1),e=g;return a.trim(j)},c}(b),E=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.pluginName="Toolbar",c.prototype.opts={toolbar:!0,toolbarFloat:!0,toolbarHidden:!1,toolbarFloatOffset:0},c.prototype._tpl={wrapper:'<div class="simditor-toolbar"><ul></ul></div>',separator:'<li><span class="separator"></span></li>'},c.prototype._init=function(){var b;return this.editor=this._module,this.opts.toolbar?(a.isArray(this.opts.toolbar)||(this.opts.toolbar=["bold","italic","underline","strikethrough","|","ol","ul","blockquote","code","|","link","image","|","indent","outdent"]),this._render(),this.list.on("click",function(){return function(){return!1}}(this)),this.wrapper.on("mousedown",function(a){return function(){return a.list.find(".menu-on").removeClass(".menu-on")}}(this)),a(document).on("mousedown.simditor"+this.editor.id,function(a){return function(){return a.list.find(".menu-on").removeClass(".menu-on")}}(this)),!this.opts.toolbarHidden&&this.opts.toolbarFloat&&(this.wrapper.width(this.wrapper.outerWidth()),this.wrapper.css("top",this.opts.toolbarFloatOffset),b=this.wrapper.outerHeight(),this.editor.util.os.mobile||a(window).on("resize.simditor-"+this.editor.id,function(a){return function(){return a.wrapper.css("position","static"),a.editor.util.reflow(a.wrapper),a.wrapper.css("left",a.wrapper.offset().left),a.wrapper.css("position","")}}(this)).resize(),a(window).on("scroll.simditor-"+this.editor.id,function(c){return function(){var d,e,f;if(f=c.editor.wrapper.offset().top,d=f+c.editor.wrapper.outerHeight()-80,e=a(document).scrollTop()+c.opts.toolbarFloatOffset,f>=e||e>=d){if(c.editor.wrapper.removeClass("toolbar-floating").css("padding-top",""),c.editor.util.os.mobile)return c.wrapper.css("top",c.opts.toolbarFloatOffset)}else if(c.editor.wrapper.addClass("toolbar-floating").css("padding-top",b),c.editor.util.os.mobile)return c.wrapper.css("top",e-f+c.opts.toolbarFloatOffset)}}(this))),this.editor.on("selectionchanged",function(a){return function(){return a.toolbarStatus()}}(this)),this.editor.on("destroy",function(a){return function(){return a.buttons.length=0}}(this)),a(document).on("mousedown.simditor-"+this.editor.id,function(a){return function(){return a.list.find("li.menu-on").removeClass("menu-on")}}(this))):void 0},c.prototype._render=function(){var b,c,d,e;for(this.buttons=[],this.wrapper=a(this._tpl.wrapper).prependTo(this.editor.wrapper),this.list=this.wrapper.find("ul"),e=this.opts.toolbar,b=0,c=e.length;c>b;b++)if(d=e[b],"|"!==d){if(!this.constructor.buttons[d])throw new Error('simditor: invalid toolbar button "'+d+'"');this.buttons.push(new this.constructor.buttons[d]({editor:this.editor}))}else a(this._tpl.separator).appendTo(this.list);return this.opts.toolbarHidden?this.wrapper.hide():this.editor.placeholderEl.css("top",this.wrapper.outerHeight())},c.prototype.toolbarStatus=function(b){var c;if(this.editor.inputManager.focused)return c=this.buttons.slice(0),this.editor.util.traverseUp(function(){return function(d){var e,f,g,h,i,j,k;for(k=[],f=g=0,i=c.length;i>g;f=++g)e=c[f],(null==b||e.name===b)&&(e.status&&e.status(a(d))!==!0||k.push(e));for(h=0,j=k.length;j>h;h++)e=k[h],f=a.inArray(e,c),c.splice(f,1);return 0===c.length?!1:void 0}}(this))},c.prototype.findButton=function(a){var b;return b=this.list.find(".toolbar-item-"+a).data("button"),null!=b?b:null},c.addButton=function(a){return this.buttons[a.prototype.name]=a},c.buttons={},c}(b),z=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.connect(I),c.connect(p),c.connect(G),c.connect(r),c.connect(k),c.connect(y),c.connect(E),c.count=0,c.prototype.opts={textarea:null,placeholder:"",defaultImage:"images/image.png",params:{},upload:!1,tabIndent:!0},c.prototype._init=function(){var b,e,f,g;if(this.textarea=a(this.opts.textarea),this.opts.placeholder=this.opts.placeholder||this.textarea.attr("placeholder"),!this.textarea.length)throw new Error("simditor: param textarea is required.");if(e=this.textarea.data("simditor"),null!=e&&e.destroy(),this.id=++c.count,this._render(),this.opts.upload&&d&&(g="object"==typeof this.opts.upload?this.opts.upload:{},this.uploader=d(g)),f=this.textarea.closest("form"),f.length&&(f.on("submit.simditor-"+this.id,function(a){return function(){return a.sync()}}(this)),f.on("reset.simditor-"+this.id,function(a){return function(){return a.setValue("")}}(this))),this.on("initialized",function(a){return function(){return a.opts.placeholder&&a.on("valuechanged",function(){return a._placeholder()}),a.setValue(a.textarea.val().trim()||"")}}(this)),this.util.browser.mozilla){this.util.reflow();try{return document.execCommand("enableObjectResizing",!1,!1),document.execCommand("enableInlineTableEditing",!1,!1)}catch(h){b=h}}},c.prototype._tpl='<div class="simditor">\n  <div class="simditor-wrapper">\n    <div class="simditor-placeholder"></div>\n    <div class="simditor-body" contenteditable="true">\n    </div>\n  </div>\n</div>',c.prototype._render=function(){var b,c,d,e;if(this.el=a(this._tpl).insertBefore(this.textarea),this.wrapper=this.el.find(".simditor-wrapper"),this.body=this.wrapper.find(".simditor-body"),this.placeholderEl=this.wrapper.find(".simditor-placeholder").append(this.opts.placeholder),this.el.data("simditor",this),this.wrapper.append(this.textarea),this.textarea.data("simditor",this).blur(),this.body.attr("tabindex",this.textarea.attr("tabindex")),this.util.os.mac?this.el.addClass("simditor-mac"):this.util.os.linux&&this.el.addClass("simditor-linux"),this.util.os.mobile&&this.el.addClass("simditor-mobile"),this.opts.params){c=this.opts.params,d=[];for(b in c)e=c[b],d.push(a("<input/>",{type:"hidden",name:b,value:e}).insertAfter(this.textarea));return d}},c.prototype._placeholder=function(){var a,b;return a=this.body.children(),0===a.length||1===a.length&&this.util.isEmptyNode(a)&&(null!=(b=a.data("indent"))?b:0)<1?this.placeholderEl.show():this.placeholderEl.hide()},c.prototype.setValue=function(a){return this.hidePopover(),this.textarea.val(a),this.body.html(a),this.formatter.format(),this.formatter.decorate(),this.util.reflow(this.body),this.inputManager.lastCaretPosition=null,this.trigger("valuechanged")},c.prototype.getValue=function(){return this.sync()},c.prototype.sync=function(){var b,c,d,e,f,g;for(c=this.body.clone(),this.formatter.undecorate(c),this.formatter.format(c),this.formatter.autolink(c),b=c.children(),f=b.last("p"),e=b.first("p");f.is("p")&&this.util.isEmptyNode(f);)d=f,f=f.prev("p"),d.remove();for(;e.is("p")&&this.util.isEmptyNode(e);)d=e,e=f.next("p"),d.remove();return c.find("img.uploading").remove(),g=a.trim(c.html()),this.textarea.val(g),g},c.prototype.focus=function(){var b,c;return this.sourceMode?void this.textarea.focus():this.inputManager.lastCaretPosition?this.undoManager.caretPosition(this.inputManager.lastCaretPosition):(b=this.body.find("p").last(),b.length>0||(b=a("<p/>").append(this.util.phBr).appendTo(this.body)),c=document.createRange(),this.selection.setRangeAtEndOf(b,c),this.body.focus())},c.prototype.blur=function(){return this.sourceMode?this.textarea.blur():this.body.blur()},c.prototype.hidePopover=function(){return this.el.find(".simditor-popover").each(function(){return function(b,c){return c=a(c).data("popover"),c.active?c.hide():void 0}}(this))},c.prototype.destroy=function(){return this.triggerHandler("destroy"),this.textarea.closest("form").off(".simditor .simditor-"+this.id),this.selection.clear(),this.inputManager.focused=!1,this.textarea.insertBefore(this.el).hide().val("").removeData("simditor"),this.el.remove(),a(document).off(".simditor-"+this.id),a(window).off(".simditor-"+this.id),this.off()},c}(b),z.i18n={"zh-CN":{blockquote:"引用",bold:"加粗文字",code:"插入代码",color:"文字颜色",hr:"分隔线",image:"插入图片",externalImage:"外链图片",uploadImage:"上传图片",uploadFailed:"上传失败了",uploadError:"上传出错了",imageUrl:"图片地址",imageSize:"图片尺寸",restoreImageSize:"还原图片尺寸",uploading:"正在上传",indent:"向右缩进",outdent:"向左缩进",italic:"斜体文字",link:"插入链接",text:"文本",linkText:"链接文字",linkUrl:"地址",removeLink:"移除链接",ol:"有序列表",ul:"无序列表",strikethrough:"删除线文字",table:"表格",deleteRow:"删除行",insertRowAbove:"在上面插入行",insertRowBelow:"在下面插入行",deleteColumn:"删除列",insertColumnLeft:"在左边插入列",insertColumnRight:"在右边插入列",deleteTable:"删除表格",title:"标题",source:"HTML源代码",normalText:"普通文本",underline:"下划线文字"}},g=function(b){function c(a){this.editor=a.editor,this.title=this._t(this.name),c.__super__.constructor.call(this,a)}return J(c,b),c.prototype._tpl={item:'<li><a tabindex="-1" unselectable="on" class="toolbar-item" href="javascript:;"><span></span></a></li>',menuWrapper:'<div class="toolbar-menu"></div>',menuItem:'<li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;"><span></span></a></li>',separator:'<li><span class="separator"></span></li>'},c.prototype.name="",c.prototype.icon="",c.prototype.title="",c.prototype.text="",c.prototype.htmlTag="",c.prototype.disableTag="",c.prototype.menu=!1,c.prototype.active=!1,c.prototype.disabled=!1,c.prototype.needFocus=!0,c.prototype.shortcut=null,c.prototype._init=function(){var b,c,d,e,f;for(this.render(),this.el.on("mousedown",function(a){return function(b){var c,d;return b.preventDefault(),a.el.hasClass("disabled")||a.needFocus&&!a.editor.inputManager.focused?!1:a.menu?(a.wrapper.toggleClass("menu-on").siblings("li").removeClass("menu-on"),a.wrapper.is(".menu-on")&&(c=a.menuWrapper.offset().left+a.menuWrapper.outerWidth()+5-a.editor.wrapper.offset().left-a.editor.wrapper.outerWidth(),c>0&&a.menuWrapper.css({left:"auto",right:0}),a.trigger("menuexpand")),!1):(d=a.el.data("param"),a.command(d),!1)}}(this)),this.wrapper.on("click","a.menu-item",function(b){return function(c){var d,e;return c.preventDefault(),d=a(c.currentTarget),b.wrapper.removeClass("menu-on"),d.hasClass("disabled")||b.needFocus&&!b.editor.inputManager.focused?!1:(b.editor.toolbar.wrapper.removeClass("menu-on"),e=d.data("param"),b.command(e),!1)}}(this)),this.wrapper.on("mousedown","a.menu-item",function(){return function(){return!1}}(this)),this.editor.on("blur",function(a){return function(){return a.editor.sourceMode?void 0:(a.setActive(!1),a.setDisabled(!1))}}(this)),null!=this.shortcut&&this.editor.inputManager.addShortcut(this.shortcut,function(a){return function(){return a.el.mousedown(),!1}}(this)),d=this.htmlTag.split(","),e=[],b=0,c=d.length;c>b;b++)f=d[b],f=a.trim(f),e.push(f&&a.inArray(f,this.editor.formatter._allowedTags)<0?this.editor.formatter._allowedTags.push(f):void 0);return e},c.prototype.render=function(){return this.wrapper=a(this._tpl.item).appendTo(this.editor.toolbar.list),this.el=this.wrapper.find("a.toolbar-item"),this.el.attr("title",this.title).addClass("toolbar-item-"+this.name).data("button",this),this.el.find("span").addClass(this.icon?"simditor-icon simditor-icon-"+this.icon:"").text(this.text),this.menu?(this.menuWrapper=a(this._tpl.menuWrapper).appendTo(this.wrapper),this.menuWrapper.addClass("toolbar-menu-"+this.name),this.renderMenu()):void 0},c.prototype.renderMenu=function(){var b,c,d,e,f,g,h,i;if(a.isArray(this.menu)){for(this.menuEl=a("<ul/>").appendTo(this.menuWrapper),g=this.menu,i=[],d=0,e=g.length;e>d;d++)f=g[d],"|"!==f?(c=a(this._tpl.menuItem).appendTo(this.menuEl),i.push(b=c.find("a.menu-item").attr({title:null!=(h=f.title)?h:f.text,"data-param":f.param}).addClass("menu-item-"+f.name).find("span").text(f.text))):a(this._tpl.separator).appendTo(this.menuEl);return i}},c.prototype.setActive=function(a){return a!==this.active?(this.active=a,this.el.toggleClass("active",this.active),this.editor.toolbar.trigger("buttonstatus",[this])):void 0},c.prototype.setDisabled=function(a){return a!==this.disabled?(this.disabled=a,this.el.toggleClass("disabled",this.disabled),this.editor.toolbar.trigger("buttonstatus",[this])):void 0},c.prototype.status=function(a){return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?!0:(null!=a&&this.setActive(a.is(this.htmlTag)),this.active)},c.prototype.command=function(){},c.prototype._t=function(){var a,b,d;return a=1<=arguments.length?M.call(arguments,0):[],d=c.__super__._t.apply(this,a),d||(d=(b=this.editor)._t.apply(b,a)),d},c}(b),z.Button=g,x=function(b){function c(a){this.button=a.button,this.editor=a.button.editor,c.__super__.constructor.call(this,a)}return J(c,b),c.prototype.offset={top:4,left:0},c.prototype.target=null,c.prototype.active=!1,c.prototype._init=function(){return this.el=a('<div class="simditor-popover"></div>').appendTo(this.editor.el).data("popover",this),this.render(),this.el.on("mouseenter",function(a){return function(){return a.el.addClass("hover")}}(this)),this.el.on("mouseleave",function(a){return function(){return a.el.removeClass("hover")}}(this))},c.prototype.render=function(){},c.prototype.show=function(b,c){return null==c&&(c="bottom"),null!=b?(this.el.siblings(".simditor-popover").each(function(){return function(b,c){return c=a(c).data("popover"),c.active?c.hide():void 0}}(this)),this.target=b.addClass("selected"),this.active?(this.refresh(c),this.trigger("popovershow")):(this.active=!0,this.el.css({left:-9999}).show(),setTimeout(function(a){return function(){return a.refresh(c),a.trigger("popovershow")}}(this),0))):void 0},c.prototype.hide=function(){return this.active?(this.target&&this.target.removeClass("selected"),this.target=null,this.active=!1,this.el.hide(),this.trigger("popoverhide")):void 0},c.prototype.refresh=function(a){var b,c,d,e,f;return null==a&&(a="bottom"),this.active?(b=this.editor.el.offset(),e=this.target.offset(),d=this.target.outerHeight(),"bottom"===a?f=e.top-b.top+d:"top"===a&&(f=e.top-b.top-this.el.height()),c=Math.min(e.left-b.left,this.editor.wrapper.width()-this.el.outerWidth()-10),this.el.css({top:f+this.offset.top,left:c+this.offset.left})):void 0},c.prototype.destroy=function(){return this.target=null,this.active=!1,this.editor.off(".linkpopover"),this.el.remove()},c.prototype._t=function(){var a,b,d;return a=1<=arguments.length?M.call(arguments,0):[],d=c.__super__._t.apply(this,a),d||(d=(b=this.button)._t.apply(b,a)),d},c}(b),z.Popover=x,A=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return J(b,a),b.prototype.name="source",b.prototype.icon="html5",b.prototype.needFocus=!1,b.prototype._init=function(){return b.__super__._init.call(this),this.editor.textarea.on("focus",function(a){return function(){return a.editor.el.addClass("focus").removeClass("error")}}(this)),this.editor.textarea.on("blur",function(a){return function(){return a.editor.el.removeClass("focus"),a.editor.setValue(a.editor.textarea.val())}}(this)),this.editor.textarea.on("input",function(a){return function(){return a._resizeTextarea()}}(this))},b.prototype.status=function(){return!0},b.prototype.command=function(){var a,b,c,d;for(this.editor.blur(),this.editor.el.toggleClass("simditor-source-mode"),this.editor.sourceMode=this.editor.el.hasClass("simditor-source-mode"),this.editor.sourceMode&&(this.editor.hidePopover(),this.editor.textarea.val(this.editor.util.formatHTML(this.editor.textarea.val())),this._resizeTextarea()),d=this.editor.toolbar.buttons,b=0,c=d.length;c>b;b++)a=d[b],"source"===a.name?a.setActive(this.editor.sourceMode):a.setDisabled(this.editor.sourceMode);return null},b.prototype._resizeTextarea=function(){return this._textareaPadding||(this._textareaPadding=this.editor.textarea.innerHeight()-this.editor.textarea.height()),this.editor.textarea.height(0).height(this.editor.textarea[0].scrollHeight-this._textareaPadding)},b}(g),z.Toolbar.addButton(A),D=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="title",c.prototype.htmlTag="h1, h2, h3, h4",c.prototype.disableTag="pre, table",c.prototype._init=function(){return this.menu=[{name:"normal",text:this._t("normalText"),param:"p"},"|",{name:"h1",text:this._t("title")+" 1",param:"h1"},{name:"h2",text:this._t("title")+" 2",param:"h2"},{name:"h3",text:this._t("title")+" 3",param:"h3"},{name:"h4",text:this._t("title")+" 4",param:"h4"},{name:"h5",text:this._t("title")+" 5",param:"h5"}],c.__super__._init.call(this)},c.prototype.setActive=function(a,b){return c.__super__.setActive.call(this,a),this.el.removeClass("active-p active-h1 active-h2 active-h3"),a?this.el.addClass("active active-"+b):void 0},c.prototype.status=function(a){var b,c;return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?!0:(null!=a&&(b=null!=(c=a[0].tagName)?c.toLowerCase():void 0,this.setActive(a.is(this.htmlTag),b)),this.active)},c.prototype.command=function(b){var c,d,e,f,g,h,i,j,k,l,m;for(j=this.editor.selection.getRange(),m=j.startContainer,f=j.endContainer,e=this.editor.util.closestBlockEl(m),d=this.editor.util.closestBlockEl(f),this.editor.selection.save(),j.setStartBefore(e[0]),j.setEndAfter(d[0]),c=a(j.extractContents()),l=[],c.children().each(function(a){return function(c,d){var e,f,g,h,i;for(f=a._convertEl(d,b),i=[],g=0,h=f.length;h>g;g++)e=f[g],i.push(l.push(e));return i}}(this)),k=l.reverse(),g=0,h=k.length;h>g;g++)i=k[g],j.insertNode(i[0]);return this.editor.selection.restore(),this.editor.trigger("valuechanged")},c.prototype._convertEl=function(b,c){var d,e,f;return e=a(b),f=[],e.is(c)?f.push(e):(d=a("<"+c+"/>").append(e.contents()),f.push(d)),f},c}(g),z.Toolbar.addButton(D),f=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="bold",c.prototype.icon="bold",c.prototype.htmlTag="b, strong",c.prototype.disableTag="pre",c.prototype.shortcut="cmd+b",c.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + b )":(this.title=this.title+" ( Ctrl + b )",this.shortcut="ctrl+b"),c.__super__._init.call(this)},c.prototype.status=function(a){var b;return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?!0:(b=document.queryCommandState("bold")===!0,this.setActive(b),b)},c.prototype.command=function(){return document.execCommand("bold"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),a(document).trigger("selectionchange")},c}(g),z.Toolbar.addButton(f),q=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="italic",c.prototype.icon="italic",c.prototype.htmlTag="i",c.prototype.disableTag="pre",c.prototype.shortcut="cmd+i",c.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + i )":(this.title=this.title+" ( Ctrl + i )",this.shortcut="ctrl+i"),c.__super__._init.call(this)},c.prototype.status=function(a){var b;return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?this.disabled:(b=document.queryCommandState("italic")===!0,this.setActive(b),b)},c.prototype.command=function(){return document.execCommand("italic"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),a(document).trigger("selectionchange")},c}(g),z.Toolbar.addButton(q),F=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="underline",c.prototype.icon="underline",c.prototype.htmlTag="u",c.prototype.disableTag="pre",c.prototype.shortcut="cmd+u",c.prototype.render=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + u )":(this.title=this.title+" ( Ctrl + u )",this.shortcut="ctrl+u"),c.__super__.render.call(this)},c.prototype.status=function(a){var b;return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?this.disabled:(b=document.queryCommandState("underline")===!0,this.setActive(b),b)},c.prototype.command=function(){return document.execCommand("underline"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),a(document).trigger("selectionchange")},c}(g),z.Toolbar.addButton(F),j=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="color",c.prototype.icon="tint",c.prototype.disableTag="pre",c.prototype.menu=!0,c.prototype.render=function(){var a;return a=1<=arguments.length?M.call(arguments,0):[],c.__super__.render.apply(this,a)},c.prototype.renderMenu=function(){return a('<ul class="color-list">\n  <li><a href="javascript:;" class="font-color font-color-1" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-2" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-3" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-4" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-5" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-6" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-7" data-color=""></a></li>\n  <li><a href="javascript:;" class="font-color font-color-default" data-color=""></a></li>\n</ul>').appendTo(this.menuWrapper),this.menuWrapper.on("mousedown",".color-list",function(){return!1}),this.menuWrapper.on("click",".font-color",function(b){return function(c){var d,e,f,g;if(b.wrapper.removeClass("menu-on"),d=a(c.currentTarget),d.hasClass("font-color-default")){if(e=b.editor.body.find("p, li"),!(e.length>0))return;g=window.getComputedStyle(e[0],null).getPropertyValue("color"),f=b._convertRgbToHex(g)}else g=window.getComputedStyle(d[0],null).getPropertyValue("background-color"),f=b._convertRgbToHex(g);return f?(document.execCommand("foreColor",!1,f),b.editor.util.support.oninput?void 0:b.editor.trigger("valuechanged")):void 0}}(this))},c.prototype._convertRgbToHex=function(a){var b,c,d;return c=/rgb\((\d+),\s?(\d+),\s?(\d+)\)/g,(b=c.exec(a))?(d=function(a,b,c){var d;return d=function(a){var b;return b=a.toString(16),1===b.length?"0"+b:b},"#"+d(a)+d(b)+d(c)})(1*b[1],1*b[2],1*b[3]):""},c}(g),z.Toolbar.addButton(j),u=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.type="",c.prototype.disableTag="pre, table",c.prototype.status=function(a){var b;return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?!0:null==a?this.active:(b="ul"===this.type?"ol":"ul",a.is(b)?(this.setActive(!1),!0):(this.setActive(a.is(this.htmlTag)),this.active))},c.prototype.command=function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r;for(n=this.editor.selection.getRange(),r=n.startContainer,i=n.endContainer,g=this.editor.util.closestBlockEl(r),c=this.editor.util.closestBlockEl(i),this.editor.selection.save(),n.setStartBefore(g[0]),n.setEndAfter(c[0]),g.is("li")&&c.is("li")&&(e=this.editor.util.furthestNode(g,"ul, ol"),d=this.editor.util.furthestNode(c,"ul, ol"),e.is(d)?(j=function(a){var b;for(b=1;!a.parent().is(e);)b+=1,a=a.parent();return b},q=j(g),h=j(c),f=q>h?c.parent():g.parent(),n.setStartBefore(f[0]),n.setEndAfter(f[0])):(n.setStartBefore(e[0]),n.setEndAfter(d[0]))),b=a(n.extractContents()),p=[],b.children().each(function(a){return function(b,c){var d,e,f,g,h;for(e=a._convertEl(c),h=[],f=0,g=e.length;g>f;f++)d=e[f],h.push(p.length&&p[p.length-1].is(a.type)&&d.is(a.type)?p[p.length-1].append(d.children()):p.push(d));return h}}(this)),o=p.reverse(),k=0,l=o.length;l>k;k++)m=o[k],n.insertNode(m[0]);return this.editor.selection.restore(),this.editor.trigger("valuechanged")},c.prototype._convertEl=function(b){var c,d,e,f,g,h,i,j,k;if(c=a(b),k=[],d="ul"===this.type?"ol":"ul",c.is(this.type))c.children("li").each(function(b){return function(c,d){var e,f,g;return f=a(d),e=f.children("ul, ol").remove(),g=a("<p/>").append(a(d).html()||b.editor.util.phBr),k.push(g),e.length>0?k.push(e):void 0}}(this));else if(c.is(d))e=a("<"+this.type+"/>").append(c.html()),k.push(e);else if(c.is("blockquote")){for(j=c.children().get(),h=0,i=j.length;i>h;h++)f=j[h],g=this._convertEl(f);a.merge(k,g)}else c.is("table")||(e=a("<"+this.type+"><li></li></"+this.type+">"),e.find("li").append(c.html()||this.editor.util.phBr),k.push(e));return k},c}(g),v=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return J(b,a),b.prototype.type="ol",b.prototype.name="ol",b.prototype.icon="list-ol",b.prototype.htmlTag="ol",b.prototype.shortcut="cmd+/",b.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + / )":(this.title=this.title+" ( ctrl + / )",this.shortcut="ctrl+/"),b.__super__._init.call(this)},b}(u),H=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return J(b,a),b.prototype.type="ul",b.prototype.name="ul",b.prototype.icon="list-ul",b.prototype.htmlTag="ul",b.prototype.shortcut="cmd+.",b.prototype._init=function(){return this.editor.util.os.mac?this.title=this.title+" ( Cmd + . )":(this.title=this.title+" ( Ctrl + . )",this.shortcut="ctrl+."),b.__super__._init.call(this)},b}(u),z.Toolbar.addButton(v),z.Toolbar.addButton(H),e=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="blockquote",c.prototype.icon="quote-left",c.prototype.htmlTag="blockquote",c.prototype.disableTag="pre, table",c.prototype.command=function(){var b,c,d,e,f,g,h,i,j,k,l;for(i=this.editor.selection.getRange(),l=i.startContainer,e=i.endContainer,d=this.editor.util.furthestBlockEl(l),c=this.editor.util.furthestBlockEl(e),this.editor.selection.save(),i.setStartBefore(d[0]),i.setEndAfter(c[0]),b=a(i.extractContents()),k=[],b.children().each(function(a){return function(b,c){var d,e,f,g,h;for(e=a._convertEl(c),h=[],f=0,g=e.length;g>f;f++)d=e[f],h.push(k.length&&k[k.length-1].is(a.htmlTag)&&d.is(a.htmlTag)?k[k.length-1].append(d.children()):k.push(d));return h}}(this)),j=k.reverse(),f=0,g=j.length;g>f;f++)h=j[f],i.insertNode(h[0]);return this.editor.selection.restore(),this.editor.trigger("valuechanged")},c.prototype._convertEl=function(b){var c,d,e;return c=a(b),e=[],c.is(this.htmlTag)?c.children().each(function(){return function(b,c){return e.push(a(c))}}(this)):(d=a("<"+this.htmlTag+"/>").append(c),e.push(d)),e},c}(g),z.Toolbar.addButton(e),h=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="code",c.prototype.icon="code",c.prototype.htmlTag="pre",c.prototype.disableTag="li, table",c.prototype._init=function(){return c.__super__._init.call(this),this.editor.on("decorate",function(b){return function(c,d){return d.find("pre").each(function(c,d){return b.decorate(a(d))})}}(this)),this.editor.on("undecorate",function(b){return function(c,d){return d.find("pre").each(function(c,d){return b.undecorate(a(d))})}}(this))},c.prototype.render=function(){var a;return a=1<=arguments.length?M.call(arguments,0):[],c.__super__.render.apply(this,a),this.popover=new i({button:this})},c.prototype.status=function(a){var b;return b=c.__super__.status.call(this,a),this.active?this.popover.show(a):this.editor.util.isBlockNode(a)&&this.popover.hide(),b},c.prototype.decorate=function(a){var b;return b=a.attr("data-lang"),a.removeClass(),b&&-1!==b?a.addClass("lang-"+b):void 0},c.prototype.undecorate=function(a){var b;return b=a.attr("data-lang"),a.removeClass(),b&&-1!==b?a.addClass("lang-"+b):void 0},c.prototype.command=function(){var b,c,d,e,f,g,h,i,j,k,l;for(i=this.editor.selection.getRange(),l=i.startContainer,e=i.endContainer,d=this.editor.util.closestBlockEl(l),c=this.editor.util.closestBlockEl(e),i.setStartBefore(d[0]),i.setEndAfter(c[0]),b=a(i.extractContents()),k=[],b.children().each(function(a){return function(b,c){var d,e,f,g,h;for(e=a._convertEl(c),h=[],f=0,g=e.length;g>f;f++)d=e[f],h.push(k.length&&k[k.length-1].is(a.htmlTag)&&d.is(a.htmlTag)?k[k.length-1].append(d.contents()):k.push(d));return h}}(this)),j=k.reverse(),f=0,g=j.length;g>f;f++)h=j[f],i.insertNode(h[0]);return this.editor.selection.setRangeAtEndOf(k[0]),this.editor.trigger("valuechanged")},c.prototype._convertEl=function(b){var c,d,e,f;return c=a(b),f=[],c.is(this.htmlTag)?(d=a("<p/>").append(c.html().replace("\n","<br/>")),f.push(d)):(e=!c.text()&&1===c.children().length&&c.children().is("br")?"\n":this.editor.formatter.clearHtml(c),d=a("<"+this.htmlTag+"/>").text(e),f.push(d)),f},c}(g),i=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return J(b,a),b.prototype._tpl='<div class="code-settings">\n  <div class="settings-field">\n    <select class="select-lang">\n      <option value="-1">选择程序语言</option>\n      <option value="bash">Bash</option>\n      <option value="c++">C++</option>\n      <option value="cs">C#</option>\n      <option value="css">CSS</option>\n      <option value="erlang">Erlang</option>\n      <option value="less">Less</option>\n      <option value="scss">Sass</option>\n      <option value="diff">Diff</option>\n      <option value="coffeeScript">CoffeeScript</option>\n      <option value="html">Html,XML</option>\n      <option value="json">JSON</option>\n      <option value="java">Java</option>\n      <option value="js">JavaScript</option>\n      <option value="markdown">Markdown</option>\n      <option value="oc">Objective C</option>\n      <option value="php">PHP</option>\n      <option value="perl">Perl</option>\n      <option value="python">Python</option>\n      <option value="ruby">Ruby</option>\n      <option value="sql">SQL</option>\n    </select>\n  </div>\n</div>',b.prototype.render=function(){return this.el.addClass("code-popover").append(this._tpl),this.selectEl=this.el.find(".select-lang"),this.selectEl.on("change",function(a){return function(){var b;return a.lang=a.selectEl.val(),b=a.target.hasClass("selected"),a.target.removeClass().removeAttr("data-lang"),-1!==a.lang&&(a.target.addClass("lang-"+a.lang),a.target.attr("data-lang",a.lang)),b?a.target.addClass("selected"):void 0}}(this)),this.editor.on("valuechanged",function(a){return function(){return a.active?a.refresh():void 0}}(this))},b.prototype.show=function(){var a;return a=1<=arguments.length?M.call(arguments,0):[],b.__super__.show.apply(this,a),this.lang=this.target.attr("data-lang"),this.selectEl.val(null!=this.lang?this.lang:-1)},b}(x),z.Toolbar.addButton(h),s=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="link",c.prototype.icon="link",c.prototype.htmlTag="a",c.prototype.disableTag="pre",c.prototype.render=function(){var a;return a=1<=arguments.length?M.call(arguments,0):[],c.__super__.render.apply(this,a),this.popover=new t({button:this})},c.prototype.status=function(a){var b;
	return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?!0:null==a?this.active:(b=!0,!a.is(this.htmlTag)||a.is('[class^="simditor-"]')?(this.setActive(!1),b=!1):this.editor.selection.rangeAtEndOf(a)?(this.setActive(!0),b=!1):this.setActive(!0),b?this.popover.show(a):this.editor.util.isBlockNode(a)&&this.popover.hide(),this.active)},c.prototype.command=function(){var b,c,d,e,f,g,h,i,j,k;return i=this.editor.selection.getRange(),this.active?(d=a(i.commonAncestorContainer).closest("a"),k=document.createTextNode(d.text()),d.replaceWith(k),i.selectNode(k)):(j=i.startContainer,g=i.endContainer,f=this.editor.util.closestBlockEl(j),c=this.editor.util.closestBlockEl(g),b=a(i.extractContents()),h=this.editor.formatter.clearHtml(b.contents(),!1),d=a("<a/>",{href:"http://www.example.com",target:"_blank",text:h||this._t("linkText")}),f[0]===c[0]?i.insertNode(d[0]):(e=a("<p/>").append(d),i.insertNode(e[0])),i.selectNodeContents(d[0]),this.popover.one("popovershow",function(a){return function(){return h?(a.popover.urlEl.focus(),a.popover.urlEl[0].select()):(a.popover.textEl.focus(),a.popover.textEl[0].select())}}(this))),this.editor.selection.selectRange(i),this.editor.trigger("valuechanged")},c}(g),t=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.render=function(){var b;return b='<div class="link-settings">\n  <div class="settings-field">\n    <label>'+this._t("text")+'</label>\n    <input class="link-text" type="text"/>\n    <a class="btn-unlink" href="javascript:;" title="'+this._t("removeLink")+'" tabindex="-1"><span class="simditor-icon simditor-icon-unlink"></span></a>\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("linkUrl")+'</label>\n    <input class="link-url" type="text"/>\n  </div>\n</div>',this.el.addClass("link-popover").append(b),this.textEl=this.el.find(".link-text"),this.urlEl=this.el.find(".link-url"),this.unlinkEl=this.el.find(".btn-unlink"),this.textEl.on("keyup",function(a){return function(b){return 13!==b.which?a.target.text(a.textEl.val()):void 0}}(this)),this.urlEl.on("keyup",function(a){return function(b){var c;if(13!==b.which)return c=a.urlEl.val(),!/https?:\/\/|^\//gi.test(c)&&c&&(c="http://"+c),a.target.attr("href",c)}}(this)),a([this.urlEl[0],this.textEl[0]]).on("keydown",function(b){return function(c){return 13===c.which||27===c.which||!c.shiftKey&&9===c.which&&a(c.target).hasClass("link-url")?(c.preventDefault(),setTimeout(function(){var a;return a=document.createRange(),b.editor.selection.setRangeAfter(b.target,a),b.hide(),b.editor.trigger("valuechanged")},0)):void 0}}(this)),this.unlinkEl.on("click",function(a){return function(){var b,c;return c=document.createTextNode(a.target.text()),a.target.replaceWith(c),a.hide(),b=document.createRange(),a.editor.selection.setRangeAfter(c,b),a.editor.trigger("valuechanged")}}(this))},c.prototype.show=function(){var a;return a=1<=arguments.length?M.call(arguments,0):[],c.__super__.show.apply(this,a),this.textEl.val(this.target.text()),this.urlEl.val(this.target.attr("href"))},c}(x),z.Toolbar.addButton(s),m=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="image",c.prototype.icon="picture-o",c.prototype.htmlTag="img",c.prototype.disableTag="pre, table",c.prototype.defaultImage="",c.prototype.needFocus=!1,c.prototype._init=function(){var b,d,e,f;if(this.editor.opts.imageButton)if(Array.isArray(this.editor.opts.imageButton))for(this.menu=[],f=this.editor.opts.imageButton,d=0,e=f.length;e>d;d++)b=f[d],this.menu.push({name:b+"-image",text:this._t(b+"Image")});else this.menu=!1;else this.menu=null!=this.editor.uploader?[{name:"upload-image",text:this._t("uploadImage")},{name:"external-image",text:this._t("externalImage")}]:!1;return this.defaultImage=this.editor.opts.defaultImage,this.editor.body.on("click","img:not([data-non-image])",function(b){return function(c){var d,e;return d=a(c.currentTarget),e=document.createRange(),e.selectNode(d[0]),b.editor.selection.selectRange(e),b.editor.util.support.onselectionchange||b.editor.trigger("selectionchanged"),!1}}(this)),this.editor.body.on("mouseup","img:not([data-non-image])",function(){return function(){return!1}}(this)),this.editor.on("selectionchanged.image",function(b){return function(){var c,d,e;return e=b.editor.selection.getRange(),null!=e?(c=a(e.cloneContents()).contents(),1===c.length&&c.is("img:not([data-non-image])")?(d=a(e.startContainer).contents().eq(e.startOffset),b.popover.show(d)):b.popover.hide()):void 0}}(this)),this.editor.on("valuechanged.image",function(b){return function(){var c;return c=b.editor.wrapper.find(".simditor-image-loading"),c.length>0?c.each(function(c,d){var e,f,g;return f=a(d),e=f.data("img"),!(e&&e.parent().length>0)&&(f.remove(),e&&(g=e.data("file"),g&&(b.editor.uploader.cancel(g),b.editor.body.find("img.uploading").length<1)))?b.editor.uploader.trigger("uploadready",[g]):void 0}):void 0}}(this)),c.__super__._init.call(this)},c.prototype.render=function(){var a;return a=1<=arguments.length?M.call(arguments,0):[],c.__super__.render.apply(this,a),this.popover=new n({button:this}),"upload"===this.editor.opts.imageButton?this._initUploader(this.el):void 0},c.prototype.renderMenu=function(){return c.__super__.renderMenu.call(this),this._initUploader()},c.prototype._initUploader=function(b){var c,d;return null==b&&(b=this.menuEl.find(".menu-item-upload-image")),null==this.editor.uploader?void this.el.find(".btn-upload").remove():(c=null,d=function(d){return function(){return c&&c.remove(),c=a('<input type="file" title="'+d._t("uploadImage")+'" accept="image/*">').appendTo(b)}}(this),d(),b.on("click mousedown","input[type=file]",function(){return function(a){return a.stopPropagation()}}(this)),b.on("change","input[type=file]",function(a){return function(){return a.editor.inputManager.focused?(a.editor.uploader.upload(c,{inline:!0}),d()):(a.editor.one("focus",function(){return a.editor.uploader.upload(c,{inline:!0}),d()}),a.editor.focus()),a.wrapper.removeClass("menu-on")}}(this)),this.editor.uploader.on("beforeupload",function(b){return function(c,d){var e;if(d.inline)return d.img?e=a(d.img):(e=b.createImage(d.name),d.img=e),e.addClass("uploading"),e.data("file",d),b.editor.uploader.readImageFile(d.obj,function(a){var c;if(e.hasClass("uploading"))return c=a?a.src:b.defaultImage,b.loadImage(e,c,function(){return b.popover.active?(b.popover.refresh(),b.popover.srcEl.val(b._t("uploading")).prop("disabled",!0)):void 0})})}}(this)),this.editor.uploader.on("uploadprogress",a.proxy(this.editor.util.throttle(function(a,b,c,d){var e,f,g;if(b.inline&&(f=b.img.data("mask")))return e=f.data("img"),e.hasClass("uploading")&&e.parent().length>0?(g=c/d,g=(100*g).toFixed(0),g>99&&(g=99),f.find(".progress").height(100-g+"%")):void f.remove()},500),this)),this.editor.uploader.on("uploadsuccess",function(b){return function(c,d,e){var f,g,h;if(d.inline&&(f=d.img,f.hasClass("uploading")&&f.parent().length>0)){if(f.removeData("file"),f.removeClass("uploading").removeClass("loading"),g=f.data("mask"),g&&g.remove(),f.removeData("mask"),"object"!=typeof e)try{e=a.parseJSON(e)}catch(i){c=i,e={success:!1}}return e.success===!1?(h=e.msg||b._t("uploadFailed"),alert(h),f.attr("src",b.defaultImage)):f.attr("src",e.file_path),b.popover.active&&(b.popover.srcEl.prop("disabled",!1),b.popover.srcEl.val(e.file_path)),b.editor.trigger("valuechanged"),b.editor.body.find("img.uploading").length<1?b.editor.uploader.trigger("uploadready",[d,e]):void 0}}}(this)),this.editor.uploader.on("uploaderror",function(b){return function(c,d,e){var f,g,h,i;if(d.inline&&"abort"!==e.statusText){if(e.responseText){try{i=a.parseJSON(e.responseText),h=i.msg}catch(j){c=j,h=b._t("uploadError")}alert(h)}if(f=d.img,f.hasClass("uploading")&&f.parent().length>0)return f.removeData("file"),f.removeClass("uploading").removeClass("loading"),g=f.data("mask"),g&&g.remove(),f.removeData("mask"),f.attr("src",b.defaultImage),b.popover.active&&(b.popover.srcEl.prop("disabled",!1),b.popover.srcEl.val(b.defaultImage)),b.editor.trigger("valuechanged"),b.editor.body.find("img.uploading").length<1?b.editor.uploader.trigger("uploadready",[d,i]):void 0}}}(this)))},c.prototype.status=function(a){return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?!0:void 0},c.prototype.loadImage=function(b,c,d){var e,f,g;return g=function(a){return function(){var c,d;return c=b.offset(),d=a.editor.wrapper.offset(),e.css({top:c.top-d.top,left:c.left-d.left,width:b.width(),height:b.height()}).show()}}(this),b.addClass("loading"),e=b.data("mask"),e||(e=a('<div class="simditor-image-loading"><div class="progress"></div></div>').hide().appendTo(this.editor.wrapper),g(),b.data("mask",e),e.data("img",b)),f=new Image,f.onload=function(a){return function(){var h,i;if(b.hasClass("loading")||b.hasClass("uploading"))return i=f.width,h=f.height,b.attr({src:c,"data-image-size":i+","+h}).removeClass("loading"),b.hasClass("uploading")?(a.editor.util.reflow(a.editor.body),g()):(e.remove(),b.removeData("mask")),d(f)}}(this),f.onerror=function(){return function(){return d(!1),e.remove(),b.removeData("mask").removeClass("loading")}}(this),f.src=c},c.prototype.createImage=function(b){var c,d,e,f;return null==b&&(b="Image"),this.editor.inputManager.focused||this.editor.focus(),f=this.editor.selection.getRange(),f.deleteContents(),c=this.editor.util.closestBlockEl(),c.is("p")&&!this.editor.util.isEmptyNode(c)&&(c=a("<p/>").append(this.editor.util.phBr).insertAfter(c),this.editor.selection.setRangeAtStartOf(c,f)),d=a("<img/>").attr("alt",b),f.insertNode(d[0]),e=c.next("p"),e.length>0||(e=a("<p/>").append(this.editor.util.phBr).insertAfter(c)),this.editor.selection.setRangeAtStartOf(e),d},c.prototype.command=function(a){var b;return b=this.createImage(),this.loadImage(b,a||this.defaultImage,function(a){return function(){return a.editor.trigger("valuechanged"),a.editor.util.reflow(b),b.click(),a.popover.one("popovershow",function(){return a.popover.srcEl.focus(),a.popover.srcEl[0].select()})}}(this))},c}(g),n=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.offset={top:6,left:-4},c.prototype.render=function(){var b;return b='<div class="link-settings">\n  <div class="settings-field">\n    <label>'+this._t("imageUrl")+'</label>\n    <input class="image-src" type="text" tabindex="1" />\n    <a class="btn-upload" href="javascript:;" title="'+this._t("uploadImage")+'" tabindex="-1">\n      <span class="simditor-icon simditor-icon-upload"></span>\n    </a>\n  </div>\n  <div class="settings-field">\n    <label>'+this._t("imageSize")+'</label>\n    <input class="image-size" id="image-width" type="text" tabindex="2" />\n    <span class="times">×</span>\n    <input class="image-size" id="image-height" type="text" tabindex="3" />\n    <a class="btn-restore" href="javascript:;" title="'+this._t("restoreImageSize")+'" tabindex="-1">\n      <span class="simditor-icon simditor-icon-undo"></span>\n    </a>\n  </div>\n</div>',this.el.addClass("image-popover").append(b),this.srcEl=this.el.find(".image-src"),this.srcEl.on("keydown",function(a){return function(b){var c,d;if(13===b.which||27===b.which)return b.preventDefault(),c=function(){return a.button.editor.body.focus(),a.button.editor.selection.setRangeAfter(a.target),a.hide()},13!==b.which||a.target.hasClass("uploading")?c():(d=a.srcEl.val(),/^data:image/.test(d)&&!a.editor.uploader?void c():a.button.loadImage(a.target,d,function(b){var e;if(b)return/^data:image/.test(d)?(e=a.editor.util.dataURLtoBlob(d),e.name="Base64 Image.png",a.editor.uploader.upload(e,{inline:!0,img:a.target})):(c(),a.editor.trigger("valuechanged"))}))}}(this)),this.widthEl=this.el.find("#image-width"),this.heightEl=this.el.find("#image-height"),this.el.find(".image-size").on("blur",function(b){return function(c){return b._resizeImg(a(c.currentTarget)),b.el.data("popover").refresh()}}(this)),this.el.find(".image-size").on("keyup",function(b){return function(c){var d;return d=a(c.currentTarget),13!==c.which&&27!==c.which&&9!==c.which?b._resizeImg(d,!0):void 0}}(this)),this.el.find(".image-size").on("keydown",function(b){return function(c){var d;return d=a(c.currentTarget),13===c.which||27===c.which?(c.preventDefault(),13===c.which?b._resizeImg(d):b._restoreImg(),b.button.editor.body.focus(),b.button.editor.selection.setRangeAfter(b.target),b.hide()):9===c.which?b.el.data("popover").refresh():void 0}}(this)),this.el.find(".btn-restore").on("click",function(a){return function(){return a._restoreImg(),a.el.data("popover").refresh()}}(this)),this.editor.on("valuechanged",function(a){return function(){return a.active?a.refresh():void 0}}(this)),this._initUploader()},c.prototype._initUploader=function(){var b,c;return b=this.el.find(".btn-upload"),null==this.editor.uploader?void b.remove():(c=function(c){return function(){return c.input&&c.input.remove(),c.input=a('<input type="file" title="'+c._t("uploadImage")+'" accept="image/*">').appendTo(b)}}(this),c(),this.el.on("click mousedown","input[type=file]",function(){return function(a){return a.stopPropagation()}}(this)),this.el.on("change","input[type=file]",function(a){return function(){return a.editor.uploader.upload(a.input,{inline:!0,img:a.target}),c()}}(this)))},c.prototype._resizeImg=function(b,c){var d,e,f;return null==c&&(c=!1),e=1*b.val(),a.isNumeric(e)||0>e?(b.is(this.widthEl)?(d=this.height*e/this.width,this.heightEl.val(d)):(f=this.width*e/this.height,this.widthEl.val(f)),c?void 0:this.target.attr({width:f||e,height:d||e})):void 0},c.prototype._restoreImg=function(){var a,b;return b=(null!=(a=this.target.data("image-size"))?a.split(","):void 0)||[this.width,this.height],this.target.attr({width:1*b[0],height:1*b[1]}),this.widthEl.val(b[0]),this.heightEl.val(b[1])},c.prototype.show=function(){var a,b;return b=1<=arguments.length?M.call(arguments,0):[],c.__super__.show.apply(this,b),a=this.target,this.width=a.width(),this.height=a.height(),a.hasClass("uploading")?this.srcEl.val(this._t("uploading")).prop("disabled",!0):(this.srcEl.val(a.attr("src")).prop("disabled",!1),this.widthEl.val(this.width),this.heightEl.val(this.height))},c}(x),z.Toolbar.addButton(m),o=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return J(b,a),b.prototype.name="indent",b.prototype.icon="indent",b.prototype._init=function(){return this.title=this._t(this.name)+" (Tab)",b.__super__._init.call(this)},b.prototype.status=function(){return!0},b.prototype.command=function(){return this.editor.util.indent()},b}(g),z.Toolbar.addButton(o),w=function(a){function b(){return b.__super__.constructor.apply(this,arguments)}return J(b,a),b.prototype.name="outdent",b.prototype.icon="outdent",b.prototype._init=function(){return this.title=this._t(this.name)+" (Shift + Tab)",b.__super__._init.call(this)},b.prototype.status=function(){return!0},b.prototype.command=function(){return this.editor.util.outdent()},b}(g),z.Toolbar.addButton(w),l=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="hr",c.prototype.icon="minus",c.prototype.htmlTag="hr",c.prototype.status=function(){return!0},c.prototype.command=function(){var b,c,d,e;return e=this.editor.util.furthestBlockEl(),d=e.next(),d.length>0?this.editor.selection.save():c=a("<p/>").append(this.editor.util.phBr),b=a("<hr/>").insertAfter(e),c?(c.insertAfter(b),this.editor.selection.setRangeAtStartOf(c)):this.editor.selection.restore(),this.editor.trigger("valuechanged")},c}(g),z.Toolbar.addButton(l),C=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="table",c.prototype.icon="table",c.prototype.htmlTag="table",c.prototype.disableTag="pre, li, blockquote",c.prototype.menu=!0,c.prototype._init=function(){return c.__super__._init.call(this),a.merge(this.editor.formatter._allowedTags,["tbody","tr","td","colgroup","col"]),a.extend(this.editor.formatter._allowedAttributes,{td:["rowspan","colspan"],col:["width"]}),this._initShortcuts(),this.editor.on("decorate",function(b){return function(c,d){return d.find("table").each(function(c,d){return b.decorate(a(d))})}}(this)),this.editor.on("undecorate",function(b){return function(c,d){return d.find("table").each(function(c,d){return b.undecorate(a(d))})}}(this)),this.editor.on("selectionchanged.table",function(b){return function(){var c,d;return b.editor.body.find(".simditor-table td").removeClass("active"),d=b.editor.selection.getRange(),null!=d?(c=a(d.commonAncestorContainer),d.collapsed&&c.is(".simditor-table")&&(c=c.find(b.editor.selection.rangeAtStartOf(c)?"td:first":"td:last"),b.editor.selection.setRangeAtEndOf(c)),c.closest("td",b.editor.body).addClass("active")):void 0}}(this)),this.editor.on("blur.table",function(a){return function(){return a.editor.body.find(".simditor-table td").removeClass("active")}}(this)),this.editor.inputManager.addKeystrokeHandler("38","td",function(a){return function(b,c){var d,e,f;return e=c.parent("tr"),d=e.prev("tr"),d.length>0?(f=e.find("td").index(c),a.editor.selection.setRangeAtEndOf(d.find("td").eq(f)),!0):!0}}(this)),this.editor.inputManager.addKeystrokeHandler("40","td",function(a){return function(b,c){var d,e,f;return e=c.parent("tr"),d=e.next("tr"),d.length>0?(f=e.find("td").index(c),a.editor.selection.setRangeAtEndOf(d.find("td").eq(f)),!0):!0}}(this))},c.prototype.initResize=function(b){var c,d,e;return e=b.parent(".simditor-table"),c=b.find("colgroup"),c.length<1&&(c=a("<colgroup/>").prependTo(b),b.find("tr:first td").each(function(){return function(){var b;return b=a("<col/>").appendTo(c)}}(this)),this.refreshTableWidth(b)),d=a('<div class="simditor-resize-handle" contenteditable="false"></div>').appendTo(e),e.on("mousemove","td",function(){return function(b){var f,g,h,i,j,k;if(!e.hasClass("resizing"))return g=a(b.currentTarget),k=b.pageX-a(b.currentTarget).offset().left,5>k&&g.prev().length>0&&(g=g.prev()),g.next("td").length<1?void d.hide():(null!=(i=d.data("td"))?i.is(g):void 0)?void d.show():(h=g.parent().find("td").index(g),f=c.find("col").eq(h),(null!=(j=d.data("col"))?j.is(f):void 0)?void d.show():d.css("left",g.position().left+g.outerWidth()-5).data("td",g).data("col",f).show())}}(this)),e.on("mouseleave",function(){return function(){return d.hide()}}(this)),e.on("mousedown",".simditor-resize-handle",function(){return function(b){var c,d,f,g,h,i,j,k,l,m,n;return c=a(b.currentTarget),f=c.data("td"),d=c.data("col"),h=f.next("td"),g=d.next("col"),m=b.pageX,k=1*f.outerWidth(),l=1*h.outerWidth(),j=parseFloat(c.css("left")),n=f.closest("table").width(),i=50,a(document).on("mousemove.simditor-resize-table",function(a){var b,e,f;return b=a.pageX-m,e=k+b,f=l-b,i>e?(e=i,b=i-k,f=l-b):i>f&&(f=i,b=l-i,e=k+b),d.attr("width",e/n*100+"%"),g.attr("width",f/n*100+"%"),c.css("left",j+b)}),a(document).one("mouseup.simditor-resize-table",function(){return a(document).off(".simditor-resize-table"),e.removeClass("resizing")}),e.addClass("resizing"),!1}}(this))},c.prototype._initShortcuts=function(){return this.editor.inputManager.addShortcut("ctrl+alt+up",function(a){return function(){return a.editMenu.find(".menu-item[data-param=insertRowAbove]").click(),!1}}(this)),this.editor.inputManager.addShortcut("ctrl+alt+down",function(a){return function(){return a.editMenu.find(".menu-item[data-param=insertRowBelow]").click(),!1}}(this)),this.editor.inputManager.addShortcut("ctrl+alt+left",function(a){return function(){return a.editMenu.find(".menu-item[data-param=insertColLeft]").click(),!1}}(this)),this.editor.inputManager.addShortcut("ctrl+alt+right",function(a){return function(){return a.editMenu.find(".menu-item[data-param=insertColRight]").click(),!1}}(this))},c.prototype.decorate=function(a){return a.parent(".simditor-table").length>0&&this.undecorate(a),a.wrap('<div class="simditor-table"></div>'),this.initResize(a),a.parent()},c.prototype.undecorate=function(a){return a.parent(".simditor-table").length>0?a.parent().replaceWith(a):void 0},c.prototype.renderMenu=function(){return a('<div class="menu-create-table">\n</div>\n<div class="menu-edit-table">\n  <ul>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteRow"><span>'+this._t("deleteRow")+'</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertRowAbove"><span>'+this._t("insertRowAbove")+' ( Ctrl + Alt + ↑ )</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertRowBelow"><span>'+this._t("insertRowBelow")+' ( Ctrl + Alt + ↓ )</span></a></li>\n    <li><span class="separator"></span></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteCol"><span>'+this._t("deleteColumn")+'</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertColLeft"><span>'+this._t("insertColumnLeft")+' ( Ctrl + Alt + ← )</span></a></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="insertColRight"><span>'+this._t("insertColumnRight")+' ( Ctrl + Alt + → )</span></a></li>\n    <li><span class="separator"></span></li>\n    <li><a tabindex="-1" unselectable="on" class="menu-item" href="javascript:;" data-param="deleteTable"><span>'+this._t("deleteTable")+"</span></a></li>\n  </ul>\n</div>").appendTo(this.menuWrapper),this.createMenu=this.menuWrapper.find(".menu-create-table"),this.editMenu=this.menuWrapper.find(".menu-edit-table"),this.createTable(6,6).appendTo(this.createMenu),this.createMenu.on("mouseenter","td",function(b){return function(c){var d,e,f;return b.createMenu.find("td").removeClass("selected"),d=a(c.currentTarget),e=d.parent(),f=e.find("td").index(d)+1,e.prevAll("tr").addBack().find("td:lt("+f+")").addClass("selected")}}(this)),this.createMenu.on("mouseleave",function(){return function(b){return a(b.currentTarget).find("td").removeClass("selected")}}(this)),this.createMenu.on("mousedown","td",function(b){return function(c){var d,e,f,g,h,i;return b.wrapper.removeClass("menu-on"),b.editor.inputManager.focused?(f=a(c.currentTarget),g=f.parent(),h=g.find("td").index(f)+1,i=g.prevAll("tr").length+1,e=b.createTable(i,h,!0),d=b.editor.util.closestBlockEl(),b.editor.util.isEmptyNode(d)?d.replaceWith(e):d.after(e),b.decorate(e),b.editor.selection.setRangeAtStartOf(e.find("td:first")),b.editor.trigger("valuechanged"),!1):void 0}}(this))},c.prototype.createTable=function(b,c,d){var e,f,g,h,i,j,k,l,m,n;for(e=a("<table/>"),f=a("<tbody/>").appendTo(e),l=j=0,m=b;m>=0?m>j:j>m;l=m>=0?++j:--j)for(h=a("<tr/>").appendTo(f),i=k=0,n=c;n>=0?n>k:k>n;i=n>=0?++k:--k)g=a("<td/>").appendTo(h),d&&g.append(this.editor.util.phBr);return e},c.prototype.refreshTableWidth=function(b){var c,d;return d=b.width(),c=b.find("col"),b.find("tr:first td").each(function(){return function(b,e){var f;return f=c.eq(b),f.attr("width",a(e).outerWidth()/d*100+"%")}}(this))},c.prototype.setActive=function(a){return c.__super__.setActive.call(this,a),a?(this.createMenu.hide(),this.editMenu.show()):(this.createMenu.show(),this.editMenu.hide())},c.prototype.deleteRow=function(a){var b,c,d;return c=a.parent("tr"),c.siblings("tr").length<1?this.deleteTable(a):(b=c.next("tr"),b.length>0||(b=c.prev("tr")),d=c.find("td").index(a),c.remove(),this.editor.selection.setRangeAtEndOf(b.find("td").eq(d)))},c.prototype.insertRow=function(b,c){var d,e,f,g,h,i,j,k;for(null==c&&(c="after"),f=b.parent("tr"),e=f.closest("table"),g=0,e.find("tr").each(function(){return function(b,c){return g=Math.max(g,a(c).find("td").length)}}(this)),d=a("<tr/>"),h=j=1,k=g;k>=1?k>=j:j>=k;h=k>=1?++j:--j)a("<td/>").append(this.editor.util.phBr).appendTo(d);return f[c](d),i=f.find("td").index(b),this.editor.selection.setRangeAtStartOf(d.find("td").eq(i))},c.prototype.deleteCol=function(b){var c,d,e,f;return e=b.parent("tr"),e.siblings("tr").length<1&&b.siblings("td").length<1?this.deleteTable(b):(f=e.find("td").index(b),c=b.next("td"),c.length>0||(c=e.prev("td")),d=e.closest("table"),d.find("col").eq(f).remove(),d.find("tr").each(function(){return function(b,c){return a(c).find("td").eq(f).remove()}}(this)),this.refreshTableWidth(d),this.editor.selection.setRangeAtEndOf(c))},c.prototype.insertCol=function(b,c){var d,e,f,g,h,i,j,k;return null==c&&(c="after"),h=b.parent("tr"),i=h.find("td").index(b),g=b.closest("table"),d=g.find("col").eq(i),g.find("tr").each(function(b){return function(d,e){var f;return f=a("<td/>").append(b.editor.util.phBr),a(e).find("td").eq(i)[c](f)}}(this)),e=a("<col/>"),d[c](e),j=g.width(),k=Math.max(parseFloat(d.attr("width"))/2,50/j*100),d.attr("width",k+"%"),e.attr("width",k+"%"),this.refreshTableWidth(g),f="after"===c?b.next("td"):b.prev("td"),this.editor.selection.setRangeAtStartOf(f)},c.prototype.deleteTable=function(a){var b,c;return c=a.closest(".simditor-table"),b=c.next("p"),c.remove(),b.length>0?this.editor.selection.setRangeAtStartOf(b):void 0},c.prototype.command=function(b){var c,d;if(d=this.editor.selection.getRange(),c=a(d.commonAncestorContainer).closest("td"),c.length>0){if("deleteRow"===b)this.deleteRow(c);else if("insertRowAbove"===b)this.insertRow(c,"before");else if("insertRowBelow"===b)this.insertRow(c);else if("deleteCol"===b)this.deleteCol(c);else if("insertColLeft"===b)this.insertCol(c,"before");else if("insertColRight"===b)this.insertCol(c);else{if("deleteTable"!==b)return;this.deleteTable(c)}return this.editor.trigger("valuechanged")}},c}(g),z.Toolbar.addButton(C),B=function(b){function c(){return c.__super__.constructor.apply(this,arguments)}return J(c,b),c.prototype.name="strikethrough",c.prototype.icon="strikethrough",c.prototype.htmlTag="strike",c.prototype.disableTag="pre",c.prototype.status=function(a){var b;return null!=a&&this.setDisabled(a.is(this.disableTag)),this.disabled?!0:(b=document.queryCommandState("strikethrough")===!0,this.setActive(b),b)},c.prototype.command=function(){return document.execCommand("strikethrough"),this.editor.util.support.oninput||this.editor.trigger("valuechanged"),a(document).trigger("selectionchange")},c}(g),z.Toolbar.addButton(B),z});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33)], __WEBPACK_AMD_DEFINE_RESULT__ = function(c){return a.returnExportsGlobal=b(c)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=b(require("jquery")):a.SimpleModule=b(jQuery)}(this,function(a){var b,c=[].slice;return b=function(){function b(b){var c,d,e,f,g,h,i;if(this.opts=a.extend({},this.opts,b),(g=this.constructor)._connectedClasses||(g._connectedClasses=[]),e=function(){var a,b,d,e;for(d=this.constructor._connectedClasses,e=[],a=0,b=d.length;b>a;a++)c=d[a],f=c.pluginName.charAt(0).toLowerCase()+c.pluginName.slice(1),c.prototype._connected&&(c.prototype._module=this),e.push(this[f]=new c);return e}.call(this),this._connected)this.opts=a.extend({},this.opts,this._module.opts);else for(this._init(),h=0,i=e.length;i>h;h++)d=e[h],"function"==typeof d._init&&d._init();this.trigger("initialized")}return b.extend=function(a){var b,c,d;if(null!=a&&"object"==typeof a){for(b in a)c=a[b],"included"!==b&&"extended"!==b&&(this[b]=c);return null!=(d=a.extended)?d.call(this):void 0}},b.include=function(a){var b,c,d;if(null!=a&&"object"==typeof a){for(b in a)c=a[b],"included"!==b&&"extended"!==b&&(this.prototype[b]=c);return null!=(d=a.included)?d.call(this):void 0}},b.connect=function(a){if("function"==typeof a){if(!a.pluginName)throw new Error("Module.connect: cannot connect plugin without pluginName");return a.prototype._connected=!0,this._connectedClasses||(this._connectedClasses=[]),this._connectedClasses.push(a),a.pluginName?this[a.pluginName]=a:void 0}},b.prototype.opts={},b.prototype._init=function(){},b.prototype.on=function(){var b,d;return b=1<=arguments.length?c.call(arguments,0):[],(d=a(this)).on.apply(d,b),this},b.prototype.one=function(){var b,d;return b=1<=arguments.length?c.call(arguments,0):[],(d=a(this)).one.apply(d,b),this},b.prototype.off=function(){var b,d;return b=1<=arguments.length?c.call(arguments,0):[],(d=a(this)).off.apply(d,b),this},b.prototype.trigger=function(){var b,d;return b=1<=arguments.length?c.call(arguments,0):[],(d=a(this)).trigger.apply(d,b),this},b.prototype.triggerHandler=function(){var b,d;return b=1<=arguments.length?c.call(arguments,0):[],(d=a(this)).triggerHandler.apply(d,b)},b.prototype._t=function(){var a,b;return a=1<=arguments.length?c.call(arguments,0):[],(b=this.constructor)._t.apply(b,a)},b._t=function(){var a,b,d,e;return b=arguments[0],a=2<=arguments.length?c.call(arguments,1):[],d=(null!=(e=this.i18n[this.locale])?e[b]:void 0)||"",a.length>0?(d=d.replace(/([^%]|^)%(?:(\d+)\$)?s/g,function(b,c,d){return d?c+a[parseInt(d)-1]:c+a.shift()}),d.replace(/%%s/g,"%s")):d},b.i18n={"zh-CN":{}},b.locale="zh-CN",b}()});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33),
	      __webpack_require__(123)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, SimpleModule) {
	      return (root.returnExportsGlobal = factory($, SimpleModule));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require("jquery"),
	      require("simple-module"));
	  } else {
	    root.simple = root.simple || {};
	    root.simple['hotkeys'] = factory(jQuery,
	      SimpleModule);
	  }
	}(this, function ($, SimpleModule) {

	var Hotkeys, hotkeys,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	Hotkeys = (function(_super) {
	  __extends(Hotkeys, _super);

	  function Hotkeys() {
	    return Hotkeys.__super__.constructor.apply(this, arguments);
	  }

	  Hotkeys.count = 0;

	  Hotkeys.keyNameMap = {
	    8: "Backspace",
	    9: "Tab",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Esc",
	    32: "Spacebar",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "Left",
	    38: "Up",
	    39: "Right",
	    40: "Down",
	    45: "Insert",
	    46: "Del",
	    91: "Meta",
	    93: "Meta",
	    48: "0",
	    49: "1",
	    50: "2",
	    51: "3",
	    52: "4",
	    53: "5",
	    54: "6",
	    55: "7",
	    56: "8",
	    57: "9",
	    65: "A",
	    66: "B",
	    67: "C",
	    68: "D",
	    69: "E",
	    70: "F",
	    71: "G",
	    72: "H",
	    73: "I",
	    74: "J",
	    75: "K",
	    76: "L",
	    77: "M",
	    78: "N",
	    79: "O",
	    80: "P",
	    81: "Q",
	    82: "R",
	    83: "S",
	    84: "T",
	    85: "U",
	    86: "V",
	    87: "W",
	    88: "X",
	    89: "Y",
	    90: "Z",
	    96: "0",
	    97: "1",
	    98: "2",
	    99: "3",
	    100: "4",
	    101: "5",
	    102: "6",
	    103: "7",
	    104: "8",
	    105: "9",
	    106: "Multiply",
	    107: "Add",
	    109: "Subtract",
	    110: "Decimal",
	    111: "Divide",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    124: "F13",
	    125: "F14",
	    126: "F15",
	    127: "F16",
	    128: "F17",
	    129: "F18",
	    130: "F19",
	    131: "F20",
	    132: "F21",
	    133: "F22",
	    134: "F23",
	    135: "F24",
	    59: ";",
	    61: "=",
	    186: ";",
	    187: "=",
	    188: ",",
	    190: ".",
	    191: "/",
	    192: "`",
	    219: "[",
	    220: "\\",
	    221: "]",
	    222: "'"
	  };

	  Hotkeys.aliases = {
	    "escape": "esc",
	    "delete": "del",
	    "return": "enter",
	    "ctrl": "control",
	    "space": "spacebar",
	    "ins": "insert",
	    "cmd": "meta",
	    "command": "meta",
	    "wins": "meta",
	    "windows": "meta"
	  };

	  Hotkeys.normalize = function(shortcut) {
	    var i, key, keyname, keys, _i, _len;
	    keys = shortcut.toLowerCase().replace(/\s+/gi, "").split("+");
	    for (i = _i = 0, _len = keys.length; _i < _len; i = ++_i) {
	      key = keys[i];
	      keys[i] = this.aliases[key] || key;
	    }
	    keyname = keys.pop();
	    keys.sort().push(keyname);
	    return keys.join("_");
	  };

	  Hotkeys.prototype.opts = {
	    el: document
	  };

	  Hotkeys.prototype._init = function() {
	    this.id = ++this.constructor.count;
	    this._map = {};
	    this._delegate = typeof this.opts.el === "string" ? document : this.opts.el;
	    return $(this._delegate).on("keydown.simple-hotkeys-" + this.id, this.opts.el, (function(_this) {
	      return function(e) {
	        var _ref;
	        return (_ref = _this._getHander(e)) != null ? _ref.call(_this, e) : void 0;
	      };
	    })(this));
	  };

	  Hotkeys.prototype._getHander = function(e) {
	    var keyname, shortcut;
	    if (!(keyname = this.constructor.keyNameMap[e.which])) {
	      return;
	    }
	    shortcut = "";
	    if (e.altKey) {
	      shortcut += "alt_";
	    }
	    if (e.ctrlKey) {
	      shortcut += "control_";
	    }
	    if (e.metaKey) {
	      shortcut += "meta_";
	    }
	    if (e.shiftKey) {
	      shortcut += "shift_";
	    }
	    shortcut += keyname.toLowerCase();
	    return this._map[shortcut];
	  };

	  Hotkeys.prototype.respondTo = function(subject) {
	    if (typeof subject === 'string') {
	      return this._map[this.constructor.normalize(subject)] != null;
	    } else {
	      return this._getHander(subject) != null;
	    }
	  };

	  Hotkeys.prototype.add = function(shortcut, handler) {
	    this._map[this.constructor.normalize(shortcut)] = handler;
	    return this;
	  };

	  Hotkeys.prototype.remove = function(shortcut) {
	    delete this._map[this.constructor.normalize(shortcut)];
	    return this;
	  };

	  Hotkeys.prototype.destroy = function() {
	    $(this._delegate).off(".simple-hotkeys-" + this.id);
	    this._map = {};
	    return this;
	  };

	  return Hotkeys;

	})(SimpleModule);

	hotkeys = function(opts) {
	  return new Hotkeys(opts);
	};


	return hotkeys;


	}));



/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(33),
	      __webpack_require__(123)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, SimpleModule) {
	      return (root.returnExportsGlobal = factory($, SimpleModule));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like enviroments that support module.exports,
	    // like Node.
	    module.exports = factory(require("jquery"),
	      require("simple-module"));
	  } else {
	    root.simple = root.simple || {};
	    root.simple['uploader'] = factory(jQuery,
	      SimpleModule);
	  }
	}(this, function ($, SimpleModule) {

	var Uploader, uploader,
	  __hasProp = {}.hasOwnProperty,
	  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

	Uploader = (function(_super) {
	  __extends(Uploader, _super);

	  function Uploader() {
	    return Uploader.__super__.constructor.apply(this, arguments);
	  }

	  Uploader.count = 0;

	  Uploader.prototype.opts = {
	    url: '',
	    params: null,
	    fileKey: 'upload_file',
	    connectionCount: 3
	  };

	  Uploader.prototype._init = function() {
	    this.files = [];
	    this.queue = [];
	    this.id = ++Uploader.count;
	    this.on('uploadcomplete', (function(_this) {
	      return function(e, file) {
	        _this.files.splice($.inArray(file, _this.files), 1);
	        if (_this.queue.length > 0 && _this.files.length < _this.opts.connectionCount) {
	          return _this.upload(_this.queue.shift());
	        } else {
	          return _this.uploading = false;
	        }
	      };
	    })(this));
	    return $(window).on('beforeunload.uploader-' + this.id, (function(_this) {
	      return function(e) {
	        if (!_this.uploading) {
	          return;
	        }
	        e.originalEvent.returnValue = _this._t('leaveConfirm');
	        return _this._t('leaveConfirm');
	      };
	    })(this));
	  };

	  Uploader.prototype.generateId = (function() {
	    var id;
	    id = 0;
	    return function() {
	      return id += 1;
	    };
	  })();

	  Uploader.prototype.upload = function(file, opts) {
	    var f, key, _i, _len;
	    if (opts == null) {
	      opts = {};
	    }
	    if (file == null) {
	      return;
	    }
	    if ($.isArray(file) || file instanceof FileList) {
	      for (_i = 0, _len = file.length; _i < _len; _i++) {
	        f = file[_i];
	        this.upload(f, opts);
	      }
	    } else if ($(file).is('input:file')) {
	      key = $(file).attr('name');
	      if (key) {
	        opts.fileKey = key;
	      }
	      this.upload($.makeArray($(file)[0].files), opts);
	    } else if (!file.id || !file.obj) {
	      file = this.getFile(file);
	    }
	    if (!(file && file.obj)) {
	      return;
	    }
	    $.extend(file, opts);
	    if (this.files.length >= this.opts.connectionCount) {
	      this.queue.push(file);
	      return;
	    }
	    if (this.triggerHandler('beforeupload', [file]) === false) {
	      return;
	    }
	    this.files.push(file);
	    this._xhrUpload(file);
	    return this.uploading = true;
	  };

	  Uploader.prototype.getFile = function(fileObj) {
	    var name, _ref, _ref1;
	    if (fileObj instanceof window.File || fileObj instanceof window.Blob) {
	      name = (_ref = fileObj.fileName) != null ? _ref : fileObj.name;
	    } else {
	      return null;
	    }
	    return {
	      id: this.generateId(),
	      url: this.opts.url,
	      params: this.opts.params,
	      fileKey: this.opts.fileKey,
	      name: name,
	      size: (_ref1 = fileObj.fileSize) != null ? _ref1 : fileObj.size,
	      ext: name ? name.split('.').pop().toLowerCase() : '',
	      obj: fileObj
	    };
	  };

	  Uploader.prototype._xhrUpload = function(file) {
	    var formData, k, v, _ref;
	    formData = new FormData();
	    formData.append(file.fileKey, file.obj);
	    formData.append("original_filename", file.name);
	    if (file.params) {
	      _ref = file.params;
	      for (k in _ref) {
	        v = _ref[k];
	        formData.append(k, v);
	      }
	    }
	    return file.xhr = $.ajax({
	      url: file.url,
	      data: formData,
	      processData: false,
	      contentType: false,
	      type: 'POST',
	      headers: {
	        'X-File-Name': encodeURIComponent(file.name)
	      },
	      xhr: function() {
	        var req;
	        req = $.ajaxSettings.xhr();
	        if (req) {
	          req.upload.onprogress = (function(_this) {
	            return function(e) {
	              return _this.progress(e);
	            };
	          })(this);
	        }
	        return req;
	      },
	      progress: (function(_this) {
	        return function(e) {
	          if (!e.lengthComputable) {
	            return;
	          }
	          return _this.trigger('uploadprogress', [file, e.loaded, e.total]);
	        };
	      })(this),
	      error: (function(_this) {
	        return function(xhr, status, err) {
	          return _this.trigger('uploaderror', [file, xhr, status]);
	        };
	      })(this),
	      success: (function(_this) {
	        return function(result) {
	          _this.trigger('uploadprogress', [file, file.size, file.size]);
	          _this.trigger('uploadsuccess', [file, result]);
	          return $(document).trigger('uploadsuccess', [file, result, _this]);
	        };
	      })(this),
	      complete: (function(_this) {
	        return function(xhr, status) {
	          return _this.trigger('uploadcomplete', [file, xhr.responseText]);
	        };
	      })(this)
	    });
	  };

	  Uploader.prototype.cancel = function(file) {
	    var f, _i, _len, _ref;
	    if (!file.id) {
	      _ref = this.files;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        f = _ref[_i];
	        if (f.id === file * 1) {
	          file = f;
	          break;
	        }
	      }
	    }
	    this.trigger('uploadcancel', [file]);
	    if (file.xhr) {
	      file.xhr.abort();
	    }
	    return file.xhr = null;
	  };

	  Uploader.prototype.readImageFile = function(fileObj, callback) {
	    var fileReader, img;
	    if (!$.isFunction(callback)) {
	      return;
	    }
	    img = new Image();
	    img.onload = function() {
	      return callback(img);
	    };
	    img.onerror = function() {
	      return callback();
	    };
	    if (window.FileReader && FileReader.prototype.readAsDataURL && /^image/.test(fileObj.type)) {
	      fileReader = new FileReader();
	      fileReader.onload = function(e) {
	        return img.src = e.target.result;
	      };
	      return fileReader.readAsDataURL(fileObj);
	    } else {
	      return callback();
	    }
	  };

	  Uploader.prototype.destroy = function() {
	    var file, _i, _len, _ref;
	    this.queue.length = 0;
	    _ref = this.files;
	    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	      file = _ref[_i];
	      this.cancel(file);
	    }
	    $(window).off('.uploader-' + this.id);
	    return $(document).off('.uploader-' + this.id);
	  };

	  Uploader.i18n = {
	    'zh-CN': {
	      leaveConfirm: '正在上传文件，如果离开上传会自动取消'
	    }
	  };

	  Uploader.locale = 'zh-CN';

	  return Uploader;

	})(SimpleModule);

	uploader = function(opts) {
	  return new Uploader(opts);
	};

	return uploader;

	}));




/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	(function(factory) {
	  if (true) {
	    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(122)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    return factory(window.Simditor);
	  }
	})(function(Simditor) {
	  var FullScreenButton;
	  FullScreenButton = (function(superClass) {
	    extend(FullScreenButton, superClass);

	    function FullScreenButton() {
	      this.isExpand = false;
	      FullScreenButton.__super__.constructor.apply(this, arguments);
	    }

	    FullScreenButton.prototype._init = function() {
	      this.shortcut = 'esc';
	      FullScreenButton.__super__._init.apply(this, arguments);
	      return this.setIcon("expand");
	    };

	    FullScreenButton.prototype.name = 'fullscreen';

	    FullScreenButton.prototype.title = 'full-screen';

	    FullScreenButton.prototype.saveStatus = function() {
	      var body, el, toolbar, wrapper;
	      el = this.editor.el;
	      wrapper = this.editor.wrapper;
	      toolbar = this.editor.toolbar;
	      body = this.editor.body;
	      return this.cssStatus = {
	        el: {
	          position: el.css('position'),
	          left: el.css('left'),
	          right: el.css('right'),
	          top: el.css('top'),
	          bottom: el.css('bottom')
	        },
	        wrapper: wrapper.css("height"),
	        toolbar: {
	          wrapper: {
	            width: toolbar.wrapper.css("width")
	          }
	        },
	        body: {
	          maxHeight: body.css("maxHeight"),
	          overflow: body.css("overflow")
	        }
	      };
	    };

	    FullScreenButton.prototype.setIcon = function(icon) {
	      return this.el.find("span").removeClass().addClass("fa fa-" + icon);
	    };

	    FullScreenButton.prototype.resetStatus = function() {
	      this.editor.el.css(this.cssStatus.el);
	      this.editor.wrapper.css(this.cssStatus.wrapper);
	      this.editor.toolbar.wrapper.css(this.cssStatus.toolbar.wrapper);
	      return this.editor.body.css(this.cssStatus.body);
	    };

	    FullScreenButton.prototype.doFullScreen = function() {
	      var toolbarHeight, wrapperHeight;
	      this.editor.el.css('position', 'fixed').css('left', "9px").css('right', "9px").css('top', "9px").css('bottom', "9px").css('z-index', "9999");
	      this.editor.wrapper.css("height", "100%");
	      this.editor.toolbar.wrapper.css('width', "100%");
	      toolbarHeight = this.editor.toolbar.wrapper.height();
	      wrapperHeight = this.editor.wrapper.height();
	      return this.editor.body.css("maxHeight", wrapperHeight - toolbarHeight - 70 + "px").css("overflow", "auto");
	    };

	    FullScreenButton.prototype.command = function() {
	      if (this.isExpand) {
	        this.setIcon('expand');
	        this.resetStatus();
	        this.isExpand = false;
	        return;
	      }
	      this.setIcon('compress');
	      this.saveStatus();
	      this.isExpand = true;
	      return this.doFullScreen();
	    };

	    return FullScreenButton;

	  })(Simditor.Button);
	  return Simditor.Toolbar.addButton(FullScreenButton);
	});


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Simditor) {var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
	  hasProp = {}.hasOwnProperty;

	(function(factory) {
	  if (true) {
	    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(83), __webpack_require__(122)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    return factory(window.marked);
	  }
	})(function(_marked, _Simditor) {
	  var MarkedButton;
	  MarkedButton = (function(superClass) {
	    extend(MarkedButton, superClass);

	    function MarkedButton() {
	      MarkedButton.__super__.constructor.apply(this, arguments);
	      this.marked = _marked;
	      if (!_marked) {
	        throw new Error('cannot find the plugin marked');
	      }
	    }

	    MarkedButton.prototype.name = 'marked';

	    MarkedButton.prototype.title = 'marked';

	    MarkedButton.prototype.icon = 'maxcdn';

	    MarkedButton.prototype.shortcut = 'ctrl+77';

	    MarkedButton.prototype.decodeHTML = function(str) {
	      var div;
	      div = document.createElement('div');
	      div.innerHTML = str;
	      return div.innerText;
	    };

	    MarkedButton.prototype.encodeHTML = function(str) {
	      var div;
	      div = document.createElement('div');
	      div.appendChild(document.createTextNode(str));
	      return div.innerHTML;
	    };

	    MarkedButton.prototype.decodeCodes = function(content) {
	      var code, codes, div, i, len, text;
	      div = document.createElement('div');
	      div.innerHTML = content;
	      codes = div.querySelectorAll('code');
	      for (i = 0, len = codes.length; i < len; i++) {
	        code = codes[i];
	        text = this.decodeHTML(code.innerText);
	        code.innerText = text;
	      }
	      return div.innerHTML;
	    };

	    MarkedButton.prototype.replaceSelection = function(html, selectInserted) {
	      var child, div, firstInsertedNode, fragment, lastInsertedNode, range, sel;
	      if (selectInserted == null) {
	        selectInserted = true;
	      }
	      sel = window.getSelection();
	      if (!(sel.getRangeAt && sel.rangeCount)) {
	        return;
	      }
	      range = window.getSelection().getRangeAt(0);
	      range.deleteContents();
	      if (range.createContextualFragment) {
	        fragment = range.createContextualFragment(html);
	      } else {
	        div = document.createElement("div");
	        div.innerHTML = html;
	        fragment = document.createDocumentFragment();
	        while ((child = div.firstChild)) {
	          fragment.appendChild(child);
	        }
	      }
	      firstInsertedNode = fragment.firstChild;
	      lastInsertedNode = fragment.lastChild;
	      range.insertNode(fragment);
	      if (!selectInserted) {
	        return;
	      }
	      if (firstInsertedNode) {
	        range.setStartBefore(firstInsertedNode);
	        range.setEndAfter(lastInsertedNode);
	      }
	      sel.removeAllRanges();
	      return sel.addRange(range);
	    };

	    MarkedButton.prototype.doReplaceSelction = function(sel) {
	      var value;
	      value = this.marked(this.encodeHTML(sel));
	      value = this.decodeCodes(value);
	      return this.replaceSelection(value);
	    };

	    MarkedButton.prototype.doReplaceAll = function() {
	      var value;
	      value = this.editor.getValue();
	      value = value.replace(/<p>/g, '').replace(/<\/p>/g, '\n');
	      value = this.marked(value);
	      value = this.decodeCodes(value);
	      return this.editor.setValue(value);
	    };

	    MarkedButton.prototype.command = function() {
	      var sel;
	      sel = window.getSelection().toString();
	      if (sel.length === 0) {
	        this.doReplaceAll();
	      } else {
	        this.doReplaceSelction(sel);
	      }
	      return this.editor.selection.setRangeAtEndOf('p');
	    };

	    return MarkedButton;

	  })(_Simditor.Button);
	  return Simditor.Toolbar.addButton(MarkedButton);
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(122)))

/***/ },
/* 128 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"editor\"> <div class=\"profile back\" dropdown ng-show=\"backList && backList.length > 0 && false\"> <span>回滚版本</span> <div class=\"dropdown dropdown-tip\"> <ul class=\"dropdown-menu\"> <li ng-repeat=\"item in backList\" ng-click=\"onClickChoose(item.key)\"> <a class=\"text-overflow\" href=\"javascript:\" title=\"{{item.value}}\"><i class=\"blue\">{{item.time|timeAgo}}</i>&nbsp;&nbsp;{{item.value|rawText}}</a> </li> </ul> </div> </div> <textarea rows=\"10\" placeholder=\"这里输入内容\" autofocus></textarea> <div class=\"control\"> <div class=\"left\"> <button class=\"cancel default\" ng-click=\"onClickCancel()\">取&nbsp;&nbsp;消</button> </div> <div class=\"right\"> <button class=\"primary default\" ng-click=\"onClickSubmit()\">提&nbsp;&nbsp;交</button>\n<a ng-click=\"onClickBack()\"><i class=\"icon small\"></i>历史版本</a> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("editor.html",v1)}]);
	module.exports=v1;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(34), __webpack_require__(35), __webpack_require__(44), __webpack_require__(57), __webpack_require__(69), __webpack_require__(78), __webpack_require__(84), __webpack_require__(51), __webpack_require__(46), __webpack_require__(115), __webpack_require__(75), __webpack_require__(130), __webpack_require__(100), __webpack_require__(104), __webpack_require__(131)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_ng, _app, _utils, _tmplIssue, _tmplMember, _tmplCommit, _tmplAssets, _tmplProject, _tmplReport, _tmplGlobal, _tmplAuthority, _tmplWiki, _tmplTeam, _tmplStream, _templGitlab) {
	  _app.config([
	    '$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', function($routeProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
	      var assetsListOnly, assetsPreviewerViews, blankDetailsView, commitListOnly, discussionListOnly, discussionViews, documentListOnly, documentViews, gitlabListOnly, issueListOnly, issueViews, memberListOnly, streamView, teamInviteListOnly, teamMemberListOnly, templates, testListOnly, testViews, weeklyReportListOnly, weeklyReportViews, wikiListOnly, wikiViews;
	      $locationProvider.html5Mode({
	        enabled: true,
	        requireBase: false
	      });
	      templates = {
	        issueDetails: __webpack_require__(132),
	        home: __webpack_require__(133)
	      };
	      blankDetailsView = {
	        template: _utils.extractTemplate('#tmpl-global-blank-page', _tmplGlobal),
	        controller: function() {}
	      };
	      streamView = {
	        template: _utils.extractTemplate('#tmpl-stream-list', _tmplStream),
	        controller: 'streamListController'
	      };
	      issueViews = {
	        'listPanel': {
	          template: _utils.extractTemplate('#tmpl-issue-list', _tmplIssue),
	          controller: 'issueListController'
	        },
	        'detailsPanel@project': {
	          template: templates.issueDetails,
	          controller: 'issueDetailsController'
	        },
	        'detailsPanel@myproject': {
	          template: templates.issueDetails,
	          controller: 'issueDetailsController'
	        },
	        'detailsPanel@myfollow': {
	          template: templates.issueDetails,
	          controller: 'issueDetailsController'
	        }
	      };
	      issueListOnly = {
	        'listPanel@project': issueViews.listPanel,
	        'listPanel@myproject': issueViews.listPanel,
	        'listPanel@myfollow': issueViews.listPanel,
	        'detailsPanel@project': blankDetailsView,
	        'detailsPanel@myproject': streamView,
	        'detailsPanel@myfollow': streamView
	      };
	      documentListOnly = {
	        'listPanel@project': {
	          template: _utils.extractTemplate('#tmpl-document-list', _tmplIssue),
	          controller: 'documentListController'
	        },
	        detailsPanel: blankDetailsView
	      };
	      documentViews = {
	        listPanel: documentListOnly['listPanel@project'],
	        'detailsPanel@project': issueViews['detailsPanel@project']
	      };
	      testListOnly = {
	        'listPanel@project': {
	          template: _utils.extractTemplate('#tmpl-test-list', _tmplIssue),
	          controller: 'testListController'
	        },
	        'detailsPanel': blankDetailsView
	      };
	      testViews = {
	        listPanel: testListOnly['listPanel@project'],
	        'detailsPanel@project': issueViews['detailsPanel@project']
	      };
	      discussionViews = {
	        listPanel: {
	          template: _utils.extractTemplate('#tmpl-discussion-list', _tmplIssue),
	          controller: 'discussionListController'
	        },
	        'detailsPanel@project': {
	          template: templates.issueDetails,
	          controller: 'issueDetailsController'
	        }
	      };
	      discussionListOnly = {
	        listPanel: discussionViews.listPanel,
	        detailsPanel: blankDetailsView
	      };
	      weeklyReportListOnly = {
	        listPanel: {
	          template: _utils.extractTemplate('#tmpl-report-weekly-list', _tmplReport),
	          controller: 'weeklyReportListController'
	        },
	        detailsPanel: blankDetailsView
	      };
	      weeklyReportViews = {
	        listPanel: weeklyReportListOnly.listPanel,
	        'detailsPanel@project': {
	          template: _utils.extractTemplate('#tmpl-report-weekly-details', _tmplReport),
	          controller: 'reportWeeklyDetailsController'
	        },
	        'detailsPanel@report': {
	          template: _utils.extractTemplate('#tmpl-report-weekly-details', _tmplReport),
	          controller: 'reportWeeklyDetailsController'
	        }
	      };
	      memberListOnly = {
	        'listPanel@project': {
	          template: _utils.extractTemplate('#tmpl-project-member-list', _tmplMember)
	        },
	        detailsPanel: blankDetailsView
	      };
	      commitListOnly = {
	        'listPanel@project': {
	          template: _utils.extractTemplate('#tmpl-commit-list', _tmplCommit),
	          controller: 'commitListController'
	        },
	        detailsPanel: blankDetailsView
	      };
	      gitlabListOnly = {
	        'listPanel@project': {
	          template: _utils.extractTemplate('#tmpl-gitlab-details', _templGitlab),
	          controller: 'gitlabController'
	        },
	        detailsPanel: blankDetailsView
	      };
	      assetsListOnly = {
	        listPanel: {
	          template: _utils.extractTemplate('#tmpl-assets-list', _tmplAssets),
	          controller: 'assetsListController'
	        },
	        detailsPanel: blankDetailsView
	      };
	      assetsPreviewerViews = {
	        listPanel: assetsListOnly.listPanel,
	        'detailsPanel@project': {
	          template: _utils.extractTemplate('#tmpl-assets-details', _tmplAssets),
	          controller: 'assetsDetailsController'
	        }
	      };
	      wikiViews = {
	        'listPanel': {
	          template: _utils.extractTemplate('#tmpl-wiki-list', _tmplWiki),
	          controller: 'issueListController'
	        },
	        'detailsPanel@wiki': issueViews['detailsPanel@project']
	      };
	      wikiListOnly = {
	        'listPanel': wikiViews.listPanel,
	        'detailsPanel@wiki': blankDetailsView
	      };
	      teamMemberListOnly = {
	        'listPanel': {
	          template: _utils.extractTemplate('#tmpl-team-member-list', _tmplTeam)
	        },
	        'detailsPanel': blankDetailsView
	      };
	      teamInviteListOnly = {
	        'listPanel': {
	          template: _utils.extractTemplate('#tmpl-team-invite-list', _tmplTeam)
	        },
	        'detailsPanel': blankDetailsView
	      };
	      $urlRouterProvider.otherwise('/myproject/all/issue/myself');
	      return $stateProvider.state('home', {
	        url: '/',
	        template: templates.home,
	        controller: 'homeController'
	      }).state('login', {
	        url: '/login',
	        template: _utils.extractTemplate('#tmpl-member-authority', _tmplAuthority),
	        controller: 'loginController'
	      }).state('invite', {
	        url: '/invite/:token',
	        template: _utils.extractTemplate('#tmpl-member-authority', _tmplAuthority),
	        controller: 'loginController'
	      }).state('project', {
	        abstract: true,
	        url: '/project/:project_id',
	        template: _utils.extractTemplate('#tmpl-project-layout', _tmplProject),
	        controller: 'projectController'
	      }).state('project.issue', {
	        url: '/issue',
	        views: issueListOnly
	      }).state('project.issue.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      }).state('project.version', {
	        url: '/version/:version_id',
	        abstract: true
	      }).state('project.issue_category', {
	        url: '/category/:category_id/issue',
	        views: {
	          listPanel: issueViews.listPanel
	        }
	      }).state('project.issue_category.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      }).state('project.version_category_issue', {
	        url: '/version/:version_id/category/:category_id/issue',
	        views: issueListOnly
	      }).state('project.version_category_issue.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      }).state('project.version_issue', {
	        url: '/version/:version_id/issue',
	        views: issueListOnly
	      }).state('project.version_issue.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      }).state('project.my_issue', {
	        url: '/issue/{myself:myself}',
	        views: issueListOnly
	      }).state('project.my_issue.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      }).state('project.version.my_issue', {
	        url: '/issue/{myself:myself}',
	        views: issueListOnly
	      }).state('project.version.my_issue.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      }).state('project.weekly_report', {
	        url: '/weekly-report',
	        views: weeklyReportListOnly
	      }).state('project.weekly_report.details', {
	        url: '/{start_time}~{end_time}',
	        views: weeklyReportViews
	      }).state('project.version_weekly_report', {
	        url: '/version/:version_id/weekly-report',
	        views: weeklyReportListOnly
	      }).state('project.version_weekly_report.details', {
	        url: '/{start_time}~{end_time}',
	        views: weeklyReportViews
	      }).state('project.member', {
	        url: '/member',
	        views: memberListOnly
	      }).state('project.version.member', {
	        url: '/member',
	        views: memberListOnly
	      }).state('project.commit', {
	        url: '/commit',
	        views: commitListOnly
	      }).state('project.version.commit', {
	        url: '/commit',
	        views: commitListOnly
	      }).state('project.gitlab', {
	        url: '/gitlab',
	        views: gitlabListOnly
	      }).state('project.version.gitlab', {
	        url: '/gitlab',
	        views: gitlabListOnly
	      }).state('project.version.commit.details', {
	        url: '/:commit_id?url',
	        views: {
	          'detailsPanel@project': {
	            template: _utils.extractTemplate('#tmpl-commit-details', _tmplCommit),
	            controller: 'commitDetailsController'
	          }
	        }
	      }).state('project.discussion', {
	        url: '/discussion',
	        views: discussionListOnly
	      }).state('project.discussion.details', {
	        url: '/{issue_id:\\d+}',
	        data: {
	          articleOnly: true
	        },
	        views: discussionViews
	      }).state('project.version_discussion', {
	        url: '/version/:version_id/discussion',
	        views: discussionListOnly
	      }).state('project.version_discussion.details', {
	        url: '/{issue_id:\\d+}',
	        data: {
	          articleOnly: true
	        },
	        views: discussionViews
	      }).state('project.document', {
	        url: '/document',
	        views: documentListOnly
	      }).state('project.version.document', {
	        url: '/document',
	        views: documentListOnly
	      }).state('project.version.document.details', {
	        url: '/:issue_id',
	        data: {
	          articleOnly: true
	        },
	        views: documentViews
	      }).state('project.document.details', {
	        url: '/:issue_id',
	        data: {
	          articleOnly: true
	        },
	        views: documentViews
	      }).state('project.test', {
	        url: '/test',
	        views: testListOnly
	      }).state('project.version.test', {
	        url: '/test',
	        views: testListOnly
	      }).state('project.version.test.details', {
	        url: '/:issue_id',
	        views: testViews
	      }).state('project.test.details', {
	        url: '/:issue_id',
	        views: testViews
	      }).state('project.assets', {
	        url: '/assets',
	        views: assetsListOnly
	      }).state('project.version_assets', {
	        url: '/version/:version_id/assets',
	        views: assetsListOnly
	      }).state('project.version_assets.previewer', {
	        url: '/previewer/:asset_id',
	        views: assetsPreviewerViews
	      }).state('project.assets.previewer', {
	        url: '/previewer/:asset_id',
	        views: assetsPreviewerViews
	      }).state('wiki', {
	        abstract: true,
	        url: '/wiki/:project_id',
	        template: _utils.extractTemplate('#tmpl-wiki-layout', _tmplWiki),
	        controller: 'projectController'
	      }).state('wiki.list', {
	        url: '/issue',
	        data: {
	          wiki: true
	        },
	        views: wikiListOnly
	      }).state('wiki.list_category', {
	        url: '/category/:category_id/issue',
	        data: {
	          wiki: true
	        },
	        views: wikiListOnly
	      }).state('wiki.list.details', {
	        url: '/{issue_id:\\d+}',
	        data: {
	          wiki: true,
	          articleOnly: true
	        },
	        views: wikiViews
	      }).state('wiki.list_category.details', {
	        url: '/{issue_id:\\d+}',
	        data: {
	          wiki: true,
	          articleOnly: true
	        },
	        views: wikiViews
	      }).state('team', {
	        abstract: true,
	        url: '/team/:team_id',
	        template: _utils.extractTemplate('#tmpl-team-layout', _tmplTeam),
	        controller: 'teamController'
	      }).state('team.list', {
	        url: '/list',
	        views: teamMemberListOnly
	      }).state('team.invite', {
	        url: '/invite',
	        views: teamInviteListOnly
	      }).state('report', {
	        abstract: true,
	        url: '/report/:team_id',
	        template: _utils.extractTemplate('#tmpl-report-layout', _tmplReport),
	        controller: 'reportController'
	      }).state('report.list', {
	        url: '/weekly-report',
	        views: weeklyReportListOnly
	      }).state('report.list.details', {
	        url: '/{start_time}~{end_time}',
	        views: weeklyReportViews
	      }).state('myproject', {
	        abstract: true,
	        url: '/myproject',
	        template: _utils.extractTemplate('#tmpl-my-project-layout', _tmplProject),
	        controller: 'myProjectController'
	      }).state('myproject.list', {
	        url: '/:project_id'
	      }).state('myproject.list.issue', {
	        url: '/issue/{myself:myself}',
	        views: issueListOnly
	      }).state('myproject.list.issue.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      }).state('myfollow', {
	        abstract: true,
	        url: '/myfollow',
	        template: _utils.extractTemplate('#tmpl-my-follow-layout', _tmplProject),
	        controller: 'myFollowController'
	      }).state('myfollow.list', {
	        url: '/:project_id'
	      }).state('myfollow.list.issue', {
	        url: '/issue/{follow:follow}',
	        views: issueListOnly
	      }).state('myfollow.list.issue.details', {
	        url: '/{issue_id:\\d+}',
	        views: issueViews
	      });
	    }
	  ]);
	  return _app.run([
	    '$rootScope', '$state', 'API', function($rootScope, $state, API) {
	      return $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
	        if ($rootScope.__member) {
	          return;
	        }
	        event.preventDefault();
	        return API.session().retrieve().then(function(result) {
	          $rootScope.__member = result;
	          return $state.go(toState, toParams);
	        });
	      });
	    }
	  ]);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 130 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div>  <textarea id=\"tmpl-wiki-layout\">\n        <div class=\"frame project-view wiki-view\">\n            <global-message ng-show=\"false\"></global-message>\n            <header-global></header-global>\n            <div class=\"container\">\n                \n                <div class=\"master-panel\">\n                    \n                    <div class=\"project-menu\">\n                        <ul class=\"master-menu\" project-menu-highlight>\n                            <li class=\"issue-category\">\n                                <div class=\"inner\">\n                                    <div class=\"title\">\n                                        <label>\n                                            <a href=\"/{{project | projectLink}}/issue\">全部</a>\n                                        </label>\n                                    </div>\n                                    <project-category-menu data-project-id=\"{{project.id}}\"></project-category-menu>\n                                </div>\n                            </li>\n                        </ul>\n                        <project-menu-bar></project-menu-bar>\n                    </div>\n                </div>\n\n\n                <project-salve-panel></project-salve-panel>\n            </div>\n        </div>\n    </textarea>   <textarea id=\"tmpl-wiki-list\">\n        <div class=\"issue-list list\">\n            <h3>{{title}}<span class=\"badge\">({{undoneIssues.pagination.recordCount}})</span></h3>\n            <div class=\"create\">\n                <input type=\"text\" placeholder=\"来，想说点什么？\" autofocus issue-quick-editor ng-keydown=\"onKeyDown($event)\" data-category=\"1\" ng-show=\"showQuickEditor\" data-tag=\"issue\"/>\n            </div>\n\n            \n            <div class=\"list\">\n                <ul class=\"details\">\n                    <li ng-repeat=\"issue in undoneIssues.items\" class=\"row\" id=\"issue-list-{{issue.id}}\">\n                        <issue-list-cell></issue-list-cell>\n                    </li>\n                </ul>\n\n                <div ng-show=\"undoneIssues.items.length == 0\" class=\"empty\">\n                    咦，这里面好像什么都没有呢\n                </div>\n            </div>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("wiki-all.html",v1)}]);
	module.exports=v1;

/***/ },
/* 131 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div> <textarea id=\"tmpl-gitlab-details\">\n        <div class=\"gitlab-panel\">\n            <gitlab-list bean=\"bean\" name=\"gitlab\"></gitlab-list>\n            <gitlab-add-to-project bean=\"bean\" name=\"gitlab_add_form\"></gitlab-add-to-project>\n            <gitlab-create-for-project bean=\"bean\" name=\"gitlab_create_form\"></gitlab-create-for-project>\n        </div>\n    </textarea> </div>";
	ngModule.run(["$templateCache",function(c){c.put("gitlab.html",v1)}]);
	module.exports=v1;

/***/ },
/* 132 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"inner-view\"> <article class=\"issue-details\" issue-details id=\"issue-details\"> <div class=\"not-found\" ng-show=\"notFound\"> <p> <i class=\"icon\"></i>\n404 Not Found </p> </div> <div ng-show=\"assetPreviewer.show\" class=\"asset-unwind-container\"> <h3>{{assetPreviewer.bundleName}}\n<button class=\"default transparent\" ng-click=\"onClickCloseAssetPreviewer($event)\"> <i class=\"small icon\"></i> </button> </h3> <asset-bundle-unwind></asset-bundle-unwind> </div> <div ng-show=\"!notFound\" class=\"full\"> <div style=\"height: 100%; position:relative\">  <header> <div class=\"project-name\"> <i class=\"small icon cell\"></i> <label>{{project.title}}</label> </div> <div class=\"owner\" dropdown data-name=\"issue:owner\" data-text-container=\"label.display\" data-selected=\"{{issue.owner}}\" ng-hide=\"articleOnly\" data-empty=\"责任人\"> <i class=\"icon small cell\"></i> <label class=\"display\">{{issue.owner_name || '未指定'}}</label> <project-member-dropdown data-items=\"{{projectMember}}\"></project-member-dropdown> </div> <div class=\"finish-date\" ng-hide=\"articleOnly\"> <button datetime-picker data-name=\"plan_finish_time\" data-date=\"{{issue.plan_finish_time}}\"> <i class=\"icon small cell\"></i>\n<span> {{(issue.plan_finish_time | date:'yyyy-MM-dd') || '完成日期' }}</span> </button> </div> <div class=\"priority\" dropdown data-name=\"issue:priority\" data-text-container=\"label.display\" data-selected=\"{{issue.priority}}\" ng-hide=\"articleOnly\" data-empty=\"请选择优先级\" title=\"请选择优先级\"> <i class=\"icon small cell priority-{{issue.priority}}\"></i> <label class=\"display\">中</label> <issue-priority-dropdown data-project-id=\"{{issue.project_id}}\" data-id=\"{{issue.id}}\"></issue-priority-dropdown> </div> <div class=\"category text-only\" dropdown data-name=\"issue:category\" data-text-container=\"label.display\" data-selected=\"{{issue.category_id}}\" title=\"请选择分类\" data-empty=\"请选择分类\"> <i class=\"icon small cell dummy\"></i> <label class=\"display text-overflow\">选择分类</label> <project-category-dropdown data-project-id=\"{{issue.project_id}}\" data-id=\"{{issue.category_id}}\"></project-category-dropdown> </div> <div class=\"tag text-only\" dropdown data-name=\"issue:tag\" data-text-container=\"label.display\" data-selected=\"{{issue.tag}}\" title=\"请选择类型\" data-empty=\"请选择类型\" ng-show=\"articleOnly\"> <i class=\"icon small cell dummy\"></i> <label class=\"display text-overflow\">任务类型</label> <issue-tag-dropdown></issue-tag-dropdown> </div> <div class=\"version text-only\" dropdown data-name=\"issue:version\" data-text-container=\"label.display\" data-selected=\"{{issue.version_id}}\" title=\"请选择版本\" ng-hide=\"articleOnly\" data-empty=\"请选择版本\"> <i class=\"icon small cell dummy\"></i> <label class=\"display text-overflow\">选择版本</label> <project-version-dropdown data-show-more=\"false\"></project-version-dropdown> </div> </header>  <div class=\"issue panel\" ng-click=\"onClickIssue($event)\"> <div class=\"title\" issue-status-dropdown-action> <div class=\"issue-status\" ng-click=\"onClickStatus($event, issue)\"> <i class=\"issue-status icon small\" ng-class=\"issue.status\"></i> </div> <input type=\"text\" class=\"text\" ng-show=\"editing\" ng-model=\"issue.title\"/> <h3 ng-show=\"!editing\">{{issue.title | removeCommand | removeTag}}</h3> <div class=\"toolbar\"> <a ng-click=\"onClickSplit($event, data)\" href=\"javascript:void(0)\" class=\"edit\"> <i class=\"icon split\"></i>\n<span class=\"tollbar-text\">拆分</span> </a>\n<a ng-click=\"onClickEdit($event, data)\" href=\"javascript:void(0)\" class=\"edit\"> <i class=\"icon edit\"></i>\n<span class=\"tollbar-text\">编辑</span> </a>\n<a ng-click=\"onClickDelete($event, data)\" href=\"javascript:void(0)\" class=\"delete\"> <i class=\"icon delete\"></i>\n<span class=\"tollbar-text\">删除</span> </a> </div> <issue-status-dropdown></issue-status-dropdown> </div> <div class=\"sub-title\"> <span class=\"creator\">{{issue.creator_name || '创建者'}}</span> 创建于\n<span class=\"timestamp\">{{issue.timestamp | date: 'yyyy-MM-dd HH:mm'}}</span>\n<span class=\"id\">#{{issue.id}}</span>\n<span class=\"timestamp\" ng-show=\"issue.plan_finish_time\">计划完成：{{issue.plan_finish_time | date}}</span>\n<span class=\"timestamp\" ng-show=\"issue.finish_time\">实际完成：{{issue.finish_time | date}}</span> <window-change-button ng-show=\"needchange\"></window-change-button> </div> <issue-follow-members></issue-follow-members> <issue-split ng-show=\"!editing\"></issue-split> <div ng-if=\"issue.tag!='form'\" class=\"content row editor-style\" ng-bind-html=\"issue.content | unsafe\" ng-show=\"!editing\" full-size-image-previewer></div> <div ng-show=\"editing\"> <editor data-name=\"issue\" data-show-always-top=\"{{showAlwaysTop}}\" data-upload-url=\"{{uploadUrl}}\"></editor> </div> <issue-form ng-if=\"issue.tag=='form'\" class=\"issue-form view\" data-type=\"1\" data-editflag=\"-1\" data-change=\"-1\"></issue-form> </div>  <div class=\"assets panel\"> <div class=\"title\"> <i class=\"icon small\"></i> <h3>附件</h3> </div> <div class=\"content\">  <asset-thumbnails></asset-thumbnails> </div> </div>  <div class=\"comments panel\"> <div class=\"title\"> <i class=\"icon small\"></i> <h3>评论</h3> </div> <div class=\"content\"> <comment-list></comment-list> </div> </div>  <div class=\"commits panel\" ng-hide=\"articleOnly\"> <div class=\"title\"> <i class=\"icon small\"></i> <h3>代码记录</h3> </div> <div class=\"content\"> <commit-issue-list></commit-issue-list> </div> </div>  <div class=\"logs panel\"> <div class=\"title\"> <i class=\"icon small\"></i> <h3>操作日志</h3> </div> <div class=\"content\"> <issue-log></issue-log> </div> </div> </div> </div> </article> <comment-editor data-upload-url=\"{{uploadUrl}}\"></comment-editor> </div>";
	ngModule.run(["$templateCache",function(c){c.put("details.html",v1)}]);
	module.exports=v1;

/***/ },
/* 133 */
/***/ function(module, exports) {

	var angular=window.angular,ngModule;
	try {ngModule=angular.module(["ng"])}
	catch(e){ngModule=angular.module("ng",[])}
	var v1="<div class=\"frame home-view full\"> <header-global> </header-global> <div class=\"content-view\"> <project-editor></project-editor> <div class=\"project-view\"> <h3 class=\"title\">我的项目</h3> <project-tiles></project-tiles> </div> </div> </div>";
	ngModule.run(["$templateCache",function(c){c.put("home.html",v1)}]);
	module.exports=v1;

/***/ }
]));