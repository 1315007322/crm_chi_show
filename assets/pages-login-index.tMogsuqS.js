var e=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(l,s,a)=>s in l?e(l,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[s]=a,u=(e,l)=>{for(var s in l||(l={}))t.call(l,s)&&r(e,s,l[s]);if(a)for(var s of a(l))o.call(l,s)&&r(e,s,l[s]);return e},d=(e,a)=>l(e,s(a)),c=(e,l)=>{var s={};for(var r in e)t.call(e,r)&&l.indexOf(r)<0&&(s[r]=e[r]);if(null!=e&&a)for(var r of a(e))l.indexOf(r)<0&&o.call(e,r)&&(s[r]=e[r]);return s};import{d as n,c as p,o as i,a as m,w as f,b as h,e as v,t as b,r as g,f as y,n as _,g as x,i as w,h as k,C as V,_ as C,j as $,m as O,u as S,k as j,l as z,p as I,q as P,s as q,v as E,x as B,y as H,z as R,A as G,B as N,D as L,E as M,F as U,G as W,H as A,I as D,J as F,K as T,L as J,M as K,N as Q,O as X}from"./index-CVwlXfkc.js";import{u as Y}from"./useChildren.CUiY7XY1.js";const Z=C(n(d(u({},{name:"wd-cell-group",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:p,setup(e){const l=e,{linkChildren:s}=Y(V);return s({props:l}),(e,l)=>{const s=w,a=k;return i(),m(a,{class:_(["wd-cell-group",e.border?"is-border":"",e.customClass]),style:x(e.customStyle)},{default:f((()=>[e.title||e.value||e.useSlot?(i(),m(a,{key:0,class:"wd-cell-group__title"},{default:f((()=>[h(a,{class:"wd-cell-group__left"},{default:f((()=>[e.title?(i(),m(s,{key:0},{default:f((()=>[v(b(e.title),1)])),_:1})):g(e.$slots,"title",{key:1},void 0,!0)])),_:3}),h(a,{class:"wd-cell-group__right"},{default:f((()=>[e.value?(i(),m(s,{key:0},{default:f((()=>[v(b(e.value),1)])),_:1})):g(e.$slots,"value",{key:1},void 0,!0)])),_:3})])),_:3})):y("",!0),h(a,{class:"wd-cell-group__body"},{default:f((()=>[g(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-cd598721"]]),ee=Symbol("wd-checkbox-group"),le=d(u({},$),{customLabelClass:O(""),customShapeClass:O(""),modelValue:{type:[String,Number,Boolean],required:!0,default:!1},shape:O("circle"),checkedColor:String,disabled:{type:[Boolean,null],default:null},trueValue:{type:[String,Number,Boolean],default:!0},falseValue:{type:[String,Number,Boolean],default:!1},size:String,maxWidth:String}),se=C(n(d(u({},{name:"wd-checkbox",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:le,emits:["change","update:modelValue"],setup(e,{expose:l,emit:s}){const a=e,t=s;l({toggle:$});const{parent:o,index:r}=S(ee),u=j((()=>o?o.props.modelValue.indexOf(a.modelValue)>-1:a.modelValue===a.trueValue)),d=j((()=>0===r.value)),c=j((()=>{const e=B(o)?o.children:[];return r.value===e.length-1})),{proxy:n}=H();z((()=>a.modelValue),(()=>{o&&o&&o.children&&o.children.forEach((e=>{e.$.uid!==n.$.uid&&(e.modelValue,a.modelValue)}))})),z((()=>a.shape),(e=>{["circle","square","button"].indexOf(e)}));const p=j((()=>!a.shape&&o&&o.props.shape?o.props.shape:a.shape)),v=j((()=>!a.checkedColor&&o&&o.props.checkedColor?o.props.checkedColor:a.checkedColor)),b=j((()=>{let e=a.disabled;return o&&(o.props.max&&o.props.modelValue.length>=o.props.max&&!u.value||o.props.min&&o.props.modelValue.length<=o.props.min&&u.value||!0===a.disabled||o.props.disabled&&null===a.disabled)&&(e=!0),e})),w=j((()=>!(!o||!o.props.inline)&&o.props.inline)),V=j((()=>!(!o||!o.props.cell)&&o.props.cell)),C=j((()=>!a.size&&o&&o.props.size?o.props.size:a.size));function $(){if(!b.value)if(o)t("change",{value:!u.value}),o.changeSelectState(a.modelValue);else{const e=a.modelValue===a.trueValue?a.falseValue:a.trueValue;t("update:modelValue",e),t("change",{value:e})}}return I((()=>{a.modelValue})),(e,l)=>{const s=P(E("wd-icon"),q),a=k;return i(),m(a,{class:_(`wd-checkbox ${V.value?"is-cell-box":""} ${"button"===p.value?"is-button-box":""} ${u.value?"is-checked":""} ${d.value?"is-first-child":""} ${c.value?"is-last-child":""} ${w.value?"is-inline":""} ${"button"===p.value?"is-button":""} ${b.value?"is-disabled":""} ${C.value?"is-"+C.value:""} ${e.customClass}`),style:x(e.customStyle),onClick:$},{default:f((()=>["button"!==p.value?(i(),m(a,{key:0,class:_(`wd-checkbox__shape ${"square"===p.value?"is-square":""} ${e.customShapeClass}`),style:x(u.value&&!b.value&&v.value?"color :"+v.value:"")},{default:f((()=>[h(s,{"custom-class":"wd-checkbox__check",name:"check-bold",size:"14px"})])),_:1},8,["class","style"])):y("",!0),h(a,{class:_(`wd-checkbox__label ${e.customLabelClass}`),style:x(u.value&&"button"===p.value&&!b.value&&v.value?"color:"+v.value:"")},{default:f((()=>["button"===p.value&&u.value?(i(),m(s,{key:0,"custom-class":"wd-checkbox__btn-check",name:"check-bold",size:"14px"})):y("",!0),h(a,{class:"wd-checkbox__txt",style:x(e.maxWidth?"max-width:"+e.maxWidth:"")},{default:f((()=>[g(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-72a5f102"]]),ae=C(n(d(u({},{name:"wd-form",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:R,setup(e,{expose:l}){const s=e,{children:a,linkChildren:t}=Y(U);let o=G({});function r(e){e?o[e]="":Object.keys(o).forEach((e=>{o[e]=""}))}return t({props:s,errorMessages:o}),z((()=>s.model),(()=>{s.resetOnChange&&r()}),{immediate:!0,deep:!0}),l({validate:function(e){return l=this,t=null,u=function*(){const l=[];let t=!0;const u=[],d=function(){const e=M(s.rules);return a.forEach((l=>{B(l.prop)&&B(l.rules)&&l.rules.length&&(e[l.prop]?e[l.prop]=[...e[l.prop],...l.rules]:e[l.prop]=l.rules)})),e}(),n=e?{[e]:d[e]}:d;for(const e in n){const a=n[e],o=N(s.model,e);if(a&&a.length>0)for(const s of a){if(s.required&&(!B(o)||""===o)){l.push({prop:e,message:s.message}),t=!1;break}if(s.pattern&&!s.pattern.test(o)){l.push({prop:e,message:s.message}),t=!1;break}const a=s,{validator:r}=a,d=c(a,["validator"]);if(r){const a=r(o,d);L(a)?u.push(a.then((a=>{"string"==typeof a?(l.push({prop:e,message:a}),t=!1):"boolean"!=typeof a||a||(l.push({prop:e,message:s.message}),t=!1)})).catch((a=>{l.push({prop:e,message:a||s.message}),t=!1}))):a||(l.push({prop:e,message:s.message}),t=!1)}}}return yield Promise.all(u),l.forEach((e=>{var l;(l=e).message&&(o[l.prop]=l.message)})),t&&(e?r(e):r()),{valid:t,errors:l}},new Promise(((e,s)=>{var a=e=>{try{r(u.next(e))}catch(l){s(l)}},o=e=>{try{r(u.throw(e))}catch(l){s(l)}},r=l=>l.done?e(l.value):Promise.resolve(l.value).then(a,o);r((u=u.apply(l,t)).next())}));var l,t,u},reset:function(){r()}}),(e,l)=>{const s=k;return i(),m(s,{class:_(`wd-form ${e.customClass}`),style:x(e.customStyle)},{default:f((()=>[g(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-d065178b"]]),te=C(n(d(u({},{name:"Home"}),{__name:"index",setup(e){const{safeAreaInsets:l}=W(),{success:s}=A(),a=G({value1:"",value2:"",isRemember:!1}),t=D();function o(){t.value.validate().then((({valid:e,errors:l})=>{e&&(s({msg:"登录成功！"}),setTimeout((()=>{Q({url:"/pages/index/index"})}),1e3))})).catch((e=>{}))}return(e,s)=>{const r=X,u=k,d=P(E("wd-input"),F),c=P(E("wd-cell-group"),Z),n=P(E("wd-checkbox"),se),p=P(E("wd-button"),T),b=P(E("wd-form"),ae),g=J("layout-default-uni");return i(),m(g,null,{default:f((()=>{var e;return[h(u,{class:"bg-white overflow-hidden pt-2 px-4",style:x({marginTop:(null==(e=K(l))?void 0:e.top)+"px"})},{default:f((()=>[h(u,{class:"mt-30 text-center"},{default:f((()=>[h(r,{src:"/crm_chi_show/static/login/images/login_logo.png",alt:"",class:"w-25 h-25 block mx-auto"}),h(u,{class:"text-2xl mt-2 mb-4"},{default:f((()=>[v("Comeon CRM")])),_:1})])),_:1}),h(b,{ref_key:"form",ref:t,model:K(a)},{default:f((()=>[h(c,{border:""},{default:f((()=>[h(d,{prop:"value1","prefix-icon":"user",clearable:"",size:"large",modelValue:K(a).value1,"onUpdate:modelValue":s[0]||(s[0]=e=>K(a).value1=e),placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),h(d,{prop:"value2","prefix-icon":"lock-on","show-password":"",clearable:"",size:"large",modelValue:K(a).value2,"onUpdate:modelValue":s[1]||(s[1]=e=>K(a).value2=e),placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),h(u,{class:"flex items-center justify-between"},{default:f((()=>[h(n,{shape:"square",modelValue:K(a).isRemember,"onUpdate:modelValue":s[2]||(s[2]=e=>K(a).isRemember=e)},{default:f((()=>[v("Remember Password")])),_:1},8,["modelValue"]),h(p,{type:"text",class:"m-0"},{default:f((()=>[v("Forget Password?")])),_:1})])),_:1}),h(u,{class:"footer"},{default:f((()=>[h(p,{type:"primary",size:"large",class:"m-5",onClick:o,block:""},{default:f((()=>[v(" 登录 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["style"])]})),_:1})}}})),[["__scopeId","data-v-65d9e4d6"]]);export{te as default};
