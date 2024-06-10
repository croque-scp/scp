/*!
 * 3211.js version 2.0.3, generated Mon Jun 10 2024 09:37:51 GMT+0000 (Coordinated Universal Time) 
 * This file was generated for SCP-3211 and its translations in the international SCP community. 
 * SCP-3211-EN: https://scp-wiki.wikidot.com/scp-3211 
 * Source: https://github.com/rossjrw/scp/tree/main/source/scp-3211
 */!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=2)}([function(e,n){e.exports=Cookies},function(e,n,t){!function(e){"use strict";function n(){}function t(e,n,t,o,r){for(var i,l=[];n;)l.push(n),i=n.previousComponent,delete n.previousComponent,n=i;l.reverse();for(var a=0,s=l.length,u=0,d=0;a<s;a++){var c=l[a];if(c.removed){if(c.value=e.join(o.slice(d,d+c.count)),d+=c.count,a&&l[a-1].added){var f=l[a-1];l[a-1]=l[a],l[a]=f}}else{if(!c.added&&r){var p=t.slice(u,u+c.count);p=p.map((function(e,n){var t=o[d+n];return t.length>e.length?t:e})),c.value=e.join(p)}else c.value=e.join(t.slice(u,u+c.count));u+=c.count,c.added||(d+=c.count)}}var h=l[s-1];return s>1&&"string"==typeof h.value&&(h.added||h.removed)&&e.equals("",h.value)&&(l[s-2].value+=h.value,l.pop()),l}n.prototype={diff:function(e,n){var o,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.callback;"function"==typeof r&&(i=r,r={}),this.options=r;var l=this;function a(e){return i?(setTimeout((function(){i(void 0,e)}),0),!0):e}e=this.castInput(e),n=this.castInput(n),e=this.removeEmpty(this.tokenize(e));var s=(n=this.removeEmpty(this.tokenize(n))).length,u=e.length,d=1,c=s+u;r.maxEditLength&&(c=Math.min(c,r.maxEditLength));var f=null!==(o=r.timeout)&&void 0!==o?o:1/0,p=Date.now()+f,h=[{oldPos:-1,lastComponent:void 0}],m=this.extractCommon(h[0],n,e,0);if(h[0].oldPos+1>=u&&m+1>=s)return a([{value:this.join(n),count:n.length}]);var v=-1/0,g=1/0;function y(){for(var o=Math.max(v,-d);o<=Math.min(g,d);o+=2){var r=void 0,i=h[o-1],c=h[o+1];i&&(h[o-1]=void 0);var f=!1;if(c){var p=c.oldPos-o;f=c&&0<=p&&p<s}var y=i&&i.oldPos+1<u;if(f||y){if(r=!y||f&&i.oldPos+1<c.oldPos?l.addToPath(c,!0,void 0,0):l.addToPath(i,void 0,!0,1),m=l.extractCommon(r,n,e,o),r.oldPos+1>=u&&m+1>=s)return a(t(l,r.lastComponent,n,e,l.useLongestToken));h[o]=r,r.oldPos+1>=u&&(g=Math.min(g,o-1)),m+1>=s&&(v=Math.max(v,o+1))}else h[o]=void 0}d++}if(i)!function e(){setTimeout((function(){if(d>c||Date.now()>p)return i();y()||e()}),0)}();else for(;d<=c&&Date.now()<=p;){var w=y();if(w)return w}},addToPath:function(e,n,t,o){var r=e.lastComponent;return r&&r.added===n&&r.removed===t?{oldPos:e.oldPos+o,lastComponent:{count:r.count+1,added:n,removed:t,previousComponent:r.previousComponent}}:{oldPos:e.oldPos+o,lastComponent:{count:1,added:n,removed:t,previousComponent:r}}},extractCommon:function(e,n,t,o){for(var r=n.length,i=t.length,l=e.oldPos,a=l-o,s=0;a+1<r&&l+1<i&&this.equals(n[a+1],t[l+1]);)a++,l++,s++;return s&&(e.lastComponent={count:s,previousComponent:e.lastComponent}),e.oldPos=l,a},equals:function(e,n){return this.options.comparator?this.options.comparator(e,n):e===n||this.options.ignoreCase&&e.toLowerCase()===n.toLowerCase()},removeEmpty:function(e){for(var n=[],t=0;t<e.length;t++)e[t]&&n.push(e[t]);return n},castInput:function(e){return e},tokenize:function(e){return e.split("")},join:function(e){return e.join("")}};var o=new n;function r(e,n,t){return o.diff(e,n,t)}function i(e,n){if("function"==typeof e)n.callback=e;else if(e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}var l=/^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,a=/\S/,s=new n;function u(e,n,t){return t=i(t,{ignoreWhitespace:!0}),s.diff(e,n,t)}function d(e,n,t){return s.diff(e,n,t)}s.equals=function(e,n){return this.options.ignoreCase&&(e=e.toLowerCase(),n=n.toLowerCase()),e===n||this.options.ignoreWhitespace&&!a.test(e)&&!a.test(n)},s.tokenize=function(e){for(var n=e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/),t=0;t<n.length-1;t++)!n[t+1]&&n[t+2]&&l.test(n[t])&&l.test(n[t+2])&&(n[t]+=n[t+2],n.splice(t+1,2),t--);return n};var c=new n;function f(e,n,t){return c.diff(e,n,t)}function p(e,n,t){var o=i(t,{ignoreWhitespace:!0});return c.diff(e,n,o)}c.tokenize=function(e){this.options.stripTrailingCr&&(e=e.replace(/\r\n/g,"\n"));var n=[],t=e.split(/(\n|\r\n)/);t[t.length-1]||t.pop();for(var o=0;o<t.length;o++){var r=t[o];o%2&&!this.options.newlineIsToken?n[n.length-1]+=r:(this.options.ignoreWhitespace&&(r=r.trim()),n.push(r))}return n};var h=new n;function m(e,n,t){return h.diff(e,n,t)}h.tokenize=function(e){return e.split(/(\S.+?[.!?])(?=\s+|$)/)};var v=new n;function g(e,n,t){return v.diff(e,n,t)}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){w(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e){return x(e)||E(e)||k(e)||P()}function x(e){if(Array.isArray(e))return C(e)}function E(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function k(e,n){if(e){if("string"==typeof e)return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,n):void 0}}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function P(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}v.tokenize=function(e){return e.split(/([{}:;,]|\s+)/)};var j=Object.prototype.toString,F=new n;function N(e,n,t){return F.diff(e,n,t)}function O(e,n,t,o,r){var i,l;for(n=n||[],t=t||[],o&&(e=o(r,e)),i=0;i<n.length;i+=1)if(n[i]===e)return t[i];if("[object Array]"===j.call(e)){for(n.push(e),l=new Array(e.length),t.push(l),i=0;i<e.length;i+=1)l[i]=O(e[i],n,t,o,r);return n.pop(),t.pop(),l}if(e&&e.toJSON&&(e=e.toJSON()),"object"===y(e)&&null!==e){n.push(e),l={},t.push(l);var a,s=[];for(a in e)e.hasOwnProperty(a)&&s.push(a);for(s.sort(),i=0;i<s.length;i+=1)l[a=s[i]]=O(e[a],n,t,o,a);n.pop(),t.pop()}else l=e;return l}F.useLongestToken=!0,F.tokenize=c.tokenize,F.castInput=function(e){var n=this.options,t=n.undefinedReplacement,o=n.stringifyReplacer,r=void 0===o?function(e,n){return void 0===n?t:n}:o;return"string"==typeof e?e:JSON.stringify(O(e,null,null,r),r,"  ")},F.equals=function(e,t){return n.prototype.equals.call(F,e.replace(/,([\r\n])/g,"$1"),t.replace(/,([\r\n])/g,"$1"))};var I=new n;function $(e,n,t){return I.diff(e,n,t)}function A(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.split(/\r\n|[\n\v\f\r\x85]/),o=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],r=[],i=0;function l(){var e={};for(r.push(e);i<t.length;){var o=t[i];if(/^(\-\-\-|\+\+\+|@@)\s/.test(o))break;var l=/^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(o);l&&(e.index=l[1]),i++}for(a(e),a(e),e.hunks=[];i<t.length;){var u=t[i];if(/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(u))break;if(/^@@/.test(u))e.hunks.push(s());else{if(u&&n.strict)throw new Error("Unknown line "+(i+1)+" "+JSON.stringify(u));i++}}}function a(e){var n=/^(---|\+\+\+)\s+(.*)$/.exec(t[i]);if(n){var o="---"===n[1]?"old":"new",r=n[2].split("\t",2),l=r[0].replace(/\\\\/g,"\\");/^".*"$/.test(l)&&(l=l.substr(1,l.length-2)),e[o+"FileName"]=l,e[o+"Header"]=(r[1]||"").trim(),i++}}function s(){var e=i,r=t[i++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/),l={oldStart:+r[1],oldLines:void 0===r[2]?1:+r[2],newStart:+r[3],newLines:void 0===r[4]?1:+r[4],lines:[],linedelimiters:[]};0===l.oldLines&&(l.oldStart+=1),0===l.newLines&&(l.newStart+=1);for(var a=0,s=0;i<t.length&&!(0===t[i].indexOf("--- ")&&i+2<t.length&&0===t[i+1].indexOf("+++ ")&&0===t[i+2].indexOf("@@"));i++){var u=0==t[i].length&&i!=t.length-1?" ":t[i][0];if("+"!==u&&"-"!==u&&" "!==u&&"\\"!==u)break;l.lines.push(t[i]),l.linedelimiters.push(o[i]||"\n"),"+"===u?a++:"-"===u?s++:" "===u&&(a++,s++)}if(a||1!==l.newLines||(l.newLines=0),s||1!==l.oldLines||(l.oldLines=0),n.strict){if(a!==l.newLines)throw new Error("Added line count did not match for hunk at line "+(e+1));if(s!==l.oldLines)throw new Error("Removed line count did not match for hunk at line "+(e+1))}return l}for(;i<t.length;)l();return r}function H(e,n,t){var o=!0,r=!1,i=!1,l=1;return function a(){if(o&&!i){if(r?l++:o=!1,e+l<=t)return l;i=!0}if(!r)return i||(o=!0),n<=e-l?-l++:(r=!0,a())}}function M(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n&&(n=A(n)),Array.isArray(n)){if(n.length>1)throw new Error("applyPatch only works with a single input.");n=n[0]}var o,r,i=e.split(/\r\n|[\n\v\f\r\x85]/),l=e.match(/\r\n|[\n\v\f\r\x85]/g)||[],a=n.hunks,s=t.compareLine||function(e,n,t,o){return n===o},u=0,d=t.fuzzFactor||0,c=0,f=0;function p(e,n){for(var t=0;t<e.lines.length;t++){var o=e.lines[t],r=o.length>0?o[0]:" ",l=o.length>0?o.substr(1):o;if(" "===r||"-"===r){if(!s(n+1,i[n],r,l)&&++u>d)return!1;n++}}return!0}for(var h=0;h<a.length;h++){for(var m=a[h],v=i.length-m.oldLines,g=0,y=f+m.oldStart-1,w=H(y,c,v);void 0!==g;g=w())if(p(m,y+g)){m.offset=f+=g;break}if(void 0===g)return!1;c=m.offset+m.oldStart+m.oldLines}for(var b=0,L=0;L<a.length;L++){var S=a[L],x=S.oldStart+S.offset+b-1;b+=S.newLines-S.oldLines;for(var E=0;E<S.lines.length;E++){var k=S.lines[E],C=k.length>0?k[0]:" ",P=k.length>0?k.substr(1):k,j=S.linedelimiters&&S.linedelimiters[E]||"\n";if(" "===C)x++;else if("-"===C)i.splice(x,1),l.splice(x,1);else if("+"===C)i.splice(x,0,P),l.splice(x,0,j),x++;else if("\\"===C){var F=S.lines[E-1]?S.lines[E-1][0]:null;"+"===F?o=!0:"-"===F&&(r=!0)}}}if(o)for(;!i[i.length-1];)i.pop(),l.pop();else r&&(i.push(""),l.push("\n"));for(var N=0;N<i.length-1;N++)i[N]=i[N]+l[N];return i.join("")}function T(e,n){"string"==typeof e&&(e=A(e));var t=0;function o(){var r=e[t++];if(!r)return n.complete();n.loadFile(r,(function(e,t){if(e)return n.complete(e);var i=M(t,r,n);n.patched(r,i,(function(e){if(e)return n.complete(e);o()}))}))}o()}function B(e,n,t,o,r,i,l){l||(l={}),void 0===l.context&&(l.context=4);var a=f(t,o,l);if(a){a.push({value:"",lines:[]});for(var s=[],u=0,d=0,c=[],p=1,h=1,m=function(e){var n=a[e],r=n.lines||n.value.replace(/\n$/,"").split("\n");if(n.lines=r,n.added||n.removed){var i;if(!u){var f=a[e-1];u=p,d=h,f&&(c=l.context>0?g(f.lines.slice(-l.context)):[],u-=c.length,d-=c.length)}(i=c).push.apply(i,S(r.map((function(e){return(n.added?"+":"-")+e})))),n.added?h+=r.length:p+=r.length}else{if(u)if(r.length<=2*l.context&&e<a.length-2){var m;(m=c).push.apply(m,S(g(r)))}else{var v,y=Math.min(r.length,l.context);(v=c).push.apply(v,S(g(r.slice(0,y))));var w={oldStart:u,oldLines:p-u+y,newStart:d,newLines:h-d+y,lines:c};if(e>=a.length-2&&r.length<=l.context){var b=/\n$/.test(t),L=/\n$/.test(o),x=0==r.length&&c.length>w.oldLines;!b&&x&&t.length>0&&c.splice(w.oldLines,0,"\\ No newline at end of file"),(b||x)&&L||c.push("\\ No newline at end of file")}s.push(w),u=0,d=0,c=[]}p+=r.length,h+=r.length}},v=0;v<a.length;v++)m(v);return{oldFileName:e,newFileName:n,oldHeader:r,newHeader:i,hunks:s}}function g(e){return e.map((function(e){return" "+e}))}}function z(e){if(Array.isArray(e))return e.map(z).join("\n");var n=[];e.oldFileName==e.newFileName&&n.push("Index: "+e.oldFileName),n.push("==================================================================="),n.push("--- "+e.oldFileName+(void 0===e.oldHeader?"":"\t"+e.oldHeader)),n.push("+++ "+e.newFileName+(void 0===e.newHeader?"":"\t"+e.newHeader));for(var t=0;t<e.hunks.length;t++){var o=e.hunks[t];0===o.oldLines&&(o.oldStart-=1),0===o.newLines&&(o.newStart-=1),n.push("@@ -"+o.oldStart+","+o.oldLines+" +"+o.newStart+","+o.newLines+" @@"),n.push.apply(n,o.lines)}return n.join("\n")+"\n"}function D(e,n,t,o,r,i,l){return z(B(e,n,t,o,r,i,l))}function q(e,n,t,o,r,i){return D(e,e,n,t,o,r,i)}function W(e,n){return e.length===n.length&&_(e,n)}function _(e,n){if(n.length>e.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==e[t])return!1;return!0}function J(e){var n=ae(e.lines),t=n.oldLines,o=n.newLines;void 0!==t?e.oldLines=t:delete e.oldLines,void 0!==o?e.newLines=o:delete e.newLines}function R(e,n,t){e=U(e,t),n=U(n,t);var o={};(e.index||n.index)&&(o.index=e.index||n.index),(e.newFileName||n.newFileName)&&(V(e)?V(n)?(o.oldFileName=X(o,e.oldFileName,n.oldFileName),o.newFileName=X(o,e.newFileName,n.newFileName),o.oldHeader=X(o,e.oldHeader,n.oldHeader),o.newHeader=X(o,e.newHeader,n.newHeader)):(o.oldFileName=e.oldFileName,o.newFileName=e.newFileName,o.oldHeader=e.oldHeader,o.newHeader=e.newHeader):(o.oldFileName=n.oldFileName||e.oldFileName,o.newFileName=n.newFileName||e.newFileName,o.oldHeader=n.oldHeader||e.oldHeader,o.newHeader=n.newHeader||e.newHeader)),o.hunks=[];for(var r=0,i=0,l=0,a=0;r<e.hunks.length||i<n.hunks.length;){var s=e.hunks[r]||{oldStart:1/0},u=n.hunks[i]||{oldStart:1/0};if(Y(s,u))o.hunks.push(Z(s,l)),r++,a+=s.newLines-s.oldLines;else if(Y(u,s))o.hunks.push(Z(u,a)),i++,l+=u.newLines-u.oldLines;else{var d={oldStart:Math.min(s.oldStart,u.oldStart),oldLines:0,newStart:Math.min(s.newStart+l,u.oldStart+a),newLines:0,lines:[]};G(d,s.oldStart,s.lines,u.oldStart,u.lines),i++,r++,o.hunks.push(d)}}return o}function U(e,n){if("string"==typeof e){if(/^@@/m.test(e)||/^Index:/m.test(e))return A(e)[0];if(!n)throw new Error("Must provide a base reference or pass in a patch");return B(void 0,void 0,n,e)}return e}function V(e){return e.newFileName&&e.newFileName!==e.oldFileName}function X(e,n,t){return n===t?n:(e.conflict=!0,{mine:n,theirs:t})}function Y(e,n){return e.oldStart<n.oldStart&&e.oldStart+e.oldLines<n.oldStart}function Z(e,n){return{oldStart:e.oldStart,oldLines:e.oldLines,newStart:e.newStart+n,newLines:e.newLines,lines:e.lines}}function G(e,n,t,o,r){var i={offset:n,lines:t,index:0},l={offset:o,lines:r,index:0};for(ne(e,i,l),ne(e,l,i);i.index<i.lines.length&&l.index<l.lines.length;){var a=i.lines[i.index],s=l.lines[l.index];if("-"!==a[0]&&"+"!==a[0]||"-"!==s[0]&&"+"!==s[0])if("+"===a[0]&&" "===s[0]){var u;(u=e.lines).push.apply(u,S(oe(i)))}else if("+"===s[0]&&" "===a[0]){var d;(d=e.lines).push.apply(d,S(oe(l)))}else"-"===a[0]&&" "===s[0]?Q(e,i,l):"-"===s[0]&&" "===a[0]?Q(e,l,i,!0):a===s?(e.lines.push(a),i.index++,l.index++):ee(e,oe(i),oe(l));else K(e,i,l)}te(e,i),te(e,l),J(e)}function K(e,n,t){var o=oe(n),r=oe(t);if(ie(o)&&ie(r)){var i,l;if(_(o,r)&&le(t,o,o.length-r.length))return void(i=e.lines).push.apply(i,S(o));if(_(r,o)&&le(n,r,r.length-o.length))return void(l=e.lines).push.apply(l,S(r))}else if(W(o,r)){var a;return void(a=e.lines).push.apply(a,S(o))}ee(e,o,r)}function Q(e,n,t,o){var r,i=oe(n),l=re(t,i);l.merged?(r=e.lines).push.apply(r,S(l.merged)):ee(e,o?l:i,o?i:l)}function ee(e,n,t){e.conflict=!0,e.lines.push({conflict:!0,mine:n,theirs:t})}function ne(e,n,t){for(;n.offset<t.offset&&n.index<n.lines.length;){var o=n.lines[n.index++];e.lines.push(o),n.offset++}}function te(e,n){for(;n.index<n.lines.length;){var t=n.lines[n.index++];e.lines.push(t)}}function oe(e){for(var n=[],t=e.lines[e.index][0];e.index<e.lines.length;){var o=e.lines[e.index];if("-"===t&&"+"===o[0]&&(t="+"),t!==o[0])break;n.push(o),e.index++}return n}function re(e,n){for(var t=[],o=[],r=0,i=!1,l=!1;r<n.length&&e.index<e.lines.length;){var a=e.lines[e.index],s=n[r];if("+"===s[0])break;if(i=i||" "!==a[0],o.push(s),r++,"+"===a[0])for(l=!0;"+"===a[0];)t.push(a),a=e.lines[++e.index];s.substr(1)===a.substr(1)?(t.push(a),e.index++):l=!0}if("+"===(n[r]||"")[0]&&i&&(l=!0),l)return t;for(;r<n.length;)o.push(n[r++]);return{merged:o,changes:t}}function ie(e){return e.reduce((function(e,n){return e&&"-"===n[0]}),!0)}function le(e,n,t){for(var o=0;o<t;o++){var r=n[n.length-t+o].substr(1);if(e.lines[e.index+o]!==" "+r)return!1}return e.index+=t,!0}function ae(e){var n=0,t=0;return e.forEach((function(e){if("string"!=typeof e){var o=ae(e.mine),r=ae(e.theirs);void 0!==n&&(o.oldLines===r.oldLines?n+=o.oldLines:n=void 0),void 0!==t&&(o.newLines===r.newLines?t+=o.newLines:t=void 0)}else void 0===t||"+"!==e[0]&&" "!==e[0]||t++,void 0===n||"-"!==e[0]&&" "!==e[0]||n++})),{oldLines:n,newLines:t}}function se(e){return Array.isArray(e)?e.map(se).reverse():L(L({},e),{},{oldFileName:e.newFileName,oldHeader:e.newHeader,newFileName:e.oldFileName,newHeader:e.oldHeader,hunks:e.hunks.map((function(e){return{oldLines:e.newLines,oldStart:e.newStart,newLines:e.oldLines,newStart:e.oldStart,linedelimiters:e.linedelimiters,lines:e.lines.map((function(e){return e.startsWith("-")?"+".concat(e.slice(1)):e.startsWith("+")?"-".concat(e.slice(1)):e}))}}))})}function ue(e){for(var n,t,o=[],r=0;r<e.length;r++)t=(n=e[r]).added?1:n.removed?-1:0,o.push([t,n.value]);return o}function de(e){for(var n=[],t=0;t<e.length;t++){var o=e[t];o.added?n.push("<ins>"):o.removed&&n.push("<del>"),n.push(ce(o.value)),o.added?n.push("</ins>"):o.removed&&n.push("</del>")}return n.join("")}function ce(e){var n=e;return n=(n=(n=(n=n.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")}I.tokenize=function(e){return e.slice()},I.join=I.removeEmpty=function(e){return e},e.Diff=n,e.applyPatch=M,e.applyPatches=T,e.canonicalize=O,e.convertChangesToDMP=ue,e.convertChangesToXML=de,e.createPatch=q,e.createTwoFilesPatch=D,e.diffArrays=$,e.diffChars=r,e.diffCss=g,e.diffJson=N,e.diffLines=f,e.diffSentences=m,e.diffTrimmedLines=p,e.diffWords=u,e.diffWordsWithSpace=d,e.formatPatch=z,e.merge=R,e.parsePatch=A,e.reversePatch=se,e.structuredPatch=B,Object.defineProperty(e,"__esModule",{value:!0})}(n)},function(e,n,t){"use strict";t.r(n);var o=t(1),r=t(0),i=t.n(r);const l=["warning","loading","anomaly"];let a,s,u=!1;const d=[],c=(()=>{try{return localStorage.getItem("test"),"localStorage"}catch(e){return"cookies"}})();function f(e,n){console.log(`[${c}] Saving ${n} to ${e}`),{cookies:()=>i.a.set(e,n,{expires:356}),localStorage:()=>localStorage.setItem(e,n)}[c](),document.getElementById("anomalyCookie").textContent=a,document.getElementById("otherCookies").textContent=`seen ${p("seen")}, timer ${p("timerExpiresAt")}`}function p(e){return{cookies:()=>i.a.get(e),localStorage:()=>localStorage.getItem(e)}[c]()}function h(e){console.log(`Forgot ${e} (was ${p(e)})`),{cookies:()=>i.a.remove(e),localStorage:()=>localStorage.removeItem(e)}[c]()}function m(e,n){const t=document.getElementById("footnotes").getElementsByClassName("footnote")[n];t.style.left="0",t.style.top=`${e.pageY+10}px`,"mouseover"===e.type?t.style.display="block":t.style.display="none"}function v(e){if(console.log(`Now in section ${e}`),"anomaly"===e){var n;const e=document.getElementById("anomaly"),r=document.createElement("div");r.innerHTML=(t=Object(o.applyPatch)(reference.join("\n"),anomalies[a]),lang.encrypt.forEach((e=>{let[n,o,r]=e;r*=-1,t=function(e,n,t){const o=e.charCodeAt(0),r=n.charCodeAt(0),i=new RegExp(`[${e}-${n}]`,"g");return e=>e.replace(i,(e=>{const n=e.charCodeAt(0);return String.fromCharCode(((n+t-o)%(i=r+1-o)+i)%i+o);var i}))}(n,o,r)(t)})),t).replace(/--(?!\S*\/)/g,"—"),r.querySelectorAll("table").forEach((e=>{e.classList.add("wiki-content-table")}));const i=r.querySelector("img[data-src][data-caption]");if(null!=i){const e=i.dataset.src,n=i.dataset.caption,t=document.createElement("div");t.classList.add("scp-image-block","block-right"),t.innerHTML=`\n        <img src="${e}">\n        <div class="scp-image-caption">\n          <p>${n}</p>\n        </div>\n      `,i.replaceWith(t)}const l=r.querySelector("footer"),s=l.querySelectorAll("ol li");if(null==document.getElementById("footnotes")){const e=document.createElement("div");e.id="footnotes",s.forEach(((n,t)=>{const o=document.createElement("div");o.classList.add("footnote");const r=l.dataset.template?l.dataset.template.replace("{N}",`${t+1}`):`Footnote ${t+1}.`;o.innerHTML=`\n          <div class="f-heading">${r}</div>\n          <div class="f-content">${n.innerHTML}</div>\n        `,e.appendChild(o)})),document.body.appendChild(e)}for(r.querySelectorAll("note").forEach((e=>{const n=parseInt(e.textContent),t=document.createElement("sup");t.classList.add("footnoteref"),t.innerHTML=`<a>${n}</a>`,t.addEventListener("mouseover",(e=>m(e,n-1))),t.addEventListener("mouseout",(e=>m(e,n-1))),e.replaceWith(t)})),Array.from(r.getElementsByTagName("details")).forEach(((e,n)=>{d[n]?e.open=!0:d[n]=!1,e.addEventListener("toggle",(()=>{d[n]=e.open}))}));e.lastChild;)e.removeChild(e.lastChild);e.appendChild(r),null===(n=document.getElementById("read"))||void 0===n||n.addEventListener("click",(()=>{u=!0}))}var t,r;if(l.map(g),r=e,document.getElementById(r).classList.remove("hidden"),"anomaly"===e&&"base"===a&&f("seen","true"),"anomaly"===e&&"base"!==a){let e;p("timerExpiresAt")?(console.log("Resuming previous timer."),e=Math.floor((new Date(p("timerExpiresAt")).getTime()-(new Date).getTime())/1e3)):(f("timerExpiresAt",new Date(Date.now()+36e4).toString()),e=360);const n=document.getElementById("timer");s=window.setInterval((function(){if(e<=0)clearInterval(s),a="base",v("anomaly"),h("timerExpiresAt");else{u&&e>5&&(e=6);const t=e/360;console.log(`%c${e}s`,`color: rgba(${255-Math.ceil(255*t)},${Math.ceil(255*t)},0,1); font-size:15px;`),--e;const o=Math.floor(e/60),r=e-60*o;n.textContent=`${o.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`}}),1e3)}}function g(e){document.getElementById(e).classList.add("hidden")}window.addEventListener("load",(()=>{var e,n,t,o,r;if(p("anomaly"))a=p("anomaly"),console.log(`Previous anomaly ${a} detected`),a in anomalies||(a="cube");else{console.log("Initialising anomaly");do{a=Object.keys(anomalies)[Math.floor(Math.random()*Object.keys(anomalies).length)]}while("base"===a)}console.log(`Viewing ${a}`),f("anomaly",a),null===(e=document.getElementById("authorise"))||void 0===e||e.addEventListener("click",(()=>{var e;null===(e=document.getElementById("buttons"))||void 0===e||e.classList.remove("hidden")})),null===(n=document.getElementById("reset"))||void 0===n||n.addEventListener("click",(()=>{var e;e=!0,console.log("Forgetting everything..."),h("anomaly"),h("seen"),h("timerExpiresAt"),e&&history.go(0)})),null===(t=document.getElementById("stopTimer"))||void 0===t||t.addEventListener("click",(()=>{console.log("Stopping timer..."),clearInterval(s),console.log("Stopped.")})),null===(o=document.getElementById("ignoreSeen"))||void 0===o||o.addEventListener("click",(()=>{f("seen","false")}));const i=document.getElementById("anomalyButtons");Object.keys(anomalies).forEach((e=>{const n=document.createElement("button");n.type="button",n.textContent=e,n.addEventListener("click",(()=>{a=e,console.log(`Anomaly manually set to ${a}`),f("anomaly",a)})),null==i||i.appendChild(n)})),null===(r=document.getElementById("proceed"))||void 0===r||r.addEventListener("click",(function(){v("loading"),"true"===p("seen")&&(a="base"),setTimeout((()=>v("anomaly")),1200)}))}))}]);