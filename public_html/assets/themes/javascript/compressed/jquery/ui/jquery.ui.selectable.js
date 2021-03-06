/*!
 * jQuery UI Selectable @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
!function(e,t){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch"},_create:function(){var t=this;this.element.addClass("ui-selectable"),this.dragged=!1;
// cache selectee children based on filter
var s;this.refresh=function(){s=e(t.options.filter,t.element[0]),s.addClass("ui-selectee"),s.each(function(){var t=e(this),s=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:s.left,top:s.top,right:s.left+t.outerWidth(),bottom:s.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=s.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){return this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"),this._mouseDestroy(),this},_mouseStart:function(t){var s=this;if(this.opos=[t.pageX,t.pageY],!this.options.disabled){var l=this.options;this.selectees=e(l.filter,this.element[0]),this._trigger("start",t),e(l.appendTo).append(this.helper),
// position helper (lasso)
this.helper.css({left:t.clientX,top:t.clientY,width:0,height:0}),l.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var l=e.data(this,"selectable-item");l.startselected=!0,t.metaKey||t.ctrlKey||(l.$element.removeClass("ui-selected"),l.selected=!1,l.$element.addClass("ui-unselecting"),l.unselecting=!0,
// selectable UNSELECTING callback
s._trigger("unselecting",t,{unselecting:l.element}))}),e(t.target).parents().andSelf().each(function(){var l=e.data(this,"selectable-item");if(l){var i=!t.metaKey&&!t.ctrlKey||!l.$element.hasClass("ui-selected");
// selectable (UN)SELECTING callback
return l.$element.removeClass(i?"ui-unselecting":"ui-selected").addClass(i?"ui-selecting":"ui-unselecting"),l.unselecting=!i,l.selecting=i,l.selected=i,i?s._trigger("selecting",t,{selecting:l.element}):s._trigger("unselecting",t,{unselecting:l.element}),!1}})}},_mouseDrag:function(t){var s=this;if(this.dragged=!0,!this.options.disabled){var l=this.options,i=this.opos[0],n=this.opos[1],a=t.pageX,c=t.pageY;if(i>a){var r=a;a=i,i=r}if(n>c){var r=c;c=n,n=r}return this.helper.css({left:i,top:n,width:a-i,height:c-n}),this.selectees.each(function(){var r=e.data(this,"selectable-item");
//prevent helper from being selected if appendTo: selectable
if(r&&r.element!=s.element[0]){var u=!1;"touch"==l.tolerance?u=!(r.left>a||r.right<i||r.top>c||r.bottom<n):"fit"==l.tolerance&&(u=r.left>i&&r.right<a&&r.top>n&&r.bottom<c),u?(
// SELECT
r.selected&&(r.$element.removeClass("ui-selected"),r.selected=!1),r.unselecting&&(r.$element.removeClass("ui-unselecting"),r.unselecting=!1),r.selecting||(r.$element.addClass("ui-selecting"),r.selecting=!0,
// selectable SELECTING callback
s._trigger("selecting",t,{selecting:r.element}))):(
// UNSELECT
r.selecting&&((t.metaKey||t.ctrlKey)&&r.startselected?(r.$element.removeClass("ui-selecting"),r.selecting=!1,r.$element.addClass("ui-selected"),r.selected=!0):(r.$element.removeClass("ui-selecting"),r.selecting=!1,r.startselected&&(r.$element.addClass("ui-unselecting"),r.unselecting=!0),
// selectable UNSELECTING callback
s._trigger("unselecting",t,{unselecting:r.element}))),r.selected&&(t.metaKey||t.ctrlKey||r.startselected||(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,
// selectable UNSELECTING callback
s._trigger("unselecting",t,{unselecting:r.element}))))}}),!1}},_mouseStop:function(t){var s=this;this.dragged=!1;this.options;return e(".ui-unselecting",this.element[0]).each(function(){var l=e.data(this,"selectable-item");l.$element.removeClass("ui-unselecting"),l.unselecting=!1,l.startselected=!1,s._trigger("unselected",t,{unselected:l.element})}),e(".ui-selecting",this.element[0]).each(function(){var l=e.data(this,"selectable-item");l.$element.removeClass("ui-selecting").addClass("ui-selected"),l.selecting=!1,l.selected=!0,l.startselected=!0,s._trigger("selected",t,{selected:l.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.extend(e.ui.selectable,{version:"@VERSION"})}(jQuery);