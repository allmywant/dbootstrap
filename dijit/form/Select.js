//>>built
require({cache:{"url:dijit/form/templates/Select.html":'<table class="dijit dijitReset dijitInline dijitLeft"\n\tdata-dojo-attach-point="_buttonNode,tableNode,focusNode" cellspacing=\'0\' cellpadding=\'0\'\n\trole="listbox" aria-haspopup="true"\n\t><tbody role="presentation"><tr role="presentation"\n\t\t><td class="dijitReset dijitStretch dijitButtonContents" role="presentation"\n\t\t\t><div class="dijitReset dijitInputField dijitButtonText"  data-dojo-attach-point="containerNode,_popupStateNode" role="presentation"></div\n\t\t\t><div class="dijitReset dijitValidationContainer"\n\t\t\t\t><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t/></div\n\t\t\t><input type="hidden" ${!nameAttrSetting} data-dojo-attach-point="valueNode" value="${value}" aria-hidden="true"\n\t\t/></td\n\t\t><td class="dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer"\n\t\t\tdata-dojo-attach-point="titleNode" role="presentation"\n\t\t\t><input class="dijitReset dijitInputField dijitArrowButtonInner" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n\t\t\t\t${_buttonInputDisabled}\n\t\t/></td\n\t></tr></tbody\n></table>\n'}});
define("dijit/form/Select","dojo/_base/array,dojo/_base/declare,dojo/dom-attr,dojo/dom-class,dojo/dom-geometry,dojo/_base/event,dojo/i18n,dojo/_base/lang,dojo/sniff,./_FormSelectWidget,../_HasDropDown,../Menu,../MenuItem,../MenuSeparator,../Tooltip,dojo/text!./templates/Select.html,dojo/i18n!./nls/validate".split(","),function(g,d,m,f,n,h,o,i,j,p,q,r,k,s,e,t){var l=d("dijit.form._SelectMenu",r,{autoFocus:!0,buildRendering:function(){this.inherited(arguments);var a=this.menuTableNode=this.domNode,
b=this.domNode=this.ownerDocument.createElement("div");b.style.cssText="overflow-x: hidden; overflow-y: scroll";a.parentNode&&a.parentNode.replaceChild(b,a);f.remove(a,"dijitMenuTable");b.className=a.className+" dijitSelectMenu";a.className="dijitReset dijitMenuTable";a.setAttribute("role","listbox");b.setAttribute("role","presentation");b.appendChild(a)},postCreate:function(){this.inherited(arguments);this.connect(this.domNode,"onselectstart",h.stop)},focus:function(){var a=!1,b=this.parentWidget.value;
i.isArray(b)&&(b=b[b.length-1]);b&&g.forEach(this.parentWidget._getChildren(),function(c){c.option&&b===c.option.value&&(a=!0,this.focusChild(c,!1))},this);a||this.inherited(arguments)},resize:function(a){if(a&&(n.setMarginBox(this.domNode,a),"w"in a))this.menuTableNode.style.width="100%"}}),d=d("dijit.form.Select",[p,q],{baseClass:"dijitSelect dijitValidationTextBox",templateString:t,_buttonInputDisabled:j("ie")?"disabled":"",required:!1,state:"",message:"",tooltipPosition:[],emptyLabel:"&#160;",
_isLoaded:!1,_childrenLoaded:!1,_fillContent:function(){this.inherited(arguments);if(this.options.length&&!this.value&&this.srcNodeRef){var a=this.srcNodeRef.selectedIndex||0;this.value=this.options[0<=a?a:0].value}this.dropDown=new l({id:this.id+"_menu",parentWidget:this});f.add(this.dropDown.domNode,this.baseClass.replace(/\s+|$/g,"Menu "))},_getMenuItemForOption:function(a){if(!a.value&&!a.label)return new s({ownerDocument:this.ownerDocument});var b=i.hitch(this,"_setValueAttr",a),a=new k({option:a,
label:a.label||this.emptyLabel,onClick:b,ownerDocument:this.ownerDocument,dir:this.dir,textDir:this.textDir,disabled:a.disabled||!1});a.focusNode.setAttribute("role","option");return a},_addOptionItem:function(a){this.dropDown&&this.dropDown.addChild(this._getMenuItemForOption(a))},_getChildren:function(){return!this.dropDown?[]:this.dropDown.getChildren()},_loadChildren:function(a){!0===a?(this.dropDown&&delete this.dropDown.focusedChild,this.options.length?this.inherited(arguments):(g.forEach(this._getChildren(),
function(a){a.destroyRecursive()}),this.dropDown.addChild(new k({ownerDocument:this.ownerDocument,label:this.emptyLabel})))):this._updateSelection();this._isLoaded=!1;this._childrenLoaded=!0;this._loadingStore||this._setValueAttr(this.value,!1)},_refreshState:function(){this._started&&this.validate(this.focused)},startup:function(){this.inherited(arguments);this._refreshState()},_setValueAttr:function(a){this.inherited(arguments);m.set(this.valueNode,"value",this.get("value"));this._refreshState()},
_setDisabledAttr:function(a){this.inherited(arguments);this._refreshState()},_setRequiredAttr:function(a){this._set("required",a);this.focusNode.setAttribute("aria-required",a);this._refreshState()},_setOptionsAttr:function(a){this._isLoaded=!1;this._set("options",a)},_setDisplay:function(a){a=a||this.emptyLabel;this.containerNode.innerHTML='<span role="option" class="dijitReset dijitInline '+this.baseClass.replace(/\s+|$/g,"Label ")+'">'+a+"</span>";this.applyTextDir(this.focusNode)},validate:function(a){a=
this.disabled||this.isValid(a);this._set("state",a?"":this._hasBeenBlurred?"Error":"Incomplete");this.focusNode.setAttribute("aria-invalid",a?"false":"true");var b=a?"":this._missingMsg;b&&this.focused&&this._hasBeenBlurred?e.show(b,this.domNode,this.tooltipPosition,!this.isLeftToRight()):e.hide(this.domNode);this._set("message",b);return a},isValid:function(){return!this.required||0===this.value||!/^\s*$/.test(this.value||"")},reset:function(){this.inherited(arguments);e.hide(this.domNode);this._refreshState()},
postMixInProperties:function(){this.inherited(arguments);this._missingMsg=o.getLocalization("dijit.form","validate",this.lang).missingMessage},postCreate:function(){this.inherited(arguments);this.connect(this.domNode,"onselectstart",h.stop);this.domNode.setAttribute("aria-expanded","false");9>j("ie")&&this.defer(function(){try{var a=domStyle.getComputedStyle(this.domNode);if(a){var b=a.fontFamily;if(b){var c=this.domNode.getElementsByTagName("INPUT");if(c)for(a=0;a<c.length;a++)c[a].style.fontFamily=
b}}}catch(d){}})},_setStyleAttr:function(a){this.inherited(arguments);f.toggle(this.domNode,this.baseClass.replace(/\s+|$/g,"FixedWidth "),!!this.domNode.style.width)},isLoaded:function(){return this._isLoaded},loadDropDown:function(a){this._loadChildren(!0);this._isLoaded=!0;a()},closeDropDown:function(){this.inherited(arguments);if(this.dropDown&&this.dropDown.menuTableNode)this.dropDown.menuTableNode.style.width=""},destroy:function(a){this.dropDown&&!this.dropDown._destroyed&&(this.dropDown.destroyRecursive(a),
delete this.dropDown);this.inherited(arguments)},_onFocus:function(){this.validate(!0);this.inherited(arguments)},_onBlur:function(){e.hide(this.domNode);this.inherited(arguments);this.validate(!1)}});d._Menu=l;return d});