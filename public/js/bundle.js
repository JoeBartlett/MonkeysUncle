webpackJsonp([1],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(30);
	__webpack_require__(2);
	
	// require('./scss/a-main.scss');
	// require('./scss/a-user.scss');
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(8);
	
	//components
	__webpack_require__(6);

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(23);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	
	const jquery = __webpack_require__(1);
	
	jquery(function ($) {
	    'use strict';
	
	    if ($('.cta').length > 0) {
	        if ($('.link-out').length > 0) {
	            $('.link-out').append('<i class="material-icons">open_in_new</i>');
	        }
	
	        if ($('.learn-more').length > 0) {
	            $('.learn-more').append('<i class="material-icons">keyboard_arrow_right</i>');
	        }
	    }
	});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(7);
	__webpack_require__(5);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(25);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(26);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(27);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(28);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
23,
/* 25 */
23,
/* 26 */
23,
/* 27 */
23,
/* 28 */
23,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
		if ( true ) {
	
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
	
			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {
	
	$.ui = $.ui || {};
	
	return $.ui.version = "1.12.1";
	
	} ) );


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Widget 1.12.1
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */
	
	//>>label: Widget
	//>>group: Core
	//>>description: Provides a factory for creating stateful widgets with a common API.
	//>>docs: http://api.jqueryui.com/jQuery.widget/
	//>>demos: http://jqueryui.com/widget/
	
	( function( factory ) {
		if ( true ) {
	
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(1), __webpack_require__(29) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
	
			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {
	
	var widgetUuid = 0;
	var widgetSlice = Array.prototype.slice;
	
	$.cleanData = ( function( orig ) {
		return function( elems ) {
			var events, elem, i;
			for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
				try {
	
					// Only trigger remove when necessary to save time
					events = $._data( elem, "events" );
					if ( events && events.remove ) {
						$( elem ).triggerHandler( "remove" );
					}
	
				// Http://bugs.jquery.com/ticket/8235
				} catch ( e ) {}
			}
			orig( elems );
		};
	} )( $.cleanData );
	
	$.widget = function( name, base, prototype ) {
		var existingConstructor, constructor, basePrototype;
	
		// ProxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		var proxiedPrototype = {};
	
		var namespace = name.split( "." )[ 0 ];
		name = name.split( "." )[ 1 ];
		var fullName = namespace + "-" + name;
	
		if ( !prototype ) {
			prototype = base;
			base = $.Widget;
		}
	
		if ( $.isArray( prototype ) ) {
			prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
		}
	
		// Create selector for plugin
		$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
			return !!$.data( elem, fullName );
		};
	
		$[ namespace ] = $[ namespace ] || {};
		existingConstructor = $[ namespace ][ name ];
		constructor = $[ namespace ][ name ] = function( options, element ) {
	
			// Allow instantiation without "new" keyword
			if ( !this._createWidget ) {
				return new constructor( options, element );
			}
	
			// Allow instantiation without initializing for simple inheritance
			// must use "new" keyword (the code above always passes args)
			if ( arguments.length ) {
				this._createWidget( options, element );
			}
		};
	
		// Extend with the existing constructor to carry over any static properties
		$.extend( constructor, existingConstructor, {
			version: prototype.version,
	
			// Copy the object used to create the prototype in case we need to
			// redefine the widget later
			_proto: $.extend( {}, prototype ),
	
			// Track widgets that inherit from this widget in case this widget is
			// redefined after a widget inherits from it
			_childConstructors: []
		} );
	
		basePrototype = new base();
	
		// We need to make the options hash a property directly on the new instance
		// otherwise we'll modify the options hash on the prototype that we're
		// inheriting from
		basePrototype.options = $.widget.extend( {}, basePrototype.options );
		$.each( prototype, function( prop, value ) {
			if ( !$.isFunction( value ) ) {
				proxiedPrototype[ prop ] = value;
				return;
			}
			proxiedPrototype[ prop ] = ( function() {
				function _super() {
					return base.prototype[ prop ].apply( this, arguments );
				}
	
				function _superApply( args ) {
					return base.prototype[ prop ].apply( this, args );
				}
	
				return function() {
					var __super = this._super;
					var __superApply = this._superApply;
					var returnValue;
	
					this._super = _super;
					this._superApply = _superApply;
	
					returnValue = value.apply( this, arguments );
	
					this._super = __super;
					this._superApply = __superApply;
	
					return returnValue;
				};
			} )();
		} );
		constructor.prototype = $.widget.extend( basePrototype, {
	
			// TODO: remove support for widgetEventPrefix
			// always use the name + a colon as the prefix, e.g., draggable:start
			// don't prefix for widgets that aren't DOM-based
			widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		} );
	
		// If this widget is being redefined then we need to find all widgets that
		// are inheriting from it and redefine all of them so that they inherit from
		// the new version of this widget. We're essentially trying to replace one
		// level in the prototype chain.
		if ( existingConstructor ) {
			$.each( existingConstructor._childConstructors, function( i, child ) {
				var childPrototype = child.prototype;
	
				// Redefine the child widget using the same prototype that was
				// originally used, but inherit from the new version of the base
				$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
					child._proto );
			} );
	
			// Remove the list of existing child constructors from the old constructor
			// so the old child constructors can be garbage collected
			delete existingConstructor._childConstructors;
		} else {
			base._childConstructors.push( constructor );
		}
	
		$.widget.bridge( name, constructor );
	
		return constructor;
	};
	
	$.widget.extend = function( target ) {
		var input = widgetSlice.call( arguments, 1 );
		var inputIndex = 0;
		var inputLength = input.length;
		var key;
		var value;
	
		for ( ; inputIndex < inputLength; inputIndex++ ) {
			for ( key in input[ inputIndex ] ) {
				value = input[ inputIndex ][ key ];
				if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
	
					// Clone objects
					if ( $.isPlainObject( value ) ) {
						target[ key ] = $.isPlainObject( target[ key ] ) ?
							$.widget.extend( {}, target[ key ], value ) :
	
							// Don't extend strings, arrays, etc. with objects
							$.widget.extend( {}, value );
	
					// Copy everything else by reference
					} else {
						target[ key ] = value;
					}
				}
			}
		}
		return target;
	};
	
	$.widget.bridge = function( name, object ) {
		var fullName = object.prototype.widgetFullName || name;
		$.fn[ name ] = function( options ) {
			var isMethodCall = typeof options === "string";
			var args = widgetSlice.call( arguments, 1 );
			var returnValue = this;
	
			if ( isMethodCall ) {
	
				// If this is an empty collection, we need to have the instance method
				// return undefined instead of the jQuery instance
				if ( !this.length && options === "instance" ) {
					returnValue = undefined;
				} else {
					this.each( function() {
						var methodValue;
						var instance = $.data( this, fullName );
	
						if ( options === "instance" ) {
							returnValue = instance;
							return false;
						}
	
						if ( !instance ) {
							return $.error( "cannot call methods on " + name +
								" prior to initialization; " +
								"attempted to call method '" + options + "'" );
						}
	
						if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
							return $.error( "no such method '" + options + "' for " + name +
								" widget instance" );
						}
	
						methodValue = instance[ options ].apply( instance, args );
	
						if ( methodValue !== instance && methodValue !== undefined ) {
							returnValue = methodValue && methodValue.jquery ?
								returnValue.pushStack( methodValue.get() ) :
								methodValue;
							return false;
						}
					} );
				}
			} else {
	
				// Allow multiple hashes to be passed on init
				if ( args.length ) {
					options = $.widget.extend.apply( null, [ options ].concat( args ) );
				}
	
				this.each( function() {
					var instance = $.data( this, fullName );
					if ( instance ) {
						instance.option( options || {} );
						if ( instance._init ) {
							instance._init();
						}
					} else {
						$.data( this, fullName, new object( options, this ) );
					}
				} );
			}
	
			return returnValue;
		};
	};
	
	$.Widget = function( /* options, element */ ) {};
	$.Widget._childConstructors = [];
	
	$.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
	
		options: {
			classes: {},
			disabled: false,
	
			// Callbacks
			create: null
		},
	
		_createWidget: function( options, element ) {
			element = $( element || this.defaultElement || this )[ 0 ];
			this.element = $( element );
			this.uuid = widgetUuid++;
			this.eventNamespace = "." + this.widgetName + this.uuid;
	
			this.bindings = $();
			this.hoverable = $();
			this.focusable = $();
			this.classesElementLookup = {};
	
			if ( element !== this ) {
				$.data( element, this.widgetFullName, this );
				this._on( true, this.element, {
					remove: function( event ) {
						if ( event.target === element ) {
							this.destroy();
						}
					}
				} );
				this.document = $( element.style ?
	
					// Element within the document
					element.ownerDocument :
	
					// Element is window or document
					element.document || element );
				this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
			}
	
			this.options = $.widget.extend( {},
				this.options,
				this._getCreateOptions(),
				options );
	
			this._create();
	
			if ( this.options.disabled ) {
				this._setOptionDisabled( this.options.disabled );
			}
	
			this._trigger( "create", null, this._getCreateEventData() );
			this._init();
		},
	
		_getCreateOptions: function() {
			return {};
		},
	
		_getCreateEventData: $.noop,
	
		_create: $.noop,
	
		_init: $.noop,
	
		destroy: function() {
			var that = this;
	
			this._destroy();
			$.each( this.classesElementLookup, function( key, value ) {
				that._removeClass( value, key );
			} );
	
			// We can probably remove the unbind calls in 2.0
			// all event bindings should go through this._on()
			this.element
				.off( this.eventNamespace )
				.removeData( this.widgetFullName );
			this.widget()
				.off( this.eventNamespace )
				.removeAttr( "aria-disabled" );
	
			// Clean up events and states
			this.bindings.off( this.eventNamespace );
		},
	
		_destroy: $.noop,
	
		widget: function() {
			return this.element;
		},
	
		option: function( key, value ) {
			var options = key;
			var parts;
			var curOption;
			var i;
	
			if ( arguments.length === 0 ) {
	
				// Don't return a reference to the internal hash
				return $.widget.extend( {}, this.options );
			}
	
			if ( typeof key === "string" ) {
	
				// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
				options = {};
				parts = key.split( "." );
				key = parts.shift();
				if ( parts.length ) {
					curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
					for ( i = 0; i < parts.length - 1; i++ ) {
						curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
						curOption = curOption[ parts[ i ] ];
					}
					key = parts.pop();
					if ( arguments.length === 1 ) {
						return curOption[ key ] === undefined ? null : curOption[ key ];
					}
					curOption[ key ] = value;
				} else {
					if ( arguments.length === 1 ) {
						return this.options[ key ] === undefined ? null : this.options[ key ];
					}
					options[ key ] = value;
				}
			}
	
			this._setOptions( options );
	
			return this;
		},
	
		_setOptions: function( options ) {
			var key;
	
			for ( key in options ) {
				this._setOption( key, options[ key ] );
			}
	
			return this;
		},
	
		_setOption: function( key, value ) {
			if ( key === "classes" ) {
				this._setOptionClasses( value );
			}
	
			this.options[ key ] = value;
	
			if ( key === "disabled" ) {
				this._setOptionDisabled( value );
			}
	
			return this;
		},
	
		_setOptionClasses: function( value ) {
			var classKey, elements, currentElements;
	
			for ( classKey in value ) {
				currentElements = this.classesElementLookup[ classKey ];
				if ( value[ classKey ] === this.options.classes[ classKey ] ||
						!currentElements ||
						!currentElements.length ) {
					continue;
				}
	
				// We are doing this to create a new jQuery object because the _removeClass() call
				// on the next line is going to destroy the reference to the current elements being
				// tracked. We need to save a copy of this collection so that we can add the new classes
				// below.
				elements = $( currentElements.get() );
				this._removeClass( currentElements, classKey );
	
				// We don't use _addClass() here, because that uses this.options.classes
				// for generating the string of classes. We want to use the value passed in from
				// _setOption(), this is the new value of the classes option which was passed to
				// _setOption(). We pass this value directly to _classes().
				elements.addClass( this._classes( {
					element: elements,
					keys: classKey,
					classes: value,
					add: true
				} ) );
			}
		},
	
		_setOptionDisabled: function( value ) {
			this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );
	
			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this._removeClass( this.hoverable, null, "ui-state-hover" );
				this._removeClass( this.focusable, null, "ui-state-focus" );
			}
		},
	
		enable: function() {
			return this._setOptions( { disabled: false } );
		},
	
		disable: function() {
			return this._setOptions( { disabled: true } );
		},
	
		_classes: function( options ) {
			var full = [];
			var that = this;
	
			options = $.extend( {
				element: this.element,
				classes: this.options.classes || {}
			}, options );
	
			function processClassString( classes, checkOption ) {
				var current, i;
				for ( i = 0; i < classes.length; i++ ) {
					current = that.classesElementLookup[ classes[ i ] ] || $();
					if ( options.add ) {
						current = $( $.unique( current.get().concat( options.element.get() ) ) );
					} else {
						current = $( current.not( options.element ).get() );
					}
					that.classesElementLookup[ classes[ i ] ] = current;
					full.push( classes[ i ] );
					if ( checkOption && options.classes[ classes[ i ] ] ) {
						full.push( options.classes[ classes[ i ] ] );
					}
				}
			}
	
			this._on( options.element, {
				"remove": "_untrackClassesElement"
			} );
	
			if ( options.keys ) {
				processClassString( options.keys.match( /\S+/g ) || [], true );
			}
			if ( options.extra ) {
				processClassString( options.extra.match( /\S+/g ) || [] );
			}
	
			return full.join( " " );
		},
	
		_untrackClassesElement: function( event ) {
			var that = this;
			$.each( that.classesElementLookup, function( key, value ) {
				if ( $.inArray( event.target, value ) !== -1 ) {
					that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
				}
			} );
		},
	
		_removeClass: function( element, keys, extra ) {
			return this._toggleClass( element, keys, extra, false );
		},
	
		_addClass: function( element, keys, extra ) {
			return this._toggleClass( element, keys, extra, true );
		},
	
		_toggleClass: function( element, keys, extra, add ) {
			add = ( typeof add === "boolean" ) ? add : extra;
			var shift = ( typeof element === "string" || element === null ),
				options = {
					extra: shift ? keys : extra,
					keys: shift ? element : keys,
					element: shift ? this.element : element,
					add: add
				};
			options.element.toggleClass( this._classes( options ), add );
			return this;
		},
	
		_on: function( suppressDisabledCheck, element, handlers ) {
			var delegateElement;
			var instance = this;
	
			// No suppressDisabledCheck flag, shuffle arguments
			if ( typeof suppressDisabledCheck !== "boolean" ) {
				handlers = element;
				element = suppressDisabledCheck;
				suppressDisabledCheck = false;
			}
	
			// No element argument, shuffle and use this.element
			if ( !handlers ) {
				handlers = element;
				element = this.element;
				delegateElement = this.widget();
			} else {
				element = delegateElement = $( element );
				this.bindings = this.bindings.add( element );
			}
	
			$.each( handlers, function( event, handler ) {
				function handlerProxy() {
	
					// Allow widgets to customize the disabled handling
					// - disabled as an array instead of boolean
					// - disabled class as method for disabling individual parts
					if ( !suppressDisabledCheck &&
							( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
						return;
					}
					return ( typeof handler === "string" ? instance[ handler ] : handler )
						.apply( instance, arguments );
				}
	
				// Copy the guid so direct unbinding works
				if ( typeof handler !== "string" ) {
					handlerProxy.guid = handler.guid =
						handler.guid || handlerProxy.guid || $.guid++;
				}
	
				var match = event.match( /^([\w:-]*)\s*(.*)$/ );
				var eventName = match[ 1 ] + instance.eventNamespace;
				var selector = match[ 2 ];
	
				if ( selector ) {
					delegateElement.on( eventName, selector, handlerProxy );
				} else {
					element.on( eventName, handlerProxy );
				}
			} );
		},
	
		_off: function( element, eventName ) {
			eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
				this.eventNamespace;
			element.off( eventName ).off( eventName );
	
			// Clear the stack to avoid memory leaks (#10056)
			this.bindings = $( this.bindings.not( element ).get() );
			this.focusable = $( this.focusable.not( element ).get() );
			this.hoverable = $( this.hoverable.not( element ).get() );
		},
	
		_delay: function( handler, delay ) {
			function handlerProxy() {
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}
			var instance = this;
			return setTimeout( handlerProxy, delay || 0 );
		},
	
		_hoverable: function( element ) {
			this.hoverable = this.hoverable.add( element );
			this._on( element, {
				mouseenter: function( event ) {
					this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
				},
				mouseleave: function( event ) {
					this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
				}
			} );
		},
	
		_focusable: function( element ) {
			this.focusable = this.focusable.add( element );
			this._on( element, {
				focusin: function( event ) {
					this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
				},
				focusout: function( event ) {
					this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
				}
			} );
		},
	
		_trigger: function( type, event, data ) {
			var prop, orig;
			var callback = this.options[ type ];
	
			data = data || {};
			event = $.Event( event );
			event.type = ( type === this.widgetEventPrefix ?
				type :
				this.widgetEventPrefix + type ).toLowerCase();
	
			// The original event may come from any element
			// so we need to reset the target on the new event
			event.target = this.element[ 0 ];
	
			// Copy original event properties over to the new event
			orig = event.originalEvent;
			if ( orig ) {
				for ( prop in orig ) {
					if ( !( prop in event ) ) {
						event[ prop ] = orig[ prop ];
					}
				}
			}
	
			this.element.trigger( event, data );
			return !( $.isFunction( callback ) &&
				callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
				event.isDefaultPrevented() );
		}
	};
	
	$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
		$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
			if ( typeof options === "string" ) {
				options = { effect: options };
			}
	
			var hasOptions;
			var effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
	
			options = options || {};
			if ( typeof options === "number" ) {
				options = { duration: options };
			}
	
			hasOptions = !$.isEmptyObject( options );
			options.complete = callback;
	
			if ( options.delay ) {
				element.delay( options.delay );
			}
	
			if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
				element[ method ]( options );
			} else if ( effectName !== method && element[ effectName ] ) {
				element[ effectName ]( options.duration, options.easing, callback );
			} else {
				element.queue( function( next ) {
					$( this )[ method ]();
					if ( callback ) {
						callback.call( element[ 0 ] );
					}
					next();
				} );
			}
		};
	} );
	
	return $.widget;
	
	} ) );


