!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){!function(e,t){var n=function(e,t,n,o){i(t,n,o).then(function(t){var n=t[0][0][0];r(e,n)}).catch(function(e){return console.debug(e)})},o=function(){var t=e.getSelection();return t.anchorNode.nodeValue.substring(t.anchorOffset,t.extentOffset)},r=function(e,n){var o=t.createElement("article"),r=t.createTextNode(n),i="position:absolute;top:"+(e.pageY-40)+"px;left:"+(e.pageX-40)+"px; background:rgba(20,7,35,0.8);color:#cee2ba;z-index:100000; padding:5px 10px;font-size:13px;font-family:Helvetica,sans-serif;letter-spacing:.5px;border-radius:2px;";o.setAttribute("style",i),o.appendChild(r),t.body.appendChild(o)},i=function(e,t,n){var o="https://translate.googleapis.com/translate_a/single?client=gtx&sl="+e+"&tl="+t+"&dt=t&q="+encodeURI(n);return fetch(o).then(function(e){return 200===e.status?e.json():Promise.reject(e.json())})};e.Translator={init:function(e){var r=e.from,i=void 0===r?"":r,u=e.to,a=void 0===u?"":u;i&&a?t.body.addEventListener("dblclick",function(e){var t=o();n(e,i,a,t)}):console.log("No languages provided")}}}(window,document)}]);