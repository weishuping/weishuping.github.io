/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
    var works = {
        "company_info": {
            "begin_date": "2016-07-11",
            "end_date": "至今",
            "title": "用友网络科技股份有限公司"
        },
        "experience": [{
            "title": "人力资源核心人力",
            "memo": "软件开发",
            "text": "主要工作是"
        }, {
            "title": "移动端人员信息和组织查询",
            "memo": "软件开发",
            "text": "主要工作是"
        }, {
            "title": "员工入职微信小程序",
            "memo": "软件开发",
            "text": "主要工作是"
        }]
    };
    var skills = [{
        "name": "HTML(5)",
        "ability": "熟练掌握HTML5语义化，规范代码"
    }, {
        "name": "CSS(3)",
        "ability": "熟练掌握HTML5语义化，规范代码"
    }];
    Vue.component('workbground', {
        template: "<div class=\"background\">\n            <p class=\"company-info\">{{company_info.title}} (<span>{{company_info.begin_date}}</span> - <span>{{company_info.end_date}}</span)</p>\n            <div v-for=\"arr in dataWork\" class=\"iterator\">\n            <p>{{arr.title}}</p>\n            <h5>{{arr.memo}}</h5>\n            <div class=\"long-text\">{{arr.text}}</div>\n            </div></div>",
        data: function data() {
            return {
                dataWork: works.experience,
                company_info: works.company_info
            };
        }
    });
    Vue.component('skill', {
        template: "<div>\n                    <div v-for=\"skill in dataSki\">\n                    <label>{{skill.name}}</label>\n                    <span> {{skill.ability}}</span>\n                    </div>\n                </div>",
        //template: '<div><div v-for="arr in dataEdu" class="iterator">{{arr.text}}</div></div>',
        data: function data() {
            return {
                dataSki: skills
            };
        }
    });

    var app = {};

    app.skills = new Vue({
        el: '#work'
    });
    app.skills = new Vue({
        el: '#skill'
    });
})();

/***/ })
/******/ ]);