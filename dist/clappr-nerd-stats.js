!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Clappr"),require("ClapprStats")):"function"==typeof define&&define.amd?define(["Clappr","ClapprStats"],t):"object"==typeof exports?exports.ClapprNerdStats=t(require("Clappr"),require("ClapprStats")):e.ClapprNerdStats=t(e.Clappr,e.ClapprStats)}(this,function(e,t){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";var i;!function(r,a,s){function o(e,t,n){if(e.addEventListener)return void e.addEventListener(t,n,!1);e.attachEvent("on"+t,n)}function l(e){if("keypress"==e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return k[e.which]?k[e.which]:w[e.which]?w[e.which]:String.fromCharCode(e.which).toLowerCase()}function p(e,t){return e.sort().join(",")===t.sort().join(",")}function c(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}function u(e){if(e.preventDefault)return void e.preventDefault();e.returnValue=!1}function d(e){if(e.stopPropagation)return void e.stopPropagation();e.cancelBubble=!0}function f(e){return"shift"==e||"ctrl"==e||"alt"==e||"meta"==e}function h(){if(!x){x={};for(var e in k)e>95&&e<112||k.hasOwnProperty(e)&&(x[k[e]]=e)}return x}function v(e,t,n){return n||(n=h()[e]?"keydown":"keypress"),"keypress"==n&&t.length&&(n="keydown"),n}function y(e){return"+"===e?["+"]:(e=e.replace(/\+{2}/g,"+plus"),e.split("+"))}function m(e,t){var n,i,r,a=[];for(n=y(e),r=0;r<n.length;++r)i=n[r],C[i]&&(i=C[i]),t&&"keypress"!=t&&_[i]&&(i=_[i],a.push("shift")),f(i)&&a.push(i);return t=v(i,a,t),{key:i,modifiers:a,action:t}}function b(e,t){return null!==e&&e!==a&&(e===t||b(e.parentNode,t))}function g(e){function t(e){e=e||{};var t,n=!1;for(t in x)e[t]?n=!0:x[t]=0;n||(_=!1)}function n(e,t,n,i,r,a){var s,o,l=[],c=n.type;if(!y._callbacks[e])return[];for("keyup"==c&&f(e)&&(t=[e]),s=0;s<y._callbacks[e].length;++s)if(o=y._callbacks[e][s],(i||!o.seq||x[o.seq]==o.level)&&c==o.action&&("keypress"==c&&!n.metaKey&&!n.ctrlKey||p(t,o.modifiers))){var u=!i&&o.combo==r,d=i&&o.seq==i&&o.level==a;(u||d)&&y._callbacks[e].splice(s,1),l.push(o)}return l}function i(e,t,n,i){y.stopCallback(t,t.target||t.srcElement,n,i)||!1===e(t,n)&&(u(t),d(t))}function r(e){"number"!=typeof e.which&&(e.which=e.keyCode);var t=l(e);if(t)return"keyup"==e.type&&k===t?void(k=!1):void y.handleKey(t,c(e),e)}function s(){clearTimeout(b),b=setTimeout(t,1e3)}function h(e,n,r,a){function o(n){i(r,n,e),"keyup"!==a&&(k=l(n)),setTimeout(t,10)}x[e]=0;for(var p=0;p<n.length;++p){var c=p+1===n.length,u=c?o:function(t){return function(){_=t,++x[e],s()}}(a||m(n[p+1]).action);v(n[p],u,a,e,p)}}function v(e,t,i,r,a){y._directMap[e+":"+i]=t,e=e.replace(/\s+/g," ");var s,o=e.split(" ");if(o.length>1)return void h(e,o,t,i);s=m(e,i),y._callbacks[s.key]=y._callbacks[s.key]||[],n(s.key,s.modifiers,{type:s.action},r,e,a),y._callbacks[s.key][r?"unshift":"push"]({callback:t,modifiers:s.modifiers,action:s.action,seq:r,level:a,combo:e})}var y=this;if(e=e||a,!(y instanceof g))return new g(e);y.target=e,y._callbacks={},y._directMap={};var b,x={},k=!1,w=!1,_=!1;y._handleKey=function(e,r,a){var s,o=n(e,r,a),l={},p=0,c=!1;for(s=0;s<o.length;++s)o[s].seq&&(p=Math.max(p,o[s].level));for(s=0;s<o.length;++s)if(o[s].seq){if(o[s].level!=p)continue;c=!0,l[o[s].seq]=1,i(o[s].callback,a,o[s].combo,o[s].seq)}else c||i(o[s].callback,a,o[s].combo);var u="keypress"==a.type&&w;a.type!=_||f(e)||u||t(l),w=c&&"keydown"==a.type},y._bindMultiple=function(e,t,n){for(var i=0;i<e.length;++i)v(e[i],t,n)},o(e,"keypress",r),o(e,"keydown",r),o(e,"keyup",r)}if(r){for(var x,k={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},w={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},_={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},C={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},P=1;P<20;++P)k[111+P]="f"+P;for(P=0;P<=9;++P)k[P+96]=P.toString();g.prototype.bind=function(e,t,n){var i=this;return e=e instanceof Array?e:[e],i._bindMultiple.call(i,e,t,n),i},g.prototype.unbind=function(e,t){var n=this;return n.bind.call(n,e,function(){},t)},g.prototype.trigger=function(e,t){var n=this;return n._directMap[e+":"+t]&&n._directMap[e+":"+t]({},e),n},g.prototype.reset=function(){var e=this;return e._callbacks={},e._directMap={},e},g.prototype.stopCallback=function(e,t){var n=this;return!((" "+t.className+" ").indexOf(" mousetrap ")>-1)&&(!b(t,n.target)&&("INPUT"==t.tagName||"SELECT"==t.tagName||"TEXTAREA"==t.tagName||t.isContentEditable))},g.prototype.handleKey=function(){var e=this;return e._handleKey.apply(e,arguments)},g.addKeycodes=function(e){for(var t in e)e.hasOwnProperty(t)&&(k[t]=e[t]);x=null},g.init=function(){var e=g(a);for(var t in e)"_"!==t.charAt(0)&&(g[t]=function(t){return function(){return e[t].apply(e,arguments)}}(t))},g.init(),r.Mousetrap=g,void 0!==e&&e.exports&&(e.exports=g),void 0!==(i=function(){return g}.call(t,n,t,e))&&(e.exports=i)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},function(e,t,n){t=e.exports=n(5)(void 0),t.push([e.i,".clappr-nerd-stats.container{position:absolute;display:flex;top:2em;left:2em;padding:10px 5px;margin:0;line-height:20px;font-size:11px;box-shadow:0 0 0 1px hsla(0,0%,100%,.15);background:rgba(0,0,0,.8);color:#fff;z-index:1000}.clappr-nerd-stats.container ul{flex:1;padding:0 5px;width:240px}.clappr-nerd-stats.container ul,li{list-style-type:none}.clappr-nerd-stats.container li:nth-child(2n){background:hsla(0,0%,100%,.15)}.clappr-nerd-stats.container li{padding:0 5px;text-align:left}.clappr-nerd-stats.container li.title{text-align:center;font-weight:700}.clappr-nerd-stats.container li div{padding-left:5px;margin:0;float:right}",""])},function(e,t){e.exports='<%= counters = metrics.counters %> <%= timers = metrics.timers %> <%= extra = metrics.extra %> <div class="clappr-nerd-stats container"> <ul> <li class=title><span>Counters</span></li> <li> Plays: <div><span><%= counters.play %></span></div> </li> <li> Pauses: <div><span><%= counters.pause %></span></div> </li> <li> Errors: <div><span><%= counters.error %></span></div> </li> <li> Bufferings: <div><span><%= counters.buffering %></span></div> </li> <li> Decoded frames: <div><span><%= counters.decodedFrames %></span></div> </li> <li> Dropped frames: <div><span><%= counters.droppedFrames %></span></div> </li> <li> Frames per second: <div><span><%= counters.fps %></span></div> </li> <li> Bitrate changes: <div><span><%= counters.changeLevel %></span></div> </li> <li> Seeks: <div><span><%= counters.seek %></span></div> </li> <li> Fullscreen: <div><span><%= counters.fullscreen %></span></div> </li> <li> DVR seeks: <div><span><%= counters.dvrUsage %></span></div> </li> </ul> <ul> <li class=title><span>Timers</span></li> <li> Startup time: <div><span><%= timers.startup.toFixed(2) %> ms</span></div> </li> <li> Watching time: <div><span><%= (timers.watch / 1000).toFixed(2) %> sec</span></div> </li> <li> Pause time: <div><span><%= timers.pause.toFixed(2) %> ms</span></div> </li> <li> Buffering time: <div><span><%= timers.buffering.toFixed(2) %> ms</span></div> </li> <li> Session time: <div><span><%= (timers.session / 1000).toFixed(2) %> sec</span></div> </li> <li> Latency: <div><span><%= timers.latency.toFixed(2) %> ms</span></div> </li> </ul> <ul> <li class=title><span>Extra</span></li> <li> Playback: <div><span><%= extra.playbackName %></span></div> </li> <li> Playback type: <div><span><%= extra.playbackType %></span></div> </li> <li> Buffer size: <div><span><%= (extra.buffersize / 1000).toFixed(2) %> sec</span></div> </li> <li> Video duration: <div><span><%= (extra.duration / 1000).toFixed(2) %> sec</span></div> </li> <li> Current time: <div><span><%= (extra.currentTime / 1000).toFixed(2) %> sec</span></div> </li> <li> Bitrate weighted mean: <div><span><%= extra.bitrateWeightedMean.toFixed(2) %> kbps</span></div> </li> <li> Bitrate most used: <div><span><%= extra.bitrateMostUsed.bitrate %> kbps</span></div> </li> <li> % Watched: <div><span><%= extra.watchedPercentage.toFixed(2) %> %</span></div> </li> <li> % Buffering: <div><span><%= extra.bufferingPercentage.toFixed(2) %> %</span></div> </li> <li> Bandwidth: <div><span><%= extra.bandwidth %> kbps</span></div> </li> </ul> </div> '},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function i(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=r(i);return[n].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=i(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<e.length;r++){var s=e[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(3),p=n(4),c=i(p),u=n(1),d=i(u),f=n(2),h=i(f),v=n(0),y=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return s(t,e),o(t,[{key:"name",get:function(){return"clappr-nerd-stats"}},{key:"template",get:function(){return(0,l.template)(h.default)}}]),o(t,[{key:"bindEvents",value:function(){this.listenToOnce(this.container,l.Events.CONTAINER_READY,this.init)}},{key:"init",value:function(){var e=this,t=this.container.getPlugin("clappr_stats");void 0===t?console.error("clappr-stats not available. Please, include it as a plugin of your Clappr instance.\nFor more info, visit: https://github.com/clappr/clappr-stats."):(v.bind(["command+shift+s","ctrl+shift+s"],function(){return e.showOrHide()}),this.listenTo(t,c.default.REPORT_EVENT,this.onReport),this.style=l.Styler.getStyleFor(d.default,{baseUrl:this.options.baseUrl}),this.metrics=t._metrics)}},{key:"showOrHide",value:function(){this.showing?this.hide():(this.show(),this.render())}},{key:"show",value:function(){this.$el.show(),this.showing=!0}},{key:"hide",value:function(){this.$el.hide(),this.showing=!1}},{key:"onReport",value:function(e){this.metrics=e,this.render()}},{key:"render",value:function(){return this.showing&&(this.$el.html(this.template({metrics:this.metrics})),this.$el.append(this.style),this.container.$el.append(this.el)),this}}]),t}(l.UIContainerPlugin);t.default=y,e.exports=t.default}])});