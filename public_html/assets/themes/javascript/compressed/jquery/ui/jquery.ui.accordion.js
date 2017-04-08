/*!
 * jQuery UI Accordion @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
!function(e,t){e.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:!0,clearStyle:!1,collapsible:!1,event:"click",fillSpace:!1,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:!1,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var t=this,i=t.options;if(t.running=0,t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"),t.headers=t.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){i.disabled||e(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){i.disabled||e(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){i.disabled||e(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){i.disabled||e(this).removeClass("ui-state-focus")}),t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"),i.navigation){var a=t.element.find("a").filter(i.navigationFilter).eq(0);if(a.length){var o=a.closest(".ui-accordion-header");o.length?
// anchor within header
t.active=o:
// anchor within content
t.active=a.closest(".ui-accordion-content").prev()}}t.active=t._findActive(t.active||i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"),t.active.next().addClass("ui-accordion-content-active"),t._createIcons(),t.resize(),
// ARIA
t.element.attr("role","tablist"),t.headers.attr("role","tab").bind("keydown.accordion",function(e){return t._keydown(e)}).next().attr("role","tabpanel"),t.headers.not(t.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide(),
// make sure at least one header is in the tab order
t.active.length?t.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):t.headers.eq(0).attr("tabIndex",0),
// only need links in tab order for Safari
e.browser.safari||t.headers.find("a").attr("tabIndex",-1),i.event&&t.headers.bind(i.event.split(" ").join(".accordion ")+".accordion",function(e){t._clickHandler.call(t,e,this),e.preventDefault()})},_createIcons:function(){var t=this.options;t.icons&&(e("<span></span>").addClass("ui-icon "+t.icons.header).prependTo(this.headers),this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected),this.element.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.children(".ui-icon").remove(),this.element.removeClass("ui-accordion-icons")},destroy:function(){var t=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"),this.headers.find("a").removeAttr("tabIndex"),this._destroyIcons();var i=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");return(t.autoHeight||t.fillHeight)&&i.css("height",""),e.Widget.prototype.destroy.call(this)},_setOption:function(t,i){e.Widget.prototype._setOption.apply(this,arguments),"active"==t&&this.activate(i),"icons"==t&&(this._destroyIcons(),i&&this._createIcons()),
// #5332 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
"disabled"==t&&this.headers.add(this.headers.next())[i?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(t){if(!(this.options.disabled||t.altKey||t.ctrlKey)){var i=e.ui.keyCode,a=this.headers.length,o=this.headers.index(t.target),s=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:s=this.headers[(o+1)%a];break;case i.LEFT:case i.UP:s=this.headers[(o-1+a)%a];break;case i.SPACE:case i.ENTER:this._clickHandler({target:t.target},t.target),t.preventDefault()}return!s||(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),!1)}},resize:function(){var t,i=this.options;if(i.fillSpace){if(e.browser.msie){var a=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}t=this.element.parent().height(),e.browser.msie&&this.element.parent().css("overflow",a),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")}else i.autoHeight&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).height("").height())}).height(t));return this},activate:function(e){
// TODO this gets called on init, changing the option without an explicit call for that
this.options.active=e;
// call clickHandler with custom event
var t=this._findActive(e)[0];return this._clickHandler({target:t},t),this},_findActive:function(t){return t?"number"==typeof t?this.headers.filter(":eq("+t+")"):this.headers.not(this.headers.not(t)):t===!1?e([]):this.headers.filter(":eq(0)")},
// TODO isn't event.target enough? why the separate target argument?
_clickHandler:function(t,i){var a=this.options;if(!a.disabled){
// called only when using activate(false) to close all parts programmatically
if(!t.target){if(!a.collapsible)return;this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(a.icons.headerSelected).addClass(a.icons.header),this.active.next().addClass("ui-accordion-content-active");var o=this.active.next(),s={options:a,newHeader:e([]),oldHeader:a.active,newContent:e([]),oldContent:o},n=this.active=e([]);return void this._toggle(n,o,s)}
// get the click target
var r=e(t.currentTarget||i),d=r[0]===this.active[0];
// if animations are still active, or the active header is the target, ignore click
if(
// TODO the option is changed, is that correct?
// TODO if it is correct, shouldn't that happen after determining that the click is valid?
a.active=(!a.collapsible||!d)&&this.headers.index(r),!(this.running||!a.collapsible&&d)){
// find elements to show and hide
var c=this.active,n=r.next(),o=this.active.next(),s={options:a,newHeader:d&&a.collapsible?e([]):r,oldHeader:this.active,newContent:d&&a.collapsible?e([]):n,oldContent:o},l=this.headers.index(this.active[0])>this.headers.index(r[0]);
// when the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=d?e([]):r,this._toggle(n,o,s,d,l),
// switch classes
c.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(a.icons.headerSelected).addClass(a.icons.header),d||(r.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(a.icons.header).addClass(a.icons.headerSelected),r.next().addClass("ui-accordion-content-active"))}}},_toggle:function(t,i,a,o,s){var n=this,r=n.options;n.toShow=t,n.toHide=i,n.data=a;var d=function(){if(n)return n._completed.apply(n,arguments)};if(
// trigger changestart event
n._trigger("changestart",null,n.data),
// count elements to animate
n.running=0===i.size()?t.size():i.size(),r.animated){var c={};c=r.collapsible&&o?{toShow:e([]),toHide:i,complete:d,down:s,autoHeight:r.autoHeight||r.fillSpace}:{toShow:t,toHide:i,complete:d,down:s,autoHeight:r.autoHeight||r.fillSpace},r.proxied||(r.proxied=r.animated),r.proxiedDuration||(r.proxiedDuration=r.duration),r.animated=e.isFunction(r.proxied)?r.proxied(c):r.proxied,r.duration=e.isFunction(r.proxiedDuration)?r.proxiedDuration(c):r.proxiedDuration;var l=e.ui.accordion.animations,h=r.duration,u=r.animated;!u||l[u]||e.easing[u]||(u="slide"),l[u]||(l[u]=function(e){this.slide(e,{easing:u,duration:h||700})}),l[u](c)}else r.collapsible&&o?t.toggle():(i.hide(),t.show()),d(!0);
// TODO assert that the blur and focus triggers are really necessary, remove otherwise
i.prev().attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).blur(),t.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(e){this.running=e?0:--this.running,this.running||(this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""}),
// other classes are removed before the animation; this one needs to stay until completed
this.toHide.removeClass("ui-accordion-content-active"),
// Work around for rendering bug in IE (#5421)
this.toHide.length&&(this.toHide.parent()[0].className=this.toHide.parent()[0].className),this._trigger("change",null,this.data))}}),e.extend(e.ui.accordion,{version:"@VERSION",animations:{slide:function(t,i){if(t=e.extend({easing:"swing",duration:300},t,i),!t.toHide.size())return void t.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},t);if(!t.toShow.size())return void t.toHide.animate({height:"hide",paddingTop:"hide",paddingBottom:"hide"},t);var a,o=t.toShow.css("overflow"),s=0,n={},r={},d=["height","paddingTop","paddingBottom"],c=t.toShow;a=c[0].style.width,c.width(c.parent().width()-parseFloat(c.css("paddingLeft"))-parseFloat(c.css("paddingRight"))-(parseFloat(c.css("borderLeftWidth"))||0)-(parseFloat(c.css("borderRightWidth"))||0)),e.each(d,function(i,a){r[a]="hide";var o=(""+e.css(t.toShow[0],a)).match(/^([\d+-.]+)(.*)$/);n[a]={value:o[1],unit:o[2]||"px"}}),t.toShow.css({height:0,overflow:"hidden"}).show(),t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(r,{step:function(e,i){
// only calculate the percent when animating height
// IE gets very inconsistent results when animating elements
// with small values, which is common for padding
"height"==i.prop&&(s=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start)),t.toShow[0].style[i.prop]=s*n[i.prop].value+n[i.prop].unit},duration:t.duration,easing:t.easing,complete:function(){t.autoHeight||t.toShow.css("height",""),t.toShow.css({width:a,overflow:o}),t.complete()}})},bounceslide:function(e){this.slide(e,{easing:e.down?"easeOutBounce":"swing",duration:e.down?1e3:200})}}})}(jQuery);