/*!
// ----------------------------------------------------------------------------
// markItUp! Universal MarkUp Engine, JQuery plugin
// v 1.1.7
// Dual licensed under the MIT and GPL licenses.
// ----------------------------------------------------------------------------
// Copyright (C) 2007-2010 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ----------------------------------------------------------------------------
*/
!function($){$.fn.markItUp=function(settings,extraSettings){var options,ctrlKey,shiftKey,altKey;
// compute markItUp! path
return ctrlKey=shiftKey=altKey=!1,options={id:"",nameSpace:"",root:"",previewInWindow:"",// 'width=800, height=600, resizable=yes, scrollbars=yes'
previewAutoRefresh:!0,previewPosition:"after",previewTemplatePath:"~/templates/preview.html",previewParserPath:"",previewParserVar:"data",resizeHandle:!0,beforeInsert:"",afterInsert:"",onEnter:{},onShiftEnter:{},onCtrlEnter:{},onTab:{},markupSet:[{}]},$.extend(options,settings,extraSettings),options.root||$("script").each(function(e,t){miuScript=$(t).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/),null!==miuScript&&(options.root=miuScript[1])}),this.each(function(){
// apply the computed path to ~/
function localize(e,t){return t?e.replace(/("|')~\//g,"$1"+options.root):e.replace(/^~\//,options.root)}
// init and build editor
function init(){id="",nameSpace="",options.id?id='id="'+options.id+'"':$$.attr("id")&&(id='id="markItUp'+$$.attr("id").substr(0,1).toUpperCase()+$$.attr("id").substr(1)+'"'),options.nameSpace&&(nameSpace='class="'+options.nameSpace+'"'),$$.wrap("<div "+nameSpace+"></div>"),$$.wrap("<div "+id+' class="markItUp"></div>'),$$.wrap('<div class="markItUpContainer"></div>'),$$.addClass("markItUpEditor"),
// add the header before the textarea
header=$('<div class="markItUpHeader"></div>').insertBefore($$),$(dropMenus(options.markupSet)).appendTo(header),
// add the footer after the textarea
footer=$('<div class="markItUpFooter"></div>').insertAfter($$),
// add the resize handle after textarea
options.resizeHandle===!0&&$.browser.safari!==!0&&(resizeHandle=$('<div class="markItUpResizeHandle"></div>').insertAfter($$).bind("mousedown",function(e){var t,r,i=$$.height(),n=e.clientY;t=function(e){return $$.css("height",Math.max(20,e.clientY+i-n)+"px"),!1},r=function(e){return $("html").unbind("mousemove",t).unbind("mouseup",r),!1},$("html").bind("mousemove",t).bind("mouseup",r)}),footer.append(resizeHandle)),
// listen key events
$$.keydown(keyPressed).keyup(keyPressed),
// bind an event to catch external calls
$$.bind("insertion",function(e,t){t.target!==!1&&get(),textarea===$.markItUp.focused&&markup(t)}),
// remember the last focus
$$.focus(function(){$.markItUp.focused=this})}
// recursively build header with dropMenus from markupset
function dropMenus(markupSet){var ul=$("<ul></ul>"),i=0;return $("li:hover > ul",ul).css("display","block"),$.each(markupSet,function(){var button=this,t="",title,li,j;if(title=button.key?(button.name||"")+" [Ctrl+"+button.key+"]":button.name||"",key=button.key?'accesskey="'+button.key+'"':"",button.separator)li=$('<li class="markItUpSeparator">'+(button.separator||"")+"</li>").appendTo(ul);else{for(i++,j=levels.length-1;j>=0;j--)t+=levels[j]+"-";li=$('<li class="markItUpButton markItUpButton'+t+i+" "+(button.className||"")+'"><a href="" '+key+' title="'+title+'">'+(button.name||"")+"</a></li>").bind("contextmenu",function(){// prevent contextmenu on mac and allow ctrl+click
return!1}).click(function(){return!1}).mousedown(function(){return button.call&&eval(button.call)(),setTimeout(function(){markup(button)},1),!1}).hover(function(){$("> ul",this).show(),$(document).one("click",function(){// close dropmenu if click outside
$("ul ul",header).hide()})},function(){$("> ul",this).hide()}).appendTo(ul),button.dropMenu&&(levels.push(i),$(li).addClass("markItUpDropMenu").append(dropMenus(button.dropMenu)))}}),levels.pop(),ul}
// markItUp! markups
function magicMarkups(e){
// [![prompt]!], [![prompt:!:value]!]
return e?(e=e.toString(),e=e.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(e,t){var r=t.split("|!|");return altKey===!0?void 0!==r[1]?r[1]:r[0]:void 0===r[1]?"":r[0]}),e=e.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(e,t){var r=t.split(":!:");return abort!==!0&&(value=prompt(r[0],r[1]?r[1]:""),null===value&&(abort=!0),value)})):""}
// prepare action
function prepare(e){return $.isFunction(e)&&(e=e(hash)),magicMarkups(e)}
// build block to insert
function build(e){return openWith=prepare(clicked.openWith),placeHolder=prepare(clicked.placeHolder),replaceWith=prepare(clicked.replaceWith),closeWith=prepare(clicked.closeWith),""!==replaceWith?block=openWith+replaceWith+closeWith:""===selection&&""!==placeHolder?block=openWith+placeHolder+closeWith:block=openWith+(e||selection)+closeWith,{block:block,openWith:openWith,replaceWith:replaceWith,placeHolder:placeHolder,closeWith:closeWith}}
// define markup to insert
function markup(e){var t,r,i,n;if(hash=clicked=e,get(),$.extend(hash,{line:"",root:options.root,textarea:textarea,selection:selection||"",caretPosition:caretPosition,ctrlKey:ctrlKey,shiftKey:shiftKey,altKey:altKey}),
// callbacks before insertion
prepare(options.beforeInsert),prepare(clicked.beforeInsert),ctrlKey===!0&&shiftKey===!0&&prepare(clicked.beforeMultiInsert),$.extend(hash,{line:1}),ctrlKey===!0&&shiftKey===!0){for(lines=selection.split(/\r?\n/),r=0,i=lines.length,n=0;n<i;n++)""!==$.trim(lines[n])?($.extend(hash,{line:++r,selection:lines[n]}),lines[n]=build(lines[n]).block):lines[n]="";string={block:lines.join("\n")},start=caretPosition,t=string.block.length+($.browser.opera?i:0)}else ctrlKey===!0?(string=build(selection),start=caretPosition+string.openWith.length,t=string.block.length-string.openWith.length-string.closeWith.length,t-=fixIeBug(string.block)):shiftKey===!0?(string=build(selection),start=caretPosition,t=string.block.length,t-=fixIeBug(string.block)):(string=build(selection),start=caretPosition+string.block.length,t=0,start-=fixIeBug(string.block));""===selection&&""===string.replaceWith&&(caretOffset+=fixOperaBug(string.block),start=caretPosition+string.openWith.length,t=string.block.length-string.openWith.length-string.closeWith.length,caretOffset=$$.val().substring(caretPosition,$$.val().length).length,caretOffset-=fixOperaBug($$.val().substring(0,caretPosition))),$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition}),string.block!==selection&&abort===!1?(insert(string.block),set(start,t)):caretOffset=-1,get(),$.extend(hash,{line:"",selection:selection}),
// callbacks after insertion
ctrlKey===!0&&shiftKey===!0&&prepare(clicked.afterMultiInsert),prepare(clicked.afterInsert),prepare(options.afterInsert),
// refresh preview if opened
previewWindow&&options.previewAutoRefresh&&refreshPreview(),
// reinit keyevent
shiftKey=altKey=ctrlKey=abort=!1}
// Substract linefeed in Opera
function fixOperaBug(e){return $.browser.opera?e.length-e.replace(/\n*/g,"").length:0}
// Substract linefeed in IE
function fixIeBug(e){return $.browser.msie?e.length-e.replace(/\r*/g,"").length:0}
// add markup
function insert(e){if(document.selection){var t=document.selection.createRange();t.text=e}else $$.val($$.val().substring(0,caretPosition)+e+$$.val().substring(caretPosition+selection.length,$$.val().length))}
// set a selection
function set(e,t){if(textarea.createTextRange){
// quick fix to make it work on Opera 9.5
if($.browser.opera&&$.browser.version>=9.5&&0==t)return!1;range=textarea.createTextRange(),range.collapse(!0),range.moveStart("character",e),range.moveEnd("character",t),range.select()}else textarea.setSelectionRange&&textarea.setSelectionRange(e,e+t);textarea.scrollTop=scrollPosition,textarea.focus()}
// get the selection
function get(){if(textarea.focus(),scrollPosition=textarea.scrollTop,document.selection)if(selection=document.selection.createRange().text,$.browser.msie){// ie
var e=document.selection.createRange(),t=e.duplicate();for(t.moveToElementText(textarea),caretPosition=-1;t.inRange(e);)// fix most of the ie bugs with linefeeds...
t.moveStart("character"),caretPosition++}else// opera
caretPosition=textarea.selectionStart;else// gecko & webkit
caretPosition=textarea.selectionStart,selection=$$.val().substring(caretPosition,textarea.selectionEnd);return selection}
// open preview window
function preview(){!previewWindow||previewWindow.closed?options.previewInWindow?previewWindow=window.open("","preview",options.previewInWindow):(iFrame=$('<iframe class="markItUpPreviewFrame"></iframe>'),"after"==options.previewPosition?iFrame.insertAfter(footer):iFrame.insertBefore(header),previewWindow=iFrame[iFrame.length-1].contentWindow||frame[iFrame.length-1]):altKey===!0&&(
// Thx Stephen M. Redd for the IE8 fix
iFrame?iFrame.remove():previewWindow.close(),previewWindow=iFrame=!1),options.previewAutoRefresh||refreshPreview()}
// refresh Preview window
function refreshPreview(){renderPreview()}function renderPreview(){return""!==options.previewParserPath?$.ajax({type:"POST",url:options.previewParserPath,data:options.previewParserVar+"="+encodeURIComponent($$.val()),success:function(e){writeInPreview(localize(e,1))}}):template||$.ajax({url:options.previewTemplatePath,success:function(e){writeInPreview(localize(e,1).replace(/<!-- content -->/g,$$.val()))}}),!1}function writeInPreview(e){if(previewWindow.document){try{sp=previewWindow.document.documentElement.scrollTop}catch(t){sp=0}previewWindow.document.open(),previewWindow.document.write(e),previewWindow.document.close(),previewWindow.document.documentElement.scrollTop=sp}options.previewInWindow&&previewWindow.focus()}
// set keys pressed
function keyPressed(e){if(shiftKey=e.shiftKey,altKey=e.altKey,ctrlKey=(!e.altKey||!e.ctrlKey)&&e.ctrlKey,"keydown"===e.type){if(ctrlKey===!0&&(li=$('a[accesskey="'+String.fromCharCode(e.keyCode)+'"]',header).parent("li"),0!==li.length))return ctrlKey=!1,setTimeout(function(){li.triggerHandler("mousedown")},1),!1;if(13===e.keyCode||10===e.keyCode)// Enter key
// Enter key
// Enter + Ctrl
// Enter + Shift
// only Enter
return ctrlKey===!0?(ctrlKey=!1,markup(options.onCtrlEnter),options.onCtrlEnter.keepDefault):shiftKey===!0?(shiftKey=!1,markup(options.onShiftEnter),options.onShiftEnter.keepDefault):(markup(options.onEnter),options.onEnter.keepDefault);if(9===e.keyCode)// Tab key
// Tab key
return 1!=shiftKey&&1!=ctrlKey&&1!=altKey&&(caretOffset!==-1?(get(),caretOffset=$$.val().length-caretOffset,set(caretOffset,0),caretOffset=-1,!1):(markup(options.onTab),options.onTab.keepDefault))}}var $$,textarea,levels,scrollPosition,caretPosition,caretOffset,clicked,hash,header,footer,previewWindow,template,iFrame,abort;$$=$(this),textarea=this,levels=[],abort=!1,scrollPosition=caretPosition=0,caretOffset=-1,options.previewParserPath=localize(options.previewParserPath),options.previewTemplatePath=localize(options.previewTemplatePath),init()})},$.fn.markItUpRemove=function(){return this.each(function(){var e=$(this).unbind().removeClass("markItUpEditor");e.parent("div").parent("div.markItUp").parent("div").replaceWith(e)})},$.markItUp=function(e){var t={target:!1};return $.extend(t,e),t.target?$(t.target).each(function(){$(this).focus(),$(this).trigger("insertion",[t])}):void $("textarea").trigger("insertion",[t])}}(jQuery);