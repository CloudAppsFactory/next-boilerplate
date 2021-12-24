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
    style: {
      width: "-webkit-fill-available"
    },
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const FeatureCard = ({
  text,
  icon,
  isFullImg
}) => __jsx("div", {
  style: Styles.outrcrd
}, isFullImg ? __jsx("img", {
  src: `/images/svg/${icon}`,
  width: "100%",
  height: "50px"
}) : __jsx("img", {
  style: Styles.imgBrdr,
  src: `/images/svg/${icon}`,
  width: "100%",
  height: "50px"
}), __jsx("div", {
  style: Styles.txtstyl
}, text));
const Styles = {
  imgBrdr: {
    background: "#2783F3",
    width: "50px",
    height: "50px",
    padding: "12px",
    borderRadius: "100%"
  },
  txtstyl: {
    width: "100px",
    fontSize: "13px",
    fontWeight: "bold",
    marginTop: "10px",
    margin: "15px 12px 0px 12px"
  },
  outrcrd: {
    padding: "20px",
    textAlign: "center",
    background: "#fff",
    borderRadius: "20px",
    margin: "20px 20px 20px"
  }
};

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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

const InstituteDropDown = () => {
  return __jsx("div", {
    style: Styles.main
  }, __jsx("div", {
    style: {
      fontWeight: "bold"
    }
  }, "Fees bharna online hua", __jsx("br", null), "ab aasan !"), __jsx("br", null), __jsx("div", {
    style: {
      fontSize: '20px',
      alignSelf: 'flex-start'
    }
  }, "Select School*"), __jsx("div", {
    style: {
      fontSize: '20px',
      alignSelf: 'flex-start'
    }
  }, __jsx("div", null, __jsx("input", {
    id: "myInput",
    type: "text",
    name: "myCountry",
    placeholder: "Select"
  })), __jsx("div", null, __jsx("button", {
    style: Styles.btnn
  }, "Submit"))));
};
const Styles = {
  main: {
    height: "250px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    flexDirection: 'column'
  },
  btnn: {
    color: "#fff",
    background: "#2783F3",
    border: "none",
    padding: "10px 28px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    marginTop: "10px"
  }
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// #region Global Imports




const InstituteSelection = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    style: Styles.maindiv
  }, __jsx(_InstituteDropDown__WEBPACK_IMPORTED_MODULE_2__["InstituteDropDown"], null), __jsx(_LineArt__WEBPACK_IMPORTED_MODULE_1__["LineArt"], null)), __jsx(_slantDiv__WEBPACK_IMPORTED_MODULE_3__["SlantDiv"], null));
};
const Styles = {
  maindiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    color: "#fff",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap'
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvSG9tZUFjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQmFzaWMvQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9CYXNpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DbGllbnRzU2F5L0NsaWVudHNTYXkubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DbGllbnRzU2F5L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DbGllbnRzU2F5L3NsYW50RGl2LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9Db250YWN0U2VjdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbnRhY3RTZWN0aW9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db250YWN0U2VjdGlvbi9zbGFudERpdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVRpbGVzL0ZlYXR1cmVDYXJkLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlVGlsZXMvRmVhdHVyZVRpbGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVRpbGVzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlVGlsZXMvc2xhbnREaXYudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSGVhZGluZy9IZWFkaW5nLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRpbmcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9JbnN0aXR1dGVEcm9wRG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5zdGl0dXRlU2VsZWN0aW9uL0xpbmVBcnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSW5zdGl0dXRlU2VsZWN0aW9uL3NsYW50RGl2LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0xvY2FsZUJ1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFscy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1Rlc3RpbW9uaWFscy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvV2VsY29tZVNlY3Rpb24vV2VsY29tZVNlY3Rpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvV2VsY29tZVNlY3Rpb24vc2xhbnREaXYudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9EZWZpbml0aW9ucy9BY3Rpb25Db25zdHMvQWN0aW9uQ29uc3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9EZWZpbml0aW9ucy9BY3Rpb25Db25zdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmluaXRpb25zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TZXJ2aWNlcy9BUEkvSHR0cC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvQVBJL1BsYW5ldGFyeS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvU2VydmljZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicXVlcnktc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiSG9tZSIsInQiLCJpMThuIiwiaG9tZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicmVuZGVyTG9jYWxlQnV0dG9ucyIsImFjdGl2ZUxhbmd1YWdlIiwibWFwIiwibGFuZyIsImNoYW5nZUxhbmd1YWdlIiwiU3R5bGVzIiwibWFpbiIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInN0b3JlIiwiSG9tZUFjdGlvbnMiLCJHZXRBcG9kIiwicGFyYW1zIiwiaGQiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJFeHRlbmRlZCIsIndpdGhUcmFuc2xhdGlvbiIsImJhY2tncm91bmQiLCJOZXh0STE4TmV4dEluc3RhbmNlIiwiTmV4dEkxOE5leHQiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIk1hcCIsInBheWxvYWQiLCJ0eXBlIiwiQWN0aW9uQ29uc3RzIiwiU2V0UmVkdWNlciIsIlJlc2V0IiwiUmVzZXRSZWR1Y2VyIiwicmVzdWx0IiwiUGxhbmV0YXJ5U2VydmljZSIsIkdldFBsYW5ldEltYWdlIiwiaW1hZ2UiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJkaXNhYmxlZCIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIkJ1dHRvbiIsInByb3BzIiwiQ2xpZW50c1NheSIsInN0eWxlcyIsIm1haW5wYXJlbnQiLCJ0eHRtYWluIiwiaHJyIiwiZm9udFNpemUiLCJwYXJhIiwicG9zdGVybmFtZSIsInBvc3RlcnBvc2l0aW9uIiwiU2xhbnREaXYiLCJ3aWR0aCIsImhlaWdodCIsIkNvbnRhY3RTZWN0aW9uIiwiZm9udFdlaWdodCIsImZvcm1yb3ciLCJpbnB0dCIsInR4dGFyZWFvdXRlciIsImJ1dHRvbm4iLCJGZWF0dXJlQ2FyZCIsInRleHQiLCJpY29uIiwiaXNGdWxsSW1nIiwib3V0cmNyZCIsImltZ0JyZHIiLCJ0eHRzdHlsIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsIm1hcmdpbiIsInRleHRBbGlnbiIsIkZlYXR1cmVUaWxlcyIsImNhcmRzRGl2IiwiQ2FyZHNEZXRhaWxzIiwiY2FyZCIsImluZHgiLCJpY28iLCJGb290ZXIiLCJIZWFkaW5nIiwidGl0bGUiLCJ0aXRsZV9fYmFjayIsInRpdGxlX19mcm9udCIsIkluc3RpdHV0ZURyb3BEb3duIiwiYWxpZ25TZWxmIiwiYnRubiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiY29sb3IiLCJib3JkZXIiLCJ0ZXh0RGVjb3JhdGlvbiIsImN1cnNvciIsIkxpbmVBcnQiLCJJbnN0aXR1dGVTZWxlY3Rpb24iLCJtYWluZGl2IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJmbGV4V3JhcCIsIkxheW91dCIsImNoaWxkcmVuIiwiaXNBY3RpdmUiLCJMb2NhbGVCdXR0b24iLCJvbkNsaWNrIiwiTmF2YmFyIiwiYnRucyIsImJ1dHRvbnMiLCJidG4iLCJidG5FbGUiLCJUZXN0aW1vbmlhbHMiLCJjb3VudE1haW4iLCJjb3VudFZhbCIsImNvdW50RGVzYyIsIm1heFdpZHRoIiwic2xpY2UiLCJXZWxjb21lU2VjdGlvbiIsIkJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIkh0dHAiLCJSZXF1ZXN0IiwibWV0aG9kVHlwZSIsInVybCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicXVlcnkiLCJzdHJpbmdpZnkiLCJhcGlfa2V5IiwiTkVYVF9QVUJMSUNfQVBJX0tFWSIsImZldGNoIiwiYm9keSIsIkpTT04iLCJjYWNoZSIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlIiwiZXJyb3IiLCJjb3B5cmlnaHQiLCJkYXRlIiwiZXhwbGFuYXRpb24iLCJoZHVybCIsInNlcnZpY2VfdmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFFUEMsWUFBSSxFQUFFLEVBRkM7QUFHUEMsbUJBQVcsRUFBRSxFQUhOO0FBSVBDLGFBQUssRUFBRSxFQUpBO0FBS1BDLHVCQUFlLEVBQUUsRUFMVjtBQU1QdkUsYUFBSyxFQUFFLEVBTkE7QUFPUDhDLFdBQUcsRUFBRTtBQVBFLE9BQVg7QUFTSDs7QUFFRCxXQUFPZSxRQUFQO0FBQ0g7QUF6QjJCLENBQXpCLEM7Ozs7Ozs7Ozs7OztBQ1JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBLDJCOzs7Ozs7Ozs7OztBQ0hBLCtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2hvbWUvaW5kZXgudHN4XCIpO1xuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCJAU2VydmVyL2kxOG5cIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIFRvcCxcclxuICAgIFRvcFRleHQsXHJcbiAgICBNaWRkbGUsXHJcbiAgICBNaWRkbGVMZWZ0LFxyXG4gICAgTWlkZGxlTGVmdEJ1dHRvbnMsXHJcbiAgICBNaWRkbGVSaWdodCxcclxuICAgIEFwb2QsXHJcbiAgICBBcG9kQnV0dG9uLFxyXG59IGZyb20gXCJAU3R5bGVkL0hvbWVcIjtcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSBcIkBSZWR1eC9JU3RvcmVcIjtcclxuaW1wb3J0IHsgSG9tZUFjdGlvbnMgfSBmcm9tIFwiQEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgTmF2YmFyLENsaWVudHNTYXksTG9jYWxlQnV0dG9uLEluc3RpdHV0ZVNlbGVjdGlvbixGZWF0dXJlVGlsZXMsV2VsY29tZVNlY3Rpb24sVGVzdGltb25pYWxzLENvbnRhY3RTZWN0aW9ufSBmcm9tIFwiQENvbXBvbmVudHNcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IElIb21lUGFnZSwgUmVkdXhOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2U8SUhvbWVQYWdlLklQcm9wcywgSUhvbWVQYWdlLkluaXRpYWxQcm9wcz4gPSAoe1xyXG4gICAgdCxcclxuICAgIGkxOG4sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGhvbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElTdG9yZSkgPT4gc3RhdGUuaG9tZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyTG9jYWxlQnV0dG9ucyA9IChhY3RpdmVMYW5ndWFnZTogc3RyaW5nKSA9PlxyXG4gICAgICAgIFtcImVuXCIsIFwiZXNcIiwgXCJ0clwiXS5tYXAobGFuZyA9PiAoXHJcbiAgICAgICAgICAgIDxMb2NhbGVCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17bGFuZ31cclxuICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlTGFuZ3VhZ2UgPT09IGxhbmd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmcpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgIDxJbnN0aXR1dGVTZWxlY3Rpb24vPlxyXG4gICAgICAgIDxGZWF0dXJlVGlsZXMvPlxyXG4gICAgICAgIDxXZWxjb21lU2VjdGlvbi8+XHJcbiAgICAgICAgPFRlc3RpbW9uaWFscy8+XHJcbiAgICAgICAgPENsaWVudHNTYXkvPlxyXG4gICAgICAgIDxDb250YWN0U2VjdGlvbi8+XHJcbiAgICAgICAgey8qIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxUb3A+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcGFua29kLWxvZ28ucG5nXCIgYWx0PVwiUGFua29kIExvZ29cIiAvPlxyXG4gICAgICAgICAgICA8L1RvcD5cclxuICAgICAgICAgICAgPE1pZGRsZT5cclxuICAgICAgICAgICAgICAgIDxNaWRkbGVMZWZ0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaWRkbGVMZWZ0QnV0dG9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckxvY2FsZUJ1dHRvbnMoaTE4bi5sYW5ndWFnZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NaWRkbGVMZWZ0QnV0dG9ucz5cclxuICAgICAgICAgICAgICAgIDwvTWlkZGxlTGVmdD5cclxuICAgICAgICAgICAgICAgIDxNaWRkbGVSaWdodD5cclxuICAgICAgICAgICAgICAgICAgICA8VG9wVGV4dD57dChcImNvbW1vbjpIZWxsb1wiKX08L1RvcFRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgdGV4dD17dChcImNvbW1vbjpXb3JsZFwiKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QXBvZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFwb2RCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSG9tZUFjdGlvbnMuR2V0QXBvZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaGQ6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdmVyIFNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXBvZEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtob21lLmltYWdlLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE1MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJEaXNjb3ZlciBTcGFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BcG9kPlxyXG4gICAgICAgICAgICAgICAgPC9NaWRkbGVSaWdodD5cclxuICAgICAgICAgICAgPC9NaWRkbGU+XHJcbiAgICAgICAgPC9Db250YWluZXI+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKFxyXG4gICAgY3R4OiBSZWR1eE5leHRQYWdlQ29udGV4dFxyXG4pOiBQcm9taXNlPElIb21lUGFnZS5Jbml0aWFsUHJvcHM+ID0+IHtcclxuICAgIGF3YWl0IGN0eC5zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICBIb21lQWN0aW9ucy5HZXRBcG9kKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IGhkOiB0cnVlIH0sXHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgICByZXR1cm4geyBuYW1lc3BhY2VzUmVxdWlyZWQ6IFtcImNvbW1vblwiXSB9O1xyXG59O1xyXG5cclxuY29uc3QgRXh0ZW5kZWQgPSB3aXRoVHJhbnNsYXRpb24oXCJjb21tb25cIikoSG9tZSk7XHJcblxyXG5jb25zdCBTdHlsZXMgPSB7XHJcbiAgICBtYWluOntcclxuICAgICAgICBiYWNrZ3JvdW5kOlwiIzAyMDQyQlwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4dGVuZGVkO1xyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCBOZXh0STE4TmV4dCBmcm9tIFwibmV4dC1pMThuZXh0XCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbmNvbnN0IE5leHRJMThOZXh0SW5zdGFuY2UgPSBuZXcgTmV4dEkxOE5leHQoe1xyXG4gICAgZGVmYXVsdExhbmd1YWdlOiBcImVuXCIsXHJcbiAgICBvdGhlckxhbmd1YWdlczogW1wiZXNcIiwgXCJ0clwiXSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhcHBXaXRoVHJhbnNsYXRpb24sIHdpdGhUcmFuc2xhdGlvbiB9ID0gTmV4dEkxOE5leHRJbnN0YW5jZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRJMThOZXh0SW5zdGFuY2U7XHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tIFwicmVkdXhcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IEFjdGlvbkNvbnN0cyB9IGZyb20gXCJARGVmaW5pdGlvbnNcIjtcclxuaW1wb3J0IHsgUGxhbmV0YXJ5U2VydmljZSB9IGZyb20gXCJAU2VydmljZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IElIb21lUGFnZSB9IGZyb20gXCJASW50ZXJmYWNlc1wiO1xyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZUFjdGlvbnMgPSB7XHJcbiAgICBNYXA6IChwYXlsb2FkOiB7fSkgPT4gKHtcclxuICAgICAgICBwYXlsb2FkLFxyXG4gICAgICAgIHR5cGU6IEFjdGlvbkNvbnN0cy5Ib21lLlNldFJlZHVjZXIsXHJcbiAgICB9KSxcclxuXHJcbiAgICBSZXNldDogKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuSG9tZS5SZXNldFJlZHVjZXIsXHJcbiAgICB9KSxcclxuXHJcbiAgICBHZXRBcG9kOiAocGF5bG9hZDogSUhvbWVQYWdlLkFjdGlvbnMuSUdldEFwb2RQYXlsb2FkKSA9PiBhc3luYyAoXHJcbiAgICAgICAgZGlzcGF0Y2g6IERpc3BhdGNoXHJcbiAgICApID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBQbGFuZXRhcnlTZXJ2aWNlLkdldFBsYW5ldEltYWdlKHtcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXlsb2FkLnBhcmFtcyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcmVzdWx0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuSG9tZS5TZXRSZWR1Y2VyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vSG9tZUFjdGlvbnNcIjtcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBJQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdjxJQnV0dG9uLklQcm9wcz5gXHJcbiAgICBjdXJzb3I6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCJub3QtYWxsb3dlZFwiIDogXCJwb2ludGVyXCIpfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElCdXR0b24uSVByb3BzPiA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiA8Q29udGFpbmVyIHsuLi5wcm9wc30gLz47XHJcbn07XHJcbiIsImV4cG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlucGFyZW50XCI6IFwiQ2xpZW50c1NheV9tYWlucGFyZW50X18yM0FPRlwiLFxuXHRcInBhcmFcIjogXCJDbGllbnRzU2F5X3BhcmFfXzFlTVN3XCIsXG5cdFwicG9zdGVybmFtZVwiOiBcIkNsaWVudHNTYXlfcG9zdGVybmFtZV9fMXlNNU5cIixcblx0XCJwb3N0ZXJwb3NpdGlvblwiOiBcIkNsaWVudHNTYXlfcG9zdGVycG9zaXRpb25fXzJ6X2RVXCIsXG5cdFwidHh0bWFpblwiOiBcIkNsaWVudHNTYXlfdHh0bWFpbl9fMVRPVkVcIixcblx0XCJocnJcIjogXCJDbGllbnRzU2F5X2hycl9fMjUtd1ZcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NsaWVudHNTYXkubW9kdWxlLmNzcydcclxuaW1wb3J0IHsgU2xhbnREaXYgfSBmcm9tIFwiLi9zbGFudERpdlwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsaWVudHNTYXk6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbjw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5wYXJlbnR9PlxyXG4gICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NsaWVudHNheS5wbmdcIiB3aWR0aD1cImF1dG9cIiBoZWlnaHQ9XCIyNTBweFwiIC8+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHh0bWFpbn0gID5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaHJyfT48L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICczMHB4J319PlxyXG4gICAgICAgICAgIFdoYXQgT3VyIENsaWVudCBTYXlcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zdmcvcXVvdGUuc3ZnXCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiMzBweFwiIC8+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhfT5cclxuICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LiBMb3JlbSBJcHN1bSBoYXMgYmVlbiB0aGUgaW5kdXN0cnkncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpc2VkIGluIHRoZSAxOTYwcy5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0ZXJuYW1lfT5cclxuICAgICAgICAgICAgICAgSmFtZXMgQW5kZXJzb25cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RlcnBvc2l0aW9ufT5cclxuICAgICAgICAgICAgICAgRG9uIEJvc2NvIFByaW5jaXBsZVxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8U2xhbnREaXYvPlxyXG4gICAgICAgXHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGFudERpdjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHN0eWxlPXtTdHlsZXMubWFpbn0gdmlld0JveD1cIjAgMCAxIDFcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxyXG4gICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMCwwICAxLDAgIDAsMVwiIGZpbGw9XCIjMDIwNDJCXCIgaWQ9XCJ0b3BcIi8+XHJcbiAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLDAgIDEsMSAgMCwxXCIgZmlsbD1cIiNFRUVGRjJcIiBpZD1cImJvdHRvbVwiLz5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMSwxICAxLDAgIDAsMFwiIGZpbGw9XCIjMDIwNDJCXCIgaWQ9XCJib3R0b21cIi8+XHJcbiAgICAgICAgXHJcbiAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgU3R5bGVzID0ge1xyXG4gICAgbWFpbjp7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiXHJcbiAgICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlucGFyZW50XCI6IFwiQ29udGFjdFNlY3Rpb25fbWFpbnBhcmVudF9fdnBHZDNcIixcblx0XCJ0eHRtYWluXCI6IFwiQ29udGFjdFNlY3Rpb25fdHh0bWFpbl9fMlZjQldcIixcblx0XCJocnJcIjogXCJDb250YWN0U2VjdGlvbl9ocnJfXzNPcEZpXCIsXG5cdFwiZm9ybXJvd1wiOiBcIkNvbnRhY3RTZWN0aW9uX2Zvcm1yb3dfX1k2UEVyXCIsXG5cdFwidHh0YXJlYW91dGVyXCI6IFwiQ29udGFjdFNlY3Rpb25fdHh0YXJlYW91dGVyX18yN0doOFwiLFxuXHRcIm91dHJmcm1cIjogXCJDb250YWN0U2VjdGlvbl9vdXRyZnJtX184VHlhTlwiLFxuXHRcImlucHR0XCI6IFwiQ29udGFjdFNlY3Rpb25faW5wdHRfX1RwMzNBXCIsXG5cdFwiYnV0dG9ublwiOiBcIkNvbnRhY3RTZWN0aW9uX2J1dHRvbm5fXzF4UUpEXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0U2VjdGlvbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBTbGFudERpdiB9IGZyb20gXCIuL3NsYW50RGl2XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFjdFNlY3Rpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbjw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5wYXJlbnR9PlxyXG4gICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2NvbnRhY3QucG5nXCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiMTUwcHhcIiAvPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnR4dG1haW59ICA+XHJcblxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnLGZvbnRXZWlnaHQ6XCJib2xkXCJ9fT5cclxuICAgICAgICAgICBMZXQncyBnZXQgaW4gdG91Y2hcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1yb3d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB0dH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdHR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1yb3d9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5pbnB0dH0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlBob25lIE5vLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdHR9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTdGF0dXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHh0YXJlYW91dGVyfT5cclxuICAgICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3t3aWR0aDpcIi13ZWJraXQtZmlsbC1hdmFpbGFibGVcIn19IHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybXJvd30+XHJcbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25ufT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPFNsYW50RGl2Lz5cclxuICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsYW50RGl2OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgc3R5bGU9e1N0eWxlcy5tYWlufSB2aWV3Qm94PVwiMCAwIDEgMVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XHJcbiAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIwLDAgIDEsMCAgMCwxXCIgZmlsbD1cIiNFQ0VDRURcIiBpZD1cInRvcFwiLz5cclxuICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEsMCAgMSwxICAwLDFcIiBmaWxsPVwiIzAyMDQyQlwiIGlkPVwiYm90dG9tXCIvPlxyXG4gICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLDEgIDEsMCAgMCwwXCIgZmlsbD1cIiNFQ0VDRURcIiBpZD1cImJvdHRvbVwiLz5cclxuICAgICAgICBcclxuICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBTdHlsZXMgPSB7XHJcbiAgICBtYWluOntcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCJcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgdGV4dD86IHN0cmluZztcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICBpc0Z1bGxJbWc6Ym9vbGVhblxyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRmVhdHVyZUNhcmQ6IE5leHRQYWdlPFByb3BzPiA9ICh7IHRleHQgLCBpY29uICxpc0Z1bGxJbWcgfSkgPT4gKFxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMub3V0cmNyZH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHtpc0Z1bGxJbWcgPyA8aW1nIHNyYz17YC9pbWFnZXMvc3ZnLyR7aWNvbn1gfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCIgLz4gOiA8aW1nIHN0eWxlPXtTdHlsZXMuaW1nQnJkcn0gc3JjPXtgL2ltYWdlcy9zdmcvJHtpY29ufWB9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwcHhcIiAvPn0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMudHh0c3R5bH0+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gIClcclxuICBcclxuXHJcbiAgY29uc3QgU3R5bGVzID0ge1xyXG4gICAgICBpbWdCcmRyIDoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzI3ODNGM1wiLFxyXG4gICAgICAgIHdpZHRoOiBcIjUwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTJweFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCJcclxuICAgIH0sXHJcbiAgICB0eHRzdHlsOntcclxuICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxNXB4IDEycHggMHB4IDEycHhcIlxyXG4gICAgfSxcclxuICAgIG91dHJjcmQ6e1xyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBiYWNrZ3JvdW5kOlwiI2ZmZlwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiMjBweFwiLFxyXG4gICAgbWFyZ2luOlwiMjBweCAyMHB4IDIwcHhcIlxyXG4gICAgfVxyXG4gIH0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0XCI6IFwiRmVhdHVyZVRpbGVzX3RleHRfXzFRVTY0XCIsXG5cdFwiaHJyXCI6IFwiRmVhdHVyZVRpbGVzX2hycl9fU0JTcWhcIixcblx0XCJjYXJkc0RpdlwiOiBcIkZlYXR1cmVUaWxlc19jYXJkc0Rpdl9fM1ozbG9cIixcblx0XCJpbWdCcmRyXCI6IFwiRmVhdHVyZVRpbGVzX2ltZ0JyZHJfXzJmVXhMXCIsXG5cdFwidHh0c3R5bFwiOiBcIkZlYXR1cmVUaWxlc190eHRzdHlsX18zc196T1wiLFxuXHRcIm91dHJjcmRcIjogXCJGZWF0dXJlVGlsZXNfb3V0cmNyZF9fMkhza01cIlxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlQ2FyZCB9IGZyb20gXCIuL0ZlYXR1cmVDYXJkXCI7XHJcbmltcG9ydCB7IFNsYW50RGl2IH0gZnJvbSBcIi4vc2xhbnREaXZcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ZlYXR1cmVUaWxlcy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBGZWF0dXJlVGlsZXM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmQ6XCIjRUVFRkYyXCJ9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gPlxyXG4gICAgICAgICAgICAgICAgRW5hYmxpbmcgZmVlcyBwYXltZW50IGZvciBzY2hvb2xzIG9ubGluZVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ocnJ9PjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc0Rpdn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtDYXJkc0RldGFpbHMubWFwKChjYXJkLGluZHgpPT5cclxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZUNhcmQga2V5PXtpbmR4fSB0ZXh0PXtjYXJkLnRleHR9IGljb249e2NhcmQuaWNvfSBpc0Z1bGxJbWc9e2NhcmQuaXNGdWxsSW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTbGFudERpdi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQ2FyZHNEZXRhaWxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRleHQ6XCIxMDAlIEZyZWVcIixcclxuICAgICAgICBpY286XCJmcmVlaWNvLnN2Z1wiLFxyXG4gICAgICAgIGlzRnVsbEltZzpmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OlwiRmFzdGVyIFBheW1lbnRzXCIsXHJcbiAgICAgICAgaWNvOlwiZmFzdGljby5zdmdcIixcclxuICAgICAgICBpc0Z1bGxJbWc6ZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDpcIkJldHRlciBBY2NvdW50aW5nICYgVmlzaWJpbGl0eVwiLFxyXG4gICAgICAgIGljbzpcImFjY2ljby5zdmdcIixcclxuICAgICAgICBpc0Z1bGxJbWc6dHJ1ZVxyXG4gICAgfVxyXG5dXHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNsYW50RGl2OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmcgc3R5bGU9e1N0eWxlcy5tYWlufSB2aWV3Qm94PVwiMCAwIDEgMVwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCI+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjAsMCAgMSwwICAxLDFcIiBmaWxsPVwiIzAyMDQyQlwiICBpZD1cInRvcFwiLz5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMSwxICAxLDAgIDAsMFwiIGZpbGw9XCIjRUVFRkYyXCIgaWQ9XCJib3R0b21cIi8+XHJcbiAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgU3R5bGVzID0ge1xyXG4gICAgbWFpbjp7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiXHJcbiAgICB9XHJcbn0iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSUZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SUZvb3Rlci5JUHJvcHM+ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPkZvb3RlcjwvZGl2PjtcclxufTtcclxuXHJcbmV4cG9ydCB7IEZvb3RlciB9O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcIkhlYWRpbmdfdGl0bGVfXzJ0U1dRXCIsXG5cdFwidGl0bGVfX2JhY2tcIjogXCJIZWFkaW5nX3RpdGxlX19iYWNrX18yVThwX1wiLFxuXHRcInRpdGxlX19mcm9udFwiOiBcIkhlYWRpbmdfdGl0bGVfX2Zyb250X18xc016RFwiLFxuXHRcInRpdGxlLS1jb250YWN0XCI6IFwiSGVhZGluZ190aXRsZS0tY29udGFjdF9fMV9OZG1cIlxufTtcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlYWRpbmcubW9kdWxlLnNjc3NcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IElIZWFkaW5nIH0gZnJvbSBcIi4vSGVhZGluZ1wiO1xyXG4vLyAjZW5kcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcblxyXG5jb25zdCBIZWFkaW5nOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJSGVhZGluZy5JUHJvcHM+ID0gKFxyXG4gICAgcHJvcHNcclxuKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgeyB0ZXh0IH0gPSBwcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fYmFja30+e3RleHR9PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZV9fZnJvbnR9Pnt0ZXh0fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBIZWFkaW5nIH07XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluc3RpdHV0ZURyb3BEb3duOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5tYWlufT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6XCJib2xkXCJ9fT5cclxuICAgICAgICAgICAgRmVlcyBiaGFybmEgb25saW5lIGh1YSBcclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgYWIgYWFzYW4gIVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMjBweCcsYWxpZ25TZWxmOiAnZmxleC1zdGFydCd9fT5cclxuICAgICAgICAgICAgICAgIFNlbGVjdCBTY2hvb2wqXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6JzIwcHgnLGFsaWduU2VsZjogJ2ZsZXgtc3RhcnQnfX0+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgPGlucHV0IGlkPVwibXlJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm15Q291bnRyeVwiIHBsYWNlaG9sZGVyPVwiU2VsZWN0XCIgLz5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdj5cclxuICA8YnV0dG9uIHN0eWxlPXtTdHlsZXMuYnRubn0+U3VibWl0PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW46e1xyXG4gICAgaGVpZ2h0OiBcIjI1MHB4XCIsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOidjb2x1bW4nXHJcbiAgICB9LFxyXG4gICAgYnRubjp7XHJcbiAgICAgICAgY29sb3I6XCIjZmZmXCIsYmFja2dyb3VuZDpcIiMyNzgzRjNcIixcclxuICBib3JkZXI6XCJub25lXCIsXHJcbiAgcGFkZGluZzogXCIxMHB4IDI4cHhcIixcclxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXHJcbiAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gIG1hcmdpbjogXCI0cHggMnB4XCIsXHJcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICBtYXJnaW5Ub3A6XCIxMHB4XCJcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZUFydDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zdmcvbGluZWFydDEuc3ZnXCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiMjUwcHhcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTsiLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5lQXJ0IH0gZnJvbSBcIi4vTGluZUFydFwiO1xyXG5pbXBvcnQgeyBJbnN0aXR1dGVEcm9wRG93biB9IGZyb20gXCIuL0luc3RpdHV0ZURyb3BEb3duXCI7XHJcbmltcG9ydCB7IFNsYW50RGl2IH0gZnJvbSBcIi4vc2xhbnREaXZcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnN0aXR1dGVTZWxlY3Rpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1haW5kaXZ9PlxyXG4gICAgICAgICAgICAgICAgPEluc3RpdHV0ZURyb3BEb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluZUFydCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNsYW50RGl2IC8+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW5kaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjMwcHhcIixcclxuICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2xhbnREaXY6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBzdHlsZT17U3R5bGVzLm1haW59IHZpZXdCb3g9XCIwIDAgMSAxXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMCwwICAxLDAgIDAsMVwiIGZpbGw9XCIjMDIwNDJCXCIgaWQ9XCJ0b3BcIi8+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEsMCAgMSwxICAwLDFcIiBmaWxsPVwiI0VFRUZGMlwiIGlkPVwiYm90dG9tXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW46e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dFwiO1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMYXlvdXRQcm9wcz4gPSAoe1xyXG4gICAgY2hpbGRyZW4sXHJcbn0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgTGF5b3V0IH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IElMb2NhbGVCdXR0b24gfSBmcm9tIFwiLi9Mb2NhbGVCdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9CYXNpY1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJ1dHRvbik8eyBpc0FjdGl2ZTogYm9vbGVhbiB9PmBcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IFwiIzJjM2U1MFwiIDogXCJpbmhlcml0XCIpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhbGVCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElMb2NhbGVCdXR0b24uSVByb3BzPiA9ICh7XHJcbiAgICBsYW5nLFxyXG4gICAgaXNBY3RpdmUsXHJcbiAgICBvbkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNBY3RpdmU9e2lzQWN0aXZlfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAge2xhbmd9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlucGFyZW50XCI6IFwiTmF2YmFyX21haW5wYXJlbnRfXzF4YUY3XCIsXG5cdFwiYnRuc1wiOiBcIk5hdmJhcl9idG5zX185elRFNVwiLFxuXHRcImJ0bkVsZVwiOiBcIk5hdmJhcl9idG5FbGVfXzNNdU5hXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgSU5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiO1xyXG5cclxuY29uc3QgTmF2YmFyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJTmF2YmFyLklQcm9wcz4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbnBhcmVudH0gPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N2Zy9mZWViaGFyb2xvZ28uc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuc30+XHJcbiAgICAgICAgICAgIHtidXR0b25zLm1hcCgoYnRuLGluZHgpPT57XHJcbiAgICAgICAgICAgICAgIHJldHVybig8ZGl2IGtleT17aW5keH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRuRWxlfT5cclxuICAgICAgICAgICAgICAgIHtidG59XHJcbiAgICAgICAgICAgIDwvZGl2PikgXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj47XHJcbn07XHJcblxyXG5cclxuY29uc3QgYnV0dG9ucyA9IFtcclxuICAgICdIb21lJyxcclxuICAgICdBYm91dCBVcycsXHJcbiAgICAnRmVhdHVyZXMnLFxyXG4gICAgJ0NsaWVudHMnLFxyXG4gICAgJ0NvbnRhY3QgVXMnXHJcbl1cclxuXHJcbmV4cG9ydCB7IE5hdmJhciB9O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWlucGFyZW50XCI6IFwiVGVzdGltb25pYWxzX21haW5wYXJlbnRfXzIzUmRiXCIsXG5cdFwicGFyYVwiOiBcIlRlc3RpbW9uaWFsc19wYXJhX18zVnpaR1wiLFxuXHRcInR4dG1haW5cIjogXCJUZXN0aW1vbmlhbHNfdHh0bWFpbl9fMTYzVVRcIixcblx0XCJocnJcIjogXCJUZXN0aW1vbmlhbHNfaHJyX18zN0V0bVwiLFxuXHRcImNvdW50TWFpblwiOiBcIlRlc3RpbW9uaWFsc19jb3VudE1haW5fXzE4Q1lKXCIsXG5cdFwiY291bnRWYWxcIjogXCJUZXN0aW1vbmlhbHNfY291bnRWYWxfX21qX1dGXCIsXG5cdFwiY291bnREZXNjXCI6IFwiVGVzdGltb25pYWxzX2NvdW50RGVzY19fMUNmeXFcIixcblx0XCJteUdhbGxlcnlcIjogXCJUZXN0aW1vbmlhbHNfbXlHYWxsZXJ5X18xbXdlX1wiLFxuXHRcIml0ZW1cIjogXCJUZXN0aW1vbmlhbHNfaXRlbV9fNjRndlVcIixcblx0XCJjYXB0aW9uXCI6IFwiVGVzdGltb25pYWxzX2NhcHRpb25fXzJxSFBkXCJcbn07XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rlc3RpbW9uaWFscy5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUZXN0aW1vbmlhbHM6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlucGFyZW50fT5cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHh0bWFpbn0gID5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ocnJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMzBweCcsZm9udFdlaWdodDonYm9sZCd9fT5cclxuICAgICAgICAgICAgICAgICAgIFRydXN0ZWQgYnkgU2Nob29scyA8YnIvPiAmIEluc3RpdHV0ZXNcclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhfT5cclxuICAgICAgICAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQuXHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY291bnRNYWlufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudFZhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwSytcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50RGVzY30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIgZnJvbSBtdWx0aXBsZSBzY2hvb2xzIGFjcm9zcyBJbmRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50VmFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNEsrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudERlc2N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKb2luaW5nIGV2ZXJ5IG1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15R2FsbGVyeVwiIHN0eWxlPXt7bWF4V2lkdGg6IFwiNDIwcHhcIixtYXJnaW46XCIzMHB4IDIwcHggMjBweCAyMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgIHtbMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTNdLnNsaWNlKDAsIDEyKS5tYXAoaW5keD0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMjBweFwiIGhlaWdodD1cIjYwcHhcIiBzdHlsZT17e21hcmdpbjpcIjEwcHhcIn19IHNyYz17XCJodHRwczovL3BpY3N1bS5waG90b3MvMTkwLzE5MD9cIitpbmR4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKTtcclxufTtcclxuXHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1haW5wYXJlbnRcIjogXCJXZWxjb21lU2VjdGlvbl9tYWlucGFyZW50X18zRlhMTFwiLFxuXHRcInBhcmFcIjogXCJXZWxjb21lU2VjdGlvbl9wYXJhX18ydEpkS1wiLFxuXHRcInR4dG1haW5cIjogXCJXZWxjb21lU2VjdGlvbl90eHRtYWluX18yalVnSlwiLFxuXHRcImhyclwiOiBcIldlbGNvbWVTZWN0aW9uX2hycl9fM0NPTndcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2xhbnREaXYgfSBmcm9tIFwiLi9zbGFudERpdlwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV2VsY29tZVNlY3Rpb24ubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBXZWxjb21lU2VjdGlvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuPD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbnBhcmVudH0+XHJcbiAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvc3ZnL3dlbGNvbWVsaW5lYXJ0LnN2Z1wiIHdpZHRoPVwiYXV0b1wiIGhlaWdodD1cIjI1MHB4XCIgLz5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50eHRtYWlufSAgPlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ocnJ9PjwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzMwcHgnfX0+XHJcbiAgICAgICAgICAgV2VsY29tZSB0byA8YnIvPiBGZWViaGFyb1xyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFyYX0+XHJcbiAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtLlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxTbGFudERpdi8+XHJcbiAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTbGFudERpdjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnIHN0eWxlPXtTdHlsZXMubWFpbn0gdmlld0JveD1cIjAgMCAxIDFcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiPlxyXG4gICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMCwwICAxLDAgIDAsMVwiIGZpbGw9XCIjMDIwNDJCXCIgaWQ9XCJ0b3BcIi8+XHJcbiAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLDAgIDEsMSAgMCwxXCIgZmlsbD1cIiNFRUVGRjJcIiBpZD1cImJvdHRvbVwiLz5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMSwxICAxLDAgIDAsMFwiIGZpbGw9XCIjMDIwNDJCXCIgaWQ9XCJib3R0b21cIi8+XHJcbiAgICAgICAgXHJcbiAgICA8L3N2Zz5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgU3R5bGVzID0ge1xyXG4gICAgbWFpbjp7XHJcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiQENvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmV4cG9ydCB7IE5hdmJhciB9IGZyb20gXCJAQ29tcG9uZW50cy9OYXZiYXJcIjtcclxuZXhwb3J0IHsgRm9vdGVyIH0gZnJvbSBcIkBDb21wb25lbnRzL0Zvb3RlclwiO1xyXG5leHBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIkBDb21wb25lbnRzL0hlYWRpbmdcIjtcclxuZXhwb3J0IHsgTG9jYWxlQnV0dG9uIH0gZnJvbSBcIkBDb21wb25lbnRzL0xvY2FsZUJ1dHRvblwiO1xyXG5leHBvcnQgeyBJbnN0aXR1dGVTZWxlY3Rpb24gfSBmcm9tIFwiQENvbXBvbmVudHMvSW5zdGl0dXRlU2VsZWN0aW9uXCI7XHJcbmV4cG9ydCB7IEZlYXR1cmVUaWxlcyB9IGZyb20gXCJAQ29tcG9uZW50cy9GZWF0dXJlVGlsZXNcIjtcclxuZXhwb3J0IHsgV2VsY29tZVNlY3Rpb24gfSBmcm9tIFwiQENvbXBvbmVudHMvV2VsY29tZVNlY3Rpb25cIjtcclxuZXhwb3J0IHsgVGVzdGltb25pYWxzIH0gZnJvbSBcIkBDb21wb25lbnRzL1Rlc3RpbW9uaWFsc1wiO1xyXG5leHBvcnQgeyBDbGllbnRzU2F5IH0gZnJvbSBcIkBDb21wb25lbnRzL0NsaWVudHNTYXlcIjtcclxuZXhwb3J0IHsgQ29udGFjdFNlY3Rpb24gfSBmcm9tIFwiQENvbXBvbmVudHMvQ29udGFjdFNlY3Rpb25cIjsiLCJleHBvcnQgY29uc3QgQWN0aW9uQ29uc3RzID0ge1xyXG4gICAgSG9tZToge1xyXG4gICAgICAgIFJlc2V0UmVkdWNlcjogXCJIb21lX1Jlc2V0UmVkdWNlclwiLFxyXG4gICAgICAgIFNldFJlZHVjZXI6IFwiSG9tZV9TZXRSZWR1Y2VyXCIsXHJcbiAgICB9LFxyXG59O1xyXG4iLCJleHBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiLi9BY3Rpb25Db25zdHNcIjtcclxuIiwiZXhwb3J0IHsgQWN0aW9uQ29uc3RzIH0gZnJvbSBcIi4vQWN0aW9uQ29uc3RzXCI7XHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBIdHRwTW9kZWwgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuY29uc3QgQmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaWA7XHJcbmV4cG9ydCBjb25zdCBIdHRwID0ge1xyXG4gICAgUmVxdWVzdDogYXN5bmMgPEE+KFxyXG4gICAgICAgIG1ldGhvZFR5cGU6IHN0cmluZyxcclxuICAgICAgICB1cmw6IHN0cmluZyxcclxuICAgICAgICBwYXJhbXM/OiBIdHRwTW9kZWwuSVJlcXVlc3RRdWVyeVBheWxvYWQsXHJcbiAgICAgICAgcGF5bG9hZD86IEh0dHBNb2RlbC5JUmVxdWVzdFBheWxvYWRcclxuICAgICk6IFByb21pc2U8QT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGFyYW1zXHJcbiAgICAgICAgICAgICAgICA/IGA/JHtzdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXBpX2tleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcclxuICAgICAgICAgICAgICAgICAgfSl9YFxyXG4gICAgICAgICAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2goYCR7QmFzZVVybH0ke3VybH0ke3F1ZXJ5fWAsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGAke21ldGhvZFR5cGV9YCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAU2VydmljZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IFBsYW5ldGFyeU1vZGVsIH0gZnJvbSBcIkBJbnRlcmZhY2VzXCI7XHJcbi8vICNlbmRyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFuZXRhcnlTZXJ2aWNlID0ge1xyXG4gICAgR2V0UGxhbmV0SW1hZ2U6IGFzeW5jIChcclxuICAgICAgICBwYXlsb2FkOiBQbGFuZXRhcnlNb2RlbC5HZXRBcG9kUGF5bG9hZFxyXG4gICAgKTogUHJvbWlzZTxQbGFuZXRhcnlNb2RlbC5HZXRBcG9kUmVzcG9uc2U+ID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U6IFBsYW5ldGFyeU1vZGVsLkdldEFwb2RSZXNwb25zZTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLlJlcXVlc3Q8UGxhbmV0YXJ5TW9kZWwuR2V0QXBvZFJlc3BvbnNlPihcclxuICAgICAgICAgICAgICAgIFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBcIi9wbGFuZXRhcnkvYXBvZFwiLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wYXJhbXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodDogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBleHBsYW5hdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIGhkdXJsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZV92ZXJzaW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuZXhwb3J0IHsgSHR0cCB9IGZyb20gXCJAU2VydmljZXMvQVBJL0h0dHBcIjtcclxuZXhwb3J0IHsgUGxhbmV0YXJ5U2VydmljZSB9IGZyb20gXCJAU2VydmljZXMvQVBJL1BsYW5ldGFyeVwiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==