/*  WysiHat - WYSIWYG JavaScript framework, version 0.2.1
 *  (c) 2008-2010 Joshua Peek
 *  JQ-WysiHat - jQuery port of WysiHat to run on jQuery
 *  (c) 2010 Scott Williams & Aaron Gustafson
 *  EL-WysiHat - Extensive rewrite of JQ-WysiHat for ExpressionEngine
 *  (c) 2012 EllisLab, Inc.
 *
 *  WysiHat is freely distributable under the terms of an MIT-style license.
 *--------------------------------------------------------------------------*/
!function(t,e,n){
// ---------------------------------------------------------------------
/**
 * This file is rather lengthy, so I've organized it into rough
 * sections. I suggest reading the documentation for each section
 * to get a general idea of where things happen. The list below
 * are headers (except for #1) so that you can search for them.
 *
 * Core Namespace
 * Editor Class
 * Element Manager
 * Change Events
 * Paste Handler
 * Key Helper
 * Event Class
 * Undo Class
 * Selection Utility
 * Editor Commands
 * Commands Mixin
 * Formatting Class
 * Blank Button
 * Toolbar Class
 * Defaults and jQuery Binding
 * Browser Compat Classes
 */
// ---------------------------------------------------------------------
/**
 * WysiHat Namespace
 *
 * Tracks registered buttons and provides the basic setup function.
 * Usually the latter should be called through $.fn.wysihat instead.
 */
var i=window.WysiHat={name:"WysiHat",/**
	 * Add a button
	 *
	 * This does not mean it will be displayed,
	 * it only means that it will be a valid button
	 * option in $.fn.wysihat.
	 */
addButton:function(t,e){this._buttons[t]=e},/**
	 * Attach WysiHat to a field
	 *
	 * This is what makes it all happen. Most of the
	 * time you will want to use the jQuery.fn version
	 * though:
	 * $(textarea).wysihat(options);
	 */
attach:function(t,n){return new i.Editor(e(t),n)},/**
	 * Simple Prototypal Inheritance
	 *
	 * Acts a lot like ES5 object.create with the addition
	 * of a <parent> property on the child which contains
	 * proxied versions of the parent *methods*. Giving us easy
	 * extending if we want it (we do).
	 *
	 * @todo bad place for this, it looks like you can extend wysihat
	 */
inherit:function(t,n){function i(){var n;
// Proxy the parent methods to get .parent working
this.parent={};for(n in t)t.hasOwnProperty(n)&&(this.parent[n]=e.proxy(t[n],this))}var r,o;i.prototype=t,o=new i;
// No hasOwn check here. If you pass an object with
// a prototype as props, then you're a JavascrHipster.
for(r in n)o[r]=n[r];return o},/**
	 * Available buttons.
	 * Don't touch it, use addButton above.
	 */
_buttons:[]};
// ---------------------------------------------------------------------
/**
 * WysiHat.Editor
 *
 * The parent class of the editor. Instantiating it gets the whole
 * snafu going. Holds the textarea and editor objects as well as
 * all of the utility classes.
 */
// ---------------------------------------------------------------------
i.Editor=function(t,e){this.$field=t.hide(),this.$editor=this.create(),t.before(this.$editor),this.createWrapper(),this.Element=i.Element,this.Commands=i.Commands,this.Formatting=i.Formatting,this.init(e)},i.Editor.prototype={/**
	 * Special empty entity so that we always have
	 * paragraph tags to work with.
	 */
_emptyChar:String.fromCharCode(8203),_empty:function(){return"<p>"+this._emptyChar+"</p>"},isEmpty:function(){return html=this.$editor.html(),""==html||"\0"==html||"<br>"==html||"<br/>"==html||"<p></p>"==html||"<p><br></p>"==html||"<p>\0</p>"==html||html==this._empty()},/**
	 * Create the main editor html
	 */
create:function(){return e("<div/>",{"class":i.name+"-editor",data:{wysihat:this,field:this.$field},role:"application",contentEditable:"true",
// Respect textarea's existing row count settings
height:this.$field.height(),
// Text direction
dir:this.$field.attr("dir"),html:i.Formatting.getBrowserMarkupFrom(this.$field)})},/**
	 * Wrap everything up so that we can do things
	 * like the image overlay without crazy hacks.
	 */
createWrapper:function(){var t=this;this.$field.add(this.$editor).wrapAll(e("<div/>",{"class":i.name+"-container",
// keep sizes in sync
mouseup:function(){t.$field.is(":visible")?t.$editor.height(t.$field.outerHeight()):t.$editor.is(":visible")&&t.$field.height(t.$editor.outerHeight())}}))},/**
	 * Setup all of the utility classes
	 */
init:function(t){var n=this.$editor,r=this;this.Undo=new i.Undo,this.Selection=new i.Selection(n),this.Event=new i.Event(this),this.Toolbar=new i.Toolbar(n,t.buttons),this.$field.change(e.proxy(this,"updateEditor")),
// if, on submit, the editor is active, we
// need to sync to the field before sending the data
n.closest("form").submit(function(){
// Instead of checking to see if the $editor is visible,
// we check to see if the $field is NOT visible to account
// cases where the editor may be hidden in a dynamic layout
r.$field.is(":visible")||r.updateField()})},/**
	 * Update the editor's textarea
	 *
	 * Syncs the editor and its field from the editor's content.
	 */
updateField:function(){this.$field.val(i.Formatting.getApplicationMarkupFrom(this.$editor))},/**
	 * Update the editor contents
	 *
	 * Syncs the editor and its field from the fields's content.
	 */
updateEditor:function(){this.$editor.html(i.Formatting.getBrowserMarkupFrom(this.$field)),this.selectEmptyParagraph()},/**
	 * Select Empty Paragraph
	 *
	 * Makes sure we actually have a paragraph to put our cursor in
	 * when the editor is completely empty.
	 */
selectEmptyParagraph:function(){var n,i=this.$editor,r=(i.html(),window.getSelection());this.isEmpty()&&(i.html(this._empty()),n=t.createRange(),r.removeAllRanges(),n.selectNodeContents(i.find("p").get(0)),
// Get Firefox's cursor behaving naturally by clearing out the
// zero-width character; if we run this for webkit too, then it
// breaks Webkit's cursor behavior
e.browser.mozilla&&i.find("p").eq(0).html(""),r.addRange(n))}},i.Editor.constructor=i.Editor,
// ---------------------------------------------------------------------
/**
 * Element Manager
 *
 * Holds information about available elements and can be used to
 * check if an element is of a valid type.
 */
// ---------------------------------------------------------------------
i.Element=function(){function t(t){for(var e=arguments.length,n=!1;0==n&&e-- >1;)n=t.is(arguments[e].join(","));return n}
// @todo add tr somewhere
var e=["blockquote","details","fieldset","figure","td"],n=["article","aside","header","footer","nav","section"],i=["blockquote","details","dl","ol","table","ul"],r=["dd","dt","li","summary","td","th"],o=["address","caption","dd","div","dt","figcaption","figure","h1","h2","h3","h4","h5","h6","hgroup","hr","p","pre","summary","small"],s=["audio","canvas","embed","iframe","img","object","param","source","track","video"],a=["a","abbr","b","br","cite","code","del","dfn","em","i","ins","kbd","mark","span","q","samp","s","strong","sub","sup","time","u","var","wbr"],l=["b","code","del","em","i","ins","kbd","span","s","strong","u","font"],d=["address","blockquote","div","dd","dt","h1","h2","h3","h4","h5","h6","p","pre"],c=["button","datalist","fieldset","form","input","keygen","label","legend","optgroup","option","output","select","textarea"];return{isRoot:function(n){return t(n,e)},isSection:function(e){return t(e,n)},isContainer:function(e){return t(e,i)},isSubContainer:function(e){return t(e,r)},isBlock:function(s){return t(s,e,n,i,r,o)},isHTML4Block:function(e){return t(e,d)},isContentElement:function(e){return t(e,r,o)},isMediaElement:function(e){return t(e,s)},isPhraseElement:function(e){return t(e,a)},isFormatter:function(e){return t(e,l)},isFormComponent:function(e){return t(e,c)},getRoots:function(){return e},getSections:function(t){return n},getContainers:function(){return i},getSubContainers:function(){return r},getBlocks:function(){return e.concat(n,i,r,o)},getHTML4Blocks:function(){return d},getContentElements:function(){return r.concat(o)},getMediaElements:function(){return s},getPhraseElements:function(){return a},getFormatters:function(){return l},getFormComponents:function(){return c}}}(),
// ---------------------------------------------------------------------
/**
 * Change Events
 *
 * Binds to various events to fire things such fieldChange and
 * editorChange. Currently also handles browser insertion for
 * empty events.
 *
 * Will probably be removed in favor of a real event system.
 */
// ---------------------------------------------------------------------
e(t).ready(function(){var n,i,r=e(t);"onselectionchange"in t&&"selection"in t?(i=function(){var n=t.selection.createRange(),i=n.parentElement();e(i).trigger("WysiHat-selection:change")},r.on("selectionchange",i)):(i=function(){var i,r,o=t.activeElement,s=o.tagName.toLowerCase();if("textarea"==s||"input"==s)n=null;else{if(i=window.getSelection(),i.rangeCount<1)return;if(r=i.getRangeAt(0),r&&r.equalRange(n))return;for(n=r,o=r.commonAncestorContainer;o.nodeType==Node.TEXT_NODE;)o=o.parentNode}e(o).trigger("WysiHat-selection:change")},r.mouseup(i),r.keyup(i))}),
// ---------------------------------------------------------------------
/**
 * Paste Handler
 *
 * A paste helper utility. How this works, is that browsers will
 * fire paste before actually inserting the text. So that we can
 * quickly create a new contentEditable object that is outside the
 * viewport. Focus it. And the text will go in there. That makes
 * it much easier for us to clean up.
 */
// ---------------------------------------------------------------------
i.Paster=function(){
// helper element to do cleanup on
var n=e('<div id="paster" contentEditable="true"/>').css({width:"100%",height:10,position:"absolute",left:-9999}),r=50,o=200;return{getHandler:function(s){return function(a,l){var d=s.Commands.getRanges(),c=d[0].startContainer,h=0;return n.html("").css("top",e(t).scrollTop()),n.appendTo(t.body),n.focus(),setTimeout(function u(){
// slow browser? wait a little longer
if(!n.html()&&(h+=r,h<o))return void setTimeout(u,r);var t=e(c).closest(i.Element.getBlocks().join(","));t.length?s.Formatting.cleanupPaste(n,t.get(0).tagName):s.Formatting.cleanupPaste(n),s.$editor.focus(),s.Commands.restoreRanges(d),
// attempt to clear out the range, this is necessary if they
// select and paste. The browsers will still report the old contents.
d[0].deleteContents?d[0].deleteContents():s.Commands.insertHTML(""),s.isEmpty()&&
// on an empty editor we want to completely replace
// otherwise the first paragraph gets munged
s.selectEmptyParagraph(),s.Commands.insertHTML(n.html());
// The final cleanup pass will inevitably lose the selection
// as it removes garbage from the markup.
var a=s.Selection.get();
// This is basically a final cleanup pass. I wanted to avoid
// running these since they touch the whole editor and not just
// the pasted bits, but these methods are great at removing
// markup cruft. So here we are.
s.updateField(),s.updateEditor(),s.Selection.set(a),n=n.remove(),l()},r),!1}}}}();
// ---------------------------------------------------------------------
/**
 * Key Helper
 *
 * Small utility that holds key values and common shortcuts.
 */
// ---------------------------------------------------------------------
var r,o;r=function(){
// numbers
for(var t={3:"enter",8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down",46:"delete",91:"mod",92:"mod",93:"mod",
// argh
59:";",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"up",63233:"down",63234:"left",63235:"right",63272:"delete"},e=0;e<10;e++)t[e+48]=String(e);
// letters
for(var e=65;e<=90;e++)t[e]=String.fromCharCode(e);return t}(),o=function(){
// @todo @future would be cool if cmd+s triggered an autosave
// @todo give addon folks a way to add to these?
var t=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),e=t||/Mac/.test(navigator.platform),n=e?"cmd":"ctrl";return{cut:n+"-x",copy:n+"-c",paste:n+"-v",undo:n+"-z",redo:n+"-shift-z",
// @todo move to tools?
bold:n+"-b",italics:n+"-i",underline:n+"-u"}}(),
// ---------------------------------------------------------------------
/**
 * Event Class
 *
 * Big kahuna of event handlers. This deals with both public and
 * private events.
 *
 * Here's the basic intended functionality. It binds on all of the
 * browser events that will ever fire on the darned thing. Then,
 * it looks for actions like typing, pasting, button pushing and
 * records their before and after states for undoing.
 *
 * It also holds names of the buttons, so that a button action can
 * be triggered directly. Loosely coupling buttons and letting devs
 * play with triggering actions in different ways without completely
 * copying our buttons.
 */
