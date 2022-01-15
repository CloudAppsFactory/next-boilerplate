module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Server_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Server/i18n */ "./server/i18n.ts");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Actions */ "./src/Actions/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// #region Global Imports

 // #endregion Global Imports
// #region Local Imports



 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const Home = ({
  t,
  i18n
}) => {
  const home = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.home);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const renderLocaleButtons = activeLanguage => ["en", "es", "tr"].map(lang => __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["LocaleButton"], {
    key: lang,
    lang: lang,
    isActive: activeLanguage === lang,
    onClick: () => i18n.changeLanguage(lang)
  }));

  return __jsx("div", {
    style: Styles.main
  }, __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["Navbar"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["InstituteSelection"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["FeatureTiles"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["WelcomeSection"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["Testimonials"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["ClientsSay"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["ContactSection"], null));
};

Home.getInitialProps = async (ctx) => {
  await ctx.store.dispatch(_Actions__WEBPACK_IMPORTED_MODULE_3__["HomeActions"].GetApod({
    params: {
      hd: true
    }
  }));
  return {
    namespacesRequired: ["common"]
  };
};

const Extended = Object(_Server_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])("common")(Home);
const Styles = {
  main: {
    background: "#02042B"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ }),

/***/ "./server/i18n.ts":
/*!************************!*\
  !*** ./server/i18n.ts ***!
  \************************/
/*! exports provided: appWithTranslation, withTranslation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appWithTranslation", function() { return appWithTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTranslation", function() { return withTranslation; });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-i18next */ "next-i18next");
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
// #region Global Imports
 // #endregion Global Imports

const NextI18NextInstance = new next_i18next__WEBPACK_IMPORTED_MODULE_0___default.a({
  defaultLanguage: "en",
  otherLanguages: ["es", "tr"]
});
const {
  appWithTranslation,
  withTranslation
} = NextI18NextInstance;
/* harmony default export */ __webpack_exports__["default"] = (NextI18NextInstance);

/***/ }),

/***/ "./src/Actions/HomeActions/index.ts":
/*!******************************************!*\
  !*** ./src/Actions/HomeActions/index.ts ***!
  \******************************************/
/*! exports provided: HomeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeActions", function() { return HomeActions; });
/* harmony import */ var _Definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Definitions */ "./src/Definitions/index.ts");
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services */ "./src/Services/index.ts");
// #region Global Imports
// #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const HomeActions = {
  Map: payload => ({
    payload,
    type: _Definitions__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"].Home.SetReducer
  }),
  Reset: () => ({
    type: _Definitions__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"].Home.ResetReducer
  }),
  GetApod: payload => async (dispatch) => {
    const result = await _Services__WEBPACK_IMPORTED_MODULE_1__["PlanetaryService"].GetPlanetImage({
      params: payload.params
    });
    dispatch({
      payload: {
        image: result
      },
      type: _Definitions__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"].Home.SetReducer
    });
  }
};

/***/ }),

/***/ "./src/Actions/index.ts":
/*!******************************!*\
  !*** ./src/Actions/index.ts ***!
  \******************************/
/*! exports provided: HomeActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeActions */ "./src/Actions/HomeActions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeActions", function() { return _HomeActions__WEBPACK_IMPORTED_MODULE_0__["HomeActions"]; });



/***/ }),

/***/ "./src/Components/Basic/Button/index.tsx":
/*!***********************************************!*\
  !*** ./src/Components/Basic/Button/index.tsx ***!
  \***********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// #region Global Imports

 // #endregion Global Imports
// #region Local Imports

// #endregion Local Imports
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    cursor: ${({
  disabled
}) => disabled ? "not-allowed" : "pointer"};
    color: ${({
  theme
}) => theme.colors.primary};
`;
const Button = props => {
  return __jsx(Container, props);
};

/***/ }),

/***/ "./src/Components/Basic/index.ts":
/*!***************************************!*\
  !*** ./src/Components/Basic/index.ts ***!
  \***************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Components/Basic/Button/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });



/***/ }),

/***/ "./src/Components/ClientsSay/ClientsSay.module.css":
/*!*********************************************************!*\
  !*** ./src/Components/ClientsSay/ClientsSay.module.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainparent": "ClientsSay_mainparent__23AOF",
	"para": "ClientsSay_para__1eMSw",
	"postername": "ClientsSay_postername__1yM5N",
	"posterposition": "ClientsSay_posterposition__2z_dU",
	"txtmain": "ClientsSay_txtmain__1TOVE",
	"hrr": "ClientsSay_hrr__25-wV"
};


/***/ }),

/***/ "./src/Components/ClientsSay/index.tsx":
/*!*********************************************!*\
  !*** ./src/Components/ClientsSay/index.tsx ***!
  \*********************************************/
/*! exports provided: ClientsSay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsSay", function() { return ClientsSay; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientsSay.module.css */ "./src/Components/ClientsSay/ClientsSay.module.css");
/* harmony import */ var _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slantDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slantDiv */ "./src/Components/ClientsSay/slantDiv.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ClientsSay = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mainparent
  }, __jsx("div", null, __jsx("img", {
    src: "/images/clientsay.png",
    width: "auto",
    height: "250px"
  })), __jsx("div", {
    className: _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txtmain
  }, __jsx("div", {
    className: _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hrr
  }), __jsx("div", {
    style: {
      fontSize: '30px'
    }
  }, "What Our Client Say"), __jsx("div", null, __jsx("img", {
    src: "/images/svg/quote.svg",
    width: "auto",
    height: "30px"
  })), __jsx("div", {
    className: _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.para
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."), __jsx("div", {
    className: _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.postername
  }, "James Anderson"), __jsx("div", {
    className: _ClientsSay_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.posterposition
  }, "Don Bosco Principle"))), __jsx(_slantDiv__WEBPACK_IMPORTED_MODULE_2__["SlantDiv"], null));
};

/***/ }),

/***/ "./src/Components/ClientsSay/slantDiv.tsx":
/*!************************************************!*\
  !*** ./src/Components/ClientsSay/slantDiv.tsx ***!
  \************************************************/
/*! exports provided: SlantDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlantDiv", function() { return SlantDiv; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const SlantDiv = () => {
  return __jsx("svg", {
    style: Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, __jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#02042B",
    id: "top"
  }), __jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#EEEFF2",
    id: "bottom"
  }), __jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#02042B",
    id: "bottom"
  }));
};
const Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};

/***/ }),

/***/ "./src/Components/ContactSection/ContactSection.module.css":
/*!*****************************************************************!*\
  !*** ./src/Components/ContactSection/ContactSection.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainparent": "ContactSection_mainparent__vpGd3",
	"txtmain": "ContactSection_txtmain__2VcBW",
	"hrr": "ContactSection_hrr__3OpFi",
	"formrow": "ContactSection_formrow__Y6PEr",
	"txtareaouter": "ContactSection_txtareaouter__27Gh8",
	"textArea": "ContactSection_textArea__OMg48",
	"outrfrm": "ContactSection_outrfrm__8TyaN",
	"inptt": "ContactSection_inptt__Tp33A",
	"buttonn": "ContactSection_buttonn__1xQJD"
};


/***/ }),

/***/ "./src/Components/ContactSection/index.tsx":
/*!*************************************************!*\
  !*** ./src/Components/ContactSection/index.tsx ***!
  \*************************************************/
/*! exports provided: ContactSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSection", function() { return ContactSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactSection.module.css */ "./src/Components/ContactSection/ContactSection.module.css");
/* harmony import */ var _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slantDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slantDiv */ "./src/Components/ContactSection/slantDiv.tsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContactSection = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mainparent
  }, __jsx("div", null, __jsx("img", {
    src: "/images/contact.png",
    width: "auto",
    height: "150px"
  })), __jsx("div", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txtmain
  }, __jsx("div", {
    style: {
      fontSize: '30px',
      fontWeight: "bold"
    }
  }, "Let's get in touch"), __jsx("div", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formrow
  }, __jsx("div", null, __jsx("input", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inptt,
    type: "text",
    placeholder: "Your Name"
  })), __jsx("div", null, __jsx("input", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inptt,
    type: "text",
    placeholder: "Email Address"
  }))), __jsx("div", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formrow
  }, __jsx("div", null, __jsx("input", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inptt,
    type: "text",
    placeholder: "Phone No."
  })), __jsx("div", null, __jsx("input", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inptt,
    type: "text",
    placeholder: "Status"
  }))), __jsx("div", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txtareaouter
  }, __jsx("textarea", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.textArea,
    placeholder: "Your Message"
  })), __jsx("div", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formrow
  }, __jsx("button", {
    className: _ContactSection_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.buttonn
  }, "Submit")))), __jsx(_slantDiv__WEBPACK_IMPORTED_MODULE_2__["SlantDiv"], null));
};

/***/ }),

/***/ "./src/Components/ContactSection/slantDiv.tsx":
/*!****************************************************!*\
  !*** ./src/Components/ContactSection/slantDiv.tsx ***!
  \****************************************************/
/*! exports provided: SlantDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlantDiv", function() { return SlantDiv; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const SlantDiv = () => {
  return __jsx("svg", {
    style: Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, __jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#ECECED",
    id: "top"
  }), __jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#02042B",
    id: "bottom"
  }), __jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#ECECED",
    id: "bottom"
  }));
};
const Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};

/***/ }),

