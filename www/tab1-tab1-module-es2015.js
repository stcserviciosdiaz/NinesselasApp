(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab1/tab1.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"text-center\">\n      <img _ngcontent-hsp-c3=\"\" alt=\"\" src=\"/assets/icon/LOGONINESSELAS2.png\" style=\"width: 35%; padding: 10px 2px 2px;\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div class=\"row row-search\">\n  <div class=\"col\">\n      <ion-searchbar placeholder=\"Busqueda\" showCancelButton=\"focus\"></ion-searchbar>\n  </div>\n</div>\n\n<ion-content class=\"nine-main\">\n    <ion-card class=\"welcome-card\">\n      <img src=\"/assets/img/slider05-min.jpg\" alt=\"\" />\n      <ion-card-header class=\"card-text\">\n        <ion-card-subtitle class=\"text-light\">Bienvenido</ion-card-subtitle>\n        <ion-card-title class=\"text-light\">AGENCIA DE ACTORES Y FIGURACIÓN</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"card-boton\">\n        <div class=\"row-cad row\">\n          <div class=\"col base01\">\n              <ion-item color=\"primary\" href=\"https://ionicframework.com/docs/\">\n                  <ion-label>\n                    Figuración\n                    <p>Artes figurativas para obras teatral o cinematográfica</p>\n                  </ion-label>\n                  <ion-badge color=\"light\">99</ion-badge>\n              </ion-item>\n          </div>\n          <div class=\"col base01\">\n            <ion-item color=\"primary\" href=\"https://ionicframework.com/docs/\">\n                <ion-label>\n                  Actor\n                  <p>Interprete de un personaje de ciencia ficticio ya sea en el cine, en la radio o en la televisión</p>\n                </ion-label>\n                <ion-badge color=\"light\">45</ion-badge>\n            </ion-item>\n          </div>\n          <div class=\"col base01\">\n            <ion-item color=\"primary\" href=\"https://ionicframework.com/docs/\">\n                <ion-label>\n                  Niños\n                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>\n                </ion-label>\n                <ion-badge color=\"light\">75</ion-badge>\n            </ion-item>\n          </div>\n        </div>\n      </ion-card-content>\n      <div class=\"row text-center card-redes\">\n        <div class=\"col col-redes\">\n          <div class=\"bg-facebook\">\n            <ion-icon class=\"icon\" name=\"logo-facebook\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"col col-redes\">\n          <div class=\"bg-instagram\">\n            <ion-icon class=\"icon\" name=\"logo-instagram\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"col col-redes\">\n          <div class=\"bg-youtube\">\n            <ion-icon class=\"icon\" name=\"logo-youtube\"></ion-icon>\n          </div>\n        </div>\n      </div>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-search {\n  padding: 5px 4px 0px 4px;\n}\n\n.nine-main .welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.nine-main .welcome-card .card-boton .row-cad {\n  padding-top: 10px;\n}\n\n.nine-main .welcome-card .card-boton .row-cad .base01 {\n  padding: 3px 3px 3px 3px;\n}\n\n.nine-main .welcome-card .card-redes .col-redes .bg-facebook {\n  padding: 20px 20px 20px 20px;\n  background-color: #3b5998;\n}\n\n.nine-main .welcome-card .card-redes .col-redes .bg-facebook .icon {\n  color: white;\n  font-size: 30px;\n}\n\n.nine-main .welcome-card .card-redes .col-redes .bg-instagram {\n  padding: 20px 20px 20px 20px;\n  background-image: url(/assets/img/bg-instagram.jpg);\n}\n\n.nine-main .welcome-card .card-redes .col-redes .bg-instagram .icon {\n  color: white;\n  font-size: 30px;\n}\n\n.nine-main .welcome-card .card-redes .col-redes .bg-youtube {\n  padding: 20px 20px 20px 20px;\n  background-color: #c4302b;\n}\n\n.nine-main .welcome-card .card-redes .col-redes .bg-youtube .icon {\n  color: white;\n  font-size: 30px;\n}\n\n.nine-main .welcome-card .card-text {\n  position: absolute;\n  z-index: 999;\n  top: 20%;\n}\n\n.nine-main .card-content-md p {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmFiYmVkaXRvcjMvRGVza3RvcC9DTElFTlRFUy9BUFAgSU9OSUMvTmluZXNzZWxhc0FwcC9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREdJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FOOztBREdNO0VBQ0UsaUJBQUE7QUNEUjs7QURFUTtFQUNFLHdCQUFBO0FDQVY7O0FETVE7RUFDRSw0QkFBQTtFQUNBLHlCQUFBO0FDSlY7O0FES1U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0haOztBRE1RO0VBQ0UsNEJBQUE7RUFDQSxtREFBQTtBQ0pWOztBREtVO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNIWjs7QURNUTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7QUNKVjs7QURLVTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDSFo7O0FEUUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDTk47O0FEVUk7RUFDRSxlQUFBO0FDUk4iLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1zZWFyY2h7XG4gIHBhZGRpbmc6IDVweCA0cHggMHB4IDRweDtcbn1cbi5uaW5lLW1haW57XG4gIC53ZWxjb21lLWNhcmQge1xuICAgIGltZ3tcbiAgICAgIG1heC1oZWlnaHQ6IDM1dmg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbiAgICAuY2FyZC1ib3RvbntcbiAgICAgIC5yb3ctY2Fke1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgLmJhc2UwMXtcbiAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmNhcmQtcmVkZXN7XG4gICAgICAuY29sLXJlZGVze1xuICAgICAgICAuYmctZmFjZWJvb2t7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmctaW5zdGFncmFte1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JnLWluc3RhZ3JhbS5qcGcpO1xuICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYmcteW91dHViZXtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNDMwMmI7XG4gICAgICAgICAgLmljb257XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5jYXJkLXRleHR7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgICB0b3A6IDIwJTtcbiAgICB9XG4gIH1cbiAgLmNhcmQtY29udGVudC1tZHtcbiAgICBwe1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxufSIsIi5yb3ctc2VhcmNoIHtcbiAgcGFkZGluZzogNXB4IDRweCAwcHggNHB4O1xufVxuXG4ubmluZS1tYWluIC53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5uaW5lLW1haW4gLndlbGNvbWUtY2FyZCAuY2FyZC1ib3RvbiAucm93LWNhZCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm5pbmUtbWFpbiAud2VsY29tZS1jYXJkIC5jYXJkLWJvdG9uIC5yb3ctY2FkIC5iYXNlMDEge1xuICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XG59XG4ubmluZS1tYWluIC53ZWxjb21lLWNhcmQgLmNhcmQtcmVkZXMgLmNvbC1yZWRlcyAuYmctZmFjZWJvb2sge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuLm5pbmUtbWFpbiAud2VsY29tZS1jYXJkIC5jYXJkLXJlZGVzIC5jb2wtcmVkZXMgLmJnLWZhY2Vib29rIC5pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ubmluZS1tYWluIC53ZWxjb21lLWNhcmQgLmNhcmQtcmVkZXMgLmNvbC1yZWRlcyAuYmctaW5zdGFncmFtIHtcbiAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggMjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JnLWluc3RhZ3JhbS5qcGcpO1xufVxuLm5pbmUtbWFpbiAud2VsY29tZS1jYXJkIC5jYXJkLXJlZGVzIC5jb2wtcmVkZXMgLmJnLWluc3RhZ3JhbSAuaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLm5pbmUtbWFpbiAud2VsY29tZS1jYXJkIC5jYXJkLXJlZGVzIC5jb2wtcmVkZXMgLmJnLXlvdXR1YmUge1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQzMDJiO1xufVxuLm5pbmUtbWFpbiAud2VsY29tZS1jYXJkIC5jYXJkLXJlZGVzIC5jb2wtcmVkZXMgLmJnLXlvdXR1YmUgLmljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5uaW5lLW1haW4gLndlbGNvbWUtY2FyZCAuY2FyZC10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5OTk7XG4gIHRvcDogMjAlO1xufVxuLm5pbmUtbWFpbiAuY2FyZC1jb250ZW50LW1kIHAge1xuICBmb250LXNpemU6IDEzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab1Page = class Tab1Page {
    constructor() { }
};
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: __webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map