/***/ })
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2Nzcy9wYXJ0aWFscy9jb21wb25lbnRzL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2Nzcy9wYXJ0aWFscy9jb21wb25lbnRzL2N0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2Nzcy9wYXJ0aWFscy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9zY3NzL3BhcnRpYWxzL2NvbXBvbmVudHMvcG9kL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9zY3NzL3BhcnRpYWxzL2ZvY3VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9zY3NzL3BhcnRpYWxzL2dsb2JhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvc2Nzcy9wYXJ0aWFscy9wYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9zY3NzL3BhcnRpYWxzL2NvbXBvbmVudHMvYnV0dG9uL19idXR0b24uc2NzcyIsIndlYnBhY2s6Ly8vLi9+L2pxdWVyeS11aS91aS92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL34vanF1ZXJ5LXVpL3VpL3dpZGdldC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwianF1ZXJ5IiwiJCIsImxlbmd0aCIsImFwcGVuZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG9CQUFBQSxDQUFRLENBQVI7QUFDQSxvQkFBQUEsQ0FBUSxFQUFSO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUjs7QUFFQTtBQUNBO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUjtBQUNBLG9CQUFBQSxDQUFRLEVBQVI7QUFDQSxvQkFBQUEsQ0FBUSxDQUFSOztBQUVBO0FBQ0Esb0JBQUFBLENBQVEsQ0FBUixFOzs7Ozs7Ozs7QUNYQSxvQkFBQUEsQ0FBUSxFQUFSLEU7Ozs7OztBQ0FBLG9CQUFBQSxDQUFRLEVBQVI7O0FBRUEsT0FBTUMsU0FBUyxtQkFBQUQsQ0FBUSxDQUFS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QTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsR0FBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTLGtDQUFrQztBQUMzQztBQUNBO0FBQ0EsZUFBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBLEVBQUMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCdqcXVlcnktdWknKTtcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xuXG4vLyByZXF1aXJlKCcuL3Njc3MvYS1tYWluLnNjc3MnKTtcbi8vIHJlcXVpcmUoJy4vc2Nzcy9hLXVzZXIuc2NzcycpO1xucmVxdWlyZSgnLi9zY3NzL3BhcnRpYWxzL2dsb2JhbCcpO1xucmVxdWlyZSgnLi9zY3NzL3BhcnRpYWxzL3BhZ2UnKTtcbnJlcXVpcmUoJy4vc2Nzcy9wYXJ0aWFscy9mb2N1cycpO1xuXG4vL2NvbXBvbmVudHNcbnJlcXVpcmUoJy4vc2Nzcy9wYXJ0aWFscy9jb21wb25lbnRzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2Jhc2UuanMiLCJyZXF1aXJlKCcuL19idXR0b24uc2NzcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3Njc3MvcGFydGlhbHMvY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJyZXF1aXJlKCcuL19jdGEuc2NzcycpO1xuXG5jb25zdCBqcXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcblxuanF1ZXJ5KGZ1bmN0aW9uICgkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICgkKCcuY3RhJykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoJCgnLmxpbmstb3V0JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLmxpbmstb3V0JykuYXBwZW5kKCc8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+b3Blbl9pbl9uZXc8L2k+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJCgnLmxlYXJuLW1vcmUnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCcubGVhcm4tbW9yZScpLmFwcGVuZCgnPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmtleWJvYXJkX2Fycm93X3JpZ2h0PC9pPicpO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3NzL3BhcnRpYWxzL2NvbXBvbmVudHMvY3RhL2luZGV4LmpzIiwicmVxdWlyZSgnLi9idXR0b24nKTtcbnJlcXVpcmUoJy4vcG9kJyk7XG5yZXF1aXJlKCcuL2N0YScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3NzL3BhcnRpYWxzL2NvbXBvbmVudHMvaW5kZXguanMiLCJyZXF1aXJlKCcuL19wb2Quc2NzcycpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3Njc3MvcGFydGlhbHMvY29tcG9uZW50cy9wb2QvaW5kZXguanMiLCJyZXF1aXJlKCcuL19mb2N1cy5zY3NzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2Nzcy9wYXJ0aWFscy9mb2N1cy9pbmRleC5qcyIsInJlcXVpcmUoJy4vX2dsb2JhbC5zY3NzJyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2Nzcy9wYXJ0aWFscy9nbG9iYWwvaW5kZXguanMiLCJyZXF1aXJlKCcuL19wYWdlLnNjc3MnKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3NzL3BhcnRpYWxzL3BhZ2UvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL3Njc3MvcGFydGlhbHMvY29tcG9uZW50cy9idXR0b24vX2J1dHRvbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIoIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5cbiQudWkgPSAkLnVpIHx8IHt9O1xuXG5yZXR1cm4gJC51aS52ZXJzaW9uID0gXCIxLjEyLjFcIjtcblxufSApICk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanF1ZXJ5LXVpL3VpL3ZlcnNpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8qIVxuICogalF1ZXJ5IFVJIFdpZGdldCAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogV2lkZ2V0XG4vLz4+Z3JvdXA6IENvcmVcbi8vPj5kZXNjcmlwdGlvbjogUHJvdmlkZXMgYSBmYWN0b3J5IGZvciBjcmVhdGluZyBzdGF0ZWZ1bCB3aWRnZXRzIHdpdGggYSBjb21tb24gQVBJLlxuLy8+PmRvY3M6IGh0dHA6Ly9hcGkuanF1ZXJ5dWkuY29tL2pRdWVyeS53aWRnZXQvXG4vLz4+ZGVtb3M6IGh0dHA6Ly9qcXVlcnl1aS5jb20vd2lkZ2V0L1xuXG4oIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59KCBmdW5jdGlvbiggJCApIHtcblxudmFyIHdpZGdldFV1aWQgPSAwO1xudmFyIHdpZGdldFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4kLmNsZWFuRGF0YSA9ICggZnVuY3Rpb24oIG9yaWcgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGV2ZW50cywgZWxlbSwgaTtcblx0XHRmb3IgKCBpID0gMDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRcdHRyeSB7XG5cblx0XHRcdFx0Ly8gT25seSB0cmlnZ2VyIHJlbW92ZSB3aGVuIG5lY2Vzc2FyeSB0byBzYXZlIHRpbWVcblx0XHRcdFx0ZXZlbnRzID0gJC5fZGF0YSggZWxlbSwgXCJldmVudHNcIiApO1xuXHRcdFx0XHRpZiAoIGV2ZW50cyAmJiBldmVudHMucmVtb3ZlICkge1xuXHRcdFx0XHRcdCQoIGVsZW0gKS50cmlnZ2VySGFuZGxlciggXCJyZW1vdmVcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vIEh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzgyMzVcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblx0XHR9XG5cdFx0b3JpZyggZWxlbXMgKTtcblx0fTtcbn0gKSggJC5jbGVhbkRhdGEgKTtcblxuJC53aWRnZXQgPSBmdW5jdGlvbiggbmFtZSwgYmFzZSwgcHJvdG90eXBlICkge1xuXHR2YXIgZXhpc3RpbmdDb25zdHJ1Y3RvciwgY29uc3RydWN0b3IsIGJhc2VQcm90b3R5cGU7XG5cblx0Ly8gUHJveGllZFByb3RvdHlwZSBhbGxvd3MgdGhlIHByb3ZpZGVkIHByb3RvdHlwZSB0byByZW1haW4gdW5tb2RpZmllZFxuXHQvLyBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGFzIGEgbWl4aW4gZm9yIG11bHRpcGxlIHdpZGdldHMgKCM4ODc2KVxuXHR2YXIgcHJveGllZFByb3RvdHlwZSA9IHt9O1xuXG5cdHZhciBuYW1lc3BhY2UgPSBuYW1lLnNwbGl0KCBcIi5cIiApWyAwIF07XG5cdG5hbWUgPSBuYW1lLnNwbGl0KCBcIi5cIiApWyAxIF07XG5cdHZhciBmdWxsTmFtZSA9IG5hbWVzcGFjZSArIFwiLVwiICsgbmFtZTtcblxuXHRpZiAoICFwcm90b3R5cGUgKSB7XG5cdFx0cHJvdG90eXBlID0gYmFzZTtcblx0XHRiYXNlID0gJC5XaWRnZXQ7XG5cdH1cblxuXHRpZiAoICQuaXNBcnJheSggcHJvdG90eXBlICkgKSB7XG5cdFx0cHJvdG90eXBlID0gJC5leHRlbmQuYXBwbHkoIG51bGwsIFsge30gXS5jb25jYXQoIHByb3RvdHlwZSApICk7XG5cdH1cblxuXHQvLyBDcmVhdGUgc2VsZWN0b3IgZm9yIHBsdWdpblxuXHQkLmV4cHJbIFwiOlwiIF1bIGZ1bGxOYW1lLnRvTG93ZXJDYXNlKCkgXSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAhISQuZGF0YSggZWxlbSwgZnVsbE5hbWUgKTtcblx0fTtcblxuXHQkWyBuYW1lc3BhY2UgXSA9ICRbIG5hbWVzcGFjZSBdIHx8IHt9O1xuXHRleGlzdGluZ0NvbnN0cnVjdG9yID0gJFsgbmFtZXNwYWNlIF1bIG5hbWUgXTtcblx0Y29uc3RydWN0b3IgPSAkWyBuYW1lc3BhY2UgXVsgbmFtZSBdID0gZnVuY3Rpb24oIG9wdGlvbnMsIGVsZW1lbnQgKSB7XG5cblx0XHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgXCJuZXdcIiBrZXl3b3JkXG5cdFx0aWYgKCAhdGhpcy5fY3JlYXRlV2lkZ2V0ICkge1xuXHRcdFx0cmV0dXJuIG5ldyBjb25zdHJ1Y3Rvciggb3B0aW9ucywgZWxlbWVudCApO1xuXHRcdH1cblxuXHRcdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCBpbml0aWFsaXppbmcgZm9yIHNpbXBsZSBpbmhlcml0YW5jZVxuXHRcdC8vIG11c3QgdXNlIFwibmV3XCIga2V5d29yZCAodGhlIGNvZGUgYWJvdmUgYWx3YXlzIHBhc3NlcyBhcmdzKVxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHRoaXMuX2NyZWF0ZVdpZGdldCggb3B0aW9ucywgZWxlbWVudCApO1xuXHRcdH1cblx0fTtcblxuXHQvLyBFeHRlbmQgd2l0aCB0aGUgZXhpc3RpbmcgY29uc3RydWN0b3IgdG8gY2Fycnkgb3ZlciBhbnkgc3RhdGljIHByb3BlcnRpZXNcblx0JC5leHRlbmQoIGNvbnN0cnVjdG9yLCBleGlzdGluZ0NvbnN0cnVjdG9yLCB7XG5cdFx0dmVyc2lvbjogcHJvdG90eXBlLnZlcnNpb24sXG5cblx0XHQvLyBDb3B5IHRoZSBvYmplY3QgdXNlZCB0byBjcmVhdGUgdGhlIHByb3RvdHlwZSBpbiBjYXNlIHdlIG5lZWQgdG9cblx0XHQvLyByZWRlZmluZSB0aGUgd2lkZ2V0IGxhdGVyXG5cdFx0X3Byb3RvOiAkLmV4dGVuZCgge30sIHByb3RvdHlwZSApLFxuXG5cdFx0Ly8gVHJhY2sgd2lkZ2V0cyB0aGF0IGluaGVyaXQgZnJvbSB0aGlzIHdpZGdldCBpbiBjYXNlIHRoaXMgd2lkZ2V0IGlzXG5cdFx0Ly8gcmVkZWZpbmVkIGFmdGVyIGEgd2lkZ2V0IGluaGVyaXRzIGZyb20gaXRcblx0XHRfY2hpbGRDb25zdHJ1Y3RvcnM6IFtdXG5cdH0gKTtcblxuXHRiYXNlUHJvdG90eXBlID0gbmV3IGJhc2UoKTtcblxuXHQvLyBXZSBuZWVkIHRvIG1ha2UgdGhlIG9wdGlvbnMgaGFzaCBhIHByb3BlcnR5IGRpcmVjdGx5IG9uIHRoZSBuZXcgaW5zdGFuY2Vcblx0Ly8gb3RoZXJ3aXNlIHdlJ2xsIG1vZGlmeSB0aGUgb3B0aW9ucyBoYXNoIG9uIHRoZSBwcm90b3R5cGUgdGhhdCB3ZSdyZVxuXHQvLyBpbmhlcml0aW5nIGZyb21cblx0YmFzZVByb3RvdHlwZS5vcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kKCB7fSwgYmFzZVByb3RvdHlwZS5vcHRpb25zICk7XG5cdCQuZWFjaCggcHJvdG90eXBlLCBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG5cdFx0aWYgKCAhJC5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cHJveGllZFByb3RvdHlwZVsgcHJvcCBdID0gdmFsdWU7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHByb3hpZWRQcm90b3R5cGVbIHByb3AgXSA9ICggZnVuY3Rpb24oKSB7XG5cdFx0XHRmdW5jdGlvbiBfc3VwZXIoKSB7XG5cdFx0XHRcdHJldHVybiBiYXNlLnByb3RvdHlwZVsgcHJvcCBdLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gX3N1cGVyQXBwbHkoIGFyZ3MgKSB7XG5cdFx0XHRcdHJldHVybiBiYXNlLnByb3RvdHlwZVsgcHJvcCBdLmFwcGx5KCB0aGlzLCBhcmdzICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIF9fc3VwZXIgPSB0aGlzLl9zdXBlcjtcblx0XHRcdFx0dmFyIF9fc3VwZXJBcHBseSA9IHRoaXMuX3N1cGVyQXBwbHk7XG5cdFx0XHRcdHZhciByZXR1cm5WYWx1ZTtcblxuXHRcdFx0XHR0aGlzLl9zdXBlciA9IF9zdXBlcjtcblx0XHRcdFx0dGhpcy5fc3VwZXJBcHBseSA9IF9zdXBlckFwcGx5O1xuXG5cdFx0XHRcdHJldHVyblZhbHVlID0gdmFsdWUuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdHRoaXMuX3N1cGVyID0gX19zdXBlcjtcblx0XHRcdFx0dGhpcy5fc3VwZXJBcHBseSA9IF9fc3VwZXJBcHBseTtcblxuXHRcdFx0XHRyZXR1cm4gcmV0dXJuVmFsdWU7XG5cdFx0XHR9O1xuXHRcdH0gKSgpO1xuXHR9ICk7XG5cdGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQud2lkZ2V0LmV4dGVuZCggYmFzZVByb3RvdHlwZSwge1xuXG5cdFx0Ly8gVE9ETzogcmVtb3ZlIHN1cHBvcnQgZm9yIHdpZGdldEV2ZW50UHJlZml4XG5cdFx0Ly8gYWx3YXlzIHVzZSB0aGUgbmFtZSArIGEgY29sb24gYXMgdGhlIHByZWZpeCwgZS5nLiwgZHJhZ2dhYmxlOnN0YXJ0XG5cdFx0Ly8gZG9uJ3QgcHJlZml4IGZvciB3aWRnZXRzIHRoYXQgYXJlbid0IERPTS1iYXNlZFxuXHRcdHdpZGdldEV2ZW50UHJlZml4OiBleGlzdGluZ0NvbnN0cnVjdG9yID8gKCBiYXNlUHJvdG90eXBlLndpZGdldEV2ZW50UHJlZml4IHx8IG5hbWUgKSA6IG5hbWVcblx0fSwgcHJveGllZFByb3RvdHlwZSwge1xuXHRcdGNvbnN0cnVjdG9yOiBjb25zdHJ1Y3Rvcixcblx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZSxcblx0XHR3aWRnZXROYW1lOiBuYW1lLFxuXHRcdHdpZGdldEZ1bGxOYW1lOiBmdWxsTmFtZVxuXHR9ICk7XG5cblx0Ly8gSWYgdGhpcyB3aWRnZXQgaXMgYmVpbmcgcmVkZWZpbmVkIHRoZW4gd2UgbmVlZCB0byBmaW5kIGFsbCB3aWRnZXRzIHRoYXRcblx0Ly8gYXJlIGluaGVyaXRpbmcgZnJvbSBpdCBhbmQgcmVkZWZpbmUgYWxsIG9mIHRoZW0gc28gdGhhdCB0aGV5IGluaGVyaXQgZnJvbVxuXHQvLyB0aGUgbmV3IHZlcnNpb24gb2YgdGhpcyB3aWRnZXQuIFdlJ3JlIGVzc2VudGlhbGx5IHRyeWluZyB0byByZXBsYWNlIG9uZVxuXHQvLyBsZXZlbCBpbiB0aGUgcHJvdG90eXBlIGNoYWluLlxuXHRpZiAoIGV4aXN0aW5nQ29uc3RydWN0b3IgKSB7XG5cdFx0JC5lYWNoKCBleGlzdGluZ0NvbnN0cnVjdG9yLl9jaGlsZENvbnN0cnVjdG9ycywgZnVuY3Rpb24oIGksIGNoaWxkICkge1xuXHRcdFx0dmFyIGNoaWxkUHJvdG90eXBlID0gY2hpbGQucHJvdG90eXBlO1xuXG5cdFx0XHQvLyBSZWRlZmluZSB0aGUgY2hpbGQgd2lkZ2V0IHVzaW5nIHRoZSBzYW1lIHByb3RvdHlwZSB0aGF0IHdhc1xuXHRcdFx0Ly8gb3JpZ2luYWxseSB1c2VkLCBidXQgaW5oZXJpdCBmcm9tIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGUgYmFzZVxuXHRcdFx0JC53aWRnZXQoIGNoaWxkUHJvdG90eXBlLm5hbWVzcGFjZSArIFwiLlwiICsgY2hpbGRQcm90b3R5cGUud2lkZ2V0TmFtZSwgY29uc3RydWN0b3IsXG5cdFx0XHRcdGNoaWxkLl9wcm90byApO1xuXHRcdH0gKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgbGlzdCBvZiBleGlzdGluZyBjaGlsZCBjb25zdHJ1Y3RvcnMgZnJvbSB0aGUgb2xkIGNvbnN0cnVjdG9yXG5cdFx0Ly8gc28gdGhlIG9sZCBjaGlsZCBjb25zdHJ1Y3RvcnMgY2FuIGJlIGdhcmJhZ2UgY29sbGVjdGVkXG5cdFx0ZGVsZXRlIGV4aXN0aW5nQ29uc3RydWN0b3IuX2NoaWxkQ29uc3RydWN0b3JzO1xuXHR9IGVsc2Uge1xuXHRcdGJhc2UuX2NoaWxkQ29uc3RydWN0b3JzLnB1c2goIGNvbnN0cnVjdG9yICk7XG5cdH1cblxuXHQkLndpZGdldC5icmlkZ2UoIG5hbWUsIGNvbnN0cnVjdG9yICk7XG5cblx0cmV0dXJuIGNvbnN0cnVjdG9yO1xufTtcblxuJC53aWRnZXQuZXh0ZW5kID0gZnVuY3Rpb24oIHRhcmdldCApIHtcblx0dmFyIGlucHV0ID0gd2lkZ2V0U2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICk7XG5cdHZhciBpbnB1dEluZGV4ID0gMDtcblx0dmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuXHR2YXIga2V5O1xuXHR2YXIgdmFsdWU7XG5cblx0Zm9yICggOyBpbnB1dEluZGV4IDwgaW5wdXRMZW5ndGg7IGlucHV0SW5kZXgrKyApIHtcblx0XHRmb3IgKCBrZXkgaW4gaW5wdXRbIGlucHV0SW5kZXggXSApIHtcblx0XHRcdHZhbHVlID0gaW5wdXRbIGlucHV0SW5kZXggXVsga2V5IF07XG5cdFx0XHRpZiAoIGlucHV0WyBpbnB1dEluZGV4IF0uaGFzT3duUHJvcGVydHkoIGtleSApICYmIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0Ly8gQ2xvbmUgb2JqZWN0c1xuXHRcdFx0XHRpZiAoICQuaXNQbGFpbk9iamVjdCggdmFsdWUgKSApIHtcblx0XHRcdFx0XHR0YXJnZXRbIGtleSBdID0gJC5pc1BsYWluT2JqZWN0KCB0YXJnZXRbIGtleSBdICkgP1xuXHRcdFx0XHRcdFx0JC53aWRnZXQuZXh0ZW5kKCB7fSwgdGFyZ2V0WyBrZXkgXSwgdmFsdWUgKSA6XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IGV4dGVuZCBzdHJpbmdzLCBhcnJheXMsIGV0Yy4gd2l0aCBvYmplY3RzXG5cdFx0XHRcdFx0XHQkLndpZGdldC5leHRlbmQoIHt9LCB2YWx1ZSApO1xuXG5cdFx0XHRcdC8vIENvcHkgZXZlcnl0aGluZyBlbHNlIGJ5IHJlZmVyZW5jZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRhcmdldFsga2V5IF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuJC53aWRnZXQuYnJpZGdlID0gZnVuY3Rpb24oIG5hbWUsIG9iamVjdCApIHtcblx0dmFyIGZ1bGxOYW1lID0gb2JqZWN0LnByb3RvdHlwZS53aWRnZXRGdWxsTmFtZSB8fCBuYW1lO1xuXHQkLmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0XHR2YXIgaXNNZXRob2RDYWxsID0gdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCI7XG5cdFx0dmFyIGFyZ3MgPSB3aWRnZXRTbGljZS5jYWxsKCBhcmd1bWVudHMsIDEgKTtcblx0XHR2YXIgcmV0dXJuVmFsdWUgPSB0aGlzO1xuXG5cdFx0aWYgKCBpc01ldGhvZENhbGwgKSB7XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYW4gZW1wdHkgY29sbGVjdGlvbiwgd2UgbmVlZCB0byBoYXZlIHRoZSBpbnN0YW5jZSBtZXRob2Rcblx0XHRcdC8vIHJldHVybiB1bmRlZmluZWQgaW5zdGVhZCBvZiB0aGUgalF1ZXJ5IGluc3RhbmNlXG5cdFx0XHRpZiAoICF0aGlzLmxlbmd0aCAmJiBvcHRpb25zID09PSBcImluc3RhbmNlXCIgKSB7XG5cdFx0XHRcdHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgbWV0aG9kVmFsdWU7XG5cdFx0XHRcdFx0dmFyIGluc3RhbmNlID0gJC5kYXRhKCB0aGlzLCBmdWxsTmFtZSApO1xuXG5cdFx0XHRcdFx0aWYgKCBvcHRpb25zID09PSBcImluc3RhbmNlXCIgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZSA9IGluc3RhbmNlO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICggIWluc3RhbmNlICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICQuZXJyb3IoIFwiY2Fubm90IGNhbGwgbWV0aG9kcyBvbiBcIiArIG5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcIiBwcmlvciB0byBpbml0aWFsaXphdGlvbjsgXCIgK1xuXHRcdFx0XHRcdFx0XHRcImF0dGVtcHRlZCB0byBjYWxsIG1ldGhvZCAnXCIgKyBvcHRpb25zICsgXCInXCIgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoICEkLmlzRnVuY3Rpb24oIGluc3RhbmNlWyBvcHRpb25zIF0gKSB8fCBvcHRpb25zLmNoYXJBdCggMCApID09PSBcIl9cIiApIHtcblx0XHRcdFx0XHRcdHJldHVybiAkLmVycm9yKCBcIm5vIHN1Y2ggbWV0aG9kICdcIiArIG9wdGlvbnMgKyBcIicgZm9yIFwiICsgbmFtZSArXG5cdFx0XHRcdFx0XHRcdFwiIHdpZGdldCBpbnN0YW5jZVwiICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bWV0aG9kVmFsdWUgPSBpbnN0YW5jZVsgb3B0aW9ucyBdLmFwcGx5KCBpbnN0YW5jZSwgYXJncyApO1xuXG5cdFx0XHRcdFx0aWYgKCBtZXRob2RWYWx1ZSAhPT0gaW5zdGFuY2UgJiYgbWV0aG9kVmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdHJldHVyblZhbHVlID0gbWV0aG9kVmFsdWUgJiYgbWV0aG9kVmFsdWUuanF1ZXJ5ID9cblx0XHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUucHVzaFN0YWNrKCBtZXRob2RWYWx1ZS5nZXQoKSApIDpcblx0XHRcdFx0XHRcdFx0bWV0aG9kVmFsdWU7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQWxsb3cgbXVsdGlwbGUgaGFzaGVzIHRvIGJlIHBhc3NlZCBvbiBpbml0XG5cdFx0XHRpZiAoIGFyZ3MubGVuZ3RoICkge1xuXHRcdFx0XHRvcHRpb25zID0gJC53aWRnZXQuZXh0ZW5kLmFwcGx5KCBudWxsLCBbIG9wdGlvbnMgXS5jb25jYXQoIGFyZ3MgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaW5zdGFuY2UgPSAkLmRhdGEoIHRoaXMsIGZ1bGxOYW1lICk7XG5cdFx0XHRcdGlmICggaW5zdGFuY2UgKSB7XG5cdFx0XHRcdFx0aW5zdGFuY2Uub3B0aW9uKCBvcHRpb25zIHx8IHt9ICk7XG5cdFx0XHRcdFx0aWYgKCBpbnN0YW5jZS5faW5pdCApIHtcblx0XHRcdFx0XHRcdGluc3RhbmNlLl9pbml0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdCQuZGF0YSggdGhpcywgZnVsbE5hbWUsIG5ldyBvYmplY3QoIG9wdGlvbnMsIHRoaXMgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldHVyblZhbHVlO1xuXHR9O1xufTtcblxuJC5XaWRnZXQgPSBmdW5jdGlvbiggLyogb3B0aW9ucywgZWxlbWVudCAqLyApIHt9O1xuJC5XaWRnZXQuX2NoaWxkQ29uc3RydWN0b3JzID0gW107XG5cbiQuV2lkZ2V0LnByb3RvdHlwZSA9IHtcblx0d2lkZ2V0TmFtZTogXCJ3aWRnZXRcIixcblx0d2lkZ2V0RXZlbnRQcmVmaXg6IFwiXCIsXG5cdGRlZmF1bHRFbGVtZW50OiBcIjxkaXY+XCIsXG5cblx0b3B0aW9uczoge1xuXHRcdGNsYXNzZXM6IHt9LFxuXHRcdGRpc2FibGVkOiBmYWxzZSxcblxuXHRcdC8vIENhbGxiYWNrc1xuXHRcdGNyZWF0ZTogbnVsbFxuXHR9LFxuXG5cdF9jcmVhdGVXaWRnZXQ6IGZ1bmN0aW9uKCBvcHRpb25zLCBlbGVtZW50ICkge1xuXHRcdGVsZW1lbnQgPSAkKCBlbGVtZW50IHx8IHRoaXMuZGVmYXVsdEVsZW1lbnQgfHwgdGhpcyApWyAwIF07XG5cdFx0dGhpcy5lbGVtZW50ID0gJCggZWxlbWVudCApO1xuXHRcdHRoaXMudXVpZCA9IHdpZGdldFV1aWQrKztcblx0XHR0aGlzLmV2ZW50TmFtZXNwYWNlID0gXCIuXCIgKyB0aGlzLndpZGdldE5hbWUgKyB0aGlzLnV1aWQ7XG5cblx0XHR0aGlzLmJpbmRpbmdzID0gJCgpO1xuXHRcdHRoaXMuaG92ZXJhYmxlID0gJCgpO1xuXHRcdHRoaXMuZm9jdXNhYmxlID0gJCgpO1xuXHRcdHRoaXMuY2xhc3Nlc0VsZW1lbnRMb29rdXAgPSB7fTtcblxuXHRcdGlmICggZWxlbWVudCAhPT0gdGhpcyApIHtcblx0XHRcdCQuZGF0YSggZWxlbWVudCwgdGhpcy53aWRnZXRGdWxsTmFtZSwgdGhpcyApO1xuXHRcdFx0dGhpcy5fb24oIHRydWUsIHRoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRyZW1vdmU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0XHRpZiAoIGV2ZW50LnRhcmdldCA9PT0gZWxlbWVudCApIHtcblx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdFx0dGhpcy5kb2N1bWVudCA9ICQoIGVsZW1lbnQuc3R5bGUgP1xuXG5cdFx0XHRcdC8vIEVsZW1lbnQgd2l0aGluIHRoZSBkb2N1bWVudFxuXHRcdFx0XHRlbGVtZW50Lm93bmVyRG9jdW1lbnQgOlxuXG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgd2luZG93IG9yIGRvY3VtZW50XG5cdFx0XHRcdGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCApO1xuXHRcdFx0dGhpcy53aW5kb3cgPSAkKCB0aGlzLmRvY3VtZW50WyAwIF0uZGVmYXVsdFZpZXcgfHwgdGhpcy5kb2N1bWVudFsgMCBdLnBhcmVudFdpbmRvdyApO1xuXHRcdH1cblxuXHRcdHRoaXMub3B0aW9ucyA9ICQud2lkZ2V0LmV4dGVuZCgge30sXG5cdFx0XHR0aGlzLm9wdGlvbnMsXG5cdFx0XHR0aGlzLl9nZXRDcmVhdGVPcHRpb25zKCksXG5cdFx0XHRvcHRpb25zICk7XG5cblx0XHR0aGlzLl9jcmVhdGUoKTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmRpc2FibGVkICkge1xuXHRcdFx0dGhpcy5fc2V0T3B0aW9uRGlzYWJsZWQoIHRoaXMub3B0aW9ucy5kaXNhYmxlZCApO1xuXHRcdH1cblxuXHRcdHRoaXMuX3RyaWdnZXIoIFwiY3JlYXRlXCIsIG51bGwsIHRoaXMuX2dldENyZWF0ZUV2ZW50RGF0YSgpICk7XG5cdFx0dGhpcy5faW5pdCgpO1xuXHR9LFxuXG5cdF9nZXRDcmVhdGVPcHRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4ge307XG5cdH0sXG5cblx0X2dldENyZWF0ZUV2ZW50RGF0YTogJC5ub29wLFxuXG5cdF9jcmVhdGU6ICQubm9vcCxcblxuXHRfaW5pdDogJC5ub29wLFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuX2Rlc3Ryb3koKTtcblx0XHQkLmVhY2goIHRoaXMuY2xhc3Nlc0VsZW1lbnRMb29rdXAsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdFx0dGhhdC5fcmVtb3ZlQ2xhc3MoIHZhbHVlLCBrZXkgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBXZSBjYW4gcHJvYmFibHkgcmVtb3ZlIHRoZSB1bmJpbmQgY2FsbHMgaW4gMi4wXG5cdFx0Ly8gYWxsIGV2ZW50IGJpbmRpbmdzIHNob3VsZCBnbyB0aHJvdWdoIHRoaXMuX29uKClcblx0XHR0aGlzLmVsZW1lbnRcblx0XHRcdC5vZmYoIHRoaXMuZXZlbnROYW1lc3BhY2UgKVxuXHRcdFx0LnJlbW92ZURhdGEoIHRoaXMud2lkZ2V0RnVsbE5hbWUgKTtcblx0XHR0aGlzLndpZGdldCgpXG5cdFx0XHQub2ZmKCB0aGlzLmV2ZW50TmFtZXNwYWNlIClcblx0XHRcdC5yZW1vdmVBdHRyKCBcImFyaWEtZGlzYWJsZWRcIiApO1xuXG5cdFx0Ly8gQ2xlYW4gdXAgZXZlbnRzIGFuZCBzdGF0ZXNcblx0XHR0aGlzLmJpbmRpbmdzLm9mZiggdGhpcy5ldmVudE5hbWVzcGFjZSApO1xuXHR9LFxuXG5cdF9kZXN0cm95OiAkLm5vb3AsXG5cblx0d2lkZ2V0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50O1xuXHR9LFxuXG5cdG9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIG9wdGlvbnMgPSBrZXk7XG5cdFx0dmFyIHBhcnRzO1xuXHRcdHZhciBjdXJPcHRpb247XG5cdFx0dmFyIGk7XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKSB7XG5cblx0XHRcdC8vIERvbid0IHJldHVybiBhIHJlZmVyZW5jZSB0byB0aGUgaW50ZXJuYWwgaGFzaFxuXHRcdFx0cmV0dXJuICQud2lkZ2V0LmV4dGVuZCgge30sIHRoaXMub3B0aW9ucyApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gSGFuZGxlIG5lc3RlZCBrZXlzLCBlLmcuLCBcImZvby5iYXJcIiA9PiB7IGZvbzogeyBiYXI6IF9fXyB9IH1cblx0XHRcdG9wdGlvbnMgPSB7fTtcblx0XHRcdHBhcnRzID0ga2V5LnNwbGl0KCBcIi5cIiApO1xuXHRcdFx0a2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHRcdGlmICggcGFydHMubGVuZ3RoICkge1xuXHRcdFx0XHRjdXJPcHRpb24gPSBvcHRpb25zWyBrZXkgXSA9ICQud2lkZ2V0LmV4dGVuZCgge30sIHRoaXMub3B0aW9uc1sga2V5IF0gKTtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGggLSAxOyBpKysgKSB7XG5cdFx0XHRcdFx0Y3VyT3B0aW9uWyBwYXJ0c1sgaSBdIF0gPSBjdXJPcHRpb25bIHBhcnRzWyBpIF0gXSB8fCB7fTtcblx0XHRcdFx0XHRjdXJPcHRpb24gPSBjdXJPcHRpb25bIHBhcnRzWyBpIF0gXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrZXkgPSBwYXJ0cy5wb3AoKTtcblx0XHRcdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0XHRcdHJldHVybiBjdXJPcHRpb25bIGtleSBdID09PSB1bmRlZmluZWQgPyBudWxsIDogY3VyT3B0aW9uWyBrZXkgXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdXJPcHRpb25bIGtleSBdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMub3B0aW9uc1sga2V5IF0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiB0aGlzLm9wdGlvbnNbIGtleSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG9wdGlvbnNbIGtleSBdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fc2V0T3B0aW9ucyggb3B0aW9ucyApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0X3NldE9wdGlvbnM6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHRcdHZhciBrZXk7XG5cblx0XHRmb3IgKCBrZXkgaW4gb3B0aW9ucyApIHtcblx0XHRcdHRoaXMuX3NldE9wdGlvbigga2V5LCBvcHRpb25zWyBrZXkgXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdF9zZXRPcHRpb246IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdGlmICgga2V5ID09PSBcImNsYXNzZXNcIiApIHtcblx0XHRcdHRoaXMuX3NldE9wdGlvbkNsYXNzZXMoIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5vcHRpb25zWyBrZXkgXSA9IHZhbHVlO1xuXG5cdFx0aWYgKCBrZXkgPT09IFwiZGlzYWJsZWRcIiApIHtcblx0XHRcdHRoaXMuX3NldE9wdGlvbkRpc2FibGVkKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdF9zZXRPcHRpb25DbGFzc2VzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzS2V5LCBlbGVtZW50cywgY3VycmVudEVsZW1lbnRzO1xuXG5cdFx0Zm9yICggY2xhc3NLZXkgaW4gdmFsdWUgKSB7XG5cdFx0XHRjdXJyZW50RWxlbWVudHMgPSB0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwWyBjbGFzc0tleSBdO1xuXHRcdFx0aWYgKCB2YWx1ZVsgY2xhc3NLZXkgXSA9PT0gdGhpcy5vcHRpb25zLmNsYXNzZXNbIGNsYXNzS2V5IF0gfHxcblx0XHRcdFx0XHQhY3VycmVudEVsZW1lbnRzIHx8XG5cdFx0XHRcdFx0IWN1cnJlbnRFbGVtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZSBhcmUgZG9pbmcgdGhpcyB0byBjcmVhdGUgYSBuZXcgalF1ZXJ5IG9iamVjdCBiZWNhdXNlIHRoZSBfcmVtb3ZlQ2xhc3MoKSBjYWxsXG5cdFx0XHQvLyBvbiB0aGUgbmV4dCBsaW5lIGlzIGdvaW5nIHRvIGRlc3Ryb3kgdGhlIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBlbGVtZW50cyBiZWluZ1xuXHRcdFx0Ly8gdHJhY2tlZC4gV2UgbmVlZCB0byBzYXZlIGEgY29weSBvZiB0aGlzIGNvbGxlY3Rpb24gc28gdGhhdCB3ZSBjYW4gYWRkIHRoZSBuZXcgY2xhc3Nlc1xuXHRcdFx0Ly8gYmVsb3cuXG5cdFx0XHRlbGVtZW50cyA9ICQoIGN1cnJlbnRFbGVtZW50cy5nZXQoKSApO1xuXHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIGN1cnJlbnRFbGVtZW50cywgY2xhc3NLZXkgKTtcblxuXHRcdFx0Ly8gV2UgZG9uJ3QgdXNlIF9hZGRDbGFzcygpIGhlcmUsIGJlY2F1c2UgdGhhdCB1c2VzIHRoaXMub3B0aW9ucy5jbGFzc2VzXG5cdFx0XHQvLyBmb3IgZ2VuZXJhdGluZyB0aGUgc3RyaW5nIG9mIGNsYXNzZXMuIFdlIHdhbnQgdG8gdXNlIHRoZSB2YWx1ZSBwYXNzZWQgaW4gZnJvbVxuXHRcdFx0Ly8gX3NldE9wdGlvbigpLCB0aGlzIGlzIHRoZSBuZXcgdmFsdWUgb2YgdGhlIGNsYXNzZXMgb3B0aW9uIHdoaWNoIHdhcyBwYXNzZWQgdG9cblx0XHRcdC8vIF9zZXRPcHRpb24oKS4gV2UgcGFzcyB0aGlzIHZhbHVlIGRpcmVjdGx5IHRvIF9jbGFzc2VzKCkuXG5cdFx0XHRlbGVtZW50cy5hZGRDbGFzcyggdGhpcy5fY2xhc3Nlcygge1xuXHRcdFx0XHRlbGVtZW50OiBlbGVtZW50cyxcblx0XHRcdFx0a2V5czogY2xhc3NLZXksXG5cdFx0XHRcdGNsYXNzZXM6IHZhbHVlLFxuXHRcdFx0XHRhZGQ6IHRydWVcblx0XHRcdH0gKSApO1xuXHRcdH1cblx0fSxcblxuXHRfc2V0T3B0aW9uRGlzYWJsZWQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR0aGlzLl90b2dnbGVDbGFzcyggdGhpcy53aWRnZXQoKSwgdGhpcy53aWRnZXRGdWxsTmFtZSArIFwiLWRpc2FibGVkXCIsIG51bGwsICEhdmFsdWUgKTtcblxuXHRcdC8vIElmIHRoZSB3aWRnZXQgaXMgYmVjb21pbmcgZGlzYWJsZWQsIHRoZW4gbm90aGluZyBpcyBpbnRlcmFjdGl2ZVxuXHRcdGlmICggdmFsdWUgKSB7XG5cdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5ob3ZlcmFibGUsIG51bGwsIFwidWktc3RhdGUtaG92ZXJcIiApO1xuXHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMuZm9jdXNhYmxlLCBudWxsLCBcInVpLXN0YXRlLWZvY3VzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0ZW5hYmxlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fc2V0T3B0aW9ucyggeyBkaXNhYmxlZDogZmFsc2UgfSApO1xuXHR9LFxuXG5cdGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLl9zZXRPcHRpb25zKCB7IGRpc2FibGVkOiB0cnVlIH0gKTtcblx0fSxcblxuXHRfY2xhc3NlczogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdFx0dmFyIGZ1bGwgPSBbXTtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHRvcHRpb25zID0gJC5leHRlbmQoIHtcblx0XHRcdGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcblx0XHRcdGNsYXNzZXM6IHRoaXMub3B0aW9ucy5jbGFzc2VzIHx8IHt9XG5cdFx0fSwgb3B0aW9ucyApO1xuXG5cdFx0ZnVuY3Rpb24gcHJvY2Vzc0NsYXNzU3RyaW5nKCBjbGFzc2VzLCBjaGVja09wdGlvbiApIHtcblx0XHRcdHZhciBjdXJyZW50LCBpO1xuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRjdXJyZW50ID0gdGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cFsgY2xhc3Nlc1sgaSBdIF0gfHwgJCgpO1xuXHRcdFx0XHRpZiAoIG9wdGlvbnMuYWRkICkge1xuXHRcdFx0XHRcdGN1cnJlbnQgPSAkKCAkLnVuaXF1ZSggY3VycmVudC5nZXQoKS5jb25jYXQoIG9wdGlvbnMuZWxlbWVudC5nZXQoKSApICkgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdXJyZW50ID0gJCggY3VycmVudC5ub3QoIG9wdGlvbnMuZWxlbWVudCApLmdldCgpICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhhdC5jbGFzc2VzRWxlbWVudExvb2t1cFsgY2xhc3Nlc1sgaSBdIF0gPSBjdXJyZW50O1xuXHRcdFx0XHRmdWxsLnB1c2goIGNsYXNzZXNbIGkgXSApO1xuXHRcdFx0XHRpZiAoIGNoZWNrT3B0aW9uICYmIG9wdGlvbnMuY2xhc3Nlc1sgY2xhc3Nlc1sgaSBdIF0gKSB7XG5cdFx0XHRcdFx0ZnVsbC5wdXNoKCBvcHRpb25zLmNsYXNzZXNbIGNsYXNzZXNbIGkgXSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9vbiggb3B0aW9ucy5lbGVtZW50LCB7XG5cdFx0XHRcInJlbW92ZVwiOiBcIl91bnRyYWNrQ2xhc3Nlc0VsZW1lbnRcIlxuXHRcdH0gKTtcblxuXHRcdGlmICggb3B0aW9ucy5rZXlzICkge1xuXHRcdFx0cHJvY2Vzc0NsYXNzU3RyaW5nKCBvcHRpb25zLmtleXMubWF0Y2goIC9cXFMrL2cgKSB8fCBbXSwgdHJ1ZSApO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMuZXh0cmEgKSB7XG5cdFx0XHRwcm9jZXNzQ2xhc3NTdHJpbmcoIG9wdGlvbnMuZXh0cmEubWF0Y2goIC9cXFMrL2cgKSB8fCBbXSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmdWxsLmpvaW4oIFwiIFwiICk7XG5cdH0sXG5cblx0X3VudHJhY2tDbGFzc2VzRWxlbWVudDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHQkLmVhY2goIHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXAsIGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdFx0aWYgKCAkLmluQXJyYXkoIGV2ZW50LnRhcmdldCwgdmFsdWUgKSAhPT0gLTEgKSB7XG5cdFx0XHRcdHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXBbIGtleSBdID0gJCggdmFsdWUubm90KCBldmVudC50YXJnZXQgKS5nZXQoKSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKCBlbGVtZW50LCBrZXlzLCBleHRyYSApIHtcblx0XHRyZXR1cm4gdGhpcy5fdG9nZ2xlQ2xhc3MoIGVsZW1lbnQsIGtleXMsIGV4dHJhLCBmYWxzZSApO1xuXHR9LFxuXG5cdF9hZGRDbGFzczogZnVuY3Rpb24oIGVsZW1lbnQsIGtleXMsIGV4dHJhICkge1xuXHRcdHJldHVybiB0aGlzLl90b2dnbGVDbGFzcyggZWxlbWVudCwga2V5cywgZXh0cmEsIHRydWUgKTtcblx0fSxcblxuXHRfdG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKCBlbGVtZW50LCBrZXlzLCBleHRyYSwgYWRkICkge1xuXHRcdGFkZCA9ICggdHlwZW9mIGFkZCA9PT0gXCJib29sZWFuXCIgKSA/IGFkZCA6IGV4dHJhO1xuXHRcdHZhciBzaGlmdCA9ICggdHlwZW9mIGVsZW1lbnQgPT09IFwic3RyaW5nXCIgfHwgZWxlbWVudCA9PT0gbnVsbCApLFxuXHRcdFx0b3B0aW9ucyA9IHtcblx0XHRcdFx0ZXh0cmE6IHNoaWZ0ID8ga2V5cyA6IGV4dHJhLFxuXHRcdFx0XHRrZXlzOiBzaGlmdCA/IGVsZW1lbnQgOiBrZXlzLFxuXHRcdFx0XHRlbGVtZW50OiBzaGlmdCA/IHRoaXMuZWxlbWVudCA6IGVsZW1lbnQsXG5cdFx0XHRcdGFkZDogYWRkXG5cdFx0XHR9O1xuXHRcdG9wdGlvbnMuZWxlbWVudC50b2dnbGVDbGFzcyggdGhpcy5fY2xhc3Nlcyggb3B0aW9ucyApLCBhZGQgKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRfb246IGZ1bmN0aW9uKCBzdXBwcmVzc0Rpc2FibGVkQ2hlY2ssIGVsZW1lbnQsIGhhbmRsZXJzICkge1xuXHRcdHZhciBkZWxlZ2F0ZUVsZW1lbnQ7XG5cdFx0dmFyIGluc3RhbmNlID0gdGhpcztcblxuXHRcdC8vIE5vIHN1cHByZXNzRGlzYWJsZWRDaGVjayBmbGFnLCBzaHVmZmxlIGFyZ3VtZW50c1xuXHRcdGlmICggdHlwZW9mIHN1cHByZXNzRGlzYWJsZWRDaGVjayAhPT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRoYW5kbGVycyA9IGVsZW1lbnQ7XG5cdFx0XHRlbGVtZW50ID0gc3VwcHJlc3NEaXNhYmxlZENoZWNrO1xuXHRcdFx0c3VwcHJlc3NEaXNhYmxlZENoZWNrID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gZWxlbWVudCBhcmd1bWVudCwgc2h1ZmZsZSBhbmQgdXNlIHRoaXMuZWxlbWVudFxuXHRcdGlmICggIWhhbmRsZXJzICkge1xuXHRcdFx0aGFuZGxlcnMgPSBlbGVtZW50O1xuXHRcdFx0ZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblx0XHRcdGRlbGVnYXRlRWxlbWVudCA9IHRoaXMud2lkZ2V0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQgPSBkZWxlZ2F0ZUVsZW1lbnQgPSAkKCBlbGVtZW50ICk7XG5cdFx0XHR0aGlzLmJpbmRpbmdzID0gdGhpcy5iaW5kaW5ncy5hZGQoIGVsZW1lbnQgKTtcblx0XHR9XG5cblx0XHQkLmVhY2goIGhhbmRsZXJzLCBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXIgKSB7XG5cdFx0XHRmdW5jdGlvbiBoYW5kbGVyUHJveHkoKSB7XG5cblx0XHRcdFx0Ly8gQWxsb3cgd2lkZ2V0cyB0byBjdXN0b21pemUgdGhlIGRpc2FibGVkIGhhbmRsaW5nXG5cdFx0XHRcdC8vIC0gZGlzYWJsZWQgYXMgYW4gYXJyYXkgaW5zdGVhZCBvZiBib29sZWFuXG5cdFx0XHRcdC8vIC0gZGlzYWJsZWQgY2xhc3MgYXMgbWV0aG9kIGZvciBkaXNhYmxpbmcgaW5kaXZpZHVhbCBwYXJ0c1xuXHRcdFx0XHRpZiAoICFzdXBwcmVzc0Rpc2FibGVkQ2hlY2sgJiZcblx0XHRcdFx0XHRcdCggaW5zdGFuY2Uub3B0aW9ucy5kaXNhYmxlZCA9PT0gdHJ1ZSB8fFxuXHRcdFx0XHRcdFx0JCggdGhpcyApLmhhc0NsYXNzKCBcInVpLXN0YXRlLWRpc2FibGVkXCIgKSApICkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gKCB0eXBlb2YgaGFuZGxlciA9PT0gXCJzdHJpbmdcIiA/IGluc3RhbmNlWyBoYW5kbGVyIF0gOiBoYW5kbGVyIClcblx0XHRcdFx0XHQuYXBwbHkoIGluc3RhbmNlLCBhcmd1bWVudHMgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29weSB0aGUgZ3VpZCBzbyBkaXJlY3QgdW5iaW5kaW5nIHdvcmtzXG5cdFx0XHRpZiAoIHR5cGVvZiBoYW5kbGVyICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRoYW5kbGVyUHJveHkuZ3VpZCA9IGhhbmRsZXIuZ3VpZCA9XG5cdFx0XHRcdFx0aGFuZGxlci5ndWlkIHx8IGhhbmRsZXJQcm94eS5ndWlkIHx8ICQuZ3VpZCsrO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgbWF0Y2ggPSBldmVudC5tYXRjaCggL14oW1xcdzotXSopXFxzKiguKikkLyApO1xuXHRcdFx0dmFyIGV2ZW50TmFtZSA9IG1hdGNoWyAxIF0gKyBpbnN0YW5jZS5ldmVudE5hbWVzcGFjZTtcblx0XHRcdHZhciBzZWxlY3RvciA9IG1hdGNoWyAyIF07XG5cblx0XHRcdGlmICggc2VsZWN0b3IgKSB7XG5cdFx0XHRcdGRlbGVnYXRlRWxlbWVudC5vbiggZXZlbnROYW1lLCBzZWxlY3RvciwgaGFuZGxlclByb3h5ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50Lm9uKCBldmVudE5hbWUsIGhhbmRsZXJQcm94eSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRfb2ZmOiBmdW5jdGlvbiggZWxlbWVudCwgZXZlbnROYW1lICkge1xuXHRcdGV2ZW50TmFtZSA9ICggZXZlbnROYW1lIHx8IFwiXCIgKS5zcGxpdCggXCIgXCIgKS5qb2luKCB0aGlzLmV2ZW50TmFtZXNwYWNlICsgXCIgXCIgKSArXG5cdFx0XHR0aGlzLmV2ZW50TmFtZXNwYWNlO1xuXHRcdGVsZW1lbnQub2ZmKCBldmVudE5hbWUgKS5vZmYoIGV2ZW50TmFtZSApO1xuXG5cdFx0Ly8gQ2xlYXIgdGhlIHN0YWNrIHRvIGF2b2lkIG1lbW9yeSBsZWFrcyAoIzEwMDU2KVxuXHRcdHRoaXMuYmluZGluZ3MgPSAkKCB0aGlzLmJpbmRpbmdzLm5vdCggZWxlbWVudCApLmdldCgpICk7XG5cdFx0dGhpcy5mb2N1c2FibGUgPSAkKCB0aGlzLmZvY3VzYWJsZS5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuXHRcdHRoaXMuaG92ZXJhYmxlID0gJCggdGhpcy5ob3ZlcmFibGUubm90KCBlbGVtZW50ICkuZ2V0KCkgKTtcblx0fSxcblxuXHRfZGVsYXk6IGZ1bmN0aW9uKCBoYW5kbGVyLCBkZWxheSApIHtcblx0XHRmdW5jdGlvbiBoYW5kbGVyUHJveHkoKSB7XG5cdFx0XHRyZXR1cm4gKCB0eXBlb2YgaGFuZGxlciA9PT0gXCJzdHJpbmdcIiA/IGluc3RhbmNlWyBoYW5kbGVyIF0gOiBoYW5kbGVyIClcblx0XHRcdFx0LmFwcGx5KCBpbnN0YW5jZSwgYXJndW1lbnRzICk7XG5cdFx0fVxuXHRcdHZhciBpbnN0YW5jZSA9IHRoaXM7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQoIGhhbmRsZXJQcm94eSwgZGVsYXkgfHwgMCApO1xuXHR9LFxuXG5cdF9ob3ZlcmFibGU6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHRoaXMuaG92ZXJhYmxlID0gdGhpcy5ob3ZlcmFibGUuYWRkKCBlbGVtZW50ICk7XG5cdFx0dGhpcy5fb24oIGVsZW1lbnQsIHtcblx0XHRcdG1vdXNlZW50ZXI6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1ob3ZlclwiICk7XG5cdFx0XHR9LFxuXHRcdFx0bW91c2VsZWF2ZTogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0X2ZvY3VzYWJsZTogZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0dGhpcy5mb2N1c2FibGUgPSB0aGlzLmZvY3VzYWJsZS5hZGQoIGVsZW1lbnQgKTtcblx0XHR0aGlzLl9vbiggZWxlbWVudCwge1xuXHRcdFx0Zm9jdXNpbjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWZvY3VzXCIgKTtcblx0XHRcdH0sXG5cdFx0XHRmb2N1c291dDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggJCggZXZlbnQuY3VycmVudFRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWZvY3VzXCIgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0X3RyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBldmVudCwgZGF0YSApIHtcblx0XHR2YXIgcHJvcCwgb3JpZztcblx0XHR2YXIgY2FsbGJhY2sgPSB0aGlzLm9wdGlvbnNbIHR5cGUgXTtcblxuXHRcdGRhdGEgPSBkYXRhIHx8IHt9O1xuXHRcdGV2ZW50ID0gJC5FdmVudCggZXZlbnQgKTtcblx0XHRldmVudC50eXBlID0gKCB0eXBlID09PSB0aGlzLndpZGdldEV2ZW50UHJlZml4ID9cblx0XHRcdHR5cGUgOlxuXHRcdFx0dGhpcy53aWRnZXRFdmVudFByZWZpeCArIHR5cGUgKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0Ly8gVGhlIG9yaWdpbmFsIGV2ZW50IG1heSBjb21lIGZyb20gYW55IGVsZW1lbnRcblx0XHQvLyBzbyB3ZSBuZWVkIHRvIHJlc2V0IHRoZSB0YXJnZXQgb24gdGhlIG5ldyBldmVudFxuXHRcdGV2ZW50LnRhcmdldCA9IHRoaXMuZWxlbWVudFsgMCBdO1xuXG5cdFx0Ly8gQ29weSBvcmlnaW5hbCBldmVudCBwcm9wZXJ0aWVzIG92ZXIgdG8gdGhlIG5ldyBldmVudFxuXHRcdG9yaWcgPSBldmVudC5vcmlnaW5hbEV2ZW50O1xuXHRcdGlmICggb3JpZyApIHtcblx0XHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdFx0aWYgKCAhKCBwcm9wIGluIGV2ZW50ICkgKSB7XG5cdFx0XHRcdFx0ZXZlbnRbIHByb3AgXSA9IG9yaWdbIHByb3AgXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuZWxlbWVudC50cmlnZ2VyKCBldmVudCwgZGF0YSApO1xuXHRcdHJldHVybiAhKCAkLmlzRnVuY3Rpb24oIGNhbGxiYWNrICkgJiZcblx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLmVsZW1lbnRbIDAgXSwgWyBldmVudCBdLmNvbmNhdCggZGF0YSApICkgPT09IGZhbHNlIHx8XG5cdFx0XHRldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApO1xuXHR9XG59O1xuXG4kLmVhY2goIHsgc2hvdzogXCJmYWRlSW5cIiwgaGlkZTogXCJmYWRlT3V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgZGVmYXVsdEVmZmVjdCApIHtcblx0JC5XaWRnZXQucHJvdG90eXBlWyBcIl9cIiArIG1ldGhvZCBdID0gZnVuY3Rpb24oIGVsZW1lbnQsIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggdHlwZW9mIG9wdGlvbnMgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRvcHRpb25zID0geyBlZmZlY3Q6IG9wdGlvbnMgfTtcblx0XHR9XG5cblx0XHR2YXIgaGFzT3B0aW9ucztcblx0XHR2YXIgZWZmZWN0TmFtZSA9ICFvcHRpb25zID9cblx0XHRcdG1ldGhvZCA6XG5cdFx0XHRvcHRpb25zID09PSB0cnVlIHx8IHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiID9cblx0XHRcdFx0ZGVmYXVsdEVmZmVjdCA6XG5cdFx0XHRcdG9wdGlvbnMuZWZmZWN0IHx8IGRlZmF1bHRFZmZlY3Q7XG5cblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHRpZiAoIHR5cGVvZiBvcHRpb25zID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHsgZHVyYXRpb246IG9wdGlvbnMgfTtcblx0XHR9XG5cblx0XHRoYXNPcHRpb25zID0gISQuaXNFbXB0eU9iamVjdCggb3B0aW9ucyApO1xuXHRcdG9wdGlvbnMuY29tcGxldGUgPSBjYWxsYmFjaztcblxuXHRcdGlmICggb3B0aW9ucy5kZWxheSApIHtcblx0XHRcdGVsZW1lbnQuZGVsYXkoIG9wdGlvbnMuZGVsYXkgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhhc09wdGlvbnMgJiYgJC5lZmZlY3RzICYmICQuZWZmZWN0cy5lZmZlY3RbIGVmZmVjdE5hbWUgXSApIHtcblx0XHRcdGVsZW1lbnRbIG1ldGhvZCBdKCBvcHRpb25zICk7XG5cdFx0fSBlbHNlIGlmICggZWZmZWN0TmFtZSAhPT0gbWV0aG9kICYmIGVsZW1lbnRbIGVmZmVjdE5hbWUgXSApIHtcblx0XHRcdGVsZW1lbnRbIGVmZmVjdE5hbWUgXSggb3B0aW9ucy5kdXJhdGlvbiwgb3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucXVldWUoIGZ1bmN0aW9uKCBuZXh0ICkge1xuXHRcdFx0XHQkKCB0aGlzIClbIG1ldGhvZCBdKCk7XG5cdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbCggZWxlbWVudFsgMCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV4dCgpO1xuXHRcdFx0fSApO1xuXHRcdH1cblx0fTtcbn0gKTtcblxucmV0dXJuICQud2lkZ2V0O1xuXG59ICkgKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9qcXVlcnktdWkvdWkvd2lkZ2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9