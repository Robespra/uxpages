"use strict";(self.webpackChunkuxpages=self.webpackChunkuxpages||[]).push([[559],{739:function(e,t,o){o.r(t);var i=o(6540);t.default=e=>{var t,o,a,n,r;let{videoSrc:l,popups:d,videoId:s}=e;const{0:u,1:m}=(0,i.useState)(0),{0:p,1:v}=(0,i.useState)(!1);return(0,i.useEffect)((()=>{const e=document.getElementById(s),t=()=>{u<d.length&&e.currentTime>=d[u].time&&(v(!0),e.pause(),setTimeout((()=>{v(!1),e.play(),m((e=>e+1))}),5500))},o=()=>{m(0),v(!1)};return e.addEventListener("timeupdate",t),e.addEventListener("ended",o),()=>{e.removeEventListener("timeupdate",t),e.removeEventListener("ended",o)}}),[u,d,s]),i.createElement("div",{className:"video-container"},i.createElement("video",{id:s,width:"800",controls:!0,loop:!0},i.createElement("source",{src:l,type:"video/mp4"}),"Your browser does not support the video tag."),p&&i.createElement("div",{className:"popup "+(p?"show":""),style:{top:(null===(t=d[u])||void 0===t?void 0:t.top)||"auto",bottom:(null===(o=d[u])||void 0===o?void 0:o.bottom)||"auto",left:(null===(a=d[u])||void 0===a?void 0:a.left)||"50%",right:(null===(n=d[u])||void 0===n?void 0:n.right)||"auto",transform:(null===(r=d[u])||void 0===r?void 0:r.transform)||"translateX(-50%)"}},u<d.length&&i.createElement(i.Fragment,null,d[u].emoji?i.createElement("div",{className:"emoji",role:"img","aria-label":"emoji"},d[u].emoji):i.createElement("img",{src:d[u].imgSrc,alt:"Popup",id:"popupImage"}),i.createElement("div",{id:"popupTitle"},d[u].title),i.createElement("div",{id:"popupText"},d[u].message))))}}}]);
//# sourceMappingURL=component---src-pages-video-with-popups-js-5be26a8f87f82631242b.js.map