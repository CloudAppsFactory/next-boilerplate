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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+gb1":
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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5XSU");


/***/ }),

/***/ "5XSU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./server/i18n.ts
var server_i18n = __webpack_require__("kluC");

// EXTERNAL MODULE: ./src/Definitions/index.ts + 2 modules
var Definitions = __webpack_require__("h1MZ");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__("Lc87");

// CONCATENATED MODULE: ./src/Services/API/Http/index.ts
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
      const query = params ? `?${Object(external_query_string_["stringify"])(_objectSpread(_objectSpread({}, params), {}, {
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
// CONCATENATED MODULE: ./src/Services/API/Planetary/index.ts
// #region Local Imports
 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const PlanetaryService = {
  GetPlanetImage: async (payload) => {
    let response;

    try {
      response = await Http.Request("GET", "/planetary/apod", payload.params);
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
// CONCATENATED MODULE: ./src/Services/index.ts
// #region Local Imports

 // #endregion Local Imports
// CONCATENATED MODULE: ./src/Actions/HomeActions/index.ts
// #region Global Imports
// #endregion Global Imports
// #region Local Imports

 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
const HomeActions = {
  Map: payload => ({
    payload,
    type: Definitions["a" /* ActionConsts */].Home.SetReducer
  }),
  Reset: () => ({
    type: Definitions["a" /* ActionConsts */].Home.ResetReducer
  }),
  GetApod: payload => async (dispatch) => {
    const result = await PlanetaryService.GetPlanetImage({
      params: payload.params
    });
    dispatch({
      payload: {
        image: result
      },
      type: Definitions["a" /* ActionConsts */].Home.SetReducer
    });
  }
};
// CONCATENATED MODULE: ./src/Actions/index.ts

// CONCATENATED MODULE: ./src/Components/Layout/index.tsx
var __jsx = external_react_["createElement"];


const Layout = ({
  children
}) => {
  return __jsx("div", {
    className: "layout"
  }, children);
};


// EXTERNAL MODULE: ./src/Components/Navbar/Navbar.module.css
var Navbar_module = __webpack_require__("TkXT");
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);

// CONCATENATED MODULE: ./src/Components/Navbar/index.tsx
var Navbar_jsx = external_react_["createElement"];



const Navbar = () => {
  return Navbar_jsx("div", {
    className: Navbar_module_default.a.mainparent
  }, Navbar_jsx("div", null, Navbar_jsx("img", {
    draggable: false,
    src: "/images/svg/feebharologo.svg",
    width: "100%",
    height: "50px"
  })), Navbar_jsx("div", {
    className: Navbar_module_default.a.btns
  }, buttons.map((btn, indx) => {
    return Navbar_jsx("div", {
      key: indx,
      className: Navbar_module_default.a.btnEle
    }, btn);
  })));
};

const buttons = ['Home', 'About Us', 'Features', 'Clients', 'Contact Us'];

// CONCATENATED MODULE: ./src/Components/Footer/index.tsx
var Footer_jsx = external_react_["createElement"];
// #region Global Imports
 // #endregion Global Imports
// #region Local Imports

// #endregion Local Imports
const Footer = () => {
  return Footer_jsx("div", {
    className: "footer"
  }, "Footer");
};


// EXTERNAL MODULE: ./src/Components/Heading/Heading.module.scss
var Heading_module = __webpack_require__("e0UW");
var Heading_module_default = /*#__PURE__*/__webpack_require__.n(Heading_module);

// CONCATENATED MODULE: ./src/Components/Heading/index.tsx
var Heading_jsx = external_react_["createElement"];
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
  return Heading_jsx("div", {
    className: Heading_module_default.a.title
  }, Heading_jsx("span", {
    className: Heading_module_default.a.title__back
  }, text), Heading_jsx("span", {
    className: Heading_module_default.a.title__front
  }, text));
};


// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/Components/Basic/Button/index.tsx
var Button_jsx = external_react_default.a.createElement;
// #region Global Imports

 // #endregion Global Imports
// #region Local Imports

// #endregion Local Imports
const Container = external_styled_components_default.a.div`
    cursor: ${({
  disabled
}) => disabled ? "not-allowed" : "pointer"};
    color: ${({
  theme
}) => theme.colors.primary};
`;
const Button = props => {
  return Button_jsx(Container, props);
};
// CONCATENATED MODULE: ./src/Components/Basic/index.ts

// CONCATENATED MODULE: ./src/Components/LocaleButton/index.tsx
var LocaleButton_jsx = external_react_default.a.createElement;



const LocaleButton_Container = external_styled_components_default()(Button)`
    color: ${({
  isActive
}) => isActive ? "#2c3e50" : "inherit"};
`;
const LocaleButton = ({
  lang,
  isActive,
  onClick
}) => {
  return LocaleButton_jsx(LocaleButton_Container, {
    isActive: isActive,
    onClick: onClick
  }, lang);
};
// CONCATENATED MODULE: ./src/Components/InstituteSelection/LineArt.tsx
var LineArt_jsx = external_react_["createElement"];

const LineArt = () => {
  return LineArt_jsx("div", {
    style: {
      justifyContent: 'flex-end',
      display: 'flex'
    }
  }, LineArt_jsx("img", {
    src: "/images/svg/lineart1.svg",
    width: "auto",
    height: "250px"
  }));
};
// CONCATENATED MODULE: ./src/Components/InstituteSelection/InstituteDropDown.tsx
var InstituteDropDown_jsx = external_react_["createElement"];

const InstituteDropDown = () => {
  return InstituteDropDown_jsx("div", {
    style: {
      height: "250px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '30px',
      flexDirection: 'column'
    }
  }, InstituteDropDown_jsx("div", {
    style: {
      fontWeight: "bold"
    }
  }, "Fees bharna online hua", InstituteDropDown_jsx("br", null), "ab aasan !"), InstituteDropDown_jsx("br", null), InstituteDropDown_jsx("div", {
    style: {
      fontSize: '20px',
      alignSelf: 'flex-start'
    }
  }, "Select School*"), InstituteDropDown_jsx("div", {
    style: {
      fontSize: '20px',
      alignSelf: 'flex-start'
    }
  }, InstituteDropDown_jsx("div", null, InstituteDropDown_jsx("input", {
    id: "myInput",
    type: "text",
    name: "myCountry",
    placeholder: "Select"
  })), InstituteDropDown_jsx("div", null, InstituteDropDown_jsx("button", {
    style: {
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
// CONCATENATED MODULE: ./src/Components/InstituteSelection/slantDiv.tsx
var slantDiv_jsx = external_react_["createElement"];

const SlantDiv = () => {
  return slantDiv_jsx("svg", {
    style: slantDiv_Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, slantDiv_jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#02042B",
    id: "top"
  }), slantDiv_jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#EEEFF2",
    id: "bottom"
  }));
};
const slantDiv_Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};
// CONCATENATED MODULE: ./src/Components/InstituteSelection/index.tsx
var InstituteSelection_jsx = external_react_["createElement"];
// #region Global Imports




const InstituteSelection = () => {
  return InstituteSelection_jsx(external_react_["Fragment"], null, InstituteSelection_jsx("div", {
    style: {
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
  }, InstituteSelection_jsx(InstituteDropDown, null), InstituteSelection_jsx(LineArt, null)), InstituteSelection_jsx(SlantDiv, null));
};
const InstituteSelection_Styles = {
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
// CONCATENATED MODULE: ./src/Components/FeatureTiles/FeatureCard.tsx
var FeatureCard_jsx = external_react_["createElement"];

const FeatureCard = ({
  text,
  icon,
  isFullImg
}) => FeatureCard_jsx("div", {
  style: {
    padding: "20px",
    textAlign: "center",
    background: "#fff",
    borderRadius: "20px",
    margin: "20px 20px 20px"
  }
}, isFullImg ? FeatureCard_jsx("img", {
  src: `/images/svg/${icon}`,
  width: "100%",
  height: "50px"
}) : FeatureCard_jsx("img", {
  style: FeatureCard_Styles.imgBrdr,
  src: `/images/svg/${icon}`,
  width: "100%",
  height: "50px"
}), FeatureCard_jsx("div", {
  style: {
    width: "100px",
    fontSize: "13px",
    fontWeight: "bold",
    marginTop: "10px",
    margin: "15px 12px 0px 12px"
  }
}, text));
const FeatureCard_Styles = {
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
// CONCATENATED MODULE: ./src/Components/FeatureTiles/slantDiv.tsx
var FeatureTiles_slantDiv_jsx = external_react_["createElement"];

const slantDiv_SlantDiv = () => {
  return FeatureTiles_slantDiv_jsx("svg", {
    style: FeatureTiles_slantDiv_Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, FeatureTiles_slantDiv_jsx("polyline", {
    points: "0,0  1,0  1,1",
    fill: "#02042B",
    id: "top"
  }), FeatureTiles_slantDiv_jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#EEEFF2",
    id: "bottom"
  }));
};
const FeatureTiles_slantDiv_Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};
// EXTERNAL MODULE: ./src/Components/FeatureTiles/FeatureTiles.module.css
var FeatureTiles_module = __webpack_require__("orCG");
var FeatureTiles_module_default = /*#__PURE__*/__webpack_require__.n(FeatureTiles_module);

// CONCATENATED MODULE: ./src/Components/FeatureTiles/index.tsx
var FeatureTiles_jsx = external_react_["createElement"];




const FeatureTiles = () => {
  return FeatureTiles_jsx(external_react_["Fragment"], null, FeatureTiles_jsx("div", {
    style: {
      background: "#EEEFF2"
    }
  }, FeatureTiles_jsx("div", {
    className: FeatureTiles_module_default.a.text
  }, "Enabling fees payment for schools online"), FeatureTiles_jsx("div", {
    className: FeatureTiles_module_default.a.hrr
  }), FeatureTiles_jsx("div", {
    className: FeatureTiles_module_default.a.cardsDiv
  }, CardsDetails.map((card, indx) => FeatureTiles_jsx(FeatureCard, {
    key: indx,
    text: card.text,
    icon: card.ico,
    isFullImg: card.isFullImg
  })))), FeatureTiles_jsx(slantDiv_SlantDiv, null));
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
// CONCATENATED MODULE: ./src/Components/WelcomeSection/slantDiv.tsx
var WelcomeSection_slantDiv_jsx = external_react_["createElement"];

const WelcomeSection_slantDiv_SlantDiv = () => {
  return WelcomeSection_slantDiv_jsx("svg", {
    style: WelcomeSection_slantDiv_Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, WelcomeSection_slantDiv_jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#02042B",
    id: "top"
  }), WelcomeSection_slantDiv_jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#EEEFF2",
    id: "bottom"
  }), WelcomeSection_slantDiv_jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#02042B",
    id: "bottom"
  }));
};
const WelcomeSection_slantDiv_Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};
// EXTERNAL MODULE: ./src/Components/WelcomeSection/WelcomeSection.module.css
var WelcomeSection_module = __webpack_require__("Vm5X");
var WelcomeSection_module_default = /*#__PURE__*/__webpack_require__.n(WelcomeSection_module);

// CONCATENATED MODULE: ./src/Components/WelcomeSection/index.tsx
var WelcomeSection_jsx = external_react_default.a.createElement;



const WelcomeSection = () => {
  return WelcomeSection_jsx(external_react_default.a.Fragment, null, WelcomeSection_jsx("div", {
    className: WelcomeSection_module_default.a.mainparent
  }, WelcomeSection_jsx("div", null, WelcomeSection_jsx("img", {
    src: "/images/svg/welcomelineart.svg",
    width: "auto",
    height: "250px"
  })), WelcomeSection_jsx("div", {
    className: WelcomeSection_module_default.a.txtmain
  }, WelcomeSection_jsx("div", {
    className: WelcomeSection_module_default.a.hrr
  }), WelcomeSection_jsx("div", {
    style: {
      fontSize: '30px'
    }
  }, "Welcome to ", WelcomeSection_jsx("br", null), " Feebharo"), WelcomeSection_jsx("div", {
    className: WelcomeSection_module_default.a.para
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))), WelcomeSection_jsx(WelcomeSection_slantDiv_SlantDiv, null));
};
// EXTERNAL MODULE: ./src/Components/Testimonials/Testimonials.module.css
var Testimonials_module = __webpack_require__("+gb1");
var Testimonials_module_default = /*#__PURE__*/__webpack_require__.n(Testimonials_module);

// CONCATENATED MODULE: ./src/Components/Testimonials/index.tsx
var Testimonials_jsx = external_react_["createElement"];


const Testimonials = () => {
  return Testimonials_jsx(external_react_["Fragment"], null, Testimonials_jsx("div", {
    className: Testimonials_module_default.a.mainparent
  }, Testimonials_jsx("div", {
    className: Testimonials_module_default.a.txtmain
  }, Testimonials_jsx("div", {
    className: Testimonials_module_default.a.hrr
  }), Testimonials_jsx("div", {
    style: {
      fontSize: '30px',
      fontWeight: 'bold'
    }
  }, "Trusted by Schools ", Testimonials_jsx("br", null), " & Institutes"), Testimonials_jsx("div", {
    className: Testimonials_module_default.a.para
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text."), Testimonials_jsx("div", {
    className: Testimonials_module_default.a.countMain
  }, Testimonials_jsx("div", null, Testimonials_jsx("div", {
    className: Testimonials_module_default.a.countVal
  }, "10K+"), Testimonials_jsx("div", {
    className: Testimonials_module_default.a.countDesc
  }, "User from multiple schools across India")), Testimonials_jsx("div", null, Testimonials_jsx("div", null, Testimonials_jsx("div", {
    className: Testimonials_module_default.a.countVal
  }, "4K+"), Testimonials_jsx("div", {
    className: Testimonials_module_default.a.countDesc
  }, "Joining every month"))))), Testimonials_jsx("div", null, Testimonials_jsx("div", {
    className: "myGallery",
    style: {
      maxWidth: "420px",
      margin: "30px 20px 20px 20px"
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].slice(0, 12).map(indx => Testimonials_jsx("img", {
    width: "120px",
    height: "60px",
    style: {
      margin: "10px"
    },
    src: "https://picsum.photos/190/190?" + indx
  }))))));
};
// EXTERNAL MODULE: ./src/Components/ClientsSay/ClientsSay.module.css
var ClientsSay_module = __webpack_require__("cepK");
var ClientsSay_module_default = /*#__PURE__*/__webpack_require__.n(ClientsSay_module);

// CONCATENATED MODULE: ./src/Components/ClientsSay/slantDiv.tsx
var ClientsSay_slantDiv_jsx = external_react_["createElement"];

const ClientsSay_slantDiv_SlantDiv = () => {
  return ClientsSay_slantDiv_jsx("svg", {
    style: ClientsSay_slantDiv_Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, ClientsSay_slantDiv_jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#02042B",
    id: "top"
  }), ClientsSay_slantDiv_jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#EEEFF2",
    id: "bottom"
  }), ClientsSay_slantDiv_jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#02042B",
    id: "bottom"
  }));
};
const ClientsSay_slantDiv_Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};
// CONCATENATED MODULE: ./src/Components/ClientsSay/index.tsx
var ClientsSay_jsx = external_react_default.a.createElement;



const ClientsSay = () => {
  return ClientsSay_jsx(external_react_default.a.Fragment, null, ClientsSay_jsx("div", {
    className: ClientsSay_module_default.a.mainparent
  }, ClientsSay_jsx("div", null, ClientsSay_jsx("img", {
    src: "/images/clientsay.png",
    width: "auto",
    height: "250px"
  })), ClientsSay_jsx("div", {
    className: ClientsSay_module_default.a.txtmain
  }, ClientsSay_jsx("div", {
    className: ClientsSay_module_default.a.hrr
  }), ClientsSay_jsx("div", {
    style: {
      fontSize: '30px'
    }
  }, "What Our Client Say"), ClientsSay_jsx("div", null, ClientsSay_jsx("img", {
    src: "/images/svg/quote.svg",
    width: "auto",
    height: "30px"
  })), ClientsSay_jsx("div", {
    className: ClientsSay_module_default.a.para
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s."), ClientsSay_jsx("div", {
    className: ClientsSay_module_default.a.postername
  }, "James Anderson"), ClientsSay_jsx("div", {
    className: ClientsSay_module_default.a.posterposition
  }, "Don Bosco Principle"))), ClientsSay_jsx(ClientsSay_slantDiv_SlantDiv, null));
};
// EXTERNAL MODULE: ./src/Components/ContactSection/ContactSection.module.css
var ContactSection_module = __webpack_require__("iHTA");
var ContactSection_module_default = /*#__PURE__*/__webpack_require__.n(ContactSection_module);

// CONCATENATED MODULE: ./src/Components/ContactSection/slantDiv.tsx
var ContactSection_slantDiv_jsx = external_react_["createElement"];

const ContactSection_slantDiv_SlantDiv = () => {
  return ContactSection_slantDiv_jsx("svg", {
    style: ContactSection_slantDiv_Styles.main,
    viewBox: "0 0 1 1",
    preserveAspectRatio: "none"
  }, ContactSection_slantDiv_jsx("polyline", {
    points: "0,0  1,0  0,1",
    fill: "#ECECED",
    id: "top"
  }), ContactSection_slantDiv_jsx("polyline", {
    points: "1,0  1,1  0,1",
    fill: "#02042B",
    id: "bottom"
  }), ContactSection_slantDiv_jsx("polyline", {
    points: "1,1  1,0  0,0",
    fill: "#ECECED",
    id: "bottom"
  }));
};
const ContactSection_slantDiv_Styles = {
  main: {
    width: "100%",
    height: "100px"
  }
};
// CONCATENATED MODULE: ./src/Components/ContactSection/index.tsx
var ContactSection_jsx = external_react_default.a.createElement;



const ContactSection = () => {
  return ContactSection_jsx(external_react_default.a.Fragment, null, ContactSection_jsx("div", {
    className: ContactSection_module_default.a.mainparent
  }, ContactSection_jsx("div", null, ContactSection_jsx("img", {
    src: "/images/contact.png",
    width: "auto",
    height: "150px"
  })), ContactSection_jsx("div", {
    className: ContactSection_module_default.a.txtmain
  }, ContactSection_jsx("div", {
    style: {
      fontSize: '30px',
      fontWeight: "bold"
    }
  }, "Let's get in touch"), ContactSection_jsx("div", {
    className: ContactSection_module_default.a.formrow
  }, ContactSection_jsx("div", null, ContactSection_jsx("input", {
    className: ContactSection_module_default.a.inptt,
    type: "text",
    placeholder: "Your Name"
  })), ContactSection_jsx("div", null, ContactSection_jsx("input", {
    className: ContactSection_module_default.a.inptt,
    type: "text",
    placeholder: "Email Address"
  }))), ContactSection_jsx("div", {
    className: ContactSection_module_default.a.formrow
  }, ContactSection_jsx("div", null, ContactSection_jsx("input", {
    className: ContactSection_module_default.a.inptt,
    type: "text",
    placeholder: "Phone No."
  })), ContactSection_jsx("div", null, ContactSection_jsx("input", {
    className: ContactSection_module_default.a.inptt,
    type: "text",
    placeholder: "Status"
  }))), ContactSection_jsx("div", {
    className: ContactSection_module_default.a.txtareaouter
  }, ContactSection_jsx("textarea", {
    style: {
      width: "-webkit-fill-available"
    },
    placeholder: "Your Message"
  })), ContactSection_jsx("div", {
    className: ContactSection_module_default.a.formrow
  }, ContactSection_jsx("button", {
    className: ContactSection_module_default.a.buttonn
  }, "Submit")))), ContactSection_jsx(ContactSection_slantDiv_SlantDiv, null));
};
// CONCATENATED MODULE: ./src/Components/index.ts











// CONCATENATED MODULE: ./pages/home/index.tsx
var home_jsx = external_react_["createElement"];
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
  const home = Object(external_react_redux_["useSelector"])(state => state.home);
  const dispatch = Object(external_react_redux_["useDispatch"])();

  const renderLocaleButtons = activeLanguage => ["en", "es", "tr"].map(lang => home_jsx(LocaleButton, {
    key: lang,
    lang: lang,
    isActive: activeLanguage === lang,
    onClick: () => i18n.changeLanguage(lang)
  }));

  return home_jsx("div", {
    style: {
      background: "#02042B",
      scrollBehavior: 'smooth'
    }
  }, home_jsx(Navbar, null), home_jsx(InstituteSelection, null), home_jsx(FeatureTiles, null), home_jsx(WelcomeSection, null), home_jsx(Testimonials, null), home_jsx(ClientsSay, null), home_jsx(ContactSection, null));
};

Home.getInitialProps = async (ctx) => {
  await ctx.store.dispatch(HomeActions.GetApod({
    params: {
      hd: true
    }
  }));
  return {
    namespacesRequired: ["common"]
  };
};

const Extended = Object(server_i18n["b" /* withTranslation */])("common")(Home);
const home_Styles = {
  main: {
    background: "#02042B",
    scrollBehavior: 'smooth'
  }
};
/* harmony default export */ var pages_home = __webpack_exports__["default"] = (Extended);

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Lc87":
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "TkXT":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainparent": "Navbar_mainparent__1xaF7",
	"btns": "Navbar_btns__9zTE5",
	"btnEle": "Navbar_btnEle__3MuNa"
};


/***/ }),

/***/ "Vm5X":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"mainparent": "WelcomeSection_mainparent__3FXLL",
	"para": "WelcomeSection_para__2tJdK",
	"txtmain": "WelcomeSection_txtmain__2jUgJ",
	"hrr": "WelcomeSection_hrr__3CONw"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cepK":
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

/***/ "e0UW":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "Heading_title__2tSWQ",
	"title__back": "Heading_title__back__2U8p_",
	"title__front": "Heading_title__front__1sMzD",
	"title--contact": "Heading_title--contact__1_Ndm"
};


/***/ }),

/***/ "h1MZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ActionConsts; });

// CONCATENATED MODULE: ./src/Definitions/ActionConsts/ActionConsts.ts
const ActionConsts = {
  Home: {
    ResetReducer: "Home_ResetReducer",
    SetReducer: "Home_SetReducer"
  }
};
// CONCATENATED MODULE: ./src/Definitions/ActionConsts/index.ts

// CONCATENATED MODULE: ./src/Definitions/index.ts


/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iHTA":
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

/***/ "kluC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appWithTranslation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withTranslation; });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f9I");
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
/* unused harmony default export */ var _unused_webpack_default_export = (NextI18NextInstance);

/***/ }),

/***/ "orCG":
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


/***/ })

/******/ });