(this["webpackJsonp3d-landing"]=this["webpackJsonp3d-landing"]||[]).push([[0],{21:function(e,t,n){e.exports={modelSwitcherContainer:"ModelSwitcher_modelSwitcherContainer__QaJ6W",title:"ModelSwitcher_title__2pbvy",modelLoader:"ModelSwitcher_modelLoader__1ZSPc",modelInfoContainer:"ModelSwitcher_modelInfoContainer__3kkHX",loadingSection:"ModelSwitcher_loadingSection__2DR5v",loading:"ModelSwitcher_loading__8sNgm",controlsContainer:"ModelSwitcher_controlsContainer__2BoAk",prevButton:"ModelSwitcher_prevButton__1aFcy",nextButton:"ModelSwitcher_nextButton__1eRia"}},34:function(e,t,n){e.exports={footerContainer:"Footer_footerContainer__3ZvzQ",sign:"Footer_sign__10MSa",socialNetworks:"Footer_socialNetworks__2wVT6"}},38:function(e,t,n){e.exports={homeContainer:"Home_homeContainer__YiOYi",errorContainer:"Home_errorContainer__osJ_O"}},54:function(e,t,n){e.exports={layoutContainer:"Layout_layoutContainer__3ZVu2"}},55:function(e,t,n){e.exports={modelLoaderContainer:"ModelLoader_modelLoaderContainer__3FBya"}},58:function(e,t,n){e.exports=n.p+"static/media/cube.00f9a34e.svg"},59:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__gXaeW"}},63:function(e,t,n){e.exports=n(76)},68:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(43),l=n.n(r),c=(n(68),n(79)),i=n(81),s=n(47),m="https://l3d-backend.herokuapp.com/",u=new c.a({cache:new i.a,link:new s.a({uri:"".concat(m,"graphql")})}),d=n(78),f=n(54),h=n.n(f),p=n(33),_=n(21),E=n.n(_),g=n(62),v=n(55),w=n.n(v),C=function(e){var t=e.src,n=e.exposure,a=e.name,r=e.poster,l=e.modelRef;return o.a.createElement("div",{className:w.a.modelLoaderContainer},o.a.createElement("model-viewer",{ref:l,style:Object(g.a)({"--poster-color":"rgba(1,1,1,0)"},{zIndex:1,height:"358px"}),"camera-orbit":"45deg 55deg",src:t,exposure:n,alt:"A 3d model of "+a,poster:r,"auto-rotate":!0,"camera-controls":!0}))},b=C;C.defaultProps={exposure:".5",poster:null};var N=function(e){var t=e.models,n=e.loading,r=t.map((function(e){return"".concat(m,"static/").concat(e.file)})),l=Object(a.useRef)(null),c=Object(a.useState)(0),i=Object(p.a)(c,2),s=i[0],u=i[1],d=Object(a.useCallback)((function(){l.current&&l.current.setAttribute("src",r[s])}),[l,r,s]);Object(a.useEffect)((function(){var e=setInterval((function(){s+1<r.length?u((function(e){return e+1})):u(0)}),1e4);return d(),function(){clearInterval(e)}}),[s,r,d]);var f=function(e){switch(e){case"prev":u(s>0?function(e){return e-1}:r.length-1),d();break;case"next":s<r.length-1?u(s+1):u(0),d()}};return o.a.createElement("div",{className:E.a.modelSwitcherContainer},o.a.createElement("div",{className:E.a.title},o.a.createElement("h2",null,"3d art"),o.a.createElement("h1",null," Low Poly ")),o.a.createElement(b,{className:E.a.modelLoader,modelRef:l,src:r[s],name:"barril"}),o.a.createElement("div",{className:E.a.controlsContainer},o.a.createElement("span",{role:"button",onClick:function(){return f("prev")},className:E.a.prevButton}),o.a.createElement("span",{role:"button",onClick:function(){return f("next")},className:E.a.nextButton})),o.a.createElement("div",{className:E.a.modelInfoContainer},!n&&t[s]&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,t[s].name),o.a.createElement("p",null,t[s].description),o.a.createElement("a",{href:"".concat(m,"static/").concat(t[s].file)},"Download it !")),n&&o.a.createElement("div",{className:E.a.loadingSection},o.a.createElement("p",null),o.a.createElement("p",null))))},S=n(38),k=n.n(S),x=n(80),y=n(56),j=n(57);function M(){var e=Object(y.a)(["\n  query getModels {\n    models {\n      name\n      description\n      file\n    }\n  }\n"]);return M=function(){return e},e}var O=n.n(j)()(M()),B=function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),r=n[0],l=n[1],c=Object(x.a)(O),i=c.loading,s=c.data,m=c.error;return Object(a.useEffect)((function(){!i&&s&&l(s.models)}),[s,i]),o.a.createElement("main",{className:k.a.homeContainer},m?o.a.createElement("div",{className:k.a.errorContainer},"Ups it seems im still playing with this page, if the error persist please contact me. Maybe somebody drop coffee on the server."):o.a.createElement(N,{models:r,loading:i}))},L=n(58),I=n.n(L),F=n(59),R=n.n(F),q=n(60),z=function(e){return o.a.createElement("header",{className:R.a.headerContainer},o.a.createElement("img",{src:I.a,alt:"logo","data-tip":"Keep walking pal"}),o.a.createElement(q.a,null))},D=n(34),H=n.n(D),J=function(e){return o.a.createElement("footer",{className:H.a.footerContainer},o.a.createElement("p",{className:H.a.sign},"Built with"," ",o.a.createElement("span",{role:"img","aria-label":"heart emoji"},"\ud83d\udc96")," ","by David Qui\xf1onez"),o.a.createElement("div",{className:H.a.socialNetworks},o.a.createElement("a",{href:"https://www.linkedin.com/in/david-alejandro-qui%C3%B1onez-mosquera-331b71171/"},"Li"),o.a.createElement("a",{href:"https://github.com/Dalejan/3d-landing"},"Gh")))},W=function(e){return o.a.createElement("div",{className:h.a.layoutContainer},o.a.createElement(z,null),o.a.createElement(B,null),o.a.createElement(J,null))};var A=function(){return o.a.createElement(d.a,{client:u},o.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.af9ec7fb.chunk.js.map