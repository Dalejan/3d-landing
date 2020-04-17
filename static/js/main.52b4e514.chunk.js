(this["webpackJsonp3d-landing"]=this["webpackJsonp3d-landing"]||[]).push([[0],{22:function(e,t,n){e.exports={modelSwitcherContainer:"ModelSwitcher_modelSwitcherContainer__QaJ6W",title:"ModelSwitcher_title__2pbvy",modelLoader:"ModelSwitcher_modelLoader__1ZSPc",modelInfoContainer:"ModelSwitcher_modelInfoContainer__3kkHX",controlsContainer:"ModelSwitcher_controlsContainer__2BoAk",prevButton:"ModelSwitcher_prevButton__1aFcy",nextButton:"ModelSwitcher_nextButton__1eRia"}},34:function(e,t,n){e.exports={footerContainer:"Footer_footerContainer__3ZvzQ",sign:"Footer_sign__10MSa",socialNetworks:"Footer_socialNetworks__2wVT6"}},53:function(e,t,n){e.exports={layoutContainer:"Layout_layoutContainer__3ZVu2"}},54:function(e,t,n){e.exports={modelLoaderContainer:"ModelLoader_modelLoaderContainer__3FBya"}},55:function(e,t,n){e.exports={homeContainer:"Home_homeContainer__YiOYi"}},58:function(e,t,n){e.exports=n.p+"static/media/logo.5d9a9f85.svg"},59:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__gXaeW"}},63:function(e,t,n){e.exports=n(76)},68:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n.n(a),r=n(42),l=n.n(r),c=(n(68),n(79)),i=n(81),s=n(46),u="https://l3d-backend.herokuapp.com/",m=new c.a({cache:new i.a,link:new s.a({uri:"".concat(u,"graphql")})}),d=n(78),f=n(53),h=n.n(f),p=n(33),_=n(22),E=n.n(_),v=n(62),w=n(54),g=n.n(w),b=function(e){var t=e.src,n=e.exposure,a=e.name,r=e.poster,l=e.modelRef;return o.a.createElement("div",{className:g.a.modelLoaderContainer},o.a.createElement("model-viewer",{ref:l,style:Object(v.a)({"--poster-color":"rgba(1,1,1,0)"},{zIndex:1,height:"358px"}),"camera-orbit":"45deg 55deg",src:t,exposure:n,alt:"A 3d model of "+a,poster:r,"auto-rotate":!0,"camera-controls":!0}))},C=b;b.defaultProps={exposure:".5",poster:null};var k=function(e){var t=e.models,n=t.map((function(e){return"".concat(u,"static/").concat(e.file)})),r=Object(a.useRef)(null),l=Object(a.useState)(0),c=Object(p.a)(l,2),i=c[0],s=c[1],m=Object(a.useCallback)((function(){r.current&&r.current.setAttribute("src",n[i])}),[r,n,i]);Object(a.useEffect)((function(){var e=setInterval((function(){i+1<n.length?s((function(e){return e+1})):s(0)}),1e4);return m(),function(){clearInterval(e)}}),[i,n,m]);var d=function(e){switch(e){case"prev":s(i>0?function(e){return e-1}:n.length-1),m();break;case"next":i<n.length-1?s(i+1):s(0),m()}};return o.a.createElement("div",{className:E.a.modelSwitcherContainer},o.a.createElement("div",{className:E.a.title},o.a.createElement("h2",null,"3d art"),o.a.createElement("h1",null," Low Poly ")),o.a.createElement(C,{className:E.a.modelLoader,modelRef:r,src:n[i],name:"barril"}),o.a.createElement("div",{className:E.a.modelInfoContainer},t[i]&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",null,t[i].name),o.a.createElement("p",null,t[i].description),o.a.createElement("button",null,"Learn More"))),o.a.createElement("div",{className:E.a.controlsContainer},o.a.createElement("span",{role:"button",onClick:function(){return d("prev")},className:E.a.prevButton}),o.a.createElement("span",{role:"button",onClick:function(){return d("next")},className:E.a.nextButton})))},x=n(55),N=n.n(x),S=n(80),j=n(56),y=n(57);function B(){var e=Object(j.a)(["\n  query getModels {\n    models {\n      name\n      description\n      file\n    }\n  }\n"]);return B=function(){return e},e}var M=n.n(y)()(B()),O=function(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),r=n[0],l=n[1],c=Object(S.a)(M),i=c.loading,s=c.data;return Object(a.useEffect)((function(){!i&&s&&l(s.models)}),[s,i]),o.a.createElement("main",{className:N.a.homeContainer},o.a.createElement(k,{models:r}))},L=n(58),I=n.n(L),F=n(59),q=n.n(F),z=n(60),R=function(e){return o.a.createElement("header",{className:q.a.headerContainer},o.a.createElement("img",{src:I.a,alt:"logo","data-tip":"Keep walking pal"}),o.a.createElement(z.a,null))},W=n(34),A=n.n(W),H=function(e){return o.a.createElement("footer",{className:A.a.footerContainer},o.a.createElement("p",{className:A.a.sign},"Built with"," ",o.a.createElement("span",{role:"img","aria-label":"heart emoji"},"\ud83d\udc96")," ","by David Qui\xf1onez"),o.a.createElement("div",{className:A.a.socialNetworks},o.a.createElement("a",{href:"https://www.linkedin.com/in/david-alejandro-qui%C3%B1onez-mosquera-331b71171/"},"Li"),o.a.createElement("a",{href:"https://github.com/Dalejan"},"Gh")))},J=function(e){return o.a.createElement("div",{className:h.a.layoutContainer},o.a.createElement(R,null),o.a.createElement(O,null),o.a.createElement(H,null))};var P=function(){return o.a.createElement(d.a,{client:m},o.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.52b4e514.chunk.js.map