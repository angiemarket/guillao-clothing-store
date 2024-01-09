"use strict";(self.webpackChunkguillao_clothing=self.webpackChunkguillao_clothing||[]).push([[737],{4833:function(n,e,r){r.d(e,{O:function(){return t}});var t,o=r(1413),a=r(4925),i=r(4942),s=r(3189),l=r(184),c=["children","buttonType","isLoading"];!function(n){n.base="base",n.google="google-sign-in",n.inverted="inverted"}(t||(t={}));e.Z=function(n){var e=n.children,r=n.buttonType,u=n.isLoading,d=(0,a.Z)(n,c),p=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.base;return(n={},(0,i.Z)(n,t.base,s.Yd),(0,i.Z)(n,t.google,s.NY),(0,i.Z)(n,t.inverted,s.OZ),n)[e]}(r);return(0,l.jsx)(p,(0,o.Z)((0,o.Z)({disabled:u},d),{},{children:u?(0,l.jsx)(s.X4,{}):e}))}},3189:function(n,e,r){r.d(e,{Yd:function(){return u},NY:function(){return d},OZ:function(){return p},X4:function(){return f}});var t,o,a,i,s=r(168),l=r(5751),c=r(7415),u=l.ZP.button(t||(t=(0,s.Z)(["\n  min-width: 165px;\n  width: auto;\n  height: 50px;\n  letter-spacing: 0.5px;\n  line-height: 50px;\n  padding: 0 35px 0 35px;\n  font-size: 15px;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  font-family: 'Open Sans Condensed';\n  font-weight: bolder;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n  }\n"]))),d=(0,l.ZP)(u)(o||(o=(0,s.Z)(["\n  background-color: #4285f4;\n  color: white;\n\n  &:hover {\n    background-color: #357ae8;\n    border: none;\n  }\n"]))),p=(0,l.ZP)(u)(a||(a=(0,s.Z)(["\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n\n  &:hover {\n    background-color: black;\n    color: white;\n    border: none;\n  }\n"]))),f=(0,l.ZP)(c.e)(i||(i=(0,s.Z)(["\n  width: 30px;\n  height: 30px;\n"])))},5737:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var t,o,a,i,s,l,c,u,d=r(4942),p=r(1413),f=r(5861),h=r(885),x=r(7757),b=r.n(x),g=r(2791),m=r(7477),v=r(5978),Z=r(4925),w=r(168),y=r(5751),j="grey",k=(0,y.iv)(t||(t=(0,w.Z)(["\n  top: -14px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),P=y.ZP.label(o||(o=(0,w.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  ",";\n"])),j,(function(n){return n.shrink&&k})),S=y.ZP.input(a||(a=(0,w.Z)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ "," {\n    ",";\n  }\n"])),j,j,P,k),O=y.ZP.div(i||(i=(0,w.Z)(["\n  position: relative;\n  margin: 45px 0;\n\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),C=r(184),I=["label"],q=function(n){var e=n.label,r=(0,Z.Z)(n,I);return(0,C.jsxs)(O,{children:[(0,C.jsx)(S,(0,p.Z)({},r)),e&&(0,C.jsx)(P,{shrink:Boolean(r.value&&"string"===typeof r.value&&r.value.length),children:e})]})},N=r(4833),E=y.ZP.div(s||(s=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  h2 {\n    margin: 10px 0;\n  }\n"]))),z=r(2542),D={displayName:"",email:"",password:"",confirmPassword:""},T=function(){var n=(0,g.useState)(D),e=(0,h.Z)(n,2),r=e[0],t=e[1],o=r.displayName,a=r.email,i=r.password,s=r.confirmPassword,l=(0,v.I0)(),c=function(){var n=(0,f.Z)(b().mark((function n(e){return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),i===s){n.next=4;break}return alert("passwords do not match"),n.abrupt("return");case 4:try{l((0,z.hI)(a,i,o)),t(D)}catch(r){r.code===m.kq.EMAIL_EXISTS?alert("Cannot create user, email already in use"):console.log("user creation encountered an error",r)}case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(n){var e=n.target,o=e.name,a=e.value;t((0,p.Z)((0,p.Z)({},r),{},(0,d.Z)({},o,a)))};return(0,C.jsxs)(E,{children:[(0,C.jsx)("h2",{children:"Don't have an account?"}),(0,C.jsx)("span",{children:"Sign up with your email and password"}),(0,C.jsxs)("form",{onSubmit:c,children:[(0,C.jsx)(q,{label:"Display Name",type:"text",required:!0,onChange:u,name:"displayName",value:o}),(0,C.jsx)(q,{label:"Email",type:"email",required:!0,onChange:u,name:"email",value:a}),(0,C.jsx)(q,{label:"Password",type:"password",required:!0,onChange:u,name:"password",value:i}),(0,C.jsx)(q,{label:"Confirm Password",type:"password",required:!0,onChange:u,name:"confirmPassword",value:s}),(0,C.jsx)(N.Z,{type:"submit",children:"Sign Up"})]})]})},X=y.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n\n  h2 {\n    margin: 10px 0;\n  }\n"]))),Y=y.ZP.div(c||(c=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),L={email:"",password:""},_=function(){var n=(0,v.I0)(),e=(0,g.useState)(L),r=(0,h.Z)(e,2),t=r[0],o=r[1],a=t.email,i=t.password,s=function(){var e=(0,f.Z)(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n((0,z.Pd)());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,f.Z)(b().mark((function e(r){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault();try{n((0,z.Xu)(a,i)),o(L)}catch(t){console.log("user sign in failed",t)}case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),c=function(n){var e=n.target,r=e.name,a=e.value;o((0,p.Z)((0,p.Z)({},t),{},(0,d.Z)({},r,a)))};return(0,C.jsxs)(X,{children:[(0,C.jsx)("h2",{children:"Already have an account?"}),(0,C.jsx)("span",{children:"Sign in with your email and password"}),(0,C.jsxs)("form",{onSubmit:l,children:[(0,C.jsx)(q,{label:"Email",type:"email",required:!0,onChange:c,name:"email",value:a}),(0,C.jsx)(q,{label:"Password",type:"password",required:!0,onChange:c,name:"password",value:i}),(0,C.jsxs)(Y,{children:[(0,C.jsx)(N.Z,{type:"submit",children:"Sign In"}),(0,C.jsx)(N.Z,{buttonType:N.O.google,type:"button",onClick:s,children:"Sign In With Google"})]})]})]})},A=y.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  width: 900px;\n  justify-content: space-between;\n  margin: 30px auto;\n"]))),B=function(){return(0,C.jsxs)(A,{children:[(0,C.jsx)(_,{}),(0,C.jsx)(T,{})]})}},4925:function(n,e,r){function t(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}r.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=737.e9437a4b.chunk.js.map