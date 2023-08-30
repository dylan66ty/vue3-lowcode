(self["webpackChunklowcode"]=self["webpackChunklowcode"]||[]).push([[3941],{8662:function(e,t,i){"use strict";var n=i(6415),o=i(3415),s=i(9480),r=Array;n({target:"Array",proto:!0},{with:function(e,t){return o(s(this),r,e,t)}})},3505:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return jt}});var n=i(7956),o=i(6414),s=i(8016),r=(i(1321),i(2038)),a=i(3679),l=i(1286),c=i(2562),d=i(7781),h=i(7271);const u={id:"monaco-editor",ref:"containerRef"};function g(e,t,i,o,s,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",u,null,512)}var m=i(487);const p=i(5090);(0,m.l5)(p);const f=i(5258);var b=(0,n.defineComponent)({props:{code:{type:String,default:""},language:{type:String,default:"json"}},emits:["change"],setup(e,{emit:t}){const i=(0,n.ref)();let o;const s=()=>{i.value&&(o||(o=f.editor.create(i.value,{theme:"vs",language:e.language,value:e.code,automaticLayout:!0,tabSize:2,minimap:{enabled:!1},scrollBeyondLastLine:!1,overviewRulerBorder:!1}),o.onDidChangeModelContent((()=>{t("change",o.getValue())}))),o.setValue(e.code))};return(0,n.onUnmounted)((()=>{o.dispose(),o=null})),(0,n.watch)((()=>e.code),(()=>{(0,n.nextTick)((()=>s()))}),{immediate:!0}),{containerRef:i}}}),v=i(7905);const _=(0,v.Z)(b,[["render",g]]);var w=_;const C=(0,n.defineComponent)({props:{options:{type:Object,default:()=>({})}},setup(e,t){const i=(0,n.reactive)({options:e.options,visible:!1});t.expose({show(e){i.options=e,i.visible=!0},hide(){i.visible=!1}});const o=()=>{i.visible=!1},s=()=>{i.options.onConfirm&&i.options.onConfirm(i.options.code)};return()=>(0,n.createVNode)(d.d0,{modelValue:i.visible,"onUpdate:modelValue":e=>i.visible=e,title:i.options.title,width:600},{default:i.options.default||(()=>(0,n.createVNode)(w,{language:i.options.language,code:i.options.content,onChange:e=>i.options.code=e},null)),footer:()=>i.options.footer&&(0,n.createVNode)("div",null,[(0,n.createVNode)(h.ElButton,{onClick:o},{default:()=>[(0,n.createTextVNode)("取消")]}),(0,n.createVNode)(h.ElButton,{type:"primary",onClick:s},{default:()=>[(0,n.createTextVNode)("确定")]})])})}});let y;function S(e){if(!y){const t=document.createElement("div");y=(0,n.createVNode)(C,{options:e}),(0,n.render)(y,t),document.body.appendChild(t.firstElementChild)}const{show:t,hide:i}=y.component?.exposed||{};return t&&t(e),()=>i()}const k={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor","stroke-width":"3","stroke-linecap":"butt","stroke-linejoin":"miter"},x=(0,n.createElementVNode)("path",{d:"M21 13v9m18 20H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h22.55a1 1 0 0 1 .748.336l7.45 8.38a1 1 0 0 1 .252.664V41a1 1 0 0 1-1 1ZM14 6h14v15a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V6Z"},null,-1),L=[x];function N(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",k,L)}const D={},E=(0,v.Z)(D,[["render",N]]);var I=E,T=i(7313),M=i(1818),A=i(9322),R=i(1240),O=i(9791),P=(0,n.defineComponent)({setup(){const e=(0,n.inject)(c._),t=[{label:"撤销",value:"undo",icon:(0,n.createVNode)(l.Ufu,null,null),handler(t){e?.commands?.undo()}},{label:"重做",value:"redo",icon:(0,n.createVNode)(l.Vyf,null,null),handler(t){e?.commands?.redo()}},{label:"重置",value:"reset",icon:(0,n.createVNode)(l.HG3,null,null),handler(t){(0,r.T)({message:"确定要重置吗？您所有的修改都将消失！",type:"warning",title:"提示",confirmButtonText:"确认",cancelButtonText:"取消",showCancelButton:!0,showClose:!0,showConfirmButton:!0}).then((()=>{e?.commands?.clear(),R.x.delete(O.Z.currentRoute.value.query.saveId),a.z8.success("重制成功")})).catch((()=>{}))}},{label:"导入",value:"import",icon:(0,n.createVNode)(l.gqx,null,null),handler(t){const i=S({title:"导入JSON",content:JSON.stringify({blocks:[],container:{}},null,2),footer:!0,onConfirm(t){try{const n=JSON.parse(t);(0,T.$9)(n.blocks),e?.commands?.updatePage(n),i()}catch(n){a.z8.error("JSON 解析错误")}}})}},{label:"导出",value:"export",icon:(0,n.createVNode)(l.UWx,null,null),handler(t){S({title:"导出JSON",content:JSON.stringify(e?.editorData,null,2)})}},{label:"保存",value:"save",icon:(0,n.createVNode)(I,null,null),handler(t){(0,r.T)({message:"请输入标题",title:"保存",confirmButtonText:"保存",cancelButtonText:"取消",showCancelButton:!0,showClose:!0,showConfirmButton:!0,inputType:"text",showInput:!0,inputPlaceholder:"请输入标题",inputValue:e?.editorData?.container.title}).then((t=>{const i=t.value;e?.editorData&&(e.editorData.container.title=i),R.x.save(O.Z.currentRoute.value.query.saveId,e?.editorData),a.z8.success("已保存到本地")})).catch((()=>{}))}},{label:"预览",value:"preview",icon:(0,n.createVNode)(l.Lyo,null,null),handler(t){const i=O.Z.currentRoute.value.query.saveId;R.x.save(i,e?.editorData),a.z8.success({message:"已保存到本地",duration:1e3}),setTimeout((()=>{O.Z.push({path:"/preview",query:{saveId:i}})}),1e3)}},{label:"历史",value:"clear",icon:(0,n.createVNode)(l.aVo,null,null),handler(e){O.Z.push({path:"/record"})}},{label:"新页面",value:"new",icon:(0,n.createVNode)(l.BBB,null,null),handler(e){(0,A.kZ)(`http://${location.host}/vue3-lowcode/#/editor`)}}];return()=>(0,n.createVNode)(M.Z,null,{default:()=>[(0,n.createVNode)("div",{class:"absolute left-1/2 -translate-x-1/2 flex gap-x-1"},[t.map((e=>(0,n.createVNode)("div",{class:"flex flex-col items-center flex-shrink-0 gap-y-1 cursor-pointer select-none hover:bg-gray-100 active:bg-gray-200 py-1 px-5 rounded-md",onClick:t=>e.handler(t)},[(0,n.createVNode)((0,n.resolveComponent)("el-icon"),null,{default:()=>[e.icon]}),(0,n.createVNode)("span",{class:"text-xs"},[e.label])])))])]})}});const F={viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor"},B=(0,n.createElementVNode)("path",{d:"M381.298 418.828h-157.703l-37.575 38.272 155.61 158.377-278.212 345.128 356.040-265.838 154.71 157.41 38.813-39.51 2.407-157.972 238.838-313.29 71.685 73.013 34.695-35.28-310.185-315.743-34.672 35.257 77.287 79.402-311.737 240.773z"},null,-1),W=[B];function V(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",F,W)}const H={},z=(0,v.Z)(H,[["render",V]]);var U=z;const K={fill:"currentColor",width:"16",height:"16",viewBox:"0 0 1024 1024"},j=(0,n.createElementVNode)("path",{d:"M160.256 816.64C116.224 872.448 102.4 921.6 102.4 921.6s49.152-13.824 104.96-57.856c22.016-17.408 128-112.64 200.704-174.08l-73.728-73.728c-61.44 72.704-157.184 178.688-174.08 200.704zM648.704 209.408L442.368 355.328l226.304 226.304 145.92-206.336 15.872 15.872c20.992 20.992 54.784 20.992 75.776 0s20.992-54.784 0-75.776l-197.12-197.12c-20.992-20.992-54.784-20.992-75.776 0-20.992 20.992-20.992 54.784 0 75.776l15.36 15.36zM247.808 334.848c-9.728 2.048-18.944 6.656-26.624 14.336-20.992 20.992-20.992 54.784 0 75.776l377.856 377.856c20.992 20.992 54.784 20.992 75.776 0 7.68-7.68 12.288-16.896 14.336-26.624L247.808 334.848z"},null,-1),$=(0,n.createElementVNode)("path",{d:"M840.704 879.104c-9.728 0-19.456-3.584-27.136-11.264L155.648 210.432c-14.848-14.848-14.848-39.424 0-54.272 14.848-14.848 39.424-14.848 54.272 0L867.84 814.08c14.848 14.848 14.848 39.424 0 54.272-7.168 7.168-16.896 10.752-27.136 10.752z"},null,-1),q=[j,$];function G(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",K,q)}const Z={},Q=(0,v.Z)(Z,[["render",G]]);var J=Q,Y=i(5154);const X={fill:"currentColor",viewBox:"0 0 1024 1024"},ee=(0,n.createElementVNode)("path",{d:"M783.5648 437.4528h-18.0224V336.6912c0-43.8272-35.6352-79.4624-79.4624-79.4624h-110.592V241.664c0-90.9312-73.728-164.6592-164.6592-164.6592-90.9312 0-164.6592 73.728-164.6592 164.6592v15.5648H155.2384c-43.8272 0-79.4624 35.6352-79.4624 79.4624v131.4816c0 16.7936 13.9264 30.72 30.72 30.72h56.1152c56.9344 0 103.2192 46.2848 103.2192 103.2192s-46.2848 103.2192-103.2192 103.2192H106.496c-16.7936 0-30.72 13.9264-30.72 30.72v131.4816c0 43.8272 35.6352 79.4624 79.4624 79.4624h531.2512c43.8272 0 79.4624-35.6352 79.4624-79.4624v-100.7616h18.0224c90.9312 0 164.6592-73.728 164.6592-164.6592-0.4096-90.9312-74.1376-164.6592-165.0688-164.6592z m0 267.8784h-48.7424c-16.7936 0-30.72 13.9264-30.72 30.72v131.4816c0 9.8304-8.192 18.0224-18.0224 18.0224H155.2384c-9.8304 0-18.0224-8.192-18.0224-18.0224v-100.7616h25.3952c90.9312 0 164.6592-73.728 164.6592-164.6592 0-90.9312-73.728-164.6592-164.6592-164.6592h-25.3952V336.6912c0-9.8304 8.192-18.0224 18.0224-18.0224h121.6512c16.7936 0 30.72-13.9264 30.72-30.72V241.664c0-56.9344 46.2848-103.2192 103.2192-103.2192s103.2192 46.2848 103.2192 103.2192v46.2848c0 16.7936 13.9264 30.72 30.72 30.72h141.312c9.8304 0 18.0224 8.192 18.0224 18.0224v131.4816c0 16.7936 13.9264 30.72 30.72 30.72h48.7424c56.9344 0 103.2192 46.2848 103.2192 103.2192s-46.2848 103.2192-103.2192 103.2192z"},null,-1),te=[ee];function ie(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",X,te)}const ne={},oe=(0,v.Z)(ne,[["render",ie]]);var se=oe;const re={xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32"},ae=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M28 12h-8V4h8Zm-6-2h4V6h-4Z"},null,-1),le=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M17 15V9H9v14h14v-8Zm-6-4h4v4h-4Zm4 10h-4v-4h4Zm6 0h-4v-4h4Z"},null,-1),ce=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M26 28H6a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h10v2H6v20h20V16h2v10a2.002 2.002 0 0 1-2 2Z"},null,-1),de=[ae,le,ce];function he(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",re,de)}const ue={},ge=(0,v.Z)(ue,[["render",he]]);var me=ge;const pe={class:"flex flex-wrap gap-2"};function fe(e,t,i,o,s,r){const a=(0,n.resolveComponent)("MenuItem");return(0,n.openBlock)(),(0,n.createElementBlock)("div",pe,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.components,((t,i)=>((0,n.openBlock)(),(0,n.createBlock)(a,{key:i,class:"w-[48%]",clone:e.clone,component:t},null,8,["clone","component"])))),128))])}const be={class:"menu-item"};function ve(e,t,i,o,s,r){const a=(0,n.resolveComponent)("DraggableGroup");return(0,n.openBlock)(),(0,n.createBlock)(a,{"module-value":[e.component],group:{name:"components",pull:"clone",put:!1},"item-key":"key","ghost-class":"menu-item-ghost","chosen-class":"menu-item-chosen","drag-class":"menu-item-drag",clone:e.clone,onStart:t[0]||(t[0]=t=>e.$emit("start",t)),onEnd:t[1]||(t[1]=t=>e.$emit("end",t))},{default:(0,n.withCtx)((({element:e})=>[(0,n.createElementVNode)("div",be,[((0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.preview(e))))])])),_:1},8,["module-value","clone"])}var _e=i(9441),we=(0,n.defineComponent)({components:{DraggableGroup:_e.Z},props:{clone:{type:Function,default:()=>{}},component:{type:Object,default:()=>({})}},emits:["start","end"]});const Ce=(0,v.Z)(we,[["render",ve]]);var ye=Ce,Se=(0,n.defineComponent)({components:{MenuItem:ye},setup(){const{editorContext:e}=(0,Y._)(),t=(0,n.computed)((()=>e?.componentList?.filter((e=>e.key.startsWith("base:"))))),i=e=>(0,T.lf)(e);return{components:t,clone:i}}});const ke=(0,v.Z)(Se,[["render",fe]]);var xe=ke;const Le={class:"flex flex-wrap gap-2"};function Ne(e,t,i,o,s,r){const a=(0,n.resolveComponent)("MenuItem");return(0,n.openBlock)(),(0,n.createElementBlock)("div",Le,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.components,((t,i)=>((0,n.openBlock)(),(0,n.createBlock)(a,{key:i,class:"w-[48%]",clone:e.clone,component:t},null,8,["clone","component"])))),128))])}var De=(0,n.defineComponent)({components:{MenuItem:ye},setup(){const{editorContext:e}=(0,Y._)(),t=(0,n.computed)((()=>e?.componentList?.filter((e=>e.key.startsWith("container:"))))),i=e=>(0,T.lf)(e);return{components:t,clone:i}}});const Ee=(0,v.Z)(De,[["render",Ne]]);var Ie=Ee,Te=(0,n.defineComponent)({setup(){const{editorContext:e}=(0,Y._)(),t=(0,n.computed)({get(){return e?.editorData?.aside?.activePane},set(t){e.editorData.aside.activePane=t}}),i=[{label:"基本组件",icon:(0,n.createVNode)(se,null,null),pane:(0,n.createVNode)(xe,null,null)},{label:"容器组件",icon:(0,n.createVNode)(me,null,null),pane:(0,n.createVNode)(Ie,null,null)}],o=(0,n.computed)((()=>{const e=i[t.value];return e})),s=e=>{t.value!==e?t.value=e:t.value=-1},r=()=>{t.value=-1},a=(0,n.computed)({get(){return e?.editorData?.aside?.isPaneTop},set(t){e.editorData.aside.isPaneTop=t}}),c=()=>{a.value=!a.value};return()=>(0,n.createVNode)("aside",{class:"aside-wrapper"},[(0,n.createVNode)("div",{class:"aside-tabs"},[i.map(((e,i)=>(0,n.createVNode)("div",{class:["aside-tab",{"is-active":t.value===i}],key:i,onClick:()=>s(i)},[(0,n.createVNode)((0,n.resolveComponent)("el-icon"),{size:20},{default:()=>[e.icon]}),(0,n.createVNode)("span",{class:"text-xs"},[e.label])])))]),(0,n.withDirectives)((0,n.createVNode)("div",{class:["aside-pane",{"is-top":a.value}]},[(0,n.createVNode)("div",{class:"absolute left-0 top-1 w-full px-3 py-2 flex justify-between items-center"},[(0,n.createVNode)("span",{class:"text-sm font-bold"},[o.value?.label]),(0,n.createVNode)("div",{class:"flex justify-between items-center gap-3"},[(0,n.createVNode)((0,n.resolveComponent)("el-icon"),{class:"cursor-pointer",color:"#666",onClick:c},{default:()=>[a.value?(0,n.createVNode)(U,null,null):(0,n.createVNode)(J,null,null)]}),(0,n.createVNode)((0,n.resolveComponent)("el-icon"),{class:"cursor-pointer",onClick:r},{default:()=>[(0,n.createVNode)(l.x8P,null,null)]})])]),o.value?.pane]),[[n.vShow,t.value>-1]])])}}),Me=i(2642),Ae=i.n(Me);const Re={class:"table-columns-setting"},Oe={class:"flex items-center gap-x-2 mb-3 last:mb-0"},Pe=["onClick"],Fe=["onUpdate:modelValue"],Be=["onClick"];function We(e,t,i,o,s,r){const a=(0,n.resolveComponent)("EditPen"),l=(0,n.resolveComponent)("el-icon"),c=(0,n.resolveComponent)("el-input"),d=(0,n.resolveComponent)("Delete"),h=(0,n.resolveComponent)("Rank"),u=(0,n.resolveComponent)("Draggable"),g=(0,n.resolveComponent)("Plus");return(0,n.openBlock)(),(0,n.createElementBlock)("div",Re,[(0,n.createVNode)(u,{modelValue:e.columnsCopy,"onUpdate:modelValue":t[1]||(t[1]=t=>e.columnsCopy=t),animation:"150","item-key":"index",handle:".column-move-handle",onEnd:e.onChange},{item:(0,n.withCtx)((({element:i,index:o})=>[(0,n.createElementVNode)("div",Oe,[(0,n.createElementVNode)("div",{class:"w-6 h-6 flex items-center flex-shrink-0 justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200",onClick:t=>e.handleOpenExtension(i)},[(0,n.createVNode)(l,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(a)])),_:1})],8,Pe),(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":e=>i.label=e,class:"w-14 text-xs text-gray-700 flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden outline-none",onChange:t[0]||(t[0]=(...t)=>e.onChange&&e.onChange(...t))},null,40,Fe),[[n.vModelText,i.label]]),(0,n.createVNode)(c,{modelValue:i.prop,"onUpdate:modelValue":e=>i.prop=e,size:"small",onChange:e.onChange},null,8,["modelValue","onUpdate:modelValue","onChange"]),(0,n.createElementVNode)("div",{class:"w-6 h-6 flex items-center flex-shrink-0 justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200",onClick:t=>e.handleCancelColumn(o)},[(0,n.createVNode)(l,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(d)])),_:1})],8,Be),(0,n.createVNode)(l,{class:"cursor-move column-move-handle"},{default:(0,n.withCtx)((()=>[(0,n.createVNode)(h)])),_:1})])])),_:1},8,["modelValue","onEnd"]),(0,n.createElementVNode)("div",{class:"add-column",onClick:t[2]||(t[2]=(...t)=>e.handleAddColumn&&e.handleAddColumn(...t))},[(0,n.createTextVNode)("添加一项 "),(0,n.createVNode)(l,null,{default:(0,n.withCtx)((()=>[(0,n.createVNode)(g)])),_:1})])])}var Ve=i(7305),He=i(8948),ze=i(2255),Ue=i(4197),Ke=i.n(Ue),je=i(162);const $e=(0,n.defineComponent)({props:{options:{type:Object,default:()=>({})}},setup(e,{expose:t}){const i=(0,n.reactive)({visible:!1,options:e.options}),o=(0,n.ref)(),s=()=>{i.visible=!1};t({show(e){i.visible=!0,i.options=e}});const r=e=>{o.value?.contains(e.target)||s()};return(0,n.onMounted)((()=>{document.body.addEventListener("click",r,!0)})),(0,n.onUnmounted)((()=>{document.body.removeEventListener("click",r)})),()=>(0,n.withDirectives)((0,n.createVNode)("div",{class:"operator-extend-popover shadow-md shadow-gray-300",ref:o},[(0,n.createVNode)("div",{class:"flex justify-between p-4"},[(0,n.createVNode)("div",null,null),(0,n.createVNode)("div",{class:"w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200",onClick:s},[(0,n.createVNode)(je.gn,null,{default:()=>[(0,n.createVNode)(l.x8P,null,null)]})])]),(0,n.createVNode)("div",{class:"operator-extend-body"},[i.options?.content?.()])]),[[n.vShow,i.visible]])}});let qe;function Ge(e){if(!qe){const t=document.createElement("div");qe=(0,n.createVNode)($e,{options:e}),(0,n.render)(qe,t),document.body.appendChild(t.firstElementChild)}const{show:t}=qe.component?.exposed||{};t&&t(e)}var Ze=i(7651);const Qe={class:"field-item"},Je={class:"label"};function Ye(e,t,i,o,s,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",Qe,[(0,n.createElementVNode)("div",Je,(0,n.toDisplayString)(e.label),1),(0,n.renderSlot)(e.$slots,"default")])}var Xe=(0,n.defineComponent)({props:{label:{type:String,default:""}}});const et=(0,v.Z)(Xe,[["render",Ye]]);var tt=et,it=(0,n.defineComponent)({components:{EditPen:l.qHu,Delete:l.HG3,Plus:l.v37,Rank:l.yw1,Draggable:Ke()},props:{columns:{type:Array,default:()=>[]}},emits:["change","update:columns"],setup(e,{emit:t}){const i=(0,n.ref)(Ae()(e.columns)),o=()=>{t("update:columns",Ae()(i.value)),t("change")},r=()=>{i.value.push(Object.assign({},(0,Ze.fF)(),{prop:`prop${i.value.length}`})),o()},a=e=>{i.value.splice(e,1),o()},l={label:(e,t,i)=>(0,n.createVNode)(tt,{label:"列标题",key:i},{default:()=>[(0,n.createVNode)(Ve.EZ,{modelValue:e[t],"onUpdate:modelValue":i=>e[t]=i,onChange:o},null)]}),prop:(e,t,i)=>(0,n.createVNode)(tt,{label:"数据字段",key:i},{default:()=>[(0,n.createVNode)(Ve.EZ,{modelValue:e[t],"onUpdate:modelValue":i=>e[t]=i,onChange:o},null)]}),minWidth:(e,t,i)=>(0,n.createVNode)(tt,{label:"最小宽度",key:i},{default:()=>[(0,n.createVNode)(Ve.EZ,{modelValue:e[t],"onUpdate:modelValue":i=>e[t]=i,onChange:o},null)]}),width:(e,t,i)=>(0,n.createVNode)(tt,{label:"宽度大小",key:i},{default:()=>[(0,n.createVNode)(Ve.EZ,{modelValue:e[t],"onUpdate:modelValue":i=>e[t]=i,onChange:o},null)]}),align:(e,t,i)=>(0,n.createVNode)(tt,{label:"对齐方式",key:i},{default:()=>[(0,n.createVNode)(He.KD,{modelValue:e[t],"onUpdate:modelValue":i=>e[t]=i,onChange:o},{default:()=>[(0,n.createVNode)(He.dn,{label:"left"},{default:()=>[(0,n.createTextVNode)("Left")]}),(0,n.createVNode)(He.dn,{label:"right"},{default:()=>[(0,n.createTextVNode)("Right")]}),(0,n.createVNode)(He.dn,{label:"center"},{default:()=>[(0,n.createTextVNode)("Center")]})]})]}),fixed:(e,t,i)=>(0,n.createVNode)(tt,{label:"固定方向",key:i},{default:()=>[(0,n.createVNode)(He.KD,{modelValue:e[t],"onUpdate:modelValue":i=>e[t]=i,onChange:o},{default:()=>[(0,n.createVNode)(He.dn,{label:"left"},{default:()=>[(0,n.createTextVNode)("Left")]}),(0,n.createVNode)(He.dn,{label:"right"},{default:()=>[(0,n.createTextVNode)("Right")]})]})]}),slot:(e,t,i)=>(0,n.createVNode)(tt,{label:"使用插槽",key:i},{default:()=>[(0,n.createVNode)(ze.OX,{modelValue:e[t],"onUpdate:modelValue":i=>e[t]=i,onChange:o},null)]})},c=e=>{Ge({content:()=>Object.keys(e).map((t=>l[t](e,t,(0,s.h)())))})};return{handleOpenExtension:c,handleAddColumn:r,handleCancelColumn:a,onChange:o,columnsCopy:i}}});const nt=(0,v.Z)(it,[["render",We]]);var ot=nt;function st(e,t,i,o,s,r){const a=(0,n.resolveComponent)("el-button");return(0,n.openBlock)(),(0,n.createBlock)(a,{icon:e.Edit,type:"primary",onClick:e.handleOpenDialog},{default:(0,n.withCtx)((()=>[(0,n.createTextVNode)(" 编辑数据 ")])),_:1},8,["icon","onClick"])}var rt=(0,n.defineComponent)({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue","change"],setup(e,{emit:t}){const i=e=>{t("update:modelValue",e),t("change")},n=()=>{const t=S({title:"编辑数据",content:JSON.stringify(e.modelValue,null,2),footer:!0,onConfirm(e){try{const n=JSON.parse(e);i(n),t()}catch(n){a.z8.error("JSON 解析错误")}}})};return{Edit:l.I8b,handleOpenDialog:n}}});const at=(0,v.Z)(rt,[["render",st]]);var lt=at;const ct={class:"style-layout"},dt={class:"margin-wrapper"},ht={class:"margin-top"},ut={class:"margin-right"},gt={class:"margin-bottom"},mt={class:"margin-left"},pt={class:"padding-wrapper"},ft={class:"padding-top"},bt={class:"padding-right"},vt=(0,n.createElementVNode)("div",{class:"center"},"组件",-1),_t={class:"padding-bottom"},wt={class:"padding-left"};function Ct(e,t,i,o,s,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",ct,[(0,n.createElementVNode)("div",dt,[(0,n.createElementVNode)("div",ht,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.marginState.marginTop=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.marginState.marginTop]])]),(0,n.createElementVNode)("div",ut,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.marginState.marginRight=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.marginState.marginRight]])]),(0,n.createElementVNode)("div",gt,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.marginState.marginBottom=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.marginState.marginBottom]])]),(0,n.createElementVNode)("div",mt,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[3]||(t[3]=t=>e.marginState.marginLeft=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.marginState.marginLeft]])]),(0,n.createElementVNode)("div",pt,[(0,n.createElementVNode)("div",ft,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[4]||(t[4]=t=>e.paddingState.paddingTop=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.paddingState.paddingTop]])]),(0,n.createElementVNode)("div",bt,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[5]||(t[5]=t=>e.paddingState.paddingRight=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.paddingState.paddingRight]])]),vt,(0,n.createElementVNode)("div",_t,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.paddingState.paddingBottom=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.paddingState.paddingBottom]])]),(0,n.createElementVNode)("div",wt,[(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[7]||(t[7]=t=>e.paddingState.paddingLeft=t),class:"outline-none w-5 bg-transparent"},null,512),[[n.vModelText,e.paddingState.paddingLeft]])])])])])}var yt=(0,n.defineComponent)({props:{padding:{type:String,default:"0px 0px 0px 0px"},margin:{type:String,default:"0px 0px 0px 0px"}},emits:["update:padding","update:margin","change"],setup(e,{emit:t}){const i=(0,n.reactive)({paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0}),o=(0,n.reactive)({marginTop:0,marginRight:0,marginBottom:0,marginLeft:0}),s=e=>{const t=e.replace(/px/g,"").split(" ").map((e=>Number(e)));return t},r=(e,t)=>e.map((e=>t[e]+"px")).join(" ");return(0,n.watch)((()=>e.padding),(e=>{const[t,n,o,r]=s(e);Object.assign(i,{paddingTop:t,paddingRight:n,paddingBottom:o,paddingLeft:r})}),{immediate:!0}),(0,n.watch)((()=>e.margin),(e=>{const[t,i,n,r]=s(e);Object.assign(o,{marginTop:t,marginRight:i,marginBottom:n,marginLeft:r})}),{immediate:!0}),(0,n.watch)((()=>i),(e=>{const i=["paddingTop","paddingRight","paddingBottom","paddingLeft"],n=r(i,e);t("update:padding",n),t("change")}),{deep:!0}),(0,n.watch)((()=>o),(e=>{const i=["marginTop","marginRight","marginBottom","marginLeft"],n=r(i,e);t("update:margin",n),t("change")}),{deep:!0}),{paddingState:i,marginState:o}}});const St=(0,v.Z)(yt,[["render",Ct]]);var kt=St;function xt(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,n.isVNode)(e)}const Lt={input:({propName:e,model:t,update:i})=>(0,n.createVNode)((0,n.resolveComponent)("el-input"),{modelValue:t.props[e],"onUpdate:modelValue":i=>t.props[e]=i,onChange:i},null),select:({propName:e,model:t,update:i,config:o})=>{let s;return(0,n.createVNode)((0,n.resolveComponent)("el-select"),{modelValue:t.props[e],"onUpdate:modelValue":i=>t.props[e]=i,onChange:i},xt(s=o.options.map((e=>(0,n.createVNode)((0,n.resolveComponent)("el-option"),{label:e.label,value:e.value},null))))?s:{default:()=>[s]})},switch:({propName:e,model:t,update:i})=>(0,n.createVNode)((0,n.resolveComponent)("el-switch"),{modelValue:t.props[e],"onUpdate:modelValue":i=>t.props[e]=i,onChange:i},null),color:({propName:e,model:t,update:i})=>(0,n.createVNode)((0,n.resolveComponent)("el-color-picker"),{modelValue:t.props[e],"onUpdate:modelValue":i=>t.props[e]=i,onChange:i},null),radio:({propName:e,model:t,update:i,config:o})=>{let s;return(0,n.createVNode)((0,n.resolveComponent)("el-radio-group"),{modelValue:t.props[e],"onUpdate:modelValue":i=>t.props[e]=i,size:"small",onChange:i},xt(s=o.options.map((e=>(0,n.createVNode)((0,n.resolveComponent)("el-radio-button"),{label:e.value},{default:()=>[e.label]}))))?s:{default:()=>[s]})},inputNumber:({propName:e,model:t,update:i})=>(0,n.createVNode)((0,n.resolveComponent)("el-input-number"),{modelValue:t.props[e],"onUpdate:modelValue":i=>t.props[e]=i,"controls-position":"right",onChange:i},null),tableColumns:({propName:e,model:t,update:i})=>(0,n.createVNode)(ot,{columns:t.props[e],"onUpdate:columns":i=>t.props[e]=i,onChange:i},null),tableData:({propName:e,model:t,update:i})=>(0,n.createVNode)(lt,{modelValue:t.props[e],"onUpdate:modelValue":i=>t.props[e]=i,onChange:i},null)},Nt={radio:({propName:e,config:t,model:i,update:o})=>{let s;return(0,n.createVNode)((0,n.resolveComponent)("el-radio-group"),{modelValue:i.style[e],"onUpdate:modelValue":t=>i.style[e]=t,onChange:o},xt(s=t.options.map((e=>(0,n.createVNode)((0,n.resolveComponent)("el-radio-button"),{label:e.value},{default:()=>[e.label]}))))?s:{default:()=>[s]})},layout:({model:e,update:t})=>(0,n.createVNode)(kt,{padding:e.style["padding"],"onUpdate:padding":t=>e.style["padding"]=t,margin:e.style["margin"],"onUpdate:margin":t=>e.style["margin"]=t,onChange:t},null)};function Dt(e){return"function"===typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!(0,n.isVNode)(e)}var Et=(0,n.defineComponent)({props:{component:{type:Object,default:()=>({})},apply:{type:Function,default:()=>{}},editorBlock:{type:Object,default:()=>({})}},setup(e){const t=()=>{e.apply(e.editorBlock)};return()=>{const i=[];return e.component&&e.component.props&&Object.entries(e.component.props).map((([o,s])=>{let r;i.push((0,n.createVNode)((0,n.resolveComponent)("el-form-item"),{label:s.label},Dt(r=Lt[s.type]({propName:o,config:s,model:e.editorBlock,update:t}))?r:{default:()=>[r]}))})),e.component&&e.component.model&&Object.entries(e.component.model).map((([o,s])=>{i.push((0,n.createVNode)((0,n.resolveComponent)("el-form-item"),{label:s.label},{default:()=>[(0,n.createVNode)((0,n.resolveComponent)("el-input"),{modelValue:e.editorBlock.model[o],"onUpdate:modelValue":t=>e.editorBlock.model[o]=t,onInput:t},null)]}))})),e.component&&e.component.style&&Object.entries(e.component.style).map((([o,s])=>{let r;i.push((0,n.createVNode)((0,n.resolveComponent)("el-form-item"),{label:s.label},Dt(r=Nt[s.type]({propName:o,config:s,model:e.editorBlock,update:t}))?r:{default:()=>[r]}))})),(0,n.createVNode)((0,n.resolveComponent)("el-form"),{labelPosition:"left",size:"small"},{default:()=>[(0,n.createVNode)((0,n.resolveComponent)("el-form-item"),{label:"组件ID"},{default:()=>[e.editorBlock._id]}),i]})}}}),It=(0,n.defineComponent)({props:{apply:{type:Function,default:()=>{}},editorContainer:{type:Object,required:!0}},setup(e){const{editorContainer:t}=(0,n.toRefs)(e),i=()=>{e.apply(t.value)};return()=>(0,n.createVNode)((0,n.resolveComponent)("el-form"),{class:"p-5 h-full",size:"small"},{default:()=>[(0,n.createVNode)((0,n.resolveComponent)("el-form-item"),{label:"页面背景颜色"},{default:()=>[(0,n.createVNode)((0,n.resolveComponent)("el-color-picker"),{modelValue:t.value.style.backgroundColor,"onUpdate:modelValue":e=>t.value.style.backgroundColor=e,onChange:i},null)]})]})}}),Tt=(0,n.defineComponent)({setup(){const e=(0,n.inject)(c._),t=(0,n.computed)((()=>e?.blockState?.currentBlock)),i=(0,n.computed)((()=>e?.editorData?.container)),o=(0,n.ref)(),s=(0,n.ref)();(0,n.watch)((()=>t.value),(e=>{e&&(o.value=Ae()(e))}),{immediate:!0}),(0,n.watch)((()=>i.value),(e=>{e&&(s.value=Ae()(e))}),{immediate:!0});const r=i=>{e?.commands?.updateBlock(Ae()(i),t.value)},a=t=>{e?.commands?.updateContainer(t)},l=()=>{const t=(0,T.vf)(e.editorData.blocks);e?.blockState?.updateCurrentBlock(t)};return(0,n.nextTick)((()=>l())),()=>{if(!t.value)return(0,n.createVNode)("div",{class:"operator-wrapper max-xl:hidden"},[(0,n.createVNode)(It,{editorContainer:s.value,apply:a},null)]);const i=e?.componentMap[t.value.key];return(0,n.createVNode)("div",{class:"operator-wrapper max-xl:hidden"},[(0,n.createVNode)((0,n.resolveComponent)("el-tabs"),{type:"border-card"},{default:()=>[(0,n.createVNode)((0,n.resolveComponent)("el-tab-pane"),{label:"属性"},{default:()=>[(0,n.createVNode)(Et,{key:o.value?._id,component:i,editorBlock:o.value,apply:r},null)]}),(0,n.createVNode)((0,n.resolveComponent)("el-tab-pane"),{label:"事件"},{default:()=>[(0,n.createTextVNode)("TODO")]})]})])}}});const Mt={class:"flex-1 overflow-scroll flex items-center justify-center box-border p-4"};function At(e,t,i,o,s,r){const a=(0,n.resolveComponent)("BlockItem"),l=(0,n.resolveComponent)("DraggableGroup");return(0,n.openBlock)(),(0,n.createElementBlock)("div",Mt,[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["border-2 border-transparent box-content w-full h-full",[{"is-dragging":e.isDrag,"is-select":e.isSelectContainer}]])},[(0,n.createElementVNode)("div",{class:"fake-body bg-white overflow-scroll p-2 h-full",style:(0,n.normalizeStyle)(e.canvasStyle),onMousedown:t[1]||(t[1]=(...t)=>e.onMousedown&&e.onMousedown(...t))},[(0,n.createVNode)(l,{modelValue:e.editorData.blocks,"onUpdate:modelValue":t[0]||(t[0]=t=>e.editorData.blocks=t),"item-key":"_id","ghost-class":"drag-in-canvas-ghost"},{default:(0,n.withCtx)((({element:e})=>[((0,n.openBlock)(),(0,n.createBlock)(a,{key:e.key,"block-data":e},null,8,["block-data"]))])),_:1},8,["modelValue"])],36)],2)])}var Rt=i(8502),Ot=(0,n.defineComponent)({components:{DraggableGroup:_e.Z,BlockItem:Rt.Z},setup(){const{editorContext:e}=(0,Y._)(),t=(0,n.computed)((()=>e.editorData)),i=(0,n.computed)((()=>e?.isDrag)),o=(0,n.computed)((()=>!e?.blockState?.currentBlock)),s=(0,n.computed)((()=>{const t={...e?.editorData?.container?.style,width:"100%"};return t})),r=()=>{e?.blockState?.updateCurrentBlock?.(),(0,T.$9)(e?.editorData?.blocks??[])};return{canvasStyle:s,onMousedown:r,editorData:t,isDrag:i,isSelectContainer:o}}});const Pt=(0,v.Z)(Ot,[["render",At]]);var Ft=Pt,Bt=i(4336);const Wt=(0,n.defineComponent)({props:{options:{type:Object,default:()=>({})}},setup(e,{expose:t}){const i=(0,n.reactive)({options:{},visible:!0,top:0,left:0}),o=(0,n.computed)((()=>{const e={top:i.top+"px",left:i.left+"px"};return e}));t({show(e){i.visible=!0,i.options.content=e.content;const{left:t,top:n}=e.el.getBoundingClientRect();i.top=n+e.offsetY,i.left=t+e.offsetX},hide(){i.visible=!1}});const s=(0,n.ref)(),r=e=>{s.value?.contains(e.target)||(i.visible=!1)},a=(0,n.computed)((()=>{const e=i.options.content;if(e)return Array.isArray(e)?e.map(((e,t)=>(0,n.createVNode)(zt,{key:t,handler:e.handler},{default:()=>[(0,n.createVNode)(je.gn,null,{default:()=>[e.icon]}),(0,n.createVNode)("span",null,[e.label])]}))):i.options.content()}));return(0,n.onMounted)((()=>{document.body.addEventListener("mousedown",r,!0)})),(0,n.onUnmounted)((()=>{document.body.removeEventListener("mousedown",r)})),()=>(0,n.withDirectives)((0,n.createVNode)("div",{class:"dropdown-service",style:o.value,ref:s},[a.value]),[[n.vShow,i.visible]])}});let Vt;const Ht=e=>{if(!Vt){Vt=(0,n.createVNode)(Wt,{options:e});const t=document.createElement("div");(0,n.render)(Vt,t),document.body.appendChild(t.firstChild)}const{show:t,hide:i}=Vt.component?.exposed||{};return t&&t(e),()=>i()},zt=(0,n.defineComponent)({props:{handler:{type:Function,default:()=>{}}},setup(e,{slots:t}){const i=t=>{e.handler&&e.handler(t)};return()=>(0,n.createVNode)("div",{class:"dropdown-option flex items-center gap-1",onClick:e=>i(e)},{default:()=>t.default?.()})}}),Ut=(e,t)=>{const i=(0,n.ref)(),o=t=>{t?(t.focus||((0,T.$9)(e.value.blocks),t.focus=!0),i.value=t):(0,T.$9)(e.value.blocks)},r=(e,r)=>{e.preventDefault(),e.stopPropagation(),o(r);const c=Ht({content:[{label:"删除节点",icon:(0,n.h)(l.HG3),handler:()=>{t.delete(),c()}},{label:"查看节点",icon:(0,n.h)(l.G7x),handler:()=>{S({title:"节点信息",content:JSON.stringify(i.value,null,2)}),c()}},{label:"导入节点",icon:(0,n.h)(l.gqx),handler:()=>{const e=S({title:"导入节点信息",content:JSON.stringify({},null,2),footer:!0,onConfirm(n){try{t.updateBlock(JSON.parse(n),i.value),e(),c()}catch(o){a.z8.error("JSON 解析错误")}}})}},{label:"复制节点",icon:(0,n.h)(l._hA),handler:()=>{const e=Ae()(i.value);(0,T.o_)([e],(e=>{e._id=`__id_copy_${(0,s.h)(6)}`})),t.insetBlock(e,i.value),d(e),c()}}],el:e.target,offsetX:e.offsetX,offsetY:e.offsetY})},c=(e,t)=>{e.stopPropagation(),o(t)},d=e=>{i.value=e},h=()=>{d()};return T.U3.on("resetCurrentBlockData",h),(0,n.onUnmounted)((()=>{T.U3.off("resetCurrentBlockData",h)})),{onContextMenu:r,onMousedown:c,updateCurrentBlock:d,currentBlock:i}};function Kt(e){const t={current:-1,queue:[],commands:{},commandArray:[],destroyArray:[]},i=e=>{t.commandArray.push(e),t.commands[e.name]=(...i)=>{const{redo:n,undo:o}=e.execute(...i);if(n&&n(),!e.pushQueue)return;const s=t.current;let r=t.queue;r.length>0&&(r=r.slice(0,s+1),t.queue=r),r.push({redo:n,undo:o}),t.current=s+1}};return i({name:"drag",pushQueue:!0,init(){const i=()=>{this.before=Ae()(e.value.blocks)},n=()=>{t.commands.drag()};return T.U3.on("start",i),T.U3.on("end",n),()=>{T.U3.off("start",i),T.U3.off("end",n)}},execute(){const t=this.before,i=Ae()(e.value.blocks);return{redo(){e.value={...e.value,blocks:i}},undo(){e.value={...e.value,blocks:t}}}}}),i({name:"redo",keyboard:"ctrl+y",execute(){return{redo(){const e=t.queue[t.current+1];e&&(e.redo&&e.redo(),t.current++,T.U3.emit("resetCurrentBlockData"))}}}}),i({name:"undo",keyboard:"ctrl+z",execute(){return{redo(){if(-1===t.current)return;const e=t.queue[t.current];e&&(e.undo&&e.undo(),t.current--,T.U3.emit("resetCurrentBlockData"))}}}}),i({name:"delete",pushQueue:!0,execute(){const t={before:Ae()(e.value.blocks),after:Ae()((0,T.Up)(e.value.blocks))};return{undo:()=>{e.value={...e.value,blocks:t.before}},redo:()=>{e.value={...e.value,blocks:t.after}}}}}),i({name:"clear",pushQueue:!0,execute(){const t={before:Ae()(e.value.blocks),after:[]};return{undo:()=>{e.value={...e.value,blocks:t.before}},redo:()=>{e.value={...e.value,blocks:t.after}}}}}),i({name:"updateBlock",pushQueue:!0,execute(t,i){const n={before:Ae()(e.value.blocks),after:(()=>{const n=Ae()(e.value.blocks);return(0,T.o_)(n,(e=>{e._id===i._id&&Object.assign(e,t)})),n})()};return{redo:()=>{e.value={...e.value,blocks:n.after}},undo:()=>{e.value={...e.value,blocks:n.before}}}}}),i({name:"insetBlock",pushQueue:!0,execute(t,i){const n={before:Ae()(e.value.blocks),after:(()=>{const n=Ae()(e.value.blocks),o=(0,T.cV)(n);(0,T.$9)(o);const s=o.findIndex((e=>e._id===i._id));return o.splice(s+1,0,t),n})()};return{redo:()=>{e.value={...e.value,blocks:n.after}},undo:()=>{e.value={...e.value,blocks:n.before}}}}}),i({name:"updatePage",pushQueue:!0,execute(t){const i={before:Ae()(e.value),after:t};return{redo:()=>{e.value=i.after},undo:()=>{e.value=i.before}}}}),i({name:"updateContainer",pushQueue:!0,execute(t){const i={before:Ae()(e.value),after:{...e.value,container:{...t}}};return{redo:()=>{e.value=i.after},undo:()=>{e.value=i.before}}}}),(0,n.onUnmounted)((()=>{t.destroyArray.forEach((e=>e&&e()))})),t.commandArray.forEach((e=>{e.init&&t.destroyArray.push(e.init())})),t}var jt=(0,n.defineComponent)({name:"Editor",props:{modelValue:{type:Object,default:void 0}},emits:["update:modelValue"],setup(e,{emit:t}){const{replace:i}=(0,o.tv)(),{query:r}=(0,o.yj)();console.log(1111),r.saveId||i({path:"/editor",query:{...r,saveId:(0,s.h)(6)}});const a=()=>({aside:{},blocks:[],container:{style:{}}}),l=(0,n.ref)(a()),d=(0,n.computed)({get(){const t=e.modelValue||l.value;return t},set(e){t("update:modelValue",e),l.value=e}}),h=()=>{d.value.container=(0,T.fH)(d.value.container),d.value.aside=(0,T.dD)(d.value.aside),d.value.blocks=(0,T.x_)(d.value.blocks)};h();const{commands:u}=Kt(d),g=Ut(d,u),m=(0,Bt.r)();(0,n.provide)(c._,(0,n.reactive)({componentList:m.componentList,componentMap:m.componentMap,register:m.register,isDrag:!1,editorData:d,commands:u,blockState:g}));const p=async()=>{const e=R.x.get(r.saveId);e&&(console.log(e),l.value=e)};return p(),()=>(0,n.createVNode)("div",{class:"editor"},[(0,n.createVNode)(P,null,null),(0,n.createVNode)("section",{class:"content-wrapper"},[(0,n.createVNode)(Te,null,null),(0,n.createVNode)(Ft,null,null),(0,n.createVNode)(Tt,null,null)])])}})},2642:function(e,t,i){i(311),i(1321),
/*!
 * @license deepcopy.js Copyright(c) 2013 sasa+1
 * https://github.com/sasaplus1/deepcopy.js
 * Released under the MIT license.
 *
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*! @license DOMPurify 2.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.1/LICENSE */
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:()=>i.e(3227).then(i.bind(i,3227))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:()=>i.e(908).then(i.bind(i,908))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:()=>i.e(4746).then(i.bind(i,4746))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:()=>i.e(8902).then(i.bind(i,8902))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"bicep",extensions:[".bicep"],aliases:["Bicep"],loader:()=>i.e(6849).then(i.bind(i,6849))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"cameligo",extensions:[".mligo"],aliases:["Cameligo"],loader:()=>i.e(1002).then(i.bind(i,1002))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:()=>i.e(4906).then(i.bind(i,4906))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:()=>i.e(8775).then(i.bind(i,8775))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:()=>i.e(1230).then(i.bind(i,1230))}),vse({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:()=>i.e(1230).then(i.bind(i,1230))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:()=>i.e(1319).then(i.bind(i,1319))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"csp",extensions:[],aliases:["CSP","csp"],loader:()=>i.e(6876).then(i.bind(i,6876))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:()=>i.e(1732).then(i.bind(i,1732))});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var _se=Object.defineProperty,wse=Object.getOwnPropertyDescriptor,Cse=Object.getOwnPropertyNames,yse=Object.prototype.hasOwnProperty,Sse=(e,t,i,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of Cse(t))yse.call(e,o)||!i&&"default"===o||_se(e,o,{get:()=>t[o],enumerable:!(n=wse(t,o))||n.enumerable});return e},kse={};Sse(kse,s);var xse=class{constructor(e,t,i){(0,lse.Z)(this,"_onDidChange",new kse.Emitter),(0,lse.Z)(this,"_options",void 0),(0,lse.Z)(this,"_modeConfiguration",void 0),(0,lse.Z)(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(e){this.setOptions(e)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},Lse={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"},data:{useDefaultDataProvider:!0}},Nse={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0},Dse=new xse("css",Lse,Nse),Ese=new xse("scss",Lse,Nse),Ise=new xse("less",Lse,Nse);function Tse(){return i.e(9105).then(i.bind(i,9105))}kse.languages.css={cssDefaults:Dse,lessDefaults:Ise,scssDefaults:Ese},kse.languages.onLanguage("less",(()=>{Tse().then((e=>e.setupMode(Ise)))})),kse.languages.onLanguage("scss",(()=>{Tse().then((e=>e.setupMode(Ese)))})),kse.languages.onLanguage("css",(()=>{Tse().then((e=>e.setupMode(Dse)))})),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"dart",extensions:[".dart"],aliases:["Dart","dart"],mimetypes:["text/x-dart-source","text/x-dart"],loader:()=>i.e(5166).then(i.bind(i,5166))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:()=>i.e(5619).then(i.bind(i,5619))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"ecl",extensions:[".ecl"],aliases:["ECL","Ecl","ecl"],loader:()=>i.e(7153).then(i.bind(i,7153))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"elixir",extensions:[".ex",".exs"],aliases:["Elixir","elixir","ex"],loader:()=>i.e(8177).then(i.bind(i,8177))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"flow9",extensions:[".flow"],aliases:["Flow9","Flow","flow9","flow"],loader:()=>i.e(1782).then(i.bind(i,289))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"freemarker2",extensions:[".ftl",".ftlh",".ftlx"],aliases:["FreeMarker2","Apache FreeMarker2"],loader:()=>i.e(3793).then(i.bind(i,3793)).then((e=>e.TagAutoInterpolationDollar))}),vse({id:"freemarker2.tag-angle.interpolation-dollar",aliases:["FreeMarker2 (Angle/Dollar)","Apache FreeMarker2 (Angle/Dollar)"],loader:()=>i.e(3793).then(i.bind(i,3793)).then((e=>e.TagAngleInterpolationDollar))}),vse({id:"freemarker2.tag-bracket.interpolation-dollar",aliases:["FreeMarker2 (Bracket/Dollar)","Apache FreeMarker2 (Bracket/Dollar)"],loader:()=>i.e(3793).then(i.bind(i,3793)).then((e=>e.TagBracketInterpolationDollar))}),vse({id:"freemarker2.tag-angle.interpolation-bracket",aliases:["FreeMarker2 (Angle/Bracket)","Apache FreeMarker2 (Angle/Bracket)"],loader:()=>i.e(3793).then(i.bind(i,3793)).then((e=>e.TagAngleInterpolationBracket))}),vse({id:"freemarker2.tag-bracket.interpolation-bracket",aliases:["FreeMarker2 (Bracket/Bracket)","Apache FreeMarker2 (Bracket/Bracket)"],loader:()=>i.e(3793).then(i.bind(i,3793)).then((e=>e.TagBracketInterpolationBracket))}),vse({id:"freemarker2.tag-auto.interpolation-dollar",aliases:["FreeMarker2 (Auto/Dollar)","Apache FreeMarker2 (Auto/Dollar)"],loader:()=>i.e(3793).then(i.bind(i,3793)).then((e=>e.TagAutoInterpolationDollar))}),vse({id:"freemarker2.tag-auto.interpolation-bracket",aliases:["FreeMarker2 (Auto/Bracket)","Apache FreeMarker2 (Auto/Bracket)"],loader:()=>i.e(3793).then(i.bind(i,3793)).then((e=>e.TagAutoInterpolationBracket))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:()=>i.e(6627).then(i.bind(i,6627))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"go",extensions:[".go"],aliases:["Go"],loader:()=>i.e(437).then(i.bind(i,437))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:()=>i.e(1990).then(i.bind(i,1990))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars","hbs"],mimetypes:["text/x-handlebars-template"],loader:()=>i.e(5186).then(i.bind(i,5186))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"hcl",extensions:[".tf",".tfvars",".hcl"],aliases:["Terraform","tf","HCL","hcl"],loader:()=>i.e(5477).then(i.bind(i,5477))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:()=>i.e(390).then(i.bind(i,390))});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var Mse=Object.defineProperty,Ase=Object.getOwnPropertyDescriptor,Rse=Object.getOwnPropertyNames,Ose=Object.prototype.hasOwnProperty,Pse=(e,t,i,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of Rse(t))Ose.call(e,o)||!i&&"default"===o||Mse(e,o,{get:()=>t[o],enumerable:!(n=Ase(t,o))||n.enumerable});return e},Fse={};Pse(Fse,s);var Bse=class{constructor(e,t,i){(0,lse.Z)(this,"_onDidChange",new Fse.Emitter),(0,lse.Z)(this,"_options",void 0),(0,lse.Z)(this,"_modeConfiguration",void 0),(0,lse.Z)(this,"_languageId",void 0),this._languageId=e,this.setOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},Wse={tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},Vse={format:Wse,suggest:{},data:{useDefaultDataProvider:!0}};function Hse(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===zse,documentFormattingEdits:e===zse,documentRangeFormattingEdits:e===zse}}var zse="html",Use="handlebars",Kse="razor",jse=Yse(zse,Vse,Hse(zse)),$se=jse.defaults,qse=Yse(Use,Vse,Hse(Use)),Gse=qse.defaults,Zse=Yse(Kse,Vse,Hse(Kse)),Qse=Zse.defaults;function Jse(){return i.e(585).then(i.bind(i,585))}function Yse(e,t=Vse,i=Hse(e)){const n=new Bse(e,t,i);let o;const s=Fse.languages.onLanguage(e,(async()=>{o=(await Jse()).setupMode(n)}));return{defaults:n,dispose(){s.dispose(),o?.dispose(),o=void 0}}}Fse.languages.html={htmlDefaults:$se,razorDefaults:Qse,handlebarDefaults:Gse,htmlLanguageService:jse,handlebarLanguageService:qse,razorLanguageService:Zse,registerHTMLLanguageService:Yse},
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:()=>i.e(4858).then(i.bind(i,4858))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:()=>i.e(1715).then(i.bind(i,1715))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"javascript",extensions:[".js",".es6",".jsx",".mjs",".cjs"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:()=>i.e(6752).then(i.bind(i,6752))});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var Xse=Object.defineProperty,ere=Object.getOwnPropertyDescriptor,tre=Object.getOwnPropertyNames,ire=Object.prototype.hasOwnProperty,nre=(e,t,i,n)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let o of tre(t))ire.call(e,o)||!i&&"default"===o||Xse(e,o,{get:()=>t[o],enumerable:!(n=ere(t,o))||n.enumerable});return e},ore={};nre(ore,s);var sre=class{constructor(e,t,i){(0,lse.Z)(this,"_onDidChange",new ore.Emitter),(0,lse.Z)(this,"_diagnosticsOptions",void 0),(0,lse.Z)(this,"_modeConfiguration",void 0),(0,lse.Z)(this,"_languageId",void 0),this._languageId=e,this.setDiagnosticsOptions(t),this.setModeConfiguration(i)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},rre={validate:!0,allowComments:!0,schemas:[],enableSchemaRequest:!1,schemaRequest:"warning",schemaValidation:"warning",comments:"error",trailingCommas:"error"},are={documentFormattingEdits:!0,documentRangeFormattingEdits:!0,completionItems:!0,hovers:!0,documentSymbols:!0,tokens:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0},lre=new sre("json",rre,are);function cre(){return i.e(9340).then(i.bind(i,9340))}ore.languages.json={jsonDefaults:lre},ore.languages.register({id:"json",extensions:[".json",".bowerrc",".jshintrc",".jscsrc",".eslintrc",".babelrc",".har"],aliases:["JSON","json"],mimetypes:["application/json"]}),ore.languages.onLanguage("json",(()=>{cre().then((e=>e.setupMode(lre)))})),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"julia",extensions:[".jl"],aliases:["julia","Julia"],loader:()=>i.e(241).then(i.bind(i,241))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:()=>i.e(9315).then(i.bind(i,9315))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:()=>i.e(7012).then(i.bind(i,7012))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"lexon",extensions:[".lex"],aliases:["Lexon"],loader:()=>i.e(3937).then(i.bind(i,3937))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"liquid",extensions:[".liquid",".html.liquid"],aliases:["Liquid","liquid"],mimetypes:["application/liquid"],loader:()=>i.e(200).then(i.bind(i,200))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:()=>i.e(8353).then(i.bind(i,8353))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"m3",extensions:[".m3",".i3",".mg",".ig"],aliases:["Modula-3","Modula3","modula3","m3"],loader:()=>i.e(2457).then(i.bind(i,2457))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:()=>i.e(2063).then(i.bind(i,2063))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:()=>i.e(4856).then(i.bind(i,4856))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:()=>i.e(5296).then(i.bind(i,5296))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:()=>i.e(8327).then(i.bind(i,8327))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:()=>i.e(5582).then(i.bind(i,5582))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:()=>i.e(407).then(i.bind(i,407))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:()=>i.e(1442).then(i.bind(i,1442))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:()=>i.e(3115).then(i.bind(i,3115))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:()=>i.e(9669).then(i.bind(i,9669))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:()=>i.e(6819).then(i.bind(i,6819))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"pla",extensions:[".pla"],loader:()=>i.e(3819).then(i.bind(i,3819))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:()=>i.e(233).then(i.bind(i,233))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:()=>i.e(9059).then(i.bind(i,9059))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:()=>i.e(3347).then(i.bind(i,3347))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"proto",extensions:[".proto"],aliases:["protobuf","Protocol Buffers"],loader:()=>i.e(6018).then(i.bind(i,6018))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:()=>i.e(9816).then(i.bind(i,9816))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:()=>i.e(1329).then(i.bind(i,1329))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"qsharp",extensions:[".qs"],aliases:["Q#","qsharp"],loader:()=>i.e(2289).then(i.bind(i,2289))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"r",extensions:[".r",".rhistory",".rmd",".rprofile",".rt"],aliases:["R","r"],loader:()=>i.e(1305).then(i.bind(i,1305))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:()=>i.e(4253).then(i.bind(i,4253))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"redis",extensions:[".redis"],aliases:["redis"],loader:()=>i.e(9861).then(i.bind(i,9861))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:()=>i.e(3914).then(i.bind(i,3914))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"restructuredtext",extensions:[".rst"],aliases:["reStructuredText","restructuredtext"],loader:()=>i.e(2357).then(i.bind(i,2357))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile","Gemfile"],aliases:["Ruby","rb"],loader:()=>i.e(9072).then(i.bind(i,9072))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:()=>i.e(795).then(i.bind(i,795))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:()=>i.e(9580).then(i.bind(i,9580))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"scala",extensions:[".scala",".sc",".sbt"],aliases:["Scala","scala","SBT","Sbt","sbt","Dotty","dotty"],mimetypes:["text/x-scala-source","text/x-scala","text/x-sbt","text/x-dotty"],loader:()=>i.e(6629).then(i.bind(i,6629))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:()=>i.e(7972).then(i.bind(i,7972))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:()=>i.e(3179).then(i.bind(i,3179))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:()=>i.e(9118).then(i.bind(i,9118))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:()=>i.e(6280).then(i.bind(i,6280))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:()=>i.e(9487).then(i.bind(i,9487))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"sparql",extensions:[".rq"],aliases:["sparql","SPARQL"],loader:()=>i.e(849).then(i.bind(i,849))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:()=>i.e(7210).then(i.bind(i,7210))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:()=>i.e(2066).then(i.bind(i,2066))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:()=>i.e(3510).then(i.bind(i,3510))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"systemverilog",extensions:[".sv",".svh"],aliases:["SV","sv","SystemVerilog","systemverilog"],loader:()=>i.e(8333).then(i.bind(i,8333))}),vse({id:"verilog",extensions:[".v",".vh"],aliases:["V","v","Verilog","verilog"],loader:()=>i.e(8333).then(i.bind(i,8333))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:()=>i.e(3336).then(i.bind(i,3336))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:()=>i.e(4318).then(i.bind(i,4318))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:()=>i.e(5564).then(i.bind(i,5564))});i(2547);
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:()=>i.e(6909).then(i.bind(i,6909))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
vse({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:()=>i.e(1514).then(i.bind(i,1514))}),
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.32.1(29a273516805a852aa8edc5e05059f119b13eff0)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/