// ---------------------------------------------------------------------
i.Event=function(t){this.Editor=t,this.$editor=t.$editor,this.eventHandlers=[],this.textStart=null,this.pasteStart=null,this.textDeleting=!1,// typing backwards ;)
// helper classes
this.Undo=t.Undo,this.Selection=t.Selection,this._hijack_events(),
// special events
this.add("paste",i.Paster.getHandler(t))},i.Event.prototype={/**
	 * Add a handler for editor events. These
	 * are things such as "bold" or "paste". Not
	 * browser events!
	 */
add:function(t,e){this.eventHandlers[t]=e},/**
	 * Do we have a handler?
	 */
has:function(t){return t in this.eventHandlers},/**
	 * Run the event handler.
	 *
	 * @param action event name
	 * @param state current state
	 * @param finalize completion callback for asynchronous tools
	 */
run:function(t,e,n){var i=this.eventHandlers[t](e,n);
// false means you run finalize yourself
// in all other cases, we run it. If it was
// already run, no harm done.
i!==!1&&n()},/**
	 * Pass an event to its handler
	 *
	 * $editor.fire('bold')
	 */
fire:function(t){var n,i,r=this;
// special case - undo and redo
if(this._saveTextState(t),"undo"==t||"redo"==t){var o,s="undo"==t?"hasUndo":"hasRedo";return void(this.Undo[s]()&&(o=this.Undo[t](this.$editor.html()),this.$editor.html(o[0]),this.Selection.set(o[1])))}
// mark text change
// setup a finalizer for the event.
// make sure it can only be run once
return!this.has(t)||(n=this.getState(),i=function(){this.hasRun||(this.hasRun=!0,r.textChange(n),r._saveTextState(t),r.$editor.focus())},void this.run(t,n,e.proxy(i,i)))},/**
	 * Mark a text change. Takes the
	 * objects from getState as before
	 * and after [optional] parameters.
	 *
	 * @return void
	 */
textChange:function(t,e){e=e||this.getState(),
// this.Editor.updateField();
this.Editor.selectEmptyParagraph(),this.Undo.push(t.html,e.html,t.selection,e.selection)},/**
	 * Check if a current event matches
	 * a key action we're looking for
	 *
	 * isKeyCombo('ctrl-x', evt)
	 * isKeyCombo('esc', evt)
	 *
	 * @return bool
	 */
isKeyCombo:function(t,e){var n="",i="",o=t.indexOf("-")>-1;
// european altGr
// european altGr
return!e.altGraphKey&&(e.metaKey&&(n+="cmd-"),e.altKey&&(n+="alt-"),e.ctrlKey&&(n+="ctrl-"),e.shiftKey&&(n+="shift-"),!o&&t.length>1?n.replace(/-$/,"")==t:(i=r[e.keyCode],!!i&&t.toLowerCase()==(n+i).toLowerCase()))},/**
	 * Check for named events.
	 *
	 * @todo list of named events
	 * @todo let plugins add to them
	 *
	 * isEvent('copy', evt)
	 */
isEvent:function(t,e){var n=e.type;
// just asking for a type?
if(n==t)return!0;
// key events can look up shortcuts
// but if it's not a key event, we're done
if("key"!=n.substr(0,3))return!1;var i=o[t];return!!i&&this.isKeyCombo(i,e)},/**
	 * Get the editor's current state
	 */
getState:function(){return{html:this.$editor.html(),selection:this.Selection.get()}},/**
	 * Save the state of the text they have
	 * typed so far.
	 */
_saveTextState:function(t){
// some events shouldn't affect this
// @todo figure out the whole list
"redo"!=t&&this.textStart&&(this.textChange(this.textStart),this.textStart=null)},
// ---------------------
// INTERNAL EVENT SYSTEM
// These functions handle dom events, they do _not_ get called
// from a triggered event (but they may trigger events).
// ---------------------
/**
	 * Takes control of all editor events
	 *
	 * This is what makes it all work. If we fail here, we're
	 * most definitely up the creek. No kidding.
	 */
_hijack_events:function(){var t={
// @todo remember one event type can still have the
// effects / fire another (keyEvent can result in a
// selectionChange), but initially the shortest shortest
// route is best.
// 'focusout change': $.proxy(this._blurEvent, this),
"selectionchange focusin mousedown":e.proxy(this._rangeEvent,this),"keydown keyup keypress":e.proxy(this._keyEvent,this),"cut undo redo paste input contextmenu":e.proxy(this._menuEvent,this),focus:e.proxy(this._focusEvent,this)};this.$editor.on(t)},_focusEvent:function(){this.Editor.isEmpty()&&
// on an empty editor we want to completely replace
// otherwise the first paragraph gets munged
this.Editor.selectEmptyParagraph()},/**
	 * Key Combo Events
	 *
	 * Looks for known named key combinations and fires the
	 * correct event.
	 */
_keyComboEvent:function(t){var e,n=["undo","redo","paste"];if("keydown"==t.type)for(;e=n.shift();)if(this.isEvent(e,t))return"paste"==e?(this.fire(e),!0):(t.preventDefault(),this.fire(e),!1);return!0},/**
	 * Handle key events
	 *
	 * Order most definitely matters here - don't touch it!
	 */
_keyEvent:function(t){
// currently ignoring these remove it if you
// need it, shouldn't break anything
if("keypress"==t.type)return!0;if(t.ctrlKey||t.altKey||t.metaKey)return this._keyComboEvent(t);if("keydown"==t.type)"backspace"==r[t.keyCode]?0==this.textDeleting&&(this.textDeleting=!0,this._saveTextState("backspace")):1==this.textDeleting&&(this.textDeleting=!1,this._saveTextState("keypress")),null==this.textStart&&(this.textStart=this.getState());else if("keyup"==t.type)switch(r[t.keyCode]){case"up":case"down":case"left":case"right":this._saveTextState("keyup")}},/**
	 * Potential Range Changes
	 *
	 * @todo put a fast check for range change here instead of
	 * grabbing the range and doing the string length trick in the util
	 */
_rangeEvent:function(t){this._saveTextState(t.type)},/**
	 * Events that can be triggered in the user's context
	 * menu. This doesn't work too well, we may need a pair
	 * of buttons for undo and redo. (@todo)
	 */
_menuEvent:function(t){for(var e,n=["undo","redo","paste"];e=n.shift();)this.isEvent(e,t)&&("paste"!=e&&t.preventDefault(),this.fire(e))}},i.Event.constructor=i.Event,
// ---------------------------------------------------------------------
/**
 * Undo Class
 *
 * Implements a basic undo and redo stack.
 *
 * As you would expect it keeps track of changes as they are handed
 * to it. Usually this is in the form of two pieces of html repre-
 * senting the before and after state of the editor. It will do a
 * simple diff to reduce its memory footprint.
 *
 * Additionally, it keeps track of the selection at the event end
 * points to give a more natural undo experience (try it in your
 * text editor - it reselects).
 */
