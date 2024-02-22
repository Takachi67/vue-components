/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 262:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Autocomplete: function() { return /* reexport */ Autocomplete; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Autocomplete.vue?vue&type=template&id=89b2bd86&scoped=true


const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.pushScopeId)("data-v-89b2bd86"),n=n(),(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.popScopeId)(),n)
const _hoisted_1 = { class: "atc-container" }
const _hoisted_2 = { class: "atc-input-container" }
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "atc-icon"
}, [
  /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  })
], -1))
const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4"
}, [
  /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18 18 6M6 6l12 12"
  })
], -1))
const _hoisted_5 = [
  _hoisted_4
]
const _hoisted_6 = { class: "atc-results" }
const _hoisted_7 = { class: "atc-item" }
const _hoisted_8 = ["onClick"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_2, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("input", (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.mergeProps)({
        type: "text",
        class: "atc-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.searchText) = $event)),
        onFocusin: _cache[1] || (_cache[1] = $event => ($data.showResults = $props.results.length > 0)),
        onFocusout: _cache[2] || (_cache[2] = (...args) => ($options.closeResults && $options.closeResults(...args)))
      }, _ctx.$attrs), null, 16), [
        [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vModelText, $data.searchText]
      ]),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "icon", {}, () => [
        _hoisted_3
      ], true),
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("button", {
        class: "atc-btn",
        onClick: _cache[3] || (_cache[3] = (...args) => ($options.clear && $options.clear(...args)))
      }, _hoisted_5)
    ]),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderSlot)(_ctx.$slots, "results", {}, () => [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("ul", _hoisted_6, [
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("li", _hoisted_7, "No results", 512), [
          [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $options.formattedResults.length === 0]
        ]),
        ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.renderList)($options.formattedResults, (result) => {
          return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("li", {
            class: "atc-item",
            onClick: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.withModifiers)($event => ($options.clickItem(result)), ["stop"])
          }, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)($props.displayResult(result)), 9, _hoisted_8))
        }), 256))
      ], 512), [
        [external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.vShow, $data.showResults]
      ])
    ], true)
  ]))
}
;// CONCATENATED MODULE: ./src/components/Autocomplete.vue?vue&type=template&id=89b2bd86&scoped=true

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Autocomplete.vue?vue&type=script&lang=js

/* harmony default export */ var Autocompletevue_type_script_lang_js = ({
    name: "Autocomplete",
    props: {
        results: {
            type: Array,
            default: () => []
        },
        delay: {
            type: Number,
            default: 0
        },
        displayResult: {
            type: Function,
            default: (item) => item.name
        },
        limit: {
            type: Number,
            default: -1
        },
        defaultSearchText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            timeout: null,
            showResults: false,
            searchText: this.defaultSearchText
        }
    },
    methods: {
        clickItem(item) {
            this.$emit('selectItem', item)
            this.showResults = false
        },
        closeResults() {
            setTimeout(() => this.showResults = false, 200)
        },
        setText(text) {
            this.searchText = text
        },
        clear() {
            this.$emit('clearInput')
            this.searchText = ''
        }
    },
    watch: {
        'searchText': function (value) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => this.$emit('onInput', value), this.delay)
            if (value.length === 0) this.$emit('clearInput')
        }
    },
    computed: {
        formattedResults: (state) => state.limit === -1 ? state.results : state.results.slice(0, state.limit)
    }
});

;// CONCATENATED MODULE: ./src/components/Autocomplete.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/Autocomplete.vue?vue&type=style&index=0&id=89b2bd86&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/components/Autocomplete.vue?vue&type=style&index=0&id=89b2bd86&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(262);
;// CONCATENATED MODULE: ./src/components/Autocomplete.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(Autocompletevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-89b2bd86"]])

/* harmony default export */ var Autocomplete = (__exports__);
;// CONCATENATED MODULE: ./src/index.js



;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js



}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-components.common.js.map