(function(){"use strict";var e={2215:function(e,t,a){var r=a(9242),n=a(3396),o=a(7139);const s={class:"navbar navbar-expand navbar-dark bg-dark shadow sticky-top","aria-label":"Second navbar example"},i={class:"container-fluid"},l=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample02","aria-controls":"navbarsExample02","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse border-start border-warning",id:"navbarsExample02"},u={class:"navbar-nav me-auto"},d={class:"nav-item text-warning text-opacity-75 bg-warning bg-opacity-25 px-2"},p={key:0,class:"bi bi-check-circle-fill"},v={class:"d-flex"},b={class:"navbar-nav me-auto"},m={class:"nav-item"},g={class:"nav-item"},f=(0,n.Uk)("About"),P={class:"container-fluid p-2 rounded"},h={class:"col-sm-12 mx-auto p-2"},O={class:"card bg-transparent border-0 shadow-sm p-0"},w={class:"card-body bg-dark bg-opacity-50 py-0"},y={class:"footer"},S={class:"text-end text-warning text-opacity-25 px-4 py-2"};function T(e,t,a,T,k,L){const _=(0,n.up)("Icon"),F=(0,n.up)("router-link"),M=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",s,[(0,n._)("div",i,[(0,n.Wm)(F,{class:"navbar-brand text-warning mx-2",to:{name:T.tradeOptionSelected}},{default:(0,n.w5)((()=>[(0,n.Wm)(_,{name:"BarChartFill"}),(0,n.Uk)(" "+(0,o.zw)(T.appWebName),1)])),_:1},8,["to"]),l,(0,n._)("div",c,[(0,n._)("ul",u,[(0,n._)("li",d,(0,o.zw)(T.title),1),(0,n._)("li",{class:(0,o.C_)(["nav-item px-2",[T.message.text,T.message.bg]])},["success"===T.message.type?((0,n.wg)(),(0,n.iD)("i",p)):(0,n.kq)("",!0),(0,n.Uk)(" "+(0,o.zw)(T.message.value),1)],2)]),(0,n._)("div",v,[(0,n._)("ul",b,[(0,n._)("li",m,[(0,n._)("button",{onClick:t[0]||(t[0]=(0,r.iM)((e=>T.selectOption()),["prevent"])),class:"btn btn-sm text-warning m-1 border-0 px-1 shadow-none"},(0,o.zw)(T.tradeOptionUnselected),1)]),(0,n._)("li",g,[(0,n.Wm)(F,{to:{name:"AboutPage"},class:"btn btn-sm text-warning m-1 border-0 px-1 shadow-none"},{default:(0,n.w5)((()=>[f])),_:1})])])])])])]),(0,n._)("div",P,[(0,n._)("div",h,[(0,n._)("div",O,[(0,n._)("div",w,[(0,n.Wm)(M)])])])]),(0,n._)("footer",y,[(0,n._)("div",S,[(0,n._)("small",null,(0,o.zw)(T.appWebName)+" - ver. "+(0,o.zw)(T.appWebVersion),1)])])],64)}a(7658);var k=a(65),L=a(2483),_=a(9049),F={components:{Icon:_.Z},setup(){const e=(0,k.oR)(),t=(0,L.tv)(),a=(new Date).getFullYear(),r="0.1.0",o=(0,n.Fl)((()=>{let{type:t,value:a}=e.state.message,r="text-"+t+" text-opacity-10",n="bg-"+t+" bg-opacity-50";return{text:r,bg:n,value:a,type:t}})),s=(0,n.Fl)((()=>e.state.message.value?"mT":"myTrades")),i=()=>{if(""!==e.getters.getTradeOptionSelected){const a="opf"===e.getters.getTradeOptionSelected?"opm":"opf";e.commit("setTradeOptionSelected",a.toLowerCase()),"opm"===a.toLowerCase()&&t.push({name:"OPMTradeListPage"}),"opf"===a.toLowerCase()&&t.push({name:"OPFTradeListPage"})}else t.push({name:"TradeOptionPage"})};return{appWebVersion:r,appWebName:s,footerYear:a,title:(0,n.Fl)((()=>e.state.title)),message:o,tradeOptionSelected:(0,n.Fl)((()=>null===e.getters.getTradeOptionSelected?"TradeOptionPage":"opf"===e.getters.getTradeOptionSelected?"OPFTradeListPage":"OPMTradeListPage")),tradeOptionUnselected:(0,n.Fl)((()=>null===e.getters.getTradeOptionSelected?"OPX":"opm"===e.getters.getTradeOptionSelected?"OPF":"OPM")),selectOption:i}}},M=a(89);const x=(0,M.Z)(F,[["render",T]]);var C=x,j=a(5431);(0,j.z)("/mytrades/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const R=[{path:"/",name:"Home",beforeEnter:(e,t,a)=>{a({name:"TradeOptionPage"})}},{path:"/about",name:"AboutPage",component:()=>a.e(145).then(a.bind(a,583))},{path:"/option-trade",name:"TradeOptionPage",component:()=>a.e(844).then(a.bind(a,2155))}],E=[{path:"/opm",name:"OPMTradeListPage",component:()=>a.e(430).then(a.bind(a,4708)),props:{message:!1}},{path:"/opm/checklist",name:"OPMCheckListPage",component:()=>a.e(247).then(a.bind(a,6127))},{path:"/opm/trade/:id?",name:"OPMTradePage",component:()=>a.e(472).then(a.bind(a,6741))},{path:"/opm/trade-list-setup",name:"OPMTradeListSetupPage",component:()=>a.e(779).then(a.bind(a,7638))},{path:"/opm/trade-list-data",name:"OPMTradeListDataPage",component:()=>a.e(737).then(a.bind(a,4239))}],I=[{path:"/opf",name:"OPFTradeListPage",component:()=>a.e(653).then(a.bind(a,6479)),props:{message:!1}},{path:"/opf/trade/:id?",name:"OPFTradePage",component:()=>a.e(660).then(a.bind(a,1409))},{path:"/opf/trade-list-setup",name:"OPFTradeListSetupPage",component:()=>a.e(302).then(a.bind(a,2213))},{path:"/opf/trade-list-data",name:"OPFTradeListDataPage",component:()=>a.e(173).then(a.bind(a,9530))}],N=(0,L.p7)({history:(0,L.PO)("/mytrades/"),routes:[...R,...E,...I]});var A=N,D=a(9235),W=(0,k.MT)({state:{tradeOptionSelected:"",title:"",message:{type:"",value:""},tradeData:[],tradeSetupOPM:{isLoading:!0,columns:{average:{value:"X",visible:!0},priceIn:{value:"EP",visible:!0},mL:{value:"M/L",visible:!0},stopLoss:{value:"SL",visible:!0},takeProfit:{value:"TP",visible:!0},priceClose:{value:"CP",visible:!0},risk:{value:"Risk",visible:!0},rf:{value:"RF",visible:!0},lM:{value:"L/M",visible:!0},rrr:{value:"RRR",visible:!0},r:{value:"R",visible:!0},r2:{value:"R2",visible:!0},return:{value:"Return",visible:!0}}},tradeSetupOPF:{isLoading:!0,columns:{temporality:{value:"T",visible:!0},average:{value:"X",visible:!0},priceIn:{value:"EP",visible:!0},stopLoss:{value:"SL",visible:!0},takeProfit:{value:"TP",visible:!0},priceClose:{value:"CP",visible:!0},feeIn:{value:"FI",visible:!0},feeOut:{value:"FO",visible:!0},risk:{value:"Risk",visible:!0},rf:{value:"RF",visible:!0},win:{value:"%W",visible:!0},lose:{value:"%L",visible:!0},profit:{value:"Profit",visible:!0},result:{value:"Result",visible:!0},net:{value:"Net",visible:!0}}}},getters:{getTradeOptionSelected(e){return""===e.tradeOptionSelected?localStorage.getItem("tradeOptionSelected"):e.tradeOptionSelected}},mutations:{setTradeOptionSelected(e,t){localStorage.setItem("tradeOptionSelected",t),e.tradeOptionSelected=t},setTitle(e,t){e.title=t},setMessage(e,t){e.message=t},setTradeSetupOPM(e,t){e.tradeSetupOPM=t},setTradeSetupOPF(e,t){e.tradeSetupOPF=t}},actions:{async loadTradeSetupOPM({commit:e}){try{await D.Z.getSetupOPM().then((t=>{t?(delete t.id,e("setTradeSetupOPM",{columns:t,isLoading:!1}),console.log("loadTradeSetupOPM - ok",t)):console.log("empty data")})).catch((e=>{console.log("actions.loadTradeSetupOPM - 3",e)}))}catch(t){console.log(t)}},async loadTradeSetupOPF({commit:e}){try{await D.Z.getSetupOPF().then((t=>{t?(delete t.id,e("setTradeSetupOPF",{columns:t,isLoading:!1})):console.log("empty data")})).catch((e=>{console.log("actions.loadTradeSetupOPF - 3",e)}))}catch(t){console.log(t)}}},modules:{}});a(3060);(0,r.ri)(C).use(W).use(A).mount("#app")},9235:function(e,t,a){a(7658);const r="myTradedb",n=1;let o;const s=()=>{let e=localStorage.getItem("tradeOptionSelected"),t="trades_"+e,a="trades_setup_"+e;return{default:t,setup:a}},i=async()=>new Promise(((e,t)=>{if(o)return e(o);console.log("OPENING DB",o);let a=window.indexedDB.open(r,n);a.onerror=e=>{console.log("Error opening db",e),t("Error")},a.onsuccess=t=>{o=t.target.result,e(o)},a.onupgradeneeded=e=>{console.log("onupgradeneeded");let t=e.target.result;t.createObjectStore("trades_opm",{autoIncrement:!0,keyPath:"id"}),t.createObjectStore("trades_opf",{autoIncrement:!0,keyPath:"id"}),t.createObjectStore("trades_setup_opm",{autoIncrement:!0,keyPath:"id"}),t.createObjectStore("trades_setup_opf",{autoIncrement:!0,keyPath:"id"})}})),l=async()=>{let e=await i();return new Promise((t=>{let a=e.transaction([s().default],"readonly");a.oncomplete=()=>{t(n)};let r=a.objectStore(s().default),n=[];r.openCursor().onsuccess=e=>{let t=e.target.result;t&&(n.push(t.value),t.continue())}}))},c=async e=>{let t=await i();return new Promise(((a,r)=>{let n=t.transaction([s().default],"readwrite").objectStore(s().default),o=Number(e);const i=n.get(o);i.onerror=()=>{},i.onsuccess=()=>{let e=i.result;void 0===e&&r("No exist trade id: "+o),a(e)}}))},u=async e=>{console.log("save",e);let t=await i();return new Promise(((a,r)=>{try{let r=t.transaction([s().default],"readwrite"),n=Number(e.id);if(delete e.id,0===n){r.oncomplete=()=>{a()};let t=r.objectStore(s().default);t.put(e)}else{let t=r.objectStore(s().default);const o=t.get(n);o.onsuccess=()=>{let r=o.result;for(const t in e)r[t]=e[t];const n=t.put(r);n.onsuccess=()=>{a()}}}}catch(n){r(n)}}))},d=async e=>{let t=await i();return new Promise((a=>{let r=t.transaction([s().default],"readwrite");r.oncomplete=()=>{a()};let n=r.objectStore(s().default);n.delete(e.id)}))},p=async()=>{let e=await i();return new Promise(((t,a)=>{let r=e.transaction([s().default],"readwrite");r.oncomplete=()=>{a("Transaction complete!")},r.onerror=()=>{a("Error: "+r.error)};const n=r.objectStore(s().default),o=n.clear();o.onsuccess=()=>{t({message:"Delete data successful",status:"success"})}}))},v=async()=>{let e=await i(),t={average:{value:"X",visible:!0},priceIn:{value:"EP",visible:!0},mL:{value:"M/L",visible:!0},stopLoss:{value:"SL",visible:!0},takeProfit:{value:"TP",visible:!0},priceClose:{value:"CP",visible:!0},risk:{value:"Risk",visible:!0},rf:{value:"RF",visible:!0},lM:{value:"L/M",visible:!0},rrr:{value:"RRR",visible:!0},r:{value:"R",visible:!0},r2:{value:"R2",visible:!0},return:{value:"Return",visible:!0}};return new Promise((a=>{try{let r=e.transaction([s().setup],"readonly");r.oncomplete=()=>{a(t)};let n=r.objectStore(s().setup);n.openCursor().onsuccess=e=>{let a=e.target.result;a&&(t={...a.value})}}catch(r){a(t)}}))},b=async()=>{let e=await i(),t={stakeAmount:{value:"Stake",visible:!0},temporality:{value:"T",visible:!0},average:{value:"X",visible:!0},priceIn:{value:"EP",visible:!0},stopLoss:{value:"SL",visible:!0},takeProfit:{value:"TP",visible:!0},priceClose:{value:"CP",visible:!0},feeIn:{value:"FI",visible:!0},feeOut:{value:"FO",visible:!0},risk:{value:"Risk",visible:!0},rf:{value:"RF",visible:!0},win:{value:"%W",visible:!0},lose:{value:"%L",visible:!0},profit:{value:"Profit",visible:!0},result:{value:"Result",visible:!0},net:{value:"Net",visible:!0}};return new Promise((a=>{try{let r=e.transaction([s().setup],"readonly");r.oncomplete=()=>{a(t)};let n=r.objectStore(s().setup);n.openCursor().onsuccess=e=>{let a=e.target.result;a&&(t={...a.value})}}catch(r){a(t)}}))},m=async e=>{console.log("saveSetup",e),console.log("saveSetup",s().setup);let t=await i();return new Promise(((a,r)=>{try{const r=s().setup;let n=t.transaction([r],"readwrite");n.oncomplete=()=>{a()};let o=n.objectStore(r);const i=o.clear();i.onsuccess=()=>{o.put(e)}}catch(n){r(n)}}))},g=async()=>{let e=await i();return new Promise(((t,a)=>{let r=e.transaction([s().setup],"readwrite");r.oncomplete=()=>{a("Transaction complete!")},r.onerror=()=>{a("Error: "+r.error)};const n=r.objectStore(s().setup),o=n.clear();o.onsuccess=()=>{t({message:"Reset data successful",status:"success"})}}))};t["Z"]={getDb:i,remove:d,getList:l,save:u,get:c,removeAll:p,saveSetup:m,getSetupOPM:v,getSetupOPF:b,resetSetup:g}},9049:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(3396);function n(e,t,a,n,o,s){return(0,r.wg)(),(0,r.j4)((0,r.LL)(n.iconComponent))}const o={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-bar-chart-fill",viewBox:"0 0 16 16"},s=(0,r._)("path",{d:"M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"},null,-1),i=[s];function l(e,t){return(0,r.wg)(),(0,r.iD)("svg",o,i)}var c=a(89);const u={},d=(0,c.Z)(u,[["render",l]]);var p=d;const v={BarChartFill:p};var b={name:"IconComponent",props:{name:{type:String,required:!0,validator(e){return Object.prototype.hasOwnProperty.call(v,e)}}},setup(e){return{iconComponent:(0,r.Fl)((()=>v[e.name]))}}};const m=(0,c.Z)(b,[["render",n]]);var g=m}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var s=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],o=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&o||s>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+{145:"AboutPage",173:"OPF_TradeListDataPage",247:"OPM_CheckListPage",302:"OPF_TradeListSetupPage",430:"OPM_TradeListPage",472:"OPM_TradePage",653:"OPF_TradeListPage",660:"OPF_TradePage",737:"OPM_TradeListDataPage",779:"OPM_TradeListSetupPage",844:"TradeOptionPage"}[e]+"."+{145:"8e59cf68",173:"dbf97216",247:"0a5e149a",302:"314812ac",430:"811bd962",472:"7c2f8755",653:"47976d99",660:"747e9191",737:"70b61d7a",779:"48e22f1a",844:"13c5f533"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mytrades:";a.l=function(r,n,o,s){if(e[r])e[r].push(n);else{var i,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var p=function(t,a){i.onerror=i.onload=null,clearTimeout(v);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((function(e){return e(a)})),t)return t(a)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/mytrades/"}(),function(){var e={143:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=e[t]=[a,r]}));r.push(n[2]=o);var s=a.p+a.u(t),i=new Error,l=function(r){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,n[1](i)}};a.l(s,l,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],i=r[1],l=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(r);c<s.length;c++)o=s[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self["webpackChunkmytrades"]=self["webpackChunkmytrades"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2215)}));r=a.O(r)})();
//# sourceMappingURL=app.9a78f55b.js.map