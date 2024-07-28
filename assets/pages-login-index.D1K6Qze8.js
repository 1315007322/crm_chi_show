var e=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,o=(s,a,l)=>a in s?e(s,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[a]=l,n=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&o(e,a,s[a]);if(l)for(var a of l(s))t.call(s,a)&&o(e,a,s[a]);return e},u=(e,l)=>s(e,a(l)),i=(e,s)=>{var a={};for(var o in e)r.call(e,o)&&s.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&l)for(var o of l(e))s.indexOf(o)<0&&t.call(e,o)&&(a[o]=e[o]);return a};import{B as d,C as c,D as p,d as f,E as m,b as v,c as h,w as y,e as g,f as b,t as _,G as x,x as w,H as k,n as O,z as C,i as j,I,_ as P,J as T,K as V,L as E,M as $,N as z,O as A,P as H,g as S,A as q,r as G,j as M,k as D,a as N,u as R,Q as U,y as B,R as J,p as K}from"./index-BsW0VC56.js";const L=(e,s)=>{const a=e.indexOf(s);return-1===a?e.findIndex((e=>void 0!==s.key&&null!==s.key&&e.type===s.type&&e.key===s.key)):a};function Q(e,s,a){const l=e&&e.subTree&&e.subTree.children?function(e){const s=[],a=e=>{Array.isArray(e)&&e.forEach((e=>{var l,r;(r=e)&&!0===r.__v_isVNode&&(s.push(e),(null==(l=e.component)?void 0:l.subTree)&&(s.push(e.component.subTree),a(e.component.subTree.children)),e.children&&a(e.children))}))};return a(e),s}(e.subTree.children):[];a.sort(((e,s)=>L(l,e.vnode)-L(l,s.vnode)));const r=a.map((e=>e.proxy));s.sort(((e,s)=>r.indexOf(e)-r.indexOf(s)))}function F(e){const s=d([]),a=d([]),l=p();return{children:s,linkChildren:r=>{c(e,Object.assign({link:e=>{e.proxy&&(a.push(e),s.push(e.proxy),Q(l,s,a))},unlink:e=>{const l=a.indexOf(e);s.splice(l,1),a.splice(l,1)},children:s,internalChildren:a},r))}}}const W=P(f(u(n({},{name:"wd-cell-group",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:m,setup(e){const s=e,{linkChildren:a}=F(I);return a({props:s}),(e,s)=>{const a=C,l=j;return v(),h(l,{class:k(["wd-cell-group",e.border?"is-border":"",e.customClass]),style:O(e.customStyle)},{default:y((()=>[e.title||e.value||e.useSlot?(v(),h(l,{key:0,class:"wd-cell-group__title"},{default:y((()=>[g(l,{class:"wd-cell-group__left"},{default:y((()=>[e.title?(v(),h(a,{key:0},{default:y((()=>[b(_(e.title),1)])),_:1})):x(e.$slots,"title",{key:1},void 0,!0)])),_:3}),g(l,{class:"wd-cell-group__right"},{default:y((()=>[e.value?(v(),h(a,{key:0},{default:y((()=>[b(_(e.value),1)])),_:1})):x(e.$slots,"value",{key:1},void 0,!0)])),_:3})])),_:3})):w("",!0),g(l,{class:"wd-cell-group__body"},{default:y((()=>[x(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-cd598721"]]),X=P(f(u(n({},{name:"wd-form",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"}}),{props:T,setup(e,{expose:s}){const a=e,{children:l,linkChildren:r}=F(H);let t=d({});function o(e){e?t[e]="":Object.keys(t).forEach((e=>{t[e]=""}))}return r({props:a,errorMessages:t}),V((()=>a.model),(()=>{a.resetOnChange&&o()}),{immediate:!0,deep:!0}),s({validate:function(e){return s=this,r=null,n=function*(){const s=[];let r=!0;const n=[],u=function(){const e=A(a.rules);return l.forEach((s=>{$(s.prop)&&$(s.rules)&&s.rules.length&&(e[s.prop]?e[s.prop]=[...e[s.prop],...s.rules]:e[s.prop]=s.rules)})),e}(),d=e?{[e]:u[e]}:u;for(const e in d){const l=d[e],t=E(a.model,e);if(l&&l.length>0)for(const a of l){if(a.required&&(!$(t)||""===t)){s.push({prop:e,message:a.message}),r=!1;break}if(a.pattern&&!a.pattern.test(t)){s.push({prop:e,message:a.message}),r=!1;break}const l=a,{validator:o}=l,u=i(l,["validator"]);if(o){const l=o(t,u);z(l)?n.push(l.then((l=>{"string"==typeof l?(s.push({prop:e,message:l}),r=!1):"boolean"!=typeof l||l||(s.push({prop:e,message:a.message}),r=!1)})).catch((l=>{s.push({prop:e,message:l||a.message}),r=!1}))):l||(s.push({prop:e,message:a.message}),r=!1)}}}return yield Promise.all(n),s.forEach((e=>{var s;(s=e).message&&(t[s.prop]=s.message)})),r&&(e?o(e):o()),{valid:r,errors:s}},new Promise(((e,a)=>{var l=e=>{try{o(n.next(e))}catch(s){a(s)}},t=e=>{try{o(n.throw(e))}catch(s){a(s)}},o=s=>s.done?e(s.value):Promise.resolve(s.value).then(l,t);o((n=n.apply(s,r)).next())}));var s,r,n},reset:function(){o()}}),(e,s)=>{const a=j;return v(),h(a,{class:k(`wd-form ${e.customClass}`),style:O(e.customStyle)},{default:y((()=>[x(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-d065178b"]]),Y=P(f(u(n({},{name:"Home"}),{__name:"index",setup(e){const{safeAreaInsets:s}=S(),{success:a}=q(),l=d({value1:"",value2:""}),r=G();function t(){r.value.validate().then((({valid:e,errors:s})=>{e&&(a({msg:"登录成功！"}),setTimeout((()=>{U({url:"/pages/index/index"})}),1e3))})).catch((e=>{}))}return(e,a)=>{const o=B,n=j,u=M(D("wd-input"),J),i=M(D("wd-cell-group"),W),d=M(D("wd-button"),K),c=M(D("wd-form"),X),p=N("layout-default-uni");return v(),h(p,null,{default:y((()=>{var e;return[g(n,{class:"bg-white overflow-hidden pt-2 px-4",style:O({marginTop:(null==(e=R(s))?void 0:e.top)+"px"})},{default:y((()=>[g(n,{class:"mt-30 text-center"},{default:y((()=>[g(o,{src:"/unibest/static/login/images/login_logo.png",alt:"",class:"w-25 h-25 block mx-auto"}),g(n,{class:"text-2xl mt-2 mb-4"},{default:y((()=>[b("Comeon CRM")])),_:1})])),_:1}),g(c,{ref_key:"form",ref:r,model:R(l)},{default:y((()=>[g(i,{border:""},{default:y((()=>[g(u,{prop:"value1","prefix-icon":"user",clearable:"",size:"large",modelValue:R(l).value1,"onUpdate:modelValue":a[0]||(a[0]=e=>R(l).value1=e),placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),g(u,{prop:"value2","prefix-icon":"lock-on","show-password":"",clearable:"",size:"large",modelValue:R(l).value2,"onUpdate:modelValue":a[1]||(a[1]=e=>R(l).value2=e),placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])])),_:1}),g(n,{class:"footer"},{default:y((()=>[g(d,{type:"primary",size:"large",class:"m-5",onClick:t,block:""},{default:y((()=>[b(" 登录 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["style"])]})),_:1})}}})),[["__scopeId","data-v-12895e80"]]);export{Y as default};
