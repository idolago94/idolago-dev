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

module.exports = "<app-navigation></app-navigation>\n\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>"

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
    AppComponent.prototype.onActivate = function (event) {
        window.scrollTo(0, 0);
    };
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
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
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
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_10__["LogoComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
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

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"about-box\">\n    <div class=\"about\">\n      <div class=\"header\">I'm Ido Lago - a Full Stack Web Developer.</div>\n      <div class=\"content\">\n        I've always been drawn to the domain of computers.\n        After graduating in 2012 with a Bachelor’s Degree in Electrical Engineering, I discoverd my attraction to development.\n        After three years in the army where I commanded about ten soldiers in a significant role in the ICT, \n        I decided to expand my programming knowledge and \n        I started to learn in the last year as a Full Stack Web Developer,\n        and now my skills are broad from front end to back end development and I eager to continue learning.\n        I enjoy each aspect, and love building sites & mobile apps from start to finish,\n        for clients all over the world.\n        The work I provide is of high quality responsive websites and exceptional user experience. \n        I take great care to ensure each project is well-documented and easily \n        maintainable so you can enhance a website as your company grows. \n        Feel free to take a look at my latest projects on the web portfolio page.\n      </div>\n    </div>\n    <div class=\"skills\">\n      <div class=\"header\">My Skills:</div>\n      <div class=\"content\">\n        <div class=\"skill\">React.js</div>\n        <div class=\"skill\">NodeJS</div>\n        <div class=\"skill\">CSS</div>\n        <div class=\"skill\">Angular</div>\n        <div class=\"skill\">NoSQL</div>\n        <div class=\"skill\">RESTful WebServices</div>\n        <div class=\"skill\">Redux</div>\n        <div class=\"skill\">AJAX</div>\n        <div class=\"skill\">Git</div>\n        <div class=\"skill\">MongoDB</div>\n        <div class=\"skill\">MySQL</div>\n        <div class=\"skill\">HTML</div>\n        <div class=\"skill\">SQL</div>\n        <div class=\"skill\">Bootstrap</div>\n        <div class=\"skill\">jQuery</div>\n        <div class=\"skill\">JavaScript</div>\n        <div class=\"skill\">Design Patterns</div>\n        <div class=\"skill\">Design Patterns</div>\n        <div class=\"skill\">Mobile Applications</div>\n        <div class=\"skill\">TypeScript</div>\n        <div class=\"skill\">Web Services API</div>\n        <div class=\"skill\">ExpressJS</div>\n        <div class=\"skill\">SASS</div>\n        <div class=\"skill\">RxJS</div>\n        <div class=\"skill\">Chart.js</div>\n        <div class=\"skill\">Socket.io</div>\n        <div class=\"skill\">Passport.js</div>\n        <div class=\"skill\">JWT</div>\n        <div class=\"skill\">Redis</div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 30px; }\n  .box .about-box {\n    width: 90%;\n    background-color: rgba(255, 255, 255, 0.8);\n    box-shadow: 4px 4px 10px black;\n    border-radius: 10px;\n    font-family: 'Oswald', sans-serif;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 20px; }\n  .box .about-box .about {\n      width: 60%; }\n  .box .about-box .about .header {\n        font-size: 24px;\n        font-weight: 500;\n        color: #1ba49c; }\n  .box .about-box .about .content {\n        font-size: 18px; }\n  .box .about-box .skills {\n      width: 35%;\n      margin-top: 15px; }\n  .box .about-box .skills .header {\n        font-size: 24px;\n        margin-bottom: 10px;\n        font-weight: 500;\n        letter-spacing: 1px;\n        margin-left: 20px; }\n  .box .about-box .skills .content {\n        display: -webkit-box;\n        display: flex;\n        flex-wrap: wrap;\n        -webkit-box-pack: center;\n                justify-content: center; }\n  .box .about-box .skills .content .skill {\n          background-color: gray;\n          padding: 3px 10px;\n          border-radius: 15px;\n          font-size: 12px;\n          margin: 2px; }\n  @media screen and (max-width: 550px) {\n  .box {\n    margin-top: 140px;\n    margin-bottom: 50px; } }\n  @media screen and (max-width: 500px) {\n  .box .about-box {\n    display: block; }\n    .box .about-box .about {\n      width: 100%; }\n    .box .about-box .skills {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxNeSBXZWJzaXRlXFxteS13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxNeSBXZWJzaXRlXFxteS13ZWIvc3JjXFxjb21tb25cXHN0eWxlLXZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0kscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGlCQUFnQixFQXFEbkI7RUF6REQ7SUFPUSxXQUFVO0lBQ1YsMkNDVGlDO0lEVWpDLCtCQ1h1QjtJRFl2QixvQkFBbUI7SUFDbkIsa0NBQWlDO0lBQ2pDLHFCQUFhO0lBQWIsY0FBYTtJQUNiLDBCQUE4QjtZQUE5QiwrQkFBOEI7SUFDOUIsY0FBYSxFQTBDaEI7RUF4REw7TUFpQlksV0FBVSxFQVdiO0VBNUJUO1FBb0JnQixnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixlQUFjLEVBQ2pCO0VBdkJiO1FBMEJnQixnQkFBZSxFQUNsQjtFQTNCYjtNQStCWSxXQUFVO01BQ1YsaUJBQWdCLEVBdUJuQjtFQXZEVDtRQW1DZ0IsZ0JBQWU7UUFDZixvQkFBbUI7UUFDbkIsaUJBQWdCO1FBQ2hCLG9CQUFtQjtRQUNuQixrQkFBaUIsRUFDcEI7RUF4Q2I7UUEyQ2dCLHFCQUFhO1FBQWIsY0FBYTtRQUNiLGdCQUFlO1FBQ2YseUJBQXVCO2dCQUF2Qix3QkFBdUIsRUFTMUI7RUF0RGI7VUFnRG9CLHVCQUFzQjtVQUN0QixrQkFBaUI7VUFDakIsb0JBQW1CO1VBQ25CLGdCQUFlO1VBQ2YsWUFBVyxFQUNkO0VBTWpCO0VBQ0k7SUFDSSxrQkFBaUI7SUFDakIsb0JBQW1CLEVBQ3RCLEVBQUE7RUFHTDtFQUNJO0lBR1EsZUFBYyxFQVNqQjtJQVpMO01BTVksWUFBVyxFQUNkO0lBUFQ7TUFVWSxZQUFXLEVBQ2QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29tbW9uL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG4gICAgLmFib3V0LWJveCB7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm94LWJhY2tncm91bmQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICAgICAgLmFib3V0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMWJhNDljO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5za2lsbHMge1xyXG4gICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgIC5za2lsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5ib3gge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuYm94IHtcclxuXHJcbiAgICAgICAgLmFib3V0LWJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgLmFib3V0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2tpbGxzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSIsIiRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XHJcbiRib3gtYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4kYnRuLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDZCQzlCLCMxYmE0OWMpOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
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

module.exports = ".quote-box {\n  background-color: rgba(255, 255, 255, 0.8);\n  padding: 15px;\n  margin-top: 25px;\n  box-shadow: 4px 4px 10px black;\n  width: 100vw; }\n  .quote-box .quote-content {\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    text-align: center;\n    line-height: 1.9;\n    letter-spacing: 0.6px;\n    font-size: 18px; }\n  @media screen and (max-width: 400px) {\n  .quote-box {\n    margin-top: 135px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWJvdXRtZVxcYWJvdXRtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGNvbW1vblxcc3R5bGUtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwyQ0NGcUM7RURHckMsY0FBYTtFQUNiLGlCQUFnQjtFQUNoQiwrQkNOMkI7RURPM0IsYUFBWSxFQVVmO0VBZkQ7SUFRUSxzQ0FBcUM7SUFDckMsaUJBQWdCO0lBQ2hCLG1CQUFrQjtJQUNsQixpQkFBZ0I7SUFDaEIsc0JBQXFCO0lBQ3JCLGdCQUFlLEVBQ2xCO0VBR0w7RUFDSTtJQUNJLGtCQUFpQixFQUNwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dG1lL2Fib3V0bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29tbW9uL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5xdW90ZS1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1iYWNrZ3JvdW5kO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuXHJcbiAgICAucXVvdGUtY29udGVudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAucXVvdGUtYm94IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMzVweDtcclxuICAgIH1cclxufSIsIiRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XHJcbiRib3gtYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4kYnRuLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDZCQzlCLCMxYmE0OWMpOyJdfQ== */"

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

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"form-box\">\n    <div class=\"content\">\n        Have a question? Please enquire below\n    </div>\n    <form action=\"https://formsubmit.co/idolago94@gmail.com\" method=\"POST\">\n      <div class=\"flex-box\">\n        <div class=\"input-box\">\n          <div class=\"label\">name</div>\n          <input type=\"text\" name=\"name\">\n        </div>\n        <div class=\"input-box\">\n          <div class=\"label\">email</div>\n          <input type=\"text\" name=\"email\">\n        </div>\n      </div>\n      <div class=\"input-box\">\n        <div class=\"label\">message</div>\n        <textarea name=\"message\" cols=\"30\" rows=\"10\"></textarea>\n      </div>\n      <div class=\"input-box\">\n        <button class=\"btn\" type=\"submit\">enquire</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 45px 0;\n  -webkit-box-align: center;\n          align-items: center; }\n  .box .form-box {\n    width: 90%;\n    background-color: rgba(255, 255, 255, 0.8);\n    border-radius: 10px;\n    box-shadow: 0 0 40px 10px black;\n    font-family: 'Oswald', sans-serif; }\n  .box .form-box .content {\n      background-image: -webkit-gradient(linear, left top, right top, from(#06BC9B), to(#1ba49c));\n      background-image: linear-gradient(to right, #06BC9B, #1ba49c);\n      height: 90px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      font-size: 25px;\n      color: white;\n      border-top-left-radius: 10px;\n      border-top-right-radius: 10px;\n      text-align: center; }\n  .box .form-box form {\n      padding: 30px;\n      padding-top: 10px; }\n  .box .form-box form .flex-box {\n        display: -webkit-box;\n        display: flex; }\n  .box .form-box form .input-box {\n        padding: 10px;\n        width: 100%; }\n  .box .form-box form .input-box .label {\n          padding: 7px;\n          text-transform: capitalize;\n          font-size: 20px;\n          letter-spacing: 1px; }\n  .box .form-box form .input-box input {\n          height: 40px; }\n  .box .form-box form .input-box input, .box .form-box form .input-box textarea {\n          width: 100%;\n          border-radius: 5px;\n          border: 1px solid lightgray;\n          padding: 8px;\n          font-size: 18px;\n          color: gray; }\n  .box .form-box form .input-box .btn {\n          width: 100%;\n          text-align: center;\n          text-transform: uppercase;\n          height: 40px;\n          border: none;\n          background-image: -webkit-gradient(linear, left top, right top, from(#06BC9B), to(#1ba49c));\n          background-image: linear-gradient(to right, #06BC9B, #1ba49c);\n          padding: 7px 22px;\n          border: none;\n          border-radius: 5px;\n          box-shadow: 3px 3px 5px black;\n          cursor: pointer;\n          font-weight: bold;\n          letter-spacing: 2px;\n          font-family: 'Oswald', sans-serif; }\n  @media screen and (max-width: 550px) {\n  .box {\n    margin-top: 140px; }\n    .box .form-box form .flex-box {\n      display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGNvbW1vblxcc3R5bGUtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLGVBQWM7RUFDZCwwQkFBbUI7VUFBbkIsb0JBQW1CLEVBeUV0QjtFQTdFRDtJQU9RLFdBQVU7SUFDViwyQ0NUaUM7SURVakMsb0JBQW1CO0lBQ25CLGdDQUErQjtJQUMvQixrQ0FBaUMsRUFpRXBDO0VBNUVMO01BY1ksNEZDZDhDO01EYzlDLDhEQ2Q4QztNRGU5QyxhQUFZO01BQ1oscUJBQWE7TUFBYixjQUFhO01BQ2IseUJBQXVCO2NBQXZCLHdCQUF1QjtNQUN2QiwwQkFBbUI7Y0FBbkIsb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsYUFBWTtNQUNaLDZCQUE0QjtNQUM1Qiw4QkFBNkI7TUFDN0IsbUJBQWtCLEVBQ3JCO0VBeEJUO01BMkJZLGNBQWE7TUFDYixrQkFBaUIsRUErQ3BCO0VBM0VUO1FBK0JnQixxQkFBYTtRQUFiLGNBQWEsRUFDaEI7RUFoQ2I7UUFtQ2dCLGNBQWE7UUFDYixZQUFXLEVBc0NkO0VBMUViO1VBdUNvQixhQUFZO1VBQ1osMkJBQTBCO1VBQzFCLGdCQUFlO1VBQ2Ysb0JBQW1CLEVBQ3RCO0VBM0NqQjtVQThDb0IsYUFBWSxFQUNmO0VBL0NqQjtVQWtEb0IsWUFBVztVQUNYLG1CQUFrQjtVQUNsQiw0QkFBMkI7VUFDM0IsYUFBWTtVQUNaLGdCQUFlO1VBQ2YsWUFBVyxFQUNkO0VBeERqQjtVQTJEb0IsWUFBVztVQUNYLG1CQUFrQjtVQUNsQiwwQkFBeUI7VUFDekIsYUFBWTtVQUNaLGFBQVk7VUFDWiw0RkNoRXNDO1VEZ0V0Qyw4RENoRXNDO1VEaUV0QyxrQkFBaUI7VUFDakIsYUFBWTtVQUNaLG1CQUFrQjtVQUNsQiw4QkFBNkI7VUFDN0IsZ0JBQWU7VUFDZixrQkFBaUI7VUFDakIsb0JBQW1CO1VBQ25CLGtDQUFpQyxFQUNwQztFQU1qQjtFQUNJO0lBQ0ksa0JBQWlCLEVBS3BCO0lBTkQ7TUFJUSxlQUFjLEVBQ2pCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9jb21tb24vc3R5bGUtdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQ1cHggMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLmZvcm0tYm94IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib3gtYmFja2dyb3VuZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IDEwcHggYmxhY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6ICRidG4tYmFja2dyb3VuZDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAuZmxleC1ib3gge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0LWJveCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYnRuLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogN3B4IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDVweCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLmJveCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTQwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmZvcm0tYm94IGZvcm0gLmZsZXgtYm94IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSIsIiRib3gtc2hhZG93OiA0cHggNHB4IDEwcHggYmxhY2s7XHJcbiRib3gtYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4kYnRuLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMDZCQzlCLCMxYmE0OWMpOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-aboutme></app-aboutme>\r\n\r\n<div class=\"box\">\r\n    <div class=\"to-portfolio-box\">\r\n        <div class=\"content\">\r\n            <div class=\"header\">don't hold back!</div>\r\n            <div class=\"paragraph\">feel free to take a look at my latest projects.</div>\r\n            <a [routerLink]=\"portfolioPath\" class=\"btn\">\r\n                <div class=\"content-box\">\r\n                    <div class=\"content\">view portfolio</div>\r\n                    <img src=\"assets/right-chevron.svg\" class=\"right-chevron\">\r\n                </div>\r\n            </a>  \r\n        </div>\r\n        <div class=\"image-box\">\r\n            <img src=\"assets/screens.jpg\" class=\"screens-img\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"keepintouch-box\">\r\n    <div class=\"content\">\r\n        keep in touch:\r\n    </div>\r\n    <div class=\"links-box\">\r\n        <a class=\"link\" target=\"_blank\" href=\"https://www.linkedin.com/in/ido-lago-8b332b164/\"><img src=\"assets/linkedin.svg\" class=\"social linkedin\"></a>\r\n        <a class=\"link\" target=\"_blank\" href=\"https://www.facebook.com/ido.lago\"><img src=\"assets/facebook.svg\" class=\"social facebook\"></a>\r\n        <a class=\"link\" target=\"_blank\" href=\"https://github.com/idolago94\"><img src=\"assets/github.svg\" class=\"social github\"></a>\r\n        <a class=\"link\" target=\"_blank\" href=\"mailto:idolago94@gmail.com\"><img src=\"assets/gmail.svg\" class=\"social gmail\"></a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 45px 0; }\n\n.to-portfolio-box {\n  background-color: rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  box-shadow: 0 0 40px 10px black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 30px;\n  width: 90%; }\n\n.to-portfolio-box:hover .content .btn {\n    right: -40%; }\n\n.to-portfolio-box:hover .screens-img {\n    -webkit-transform: scale(10%);\n            transform: scale(10%); }\n\n.to-portfolio-box .content {\n    font-family: 'Oswald', sans-serif;\n    position: relative;\n    margin-right: 20px; }\n\n.to-portfolio-box .content .header {\n      font-size: 40px;\n      text-transform: uppercase;\n      font-weight: bold;\n      letter-spacing: 2px; }\n\n.to-portfolio-box .content .paragraph {\n      text-transform: capitalize;\n      width: 220px;\n      margin-left: 20px;\n      font-size: 27px;\n      color: rgba(0, 0, 0, 0.7); }\n\n.to-portfolio-box .content .btn {\n      position: absolute;\n      bottom: 5%;\n      right: -30%;\n      padding: 7px 22px;\n      border: none;\n      border-radius: 5px;\n      background-image: -webkit-gradient(linear, left top, right top, from(#06BC9B), to(#1ba49c));\n      background-image: linear-gradient(to right, #06BC9B, #1ba49c);\n      box-shadow: 3px 3px 5px black;\n      -webkit-transition: all .3s;\n      transition: all .3s;\n      cursor: pointer;\n      text-decoration: none;\n      color: black; }\n\n.to-portfolio-box .content .btn .content-box {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        -webkit-box-pack: justify;\n                justify-content: space-between; }\n\n.to-portfolio-box .content .btn .content-box .content {\n          font-size: 20px;\n          text-transform: capitalize; }\n\n.to-portfolio-box .content .btn .content-box .right-chevron {\n          height: 15px;\n          margin-left: 10px; }\n\n.to-portfolio-box .image-box {\n    -webkit-box-flex: 1;\n            flex-grow: 1; }\n\n.to-portfolio-box .image-box .screens-img {\n      border-radius: 50px;\n      width: 100%; }\n\n.keepintouch-box {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: rgba(255, 255, 255, 0.8);\n  box-shadow: 4px 4px 10px black;\n  border-top-right-radius: 99px;\n  border-bottom-right-radius: 99px;\n  padding: 10px 25px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 25px; }\n\n.keepintouch-box .content {\n    font-family: 'Oswald', sans-serif;\n    text-transform: uppercase;\n    font-weight: 500;\n    font-size: 22px;\n    letter-spacing: 1.5px;\n    margin-right: 20px; }\n\n.keepintouch-box .links-box {\n    display: -webkit-box;\n    display: flex; }\n\n.keepintouch-box .links-box .link {\n      display: block; }\n\n.keepintouch-box .links-box .link .social {\n        height: 30px;\n        margin-left: 18px;\n        cursor: pointer;\n        -webkit-transition: all .3s;\n        transition: all .3s; }\n\n.keepintouch-box .links-box .link .social:active {\n          -webkit-transform: translateY(5px);\n                  transform: translateY(5px); }\n\n@media screen and (max-width: 1000px) {\n  .box .to-portfolio-box .content .btn {\n    position: relative;\n    display: block;\n    top: 0;\n    left: 135px; } }\n\n@media screen and (max-width: 800px) {\n  .box .to-portfolio-box {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n            flex-direction: column-reverse; }\n    .box .to-portfolio-box .content .btn {\n      left: 0;\n      margin-top: 10px;\n      width: 100%; } }\n\n@media screen and (max-width: 500px) {\n  .box .to-portfolio-box {\n    width: 100%; } }\n\n@media screen and (max-width: 415px) {\n  .box .to-portfolio-box .content {\n    text-align: center;\n    margin: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center; }\n    .box .to-portfolio-box .content .header {\n      font-size: 30px; }\n    .box .to-portfolio-box .content .paragraph {\n      font-size: 20px;\n      margin-left: 0; }\n  .keepintouch-box .content {\n    font-size: 15px; }\n  .keepintouch-box .links-box .link .social {\n    height: 20px;\n    margin-left: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGNvbW1vblxcc3R5bGUtdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsZUFBYyxFQUNqQjs7QUFFRDtFQUNJLDJDQ1RxQztFRFVyQyxvQkFBbUI7RUFDbkIsZ0NBQStCO0VBQy9CLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUE4QjtVQUE5QiwrQkFBOEI7RUFDOUIsY0FBYTtFQUNiLFdBQVUsRUE0RWI7O0FBbkZEO0lBWVksWUFBVyxFQUNkOztBQWJUO0lBZ0JZLDhCQUFxQjtZQUFyQixzQkFBcUIsRUFDeEI7O0FBakJUO0lBcUJRLGtDQUFpQztJQUNqQyxtQkFBa0I7SUFDbEIsbUJBQWtCLEVBZ0RyQjs7QUF2RUw7TUEwQlksZ0JBQWU7TUFDZiwwQkFBeUI7TUFDekIsa0JBQWlCO01BQ2pCLG9CQUFtQixFQUN0Qjs7QUE5QlQ7TUFpQ1ksMkJBQTBCO01BQzFCLGFBQVk7TUFDWixrQkFBaUI7TUFDakIsZ0JBQWU7TUFDZiwwQkFBeUIsRUFDNUI7O0FBdENUO01BeUNZLG1CQUFrQjtNQUNsQixXQUFVO01BQ1YsWUFBVztNQUNYLGtCQUFpQjtNQUNqQixhQUFZO01BQ1osbUJBQWtCO01BQ2xCLDRGQ3REOEM7TURzRDlDLDhEQ3REOEM7TUR1RDlDLDhCQUE2QjtNQUM3Qiw0QkFBbUI7TUFBbkIsb0JBQW1CO01BQ25CLGdCQUFlO01BQ2Ysc0JBQXFCO01BQ3JCLGFBQVksRUFpQmY7O0FBckVUO1FBdURnQixxQkFBYTtRQUFiLGNBQWE7UUFDYiwwQkFBbUI7Z0JBQW5CLG9CQUFtQjtRQUNuQiwwQkFBOEI7Z0JBQTlCLCtCQUE4QixFQVdqQzs7QUFwRWI7VUE0RG9CLGdCQUFlO1VBQ2YsMkJBQTBCLEVBQzdCOztBQTlEakI7VUFpRW9CLGFBQVk7VUFDWixrQkFBaUIsRUFDcEI7O0FBbkVqQjtJQTBFUSxvQkFBWTtZQUFaLGFBQVksRUFNZjs7QUFoRkw7TUE2RVksb0JBQW1CO01BQ25CLFlBQVcsRUFDZDs7QUFNVDtFQUNJLDJCQUFrQjtFQUFsQix3QkFBa0I7RUFBbEIsbUJBQWtCO0VBQ2xCLDJDQy9GcUM7RURnR3JDLCtCQ2pHMkI7RURrRzNCLDhCQUE2QjtFQUM3QixpQ0FBZ0M7RUFDaEMsbUJBQWtCO0VBQ2xCLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUFtQjtVQUFuQixvQkFBbUI7RUFDbkIsb0JBQW1CLEVBOEJ0Qjs7QUF2Q0Q7SUFZUSxrQ0FBaUM7SUFDakMsMEJBQXlCO0lBQ3pCLGlCQUFnQjtJQUNoQixnQkFBZTtJQUNmLHNCQUFxQjtJQUNyQixtQkFDSixFQUFDOztBQWxCTDtJQXFCUSxxQkFBYTtJQUFiLGNBQWEsRUFpQmhCOztBQXRDTDtNQXdCWSxlQUFjLEVBWWpCOztBQXBDVDtRQTJCZ0IsYUFBWTtRQUNaLGtCQUFpQjtRQUNqQixnQkFBZTtRQUNmLDRCQUFtQjtRQUFuQixvQkFBbUIsRUFLdEI7O0FBbkNiO1VBaUNvQixtQ0FBMEI7a0JBQTFCLDJCQUEwQixFQUM3Qjs7QUFPakI7RUFDSTtJQUNJLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsT0FBTTtJQUNOLFlBQVcsRUFDZCxFQUFBOztBQUdMO0VBQ0k7SUFDSSw2QkFBOEI7SUFBOUIsK0JBQThCO1lBQTlCLCtCQUE4QixFQWlCakM7SUFsQkQ7TUFZWSxRQUFPO01BQ1AsaUJBQWdCO01BQ2hCLFlBQVcsRUFDZCxFQUFBOztBQU1iO0VBQ0k7SUFDSSxZQUFXLEVBQ2QsRUFBQTs7QUFHTDtFQUNJO0lBQ0ksbUJBQWtCO0lBQ2xCLFVBQVM7SUFDVCxxQkFBYTtJQUFiLGNBQWE7SUFDYiw2QkFBc0I7SUFBdEIsOEJBQXNCO1lBQXRCLHVCQUFzQjtJQUN0QiwwQkFBbUI7WUFBbkIsb0JBQW1CLEVBVXRCO0lBZkQ7TUFRWSxnQkFBZSxFQUNsQjtJQVRUO01BWVksZ0JBQWU7TUFDZixlQUFjLEVBQ2pCO0VBR1Q7SUFHUSxnQkFBZSxFQUNsQjtFQUpMO0lBT1EsYUFBWTtJQUNaLGtCQUFpQixFQUNwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29tbW9uL3N0eWxlLXZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNDVweCAwO1xyXG59XHJcblxyXG4udG8tcG9ydGZvbGlvLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm94LWJhY2tncm91bmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggMTBweCBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQgLmJ0biB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNjcmVlbnMtaW1nIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxMCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhcmFncmFwaCB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDUlO1xyXG4gICAgICAgICAgICByaWdodDogLTMwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDIycHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAkYnRuLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IGJsYWNrO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgLmNvbnRlbnQtYm94IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5yaWdodC1jaGV2cm9uIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZS1ib3gge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuXHJcbiAgICAgICAgLnNjcmVlbnMtaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG4ua2VlcGludG91Y2gtYm94IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3gtYmFja2dyb3VuZDtcclxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDk5cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOTlweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweFxyXG4gICAgfVxyXG5cclxuICAgIC5saW5rcy1ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAuc29jaWFsIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmJveCAudG8tcG9ydGZvbGlvLWJveCAuY29udGVudCAuYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDEzNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmJveCAudG8tcG9ydGZvbGlvLWJveCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5wYXJhZ3JhcGgge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuYm94IC50by1wb3J0Zm9saW8tYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcclxuICAgIC5ib3ggLnRvLXBvcnRmb2xpby1ib3ggLmNvbnRlbnQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAucGFyYWdyYXBoIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmtlZXBpbnRvdWNoLWJveCB7XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxpbmtzLWJveCAubGluayAuc29jaWFsIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59IiwiJGJveC1zaGFkb3c6IDRweCA0cHggMTBweCBibGFjaztcclxuJGJveC1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiRidG4tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwNkJDOUIsIzFiYTQ5Yyk7Il19 */"

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

module.exports = "<div class=\"nav-wrap\">\n  <div id=\"nav\" class=\"nav\">\n    <app-logo></app-logo>\n    <div class=\"tabs-box\">\n      <a [routerLink]=\"appPaths.HOME\" class=\"tab-box\"><div class=\"tab\">home</div></a>\n      <a [routerLink]=\"appPaths.PORTFOLIO\" class=\"tab-box\"><div class=\"tab\">portfolio</div></a>\n      <a [routerLink]=\"appPaths.ABOUT\"  class=\"tab-box\"><div class=\"tab\">about</div></a>\n      <a [routerLink]=\"appPaths.CONTACT\" class=\"tab-box\"><div class=\"tab\">contact</div></a>\n    </div>\n  </div>\n\n  <div class=\"nav-mobile\" [class.open]=\"openMobile\">\n    <div (click)=\"mobileNavClicked()\" class=\"icon-box\">\n      <img src=\"assets/menu.svg\" class=\"icon\">\n    </div>\n\n    <div class=\"tabs-box\">\n      <div (click)=\"mobileNavClicked()\" class=\"close-box tab-box\">\n        <img src=\"assets/close.svg\" class=\"close\">\n      </div>\n      <a (click)=\"mobileNavClicked()\" [routerLink]=\"appPaths.HOME\" class=\"tab-box\"><img src=\"assets/home-mobile.svg\" class=\"tab\"></a>\n      <a (click)=\"mobileNavClicked()\" [routerLink]=\"appPaths.PORTFOLIO\" class=\"tab-box\"><img src=\"assets/portfolio-mobile.svg\" class=\"tab\"></a>\n      <a (click)=\"mobileNavClicked()\" [routerLink]=\"appPaths.ABOUT\" class=\"tab-box\"><img src=\"assets/about.svg\" class=\"tab\"></a>\n      <a (click)=\"mobileNavClicked()\" [routerLink]=\"appPaths.CONTACT\" class=\"tab-box\"><img src=\"assets/contact.svg\" class=\"tab\"></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-wrap {\n  -webkit-filter: drop-shadow(4px 4px 10px black);\n          filter: drop-shadow(4px 4px 10px black);\n  width: 100%; }\n  .nav-wrap .nav {\n    background-color: white;\n    height: 110px;\n    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 100%);\n            clip-path: polygon(0 0, 100% 0%, 100% 70%, 0 100%);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-transition: opacity .5s;\n    transition: opacity .5s; }\n  .nav-wrap .nav app-logo {\n      margin: 10px 1.5%; }\n  .nav-wrap .nav .tabs-box {\n      display: -webkit-box;\n      display: flex;\n      height: 77px;\n      margin-right: 20px; }\n  .nav-wrap .nav .tabs-box .tab-box {\n        height: 100%;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        text-decoration: none; }\n  .nav-wrap .nav .tabs-box .tab-box .tab {\n          padding: 10px 20px;\n          font-size: 20px;\n          font-family: 'Oswald', sans-serif;\n          text-transform: capitalize;\n          letter-spacing: 1px;\n          -webkit-transition: all .3s;\n          transition: all .3s;\n          color: rgba(128, 125, 125, 0.76);\n          position: relative;\n          cursor: pointer; }\n  .nav-wrap .nav .tabs-box .tab-box .tab:hover {\n            -webkit-transform: skew(13deg, 13deg);\n                    transform: skew(13deg, 13deg); }\n  .nav-wrap .nav .tabs-box .tab-box .tab:active {\n            -webkit-transform: skew(13deg, 13deg) translateY(5px);\n                    transform: skew(13deg, 13deg) translateY(5px); }\n  .nav-wrap .nav-mobile {\n    display: none; }\n  @media screen and (max-width: 550px) {\n  .nav-wrap .nav .tabs-box {\n    display: none; }\n  .nav-wrap .nav-mobile {\n    position: absolute;\n    display: -webkit-box;\n    display: flex;\n    right: -38px;\n    -webkit-transition: all .5s;\n    transition: all .5s;\n    top: 10px; }\n    .nav-wrap .nav-mobile.open {\n      right: -5px; }\n      .nav-wrap .nav-mobile.open .icon-box {\n        opacity: 0; }\n      .nav-wrap .nav-mobile.open .tabs-box {\n        visibility: visible; }\n    .nav-wrap .nav-mobile .icon-box {\n      background-color: gray;\n      border-radius: 99px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      padding: 8px;\n      margin: 5px;\n      max-height: 41px;\n      -webkit-transition: all .5s;\n      transition: all .5s; }\n      .nav-wrap .nav-mobile .icon-box .icon {\n        height: 25px; }\n    .nav-wrap .nav-mobile .tabs-box {\n      visibility: hidden;\n      background-color: white;\n      width: 45px;\n      padding: 5px;\n      margin: 5px;\n      border-top-left-radius: 15px;\n      border-bottom-left-radius: 15px; }\n      .nav-wrap .nav-mobile .tabs-box .tab-box {\n        margin-bottom: 5px; }\n      .nav-wrap .nav-mobile .tabs-box .close-box {\n        padding: 5px 5px 1px 5px;\n        background-color: rgba(161, 155, 155, 0.603);\n        border-radius: 99px; } }\n  @media screen and (max-width: 400px) {\n  .nav-wrap {\n    position: fixed;\n    top: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXE15IFdlYnNpdGVcXG15LXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdEQUF1QztVQUF2Qyx3Q0FBdUM7RUFDdkMsWUFBVyxFQW9EZDtFQXRERDtJQUtRLHdCQUF1QjtJQUN2QixjQUFhO0lBQ2IsMkRBQWtEO1lBQWxELG1EQUFrRDtJQUNsRCxxQkFBYTtJQUFiLGNBQWE7SUFDYiwwQkFBOEI7WUFBOUIsK0JBQThCO0lBQzlCLGdDQUF1QjtJQUF2Qix3QkFBdUIsRUF1QzFCO0VBakRMO01BYVksa0JBQWlCLEVBQ3BCO0VBZFQ7TUFpQlkscUJBQWE7TUFBYixjQUFhO01BQ2IsYUFBWTtNQUNaLG1CQUFrQixFQTZCckI7RUFoRFQ7UUFzQmdCLGFBQVk7UUFDWixxQkFBYTtRQUFiLGNBQWE7UUFDYiwwQkFBbUI7Z0JBQW5CLG9CQUFtQjtRQUNuQixzQkFBcUIsRUFzQnhCO0VBL0NiO1VBNEJvQixtQkFBa0I7VUFDbEIsZ0JBQWU7VUFDZixrQ0FBaUM7VUFDakMsMkJBQTBCO1VBQzFCLG9CQUFtQjtVQUNuQiw0QkFBbUI7VUFBbkIsb0JBQW1CO1VBQ25CLGlDQUFnQztVQUNoQyxtQkFBa0I7VUFDbEIsZ0JBQWUsRUFVbEI7RUE5Q2pCO1lBd0N3QixzQ0FBNkI7b0JBQTdCLDhCQUE2QixFQUNoQztFQXpDckI7WUE0Q3dCLHNEQUE2QztvQkFBN0MsOENBQTZDLEVBQ2hEO0VBN0NyQjtJQW9EUSxjQUFhLEVBQ2hCO0VBR0w7RUFDSTtJQUNJLGNBQWEsRUFDaEI7RUFFRDtJQUNJLG1CQUFrQjtJQUNsQixxQkFBYTtJQUFiLGNBQWE7SUFDYixhQUFZO0lBQ1osNEJBQW1CO0lBQW5CLG9CQUFtQjtJQUNuQixVQUFTLEVBaURaO0lBdEREO01BUVEsWUFBVyxFQVNkO01BakJMO1FBV1ksV0FBVSxFQUNiO01BWlQ7UUFlWSxvQkFBbUIsRUFDdEI7SUFoQlQ7TUFvQlEsdUJBQXNCO01BQ3RCLG9CQUFtQjtNQUNuQixxQkFBYTtNQUFiLGNBQWE7TUFDYiwwQkFBbUI7Y0FBbkIsb0JBQW1CO01BQ25CLHlCQUF1QjtjQUF2Qix3QkFBdUI7TUFDdkIsYUFBWTtNQUNaLFlBQVc7TUFDWCxpQkFBZ0I7TUFDaEIsNEJBQW1CO01BQW5CLG9CQUFtQixFQUt0QjtNQWpDTDtRQStCWSxhQUFZLEVBQ2Y7SUFoQ1Q7TUFvQ1EsbUJBQWtCO01BQ2xCLHdCQUF1QjtNQUN2QixZQUFXO01BQ1gsYUFBWTtNQUNaLFlBQVc7TUFDWCw2QkFBNEI7TUFDNUIsZ0NBQStCLEVBV2xDO01BckRMO1FBNkNZLG1CQUFrQixFQUNyQjtNQTlDVDtRQWlEWSx5QkFBd0I7UUFDeEIsNkNBQTRDO1FBQzVDLG9CQUFtQixFQUN0QixFQUFBO0VBS2I7RUFDSTtJQUNJLGdCQUFlO0lBQ2YsT0FBTSxFQUNULEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtd3JhcCB7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDRweCA0cHggMTBweCBibGFjayk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAubmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCUsIDEwMCUgNzAlLCAwIDEwMCUpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xyXG5cclxuICAgICAgICBhcHAtbG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxLjUlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRhYnMtYm94IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgICAgICAgICAudGFiLWJveCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAudGFiIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTI4LCAxMjUsIDEyNSwgMC43Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2tldygxM2RlZywgMTNkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMTNkZWcsIDEzZGVnKSB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtbW9iaWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgLm5hdi13cmFwIC5uYXYgLnRhYnMtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtd3JhcCAubmF2LW1vYmlsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcmlnaHQ6IC0zOHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG5cclxuICAgICAgICAmLm9wZW4ge1xyXG4gICAgICAgICAgICByaWdodDogLTVweDtcclxuXHJcbiAgICAgICAgICAgIC5pY29uLWJveCB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFicy1ib3gge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24tYm94IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQxcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXM7XHJcblxyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWJzLWJveCB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgLnRhYi1ib3gge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xvc2UtYm94IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMXB4IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNTUsIDE1NSwgMC42MDMpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5uYXYtd3JhcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxufSJdfQ== */"

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
        if (screen.width < 400) {
            document.addEventListener('scroll', function () {
                if (window.pageYOffset > 50) {
                    var currScrollPos = window.pageYOffset;
                    document.getElementById('nav').style.opacity = "" + (1 - (0.007 * currScrollPos));
                }
                if (window.pageYOffset < 50) {
                    document.getElementById('nav').style.opacity = '1';
                }
            });
        }
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

module.exports = "<div class=\"box\">\n  <div class=\"portfolio-box\">\n    <app-project class=\"project\" *ngFor=\"let project of allProjects\" [details]=\"project\"></app-project>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/portfolio/portfolio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .box .portfolio-box {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    background-color: rgba(255, 255, 255, 0.8);\n    width: 90%;\n    margin-top: 45px;\n    border-radius: 10px;\n    box-shadow: 4px 4px 10px black;\n    padding: 10px; }\n  .box .portfolio-box .project {\n      width: calc(100%/3);\n      padding: 10px; }\n  @media screen and (max-width: 800px) {\n  .box .portfolio-box {\n    display: block; }\n    .box .portfolio-box .project {\n      width: 100%; } }\n  @media screen and (max-width: 550px) {\n  .box {\n    position: relative;\n    z-index: -10; }\n    .box .portfolio-box {\n      width: 100%;\n      margin-top: 140px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcTXkgV2Vic2l0ZVxcbXktd2ViL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwb3J0Zm9saW9cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcTXkgV2Vic2l0ZVxcbXktd2ViL3NyY1xcY29tbW9uXFxzdHlsZS12YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFhO0VBQWIsY0FBYTtFQUNiLHlCQUF1QjtVQUF2Qix3QkFBdUIsRUFpQjFCO0VBbkJEO0lBS1EscUJBQWE7SUFBYixjQUFhO0lBQ2IsZ0JBQWU7SUFDZiwyQ0NSaUM7SURTakMsV0FBVTtJQUNWLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsK0JDYnVCO0lEY3ZCLGNBQWEsRUFNaEI7RUFsQkw7TUFlWSxvQkFBbUI7TUFDbkIsY0FBYSxFQUNoQjtFQUtUO0VBQ0k7SUFDSSxlQUFjLEVBS2pCO0lBTkQ7TUFJUSxZQUFXLEVBQ2QsRUFBQTtFQUlUO0VBQ0k7SUFDSSxtQkFBa0I7SUFDbEIsYUFBWSxFQU1mO0lBUkQ7TUFLUSxZQUFXO01BQ1gsa0JBQWlCLEVBQ3BCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvY29tbW9uL3N0eWxlLXZhcmlhYmxlcyc7XHJcblxyXG4uYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAucG9ydGZvbGlvLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJveC1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgIC5wcm9qZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS8zKTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLmJveCAucG9ydGZvbGlvLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxuICAgICAgICAucHJvamVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC5ib3gge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnBvcnRmb2xpby1ib3gge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJGJveC1zaGFkb3c6IDRweCA0cHggMTBweCBibGFjaztcclxuJGJveC1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbiRidG4tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwNkJDOUIsIzFiYTQ5Yyk7Il19 */"

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

module.exports = "<div class=\"flip-container project-box\">\n  <div class=\"flipper\">\n    <div class=\"front\">\n      <img [src]=\"details.image\" class=\"project-image\">\n    </div>\n    <div class=\"back\">\n      <div class=\"project-details\">\n        <div class=\"project-title\">{{ details.name }}</div>\n        <div class=\"project-description\">{{ details.description }}</div>\n        <a target=\"_blank\" [href]=\"details.link\" class=\"project-link\">visit website</a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mobile-project\">\n    <img [src]=\"details.image\" class=\"project-image\">\n    <div class=\"content-box\">\n      <div class=\"project-title\">\n        {{details.name}}\n      </div>\n      <div class=\"project-description\">\n        {{details.description}}\n      </div>\n      <a target=\"_blank\" [href]=\"details.link\" class=\"btn\">\n        <div class=\"content-box\">\n            <div class=\"content\">visit website</div>\n            <img src=\"assets/right-chevron.svg\" class=\"right-chevron\">\n        </div>\n      </a> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/portfolio/project/project.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/portfolio/project/project.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-box {\n  height: 200px; }\n  .project-box .flipper .front {\n    border-radius: 15px;\n    overflow: hidden; }\n  .project-box .flipper .back {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 20px;\n    border-radius: 15px;\n    background-color: #090530;\n    color: white; }\n  .project-box .flipper .back .project-details {\n      text-align: center;\n      font-family: 'Oswald', sans-serif; }\n  .project-box .flipper .back .project-details .project-title {\n        font-size: 25px;\n        font-weight: 600;\n        letter-spacing: .5px; }\n  .project-box .flipper .back .project-details .project-description {\n        margin-bottom: 20px; }\n  .project-box .flipper .back .project-details .project-link {\n        text-decoration: none;\n        border-radius: 99px;\n        border: 2px solid #06BC9B;\n        color: black;\n        padding: 5px 35px;\n        -webkit-transition: background .8s;\n        transition: background .8s;\n        text-transform: capitalize;\n        font-weight: 500;\n        color: white; }\n  .project-box .flipper .back .project-details .project-link:hover {\n          background-color: #06BC9B; }\n  .project-box .mobile-project {\n    display: none; }\n  .flip-container {\n  -webkit-perspective: 1000;\n          perspective: 1000; }\n  .flip-container:hover .flipper {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  .flip-container .flipper {\n    -webkit-transition: 0.6s;\n    transition: 0.6s;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    width: 100%;\n    height: 100%;\n    position: relative; }\n  .flip-container .front, .flip-container .back {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0; }\n  .flip-container .front .project-image {\n    height: 100%;\n    width: 100%; }\n  .flip-container .back {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg); }\n  @media screen and (max-width: 800px) {\n  .project-box .flipper {\n    display: none; }\n  .project-box {\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content; }\n    .project-box .mobile-project {\n      display: block;\n      background-color: rgba(153, 152, 152, 0.3);\n      padding: 10px;\n      border-radius: 10px; }\n      .project-box .mobile-project .project-image {\n        width: 100%;\n        border-radius: 10px; }\n      .project-box .mobile-project .content-box {\n        font-family: 'Oswald', sans-serif; }\n        .project-box .mobile-project .content-box .project-title {\n          font-size: 25px;\n          font-weight: 600;\n          letter-spacing: .5px; }\n        .project-box .mobile-project .content-box .project-description {\n          margin-left: 15px; }\n        .project-box .mobile-project .content-box .btn {\n          display: block;\n          border: none;\n          border-radius: 5px;\n          background-image: -webkit-gradient(linear, left top, right top, from(#06BC9B), to(#1ba49c));\n          background-image: linear-gradient(to right, #06BC9B, #1ba49c);\n          box-shadow: 3px 3px 5px black;\n          cursor: pointer;\n          text-decoration: none;\n          padding: 7px 22px;\n          margin-top: 10px; }\n          .project-box .mobile-project .content-box .btn .content-box {\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-pack: justify;\n                    justify-content: space-between;\n            -webkit-box-align: center;\n                    align-items: center;\n            color: black; }\n            .project-box .mobile-project .content-box .btn .content-box .content {\n              font-size: 20px;\n              text-transform: capitalize; }\n            .project-box .mobile-project .content-box .btn .content-box .right-chevron {\n              height: 15px;\n              margin-left: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0Zm9saW8vcHJvamVjdC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxNeSBXZWJzaXRlXFxteS13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvcnRmb2xpb1xccHJvamVjdFxccHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFzRGhCO0VBdkREO0lBTVksb0JBQW1CO0lBQ25CLGlCQUFnQixFQUNuQjtFQVJUO0lBV1kscUJBQWE7SUFBYixjQUFhO0lBQ2IsMEJBQW1CO1lBQW5CLG9CQUFtQjtJQUNuQix5QkFBdUI7WUFBdkIsd0JBQXVCO0lBQ3ZCLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsMEJBQStCO0lBQy9CLGFBQVksRUFnQ2Y7RUFqRFQ7TUFvQmdCLG1CQUFrQjtNQUNsQixrQ0FBaUMsRUEyQnBDO0VBaERiO1FBd0JvQixnQkFBZTtRQUNmLGlCQUFnQjtRQUNoQixxQkFBb0IsRUFDdkI7RUEzQmpCO1FBOEJvQixvQkFBbUIsRUFDdEI7RUEvQmpCO1FBa0NvQixzQkFBcUI7UUFDckIsb0JBQW1CO1FBQ25CLDBCQUF5QjtRQUN6QixhQUFZO1FBQ1osa0JBQWlCO1FBQ2pCLG1DQUEwQjtRQUExQiwyQkFBMEI7UUFDMUIsMkJBQTBCO1FBQzFCLGlCQUFnQjtRQUNoQixhQUFZLEVBS2Y7RUEvQ2pCO1VBNkN3QiwwQkFBeUIsRUFDNUI7RUE5Q3JCO0lBcURRLGNBQWEsRUFDaEI7RUFHTDtFQUNJLDBCQUFpQjtVQUFqQixrQkFBaUIsRUFtQ2xCO0VBcENIO0lBS1EsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUM3QjtFQU5MO0lBU1EseUJBQWdCO0lBQWhCLGlCQUFnQjtJQUNoQixxQ0FBNEI7WUFBNUIsNkJBQTRCO0lBQzVCLFlBQVc7SUFDWCxhQUFZO0lBQ1osbUJBQWtCLEVBQ3JCO0VBZEw7SUFpQlEsb0NBQTJCO1lBQTNCLDRCQUEyQjtJQUMzQixZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixPQUFNO0lBQ04sUUFBTyxFQUNWO0VBdkJMO0lBNEJZLGFBQVk7SUFDWixZQUFXLEVBQ2Q7RUE5QlQ7SUFrQ1EsbUNBQTBCO1lBQTFCLDJCQUEwQixFQUM3QjtFQUdMO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCO0VBRUQ7SUFDSSw0QkFBbUI7SUFBbkIseUJBQW1CO0lBQW5CLG9CQUFtQixFQXdEdEI7SUF6REQ7TUFJUSxlQUFjO01BQ2QsMkNBQTBDO01BQzFDLGNBQWE7TUFDYixvQkFBbUIsRUFpRHRCO01BeERMO1FBVVksWUFBVztRQUNYLG9CQUFtQixFQUN0QjtNQVpUO1FBZVksa0NBQWlDLEVBd0NwQztRQXZEVDtVQWtCZ0IsZ0JBQWU7VUFDZixpQkFBZ0I7VUFDaEIscUJBQW9CLEVBQ3ZCO1FBckJiO1VBd0JnQixrQkFBaUIsRUFDcEI7UUF6QmI7VUE0QmdCLGVBQWM7VUFDZCxhQUFZO1VBQ1osbUJBQWtCO1VBQ2xCLDRGQUEyRDtVQUEzRCw4REFBMkQ7VUFDM0QsOEJBQTZCO1VBQzdCLGdCQUFlO1VBQ2Ysc0JBQXFCO1VBQ3JCLGtCQUFpQjtVQUNqQixpQkFBZ0IsRUFrQm5CO1VBdERiO1lBdUNvQixxQkFBYTtZQUFiLGNBQWE7WUFDYiwwQkFBOEI7b0JBQTlCLCtCQUE4QjtZQUM5QiwwQkFBbUI7b0JBQW5CLG9CQUFtQjtZQUNuQixhQUFZLEVBV2Y7WUFyRGpCO2NBNkN3QixnQkFBZTtjQUNmLDJCQUEwQixFQUM3QjtZQS9DckI7Y0FrRHdCLGFBQVk7Y0FDWixrQkFBaUIsRUFDcEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9ydGZvbGlvL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWJveCB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgIC5mbGlwcGVyIHtcclxuXHJcbiAgICAgICAgLmZyb250IHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWNrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5LCA1LCA0OCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LWRldGFpbHMgeyAgICBcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAgICAgICAgICAgICAucHJvamVjdC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzA2QkM5QjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuOHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDZCQzlCO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubW9iaWxlLXByb2plY3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGlwLWNvbnRhaW5lciB7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMDtcclxuXHJcblxyXG4gICAgJjpob3ZlciAuZmxpcHBlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mbGlwcGVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZyb250LCAuYmFjayB7XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZyb250IHtcclxuICAgICAgICBcclxuICAgICAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnByb2plY3QtYm94IC5mbGlwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LWJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICAubW9iaWxlLXByb2plY3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTMsIDE1MiwgMTUyLCAwLjMpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGVudC1ib3gge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAucHJvamVjdC10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMwNkJDOUIsIzFiYTQ5Yyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggMjJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50LWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yaWdodC1jaGV2cm9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgXHJcbiAgXHJcblxyXG4iXX0= */"

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
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/about/about.component */ "./src/app/components/about/about.component.ts");





var appRoutes = [
    { path: '', redirectTo: "" + _paths__WEBPACK_IMPORTED_MODULE_0__["HOME"], pathMatch: 'full' },
    { path: _paths__WEBPACK_IMPORTED_MODULE_0__["HOME"], component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: _paths__WEBPACK_IMPORTED_MODULE_0__["PORTFOLIO"], component: _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: _paths__WEBPACK_IMPORTED_MODULE_0__["CONTACT"], component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: _paths__WEBPACK_IMPORTED_MODULE_0__["ABOUT"], component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] }
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