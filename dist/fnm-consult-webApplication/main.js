(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n/*\n    DEMO STYLE\n*/\nbody {\n    font-family: 'Poppins', sans-serif;\n    background: #fafafa;\n}\np {\n    font-family: 'Poppins', sans-serif;\n    font-size: 1.1em;\n    font-weight: 300;\n    line-height: 1.7em;\n    color: #999;\n}\na, a:hover, a:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n.navbar {\n    padding: 15px 10px;\n    background: #fff;\n    border: none;\n    border-radius: 0;\n    margin-bottom: 40px;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n}\n.navbar-btn {\n    box-shadow: none;\n    outline: none !important;\n    border: none;\n}\n.line {\n    width: 100%;\n    height: 1px;\n    border-bottom: 1px dashed #ddd;\n    margin: 40px 0;\n}\n/* ---------------------------------------------------\n    SIDEBAR STYLE\n----------------------------------------------------- */\n.wrapper {\n    display: flex;\n    align-items: stretch;\n    -webkit-perspective: 1500px;\n            perspective: 1500px;\n}\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    background: #7386D5;\n    color: #fff;\n    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);\n    -webkit-transform-origin: bottom left;\n            transform-origin: bottom left;\n}\n#sidebar.active {\n    margin-left: -250px;\n    -webkit-transform: rotateY(100deg);\n            transform: rotateY(100deg);\n}\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #6d7fcc;\n}\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    color: #7386D5;\n    background: #fff;\n}\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #6d7fcc;\n}\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\na[aria-expanded=\"false\"]::before, a[aria-expanded=\"true\"]::before {\n    content: '\\e259';\n    display: block;\n    position: absolute;\n    right: 20px;\n    font-family: 'Glyphicons Halflings';\n    font-size: 0.6em;\n}\na[aria-expanded=\"true\"]::before {\n    content: '\\e260';\n}\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #6d7fcc;\n}\nul.CTAs {\n    padding: 20px;\n}\nul.CTAs a {\n    text-align: center;\n    font-size: 0.9em !important;\n    display: block;\n    border-radius: 5px;\n    margin-bottom: 5px;\n}\na.download {\n    background: #fff;\n    color: #7386D5;\n}\na.article, a.article:hover {\n    background: #6d7fcc !important;\n    color: #fff !important;\n}\n/* ---------------------------------------------------\n    CONTENT STYLE\n----------------------------------------------------- */\n#content {\n    padding: 20px;\n    min-height: 100vh;\n    transition: all 0.3s;\n}\n#sidebarCollapse {\n    width: 40px;\n    height: 40px;\n    background: #f5f5f5;\n}\n#sidebarCollapse span {\n    width: 80%;\n    height: 2px;\n    margin: 0 auto;\n    display: block;\n    background: #555;\n    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);\n    transition-delay: 0.2s;\n}\n#sidebarCollapse span:first-of-type {\n    -webkit-transform: rotate(45deg) translate(2px, 2px);\n            transform: rotate(45deg) translate(2px, 2px);\n}\n#sidebarCollapse span:nth-of-type(2) {\n    opacity: 0;\n}\n#sidebarCollapse span:last-of-type {\n    -webkit-transform: rotate(-45deg) translate(1px, -1px);\n            transform: rotate(-45deg) translate(1px, -1px);\n}\n#sidebarCollapse.active span {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n    margin: 5px auto;\n}\n/* ---------------------------------------------------\n    MEDIAQUERIES\n----------------------------------------------------- */\n@media (max-width: 768px) {\n    #sidebar {\n        margin-left: -250px;\n        -webkit-transform: rotateY(90deg);\n                transform: rotateY(90deg);\n    }\n    #sidebar.active {\n        margin-left: 0;\n        -webkit-transform: none;\n                transform: none;\n    }\n    #sidebarCollapse span:first-of-type,\n    #sidebarCollapse span:nth-of-type(2),\n    #sidebarCollapse span:last-of-type {\n        -webkit-transform: none;\n                transform: none;\n        opacity: 1;\n        margin: 5px auto;\n    }\n    #sidebarCollapse.active span {\n        margin: 0 auto;\n    }\n    #sidebarCollapse.active span:first-of-type {\n        -webkit-transform: rotate(45deg) translate(2px, 2px);\n                transform: rotate(45deg) translate(2px, 2px);\n    }\n    #sidebarCollapse.active span:nth-of-type(2) {\n        opacity: 0;\n    }\n    #sidebarCollapse.active span:last-of-type {\n        -webkit-transform: rotate(-45deg) translate(1px, -1px);\n                transform: rotate(-45deg) translate(1px, -1px);\n    }\n\n}\n/* ---------------------------------------------------\n    TITLEBAR\n----------------------------------------------------- */\n.title-bar {\n\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n            <!-- Sidebar Holder -->\n            <nav id=\"sidebar\">\n                <div class=\"sidebar-header\">\n                    <h3>FNM Consult App</h3>\n                </div>\n\n                <ul class=\"list-unstyled components\">\n                    <li class=\"active\">\n                        <a href=\"#\">Home</a>\n                    </li>\n                    <li>\n                        <a href=\"#\">About</a>\n                        <a href=\"#statisticSubmenu\" data-toggle=\"collapse\" aria-expanded=\"false\">Statistics</a>\n                        <ul class=\"collapse list-unstyled\" id=\"statisticSubmenu\">\n                            <li><a href=\"#\">Page 1</a></li>\n                            <li><a href=\"#\">Page 2</a></li>\n                        </ul>\n                    </li>\n                    <li>\n                        <a href=\"#\">Contact</a>\n                    </li>\n                </ul>\n            </nav>\n\n            <!-- Page Content Holder -->\n            <div id=\"content\">\n\n                <nav class=\"navbar navbar-default\">\n                    <div class=\"container-fluid\">\n\n                        <div class=\"navbar-header\">\n                            <button type=\"button\" id=\"sidebarCollapse\" class=\"navbar-btn\">\n                                <span></span>\n                                <span></span>\n                                <span></span>\n                            </button>\n                        </div>\n\n                        <div class=\"title-bar\">\n                          <!--Modern community Ghent - FNM Consultation application-->\n                        </div>\n\n                        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                            <ul class=\"nav navbar-nav navbar-right\">\n                                <li><a href=\"#\">Page</a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n\n                <h2>Lorem ipsum dolor sit</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n                <div class=\"line\"></div>\n\n                <h2>Lorem Ipsum Dolor</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n                <div class=\"line\"></div>\n\n                <h2>Lorem Ipsum Dolor</h2>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n                <div class=\"line\"></div>\n\n                <h3>Lorem Ipsum Dolor</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n            </div>\n        </div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dean/fnm-consult/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map