/***/ "./src/Components/FeatureTiles/FeatureCard.module.css":
/*!************************************************************!*\
  !*** ./src/Components/FeatureTiles/FeatureCard.module.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"imgBrdr": "FeatureCard_imgBrdr__20nsy",
	"text": "FeatureCard_text__kHUVP",
	"outrCard": "FeatureCard_outrCard__QDd4k"
};


/***/ }),

/***/ "./src/Components/FeatureTiles/FeatureCard.tsx":
/*!*****************************************************!*\
  !*** ./src/Components/FeatureTiles/FeatureCard.tsx ***!
  \*****************************************************/
/*! exports provided: FeatureCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCard", function() { return FeatureCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureCard.module.css */ "./src/Components/FeatureTiles/FeatureCard.module.css");
/* harmony import */ var _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const FeatureCard = ({
  text,
  icon,
  isFullImg
}) => __jsx("div", {
  className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.outrCard
}, isFullImg ? __jsx("img", {
  className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imgBrdr,
  src: `/images/svg/${icon}`,
  width: "100%",
  height: "50px"
}) : __jsx("img", {
  className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.imgBrdr,
  src: `/images/svg/${icon}`,
  width: "100%",
  height: "50px"
}), __jsx("div", {
  className: _FeatureCard_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.text
}, text));

/***/ }),

/***/ "./src/Components/FeatureTiles/FeatureTiles.module.css":
/*!*************************************************************!*\
  !*** ./src/Components/FeatureTiles/FeatureTiles.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"text": "FeatureTiles_text__1QU64",
	"hrr": "FeatureTiles_hrr__SBSqh",
	"cardsDiv": "FeatureTiles_cardsDiv__3Z3lo",
	"imgBrdr": "FeatureTiles_imgBrdr__2fUxL",
	"txtstyl": "FeatureTiles_txtstyl__3s_zO",
	"outrcrd": "FeatureTiles_outrcrd__2HskM"
};


/***/ }),

/***/ "./src/Components/FeatureTiles/index.tsx":
/*!***********************************************!*\
  !*** ./src/Components/FeatureTiles/index.tsx ***!
  \***********************************************/
/*! exports provided: FeatureTiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTiles", function() { return FeatureTiles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FeatureCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatureCard */ "./src/Components/FeatureTiles/FeatureCard.tsx");
/* harmony import */ var _slantDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slantDiv */ "./src/Components/FeatureTiles/slantDiv.tsx");
/* harmony import */ var _FeatureTiles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureTiles.module.css */ "./src/Components/FeatureTiles/FeatureTiles.module.css");
/* harmony import */ var _FeatureTiles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FeatureTiles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];




const FeatureTiles = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    style: {
      background: "#EEEFF2"
    }
  }, __jsx("div", {
    className: _FeatureTiles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.text
  }, "Enabling fees payment for schools online"), __jsx("div", {
    className: _FeatureTiles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.hrr
  }), __jsx("div", {
    className: _FeatureTiles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.cardsDiv
  }, CardsDetails.map((card, indx) => __jsx(_FeatureCard__WEBPACK_IMPORTED_MODULE_1__["FeatureCard"], {
    key: indx,
    text: card.text,
    icon: card.ico,
    isFullImg: card.isFullImg
  })))), __jsx(_slantDiv__WEBPACK_IMPORTED_MODULE_2__["SlantDiv"], null));
};
const CardsDetails = [{
  text: "100% Free",
  ico: "freeico.svg",
  isFullImg: false
}, {
  text: "Faster Payments",
  ico: "fastico.svg",
  isFullImg: false
}, {
  text: "Better Accounting & Visibility",
  ico: "accico.svg",
  isFullImg: true
}];

/***/ }),

/***/ "./src/Components/FeatureTiles/slantDiv.tsx":
/*!**************************************************!*\
  !*** ./src/Components/FeatureTiles/slantDiv.tsx ***!
  \**************************************************/
/*! exports provided: SlantDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlantDiv", function() { return SlantDiv; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const SlantDiv = () => {
  return __jsx("svg", {
    style: Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, __jsx("polyline", {
    points: "0,0  1,0  1,1",
    fill: "#02042B",
    id: "top"
  }), __jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#EEEFF2",
    id: "bottom"
  }));
};
const Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};

/***/ }),

/***/ "./src/Components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Footer/index.tsx ***!
  \*****************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

// #endregion Local Imports
const Footer = () => {
  return __jsx("div", {
    className: "footer"
  }, "Footer");
};



/***/ }),

/***/ "./src/Components/Heading/Heading.module.scss":
/*!****************************************************!*\
  !*** ./src/Components/Heading/Heading.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "Heading_title__2tSWQ",
	"title__back": "Heading_title__back__2U8p_",
	"title__front": "Heading_title__front__1sMzD",
	"title--contact": "Heading_title--contact__1_Ndm"
};


/***/ }),

/***/ "./src/Components/Heading/index.tsx":
/*!******************************************!*\
  !*** ./src/Components/Heading/index.tsx ***!
  \******************************************/
/*! exports provided: Heading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading.module.scss */ "./src/Components/Heading/Heading.module.scss");
/* harmony import */ var _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Heading_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const Heading = props => {
  const {
    text
  } = props;
  return __jsx("div", {
    className: _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title
  }, __jsx("span", {
    className: _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title__back
  }, text), __jsx("span", {
    className: _Heading_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title__front
  }, text));
};



/***/ }),

/***/ "./src/Components/InstituteSelection/InstituteDropDown.module.css":
/*!************************************************************************!*\
  !*** ./src/Components/InstituteSelection/InstituteDropDown.module.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "InstituteDropDown_main__8QqHJ",
	"title": "InstituteDropDown_title__24JrS",
	"inputText": "InstituteDropDown_inputText__9HiS2",
	"btnn": "InstituteDropDown_btnn__1qiYW",
	"dropDown": "InstituteDropDown_dropDown__3aw-d"
};


/***/ }),

/***/ "./src/Components/InstituteSelection/InstituteDropDown.tsx":
/*!*****************************************************************!*\
  !*** ./src/Components/InstituteSelection/InstituteDropDown.tsx ***!
  \*****************************************************************/
/*! exports provided: InstituteDropDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteDropDown", function() { return InstituteDropDown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InstituteDropDown.module.css */ "./src/Components/InstituteSelection/InstituteDropDown.module.css");
/* harmony import */ var _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const InstituteDropDown = () => {
  return __jsx("div", {
    className: _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main
  }, __jsx("div", {
    className: _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.title
  }, "Fees bharna online hua", __jsx("br", null), "ab aasan !"), __jsx("br", null), __jsx("div", {
    className: _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dropDown
  }, "Select School*"), __jsx("div", {
    className: _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.dropDown
  }, __jsx("div", null, __jsx("select", {
    className: _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputText,
    id: "myInput",
    name: "myCountry"
  }, __jsx("option", {
    selected: true
  }, "Select Your School"), __jsx("option", {
    value: "0"
  }, "Smt Sulochanadevi Singhania School"), __jsx("option", {
    value: "1"
  }, "Dhirubhai Ambani International School"), __jsx("option", {
    value: "2"
  }, "The Cathedral & John Connon School"), __jsx("option", {
    value: "3"
  }, "Campion School"))), __jsx("div", null, __jsx("button", {
    className: _InstituteDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnn
  }, "Submit"))));
};

/***/ }),

/***/ "./src/Components/InstituteSelection/InstituteSelection.module.css":
/*!*************************************************************************!*\
  !*** ./src/Components/InstituteSelection/InstituteSelection.module.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"maindiv": "InstituteSelection_maindiv__3FvKi"
};


/***/ }),

/***/ "./src/Components/InstituteSelection/LineArt.tsx":
/*!*******************************************************!*\
  !*** ./src/Components/InstituteSelection/LineArt.tsx ***!
  \*******************************************************/
/*! exports provided: LineArt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineArt", function() { return LineArt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const LineArt = () => {
  return __jsx("div", {
    style: {
      justifyContent: 'flex-end',
      display: 'flex'
    }
  }, __jsx("img", {
    src: "/images/svg/lineart1.svg",
    width: "auto",
    height: "250px"
  }));
};

/***/ }),

/***/ "./src/Components/InstituteSelection/index.tsx":
/*!*****************************************************!*\
  !*** ./src/Components/InstituteSelection/index.tsx ***!
  \*****************************************************/
/*! exports provided: InstituteSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstituteSelection", function() { return InstituteSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LineArt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineArt */ "./src/Components/InstituteSelection/LineArt.tsx");
/* harmony import */ var _InstituteDropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InstituteDropDown */ "./src/Components/InstituteSelection/InstituteDropDown.tsx");
/* harmony import */ var _slantDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slantDiv */ "./src/Components/InstituteSelection/slantDiv.tsx");
/* harmony import */ var _InstituteSelection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InstituteSelection.module.css */ "./src/Components/InstituteSelection/InstituteSelection.module.css");
/* harmony import */ var _InstituteSelection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_InstituteSelection_module_css__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// #region Global Imports





