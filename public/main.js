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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n\n<app-aboutme></app-aboutme>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'my-web';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/routes */ "./src/app/router/routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/aboutme/aboutme.component */ "./src/app/components/aboutme/aboutme.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var _components_portfolio_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/portfolio/project/project.component */ "./src/app/components/portfolio/project/project.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_7__["AboutmeComponent"],
                _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _components_portfolio_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__["LogoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_router_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"]),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/aboutme/aboutme.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutme/aboutme.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quote-box\">\n  <div class=\"quote-content\">\n    Hi, I am Ido Lago - a Full Stack Developer from Qiryat Ono, Israel. <br/>\n    I like to code things from scratch, and enjoy bringing ideas to life in the browser. <br/>\n    <!-- My passion is to establish things that will benefit the general public in everyday activities. -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/aboutme/aboutme.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/aboutme/aboutme.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quote-box {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 15px;\n  margin-top: 25px;\n  box-shadow: 4px 4px 10px black;\n  width: 100vw; }\n  .quote-box .quote-content {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    text-align: center;\n    line-height: 1.9;\n    letter-spacing: 0.6px;\n    font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRtZVxcYWJvdXRtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGNvbW1vblxcc3R5bGUtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQ0NGcUM7RURHckMsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwrQkNOMkI7RURPM0IsYUFBWSxFQVVmO0VBZkQ7SUFRUSxzQ0FBcUM7SUFDckMsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsc0JBQXFCO0lBQ3JCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL2Fib3V0bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29tbW9uL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5xdW90ZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1iYWNrZ3JvdW5kO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgICAucXVvdGUtY29udGVudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn0iLCIkYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IGJsYWNrO1xyXG4kYm94LWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsiXX0= */"

/***/ }),