// ---------------------------------------------------------------------
i.Undo=function(){this.max_depth=75,this.saved=[],this.index=0},i.Undo.prototype={/**
	 * Add a change to the undo stack
	 *
	 * Takes a before and after string. These can be arrays as long
	 * as equal indexes match up.
	 */
push:function(t,n,i,r){var o=[],s=this;o=e.isArray(t)?e.map(t,function(t,e){return s._diff(t,n[e])}):this._diff(t,n),o&&(
// remove any redos we might have
this.index<this.saved.length&&(this.saved=this.saved.slice(0,this.index),this.index=this.saved.length),
// max_depth check
this.saved.length>this.max_depth&&(this.saved=this.saved.slice(this.saved.length-this.max_depth),this.index=this.saved.length),this.index++,this.saved.push({changes:o,selection:[i,r]}))},/**
	 * Undo the current event stack item
	 *
	 * Takes a string to undo on and returns the new one
	 */
undo:function(t){this.index--;for(var e=this.saved[this.index],n=e.changes,i=n.length,r=0;r<i;r++)change=n[r],t=t.substring(0,change[0])+change[1]+t.substring(change[0]+change[2].length);return[t,e.selection[0]]},/**
	 * Redo the current event stack item
	 *
	 * Takes a string to redo on and returns the new one
	 */
redo:function(t){for(var e=this.saved[this.index],n=e.changes,i=n.length,r=i-1;r>=0;r--)change=n[r],t=t.substring(0,change[0])+change[2]+t.substring(change[0]+change[1].length);return this.index++,[t,e.selection[1]]},/**
	 * Undo available?
	 */
hasUndo:function(){return 0!=this.index},/**
	 * Redo available?
	 */
hasRedo:function(){return this.index!=this.saved.length},/**
	 * Simple line diffing algo
	 *
	 * Pretty naive implementation, but enough to recognize
	 * identical ends and wrapping. The two most common cases.
	 *
	 * Returns and array of differences. A difference looks like
	 * this: [index, old, new]. Returns null if str1 and str2
	 * are identical.
	 */
_diff:function(t,e){var n,i=t.length,r=e.length,o=0,s=0;
// easiest case
if(t==e)return null;
// trim identical stuff off the beginning
for(;o<i&&o<r&&t[o]==e[o];)o++;
// trim identical stuff off the beginning
for(;s<i&&s<r&&t[i-s-1]==e[r-s-1];)s++;
// common case - wrapping / unwrapping
// It involved walking through the whole thing? We can ignore
// it the code below will take care of finding the smallest difference.
// We have something to trim. Do it and recalculate lengths.
// common case - wrapping / unwrapping
// always check for shorter in longer
return o==Math.min(i,r)&&(o=0),s==Math.min(i,r)&&(s=0),(o||s)&&(t=t.substring(o,i-s+1),e=e.substring(o,r-s+1),i=t.length,r=e.length),i!==r&&(n=i<r?e.indexOf(t):t.indexOf(e),n>-1)?i<r?[[o,"",e.substr(0,n)],// wrapping before text
[o+i,"",e.substr(n+i)]]:[[o,t.substr(0,n),""],// unwrap before
[o+n+r,t.substr(n+r),""]]:[[o,t,e]]}},i.Undo.constructor=i.Undo,
// ---------------------------------------------------------------------
/**
 * Selection Utility
 *
 * Abstracts out some of the more simple range manipulations.
 *
 * Working with ranges can be a PITA, especially for simple cursor
 * movements like those the undo class needs to do to recreate its
 * selections. To make this a little easier on everyone, we built a
 * small utility.
 *
 * Provides get(), set(), and toString().
 */
