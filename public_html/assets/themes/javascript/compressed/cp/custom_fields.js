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
/*jslint browser: true, onevar: true, undef: true, nomen: true, eqeqeq: true, plusplus: false, bitwise: true, regexp: false, strict: true, newcap: true, immed: true */
/*global $, jQuery, EE, window, document, console, alert */
"use strict";$.ee_custom_field_select=function(){
// Restore original information if changed
$("input.input-copy").change(function(){$(this).val($(this).data("original"))}),
// On click select the text
$("input.input-copy").click(function(){var t=$(this);
// setTimeout needs to be used, otherwise the text is selected
// and then de-selected
setTimeout(function(){t.select()},1)})},$(document).ready(function(){$.ee_custom_field_select()});