/***/ "./src/app/components/aboutme/aboutme.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/aboutme/aboutme.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
    };
    AboutmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/components/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.scss */ "./src/app/components/aboutme/aboutme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div class=\"to-portfolio-box\">\r\n        <div class=\"content\">\r\n            <div class=\"header\">don't hold back!</div>\r\n            <div class=\"paragraph\">feel free to take a look at my latest projects.</div>\r\n            <a [routerLink]=\"portfolioPath\" class=\"btn\">\r\n                <div class=\"content-box\">\r\n                    <div class=\"content\">view portfolio</div>\r\n                    <img src=\"assets/right-chevron.svg\" class=\"right-chevron\">\r\n                </div>\r\n            </a>  \r\n        </div>\r\n        <div class=\"image-box\">\r\n            <img src=\"assets/screens.jpg\" class=\"screens-img\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"keepintouch-box\">\r\n    <div class=\"content\">\r\n        keep in touch:\r\n    </div>\r\n    <div class=\"links\">\r\n        <a target=\"_blank\" href=\"https://www.linkedin.com/in/ido-lago-8b332b164/\"><img src=\"assets/linkedin.svg\" class=\"social linkedin\"></a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/ido.lago\"><img src=\"assets/facebook.svg\" class=\"social facebook\"></a>\r\n        <a target=\"_blank\" href=\"https://github.com/idolago94\"><img src=\"assets/github.svg\" class=\"social github\"></a>\r\n        <!-- <a target=\"_blank\" href=\"\"><img src=\"assets/gmail.svg\" class=\"social gmail\"></a> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  padding: 45px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\n\n.to-portfolio-box {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  box-shadow: 0 0 40px 10px black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 30px;\n  width: 90%; }\n\n.to-portfolio-box:hover .content .btn {\n    right: -40%; }\n\n.to-portfolio-box:hover .screens-img {\n    -webkit-transform: scale(10%);\n            transform: scale(10%); }\n\n.to-portfolio-box .content {\n    font-family: 'Oswald', sans-serif;\n    position: relative;\n    margin-right: 20px; }\n\n.to-portfolio-box .content .header {\n      font-size: 40px;\n      text-transform: uppercase;\n      font-weight: bold;\n      letter-spacing: 2px; }\n\n.to-portfolio-box .content .paragraph {\n      text-transform: capitalize;\n      width: 220px;\n      margin-left: 20px;\n      font-size: 27px;\n      color: rgba(0, 0, 0, 0.7); }\n\n.to-portfolio-box .content .btn {\n      position: absolute;\n      bottom: 5%;\n      right: -30%;\n      padding: 7px 22px;\n      border: none;\n      border-radius: 5px;\n      background-image: -webkit-gradient(linear, left top, right top, from(#06BC9B), to(#1ba49c));\n      background-image: linear-gradient(to right, #06BC9B, #1ba49c);\n      box-shadow: 3px 3px 5px black;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      cursor: pointer;\n      text-decoration: none;\n      color: black; }\n\n.to-portfolio-box .content .btn .content-box {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: baseline;\n                align-items: baseline; }\n\n.to-portfolio-box .content .btn .content-box .content {\n          font-size: 20px;\n          text-transform: capitalize; }\n\n.to-portfolio-box .content .btn .content-box .right-chevron {\n          height: 15px;\n          margin-left: 10px; }\n\n.to-portfolio-box .image-box {\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n\n.to-portfolio-box .image-box .screens-img {\n      border-radius: 50px;\n      width: 100%; }\n\n.keepintouch-box {\n  height: 55px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(255, 255, 255, 0.8);\n  box-shadow: 4px 4px 10px black;\n  border-top-right-radius: 99px;\n  border-bottom-right-radius: 99px;\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 25px; }\n\n.keepintouch-box .content {\n    font-family: 'Oswald', sans-serif;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 22px;\n    letter-spacing: 1.5px;\n    margin-right: 20px; }\n\n.keepintouch-box .links .social {\n    height: 30px;\n    margin-left: 18px;\n    cursor: pointer;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n\n.keepintouch-box .links .social:active {\n      -webkit-transform: translateY(5px);\n              transform: translateY(5px); }\n\n@media screen and (max-width: 1000px) {\n  .box .to-portfolio-box .content .btn {\n    position: relative;\n    display: block;\n    top: 0;\n    left: 135px; } }\n\n@media screen and (max-width: 800px) {\n  .box .to-portfolio-box {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse; }\n    .box .to-portfolio-box .content .btn {\n      left: 0;\n      margin-top: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGNvbW1vblxcc3R5bGUtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBYTtFQUFiLGNBQWE7RUFDYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QiwwQkFBbUI7VUFBbkIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksMkNDVHFDO0VEVXJDLG9CQUFtQjtFQUNuQixnQ0FBK0I7RUFDL0IscUJBQWE7RUFBYixjQUFhO0VBQ2IsMEJBQThCO1VBQTlCLCtCQUE4QjtFQUM5QixjQUFhO0VBQ2IsV0FBVSxFQTJFYjs7QUFsRkQ7SUFZWSxZQUFXLEVBQ2Q7O0FBYlQ7SUFnQlksOEJBQXFCO1lBQXJCLHNCQUFxQixFQUN4Qjs7QUFqQlQ7SUFxQlEsa0NBQWlDO0lBQ2pDLG1CQUFrQjtJQUNsQixtQkFBa0IsRUErQ3JCOztBQXRFTDtNQTBCWSxnQkFBZTtNQUNmLDBCQUF5QjtNQUN6QixrQkFBaUI7TUFDakIsb0JBQW1CLEVBQ3RCOztBQTlCVDtNQWlDWSwyQkFBMEI7TUFDMUIsYUFBWTtNQUNaLGtCQUFpQjtNQUNqQixnQkFBZTtNQUNmLDBCQUF5QixFQUM1Qjs7QUF0Q1Q7TUF5Q1ksbUJBQWtCO01BQ2xCLFdBQVU7TUFDVixZQUFXO01BQ1gsa0JBQWlCO01BQ2pCLGFBQVk7TUFDWixtQkFBa0I7TUFDbEIsNEZBQTJEO01BQTNELDhEQUEyRDtNQUMzRCw4QkFBNkI7TUFDN0IsNEJBQW1CO01BQW5CLG9CQUFtQjtNQUNuQixnQkFBZTtNQUNmLHNCQUFxQjtNQUNyQixhQUFZLEVBZ0JmOztBQXBFVDtRQXVEZ0IscUJBQWE7UUFBYixjQUFhO1FBQ2IsNEJBQXFCO2dCQUFyQixzQkFBcUIsRUFXeEI7O0FBbkViO1VBMkRvQixnQkFBZTtVQUNmLDJCQUEwQixFQUM3Qjs7QUE3RGpCO1VBZ0VvQixhQUFZO1VBQ1osa0JBQWlCLEVBQ3BCOztBQWxFakI7SUF5RVEsb0JBQVk7WUFBWixhQUFZLEVBTWY7O0FBL0VMO01BNEVZLG9CQUFtQjtNQUNuQixZQUFXLEVBQ2Q7O0FBTVQ7RUFDSSxhQUFZO0VBQ1osMkJBQWtCO0VBQWxCLHdCQUFrQjtFQUFsQixtQkFBa0I7RUFDbEIsMkNDL0ZxQztFRGdHckMsK0JDakcyQjtFRGtHM0IsOEJBQTZCO0VBQzdCLGlDQUFnQztFQUNoQyxjQUFhO0VBQ2IscUJBQWE7RUFBYixjQUFhO0VBQ2IsMEJBQW1CO1VBQW5CLG9CQUFtQjtFQUNuQixvQkFBbUIsRUF3QnRCOztBQWxDRDtJQWFRLGtDQUFpQztJQUNqQywwQkFBeUI7SUFDekIsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2Ysc0JBQXFCO0lBQ3JCLG1CQUNKLEVBQUM7O0FBbkJMO0lBd0JZLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsZ0JBQWU7SUFDZiw0QkFBbUI7SUFBbkIsb0JBQW1CLEVBS3RCOztBQWhDVDtNQThCZ0IsbUNBQTBCO2NBQTFCLDJCQUEwQixFQUM3Qjs7QUFLYjtFQUNJO0lBQ0ksbUJBQWtCO0lBQ2xCLGVBQWM7SUFDZCxPQUFNO0lBQ04sWUFBVyxFQUNkLEVBQUE7O0FBR0w7RUFDSTtJQUNJLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDZCQUE4QjtJQUE5QiwrQkFBOEI7WUFBOUIsK0JBQThCLEVBTWpDO0lBUkQ7TUFLUSxRQUFPO01BQ1AsaUJBQWdCLEVBQ25CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9jb21tb24vc3R5bGUtdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNDVweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvLXBvcnRmb2xpby1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1iYWNrZ3JvdW5kO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDEwcHggYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcblxyXG4gICAgICAgIC5jb250ZW50IC5idG4ge1xyXG4gICAgICAgICAgICByaWdodDogLTQwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zY3JlZW5zLWltZyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICAgICAgcmlnaHQ6IC0zMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAyMnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwNkJDOUIsIzFiYTQ5Yyk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnJpZ2h0LWNoZXZyb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlLWJveCB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAuc2NyZWVucy1pbWcge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn1cclxuXHJcbi5rZWVwaW50b3VjaC1ib3gge1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1iYWNrZ3JvdW5kO1xyXG4gICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOTlweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA5OXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweFxyXG4gICAgfVxyXG5cclxuICAgIC5saW5rcyB7XHJcblxyXG4gICAgICAgIC5zb2NpYWwge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcblxyXG4gICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAuYm94IC50by1wb3J0Zm9saW8tYm94IC5jb250ZW50IC5idG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMTM1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuYm94IC50by1wb3J0Zm9saW8tYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQgLmJ0biB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGJveC1zaGFkb3c6IDRweCA0cHggMTBweCBibGFjaztcclxuJGJveC1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router/paths */ "./src/app/router/paths.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.portfolioPath = "/" + src_app_router_paths__WEBPACK_IMPORTED_MODULE_1__["PORTFOLIO"];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-box\">\n  <div class=\"logo\">{{ \"{IL}\" }}</div>\n</div>"