// ---------------------------------------------------------------------
i.Selection=function(t){this.$editor=t,this.top=this.$editor.get(0)},i.Selection.prototype={_replace:new RegExp("[\r\n]","g"),/**
	 * Get current selection offsets based on
	 * the editors *text* (not html!).
	 *
	 * @return [startIndex, endIndex]
	 */
get:function(e){var i,r,o=window.getSelection(),s=t.createRange();if(e===n){if(!o.rangeCount)return[0,0];e=o.getRangeAt(0)}return i=e.toString().replace(this._replace,"").length,s.setStart(this.top,0),s.setEnd(e.startContainer,e.startOffset),r=s.toString().replace(this._replace,"").length,[r,r+i]},/**
	 * Create a selection or move the current one.
	 * Again, this is text! Omit end to move the cursor.
	 *
	 * @param startIndex, endIndex
	 * OR
	 * @param [startIndex, endIndex] // as returned by get
	 */
set:function(i,r){e.isArray(i)&&(r=i[1],i=i[0]);var o,s,a=window.getSelection(),l=t.createRange();o=this._getOffsetNode(this.top,i,!0),l.setStart.apply(l,o),
// collapsed
r===n||r==i?(r=i,l.collapse(!0)):(s=this._getOffsetNode(this.top,r,!1),l.setEnd.apply(l,s)),a.removeAllRanges(),a.addRange(l)},/**
	 * Get the contents of the current selection
	 */
toString:function(t){var e=window.getSelection();return t===n&&(t=e.getRangeAt(0)),t.toString()},/**
	 * Given a node and and an offset, find the correct
	 * textnode and offset that we can create a range with.
	 *
	 * You probably don't want to touch this :).
	 */
_getOffsetNode:function(t,n,r){function o(t){if(t.nodeType==Node.TEXT_NODE||t.nodeType==Node.CDATA_SECTION_NODE)n>0&&(s=t,n-=t.nodeValue.replace(/\n/g,"").length);else for(var e=0,i=t.childNodes.length;n>0&&e<i;++e)o(t.childNodes[e])}var s=t,a=0,l=this.$editor.get(0).lastChild,d=i.Element.getBlocks();if(o(t),0==n){
// weird case where they try to select a non text node
// e.g. The beginning of the editor.
if(s.nodeType!=Node.TEXT_NODE){
// do our best to get to a text node
for(;null!==s.firstChild;)s=s.firstChild;return[s,0]}
// Offset 0 means we're at the end of the node.
// If we're starting a selection and the end is a
// block node, we need to jump to the next one so
// that we don't select that initial newline.
if(r){for(var c=0;null===s.nextSibling&&s.parentNode!==l;)c++,s=s.parentNode;
// and back down into the blocks
for(
// the current one is a block element
// and we can move further? do it.
e.inArray(s.nodeName.toLowerCase(),d)>-1&&null!==s.nextSibling&&(s=s.nextSibling);c&&s.firstChild&&"br"!=s.firstChild.nodeName.toLowerCase();)c--,s=s.firstChild}}return a=s.nodeValue?s.nodeValue.length:0,[s,a+n]}},i.Selection.constructor=i.Selection,
// ---------------------------------------------------------------------
/**
 * Editor Commands
 *
 * Container for reasonable base commands, such as bold, italicize,
 * and others. Currently also contains a normalized execCommand
 * function that may be moved to the browser normalization section.
 *
 * These currently extend the editor element, so you can call any
 * of them: $editor.boldSelection().
 */
// ---------------------------------------------------------------------
i.Commands=function(){
// setup the empty objects
var n={is:{},make:{}},i={
// no frills mapping to execCommand
makeEasy:["bold","underline","italic","strikethrough","fontname","fontsize","forecolor","createLink","insertImage","insertOrderedList","insertUnorderedList"],
// selectors to use for selectionIsWithin
isSelectors:{bold:"b, strong",italic:"i, em",link:"a[href]",underline:"u, ins",indented:"blockquote",strikethrough:"s, del",orderedList:"ol",unorderedList:"ul"},
// native queryCommandState options
isNativeState:{bold:"bold",italic:"italic",underline:"underline",strikethrough:"strikethrough",orderedList:"insertOrderedList",unorderedList:"insertUnorderedList"}};
// Fill in the simple make() commands
e.each(i.makeEasy,function(t,e){n.make[e]=function(t){n.execCommand(e,!1,t)}}),
// Fill in the simple is() commands
e.each(i.isSelectors,function(e,r){e in i.isNativeState?n.is[e]=function(){return n.selectionIsWithin(r)||t.queryCommandState(i.isNativeState[e])}:n.is[e]=function(){return n.selectionIsWithin(r)}});
// Setup a few aliases for nicer usage
// i.e. this.is('underlined')
var r={is:{linked:"link",underlined:"underline",struckthrough:"strikethrough",ol:"orderedList",ul:"unorderedList"},make:{italicize:"italic",font:"fontname",color:"forecolor",link:"createLink",ol:"insertOrderedList",ul:"insertUnorderedList",orderedList:"insertOrderedList",unorderedList:"insertUnorderedList",align:"alignment"}};
// and return that for now, we'll extend it with
// some handwritten custom methods below.
// add the aliases to the is and make objects
// Do some feature detection for styling
// with css instead of font tags
return e.each(r.is,function(t,e){n.is[t]=function(){return n.is[e]()}}),e.each(r.make,function(t,i){n.make[t]=e.proxy(n.make,i)}),n.noSpans=function(){try{return t.execCommand("styleWithCSS",0,!1),function(){t.execCommand("styleWithCSS",0,!1)}}catch(n){try{return t.execCommand("useCSS",0,!0),function(){t.execCommand("useCSS",0,!0)}}catch(n){try{return t.execCommand("styleWithCSS",!1,!1),function(){t.execCommand("styleWithCSS",!1,!1)}}catch(n){return e.noop}}}}(),n}(),/**
 * Add the more complex commands
 */
