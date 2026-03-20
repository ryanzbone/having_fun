(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/exists/index.js
  var require_exists = __commonJS({
    "node_modules/exists/index.js"(exports, module) {
      module.exports = exists;
      module.exports.allExist = allExist;
      function exists(v) {
        return v !== null && v !== void 0;
      }
      function allExist() {
        var vals = Array.prototype.slice.call(arguments);
        return vals.every(exists);
      }
    }
  });

  // node_modules/simple-window-manager/src/html.js
  var require_html = __commonJS({
    "node_modules/simple-window-manager/src/html.js"(exports, module) {
      module.exports = function(options) {
        options = options || {};
        const object = document.createElement(options.type || "div");
        if (options.parent) {
          options.parent.appendChild(object);
        }
        if (options.styles) {
          for (let style in options.styles) {
            object.style[style] = options.styles[style];
          }
        }
        if (options.html) {
          object.innerHTML = options.html;
        }
        return object;
      };
    }
  });

  // node_modules/eventemitter3/index.js
  var require_eventemitter3 = __commonJS({
    "node_modules/eventemitter3/index.js"(exports, module) {
      "use strict";
      var has = Object.prototype.hasOwnProperty;
      var prefix = "~";
      function Events() {
      }
      if (Object.create) {
        Events.prototype = /* @__PURE__ */ Object.create(null);
        if (!new Events().__proto__) prefix = false;
      }
      function EE(fn, context, once) {
        this.fn = fn;
        this.context = context;
        this.once = once || false;
      }
      function addListener(emitter, event, fn, context, once) {
        if (typeof fn !== "function") {
          throw new TypeError("The listener must be a function");
        }
        var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
        if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
        else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
        else emitter._events[evt] = [emitter._events[evt], listener];
        return emitter;
      }
      function clearEvent(emitter, evt) {
        if (--emitter._eventsCount === 0) emitter._events = new Events();
        else delete emitter._events[evt];
      }
      function EventEmitter() {
        this._events = new Events();
        this._eventsCount = 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        var names = [], events, name;
        if (this._eventsCount === 0) return names;
        for (name in events = this._events) {
          if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
        }
        if (Object.getOwnPropertySymbols) {
          return names.concat(Object.getOwnPropertySymbols(events));
        }
        return names;
      };
      EventEmitter.prototype.listeners = function listeners(event) {
        var evt = prefix ? prefix + event : event, handlers = this._events[evt];
        if (!handlers) return [];
        if (handlers.fn) return [handlers.fn];
        for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
          ee[i] = handlers[i].fn;
        }
        return ee;
      };
      EventEmitter.prototype.listenerCount = function listenerCount(event) {
        var evt = prefix ? prefix + event : event, listeners = this._events[evt];
        if (!listeners) return 0;
        if (listeners.fn) return 1;
        return listeners.length;
      };
      EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return false;
        var listeners = this._events[evt], len = arguments.length, args, i;
        if (listeners.fn) {
          if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
          switch (len) {
            case 1:
              return listeners.fn.call(listeners.context), true;
            case 2:
              return listeners.fn.call(listeners.context, a1), true;
            case 3:
              return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
              return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
              return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
          }
          for (i = 1, args = new Array(len - 1); i < len; i++) {
            args[i - 1] = arguments[i];
          }
          listeners.fn.apply(listeners.context, args);
        } else {
          var length = listeners.length, j;
          for (i = 0; i < length; i++) {
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
            switch (len) {
              case 1:
                listeners[i].fn.call(listeners[i].context);
                break;
              case 2:
                listeners[i].fn.call(listeners[i].context, a1);
                break;
              case 3:
                listeners[i].fn.call(listeners[i].context, a1, a2);
                break;
              case 4:
                listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                break;
              default:
                if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
                listeners[i].fn.apply(listeners[i].context, args);
            }
          }
        }
        return true;
      };
      EventEmitter.prototype.on = function on(event, fn, context) {
        return addListener(this, event, fn, context, false);
      };
      EventEmitter.prototype.once = function once(event, fn, context) {
        return addListener(this, event, fn, context, true);
      };
      EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events[evt]) return this;
        if (!fn) {
          clearEvent(this, evt);
          return this;
        }
        var listeners = this._events[evt];
        if (listeners.fn) {
          if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
            clearEvent(this, evt);
          }
        } else {
          for (var i = 0, events = [], length = listeners.length; i < length; i++) {
            if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
              events.push(listeners[i]);
            }
          }
          if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
          else clearEvent(this, evt);
        }
        return this;
      };
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
        var evt;
        if (event) {
          evt = prefix ? prefix + event : event;
          if (this._events[evt]) clearEvent(this, evt);
        } else {
          this._events = new Events();
          this._eventsCount = 0;
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.addListener = EventEmitter.prototype.on;
      EventEmitter.prefixed = prefix;
      EventEmitter.EventEmitter = EventEmitter;
      if ("undefined" !== typeof module) {
        module.exports = EventEmitter;
      }
    }
  });

  // node_modules/clicked/clicked.js
  var require_clicked = __commonJS({
    "node_modules/clicked/clicked.js"(exports, module) {
      function clicked(element, callback, options) {
        function touchstart(e) {
          if (disabled) {
            return;
          }
          if (e.touches.length === 1) {
            lastX = e.changedTouches[0].screenX;
            lastY = e.changedTouches[0].screenY;
            down = true;
          }
        }
        function pastThreshhold(x, y) {
          return Math.abs(lastX - x) > threshhold || Math.abs(lastY - y) > threshhold;
        }
        function touchmove(e) {
          if (!down || e.touches.length !== 1) {
            touchcancel();
            return;
          }
          var x = e.changedTouches[0].screenX;
          var y = e.changedTouches[0].screenY;
          if (pastThreshhold(x, y)) {
            touchcancel();
          }
        }
        function touchcancel() {
          down = false;
        }
        function touchend(e) {
          if (down) {
            e.preventDefault();
            callback(e, options.args);
          }
        }
        function mouseclick(e) {
          if (!disabled) {
            callback(e, options.args);
          }
        }
        options = options || {};
        var down, lastX, lastY, disabled;
        var threshhold = options.thresshold || 10;
        element.addEventListener("click", mouseclick);
        element.addEventListener("touchstart", touchstart, { passive: true });
        element.addEventListener("touchmove", touchmove, { passive: true });
        element.addEventListener("touchcancel", touchcancel);
        element.addEventListener("touchend", touchend);
        return {
          disable: function() {
            disabled = true;
          },
          enable: function() {
            disabled = false;
          }
        };
      }
      module.exports = clicked;
    }
  });

  // node_modules/penner/penner.js
  var require_penner = __commonJS({
    "node_modules/penner/penner.js"(exports, module) {
      (function() {
        var penner, umd;
        umd = function(factory) {
          if (typeof exports === "object") {
            return module.exports = factory;
          } else if (typeof define === "function" && define.amd) {
            return define([], factory);
          } else {
            return this.penner = factory;
          }
        };
        penner = {
          linear: function(t, b, c, d) {
            return c * t / d + b;
          },
          easeInQuad: function(t, b, c, d) {
            return c * (t /= d) * t + b;
          },
          easeOutQuad: function(t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
          },
          easeInOutQuad: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t + b;
            } else {
              return -c / 2 * (--t * (t - 2) - 1) + b;
            }
          },
          easeInCubic: function(t, b, c, d) {
            return c * (t /= d) * t * t + b;
          },
          easeOutCubic: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          },
          easeInOutCubic: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t * t + b;
            } else {
              return c / 2 * ((t -= 2) * t * t + 2) + b;
            }
          },
          easeInQuart: function(t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
          },
          easeOutQuart: function(t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          },
          easeInOutQuart: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t * t * t + b;
            } else {
              return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
            }
          },
          easeInQuint: function(t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
          },
          easeOutQuint: function(t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          },
          easeInOutQuint: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return c / 2 * t * t * t * t * t + b;
            } else {
              return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
            }
          },
          easeInSine: function(t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
          },
          easeOutSine: function(t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
          },
          easeInOutSine: function(t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
          },
          easeInExpo: function(t, b, c, d) {
            if (t === 0) {
              return b;
            } else {
              return c * Math.pow(2, 10 * (t / d - 1)) + b;
            }
          },
          easeOutExpo: function(t, b, c, d) {
            if (t === d) {
              return b + c;
            } else {
              return c * (-Math.pow(2, -10 * t / d) + 1) + b;
            }
          },
          easeInOutExpo: function(t, b, c, d) {
            if (t === 0) {
              b;
            }
            if (t === d) {
              b + c;
            }
            if ((t /= d / 2) < 1) {
              return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            } else {
              return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
          },
          easeInCirc: function(t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
          },
          easeOutCirc: function(t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
          },
          easeInOutCirc: function(t, b, c, d) {
            if ((t /= d / 2) < 1) {
              return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            } else {
              return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
            }
          },
          easeInElastic: function(t, b, c, d) {
            var a, p, s;
            s = 1.70158;
            p = 0;
            a = c;
            if (t === 0) {
              b;
            } else if ((t /= d) === 1) {
              b + c;
            }
            if (!p) {
              p = d * 0.3;
            }
            if (a < Math.abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
          },
          easeOutElastic: function(t, b, c, d) {
            var a, p, s;
            s = 1.70158;
            p = 0;
            a = c;
            if (t === 0) {
              b;
            } else if ((t /= d) === 1) {
              b + c;
            }
            if (!p) {
              p = d * 0.3;
            }
            if (a < Math.abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
          },
          easeInOutElastic: function(t, b, c, d) {
            var a, p, s;
            s = 1.70158;
            p = 0;
            a = c;
            if (t === 0) {
              b;
            } else if ((t /= d / 2) === 2) {
              b + c;
            }
            if (!p) {
              p = d * (0.3 * 1.5);
            }
            if (a < Math.abs(c)) {
              a = c;
              s = p / 4;
            } else {
              s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) {
              return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            } else {
              return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
            }
          },
          easeInBack: function(t, b, c, d, s) {
            if (s === void 0) {
              s = 1.70158;
            }
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          },
          easeOutBack: function(t, b, c, d, s) {
            if (s === void 0) {
              s = 1.70158;
            }
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          },
          easeInOutBack: function(t, b, c, d, s) {
            if (s === void 0) {
              s = 1.70158;
            }
            if ((t /= d / 2) < 1) {
              return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            } else {
              return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
            }
          },
          easeInBounce: function(t, b, c, d) {
            var v;
            v = penner.easeOutBounce(d - t, 0, c, d);
            return c - v + b;
          },
          easeOutBounce: function(t, b, c, d) {
            if ((t /= d) < 1 / 2.75) {
              return c * (7.5625 * t * t) + b;
            } else if (t < 2 / 2.75) {
              return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
            } else if (t < 2.5 / 2.75) {
              return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
            } else {
              return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
            }
          },
          easeInOutBounce: function(t, b, c, d) {
            var v;
            if (t < d / 2) {
              v = penner.easeInBounce(t * 2, 0, c, d);
              return v * 0.5 + b;
            } else {
              v = penner.easeOutBounce(t * 2 - d, 0, c, d);
              return v * 0.5 + c * 0.5 + b;
            }
          }
        };
        umd(penner);
      }).call(exports);
    }
  });

  // node_modules/dom-ease/dist/ease.js
  var require_ease = __commonJS({
    "node_modules/dom-ease/dist/ease.js"(exports, module) {
      "use strict";
      var _createClass = /* @__PURE__ */ (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var EventEmitter = require_eventemitter3();
      var exists = require_exists();
      var Ease = (function(_EventEmitter) {
        _inherits(Ease2, _EventEmitter);
        function Ease2(element, params, options) {
          _classCallCheck(this, Ease2);
          var _this = _possibleConstructorReturn(this, (Ease2.__proto__ || Object.getPrototypeOf(Ease2)).call(this));
          _this.element = element;
          _this.list = [];
          _this.time = 0;
          _this.duration = options.duration;
          _this.ease = options.ease;
          _this.repeat = options.repeat;
          _this.reverse = options.reverse;
          _this.wait = options.wait || 0;
          for (var entry in params) {
            switch (entry) {
              case "left":
                _this.numberStart(entry, element.offsetLeft, params[entry], "px");
                break;
              case "top":
                _this.numberStart(entry, element.offsetTop, params[entry], "px");
                break;
              case "color":
                _this.colorStart("color", element.style.color, params[entry]);
                break;
              case "backgroundColor":
                _this.colorStart("backgroundColor", element.style.backgroundColor, params[entry]);
                break;
              case "scale":
                _this.transformStart(entry, params[entry]);
                break;
              case "scaleX":
                _this.transformStart(entry, params[entry]);
                break;
              case "scaleY":
                _this.transformStart(entry, params[entry]);
                break;
              case "opacity":
                _this.numberStart(entry, exists(element.style.opacity) ? parseFloat(element.style.opacity) : 1, params[entry]);
                break;
              case "width":
                _this.numberStart(entry, element.offsetWidth, params[entry], "px");
                break;
              case "height":
                _this.numberStart(entry, element.offsetHeight, params[entry], "px");
                break;
              default:
                console.warn(entry + " not setup for animation in dom-ease.");
            }
          }
          return _this;
        }
        _createClass(Ease2, [{
          key: "numberStart",
          value: function numberStart(entry, start, to, units) {
            var ease = { type: "number", entry, to, start, delta: to - start, units: units || "" };
            this.list.push(ease);
          }
        }, {
          key: "numberUpdate",
          value: function numberUpdate(ease, percent) {
            this.element.style[ease.entry] = ease.start + ease.delta * percent + ease.units;
          }
          /**
           * reverse number and transform
           * @private
           * @param {object} ease
           */
        }, {
          key: "easeReverse",
          value: function easeReverse(ease) {
            var swap = ease.to;
            ease.to = ease.start;
            ease.start = swap;
            ease.delta = -ease.delta;
          }
        }, {
          key: "transformStart",
          value: function transformStart(entry, to) {
            var ease = { type: "transform", entry, to };
            if (!this.transforms) {
              this.readTransform();
            }
            var transforms = this.transforms;
            var found = void 0;
            for (var i = 0, _i = transforms.length; i < _i; i++) {
              var transform = transforms[i];
              if (transform.name === entry) {
                switch (entry) {
                  case "scale":
                  case "scaleX":
                  case "scaleY":
                    ease.start = parseFloat(transform.values);
                    break;
                }
                found = true;
                break;
              }
            }
            if (!found) {
              switch (entry) {
                case "scale":
                case "scaleX":
                case "scaleY":
                  ease.start = 1;
              }
            }
            ease.delta = to - ease.start;
            this.list.push(ease);
          }
        }, {
          key: "transformUpdate",
          value: function transformUpdate(ease, percent) {
            if (!this.changedTransform) {
              this.readTransform();
              this.changedTransform = true;
            }
            var name = ease.entry;
            var transforms = this.transforms;
            var values = ease.start + ease.delta * percent;
            for (var i = 0, _i = transforms.length; i < _i; i++) {
              if (transforms[i].name === name) {
                transforms[i].values = values;
                return;
              }
            }
            this.transforms.push({ name, values });
          }
        }, {
          key: "colorUpdate",
          value: function colorUpdate(ease) {
            var elementStyle = this.element.style;
            var style = ease.style;
            var colors = ease.colors;
            var i = Math.floor(this.time / ease.interval);
            var color = colors[i];
            if (elementStyle[style] !== color) {
              elementStyle[style] = colors[i];
            }
          }
        }, {
          key: "colorReverse",
          value: function colorReverse(ease) {
            var reverse = [];
            var colors = ease.colors;
            for (var color in colors) {
              reverse.unshift(colors[color]);
            }
            reverse.push(reverse.shift());
            ease.colors = reverse;
          }
        }, {
          key: "colorStart",
          value: function colorStart(style, original, colors) {
            var ease = { type: "color", style };
            if (Array.isArray(colors)) {
              ease.colors = colors;
            } else {
              ease.colors = [colors];
            }
            colors.push(original);
            ease.interval = this.duration / colors.length;
            this.list.push(ease);
          }
        }, {
          key: "update",
          value: function update(elapsed) {
            if (this.wait) {
              this.wait -= elapsed;
              if (this.wait < 0) {
                elapsed = -this.wait;
                this.wait = 0;
              } else {
                return;
              }
            }
            this.changedTransform = false;
            var list = this.list;
            var leftover = null;
            this.time += elapsed;
            if (this.time >= this.duration) {
              leftover = this.time - this.duration;
              this.time -= leftover;
            }
            var percent = this.ease(this.time, 0, 1, this.duration);
            for (var i = 0, _i = list.length; i < _i; i++) {
              var ease = list[i];
              switch (ease.type) {
                case "number":
                  this.numberUpdate(ease, percent);
                  break;
                case "color":
                  this.colorUpdate(ease);
                  break;
                case "transform":
                  this.transformUpdate(ease, percent);
                  break;
              }
            }
            if (this.changedTransform) {
              this.writeTransform();
            }
            this.emit("each", this);
            if (leftover !== null) {
              if (this.reverse) {
                this.reverseEases();
                this.time = leftover;
                this.emit("loop", this);
                if (!this.repeat) {
                  this.reverse = false;
                } else if (this.repeat !== true) {
                  this.repeat--;
                }
              } else if (this.repeat) {
                this.emit("loop", this);
                this.time = leftover;
                if (this.repeat !== true) {
                  this.repeat--;
                }
              } else {
                this.emit("complete", this);
                return true;
              }
            }
          }
        }, {
          key: "reverseEases",
          value: function reverseEases() {
            var list = this.list;
            for (var i = 0, _i = list.length; i < _i; i++) {
              var ease = list[i];
              if (ease.type === "color") {
                this.colorReverse(ease);
              } else {
                this.easeReverse(ease);
              }
            }
          }
        }, {
          key: "readTransform",
          value: function readTransform() {
            this.transforms = [];
            var transform = this.element.style.transform;
            var inside = void 0, name = "", values = void 0;
            for (var i = 0, _i = transform.length; i < _i; i++) {
              var letter = transform[i];
              if (inside) {
                if (letter === ")") {
                  inside = false;
                  this.transforms.push({ name, values });
                  name = "";
                } else {
                  values += letter;
                }
              } else {
                if (letter === "(") {
                  values = "";
                  inside = true;
                } else if (letter !== " ") {
                  name += letter;
                }
              }
            }
          }
        }, {
          key: "writeTransform",
          value: function writeTransform() {
            var transforms = this.transforms;
            var s = "";
            for (var i = 0, _i = transforms.length; i < _i; i++) {
              var transform = transforms[i];
              s += transform.name + "(" + transform.values + ")";
            }
            this.element.style.transform = s;
          }
        }]);
        return Ease2;
      })(EventEmitter);
      module.exports = Ease;
    }
  });

  // node_modules/dom-ease/dist/domEase.js
  var require_domEase = __commonJS({
    "node_modules/dom-ease/dist/domEase.js"(exports, module) {
      "use strict";
      var _createClass = /* @__PURE__ */ (function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      })();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var EventEmitter = require_eventemitter3();
      var Penner = require_penner();
      var exists = require_exists();
      var Ease = require_ease();
      var DomEase = (function(_EventEmitter) {
        _inherits(DomEase2, _EventEmitter);
        function DomEase2(options) {
          _classCallCheck(this, DomEase2);
          var _this = _possibleConstructorReturn(this, (DomEase2.__proto__ || Object.getPrototypeOf(DomEase2)).call(this));
          _this.options = options || {};
          _this.options.duration = _this.options.duration || 1e3;
          _this.options.ease = _this.options.ease || Penner.linear;
          _this.list = [];
          _this.empty = true;
          if (!_this.options.autostart) {
            _this.start();
          }
          if (_this.options.pauseOnBlur) {
            window.addEventListener("blur", function() {
              return _this.blur();
            });
            window.addEventListener("focus", function() {
              return _this.focus();
            });
          }
          return _this;
        }
        _createClass(DomEase2, [{
          key: "start",
          value: function start() {
            if (!this._requested) {
              this._requested = true;
              this.loop();
              this.running = true;
            }
          }
        }, {
          key: "blur",
          value: function blur() {
            if (this.running) {
              this.stop();
              this.running = true;
            }
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.running) {
              this.start();
            }
          }
        }, {
          key: "loop",
          value: function loop(time) {
            var _this2 = this;
            if (time) {
              var elapsed = this._last ? time - this._last : 0;
              this.update(elapsed);
            }
            this._last = time;
            this._requestId = window.requestAnimationFrame(function(time2) {
              return _this2.loop(time2);
            });
          }
          /**
           * stop animation loop
           */
        }, {
          key: "stop",
          value: function stop() {
            if (this._requested) {
              window.cancelAnimationFrame(this._requestId);
              this._requested = false;
              this.running = false;
            }
          }
          /**
           * add eases
           * @param {HTMLElement} element
           * @param {object} params
           * @param {number} [params.left] in px
           * @param {number} [params.top] in px
           * @param {number} [params.width] in px
           * @param {number} [params.height] in px
           * @param {number} [params.scale]
           * @param {number} [params.scaleX]
           * @param {number} [params.scaleY]
           * @param {number} [params.opacity]
           * @param {(color|color[])} [params.color]
           * @param {(color|color[])} [params.backgroundColor]
           * @param {object} [options]
           * @param {number} [options.duration]
           * @param {(string|function)} [options.ease]
           * @param {(boolean|number)} [options.repeat]
           * @param {boolean} [options.reverse]
           * @returns {Ease}
           */
        }, {
          key: "add",
          value: function add(element, params, options) {
            options = options || {};
            options.duration = exists(options.duration) ? options.duration : this.options.duration;
            options.ease = options.ease || this.options.ease;
            if (typeof options.ease === "string") {
              options.ease = Penner[options.ease];
            }
            var ease = new Ease(element, params, options);
            this.list.push(ease);
            return ease;
          }
          /**
           * remove all eases on element
           * @param {HTMLElement} element
           */
        }, {
          key: "removeObjectEases",
          value: function removeObjectEases(element) {
            var list = this.list;
            for (var i = 0, _i = list.length; i < _i; i++) {
              var ease = list[i];
              if (ease.element === element) {
                list.splice(i, 1);
                i--;
                _i--;
              }
            }
          }
          /**
           * remove eases using Ease object returned by add()
           * @param {Ease} ease
           */
        }, {
          key: "remove",
          value: function remove(ease) {
            var list = this.list;
            for (var i = 0, _i = list.length; i < _i; i++) {
              if (list[i] === ease) {
                list.splice(i, 1);
                return;
              }
            }
          }
          /**
           * remove all eases
           */
        }, {
          key: "removeAll",
          value: function removeAll() {
            this.list = [];
          }
          /**
           * update frame; this is called automatically if start() is used
           * @param {number} elapsed time in ms
           */
        }, {
          key: "update",
          value: function update(elapsed) {
            for (var i = 0, _i = this.list.length; i < _i; i++) {
              if (this.list[i].update(elapsed)) {
                this.list.splice(i, 1);
                i--;
                _i--;
              }
            }
            this.emit("each", this);
            if (!this.empty && this.list.length === 0) {
              this.emit("done", this);
              this.empty = true;
            }
          }
          /**
           * number of eases
           * @returns {number}
           */
        }, {
          key: "getCount",
          value: function getCount() {
            return this.list.length;
          }
        }]);
        return DomEase2;
      })(EventEmitter);
      module.exports = DomEase;
    }
  });

  // node_modules/simple-window-manager/src/window.js
  var require_window = __commonJS({
    "node_modules/simple-window-manager/src/window.js"(exports, module) {
      var Events = require_eventemitter3();
      var clicked = require_clicked();
      var Ease = require_domEase();
      var exists = require_exists();
      var html = require_html();
      var id = 0;
      var Window = class extends Events {
        /**
         * @param {WindowManager} [wm]
         * @param {object} [options]
         */
        constructor(wm2, options) {
          super();
          this.wm = wm2;
          this.options = options || {};
          this.id = exists(this.options.id) ? this.options.id : id++;
          this._createWindow();
          this._listeners();
          this.active = false;
          this.maximized = false;
          this.minimized = false;
          this._closed = true;
          this._restore = null;
          this._moving = null;
          this._resizing = null;
          this.ease = new Ease({ duration: this.options.animateTime, ease: this.options.ease });
        }
        /**
         * open the window
         * @param {boolean} [noFocus] do not focus window when opened
         * @param {boolean} [noAnimate] do not animate window when opened
         */
        open(noFocus, noAnimate) {
          if (this._closed) {
            this.emit("open", this);
            this.win.style.display = "block";
            if (!noAnimate) {
              this.win.style.transform = "scale(0)";
              this.ease.add(this.win, { scale: 1 });
            } else {
              this.win.style.transform = "";
            }
            this._closed = false;
            if (!noFocus) {
              this.focus();
            }
          }
        }
        /**
         * focus the window
         */
        focus() {
          if (this.wm._checkModal(this)) {
            if (this.minimized) {
              this.minimize();
            }
            this.active = true;
            if (this.options.titlebar) {
              this.winTitlebar.style.backgroundColor = this.options.backgroundColorTitlebarActive;
            }
            this.emit("focus", this);
          }
        }
        /**
         * blur the window
         */
        blur() {
          if (this.wm.modal !== this) {
            this.active = false;
            if (this.options.titlebar) {
              this.winTitlebar.style.backgroundColor = this.options.backgroundColorTitlebarInactive;
            }
            this.emit("blur", this);
          }
        }
        /**
         * closes the window (can be reopened with open)
         */
        close(noAnimate) {
          if (!this._closed) {
            this._closed = true;
            if (noAnimate) {
              this.win.style.transform = "scale(0)";
              this.win.style.display = "none";
            } else {
              const ease = this.ease.add(this.win, { scale: 0 });
              ease.on("complete", () => {
                this.win.style.display = "none";
                this.emit("close", this);
              });
            }
          }
        }
        /**
         * is window closed?
         * @type {boolean}
         * @readonly
         */
        get closed() {
          return this._closed;
        }
        /**
         * left coordinate
         * @type {number}
         */
        get x() {
          return this.options.x;
        }
        set x(value) {
          this.options.x = value;
          this.win.style.left = value + "px";
          this.emit("move-x", this);
          if (this.minimized) {
            this._lastMinimized.left = value;
          }
        }
        /**
         * top coordinate
         * @type {number}
         */
        get y() {
          return this.options.y;
        }
        set y(value) {
          this.options.y = value;
          this.win.style.top = value + "px";
          this.emit("move-y", this);
          if (this.minimized) {
            this._lastMinimized.top = value;
          }
        }
        /**
         * width of window
         * @type {number}
         */
        get width() {
          return this.options.width || this.win.offsetWidth;
        }
        set width(value) {
          if (value) {
            this.win.style.width = value + "px";
            this.options.width = this.win.offsetWidth;
          } else {
            this.win.style.width = "auto";
            this.options.width = "";
          }
          this.emit("resize-width", this);
        }
        /**
         * height of window
         * @type {number}
         */
        get height() {
          return this.options.height || this.win.offsetHeight;
        }
        set height(value) {
          if (value) {
            this.win.style.height = value + "px";
            this.options.height = this.win.offsetHeight;
          } else {
            this.win.style.height = "auto";
            this.options.height = "";
          }
          this.emit("resize-height", this);
        }
        /**
         * resize the window
         * @param {number} width
         * @param {number} height
         */
        resize(width, height) {
          this.width = width;
          this.height = height;
        }
        /**
         * move window
         * @param {number} x
         * @param {number} y
         */
        move(x, y) {
          this.x = x;
          this.y = y;
        }
        /**
         * minimize window
         * @param {boolean} noAnimate
         */
        minimize(noAnimate) {
          if (this.wm._checkModal(this) && this.options.minimizable && !this.transitioning) {
            if (this.minimized) {
              if (noAnimate) {
                this.win.style.transform = "";
                const x = this.minimized.x, y = this.minimized.y;
                this.minimized = false;
                this.move(x, y);
                this.emit("minimize-restore", this);
                this.overlay.style.display = "none";
              } else {
                this.transitioning = true;
                const ease = this.ease.add(this.win, { scaleX: 1, scaleY: 1, left: this.minimized.x, top: this.minimized.y });
                ease.on("complete", () => {
                  const x = this.minimized.x, y = this.minimized.y;
                  this.minimized = false;
                  this.move(x, y);
                  this.emit("minimize-restore", this);
                  this.transitioning = false;
                  this.overlay.style.display = "none";
                });
              }
            } else {
              const x = this.x;
              const y = this.y;
              const left = this._lastMinimized ? this._lastMinimized.left : this.x;
              const top = this._lastMinimized ? this._lastMinimized.top : this.y;
              const desired = this.options.minimizeSize;
              const scaleX = desired / this.width;
              const scaleY = desired / this.height;
              if (noAnimate) {
                this.win.style.transform = "scale(1) scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
                this.win.style.left = left + "px";
                this.win.style.top = top + "px";
                this.minimized = { x, y, scaleX, scaleY };
                this.emit("minimize", this);
                this.overlay.style.display = "block";
                this._lastMinimized = { left, top };
              } else {
                this.transitioning = true;
                const ease = this.ease.add(this.win, { left, top, scaleX, scaleY });
                ease.on("complete", () => {
                  this.minimized = { x, y, scaleX, scaleY };
                  this.emit("minimize", this);
                  this.transitioning = false;
                  this.overlay.style.display = "block";
                  this._lastMinimized = { left, top };
                  this.move(left, top);
                });
              }
            }
          }
        }
        /**
         * maximize the window
         */
        maximize(noAnimate) {
          if (this.wm._checkModal(this) && this.options.maximizable && !this.transitioning) {
            if (this.maximized) {
              if (noAnimate) {
                this.x = this.maximized.x;
                this.y = this.maximized.y;
                this.width = this.maximized.width;
                this.height = this.maximized.height;
                this.maximized = null;
                this.emit("restore", this);
              } else {
                this.transitioning = true;
                const ease = this.ease.add(this.win, { left: this.maximized.x, top: this.maximized.y, width: this.maximized.width, height: this.maximized.height });
                ease.on("complete", () => {
                  this.x = this.maximized.x;
                  this.y = this.maximized.y;
                  this.width = this.maximized.width;
                  this.height = this.maximized.height;
                  this.maximized = null;
                  this.transitioning = false;
                  this.emit("restore", this);
                });
              }
              this.buttons.maximize.style.backgroundImage = this.options.backgroundMaximizeButton;
            } else {
              const x = this.x, y = this.y, width = this.win.offsetWidth, height = this.win.offsetHeight;
              if (noAnimate) {
                this.maximized = { x, y, width, height };
                this.x = 0;
                this.y = 0;
                this.width = this.wm.overlay.offsetWidth + "px";
                this.height = this.wm.overlay.offsetHeight + "px";
                this.emit("maximize", this);
              } else {
                this.transitioning = true;
                const ease = this.ease.add(this.win, { left: 0, top: 0, width: this.wm.overlay.offsetWidth, height: this.wm.overlay.offsetHeight });
                ease.on("complete", () => {
                  this.x = 0;
                  this.y = 0;
                  this.width = this.wm.overlay.offsetWidth + "px";
                  this.height = this.wm.overlay.offsetHeight + "px";
                  this.maximized = { x, y, width, height };
                  this.transitioning = false;
                });
                this.emit("maximize", this);
              }
              this.buttons.maximize.style.backgroundImage = this.options.backgroundRestoreButton;
            }
          }
        }
        /**
         * sends window to back of window-manager
         */
        sendToBack() {
          this.wm.sendToBack(this);
        }
        /**
         * send window to front of window-manager
         */
        sendToFront() {
          this.wm.sendToFront(this);
        }
        /**
         * save the state of the window
         * @return {object} data
         */
        save() {
          const data = {};
          const maximized = this.maximized;
          if (maximized) {
            data.maximized = { left: maximized.left, top: maximized.top, width: maximized.width, height: maximized.height };
          }
          const minimized = this.minimized;
          if (minimized) {
            data.minimized = { x: this.minimized.x, y: this.minimized.y, scaleX: this.minimized.scaleX, scaleY: this.minimized.scaleY };
          }
          const lastMinimized = this._lastMinimized;
          if (lastMinimized) {
            data.lastMinimized = { left: lastMinimized.left, top: lastMinimized.top };
          }
          data.x = this.x;
          data.y = this.y;
          if (exists(this.options.width)) {
            data.width = this.options.width;
          }
          if (exists(this.options.height)) {
            data.height = this.options.height;
          }
          data.closed = this._closed;
          return data;
        }
        /**
         * return the state of the window
         * @param {object} data from save()
         */
        load(data) {
          if (data.maximized) {
            if (!this.maximized) {
              this.maximize(true);
            }
          } else if (this.maximized) {
            this.maximize(true);
          }
          if (data.minimized) {
            if (!this.minimized) {
              this.minimize(true);
            }
            this.minimized = data.minimized;
          } else if (this.minimized) {
            this.minimize(true);
          }
          if (data.lastMinimized) {
            this._lastMinimized = data.lastMinimized;
          }
          this.x = data.x;
          this.y = data.y;
          if (exists(data.width)) {
            this.width = data.width;
          } else {
            this.win.style.width = "auto";
          }
          if (exists(data.height)) {
            this.height = data.height;
          } else {
            this.win.style.height = "auto";
          }
          if (data.closed) {
            this.close(true);
          } else if (this.closed) {
            this.open(true, true);
          }
        }
        /**
         * change title
         * @type {string}
         */
        get title() {
          return this._title;
        }
        set title(value) {
          this.winTitle.innerText = value;
          this.emit("title-change", this);
        }
        /**
         * right coordinate of window
         * @type {number}
         */
        get right() {
          return this.x + this.width;
        }
        set right(value) {
          this.x = value - this.width;
        }
        /**
         * bottom coordinate of window
         * @type {number}
         */
        get bottom() {
          return this.y + this.height;
        }
        set bottom(value) {
          this.y = value - this.height;
        }
        /**
         * centers window in middle of other window or document.body
         * @param {Window} [win]
         */
        center(win) {
          if (win) {
            this.move(
              win.x + win.width / 2 - this.width / 2,
              win.y + win.height / 2 - this.height / 2
            );
          } else {
            this.move(
              window.innerWidth / 2 - this.width / 2,
              window.innerHeight / 2 - this.height / 2
            );
          }
        }
        /**
         * Fires when window is maximized
         * @event Window#maximize
         * @type {Window}
         */
        /**
         * Fires when window is restored to normal after being maximized
         * @event Window#maximize-restore
         * @type {Window}
         */
        /**
         * Fires when window is restored to normal after being minimized
         * @event Window#minimize-restore
         * @type {Window}
         */
        /**
         * Fires when window opens
         * @event Window#open
         * @type {Window}
         */
        /**
         * Fires when window gains focus
         * @event Window#focus
         * @type {Window}
         */
        /**
         * Fires when window loses focus
         * @event Window#blur
         * @type {Window}
         */
        /**
         * Fires when window closes
         * @event Window#close
         * @type {Window}
         */
        /**
         * Fires when resize starts
         * @event Window#resize-start
         * @type {Window}
         */
        /**
         * Fires after resize completes
         * @event Window#resize-end
         * @type {Window}
         */
        /**
         * Fires during resizing
         * @event Window#resize
         * @type {Window}
         */
        /**
         * Fires when move starts
         * @event Window#move-start
         * @type {Window}
         */
        /**
         * Fires after move completes
         * @event Window#move-end
         * @type {Window}
         */
        /**
         * Fires during move
         * @event Window#move
         * @type {Window}
         */
        /**
         * Fires when width is changed
         * @event Window#resize-width
         * @type {Window}
         */
        /**
         * Fires when height is changed
         * @event Window#resize-height
         * @type {Window}
         */
        /**
         * Fires when x position of window is changed
         * @event Window#move-x
         * @type {Window}
         */
        /**
         * Fires when y position of window is changed
         * @event Window#move-y
         * @type {Window}
         */
        _createWindow() {
          this.win = html({
            parent: this.wm ? this.wm.win : null,
            styles: {
              "display": "none",
              "border-radius": this.options.borderRadius,
              "user-select": "none",
              "overflow": "hidden",
              "position": "absolute",
              "min-width": this.options.minWidth,
              "min-height": this.options.minHeight,
              "box-shadow": this.options.shadow,
              "background-color": this.options.backgroundColorWindow,
              "left": this.options.x + "px",
              "top": this.options.y + "px",
              "width": isNaN(this.options.width) ? this.options.width : this.options.width + "px",
              "height": isNaN(this.options.height) ? this.options.height : this.options.height + "px"
            }
          });
          this.winBox = html({
            parent: this.win,
            styles: {
              "display": "flex",
              "flex-direction": "column",
              "width": "100%",
              "height": "100%",
              "min-height": this.options.minHeight
            }
          });
          this._createTitlebar();
          this.content = html({
            parent: this.winBox,
            type: "section",
            styles: {
              "display": "block",
              "flex": 1,
              "min-height": this.minHeight,
              "overflow-x": "hidden",
              "overflow-y": "auto"
            }
          });
          if (this.options.resizable) {
            this._createResize();
          }
          this.overlay = html({
            parent: this.win,
            styles: {
              "display": "none",
              "position": "absolute",
              "left": 0,
              "top": 0,
              "width": "100%",
              "height": "100%"
            }
          });
          this.overlay.addEventListener("mousedown", (e) => {
            this._downTitlebar(e);
            e.stopPropagation();
          });
          this.overlay.addEventListener("touchstart", (e) => {
            this._downTitlebar(e);
            e.stopPropagation();
          });
        }
        _downTitlebar(e) {
          if (!this.transitioning) {
            const event = this._convertMoveEvent(e);
            this._moving = {
              x: event.pageX - this.x,
              y: event.pageY - this.y
            };
            this.emit("move-start", this);
            this._moved = false;
          }
        }
        _createTitlebar() {
          if (this.options.titlebar) {
            this.winTitlebar = html({
              parent: this.winBox,
              type: "header",
              styles: {
                "user-select": "none",
                "display": "flex",
                "flex-direction": "row",
                "align-items": "center",
                "justify-content": "center",
                "height": this.options.titlebarHeight,
                "min-height": this.options.titlebarHeight,
                "border": 0,
                "padding": "0 8px",
                "overflow": "hidden"
              }
            });
            const winTitleStyles = {
              "user-select": "none",
              "flex": 1,
              "display": "flex",
              "flex-direction": "row",
              "align-items": "center",
              "user-select": "none",
              "cursor": "default",
              "padding": 0,
              "margin": 0,
              "font-size": "16px",
              "font-weight": 400,
              "color": this.options.foregroundColorTitle
            };
            if (this.options.titleCenter) {
              winTitleStyles["justify-content"] = "center";
            } else {
              winTitleStyles["padding-left"] = "8px";
            }
            this.winTitle = html({ parent: this.winTitlebar, type: "span", html: this.options.title, styles: winTitleStyles });
            this._createButtons();
            if (this.options.movable) {
              this.winTitlebar.addEventListener("mousedown", (e) => this._downTitlebar(e));
              this.winTitlebar.addEventListener("touchstart", (e) => this._downTitlebar(e));
            }
          }
        }
        _createButtons() {
          this.winButtonGroup = html({
            parent: this.winTitlebar,
            styles: {
              "display": "flex",
              "flex-direction": "row",
              "align-items": "center",
              "padding-left": "10px"
            }
          });
          const button = {
            "display": "inline-block",
            "border": 0,
            "margin": 0,
            "margin-left": "5px",
            "padding": 0,
            "width": "12px",
            "height": "12px",
            "background-color": "transparent",
            "background-size": "cover",
            "background-repeat": "no-repeat",
            "opacity": 0.7,
            "color": this.options.foregroundColorButton,
            "outline": 0
          };
          this.buttons = {};
          if (this.options.minimizable) {
            button.backgroundImage = this.options.backgroundMinimizeButton;
            this.buttons.minimize = html({ parent: this.winButtonGroup, html: "&nbsp;", type: "button", styles: button });
            clicked(this.buttons.minimize, () => this.minimize());
          }
          if (this.options.maximizable) {
            button.backgroundImage = this.options.backgroundMaximizeButton;
            this.buttons.maximize = html({ parent: this.winButtonGroup, html: "&nbsp;", type: "button", styles: button });
            clicked(this.buttons.maximize, () => this.maximize());
          }
          if (this.options.closable) {
            button.backgroundImage = this.options.backgroundCloseButton;
            this.buttons.close = html({ parent: this.winButtonGroup, html: "&nbsp;", type: "button", styles: button });
            clicked(this.buttons.close, () => this.close());
          }
          for (let key in this.buttons) {
            const button2 = this.buttons[key];
            button2.addEventListener("mousemove", () => {
              button2.style.opacity = 1;
            });
            button2.addEventListener("mouseout", () => {
              button2.style.opacity = 0.7;
            });
          }
        }
        _createResize() {
          this.resizeEdge = html({
            parent: this.winBox,
            type: "button",
            html: "&nbsp",
            styles: {
              "position": "absolute",
              "bottom": 0,
              "right": "4px",
              "border": 0,
              "margin": 0,
              "padding": 0,
              "cursor": "se-resize",
              "user-select": "none",
              "background": this.options.backgroundResize,
              "height": "15px",
              "width": "10px"
            }
          });
          const down = (e) => {
            if (this.wm._checkModal(this)) {
              const event = this._convertMoveEvent(e);
              const width = this.width || this.win.offsetWidth;
              const height = this.height || this.win.offsetHeight;
              this._resizing = {
                width: width - event.pageX,
                height: height - event.pageY
              };
              this.emit("resize-start");
              e.preventDefault();
            }
          };
          this.resizeEdge.addEventListener("mousedown", down);
          this.resizeEdge.addEventListener("touchstart", down);
        }
        _move(e) {
          if (this.wm._checkModal(this)) {
            const event = this._convertMoveEvent(e);
            if (!this._isTouchEvent(e) && e.which !== 1) {
              this._moving && this._stopMove();
              this._resizing && this._stopResize();
            }
            if (this._moving) {
              if (this.minimized) {
                this._moved = true;
              }
              this.move(
                event.pageX - this._moving.x,
                event.pageY - this._moving.y
              );
              this.emit("move", this);
              e.preventDefault();
            }
            if (this._resizing) {
              this.resize(
                event.pageX + this._resizing.width,
                event.pageY + this._resizing.height
              );
              this.maximized = null;
              this.emit("resize", this);
              e.preventDefault();
            }
          }
        }
        _up() {
          if (this._moving) {
            if (this.minimized) {
              if (!this._moved) {
                this.minimize();
              }
            }
            this._stopMove();
          }
          this._resizing && this._stopResize();
        }
        _listeners() {
          this.win.addEventListener("mousedown", () => this.focus());
          this.win.addEventListener("touchstart", () => this.focus());
        }
        _stopMove() {
          this._moving = null;
          this.emit("move-end", this);
        }
        _stopResize() {
          this._restore = this._resizing = null;
          this.emit("resize-end", this);
        }
        _isTouchEvent(e) {
          return !!window.TouchEvent && e instanceof window.TouchEvent;
        }
        _convertMoveEvent(e) {
          return this._isTouchEvent(e) ? e.changedTouches[0] : e;
        }
        get z() {
          return parseInt(this.win.style.zIndex);
        }
        set z(value) {
          this.win.style.zIndex = value;
        }
      };
      module.exports = Window;
    }
  });

  // node_modules/simple-window-manager/src/window-options.js
  var require_window_options = __commonJS({
    "node_modules/simple-window-manager/src/window-options.js"(exports, module) {
      var WindowOptions = {
        x: 0,
        y: 0,
        minWidth: "200px",
        minHeight: "60px",
        borderRadius: "4px",
        minimizeSize: 50,
        modalBackground: "rgba(0, 0, 0, 0.6)",
        shadow: "0 0 12px 1px rgba(0, 0, 0, 0.6)",
        movable: true,
        resizable: true,
        maximizable: true,
        minimizable: true,
        closable: true,
        titlebar: true,
        titlebarHeight: "36px",
        animateTime: 250,
        ease: "easeInOutSine",
        backgroundColorWindow: "#fefefe",
        backgroundColorTitlebarActive: "#365d98",
        backgroundColorTitlebarInactive: "#888888",
        foregroundColorButton: "#ffffff",
        foregroundColorTitle: "#ffffff",
        backgroundCloseButton: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVQ4jdXUwQ2AIBBEUULLVkET2N228b1gVFxkIWuik3gbHhCQEH4TYAEESEA09GPpCrBoBeFIfkILlk990UqJa1RUwQCSZdYbaumY0WGsg67lG8M66BxWofWq9tU2sbFZZuO6ZddDaWBz18YyYAjlhV/P/XHwfb4+mw0FvmLroLRViAAAAABJRU5ErkJggg==)",
        backgroundMaximizeButton: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAVklEQVQ4jWNgoAX4////1v+Ug60MDAwMjFAD/1PDYYyMjIxM1DAIGVDdQBY0vgmZ5pxB4cFClUzDUPQP/jAcNXDUwMFgIEpepkYxBnPhNkoNopIZmAAAdghhoHiIrEcAAAAASUVORK5CYII=)",
        backgroundMinimizeButton: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAOElEQVQ4jWNgGAWjYBSMgiEJGGGM////p1FkECPjLHQD/1NoICMDAwMDEyWGYAMsSOxz1DacKgAAbrQI132oX0IAAAAASUVORK5CYII=)",
        backgroundRestoreButton: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAA2klEQVQ4ja2UzQ3CMAyFnyuuSD0wBjvAKGUDRmAERugO5U6G6ABw51CJAR6XBIX8OCHquyR27U9pnltgZYnbkNwB2Ff2zSLyUitITqzXlON03n5beTq1dhPETwBjATZoD0PgQ0QuWgPJ4z9AvzFnUp8AxyaRNCSNFzeZ1CGvJpOyr2yVMmmw6xjEVcDIJHd3Lh+aFAJ7ryB1+S6/5E7gA98ADgDuQU0YA8CtBnjC75hc7XpO9M1FoJ0j42KSi82bqEuRNjZNKrncJ0yJaqCY9FXrlyIKcN0fbqs+F7nRockDNMcAAAAASUVORK5CYII=)",
        backgroundResize: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzREODAwQzcyRjZDMTFFMjg5NkREMENBNjJERUE4Q0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzREODAwQzgyRjZDMTFFMjg5NkREMENBNjJERUE4Q0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNEQ4MDBDNTJGNkMxMUUyODk2REQwQ0E2MkRFQThDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNEQ4MDBDNjJGNkMxMUUyODk2REQwQ0E2MkRFQThDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuQy0VQAAACLSURBVHjaYpw9ezYDEUARiO8zEaHQHohPArEcCxEK1wGxPxA/wmeyDZLCIyABJjwKNwJxEFShIi7FyAoPArEZEB8DYi0mHFaHIikEaUwE4mtMWBRGAPE+NIU7kJ0BUxiNQyFInpMJKgFTuBuLQj8gXg3yJCicHyFZDQJfgDgOqhEE3gGxD8jNAAEGADlXJQUd3J75AAAAAElFTkSuQmCC) no-repeat"
      };
      module.exports = WindowOptions;
    }
  });

  // node_modules/simple-window-manager/src/snap.js
  var require_snap = __commonJS({
    "node_modules/simple-window-manager/src/snap.js"(exports, module) {
      var exists = require_exists();
      var html = require_html();
      var DEFAULT_COLOR = "#a8f0f4";
      var DEFAULT_SIZE = 10;
      module.exports = class Snap {
        /**
         * add edge snapping plugin
         * @param {WindowManager} wm
         * @param {object} options
         * @param {boolean} [options.screen=true] snap to screen edges
         * @param {boolean} [options.windows=true] snap to window edges
         * @param {number} [options.snap=20] distance to edge before snapping and width/height of snap bars
         * @param {string} [options.color=#a8f0f4] color for snap bars
         * @param {number} [options.spacing=5] spacing distance between window and edges
         * @private
         */
        constructor(wm2, options) {
          options = !exists(options) || typeof options !== "object" ? {} : options;
          this.wm = wm2;
          this.snap = options.snap || 20;
          this.screen = exists(options.screen) ? options.screen : true;
          this.windows = exists(options.windows) ? options.windows : true;
          const backgroundColor = options.color || DEFAULT_COLOR;
          this.size = options.size || DEFAULT_SIZE;
          this.spacing = options.spacing || 5;
          this.highlights = html({ parent: this.wm.overlay, styles: { "position": "absolute" } });
          this.horizontal = html({
            parent: this.highlights,
            styles: {
              display: "none",
              position: "absolute",
              height: this.size + "px",
              borderRadius: this.size + "px",
              backgroundColor
            }
          });
          this.vertical = html({
            parent: this.highlights,
            styles: {
              display: "none",
              position: "absolute",
              width: this.size + "px",
              borderRadius: this.size + "px",
              backgroundColor
            }
          });
          this.horizontal;
          this.showing = [];
        }
        stop() {
          this.highlights.remove();
          this.stopped = true;
        }
        addWindow(win) {
          win.on("move", () => this.move(win));
          win.on("move-end", () => this.moveEnd(win));
        }
        screenMove(rect, horizontal, vertical) {
          const width = document.body.clientWidth;
          const height = document.body.clientHeight;
          if (rect.left - this.snap <= width && rect.right + this.snap >= 0) {
            if (Math.abs(rect.top - 0) <= this.snap) {
              horizontal.push({ distance: Math.abs(rect.top - 0), left: 0, width, top: 0, side: "top" });
            } else if (Math.abs(rect.bottom - height) <= this.snap) {
              horizontal.push({ distance: Math.abs(rect.bottom - height), left: 0, width, top: height, side: "bottom" });
            }
          }
          if (rect.top - this.snap <= height && rect.bottom + this.snap >= 0) {
            if (Math.abs(rect.left - 0) <= this.snap) {
              vertical.push({ distance: Math.abs(rect.left - 0), top: 0, height, left: 0, side: "left" });
            } else if (Math.abs(rect.right - width) <= this.snap) {
              vertical.push({ distance: Math.abs(rect.right - width), top: 0, height, left: width, side: "right" });
            }
          }
        }
        windowsMove(original, rect, horizontal, vertical) {
          for (let win of this.wm.windows) {
            if (!win.options.noSnap && win !== original) {
              const rect2 = win.win.getBoundingClientRect();
              if (rect.left - this.snap <= rect2.right && rect.right + this.snap >= rect2.left) {
                if (Math.abs(rect.top - rect2.bottom) <= this.snap) {
                  horizontal.push({ distance: Math.abs(rect.top - rect2.bottom), left: rect2.left, width: rect2.width, top: rect2.bottom, side: "top" });
                  if (Math.abs(rect.left - rect2.left) <= this.snap) {
                    vertical.push({ distance: Math.abs(rect.left - rect2.left), top: rect2.top, height: rect2.height, left: rect2.left, side: "left", noSpacing: true });
                  } else if (Math.abs(rect.right - rect2.right) <= this.snap) {
                    vertical.push({ distance: Math.abs(rect.right - rect2.right), top: rect2.top, height: rect2.height, left: rect2.right, side: "right", noSpacing: true });
                  }
                } else if (Math.abs(rect.bottom - rect2.top) <= this.snap) {
                  horizontal.push({ distance: Math.abs(rect.bottom - rect2.top), left: rect2.left, width: rect2.width, top: rect2.top, side: "bottom" });
                  if (Math.abs(rect.left - rect2.left) <= this.snap) {
                    vertical.push({ distance: Math.abs(rect.left - rect2.left), top: rect2.top, height: rect2.height, left: rect2.left, side: "left", noSpacing: true });
                  } else if (Math.abs(rect.right - rect2.right) <= this.snap) {
                    vertical.push({ distance: Math.abs(rect.right - rect2.right), top: rect2.top, height: rect2.height, left: rect2.right, side: "right", noSpacing: true });
                  }
                }
              }
              if (rect.top - this.snap <= rect2.bottom && rect.bottom + this.snap >= rect2.top) {
                if (Math.abs(rect.left - rect2.right) <= this.snap) {
                  vertical.push({ distance: Math.abs(rect.left - rect2.right), top: rect2.top, height: rect2.height, left: rect2.right, side: "left" });
                  if (Math.abs(rect.top - rect2.top) <= this.snap) {
                    horizontal.push({ distance: Math.abs(rect.top - rect2.top), left: rect2.left, width: rect2.width, top: rect2.top, side: "top", noSpacing: true });
                  } else if (Math.abs(rect.bottom - rect2.bottom) <= this.snap) {
                    horizontal.push({ distance: Math.abs(rect.bottom - rect2.bottom), left: rect2.left, width: rect2.width, top: rect2.bottom, side: "bottom", noSpacing: true });
                  }
                } else if (Math.abs(rect.right - rect2.left) <= this.snap) {
                  vertical.push({ distance: Math.abs(rect.right - rect2.left), top: rect2.top, height: rect2.height, left: rect2.left, side: "right" });
                  if (Math.abs(rect.top - rect2.top) <= this.snap) {
                    horizontal.push({ distance: Math.abs(rect.top - rect2.top), left: rect2.left, width: rect2.width, top: rect2.top, side: "top", noSpacing: true });
                  } else if (Math.abs(rect.bottom - rect2.bottom) <= this.snap) {
                    horizontal.push({ distance: Math.abs(rect.bottom - rect2.bottom), left: rect2.left, width: rect2.width, top: rect2.bottom, side: "bottom", noSpacing: true });
                  }
                }
              }
            }
          }
        }
        move(win) {
          if (this.stopped || win.options.noSnap) {
            return;
          }
          this.horizontal.style.display = "none";
          this.vertical.style.display = "none";
          const horizontal = [];
          const vertical = [];
          const rect = win.win.getBoundingClientRect();
          if (this.screen) {
            this.screenMove(rect, horizontal, vertical);
          }
          if (this.windows) {
            this.windowsMove(win, rect, horizontal, vertical);
          }
          if (horizontal.length) {
            horizontal.sort((a, b) => {
              return a.distance - b.distance;
            });
            const find = horizontal[0];
            this.horizontal.style.display = "block";
            this.horizontal.style.left = find.left + "px";
            this.horizontal.style.width = find.width + "px";
            this.horizontal.style.top = find.top - this.size / 2 + "px";
            this.horizontal.y = find.top;
            this.horizontal.side = find.side;
            this.horizontal.noSpacing = find.noSpacing;
          }
          if (vertical.length) {
            vertical.sort((a, b) => {
              return a.distance - b.distance;
            });
            const find = vertical[0];
            this.vertical.style.display = "block";
            this.vertical.style.top = find.top + "px";
            this.vertical.style.height = find.height + "px";
            this.vertical.style.left = find.left - this.size / 2 + "px";
            this.vertical.x = find.left;
            this.vertical.side = find.side;
            this.vertical.noSpacing = find.noSpacing;
          }
        }
        moveEnd(win) {
          if (this.stopped) {
            return;
          }
          if (this.horizontal.style.display === "block") {
            const spacing = this.horizontal.noSpacing ? 0 : this.spacing;
            const adjust = win.minimized ? (win.height - win.height * win.minimized.scaleY) / 2 : 0;
            switch (this.horizontal.side) {
              case "top":
                win.y = this.horizontal.y - adjust + spacing;
                break;
              case "bottom":
                win.bottom = this.horizontal.y + adjust - spacing;
                break;
            }
          }
          if (this.vertical.style.display === "block") {
            const spacing = this.vertical.noSpacing ? 0 : this.spacing;
            const adjust = win.minimized ? (win.width - win.width * win.minimized.scaleX) / 2 : 0;
            switch (this.vertical.side) {
              case "left":
                win.x = this.vertical.x - adjust + spacing;
                break;
              case "right":
                win.right = this.vertical.x + adjust - spacing;
                break;
            }
          }
          this.horizontal.style.display = this.vertical.style.display = "none";
        }
      };
    }
  });

  // node_modules/simple-window-manager/src/window-manager.js
  var require_window_manager = __commonJS({
    "node_modules/simple-window-manager/src/window-manager.js"(exports, module) {
      var exists = require_exists();
      var html = require_html();
      var Window = require_window();
      var WindowOptions = require_window_options();
      var Snap = require_snap();
      var WindowManager2 = class {
        /**
         * @param {Window~WindowOptions} [defaultOptions] default WindowOptions used when createWindow is called
         * @param {boolean} [defaultOptions.quiet] suppress the simple-window-manager console message
         * @param {object} [defaultOptions.snap] turn on edge snapping
         * @param {boolean} [defaultOptions.snap.screen=true] snap to edge of screen
         * @param {boolean} [defaultOptions.snap.windows=true] snap to windows
         * @param {number} [defaultOptions.snap.snap=20] distance to edge before snapping and width/height of snap bars
         * @param {string} [defaultOptions.snap.color=#a8f0f4] color for snap bars
         * @param {number} [defaultOptions.snap.spacing=5] spacing distance between window and edges
         */
        constructor(defaultOptions) {
          this.windows = [];
          this.active = null;
          this.modal = null;
          this.options = {};
          for (let key in WindowOptions) {
            this.options[key] = WindowOptions[key];
          }
          if (defaultOptions) {
            for (let key in defaultOptions) {
              this.options[key] = defaultOptions[key];
            }
          }
          if (!defaultOptions || !defaultOptions.quiet) {
            console.log("%c \u2615 simple-window-manager initialized \u2615", "color: #ff00ff");
          }
          this._createDom();
          this.plugins = [];
          if (defaultOptions && defaultOptions["snap"]) {
            this.snap(defaultOptions["snap"]);
          }
        }
        /**
         * Create a window
         * @param {Window~WindowOptions} [options]
         * @param {string} [options.title]
         * @param {number} [options.x] position
         * @param {number} [options.y] position
         * @param {boolean} [options.modal]
         * @param {string|number} [options.id] if not provide, id will be assigned in order of creation (0, 1, 2...)
         * @returns {Window} the created window
         */
        createWindow(options) {
          options = options || {};
          for (let key in this.options) {
            if (!exists(options[key])) {
              options[key] = this.options[key];
            }
          }
          const win = new Window(this, options);
          win.on("open", this._open, this);
          win.on("focus", this._focus, this);
          win.on("blur", this._blur, this);
          win.on("close", this._close, this);
          win.win.addEventListener("mousemove", (e) => this._move(e));
          win.win.addEventListener("touchmove", (e) => this._move(e));
          win.win.addEventListener("mouseup", (e) => this._up(e));
          win.win.addEventListener("touchend", (e) => this._up(e));
          if (this.plugins["snap"] && !options.noSnap) {
            this.plugins["snap"].addWindow(win);
          }
          return win;
        }
        /**
         * Attach an existing window to the WindowManager
         * Note: WindowManager.createWindow is the preferred way to create windows to ensure that all the global options
         * are applied to the Window. If you use this function, then Window needs to be initialized with WindowOptions.
         * @param {Window} win
         * @returns {Window} the window
         */
        attachWindow(win) {
          win.on("open", this._open, this);
          win.on("focus", this._focus, this);
          win.on("blur", this._blur, this);
          win.on("close", this._close, this);
          this.win.appendChild(win.win);
          win.wm = this;
          win.ease.options.duration = this.options.animateTime;
          win.ease.options.ease = this.options.ease;
          win.win.addEventListener("mousemove", (e) => this._move(e));
          win.win.addEventListener("touchmove", (e) => this._move(e));
          win.win.addEventListener("mouseup", (e) => this._up(e));
          win.win.addEventListener("touchend", (e) => this._up(e));
          if (win.modal) {
            this.modal = win;
          }
          if (this.plugins["snap"] && !this.options.noSnap) {
            this.plugins["snap"].addWindow(win);
          }
          return win;
        }
        /**
         * add edge snapping plugin
         * @param {object} options
         * @param {boolean} [options.screen=true] snap to screen edges
         * @param {boolean} [options.windows=true] snap to window edges
         * @param {number} [options.snap=20] distance to edge before snapping
         * @param {string} [options.color=#a8f0f4] color for snap bars
         * @param {number} [options.spacing=0] spacing distance between window and edges
         */
        snap(options) {
          this.plugins["snap"] = new Snap(this, options);
          for (let win of this.windows) {
            if (!win.options.noSnap) {
              this.plugins["snap"].addWindow(win);
            }
          }
        }
        /**
         * remove plugin
         * @param {string} name of plugin
         */
        removePlugin(name) {
          if (this.plugins[name]) {
            this.plugins[name].stop();
            delete this.plugins[name];
          }
        }
        /**
         * send window to front
         * @param {Window} win
         */
        sendToFront(win) {
          const index = this.windows.indexOf(win);
          if (index !== this.windows.length - 1) {
            this.windows.splice(index, 1);
            this.windows.push(win);
            this._reorder();
          }
        }
        /**
         * send window to back
         * @param {Window} win
         */
        sendToBack(win) {
          const index = this.windows.indexOf(win);
          if (index !== 0) {
            this.windows.splice(index, 1);
            this.windows.unshift(win);
            this._reorder();
          }
        }
        /**
         * save the state of all the windows
         * @returns {object} use this object in load() to restore the state of all windows
         */
        save() {
          const data = {};
          for (let i = 0; i < this.windows.length; i++) {
            const entry = this.windows[i];
            data[entry.id] = entry.save();
            data[entry.id].order = i;
          }
          return data;
        }
        /**
         * restores the state of all the windows
         * NOTE: this requires that the windows have the same id as when save() was called
         * @param {object} data created by save()
         */
        load(data) {
          for (let i = 0; i < this.windows.length; i++) {
            const entry = this.windows[i];
            if (data[entry.id]) {
              entry.load(data[entry.id]);
            }
          }
        }
        /**
         * close all windows
         */
        closeAll() {
          for (let win of this.windows) {
            win.close();
          }
          this.windows = [];
          this.modalOverlay.remove();
          this.active = this.modal = null;
        }
        /**
         * reorder windows
         * @private
         * @returns {number} available z-index for top window
         */
        _reorder() {
          let i = 0;
          for (; i < this.windows.length; i++) {
            this.windows[i].z = i;
          }
        }
        _createDom() {
          this.win = html({
            parent: document.body,
            styles: {
              "user-select": "none",
              "width": "100%",
              "height": "100%",
              "overflow": "hidden",
              "z-index": -1,
              "cursor": "default"
            }
          });
          this.overlay = html({
            parent: this.win,
            styles: {
              "user-select": "none",
              "position": "absolute",
              "top": 0,
              "left": 0,
              "width": "100%",
              "height": "100%",
              "overflow": "hidden"
            }
          });
          this.overlay.addEventListener("mousemove", (e) => this._move(e));
          this.overlay.addEventListener("touchmove", (e) => this._move(e));
          this.overlay.addEventListener("mouseup", (e) => this._up(e));
          this.overlay.addEventListener("touchend", (e) => this._up(e));
          this.modalOverlay = html({
            styles: {
              "user-select": "none",
              "position": "absolute",
              "top": 0,
              "left": 0,
              "width": "100%",
              "height": "100%",
              "overflow": "hidden",
              "background": this.options.modalBackground
            }
          });
          this.modalOverlay.addEventListener("mousemove", (e) => {
            this._move(e);
            e.preventDefault();
            e.stopPropagation();
          });
          this.modalOverlay.addEventListener("touchmove", (e) => {
            this._move(e);
            e.preventDefault();
            e.stopPropagation();
          });
          this.modalOverlay.addEventListener("mouseup", (e) => {
            this._up(e);
            e.preventDefault();
            e.stopPropagation();
          });
          this.modalOverlay.addEventListener("touchend", (e) => {
            this._up(e);
            e.preventDefault();
            e.stopPropagation();
          });
          this.modalOverlay.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.stopPropagation();
          });
          this.modalOverlay.addEventListener("touchstart", (e) => {
            e.preventDefault();
            e.stopPropagation();
          });
        }
        _open(win) {
          const index = this.windows.indexOf(win);
          if (index === -1) {
            this.windows.push(win);
          }
          if (win.options.modal) {
            this._focus(win);
            this.modal = win;
            this.win.appendChild(this.modalOverlay);
            this.modalOverlay.style.zIndex = win.z - 1;
          }
        }
        _focus(win) {
          if (this.active === win) {
            return;
          }
          if (this.active) {
            this.active.blur();
          }
          const index = this.windows.indexOf(win);
          if (index !== this.windows.length - 1) {
            this.windows.splice(index, 1);
            this.windows.push(win);
          }
          this._reorder();
          this.active = win;
        }
        _blur(win) {
          if (this.active === win) {
            this.active = null;
          }
        }
        _close(win) {
          if (this.modal === win) {
            this.modalOverlay.remove();
            this.modal = null;
          }
          const index = this.windows.indexOf(win);
          if (index !== -1) {
            this.windows.splice(index, 1);
          }
          if (this.active === win) {
            this._blur(win);
          }
        }
        _move(e) {
          for (let key in this.windows) {
            this.windows[key]._move(e);
          }
        }
        _up(e) {
          for (let key in this.windows) {
            this.windows[key]._up(e);
          }
        }
        _checkModal(win) {
          return !this.modal || this.modal === win;
        }
      };
      WindowManager2.Window = Window;
      WindowManager2.WindowOptions = WindowOptions;
      module.exports = WindowManager2;
    }
  });

  // docs/js/windows.js
  function appIcon(idName, appWindow, x, y, icon, wm2) {
    const test = wm2.createWindow({
      minWidth: 100,
      minHeight: 100,
      width: 100,
      height: 100,
      x,
      y,
      titlebar: false,
      maximizable: false,
      minimizable: false,
      resizable: false,
      closable: false,
      movable: false
    });
    test.content.style.backgroundSize = "contain";
    test.content.style.backgroundImage = `url(${icon})`;
    test.win.classList.add("app-icon");
    test.win.id = idName;
    test.on("focus", function(event) {
      if (appWindow.closed) {
        appWindow.open();
      } else {
        appWindow.focus();
      }
      test.sendToBack();
    });
    return test;
  }
  function work(wm2) {
    const test = wm2.createWindow({
      width: 1100,
      height: 700,
      x: 100,
      y: 100,
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px",
      title: "Allvuu",
      maximizable: false,
      resizable: false
    });
    test.content.style.padding = "0.5em";
    test.content.innerHTML = '<iframe class="full-frame" frameborder="0" src="https://instantwild.zsl.org/task/95049"></iframe>';
    return test;
  }
  function titleSplash(wm2) {
    const test = wm2.createWindow({
      width: 1200,
      height: 800,
      x: 100,
      y: 100,
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px",
      minimizable: false,
      maximizable: false,
      resizable: false
    });
    test.content.style.padding = "0.5em";
    test.content.style.backgroundColor = "black";
    test.content.style.color = "white";
    test.content.innerHTML = `
  <div class="centered mt-9000">
    <h1 class="play-title">(I Know You're Having Fun But)</h1>
    <h1 class="work-title">I'm Still Working</h1>
  </div> `;
    return test;
  }
  function textEditor(wm2) {
    const test = wm2.createWindow({
      width: 500,
      height: 650,
      x: 400,
      y: 200,
      title: "Tea",
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px"
    });
    var textarea = document.createElement;
    test.content.innerHTML = `
<textarea id="editor" autofocus="true">
To do:
- Far cry 2
- Baboo
- The wizaaaarrrd

Credits:
Programmer - Ryan Bone
Audio - Casey Toney
Streamer - Casey Toney
Lighting - Casey Toney
Art - Casey Toney
Writing - Chris Berg, Casey Toney
Game Design - Ryan Bone, Chris Berg, Casey Toney
Featuring the song "The Mii Channel" from the album Video Games by Louie Zong

Fianc\xE9 - Casey Toney
Fianc\xE9 Friend - Chris Berg
Nostalgic Gamer 1 - Casey Toney
Nostalgic Gamer 2 - Chris Berg
Hostile Charity Host - Casey Toney
Injured Player - Chris Berg
Community Organizer - Ryan Bone
</textarea>
  `;
    test.on("open", function(event) {
      setTimeout(function() {
        var el = document.getElementById("editor");
        el.selectionStart = el.selectionEnd = el.value.length;
        el.focus();
      }, 300);
    });
    return test;
  }
  function dumpster(wm2) {
    const test = wm2.createWindow({
      width: 400,
      height: 300,
      x: 300,
      y: 500,
      title: "Dempster",
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px"
    });
    var textarea = document.createElement;
    test.content.innerHTML = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Size</th>
      <th scope="col">Kind</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Video Games</td>
      <td>143kb</td>
      <td>Executable</td>
    </tr>
    <tr>
      <td>Big Bird</td>
      <td>800gb</td>
      <td>PNG</td>
    </tr>
    <tr>
      <td>Famous</td>
      <td>4.2mb</td>
      <td>MP3</td>
    </tr>
    <tr>
      <td>Boost</td>
      <td>3.3mb</td>
      <td>PDF</td>
    </tr>
    <tr>
      <td>Hot Scoops</td>
      <td>66kb</td>
      <td>Text</td>
    </tr>
    <tr>
      <td>Junior Mints</td>
      <td>473kb</td>
      <td>PDF</td>
    </tr>
    <tr>
      <td>Fuck</td>
      <td>32mb</td>
      <td>mkv</td>
    </tr>
  </tbody>
</table>
  `;
    test.on("open", function(event) {
      setTimeout(function() {
        var el = document.getElementById("editor");
        el.selectionStart = el.selectionEnd = el.value.length;
        el.focus();
      }, 300);
    });
    return test;
  }
  function play(video, wm2) {
    const test = wm2.createWindow({
      x: 550,
      y: 200,
      width: 800,
      height: 448,
      titlebar: true,
      title: "Having Fun",
      resizable: false,
      maximizable: false,
      minimizable: true,
      titleCenter: true,
      minimizeSize: 400,
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px"
    });
    test.win.id = "streamWindow";
    test.content.style.padding = "0.5em";
    test.content.style.backgroundColor = "black";
    test.content.innerHTML = '<div id="twitch-embed" class="full-frame"></div>';
    test.once("open", function(event) {
      var embed = new Twitch.Embed("twitch-embed", {
        video,
        layout: "video"
      });
      var iframe = document.getElementById("twitch-embed").querySelector("iframe");
      iframe.removeAttribute("width");
      iframe.removeAttribute("height");
      iframe.classList.add("full-frame");
      document.addEventListener("pauseStream", function() {
        embed.player.pause();
      });
      document.addEventListener("playStream", function() {
        embed.player.play();
      });
    });
    document.addEventListener("gameOver", function(event) {
      console.log("game over event recieved by play window");
      var streamWindow = document.getElementById("streamWindow");
      streamWindow.parentNode.removeChild(streamWindow);
    });
    test.on("close", function(event) {
      test.open();
    });
    return test;
  }
  function moveWindow(toMove, targetWindow, moveSpeed) {
    var timer = 0;
    var duration = 200;
    var intervalId = setInterval(frame, 10);
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    var targetX = targetWindow.x + Math.random() * targetWindow.width - toMove.width / 2;
    var targetY = targetWindow.y + Math.random() * targetWindow.height - toMove.height / 2;
    function direction(moverPoint, targetPoint, distance) {
      if (moverPoint < targetPoint) {
        return distance;
      } else {
        return -distance;
      }
    }
    function frame() {
      var closeToX = closeTo(toMove.x, targetX, 20);
      var closeToY = closeTo(toMove.y, targetY, 20);
      if (timer >= duration || closeToX || closeToY) {
        clearInterval(intervalId);
        toMove.focus();
      } else {
        timer++;
        toMove.move(
          toMove.x + direction(toMove.x, targetX, moveSpeed),
          toMove.y + direction(toMove.y, targetY, moveSpeed)
        );
      }
    }
  }
  function resizeWindow(target, scaleRate) {
    var timer = 0;
    var duration = 200;
    var maxWidth = 800;
    var minWidth = 400;
    var minHeight = 300;
    var scaleRatio = 1.6;
    var newWidth = minWidth + Math.random() * maxWidth;
    var newHeight = newWidth / scaleRatio;
    var intervalId = setInterval(frame, 10);
    function frame() {
      if (timer >= duration || closeTo(target.width, newWidth, scaleRate + 1)) {
        clearInterval(intervalId);
        target.focus();
      } else {
        timer++;
        if (target.width <= newWidth) {
          target.width = target.width + scaleRate;
        } else if (target.width > newWidth) {
          target.width = target.width - scaleRate;
        }
        if (target.height <= newHeight) {
          target.height = target.height + scaleRate;
        } else if (target.height > newHeight) {
          target.height = target.height - scaleRate;
        }
      }
    }
  }
  function closeTo(actual, target, error) {
    return Math.abs(actual - target) <= error;
  }

  // docs/js/chat.js
  function scheduleChats(wm2) {
    var daveChats = [
      "<p><b>Dave S.</b> \u{1F385} <i>a moment ago</i></p><p>Hey bud</p>",
      "<p>We need a photo of you for your ID</p>",
      "<p>If you want to just add me on Facebook real quick I can pick one for you.</p>",
      "<p>Ill choose one where you looks good ;P</p>"
    ];
    var susanChats = [
      "<p><b>Susan M.</b> \u{1F334} <i>a moment ago</i></p><p>Interesting article</p>",
      "<p><a class='browser-link' href='https://www.safetyworksmaine.gov/safe_workplace/safety_management/' >https://www.safetyworksmaine.gov/safe_workplace/safety_management/</a></p>",
      "<p>IIt's about creating a safe work environment</p>",
      "<p>EVERYONE is responsible for keeping the workplace SAFE and WELCOMING</p>",
      "<p>Clearly last months super soaker get together by the employee activation counicl could take some notes</p>"
    ];
    var daveChat2 = [
      "<p><b>Dave S.</b> \u{1F385} <i>a moment ago</i></p><p>Hey bud</p>",
      "<p>Sorry if that was a bit weird</p>",
      "<p>We just like to keep things super cas at work</p>",
      "<p>Everybody adds each other on social and all that</p>",
      "<p>Here's a picture of me if that makes things a bit less akward</p>",
      "<p><a class='browser-link' href='https://i.ibb.co/TcmRfyJ/dr-ian-malcolm-jurassic-park-jeff-goldblum-chaos-e1531929342928.jpg'>https://radpict.com/a/edJPm</a></p>",
      "<p>:)</p>",
      "<p>Wait. Sorry wrong pic</p>",
      "<p><a class='browser-link' href='https://i.ibb.co/dJWd9sf/MV5-BNTE3-ODQ4-Njkw-NV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-Mzg4-OTI3-OA-V1-SY1000-CR0013481000-AL.jpg'>https://radpict.com/a/34j0df</a></p>"
    ];
    var eac = [
      "<p><b>EAC</b> \u{1F916} <i>a moment ago</i> </p><p>JOIN THE EMPLOYEE ACTIVATION COUNSIL TODAY AT THREE FOR FREE DOUGHNUTS AND A MOVIE TO CELEBRATE WOMANS HISTORY MONTH.",
      "<p>WE WILL BE SHOWING RAMPAGE",
      "<p>STARING DWAYNE THE ROCK JOHNSON",
      "<p>DOUGHNUTS ARE FIRST COME FIRST SERVE."
    ];
    var susanKaren = [
      `<p>Susan M. \u{1F334}, Karen P.\u{1F47C}</p>
<p>\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} 3 members</p>
<br/>
<p><b>Susan M. \u{1F334}</b> <i>a moment ago</i></p>
<p>Rampage!?!</p>`,
      "<p><b>Karen P.</b> \u{1F47C} <i>a moment ago</i></p><p>Unbelievable</p>",
      "<b>Susan M.</b> \u{1F334} <i>a moment ago</i></p><p>How could anyone possibly think that this is in anyway acceptible for womans history month</p>",
      "Who's responsible for running the EAC</p>",
      "<b>Karen P.</b> \u{1F47C} <i>a moment ago</i></p><p>I have a meeting at three</p>",
      "I'm going to miss the doughnuts</p>",
      "I never get any doughnuts</p>",
      "Unbelievable</p>",
      "I think Dave in HR is still in charge</p>"
    ];
    var daveChat3 = [
      "<b>Dave S</b>. \u{1F385} <i>a moment ago</i></p><p>Hey bud</p>",
      "<p>Hey forget about the picture thing</p>",
      "<p>I'll just stop by and take a picture later</p>",
      "<p>Or we can do it after work if you're busy</p>",
      "<p>Whatever works for you</p>"
    ];
    var chris = [
      "<b>Chris B.</b> \u{1F61D} <i>a moment ago</i></p><p>LOOK AT THIS FOOKIN PUP</p>",
      "<p><a class='browser-link' href='https://i.ibb.co/0YMxNnt/177ebac786ae5311149bcf964067dc0a.jpg'>https://radpict.com/a/ncKDjj</a></p>",
      "<p>:'D</p>",
      "<p>SO GOOD</p>"
    ];
    var daveChat4 = [
      "<b>Dave S.</b> \u{1F385} <i>a moment ago</i></p><p>Hey bud</p>",
      "<p>Sorry if that was a bit weird</p>",
      "<p>Every employee is required to have a photo for their ID badge</p>",
      "<p>I just thought it would be nice to have a casual one of you at your desk</p>",
      "<p>It's just more relaxed</p>",
      "<p>We like to create more of a fun work environment around here</p>",
      "<p>Just having a bit of fun :D</p>"
    ];
    var ryanCasey = [
      "<p>Ryan B. \u{1F9D9}\u200D, Casey T. \u{1F60E}</p><p>\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} 3 members</p><p><b>Ryan B.</b> \u{1F9D9}\u200D\u2642\uFE0F <i>a moment ago</i></p><p>Video games?</p>",
      "<p><b>Casey T.</b> \u{1F60E} <i>a moment ago</i></p><p>My place tonight?</p>",
      "<p><b>Ryan B.</b> \u{1F9D9}\u200D\u2642\uFE0F <i>a moment ago</i></p><p>Sure thing!</p>",
      "<p>You have Destiney DL?</p>",
      "<p><b>Casey T.</b> \u{1F60E} <i>a moment ago</i></p><p>Says it'll take 12 hours to update</p>",
      "<p><b>Ryan B.</b> \u{1F9D9}\u200D\u2642\uFE0F <i>a moment ago</i></p><p>Smash it is</p>"
    ];
    var daveChat5 = [
      "<p><b>Dave S.</b> \u{1F63F} <i>a moment ago</i></p><p>Hey bud</p>",
      "<p>Hey forget about the picture thing</p>",
      "<p>Susan's going to get your picture tomorrow</p>",
      "<p>I'm going to be out tomorrow</p>",
      "<p>And for the rest of the month</p>",
      "<p>I actually don't work here anymore</p>",
      "<p>I've never seen someone have such an amazing first day</p>",
      "<p>You're going to do really amazing things</p>",
      "<p>Drop me a DM in my insta @DaveinHR if you wanna go to Casey's place and smash later</p>",
      "<p>Wait</p>",
      "<p>Sorry if that was a bit weird</p>",
      "<p>I just</p>",
      "<p>Nevermind</p>"
    ];
    var allChats = [
      { name: "Dave S. \u{1F385}", messages: daveChats },
      { name: "Susan M. \u{1F334}", messages: susanChats },
      { name: "Dave S. \u{1F385}", messages: daveChat2 },
      { name: "EAC \u{1F916}", messages: eac },
      { name: "Group Chat", messages: susanKaren },
      { name: "Dave S. \u{1F385}", messages: daveChat3 },
      { name: "Chris B. \u{1F61D}", messages: chris },
      { name: "Dave S. \u{1F385}", messages: daveChat4 },
      { name: "Group Chat", messages: ryanCasey },
      { name: "Dave S. \u{1F63F}", messages: daveChat5 }
    ];
    var chatIndex = 0;
    var timeBetweenChats = 45e3;
    document.addEventListener("chatOver", function(event) {
      setTimeout(function() {
        chatWindow(wm2, allChats[chatIndex].name, allChats[chatIndex].messages).open();
        chatIndex = chatIndex + 1;
      }, timeBetweenChats);
    });
    setTimeout(function() {
      var event = new Event("chatOver");
      document.dispatchEvent(event);
    }, 4e4);
  }
  function chatWindow(wm2, character, chats) {
    const test = wm2.createWindow({
      width: 300,
      height: 500,
      x: Math.random() * 1e3,
      y: Math.random() * 100,
      title: `${character} via Crosstalk`,
      maximizable: false,
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px",
      minimizeSize: 75
    });
    var randomId = Math.random().toString(36).substring(2).replace(/\d/g, "");
    test.content.style.padding = "0.5em";
    test.content.classList.add("chat-box-margin");
    test.content.innerHTML = `
  <div class="chat-log">
  </div>
  <div class="chat-controls footer">
    <div class="input-group padding-5-lr">
      <input type="text" class="crosstalk-message ${randomId} form-control" placeholder="Message #Crosstalk">
      <div class="input-group-append">
        <button class="send-message ${randomId}">+</button>
      </div>
    </div>
  </div>
 `;
    var input = document.querySelector(`input.${randomId}`);
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(`button.${randomId}`).click();
      }
    });
    var chatIndex = 0;
    test.on("close", function(event) {
      test.open();
    });
    test.once("open", function(event) {
      var messageLog = test.win.querySelector("div.chat-log");
      var bloop = document.getElementById("bloop");
      function sendMessage(index) {
        if (index >= chats.length) {
          var event2 = new Event("chatOver");
          document.dispatchEvent(event2);
          return;
        } else {
          var newChat = document.createElement("p");
          newChat.innerHTML = chats[index];
          messageLog.appendChild(newChat);
          linkify(newChat);
          bloop.play();
          test.focus();
          newChat.scrollIntoView();
          setTimeout(function() {
            sendMessage(index + 1);
          }, 2e3 + 6e3 * Math.random());
        }
      }
      function linkify(newChat) {
        var link = newChat.querySelector("a.browser-link");
        if (link != null) {
          link.addEventListener("click", function(event2) {
            event2.preventDefault();
            browser(wm2, link.href);
          });
        }
      }
      sendMessage(chatIndex);
    });
    document.addEventListener("click", function(event) {
      if (event.target.classList.contains("send-message")) {
        var messageLog = test.win.querySelector("div.chat-log");
        var messageInput = test.win.querySelector("input.crosstalk-message");
        var newChat = document.createElement("p");
        var newChat = document.createElement("p");
        newChat.classList.add("chat-me");
        newChat.innerHTML = `
      <br/>
      <b>You \u{1F47B}</b><i> a moment ago</i>
      <br/>
      ${messageInput.value}
      </p>
      `;
        messageLog.appendChild(newChat);
        newChat.scrollIntoView();
        messageInput.value = "";
      }
    });
    return test;
  }
  function wizardChat(wm2) {
    const test = wm2.createWindow({
      width: 300,
      height: 600,
      x: 800,
      y: 15,
      title: `Wizard \u{1F52E} via Crosstalk`,
      maximizable: false,
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px"
    });
    test.content.style.padding = "0.5em";
    test.content.classList.add("chat-box-margin");
    test.content.innerHTML = `
  <div class="chat-log">
    <p><b>Wizard</b> \u{1F52E} <i>a moment ago</i></p>
    <p>Hello, I'm the Wizard. I try to be helpful. (But I'm still just a shitty wizard. Sorry!) Type something and click the "+" to send your message.
  </div>
  <div class="chat-controls footer">
    <div class="input-group padding-5-lr">
      <input type="text" class="wizard crosstalk-message form-control" placeholder="Message #Crosstalk">
      <div class="input-group-append">
        <button class="send-message-to-wizard">+</button>
      </div>
    </div>
  </div>
 `;
    var responses = [
      "Yes!",
      "No.",
      "Signs point to maybe.",
      "I'm the wizard.",
      "Try asking Dave.",
      "Let me Google that for you",
      "Would you look at that",
      "Abracadabra",
      "You don't say!",
      "Do you know what I say when I hear something like that? I say would you look at that!",
      "Hmmm",
      "\u{1F3A9}",
      "\u{1F430}"
    ];
    var input = document.querySelector("input.wizard");
    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("button.send-message-to-wizard").click();
      }
    });
    document.addEventListener("click", function(event) {
      if (event.target.classList.contains("send-message-to-wizard")) {
        var messageLog = test.win.querySelector("div.chat-log");
        var messageInput = test.win.querySelector("input.crosstalk-message");
        var newChat = document.createElement("p");
        newChat.classList.add("chat-me");
        newChat.innerHTML = `
      <br/>
      <b>You \u{1F47B}</b><i> a moment ago</i>
      <br/>
      ${messageInput.value}
      </p>
      `;
        messageLog.appendChild(newChat);
        newChat.scrollIntoView();
        messageInput.value = "";
        setTimeout(function() {
          var response = responses[Math.floor(Math.random() * responses.length)];
          var newChat2 = document.createElement("p");
          newChat2.innerHTML = `
        <br/>
        <b>Wizard</b> \u{1F52E} <i>a moment ago</i>
        <br/>
        ${response}
        </p>
        `;
          messageLog.appendChild(newChat2);
          newChat2.scrollIntoView();
        }, 1e3);
      }
    });
    return test;
  }
  function browser(wm2, source) {
    const test = wm2.createWindow({
      width: 800,
      height: 600,
      x: 100,
      y: 100,
      backgroundColorWindow: "#ffffff",
      titlebarHeight: "45px",
      title: "NetSquirrelNavigator",
      backgroundColorTitlebarActive: "#7eb4f8",
      backgroundColorTitlebarInactive: "#97b4d8",
      borderRadius: "0px",
      minimizable: true,
      maximizable: false,
      closable: false,
      minimizeSize: 200,
      resizable: true
    });
    test.content.style.padding = "0.5em";
    test.content.innerHTML = `
  <iframe frameborder="0" class="full-frame" src=${source}></iframe>
  `;
    test.open();
  }

  // docs/js/intro.js
  function runQuiz() {
    var score2 = 0;
    document.addEventListener("click", function(event) {
      if (event.target.classList.contains("button-question")) {
        event.preventDefault();
        var context = questionContext();
        score2 = score2 + parseInt(event.target.value);
        context.currentQuestion.classList.add("invisible");
        context.audio.addEventListener("ended", function() {
          if (context.nextQuestion != null) {
            context.nextQuestion.classList.remove("invisible");
            context.dialog.classList.add("invisible");
          } else {
            var scoreEvent = new CustomEvent("calculateScore", { detail: score2 });
            document.dispatchEvent(scoreEvent);
            document.getElementById("submit-quiz").classList.remove("invisible");
            document.getElementById("final-dialog").classList.add("invisible");
          }
        });
        context.audio.addEventListener("play", function() {
          if (context.nextQuestion != null) {
            context.dialog.classList.remove("invisible");
          } else {
            document.getElementById("final-dialog").classList.remove("invisible");
          }
        });
        context.audio.play();
      }
    });
  }
  function questionContext() {
    var visible;
    var questions = document.getElementsByClassName("question");
    var qIndex = 0;
    for (var i = 0; i < questions.length; i += 1) {
      if (!questions[i].classList.contains("invisible")) {
        visible = questions[i];
        qIndex = i;
      }
    }
    var audio = visible.querySelector("audio");
    var dialog = visible.querySelector("p.dialog");
    return {
      audio,
      currentQuestion: visible.querySelector("div.question-and-buttons"),
      nextQuestion: questions[qIndex + 1],
      dialog
    };
  }
  function titleScreen(wm2) {
    const test = wm2.createWindow({
      width: 1200,
      height: 800,
      x: 100,
      y: 100,
      titlebar: false,
      maximizable: false,
      minimizable: false,
      resizable: false,
      closable: false,
      movable: false
    });
    test.content.style.padding = "0.5em";
    test.content.style.backgroundColor = "black";
    test.content.style.color = "white";
    test.content.innerHTML = `
  <div class="centered title-text">
    <p class="mb-4">
      This is (I Know You're Having Fun But) I'm Still Working, a game by Ryan, Chris, and Casey.
    </p>
    <p class="mb-4">
      In this game you'll contribute to ecology data while dealing with a workplace that likes to have just a little too much fun. It is best enjoyed in full screen with sound on. Your choices in the beginning will affect the content of the game.
    </p>

    <p class="mb-4">If you'd like to contribute to ecology data without the fun visit <a href="https://instantwild.zsl.org">instantwild.zsl.org</a></p>
    <button id="start-game" class="sbtn mt-5">Get To Work</button>
  </div>
    <audio id="audio-introduction"  src="audios/clip1.mp3" type="audio/mp3"> </audio>
    <p class="dialog intro-dialog invisible"><i>
      "Hey bud! Looks like you're the only one who made it back from orientation! Ha! We like to have fun around here! Ahhhhhh but no seriously, we do very important work here at GlobalEarth. Before we get you started on the database we want to see how you're going to fit in around here. Just answer the questions as honestly as possible."
    </i></p>
  `;
    test.win.addEventListener("test", function() {
      alert("wow");
    });
    return test;
  }
  function quiz(wm2) {
    const test = wm2.createWindow({
      width: 1200,
      height: 800,
      x: 100,
      y: 100,
      titlebar: false,
      maximizable: false,
      minimizable: false,
      resizable: false,
      closable: false,
      movable: false
    });
    test.content.style.padding = "0.5em";
    test.content.style.backgroundColor = "black";
    test.content.style.color = "white";
    test.content.innerHTML = `
    <form id="quiz">
      <fieldset id="group1" class="centered question">
        <div class="question-and-buttons">
          <p class="mb-5 question-text">I lose interest quickly if I don't get to learn new things.</p>
          <button class="button-question sbtn mr-3" value=1 name="group1">Always</button>
          <button class="button-question sbtn mr-3" value=2 name="group1">Sometimes</button>
          <button class="button-question sbtn" value=3 name="group1">Never</button>
        </div>
        <audio src="audios/clip2.mp3" type="audio/mp3"></audio>
        <p class="dialog invisible "><i>
        "Two hundred and fifty slides on parking policies and pensions. HR loses as many people as they hire!"
        </i></p>
      </fieldset>

      <fieldset id="group2" class="centered question invisible">
        <div class="question-and-buttons">
          <p class="mb-5 question-text">I believe stories are the best way to get a point across.</p>
          <button class="button-question sbtn mr-3" value=1 name="group1">Always</button>
          <button class="button-question sbtn mr-3" value=2 name="group1">Sometimes</button>
          <button class="button-question sbtn" value=3 name="group1">Never</button>
        </div>
        <audio src="audios/clip3.mp3" type="audio/mp3"></audio>
        <p class=" invisible dialog"><i>
        "Oh boy we love to tell stories around here! Dave in HR was telling me about a growth on his\u2026 Well let me just say that I'd have to speak with Dave in HR if I told you"
        </i></p>
      </fieldset>

      <fieldset id="group3" class="centered question invisible">
        <div class="question-and-buttons">
          <p class="mb-5 question-text">I need to take control of situations that seem to be out of control.</p>
          <button class="button-question sbtn mr-3" value=1 name="group1">Always</button>
          <button class="button-question sbtn mr-3" value=2 name="group1">Sometimes</button>
          <button class="button-question sbtn" value=3 name="group1">Never</button>
        </div>
        <audio src="audios/clip4.mp3" type="audio/mp3"></audio>
        <p class=" invisible dialog"><i>
        "You know who's out of control!? That Dave in HR! But you saw the orientation Power Point, you know"
        </i></p>
      </fieldset>

      <fieldset id="group4" class="centered question invisible">
        <div class="question-and-buttons">
          <p class="mb-5 question-text">I believe that even the most disadvantageous peace is better than any direct conflict.</p>
          <button class="button-question sbtn mr-3" value=1 name="group1">Always</button>
          <button class="button-question sbtn mr-3" value=2 name="group1">Sometimes</button>
          <button class="button-question sbtn" value=3 name="group1">Never</button>
        </div>
        <audio src="audios/clip5.mp3" type="audio/mp3"></audio>
        <p class=" invisible dialog"><i>
        "A girl in college told me I have a disadvantageous peace HEY OH!!!"
        </i></p>
      </fieldset>

      <fieldset id="group5" class="centered question invisible">
        <div class="question-and-buttons">
          <p class="mb-5 question-text">I find it difficult to incorporate new ideas with my existing world view.</p>
          <button class="button-question sbtn mr-3" value=1 name="group1">Always</button>
          <button class="button-question sbtn mr-3" value=2 name="group1">Sometimes</button>
          <button class="button-question sbtn" value=3 name="group1">Never</button>
        </div>
        <audio src="audios/clip6.mp3" type="audio/mp3"></audio>
      </fieldset>
      <p class="dialog invisible" id="final-dialog"><i>
        "OK BOOMER! (Laughs uncontrollably) Dave says we can't say it in interviews anymore but you're already hired! (More loud obnoxious laughter)"
        <br/>
        Knock on the door
        <br/>
        (Outside voice)
        "I know you're having fun, but I'm still working"

        <br/>
        </i>
      </p>
      <div class="centered">
        <button class="invisible centered sbtn start-working" id="submit-quiz">Log In</button>
      </div>
  </form>
`;
    return test;
  }

  // docs/js/game_over.js
  function gameOver(wm2) {
    const test = wm2.createWindow({
      width: 1200,
      height: 800,
      x: 100,
      y: 100,
      titlebar: false,
      borderRadius: "0px"
    });
    test.content.style.padding = "0.5em";
    test.content.innerHTML = `
  <div class="centered mt-9000">
  <h1>Time's up!</h1>
  <p class="mt-4 mb-4">How was your first day? You spent it identifying animals? What? Who told you to do that?</p>
  <button class="sbtn" onclick="window.location.reload()">Start Over</button>
  </div>
  `;
    wm2.closeAll();
    test.open();
  }

  // docs/js/game.js
  var import_simple_window_manager = __toESM(require_window_manager());
  var wm = new import_simple_window_manager.default({
    borderRadius: "10px"
  });
  wm.overlay.innerHTML = `
  <audio class="os-start" src="audios/mac.mp3" type="audio/mp3"></audio>
  <audio class="os-start" src="audios/windowsme.mp3" type="audio/mp3"></audio>
  <audio class="os-start" src="audios/windows31.mp3" type="audio/mp3"></audio>
  <audio id="bloop" src="audios/bloop.mp3" type="audio/mp3"></audio>
  <audio loop id="room-tone" src="audios/room_tone.mp3" type="audio/mp3"></audio>
  <audio id="intro-music" src="audios/louis_zong_intro.mp3" type="audio/mp3"></audio>
`;
  wm.overlay.style.backgroundColor = "black";
  var score = 0;
  var quizWindow = quiz(wm);
  var titleScreenWindow = titleScreen(wm);
  var movementInterval = 19e3;
  var resizeInterval = 1e4;
  var gameDuration = 926e3;
  var playWindowOpensAt = 2e4;
  var bsodTimer = 3e5;
  var videos = [
    "v538817827",
    "v538881620",
    "v538884216"
  ];
  var wallpapers = [
    "images/windows.jpg",
    "images/vista.jpg",
    "images/snow_leopard.jpg"
  ];
  window.onload = () => {
    titleScreenWindow.open();
    document.getElementById("start-game").addEventListener("click", function(event) {
      event.preventDefault();
      var audio = document.getElementById("audio-introduction");
      var intro_music = document.getElementById("intro-music");
      audio.addEventListener("ended", function() {
        titleScreenWindow.close();
        quizWindow.open();
      });
      audio.addEventListener("play", function() {
        document.querySelector("p.intro-dialog").classList.remove("invisible");
        document.querySelector("div.title-text").classList.add("invisible");
      });
      audio.play();
      intro_music.play();
    });
    document.addEventListener("calculateScore", function(event) {
      score = event.detail;
    });
    runQuiz();
    window.addEventListener("scroll", function(event) {
      window.scroll(0, 0);
    });
    document.getElementById("submit-quiz").addEventListener("click", function(event) {
      event.preventDefault();
      quizWindow.close();
      desktop(score);
      document.getElementById("room-tone").play();
      startBSODTimer();
      startGameTimer(wm);
    });
  };
  function startGameTimer(wm2) {
    window.setTimeout(function() {
      console.log("sending game over event");
      var event = new Event("gameOver");
      document.dispatchEvent(event);
    }, gameDuration);
    document.addEventListener("gameOver", function() {
      console.log("game over event recieved by document");
      gameOver(wm2);
    });
  }
  function desktop(score2) {
    var workWindow = work(wm);
    var scoreIndex = scoreToIndex(score2);
    var video = videos[scoreIndex];
    var bg = wallpapers[scoreIndex];
    var playWindow = play(video, wm);
    wm.overlay.style.backgroundImage = `url(${bg})`;
    wm.overlay.style.backgroundSize = `cover`;
    document.querySelectorAll("audio.os-start")[scoreIndex].play();
    appIcon("work", workWindow, 20, 20, "images/work.png", wm).open({ noFocus: true });
    appIcon("play", playWindow, 140, 20, "images/twitch.png", wm).open({ noFocus: true });
    appIcon("text", textEditor(wm), 260, 20, "images/text.png", wm).open({ noFocus: true });
    appIcon("trash", dumpster(wm), 380, 20, "images/trash.png", wm).open({ noFocus: true });
    var chatIcon = appIcon("chat", wizardChat(wm), 500, 20, "images/chat.png", wm).open({ noFocus: true });
    scheduleChats(wm, chatIcon);
    titleSplash(wm).open();
    setTimeout(function() {
      if (playWindow.closed) {
        playWindow.open();
      }
    }, playWindowOpensAt);
    playWindow.on("open", function() {
      window.setInterval(function() {
        var timeUntilMove = Math.random() * movementInterval;
        if (Math.random() > 0.5) {
          window.setTimeout(function() {
            moveWindow(playWindow, workWindow, 5 + Math.random() * 10);
          }, timeUntilMove);
          ;
        }
      }, movementInterval);
      window.setInterval(function() {
        var timeUntilResize = Math.random() * resizeInterval;
        if (Math.random() > 0.5) {
          window.setTimeout(function() {
            resizeWindow(playWindow, Math.random() * 10);
          }, timeUntilResize);
          ;
        }
      }, resizeInterval);
    });
    function scoreToIndex(score3) {
      if (score3 <= 8.33) {
        return 0;
      } else if (score3 <= 11.66) {
        return 1;
      } else {
        return 2;
      }
    }
  }
  function startBSODTimer() {
    setTimeout(function() {
      var event = new Event("pauseStream");
      document.dispatchEvent(event);
      var bsod = document.createElement("div");
      bsod.classList.add("bsod");
      bsod.id = "bsod";
      bsod.innerHTML = `
    <audio class="os-error" src="audios/error.mp3" type="audio/mp3"></audio>
		<div class="bsod-message mt-9000">
			<p>
			Some shits gone seriously wrong with your junk.
			NOW_EYE_AM_BECM_DETH_DSTRYR_O_WRLDS<br/>
			Through me you pass into the city of woe, Through me you pass into eternal pain, Through me among the people lost for aye.
			</p>
			<p>
			Justice the founder of my fabric mov'd, To rear me was the task of power divine, Supremest wisdom, and primeval love.
			</p>

			<p>
			Before me things create were none, save things. Eternal, and eternal I endure.<br/>
			All hope abandon ye who enter here.
			</p>

			<p>
			Technical information:<br/>
			*** STOP: 0xD00000001 (0xBaB00, 0xScaD00, 0xBaB00ScaD00)<br/>
			*** strt1.sys - Address 4VideoGamesAve, base at G1000, DateStamp 420xx69xx<br/>
			A grenade rolls down a hill<br/>
			The System Administrator will remember that. Make sure you do too.
			</p>

			<p>Press space to continue.</p>
		</div>
    `;
      document.querySelector(".bsod-point").appendChild(bsod);
      var audio = document.querySelector("audio.os-error");
      audio.play();
      var event = new Event("pauseStream");
      document.dispatchEvent(event);
      var removeBsod = function(e) {
        if (e.keyCode == 32 && !bsod.classList.contains("invisible")) {
          bsod.classList.add("invisible");
          var event2 = new Event("playStream");
          document.dispatchEvent(event2);
        }
      };
      document.addEventListener("keypress", removeBsod);
    }, bsodTimer);
  }
})();