const InstituteSelection = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: _InstituteSelection_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.maindiv
  }, __jsx(_InstituteDropDown__WEBPACK_IMPORTED_MODULE_2__["InstituteDropDown"], null), __jsx(_LineArt__WEBPACK_IMPORTED_MODULE_1__["LineArt"], null)), __jsx(_slantDiv__WEBPACK_IMPORTED_MODULE_3__["SlantDiv"], null));
};

/***/ }),

/***/ "./src/Components/InstituteSelection/slantDiv.tsx":
/*!********************************************************!*\
  !*** ./src/Components/InstituteSelection/slantDiv.tsx ***!
  \********************************************************/
/*! exports provided: SlantDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlantDiv", function() { return SlantDiv; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const SlantDiv = () => {
  return __jsx("svg", {
    style: Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, __jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#02042B",
    id: "top"
  }), __jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#EEEFF2",
    id: "bottom"
  }));
};
const Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};

/***/ }),

/***/ "./src/Components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Layout = ({
  children
}) => {
  return __jsx("div", {
    className: "layout"
  }, children);
};



/***/ }),

/***/ "./src/Components/LocaleButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/Components/LocaleButton/index.tsx ***!
  \***********************************************/
/*! exports provided: LocaleButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleButton", function() { return LocaleButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Basic */ "./src/Components/Basic/index.ts");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Basic__WEBPACK_IMPORTED_MODULE_2__["Button"])`
    color: ${({
  isActive
}) => isActive ? "#2c3e50" : "inherit"};
`;
const LocaleButton = ({
  lang,
  isActive,
  onClick
}) => {
  return __jsx(Container, {
    isActive: isActive,
    onClick: onClick
  }, lang);
};

/***/ }),

/***/ "./src/Components/Navbar/Navbar.module.css":
/*!*************************************************!*\
  !*** ./src/Components/Navbar/Navbar.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainparent": "Navbar_mainparent__1xaF7",
	"btns": "Navbar_btns__9zTE5",
	"btnEle": "Navbar_btnEle__3MuNa"
};


/***/ }),

/***/ "./src/Components/Navbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/Components/Navbar/index.tsx ***!
  \*****************************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/Components/Navbar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const Navbar = () => {
  return __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mainparent
  }, __jsx("div", null, __jsx("img", {
    src: "/images/svg/feebharologo.svg",
    width: "100%",
    height: "50px"
  })), __jsx("div", {
    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btns
  }, buttons.map((btn, indx) => {
    return __jsx("div", {
      key: indx,
      className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.btnEle
    }, btn);
  })));
};

const buttons = ['Home', 'About Us', 'Features', 'Clients', 'Contact Us'];


/***/ }),

/***/ "./src/Components/Testimonials/Testimonials.module.css":
/*!*************************************************************!*\
  !*** ./src/Components/Testimonials/Testimonials.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainparent": "Testimonials_mainparent__23Rdb",
	"para": "Testimonials_para__3VzZG",
	"txtmain": "Testimonials_txtmain__163UT",
	"hrr": "Testimonials_hrr__37Etm",
	"countMain": "Testimonials_countMain__18CYJ",
	"countVal": "Testimonials_countVal__mj_WF",
	"countDesc": "Testimonials_countDesc__1Cfyq",
	"myGallery": "Testimonials_myGallery__1mwe_",
	"item": "Testimonials_item__64gvU",
	"caption": "Testimonials_caption__2qHPd"
};


/***/ }),

/***/ "./src/Components/Testimonials/index.tsx":
/*!***********************************************!*\
  !*** ./src/Components/Testimonials/index.tsx ***!
  \***********************************************/
/*! exports provided: Testimonials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testimonials", function() { return Testimonials; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Testimonials.module.css */ "./src/Components/Testimonials/Testimonials.module.css");
/* harmony import */ var _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Testimonials = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.mainparent
  }, __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.txtmain
  }, __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hrr
  }), __jsx("div", {
    style: {
      fontSize: '30px',
      fontWeight: 'bold'
    }
  }, "Trusted by Schools ", __jsx("br", null), " & Institutes"), __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.para
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."), __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countMain
  }, __jsx("div", null, __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countVal
  }, "10K+"), __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countDesc
  }, "User from multiple schools across India")), __jsx("div", null, __jsx("div", null, __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countVal
  }, "4K+"), __jsx("div", {
    className: _Testimonials_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.countDesc
  }, "Joining every month"))))), __jsx("div", null, __jsx("div", {
    className: "myGallery",
    style: {
      maxWidth: "420px",
      margin: "30px 20px 20px 20px"
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].slice(0, 12).map(indx => __jsx("img", {
    width: "120px",
    height: "60px",
    style: {
      margin: "10px"
    },
    src: "https://picsum.photos/190/190?" + indx
  }))))));
};

/***/ }),

/***/ "./src/Components/WelcomeSection/WelcomeSection.module.css":
/*!*****************************************************************!*\
  !*** ./src/Components/WelcomeSection/WelcomeSection.module.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainparent": "WelcomeSection_mainparent__3FXLL",
	"para": "WelcomeSection_para__2tJdK",
	"txtmain": "WelcomeSection_txtmain__2jUgJ",
	"hrr": "WelcomeSection_hrr__3CONw"
};


/***/ }),

/***/ "./src/Components/WelcomeSection/index.tsx":
/*!*************************************************!*\
  !*** ./src/Components/WelcomeSection/index.tsx ***!
  \*************************************************/
/*! exports provided: WelcomeSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeSection", function() { return WelcomeSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slantDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slantDiv */ "./src/Components/WelcomeSection/slantDiv.tsx");
/* harmony import */ var _WelcomeSection_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WelcomeSection.module.css */ "./src/Components/WelcomeSection/WelcomeSection.module.css");
/* harmony import */ var _WelcomeSection_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WelcomeSection_module_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const WelcomeSection = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _WelcomeSection_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainparent
  }, __jsx("div", null, __jsx("img", {
    src: "/images/svg/welcomelineart.svg",
    width: "auto",
    height: "250px"
  })), __jsx("div", {
    className: _WelcomeSection_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.txtmain
  }, __jsx("div", {
    className: _WelcomeSection_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.hrr
  }), __jsx("div", {
    style: {
      fontSize: '30px'
    }
  }, "Welcome to ", __jsx("br", null), " Feebharo"), __jsx("div", {
    className: _WelcomeSection_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.para
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))), __jsx(_slantDiv__WEBPACK_IMPORTED_MODULE_1__["SlantDiv"], null));
};

/***/ }),

/***/ "./src/Components/WelcomeSection/slantDiv.tsx":
/*!****************************************************!*\
  !*** ./src/Components/WelcomeSection/slantDiv.tsx ***!
  \****************************************************/
/*! exports provided: SlantDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlantDiv", function() { return SlantDiv; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const SlantDiv = () => {
  return __jsx("svg", {
    style: Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, __jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#02042B",
    id: "top"
  }), __jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#EEEFF2",
    id: "bottom"
  }), __jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#02042B",
    id: "bottom"
  }));
};
const Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};

/***/ }),

/***/ "./src/Components/index.ts":
/*!*********************************!*\
  !*** ./src/Components/index.ts ***!
  \*********************************/
/*! exports provided: Layout, Navbar, Footer, Heading, LocaleButton, InstituteSelection, FeatureTiles, WelcomeSection, Testimonials, ClientsSay, ContactSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/Layout */ "./src/Components/Layout/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _Components_Layout__WEBPACK_IMPORTED_MODULE_0__["Layout"]; });

/* harmony import */ var _Components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/Navbar */ "./src/Components/Navbar/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return _Components_Navbar__WEBPACK_IMPORTED_MODULE_1__["Navbar"]; });

/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/Footer */ "./src/Components/Footer/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Components_Footer__WEBPACK_IMPORTED_MODULE_2__["Footer"]; });

/* harmony import */ var _Components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/Heading */ "./src/Components/Heading/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return _Components_Heading__WEBPACK_IMPORTED_MODULE_3__["Heading"]; });

/* harmony import */ var _Components_LocaleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/LocaleButton */ "./src/Components/LocaleButton/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocaleButton", function() { return _Components_LocaleButton__WEBPACK_IMPORTED_MODULE_4__["LocaleButton"]; });

/* harmony import */ var _Components_InstituteSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/InstituteSelection */ "./src/Components/InstituteSelection/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InstituteSelection", function() { return _Components_InstituteSelection__WEBPACK_IMPORTED_MODULE_5__["InstituteSelection"]; });

/* harmony import */ var _Components_FeatureTiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/FeatureTiles */ "./src/Components/FeatureTiles/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureTiles", function() { return _Components_FeatureTiles__WEBPACK_IMPORTED_MODULE_6__["FeatureTiles"]; });

/* harmony import */ var _Components_WelcomeSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/WelcomeSection */ "./src/Components/WelcomeSection/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WelcomeSection", function() { return _Components_WelcomeSection__WEBPACK_IMPORTED_MODULE_7__["WelcomeSection"]; });

