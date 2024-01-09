"use strict";(self.webpackChunkguillao_clothing=self.webpackChunkguillao_clothing||[]).push([[868],{4833:function(n,t,e){e.d(t,{O:function(){return r}});var r,i=e(1413),o=e(4925),u=e(4942),c=e(3189),a=e(184),l=["children","buttonType","isLoading"];!function(n){n.base="base",n.google="google-sign-in",n.inverted="inverted"}(r||(r={}));t.Z=function(n){var t=n.children,e=n.buttonType,d=n.isLoading,p=(0,o.Z)(n,l),f=function(){var n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.base;return(n={},(0,u.Z)(n,r.base,c.Yd),(0,u.Z)(n,r.google,c.NY),(0,u.Z)(n,r.inverted,c.OZ),n)[t]}(e);return(0,a.jsx)(f,(0,i.Z)((0,i.Z)({disabled:d},p),{},{children:d?(0,a.jsx)(c.X4,{}):t}))}},3189:function(n,t,e){e.d(t,{Yd:function(){return d},NY:function(){return p},OZ:function(){return f},X4:function(){return s}});var r,i,o,u,c=e(168),a=e(5751),l=e(7415),d=a.ZP.button(r||(r=(0,c.Z)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),p=(0,a.ZP)(d)(i||(i=(0,c.Z)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),f=(0,a.ZP)(d)(o||(o=(0,c.Z)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),s=(0,a.ZP)(l.e)(u||(u=(0,c.Z)(["\n  width: 30px;\n  height: 30px;\n"])))},8868:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r,i,o,u,c,a,l,d,p,f,s=e(2791),h=e(6871),g=e(5978),x=e(6916),v=function(n){return n.categories},m=(0,x.P1)([v],(function(n){return n.categories})),b=(0,x.P1)([m],(function(n){return n.reduce((function(n,t){var e=t.title,r=t.items;return n[e.toLowerCase()]=r,n}),{})})),y=(0,x.P1)([v],(function(n){return n.isLoading})),w=e(9610),Z=e(8754),j=e(4833),k=e(168),P=e(5751),O=P.ZP.div(r||(r=(0,k.Z)(["\n  // width: 100%;\n  display: flex;\n  flex-direction: column;\n  // height: 350px;\n  align-items: center;\n  position: relative;\n  border: 5px solid #fff;\n\n  img {\n    width: 100%;\n    // height: 90%;\n    height: 350px;\n    object-fit: cover;\n    // margin-bottom: 5px;\n  }\n\n  button {\n    width: 80%;\n    opacity: 0.7;\n    position: absolute;\n    top: 255px;\n    display: none;\n  }\n\n  &:hover {\n    img {\n      opacity: 0.8;\n    }\n\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 40vw;\n\n    button {\n      display: block;\n      opacity: 0.9;\n      min-width: unset;\n      padding: 0 10px;\n\n      &:hover {\n        img {\n          opacity: unset;\n        }\n\n        button {\n          opacity: unset;\n        }\n      }\n    }\n  }\n\n  @media screen and (max-width: 400px) {\n    width: 80vw;\n  }\n"]))),C=P.ZP.div(i||(i=(0,k.Z)(["\n  width: 100%;\n  // height: 10%;\n  min-height: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  gap: 5px;\n  font-size: 18px;\n  color: white;\n  background-color: black;\n  margin: 0;\n  padding: 12px 10px;\n"]))),z=P.ZP.div(o||(o=(0,k.Z)(["\n  width: 90%;\n  // margin-bottom: 15px;\n  font-weight: bold;\n  letter-spacing: 1.2px;\n  font-size: 1rem;\n"]))),A=P.ZP.div(u||(u=(0,k.Z)(["\n  width: 10%;\n"]))),E=e(184),S=function(n){var t=n.product,e=t.name,r=t.price,i=t.imageUrl,o=(0,g.I0)(),u=(0,g.v9)(w.D1);return(0,E.jsxs)(O,{children:[(0,E.jsx)("img",{src:i,alt:"".concat(e)}),(0,E.jsxs)(C,{children:[(0,E.jsx)(z,{children:e}),(0,E.jsxs)(A,{children:["$",r,".00"]})]}),(0,E.jsx)(j.Z,{buttonType:j.O.inverted,onClick:function(){return o((0,Z.dm)(u,t))},children:"Add to cart"})]})},U=e(3504),q=P.ZP.div(c||(c=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 70px;\n\n  h2 {\n    border-bottom: 1px solid transparent;\n\n    &:hover {\n      border-bottom: 1px solid #ffcc00;\n      cursor: pointer;\n    }\n  }\n\n  @media screen and (max-width: 800px) {\n    align-items: center;\n  }\n"]))),F=(0,P.ZP)(U.rU)(a||(a=(0,k.Z)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  width: 100%;\n\n  &:hover {\n    opacity: 85%;\n  }\n"]))),I=P.ZP.div(l||(l=(0,k.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: 4px;\n\n  @media screen and (max-width: 800px) {\n    grid-template-columns: 1fr 1fr;\n    grid-column-gap: 15px;\n    grid-row-gap: 25px;\n  }\n\n  @media screen and (max-width: 400px) {\n    grid-template-columns: 1fr;\n    grid-row-gap: 25px;\n  }\n"]))),L=function(n){var t=n.title,e=n.products;return(0,E.jsxs)(q,{children:[(0,E.jsx)("h2",{children:(0,E.jsx)(F,{to:t,children:t.toUpperCase()})}),(0,E.jsx)(I,{children:e.filter((function(n,t){return t<4})).map((function(n){return(0,E.jsx)(S,{product:n},n.id)}))})]})},N=e(3833),T=P.ZP.div(d||(d=(0,k.Z)(["\n  height: 100%;\n  overflow-y: scroll;\n"]))),Y=function(){var n=(0,g.v9)(b),t=(0,g.v9)(y);return(0,E.jsx)(s.Fragment,{children:t?(0,E.jsx)(N.Z,{}):(0,E.jsx)(T,{children:Object.keys(n).map((function(t){var e=n[t];return(0,E.jsx)(L,{title:t,products:e},t)}))})})},D=e(885),R=P.ZP.div(p||(p=(0,k.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  column-gap: 20px;\n  row-gap: 50px;\n  height: 100%;\n  overflow-y: scroll;\n"]))),_=P.ZP.h2(f||(f=(0,k.Z)(["\n  font-size: 38px;\n  margin-bottom: 25px;\n  text-align: center;\n"]))),W=function(){var n=(0,h.UO)().category,t=(0,g.v9)(b),e=(0,g.v9)(y),r=(0,s.useState)(t[n]),i=(0,D.Z)(r,2),o=i[0],u=i[1];return(0,s.useEffect)((function(){u(t[n])}),[n,t]),(0,E.jsxs)(s.Fragment,{children:[(0,E.jsx)(_,{children:n.toUpperCase()}),e?(0,E.jsx)(N.Z,{}):(0,E.jsx)(R,{children:o&&o.map((function(n){return(0,E.jsx)(S,{product:n},n.id)}))})]})},X=e(7977),J=function(){var n=(0,g.I0)();return(0,s.useEffect)((function(){n((0,X.ti)())}),[]),(0,E.jsxs)(h.Z5,{children:[(0,E.jsx)(h.AW,{index:!0,element:(0,E.jsx)(Y,{})}),(0,E.jsx)(h.AW,{path:":category",element:(0,E.jsx)(W,{})})]})}},9610:function(n,t,e){e.d(t,{D1:function(){return o},Ju:function(){return u},z4:function(){return c},ej:function(){return a}});var r=e(6916),i=function(n){return n.cart},o=(0,r.P1)([i],(function(n){return n.cartItems})),u=(0,r.P1)([i],(function(n){return n.isCartOpen})),c=(0,r.P1)([o],(function(n){return n.reduce((function(n,t){return n+t.quantity}),0)})),a=(0,r.P1)([o],(function(n){return n.reduce((function(n,t){return n+t.quantity*t.price}),0)}))},6916:function(n,t,e){e.d(t,{P1:function(){return a}});var r="NOT_FOUND";var i=function(n,t){return n===t};function o(n,t){var e="object"===typeof t?t:{equalityCheck:t},o=e.equalityCheck,u=void 0===o?i:o,c=e.maxSize,a=void 0===c?1:c,l=e.resultEqualityCheck,d=function(n){return function(t,e){if(null===t||null===e||t.length!==e.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!n(t[i],e[i]))return!1;return!0}}(u),p=1===a?function(n){var t;return{get:function(e){return t&&n(t.key,e)?t.value:r},put:function(n,e){t={key:n,value:e}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(d):function(n,t){var e=[];function i(n){var i=e.findIndex((function(e){return t(n,e.key)}));if(i>-1){var o=e[i];return i>0&&(e.splice(i,1),e.unshift(o)),o.value}return r}return{get:i,put:function(t,o){i(t)===r&&(e.unshift({key:t,value:o}),e.length>n&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,d);function f(){var t=p.get(arguments);if(t===r){if(t=n.apply(null,arguments),l){var e=p.getEntries(),i=e.find((function(n){return l(n.value,t)}));i&&(t=i.value)}p.put(arguments,t)}return t}return f.clearCache=function(){return p.clear()},f}function u(n){var t=Array.isArray(n[0])?n[0]:n;if(!t.every((function(n){return"function"===typeof n}))){var e=t.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return t}function c(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var o,c=0,a={memoizeOptions:void 0},l=r.pop();if("object"===typeof l&&(a=l,l=r.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var d=a,p=d.memoizeOptions,f=void 0===p?e:p,s=Array.isArray(f)?f:[f],h=u(r),g=n.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(s)),x=n((function(){for(var n=[],t=h.length,e=0;e<t;e++)n.push(h[e].apply(null,arguments));return o=g.apply(null,n)}));return Object.assign(x,{resultFunc:l,memoizedResultFunc:g,dependencies:h,lastResult:function(){return o},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),x};return i}var a=c(o)},4925:function(n,t,e){function r(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}e.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=868.0a1e94fc.chunk.js.map