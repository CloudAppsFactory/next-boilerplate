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
/* harmony import */ var _Styled_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Styled/Home */ "./src/Styled/Home.ts");
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Actions */ "./src/Actions/index.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components */ "./src/Components/index.ts");
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

  const renderLocaleButtons = activeLanguage => ["en", "es", "tr"].map(lang => __jsx(_Components__WEBPACK_IMPORTED_MODULE_5__["LocaleButton"], {
    key: lang,
    lang: lang,
    isActive: activeLanguage === lang,
    onClick: () => i18n.changeLanguage(lang)
  }));

  return __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["Container"], null, __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["Top"], null, __jsx("img", {
    src: "/images/pankod-logo.png",
    alt: "Pankod Logo"
  })), __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["Middle"], null, __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["MiddleLeft"], null, __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["MiddleLeftButtons"], null, renderLocaleButtons(i18n.language))), __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["MiddleRight"], null, __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["TopText"], null, t("common:Hello")), __jsx(_Components__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    text: t("common:World")
  }), __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["Apod"], null, __jsx(_Styled_Home__WEBPACK_IMPORTED_MODULE_3__["ApodButton"], {
    onClick: () => {
      dispatch(_Actions__WEBPACK_IMPORTED_MODULE_4__["HomeActions"].GetApod({
        params: {
          hd: false
        }
      }));
    }
  }, "Discover Space"), __jsx("img", {
    src: home.image.url,
    height: "300",
    width: "150",
    alt: "Discover Space"
  })))));
};

Home.getInitialProps = async (ctx) => {
  await ctx.store.dispatch(_Actions__WEBPACK_IMPORTED_MODULE_4__["HomeActions"].GetApod({
    params: {
      hd: true
    }
  }));
  return {
    namespacesRequired: ["common"]
  };
};

const Extended = Object(_Server_i18n__WEBPACK_IMPORTED_MODULE_2__["withTranslation"])("common")(Home);
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Navbar = () => {
  return __jsx("div", {
    className: "navbar"
  }, "Navbar");
};



/***/ }),

/***/ "./src/Components/index.ts":
/*!*********************************!*\
  !*** ./src/Components/index.ts ***!
  \*********************************/
/*! exports provided: Layout, Navbar, Footer, Heading, LocaleButton */
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

/***/ "./src/Styled/Home.ts":
/*!****************************!*\
  !*** ./src/Styled/Home.ts ***!
  \****************************/
