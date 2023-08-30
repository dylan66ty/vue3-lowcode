"use strict";(self["webpackChunklowcode"]=self["webpackChunklowcode"]||[]).push([[6673],{9322:function(e,t,n){n.d(t,{WJ:function(){return c},kZ:function(){return o},l:function(){return a},mB:function(){return l},tO:function(){return r}});const o=(e,t="_blank")=>{const n=document.createElement("a");n.href=e,n.target=t,n.click(),n.remove()},r={getItem:e=>{const t=localStorage.getItem(e);try{return JSON.parse(t)}catch(n){return t}},setItem:(e,t)=>{null!==typeof t&&"object"===typeof t&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},removeItem:e=>{localStorage.removeItem(e)}},l=e=>{const t=/([^&?=]+)=([^&?=]*)/g,n={};return e.replace(t,((e,t,o)=>(n[t]=decodeURIComponent(o),""))),n},a=e=>Object.keys(e).map((t=>`${t}=${encodeURIComponent(e[t])}`)).join("&"),c=(e,t,n)=>{let o;try{t=t.replace(/\[(\w+)\]/g,".$1"),o=t.split(".").filter((e=>""!==e)).reduce(((e,t)=>e[t]),e),void 0===o&&(o=n)}catch(r){o=n}return o}},1240:function(e,t,n){n.d(t,{x:function(){return c}});var o=n(4409),r=n(9322);const l="editorConfig";class a{constructor(){(0,o.Z)(this,"data",void 0),this.data={}}save(e,t){this.getAll(),this.data[e]=t,this.setAll()}delete(e){this.getAll(),delete this.data[e],this.setAll()}put(e,t){this.getAll(),this.data[e]=t,this.setAll()}get(e){this.getAll();const t=this.data[e];return this.setAll(),t}getAll(){return this.data=r.tO.getItem(l)||{},this.data}setAll(){r.tO.setItem(l,this.data)}}const c=new a},1818:function(e,t,n){n.d(t,{Z:function(){return y}});n(1321);var o=n(7956),r=n(6414);const l={viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40"},a=(0,o.createElementVNode)("path",{fill:"#006cff",d:"M871.23968 191.16032h-686.08a40.96 40.96 0 0 0-40.96 40.96v573.44a40.96 40.96 0 0 0 40.96 40.96h686.08a40.96 40.96 0 0 0 40.96-40.96v-573.44a40.96 40.96 0 0 0-40.96-40.96z m-90.43968 51.28192a32.3584 32.3584 0 1 1-0.04096 64.67584 32.3584 32.3584 0 0 1 0.04096-64.67584z m-91.32032 0a32.3584 32.3584 0 1 1 0.02048 64.69632 32.3584 32.3584 0 0 1-0.02048-64.69632z m-91.32032 0a32.3584 32.3584 0 1 1 0.02048 64.69632 32.3584 32.3584 0 0 1-0.02048-64.69632z m232.12032 522.15808h-604.16V348.16h604.16v416.44032z m-445.41952-61.39904a30.72 30.72 0 0 1-21.72928-52.4288l98.11968-98.11968-98.11968-98.11968a30.72 30.72 0 1 1 43.43808-43.43808l119.84896 119.84896a30.72 30.72 0 0 1 0 43.43808l-119.84896 119.84896a30.69952 30.69952 0 0 1-21.7088 8.97024z m320.86016 0h-157.02016a30.72 30.72 0 0 1 0-61.44h157.02016a30.72 30.72 0 0 1 0 61.44z"},null,-1),c=[a];function i(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",l,c)}var s=n(7905);const u={},d=(0,s.Z)(u,[["render",i]]);var m=d;const p={class:"header-wrapper"},f=(0,o.createElementVNode)("h1",{class:"text-xl ml-2 font-bold"},"低代码demo",-1);var h=(0,o.defineComponent)({__name:"header",setup(e){const{path:t}=(0,r.yj)(),{push:n}=(0,r.tv)(),l=()=>{t.includes("/editor")||n({path:"/editor"})};return(e,t)=>((0,o.openBlock)(),(0,o.createElementBlock)("header",p,[(0,o.createElementVNode)("div",{class:"flex items-center",onClick:l},[(0,o.createVNode)(m),f]),(0,o.renderSlot)(e.$slots,"default")]))}});const v=h;var y=v},6673:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var o=n(7956),r=n(1286),l=n(6414),a=n(9322),c=n(1240),i=n(1818);const s={key:0,class:"flex flex-wrap p-8 pb-0 box-border gap-8"},u={class:"p-4",style:{width:"270px",height:"270px"}},d={class:"p-4 pt-0"},m={class:"absolute right-2 top-2 text-sm text-gray-500"},p={class:"absolute top-0 left-0 w-5 h-5 text-sm text-white bg-blue-500 text-center"};var f=(0,o.defineComponent)({__name:"index",setup(e){const t=(0,o.ref)([]),{back:n}=(0,l.tv)(),f=(e,t)=>{(0,a.kZ)(`http://${location.host}/${e}?saveId=${t}`)},h=async e=>{c.x.delete(e),g()},v=(0,o.computed)((()=>Object.keys(t.value).length>0)),y=e=>e?.container?.title,g=async()=>{t.value=c.x.getAll()};return g(),(e,l)=>{const a=(0,o.resolveComponent)("el-skeleton"),c=(0,o.resolveComponent)("el-button"),g=(0,o.resolveComponent)("el-empty");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(i.Z),v.value?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(t.value,((e,t,n)=>((0,o.openBlock)(),(0,o.createElementBlock)("div",{key:t,class:"relative border"},[(0,o.createElementVNode)("div",u,[(0,o.createVNode)(a,{rows:5,animated:""})]),(0,o.createElementVNode)("div",d,[(0,o.createVNode)(c,{type:"primary",size:"small",icon:(0,o.unref)(r.I8b),onClick:e=>f("editor",t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("编辑")])),_:2},1032,["icon","onClick"]),(0,o.createVNode)(c,{type:"success",size:"small",icon:(0,o.unref)(r.Lyo),onClick:e=>f("preview",t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("预览")])),_:2},1032,["icon","onClick"]),(0,o.createVNode)(c,{type:"danger",size:"small",icon:(0,o.unref)(r.HG3),onClick:e=>h(t)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("删除")])),_:2},1032,["icon","onClick"])]),(0,o.createElementVNode)("div",m,(0,o.toDisplayString)(y(e)),1),(0,o.createElementVNode)("div",p,(0,o.toDisplayString)(n+1),1)])))),128))])):((0,o.openBlock)(),(0,o.createBlock)(g,{key:1,description:"暂无历史记录"},{default:(0,o.withCtx)((()=>[(0,o.createVNode)(c,{type:"primary",onClick:(0,o.unref)(n)},{default:(0,o.withCtx)((()=>[(0,o.createTextVNode)("返回")])),_:1},8,["onClick"])])),_:1}))],64)}}});const h=f;var v=h},4409:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function l(e){var t=r(e,"string");return"symbol"===o(t)?t:String(t)}function a(e,t,n){return t=l(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return a}})}}]);