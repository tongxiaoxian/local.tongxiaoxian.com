/*!
 * ExpressionEngine - by EllisLab
 *
 * @package		ExpressionEngine
 * @author		EllisLab Dev Team
 * @copyright	Copyright (c) 2003 - 2015, EllisLab, Inc.
 * @license		http://ellislab.com/expressionengine/user-guide/license.html
 * @link		http://ellislab.com
 * @since		Version 2.0
 * @filesource
 */
"use strict";EE.publish=EE.publish||{},
// The functions in this file are called from within publish if their components
// are needed. So for example EE.publish.category_editor() is called after
// the category menu is constructed.
EE.publish.category_editor=function(){
// IE caches $.load requests, so we need a unique number
function t(){return+new Date}var e,i,a,n,o=[],r=$("<div />"),c=$('<div id="cat_modal_container" />').appendTo(r),l={},s={},d=EE.BASE+"&C=admin_content&M=category_editor&group_id=",u={},h=$("<div />");for(
// categories with a lot of custom fields need to scroll
c.css({height:"100%",padding:"0 20px 0 0",// account for vert scrollbar
overflow:"auto"}),r.dialog({autoOpen:!1,height:475,width:600,modal:!0,resizable:!1,title:EE.publish.lang.edit_category,open:function(t,e){$(".ui-dialog-content").css("overflow","hidden"),$(".ui-dialog-titlebar").focus(),// doing this first to fix IE7 scrolling past the dialog's close button
$("#cat_name").focus(),
// Create listener for file field
EE.publish.file_browser.category_edit_modal()}}),
// Grab all group ids
$(".edit_categories_link").each(function(){var t=this.href.substr(this.href.indexOf("=")+1),e=t.indexOf("&");e!=-1&&(t=t.substr(0,e)),$(this).data("gid",t),o.push(t)}),n=0;n<o.length;n++)l[o[n]]=$("#cat_group_container_"+[o[n]]),l[o[n]].data("gid",o[n]),s[o[n]]=$("#cat_group_container_"+[o[n]]).find(".cat_action_buttons").remove();e=function(e){l[e].text("loading...").load(d+e+"&timestamp="+t()+" .pageContents table",function(){i.call(l[e],l[e].html(),!1)})},
// A function to setup new page events
i=function(t,a){var n=$(this),o=n.data("gid");if(t=$.trim(t),n.hasClass("edit_categories_link")&&(n=$("#cat_group_container_"+o)),"<"!==t.charAt(0)&&a)return e(o);n.closest(".cat_group_container").find("#refresh_categories").show();var l,d,u,f,_=$(t),g=_.find("form");if(g.length){c.html(_),l=c.find("input[type=submit]"),d=c.find("form"),u=d.find("#cat_name"),f=d.find("#cat_url_title"),u.keyup(function(t){u.ee_url_title(f)});var p=function(t){var e=t||$(this),a=e.serialize(),o=e.attr("action");return $.ajax({url:o,type:"POST",data:a,dataType:"html",beforeSend:function(){h.html(EE.lang.loading)},success:function(t){if(t=$.trim(t),r.dialog("close"),"<"==t[0]){var e=$(t).find(".pageContents"),a=e.find("form");0==a.length&&h.html(e),e=e.wrap("<div />").parent(),// outer html hack
i.call(n,e.html(),!0)}else i.call(n,t,!0)},error:function(t){t=$.parseJSON(t.responseText),
// cat_modal.dialog("close");
r.html(t.error)}}),!1};d.submit(p);var m={};m[l.remove().attr("value")]={text:EE.publish.lang.update,click:function(){p(d)}},r.dialog("open"),r.dialog("option","buttons",m),r.one("dialogclose",function(){e(o)})}else s[o].clone().appendTo(n).show();return!1},
// And a function to do the work
a=function(e){e.preventDefault();var a=($(this).hide(),$(this).data("gid")),n=".pageContents";($(this).hasClass("edit_cat_order_trigger")||$(this).hasClass("edit_categories_link"))&&(n+=" table"),a||(a=$(this).closest(".cat_group_container").data("gid")),
// Grab selection if checkboxes are available
$(this).hasClass("edit_categories_link")&&(u[a]=l[a].find("input:checked").map(function(){return this.value}).toArray()),
// Hide the checkboxes instead of destroying them in case publish form is
// submitted while the category editor is still showing
l[a].find("label").hide(),l[a].append(h.html(EE.lang.loading)),$.ajax({url:$(this).attr("href")+"&timestamp="+t()+n,dataType:"html",success:function(t){var e,o="";t=$.trim(t),"<"==t.charAt(0)&&(e=$(t).find(n),o=$("<div />").append(e).html(),0==e.find("form").length&&h.html(o)),i.call(l[a],o,!0)},error:function(t){t=$.parseJSON(t.responseText),h.html(t.error),i.call(l[a],t.error,!0)}})},
// Hijack edit category links to get it off the ground
$(".edit_categories_link").click(a),
// Hijack internal links (except for done and adding filename)
$(".cat_group_container a:not(.cats_done, .choose_file)").live("click",a),
// Last but not least - update the checkboxes
$(".cats_done").live("click",function(){var e=$(this).closest(".cat_group_container"),i=e.data("gid");return $(".edit_categories_link").each(function(t,e){$(this).data("gid")==i&&$(this).show()}),e.text("loading...").load(EE.BASE+"&C=content_publish&M=category_actions&group_id="+e.data("gid")+"&timestamp="+t(),function(t){e.html($(t).html()),$.each(u[i],function(t,i){e.find("input[value="+i+"]").attr("checked","checked")})}),!1})},$(document).ready(function(){EE.publish.category_editor()});