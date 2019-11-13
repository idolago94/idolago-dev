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

module.exports = ".quote-box {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 15px;\n  margin-top: 25px;\n  box-shadow: 4px 4px 10px black; }\n  .quote-box .quote-content {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    text-align: center;\n    line-height: 1.9;\n    letter-spacing: 0.6px;\n    font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRtZVxcYWJvdXRtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGNvbW1vblxcc3R5bGUtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQ0NGcUM7RURHckMsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwrQkNOMkIsRURnQjlCO0VBZEQ7SUFPUSxzQ0FBcUM7SUFDckMsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsc0JBQXFCO0lBQ3JCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL2Fib3V0bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29tbW9uL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5xdW90ZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1iYWNrZ3JvdW5kO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxuXHJcbiAgICAucXVvdGUtY29udGVudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn0iLCIkYm94LXNoYWRvdzogNHB4IDRweCAxMHB4IGJsYWNrO1xyXG4kYm94LWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTsiXX0= */"

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

module.exports = "<div class=\"to-portfolio-box\">\r\n    <div class=\"content\">\r\n        <div class=\"header\">don't hold back!</div>\r\n        <div class=\"paragraph\">feel free to take a look at my latest projects.</div>\r\n        <a [routerLink]=\"portfolioPath\" class=\"btn\">\r\n            <div class=\"content-box\">\r\n                <div class=\"content\">view portfolio</div>\r\n                <img src=\"assets/right-chevron.svg\" class=\"right-chevron\">\r\n            </div>\r\n        </a>  \r\n    </div>\r\n    <img src=\"assets/screens.jpg\" class=\"screens-img\">\r\n</div>\r\n\r\n<div class=\"keepintouch-box\">\r\n    <div class=\"content\">\r\n        keep in touch:\r\n    </div>\r\n    <div class=\"links\">\r\n        <a target=\"_blank\" href=\"https://www.linkedin.com/in/ido-lago-8b332b164/\"><img src=\"assets/linkedin.svg\" class=\"social linkedin\"></a>\r\n        <a target=\"_blank\" href=\"https://www.facebook.com/ido.lago\"><img src=\"assets/facebook.svg\" class=\"social facebook\"></a>\r\n        <a target=\"_blank\" href=\"https://github.com/idolago94\"><img src=\"assets/github.svg\" class=\"social github\"></a>\r\n        <!-- <a target=\"_blank\" href=\"\"><img src=\"assets/gmail.svg\" class=\"social gmail\"></a> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".to-portfolio-box {\n  width: 90%;\n  background-color: rgba(255, 255, 255, 0.8);\n  margin: 45px auto;\n  border-radius: 10px;\n  box-shadow: 0 0 40px 10px black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 30px; }\n  .to-portfolio-box:hover .content .btn {\n    right: -40%; }\n  .to-portfolio-box:hover .screens-img {\n    -webkit-transform: scale(10%);\n            transform: scale(10%); }\n  .to-portfolio-box .content {\n    font-family: 'Oswald', sans-serif;\n    position: relative;\n    margin-right: 20px; }\n  .to-portfolio-box .content .header {\n      font-size: 40px;\n      text-transform: uppercase;\n      font-weight: bold;\n      letter-spacing: 2px; }\n  .to-portfolio-box .content .paragraph {\n      text-transform: capitalize;\n      width: 220px;\n      margin-left: 20px;\n      font-size: 27px;\n      color: rgba(0, 0, 0, 0.7); }\n  .to-portfolio-box .content .btn {\n      position: absolute;\n      bottom: 60px;\n      right: -20%;\n      padding: 7px 22px;\n      border: none;\n      border-radius: 5px;\n      background-image: -webkit-gradient(linear, left top, right top, from(#06BC9B), to(#1ba49c));\n      background-image: linear-gradient(to right, #06BC9B, #1ba49c);\n      box-shadow: 3px 3px 5px black;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      cursor: pointer;\n      text-decoration: none;\n      color: black; }\n  .to-portfolio-box .content .btn .content-box {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: baseline;\n                align-items: baseline; }\n  .to-portfolio-box .content .btn .content-box .content {\n          font-size: 20px;\n          text-transform: capitalize; }\n  .to-portfolio-box .content .btn .content-box .right-chevron {\n          height: 15px;\n          margin-left: 10px; }\n  .to-portfolio-box .screens-img {\n    height: 350px;\n    border-radius: 50px;\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n  .keepintouch-box {\n  height: 55px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(255, 255, 255, 0.8);\n  box-shadow: 4px 4px 10px black;\n  border-top-right-radius: 99px;\n  border-bottom-right-radius: 99px;\n  padding: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 25px; }\n  .keepintouch-box .content {\n    font-family: 'Oswald', sans-serif;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 22px;\n    letter-spacing: 1.5px;\n    margin-right: 20px; }\n  .keepintouch-box .links .social {\n    height: 30px;\n    margin-left: 18px;\n    cursor: pointer;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n  .keepintouch-box .links .social:active {\n      -webkit-transform: translateY(5px);\n              transform: translateY(5px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGNvbW1vblxcc3R5bGUtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFVO0VBQ1YsMkNDSHFDO0VESXJDLGtCQUFpQjtFQUNqQixvQkFBbUI7RUFDbkIsZ0NBQStCO0VBQy9CLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUE4QjtVQUE5QiwrQkFBOEI7RUFDOUIsY0FBYSxFQXNFaEI7RUE5RUQ7SUFhWSxZQUFXLEVBQ2Q7RUFkVDtJQWlCWSw4QkFBcUI7WUFBckIsc0JBQXFCLEVBQ3hCO0VBbEJUO0lBc0JRLGtDQUFpQztJQUNqQyxtQkFBa0I7SUFDbEIsbUJBQWtCLEVBK0NyQjtFQXZFTDtNQTJCWSxnQkFBZTtNQUNmLDBCQUF5QjtNQUN6QixrQkFBaUI7TUFDakIsb0JBQW1CLEVBQ3RCO0VBL0JUO01Ba0NZLDJCQUEwQjtNQUMxQixhQUFZO01BQ1osa0JBQWlCO01BQ2pCLGdCQUFlO01BQ2YsMEJBQXlCLEVBQzVCO0VBdkNUO01BMENZLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osWUFBVztNQUNYLGtCQUFpQjtNQUNqQixhQUFZO01BQ1osbUJBQWtCO01BQ2xCLDRGQUEyRDtNQUEzRCw4REFBMkQ7TUFDM0QsOEJBQTZCO01BQzdCLDRCQUFtQjtNQUFuQixvQkFBbUI7TUFDbkIsZ0JBQWU7TUFDZixzQkFBcUI7TUFDckIsYUFBWSxFQWdCZjtFQXJFVDtRQXdEZ0IscUJBQWE7UUFBYixjQUFhO1FBQ2IsNEJBQXFCO2dCQUFyQixzQkFBcUIsRUFXeEI7RUFwRWI7VUE0RG9CLGdCQUFlO1VBQ2YsMkJBQTBCLEVBQzdCO0VBOURqQjtVQWlFb0IsYUFBWTtVQUNaLGtCQUFpQixFQUNwQjtFQW5FakI7SUEwRVEsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixvQkFBWTtZQUFaLGFBQVksRUFDZjtFQUdMO0VBQ0ksYUFBWTtFQUNaLDJCQUFrQjtFQUFsQix3QkFBa0I7RUFBbEIsbUJBQWtCO0VBQ2xCLDJDQ3BGcUM7RURxRnJDLCtCQ3RGMkI7RUR1RjNCLDhCQUE2QjtFQUM3QixpQ0FBZ0M7RUFDaEMsY0FBYTtFQUNiLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBd0J0QjtFQWxDRDtJQWFRLGtDQUFpQztJQUNqQywwQkFBeUI7SUFDekIsaUJBQWdCO0lBQ2hCLGdCQUFlO0lBQ2Ysc0JBQXFCO0lBQ3JCLG1CQUNKLEVBQUM7RUFuQkw7SUF3QlksYUFBWTtJQUNaLGtCQUFpQjtJQUNqQixnQkFBZTtJQUNmLDRCQUFtQjtJQUFuQixvQkFBbUIsRUFLdEI7RUFoQ1Q7TUE4QmdCLG1DQUEwQjtjQUExQiwyQkFBMEIsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9jb21tb24vc3R5bGUtdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLnRvLXBvcnRmb2xpby1ib3gge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3gtYmFja2dyb3VuZDtcclxuICAgIG1hcmdpbjogNDVweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDEwcHggYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQgLmJ0biB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjcmVlbnMtaW1nIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhcmFncmFwaCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDYwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMjAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHggMjJweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDZCQzlCLCMxYmE0OWMpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBibGFjaztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuXHJcbiAgICAgICAgICAgIC5jb250ZW50LWJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG5cclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5yaWdodC1jaGV2cm9uIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zY3JlZW5zLWltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmtlZXBpbnRvdWNoLWJveCB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm94LWJhY2tncm91bmQ7XHJcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5OXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDk5cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmtzIHtcclxuXHJcbiAgICAgICAgLnNvY2lhbCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGJveC1zaGFkb3c6IDRweCA0cHggMTBweCBibGFjaztcclxuJGJveC1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7Il19 */"

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

module.exports = "<div class=\"nav-wrap\">\n  <div class=\"nav\">\n    <app-logo></app-logo>\n    <div class=\"tabs-box\">\n      <a [routerLink]=\"appPaths.HOME\" class=\"tab\">home</a>\n      <a [routerLink]=\"appPaths.PORTFOLIO\" class=\"tab\">portfolio</a>\n      <a class=\"tab\">about</a>\n      <a class=\"tab\">contact</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrap {\n  -webkit-filter: drop-shadow(4px 4px 10px black);\n          filter: drop-shadow(4px 4px 10px black); }\n  .nav-wrap .nav {\n    background-color: white;\n    height: 110px;\n    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 100%);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between; }\n  .nav-wrap .nav app-logo {\n      margin: 10px 1.5%; }\n  .nav-wrap .nav .tabs-box {\n      display: -webkit-box;\n      display: flex;\n      height: 77px;\n      margin-right: 20px; }\n  .nav-wrap .nav .tabs-box .tab {\n        padding: 10px 20px;\n        margin: auto 0;\n        font-size: 20px;\n        font-family: 'Oswald', sans-serif;\n        text-transform: capitalize;\n        letter-spacing: 1px;\n        -webkit-transition: all .3s;\n        transition: all .3s;\n        color: rgba(128, 125, 125, 0.76);\n        position: relative;\n        cursor: pointer;\n        text-decoration: none; }\n  .nav-wrap .nav .tabs-box .tab:hover {\n          -webkit-transform: skew(13deg, 13deg);\n                  transform: skew(13deg, 13deg); }\n  .nav-wrap .nav .tabs-box .tab:active {\n          -webkit-transform: skew(13deg, 13deg) translateY(5px);\n                  transform: skew(13deg, 13deg) translateY(5px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdEQUF1QztVQUF2Qyx3Q0FBdUMsRUF5QzFDO0VBMUNEO0lBSVEsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYiwyREFBa0Q7WUFBbEQsbURBQWtEO0lBQ2xELHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUE4QjtZQUE5QiwrQkFBOEIsRUFpQ2pDO0VBekNMO01BV1ksa0JBQWlCLEVBQ3BCO0VBWlQ7TUFlWSxxQkFBYTtNQUFiLGNBQWE7TUFDYixhQUFZO01BQ1osbUJBQWtCLEVBdUJyQjtFQXhDVDtRQW9CZ0IsbUJBQWtCO1FBQ2xCLGVBQWM7UUFDZCxnQkFBZTtRQUNmLGtDQUFpQztRQUNqQywyQkFBMEI7UUFDMUIsb0JBQW1CO1FBQ25CLDRCQUFtQjtRQUFuQixvQkFBbUI7UUFDbkIsaUNBQWdDO1FBQ2hDLG1CQUFrQjtRQUNsQixnQkFBZTtRQUNmLHNCQUFxQixFQVN4QjtFQXZDYjtVQWlDb0Isc0NBQTZCO2tCQUE3Qiw4QkFBNkIsRUFDaEM7RUFsQ2pCO1VBcUNvQixzREFBNkM7a0JBQTdDLDhDQUE2QyxFQUNoRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi13cmFwIHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coNHB4IDRweCAxMHB4IGJsYWNrKTtcclxuXHJcbiAgICAubmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCUsIDEwMCUgNzAlLCAwIDEwMCUpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBhcHAtbG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxLjUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYnMtYm94IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAudGFiIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDEyOCwgMTI1LCAxMjUsIDAuNzYpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygxM2RlZywgMTNkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMTNkZWcsIDEzZGVnKSB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"

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
    }
    NavigationComponent.prototype.ngOnInit = function () {
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

module.exports = "<div class=\"portfolio-box\">\n  <app-project class=\"project\" *ngFor=\"let project of allProjects\" [details]=\"project\"></app-project>\n</div>"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-box {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  background-color: rgba(255, 255, 255, 0.8);\n  width: 90%;\n  margin: 45px auto;\n  border-radius: 10px;\n  box-shadow: 4px 4px 10px black; }\n  .portfolio-box .project {\n    width: calc(100%/3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcTXkgV2Vic2l0ZVxcbXktd2ViL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcTXkgV2Vic2l0ZVxcbXktd2ViL3NyY1xcY29tbW9uXFxzdHlsZS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFhO0VBQWIsY0FBYTtFQUNiLGdCQUFlO0VBQ2YsMkNDSnFDO0VES3JDLFdBQVU7RUFDVixrQkFBaUI7RUFDakIsb0JBQW1CO0VBQ25CLCtCQ1QyQixFRGM5QjtFQVpEO0lBVVEsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2NvbW1vbi9zdHlsZS12YXJpYWJsZXMnO1xyXG5cclxuLnBvcnRmb2xpby1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3gtYmFja2dyb3VuZDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDQ1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxuXHJcbiAgICAucHJvamVjdCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcclxuICAgIH1cclxufSIsIiRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XHJcbiRib3gtYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpOyJdfQ== */"

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

module.exports = ".project-box {\n  height: 200px;\n  margin: 20px; }\n  .project-box .flipper .front {\n    border-radius: 15px;\n    overflow: hidden; }\n  .project-box .flipper .back {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 20px;\n    border-radius: 15px;\n    background-color: #090530;\n    color: white; }\n  .project-box .flipper .back .project-details {\n      text-align: center;\n      font-family: 'Oswald', sans-serif; }\n  .project-box .flipper .back .project-details .project-title {\n        font-size: 25px;\n        font-weight: 600;\n        letter-spacing: .5px; }\n  .project-box .flipper .back .project-details .project-description {\n        margin-bottom: 20px; }\n  .project-box .flipper .back .project-details .project-link {\n        text-decoration: none;\n        border-radius: 99px;\n        border: 2px solid #06BC9B;\n        color: black;\n        padding: 5px 35px;\n        -webkit-transition: background .8s;\n        transition: background .8s;\n        text-transform: capitalize;\n        font-weight: 500;\n        color: white; }\n  .project-box .flipper .back .project-details .project-link:hover {\n          background-color: #06BC9B; }\n  .flip-container {\n  -webkit-perspective: 1000;\n          perspective: 1000; }\n  .flip-container:hover .flipper {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  .flip-container .flipper {\n    -webkit-transition: 0.6s;\n    transition: 0.6s;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    width: 100%;\n    height: 100%;\n    position: relative; }\n  .flip-container .front, .flip-container .back {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .flip-container .front .project-image {\n    height: 100%;\n    width: 100%; }\n  .flip-container .back {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcHJvamVjdC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxNeSBXZWJzaXRlXFxteS13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcnRmb2xpb1xccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWE7RUFDYixhQUFZLEVBa0RmO0VBcEREO0lBT1ksb0JBQW1CO0lBQ25CLGlCQUFnQixFQUNuQjtFQVRUO0lBWVkscUJBQWE7SUFBYixjQUFhO0lBQ2IsMEJBQW1CO1lBQW5CLG9CQUFtQjtJQUNuQix5QkFBdUI7WUFBdkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsMEJBQStCO0lBQy9CLGFBQVksRUFnQ2Y7RUFsRFQ7TUFxQmdCLG1CQUFrQjtNQUNsQixrQ0FBaUMsRUEyQnBDO0VBakRiO1FBeUJvQixnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixxQkFBb0IsRUFDdkI7RUE1QmpCO1FBK0JvQixvQkFBbUIsRUFDdEI7RUFoQ2pCO1FBbUNvQixzQkFBcUI7UUFDckIsb0JBQW1CO1FBQ25CLDBCQUF5QjtRQUN6QixhQUFZO1FBQ1osa0JBQWlCO1FBQ2pCLG1DQUEwQjtRQUExQiwyQkFBMEI7UUFDMUIsMkJBQTBCO1FBQzFCLGlCQUFnQjtRQUNoQixhQUFZLEVBS2Y7RUFoRGpCO1VBOEN3QiwwQkFBeUIsRUFDNUI7RUFPckI7RUFDSSwwQkFBaUI7VUFBakIsa0JBQWlCLEVBbUNsQjtFQXBDSDtJQUtRLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFDN0I7RUFOTDtJQVNRLHlCQUFnQjtJQUFoQixpQkFBZ0I7SUFDaEIscUNBQTRCO1lBQTVCLDZCQUE0QjtJQUM1QixZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQixFQUNyQjtFQWRMO0lBaUJRLG9DQUEyQjtZQUEzQiw0QkFBMkI7SUFDM0IsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU8sRUFDVjtFQXZCTDtJQTRCWSxhQUFZO0lBQ1osWUFBVyxFQUNkO0VBOUJUO0lBa0NRLG1DQUEwQjtZQUExQiwyQkFBMEIsRUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdC1ib3gge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuXHJcbiAgICAuZmxpcHBlciB7XHJcblxyXG4gICAgICAgIC5mcm9udCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFjayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOSwgNSwgNDgpO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAucHJvamVjdC1kZXRhaWxzIHsgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcm9qZWN0LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNkJDOUI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjhzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA2QkM5QjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGlwLWNvbnRhaW5lciB7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMDtcclxuXHJcblxyXG4gICAgJjpob3ZlciAuZmxpcHBlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mbGlwcGVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZyb250LCAuYmFjayB7XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZyb250IHtcclxuICAgICAgICBcclxuICAgICAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuIl19 */"

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