e.extend(i.Commands,{_blockElements:i.Element.getContentElements().join(",").replace(",div,",",div:not(."+i.name+"-editor),"),
// Map to make sense of weird property names
styleSelectors:{fontname:"fontFamily",fontsize:"fontSize",forecolor:"color",hilitecolor:"backgroundColor",backcolor:"backgroundColor"},
// Valid commands to execCommand
validCommands:["backColor","bold","createLink","fontName","fontSize","foreColor","hiliteColor","italic","removeFormat","strikethrough","subscript","superscript","underline","unlink","delete","formatBlock","forwardDelete","indent","insertHorizontalRule","insertHTML","insertImage","insertLineBreak","insertOrderedList","insertParagraph","insertText","insertUnorderedList","justifyCenter","justifyFull","justifyLeft","justifyRight","outdent","copy","cut","paste","selectAll","styleWithCSS","useCSS"],/**
	 * Just like the standard browser execCommand
	 * with some precaucions.
	 */
execCommand:function(e,n,i){this.noSpans();try{t.execCommand(e,n,i)}catch(r){return null}},isMakeCommand:function(t){return t in this.make},isValidExecCommand:function(t){return e.inArray(t,this.validCommands)>-1},queryCommandState:function(e){if(e in this.is)return this.is[e]();try{return t.queryCommandState(e)}catch(n){return null}},/**
	 * Takes the current selection and checks if it is
	 * within a selector given as a parameter.
	 */
selectionIsWithin:function(t){var n=i.Element.getPhraseElements(),r=!1,o=t.split(","),s=o.length,a=window.getSelection(),l=a.anchorNode,d=a.focusNode;if(l&&l.nodeType&&3==l.nodeType&&""==l.nodeValue&&(l=l.nextSibling),!l)return!1;if(e.browser.mozilla){for(;s--;)if(e.inArray(o[s],n)!=-1){r=!0;break}r&&1==l.nodeType&&e.inArray(l.nodeName.toLowerCase(),n)==-1&&(s=l.firstChild,s&&(""==s.nodeValue&&(s=s.nextSibling),1==s.nodeType&&(l=s)))}for(;l&&d&&1!=l.nodeType&&1!=d.nodeType;)1!=l.nodeType&&(l=l.parentNode),1!=d.nodeType&&(d=d.parentNode);return!(!e(l).closest(t).length&&!e(d).closest(t).length)},getSelectedStyles:function(){var t=window.getSelection(),n=e(t.getNode()),i={};for(var r in this.styleSelectors)i[r]=n.css(this.styleSelectors[r]);return i},replaceElement:function(t,n){if(!t.hasClass(i.name+"-editor")){for(var r=t.get(0),o=e("<"+n+"/>").html(r.innerHTML),s=r.attributes,a=s.length||0;a--;)o.attr(s[a].name,s[a].value);return t.replaceWith(o),o}},/**
	 * Is a bit of a misnamed method. It really acts more
	 * like an unwarp. The element is deleted, but the
	 * contents stay intact!
	 */
deleteElement:function(t){var n=e(t);n.replaceWith(n.html())},/**
	 * Completely strips the editor of formatting.
	 * This is used primarly by the remove formatting
	 * button.
	 */
stripFormattingElements:function(){function t(n,i){var o=e(i);o.children().each(t),s(o)&&r.deleteElement(o)}for(var n,r=this,o=window.getSelection(),s=i.Element.isFormatter,a=o.rangeCount,l=[];a--;)n=o.getRangeAt(a),l.push(n),this.getRangeElements(n,this._blockElements).each(t);this.restoreRanges(l)},/**
	 * Allows you to manipulate the current
	 * selection range by range and then resets
	 * the original selection.
	 */
manipulateSelection:function(){for(var t,e=window.getSelection(),n=e.rangeCount,i=[],r=arguments,o=r[0];n--;)t=e.getRangeAt(n),i.push(t),r[0]=t,o.apply(this,r);this.restoreRanges(i)},getRangeElements:function(t,n){var i=e(t.startContainer).closest(n),r=e(t.endContainer).closest(n),o=e("nullset");return i.parents(".WysiHat-editor").length&&r.parents(".WysiHat-editor").length&&(o=i,i.filter(r).length||(o=i.nextAll().filter(r).length?i.nextUntil(r).andSelf().add(r):i.prevUntil(r).andSelf().add(r))),o},/**
	 * Grabs all ranges in the current selection and
	 * returns them as a usable array.
	 */
getRanges:function(){for(var t,e=window.getSelection(),n=e.rangeCount,i=[];n--;)t=e.getRangeAt(n),i.push(t);return i},/**
	 * Removes all ranges that may have been created
	 * in the editing process and replaces them with
	 * saved ranges passed in by the dev.
	 */
restoreRanges:function(t){var e=window.getSelection(),n=t.length;for(e.removeAllRanges();n--;)e.addRange(t[n])},/**
	 * Changes the parent html block element
	 * into the one passed in by the dev.
	 * Ex. Use to flip headings.
	 */
changeContentBlock:function(t){for(var n,i=window.getSelection(),r=this,o=e(r),s="WysiHat-replaced",a=i.rangeCount,l=[];a--;)n=i.getRangeAt(a),l.push(n),this.getRangeElements(n,this._blockElements).each(function(){r.replaceElement(e(this),t)}).data(s,!0);o.children(t).removeData(s),this.restoreRanges(l)},/**
	 * Utility function to get back to a paragraph state
	 */
unformatContentBlock:function(){this.changeContentBlock("p")},/**
	 * @todo I don't like name and placement -pk
	 */
unlinkSelection:function(){this.manipulateSelection(function(t){this.getRangeElements(t,"[href]").each(this.clearElement)})},/**
	 * Wrap the current selection in some html
	 */
wrapHTML:function(){var n,i=window.getSelection(),r=i.getRangeAt(0),o=i.getNode(),s=arguments.length;for(r.collapsed&&(r=t.createRange(),r.selectNodeContents(o),i.removeAllRanges(),i.addRange(r)),r=i.getRangeAt(0);s--;)n=e("<"+arguments[s]+"/>"),r.surroundContents(n.get(0))},/**
	 * Toggle between the editor and the textarea.
	 */
toggleHTML:function(t){var e=t.$editor,n=t.$element,i=e.data("field"),r=n.siblings(),o=n.data("text");e.is(":visible")?(n.find("b").text(n.data("toggle-text")),r.hide(),e.hide(),i.show()):(n.find("b").text(o),r.show(),i.hide(),e.show())},insertHTML:function(n){if(e.browser.msie){var i=t.selection.createRange();i.pasteHTML(n),i.collapse(!1),i.select()}else this.execCommand("insertHTML",!1,n)},quoteSelection:function(){var t=e("<blockquote/>");this.manipulateSelection(function(t,n){var r=n.clone(),o=this.getRangeElements(t,this._blockElements),s=o.length-1,a=e();o.each(function(t){var n,o=e(this),l=!1;i.Element.isSubContainer(o)&&(l=!0),!t&&l&&t==s?(n=e("<p/>").html(o.html()),o.html("").append(n),a=a.add(n)):a=l?a.add(o.closest(i.Element.getContainers().join(","))):a.add(o),t==s&&a.wrapAll(r)})},t)},unquoteSelection:function(){this.manipulateSelection(function(t){this.getRangeElements(t,"blockquote > *").each(function(){var t=this,n=e(t),r=n.closest("blockquote"),o=r.clone().html(""),s=r.children(),a=s.length-1,l=e();n.unwrap("blockquote"),a>0&&s.each(function(n){this!=t&&(l=l.add(this)),n!=a&&this!=t||(l.wrapAll(o.clone()),l=e())}),r=n.parent(),i.Element.isSubContainer(r)&&1==r.children().length&&r.html(n.html())})})}}),/**
 * A few more make methods that either alias to some
 * larger top level stuff or couldn't quite be auto
 * generated.
 */
e.extend(i.Commands.make,{blockquote:function(){i.Commands.is.indented()?i.Commands.unquoteSelection():i.Commands.quoteSelection()},alignment:function(t){i.Commands.execCommand("justify"+t)},backgroundColor:function(t){var n=e.browser.mozilla?"hilitecolor":"backcolor";i.Commands.execCommand(n,!1,t)}});
// ---------------------------------------------------------------------
/**
 * Commands Mixin
 *
 * Prettier solution to working with the basic manipulations.
 *
 * The old version of WysiHat had a boatload of fooSelection()
 * and isFoo() methods. It got a little unweidy, especially as
 * they were extended directly onto the editor jquery result.
 *
 * The above fixes most of that, but in order to smooth out the
 * bumps a bit more, I'm giving both the editor and the buttons
 * a single is() and make() api.
 *
 * They still have access to this.Commands for more advanced
 * manipulations.
 *
 * this.is('italic');
 * this.make('italic');
 * this.toggle('blockquote');
 *
 * this.Commands.advancedStuff();
 */
// ---------------------------------------------------------------------
var s={/**
	 * Better solution for what used to be a bunch
	 * of isFooBar() methods:
	 * this.is('bold')
	 */
is:function(t){return i.Commands.is[t]()},/**
	 * Nice method for doing built-in manipulations
	 * such as: this.make('bold')
	 */
make:function(t,e){return i.Commands.make[t](e)},/**
	 * Same as make, but makes more sense
	 * for some: this.toggle('blockquote')
	 */
toggle:function(t,e){return i.Commands.make[t](e)}};e.extend(i.Editor.prototype,s),
// ---------------------------------------------------------------------
/**
 * Formatting Class
 *
 * Responsible for keeping the markup clean and compliant. Also
 * deals with keeping changes between the raw text and editor in
 * sync periodically.
 */