/* harmony import */ var _Components_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/Testimonials */ "./src/Components/Testimonials/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Testimonials", function() { return _Components_Testimonials__WEBPACK_IMPORTED_MODULE_8__["Testimonials"]; });

/* harmony import */ var _Components_ClientsSay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/ClientsSay */ "./src/Components/ClientsSay/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientsSay", function() { return _Components_ClientsSay__WEBPACK_IMPORTED_MODULE_9__["ClientsSay"]; });

/* harmony import */ var _Components_ContactSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/ContactSection */ "./src/Components/ContactSection/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactSection", function() { return _Components_ContactSection__WEBPACK_IMPORTED_MODULE_10__["ContactSection"]; });













/***/ }),

/***/ "./src/Definitions/ActionConsts/ActionConsts.ts":
/*!******************************************************!*\
  !*** ./src/Definitions/ActionConsts/ActionConsts.ts ***!
  \******************************************************/
/*! exports provided: ActionConsts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionConsts", function() { return ActionConsts; });
const ActionConsts = {
  Home: {
    ResetReducer: "Home_ResetReducer",
    SetReducer: "Home_SetReducer"
  }
};

/***/ }),

/***/ "./src/Definitions/ActionConsts/index.ts":
/*!***********************************************!*\
  !*** ./src/Definitions/ActionConsts/index.ts ***!
  \***********************************************/
/*! exports provided: ActionConsts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionConsts */ "./src/Definitions/ActionConsts/ActionConsts.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionConsts", function() { return _ActionConsts__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"]; });



/***/ }),

/***/ "./src/Definitions/index.ts":
/*!**********************************!*\
  !*** ./src/Definitions/index.ts ***!
  \**********************************/
/*! exports provided: ActionConsts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionConsts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionConsts */ "./src/Definitions/ActionConsts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionConsts", function() { return _ActionConsts__WEBPACK_IMPORTED_MODULE_0__["ActionConsts"]; });



/***/ }),

/***/ "./src/Services/API/Http/index.ts":
/*!****************************************!*\
  !*** ./src/Services/API/Http/index.ts ***!
  \****************************************/
/*! exports provided: Http */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// #region Global Imports

 // #endregion Global Imports
// #region Interface Imports

