(self.webpackChunkpush_notification=self.webpackChunkpush_notification||[]).push([[9712],{9712:function(t,e,s){"use strict";s.r(e),s.d(e,{startFocusVisible:function(){return n}});const o=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],n=()=>{let t=[],e=!0;const s=document,n=e=>{t.forEach(t=>t.classList.remove("ion-focused")),e.forEach(t=>t.classList.add("ion-focused")),t=e},c=()=>{e=!1,n([])};s.addEventListener("keydown",t=>{e=o.includes(t.key),e||n([])}),s.addEventListener("focusin",t=>{if(e&&t.composedPath){const e=t.composedPath().filter(t=>!!t.classList&&t.classList.contains("ion-focusable"));n(e)}}),s.addEventListener("focusout",()=>{s.activeElement===s.body&&n([])}),s.addEventListener("touchstart",c),s.addEventListener("mousedown",c)}}}]);