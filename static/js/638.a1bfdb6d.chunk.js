"use strict";(self.webpackChunkpets_support=self.webpackChunkpets_support||[]).push([[638],{4117:function(e,t,r){r.d(t,{r:function(){return d}});var a,l,n=r(2791),i=["title","titleId"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function c(e,t){var r=e.title,c=e.titleId,d=o(e,i);return n.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:985,height:1024,viewBox:"0 0 985 1024",ref:t,"aria-labelledby":c},d),r?n.createElement("title",{id:c},r):null,a||(a=n.createElement("g",{id:"icomoon-ignore"})),l||(l=n.createElement("path",{fill:"none",strokeLinejoin:"miter",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:39.3846,stroke:"#000",d:"M492.308 988.134v-478.326M492.308 509.808v-478.328M492.308 509.808h472.615M492.308 509.808h-472.615"})))}var d=n.forwardRef(c);r.p},2241:function(e,t,r){r.d(t,{z:function(){return o}});r(2791);var a="Button_disabled__ANlFe",l="Button_transparent__hAA0E",n="Button_white__BF2bO",i="Button_orange__64B20",s=r(3329),o=function(e){var t=e.text,r=e.colorType,o=e.type,c=void 0===o?"button":o,d=e.onClickFunc,p=void 0===d?function(){console.log("Your func!")}:d;switch(r){case"orange":return(0,s.jsx)("button",{type:c,onClick:function(){return p()},className:i,children:t});case"white":return(0,s.jsx)("button",{type:c,onClick:function(){return p()},className:n,children:t});case"transparent":return(0,s.jsx)("button",{type:c,onClick:function(){return p()},className:l,children:t});case"disabled":return(0,s.jsx)("button",{type:c,disabled:!0,className:a,children:t});default:return}}},3887:function(e,t,r){r.d(t,{u:function(){return u}});var a=r(9439),l=r(2791),n="Modal_modal__CMEcy",i="Modal_backdrop__5EyYP",s="Modal_close__Q8XVb",o="Modal_circle__xZXYX",c="Modal_long__FO-7E",d="Modal_info__hjSwW",p=r(3329),u=function(e){var t=e.children,r=e.btnType,u=(0,l.useState)(!1),m=(0,a.Z)(u,2),h=m[0],f=m[1],x=function(){f(!1)};(0,l.useEffect)((function(){var e=function(e){"Escape"===e.code&&x()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]);var _=function(e){e.currentTarget===e.target&&x()};switch(r){case"circle":return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:o,onClick:function(){return f(!0)},children:(0,p.jsx)("span",{children:"Add pet"})}),h&&(0,p.jsx)("div",{onClick:_,className:i,children:(0,p.jsxs)("div",{className:n,children:[(0,p.jsx)("div",{onClick:_,className:s}),t]})})]});case"long":return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:c,onClick:function(){return f(!0)},children:"Learn more"}),h&&(0,p.jsx)("div",{onClick:_,className:i,children:(0,p.jsxs)("div",{className:n,children:[(0,p.jsx)("div",{onClick:_,className:s}),t]})})]});case"circle-info":return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:d,onClick:function(){return f(!0)},children:(0,p.jsx)("span",{children:"Add pet"})}),h&&(0,p.jsx)("div",{onClick:_,className:i,children:(0,p.jsxs)("div",{className:n,children:[(0,p.jsx)("div",{onClick:_,className:s}),t]})})]})}}},9850:function(e,t,r){r.d(t,{D:function(){return n}});r(2791);var a="Title_title__6O6bt",l=r(3329),n=function(e){var t=e.text;return(0,l.jsx)("h2",{className:a,children:t})}},1638:function(e,t,r){r.r(t),r.d(t,{default:function(){return me}});var a,l,n=r(9850),i="NoticesHeading_wrapper__ngJhO",s=r(3329),o=function(){return(0,s.jsx)("div",{className:i,children:(0,s.jsx)(n.D,{text:"Find your favorite pet"})})},c=r(2791),d="Input_wrap__Ghdrp",p="Input_input__UX2Is",u="Input_btn__zlDn-",m=function(){return(0,s.jsxs)("div",{className:d,children:[(0,s.jsx)("input",{className:p,type:"text",placeholder:"Search"}),(0,s.jsx)("button",{className:u})]})},h="NoticesSearch_wrapper__e9TlY",f=function(){return(0,s.jsx)("div",{className:h,children:(0,s.jsx)(m,{})})},x=r(2241),_="NoticesCategories_wrapper__2BKoU",j=function(e){switch(e.categories){case"short":return(0,s.jsxs)("ul",{className:_,children:[(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"lost/found",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"in good hands",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"sell",colorType:"white"})})]});case"long":return(0,s.jsxs)("ul",{className:_,children:[(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"lost/found",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"in good hands",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"sell",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"favorite ads",colorType:"white"})}),(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"my ads",colorType:"white"})})]});default:return}},g=r(3887),y=r(9439),N=r(887),b=r(1413),v={heading:"NoticesAddPetForm_heading__9fKo4",paragraph:"NoticesAddPetForm_paragraph__Du8uQ",input:"NoticesAddPetForm_input__8wsPA",label:"NoticesAddPetForm_label__6UmXZ",label__text:"NoticesAddPetForm_label__text__1gb1r",radioWraper:"NoticesAddPetForm_radioWraper__7JJNt",radioLabel:"NoticesAddPetForm_radioLabel__+cF8M",radioP:"NoticesAddPetForm_radioP__g+xJJ",customLabel:"NoticesAddPetForm_customLabel__oGV1T",customInput:"NoticesAddPetForm_customInput__TKkmu",customSpan:"NoticesAddPetForm_customSpan__SI+L2",crossWrapper:"NoticesAddPetForm_crossWrapper__Id8gp",buttonWrap:"NoticesAddPetForm_buttonWrap__JNRRZ"},C=function(e){var t=e.register,r=e.nextPage,a=e.onCloseModal;return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:v.heading,children:"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur "}),(0,s.jsx)(j,{categories:"short"}),(0,s.jsxs)("label",{htmlFor:"petTitle",className:v.label,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Tittle of ad"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({},t("petTitle")),{},{type:"text",id:"petTitle",placeholder:"Type name pet",className:v.input}))]}),(0,s.jsxs)("label",{htmlFor:"petName",className:v.label,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Name pet"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"text"},t("petName")),{},{id:"petName",placeholder:"Type name pet",className:v.input}))]}),(0,s.jsxs)("label",{htmlFor:"petBirth",className:v.label,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Date of birth"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"text"},t("petBirth")),{},{id:"petBirth",placeholder:"Type date of birth",className:v.input}))]}),(0,s.jsxs)("label",{htmlFor:"petname",className:v.label,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Breed"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"text"},t("petBreed")),{},{id:"petBreed",placeholder:"Type breed",className:v.input}))]}),(0,s.jsxs)("div",{className:v.buttonWrap,children:[(0,s.jsx)(x.z,{type:"button",text:"Next",colorType:"orange",onClickFunc:r}),(0,s.jsx)(x.z,{type:"button",text:"Cancel",colorType:"white",onClickFunc:a})]})]})},w=["title","titleId"];function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},E.apply(this,arguments)}function O(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function F(e,t){var r=e.title,n=e.titleId,i=O(e,w);return c.createElement("svg",E({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},i),r?c.createElement("title",{id:n},r):null,a||(a=c.createElement("g",{filter:"url(#filter0_ii_107_8598)"},c.createElement("g",{filter:"url(#filter1_ii_107_8598)"},c.createElement("path",{d:"M25.849 2C24.7444 2 23.849 2.89543 23.849 4V5.01246C23.849 6.11703 24.7444 7.01246 25.849 7.01246H29.3538L22.0977 14.1752C20.0617 12.8659 17.6348 12.106 15.029 12.106C7.83368 12.106 2 17.9021 2 25.0524C1.99997 32.2028 7.83368 38 15.029 38C22.2244 38 28.0569 32.2028 28.0569 25.0524C28.0569 22.3345 27.2146 19.8123 25.7746 17.7297L32.9089 10.6401V14.0625C32.9089 15.1671 33.8043 16.0625 34.9089 16.0625H35.9529C37.0574 16.0625 37.9528 15.1674 37.9557 14.0629C37.9642 10.8101 37.9893 7.24664 37.9975 3.99927C38.0002 2.89485 37.1048 2 36.0004 2H25.849ZM15.029 17.3173C19.3283 17.3173 22.8129 20.7801 22.8129 25.0524C22.8129 29.3248 19.3283 32.7888 15.029 32.7888C10.7298 32.7888 7.244 29.3248 7.244 25.0524C7.244 20.7801 10.7297 17.3173 15.029 17.3173Z",fill:"#23C2EF"})))),l||(l=c.createElement("defs",null,c.createElement("filter",{id:"filter0_ii_107_8598",x:-1,y:-3,width:41,height:45,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dy:-3}),c.createElement("feGaussianBlur",{stdDeviation:2}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8598"}),c.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dx:-1,dy:2}),c.createElement("feGaussianBlur",{stdDeviation:1.5}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),c.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8598",result:"effect2_innerShadow_107_8598"})),c.createElement("filter",{id:"filter1_ii_107_8598",x:1,y:-1,width:36.9976,height:41,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dy:-3}),c.createElement("feGaussianBlur",{stdDeviation:2}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8598"}),c.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dx:-1,dy:2}),c.createElement("feGaussianBlur",{stdDeviation:1.5}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),c.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8598",result:"effect2_innerShadow_107_8598"})))))}var k,B,I=c.forwardRef(F),P=(r.p,["title","titleId"]);function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},S.apply(this,arguments)}function M(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function A(e,t){var r=e.title,a=e.titleId,l=M(e,P);return c.createElement("svg",S({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),r?c.createElement("title",{id:a},r):null,k||(k=c.createElement("g",{filter:"url(#filter0_ii_107_8596)"},c.createElement("path",{d:"M20.0001 0C12.9046 0 7.15137 5.75327 7.15137 12.8487C7.15137 18.5312 10.8423 23.3529 15.9567 25.048C16.8665 25.3495 17.5532 26.1572 17.5532 27.1157V27.6007C17.5532 28.7052 16.6578 29.6007 15.5532 29.6007H14.0427C12.9381 29.6007 12.0427 30.4961 12.0427 31.6007V32.492C12.0427 33.5966 12.9381 34.492 14.0427 34.492H15.5532C16.6577 34.492 17.5532 35.3874 17.5532 36.492V38C17.5532 39.1046 18.4486 40 19.5532 40H20.4445C21.5491 40 22.4445 39.1046 22.4445 38V36.492C22.4445 35.3874 23.3399 34.492 24.4445 34.492H25.955C27.0595 34.492 27.955 33.5966 27.955 32.492V31.6007C27.955 30.4961 27.0595 29.6007 25.955 29.6007H24.4445C23.34 29.6007 22.4445 28.7052 22.4445 27.6007V25.4647C28.3705 24.3224 32.8488 19.1079 32.8488 12.8487C32.8488 5.75327 27.0956 0 20.0001 0ZM20.0001 5.10927C24.2745 5.10927 27.7396 8.57437 27.7396 12.8487C27.7396 17.1231 24.2745 20.5882 20.0001 20.5882C15.7257 20.5882 12.2606 17.1231 12.2606 12.8487C12.2606 8.57437 15.7257 5.10927 20.0001 5.10927Z",fill:"#FF8787"}))),B||(B=c.createElement("defs",null,c.createElement("filter",{id:"filter0_ii_107_8596",x:-1,y:-3,width:41,height:45,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),c.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dy:-3}),c.createElement("feGaussianBlur",{stdDeviation:2}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),c.createElement("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_107_8596"}),c.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),c.createElement("feOffset",{dx:-1,dy:2}),c.createElement("feGaussianBlur",{stdDeviation:1.5}),c.createElement("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),c.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.57 0"}),c.createElement("feBlend",{mode:"normal",in2:"effect1_innerShadow_107_8596",result:"effect2_innerShadow_107_8596"})))))}var T,Z,L=c.forwardRef(A),W=(r.p,r(4117)),G=function(e){var t=e.register,r=e.onSubmit,a=e.downPage;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:v.radioP,children:"The sex*:"}),(0,s.jsxs)("div",{className:v.radioWraper,children:[(0,s.jsxs)("label",{htmlFor:"petMale",className:v.radioLabel,children:[(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"radio"},t("petMale")),{},{id:"petMale",className:v.customInput})),(0,s.jsx)(I,{}),(0,s.jsx)("span",{className:v.customSpan,children:"Male"})]}),(0,s.jsxs)("label",{htmlFor:"petFeMale",className:v.radioLabel,children:[(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"radio"},t("petFeMale")),{},{id:"petFeMale",className:v.customInput})),(0,s.jsx)(L,{}),(0,s.jsx)("span",{className:v.customSpan,children:"Female"})]})]})]}),(0,s.jsxs)("label",{htmlFor:"petLocation",className:v.label,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Location*:"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"text"},t("petLocation")),{},{id:"petLocation",placeholder:"Type name pet",className:v.input}))]}),(0,s.jsxs)("label",{htmlFor:"petPrice",className:v.label,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Price*:"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"text"},t("petPrice")),{},{id:"petPrice",placeholder:"Type date of birth",className:v.input}))]}),(0,s.jsxs)("label",{htmlFor:"petImg",className:v.customLabel,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Load the pets image"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"file"},t("petImg")),{},{id:"petImg",className:v.customInput})),(0,s.jsx)("div",{className:v.crossWrapper,children:(0,s.jsx)(W.r,{width:48,height:48,fill:"gba(17, 17, 17, 0.6)"})})]}),(0,s.jsxs)("label",{htmlFor:"comments",className:v.label,children:[(0,s.jsx)("p",{className:v.paragraph,children:"Comments"}),(0,s.jsx)("input",(0,b.Z)((0,b.Z)({type:"text"},t("comments")),{},{id:"comments",placeholder:"Type breed",className:v.input}))]}),(0,s.jsxs)("div",{className:v.buttonWrap,children:[(0,s.jsx)("button",{type:"submit",onSubmit:r,children:"Done"}),(0,s.jsx)(x.z,{type:"button",text:"Back",colorType:"white",onClickFunc:a})]})]})},z=function(){var e=(0,N.cI)(),t=e.handleSubmit,r=e.register,a=(0,c.useState)(!0),l=(0,y.Z)(a,2),n=l[0],i=l[1],o=function(){i((function(e){return!e}))},d=function(e){var t={petTitle:e.petTitle,petName:e.petName,petBirth:e.petBirth,petBreed:e.petBreed,petMale:e.petMale,petFeMale:e.petFeMale,petLocation:e.petLocation,petPrice:e.petPrice,petImg:e.petImg,comments:e.comments};console.log("data",t)};return(0,s.jsx)("div",{className:v.wrapper,children:(0,s.jsx)("form",{onSubmit:t(d),children:n?(0,s.jsx)(C,{register:r,nextPage:o,onCloseModal:function(e){console.log("close")}}):(0,s.jsx)(G,{register:r,downPage:o,onSubmit:d})})})},D="NoticesAddPet_heading__DA1jP",U=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(g.u,{textBtn:"Add pet",btnType:"circle",children:[(0,s.jsx)("h2",{className:D,children:"Add pet"}),(0,s.jsx)(z,{})]})})},V="NoticesItems_wrapper__pJO0r",R="NoticesItems_heading__PUam1",H="NoticesItems_paragraph__rLVPO",J="NoticesItems_list__C1y0G",K="NoticesItems_item__1B8I3",X="NoticesItems_desc__KHwW3",Y="NoticesItems_pctWrap__Rq1Wd",Q="NoticesItems_pictures__sd0Ux",q="NoticesItems_btnContainer__OXotV",$="NoticesItems_svgWrap__JadB0",ee="NoticesItems_categoriesWrap__KG9Z3",te="NoticesItems_categories__l+ga0",re=["title","titleId"];function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},ae.apply(this,arguments)}function le(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function ne(e,t){var r=e.title,a=e.titleId,l=le(e,re);return c.createElement("svg",ae({width:26,height:24,viewBox:"0 0 26 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},l),r?c.createElement("title",{id:a},r):null,T||(T=c.createElement("g",{filter:"url(#filter0_b_5002_251)"},c.createElement("path",{d:"M7 1C3.6868 1 1 3.73373 1 7.10648C1 9.8291 2.05 16.2909 12.3856 22.8229C12.5707 22.9387 12.7833 23 13 23C13.2167 23 13.4293 22.9387 13.6144 22.8229C23.95 16.2909 25 9.8291 25 7.10648C25 3.73373 22.3132 1 19 1C15.6868 1 13 4.70089 13 4.70089C13 4.70089 10.3132 1 7 1Z",fill:"white",fillOpacity:.6}),c.createElement("path",{d:"M7 1C3.6868 1 1 3.73373 1 7.10648C1 9.8291 2.05 16.2909 12.3856 22.8229C12.5707 22.9387 12.7833 23 13 23C13.2167 23 13.4293 22.9387 13.6144 22.8229C23.95 16.2909 25 9.8291 25 7.10648C25 3.73373 22.3132 1 19 1C15.6868 1 13 4.70089 13 4.70089C13 4.70089 10.3132 1 7 1Z",stroke:"#F59256",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),Z||(Z=c.createElement("defs",null,c.createElement("filter",{id:"filter0_b_5002_251",x:-4,y:-4,width:34,height:32,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},c.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),c.createElement("feGaussianBlur",{in:"BackgroundImageFix",stdDeviation:2}),c.createElement("feComposite",{in2:"SourceAlpha",operator:"in",result:"effect1_backgroundBlur_5002_251"}),c.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_backgroundBlur_5002_251",result:"shape"})))))}var ie=c.forwardRef(ne),se=(r.p,"https://via.placeholder.com/350"),oe=function(){return(0,s.jsxs)("div",{className:V,children:[(0,s.jsxs)("div",{className:Y,children:[(0,s.jsx)("img",{className:Q,src:se,alt:"pictures dogs",title:"title"}),(0,s.jsx)("button",{className:$,children:(0,s.jsx)(ie,{})}),(0,s.jsx)("div",{className:ee,children:(0,s.jsx)("p",{className:te,children:"In good hands"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:R,children:(0,s.jsx)("h2",{children:"\u0421ute dog looking for a home"})}),(0,s.jsx)("div",{className:H,children:(0,s.jsxs)("ul",{className:J,children:[(0,s.jsxs)("li",{className:K,children:[(0,s.jsx)("p",{className:X,children:"Breed: "}),(0,s.jsx)("p",{children:"Pomeranian"})]}),(0,s.jsxs)("li",{className:K,children:[(0,s.jsx)("p",{className:X,children:"Place:"}),(0,s.jsx)("p",{children:"Lviv"})]}),(0,s.jsxs)("li",{className:K,children:[(0,s.jsx)("p",{className:X,children:"Age:"}),(0,s.jsx)("span",{children:"\xa0\xa0\xa0"}),(0,s.jsx)("p",{children:"one year"})]})]})}),(0,s.jsxs)("ul",{className:q,children:[(0,s.jsx)("li",{children:(0,s.jsxs)(g.u,{textBtn:"Learn more",btnType:"long",children:[(0,s.jsx)("h2",{children:"WOW"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Cool"}),(0,s.jsx)("li",{children:"Nice"}),(0,s.jsx)("li",{children:"Kill me"})]})]})}),(0,s.jsx)("li",{children:(0,s.jsx)(x.z,{text:"Delete",type:"white"})})]})]})]})},ce="NoticesList_wrapper__Zf+zK",de=function(){return(0,s.jsxs)("div",{className:ce,children:[(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{}),(0,s.jsx)(oe,{})]})},pe=r(7475),ue="NoticesPage_wrapper__JwYWF",me=function(){return(0,s.jsxs)(pe.W,{children:[(0,s.jsx)(o,{}),(0,s.jsx)(f,{}),(0,s.jsxs)("div",{className:ue,children:[(0,s.jsx)(j,{categories:"long"}),(0,s.jsx)(U,{})]}),(0,s.jsx)(de,{})]})}}}]);
//# sourceMappingURL=638.a1bfdb6d.chunk.js.map