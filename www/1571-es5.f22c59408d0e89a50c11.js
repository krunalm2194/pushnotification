(self.webpackChunkpush_notification=self.webpackChunkpush_notification||[]).push([[1571],{1571:function(t,e,n){"use strict";n.r(e),n.d(e,{startTapClick:function(){return o}});var i=n(1843),o=function(t){var e,n,o,l,v=10*-f,p=0,h=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),L=new WeakMap,m=function(t){v=(0,i.o)(t),g(t)},E=function(){clearTimeout(l),l=void 0,n&&(S(!1),n=void 0)},w=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,k(a(t),t))},g=function(t){k(void 0,t)},k=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var o=(0,i.p)(e),a=o.x,c=o.y;if(n){if(L.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),S(!0)}if(t){var d=L.get(t);d&&(clearTimeout(d),L.delete(t));var f=r(t)?0:u;t.classList.remove(s),l=setTimeout(function(){T(t,a,c),l=void 0},f)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var i=h&&c(t);i&&i.addRipple&&(b(),o=i.addRipple(e,n))},b=function(){void 0!==o&&(o.then(function(t){return t()}),o=void 0)},S=function(t){b();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout(function(){e.classList.remove(s),L.delete(e)},d);L.set(e,o)}else e.classList.remove(s)}},C=document;C.addEventListener("ionScrollStart",function(t){e=t.target,E()}),C.addEventListener("ionScrollEnd",function(){e=void 0}),C.addEventListener("ionGestureCaptured",E),C.addEventListener("touchstart",function(t){v=(0,i.o)(t),w(t)},!0),C.addEventListener("touchcancel",m,!0),C.addEventListener("touchend",m,!0),C.addEventListener("mousedown",function(t){var e=(0,i.o)(t)-f;v<e&&w(t)},!0),C.addEventListener("mouseup",function(t){var e=(0,i.o)(t)-f;v<e&&g(t)},!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);