/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  border-radius: 999px;\n  background-image: -webkit-gradient(linear, left top, right top, from(#06BC9B), to(#1ba49c));\n  background-image: linear-gradient(to right, #06BC9B, #1ba49c);\n  box-shadow: 0 0 7px darkgreen;\n  height: 85px;\n  width: 85px;\n  display: -webkit-box;\n  display: flex; }\n  .logo-box .logo {\n    height: 85%;\n    margin: auto;\n    font-family: 'Merriweather', serif;\n    font-size: 35px;\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n    color: white;\n    -webkit-box-align: center;\n            align-items: center;\n    font-weight: 600; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9nb1xcbG9nby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFvQjtFQUNwQiw0RkFBMkQ7RUFBM0QsOERBQTJEO0VBQzNELDhCQUE2QjtFQUM3QixhQUFZO0VBQ1osWUFBVztFQUNYLHFCQUFhO0VBQWIsY0FBYSxFQWNoQjtFQXBCRDtJQVNRLFlBQVc7SUFDWCxhQUFZO0lBRVosbUNBQWtDO0lBQ2xDLGdCQUFlO0lBQ2YsYUFBWTtJQUNaLHFCQUFhO0lBQWIsY0FBYTtJQUNiLGFBQVk7SUFDWiwwQkFBbUI7WUFBbkIsb0JBQW1CO0lBQ25CLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tYm94IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwNkJDOUIsIzFiYTQ5Yyk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgN3B4IGRhcmtncmVlbjtcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgaGVpZ2h0OiA4NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrap\">\n  <div class=\"nav\">\n    <app-logo></app-logo>\n    <div class=\"tabs-box\">\n      <a [routerLink]=\"appPaths.HOME\" class=\"tab-box\"><div class=\"tab\">home</div></a>\n      <a [routerLink]=\"appPaths.PORTFOLIO\" class=\"tab-box\"><div class=\"tab\">portfolio</div></a>\n      <a class=\"tab-box\"><div class=\"tab\">about</div></a>\n      <a class=\"tab-box\"><div class=\"tab\">contact</div></a>\n    </div>\n  </div>\n\n  <div class=\"nav-mobile\" [class.open]=\"openMobile\">\n    <div (click)=\"mobileNavClicked()\" class=\"icon-box\">\n      <img src=\"assets/menu.svg\" class=\"icon\">\n    </div>\n\n    <div class=\"tabs-box\">\n      <div (click)=\"mobileNavClicked()\" class=\"close-box tab-box\">\n        <img src=\"assets/close.svg\" class=\"close\">\n      </div>\n      <a [routerLink]=\"appPaths.HOME\" class=\"tab-box\"><img src=\"assets/home-mobile.svg\" class=\"tab\"></a>\n      <a [routerLink]=\"appPaths.PORTFOLIO\" class=\"tab-box\"><img src=\"assets/portfolio-mobile.svg\" class=\"tab\"></a>\n      <a class=\"tab-box\"></a>\n      <a class=\"tab-box\"></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrap {\n  -webkit-filter: drop-shadow(4px 4px 10px black);\n          filter: drop-shadow(4px 4px 10px black); }\n  .nav-wrap .nav {\n    background-color: white;\n    height: 110px;\n    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 100%);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  .nav-wrap .nav app-logo {\n      margin: 10px 1.5%; }\n  .nav-wrap .nav .tabs-box {\n      display: -webkit-box;\n      display: flex;\n      height: 77px;\n      margin-right: 20px; }\n  .nav-wrap .nav .tabs-box .tab-box {\n        height: 100%;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        text-decoration: none; }\n  .nav-wrap .nav .tabs-box .tab-box .tab {\n          padding: 10px 20px;\n          font-size: 20px;\n          font-family: 'Oswald', sans-serif;\n          text-transform: capitalize;\n          letter-spacing: 1px;\n          -webkit-transition: all .3s;\n          transition: all .3s;\n          color: rgba(128, 125, 125, 0.76);\n          position: relative;\n          cursor: pointer; }\n  .nav-wrap .nav .tabs-box .tab-box .tab:hover {\n            -webkit-transform: skew(13deg, 13deg);\n                    transform: skew(13deg, 13deg); }\n  .nav-wrap .nav .tabs-box .tab-box .tab:active {\n            -webkit-transform: skew(13deg, 13deg) translateY(5px);\n                    transform: skew(13deg, 13deg) translateY(5px); }\n  .nav-wrap .nav-mobile {\n    display: none; }\n  @media screen and (max-width: 550px) {\n  .nav-wrap .nav .tabs-box {\n    display: none; }\n  .nav-wrap .nav-mobile {\n    display: block;\n    position: absolute;\n    display: -webkit-box;\n    display: flex;\n    right: -38px;\n    -webkit-transition: all .5s;\n    transition: all .5s;\n    top: 10px; }\n    .nav-wrap .nav-mobile.open {\n      right: -5px; }\n      .nav-wrap .nav-mobile.open .icon-box {\n        opacity: 0; }\n      .nav-wrap .nav-mobile.open .tabs-box {\n        visibility: visible; }\n    .nav-wrap .nav-mobile .icon-box {\n      background-color: gray;\n      border-radius: 99px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      padding: 8px;\n      margin: 5px;\n      max-height: 41px;\n      -webkit-transition: all .5s;\n      transition: all .5s; }\n      .nav-wrap .nav-mobile .icon-box .icon {\n        height: 25px; }\n    .nav-wrap .nav-mobile .tabs-box {\n      visibility: hidden;\n      background-color: white;\n      width: 35px;\n      padding: 5px;\n      margin: 5px;\n      border-top-left-radius: 15px;\n      border-bottom-left-radius: 15px; }\n      .nav-wrap .nav-mobile .tabs-box .tab-box {\n        margin-bottom: 5px; }\n      .nav-wrap .nav-mobile .tabs-box .close-box {\n        padding: 5px 5px 1px 5px;\n        background-color: rgba(161, 155, 155, 0.603);\n        border-radius: 99px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdEQUF1QztVQUF2Qyx3Q0FBdUMsRUFtRDFDO0VBcEREO0lBSVEsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYiwyREFBa0Q7WUFBbEQsbURBQWtEO0lBQ2xELHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUE4QjtZQUE5QiwrQkFBOEIsRUF1Q2pDO0VBL0NMO01BV1ksa0JBQWlCLEVBQ3BCO0VBWlQ7TUFlWSxxQkFBYTtNQUFiLGNBQWE7TUFDYixhQUFZO01BQ1osbUJBQWtCLEVBNkJyQjtFQTlDVDtRQW9CZ0IsYUFBWTtRQUNaLHFCQUFhO1FBQWIsY0FBYTtRQUNiLDBCQUFtQjtnQkFBbkIsb0JBQW1CO1FBQ25CLHNCQUFxQixFQXNCeEI7RUE3Q2I7VUEwQm9CLG1CQUFrQjtVQUNsQixnQkFBZTtVQUNmLGtDQUFpQztVQUNqQywyQkFBMEI7VUFDMUIsb0JBQW1CO1VBQ25CLDRCQUFtQjtVQUFuQixvQkFBbUI7VUFDbkIsaUNBQWdDO1VBQ2hDLG1CQUFrQjtVQUNsQixnQkFBZSxFQVVsQjtFQTVDakI7WUFzQ3dCLHNDQUE2QjtvQkFBN0IsOEJBQTZCLEVBQ2hDO0VBdkNyQjtZQTBDd0Isc0RBQTZDO29CQUE3Qyw4Q0FBNkMsRUFDaEQ7RUEzQ3JCO0lBa0RRLGNBQWEsRUFDaEI7RUFHTDtFQUNJO0lBQ0ksY0FBYSxFQUNoQjtFQUVEO0lBQ0ksZUFBYztJQUNkLG1CQUFrQjtJQUNsQixxQkFBYTtJQUFiLGNBQWE7SUFDYixhQUFZO0lBQ1osNEJBQW1CO0lBQW5CLG9CQUFtQjtJQUNuQixVQUFTLEVBaURaO0lBdkREO01BU1EsWUFBVyxFQVNkO01BbEJMO1FBWVksV0FBVSxFQUNiO01BYlQ7UUFnQlksb0JBQW1CLEVBQ3RCO0lBakJUO01BcUJRLHVCQUFzQjtNQUN0QixvQkFBbUI7TUFDbkIscUJBQWE7TUFBYixjQUFhO01BQ2IsMEJBQW1CO2NBQW5CLG9CQUFtQjtNQUNuQix5QkFBdUI7Y0FBdkIsd0JBQXVCO01BQ3ZCLGFBQVk7TUFDWixZQUFXO01BQ1gsaUJBQWdCO01BQ2hCLDRCQUFtQjtNQUFuQixvQkFBbUIsRUFLdEI7TUFsQ0w7UUFnQ1ksYUFBWSxFQUNmO0lBakNUO01BcUNRLG1CQUFrQjtNQUNsQix3QkFBdUI7TUFDdkIsWUFBVztNQUNYLGFBQVk7TUFDWixZQUFXO01BQ1gsNkJBQTRCO01BQzVCLGdDQUErQixFQVdsQztNQXRETDtRQThDWSxtQkFBa0IsRUFDckI7TUEvQ1Q7UUFrRFkseUJBQXdCO1FBQ3hCLDZDQUE0QztRQUM1QyxvQkFBbUIsRUFDdEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi13cmFwIHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDRweCAxMHB4IGJsYWNrKTtcclxuXHJcbiAgICAubmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCUsIDEwMCUgNzAlLCAwIDEwMCUpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBhcHAtbG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxLjUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYnMtYm94IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAudGFiLWJveCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGFiIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTI4LCAxMjUsIDEyNSwgMC43Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygxM2RlZywgMTNkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMTNkZWcsIDEzZGVnKSB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLm5hdi13cmFwIC5uYXYgLnRhYnMtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtd3JhcCAubmF2LW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcmlnaHQ6IC0zOHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICByaWdodDogLTVweDtcclxuXHJcbiAgICAgICAgICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFicy1ib3gge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24tYm94IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWJzLWJveCB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRhYi1ib3gge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xvc2UtYm94IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMXB4IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNTUsIDE1NSwgMC42MDMpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router/paths */ "./src/app/router/paths.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.appPaths = src_app_router_paths__WEBPACK_IMPORTED_MODULE_1__;
        this.openMobile = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.mobileNavClicked = function () {
        this.openMobile = !this.openMobile;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"portfolio-box\">\n    <app-project class=\"project\" *ngFor=\"let project of allProjects\" [details]=\"project\"></app-project>\n    <app-project class=\"project\" *ngFor=\"let project of allProjects\" [details]=\"project\"></app-project>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .box .portfolio-box {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    background-color: rgba(255, 255, 255, 0.8);\n    width: 90%;\n    margin-top: 45px;\n    border-radius: 10px;\n    box-shadow: 4px 4px 10px black;\n    padding: 10px; }\n  .box .portfolio-box .project {\n      width: calc(100%/3);\n      padding: 10px; }\n  @media screen and (max-width: 800px) {\n  .box .portfolio-box {\n    display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcTXkgV2Vic2l0ZVxcbXktd2ViL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcTXkgV2Vic2l0ZVxcbXktd2ViL3NyY1xcY29tbW9uXFxzdHlsZS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFhO0VBQWIsY0FBYTtFQUNiLHlCQUF1QjtVQUF2Qix3QkFBdUIsRUFpQjFCO0VBbkJEO0lBS1EscUJBQWE7SUFBYixjQUFhO0lBQ2IsZ0JBQWU7SUFDZiwyQ0NSaUM7SURTakMsV0FBVTtJQUNWLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsK0JDYnVCO0lEY3ZCLGNBQWEsRUFNaEI7RUFsQkw7TUFlWSxvQkFBbUI7TUFDbkIsY0FBYSxFQUNoQjtFQUtUO0VBQ0k7SUFDSSxlQUFjLEVBS2pCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29tbW9uL3N0eWxlLXZhcmlhYmxlcyc7XHJcblxyXG4uYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAucG9ydGZvbGlvLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIC5wcm9qZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmJveCAucG9ydGZvbGlvLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICAgICAgICAucHJvamVjdCB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XHJcbiRib3gtYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.allProjects = [
            {
                name: 'Cryptonyte App',
                image: 'assets/projects-image/virtual-coins.jpg',
                link: 'https://virtual-coins.herokuapp.com',
                description: 'Displaying all the virtual currency values in the world and presenting a comparison between them.'
            },
            {
                name: 'Weather App',
                image: 'assets/projects-image/weather-app.jpg',
                link: 'https://weatherrapp.herokuapp.com',
                description: 'Display the current and 4 days next forcast'
            }
        ];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/components/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/project/project.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/portfolio/project/project.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flip-container project-box\">\n  <div class=\"flipper\">\n    <div class=\"front\">\n      <img [src]=\"details.image\" class=\"project-image\">\n    </div>\n    <div class=\"back\">\n      <div class=\"project-details\">\n        <div class=\"project-title\">{{ details.name }}</div>\n        <div class=\"project-description\">{{ details.description }}</div>\n        <a target=\"_blank\" [href]=\"details.link\" class=\"project-link\">visit website</a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/portfolio/project/project.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/portfolio/project/project.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-box {\n  height: 200px; }\n  .project-box .flipper .front {\n    border-radius: 15px;\n    overflow: hidden; }\n  .project-box .flipper .back {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 20px;\n    border-radius: 15px;\n    background-color: #090530;\n    color: white; }\n  .project-box .flipper .back .project-details {\n      text-align: center;\n      font-family: 'Oswald', sans-serif; }\n  .project-box .flipper .back .project-details .project-title {\n        font-size: 25px;\n        font-weight: 600;\n        letter-spacing: .5px; }\n  .project-box .flipper .back .project-details .project-description {\n        margin-bottom: 20px; }\n  .project-box .flipper .back .project-details .project-link {\n        text-decoration: none;\n        border-radius: 99px;\n        border: 2px solid #06BC9B;\n        color: black;\n        padding: 5px 35px;\n        -webkit-transition: background .8s;\n        transition: background .8s;\n        text-transform: capitalize;\n        font-weight: 500;\n        color: white; }\n  .project-box .flipper .back .project-details .project-link:hover {\n          background-color: #06BC9B; }\n  .flip-container {\n  -webkit-perspective: 1000;\n          perspective: 1000; }\n  .flip-container:hover .flipper {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  .flip-container .flipper {\n    -webkit-transition: 0.6s;\n    transition: 0.6s;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    width: 100%;\n    height: 100%;\n    position: relative; }\n  .flip-container .front, .flip-container .back {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .flip-container .front .project-image {\n    height: 100%;\n    width: 100%; }\n  .flip-container .back {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcHJvamVjdC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxNeSBXZWJzaXRlXFxteS13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcnRmb2xpb1xccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFrRGhCO0VBbkREO0lBTVksb0JBQW1CO0lBQ25CLGlCQUFnQixFQUNuQjtFQVJUO0lBV1kscUJBQWE7SUFBYixjQUFhO0lBQ2IsMEJBQW1CO1lBQW5CLG9CQUFtQjtJQUNuQix5QkFBdUI7WUFBdkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsMEJBQStCO0lBQy9CLGFBQVksRUFnQ2Y7RUFqRFQ7TUFvQmdCLG1CQUFrQjtNQUNsQixrQ0FBaUMsRUEyQnBDO0VBaERiO1FBd0JvQixnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixxQkFBb0IsRUFDdkI7RUEzQmpCO1FBOEJvQixvQkFBbUIsRUFDdEI7RUEvQmpCO1FBa0NvQixzQkFBcUI7UUFDckIsb0JBQW1CO1FBQ25CLDBCQUF5QjtRQUN6QixhQUFZO1FBQ1osa0JBQWlCO1FBQ2pCLG1DQUEwQjtRQUExQiwyQkFBMEI7UUFDMUIsMkJBQTBCO1FBQzFCLGlCQUFnQjtRQUNoQixhQUFZLEVBS2Y7RUEvQ2pCO1VBNkN3QiwwQkFBeUIsRUFDNUI7RUFPckI7RUFDSSwwQkFBaUI7VUFBakIsa0JBQWlCLEVBbUNsQjtFQXBDSDtJQUtRLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFDN0I7RUFOTDtJQVNRLHlCQUFnQjtJQUFoQixpQkFBZ0I7SUFDaEIscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUM1QixZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQixFQUNyQjtFQWRMO0lBaUJRLG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFDM0IsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU8sRUFDVjtFQXZCTDtJQTRCWSxhQUFZO0lBQ1osWUFBVyxFQUNkO0VBOUJUO0lBa0NRLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1ib3gge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAuZmxpcHBlciB7XHJcblxyXG4gICAgICAgIC5mcm9udCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFjayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgNSwgNDgpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAucHJvamVjdC1kZXRhaWxzIHsgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNkJDOUI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2QkM5QjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGlwLWNvbnRhaW5lciB7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMDtcclxuXHJcblxyXG4gICAgJjpob3ZlciAuZmxpcHBlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mbGlwcGVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZyb250LCAuYmFjayB7XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZyb250IHtcclxuICAgICAgICBcclxuICAgICAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/portfolio/project/project.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/portfolio/project/project.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "details", void 0);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/components/portfolio/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/components/portfolio/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/router/paths.ts":
/*!*********************************!*\
  !*** ./src/app/router/paths.ts ***!
  \*********************************/
/*! exports provided: HOME, PORTFOLIO, ABOUT, CONTACT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIO", function() { return PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT", function() { return ABOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTACT", function() { return CONTACT; });
var HOME = 'home';
var PORTFOLIO = 'portfolio';
var ABOUT = 'about';
var CONTACT = 'contact';


/***/ }),

/***/ "./src/app/router/routes.ts":
/*!**********************************!*\
  !*** ./src/app/router/routes.ts ***!
  \**********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paths */ "./src/app/router/paths.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/portfolio/portfolio.component */ "./src/app/components/portfolio/portfolio.component.ts");



var appRoutes = [
    { path: '', redirectTo: "" + _paths__WEBPACK_IMPORTED_MODULE_0__["HOME"], pathMatch: 'full' },
    { path: _paths__WEBPACK_IMPORTED_MODULE_0__["HOME"], component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: _paths__WEBPACK_IMPORTED_MODULE_0__["PORTFOLIO"], component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] }
];


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Full Stack Developer\My Website\my-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map