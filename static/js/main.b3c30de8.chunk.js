(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(4),s=a.n(c),r=a(2),i=a(1);const m="https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON";class o{static fetchGames(){return fetch(m).then(e=>e.json()).then(e=>e.map(o.mapSteam))}static mapSteam(e={}){const t={};if(e.steamUrl){var a=e.steamUrl.split("/app/"),l=Object(i.a)(a,2);t.id=l[1],t.steamUrl=e.steamUrl,t.smallImageUrl="https://steamcdn-a.akamaihd.net/steam/apps/".concat(t.id,"/capsule_184x69.jpg"),t.imageUrl="https://steamcdn-a.akamaihd.net/steam/apps/".concat(t.id,"/header.jpg")}return Object(r.a)(Object(r.a)({},e),{},{steamUrl:void 0,steam:t.id?t:null})}}function u({label:e,id:t,onChange:a,value:l}){return n.a.createElement("label",{className:"input",htmlFor:t},n.a.createElement("span",{className:"input-label"},e),n.a.createElement("input",{className:"input-element",id:t,onChange:a,value:l}))}function p(e=""){return e.charAt(0).toUpperCase()+e.slice(1).replace(/([A-Z])/g," $1")}function d({title:e,filters:t,onChangeFilters:a}){return n.a.createElement("header",{className:"filters"},n.a.createElement("h2",{className:"filters-title"},e),n.a.createElement("div",{className:"filters-body"},Object.keys(t).map(e=>n.a.createElement(u,{key:e,id:e,label:p(e),value:t[e],onChange:t=>a(e,t.target.value)}))))}function g({children:e,loading:t}){return t?n.a.createElement("div",{className:"application-loading"}):e}function h({steam:e}){return e?n.a.createElement("a",{className:"steam-container",href:e.steamUrl,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"steam-image",src:e.imageUrl,alt:""})):n.a.createElement("div",{className:"steam-container"},n.a.createElement("img",{className:"steam-image",src:"https://via.placeholder.com/468x215?text=Sem informa\xe7\xf5es da steam.",alt:""}))}function b({label:e,value:t}){return n.a.createElement("div",null,n.a.createElement("span",{className:"label"},e),n.a.createElement("span",{className:"value"},"".concat(t)))}function f({game:e,className:t=""}){return n.a.createElement("div",{key:e.id,className:"card-game ".concat(t)},n.a.createElement(h,{steam:e.steam}),n.a.createElement("div",{className:"card-game-body"},n.a.createElement(b,{label:p("title:"),value:e.title}),n.a.createElement(b,{label:p("publisher:"),value:e.publisher}),n.a.createElement(b,{label:p("isFullyOptimized:"),value:e.isFullyOptimized}),n.a.createElement(b,{label:p("isHighlightsSupported:"),value:e.isHighlightsSupported}),n.a.createElement(b,{label:p("genres:"),value:e.genres.join(", ")})))}function E({loading:e,games:t}){return n.a.createElement("main",{className:"application row"},n.a.createElement(g,{loading:e},!!t.length&&t.map(e=>n.a.createElement("div",{className:"col-4",key:e.id},n.a.createElement(f,{game:e}))),!t.length&&n.a.createElement(j,null)))}function j(){return n.a.createElement("p",{className:"application-empty"},"Nenhum jogo foi encontrado.")}a(10);const v=function(){let e=null;return t=>a=>{clearTimeout(e),a>0?e=setTimeout(t,a):t()}}();function O(){const e=Object(l.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(l.useState)(!0),m=Object(i.a)(s,2),u=m[0],p=m[1],g=Object(l.useState)(!0),h=Object(i.a)(g,2),b=h[0],f=h[1],j=Object(l.useState)([]),O=Object(i.a)(j,2),N=O[0],S=O[1],y=Object(l.useState)({title:"",publisher:"",isFullyOptimized:"",isHighlightsSupported:"",genres:""}),k=Object(i.a)(y,2),w=k[0],U=k[1];return Object(l.useEffect)(()=>{o.fetchGames().then(e=>c(e)).then(()=>p(!1))},[]),Object(l.useEffect)(()=>{v(()=>f(!0))(0),S(a.filter(function(e){const t=Object.keys(e).filter(t=>e[t]);return t.length?a=>t.find(t=>!!a[t].toString().toLowerCase().includes(e[t].toLowerCase())):()=>!0}(w))),v(()=>f(!1))(250)},[a,w]),n.a.createElement(n.a.Fragment,null,n.a.createElement(d,{title:"GeForce-Now | Games",filters:w,onChangeFilters:(e,t)=>{U(Object(r.a)(Object(r.a)({},w),{},{[e]:t}))}}),n.a.createElement(E,{loading:b||u,games:N}))}const N=document.getElementById("root");s.a.render(n.a.createElement(O,null),N)},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.b3c30de8.chunk.js.map