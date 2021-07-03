(this["webpackJsonpztm-tracker"]=this["webpackJsonpztm-tracker"]||[]).push([[0],{44:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(7),i=n.n(a),s=(n(44),n(18)),o=n(4),l=n(12),u=n(1),d=n(8),j=n.n(d),b=n(13),h=n(21),p=n.n(h),m=p.a.create({baseURL:"https://ckan2.multimediagdansk.pl"}),f=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/gpsPositions").then((function(e){return e.data.Vehicles.filter((function(e){return e.GPSQuality>=2}))})).catch((function(e){return console.error(e),[]})).then((function(e){return e}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(new Date).toISOString().split("T")[0],e.next=3,p.a.get("https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/b15bb11c-7e06-4685-964e-3db7775f912f/download/trips.json").then((function(e){return e.data[t].trips})).catch((function(e){return console.error(e),[]})).then((function(e){return e}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=n(38),v=n(39),g=n(37);n(67);var k=function(e){var t,n=Object(r.useState)({id:0,hidden:!1}),c=Object(l.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)([]),o=Object(l.a)(s,2),d=o[0],h=o[1],p=e.idField,m=Object(r.useRef)(null),f=e.mapMarker,x=null===e||void 0===e?void 0:e.mapSidebarItem,k=null!==(t=null===e||void 0===e?void 0:e.autoUpdate)&&void 0!==t&&t,N=Object(r.useState)(!1),w=Object(l.a)(N,2),y=w[0],S=w[1],C=Object(r.useRef)(),I=Object(r.useState)(null),M=Object(l.a)(I,2),T=M[0],L=M[1],F=Object(r.useState)(10),R=Object(l.a)(F,2),A=R[0],E=R[1],U=function(){var t=Object(b.a)(j.a.mark((function t(){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,null===e||void 0===e?void 0:e.refreshFunc();case 2:if(t.t1=n=t.sent,t.t0=null!==t.t1,!t.t0){t.next=6;break}t.t0=void 0!==n;case 6:if(!t.t0){t.next=10;break}t.t2=n,t.next=11;break;case 10:t.t2=[];case 11:if(0!==(r=t.t2).length){t.next=15;break}return console.error("Fetched data from Tristar API is empty"),t.abrupt("return");case 15:h(r);case 16:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(r.useEffect)((function(){return U(),k&&(m.current=setInterval((function(){return U()}),k)),function(){return clearTimeout(m.current)}}),[]);var _=function(e){var t=e.item,n=e.MapMarker,r=a.id===t[p]&&!a.hidden;t.current=r;return t.closeFunction=function(){return i({id:0,hidden:!0})},Object(u.jsx)(n,{item:t})},D=function(e){var t=e.lat,n=e.lng,r=e.supercluster,c=e.cluster,a=e.pointCount;return Object(u.jsx)("div",{className:"marker",onClick:function(){var e=Math.min(r.getClusterExpansionZoom(c.id),20);C.current.setZoom(e),C.current.panTo({lat:t,lng:n})},children:Object(u.jsx)("div",{className:"cluster",children:a})})};return Object(u.jsxs)("div",{className:"map",children:[x&&Object(u.jsx)("div",{className:"map__sidebar".concat(y?" active":""),children:Object(u.jsxs)("div",{className:"map__sidebar-container",children:[d.map((function(e,t){var n=e[p]===a.id;return Object(u.jsx)("div",{className:"map__sidebar-item".concat(n?" active":""),onClick:function(){i({id:e[p],hidden:!1}),C.current.setZoom(16),C.current.panTo({lat:e.Lat,lng:e.Lon})},children:Object(u.jsx)(x,{item:e})},t)})),Object(u.jsx)("div",{className:"menu-button",onClick:function(){return S((function(e){return!e}))},children:Object(u.jsx)("span",{})})]})}),Object(u.jsx)(v.a,{bootstrapURLKeys:{key:"AIzaSyBtEh6FMFwJA-0X7NNb8yDlQ1M7x-PJ8iU"},defaultCenter:e.center,defaultZoom:e.zoom,onChildClick:function(e,t){var n,r;null!==(n=null===(r=t.item)||void 0===r?void 0:r[p])&&void 0!==n&&n&&i((function(e){var n=e.id,r=e.hidden;return{id:n===t.item[p]?0:t.item[p],hidden:r}})),a.hidden&&i({id:0,hidden:!1})},onClick:function(e){return i({id:0,hidden:!1})},yesIWantToUseGoogleMapApiInternals:!0,shouldUnregisterMapOnUnmount:!0,onGoogleApiLoaded:function(e){var t=e.map;t.setClickableIcons(!1),C.current=t},onChange:function(e){var t=e.zoom,n=e.bounds;E(t),L([n.nw.lng,n.se.lat,n.se.lng,n.nw.lat])},children:function(){var e=d.map((function(e){return{type:"Cluster",properties:{item:Object(O.a)({},e),cluster:!1},geometry:{type:"Point",coordinates:[parseFloat(e.Lon),parseFloat(e.Lat)]}}})),t=Object(g.a)({points:e,bounds:T,zoom:A,options:{radius:75,maxZoom:20}}),n=t.clusters,r=t.supercluster;return n.map((function(e,t){var n=Object(l.a)(e.geometry.coordinates,2),c=n[0],a=n[1],i=e.properties,s=i.cluster,o=i.point_count;return s?Object(u.jsx)(D,{lat:a,lng:c,supercluster:r,cluster:e,pointCount:o},t):Object(u.jsx)(_,{lat:a,lng:c,item:e.properties.item,MapMarker:f},t)}))}().map((function(e){return e}))})]})},N=n(19),w=function(e){var t=e.routes;return{type:"ROUTES_SET",payload:{routes:void 0===t?[]:t}}};var y=function(e){var t=Object(N.c)((function(e){return e.routes})),n=Object(N.b)(),c=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.t1=w,e.next=4,x();case 4:return e.t2=e.sent,e.t3={routes:e.t2},e.t4=(0,e.t1)(e.t3),e.abrupt("return",(0,e.t0)(e.t4));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){0===t.length&&c()}),[]);var a=Object(r.useCallback)(Object(b.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return(n=(n=e.sent).map((function(e){return e.RouteStop=t.find((function(t){return t.tripId===parseInt(e.Route)&&t.routeId===parseInt(e.Line)})),e.DelayTime=new Date(1e3*Math.abs(e.Delay)).toISOString().substr(11,8).replace(/00:/,""),e}))).sort((function(e,t){return e.Line.localeCompare(t.Line)})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),[t]),i={lat:54.385561,lng:18.600739};return navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;i.lat=t.latitude,i.lng=t.longitude}),(function(){return null}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0}),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"vh-100",children:t.length>0&&Object(u.jsx)(k,{center:i,zoom:12,refreshFunc:a,idField:"VehicleId",autoUpdate:5e3,mapMarker:function(e){var t=e.item;return Object(u.jsxs)("div",{className:"marker",children:[Object(u.jsx)("div",{className:"dot",children:t.Line}),t.current&&Object(u.jsx)("div",{className:"info",children:Object(u.jsxs)("table",{className:"table-responsive table-striped table-hover",children:[Object(u.jsx)("thead",{className:"w-100 d-table",children:Object(u.jsx)("tr",{children:Object(u.jsx)("td",{colSpan:2,onClick:t.closeFunction,children:"Hide"})})}),Object(u.jsxs)("tbody",{className:"w-100 d-table",children:[t.Line&&Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"p-1",children:"Line"}),Object(u.jsx)("td",{className:"border-left p-1 font-weight-bold",children:t.Line})]}),0!==t.Delay&&Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"p-1",children:t.Delay>0?"Delay":"Before time"}),Object(u.jsx)("td",{className:"border-left p-1 font-weight-bold",children:t.DelayTime})]}),t.RouteStop&&Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"p-1",children:"Route"}),Object(u.jsx)("td",{className:"border-left p-1 font-weight-bold",children:t.RouteStop.title})]}),t.VehicleCode&&Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"p-1",children:"Vehicle code"}),Object(u.jsx)("td",{className:"border-left p-1 font-weight-bold",children:t.VehicleCode})]}),t.Speed>0&&Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"p-1",children:"Speed"}),Object(u.jsxs)("td",{className:"border-left p-1 font-weight-bold",children:[null===t||void 0===t?void 0:t.Speed," km/h"]})]})]})]})})]})},mapSidebarItem:function(e){var t=e.item;return Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-2 col-sm-3 p-2 font-weight-bold d-flex align-items-center justify-content-center",children:t.Line}),Object(u.jsx)("div",{className:"col-10 col-sm-9 p-2 font-weight-bold border-left",children:t.RouteStop&&t.RouteStop.title})]})}})})})},S=(n(69),[{to:"/",exact:!0,component:function(){return Object(u.jsx)("div",{className:"p-4",children:Object(u.jsxs)("pre",{className:"text-wrap text-break",children:[Object(u.jsx)("h2",{children:"ZTM Tracker"}),Object(u.jsxs)("p",{children:["Application represents ZTM data based on their API which can be found ",Object(u.jsx)("a",{href:"https://ckan.multimediagdansk.pl/dataset/tristar",rel:"noopener noreferrer",target:"_blank",className:"font-weight-normal",children:"here"}),"."]}),Object(u.jsx)("p",{children:"For this moment You can see current position of the vehicles like buses and trams around Gda\u0144sk area. Each vehicle shows delay and unique vehicle code."})]})})}},{to:"/buses",component:function(){return Object(u.jsx)("div",{children:Object(u.jsx)(y,{})})},title:"Buses"}]),C=n.p+"static/media/bus-logo.a0edf5fd.png",I=(n(70),function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],a=function(){return c(!0)};return Object(u.jsxs)("header",{className:n?"active":"",children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{className:"nav-brand p-3",children:Object(u.jsxs)(s.b,{to:"/",className:"text-decoration-none",onClick:a,children:[Object(u.jsx)("img",{src:C,alt:"ZTM tracker",className:"img-fluid"}),Object(u.jsx)("div",{className:"h2 text-white text-center",children:"ZTM tracker"})]})}),Object(u.jsx)("ul",{className:"nav flex-column",children:S.map((function(e,t){var n=e.to,r=e.title;e.exact;return r&&Object(u.jsx)(s.c,{to:n,exact:!0,className:"nav-item text-decoration-none py-2 px-3 font-weight-normal h5 m-0",activeClassName:"shadow active",onClick:a,children:r},t)}))})]}),Object(u.jsx)("div",{className:"menu-button",onClick:function(){return c((function(e){return!e}))},children:Object(u.jsx)("span",{})})]})}),M=function(){return Object(u.jsx)("div",{className:"p-4",children:Object(u.jsx)("pre",{className:"text-wrap",children:"Sorry, but we couldn't find what you have been looking for :("})})};n(73);var T=function(){return Object(u.jsx)("div",{className:"App min-vh-100",children:Object(u.jsx)(s.a,{children:Object(u.jsxs)("div",{className:"d-flex",children:[Object(u.jsx)(I,{}),Object(u.jsx)("main",{className:"min-vh-100",children:Object(u.jsxs)(o.c,{children:[S.map((function(e,t){return Object(u.jsx)(o.a,{exact:e.exact,path:e.to,component:e.component},t)})),Object(u.jsx)(o.a,{component:M})]})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=n(22),F=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ROUTES_SET":var n=t.payload.routes.map((function(e){return e.title=e.tripHeadsign.replace(/\(\d+\)/g,""),e}));return n;default:return e}},A=Object(L.a)({routes:R}),E=Object(L.b)(A);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N.a,{store:E,children:Object(u.jsx)(T,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.31ff53f3.chunk.js.map