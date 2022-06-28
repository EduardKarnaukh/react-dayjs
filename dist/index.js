!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("dayjs")):"function"==typeof define&&define.amd?define(["react","prop-types","dayjs"],t):"object"==typeof exports?exports["react-dayjs"]=t(require("react"),require("prop-types"),require("dayjs")):e["react-dayjs"]=t(e.react,e.PropTypes,e.dayjs)}(self,((e,t,r)=>(()=>{"use strict";var n={602:e=>{e.exports=t},640:e=>{e.exports=r},46:t=>{t.exports=e}},o={};function u(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,u),r.exports}u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{u.r(a),u.d(a,{default:()=>p});var e=u(46),t=u.n(e),r=u(602),n=u.n(r),o=u(640),i=u.n(o);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var d={element:n().any,date:n().oneOfType([n().string,n().number,n().array,n().object]),format:n().string,toJSON:n().bool,toISOString:n().bool,asString:n().bool,unixSeconds:n().bool,unixMilliseconds:n().bool,daysInMonth:n().bool,displayIsValid:n().bool,add:n().object,subtract:n().object,children:n().string},y=function(r){var n,o,u=(n=(0,e.useState)({value:""}),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw o}}return u}}(n,o)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],l=u[1];(0,e.useEffect)((function(){var e,t,n,o,u,a,s,f,d,y,p,b,O;e=r.date,t=r.format,n=r.children,o=r.add,u=r.subtract,a=r.daysInMonth,s=r.toJSON,f=r.toISOString,d=r.asString,y=r.unixSeconds,p=r.unixMilliseconds,b=r.displayIsValid,O=function(e,t){return t?i()(t):e?i()(e):i()()}(e,n),o&&(O=function(e,t){return Object.keys(t).reduce((function(e,r){return e.add(t[r],r)}),e)}(O,o)),u&&(O=function(e,t){return Object.keys(t).reduce((function(e,r){return e.subtract(t[r],r)}),e)}(O,u)),l(b?function(e){return c(c({},e),{},{value:"".concat(O.isValid())})}:a?function(e){return c(c({},e),{},{value:O.daysInMonth()})}:s?function(e){return c(c({},e),{},{value:O.toJSON()})}:f?function(e){return c(c({},e),{},{value:O.toISOString()})}:d?function(e){return c(c({},e),{},{value:O.toString()})}:p?function(e){return c(c({},e),{},{value:O.valueOf()})}:y?function(e){return c(c({},e),{},{value:O.unix()})}:t?function(e){return c(c({},e),{},{value:O.format(t)})}:function(e){return c(c({},e),{},{value:O.format()})})}),[]);var s,y,p,b,O=(s=r,y=d,p=Object.keys(y),b=Object.assign({},s),Object.keys(b).filter((function(e){return-1!==p.indexOf(e)})).forEach((function(e){return delete b[e]})),b);return t().createElement(r.element,O,a.value)};y.propTypes=d,y.defaultProps={element:"time",date:null,format:null,toJSON:!1,toISOString:!1,asString:!1,unixSeconds:!1,unixMilliseconds:!1,daysInMonth:!1,displayIsValid:!1,add:null,subtract:null,children:null};const p=y})(),a})()));