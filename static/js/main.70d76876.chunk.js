(this.webpackJsonpmaskapp=this.webpackJsonpmaskapp||[]).push([[0],{16:function(e,t,a){e.exports=a(42)},21:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),c=a.n(r),o=a(2);var l=function(e){var t,a,r=e.name,c=e.addr,l=e.idx,u=e.type,i=e.stat,m=e.toggle,E=Object(n.useState)({text:"",stat:"",key:""}),p=Object(o.a)(E,2),d=p[0],f=p[1];return Object(n.useEffect)((function(){!function(){switch(i){case"plenty":f({text:"\ub9ce\uc544\uc720~",stat:"100\uac1c \uc774\uc0c1",key:4});break;case"some":f({text:"\ubcf4\ud1b5\uc774\uc288.",stat:"30\uac1c \uc774\uc0c1 100\uac1c\ubbf8\ub9cc",key:3});break;case"few":f({text:"\uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc5b4\uc624!",stat:"2\uac1c \uc774\uc0c1 30\uac1c \ubbf8\ub9cc",key:2});break;case"empty":f({text:"\uc5c6\uc5b4\uc720...",stat:"1\uac1c \uc774\ud558",key:1});break;default:f({text:"\ub098\ub3c4 \ubaa8\ub974\uaca0\uc288!",stat:"",key:0})}}()}),[i,m]),s.a.createElement("article",{className:"store store".concat(l," type").concat(u," ").concat(i," ").concat((t=d.key,a=m,t>=a?"on":"off"))},s.a.createElement("div",{className:"box"},s.a.createElement("h2",null,r),s.a.createElement("h3",null,c),s.a.createElement("div",{className:"stat"},s.a.createElement("p",null,d.text),s.a.createElement("span",null,d.stat))))},u=(a(21),"https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC"),i="https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%9D%98%EC%A0%95%EB%B6%80%EC%8B%9C",m="https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%85%B8%EC%9B%90%EA%B5%AC",E="https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?address=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC",p=a(3),d=a.n(p),f=a(14),v=a(15),B=a.n(v);var b=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),s=a[0],r=a[1],c=Object(n.useState)(""),l=Object(o.a)(c,2),u=l[0],i=l[1],m=Object(n.useState)(!0),E=Object(o.a)(m,2),p=E[0],v=E[1],b=function(){var t=Object(f.a)(d.a.mark((function t(){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B.a.get(e);case 3:a=t.sent,n=a.data,r(n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),i("\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."),console.log("error");case 12:return t.prev=12,v(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),{data:s,error:u,isLoading:p,callUrl:b}};var k=function(){var e=Object(n.useState)(E),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(0),p=Object(o.a)(c,2),d=p[0],f=(p[1],b(a)),v=f.data,B=(f.error,f.isLoading),k=f.callUrl,C=function(e){var t=Object(n.useState)(e),a=Object(o.a)(t,2),s=a[0],r=a[1];return{value:s,onChange:function(e){var t=e.target.value;r(t)}}}();return Object(n.useEffect)((function(){document.title="\ub9c8\uc2a4\ud06c \ud604\ud669"})),Object(n.useEffect)((function(){r(C.value),console.log(d)}),[a,C.value,d]),s.a.createElement("div",{className:"wrap"},s.a.createElement("div",{className:"inner"},s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"logo"},s.a.createElement("span",{className:"blind"},"\ub85c\uace0")),s.a.createElement("nav",{className:"gnb"},s.a.createElement("select",Object.assign({name:"adr"},C),s.a.createElement("option",{value:E},"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \ub3d9\ub300\ubb38\uad6c"),s.a.createElement("option",{value:m},"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \ub178\uc6d0\uad6c"),s.a.createElement("option",{value:u},"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \ub9c8\ud3ec\uad6c"),s.a.createElement("option",{value:i},"\uacbd\uae30\ub3c4 \uc758\uc815\ubd80\uc2dc")),s.a.createElement("button",{type:"button",onClick:function(){k()}},"\ud655\uc778"))),B?s.a.createElement("div",{style:{color:"#fff",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}},"Loading..."):v.stores.map((function(e,t){return s.a.createElement(l,{name:e.name,addr:e.addr,idx:t,key:t,stat:e.remain_stat?e.remain_stat:"unknown",type:e.type,toggle:d})}))))},C=window.kakao;var h=function(){return Object(n.useEffect)((function(){C.maps.load((function(){var e=document.getElementById("map"),t={center:new C.maps.LatLng(33.450701,126.570667),level:5};new C.maps.Map(e,t)}),[C.maps])})),s.a.createElement("div",{className:"kakao"},s.a.createElement("div",{id:"map",style:{width:"500px",height:"400px"}}))};a(40);var j=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k,null),s.a.createElement(h,null))};a(41);c.a.render(s.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.70d76876.chunk.js.map