/*! exports provided: Container, Top, Middle, MiddleLeft, MiddleLeftButtons, MiddleRight, Apod, ApodButton, TopText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Top", function() { return Top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Middle", function() { return Middle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleLeft", function() { return MiddleLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleLeftButtons", function() { return MiddleLeftButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiddleRight", function() { return MiddleRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apod", function() { return Apod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApodButton", function() { return ApodButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopText", function() { return TopText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
// #region Global Imports
 // #endregion Global Imports

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    background-color: ${({
  theme
}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
`;
const Top = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    margin: 100px;
`;
const Middle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    text-align: center;
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    justify-content: flex-start;
`;
const MiddleLeft = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    flex: 1 1 1%;
`;
const MiddleLeftButtons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    background: #f9da2e;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: #4b6c8d;
    letter-spacing: 0;
    width: 55px;
    height: 236px;
    margin-left: 15px;
    padding: 10px 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #4b6c8d;

    .button {
        cursor: pointer;
    }

    .active {
        color: #2c3e50;
    }
`;
const MiddleRight = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
`;
const Apod = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;
const ApodButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    background: #f9da2e;
    border-radius: 5px;
    padding: 5px 10px;
    font-family: Arial;
    font-weight: 700;
    font-size: 25px;
    color: ${({
  theme
}) => theme.colors.primary};
    letter-spacing: 0;
    cursor: pointer;
`;
const TopText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    font-size: 110px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-bottom: 10px;
`;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvSG9tZUFjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQmFzaWMvQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9CYXNpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRpbmcvSGVhZGluZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0xvY2FsZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmaW5pdGlvbnMvQWN0aW9uQ29uc3RzL0FjdGlvbkNvbnN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmaW5pdGlvbnMvQWN0aW9uQ29uc3RzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9EZWZpbml0aW9ucy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvQVBJL0h0dHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0FQSS9QbGFuZXRhcnkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TdHlsZWQvSG9tZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJIb21lIiwidCIsImkxOG4iLCJob21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyZW5kZXJMb2NhbGVCdXR0b25zIiwiYWN0aXZlTGFuZ3VhZ2UiLCJtYXAiLCJsYW5nIiwiY2hhbmdlTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsIkhvbWVBY3Rpb25zIiwiR2V0QXBvZCIsInBhcmFtcyIsImhkIiwiaW1hZ2UiLCJ1cmwiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzdG9yZSIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsIkV4dGVuZGVkIiwid2l0aFRyYW5zbGF0aW9uIiwiTmV4dEkxOE5leHRJbnN0YW5jZSIsIk5leHRJMThOZXh0IiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJNYXAiLCJwYXlsb2FkIiwidHlwZSIsIkFjdGlvbkNvbnN0cyIsIlNldFJlZHVjZXIiLCJSZXNldCIsIlJlc2V0UmVkdWNlciIsInJlc3VsdCIsIlBsYW5ldGFyeVNlcnZpY2UiLCJHZXRQbGFuZXRJbWFnZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImRpc2FibGVkIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiQnV0dG9uIiwicHJvcHMiLCJGb290ZXIiLCJIZWFkaW5nIiwidGV4dCIsInN0eWxlcyIsInRpdGxlIiwidGl0bGVfX2JhY2siLCJ0aXRsZV9fZnJvbnQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzQWN0aXZlIiwiTG9jYWxlQnV0dG9uIiwib25DbGljayIsIk5hdmJhciIsIkJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIkh0dHAiLCJSZXF1ZXN0IiwibWV0aG9kVHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicXVlcnkiLCJzdHJpbmdpZnkiLCJhcGlfa2V5IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJjYWNoZSIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJjb3B5cmlnaHQiLCJkYXRlIiwiZXhwbGFuYXRpb24iLCJoZHVybCIsInNlcnZpY2VfdmVyc2lvbiIsIlRvcCIsIk1pZGRsZSIsIk1pZGRsZUxlZnQiLCJNaWRkbGVMZWZ0QnV0dG9ucyIsIk1pZGRsZVJpZ2h0IiwiQXBvZCIsIkFwb2RCdXR0b24iLCJUb3BUZXh0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMs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b21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ob21lL2luZGV4LnRzeFwiKTtcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tIFwiQFNlcnZlci9pMThuXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDb250YWluZXIsXHJcbiAgICBUb3AsXHJcbiAgICBUb3BUZXh0LFxyXG4gICAgTWlkZGxlLFxyXG4gICAgTWlkZGxlTGVmdCxcclxuICAgIE1pZGRsZUxlZnRCdXR0b25zLFxyXG4gICAgTWlkZGxlUmlnaHQsXHJcbiAgICBBcG9kLFxyXG4gICAgQXBvZEJ1dHRvbixcclxufSBmcm9tIFwiQFN0eWxlZC9Ib21lXCI7XHJcbmltcG9ydCB7IElTdG9yZSB9IGZyb20gXCJAUmVkdXgvSVN0b3JlXCI7XHJcbmltcG9ydCB7IEhvbWVBY3Rpb25zIH0gZnJvbSBcIkBBY3Rpb25zXCI7XHJcbmltcG9ydCB7IEhlYWRpbmcsIExvY2FsZUJ1dHRvbiB9IGZyb20gXCJAQ29tcG9uZW50c1wiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuaW1wb3J0IHsgSUhvbWVQYWdlLCBSZWR1eE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJASW50ZXJmYWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5jb25zdCBIb21lOiBOZXh0UGFnZTxJSG9tZVBhZ2UuSVByb3BzLCBJSG9tZVBhZ2UuSW5pdGlhbFByb3BzPiA9ICh7XHJcbiAgICB0LFxyXG4gICAgaTE4bixcclxufSkgPT4ge1xyXG4gICAgY29uc3QgaG9tZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSVN0b3JlKSA9PiBzdGF0ZS5ob21lKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJMb2NhbGVCdXR0b25zID0gKGFjdGl2ZUxhbmd1YWdlOiBzdHJpbmcpID0+XHJcbiAgICAgICAgW1wiZW5cIiwgXCJlc1wiLCBcInRyXCJdLm1hcChsYW5nID0+IChcclxuICAgICAgICAgICAgPExvY2FsZUJ1dHRvblxyXG4gICAgICAgICAgICAgICAga2V5PXtsYW5nfVxyXG4gICAgICAgICAgICAgICAgbGFuZz17bGFuZ31cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXthY3RpdmVMYW5ndWFnZSA9PT0gbGFuZ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZyl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VG9wPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhbmtvZC1sb2dvLnBuZ1wiIGFsdD1cIlBhbmtvZCBMb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9Ub3A+XHJcbiAgICAgICAgICAgIDxNaWRkbGU+XHJcbiAgICAgICAgICAgICAgICA8TWlkZGxlTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8TWlkZGxlTGVmdEJ1dHRvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJMb2NhbGVCdXR0b25zKGkxOG4ubGFuZ3VhZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWlkZGxlTGVmdEJ1dHRvbnM+XHJcbiAgICAgICAgICAgICAgICA8L01pZGRsZUxlZnQ+XHJcbiAgICAgICAgICAgICAgICA8TWlkZGxlUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvcFRleHQ+e3QoXCJjb21tb246SGVsbG9cIil9PC9Ub3BUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHRleHQ9e3QoXCJjb21tb246V29ybGRcIil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwb2Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcG9kQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVBY3Rpb25zLkdldEFwb2Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGhkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciBTcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Fwb2RCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aG9tZS5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRGlzY292ZXIgU3BhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXBvZD5cclxuICAgICAgICAgICAgICAgIDwvTWlkZGxlUmlnaHQ+XHJcbiAgICAgICAgICAgIDwvTWlkZGxlPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKFxyXG4gICAgY3R4OiBSZWR1eE5leHRQYWdlQ29udGV4dFxyXG4pOiBQcm9taXNlPElIb21lUGFnZS5Jbml0aWFsUHJvcHM+ID0+IHtcclxuICAgIGF3YWl0IGN0eC5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBIb21lQWN0aW9ucy5HZXRBcG9kKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IGhkOiB0cnVlIH0sXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICByZXR1cm4geyBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiXSB9O1xyXG59O1xyXG5cclxuY29uc3QgRXh0ZW5kZWQgPSB3aXRoVHJhbnNsYXRpb24oXCJjb21tb25cIikoSG9tZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRlZDtcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgTmV4dEkxOE5leHQgZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG5jb25zdCBOZXh0STE4TmV4dEluc3RhbmNlID0gbmV3IE5leHRJMThOZXh0KHtcclxuICAgIGRlZmF1bHRMYW5ndWFnZTogXCJlblwiLFxyXG4gICAgb3RoZXJMYW5ndWFnZXM6IFtcImVzXCIsIFwidHJcIl0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYXBwV2l0aFRyYW5zbGF0aW9uLCB3aXRoVHJhbnNsYXRpb24gfSA9IE5leHRJMThOZXh0SW5zdGFuY2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0STE4TmV4dEluc3RhbmNlO1xyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiQERlZmluaXRpb25zXCI7XHJcbmltcG9ydCB7IFBsYW5ldGFyeVNlcnZpY2UgfSBmcm9tIFwiQFNlcnZpY2VzXCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBJSG9tZVBhZ2UgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVBY3Rpb25zID0ge1xyXG4gICAgTWFwOiAocGF5bG9hZDoge30pID0+ICh7XHJcbiAgICAgICAgcGF5bG9hZCxcclxuICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuSG9tZS5TZXRSZWR1Y2VyLFxyXG4gICAgfSksXHJcblxyXG4gICAgUmVzZXQ6ICgpID0+ICh7XHJcbiAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuUmVzZXRSZWR1Y2VyLFxyXG4gICAgfSksXHJcblxyXG4gICAgR2V0QXBvZDogKHBheWxvYWQ6IElIb21lUGFnZS5BY3Rpb25zLklHZXRBcG9kUGF5bG9hZCkgPT4gYXN5bmMgKFxyXG4gICAgICAgIGRpc3BhdGNoOiBEaXNwYXRjaFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUGxhbmV0YXJ5U2VydmljZS5HZXRQbGFuZXRJbWFnZSh7XHJcbiAgICAgICAgICAgIHBhcmFtczogcGF5bG9hZC5wYXJhbXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlc3VsdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuU2V0UmVkdWNlcixcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0hvbWVBY3Rpb25zXCI7XHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSUJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SUJ1dHRvbi5JUHJvcHM+YFxyXG4gICAgY3Vyc29yOiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwiKX07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQnV0dG9uLklQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gPENvbnRhaW5lciB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG4iLCJleHBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IElGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElGb290ZXIuSVByb3BzPiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5Gb290ZXI8L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgeyBGb290ZXIgfTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGl0bGVcIjogXCJIZWFkaW5nX3RpdGxlX18ydFNXUVwiLFxuXHRcInRpdGxlX19iYWNrXCI6IFwiSGVhZGluZ190aXRsZV9fYmFja19fMlU4cF9cIixcblx0XCJ0aXRsZV9fZnJvbnRcIjogXCJIZWFkaW5nX3RpdGxlX19mcm9udF9fMXNNekRcIixcblx0XCJ0aXRsZS0tY29udGFjdFwiOiBcIkhlYWRpbmdfdGl0bGUtLWNvbnRhY3RfXzFfTmRtXCJcbn07XG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9IZWFkaW5nLm1vZHVsZS5zY3NzXCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBJSGVhZGluZyB9IGZyb20gXCIuL0hlYWRpbmdcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuY29uc3QgSGVhZGluZzogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUhlYWRpbmcuSVByb3BzPiA9IChcclxuICAgIHByb3BzXHJcbik6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IHsgdGV4dCB9ID0gcHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX2JhY2t9Pnt0ZXh0fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfX2Zyb250fT57dGV4dH08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgSGVhZGluZyB9O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIi4vTGF5b3V0XCI7XHJcblxyXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PExheW91dFByb3BzPiA9ICh7XHJcbiAgICBjaGlsZHJlbixcclxufSk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImxheW91dFwiPntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgeyBMYXlvdXQgfTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHsgSUxvY2FsZUJ1dHRvbiB9IGZyb20gXCIuL0xvY2FsZUJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL0Jhc2ljXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQoQnV0dG9uKTx7IGlzQWN0aXZlOiBib29sZWFuIH0+YFxyXG4gICAgY29sb3I6ICR7KHsgaXNBY3RpdmUgfSkgPT4gKGlzQWN0aXZlID8gXCIjMmMzZTUwXCIgOiBcImluaGVyaXRcIil9O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvY2FsZUJ1dHRvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUxvY2FsZUJ1dHRvbi5JUHJvcHM+ID0gKHtcclxuICAgIGxhbmcsXHJcbiAgICBpc0FjdGl2ZSxcclxuICAgIG9uQ2xpY2ssXHJcbn0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lciBpc0FjdGl2ZT17aXNBY3RpdmV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICB7bGFuZ31cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgSU5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJTmF2YmFyLklQcm9wcz4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+TmF2YmFyPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgTmF2YmFyIH07XHJcbiIsImV4cG9ydCB7IExheW91dCB9IGZyb20gXCJAQ29tcG9uZW50cy9MYXlvdXRcIjtcclxuZXhwb3J0IHsgTmF2YmFyIH0gZnJvbSBcIkBDb21wb25lbnRzL05hdmJhclwiO1xyXG5leHBvcnQgeyBGb290ZXIgfSBmcm9tIFwiQENvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmV4cG9ydCB7IEhlYWRpbmcgfSBmcm9tIFwiQENvbXBvbmVudHMvSGVhZGluZ1wiO1xyXG5leHBvcnQgeyBMb2NhbGVCdXR0b24gfSBmcm9tIFwiQENvbXBvbmVudHMvTG9jYWxlQnV0dG9uXCI7XHJcbiIsImV4cG9ydCBjb25zdCBBY3Rpb25Db25zdHMgPSB7XHJcbiAgICBIb21lOiB7XHJcbiAgICAgICAgUmVzZXRSZWR1Y2VyOiBcIkhvbWVfUmVzZXRSZWR1Y2VyXCIsXHJcbiAgICAgICAgU2V0UmVkdWNlcjogXCJIb21lX1NldFJlZHVjZXJcIixcclxuICAgIH0sXHJcbn07XHJcbiIsImV4cG9ydCB7IEFjdGlvbkNvbnN0cyB9IGZyb20gXCIuL0FjdGlvbkNvbnN0c1wiO1xyXG4iLCJleHBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiLi9BY3Rpb25Db25zdHNcIjtcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IEh0dHBNb2RlbCB9IGZyb20gXCJASW50ZXJmYWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5jb25zdCBCYXNlVXJsID0gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpYDtcclxuZXhwb3J0IGNvbnN0IEh0dHAgPSB7XHJcbiAgICBSZXF1ZXN0OiBhc3luYyA8QT4oXHJcbiAgICAgICAgbWV0aG9kVHlwZTogc3RyaW5nLFxyXG4gICAgICAgIHVybDogc3RyaW5nLFxyXG4gICAgICAgIHBhcmFtcz86IEh0dHBNb2RlbC5JUmVxdWVzdFF1ZXJ5UGF5bG9hZCxcclxuICAgICAgICBwYXlsb2FkPzogSHR0cE1vZGVsLklSZXF1ZXN0UGF5bG9hZFxyXG4gICAgKTogUHJvbWlzZTxBPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBwYXJhbXNcclxuICAgICAgICAgICAgICAgID8gYD8ke3N0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZLFxyXG4gICAgICAgICAgICAgICAgICB9KX1gXHJcbiAgICAgICAgICAgICAgICA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBmZXRjaChgJHtCYXNlVXJsfSR7dXJsfSR7cXVlcnl9YCwge1xyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICAgICAgICAgICAgICBjYWNoZTogXCJuby1jYWNoZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogYCR7bWV0aG9kVHlwZX1gLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpLnRoZW4ocmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBTZXJ2aWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuaW1wb3J0IHsgUGxhbmV0YXJ5TW9kZWwgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuZXhwb3J0IGNvbnN0IFBsYW5ldGFyeVNlcnZpY2UgPSB7XHJcbiAgICBHZXRQbGFuZXRJbWFnZTogYXN5bmMgKFxyXG4gICAgICAgIHBheWxvYWQ6IFBsYW5ldGFyeU1vZGVsLkdldEFwb2RQYXlsb2FkXHJcbiAgICApOiBQcm9taXNlPFBsYW5ldGFyeU1vZGVsLkdldEFwb2RSZXNwb25zZT4gPT4ge1xyXG4gICAgICAgIGxldCByZXNwb25zZTogUGxhbmV0YXJ5TW9kZWwuR2V0QXBvZFJlc3BvbnNlO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IEh0dHAuUmVxdWVzdDxQbGFuZXRhcnlNb2RlbC5HZXRBcG9kUmVzcG9uc2U+KFxyXG4gICAgICAgICAgICAgICAgXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIFwiL3BsYW5ldGFyeS9hcG9kXCIsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnBhcmFtc1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgICAgY29weXJpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGV4cGxhbmF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaGR1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlX3ZlcnNpb246IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHVybDogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sXHJcbn07XHJcbiIsIi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5leHBvcnQgeyBIdHRwIH0gZnJvbSBcIkBTZXJ2aWNlcy9BUEkvSHR0cFwiO1xyXG5leHBvcnQgeyBQbGFuZXRhcnlTZXJ2aWNlIH0gZnJvbSBcIkBTZXJ2aWNlcy9BUEkvUGxhbmV0YXJ5XCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvcCA9IHN0eWxlZC5kaXZgXHJcbiAgICBtYXJnaW46IDEwMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1pZGRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNaWRkbGVMZWZ0ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxIDEgMSU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWlkZGxlTGVmdEJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZDogI2Y5ZGEyZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzRiNmM4ZDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgd2lkdGg6IDU1cHg7XHJcbiAgICBoZWlnaHQ6IDIzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBjb2xvcjogIzRiNmM4ZDtcclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTWlkZGxlUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBcG9kID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQXBvZEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlkYTJlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVG9wVGV4dCA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXNpemU6IDExMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbmA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnktc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=