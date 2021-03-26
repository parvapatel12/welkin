(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/parvapatel/Desktop/Parva/development/welkin/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3EzL":
    /*!******************************************************************************!*\
      !*** ./src/project/product-bird-diverter/product-bird-diverter.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ProductBirdDiverterComponent */

    /***/
    function EzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductBirdDiverterComponent", function () {
        return ProductBirdDiverterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _welkin_header_welkin_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../welkin-header/welkin-header.component */
      "Lfpk");

      var ProductBirdDiverterComponent = /*#__PURE__*/function () {
        function ProductBirdDiverterComponent() {
          _classCallCheck(this, ProductBirdDiverterComponent);
        }

        _createClass(ProductBirdDiverterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductBirdDiverterComponent;
      }();

      ProductBirdDiverterComponent.ɵfac = function ProductBirdDiverterComponent_Factory(t) {
        return new (t || ProductBirdDiverterComponent)();
      };

      ProductBirdDiverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductBirdDiverterComponent,
        selectors: [["app-product-bird-diverter"]],
        decls: 10,
        vars: 0,
        consts: [[1, "d-flex", "flex-row", "justify-content-center", "animation-div"], ["src", "assets/birdDiverter.gif", 1, "bird-diverter-gif"], [1, "product-name"], [1, "product-heading"], [1, "product-bird-diverter"]],
        template: function ProductBirdDiverterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-welkin-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FireFLY");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xAE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bird Diverters");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_welkin_header_welkin_header_component__WEBPACK_IMPORTED_MODULE_1__["WelkinHeaderComponent"]],
        styles: [".bird-diverter-gif[_ngcontent-%COMP%] {\n  width: 600px;\n  -webkit-animation: bird-diverter 0.75s infinite;\n          animation: bird-diverter 0.75s infinite;\n}\n\n@-webkit-keyframes bird-diverter {\n  0% {\n    transform: translate(-5px, -220px) rotate(2deg);\n  }\n  50% {\n    transform: translate(5px, -220px) rotate(-2deg);\n  }\n  100% {\n    transform: translate(-5px, -220px) rotate(2deg);\n  }\n}\n\n@keyframes bird-diverter {\n  0% {\n    transform: translate(-5px, -220px) rotate(2deg);\n  }\n  50% {\n    transform: translate(5px, -220px) rotate(-2deg);\n  }\n  100% {\n    transform: translate(-5px, -220px) rotate(2deg);\n  }\n}\n\n.animation-div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 5rem 8rem;\n}\n\n.product-heading[_ngcontent-%COMP%] {\n  font-size: 4.5rem;\n  font-weight: 600;\n  line-height: 1;\n  color: #ac2429;\n}\n\n.product-bird-diverter[_ngcontent-%COMP%] {\n  font-size: 2.9rem;\n  font-weight: 500;\n  line-height: 1;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2R1Y3QtYmlyZC1kaXZlcnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLCtDQUFBO0VBQ0Y7RUFDQTtJQUNFLCtDQUFBO0VBQ0Y7RUFDQTtJQUNFLCtDQUFBO0VBQ0Y7QUFDRjs7QUFWQTtFQUNFO0lBQ0UsK0NBQUE7RUFDRjtFQUNBO0lBQ0UsK0NBQUE7RUFDRjtFQUNBO0lBQ0UsK0NBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQUYiLCJmaWxlIjoicHJvZHVjdC1iaXJkLWRpdmVydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpcmQtZGl2ZXJ0ZXItZ2lmIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBhbmltYXRpb246IGJpcmQtZGl2ZXJ0ZXIgMC43NXMgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmlyZC1kaXZlcnRlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAtMjIwcHgpIHJvdGF0ZSgyZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCwgLTIyMHB4KSByb3RhdGUoLTJkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC0yMjBweCkgcm90YXRlKDJkZWcpO1xuICB9XG59XG5cbi5hbmltYXRpb24tZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QtbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDVyZW0gOHJlbTtcbn1cblxuLnByb2R1Y3QtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogNC41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICNhYzI0Mjk7XG59XG5cbi5wcm9kdWN0LWJpcmQtZGl2ZXJ0ZXIge1xuICBmb250LXNpemU6IDIuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjNjY2O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Lfpk":
    /*!**************************************************************!*\
      !*** ./src/project/welkin-header/welkin-header.component.ts ***!
      \**************************************************************/

    /*! exports provided: WelkinHeaderComponent */

    /***/
    function Lfpk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelkinHeaderComponent", function () {
        return WelkinHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function WelkinHeaderComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function WelkinHeaderComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var WelkinHeaderComponent = /*#__PURE__*/function () {
        function WelkinHeaderComponent() {
          _classCallCheck(this, WelkinHeaderComponent);

          this.scrolledDown = false;
        }

        _createClass(WelkinHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelkinHeaderComponent;
      }();

      WelkinHeaderComponent.ɵfac = function WelkinHeaderComponent_Factory(t) {
        return new (t || WelkinHeaderComponent)();
      };

      WelkinHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WelkinHeaderComponent,
        selectors: [["app-welkin-header"]],
        decls: 23,
        vars: 2,
        consts: [[1, "d-flex", "flex-row", "justify-content-center", "nav-bar", "sticky-top", "welkin-shadow"], [1, "d-flex", "flex-row", "justify-content-end"], [1, "nav-option"], [1, "nav-option", "active"], ["class", "logo-div", 4, "ngIf"], ["class", "logo-div-2", 4, "ngIf"], [1, "d-flex", "flex-row", "justify-content-start"], [1, "logo-div"], ["src", "/assets/logoWithName.png", 1, "main-logo"], [1, "logo-div-2"], ["src", "/assets/welkin-symbol.png", 1, "main-logo-2"]],
        template: function WelkinHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Technology");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WelkinHeaderComponent_div_11_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WelkinHeaderComponent_div_12_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.scrolledDown);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scrolledDown);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".nav-bar[_ngcontent-%COMP%] {\n  height: 100px;\n  background: white;\n  overflow: hidden;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #444 !important;\n}\n\n.active[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 115px;\n  height: 50px;\n  background: linear-gradient(white, rgba(236, 99, 31, 0.3));\n  transform: translate(-95px, 45px);\n}\n\n.nav-option[_ngcontent-%COMP%] {\n  padding: 2rem;\n  line-height: 2;\n  color: #999;\n  transition-duration: 0.2s;\n}\n\n.nav-option[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-option[_ngcontent-%COMP%]:hover {\n  color: #666;\n}\n\n.logo-div[_ngcontent-%COMP%] {\n  height: 100%;\n  line-height: 6;\n}\n\n.main-logo[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.logo-div-2[_ngcontent-%COMP%] {\n  height: 100%;\n  line-height: 6;\n}\n\n.main-logo-2[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dlbGtpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFJQSwwREFBQTtFQUdBLGlDQUFBO0FBSko7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUxGOztBQU9FO0VBQ0UsZUFBQTtBQUxKOztBQVFFO0VBQ0UsV0FBQTtBQU5KOztBQWtCQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBZkY7O0FBa0JBO0VBQ0UsWUFBQTtBQWZGOztBQWtCQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBZkY7O0FBa0JBO0VBQ0UsWUFBQTtBQWZGIiwiZmlsZSI6IndlbGtpbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWJhciB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWN0aXZlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM0NDQgIWltcG9ydGFudDtcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC8vYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDAgMDtcbiAgICAvL2JhY2tncm91bmQ6ICNlYzYzMWY7XG4gICAgLy9iYWNrZ3JvdW5kOiAjZWM2MzFmNjk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMSksIHJnYmEoMjM2LCA5OSwgMzEsIDAuMykpO1xuICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcycHgsIDQwcHgpO1xuICAgIC8vdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTg2cHgsIDQ1cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC05NXB4LCA0NXB4KTtcbiAgfVxufVxuXG4ubmF2LW9wdGlvbiB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBjb2xvcjogIzk5OTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcblxuICBzcGFuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogIzY2NjtcbiAgICAvLyY6YWZ0ZXIge1xuICAgIC8vICBjb250ZW50OiBcIlwiO1xuICAgIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gIHdpZHRoOiAxMDAlO1xuICAgIC8vICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDEpLCByZ2JhKDIzNiwgOTksIDMxLCAwLjMpKTtcbiAgICAvLyAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk1cHgsIDQ1cHgpO1xuICAgIC8vfVxuICB9XG59XG5cbi5sb2dvLWRpdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDY7XG59XG5cbi5tYWluLWxvZ28ge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5sb2dvLWRpdi0yIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogNjtcbn1cblxuLm1haW4tbG9nby0yIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _project_product_bird_diverter_product_bird_diverter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../project/product-bird-diverter/product-bird-diverter.component */
      "3EzL");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'welkin';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-bird-diverter");
          }
        },
        directives: [_project_product_bird_diverter_product_bird_diverter_component__WEBPACK_IMPORTED_MODULE_1__["ProductBirdDiverterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _project_welkin_header_welkin_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../project/welkin-header/welkin-header.component */
      "Lfpk");
      /* harmony import */


      var _project_product_bird_diverter_product_bird_diverter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../project/product-bird-diverter/product-bird-diverter.component */
      "3EzL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _project_welkin_header_welkin_header_component__WEBPACK_IMPORTED_MODULE_3__["WelkinHeaderComponent"], _project_product_bird_diverter_product_bird_diverter_component__WEBPACK_IMPORTED_MODULE_4__["ProductBirdDiverterComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map