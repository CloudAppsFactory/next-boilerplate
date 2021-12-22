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
  }, __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["Navbar"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["InstituteSelection"], null), __jsx(_Components__WEBPACK_IMPORTED_MODULE_4__["FeatureTiles"], null));
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

// export const FeatureCard: React.FunctionComponent =(text)=>
// {
//     return (
//         <div>
//            {text}
//         </div>
//     )
// }
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];



const FeatureTiles = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("div", {
    style: {
      background: "#EEEFF2"
    }
  }, __jsx("div", {
    style: Styles.text
  }, "Enabling fees payment for schools online"), __jsx("div", {
    style: Styles.hrr
  }), __jsx("div", {
    style: Styles.cardsDiv
  }, CardsDetails.map(card => __jsx(_FeatureCard__WEBPACK_IMPORTED_MODULE_1__["FeatureCard"], {
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
const Styles = {
  text: {
    color: "#02042B",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: "40px",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-1px"
  },
  hrr: {
    borderBottom: "solid 3px #2782F4",
    width: "5%",
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: "15px",
    marginBottom: "35px"
  },
  cardsDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    width: '80%',
    alignItems: 'stretch',
    paddingTop: '15px',
    paddingBottom: '45px'
  }
};

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
  }, __jsx("div", null, "Fees bharna online hua", __jsx("br", null), "ab aasan !"), __jsx("br", null), __jsx("div", {
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
  }))));
};
const Styles = {
  main: {
    height: "250px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
    flexDirection: 'column'
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
    style: Styles.mainparent
  }, __jsx("div", null, __jsx("img", {
    src: "/images/svg/feebharologo.svg",
    width: "100%",
    height: "50px"
  })), __jsx("div", {
    style: Styles.btns
  }, buttons.map(btn => {
    return __jsx("div", {
      style: Styles.btnEle
    }, btn);
  })));
};

const Styles = {
  mainparent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexWrap: 'wrap',
    background: "#02042B",
    color: "#fff",
    width: '90%',
    alignItems: 'baseline',
    paddingTop: '15px',
    paddingBottom: '15px'
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  btnEle: {
    marginRight: '20px'
  }
};
const buttons = ['Home', 'About Us', 'Features', 'Clients', 'Contact Us'];


/***/ }),

/***/ "./src/Components/index.ts":
/*!*********************************!*\
  !*** ./src/Components/index.ts ***!
  \*********************************/
