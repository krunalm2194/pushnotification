!function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function e(t,n,e,r,i,o,a){try{var u=t[o](a),c=u.value}catch(s){return void e(s)}u.done?n(c):Promise.resolve(c).then(r,i)}function r(t){return function(){var n=this,r=arguments;return new Promise(function(i,o){var a=t.apply(n,r);function u(t){e(a,i,o,u,c,"next",t)}function c(t){e(a,i,o,u,c,"throw",t)}u(void 0)})}}(self.webpackChunkpush_notification=self.webpackChunkpush_notification||[]).push([[8592],{8232:function(t,n,e){"use strict";e.d(n,{c:function(){return a}});var r=e(2322),i=e(3320),o=e(8520),a=function(t,n){var e,a,u=function(t,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(t,r);o&&n(o)?o!==e&&(s(),c(o,i)):s()}},c=function(t,n){e=t,a||(a=e);var i=e;(0,r.c)(function(){return i.classList.add("ion-activated")}),n()},s=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;(0,r.c)(function(){return n.classList.remove("ion-activated")}),t&&a!==e&&e.click(),e=void 0}};return(0,o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return u(t.currentX,t.currentY,i.a)},onMove:function(t){return u(t.currentX,t.currentY,i.b)},onEnd:function(){s(!0),(0,i.h)(),a=void 0}})}},4068:function(t,n,e){"use strict";e.d(n,{g:function(){return r}});var r=function(t,n,e,r,a){return o(t[1],n[1],e[1],r[1],a).map(function(o){return i(t[0],n[0],e[0],r[0],o)})},i=function(t,n,e,r,i){return i*(3*n*Math.pow(i-1,2)+i*(-3*e*i+3*e+r*i))-t*Math.pow(i-1,3)},o=function(t,n,e,r,i){return a((r-=i)-3*(e-=i)+3*(n-=i)-(t-=i),3*e-6*n+3*t,3*n-3*t,t).filter(function(t){return t>=0&&t<=1})},a=function(t,n,e,r){if(0===t)return function(t,n,e){var r=n*n-4*t*e;return r<0?[]:[(-n+Math.sqrt(r))/(2*t),(-n-Math.sqrt(r))/(2*t)]}(n,e,r);var i=(3*(e/=t)-(n/=t)*n)/3,o=(2*n*n*n-9*n*e+27*(r/=t))/27;if(0===i)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-i),-Math.sqrt(-i)];var a=Math.pow(o/2,2)+Math.pow(i/3,3);if(0===a)return[Math.pow(o/2,.5)-n/3];if(a>0)return[Math.pow(-o/2+Math.sqrt(a),1/3)-Math.pow(o/2+Math.sqrt(a),1/3)-n/3];var u=Math.sqrt(Math.pow(-i/3,3)),c=Math.acos(-o/(2*Math.sqrt(Math.pow(-i/3,3)))),s=2*Math.pow(u,1/3);return[s*Math.cos(c/3)-n/3,s*Math.cos((c+2*Math.PI)/3)-n/3,s*Math.cos((c+4*Math.PI)/3)-n/3]}},9498:function(t,n,e){"use strict";e.d(n,{a:function(){return o},d:function(){return a}});var i=e(1843),o=function(){var t=r(regeneratorRuntime.mark(function t(n,e,r,o,a){var u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,r,a,o));case 2:if("string"==typeof r||r instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:return u="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,o&&o.forEach(function(t){return u.classList.add(t)}),a&&Object.assign(u,a),e.appendChild(u),t.next=10,new Promise(function(t){return(0,i.c)(u,t)});case 10:return t.abrupt("return",u);case 11:case"end":return t.stop()}},t)}));return function(n,e,r,i,o){return t.apply(this,arguments)}}(),a=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},3320:function(t,n,e){"use strict";e.d(n,{a:function(){return o},b:function(){return a},c:function(){return i},d:function(){return c},h:function(){return u}});var r={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},a=function(){r.selectionChanged()},u=function(){r.selectionEnd()},c=function(t){r.impact(t)}},7942:function(t,e,r){"use strict";r.d(e,{s:function(){return i}});var i=function(t){try{if(t instanceof function(){return function t(e){n(this,t),this.value=e}}())return t.value;if(!u()||"string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,s.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var i=n[r];i.parentNode?i.parentNode.removeChild(i):e.removeChild(i);for(var u=a(i),c=0;c<u.length;c++)o(u[c])}});for(var i=a(e),c=0;c<i.length;c++)o(i[c]);var f=document.createElement("div");f.appendChild(e);var l=f.querySelector("div");return null!==l?l.innerHTML:f.innerHTML}catch(h){return console.error(h),""}},o=function t(n){if(!n.nodeType||1===n.nodeType){for(var e=n.attributes.length-1;e>=0;e--){var r=n.attributes.item(e),i=r.name;if(c.includes(i.toLowerCase())){var o=r.value;null!=o&&o.toLowerCase().includes("javascript:")&&n.removeAttribute(i)}else n.removeAttribute(i)}for(var u=a(n),s=0;s<u.length;s++)t(u[s])}},a=function(t){return null!=t.children?t.children:t.childNodes},u=function(){var t=window,n=t&&t.Ionic&&t.Ionic.config;return!n||(n.get?n.get("sanitizerEnabled",!0):!0===n.sanitizerEnabled||void 0===n.sanitizerEnabled)},c=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},9926:function(t,n,e){"use strict";e.d(n,{S:function(){return r}});var r={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var r=t*n/e-t+"ms",i=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var r=n/e,i=t*r-t+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},4843:function(t,n,e){"use strict";e.d(n,{c:function(){return o},g:function(){return a},h:function(){return i},o:function(){return c}});var i=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((e={"ion-color":!0},r="ion-color-".concat(t),i=!0,r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e),n):n;var e,r,i},a=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},u=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=r(regeneratorRuntime.mark(function t(n,e,r,i){var o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||u.test(n)){t.next=4;break}if(!(o=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),o.push(n,r,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(n,e,r,i){return t.apply(this,arguments)}}()},2590:function(e,r,i){"use strict";i.d(r,{e:function(){return f}});var o=i(6916),a=i(5366),u=i(7740),c=i(1833),s=i(7767),f=function(){var e=function(){function e(t,r,i,o){n(this,e),this.afStore=t,this.ngFireAuth=r,this.router=i,this.ngZone=o}var r,i,a;return r=e,(i=[{key:"isEmailVerified",get:function(){return!1!==JSON.parse(localStorage.getItem("user")).emailVerified}},{key:"googleAuth",value:function(){return this.authLogin(new o.auth.GoogleAuthProvider)}},{key:"authLogin",value:function(t){var n=this;return this.ngFireAuth.auth.signInWithPopup(t).then(function(t){n.ngZone.run(function(){n.router.navigate(["dashboard"])}),n.setUserData(t.user)}).catch(function(t){window.alert(t)})}},{key:"setUserData",value:function(t){return this.afStore.doc("users/".concat(t.uid)).set({uid:t.uid,email:t.email,displayName:t.displayName,photoURL:t.photoURL,emailVerified:t.emailVerified},{merge:!0})}},{key:"signOut",value:function(){var t=this;return this.ngFireAuth.auth.signOut().then(function(){localStorage.removeItem("user"),t.router.navigate(["login"])})}},{key:"signIn",value:function(t,n){return this.ngFireAuth.auth.signInWithEmailAndPassword(t,n)}}])&&t(r.prototype,i),a&&t(r,a),e}();return e.\u0275fac=function(t){return new(t||e)(a.LFG(u.ST),a.LFG(c.z),a.LFG(s.F0),a.LFG(a.R0b))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();