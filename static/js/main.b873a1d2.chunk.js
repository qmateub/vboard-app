(this["webpackJsonpvboard-app"]=this["webpackJsonpvboard-app"]||[]).push([[0],{218:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(33),l=n.n(o),i=(n(93),n(27)),c=n(19),s=n(21),u=n(53),p=n(230),d=(n(66),360),m=540,g=200,b=50;function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var y=function(e){return e.stage?r.a.createElement(s.Group,null,e.lines.map((function(e){return r.a.createElement(s.Line,{ref:function(e){return e&&e.moveToTop()},key:e.id,strokeWidth:e.strokeWidth,stroke:e.color,points:e.points,globalCompositeOperation:"eraser"===e.tool?"destination-out":"source-over"})})),r.a.createElement(s.Line,{ref:function(e){return e&&e.moveToTop()},fill:"white",stroke:"white",strokeWidth:1,points:[g,b+m/2,g+d/2*2,b+m/2]}),r.a.createElement(s.Line,{ref:function(e){return e&&e.moveToTop()},fill:"white",stroke:"white",strokeWidth:1,points:[g,b+m/2-.2*m,g+d/2*2,b+m/2-.2*m]}),r.a.createElement(s.Line,{ref:function(e){return e&&e.moveToTop()},fill:"white",stroke:"white",strokeWidth:1,points:[g,b+m/2+.2*m,g+d/2*2,b+m/2+.2*m]}),r.a.createElement(s.Rect,{x:g,y:b,width:d,height:m,fill:"#E58168",stroke:"white",strokeWidth:1,onMouseDown:function(t){e.setIsPaint(!0);var n=t.target.getStage().getPointerPosition(),a=e.lines.concat({id:Date.now(),tool:"pen",points:[n.x,n.y],strokeWidth:Number(e.strokeWidth),color:e.color});e.setLines(a)},onMouseMove:function(t){if(e.isPaint){var n=t.target.getStage().getPointerPosition(),a=e.lines.slice(),r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},a[a.length-1]);r.points=r.points.concat([n.x,n.y]),a[a.length-1]=r,e.setLines(a)}},onMouseUp:function(t){e.setIsPaint(!1)},onTouchEnd:function(t){e.setIsPaint(!1)}})):null},h=n(76),O=n.n(h),E=function(e){var t=O()("http://localhost:3000/ball3.png"),n=Object(c.a)(t,1)[0];return r.a.createElement(s.Image,Object.assign({image:n},e,{ref:e.getRef}))};E.displayName="Ball";var v=E,w=function(e){switch(e){case"MB":return-13;case"W":return-8;case"O":return-6;default:return-5}},x=function(e){return r.a.createElement(s.Group,{ref:e.getRef,x:e.x,y:e.y,draggable:!0,onDragEnd:function(t){var n=t.evt;return e.onDragEnd({x:n.offsetX,y:n.offsetY})}},r.a.createElement(s.Text,{ref:function(e){return e&&e.moveToTop()},fill:e.isLibero?"white":"black",x:w(e.label),y:-7,text:e.label,fontSize:18}),e.name&&r.a.createElement(s.Text,{ref:function(e){return e&&e.moveToTop()},fill:"white",x:-45*e.name.length/10,y:-30,text:e.name.toUpperCase(),fontSize:12}),r.a.createElement(s.Circle,{shadowBlur:2,radius:15,fill:e.isLibero?"blue":"red"}))},P=n(239),j=n(231),L=n(236),k=n(234),S=n(235),C=function(e){return r.a.createElement("a",{href:e.uri,style:{visibility:"hidden"},download:e.fileName,ref:function(e){e&&e.click()}},"Donwload")};C.displayName="ExportImage";var D=C,T=n(237),N=n(232),B=function(e){var t=r.a.useState(),n=Object(c.a)(t,2),a=n[0],o=n[1];return r.a.createElement(T.a,{isShown:e.isShown,title:"Guardar posiciones",onCloseComplete:e.onCloseComplete,onConfirm:function(){return e.onConfirm(a)},confirmLabel:"Guardar"},r.a.createElement(N.a,{name:"save-name",placeholder:"Nombre para la t\xe1ctica",value:a,onChange:function(e){return o(e.target.value)}}))},M={en:{title:"Volley Board App",subtitle:"A simple tool for building your own on court tactics",setterLabel:"S",middleBlocker1Label:"MB",wing1Label:"W",wing2Label:"W",oppositeLabel:"O",middleBlocker2Label:"MB",liberoLabel:"L",footer:"build by @qmateub",download:"Download",reset:"Reset",deleteLines:"Delete lines",saveTactic:"Save tactic",playerNames:"Player names",selectTactic:"Select tactic",export:"Export to PNG",drawOptions:"Draw options",wingLegend:"W - Wing",liberoLegend:"L - Libero",middleBlockerLegend:"MB - Middle Blocker",setterLegend:"S - Setter",setterPlaceholder:"Setter name",middleBlocker1Placeholder:"Middle blocker 1 name",middleBlocker2Placeholder:"Middle blocker 2 na",wing1Placeholder:"Wing 1 name",wing2Placeholder:"Wing2 name",liberoPlaceholder:"Libero name",oppositePlaceholder:"Opposite name",savePositions:"Save positions",save:"Save",tacticName:"Tactic name"},es:{title:"Volley Board App",subtitle:"Herramienta simple para definir las t\xe1cticas de tu equipo",setterLabel:"S",middleBlocker1Label:"C",wing1Label:"R",wing2Label:"R",oppositeLabel:"O",middleBlocker2Label:"C",liberoLabel:"L",footer:"desarrollado por @qmateub",download:"Descargar",reset:"Reiniciar",deleteLines:"Borrar l\xedneas",saveTactic:"Guardar t\xe1ctica",playerNames:"Nombre de jugadores",selectTactic:"Selecciona t\xe1ctica",export:"Exportar a PNG",drawOptions:"Opciones de dibujo",wingLegend:"R - Receptor",liberoLegend:"L - L\xedbero",middleBlockerLegend:"C - Central",setterLegend:"S - Setter/Armador",setterPlaceholder:"Nombre setter",middleBlocker1Placeholder:"Nombre central",middleBlocker2Placeholder:"Nombre central",wing1Placeholder:"Nombre recep1",wing2rPlaceholder:"Nombre recep2",liberoPlaceholder:"Nombre libero",oppositePlaceholder:"Nombre opuesto",savePositions:"Guardar posiciones",save:"Guardar",tacticName:"Nombre para la t\xe1ctica"}};function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var R=["setter","central","recep1","recep2","libero","opuesto"],G=function(e){var t=r.a.useState(R.reduce((function(e,t){return I({},e,Object(i.a)({},t,""))}),{})),n=Object(c.a)(t,2),a=n[0],o=n[1];return r.a.createElement(T.a,{isShown:e.isShown,title:M[e.language].savePositions,onCloseComplete:e.onCloseComplete,onConfirm:function(){return e.onConfirm(a)},confirmLabel:M[e.language].save},R.map((function(t){return r.a.createElement(N.a,{key:t,style:{margin:4},name:t,placeholder:M[e.language]["".concat(t,"Placeholder")],value:a[{position:t}],onChange:function(e){return o(I({},a,Object(i.a)({},t,e.target.value)))}})})))},z={setter:{x:269,y:133},opuesto:{x:250,y:288},recep1:{x:500,y:288},recep2:{x:375,y:70},central:{x:375,y:288},libero:{x:493,y:133},ball:{x:360,y:338}};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J={margin:"6px"},U=function(){return Object.keys(window.localStorage).filter((function(e){return e.includes("vboard")})).map((function(e){return{label:e.split("vboard.")[1],value:e.split("vboard.")[1]}}))};var q=function(e){var t=U();return r.a.createElement(u.a,{display:"flex",flexDirection:"column",background:"#0A5CAF",alignItems:"center",borderRight:!0,maxWidth:"20",padding:4},r.a.createElement(P.a,{content:M[e.language].reset},r.a.createElement(j.a,{style:A({},J,{marginTop:"40px"}),height:50,icon:"undo",onClick:function(){e.setPositions(z),e.setHasClicked(!0)}})),r.a.createElement(P.a,{content:M[e.language].deleteLines},r.a.createElement(j.a,{style:J,height:50,icon:"eraser",onClick:function(){e.setLines([])}})),r.a.createElement(P.a,{content:M[e.language].saveTactic},r.a.createElement(j.a,{style:J,height:50,icon:"floppy-disk",onClick:function(){return e.setIsModalOpen(!0)}})),r.a.createElement(B,{isShown:e.isModalOpen,onCloseComplete:function(){e.setIsModalOpen(!1)},onConfirm:function(t){window.localStorage.setItem("vboard.".concat(t),JSON.stringify(e.positions)),e.setIsModalOpen(!1)}}),r.a.createElement(P.a,{content:M[e.language].playerNames},r.a.createElement(j.a,{style:J,height:50,icon:"people",onClick:function(){return e.setIsModalPlayerOpen(!0)}})),r.a.createElement(G,{language:e.language,isShown:e.isModalPlayerOpen,onCloseComplete:function(){e.setIsModalPlayerOpen(!1)},onConfirm:function(t){e.setIsModalPlayerOpen(!1),e.setPositions(A({},e.positions,{},Object.entries(t).reduce((function(n,a){var r=Object(c.a)(a,2),o=r[0];r[1];return A({},n,Object(i.a)({},o,A({},e.positions[o],{name:t[o]})))}),{})))}}),r.a.createElement(L.a,{style:J,title:M[e.language].selectTactic,options:t,selected:"",onSelect:function(t){var n=window.localStorage.getItem("vboard.".concat(t.value));n&&(e.setPositions(JSON.parse(n)),e.setHasClicked(!0))}},r.a.createElement(P.a,{content:M[e.language].selectTactic},r.a.createElement(j.a,{style:J,height:50,icon:"applications"}))),r.a.createElement(P.a,{content:M[e.language].export},r.a.createElement(j.a,{style:J,height:50,icon:"export",onClick:function(){e.setHasToExport(!e.hasToExport)}})),e.uri&&e.hasToExport&&r.a.createElement(D,{uri:e.uri,fileName:"vboard-".concat(Date.now(),".png")}),r.a.createElement(k.a,{onChange:function(t){return e.setLanguage(t.target.value)},style:A({},J,{maxHeight:"35px"}),value:e.language},r.a.createElement("option",{value:"en"},"EN"),r.a.createElement("option",{value:"es"},"ES")),r.a.createElement(S.a,{size:500,style:A({},J,{color:"white"})},r.a.createElement("u",null,M[e.language].drawOptions)),r.a.createElement(k.a,{onChange:function(t){return e.setStrokeWidth(t.target.value)},style:A({},J,{maxHeight:"35px"}),value:e.strokeWidth},r.a.createElement("option",{value:1},"1px"),r.a.createElement("option",{value:2},"2px"),r.a.createElement("option",{value:3},"3px")))},F=n(37),V=function(e){return r.a.createElement(u.a,{display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start",margin:12,flex:2},r.a.createElement(F.a,{size:500,color:"white"},M[e.language].wingLegend),r.a.createElement(F.a,{size:500,color:"white"},M[e.language].liberoLegend),r.a.createElement(F.a,{size:500,color:"white"},M[e.language].middleBlockerLegend),r.a.createElement(F.a,{size:500,color:"white"},M[e.language].setterLegend))};function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(n,!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(){var e,t,n,a,o,l,i,d,m,g=r.a.useState({setter:e,recep1:t,recep2:n,opuesto:a,central:o,libero:l,ball:i,stage:d,court:m}),b=Object(c.a)(g,2),f=b[0],h=b[1],O=r.a.useState(""),E=Object(c.a)(O,2),w=E[0],P=E[1],j=r.a.useState(z),L=Object(c.a)(j,2),k=L[0],S=L[1],C=r.a.useState(!1),D=Object(c.a)(C,2),T=D[0],N=D[1],B=r.a.useState(!1),W=Object(c.a)(B,2),I=W[0],R=W[1],G=r.a.useState(!1),H=Object(c.a)(G,2),A=H[0],J=H[1],U=r.a.useState(""),F=Object(c.a)(U,2),X=F[0],$=F[1],K=r.a.useState([]),Q=Object(c.a)(K,2),Z=Q[0],_=Q[1],ee=r.a.useState(!1),te=Object(c.a)(ee,2),ne=te[0],ae=te[1],re=r.a.useState(1),oe=Object(c.a)(re,2),le=oe[0],ie=oe[1],ce=r.a.useState("en"),se=Object(c.a)(ce,2),ue=se[0],pe=se[1];r.a.useEffect((function(){if(h({setter:e,recep1:t,recep2:n,opuesto:a,central:o,libero:l,ball:i,stage:d,court:m}),T){var r=m.toDataURL({pixelRatio:2});$(r),N(!T)}if(w){var c=k;f.setter.to({x:c.setter.x,y:c.setter.y,duration:.2}),f.recep1.moveToTop(),f.recep1.to({x:c.recep1.x,y:c.recep1.y,duration:.2}),f.recep2.to({x:c.recep2.x,y:c.recep2.y,duration:.2}),f.opuesto.moveToTop(),f.opuesto.to({x:c.opuesto.x,y:c.opuesto.y,duration:.2}),f.central.to({x:c.central.x,y:c.central.y,duration:.2}),f.libero.to({x:c.libero.x,y:c.libero.y,duration:.2}),f.ball.moveToTop(),f.ball.to({x:c.ball.x,y:c.ball.y,duration:.2})}}),[k,i,o,w,T,l,a,t,n,d,e,f.setter,f.recep1,f.recep2,f.opuesto,f.central,f.libero,f.ball,m]);var de=z;return r.a.createElement(u.a,{display:"flex",flexDirection:"column"},r.a.createElement(u.a,{border:!0,height:30,padding:6,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(p.a,{size:600},r.a.createElement("span",{role:"img","aria-label":"vball-1"},"\ud83c\udfd0")," ",M[ue].title," ",r.a.createElement("span",{role:"img","aria-label":"vball-2"},"\ud83c\udfd0")," ",M[ue].subtitle)),r.a.createElement(u.a,{display:"flex",flexDirection:"row",backgroundColor:"#0A5CAF"},r.a.createElement(q,{language:ue,setLanguage:pe,setPositions:S,setHasClicked:P,setLines:_,setIsModalOpen:R,isModalOpen:I,positions:k,setIsModalPlayerOpen:J,isModalPlayerOpen:A,setHasToExport:N,hasToExport:T,uri:X,setStrokeWidth:ie,strokeWidth:le}),r.a.createElement(s.Stage,{ref:function(e){d=e},width:window.innerWidth-450,height:window.innerHeight-50,onMouseUp:function(e){ae(!1)},onTouchEnd:function(e){ae(!1)}},r.a.createElement(s.Layer,null,r.a.createElement(s.Group,{ref:function(e){m=e}},r.a.createElement(v,{getRef:function(e){i=e,e&&e.moveToTop()},x:de.ball.x,y:de.ball.y,height:20,width:32,draggable:!0,onDragEnd:function(e){var t=e.evt;return S(Y({},k,{ball:{x:t.x,y:t.y}}))}}),r.a.createElement(y,{stage:f.stage,lines:Z,setLines:_,isPaint:ne,setIsPaint:ae,strokeWidth:le,color:"#000000"}),r.a.createElement(x,{getRef:function(t){e=t},x:de.setter.x,y:de.setter.y,name:k.setter.name,label:M[ue].setterLabel,onDragEnd:function(e){return S(Y({},k,{setter:Y({},k.setter,{},e)}))}}),r.a.createElement(x,{getRef:function(e){t=e},name:k.recep1.name,x:de.recep1.x,y:de.recep1.y,label:M[ue].wing1Label,onDragEnd:function(e){return S(Y({},k,{recep1:Y({},k.recep1,{},e)}))}}),r.a.createElement(x,{getRef:function(e){n=e},x:de.recep2.x,y:de.recep2.y,label:M[ue].wing2Label,name:k.recep2.name,onDragEnd:function(e){return S(Y({},k,{recep2:Y({},k.recep2,{},e)}))}}),r.a.createElement(x,{getRef:function(e){a=e},x:de.opuesto.x,y:de.opuesto.y,name:k.opuesto.name,label:M[ue].oppositeLabel,onDragEnd:function(e){return S(Y({},k,{opuesto:Y({},k.opuesto,{},e)}))}}),r.a.createElement(x,{getRef:function(e){o=e},x:de.central.x,y:de.central.y,name:k.central.name,label:M[ue].middleBlocker1Label,onDragEnd:function(e){return S(Y({},k,{central:Y({},k.central,{},e)}))}}),r.a.createElement(x,{getRef:function(e){l=e},x:de.libero.x,y:de.libero.y,label:M[ue].liberoLabel,name:k.libero.name,isLibero:!0,onDragEnd:function(e){return S(Y({},k,{libero:Y({},k.libero,{},e)}))}})))),r.a.createElement(V,{language:ue})),r.a.createElement(u.a,{border:!0,height:20,padding:6,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(p.a,{size:400},M[ue].footer)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,n){},89:function(e,t,n){e.exports=n(218)},93:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.b873a1d2.chunk.js.map