// ---------------------------------------------------------------------
i.Formatting={_bottomUp:function(t,n,i){var r=t.find(n),o=e.makeArray(r).reverse();e.each(o,i)},cleanup:function(t){var n=i.Commands.replaceElement,r=i.Commands.deleteElement;
// kill comments
t.contents().filter(function(){return this.nodeType==Node.COMMENT_NODE}).remove(),this._bottomUp(t,"span",function(){var t=e(this),i=t.css("font-weight"),r="bold"==i||i>500,o="italic"==t.css("font-style");t.hasClass("Apple-style-span")&&t.removeClass("Apple-style-span"),t.removeAttr("style"),o&&r?(t.wrap("<b>"),n(t,"i")):r?n(t,"b"):o&&n(t,"i")}),t.children("div").each(function(){this.attributes.length||n(e(this),"p")}).end().find("strong").each(function(){n(e(this),"b")}).end().find("em").each(function(){n(e(this),"i")}).end().find("strike").each(function(){n(e(this),"del")}).end().find("u").each(function(){n(e(this),"ins")}).end().find("p:empty,script,noscript,style").remove(),
// firefox will sometimes end up nesting identical
// tags. Let's not do that, please.
t.find("b > b, i > i").each(function(){r(this)})},
// selection before tag, between tags, after tags
// between tags (x offset)
cleanupPaste:function(n,r){i.Commands.replaceElement;this.cleanup(n),
// Ok, now we want to get rid of everything except for the
// bare tags (with some exceptions, but not many). The trick
// is to run through the found elements backwards. Otherwise
// the node reference disappears when the parent is replaced.
this._bottomUp(n,"*",function(){var n=this.nodeName.toLowerCase(),i=t.createElement(n);switch(n){case"a":i.href=this.href,i.title=this.title;break;case"img":i.src=this.src,i.alt=this.alt}i.innerHTML=this.innerHTML,e(this).replaceWith(i)}),
// most of this deals with newlines, start
// out with a reasonable subset
n.find("br").replaceWith("\n"),n.html(function(t,n){// remove comments
// no newlines, no paragraphs, no nonsense
// remove comments
// no newlines, no paragraphs, no nonsense
// with the single line case out of the way, convert everything
// to paragraphs. This will make weeding out the double newlines
// easier below. I know it seems silly. By the end of this we're
// back to input for safari, but normalized for all others.
return n=e.trim(n),n=n.replace(/<\/p>\s*<p>/g,"\n\n").replace(/^(<p>)+/,"").replace(/(<\/p>)+$/,"").replace(/<!--[^>]*-->/g,""),n.indexOf("\n")==-1?n:(n=n.replace(/\n/,"<p>").replace(/\n/g,"\n</p><p>"),e.trim(n)+"</p>")}),
// remove needless spans and empty elements
n.find("span").children(i.Element.getBlocks()).unwrap(),n.find(":empty").remove(),
// on reinsertion we need to check for identically nested elements
// and clean those up. Otherwise pasting an h1 into an h1 is a clusterf***
"p"!=r.toLowerCase()&&n.find(r).replaceWith(function(t,e){return e});
// ok, now the fun bit with the paragraphs and newlines again.
// We equalize all newlines into paragraphs above, but really
// we only want them for the doubles newlines. All others are
// supposed to be <br>s. So we need to step through all the
// sibling pairs and merge when they are not separated by a blank.
var o,s=[];
// we no longer need these
for(
// if previous blank, start new one
// if previous not blank, add to previous
n.find("p ~ p").each(function(){var t=e(this),n=t.prev();o?e.trim(n.html())||(o.after("\n"),o=s.pop()):o=n,o.html(function(n,i){var r=e.trim(t.html());
// both have contents? add a newline between them
return i=e.trim(i),i&&r&&(i+="<br>"),i+r}),s.push(t)});o=s.pop();)o.remove();
// since all of the code above was newline sensitive, what
// comes out has none. So make it pretty!
n.before("\n").find("br").replaceWith("<br>\n")},reBlocks:new RegExp("(</(?:ul|ol)>|</(?:"+i.Element.getBlocks().join("|")+")>)","g"),format:function(t){var e=this;t.html(function(t,n){return n.replace(/<\/?[A-Z]+/g,function(t){return t.toLowerCase()}).replace(/(\t|\n| )+/g," ").replace(/>\s+</g,"> <").replace("/&nbsp;/g"," ").replace("/<p>[ ]+</p>/g","").replace(/<br ?\/?>\s?<\/p>/g,"</p>").replace(/<p>\n+<\/p>/g,"").replace(e.reBlocks,"$1\n\n").replace(/<br ?\/?>/g,"<br>\n").replace(/(ul|ol|li)>\s+<(\/)?(ul|ol|li)>/g,"$1>\n<$2$3>").replace(/><li>/g,">\n<li>").replace(/<\/li>\n+</g,"</li>\n<").replace(/^\s+(<li>|<\/?ul>|<\/?ol>)/gm,"$1").replace(/<li>/g,"    <li>").replace(/>\s*(<\/?tr>)/g,">$1").replace(/(<\/?tr>)\s*</g,"$1<").replace(/<(\/?(table|tbody))>/g,"<$1>\n").replace(/<\/tr>/g,"</tr>\n").replace(/<tr>/g,"    <tr>")}),
// Remove the extra white space that gets added after the
// last block in the .replace(that.reBlocks, '$1\n\n') line.	
// If we don't remove it, then it sticks around and eventually
// becomes a new paragraph.  Which is just annoying.
t.html(t.html().trim())},getBrowserMarkupFrom:function(t){var n,i=e("<div>"+t.val()+"</div>");return this.cleanup(i),n=i.html(),""!=n&&"<br>"!=n&&"<br/>"!=n||i.html("<p>&#x200b;</p>"),i.html()},getApplicationMarkupFrom:function(t){var n,i,r=t.clone();return n=e("<div/>").html(r.html()),i=n.html(),""!=i&&"<br>"!=i&&"<br/>"!=i||n.html("<p>&#x200b;</p>"),this.cleanup(n),this.format(n),n.html().replace(/<\/?[A-Z]+/g,function(t){return t.toLowerCase()})}};
// ---------------------------------------------------------------------
/**
 * Blank Button
 *
 * The base prototype for all buttons. Handles the basic init and
 * provides a nice way to extend the buttons without having to re-
 * do all of the work the toolbar does.
 */
// ---------------------------------------------------------------------
var a={init:function(t,e){return this.name=t,this.$editor=e,this.$field=e.data("field"),this},setElement:function(t){return this.$element=e(t),this},getHandler:function(){if(this.handler)return e.proxy(this,"handler");var t=this;return i.Commands.isMakeCommand(this.name)?function(){return i.Commands.make[t.name]()}:i.Commands.isValidExecCommand(this.name)?function(){return i.Commands.execCommand(t.name)}:e.noop},getStateHandler:function(){if(this.query)return e.proxy(this,"query");if(i.Commands.isValidExecCommand(this.name)){var t=this;return function(e){
// @pk clean up
var n=e.data("wysihat");return n.Commands.queryCommandState(t.name)}}return e.noop},setOn:function(){return this.$element.addClass("selected").attr("aria-pressed","true").find("b").text(this["toggle-text"]?this["toggle-text"]:this.label),this},setOff:function(){return this.$element.removeClass("selected").attr("aria-pressed","false").find("b").text(this.label),this}};
// ---------------------------------------------------------------------
/**
 * Toolbar Class
 *
 * Handles the creation of the toolbar and manages the individual
 * buttons states. You can add your own by using:
 * WysiHat.addButton(name, { options });
 */
// ---------------------------------------------------------------------
i.Toolbar=function(t,n){this.suspendQueries=!1,this.$editor=t,this.$toolbar=e('<div class="'+i.name+'-editor-toolbar" role="presentation"></div>'),t.before(this.$toolbar);
// add buttons
var r,o=n.length;for(r=0;r<o;r++)this.addButton(n[r])},i.Toolbar.prototype={addButton:function(t){var n=this.$editor.data("wysihat"),r=i.inherit(a,i._buttons[t]).init(t,n.$editor);e.extend(r,s),
// Add utility references straight onto the button
r.Editor=n,r.Event=n.Event,r.Commands=n.Commands,r.Selection=n.Selection,r.setElement(this.createButtonElement(r)),r.Event.add(t,r.getHandler()),this.observeButtonClick(r),this.observeStateChanges(r)},createButtonElement:function(t){var n;if(t.type&&"select"==t.type){var i=t.options,r=i.length,o=0;for(n=e('<select class="button"/>');o<r;o++)n.append('<option value="'+i[o][0]+'">'+i[o][1]+"</option>");n.appendTo(this.$toolbar).wrap('<div class="button select-container"/>')}else n=e('<button aria-pressed="false" tabindex="-1" type="button"></button>'),n.append("<b>"+t.label+"</b>").addClass("button "+t.name).hover(function(){this.title=e(this).find("b").text()},function(){e(this).removeAttr("title")}).appendTo(this.$toolbar);return t.cssClass&&n.addClass(t.cssClass),t.title&&n.attr("title",t.title),n.data("text",t.label),t["toggle-text"]&&n.data("toggle-text",t["toggle-text"]),n},observeButtonClick:function(t){var e=t.type&&"select"==t.type?"change":"click",n=this;t.$element.on(e,function(e){
// IE had trouble doing change handlers
// as the state check would run too soon
// and reset the input element, so we suspend
// the query checks until after the event handler
// has run.
n.suspendQueries=!0;var i=t.$editor;
// Bring focus to the editor before the handler is called
// so that selection data is available to tools
return i.is(":focus")||i.focus(),t.Event.fire(t.name),n.suspendQueries=!1,!1})},observeStateChanges:function(t){var e,n=this,i=t.getStateHandler();n.$editor.on("WysiHat-selection:change",function(){if(!n.suspendQueries){var r=i(t.$editor,t.$element);r!=e&&(e=r,n.updateButtonState(t,r))}})},updateButtonState:function(t,e){return e?void t.setOn():void t.setOff()}},i.Toolbar.constructor=i.Toolbar}(document,jQuery),
// ---------------------------------------------------------------------
/**
 * Defaults and jQuery Binding
 *
 * This code sets up reasonable editor defaults and then adds
 * a convenience setup function to jQuery.fn that you can use
 * as $('textarea').wysihat(options).
 */
