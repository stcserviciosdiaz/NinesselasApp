(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab2/tab2.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"login\">\n  <div class=\"contenid-login\">\n    <!-- Input with placeholder -->\n    <img class=\"center-logo\" src=\"/assets/icon/LOGONINESSELAS2.png\" alt=\"Logo\" style=\"width: 70%;\">\n    <h5 class=\"pt-5 pb-3 text-center fs-27\">Bienvenido a tu APP</h5>\n    <ion-item>\n        <ion-label position=\"floating\">Usuario</ion-label>\n        <ion-input></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"floating\">Contraseña</ion-label>\n        <ion-input></ion-input>\n    </ion-item>\n    <!-- Boton Ingresar -->\n    <ion-button class=\"btn-send\" color=\"primary\">Ingresar</ion-button>\n    <div class=\"or pt-4\">\n        <h6 class=\"pb-3 text-center\">Tambien Ingresas con</h6>\n        <div class=\"row icon-login\">\n          <div class=\"col-1\"><ion-icon class=\"icon\" name=\"logo-facebook\"></ion-icon></div>\n          <div class=\"col-1\"><ion-icon class=\"icon\" name=\"logo-google\"></ion-icon></div>\n        </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login .contenid-login {\n  padding: 40px 40px 30px 40px;\n}\n.login .contenid-login .center-logo {\n  display: -webkit-box;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n}\n.login .contenid-login .btn-send {\n  margin-top: 30px;\n  width: 100%;\n}\n.login .contenid-login .or .icon-login {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFiYmVkaXRvcjMvRGVza3RvcC9DTElFTlRFUy9BUFAgSU9OSUMvTmluZXNzZWxhc0FwcC9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSw0QkFBQTtBQ0FSO0FEQ1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURDUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ0NaO0FERVk7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDQWhCIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcbiAgICAuY29udGVuaWQtbG9naW57XG4gICAgICAgIHBhZGRpbmc6IDQwcHggNDBweCAzMHB4IDQwcHg7XG4gICAgICAgIC5jZW50ZXItbG9nb3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuYnRuLXNlbmR7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLm9ye1xuICAgICAgICAgICAgLmljb24tbG9naW57XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmxvZ2luIC5jb250ZW5pZC1sb2dpbiB7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAzMHB4IDQwcHg7XG59XG4ubG9naW4gLmNvbnRlbmlkLWxvZ2luIC5jZW50ZXItbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubG9naW4gLmNvbnRlbmlkLWxvZ2luIC5idG4tc2VuZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luIC5jb250ZW5pZC1sb2dpbiAub3IgLmljb24tbG9naW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab2Page = class Tab2Page {
    constructor() { }
};
Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: __webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab2/tab2.page.html"),
        styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map