var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,i=(e,t)=>{for(var s in t||(t={}))l.call(t,s)&&r(e,s,t[s]);if(a)for(var s of a(t))o.call(t,s)&&r(e,s,t[s]);return e},d=(e,a)=>t(e,s(a));import{j as n,W as u,m as c,d as p,I as m,l as g,k as v,o as b,a as f,w as y,r as _,n as w,g as x,e as h,t as $,f as k,h as C,_ as S,u as I,X as N,q as V,s as T,v as D,b as M,S as O,Y as j,T as P,N as E,Z as z,$ as q,a0 as B,x as G,a1 as H,a2 as A,a3 as Z,a4 as F,a5 as L,a6 as R,a7 as U,a8 as W,D as X,i as Y,y as J,a9 as K,aa as Q,p as ee,R as te,M as se,ab as ae,G as le,L as oe}from"./index-BzYhBfDg.js";import{u as re}from"./useChildren.DSlZ_ikU.js";const ie=d(i({},n),{modelValue:{type:[Number,String,null],default:null},showZero:u(!1),bgColor:String,max:Number,isDot:Boolean,hidden:Boolean,type:c(void 0),top:Number,right:Number}),de=S(p(d(i({},{name:"wd-badge",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:ie,setup(e){const t=e,s=m(null);g([()=>t.modelValue,()=>t.max,()=>t.isDot],(()=>{!function(){if(t.isDot)return;let e=t.modelValue;const a=t.max;e&&a&&"number"==typeof e&&!Number.isNaN(e)&&!Number.isNaN(a)&&(e=a<e?`${a}+`:e);s.value=e}()}),{immediate:!0,deep:!0});const a=v((()=>`background-color: ${t.bgColor};top:${t.top||0}px;right:${t.right||0}px`)),l=v((()=>{let e=!1;return!t.hidden&&(s.value||0===s.value&&t.showZero||t.isDot)&&(e=!0),e}));return(e,t)=>{const o=C;return b(),f(o,{class:w(["wd-badge",e.customClass]),style:x(e.customStyle)},{default:y((()=>[_(e.$slots,"default",{},void 0,!0),l.value?(b(),f(o,{key:0,class:w(["wd-badge__content","is-fixed",e.type?"wd-badge__content--"+e.type:"",e.isDot?"is-dot":""]),style:x(a.value)},{default:y((()=>[h($(s.value),1)])),_:1},8,["class","style"])):k("",!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-96d9741e"]]),ne=Symbol("wd-grid"),ue=d(i({},n),{clickable:u(!1),square:u(!1),column:Number,border:u(!1),bgColor:c(""),gutter:Number}),ce=d(i({},n),{customText:c(""),customIcon:c(""),icon:c(""),iconSize:c("26px"),text:String,url:String,linkType:c("navigateTo"),useSlot:u(!1),useIconSlot:u(!1),useTextSlot:u(!1),isDot:{type:Boolean,default:void 0},type:String,value:Number,max:Number,badgeProps:Object}),pe=S(p(d(i({},{name:"wd-grid-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),{props:ce,emits:["itemclick"],setup(e,{expose:t,emit:s}){const a=e,l=s,o=m(""),r=m(""),i=m(""),d=m(0),n=m(!1),u=m(!0),{parent:c}=I(ne),p=v((()=>G(c)&&G(c.children)?c.children.length:0)),k=v((()=>H(G(a.badgeProps)?A(a.badgeProps,Z):{},A({max:a.max,isDot:a.isDot,modelValue:a.value,type:a.type},Z))));function S(){if(!c)return;const e=c.children,t=c.props.column?100/c.props.column+"%":100/e.length+"%",s=c.props.gutter?`padding:${c.props.gutter}px ${c.props.gutter}px 0 0; background-color: transparent;`:"",a=c.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${t}`:"";r.value=c.props.gutter&&c.props.square?`right: ${c.props.gutter}px; bottom:${c.props.gutter}px;height: auto; background-color: ${c.props.bgColor}`:`background-color: ${c.props.bgColor}`,u.value=Boolean(c.props.border),n.value=Boolean(c.props.square),d.value=Number(c.props.gutter),o.value=`width: ${t}; ${a||s}`}function F(){if(c&&!c.props.clickable)return;const{url:e,linkType:t}=a;if(l("itemclick"),e)switch(t){case"navigateTo":B({url:e});break;case"reLaunch":q({url:e});break;case"redirectTo":z({url:e});break;case"switchTab":E({url:e})}}return g((()=>p.value),(()=>{if(!c)return;const e=c.props.column?100/c.props.column+"%":100/(p.value||1)+"%",t=c.props.gutter?`padding:${c.props.gutter}px ${c.props.gutter}px 0 0; background-color: transparent;`:"",s=c.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${e}`:"";o.value=`width: ${e}; ${s||t}`}),{deep:!0,immediate:!0}),N((()=>{S()})),t({setiIemClass:function(e){i.value=e},itemClass:i,init:S}),(e,t)=>{const s=V(D("wd-icon"),T),a=V(D("wd-badge"),de),l=C;return b(),f(l,{class:w(`wd-grid-item ${u.value&&!d.value?i.value:""} ${e.customClass}`),onClick:F,style:x(`${o.value};${e.customStyle}`)},{default:y((()=>[M(l,{class:w(`wd-grid-item__content ${n.value?"is-square":""} ${u.value&&d.value>0?"is-round":""}`),style:x(r.value)},{default:y((()=>[e.useSlot?_(e.$slots,"default",{key:0},void 0,!0):(b(),O(P,{key:1},[M(l,{style:x("width:"+e.iconSize+"; height: "+e.iconSize),class:"wd-grid-item__wrapper"},{default:y((()=>[M(a,j({"custom-class":"badge"},k.value),{default:y((()=>[e.useIconSlot?_(e.$slots,"icon",{key:0},void 0,!0):(b(),f(s,{key:1,name:e.icon,size:e.iconSize,"custom-class":e.customIcon},null,8,["name","size","custom-class"]))])),_:3},16)])),_:3},8,["style"]),e.useTextSlot?_(e.$slots,"text",{key:0},void 0,!0):(b(),f(l,{key:1,class:"wd-grid-item__text custom-text"},{default:y((()=>[h($(e.text),1)])),_:1}))],64))])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-a65e5c78"]]),me=S(p(d(i({},{name:"wd-grid",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"}}),{props:ue,setup(e){const t=()=>new Promise((e=>setTimeout(e,20))),s=e,{linkChildren:a,children:l}=re(ne);a({props:s}),g((()=>s.column),((e,t)=>{e!==t&&t&&i()}),{deep:!0,immediate:!0}),g((()=>s.border),(e=>{e&&Promise.resolve().then(t).then((()=>{i()}))}),{deep:!0,immediate:!0}),g((()=>l),(()=>{r()}),{deep:!0});const o=v((()=>`${s.gutter?"padding-left:"+s.gutter+"px;padding-bottom:"+s.gutter+"px;":""}${s.customStyle}`)),r=F((()=>{i()}),50);function i(){l&&l.forEach(((e,t)=>{if(s.border){const{column:a}=s;if(a){const s=l.length-1===t||(t+1)%a==0,o=t+1<=a;o&&e.$.exposed.setiIemClass("is-first"),s&&e.$.exposed.setiIemClass("is-right"),!o&&e.$.exposed.setiIemClass("is-border")}else e.$.exposed.setiIemClass("is-first");l.length-1===t&&e.$.exposed.setiIemClass(e.$.exposed.itemClass.value+" is-last")}e.$.exposed.init()}))}return(e,t)=>{const s=C;return b(),f(s,{class:w(`wd-grid ${e.customClass}`),style:x(o.value)},{default:y((()=>[_(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-9a61850c"]]),ge=Symbol("wd-collapse"),ve=d(i({},n),{customMoreSlotClass:c(""),modelValue:{type:[String,Array,Boolean]},accordion:u(!1),viewmore:u(!1),useMoreSlot:u(!1),lineNum:L(2)}),be=d(i({},n),{title:c(""),disabled:u(!1),name:R(String),beforeExpend:Function}),fe=S(p(d(i({},{name:"wd-collapse-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:be,setup(e,{expose:t}){const s=".wd-collapse-item__body",a=e,{parent:l,index:o}=I(ge),r=m(""),i=m(!1),d=m("0.3s"),{proxy:n}=J(),u=v((()=>0===o.value)),c=v((()=>{let e={height:i.value?r.value+"px":"0px","transition-duration":d.value};return K(e)})),p=v((()=>l?l.props.modelValue:[]));function k(e){U(e,!1,n).then((e=>{if(!e)return;const{height:t}=e;r.value=Number(t)}))}function S(){if(a.disabled)return;let e=a.name;if(!i.value)if(a.beforeExpend){const t=a.beforeExpend(e);if(!t)return;X(t)?t.then((()=>{l&&l.toggle(e,!i.value)})):l&&l.toggle(e,!i.value)}else l&&l.toggle(e,!i.value);else l&&l.toggle(e,!i.value)}return g((()=>p.value),(e=>{const t=a.name;G(e)&&("string"==typeof e&&e===t||W(e)&&e.indexOf(t)>=0)?(k(s),i.value=!0):i.value=!1}),{deep:!0,immediate:!0}),N((()=>{k(s)})),t({getExpanded:function(){return i.value}}),(e,t)=>{const s=Y,a=V(D("wd-icon"),T),l=C;return b(),f(l,{class:w(`wd-collapse-item ${e.disabled?"is-disabled":""} is-border ${e.customClass}`),style:x(e.customStyle)},{default:y((()=>[M(l,{class:w("wd-collapse-item__header  "+(u.value?"wd-collapse-item__header-first":"")),onClick:S},{default:y((()=>[_(e.$slots,"title",{expanded:i.value,disabled:e.disabled,isFirst:u.value},(()=>[M(s,{class:"wd-collapse-item__title"},{default:y((()=>[h($(e.title),1)])),_:1}),M(a,{name:"arrow-down","custom-class":"wd-collapse-item__arrow "+(i.value?"is-retract":"")},null,8,["custom-class"])]),!0)])),_:3},8,["class"]),M(l,{class:"wd-collapse-item__wrapper",style:x(c.value)},{default:y((()=>[M(l,{class:"wd-collapse-item__body"},{default:y((()=>[_(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-dffe4bbd"]]),ye=S(p(d(i({},{name:"wd-collapse",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:ve,emits:["change","update:modelValue"],setup(e,{expose:t,emit:s}){const a=e,l=s,{translate:o}=Q("collapse"),r=m(0),{linkChildren:i,children:d}=re(ge);function n(e){l("update:modelValue",e),l("change",{value:e})}i({props:a,toggle:function(e,t){const{accordion:s,modelValue:l}=a;n(s?e===l?"":e:t?l.concat(e):l.filter((t=>t!==e)))}}),g((()=>a.modelValue),(e=>{const{viewmore:t,accordion:s}=a;s&&"string"!=typeof e||!s&&!t&&W(e)}),{deep:!0,immediate:!0}),g((()=>a.lineNum),(e=>{}),{deep:!0,immediate:!0}),ee((()=>{const{lineNum:e,viewmore:t,modelValue:s}=a;r.value=t&&!s?e:0}));function u(){l("update:modelValue",!a.modelValue),l("change",{value:!a.modelValue})}return t({toggleAll:(e={})=>{if(a.accordion)return;"boolean"==typeof e&&(e={expanded:e});const{expanded:t,skipDisabled:s}=e,l=[];d.forEach(((e,a)=>{e.disabled&&s?e.$.exposed.getExpanded()&&l.push(e.name||a):(G(t)?t:!e.$.exposed.getExpanded())&&l.push(e.name||a)})),n(l)}}),(e,t)=>{const s=C,a=V(D("wd-icon"),T);return b(),f(s,{class:w(`wd-collapse ${e.viewmore?"is-viewmore":""} ${e.customClass}`),style:x(e.customStyle)},{default:y((()=>[e.viewmore?(b(),f(s,{key:1},{default:y((()=>[M(s,{class:w(`wd-collapse__content ${e.modelValue?"":"is-retract"} `),style:x(`-webkit-line-clamp: ${r.value}; -webkit-box-orient: vertical`)},{default:y((()=>[_(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),M(s,{class:"wd-collapse__more",onClick:u},{default:y((()=>[e.useMoreSlot?(b(),f(s,{key:0,class:w(e.customMoreSlotClass)},{default:y((()=>[_(e.$slots,"more",{},void 0,!0)])),_:3},8,["class"])):(b(),O(P,{key:1},[te("span",{class:"wd-collapse__more-txt"},$(e.modelValue?se(o)("retract"):se(o)("expand")),1),M(s,{class:w("wd-collapse__arrow "+(e.modelValue?"is-retract":""))},{default:y((()=>[M(a,{name:"arrow-down"})])),_:1},8,["class"])],64))])),_:3})])),_:3})):_(e.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-af27467d"]]),_e=p({name:"MyCommonModule"}),we=S(p(d(i(i({},_e),{name:"MyCommonModule"}),{setup(e){const t=m(["item1"]);return(e,s)=>{const a=Y,l=V(D("wd-icon"),T),o=V(D("wd-grid-item"),pe),r=V(D("wd-grid"),me),i=V(D("wd-collapse-item"),fe),d=V(D("wd-collapse"),ye);return b(),f(d,{modelValue:se(t),"onUpdate:modelValue":s[0]||(s[0]=e=>ae(t)?t.value=e:null)},{default:y((()=>[M(i,{name:"item1","custom-class":"module_wrap"},{title:y((()=>[M(a,null,{default:y((()=>[h("My Common Modules")])),_:1}),M(a,null,{default:y((()=>[e.expanded?(b(),f(l,{key:0,name:"view-list",size:"22px"})):(b(),f(l,{key:1,name:"view-list",size:"22px"}))])),_:1})])),default:y((()=>[M(r,{column:5},{default:y((()=>[M(o,{icon:"picture",text:"文字"}),M(o,{icon:"picture",text:"文字"}),M(o,{icon:"picture",text:"文字"}),M(o,{icon:"picture",text:"文字"}),M(o,{icon:"picture",text:"文字"}),M(o,{icon:"picture",text:"文字"})])),_:1})])),_:1})])),_:1},8,["modelValue"])}}})),[["__scopeId","data-v-9b0b8360"]]),xe=S(p(d(i({},{name:"Home"}),{__name:"index",setup(e){const{safeAreaInsets:t}=le();return(e,s)=>{const a=C,l=oe("layout-default-uni");return b(),f(l,null,{default:y((()=>{var e;return[M(a,{class:"bg-white overflow-hidden pt-2 px-4",style:x({marginTop:(null==(e=se(t))?void 0:e.top)+"px"})},{default:y((()=>[M(we)])),_:1},8,["style"])]})),_:1})}}})),[["__scopeId","data-v-15cc64bf"]]);export{xe as default};
