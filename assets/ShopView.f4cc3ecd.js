import{r as h,o as u,C as b,a as o,c as a,b as s,F as c,d as n,t as r}from"./index.5d071402.js";const y=s("div",{class:"shop-banner"},null,-1),g={class:"container pt-5"},m={class:"row"},v={class:"col-3"},C={class:"accordion accordion-flush",id:"shopCategory"},f=["id"],w=["data-bs-target","aria-expanded","aria-controls"],$=["id","aria-labelledby","show"],k={class:"accordion-body"},L=s("div",{class:"col-9"},null,-1),S={__name:"ShopView",setup(B){const d=h([{title:"\u86CB\u7CD5",list:["a","b","c"]},{title:"\u7CD6\u679C",list:["dd","cc","aa"]},{title:"\u9B06\u9905",list:["dd","dd","dd"]}]);return u(()=>{[...document.querySelectorAll(".collapse")].map(e=>new b(e))}),(i,e)=>(o(),a("div",null,[y,s("div",g,[s("div",m,[s("div",v,[s("div",C,[(o(!0),a(c,null,n(d.value,(l,t)=>(o(),a("div",{class:"accordion-item",key:t},[s("h2",{class:"accordion-header",id:`shopCategory${t}`},[s("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":`#shopCategory${t}`,"aria-expanded":t===0,"aria-controls":`shopCategory${t}`},r(l.title),9,w)],8,f),s("div",{id:`shopCategory${t}`,class:"accordion-collapse collapse","aria-labelledby":`shopCategory${t}`,show:t===0,"data-bs-parent":"#shopCategory"},[s("div",k,[s("ul",null,[(o(!0),a(c,null,n(l.list,(p,_)=>(o(),a("li",{key:_},r(p),1))),128))])])],8,$)]))),128))]),L])])])]))}};export{S as default};