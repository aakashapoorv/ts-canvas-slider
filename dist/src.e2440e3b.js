parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"xNwm":[function(require,module,exports) {
"use strict";function t(t,e,n){var r=document.getElementById(t);if(!r)throw new Error('Element with id "'.concat(t,'" not found.'));return r.width=e,r.height=n,r.style.width="".concat(e,"px"),r.style.height="".concat(n,"px"),r.addEventListener("selectstart",function(t){t.preventDefault()}),r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"zT3T":[function(require,module,exports) {
"use strict";function e(e,t){var n=0,o=0,s=function(e){t(n-e.pageX,o-e.pageY),n=e.pageX,o=e.pageY},a=function t(){e.classList.remove("drag-active"),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",t)};e.addEventListener("mousedown",function(t){n=t.pageX,o=t.pageY,e.classList.add("drag-active"),window.addEventListener("mousemove",s),window.addEventListener("mouseup",a)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"sQGq":[function(require,module,exports) {
"use strict";function e(e,n){function t(t,o){if(!(0>t||t>=n)){var r=document.createElement("img");r.onload=function(){o(r)},r.onerror=function(){console.error("Failed to load image at "+e+"/"+t+".jpg"),o(null)},r.src=e+"/"+t+".jpg"}}return{getImage:t,getImages:function(e,n){var o=[],r=0;e=Array.from(new Set(e));for(var u=function(u){t(e[u],function(t){!function(t,u){o[u]=t,++r===e.length&&n(o)}(t,u)})},a=0;a<e.length;a++)u(a)},getNumImages:function(){return n}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"DZsg":[function(require,module,exports) {
"use strict";function t(t,e){var i=t.getContext("2d"),n=t.width/t.height,h=e.getNumImages()*t.width,r=null;function a(e,h){var r=function(e){var i=e.width/e.height;return i>=n?t.width/e.width:n>i?t.height/e.height:0}(e),a=e.width*r,g=e.height*r,o=h+(t.width-a)/2,u=(t.height-g)/2;i.drawImage(e,Math.round(o),Math.round(u),Math.round(a),Math.round(g))}return function(n){if(r!==n){var g=function(t){var i=t[t.length-1];return i+1<e.getNumImages()&&t.push(i+1),t}((u=n,[Math.floor(u/h*e.getNumImages()),Math.ceil(u/h*e.getNumImages())])),o=n-g[0]*t.width;e.getImages(g,function(e){requestAnimationFrame(function(){i.fillStyle="rgb(242, 242, 242)",i.fillRect(0,0,t.width,t.height);for(var n=0;n<e.length;n++){console.log(JSON.stringify(e));var h=e[n];h?a(h,t.width*n-o):console.log("Image at index "+n+" is undefined.")}})}),r=n}var u}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"B6dB":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./CanvasRenderer")),t=e(require("./DragHandler")),a=e(require("./ImageLoader")),i=e(require("./SceneRenderer")),u=(0,r.default)("image_slider",640,400),n=(0,a.default)("images",4),d=(0,i.default)(u,n),s=0,l=n.getNumImages()*u.width;d(s),(0,t.default)(u,function(e,r){s+=e,s=Math.max(0,s),s=Math.min(s,l-u.width),requestAnimationFrame(function(){d(s)})});
},{"./CanvasRenderer":"xNwm","./DragHandler":"zT3T","./ImageLoader":"sQGq","./SceneRenderer":"DZsg"}]},{},["B6dB"], null)
//# sourceMappingURL=/src.e2440e3b.js.map