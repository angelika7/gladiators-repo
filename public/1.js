(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{133:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return v; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return g; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return h; });\nvar t,n,e=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:t,value:n,delta:0,entries:[],id:e(),isFinal:!1}},a=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},r=!1,o=!1,s=function(t){r=!t.persisted},u=function(){addEventListener("pagehide",s),addEventListener("beforeunload",(function(){}))},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o||(u(),o=!0),addEventListener("visibilitychange",(function(n){var e=n.timeStamp;"hidden"===document.visibilityState&&t({timeStamp:e,isUnloading:r})}),{capture:!0,once:n})},l=function(t,n,e,i){var a;return function(){e&&n.isFinal&&e.disconnect(),n.value>=0&&(i||n.isFinal||"hidden"===document.visibilityState)&&(n.delta=n.value-(a||0),(n.delta||n.isFinal||void 0===a)&&(t(n),a=n.value))}},p=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),o=function(t){t.hadRecentInput||(r.value+=t.value,r.entries.push(t),n())},s=a("layout-shift",o);s&&(n=l(t,r,s,e),c((function(t){var e=t.isUnloading;s.takeRecords().map(o),e&&(r.isFinal=!0),n()})))},d=function(){return void 0===t&&(t="hidden"===document.visibilityState?0:1/0,c((function(n){var e=n.timeStamp;return t=e}),!0)),{get timeStamp(){return t}}},v=function(t){var n,e=i("FCP"),r=d(),o=a("paint",(function(t){"first-contentful-paint"===t.name&&t.startTime<r.timeStamp&&(e.value=t.startTime,e.isFinal=!0,e.entries.push(t),n())}));o&&(n=l(t,e,o))},f=function(t){var n=i("FID"),e=d(),r=function(t){t.startTime<e.timeStamp&&(n.value=t.processingStart-t.startTime,n.entries.push(t),n.isFinal=!0,s())},o=a("first-input",r),s=l(t,n,o);o?c((function(){o.takeRecords().map(r),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(t,i){i.timeStamp<e.timeStamp&&(n.value=t,n.isFinal=!0,n.entries=[{entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+t}],s())}))},m=function(){return n||(n=new Promise((function(t){return["scroll","keydown","pointerdown"].map((function(n){addEventListener(n,t,{once:!0,passive:!0,capture:!0})}))}))),n},g=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),o=d(),s=function(t){var e=t.startTime;e<o.timeStamp?(r.value=e,r.entries.push(t)):r.isFinal=!0,n()},u=a("largest-contentful-paint",s);if(u){n=l(t,r,u,e);var p=function(){r.isFinal||(u.takeRecords().map(s),r.isFinal=!0,n())};m().then(p),c(p,!0)}},h=function(t){var n,e=i("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],e.isFinal=!0,t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYi12aXRhbHMvZGlzdC93ZWItdml0YWxzLmVzNS5taW4uanM/YzNhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgdCxuLGU9ZnVuY3Rpb24oKXtyZXR1cm5cIlwiLmNvbmNhdChEYXRlLm5vdygpLFwiLVwiKS5jb25jYXQoTWF0aC5mbG9vcig4OTk5OTk5OTk5OTk5Kk1hdGgucmFuZG9tKCkpKzFlMTIpfSxpPWZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTotMTtyZXR1cm57bmFtZTp0LHZhbHVlOm4sZGVsdGE6MCxlbnRyaWVzOltdLGlkOmUoKSxpc0ZpbmFsOiExfX0sYT1mdW5jdGlvbih0LG4pe3RyeXtpZihQZXJmb3JtYW5jZU9ic2VydmVyLnN1cHBvcnRlZEVudHJ5VHlwZXMuaW5jbHVkZXModCkpe3ZhciBlPW5ldyBQZXJmb3JtYW5jZU9ic2VydmVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5nZXRFbnRyaWVzKCkubWFwKG4pfSkpO3JldHVybiBlLm9ic2VydmUoe3R5cGU6dCxidWZmZXJlZDohMH0pLGV9fWNhdGNoKHQpe319LHI9ITEsbz0hMSxzPWZ1bmN0aW9uKHQpe3I9IXQucGVyc2lzdGVkfSx1PWZ1bmN0aW9uKCl7YWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VoaWRlXCIscyksYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLChmdW5jdGlvbigpe30pKX0sYz1mdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO298fCh1KCksbz0hMCksYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwoZnVuY3Rpb24obil7dmFyIGU9bi50aW1lU3RhbXA7XCJoaWRkZW5cIj09PWRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSYmdCh7dGltZVN0YW1wOmUsaXNVbmxvYWRpbmc6cn0pfSkse2NhcHR1cmU6ITAsb25jZTpufSl9LGw9ZnVuY3Rpb24odCxuLGUsaSl7dmFyIGE7cmV0dXJuIGZ1bmN0aW9uKCl7ZSYmbi5pc0ZpbmFsJiZlLmRpc2Nvbm5lY3QoKSxuLnZhbHVlPj0wJiYoaXx8bi5pc0ZpbmFsfHxcImhpZGRlblwiPT09ZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlKSYmKG4uZGVsdGE9bi52YWx1ZS0oYXx8MCksKG4uZGVsdGF8fG4uaXNGaW5hbHx8dm9pZCAwPT09YSkmJih0KG4pLGE9bi52YWx1ZSkpfX0scD1mdW5jdGlvbih0KXt2YXIgbixlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV0scj1pKFwiQ0xTXCIsMCksbz1mdW5jdGlvbih0KXt0LmhhZFJlY2VudElucHV0fHwoci52YWx1ZSs9dC52YWx1ZSxyLmVudHJpZXMucHVzaCh0KSxuKCkpfSxzPWEoXCJsYXlvdXQtc2hpZnRcIixvKTtzJiYobj1sKHQscixzLGUpLGMoKGZ1bmN0aW9uKHQpe3ZhciBlPXQuaXNVbmxvYWRpbmc7cy50YWtlUmVjb3JkcygpLm1hcChvKSxlJiYoci5pc0ZpbmFsPSEwKSxuKCl9KSkpfSxkPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PVwiaGlkZGVuXCI9PT1kb2N1bWVudC52aXNpYmlsaXR5U3RhdGU/MDoxLzAsYygoZnVuY3Rpb24obil7dmFyIGU9bi50aW1lU3RhbXA7cmV0dXJuIHQ9ZX0pLCEwKSkse2dldCB0aW1lU3RhbXAoKXtyZXR1cm4gdH19fSx2PWZ1bmN0aW9uKHQpe3ZhciBuLGU9aShcIkZDUFwiKSxyPWQoKSxvPWEoXCJwYWludFwiLChmdW5jdGlvbih0KXtcImZpcnN0LWNvbnRlbnRmdWwtcGFpbnRcIj09PXQubmFtZSYmdC5zdGFydFRpbWU8ci50aW1lU3RhbXAmJihlLnZhbHVlPXQuc3RhcnRUaW1lLGUuaXNGaW5hbD0hMCxlLmVudHJpZXMucHVzaCh0KSxuKCkpfSkpO28mJihuPWwodCxlLG8pKX0sZj1mdW5jdGlvbih0KXt2YXIgbj1pKFwiRklEXCIpLGU9ZCgpLHI9ZnVuY3Rpb24odCl7dC5zdGFydFRpbWU8ZS50aW1lU3RhbXAmJihuLnZhbHVlPXQucHJvY2Vzc2luZ1N0YXJ0LXQuc3RhcnRUaW1lLG4uZW50cmllcy5wdXNoKHQpLG4uaXNGaW5hbD0hMCxzKCkpfSxvPWEoXCJmaXJzdC1pbnB1dFwiLHIpLHM9bCh0LG4sbyk7bz9jKChmdW5jdGlvbigpe28udGFrZVJlY29yZHMoKS5tYXAociksby5kaXNjb25uZWN0KCl9KSwhMCk6d2luZG93LnBlcmZNZXRyaWNzJiZ3aW5kb3cucGVyZk1ldHJpY3Mub25GaXJzdElucHV0RGVsYXkmJndpbmRvdy5wZXJmTWV0cmljcy5vbkZpcnN0SW5wdXREZWxheSgoZnVuY3Rpb24odCxpKXtpLnRpbWVTdGFtcDxlLnRpbWVTdGFtcCYmKG4udmFsdWU9dCxuLmlzRmluYWw9ITAsbi5lbnRyaWVzPVt7ZW50cnlUeXBlOlwiZmlyc3QtaW5wdXRcIixuYW1lOmkudHlwZSx0YXJnZXQ6aS50YXJnZXQsY2FuY2VsYWJsZTppLmNhbmNlbGFibGUsc3RhcnRUaW1lOmkudGltZVN0YW1wLHByb2Nlc3NpbmdTdGFydDppLnRpbWVTdGFtcCt0fV0scygpKX0pKX0sbT1mdW5jdGlvbigpe3JldHVybiBufHwobj1uZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7cmV0dXJuW1wic2Nyb2xsXCIsXCJrZXlkb3duXCIsXCJwb2ludGVyZG93blwiXS5tYXAoKGZ1bmN0aW9uKG4pe2FkZEV2ZW50TGlzdGVuZXIobix0LHtvbmNlOiEwLHBhc3NpdmU6ITAsY2FwdHVyZTohMH0pfSkpfSkpKSxufSxnPWZ1bmN0aW9uKHQpe3ZhciBuLGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxyPWkoXCJMQ1BcIiksbz1kKCkscz1mdW5jdGlvbih0KXt2YXIgZT10LnN0YXJ0VGltZTtlPG8udGltZVN0YW1wPyhyLnZhbHVlPWUsci5lbnRyaWVzLnB1c2godCkpOnIuaXNGaW5hbD0hMCxuKCl9LHU9YShcImxhcmdlc3QtY29udGVudGZ1bC1wYWludFwiLHMpO2lmKHUpe249bCh0LHIsdSxlKTt2YXIgcD1mdW5jdGlvbigpe3IuaXNGaW5hbHx8KHUudGFrZVJlY29yZHMoKS5tYXAocyksci5pc0ZpbmFsPSEwLG4oKSl9O20oKS50aGVuKHApLGMocCwhMCl9fSxoPWZ1bmN0aW9uKHQpe3ZhciBuLGU9aShcIlRURkJcIik7bj1mdW5jdGlvbigpe3RyeXt2YXIgbj1wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKFwibmF2aWdhdGlvblwiKVswXXx8ZnVuY3Rpb24oKXt2YXIgdD1wZXJmb3JtYW5jZS50aW1pbmcsbj17ZW50cnlUeXBlOlwibmF2aWdhdGlvblwiLHN0YXJ0VGltZTowfTtmb3IodmFyIGUgaW4gdClcIm5hdmlnYXRpb25TdGFydFwiIT09ZSYmXCJ0b0pTT05cIiE9PWUmJihuW2VdPU1hdGgubWF4KHRbZV0tdC5uYXZpZ2F0aW9uU3RhcnQsMCkpO3JldHVybiBufSgpO2UudmFsdWU9ZS5kZWx0YT1uLnJlc3BvbnNlU3RhcnQsZS5lbnRyaWVzPVtuXSxlLmlzRmluYWw9ITAsdChlKX1jYXRjaCh0KXt9fSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP3NldFRpbWVvdXQobiwwKTphZGRFdmVudExpc3RlbmVyKFwicGFnZXNob3dcIixuKX07ZXhwb3J0e3AgYXMgZ2V0Q0xTLHYgYXMgZ2V0RkNQLGYgYXMgZ2V0RklELGcgYXMgZ2V0TENQLGggYXMgZ2V0VFRGQn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///133\n')}}]);