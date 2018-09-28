/* MooTools: the javascript framework. license: MIT-style license. copyright: Copyright (c) 2006-2018 [Valerio Proietti](https://mootools.net/).*/
/*!
Web Build: https://mootools.net/more/builder/444dd8f9b276db91102332672b694443
*/
! function() {
    function e(e, t, n) {
        if (r)
            for (var s = r.length; s--;) {
                var a = r[s];
                i.call(e, a) && t.call(n, a, e[a])
            }
    }
    this.MooTools = { version: "1.6.0", build: "529422872adfff401b901b8b6c7ca5114ee95e2b" };
    var t = this.typeOf = function(e) { if (null == e) return "null"; if (null != e.$family) return e.$family(); if (e.nodeName) { if (1 == e.nodeType) return "element"; if (3 == e.nodeType) return /\S/.test(e.nodeValue) ? "textnode" : "whitespace" } else if ("number" == typeof e.length) { if ("callee" in e) return "arguments"; if ("item" in e) return "collection" } return typeof e },
        n = this.instanceOf = function(e, t) {
            if (null == e) return !1;
            for (var n = e.$constructor || e.constructor; n;) {
                if (n === t) return !0;
                n = n.parent
            }
            return !!e.hasOwnProperty && e instanceof t
        },
        i = Object.prototype.hasOwnProperty,
        r = !0;
    for (var s in { toString: 1 }) r = null;
    r && (r = ["hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor"]);
    var a = this.Function;
    a.prototype.overloadSetter = function(t) {
        var n = this;
        return function(i, r) {
            if (null == i) return this;
            if (t || "string" != typeof i) {
                for (var s in i) n.call(this, s, i[s]);
                e(i, n, this)
            } else n.call(this, i, r);
            return this
        }
    }, a.prototype.overloadGetter = function(e) { var t = this; return function(n) { var i, r; if ("string" != typeof n ? i = n : arguments.length > 1 ? i = arguments : e && (i = [n]), i) { r = {}; for (var s = 0; s < i.length; s++) r[i[s]] = t.call(this, i[s]) } else r = t.call(this, n); return r } }, a.prototype.extend = function(e, t) { this[e] = t }.overloadSetter(), a.prototype.implement = function(e, t) { this.prototype[e] = t }.overloadSetter();
    var o = Array.prototype.slice;
    Array.convert = function(e) { return null == e ? [] : l.isEnumerable(e) && "string" != typeof e ? "array" == t(e) ? e : o.call(e) : [e] }, a.convert = function(e) { return "function" == t(e) ? e : function() { return e } }, Number.convert = function(e) { var t = parseFloat(e); return isFinite(t) ? t : null }, String.convert = function(e) { return e + "" }, Array.from = Array.convert, a.from = a.convert, Number.from = Number.convert, String.from = String.convert, a.implement({ hide: function() { return this.$hidden = !0, this }, protect: function() { return this.$protected = !0, this } });
    var l = this.Type = function(e, n) {
            if (e) {
                var i = e.toLowerCase(),
                    r = function(e) { return t(e) == i };
                l["is" + e] = r, null != n && (n.prototype.$family = function() { return i }.hide(), n.type = r)
            }
            return null == n ? null : (n.extend(this), n.$constructor = l, n.prototype.$constructor = n, n)
        },
        u = Object.prototype.toString;
    l.isEnumerable = function(e) { return null != e && "number" == typeof e.length && "[object Function]" != u.call(e) };
    var h = {},
        c = function(e) { var n = t(e.prototype); return h[n] || (h[n] = []) },
        d = function(e, n) {
            if (!n || !n.$hidden) {
                for (var i = c(this), r = 0; r < i.length; r++) { var s = i[r]; "type" == t(s) ? d.call(s, e, n) : s.call(this, e, n) }
                var a = this.prototype[e];
                null != a && a.$protected || (this.prototype[e] = n), null == this[e] && "function" == t(n) && m.call(this, e, function(e) { return n.apply(e, o.call(arguments, 1)) })
            }
        },
        m = function(e, t) {
            if (!t || !t.$hidden) {
                var n = this[e];
                null != n && n.$protected || (this[e] = t)
            }
        };
    l.implement({ implement: d.overloadSetter(), extend: m.overloadSetter(), alias: function(e, t) { d.call(this, e, this.prototype[t]) }.overloadSetter(), mirror: function(e) { return c(this).push(e), this } }), new l("Type", l);
    var f = function(e, t, n) {
        var i = t != Object,
            r = t.prototype;
        i && (t = new l(e, t));
        for (var s = 0, a = n.length; s < a; s++) {
            var o = n[s],
                u = t[o],
                h = r[o];
            u && u.protect(), i && h && t.implement(o, h.protect())
        }
        if (i) {
            var c = r.propertyIsEnumerable(n[0]);
            t.forEachMethod = function(e) {
                if (!c)
                    for (var t = 0, i = n.length; t < i; t++) e.call(r, r[n[t]], n[t]);
                for (var s in r) e.call(r, r[s], s)
            }
        }
        return f
    };
    f("String", String, ["charAt", "charCodeAt", "concat", "contains", "indexOf", "lastIndexOf", "match", "quote", "replace", "search", "slice", "split", "substr", "substring", "trim", "toLowerCase", "toUpperCase"])("Array", Array, ["pop", "push", "reverse", "shift", "sort", "splice", "unshift", "concat", "join", "slice", "indexOf", "lastIndexOf", "filter", "forEach", "every", "map", "some", "reduce", "reduceRight", "contains"])("Number", Number, ["toExponential", "toFixed", "toLocaleString", "toPrecision"])("Function", a, ["apply", "call", "bind"])("RegExp", RegExp, ["exec", "test"])("Object", Object, ["create", "defineProperty", "defineProperties", "keys", "getPrototypeOf", "getOwnPropertyDescriptor", "getOwnPropertyNames", "preventExtensions", "isExtensible", "seal", "isSealed", "freeze", "isFrozen"])("Date", Date, ["now"]), Object.extend = m.overloadSetter(), Date.extend("now", function() { return +new Date }), new l("Boolean", Boolean), Number.prototype.$family = function() { return isFinite(this) ? "number" : "null" }.hide(), Number.extend("random", function(e, t) { return Math.floor(Math.random() * (t - e + 1) + e) }), Array.implement({ forEach: function(e, t) { for (var n = 0, i = this.length; n < i; n++) n in this && e.call(t, this[n], n, this) }, each: function(e, t) { return Array.forEach(this, e, t), this } }), Object.extend({ keys: function(t) { var n = []; for (var r in t) i.call(t, r) && n.push(r); return e(t, function(e) { n.push(e) }), n }, forEach: function(e, t, n) { Object.keys(e).forEach(function(i) { t.call(n, e[i], i, e) }) } }), Object.each = Object.forEach;
    var p = function(e) {
        switch (t(e)) {
            case "array":
                return e.clone();
            case "object":
                return Object.clone(e);
            default:
                return e
        }
    };
    Array.implement("clone", function() { for (var e = this.length, t = new Array(e); e--;) t[e] = p(this[e]); return t });
    var g = function(e, n, i) {
        switch (t(i)) {
            case "object":
                "object" == t(e[n]) ? Object.merge(e[n], i) : e[n] = Object.clone(i);
                break;
            case "array":
                e[n] = i.clone();
                break;
            default:
                e[n] = i
        }
        return e
    };
    Object.extend({ merge: function(e, n, i) { if ("string" == t(n)) return g(e, n, i); for (var r = 1, s = arguments.length; r < s; r++) { var a = arguments[r]; for (var o in a) g(e, o, a[o]) } return e }, clone: function(e) { var t = {}; for (var n in e) t[n] = p(e[n]); return t }, append: function(e) { for (var t = 1, n = arguments.length; t < n; t++) { var i = arguments[t] || {}; for (var r in i) e[r] = i[r] } return e } }), ["Object", "WhiteSpace", "TextNode", "Collection", "Arguments"].each(function(e) { new l(e) });
    var v = Date.now();
    String.extend("uniqueID", function() { return (v++).toString(36) });
    var y = this.Hash = new l("Hash", function(e) { "hash" == t(e) && (e = Object.clone(e.getClean())); for (var n in e) this[n] = e[n]; return this });
    y.implement({ forEach: function(e, t) { Object.forEach(this, e, t) }, getClean: function() { var e = {}; for (var t in this) this.hasOwnProperty(t) && (e[t] = this[t]); return e }, getLength: function() { var e = 0; for (var t in this) this.hasOwnProperty(t) && e++; return e } }), y.alias("each", "forEach"), Object.type = l.isObject;
    var b = this.Native = function(e) { return new l(e.name, e.initialize) };
    b.type = l.type, b.implement = function(e, t) { for (var n = 0; n < e.length; n++) e[n].implement(t); return b };
    var k = Array.type;
    Array.type = function(e) { return n(e, Array) || k(e) }, this.$A = function(e) { return Array.convert(e).slice() }, this.$arguments = function(e) { return function() { return arguments[e] } }, this.$chk = function(e) { return !(!e && 0 !== e) }, this.$clear = function(e) { return clearTimeout(e), clearInterval(e), null }, this.$defined = function(e) { return null != e }, this.$each = function(e, n, i) {
        var r = t(e);
        ("arguments" == r || "collection" == r || "array" == r || "elements" == r ? Array : Object).each(e, n, i)
    }, this.$empty = function() {}, this.$extend = function(e, t) { return Object.append(e, t) }, this.$H = function(e) { return new y(e) }, this.$merge = function() { var e = Array.slice(arguments); return e.unshift({}), Object.merge.apply(null, e) }, this.$lambda = a.convert, this.$mixin = Object.merge, this.$random = Number.random, this.$splat = Array.convert, this.$time = Date.now, this.$type = function(e) { var n = t(e); return "elements" == n ? "array" : "null" != n && n }, this.$unlink = function(e) {
        switch (t(e)) {
            case "object":
                return Object.clone(e);
            case "array":
                return Array.clone(e);
            case "hash":
                return new y(e);
            default:
                return e
        }
    }
}(), Array.implement({
    every: function(e, t) {
        for (var n = 0, i = this.length >>> 0; n < i; n++)
            if (n in this && !e.call(t, this[n], n, this)) return !1;
        return !0
    },
    filter: function(e, t) { for (var n, i = [], r = 0, s = this.length >>> 0; r < s; r++) r in this && (n = this[r], e.call(t, n, r, this) && i.push(n)); return i },
    indexOf: function(e, t) {
        for (var n = this.length >>> 0, i = t < 0 ? Math.max(0, n + t) : t || 0; i < n; i++)
            if (this[i] === e) return i;
        return -1
    },
    map: function(e, t) { for (var n = this.length >>> 0, i = Array(n), r = 0; r < n; r++) r in this && (i[r] = e.call(t, this[r], r, this)); return i },
    some: function(e, t) {
        for (var n = 0, i = this.length >>> 0; n < i; n++)
            if (n in this && e.call(t, this[n], n, this)) return !0;
        return !1
    },
    clean: function() { return this.filter(function(e) { return null != e }) },
    invoke: function(e) { var t = Array.slice(arguments, 1); return this.map(function(n) { return n[e].apply(n, t) }) },
    associate: function(e) { for (var t = {}, n = Math.min(this.length, e.length), i = 0; i < n; i++) t[e[i]] = this[i]; return t },
    link: function(e) {
        for (var t = {}, n = 0, i = this.length; n < i; n++)
            for (var r in e)
                if (e[r](this[n])) { t[r] = this[n], delete e[r]; break }
        return t
    },
    contains: function(e, t) { return -1 != this.indexOf(e, t) },
    append: function(e) { return this.push.apply(this, e), this },
    getLast: function() { return this.length ? this[this.length - 1] : null },
    getRandom: function() { return this.length ? this[Number.random(0, this.length - 1)] : null },
    include: function(e) { return this.contains(e) || this.push(e), this },
    combine: function(e) { for (var t = 0, n = e.length; t < n; t++) this.include(e[t]); return this },
    erase: function(e) { for (var t = this.length; t--;) this[t] === e && this.splice(t, 1); return this },
    empty: function() { return this.length = 0, this },
    flatten: function() { for (var e = [], t = 0, n = this.length; t < n; t++) { var i = typeOf(this[t]); "null" != i && (e = e.concat("array" == i || "collection" == i || "arguments" == i || instanceOf(this[t], Array) ? Array.flatten(this[t]) : this[t])) } return e },
    pick: function() {
        for (var e = 0, t = this.length; e < t; e++)
            if (null != this[e]) return this[e];
        return null
    },
    hexToRgb: function(e) { if (3 != this.length) return null; var t = this.map(function(e) { return 1 == e.length && (e += e), parseInt(e, 16) }); return e ? t : "rgb(" + t + ")" },
    rgbToHex: function(e) {
        if (this.length < 3) return null;
        if (4 == this.length && 0 == this[3] && !e) return "transparent";
        for (var t = [], n = 0; n < 3; n++) {
            var i = (this[n] - 0).toString(16);
            t.push(1 == i.length ? "0" + i : i)
        }
        return e ? t : "#" + t.join("")
    }
}), Array.alias("extend", "append");
var $pick = this.$pick = function() { return Array.convert(arguments).pick() };
Function.extend({
    attempt: function() {
        for (var e = 0, t = arguments.length; e < t; e++) try { return arguments[e]() } catch (e) {}
        return null
    }
}), Function.implement({
    attempt: function(e, t) { try { return this.apply(t, Array.convert(e)) } catch (e) {} return null },
    bind: function(e) {
        var t = this,
            n = arguments.length > 1 ? Array.slice(arguments, 1) : null,
            i = function() {},
            r = function() {
                var s = e,
                    a = arguments.length;
                this instanceof r && (i.prototype = t.prototype, s = new i);
                var o = n || a ? t.apply(s, n && a ? n.concat(Array.slice(arguments)) : n || arguments) : t.call(s);
                return s == e ? o : s
            };
        return r
    },
    pass: function(e, t) {
        var n = this;
        return null != e && (e = Array.convert(e)),
            function() { return n.apply(t, e || arguments) }
    },
    delay: function(e, t, n) { return setTimeout(this.pass(null == n ? [] : n, t), e) },
    periodical: function(e, t, n) { return setInterval(this.pass(null == n ? [] : n, t), e) }
}), delete Function.prototype.bind, Function.implement({
    create: function(e) {
        var t = this;
        return e = e || {},
            function(n) {
                var i = e.arguments;
                i = null != i ? Array.convert(i) : Array.slice(arguments, e.event ? 1 : 0), e.event && i.unshift(n || window.event);
                var r = function() { return t.apply(e.bind || null, i) };
                return e.delay ? setTimeout(r, e.delay) : e.periodical ? setInterval(r, e.periodical) : e.attempt ? Function.attempt(r) : r()
            }
    },
    bind: function(e, t) {
        var n = this;
        return null != t && (t = Array.convert(t)),
            function() { return n.apply(e, t || arguments) }
    },
    bindWithEvent: function(e, t) {
        var n = this;
        return null != t && (t = Array.convert(t)),
            function(i) { return n.apply(e, null == t ? arguments : [i].concat(t)) }
    },
    run: function(e, t) { return this.apply(t, Array.convert(e)) }
}), Object.create == Function.prototype.create && (Object.create = null);
var $try = Function.attempt;
Number.implement({ limit: function(e, t) { return Math.min(t, Math.max(e, this)) }, round: function(e) { return e = Math.pow(10, e || 0).toFixed(e < 0 ? -e : 0), Math.round(this * e) / e }, times: function(e, t) { for (var n = 0; n < this; n++) e.call(t, n, this) }, toFloat: function() { return parseFloat(this) }, toInt: function(e) { return parseInt(this, e || 10) } }), Number.alias("each", "times"),
    function(e) {
        var t = {};
        e.each(function(e) { Number[e] || (t[e] = function() { return Math[e].apply(null, [this].concat(Array.convert(arguments))) }) }), Number.implement(t)
    }(["abs", "acos", "asin", "atan", "atan2", "ceil", "cos", "exp", "floor", "log", "max", "min", "pow", "sin", "sqrt", "tan"]), String.implement({ contains: function(e, t) { return (t ? String(this).slice(t) : String(this)).indexOf(e) > -1 }, test: function(e, t) { return ("regexp" == typeOf(e) ? e : new RegExp("" + e, t)).test(this) }, trim: function() { return String(this).replace(/^\s+|\s+$/g, "") }, clean: function() { return String(this).replace(/\s+/g, " ").trim() }, camelCase: function() { return String(this).replace(/-\D/g, function(e) { return e.charAt(1).toUpperCase() }) }, hyphenate: function() { return String(this).replace(/[A-Z]/g, function(e) { return "-" + e.charAt(0).toLowerCase() }) }, capitalize: function() { return String(this).replace(/\b[a-z]/g, function(e) { return e.toUpperCase() }) }, escapeRegExp: function() { return String(this).replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") }, toInt: function(e) { return parseInt(this, e || 10) }, toFloat: function() { return parseFloat(this) }, hexToRgb: function(e) { var t = String(this).match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/); return t ? t.slice(1).hexToRgb(e) : null }, rgbToHex: function(e) { var t = String(this).match(/\d{1,3}/g); return t ? t.rgbToHex(e) : null }, substitute: function(e, t) { return String(this).replace(t || /\\?\{([^{}]+)\}/g, function(t, n) { return "\\" == t.charAt(0) ? t.slice(1) : null != e[n] ? e[n] : "" }) } }), String.prototype.contains = function(e, t) { return t ? (t + this + t).indexOf(t + e + t) > -1 : String(this).indexOf(e) > -1 },
    function() {
        var e = this.document,
            t = e.window = this,
            n = function(e, t) { e = e.toLowerCase(), t = t ? t.toLowerCase() : ""; var n = e.match(/(edge)[\s\/:]([\w\d\.]+)/); return n || (n = e.match(/(opera|ie|firefox|chrome|trident|crios|version)[\s\/:]([\w\d\.]+)?.*?(safari|(?:rv[\s\/:]|version[\s\/:])([\w\d\.]+)|$)/) || [null, "unknown", 0]), "trident" == n[1] ? (n[1] = "ie", n[4] && (n[2] = n[4])) : "crios" == n[1] && (n[1] = "chrome"), t = e.match(/ip(?:ad|od|hone)/) ? "ios" : (e.match(/(?:webos|android)/) || e.match(/mac|win|linux/) || ["other"])[0], "win" == t && (t = "windows"), { extend: Function.prototype.extend, name: "version" == n[1] ? n[3] : n[1], version: parseFloat("opera" == n[1] && n[4] ? n[4] : n[2]), platform: t } },
            i = this.Browser = n(navigator.userAgent, navigator.platform);
        "ie" == i.name && e.documentMode && (i.version = e.documentMode), i.extend({ Features: { xpath: !!e.evaluate, air: !!t.runtime, query: !!e.querySelector, json: !!t.JSON }, parseUA: n }), i[i.name] = !0, i[i.name + parseInt(i.version, 10)] = !0, "ie" == i.name && i.version >= "11" && delete i.ie;
        var r = i.platform;
        "windows" == r && (r = "win"), i.Platform = { name: r }, i.Platform[r] = !0, i.Request = function() {
            var e = function() { return new XMLHttpRequest },
                t = function() { return new ActiveXObject("MSXML2.XMLHTTP") },
                n = function() { return new ActiveXObject("Microsoft.XMLHTTP") };
            return Function.attempt(function() { return e(), e }, function() { return t(), t }, function() { return n(), n })
        }(), i.Features.xhr = !!i.Request;
        var s = (Function.attempt(function() { return navigator.plugins["Shockwave Flash"].description }, function() { return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") }) || "0 r0").match(/\d+/g);
        if (i.Plugins = { Flash: { version: Number(s[0] || "0." + s[1]) || 0, build: Number(s[2]) || 0 } }, i.exec = function(n) {
                if (!n) return n;
                if (t.execScript) t.execScript(n);
                else {
                    var i = e.createElement("script");
                    i.setAttribute("type", "text/javascript"), i.text = n, e.head.appendChild(i), e.head.removeChild(i)
                }
                return n
            }, String.implement("stripScripts", function(e) {
                var t = "",
                    n = this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(e, n) { return t += n + "\n", "" });
                return !0 === e ? i.exec(t) : "function" == typeOf(e) && e(t, n), n
            }), i.extend({ Document: this.Document, Window: this.Window, Element: this.Element, Event: this.Event }), this.Window = this.$constructor = new Type("Window", function() {}), this.$family = Function.convert("window").hide(), Window.mirror(function(e, n) { t[e] = n }), this.Document = e.$constructor = new Type("Document", function() {}), e.$family = Function.convert("document").hide(), Document.mirror(function(t, n) { e[t] = n }), e.html = e.documentElement, e.head || (e.head = e.getElementsByTagName("head")[0]), e.execCommand) try { e.execCommand("BackgroundImageCache", !1, !0) } catch (e) {}
        if (this.attachEvent && !this.addEventListener) {
            var a = function() { this.detachEvent("onunload", a), e.head = e.html = e.window = null, t = this.Window = e = null };
            this.attachEvent("onunload", a)
        }
        var o = Array.convert;
        try { o(e.html.childNodes) } catch (e) {
            Array.convert = function(e) { if ("string" != typeof e && Type.isEnumerable(e) && "array" != typeOf(e)) { for (var t = e.length, n = new Array(t); t--;) n[t] = e[t]; return n } return o(e) };
            var l = Array.prototype,
                u = l.slice;
            ["pop", "push", "reverse", "shift", "sort", "splice", "unshift", "concat", "join", "slice"].each(function(e) {
                var t = l[e];
                Array[e] = function(e) { return t.apply(Array.convert(e), u.call(arguments, 1)) }
            })
        }
        i.Platform.ios && (i.Platform.ipod = !0), i.Engine = {};
        var h = function(e, t) { i.Engine.name = e, i.Engine[e + t] = !0, i.Engine.version = t };
        if (i.ie) switch (i.Engine.trident = !0, i.version) {
            case 6:
                h("trident", 4);
                break;
            case 7:
                h("trident", 5);
                break;
            case 8:
                h("trident", 6)
        }
        if (i.firefox && (i.Engine.gecko = !0, i.version >= 3 ? h("gecko", 19) : h("gecko", 18)), i.safari || i.chrome) switch (i.Engine.webkit = !0, i.version) {
            case 2:
                h("webkit", 419);
                break;
            case 3:
                h("webkit", 420);
                break;
            case 4:
                h("webkit", 525)
        }
        if (i.opera && (i.Engine.presto = !0, i.version >= 9.6 ? h("presto", 960) : i.version >= 9.5 ? h("presto", 950) : h("presto", 925)), "unknown" == i.name) switch ((navigator.userAgent.toLowerCase().match(/(?:webkit|khtml|gecko)/) || [])[0]) {
            case "webkit":
            case "khtml":
                i.Engine.webkit = !0;
                break;
            case "gecko":
                i.Engine.gecko = !0
        }
        this.$exec = i.exec
    }(),
    function() {
        var e = this.Class = new Type("Class", function(i) {
                instanceOf(i, Function) && (i = { initialize: i });
                var r = function() {
                    if (n(this), r.$prototyping) return this;
                    this.$caller = null, this.$family = null;
                    var e = this.initialize ? this.initialize.apply(this, arguments) : this;
                    return this.$caller = this.caller = null, e
                }.extend(this).implement(i);
                return r.$constructor = e, r.prototype.$constructor = r, r.prototype.parent = t, r
            }),
            t = function() {
                if (!this.$caller) throw new Error('The method "parent" cannot be called.');
                var e = this.$caller.$name,
                    t = this.$caller.$owner.parent,
                    n = t ? t.prototype[e] : null;
                if (!n) throw new Error('The method "' + e + '" has no parent.');
                return n.apply(this, arguments)
            },
            n = function(e) {
                for (var t in e) {
                    var i = e[t];
                    switch (typeOf(i)) {
                        case "object":
                            var r = function() {};
                            r.prototype = i, e[t] = n(new r);
                            break;
                        case "array":
                            e[t] = i.clone()
                    }
                }
                return e
            },
            i = function(e, t, n) {
                n.$origin && (n = n.$origin);
                var i = function() {
                    if (n.$protected && null == this.$caller) throw new Error('The method "' + t + '" cannot be called.');
                    var e = this.caller,
                        r = this.$caller;
                    this.caller = r, this.$caller = i;
                    var s = n.apply(this, arguments);
                    return this.$caller = r, this.caller = e, s
                }.extend({ $owner: e, $origin: n, $name: t });
                return i
            },
            r = function(t, n, r) {
                if (e.Mutators.hasOwnProperty(t) && null == (n = e.Mutators[t].call(this, n))) return this;
                if ("function" == typeOf(n)) {
                    if (n.$hidden) return this;
                    this.prototype[t] = r ? n : i(this, t, n)
                } else Object.merge(this.prototype, t, n);
                return this
            },
            s = function(e) { e.$prototyping = !0; var t = new e; return delete e.$prototyping, t };
        e.implement("implement", r.overloadSetter()), e.Mutators = { Extends: function(e) { this.parent = e, this.prototype = s(e) }, Implements: function(e) { Array.convert(e).each(function(e) { var t = new e; for (var n in t) r.call(this, n, t[n], !0) }, this) } }
    }(),
    function() {
        this.Chain = new Class({ $chain: [], chain: function() { return this.$chain.append(Array.flatten(arguments)), this }, callChain: function() { return !!this.$chain.length && this.$chain.shift().apply(this, arguments) }, clearChain: function() { return this.$chain.empty(), this } });
        var e = function(e) { return e.replace(/^on([A-Z])/, function(e, t) { return t.toLowerCase() }) };
        this.Events = new Class({
            $events: {},
            addEvent: function(t, n, i) { return t = e(t), n == $empty ? this : (this.$events[t] = (this.$events[t] || []).include(n), i && (n.internal = !0), this) },
            addEvents: function(e) { for (var t in e) this.addEvent(t, e[t]); return this },
            fireEvent: function(t, n, i) { t = e(t); var r = this.$events[t]; return r ? (n = Array.convert(n), r.each(function(e) { i ? e.delay(i, this, n) : e.apply(this, n) }, this), this) : this },
            removeEvent: function(t, n) { t = e(t); var i = this.$events[t]; if (i && !n.internal) { var r = i.indexOf(n); - 1 != r && delete i[r] } return this },
            removeEvents: function(t) {
                var n;
                if ("object" == typeOf(t)) { for (n in t) this.removeEvent(n, t[n]); return this }
                t && (t = e(t));
                for (n in this.$events)
                    if (!t || t == n)
                        for (var i = this.$events[n], r = i.length; r--;) r in i && this.removeEvent(n, i[r]);
                return this
            }
        }), this.Options = new Class({
            setOptions: function() {
                var e = this.options = Object.merge.apply(null, [{}, this.options].append(arguments));
                if (this.addEvent)
                    for (var t in e) "function" == typeOf(e[t]) && /^on[A-Z]/.test(t) && (this.addEvent(t, e[t]), delete e[t]);
                return this
            }
        })
    }(),
    function() {
        function e(i, r) {
            if (i.$thenableState === a)
                if (i === r) n(i, new TypeError("Tried to resolve a thenable with itself."));
                else if (!r || "object" != typeof r && "function" != typeof r) t(i, r);
            else {
                var s;
                try { s = r.then } catch (e) { n(i, e) }
                if ("function" == typeof s) {
                    var o = !1;
                    h(function() { try { s.call(r, function(t) { o || (o = !0, e(i, t)) }, function(e) { o || (o = !0, n(i, e)) }) } catch (e) { o || (o = !0, n(i, e)) } })
                } else t(i, r)
            }
        }

        function t(e, t) { e.$thenableState === a && (e.$thenableResult = t, e.$thenableState = o, r(e)) }

        function n(e, t) { e.$thenableState === a && (e.$thenableResult = t, e.$thenableState = l, r(e)) }

        function i(e) { e.$thenableState !== a && (e.$thenableResult = null, e.$thenableState = a) }

        function r(e) {
            var t, n = e.$thenableState,
                i = e.$thenableResult,
                r = e.$thenableReactions;
            n === o ? (e.$thenableReactions = [], t = "fulfillHandler") : n == l && (e.$thenableReactions = [], t = "rejectHandler"), t && h(s.pass([i, r, t]))
        }

        function s(t, i, r) {
            for (var s = 0, a = i.length; s < a; ++s) {
                var o = i[s],
                    l = o[r];
                if ("Identity" === l) e(o.thenable, t);
                else if ("Thrower" === l) n(o.thenable, t);
                else try { e(o.thenable, l(t)) } catch (e) { n(o.thenable, e) }
            }
        }
        var a = 0,
            o = 1,
            l = 2,
            u = Class.Thenable = new Class({
                $thenableState: a,
                $thenableResult: null,
                $thenableReactions: [],
                resolve: function(t) { return e(this, t), this },
                reject: function(e) { return n(this, e), this },
                getThenableState: function() {
                    switch (this.$thenableState) {
                        case a:
                            return "pending";
                        case o:
                            return "fulfilled";
                        case l:
                            return "rejected"
                    }
                },
                resetThenable: function(e) { return n(this, e), i(this), this },
                then: function(e, t) { "function" != typeof e && (e = "Identity"), "function" != typeof t && (t = "Thrower"); var n = new u; return this.$thenableReactions.push({ thenable: n, fulfillHandler: e, rejectHandler: t }), this.$thenableState !== a && r(this), n },
                catch: function(e) { return this.then(null, e) }
            });
        u.extend({ resolve: function(t) { var n; return t instanceof u ? n = t : (n = new u, e(n, t)), n }, reject: function(e) { var t = new u; return n(t, e), t } });
        var h;
        h = "undefined" != typeof process && "function" == typeof process.nextTick ? process.nextTick : "undefined" != typeof setImmediate ? setImmediate : function(e) { setTimeout(e, 0) }
    }(),
    function() {
        Object.extend({
            subset: function(e, t) {
                for (var n = {}, i = 0, r = t.length; i < r; i++) {
                    var s = t[i];
                    s in e && (n[s] = e[s])
                }
                return n
            },
            map: function(e, t, n) {
                for (var i = {}, r = Object.keys(e), s = 0; s < r.length; s++) {
                    var a = r[s];
                    i[a] = t.call(n, e[a], a, e)
                }
                return i
            },
            filter: function(e, t, n) {
                for (var i = {}, r = Object.keys(e), s = 0; s < r.length; s++) {
                    var a = r[s],
                        o = e[a];
                    t.call(n, o, a, e) && (i[a] = o)
                }
                return i
            },
            every: function(e, t, n) { for (var i = Object.keys(e), r = 0; r < i.length; r++) { var s = i[r]; if (!t.call(n, e[s], s)) return !1 } return !0 },
            some: function(e, t, n) { for (var i = Object.keys(e), r = 0; r < i.length; r++) { var s = i[r]; if (t.call(n, e[s], s)) return !0 } return !1 },
            values: function(e) {
                for (var t = [], n = Object.keys(e), i = 0; i < n.length; i++) {
                    var r = n[i];
                    t.push(e[r])
                }
                return t
            },
            getLength: function(e) { return Object.keys(e).length },
            keyOf: function(e, t) { for (var n = Object.keys(e), i = 0; i < n.length; i++) { var r = n[i]; if (e[r] === t) return r } return null },
            contains: function(e, t) { return null != Object.keyOf(e, t) },
            toQueryString: function(e, t) {
                var n = [];
                return Object.each(e, function(e, i) {
                    t && (i = t + "[" + i + "]");
                    var r;
                    switch (typeOf(e)) {
                        case "object":
                            r = Object.toQueryString(e, i);
                            break;
                        case "array":
                            var s = {};
                            e.each(function(e, t) { s[t] = e }), r = Object.toQueryString(s, i);
                            break;
                        default:
                            r = i + "=" + encodeURIComponent(e)
                    }
                    null != e && n.push(r)
                }), n.join("&")
            }
        })
    }(), Hash.implement({ has: Object.prototype.hasOwnProperty, keyOf: function(e) { return Object.keyOf(this, e) }, hasValue: function(e) { return Object.contains(this, e) }, extend: function(e) { return Hash.each(e || {}, function(e, t) { Hash.set(this, t, e) }, this), this }, combine: function(e) { return Hash.each(e || {}, function(e, t) { Hash.include(this, t, e) }, this), this }, erase: function(e) { return this.hasOwnProperty(e) && delete this[e], this }, get: function(e) { return this.hasOwnProperty(e) ? this[e] : null }, set: function(e, t) { return this[e] && !this.hasOwnProperty(e) || (this[e] = t), this }, empty: function() { return Hash.each(this, function(e, t) { delete this[t] }, this), this }, include: function(e, t) { return null == this[e] && (this[e] = t), this }, map: function(e, t) { return new Hash(Object.map(this, e, t)) }, filter: function(e, t) { return new Hash(Object.filter(this, e, t)) }, every: function(e, t) { return Object.every(this, e, t) }, some: function(e, t) { return Object.some(this, e, t) }, getKeys: function() { return Object.keys(this) }, getValues: function() { return Object.values(this) }, toQueryString: function(e) { return Object.toQueryString(this, e) } }), Hash.extend = Object.append, Hash.alias({ indexOf: "keyOf", contains: "hasValue" }),
    function() {
        function e(e, s, a, l, h, d, m, f, p, g, v, y, b, k, w, S) {
            if ((s || -1 === n) && (t.expressions[++n] = [], i = -1, s)) return "";
            if (a || l || -1 === i) {
                a = a || " ";
                var x = t.expressions[n];
                r && x[i] && (x[i].reverseCombinator = u(a)), x[++i] = { combinator: a, tag: "*" }
            }
            var E = t.expressions[n][i];
            if (h) E.tag = h.replace(o, "");
            else if (d) E.id = d.replace(o, "");
            else if (m) m = m.replace(o, ""), E.classList || (E.classList = []), E.classes || (E.classes = []), E.classList.push(m), E.classes.push({ value: m, regexp: new RegExp("(^|\\s)" + c(m) + "(\\s|$)") });
            else if (b) S = S || w, S = S ? S.replace(o, "") : null, E.pseudos || (E.pseudos = []), E.pseudos.push({ key: b.replace(o, ""), value: S, type: 1 == y.length ? "class" : "element" });
            else if (f) {
                f = f.replace(o, ""), v = (v || "").replace(o, "");
                var A, D;
                switch (p) {
                    case "^=":
                        D = new RegExp("^" + c(v));
                        break;
                    case "$=":
                        D = new RegExp(c(v) + "$");
                        break;
                    case "~=":
                        D = new RegExp("(^|\\s)" + c(v) + "(\\s|$)");
                        break;
                    case "|=":
                        D = new RegExp("^" + c(v) + "(-|$)");
                        break;
                    case "=":
                        A = function(e) { return v == e };
                        break;
                    case "*=":
                        A = function(e) { return e && e.indexOf(v) > -1 };
                        break;
                    case "!=":
                        A = function(e) { return v != e };
                        break;
                    default:
                        A = function(e) { return !!e }
                }
                "" == v && /^[*$^]=$/.test(p) && (A = function() { return !1 }), A || (A = function(e) { return e && D.test(e) }), E.attributes || (E.attributes = []), E.attributes.push({ key: f, operator: p, value: v, test: A })
            }
            return ""
        }
        var t, n, i, r, s = {},
            a = {},
            o = /\\/g,
            l = function(i, o) {
                if (null == i) return null;
                if (!0 === i.Slick) return i;
                i = ("" + i).replace(/^\s+|\s+$/g, ""), r = !!o;
                var u = r ? a : s;
                if (u[i]) return u[i];
                for (t = { Slick: !0, expressions: [], raw: i, reverse: function() { return l(this.raw, !0) } }, n = -1; i != (i = i.replace(d, e)););
                return t.length = t.expressions.length, u[t.raw] = r ? h(t) : t
            },
            u = function(e) { return "!" === e ? " " : " " === e ? "!" : /^!/.test(e) ? e.replace(/^!/, "") : "!" + e },
            h = function(e) {
                for (var t = e.expressions, n = 0; n < t.length; n++) {
                    for (var i = t[n], r = { parts: [], tag: "*", combinator: u(i[0].combinator) }, s = 0; s < i.length; s++) {
                        var a = i[s];
                        a.reverseCombinator || (a.reverseCombinator = " "), a.combinator = a.reverseCombinator, delete a.reverseCombinator
                    }
                    i.reverse().push(r)
                }
                return e
            },
            c = function(e) { return e.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function(e) { return "\\" + e }) },
            d = new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/, "[" + c(">+~`!@$%^&={}\\;</") + "]").replace(/<unicode>/g, "(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g, "(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])")),
            m = this.Slick || {};
        m.parse = function(e) { return l(e) }, m.escapeRegExp = c, this.Slick || (this.Slick = m)
    }.apply("undefined" != typeof exports ? exports : this),
    function() {
        var e = {},
            t = {},
            n = Object.prototype.toString;
        e.isNativeCode = function(e) { return /\{\s*\[native code\]\s*\}/.test("" + e) }, e.isXML = function(e) { return !!e.xmlVersion || !!e.xml || "[object XMLDocument]" == n.call(e) || 9 == e.nodeType && "HTML" != e.documentElement.nodeName }, e.setDocument = function(e) {
            var n = e.nodeType;
            if (9 == n);
            else if (n) e = e.ownerDocument;
            else {
                if (!e.navigator) return;
                e = e.document
            }
            if (this.document !== e) {
                this.document = e;
                var i, r = e.documentElement,
                    s = this.getUIDXML(r),
                    a = t[s];
                if (a)
                    for (i in a) this[i] = a[i];
                else {
                    a = t[s] = {}, a.root = r, a.isXMLDocument = this.isXML(e), a.brokenStarGEBTN = a.starSelectsClosedQSA = a.idGetsName = a.brokenMixedCaseQSA = a.brokenGEBCN = a.brokenCheckedQSA = a.brokenEmptyAttributeQSA = a.isHTMLDocument = a.nativeMatchesSelector = !1;
                    var o, l, u, h, c, d, m = "slick_uniqueid",
                        f = e.createElement("div"),
                        p = e.body || e.getElementsByTagName("body")[0] || r;
                    p.appendChild(f);
                    try { f.innerHTML = '<a id="' + m + '"></a>', a.isHTMLDocument = !!e.getElementById(m) } catch (e) {}
                    if (a.isHTMLDocument) {
                        f.style.display = "none", f.appendChild(e.createComment("")), l = f.getElementsByTagName("*").length > 1;
                        try { f.innerHTML = "foo</foo>", d = f.getElementsByTagName("*"), o = d && !!d.length && "/" == d[0].nodeName.charAt(0) } catch (e) {}
                        a.brokenStarGEBTN = l || o;
                        try { f.innerHTML = '<a name="' + m + '"></a><b id="' + m + '"></b>', a.idGetsName = e.getElementById(m) === f.firstChild } catch (e) {}
                        if (f.getElementsByClassName) {
                            try { f.innerHTML = '<a class="f"></a><a class="b"></a>', f.getElementsByClassName("b").length, f.firstChild.className = "b", h = 2 != f.getElementsByClassName("b").length } catch (e) {}
                            try { f.innerHTML = '<a class="a"></a><a class="f b a"></a>', u = 2 != f.getElementsByClassName("a").length } catch (e) {}
                            a.brokenGEBCN = h || u
                        }
                        if (f.querySelectorAll) { try { f.innerHTML = "foo</foo>", d = f.querySelectorAll("*"), a.starSelectsClosedQSA = d && !!d.length && "/" == d[0].nodeName.charAt(0) } catch (e) {} try { f.innerHTML = '<a class="MiX"></a>', a.brokenMixedCaseQSA = !f.querySelectorAll(".MiX").length } catch (e) {} try { f.innerHTML = '<select><option selected="selected">a</option></select>', a.brokenCheckedQSA = 0 == f.querySelectorAll(":checked").length } catch (e) {} try { f.innerHTML = '<a class=""></a>', a.brokenEmptyAttributeQSA = 0 != f.querySelectorAll('[class*=""]').length } catch (e) {} }
                        try { f.innerHTML = '<form action="s"><input id="action"/></form>', c = "s" != f.firstChild.getAttribute("action") } catch (e) {}
                        if (a.nativeMatchesSelector = r.matches || r.mozMatchesSelector || r.webkitMatchesSelector, a.nativeMatchesSelector) try { a.nativeMatchesSelector.call(r, ":slick"), a.nativeMatchesSelector = null } catch (e) {}
                    }
                    try { r.slick_expando = 1, delete r.slick_expando, a.getUID = this.getUIDHTML } catch (e) { a.getUID = this.getUIDXML }
                    p.removeChild(f), f = d = p = null, a.getAttribute = a.isHTMLDocument && c ? function(e, t) { var n = this.attributeGetters[t]; if (n) return n.call(e); var i = e.getAttributeNode(t); return i ? i.nodeValue : null } : function(e, t) { var n = this.attributeGetters[t]; return n ? n.call(e) : e.getAttribute(t) }, a.hasAttribute = r && this.isNativeCode(r.hasAttribute) ? function(e, t) { return e.hasAttribute(t) } : function(e, t) { return !(!(e = e.getAttributeNode(t)) || !e.specified && !e.nodeValue) };
                    var g = r && this.isNativeCode(r.contains),
                        v = e && this.isNativeCode(e.contains);
                    a.contains = g && v ? function(e, t) { return e.contains(t) } : g && !v ? function(t, n) { return t === n || (t === e ? e.documentElement : t).contains(n) } : r && r.compareDocumentPosition ? function(e, t) { return e === t || !!(16 & e.compareDocumentPosition(t)) } : function(e, t) {
                        if (t)
                            do { if (t === e) return !0 } while (t = t.parentNode);
                        return !1
                    }, a.documentSorter = r.compareDocumentPosition ? function(e, t) { return e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : e === t ? 0 : 1 : 0 } : "sourceIndex" in r ? function(e, t) { return e.sourceIndex && t.sourceIndex ? e.sourceIndex - t.sourceIndex : 0 } : e.createRange ? function(e, t) {
                        if (!e.ownerDocument || !t.ownerDocument) return 0;
                        var n = e.ownerDocument.createRange(),
                            i = t.ownerDocument.createRange();
                        return n.setStart(e, 0), n.setEnd(e, 0), i.setStart(t, 0), i.setEnd(t, 0), n.compareBoundaryPoints(Range.START_TO_END, i)
                    } : null, r = null;
                    for (i in a) this[i] = a[i]
                }
            }
        };
        var i = /^([#.]?)((?:[\w-]+|\*))$/,
            r = /\[.+[*$^]=(?:""|'')?\]/,
            s = {};
        e.search = function(e, t, n, a) {
            var o = this.found = a ? null : n || [];
            if (!e) return o;
            if (e.navigator) e = e.document;
            else if (!e.nodeType) return o;
            var l, u, h, d, m = this.uniques = {},
                f = !(!n || !n.length),
                p = 9 == e.nodeType;
            if (this.document !== (p ? e : e.ownerDocument) && this.setDocument(e), f)
                for (u = o.length; u--;) m[this.getUID(o[u])] = !0;
            if ("string" == typeof t) {
                var g = t.match(i);
                e: if (g) {
                        var v = g[1],
                            y = g[2];
                        if (v) {
                            if ("#" == v) {
                                if (!this.isHTMLDocument || !p) break e;
                                if (!(h = e.getElementById(y))) return o;
                                if (this.idGetsName && h.getAttributeNode("id").nodeValue != y) break e;
                                if (a) return h || null;
                                f && m[this.getUID(h)] || o.push(h)
                            } else if ("." == v) {
                                if (!this.isHTMLDocument || (!e.getElementsByClassName || this.brokenGEBCN) && e.querySelectorAll) break e;
                                if (e.getElementsByClassName && !this.brokenGEBCN) { if (d = e.getElementsByClassName(y), a) return d[0] || null; for (u = 0; h = d[u++];) f && m[this.getUID(h)] || o.push(h) } else {
                                    var b = new RegExp("(^|\\s)" + c.escapeRegExp(y) + "(\\s|$)");
                                    for (d = e.getElementsByTagName("*"), u = 0; h = d[u++];)
                                        if (className = h.className, className && b.test(className)) {
                                            if (a) return h;
                                            f && m[this.getUID(h)] || o.push(h)
                                        }
                                }
                            }
                        } else { if ("*" == y && this.brokenStarGEBTN) break e; if (d = e.getElementsByTagName(y), a) return d[0] || null; for (u = 0; h = d[u++];) f && m[this.getUID(h)] || o.push(h) }
                        return f && this.sort(o), a ? null : o
                    }
                e: if (e.querySelectorAll) {
                        if (!this.isHTMLDocument || s[t] || this.brokenMixedCaseQSA || this.brokenCheckedQSA && t.indexOf(":checked") > -1 || this.brokenEmptyAttributeQSA && r.test(t) || !p && t.indexOf(",") > -1 || c.disableQSA) break e;
                        var k, w = t,
                            S = e;
                        p || (k = S.getAttribute("id"), slickid = "slickid__", S.setAttribute("id", slickid), w = "#" + slickid + " " + w, e = S.parentNode);
                        try {
                            if (a) return e.querySelector(w) || null;
                            d = e.querySelectorAll(w)
                        } catch (e) { s[t] = 1; break e } finally { p || (k ? S.setAttribute("id", k) : S.removeAttribute("id"), e = S) }
                        if (this.starSelectsClosedQSA)
                            for (u = 0; h = d[u++];) !(h.nodeName > "@") || f && m[this.getUID(h)] || o.push(h);
                        else
                            for (u = 0; h = d[u++];) f && m[this.getUID(h)] || o.push(h);
                        return f && this.sort(o), o
                    }
                if (l = this.Slick.parse(t), !l.length) return o
            } else {
                if (null == t) return o;
                if (!t.Slick) return this.contains(e.documentElement || e, t) ? (o ? o.push(t) : o = t, o) : o;
                l = t
            }
            this.posNTH = {}, this.posNTHLast = {}, this.posNTHType = {}, this.posNTHTypeLast = {}, this.push = !f && (a || 1 == l.length && 1 == l.expressions[0].length) ? this.pushArray : this.pushUID, null == o && (o = []);
            var x, E, A, D, M, O, P, C, T, j, z, L, U, N, F = l.expressions;
            e: for (u = 0; L = F[u]; u++)
                for (x = 0; U = L[x]; x++) {
                    if (D = "combinator:" + U.combinator, !this[D]) continue e;
                    if (M = this.isXMLDocument ? U.tag : U.tag.toUpperCase(), O = U.id, P = U.classList, C = U.classes, T = U.attributes, j = U.pseudos, N = x === L.length - 1, this.bitUniques = {}, N ? (this.uniques = m, this.found = o) : (this.uniques = {}, this.found = []), 0 === x) { if (this[D](e, M, O, C, T, j, P), a && N && o.length) break e } else if (a && N) {
                        for (E = 0, A = z.length; E < A; E++)
                            if (this[D](z[E], M, O, C, T, j, P), o.length) break e
                    } else
                        for (E = 0, A = z.length; E < A; E++) this[D](z[E], M, O, C, T, j, P);
                    z = this.found
                }
            return (f || l.expressions.length > 1) && this.sort(o), a ? o[0] || null : o
        }, e.uidx = 1, e.uidk = "slick-uniqueid", e.getUIDXML = function(e) { var t = e.getAttribute(this.uidk); return t || (t = this.uidx++, e.setAttribute(this.uidk, t)), t }, e.getUIDHTML = function(e) { return e.uniqueNumber || (e.uniqueNumber = this.uidx++) }, e.sort = function(e) { return this.documentSorter ? (e.sort(this.documentSorter), e) : e }, e.cacheNTH = {}, e.matchNTH = /^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/, e.parseNTHArgument = function(e) {
            var t = e.match(this.matchNTH);
            if (!t) return !1;
            var n = t[2] || !1,
                i = t[1] || 1;
            "-" == i && (i = -1);
            var r = +t[3] || 0;
            return t = "n" == n ? { a: i, b: r } : "odd" == n ? { a: 2, b: 1 } : "even" == n ? { a: 2, b: 0 } : { a: 0, b: i }, this.cacheNTH[e] = t
        }, e.createNTHPseudo = function(e, t, n, i) {
            return function(r, s) {
                var a = this.getUID(r);
                if (!this[n][a]) {
                    var o = r.parentNode;
                    if (!o) return !1;
                    var l = o[e],
                        u = 1;
                    if (i) {
                        var h = r.nodeName;
                        do { l.nodeName == h && (this[n][this.getUID(l)] = u++) } while (l = l[t])
                    } else
                        do { 1 == l.nodeType && (this[n][this.getUID(l)] = u++) } while (l = l[t])
                }
                s = s || "n";
                var c = this.cacheNTH[s] || this.parseNTHArgument(s);
                if (!c) return !1;
                var d = c.a,
                    m = c.b,
                    f = this[n][a];
                if (0 == d) return m == f;
                if (d > 0) { if (f < m) return !1 } else if (m < f) return !1;
                return (f - m) % d == 0
            }
        }, e.pushArray = function(e, t, n, i, r, s) { this.matchSelector(e, t, n, i, r, s) && this.found.push(e) }, e.pushUID = function(e, t, n, i, r, s) { var a = this.getUID(e);!this.uniques[a] && this.matchSelector(e, t, n, i, r, s) && (this.uniques[a] = !0, this.found.push(e)) }, e.matchNode = function(e, t) {
            if (this.isHTMLDocument && this.nativeMatchesSelector) try { return this.nativeMatchesSelector.call(e, t.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g, '[$1="$2"]')) } catch (e) {}
            var n = this.Slick.parse(t);
            if (!n) return !0;
            var i, r, s = n.expressions,
                a = 0;
            for (i = 0; r = s[i]; i++)
                if (1 == r.length) {
                    var o = r[0];
                    if (this.matchSelector(e, this.isXMLDocument ? o.tag : o.tag.toUpperCase(), o.id, o.classes, o.attributes, o.pseudos)) return !0;
                    a++
                }
            if (a == n.length) return !1;
            var l, u = this.search(this.document, n);
            for (i = 0; l = u[i++];)
                if (l === e) return !0;
            return !1
        }, e.matchPseudo = function(e, t, n) { var i = "pseudo:" + t; if (this[i]) return this[i](e, n); var r = this.getAttribute(e, t); return n ? n == r : !!r }, e.matchSelector = function(e, t, n, i, r, s) {
            if (t) { var a = this.isXMLDocument ? e.nodeName : e.nodeName.toUpperCase(); if ("*" == t) { if (a < "@") return !1 } else if (a != t) return !1 }
            if (n && e.getAttribute("id") != n) return !1;
            var o, l, u;
            if (i)
                for (o = i.length; o--;)
                    if (!(u = this.getAttribute(e, "class")) || !i[o].regexp.test(u)) return !1;
            if (r)
                for (o = r.length; o--;)
                    if (l = r[o], l.operator ? !l.test(this.getAttribute(e, l.key)) : !this.hasAttribute(e, l.key)) return !1;
            if (s)
                for (o = s.length; o--;)
                    if (l = s[o], !this.matchPseudo(e, l.key, l.value)) return !1;
            return !0
        };
        var a = {
            " ": function(e, t, n, i, r, s, a) {
                var o, l, u;
                if (this.isHTMLDocument) { e: if (n) { if (!(l = this.document.getElementById(n)) && e.all || this.idGetsName && l && l.getAttributeNode("id").nodeValue != n) { if (!(u = e.all[n])) return; for (u[0] || (u = [u]), o = 0; l = u[o++];) { var h = l.getAttributeNode("id"); if (h && h.nodeValue == n) { this.push(l, t, null, i, r, s); break } } return } if (!l) { if (this.contains(this.root, e)) return; break e } if (this.document !== e && !this.contains(e, l)) return; return void this.push(l, t, null, i, r, s) }e: if (i && e.getElementsByClassName && !this.brokenGEBCN) { if (!(u = e.getElementsByClassName(a.join(" "))) || !u.length) break e; for (o = 0; l = u[o++];) this.push(l, t, n, null, r, s); return } }
                if ((u = e.getElementsByTagName(t)) && u.length)
                    for (this.brokenStarGEBTN || (t = null), o = 0; l = u[o++];) this.push(l, t, n, i, r, s)
            },
            ">": function(e, t, n, i, r, s) {
                if (e = e.firstChild)
                    do { 1 == e.nodeType && this.push(e, t, n, i, r, s) } while (e = e.nextSibling)
            },
            "+": function(e, t, n, i, r, s) {
                for (; e = e.nextSibling;)
                    if (1 == e.nodeType) { this.push(e, t, n, i, r, s); break }
            },
            "^": function(e, t, n, i, r, s) {
                (e = e.firstChild) && (1 == e.nodeType ? this.push(e, t, n, i, r, s) : this["combinator:+"](e, t, n, i, r, s))
            },
            "~": function(e, t, n, i, r, s) {
                for (; e = e.nextSibling;)
                    if (1 == e.nodeType) {
                        var a = this.getUID(e);
                        if (this.bitUniques[a]) break;
                        this.bitUniques[a] = !0, this.push(e, t, n, i, r, s)
                    }
            },
            "++": function(e, t, n, i, r, s) { this["combinator:+"](e, t, n, i, r, s), this["combinator:!+"](e, t, n, i, r, s) },
            "~~": function(e, t, n, i, r, s) { this["combinator:~"](e, t, n, i, r, s), this["combinator:!~"](e, t, n, i, r, s) },
            "!": function(e, t, n, i, r, s) { for (; e = e.parentNode;) e !== this.document && this.push(e, t, n, i, r, s) },
            "!>": function(e, t, n, i, r, s) {
                (e = e.parentNode) !== this.document && this.push(e, t, n, i, r, s)
            },
            "!+": function(e, t, n, i, r, s) {
                for (; e = e.previousSibling;)
                    if (1 == e.nodeType) { this.push(e, t, n, i, r, s); break }
            },
            "!^": function(e, t, n, i, r, s) {
                (e = e.lastChild) && (1 == e.nodeType ? this.push(e, t, n, i, r, s) : this["combinator:!+"](e, t, n, i, r, s))
            },
            "!~": function(e, t, n, i, r, s) {
                for (; e = e.previousSibling;)
                    if (1 == e.nodeType) {
                        var a = this.getUID(e);
                        if (this.bitUniques[a]) break;
                        this.bitUniques[a] = !0, this.push(e, t, n, i, r, s)
                    }
            }
        };
        for (var o in a) e["combinator:" + o] = a[o];
        var l = {
            empty: function(e) { var t = e.firstChild; return !(t && 1 == t.nodeType || (e.innerText || e.textContent || "").length) },
            not: function(e, t) { return !this.matchNode(e, t) },
            contains: function(e, t) { return (e.innerText || e.textContent || "").indexOf(t) > -1 },
            "first-child": function(e) {
                for (; e = e.previousSibling;)
                    if (1 == e.nodeType) return !1;
                return !0
            },
            "last-child": function(e) {
                for (; e = e.nextSibling;)
                    if (1 == e.nodeType) return !1;
                return !0
            },
            "only-child": function(e) {
                for (var t = e; t = t.previousSibling;)
                    if (1 == t.nodeType) return !1;
                for (var n = e; n = n.nextSibling;)
                    if (1 == n.nodeType) return !1;
                return !0
            },
            "nth-child": e.createNTHPseudo("firstChild", "nextSibling", "posNTH"),
            "nth-last-child": e.createNTHPseudo("lastChild", "previousSibling", "posNTHLast"),
            "nth-of-type": e.createNTHPseudo("firstChild", "nextSibling", "posNTHType", !0),
            "nth-last-of-type": e.createNTHPseudo("lastChild", "previousSibling", "posNTHTypeLast", !0),
            index: function(e, t) { return this["pseudo:nth-child"](e, "" + (t + 1)) },
            even: function(e) { return this["pseudo:nth-child"](e, "2n") },
            odd: function(e) { return this["pseudo:nth-child"](e, "2n+1") },
            "first-of-type": function(e) {
                for (var t = e.nodeName; e = e.previousSibling;)
                    if (e.nodeName == t) return !1;
                return !0
            },
            "last-of-type": function(e) {
                for (var t = e.nodeName; e = e.nextSibling;)
                    if (e.nodeName == t) return !1;
                return !0
            },
            "only-of-type": function(e) {
                for (var t = e, n = e.nodeName; t = t.previousSibling;)
                    if (t.nodeName == n) return !1;
                for (var i = e; i = i.nextSibling;)
                    if (i.nodeName == n) return !1;
                return !0
            },
            enabled: function(e) { return !e.disabled },
            disabled: function(e) { return e.disabled },
            checked: function(e) { return e.checked || e.selected },
            focus: function(e) { return this.isHTMLDocument && this.document.activeElement === e && (e.href || e.type || this.hasAttribute(e, "tabindex")) },
            root: function(e) { return e === this.root },
            selected: function(e) { return e.selected }
        };
        for (var u in l) e["pseudo:" + u] = l[u];
        var h = e.attributeGetters = { for: function() { return "htmlFor" in this ? this.htmlFor : this.getAttribute("for") }, href: function() { return "href" in this ? this.getAttribute("href", 2) : this.getAttribute("href") }, style: function() { return this.style ? this.style.cssText : this.getAttribute("style") }, tabindex: function() { var e = this.getAttributeNode("tabindex"); return e && e.specified ? e.nodeValue : null }, type: function() { return this.getAttribute("type") }, maxlength: function() { var e = this.getAttributeNode("maxLength"); return e && e.specified ? e.nodeValue : null } };
        h.MAXLENGTH = h.maxLength = h.maxlength;
        var c = e.Slick = this.Slick || {};
        c.version = "1.1.7", c.search = function(t, n, i) { return e.search(t, n, i) }, c.find = function(t, n) { return e.search(t, n, null, !0) }, c.contains = function(t, n) { return e.setDocument(t), e.contains(t, n) }, c.getAttribute = function(t, n) { return e.setDocument(t), e.getAttribute(t, n) }, c.hasAttribute = function(t, n) { return e.setDocument(t), e.hasAttribute(t, n) }, c.match = function(t, n) { return !(!t || !n) && (!n || n === t || (e.setDocument(t), e.matchNode(t, n))) }, c.defineAttributeGetter = function(t, n) { return e.attributeGetters[t] = n, this }, c.lookupAttributeGetter = function(t) { return e.attributeGetters[t] }, c.definePseudo = function(t, n) { return e["pseudo:" + t] = function(e, t) { return n.call(e, t) }, this }, c.lookupPseudo = function(t) { var n = e["pseudo:" + t]; return n ? function(e) { return n.call(this, e) } : null }, c.override = function(t, n) { return e.override(t, n), this }, c.isXML = e.isXML, c.uidOf = function(t) { return e.getUIDHTML(t) }, this.Slick || (this.Slick = c)
    }.apply("undefined" != typeof exports ? exports : this);
var Element = this.Element = function(e, t) {
    var n = Element.Constructors[e];
    if (n) return n(t);
    if ("string" != typeof e) return document.id(e).set(t);
    if (t || (t = {}), !/^[\w-]+$/.test(e)) {
        var i = Slick.parse(e).expressions[0][0];
        e = "*" == i.tag ? "div" : i.tag, i.id && null == t.id && (t.id = i.id);
        var r = i.attributes;
        if (r)
            for (var s, a = 0, o = r.length; a < o; a++) s = r[a], null == t[s.key] && (null != s.value && "=" == s.operator ? t[s.key] = s.value : s.value || s.operator || (t[s.key] = !0));
        i.classList && null == t.class && (t.class = i.classList.join(" "))
    }
    return document.newElement(e, t)
};
Browser.Element && (Element.prototype = Browser.Element.prototype, Element.prototype._fireEvent = function(e) { return function(t, n) { return e.call(this, t, n) } }(Element.prototype.fireEvent)), new Type("Element", Element).mirror(function(e) {
    if (!Array.prototype[e]) {
        var t = {};
        t[e] = function() {
            for (var t = [], n = arguments, i = !0, r = 0, s = this.length; r < s; r++) {
                var a = this[r],
                    o = t[r] = a[e].apply(a, n);
                i = i && "element" == typeOf(o)
            }
            return i ? new Elements(t) : t
        }, Elements.implement(t)
    }
}), Browser.Element || (Element.parent = Object, Element.Prototype = { $constructor: Element, $family: Function.convert("element").hide() }, Element.mirror(function(e, t) { Element.Prototype[e] = t })), Element.Constructors = {}, Element.Constructors = new Hash;
var IFrame = new Type("IFrame", function() {
        var e, t = Array.link(arguments, { properties: Type.isObject, iframe: function(e) { return null != e } }),
            n = t.properties || {};
        t.iframe && (e = document.id(t.iframe));
        var i = n.onload || function() {};
        delete n.onload, n.id = n.name = [n.id, n.name, e ? e.id || e.name : "IFrame_" + String.uniqueID()].pick(), e = new Element(e || "iframe", n);
        var r = function() { i.call(e.contentWindow) };
        return window.frames[n.id] ? r() : e.addListener("load", r), e
    }),
    Elements = this.Elements = function(e) {
        if (e && e.length)
            for (var t, n = {}, i = 0; t = e[i++];) {
                var r = Slick.uidOf(t);
                n[r] || (n[r] = !0, this.push(t))
            }
    };
Elements.prototype = { length: 0 }, Elements.parent = Array, new Type("Elements", Elements).implement({
        filter: function(e, t) { return e ? new Elements(Array.filter(this, "string" == typeOf(e) ? function(t) { return t.match(e) } : e, t)) : this }.protect(),
        push: function() {
            for (var e = this.length, t = 0, n = arguments.length; t < n; t++) {
                var i = document.id(arguments[t]);
                i && (this[e++] = i)
            }
            return this.length = e
        }.protect(),
        unshift: function() {
            for (var e = [], t = 0, n = arguments.length; t < n; t++) {
                var i = document.id(arguments[t]);
                i && e.push(i)
            }
            return Array.prototype.unshift.apply(this, e)
        }.protect(),
        concat: function() {
            for (var e = new Elements(this), t = 0, n = arguments.length; t < n; t++) {
                var i = arguments[t];
                Type.isEnumerable(i) ? e.append(i) : e.push(i)
            }
            return e
        }.protect(),
        append: function(e) { for (var t = 0, n = e.length; t < n; t++) this.push(e[t]); return this }.protect(),
        empty: function() { for (; this.length;) delete this[--this.length]; return this }.protect()
    }), Elements.alias("extend", "append"),
    function() {
        var e = Array.prototype.splice,
            t = { 0: 0, 1: 1, length: 2 };
        e.call(t, 1, 1), 1 == t[1] && Elements.implement("splice", function() { for (var t = this.length, n = e.apply(this, arguments); t >= this.length;) delete this[t--]; return n }.protect()), Array.forEachMethod(function(e, t) { Elements.implement(t, e) }), Array.mirror(Elements);
        var n;
        try { n = "x" == document.createElement("<input name=x>").name } catch (e) {}
        var i = function(e) { return ("" + e).replace(/&/g, "&amp;").replace(/"/g, "&quot;") },
            r = function() {
                var e = document.createElement("style"),
                    t = !1;
                try { e.innerHTML = "#justTesing{margin: 0px;}", t = !!e.innerHTML } catch (e) {}
                return t
            }();
        Document.implement({
            newElement: function(e, t) {
                if (t) {
                    if (null != t.checked && (t.defaultChecked = t.checked), "checkbox" != t.type && "radio" != t.type || null != t.value || (t.value = "on"), !r && "style" == e) { var s = document.createElement("style"); return s.setAttribute("type", "text/css"), t.type && delete t.type, this.id(s).set(t) }
                    n && (e = "<" + e, t.name && (e += ' name="' + i(t.name) + '"'), t.type && (e += ' type="' + i(t.type) + '"'), e += ">", delete t.name, delete t.type)
                }
                return this.id(this.createElement(e)).set(t)
            }
        })
    }(),
    function() {
        Slick.uidOf(window), Slick.uidOf(document), Document.implement({
            newTextNode: function(e) { return this.createTextNode(e) },
            getDocument: function() { return this },
            getWindow: function() { return this.window },
            id: function() {
                var e = {
                    string: function(t, n, i) { return t = Slick.find(i, "#" + t.replace(/(\W)/g, "\\$1")), t ? e.element(t, n) : null },
                    element: function(e, t) {
                        if (Slick.uidOf(e), !t && !e.$family && !/^(?:object|embed)$/i.test(e.tagName)) {
                            var n = e.fireEvent;
                            e._fireEvent = function(e, t) { return n(e, t) }, Object.append(e, Element.Prototype)
                        }
                        return e
                    },
                    object: function(t, n, i) { return t.toElement ? e.element(t.toElement(i), n) : null }
                };
                return e.textnode = e.whitespace = e.window = e.document = function(e) { return e },
                    function(t, n, i) { if (t && t.$family && t.uniqueNumber) return t; var r = typeOf(t); return e[r] ? e[r](t, n, i || document) : null }
            }()
        }), null == window.$ && Window.implement("$", function(e, t) { return document.id(e, t, this.document) }), Window.implement({ getDocument: function() { return this.document }, getWindow: function() { return this } }), [Document, Element].invoke("implement", { getElements: function(e) { return Slick.search(this, e, new Elements) }, getElement: function(e) { return document.id(Slick.find(this, e)) } });
        var e = { contains: function(e) { return Slick.contains(this, e) } };
        document.contains || Document.implement(e), document.createElement("div").contains || Element.implement(e), Element.implement("hasChild", function(e) { return this !== e && this.contains(e) }),
            function(e, t, n) {
                this.Selectors = {};
                var i = this.Selectors.Pseudo = new Hash,
                    r = function() { for (var e in i) i.hasOwnProperty(e) && (Slick.definePseudo(e, i[e]), delete i[e]) };
                Slick.search = function(t, n, i) { return r(), e.call(this, t, n, i) }, Slick.find = function(e, n) { return r(), t.call(this, e, n) }, Slick.match = function(e, t) { return r(), n.call(this, e, t) }
            }(Slick.search, Slick.find, Slick.match);
        var t = function(e, t) {
            if (!e) return t;
            e = Object.clone(Slick.parse(e));
            for (var n = e.expressions, i = n.length; i--;) n[i][0].combinator = t;
            return e
        };
        Object.forEach({ getNext: "~", getPrevious: "!~", getParent: "!" }, function(e, n) { Element.implement(n, function(n) { return this.getElement(t(n, e)) }) }), Object.forEach({ getAllNext: "~", getAllPrevious: "!~", getSiblings: "~~", getChildren: ">", getParents: "!" }, function(e, n) { Element.implement(n, function(n) { return this.getElements(t(n, e)) }) }), Element.implement({ getFirst: function(e) { return document.id(Slick.search(this, t(e, ">"))[0]) }, getLast: function(e) { return document.id(Slick.search(this, t(e, ">")).getLast()) }, getWindow: function() { return this.ownerDocument.window }, getDocument: function() { return this.ownerDocument }, getElementById: function(e) { return document.id(Slick.find(this, "#" + ("" + e).replace(/(\W)/g, "\\$1"))) }, match: function(e) { return !e || Slick.match(this, e) } }), null == window.$$ && Window.implement("$$", function(e) {
            var t = new Elements;
            if (1 == arguments.length && "string" == typeof e) return Slick.search(this.document, e, t);
            for (var n = Array.flatten(arguments), i = 0, r = n.length; i < r; i++) {
                var s = n[i];
                switch (typeOf(s)) {
                    case "element":
                        t.push(s);
                        break;
                    case "string":
                        Slick.search(this.document, s, t)
                }
            }
            return t
        }), null == window.$$ && Window.implement("$$", function(e) { if (1 == arguments.length) { if ("string" == typeof e) return Slick.search(this.document, e, new Elements); if (Type.isEnumerable(e)) return new Elements(e) } return new Elements(arguments) });
        var n = {
            before: function(e, t) {
                var n = t.parentNode;
                n && n.insertBefore(e, t)
            },
            after: function(e, t) {
                var n = t.parentNode;
                n && n.insertBefore(e, t.nextSibling)
            },
            bottom: function(e, t) { t.appendChild(e) },
            top: function(e, t) { t.insertBefore(e, t.firstChild) }
        };
        n.inside = n.bottom, Object.each(n, function(e, t) {
            t = t.capitalize();
            var n = {};
            n["inject" + t] = function(t) { return e(this, document.id(t, !0)), this }, n["grab" + t] = function(t) { return e(document.id(t, !0), this), this }, Element.implement(n)
        });
        var i = {},
            r = {},
            s = {};
        Array.forEach(["type", "value", "defaultValue", "accessKey", "cellPadding", "cellSpacing", "colSpan", "frameBorder", "rowSpan", "tabIndex", "useMap"], function(e) { s[e.toLowerCase()] = e }), s.html = "innerHTML", s.text = null == document.createElement("div").textContent ? "innerText" : "textContent", Object.forEach(s, function(e, t) { r[t] = function(t, n) { t[e] = n }, i[t] = function(t) { return t[e] } }), r.text = function() { return function(e, t) { "style" == e.get("tag") ? e.set("html", t) : e[s.text] = t } }(r.text), i.text = function(e) { return function(t) { return "style" == t.get("tag") ? t.innerHTML : e(t) } }(i.text);
        var a = ["compact", "nowrap", "ismap", "declare", "noshade", "checked", "disabled", "readOnly", "multiple", "selected", "noresize", "defer", "defaultChecked", "autofocus", "controls", "autoplay", "loop"],
            o = {};
        Array.forEach(a, function(e) {
            var t = e.toLowerCase();
            o[t] = e, r[t] = function(t, n) { t[e] = !!n }, i[t] = function(t) { return !!t[e] }
        }), Object.append(r, { class: function(e, t) { "className" in e ? e.className = t || "" : e.setAttribute("class", t) }, for: function(e, t) { "htmlFor" in e ? e.htmlFor = t : e.setAttribute("for", t) }, style: function(e, t) { e.style ? e.style.cssText = t : e.setAttribute("style", t) }, value: function(e, t) { e.value = null != t ? t : "" } }), i.class = function(e) { return "className" in e ? e.className || null : e.getAttribute("class") };
        var u = document.createElement("button");
        try { u.type = "button" } catch (e) {}
        "button" != u.type && (r.type = function(e, t) { e.setAttribute("type", t) }), u = null;
        var h, c, d = function() {
                var e = document.createElement("style"),
                    t = !1;
                try { e.innerHTML = "#justTesing{margin: 0px;}", t = !!e.innerHTML } catch (e) {}
                return t
            }(),
            m = document.createElement("input");
        m.value = "t", m.type = "submit", h = "t" != m.value;
        try { m.value = "", m.type = "email", c = "email" == m.type } catch (e) {}
        m = null, !h && c || (r.type = function(e, t) {
            try {
                var n = e.value;
                e.type = t, e.value = n
            } catch (e) {}
        });
        var f = function(e) { return e.random = "attribute", "attribute" == e.getAttribute("random") }(document.createElement("div")),
            p = function(e) { return e.innerHTML = '<object><param name="should_fix" value="the unknown" /></object>', 1 != e.cloneNode(!0).firstChild.childNodes.length }(document.createElement("div")),
            g = !!document.createElement("div").classList,
            v = function(e) {
                var t = (e || "").clean().split(" "),
                    n = {};
                return t.filter(function(e) { if ("" !== e && !n[e]) return n[e] = e })
            },
            y = function(e) { this.classList.add(e) },
            b = function(e) { this.classList.remove(e) };
        Element.implement({
            setProperty: function(e, t) {
                var n = r[e.toLowerCase()];
                if (n) n(this, t);
                else {
                    var i;
                    f && (i = this.retrieve("$attributeWhiteList", {})), null == t ? (this.removeAttribute(e), f && delete i[e]) : (this.setAttribute(e, "" + t), f && (i[e] = !0))
                }
                return this
            },
            setProperties: function(e) { for (var t in e) this.setProperty(t, e[t]); return this },
            getProperty: function(e) {
                var t = i[e.toLowerCase()];
                if (t) return t(this);
                if (f) {
                    var n = this.getAttributeNode(e),
                        r = this.retrieve("$attributeWhiteList", {});
                    if (!n) return null;
                    if (n.expando && !r[e]) {
                        var s = this.outerHTML;
                        if (s.substr(0, s.search(/\/?['"]?>(?![^<]*<['"])/)).indexOf(e) < 0) return null;
                        r[e] = !0
                    }
                }
                var a = Slick.getAttribute(this, e);
                return a || Slick.hasAttribute(this, e) ? a : null
            },
            getProperties: function() { var e = Array.convert(arguments); return e.map(this.getProperty, this).associate(e) },
            removeProperty: function(e) { return this.setProperty(e, null) },
            removeProperties: function() { return Array.each(arguments, this.removeProperty, this), this },
            set: function(e, t) {
                var n = Element.Properties[e];
                n && n.set ? n.set.call(this, t) : this.setProperty(e, t)
            }.overloadSetter(),
            get: function(e) { var t = Element.Properties[e]; return t && t.get ? t.get.apply(this) : this.getProperty(e) }.overloadGetter(),
            erase: function(e) { var t = Element.Properties[e]; return t && t.erase ? t.erase.apply(this) : this.removeProperty(e), this },
            hasClass: g ? function(e) { return this.classList.contains(e) } : function(e) { return v(this.className).contains(e) },
            addClass: g ? function(e) { return v(e).forEach(y, this), this } : function(e) { return this.className = v(e + " " + this.className).join(" "), this },
            removeClass: g ? function(e) { return v(e).forEach(b, this), this } : function(e) { var t = v(this.className); return v(e).forEach(t.erase, t), this.className = t.join(" "), this },
            toggleClass: function(e, t) { return null == t && (t = !this.hasClass(e)), t ? this.addClass(e) : this.removeClass(e) },
            adopt: function() {
                var e, t = this,
                    n = Array.flatten(arguments),
                    i = n.length;
                i > 1 && (t = e = document.createDocumentFragment());
                for (var r = 0; r < i; r++) {
                    var s = document.id(n[r], !0);
                    s && t.appendChild(s)
                }
                return e && this.appendChild(e), this
            },
            appendText: function(e, t) { return this.grab(this.getDocument().newTextNode(e), t) },
            grab: function(e, t) { return n[t || "bottom"](document.id(e, !0), this), this },
            inject: function(e, t) { return n[t || "bottom"](this, document.id(e, !0)), this },
            replaces: function(e) { return e = document.id(e, !0), e.parentNode.replaceChild(this, e), this },
            wraps: function(e, t) { return e = document.id(e, !0), this.replaces(e).grab(e, t) },
            getSelected: function() { return this.selectedIndex, new Elements(Array.convert(this.options).filter(function(e) { return e.selected })) },
            toQueryString: function() {
                var e = [];
                return this.getElements("input, select, textarea").each(function(t) {
                    var n = t.type;
                    if (t.name && !t.disabled && "submit" != n && "reset" != n && "file" != n && "image" != n) {
                        var i = "select" == t.get("tag") ? t.getSelected().map(function(e) { return document.id(e).get("value") }) : "radio" != n && "checkbox" != n || t.checked ? t.get("value") : null;
                        Array.convert(i).each(function(n) { void 0 !== n && e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(n)) })
                    }
                }), e.join("&")
            }
        });
        var k = { before: "beforeBegin", after: "afterEnd", bottom: "beforeEnd", top: "afterBegin", inside: "beforeEnd" };
        Element.implement("appendHTML", "insertAdjacentHTML" in document.createElement("div") ? function(e, t) { return this.insertAdjacentHTML(k[t || "bottom"], e), this } : function(e, t) {
            var i = new Element("div", { html: e }),
                r = i.childNodes,
                s = i.firstChild;
            if (!s) return this;
            if (r.length > 1) { s = document.createDocumentFragment(); for (var a = 0, o = r.length; a < o; a++) s.appendChild(r[a]) }
            return n[t || "bottom"](s, this), this
        });
        var w = {},
            S = {},
            x = function(e) { return S[e] || (S[e] = {}) },
            E = function(e) { var t = e.uniqueNumber; return e.removeEvents && e.removeEvents(), e.clearAttributes && e.clearAttributes(), null != t && (delete w[t], delete S[t]), e },
            A = { input: "checked", option: "selected", textarea: "value" };
        if (Element.implement({
                destroy: function() { var e = E(this).getElementsByTagName("*"); return Array.each(e, E), Element.dispose(this), null },
                empty: function() { return Array.convert(this.childNodes).each(Element.dispose), this },
                dispose: function() { return this.parentNode ? this.parentNode.removeChild(this) : this },
                clone: function(e, t) {
                    e = !1 !== e;
                    var n, i = this.cloneNode(e),
                        r = [i],
                        s = [this];
                    for (e && (r.append(Array.convert(i.getElementsByTagName("*"))), s.append(Array.convert(this.getElementsByTagName("*")))), n = r.length; n--;) {
                        var a = r[n],
                            o = s[n];
                        if (t || a.removeAttribute("id"), a.clearAttributes && (a.clearAttributes(), a.mergeAttributes(o), a.removeAttribute("uniqueNumber"), a.options))
                            for (var l = a.options, u = o.options, h = l.length; h--;) l[h].selected = u[h].selected;
                        var c = A[o.tagName.toLowerCase()];
                        c && o[c] && (a[c] = o[c])
                    }
                    if (p) {
                        var d = i.getElementsByTagName("object"),
                            m = this.getElementsByTagName("object");
                        for (n = d.length; n--;) d[n].outerHTML = m[n].outerHTML
                    }
                    return document.id(i)
                }
            }), [Element, Window, Document].invoke("implement", {
                addListener: function(e, t) { return window.attachEvent && !window.addEventListener && (w[Slick.uidOf(this)] = this), this.addEventListener ? this.addEventListener(e, t, !!arguments[2]) : this.attachEvent("on" + e, t), this },
                removeListener: function(e, t) { return this.removeEventListener ? this.removeEventListener(e, t, !!arguments[2]) : this.detachEvent("on" + e, t), this },
                retrieve: function(e, t) {
                    var n = x(Slick.uidOf(this)),
                        i = n[e];
                    return null != t && null == i && (i = n[e] = t), null != i ? i : null
                },
                store: function(e, t) { return x(Slick.uidOf(this))[e] = t, this },
                eliminate: function(e) { return delete x(Slick.uidOf(this))[e], this }
            }), window.attachEvent && !window.addEventListener) {
            var D = function() { Object.each(w, E), window.CollectGarbage && CollectGarbage(), window.removeListener("unload", D) };
            window.addListener("unload", D)
        }
        Element.Properties = {}, Element.Properties = new Hash, Element.Properties.style = { set: function(e) { this.style.cssText = e }, get: function() { return this.style.cssText }, erase: function() { this.style.cssText = "" } }, Element.Properties.tag = { get: function() { return this.tagName.toLowerCase() } }, Element.Properties.html = { set: function(e) { null == e ? e = "" : "array" == typeOf(e) && (e = e.join("")), this.styleSheet && !d ? this.styleSheet.cssText = e : this.innerHTML = e }, erase: function() { this.set("html", "") } };
        var M, O = !0,
            P = !0,
            C = !0,
            T = document.createElement("div");
        if (T.innerHTML = "<nav></nav>", !(O = 1 == T.childNodes.length)) { var j = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video".split(" "); for (M = document.createDocumentFragment(), l = j.length; l--;) M.createElement(j[l]) }
        T = null, P = Function.attempt(function() { return document.createElement("table").innerHTML = "<tr><td></td></tr>", !0 });
        var z = document.createElement("tr");
        z.innerHTML = "<td></td>", C = "<td></td>" == z.innerHTML, z = null, P && C && O || (Element.Properties.html.set = function(e) {
            var t = { table: [1, "<table>", "</table>"], select: [1, "<select>", "</select>"], tbody: [2, "<table><tbody>", "</tbody></table>"], tr: [3, "<table><tbody><tr>", "</tr></tbody></table>"] };
            return t.thead = t.tfoot = t.tbody,
                function(n) {
                    if (this.styleSheet) return e.call(this, n);
                    var i = t[this.get("tag")];
                    if (i || O || (i = [0, "", ""]), !i) return e.call(this, n);
                    var r = i[0],
                        s = document.createElement("div"),
                        a = s;
                    for (O || M.appendChild(s), s.innerHTML = [i[1], n, i[2]].flatten().join(""); r--;) a = a.firstChild;
                    this.empty().adopt(a.childNodes), O || M.removeChild(s), s = null
                }
        }(Element.Properties.html.set));
        var L = document.createElement("form");
        L.innerHTML = "<select><option>s</option></select>", "s" != L.firstChild.value && (Element.Properties.value = {
            set: function(e) {
                if ("select" != this.get("tag")) return this.setProperty("value", e);
                var t = this.getElements("option");
                e = String(e);
                for (var n = 0; n < t.length; n++) {
                    var i = t[n],
                        r = i.getAttributeNode("value");
                    if ((r && r.specified ? i.value : i.get("text")) === e) return i.selected = !0
                }
            },
            get: function() {
                var e = this,
                    t = e.get("tag");
                if ("select" != t && "option" != t) return this.getProperty("value");
                if ("select" == t && !(e = e.getSelected()[0])) return "";
                var n = e.getAttributeNode("value");
                return n && n.specified ? e.value : e.get("text")
            }
        }), L = null, document.createElement("div").getAttributeNode("id") && (Element.Properties.id = { set: function(e) { this.id = this.getAttributeNode("id").value = e }, get: function() { return this.id || null }, erase: function() { this.id = this.getAttributeNode("id").value = "" } })
    }(),
    function() {
        var e = {},
            t = function(e) {
                var t;
                if (e.wheelDelta) t = e.wheelDelta % 120 == 0 ? e.wheelDelta / 120 : e.wheelDelta / 12;
                else {
                    var n = e.deltaY || e.detail || 0;
                    t = -(n % 3 == 0 ? n / 3 : 10 * n)
                }
                return t
            },
            n = this.DOMEvent = new Type("DOMEvent", function(n, i) {
                if (i || (i = window), n = n || i.event, n.$extended) return n;
                this.event = n, this.$extended = !0, this.shift = n.shiftKey, this.control = n.ctrlKey, this.alt = n.altKey, this.meta = n.metaKey;
                for (var r = this.type = n.type, s = n.target || n.srcElement; s && 3 == s.nodeType;) s = s.parentNode;
                if (this.target = document.id(s), 0 == r.indexOf("key")) {
                    var a = this.code = n.which || n.keyCode;
                    this.shift && "keypress" == r || (this.key = e[a] || Object.keyOf(Event.Keys, a)), "keydown" != r && "keyup" != r || (a > 111 && a < 124 ? this.key = "f" + (a - 111) : a > 95 && a < 106 && (this.key = a - 96)), null == this.key && (this.key = String.fromCharCode(a).toLowerCase())
                } else if ("click" == r || "dblclick" == r || "contextmenu" == r || "wheel" == r || "DOMMouseScroll" == r || 0 == r.indexOf("mouse")) {
                    var o = i.document;
                    if (o = o.compatMode && "CSS1Compat" != o.compatMode ? o.body : o.html, this.page = { x: null != n.pageX ? n.pageX : n.clientX + o.scrollLeft, y: null != n.pageY ? n.pageY : n.clientY + o.scrollTop }, this.client = { x: null != n.pageX ? n.pageX - i.pageXOffset : n.clientX, y: null != n.pageY ? n.pageY - i.pageYOffset : n.clientY }, "DOMMouseScroll" != r && "wheel" != r && "mousewheel" != r || (this.wheel = t(n)), this.rightClick = 3 == n.which || 2 == n.button, "mouseover" == r || "mouseout" == r || "mouseenter" == r || "mouseleave" == r) {
                        for (var l = "mouseover" == r || "mouseenter" == r, u = n.relatedTarget || n[(l ? "from" : "to") + "Element"]; u && 3 == u.nodeType;) u = u.parentNode;
                        this.relatedTarget = document.id(u)
                    }
                } else if (0 == r.indexOf("touch") || 0 == r.indexOf("gesture")) {
                    this.rotation = n.rotation, this.scale = n.scale, this.targetTouches = n.targetTouches, this.changedTouches = n.changedTouches;
                    var h = this.touches = n.touches;
                    if (h && h[0]) {
                        var c = h[0];
                        this.page = { x: c.pageX, y: c.pageY }, this.client = { x: c.clientX, y: c.clientY }
                    }
                }
                this.client || (this.client = {}), this.page || (this.page = {})
            });
        n.implement({ stop: function() { return this.preventDefault().stopPropagation() }, stopPropagation: function() { return this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0, this }, preventDefault: function() { return this.event.preventDefault ? this.event.preventDefault() : this.event.returnValue = !1, this } }), n.defineKey = function(t, n) { return e[t] = n, this }, n.defineKeys = n.defineKey.overloadSetter(!0), n.defineKeys({ 38: "up", 40: "down", 37: "left", 39: "right", 27: "esc", 32: "space", 8: "backspace", 9: "tab", 46: "delete", 13: "enter" })
    }();
var Event = this.Event = DOMEvent;
Event.Keys = {}, Event.Keys = new Hash(Event.Keys),
    function() {
        Element.Properties.events = { set: function(e) { this.addEvents(e) } }, [Element, Window, Document].invoke("implement", {
            addEvent: function(e, t) {
                var n = this.retrieve("events", {});
                if (n[e] || (n[e] = { keys: [], values: [] }), n[e].keys.contains(t)) return this;
                n[e].keys.push(t);
                var i = e,
                    r = Element.Events[e],
                    s = t,
                    a = this;
                r && (r.onAdd && r.onAdd.call(this, t, e), r.condition && (s = function(n) { return !r.condition.call(this, n, e) || t.call(this, n) }), r.base && (i = Function.convert(r.base).call(this, e)));
                var o = function() { return t.call(a) },
                    l = Element.NativeEvents[i];
                return l && (2 == l && (o = function(e) { e = new DOMEvent(e, a.getWindow()), !1 === s.call(a, e) && e.stop() }), this.addListener(i, o, arguments[2])), n[e].values.push(o), this
            },
            removeEvent: function(e, t) {
                var n = this.retrieve("events");
                if (!n || !n[e]) return this;
                var i = n[e],
                    r = i.keys.indexOf(t);
                if (-1 == r) return this;
                var s = i.values[r];
                delete i.keys[r], delete i.values[r];
                var a = Element.Events[e];
                return a && (a.onRemove && a.onRemove.call(this, t, e), a.base && (e = Function.convert(a.base).call(this, e))), Element.NativeEvents[e] ? this.removeListener(e, s, arguments[2]) : this
            },
            addEvents: function(e) { for (var t in e) this.addEvent(t, e[t]); return this },
            removeEvents: function(e) {
                var t;
                if ("object" == typeOf(e)) { for (t in e) this.removeEvent(t, e[t]); return this }
                var n = this.retrieve("events");
                if (!n) return this;
                if (e) n[e] && (n[e].keys.each(function(t) { this.removeEvent(e, t) }, this), delete n[e]);
                else {
                    for (t in n) this.removeEvents(t);
                    this.eliminate("events")
                }
                return this
            },
            fireEvent: function(e, t, n) { var i = this.retrieve("events"); return i && i[e] ? (t = Array.convert(t), i[e].keys.each(function(e) { n ? e.delay(n, this, t) : e.apply(this, t) }, this), this) : this },
            cloneEvents: function(e, t) {
                e = document.id(e);
                var n = e.retrieve("events");
                if (!n) return this;
                if (t) n[t] && n[t].keys.each(function(e) { this.addEvent(t, e) }, this);
                else
                    for (var i in n) this.cloneEvents(e, i);
                return this
            }
        }), Element.NativeEvents = {
            click: 2,
            dblclick: 2,
            mouseup: 2,
            mousedown: 2,
            contextmenu: 2,
            wheel: 2,
            mousewheel: 2,
            DOMMouseScroll: 2,
            mouseover: 2,
            mouseout: 2,
            mousemove: 2,
            selectstart: 2,
            selectend: 2,
            keydown: 2,
            keypress: 2,
            keyup: 2,
            orientationchange: 2,
            touchstart: 2,
            touchmove: 2,
            touchend: 2,
            touchcancel: 2,
            gesturestart: 2,
            gesturechange: 2,
            gestureend: 2,
            focus: 2,
            blur: 2,
            change: 2,
            reset: 2,
            select: 2,
            submit: 2,
            paste: 2,
            input: 2,
            load: 2,
            unload: 1,
            beforeunload: 2,
            resize: 1,
            move: 1,
            DOMContentLoaded: 1,
            readystatechange: 1,
            hashchange: 1,
            popstate: 2,
            pageshow: 2,
            pagehide: 2,
            error: 1,
            abort: 1,
            scroll: 1,
            message: 2
        }, Element.Events = { mousewheel: { base: "onwheel" in document ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll" } };
        var e = function(e) { var t = e.relatedTarget; return null == t || !!t && (t != this && "xul" != t.prefix && "document" != typeOf(this) && !this.contains(t)) };
        "onmouseenter" in document.documentElement ? (Element.NativeEvents.mouseenter = Element.NativeEvents.mouseleave = 2, Element.MouseenterCheck = e) : (Element.Events.mouseenter = { base: "mouseover", condition: e }, Element.Events.mouseleave = { base: "mouseout", condition: e }), window.addEventListener || (Element.NativeEvents.propertychange = 2, Element.Events.change = { base: function() { var e = this.type; return "input" != this.get("tag") || "radio" != e && "checkbox" != e ? "change" : "propertychange" }, condition: function(e) { return "propertychange" != e.type || "checked" == e.event.propertyName } }), Element.Events = new Hash(Element.Events)
    }(),
    function() {
        var e = !!window.addEventListener;
        Element.NativeEvents.focusin = Element.NativeEvents.focusout = 2;
        var t = function(e, t, n, i, r) {
                for (; r && r != e;) {
                    if (t(r, i)) return n.call(r, i, r);
                    r = document.id(r.parentNode)
                }
            },
            n = { mouseenter: { base: "mouseover", condition: Element.MouseenterCheck }, mouseleave: { base: "mouseout", condition: Element.MouseenterCheck }, focus: { base: "focus" + (e ? "" : "in"), capture: !0 }, blur: { base: e ? "blur" : "focusout", capture: !0 } },
            i = "$delegation:",
            r = function(e) {
                return {
                    base: "focusin",
                    remove: function(t, n) {
                        var r = t.retrieve(i + e + "listeners", {})[n];
                        if (r && r.forms)
                            for (var s = r.forms.length; s--;) r.forms[s].removeEvent && r.forms[s].removeEvent(e, r.fns[s])
                    },
                    listen: function(n, r, s, a, o, l) {
                        var u = "form" == o.get("tag") ? o : a.target.getParent("form");
                        if (u) {
                            var h = n.retrieve(i + e + "listeners", {}),
                                c = h[l] || { forms: [], fns: [] },
                                d = c.forms,
                                m = c.fns;
                            if (-1 == d.indexOf(u)) {
                                d.push(u);
                                var f = function(e) { t(n, r, s, e, o) };
                                u.addEvent(e, f), m.push(f), h[l] = c, n.store(i + e + "listeners", h)
                            }
                        }
                    }
                }
            },
            s = function(e) {
                return {
                    base: "focusin",
                    listen: function(n, i, r, s, a) {
                        var o = { blur: function() { this.removeEvents(o) } };
                        o[e] = function(e) { t(n, i, r, e, a) }, s.target.addEvents(o)
                    }
                }
            };
        e || Object.append(n, { submit: r("submit"), reset: r("reset"), change: s("change"), select: s("select") });
        var a = Element.prototype,
            o = a.addEvent,
            l = a.removeEvent,
            u = function(e, t) { return function(n, i, r) { if (-1 == n.indexOf(":relay")) return e.call(this, n, i, r); var s = Slick.parse(n).expressions[0][0]; if ("relay" != s.pseudos[0].key) return e.call(this, n, i, r); var a = s.tag; return s.pseudos.slice(1).each(function(e) { a += ":" + e.key + (e.value ? "(" + e.value + ")" : "") }), e.call(this, n, i), t.call(this, a, s.pseudos[0].value, i) } },
            h = {
                addEvent: function(e, i, r) {
                    var s = this.retrieve("$delegates", {}),
                        a = s[e];
                    if (a)
                        for (var l in a)
                            if (a[l].fn == r && a[l].match == i) return this;
                    var u = e,
                        h = i,
                        c = r,
                        d = n[e] || {};
                    e = d.base || u, i = function(e) { return Slick.match(e, h) };
                    var m = Element.Events[u];
                    if (d.condition || m && m.condition) {
                        var f = i,
                            p = d.condition || m.condition;
                        i = function(t, n) { return f(t, n) && p.call(t, n, e) }
                    }
                    var g = this,
                        v = String.uniqueID(),
                        y = d.listen ? function(e, t) {!t && e && e.target && (t = e.target), t && d.listen(g, i, r, e, t, v) } : function(e, n) {!n && e && e.target && (n = e.target), n && t(g, i, r, e, n) };
                    return a || (a = {}), a[v] = { match: h, fn: c, delegator: y }, s[u] = a, o.call(this, e, y, d.capture)
                },
                removeEvent: function(e, t, i, r) {
                    var s = this.retrieve("$delegates", {}),
                        a = s[e];
                    if (!a) return this;
                    if (r) {
                        var o = e,
                            u = a[r].delegator,
                            c = n[e] || {};
                        return e = c.base || o, c.remove && c.remove(this, r), delete a[r], s[o] = a, l.call(this, e, u, c.capture)
                    }
                    var d, m;
                    if (i) {
                        for (d in a)
                            if (m = a[d], m.match == t && m.fn == i) return h.removeEvent.call(this, e, t, i, d)
                    } else
                        for (d in a) m = a[d], m.match == t && h.removeEvent.call(this, e, t, m.fn, d);
                    return this
                }
            };
        [Element, Window, Document].invoke("implement", { addEvent: u(o, h.addEvent), removeEvent: u(l, h.removeEvent) })
    }(),
    function() {
        var e, t = document.html;
        e = document.createElement("div"), e.style.color = "red", e.style.color = null;
        var n = "red" == e.style.color;
        e.style.border = "1px solid #123abc";
        var i = "1px solid #123abc" != e.style.border;
        e = null;
        var r = !!window.getComputedStyle,
            s = null != document.createElement("div").style.borderRadius;
        Element.Properties.styles = { set: function(e) { this.setStyles(e) } };
        var a = null != t.style.opacity,
            o = null != t.style.filter,
            l = /alpha\(opacity=([\d.]+)\)/i,
            u = function(e, t) { e.store("$opacity", t), e.style.visibility = t > 0 || null == t ? "visible" : "hidden" },
            h = function(e, t, n) {
                var i = e.style,
                    r = i.filter || e.getComputedStyle("filter") || "";
                i.filter = (t.test(r) ? r.replace(t, n) : r + " " + n).trim(), i.filter || i.removeAttribute("filter")
            },
            c = a ? function(e, t) { e.style.opacity = t } : o ? function(e, t) { e.currentStyle && e.currentStyle.hasLayout || (e.style.zoom = 1), null == t || 1 == t ? (h(e, l, ""), 1 == t && 1 != d(e) && h(e, l, "alpha(opacity=100)")) : h(e, l, "alpha(opacity=" + (100 * t).limit(0, 100).round() + ")") } : u,
            d = a ? function(e) { var t = e.style.opacity || e.getComputedStyle("opacity"); return "" == t ? 1 : t.toFloat() } : o ? function(e) { var t, n = e.style.filter || e.getComputedStyle("filter"); return n && (t = n.match(l)), null == t || null == n ? 1 : t[1] / 100 } : function(e) { var t = e.retrieve("$opacity"); return null == t && (t = "hidden" == e.style.visibility ? 0 : 1), t },
            m = null == t.style.cssFloat ? "styleFloat" : "cssFloat",
            f = { left: "0%", top: "0%", center: "50%", right: "100%", bottom: "100%" },
            p = null != t.style.backgroundPositionX,
            g = /^-(ms)-/,
            v = function(e) { return e.replace(g, "$1-").camelCase() },
            y = function(e, t) { "backgroundPosition" == t && (e.removeAttribute(t + "X"), t += "Y"), e.removeAttribute(t) };
        Element.implement({
            getComputedStyle: function(e) {
                if (!r && this.currentStyle) return this.currentStyle[v(e)];
                var t = Element.getDocument(this).defaultView,
                    n = t ? t.getComputedStyle(this, null) : null;
                return n ? n.getPropertyValue(e == m ? "float" : e.hyphenate()) : ""
            },
            setStyle: function(e, t) {
                if ("opacity" == e) return null != t && (t = parseFloat(t)), c(this, t), this;
                if (e = v("float" == e ? m : e), "string" != typeOf(t)) {
                    var i = (Element.Styles[e] || "@").split(" ");
                    t = Array.convert(t).map(function(e, t) { return i[t] ? "number" == typeOf(e) ? i[t].replace("@", Math.round(e)) : e : "" }).join(" ")
                } else t == String(Number(t)) && (t = Math.round(t));
                return this.style[e] = t, ("" == t || null == t) && n && this.style.removeAttribute && y(this.style, e), this
            },
            getStyle: function(e) {
                if ("opacity" == e) return d(this);
                if (e = v("float" == e ? m : e), s && -1 != e.indexOf("borderRadius")) return ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"].map(function(e) { return this.style[e] || "0px" }, this).join(" ");
                var t = this.style[e];
                if (!t || "zIndex" == e) {
                    if (Element.ShortStyles.hasOwnProperty(e)) { t = []; for (var n in Element.ShortStyles[e]) t.push(this.getStyle(n)); return t.join(" ") }
                    t = this.getComputedStyle(e)
                }
                if (p && /^backgroundPosition[XY]?$/.test(e)) return t.replace(/(top|right|bottom|left)/g, function(e) { return f[e] }) || "0px";
                if (!t && "backgroundPosition" == e) return "0px 0px";
                if (t) {
                    t = String(t);
                    var a = t.match(/rgba?\([\d\s,]+\)/);
                    a && (t = t.replace(a[0], a[0].rgbToHex()))
                }
                if (!r && !this.style[e]) {
                    if (/^(height|width)$/.test(e) && !/px$/.test(t)) {
                        var o = "width" == e ? ["left", "right"] : ["top", "bottom"],
                            l = 0;
                        return o.each(function(e) { l += this.getStyle("border-" + e + "-width").toInt() + this.getStyle("padding-" + e).toInt() }, this), this["offset" + e.capitalize()] - l + "px"
                    }
                    if (/^border(.+)Width|margin|padding/.test(e) && isNaN(parseFloat(t))) return "0px"
                }
                return i && /^border(Top|Right|Bottom|Left)?$/.test(e) && /^#/.test(t) ? t.replace(/^(.+)\s(.+)\s(.+)$/, "$2 $3 $1") : t
            },
            setStyles: function(e) { for (var t in e) this.setStyle(t, e[t]); return this },
            getStyles: function() { var e = {}; return Array.flatten(arguments).each(function(t) { e[t] = this.getStyle(t) }, this), e }
        }), Element.Styles = { left: "@px", top: "@px", bottom: "@px", right: "@px", width: "@px", height: "@px", maxWidth: "@px", maxHeight: "@px", minWidth: "@px", minHeight: "@px", backgroundColor: "rgb(@, @, @)", backgroundSize: "@px", backgroundPosition: "@px @px", color: "rgb(@, @, @)", fontSize: "@px", letterSpacing: "@px", lineHeight: "@px", clip: "rect(@px @px @px @px)", margin: "@px @px @px @px", padding: "@px @px @px @px", border: "@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)", borderWidth: "@px @px @px @px", borderStyle: "@ @ @ @", borderColor: "rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)", zIndex: "@", zoom: "@", fontWeight: "@", textIndent: "@px", opacity: "@", borderRadius: "@px @px @px @px" }, Element.implement({ setOpacity: function(e) { return c(this, e), this }, getOpacity: function() { return d(this) } }), Element.Properties.opacity = { set: function(e) { c(this, e), u(this, e) }, get: function() { return d(this) } }, Element.Styles = new Hash(Element.Styles), Element.ShortStyles = { margin: {}, padding: {}, border: {}, borderWidth: {}, borderStyle: {}, borderColor: {} }, ["Top", "Right", "Bottom", "Left"].each(function(e) {
            var t = Element.ShortStyles,
                n = Element.Styles;
            ["margin", "padding"].each(function(i) {
                var r = i + e;
                t[i][r] = n[r] = "@px"
            });
            var i = "border" + e;
            t.border[i] = n[i] = "@px @ rgb(@, @, @)";
            var r = i + "Width",
                s = i + "Style",
                a = i + "Color";
            t[i] = {}, t.borderWidth[r] = t[i][r] = n[r] = "@px", t.borderStyle[s] = t[i][s] = n[s] = "@", t.borderColor[a] = t[i][a] = n[a] = "rgb(@, @, @)"
        }), p && (Element.ShortStyles.backgroundPosition = { backgroundPositionX: "@", backgroundPositionY: "@" })
    }(),
    function() {
        function e(e, t) { return f(e, t).toInt() || 0 }

        function t(e) { return "border-box" == f(e, "-moz-box-sizing") }

        function n(t) { return e(t, "border-top-width") }

        function i(t) { return e(t, "border-left-width") }

        function r(e) { return /^(?:body|html)$/i.test(e.tagName) }

        function s(e) { var t = e.getDocument(); return t.compatMode && "CSS1Compat" != t.compatMode ? t.body : t.html }
        var a = document.createElement("div"),
            o = document.createElement("div");
        a.style.height = "0", a.appendChild(o);
        var l = o.offsetParent === a;
        a = o = null;
        var u = ["height", "paddingTop", "paddingBottom", "borderTopWidth", "borderBottomWidth"],
            h = ["width", "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"],
            c = function(e) {
                var t = window.getComputedStyle(e),
                    n = { x: 0, y: 0 };
                return u.each(function(e) { n.y += parseFloat(t[e]) }), h.each(function(e) { n.x += parseFloat(t[e]) }), n
            },
            d = function(e) { return "static" != f(e, "position") || r(e) },
            m = function(e) { return d(e) || /^(?:table|td|th)$/i.test(e.tagName) };
        Element.implement({
            scrollTo: function(e, t) { return r(this) ? this.getWindow().scrollTo(e, t) : (this.scrollLeft = e, this.scrollTop = t), this },
            getSize: function() { if (r(this)) return this.getWindow().getSize(); if (!window.getComputedStyle) return { x: this.offsetWidth, y: this.offsetHeight }; if ("svg" == this.get("tag")) return c(this); try { var e = this.getBoundingClientRect(); return { x: e.width, y: e.height } } catch (e) { return { x: 0, y: 0 } } },
            getScrollSize: function() { return r(this) ? this.getWindow().getScrollSize() : { x: this.scrollWidth, y: this.scrollHeight } },
            getScroll: function() { return r(this) ? this.getWindow().getScroll() : { x: this.scrollLeft, y: this.scrollTop } },
            getScrolls: function() { for (var e = this.parentNode, t = { x: 0, y: 0 }; e && !r(e);) t.x += e.scrollLeft, t.y += e.scrollTop, e = e.parentNode; return t },
            getOffsetParent: l ? function() {
                var e = this;
                if (r(e) || "fixed" == f(e, "position")) return null;
                for (var t = "static" == f(e, "position") ? m : d; e = e.parentNode;)
                    if (t(e)) return e;
                return null
            } : function() { var e = this; if (r(e) || "fixed" == f(e, "position")) return null; try { return e.offsetParent } catch (e) {} return null },
            getOffsets: function() {
                var e = this.getBoundingClientRect;
                if (e = e && !Browser.Platform.ios) {
                    var s = this.getBoundingClientRect(),
                        a = document.id(this.getDocument().documentElement),
                        o = a.getScroll(),
                        l = this.getScrolls(),
                        u = "fixed" == f(this, "position");
                    return { x: s.left.toFloat() + l.x + (u ? 0 : o.x) - a.clientLeft, y: s.top.toFloat() + l.y + (u ? 0 : o.y) - a.clientTop }
                }
                var h = this,
                    c = { x: 0, y: 0 };
                if (r(this)) return c;
                for (; h && !r(h);) {
                    if (c.x += h.offsetLeft, c.y += h.offsetTop, Browser.firefox) {
                        t(h) || (c.x += i(h), c.y += n(h));
                        var d = h.parentNode;
                        d && "visible" != f(d, "overflow") && (c.x += i(d), c.y += n(d))
                    } else h != this && Browser.safari && (c.x += i(h), c.y += n(h));
                    h = h.offsetParent
                }
                return Browser.firefox && !t(this) && (c.x -= i(this), c.y -= n(this)), c
            },
            getPosition: function(e) {
                var t = this.getOffsets(),
                    r = this.getScrolls(),
                    s = { x: t.x - r.x, y: t.y - r.y };
                if (e && (e = document.id(e))) { var a = e.getPosition(); return { x: s.x - a.x - i(e), y: s.y - a.y - n(e) } }
                return s
            },
            getCoordinates: function(e) {
                if (r(this)) return this.getWindow().getCoordinates();
                var t = this.getPosition(e),
                    n = this.getSize(),
                    i = { left: t.x, top: t.y, width: n.x, height: n.y };
                return i.right = i.left + i.width, i.bottom = i.top + i.height, i
            },
            computePosition: function(t) { return { left: t.x - e(this, "margin-left"), top: t.y - e(this, "margin-top") } },
            setPosition: function(e) { return this.setStyles(this.computePosition(e)) }
        }), [Document, Window].invoke("implement", {
            getSize: function() { var e = s(this); return { x: e.clientWidth, y: e.clientHeight } },
            getScroll: function() {
                var e = this.getWindow(),
                    t = s(this);
                return { x: e.pageXOffset || t.scrollLeft, y: e.pageYOffset || t.scrollTop }
            },
            getScrollSize: function() {
                var e = s(this),
                    t = this.getSize(),
                    n = this.getDocument().body;
                return { x: Math.max(e.scrollWidth, n.scrollWidth, t.x), y: Math.max(e.scrollHeight, n.scrollHeight, t.y) }
            },
            getPosition: function() { return { x: 0, y: 0 } },
            getCoordinates: function() { var e = this.getSize(); return { top: 0, left: 0, bottom: e.y, right: e.x, height: e.y, width: e.x } }
        });
        var f = Element.getComputedStyle
    }(), Element.alias({ position: "setPosition" }), [Window, Document, Element].invoke("implement", { getHeight: function() { return this.getSize().y }, getWidth: function() { return this.getSize().x }, getScrollTop: function() { return this.getScroll().y }, getScrollLeft: function() { return this.getScroll().x }, getScrollHeight: function() { return this.getScrollSize().y }, getScrollWidth: function() { return this.getScrollSize().x }, getTop: function() { return this.getPosition().y }, getLeft: function() { return this.getPosition().x } }),
    function() {
        var e = this.Fx = new Class({
            Implements: [Chain, Events, Options, Class.Thenable],
            options: { fps: 60, unit: !1, duration: 500, frames: null, frameSkip: !0, link: "ignore" },
            initialize: function(e) { this.subject = this.subject || this, this.setOptions(e) },
            getTransition: function() { return function(e) { return -(Math.cos(Math.PI * e) - 1) / 2 } },
            step: function(e) {
                if (this.options.frameSkip) {
                    var t = null != this.time ? e - this.time : 0,
                        n = t / this.frameInterval;
                    this.time = e, this.frame += n
                } else this.frame++;
                if (this.frame < this.frames) {
                    var i = this.transition(this.frame / this.frames);
                    this.set(this.compute(this.from, this.to, i))
                } else this.frame = this.frames, this.set(this.compute(this.from, this.to, 1)), this.stop()
            },
            set: function(e) { return e },
            compute: function(t, n, i) { return e.compute(t, n, i) },
            check: function() {
                if (!this.isRunning()) return !0;
                switch (this.options.link) {
                    case "cancel":
                        return this.cancel(), !0;
                    case "chain":
                        return this.chain(this.caller.pass(arguments, this)), !1
                }
                return !1
            },
            start: function(t, n) {
                if (!this.check(t, n)) return this;
                this.from = t, this.to = n, this.frame = this.options.frameSkip ? 0 : -1, this.time = null, this.transition = this.getTransition();
                var i = this.options.frames,
                    s = this.options.fps,
                    a = this.options.duration;
                return this.duration = e.Durations[a] || a.toInt(), this.frameInterval = 1e3 / s, this.frames = i || Math.round(this.duration / this.frameInterval), "pending" !== this.getThenableState() && this.resetThenable(this.subject), this.fireEvent("start", this.subject), r.call(this, s), this
            },
            stop: function() { return this.isRunning() && (this.time = null, s.call(this, this.options.fps), this.frames == this.frame ? (this.fireEvent("complete", this.subject), this.callChain() || this.fireEvent("chainComplete", this.subject)) : this.fireEvent("stop", this.subject), this.resolve(this.subject === this ? null : this.subject)), this },
            cancel: function() { return this.isRunning() && (this.time = null, s.call(this, this.options.fps), this.frame = this.frames, this.fireEvent("cancel", this.subject).clearChain(), this.reject(this.subject)), this },
            pause: function() { return this.isRunning() && (this.time = null, s.call(this, this.options.fps)), this },
            resume: function() { return this.isPaused() && r.call(this, this.options.fps), this },
            isRunning: function() { var e = t[this.options.fps]; return e && e.contains(this) },
            isPaused: function() { return this.frame < this.frames && !this.isRunning() }
        });
        e.compute = function(e, t, n) { return (t - e) * n + e }, e.Durations = { short: 250, normal: 500, long: 1e3 };
        var t = {},
            n = {},
            i = function() {
                for (var e = Date.now(), t = this.length; t--;) {
                    var n = this[t];
                    n && n.step(e)
                }
            },
            r = function(e) {
                var r = t[e] || (t[e] = []);
                r.push(this), n[e] || (n[e] = i.periodical(Math.round(1e3 / e), r))
            },
            s = function(e) {
                var i = t[e];
                i && (i.erase(this), !i.length && n[e] && (delete t[e], n[e] = clearInterval(n[e])))
            }
    }(), Fx.CSS = new Class({
        Extends: Fx,
        prepare: function(e, t, n) {
            n = Array.convert(n);
            var i = n[0],
                r = n[1];
            if (null == r) {
                r = i, i = e.getStyle(t);
                var s = this.options.unit;
                if (s && i && "string" == typeof i && i.slice(-s.length) != s && 0 != parseFloat(i)) {
                    e.setStyle(t, r + s);
                    var a = e.getComputedStyle(t);
                    if (!/px$/.test(a) && null == (a = e.style[("pixel-" + t).camelCase()])) {
                        var o = e.style.left;
                        e.style.left = r + s, a = e.style.pixelLeft, e.style.left = o
                    }
                    i = (r || 1) / (parseFloat(a) || 1) * (parseFloat(i) || 0), e.setStyle(t, i + s)
                }
            }
            return { from: this.parse(i), to: this.parse(r) }
        },
        parse: function(e) {
            return e = Function.convert(e)(), e = "string" == typeof e ? e.split(" ") : Array.convert(e), e.map(function(e) {
                e = String(e);
                var t = !1;
                return Object.each(Fx.CSS.Parsers, function(n) {
                    if (!t) {
                        var i = n.parse(e);
                        (i || 0 === i) && (t = { value: i, parser: n })
                    }
                }), t = t || { value: e, parser: Fx.CSS.Parsers.String }
            })
        },
        compute: function(e, t, n) { var i = []; return Math.min(e.length, t.length).times(function(r) { i.push({ value: e[r].parser.compute(e[r].value, t[r].value, n), parser: e[r].parser }) }), i.$family = Function.convert("fx:css:value"), i },
        serve: function(e, t) { "fx:css:value" != typeOf(e) && (e = this.parse(e)); var n = []; return e.each(function(e) { n = n.concat(e.parser.serve(e.value, t)) }), n },
        render: function(e, t, n, i) { e.setStyle(t, this.serve(n, i)) },
        search: function(e) {
            if (Fx.CSS.Cache[e]) return Fx.CSS.Cache[e];
            var t = {},
                n = new RegExp("^" + e.escapeRegExp() + "$"),
                i = function(e) {
                    Array.each(e, function(e) {
                        if (e.media) return void i(e.rules || e.cssRules);
                        if (e.style) {
                            var r = e.selectorText ? e.selectorText.replace(/^\w+/, function(e) { return e.toLowerCase() }) : null;
                            r && n.test(r) && Object.each(Element.Styles, function(n, i) { e.style[i] && !Element.ShortStyles[i] && (n = String(e.style[i]), t[i] = /^rgb/.test(n) ? n.rgbToHex() : n) })
                        }
                    })
                };
            return Array.each(document.styleSheets, function(e) {
                var t = e.href;
                if (!(t && t.indexOf("://") > -1 && -1 == t.indexOf(document.domain))) {
                    var n = e.rules || e.cssRules;
                    i(n)
                }
            }), Fx.CSS.Cache[e] = t
        }
    }), Fx.CSS.Cache = {}, Fx.CSS.Parsers = { Color: { parse: function(e) { return e.match(/^#[0-9a-f]{3,6}$/i) ? e.hexToRgb(!0) : !!(e = e.match(/(\d+),\s*(\d+),\s*(\d+)/)) && [e[1], e[2], e[3]] }, compute: function(e, t, n) { return e.map(function(i, r) { return Math.round(Fx.compute(e[r], t[r], n)) }) }, serve: function(e) { return e.map(Number) } }, Number: { parse: parseFloat, compute: Fx.compute, serve: function(e, t) { return t ? e + t : e } }, String: { parse: Function.convert(!1), compute: function(e, t) { return t }, serve: function(e) { return e } } }, Fx.CSS.Parsers = new Hash(Fx.CSS.Parsers), Fx.Morph = new Class({
        Extends: Fx.CSS,
        initialize: function(e, t) { this.element = this.subject = document.id(e), this.parent(t) },
        set: function(e) { "string" == typeof e && (e = this.search(e)); for (var t in e) this.render(this.element, t, e[t], this.options.unit); return this },
        compute: function(e, t, n) { var i = {}; for (var r in e) i[r] = this.parent(e[r], t[r], n); return i },
        start: function(e) {
            if (!this.check(e)) return this;
            "string" == typeof e && (e = this.search(e));
            var t = {},
                n = {};
            for (var i in e) {
                var r = this.prepare(this.element, i, e[i]);
                t[i] = r.from, n[i] = r.to
            }
            return this.parent(t, n)
        }
    }), Element.Properties.morph = { set: function(e) { return this.get("morph").cancel().setOptions(e), this }, get: function() { var e = this.retrieve("morph"); return e || (e = new Fx.Morph(this, { link: "cancel" }), this.store("morph", e)), e } }, Element.implement({ morph: function(e) { return this.get("morph").start(e), this } }), Fx.implement({
        getTransition: function() {
            var e = this.options.transition || Fx.Transitions.Sine.easeInOut;
            if ("string" == typeof e) {
                var t = e.split(":");
                e = Fx.Transitions, e = e[t[0]] || e[t[0].capitalize()], t[1] && (e = e["ease" + t[1].capitalize() + (t[2] ? t[2].capitalize() : "")])
            }
            return e
        }
    }), Fx.Transition = function(e, t) { t = Array.convert(t); var n = function(n) { return e(n, t) }; return Object.append(n, { easeIn: n, easeOut: function(n) { return 1 - e(1 - n, t) }, easeInOut: function(n) { return (n <= .5 ? e(2 * n, t) : 2 - e(2 * (1 - n), t)) / 2 } }) }, Fx.Transitions = { linear: function(e) { return e } }, Fx.Transitions = new Hash(Fx.Transitions), Fx.Transitions.extend = function(e) { for (var t in e) Fx.Transitions[t] = new Fx.Transition(e[t]) }, Fx.Transitions.extend({
        Pow: function(e, t) { return Math.pow(e, t && t[0] || 6) },
        Expo: function(e) { return Math.pow(2, 8 * (e - 1)) },
        Circ: function(e) { return 1 - Math.sin(Math.acos(e)) },
        Sine: function(e) { return 1 - Math.cos(e * Math.PI / 2) },
        Back: function(e, t) { return t = t && t[0] || 1.618, Math.pow(e, 2) * ((t + 1) * e - t) },
        Bounce: function(e) {
            for (var t, n = 0, i = 1; 1; n += i, i /= 2)
                if (e >= (7 - 4 * n) / 11) { t = i * i - Math.pow((11 - 6 * n - 11 * e) / 4, 2); break }
            return t
        },
        Elastic: function(e, t) { return Math.pow(2, 10 * --e) * Math.cos(20 * e * Math.PI * (t && t[0] || 1) / 3) }
    }), ["Quad", "Cubic", "Quart", "Quint"].each(function(e, t) { Fx.Transitions[e] = new Fx.Transition(function(e) { return Math.pow(e, t + 2) }) }), Fx.Tween = new Class({
        Extends: Fx.CSS,
        initialize: function(e, t) { this.element = this.subject = document.id(e), this.parent(t) },
        set: function(e, t) { return 1 == arguments.length && (t = e, e = this.property || this.options.property), this.render(this.element, e, t, this.options.unit), this },
        start: function(e, t, n) {
            if (!this.check(e, t, n)) return this;
            var i = Array.flatten(arguments);
            this.property = this.options.property || i.shift();
            var r = this.prepare(this.element, this.property, i);
            return this.parent(r.from, r.to)
        }
    }), Element.Properties.tween = { set: function(e) { return this.get("tween").cancel().setOptions(e), this }, get: function() { var e = this.retrieve("tween"); return e || (e = new Fx.Tween(this, { link: "cancel" }), this.store("tween", e)), e } }, Element.implement({
        tween: function(e, t, n) { return this.get("tween").start(e, t, n), this },
        fade: function() {
            var e, t, n = this.get("tween"),
                i = ["opacity"].append(arguments);
            switch (null == i[1] && (i[1] = "toggle"), i[1]) {
                case "in":
                    e = "start", i[1] = 1;
                    break;
                case "out":
                    e = "start", i[1] = 0;
                    break;
                case "show":
                    e = "set", i[1] = 1;
                    break;
                case "hide":
                    e = "set", i[1] = 0;
                    break;
                case "toggle":
                    var r = this.retrieve("fade:flag", 1 == this.getStyle("opacity"));
                    e = "start", i[1] = r ? 0 : 1, this.store("fade:flag", !r), t = !0;
                    break;
                default:
                    e = "start"
            }
            t || this.eliminate("fade:flag"), n[e].apply(n, i);
            var s = i[i.length - 1];
            return "set" == e ? this.setStyle("visibility", 0 == s ? "hidden" : "visible") : 0 != s ? n.$chain.length ? n.chain(function() { this.element.setStyle("visibility", "visible"), this.callChain() }) : this.setStyle("visibility", "visible") : n.chain(function() { this.element.getStyle("opacity") || (this.element.setStyle("visibility", "hidden"), this.callChain()) }), this
        },
        highlight: function(e, t) { t || (t = this.retrieve("highlight:original", this.getStyle("background-color")), t = "transparent" == t ? "#fff" : t); var n = this.get("tween"); return n.start("background-color", e || "#ffff88", t).chain(function() { this.setStyle("background-color", this.retrieve("highlight:original")), n.callChain() }.bind(this)), this }
    }),
    function() {
        var e = function() {},
            t = "onprogress" in new Browser.Request,
            n = this.Request = new Class({
                Implements: [Chain, Events, Options, Class.Thenable],
                options: { url: "", data: "", headers: { "X-Requested-With": "XMLHttpRequest", Accept: "text/javascript, text/html, application/xml, text/xml, */*" }, async: !0, format: !1, method: "post", link: "ignore", isSuccess: null, emulation: !0, urlEncoded: !0, encoding: "utf-8", evalScripts: !1, evalResponse: !1, timeout: 0, noCache: !1 },
                initialize: function(e) { this.xhr = new Browser.Request, this.setOptions(e), this.headers = this.options.headers },
                onStateChange: function() {
                    var n = this.xhr;
                    4 == n.readyState && this.running && (this.running = !1, this.status = 0, Function.attempt(function() {
                        var e = n.status;
                        this.status = 1223 == e ? 204 : e
                    }.bind(this)), n.onreadystatechange = e, t && (n.onprogress = n.onloadstart = e), this.timer && (clearTimeout(this.timer), delete this.timer), this.response = { text: this.xhr.responseText || "", xml: this.xhr.responseXML }, this.options.isSuccess.call(this, this.status) ? this.success(this.response.text, this.response.xml) : this.failure())
                },
                isSuccess: function() { var e = this.status; return e >= 200 && e < 300 },
                isRunning: function() { return !!this.running },
                processScripts: function(e) { return this.options.evalResponse || /(ecma|java)script/.test(this.getHeader("Content-type")) ? Browser.exec(e) : e.stripScripts(this.options.evalScripts) },
                success: function(e, t) { this.onSuccess(this.processScripts(e), t), this.resolve({ text: e, xml: t }) },
                onSuccess: function() { this.fireEvent("complete", arguments).fireEvent("success", arguments).callChain() },
                failure: function() { this.onFailure(), this.reject({ reason: "failure", xhr: this.xhr }) },
                onFailure: function() { this.fireEvent("complete").fireEvent("failure", this.xhr) },
                loadstart: function(e) { this.fireEvent("loadstart", [e, this.xhr]) },
                progress: function(e) { this.fireEvent("progress", [e, this.xhr]) },
                timeout: function() { this.fireEvent("timeout", this.xhr), this.reject({ reason: "timeout", xhr: this.xhr }) },
                setHeader: function(e, t) { return this.headers[e] = t, this },
                getHeader: function(e) { return Function.attempt(function() { return this.xhr.getResponseHeader(e) }.bind(this)) },
                check: function() {
                    if (!this.running) return !0;
                    switch (this.options.link) {
                        case "cancel":
                            return this.cancel(), !0;
                        case "chain":
                            return this.chain(this.caller.pass(arguments, this)), !1
                    }
                    return !1
                },
                send: function(e) {
                    if (!this.check(e)) return this;
                    this.options.isSuccess = this.options.isSuccess || this.isSuccess, this.running = !0;
                    var n = typeOf(e);
                    "string" != n && "element" != n || (e = { data: e });
                    var i = this.options;
                    e = Object.append({ data: i.data, url: i.url, method: i.method }, e);
                    var r = e.data,
                        s = String(e.url),
                        a = e.method.toLowerCase();
                    switch (typeOf(r)) {
                        case "element":
                            r = document.id(r).toQueryString();
                            break;
                        case "object":
                        case "hash":
                            r = Object.toQueryString(r)
                    }
                    if (this.options.format) {
                        var o = "format=" + this.options.format;
                        r = r ? o + "&" + r : o
                    }
                    if (this.options.emulation && !["get", "post"].contains(a)) {
                        var l = "_method=" + a;
                        r = r ? l + "&" + r : l, a = "post"
                    }
                    if (this.options.urlEncoded && ["post", "put"].contains(a)) {
                        var u = this.options.encoding ? "; charset=" + this.options.encoding : "";
                        this.headers["Content-type"] = "application/x-www-form-urlencoded" + u
                    }
                    s || (s = document.location.pathname);
                    var h = s.lastIndexOf("/");
                    h > -1 && (h = s.indexOf("#")) > -1 && (s = s.substr(0, h)), this.options.noCache && (s += (s.indexOf("?") > -1 ? "&" : "?") + String.uniqueID()), !r || "get" != a && "delete" != a || (s += (s.indexOf("?") > -1 ? "&" : "?") + r, r = null);
                    var c = this.xhr;
                    return t && (c.onloadstart = this.loadstart.bind(this), c.onprogress = this.progress.bind(this)), c.open(a.toUpperCase(), s, this.options.async, this.options.user, this.options.password), (this.options.user || this.options.withCredentials) && "withCredentials" in c && (c.withCredentials = !0), c.onreadystatechange = this.onStateChange.bind(this), Object.each(this.headers, function(e, t) { try { c.setRequestHeader(t, e) } catch (n) { this.fireEvent("exception", [t, e]), this.reject({ reason: "exception", xhr: c, exception: n }) } }, this), "pending" !== this.getThenableState() && this.resetThenable({ reason: "send" }), this.fireEvent("request"), c.send(r), this.options.async ? this.options.timeout && (this.timer = this.timeout.delay(this.options.timeout, this)) : this.onStateChange(), this
                },
                cancel: function() {
                    if (!this.running) return this;
                    this.running = !1;
                    var n = this.xhr;
                    return n.abort(), this.timer && (clearTimeout(this.timer), delete this.timer), n.onreadystatechange = e, t && (n.onprogress = n.onloadstart = e), this.xhr = new Browser.Request, this.fireEvent("cancel"), this.reject({ reason: "cancel", xhr: n }), this
                }
            }),
            i = {};
        ["get", "post", "put", "delete", "patch", "head", "GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"].each(function(e) { i[e] = function(t) { var n = { method: e }; return null != t && (n.data = t), this.send(n) } }), n.implement(i), Element.Properties.send = { set: function(e) { return this.get("send").cancel().setOptions(e), this }, get: function() { var e = this.retrieve("send"); return e || (e = new n({ data: this, link: "cancel", method: this.get("method") || "post", url: this.get("action") }), this.store("send", e)), e } }, Element.implement({ send: function(e) { var t = this.get("send"); return t.send({ data: this, url: e || t.options.url }), this } })
    }(), Request.HTML = new Class({
        Extends: Request,
        options: { update: !1, append: !1, evalScripts: !0, filter: !1, headers: { Accept: "text/html, application/xml, text/xml, */*" } },
        success: function(e) {
            var t = this.options,
                n = this.response;
            n.html = e.stripScripts(function(e) { n.javascript = e });
            var i = n.html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
            i && (n.html = i[1]);
            var r = new Element("div").set("html", n.html);
            if (n.tree = r.childNodes, n.elements = r.getElements(t.filter || "*"), t.filter && (n.tree = n.elements), t.update) {
                var s = document.id(t.update).empty();
                t.filter ? s.adopt(n.elements) : s.set("html", n.html)
            } else if (t.append) {
                var a = document.id(t.append);
                t.filter ? n.elements.reverse().inject(a) : a.adopt(r.getChildren())
            }
            t.evalScripts && Browser.exec(n.javascript), this.onSuccess(n.tree, n.elements, n.html, n.javascript), this.resolve({ tree: n.tree, elements: n.elements, html: n.html, javascript: n.javascript })
        }
    }), Element.Properties.load = { set: function(e) { return this.get("load").cancel().setOptions(e), this }, get: function() { var e = this.retrieve("load"); return e || (e = new Request.HTML({ data: this, link: "cancel", update: this, method: "get" }), this.store("load", e)), e } }, Element.implement({ load: function() { return this.get("load").send(Array.link(arguments, { data: Type.isObject, url: Type.isString })), this } }), "undefined" == typeof JSON && (this.JSON = {}), JSON = new Hash({ stringify: JSON.stringify, parse: JSON.parse }),
    function() {
        var special = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
            escape = function(e) { return special[e] || "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) };
        JSON.validate = function(e) { return e = e.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""), /^[\],:{}\s]*$/.test(e) }, JSON.encode = JSON.stringify ? function(e) { return JSON.stringify(e) } : function(e) {
            switch (e && e.toJSON && (e = e.toJSON()), typeOf(e)) {
                case "string":
                    return '"' + e.replace(/[\x00-\x1f\\"]/g, escape) + '"';
                case "array":
                    return "[" + e.map(JSON.encode).clean() + "]";
                case "object":
                case "hash":
                    var t = [];
                    return Object.each(e, function(e, n) {
                        var i = JSON.encode(e);
                        i && t.push(JSON.encode(n) + ":" + i)
                    }), "{" + t + "}";
                case "number":
                case "boolean":
                    return "" + e;
                case "null":
                    return "null"
            }
            return null
        }, JSON.secure = !0, JSON.secure = !1, JSON.decode = function(string, secure) { if (!string || "string" != typeOf(string)) return null; if (null == secure && (secure = JSON.secure), secure) { if (JSON.parse) return JSON.parse(string); if (!JSON.validate(string)) throw new Error("JSON could not decode the input; security is enabled and the value is not secure.") } return eval("(" + string + ")") }
    }(), Request.JSON = new Class({
        Extends: Request,
        options: { secure: !0 },
        initialize: function(e) { this.parent(e), Object.append(this.headers, { Accept: "application/json", "X-Request": "JSON" }) },
        success: function(e) {
            var t;
            try { t = this.response.json = JSON.decode(e, this.options.secure) } catch (t) { return void this.fireEvent("error", [e, t]) }
            null == t ? this.failure() : (this.onSuccess(t, e), this.resolve({ json: t, text: e }))
        }
    });
var Cookie = new Class({
    Implements: Options,
    options: { path: "/", domain: !1, duration: !1, secure: !1, document: document, encode: !0, httpOnly: !1 },
    initialize: function(e, t) { this.key = e, this.setOptions(t) },
    write: function(e) {
        if (this.options.encode && (e = encodeURIComponent(e)), this.options.domain && (e += "; domain=" + this.options.domain), this.options.path && (e += "; path=" + this.options.path), this.options.duration) {
            var t = new Date;
            t.setTime(t.getTime() + 24 * this.options.duration * 60 * 60 * 1e3), e += "; expires=" + t.toGMTString()
        }
        return this.options.secure && (e += "; secure"), this.options.httpOnly && (e += "; HttpOnly"), this.options.document.cookie = this.key + "=" + e, this
    },
    read: function() { var e = this.options.document.cookie.match("(?:^|;)\\s*" + this.key.escapeRegExp() + "=([^;]*)"); return e ? decodeURIComponent(e[1]) : null },
    dispose: function() { return new Cookie(this.key, Object.merge({}, this.options, { duration: -1 })).write(""), this }
});
Cookie.write = function(e, t, n) { return new Cookie(e, n).write(t) }, Cookie.read = function(e) { return new Cookie(e).read() }, Cookie.dispose = function(e, t) { return new Cookie(e, t).dispose() },
    function(e, t) {
        var n, i, r, s, a = [],
            o = t.createElement("div"),
            l = function() { clearTimeout(s), n || (Browser.loaded = n = !0, t.removeListener("DOMContentLoaded", l).removeListener("readystatechange", u), t.fireEvent("domready"), e.fireEvent("domready")), t = e = o = null },
            u = function() {
                for (var e = a.length; e--;)
                    if (a[e]()) return l(), !0;
                return !1
            },
            h = function() { clearTimeout(s), u() || (s = setTimeout(h, 10)) };
        t.addListener("DOMContentLoaded", l);
        var c = function() { try { return o.doScroll(), !0 } catch (e) {} return !1 };
        o.doScroll && !c() && (a.push(c), r = !0), t.readyState && a.push(function() {
            var e = t.readyState;
            return "loaded" == e || "complete" == e
        }), "onreadystatechange" in t ? t.addListener("readystatechange", u) : r = !0, r && h(), Element.Events.domready = { onAdd: function(e) { n && e.call(this) } }, Element.Events.load = { base: "load", onAdd: function(t) { i && this == e && t.call(this) }, condition: function() { return this == e && (l(), delete Element.Events.load), !0 } }, e.addEvent("load", function() { i = !0 })
    }(window, document), MooTools.More = { version: "1.6.0", build: "45b71db70f879781a7e0b0d3fb3bb1307c2521eb" },
    function() {
        var e = { wait: function(e) { return this.chain(function() { return this.callChain.delay(null == e ? 500 : e, this), this }.bind(this)) } };
        Chain.implement(e), this.Fx && Fx.implement(e), this.Element && Element.implement && this.Fx && Element.implement({
            chains: function(e) {
                return Array.convert(e || ["tween", "morph", "reveal"]).each(function(e) {
                    (e = this.get(e)) && e.setOptions({ link: "chain" })
                }, this), this
            },
            pauseFx: function(e, t) { return this.chains(t).get(t || "tween").wait(e), this }
        })
    }(), Class.Mutators.Binds = function(e) { return this.prototype.initialize || this.implement("initialize", function() {}), Array.convert(e).concat(this.prototype.Binds || []) }, Class.Mutators.initialize = function(e) {
        return function() {
            return Array.convert(this.Binds).each(function(e) {
                var t = this[e];
                t && (this[e] = t.bind(this))
            }, this), e.apply(this, arguments)
        }
    }, Class.Occlude = new Class({ occlude: function(e, t) { t = document.id(t || this.element); var n = t.retrieve(e || this.property); return n && !this.occluded ? this.occluded = n : (this.occluded = !1, t.store(e || this.property, this), this.occluded) } }), Class.refactor = function(e, t) {
        return Object.each(t, function(t, n) {
            var i = e.prototype[n];
            i = i && i.$origin || i || function() {}, e.implement(n, "function" == typeof t ? function() {
                var e = this.previous;
                this.previous = i;
                var n = t.apply(this, arguments);
                return this.previous = e, n
            } : t)
        }), e
    }, Class.Singleton = new Class({
        initialize: function(e) {
            var t, n = new Class(e);
            return function() {
                if (t) return t;
                t = Object.append({}, n.prototype), t.constructor = n;
                var e = n.apply(t, arguments);
                return t = "object" == typeof e ? e : t
            }
        }
    }),
    function() {
        Events.Pseudos = function(e, t, n) {
            var i = function(e) {
                    return {
                        store: e.store ? function(t, n) { e.store("_monitorEvents:" + t, n) } : function(t, n) {
                            (e._monitorEvents || (e._monitorEvents = {}))[t] = n
                        },
                        retrieve: e.retrieve ? function(t, n) { return e.retrieve("_monitorEvents:" + t, n) } : function(t, n) { return e._monitorEvents ? e._monitorEvents[t] || n : n }
                    }
                },
                r = function(t) {
                    if (-1 == t.indexOf(":") || !e) return null;
                    for (var n = Slick.parse(t).expressions[0][0], i = n.pseudos, r = i.length, s = []; r--;) {
                        var a = i[r].key,
                            o = e[a];
                        null != o && s.push({ event: n.tag, value: i[r].value, pseudo: a, original: t, listener: o })
                    }
                    return s.length ? s : null
                };
            return {
                addEvent: function(e, n, s) {
                    var a = r(e);
                    if (!a) return t.call(this, e, n, s);
                    var o = i(this),
                        l = o.retrieve(e, []),
                        u = a[0].event,
                        h = Array.slice(arguments, 2),
                        c = n,
                        d = this;
                    return a.each(function(e) {
                        var t = e.listener,
                            n = c;
                        0 == t ? u += ":" + e.pseudo + "(" + e.value + ")" : c = function() { t.call(d, e, n, arguments, c) }
                    }), l.include({ type: u, event: n, monitor: c }), o.store(e, l), e != u && t.apply(this, [e, n].concat(h)), t.apply(this, [u, c].concat(h))
                },
                removeEvent: function(e, t) {
                    if (!r(e)) return n.call(this, e, t);
                    var s = i(this),
                        a = s.retrieve(e);
                    if (!a) return this;
                    var o = Array.slice(arguments, 2);
                    return n.apply(this, [e, t].concat(o)), a.each(function(e, i) { t && e.event != t || n.apply(this, [e.type, e.monitor].concat(o)), delete a[i] }, this), s.store(e, a), this
                }
            }
        };
        var e = { once: function(e, t, n, i) { t.apply(this, n), this.removeEvent(e.event, i).removeEvent(e.original, t) }, throttle: function(e, t, n) { t._throttled || (t.apply(this, n), t._throttled = setTimeout(function() { t._throttled = !1 }, e.value || 250)) }, pause: function(e, t, n) { clearTimeout(t._pause), t._pause = t.delay(e.value || 250, this, n) } };
        Events.definePseudo = function(t, n) { return e[t] = n, this }, Events.lookupPseudo = function(t) { return e[t] };
        var t = Events.prototype;
        Events.implement(Events.Pseudos(e, t.addEvent, t.removeEvent)), ["Request", "Fx"].each(function(e) { this[e] && this[e].implement(Events.prototype) })
    }(),
    function() {
        var e = this.Drag = new Class({
            Implements: [Events, Options],
            options: { snap: 6, unit: "px", grid: !1, style: !0, limit: !1, handle: !1, invert: !1, unDraggableTags: ["button", "input", "a", "textarea", "select", "option"], preventDefault: !1, stopPropagation: !1, compensateScroll: !1, modifiers: { x: "left", y: "top" } },
            initialize: function() {
                var t = Array.link(arguments, { options: Type.isObject, element: function(e) { return null != e } });
                this.element = document.id(t.element), this.document = this.element.getDocument(), this.setOptions(t.options || {});
                var n = typeOf(this.options.handle);
                this.handles = ("array" == n || "collection" == n ? $$(this.options.handle) : document.id(this.options.handle)) || this.element, this.mouse = { now: {}, pos: {} }, this.value = { start: {}, now: {} }, this.offsetParent = function(e) { var t = e.getOffsetParent(); return !t || /^(?:body|html)$/i.test(t.tagName) ? window : document.id(t) }(this.element), this.selection = "selectstart" in document ? "selectstart" : "mousedown", this.compensateScroll = { start: {}, diff: {}, last: {} }, !("ondragstart" in document) || "FileReader" in window || e.ondragstartFixed || (document.ondragstart = Function.convert(!1), e.ondragstartFixed = !0), this.bound = { start: this.start.bind(this), check: this.check.bind(this), drag: this.drag.bind(this), stop: this.stop.bind(this), cancel: this.cancel.bind(this), eventStop: Function.convert(!1), scrollListener: this.scrollListener.bind(this) }, this.attach()
            },
            attach: function() { return this.handles.addEvent("mousedown", this.bound.start), this.handles.addEvent("touchstart", this.bound.start), this.options.compensateScroll && this.offsetParent.addEvent("scroll", this.bound.scrollListener), this },
            detach: function() { return this.handles.removeEvent("mousedown", this.bound.start), this.handles.removeEvent("touchstart", this.bound.start), this.options.compensateScroll && this.offsetParent.removeEvent("scroll", this.bound.scrollListener), this },
            scrollListener: function() {
                if (this.mouse.start) {
                    var e = this.offsetParent.getScroll();
                    if ("absolute" == this.element.getStyle("position")) {
                        var t = this.sumValues(e, this.compensateScroll.last, -1);
                        this.mouse.now = this.sumValues(this.mouse.now, t, 1)
                    } else this.compensateScroll.diff = this.sumValues(e, this.compensateScroll.start, -1);
                    this.offsetParent != window && (this.compensateScroll.diff = this.sumValues(this.compensateScroll.start, e, -1)), this.compensateScroll.last = e, this.render(this.options)
                }
            },
            sumValues: function(e, t, n) {
                var i = {},
                    r = this.options;
                for (var s in r.modifiers) r.modifiers[s] && (i[s] = e[s] + t[s] * n);
                return i
            },
            start: function(e) {
                if (!this.options.unDraggableTags.contains(e.target.get("tag"))) {
                    var t = this.options;
                    if (!e.rightClick) {
                        t.preventDefault && e.preventDefault(), t.stopPropagation && e.stopPropagation(), this.compensateScroll.start = this.compensateScroll.last = this.offsetParent.getScroll(), this.compensateScroll.diff = { x: 0, y: 0 }, this.mouse.start = e.page, this.fireEvent("beforeStart", this.element);
                        var n = t.limit;
                        this.limit = { x: [], y: [] };
                        var i, r, s = this.offsetParent == window ? null : this.offsetParent;
                        for (i in t.modifiers)
                            if (t.modifiers[i]) {
                                var a = this.element.getStyle(t.modifiers[i]);
                                if (a && !a.match(/px$/) && (r || (r = this.element.getCoordinates(s)), a = r[t.modifiers[i]]), t.style ? this.value.now[i] = (a || 0).toInt() : this.value.now[i] = this.element[t.modifiers[i]], t.invert && (this.value.now[i] *= -1), this.mouse.pos[i] = e.page[i] - this.value.now[i], n && n[i])
                                    for (var o = 2; o--;) {
                                        var l = n[i][o];
                                        (l || 0 === l) && (this.limit[i][o] = "function" == typeof l ? l() : l)
                                    }
                            }
                            "number" == typeOf(this.options.grid) && (this.options.grid = { x: this.options.grid, y: this.options.grid });
                        var u = { mousemove: this.bound.check, mouseup: this.bound.cancel, touchmove: this.bound.check, touchend: this.bound.cancel };
                        u[this.selection] = this.bound.eventStop, this.document.addEvents(u)
                    }
                }
            },
            check: function(e) { this.options.preventDefault && e.preventDefault(), Math.round(Math.sqrt(Math.pow(e.page.x - this.mouse.start.x, 2) + Math.pow(e.page.y - this.mouse.start.y, 2))) > this.options.snap && (this.cancel(), this.document.addEvents({ mousemove: this.bound.drag, mouseup: this.bound.stop, touchmove: this.bound.drag, touchend: this.bound.stop }), this.fireEvent("start", [this.element, e]).fireEvent("snap", this.element)) },
            drag: function(e) {
                var t = this.options;
                t.preventDefault && e.preventDefault(), this.mouse.now = this.sumValues(e.page, this.compensateScroll.diff, -1), this.render(t), this.fireEvent("drag", [this.element, e])
            },
            render: function(e) { for (var t in e.modifiers) e.modifiers[t] && (this.value.now[t] = this.mouse.now[t] - this.mouse.pos[t], e.invert && (this.value.now[t] *= -1), e.limit && this.limit[t] && ((this.limit[t][1] || 0 === this.limit[t][1]) && this.value.now[t] > this.limit[t][1] ? this.value.now[t] = this.limit[t][1] : (this.limit[t][0] || 0 === this.limit[t][0]) && this.value.now[t] < this.limit[t][0] && (this.value.now[t] = this.limit[t][0])), e.grid[t] && (this.value.now[t] -= (this.value.now[t] - (this.limit[t][0] || 0)) % e.grid[t]), e.style ? this.element.setStyle(e.modifiers[t], this.value.now[t] + e.unit) : this.element[e.modifiers[t]] = this.value.now[t]) },
            cancel: function(e) { this.document.removeEvents({ mousemove: this.bound.check, mouseup: this.bound.cancel, touchmove: this.bound.check, touchend: this.bound.cancel }), e && (this.document.removeEvent(this.selection, this.bound.eventStop), this.fireEvent("cancel", this.element)) },
            stop: function(e) {
                var t = { mousemove: this.bound.drag, mouseup: this.bound.stop, touchmove: this.bound.drag, touchend: this.bound.stop };
                t[this.selection] = this.bound.eventStop, this.document.removeEvents(t), this.mouse.start = null, e && this.fireEvent("complete", [this.element, e])
            }
        })
    }(), Element.implement({ makeResizable: function(e) { var t = new Drag(this, Object.merge({ modifiers: { x: "width", y: "height" } }, e)); return this.store("resizer", t), t.addEvent("drag", function() { this.fireEvent("resize", t) }.bind(this)) } }), Drag.Move = new Class({
        Extends: Drag,
        options: { droppables: [], container: !1, precalculate: !1, includeMargins: !0, checkDroppables: !0 },
        initialize: function(e, t) {
            if (this.parent(e, t), e = this.element, this.droppables = $$(this.options.droppables), this.setContainer(this.options.container), this.options.style) {
                if ("left" == this.options.modifiers.x && "top" == this.options.modifiers.y) {
                    var n = e.getOffsetParent(),
                        i = e.getStyles("left", "top");
                    !n || "auto" != i.left && "auto" != i.top || e.setPosition(e.getPosition(n))
                }
                "static" == e.getStyle("position") && e.setStyle("position", "absolute")
            }
            this.addEvent("start", this.checkDroppables, !0), this.overed = null
        },
        setContainer: function(e) { this.container = document.id(e), this.container && "element" != typeOf(this.container) && (this.container = document.id(this.container.getDocument().body)) },
        start: function(e) { this.container && (this.options.limit = this.calculateLimit()), this.options.precalculate && (this.positions = this.droppables.map(function(e) { return e.getCoordinates() })), this.parent(e) },
        calculateLimit: function() {
            var e = this.element,
                t = this.container,
                n = document.id(e.getOffsetParent()) || document.body,
                i = t.getCoordinates(n),
                r = {},
                s = {},
                a = {},
                o = {},
                l = {},
                u = n.getScroll();
            ["top", "right", "bottom", "left"].each(function(i) { r[i] = e.getStyle("margin-" + i).toInt(), s[i] = e.getStyle("border-" + i).toInt(), a[i] = t.getStyle("margin-" + i).toInt(), o[i] = t.getStyle("border-" + i).toInt(), l[i] = n.getStyle("padding-" + i).toInt() }, this);
            var h = e.offsetWidth + r.left + r.right,
                c = e.offsetHeight + r.top + r.bottom,
                d = 0 + u.x,
                m = 0 + u.y,
                f = i.right - o.right - h + u.x,
                p = i.bottom - o.bottom - c + u.y;
            if (this.options.includeMargins ? (d += r.left, m += r.top) : (f += r.right, p += r.bottom), "relative" == e.getStyle("position")) {
                var g = e.getCoordinates(n);
                g.left -= e.getStyle("left").toInt(), g.top -= e.getStyle("top").toInt(), d -= g.left, m -= g.top, "relative" != t.getStyle("position") && (d += o.left, m += o.top), f += r.left - g.left, p += r.top - g.top, t != n && (d += a.left + l.left, !l.left && d < 0 && (d = 0), m += n == document.body ? 0 : a.top + l.top, !l.top && m < 0 && (m = 0))
            } else d -= r.left, m -= r.top, t != n && (d += i.left + o.left, m += i.top + o.top);
            return { x: [d, f], y: [m, p] }
        },
        getDroppableCoordinates: function(e) {
            var t = e.getCoordinates();
            if ("fixed" == e.getStyle("position")) {
                var n = window.getScroll();
                t.left += n.x, t.right += n.x, t.top += n.y, t.bottom += n.y
            }
            return t
        },
        checkDroppables: function() {
            var e = this.droppables.filter(function(e, t) { e = this.positions ? this.positions[t] : this.getDroppableCoordinates(e); var n = this.mouse.now; return n.x > e.left && n.x < e.right && n.y < e.bottom && n.y > e.top }, this).getLast();
            this.overed != e && (this.overed && this.fireEvent("leave", [this.element, this.overed]), e && this.fireEvent("enter", [this.element, e]), this.overed = e)
        },
        drag: function(e) { this.parent(e), this.options.checkDroppables && this.droppables.length && this.checkDroppables() },
        stop: function(e) { return this.checkDroppables(), this.fireEvent("drop", [this.element, this.overed, e]), this.overed = null, this.parent(e) }
    }), Element.implement({ makeDraggable: function(e) { var t = new Drag.Move(this, e); return this.store("dragger", t), t } }),
    function() {
        var e = function(e, t) { var n = []; return Object.each(t, function(t) { Object.each(t, function(t) { e.each(function(e) { n.push(e + "-" + t + ("border" == e ? "-width" : "")) }) }) }), n },
            t = function(e, t) { var n = 0; return Object.each(t, function(t, i) { i.test(e) && (n += t.toInt()) }), n },
            n = function(e) { return !(e && !e.offsetHeight && !e.offsetWidth) };
        Element.implement({
            measure: function(e) {
                if (n(this)) return e.call(this);
                for (var t = this.getParent(), i = []; !n(t) && t != document.body;) i.push(t.expose()), t = t.getParent();
                var r = this.expose(),
                    s = e.call(this);
                return r(), i.each(function(e) { e() }), s
            },
            expose: function() {
                if ("none" != this.getStyle("display")) return function() {};
                var e = this.style.cssText;
                return this.setStyles({ display: "block", position: "absolute", visibility: "hidden" }),
                    function() { this.style.cssText = e }.bind(this)
            },
            getDimensions: function(e) {
                e = Object.merge({ computeSize: !1 }, e);
                var t = { x: 0, y: 0 },
                    n = function(e, t) { return t.computeSize ? e.getComputedSize(t) : e.getSize() },
                    i = this.getParent("body");
                if (i && "none" == this.getStyle("display")) t = this.measure(function() { return n(this, e) });
                else if (i) try { t = n(this, e) } catch (e) {}
                return Object.append(t, t.x || 0 === t.x ? { width: t.x, height: t.y } : { x: t.width, y: t.height })
            },
            getComputedSize: function(n) {
                n && n.plains && (n.planes = n.plains), n = Object.merge({ styles: ["padding", "border"], planes: { height: ["top", "bottom"], width: ["left", "right"] }, mode: "both" }, n);
                var i, r = {},
                    s = { width: 0, height: 0 };
                return "vertical" == n.mode ? (delete s.width, delete n.planes.width) : "horizontal" == n.mode && (delete s.height, delete n.planes.height), e(n.styles, n.planes).each(function(e) { r[e] = this.getStyle(e).toInt() }, this), Object.each(n.planes, function(e, n) {
                    var a = n.capitalize(),
                        o = this.getStyle(n);
                    "auto" != o || i || (i = this.getDimensions()), o = r[n] = "auto" == o ? i[n] : o.toInt(), s["total" + a] = o, e.each(function(e) {
                        var n = t(e, r);
                        s["computed" + e.capitalize()] = n, s["total" + a] += n
                    })
                }, this), Object.append(s, r)
            }
        })
    }(),
    function() {
        this.Slider = new Class({
            Implements: [Events, Options],
            Binds: ["clickedElement", "draggedKnob", "scrolledElement"],
            options: { onTick: function(e) { this.setKnobPosition(e) }, initialStep: 0, snap: !1, offset: 0, range: !1, wheel: !1, steps: 100, mode: "horizontal" },
            initialize: function(e, t, n) {
                this.setOptions(n), n = this.options, this.element = document.id(e), t = this.knob = document.id(t), this.previousChange = this.previousEnd = this.step = n.initialStep ? n.initialStep : n.range ? n.range[0] : 0;
                var i = {},
                    r = { x: !1, y: !1 };
                switch (n.mode) {
                    case "vertical":
                        this.axis = "y", this.property = "top", this.offset = "offsetHeight";
                        break;
                    case "horizontal":
                        this.axis = "x", this.property = "left", this.offset = "offsetWidth"
                }
                this.setSliderDimensions(), this.setRange(n.range, null, !0), "static" == t.getStyle("position") && t.setStyle("position", "relative"), t.setStyle(this.property, -n.offset), r[this.axis] = this.property, i[this.axis] = [-n.offset, this.full - n.offset];
                var s = { snap: 0, limit: i, modifiers: r, onDrag: this.draggedKnob, onStart: this.draggedKnob, onBeforeStart: function() { this.isDragging = !0 }.bind(this), onCancel: function() { this.isDragging = !1 }.bind(this), onComplete: function() { this.isDragging = !1, this.draggedKnob(), this.end() }.bind(this) };
                n.snap && this.setSnap(s), this.drag = new Drag(t, s), null != n.initialStep && this.set(n.initialStep, !0), this.attach()
            },
            attach: function() { return this.element.addEvent("mousedown", this.clickedElement), this.options.wheel && this.element.addEvent("mousewheel", this.scrolledElement), this.drag.attach(), this },
            detach: function() { return this.element.removeEvent("mousedown", this.clickedElement).removeEvent("mousewheel", this.scrolledElement), this.drag.detach(), this },
            autosize: function() { return this.setSliderDimensions().setKnobPosition(this.toPosition(this.step)), this.drag.options.limit[this.axis] = [-this.options.offset, this.full - this.options.offset], this.options.snap && this.setSnap(), this },
            setSnap: function(e) { return e || (e = this.drag.options), e.grid = Math.ceil(this.stepWidth), e.limit[this.axis][1] = this.element[this.offset], this },
            setKnobPosition: function(e) { return this.options.snap && (e = this.toPosition(this.step)), this.knob.setStyle(this.property, e), this },
            setSliderDimensions: function() { return this.full = this.element.measure(function() { return this.half = this.knob[this.offset] / 2, this.element[this.offset] - this.knob[this.offset] + 2 * this.options.offset }.bind(this)), this },
            set: function(e, t) { return this.range > 0 ^ e < this.min || (e = this.min), this.range > 0 ^ e > this.max || (e = this.max), this.step = e.round(this.modulus.decimalLength), t ? this.checkStep().setKnobPosition(this.toPosition(this.step)) : this.checkStep().fireEvent("tick", this.toPosition(this.step)).fireEvent("move").end(), this },
            setRange: function(e, t, n) {
                this.min = Array.pick([e[0], 0]), this.max = Array.pick([e[1], this.options.steps]), this.range = this.max - this.min, this.steps = this.options.steps || this.full;
                this.stepSize = Math.abs(this.range) / this.steps;
                return this.stepWidth = this.stepSize * this.full / Math.abs(this.range), this.setModulus(), e && this.set(Array.pick([t, this.step]).limit(this.min, this.max), n), this
            },
            setModulus: function() {
                for (var e = ((this.stepSize + "").split(".")[1] || []).length, t = "1"; e--;) t += "0";
                this.modulus = { multiplier: t.toInt(10), decimalLength: t.length - 1 }
            },
            clickedElement: function(e) {
                if (!this.isDragging && e.target != this.knob) {
                    var t = this.range < 0 ? -1 : 1,
                        n = e.page[this.axis] - this.element.getPosition()[this.axis] - this.half;
                    n = n.limit(-this.options.offset, this.full - this.options.offset), this.step = (this.min + t * this.toStep(n)).round(this.modulus.decimalLength), this.checkStep().fireEvent("tick", n).fireEvent("move").end()
                }
            },
            scrolledElement: function(e) {
                var t = "horizontal" == this.options.mode ? e.wheel < 0 : e.wheel > 0;
                this.set(this.step + (t ? -1 : 1) * this.stepSize), e.stop()
            },
            draggedKnob: function() {
                var e = this.range < 0 ? -1 : 1,
                    t = this.drag.value.now[this.axis];
                t = t.limit(-this.options.offset, this.full - this.options.offset), this.step = (this.min + e * this.toStep(t)).round(this.modulus.decimalLength), this.checkStep(), this.fireEvent("move")
            },
            checkStep: function() { var e = this.step; return this.previousChange != e && (this.previousChange = e, this.fireEvent("change", e)), this },
            end: function() { var e = this.step; return this.previousEnd !== e && (this.previousEnd = e, this.fireEvent("complete", e + "")), this },
            toStep: function(e) { var t = (e + this.options.offset) * this.stepSize / this.full * this.steps; return this.options.steps ? (t - t * this.modulus.multiplier % (this.stepSize * this.modulus.multiplier) / this.modulus.multiplier).round(this.modulus.decimalLength) : t },
            toPosition: function(e) { return this.full * Math.abs(this.min - e) / (this.steps * this.stepSize) - this.options.offset || 0 }
        })
    }(),
    function() {
        this.Sortables = new Class({
            Implements: [Events, Options],
            options: { opacity: 1, clone: !1, revert: !1, handle: !1, dragOptions: {}, unDraggableTags: ["button", "input", "a", "textarea", "select", "option"], snap: 4, constrain: !1, preventDefault: !1 },
            initialize: function(e, t) { this.setOptions(t), this.elements = [], this.lists = [], this.idle = !0, this.addLists($$(document.id(e) || e)), this.options.clone || (this.options.revert = !1), this.options.revert && (this.effect = new Fx.Morph(null, Object.merge({ duration: 250, link: "cancel" }, this.options.revert))) },
            attach: function() { return this.addLists(this.lists), this },
            detach: function() { return this.lists = this.removeLists(this.lists), this },
            addItems: function() {
                return Array.flatten(arguments).each(function(e) {
                    this.elements.push(e);
                    var t = e.retrieve("sortables:start", function(t) { this.start.call(this, t, e) }.bind(this));
                    (this.options.handle ? e.getElement(this.options.handle) || e : e).addEvent("mousedown", t)
                }, this), this
            },
            addLists: function() { return Array.flatten(arguments).each(function(e) { this.lists.include(e), this.addItems(e.getChildren()) }, this), this },
            removeItems: function() { return $$(Array.flatten(arguments).map(function(e) { this.elements.erase(e); var t = e.retrieve("sortables:start"); return (this.options.handle ? e.getElement(this.options.handle) || e : e).removeEvent("mousedown", t), e }, this)) },
            removeLists: function() { return $$(Array.flatten(arguments).map(function(e) { return this.lists.erase(e), this.removeItems(e.getChildren()), e }, this)) },
            getDroppableCoordinates: function(e) {
                var t = e.getOffsetParent(),
                    n = e.getPosition(t),
                    i = { w: window.getScroll(), offsetParent: t.getScroll() };
                return n.x += i.offsetParent.x, n.y += i.offsetParent.y, "fixed" == t.getStyle("position") && (n.x -= i.w.x, n.y -= i.w.y), n
            },
            getClone: function(e, t) { if (!this.options.clone) return new Element(t.tagName).inject(document.body); if ("function" == typeOf(this.options.clone)) return this.options.clone.call(this, e, t, this.list); var n = t.clone(!0).setStyles({ margin: 0, position: "absolute", visibility: "hidden", width: t.getStyle("width") }).addEvent("mousedown", function(e) { t.fireEvent("mousedown", e) }); return n.get("html").test("radio") && n.getElements("input[type=radio]").each(function(e, n) { e.set("name", "clone_" + n), e.get("checked") && t.getElements("input[type=radio]")[n].set("checked", !0) }), n.inject(this.list).setPosition(this.getDroppableCoordinates(this.element)) },
            getDroppables: function() { var e = this.list.getChildren().erase(this.clone).erase(this.element); return this.options.constrain || e.append(this.lists).erase(this.list), e },
            insert: function(e, t) {
                var n = "inside";
                this.lists.contains(t) ? (this.list = t, this.drag.droppables = this.getDroppables()) : n = this.element.getAllPrevious().contains(t) ? "before" : "after", this.element.inject(t, n), this.fireEvent("sort", [this.element, this.clone])
            },
            start: function(e, t) {!this.idle || e.rightClick || !this.options.handle && this.options.unDraggableTags.contains(e.target.get("tag")) || (this.idle = !1, this.element = t, this.opacity = t.getStyle("opacity"), this.list = t.getParent(), this.clone = this.getClone(e, t), this.drag = new Drag.Move(this.clone, Object.merge({ preventDefault: this.options.preventDefault, snap: this.options.snap, container: this.options.constrain && this.element.getParent(), droppables: this.getDroppables() }, this.options.dragOptions)).addEvents({ onSnap: function() { e.stop(), this.clone.setStyle("visibility", "visible"), this.element.setStyle("opacity", this.options.opacity || 0), this.fireEvent("start", [this.element, this.clone]) }.bind(this), onEnter: this.insert.bind(this), onCancel: this.end.bind(this), onComplete: this.end.bind(this) }), this.clone.inject(this.element, "before"), this.drag.start(e)) },
            end: function() {
                this.drag.detach(), this.element.setStyle("opacity", this.opacity);
                var e = this;
                if (this.effect) {
                    var t = this.element.getStyles("width", "height"),
                        n = this.clone,
                        i = n.computePosition(this.getDroppableCoordinates(n)),
                        r = function() { this.removeEvent("cancel", r), n.destroy(), e.reset() };
                    this.effect.element = n, this.effect.start({ top: i.top, left: i.left, width: t.width, height: t.height, opacity: .25 }).addEvent("cancel", r).chain(r)
                } else this.clone.destroy(), e.reset()
            },
            reset: function() { this.idle = !0, this.fireEvent("complete", this.element) },
            serialize: function() {
                var e = Array.link(arguments, { modifier: Type.isFunction, index: function(e) { return null != e } }),
                    t = this.lists.map(function(t) { return t.getChildren().map(e.modifier || function(e) { return e.get("id") }, this) }, this),
                    n = e.index;
                return 1 == this.lists.length && (n = 0), (n || 0 === n) && n >= 0 && n < this.lists.length ? t[n] : t
            }
        })
    }(),
    function() {
        for (var e = { relay: !1 }, t = ["once", "throttle", "pause"], n = t.length; n--;) e[t[n]] = Events.lookupPseudo(t[n]);
        DOMEvent.definePseudo = function(t, n) { return e[t] = n, this };
        var i = Element.prototype;
        [Element, Window, Document].invoke("implement", Events.Pseudos(e, i.addEvent, i.removeEvent))
    }(),
    function() {
        DOMEvent.definePseudo("keys", function(e, t, n) {
            var i = n[0],
                r = [],
                s = this.retrieve("$moo:keys-pressed", []),
                a = e.value;
            if ("+" != a ? r.append(a.replace("++", function() { return r.push("+"), "" }).split("+")) : r = ["+"], s.include(i.key), r.every(function(e) { return s.contains(e) }) && t.apply(this, n), this.store("$moo:keys-pressed", s), !this.retrieve("$moo:keys-keyup")) {
                var o = function(e) {
                    (function() { s = this.retrieve("$moo:keys-pressed", []).erase(e.key), this.store("$moo:keys-pressed", s) }).delay(0, this)
                };
                this.store("$moo:keys-keyup", o).addEvent("keyup", o)
            }
        }), DOMEvent.defineKeys({ 16: "shift", 17: "control", 18: "alt", 20: "capslock", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 144: "numlock", 145: "scrolllock", 186: ";", 187: "=", 188: ",", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 107: "+", 109: "-", 189: "-" })
    }(),
    function() {
        var e = { a: /[àáâãäåăą]/g, A: /[ÀÁÂÃÄÅĂĄ]/g, c: /[ćčç]/g, C: /[ĆČÇ]/g, d: /[ďđ]/g, D: /[ĎÐ]/g, e: /[èéêëěę]/g, E: /[ÈÉÊËĚĘ]/g, g: /[ğ]/g, G: /[Ğ]/g, i: /[ìíîï]/g, I: /[ÌÍÎÏ]/g, l: /[ĺľł]/g, L: /[ĹĽŁ]/g, n: /[ñňń]/g, N: /[ÑŇŃ]/g, o: /[òóôõöøő]/g, O: /[ÒÓÔÕÖØ]/g, r: /[řŕ]/g, R: /[ŘŔ]/g, s: /[ššş]/g, S: /[ŠŞŚ]/g, t: /[ťţ]/g, T: /[ŤŢ]/g, u: /[ùúûůüµ]/g, U: /[ÙÚÛŮÜ]/g, y: /[ÿý]/g, Y: /[ŸÝ]/g, z: /[žźż]/g, Z: /[ŽŹŻ]/g, th: /[þ]/g, TH: /[Þ]/g, dh: /[ð]/g, DH: /[Ð]/g, ss: /[ß]/g, oe: /[œ]/g, OE: /[Œ]/g, ae: /[æ]/g, AE: /[Æ]/g },
            t = { " ": /[\xa0\u2002\u2003\u2009]/g, "*": /[\xb7]/g, "'": /[\u2018\u2019]/g, '"': /[\u201c\u201d]/g, "...": /[\u2026]/g, "-": /[\u2013]/g, "&raquo;": /[\uFFFD]/g },
            n = { ms: 1, s: 1e3, m: 6e4, h: 36e5 },
            i = /(\d*.?\d+)([msh]+)/,
            r = function(e, t) { var n, i = e; for (n in t) i = i.replace(t[n], n); return i },
            s = function(e, t) { e = e || (t ? "" : "\\w+"); var n = t ? "<" + e + "(?!\\w)[^>]*>([\\s\\S]*?)</" + e + "(?!\\w)>" : "</?" + e + "/?>|<" + e + "[\\s|/][^>]*>"; return new RegExp(n, "gi") };
        String.implement({
            standardize: function() { return r(this, e) },
            repeat: function(e) { return new Array(e + 1).join(this) },
            pad: function(e, t, n) { if (this.length >= e) return this; var i = (null == t ? " " : "" + t).repeat(e - this.length).substr(0, e - this.length); return n && "right" != n ? "left" == n ? i + this : i.substr(0, (i.length / 2).floor()) + this + i.substr(0, (i.length / 2).ceil()) : this + i },
            getTags: function(e, t) { return this.match(s(e, t)) || [] },
            stripTags: function(e, t) { return this.replace(s(e, t), "") },
            tidy: function() { return r(this, t) },
            truncate: function(e, t, n) {
                var i = this;
                if (null == t && 1 == arguments.length && (t = "…"), i.length > e) {
                    if (i = i.substring(0, e), n) { var r = i.lastIndexOf(n); - 1 != r && (i = i.substr(0, r)) }
                    t && (i += t)
                }
                return i
            },
            ms: function() { var e = i.exec(this); return null == e ? Number(this) : Number(e[1]) * n[e[2]] }
        })
    }(), Element.implement({
        tidy: function() { this.set("value", this.get("value").tidy()) },
        getTextInRange: function(e, t) { return this.get("value").substring(e, t) },
        getSelectedText: function() { return this.setSelectionRange ? this.getTextInRange(this.getSelectionStart(), this.getSelectionEnd()) : document.selection.createRange().text },
        getSelectedRange: function() {
            if (null != this.selectionStart) return { start: this.selectionStart, end: this.selectionEnd };
            var e = { start: 0, end: 0 },
                t = this.getDocument().selection.createRange();
            if (!t || t.parentElement() != this) return e;
            var n = t.duplicate();
            if ("text" == this.type) e.start = 0 - n.moveStart("character", -1e5), e.end = e.start + t.text.length;
            else {
                var i = this.get("value"),
                    r = i.length;
                n.moveToElementText(this), n.setEndPoint("StartToEnd", t), n.text.length && (r -= i.match(/[\n\r]*$/)[0].length), e.end = r - n.text.length, n.setEndPoint("StartToStart", t), e.start = r - n.text.length
            }
            return e
        },
        getSelectionStart: function() { return this.getSelectedRange().start },
        getSelectionEnd: function() { return this.getSelectedRange().end },
        setCaretPosition: function(e) { return "end" == e && (e = this.get("value").length), this.selectRange(e, e), this },
        getCaretPosition: function() { return this.getSelectedRange().start },
        selectRange: function(e, t) {
            if (this.setSelectionRange) this.focus(), this.setSelectionRange(e, t);
            else {
                var n = this.get("value"),
                    i = n.substr(e, t - e).replace(/\r/g, "").length;
                e = n.substr(0, e).replace(/\r/g, "").length;
                var r = this.createTextRange();
                r.collapse(!0), r.moveEnd("character", e + i), r.moveStart("character", e), r.select()
            }
            return this
        },
        insertAtCursor: function(e, t) {
            var n = this.getSelectedRange(),
                i = this.get("value");
            return this.set("value", i.substring(0, n.start) + e + i.substring(n.end, i.length)), !1 !== t ? this.selectRange(n.start, n.start + e.length) : this.setCaretPosition(n.start + e.length), this
        },
        insertAroundCursor: function(e, t) {
            e = Object.append({ before: "", defaultMiddle: "", after: "" }, e);
            var n = this.getSelectedText() || e.defaultMiddle,
                i = this.getSelectedRange(),
                r = this.get("value");
            if (i.start == i.end) this.set("value", r.substring(0, i.start) + e.before + n + e.after + r.substring(i.end, r.length)), this.selectRange(i.start + e.before.length, i.end + e.before.length + n.length);
            else {
                var s = r.substring(i.start, i.end);
                this.set("value", r.substring(0, i.start) + e.before + s + e.after + r.substring(i.end, r.length));
                var a = i.start + e.before.length;
                !1 !== t ? this.selectRange(a, a + s.length) : this.setCaretPosition(a + r.length)
            }
            return this
        }
    }),
    function() {
        var e = !1,
            t = !1,
            n = function() {
                var n = new Element("div").setStyles({ position: "fixed", top: 0, right: 0 }).inject(document.body);
                e = 0 === n.offsetTop, n.dispose(), t = !0
            };
        Element.implement({
            pin: function(i, r) {
                if (t || n(), "none" == this.getStyle("display")) return this;
                var s, a, o, l = window.getScroll();
                if (!1 !== i) {
                    if (s = this.getPosition(), !this.retrieve("pin:_pinned")) {
                        var u = { top: s.y - l.y, left: s.x - l.x, margin: "0px", padding: "0px" };
                        if (e && !r) this.setStyle("position", "fixed").setStyles(u);
                        else {
                            a = this.getOffsetParent();
                            var h = this.getPosition(a),
                                c = this.getStyles("left", "top");
                            (a && "auto" == c.left || "auto" == c.top) && this.setPosition(h), "static" == this.getStyle("position") && this.setStyle("position", "absolute"), h = { x: c.left.toInt() - l.x, y: c.top.toInt() - l.y }, o = function() {
                                if (this.retrieve("pin:_pinned")) {
                                    var e = window.getScroll();
                                    this.setStyles({ left: h.x + e.x, top: h.y + e.y })
                                }
                            }.bind(this), this.store("pin:_scrollFixer", o), window.addEvent("scroll", o)
                        }
                        this.store("pin:_pinned", !0)
                    }
                } else {
                    if (!this.retrieve("pin:_pinned")) return this;
                    a = this.getParent();
                    "static" != a.getComputedStyle("position") || a.getOffsetParent();
                    s = this.getPosition(), this.store("pin:_pinned", !1), o = this.retrieve("pin:_scrollFixer"), o ? (this.store("pin:_scrollFixer", null), window.removeEvent("scroll", o)) : this.setStyles({ position: "absolute", top: s.y + l.y, left: s.x + l.x }), this.removeClass("isPinned")
                }
                return this
            },
            unpin: function() { return this.pin(!1) },
            togglePin: function() { return this.pin(!this.retrieve("pin:_pinned")) }
        }), Element.alias("togglepin", "togglePin")
    }(),
    function(e) {
        var t = Element.Position = {
            options: { relativeTo: document.body, position: { x: "center", y: "center" }, offset: { x: 0, y: 0 } },
            getOptions: function(e, n) { return n = Object.merge({}, t.options, n), t.setPositionOption(n), t.setEdgeOption(n), t.setOffsetOption(e, n), t.setDimensionsOption(e, n), n },
            setPositionOption: function(e) { e.position = t.getCoordinateFromValue(e.position) },
            setEdgeOption: function(e) {
                var n = t.getCoordinateFromValue(e.edge);
                e.edge = n || ("center" == e.position.x && "center" == e.position.y ? { x: "center", y: "center" } : { x: "left", y: "top" })
            },
            setOffsetOption: function(e, t) {
                var n = { x: 0, y: 0 },
                    i = { x: 0, y: 0 },
                    r = e.measure(function() { return document.id(this.getOffsetParent()) });
                r && r != e.getDocument().body && (i = r.getScroll(), n = r.measure(function() {
                    var e = this.getPosition();
                    if ("fixed" == this.getStyle("position")) {
                        var t = window.getScroll();
                        e.x += t.x, e.y += t.y
                    }
                    return e
                }), t.offset = { parentPositioned: r != document.id(t.relativeTo), x: t.offset.x - n.x + i.x, y: t.offset.y - n.y + i.y })
            },
            setDimensionsOption: function(e, t) { t.dimensions = e.getDimensions({ computeSize: !0, styles: ["padding", "border", "margin"] }) },
            getPosition: function(e, n) {
                var i = {};
                n = t.getOptions(e, n);
                var r = document.id(n.relativeTo) || document.body;
                t.setPositionCoordinates(n, i, r), n.edge && t.toEdge(i, n);
                var s = n.offset;
                return i.left = (i.x >= 0 || s.parentPositioned || n.allowNegative ? i.x : 0).toInt(), i.top = (i.y >= 0 || s.parentPositioned || n.allowNegative ? i.y : 0).toInt(), t.toMinMax(i, n), (n.relFixedPosition || "fixed" == r.getStyle("position")) && t.toRelFixedPosition(r, i), n.ignoreScroll && t.toIgnoreScroll(r, i), n.ignoreMargins && t.toIgnoreMargins(i, n), i.left = Math.ceil(i.left), i.top = Math.ceil(i.top), delete i.x, delete i.y, i
            },
            setPositionCoordinates: function(e, t, n) {
                var i = e.offset.y,
                    r = e.offset.x,
                    s = n == document.body ? window.getScroll() : n.getPosition(),
                    a = s.y,
                    o = s.x,
                    l = window.getSize();
                switch (e.position.x) {
                    case "left":
                        t.x = o + r;
                        break;
                    case "right":
                        t.x = o + r + n.offsetWidth;
                        break;
                    default:
                        t.x = o + (n == document.body ? l.x : n.offsetWidth) / 2 + r
                }
                switch (e.position.y) {
                    case "top":
                        t.y = a + i;
                        break;
                    case "bottom":
                        t.y = a + i + n.offsetHeight;
                        break;
                    default:
                        t.y = a + (n == document.body ? l.y : n.offsetHeight) / 2 + i
                }
            },
            toMinMax: function(e, t) {
                var n, i = { left: "x", top: "y" };
                ["minimum", "maximum"].each(function(r) {
                    ["left", "top"].each(function(s) { null != (n = t[r] ? t[r][i[s]] : null) && ("minimum" == r ? e[s] < n : e[s] > n) && (e[s] = n) })
                })
            },
            toRelFixedPosition: function(e, t) {
                var n = window.getScroll();
                t.top += n.y, t.left += n.x
            },
            toIgnoreScroll: function(e, t) {
                var n = e.getScroll();
                t.top -= n.y, t.left -= n.x
            },
            toIgnoreMargins: function(e, t) { e.left += "right" == t.edge.x ? t.dimensions["margin-right"] : "center" != t.edge.x ? -t.dimensions["margin-left"] : -t.dimensions["margin-left"] + (t.dimensions["margin-right"] + t.dimensions["margin-left"]) / 2, e.top += "bottom" == t.edge.y ? t.dimensions["margin-bottom"] : "center" != t.edge.y ? -t.dimensions["margin-top"] : -t.dimensions["margin-top"] + (t.dimensions["margin-bottom"] + t.dimensions["margin-top"]) / 2 },
            toEdge: function(e, t) {
                var n = {},
                    i = t.dimensions,
                    r = t.edge;
                switch (r.x) {
                    case "left":
                        n.x = 0;
                        break;
                    case "right":
                        n.x = -i.x - i.computedRight - i.computedLeft;
                        break;
                    default:
                        n.x = -Math.round(i.totalWidth / 2)
                }
                switch (r.y) {
                    case "top":
                        n.y = 0;
                        break;
                    case "bottom":
                        n.y = -i.y - i.computedTop - i.computedBottom;
                        break;
                    default:
                        n.y = -Math.round(i.totalHeight / 2)
                }
                e.x += n.x, e.y += n.y
            },
            getCoordinateFromValue: function(e) { return "string" != typeOf(e) ? e : (e = e.toLowerCase(), { x: e.test("left") ? "left" : e.test("right") ? "right" : "center", y: e.test(/upper|top/) ? "top" : e.test("bottom") ? "bottom" : "center" }) }
        };
        Element.implement({ position: function(t) { if (t && (null != t.x || null != t.y)) return e ? e.apply(this, arguments) : this; var n = this.setStyle("position", "absolute").calculatePosition(t); return t && t.returnPos ? n : this.setStyles(n) }, calculatePosition: function(e) { return t.getPosition(this, e) } })
    }(Element.prototype.position), Element.implement({
        isDisplayed: function() { return "none" != this.getStyle("display") },
        isVisible: function() {
            var e = this.offsetWidth,
                t = this.offsetHeight;
            return (0 != e || 0 != t) && (e > 0 && t > 0 || "none" != this.style.display)
        },
        toggle: function() { return this[this.isDisplayed() ? "hide" : "show"]() },
        hide: function() { var e; try { e = this.getStyle("display") } catch (e) {} return "none" == e ? this : this.store("element:_originalDisplay", e || "").setStyle("display", "none") },
        show: function(e) { return !e && this.isDisplayed() ? this : (e = e || this.retrieve("element:_originalDisplay") || "block", this.setStyle("display", "none" == e ? "block" : e)) },
        swapClass: function(e, t) { return this.removeClass(e).addClass(t) }
    }), Document.implement({
        clearSelection: function() {
            if (window.getSelection) {
                var e = window.getSelection();
                e && e.removeAllRanges && e.removeAllRanges()
            } else if (document.selection && document.selection.empty) try { document.selection.empty() } catch (e) {}
        }
    }), Elements.from = function(e, t) {
        (t || null == t) && (e = e.stripScripts());
        var n, i = e.match(/^\s*(?:<!--.*?-->\s*)*<(t[dhr]|tbody|tfoot|thead)/i);
        if (i) {
            n = new Element("table");
            var r = i[1].toLowerCase();
            ["td", "th", "tr"].contains(r) && (n = new Element("tbody").inject(n), "tr" != r && (n = new Element("tr").inject(n)))
        }
        return (n || new Element("div")).set("html", e).getChildren()
    },
    function() {
        var e = !1;
        e = Browser.ie6 || Browser.firefox && Browser.version < 3 && Browser.Platform.mac;
        var t = this.IframeShim = new Class({
            Implements: [Options, Events, Class.Occlude],
            options: { className: "iframeShim", src: 'javascript:false;document.write("");', display: !1, zIndex: null, margin: 0, offset: { x: 0, y: 0 }, browsers: e },
            property: "IframeShim",
            initialize: function(e, t) { return this.element = document.id(e), this.occlude() ? this.occluded : (this.setOptions(t), this.makeShim(), this) },
            makeShim: function() {
                if (this.options.browsers) {
                    var e = this.element.getStyle("zIndex").toInt();
                    if (!e) { e = 1; var n = this.element.getStyle("position"); "static" != n && n || this.element.setStyle("position", "relative"), this.element.setStyle("zIndex", e) }
                    e = (null != this.options.zIndex || 0 === this.options.zIndex) && e > this.options.zIndex ? this.options.zIndex : e - 1, e < 0 && (e = 1), this.shim = new Element("iframe", { src: this.options.src, scrolling: "no", frameborder: 0, styles: { zIndex: e, position: "absolute", border: "none", filter: "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)" }, class: this.options.className }).store("IframeShim", this);
                    var i = function() { this.shim.inject(this.element, "after"), this[this.options.display ? "show" : "hide"](), this.fireEvent("inject") }.bind(this);
                    t.ready ? i() : window.addEvent("load", i)
                } else this.position = this.hide = this.show = this.dispose = Function.convert(this)
            },
            position: function() { if (!t.ready || !this.shim) return this; var e = this.element.measure(function() { return this.getSize() }); return void 0 != this.options.margin && (e.x = e.x - 2 * this.options.margin, e.y = e.y - 2 * this.options.margin, this.options.offset.x += this.options.margin, this.options.offset.y += this.options.margin), this.shim.set({ width: e.x, height: e.y }).position({ relativeTo: this.element, offset: this.options.offset }), this },
            hide: function() { return this.shim && this.shim.setStyle("display", "none"), this },
            show: function() { return this.shim && this.shim.setStyle("display", "block"), this.position() },
            dispose: function() { return this.shim && this.shim.dispose(), this },
            destroy: function() { return this.shim && this.shim.destroy(), this }
        })
    }(), window.addEvent("load", function() { IframeShim.ready = !0 }),
    function() {
        this.Mask = new Class({
            Implements: [Options, Events],
            Binds: ["position"],
            options: { style: {}, class: "mask", maskMargins: !1, useIframeShim: !0, iframeShimOptions: {} },
            initialize: function(e, t) { this.target = document.id(e) || document.id(document.body), this.target.store("mask", this), this.setOptions(t), this.render(), this.inject() },
            render: function() { this.element = new Element("div", { class: this.options.class, id: this.options.id || "mask-" + String.uniqueID(), styles: Object.merge({}, this.options.style, { display: "none" }), events: { click: function(e) { this.fireEvent("click", e), this.options.hideOnClick && this.hide() }.bind(this) } }), this.hidden = !0 },
            toElement: function() { return this.element },
            inject: function(e, t) { t = t || (this.options.inject ? this.options.inject.where : "") || (this.target == document.body ? "inside" : "after"), e = e || this.options.inject && this.options.inject.target || this.target, this.element.inject(e, t), this.options.useIframeShim && (this.shim = new IframeShim(this.element, this.options.iframeShimOptions), this.addEvents({ show: this.shim.show.bind(this.shim), hide: this.shim.hide.bind(this.shim), destroy: this.shim.destroy.bind(this.shim) })) },
            position: function() { return this.resize(this.options.width, this.options.height), this.element.position({ relativeTo: this.target, position: "topLeft", ignoreMargins: !this.options.maskMargins, ignoreScroll: this.target == document.body }), this },
            resize: function(e, t) {
                var n = { styles: ["padding", "border"] };
                this.options.maskMargins && n.styles.push("margin");
                var i = this.target.getComputedSize(n);
                if (this.target == document.body) {
                    this.element.setStyles({ width: 0, height: 0 });
                    var r = window.getScrollSize();
                    i.totalHeight < r.y && (i.totalHeight = r.y), i.totalWidth < r.x && (i.totalWidth = r.x)
                }
                return this.element.setStyles({ width: Array.pick([e, i.totalWidth, i.x]), height: Array.pick([t, i.totalHeight, i.y]) }), this
            },
            show: function() { return this.hidden ? (window.addEvent("resize", this.position), this.position(), this.showMask.apply(this, arguments), this) : this },
            showMask: function() { this.element.setStyle("display", "block"), this.hidden = !1, this.fireEvent("show") },
            hide: function() { return this.hidden ? this : (window.removeEvent("resize", this.position), this.hideMask.apply(this, arguments), this.options.destroyOnHide ? this.destroy() : this) },
            hideMask: function() { this.element.setStyle("display", "none"), this.hidden = !0, this.fireEvent("hide") },
            toggle: function() { this[this.hidden ? "show" : "hide"]() },
            destroy: function() { this.hide(), this.element.destroy(), this.fireEvent("destroy"), this.target.eliminate("mask") }
        })
    }(), Element.Properties.mask = { set: function(e) { var t = this.retrieve("mask"); return t && t.destroy(), this.eliminate("mask").store("mask:options", e) }, get: function() { var e = this.retrieve("mask"); return e || (e = new Mask(this, this.retrieve("mask:options")), this.store("mask", e)), e } }, Element.implement({ mask: function(e) { return e && this.set("mask", e), this.get("mask").show(), this }, unmask: function() { return this.get("mask").hide(), this } }),
    function() {
        this.Spinner = new Class({
            Extends: this.Mask,
            Implements: Chain,
            options: { class: "spinner", containerPosition: {}, content: { class: "spinner-content" }, messageContainer: { class: "spinner-msg" }, img: { class: "spinner-img" }, fxOptions: { link: "chain" } },
            initialize: function(e, t) {
                this.target = document.id(e) || document.id(document.body), this.target.store("spinner", this), this.setOptions(t), this.render(), this.inject();
                var n = function() { this.active = !1 }.bind(this);
                this.addEvents({ hide: n, show: n })
            },
            render: function() { this.parent(), this.element.set("id", this.options.id || "spinner-" + String.uniqueID()), this.content = document.id(this.options.content) || new Element("div", this.options.content), this.content.inject(this.element), this.options.message && (this.msg = document.id(this.options.message) || new Element("p", this.options.messageContainer).appendText(this.options.message), this.msg.inject(this.content)), this.options.img && (this.img = document.id(this.options.img) || new Element("div", this.options.img), this.img.inject(this.content)), this.element.set("tween", this.options.fxOptions) },
            show: function(e) { return this.active ? this.chain(this.show.bind(this)) : this.hidden ? (this.target.set("aria-busy", "true"), this.active = !0, this.parent(e)) : (this.callChain.delay(20, this), this) },
            showMask: function(e) {
                var t = function() { this.content.position(Object.merge({ relativeTo: this.element }, this.options.containerPosition)) }.bind(this);
                e ? (this.parent(), t()) : (this.options.style.opacity || (this.options.style.opacity = this.element.getStyle("opacity").toFloat()), this.element.setStyles({ display: "block", opacity: 0 }).tween("opacity", this.options.style.opacity), t(), this.hidden = !1, this.fireEvent("show"), this.callChain())
            },
            hide: function(e) { return this.active ? this.chain(this.hide.bind(this)) : this.hidden ? (this.callChain.delay(20, this), this) : (this.target.set("aria-busy", "false"), this.active = !0, this.parent(e)) },
            hideMask: function(e) {
                if (e) return this.parent();
                this.element.tween("opacity", 0).get("tween").chain(function() { this.element.setStyle("display", "none"), this.hidden = !0, this.fireEvent("hide"), this.callChain() }.bind(this))
            },
            destroy: function() { this.content.destroy(), this.parent(), this.target.eliminate("spinner") }
        })
    }(), Request = Class.refactor(Request, {
        options: { useSpinner: !1, spinnerOptions: {}, spinnerTarget: !1 },
        initialize: function(e) { this._send = this.send, this.send = function(e) { var t = this.getSpinner(); return t ? t.chain(this._send.pass(e, this)).show() : this._send(e), this }, this.previous(e) },
        getSpinner: function() {
            if (!this.spinner) {
                var e = document.id(this.options.spinnerTarget) || document.id(this.options.update);
                if (this.options.useSpinner && e) {
                    e.set("spinner", this.options.spinnerOptions);
                    var t = this.spinner = e.get("spinner");
                    ["complete", "exception", "cancel"].each(function(e) { this.addEvent(e, t.hide.bind(t)) }, this)
                }
            }
            return this.spinner
        }
    }), Element.Properties.spinner = { set: function(e) { var t = this.retrieve("spinner"); return t && t.destroy(), this.eliminate("spinner").store("spinner:options", e) }, get: function() { var e = this.retrieve("spinner"); return e || (e = new Spinner(this, this.retrieve("spinner:options")), this.store("spinner", e)), e } }, Element.implement({ spin: function(e) { return e && this.set("spinner", e), this.get("spinner").show(), this }, unspin: function() { return this.get("spinner").hide(), this } }),
    function() {
        var e = function(e) { return decodeURIComponent(e.replace(/\+/g, " ")) };
        String.implement({
            parseQueryString: function(t, n) {
                null == t && (t = !0), null == n && (n = !0);
                var i = this.split(/[&;]/),
                    r = {};
                return i.length ? (i.each(function(i) {
                    var s = i.indexOf("=") + 1,
                        a = s ? i.substr(s) : "",
                        o = s ? i.substr(0, s - 1).match(/([^\]\[]+|(\B)(?=\]))/g) : [i],
                        l = r;
                    o && (n && (a = e(a)), o.each(function(n, i) {
                        t && (n = e(n));
                        var r = l[n];
                        i < o.length - 1 ? l = l[n] = r || {} : "array" == typeOf(r) ? r.push(a) : l[n] = null != r ? [r, a] : a
                    }))
                }), r) : r
            },
            cleanQueryString: function(e) {
                return this.split("&").filter(function(t) {
                    var n = t.indexOf("="),
                        i = n < 0 ? "" : t.substr(0, n),
                        r = t.substr(n + 1);
                    return e ? e.call(null, i, r) : r || 0 === r
                }).join("&")
            }
        })
    }(), window.Form || (window.Form = {}),
    function() {
        Form.Request = new Class({
            Binds: ["onSubmit", "onFormValidate"],
            Implements: [Options, Events, Class.Occlude],
            options: { requestOptions: { evalScripts: !0, useSpinner: !0, emulation: !1, link: "ignore" }, sendButtonClicked: !0, extraData: {}, resetForm: !0 },
            property: "form.request",
            initialize: function(e, t, n) {
                if (this.element = document.id(e), this.occlude()) return this.occluded;
                this.setOptions(n).setTarget(t).attach()
            },
            setTarget: function(e) { return this.target = document.id(e), this.request ? this.request.setOptions({ update: this.target }) : this.makeRequest(), this },
            toElement: function() { return this.element },
            makeRequest: function() {
                var e = this;
                return this.request = new Request.HTML(Object.merge({ update: this.target, emulation: !1, spinnerTarget: this.element, method: this.element.get("method") || "post" }, this.options.requestOptions)).addEvents({
                    success: function(t, n, i, r) {
                        ["complete", "success"].each(function(s) { e.fireEvent(s, [e.target, t, n, i, r]) })
                    },
                    failure: function() { e.fireEvent("complete", arguments).fireEvent("failure", arguments) },
                    exception: function() { e.fireEvent("failure", arguments) }
                }), this.attachReset()
            },
            attachReset: function() { return this.options.resetForm ? (this.request.addEvent("success", function() { Function.attempt(function() { this.element.reset() }.bind(this)), window.OverText && OverText.update() }.bind(this)), this) : this },
            attach: function(e) {
                var t = 0 != e ? "addEvent" : "removeEvent";
                this.element[t]("click:relay(button, input[type=submit])", this.saveClickedButton.bind(this));
                var n = this.element.retrieve("validator");
                return n ? n[t]("onFormValidate", this.onFormValidate) : this.element[t]("submit", this.onSubmit), this
            },
            detach: function() { return this.attach(!1) },
            enable: function() { return this.attach() },
            disable: function() { return this.detach() },
            onFormValidate: function(e, t, n) {
                if (n) {
                    var i = this.element.retrieve("validator");
                    (e || i && !i.options.stopOnFailure) && (n.stop(), this.send())
                }
            },
            onSubmit: function(e) {
                var t = this.element.retrieve("validator");
                if (t) return this.element.removeEvent("submit", this.onSubmit), t.addEvent("onFormValidate", this.onFormValidate), void t.validate(e);
                e && e.stop(), this.send()
            },
            saveClickedButton: function(e, t) {
                var n = t.get("name");
                n && this.options.sendButtonClicked && (this.options.extraData[n] = t.get("value") || !0, this.clickedCleaner = function() { delete this.options.extraData[n], this.clickedCleaner = function() {} }.bind(this))
            },
            clickedCleaner: function() {},
            send: function() {
                var e = this.element.toQueryString().trim(),
                    t = Object.toQueryString(this.options.extraData);
                return e ? e += "&" + t : e = t, this.fireEvent("send", [this.element, e.parseQueryString()]), this.request.send({ data: e, url: this.options.requestOptions.url || this.element.get("action") }), this.clickedCleaner(), this
            }
        }), Element.implement("formUpdate", function(e, t) { var n = this.retrieve("form.request"); return n ? (e && n.setTarget(e), t && n.setOptions(t).makeRequest()) : n = new Form.Request(this, e, t), n.send(), this })
    }(),
    function() {
        var e = function(e) {
            var t = e.options.hideInputs;
            if (window.OverText) {
                var n = [null];
                OverText.each(function(e) { n.include("." + e.options.labelClass) }), n && (t += n.join(", "))
            }
            return t ? e.element.getElements(t) : null
        };
        Fx.Reveal = new Class({
            Extends: Fx.Morph,
            options: { link: "cancel", styles: ["padding", "border", "margin"], transitionOpacity: "opacity" in document.documentElement, mode: "vertical", display: function() { return "tr" != this.element.get("tag") ? "block" : "table-row" }, opacity: 1, hideInputs: "opacity" in document.documentElement ? null : "select, input, textarea, object, embed" },
            dissolve: function() {
                if (this.hiding || this.showing) "chain" == this.options.link ? this.chain(this.dissolve.bind(this)) : "cancel" != this.options.link || this.hiding || (this.cancel(), this.dissolve());
                else if ("none" != this.element.getStyle("display")) {
                    this.hiding = !0, this.showing = !1, this.hidden = !0, this.cssText = this.element.style.cssText;
                    var t = this.element.getComputedSize({ styles: this.options.styles, mode: this.options.mode });
                    this.options.transitionOpacity && (t.opacity = this.options.opacity);
                    var n = {};
                    Object.each(t, function(e, t) { n[t] = [e, 0] }), this.element.setStyles({ display: Function.convert(this.options.display).call(this), overflow: "hidden" });
                    var i = e(this);
                    i && i.setStyle("visibility", "hidden"), this.$chain.unshift(function() { this.hidden && (this.hiding = !1, this.element.style.cssText = this.cssText, this.element.setStyle("display", "none"), i && i.setStyle("visibility", "visible")), this.fireEvent("hide", this.element), this.callChain() }.bind(this)), this.start(n)
                } else this.callChain.delay(10, this), this.fireEvent("complete", this.element), this.fireEvent("hide", this.element);
                return this
            },
            reveal: function() {
                if (this.showing || this.hiding) "chain" == this.options.link ? this.chain(this.reveal.bind(this)) : "cancel" != this.options.link || this.showing || (this.cancel(), this.reveal());
                else if ("none" == this.element.getStyle("display")) {
                    this.hiding = !1, this.showing = !0, this.hidden = !1, this.cssText = this.element.style.cssText;
                    var t;
                    this.element.measure(function() { t = this.element.getComputedSize({ styles: this.options.styles, mode: this.options.mode }) }.bind(this)), null != this.options.heightOverride && (t.height = this.options.heightOverride.toInt()), null != this.options.widthOverride && (t.width = this.options.widthOverride.toInt()), this.options.transitionOpacity && (this.element.setStyle("opacity", 0), t.opacity = this.options.opacity);
                    var n = { height: 0, display: Function.convert(this.options.display).call(this) };
                    Object.each(t, function(e, t) { n[t] = 0 }), n.overflow = "hidden", this.element.setStyles(n);
                    var i = e(this);
                    i && i.setStyle("visibility", "hidden"), this.$chain.unshift(function() { this.element.style.cssText = this.cssText, this.element.setStyle("display", Function.convert(this.options.display).call(this)), this.hidden || (this.showing = !1), i && i.setStyle("visibility", "visible"), this.callChain(), this.fireEvent("show", this.element) }.bind(this)), this.start(t)
                } else this.callChain(), this.fireEvent("complete", this.element), this.fireEvent("show", this.element);
                return this
            },
            toggle: function() { return "none" == this.element.getStyle("display") ? this.reveal() : this.dissolve(), this },
            cancel: function() { return this.parent.apply(this, arguments), null != this.cssText && (this.element.style.cssText = this.cssText), this.hiding = !1, this.showing = !1, this }
        }), Element.Properties.reveal = { set: function(e) { return this.get("reveal").cancel().setOptions(e), this }, get: function() { var e = this.retrieve("reveal"); return e || (e = new Fx.Reveal(this), this.store("reveal", e)), e } }, Element.Properties.dissolve = Element.Properties.reveal, Element.implement({
            reveal: function(e) { return this.get("reveal").setOptions(e).reveal(), this },
            dissolve: function(e) { return this.get("reveal").setOptions(e).dissolve(), this },
            nix: function(e) { var t = Array.link(arguments, { destroy: Type.isBoolean, options: Type.isObject }); return this.get("reveal").setOptions(e).dissolve().chain(function() { this[t.destroy ? "destroy" : "dispose"]() }.bind(this)), this },
            wink: function() {
                var e = Array.link(arguments, { duration: Type.isNumber, options: Type.isObject }),
                    t = this.get("reveal").setOptions(e.options);
                t.reveal().chain(function() {
                    (function() { t.dissolve() }).delay(e.duration || 2e3)
                })
            }
        })
    }(), Form.Request.Append = new Class({
        Extends: Form.Request,
        options: { useReveal: !0, revealOptions: {}, inject: "bottom" },
        makeRequest: function() {
            this.request = new Request.HTML(Object.merge({ url: this.element.get("action"), method: this.element.get("method") || "post", spinnerTarget: this.element }, this.options.requestOptions, { evalScripts: !1 })).addEvents({
                success: function(e, t, n, i) {
                    var r, s = Elements.from(n);
                    r = 1 == s.length ? s[0] : new Element("div", { styles: { display: "none" } }).adopt(s), r.inject(this.target, this.options.inject), this.options.requestOptions.evalScripts && Browser.exec(i), this.fireEvent("beforeEffect", r);
                    var a = function() { this.fireEvent("success", [r, this.target, e, t, n, i]) }.bind(this);
                    this.options.useReveal ? (r.set("reveal", this.options.revealOptions).get("reveal").chain(a), r.reveal()) : a()
                }.bind(this),
                failure: function(e) { this.fireEvent("failure", e) }.bind(this)
            }), this.attachReset()
        }
    }),
    function() {
        var e = function(e) { return null != e },
            t = Object.prototype.hasOwnProperty;
        Object.extend({
            getFromPath: function(e, n) {
                "string" == typeof n && (n = n.split("."));
                for (var i = 0, r = n.length; i < r; i++) {
                    if (!t.call(e, n[i])) return null;
                    e = e[n[i]]
                }
                return e
            },
            cleanValues: function(t, n) { n = n || e; for (var i in t) n(t[i]) || delete t[i]; return t },
            erase: function(e, n) { return t.call(e, n) && delete e[n], e },
            run: function(e) { var t = Array.slice(arguments, 1); for (var n in e) e[n].apply && e[n].apply(e, t); return e }
        })
    }(),
    function() {
        var e = null,
            t = {},
            n = function(e) { return instanceOf(e, i.Set) ? e : t[e] },
            i = this.Locale = { define: function(n, r, s, a) { var o; return instanceOf(n, i.Set) ? (o = n.name) && (t[o] = n) : (o = n, t[o] || (t[o] = new i.Set(o)), n = t[o]), r && n.define(r, s, a), "cascade" == r ? i.inherit(o, s) : (e || (e = n), n) }, use: function(t) { return t = n(t), t && (e = t, this.fireEvent("change", t), this.fireEvent("langChange", t.name)), this }, getCurrent: function() { return e }, get: function(t, n) { return e ? e.get(t, n) : "" }, inherit: function(e, t, i) { return e = n(e), e && e.inherit(t, i), this }, list: function() { return Object.keys(t) } };
        Object.append(i, new Events), i.Set = new Class({
            sets: {},
            inherits: { locales: [], sets: {} },
            initialize: function(e) { this.name = e || "" },
            define: function(e, t, n) { var i = this.sets[e]; return i || (i = {}), t && ("object" == typeOf(t) ? i = Object.merge(i, t) : i[t] = n), this.sets[e] = i, this },
            get: function(e, n, i) {
                var r = Object.getFromPath(this.sets, e);
                if (null != r) { var s = typeOf(r); return "function" == s ? r = r.apply(null, Array.convert(n)) : "object" == s && (r = Object.clone(r)), r }
                var a = e.indexOf("."),
                    o = a < 0 ? e : e.substr(0, a),
                    l = (this.inherits.sets[o] || []).combine(this.inherits.locales).include("en-US");
                i || (i = []);
                for (var u = 0, h = l.length; u < h; u++)
                    if (!i.contains(l[u])) { i.include(l[u]); var c = t[l[u]]; if (c && null != (r = c.get(e, n, i))) return r }
                return ""
            },
            inherit: function(e, t) { e = Array.convert(e), t && !this.inherits.sets[t] && (this.inherits.sets[t] = []); for (var n = e.length; n--;)(t ? this.inherits.sets[t] : this.inherits.locales).unshift(e[n]); return this }
        });
        var r = MooTools.lang = {};
        Object.append(r, i, { setLanguage: i.use, getCurrentLanguage: function() { var e = i.getCurrent(); return e ? e.name : null }, set: function() { return i.define.apply(this, arguments), this }, get: function(e, t, n) { return t && (e += "." + t), i.get(e, n) } })
    }(), Locale.define("en-US", "Date", { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], months_abbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], days_abbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dateOrder: ["month", "date", "year"], shortDate: "%m/%d/%Y", shortTime: "%I:%M%p", AM: "AM", PM: "PM", firstDayOfWeek: 0, ordinal: function(e) { return e > 3 && e < 21 ? "th" : ["th", "st", "nd", "rd", "th"][Math.min(e % 10, 4)] }, lessThanMinuteAgo: "less than a minute ago", minuteAgo: "about a minute ago", minutesAgo: "{delta} minutes ago", hourAgo: "about an hour ago", hoursAgo: "about {delta} hours ago", dayAgo: "1 day ago", daysAgo: "{delta} days ago", weekAgo: "1 week ago", weeksAgo: "{delta} weeks ago", monthAgo: "1 month ago", monthsAgo: "{delta} months ago", yearAgo: "1 year ago", yearsAgo: "{delta} years ago", lessThanMinuteUntil: "less than a minute from now", minuteUntil: "about a minute from now", minutesUntil: "{delta} minutes from now", hourUntil: "about an hour from now", hoursUntil: "about {delta} hours from now", dayUntil: "1 day from now", daysUntil: "{delta} days from now", weekUntil: "1 week from now", weeksUntil: "{delta} weeks from now", monthUntil: "1 month from now", monthsUntil: "{delta} months from now", yearUntil: "1 year from now", yearsUntil: "{delta} years from now" }),
    function() {
        var e = this.Date,
            t = e.Methods = { ms: "Milliseconds", year: "FullYear", min: "Minutes", mo: "Month", sec: "Seconds", hr: "Hours" };
        ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds", "Time", "TimezoneOffset", "Week", "Timezone", "GMTOffset", "DayOfYear", "LastMonth", "LastDayOfMonth", "UTCDate", "UTCDay", "UTCFullYear", "AMPM", "Ordinal", "UTCHours", "UTCMilliseconds", "UTCMinutes", "UTCMonth", "UTCSeconds", "UTCMilliseconds"].each(function(t) { e.Methods[t.toLowerCase()] = t });
        var n = function(e, t, i) { return 1 == t ? e : e < Math.pow(10, t - 1) ? (i || "0") + n(e, t - 1, i) : e };
        e.implement({
            set: function(e, n) { e = e.toLowerCase(); var i = t[e] && "set" + t[e]; return i && this[i] && this[i](n), this }.overloadSetter(),
            get: function(e) { e = e.toLowerCase(); var n = t[e] && "get" + t[e]; return n && this[n] ? this[n]() : null }.overloadGetter(),
            clone: function() { return new e(this.get("time")) },
            increment: function(t, n) {
                switch (t = t || "day", n = null != n ? n : 1, t) {
                    case "year":
                        return this.increment("month", 12 * n);
                    case "month":
                        var i = this.get("date");
                        return this.set("date", 1).set("mo", this.get("mo") + n), this.set("date", i.min(this.get("lastdayofmonth")));
                    case "week":
                        return this.increment("day", 7 * n);
                    case "day":
                        return this.set("date", this.get("date") + n)
                }
                if (!e.units[t]) throw new Error(t + " is not a supported interval");
                return this.set("time", this.get("time") + n * e.units[t]())
            },
            decrement: function(e, t) { return this.increment(e, -1 * (null != t ? t : 1)) },
            isLeapYear: function() { return e.isLeapYear(this.get("year")) },
            clearTime: function() { return this.set({ hr: 0, min: 0, sec: 0, ms: 0 }) },
            diff: function(t, n) { return "string" == typeOf(t) && (t = e.parse(t)), ((t - this) / e.units[n || "day"](3, 3)).round() },
            getLastDayOfMonth: function() { return e.daysInMonth(this.get("mo"), this.get("year")) },
            getDayOfYear: function() { return (e.UTC(this.get("year"), this.get("mo"), this.get("date") + 1) - e.UTC(this.get("year"), 0, 1)) / e.units.day() },
            setDay: function(t, n) { null == n && "" === (n = e.getMsg("firstDayOfWeek")) && (n = 1), t = (7 + e.parseDay(t, !0) - n) % 7; var i = (7 + this.get("day") - n) % 7; return this.increment("day", t - i) },
            getWeek: function(t) {
                null == t && "" === (t = e.getMsg("firstDayOfWeek")) && (t = 1);
                var n, i = this,
                    r = (7 + i.get("day") - t) % 7,
                    s = 0;
                if (1 == t) {
                    var a = i.get("month"),
                        o = i.get("date") - r;
                    if (11 == a && o > 28) return 1;
                    0 == a && o < -2 && (i = new e(i).decrement("day", r), r = 0), n = new e(i.get("year"), 0, 1).get("day") || 7, n > 4 && (s = -7)
                } else n = new e(i.get("year"), 0, 1).get("day");
                return s += i.get("dayofyear"), s += 6 - r, (s += (7 + n - t) % 7) / 7
            },
            getOrdinal: function(t) { return e.getMsg("ordinal", t || this.get("date")) },
            getTimezone: function() { return this.toString().replace(/^.*? ([A-Z]{3}).[0-9]{4}.*$/, "$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/, "$1$2$3") },
            getGMTOffset: function() { var e = this.get("timezoneOffset"); return (e > 0 ? "-" : "+") + n((e.abs() / 60).floor(), 2) + n(e % 60, 2) },
            setAMPM: function(e) { e = e.toUpperCase(); var t = this.get("hr"); return t > 11 && "AM" == e ? this.decrement("hour", 12) : t < 12 && "PM" == e ? this.increment("hour", 12) : this },
            getAMPM: function() { return this.get("hr") < 12 ? "AM" : "PM" },
            parse: function(t) { return this.set("time", e.parse(t)), this },
            isValid: function(e) { return e || (e = this), "date" == typeOf(e) && !isNaN(e.valueOf()) },
            format: function(t) {
                if (!this.isValid()) return "invalid date";
                if (t || (t = "%x %X"), "string" == typeof t && (t = s[t.toLowerCase()] || t), "function" == typeof t) return t(this);
                var i = this;
                return t.replace(/%([a-z%])/gi, function(t, r) {
                    switch (r) {
                        case "a":
                            return e.getMsg("days_abbr")[i.get("day")];
                        case "A":
                            return e.getMsg("days")[i.get("day")];
                        case "b":
                            return e.getMsg("months_abbr")[i.get("month")];
                        case "B":
                            return e.getMsg("months")[i.get("month")];
                        case "c":
                            return i.format("%a %b %d %H:%M:%S %Y");
                        case "d":
                            return n(i.get("date"), 2);
                        case "e":
                            return n(i.get("date"), 2, " ");
                        case "H":
                            return n(i.get("hr"), 2);
                        case "I":
                            return n(i.get("hr") % 12 || 12, 2);
                        case "j":
                            return n(i.get("dayofyear"), 3);
                        case "k":
                            return n(i.get("hr"), 2, " ");
                        case "l":
                            return n(i.get("hr") % 12 || 12, 2, " ");
                        case "L":
                            return n(i.get("ms"), 3);
                        case "m":
                            return n(i.get("mo") + 1, 2);
                        case "M":
                            return n(i.get("min"), 2);
                        case "o":
                            return i.get("ordinal");
                        case "p":
                            return e.getMsg(i.get("ampm"));
                        case "s":
                            return Math.round(i / 1e3);
                        case "S":
                            return n(i.get("seconds"), 2);
                        case "T":
                            return i.format("%H:%M:%S");
                        case "U":
                            return n(i.get("week"), 2);
                        case "w":
                            return i.get("day");
                        case "x":
                            return i.format(e.getMsg("shortDate"));
                        case "X":
                            return i.format(e.getMsg("shortTime"));
                        case "y":
                            return i.get("year").toString().substr(2);
                        case "Y":
                            return i.get("year");
                        case "z":
                            return i.get("GMTOffset");
                        case "Z":
                            return i.get("Timezone")
                    }
                    return r
                })
            },
            toISOString: function() { return this.format("iso8601") }
        }).alias({ toJSON: "toISOString", compare: "diff", strftime: "format" });
        var i = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            s = { db: "%Y-%m-%d %H:%M:%S", compact: "%Y%m%dT%H%M%S", short: "%d %b %H:%M", long: "%B %d, %Y %H:%M", rfc822: function(e) { return i[e.get("day")] + e.format(", %d ") + r[e.get("month")] + e.format(" %Y %H:%M:%S %Z") }, rfc2822: function(e) { return i[e.get("day")] + e.format(", %d ") + r[e.get("month")] + e.format(" %Y %H:%M:%S %z") }, iso8601: function(e) { return e.getUTCFullYear() + "-" + n(e.getUTCMonth() + 1, 2) + "-" + n(e.getUTCDate(), 2) + "T" + n(e.getUTCHours(), 2) + ":" + n(e.getUTCMinutes(), 2) + ":" + n(e.getUTCSeconds(), 2) + "." + n(e.getUTCMilliseconds(), 3) + "Z" } },
            a = [],
            o = e.parse,
            l = function(t, n, i) {
                var r = -1,
                    s = e.getMsg(t + "s");
                switch (typeOf(n)) {
                    case "object":
                        r = s[n.get(t)];
                        break;
                    case "number":
                        if (!(r = s[n])) throw new Error("Invalid " + t + " index: " + n);
                        break;
                    case "string":
                        var a = s.filter(function(e) { return this.test(e) }, new RegExp("^" + n, "i"));
                        if (!a.length) throw new Error("Invalid " + t + " string");
                        if (a.length > 1) throw new Error("Ambiguous " + t);
                        r = a[0]
                }
                return i ? s.indexOf(r) : r
            },
            u = 1900,
            h = 70;
        e.extend({
            getMsg: function(e, t) { return Locale.get("Date." + e, t) },
            units: { ms: Function.convert(1), second: Function.convert(1e3), minute: Function.convert(6e4), hour: Function.convert(36e5), day: Function.convert(864e5), week: Function.convert(6084e5), month: function(t, n) { var i = new e; return 864e5 * e.daysInMonth(null != t ? t : i.get("mo"), null != n ? n : i.get("year")) }, year: function(t) { return t = t || (new e).get("year"), e.isLeapYear(t) ? 316224e5 : 31536e6 } },
            daysInMonth: function(t, n) { return [31, e.isLeapYear(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t] },
            isLeapYear: function(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 },
            parse: function(t) { var n = typeOf(t); if ("number" == n) return new e(t); if ("string" != n) return t; if (t = t.clean(), !t.length) return null; var i; return a.some(function(e) { var n = e.re.exec(t); return !!n && (i = e.handler(n)) }), i && i.isValid() || (i = new e(o(t))) && i.isValid() || (i = new e(t.toInt())), i },
            parseDay: function(e, t) { return l("day", e, t) },
            parseMonth: function(e, t) { return l("month", e, t) },
            parseUTC: function(t) {
                var n = new e(t),
                    i = e.UTC(n.get("year"), n.get("mo"), n.get("date"), n.get("hr"), n.get("min"), n.get("sec"), n.get("ms"));
                return new e(i)
            },
            orderIndex: function(t) { return e.getMsg("dateOrder").indexOf(t) + 1 },
            defineFormat: function(e, t) { return s[e] = t, this },
            parsePatterns: a,
            defineParser: function(e) { return a.push(e.re && e.handler ? e : g(e)), this },
            defineParsers: function() { return Array.flatten(arguments).each(e.defineParser), this },
            define2DigitYearStart: function(e) { return h = e % 100, u = e - h, this }
        }).extend({ defineFormats: e.defineFormat.overloadSetter() });
        var c = function(t) { return new RegExp("(?:" + e.getMsg(t).map(function(e) { return e.substr(0, 3) }).join("|") + ")[a-z]*") },
            d = function(t) {
                switch (t) {
                    case "T":
                        return "%H:%M:%S";
                    case "x":
                        return (1 == e.orderIndex("month") ? "%m[-./]%d" : "%d[-./]%m") + "([-./]%y)?";
                    case "X":
                        return "%H([.:]%M)?([.:]%S([.:]%s)?)? ?%p? ?%z?"
                }
                return null
            },
            m = { d: /[0-2]?[0-9]|3[01]/, H: /[01]?[0-9]|2[0-3]/, I: /0?[1-9]|1[0-2]/, M: /[0-5]?\d/, s: /\d+/, o: /[a-z]*/, p: /[ap]\.?m\.?/, y: /\d{2}|\d{4}/, Y: /\d{4}/, z: /Z|[+-]\d{2}(?::?\d{2})?/ };
        m.m = m.I, m.S = m.M;
        var f, p = function(e) { f = e, m.a = m.A = c("days"), m.b = m.B = c("months"), a.each(function(e, t) { e.format && (a[t] = g(e.format)) }) },
            g = function(t) {
                if (!f) return { format: t };
                var n = [],
                    i = (t.source || t).replace(/%([a-z])/gi, function(e, t) { return d(t) || e }).replace(/\((?!\?)/g, "(?:").replace(/ (?!\?|\*)/g, ",? ").replace(/%([a-z%])/gi, function(e, t) { var i = m[t]; return i ? (n.push(t), "(" + i.source + ")") : t }).replace(/\[a-z\]/gi, "[a-z\\u00c0-\\uffff;&]");
                return {
                    format: t,
                    re: new RegExp("^" + i + "$", "i"),
                    handler: function(t) {
                        t = t.slice(1).associate(n);
                        var i = (new e).clearTime(),
                            r = t.y || t.Y;
                        null != r && v.call(i, "y", r), "d" in t && v.call(i, "d", 1), ("m" in t || t.b || t.B) && v.call(i, "m", 1);
                        for (var s in t) v.call(i, s, t[s]);
                        return i
                    }
                }
            },
            v = function(t, n) {
                if (!n) return this;
                switch (t) {
                    case "a":
                    case "A":
                        return this.set("day", e.parseDay(n, !0));
                    case "b":
                    case "B":
                        return this.set("mo", e.parseMonth(n, !0));
                    case "d":
                        return this.set("date", n);
                    case "H":
                    case "I":
                        return this.set("hr", n);
                    case "m":
                        return this.set("mo", n - 1);
                    case "M":
                        return this.set("min", n);
                    case "p":
                        return this.set("ampm", n.replace(/\./g, ""));
                    case "S":
                        return this.set("sec", n);
                    case "s":
                        return this.set("ms", 1e3 * ("0." + n));
                    case "w":
                        return this.set("day", n);
                    case "Y":
                        return this.set("year", n);
                    case "y":
                        return n = +n, n < 100 && (n += u + (n < h ? 100 : 0)), this.set("year", n);
                    case "z":
                        "Z" == n && (n = "+00");
                        var i = n.match(/([+-])(\d{2}):?(\d{2})?/);
                        return i = (i[1] + "1") * (60 * i[2] + (+i[3] || 0)) + this.getTimezoneOffset(), this.set("time", this - 6e4 * i)
                }
                return this
            };
        e.defineParsers("%Y([-./]%m([-./]%d((T| )%X)?)?)?", "%Y%m%d(T%H(%M%S?)?)?", "%x( %X)?", "%d%o( %b( %Y)?)?( %X)?", "%b( %d%o)?( %Y)?( %X)?", "%Y %b( %d%o( %X)?)?", "%o %b %d %X %z %Y", "%T", "%H:%M( ?%p)?"), Locale.addEvent("change", function(e) { Locale.get("Date") && p(e) }).fireEvent("change", Locale.getCurrent())
    }(), Locale.define("en-US", "FormValidator", { required: "This field is required.", length: "Please enter {length} characters (you entered {elLength} characters)", minLength: "Please enter at least {minLength} characters (you entered {length} characters).", maxLength: "Please enter no more than {maxLength} characters (you entered {length} characters).", integer: "Please enter an integer in this field. Numbers with decimals (e.g. 1.25) are not permitted.", numeric: 'Please enter only numeric values in this field (i.e. "1" or "1.1" or "-1" or "-1.1").', digits: "Please use numbers and punctuation only in this field (for example, a phone number with dashes or dots is permitted).", alpha: "Please use only letters (a-z) within this field. No spaces or other characters are allowed.", alphanum: "Please use only letters (a-z) or numbers (0-9) in this field. No spaces or other characters are allowed.", dateSuchAs: "Please enter a valid date such as {date}", dateInFormatMDY: 'Please enter a valid date such as MM/DD/YYYY (i.e. "12/31/1999")', email: 'Please enter a valid email address. For example "fred@domain.com".', url: "Please enter a valid URL such as http://www.example.com.", currencyDollar: "Please enter a valid $ amount. For example $100.00 .", oneRequired: "Please enter something for at least one of these inputs.", errorPrefix: "Error: ", warningPrefix: "Warning: ", noSpace: "There can be no spaces in this input.", reqChkByNode: "No items are selected.", requiredChk: "This field is required.", reqChkByName: "Please select a {label}.", match: "This field needs to match the {matchName} field", startDate: "the start date", endDate: "the end date", currentDate: "the current date", afterDate: "The date should be the same or after {label}.", beforeDate: "The date should be the same or before {label}.", startMonth: "Please select a start month", sameMonth: "These two dates must be in the same month - you must change one or the other.", creditcard: "The credit card number entered is invalid. Please check the number and try again. {length} digits entered." }), window.Form || (window.Form = {});
var InputValidator = this.InputValidator = new Class({ Implements: [Options], options: { errorMsg: "Validation failed.", test: Function.convert(!0) }, initialize: function(e, t) { this.setOptions(t), this.className = e }, test: function(e, t) { return !!(e = document.id(e)) && this.options.test(e, t || this.getProps(e)) }, getError: function(e, t) { e = document.id(e); var n = this.options.errorMsg; return "function" == typeOf(n) && (n = n(e, t || this.getProps(e))), n }, getProps: function(e) { return e = document.id(e), e ? e.get("validatorProps") : {} } });
Element.Properties.validators = { get: function() { return (this.get("data-validators") || this.className).clean().replace(/'(\\.|[^'])*'|"(\\.|[^"])*"/g, function(e) { return e.replace(" ", "\\x20") }).split(" ") } }, Element.Properties.validatorProps = {
    set: function(e) { return this.eliminate("$moo:validatorProps").store("$moo:validatorProps", e) },
    get: function(e) {
        if (e && this.set(e), this.retrieve("$moo:validatorProps")) return this.retrieve("$moo:validatorProps");
        if (this.getProperty("data-validator-properties") || this.getProperty("validatorProps")) try { this.store("$moo:validatorProps", JSON.decode(this.getProperty("validatorProps") || this.getProperty("data-validator-properties"), !1)) } catch (e) { return {} } else {
            var t = this.get("validators").filter(function(e) { return e.test(":") });
            t.length ? (e = {}, t.each(function(t) { var n = t.split(":"); if (n[1]) try { e[n[0]] = JSON.decode(n[1], !1) } catch (e) {} }), this.store("$moo:validatorProps", e)) : this.store("$moo:validatorProps", {})
        }
        return this.retrieve("$moo:validatorProps")
    }
}, Form.Validator = new Class({
    Implements: [Options, Events],
    options: { fieldSelectors: "input, select, textarea", ignoreHidden: !0, ignoreDisabled: !0, useTitles: !1, evaluateOnSubmit: !0, evaluateFieldsOnBlur: !0, evaluateFieldsOnChange: !0, serial: !0, stopOnFailure: !0, warningPrefix: function() { return Form.Validator.getMsg("warningPrefix") || "Warning: " }, errorPrefix: function() { return Form.Validator.getMsg("errorPrefix") || "Error: " } },
    initialize: function(e, t) { this.setOptions(t), this.element = document.id(e), this.warningPrefix = Function.convert(this.options.warningPrefix)(), this.errorPrefix = Function.convert(this.options.errorPrefix)(), this._bound = { onSubmit: this.onSubmit.bind(this), blurOrChange: function(e, t) { this.validationMonitor(t, !0) }.bind(this) }, this.enable() },
    toElement: function() { return this.element },
    getFields: function() { return this.fields = this.element.getElements(this.options.fieldSelectors) },
    enable: function() { this.element.store("validator", this), this.options.evaluateOnSubmit && this.element.addEvent("submit", this._bound.onSubmit), this.options.evaluateFieldsOnBlur && this.element.addEvent("blur:relay(input,select,textarea)", this._bound.blurOrChange), this.options.evaluateFieldsOnChange && this.element.addEvent("change:relay(input,select,textarea)", this._bound.blurOrChange) },
    disable: function() { this.element.eliminate("validator"), this.element.removeEvents({ submit: this._bound.onSubmit, "blur:relay(input,select,textarea)": this._bound.blurOrChange, "change:relay(input,select,textarea)": this._bound.blurOrChange }) },
    validationMonitor: function() { clearTimeout(this.timer), this.timer = this.validateField.delay(50, this, arguments) },
    onSubmit: function(e) { this.validate(e) && this.reset() },
    reset: function() { return this.getFields().each(this.resetField, this), this },
    validate: function(e) { var t = this.getFields().map(function(e) { return this.validateField(e, !0) }, this).every(function(e) { return e }); return this.fireEvent("formValidate", [t, this.element, e]), this.options.stopOnFailure && !t && e && e.preventDefault(), t },
    validateField: function(e, t) {
        if (this.paused) return !0;
        e = document.id(e);
        var n, i, r = !e.hasClass("validation-failed");
        if (this.options.serial && !t && (n = this.element.getElement(".validation-failed"), i = this.element.getElement(".warning")), e && (!n || t || e.hasClass("validation-failed") || n && !this.options.serial)) {
            var s = e.get("validators"),
                a = s.some(function(e) { return this.getValidator(e) }, this),
                o = [];
            if (s.each(function(t) { t && !this.test(t, e) && o.include(t) }, this), r = 0 === o.length, a && !this.hasValidator(e, "warnOnly") && (r ? (e.addClass("validation-passed").removeClass("validation-failed"), this.fireEvent("elementPass", [e])) : (e.addClass("validation-failed").removeClass("validation-passed"), this.fireEvent("elementFail", [e, o]))), !i) {
                s.some(function(e) { return e.test("^warn") ? this.getValidator(e.replace(/^warn-/, "")) : null }, this);
                e.removeClass("warning");
                s.map(function(t) { return t.test("^warn") ? this.test(t.replace(/^warn-/, ""), e, !0) : null }, this)
            }
        }
        return r
    },
    test: function(e, t, n) {
        if (t = document.id(t), this.options.ignoreHidden && !t.isVisible() || this.options.ignoreDisabled && t.get("disabled")) return !0;
        var i = this.getValidator(e);
        null != n && (n = !1), this.hasValidator(t, "warnOnly") && (n = !0);
        var r = t.hasClass("ignoreValidation") || !i || i.test(t);
        return i && this.fireEvent("elementValidate", [r, t, e, n]), !!n || r
    },
    hasValidator: function(e, t) { return e.get("validators").contains(t) },
    resetField: function(e) { return e = document.id(e), e && e.get("validators").each(function(t) { t.test("^warn-") && (t = t.replace(/^warn-/, "")), e.removeClass("validation-failed"), e.removeClass("warning"), e.removeClass("validation-passed") }, this), this },
    stop: function() { return this.paused = !0, this },
    start: function() { return this.paused = !1, this },
    ignoreField: function(e, t) { return e = document.id(e), e && (this.enforceField(e), t ? e.addClass("warnOnly") : e.addClass("ignoreValidation")), this },
    enforceField: function(e) { return e = document.id(e), e && e.removeClass("warnOnly").removeClass("ignoreValidation"), this }
}), Form.Validator.getMsg = function(e) { return Locale.get("FormValidator." + e) }, Form.Validator.adders = { validators: {}, add: function(e, t) { this.validators[e] = new InputValidator(e, t), this.initialize || this.implement({ validators: this.validators }) }, addAllThese: function(e) { Array.convert(e).each(function(e) { this.add(e[0], e[1]) }, this) }, getValidator: function(e) { return this.validators[e.split(":")[0]] } }, Object.append(Form.Validator, Form.Validator.adders), Form.Validator.implement(Form.Validator.adders), Form.Validator.add("IsEmpty", { errorMsg: !1, test: function(e) { return "select-one" == e.type || "select" == e.type ? !(e.selectedIndex >= 0 && "" != e.options[e.selectedIndex].value) : null == e.get("value") || 0 == e.get("value").length } }), Form.Validator.addAllThese([
    ["required", { errorMsg: function() { return Form.Validator.getMsg("required") }, test: function(e) { return !Form.Validator.getValidator("IsEmpty").test(e) } }],
    ["length", { errorMsg: function(e, t) { return "null" != typeOf(t.length) ? Form.Validator.getMsg("length").substitute({ length: t.length, elLength: e.get("value").length }) : "" }, test: function(e, t) { return "null" == typeOf(t.length) || (e.get("value").length == t.length || 0 == e.get("value").length) } }],
    ["minLength", { errorMsg: function(e, t) { return "null" != typeOf(t.minLength) ? Form.Validator.getMsg("minLength").substitute({ minLength: t.minLength, length: e.get("value").length }) : "" }, test: function(e, t) { return "null" == typeOf(t.minLength) || e.get("value").length >= (t.minLength || 0) } }],
    ["maxLength", { errorMsg: function(e, t) { return "null" != typeOf(t.maxLength) ? Form.Validator.getMsg("maxLength").substitute({ maxLength: t.maxLength, length: e.get("value").length }) : "" }, test: function(e, t) { return e.get("value").length <= (t.maxLength || 1e4) } }],
    ["validate-integer", { errorMsg: Form.Validator.getMsg.pass("integer"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^(-?[1-9]\d*|0)$/.test(e.get("value")) } }],
    ["validate-numeric", { errorMsg: Form.Validator.getMsg.pass("numeric"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^-?(?:0$0(?=\d*\.)|[1-9]|0)\d*(\.\d+)?$/.test(e.get("value")) } }],
    ["validate-digits", { errorMsg: Form.Validator.getMsg.pass("digits"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^[\d() .:\-\+#]+$/.test(e.get("value")) } }],
    ["validate-alpha", { errorMsg: Form.Validator.getMsg.pass("alpha"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^[a-zA-Z]+$/.test(e.get("value")) } }],
    ["validate-alphanum", { errorMsg: Form.Validator.getMsg.pass("alphanum"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || !/\W/.test(e.get("value")) } }],
    ["validate-date", {
        errorMsg: function(e, t) { if (Date.parse) { var n = t.dateFormat || "%x"; return Form.Validator.getMsg("dateSuchAs").substitute({ date: (new Date).format(n) }) } return Form.Validator.getMsg("dateInFormatMDY") },
        test: function(e, t) {
            if (Form.Validator.getValidator("IsEmpty").test(e)) return !0;
            var n = Locale.get("Date"),
                i = new RegExp([n.days, n.days_abbr, n.months, n.months_abbr, n.AM, n.PM].flatten().join("|"), "i"),
                r = e.get("value"),
                s = r.match(/[a-z]+/gi);
            if (s && !s.every(i.exec, i)) return !1;
            var a = Date.parse(r);
            if (!a) return !1;
            var o = t.dateFormat || "%x",
                l = a.format(o);
            return "invalid date" != l && e.set("value", l), a.isValid()
        }
    }],
    ["validate-email", { errorMsg: Form.Validator.getMsg.pass("email"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]\.?){0,63}[a-z0-9!#$%&'*+\/=?^_`{|}~-]@(?:(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)*[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\])$/i.test(e.get("value")) } }],
    ["validate-url", { errorMsg: Form.Validator.getMsg.pass("url"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^(https?|ftp|rmtp|mms):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(e.get("value")) } }],
    ["validate-currency-dollar", { errorMsg: Form.Validator.getMsg.pass("currencyDollar"), test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^\$?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(e.get("value")) } }],
    ["validate-one-required", { errorMsg: Form.Validator.getMsg.pass("oneRequired"), test: function(e, t) { return (document.id(t["validate-one-required"]) || e.getParent(t["validate-one-required"])).getElements("input").some(function(e) { return ["checkbox", "radio"].contains(e.get("type")) ? e.get("checked") : e.get("value") }) } }]
]), Element.Properties.validator = { set: function(e) { this.get("validator").setOptions(e) }, get: function() { var e = this.retrieve("validator"); return e || (e = new Form.Validator(this), this.store("validator", e)), e } }, Element.implement({ validate: function(e) { return e && this.set("validator", e), this.get("validator").validate() } });
var FormValidator = Form.Validator;
! function() {
    function e(e, t, n, i) { if (t && e[t]) return e[t]; var r = document.id(e[n]); return r ? r.getElements(i) : [] }
    Form.Validator.addAllThese([
        ["validate-enforce-oncheck", { test: function(t, n) { var i = t.getParent("form").retrieve("validator"); return !i || (e(n, "toEnforce", "enforceChildrenOf", "input, select, textarea").each(function(e) { t.checked ? i.enforceField(e) : (i.ignoreField(e), i.resetField(e)) }), !0) } }],
        ["validate-ignore-oncheck", { test: function(t, n) { var i = t.getParent("form").retrieve("validator"); return !i || (e(n, "toIgnore", "ignoreChildrenOf", "input, select, textarea").each(function(e) { t.checked ? (i.ignoreField(e), i.resetField(e)) : i.enforceField(e) }), !0) } }],
        ["validate-enforce-onselect-value", { test: function(t, n) { if (!n.value) return !0; var i = t.getParent("form").retrieve("validator"); return !i || (e(n, "toEnforce", "enforceChildrenOf", "input, select, textarea").each(function(e) { n.value == t.value ? i.enforceField(e) : (i.ignoreField(e), i.resetField(e)) }), !0) } }],
        ["validate-nospace", { errorMsg: function() { return Form.Validator.getMsg("noSpace") }, test: function(e, t) { return !e.get("value").test(/\s/) } }],
        ["validate-toggle-oncheck", { test: function(t, n) { var i = t.getParent("form").retrieve("validator"); if (!i) return !0; var r = e(n, "toToggle", "toToggleChildrenOf", "input, select, textarea"); return t.checked ? r.each(function(e) { i.enforceField(e) }) : r.each(function(e) { i.ignoreField(e), i.resetField(e) }), !0 } }],
        ["validate-reqchk-bynode", { errorMsg: function() { return Form.Validator.getMsg("reqChkByNode") }, test: function(t, n) { return e(n, !1, "nodeId", n.selector || "input[type=checkbox], input[type=radio]").some(function(e) { return e.checked }) } }],
        ["validate-required-check", { errorMsg: function(e, t) { return t.useTitle ? e.get("title") : Form.Validator.getMsg("requiredChk") }, test: function(e, t) { return !!e.checked } }],
        ["validate-reqchk-byname", {
            errorMsg: function(e, t) { return Form.Validator.getMsg("reqChkByName").substitute({ label: t.label || e.get("type") }) },
            test: function(e, t) {
                var n = t.groupName || e.get("name"),
                    i = $$("[name=" + n + "]"),
                    r = i.some(function(e, t) { return e.checked }),
                    s = e.getParent("form").retrieve("validator");
                return r && s && i.each(function(e, t) { s.resetField(e) }), r
            }
        }],
        ["validate-match", {
            errorMsg: function(e, t) { return Form.Validator.getMsg("match").substitute({ matchName: decodeURIComponent((t.matchName + "").replace(/\+/g, "%20")) || document.id(t.matchInput).get("name") }) },
            test: function(e, t) {
                var n = e.get("value"),
                    i = document.id(t.matchInput) && document.id(t.matchInput).get("value");
                return !n || !i || n == i
            }
        }],
        ["validate-after-date", {
            errorMsg: function(e, t) { return Form.Validator.getMsg("afterDate").substitute({ label: t.afterLabel || (t.afterElement ? Form.Validator.getMsg("startDate") : Form.Validator.getMsg("currentDate")) }) },
            test: function(e, t) {
                var n = document.id(t.afterElement) ? Date.parse(document.id(t.afterElement).get("value")) : new Date,
                    i = Date.parse(e.get("value"));
                return !i || !n || i >= n
            }
        }],
        ["validate-before-date", {
            errorMsg: function(e, t) { return Form.Validator.getMsg("beforeDate").substitute({ label: t.beforeLabel || (t.beforeElement ? Form.Validator.getMsg("endDate") : Form.Validator.getMsg("currentDate")) }) },
            test: function(e, t) {
                var n = Date.parse(e.get("value")),
                    i = document.id(t.beforeElement) ? Date.parse(document.id(t.beforeElement).get("value")) : new Date;
                return !i || !n || i >= n
            }
        }],
        ["validate-custom-required", { errorMsg: function() { return Form.Validator.getMsg("required") }, test: function(e, t) { return e.get("value") != t.emptyValue } }],
        ["validate-same-month", {
            errorMsg: function(e, t) { var n = document.id(t.sameMonthAs) && document.id(t.sameMonthAs).get("value"); if ("" != e.get("value")) return Form.Validator.getMsg(n ? "sameMonth" : "startMonth") },
            test: function(e, t) {
                var n = Date.parse(e.get("value")),
                    i = Date.parse(document.id(t.sameMonthAs) && document.id(t.sameMonthAs).get("value"));
                return !n || !i || n.format("%B") == i.format("%B")
            }
        }],
        ["validate-cc-num", {
            errorMsg: function(e) { var t = e.get("value").replace(/[^0-9]/g, ""); return Form.Validator.getMsg("creditcard").substitute({ length: t.length }) },
            test: function(e) {
                if (Form.Validator.getValidator("IsEmpty").test(e)) return !0;
                var t = e.get("value");
                t = t.replace(/[^0-9]/g, "");
                var n = !1;
                if (t.test(/^4[0-9]{12}([0-9]{3})?$/) ? n = "Visa" : t.test(/^5[1-5]([0-9]{14})$/) ? n = "Master Card" : t.test(/^3[47][0-9]{13}$/) ? n = "American Express" : t.test(/^6(?:011|5[0-9]{2})[0-9]{12}$/) ? n = "Discover" : t.test(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/) && (n = "Diners Club"), n) { for (var i = 0, r = 0, s = t.length - 1; s >= 0; --s) 0 != (r = t.charAt(s).toInt()) && ((t.length - s) % 2 == 0 && (r += r), r > 9 && (r = r.toString().charAt(0).toInt() + r.toString().charAt(1).toInt()), i += r); if (i % 10 == 0) return !0 }
                for (var a = "";
                    "" != t;) a += " " + t.substr(0, 4), t = t.substr(4);
                return e.getParent("form").retrieve("validator").ignoreField(e), e.set("value", a.clean()), e.getParent("form").retrieve("validator").enforceField(e), !1
            }
        }]
    ])
}(), Form.Validator.Inline = new Class({
        Extends: Form.Validator,
        options: { showError: function(e) { e.reveal ? e.reveal() : e.setStyle("display", "block") }, hideError: function(e) { e.dissolve ? e.dissolve() : e.setStyle("display", "none") }, scrollToErrorsOnSubmit: !0, scrollToErrorsOnBlur: !1, scrollToErrorsOnChange: !1, scrollFxOptions: { transition: "quad:out", offset: { y: -20 } } },
        initialize: function(e, t) {
            this.parent(e, t), this.addEvent("onElementValidate", function(e, t, n, i) {
                var r = this.getValidator(n);
                if (!e && r.getError(t)) {
                    i && t.addClass("warning");
                    var s = this.makeAdvice(n, t, r.getError(t), i);
                    this.insertAdvice(s, t), this.showAdvice(n, t)
                } else this.hideAdvice(n, t)
            })
        },
        makeAdvice: function(e, t, n, i) {
            var r = i ? this.warningPrefix : this.errorPrefix;
            r += this.options.useTitles ? t.title || n : n;
            var s = i ? "warning-advice" : "validation-advice",
                a = this.getAdvice(e, t);
            return a = a ? a.set("html", r) : new Element("div", { html: r, styles: { display: "none" }, id: "advice-" + e.split(":")[0] + "-" + this.getFieldId(t) }).addClass(s), t.store("$moo:advice-" + e, a), a
        },
        getFieldId: function(e) { return e.id ? e.id : e.id = "input_" + e.name },
        showAdvice: function(e, t) { var n = this.getAdvice(e, t);!n || t.retrieve("$moo:" + this.getPropName(e)) || "none" != n.getStyle("display") && "hidden" != n.getStyle("visibility") && 0 != n.getStyle("opacity") || (t.store("$moo:" + this.getPropName(e), !0), this.options.showError(n), this.fireEvent("showAdvice", [t, n, e])) },
        hideAdvice: function(e, t) {
            var n = this.getAdvice(e, t);
            n && t.retrieve("$moo:" + this.getPropName(e)) && (t.store("$moo:" + this.getPropName(e), !1), this.options.hideError(n), this.fireEvent("hideAdvice", [t, n, e]))
        },
        getPropName: function(e) { return "advice" + e },
        resetField: function(e) { return (e = document.id(e)) ? (this.parent(e), e.get("validators").each(function(t) { this.hideAdvice(t, e) }, this), this) : this },
        getAllAdviceMessages: function(e, t) {
            var n = [];
            if (e.hasClass("ignoreValidation") && !t) return n;
            e.get("validators").some(function(t) {
                var i = t.test("^warn-") || e.hasClass("warnOnly");
                i && (t = t.replace(/^warn-/, ""));
                var r = this.getValidator(t);
                r && n.push({ message: r.getError(e), warnOnly: i, passed: r.test(), validator: r })
            }, this);
            return n
        },
        getAdvice: function(e, t) { return t.retrieve("$moo:advice-" + e) },
        insertAdvice: function(e, t) {
            var n = t.get("validatorProps");
            n.msgPos && document.id(n.msgPos) ? document.id(n.msgPos).grab(e) : t.type && "radio" == t.type.toLowerCase() ? t.getParent().adopt(e) : e.inject(document.id(t), "after")
        },
        validateField: function(e, t, n) { var i = this.parent(e, t); if ((this.options.scrollToErrorsOnSubmit && null == n || n) && !i) { for (var r = document.id(this).getElement(".validation-failed"), s = document.id(this).getParent(); s != document.body && s.getScrollSize().y == s.getSize().y;) s = s.getParent(); var a = s.retrieve("$moo:fvScroller");!a && window.Fx && Fx.Scroll && (a = new Fx.Scroll(s, this.options.scrollFxOptions), s.store("$moo:fvScroller", a)), r && (a ? a.toElement(r) : s.scrollTo(s.getScroll().x, r.getPosition(s).y - 20)) } return i },
        watchFields: function(e) { e.each(function(e) { this.options.evaluateFieldsOnBlur && e.addEvent("blur", this.validationMonitor.pass([e, !1, this.options.scrollToErrorsOnBlur], this)), this.options.evaluateFieldsOnChange && e.addEvent("change", this.validationMonitor.pass([e, !0, this.options.scrollToErrorsOnChange], this)) }, this) }
    }),
    function() {
        var e = this.OverText = new Class({
            Implements: [Options, Events, Class.Occlude],
            Binds: ["reposition", "assert", "focus", "hide"],
            options: { element: "label", labelClass: "overTxtLabel", positionOptions: { position: "upperLeft", edge: "upperLeft", offset: { x: 4, y: 2 } }, poll: !1, pollInterval: 250, wrap: !1 },
            property: "OverText",
            initialize: function(t, n) {
                if (t = this.element = document.id(t), this.occlude()) return this.occluded;
                this.setOptions(n), this.attach(t), e.instances.push(this), this.options.poll && this.poll()
            },
            toElement: function() { return this.element },
            attach: function() {
                var e = this.element,
                    t = this.options,
                    n = t.textOverride || e.get("alt") || e.get("title");
                if (!n) return this;
                var i = this.text = new Element(t.element, { class: t.labelClass, styles: { lineHeight: "normal", position: "absolute", cursor: "text" }, html: n, events: { click: this.hide.pass("label" == t.element, this) } }).inject(e, "after");
                return "label" == t.element && (e.get("id") || e.set("id", "input_" + String.uniqueID()), i.set("for", e.get("id"))), t.wrap && (this.textHolder = new Element("div.overTxtWrapper", { styles: { lineHeight: "normal", position: "relative" } }).grab(i).inject(e, "before")), this.enable()
            },
            destroy: function() { return this.element.eliminate(this.property), this.disable(), this.text && this.text.destroy(), this.textHolder && this.textHolder.destroy(), this },
            disable: function() { return this.element.removeEvents({ focus: this.focus, blur: this.assert, change: this.assert }), window.removeEvent("resize", this.reposition), this.hide(!0, !0), this },
            enable: function() { return this.element.addEvents({ focus: this.focus, blur: this.assert, change: this.assert }), window.addEvent("resize", this.reposition), this.reposition(), this },
            wrap: function() { "label" == this.options.element && (this.element.get("id") || this.element.set("id", "input_" + String.uniqueID()), this.text.set("for", this.element.get("id"))) },
            startPolling: function() { return this.pollingPaused = !1, this.poll() },
            poll: function(e) { return this.poller && !e ? this : (e ? clearInterval(this.poller) : this.poller = function() { this.pollingPaused || this.assert(!0) }.periodical(this.options.pollInterval, this), this) },
            stopPolling: function() { return this.pollingPaused = !0, this.poll(!0) },
            focus: function() { return !this.text || this.text.isDisplayed() && !this.element.get("disabled") ? this.hide() : this },
            hide: function(e, t) {
                if (this.text && this.text.isDisplayed() && (!this.element.get("disabled") || t) && (this.text.hide(), this.fireEvent("textHide", [this.text, this.element]), this.pollingPaused = !0, !e)) try { this.element.fireEvent("focus"), this.element.focus() } catch (e) {}
                return this
            },
            show: function() { return document.id(this.text) && !this.text.isDisplayed() && (this.text.show(), this.reposition(), this.fireEvent("textShow", [this.text, this.element]), this.pollingPaused = !1), this },
            test: function() { return !this.element.get("value") },
            assert: function(e) { return this[this.test() ? "show" : "hide"](e) },
            reposition: function() { return this.assert(!0), this.element.isVisible() ? (this.text && this.test() && this.text.position(Object.merge(this.options.positionOptions, { relativeTo: this.element })), this) : this.stopPolling().hide() }
        })
    }(), OverText.instances = [], Object.append(OverText, { each: function(e) { return OverText.instances.each(function(t, n) { t.element && t.text && e.call(OverText, t, n) }) }, update: function() { return OverText.each(function(e) { return e.reposition() }) }, hideAll: function() { return OverText.each(function(e) { return e.hide(!0, !0) }) }, showAll: function() { return OverText.each(function(e) { return e.show() }) } }), Fx.Elements = new Class({
        Extends: Fx.CSS,
        initialize: function(e, t) { this.elements = this.subject = $$(e), this.parent(t) },
        compute: function(e, t, n) {
            var i = {};
            for (var r in e) {
                var s = e[r],
                    a = t[r],
                    o = i[r] = {};
                for (var l in s) o[l] = this.parent(s[l], a[l], n)
            }
            return i
        },
        set: function(e) {
            for (var t in e)
                if (this.elements[t]) { var n = e[t]; for (var i in n) this.render(this.elements[t], i, n[i], this.options.unit) }
            return this
        },
        start: function(e) {
            if (!this.check(e)) return this;
            var t = {},
                n = {};
            for (var i in e)
                if (this.elements[i]) {
                    var r = e[i],
                        s = t[i] = {},
                        a = n[i] = {};
                    for (var o in r) {
                        var l = this.prepare(this.elements[i], o, r[o]);
                        s[o] = l.from, a[o] = l.to
                    }
                }
            return this.parent(t, n)
        }
    }), Fx.Accordion = new Class({
        Extends: Fx.Elements,
        options: { fixedHeight: !1, fixedWidth: !1, display: 0, show: !1, height: !0, width: !1, opacity: !0, alwaysHide: !1, trigger: "click", initialDisplayFx: !0, resetHeight: !0, keepOpen: !1 },
        initialize: function() {
            var e = function(e) { return null != e },
                t = Array.link(arguments, { container: Type.isElement, options: Type.isObject, togglers: e, elements: e });
            this.parent(t.elements, t.options);
            var n = this.options,
                i = this.togglers = $$(t.togglers);
            this.previous = -1, this.internalChain = new Chain, n.alwaysHide && (this.options.link = "chain"), (n.show || 0 === this.options.show) && (n.display = !1, this.previous = n.show), n.start && (n.display = !1, n.show = !1);
            var r = this.effects = {};
            n.opacity && (r.opacity = "fullOpacity"), n.width && (r.width = n.fixedWidth ? "fullWidth" : "offsetWidth"), n.height && (r.height = n.fixedHeight ? "fullHeight" : "scrollHeight");
            for (var s = 0, a = i.length; s < a; s++) this.addSection(i[s], this.elements[s]);
            this.elements.each(function(e, t) {
                if (n.show === t) this.fireEvent("active", [i[t], e]);
                else
                    for (var s in r) e.setStyle(s, 0)
            }, this), (n.display || 0 === n.display || !1 === n.initialDisplayFx) && this.display(n.display, n.initialDisplayFx), !1 !== n.fixedHeight && (n.resetHeight = !1), this.addEvent("complete", this.internalChain.callChain.bind(this.internalChain))
        },
        addSection: function(e, t) {
            e = document.id(e), t = document.id(t), this.togglers.include(e), this.elements.include(t);
            var n = this.togglers,
                i = this.options,
                r = n.contains(e),
                s = n.indexOf(e),
                a = this.display.pass(s, this);
            if (e.store("accordion:display", a).addEvent(i.trigger, a), i.height && t.setStyles({ "padding-top": 0, "border-top": "none", "padding-bottom": 0, "border-bottom": "none" }), i.width && t.setStyles({ "padding-left": 0, "border-left": "none", "padding-right": 0, "border-right": "none" }), t.fullOpacity = 1, i.fixedWidth && (t.fullWidth = i.fixedWidth), i.fixedHeight && (t.fullHeight = i.fixedHeight), t.setStyle("overflow", "hidden"), !r)
                for (var o in this.effects) t.setStyle(o, 0);
            return this
        },
        removeSection: function(e, t) {
            var n = this.togglers,
                i = n.indexOf(e),
                r = this.elements[i],
                s = function() { n.erase(e), this.elements.erase(r), this.detach(e) }.bind(this);
            return this.now == i || null != t ? this.display(null != t ? t : i - 1 >= 0 ? i - 1 : 0).chain(s) : s(), this
        },
        detach: function(e) { var t = function(e) { e.removeEvent(this.options.trigger, e.retrieve("accordion:display")) }.bind(this); return e ? t(e) : this.togglers.each(t), this },
        display: function(e, t) {
            if (!this.check(e, t)) return this;
            var n = {},
                i = this.elements,
                r = this.options,
                s = this.effects,
                a = r.keepOpen,
                o = r.alwaysHide;
            if (null == t && (t = !0), "element" == typeOf(e) && (e = i.indexOf(e)), e == this.current && !o && !a) return this;
            if (r.resetHeight) {
                var l = i[this.current];
                if (l && !this.selfHidden)
                    for (var u in s) l.setStyle(u, l[s[u]])
            }
            return this.timer && "chain" == r.link ? this : (null != this.current && (this.previous = this.current), this.current = e, this.selfHidden = !1, i.each(function(i, l) {
                n[l] = {};
                var u, h;
                if (!a || l == e) {
                    l == e && (h = i.offsetHeight > 0 && r.height || i.offsetWidth > 0 && r.width), l != e ? u = !0 : (o || a) && h && (u = !0, this.selfHidden = !0), this.fireEvent(u ? "background" : "active", [this.togglers[l], i]);
                    for (var c in s) n[l][c] = u ? 0 : i[s[c]];
                    t || u || !r.resetHeight || (n[l].height = "auto")
                }
            }, this), this.internalChain.clearChain(), this.internalChain.chain(function() {
                if (r.resetHeight && !this.selfHidden) {
                    var t = i[e];
                    t && t.setStyle("height", "auto")
                }
            }.bind(this)), t ? this.start(n) : this.set(n).internalChain.callChain())
        }
    });
var Accordion = new Class({
    Extends: Fx.Accordion,
    initialize: function() {
        this.parent.apply(this, arguments);
        var e = Array.link(arguments, { container: Type.isElement });
        this.container = e.container
    },
    addSection: function(e, t, n) {
        e = document.id(e), t = document.id(t);
        var i = this.togglers.contains(e),
            r = this.togglers.length;
        return !r || i && !n ? this.container && !i && (e.inject(this.container), t.inject(this.container)) : (n = null != n ? n : r - 1, e.inject(this.togglers[n], "before"), t.inject(e, "after")), this.parent.apply(this, arguments)
    }
});
Fx.Move = new Class({
        Extends: Fx.Morph,
        options: { relativeTo: document.body, position: "center", edge: !1, offset: { x: 0, y: 0 } },
        start: function(e) {
            var t = this.element,
                n = t.getStyles("top", "left");
            return "auto" != n.top && "auto" != n.left || t.setPosition(t.getPosition(t.getOffsetParent())), this.parent(t.position(Object.merge({}, this.options, e, { returnPos: !0 })))
        }
    }), Element.Properties.move = { set: function(e) { return this.get("move").cancel().setOptions(e), this }, get: function() { var e = this.retrieve("move"); return e || (e = new Fx.Move(this, { link: "cancel" }), this.store("move", e)), e } }, Element.implement({ move: function(e) { return this.get("move").start(e), this } }),
    function() {
        function e(e) { return /^(?:body|html)$/i.test(e.tagName) }
        Fx.Scroll = new Class({
            Extends: Fx,
            options: { offset: { x: 0, y: 0 }, wheelStops: !0 },
            initialize: function(e, t) {
                if (this.element = this.subject = document.id(e), this.parent(t), "element" != typeOf(this.element) && (this.element = document.id(this.element.getDocument().body)), this.options.wheelStops) {
                    var n = this.element,
                        i = this.cancel.pass(!1, this);
                    this.addEvent("start", function() { n.addEvent("mousewheel", i) }, !0), this.addEvent("complete", function() { n.removeEvent("mousewheel", i) }, !0)
                }
            },
            set: function() { var e = Array.flatten(arguments); return this.element.scrollTo(e[0], e[1]), this },
            compute: function(e, t, n) { return [0, 1].map(function(i) { return Fx.compute(e[i], t[i], n) }) },
            start: function(e, t) { if (!this.check(e, t)) return this; var n = this.element.getScroll(); return this.parent([n.x, n.y], [e, t]) },
            calculateScroll: function(e, t) {
                var n = this.element,
                    i = n.getScrollSize(),
                    r = n.getScroll(),
                    s = n.getSize(),
                    a = this.options.offset,
                    o = { x: e, y: t };
                for (var l in o) o[l] || 0 === o[l] || (o[l] = r[l]), "number" != typeOf(o[l]) && (o[l] = i[l] - s[l]), o[l] += a[l];
                return [o.x, o.y]
            },
            toTop: function() { return this.start.apply(this, this.calculateScroll(!1, 0)) },
            toLeft: function() { return this.start.apply(this, this.calculateScroll(0, !1)) },
            toRight: function() { return this.start.apply(this, this.calculateScroll("right", !1)) },
            toBottom: function() { return this.start.apply(this, this.calculateScroll(!1, "bottom")) },
            toElement: function(t, n) {
                n = n ? Array.convert(n) : ["x", "y"];
                var i = e(this.element) ? { x: 0, y: 0 } : this.element.getScroll(),
                    r = Object.map(document.id(t).getPosition(this.element), function(e, t) { return !!n.contains(t) && e + i[t] });
                return this.start.apply(this, this.calculateScroll(r.x, r.y))
            },
            toElementEdge: function(e, t, n) {
                t = t ? Array.convert(t) : ["x", "y"], e = document.id(e);
                var i = {},
                    r = e.getPosition(this.element),
                    s = e.getSize(),
                    a = this.element.getScroll(),
                    o = this.element.getSize(),
                    l = { x: r.x + s.x, y: r.y + s.y };
                return ["x", "y"].each(function(e) { t.contains(e) && (l[e] > a[e] + o[e] && (i[e] = l[e] - o[e]), r[e] < a[e] && (i[e] = r[e])), null == i[e] && (i[e] = a[e]), n && n[e] && (i[e] = i[e] + n[e]) }, this), i.x == a.x && i.y == a.y || this.start(i.x, i.y), this
            },
            toElementCenter: function(e, t, n) {
                t = t ? Array.convert(t) : ["x", "y"], e = document.id(e);
                var i = {},
                    r = e.getPosition(this.element),
                    s = e.getSize(),
                    a = this.element.getScroll(),
                    o = this.element.getSize();
                return ["x", "y"].each(function(e) { t.contains(e) && (i[e] = r[e] - (o[e] - s[e]) / 2), null == i[e] && (i[e] = a[e]), n && n[e] && (i[e] = i[e] + n[e]) }, this), i.x == a.x && i.y == a.y || this.start(i.x, i.y), this
            }
        }), Fx.Scroll.implement({ scrollToCenter: function() { return this.toElementCenter.apply(this, arguments) }, scrollIntoView: function() { return this.toElementEdge.apply(this, arguments) } })
    }(), Fx.Slide = new Class({
        Extends: Fx,
        options: { mode: "vertical", wrapper: !1, hideOverflow: !0, resetHeight: !1 },
        initialize: function(e, t) {
            e = this.element = this.subject = document.id(e), this.parent(t), t = this.options;
            var n = e.retrieve("wrapper"),
                i = e.getStyles("margin", "position", "overflow");
            t.hideOverflow && (i = Object.append(i, { overflow: "hidden" })), t.wrapper && (n = document.id(t.wrapper).setStyles(i)), n || (n = new Element("div", { styles: i }).wraps(e)), e.store("wrapper", n).setStyle("margin", 0), "visible" == e.getStyle("overflow") && e.setStyle("overflow", "hidden"), this.now = [], this.open = !0, this.wrapper = n,
                this.addEvent("complete", function() { this.open = 0 != n["offset" + this.layout.capitalize()], this.open && this.options.resetHeight && n.setStyle("height", "") }, !0)
        },
        vertical: function() { this.margin = "margin-top", this.layout = "height", this.offset = this.element.offsetHeight },
        horizontal: function() { this.margin = "margin-left", this.layout = "width", this.offset = this.element.offsetWidth },
        set: function(e) { return this.element.setStyle(this.margin, e[0]), this.wrapper.setStyle(this.layout, e[1]), this },
        compute: function(e, t, n) { return [0, 1].map(function(i) { return Fx.compute(e[i], t[i], n) }) },
        start: function(e, t) {
            if (!this.check(e, t)) return this;
            this[t || this.options.mode]();
            var n, i = this.element.getStyle(this.margin).toInt(),
                r = this.wrapper.getStyle(this.layout).toInt(),
                s = [
                    [i, r],
                    [0, this.offset]
                ],
                a = [
                    [i, r],
                    [-this.offset, 0]
                ];
            switch (e) {
                case "in":
                    n = s;
                    break;
                case "out":
                    n = a;
                    break;
                case "toggle":
                    n = 0 == r ? s : a
            }
            return this.parent(n[0], n[1])
        },
        slideIn: function(e) { return this.start("in", e) },
        slideOut: function(e) { return this.start("out", e) },
        hide: function(e) { return this[e || this.options.mode](), this.open = !1, this.set([-this.offset, 0]) },
        show: function(e) { return this[e || this.options.mode](), this.open = !0, this.set([0, this.offset]) },
        toggle: function(e) { return this.start("toggle", e) }
    }), Element.Properties.slide = { set: function(e) { return this.get("slide").cancel().setOptions(e), this }, get: function() { var e = this.retrieve("slide"); return e || (e = new Fx.Slide(this, { link: "cancel" }), this.store("slide", e)), e } }, Element.implement({
        slide: function(e, t) {
            e = e || "toggle";
            var n, i = this.get("slide");
            switch (e) {
                case "hide":
                    i.hide(t);
                    break;
                case "show":
                    i.show(t);
                    break;
                case "toggle":
                    var r = this.retrieve("slide:flag", i.open);
                    i[r ? "slideOut" : "slideIn"](t), this.store("slide:flag", !r), n = !0;
                    break;
                default:
                    i.start(e, t)
            }
            return n || this.eliminate("slide:flag"), this
        }
    });
var SmoothScroll = Fx.SmoothScroll = new Class({
    Extends: Fx.Scroll,
    options: { axes: ["x", "y"] },
    initialize: function(e, t) {
        t = t || document, this.doc = t.getDocument(), this.parent(this.doc, e);
        var n = t.getWindow(),
            i = n.location.href.match(/^[^#]*/)[0] + "#";
        $$(this.options.links || this.doc.links).each(function(e) {
            if (0 == e.href.indexOf(i)) {
                var t = e.href.substr(i.length);
                t && this.useLink(e, t)
            }
        }, this), this.addEvent("complete", function() { n.location.hash = this.anchor, this.element.scrollTo(this.to[0], this.to[1]) }, !0)
    },
    useLink: function(e, t) {
        return e.addEvent("click", function(n) {
            var i = document.id(t) || this.doc.getElement("a[name=" + t + "]");
            i && (n.preventDefault(), this.toElement(i, this.options.axes).chain(function() { this.fireEvent("scrolledTo", [e, i]) }.bind(this)), this.anchor = t)
        }.bind(this)), this
    }
});
Fx.Sort = new Class({
        Extends: Fx.Elements,
        options: { mode: "vertical" },
        initialize: function(e, t) { this.parent(e, t), this.elements.each(function(e) { "static" == e.getStyle("position") && e.setStyle("position", "relative") }), this.setDefaultOrder() },
        setDefaultOrder: function() { this.currentOrder = this.elements.map(function(e, t) { return t }) },
        sort: function() {
            if (!this.check(arguments)) return this;
            var e = Array.flatten(arguments),
                t = 0,
                n = 0,
                i = {},
                r = {},
                s = "vertical" == this.options.mode,
                a = this.elements.map(function(e, i) {
                    var a, o = e.getComputedSize({ styles: ["border", "padding", "margin"] });
                    s ? (a = { top: t, margin: o["margin-top"], height: o.totalHeight }, t += a.height - o["margin-top"]) : (a = { left: n, margin: o["margin-left"], width: o.totalWidth }, n += a.width);
                    var l = s ? "top" : "left";
                    r[i] = {};
                    var u = e.getStyle(l).toInt();
                    return r[i][l] = u || 0, a
                }, this);
            this.set(r), e = e.map(function(e) { return e.toInt() }), e.length != this.elements.length && (this.currentOrder.each(function(t) { e.contains(t) || e.push(t) }), e.length > this.elements.length && e.splice(this.elements.length - 1, e.length - this.elements.length));
            var o = 0;
            t = n = 0, e.each(function(e) {
                var r = {};
                s ? (r.top = t - a[e].top - o, t += a[e].height) : (r.left = n - a[e].left, n += a[e].width), o += a[e].margin, i[e] = r
            }, this);
            var l = {};
            return Array.clone(e).sort().each(function(e) { l[e] = i[e] }), this.start(l), this.currentOrder = e, this
        },
        rearrangeDOM: function(e) {
            e = e || this.currentOrder;
            var t = this.elements[0].getParent(),
                n = [];
            return this.elements.setStyle("opacity", 0), e.each(function(e) { n.push(this.elements[e].inject(t).setStyles({ top: 0, left: 0 })) }, this), this.elements.setStyle("opacity", 1), this.elements = $$(n), this.setDefaultOrder(), this
        },
        getDefaultOrder: function() { return this.elements.map(function(e, t) { return t }) },
        getCurrentOrder: function() { return this.currentOrder },
        forward: function() { return this.sort(this.getDefaultOrder()) },
        backward: function() { return this.sort(this.getDefaultOrder().reverse()) },
        reverse: function() { return this.sort(this.currentOrder.reverse()) },
        sortByElements: function(e) { return this.sort(e.map(function(e) { return this.elements.indexOf(e) }, this)) },
        swap: function(e, t) { "element" == typeOf(e) && (e = this.elements.indexOf(e)), "element" == typeOf(t) && (t = this.elements.indexOf(t)); var n = Array.clone(this.currentOrder); return n[this.currentOrder.indexOf(e)] = t, n[this.currentOrder.indexOf(t)] = e, this.sort(n) }
    }),
    function() {
        var e = this.Keyboard = new Class({
                Extends: Events,
                Implements: [Options],
                options: { defaultEventType: "keydown", active: !1, manager: null, events: {}, nonParsedEvents: ["activate", "deactivate", "onactivate", "ondeactivate", "changed", "onchanged"] },
                initialize: function(e) { e && e.manager && (this._manager = e.manager, delete e.manager), this.setOptions(e), this._setup() },
                addEvent: function(t, n, i) { return this.parent(e.parse(t, this.options.defaultEventType, this.options.nonParsedEvents), n, i) },
                removeEvent: function(t, n) { return this.parent(e.parse(t, this.options.defaultEventType, this.options.nonParsedEvents), n) },
                toggleActive: function() { return this[this.isActive() ? "deactivate" : "activate"]() },
                activate: function(t) {
                    if (t) {
                        if (t.isActive()) return this;
                        this._activeKB && t != this._activeKB && (this.previous = this._activeKB, this.previous.fireEvent("deactivate")), this._activeKB = t.fireEvent("activate"), e.manager.fireEvent("changed")
                    } else this._manager && this._manager.activate(this);
                    return this
                },
                isActive: function() { return this._manager ? this._manager._activeKB == this : e.manager == this },
                deactivate: function(t) { return t ? t === this._activeKB && (this._activeKB = null, t.fireEvent("deactivate"), e.manager.fireEvent("changed")) : this._manager && this._manager.deactivate(this), this },
                relinquish: function() { return this.isActive() && this._manager && this._manager.previous ? this._manager.activate(this._manager.previous) : this.deactivate(), this },
                manage: function(e) { return e._manager && e._manager.drop(e), this._instances.push(e), e._manager = this, this._activeKB || this.activate(e), this },
                drop: function(e) { return e.relinquish(), this._instances.erase(e), this._activeKB == e && (this.previous && this._instances.contains(this.previous) ? this.activate(this.previous) : this._activeKB = this._instances[0]), this },
                trace: function() { e.trace(this) },
                each: function(t) { e.each(this, t) },
                _instances: [],
                _disable: function(e) { this._activeKB == e && (this._activeKB = null) },
                _setup: function() { this.addEvents(this.options.events), e.manager && !this._manager && e.manager.manage(this), this.options.active ? this.activate() : this.relinquish() },
                _handle: function(e, t) {
                    if (!e.preventKeyboardPropagation) {
                        var n = !!this._manager;
                        n && this._activeKB && (this._activeKB._handle(e, t), e.preventKeyboardPropagation) || (this.fireEvent(t, e), !n && this._activeKB && this._activeKB._handle(e, t))
                    }
                }
            }),
            t = {},
            n = ["shift", "control", "alt", "meta"],
            i = /^(?:shift|control|ctrl|alt|meta)$/;
        e.parse = function(e, r, s) {
            if (s && s.contains(e.toLowerCase())) return e;
            if (e = e.toLowerCase().replace(/^(keyup|keydown):/, function(e, t) { return r = t, "" }), !t[e])
                if ("+" != e) {
                    var a, o = {};
                    e.split("+").each(function(e) { i.test(e) ? o[e] = !0 : a = e }), o.control = o.control || o.ctrl;
                    var l = [];
                    n.each(function(e) { o[e] && l.push(e) }), a && l.push(a), t[e] = l.join("+")
                } else t[e] = e;
            return r + ":keys(" + t[e] + ")"
        }, e.each = function(t, n) { for (var i = t || e.manager; i;) n(i), i = i._activeKB }, e.stop = function(e) { e.preventKeyboardPropagation = !0 }, e.manager = new e({ active: !0 }), e.trace = function(t) {
            t = t || e.manager;
            var n = window.console && console.log;
            n && console.log("the following items have focus: "), e.each(t, function(e) { n && console.log(document.id(e.widget) || e.wiget || e) })
        };
        var r = function(t) {
            var r = [];
            n.each(function(e) { t[e] && r.push(e) }), i.test(t.key) || r.push(t.key), e.manager._handle(t, t.type + ":keys(" + r.join("+") + ")")
        };
        document.addEvents({ keyup: r, keydown: r })
    }(), Keyboard.prototype.options.nonParsedEvents.combine(["rebound", "onrebound"]), Keyboard.implement({ addShortcut: function(e, t) { return this._shortcuts = this._shortcuts || [], this._shortcutIndex = this._shortcutIndex || {}, t.getKeyboard = Function.convert(this), t.name = e, this._shortcutIndex[e] = t, this._shortcuts.push(t), t.keys && this.addEvent(t.keys, t.handler), this }, addShortcuts: function(e) { for (var t in e) this.addShortcut(t, e[t]); return this }, removeShortcut: function(e) { var t = this.getShortcut(e); return t && t.keys && (this.removeEvent(t.keys, t.handler), delete this._shortcutIndex[e], this._shortcuts.erase(t)), this }, removeShortcuts: function(e) { return e.each(this.removeShortcut, this), this }, getShortcuts: function() { return this._shortcuts || [] }, getShortcut: function(e) { return (this._shortcutIndex || {})[e] } }), Keyboard.rebind = function(e, t) { Array.convert(t).each(function(t) { t.getKeyboard().removeEvent(t.keys, t.handler), t.getKeyboard().addEvent(e, t.handler), t.keys = e, t.getKeyboard().fireEvent("rebound") }) }, Keyboard.getActiveShortcuts = function(e) {
        var t = [],
            n = [];
        return Keyboard.each(e, [].push.bind(t)), t.each(function(e) { n.extend(e.getShortcuts()) }), n
    }, Keyboard.getShortcut = function(e, t, n) {
        n = n || {};
        var i = n.many ? [] : null,
            r = n.many ? function(t) {
                var n = t.getShortcut(e);
                n && i.push(n)
            } : function(t) { i || (i = t.getShortcut(e)) };
        return Keyboard.each(t, r), i
    }, Keyboard.getShortcuts = function(e, t) { return Keyboard.getShortcut(e, t, { many: !0 }) },
    function() {
        this.HtmlTable = new Class({
            Implements: [Options, Events, Class.Occlude],
            options: { properties: { cellpadding: 0, cellspacing: 0, border: 0 }, rows: [], headers: [], footers: [] },
            property: "HtmlTable",
            initialize: function() {
                var e = Array.link(arguments, { options: Type.isObject, table: Type.isElement, id: Type.isString });
                if (this.setOptions(e.options), !e.table && e.id && (e.table = document.id(e.id)), this.element = e.table || new Element("table", this.options.properties), this.occlude()) return this.occluded;
                this.build()
            },
            build: function() { this.element.store("HtmlTable", this), this.body = document.id(this.element.tBodies[0]) || new Element("tbody").inject(this.element), $$(this.body.rows), this.options.headers.length ? this.setHeaders(this.options.headers) : this.thead = document.id(this.element.tHead), this.thead && (this.head = this.getHead()), this.options.footers.length && this.setFooters(this.options.footers), this.tfoot = document.id(this.element.tFoot), this.tfoot && (this.foot = document.id(this.tfoot.rows[0])), this.options.rows.each(function(e) { this.push(e) }, this) },
            toElement: function() { return this.element },
            empty: function() { return this.body.empty(), this },
            set: function(e, t) {
                var n = "headers" == e ? "tHead" : "tFoot",
                    i = n.toLowerCase();
                this[i] = (document.id(this.element[n]) || new Element(i).inject(this.element, "top")).empty();
                var r = this.push(t, {}, this[i], "headers" == e ? "th" : "td");
                return "headers" == e ? this.head = this.getHead() : this.foot = this.getHead(), r
            },
            getHead: function() { var e = this.thead.rows; return e.length > 1 ? $$(e) : !!e.length && document.id(e[0]) },
            setHeaders: function(e) { return this.set("headers", e), this },
            setFooters: function(e) { return this.set("footers", e), this },
            update: function(e, t, n) {
                var i = e.getChildren(n || "td"),
                    r = i.length - 1;
                return t.each(function(t, s) {
                    var a = i[s] || new Element(n || "td").inject(e),
                        o = (t && Object.prototype.hasOwnProperty.call(t, "content") ? t.content : "") || t,
                        l = typeOf(o);
                    t && Object.prototype.hasOwnProperty.call(t, "properties") && a.set(t.properties), /(element(s?)|array|collection)/.test(l) ? a.empty().adopt(o) : a.set("html", o), s > r ? i.push(a) : i[s] = a
                }), { tr: e, tds: i }
            },
            push: function(e, t, n, i, r) { return "element" == typeOf(e) && "tr" == e.get("tag") ? (e.inject(n || this.body, r), { tr: e, tds: e.getChildren("td") }) : this.update(new Element("tr", t).inject(n || this.body, r), e, i) },
            pushMany: function(e, t, n, i, r) { return e.map(function(e) { return this.push(e, t, n, i, r) }, this) }
        })
    }(), ["adopt", "inject", "wraps", "grab", "replaces", "dispose"].each(function(e) { HtmlTable.implement(e, function() { return this.element[e].apply(this.element, arguments), this }) }), HtmlTable = Class.refactor(HtmlTable, {
        options: { useKeyboard: !0, classRowSelected: "table-tr-selected", classRowHovered: "table-tr-hovered", classSelectable: "table-selectable", shiftForMultiSelect: !0, allowMultiSelect: !0, selectable: !1, selectHiddenRows: !1 },
        initialize: function() {
            if (this.previous.apply(this, arguments), this.occluded) return this.occluded;
            this.selectedRows = new Elements, this.bound || (this.bound = {}), this.bound.mouseleave = this.mouseleave.bind(this), this.bound.clickRow = this.clickRow.bind(this), this.bound.activateKeyboard = function() { this.keyboard && this.selectEnabled && this.keyboard.activate() }.bind(this), this.options.selectable && this.enableSelect()
        },
        empty: function() { return this.body.rows.length && this.selectNone(), this.previous() },
        enableSelect: function() { return this.selectEnabled = !0, this.attachSelects(), this.element.addClass(this.options.classSelectable), this },
        disableSelect: function() { return this.selectEnabled = !1, this.attachSelects(!1), this.element.removeClass(this.options.classSelectable), this },
        push: function() { var e = this.previous.apply(this, arguments); return this.updateSelects(), e },
        toggleRow: function(e) { return this[(this.isSelected(e) ? "de" : "") + "selectRow"](e) },
        selectRow: function(e, t) { if (!this.isSelected(e) && (t || this.body.getChildren().contains(e))) return this.options.allowMultiSelect || this.selectNone(), this.isSelected(e) || (this.selectedRows.push(e), e.addClass(this.options.classRowSelected), this.fireEvent("rowFocus", [e, this.selectedRows]), this.fireEvent("stateChanged")), this.focused = e, document.clearSelection(), this },
        isSelected: function(e) { return this.selectedRows.contains(e) },
        getSelected: function() { return this.selectedRows },
        serialize: function() { var e = this.previous.apply(this, arguments) || {}; return this.options.selectable && (e.selectedRows = this.selectedRows.map(function(e) { return Array.indexOf(this.body.rows, e) }.bind(this))), e },
        restore: function(e) { this.options.selectable && e.selectedRows && e.selectedRows.each(function(e) { this.selectRow(this.body.rows[e]) }.bind(this)), this.previous.apply(this, arguments) },
        deselectRow: function(e, t) { if (this.isSelected(e) && (t || this.body.getChildren().contains(e))) return this.selectedRows = new Elements(Array.convert(this.selectedRows).erase(e)), e.removeClass(this.options.classRowSelected), this.fireEvent("rowUnfocus", [e, this.selectedRows]), this.fireEvent("stateChanged"), this },
        selectAll: function(e) { if (e || this.options.allowMultiSelect) return this.selectRange(0, this.body.rows.length, e), this },
        selectNone: function() { return this.selectAll(!0) },
        selectRange: function(e, t, n) {
            if (this.options.allowMultiSelect || n) {
                var i = n ? "deselectRow" : "selectRow",
                    r = Array.clone(this.body.rows);
                if ("element" == typeOf(e) && (e = r.indexOf(e)), "element" == typeOf(t) && (t = r.indexOf(t)), (t = t < r.length - 1 ? t : r.length - 1) < e) {
                    var s = e;
                    e = t, t = s
                }
                for (var a = e; a <= t; a++)(this.options.selectHiddenRows || r[a].isDisplayed()) && this[i](r[a], !0);
                return this
            }
        },
        deselectRange: function(e, t) { this.selectRange(e, t, !0) },
        enterRow: function(e) { this.hovered && (this.hovered = this.leaveRow(this.hovered)), this.hovered = e.addClass(this.options.classRowHovered) },
        leaveRow: function(e) { e.removeClass(this.options.classRowHovered) },
        updateSelects: function() {
            Array.each(this.body.rows, function(e) {
                var t = e.retrieve("binders");
                (t || this.selectEnabled) && (t || (t = { mouseenter: this.enterRow.pass([e], this), mouseleave: this.leaveRow.pass([e], this) }, e.store("binders", t)), this.selectEnabled ? e.addEvents(t) : e.removeEvents(t))
            }, this)
        },
        shiftFocus: function(e, t) {
            if (!this.focused) return this.selectRow(this.body.rows[0], t);
            var n = this.getRowByOffset(e, this.options.selectHiddenRows);
            if (null === n || this.focused == this.body.rows[n]) return this;
            this.toggleRow(this.body.rows[n], t)
        },
        clickRow: function(e, t) {
            (e.shift || e.meta || e.control) && this.options.shiftForMultiSelect || e.rightClick && this.isSelected(t) && this.options.allowMultiSelect || this.selectNone(), e.rightClick ? this.selectRow(t) : this.toggleRow(t), e.shift && (this.selectRange(this.rangeStart || this.body.rows[0], t, !this.rangeStart || !this.isSelected(t)), this.focused = t), this.rangeStart = t
        },
        getRowByOffset: function(e, t) {
            if (!this.focused) return 0;
            var n = Array.indexOf(this.body.rows, this.focused);
            if (0 == n && e < 0 || n == this.body.rows.length - 1 && e > 0) return null;
            if (t) n += e;
            else {
                var i = 0;
                if (e > 0)
                    for (; i < e && n < this.body.rows.length - 1;) this.body.rows[++n].isDisplayed() && i++;
                else
                    for (; i > e && n > 0;) this.body.rows[--n].isDisplayed() && i--
            }
            return n
        },
        attachSelects: function(e) {
            e = null == e || e;
            var t = e ? "addEvents" : "removeEvents";
            if (this.element[t]({ mouseleave: this.bound.mouseleave, click: this.bound.activateKeyboard }), this.body[t]({ "click:relay(tr)": this.bound.clickRow, "contextmenu:relay(tr)": this.bound.clickRow }), this.options.useKeyboard || this.keyboard) {
                if (this.keyboard || (this.keyboard = new Keyboard), !this.selectKeysDefined) {
                    this.selectKeysDefined = !0;
                    var n, i, r = function(e) {
                            var t = function(r) {
                                clearTimeout(n), r.preventDefault();
                                var s = this.body.rows[this.getRowByOffset(e, this.options.selectHiddenRows)];
                                r.shift && s && this.isSelected(s) ? (this.deselectRow(this.focused), this.focused = s) : (!s || this.options.allowMultiSelect && r.shift || this.selectNone(), this.shiftFocus(e, r)), n = i ? t.delay(100, this, r) : function() { i = !0, t(r) }.delay(400)
                            }.bind(this);
                            return t
                        }.bind(this),
                        s = function() { clearTimeout(n), i = !1 };
                    this.keyboard.addEvents({ "keydown:shift+up": r(-1), "keydown:shift+down": r(1), "keyup:shift+up": s, "keyup:shift+down": s, "keyup:up": s, "keyup:down": s });
                    var a = "";
                    this.options.allowMultiSelect && this.options.shiftForMultiSelect && this.options.useKeyboard && (a = " (Shift multi-selects)."), this.keyboard.addShortcuts({ "Select Previous Row": { keys: "up", shortcut: "up arrow", handler: r(-1), description: "Select the previous row in the table." + a }, "Select Next Row": { keys: "down", shortcut: "down arrow", handler: r(1), description: "Select the next row in the table." + a } })
                }
                this.keyboard[e ? "activate" : "deactivate"]()
            }
            this.updateSelects()
        },
        mouseleave: function() { this.hovered && this.leaveRow(this.hovered) }
    }),
    function() {
        var e = document.createElement("table");
        try { e.innerHTML = "<tr><td></td></tr>", e = 0 === e.childNodes.length } catch (t) { e = !0 }
        HtmlTable = Class.refactor(HtmlTable, {
            options: { sortIndex: 0, sortReverse: !1, parsers: [], defaultParser: "string", classSortable: "table-sortable", classHeadSort: "table-th-sort", classHeadSortRev: "table-th-sort-rev", classNoSort: "table-th-nosort", classGroupHead: "table-tr-group-head", classGroup: "table-tr-group", classCellSort: "table-td-sort", classSortSpan: "table-th-sort-span", sortable: !1, thSelector: "th" },
            initialize: function() {
                if (this.previous.apply(this, arguments), this.occluded) return this.occluded;
                this.sorted = { index: null, dir: 1 }, this.bound || (this.bound = {}), this.bound.headClick = this.headClick.bind(this), this.sortSpans = new Elements, this.options.sortable && (this.enableSort(), null != this.options.sortIndex && this.sort(this.options.sortIndex, this.options.sortReverse))
            },
            attachSorts: function(e) { this.detachSorts(), !1 !== e && this.element.addEvent("click:relay(" + this.options.thSelector + ")", this.bound.headClick) },
            detachSorts: function() { this.element.removeEvents("click:relay(" + this.options.thSelector + ")") },
            setHeaders: function() { this.previous.apply(this, arguments), this.sortable && this.setParsers() },
            setParsers: function() { this.parsers = this.detectParsers() },
            detectParsers: function() { return this.head && this.head.getElements(this.options.thSelector).flatten().map(this.detectParser, this) },
            detectParser: function(e, t) {
                if (e.hasClass(this.options.classNoSort) || e.retrieve("htmltable-parser")) return e.retrieve("htmltable-parser");
                var n = new Element("div");
                n.adopt(e.childNodes).inject(e);
                var i = new Element("span", { class: this.options.classSortSpan }).inject(n, "top");
                this.sortSpans.push(i);
                var r, s = this.options.parsers[t],
                    a = this.body.rows;
                switch (typeOf(s)) {
                    case "function":
                        s = { convert: s }, r = !0;
                        break;
                    case "string":
                        s = s, r = !0
                }
                return r || HtmlTable.ParserPriority.some(function(e) {
                    var n = HtmlTable.Parsers[e],
                        i = n.match;
                    if (!i) return !1;
                    for (var r = 0, o = a.length; r < o; r++) {
                        var l = document.id(a[r].cells[t]),
                            u = l ? l.get("html").clean() : "";
                        if (u && i.test(u)) return s = n, !0
                    }
                }), s || (s = this.options.defaultParser), e.store("htmltable-parser", s), s
            },
            headClick: function(e, t) { if (this.head && !t.hasClass(this.options.classNoSort)) return this.sort(Array.indexOf(this.head.getElements(this.options.thSelector).flatten(), t) % this.body.rows[0].cells.length) },
            serialize: function() { var e = this.previous.apply(this, arguments) || {}; return this.options.sortable && (e.sortIndex = this.sorted.index, e.sortReverse = this.sorted.reverse), e },
            restore: function(e) { this.options.sortable && e.sortIndex && this.sort(e.sortIndex, e.sortReverse), this.previous.apply(this, arguments) },
            setSortedState: function(e, t) { null != t ? this.sorted.reverse = t : this.sorted.index == e ? this.sorted.reverse = !this.sorted.reverse : this.sorted.reverse = null == this.sorted.index, null != e && (this.sorted.index = e) },
            setHeadSort: function(e) {
                var t = $$(this.head.length ? this.head.map(function(e) { return e.getElements(this.options.thSelector)[this.sorted.index] }, this).clean() : this.head.cells[this.sorted.index]);
                t.length && (e ? (t.addClass(this.options.classHeadSort), this.sorted.reverse ? t.addClass(this.options.classHeadSortRev) : t.removeClass(this.options.classHeadSortRev)) : t.removeClass(this.options.classHeadSort).removeClass(this.options.classHeadSortRev))
            },
            setRowSort: function(e, t) {
                for (var n, i, r = e.length, s = this.body; r;) {
                    var a = e[--r],
                        o = a.position,
                        l = s.rows[o];
                    if (!l.disabled)
                        for (t || (n = this.setGroupSort(n, l, a), this.setRowStyle(l, r)), s.appendChild(l), i = 0; i < r; i++) e[i].position > o && e[i].position--
                }
            },
            setRowStyle: function(e, t) { this.previous(e, t), e.cells[this.sorted.index].addClass(this.options.classCellSort) },
            setGroupSort: function(e, t, n) { return e == n.value ? t.removeClass(this.options.classGroupHead).addClass(this.options.classGroup) : t.removeClass(this.options.classGroup).addClass(this.options.classGroupHead), n.value },
            getParser: function() { var e = this.parsers[this.sorted.index]; return "string" == typeOf(e) ? HtmlTable.Parsers[e] : e },
            sort: function(t, n, i, r) {
                if (this.head) {
                    i || (this.clearSort(), this.setSortedState(t, n), this.setHeadSort(!0));
                    var s = this.getParser();
                    if (s) {
                        var a;
                        e || (a = this.body.getParent(), this.body.dispose());
                        var o = this.parseData(s).sort(r || function(e, t) { return e.value === t.value ? 0 : e.value > t.value ? 1 : -1 }),
                            l = this.sorted.reverse == (s == HtmlTable.Parsers["input-checked"]);
                        return l && o.reverse(!0), this.setRowSort(o, i), a && a.grab(this.body), this.fireEvent("stateChanged"), this.fireEvent("sort", [this.body, this.sorted.index, l ? "asc" : "desc"])
                    }
                }
            },
            parseData: function(e) { return Array.map(this.body.rows, function(t, n) { return { position: n, value: e.convert.call(document.id(t.cells[this.sorted.index])) } }, this) },
            clearSort: function() { this.setHeadSort(!1), this.body.getElements("td").removeClass(this.options.classCellSort) },
            reSort: function() { return this.sortable && this.sort.call(this, this.sorted.index, this.sorted.reverse), this },
            enableSort: function() { return this.element.addClass(this.options.classSortable), this.attachSorts(!0), this.setParsers(), this.sortable = !0, this },
            disableSort: function() { return this.element.removeClass(this.options.classSortable), this.attachSorts(!1), this.sortSpans.each(function(e) { e.destroy() }), this.sortSpans.empty(), this.sortable = !1, this }
        }), HtmlTable.ParserPriority = ["date", "input-checked", "input-value", "float", "number"], HtmlTable.Parsers = { date: { match: /^\d{2}[-\/ ]\d{2}[-\/ ]\d{2,4}$/, convert: function() { var e = Date.parse(this.get("text").stripTags()); return "date" == typeOf(e) ? e.format("db") : "" }, type: "date" }, "input-checked": { match: / type="(radio|checkbox)"/, convert: function() { return this.getElement("input").checked } }, "input-value": { match: /<input/, convert: function() { return this.getElement("input").value } }, number: { match: /^\d+[^\d.,]*$/, convert: function() { return this.get("text").stripTags().toInt() }, number: !0 }, numberLax: { match: /^[^\d]+\d+$/, convert: function() { return this.get("text").replace(/[^-?^0-9]/, "").stripTags().toInt() }, number: !0 }, float: { match: /^[\d]+\.[\d]+/, convert: function() { return this.get("text").replace(/[^-?^\d.e]/, "").stripTags().toFloat() }, number: !0 }, floatLax: { match: /^[^\d]+[\d]+\.[\d]+$/, convert: function() { return this.get("text").replace(/[^-?^\d.]/, "").stripTags().toFloat() }, number: !0 }, string: { match: null, convert: function() { return this.get("text").stripTags().toLowerCase() } }, title: { match: null, convert: function() { return this.title } } }, HtmlTable.Parsers = new Hash(HtmlTable.Parsers), HtmlTable.defineParsers = function(e) { HtmlTable.Parsers = Object.append(HtmlTable.Parsers, e); for (var t in e) HtmlTable.ParserPriority.unshift(t) }
    }(), HtmlTable = Class.refactor(HtmlTable, {
        options: { classZebra: "table-tr-odd", zebra: !0, zebraOnlyVisibleRows: !0 },
        initialize: function() {
            if (this.previous.apply(this, arguments), this.occluded) return this.occluded;
            this.options.zebra && this.updateZebras()
        },
        updateZebras: function() {
            var e = 0;
            Array.each(this.body.rows, function(t) { this.options.zebraOnlyVisibleRows && !t.isDisplayed() || this.zebra(t, e++) }, this)
        },
        setRowStyle: function(e, t) { this.previous && this.previous(e, t), this.zebra(e, t) },
        zebra: function(e, t) { return e[(t % 2 ? "remove" : "add") + "Class"](this.options.classZebra) },
        push: function() { var e = this.previous.apply(this, arguments); return this.options.zebra && this.updateZebras(), e }
    }),
    function() {
        this.Scroller = new Class({
            Implements: [Events, Options],
            options: { area: 20, velocity: 1, onChange: function(e, t) { this.element.scrollTo(e, t) }, fps: 50 },
            initialize: function(e, t) { this.setOptions(t), this.element = document.id(e), this.docBody = document.id(this.element.getDocument().body), this.listener = "element" != typeOf(this.element) ? this.docBody : this.element, this.timer = null, this.bound = { attach: this.attach.bind(this), detach: this.detach.bind(this), getCoords: this.getCoords.bind(this) } },
            start: function() { return this.listener.addEvents({ mouseover: this.bound.attach, mouseleave: this.bound.detach }), this },
            stop: function() { return this.listener.removeEvents({ mouseover: this.bound.attach, mouseleave: this.bound.detach }), this.detach(), this.timer = clearInterval(this.timer), this },
            attach: function() { this.listener.addEvent("mousemove", this.bound.getCoords) },
            detach: function() { this.listener.removeEvent("mousemove", this.bound.getCoords), this.timer = clearInterval(this.timer) },
            getCoords: function(e) { this.page = "body" == this.listener.get("tag") ? e.client : e.page, this.timer || (this.timer = this.scroll.periodical(Math.round(1e3 / this.options.fps), this)) },
            scroll: function() {
                var e = this.element.getSize(),
                    t = this.element.getScroll(),
                    n = this.element != this.docBody && this.element != window ? this.element.getOffsets() : { x: 0, y: 0 },
                    i = this.element.getScrollSize(),
                    r = { x: 0, y: 0 },
                    s = this.options.area.top || this.options.area,
                    a = this.options.area.bottom || this.options.area;
                for (var o in this.page) this.page[o] < s + n[o] && 0 != t[o] ? r[o] = (this.page[o] - s - n[o]) * this.options.velocity : this.page[o] + a > e[o] + n[o] && t[o] + e[o] != i[o] && (r[o] = (this.page[o] - e[o] + a - n[o]) * this.options.velocity), r[o] = r[o].round();
                (r.y || r.x) && this.fireEvent("change", [t.x + r.x, t.y + r.y])
            }
        })
    }(),
    function() {
        var e = function(e, t) { return e ? "function" == typeOf(e) ? e(t) : t.get(e) : "" };
        this.Tips = new Class({
            Implements: [Events, Options],
            options: { onShow: function() { this.tip.setStyle("display", "block") }, onHide: function() { this.tip.setStyle("display", "none") }, title: "title", text: function(e) { return e.get("rel") || e.get("href") }, showDelay: 100, hideDelay: 100, className: "tip-wrap", offset: { x: 16, y: 16 }, windowPadding: { x: 0, y: 0 }, fixed: !1, waiAria: !0, hideEmpty: !1 },
            initialize: function() {
                var e = Array.link(arguments, { options: Type.isObject, elements: function(e) { return null != e } });
                this.setOptions(e.options), e.elements && this.attach(e.elements), this.container = new Element("div", { class: "tip" }), this.options.id && (this.container.set("id", this.options.id), this.options.waiAria && this.attachWaiAria())
            },
            toElement: function() { return this.tip ? this.tip : (this.tip = new Element("div", { class: this.options.className, styles: { position: "absolute", top: 0, left: 0, display: "none" } }).adopt(new Element("div", { class: "tip-top" }), this.container, new Element("div", { class: "tip-bottom" })), this.tip) },
            attachWaiAria: function() {
                var e = this.options.id;
                this.container.set("role", "tooltip"), this.waiAria || (this.waiAria = { show: function(t) { e && t.set("aria-describedby", e), this.container.set("aria-hidden", "false") }, hide: function(t) { e && t.erase("aria-describedby"), this.container.set("aria-hidden", "true") } }), this.addEvents(this.waiAria)
            },
            detachWaiAria: function() { this.waiAria && (this.container.erase("role"), this.container.erase("aria-hidden"), this.removeEvents(this.waiAria)) },
            attach: function(t) {
                return $$(t).each(function(t) {
                    var n = e(this.options.title, t),
                        i = e(this.options.text, t);
                    t.set("title", "").store("tip:native", n).retrieve("tip:title", n), t.retrieve("tip:text", i), this.fireEvent("attach", [t]);
                    var r = ["enter", "leave"];
                    this.options.fixed || r.push("move"), r.each(function(e) {
                        var n = t.retrieve("tip:" + e);
                        n || (n = function(n) { this["element" + e.capitalize()].apply(this, [n, t]) }.bind(this)), t.store("tip:" + e, n).addEvent("mouse" + e, n)
                    }, this)
                }, this), this
            },
            detach: function(e) {
                return $$(e).each(function(e) {
                    if (["enter", "leave", "move"].each(function(t) { e.removeEvent("mouse" + t, e.retrieve("tip:" + t)).eliminate("tip:" + t) }), this.fireEvent("detach", [e]), "title" == this.options.title) {
                        var t = e.retrieve("tip:native");
                        t && e.set("title", t)
                    }
                }, this), this
            },
            elementEnter: function(e, t) {
                clearTimeout(this.timer), this.timer = function() {
                    this.container.empty();
                    var n = !this.options.hideEmpty;
                    ["title", "text"].each(function(e) {
                        var i = t.retrieve("tip:" + e),
                            r = this["_" + e + "Element"] = new Element("div", { class: "tip-" + e }).inject(this.container);
                        i && (this.fill(r, i), n = !0)
                    }, this), n ? this.show(t) : this.hide(t), this.position(this.options.fixed ? { page: t.getPosition() } : e)
                }.delay(this.options.showDelay, this)
            },
            elementLeave: function(e, t) { clearTimeout(this.timer), this.timer = this.hide.delay(this.options.hideDelay, this, t), this.fireForParent(e, t) },
            setTitle: function(e) { return this._titleElement && (this._titleElement.empty(), this.fill(this._titleElement, e)), this },
            setText: function(e) { return this._textElement && (this._textElement.empty(), this.fill(this._textElement, e)), this },
            fireForParent: function(e, t) {
                (t = t.getParent()) && t != document.body && (t.retrieve("tip:enter") ? t.fireEvent("mouseenter", e) : this.fireForParent(e, t))
            },
            elementMove: function(e, t) { this.position(e) },
            position: function(e) {
                this.tip || document.id(this);
                var t = window.getSize(),
                    n = window.getScroll(),
                    i = { x: this.tip.offsetWidth, y: this.tip.offsetHeight },
                    r = { x: "left", y: "top" },
                    s = { y: !1, x2: !1, y2: !1, x: !1 },
                    a = {};
                for (var o in r) a[r[o]] = e.page[o] + this.options.offset[o], a[r[o]] < 0 && (s[o] = !0), a[r[o]] + i[o] - n[o] > t[o] - this.options.windowPadding[o] && (a[r[o]] = e.page[o] - this.options.offset[o] - i[o], s[o + "2"] = !0);
                this.fireEvent("bound", s), this.tip.setStyles(a)
            },
            fill: function(e, t) { "string" == typeof t ? e.set("html", t) : e.adopt(t) },
            show: function(e) { this.tip || document.id(this), this.tip.getParent() || this.tip.inject(document.body), this.fireEvent("show", [this.tip, e]) },
            hide: function(e) { this.tip || document.id(this), this.fireEvent("hide", [this.tip, e]) }
        })
    }(), Locale.define("CH", "Number", { decimal: ",", group: "'", currency: { decimal: ".", suffix: " CHF" } }), Locale.define("EU", "Number", { decimal: ",", group: ".", currency: { prefix: "€ " } }),
    function() {
        var e = { json: JSON.decode };
        Locale.Set.defineParser = function(t, n) { e[t] = n }, Locale.Set.from = function(t, n) {
            if (instanceOf(t, Locale.Set)) return t;
            n || "string" != typeOf(t) || (n = "json"), e[n] && (t = e[n](t));
            var i = new Locale.Set;
            return i.sets = t.sets || {}, t.inherits && (i.inherits.locales = Array.convert(t.inherits.locales), i.inherits.sets = t.inherits.sets || {}), i
        }
    }(), Locale.define("ZA", "Number", { decimal: ".", group: ",", currency: { prefix: "R " } }), Locale.define("af-ZA", "Date", {
        months: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
        months_abbr: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
        days: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
        days_abbr: ["Son", "Maa", "Din", "Woe", "Don", "Vry", "Sat"],
        dateOrder: ["date", "month", "year"],
        shortDate: "%d-%m-%Y",
        shortTime: "%H:%M",
        AM: "VM",
        PM: "NM",
        firstDayOfWeek: 1,
        ordinal: function(e) { return e > 1 && e < 20 && 8 != e || e > 100 && "1" == e.toString().substr(-2, 1) ? "de" : "ste" },
        lessThanMinuteAgo: "minder as 'n minuut gelede",
        minuteAgo: "ongeveer 'n minuut gelede",
        minutesAgo: "{delta} minute gelede",
        hourAgo: "omtret 'n uur gelede",
        hoursAgo: "ongeveer {delta} ure gelede",
        dayAgo: "1 dag gelede",
        daysAgo: "{delta} dae gelede",
        weekAgo: "1 week gelede",
        weeksAgo: "{delta} weke gelede",
        monthAgo: "1 maand gelede",
        monthsAgo: "{delta} maande gelede",
        yearAgo: "1 jaar gelede",
        yearsAgo: "{delta} jare gelede",
        lessThanMinuteUntil: "oor minder as 'n minuut",
        minuteUntil: "oor ongeveer 'n minuut",
        minutesUntil: "oor {delta} minute",
        hourUntil: "oor ongeveer 'n uur",
        hoursUntil: "oor {delta} uur",
        dayUntil: "oor ongeveer 'n dag",
        daysUntil: "oor {delta} dae",
        weekUntil: "oor 'n week",
        weeksUntil: "oor {delta} weke",
        monthUntil: "oor 'n maand",
        monthsUntil: "oor {delta} maande",
        yearUntil: "oor 'n jaar",
        yearsUntil: "oor {delta} jaar"
    }), Locale.define("af-ZA", "FormValidator", { required: "Hierdie veld word vereis.", length: "Voer asseblief {length} karakters in (u het {elLength} karakters ingevoer)", minLength: "Voer asseblief ten minste {minLength} karakters in (u het {length} karakters ingevoer).", maxLength: "Moet asseblief nie meer as {maxLength} karakters invoer nie (u het {length} karakters ingevoer).", integer: "Voer asseblief 'n heelgetal in hierdie veld in. Getalle met desimale (bv. 1.25) word nie toegelaat nie.", numeric: 'Voer asseblief slegs numeriese waardes in hierdie veld in (bv. "1" of "1.1" of "-1" of "-1.1").', digits: "Gebruik asseblief slegs nommers en punktuasie in hierdie veld. (by voorbeeld, 'n telefoon nommer wat koppeltekens en punte bevat is toelaatbaar).", alpha: "Gebruik asseblief slegs letters (a-z) binne-in hierdie veld. Geen spasies of ander karakters word toegelaat nie.", alphanum: "Gebruik asseblief slegs letters (a-z) en nommers (0-9) binne-in hierdie veld. Geen spasies of ander karakters word toegelaat nie.", dateSuchAs: "Voer asseblief 'n geldige datum soos {date} in", dateInFormatMDY: 'Voer asseblief \'n geldige datum soos MM/DD/YYYY in (bv. "12/31/1999")', email: 'Voer asseblief \'n geldige e-pos adres in. Byvoorbeeld "fred@domain.com".', url: "Voer asseblief 'n geldige bronadres (URL) soos http://www.example.com in.", currencyDollar: "Voer asseblief 'n geldige $ bedrag in. Byvoorbeeld $100.00 .", oneRequired: "Voer asseblief iets in vir ten minste een van hierdie velde.", errorPrefix: "Fout: ", warningPrefix: "Waarskuwing: ", noSpace: "Daar mag geen spasies in hierdie toevoer wees nie.", reqChkByNode: "Geen items is gekies nie.", requiredChk: "Hierdie veld word vereis.", reqChkByName: "Kies asseblief 'n {label}.", match: "Hierdie veld moet by die {matchName} veld pas", startDate: "die begin datum", endDate: "die eind datum", currentDate: "die huidige datum", afterDate: "Die datum moet dieselfde of na {label} wees.", beforeDate: "Die datum moet dieselfde of voor {label} wees.", startMonth: "Kies asseblief 'n begin maand", sameMonth: "Hierdie twee datums moet in dieselfde maand wees - u moet een of beide verander.", creditcard: "Die ingevoerde kredietkaart nommer is ongeldig. Bevestig asseblief die nommer en probeer weer. {length} syfers is ingevoer." }), Locale.define("af-ZA").inherit("ZA", "Number"), Locale.define("ar", "Date", { dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H:%M" }), Locale.define("ar", "FormValidator", { required: "هذا الحقل مطلوب.", minLength: "رجاءً إدخال {minLength} أحرف على الأقل (تم إدخال {length} أحرف).", maxLength: "الرجاء عدم إدخال أكثر من {maxLength} أحرف (تم إدخال {length} أحرف).", integer: "الرجاء إدخال عدد صحيح في هذا الحقل. أي رقم ذو كسر عشري أو مئوي (مثال 1.25 ) غير مسموح.", numeric: 'الرجاء إدخال قيم رقمية في هذا الحقل (مثال "1" أو "1.1" أو "-1" أو "-1.1").', digits: "الرجاء أستخدام قيم رقمية وعلامات ترقيمية فقط في هذا الحقل (مثال, رقم هاتف مع نقطة أو شحطة)", alpha: "الرجاء أستخدام أحرف فقط (ا-ي) في هذا الحقل. أي فراغات أو علامات غير مسموحة.", alphanum: "الرجاء أستخدام أحرف فقط (ا-ي) أو أرقام (0-9) فقط في هذا الحقل. أي فراغات أو علامات غير مسموحة.", dateSuchAs: "الرجاء إدخال تاريخ صحيح كالتالي {date}", dateInFormatMDY: "الرجاء إدخال تاريخ صحيح (مثال, 31-12-1999)", email: "الرجاء إدخال بريد إلكتروني صحيح.", url: "الرجاء إدخال عنوان إلكتروني صحيح مثل http://www.example.com", currencyDollar: "الرجاء إدخال قيمة $ صحيحة. مثال, 100.00$", oneRequired: "الرجاء إدخال قيمة في أحد هذه الحقول على الأقل.", errorPrefix: "خطأ: ", warningPrefix: "تحذير: " }), Locale.define("ca-CA", "Date", { months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juli", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"], months_abbr: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."], days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"], days_abbr: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 0, ordinal: "", lessThanMinuteAgo: "fa menys d`un minut", minuteAgo: "fa un minut", minutesAgo: "fa {delta} minuts", hourAgo: "fa un hora", hoursAgo: "fa unes {delta} hores", dayAgo: "fa un dia", daysAgo: "fa {delta} dies", lessThanMinuteUntil: "menys d`un minut des d`ara", minuteUntil: "un minut des d`ara", minutesUntil: "{delta} minuts des d`ara", hourUntil: "un hora des d`ara", hoursUntil: "unes {delta} hores des d`ara", dayUntil: "1 dia des d`ara", daysUntil: "{delta} dies des d`ara" }), Locale.define("ca-CA", "FormValidator", { required: "Aquest camp es obligatori.", minLength: "Per favor introdueix al menys {minLength} caracters (has introduit {length} caracters).", maxLength: "Per favor introdueix no mes de {maxLength} caracters (has introduit {length} caracters).", integer: "Per favor introdueix un nombre enter en aquest camp. Nombres amb decimals (p.e. 1,25) no estan permesos.", numeric: 'Per favor introdueix sols valors numerics en aquest camp (p.e. "1" o "1,1" o "-1" o "-1,1").', digits: "Per favor usa sols numeros i puntuacio en aquest camp (per exemple, un nombre de telefon amb guions i punts no esta permes).", alpha: "Per favor utilitza lletres nomes (a-z) en aquest camp. No s´admiteixen espais ni altres caracters.", alphanum: "Per favor, utilitza nomes lletres (a-z) o numeros (0-9) en aquest camp. No s´admiteixen espais ni altres caracters.", dateSuchAs: "Per favor introdueix una data valida com {date}", dateInFormatMDY: 'Per favor introdueix una data valida com DD/MM/YYYY (p.e. "31/12/1999")', email: 'Per favor, introdueix una adreça de correu electronic valida. Per exemple, "fred@domain.com".', url: "Per favor introdueix una URL valida com http://www.example.com.", currencyDollar: "Per favor introdueix una quantitat valida de €. Per exemple €100,00 .", oneRequired: "Per favor introdueix alguna cosa per al menys una d´aquestes entrades.", errorPrefix: "Error: ", warningPrefix: "Avis: ", noSpace: "No poden haver espais en aquesta entrada.", reqChkByNode: "No hi han elements seleccionats.", requiredChk: "Aquest camp es obligatori.", reqChkByName: "Per favor selecciona una {label}.", match: "Aquest camp necessita coincidir amb el camp {matchName}", startDate: "la data de inici", endDate: "la data de fi", currentDate: "la data actual", afterDate: "La data deu ser igual o posterior a {label}.", beforeDate: "La data deu ser igual o anterior a {label}.", startMonth: "Per favor selecciona un mes d´orige", sameMonth: "Aquestes dos dates deuen estar dins del mateix mes - deus canviar una o altra." }),
    function() {
        var e = function(e, t, n, i) { return 1 == e ? t : 2 == e || 3 == e || 4 == e ? n : i };
        Locale.define("cs-CZ", "Date", { months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], months_abbr: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"], days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"], days_abbr: ["ne", "po", "út", "st", "čt", "pá", "so"], dateOrder: ["date", "month", "year"], shortDate: "%d.%m.%Y", shortTime: "%H:%M", AM: "dop.", PM: "odp.", firstDayOfWeek: 1, ordinal: ".", lessThanMinuteAgo: "před chvílí", minuteAgo: "přibližně před minutou", minutesAgo: function(t) { return "před {delta} " + e(t, "minutou", "minutami", "minutami") }, hourAgo: "přibližně před hodinou", hoursAgo: function(t) { return "před {delta} " + e(t, "hodinou", "hodinami", "hodinami") }, dayAgo: "před dnem", daysAgo: function(t) { return "před {delta} " + e(t, "dnem", "dny", "dny") }, weekAgo: "před týdnem", weeksAgo: function(t) { return "před {delta} " + e(t, "týdnem", "týdny", "týdny") }, monthAgo: "před měsícem", monthsAgo: function(t) { return "před {delta} " + e(t, "měsícem", "měsíci", "měsíci") }, yearAgo: "před rokem", yearsAgo: function(t) { return "před {delta} " + e(t, "rokem", "lety", "lety") }, lessThanMinuteUntil: "za chvíli", minuteUntil: "přibližně za minutu", minutesUntil: function(t) { return "za {delta} " + e(t, "minutu", "minuty", "minut") }, hourUntil: "přibližně za hodinu", hoursUntil: function(t) { return "za {delta} " + e(t, "hodinu", "hodiny", "hodin") }, dayUntil: "za den", daysUntil: function(t) { return "za {delta} " + e(t, "den", "dny", "dnů") }, weekUntil: "za týden", weeksUntil: function(t) { return "za {delta} " + e(t, "týden", "týdny", "týdnů") }, monthUntil: "za měsíc", monthsUntil: function(t) { return "za {delta} " + e(t, "měsíc", "měsíce", "měsíců") }, yearUntil: "za rok", yearsUntil: function(t) { return "za {delta} " + e(t, "rok", "roky", "let") } })
    }(), Locale.define("cs-CZ", "FormValidator", { required: "Tato položka je povinná.", minLength: "Zadejte prosím alespoň {minLength} znaků (napsáno {length} znaků).", maxLength: "Zadejte prosím méně než {maxLength} znaků (nápsáno {length} znaků).", integer: "Zadejte prosím celé číslo. Desetinná čísla (např. 1.25) nejsou povolena.", numeric: 'Zadejte jen číselné hodnoty (tj. "1" nebo "1.1" nebo "-1" nebo "-1.1").', digits: "Zadejte prosím pouze čísla a interpunkční znaménka(například telefonní číslo s pomlčkami nebo tečkami je povoleno).", alpha: "Zadejte prosím pouze písmena (a-z). Mezery nebo jiné znaky nejsou povoleny.", alphanum: "Zadejte prosím pouze písmena (a-z) nebo číslice (0-9). Mezery nebo jiné znaky nejsou povoleny.", dateSuchAs: "Zadejte prosím platné datum jako {date}", dateInFormatMDY: 'Zadejte prosím platné datum jako MM / DD / RRRR (tj. "12/31/1999")', email: 'Zadejte prosím platnou e-mailovou adresu. Například "fred@domain.com".', url: "Zadejte prosím platnou URL adresu jako http://www.example.com.", currencyDollar: "Zadejte prosím platnou částku. Například $100.00.", oneRequired: "Zadejte prosím alespoň jednu hodnotu pro tyto položky.", errorPrefix: "Chyba: ", warningPrefix: "Upozornění: ", noSpace: "V této položce nejsou povoleny mezery", reqChkByNode: "Nejsou vybrány žádné položky.", requiredChk: "Tato položka je vyžadována.", reqChkByName: "Prosím vyberte {label}.", match: "Tato položka se musí shodovat s položkou {matchName}", startDate: "datum zahájení", endDate: "datum ukončení", currentDate: "aktuální datum", afterDate: "Datum by mělo být stejné nebo větší než {label}.", beforeDate: "Datum by mělo být stejné nebo menší než {label}.", startMonth: "Vyberte počáteční měsíc.", sameMonth: "Tyto dva datumy musí být ve stejném měsíci - změňte jeden z nich.", creditcard: "Zadané číslo kreditní karty je neplatné. Prosím opravte ho. Bylo zadáno {length} čísel." }), Locale.define("da-DK", "Date", { months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], months_abbr: ["jan.", "feb.", "mar.", "apr.", "maj.", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], days_abbr: ["søn", "man", "tir", "ons", "tor", "fre", "lør"], dateOrder: ["date", "month", "year"], shortDate: "%d-%m-%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: ".", lessThanMinuteAgo: "mindre end et minut siden", minuteAgo: "omkring et minut siden", minutesAgo: "{delta} minutter siden", hourAgo: "omkring en time siden", hoursAgo: "omkring {delta} timer siden", dayAgo: "1 dag siden", daysAgo: "{delta} dage siden", weekAgo: "1 uge siden", weeksAgo: "{delta} uger siden", monthAgo: "1 måned siden", monthsAgo: "{delta} måneder siden", yearAgo: "1 år siden", yearsAgo: "{delta} år siden", lessThanMinuteUntil: "mindre end et minut fra nu", minuteUntil: "omkring et minut fra nu", minutesUntil: "{delta} minutter fra nu", hourUntil: "omkring en time fra nu", hoursUntil: "omkring {delta} timer fra nu", dayUntil: "1 dag fra nu", daysUntil: "{delta} dage fra nu", weekUntil: "1 uge fra nu", weeksUntil: "{delta} uger fra nu", monthUntil: "1 måned fra nu", monthsUntil: "{delta} måneder fra nu", yearUntil: "1 år fra nu", yearsUntil: "{delta} år fra nu" }), Locale.define("da-DK", "FormValidator", { required: "Feltet skal udfyldes.", minLength: "Skriv mindst {minLength} tegn (du skrev {length} tegn).", maxLength: "Skriv maksimalt {maxLength} tegn (du skrev {length} tegn).", integer: "Skriv et tal i dette felt. Decimal tal (f.eks. 1.25) er ikke tilladt.", numeric: 'Skriv kun tal i dette felt (i.e. "1" eller "1.1" eller "-1" eller "-1.1").', digits: "Skriv kun tal og tegnsætning i dette felt (eksempel, et telefon nummer med bindestreg eller punktum er tilladt).", alpha: "Skriv kun bogstaver (a-z) i dette felt. Mellemrum og andre tegn er ikke tilladt.", alphanum: "Skriv kun bogstaver (a-z) eller tal (0-9) i dette felt. Mellemrum og andre tegn er ikke tilladt.", dateSuchAs: "Skriv en gyldig dato som {date}", dateInFormatMDY: 'Skriv dato i formatet DD-MM-YYYY (f.eks. "31-12-1999")', email: 'Skriv en gyldig e-mail adresse. F.eks "fred@domain.com".', url: 'Skriv en gyldig URL adresse. F.eks "http://www.example.com".', currencyDollar: "Skriv et gldigt beløb. F.eks Kr.100.00 .", oneRequired: "Et eller flere af felterne i denne formular skal udfyldes.", errorPrefix: "Fejl: ", warningPrefix: "Advarsel: ", noSpace: "Der må ikke benyttes mellemrum i dette felt.", reqChkByNode: "Foretag et valg.", requiredChk: "Dette felt skal udfyldes.", reqChkByName: "Vælg en {label}.", match: "Dette felt skal matche {matchName} feltet", startDate: "start dato", endDate: "slut dato", currentDate: "dags dato", afterDate: "Datoen skal være større end eller lig med {label}.", beforeDate: "Datoen skal være mindre end eller lig med {label}.", startMonth: "Vælg en start måned", sameMonth: "De valgte datoer skal være i samme måned - skift en af dem." }), Locale.define("de-DE", "Date", { months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"], months_abbr: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], days_abbr: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], dateOrder: ["date", "month", "year"], shortDate: "%d.%m.%Y", shortTime: "%H:%M", AM: "vormittags", PM: "nachmittags", firstDayOfWeek: 1, ordinal: ".", lessThanMinuteAgo: "vor weniger als einer Minute", minuteAgo: "vor einer Minute", minutesAgo: "vor {delta} Minuten", hourAgo: "vor einer Stunde", hoursAgo: "vor {delta} Stunden", dayAgo: "vor einem Tag", daysAgo: "vor {delta} Tagen", weekAgo: "vor einer Woche", weeksAgo: "vor {delta} Wochen", monthAgo: "vor einem Monat", monthsAgo: "vor {delta} Monaten", yearAgo: "vor einem Jahr", yearsAgo: "vor {delta} Jahren", lessThanMinuteUntil: "in weniger als einer Minute", minuteUntil: "in einer Minute", minutesUntil: "in {delta} Minuten", hourUntil: "in ca. einer Stunde", hoursUntil: "in ca. {delta} Stunden", dayUntil: "in einem Tag", daysUntil: "in {delta} Tagen", weekUntil: "in einer Woche", weeksUntil: "in {delta} Wochen", monthUntil: "in einem Monat", monthsUntil: "in {delta} Monaten", yearUntil: "in einem Jahr", yearsUntil: "in {delta} Jahren" }), Locale.define("de-CH").inherit("de-DE", "Date"), Locale.define("de-CH", "FormValidator", { required: "Dieses Feld ist obligatorisch.", minLength: "Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).", maxLength: "Bitte geben Sie nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).", integer: "Geben Sie bitte eine ganze Zahl ein. Dezimalzahlen (z.B. 1.25) sind nicht erlaubt.", numeric: "Geben Sie bitte nur Zahlenwerte in dieses Eingabefeld ein (z.B. &quot;1&quot;, &quot;1.1&quot;, &quot;-1&quot; oder &quot;-1.1&quot;).", digits: "Benutzen Sie bitte nur Zahlen und Satzzeichen in diesem Eingabefeld (erlaubt ist z.B. eine Telefonnummer mit Bindestrichen und Punkten).", alpha: "Benutzen Sie bitte nur Buchstaben (a-z) in diesem Feld. Leerzeichen und andere Zeichen sind nicht erlaubt.", alphanum: "Benutzen Sie bitte nur Buchstaben (a-z) und Zahlen (0-9) in diesem Eingabefeld. Leerzeichen und andere Zeichen sind nicht erlaubt.", dateSuchAs: "Geben Sie bitte ein g&uuml;ltiges Datum ein. Wie zum Beispiel {date}", dateInFormatMDY: "Geben Sie bitte ein g&uuml;ltiges Datum ein. Wie zum Beispiel TT.MM.JJJJ (z.B. &quot;31.12.1999&quot;)", email: "Geben Sie bitte eine g&uuml;ltige E-Mail Adresse ein. Wie zum Beispiel &quot;maria@bernasconi.ch&quot;.", url: "Geben Sie bitte eine g&uuml;ltige URL ein. Wie zum Beispiel http://www.example.com.", currencyDollar: "Geben Sie bitte einen g&uuml;ltigen Betrag in Schweizer Franken ein. Wie zum Beispiel 100.00 CHF .", oneRequired: "Machen Sie f&uuml;r mindestens eines der Eingabefelder einen Eintrag.", errorPrefix: "Fehler: ", warningPrefix: "Warnung: ", noSpace: "In diesem Eingabefeld darf kein Leerzeichen sein.", reqChkByNode: "Es wurden keine Elemente gew&auml;hlt.", requiredChk: "Dieses Feld ist obligatorisch.", reqChkByName: "Bitte w&auml;hlen Sie ein {label}.", match: "Dieses Eingabefeld muss mit dem Feld {matchName} &uuml;bereinstimmen.", startDate: "Das Anfangsdatum", endDate: "Das Enddatum", currentDate: "Das aktuelle Datum", afterDate: "Das Datum sollte zur gleichen Zeit oder sp&auml;ter sein {label}.", beforeDate: "Das Datum sollte zur gleichen Zeit oder fr&uuml;her sein {label}.", startMonth: "W&auml;hlen Sie bitte einen Anfangsmonat", sameMonth: "Diese zwei Datumsangaben m&uuml;ssen im selben Monat sein - Sie m&uuml;ssen eine von beiden ver&auml;ndern.", creditcard: "Die eingegebene Kreditkartennummer ist ung&uuml;ltig. Bitte &uuml;berpr&uuml;fen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben." }), Locale.define("de-CH").inherit("CH", "Number"), Locale.define("de-DE", "FormValidator", { required: "Dieses Eingabefeld muss ausgefüllt werden.", minLength: "Geben Sie bitte mindestens {minLength} Zeichen ein (Sie haben nur {length} Zeichen eingegeben).", maxLength: "Geben Sie bitte nicht mehr als {maxLength} Zeichen ein (Sie haben {length} Zeichen eingegeben).", integer: 'Geben Sie in diesem Eingabefeld bitte eine ganze Zahl ein. Dezimalzahlen (z.B. "1.25") sind nicht erlaubt.', numeric: 'Geben Sie in diesem Eingabefeld bitte nur Zahlenwerte (z.B. "1", "1.1", "-1" oder "-1.1") ein.', digits: "Geben Sie in diesem Eingabefeld bitte nur Zahlen und Satzzeichen ein (z.B. eine Telefonnummer mit Bindestrichen und Punkten ist erlaubt).", alpha: "Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) ein. Leerzeichen und andere Zeichen sind nicht erlaubt.", alphanum: "Geben Sie in diesem Eingabefeld bitte nur Buchstaben (a-z) und Zahlen (0-9) ein. Leerzeichen oder andere Zeichen sind nicht erlaubt.", dateSuchAs: 'Geben Sie bitte ein gültiges Datum ein (z.B. "{date}").', dateInFormatMDY: 'Geben Sie bitte ein gültiges Datum im Format TT.MM.JJJJ ein (z.B. "31.12.1999").', email: 'Geben Sie bitte eine gültige E-Mail-Adresse ein (z.B. "max@mustermann.de").', url: 'Geben Sie bitte eine gültige URL ein (z.B. "http://www.example.com").', currencyDollar: "Geben Sie bitte einen gültigen Betrag in EURO ein (z.B. 100.00€).", oneRequired: "Bitte füllen Sie mindestens ein Eingabefeld aus.", errorPrefix: "Fehler: ", warningPrefix: "Warnung: ", noSpace: "Es darf kein Leerzeichen in diesem Eingabefeld sein.", reqChkByNode: "Es wurden keine Elemente gewählt.", requiredChk: "Dieses Feld muss ausgefüllt werden.", reqChkByName: "Bitte wählen Sie ein {label}.", match: "Dieses Eingabefeld muss mit dem {matchName} Eingabefeld übereinstimmen.", startDate: "Das Anfangsdatum", endDate: "Das Enddatum", currentDate: "Das aktuelle Datum", afterDate: "Das Datum sollte zur gleichen Zeit oder später sein als {label}.", beforeDate: "Das Datum sollte zur gleichen Zeit oder früher sein als {label}.", startMonth: "Wählen Sie bitte einen Anfangsmonat", sameMonth: "Diese zwei Datumsangaben müssen im selben Monat sein - Sie müssen eines von beiden verändern.", creditcard: "Die eingegebene Kreditkartennummer ist ungültig. Bitte überprüfen Sie diese und versuchen Sie es erneut. {length} Zahlen eingegeben." }), Locale.define("de-DE").inherit("EU", "Number"), Locale.define("el-GR", "Date", { months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], months_abbr: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μάι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"], days: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"], days_abbr: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%I:%M%p", AM: "πμ", PM: "μμ", firstDayOfWeek: 1, ordinal: function(e) { return e > 3 && e < 21 ? "ος" : ["ος"][Math.min(e % 10, 4)] }, lessThanMinuteAgo: "λιγότερο από ένα λεπτό πριν", minuteAgo: "περίπου ένα λεπτό πριν", minutesAgo: "{delta} λεπτά πριν", hourAgo: "περίπου μια ώρα πριν", hoursAgo: "περίπου {delta} ώρες πριν", dayAgo: "1 ημέρα πριν", daysAgo: "{delta} ημέρες πριν", weekAgo: "1 εβδομάδα πριν", weeksAgo: "{delta} εβδομάδες πριν", monthAgo: "1 μήνα πριν", monthsAgo: "{delta} μήνες πριν", yearAgo: "1 χρόνο πριν", yearsAgo: "{delta} χρόνια πριν", lessThanMinuteUntil: "λιγότερο από λεπτό από τώρα", minuteUntil: "περίπου ένα λεπτό από τώρα", minutesUntil: "{delta} λεπτά από τώρα", hourUntil: "περίπου μια ώρα από τώρα", hoursUntil: "περίπου {delta} ώρες από τώρα", dayUntil: "1 ημέρα από τώρα", daysUntil: "{delta} ημέρες από τώρα", weekUntil: "1 εβδομάδα από τώρα", weeksUntil: "{delta} εβδομάδες από τώρα", monthUntil: "1 μήνας από τώρα", monthsUntil: "{delta} μήνες από τώρα", yearUntil: "1 χρόνος από τώρα", yearsUntil: "{delta} χρόνια από τώρα" }), Locale.define("el-GR", "FormValidator", { required: "Αυτό το πεδίο είναι απαραίτητο.", length: "Παρακαλούμε, εισάγετε {length} χαρακτήρες (έχετε ήδη εισάγει {elLength} χαρακτήρες).", minLength: "Παρακαλούμε, εισάγετε τουλάχιστον {minLength} χαρακτήρες (έχετε ήδη εισάγε {length} χαρακτήρες).", maxlength: "Παρακαλούμε, εισάγετε εώς {maxlength} χαρακτήρες (έχετε ήδη εισάγε {length} χαρακτήρες).", integer: "Παρακαλούμε, εισάγετε έναν ακέραιο αριθμό σε αυτό το πεδίο. Οι αριθμοί με δεκαδικά ψηφία (π.χ. 1.25) δεν επιτρέπονται.", numeric: 'Παρακαλούμε, εισάγετε μόνο αριθμητικές τιμές σε αυτό το πεδίο (π.χ." 1 " ή " 1.1 " ή " -1 " ή " -1.1 " ).', digits: "Παρακαλούμε, χρησιμοποιήστε μόνο αριθμούς και σημεία στίξης σε αυτόν τον τομέα (π.χ. επιτρέπεται αριθμός τηλεφώνου με παύλες ή τελείες).", alpha: "Παρακαλούμε, χρησιμοποιήστε μόνο γράμματα (a-z) σε αυτό το πεδίο. Δεν επιτρέπονται κενά ή άλλοι χαρακτήρες.", alphanum: "Παρακαλούμε, χρησιμοποιήστε μόνο γράμματα (a-z) ή αριθμούς (0-9) σε αυτόν τον τομέα. Δεν επιτρέπονται κενά ή άλλοι χαρακτήρες.", dateSuchAs: "Παρακαλούμε, εισάγετε μια έγκυρη ημερομηνία, όπως {date}", dateInFormatMDY: 'Παρακαλώ εισάγετε μια έγκυρη ημερομηνία, όπως ΜΜ/ΗΗ/ΕΕΕΕ (π.χ. "12/31/1999").', email: 'Παρακαλούμε, εισάγετε μια έγκυρη διεύθυνση ηλεκτρονικού ταχυδρομείου (π.χ. "fred@domain.com").', url: "Παρακαλούμε, εισάγετε μια έγκυρη URL διεύθυνση, όπως http://www.example.com", currencyDollar: "Παρακαλούμε, εισάγετε ένα έγκυρο ποσό σε δολλάρια (π.χ. $100.00).", oneRequired: "Παρακαλούμε, εισάγετε κάτι για τουλάχιστον ένα από αυτά τα πεδία.", errorPrefix: "Σφάλμα: ", warningPrefix: "Προσοχή: ", noSpace: "Δεν επιτρέπονται τα κενά σε αυτό το πεδίο.", reqChkByNode: "Δεν έχει επιλεγεί κάποιο αντικείμενο", requiredChk: "Αυτό το πεδίο είναι απαραίτητο.", reqChkByName: "Παρακαλούμε, επιλέξτε μια ετικέτα {label}.", match: "Αυτό το πεδίο πρέπει να ταιριάζει με το πεδίο {matchName}.", startDate: "η ημερομηνία έναρξης", endDate: "η ημερομηνία λήξης", currentDate: "η τρέχουσα ημερομηνία", afterDate: "Η ημερομηνία πρέπει να είναι η ίδια ή μετά από την {label}.", beforeDate: "Η ημερομηνία πρέπει να είναι η ίδια ή πριν από την {label}.", startMonth: "Παρακαλώ επιλέξτε ένα μήνα αρχής.", sameMonth: "Αυτές οι δύο ημερομηνίες πρέπει να έχουν τον ίδιο μήνα - θα πρέπει να αλλάξετε ή το ένα ή το άλλο", creditcard: "Ο αριθμός της πιστωτικής κάρτας δεν είναι έγκυρος. Παρακαλούμε ελέγξτε τον αριθμό και δοκιμάστε ξανά. {length} μήκος ψηφίων." }), Locale.define("en-GB", "Date", { dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H:%M" }).inherit("en-US", "Date"), Locale.define("en-US", "Number", { decimal: ".", group: ",", currency: { prefix: "$ " } }), Locale.define("es-ES", "Date", { months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], months_abbr: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], days_abbr: ["dom", "lun", "mar", "mié", "juv", "vie", "sáb"], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "hace menos de un minuto", minuteAgo: "hace un minuto", minutesAgo: "hace {delta} minutos", hourAgo: "hace una hora", hoursAgo: "hace unas {delta} horas", dayAgo: "hace un día", daysAgo: "hace {delta} días", weekAgo: "hace una semana", weeksAgo: "hace unas {delta} semanas", monthAgo: "hace un mes", monthsAgo: "hace {delta} meses", yearAgo: "hace un año", yearsAgo: "hace {delta} años", lessThanMinuteUntil: "menos de un minuto desde ahora", minuteUntil: "un minuto desde ahora", minutesUntil: "{delta} minutos desde ahora", hourUntil: "una hora desde ahora", hoursUntil: "unas {delta} horas desde ahora", dayUntil: "un día desde ahora", daysUntil: "{delta} días desde ahora", weekUntil: "una semana desde ahora", weeksUntil: "unas {delta} semanas desde ahora", monthUntil: "un mes desde ahora", monthsUntil: "{delta} meses desde ahora", yearUntil: "un año desde ahora", yearsUntil: "{delta} años desde ahora" }), Locale.define("es-AR").inherit("es-ES", "Date"), Locale.define("es-AR", "FormValidator", { required: "Este campo es obligatorio.", minLength: "Por favor ingrese al menos {minLength} caracteres (ha ingresado {length} caracteres).", maxLength: "Por favor no ingrese más de {maxLength} caracteres (ha ingresado {length} caracteres).", integer: "Por favor ingrese un número entero en este campo. Números con decimales (p.e. 1,25) no se permiten.", numeric: 'Por favor ingrese solo valores numéricos en este campo (p.e. "1" o "1,1" o "-1" o "-1,1").', digits: "Por favor use sólo números y puntuación en este campo (por ejemplo, un número de teléfono con guiones y/o puntos no está permitido).", alpha: "Por favor use sólo letras (a-z) en este campo. No se permiten espacios ni otros caracteres.", alphanum: "Por favor, usa sólo letras (a-z) o números (0-9) en este campo. No se permiten espacios u otros caracteres.", dateSuchAs: "Por favor ingrese una fecha válida como {date}", dateInFormatMDY: 'Por favor ingrese una fecha válida, utulizando el formato DD/MM/YYYY (p.e. "31/12/1999")', email: 'Por favor, ingrese una dirección de e-mail válida. Por ejemplo, "fred@dominio.com".', url: "Por favor ingrese una URL válida como http://www.example.com.", currencyDollar: "Por favor ingrese una cantidad válida de pesos. Por ejemplo $100,00 .", oneRequired: "Por favor ingrese algo para por lo menos una de estas entradas.", errorPrefix: "Error: ", warningPrefix: "Advertencia: ", noSpace: "No se permiten espacios en este campo.", reqChkByNode: "No hay elementos seleccionados.", requiredChk: "Este campo es obligatorio.", reqChkByName: "Por favor selecciona una {label}.", match: "Este campo necesita coincidir con el campo {matchName}", startDate: "la fecha de inicio", endDate: "la fecha de fin", currentDate: "la fecha actual", afterDate: "La fecha debe ser igual o posterior a {label}.", beforeDate: "La fecha debe ser igual o anterior a {label}.", startMonth: "Por favor selecciona un mes de origen", sameMonth: "Estas dos fechas deben estar en el mismo mes - debes cambiar una u otra." }), Locale.define("es-AR", "Number", { decimal: ",", group: ".", currency: { decimals: 2, prefix: "$ " } }), Locale.define("es-ES", "FormValidator", { required: "Este campo es obligatorio.", minLength: "Por favor introduce al menos {minLength} caracteres (has introducido {length} caracteres).", maxLength: "Por favor introduce no m&aacute;s de {maxLength} caracteres (has introducido {length} caracteres).", integer: "Por favor introduce un n&uacute;mero entero en este campo. N&uacute;meros con decimales (p.e. 1,25) no se permiten.", numeric: 'Por favor introduce solo valores num&eacute;ricos en este campo (p.e. "1" o "1,1" o "-1" o "-1,1").', digits: "Por favor usa solo n&uacute;meros y puntuaci&oacute;n en este campo (por ejemplo, un n&uacute;mero de tel&eacute;fono con guiones y puntos no esta permitido).", alpha: "Por favor usa letras solo (a-z) en este campo. No se admiten espacios ni otros caracteres.", alphanum: "Por favor, usa solo letras (a-z) o n&uacute;meros (0-9) en este campo. No se admiten espacios ni otros caracteres.", dateSuchAs: "Por favor introduce una fecha v&aacute;lida como {date}", dateInFormatMDY: 'Por favor introduce una fecha v&aacute;lida como DD/MM/YYYY (p.e. "31/12/1999")', email: 'Por favor, introduce una direcci&oacute;n de email v&aacute;lida. Por ejemplo, "fred@domain.com".', url: "Por favor introduce una URL v&aacute;lida como http://www.example.com.", currencyDollar: "Por favor introduce una cantidad v&aacute;lida de €. Por ejemplo €100,00 .", oneRequired: "Por favor introduce algo para por lo menos una de estas entradas.", errorPrefix: "Error: ", warningPrefix: "Aviso: ", noSpace: "No pueden haber espacios en esta entrada.", reqChkByNode: "No hay elementos seleccionados.", requiredChk: "Este campo es obligatorio.", reqChkByName: "Por favor selecciona una {label}.", match: "Este campo necesita coincidir con el campo {matchName}", startDate: "la fecha de inicio", endDate: "la fecha de fin", currentDate: "la fecha actual", afterDate: "La fecha debe ser igual o posterior a {label}.", beforeDate: "La fecha debe ser igual o anterior a {label}.", startMonth: "Por favor selecciona un mes de origen", sameMonth: "Estas dos fechas deben estar en el mismo mes - debes cambiar una u otra." }), Locale.define("es-VE").inherit("es-ES", "Date"), Locale.define("es-VE", "FormValidator", { digits: "Por favor usa solo n&uacute;meros y puntuaci&oacute;n en este campo. Por ejemplo, un n&uacute;mero de tel&eacute;fono con guiones y puntos no esta permitido.", alpha: "Por favor usa solo letras (a-z) en este campo. No se admiten espacios ni otros caracteres.", currencyDollar: "Por favor introduce una cantidad v&aacute;lida de Bs. Por ejemplo Bs. 100,00 .", oneRequired: "Por favor introduce un valor para por lo menos una de estas entradas.", startDate: "La fecha de inicio", endDate: "La fecha de fin", currentDate: "La fecha actual" }).inherit("es-ES", "FormValidator"), Locale.define("es-VE", "Number", { decimal: ",", group: ".", negative: { prefix: "-" }, currency: { decimals: 2, prefix: "Bs. " }, percentage: { decimals: 2, suffix: "%" } }), Locale.define("et-EE", "Date", { months: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"], months_abbr: ["jaan", "veebr", "märts", "apr", "mai", "juuni", "juuli", "aug", "sept", "okt", "nov", "dets"], days: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"], days_abbr: ["pühap", "esmasp", "teisip", "kolmap", "neljap", "reede", "laup"], dateOrder: ["month", "date", "year"], shortDate: "%m.%d.%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "vähem kui minut aega tagasi", minuteAgo: "umbes minut aega tagasi", minutesAgo: "{delta} minutit tagasi", hourAgo: "umbes tund aega tagasi", hoursAgo: "umbes {delta} tundi tagasi", dayAgo: "1 päev tagasi", daysAgo: "{delta} päeva tagasi", weekAgo: "1 nädal tagasi", weeksAgo: "{delta} nädalat tagasi", monthAgo: "1 kuu tagasi", monthsAgo: "{delta} kuud tagasi", yearAgo: "1 aasta tagasi", yearsAgo: "{delta} aastat tagasi", lessThanMinuteUntil: "vähem kui minuti aja pärast", minuteUntil: "umbes minuti aja pärast", minutesUntil: "{delta} minuti pärast", hourUntil: "umbes tunni aja pärast", hoursUntil: "umbes {delta} tunni pärast", dayUntil: "1 päeva pärast", daysUntil: "{delta} päeva pärast", weekUntil: "1 nädala pärast", weeksUntil: "{delta} nädala pärast", monthUntil: "1 kuu pärast", monthsUntil: "{delta} kuu pärast", yearUntil: "1 aasta pärast", yearsUntil: "{delta} aasta pärast" }), Locale.define("et-EE", "FormValidator", {
        required: "Väli peab olema täidetud.",
        minLength: "Palun sisestage vähemalt {minLength} tähte (te sisestasite {length} tähte).",
        maxLength: "Palun ärge sisestage rohkem kui {maxLength} tähte (te sisestasite {length} tähte).",
        integer: "Palun sisestage väljale täisarv. Kümnendarvud (näiteks 1.25) ei ole lubatud.",
        numeric: 'Palun sisestage ainult numbreid väljale (näiteks "1", "1.1", "-1" või "-1.1").',
        digits: "Palun kasutage ainult numbreid ja kirjavahemärke (telefoninumbri sisestamisel on lubatud kasutada kriipse ja punkte).",
        alpha: "Palun kasutage ainult tähti (a-z). Tühikud ja teised sümbolid on keelatud.",
        alphanum: "Palun kasutage ainult tähti (a-z) või numbreid (0-9). Tühikud ja teised sümbolid on keelatud.",
        dateSuchAs: "Palun sisestage kehtiv kuupäev kujul {date}",
        dateInFormatMDY: 'Palun sisestage kehtiv kuupäev kujul MM.DD.YYYY (näiteks: "12.31.1999").',
        email: 'Palun sisestage kehtiv e-maili aadress (näiteks: "fred@domain.com").',
        url: "Palun sisestage kehtiv URL (näiteks: http://www.example.com).",
        currencyDollar: "Palun sisestage kehtiv $ summa (näiteks: $100.00).",
        oneRequired: "Palun sisestage midagi vähemalt ühele antud väljadest.",
        errorPrefix: "Viga: ",
        warningPrefix: "Hoiatus: ",
        noSpace: "Väli ei tohi sisaldada tühikuid.",
        reqChkByNode: "Ükski väljadest pole valitud.",
        requiredChk: "Välja täitmine on vajalik.",
        reqChkByName: "Palun valige üks {label}.",
        match: "Väli peab sobima {matchName} väljaga",
        startDate: "algkuupäev",
        endDate: "lõppkuupäev",
        currentDate: "praegune kuupäev",
        afterDate: "Kuupäev peab olema võrdne või pärast {label}.",
        beforeDate: "Kuupäev peab olema võrdne või enne {label}.",
        startMonth: "Palun valige algkuupäev.",
        sameMonth: "Antud kaks kuupäeva peavad olema samas kuus - peate muutma ühte kuupäeva."
    }), Locale.define("fa", "Date", { months: ["ژانویه", "فوریه", "مارس", "آپریل", "مه", "ژوئن", "ژوئیه", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], months_abbr: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], days: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], days_abbr: ["ي", "د", "س", "چ", "پ", "ج", "ش"], dateOrder: ["month", "date", "year"], shortDate: "%m/%d/%Y", shortTime: "%I:%M%p", AM: "ق.ظ", PM: "ب.ظ", ordinal: "ام", lessThanMinuteAgo: "کمتر از یک دقیقه پیش", minuteAgo: "حدود یک دقیقه پیش", minutesAgo: "{delta} دقیقه پیش", hourAgo: "حدود یک ساعت پیش", hoursAgo: "حدود {delta} ساعت پیش", dayAgo: "1 روز پیش", daysAgo: "{delta} روز پیش", weekAgo: "1 هفته پیش", weeksAgo: "{delta} هفته پیش", monthAgo: "1 ماه پیش", monthsAgo: "{delta} ماه پیش", yearAgo: "1 سال پیش", yearsAgo: "{delta} سال پیش", lessThanMinuteUntil: "کمتر از یک دقیقه از حالا", minuteUntil: "حدود یک دقیقه از حالا", minutesUntil: "{delta} دقیقه از حالا", hourUntil: "حدود یک ساعت از حالا", hoursUntil: "حدود {delta} ساعت از حالا", dayUntil: "1 روز از حالا", daysUntil: "{delta} روز از حالا", weekUntil: "1 هفته از حالا", weeksUntil: "{delta} هفته از حالا", monthUntil: "1 ماه از حالا", monthsUntil: "{delta} ماه از حالا", yearUntil: "1 سال از حالا", yearsUntil: "{delta} سال از حالا" }), Locale.define("fa", "FormValidator", { required: "این فیلد الزامی است.", minLength: "شما باید حداقل {minLength} حرف وارد کنید ({length} حرف وارد کرده اید).", maxLength: "لطفا حداکثر {maxLength} حرف وارد کنید (شما {length} حرف وارد کرده اید).", integer: "لطفا از عدد صحیح استفاده کنید. اعداد اعشاری (مانند 1.25) مجاز نیستند.", numeric: 'لطفا فقط داده عددی وارد کنید (مانند "1" یا "1.1" یا "1-" یا "1.1-").', digits: "لطفا فقط از اعداد و علامتها در این فیلد استفاده کنید (برای مثال شماره تلفن با خط تیره و نقطه قابل قبول است).", alpha: "لطفا فقط از حروف الفباء برای این بخش استفاده کنید. کاراکترهای دیگر و فاصله مجاز نیستند.", alphanum: "لطفا فقط از حروف الفباء و اعداد در این بخش استفاده کنید. کاراکترهای دیگر و فاصله مجاز نیستند.", dateSuchAs: "لطفا یک تاریخ معتبر مانند {date} وارد کنید.", dateInFormatMDY: 'لطفا یک تاریخ معتبر به شکل MM/DD/YYYY وارد کنید (مانند "12/31/1999").', email: 'لطفا یک آدرس ایمیل معتبر وارد کنید. برای مثال "fred@domain.com".', url: "لطفا یک URL معتبر مانند http://www.example.com وارد کنید.", currencyDollar: "لطفا یک محدوده معتبر برای این بخش وارد کنید مانند 100.00$ .", oneRequired: "لطفا حداقل یکی از فیلدها را پر کنید.", errorPrefix: "خطا: ", warningPrefix: "هشدار: ", noSpace: "استفاده از فاصله در این بخش مجاز نیست.", reqChkByNode: "موردی انتخاب نشده است.", requiredChk: "این فیلد الزامی است.", reqChkByName: "لطفا یک {label} را انتخاب کنید.", match: "این فیلد باید با فیلد {matchName} مطابقت داشته باشد.", startDate: "تاریخ شروع", endDate: "تاریخ پایان", currentDate: "تاریخ کنونی", afterDate: "تاریخ میبایست برابر یا بعد از {label} باشد", beforeDate: "تاریخ میبایست برابر یا قبل از {label} باشد", startMonth: "لطفا ماه شروع را انتخاب کنید", sameMonth: "این دو تاریخ باید در یک ماه باشند - شما باید یکی یا هر دو را تغییر دهید.", creditcard: "شماره کارت اعتباری که وارد کرده اید معتبر نیست. لطفا شماره را بررسی کنید و مجددا تلاش کنید. {length} رقم وارد شده است." }), Locale.define("fi-FI", "Date", { months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"], months_abbr: ["tammik.", "helmik.", "maalisk.", "huhtik.", "toukok.", "kesäk.", "heinäk.", "elok.", "syysk.", "lokak.", "marrask.", "jouluk."], days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"], days_abbr: ["su", "ma", "ti", "ke", "to", "pe", "la"], dateOrder: ["date", "month", "year"], shortDate: "%d.%m.%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: ".", lessThanMinuteAgo: "vajaa minuutti sitten", minuteAgo: "noin minuutti sitten", minutesAgo: "{delta} minuuttia sitten", hourAgo: "noin tunti sitten", hoursAgo: "noin {delta} tuntia sitten", dayAgo: "päivä sitten", daysAgo: "{delta} päivää sitten", weekAgo: "viikko sitten", weeksAgo: "{delta} viikkoa sitten", monthAgo: "kuukausi sitten", monthsAgo: "{delta} kuukautta sitten", yearAgo: "vuosi sitten", yearsAgo: "{delta} vuotta sitten", lessThanMinuteUntil: "vajaan minuutin kuluttua", minuteUntil: "noin minuutin kuluttua", minutesUntil: "{delta} minuutin kuluttua", hourUntil: "noin tunnin kuluttua", hoursUntil: "noin {delta} tunnin kuluttua", dayUntil: "päivän kuluttua", daysUntil: "{delta} päivän kuluttua", weekUntil: "viikon kuluttua", weeksUntil: "{delta} viikon kuluttua", monthUntil: "kuukauden kuluttua", monthsUntil: "{delta} kuukauden kuluttua", yearUntil: "vuoden kuluttua", yearsUntil: "{delta} vuoden kuluttua" }), Locale.define("fi-FI", "FormValidator", { required: "Tämä kenttä on pakollinen.", minLength: "Ole hyvä ja anna vähintään {minLength} merkkiä (annoit {length} merkkiä).", maxLength: "Älä anna enempää kuin {maxLength} merkkiä (annoit {length} merkkiä).", integer: "Ole hyvä ja anna kokonaisluku. Luvut, joissa on desimaaleja (esim. 1.25) eivät ole sallittuja.", numeric: 'Anna tähän kenttään lukuarvo (kuten "1" tai "1.1" tai "-1" tai "-1.1").', digits: "Käytä pelkästään numeroita ja välimerkkejä tässä kentässä (syötteet, kuten esim. puhelinnumero, jossa on väliviivoja, pilkkuja tai pisteitä, kelpaa).", alpha: "Anna tähän kenttään vain kirjaimia (a-z). Välilyönnit tai muut merkit eivät ole sallittuja.", alphanum: "Anna tähän kenttään vain kirjaimia (a-z) tai numeroita (0-9). Välilyönnit tai muut merkit eivät ole sallittuja.", dateSuchAs: "Ole hyvä ja anna kelvollinen päivmäärä, kuten esimerkiksi {date}", dateInFormatMDY: 'Ole hyvä ja anna kelvollinen päivämäärä muodossa pp/kk/vvvv (kuten "12/31/1999")', email: 'Ole hyvä ja anna kelvollinen sähköpostiosoite (kuten esimerkiksi "matti@meikalainen.com").', url: "Ole hyvä ja anna kelvollinen URL, kuten esimerkiksi http://www.example.com.", currencyDollar: "Ole hyvä ja anna kelvollinen eurosumma (kuten esimerkiksi 100,00 EUR) .", oneRequired: "Ole hyvä ja syötä jotakin ainakin johonkin näistä kentistä.", errorPrefix: "Virhe: ", warningPrefix: "Varoitus: ", noSpace: "Tässä syötteessä ei voi olla välilyöntejä", reqChkByNode: "Ei valintoja.", requiredChk: "Tämä kenttä on pakollinen.", reqChkByName: "Ole hyvä ja valitse {label}.", match: "Tämän kentän tulee vastata kenttää {matchName}", startDate: "alkupäivämäärä", endDate: "loppupäivämäärä", currentDate: "nykyinen päivämäärä", afterDate: "Päivämäärän tulisi olla sama tai myöhäisempi ajankohta kuin {label}.", beforeDate: "Päivämäärän tulisi olla sama tai aikaisempi ajankohta kuin {label}.", startMonth: "Ole hyvä ja valitse aloituskuukausi", sameMonth: "Näiden kahden päivämäärän tulee olla saman kuun sisällä -- sinun pitää muuttaa jompaa kumpaa.", creditcard: "Annettu luottokortin numero ei kelpaa. Ole hyvä ja tarkista numero sekä yritä uudelleen. {length} numeroa syötetty." }), Locale.define("fi-FI", "Number", { group: " " }).inherit("EU", "Number"), Locale.define("fr-FR", "Date", { months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], months_abbr: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], days_abbr: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: function(e) { return e > 1 ? "" : "er" }, lessThanMinuteAgo: "il y a moins d'une minute", minuteAgo: "il y a une minute", minutesAgo: "il y a {delta} minutes", hourAgo: "il y a une heure", hoursAgo: "il y a {delta} heures", dayAgo: "il y a un jour", daysAgo: "il y a {delta} jours", weekAgo: "il y a une semaine", weeksAgo: "il y a {delta} semaines", monthAgo: "il y a 1 mois", monthsAgo: "il y a {delta} mois", yearthAgo: "il y a 1 an", yearsAgo: "il y a {delta} ans", lessThanMinuteUntil: "dans moins d'une minute", minuteUntil: "dans une minute", minutesUntil: "dans {delta} minutes", hourUntil: "dans une heure", hoursUntil: "dans {delta} heures", dayUntil: "dans un jour", daysUntil: "dans {delta} jours", weekUntil: "dans 1 semaine", weeksUntil: "dans {delta} semaines", monthUntil: "dans 1 mois", monthsUntil: "dans {delta} mois", yearUntil: "dans 1 an", yearsUntil: "dans {delta} ans" }), Locale.define("fr-FR", "FormValidator", { required: "Ce champ est obligatoire.", length: "Veuillez saisir {length} caract&egrave;re(s) (vous avez saisi {elLength} caract&egrave;re(s)", minLength: "Veuillez saisir un minimum de {minLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).", maxLength: "Veuillez saisir un maximum de {maxLength} caract&egrave;re(s) (vous avez saisi {length} caract&egrave;re(s)).", integer: 'Veuillez saisir un nombre entier dans ce champ. Les nombres d&eacute;cimaux (ex : "1,25") ne sont pas autoris&eacute;s.', numeric: 'Veuillez saisir uniquement des chiffres dans ce champ (ex : "1" ou "1,1" ou "-1" ou "-1,1").', digits: "Veuillez saisir uniquement des chiffres et des signes de ponctuation dans ce champ (ex : un num&eacute;ro de t&eacute;l&eacute;phone avec des traits d'union est autoris&eacute;).", alpha: "Veuillez saisir uniquement des lettres (a-z) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.", alphanum: "Veuillez saisir uniquement des lettres (a-z) ou des chiffres (0-9) dans ce champ. Les espaces ou autres caract&egrave;res ne sont pas autoris&eacute;s.", dateSuchAs: "Veuillez saisir une date correcte comme {date}", dateInFormatMDY: 'Veuillez saisir une date correcte, au format JJ/MM/AAAA (ex : "31/11/1999").', email: 'Veuillez saisir une adresse de courrier &eacute;lectronique. Par exemple "fred@domaine.com".', url: "Veuillez saisir une URL, comme http://www.exemple.com.", currencyDollar: "Veuillez saisir une quantit&eacute; correcte. Par exemple 100,00&euro;.", oneRequired: "Veuillez s&eacute;lectionner au moins une de ces options.", errorPrefix: "Erreur : ", warningPrefix: "Attention : ", noSpace: "Ce champ n'accepte pas les espaces.", reqChkByNode: "Aucun &eacute;l&eacute;ment n'est s&eacute;lectionn&eacute;.", requiredChk: "Ce champ est obligatoire.", reqChkByName: "Veuillez s&eacute;lectionner un(e) {label}.", match: "Ce champ doit correspondre avec le champ {matchName}.", startDate: "date de d&eacute;but", endDate: "date de fin", currentDate: "date actuelle", afterDate: "La date doit &ecirc;tre identique ou post&eacute;rieure &agrave; {label}.", beforeDate: "La date doit &ecirc;tre identique ou ant&eacute;rieure &agrave; {label}.", startMonth: "Veuillez s&eacute;lectionner un mois de d&eacute;but.", sameMonth: "Ces deux dates doivent &ecirc;tre dans le m&ecirc;me mois - vous devez en modifier une.", creditcard: "Le num&eacute;ro de carte de cr&eacute;dit est invalide. Merci de v&eacute;rifier le num&eacute;ro et de r&eacute;essayer. Vous avez entr&eacute; {length} chiffre(s)." }), Locale.define("fr-FR", "Number", { group: " " }).inherit("EU", "Number"), Locale.define("he-IL", "Date", { months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], months_abbr: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"], days_abbr: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 0, ordinal: "", lessThanMinuteAgo: "לפני פחות מדקה", minuteAgo: "לפני כדקה", minutesAgo: "לפני {delta} דקות", hourAgo: "לפני כשעה", hoursAgo: "לפני {delta} שעות", dayAgo: "לפני יום", daysAgo: "לפני {delta} ימים", weekAgo: "לפני שבוע", weeksAgo: "לפני {delta} שבועות", monthAgo: "לפני חודש", monthsAgo: "לפני {delta} חודשים", yearAgo: "לפני שנה", yearsAgo: "לפני {delta} שנים", lessThanMinuteUntil: "בעוד פחות מדקה", minuteUntil: "בעוד כדקה", minutesUntil: "בעוד {delta} דקות", hourUntil: "בעוד כשעה", hoursUntil: "בעוד {delta} שעות", dayUntil: "בעוד יום", daysUntil: "בעוד {delta} ימים", weekUntil: "בעוד שבוע", weeksUntil: "בעוד {delta} שבועות", monthUntil: "בעוד חודש", monthsUntil: "בעוד {delta} חודשים", yearUntil: "בעוד שנה", yearsUntil: "בעוד {delta} שנים" }), Locale.define("he-IL", "FormValidator", { required: "נא למלא שדה זה.", minLength: "נא להזין לפחות {minLength} תווים (הזנת {length} תווים).", maxLength: "נא להזין עד {maxLength} תווים (הזנת {length} תווים).", integer: "נא להזין מספר שלם לשדה זה. מספרים עשרוניים (כמו 1.25) אינם חוקיים.", numeric: 'נא להזין ערך מספרי בלבד בשדה זה (כמו "1", "1.1", "-1" או "-1.1").', digits: "נא להזין רק ספרות וסימני הפרדה בשדה זה (למשל, מספר טלפון עם מקפים או נקודות הוא חוקי).", alpha: "נא להזין רק אותיות באנגלית (a-z) בשדה זה. רווחים או תווים אחרים אינם חוקיים.", alphanum: "נא להזין רק אותריות באנגלית (a-z) או ספרות (0-9) בשדה זה. אווחרים או תווים אחרים אינם חוקיים.", dateSuchAs: "נא להזין תאריך חוקי, כמו {date}", dateInFormatMDY: 'נא להזין תאריך חוקי בפורמט MM/DD/YYYY (כמו "12/31/1999")', email: 'נא להזין כתובת אימייל חוקית. לדוגמה: "fred@domain.com".', url: "נא להזין כתובת אתר חוקית, כמו http://www.example.com.", currencyDollar: "נא להזין סכום דולרי חוקי. לדוגמה $100.00.", oneRequired: "נא לבחור לפחות בשדה אחד.", errorPrefix: "שגיאה: ", warningPrefix: "אזהרה: ", noSpace: "אין להזין רווחים בשדה זה.", reqChkByNode: "נא לבחור אחת מהאפשרויות.", requiredChk: "שדה זה נדרש.", reqChkByName: "נא לבחור {label}.", match: "שדה זה צריך להתאים לשדה {matchName}", startDate: "תאריך ההתחלה", endDate: "תאריך הסיום", currentDate: "התאריך הנוכחי", afterDate: "התאריך צריך להיות זהה או אחרי {label}.", beforeDate: "התאריך צריך להיות זהה או לפני {label}.", startMonth: "נא לבחור חודש התחלה", sameMonth: "שני תאריכים אלה צריכים להיות באותו חודש - נא לשנות אחד התאריכים.", creditcard: "מספר כרטיס האשראי שהוזן אינו חוקי. נא לבדוק שנית. הוזנו {length} ספרות." }), Locale.define("he-IL", "Number", { decimal: ".", group: ",", currency: { suffix: " ₪" } }), Locale.define("hu-HU", "Date", { months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"], months_abbr: ["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."], days: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"], days_abbr: ["V", "H", "K", "Sze", "Cs", "P", "Szo"], dateOrder: ["year", "month", "date"], shortDate: "%Y.%m.%d.", shortTime: "%I:%M", AM: "de.", PM: "du.", firstDayOfWeek: 1, ordinal: ".", lessThanMinuteAgo: "alig egy perce", minuteAgo: "egy perce", minutesAgo: "{delta} perce", hourAgo: "egy órája", hoursAgo: "{delta} órája", dayAgo: "1 napja", daysAgo: "{delta} napja", weekAgo: "1 hete", weeksAgo: "{delta} hete", monthAgo: "1 hónapja", monthsAgo: "{delta} hónapja", yearAgo: "1 éve", yearsAgo: "{delta} éve", lessThanMinuteUntil: "alig egy perc múlva", minuteUntil: "egy perc múlva", minutesUntil: "{delta} perc múlva", hourUntil: "egy óra múlva", hoursUntil: "{delta} óra múlva", dayUntil: "1 nap múlva", daysUntil: "{delta} nap múlva", weekUntil: "1 hét múlva", weeksUntil: "{delta} hét múlva", monthUntil: "1 hónap múlva", monthsUntil: "{delta} hónap múlva", yearUntil: "1 év múlva", yearsUntil: "{delta} év múlva" }), Locale.define("hu-HU", "FormValidator", { required: "A mező kitöltése kötelező.", minLength: "Legalább {minLength} karakter megadása szükséges (megadva {length} karakter).", maxLength: "Legfeljebb {maxLength} karakter megadása lehetséges (megadva {length} karakter).", integer: "Egész szám megadása szükséges. A tizedesjegyek (pl. 1.25) nem engedélyezettek.", numeric: 'Szám megadása szükséges (pl. "1" vagy "1.1" vagy "-1" vagy "-1.1").', digits: "Csak számok és írásjelek megadása lehetséges (pl. telefonszám kötőjelek és/vagy perjelekkel).", alpha: "Csak betűk (a-z) megadása lehetséges. Szóköz és egyéb karakterek nem engedélyezettek.", alphanum: "Csak betűk (a-z) vagy számok (0-9) megadása lehetséges. Szóköz és egyéb karakterek nem engedélyezettek.", dateSuchAs: "Valós dátum megadása szükséges (pl. {date}).", dateInFormatMDY: 'Valós dátum megadása szükséges ÉÉÉÉ.HH.NN. formában. (pl. "1999.12.31.")', email: 'Valós e-mail cím megadása szükséges (pl. "fred@domain.hu").', url: "Valós URL megadása szükséges (pl. http://www.example.com).", currencyDollar: "Valós pénzösszeg megadása szükséges (pl. 100.00 Ft.).", oneRequired: "Az alábbi mezők legalább egyikének kitöltése kötelező.", errorPrefix: "Hiba: ", warningPrefix: "Figyelem: ", noSpace: "A mező nem tartalmazhat szóközöket.", reqChkByNode: "Nincs egyetlen kijelölt elem sem.", requiredChk: "A mező kitöltése kötelező.", reqChkByName: "Egy {label} kiválasztása szükséges.", match: "A mezőnek egyeznie kell a(z) {matchName} mezővel.", startDate: "a kezdet dátuma", endDate: "a vég dátuma", currentDate: "jelenlegi dátum", afterDate: "A dátum nem lehet kisebb, mint {label}.", beforeDate: "A dátum nem lehet nagyobb, mint {label}.", startMonth: "Kezdeti hónap megadása szükséges.", sameMonth: "A két dátumnak ugyanazon hónapban kell lennie.", creditcard: "A megadott bankkártyaszám nem valódi (megadva {length} számjegy)." }), Locale.define("it-IT", "Date", { months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], months_abbr: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"], days_abbr: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H.%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "º", lessThanMinuteAgo: "meno di un minuto fa", minuteAgo: "circa un minuto fa", minutesAgo: "circa {delta} minuti fa", hourAgo: "circa un'ora fa", hoursAgo: "circa {delta} ore fa", dayAgo: "circa 1 giorno fa", daysAgo: "circa {delta} giorni fa", weekAgo: "una settimana fa", weeksAgo: "{delta} settimane fa", monthAgo: "un mese fa", monthsAgo: "{delta} mesi fa", yearAgo: "un anno fa", yearsAgo: "{delta} anni fa", lessThanMinuteUntil: "tra meno di un minuto", minuteUntil: "tra circa un minuto", minutesUntil: "tra circa {delta} minuti", hourUntil: "tra circa un'ora", hoursUntil: "tra circa {delta} ore", dayUntil: "tra circa un giorno", daysUntil: "tra circa {delta} giorni", weekUntil: "tra una settimana", weeksUntil: "tra {delta} settimane", monthUntil: "tra un mese", monthsUntil: "tra {delta} mesi", yearUntil: "tra un anno", yearsUntil: "tra {delta} anni" }), Locale.define("it-IT", "FormValidator", { required: "Il campo &egrave; obbligatorio.", minLength: "Inserire almeno {minLength} caratteri (ne sono stati inseriti {length}).", maxLength: "Inserire al massimo {maxLength} caratteri (ne sono stati inseriti {length}).", integer: "Inserire un numero intero. Non sono consentiti decimali (es.: 1.25).", numeric: 'Inserire solo valori numerici (es.: "1" oppure "1.1" oppure "-1" oppure "-1.1").', digits: "Inserire solo numeri e caratteri di punteggiatura. Per esempio &egrave; consentito un numero telefonico con trattini o punti.", alpha: "Inserire solo lettere (a-z). Non sono consentiti spazi o altri caratteri.", alphanum: "Inserire solo lettere (a-z) o numeri (0-9). Non sono consentiti spazi o altri caratteri.", dateSuchAs: "Inserire una data valida del tipo {date}", dateInFormatMDY: 'Inserire una data valida nel formato MM/GG/AAAA (es.: "12/31/1999")', email: 'Inserire un indirizzo email valido. Per esempio "nome@dominio.com".', url: 'Inserire un indirizzo valido. Per esempio "http://www.example.com".', currencyDollar: 'Inserire un importo valido. Per esempio "$100.00".', oneRequired: "Completare almeno uno dei campi richiesti.", errorPrefix: "Errore: ", warningPrefix: "Attenzione: ", noSpace: "Non sono consentiti spazi.", reqChkByNode: "Nessuna voce selezionata.", requiredChk: "Il campo &egrave; obbligatorio.", reqChkByName: "Selezionare un(a) {label}.", match: "Il valore deve corrispondere al campo {matchName}", startDate: "data d'inizio", endDate: "data di fine", currentDate: "data attuale", afterDate: "La data deve corrispondere o essere successiva al {label}.", beforeDate: "La data deve corrispondere o essere precedente al {label}.", startMonth: "Selezionare un mese d'inizio", sameMonth: "Le due date devono essere dello stesso mese - occorre modificarne una." }), Locale.define("ja-JP", "Date", { months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], months_abbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], days_abbr: ["日", "月", "火", "水", "木", "金", "土"], dateOrder: ["year", "month", "date"], shortDate: "%Y/%m/%d", shortTime: "%H:%M", AM: "午前", PM: "午後", firstDayOfWeek: 0, ordinal: "", lessThanMinuteAgo: "1分以内前", minuteAgo: "約1分前", minutesAgo: "約{delta}分前", hourAgo: "約1時間前", hoursAgo: "約{delta}時間前", dayAgo: "1日前", daysAgo: "{delta}日前", weekAgo: "1週間前", weeksAgo: "{delta}週間前", monthAgo: "1ヶ月前", monthsAgo: "{delta}ヶ月前", yearAgo: "1年前", yearsAgo: "{delta}年前", lessThanMinuteUntil: "今から約1分以内", minuteUntil: "今から約1分", minutesUntil: "今から約{delta}分", hourUntil: "今から約1時間", hoursUntil: "今から約{delta}時間", dayUntil: "今から1日間", daysUntil: "今から{delta}日間", weekUntil: "今から1週間", weeksUntil: "今から{delta}週間", monthUntil: "今から1ヶ月", monthsUntil: "今から{delta}ヶ月", yearUntil: "今から1年", yearsUntil: "今から{delta}年" }), Locale.define("ja-JP", "FormValidator", { required: "入力は必須です。", minLength: "入力文字数は{minLength}以上にしてください。({length}文字)", maxLength: "入力文字数は{maxLength}以下にしてください。({length}文字)", integer: "整数を入力してください。", numeric: '入力できるのは数値だけです。(例: "1", "1.1", "-1", "-1.1"....)', digits: "入力できるのは数値と句読記号です。 (例: -や+を含む電話番号など).", alpha: "入力できるのは半角英字だけです。それ以外の文字は入力できません。", alphanum: "入力できるのは半角英数字だけです。それ以外の文字は入力できません。", dateSuchAs: "有効な日付を入力してください。{date}", dateInFormatMDY: '日付の書式に誤りがあります。YYYY/MM/DD (i.e. "1999/12/31")', email: "メールアドレスに誤りがあります。", url: "URLアドレスに誤りがあります。", currencyDollar: "金額に誤りがあります。", oneRequired: "ひとつ以上入力してください。", errorPrefix: "エラー: ", warningPrefix: "警告: ", noSpace: "スペースは入力できません。", reqChkByNode: "選択されていません。", requiredChk: "この項目は必須です。", reqChkByName: "{label}を選択してください。", match: "{matchName}が入力されている場合必須です。", startDate: "開始日", endDate: "終了日", currentDate: "今日", afterDate: "{label}以降の日付にしてください。", beforeDate: "{label}以前の日付にしてください。", startMonth: "開始月を選択してください。", sameMonth: "日付が同一です。どちらかを変更してください。" }), Locale.define("ja-JP", "Number", { decimal: ".", group: ",", currency: { decimals: 0, prefix: "\\" } }), Locale.define("nl-NL", "Date", { months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"], months_abbr: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], days_abbr: ["zo", "ma", "di", "wo", "do", "vr", "za"], dateOrder: ["date", "month", "year"], shortDate: "%d-%m-%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "e", lessThanMinuteAgo: "minder dan een minuut geleden", minuteAgo: "ongeveer een minuut geleden", minutesAgo: "{delta} minuten geleden", hourAgo: "ongeveer een uur geleden", hoursAgo: "ongeveer {delta} uur geleden", dayAgo: "een dag geleden", daysAgo: "{delta} dagen geleden", weekAgo: "een week geleden", weeksAgo: "{delta} weken geleden", monthAgo: "een maand geleden", monthsAgo: "{delta} maanden geleden", yearAgo: "een jaar geleden", yearsAgo: "{delta} jaar geleden", lessThanMinuteUntil: "over minder dan een minuut", minuteUntil: "over ongeveer een minuut", minutesUntil: "over {delta} minuten", hourUntil: "over ongeveer een uur", hoursUntil: "over {delta} uur", dayUntil: "over ongeveer een dag", daysUntil: "over {delta} dagen", weekUntil: "over een week", weeksUntil: "over {delta} weken", monthUntil: "over een maand", monthsUntil: "over {delta} maanden", yearUntil: "over een jaar", yearsUntil: "over {delta} jaar" }), Locale.define("nl-NL", "FormValidator", { required: "Dit veld is verplicht.", length: "Vul precies {length} karakters in (je hebt {elLength} karakters ingevoerd).", minLength: "Vul minimaal {minLength} karakters in (je hebt {length} karakters ingevoerd).", maxLength: "Vul niet meer dan {maxLength} karakters in (je hebt {length} karakters ingevoerd).", integer: "Vul een getal in. Getallen met decimalen (bijvoorbeeld 1.25) zijn niet toegestaan.", numeric: 'Vul alleen numerieke waarden in (bijvoorbeeld "1" of "1.1" of "-1" of "-1.1").', digits: "Vul alleen nummers en leestekens in (bijvoorbeeld een telefoonnummer met streepjes is toegestaan).", alpha: "Vul alleen letters in (a-z). Spaties en andere karakters zijn niet toegestaan.", alphanum: "Vul alleen letters (a-z) of nummers (0-9) in. Spaties en andere karakters zijn niet toegestaan.", dateSuchAs: "Vul een geldige datum in, zoals {date}", dateInFormatMDY: 'Vul een geldige datum, in het formaat MM/DD/YYYY (bijvoorbeeld "12/31/1999")', email: 'Vul een geldig e-mailadres in. Bijvoorbeeld "fred@domein.nl".', url: "Vul een geldige URL in, zoals http://www.example.com.", currencyDollar: "Vul een geldig $ bedrag in. Bijvoorbeeld $100.00 .", oneRequired: "Vul iets in bij in ieder geval een van deze velden.", warningPrefix: "Waarschuwing: ", errorPrefix: "Fout: ", noSpace: "Spaties zijn niet toegestaan in dit veld.", reqChkByNode: "Er zijn geen items geselecteerd.", requiredChk: "Dit veld is verplicht.", reqChkByName: "Selecteer een {label}.", match: "Dit veld moet overeen komen met het {matchName} veld", startDate: "de begin datum", endDate: "de eind datum", currentDate: "de huidige datum", afterDate: "De datum moet hetzelfde of na {label} zijn.", beforeDate: "De datum moet hetzelfde of voor {label} zijn.", startMonth: "Selecteer een begin maand", sameMonth: "Deze twee data moeten in dezelfde maand zijn - u moet een van beide aanpassen.", creditcard: "Het ingevulde creditcardnummer is niet geldig. Controleer het nummer en probeer opnieuw. {length} getallen ingevuld." }), Locale.define("nl-NL").inherit("EU", "Number"), Locale.define("no-NO", "Date", { months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], months_abbr: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], days_abbr: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"], dateOrder: ["date", "month", "year"], shortDate: "%d.%m.%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, lessThanMinuteAgo: "mindre enn et minutt siden", minuteAgo: "omtrent et minutt siden", minutesAgo: "{delta} minutter siden", hourAgo: "omtrent en time siden", hoursAgo: "omtrent {delta} timer siden", dayAgo: "{delta} dag siden", daysAgo: "{delta} dager siden", weekAgo: "en uke siden", weeksAgo: "{delta} uker siden", monthAgo: "en måned siden", monthsAgo: "{delta} måneder siden", yearAgo: "ett år siden", yearsAgo: "{delta} år siden", lessThanMinuteUntil: "mindre enn et minutt til", minuteUntil: "omtrent et minutt til", minutesUntil: "{delta} minutter til", hourUntil: "omtrent en time til", hoursUntil: "omtrent {delta} timer til", dayUntil: "en dag til", daysUntil: "{delta} dager til", weekUntil: "en uke til", weeksUntil: "{delta} uker til", monthUntil: "en måned til", monthsUntil: "{delta} måneder til", yearUntil: "et år til", yearsUntil: "{delta} år til" }), Locale.define("no-NO", "FormValidator", { required: "Dette feltet er påkrevd.", length: "Skriv inn {length} tegn (du skrev {elLength} tegn)", minLength: "Skriv inn minst {minLength} tegn (du skrev {length} tegn).", maxLength: "Ikke skriv mer enn {maxLength} tegn (du skrev {length} tegn).", integer: "Skriv inn et tall i dette feltet. Tall med desimaler (f.eks. 1,25) er ikke tillat.", numeric: 'Skriv kun inn numeriske verdier i dette feltet (f.eks. "1", "1.1", "-1" eller "-1.1").', digits: "Skriv kun nummer og skilletegn i dette feltet.", alpha: "Skriv kun bokstaver (a-å) i dette feltet. Ingen mellomrom eller andre tegn er tillat.", alphanum: "Skriv kun bokstaver (a-å) eller nummer (0-9) i dette feltet. Ingen mellomrom eller andre tegn er tillat.", dateSuchAs: "Skriv inn en gyldig dato, som f.eks. {date}", dateInFormatMDY: 'Skriv inn en gyldig dato, f.eks. DD/MM/YYYY ("31/12/1999")', email: 'Skriv inn en gyldig epost-adresse. F.eks. "ola.nordmann@example.com".', url: "Skriv inn en gyldig URL, f.eks. http://www.example.com.", currencyDollar: "Skriv inn et gyldig beløp. F.eks. 100,00.", oneRequired: "Minst ett av disse feltene må fylles ut.", errorPrefix: "Feil: ", warningPrefix: "Advarsel: ", noSpace: "Mellomrom er ikke tillatt i dette feltet.", reqChkByNode: "Ingen objekter er valgt.", requiredChk: "Dette feltet er påkrevd.", reqChkByName: "Velg en {label}.", match: "Dette feltet må være lik {matchName}", startDate: "startdato", endDate: "sluttdato", currentDate: "dagens dato", afterDate: "Datoen må være den samme som eller etter {label}.", beforeDate: "Datoen må være den samme som eller før {label}.", startMonth: "Velg en startmåned", sameMonth: "Datoene må være i den samme måneden - velg den ene eller den andre.", creditcard: "Kortnummeret du skrev inn er ikke gyldig. Prøv igjen. Du skrev {length} siffer." }), Locale.define("no-NO", "Number", { currency: { prefix: "NOK " } }).inherit("EU", "Number"), Locale.define("pl-PL", "Date", { months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"], months_abbr: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"], days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"], days_abbr: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."], dateOrder: ["year", "month", "date"], shortDate: "%Y-%m-%d", shortTime: "%H:%M", AM: "nad ranem", PM: "po południu", firstDayOfWeek: 1, ordinal: function(e) { return e > 3 && e < 21 ? "ty" : ["ty", "szy", "gi", "ci", "ty"][Math.min(e % 10, 4)] }, lessThanMinuteAgo: "mniej niż minute temu", minuteAgo: "około minutę temu", minutesAgo: "{delta} minut temu", hourAgo: "około godzinę temu", hoursAgo: "około {delta} godzin temu", dayAgo: "Wczoraj", daysAgo: "{delta} dni temu", lessThanMinuteUntil: "za niecałą minutę", minuteUntil: "za około minutę", minutesUntil: "za {delta} minut", hourUntil: "za około godzinę", hoursUntil: "za około {delta} godzin", dayUntil: "za 1 dzień", daysUntil: "za {delta} dni" }), Locale.define("pl-PL", "FormValidator", {
        required: "To pole jest wymagane.",
        minLength: "Wymagane jest przynajmniej {minLength} znaków (wpisanych zostało tylko {length}).",
        maxLength: "Dozwolone jest nie więcej niż {maxLength} znaków (wpisanych zostało {length})",
        integer: "To pole wymaga liczb całych. Liczby dziesiętne (np. 1.25) są niedozwolone.",
        numeric: 'Prosimy używać tylko numerycznych wartości w tym polu (np. "1", "1.1", "-1" lub "-1.1").',
        digits: "Prosimy używać liczb oraz zankow punktuacyjnych w typ polu (dla przykładu, przy numerze telefonu myślniki i kropki są dozwolone).",
        alpha: "Prosimy używać tylko liter (a-z) w tym polu. Spacje oraz inne znaki są niedozwolone.",
        alphanum: "Prosimy używać tylko liter (a-z) lub liczb (0-9) w tym polu. Spacje oraz inne znaki są niedozwolone.",
        dateSuchAs: "Prosimy podać prawidłową datę w formacie: {date}",
        dateInFormatMDY: 'Prosimy podać poprawną date w formacie DD.MM.RRRR (i.e. "12.01.2009")',
        email: 'Prosimy podać prawidłowy adres e-mail, np. "jan@domena.pl".',
        url: "Prosimy podać prawidłowy adres URL, np. http://www.example.com.",
        currencyDollar: "Prosimy podać prawidłową sumę w PLN. Dla przykładu: 100.00 PLN.",
        oneRequired: "Prosimy wypełnić chociaż jedno z pól.",
        errorPrefix: "Błąd: ",
        warningPrefix: "Uwaga: ",
        noSpace: "W tym polu nie mogą znajdować się spacje.",
        reqChkByNode: "Brak zaznaczonych elementów.",
        requiredChk: "To pole jest wymagane.",
        reqChkByName: "Prosimy wybrać z {label}.",
        match: "To pole musi być takie samo jak {matchName}",
        startDate: "data początkowa",
        endDate: "data końcowa",
        currentDate: "aktualna data",
        afterDate: "Podana data poinna być taka sama lub po {label}.",
        beforeDate: "Podana data poinna być taka sama lub przed {label}.",
        startMonth: "Prosimy wybrać początkowy miesiąc.",
        sameMonth: "Te dwie daty muszą być w zakresie tego samego miesiąca - wymagana jest zmiana któregoś z pól."
    }), Locale.define("pt-PT", "Date", { months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], months_abbr: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], days: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"], days_abbr: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"], dateOrder: ["date", "month", "year"], shortDate: "%d-%m-%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "º", lessThanMinuteAgo: "há menos de um minuto", minuteAgo: "há cerca de um minuto", minutesAgo: "há {delta} minutos", hourAgo: "há cerca de uma hora", hoursAgo: "há cerca de {delta} horas", dayAgo: "há um dia", daysAgo: "há {delta} dias", weekAgo: "há uma semana", weeksAgo: "há {delta} semanas", monthAgo: "há um mês", monthsAgo: "há {delta} meses", yearAgo: "há um ano", yearsAgo: "há {delta} anos", lessThanMinuteUntil: "em menos de um minuto", minuteUntil: "em um minuto", minutesUntil: "em {delta} minutos", hourUntil: "em uma hora", hoursUntil: "em {delta} horas", dayUntil: "em um dia", daysUntil: "em {delta} dias", weekUntil: "em uma semana", weeksUntil: "em {delta} semanas", monthUntil: "em um mês", monthsUntil: "em {delta} meses", yearUntil: "em um ano", yearsUntil: "em {delta} anos" }), Locale.define("pt-BR", "Date", { shortDate: "%d/%m/%Y" }).inherit("pt-PT", "Date"), Locale.define("pt-BR", "FormValidator", { required: "Este campo é obrigatório.", minLength: "Digite pelo menos {minLength} caracteres (tamanho atual: {length}).", maxLength: "Não digite mais de {maxLength} caracteres (tamanho atual: {length}).", integer: "Por favor digite apenas um número inteiro neste campo. Não são permitidos números decimais (por exemplo, 1,25).", numeric: 'Por favor digite apenas valores numéricos neste campo (por exemplo, "1" ou "1.1" ou "-1" ou "-1,1").', digits: "Por favor use apenas números e pontuação neste campo (por exemplo, um número de telefone com traços ou pontos é permitido).", alpha: "Por favor use somente letras (a-z). Espaço e outros caracteres não são permitidos.", alphanum: "Use somente letras (a-z) ou números (0-9) neste campo. Espaço e outros caracteres não são permitidos.", dateSuchAs: "Digite uma data válida, como {date}", dateInFormatMDY: 'Digite uma data válida, como DD/MM/YYYY (por exemplo, "31/12/1999")', email: 'Digite um endereço de email válido. Por exemplo "nome@dominio.com".', url: "Digite uma URL válida. Exemplo: http://www.example.com.", currencyDollar: "Digite um valor em dinheiro válido. Exemplo: R$100,00 .", oneRequired: "Digite algo para pelo menos um desses campos.", errorPrefix: "Erro: ", warningPrefix: "Aviso: ", noSpace: "Não é possível digitar espaços neste campo.", reqChkByNode: "Não foi selecionado nenhum item.", requiredChk: "Este campo é obrigatório.", reqChkByName: "Por favor digite um {label}.", match: "Este campo deve ser igual ao campo {matchName}.", startDate: "a data inicial", endDate: "a data final", currentDate: "a data atual", afterDate: "A data deve ser igual ou posterior a {label}.", beforeDate: "A data deve ser igual ou anterior a {label}.", startMonth: "Por favor selecione uma data inicial.", sameMonth: "Estas duas datas devem ter o mesmo mês - você deve modificar uma das duas.", creditcard: "O número do cartão de crédito informado é inválido. Por favor verifique o valor e tente novamente. {length} números informados." }), Locale.define("pt-BR", "Number", { decimal: ",", group: ".", currency: { prefix: "R$ " } }), Locale.define("pt-PT", "FormValidator", { required: "Este campo é necessário.", minLength: "Digite pelo menos{minLength} caracteres (comprimento {length} caracteres).", maxLength: "Não insira mais de {maxLength} caracteres (comprimento {length} caracteres).", integer: "Digite um número inteiro neste domínio. Com números decimais (por exemplo, 1,25), não são permitidas.", numeric: 'Digite apenas valores numéricos neste domínio (p.ex., "1" ou "1.1" ou "-1" ou "-1,1").', digits: "Por favor, use números e pontuação apenas neste campo (p.ex., um número de telefone com traços ou pontos é permitida).", alpha: "Por favor use somente letras (a-z), com nesta área. Não utilize espaços nem outros caracteres são permitidos.", alphanum: "Use somente letras (a-z) ou números (0-9) neste campo. Não utilize espaços nem outros caracteres são permitidos.", dateSuchAs: "Digite uma data válida, como {date}", dateInFormatMDY: 'Digite uma data válida, como DD/MM/YYYY (p.ex. "31/12/1999")', email: 'Digite um endereço de email válido. Por exemplo "fred@domain.com".', url: "Digite uma URL válida, como http://www.example.com.", currencyDollar: "Digite um valor válido $. Por exemplo $ 100,00. ", oneRequired: "Digite algo para pelo menos um desses insumos.", errorPrefix: "Erro: ", warningPrefix: "Aviso: " }),
    function() {
        var e = function(e, t, n, i, r) {
            var s = e % 10,
                a = e % 100;
            return 1 == s && 11 != a ? t : 2 != s && 3 != s && 4 != s || 12 == a || 13 == a || 14 == a ? 0 == s || 5 == s || 6 == s || 7 == s || 8 == s || 9 == s || 11 == a || 12 == a || 13 == a || 14 == a ? i : r : n
        };
        Locale.define("ru-RU", "Date", { months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], months_abbr: ["янв", "февр", "март", "апр", "май", "июнь", "июль", "авг", "сент", "окт", "нояб", "дек"], days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"], days_abbr: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], dateOrder: ["date", "month", "year"], shortDate: "%d.%m.%Y", shortTime: "%H:%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "меньше минуты назад", minuteAgo: "минуту назад", minutesAgo: function(t) { return "{delta} " + e(t, "минуту", "минуты", "минут") + " назад" }, hourAgo: "час назад", hoursAgo: function(t) { return "{delta} " + e(t, "час", "часа", "часов") + " назад" }, dayAgo: "вчера", daysAgo: function(t) { return "{delta} " + e(t, "день", "дня", "дней") + " назад" }, weekAgo: "неделю назад", weeksAgo: function(t) { return "{delta} " + e(t, "неделя", "недели", "недель") + " назад" }, monthAgo: "месяц назад", monthsAgo: function(t) { return "{delta} " + e(t, "месяц", "месяца", "месяцев") + " назад" }, yearAgo: "год назад", yearsAgo: function(t) { return "{delta} " + e(t, "год", "года", "лет") + " назад" }, lessThanMinuteUntil: "меньше чем через минуту", minuteUntil: "через минуту", minutesUntil: function(t) { return "через {delta} " + e(t, "минуту", "минуты", "минут") }, hourUntil: "через час", hoursUntil: function(t) { return "через {delta} " + e(t, "час", "часа", "часов") }, dayUntil: "завтра", daysUntil: function(t) { return "через {delta} " + e(t, "день", "дня", "дней") }, weekUntil: "через неделю", weeksUntil: function(t) { return "через {delta} " + e(t, "неделю", "недели", "недель") }, monthUntil: "через месяц", monthsUntil: function(t) { return "через {delta} " + e(t, "месяц", "месяца", "месяцев") }, yearUntil: "через", yearsUntil: function(t) { return "через {delta} " + e(t, "год", "года", "лет") } }), Locale.define("ru-RU-unicode").inherit("ru-RU", "Date")
    }(), Locale.define("ru-RU", "FormValidator", { required: "Это поле обязательно к заполнению.", minLength: "Пожалуйста, введите хотя бы {minLength} символов (Вы ввели {length}).", maxLength: "Пожалуйста, введите не больше {maxLength} символов (Вы ввели {length}).", integer: "Пожалуйста, введите в это поле число. Дробные числа (например 1.25) тут не разрешены.", numeric: 'Пожалуйста, введите в это поле число (например "1" или "1.1", или "-1", или "-1.1").', digits: "В этом поле Вы можете использовать только цифры и знаки пунктуации (например, телефонный номер со знаками дефиса или с точками).", alpha: "В этом поле можно использовать только латинские буквы (a-z). Пробелы и другие символы запрещены.", alphanum: "В этом поле можно использовать только латинские буквы (a-z) и цифры (0-9). Пробелы и другие символы запрещены.", dateSuchAs: "Пожалуйста, введите корректную дату {date}", dateInFormatMDY: 'Пожалуйста, введите дату в формате ММ/ДД/ГГГГ (например "12/31/1999")', email: 'Пожалуйста, введите корректный емейл-адрес. Для примера "fred@domain.com".', url: "Пожалуйста, введите правильную ссылку вида http://www.example.com.", currencyDollar: "Пожалуйста, введите сумму в долларах. Например: $100.00 .", oneRequired: "Пожалуйста, выберите хоть что-нибудь в одном из этих полей.", errorPrefix: "Ошибка: ", warningPrefix: "Внимание: " }), Locale.define("ru-RU-unicode").inherit("ru-RU", "FormValidator"),
    function() {
        var e = function(e, t, n, i) { return 1 == e ? t : 2 == e || 3 == e || 4 == e ? n : i };
        Locale.define("sk-SK", "Date", { months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"], months_abbr: ["januára", "februára", "marca", "apríla", "mája", "júna", "júla", "augusta", "septembra", "októbra", "novembra", "decembra"], days: ["Nedele", "Pondelí", "Úterý", "Streda", "Čtvrtek", "Pátek", "Sobota"], days_abbr: ["ne", "po", "ut", "st", "št", "pi", "so"], dateOrder: ["date", "month", "year"], shortDate: "%d.%m.%Y", shortTime: "%H:%M", AM: "dop.", PM: "pop.", firstDayOfWeek: 1, ordinal: ".", lessThanMinuteAgo: "pred chvíľou", minuteAgo: "približne pred minútou", minutesAgo: function(t) { return "pred {delta} " + e(t, "minútou", "minútami", "minútami") }, hourAgo: "približne pred hodinou", hoursAgo: function(t) { return "pred {delta} " + e(t, "hodinou", "hodinami", "hodinami") }, dayAgo: "pred dňom", daysAgo: function(t) { return "pred {delta} " + e(t, "dňom", "dňami", "dňami") }, weekAgo: "pred týždňom", weeksAgo: function(t) { return "pred {delta} " + e(t, "týždňom", "týždňami", "týždňami") }, monthAgo: "pred mesiacom", monthsAgo: function(t) { return "pred {delta} " + e(t, "mesiacom", "mesiacmi", "mesiacmi") }, yearAgo: "pred rokom", yearsAgo: function(t) { return "pred {delta} " + e(t, "rokom", "rokmi", "rokmi") }, lessThanMinuteUntil: "o chvíľu", minuteUntil: "približne o minútu", minutesUntil: function(t) { return "o {delta} " + e(t, "minútu", "minúty", "minúty") }, hourUntil: "približne o hodinu", hoursUntil: function(t) { return "o {delta} " + e(t, "hodinu", "hodiny", "hodín") }, dayUntil: "o deň", daysUntil: function(t) { return "o {delta} " + e(t, "deň", "dni", "dní") }, weekUntil: "o týždeň", weeksUntil: function(t) { return "o {delta} " + e(t, "týždeň", "týždne", "týždňov") }, monthUntil: "o mesiac", monthsUntil: function(t) { return "o {delta} " + e(t, "mesiac", "mesiace", "mesiacov") }, yearUntil: "o rok", yearsUntil: function(t) { return "o {delta} " + e(t, "rok", "roky", "rokov") } })
    }(), Locale.define("sk-SK", "FormValidator", { required: "Táto položka je povinná.", minLength: "Zadajte prosím aspoň {minLength} znakov (momentálne {length} znakov).", maxLength: "Zadajte prosím menej ako {maxLength} znakov (momentálne {length} znakov).", integer: "Zadajte prosím celé číslo. Desetinné čísla (napr. 1.25) nie sú povolené.", numeric: "Zadajte len číselné hodnoty (t.j. „1“ alebo „1.1“ alebo „-1“ alebo „-1.1“).", digits: "Zadajte prosím len čísla a interpunkčné znamienka (napríklad telefónne číslo s pomlčkami albo bodkami je povolené).", alpha: "Zadajte prosím len písmená (a-z). Medzery alebo iné znaky nie sú povolené.", alphanum: "Zadajte prosím len písmená (a-z) alebo číslice (0-9). Medzery alebo iné znaky nie sú povolené.", dateSuchAs: "Zadajte prosím platný dátum v tvare {date}", dateInFormatMDY: "Zadajte prosím platný datum v tvare MM / DD / RRRR (t.j. „12/31/1999“)", email: "Zadajte prosím platnú emailovú adresu. Napríklad „fred@domain.com“.", url: "Zadajte prosím platnoú adresu URL v tvare http://www.example.com.", currencyDollar: "Zadajte prosím platnú čiastku. Napríklad $100.00.", oneRequired: "Zadajte prosím aspoň jednu hodnotu z týchto položiek.", errorPrefix: "Chyba: ", warningPrefix: "Upozornenie: ", noSpace: "V tejto položle nie sú povolené medzery", reqChkByNode: "Nie sú vybrané žiadne položky.", requiredChk: "Táto položka je povinná.", reqChkByName: "Prosím vyberte {label}.", match: "Táto položka sa musí zhodovať s položkou {matchName}", startDate: "dátum začiatku", endDate: "dátum ukončenia", currendDate: "aktuálny dátum", afterDate: "Dátum by mal býť rovnaký alebo väčší ako {label}.", beforeDate: "Dátum by mal byť rovnaký alebo menší ako {label}.", startMonth: "Vyberte počiatočný mesiac.", sameMonth: "Tieto dva dátumy musia býť v rovnakom mesiaci - zmeňte jeden z nich.", creditcard: "Zadané číslo kreditnej karty je neplatné. Prosím, opravte ho. Bolo zadaných {length} číslic." }),
    function() {
        var e = function(e, t, n, i, r) { return e >= 1 && e <= 3 ? arguments[e] : r };
        Locale.define("sl-SI", "Date", { months: ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"], months_abbr: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "avg", "sep", "okt", "nov", "dec"], days: ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"], days_abbr: ["ned", "pon", "tor", "sre", "čet", "pet", "sob"], dateOrder: ["date", "month", "year"], shortDate: "%d.%m.%Y", shortTime: "%H.%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: ".", lessThanMinuteAgo: "manj kot minuto nazaj", minuteAgo: "minuto nazaj", minutesAgo: function(t) { return "{delta} " + e(t, "minuto", "minuti", "minute", "minut") + " nazaj" }, hourAgo: "uro nazaj", hoursAgo: function(t) { return "{delta} " + e(t, "uro", "uri", "ure", "ur") + " nazaj" }, dayAgo: "dan nazaj", daysAgo: function(t) { return "{delta} " + e(t, "dan", "dneva", "dni", "dni") + " nazaj" }, weekAgo: "teden nazaj", weeksAgo: function(t) { return "{delta} " + e(t, "teden", "tedna", "tedne", "tednov") + " nazaj" }, monthAgo: "mesec nazaj", monthsAgo: function(t) { return "{delta} " + e(t, "mesec", "meseca", "mesece", "mesecov") + " nazaj" }, yearthAgo: "leto nazaj", yearsAgo: function(t) { return "{delta} " + e(t, "leto", "leti", "leta", "let") + " nazaj" }, lessThanMinuteUntil: "še manj kot minuto", minuteUntil: "še minuta", minutesUntil: function(t) { return "še {delta} " + e(t, "minuta", "minuti", "minute", "minut") }, hourUntil: "še ura", hoursUntil: function(t) { return "še {delta} " + e(t, "ura", "uri", "ure", "ur") }, dayUntil: "še dan", daysUntil: function(t) { return "še {delta} " + e(t, "dan", "dneva", "dnevi", "dni") }, weekUntil: "še tedn", weeksUntil: function(t) { return "še {delta} " + e(t, "teden", "tedna", "tedni", "tednov") }, monthUntil: "še mesec", monthsUntil: function(t) { return "še {delta} " + e(t, "mesec", "meseca", "meseci", "mesecov") }, yearUntil: "še leto", yearsUntil: function(t) { return "še {delta} " + e(t, "leto", "leti", "leta", "let") } })
    }(), Locale.define("sl-SI", "FormValidator", { required: "To polje je obvezno", minLength: "Prosim, vnesite vsaj {minLength} znakov (vnesli ste {length} znakov).", maxLength: "Prosim, ne vnesite več kot {maxLength} znakov (vnesli ste {length} znakov).", integer: "Prosim, vnesite celo število. Decimalna števila (kot 1,25) niso dovoljena.", numeric: 'Prosim, vnesite samo numerične vrednosti (kot "1" ali "1.1" ali "-1" ali "-1.1").', digits: "Prosim, uporabite številke in ločila le na tem polju (na primer, dovoljena je telefonska številka z pomišlaji ali pikami).", alpha: "Prosim, uporabite le črke v tem plju. Presledki in drugi znaki niso dovoljeni.", alphanum: "Prosim, uporabite samo črke ali številke v tem polju. Presledki in drugi znaki niso dovoljeni.", dateSuchAs: "Prosim, vnesite pravilen datum kot {date}", dateInFormatMDY: 'Prosim, vnesite pravilen datum kot MM.DD.YYYY (primer "12.31.1999")', email: 'Prosim, vnesite pravilen email naslov. Na primer "fred@domain.com".', url: "Prosim, vnesite pravilen URL kot http://www.example.com.", currencyDollar: "Prosim, vnesit epravilno vrednost €. Primer 100,00€ .", oneRequired: "Prosimo, vnesite nekaj za vsaj eno izmed teh polj.", errorPrefix: "Napaka: ", warningPrefix: "Opozorilo: ", noSpace: "To vnosno polje ne dopušča presledkov.", reqChkByNode: "Nič niste izbrali.", requiredChk: "To polje je obvezno", reqChkByName: "Prosim, izberite {label}.", match: "To polje se mora ujemati z poljem {matchName}", startDate: "datum začetka", endDate: "datum konca", currentDate: "trenuten datum", afterDate: "Datum bi moral biti isti ali po {label}.", beforeDate: "Datum bi moral biti isti ali pred {label}.", startMonth: "Prosim, vnesite začetni datum", sameMonth: "Ta dva datuma morata biti v istem mesecu - premeniti morate eno ali drugo.", creditcard: "Številka kreditne kartice ni pravilna. Preverite številko ali poskusite še enkrat. Vnešenih {length} znakov." }), Locale.define("sv-SE", "Date", { months: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"], months_abbr: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], days: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"], days_abbr: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"], dateOrder: ["year", "month", "date"], shortDate: "%Y-%m-%d", shortTime: "%H:%M", AM: "", PM: "", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "mindre än en minut sedan", minuteAgo: "ungefär en minut sedan", minutesAgo: "{delta} minuter sedan", hourAgo: "ungefär en timme sedan", hoursAgo: "ungefär {delta} timmar sedan", dayAgo: "1 dag sedan", daysAgo: "{delta} dagar sedan", lessThanMinuteUntil: "mindre än en minut sedan", minuteUntil: "ungefär en minut sedan", minutesUntil: "{delta} minuter sedan", hourUntil: "ungefär en timme sedan", hoursUntil: "ungefär {delta} timmar sedan", dayUntil: "1 dag sedan", daysUntil: "{delta} dagar sedan" }), Locale.define("sv-SE", "FormValidator", { required: "Fältet är obligatoriskt.", minLength: "Ange minst {minLength} tecken (du angav {length} tecken).", maxLength: "Ange högst {maxLength} tecken (du angav {length} tecken). ", integer: "Ange ett heltal i fältet. Tal med decimaler (t.ex. 1,25) är inte tillåtna.", numeric: 'Ange endast numeriska värden i detta fält (t.ex. "1" eller "1.1" eller "-1" eller "-1,1").', digits: "Använd endast siffror och skiljetecken i detta fält (till exempel ett telefonnummer med bindestreck tillåtet).", alpha: "Använd endast bokstäver (a-ö) i detta fält. Inga mellanslag eller andra tecken är tillåtna.", alphanum: "Använd endast bokstäver (a-ö) och siffror (0-9) i detta fält. Inga mellanslag eller andra tecken är tillåtna.", dateSuchAs: "Ange ett giltigt datum som t.ex. {date}", dateInFormatMDY: 'Ange ett giltigt datum som t.ex. YYYY-MM-DD (i.e. "1999-12-31")', email: 'Ange en giltig e-postadress. Till exempel "erik@domain.com".', url: "Ange en giltig webbadress som http://www.example.com.", currencyDollar: "Ange en giltig belopp. Exempelvis 100,00.", oneRequired: "Vänligen ange minst ett av dessa alternativ.", errorPrefix: "Fel: ", warningPrefix: "Varning: ", noSpace: "Det får inte finnas några mellanslag i detta fält.", reqChkByNode: "Inga objekt är valda.", requiredChk: "Detta är ett obligatoriskt fält.", reqChkByName: "Välj en {label}.", match: "Detta fält måste matcha {matchName}", startDate: "startdatumet", endDate: "slutdatum", currentDate: "dagens datum", afterDate: "Datumet bör vara samma eller senare än {label}.", beforeDate: "Datumet bör vara samma eller tidigare än {label}.", startMonth: "Välj en start månad", sameMonth: "Dessa två datum måste vara i samma månad - du måste ändra det ena eller det andra." }), Locale.define("sv-SE", "Number", { currency: { prefix: "SEK " } }).inherit("EU", "Number"), Locale.define("tr-TR", "Date", { months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], months_abbr: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], days_abbr: ["Pa", "Pzt", "Sa", "Ça", "Pe", "Cu", "Cmt"], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H.%M", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "bir dakikadan önce", minuteAgo: "yaklaşık bir dakika önce", minutesAgo: "{delta} dakika önce", hourAgo: "bir saat kadar önce", hoursAgo: "{delta} saat kadar önce", dayAgo: "bir gün önce", daysAgo: "{delta} gün önce", weekAgo: "bir hafta önce", weeksAgo: "{delta} hafta önce", monthAgo: "bir ay önce", monthsAgo: "{delta} ay önce", yearAgo: "bir yıl önce", yearsAgo: "{delta} yıl önce", lessThanMinuteUntil: "bir dakikadan az sonra", minuteUntil: "bir dakika kadar sonra", minutesUntil: "{delta} dakika sonra", hourUntil: "bir saat kadar sonra", hoursUntil: "{delta} saat kadar sonra", dayUntil: "bir gün sonra", daysUntil: "{delta} gün sonra", weekUntil: "bir hafta sonra", weeksUntil: "{delta} hafta sonra", monthUntil: "bir ay sonra", monthsUntil: "{delta} ay sonra", yearUntil: "bir yıl sonra", yearsUntil: "{delta} yıl sonra" }), Locale.define("tr-TR", "FormValidator", { required: "Bu alan zorunlu.", minLength: "Lütfen en az {minLength} karakter girin (siz {length} karakter girdiniz).", maxLength: "Lütfen en fazla {maxLength} karakter girin (siz {length} karakter girdiniz).", integer: "Lütfen bu alana sadece tamsayı girin. Ondalıklı sayılar (ör: 1.25) kullanılamaz.", numeric: 'Lütfen bu alana sadece sayısal değer girin (ör: "1", "1.1", "-1" ya da "-1.1").', digits: "Lütfen bu alana sadece sayısal değer ve noktalama işareti girin (örneğin, nokta ve tire içeren bir telefon numarası kullanılabilir).", alpha: "Lütfen bu alanda yalnızca harf kullanın. Boşluk ve diğer karakterler kullanılamaz.", alphanum: "Lütfen bu alanda sadece harf ve rakam kullanın. Boşluk ve diğer karakterler kullanılamaz.", dateSuchAs: "Lütfen geçerli bir tarih girin (Ör: {date})", dateInFormatMDY: 'Lütfen geçerli bir tarih girin (GG/AA/YYYY, ör: "31/12/1999")', email: 'Lütfen geçerli bir email adresi girin. Ör: "kemal@etikan.com".', url: "Lütfen geçerli bir URL girin. Ör: http://www.example.com.", currencyDollar: "Lütfen geçerli bir TL miktarı girin. Ör: 100,00 TL .", oneRequired: "Lütfen en az bir tanesini doldurun.", errorPrefix: "Hata: ", warningPrefix: "Uyarı: ", noSpace: "Bu alanda boşluk kullanılamaz.", reqChkByNode: "Hiçbir öğe seçilmemiş.", requiredChk: "Bu alan zorunlu.", reqChkByName: "Lütfen bir {label} girin.", match: "Bu alan, {matchName} alanıyla uyuşmalı", startDate: "başlangıç tarihi", endDate: "bitiş tarihi", currentDate: "bugünün tarihi", afterDate: "Tarih, {label} tarihiyle aynı gün ya da ondan sonra olmalıdır.", beforeDate: "Tarih, {label} tarihiyle aynı gün ya da ondan önce olmalıdır.", startMonth: "Lütfen bir başlangıç ayı seçin", sameMonth: "Bu iki tarih aynı ayda olmalı - bir tanesini değiştirmeniz gerekiyor.", creditcard: "Girdiğiniz kredi kartı numarası geçersiz. Lütfen kontrol edip tekrar deneyin. {length} hane girildi." }), Locale.define("tr-TR", "Number", { currency: { decimals: 0, suffix: " TL" } }).inherit("EU", "Number"),
    function() {
        var e = function(e, t, n, i, r) {
            var s = (e / 10).toInt(),
                a = e % 10;
            (e / 100).toInt();
            return 1 == s && e > 10 ? i : 1 == a ? t : a > 0 && a < 5 ? n : i
        };
        Locale.define("uk-UA", "Date", { months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], months_abbr: ["Січ", "Лют", "Бер", "Квіт", "Трав", "Черв", "Лип", "Серп", "Вер", "Жовт", "Лист", "Груд"], days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"], days_abbr: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"], dateOrder: ["date", "month", "year"], shortDate: "%d/%m/%Y", shortTime: "%H:%M", AM: "до полудня", PM: "по полудню", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "меньше хвилини тому", minuteAgo: "хвилину тому", minutesAgo: function(t) { return "{delta} " + e(t, "хвилину", "хвилини", "хвилин") + " тому" }, hourAgo: "годину тому", hoursAgo: function(t) { return "{delta} " + e(t, "годину", "години", "годин") + " тому" }, dayAgo: "вчора", daysAgo: function(t) { return "{delta} " + e(t, "день", "дня", "днів") + " тому" }, weekAgo: "тиждень тому", weeksAgo: function(t) { return "{delta} " + e(t, "тиждень", "тижні", "тижнів") + " тому" }, monthAgo: "місяць тому", monthsAgo: function(t) { return "{delta} " + e(t, "місяць", "місяці", "місяців") + " тому" }, yearAgo: "рік тому", yearsAgo: function(t) { return "{delta} " + e(t, "рік", "роки", "років") + " тому" }, lessThanMinuteUntil: "за мить", minuteUntil: "через хвилину", minutesUntil: function(t) { return "через {delta} " + e(t, "хвилину", "хвилини", "хвилин") }, hourUntil: "через годину", hoursUntil: function(t) { return "через {delta} " + e(t, "годину", "години", "годин") }, dayUntil: "завтра", daysUntil: function(t) { return "через {delta} " + e(t, "день", "дня", "днів") }, weekUntil: "через тиждень", weeksUntil: function(t) { return "через {delta} " + e(t, "тиждень", "тижні", "тижнів") }, monthUntil: "через місяць", monthesUntil: function(t) { return "через {delta} " + e(t, "місяць", "місяці", "місяців") }, yearUntil: "через рік", yearsUntil: function(t) { return "через {delta} " + e(t, "рік", "роки", "років") } })
    }(), Locale.define("uk-UA", "FormValidator", { required: "Це поле повинне бути заповненим.", minLength: "Введіть хоча б {minLength} символів (Ви ввели {length}).", maxLength: "Кількість символів не може бути більше {maxLength} (Ви ввели {length}).", integer: "Введіть в це поле число. Дробові числа (наприклад 1.25) не дозволені.", numeric: 'Введіть в це поле число (наприклад "1" або "1.1", або "-1", або "-1.1").', digits: "В цьому полі ви можете використовувати лише цифри і знаки пунктіації (наприклад, телефонний номер з знаками дефізу або з крапками).", alpha: "В цьому полі можна використовувати лише латинські літери (a-z). Пробіли і інші символи заборонені.", alphanum: "В цьому полі можна використовувати лише латинські літери (a-z) і цифри (0-9). Пробіли і інші символи заборонені.", dateSuchAs: "Введіть коректну дату {date}.", dateInFormatMDY: 'Введіть дату в форматі ММ/ДД/РРРР (наприклад "12/31/2009").', email: 'Введіть коректну адресу електронної пошти (наприклад "name@domain.com").', url: "Введіть коректне інтернет-посилання (наприклад http://www.example.com).", currencyDollar: 'Введіть суму в доларах (наприклад "$100.00").', oneRequired: "Заповніть одне з полів.", errorPrefix: "Помилка: ", warningPrefix: "Увага: ", noSpace: "Пробіли заборонені.", reqChkByNode: "Не відмічено жодного варіанту.", requiredChk: "Це поле повинне бути віміченим.", reqChkByName: "Будь ласка, відмітьте {label}.", match: "Це поле повинно відповідати {matchName}", startDate: "початкова дата", endDate: "кінцева дата", currentDate: "сьогоднішня дата", afterDate: "Ця дата повинна бути такою ж, або пізнішою за {label}.", beforeDate: "Ця дата повинна бути такою ж, або ранішою за {label}.", startMonth: "Будь ласка, виберіть початковий місяць", sameMonth: "Ці дати повинні відноситись одного і того ж місяця. Будь ласка, змініть одну з них.", creditcard: "Номер кредитної карти введений неправильно. Будь ласка, перевірте його. Введено {length} символів." }), Locale.define("zh-CHS", "Date", { months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], months_abbr: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], days_abbr: ["日", "一", "二", "三", "四", "五", "六"], dateOrder: ["year", "month", "date"], shortDate: "%Y-%m-%d", shortTime: "%I:%M%p", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "不到1分钟前", minuteAgo: "大约1分钟前", minutesAgo: "{delta}分钟之前", hourAgo: "大约1小时前", hoursAgo: "大约{delta}小时前", dayAgo: "1天前", daysAgo: "{delta}天前", weekAgo: "1星期前", weeksAgo: "{delta}星期前", monthAgo: "1个月前", monthsAgo: "{delta}个月前", yearAgo: "1年前", yearsAgo: "{delta}年前", lessThanMinuteUntil: "从现在开始不到1分钟", minuteUntil: "从现在开始約1分钟", minutesUntil: "从现在开始约{delta}分钟", hourUntil: "从现在开始1小时", hoursUntil: "从现在开始约{delta}小时", dayUntil: "从现在开始1天", daysUntil: "从现在开始{delta}天", weekUntil: "从现在开始1星期", weeksUntil: "从现在开始{delta}星期", monthUntil: "从现在开始一个月", monthsUntil: "从现在开始{delta}个月", yearUntil: "从现在开始1年", yearsUntil: "从现在开始{delta}年" }), Locale.define("zh-CHT", "Date", { months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], months_abbr: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], days_abbr: ["日", "一", "二", "三", "四", "五", "六"], dateOrder: ["year", "month", "date"], shortDate: "%Y-%m-%d", shortTime: "%I:%M%p", AM: "AM", PM: "PM", firstDayOfWeek: 1, ordinal: "", lessThanMinuteAgo: "不到1分鐘前", minuteAgo: "大約1分鐘前", minutesAgo: "{delta}分鐘之前", hourAgo: "大約1小時前", hoursAgo: "大約{delta}小時前", dayAgo: "1天前", daysAgo: "{delta}天前", weekAgo: "1星期前", weeksAgo: "{delta}星期前", monthAgo: "1个月前", monthsAgo: "{delta}个月前", yearAgo: "1年前", yearsAgo: "{delta}年前", lessThanMinuteUntil: "從現在開始不到1分鐘", minuteUntil: "從現在開始約1分鐘", minutesUntil: "從現在開始約{delta}分鐘", hourUntil: "從現在開始1小時", hoursUntil: "從現在開始約{delta}小時", dayUntil: "從現在開始1天", daysUntil: "從現在開始{delta}天", weekUntil: "從現在開始1星期", weeksUntil: "從現在開始{delta}星期", monthUntil: "從現在開始一個月", monthsUntil: "從現在開始{delta}個月", yearUntil: "從現在開始1年", yearsUntil: "從現在開始{delta}年" }), Locale.define("zh-CHS", "FormValidator", { required: "此项必填。", minLength: "请至少输入 {minLength} 个字符 (已输入 {length} 个)。", maxLength: "最多只能输入 {maxLength} 个字符 (已输入 {length} 个)。", integer: '请输入一个整数，不能包含小数点。例如："1", "200"。', numeric: '请输入一个数字，例如："1", "1.1", "-1", "-1.1"。', digits: "请输入由数字和标点符号组成的内容。例如电话号码。", alpha: "请输入 A-Z 的 26 个字母，不能包含空格或任何其他字符。", alphanum: "请输入 A-Z 的 26 个字母或 0-9 的 10 个数字，不能包含空格或任何其他字符。", dateSuchAs: "请输入合法的日期格式，如：{date}。", dateInFormatMDY: '请输入合法的日期格式，例如：YYYY-MM-DD ("2010-12-31")。', email: '请输入合法的电子信箱地址，例如："fred@domain.com"。', url: "请输入合法的 Url 地址，例如：http://www.example.com。", currencyDollar: "请输入合法的货币符号，例如：￥100.0", oneRequired: "请至少选择一项。", errorPrefix: "错误：", warningPrefix: "警告：", noSpace: "不能包含空格。", reqChkByNode: "未选择任何内容。", requiredChk: "此项必填。", reqChkByName: "请选择 {label}.", match: "必须与{matchName}相匹配", startDate: "起始日期", endDate: "结束日期", currentDate: "当前日期", afterDate: "日期必须等于或晚于 {label}.", beforeDate: "日期必须早于或等于 {label}.", startMonth: "请选择起始月份", sameMonth: "您必须修改两个日期中的一个，以确保它们在同一月份。", creditcard: "您输入的信用卡号码不正确。当前已输入{length}个字符。" }), Locale.define("zh-CHT", "FormValidator", { required: "此項必填。 ", minLength: "請至少輸入{minLength} 個字符(已輸入{length} 個)。 ", maxLength: "最多只能輸入{maxLength} 個字符(已輸入{length} 個)。 ", integer: '請輸入一個整數，不能包含小數點。例如："1", "200"。 ', numeric: '請輸入一個數字，例如："1", "1.1", "-1", "-1.1"。 ', digits: "請輸入由數字和標點符號組成的內容。例如電話號碼。 ", alpha: "請輸入AZ 的26 個字母，不能包含空格或任何其他字符。 ", alphanum: "請輸入AZ 的26 個字母或0-9 的10 個數字，不能包含空格或任何其他字符。 ", dateSuchAs: "請輸入合法的日期格式，如：{date}。 ", dateInFormatMDY: '請輸入合法的日期格式，例如：YYYY-MM-DD ("2010-12-31")。 ', email: '請輸入合法的電子信箱地址，例如："fred@domain.com"。 ', url: "請輸入合法的Url 地址，例如：http://www.example.com。 ", currencyDollar: "請輸入合法的貨幣符號，例如：￥100.0", oneRequired: "請至少選擇一項。 ", errorPrefix: "錯誤：", warningPrefix: "警告：", noSpace: "不能包含空格。 ", reqChkByNode: "未選擇任何內容。 ", requiredChk: "此項必填。 ", reqChkByName: "請選擇 {label}.", match: "必須與{matchName}相匹配", startDate: "起始日期", endDate: "結束日期", currentDate: "當前日期", afterDate: "日期必須等於或晚於{label}.", beforeDate: "日期必須早於或等於{label}.", startMonth: "請選擇起始月份", sameMonth: "您必須修改兩個日期中的一個，以確保它們在同一月份。 ", creditcard: "您輸入的信用卡號碼不正確。當前已輸入{length}個字符。 " }), Form.Validator.add("validate-currency-yuan", { errorMsg: function() { return Form.Validator.getMsg("currencyYuan") }, test: function(e) { return Form.Validator.getValidator("IsEmpty").test(e) || /^￥?\-?([1-9]{1}[0-9]{0,2}(\,[0-9]{3})*(\.[0-9]{0,2})?|[1-9]{1}\d*(\.[0-9]{0,2})?|0(\.[0-9]{0,2})?|(\.[0-9]{1,2})?)$/.test(e.get("value")) } }), Locale.define("zh-CHS", "Number", { currency: { prefix: "￥ " } }).inherit("en-US", "Number"), Locale.define("zh-CHT").inherit("zh-CHS", "Number"), Request.JSONP = new Class({
        Implements: [Chain, Events, Options],
        options: { onRequest: function(e) { this.options.log && window.console && console.log && console.log("JSONP retrieving script with url:" + e) }, onError: function(e) { this.options.log && window.console && console.warn && console.warn("JSONP " + e + " will fail in Internet Explorer, which enforces a 2083 bytes length limit on URIs") }, url: "", callbackKey: "callback", injectScript: document.head, data: "", link: "ignore", timeout: 0, log: !1 },
        initialize: function(e) { this.setOptions(e) },
        send: function(e) {
            if (!Request.prototype.check.call(this, e)) return this;
            this.running = !0;
            var t = typeOf(e);
            "string" != t && "element" != t || (e = { data: e }), e = Object.merge(this.options, e || {});
            var n = e.data;
            switch (typeOf(n)) {
                case "element":
                    n = document.id(n).toQueryString();
                    break;
                case "object":
                case "hash":
                    n = Object.toQueryString(n)
            }
            var i = this.index = Request.JSONP.counter++,
                r = "request_" + i,
                s = e.url + (e.url.test("\\?") ? "&" : "?") + e.callbackKey + "=Request.JSONP.request_map.request_" + i + (n ? "&" + n : "");
            s.length > 2083 && this.fireEvent("error", s), Request.JSONP.request_map[r] = function() { delete Request.JSONP.request_map[r], this.success(arguments, i) }.bind(this);
            var a = this.getScript(s).inject(e.injectScript);
            return this.fireEvent("request", [s, a]), e.timeout && this.timeout.delay(e.timeout, this), this
        },
        getScript: function(e) { return this.script || (this.script = new Element("script", { type: "text/javascript", async: !0, src: e })), this.script },
        success: function(e) { this.running && this.clear().fireEvent("complete", e).fireEvent("success", e).callChain() },
        cancel: function() { return this.running && this.clear().fireEvent("cancel"), this },
        isRunning: function() { return !!this.running },
        clear: function() { return this.running = !1, this.script && (this.script.destroy(), this.script = null), this },
        timeout: function() { return this.running && (this.running = !1, this.fireEvent("timeout", [this.script.get("src"), this.script]).fireEvent("failure").cancel()), this }
    }), Request.JSONP.counter = 0, Request.JSONP.request_map = {}, Request.implement({
        options: {
            initialDelay: 5e3,
            delay: 5e3,
            limit: 6e4
        },
        startTimer: function(e) { var t = function() { this.running || this.send({ data: e }) }; return this.lastDelay = this.options.initialDelay, this.timer = t.delay(this.lastDelay, this), this.completeCheck = function(e) { clearTimeout(this.timer), this.lastDelay = e ? this.options.delay : (this.lastDelay + this.options.delay).min(this.options.limit), this.timer = t.delay(this.lastDelay, this) }, this.addEvent("complete", this.completeCheck) },
        stopTimer: function() { return clearTimeout(this.timer), this.removeEvent("complete", this.completeCheck) }
    }), Request.Queue = new Class({
        Implements: [Options, Events],
        Binds: ["attach", "request", "complete", "cancel", "success", "failure", "exception"],
        options: { stopOnFailure: !0, autoAdvance: !0, concurrent: 1, requests: {} },
        initialize: function(e) {
            var t;
            e && (t = e.requests, delete e.requests), this.setOptions(e), this.requests = {}, this.queue = [], this.reqBinders = {}, t && this.addRequests(t)
        },
        addRequest: function(e, t) { return this.requests[e] = t, this.attach(e, t), this },
        addRequests: function(e) { return Object.each(e, function(e, t) { this.addRequest(t, e) }, this), this },
        getName: function(e) { return Object.keyOf(this.requests, e) },
        attach: function(e, t) { return t._groupSend ? this : (["request", "complete", "cancel", "success", "failure", "exception"].each(function(n) { this.reqBinders[e] || (this.reqBinders[e] = {}), this.reqBinders[e][n] = function() { this["on" + n.capitalize()].apply(this, [e, t].append(arguments)) }.bind(this), t.addEvent(n, this.reqBinders[e][n]) }, this), t._groupSend = t.send, t.send = function(n) { return this.send(e, n), t }.bind(this), this) },
        removeRequest: function(e) { var t = "object" == typeOf(e) ? this.getName(e) : e; return (t || "string" == typeOf(t)) && (e = this.requests[t]) ? (["request", "complete", "cancel", "success", "failure", "exception"].each(function(n) { e.removeEvent(n, this.reqBinders[t][n]) }, this), e.send = e._groupSend, delete e._groupSend, this) : this },
        getRunning: function() { return Object.filter(this.requests, function(e) { return e.running }) },
        isRunning: function() { return !!Object.keys(this.getRunning()).length },
        send: function(e, t) { var n = function() { this.requests[e]._groupSend(t), this.queue.erase(n) }.bind(this); return n.name = e, Object.keys(this.getRunning()).length >= this.options.concurrent || this.error && this.options.stopOnFailure ? this.queue.push(n) : n(), this },
        hasNext: function(e) { return e ? !!this.queue.filter(function(t) { return t.name == e }).length : !!this.queue.length },
        resume: function() { return this.error = !1, (this.options.concurrent - Object.keys(this.getRunning()).length).times(this.runNext, this), this },
        runNext: function(e) {
            if (!this.queue.length) return this;
            if (e) {
                var t;
                this.queue.each(function(n) { t || n.name != e || (t = !0, n()) })
            } else this.queue[0]();
            return this
        },
        runAll: function() { return this.queue.each(function(e) { e() }), this },
        clear: function(e) { return e ? this.queue = this.queue.map(function(t) { return t.name != e && t }).filter(function(e) { return e }) : this.queue.empty(), this },
        cancel: function(e) { return this.requests[e].cancel(), this },
        onRequest: function() { this.fireEvent("request", arguments) },
        onComplete: function() { this.fireEvent("complete", arguments), this.queue.length || this.fireEvent("end") },
        onCancel: function() { this.options.autoAdvance && !this.error && this.runNext(), this.fireEvent("cancel", arguments) },
        onSuccess: function() { this.options.autoAdvance && !this.error && this.runNext(), this.fireEvent("success", arguments) },
        onFailure: function() { this.error = !0, !this.options.stopOnFailure && this.options.autoAdvance && this.runNext(), this.fireEvent("failure", arguments) },
        onException: function() { this.error = !0, !this.options.stopOnFailure && this.options.autoAdvance && this.runNext(), this.fireEvent("exception", arguments) }
    }),
    function(e) {
        Array.implement({
            min: function() { return Math.min.apply(null, this) },
            max: function() { return Math.max.apply(null, this) },
            average: function() { return this.length ? this.sum() / this.length : 0 },
            sum: function() {
                var e = 0,
                    t = this.length;
                if (t)
                    for (; t--;) null != this[t] && (e += parseFloat(this[t]));
                return e
            },
            unique: function() { return [].combine(this) },
            shuffle: function() {
                for (var e = this.length; e && --e;) {
                    var t = this[e],
                        n = Math.floor(Math.random() * (e + 1));
                    this[e] = this[n], this[n] = t
                }
                return this
            },
            reduce: function(e, t) { for (var n = 0, i = this.length; n < i; n++) n in this && (t = void 0 === t ? this[n] : e.call(null, t, this[n], n, this)); return t },
            reduceRight: function(e, t) { for (var n = this.length; n--;) n in this && (t = void 0 === t ? this[n] : e.call(null, t, this[n], n, this)); return t },
            pluck: function(e) { return this.map(function(t) { return t[e] }) }
        })
    }(), Date.implement({ timeDiffInWords: function(e) { return Date.distanceOfTimeInWords(this, e || new Date) }, timeDiff: function(e, t) { null == e && (e = new Date); for (var n, i, r = ((e - this) / 1e3).floor().abs(), s = [], a = [60, 60, 24, 365, 0], o = ["s", "m", "h", "d", "y"], l = 0; l < a.length && (!l || r); l++) n = r, (i = a[l]) && (n = r % i, r = (r / i).floor()), s.unshift(n + (o[l] || "")); return s.join(t || ":") } }).extend({
        distanceOfTimeInWords: function(e, t) { return Date.getTimePhrase(((t - e) / 1e3).toInt()) },
        getTimePhrase: function(e) {
            var t = e < 0 ? "Until" : "Ago";
            e < 0 && (e *= -1);
            var n = { minute: 60, hour: 60, day: 24, week: 7, month: 52 / 12, year: 12, eon: 1 / 0 },
                i = "lessThanMinute";
            for (var r in n) {
                var s = n[r];
                if (e < 1.5 * s) { e > .75 * s && (i = r); break }
                e /= s, i = r + "s"
            }
            return e = e.round(), Date.getMsg(i + t, e).substitute({ delta: e })
        }
    }).defineParsers({
        re: /^(?:tod|tom|yes)/i,
        handler: function(e) {
            var t = (new Date).clearTime();
            switch (e[0]) {
                case "tom":
                    return t.increment();
                case "yes":
                    return t.decrement();
                default:
                    return t
            }
        }
    }, {
        re: /^(next|last) ([a-z]+)$/i,
        handler: function(e) {
            var t = (new Date).clearTime(),
                n = t.getDay(),
                i = Date.parseDay(e[2], !0),
                r = i - n;
            return i <= n && (r += 7), "last" == e[1] && (r -= 7), t.set("date", t.getDate() + r)
        }
    }).alias("timeAgoInWords", "timeDiffInWords"),
    function() {
        if (!this.Hash) {
            var e = this.Hash = new Type("Hash", function(e) { "hash" == typeOf(e) && (e = Object.clone(e.getClean())); for (var t in e) this[t] = e[t]; return this });
            this.$H = function(t) { return new e(t) }, e.implement({ forEach: function(e, t) { Object.forEach(this, e, t) }, getClean: function() { var e = {}; for (var t in this) this.hasOwnProperty(t) && (e[t] = this[t]); return e }, getLength: function() { var e = 0; for (var t in this) this.hasOwnProperty(t) && e++; return e } }), e.alias("each", "forEach"), e.implement({ has: Object.prototype.hasOwnProperty, keyOf: function(e) { return Object.keyOf(this, e) }, hasValue: function(e) { return Object.contains(this, e) }, extend: function(t) { return e.each(t || {}, function(t, n) { e.set(this, n, t) }, this), this }, combine: function(t) { return e.each(t || {}, function(t, n) { e.include(this, n, t) }, this), this }, erase: function(e) { return this.hasOwnProperty(e) && delete this[e], this }, get: function(e) { return this.hasOwnProperty(e) ? this[e] : null }, set: function(e, t) { return this[e] && !this.hasOwnProperty(e) || (this[e] = t), this }, empty: function() { return e.each(this, function(e, t) { delete this[t] }, this), this }, include: function(e, t) { return void 0 == this[e] && (this[e] = t), this }, map: function(t, n) { return new e(Object.map(this, t, n)) }, filter: function(t, n) { return new e(Object.filter(this, t, n)) }, every: function(e, t) { return Object.every(this, e, t) }, some: function(e, t) { return Object.some(this, e, t) }, getKeys: function() { return Object.keys(this) }, getValues: function() { return Object.values(this) }, toQueryString: function(e) { return Object.toQueryString(this, e) } }), e.alias({ indexOf: "keyOf", contains: "hasValue" })
        }
    }(), Hash.implement({ getFromPath: function(e) { return Object.getFromPath(this, e) }, cleanValues: function(e) { return new Hash(Object.cleanValues(this, e)) }, run: function() { Object.run(arguments) } }), Number.implement({
        format: function(e) {
            var t = this;
            e = e ? Object.clone(e) : {};
            var n = function(t) { return null != e[t] ? e[t] : Locale.get("Number." + t) },
                i = t < 0,
                r = n("decimal"),
                s = n("precision"),
                a = n("group"),
                o = n("decimals");
            if (i) {
                var l = n("negative") || {};
                null == l.prefix && null == l.suffix && (l.prefix = "-"), ["prefix", "suffix"].each(function(t) { l[t] && (e[t] = n(t) + l[t]) }), t = -t
            }
            var u = n("prefix"),
                h = n("suffix");
            "" !== o && o >= 0 && o <= 20 && (t = t.toFixed(o)), s >= 1 && s <= 21 && (t = (+t).toPrecision(s)), t += "";
            var c;
            if (!1 === n("scientific") && t.indexOf("e") > -1) {
                var d = t.split("e"),
                    m = +d[1];
                if (t = d[0].replace(".", ""), m < 0) {
                    for (m = -m - 1, c = d[0].indexOf("."), c > -1 && (m -= c - 1); m--;) t = "0" + t;
                    t = "0." + t
                } else
                    for (c = d[0].lastIndexOf("."), c > -1 && (m -= d[0].length - c - 1); m--;) t += "0"
            }
            if ("." != r && (t = t.replace(".", r)), a) {
                c = t.lastIndexOf(r), c = c > -1 ? c : t.length;
                for (var f = t.substring(c), p = c; p--;)(c - p - 1) % 3 == 0 && p != c - 1 && (f = a + f), f = t.charAt(p) + f;
                t = f
            }
            return u && (t = u + t), h && (t += h), t
        },
        formatCurrency: function(e) { var t = Locale.get("Number.currency") || {}; return null == t.scientific && (t.scientific = !1), t.decimals = null != e ? e : null == t.decimals ? 2 : t.decimals, this.format(t) },
        formatPercentage: function(e) { var t = Locale.get("Number.percentage") || {}; return null == t.suffix && (t.suffix = "%"), t.decimals = null != e ? e : null == t.decimals ? 2 : t.decimals, this.format(t) }
    }),
    function() {
        var e = function() { return this.get("value") },
            t = this.URI = new Class({
                Implements: Options,
                options: {},
                regex: /^(?:(\w+):)?(?:\/\/(?:(?:([^:@\/]*):?([^:@\/]*))?@)?(\[[A-Fa-f0-9:]+\]|[^:\/?#]*)(?::(\d*))?)?(\.\.?$|(?:[^?#\/]*\/)*)([^?#]*)(?:\?([^#]*))?(?:#(.*))?/,
                parts: ["scheme", "user", "password", "host", "port", "directory", "file", "query", "fragment"],
                schemes: { http: 80, https: 443, ftp: 21, rtsp: 554, mms: 1755, file: 0 },
                initialize: function(e, n) {
                    this.setOptions(n);
                    var i = this.options.base || t.base;
                    e || (e = i), e && e.parsed ? this.parsed = Object.clone(e.parsed) : this.set("value", e.href || e.toString(), !!i && new t(i))
                },
                parse: function(e, t) { var n = e.match(this.regex); return !!n && (n.shift(), this.merge(n.associate(this.parts), t)) },
                merge: function(e, t) { return !!(e && e.scheme || t && t.scheme) && (t && this.parts.every(function(n) { return !e[n] && (e[n] = t[n] || "", !0) }), e.port = e.port || this.schemes[e.scheme.toLowerCase()], e.directory = e.directory ? this.parseDirectory(e.directory, t ? t.directory : "") : "/", e) },
                parseDirectory: function(e, n) { if (e = ("/" == e.substr(0, 1) ? "" : n || "/") + e, !e.test(t.regs.directoryDot)) return e; var i = []; return e.replace(t.regs.endSlash, "").split("/").each(function(e) { ".." == e && i.length > 0 ? i.pop() : "." != e && i.push(e) }), i.join("/") + "/" },
                combine: function(e) { return e.value || e.scheme + "://" + (e.user ? e.user + (e.password ? ":" + e.password : "") + "@" : "") + (e.host || "") + (e.port && e.port != this.schemes[e.scheme] ? ":" + e.port : "") + (e.directory || "/") + (e.file || "") + (e.query ? "?" + e.query : "") + (e.fragment ? "#" + e.fragment : "") },
                set: function(e, n, i) {
                    if ("value" == e) {
                        var r = n.match(t.regs.scheme);
                        r && (r = r[1]), r && null == this.schemes[r.toLowerCase()] ? this.parsed = { scheme: r, value: n } : this.parsed = this.parse(n, (i || this).parsed) || (r ? { scheme: r, value: n } : { value: n })
                    } else "data" == e ? this.setData(n) : this.parsed[e] = n;
                    return this
                },
                get: function(e, t) {
                    switch (e) {
                        case "value":
                            return this.combine(this.parsed, !!t && t.parsed);
                        case "data":
                            return this.getData()
                    }
                    return this.parsed[e] || ""
                },
                go: function() { document.location.href = this.toString() },
                toURI: function() { return this },
                getData: function(e, t) { var n = this.get(t || "query"); if (!n && 0 !== n) return e ? null : {}; var i = n.parseQueryString(); return e ? i[e] : i },
                setData: function(e, t, n) {
                    if ("string" == typeof e) {
                        var i = this.getData();
                        i[arguments[0]] = arguments[1], e = i
                    } else t && (e = Object.merge(this.getData(null, n), e));
                    return this.set(n || "query", Object.toQueryString(e))
                },
                clearData: function(e) { return this.set(e || "query", "") },
                toString: e,
                valueOf: e
            });
        t.regs = { endSlash: /\/$/, scheme: /^(\w+):/, directoryDot: /\.\/|\.$/ }, t.base = new t(Array.convert(document.getElements("base[href]", !0)).getLast(), { base: document.location }), String.implement({ toURI: function(e) { return new t(this, e) } })
    }(), URI = Class.refactor(URI, {
        combine: function(e, t) {
            if (!t || e.scheme != t.scheme || e.host != t.host || e.port != t.port) return this.previous.apply(this, arguments);
            var n = e.file + (e.query ? "?" + e.query : "") + (e.fragment ? "#" + e.fragment : "");
            if (!t.directory) return (e.directory || (e.file ? "" : "./")) + n;
            var i, r = t.directory.split("/"),
                s = e.directory.split("/"),
                a = "",
                o = 0;
            for (i = 0; i < r.length && i < s.length && r[i] == s[i]; i++);
            for (o = 0; o < r.length - i - 1; o++) a += "../";
            for (o = i; o < s.length - 1; o++) a += s[o] + "/";
            return (a || (e.file ? "" : "./")) + n
        },
        toAbsolute: function(e) { return e = new URI(e), e && e.set("directory", "").set("file", ""), this.toRelative(e) },
        toRelative: function(e) { return this.get("value", new URI(e)) }
    }),
    function() {
        var e = this.Asset = {
            javascript: function(e, t) {
                t || (t = {});
                var n = new Element("script", { src: e, type: "text/javascript" }),
                    i = t.document || document,
                    r = t.onload || t.onLoad;
                return delete t.onload, delete t.onLoad, delete t.document, r && (n.addEventListener ? n.addEvent("load", r) : n.addEvent("readystatechange", function() {
                    ["loaded", "complete"].contains(this.readyState) && r.call(this)
                })), n.set(t).inject(i.head)
            },
            css: function(e, t) {
                t || (t = {});
                var n = t.onload || t.onLoad,
                    i = t.document || document,
                    r = t.timeout || 3e3;
                ["onload", "onLoad", "document"].each(function(e) { delete t[e] });
                var s = new Element("link", { type: "text/css", rel: "stylesheet", media: "screen", href: e }).setProperties(t).inject(i.head);
                if (n) {
                    var a = !1,
                        o = 0,
                        l = function() {
                            for (var e = document.styleSheets, t = 0; t < e.length; t++) {
                                var i = e[t],
                                    u = i.ownerNode ? i.ownerNode : i.owningElement;
                                if (u && u == s) return a = !0, n.call(s)
                            }
                            if (o++, !a && o < r / 50) return setTimeout(l, 50)
                        };
                    setTimeout(l, 0)
                }
                return s
            },
            image: function(e, t) {
                t || (t = {});
                var n = new Image,
                    i = document.id(n) || new Element("img");
                return ["load", "abort", "error"].each(function(e) {
                    var r = "on" + e,
                        s = "on" + e.capitalize(),
                        a = t[r] || t[s] || function() {};
                    delete t[s], delete t[r], n[r] = function() { n && (i.parentNode || (i.width = n.width, i.height = n.height), n = n.onload = n.onabort = n.onerror = null, a.delay(1, i, i), i.fireEvent(e, i, 1)) }
                }), n.src = i.src = e, n && n.complete && n.onload.delay(1), i.set(t)
            },
            images: function(t, n) {
                t = Array.convert(t);
                var i = function() {},
                    r = 0;
                return n = Object.merge({ onComplete: i, onProgress: i, onError: i, properties: {} }, n), new Elements(t.map(function(i, s) { return e.image(i, Object.append(n.properties, { onload: function() { r++, n.onProgress.call(this, r, s, i), r == t.length && n.onComplete() }, onerror: function() { r++, n.onError.call(this, r, s, i), r == t.length && n.onComplete() } })) }))
            }
        }
    }(),
    function() {
        var e = this.Color = new Type("Color", function(e, t) {
            switch (arguments.length >= 3 ? (t = "rgb", e = Array.slice(arguments, 0, 3)) : "string" == typeof e && (e = e.match(/rgb/) ? e.rgbToHex().hexToRgb(!0) : e.match(/hsb/) ? e.hsbToRgb() : e.hexToRgb(!0)), t = t || "rgb") {
                case "hsb":
                    var n = e;
                    e = e.hsbToRgb(), e.hsb = n;
                    break;
                case "hex":
                    e = e.hexToRgb(!0)
            }
            return e.rgb = e.slice(0, 3), e.hsb = e.hsb || e.rgbToHsb(), e.hex = e.rgbToHex(), Object.append(e, this)
        });
        e.implement({
            mix: function() {
                var t = Array.slice(arguments),
                    n = "number" == typeOf(t.getLast()) ? t.pop() : 50,
                    i = this.slice();
                return t.each(function(t) { t = new e(t); for (var r = 0; r < 3; r++) i[r] = Math.round(i[r] / 100 * (100 - n) + t[r] / 100 * n) }), new e(i, "rgb")
            },
            invert: function() { return new e(this.map(function(e) { return 255 - e })) },
            setHue: function(t) { return new e([t, this.hsb[1], this.hsb[2]], "hsb") },
            setSaturation: function(t) { return new e([this.hsb[0], t, this.hsb[2]], "hsb") },
            setBrightness: function(t) { return new e([this.hsb[0], this.hsb[1], t], "hsb") }
        }), this.$RGB = function(t, n, i) { return new e([t, n, i], "rgb") }, this.$HSB = function(t, n, i) { return new e([t, n, i], "hsb") }, this.$HEX = function(t) { return new e(t, "hex") }, Array.implement({
            rgbToHsb: function() {
                var e = this[0],
                    t = this[1],
                    n = this[2],
                    i = 0,
                    r = Math.max(e, t, n),
                    s = Math.min(e, t, n),
                    a = r - s,
                    o = r / 255,
                    l = 0 != r ? a / r : 0;
                if (0 != l) {
                    var u = (r - e) / a,
                        h = (r - t) / a,
                        c = (r - n) / a;
                    i = e == r ? c - h : t == r ? 2 + u - c : 4 + h - u, i /= 6, i < 0 && i++
                }
                return [Math.round(360 * i), Math.round(100 * l), Math.round(100 * o)]
            },
            hsbToRgb: function() {
                var e = Math.round(this[2] / 100 * 255);
                if (0 == this[1]) return [e, e, e];
                var t = this[0] % 360,
                    n = t % 60,
                    i = Math.round(this[2] * (100 - this[1]) / 1e4 * 255),
                    r = Math.round(this[2] * (6e3 - this[1] * n) / 6e5 * 255),
                    s = Math.round(this[2] * (6e3 - this[1] * (60 - n)) / 6e5 * 255);
                switch (Math.floor(t / 60)) {
                    case 0:
                        return [e, s, i];
                    case 1:
                        return [r, e, i];
                    case 2:
                        return [i, e, s];
                    case 3:
                        return [i, r, e];
                    case 4:
                        return [s, i, e];
                    case 5:
                        return [e, i, r]
                }
                return !1
            }
        }), String.implement({ rgbToHsb: function() { var e = this.match(/\d{1,3}/g); return e ? e.rgbToHsb() : null }, hsbToRgb: function() { var e = this.match(/\d{1,3}/g); return e ? e.hsbToRgb() : null } })
    }(),
    function() {
        this.Group = new Class({
            initialize: function() { this.instances = Array.flatten(arguments) },
            addEvent: function(e, t) {
                var n = this.instances,
                    i = n.length,
                    r = i,
                    s = new Array(i),
                    a = this;
                n.each(function(o, l) { o.addEvent(e, function() { s[l] || r--, s[l] = arguments, r || (t.call(a, n, o, s), r = i, s = new Array(i)) }) })
            }
        })
    }(), Hash.Cookie = new Class({ Extends: Cookie, options: { autoSave: !0 }, initialize: function(e, t) { this.parent(e, t), this.load() }, save: function() { var e = JSON.encode(this.hash); return !(!e || e.length > 4096) && ("{}" == e ? this.dispose() : this.write(e), !0) }, load: function() { return this.hash = new Hash(JSON.decode(this.read(), !0)), this } }), Hash.each(Hash.prototype, function(e, t) { "function" == typeof e && Hash.Cookie.implement(t, function() { var t = e.apply(this.hash, arguments); return this.options.autoSave && this.save(), t }) }),
    function() {
        var Swiff = this.Swiff = new Class({
            Implements: Options,
            options: { id: null, height: 1, width: 1, container: null, properties: {}, params: { quality: "high", allowScriptAccess: "always", wMode: "window", swLiveConnect: !0 }, callBacks: {}, vars: {} },
            toElement: function() { return this.object },
            initialize: function(e, t) {
                this.instance = "Swiff_" + String.uniqueID(), this.setOptions(t), t = this.options;
                var n = this.id = t.id || this.instance,
                    i = document.id(t.container);
                Swiff.CallBacks[this.instance] = {};
                var r = t.params,
                    s = t.vars,
                    a = t.callBacks,
                    o = Object.append({ height: t.height, width: t.width }, t.properties),
                    l = this;
                for (var u in a) Swiff.CallBacks[this.instance][u] = function(e) { return function() { return e.apply(l.object, arguments) } }(a[u]), s[u] = "Swiff.CallBacks." + this.instance + "." + u;
                r.flashVars = Object.toQueryString(s), "ActiveXObject" in window ? (o.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", r.movie = e) : o.type = "application/x-shockwave-flash", o.data = e;
                var h = '<object id="' + n + '"';
                for (var c in o) h += " " + c + '="' + o[c] + '"';
                h += ">";
                for (var d in r) r[d] && (h += '<param name="' + d + '" value="' + r[d] + '" />');
                h += "</object>", this.object = (i ? i.empty() : new Element("div")).set("html", h).firstChild
            },
            replaces: function(e) { return e = document.id(e, !0), e.parentNode.replaceChild(this.toElement(), e), this },
            inject: function(e) { return document.id(e, !0).appendChild(this.toElement()), this },
            remote: function() { return Swiff.remote.apply(Swiff, [this.toElement()].append(arguments)) }
        });
        Swiff.CallBacks = {}, Swiff.remote = function(obj, fn) { var rs = obj.CallFunction('<invoke name="' + fn + '" returntype="javascript">' + __flash__argumentsToXML(arguments, 2) + "</invoke>"); return eval(rs) }
    }(),
    function() {
        var e = this.Table = function() {
            this.length = 0;
            var e = [],
                t = [];
            this.set = function(n, i) {
                var r = e.indexOf(n);
                if (-1 == r) {
                    var s = e.length;
                    e[s] = n, t[s] = i, this.length++
                } else t[r] = i;
                return this
            }, this.get = function(n) { var i = e.indexOf(n); return -1 == i ? null : t[i] }, this.erase = function(n) { var i = e.indexOf(n); return -1 != i ? (this.length--, e.splice(i, 1), t.splice(i, 1)[0]) : null }, this.each = this.forEach = function(n, i) { for (var r = 0, s = this.length; r < s; r++) n.call(i, e[r], t[r], this) }
        };
        this.Type && new Type("Table", e)
    }();

/*
	mediaboxAdvanced v1.3.4b - The ultimate extension of Slimbox and Mediabox; an all-media script
	updated 2010.09.21
		(c) 2007-2010 John Einselen <http://iaian7.com>
	based on Slimbox v1.64 - The ultimate lightweight Lightbox clone
		(c) 2007-2008 Christophe Beyls <http://www.digitalia.be>
	MIT-style license.
*/

var Mediabox;

(function() {
    // Global variables, accessible to Mediabox only
    var options, images, activeImage, prevImage, nextImage, top, mTop, left, mLeft, winWidth, winHeight, fx, preload, preloadPrev = new Image(),
        preloadNext = new Image(),
        foxfix = false,
        iefix = false,
        // DOM elements
        overlay, center, image, bottom, captionSplit, title, caption, prevLink, number, nextLink,
        // Mediabox specific vars
        URL, WH, WHL, elrel, mediaWidth, mediaHeight, mediaType = "none",
        mediaSplit, mediaId = "mediaBox",
        mediaFmt, margin;

    /*	Initialization	*/

    window.addEvent("domready", function() {
        // Create and append the Mediabox HTML code at the bottom of the document
        document.id(document.body).adopt(
            $$([
                overlay = new Element("div", { id: "mbOverlay" }).addEvent("click", close),
                center = new Element("div", { id: "mbCenter" })
            ]).setStyle("display", "none")
        );

        image = new Element("div", { id: "mbImage" }).injectInside(center);
        bottom = new Element("div", { id: "mbBottom" }).injectInside(center).adopt(
            closeLink = new Element("a", { id: "mbCloseLink", href: "#" }).addEvent("click", close),
            nextLink = new Element("a", { id: "mbNextLink", href: "#" }).addEvent("click", next),
            prevLink = new Element("a", { id: "mbPrevLink", href: "#" }).addEvent("click", previous),
            title = new Element("div", { id: "mbTitle" }),
            number = new Element("div", { id: "mbNumber" }),
            caption = new Element("div", { id: "mbCaption" })
        );

        fx = {
            overlay: new Fx.Tween(overlay, { property: "opacity", duration: 360 }).set(0),
            image: new Fx.Tween(image, { property: "opacity", duration: 360, onComplete: captionAnimate }),
            bottom: new Fx.Tween(bottom, { property: "opacity", duration: 240 }).set(0)
        };
    });

    /*	API		*/

    Mediabox = {
        close: function() {
            close(); // Thanks to Yosha on the google group for fixing the close function API!
        },

        open: function(_images, startImage, _options) {
            options = $extend({
                text: ['<big>&laquo;</big>', '<big>&raquo;</big>', '<big>&times;</big>'], // Set "previous", "next", and "close" button content (HTML code should be written as entity codes or properly escaped)
                //				text: ['<big>Â«</big>','<big>Â»</big>','<big>Ã—</big>'],		// Set "previous", "next", and "close" button content (HTML code should be written as entity codes or properly escaped)
                //	example		text: ['<b>P</b>rev','<b>N</b>ext','<b>C</b>lose'],
                loop: false, // Allows to navigate between first and last images
                keyboard: true, // Enables keyboard control; escape key, left arrow, and right arrow
                alpha: true, // Adds 'x', 'c', 'p', and 'n' when keyboard control is also set to true
                stopKey: false, // Stops all default keyboard actions while overlay is open (such as up/down arrows)
                // Does not apply to iFrame content, does not affect mouse scrolling
                overlayOpacity: 0.7, // 1 is opaque, 0 is completely transparent (change the color in the CSS file)
                resizeOpening: true, // Determines if box opens small and grows (true) or starts at larger size (false)
                resizeDuration: 240, // Duration of each of the box resize animations (in milliseconds)
                resizeTransition: false, // Mootools transition effect (false leaves it at the default)
                initialWidth: 320, // Initial width of the box (in pixels)
                initialHeight: 180, // Initial height of the box (in pixels)
                defaultWidth: 640, // Default width of the box (in pixels) for undefined media (MP4, FLV, etc.)
                defaultHeight: 360, // Default height of the box (in pixels) for undefined media (MP4, FLV, etc.)
                showCaption: true, // Display the title and caption, true / false
                showCounter: true, // If true, a counter will only be shown if there is more than 1 image to display
                counterText: '({x} of {y})', // Translate or change as you wish
                //			Image options
                imgBackground: false, // Embed images as CSS background (true) or <img> tag (false)
                // CSS background is naturally non-clickable, preventing downloads
                // IMG tag allows automatic scaling for smaller screens
                // (all images have no-click code applied, albeit not Opera compatible. To remove, comment lines 212 and 822)
                imgPadding: 100, // Clearance necessary for images larger than the window size (only used when imgBackground is false)
                // Change this number only if the CSS style is significantly divergent from the original, and requires different sizes
                //			Inline options
                //				overflow: 'auto',			// If set, overides CSS settings for inline content only
                //			Global media options
                html5: 'true', // HTML5 settings for YouTube and Vimeo, false = off, true = on
                scriptaccess: 'true', // Allow script access to flash files
                fullscreen: 'true', // Use fullscreen
                fullscreenNum: '1', // 1 = true
                autoplay: 'true', // Plays the video as soon as it's opened
                autoplayNum: '1', // 1 = true
                autoplayYes: 'yes', // yes = true
                volume: '100', // 0-100, used for NonverBlaster and Quicktime players
                medialoop: 'true', // Loop video playback, true / false, used for NonverBlaster and Quicktime players
                bgcolor: '#000000', // Background color, used for flash and QT media
                wmode: 'opaque', // Background setting for Adobe Flash ('opaque' and 'transparent' are most common)
                //			NonverBlaster
                useNB: true, // use NonverBlaster (true) or JW Media Player (false) for .flv and .mp4 files
                playerpath: '/js/NonverBlaster.swf', // Path to NonverBlaster.swf
                controlColor: '0xFFFFFF', // set the controlbar color
                controlBackColor: '0x000000', // set the controlbar color
                showTimecode: 'false', // turn timecode display off or on
                //			JW Media Player settings and options
                JWplayerpath: '/js/player.swf', // Path to the mediaplayer.swf or flvplayer.swf file
                backcolor: '000000', // Base color for the controller, color name / hex value (0x000000)
                frontcolor: '999999', // Text and button color for the controller, color name / hex value (0x000000)
                lightcolor: '000000', // Rollover color for the controller, color name / hex value (0x000000)
                screencolor: '000000', // Rollover color for the controller, color name / hex value (0x000000)
                controlbar: 'over', // bottom, over, none (this setting is ignored when playing audio files)
                //			Quicktime options
                controller: 'true', // Show controller, true / false
                //			Flickr options
                flInfo: 'true', // Show title and info at video start
                //			Revver options
                revverID: '187866', // Revver affiliate ID, required for ad revinue sharing
                revverFullscreen: 'true', // Fullscreen option
                revverBack: '000000', // Background color
                revverFront: 'ffffff', // Foreground color
                revverGrad: '000000', // Gradation color
                //			Ustream options
                usViewers: 'true', // Show online viewer count (true/false)
                //			Youtube options
                ytBorder: '0', // Outline				(1=true, 0=false)
                ytColor1: '000000', // Outline color
                ytColor2: '333333', // Base interface color (highlight colors stay consistent)
                ytQuality: '&ap=%2526fmt%3D18', // Leave empty for standard quality, use '&ap=%2526fmt%3D18' for high quality, and '&ap=%2526fmt%3D22' for HD (note that not all videos are availible in high quality, and very few in HD)
                ytRel: '0', // Show related videos	(1=true, 0=false)
                ytInfo: '1', // Show video info		(1=true, 0=false)
                ytSearch: '0', // Show search field	(1=true, 0=false)
                //			Viddyou options
                vuPlayer: 'basic', // Use 'full' or 'basic' players
                //			Vimeo options
                vmTitle: '1', // Show video title
                vmByline: '1', // Show byline
                vmPortrait: '1', // Show author portrait
                vmColor: 'ffffff' // Custom controller colors, hex value minus the # sign, defult is 5ca0b5
            }, _options || {});

            prevLink.set('html', options.text[0]);
            nextLink.set('html', options.text[1]);
            closeLink.set('html', options.text[2]);

            margin = center.getStyle('padding-left').toInt() + image.getStyle('margin-left').toInt() + image.getStyle('padding-left').toInt();

            if ((Browser.Engine.gecko) && (Browser.Engine.version < 19)) { // Fixes Firefox 2 and Camino 1.6 incompatibility with opacity + flash
                foxfix = true;
                options.overlayOpacity = 1;
                overlay.className = 'mbOverlayFF';
            }

            if ((Browser.Engine.trident) && (Browser.Engine.version < 5)) { // Fixes IE 6 and earlier incompatibilities with CSS position: fixed;
                iefix = true;
                overlay.className = 'mbOverlayIE';
                overlay.setStyle("position", "absolute");
                position();
            }

            if (typeof _images == "string") { // Used for single images only, with URL and Title as first two arguments
                _images = [
                    [_images, startImage, _options]
                ];
                startImage = 0;
            }

            images = _images;
            options.loop = options.loop && (images.length > 1);

            size();
            setup(true);
            top = window.getScrollTop() + (window.getHeight() / 2);
            left = window.getScrollLeft() + (window.getWidth() / 2);
            fx.resize = new Fx.Morph(center, $extend({ duration: options.resizeDuration, onComplete: imageAnimate }, options.resizeTransition ? { transition: options.resizeTransition } : {}));
            center.setStyles({ top: top, left: left, width: options.initialWidth, height: options.initialHeight, marginTop: -(options.initialHeight / 2) - margin, marginLeft: -(options.initialWidth / 2) - margin, display: "" });
            fx.overlay.start(options.overlayOpacity);
            return changeImage(startImage);
        }
    };

    Element.implement({
        mediabox: function(_options, linkMapper) {
            $$(this).mediabox(_options, linkMapper); // The processing of a single element is similar to the processing of a collection with a single element

            return this;
        }
    });

    Elements.implement({
        /*
        	options:	Optional options object, see Mediabox.open()
        	linkMapper:	Optional function taking a link DOM element and an index as arguments and returning an array containing 3 elements:
        				the image URL and the image caption (may contain HTML)
        	linksFilter:Optional function taking a link DOM element and an index as arguments and returning true if the element is part of
        				the image collection that will be shown on click, false if not. "this" refers to the element that was clicked.
        				This function must always return true when the DOM element argument is "this".
        */
        mediabox: function(_options, linkMapper, linksFilter) {
            linkMapper = linkMapper || function(el) {
                elrel = el.rel.split(/[\[\]]/);
                elrel = elrel[1];
                return [el.href, el.title, elrel];
            };

            linksFilter = linksFilter || function() {
                return true;
            };

            var links = this;

            links.addEvent('contextmenu', function(e) {
                if (this.toString().match(/\.gif|\.jpg|\.jpeg|\.png/i)) e.stop();
            });

            links.removeEvents("click").addEvent("click", function() {
                // Build the list of images that will be displayed
                var filteredArray = links.filter(linksFilter, this);
                var filteredLinks = [];
                var filteredHrefs = [];

                filteredArray.each(function(item, index) {
                    if (filteredHrefs.indexOf(item.toString()) < 0) {
                        filteredLinks.include(filteredArray[index]);
                        filteredHrefs.include(filteredArray[index].toString());
                    };
                });

                return Mediabox.open(filteredLinks.map(linkMapper), filteredHrefs.indexOf(this.toString()), _options);
            });

            return links;
        }
    });

    /*	Internal functions	*/

    function position() {
        overlay.setStyles({ top: window.getScrollTop(), left: window.getScrollLeft() });
    }

    function size() {
        winWidth = window.getWidth();
        winHeight = window.getHeight();
        overlay.setStyles({ width: winWidth, height: winHeight });
    }

    function setup(open) {
        // Hides on-page objects and embeds while the overlay is open, nessesary to counteract Firefox stupidity
        if (Browser.Engine.gecko) {
            ["object", window.ie ? "select" : "embed"].forEach(function(tag) {
                Array.forEach(document.getElementsByTagName(tag), function(el) {
                    if (open) el._mediabox = el.style.visibility;
                    el.style.visibility = open ? "hidden" : el._mediabox;
                });
            });
        }

        overlay.style.display = open ? "" : "none";

        var fn = open ? "addEvent" : "removeEvent";
        if (iefix) window[fn]("scroll", position);
        window[fn]("resize", size);
        if (options.keyboard) document[fn]("keydown", keyDown);
    }

    function keyDown(event) {
        if (options.alpha) {
            switch (event.code) {
                case 27: // Esc
                case 88: // 'x'
                case 67: // 'c'
                    close();
                    break;
                case 37: // Left arrow
                case 80: // 'p'
                    previous();
                    break;
                case 39: // Right arrow
                case 78: // 'n'
                    next();
            }
        } else {
            switch (event.code) {
                case 27: // Esc
                    close();
                    break;
                case 37: // Left arrow
                    previous();
                    break;
                case 39: // Right arrow
                    next();
            }
        }
        if (options.stopKey) { return false; };
    }

    function previous() {
        return changeImage(prevImage);
    }

    function next() {
        return changeImage(nextImage);
    }

    function changeImage(imageIndex) {
        if (imageIndex >= 0) {
            image.set('html', '');
            activeImage = imageIndex;
            prevImage = ((activeImage || !options.loop) ? activeImage : images.length) - 1;
            nextImage = activeImage + 1;
            if (nextImage == images.length) nextImage = options.loop ? 0 : -1;
            stop();
            center.className = "mbLoading";

            /*	mediaboxAdvanced link formatting and media support	*/

            if (!images[imageIndex][2]) images[imageIndex][2] = ''; // Thanks to Leo Feyer for offering this fix
            WH = images[imageIndex][2].split(' ');
            WHL = WH.length;
            if (WHL > 1) {
                mediaWidth = (WH[WHL - 2].match("%")) ? (window.getWidth() * ((WH[WHL - 2].replace("%", "")) * 0.01)) + "px" : WH[WHL - 2] + "px";
                mediaHeight = (WH[WHL - 1].match("%")) ? (window.getHeight() * ((WH[WHL - 1].replace("%", "")) * 0.01)) + "px" : WH[WHL - 1] + "px";
            } else {
                mediaWidth = "";
                mediaHeight = "";
            }
            URL = images[imageIndex][0];
            URL = encodeURI(URL).replace("(", "%28").replace(")", "%29");
            captionSplit = images[activeImage][1].split('::');

            // Quietube and yFrog support
            if (URL.match(/quietube\.com/i)) {
                mediaSplit = URL.split('v.php/');
                URL = mediaSplit[1];
            } else if (URL.match(/\/\/yfrog/i)) {
                mediaType = (URL.substring(URL.length - 1));
                if (mediaType.match(/b|g|j|p|t/i)) mediaType = 'image';
                if (mediaType == 's') mediaType = 'flash';
                if (mediaType.match(/f|z/i)) mediaType = 'video';
                URL = URL + ":iphone";
            }

            /*	Specific Media Types	*/

            // GIF, JPG, PNG
            if (URL.match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i) || mediaType == 'image') {
                mediaType = 'img';
                URL = URL.replace(/twitpic\.com/i, "twitpic.com/show/full");
                preload = new Image();
                preload.onload = startEffect;
                preload.src = URL;
                // FLV, MP4
            } else if (URL.match(/\.flv|\.mp4/i) || mediaType == 'video') {
                mediaType = 'obj';
                mediaWidth = mediaWidth || options.defaultWidth;
                mediaHeight = mediaHeight || options.defaultHeight;
                if (options.useNB) {
                    preload = new Swiff('' + options.playerpath + '?mediaURL=' + URL + '&allowSmoothing=true&autoPlay=' + options.autoplay + '&buffer=6&showTimecode=' + options.showTimecode + '&loop=' + options.medialoop + '&controlColor=' + options.controlColor + '&controlBackColor=' + options.controlBackColor + '&defaultVolume=' + options.volume + '&scaleIfFullScreen=true&showScalingButton=true&crop=false', {
                        id: 'MediaboxSWF',
                        width: mediaWidth,
                        height: mediaHeight,
                        params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                    });
                } else {
                    preload = new Swiff('' + options.JWplayerpath + '?file=' + URL + '&backcolor=' + options.backcolor + '&frontcolor=' + options.frontcolor + '&lightcolor=' + options.lightcolor + '&screencolor=' + options.screencolor + '&autostart=' + options.autoplay + '&controlbar=' + options.controlbar, {
                        id: 'MediaboxSWF',
                        width: mediaWidth,
                        height: mediaHeight,
                        params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                    });
                }
                startEffect();
                // MP3, AAC
            } else if (URL.match(/\.mp3|\.aac|tweetmic\.com|tmic\.fm/i) || mediaType == 'audio') {
                mediaType = 'obj';
                mediaWidth = mediaWidth || options.defaultWidth;
                mediaHeight = mediaHeight || "20px";
                if (URL.match(/tweetmic\.com|tmic\.fm/i)) {
                    URL = URL.split('/');
                    URL[4] = URL[4] || URL[3];
                    URL = "http://media4.fjarnet.net/tweet/tweetmicapp-" + URL[4] + '.mp3';
                }
                if (options.useNB) {
                    preload = new Swiff('' + options.playerpath + '?mediaURL=' + URL + '&allowSmoothing=true&autoPlay=' + options.autoplay + '&buffer=6&showTimecode=' + options.showTimecode + '&loop=' + options.medialoop + '&controlColor=' + options.controlColor + '&controlBackColor=' + options.controlBackColor + '&defaultVolume=' + options.volume + '&scaleIfFullScreen=true&showScalingButton=true&crop=false', {
                        id: 'MediaboxSWF',
                        width: mediaWidth,
                        height: mediaHeight,
                        params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                    });
                } else {
                    preload = new Swiff('' + options.JWplayerpath + '?file=' + URL + '&backcolor=' + options.backcolor + '&frontcolor=' + options.frontcolor + '&lightcolor=' + options.lightcolor + '&screencolor=' + options.screencolor + '&autostart=' + options.autoplay, {
                        id: 'MediaboxSWF',
                        width: mediaWidth,
                        height: mediaHeight,
                        params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                    });
                }
                startEffect();
                // SWF
            } else if (URL.match(/\.swf/i) || mediaType == 'flash') {
                mediaType = 'obj';
                mediaWidth = mediaWidth || options.defaultWidth;
                mediaHeight = mediaHeight || options.defaultHeight;
                preload = new Swiff(URL, {
                    id: 'MediaboxSWF',
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // MOV, M4V, M4A, MP4, AIFF, etc.
            } else if (URL.match(/\.mov|\.m4v|\.m4a|\.aiff|\.avi|\.caf|\.dv|\.mid|\.m3u|\.mp3|\.mp2|\.mp4|\.qtz/i) || mediaType == 'qt') {
                mediaType = 'qt';
                mediaWidth = mediaWidth || options.defaultWidth;
                mediaHeight = (parseInt(mediaHeight) + 16) + "px" || options.defaultHeight;
                preload = new Quickie(URL, {
                    id: 'MediaboxQT',
                    width: mediaWidth,
                    height: mediaHeight,
                    container: 'mbImage',
                    attributes: { controller: options.controller, autoplay: options.autoplay, volume: options.volume, loop: options.medialoop, bgcolor: options.bgcolor }
                });
                startEffect();

                /*	Social Media Sites	*/

                // Blip.tv
            } else if (URL.match(/blip\.tv/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "640px";
                mediaHeight = mediaHeight || "390px";
                preload = new Swiff(URL, {
                    src: URL,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Break.com
            } else if (URL.match(/break\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "464px";
                mediaHeight = mediaHeight || "376px";
                mediaId = URL.match(/\d{6}/g);
                preload = new Swiff('http://embed.break.com/' + mediaId, {
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // DailyMotion
            } else if (URL.match(/dailymotion\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "480px";
                mediaHeight = mediaHeight || "381px";
                preload = new Swiff(URL, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Facebook
            } else if (URL.match(/facebook\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "320px";
                mediaHeight = mediaHeight || "240px";
                mediaSplit = URL.split('v=');
                mediaSplit = mediaSplit[1].split('&');
                mediaId = mediaSplit[0];
                preload = new Swiff('http://www.facebook.com/v/' + mediaId, {
                    movie: 'http://www.facebook.com/v/' + mediaId,
                    classid: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Flickr
            } else if (URL.match(/flickr\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "500px";
                mediaHeight = mediaHeight || "375px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[5];
                preload = new Swiff('http://www.flickr.com/apps/video/stewart.swf', {
                    id: mediaId,
                    classid: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { flashvars: 'photo_id=' + mediaId + '&amp;show_info_box=' + options.flInfo, wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // GameTrailers Video
            } else if (URL.match(/gametrailers\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "480px";
                mediaHeight = mediaHeight || "392px";
                mediaId = URL.match(/\d{5}/g);
                preload = new Swiff('http://www.gametrailers.com/remote_wrap.php?mid=' + mediaId, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Google Video
            } else if (URL.match(/google\.com\/videoplay/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "400px";
                mediaHeight = mediaHeight || "326px";
                mediaSplit = URL.split('=');
                mediaId = mediaSplit[1];
                preload = new Swiff('http://video.google.com/googleplayer.swf?docId=' + mediaId + '&autoplay=' + options.autoplayNum, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Megavideo - Thanks to Robert Jandreu for suggesting this code!
            } else if (URL.match(/megavideo\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "640px";
                mediaHeight = mediaHeight || "360px";
                mediaSplit = URL.split('=');
                mediaId = mediaSplit[1];
                preload = new Swiff('http://wwwstatic.megavideo.com/mv_player.swf?v=' + mediaId, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Metacafe
            } else if (URL.match(/metacafe\.com\/watch/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "400px";
                mediaHeight = mediaHeight || "345px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[4];
                preload = new Swiff('http://www.metacafe.com/fplayer/' + mediaId + '/.swf?playerVars=autoPlay=' + options.autoplayYes, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Myspace
            } else if (URL.match(/vids\.myspace\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "425px";
                mediaHeight = mediaHeight || "360px";
                preload = new Swiff(URL, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Revver
            } else if (URL.match(/revver\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "480px";
                mediaHeight = mediaHeight || "392px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[4];
                preload = new Swiff('http://flash.revver.com/player/1.0/player.swf?mediaId=' + mediaId + '&affiliateId=' + options.revverID + '&allowFullScreen=' + options.revverFullscreen + '&autoStart=' + options.autoplay + '&backColor=#' + options.revverBack + '&frontColor=#' + options.revverFront + '&gradColor=#' + options.revverGrad + '&shareUrl=revver', {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Rutube
            } else if (URL.match(/rutube\.ru/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "470px";
                mediaHeight = mediaHeight || "353px";
                mediaSplit = URL.split('=');
                mediaId = mediaSplit[1];
                preload = new Swiff('http://video.rutube.ru/' + mediaId, {
                    movie: 'http://video.rutube.ru/' + mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Seesmic
            } else if (URL.match(/seesmic\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "435px";
                mediaHeight = mediaHeight || "355px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[5];
                preload = new Swiff('http://seesmic.com/Standalone.swf?video=' + mediaId, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Tudou
            } else if (URL.match(/tudou\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "400px";
                mediaHeight = mediaHeight || "340px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[5];
                preload = new Swiff('http://www.tudou.com/v/' + mediaId, {
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Twitvcam
            } else if (URL.match(/twitcam\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "320px";
                mediaHeight = mediaHeight || "265px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[3];
                preload = new Swiff('http://static.livestream.com/chromelessPlayer/wrappers/TwitcamPlayer.swf?hash=' + mediaId, {
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Twiturm
            } else if (URL.match(/twiturm\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "402px";
                mediaHeight = mediaHeight || "48px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[3];
                preload = new Swiff('http://twiturm.com/flash/twiturm_mp3.swf?playerID=0&sf=' + mediaId, {
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Twitvid
            } else if (URL.match(/twitvid\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "600px";
                mediaHeight = mediaHeight || "338px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[3];
                preload = new Swiff('http://www.twitvid.com/player/' + mediaId, {
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Ustream.tv
            } else if (URL.match(/ustream\.tv/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "400px";
                mediaHeight = mediaHeight || "326px";
                preload = new Swiff(URL + '&amp;viewcount=' + options.usViewers + '&amp;autoplay=' + options.autoplay, {
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // YouKu
            } else if (URL.match(/youku\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "480px";
                mediaHeight = mediaHeight || "400px";
                mediaSplit = URL.split('id_');
                mediaId = mediaSplit[1];
                preload = new Swiff('http://player.youku.com/player.php/sid/' + mediaId + '=/v.swf', {
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // YouTube Video (now includes HTML5 option)
            } else if (URL.match(/youtube\.com\/watch/i)) {
                mediaSplit = URL.split('v=');
                if (options.html5) {
                    mediaType = 'url';
                    mediaWidth = mediaWidth || "640px";
                    mediaHeight = mediaHeight || "385px";
                    mediaId = "mediaId_" + new Date().getTime(); // Safari may not update iframe content with a static id.
                    preload = new Element('iframe', {
                        'src': 'http://www.youtube.com/embed/' + mediaSplit[1],
                        'id': mediaId,
                        'width': mediaWidth,
                        'height': mediaHeight,
                        'frameborder': 0
                    });
                    startEffect();
                } else {
                    mediaType = 'obj';
                    mediaId = mediaSplit[1];
                    if (mediaId.match(/fmt=22/i)) {
                        mediaFmt = '&ap=%2526fmt%3D22';
                        mediaWidth = mediaWidth || "640px";
                        mediaHeight = mediaHeight || "385px";
                    } else if (mediaId.match(/fmt=18/i)) {
                        mediaFmt = '&ap=%2526fmt%3D18';
                        mediaWidth = mediaWidth || "560px";
                        mediaHeight = mediaHeight || "345px";
                    } else {
                        mediaFmt = options.ytQuality;
                        mediaWidth = mediaWidth || "480px";
                        mediaHeight = mediaHeight || "295px";
                    }
                    preload = new Swiff('http://www.youtube.com/v/' + mediaId + '&autoplay=' + options.autoplayNum + '&fs=' + options.fullscreenNum + mediaFmt + '&border=' + options.ytBorder + '&color1=0x' + options.ytColor1 + '&color2=0x' + options.ytColor2 + '&rel=' + options.ytRel + '&showinfo=' + options.ytInfo + '&showsearch=' + options.ytSearch, {
                        id: mediaId,
                        width: mediaWidth,
                        height: mediaHeight,
                        params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                    });
                    startEffect();
                }
                // YouTube Playlist
            } else if (URL.match(/youtube\.com\/view/i)) {
                mediaType = 'obj';
                mediaSplit = URL.split('p=');
                mediaId = mediaSplit[1];
                mediaWidth = mediaWidth || "480px";
                mediaHeight = mediaHeight || "385px";
                preload = new Swiff('http://www.youtube.com/p/' + mediaId + '&autoplay=' + options.autoplayNum + '&fs=' + options.fullscreenNum + mediaFmt + '&border=' + options.ytBorder + '&color1=0x' + options.ytColor1 + '&color2=0x' + options.ytColor2 + '&rel=' + options.ytRel + '&showinfo=' + options.ytInfo + '&showsearch=' + options.ytSearch, {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Veoh
            } else if (URL.match(/veoh\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "410px";
                mediaHeight = mediaHeight || "341px";
                URL = URL.replace('%3D', '/');
                mediaSplit = URL.split('watch/');
                mediaId = mediaSplit[1];
                preload = new Swiff('http://www.veoh.com/static/swf/webplayer/WebPlayer.swf?version=AFrontend.5.5.2.1001&permalinkId=' + mediaId + '&player=videodetailsembedded&videoAutoPlay=' + options.AutoplayNum + '&id=anonymous', {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Viddler
            } else if (URL.match(/viddler\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "437px";
                mediaHeight = mediaHeight || "370px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[4];
                preload = new Swiff(URL, {
                    id: 'viddler_' + mediaId,
                    movie: URL,
                    classid: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen, id: 'viddler_' + mediaId, movie: URL }
                });
                startEffect();
                // Viddyou
            } else if (URL.match(/viddyou\.com/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "416px";
                mediaHeight = mediaHeight || "312px";
                mediaSplit = URL.split('=');
                mediaId = mediaSplit[1];
                preload = new Swiff('http://www.viddyou.com/get/v2_' + options.vuPlayer + '/' + mediaId + '.swf', {
                    id: mediaId,
                    movie: 'http://www.viddyou.com/get/v2_' + options.vuPlayer + '/' + mediaId + '.swf',
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();
                // Vimeo (now includes HTML5 option)
            } else if (URL.match(/vimeo\.com/i)) {
                mediaWidth = mediaWidth || "640px"; // site defualt: 400px
                mediaHeight = mediaHeight || "360px"; // site defualt: 225px
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[3];

                if (options.html5) {
                    mediaType = 'url';
                    mediaId = "mediaId_" + new Date().getTime(); // Safari may not update iframe content with a static id.
                    preload = new Element('iframe', {
                        'src': 'http://player.vimeo.com/video/' + mediaSplit[3] + '?portrait=' + options.vmPortrait,
                        'id': mediaId,
                        'width': mediaWidth,
                        'height': mediaHeight,
                        'frameborder': 0
                    });
                    startEffect();
                } else {
                    mediaType = 'obj';
                    preload = new Swiff('http://www.vimeo.com/moogaloop.swf?clip_id=' + mediaId + '&amp;server=www.vimeo.com&amp;fullscreen=' + options.fullscreenNum + '&amp;autoplay=' + options.autoplayNum + '&amp;show_title=' + options.vmTitle + '&amp;show_byline=' + options.vmByline + '&amp;show_portrait=' + options.vmPortrait + '&amp;color=' + options.vmColor, {
                        id: mediaId,
                        width: mediaWidth,
                        height: mediaHeight,
                        params: { wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                    });
                    startEffect();
                }
                // 12seconds
            } else if (URL.match(/12seconds\.tv/i)) {
                mediaType = 'obj';
                mediaWidth = mediaWidth || "430px";
                mediaHeight = mediaHeight || "360px";
                mediaSplit = URL.split('/');
                mediaId = mediaSplit[5];
                preload = new Swiff('http://embed.12seconds.tv/players/remotePlayer.swf', {
                    id: mediaId,
                    width: mediaWidth,
                    height: mediaHeight,
                    params: { flashvars: 'vid=' + mediaId + '', wmode: options.wmode, bgcolor: options.bgcolor, allowscriptaccess: options.scriptaccess, allowfullscreen: options.fullscreen }
                });
                startEffect();

                /*	Specific Content Types	*/

                // INLINE
            } else if (URL.match(/\#mb_/i)) {
                mediaType = 'inline';
                mediaWidth = mediaWidth || options.defaultWidth;
                mediaHeight = mediaHeight || options.defaultHeight;
                URLsplit = URL.split('#');
                preload = document.id(URLsplit[1]).get('html');
                startEffect();
                // HTML
            } else {
                mediaType = 'url';
                mediaWidth = mediaWidth || options.defaultWidth;
                mediaHeight = mediaHeight || options.defaultHeight;
                mediaId = "mediaId_" + new Date().getTime(); // Safari may not update iframe content with a static id.
                preload = new Element('iframe', {
                    'src': URL,
                    'id': mediaId,
                    'width': mediaWidth,
                    'height': mediaHeight,
                    'frameborder': 0
                });
                startEffect();
            }
        }
        return false;
    }

    function startEffect() {
        if (mediaType == "img") {
            mediaWidth = preload.width;
            mediaHeight = preload.height;
            if (options.imgBackground) {
                image.setStyles({ backgroundImage: "url(" + URL + ")", display: "" });
            } else { // Thanks to Dusan Medlin for fixing large 16x9 image errors in a 4x3 browser
                if (mediaHeight >= winHeight - options.imgPadding && (mediaHeight / winHeight) >= (mediaWidth / winWidth)) {
                    mediaHeight = winHeight - options.imgPadding;
                    mediaWidth = preload.width = parseInt((mediaHeight / preload.height) * mediaWidth);
                    preload.height = mediaHeight;
                } else if (mediaWidth >= winWidth - options.imgPadding && (mediaHeight / winHeight) < (mediaWidth / winWidth)) {
                    mediaWidth = winWidth - options.imgPadding;
                    mediaHeight = preload.height = parseInt((mediaWidth / preload.width) * mediaHeight);
                    preload.width = mediaWidth;
                }
                if (Browser.Engine.trident) preload = document.id(preload);
                preload.addEvent('mousedown', function(e) { e.stop(); }).addEvent('contextmenu', function(e) { e.stop(); });
                image.setStyles({ backgroundImage: "none", display: "" });
                preload.inject(image);
            }
        } else if (mediaType == "obj") {
            if (Browser.Plugins.Flash.version < 8) {
                image.setStyles({ backgroundImage: "none", display: "" });
                image.set('html', '<div id="mbError"><b>Error</b><br/>Adobe Flash is either not installed or not up to date, please visit <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" title="Get Flash" target="_new">Adobe.com</a> to download the free player.</div>');
                mediaWidth = options.DefaultWidth;
                mediaHeight = options.DefaultHeight;
            } else {
                image.setStyles({ backgroundImage: "none", display: "" });
                preload.inject(image);
            }
        } else if (mediaType == "qt") {
            image.setStyles({ backgroundImage: "none", display: "" });
            preload;
        } else if (mediaType == "inline") {
            //			if (options.overflow) image.setStyles({overflow: options.overflow});
            image.setStyles({ backgroundImage: "none", display: "" });
            image.set('html', preload);
        } else if (mediaType == "url") {
            image.setStyles({ backgroundImage: "none", display: "" });
            preload.inject(image);
        } else {
            image.setStyles({ backgroundImage: "none", display: "" });
            image.set('html', '<div id="mbError"><b>Error</b><br/>A file type error has occoured, please visit <a href="iaian7.com/webcode/mediaboxAdvanced" title="mediaboxAdvanced" target="_new">iaian7.com</a> or contact the website author for more information.</div>');
            mediaWidth = options.defaultWidth;
            mediaHeight = options.defaultHeight;
        }
        image.setStyles({ width: mediaWidth, height: mediaHeight });
        caption.setStyles({ width: mediaWidth });

        title.set('html', (options.showCaption) ? captionSplit[0] : "");
        caption.set('html', (options.showCaption && (captionSplit.length > 1)) ? captionSplit[1] : "");
        number.set('html', (options.showCounter && (images.length > 1)) ? options.counterText.replace(/{x}/, activeImage + 1).replace(/{y}/, images.length) : "");

        if ((prevImage >= 0) && (images[prevImage][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))) preloadPrev.src = images[prevImage][0].replace(/twitpic\.com/i, "twitpic.com/show/full");
        if ((nextImage >= 0) && (images[nextImage][0].match(/\.gif|\.jpg|\.jpeg|\.png|twitpic\.com/i))) preloadNext.src = images[nextImage][0].replace(/twitpic\.com/i, "twitpic.com/show/full");

        mediaWidth = image.offsetWidth;
        mediaHeight = image.offsetHeight + bottom.offsetHeight;
        if (mediaHeight >= top + top) { mTop = -top } else { mTop = -(mediaHeight / 2) };
        if (mediaWidth >= left + left) { mLeft = -left } else { mLeft = -(mediaWidth / 2) };
        if (options.resizeOpening) {
            fx.resize.start({ width: mediaWidth, height: mediaHeight, marginTop: mTop - margin, marginLeft: mLeft - margin });
        } else {
            center.setStyles({ width: mediaWidth, height: mediaHeight, marginTop: mTop - margin, marginLeft: mLeft - margin });
            imageAnimate();
        }
    }

    function imageAnimate() {
        fx.image.start(1);
    }

    function captionAnimate() {
        center.className = "";
        if (prevImage >= 0) prevLink.style.display = "";
        if (nextImage >= 0) nextLink.style.display = "";
        fx.bottom.start(1);
    }

    function stop() {
        if (preload) preload.onload = $empty;
        fx.resize.cancel();
        fx.image.cancel().set(0);
        fx.bottom.cancel().set(0);
        $$(prevLink, nextLink).setStyle("display", "none");
    }

    function close() {
        if (activeImage >= 0) {
            preload.onload = $empty;
            image.set('html', '');
            for (var f in fx) fx[f].cancel();
            center.setStyle("display", "none");
            fx.overlay.chain(setup).start(0);
        }
        return false;
    }
})();

/*	Autoload code block	*/

Mediabox.scanPage = function() {
    //	$$('#mb_').each(function(hide) { hide.set('display', 'none'); });
    var links = $$("a").filter(function(el) {
        return el.rel && el.rel.test(/^lightbox/i);
    });
    $$(links).mediabox({ /* Put custom options here */ }, null, function(el) {
        var rel0 = this.rel.replace(/[[]|]/gi, " ");
        var relsize = rel0.split(" ");
        return (this == el) || ((this.rel.length > 8) && el.rel.match(relsize[1]));
    });
};
window.addEvent("domready", Mediabox.scanPage);

window.addEvent('domready', function() {

    var playButton  = $( 'music-player-controller' );
    var recordIcon  = $('record-icon');
    var songTitle   = $('music-player-controller-title');
    var music       = new Howl({

        src: ['/wp-content/themes/double/media/audio/sample.mp3'],
        loop: true
        
      });      
    var musicTitle  = music._src.split( '/' );

    musicTitle      = musicTitle[ musicTitle.length - 1 ].split( '.' )[ 0 ];
    musicTitle      = musicTitle.replace( '-', ' ' );

    if( playButton.hasClass( 'on' ) ){

        playButton.text = 'On';
        songTitle.set( 'text', musicTitle );
        music.play();

    } else {

        playButton.text = 'Off';
        music.pause();

    }

    $('music-player-controller').addEvent('click', function( event ) {
         
        event.stop();
        this.toggleClass( 'on' );
        recordIcon.toggleClass( 'rotate' );
        if( this.hasClass( 'on' )){
            this.text = 'On';
            music.mute(false);
        } else {
            this.text = 'Off';
            music.mute(true);
        }

    });

    $$( '.navigation__pages__links' ).each( function( links ){

        links.addEvent( 'click', function( link ){

            link.stop();
            var pageTitle   = link.target.get( 'data-title' );
            var url         = link.target.get( 'href' );

            console.log( url );

            window.document.innerHTML =  new Request.HTML( { url: url } ).get();
            document.title = pageTitle;
            window.history.pushState( null,'', url );

        } );

    } );

});