// #endregion Interface Imports
const BaseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api`;
const Http = {
  Request: async (methodType, url, params, payload) => {
    return new Promise((resolve, reject) => {
      const query = params ? `?${Object(query_string__WEBPACK_IMPORTED_MODULE_1__["stringify"])(_objectSpread(_objectSpread({}, params), {}, {
        api_key: process.env.NEXT_PUBLIC_API_KEY
      }))}` : "";
      fetch(`${BaseUrl}${url}${query}`, {
        body: JSON.stringify(payload),
        cache: "no-cache",
        headers: {
          "content-type": "application/json"
        },
        method: `${methodType}`
      }).then(async response => {
        if (response.status === 200) {
          return response.json().then(resolve);
        }

        return reject(response);
      }).catch(e => {
        reject(e);
      });
    });
  }
};

/***/ }),

/***/ "./src/Services/API/Planetary/index.ts":
/*!*********************************************!*\
  !*** ./src/Services/API/Planetary/index.ts ***!
  \*********************************************/
/*! exports provided: PlanetaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetaryService", function() { return PlanetaryService; });
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Services */ "./src/Services/index.ts");
// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const PlanetaryService = {
  GetPlanetImage: async (payload) => {
    let response;

    try {
      response = await _Services__WEBPACK_IMPORTED_MODULE_0__["Http"].Request("GET", "/planetary/apod", payload.params);
    } catch (error) {
      response = {
        copyright: "",
        date: "",
        explanation: "",
        hdurl: "",
        service_version: "",
        title: "",
        url: ""
      };
    }

    return response;
  }
};

/***/ }),

/***/ "./src/Services/index.ts":
/*!*******************************!*\
  !*** ./src/Services/index.ts ***!
  \*******************************/
/*! exports provided: Http, PlanetaryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Services_API_Http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Services/API/Http */ "./src/Services/API/Http/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return _Services_API_Http__WEBPACK_IMPORTED_MODULE_0__["Http"]; });

/* harmony import */ var _Services_API_Planetary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Services/API/Planetary */ "./src/Services/API/Planetary/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlanetaryService", function() { return _Services_API_Planetary__WEBPACK_IMPORTED_MODULE_1__["PlanetaryService"]; });

// #region Local Imports

 // #endregion Local Imports

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvSG9tZUFjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQmFzaWMvQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9CYXNpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DbGllbnRzU2F5L0NsaWVudHNTYXkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DbGllbnRzU2F5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DbGllbnRzU2F5L3NsYW50RGl2LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0U2VjdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9zbGFudERpdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVRpbGVzL0ZlYXR1cmVDYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVRpbGVzL0ZlYXR1cmVDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlVGlsZXMvRmVhdHVyZVRpbGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVRpbGVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlVGlsZXMvc2xhbnREaXYudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSGVhZGluZy9IZWFkaW5nLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9JbnN0aXR1dGVEcm9wRG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9JbnN0aXR1dGVEcm9wRG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5zdGl0dXRlU2VsZWN0aW9uL0luc3RpdHV0ZVNlbGVjdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9MaW5lQXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnN0aXR1dGVTZWxlY3Rpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9zbGFudERpdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2NhbGVCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmJhci9OYXZiYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9OYXZiYXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Rlc3RpbW9uaWFscy9UZXN0aW1vbmlhbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UZXN0aW1vbmlhbHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1dlbGNvbWVTZWN0aW9uL1dlbGNvbWVTZWN0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvV2VsY29tZVNlY3Rpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1dlbGNvbWVTZWN0aW9uL3NsYW50RGl2LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmaW5pdGlvbnMvQWN0aW9uQ29uc3RzL0FjdGlvbkNvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmaW5pdGlvbnMvQWN0aW9uQ29uc3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9EZWZpbml0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvQVBJL0h0dHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0FQSS9QbGFuZXRhcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkhvbWUiLCJ0IiwiaTE4biIsImhvbWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJlbmRlckxvY2FsZUJ1dHRvbnMiLCJhY3RpdmVMYW5ndWFnZSIsIm1hcCIsImxhbmciLCJjaGFuZ2VMYW5ndWFnZSIsIlN0eWxlcyIsIm1haW4iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzdG9yZSIsIkhvbWVBY3Rpb25zIiwiR2V0QXBvZCIsInBhcmFtcyIsImhkIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiRXh0ZW5kZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJiYWNrZ3JvdW5kIiwiTmV4dEkxOE5leHRJbnN0YW5jZSIsIk5leHRJMThOZXh0IiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJNYXAiLCJwYXlsb2FkIiwidHlwZSIsIkFjdGlvbkNvbnN0cyIsIlNldFJlZHVjZXIiLCJSZXNldCIsIlJlc2V0UmVkdWNlciIsInJlc3VsdCIsIlBsYW5ldGFyeVNlcnZpY2UiLCJHZXRQbGFuZXRJbWFnZSIsImltYWdlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGlzYWJsZWQiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJCdXR0b24iLCJwcm9wcyIsIkNsaWVudHNTYXkiLCJzdHlsZXMiLCJtYWlucGFyZW50IiwidHh0bWFpbiIsImhyciIsImZvbnRTaXplIiwicGFyYSIsInBvc3Rlcm5hbWUiLCJwb3N0ZXJwb3NpdGlvbiIsIlNsYW50RGl2Iiwid2lkdGgiLCJoZWlnaHQiLCJDb250YWN0U2VjdGlvbiIsImZvbnRXZWlnaHQiLCJmb3Jtcm93IiwiaW5wdHQiLCJ0eHRhcmVhb3V0ZXIiLCJ0ZXh0QXJlYSIsImJ1dHRvbm4iLCJGZWF0dXJlQ2FyZCIsInRleHQiLCJpY29uIiwiaXNGdWxsSW1nIiwib3V0ckNhcmQiLCJpbWdCcmRyIiwiRmVhdHVyZVRpbGVzIiwiY2FyZHNEaXYiLCJDYXJkc0RldGFpbHMiLCJjYXJkIiwiaW5keCIsImljbyIsIkZvb3RlciIsIkhlYWRpbmciLCJ0aXRsZSIsInRpdGxlX19iYWNrIiwidGl0bGVfX2Zyb250IiwiSW5zdGl0dXRlRHJvcERvd24iLCJkcm9wRG93biIsImlucHV0VGV4dCIsImJ0bm4iLCJMaW5lQXJ0IiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwiSW5zdGl0dXRlU2VsZWN0aW9uIiwibWFpbmRpdiIsIkxheW91dCIsImNoaWxkcmVuIiwiaXNBY3RpdmUiLCJMb2NhbGVCdXR0b24iLCJvbkNsaWNrIiwiTmF2YmFyIiwiYnRucyIsImJ1dHRvbnMiLCJidG4iLCJidG5FbGUiLCJUZXN0aW1vbmlhbHMiLCJjb3VudE1haW4iLCJjb3VudFZhbCIsImNvdW50RGVzYyIsIm1heFdpZHRoIiwibWFyZ2luIiwic2xpY2UiLCJXZWxjb21lU2VjdGlvbiIsIkJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIkh0dHAiLCJSZXF1ZXN0IiwibWV0aG9kVHlwZSIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicXVlcnkiLCJzdHJpbmdpZnkiLCJhcGlfa2V5IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJjYWNoZSIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJjb3B5cmlnaHQiLCJkYXRlIiwiZXhwbGFuYXRpb24iLCJoZHVybCIsInNlcnZpY2VfdmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FB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QUFDWixNQUhLLENBQWpCO0FBS0gsS0FORCxDQU1FLE9BQU95SCxLQUFQLEVBQWM7QUFDWkwsY0FBUSxHQUFHO0FBQ1BNLGlCQUFTLEVBQUUsRUFESjtBQUVQQyxZQUFJLEVBQUUsRUFGQztBQUdQQyxtQkFBVyxFQUFFLEVBSE47QUFJUEMsYUFBSyxFQUFFLEVBSkE7QUFLUEMsdUJBQWUsRUFBRSxFQUxWO0FBTVA5RCxhQUFLLEVBQUUsRUFOQTtBQU9QcUMsV0FBRyxFQUFFO0FBUEUsT0FBWDtBQVNIOztBQUVELFdBQU9lLFFBQVA7QUFDSDtBQXpCMkIsQ0FBekIsQzs7Ozs7Ozs7Ozs7O0FDUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBRUEsMkI7Ozs7Ozs7Ozs7O0FDSEEsK0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaG9tZS9pbmRleC50c3hcIik7XG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIkBTZXJ2ZXIvaTE4blwiO1xyXG5pbXBvcnQge1xyXG4gICAgQ29udGFpbmVyLFxyXG4gICAgVG9wLFxyXG4gICAgVG9wVGV4dCxcclxuICAgIE1pZGRsZSxcclxuICAgIE1pZGRsZUxlZnQsXHJcbiAgICBNaWRkbGVMZWZ0QnV0dG9ucyxcclxuICAgIE1pZGRsZVJpZ2h0LFxyXG4gICAgQXBvZCxcclxuICAgIEFwb2RCdXR0b24sXHJcbn0gZnJvbSBcIkBTdHlsZWQvSG9tZVwiO1xyXG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tIFwiQFJlZHV4L0lTdG9yZVwiO1xyXG5pbXBvcnQgeyBIb21lQWN0aW9ucyB9IGZyb20gXCJAQWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBOYXZiYXIsQ2xpZW50c1NheSxMb2NhbGVCdXR0b24sSW5zdGl0dXRlU2VsZWN0aW9uLEZlYXR1cmVUaWxlcyxXZWxjb21lU2VjdGlvbixUZXN0aW1vbmlhbHMsQ29udGFjdFNlY3Rpb259IGZyb20gXCJAQ29tcG9uZW50c1wiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuaW1wb3J0IHsgSUhvbWVQYWdlLCBSZWR1eE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJASW50ZXJmYWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZTxJSG9tZVBhZ2UuSVByb3BzLCBJSG9tZVBhZ2UuSW5pdGlhbFByb3BzPiA9ICh7XHJcbiAgICB0LFxyXG4gICAgaTE4bixcclxufSkgPT4ge1xyXG4gICAgY29uc3QgaG9tZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVN0b3JlKSA9PiBzdGF0ZS5ob21lKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJMb2NhbGVCdXR0b25zID0gKGFjdGl2ZUxhbmd1YWdlOiBzdHJpbmcpID0+XHJcbiAgICAgICAgW1wiZW5cIiwgXCJlc1wiLCBcInRyXCJdLm1hcChsYW5nID0+IChcclxuICAgICAgICAgICAgPExvY2FsZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVMYW5ndWFnZSA9PT0gbGFuZ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPE5hdmJhci8+XHJcbiAgICAgICAgPEluc3RpdHV0ZVNlbGVjdGlvbi8+XHJcbiAgICAgICAgPEZlYXR1cmVUaWxlcy8+XHJcbiAgICAgICAgPFdlbGNvbWVTZWN0aW9uLz5cclxuICAgICAgICA8VGVzdGltb25pYWxzLz5cclxuICAgICAgICA8Q2xpZW50c1NheS8+XHJcbiAgICAgICAgPENvbnRhY3RTZWN0aW9uLz5cclxuICAgICAgICB7LyogPENvbnRhaW5lcj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPFRvcD5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9wYW5rb2QtbG9nby5wbmdcIiBhbHQ9XCJQYW5rb2QgTG9nb1wiIC8+XHJcbiAgICAgICAgICAgIDwvVG9wPlxyXG4gICAgICAgICAgICA8TWlkZGxlPlxyXG4gICAgICAgICAgICAgICAgPE1pZGRsZUxlZnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1pZGRsZUxlZnRCdXR0b25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyTG9jYWxlQnV0dG9ucyhpMThuLmxhbmd1YWdlKX1cclxuICAgICAgICAgICAgICAgICAgICA8L01pZGRsZUxlZnRCdXR0b25zPlxyXG4gICAgICAgICAgICAgICAgPC9NaWRkbGVMZWZ0PlxyXG4gICAgICAgICAgICAgICAgPE1pZGRsZVJpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUb3BUZXh0Pnt0KFwiY29tbW9uOkhlbGxvXCIpfTwvVG9wVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyB0ZXh0PXt0KFwiY29tbW9uOldvcmxkXCIpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBcG9kPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXBvZEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lQWN0aW9ucy5HZXRBcG9kKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBoZDogZmFsc2UgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzY292ZXIgU3BhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BcG9kQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2hvbWUuaW1hZ2UudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkRpc2NvdmVyIFNwYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Fwb2Q+XHJcbiAgICAgICAgICAgICAgICA8L01pZGRsZVJpZ2h0PlxyXG4gICAgICAgICAgICA8L01pZGRsZT5cclxuICAgICAgICA8L0NvbnRhaW5lcj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoXHJcbiAgICBjdHg6IFJlZHV4TmV4dFBhZ2VDb250ZXh0XHJcbik6IFByb21pc2U8SUhvbWVQYWdlLkluaXRpYWxQcm9wcz4gPT4ge1xyXG4gICAgYXdhaXQgY3R4LnN0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIEhvbWVBY3Rpb25zLkdldEFwb2Qoe1xyXG4gICAgICAgICAgICBwYXJhbXM6IHsgaGQ6IHRydWUgfSxcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICAgIHJldHVybiB7IG5hbWVzcGFjZXNSZXF1aXJlZDogW1wiY29tbW9uXCJdIH07XHJcbn07XHJcblxyXG5jb25zdCBFeHRlbmRlZCA9IHdpdGhUcmFuc2xhdGlvbihcImNvbW1vblwiKShIb21lKTtcclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW46e1xyXG4gICAgICAgIGJhY2tncm91bmQ6XCIjMDIwNDJCXCJcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXh0ZW5kZWQ7XHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IE5leHRJMThOZXh0IGZyb20gXCJuZXh0LWkxOG5leHRcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuY29uc3QgTmV4dEkxOE5leHRJbnN0YW5jZSA9IG5ldyBOZXh0STE4TmV4dCh7XHJcbiAgICBkZWZhdWx0TGFuZ3VhZ2U6IFwiZW5cIixcclxuICAgIG90aGVyTGFuZ3VhZ2VzOiBbXCJlc1wiLCBcInRyXCJdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFwcFdpdGhUcmFuc2xhdGlvbiwgd2l0aFRyYW5zbGF0aW9uIH0gPSBOZXh0STE4TmV4dEluc3RhbmNlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEkxOE5leHRJbnN0YW5jZTtcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gXCJyZWR1eFwiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgQWN0aW9uQ29uc3RzIH0gZnJvbSBcIkBEZWZpbml0aW9uc1wiO1xyXG5pbXBvcnQgeyBQbGFuZXRhcnlTZXJ2aWNlIH0gZnJvbSBcIkBTZXJ2aWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuaW1wb3J0IHsgSUhvbWVQYWdlIH0gZnJvbSBcIkBJbnRlcmZhY2VzXCI7XHJcbi8vICNlbmRyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lQWN0aW9ucyA9IHtcclxuICAgIE1hcDogKHBheWxvYWQ6IHt9KSA9PiAoe1xyXG4gICAgICAgIHBheWxvYWQsXHJcbiAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuU2V0UmVkdWNlcixcclxuICAgIH0pLFxyXG5cclxuICAgIFJlc2V0OiAoKSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IEFjdGlvbkNvbnN0cy5Ib21lLlJlc2V0UmVkdWNlcixcclxuICAgIH0pLFxyXG5cclxuICAgIEdldEFwb2Q6IChwYXlsb2FkOiBJSG9tZVBhZ2UuQWN0aW9ucy5JR2V0QXBvZFBheWxvYWQpID0+IGFzeW5jIChcclxuICAgICAgICBkaXNwYXRjaDogRGlzcGF0Y2hcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFBsYW5ldGFyeVNlcnZpY2UuR2V0UGxhbmV0SW1hZ2Uoe1xyXG4gICAgICAgICAgICBwYXJhbXM6IHBheWxvYWQucGFyYW1zLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgICAgIGltYWdlOiByZXN1bHQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvbkNvbnN0cy5Ib21lLlNldFJlZHVjZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9Ib21lQWN0aW9uc1wiO1xyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IElCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2PElCdXR0b24uSVByb3BzPmBcclxuICAgIGN1cnNvcjogJHsoeyBkaXNhYmxlZCB9KSA9PiAoZGlzYWJsZWQgPyBcIm5vdC1hbGxvd2VkXCIgOiBcInBvaW50ZXJcIil9O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUJ1dHRvbi5JUHJvcHM+ID0gcHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIDxDb250YWluZXIgey4uLnByb3BzfSAvPjtcclxufTtcclxuIiwiZXhwb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5wYXJlbnRcIjogXCJDbGllbnRzU2F5X21haW5wYXJlbnRfXzIzQU9GXCIsXG5cdFwicGFyYVwiOiBcIkNsaWVudHNTYXlfcGFyYV9fMWVNU3dcIixcblx0XCJwb3N0ZXJuYW1lXCI6IFwiQ2xpZW50c1NheV9wb3N0ZXJuYW1lX18xeU01TlwiLFxuXHRcInBvc3RlcnBvc2l0aW9uXCI6IFwiQ2xpZW50c1NheV9wb3N0ZXJwb3NpdGlvbl9fMnpfZFVcIixcblx0XCJ0eHRtYWluXCI6IFwiQ2xpZW50c1NheV90eHRtYWluX18xVE9WRVwiLFxuXHRcImhyclwiOiBcIkNsaWVudHNTYXlfaHJyX18yNS13VlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2xpZW50c1NheS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBTbGFudERpdiB9IGZyb20gXCIuL3NsYW50RGl2XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2xpZW50c1NheTogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbnBhcmVudH0+XHJcbiAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvY2xpZW50c2F5LnBuZ1wiIHdpZHRoPVwiYXV0b1wiIGhlaWdodD1cIjI1MHB4XCIgLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eHRtYWlufSAgPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ocnJ9PjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgV2hhdCBPdXIgQ2xpZW50IFNheVxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N2Zy9xdW90ZS5zdmdcIiB3aWR0aD1cImF1dG9cIiBoZWlnaHQ9XCIzMHB4XCIgLz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhcmF9PlxyXG4gICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzLlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3Rlcm5hbWV9PlxyXG4gICAgICAgICAgICAgICBKYW1lcyBBbmRlcnNvblxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdGVycG9zaXRpb259PlxyXG4gICAgICAgICAgICAgICBEb24gQm9zY28gUHJpbmNpcGxlXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIDxTbGFudERpdi8+XHJcbiAgICAgICBcclxuICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsYW50RGl2OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgc3R5bGU9e1N0eWxlcy5tYWlufSB2aWV3Qm94PVwiMCAwIDEgMVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XHJcbiAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIwLDAgIDEsMCAgMCwxXCIgZmlsbD1cIiMwMjA0MkJcIiBpZD1cInRvcFwiLz5cclxuICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEsMCAgMSwxICAwLDFcIiBmaWxsPVwiI0VFRUZGMlwiIGlkPVwiYm90dG9tXCIvPlxyXG4gICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLDEgIDEsMCAgMCwwXCIgZmlsbD1cIiMwMjA0MkJcIiBpZD1cImJvdHRvbVwiLz5cclxuICAgICAgICBcclxuICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBTdHlsZXMgPSB7XHJcbiAgICBtYWluOntcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCJcclxuICAgIH1cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5wYXJlbnRcIjogXCJDb250YWN0U2VjdGlvbl9tYWlucGFyZW50X192cEdkM1wiLFxuXHRcInR4dG1haW5cIjogXCJDb250YWN0U2VjdGlvbl90eHRtYWluX18yVmNCV1wiLFxuXHRcImhyclwiOiBcIkNvbnRhY3RTZWN0aW9uX2hycl9fM09wRmlcIixcblx0XCJmb3Jtcm93XCI6IFwiQ29udGFjdFNlY3Rpb25fZm9ybXJvd19fWTZQRXJcIixcblx0XCJ0eHRhcmVhb3V0ZXJcIjogXCJDb250YWN0U2VjdGlvbl90eHRhcmVhb3V0ZXJfXzI3R2g4XCIsXG5cdFwidGV4dEFyZWFcIjogXCJDb250YWN0U2VjdGlvbl90ZXh0QXJlYV9fT01nNDhcIixcblx0XCJvdXRyZnJtXCI6IFwiQ29udGFjdFNlY3Rpb25fb3V0cmZybV9fOFR5YU5cIixcblx0XCJpbnB0dFwiOiBcIkNvbnRhY3RTZWN0aW9uX2lucHR0X19UcDMzQVwiLFxuXHRcImJ1dHRvbm5cIjogXCJDb250YWN0U2VjdGlvbl9idXR0b25uX18xeFFKRFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFjdFNlY3Rpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgU2xhbnREaXYgfSBmcm9tIFwiLi9zbGFudERpdlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhY3RTZWN0aW9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG48PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlucGFyZW50fT5cclxuICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9jb250YWN0LnBuZ1wiIHdpZHRoPVwiYXV0b1wiIGhlaWdodD1cIjE1MHB4XCIgLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eHRtYWlufSAgPlxyXG5cclxuICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICczMHB4Jyxmb250V2VpZ2h0OlwiYm9sZFwifX0+XHJcbiAgICAgICAgICAgTGV0J3MgZ2V0IGluIHRvdWNoXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3Jtcm93fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdHR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHR0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3Jtcm93fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdHR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOby5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmlucHR0fSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU3RhdHVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR4dGFyZWFvdXRlcn0+XHJcbiAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17c3R5bGVzLnRleHRBcmVhfSBwbGFjZWhvbGRlcj1cIllvdXIgTWVzc2FnZVwiID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1yb3d9PlxyXG4gICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ubn0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxTbGFudERpdi8+XHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGFudERpdjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHN0eWxlPXtTdHlsZXMubWFpbn0gdmlld0JveD1cIjAgMCAxIDFcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxyXG4gICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMCwwICAxLDAgIDAsMVwiIGZpbGw9XCIjRUNFQ0VEXCIgaWQ9XCJ0b3BcIi8+XHJcbiAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLDAgIDEsMSAgMCwxXCIgZmlsbD1cIiMwMjA0MkJcIiBpZD1cImJvdHRvbVwiLz5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMSwxICAxLDAgIDAsMFwiIGZpbGw9XCIjRUNFQ0VEXCIgaWQ9XCJib3R0b21cIi8+XHJcbiAgICAgICAgXHJcbiAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgU3R5bGVzID0ge1xyXG4gICAgbWFpbjp7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiXHJcbiAgICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbWdCcmRyXCI6IFwiRmVhdHVyZUNhcmRfaW1nQnJkcl9fMjBuc3lcIixcblx0XCJ0ZXh0XCI6IFwiRmVhdHVyZUNhcmRfdGV4dF9fa0hVVlBcIixcblx0XCJvdXRyQ2FyZFwiOiBcIkZlYXR1cmVDYXJkX291dHJDYXJkX19RRGQ0a1wiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZlYXR1cmVDYXJkLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHRleHQ/OiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgaXNGdWxsSW1nOmJvb2xlYW5cclxuICB9XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZlYXR1cmVDYXJkOiBOZXh0UGFnZTxQcm9wcz4gPSAoeyB0ZXh0ICwgaWNvbiAsaXNGdWxsSW1nIH0pID0+IChcclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdXRyQ2FyZH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHtpc0Z1bGxJbWcgPyA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ0JyZHJ9IHNyYz17YC9pbWFnZXMvc3ZnLyR7aWNvbn1gfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCIgLz4gOiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltZ0JyZHJ9IHNyYz17YC9pbWFnZXMvc3ZnLyR7aWNvbn1gfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCIgLz59IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAge3RleHR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgKVxyXG4gIFxyXG5cclxuICAiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0XCI6IFwiRmVhdHVyZVRpbGVzX3RleHRfXzFRVTY0XCIsXG5cdFwiaHJyXCI6IFwiRmVhdHVyZVRpbGVzX2hycl9fU0JTcWhcIixcblx0XCJjYXJkc0RpdlwiOiBcIkZlYXR1cmVUaWxlc19jYXJkc0Rpdl9fM1ozbG9cIixcblx0XCJpbWdCcmRyXCI6IFwiRmVhdHVyZVRpbGVzX2ltZ0JyZHJfXzJmVXhMXCIsXG5cdFwidHh0c3R5bFwiOiBcIkZlYXR1cmVUaWxlc190eHRzdHlsX18zc196T1wiLFxuXHRcIm91dHJjcmRcIjogXCJGZWF0dXJlVGlsZXNfb3V0cmNyZF9fMkhza01cIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ2FyZCB9IGZyb20gXCIuL0ZlYXR1cmVDYXJkXCI7XHJcbmltcG9ydCB7IFNsYW50RGl2IH0gZnJvbSBcIi4vc2xhbnREaXZcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZlYXR1cmVUaWxlcy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBGZWF0dXJlVGlsZXM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjRUVFRkYyXCJ9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gPlxyXG4gICAgICAgICAgICAgICAgRW5hYmxpbmcgZmVlcyBwYXltZW50IGZvciBzY2hvb2xzIG9ubGluZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ocnJ9PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc0Rpdn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtDYXJkc0RldGFpbHMubWFwKChjYXJkLGluZHgpPT5cclxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQga2V5PXtpbmR4fSB0ZXh0PXtjYXJkLnRleHR9IGljb249e2NhcmQuaWNvfSBpc0Z1bGxJbWc9e2NhcmQuaXNGdWxsSW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTbGFudERpdi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQ2FyZHNEZXRhaWxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRleHQ6XCIxMDAlIEZyZWVcIixcclxuICAgICAgICBpY286XCJmcmVlaWNvLnN2Z1wiLFxyXG4gICAgICAgIGlzRnVsbEltZzpmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OlwiRmFzdGVyIFBheW1lbnRzXCIsXHJcbiAgICAgICAgaWNvOlwiZmFzdGljby5zdmdcIixcclxuICAgICAgICBpc0Z1bGxJbWc6ZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDpcIkJldHRlciBBY2NvdW50aW5nICYgVmlzaWJpbGl0eVwiLFxyXG4gICAgICAgIGljbzpcImFjY2ljby5zdmdcIixcclxuICAgICAgICBpc0Z1bGxJbWc6dHJ1ZVxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsYW50RGl2OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgc3R5bGU9e1N0eWxlcy5tYWlufSB2aWV3Qm94PVwiMCAwIDEgMVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjAsMCAgMSwwICAxLDFcIiBmaWxsPVwiIzAyMDQyQlwiICBpZD1cInRvcFwiLz5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMSwxICAxLDAgIDAsMFwiIGZpbGw9XCIjRUVFRkYyXCIgaWQ9XCJib3R0b21cIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgU3R5bGVzID0ge1xyXG4gICAgbWFpbjp7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiXHJcbiAgICB9XHJcbn0iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSUZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUZvb3Rlci5JUHJvcHM+ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPkZvb3RlcjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCB7IEZvb3RlciB9O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcIkhlYWRpbmdfdGl0bGVfXzJ0U1dRXCIsXG5cdFwidGl0bGVfX2JhY2tcIjogXCJIZWFkaW5nX3RpdGxlX19iYWNrX18yVThwX1wiLFxuXHRcInRpdGxlX19mcm9udFwiOiBcIkhlYWRpbmdfdGl0bGVfX2Zyb250X18xc016RFwiLFxuXHRcInRpdGxlLS1jb250YWN0XCI6IFwiSGVhZGluZ190aXRsZS0tY29udGFjdF9fMV9OZG1cIlxufTtcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRpbmcubW9kdWxlLnNjc3NcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IElIZWFkaW5nIH0gZnJvbSBcIi4vSGVhZGluZ1wiO1xyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5jb25zdCBIZWFkaW5nOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJSGVhZGluZy5JUHJvcHM+ID0gKFxyXG4gICAgcHJvcHNcclxuKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgeyB0ZXh0IH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fYmFja30+e3RleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fZnJvbnR9Pnt0ZXh0fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIZWFkaW5nIH07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5cIjogXCJJbnN0aXR1dGVEcm9wRG93bl9tYWluX184UXFISlwiLFxuXHRcInRpdGxlXCI6IFwiSW5zdGl0dXRlRHJvcERvd25fdGl0bGVfXzI0SnJTXCIsXG5cdFwiaW5wdXRUZXh0XCI6IFwiSW5zdGl0dXRlRHJvcERvd25faW5wdXRUZXh0X185SGlTMlwiLFxuXHRcImJ0bm5cIjogXCJJbnN0aXR1dGVEcm9wRG93bl9idG5uX18xcWlZV1wiLFxuXHRcImRyb3BEb3duXCI6IFwiSW5zdGl0dXRlRHJvcERvd25fZHJvcERvd25fXzNhdy1kXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0luc3RpdHV0ZURyb3BEb3duLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluc3RpdHV0ZURyb3BEb3duOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBGZWVzIGJoYXJuYSBvbmxpbmUgaHVhIFxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBhYiBhYXNhbiAhXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bn0+XHJcbiAgICAgICAgICAgICAgICBTZWxlY3QgU2Nob29sKlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kcm9wRG93bn0+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgey8qIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRUZXh0fSAgaWQ9XCJteUlucHV0XCIgIG5hbWU9XCJteUNvdW50cnlcIiBwbGFjZWhvbGRlcj1cIlNlbGVjdCBZb3VyIFNjaG9vbFwiIC8+ICovfVxyXG5cclxuICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRUZXh0fSAgaWQ9XCJteUlucHV0XCIgIG5hbWU9XCJteUNvdW50cnlcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+U2VsZWN0IFlvdXIgU2Nob29sPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPlNtdCBTdWxvY2hhbmFkZXZpIFNpbmdoYW5pYSBTY2hvb2w8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+RGhpcnViaGFpIEFtYmFuaSBJbnRlcm5hdGlvbmFsIFNjaG9vbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5UaGUgQ2F0aGVkcmFsICYgSm9obiBDb25ub24gU2Nob29sPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPkNhbXBpb24gU2Nob29sPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2PlxyXG4gIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRubn0+U3VibWl0PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpbmRpdlwiOiBcIkluc3RpdHV0ZVNlbGVjdGlvbl9tYWluZGl2X18zRnZLaVwiXG59O1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZUFydDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zdmcvbGluZWFydDEuc3ZnXCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiMjUwcHhcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTsiLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5lQXJ0IH0gZnJvbSBcIi4vTGluZUFydFwiO1xyXG5pbXBvcnQgeyBJbnN0aXR1dGVEcm9wRG93biB9IGZyb20gXCIuL0luc3RpdHV0ZURyb3BEb3duXCI7XHJcbmltcG9ydCB7IFNsYW50RGl2IH0gZnJvbSBcIi4vc2xhbnREaXZcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0luc3RpdHV0ZVNlbGVjdGlvbi5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBJbnN0aXR1dGVTZWxlY3Rpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluZGl2fT5cclxuICAgICAgICAgICAgICAgIDxJbnN0aXR1dGVEcm9wRG93biAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmVBcnQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTbGFudERpdiAvPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2xhbnREaXY6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBzdHlsZT17U3R5bGVzLm1haW59IHZpZXdCb3g9XCIwIDAgMSAxXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMCwwICAxLDAgIDAsMVwiIGZpbGw9XCIjMDIwNDJCXCIgaWQ9XCJ0b3BcIi8+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEsMCAgMSwxICAwLDFcIiBmaWxsPVwiI0VFRUZGMlwiIGlkPVwiYm90dG9tXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW46e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dFwiO1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMYXlvdXRQcm9wcz4gPSAoe1xyXG4gICAgY2hpbGRyZW4sXHJcbn0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgTGF5b3V0IH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IElMb2NhbGVCdXR0b24gfSBmcm9tIFwiLi9Mb2NhbGVCdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9CYXNpY1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJ1dHRvbik8eyBpc0FjdGl2ZTogYm9vbGVhbiB9PmBcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IFwiIzJjM2U1MFwiIDogXCJpbmhlcml0XCIpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhbGVCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElMb2NhbGVCdXR0b24uSVByb3BzPiA9ICh7XHJcbiAgICBsYW5nLFxyXG4gICAgaXNBY3RpdmUsXHJcbiAgICBvbkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNBY3RpdmU9e2lzQWN0aXZlfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAge2xhbmd9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlucGFyZW50XCI6IFwiTmF2YmFyX21haW5wYXJlbnRfXzF4YUY3XCIsXG5cdFwiYnRuc1wiOiBcIk5hdmJhcl9idG5zX185elRFNVwiLFxuXHRcImJ0bkVsZVwiOiBcIk5hdmJhcl9idG5FbGVfXzNNdU5hXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgSU5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJTmF2YmFyLklQcm9wcz4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbnBhcmVudH0gPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N2Zy9mZWViaGFyb2xvZ28uc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuc30+XHJcbiAgICAgICAgICAgIHtidXR0b25zLm1hcCgoYnRuLGluZHgpPT57XHJcbiAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17aW5keH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRuRWxlfT5cclxuICAgICAgICAgICAgICAgIHtidG59XHJcbiAgICAgICAgICAgIDwvZGl2PikgXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbn07XHJcblxyXG5cclxuY29uc3QgYnV0dG9ucyA9IFtcclxuICAgICdIb21lJyxcclxuICAgICdBYm91dCBVcycsXHJcbiAgICAnRmVhdHVyZXMnLFxyXG4gICAgJ0NsaWVudHMnLFxyXG4gICAgJ0NvbnRhY3QgVXMnXHJcbl1cclxuXHJcbmV4cG9ydCB7IE5hdmJhciB9O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlucGFyZW50XCI6IFwiVGVzdGltb25pYWxzX21haW5wYXJlbnRfXzIzUmRiXCIsXG5cdFwicGFyYVwiOiBcIlRlc3RpbW9uaWFsc19wYXJhX18zVnpaR1wiLFxuXHRcInR4dG1haW5cIjogXCJUZXN0aW1vbmlhbHNfdHh0bWFpbl9fMTYzVVRcIixcblx0XCJocnJcIjogXCJUZXN0aW1vbmlhbHNfaHJyX18zN0V0bVwiLFxuXHRcImNvdW50TWFpblwiOiBcIlRlc3RpbW9uaWFsc19jb3VudE1haW5fXzE4Q1lKXCIsXG5cdFwiY291bnRWYWxcIjogXCJUZXN0aW1vbmlhbHNfY291bnRWYWxfX21qX1dGXCIsXG5cdFwiY291bnREZXNjXCI6IFwiVGVzdGltb25pYWxzX2NvdW50RGVzY19fMUNmeXFcIixcblx0XCJteUdhbGxlcnlcIjogXCJUZXN0aW1vbmlhbHNfbXlHYWxsZXJ5X18xbXdlX1wiLFxuXHRcIml0ZW1cIjogXCJUZXN0aW1vbmlhbHNfaXRlbV9fNjRndlVcIixcblx0XCJjYXB0aW9uXCI6IFwiVGVzdGltb25pYWxzX2NhcHRpb25fXzJxSFBkXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rlc3RpbW9uaWFscy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbHM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlucGFyZW50fT5cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHh0bWFpbn0gID5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ocnJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMzBweCcsZm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgIFRydXN0ZWQgYnkgU2Nob29scyA8YnIvPiAmIEluc3RpdHV0ZXNcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhfT5cclxuICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQuXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRNYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudFZhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwSytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50RGVzY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgZnJvbSBtdWx0aXBsZSBzY2hvb2xzIGFjcm9zcyBJbmRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50VmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNEsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudERlc2N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKb2luaW5nIGV2ZXJ5IG1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15R2FsbGVyeVwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiNDIwcHhcIixtYXJnaW46XCIzMHB4IDIwcHggMjBweCAyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtbMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTNdLnNsaWNlKDAsIDEyKS5tYXAoaW5keD0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMjBweFwiIGhlaWdodD1cIjYwcHhcIiBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19IHNyYz17XCJodHRwczovL3BpY3N1bS5waG90b3MvMTkwLzE5MD9cIitpbmR4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxufTtcclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5wYXJlbnRcIjogXCJXZWxjb21lU2VjdGlvbl9tYWlucGFyZW50X18zRlhMTFwiLFxuXHRcInBhcmFcIjogXCJXZWxjb21lU2VjdGlvbl9wYXJhX18ydEpkS1wiLFxuXHRcInR4dG1haW5cIjogXCJXZWxjb21lU2VjdGlvbl90eHRtYWluX18yalVnSlwiLFxuXHRcImhyclwiOiBcIldlbGNvbWVTZWN0aW9uX2hycl9fM0NPTndcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2xhbnREaXYgfSBmcm9tIFwiLi9zbGFudERpdlwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV2VsY29tZVNlY3Rpb24ubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBXZWxjb21lU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbnBhcmVudH0+XHJcbiAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3ZnL3dlbGNvbWVsaW5lYXJ0LnN2Z1wiIHdpZHRoPVwiYXV0b1wiIGhlaWdodD1cIjI1MHB4XCIgLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eHRtYWlufSAgPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ocnJ9PjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgV2VsY29tZSB0byA8YnIvPiBGZWViaGFyb1xyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYX0+XHJcbiAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxTbGFudERpdi8+XHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGFudERpdjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHN0eWxlPXtTdHlsZXMubWFpbn0gdmlld0JveD1cIjAgMCAxIDFcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxyXG4gICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIwLDAgIDEsMCAgMCwxXCIgZmlsbD1cIiMwMjA0MkJcIiBpZD1cInRvcFwiLz5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMSwwICAxLDEgIDAsMVwiIGZpbGw9XCIjRUVFRkYyXCIgaWQ9XCJib3R0b21cIi8+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEsMSAgMSwwICAwLDBcIiBmaWxsPVwiIzAyMDQyQlwiIGlkPVwiYm90dG9tXCIvPlxyXG4gICAgICAgIFxyXG4gICAgPC9zdmc+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW46e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIlxyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgTGF5b3V0IH0gZnJvbSBcIkBDb21wb25lbnRzL0xheW91dFwiO1xyXG5leHBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiQENvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmV4cG9ydCB7IEZvb3RlciB9IGZyb20gXCJAQ29tcG9uZW50cy9Gb290ZXJcIjtcclxuZXhwb3J0IHsgSGVhZGluZyB9IGZyb20gXCJAQ29tcG9uZW50cy9IZWFkaW5nXCI7XHJcbmV4cG9ydCB7IExvY2FsZUJ1dHRvbiB9IGZyb20gXCJAQ29tcG9uZW50cy9Mb2NhbGVCdXR0b25cIjtcclxuZXhwb3J0IHsgSW5zdGl0dXRlU2VsZWN0aW9uIH0gZnJvbSBcIkBDb21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvblwiO1xyXG5leHBvcnQgeyBGZWF0dXJlVGlsZXMgfSBmcm9tIFwiQENvbXBvbmVudHMvRmVhdHVyZVRpbGVzXCI7XHJcbmV4cG9ydCB7IFdlbGNvbWVTZWN0aW9uIH0gZnJvbSBcIkBDb21wb25lbnRzL1dlbGNvbWVTZWN0aW9uXCI7XHJcbmV4cG9ydCB7IFRlc3RpbW9uaWFscyB9IGZyb20gXCJAQ29tcG9uZW50cy9UZXN0aW1vbmlhbHNcIjtcclxuZXhwb3J0IHsgQ2xpZW50c1NheSB9IGZyb20gXCJAQ29tcG9uZW50cy9DbGllbnRzU2F5XCI7XHJcbmV4cG9ydCB7IENvbnRhY3RTZWN0aW9uIH0gZnJvbSBcIkBDb21wb25lbnRzL0NvbnRhY3RTZWN0aW9uXCI7ICIsImV4cG9ydCBjb25zdCBBY3Rpb25Db25zdHMgPSB7XHJcbiAgICBIb21lOiB7XHJcbiAgICAgICAgUmVzZXRSZWR1Y2VyOiBcIkhvbWVfUmVzZXRSZWR1Y2VyXCIsXHJcbiAgICAgICAgU2V0UmVkdWNlcjogXCJIb21lX1NldFJlZHVjZXJcIixcclxuICAgIH0sXHJcbn07XHJcbiIsImV4cG9ydCB7IEFjdGlvbkNvbnN0cyB9IGZyb20gXCIuL0FjdGlvbkNvbnN0c1wiO1xyXG4iLCJleHBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiLi9BY3Rpb25Db25zdHNcIjtcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IEh0dHBNb2RlbCB9IGZyb20gXCJASW50ZXJmYWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5jb25zdCBCYXNlVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpYDtcclxuZXhwb3J0IGNvbnN0IEh0dHAgPSB7XHJcbiAgICBSZXF1ZXN0OiBhc3luYyA8QT4oXHJcbiAgICAgICAgbWV0aG9kVHlwZTogc3RyaW5nLFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIHBhcmFtcz86IEh0dHBNb2RlbC5JUmVxdWVzdFF1ZXJ5UGF5bG9hZCxcclxuICAgICAgICBwYXlsb2FkPzogSHR0cE1vZGVsLklSZXF1ZXN0UGF5bG9hZFxyXG4gICAgKTogUHJvbWlzZTxBPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwYXJhbXNcclxuICAgICAgICAgICAgICAgID8gYD8ke3N0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZLFxyXG4gICAgICAgICAgICAgICAgICB9KX1gXHJcbiAgICAgICAgICAgICAgICA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBmZXRjaChgJHtCYXNlVXJsfSR7dXJsfSR7cXVlcnl9YCwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYCR7bWV0aG9kVHlwZX1gLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBTZXJ2aWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuaW1wb3J0IHsgUGxhbmV0YXJ5TW9kZWwgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYW5ldGFyeVNlcnZpY2UgPSB7XHJcbiAgICBHZXRQbGFuZXRJbWFnZTogYXN5bmMgKFxyXG4gICAgICAgIHBheWxvYWQ6IFBsYW5ldGFyeU1vZGVsLkdldEFwb2RQYXlsb2FkXHJcbiAgICApOiBQcm9taXNlPFBsYW5ldGFyeU1vZGVsLkdldEFwb2RSZXNwb25zZT4gPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZTogUGxhbmV0YXJ5TW9kZWwuR2V0QXBvZFJlc3BvbnNlO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IEh0dHAuUmVxdWVzdDxQbGFuZXRhcnlNb2RlbC5HZXRBcG9kUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICAgICAgXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIFwiL3BsYW5ldGFyeS9hcG9kXCIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnBhcmFtc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGV4cGxhbmF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGR1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX3ZlcnNpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5leHBvcnQgeyBIdHRwIH0gZnJvbSBcIkBTZXJ2aWNlcy9BUEkvSHR0cFwiO1xyXG5leHBvcnQgeyBQbGFuZXRhcnlTZXJ2aWNlIH0gZnJvbSBcIkBTZXJ2aWNlcy9BUEkvUGxhbmV0YXJ5XCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9