/*! exports provided: Layout, Navbar, Footer, Heading, LocaleButton, InstituteSelection, FeatureTiles */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2kxOG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvSG9tZUFjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQmFzaWMvQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9CYXNpYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9GZWF0dXJlVGlsZXMvRmVhdHVyZUNhcmQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0ZlYXR1cmVUaWxlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRmVhdHVyZVRpbGVzL3NsYW50RGl2LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hlYWRpbmcvSGVhZGluZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IZWFkaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnN0aXR1dGVTZWxlY3Rpb24vSW5zdGl0dXRlRHJvcERvd24udHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9MaW5lQXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9JbnN0aXR1dGVTZWxlY3Rpb24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0luc3RpdHV0ZVNlbGVjdGlvbi9zbGFudERpdi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Mb2NhbGVCdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmJhci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmluaXRpb25zL0FjdGlvbkNvbnN0cy9BY3Rpb25Db25zdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmluaXRpb25zL0FjdGlvbkNvbnN0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVmaW5pdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NlcnZpY2VzL0FQSS9IdHRwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TZXJ2aWNlcy9BUEkvUGxhbmV0YXJ5L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9TZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJIb21lIiwidCIsImkxOG4iLCJob21lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyZW5kZXJMb2NhbGVCdXR0b25zIiwiYWN0aXZlTGFuZ3VhZ2UiLCJtYXAiLCJsYW5nIiwiY2hhbmdlTGFuZ3VhZ2UiLCJTdHlsZXMiLCJtYWluIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic3RvcmUiLCJIb21lQWN0aW9ucyIsIkdldEFwb2QiLCJwYXJhbXMiLCJoZCIsIm5hbWVzcGFjZXNSZXF1aXJlZCIsIkV4dGVuZGVkIiwid2l0aFRyYW5zbGF0aW9uIiwiYmFja2dyb3VuZCIsIk5leHRJMThOZXh0SW5zdGFuY2UiLCJOZXh0STE4TmV4dCIsImRlZmF1bHRMYW5ndWFnZSIsIm90aGVyTGFuZ3VhZ2VzIiwiYXBwV2l0aFRyYW5zbGF0aW9uIiwiTWFwIiwicGF5bG9hZCIsInR5cGUiLCJBY3Rpb25Db25zdHMiLCJTZXRSZWR1Y2VyIiwiUmVzZXQiLCJSZXNldFJlZHVjZXIiLCJyZXN1bHQiLCJQbGFuZXRhcnlTZXJ2aWNlIiwiR2V0UGxhbmV0SW1hZ2UiLCJpbWFnZSIsIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsImRpc2FibGVkIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiQnV0dG9uIiwicHJvcHMiLCJGZWF0dXJlQ2FyZCIsInRleHQiLCJpY29uIiwiaXNGdWxsSW1nIiwib3V0cmNyZCIsImltZ0JyZHIiLCJ0eHRzdHlsIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luIiwidGV4dEFsaWduIiwiRmVhdHVyZVRpbGVzIiwiaHJyIiwiY2FyZHNEaXYiLCJDYXJkc0RldGFpbHMiLCJjYXJkIiwiaWNvIiwiY29sb3IiLCJwYWRkaW5nVG9wIiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJib3JkZXJCb3R0b20iLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJhbGlnbkl0ZW1zIiwicGFkZGluZ0JvdHRvbSIsIlNsYW50RGl2IiwiRm9vdGVyIiwiSGVhZGluZyIsInN0eWxlcyIsInRpdGxlIiwidGl0bGVfX2JhY2siLCJ0aXRsZV9fZnJvbnQiLCJJbnN0aXR1dGVEcm9wRG93biIsImFsaWduU2VsZiIsIkxpbmVBcnQiLCJJbnN0aXR1dGVTZWxlY3Rpb24iLCJtYWluZGl2IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJpc0FjdGl2ZSIsIkxvY2FsZUJ1dHRvbiIsIm9uQ2xpY2siLCJOYXZiYXIiLCJtYWlucGFyZW50IiwiYnRucyIsImJ1dHRvbnMiLCJidG4iLCJidG5FbGUiLCJCYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJIdHRwIiwiUmVxdWVzdCIsIm1ldGhvZFR5cGUiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInF1ZXJ5Iiwic3RyaW5naWZ5IiwiYXBpX2tleSIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwiY2FjaGUiLCJoZWFkZXJzIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZSIsImVycm9yIiwiY29weXJpZ2h0IiwiZGF0ZSIsImV4cGxhbmF0aW9uIiwiaGR1cmwiLCJzZXJ2aWNlX3ZlcnNpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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RSxFQUhOO0FBSVBDLGFBQUssRUFBRSxFQUpBO0FBS1BDLHVCQUFlLEVBQUUsRUFMVjtBQU1QbkQsYUFBSyxFQUFFLEVBTkE7QUFPUDBCLFdBQUcsRUFBRTtBQVBFLE9BQVg7QUFTSDs7QUFFRCxXQUFPZSxRQUFQO0FBQ0g7QUF6QjJCLENBQXpCLEM7Ozs7Ozs7Ozs7OztBQ1JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUVBLDJCOzs7Ozs7Ozs7OztBQ0hBLCtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2hvbWUvaW5kZXgudHN4XCIpO1xuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCJAU2VydmVyL2kxOG5cIjtcclxuaW1wb3J0IHtcclxuICAgIENvbnRhaW5lcixcclxuICAgIFRvcCxcclxuICAgIFRvcFRleHQsXHJcbiAgICBNaWRkbGUsXHJcbiAgICBNaWRkbGVMZWZ0LFxyXG4gICAgTWlkZGxlTGVmdEJ1dHRvbnMsXHJcbiAgICBNaWRkbGVSaWdodCxcclxuICAgIEFwb2QsXHJcbiAgICBBcG9kQnV0dG9uLFxyXG59IGZyb20gXCJAU3R5bGVkL0hvbWVcIjtcclxuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSBcIkBSZWR1eC9JU3RvcmVcIjtcclxuaW1wb3J0IHsgSG9tZUFjdGlvbnMgfSBmcm9tIFwiQEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgTmF2YmFyLEhlYWRpbmcsIExvY2FsZUJ1dHRvbixJbnN0aXR1dGVTZWxlY3Rpb24sRmVhdHVyZVRpbGVzfSBmcm9tIFwiQENvbXBvbmVudHNcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IElIb21lUGFnZSwgUmVkdXhOZXh0UGFnZUNvbnRleHQgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2U8SUhvbWVQYWdlLklQcm9wcywgSUhvbWVQYWdlLkluaXRpYWxQcm9wcz4gPSAoe1xyXG4gICAgdCxcclxuICAgIGkxOG4sXHJcbn0pID0+IHtcclxuICAgIGNvbnN0IGhvbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElTdG9yZSkgPT4gc3RhdGUuaG9tZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyTG9jYWxlQnV0dG9ucyA9IChhY3RpdmVMYW5ndWFnZTogc3RyaW5nKSA9PlxyXG4gICAgICAgIFtcImVuXCIsIFwiZXNcIiwgXCJ0clwiXS5tYXAobGFuZyA9PiAoXHJcbiAgICAgICAgICAgIDxMb2NhbGVCdXR0b25cclxuICAgICAgICAgICAgICAgIGtleT17bGFuZ31cclxuICAgICAgICAgICAgICAgIGxhbmc9e2xhbmd9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17YWN0aXZlTGFuZ3VhZ2UgPT09IGxhbmd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpMThuLmNoYW5nZUxhbmd1YWdlKGxhbmcpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICkpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxOYXZiYXIvPlxyXG4gICAgICAgIDxJbnN0aXR1dGVTZWxlY3Rpb24vPlxyXG4gICAgICAgIDxGZWF0dXJlVGlsZXMvPlxyXG4gICAgICAgIHsvKiA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8VG9wPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3BhbmtvZC1sb2dvLnBuZ1wiIGFsdD1cIlBhbmtvZCBMb2dvXCIgLz5cclxuICAgICAgICAgICAgPC9Ub3A+XHJcbiAgICAgICAgICAgIDxNaWRkbGU+XHJcbiAgICAgICAgICAgICAgICA8TWlkZGxlTGVmdD5cclxuICAgICAgICAgICAgICAgICAgICA8TWlkZGxlTGVmdEJ1dHRvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJMb2NhbGVCdXR0b25zKGkxOG4ubGFuZ3VhZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWlkZGxlTGVmdEJ1dHRvbnM+XHJcbiAgICAgICAgICAgICAgICA8L01pZGRsZUxlZnQ+XHJcbiAgICAgICAgICAgICAgICA8TWlkZGxlUmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvcFRleHQ+e3QoXCJjb21tb246SGVsbG9cIil9PC9Ub3BUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHRleHQ9e3QoXCJjb21tb246V29ybGRcIil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFwb2Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcG9kQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVBY3Rpb25zLkdldEFwb2Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGhkOiBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEaXNjb3ZlciBTcGFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Fwb2RCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aG9tZS5pbWFnZS51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRGlzY292ZXIgU3BhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQXBvZD5cclxuICAgICAgICAgICAgICAgIDwvTWlkZGxlUmlnaHQ+XHJcbiAgICAgICAgICAgIDwvTWlkZGxlPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChcclxuICAgIGN0eDogUmVkdXhOZXh0UGFnZUNvbnRleHRcclxuKTogUHJvbWlzZTxJSG9tZVBhZ2UuSW5pdGlhbFByb3BzPiA9PiB7XHJcbiAgICBhd2FpdCBjdHguc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgSG9tZUFjdGlvbnMuR2V0QXBvZCh7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBoZDogdHJ1ZSB9LFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHsgbmFtZXNwYWNlc1JlcXVpcmVkOiBbXCJjb21tb25cIl0gfTtcclxufTtcclxuXHJcbmNvbnN0IEV4dGVuZGVkID0gd2l0aFRyYW5zbGF0aW9uKFwiY29tbW9uXCIpKEhvbWUpO1xyXG5cclxuY29uc3QgU3R5bGVzID0ge1xyXG4gICAgbWFpbjp7XHJcbiAgICAgICAgYmFja2dyb3VuZDpcIiMwMjA0MkJcIlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeHRlbmRlZDtcclxuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgTmV4dEkxOE5leHQgZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG5jb25zdCBOZXh0STE4TmV4dEluc3RhbmNlID0gbmV3IE5leHRJMThOZXh0KHtcclxuICAgIGRlZmF1bHRMYW5ndWFnZTogXCJlblwiLFxyXG4gICAgb3RoZXJMYW5ndWFnZXM6IFtcImVzXCIsIFwidHJcIl0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYXBwV2l0aFRyYW5zbGF0aW9uLCB3aXRoVHJhbnNsYXRpb24gfSA9IE5leHRJMThOZXh0SW5zdGFuY2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0STE4TmV4dEluc3RhbmNlO1xyXG4iLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSBcInJlZHV4XCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiQERlZmluaXRpb25zXCI7XHJcbmltcG9ydCB7IFBsYW5ldGFyeVNlcnZpY2UgfSBmcm9tIFwiQFNlcnZpY2VzXCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBJSG9tZVBhZ2UgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuZXhwb3J0IGNvbnN0IEhvbWVBY3Rpb25zID0ge1xyXG4gICAgTWFwOiAocGF5bG9hZDoge30pID0+ICh7XHJcbiAgICAgICAgcGF5bG9hZCxcclxuICAgICAgICB0eXBlOiBBY3Rpb25Db25zdHMuSG9tZS5TZXRSZWR1Y2VyLFxyXG4gICAgfSksXHJcblxyXG4gICAgUmVzZXQ6ICgpID0+ICh7XHJcbiAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuUmVzZXRSZWR1Y2VyLFxyXG4gICAgfSksXHJcblxyXG4gICAgR2V0QXBvZDogKHBheWxvYWQ6IElIb21lUGFnZS5BY3Rpb25zLklHZXRBcG9kUGF5bG9hZCkgPT4gYXN5bmMgKFxyXG4gICAgICAgIGRpc3BhdGNoOiBEaXNwYXRjaFxyXG4gICAgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUGxhbmV0YXJ5U2VydmljZS5HZXRQbGFuZXRJbWFnZSh7XHJcbiAgICAgICAgICAgIHBhcmFtczogcGF5bG9hZC5wYXJhbXMsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlc3VsdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uQ29uc3RzLkhvbWUuU2V0UmVkdWNlcixcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0hvbWVBY3Rpb25zXCI7XHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG4vLyAjZW5kcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSUJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXY8SUJ1dHRvbi5JUHJvcHM+YFxyXG4gICAgY3Vyc29yOiAkeyh7IGRpc2FibGVkIH0pID0+IChkaXNhYmxlZCA/IFwibm90LWFsbG93ZWRcIiA6IFwicG9pbnRlclwiKX07XHJcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJQnV0dG9uLklQcm9wcz4gPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gPENvbnRhaW5lciB7Li4ucHJvcHN9IC8+O1xyXG59O1xyXG4iLCJleHBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB0ZXh0Pzogc3RyaW5nO1xyXG4gICAgaWNvbj86IHN0cmluZztcclxuICAgIGlzRnVsbEltZzpib29sZWFuXHJcbiAgfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IEZlYXR1cmVDYXJkOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9KHRleHQpPT5cclxuLy8ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgIHt0ZXh0fVxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKVxyXG4vLyB9XHJcblxyXG5leHBvcnQgY29uc3QgRmVhdHVyZUNhcmQ6IE5leHRQYWdlPFByb3BzPiA9ICh7IHRleHQgLCBpY29uICxpc0Z1bGxJbWcgfSkgPT4gKFxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMub3V0cmNyZH0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIHtpc0Z1bGxJbWcgPyA8aW1nIHNyYz17YC9pbWFnZXMvc3ZnLyR7aWNvbn1gfSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI1MHB4XCIgLz4gOiA8aW1nIHN0eWxlPXtTdHlsZXMuaW1nQnJkcn0gc3JjPXtgL2ltYWdlcy9zdmcvJHtpY29ufWB9IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwcHhcIiAvPn0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMudHh0c3R5bH0+XHJcbiAgICAgICAgICAgIHt0ZXh0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gIClcclxuICBcclxuXHJcbiAgY29uc3QgU3R5bGVzID0ge1xyXG4gICAgICBpbWdCcmRyIDoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzI3ODNGM1wiLFxyXG4gICAgICAgIHdpZHRoOiBcIjUwcHhcIixcclxuICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMTJweFwiLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCJcclxuICAgIH0sXHJcbiAgICB0eHRzdHlsOntcclxuICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIixcclxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIxNXB4IDEycHggMHB4IDEycHhcIlxyXG4gICAgfSxcclxuICAgIG91dHJjcmQ6e1xyXG4gICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBiYWNrZ3JvdW5kOlwiI2ZmZlwiLFxyXG4gICAgYm9yZGVyUmFkaXVzOlwiMjBweFwiLFxyXG4gICAgbWFyZ2luOlwiMjBweCAyMHB4IDIwcHhcIlxyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmVhdHVyZUNhcmQgfSBmcm9tIFwiLi9GZWF0dXJlQ2FyZFwiO1xyXG5pbXBvcnQgeyBTbGFudERpdiB9IGZyb20gXCIuL3NsYW50RGl2XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRmVhdHVyZVRpbGVzOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kOlwiI0VFRUZGMlwifX0gPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBFbmFibGluZyBmZWVzIHBheW1lbnQgZm9yIHNjaG9vbHMgb25saW5lXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuaHJyfT48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5jYXJkc0Rpdn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtDYXJkc0RldGFpbHMubWFwKGNhcmQ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlQ2FyZCB0ZXh0PXtjYXJkLnRleHR9IGljb249e2NhcmQuaWNvfSBpc0Z1bGxJbWc9e2NhcmQuaXNGdWxsSW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTbGFudERpdi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgQ2FyZHNEZXRhaWxzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRleHQ6XCIxMDAlIEZyZWVcIixcclxuICAgICAgICBpY286XCJmcmVlaWNvLnN2Z1wiLFxyXG4gICAgICAgIGlzRnVsbEltZzpmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0ZXh0OlwiRmFzdGVyIFBheW1lbnRzXCIsXHJcbiAgICAgICAgaWNvOlwiZmFzdGljby5zdmdcIixcclxuICAgICAgICBpc0Z1bGxJbWc6ZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGV4dDpcIkJldHRlciBBY2NvdW50aW5nICYgVmlzaWJpbGl0eVwiLFxyXG4gICAgICAgIGljbzpcImFjY2ljby5zdmdcIixcclxuICAgICAgICBpc0Z1bGxJbWc6dHJ1ZVxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBTdHlsZXMgPSB7XHJcbiAgICB0ZXh0OntcclxuICAgICAgICBjb2xvcjpcIiMwMjA0MkJcIixcclxuICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXHJcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiNDBweFwiLFxyXG4gICAgICAgIG1heFdpZHRoOlwiNDAwcHhcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCIsXHJcbiAgICAgICAgbWFyZ2luVG9wOiBcIi0xcHhcIlxyXG4gICAgfSxcclxuICAgIGhycjp7XHJcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcInNvbGlkIDNweCAjMjc4MkY0XCIsXHJcbiAgICAgICAgd2lkdGg6IFwiNSVcIixcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjE1cHhcIixcclxuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzVweFwiXHJcbiAgICB9LFxyXG4gICAgY2FyZHNEaXY6e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDonY2VudGVyJyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIHdpZHRoOic4MCUnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6J3N0cmV0Y2gnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICcxNXB4JyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnNDVweCdcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2xhbnREaXY6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBzdHlsZT17U3R5bGVzLm1haW59IHZpZXdCb3g9XCIwIDAgMSAxXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMCwwICAxLDAgIDEsMVwiIGZpbGw9XCIjMDIwNDJCXCIgIGlkPVwidG9wXCIvPlxyXG4gICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxLDEgIDEsMCAgMCwwXCIgZmlsbD1cIiNFRUVGRjJcIiBpZD1cImJvdHRvbVwiLz5cclxuICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBTdHlsZXMgPSB7XHJcbiAgICBtYWluOntcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCJcclxuICAgIH1cclxufSIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vICNlbmRyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5pbXBvcnQgeyBJRm9vdGVyIH0gZnJvbSBcIi4vRm9vdGVyXCI7XHJcbi8vICNlbmRyZWdpb24gTG9jYWwgSW1wb3J0c1xyXG5cclxuY29uc3QgRm9vdGVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxJRm9vdGVyLklQcm9wcz4gPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+Rm9vdGVyPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRm9vdGVyIH07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwiSGVhZGluZ190aXRsZV9fMnRTV1FcIixcblx0XCJ0aXRsZV9fYmFja1wiOiBcIkhlYWRpbmdfdGl0bGVfX2JhY2tfXzJVOHBfXCIsXG5cdFwidGl0bGVfX2Zyb250XCI6IFwiSGVhZGluZ190aXRsZV9fZnJvbnRfXzFzTXpEXCIsXG5cdFwidGl0bGUtLWNvbnRhY3RcIjogXCJIZWFkaW5nX3RpdGxlLS1jb250YWN0X18xX05kbVwiXG59O1xuIiwiLy8gI3JlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSGVhZGluZy5tb2R1bGUuc2Nzc1wiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuXHJcbi8vICNyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuaW1wb3J0IHsgSUhlYWRpbmcgfSBmcm9tIFwiLi9IZWFkaW5nXCI7XHJcbi8vICNlbmRyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuXHJcbmNvbnN0IEhlYWRpbmc6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElIZWFkaW5nLklQcm9wcz4gPSAoXHJcbiAgICBwcm9wc1xyXG4pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCB7IHRleHQgfSA9IHByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX19iYWNrfT57dGV4dH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlX19mcm9udH0+e3RleHR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCB7IEhlYWRpbmcgfTtcclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW5zdGl0dXRlRHJvcERvd246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBGZWVzIGJoYXJuYSBvbmxpbmUgaHVhIFxyXG4gICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICBhYiBhYXNhbiAhXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOicyMHB4JyxhbGlnblNlbGY6ICdmbGV4LXN0YXJ0J319PlxyXG4gICAgICAgICAgICAgICAgU2VsZWN0IFNjaG9vbCpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTonMjBweCcsYWxpZ25TZWxmOiAnZmxleC1zdGFydCd9fT5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICA8aW5wdXQgaWQ9XCJteUlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwibXlDb3VudHJ5XCIgcGxhY2Vob2xkZXI9XCJTZWxlY3RcIiAvPlxyXG4gIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZXMgPSB7XHJcbiAgICBtYWluOntcclxuICAgIGhlaWdodDogXCIyNTBweFwiLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgZmxleERpcmVjdGlvbjonY29sdW1uJ1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTGluZUFydDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7anVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsZGlzcGxheTogJ2ZsZXgnfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zdmcvbGluZWFydDEuc3ZnXCIgd2lkdGg9XCJhdXRvXCIgaGVpZ2h0PVwiMjUwcHhcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTsiLCIvLyAjcmVnaW9uIEdsb2JhbCBJbXBvcnRzXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaW5lQXJ0IH0gZnJvbSBcIi4vTGluZUFydFwiO1xyXG5pbXBvcnQgeyBJbnN0aXR1dGVEcm9wRG93biB9IGZyb20gXCIuL0luc3RpdHV0ZURyb3BEb3duXCI7XHJcbmltcG9ydCB7IFNsYW50RGl2IH0gZnJvbSBcIi4vc2xhbnREaXZcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnN0aXR1dGVTZWxlY3Rpb246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLm1haW5kaXZ9PlxyXG4gICAgICAgICAgICAgICAgPEluc3RpdHV0ZURyb3BEb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8TGluZUFydCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFNsYW50RGl2IC8+XHJcbiAgICAgICAgPC8+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW5kaXY6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjMwcHhcIixcclxuICAgICAgICB3aWR0aDogJzkwJScsXHJcbiAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgU2xhbnREaXY6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2ZyBzdHlsZT17U3R5bGVzLm1haW59IHZpZXdCb3g9XCIwIDAgMSAxXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIj5cclxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMCwwICAxLDAgIDAsMVwiIGZpbGw9XCIjMDIwNDJCXCIgaWQ9XCJ0b3BcIi8+XHJcbiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz1cIjEsMCAgMSwxICAwLDFcIiBmaWxsPVwiI0VFRUZGMlwiIGlkPVwiYm90dG9tXCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFN0eWxlcyA9IHtcclxuICAgIG1haW46e1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIlxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCIuL0xheW91dFwiO1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxMYXlvdXRQcm9wcz4gPSAoe1xyXG4gICAgY2hpbGRyZW4sXHJcbn0pOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj57Y2hpbGRyZW59PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgTGF5b3V0IH07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IElMb2NhbGVCdXR0b24gfSBmcm9tIFwiLi9Mb2NhbGVCdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9CYXNpY1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJ1dHRvbik8eyBpc0FjdGl2ZTogYm9vbGVhbiB9PmBcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IFwiIzJjM2U1MFwiIDogXCJpbmhlcml0XCIpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2NhbGVCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PElMb2NhbGVCdXR0b24uSVByb3BzPiA9ICh7XHJcbiAgICBsYW5nLFxyXG4gICAgaXNBY3RpdmUsXHJcbiAgICBvbkNsaWNrLFxyXG59KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgaXNBY3RpdmU9e2lzQWN0aXZlfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAge2xhbmd9XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IElOYXZiYXIgfSBmcm9tIFwiLi9OYXZiYXJcIjtcclxuXHJcbmNvbnN0IE5hdmJhcjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SU5hdmJhci5JUHJvcHM+ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtTdHlsZXMubWFpbnBhcmVudH0gPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N2Zy9mZWViaGFyb2xvZ28uc3ZnXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e1N0eWxlcy5idG5zfT5cclxuICAgICAgICAgICAge2J1dHRvbnMubWFwKGJ0bj0+e1xyXG4gICAgICAgICAgICAgICByZXR1cm4oPGRpdiBzdHlsZT17U3R5bGVzLmJ0bkVsZX0+XHJcbiAgICAgICAgICAgICAgICB7YnRufVxyXG4gICAgICAgICAgICA8L2Rpdj4pIFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+O1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVzID0ge1xyXG4gICAgbWFpbnBhcmVudDp7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OidzcGFjZS1iZXR3ZWVuJyxcclxuICAgICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcclxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6XCIjMDIwNDJCXCIsXHJcbiAgICAgICAgY29sb3I6XCIjZmZmXCIsXHJcbiAgICAgICAgd2lkdGg6JzkwJScsXHJcbiAgICAgICAgYWxpZ25JdGVtczonYmFzZWxpbmUnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICcxNXB4JyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMTVweCdcclxuICAgIH0sXHJcbiAgICBidG5zOntcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXHJcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJ1xyXG4gICAgfSxcclxuICAgIGJ0bkVsZTp7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcyMHB4JyxcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgYnV0dG9ucyA9IFtcclxuICAgICdIb21lJyxcclxuICAgICdBYm91dCBVcycsXHJcbiAgICAnRmVhdHVyZXMnLFxyXG4gICAgJ0NsaWVudHMnLFxyXG4gICAgJ0NvbnRhY3QgVXMnXHJcbl1cclxuXHJcbmV4cG9ydCB7IE5hdmJhciB9O1xyXG4iLCJleHBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiQENvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmV4cG9ydCB7IE5hdmJhciB9IGZyb20gXCJAQ29tcG9uZW50cy9OYXZiYXJcIjtcclxuZXhwb3J0IHsgRm9vdGVyIH0gZnJvbSBcIkBDb21wb25lbnRzL0Zvb3RlclwiO1xyXG5leHBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIkBDb21wb25lbnRzL0hlYWRpbmdcIjtcclxuZXhwb3J0IHsgTG9jYWxlQnV0dG9uIH0gZnJvbSBcIkBDb21wb25lbnRzL0xvY2FsZUJ1dHRvblwiO1xyXG5leHBvcnQgeyBJbnN0aXR1dGVTZWxlY3Rpb24gfSBmcm9tIFwiQENvbXBvbmVudHMvSW5zdGl0dXRlU2VsZWN0aW9uXCI7XHJcbmV4cG9ydCB7IEZlYXR1cmVUaWxlcyB9IGZyb20gXCJAQ29tcG9uZW50cy9GZWF0dXJlVGlsZXNcIjsiLCJleHBvcnQgY29uc3QgQWN0aW9uQ29uc3RzID0ge1xyXG4gICAgSG9tZToge1xyXG4gICAgICAgIFJlc2V0UmVkdWNlcjogXCJIb21lX1Jlc2V0UmVkdWNlclwiLFxyXG4gICAgICAgIFNldFJlZHVjZXI6IFwiSG9tZV9TZXRSZWR1Y2VyXCIsXHJcbiAgICB9LFxyXG59O1xyXG4iLCJleHBvcnQgeyBBY3Rpb25Db25zdHMgfSBmcm9tIFwiLi9BY3Rpb25Db25zdHNcIjtcclxuIiwiZXhwb3J0IHsgQWN0aW9uQ29uc3RzIH0gZnJvbSBcIi4vQWN0aW9uQ29uc3RzXCI7XHJcbiIsIi8vICNyZWdpb24gR2xvYmFsIEltcG9ydHNcclxuaW1wb3J0IFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuLy8gI2VuZHJlZ2lvbiBHbG9iYWwgSW1wb3J0c1xyXG5cclxuLy8gI3JlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5pbXBvcnQgeyBIdHRwTW9kZWwgfSBmcm9tIFwiQEludGVyZmFjZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBJbnRlcmZhY2UgSW1wb3J0c1xyXG5cclxuY29uc3QgQmFzZVVybCA9IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaWA7XHJcbmV4cG9ydCBjb25zdCBIdHRwID0ge1xyXG4gICAgUmVxdWVzdDogYXN5bmMgPEE+KFxyXG4gICAgICAgIG1ldGhvZFR5cGU6IHN0cmluZyxcclxuICAgICAgICB1cmw6IHN0cmluZyxcclxuICAgICAgICBwYXJhbXM/OiBIdHRwTW9kZWwuSVJlcXVlc3RRdWVyeVBheWxvYWQsXHJcbiAgICAgICAgcGF5bG9hZD86IEh0dHBNb2RlbC5JUmVxdWVzdFBheWxvYWRcclxuICAgICk6IFByb21pc2U8QT4gPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gcGFyYW1zXHJcbiAgICAgICAgICAgICAgICA/IGA/JHtzdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXBpX2tleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0tFWSxcclxuICAgICAgICAgICAgICAgICAgfSl9YFxyXG4gICAgICAgICAgICAgICAgOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgZmV0Y2goYCR7QmFzZVVybH0ke3VybH0ke3F1ZXJ5fWAsIHtcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxyXG4gICAgICAgICAgICAgICAgY2FjaGU6IFwibm8tY2FjaGVcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IGAke21ldGhvZFR5cGV9YCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKS50aGVuKHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAU2VydmljZXNcIjtcclxuLy8gI2VuZHJlZ2lvbiBMb2NhbCBJbXBvcnRzXHJcblxyXG4vLyAjcmVnaW9uIEludGVyZmFjZSBJbXBvcnRzXHJcbmltcG9ydCB7IFBsYW5ldGFyeU1vZGVsIH0gZnJvbSBcIkBJbnRlcmZhY2VzXCI7XHJcbi8vICNlbmRyZWdpb24gSW50ZXJmYWNlIEltcG9ydHNcclxuXHJcbmV4cG9ydCBjb25zdCBQbGFuZXRhcnlTZXJ2aWNlID0ge1xyXG4gICAgR2V0UGxhbmV0SW1hZ2U6IGFzeW5jIChcclxuICAgICAgICBwYXlsb2FkOiBQbGFuZXRhcnlNb2RlbC5HZXRBcG9kUGF5bG9hZFxyXG4gICAgKTogUHJvbWlzZTxQbGFuZXRhcnlNb2RlbC5HZXRBcG9kUmVzcG9uc2U+ID0+IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U6IFBsYW5ldGFyeU1vZGVsLkdldEFwb2RSZXNwb25zZTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBIdHRwLlJlcXVlc3Q8UGxhbmV0YXJ5TW9kZWwuR2V0QXBvZFJlc3BvbnNlPihcclxuICAgICAgICAgICAgICAgIFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICBcIi9wbGFuZXRhcnkvYXBvZFwiLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wYXJhbXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgIGNvcHlyaWdodDogXCJcIixcclxuICAgICAgICAgICAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBleHBsYW5hdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgIGhkdXJsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZV92ZXJzaW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG59O1xyXG4iLCIvLyAjcmVnaW9uIExvY2FsIEltcG9ydHNcclxuZXhwb3J0IHsgSHR0cCB9IGZyb20gXCJAU2VydmljZXMvQVBJL0h0dHBcIjtcclxuZXhwb3J0IHsgUGxhbmV0YXJ5U2VydmljZSB9IGZyb20gXCJAU2VydmljZXMvQVBJL1BsYW5ldGFyeVwiO1xyXG4vLyAjZW5kcmVnaW9uIExvY2FsIEltcG9ydHNcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==