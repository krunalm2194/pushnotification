!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e,n,o,i,r,a){try{var s=t[r](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(o,i)}function n(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(self.webpackChunkpush_notification=self.webpackChunkpush_notification||[]).push([[134],{134:function(o,r,s){"use strict";s.r(r),s.d(r,{ion_segment:function(){return g},ion_segment_button:function(){return h}});var l=s(2322),c=s(7505),d=s(1843),u=s(4843),g=function(){function o(t){var e=this;i(this,o),(0,l.r)(this,t),this.ionChange=(0,l.e)(this,"ionChange",7),this.ionSelect=(0,l.e)(this,"ionSelect",7),this.ionStyle=(0,l.e)(this,"ionStyle",7),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.swipeGesture=!0,this.onClick=function(t){var n=t.target,o=e.checked;"ION-SEGMENT"!==n.tagName&&(e.value=n.value,!e.scrollable&&e.swipeGesture||(o?e.checkButton(o,n):e.setCheckedClasses()),e.checked=n)}}var r,g;return a(o,[{key:"colorChanged",value:function(t,e){(void 0===e&&void 0!==t||void 0!==e&&void 0===t)&&this.emitStyle()}},{key:"swipeGestureChanged",value:function(){this.gestureChanged()}},{key:"valueChanged",value:function(t,e){this.ionSelect.emit({value:t}),(""!==e||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}},{key:"disabledChanged",value:function(){this.gestureChanged();var t,e=n(this.getButtons());try{for(e.s();!(t=e.n()).done;){t.value.disabled=this.disabled}}catch(o){e.e(o)}finally{e.f()}}},{key:"gestureChanged",value:function(){this.gesture&&this.gesture.enable(!this.scrollable&&!this.disabled&&this.swipeGesture)}},{key:"connectedCallback",value:function(){this.emitStyle()}},{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"componentDidLoad",value:(r=regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.setCheckedClasses(),t.next=3,Promise.resolve().then(s.bind(s,8520));case 3:this.gesture=t.sent.createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:function(t){return e.onStart(t)},onMove:function(t){return e.onMove(t)},onEnd:function(t){return e.onEnd(t)}}),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0;case 7:case"end":return t.stop()}},t,this)}),g=function(){var t=this,n=arguments;return new Promise(function(o,i){var a=r.apply(t,n);function s(t){e(a,o,i,s,l,"next",t)}function l(t){e(a,o,i,s,l,"throw",t)}s(void 0)})},function(){return g.apply(this,arguments)})},{key:"onStart",value:function(t){this.activate(t)}},{key:"onMove",value:function(t){this.setNextIndex(t)}},{key:"onEnd",value:function(t){this.setActivated(!1);var e=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),e&&this.addRipple(t);var n=this.valueAfterGesture;void 0!==n&&(this.ionChange.emit({value:n}),this.valueAfterGesture=void 0)}},{key:"getButtons",value:function(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}},{key:"addRipple",value:function(t){var e=this;if(c.c.getBoolean("animated",!0)&&c.c.getBoolean("rippleEffect",!0)){var n=this.getButtons().find(function(t){return t.value===e.value}),o=(n.shadowRoot||n).querySelector("ion-ripple-effect");if(o){var i=(0,d.p)(t.event),r=i.x,a=i.y;o.addRipple(r,a).then(function(t){return t()})}}}},{key:"setActivated",value:function(t){this.getButtons().forEach(function(e){t?e.classList.add("segment-button-activated"):e.classList.remove("segment-button-activated")}),this.activated=t}},{key:"activate",value:function(t){var e=this,n=t.event.target,o=this.getButtons().find(function(t){return t.value===e.value});"ION-SEGMENT-BUTTON"===n.tagName&&(o||(this.value=n.value,this.setCheckedClasses()),this.value===n.value&&this.setActivated(!0))}},{key:"getIndicator",value:function(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}},{key:"checkButton",value:function(t,e){var n=this.getIndicator(t),o=this.getIndicator(e);if(null!==n&&null!==o){var i=n.getBoundingClientRect(),r=o.getBoundingClientRect(),a="translate3d(".concat(i.left-r.left,"px, 0, 0) scaleX(").concat(i.width/r.width,")");(0,l.c)(function(){o.classList.remove("segment-button-indicator-animated"),o.style.setProperty("transform",a),o.getBoundingClientRect(),o.classList.add("segment-button-indicator-animated"),o.style.setProperty("transform","")}),this.value=e.value,this.setCheckedClasses()}}},{key:"setCheckedClasses",value:function(){var t=this,e=this.getButtons(),o=e.findIndex(function(e){return e.value===t.value})+1;this.checked=e.find(function(e){return e.value===t.value});var i,r=n(e);try{for(r.s();!(i=r.n()).done;){i.value.classList.remove("segment-button-after-checked")}}catch(a){r.e(a)}finally{r.f()}o<e.length&&e[o].classList.add("segment-button-after-checked")}},{key:"setNextIndex",value:function(t){var e,n,o=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="rtl"===document.dir,a=this.activated,s=this.getButtons(),l=s.findIndex(function(t){return t.value===o.value}),c=s[l];if(-1!==l){var d=c.getBoundingClientRect(),u=d.left,g=d.width,b=t.currentX,h=document.elementFromPoint(b,d.top+d.height/2);if(a&&!i){if(r?b>u+g:b<u){var m=l-1;m>=0&&(n=m)}else if((r?b<u:b>u+g)&&a&&!i){var v=l+1;v<s.length&&(n=v)}void 0===n||s[n].disabled||(e=s[n])}if(!a&&i&&(e=h),null!=e){if("ION-SEGMENT"===e.tagName)return!1;c!==e&&this.checkButton(c,e)}return!0}}},{key:"emitStyle",value:function(){this.ionStyle.emit({segment:!0})}},{key:"render",value:function(){var e,n=(0,c.b)(this);return(0,l.h)(l.H,{role:"tablist",onClick:this.onClick,class:(0,u.c)(this.color,(e={},t(e,n,!0),t(e,"in-toolbar",(0,u.h)("ion-toolbar",this.el)),t(e,"in-toolbar-color",(0,u.h)("ion-toolbar[color]",this.el)),t(e,"segment-activated",this.activated),t(e,"segment-disabled",this.disabled),t(e,"segment-scrollable",this.scrollable),e))},(0,l.h)("slot",null))}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{color:["colorChanged"],swipeGesture:["swipeGestureChanged"],value:["valueChanged"],disabled:["disabledChanged"]}}}]),o}();g.style={ios:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb), 0.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background, var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb), 0.11)}",md:":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family, inherit);text-align:center;contain:paint;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:transparent}:host(.segment-scrollable) ::slotted(ion-segment-button){min-width:auto}"};var b=0,h=function(){function e(t){var n=this;i(this,e),(0,l.r)(this,t),this.segmentEl=null,this.checked=!1,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+b++,this.updateStyle=function(){(0,l.j)(n)},this.updateState=function(){n.segmentEl&&(n.checked=n.segmentEl.value===n.value)}}return a(e,[{key:"connectedCallback",value:function(){var t=this.segmentEl=this.el.closest("ion-segment");t&&(this.updateState(),(0,d.a)(t,"ionSelect",this.updateState),(0,d.a)(t,"ionStyle",this.updateStyle))}},{key:"disconnectedCallback",value:function(){var t=this.segmentEl;t&&((0,d.b)(t,"ionSelect",this.updateState),(0,d.b)(t,"ionStyle",this.updateStyle),this.segmentEl=null)}},{key:"hasLabel",get:function(){return!!this.el.querySelector("ion-label")}},{key:"hasIcon",get:function(){return!!this.el.querySelector("ion-icon")}},{key:"tabIndex",get:function(){return this.disabled?-1:this.el.hasAttribute("tabindex")?this.el.getAttribute("tabindex"):0}},{key:"render",value:function(){var e,n=this.checked,o=this.type,i=this.disabled,r=this.hasIcon,a=this.hasLabel,s=this.layout,d=this.segmentEl,g=this.tabIndex,b=(0,c.b)(this);return(0,l.h)(l.H,{role:"tab","aria-selected":n?"true":"false","aria-disabled":i?"true":null,tabIndex:g,class:(e={},t(e,b,!0),t(e,"in-toolbar",(0,u.h)("ion-toolbar",this.el)),t(e,"in-toolbar-color",(0,u.h)("ion-toolbar[color]",this.el)),t(e,"in-segment",(0,u.h)("ion-segment",this.el)),t(e,"in-segment-color",null!==d&&void 0!==d.color),t(e,"segment-button-has-label",a),t(e,"segment-button-has-icon",r),t(e,"segment-button-has-label-only",a&&!r),t(e,"segment-button-has-icon-only",r&&!a),t(e,"segment-button-disabled",i),t(e,"segment-button-checked",n),t(e,"segment-button-layout-".concat(s),!0),t(e,"ion-activatable",!0),t(e,"ion-activatable-instant",!0),t(e,"ion-focusable",!0),e)},(0,l.h)("button",{type:o,tabIndex:-1,class:"button-native",part:"native",disabled:i},(0,l.h)("span",{class:"button-inner"},(0,l.h)("slot",null)),"md"===b&&(0,l.h)("ion-ripple-effect",null)),(0,l.h)("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},(0,l.h)("div",{part:"indicator-background",class:"segment-button-indicator-background"})))}},{key:"el",get:function(){return(0,l.i)(this)}}]),e}();h.style={ios:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0, 0, 0, 0.16);--indicator-color:var(--ion-color-step-350, var(--ion-background-color, #fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);font-size:13px;font-weight:450;line-height:37px}:host::before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:160ms opacity ease-in-out;transition:160ms opacity ease-in-out;-webkit-transition-delay:100ms;transition-delay:100ms;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type)::before{border-left-color:transparent}:host(.segment-button-disabled){opacity:0.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}.segment-button-indicator{padding-left:2px;padding-right:2px;left:0;right:0;top:0;bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}.segment-button-indicator-background{border-radius:var(--border-radius);background:var(--indicator-color)}.segment-button-indicator-background{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked)::before,:host(.segment-button-after-checked)::before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:0.7}@media (any-hover: hover){:host(:hover) .button-native{opacity:0.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color, #000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350, var(--ion-background-color, #fff))}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native,:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-text-color, #000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, var(--ion-toolbar-color), initial);--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-toolbar-color), initial);--indicator-color:var(--ion-toolbar-segment-indicator-color, var(--ion-color-step-350, var(--ion-background-color, #fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}',md:':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;border-radius:var(--border-radius);display:-ms-flexbox;display:flex;position:relative;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;height:auto;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none;cursor:pointer}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;height:auto;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;pointer-events:none;overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(:focus){outline:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon){display:none}:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color, var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform, opacity;pointer-events:none}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow);pointer-events:none}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion: reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:var(--color-checked);--background-focused:var(--color-checked);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04;--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--indicator-box-shadow:none;--indicator-color:var(--color-checked);--indicator-height:2px;--indicator-transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);--indicator-transform:none;--padding-top:0;--padding-end:16px;--padding-bottom:0;--padding-start:16px;--transition:color 0.15s linear 0s, opacity 0.15s linear 0s;min-width:90px;max-width:360px;min-height:48px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);font-size:14px;font-weight:500;letter-spacing:0.06em;line-height:40px;text-transform:uppercase}:host(.segment-button-disabled){opacity:0.3}:host(.in-segment-color){background:none;color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color) ion-ripple-effect{color:var(--ion-color-base)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked) .button-native{color:var(--ion-color-base)}:host(.in-segment-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.in-segment-color:hover) .button-native{color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6)}:host(.in-segment-color:hover) .button-native::after{background:var(--ion-color-base)}:host(.in-segment-color.segment-button-checked:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-segment-color)){--background:var(--ion-toolbar-segment-background, none);--background-checked:var(--ion-toolbar-segment-background-checked, none);--color:var(--ion-toolbar-segment-color, rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.6));--color-checked:var(--ion-toolbar-segment-color-checked, var(--ion-color-primary, #3880ff));--indicator-color:var(--ion-toolbar-segment-color-checked, var(--color-checked))}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:rgba(var(--ion-color-contrast-rgb), 0.6)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}@media (any-hover: hover){:host(.in-toolbar-color:not(.in-segment-color)) .button-native::after{background:var(--ion-color-contrast)}}::slotted(ion-icon){margin-top:12px;margin-bottom:12px;font-size:24px}::slotted(ion-label){margin-top:12px;margin-bottom:12px}:host(.segment-button-layout-icon-top) ::slotted(ion-label),:host(.segment-button-layout-icon-bottom) ::slotted(ion-icon){margin-top:0}:host(.segment-button-layout-icon-top) ::slotted(ion-icon),:host(.segment-button-layout-icon-bottom) ::slotted(ion-label){margin-bottom:0}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:8px;margin-right:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.segment-button-has-icon-only) ::slotted(ion-icon){margin-top:12px;margin-bottom:12px}:host(.segment-button-has-label-only) ::slotted(ion-label){margin-top:12px;margin-bottom:12px}.segment-button-indicator{left:0;right:0;bottom:0}.segment-button-indicator-background{background:var(--indicator-color)}:host(.in-toolbar:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-toolbar-segment-indicator-color, var(--indicator-color))}:host(.in-toolbar-color:not(.in-segment-color)) .segment-button-indicator-background{background:var(--ion-color-contrast)}'}}}])}();