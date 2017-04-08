/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
!function(e,t){
// Convert String-formatted flags into Object-formatted ones and store in cache
function n(e){var t,n,r=O[e]={};for(e=e.split(/\s+/),t=0,n=e.length;t<n;t++)r[e[t]]=!0;return r}function r(e,n,r){
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(r===t&&1===e.nodeType){var i="data-"+n.replace(q,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r||"false"!==r&&("null"===r?null:H.isNumeric(r)?+r:P.test(r)?H.parseJSON(r):r)}catch(o){}
// Make sure we set the data so it isn't changed later
H.data(e,n,r)}else r=t}return r}
// checks a cache object for emptiness
function i(e){for(var t in e)
// if the public data object is empty, the private is still empty
if(("data"!==t||!H.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function o(e,t,n){var r=t+"defer",i=t+"queue",o=t+"mark",a=H._data(e,r);!a||"queue"!==n&&H._data(e,i)||"mark"!==n&&H._data(e,o)||
// Give room for hard-coded callbacks to fire first
// and eventually mark/queue something else on the element
setTimeout(function(){H._data(e,i)||H._data(e,o)||(H.removeData(e,r,!0),a.fire())},0)}function a(){return!1}function s(){return!0}
// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function l(e){return!e||!e.parentNode||11===e.parentNode.nodeType}
// Implement the identical functionality for filter and not
function u(e,t,n){if(
// Can't pass null or undefined to indexOf in Firefox 4
// Set to 0 to skip string check
t=t||0,H.isFunction(t))return H.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return H.grep(e,function(e,r){return e===t===n});if("string"==typeof t){var r=H.grep(e,function(e){return 1===e.nodeType});if(ce.test(t))return H.filter(t,r,!n);t=H.filter(t,r)}return H.grep(e,function(e,r){return H.inArray(e,t)>=0===n})}function c(e){var t=he.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function f(e,t){return H.nodeName(e,"table")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function d(e,t){if(1===t.nodeType&&H.hasData(e)){var n,r,i,o=H._data(e),a=H._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;r<i;r++)H.event.add(t,n,s[n][r])}
// make the cloned public data object a copy from the original
a.data&&(a.data=H.extend({},a.data))}}function p(e,t){var n;
// We do not need to do anything for non-Elements
1===t.nodeType&&(
// clearAttributes removes the attributes, which we don't want,
// but also removes the attachEvent events, which we *do* want
t.clearAttributes&&t.clearAttributes(),
// mergeAttributes, in contrast, only merges back on the
// original attributes, not the events
t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),
// IE6-8 fail to clone children inside object elements that use
// the proprietary classid attribute value (rather than the type
// attribute) to identify the type of content to display
"object"===n?t.outerHTML=e.outerHTML:"input"!==n||"checkbox"!==e.type&&"radio"!==e.type?"option"===n?t.selected=e.defaultSelected:"input"===n||"textarea"===n?t.defaultValue=e.defaultValue:"script"===n&&t.text!==e.text&&(t.text=e.text):(
// IE6-8 fails to persist the checked state of a cloned checkbox
// or radio button. Worse, IE6-7 fail to give the cloned element
// a checked appearance if the defaultChecked value isn't also set
e.checked&&(t.defaultChecked=t.checked=e.checked),
// IE6-7 get confused and end up setting the value of a cloned
// checkbox/radio button to an empty string instead of "on"
t.value!==e.value&&(t.value=e.value)),
// Event data gets referenced instead of copied if the expando
// gets copied too
t.removeAttribute(H.expando),
// Clear flags for bubbling special change/submit events, they must
// be reattached when the newly cloned events are first activated
t.removeAttribute("_submit_attached"),t.removeAttribute("_change_attached"))}function h(e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName("*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll("*"):[]}
// Used in clean, fixes the defaultChecked property
function m(e){"checkbox"!==e.type&&"radio"!==e.type||(e.defaultChecked=e.checked)}
// Finds all inputs and passes them to fixDefaultChecked
function g(e){var t=(e.nodeName||"").toLowerCase();"input"===t?m(e):"script"!==t&&"undefined"!=typeof e.getElementsByTagName&&H.grep(e.getElementsByTagName("input"),m)}
// Derived From: http://www.iecss.com/shimprove/javascript/shimprove.1-0-1.js
function y(e){var t=F.createElement("div");return Ae.appendChild(t),t.innerHTML=e.outerHTML,t.firstChild}function v(e,t,n){
// Start with offset property
var r="width"===t?e.offsetWidth:e.offsetHeight,i="width"===t?1:0,o=4;if(r>0){if("border"!==n)for(;i<o;i+=2)n||(r-=parseFloat(H.css(e,"padding"+We[i]))||0),"margin"===n?r+=parseFloat(H.css(e,n+We[i]))||0:r-=parseFloat(H.css(e,"border"+We[i]+"Width"))||0;return r+"px"}
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
r=Le(e,t),(r<0||null==r)&&(r=e.style[t]),Oe.test(r))return r;
// Add padding, border, margin
if(
// Normalize "", auto, and prepare for extra
r=parseFloat(r)||0,n)for(;i<o;i+=2)r+=parseFloat(H.css(e,"padding"+We[i]))||0,"padding"!==n&&(r+=parseFloat(H.css(e,"border"+We[i]+"Width"))||0),"margin"===n&&(r+=parseFloat(H.css(e,n+We[i]))||0);return r+"px"}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function b(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){if("string"!=typeof t&&(n=t,t="*"),H.isFunction(n))
// For each dataType in the dataTypeExpression
for(var r,i,o,a=t.toLowerCase().split(tt),s=0,l=a.length;s<l;s++)r=a[s],
// We control if we're asked to add before
// any existing element
o=/^\+/.test(r),o&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],
// then we add to the structure accordingly
i[o?"unshift":"push"](n)}}
// Base inspection function for prefilters and transports
function x(e,n,r,i,o,a){o=o||n.dataTypes[0],a=a||{},a[o]=!0;for(var s,l=e[o],u=0,c=l?l.length:0,f=e===ot;u<c&&(f||!s);u++)s=l[u](n,r,i),
// If we got redirected to another dataType
// we try there if executing only and not done already
"string"==typeof s&&(!f||a[s]?s=t:(n.dataTypes.unshift(s),s=x(e,n,r,i,s,a)));
// unnecessary when only executing (prefilters)
// but it'll be ignored by the caller in that case
// If we're only executing or nothing was selected
// we try the catchall dataType if not done already
return!f&&s||a["*"]||(s=x(e,n,r,i,"*",a)),s}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function T(e,n){var r,i,o=H.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);i&&H.extend(!0,e,i)}function w(e,t,n,r){if(H.isArray(t))
// Serialize array item.
H.each(t,function(t,i){n||Xe.test(e)?
// Treat each array item as a scalar.
r(e,i):
// If array item is non-scalar (array or object), encode its
// numeric index to resolve deserialization ambiguity issues.
// Note that rack (as of 1.0.0) can't currently deserialize
// nested arrays properly, and attempting to do so may cause
// a server error. Possible fixes are to modify rack's
// deserialization algorithm or to provide an option or flag
// to force array serialization to be shallow.
w(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==H.type(t))
// Serialize scalar item.
r(e,t);else
// Serialize object item.
for(var i in t)w(e+"["+i+"]",t[i],n,r)}/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function N(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes,c=e.responseFields;
// Fill responseXXX fields
for(o in c)o in r&&(n[c[o]]=r[o]);
// Remove auto dataType and get content-type in the process
for(;"*"===u[0];)u.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));
// Check if we're dealing with a known content-type
if(i)for(o in l)if(l[o]&&l[o].test(i)){u.unshift(o);break}
// Check to see if we have a response for the expected dataType
if(u[0]in r)a=u[0];else{
// Try convertible dataTypes
for(o in r){if(!u[0]||e.converters[o+" "+u[0]]){a=o;break}s||(s=o)}
// Or just use first one
a=a||s}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(a)return a!==u[0]&&u.unshift(a),r[a]}
// Chain conversions given the request and the original response
function C(e,n){
// Apply the dataFilter if provided
e.dataFilter&&(n=e.dataFilter(n,e.dataType));var r,i,o,a,
// Conversion expression
s,
// Conversion function
l,
// Conversion functions (transitive conversion)
u,c,f=e.dataTypes,d={},p=f.length,
// Current and previous dataTypes
h=f[0];
// For each dataType in the chain
for(r=1;r<p;r++){
// Create converters map
// with lowercased keys
if(1===r)for(i in e.converters)"string"==typeof i&&(d[i.toLowerCase()]=e.converters[i]);
// If current is auto dataType, update it to prev
if(
// Get the dataTypes
a=h,h=f[r],"*"===h)h=a;else if("*"!==a&&a!==h){
// If there is no direct converter, search transitively
if(
// Get the converter
s=a+" "+h,l=d[s]||d["* "+h],!l){c=t;for(u in d)if(o=u.split(" "),(o[0]===a||"*"===o[0])&&(c=d[o[1]+" "+h])){u=d[u],u===!0?l=c:c===!0&&(l=u);break}}
// If we found no converter, dispatch an error
l||c||H.error("No conversion from "+s.replace(" "," to ")),
// If found converter is not an equivalence
l!==!0&&(
// Convert with 1 or 2 converters accordingly
n=l?l(n):c(u(n)))}}return n}
// Functions to create xhrs
function E(){try{return new e.XMLHttpRequest}catch(t){}}function k(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}
// Animations created synchronously will run synchronously
function S(){return setTimeout(A,0),yt=H.now()}function A(){yt=t}
// Generate parameters to create a standard animation
function L(e,t){var n={};return H.each(Tt.concat.apply([],Tt.slice(0,t)),function(){n[this]=e}),n}
// Try to restore the default display value of an element
function D(e){if(!vt[e]){var t=F.body,n=H("<"+e+">").appendTo(t),r=n.css("display");n.remove(),
// If the simple way fails,
// get element's real default display by attaching it to a temp iframe
"none"!==r&&""!==r||(
// No iframe to use yet, so create it
ht||(ht=F.createElement("iframe"),ht.frameBorder=ht.width=ht.height=0),t.appendChild(ht),
// Create a cacheable copy of the iframe document on first call.
// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
// document to it; WebKit & Firefox won't allow reusing the iframe document.
mt&&ht.createElement||(mt=(ht.contentWindow||ht.contentDocument).document,mt.write((H.support.boxModel?"<!doctype html>":"")+"<html><body>"),mt.close()),n=mt.createElement(e),mt.body.appendChild(n),r=H.css(n,"display"),t.removeChild(ht)),
// Store the correct default display
vt[e]=r}return vt[e]}function j(e){return H.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}
// Use the correct document accordingly with window argument (sandbox)
var F=e.document,M=e.navigator,_=e.location,H=function(){
// The DOM ready check for Internet Explorer
function n(){if(!s.isReady){try{
// If IE is used, use the trick by Diego Perini
// http://javascript.nwbox.com/IEContentLoaded/
F.documentElement.doScroll("left")}catch(e){return void setTimeout(n,1)}
// and execute any waiting functions
s.ready()}}
// Define a local copy of jQuery
var
// A central reference to the root jQuery(document)
r,
// For matching the engine and version of the browser
i,
// The deferred used on DOM ready
o,
// The ready event handler
a,s=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
return new s.fn.init(e,t,r)},
// Map over jQuery in case of overwrite
l=e.jQuery,
// Map over the $ in case of overwrite
u=e.$,
// A simple way to check for HTML strings or ID strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
c=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
// Check if a string has a non-whitespace character in it
f=/\S/,
// Used for trimming whitespace
d=/^\s+/,p=/\s+$/,
// Match a standalone tag
h=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,
// JSON RegExp
m=/^[\],:{}\s]*$/,g=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,y=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,v=/(?:^|:|,)(?:\s*\[)+/g,
// Useragent RegExp
b=/(webkit)[ \/]([\w.]+)/,x=/(opera)(?:.*version)?[ \/]([\w.]+)/,T=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,
// Matches dashed string for camelizing
N=/-([a-z]|[0-9])/gi,C=/^-ms-/,
// Used by jQuery.camelCase as callback to replace()
E=function(e,t){return(t+"").toUpperCase()},
// Keep a UserAgent string for use with jQuery.browser
k=M.userAgent,
// Save a reference to some core methods
S=Object.prototype.toString,A=Object.prototype.hasOwnProperty,L=Array.prototype.push,D=Array.prototype.slice,j=String.prototype.trim,_=Array.prototype.indexOf,
// [[Class]] -> type pairs
H={};
// Give the init function the jQuery prototype for later instantiation
// Populate the class2type map
// Deprecated, use jQuery.browser.webkit instead
// IE doesn't match non-breaking spaces with \s
// All jQuery objects should point back to these
// Cleanup functions for the document ready method
return s.fn=s.prototype={constructor:s,init:function(e,n,r){var i,o,a,l;
// Handle $(""), $(null), or $(undefined)
if(!e)return this;
// Handle $(DOMElement)
if(e.nodeType)return this.context=this[0]=e,this.length=1,this;
// The body element only exists once, optimize finding it
if("body"===e&&!n&&F.body)return this.context=F,this[0]=F.body,this.selector=e,this.length=1,this;
// Handle HTML strings
if("string"==typeof e){
// Verify a match, and that no context was specified for #id
if(
// Are we dealing with HTML string or an ID?
// Assume that strings that start and end with <> are HTML and skip the regex check
i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:c.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);
// HANDLE: $(html) -> $(array)
if(i[1])
// If a single string is passed in and it's a single tag
// just do a createElement and skip the rest
return n=n instanceof s?n[0]:n,l=n?n.ownerDocument||n:F,a=h.exec(e),a?s.isPlainObject(n)?(e=[F.createElement(a[1])],s.fn.attr.call(e,n,!0)):e=[l.createElement(a[1])]:(a=s.buildFragment([i[1]],[l]),e=(a.cacheable?s.clone(a.fragment):a.fragment).childNodes),s.merge(this,e);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(o=F.getElementById(i[2]),o&&o.parentNode){
// Handle the case where IE and Opera return items
// by name instead of ID
if(o.id!==i[2])return r.find(e);
// Otherwise, we inject the element directly into the jQuery object
this.length=1,this[0]=o}return this.context=F,this.selector=e,this}return s.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),s.makeArray(e,this))},
// Start with an empty selector
selector:"",
// The current version of jQuery being used
jquery:"1.7.2",
// The default length of a jQuery object is 0
length:0,
// The number of elements contained in the matched element set
size:function(){return this.length},toArray:function(){return D.call(this,0)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return a 'clean' array
// Return just the object
return null==e?this.toArray():e<0?this[this.length+e]:this[e]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e,t,n){
// Build a new jQuery matched element set
var r=this.constructor();
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return s.isArray(e)?L.apply(r,e):s.merge(r,e),r.prevObject=this,r.context=this.context,"find"===t?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},
// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(e,t){return s.each(this,e,t)},ready:function(e){
// Attach the listeners
// Add the callback
return s.bindReady(),o.add(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(D.apply(this,arguments),"slice",D.call(arguments).join(","))},map:function(e){return this.pushStack(s.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:L,sort:[].sort,splice:[].splice},s.fn.init.prototype=s.fn,s.extend=s.fn.extend=function(){var e,n,r,i,o,a,l=arguments[0]||{},u=1,c=arguments.length,f=!1;for(
// Handle a deep copy situation
"boolean"==typeof l&&(f=l,l=arguments[1]||{},
// skip the boolean and the target
u=2),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof l||s.isFunction(l)||(l={}),
// extend jQuery itself if only one argument is passed
c===u&&(l=this,--u);u<c;u++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[u]))
// Extend the base object
for(n in e)r=l[n],i=e[n],
// Prevent never-ending loop
l!==i&&(
// Recurse if we're merging plain objects or arrays
f&&i&&(s.isPlainObject(i)||(o=s.isArray(i)))?(o?(o=!1,a=r&&s.isArray(r)?r:[]):a=r&&s.isPlainObject(r)?r:{},
// Never move original objects, clone them
l[n]=s.extend(f,a,i)):i!==t&&(l[n]=i));
// Return the modified object
return l},s.extend({noConflict:function(t){return e.$===s&&(e.$=u),t&&e.jQuery===s&&(e.jQuery=l),s},
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(e){e?s.readyWait++:s.ready(!0)},
// Handle when the DOM is ready
ready:function(e){
// Either a released hold or an DOMready/load event and not yet ready
if(e===!0&&!--s.readyWait||e!==!0&&!s.isReady){
// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
if(!F.body)return setTimeout(s.ready,1);
// If a normal DOM Ready event fired, decrement, and wait if need be
if(
// Remember that the DOM is ready
s.isReady=!0,e!==!0&&--s.readyWait>0)return;
// If there are functions bound, to execute
o.fireWith(F,[s]),
// Trigger any bound ready events
s.fn.trigger&&s(F).trigger("ready").off("ready")}},bindReady:function(){if(!o){
// Catch cases where $(document).ready() is called after the
// browser event has already occurred.
if(o=s.Callbacks("once memory"),"complete"===F.readyState)
// Handle it asynchronously to allow scripts the opportunity to delay ready
return setTimeout(s.ready,1);
// Mozilla, Opera and webkit nightlies currently support this event
if(F.addEventListener)
// Use the handy event callback
F.addEventListener("DOMContentLoaded",a,!1),
// A fallback to window.onload, that will always work
e.addEventListener("load",s.ready,!1);else if(F.attachEvent){
// ensure firing before onload,
// maybe late but safe also for iframes
F.attachEvent("onreadystatechange",a),
// A fallback to window.onload, that will always work
e.attachEvent("onload",s.ready);
// If IE and not a frame
// continually check to see if the document is ready
var t=!1;try{t=null==e.frameElement}catch(r){}F.documentElement.doScroll&&t&&n()}}},
// See test/unit/core.js for details concerning isFunction.
// Since version 1.3, DOM methods and functions like alert
// aren't supported. They return false on IE (#2968).
isFunction:function(e){return"function"===s.type(e)},isArray:Array.isArray||function(e){return"array"===s.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):H[S.call(e)]||"object"},isPlainObject:function(e){
// Must be an Object.
// Because of IE, we also have to check the presence of the constructor property.
// Make sure that DOM nodes and window objects don't pass through, as well
if(!e||"object"!==s.type(e)||e.nodeType||s.isWindow(e))return!1;try{
// Not own constructor property must be Object
if(e.constructor&&!A.call(e,"constructor")&&!A.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){
// IE8,9 Will throw exceptions on certain host objects #9897
return!1}
// Own properties are enumerated firstly, so to speed up,
// if last one is own, then all properties are own.
var r;for(r in e);return r===t||A.call(e,r)},isEmptyObject:function(e){for(var t in e)return!1;return!0},error:function(e){throw new Error(e)},parseJSON:function(t){
// Make sure leading/trailing whitespace is removed (IE can't handle it)
// Attempt to parse using the native JSON parser first
// Make sure the incoming data is actual JSON
// Logic borrowed from http://json.org/json2.js
return"string"==typeof t&&t?(t=s.trim(t),e.JSON&&e.JSON.parse?e.JSON.parse(t):m.test(t.replace(g,"@").replace(y,"]").replace(v,""))?new Function("return "+t)():void s.error("Invalid JSON: "+t)):null},
// Cross-browser xml parsing
parseXML:function(n){if("string"!=typeof n||!n)return null;var r,i;try{e.DOMParser?(// Standard
i=new DOMParser,r=i.parseFromString(n,"text/xml")):(// IE
r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||s.error("Invalid XML: "+n),r},noop:function(){},
// Evaluates a script in a global context
// Workarounds based on findings by Jim Driscoll
// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
globalEval:function(t){t&&f.test(t)&&
// We use execScript on Internet Explorer
// We use an anonymous function so that context is window
// rather than jQuery in Firefox
(e.execScript||function(t){e.eval.call(e,t)})(t)},
// Convert dashed to camelCase; used by the css and data modules
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(C,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},
// args is for internal usage only
each:function(e,n,r){var i,o=0,a=e.length,l=a===t||s.isFunction(e);if(r)if(l){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;o<a&&n.apply(e[o++],r)!==!1;);else if(l){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;o<a&&n.call(e[o],o,e[o++])!==!1;);return e},
// Use native String.trim function wherever possible
trim:j?function(e){return null==e?"":j.call(e)}:
// Otherwise use our own trimming functionality
function(e){return null==e?"":e.toString().replace(d,"").replace(p,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];if(null!=e){
// The window, strings (and functions) also have 'length'
// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
var r=s.type(e);null==e.length||"string"===r||"function"===r||"regexp"===r||s.isWindow(e)?L.call(n,e):s.merge(n,e)}return n},inArray:function(e,t,n){var r;if(t){if(_)return _.call(t,e,n);for(r=t.length,n=n?n<0?Math.max(0,r+n):n:0;n<r;n++)
// Skip accessing in sparse arrays
if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=e.length,i=0;if("number"==typeof n.length)for(var o=n.length;i<o;i++)e[r++]=n[i];else for(;n[i]!==t;)e[r++]=n[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[];n=!!n;
// Go through the array, only saving the items
// that pass the validator function
for(var o=0,a=e.length;o<a;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},
// arg is for internal usage only
map:function(e,n,r){var i,o,a=[],l=0,u=e.length,
// jquery objects are treated as arrays
c=e instanceof s||u!==t&&"number"==typeof u&&(u>0&&e[0]&&e[u-1]||0===u||s.isArray(e));
// Go through the array, translating each of the items to their
if(c)for(;l<u;l++)i=n(e[l],l,r),null!=i&&(a[a.length]=i);else for(o in e)i=n(e[o],o,r),null!=i&&(a[a.length]=i);
// Flatten any nested arrays
return a.concat.apply([],a)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,n){if("string"==typeof n){var r=e[n];n=e,e=r}
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!s.isFunction(e))return t;
// Simulated bind
var i=D.call(arguments,2),o=function(){return e.apply(n,i.concat(D.call(arguments)))};
// Set the guid of unique handler to the same of original handler, so it can be removed
return o.guid=e.guid=e.guid||o.guid||s.guid++,o},
// Mutifunctional method to get and set values to a collection
// The value/s can optionally be executed if it's a function
access:function(e,n,r,i,o,a,l){var u,c=null==r,f=0,d=e.length;
// Sets many values
if(r&&"object"==typeof r){for(f in r)s.access(e,n,f,r[f],1,a,i);o=1}else if(i!==t){if(
// Optionally, function values get executed if exec is true
u=l===t&&s.isFunction(i),c&&(
// Bulk operations only iterate when executing function values
u?(u=n,n=function(e,t,n){return u.call(s(e),n)}):(n.call(e,i),n=null)),n)for(;f<d;f++)n(e[f],r,u?i.call(e[f],f,n(e[f],r)):i,l);o=1}
// Gets
return o?e:c?n.call(e):d?n(e[0],r):a},now:function(){return(new Date).getTime()},
// Use of jQuery.browser is frowned upon.
// More details: http://docs.jquery.com/Utilities/jQuery.browser
uaMatch:function(e){e=e.toLowerCase();var t=b.exec(e)||x.exec(e)||T.exec(e)||e.indexOf("compatible")<0&&w.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},sub:function(){function e(t,n){return new e.fn.init(t,n)}s.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,r){return r&&r instanceof s&&!(r instanceof e)&&(r=e(r)),s.fn.init.call(this,n,r,t)},e.fn.init.prototype=e.fn;var t=e(F);return e},browser:{}}),s.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){H["[object "+t+"]"]=t.toLowerCase()}),i=s.uaMatch(k),i.browser&&(s.browser[i.browser]=!0,s.browser.version=i.version),s.browser.webkit&&(s.browser.safari=!0),f.test(" ")&&(d=/^[\s\xA0]+/,p=/[\s\xA0]+$/),r=s(F),F.addEventListener?a=function(){F.removeEventListener("DOMContentLoaded",a,!1),s.ready()}:F.attachEvent&&(a=function(){
// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
"complete"===F.readyState&&(F.detachEvent("onreadystatechange",a),s.ready())}),s}(),O={};/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
H.Callbacks=function(e){
// Convert flags from String-formatted to Object-formatted
// (we check in cache first)
e=e?O[e]||n(e):{};var
// Last fire value (for non-forgettable lists)
r,
// Flag to know if list was already fired
i,
// Flag to know if list is currently firing
o,
// First callback to fire (used internally by add and fireWith)
a,
// End of the loop when firing
s,
// Index of currently firing callback (modified by remove if needed)
l,// Actual callback list
u=[],
// Stack of fire calls for repeatable lists
c=[],
// Add one or several callbacks to the list
f=function(t){var n,r,i,o;for(n=0,r=t.length;n<r;n++)i=t[n],o=H.type(i),"array"===o?
// Inspect recursively
f(i):"function"===o&&(
// Add if not in unique mode and callback is not in
e.unique&&p.has(i)||u.push(i))},
// Fire callbacks
d=function(t,n){for(n=n||[],r=!e.memory||[t,n],i=!0,o=!0,l=a||0,a=0,s=u.length;u&&l<s;l++)if(u[l].apply(t,n)===!1&&e.stopOnFalse){r=!0;// Mark as halted
break}o=!1,u&&(e.once?r===!0?p.disable():u=[]:c&&c.length&&(r=c.shift(),p.fireWith(r[0],r[1])))},
// Actual Callbacks object
p={
// Add a callback or a collection of callbacks to the list
add:function(){if(u){var e=u.length;f(arguments),
// Do we need to add the callbacks to the
// current firing batch?
o?s=u.length:r&&r!==!0&&(a=e,d(r[0],r[1]))}return this},
// Remove a callback from the list
remove:function(){if(u)for(var t=arguments,n=0,r=t.length;n<r;n++)for(var i=0;i<u.length&&(t[n]!==u[i]||(
// Handle firingIndex and firingLength
o&&i<=s&&(s--,i<=l&&l--),
// Remove the element
u.splice(i--,1),!e.unique));i++);return this},
// Control if a given callback is in the list
has:function(e){if(u)for(var t=0,n=u.length;t<n;t++)if(e===u[t])return!0;return!1},
// Remove all callbacks from the list
empty:function(){return u=[],this},
// Have the list do nothing anymore
disable:function(){return u=c=r=t,this},
// Is it disabled?
disabled:function(){return!u},
// Lock the list in its current state
lock:function(){return c=t,r&&r!==!0||p.disable(),this},
// Is it locked?
locked:function(){return!c},
// Call all callbacks with the given context and arguments
fireWith:function(t,n){return c&&(o?e.once||c.push([t,n]):e.once&&r||d(t,n)),this},
// Call all the callbacks with the given arguments
fire:function(){return p.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!i}};return p};var// Static reference to slice
B=[].slice;H.extend({Deferred:function(e){var t,n=H.Callbacks("once memory"),r=H.Callbacks("once memory"),i=H.Callbacks("memory"),o="pending",a={resolve:n,reject:r,notify:i},s={done:n.add,fail:r.add,progress:i.add,state:function(){return o},
// Deprecated
isResolved:n.fired,isRejected:r.fired,then:function(e,t,n){return l.done(e).fail(t).progress(n),this},always:function(){return l.done.apply(l,arguments).fail.apply(l,arguments),this},pipe:function(e,t,n){return H.Deferred(function(r){H.each({done:[e,"resolve"],fail:[t,"reject"],progress:[n,"notify"]},function(e,t){var n,i=t[0],o=t[1];H.isFunction(i)?l[e](function(){n=i.apply(this,arguments),n&&H.isFunction(n.promise)?n.promise().then(r.resolve,r.reject,r.notify):r[o+"With"](this===l?r:this,[n])}):l[e](r[o])})}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){if(null==e)e=s;else for(var t in s)e[t]=s[t];return e}},l=s.promise({});for(t in a)l[t]=a[t].fire,l[t+"With"]=a[t].fireWith;
// All done!
// Handle state
// Call given func if any
return l.done(function(){o="resolved"},r.disable,i.lock).fail(function(){o="rejected"},n.disable,i.lock),e&&e.call(l,l),l},
// Deferred helper
when:function(e){function t(e){return function(t){r[e]=arguments.length>1?B.call(arguments,0):t,--s||l.resolveWith(l,r)}}function n(e){return function(t){a[e]=arguments.length>1?B.call(arguments,0):t,l.notifyWith(u,a)}}var r=B.call(arguments,0),i=0,o=r.length,a=new Array(o),s=o,l=o<=1&&e&&H.isFunction(e.promise)?e:H.Deferred(),u=l.promise();if(o>1){for(;i<o;i++)r[i]&&r[i].promise&&H.isFunction(r[i].promise)?r[i].promise().then(t(i),l.reject,n(i)):--s;s||l.resolveWith(l,r)}else l!==e&&l.resolveWith(l,o?[e]:[]);return u}}),H.support=function(){var t,n,r,i,o,a,s,l,u,c,f,d=F.createElement("div");F.documentElement;
// Can't get basic test support
if(
// Preliminary tests
d.setAttribute("className","t"),d.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!n.length||!r)return{};
// First batch of supports tests
i=F.createElement("select"),o=i.appendChild(F.createElement("option")),a=d.getElementsByTagName("input")[0],t={
// IE strips leading whitespace when .innerHTML is used
leadingWhitespace:3===d.firstChild.nodeType,
// Make sure that tbody elements aren't automatically inserted
// IE will insert them into empty tables
tbody:!d.getElementsByTagName("tbody").length,
// Make sure that link elements get serialized correctly by innerHTML
// This requires a wrapper element in IE
htmlSerialize:!!d.getElementsByTagName("link").length,
// Get the style information from getAttribute
// (IE uses .cssText instead)
style:/top/.test(r.getAttribute("style")),
// Make sure that URLs aren't manipulated
// (IE normalizes it by default)
hrefNormalized:"/a"===r.getAttribute("href"),
// Make sure that element opacity exists
// (IE uses filter instead)
// Use a regex to work around a WebKit issue. See #5145
opacity:/^0.55/.test(r.style.opacity),
// Verify style float existence
// (IE uses styleFloat instead of cssFloat)
cssFloat:!!r.style.cssFloat,
// Make sure that if no value is specified for a checkbox
// that it defaults to "on".
// (WebKit defaults to "" instead)
checkOn:"on"===a.value,
// Make sure that a selected-by-default option has a working selected property.
// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
optSelected:o.selected,
// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
getSetAttribute:"t"!==d.className,
// Tests for enctype support on a form(#6743)
enctype:!!F.createElement("form").enctype,
// Makes sure cloning an html5 element does not cause problems
// Where outerHTML is undefined, this still works
html5Clone:"<:nav></:nav>"!==F.createElement("nav").cloneNode(!0).outerHTML,
// Will be defined later
submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},
// jQuery.boxModel DEPRECATED in 1.3, use jQuery.support.boxModel instead
H.boxModel=t.boxModel="CSS1Compat"===F.compatMode,
// Make sure checked status is properly cloned
a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,
// Make sure that the options inside disabled selects aren't marked as disabled
// (WebKit marks them as disabled)
i.disabled=!0,t.optDisabled=!o.disabled;
// Test to see if it's possible to delete an expando from an element
// Fails in Internet Explorer
try{delete d.test}catch(p){t.deleteExpando=!1}
// Technique from Juriy Zaytsev
// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
// We only care about the case where non-standard event systems
// are used, namely in IE. Short-circuiting here helps us to
// avoid an eval call (in setAttribute) which can cause CSP
// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
if(!d.addEventListener&&d.attachEvent&&d.fireEvent&&(d.attachEvent("onclick",function(){
// Cloning a node shouldn't copy over any
// bound event handlers (IE does this)
t.noCloneEvent=!1}),d.cloneNode(!0).fireEvent("onclick")),
// Check if a radio maintains its value
// after being appended to the DOM
a=F.createElement("input"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","checked"),
// #11217 - WebKit loses check when the name is after the checked attribute
a.setAttribute("name","t"),d.appendChild(a),s=F.createDocumentFragment(),s.appendChild(d.lastChild),
// WebKit doesn't clone checked state correctly in fragments
t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Check if a disconnected checkbox will retain its checked
// value of true after appended to the DOM (IE6/7)
t.appendChecked=a.checked,s.removeChild(a),s.appendChild(d),d.attachEvent)for(c in{submit:1,change:1,focusin:1})u="on"+c,f=u in d,f||(d.setAttribute(u,"return;"),f="function"==typeof d[u]),t[c+"Bubbles"]=f;
// Null elements to avoid leaks in IE
// Run tests that need a body at doc ready
return s.removeChild(d),s=i=o=d=a=null,H(function(){var n,r,i,o,a,s,u,c,p,h,m,g,y=F.getElementsByTagName("body")[0];y&&(u=1,g="padding:0;margin:0;border:",h="position:absolute;top:0;left:0;width:1px;height:1px;",m=g+"0;visibility:hidden;",c="style='"+h+g+"5px solid #000;",p="<div "+c+"display:block;'><div style='"+g+"0;display:block;overflow:hidden;'></div></div><table "+c+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",n=F.createElement("div"),n.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+u+"px",y.insertBefore(n,y.firstChild),
// Construct the test element
d=F.createElement("div"),n.appendChild(d),
// Check if table cells still have offsetWidth/Height when they are set
// to display:none and there are still other visible table cells in a
// table row; if so, offsetWidth/Height are not reliable for use when
// determining if an element has been hidden directly using
// display:none (it is still safe to use offsets if a parent element is
// hidden; don safety goggles and see bug #4512 for more information).
// (only IE 8 fails this test)
d.innerHTML="<table><tr><td style='"+g+"0;display:none'></td><td>t</td></tr></table>",l=d.getElementsByTagName("td"),f=0===l[0].offsetHeight,l[0].style.display="",l[1].style.display="none",
// Check if empty table cells still have offsetWidth/Height
// (IE <= 8 fail this test)
t.reliableHiddenOffsets=f&&0===l[0].offsetHeight,
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. For more
// info see bug #3333
// Fails in WebKit before Feb 2011 nightlies
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
e.getComputedStyle&&(d.innerHTML="",s=F.createElement("div"),s.style.width="0",s.style.marginRight="0",d.style.width="2px",d.appendChild(s),t.reliableMarginRight=0===(parseInt((e.getComputedStyle(s,null)||{marginRight:0}).marginRight,10)||0)),"undefined"!=typeof d.style.zoom&&(
// Check if natively block-level elements act like inline-block
// elements when setting their display to 'inline' and giving
// them layout
// (IE < 8 does this)
d.innerHTML="",d.style.width=d.style.padding="1px",d.style.border=0,d.style.overflow="hidden",d.style.display="inline",d.style.zoom=1,t.inlineBlockNeedsLayout=3===d.offsetWidth,
// Check if elements with layout shrink-wrap their children
// (IE 6 does this)
d.style.display="block",d.style.overflow="visible",d.innerHTML="<div style='width:5px;'></div>",t.shrinkWrapBlocks=3!==d.offsetWidth),d.style.cssText=h+m,d.innerHTML=p,r=d.firstChild,i=r.firstChild,o=r.nextSibling.firstChild.firstChild,a={doesNotAddBorder:5!==i.offsetTop,doesAddBorderForTableAndCells:5===o.offsetTop},i.style.position="fixed",i.style.top="20px",
// safari subtracts parent border width here which is 5px
a.fixedPosition=20===i.offsetTop||15===i.offsetTop,i.style.position=i.style.top="",r.style.overflow="hidden",r.style.position="relative",a.subtractsBorderForOverflowNotVisible=i.offsetTop===-5,a.doesNotIncludeMarginInBodyOffset=y.offsetTop!==u,e.getComputedStyle&&(d.style.marginTop="1%",t.pixelMargin="1%"!==(e.getComputedStyle(d,null)||{marginTop:0}).marginTop),"undefined"!=typeof n.style.zoom&&(n.style.zoom=1),y.removeChild(n),s=d=n=null,H.extend(t,a))}),t}();var P=/^(?:\{.*\}|\[.*\])$/,q=/([A-Z])/g;H.extend({cache:{},
// Please use with caution
uuid:0,
// Unique for each copy of jQuery on the page
// Non-digits removed to match rinlinejQuery
expando:"jQuery"+(H.fn.jquery+Math.random()).replace(/\D/g,""),
// The following elements throw uncatchable exceptions if you
// attempt to add expando properties to them.
noData:{embed:!0,
// Ban all objects except for Flash (which handle expandos)
object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?H.cache[e[H.expando]]:e[H.expando],!!e&&!i(e)},data:function(e,n,r,i){if(H.acceptData(e)){var o,a,s,l=H.expando,u="string"==typeof n,
// We have to handle DOM nodes and JS objects differently because IE6-7
// can't GC object references properly across the DOM-JS boundary
c=e.nodeType,
// Only DOM nodes need the global jQuery cache; JS object data is
// attached directly to the object so GC can occur automatically
f=c?H.cache:e,
// Only defining an ID for JS objects if its cache already exists allows
// the code to shortcut on the same path as a DOM node with no cache
d=c?e[l]:e[l]&&l,p="events"===n;
// Avoid doing any more work than we need to when trying to get data on an
// object that has no data at all
if(d&&f[d]&&(p||i||f[d].data)||!u||r!==t)
// Users should not attempt to inspect the internal events object using jQuery.data,
// it is undocumented and subject to change. But does anyone listen? No.
// Only DOM nodes need a new unique ID for each element since their data
// ends up in the global cache
// Avoids exposing jQuery metadata on plain JS objects when the object
// is serialized using JSON.stringify
// An object can be passed to jQuery.data instead of a key/value pair; this gets
// shallow copied over onto the existing cache
// jQuery data() is stored in a separate object inside the object's internal data
// cache in order to avoid key collisions between internal data and user-defined
// data.
// Users should not attempt to inspect the internal events object using jQuery.data,
// it is undocumented and subject to change. But does anyone listen? No.
// Check for both converted-to-camel and non-converted data property names
// If a data property was specified
// First Try to find as-is property data
// Test for null|undefined property data
// Try to find the camelCased property
return d||(c?e[l]=d=++H.uuid:d=l),f[d]||(f[d]={},c||(f[d].toJSON=H.noop)),"object"!=typeof n&&"function"!=typeof n||(i?f[d]=H.extend(f[d],n):f[d].data=H.extend(f[d].data,n)),o=a=f[d],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[H.camelCase(n)]=r),p&&!a[n]?o.events:(u?(s=a[n],null==s&&(s=a[H.camelCase(n)])):s=a,s)}},removeData:function(e,t,n){if(H.acceptData(e)){var r,o,a,
// Reference to internal data cache key
s=H.expando,l=e.nodeType,
// See jQuery.data for more information
u=l?H.cache:e,
// See jQuery.data for more information
c=l?e[s]:s;
// If there is already no cache entry for this object, there is no
// purpose in continuing
if(u[c]){if(t&&(r=n?u[c]:u[c].data)){
// Support array or space separated string names for data keys
H.isArray(t)||(
// try the string as a key before any manipulation
t in r?t=[t]:(
// split the camel cased version by spaces unless a key with the spaces exists
t=H.camelCase(t),t=t in r?[t]:t.split(" ")));for(o=0,a=t.length;o<a;o++)delete r[t[o]];
// If there is no data left in the cache, we want to continue
// and let the cache object itself get destroyed
if(!(n?i:H.isEmptyObject)(r))return}
// See jQuery.data for more information
(n||(delete u[c].data,i(u[c])))&&(
// Browsers that fail expando deletion also refuse to delete expandos on
// the window, but it will allow it on all other JS objects; other browsers
// don't care
// Ensure that `cache` is not a window object #10080
H.support.deleteExpando||!u.setInterval?delete u[c]:u[c]=null,
// We destroyed the cache and need to eliminate the expando on the node to avoid
// false lookups in the cache for entries that no longer exist
l&&(
// IE does not allow us to delete expando properties from nodes,
// nor does it have a removeAttribute function on Document nodes;
// we must handle all of these cases
H.support.deleteExpando?delete e[s]:e.removeAttribute?e.removeAttribute(s):e[s]=null))}}},
// For internal use only.
_data:function(e,t,n){return H.data(e,t,n,!0)},
// A method for determining if a DOM node can handle the data expando
acceptData:function(e){if(e.nodeName){var t=H.noData[e.nodeName.toLowerCase()];if(t)return!(t===!0||e.getAttribute("classid")!==t)}return!0}}),H.fn.extend({data:function(e,n){var i,o,a,s,l,u=this[0],c=0,f=null;
// Gets all values
if(e===t){if(this.length&&(f=H.data(u),1===u.nodeType&&!H._data(u,"parsedAttrs"))){for(a=u.attributes,l=a.length;c<l;c++)s=a[c].name,0===s.indexOf("data-")&&(s=H.camelCase(s.substring(5)),r(u,s,f[s]));H._data(u,"parsedAttrs",!0)}return f}
// Sets multiple values
// Sets multiple values
return"object"==typeof e?this.each(function(){H.data(this,e)}):(i=e.split(".",2),i[1]=i[1]?"."+i[1]:"",o=i[1]+"!",H.access(this,function(n){
// Try to fetch any internally stored data first
return n===t?(f=this.triggerHandler("getData"+o,[i[0]]),f===t&&u&&(f=H.data(u,e),f=r(u,e,f)),f===t&&i[1]?this.data(i[0]):f):(i[1]=n,void this.each(function(){var t=H(this);t.triggerHandler("setData"+o,i),H.data(this,e,n),t.triggerHandler("changeData"+o,i)}))},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){H.removeData(this,e)})}}),H.extend({_mark:function(e,t){e&&(t=(t||"fx")+"mark",H._data(e,t,(H._data(e,t)||0)+1))},_unmark:function(e,t,n){if(e!==!0&&(n=t,t=e,e=!1),t){n=n||"fx";var r=n+"mark",i=e?0:(H._data(t,r)||1)-1;i?H._data(t,r,i):(H.removeData(t,r,!0),o(t,n,"mark"))}},queue:function(e,t,n){var r;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",r=H._data(e,t),n&&(!r||H.isArray(n)?r=H._data(e,t,H.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=H.queue(e,t),r=n.shift(),i={};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===r&&(r=n.shift()),r&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),H._data(e,t+".run",i),r.call(e,function(){H.dequeue(e,t)},i)),n.length||(H.removeData(e,t+"queue "+t+".run",!0),o(e,t,"queue"))}}),H.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?H.queue(this[0],e):n===t?this:this.each(function(){var t=H.queue(this,e,n);"fx"===e&&"inprogress"!==t[0]&&H.dequeue(this,e)})},dequeue:function(e){return this.each(function(){H.dequeue(this,e)})},
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
delay:function(e,t){return e=H.fx?H.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,n){function r(){--l||o.resolveWith(a,[a])}"string"!=typeof e&&(n=e,e=t),e=e||"fx";for(var i,o=H.Deferred(),a=this,s=a.length,l=1,u=e+"defer",c=e+"queue",f=e+"mark";s--;)(i=H.data(a[s],u,t,!0)||(H.data(a[s],c,t,!0)||H.data(a[s],f,t,!0))&&H.data(a[s],u,H.Callbacks("once memory"),!0))&&(l++,i.add(r));return r(),o.promise(n)}});var W,I,$,R=/[\n\t\r]/g,X=/\s+/,z=/\r/g,V=/^(?:button|input)$/i,U=/^(?:button|input|object|select|textarea)$/i,G=/^a(?:rea)?$/i,Y=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,J=H.support.getSetAttribute;H.fn.extend({attr:function(e,t){return H.access(this,H.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){H.removeAttr(this,e)})},prop:function(e,t){return H.access(this,H.prop,e,t,arguments.length>1)},removeProp:function(e){return e=H.propFix[e]||e,this.each(function(){
// try/catch handles cases where IE balks (such as removing a property on window)
try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a,s;if(H.isFunction(e))return this.each(function(t){H(this).addClass(e.call(this,t,this.className))});if(e&&"string"==typeof e)for(t=e.split(X),n=0,r=this.length;n<r;n++)if(i=this[n],1===i.nodeType)if(i.className||1!==t.length){for(o=" "+i.className+" ",a=0,s=t.length;a<s;a++)~o.indexOf(" "+t[a]+" ")||(o+=t[a]+" ");i.className=H.trim(o)}else i.className=e;return this},removeClass:function(e){var n,r,i,o,a,s,l;if(H.isFunction(e))return this.each(function(t){H(this).removeClass(e.call(this,t,this.className))});if(e&&"string"==typeof e||e===t)for(n=(e||"").split(X),r=0,i=this.length;r<i;r++)if(o=this[r],1===o.nodeType&&o.className)if(e){for(a=(" "+o.className+" ").replace(R," "),s=0,l=n.length;s<l;s++)a=a.replace(" "+n[s]+" "," ");o.className=H.trim(a)}else o.className="";return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return H.isFunction(e)?this.each(function(n){H(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(
// toggle individual class names
var i,o=0,a=H(this),s=t,l=e.split(X);i=l[o++];)
// check each className given, space seperated list
s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else"undefined"!==n&&"boolean"!==n||(this.className&&
// store className if set
H._data(this,"__className__",this.className),
// toggle whole className
this.className=this.className||e===!1?"":H._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(R," ").indexOf(t)>-1)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=H.isFunction(e),this.each(function(r){var o,a=H(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,
// Treat null/undefined as ""; convert numbers to string
null==o?o="":"number"==typeof o?o+="":H.isArray(o)&&(o=H.map(o,function(e){return null==e?"":e+""})),n=H.valHooks[this.type]||H.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)
// handle most common string cases
// handle cases where value is null/undef or number
return n=H.valHooks[o.type]||H.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(z,""):null==r?"":r)}}}),H.extend({valHooks:{option:{get:function(e){
// attributes.value is undefined in Blackberry 4.7 but
// uses .value. See #6932
var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,o=e.selectedIndex,a=[],s=e.options,l="select-one"===e.type;
// Nothing was selected
if(o<0)return null;for(
// Loop through all the selected options
n=l?o:0,r=l?o+1:s.length;n<r;n++)
// Don't return options that are disabled or in a disabled optgroup
if(i=s[n],i.selected&&(H.support.optDisabled?!i.disabled:null===i.getAttribute("disabled"))&&(!i.parentNode.disabled||!H.nodeName(i.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=H(i).val(),l)return t;
// Multi-Selects return an array
a.push(t)}
// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
return l&&!a.length&&s.length?H(s[o]).val():a},set:function(e,t){var n=H.makeArray(t);return H(e).find("option").each(function(){this.selected=H.inArray(H(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(e,n,r,i){var o,a,s,l=e.nodeType;
// don't get/set attributes on text, comment and attribute nodes
if(e&&3!==l&&8!==l&&2!==l)
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return i&&n in H.attrFn?H(e)[n](r):"undefined"==typeof e.getAttribute?H.prop(e,n,r):(s=1!==l||!H.isXMLDoc(e),s&&(n=n.toLowerCase(),a=H.attrHooks[n]||(Y.test(n)?I:W)),r!==t?null===r?void H.removeAttr(e,n):a&&"set"in a&&s&&(o=a.set(e,r,n))!==t?o:(e.setAttribute(n,""+r),r):a&&"get"in a&&s&&null!==(o=a.get(e,n))?o:(o=e.getAttribute(n),null===o?t:o))},removeAttr:function(e,t){var n,r,i,o,a,s=0;if(t&&1===e.nodeType)for(r=t.toLowerCase().split(X),o=r.length;s<o;s++)i=r[s],i&&(n=H.propFix[i]||i,a=Y.test(i),
// See #9699 for explanation of this approach (setting first, then removal)
// Do not do this for boolean attributes (see #10870)
a||H.attr(e,i,""),e.removeAttribute(J?i:n),
// Set corresponding property to false for boolean attributes
a&&n in e&&(e[n]=!1))},attrHooks:{type:{set:function(e,t){
// We can't allow the type property to be changed (since it causes problems in IE)
if(V.test(e.nodeName)&&e.parentNode)H.error("type property can't be changed");else if(!H.support.radioValue&&"radio"===t&&H.nodeName(e,"input")){
// Setting the type on a radio button after the value resets the value in IE6-9
// Reset value to it's default in case type is set after value
// This is for element creation
var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},
// Use the value property for back compat
// Use the nodeHook for button elements in IE6/7 (#1954)
value:{get:function(e,t){return W&&H.nodeName(e,"button")?W.get(e,t):t in e?e.value:null},set:function(e,t,n){
// Does not return so that setAttribute is also used
return W&&H.nodeName(e,"button")?W.set(e,t,n):void(e.value=t)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;
// don't get/set properties on text, comment and attribute nodes
if(e&&3!==s&&8!==s&&2!==s)
// Fix name and attach hooks
return a=1!==s||!H.isXMLDoc(e),a&&(n=H.propFix[n]||n,o=H.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){
// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):U.test(e.nodeName)||G.test(e.nodeName)&&e.href?0:t}}}}),
// Add the tabIndex propHook to attrHooks for back-compat (different case is intentional)
H.attrHooks.tabindex=H.propHooks.tabIndex,
// Hook for boolean attributes
I={get:function(e,n){
// Align boolean attributes with corresponding properties
// Fall back to attribute presence where some booleans are not supported
var r,i=H.prop(e,n);return i===!0||"boolean"!=typeof i&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;
// Remove boolean attributes when set to false
// value is true since we know at this point it's type boolean and not false
// Set boolean attributes to the same name and set the DOM property
// Only set the IDL specifically if it already exists on the element
return t===!1?H.removeAttr(e,n):(r=H.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},
// IE6/7 do not support getting/setting some attributes with get/setAttribute
J||($={name:!0,id:!0,coords:!0},
// Use this for any attribute in IE6/7
// This fixes almost every IE6/7 issue
W=H.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&($[n]?""!==r.nodeValue:r.specified)?r.nodeValue:t},set:function(e,t,n){
// Set the existing or create a new attribute node
var r=e.getAttributeNode(n);return r||(r=F.createAttribute(n),e.setAttributeNode(r)),r.nodeValue=t+""}},
// Apply the nodeHook to tabindex
H.attrHooks.tabindex.set=W.set,
// Set width and height to auto instead of 0 on empty string( Bug #8150 )
// This is for removals
H.each(["width","height"],function(e,t){H.attrHooks[t]=H.extend(H.attrHooks[t],{set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}})}),
// Set contenteditable to false on removals(#10429)
// Setting to empty string throws an error as an invalid value
H.attrHooks.contenteditable={get:W.get,set:function(e,t,n){""===t&&(t="false"),W.set(e,t,n)}}),
// Some attributes require a special call on IE
H.support.hrefNormalized||H.each(["href","src","width","height"],function(e,n){H.attrHooks[n]=H.extend(H.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null===r?t:r}})}),H.support.style||(H.attrHooks.style={get:function(e){
// Return undefined in the case of empty string
// Normalize to lowercase since IE uppercases css property names
return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),
// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
H.support.optSelected||(H.propHooks.selected=H.extend(H.propHooks.selected,{get:function(e){var t=e.parentNode;
// Make sure that it also works with optgroups, see #5701
return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),
// IE6/7 call enctype encoding
H.support.enctype||(H.propFix.enctype="encoding"),
// Radios and checkboxes getter/setter
H.support.checkOn||H.each(["radio","checkbox"],function(){H.valHooks[this]={get:function(e){
// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
return null===e.getAttribute("value")?"on":e.value}}}),H.each(["radio","checkbox"],function(){H.valHooks[this]=H.extend(H.valHooks[this],{set:function(e,t){if(H.isArray(t))return e.checked=H.inArray(H(e).val(),t)>=0}})});var Q=/^(?:textarea|input|select)$/i,K=/^([^\.]*)?(?:\.(.+))?$/,Z=/(?:^|\s)hover(\.\S+)?\b/,ee=/^key/,te=/^(?:mouse|contextmenu)|click/,ne=/^(?:focusinfocus|focusoutblur)$/,re=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,ie=function(e){var t=re.exec(e);
//   0  1    2   3
// [ _, tag, id, class ]
return t&&(t[1]=(t[1]||"").toLowerCase(),t[3]=t[3]&&new RegExp("(?:^|\\s)"+t[3]+"(?:\\s|$)")),t},oe=function(e,t){var n=e.attributes||{};return(!t[1]||e.nodeName.toLowerCase()===t[1])&&(!t[2]||(n.id||{}).value===t[2])&&(!t[3]||t[3].test((n["class"]||{}).value))},ae=function(e){return H.event.special.hover?e:e.replace(Z,"mouseenter$1 mouseleave$1")};/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
H.event={add:function(e,n,r,i,o){var a,s,l,u,c,f,d,p,h,m,g;
// Don't attach events to noData or text/comment nodes (allow plain objects tho)
if(3!==e.nodeType&&8!==e.nodeType&&n&&r&&(a=H._data(e))){for(
// Caller can pass in an object of custom data in lieu of the handler
r.handler&&(h=r,r=h.handler,o=h.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
r.guid||(r.guid=H.guid++),
// Init the element's event structure and main handler, if this is the first
l=a.events,l||(a.events=l={}),s=a.handle,s||(a.handle=s=function(e){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"==typeof H||e&&H.event.triggered===e.type?t:H.event.dispatch.apply(s.elem,arguments)},
// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
s.elem=e),
// Handle multiple events separated by a space
// jQuery(...).bind("mouseover mouseout", fn);
n=H.trim(ae(n)).split(" "),u=0;u<n.length;u++)c=K.exec(n[u])||[],f=c[1],d=(c[2]||"").split(".").sort(),
// If event changes its type, use the special event handlers for the changed type
g=H.event.special[f]||{},
// If selector defined, determine special event api type, otherwise given type
f=(o?g.delegateType:g.bindType)||f,
// Update special based on newly reset type
g=H.event.special[f]||{},
// handleObj is passed to all event handlers
p=H.extend({type:f,origType:c[1],data:i,handler:r,guid:r.guid,selector:o,quick:o&&ie(o),namespace:d.join(".")},h),
// Init the event handler queue if we're the first
m=l[f],m||(m=l[f]=[],m.delegateCount=0,
// Only use addEventListener/attachEvent if the special events handler returns false
g.setup&&g.setup.call(e,i,d,s)!==!1||(
// Bind the global event handler to the element
e.addEventListener?e.addEventListener(f,s,!1):e.attachEvent&&e.attachEvent("on"+f,s))),g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),
// Add to the element's handler list, delegates in front
o?m.splice(m.delegateCount++,0,p):m.push(p),
// Keep track of which events have ever been used, for event optimization
H.event.global[f]=!0;
// Nullify elem to prevent memory leaks in IE
e=null}},global:{},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,d,p,h,m,g,y=H.hasData(e)&&H._data(e);if(y&&(d=y.events)){for(
// Once for each type.namespace in types; type may be omitted
t=H.trim(ae(t||"")).split(" "),o=0;o<t.length;o++)
// Unbind all events (on this namespace, if provided) for the element
if(a=K.exec(t[o])||[],s=l=a[1],u=a[2],s){
// Remove matching events
for(p=H.event.special[s]||{},s=(r?p.delegateType:p.bindType)||s,m=d[s]||[],c=m.length,u=u?new RegExp("(^|\\.)"+u.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,f=0;f<m.length;f++)g=m[f],!i&&l!==g.origType||n&&n.guid!==g.guid||u&&!u.test(g.namespace)||r&&r!==g.selector&&("**"!==r||!g.selector)||(m.splice(f--,1),g.selector&&m.delegateCount--,p.remove&&p.remove.call(e,g));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
0===m.length&&c!==m.length&&(p.teardown&&p.teardown.call(e,u)!==!1||H.removeEvent(e,s,y.handle),delete d[s])}else for(s in d)H.event.remove(e,s+t[o],n,r,!0);
// Remove the expando if it's no longer used
H.isEmptyObject(d)&&(h=y.handle,h&&(h.elem=null),
// removeData also checks for emptiness and clears the expando if empty
// so use it instead of delete
H.removeData(e,["events","handle"],!0))}},
// Events that are safe to short-circuit if no handlers are attached.
// Native DOM events should not be added, they may have inline handlers.
customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,o){
// Don't do events on text and comment nodes
if(!i||3!==i.nodeType&&8!==i.nodeType){
// Event object or event type
var a,s,l,u,c,f,d,p,h,m,g=n.type||n,y=[];
// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(!ne.test(g+H.event.triggered)&&(g.indexOf("!")>=0&&(
// Exclusive events trigger only for the exact event (no namespaces)
g=g.slice(0,-1),s=!0),g.indexOf(".")>=0&&(
// Namespaced trigger; create a regexp to match event type in handle()
y=g.split("."),g=y.shift(),y.sort()),i&&!H.event.customEvent[g]||H.event.global[g]))
// Handle a global trigger
if(
// Caller can pass in an Event, Object, or just an event type string
n="object"==typeof n?
// jQuery.Event object
n[H.expando]?n:
// Object literal
new H.Event(g,n):
// Just the event type (string)
new H.Event(g),n.type=g,n.isTrigger=!0,n.exclusive=s,n.namespace=y.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,f=g.indexOf(":")<0?"on"+g:"",i){if(
// Clean up the event in case it is being reused
n.result=t,n.target||(n.target=i),
// Clone any incoming data and prepend the event, creating the handler arg list
r=null!=r?H.makeArray(r):[],r.unshift(n),
// Allow special events to draw outside the lines
d=H.event.special[g]||{},!d.trigger||d.trigger.apply(i,r)!==!1){if(
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
h=[[i,d.bindType||g]],!o&&!d.noBubble&&!H.isWindow(i)){for(m=d.delegateType||g,u=ne.test(m+g)?i:i.parentNode,c=null;u;u=u.parentNode)h.push([u,m]),c=u;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
c&&c===i.ownerDocument&&h.push([c.defaultView||c.parentWindow||e,m])}
// Fire handlers on the event path
for(l=0;l<h.length&&!n.isPropagationStopped();l++)u=h[l][0],n.type=h[l][1],p=(H._data(u,"events")||{})[n.type]&&H._data(u,"handle"),p&&p.apply(u,r),
// Note that this is a bare JS function and not a jQuery handler
p=f&&u[f],p&&H.acceptData(u)&&p.apply(u,r)===!1&&n.preventDefault();
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name name as the event.
// Can't use an .isFunction() check here because IE6/7 fails that test.
// Don't do default actions on window, that's where global variables be (#6170)
// IE<9 dies on focus/blur to hidden element (#1486)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return n.type=g,o||n.isDefaultPrevented()||d._default&&d._default.apply(i.ownerDocument,r)!==!1||"click"===g&&H.nodeName(i,"a")||!H.acceptData(i)||f&&i[g]&&("focus"!==g&&"blur"!==g||0!==n.target.offsetWidth)&&!H.isWindow(i)&&(c=i[f],c&&(i[f]=null),H.event.triggered=g,i[g](),H.event.triggered=t,c&&(i[f]=c)),n.result}}else{
// TODO: Stop taunting the data cache; remove global events and always attach to document
a=H.cache;for(l in a)a[l].events&&a[l].events[g]&&H.event.trigger(n,r,a[l].handle.elem,!0)}}},dispatch:function(n){
// Make a writable jQuery.Event from the native event object
n=H.event.fix(n||e.event);var r,i,o,a,s,l,u,c,f,d,p=(H._data(this,"events")||{})[n.type]||[],h=p.delegateCount,m=[].slice.call(arguments,0),g=!n.exclusive&&!n.namespace,y=H.event.special[n.type]||{},v=[];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
m[0]=n,n.delegateTarget=this,!y.preDispatch||y.preDispatch.call(this,n)!==!1){
// Determine handlers that should run if there are delegated events
// Avoid non-left-click bubbling in Firefox (#3861)
if(h&&(!n.button||"click"!==n.type))for(
// Pregenerate a single jQuery object for reuse with .is()
a=H(this),a.context=this.ownerDocument||this,o=n.target;o!=this;o=o.parentNode||this)
// Don't process events on disabled elements (#6911, #8165)
if(o.disabled!==!0){for(l={},c=[],a[0]=o,r=0;r<h;r++)f=p[r],d=f.selector,l[d]===t&&(l[d]=f.quick?oe(o,f.quick):a.is(d)),l[d]&&c.push(f);c.length&&v.push({elem:o,matches:c})}
// Run delegates first; they may want to stop propagation beneath us
for(
// Add the remaining (directly-bound) handlers
p.length>h&&v.push({elem:this,matches:p.slice(h)}),r=0;r<v.length&&!n.isPropagationStopped();r++)for(u=v[r],n.currentTarget=u.elem,i=0;i<u.matches.length&&!n.isImmediatePropagationStopped();i++)f=u.matches[i],
// Triggered event must either 1) be non-exclusive and have no namespace, or
// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
(g||!n.namespace&&!f.namespace||n.namespace_re&&n.namespace_re.test(f.namespace))&&(n.data=f.data,n.handleObj=f,s=((H.event.special[f.origType]||{}).handle||f.handler).apply(u.elem,m),s!==t&&(n.result=s,s===!1&&(n.preventDefault(),n.stopPropagation())));
// Call the postDispatch hook for the mapped type
return y.postDispatch&&y.postDispatch.call(this,n),n.result}},
// Includes some event props shared by KeyEvent and MouseEvent
// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){
// Add which for key events
return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;
// Calculate pageX/Y if missing and clientX/Y available
// Add relatedTarget, if necessary
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||F,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[H.expando])return e;
// Create a writable copy of the event object and normalize some properties
var n,r,i=e,o=H.event.fixHooks[e.type]||{},a=o.props?this.props.concat(o.props):this.props;for(e=H.Event(i),n=a.length;n;)r=a[--n],e[r]=i[r];
// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
// Target should not be a text node (#504, Safari)
// For mouse/key events; add metaKey if it's not there (#3368, IE6/7/8)
return e.target||(e.target=i.srcElement||F),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey===t&&(e.metaKey=e.ctrlKey),o.filter?o.filter(e,i):e},special:{ready:{
// Make sure the ready event is setup
setup:H.bindReady},load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){
// We only want to do this special case on windows
H.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){
// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var i=H.extend(new H.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?H.event.trigger(i,null,t):H.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},
// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
H.event.handle=H.event.dispatch,H.removeEvent=F.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},H.Event=function(e,t){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof H.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?s:a):this.type=e,t&&H.extend(this,t),this.timeStamp=e&&e.timeStamp||H.now(),void(this[H.expando]=!0)):new H.Event(e,t)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
H.Event.prototype={preventDefault:function(){this.isDefaultPrevented=s;var e=this.originalEvent;e&&(
// if preventDefault exists run it on the original event
e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=s;var e=this.originalEvent;e&&(
// if stopPropagation exists run it on the original event
e.stopPropagation&&e.stopPropagation(),
// otherwise set the cancelBubble property of the original event to true (IE)
e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=s,this.stopPropagation()},isDefaultPrevented:a,isPropagationStopped:a,isImmediatePropagationStopped:a},
// Create mouseenter/leave events using mouseover/out and event-time checks
H.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){H.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;o.selector;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===r||H.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),
// IE submit delegation
H.support.submitBubbles||(H.event.special.submit={setup:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Lazy-add a submit handler when a descendant form may potentially be submitted
return!H.nodeName(this,"form")&&void H.event.add(this,"click._submit keypress._submit",function(e){
// Node name check avoids a VML-related crash in IE (#9807)
var n=e.target,r=H.nodeName(n,"input")||H.nodeName(n,"button")?n.form:t;r&&!r._submit_attached&&(H.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),r._submit_attached=!0)})},postDispatch:function(e){
// If form was submitted by the user, bubble the event up the tree
e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&H.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){
// Only need this for delegated form submit events
// Only need this for delegated form submit events
// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
return!H.nodeName(this,"form")&&void H.event.remove(this,"._submit")}}),
// IE change delegation and checkbox/radio fix
H.support.changeBubbles||(H.event.special.change={setup:function(){
// IE doesn't fire change on a check/radio until blur; trigger it on click
// after a propertychange. Eat the blur-change in special.change.handle.
// This still fires onchange a second time for check/radio after blur.
// Delegated event; lazy-add a change handler on descendant inputs
return Q.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(H.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),H.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1,H.event.simulate("change",this,e,!0))})),!1):void H.event.add(this,"beforeactivate._change",function(e){var t=e.target;Q.test(t.nodeName)&&!t._change_attached&&(H.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||H.event.simulate("change",this.parentNode,e,!0)}),t._change_attached=!0)})},handle:function(e){var t=e.target;
// Swallow native change events from checkbox/radio, we already triggered them above
if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return H.event.remove(this,"._change"),Q.test(this.nodeName)}}),
// Create "bubbling" focus and blur events
H.support.focusinBubbles||H.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler while someone wants focusin/focusout
var n=0,r=function(e){H.event.simulate(t,e.target,H.event.fix(e),!0)};H.event.special[t]={setup:function(){0===n++&&F.addEventListener(e,r,!0)},teardown:function(){0===--n&&F.removeEventListener(e,r,!0)}}}),H.fn.extend({on:function(e,n,r,i,/*INTERNAL*/o){var s,l;
// Types can be a map of types/handlers
if("object"==typeof e){
// ( types-Object, selector, data )
"string"!=typeof n&&(// && selector != null
// ( types-Object, data )
r=r||n,n=t);for(l in e)this.on(l,n,r,e[l],o);return this}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=t):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=t):(
// ( types, data, fn )
i=r,r=n,n=t)),i===!1)i=a;else if(!i)return this;
// Use same guid so caller can remove using origFn
return 1===o&&(s=i,i=function(e){
// Can use an empty set, since event contains the info
return H().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=H.guid++)),this.each(function(){H.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){if(e&&e.preventDefault&&e.handleObj){
// ( event )  dispatched jQuery.Event
var i=e.handleObj;return H(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this}if("object"==typeof e){
// ( types-object [, selector] )
for(var o in e)this.off(o,n,e[o]);return this}
// ( types [, fn] )
return n!==!1&&"function"!=typeof n||(r=n,n=t),r===!1&&(r=a),this.each(function(){H.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return H(this.context).on(e,this.selector,t,n),this},die:function(e,t){return H(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1==arguments.length?this.off(e,"**"):this.off(t,e,n)},trigger:function(e,t){return this.each(function(){H.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return H.event.trigger(e,t,this[0],!0)},toggle:function(e){
// Save reference to arguments for access in closure
var t=arguments,n=e.guid||H.guid++,r=0,i=function(n){
// Figure out which function to execute
var i=(H._data(this,"lastToggle"+e.guid)||0)%r;
// and execute the function
// Make sure that clicks stop
return H._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};for(
// link all the functions, so any of them can unbind this click handler
i.guid=n;r<t.length;)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),H.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
// Handle event binding
H.fn[t]=function(e,n){return null==n&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},H.attrFn&&(H.attrFn[t]=!0),ee.test(t)&&(H.event.fixHooks[t]=H.event.keyHooks),te.test(t)&&(H.event.fixHooks[t]=H.event.mouseHooks)}),/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
function(){function e(e,t,n,r,o,a){for(var s=0,l=r.length;s<l;s++){var u=r[s];if(u){var c=!1;for(u=u[e];u;){if(u[i]===n){c=r[u.sizset];break}if(1!==u.nodeType||a||(u[i]=n,u.sizset=s),u.nodeName.toLowerCase()===t){c=u;break}u=u[e]}r[s]=c}}}function n(e,t,n,r,o,a){for(var s=0,l=r.length;s<l;s++){var u=r[s];if(u){var c=!1;for(u=u[e];u;){if(u[i]===n){c=r[u.sizset];break}if(1===u.nodeType)if(a||(u[i]=n,u.sizset=s),"string"!=typeof t){if(u===t){c=!0;break}}else if(d.filter(t,[u]).length>0){c=u;break}u=u[e]}r[s]=c}}}var r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i="sizcache"+(Math.random()+"").replace(".",""),o=0,a=Object.prototype.toString,s=!1,l=!0,u=/\\/g,c=/\r\n/g,f=/\W/;
// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0,0].sort(function(){return l=!1,0});var d=function(e,t,n,i){n=n||[],t=t||F;var o=t;if(1!==t.nodeType&&9!==t.nodeType)return[];if(!e||"string"!=typeof e)return n;var s,l,u,c,f,p,g,y,b=!0,x=d.isXML(t),T=[],N=e;
// Reset the position of the chunker regexp (start from head)
do if(r.exec(""),s=r.exec(N),s&&(N=s[3],T.push(s[1]),s[2])){c=s[3];break}while(s);if(T.length>1&&m.exec(e))if(2===T.length&&h.relative[T[0]])l=w(T[0]+T[1],t,i);else for(l=h.relative[T[0]]?[t]:d(T.shift(),t);T.length;)e=T.shift(),h.relative[e]&&(e+=T.shift()),l=w(e,l,i);else if(
// Take a shortcut and set the context if the root selector is an ID
// (but not if it'll be faster if the inner selector is an ID)
!i&&T.length>1&&9===t.nodeType&&!x&&h.match.ID.test(T[0])&&!h.match.ID.test(T[T.length-1])&&(f=d.find(T.shift(),t,x),t=f.expr?d.filter(f.expr,f.set)[0]:f.set[0]),t)for(f=i?{expr:T.pop(),set:v(i)}:d.find(T.pop(),1!==T.length||"~"!==T[0]&&"+"!==T[0]||!t.parentNode?t:t.parentNode,x),l=f.expr?d.filter(f.expr,f.set):f.set,T.length>0?u=v(l):b=!1;T.length;)p=T.pop(),g=p,h.relative[p]?g=T.pop():p="",null==g&&(g=t),h.relative[p](u,g,x);else u=T=[];if(u||(u=l),u||d.error(p||e),"[object Array]"===a.call(u))if(b)if(t&&1===t.nodeType)for(y=0;null!=u[y];y++)u[y]&&(u[y]===!0||1===u[y].nodeType&&d.contains(t,u[y]))&&n.push(l[y]);else for(y=0;null!=u[y];y++)u[y]&&1===u[y].nodeType&&n.push(l[y]);else n.push.apply(n,u);else v(u,n);return c&&(d(c,o,n,i),d.uniqueSort(n)),n};d.uniqueSort=function(e){if(x&&(s=l,e.sort(x),s))for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1);return e},d.matches=function(e,t){return d(e,null,null,t)},d.matchesSelector=function(e,t){return d(t,null,null,[e]).length>0},d.find=function(e,t,n){var r,i,o,a,s,l;if(!e)return[];for(i=0,o=h.order.length;i<o;i++)if(s=h.order[i],(a=h.leftMatch[s].exec(e))&&(l=a[1],a.splice(1,1),"\\"!==l.substr(l.length-1)&&(a[1]=(a[1]||"").replace(u,""),r=h.find[s](a,t,n),null!=r))){e=e.replace(h.match[s],"");break}return r||(r="undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName("*"):[]),{set:r,expr:e}},d.filter=function(e,n,r,i){for(var o,a,s,l,u,c,f,p,m,g=e,y=[],v=n,b=n&&n[0]&&d.isXML(n[0]);e&&n.length;){for(s in h.filter)if(null!=(o=h.leftMatch[s].exec(e))&&o[2]){if(c=h.filter[s],f=o[1],a=!1,o.splice(1,1),"\\"===f.substr(f.length-1))continue;if(v===y&&(y=[]),h.preFilter[s])if(o=h.preFilter[s](o,v,r,y,i,b)){if(o===!0)continue}else a=l=!0;if(o)for(p=0;null!=(u=v[p]);p++)u&&(l=c(u,o,p,v),m=i^l,r&&null!=l?m?a=!0:v[p]=!1:m&&(y.push(u),a=!0));if(l!==t){if(r||(v=y),e=e.replace(h.match[s],""),!a)return[];break}}
// Improper expression
if(e===g){if(null!=a)break;d.error(e)}g=e}return v},d.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};/**
 * Utility function for retreiving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
var p=d.getText=function(e){var t,n,r=e.nodeType,i="";if(r){if(1===r||9===r||11===r){
// Use textContent || innerText for elements
if("string"==typeof e.textContent)return e.textContent;if("string"==typeof e.innerText)
// Replace IE's carriage returns
return e.innerText.replace(c,"");
// Traverse it's children
for(e=e.firstChild;e;e=e.nextSibling)i+=p(e)}else if(3===r||4===r)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(t=0;n=e[t];t++)
// Do not traverse comment nodes
8!==n.nodeType&&(i+=p(n));return i},h=d.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(e,t){var n="string"==typeof t,r=n&&!f.test(t),i=n&&!r;r&&(t=t.toLowerCase());for(var o,a=0,s=e.length;a<s;a++)if(o=e[a]){for(;(o=o.previousSibling)&&1!==o.nodeType;);e[a]=i||o&&o.nodeName.toLowerCase()===t?o||!1:o===t}i&&d.filter(t,e,!0)},">":function(e,t){var n,r="string"==typeof t,i=0,o=e.length;if(r&&!f.test(t)){for(t=t.toLowerCase();i<o;i++)if(n=e[i]){var a=n.parentNode;e[i]=a.nodeName.toLowerCase()===t&&a}}else{for(;i<o;i++)n=e[i],n&&(e[i]=r?n.parentNode:n.parentNode===t);r&&d.filter(t,e,!0)}},"":function(t,r,i){var a,s=o++,l=n;"string"!=typeof r||f.test(r)||(r=r.toLowerCase(),a=r,l=e),l("parentNode",r,s,t,a,i)},"~":function(t,r,i){var a,s=o++,l=n;"string"!=typeof r||f.test(r)||(r=r.toLowerCase(),a=r,l=e),l("previousSibling",r,s,t,a,i)}},find:{ID:function(e,t,n){if("undefined"!=typeof t.getElementById&&!n){var r=t.getElementById(e[1]);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return r&&r.parentNode?[r]:[]}},NAME:function(e,t){if("undefined"!=typeof t.getElementsByName){for(var n=[],r=t.getElementsByName(e[1]),i=0,o=r.length;i<o;i++)r[i].getAttribute("name")===e[1]&&n.push(r[i]);return 0===n.length?null:n}},TAG:function(e,t){if("undefined"!=typeof t.getElementsByTagName)return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,r,i,o){if(e=" "+e[1].replace(u,"")+" ",o)return e;for(var a,s=0;null!=(a=t[s]);s++)a&&(i^(a.className&&(" "+a.className+" ").replace(/[\t\n\r]/g," ").indexOf(e)>=0)?n||r.push(a):n&&(t[s]=!1));return!1},ID:function(e){return e[1].replace(u,"")},TAG:function(e,t){return e[1].replace(u,"").toLowerCase()},CHILD:function(e){if("nth"===e[1]){e[2]||d.error(e[0]),e[2]=e[2].replace(/^\+|\s*/g,"");
// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
var t=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===e[2]&&"2n"||"odd"===e[2]&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);
// calculate the numbers (first)n+(last) including if they are negative
e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}else e[2]&&d.error(e[0]);
// TODO: Move to normal caching system
return e[0]=o++,e},ATTR:function(e,t,n,r,i,o){var a=e[1]=e[1].replace(u,"");
// Handle if an un-quoted value was used
return!o&&h.attrMap[a]&&(e[1]=h.attrMap[a]),e[4]=(e[4]||e[5]||"").replace(u,""),"~="===e[2]&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(e,t,n,i,o){if("not"===e[1]){
// If we're dealing with a complex expression, or a simple one
if(!((r.exec(e[3])||"").length>1||/^\w/.test(e[3]))){var a=d.filter(e[3],t,n,!0^o);return n||i.push.apply(i,a),!1}e[3]=d(e[3],null,null,t)}else if(h.match.POS.test(e[0])||h.match.CHILD.test(e[0]))return!0;return e},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&"hidden"!==e.type},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!d(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){var t=e.getAttribute("type"),n=e.type;
// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
// use getAttribute instead to test this case
return"input"===e.nodeName.toLowerCase()&&"text"===n&&(t===n||null===t)},radio:function(e){return"input"===e.nodeName.toLowerCase()&&"radio"===e.type},checkbox:function(e){return"input"===e.nodeName.toLowerCase()&&"checkbox"===e.type},file:function(e){return"input"===e.nodeName.toLowerCase()&&"file"===e.type},password:function(e){return"input"===e.nodeName.toLowerCase()&&"password"===e.type},submit:function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&"submit"===e.type},image:function(e){return"input"===e.nodeName.toLowerCase()&&"image"===e.type},reset:function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&"reset"===e.type},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t){return 0===t},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],o=h.filters[i];if(o)return o(e,n,t,r);if("contains"===i)return(e.textContent||e.innerText||p([e])||"").indexOf(t[3])>=0;if("not"===i){for(var a=t[3],s=0,l=a.length;s<l;s++)if(a[s]===e)return!1;return!0}d.error(i)},CHILD:function(e,t){var n,r,o,a,s,l,u=t[1],c=e;switch(u){case"only":case"first":for(;c=c.previousSibling;)if(1===c.nodeType)return!1;if("first"===u)return!0;c=e;/* falls through */
case"last":for(;c=c.nextSibling;)if(1===c.nodeType)return!1;return!0;case"nth":if(n=t[2],r=t[3],1===n&&0===r)return!0;if(o=t[0],a=e.parentNode,a&&(a[i]!==o||!e.nodeIndex)){for(s=0,c=a.firstChild;c;c=c.nextSibling)1===c.nodeType&&(c.nodeIndex=++s);a[i]=o}return l=e.nodeIndex-r,0===n?0===l:l%n===0&&l/n>=0}},ID:function(e,t){return 1===e.nodeType&&e.getAttribute("id")===t},TAG:function(e,t){return"*"===t&&1===e.nodeType||!!e.nodeName&&e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1],r=d.attr?d.attr(e,n):h.attrHandle[n]?h.attrHandle[n](e):null!=e[n]?e[n]:e.getAttribute(n),i=r+"",o=t[2],a=t[4];return null==r?"!="===o:!o&&d.attr?null!=r:"="===o?i===a:"*="===o?i.indexOf(a)>=0:"~="===o?(" "+i+" ").indexOf(a)>=0:a?"!="===o?i!==a:"^="===o?0===i.indexOf(a):"$="===o?i.substr(i.length-a.length)===a:"|="===o&&(i===a||i.substr(0,a.length+1)===a+"-"):i&&r!==!1},POS:function(e,t,n,r){var i=t[2],o=h.setFilters[i];if(o)return o(e,n,t,r)}}},m=h.match.POS,g=function(e,t){return"\\"+(t-0+1)};for(var y in h.match)h.match[y]=new RegExp(h.match[y].source+/(?![^\[]*\])(?![^\(]*\))/.source),h.leftMatch[y]=new RegExp(/(^(?:.|\r|\n)*?)/.source+h.match[y].source.replace(/\\(\d+)/g,g));
// Expose origPOS
// "global" as in regardless of relation to brackets/parens
h.match.globalPOS=m;var v=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e};
// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try{Array.prototype.slice.call(F.documentElement.childNodes,0)[0].nodeType}catch(b){v=function(e,t){var n=0,r=t||[];if("[object Array]"===a.call(e))Array.prototype.push.apply(r,e);else if("number"==typeof e.length)for(var i=e.length;n<i;n++)r.push(e[n]);else for(;e[n];n++)r.push(e[n]);return r}}var x,T;F.documentElement.compareDocumentPosition?x=function(e,t){return e===t?(s=!0,0):e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t)?-1:1:e.compareDocumentPosition?-1:1}:(x=function(e,t){
// The nodes are identical, we can exit early
if(e===t)return s=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],o=[],a=e.parentNode,l=t.parentNode,u=a;
// If the nodes are siblings (or identical) we can do a quick check
if(a===l)return T(e,t);if(!a)return-1;if(!l)return 1;
// Otherwise they're somewhere else in the tree so we need
// to build up a full list of the parentNodes for comparison
for(;u;)i.unshift(u),u=u.parentNode;for(u=l;u;)o.unshift(u),u=u.parentNode;n=i.length,r=o.length;
// Start walking down the tree looking for a discrepancy
for(var c=0;c<n&&c<r;c++)if(i[c]!==o[c])return T(i[c],o[c]);
// We ended someplace up the tree so do a sibling check
return c===n?T(e,o[c],-1):T(i[c],t,1)},T=function(e,t,n){if(e===t)return n;for(var r=e.nextSibling;r;){if(r===t)return-1;r=r.nextSibling}return 1}),
// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
function(){
// We're going to inject a fake input element with a specified name
var e=F.createElement("div"),n="script"+(new Date).getTime(),r=F.documentElement;e.innerHTML="<a name='"+n+"'/>",
// Inject it into the root element, check its status, and remove it quickly
r.insertBefore(e,r.firstChild),
// The workaround has to do additional checks after a getElementById
// Which slows things down for other browsers (hence the branching)
F.getElementById(n)&&(h.find.ID=function(e,n,r){if("undefined"!=typeof n.getElementById&&!r){var i=n.getElementById(e[1]);return i?i.id===e[1]||"undefined"!=typeof i.getAttributeNode&&i.getAttributeNode("id").nodeValue===e[1]?[i]:t:[]}},h.filter.ID=function(e,t){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return 1===e.nodeType&&n&&n.nodeValue===t}),r.removeChild(e),
// release memory in IE
r=e=null}(),function(){
// Check to see if the browser returns only elements
// when doing getElementsByTagName("*")
// Create a fake element
var e=F.createElement("div");e.appendChild(F.createComment("")),
// Make sure no comments are found
e.getElementsByTagName("*").length>0&&(h.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);
// Filter out possible comments
if("*"===e[1]){for(var r=[],i=0;n[i];i++)1===n[i].nodeType&&r.push(n[i]);n=r}return n}),
// Check to see if an attribute returns normalized href attributes
e.innerHTML="<a href='#'></a>",e.firstChild&&"undefined"!=typeof e.firstChild.getAttribute&&"#"!==e.firstChild.getAttribute("href")&&(h.attrHandle.href=function(e){return e.getAttribute("href",2)}),
// release memory in IE
e=null}(),F.querySelectorAll&&!function(){var e=d,t=F.createElement("div"),n="__sizzle__";
// Safari can't handle uppercase or unicode characters when
// in quirks mode.
if(t.innerHTML="<p class='TEST'></p>",!t.querySelectorAll||0!==t.querySelectorAll(".TEST").length){d=function(t,r,i,o){
// Only use querySelectorAll on non-XML documents
// (ID selectors don't work in non-HTML documents)
if(r=r||F,!o&&!d.isXML(r)){
// See if we find a selector to speed up
var a=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);if(a&&(1===r.nodeType||9===r.nodeType)){
// Speed-up: Sizzle("TAG")
if(a[1])return v(r.getElementsByTagName(t),i);if(a[2]&&h.find.CLASS&&r.getElementsByClassName)return v(r.getElementsByClassName(a[2]),i)}if(9===r.nodeType){
// Speed-up: Sizzle("body")
// The body element only exists once, optimize finding it
if("body"===t&&r.body)return v([r.body],i);if(a&&a[3]){var s=r.getElementById(a[3]);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
if(!s||!s.parentNode)return v([],i);
// Handle the case where IE and Opera return items
// by name instead of ID
if(s.id===a[3])return v([s],i)}try{return v(r.querySelectorAll(t),i)}catch(l){}}else if(1===r.nodeType&&"object"!==r.nodeName.toLowerCase()){var u=r,c=r.getAttribute("id"),f=c||n,p=r.parentNode,m=/^\s*[+~]/.test(t);c?f=f.replace(/'/g,"\\$&"):r.setAttribute("id",f),m&&p&&(r=r.parentNode);try{if(!m||p)return v(r.querySelectorAll("[id='"+f+"'] "+t),i)}catch(g){}finally{c||u.removeAttribute("id")}}}return e(t,r,i,o)};for(var r in e)d[r]=e[r];
// release memory in IE
t=null}}(),function(){var e=F.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(t){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9 fails this)
var n=!t.call(F.createElement("div"),"div"),r=!1;try{
// This should fail with an exception
// Gecko does not error, returns false instead
t.call(F.documentElement,"[test!='']:sizzle")}catch(i){r=!0}d.matchesSelector=function(e,i){if(
// Make sure that attribute selectors are quoted
i=i.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!d.isXML(e))try{if(r||!h.match.PSEUDO.test(i)&&!/!=/.test(i)){var o=t.call(e,i);
// IE 9's matchesSelector returns false on disconnected nodes
if(o||!n||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9, so check for that
e.document&&11!==e.document.nodeType)return o}}catch(a){}return d(i,null,null,[e]).length>0}}}(),function(){var e=F.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>",
// Opera can't find a second classname (in 9.6)
// Also, make sure that getElementsByClassName actually exists
e.getElementsByClassName&&0!==e.getElementsByClassName("e").length&&(
// Safari caches class attributes, doesn't catch changes (in 3.2)
e.lastChild.className="e",1!==e.getElementsByClassName("e").length&&(h.order.splice(1,0,"CLASS"),h.find.CLASS=function(e,t,n){if("undefined"!=typeof t.getElementsByClassName&&!n)return t.getElementsByClassName(e[1])},
// release memory in IE
e=null))}(),F.documentElement.contains?d.contains=function(e,t){return e!==t&&(!e.contains||e.contains(t))}:F.documentElement.compareDocumentPosition?d.contains=function(e,t){return!!(16&e.compareDocumentPosition(t))}:d.contains=function(){return!1},d.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=(e?e.ownerDocument||e:0).documentElement;return!!t&&"HTML"!==t.nodeName};var w=function(e,t,n){
// Position selectors must be done after the filter
// And so must :not(positional) so we move all PSEUDOs to the end
for(var r,i=[],o="",a=t.nodeType?[t]:t;r=h.match.PSEUDO.exec(e);)o+=r[0],e=e.replace(h.match.PSEUDO,"");e=h.relative[e]?e+"*":e;for(var s=0,l=a.length;s<l;s++)d(e,a[s],i,n);return d.filter(o,i)};
// EXPOSE
// Override sizzle attribute retrieval
d.attr=H.attr,d.selectors.attrMap={},H.find=d,H.expr=d.selectors,H.expr[":"]=H.expr.filters,H.unique=d.uniqueSort,H.text=d.getText,H.isXMLDoc=d.isXML,H.contains=d.contains}();var se=/Until$/,le=/^(?:parents|prevUntil|prevAll)/,
// Note: This RegExp should be improved, or likely pulled from Sizzle
ue=/,/,ce=/^.[^:#\[\.,]*$/,fe=Array.prototype.slice,de=H.expr.match.globalPOS,
// methods guaranteed to produce a unique set when starting from a unique set
pe={children:!0,contents:!0,next:!0,prev:!0};H.fn.extend({find:function(e){var t,n,r=this;if("string"!=typeof e)return H(e).filter(function(){for(t=0,n=r.length;t<n;t++)if(H.contains(r[t],this))return!0});var i,o,a,s=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++)if(i=s.length,H.find(e,this[t],s),t>0)
// Make sure that the results are unique
for(o=i;o<s.length;o++)for(a=0;a<i;a++)if(s[a]===s[o]){s.splice(o--,1);break}return s},has:function(e){var t=H(e);return this.filter(function(){for(var e=0,n=t.length;e<n;e++)if(H.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(u(this,e,!1),"not",e)},filter:function(e){return this.pushStack(u(this,e,!0),"filter",e)},is:function(e){
// If this is a positional selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!e&&("string"==typeof e?de.test(e)?H(e,this.context).index(this[0])>=0:H.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r,i=[],o=this[0];
// Array (deprecated as of jQuery 1.7)
if(H.isArray(e)){for(var a=1;o&&o.ownerDocument&&o!==t;){for(n=0;n<e.length;n++)H(o).is(e[n])&&i.push({selector:e[n],elem:o,level:a});o=o.parentNode,a++}return i}
// String
var s=de.test(e)||"string"!=typeof e?H(e,t||this.context):0;for(n=0,r=this.length;n<r;n++)for(o=this[n];o;){if(s?s.index(o)>-1:H.find.matchesSelector(o,e)){i.push(o);break}if(o=o.parentNode,!o||!o.ownerDocument||o===t||11===o.nodeType)break}return i=i.length>1?H.unique(i):i,this.pushStack(i,"closest",e)},
// Determine the position of an element within
// the matched set of elements
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?H.inArray(this[0],H(e)):H.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n="string"==typeof e?H(e,t):H.makeArray(e&&e.nodeType?[e]:e),r=H.merge(this.get(),n);return this.pushStack(l(n[0])||l(r[0])?r:H.unique(r))},andSelf:function(){return this.add(this.prevObject)}}),H.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return H.dir(e,"parentNode")},parentsUntil:function(e,t,n){return H.dir(e,"parentNode",n)},next:function(e){return H.nth(e,2,"nextSibling")},prev:function(e){return H.nth(e,2,"previousSibling")},nextAll:function(e){return H.dir(e,"nextSibling")},prevAll:function(e){return H.dir(e,"previousSibling")},nextUntil:function(e,t,n){return H.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return H.dir(e,"previousSibling",n)},siblings:function(e){return H.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return H.sibling(e.firstChild)},contents:function(e){return H.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:H.makeArray(e.childNodes)}},function(e,t){H.fn[e]=function(n,r){var i=H.map(this,t,n);return se.test(e)||(r=n),r&&"string"==typeof r&&(i=H.filter(r,i)),i=this.length>1&&!pe[e]?H.unique(i):i,(this.length>1||ue.test(r))&&le.test(e)&&(i=i.reverse()),this.pushStack(i,e,fe.call(arguments).join(","))}}),H.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?H.find.matchesSelector(t[0],e)?[t[0]]:[]:H.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!H(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},nth:function(e,t,n,r){t=t||1;for(var i=0;e&&(1!==e.nodeType||++i!==t);e=e[n]);return e},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var he="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",me=/ jQuery\d+="(?:\d+|null)"/g,ge=/^\s+/,ye=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ve=/<([\w:]+)/,be=/<tbody/i,xe=/<|&#?\w+;/,Te=/<(?:script|style)/i,we=/<(?:script|object|embed|option|style)/i,Ne=new RegExp("<(?:"+he+")[\\s/>]","i"),
// checked="checked" or checked
Ce=/checked\s*(?:[^=]|=\s*.checked.)/i,Ee=/\/(java|ecma)script/i,ke=/^\s*<!(?:\[CDATA\[|\-\-)/,Se={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ae=c(F);Se.optgroup=Se.option,Se.tbody=Se.tfoot=Se.colgroup=Se.caption=Se.thead,Se.th=Se.td,
// IE can't serialize <link> and <script> tags normally
H.support.htmlSerialize||(Se._default=[1,"div<div>","</div>"]),H.fn.extend({text:function(e){return H.access(this,function(e){return e===t?H.text(this):this.empty().append((this[0]&&this[0].ownerDocument||F).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(H.isFunction(e))return this.each(function(t){H(this).wrapAll(e.call(this,t))});if(this[0]){
// The elements to wrap the target around
var t=H(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return H.isFunction(e)?this.each(function(t){H(this).wrapInner(e.call(this,t))}):this.each(function(){var t=H(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=H.isFunction(e);return this.each(function(n){H(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){H.nodeName(this,"body")||H(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){1===this.nodeType&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){1===this.nodeType&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=H.clean(arguments);return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=this.pushStack(this,"after",arguments);return e.push.apply(e,H.clean(arguments)),e}},
// keepData is for internal use only--do not document
remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)e&&!H.filter(e,[n]).length||(t||1!==n.nodeType||(H.cleanData(n.getElementsByTagName("*")),H.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)
// Remove any remaining nodes
for(
// Remove element nodes and prevent memory leaks
1===e.nodeType&&H.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild);return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return H.clone(this,e,t)})},html:function(e){return H.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(me,""):null;if("string"==typeof e&&!Te.test(e)&&(H.support.leadingWhitespace||!ge.test(e))&&!Se[(ve.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(ye,"<$1></$2>");try{for(;r<i;r++)
// Remove element nodes and prevent memory leaks
n=this[r]||{},1===n.nodeType&&(H.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){
// Make sure that the elements are removed from the DOM before they are inserted
// this can help fix replacing a parent with child elements
return this[0]&&this[0].parentNode?H.isFunction(e)?this.each(function(t){var n=H(this),r=n.html();n.replaceWith(e.call(this,t,r))}):("string"!=typeof e&&(e=H(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;H(this).remove(),t?H(t).before(e):H(n).append(e)})):this.length?this.pushStack(H(H.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){var i,o,a,s,l=e[0],u=[];
// We can't cloneNode fragments that contain checked, in WebKit
if(!H.support.checkClone&&3===arguments.length&&"string"==typeof l&&Ce.test(l))return this.each(function(){H(this).domManip(e,n,r,!0)});if(H.isFunction(l))return this.each(function(i){var o=H(this);e[0]=l.call(this,i,n?o.html():t),o.domManip(e,n,r)});if(this[0]){if(s=l&&l.parentNode,
// If we're in a fragment, just use that instead of building a new one
i=H.support.parentNode&&s&&11===s.nodeType&&s.childNodes.length===this.length?{fragment:s}:H.buildFragment(e,this,u),a=i.fragment,o=1===a.childNodes.length?a=a.firstChild:a.firstChild){n=n&&H.nodeName(o,"tr");for(var c=0,d=this.length,p=d-1;c<d;c++)r.call(n?f(this[c],o):this[c],
// Make sure that we do not leak memory by inadvertently discarding
// the original fragment (which might have attached data) instead of
// using it; in addition, use the original fragment object for the last
// item instead of first because it can end up being emptied incorrectly
// in certain situations (Bug #8070).
// Fragments from the fragment cache must always be cloned and never used
// in place.
i.cacheable||d>1&&c<p?H.clone(a,!0,!0):a)}u.length&&H.each(u,function(e,t){t.src?H.ajax({type:"GET",global:!1,url:t.src,async:!1,dataType:"script"}):H.globalEval((t.text||t.textContent||t.innerHTML||"").replace(ke,"/*$0*/")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),H.buildFragment=function(e,t,n){var r,i,o,a,s=e[0];
// nodes may contain either an explicit document object,
// a jQuery collection or context object.
// If nodes[0] contains a valid object to assign to doc
// Ensure that an attr object doesn't incorrectly stand in as a document object
// Chrome and Firefox seem to allow this to occur and will throw exception
// Fixes #8950
// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
// Cloning options loses the selected state, so don't cache them
// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
return t&&t[0]&&(a=t[0].ownerDocument||t[0]),a.createDocumentFragment||(a=F),!(1===e.length&&"string"==typeof s&&s.length<512&&a===F&&"<"===s.charAt(0))||we.test(s)||!H.support.checkClone&&Ce.test(s)||!H.support.html5Clone&&Ne.test(s)||(i=!0,o=H.fragments[s],o&&1!==o&&(r=o)),r||(r=a.createDocumentFragment(),H.clean(e,a,r,n)),i&&(H.fragments[s]=o?r:1),{fragment:r,cacheable:i}},H.fragments={},H.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){H.fn[e]=function(n){var r=[],i=H(n),o=1===this.length&&this[0].parentNode;if(o&&11===o.nodeType&&1===o.childNodes.length&&1===i.length)return i[t](this[0]),this;for(var a=0,s=i.length;a<s;a++){var l=(a>0?this.clone(!0):this).get();H(i[a])[t](l),r=r.concat(l)}return this.pushStack(r,e,i.selector)}}),H.extend({clone:function(e,t,n){var r,i,o,
// IE<=8 does not properly clone detached, unknown element nodes
a=H.support.html5Clone||H.isXMLDoc(e)||!Ne.test("<"+e.nodeName+">")?e.cloneNode(!0):y(e);if(!(H.support.noCloneEvent&&H.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||H.isXMLDoc(e)))
// Weird iteration because IE will replace the length property
// with an element if you are cloning the body and one of the
// elements on the page has a name or id of "length"
for(
// IE copies events bound via attachEvent when using cloneNode.
// Calling detachEvent on the clone will also remove the events
// from the original. In order to get around this, we use some
// proprietary methods to clear the events. Thanks to MooTools
// guys for this hotness.
p(e,a),
// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
r=h(e),i=h(a),o=0;r[o];++o)
// Ensure that the destination node is not null; Fixes #9587
i[o]&&p(r[o],i[o]);
// Copy the events from the original to the clone
if(t&&(d(e,a),n))for(r=h(e),i=h(a),o=0;r[o];++o)d(r[o],i[o]);
// Return the cloned set
return r=i=null,a},clean:function(e,t,n,r){var i,o,a,s=[];t=t||F,
// !context.createElement fails in IE with an error but returns typeof 'object'
"undefined"==typeof t.createElement&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||F);for(var l,u=0;null!=(l=e[u]);u++)if("number"==typeof l&&(l+=""),l){
// Convert html string into DOM nodes
if("string"==typeof l)if(xe.test(l)){
// Fix "XHTML"-style tags in all browsers
l=l.replace(ye,"<$1></$2>");
// Trim whitespace, otherwise indexOf won't work as expected
var f,d=(ve.exec(l)||["",""])[1].toLowerCase(),p=Se[d]||Se._default,h=p[0],m=t.createElement("div"),y=Ae.childNodes;
// Move to the right depth
for(
// Append wrapper element to unknown element safe doc fragment
t===F?
// Use the fragment we've already created for this document
Ae.appendChild(m):
// Use a fragment created with the owner document
c(t).appendChild(m),
// Go to html and back, then peel off extra wrappers
m.innerHTML=p[1]+l+p[2];h--;)m=m.lastChild;
// Remove IE's autoinserted <tbody> from table fragments
if(!H.support.tbody){
// String was a <table>, *may* have spurious <tbody>
var v=be.test(l),b="table"!==d||v?
// String was a bare <thead> or <tfoot>
"<table>"!==p[1]||v?[]:m.childNodes:m.firstChild&&m.firstChild.childNodes;for(a=b.length-1;a>=0;--a)H.nodeName(b[a],"tbody")&&!b[a].childNodes.length&&b[a].parentNode.removeChild(b[a])}
// IE completely kills leading whitespace when innerHTML is used
!H.support.leadingWhitespace&&ge.test(l)&&m.insertBefore(t.createTextNode(ge.exec(l)[0]),m.firstChild),l=m.childNodes,
// Clear elements from DocumentFragment (safeFragment or otherwise)
// to avoid hoarding elements. Fixes #11356
m&&(m.parentNode.removeChild(m),
// Guard against -1 index exceptions in FF3.6
y.length>0&&(f=y[y.length-1],f&&f.parentNode&&f.parentNode.removeChild(f)))}else l=t.createTextNode(l);
// Resets defaultChecked for any radios and checkboxes
// about to be appended to the DOM in IE 6/7 (#8060)
var x;if(!H.support.appendChecked)if(l[0]&&"number"==typeof(x=l.length))for(a=0;a<x;a++)g(l[a]);else g(l);l.nodeType?s.push(l):s=H.merge(s,l)}if(n)for(i=function(e){return!e.type||Ee.test(e.type)},u=0;s[u];u++)if(o=s[u],r&&H.nodeName(o,"script")&&(!o.type||Ee.test(o.type)))r.push(o.parentNode?o.parentNode.removeChild(o):o);else{if(1===o.nodeType){var T=H.grep(o.getElementsByTagName("script"),i);s.splice.apply(s,[u+1,0].concat(T))}n.appendChild(o)}return s},cleanData:function(e){for(var t,n,r,i=H.cache,o=H.event.special,a=H.support.deleteExpando,s=0;null!=(r=e[s]);s++)if((!r.nodeName||!H.noData[r.nodeName.toLowerCase()])&&(n=r[H.expando])){if(t=i[n],t&&t.events){for(var l in t.events)o[l]?H.event.remove(r,l):H.removeEvent(r,l,t.handle);
// Null the DOM reference to avoid IE6/7/8 leak (#7054)
t.handle&&(t.handle.elem=null)}a?delete r[H.expando]:r.removeAttribute&&r.removeAttribute(H.expando),delete i[n]}}});var Le,De,je,Fe=/alpha\([^)]*\)/i,Me=/opacity=([^)]*)/,
// fixed for IE9, see #8346
_e=/([A-Z]|^ms)/g,He=/^[\-+]?(?:\d*\.)?\d+$/i,Oe=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Be=/^([\-+])=([\-+.\de]+)/,Pe=/^margin/,qe={position:"absolute",visibility:"hidden",display:"block"},
// order is important!
We=["Top","Right","Bottom","Left"];H.fn.css=function(e,n){return H.access(this,function(e,n,r){return r!==t?H.style(e,n,r):H.css(e,n)},e,n,arguments.length>1)},H.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=Le(e,"opacity");return""===n?"1":n}return e.style.opacity}}},
// Exclude the following css properties to add px
cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{
// normalize float css property
"float":H.support.cssFloat?"cssFloat":"styleFloat"},
// Get and set the style property on a DOM Node
style:function(e,n,r,i){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var o,a,s=H.camelCase(n),l=e.style,u=H.cssHooks[s];
// Check if we're setting a value
if(n=H.cssProps[s]||s,r===t)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return u&&"get"in u&&(o=u.get(e,!1,i))!==t?o:l[n];
// Make sure that NaN and null values aren't set. See: #7116
if(a=typeof r,
// convert relative number strings (+= or -=) to relative numbers. #7345
"string"===a&&(o=Be.exec(r))&&(r=+(o[1]+1)*+o[2]+parseFloat(H.css(e,n)),
// Fixes bug #9237
a="number"),!(null==r||"number"===a&&isNaN(r)||(
// If a number was passed in, add 'px' to the (except for certain CSS properties)
"number"!==a||H.cssNumber[s]||(r+="px"),u&&"set"in u&&(r=u.set(e,r))===t)))
// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
// Fixes bug #5509
try{l[n]=r}catch(c){}}},css:function(e,n,r){var i,o;
// If a hook was provided get the computed value from there
// Make sure that we're working with the right name
// cssFloat needs a special treatment
// If a hook was provided get the computed value from there
return n=H.camelCase(n),o=H.cssHooks[n],n=H.cssProps[n]||n,"cssFloat"===n&&(n="float"),o&&"get"in o&&(i=o.get(e,!0,r))!==t?i:Le?Le(e,n):void 0},
// A method for quickly swapping in/out CSS properties to get correct calculations
swap:function(e,t,n){var r,i,o={};
// Remember the old values, and insert the new ones
for(i in t)o[i]=e.style[i],e.style[i]=t[i];r=n.call(e);
// Revert the old values
for(i in t)e.style[i]=o[i];return r}}),
// DEPRECATED in 1.3, Use jQuery.css() instead
H.curCSS=H.css,F.defaultView&&F.defaultView.getComputedStyle&&(De=function(e,t){var n,r,i,o,a=e.style;
// A tribute to the "awesome hack by Dean Edwards"
// WebKit uses "computed value (percentage if specified)" instead of "used value" for margins
// which is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
return t=t.replace(_e,"-$1").toLowerCase(),(r=e.ownerDocument.defaultView)&&(i=r.getComputedStyle(e,null))&&(n=i.getPropertyValue(t),""!==n||H.contains(e.ownerDocument.documentElement,e)||(n=H.style(e,t))),!H.support.pixelMargin&&i&&Pe.test(t)&&Oe.test(n)&&(o=a.width,a.width=n,n=i.width,a.width=o),n}),F.documentElement.currentStyle&&(je=function(e,t){var n,r,i,o=e.currentStyle&&e.currentStyle[t],a=e.style;
// Avoid setting ret to empty string here
// so we don't default to auto
// From the awesome hack by Dean Edwards
// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
// If we're not dealing with a regular pixel number
// but a number that has a weird ending, we need to convert it to pixels
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
return null==o&&a&&(i=a[t])&&(o=i),Oe.test(o)&&(n=a.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),a.left="fontSize"===t?"1em":o,o=a.pixelLeft+"px",a.left=n,r&&(e.runtimeStyle.left=r)),""===o?"auto":o}),Le=De||je,H.each(["height","width"],function(e,t){H.cssHooks[t]={get:function(e,n,r){if(n)return 0!==e.offsetWidth?v(e,t,r):H.swap(e,qe,function(){return v(e,t,r)})},set:function(e,t){return He.test(t)?t+"px":t}}}),H.support.opacity||(H.cssHooks.opacity={get:function(e,t){
// IE uses filters for opacity
return Me.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=H.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";
// IE has trouble with opacity if it does not have layout
// Force it by setting the zoom level
n.zoom=1,
// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
t>=1&&""===H.trim(o.replace(Fe,""))&&(
// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
// if "filter:" is present at all, clearType is disabled, we want to avoid this
// style.removeAttribute is IE Only, but so apparently is this code path...
n.removeAttribute("filter"),r&&!r.filter)||(
// otherwise, set new filter values
n.filter=Fe.test(o)?o.replace(Fe,i):o+" "+i)}}),H(function(){
// This hook cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
H.support.reliableMarginRight||(H.cssHooks.marginRight={get:function(e,t){
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// Work around by temporarily setting element display to inline-block
return H.swap(e,{display:"inline-block"},function(){return t?Le(e,"margin-right"):e.style.marginRight})}})}),H.expr&&H.expr.filters&&(H.expr.filters.hidden=function(e){var t=e.offsetWidth,n=e.offsetHeight;return 0===t&&0===n||!H.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||H.css(e,"display"))},H.expr.filters.visible=function(e){return!H.expr.filters.hidden(e)}),
// These hooks are used by animate to expand properties
H.each({margin:"",padding:"",border:"Width"},function(e,t){H.cssHooks[e+t]={expand:function(n){var r,
// assumes a single number if not a string
i="string"==typeof n?n.split(" "):[n],o={};for(r=0;r<4;r++)o[e+We[r]+t]=i[r]||i[r-2]||i[0];return o}}});var
// Document location
Ie,
// Document location segments
$e,Re=/%20/g,Xe=/\[\]$/,ze=/\r?\n/g,Ve=/#.*$/,Ue=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,// IE leaves an \r character at EOL
Ge=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
// #7653, #8125, #8152: local protocol detection
Ye=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Je=/^(?:GET|HEAD)$/,Qe=/^\/\//,Ke=/\?/,Ze=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,et=/^(?:select|textarea)/i,tt=/\s+/,nt=/([?&])_=[^&]*/,rt=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
// Keep a copy of the old load method
it=H.fn.load,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
ot={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
at={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
st=["*/"]+["*"];
// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try{Ie=_.href}catch(lt){
// Use the href attribute of an A element
// since IE will modify it given document.location
Ie=F.createElement("a"),Ie.href="",Ie=Ie.href}
// Segment location into parts
$e=rt.exec(Ie.toLowerCase())||[],H.fn.extend({load:function(e,n,r){if("string"!=typeof e&&it)return it.apply(this,arguments);if(!this.length)return this;var i=e.indexOf(" ");if(i>=0){var o=e.slice(i,e.length);e=e.slice(0,i)}
// Default to a GET request
var a="GET";
// If the second parameter was provided
n&&(
// If it's a function
H.isFunction(n)?(
// We assume that it's the callback
r=n,n=t):"object"==typeof n&&(n=H.param(n,H.ajaxSettings.traditional),a="POST"));var s=this;
// Request the remote document
return H.ajax({url:e,type:a,dataType:"html",data:n,
// Complete callback (responseText is used internally)
complete:function(e,t,n){
// Store the response as specified by the jqXHR object
n=e.responseText,
// If successful, inject the HTML into all the matched elements
e.isResolved()&&(
// #4825: Get the actual response in case
// a dataFilter is present in ajaxSettings
e.done(function(e){n=e}),
// See if a selector was specified
s.html(o?
// Create a dummy div to hold the results
H("<div>").append(n.replace(Ze,"")).find(o):
// If not, just inject the full result
n)),r&&s.each(r,[n,t,e])}}),this},serialize:function(){return H.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?H.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||et.test(this.nodeName)||Ge.test(this.type))}).map(function(e,t){var n=H(this).val();return null==n?null:H.isArray(n)?H.map(n,function(e,n){return{name:t.name,value:e.replace(ze,"\r\n")}}):{name:t.name,value:n.replace(ze,"\r\n")}}).get()}}),
// Attach a bunch of functions for handling common AJAX events
H.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){H.fn[t]=function(e){return this.on(t,e)}}),H.each(["get","post"],function(e,n){H[n]=function(e,r,i,o){
// shift arguments if data argument was omitted
return H.isFunction(r)&&(o=o||i,i=r,r=t),H.ajax({type:n,url:e,data:r,success:i,dataType:o})}}),H.extend({getScript:function(e,n){return H.get(e,t,n,"script")},getJSON:function(e,t,n){return H.get(e,t,n,"json")},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?T(e,H.ajaxSettings):(t=e,e=H.ajaxSettings),T(e,t),e},ajaxSettings:{url:Ie,isLocal:Ye.test($e[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		traditional: false,
		headers: {},
		*/
accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":st},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},
// List of data converters
// 1) key format is "source_type destination_type" (a single space in-between)
// 2) the catchall symbol "*" can be used for source_type
converters:{
// Convert anything to text
"* text":e.String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":H.parseJSON,
// Parse text as xml
"text xml":H.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{context:!0,url:!0}},ajaxPrefilter:b(ot),ajaxTransport:b(at),
// Main method
ajax:function(e,n){
// Callback for when everything is done
// It is defined here because jslint complains if it is declared
// at the end of the function (which would be more logical and readable)
function r(e,n,r,a){
// Called once
if(2!==T){
// State is "done" now
T=2,
// Clear timeout if it exists
l&&clearTimeout(l),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
s=t,
// Cache response headers
o=a||"",
// Set readyState
w.readyState=e>0?4:0;var u,f,v,b,x,E=n,k=r?N(d,w,r):t;
// If successful, handle type chaining
if(e>=200&&e<300||304===e)
// If not modified
if(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
d.ifModified&&((b=w.getResponseHeader("Last-Modified"))&&(H.lastModified[i]=b),(x=w.getResponseHeader("Etag"))&&(H.etag[i]=x)),304===e)E="notmodified",u=!0;else try{f=C(d,k),E="success",u=!0}catch(S){
// We have a parsererror
E="parsererror",v=S}else
// We extract error from statusText
// then normalize statusText and status for non-aborts
v=E,E&&!e||(E="error",e<0&&(e=0));
// Set data for the fake xhr object
w.status=e,w.statusText=""+(n||E),
// Success/Error
u?m.resolveWith(p,[f,E,w]):m.rejectWith(p,[w,E,v]),
// Status-dependent callbacks
w.statusCode(y),y=t,c&&h.trigger("ajax"+(u?"Success":"Error"),[w,d,u?f:v]),
// Complete
g.fireWith(p,[w,E]),c&&(h.trigger("ajaxComplete",[w,d]),
// Handle the global AJAX counter
--H.active||H.event.trigger("ajaxStop"))}}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(n=e,e=t),
// Force options to be an object
n=n||{};var
// ifModified key
i,
// Response headers
o,a,
// transport
s,
// timeout handle
l,
// Cross-domain detection vars
u,
// To know if global events are to be dispatched
c,
// Loop variable
f,// Create the final options object
d=H.ajaxSetup({},n),
// Callbacks context
p=d.context||d,
// Context for global events
// It's the callbackContext if one was provided in the options
// and if it's a DOM node or a jQuery collection
h=p!==d&&(p.nodeType||p instanceof H)?H(p):H.event,
// Deferreds
m=H.Deferred(),g=H.Callbacks("once memory"),
// Status-dependent callbacks
y=d.statusCode||{},
// Headers (they are sent all at once)
v={},b={},
// The jqXHR state
T=0,
// Fake xhr
w={readyState:0,
// Caches the header
setRequestHeader:function(e,t){if(!T){var n=e.toLowerCase();e=b[n]=b[n]||e,v[e]=t}return this},
// Raw string
getAllResponseHeaders:function(){return 2===T?o:null},
// Builds headers hashtable if needed
getResponseHeader:function(e){var n;if(2===T){if(!a)for(a={};n=Ue.exec(o);)a[n[1].toLowerCase()]=n[2];n=a[e.toLowerCase()]}return n===t?null:n},
// Overrides response content-type header
overrideMimeType:function(e){return T||(d.mimeType=e),this},
// Cancel the request
abort:function(e){return e=e||"abort",s&&s.abort(e),r(0,e),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
m.promise(w),w.success=w.done,w.error=w.fail,w.complete=g.add,
// Status-dependent callbacks
w.statusCode=function(e){if(e){var t;if(T<2)for(t in e)y[t]=[y[t],e[t]];else t=e[w.status],w.then(t,t)}return this},
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
// We also use the url parameter if available
d.url=((e||d.url)+"").replace(Ve,"").replace(Qe,$e[1]+"//"),
// Extract dataTypes list
d.dataTypes=H.trim(d.dataType||"*").toLowerCase().split(tt),
// Determine if a cross-domain request is in order
null==d.crossDomain&&(u=rt.exec(d.url.toLowerCase()),d.crossDomain=!(!u||u[1]==$e[1]&&u[2]==$e[2]&&(u[3]||("http:"===u[1]?80:443))==($e[3]||("http:"===$e[1]?80:443)))),
// Convert data if not already a string
d.data&&d.processData&&"string"!=typeof d.data&&(d.data=H.param(d.data,d.traditional)),
// Apply prefilters
x(ot,d,n,w),2===T)return!1;
// More options handling for requests with no content
if(
// We can fire global events as of now if asked to
c=d.global,
// Uppercase the type
d.type=d.type.toUpperCase(),
// Determine if request has content
d.hasContent=!Je.test(d.type),
// Watch for a new set of requests
c&&0===H.active++&&H.event.trigger("ajaxStart"),!d.hasContent&&(
// If data is available, append data to url
d.data&&(d.url+=(Ke.test(d.url)?"&":"?")+d.data,
// #9682: remove data so that it's not used in an eventual retry
delete d.data),
// Get ifModifiedKey before adding the anti-cache parameter
i=d.url,d.cache===!1)){var E=H.now(),
// try replacing _= if it is there
k=d.url.replace(nt,"$1_="+E);
// if nothing was replaced, add timestamp to the end
d.url=k+(k===d.url?(Ke.test(d.url)?"&":"?")+"_="+E:"")}
// Set the correct header, if data is being sent
(d.data&&d.hasContent&&d.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",d.contentType),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
d.ifModified&&(i=i||d.url,H.lastModified[i]&&w.setRequestHeader("If-Modified-Since",H.lastModified[i]),H.etag[i]&&w.setRequestHeader("If-None-Match",H.etag[i])),
// Set the Accepts header for the server, depending on the dataType
w.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+st+"; q=0.01":""):d.accepts["*"]);
// Check for headers option
for(f in d.headers)w.setRequestHeader(f,d.headers[f]);
// Allow custom headers/mimetypes and early abort
if(d.beforeSend&&(d.beforeSend.call(p,w,d)===!1||2===T))
// Abort if not done already
return w.abort(),!1;
// Install callbacks on deferreds
for(f in{success:1,error:1,complete:1})w[f](d[f]);
// If no transport, we auto-abort
if(
// Get transport
s=x(at,d,n,w)){w.readyState=1,
// Send global event
c&&h.trigger("ajaxSend",[w,d]),
// Timeout
d.async&&d.timeout>0&&(l=setTimeout(function(){w.abort("timeout")},d.timeout));try{T=1,s.send(v,r)}catch(S){
// Propagate exception as error if not done
if(!(T<2))throw S;r(-1,S)}}else r(-1,"No Transport");return w},
// Serialize an array of form elements or a set of
// key/values into a query string
param:function(e,n){var r=[],i=function(e,t){
// If value is a function, invoke it and return its value
t=H.isFunction(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
n===t&&(n=H.ajaxSettings.traditional),H.isArray(e)||e.jquery&&!H.isPlainObject(e))
// Serialize the form elements
H.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(var o in e)w(o,e[o],n,i);
// Return the resulting serialization
return r.join("&").replace(Re,"+")}}),
// This is still on the jQuery object... for now
// Want to move this to jQuery.ajax some day
H.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{}});var ut=H.now(),ct=/(\=)\?(&|$)|\?\?/i;
// Default jsonp settings
H.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return H.expando+"_"+ut++}}),
// Detect, normalize options and install callbacks for jsonp requests
H.ajaxPrefilter("json jsonp",function(t,n,r){var i="string"==typeof t.data&&/^application\/x\-www\-form\-urlencoded/.test(t.contentType);if("jsonp"===t.dataTypes[0]||t.jsonp!==!1&&(ct.test(t.url)||i&&ct.test(t.data))){var o,a=t.jsonpCallback=H.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s=e[a],l=t.url,u=t.data,c="$1"+a+"$2";
// Delegate to script
// Add callback manually
// Install callback
// Clean-up function
// Use data converter to retrieve json after script execution
// force json dataType
return t.jsonp!==!1&&(l=l.replace(ct,c),t.url===l&&(i&&(u=u.replace(ct,c)),t.data===u&&(l+=(/\?/.test(l)?"&":"?")+t.jsonp+"="+a))),t.url=l,t.data=u,e[a]=function(e){o=[e]},r.always(function(){
// Set callback back to previous value
e[a]=s,
// Call if it was a function and we have a response
o&&H.isFunction(s)&&e[a](o[0])}),t.converters["script json"]=function(){return o||H.error(a+" was not called"),o[0]},t.dataTypes[0]="json","script"}}),
// Install script dataType
H.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return H.globalEval(e),e}}}),
// Handle cache's special case and global
H.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),
// Bind script tag hack transport
H.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var n,r=F.head||F.getElementsByTagName("head")[0]||F.documentElement;return{send:function(i,o){n=F.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,
// Attach handlers for all browsers
n.onload=n.onreadystatechange=function(e,i){(i||!n.readyState||/loaded|complete/.test(n.readyState))&&(
// Handle memory leak in IE
n.onload=n.onreadystatechange=null,
// Remove the script
r&&n.parentNode&&r.removeChild(n),
// Dereference the script
n=t,
// Callback if not abort
i||o(200,"success"))},
// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
// This arises when a base node is used (#2709 and #4378).
r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var ft,// #5280: Internet Explorer will keep connections alive if we don't abort on unload
dt=!!e.ActiveXObject&&function(){
// Abort all pending requests
for(var e in ft)ft[e](0,1)},pt=0;
// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
H.ajaxSettings.xhr=e.ActiveXObject?/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
function(){return!this.isLocal&&E()||k()}:
// For all other browsers, use the standard XMLHttpRequest object
E,
// Determine support properties
function(e){H.extend(H.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(H.ajaxSettings.xhr()),
// Create transport if the browser can provide an xhr
H.support.ajax&&H.ajaxTransport(function(n){
// Cross domain only allowed if supported through XMLHttpRequest
if(!n.crossDomain||H.support.cors){var r;return{send:function(i,o){
// Get a new xhr
var a,s,l=n.xhr();
// Apply custom fields if provided
if(
// Open the socket
// Passing null username, generates a login popup on Opera (#2865)
n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];
// Override mime type if needed
n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
// Need an extra try/catch for cross domain requests in Firefox 3
try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}
// Do send the request
// This may raise an exception which is actually
// handled in jQuery.ajax (so no try/catch here)
l.send(n.hasContent&&n.data||null),
// Listener
r=function(e,i){var s,u,c,f,d;
// Firefox throws exceptions when accessing properties
// of an xhr when a network error occured
// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
try{
// Was never called and is aborted or complete
if(r&&(i||4===l.readyState))
// If it's an abort
if(
// Only called once
r=t,
// Do not keep as active anymore
a&&(l.onreadystatechange=H.noop,dt&&delete ft[a]),i)
// Abort it manually if needed
4!==l.readyState&&l.abort();else{s=l.status,c=l.getAllResponseHeaders(),f={},d=l.responseXML,
// Construct response list
d&&d.documentElement&&(f.xml=d);
// When requesting binary data, IE6-9 will throw an exception
// on any attempt to access responseText (#11426)
try{f.text=l.responseText}catch(e){}
// Firefox throws an exception when accessing
// statusText for faulty cross-domain requests
try{u=l.statusText}catch(p){
// We normalize with Webkit giving an empty statusText
u=""}
// Filter status for non standard behaviors
// If the request is local and we have data: assume a success
// (success with no data won't get notified, that's the best we
// can do given current implementations)
s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}
// Call complete if needed
f&&o(s,u,f,c)},
// if we're in sync mode or it's in cache
// and has been retrieved directly (IE6 & IE7)
// we need to manually fire the callback
n.async&&4!==l.readyState?(a=++pt,dt&&(
// Create the active xhrs callbacks list if needed
// and attach the unload handler
ft||(ft={},H(e).unload(dt)),
// Add to list of active xhrs callbacks
ft[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var ht,mt,gt,yt,vt={},bt=/^(?:toggle|show|hide)$/,xt=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,Tt=[
// height animations
["height","marginTop","marginBottom","paddingTop","paddingBottom"],
// width animations
["width","marginLeft","marginRight","paddingLeft","paddingRight"],
// opacity animations
["opacity"]];H.fn.extend({show:function(e,t,n){var r,i;if(e||0===e)return this.animate(L("show",3),e,t,n);for(var o=0,a=this.length;o<a;o++)r=this[o],r.style&&(i=r.style.display,
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
H._data(r,"olddisplay")||"none"!==i||(i=r.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
(""===i&&"none"===H.css(r,"display")||!H.contains(r.ownerDocument.documentElement,r))&&H._data(r,"olddisplay",D(r.nodeName)));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(o=0;o<a;o++)r=this[o],r.style&&(i=r.style.display,""!==i&&"none"!==i||(r.style.display=H._data(r,"olddisplay")||""));return this},hide:function(e,t,n){if(e||0===e)return this.animate(L("hide",3),e,t,n);for(var r,i,o=0,a=this.length;o<a;o++)r=this[o],r.style&&(i=H.css(r,"display"),"none"===i||H._data(r,"olddisplay")||H._data(r,"olddisplay",i));
// Set the display of the elements in a second loop
// to avoid the constant reflow
for(o=0;o<a;o++)this[o].style&&(this[o].style.display="none");return this},
// Save the old toggle function
_toggle:H.fn.toggle,toggle:function(e,t,n){var r="boolean"==typeof e;return H.isFunction(e)&&H.isFunction(t)?this._toggle.apply(this,arguments):null==e||r?this.each(function(){var t=r?e:H(this).is(":hidden");H(this)[t?"show":"hide"]()}):this.animate(L("toggle",3),e,t,n),this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){function i(){
// XXX 'this' does not always have a nodeName when running the
// test suite
o.queue===!1&&H._mark(this);var t,n,r,i,a,s,l,u,c,f,d,p=H.extend({},o),h=1===this.nodeType,m=h&&H(this).is(":hidden");
// will store per property easing and be used to determine when an animation is complete
p.animatedProperties={};
// first pass over propertys to expand / normalize
for(r in e)if(t=H.camelCase(r),r!==t&&(e[t]=e[r],delete e[r]),(a=H.cssHooks[t])&&"expand"in a){s=a.expand(e[t]),delete e[t];
// not quite $.extend, this wont overwrite keys already present.
// also - reusing 'p' from above because we have the correct "name"
for(r in s)r in e||(e[r]=s[r])}for(t in e){if(n=e[t],
// easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
H.isArray(n)?(p.animatedProperties[t]=n[1],n=e[t]=n[0]):p.animatedProperties[t]=p.specialEasing&&p.specialEasing[t]||p.easing||"swing","hide"===n&&m||"show"===n&&!m)return p.complete.call(this);!h||"height"!==t&&"width"!==t||(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE does not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
p.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
"inline"===H.css(this,"display")&&"none"===H.css(this,"float")&&(
// inline-level elements accept inline-block;
// block-level elements need to be inline with layout
H.support.inlineBlockNeedsLayout&&"inline"!==D(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"))}null!=p.overflow&&(this.style.overflow="hidden");for(r in e)i=new H.fx(this,p,r),n=e[r],bt.test(n)?(
// Tracks whether to show or hide based on private
// data attached to the element
d=H._data(this,"toggle"+r)||("toggle"===n?m?"show":"hide":0),d?(H._data(this,"toggle"+r,"show"===d?"hide":"show"),i[d]()):i[n]()):(l=xt.exec(n),u=i.cur(),l?(c=parseFloat(l[2]),f=l[3]||(H.cssNumber[r]?"":"px"),
// We need to compute starting value
"px"!==f&&(H.style(this,r,(c||1)+f),u=(c||1)/i.cur()*u,H.style(this,r,u+f)),
// If a +=/-= token was provided, we're doing a relative animation
l[1]&&(c=("-="===l[1]?-1:1)*c+u),i.custom(u,c,f)):i.custom(u,n,""));
// For JS strict compliance
return!0}var o=H.speed(t,n,r);
// Do not change referenced properties as per-property easing will be lost
return H.isEmptyObject(e)?this.each(o.complete,[!1]):(e=H.extend({},e),o.queue===!1?this.each(i):this.queue(o.queue,i))},stop:function(e,n,r){return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){function t(e,t,n){var i=t[n];H.removeData(e,n,!0),i.stop(r)}var n,i=!1,o=H.timers,a=H._data(this);if(
// clear marker counters if we know they won't be
r||H._unmark(!0,this),null==e)for(n in a)a[n]&&a[n].stop&&n.indexOf(".run")===n.length-4&&t(this,a,n);else a[n=e+".run"]&&a[n].stop&&t(this,a,n);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(r?
// force the next step to be the last
o[n](!0):o[n].saveState(),i=!0,o.splice(n,1));
// start the next in the queue if the last step wasn't forced
// timers currently will call their complete callbacks, which will dequeue
// but only if they were gotoEnd
r&&i||H.dequeue(this,e)})}}),
// Generate shortcuts for custom animations
H.each({slideDown:L("show",1),slideUp:L("hide",1),slideToggle:L("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){H.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),H.extend({speed:function(e,t,n){var r=e&&"object"==typeof e?H.extend({},e):{complete:n||!n&&t||H.isFunction(e)&&e,duration:e,easing:n&&t||t&&!H.isFunction(t)&&t};
// normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return r.duration=H.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in H.fx.speeds?H.fx.speeds[r.duration]:H.fx.speeds._default,null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(e){H.isFunction(r.old)&&r.old.call(this),r.queue?H.dequeue(this,r.queue):e!==!1&&H._unmark(this)},r},easing:{linear:function(e){return e},swing:function(e){return-Math.cos(e*Math.PI)/2+.5}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig=t.orig||{}}}),H.fx.prototype={
// Simple function for setting a style value
update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(H.fx.step[this.prop]||H.fx.step._default)(this)},
// Get the current size
cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var e,t=H.css(this.elem,this.prop);
// Empty strings, null, undefined and "auto" are converted to 0,
// complex values such as "rotate(1rad)" are returned as is,
// simple values such as "10px" are parsed to Float.
return isNaN(e=parseFloat(t))?t&&"auto"!==t?t:0:e},
// Start an animation from one number to another
custom:function(e,n,r){function i(e){return o.step(e)}var o=this,a=H.fx;this.startTime=yt||S(),this.end=n,this.now=this.start=e,this.pos=this.state=0,this.unit=r||this.unit||(H.cssNumber[this.prop]?"":"px"),i.queue=this.options.queue,i.elem=this.elem,i.saveState=function(){H._data(o.elem,"fxshow"+o.prop)===t&&(o.options.hide?H._data(o.elem,"fxshow"+o.prop,o.start):o.options.show&&H._data(o.elem,"fxshow"+o.prop,o.end))},i()&&H.timers.push(i)&&!gt&&(gt=setInterval(a.tick,a.interval))},
// Simple 'show' function
show:function(){var e=H._data(this.elem,"fxshow"+this.prop);
// Remember where we started, so that we can go back to it later
this.options.orig[this.prop]=e||H.style(this.elem,this.prop),this.options.show=!0,
// Begin the animation
// Make sure that we start at a small width/height to avoid any flash of content
e!==t?
// This show is picking up where a previous hide or show left off
this.custom(this.cur(),e):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),
// Start by showing the element
H(this.elem).show()},
// Simple 'hide' function
hide:function(){
// Remember where we started, so that we can go back to it later
this.options.orig[this.prop]=H._data(this.elem,"fxshow"+this.prop)||H.style(this.elem,this.prop),this.options.hide=!0,
// Begin the animation
this.custom(this.cur(),0)},
// Each step of an animation
step:function(e){var t,n,r,i=yt||S(),o=!0,a=this.elem,s=this.options;if(e||i>=s.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),s.animatedProperties[this.prop]=!0;for(t in s.animatedProperties)s.animatedProperties[t]!==!0&&(o=!1);if(o){
// Reset the properties, if the item has been hidden or shown
if(
// Reset the overflow
null==s.overflow||H.support.shrinkWrapBlocks||H.each(["","X","Y"],function(e,t){a.style["overflow"+t]=s.overflow[e]}),
// Hide the element if the "hide" operation was done
s.hide&&H(a).hide(),s.hide||s.show)for(t in s.animatedProperties)H.style(a,t,s.orig[t]),H.removeData(a,"fxshow"+t,!0),
// Toggle data is no longer needed
H.removeData(a,"toggle"+t,!0);
// Execute the complete function
// in the event that the complete function throws an exception
// we must ensure it won't be called twice. #5684
r=s.complete,r&&(s.complete=!1,r.call(a))}return!1}
// classical easing cannot be used with an Infinity duration
// Perform the easing function, defaults to swing
// Perform the next step of the animation
return s.duration==1/0?this.now=i:(n=i-this.startTime,this.state=n/s.duration,this.pos=H.easing[s.animatedProperties[this.prop]](this.state,n,0,1,s.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},H.extend(H.fx,{tick:function(){for(var e,t=H.timers,n=0;n<t.length;n++)e=t[n],
// Checks the timer has not already been removed
e()||t[n]!==e||t.splice(n--,1);t.length||H.fx.stop()},interval:13,stop:function(){clearInterval(gt),gt=null},speeds:{slow:600,fast:200,
// Default speed
_default:400},step:{opacity:function(e){H.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&null!=e.elem.style[e.prop]?e.elem.style[e.prop]=e.now+e.unit:e.elem[e.prop]=e.now}}}),
// Ensure props that can't be negative don't go there on undershoot easing
H.each(Tt.concat.apply([],Tt),function(e,t){
// exclude marginTop, marginLeft, marginBottom and marginRight from this list
t.indexOf("margin")&&(H.fx.step[t]=function(e){H.style(e.elem,t,Math.max(0,e.now)+e.unit)})}),H.expr&&H.expr.filters&&(H.expr.filters.animated=function(e){return H.grep(H.timers,function(t){return e===t.elem}).length});var wt,Nt=/^t(?:able|d|h)$/i,Ct=/^(?:body|html)$/i;wt="getBoundingClientRect"in F.documentElement?function(e,t,n,r){try{r=e.getBoundingClientRect()}catch(i){}
// Make sure we're not dealing with a disconnected DOM node
if(!r||!H.contains(n,e))return r?{top:r.top,left:r.left}:{top:0,left:0};var o=t.body,a=j(t),s=n.clientTop||o.clientTop||0,l=n.clientLeft||o.clientLeft||0,u=a.pageYOffset||H.support.boxModel&&n.scrollTop||o.scrollTop,c=a.pageXOffset||H.support.boxModel&&n.scrollLeft||o.scrollLeft,f=r.top+u-s,d=r.left+c-l;return{top:f,left:d}}:function(e,t,n){for(var r,i=e.offsetParent,o=e,a=t.body,s=t.defaultView,l=s?s.getComputedStyle(e,null):e.currentStyle,u=e.offsetTop,c=e.offsetLeft;(e=e.parentNode)&&e!==a&&e!==n&&(!H.support.fixedPosition||"fixed"!==l.position);)r=s?s.getComputedStyle(e,null):e.currentStyle,u-=e.scrollTop,c-=e.scrollLeft,e===i&&(u+=e.offsetTop,c+=e.offsetLeft,!H.support.doesNotAddBorder||H.support.doesAddBorderForTableAndCells&&Nt.test(e.nodeName)||(u+=parseFloat(r.borderTopWidth)||0,c+=parseFloat(r.borderLeftWidth)||0),o=i,i=e.offsetParent),H.support.subtractsBorderForOverflowNotVisible&&"visible"!==r.overflow&&(u+=parseFloat(r.borderTopWidth)||0,c+=parseFloat(r.borderLeftWidth)||0),l=r;return"relative"!==l.position&&"static"!==l.position||(u+=a.offsetTop,c+=a.offsetLeft),H.support.fixedPosition&&"fixed"===l.position&&(u+=Math.max(n.scrollTop,a.scrollTop),c+=Math.max(n.scrollLeft,a.scrollLeft)),{top:u,left:c}},H.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){H.offset.setOffset(this,e,t)});var n=this[0],r=n&&n.ownerDocument;return r?n===r.body?H.offset.bodyOffset(n):wt(n,r,r.documentElement):null},H.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return H.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(H.css(e,"marginTop"))||0,n+=parseFloat(H.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=H.css(e,"position");
// set position first, in-case top/left are set even on static elem
"static"===r&&(e.style.position="relative");var i,o,a=H(e),s=a.offset(),l=H.css(e,"top"),u=H.css(e,"left"),c=("absolute"===r||"fixed"===r)&&H.inArray("auto",[l,u])>-1,f={},d={};
// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
c?(d=a.position(),i=d.top,o=d.left):(i=parseFloat(l)||0,o=parseFloat(u)||0),H.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},H.fn.extend({position:function(){if(!this[0])return null;var e=this[0],
// Get *real* offsetParent
t=this.offsetParent(),
// Get correct offsets
n=this.offset(),r=Ct.test(t[0].nodeName)?{top:0,left:0}:t.offset();
// Subtract the two offsets
// Subtract element margins
// note: when an element has margin: auto the offsetLeft and marginLeft
// are the same in Safari causing offset.left to incorrectly be 0
// Add offsetParent borders
return n.top-=parseFloat(H.css(e,"marginTop"))||0,n.left-=parseFloat(H.css(e,"marginLeft"))||0,r.top+=parseFloat(H.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(H.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||F.body;e&&!Ct.test(e.nodeName)&&"static"===H.css(e,"position");)e=e.offsetParent;return e})}}),
// Create scrollLeft and scrollTop methods
H.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);H.fn[e]=function(i){return H.access(this,function(e,i,o){var a=j(e);return o===t?a?n in a?a[n]:H.support.boxModel&&a.document.documentElement[i]||a.document.body[i]:e[i]:void(a?a.scrollTo(r?H(a).scrollLeft():o,r?o:H(a).scrollTop()):e[i]=o)},e,i,arguments.length,null)}}),
// Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
H.each({Height:"height",Width:"width"},function(e,n){var r="client"+e,i="scroll"+e,o="offset"+e;
// innerHeight and innerWidth
H.fn["inner"+e]=function(){var e=this[0];return e?e.style?parseFloat(H.css(e,n,"padding")):this[n]():null},
// outerHeight and outerWidth
H.fn["outer"+e]=function(e){var t=this[0];return t?t.style?parseFloat(H.css(t,n,e?"margin":"border")):this[n]():null},H.fn[n]=function(e){return H.access(this,function(e,n,a){var s,l,u,c;
// 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
// Get document width or height
// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
// when a window > document, IE6 reports a offset[Width/Height] > client[Width/Height]
// so we can't use max, as it'll choose the incorrect offset[Width/Height]
// instead we use the correct client[Width/Height]
// support:IE6
// Get width or height on the element
// Set the width or height on the element
return H.isWindow(e)?(s=e.document,l=s.documentElement[r],H.support.boxModel&&l||s.body&&s.body[r]||l):9===e.nodeType?(s=e.documentElement,s[r]>=s[i]?s[r]:Math.max(e.body[i],s[i],e.body[o],s[o])):a===t?(u=H.css(e,n),c=parseFloat(u),H.isNumeric(c)?c:u):void H(e).css(n,a)},n,e,arguments.length,null)}}),
// Expose jQuery to the global object
e.jQuery=e.$=H,
// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return H})}(window);