// ---------------------------------------------------------------------
jQuery.fn.wysihat=function(t){var e=this.data("wysihat");return e?jQuery.inArray(t,["Event","Selection","Toolbar","Undo"])!=-1?e[t]:e:this.each(function(){e=WysiHat.attach(this,t),$(this).data("wysihat",e)})},
// ---------------------------------------------------------------------
/**
 * Browser Compat Classes
 *
 * Below we normalize the Range and Selection classes to work
 * properly across all browsers. If you like IE, you'll feel
 * right at home down here.
 */
// ---------------------------------------------------------------------
function(t,e){"undefined"==typeof Node&&!function(){function t(){return{ATTRIBUTE_NODE:2,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_FRAGMENT_NODE:11,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,ELEMENT_NODE:1,ENTITY_NODE:6,ENTITY_REFERENCE_NODE:5,NOTATION_NODE:12,PROCESSING_INSTRUCTION_NODE:7,TEXT_NODE:3}}window.Node=new t}(),t.getSelection?(
// quick fix so we can extend the native prototype
window.Selection={},window.Selection.prototype=window.getSelection().__proto__):/**
 * Selection and Range Shims
 *
 * Big hat tips to Tim Down's Rangy and Tim Cameron
 * Ryan's IERange. Neither quite worked here so I
 * reimplemented it with lots of inspiration from
 * their code.
 *
 * Rangy and IERange are MIT Licensed
 */
!function(){/**
	 * Ranges. These are fun.
	 */
function n(){this.startContainer,this.startOffset,this.endContainer,this.endOffset,this.collapsed}/**
	 * And now selections! Wahoo!
	 */
function i(){this._reset(),this._selection=t.selection}/**
	 * Dom Position Helper Object
	 *
	 * This can slowly be pulled out, but it's used in a few
	 * places and actually isn't too inconvenient.
	 */
function r(t,e){this.node=t,this.offset=e}n.prototype={/**
		 * Set the beginning of the range
		 */
setStart:function(t,e){this.startContainer=t,this.startOffset=e,t==this.endContainer&&e==this.endOffset&&(this.collapsed=!0)},/**
		 * Set the end of the range
		 */
setEnd:function(t,e){this.endContainer=t,this.endOffset=e,t==this.startContainer&&e==this.startOffset&&(this.collapsed=!0)},/**
		 * Collapse the range
		 */
collapse:function(t){t?(
// move to beginning
this.endContainer=this.startContainer,this.endOffset=this.startOffset):(
// move to end
this.startContainer=this.endContainer,this.startOffset=this.endOffset)},/**
		 * Get the containing node
		 */
getNode:function(){var e=t.selection.createRange();return s.getParentElement(e)},/**
		 * Select a specific node
		 */
selectNode:function(t){this.setStart(t.parentNode,s.getNodeIndex(t)),this.setEnd(t.parentNode,s.getNodeIndex(t)+1)},insertNode:function(t){s.insertNode(t,this.startContainer,this.startOffset)},/**
		 * Select a node's contents
		 */
selectNodeContents:function(t){var e=s.isCharacterDataNode(t)?t.length:t.childNodes.length;this.setStart(t,0),this.setEnd(t,e)},surroundContents:function(t){},/**
		 * Grab a copy of this Range
		 */
cloneRange:function(){var t=new n;return t.setStart(this.startContainer,this.startOffset),t.setEnd(this.endContainer,this.endOffset),t},/**
		 * Get the text content
		 */
toString:function(){var t=s.rangeToTextRange(this);return t?t.text:""}},/**
	 * Open the range getter up to the public.
	 */
t.createRange=function(){return new n},i.prototype={/**
		 * Sort of an init / reset.
		 *
		 * Selections are singletons so their
		 * state is very fragile.
		 */
_reset:function(){this.rangeCount=0,this.anchorNode=null,this.anchorOffset=null,this.focusNode=null,this.focusOffset=null,
// implementation
this._ranges=[]},/**
		 * Add a range to the visible selection
		 */
addRange:function(t){var e=s.rangeToTextRange(t);
// Check for intersection with old?
// Skipping it for now, I don't think we
// ever use them that way. If you decide to
// add it, I suggest riffing off webkit's
// webcore DOMSelection::addRange logic. -pk
return e?(e.select(),this.rangeCount=1,this._ranges=[t],this.isCollapsed=t.collapsed,void this._updateNodeRefs(t)):void this.removeAllRanges()},/**
		 * Deselect Everything
		 */
removeAllRanges:function(){this.rangeCount&&this._selection.empty(),this._reset()},/**
		 * Firefox supports more than one range in a selection.
		 * We do not.
		 */
getRangeAt:function(t){return 0!==t?null:this._ranges[t]},/**
		 * Get the string contents
		 */
toString:function(){
// grab range contents
// grab range contents
return this.rangeCount?this._ranges[0].toString():""},/**
		 * Refresh the selection state
		 *
		 * There is only one selection per window, so we call
		 * this every time the user asks for a selection through
		 * getSelection.
		 */
_refresh:function(){
// the TextRange parentElement implementation is bugtastic, so
// we need to do this manually ...
var t,e,i,r=this._selection.createRange(),o=s.getParentElement(r);
// is collapsed?
0==r.compareEndPoints("StartToEnd",r)?(t=s.getBoundary(r,o,!0,!0),e=t):(t=s.getBoundary(r,o,!0,!1),e=s.getBoundary(r,o,!1,!1));var i=new n;return i.setStart(t.node,t.offset),i.setEnd(e.node,e.offset),this.rangeCount=1,this._ranges=[i],this.isCollapsed=i.collapsed,this._updateNodeRefs(i),this},/**
		 * Sync the nodes and offsets
		 *
		 * For whatever reason the selection holds
		 * what amounts to duplicate data about the
		 * ranges. No magic __get in js, so we copy.
		 */
_updateNodeRefs:function(t){this.anchorNode=t.startContainer,this.anchorOffset=t.startOffset,this.focusNode=t.endContainer,this.focusOffset=t.endOffset}};/**
	 * Open the selection getter up to the public.
	 *
	 * It is generally a good idea to grab a new selection
	 * if there is any chance of it being messed with. This
	 * applies doubly in this case because of the _refresh call.
	 */
var o=new i;window.getSelection=function(){return o._refresh()};/**
	 * Some utility helper methods.
	 *
	 * Big, big hat tip to Rangy!
	 * http://code.google.com/p/rangy/
	 */
var s={/**
		 * Character data nodes have text, others
		 * have childNodes.
		 */
isCharacterDataNode:function(t){var e=t.nodeType;return 3==e||4==e||8==e},/**
		 * Find a node offset for non-chardatanode
		 * selection offsets.
		 */
getNodeIndex:function(t){for(var e=0;t=t.previousSibling;)e++;return e},/*
		 * Check for ancestors. May be able to move
		 * this to $.contains(ancestor, descendant) in the future.
		 */
isAncestorOf:function(t,e,n){for(var i=n?e:e.parentNode;i;){if(i===t)return!0;i=i.parentNode}return!1},/**
		 * Find a shared ancestor
		 */
getCommonAncestor:function(t,n){var i,r=[];for(i=t;i;i=i.parentNode)r.push(i);for(i=n;i;i=i.parentNode)if(e.inArray(i,r)>-1)return i;return null},/*
		 * Insert the node at a specific offset.
		 * Needs to split text nodes if the insertion is to happen
		 * in the middle of some text.
		 */
insertNode:function(t,n,i){var r=11==t.nodeType?t.firstChild:t;return this.isCharacterDataNode(n)?i==n.length?e(t).insertAfter(n):n.parentNode.insertBefore(t,0==i?n:this.splitDataNode(n,i)):i>=n.childNodes.length?n.appendChild(t):n.insertBefore(t,n.childNodes[i]),r},/**
		 * Split a text, comment, or cdata node
		 * to make room for a new insertion.
		 */
splitDataNode:function(t,n){var i=t.cloneNode(!1);return i.deleteData(0,n),t.deleteData(n,t.length-n),e(i).insertAfter(t),i},/**
		 * Convert a range object back to a textRange
		 */
rangeToTextRange:function(e){var n,i;return n=this.createBoundaryTextRange(new r(e.startContainer,e.startOffset),!0),e.collapsed?n:(i=this.createBoundaryTextRange(new r(e.endContainer,e.endOffset),!1),!(!n||!i)&&(textRange=t.body.createTextRange(),textRange.setEndPoint("StartToStart",n),textRange.setEndPoint("EndToEnd",i),textRange))},/**
		 * IE's textRange.parentElement is buggy, so
		 * this function does a bit more work to ensure
		 * consistency.
		 */
getParentElement:function(t){var e,n,i,r,o=t.parentElement();
// find starting element
// find ending element
// find common parent
return r=t.duplicate(),r.collapse(!0),n=r.parentElement(),r=t.duplicate(),r.collapse(!1),i=r.parentElement(),e=n==i?n:this.getCommonAncestor(n,i),e==o?e:this.getCommonAncestor(o,e)},/**
		 * Traverse the dom and place a textNode at the desired position.
		 */
createBoundaryTextRange:function(n,i){var r,o,s,a,l=t,d=n.offset,c=l.body.createTextRange(),h=this.isCharacterDataNode(n.node);
// Position the range immediately before the node containing the boundary
// Making the working element non-empty element persuades IE to consider the TextRange boundary to be within the
// element rather than immediately before or after it, which is what we want
// insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
// for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
// Clean up
// Move the working range to the text offset, if required
// Clean up and bail
return h?(r=n.node,o=r.parentNode):(a=n.node.childNodes,r=d<a.length?a[d]:null,o=n.node),s=l.createElement("span"),s.innerHTML="&#feff;",r?o.insertBefore(s,r):o.appendChild(s),e.contains(t.body,s)?(c.moveToElementText(s),c.collapse(!i),o.removeChild(s),h&&c[i?"moveStart":"moveEnd"]("character",d),c):(o.removeChild(s),null)},/**
		 * Gets the boundary of a TextRange expressed as a node and an offset within that node. This function started out as
		 * an improved version of code found in Tim Cameron Ryan's IERange (http://code.google.com/p/ierange/) but has
		 * grown, fixing problems with line breaks in preformatted text, adding workaround for IE TextRange bugs, handling
		 * for inputs and images, plus optimizations.
		 */
getBoundary:function(e,n,i,o){var s,a=e.duplicate();
// Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
// similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
if(a.collapse(i),s=a.parentElement(),
// Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
// check for that
// TODO: Find out when. Workaround for wholeRangeContainerElement may break this
this.isAncestorOf(n,s,!0)||(s=n),!s.canHaveHTML)return new r(s.parentNode,this.getNodeIndex(s));var l,d,c,h,u,f=t.createElement("span"),p=i?"StartToStart":"StartToEnd";
// Move the working range through the container's children, starting at the end and working backwards, until the
// working range reaches or goes past the boundary we're interested in
do s.insertBefore(f,f.previousSibling),a.moveToElementText(f);while((l=a.compareEndPoints(p,e))>0&&f.previousSibling);if(
// We've now reached or gone past the boundary of the text range we're interested in
// so have identified the node we want
u=f.nextSibling,l==-1&&u&&this.isCharacterDataNode(u)){
// This is a character data node (text, comment, cdata). The working range is collapsed at the start of the
// node containing the text range's boundary, so we move the end of the working range to the boundary point
// and measure the length of its text to get the boundary's offset within the node.
a.setEndPoint(i?"EndToStart":"EndToEnd",e);var m;if(/[\r\n]/.test(u.data)){/*
					For the particular case of a boundary within a text node containing line breaks (within a <pre> element,
					for example), we need a slightly complicated approach to get the boundary's offset in IE. The facts:

					- Each line break is represented as \r in the text node's data/nodeValue properties
					- Each line break is represented as \r\n in the TextRange's 'text' property
					- The 'text' property of the TextRange does not contain trailing line breaks

					To get round the problem presented by the final fact above, we can use the fact that TextRange's
					moveStart() and moveEnd() methods return the actual number of characters moved, which is not necessarily
					the same as the number of characters it was instructed to move. The simplest approach is to use this to
					store the characters moved when moving both the start and end of the range to the start of the document
					body and subtracting the start offset from the end offset (the "move-negative-gazillion" method).
					However, this is extremely slow when the document is large and the range is near the end of it. Clearly
					doing the mirror image (i.e. moving the range boundaries to the end of the document) has the same
					problem.

					Another approach that works is to use moveStart() to move the start boundary of the range up to the end
					boundary one character at a time and incrementing a counter with the value returned by the moveStart()
					call. However, the check for whether the start boundary has reached the end boundary is expensive, so
					this method is slow (although unlike "move-negative-gazillion" is largely unaffected by the location of
					the range within the document).

					The method below is a hybrid of the two methods above. It uses the fact that a string containing the
					TextRange's 'text' property with each \r\n converted to a single \r character cannot be longer than the
					text of the TextRange, so the start of the range is moved that length initially and then a character at
					a time to make up for any trailing line breaks not contained in the 'text' property. This has good
					performance in most situations compared to the previous two methods.
					*/
var g=a.duplicate(),v=g.text.replace(/\r\n/g,"\r").length;for(m=g.moveStart("character",v);(l=g.compareEndPoints("StartToEnd",g))==-1;)m++,g.moveStart("character",1)}else m=a.text.length;h=new r(u,m)}else
// If the boundary immediately follows a character data node and this is the end boundary, we should favour
// a position within that, and likewise for a start boundary preceding a character data node
d=(o||!i)&&f.previousSibling,c=(o||i)&&f.nextSibling,h=c&&this.isCharacterDataNode(c)?new r(c,0):d&&this.isCharacterDataNode(d)?new r(d,d.length):new r(s,this.getNodeIndex(f));
// Clean up
return f.parentNode.removeChild(f),h}};
// expose them for the trickery below
window.Range=n,window.Selection=i}(),
// Add a few more methods to all ranges and selections.
// Both native and our shims.
e.extend(Range.prototype,{/**
	 * Compare two ranges for equality. We want to
	 * compare the actual selection rather than just
	 * the offsets, since there is more than one way
	 * to specify a certain selection.
	 */
equalRange:function(t){
// if both ranges are collapsed we just need to compare one point
return!(!t||!t.compareBoundaryPoints)&&(this.collapsed&&t.collapsed?0==this.compareBoundaryPoints(this.START_TO_START,t):0==this.compareBoundaryPoints(this.START_TO_START,t)&&1==this.compareBoundaryPoints(this.START_TO_END,t)&&0==this.compareBoundaryPoints(this.END_TO_END,t)&&this.compareBoundaryPoints(this.END_TO_START,t)==-1)}}),e.extend(window.Selection.prototype,{/**
	 * Get the node that most encompasses the
	 * entire selection.
	 */
getNode:function(){return this.rangeCount>0?this.getRangeAt(0).getNode():null}})}(document,jQuery);