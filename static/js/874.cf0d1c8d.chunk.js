"use strict";(self.webpackChunkpets_support=self.webpackChunkpets_support||[]).push([[874],{6774:function(e,t,r){r.d(t,{AC:function(){return d},IG:function(){return i},Ld:function(){return _},Q5:function(){return l},Xn:function(){return a},_u:function(){return h},a:function(){return x},ab:function(){return y},je:function(){return o},jo:function(){return m},k6:function(){return c},mM:function(){return f},nL:function(){return u},sE:function(){return n},sM:function(){return s},tQ:function(){return p},vT:function(){return g}});var n={name:"email",type:"email",placeholder:"Email",required:!0,requiredMessage:"Email is required",pattern:/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/i,patternMessage:"Invalid email address"},a={name:"password",type:"password",placeholder:"Password",required:!0,requiredMessage:"Password is required",pattern:/^(?=.{7,32}$)([0-9A-Za-z])*$/i,patternMessage:"Min 7 max 32 symbols, no spaces"},i={name:"passwordConfirm",type:"password",placeholder:"Confirm Password",required:!0,requiredMessage:"Confirm your password",confirmPassword:!0},s={name:"name",type:"text",placeholder:"Name",required:!0,requiredMessage:"Enter your name, please",pattern:/^(?=.{2,16}$)([A-Za-z])*$/i,patternMessage:"Latins only min 2, max 16 "},o={name:"city",type:"text",placeholder:"City, Region",required:!0,requiredMessage:"Enter your city and region, please",pattern:/^([A-Za-z]+)([,][ ][A-Za-z]+)*$/i,patternMessage:"Format: Brovary, Kyiv",label:"Location",zero:!0},l={name:"phone",type:"tel",placeholder:"Phone",required:!0,requiredMessage:"Enter your phone, please",pattern:/^(0[5-9][0-9]\d{7})$/i,patternMessage:"Phone format: 0971234567"},c={label:"Name pet",name:"name",type:"text",placeholder:"Type pet name",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},d={label:"Date of Birth",name:"birthday",type:"text",placeholder:"Type date of birth",pattern:/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,patternMessage:"01.01.2020"},u={label:"Breed",name:"breed",type:"text",placeholder:"Type breed",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},p={label:"Comments",name:"comments",type:"text",placeholder:"Type comments",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,patternMessage:"Latin only, min 8, max 120",maxLength:120,minLength:8},m={label:"Tittle of ad",name:"title",type:"text",placeholder:"Type name",required:!0,requiredMessage:"Enter your title name",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,patternMessage:"Latin only, min 8, max 120",maxLength:48,minLength:2,zero:!0},h={label:"Price",name:"price",type:"text",placeholder:"Type price",required:!0,requiredMessage:"Enter the price",pattern:/^[1-9][0-9]*$/,zero:!0,patternMessage:"Price can't start with 0"},f={name:"location",type:"text",placeholder:"City, Region",required:!0,requiredMessage:"Enter your city and region, please",pattern:/^([A-Za-z]+)([,][ ][A-Za-z]+)*$/,patternMessage:"Format: Brovary, Kyiv",label:"Location",zero:!0},g={label:"Date of Birth",name:"birthday",type:"text",placeholder:"Type date of birth",required:!0,requiredMessage:"Enter the date of birth",pattern:/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,patternMessage:"01.01.2020"},x={label:"Name pet",name:"name",type:"text",placeholder:"Type pet name",required:!0,requiredMessage:"Enter your pet's name",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},y={label:"Breed",name:"breed",type:"text",placeholder:"Type breed",required:!0,requiredMessage:"Enter your pet's breed",pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Latin only, min 2, max 16",maxLength:16,minLength:2},_={label:"Comments",name:"comments",type:"text",placeholder:"Type comments",required:!0,requiredMessage:"Enter your comment",pattern:/^[A-Za-z0-9\s!@#$%^&*()_+=-`~\\\]\[{}|';:/.,?><]*$/,patternMessage:"Latin only, min 8, max 120",maxLength:120,minLength:8}},2737:function(e,t,r){r.d(t,{p:function(){return i}});var n="ValidationError_error__A4hq2",a=r(3329),i=function(e){var t=e.children,r=e.customStyle,i=void 0===r?{}:r;return(0,a.jsx)("p",{className:n,style:i,children:t})}},2241:function(e,t,r){r.d(t,{z:function(){return l}});var n="Button_disabled__ANlFe",a="Button_transparent__hAA0E",i="Button_white__BF2bO",s="Button_orange__64B20",o=r(3329),l=function(e){var t=e.text,r=e.colorType,l=e.type,c=void 0===l?"button":l,d=e.onClickFunc,u=void 0===d?function(){console.log("Your func!")}:d;switch(r){case"orange":return(0,o.jsx)("button",{type:c,onClick:function(){return u()},className:s,children:t});case"white":return(0,o.jsx)("button",{type:c,onClick:function(){return u()},className:i,children:t});case"transparent":return(0,o.jsx)("button",{type:c,onClick:function(){return u()},className:a,children:t});case"disabled":return(0,o.jsx)("button",{type:c,disabled:!0,className:n,children:t});default:return}}},667:function(e,t,r){r.d(t,{L:function(){return i}});var n=r(5584),a=r(3329),i=function(){return(0,a.jsx)("div",{className:n.Z.center_content,children:(0,a.jsx)("div",{className:n.Z.loader,children:(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:130,height:130,children:(0,a.jsx)("circle",{id:"Oval",fill:"green",cx:"10",cy:"10",r:"10"})})})})}},3539:function(e,t,r){r.d(t,{$:function(){return i}});var n=r(5584),a=r(3329),i=function(e){var t=e.customStyle,r=void 0===t?{}:t;return(0,a.jsx)("div",{className:n.Z.center_content,style:r,children:(0,a.jsx)("div",{className:n.Z.loader,children:(0,a.jsx)("svg",{viewBox:"0 0 20 20",width:30,height:30,children:(0,a.jsx)("circle",{id:"Oval",fill:"green",cx:"10",cy:"10",r:"10"})})})})}},2966:function(e,t,r){r.d(t,{X:function(){return h}});var n=r(1413),a=r(2737),i="AddPetInput_label__Peypu",s="AddPetInput_label__text__0Utcs",o="AddPetInput_label__textarea__IIj66",l="AddPetInput_input__pDpb2",c="AddPetInput_textarea__1NOPV",d="AddPetInput_textarea__wrapper__VvF3q",u="AddPetInput_textarea__wrapperNotices__YRcK3",p="AddPetInput_star__Ay15c",m=r(3329),h=function(e){var t,r=e.register,h=e.errors,f=e.settings,g=e.textarea,x=e.notices,y=void 0!==x&&x,_=f.label,v=f.name,b=f.type,j=f.placeholder,w=f.required,O=f.requiredMessage,P=f.pattern,E=void 0===P?null:P,L=f.patternMessage,k=void 0===L?null:L,M=f.maxLength,N=void 0===M?null:M,C=f.minLength,A=void 0===C?null:C,U=f.zero,I=void 0===U?null:U;return(0,m.jsxs)("label",{className:i,htmlFor:v,children:[(0,m.jsxs)("p",{className:g&&!y?o:s,children:[_,I&&(0,m.jsx)("span",{className:p,children:"*"})]}),g?(0,m.jsx)("div",{className:y?u:d,children:(0,m.jsx)("textarea",(0,n.Z)((0,n.Z)({type:b},r(v,{required:{value:w,message:O},pattern:E&&{value:E,message:k},maxLength:{value:N,message:k},minLength:{value:A,message:k}})),{},{placeholder:j,className:c}))}):(0,m.jsx)("input",(0,n.Z)((0,n.Z)({id:v,type:b},r(v,{required:{value:w,message:O},pattern:E&&{value:E,message:k},maxLength:{value:N,message:k},minLength:{value:A,message:k}})),{},{placeholder:j,className:l})),h[v]&&(0,m.jsx)(a.p,{children:null===(t=h[v])||void 0===t?void 0:t.message})]})}},6874:function(e,t,r){r.r(t),r.d(t,{default:function(){return Zt}});var n,a,i=r(2791),s=r(9434),o=r(5985),l=r(9010),c=r(50),d=function(e){return e.user.error},u=function(e){return e.user.isLoadingUpdate},p=function(e){return e.user.isDisabledFields},m=function(e){return e.user.isAddedPetSuccess},h=function(e){return e.user.user.pets},f=function(e){return e.user.user.userInfo},g=function(e){var t=e.user;return null===t||void 0===t?void 0:t.user.avatarURL},x=function(e){return e.user.loading},y=function(e){return e.user.userLoading},_=r(1134),v=r(3060),b=[{text:"Name",field:"name",pattern:{pattern:/^(?=.{2,16}$)([A-Za-z])*$/,patternMessage:"Invalid name"}},{text:"Email",type:"email",field:"email",pattern:{pattern:/^(?=.{10,63}$)(([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,patternMessage:"Invalid email"}},{text:"Birthday",field:"birthday",pattern:{pattern:/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/,patternMessage:"Invalid date"}},{text:"Phone",field:"phone",pattern:{pattern:/^\+38(0\d{9})$/,patternMessage:"Invalid phone"}},{text:"City",field:"city",pattern:{pattern:/^([A-Za-z]+)([,][ ][A-Za-z]+)*$/,patternMessage:"Example: City, Region"}}],j=r(1413),w=r(9439),O=["title","titleId"];function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function L(e,t){var r=e.title,s=e.titleId,o=E(e,O);return i.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:1339,height:1024,viewBox:"0 0 1339 1024",ref:t,"aria-labelledby":s},o),r?i.createElement("title",{id:s},r):null,n||(n=i.createElement("g",{id:"icomoon-ignore"})),a||(a=i.createElement("path",{d:"M1302.394 32.578c47.262 44.994 49.097 119.782 4.104 167.044l-749.882 787.695c-22.302 23.426-53.232 36.683-85.576 36.683s-63.274-13.257-85.576-36.683l-352.886-370.681c-44.994-47.262-43.155-122.051 4.108-167.044s122.051-43.155 167.045 4.108l267.31 280.788 664.308-697.802c44.993-47.262 119.784-49.101 167.046-4.108z"})))}var k,M,N=i.forwardRef(L),C=(r.p,["title","titleId"]);function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}function U(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function I(e,t){var r=e.title,n=e.titleId,a=U(e,C);return i.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",ref:t,"aria-labelledby":n},a),r?i.createElement("title",{id:n},r):null,k||(k=i.createElement("g",{id:"icomoon-ignore"})),M||(M=i.createElement("path",{d:"M101.395 972.74c-6.964-0.012-13.849-1.47-20.219-4.289-6.369-2.813-12.082-6.927-16.776-12.071-4.779-5.102-8.425-11.156-10.7-17.763s-3.127-13.625-2.501-20.588l12.298-135.228 568.118-567.918 177.544 177.494-567.967 567.865-135.228 12.3c-1.519 0.139-3.043 0.205-4.568 0.199zM844.601 356.887l-177.495-177.494 106.466-106.466c4.662-4.667 10.198-8.369 16.294-10.895 6.090-2.526 12.625-3.826 19.221-3.826s13.125 1.3 19.221 3.826c6.096 2.526 11.631 6.228 16.294 10.895l106.466 106.466c4.662 4.662 8.367 10.198 10.891 16.292 2.53 6.094 3.831 12.625 3.831 19.222s-1.301 13.128-3.831 19.222c-2.524 6.094-6.228 11.63-10.891 16.292l-106.466 106.466z"})))}var Z,F,S,z=i.forwardRef(I),q=(r.p,"UserForm_thumb__Cuo4y"),T="UserForm_avatar__thumb__lEVRn",B="UserForm_error__notify__fAGeh",$="UserForm_user__oLWif",D="UserForm_user__uploadThumb__bKblo",R="UserForm_user__uploadLabel__2F-LK",V="UserForm_user__uploadSubmit__-ty1v",W="UserForm_user__uploadInput__VtnIB",K="UserForm_user__data__rJ7n0",Q="UserForm_user__uploadText__+7x2k",X="UserForm_user__form__BtXgM",G="UserForm_user__meta__CxuzD",H="UserForm_user__avatar__4LEkp",J="UserForm_user__label__TlD5D",Y="UserForm_user__text__QNJ-p",ee="UserForm_user__input__xrJt4",te="UserForm_user__button__L-1eC",re="UserForm_user__button__disabled__WxaVg",ne=r(3329),ae=function(e){var t,r=e.data,n=e.errors,a=e.type,o=void 0===a?"text":a,l=e.register,d=e.field,m=e.text,h=e.setValue,f=e.onSubmit,g=e.pattern,x=g.pattern,y=g.patternMessage,_=(0,i.useState)(!1),v=(0,w.Z)(_,2),b=v[0],O=v[1],P=(0,s.v9)(u),E=(0,s.v9)(p),L=(0,s.I0)();(0,i.useEffect)((function(){P&&O(!1)}),[P]);return(0,ne.jsx)("form",{onSubmit:f,children:(0,ne.jsxs)("label",{htmlFor:r,className:J,children:[(0,ne.jsxs)("p",{className:Y,children:[m,":"]}),b?(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("input",(0,j.Z)((0,j.Z)({},l(d,{pattern:{value:x,message:y}})),{},{className:ee,type:o,name:d,id:r,placeholder:"Your ".concat(d)})),n[d]&&(0,ne.jsx)("div",{className:B,children:null===(t=n[d])||void 0===t?void 0:t.message})]}):(0,ne.jsx)("p",{className:K,children:""===r?"Unknown":r}),b?(0,ne.jsx)("button",{className:te,type:"submit",children:(0,ne.jsx)(N,{fill:"currentColor",width:"20px",height:"20px"})}):(0,ne.jsx)("div",{className:E?re:te,onClick:function(){h(d,r),E||(L((0,c.sh)()),O(!0))},children:(0,ne.jsx)(z,{fill:E?"rgba(17, 17, 17, 0.6)":"currentColor",width:"20px",height:"20px"})})]})})},ie=["title","titleId"];function se(){return se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(this,arguments)}function oe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function le(e,t){var r=e.title,n=e.titleId,a=oe(e,ie);return i.createElement("svg",se({xmlns:"http://www.w3.org/2000/svg",width:970,height:1024,viewBox:"0 0 970 1024",ref:t,"aria-labelledby":n},a),r?i.createElement("title",{id:n},r):null,Z||(Z=i.createElement("g",{id:"icomoon-ignore"})),F||(F=i.createElement("path",{d:"M485.070 415.421c-80.615 0-145.965 65.351-145.965 145.963 0 80.616 65.351 145.969 145.965 145.969s145.967-65.353 145.967-145.969c0-80.612-65.353-145.963-145.967-145.963z"})),S||(S=i.createElement("path",{d:"M361.561 11.211c-62.011 0-112.281 50.27-112.281 112.281v8.020c0 20.375-16.518 36.892-36.893 36.892-116.049 0-210.125 94.076-210.125 210.125v207.081c0 72.014-0.001 128.463 4.288 173.568 4.371 45.967 13.433 83.607 33.767 116.79 21.294 34.751 50.51 63.962 85.258 85.256 33.182 20.334 70.823 29.4 116.793 33.77 45.1 4.285 101.552 4.285 173.562 4.285h138.274c72.014 0 128.469 0 173.568-4.285 45.967-4.371 83.607-13.436 116.79-33.77 34.751-21.294 63.968-50.505 85.261-85.256 20.334-33.183 29.394-70.823 33.765-116.79 4.29-45.105 4.29-101.554 4.29-173.563v-207.086c0-116.049-94.079-210.125-210.13-210.125-20.372 0-36.891-16.517-36.891-36.892v-8.020c0-62.011-50.268-112.281-112.279-112.281h-247.018zM271.737 561.384c0-117.819 95.513-213.331 213.334-213.331 117.823 0 213.335 95.512 213.335 213.331 0 117.825-95.512 213.337-213.335 213.337-117.821 0-213.334-95.512-213.334-213.337zM754.542 426.649c-24.802 0-44.91-20.108-44.91-44.912s20.108-44.913 44.91-44.913c24.808 0 44.916 20.108 44.916 44.913s-20.108 44.912-44.916 44.912z"})))}var ce,de=i.forwardRef(le),ue=(r.p,["title","titleId"]);function pe(){return pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},pe.apply(this,arguments)}function me(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function he(e,t){var r=e.title,n=e.titleId,a=me(e,ue);return i.createElement("svg",pe({fill:"#111111",width:"256px",height:"256px",viewBox:"-2.4 -2.4 28.80 28.80",id:"upload-alt-3","data-name":"Flat Line",xmlns:"http://www.w3.org/2000/svg",className:"icon flat-line",stroke:"#111111",transform:"matrix(1, 0, 0, 1, 0, 0)",ref:t,"aria-labelledby":n},a),r?i.createElement("title",{id:n},r):null,ce||(ce=i.createElement("g",{id:"SVGRepo_bgCarrier",strokeWidth:0})),i.createElement("g",{id:"SVGRepo_iconCarrier"},i.createElement("path",{id:"secondary",d:"M21,13v7a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V13H8a4,4,0,0,0,8,0Z",style:{fill:"#F59256",strokeWidth:1.344}}),i.createElement("polyline",{id:"primary",points:"15 6 12 3 9 6",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}}),i.createElement("line",{id:"primary-2","data-name":"primary",x1:21,y1:13,x2:18,y2:4,style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}}),i.createElement("line",{id:"primary-3","data-name":"primary",x1:3,y1:13,x2:6,y2:4,style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}}),i.createElement("path",{id:"primary-4","data-name":"primary",d:"M12,11V3m4,10a4,4,0,0,1-8,0H3v7a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V13Z",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.344}})))}var fe,ge,xe=i.forwardRef(he),ye=(r.p,function(e){var t=e.avatar,r=e.watch,n=e.register,a=e.onSubmit,o=(0,i.useState)(!1),l=(0,w.Z)(o,2),d=l[0],p=l[1],m=(0,s.v9)(u),h=(0,s.I0)(),f=r("avatar");return(0,i.useEffect)((function(){m&&p(!1)}),[m]),(0,i.useEffect)((function(){f&&f[0]&&(p(!0),h((0,c.sh)()))}),[f]),(0,ne.jsx)("form",{onSubmit:a,children:(0,ne.jsxs)("div",{className:T,children:[(0,ne.jsx)("div",{className:q,children:(0,ne.jsx)("img",{className:H,src:f&&f[0]?URL.createObjectURL(f[0]):t,alt:"default avatar"})}),(0,ne.jsx)("div",{className:D,children:f&&f[0]&&d?(0,ne.jsxs)("button",{type:"submit",className:V,children:[(0,ne.jsx)(xe,{fill:"#F59256",width:23,height:23}),(0,ne.jsx)("p",{className:Q,children:"submit"})]}):(0,ne.jsxs)("div",{children:[(0,ne.jsxs)("label",{htmlFor:"avatar",className:R,children:[(0,ne.jsx)(de,{fill:"#F59256",width:18,height:18}),(0,ne.jsx)("p",{className:Q,children:"edit Photo"})]}),(0,ne.jsx)("input",(0,j.Z)((0,j.Z)({type:"file",name:"avatar"},n("avatar")),{},{id:"avatar",className:W}))]})})]})})}),_e=r(8724),ve=["title","titleId"];function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},be.apply(this,arguments)}function je(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function we(e,t){var r=e.title,n=e.titleId,a=je(e,ve);return i.createElement("svg",be({xmlns:"http://www.w3.org/2000/svg",width:1024,height:1024,viewBox:"0 0 1024 1024",ref:t,"aria-labelledby":n},a),r?i.createElement("title",{id:n},r):null,fe||(fe=i.createElement("g",{id:"icomoon-ignore"})),ge||(ge=i.createElement("path",{strokeLinejoin:"miter",strokeLinecap:"butt",strokeMiterlimit:4,strokeWidth:56.8889,d:"M870.679 373.837l0.011-0.010c4.506-4.507 11.816-4.515 16.338 0.005l89.572 89.57c27.881 27.884 27.881 73.312 0 101.196l-89.572 89.568c-2.27 2.27-5.171 3.391-8.175 3.391-2.992 0-5.899-1.121-8.169-3.391h-0.006c-4.511-4.511-4.511-11.822 0-16.327l112.27-112.283h-548.949c-6.385 0-11.556-5.171-11.556-11.555s5.171-11.556 11.556-11.556h548.949l-112.27-112.282c-4.511-4.508-4.511-11.818 0-16.326zM695.558 783.997v80.003c0 72.516-59.039 131.556-131.558 131.556h-402c-72.517 0-131.556-59.039-131.556-131.556v-704c0-72.517 59.038-131.556 131.556-131.556h402c72.519 0 131.558 59.038 131.558 131.556v80c0 6.384-5.171 11.556-11.56 11.556-6.383 0-11.554-5.172-11.554-11.556v-80c0-59.819-48.623-108.444-108.444-108.444h-402c-59.819 0-108.445 48.626-108.445 108.444v704c0 59.819 48.625 108.447 108.445 108.447h402c59.821 0 108.444-48.629 108.444-108.447v-80.003c0-6.383 5.171-11.554 11.554-11.554 6.389 0 11.56 5.171 11.56 11.554z"})))}var Oe=i.forwardRef(we),Pe=(r.p,"LogOut_LogOut__s7gfT"),Ee="LogOut_LogOut__text__IcLV-",Le=function(){var e=(0,s.I0)();return(0,ne.jsxs)("button",{type:"button",onClick:function(){return e((0,_e.kS)())},className:Pe,children:[(0,ne.jsx)(Oe,{fill:"#F59256",width:18,height:18}),(0,ne.jsx)("p",{className:Ee,children:"Log Out"})]})},ke=function(){return ke=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ke.apply(this,arguments)};var Me=function(e){var t=e.animate,r=e.animateBegin,n=e.backgroundColor,a=e.backgroundOpacity,s=e.baseUrl,o=e.children,l=e.foregroundColor,c=e.foregroundOpacity,d=e.gradientRatio,u=e.gradientDirection,p=e.uniqueKey,m=e.interval,h=e.rtl,f=e.speed,g=e.style,x=e.title,y=e.beforeMask,_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["animate","animateBegin","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","gradientDirection","uniqueKey","interval","rtl","speed","style","title","beforeMask"]),v=p||Math.random().toString(36).substring(6),b=v+"-diff",j=v+"-animated-diff",w=v+"-aria",O=h?{transform:"scaleX(-1)"}:null,P="0; "+m+"; 1",E=f+"s",L="top-bottom"===u?"rotate(90)":void 0;return(0,i.createElement)("svg",ke({"aria-labelledby":w,role:"img",style:ke(ke({},g),O)},_),x?(0,i.createElement)("title",{id:w},x):null,y&&(0,i.isValidElement)(y)?y:null,(0,i.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+s+"#"+b+")",style:{fill:"url("+s+"#"+j+")"}}),(0,i.createElement)("defs",null,(0,i.createElement)("clipPath",{id:b},o),(0,i.createElement)("linearGradient",{id:j,gradientTransform:L},(0,i.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:a},t&&(0,i.createElement)("animate",{attributeName:"offset",values:-d+"; "+-d+"; 1",keyTimes:P,dur:E,repeatCount:"indefinite",begin:r})),(0,i.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:c},t&&(0,i.createElement)("animate",{attributeName:"offset",values:-d/2+"; "+-d/2+"; "+(1+d/2),keyTimes:P,dur:E,repeatCount:"indefinite",begin:r})),(0,i.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:a},t&&(0,i.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+d),keyTimes:P,dur:E,repeatCount:"indefinite",begin:r})))))};Me.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,gradientDirection:"left-right",id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading...",beforeMask:null};var Ne=function(e){return e.children?(0,i.createElement)(Me,ke({},e)):(0,i.createElement)(Ce,ke({},e))},Ce=function(e){return(0,i.createElement)(Ne,ke({viewBox:"0 0 476 124"},e),(0,i.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),(0,i.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),(0,i.createElement)("circle",{cx:"20",cy:"20",r:"20"}))},Ae=Ne,Ue=r(4805),Ie=function(e){var t=(0,Ue.useMediaQuery)({query:"(min-width: 768px)"}),r=(0,Ue.useMediaQuery)({query:"(min-width: 1280px)"});return(0,ne.jsx)(ne.Fragment,{children:r?(0,ne.jsxs)(Ae,(0,j.Z)((0,j.Z)({speed:1.5,width:411,height:470,viewBox:"0 0 411 470",backgroundColor:"#ffffff",foregroundColor:"#f5935690"},e),{},{children:[(0,ne.jsx)("circle",{x:"",y:"",cx:"210",cy:"103",r:"100"}),(0,ne.jsx)("rect",{x:"15",y:"220",rx:"10",ry:"10",width:"380",height:"35"}),(0,ne.jsx)("rect",{x:"15",y:"265",rx:"10",ry:"10",width:"380",height:"35"}),(0,ne.jsx)("rect",{x:"15",y:"310",rx:"10",ry:"10",width:"380",height:"35"}),(0,ne.jsx)("rect",{x:"15",y:"355",rx:"10",ry:"10",width:"380",height:"35"}),(0,ne.jsx)("rect",{x:"15",y:"400",rx:"10",ry:"10",width:"380",height:"35"})]})):t?(0,ne.jsxs)(Ae,(0,j.Z)((0,j.Z)({speed:1.5,width:650,height:220,viewBox:"0 0 2500 900",backgroundColor:"#ffffff",foregroundColor:"#f5935690"},e),{},{children:[(0,ne.jsx)("circle",{x:"",y:"",cx:"2050",cy:"410",r:"370"}),(0,ne.jsx)("rect",{x:"100",y:"50",rx:"40",ry:"40",width:"1300",height:"120"}),(0,ne.jsx)("rect",{x:"100",y:"200",rx:"40",ry:"40",width:"1300",height:"120"}),(0,ne.jsx)("rect",{x:"100",y:"350",rx:"40",ry:"40",width:"1300",height:"120"}),(0,ne.jsx)("rect",{x:"100",y:"500",rx:"40",ry:"40",width:"1300",height:"120"}),(0,ne.jsx)("rect",{x:"100",y:"650",rx:"40",ry:"40",width:"1300",height:"120"})]})):(0,ne.jsxs)(Ae,(0,j.Z)((0,j.Z)({speed:1.5,width:255,height:470,viewBox:"0 0 476 900",backgroundColor:"#ffffff",foregroundColor:"#f5935690"},e),{},{children:[(0,ne.jsx)("circle",{x:"90",y:"",cx:"250",cy:"160",r:"160"}),(0,ne.jsx)("rect",{x:"0",y:"400",rx:"20",ry:"20",width:"476",height:"60"}),(0,ne.jsx)("rect",{x:"0",y:"500",rx:"20",ry:"20",width:"476",height:"60"}),(0,ne.jsx)("rect",{x:"0",y:"600",rx:"20",ry:"20",width:"476",height:"60"}),(0,ne.jsx)("rect",{x:"0",y:"700",rx:"20",ry:"20",width:"476",height:"60"}),(0,ne.jsx)("rect",{x:"0",y:"800",rx:"20",ry:"20",width:"476",height:"60"})]}))})},Ze=function(e){var t=e.formData,r=t.userInfo,n=r.name,a=r.email,i=r.birthday,o=r.phone,c=r.city,d=t.userAvatar,u=t.isUserLoading,p=t.isCurrentLoading,m=(0,_.cI)({}),h=m.register,f=m.handleSubmit,g=m.watch,x=m.setValue,y=m.formState.errors,j=(0,s.I0)(),w={name:n,email:a,birthday:i,phone:o,city:c},O=function(e){if(e){var t=(0,v.k)(e);j((0,l.Al)(t))}};return(0,ne.jsxs)("div",{className:$,children:[(0,ne.jsx)("div",{className:X,children:u||p?(0,ne.jsx)(Ie,{}):(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(ye,{onSubmit:f(O),watch:g,avatar:d,register:h}),(0,ne.jsx)("div",{className:G,children:b.map((function(e,t){return(0,ne.jsx)(ae,{onSubmit:f(O),data:Object.values(w)[t],text:e.text,type:e.type,field:e.field,errors:y,pattern:e.pattern,register:h,setValue:x},t)}))})]})}),!u&&!p&&(0,ne.jsx)(Le,{})]})},Fe=r(5987),Se=r(7475),ze=r(9479),qe="CardImg_card__imgThumb__ym4L0",Te=function(e){var t=e.petImg,r=(0,Ue.useMediaQuery)({query:"(min-width: 768px)"});return(0,ne.jsx)("div",{className:qe,children:r?(0,ne.jsx)("img",{src:t||ze,alt:"big cat"}):(0,ne.jsx)("img",{src:t||ze,alt:"small cat"})})},Be=r(4886),$e=r(3539),De={iconThumb:"TrashButton_iconThumb__fU2hj"},Re=function(e){var t=e.id,r=e.onDeletePet,n=e.isPetsLoading,a=(0,Ue.useMediaQuery)({query:"(min-width: 768px)"});return(0,ne.jsx)(ne.Fragment,{children:a?(0,ne.jsx)("button",{id:t,type:"button",className:De.iconThumb,onClick:function(e){return r(e)},children:n?(0,ne.jsx)($e.$,{}):(0,ne.jsx)(Be.r,{className:De.trashIcon,fill:"currentColor",width:24,height:24})}):(0,ne.jsx)("button",{id:t,onClick:function(e){return r(e)},type:"button",className:De.iconThumb,children:n?(0,ne.jsx)($e.$,{}):(0,ne.jsx)(Be.r,{className:De.trashIcon,fill:"currentColor",width:15,height:15})})})},Ve="CardMarkUp_card__meta__UWUbX",We="CardMarkUp_card__metaInfo__zK6Ee",Ke="CardMarkUp_card__metaHeading__mVitE",Qe="CardMarkUp_card__metaText__2fP+p",Xe=function(e){var t,r=e.cardData,n=e.id;return(0,ne.jsx)("ul",{className:Ve,children:null===(t=Object.entries(r))||void 0===t?void 0:t.map((function(e,t){var r=(0,w.Z)(e,2),a=r[0],i=r[1];return(0,ne.jsx)("li",{id:n,className:We,children:(0,ne.jsxs)("p",{className:Qe,children:[(0,ne.jsxs)("span",{className:Ke,children:[a," :"]}),"\xa0",i]})},"".concat(n,"+ ").concat(t))}))})},Ge="Card_card__list__r4wG2",He="Card_card__item__QTfBi",Je=["avatarURL","_id","owner","createdAt","updatedAt"],Ye=function(e){var t=e.cardData,r=t.userPets,n=t.onDeletePet,a=t.isPetsLoading;return(0,ne.jsx)(Se.W,{children:(0,ne.jsx)("ul",{className:Ge,children:null===r||void 0===r?void 0:r.map((function(e){var t=e.avatarURL,r=e._id,i=(e.owner,e.createdAt),s=(e.updatedAt,(0,Fe.Z)(e,Je));return(0,ne.jsxs)("li",{className:He,children:[(0,ne.jsx)(Te,{petImg:t}),(0,ne.jsx)(Re,{id:r,onDeletePet:n,isPetsLoading:a}),(0,ne.jsx)(Xe,{cardData:s,id:r})]},i)}))})})},et=function(e){var t=e.title,r=e.className;return(0,ne.jsx)("h3",{className:"".concat(r),children:t})},tt=r(9869),rt=r(3887),nt=r(2241),at="Buttons_wrapper__qijK+",it="Buttons_submitBtn__ubGsy",st=function(e){var t=e.onTogglePage,r=e.isFirstPage,n=e.onSubmit,a=e.onCloseModal;return(0,ne.jsxs)("div",{className:at,children:[r&&(0,ne.jsx)(nt.z,{text:"cancel",colorType:"white",type:"button",onClickFunc:a}),(0,ne.jsx)(nt.z,{text:r?"next":"back",colorType:"orange",type:"button",onClickFunc:t}),!r&&(0,ne.jsx)("button",{type:"submit",onSubmit:n,className:it,children:"Done"})]})},ot=r(2966),lt=r(6774),ct=function(e){var t=e.register,r=e.errors;return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(ot.X,{register:t,errors:r,settings:lt.a}),(0,ne.jsx)(ot.X,{register:t,errors:r,settings:lt.vT}),(0,ne.jsx)(ot.X,{register:t,errors:r,settings:lt.ab})]})},dt=r(2737),ut=r(4117),pt="AddPetFormSecondPage_petUploadLabel__115uv",mt="AddPetFormSecondPage_petUploadLabel__text__M0ZY6",ht="AddPetFormSecondPage_crossWrapper__Oo2fs",ft="AddPetFormSecondPage_uploadThumb__7DLkc",gt="AddPetFormSecondPage_uploadInput__MkBk0",xt="AddPetFormSecondPage_image__EtDR8",yt=function(e){var t=e.register,r=e.watch,n=e.errors,a=r("avatar");return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)("div",{className:ft,children:(0,ne.jsxs)("label",{htmlFor:"petUpload",className:pt,children:[(0,ne.jsx)("p",{className:mt,children:"Add photo and some comments"}),(0,ne.jsx)("div",{className:ht,children:a[0]?(0,ne.jsx)("img",{className:xt,src:URL.createObjectURL(a[0]),alt:"poster"}):(0,ne.jsx)(ut.r,{width:48,height:48,stroke:"rgba(17, 17, 17, 0.6)"})}),(0,ne.jsx)("input",(0,j.Z)((0,j.Z)({type:"file"},t("avatar",{required:!0})),{},{id:"petUpload",placeholder:"Type name pet",className:gt})),n.avatar&&(0,ne.jsx)(dt.p,{children:"Add an image"})]})}),(0,ne.jsx)(ot.X,{register:t,textarea:!0,errors:n,settings:lt.Ld})]})},_t="AddPetForm_form__ixt61",vt=function(e){var t=e.onCloseModal,r=(0,_.cI)({mode:"onBlur",defaultValues:{birthday:"01.01.2023",avatar:""}}),n=r.register,a=r.handleSubmit,o=r.watch,c=r.formState,d=c.errors,u=c.isValid,p=(0,s.I0)(),m=(0,i.useState)(!0),h=(0,w.Z)(m,2),f=h[0],g=h[1],x=function(e){if(e){var r=(0,v.k)(e);p((0,l.Ab)(r))}t()};return(0,ne.jsxs)("form",{onSubmit:a(x),autoComplete:"off",className:_t,children:[f?(0,ne.jsx)(ct,{errors:d,register:n}):(0,ne.jsx)(yt,{errors:d,watch:o,register:n}),(0,ne.jsx)(st,{onSubmit:x,isFirstPage:f,onTogglePage:function(){!u&&f||g((function(e){return!e}))},onCloseModal:t})]})},bt=r(667),jt="UserPage_user__wrapper__UGg+V",wt="UserPage_section__VLRyM",Ot="UserPage_desktop__7aHly",Pt="UserPage_tablet__6fJXK",Et="UserPage_titleUser__FfJ0l",Lt="UserPage_titleUpload__cPlCE",kt="UserPage_title__+I+vh",Mt="UserPage_addPetModalCard__D6TNx",Nt="UserPage_addPetModalWrapper__D1Fjc",Ct="UserPage_addPetModalSuggestion__J64sm",At=function(e){var t=e.isPetsLoading,r=(0,i.useState)(!1),n=(0,w.Z)(r,2),a=n[0],s=n[1],o=(0,Ue.useMediaQuery)({query:"(min-width: 768px)"}),l=function(){s(!1),document.body.style.overflow="unset"};(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&l()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);return(0,ne.jsxs)("div",{className:Mt,children:[o&&(0,ne.jsx)("p",{className:Ct,children:"You don't have any pets yet"}),(0,ne.jsx)("div",{className:Nt,children:t?(0,ne.jsx)(bt.L,{}):(0,ne.jsxs)(rt.u,{btnType:"empty",isShowModal:a,setIsShowModal:function(){s(!0),"undefined"!=typeof window&&window.document&&(document.body.style.overflow="hidden")},handleBackdropClick:function(e){e.currentTarget===e.target&&l()},children:[(0,ne.jsx)(et,{title:"Add Pet",className:Lt}),(0,ne.jsx)(vt,{onCloseModal:l})]})})]})},Ut=function(){var e=(0,i.useState)(!1),t=(0,w.Z)(e,2),r=t[0],n=t[1],a=function(){n(!1),document.body.style.overflow="unset"};(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);return(0,ne.jsxs)(rt.u,{btnType:"circle-info",isShowModal:r,setIsShowModal:function(){n(!0),"undefined"!=typeof window&&window.document&&(document.body.style.overflow="hidden")},handleBackdropClick:function(e){e.currentTarget===e.target&&a()},children:[(0,ne.jsx)(et,{title:"Add Pet",className:Lt}),(0,ne.jsx)(vt,{onCloseModal:a})]})},It=function(e){var t=e.isUserPets,r=e.isPetsLoading;return(0,ne.jsxs)("div",{className:Pt,children:[t&&(0,ne.jsx)(et,{title:"My pets:",className:kt}),t?(0,ne.jsx)(Ut,{}):(0,ne.jsx)(At,{isPetsLoading:r})]})},Zt=function(){var e=(0,s.I0)(),t=(0,s.v9)(f),r=(0,s.v9)(g),n=(0,s.v9)(h),a=(0,s.v9)(x),u=(0,s.v9)(y),p=(0,s.v9)(tt.Vc),_=(0,s.v9)(d),v=(0,s.v9)(m);(0,i.useEffect)((function(){e((0,l.is)())}),[e]),(0,i.useEffect)((function(){v&&(o.Am.success("Your pet successfully added."),e((0,c.$N)())),_&&o.Am.error("Oops, something went wrong, please try again.")}),[e,v,_]);var b=!(null===n||void 0===n||!n.length),j={userInfo:t,userAvatar:r,isUserLoading:u,isCurrentLoading:p},w={userPets:n,onDeletePet:function(t){var r=t.currentTarget.id;e((0,l.y1)(r))},isPetsLoading:a};return(0,ne.jsxs)("div",{className:wt,children:[(0,ne.jsxs)("div",{className:jt,children:[(0,ne.jsx)(et,{title:"My information:",className:Et}),(0,ne.jsx)(Ze,{formData:j})]}),(0,ne.jsxs)("div",{className:Ot,children:[(0,ne.jsx)(It,{isUserPets:b,isPetsLoading:a}),(0,ne.jsx)(Ye,{cardData:w})]})]})}},3060:function(e,t,r){r.d(t,{k:function(){return n}});var n=function(e){for(var t=new FormData,r=Object.keys(e),n=Object.values(e),a=0;a<r.length;a++)"avatar"!==r[a]?n[a].trim()&&t.append(r[a],n[a]):void 0!==n[a][0]&&t.append(r[a],n[a][0]);return t}},5584:function(e,t){t.Z={center_content:"Spinner_center_content__023Ih",loader:"Spinner_loader__tU4pJ",rotate:"Spinner_rotate__Z+MQH","loader-dash":"Spinner_loader-dash__pUyfv"}},9479:function(e,t,r){e.exports=r.p+"static/media/anonymousCat.6457419bd698bcac29a6.png"}}]);
//# sourceMappingURL=874.cf0d1c8d.chunk.js.map