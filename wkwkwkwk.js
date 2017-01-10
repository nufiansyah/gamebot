"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol?"symbol":typeof a};!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a){return function(){if(null===a)throw new Error("Callback was already called.");a.apply(this,arguments),a=null}}Object.defineProperty(c,"__esModule",{value:!0}),c["default"]=d,b.exports=c["default"]},{}],2:[function(a,b,c){function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b,c){function d(a,b,c,d){if(null!=d&&"function"!=typeof d)throw new Error("task callback must be a function");return a.started=!0,(0,k["default"])(b)||(b=[b]),0===b.length&&a.idle()?(0,s["default"])(function(){a.drain()}):((0,g["default"])(b,function(b){var e={data:b,callback:d||m["default"]};c?a.tasks.unshift(e):a.tasks.push(e)}),void(0,s["default"])(a.process))}function e(a,b){return function(){f-=1;var c=!1,d=arguments;(0,g["default"])(b,function(a){(0,g["default"])(h,function(b,d){b!==a||c||(h.splice(d,1),c=!0)}),a.callback.apply(a,d)}),f<=a.concurrency-a.buffer&&a.unsaturated(),a.tasks.length+f===0&&a.drain(),a.process()}}if(null==b)b=1;else if(0===b)throw new Error("Concurrency must not be zero");var f=0,h=[],j={tasks:[],concurrency:b,payload:c,saturated:m["default"],unsaturated:m["default"],buffer:b/4,empty:m["default"],drain:m["default"],started:!1,paused:!1,push:function(a,b){d(j,a,!1,b)},kill:function(){j.drain=m["default"],j.tasks=[]},unshift:function(a,b){d(j,a,!0,b)},process:function(){for(;!j.paused&&f<j.concurrency&&j.tasks.length;){var b=j.payload?j.tasks.splice(0,j.payload):j.tasks.splice(0,j.tasks.length),c=(0,i["default"])(b,(0,o["default"])("data"));0===j.tasks.length&&j.empty(),f+=1,h.push(b[0]),f===j.concurrency&&j.saturated();var d=(0,q["default"])(e(j,b));a(c,d)}},length:function(){return j.tasks.length},running:function(){return f},workersList:function(){return h},idle:function(){return j.tasks.length+f===0},pause:function(){j.paused=!0},resume:function(){if(j.paused!==!1){j.paused=!1;for(var a=Math.min(j.concurrency,j.tasks.length),b=1;a>=b;b++)(0,s["default"])(j.process)}}};return j}Object.defineProperty(c,"__esModule",{value:!0}),c["default"]=e;var f=a("lodash/_arrayEach"),g=d(f),h=a("lodash/_arrayMap"),i=d(h),j=a("lodash/isArray"),k=d(j),l=a("lodash/noop"),m=d(l),n=a("lodash/_baseProperty"),o=d(n),p=a("./onlyOnce"),q=d(p),r=a("./setImmediate"),s=d(r);b.exports=c["default"]},{"./onlyOnce":1,"./setImmediate":3,"lodash/_arrayEach":5,"lodash/_arrayMap":6,"lodash/_baseProperty":7,"lodash/isArray":8,"lodash/noop":13}],3:[function(a,b,c){(function(d){function e(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0});var f,g=a("lodash/rest"),h=e(g),i="function"==typeof setImmediate&&setImmediate;f=i?i:"object"===("undefined"==typeof d?"undefined":_typeof(d))&&"function"==typeof d.nextTick?d.nextTick:function(a){setTimeout(a,0)},c["default"]=(0,h["default"])(function(a,b){f(function(){a.apply(null,b)})}),b.exports=c["default"]}).call(this,a("_process"))},{_process:18,"lodash/rest":14}],4:[function(a,b,c){function d(a,b,c){var d=c.length;switch(d){case 0:return a.call(b);case 1:return a.call(b,c[0]);case 2:return a.call(b,c[0],c[1]);case 3:return a.call(b,c[0],c[1],c[2])}return a.apply(b,c)}b.exports=d},{}],5:[function(a,b,c){function d(a,b){for(var c=-1,d=a.length;++c<d&&b(a[c],c,a)!==!1;);return a}b.exports=d},{}],6:[function(a,b,c){function d(a,b){for(var c=-1,d=a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e}b.exports=d},{}],7:[function(a,b,c){function d(a){return function(b){return null==b?void 0:b[a]}}b.exports=d},{}],8:[function(a,b,c){var d=Array.isArray;b.exports=d},{}],9:[function(a,b,c){function d(a){var b=e(a)?i.call(a):"";return b==f||b==g}var e=a("./isObject"),f="[object Function]",g="[object GeneratorFunction]",h=Object.prototype,i=h.toString;b.exports=d},{"./isObject":10}],10:[function(a,b,c){function d(a){var b="undefined"==typeof a?"undefined":_typeof(a);return!!a&&("object"==b||"function"==b)}b.exports=d},{}],11:[function(a,b,c){function d(a){return!!a&&"object"==("undefined"==typeof a?"undefined":_typeof(a))}b.exports=d},{}],12:[function(a,b,c){function d(a){return"symbol"==("undefined"==typeof a?"undefined":_typeof(a))||e(a)&&h.call(a)==f}var e=a("./isObjectLike"),f="[object Symbol]",g=Object.prototype,h=g.toString;b.exports=d},{"./isObjectLike":11}],13:[function(a,b,c){function d(){}b.exports=d},{}],14:[function(a,b,c){function d(a,b){if("function"!=typeof a)throw new TypeError(g);return b=h(void 0===b?a.length-1:f(b),0),function(){for(var c=arguments,d=-1,f=h(c.length-b,0),g=Array(f);++d<f;)g[d]=c[b+d];switch(b){case 0:return a.call(this,g);case 1:return a.call(this,c[0],g);case 2:return a.call(this,c[0],c[1],g)}var i=Array(b+1);for(d=-1;++d<b;)i[d]=c[d];return i[b]=g,e(a,this,i)}}var e=a("./_apply"),f=a("./toInteger"),g="Expected a function",h=Math.max;b.exports=d},{"./_apply":4,"./toInteger":15}],15:[function(a,b,c){function d(a){if(!a)return 0===a?a:0;if(a=e(a),a===f||a===-f){var b=0>a?-1:1;return b*g}var c=a%1;return a===a?c?a-c:a:0}var e=a("./toNumber"),f=1/0,g=1.7976931348623157e308;b.exports=d},{"./toNumber":16}],16:[function(a,b,c){function d(a){if("number"==typeof a)return a;if(g(a))return h;if(f(a)){var b=e(a.valueOf)?a.valueOf():a;a=f(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(i,"");var c=k.test(a);return c||l.test(a)?m(a.slice(2),c?2:8):j.test(a)?h:+a}var e=a("./isFunction"),f=a("./isObject"),g=a("./isSymbol"),h=NaN,i=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,l=/^0o[0-7]+$/i,m=parseInt;b.exports=d},{"./isFunction":9,"./isObject":10,"./isSymbol":12}],17:[function(a,b,c){function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0}),c["default"]=function(a,b){return(0,f["default"])(function(b,c){a(b[0],c)},b,1)};var e=a("./internal/queue"),f=d(e);b.exports=c["default"]},{"./internal/queue":2}],18:[function(a,b,c){function d(){k=!1,h.length?j=h.concat(j):l=-1,j.length&&e()}function e(){if(!k){var a=setTimeout(d);k=!0;for(var b=j.length;b;){for(h=j,j=[];++l<b;)h&&h[l].run();l=-1,b=j.length}h=null,k=!1,clearTimeout(a)}}function f(a,b){this.fun=a,this.array=b}function g(){}var h,i=b.exports={},j=[],k=!1,l=-1;i.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];j.push(new f(a,b)),1!==j.length||k||setTimeout(e,0)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.binding=function(a){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(a){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],19:[function(a,b,c){for(var d=a("./plugin/VastPlugin"),e=a("./plugin/vpaid/VPAIDWrapper"),f=a("./player/player"),g=a("async/queue"),h=document.currentScript,i=h.parentElement||document.body,j=h.getAttribute("data-adtagurl"),k=parseInt(h.getAttribute("data-width")||300),l=parseInt(h.getAttribute("data-height")||250),m=parseInt(h.getAttribute("data-r")||250),n=parseInt(h.getAttribute("data-c")||250),o=(parseInt(h.getAttribute("data-t")||0),!!h.getAttribute("data-s")),p=!1,q=a("./sites"),r=function(a,b){var c=a.vastPlugin,d=c.vast.response.mediaFiles[0],g=f(k,l),h=g.iframe,j=g.slot,m=g.link,n=g.video,q=g.source;if(c.isVPAID(d)){if(p||!o)return;if("application/javascript"!=d.type)return;p=!0;var r=c.vast.response.adParameters||"",s='<!DOCTYPE html><html><head></head><body><script src="'+d.src+'"></script></body></html>';return i.appendChild(h),i.appendChild(j),h.contentWindow.document.write(s),i.appendChild(n),void setTimeout(function(){var a=new e,b={},c=h.contentWindow.getVPAIDAd;if(c&&"function"==typeof c&&(b=c(),a.setCreative(b))){var d=a.handshakeVersion("2.0");if(d.match(/^2\./)){var f={},g={};f.AdParameters=r,g.slot=j,g.videoSlot=n,g.videoSlotCanAutoPlay=!0,a.initAd(k,l,"normal",-1,f,g,function(){a.startAd()})}}},100)}!p&&o&&(p=!0,n.controls=!1,m.appendChild(n),i.appendChild(m),q.setAttribute("src",d.src),q.setAttribute("type",d.type),m.setAttribute("href",c.vast.response.clickThrough),m.setAttribute("target","_blank"),m.onclick=function(){n.pause();var a=c.vast.response.clickTrackings;for(var b in a){var d=new Image;d.src=a[b]}},n.width=k,n.height=l,n.play());var t=c.vast.response.duration,u=c.vast.response.impressions;for(var v in u){var w=new Image;w.src=u[v]}setTimeout(function(){var a=c.vast.response.trackingEvents.firstQuartile;for(var b in a){var d=new Image;d.src=a[b].uri}},t/4),setTimeout(function(){var a=c.vast.response.trackingEvents.midpoint;for(var b in a){var d=new Image;d.src=a[b].uri}},t/4*2),setTimeout(function(){var a=c.vast.response.trackingEvents.thirdQuartile;for(var b in a){var d=new Image;d.src=a[b].uri}},t/4*3),setTimeout(function(){var a=c.vast.response.trackingEvents.complete;for(var d in a){var e=new Image;e.src=a[d].uri}b()},t)},s=g(r,n),t=function(a){a||s.push({vastPlugin:this})},u=0;m>u;u++){var v=q(),w=j.replace("{{SITEURL}}",v),x=new d({adTagUrl:w});x.load(t)}},{"./player/player":20,"./plugin/VastPlugin":21,"./plugin/vpaid/VPAIDWrapper":36,"./sites":37,"async/queue":17}],20:[function(a,b,c){b.exports=function(a,b){var c,d,e,f,g;return c=document.createElement("iframe"),c.id="adloaderframe",c.style.width=0,c.style.height=0,c.style.border="none",c.style.display="none",d=document.createElement("div"),e=document.createElement("a"),f=document.createElement("video"),f.setAttribute("width",a),f.setAttribute("height",b),f.setAttribute("controls"," "),f.setAttribute("preload","auto"),g=document.createElement("source"),f.appendChild(g),{iframe:c,slot:d,link:e,video:f,source:g}}},{}],21:[function(a,b,c){function d(a){return this instanceof d?void(this.vast=new e(a)):new d(a)}var e=a("./vast/VastClient"),f=a("./vast/vastUtil");d.prototype.load=function(a){this.vast.load(a.bind(this))},d.prototype.isVPAID=function(a){return f.isVPAID(a)},b.exports=d},{"./vast/VastClient":29,"./vast/vastUtil":35}],22:[function(a,b,c){function d(a){return this instanceof d?void this.initialize(a):new d(a)}var e=a("./InLine"),f=a("./Wrapper");d.prototype.initialize=function(a){this.id=a.attr("id"),this.sequence=a.attr("sequence"),a.inLine&&(this.inLine=new e(a.inLine)),a.wrapper&&(this.wrapper=new f(a.wrapper))},b.exports=d},{"./InLine":25,"./Wrapper":33}],23:[function(a,b,c){function d(a){function b(a){var b=[];return f.isDefined(a)&&(a=f.isArray(a)?a:[a],a.forEach(function(a){b.push(new e(a))})),b}if(!(this instanceof d))return new d(a);this.creativeType=g.attr(a.staticResource,"creativeType"),this.staticResource=g.keyValue(a.staticResource);var c=null;g.keyValue(a.HTMLResource)?c=g.keyValue(a.HTMLResource):g.keyValue(a.hTMLResource)&&(c=g.keyValue(a.hTMLResource)),this.htmlResource=c;var h=null;g.keyValue(a.IFrameResource)?h=g.keyValue(a.IFrameResource):g.keyValue(a.iFrameresource)&&(h=g.keyValue(a.iFrameresource)),this.iframeResource=h,this.id=g.attr(a,"id"),this.width=g.attr(a,"width"),this.height=g.attr(a,"height"),this.expandedWidth=g.attr(a,"expandedWidth"),this.expandedHeight=g.attr(a,"expandedHeight"),this.scalable=g.attr(a,"scalable"),this.maintainAspectRatio=g.attr(a,"maintainAspectRatio"),this.minSuggestedDuration=g.attr(a,"minSuggestedDuration"),this.apiFramework=g.attr(a,"apiFramework"),this.companionClickThrough=g.keyValue(a.companionClickThrough),this.trackingEvents=b(a.trackingEvents&&a.trackingEvents.tracking)}var e=a("./TrackingEvent"),f=a("../../utils/utilityFunctions"),g=a("../../utils/xml");b.exports=d},{"../../utils/utilityFunctions":41,"../../utils/xml":42,"./TrackingEvent":28}],24:[function(a,b,c){function d(a){if(!(this instanceof d))return new d(a);if(this.id=a.attr("id"),this.sequence=a.attr("sequence"),this.adId=a.attr("adId"),this.apiFramework=a.attr("apiFramework"),a.linear&&(this.linear=new e(a.linear)),a.companionAds){var b=[],c=a.companionAds&&a.companionAds.companion;g.isDefined(c)&&(c=g.isArray(c)?c:[c],c.forEach(function(a){b.push(new f(a))})),this.companionAds=b}}var e=a("./Linear"),f=a("./Companion"),g=a("../../utils/utilityFunctions");d.prototype.isSupported=function(){return this.linear?this.linear.isSupported():!0},d.parseCreatives=function(a){var b,c=[];return g.isDefined(a)&&g.isDefined(a.creative)&&(b=g.isArray(a.creative)?a.creative:[a.creative],b.forEach(function(a){c.push(new d(a))})),c},b.exports=d},{"../../utils/utilityFunctions":41,"./Companion":23,"./Linear":26}],25:[function(a,b,c){function d(a){function b(a){return a?g.transformArray(g.isArray(a)?a:[a],function(a){return g.isNotEmptyString(a.keyValue)?{uri:a.keyValue,type:a.attr("type")}:void 0}):[]}return this instanceof d?(this.adTitle=h.keyValue(a.adTitle),this.adSystem=h.keyValue(a.adSystem),this.impressions=e.parseImpressions(a.impression),this.creatives=f.parseCreatives(a.creatives),this.description=h.keyValue(a.description),this.advertiser=h.keyValue(a.advertiser),this.surveys=b(a.survey),this.error=h.keyValue(a.error),this.pricing=h.keyValue(a.pricing),void(this.extensions=a.extensions)):new d(a)}var e=a("./vastUtil"),f=a("./Creative"),g=a("../../utils/utilityFunctions"),h=a("../../utils/xml");d.prototype.isSupported=function(){var a,b;if(0===this.creatives.length)return!1;for(a=0,b=this.creatives.length;b>a;a+=1)if(!this.creatives[a].isSupported())return!1;return!0},b.exports=d},{"../../utils/utilityFunctions":41,"../../utils/xml":42,"./Creative":24,"./vastUtil":35}],26:[function(a,b,c){function d(a){function b(a,b){var c=[];return h.isDefined(a)&&(a=h.isArray(a)?a:[a],a.forEach(function(a){c.push(new e(a,b))})),c}function c(a){var b=[];return h.isDefined(a)&&(a=h.isArray(a)?a:[a],a.forEach(function(a){b.push(new f(a))})),b}return this instanceof d?(this.duration=i.duration(j.keyValue(a.duration)),this.mediaFiles=c(a.mediaFiles&&a.mediaFiles.mediaFile),this.trackingEvents=b(a.trackingEvents&&a.trackingEvents.tracking,this.duration),this.skipoffset=i.offset(j.attr(a,"skipoffset"),this.duration),a.videoClicks&&(this.videoClicks=new g(a.videoClicks)),void(a.adParameters&&(this.adParameters=j.keyValue(a.adParameters),j.attr(a.adParameters,"xmlEncoded")&&(this.adParameters=j.decode(this.adParameters))))):new d(a)}var e=a("./TrackingEvent"),f=a("./MediaFile"),g=a("./VideoClicks"),h=a("../../utils/utilityFunctions"),i=a("./parsers"),j=a("../../utils/xml");d.prototype.isSupported=function(){var a,b;for(a=0,b=this.mediaFiles.length;b>a;a+=1)if(this.mediaFiles[a].isSupported())return!0;return!1},b.exports=d},{"../../utils/utilityFunctions":41,"../../utils/xml":42,"./MediaFile":27,"./TrackingEvent":28,"./VideoClicks":32,"./parsers":34}],27:[function(a,b,c){function d(a){if(!(this instanceof d))return new d(a);this.src=e.keyValue(a);for(var b=0;b<g.length;b++){var c=g[b];this[c]=a.attr(c)}}var e=a("../../utils/xml"),f=a("./vastUtil"),g=["delivery","type","width","height","codec","id","bitrate","minBitrate","maxBitrate","scalable","maintainAspectRatio","apiFramework"];d.prototype.isSupported=function(){return f.isVPAID(this)?!!f.findSupportedVPAIDTech(this.type):"video/x-flv"===this.type?f.isFlashSupported():!0},b.exports=d},{"../../utils/xml":42,"./vastUtil":35}],28:[function(a,b,c){function d(a,b){return this instanceof d?(this.name=a.attr("event"),this.uri=f.keyValue(a),void("progress"===this.name&&(this.offset=e.offset(a.attr("offset"),b)))):new d(a,b)}var e=a("./parsers"),f=a("../../utils/xml");b.exports=d},{"../../utils/xml":42,"./parsers":34}],29:[function(a,b,c){function d(a){if(!(this instanceof d))return new d(a);var b={};a=a||{},this.settings=i.extend({},a,b)}var e=a("./VastError"),f=a("./VastResponse"),g=a("./Ad"),h=a("../../utils/async"),i=a("../../utils/utilityFunctions"),j=a("../../utils/http").http,k=a("../../utils/xml");d.prototype._getVastResponse=function(a){function b(b,c,f){if(b){var g=i.isDefined(f)?"on VastClient.getVastResponse, HTTP error with status '"+f+"'":"on VastClient.getVastResponse, error getting the VAST XML";a(new e(g,301),null)}a(null,d,c)}function c(a,b){return a?i.isFunction(b)?void 0:new e("on VASTClient.getVASTResponse, missing callback function"):new e("on VASTClient.getVASTResponse, missing ad tag URL")}var d=this,f=this.settings.adTagUrl,g=c(f,a);if(g){if(i.isFunction(a))return a(g);throw g}j.get(f,b,{withCredentials:!0})},d.prototype._parseVastXML=function(a,b,c){function d(a){var b=k.attr(a,"version");return a.ad?b&&3!=b&&2!=b?new e('on VASTClient._parseVastXML.validateVASTTree, not supported VAST version "'+b+'"',102):null:new e("on VASTClient._parseVastXML.validateVASTTree, no Ad in VAST tree",303)}var f;try{f=k.toJXONTree(b),i.isArray(f.ad)?f.ads=f.ad:f.ad?f.ads=[f.ad]:f.ads=[],c(d(f),a,f)}catch(g){c(new e("on VASTClient._parseVastXML.buildVastWaterfall, error parsing xml",100),null)}},d.prototype._getVastAd=function(a,b,c){var d=b&&i.isArray(b.ads)?b.ads:[],f=new g(d.shift());i.isObject(f)&&i.isDefined(f.inLine)?c(null,a,f):c(new e("on VastClient._getVastAd: No ads found."))},d.prototype._buildVastResponse=function(a,b,c){var d=new f;d.addAd(b),a.response=d,c(null)},d.prototype.load=function(a){h.waterfall([this._getVastResponse.bind(this),this._parseVastXML,this._getVastAd,this._buildVastResponse],function(b){a(b)})},b.exports=d},{"../../utils/async":38,"../../utils/http":39,"../../utils/utilityFunctions":41,"../../utils/xml":42,"./Ad":22,"./VastError":30,"./VastResponse":31}],30:[function(a,b,c){function d(a,b){this.message="VAST Error: "+(a||""),b&&(this.code=b)}d.prototype=new Error,d.prototype.name="VAST Error",b.exports=d},{}],31:[function(a,b,c){function d(){return this instanceof d?(this._linearAdded=!1,this.ads=[],this.errorURLMacros=[],this.impressions=[],this.clickTrackings=[],this.customClicks=[],this.trackingEvents={},this.mediaFiles=[],this.clickThrough=void 0,this.adTitle="",this.duration=void 0,void(this.skipoffset=void 0)):new d}function e(a,b){b.forEach(function(b){a.push(b)})}var f=a("./Ad"),g=a("./VideoClicks"),h=a("./Linear"),i=a("./InLine"),j=a("./Wrapper"),k=a("../../utils/utilityFunctions"),l=a("../../utils/xml");window.InLine__A=i,d.prototype.addAd=function(a){var b,c;a instanceof f&&(b=a.inLine,c=a.wrapper,this.ads.push(a),b&&this._addInLine(b),c&&this._addWrapper(c))},d.prototype._addErrorTrackUrl=function(a){var b=a instanceof l.JXONTree?l.keyValue(a):a;b&&this.errorURLMacros.push(b)},d.prototype._addImpressions=function(a){k.isArray(a)&&e(this.impressions,a)},d.prototype._addClickThrough=function(a){k.isNotEmptyString(a)&&(this.clickThrough=a)},d.prototype._addClickTrackings=function(a){k.isArray(a)&&e(this.clickTrackings,a)},d.prototype._addCustomClicks=function(a){k.isArray(a)&&e(this.customClicks,a)},d.prototype._addTrackingEvents=function(a){var b=this.trackingEvents;a&&(a=k.isArray(a)?a:[a],a.forEach(function(a){b[a.name]||(b[a.name]=[]),b[a.name].push(a)}))},d.prototype._addTitle=function(a){k.isNotEmptyString(a)&&(this.adTitle=a)},d.prototype._addDuration=function(a){k.isNumber(a)&&(this.duration=a)},d.prototype._addVideoClicks=function(a){a instanceof g&&(this._addClickThrough(a.clickThrough),this._addClickTrackings(a.clickTrackings),this._addCustomClicks(a.customClicks))},d.prototype._addMediaFiles=function(a){k.isArray(a)&&e(this.mediaFiles,a)},d.prototype._addSkipoffset=function(a){a&&(this.skipoffset=a)},d.prototype._addAdParameters=function(a){a&&(this.adParameters=a)},d.prototype._addLinear=function(a){a instanceof h&&(this._addDuration(a.duration),this._addTrackingEvents(a.trackingEvents),this._addVideoClicks(a.videoClicks),this._addMediaFiles(a.mediaFiles),this._addSkipoffset(a.skipoffset),this._addAdParameters(a.adParameters),this._linearAdded=!0)},d.prototype._addInLine=function(a){var b=this;a instanceof i&&(this._addTitle(a.adTitle),this._addErrorTrackUrl(a.error),this._addImpressions(a.impressions),a.creatives.forEach(function(a){a.linear&&b._addLinear(a.linear)}))},d.prototype._addWrapper=function(a){var b=this;a instanceof j&&(this._addErrorTrackUrl(a.error),this._addImpressions(a.impressions),a.creatives.forEach(function(a){var c=a.linear;c&&(b._addVideoClicks(c.videoClicks),b.clickThrough=void 0,b._addTrackingEvents(c.trackingEvents))}))},d.prototype.hasLinear=function(){return this._linearAdded},b.exports=d},{"../../utils/utilityFunctions":41,"../../utils/xml":42,"./Ad":22,"./InLine":25,"./Linear":26,"./VideoClicks":32,"./Wrapper":33}],32:[function(a,b,c){function d(a){function b(a){var b=[];return a&&(a=e.isArray(a)?a:[a],a.forEach(function(a){b.push(f.keyValue(a))})),b}return this instanceof d?(this.clickThrough=f.keyValue(a.clickThrough),this.clickTrackings=b(a.clickTracking),void(this.customClicks=b(a.customClick))):new d(a)}var e=a("../../utils/utilityFunctions"),f=a("../../utils/xml");b.exports=d},{"../../utils/utilityFunctions":41,"../../utils/xml":42}],33:[function(a,b,c){function d(a){return this instanceof d?(this.adSystem=h.keyValue(a.adSystem),this.impressions=e.parseImpressions(a.impression),this.VASTAdTagURI=h.keyValue(a.vASTAdTagURI),this.creatives=f.parseCreatives(a.creatives),this.error=h.keyValue(a.error),this.extensions=a.extensions,this.followAdditionalWrappers=g.isDefined(h.attr(a,"followAdditionalWrappers"))?h.attr(a,"followAdditionalWrappers"):!0,this.allowMultipleAds=h.attr(a,"allowMultipleAds"),void(this.fallbackOnNoAd=h.attr(a,"fallbackOnNoAd"))):new d(a)}var e=a("./vastUtil"),f=a("./Creative"),g=a("../../utils/utilityFunctions"),h=a("../../utils/xml");b.exports=d},{"../../utils/utilityFunctions":41,"../../utils/xml":42,"./Creative":24,"./vastUtil":35}],34:[function(a,b,c){var d=a("../../utils/utilityFunctions"),e=/(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/,f={duration:function(a){function b(a){return 60*parseInt(a,10)*60*1e3}function c(a){return 60*parseInt(a,10)*1e3}function f(a){return 1e3*parseInt(a,10)}var g,h;return d.isString(a)&&(g=a.match(e),g&&(h=b(g[1])+c(g[2])+f(g[3])+parseInt(g[5]||0))),isNaN(h)?null:h},offset:function(a,b){function c(a){var b=/^\d+(\.\d+)?%$/g;return b.test(a)}function d(a,b){return b?e(b,parseFloat(a.replace("%",""))):null}function e(a,b){return a*b/100}return c(a)?d(a,b):f.duration(a)}};b.exports=f},{"../../utils/utilityFunctions":41}],35:[function(a,b,c){var d=a("../../utils/utilityFunctions"),e={track:function(a,b){var c=e.parseURLMacros(a,b),d=[];return c.forEach(function(a){var b=new Image;b.src=a,d.push(b)}),d},parseURLMacros:function(a,b){var c=[];return b=b||{},b.CACHEBUSTING||(b.CACHEBUSTING=Math.round(1e10*Math.random())),a.forEach(function(a){c.push(e._parseURLMacro(a,b))}),c},parseURLMacro:function(a,b){return b=b||{},b.CACHEBUSTING||(b.CACHEBUSTING=Math.round(1e10*Math.random())),e._parseURLMacro(a,b)},_parseURLMacro:function(a,b){return b=b||{},d.forEach(b,function(b,c){a=a.replace(new RegExp("\\["+c+"\\]","gm"),b)}),a},parseDuration:function(a){function b(a){return 60*parseInt(a,10)*60*1e3}function c(a){return 60*parseInt(a,10)*1e3}function e(a){return 1e3*parseInt(a,10)}var f,g,h=/(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;return d.isString(a)&&(f=a.match(h),f&&(g=b(f[1])+c(f[2])+e(f[3])+parseInt(f[5]||0))),isNaN(g)?null:g},parseImpressions:function(a){return a?(a=d.isArray(a)?a:[a],d.transformArray(a,function(a){return d.isNotEmptyString(a.keyValue)?a.keyValue:void 0})):[]},formatProgress:function(a){var b,c,e,f;return b=a/36e5,b=Math.floor(b),c=a/6e4%60,c=Math.floor(c),e=a/1e3%60,e=Math.floor(e),f=a%1e3,d.toFixedDigits(b,2)+":"+d.toFixedDigits(c,2)+":"+d.toFixedDigits(e,2)+"."+d.toFixedDigits(f,3)},parseOffset:function(a,b){function c(a){var b=/^\d+(\.\d+)?%$/g;return b.test(a)}function d(a,b){return b?f(b,parseFloat(a.replace("%",""))):null}function f(a,b){return a*b/100}return c(a)?d(a,b):e.parseDuration(a)},VPAID_techs:[],isVPAID:function(a){return!!a&&"VPAID"===a.apiFramework},findSupportedVPAIDTech:function(a){var b,c,d;for(b=0,c=this.VPAID_techs.length;c>b;b+=1)if(d=this.VPAID_techs[b],d.supports(a))return d;return null},isFlashSupported:function(){return VPAIDFLASHClient.isSupported()},runFlashSupportCheck:function(a){VPAIDFLASHClient.runFlashTest({data:a})}};b.exports=e},{"../../utils/utilityFunctions":41}],36:[function(a,b,c){function d(){return this instanceof d?void 0:new d}d.prototype.setCreative=function(a){return this._creative=a,this.checkVPAIDInterface(this._creative)?(this.setCallbacksForCreative(),!0):!1},d.prototype.setCallbacksForCreative=function(){var a={AdStarted:this.onStartAd,AdStopped:this.onStopAd,AdSkipped:this.onSkipAd,AdLoaded:this.onAdLoaded,AdLinearChange:this.onAdLinearChange,AdSizeChange:this.onAdSizeChange,AdExpandedChange:this.onAdExpandedChange,AdSkippableStateChange:this.onAdSkippableStateChange,AdDurationChange:this.onAdDurationChange,AdRemainingTimeChange:this.onAdRemainingTimeChange,AdVolumeChange:this.onAdVolumeChange,AdImpression:this.onAdImpression,AdClickThru:this.onAdClickThru,AdInteraction:this.onAdInteraction,AdVideoStart:this.onAdVideoStart,AdVideoFirstQuartile:this.onAdVideoFirstQuartile,AdVideoMidpoint:this.onAdVideoMidpoint,AdVideoThirdQuartile:this.onAdVideoThirdQuartile,AdVideoComplete:this.onAdVideoComplete,AdUserAcceptInvitation:this.onAdUserAcceptInvitation,AdUserMinimize:this.onAdUserMinimize,AdUserClose:this.onAdUserClose,AdPaused:this.onAdPaused,AdPlaying:this.onAdPlaying,AdError:this.onAdError,AdLog:this.onAdLog};for(var b in a)this._creative.subscribe(a[b],b,this)},d.prototype.handshakeVersion=function(a){return this._creative.handshakeVersion(a)},d.prototype.initAd=function(a,b,c,d,e,f,g){this.adLoadedCallback=g,this._creative.initAd(a,b,c,d,e,f)},d.prototype.onAdPaused=function(){},d.prototype.onAdPlaying=function(){},d.prototype.onAdError=function(a){},d.prototype.onAdLog=function(a){},d.prototype.onAdUserAcceptInvitation=function(){},d.prototype.onAdUserMinimize=function(){},d.prototype.onAdUserClose=function(){},d.prototype.onAdSkippableStateChange=function(){},d.prototype.onAdExpandedChange=function(){},d.prototype.getAdExpanded=function(){return this._creative.getAdExpanded()},d.prototype.getAdSkippableState=function(){return this._creative.getAdSkippableState()},d.prototype.onAdSizeChange=function(){},d.prototype.onAdDurationChange=function(){},d.prototype.onAdRemainingTimeChange=function(){},d.prototype.getAdRemainingTime=function(){return this._creative.getAdRemainingTime()},d.prototype.onAdImpression=function(){},d.prototype.onAdClickThru=function(a,b,c){},d.prototype.onAdInteraction=function(a){},d.prototype.onAdVideoStart=function(){},d.prototype.onAdVideoFirstQuartile=function(){},d.prototype.onAdVideoMidpoint=function(){},d.prototype.onAdVideoThirdQuartile=function(){},d.prototype.onAdVideoComplete=function(){},d.prototype.onAdLinearChange=function(){},d.prototype.getAdLinear=function(){return this._creative.getAdLinear()},d.prototype.startAd=function(a){this.stopAdCallback=a,this._creative.startAd()},d.prototype.onAdLoaded=function(){this.adLoadedCallback()},d.prototype.onStartAd=function(){},d.prototype.stopAd=function(){this._creative.stopAd()},d.prototype.onStopAd=function(){this.stopAdCallback()},d.prototype.onSkipAd=function(){},d.prototype.setAdVolume=function(a){this._creative.setAdVolume(a)},d.prototype.getAdVolume=function(){return this._creative.getAdVolume()},d.prototype.onAdVolumeChange=function(){},d.prototype.resizeAd=function(a,b,c){this._creative.resizeAd()},d.prototype.pauseAd=function(){this._creative.pauseAd()},d.prototype.resumeAd=function(){this._creative.resumeAd()},d.prototype.expandAd=function(){this._creative.expandAd()},d.prototype.collapseAd=function(){this._creative.collapseAd()},d.prototype.checkVPAIDInterface=function(a){return a.handshakeVersion&&"function"==typeof a.handshakeVersion&&a.initAd&&"function"==typeof a.initAd&&a.startAd&&"function"==typeof a.startAd&&a.stopAd&&"function"==typeof a.stopAd&&a.skipAd&&"function"==typeof a.skipAd&&a.resizeAd&&"function"==typeof a.resizeAd&&a.pauseAd&&"function"==typeof a.pauseAd&&a.resumeAd&&"function"==typeof a.resumeAd&&a.expandAd&&"function"==typeof a.expandAd&&a.collapseAd&&"function"==typeof a.collapseAd&&a.subscribe&&"function"==typeof a.subscribe&&a.unsubscribe&&"function"==typeof a.unsubscribe},b.exports=d},{}],37:[function(a,b,c){function d(){var a=parseInt(Math.random()*e.length);return e[a]}var e=["sain-et-naturel.com","digitalspy.co.uk","bridoz.com","amelioretasante.com","hometalk.com","tvhay.org","kphim.info","inquisitr.com","vietjack.com","parismatch.com","fame10.com","mentalfloss.com","divadepressao.com.br","biglike.de","animevsub.com","pissedconsumer.com","taz.de","marieclaire.fr","vothuat.vn","danviet.vn","cohet.tv","larazon.es","haynhucnhoi.vn","xoso.com.vn","libertaddigital.com","komikid.com","violet.vn","notrefamille.com","littlemonkeyscrochet.com","animetvn.com","congioilam.com","liberation.fr","pasionaguila.com"];b.exports=d},{}],38:[function(a,b,c){var d=a("./utilityFunctions"),e={};e.setImmediate=function(a){setTimeout(a,0)},e.iterator=function(a){var b=function c(b){var d=function e(){return a.length&&a[b].apply(null,arguments),e.next()};return d.next=function(){return b<a.length-1?c(b+1):null},d};return b(0)},e.waterfall=function(a,b){if(b=b||function(){},!d.isArray(a)){var c=new Error("First argument to waterfall must be an array of functions");return b(c)}if(!a.length)return b();var f=function g(a){return function(c){if(c)b.apply(null,arguments),b=function(){};else{var d=Array.prototype.slice.call(arguments,1),f=a.next();f?d.push(g(f)):d.push(b),e.setImmediate(function(){a.apply(null,d)})}}};f(e.iterator(a))()},e.when=function(a,b){if(!d.isFunction(b))throw new Error("async.when error: missing callback argument");var c=d.isFunction(a)?a:function(){return!!a};return function(){var a=d.arrayLikeObjToArray(arguments),e=a.pop();return c.apply(null,a)?b.apply(this,arguments):(a.unshift(null),e.apply(null,a))}},b.exports=e},{"./utilityFunctions":41}],39:[function(a,b,c){function d(a){this.message="HttpRequest Error: "+(a||"")}function e(a){if(!h.isFunction(a))throw new d("Missing XMLHttpRequest factory method");this.createXhr=a}function f(){var a=new XMLHttpRequest;return"withCredentials"in a||(a=new XDomainRequest),a}var g=a("./urlUtils"),h=a("./utilityFunctions");d.prototype=new Error,d.prototype.name="HttpRequest Error",e.prototype.run=function(a,b,c,e){function f(a,b,c){if(!h.isString(a)||h.isEmptyString(a))throw new d("Invalid url '"+a+"'");if(!h.isFunction(b))throw new d("Invalid handler '"+b+"' for the http request");if(h.isDefined(c)&&!h.isObject(c))throw new d("Invalid options map '"+c+"'")}function i(a,b){h.forEach(b,function(b,c){h.isDefined(b)&&a.setRequestHeader(c,b)})}function j(){c(-1,null,null,"")}f(b,c,e);var k,l,m=this.createXhr();e=e||{},k=h.isNumber(e.timeout)?e.timeout:0,m.open(a,g.urlParts(b).href,!0),e.headers&&i(m,e.headers),e.withCredentials&&(m.withCredentials=!0),m.onload=function(){var a,b,d;m.getAllResponseHeaders||(m.getAllResponseHeaders=function(){return null}),m.status||(m.status=200),h.isDefined(l)&&(clearTimeout(l),l=void 0),a=m.statusText||"",b="response"in m?m.response:m.responseText,d=1223===m.status?204:m.status,c(d,b,m.getAllResponseHeaders(),a)},m.onerror=j,m.onabort=j,m.send(),k>0&&(l=setTimeout(function(){m&&m.abort()},k))},e.prototype.get=function(a,b,c){function e(a,c,e,g){f(a)?b(null,c,a,e,g):b(new d(g),c,a,e,g)}function f(a){return a>=200&&300>a}this.run("GET",a,e,c)};var i=new e(f);b.exports={http:i,HttpRequest:e,HttpRequestError:d,createXhr:f}},{"./urlUtils":40,"./utilityFunctions":41}],40:[function(a,b,c){function d(a){var b=a;return i&&(h.setAttribute("href",b),b=h.href),h.setAttribute("href",b),{href:h.href,protocol:h.protocol?h.protocol.replace(/:$/,""):"",
host:h.host,search:h.search?h.search.replace(/^\?/,""):"",hash:h.hash?h.hash.replace(/^#/,""):"",hostname:h.hostname,port:g.isNotEmptyString(h.port)?h.port:80,pathname:"/"===h.pathname.charAt(0)?h.pathname:"/"+h.pathname}}function e(a,b){var c,d;return b=g.isFunction(b)?b:function(){return!0},a=a.trim().replace(/^\?/,""),c=a.split("&"),d={},g.forEach(c,function(a){var c,e,f;""!==a&&(c=a.split("="),e=c[0],f=c[1],b(e,f)&&(d[e]=f))}),d}function f(a){var b=[];return g.forEach(a,function(a,c){b.push(c+"="+a)}),b.join("&")}var g=a("./utilityFunctions"),h=document.createElement("a"),i=document.documentMode;b.exports={urlParts:d,queryStringToObj:e,objToQueryString:f}},{"./utilityFunctions":41}],41:[function(a,b,c){function d(){}function e(a){return null===a}function f(a){return void 0!==a}function g(a){return void 0===a}function h(a){return"object"===("undefined"==typeof a?"undefined":_typeof(a))}function i(a){return"function"==typeof a}function j(a){return"number"==typeof a}function k(a){return O.isObject(a)&&a.window===a}function l(a){return"[object Array]"===Object.prototype.toString.call(a)}function m(a){if(null===a||O.isWindow(a)||O.isFunction(a)||O.isUndefined(a))return!1;var b=a.length;return a.nodeType===K&&b?!0:O.isString(a)||O.isArray(a)||0===b||"number"==typeof b&&b>0&&b-1 in a}function n(a){return"string"==typeof a}function o(a){return O.isString(a)&&0===a.length}function p(a){return O.isString(a)&&0!==a.length}function q(a){return Array.prototype.slice.call(a)}function r(a,b,c){var d,e;if(a)if(i(a))for(d in a)"prototype"===d||"length"===d||"name"===d||a.hasOwnProperty&&!a.hasOwnProperty(d)||b.call(c,a[d],d,a);else if(l(a)){var f="object"!==("undefined"==typeof a?"undefined":_typeof(a));for(d=0,e=a.length;e>d;d++)(f||d in a)&&b.call(c,a[d],d,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,c,a);else for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d,a);return a}function s(a,b){return b=b||"_",a.replace(L,function(a,c){return(c?b:"")+a.toLowerCase()})}function t(a){return O.isString(a)?M.test(a.trim()):!1}function u(a){var b,c,d;for(c=1;c<arguments.length;c++){b=arguments[c];for(d in b)b.hasOwnProperty(d)&&(h(a[d])&&!e(a[d])&&h(b[d])?a[d]=u({},a[d],b[d]):a[d]=b[d])}return a}function v(a){return a.charAt(0).toUpperCase()+a.slice(1)}function w(a){return a.charAt(0).toLowerCase()+a.slice(1)}function x(a,b){var c=[];return a.forEach(function(a,d){var e=b(a,d);O.isDefined(e)&&c.push(e)}),c}function y(a,b){var c=a+"";if(b=O.isNumber(b)?b:0,a=O.isNumber(a)?a:parseInt(a,10),O.isNumber(a)&&!isNaN(a)){for(c=a+"";c.length<b;)c="0"+c;return c}return"NaN"}function z(a,b){var c=(new Date).getTime()-(b+1);return function(){var d=(new Date).getTime();d-c>=b&&(c=d,a.apply(this,arguments))}}function A(a,b){var c;return function(){c&&clearTimeout(c),c=setTimeout(function(){a.apply(this,arguments),c=void 0},b)}}function B(a,b,c){for(var d=b(a),e=0;e<d.length;e++){if(c(d[e]))return d[e];var f=B(d[e],b,c);if(f)return f}}function C(a){return function(){return a}}function D(a){return O.isNumber(a)&&(a+=""),O.isString(a)?N.test(a.trim()):!1}function E(){var a=O.getInternetExplorerVersion(navigator);return-1===a?!1:10>a}function F(a){var b=-1;if("Microsoft Internet Explorer"==a.appName){var c=a.userAgent,d=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"),e=d.exec(c);null!==e&&(b=parseFloat(e[1]))}return b}function G(){return/iP(hone|ad)/.test(O._UA)}function H(){return/iP(hone|ad|od)|Android|Windows Phone/.test(O._UA)}function I(){return/iP(hone|od)/.test(O._UA)}function J(){return/Android/.test(O._UA)}var K=1,L=/[A-Z]/g,M=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i,N=/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/,O={_UA:navigator.userAgent,noop:d,isNull:e,isDefined:f,isUndefined:g,isObject:h,isFunction:i,isNumber:j,isWindow:k,isArray:l,isArrayLike:m,isString:n,isEmptyString:o,isNotEmptyString:p,arrayLikeObjToArray:q,forEach:r,snake_case:s,isValidEmail:t,extend:u,capitalize:v,decapitalize:w,transformArray:x,toFixedDigits:y,throttle:z,debounce:A,treeSearch:B,echoFn:C,isISO8601:D,isOldIE:E,getInternetExplorerVersion:F,isIDevice:G,isMobile:H,isIPhone:I,isAndroid:J};b.exports=O},{}],42:[function(a,b,c){var d=a("./utilityFunctions"),e={};e.strToXMLDoc=function(a){function b(a){var b,e=new DOMParser;try{if(b=e.parseFromString(a,"application/xml"),c(b)||d.isEmptyString(a))throw new Error}catch(f){throw new Error("xml.strToXMLDOC: Error parsing the string: '"+a+"'")}return b}function c(a){try{var b=new DOMParser,c=b.parseFromString("INVALID","text/xml"),d=c.getElementsByTagName("parsererror")[0].namespaceURI;return"http://www.w3.org/1999/xhtml"===d?a.getElementsByTagName("parsererror").length>0:a.getElementsByTagNameNS(d,"parsererror").length>0}catch(e){}}if("undefined"==typeof window.DOMParser){var e=new ActiveXObject("Microsoft.XMLDOM");return e.async=!1,e.loadXML(a),e}return b(a)},e.parseText=function(a){return/^\s*$/.test(a)?null:/^(?:true|false)$/i.test(a)?"true"===a.toLowerCase():isFinite(a)?parseFloat(a):d.isISO8601(a)?new Date(a):a.trim()},e.JXONTree=function(a){var b=e.parseText;if(a.documentElement)return new e.JXONTree(a.documentElement);if(a.hasChildNodes()){for(var c,f,g,h="",i=0;i<a.childNodes.length;i++)c=a.childNodes.item(i),3===(c.nodeType-1|1)?h+=3===c.nodeType?c.nodeValue.trim():c.nodeValue:1!==c.nodeType||c.prefix||(f=d.decapitalize(c.nodeName),g=new e.JXONTree(c),this.hasOwnProperty(f)?(this[f].constructor!==Array&&(this[f]=[this[f]]),this[f].push(g)):this[f]=g);h&&(this.keyValue=b(h))}var j="undefined"==typeof a.hasAttributes?a.attributes.length>0:a.hasAttributes();if(j)for(var k,l=0;l<a.attributes.length;l++)k=a.attributes.item(l),this["@"+d.decapitalize(k.name)]=b(k.value.trim())},e.JXONTree.prototype.attr=function(a){return this["@"+d.decapitalize(a)]},e.toJXONTree=function(a){var b=e.strToXMLDoc(a);return new e.JXONTree(b)},e.keyValue=function(a){return a?a.keyValue:void 0},e.attr=function(a,b){return a?a["@"+d.decapitalize(b)]:void 0},e.encode=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")},e.decode=function(a){return a.replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&")},b.exports=e},{"./utilityFunctions":41}]},{},[19]);
