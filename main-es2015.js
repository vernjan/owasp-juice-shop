(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    0: function(t, e, i) {
        t.exports = i("zUnb")
    },
    1: function(t, e) {},
    crnd: function(t, e) {
        function i(t) {
            return Promise.resolve().then((function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND",
                        e
                }
            ))
        }
        i.keys = function() {
            return []
        }
            ,
            i.resolve = i,
            t.exports = i,
            i.id = "crnd"
    },
    yLV6: function(t, e, i) {
        var a;
        !function(o, n, r, s) {
            "use strict";
            var c, l = ["", "webkit", "Moz", "MS", "ms", "o"], b = n.createElement("div"), u = Math.round, d = Math.abs, m = Date.now;
            function h(t, e, i) {
                return setTimeout(y(t, i), e)
            }
            function p(t, e, i) {
                return !!Array.isArray(t) && (f(t, i[e], i),
                    !0)
            }
            function f(t, e, i) {
                var a;
                if (t)
                    if (t.forEach)
                        t.forEach(e, i);
                    else if (void 0 !== t.length)
                        for (a = 0; a < t.length; )
                            e.call(i, t[a], a, t),
                                a++;
                    else
                        for (a in t)
                            t.hasOwnProperty(a) && e.call(i, t[a], a, t)
            }
            function g(t, e, i) {
                var a = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                return function() {
                    var e = new Error("get-stack-trace")
                        , i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
                        , n = o.console && (o.console.warn || o.console.log);
                    return n && n.call(o.console, a, i),
                        t.apply(this, arguments)
                }
            }
            c = "function" != typeof Object.assign ? function(t) {
                    if (null == t)
                        throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), i = 1; i < arguments.length; i++) {
                        var a = arguments[i];
                        if (null != a)
                            for (var o in a)
                                a.hasOwnProperty(o) && (e[o] = a[o])
                    }
                    return e
                }
                : Object.assign;
            var v = g((function(t, e, i) {
                    for (var a = Object.keys(e), o = 0; o < a.length; )
                        (!i || i && void 0 === t[a[o]]) && (t[a[o]] = e[a[o]]),
                            o++;
                    return t
                }
            ), "extend", "Use `assign`.")
                , C = g((function(t, e) {
                    return v(t, e, !0)
                }
            ), "merge", "Use `assign`.");
            function w(t, e, i) {
                var a, o = e.prototype;
                (a = t.prototype = Object.create(o)).constructor = t,
                    a._super = o,
                i && c(a, i)
            }
            function y(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }
            function D(t, e) {
                return "function" == typeof t ? t.apply(e && e[0] || void 0, e) : t
            }
            function S(t, e) {
                return void 0 === t ? e : t
            }
            function W(t, e, i) {
                f(_(e), (function(e) {
                        t.addEventListener(e, i, !1)
                    }
                ))
            }
            function V(t, e, i) {
                f(_(e), (function(e) {
                        t.removeEventListener(e, i, !1)
                    }
                ))
            }
            function x(t, e) {
                for (; t; ) {
                    if (t == e)
                        return !0;
                    t = t.parentNode
                }
                return !1
            }
            function I(t, e) {
                return t.indexOf(e) > -1
            }
            function _(t) {
                return t.trim().split(/\s+/g)
            }
            function k(t, e, i) {
                if (t.indexOf && !i)
                    return t.indexOf(e);
                for (var a = 0; a < t.length; ) {
                    if (i && t[a][i] == e || !i && t[a] === e)
                        return a;
                    a++
                }
                return -1
            }
            function O(t) {
                return Array.prototype.slice.call(t, 0)
            }
            function T(t, e, i) {
                for (var a = [], o = [], n = 0; n < t.length; ) {
                    var r = e ? t[n][e] : t[n];
                    k(o, r) < 0 && a.push(t[n]),
                        o[n] = r,
                        n++
                }
                return i && (a = e ? a.sort((function(t, i) {
                        return t[e] > i[e]
                    }
                )) : a.sort()),
                    a
            }
            function L(t, e) {
                for (var i, a, o = e[0].toUpperCase() + e.slice(1), n = 0; n < l.length; ) {
                    if ((a = (i = l[n]) ? i + o : e)in t)
                        return a;
                    n++
                }
            }
            var A = 1;
            function P(t) {
                var e = t.ownerDocument || t;
                return e.defaultView || e.parentWindow || o
            }
            var E = "ontouchstart"in o
                , R = void 0 !== L(o, "PointerEvent")
                , M = E && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
                , J = ["x", "y"]
                , H = ["clientX", "clientY"];
            function N(t, e) {
                var i = this;
                this.manager = t,
                    this.callback = e,
                    this.element = t.element,
                    this.target = t.options.inputTarget,
                    this.domHandler = function(e) {
                        D(t.options.enable, [t]) && i.handler(e)
                    }
                    ,
                    this.init()
            }
            function F(t, e, i) {
                var a = i.pointers.length
                    , o = i.changedPointers.length
                    , n = 1 & e && a - o == 0
                    , r = 12 & e && a - o == 0;
                i.isFirst = !!n,
                    i.isFinal = !!r,
                n && (t.session = {}),
                    i.eventType = e,
                    function(t, e) {
                        var i = t.session
                            , a = e.pointers
                            , o = a.length;
                        i.firstInput || (i.firstInput = B(e)),
                            o > 1 && !i.firstMultiple ? i.firstMultiple = B(e) : 1 === o && (i.firstMultiple = !1);
                        var n = i.firstInput
                            , r = i.firstMultiple
                            , s = r ? r.center : n.center
                            , c = e.center = U(a);
                        e.timeStamp = m(),
                            e.deltaTime = e.timeStamp - n.timeStamp,
                            e.angle = G(s, c),
                            e.distance = z(s, c),
                            function(t, e) {
                                var i = e.center
                                    , a = t.offsetDelta || {}
                                    , o = t.prevDelta || {}
                                    , n = t.prevInput || {};
                                1 !== e.eventType && 4 !== n.eventType || (o = t.prevDelta = {
                                    x: n.deltaX || 0,
                                    y: n.deltaY || 0
                                },
                                    a = t.offsetDelta = {
                                        x: i.x,
                                        y: i.y
                                    }),
                                    e.deltaX = o.x + (i.x - a.x),
                                    e.deltaY = o.y + (i.y - a.y)
                            }(i, e),
                            e.offsetDirection = Q(e.deltaX, e.deltaY);
                        var l, b, u = j(e.deltaTime, e.deltaX, e.deltaY);
                        e.overallVelocityX = u.x,
                            e.overallVelocityY = u.y,
                            e.overallVelocity = d(u.x) > d(u.y) ? u.x : u.y,
                            e.scale = r ? (l = r.pointers,
                            z((b = a)[0], b[1], H) / z(l[0], l[1], H)) : 1,
                            e.rotation = r ? function(t, e) {
                                return G(e[1], e[0], H) + G(t[1], t[0], H)
                            }(r.pointers, a) : 0,
                            e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
                            function(t, e) {
                                var i, a, o, n, r = t.lastInterval || e, s = e.timeStamp - r.timeStamp;
                                if (8 != e.eventType && (s > 25 || void 0 === r.velocity)) {
                                    var c = e.deltaX - r.deltaX
                                        , l = e.deltaY - r.deltaY
                                        , b = j(s, c, l);
                                    a = b.x,
                                        o = b.y,
                                        i = d(b.x) > d(b.y) ? b.x : b.y,
                                        n = Q(c, l),
                                        t.lastInterval = e
                                } else
                                    i = r.velocity,
                                        a = r.velocityX,
                                        o = r.velocityY,
                                        n = r.direction;
                                e.velocity = i,
                                    e.velocityX = a,
                                    e.velocityY = o,
                                    e.direction = n
                            }(i, e);
                        var h = t.element;
                        x(e.srcEvent.target, h) && (h = e.srcEvent.target),
                            e.target = h
                    }(t, i),
                    t.emit("hammer.input", i),
                    t.recognize(i),
                    t.session.prevInput = i
            }
            function B(t) {
                for (var e = [], i = 0; i < t.pointers.length; )
                    e[i] = {
                        clientX: u(t.pointers[i].clientX),
                        clientY: u(t.pointers[i].clientY)
                    },
                        i++;
                return {
                    timeStamp: m(),
                    pointers: e,
                    center: U(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                }
            }
            function U(t) {
                var e = t.length;
                if (1 === e)
                    return {
                        x: u(t[0].clientX),
                        y: u(t[0].clientY)
                    };
                for (var i = 0, a = 0, o = 0; o < e; )
                    i += t[o].clientX,
                        a += t[o].clientY,
                        o++;
                return {
                    x: u(i / e),
                    y: u(a / e)
                }
            }
            function j(t, e, i) {
                return {
                    x: e / t || 0,
                    y: i / t || 0
                }
            }
            function Q(t, e) {
                return t === e ? 1 : d(t) >= d(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : 16
            }
            function z(t, e, i) {
                i || (i = J);
                var a = e[i[0]] - t[i[0]]
                    , o = e[i[1]] - t[i[1]];
                return Math.sqrt(a * a + o * o)
            }
            function G(t, e, i) {
                return i || (i = J),
                180 * Math.atan2(e[i[1]] - t[i[1]], e[i[0]] - t[i[0]]) / Math.PI
            }
            N.prototype = {
                handler: function() {},
                init: function() {
                    this.evEl && W(this.element, this.evEl, this.domHandler),
                    this.evTarget && W(this.target, this.evTarget, this.domHandler),
                    this.evWin && W(P(this.element), this.evWin, this.domHandler)
                },
                destroy: function() {
                    this.evEl && V(this.element, this.evEl, this.domHandler),
                    this.evTarget && V(this.target, this.evTarget, this.domHandler),
                    this.evWin && V(P(this.element), this.evWin, this.domHandler)
                }
            };
            var q = {
                mousedown: 1,
                mousemove: 2,
                mouseup: 4
            };
            function Y() {
                this.evEl = "mousedown",
                    this.evWin = "mousemove mouseup",
                    this.pressed = !1,
                    N.apply(this, arguments)
            }
            w(Y, N, {
                handler: function(t) {
                    var e = q[t.type];
                    1 & e && 0 === t.button && (this.pressed = !0),
                    2 & e && 1 !== t.which && (e = 4),
                    this.pressed && (4 & e && (this.pressed = !1),
                        this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: "mouse",
                            srcEvent: t
                        }))
                }
            });
            var K = {
                pointerdown: 1,
                pointermove: 2,
                pointerup: 4,
                pointercancel: 8,
                pointerout: 8
            }
                , X = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            }
                , $ = "pointerdown"
                , Z = "pointermove pointerup pointercancel";
            function tt() {
                this.evEl = $,
                    this.evWin = Z,
                    N.apply(this, arguments),
                    this.store = this.manager.session.pointerEvents = []
            }
            o.MSPointerEvent && !o.PointerEvent && ($ = "MSPointerDown",
                Z = "MSPointerMove MSPointerUp MSPointerCancel"),
                w(tt, N, {
                    handler: function(t) {
                        var e = this.store
                            , i = !1
                            , a = t.type.toLowerCase().replace("ms", "")
                            , o = K[a]
                            , n = X[t.pointerType] || t.pointerType
                            , r = "touch" == n
                            , s = k(e, t.pointerId, "pointerId");
                        1 & o && (0 === t.button || r) ? s < 0 && (e.push(t),
                            s = e.length - 1) : 12 & o && (i = !0),
                        s < 0 || (e[s] = t,
                            this.callback(this.manager, o, {
                                pointers: e,
                                changedPointers: [t],
                                pointerType: n,
                                srcEvent: t
                            }),
                        i && e.splice(s, 1))
                    }
                });
            var et = {
                touchstart: 1,
                touchmove: 2,
                touchend: 4,
                touchcancel: 8
            };
            function it() {
                this.evTarget = "touchstart",
                    this.evWin = "touchstart touchmove touchend touchcancel",
                    this.started = !1,
                    N.apply(this, arguments)
            }
            function at(t, e) {
                var i = O(t.touches)
                    , a = O(t.changedTouches);
                return 12 & e && (i = T(i.concat(a), "identifier", !0)),
                    [i, a]
            }
            w(it, N, {
                handler: function(t) {
                    var e = et[t.type];
                    if (1 === e && (this.started = !0),
                        this.started) {
                        var i = at.call(this, t, e);
                        12 & e && i[0].length - i[1].length == 0 && (this.started = !1),
                            this.callback(this.manager, e, {
                                pointers: i[0],
                                changedPointers: i[1],
                                pointerType: "touch",
                                srcEvent: t
                            })
                    }
                }
            });
            var ot = {
                touchstart: 1,
                touchmove: 2,
                touchend: 4,
                touchcancel: 8
            };
            function nt() {
                this.evTarget = "touchstart touchmove touchend touchcancel",
                    this.targetIds = {},
                    N.apply(this, arguments)
            }
            function rt(t, e) {
                var i = O(t.touches)
                    , a = this.targetIds;
                if (3 & e && 1 === i.length)
                    return a[i[0].identifier] = !0,
                        [i, i];
                var o, n, r = O(t.changedTouches), s = [], c = this.target;
                if (n = i.filter((function(t) {
                        return x(t.target, c)
                    }
                )),
                1 === e)
                    for (o = 0; o < n.length; )
                        a[n[o].identifier] = !0,
                            o++;
                for (o = 0; o < r.length; )
                    a[r[o].identifier] && s.push(r[o]),
                    12 & e && delete a[r[o].identifier],
                        o++;
                return s.length ? [T(n.concat(s), "identifier", !0), s] : void 0
            }
            function st() {
                N.apply(this, arguments);
                var t = y(this.handler, this);
                this.touch = new nt(this.manager,t),
                    this.mouse = new Y(this.manager,t),
                    this.primaryTouch = null,
                    this.lastTouches = []
            }
            function ct(t, e) {
                1 & t ? (this.primaryTouch = e.changedPointers[0].identifier,
                    lt.call(this, e)) : 12 & t && lt.call(this, e)
            }
            function lt(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    this.lastTouches.push(i);
                    var a = this.lastTouches;
                    setTimeout((function() {
                            var t = a.indexOf(i);
                            t > -1 && a.splice(t, 1)
                        }
                    ), 2500)
                }
            }
            function bt(t) {
                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, a = 0; a < this.lastTouches.length; a++) {
                    var o = this.lastTouches[a]
                        , n = Math.abs(e - o.x)
                        , r = Math.abs(i - o.y);
                    if (n <= 25 && r <= 25)
                        return !0
                }
                return !1
            }
            w(nt, N, {
                handler: function(t) {
                    var e = ot[t.type]
                        , i = rt.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: t
                    })
                }
            }),
                w(st, N, {
                    handler: function(t, e, i) {
                        var a = "mouse" == i.pointerType;
                        if (!(a && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                            if ("touch" == i.pointerType)
                                ct.call(this, e, i);
                            else if (a && bt.call(this, i))
                                return;
                            this.callback(t, e, i)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(),
                            this.mouse.destroy()
                    }
                });
            var ut = L(b.style, "touchAction")
                , dt = void 0 !== ut
                , mt = function() {
                if (!dt)
                    return !1;
                var t = {}
                    , e = o.CSS && o.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
                        t[i] = !e || o.CSS.supports("touch-action", i)
                    }
                )),
                    t
            }();
            function ht(t, e) {
                this.manager = t,
                    this.set(e)
            }
            function pt(t) {
                this.options = c({}, this.defaults, t || {}),
                    this.id = A++,
                    this.manager = null,
                    this.options.enable = S(this.options.enable, !0),
                    this.state = 1,
                    this.simultaneous = {},
                    this.requireFail = []
            }
            function ft(t) {
                return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
            }
            function gt(t) {
                return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : ""
            }
            function vt(t, e) {
                var i = e.manager;
                return i ? i.get(t) : t
            }
            function Ct() {
                pt.apply(this, arguments)
            }
            function wt() {
                Ct.apply(this, arguments),
                    this.pX = null,
                    this.pY = null
            }
            function yt() {
                Ct.apply(this, arguments)
            }
            function Dt() {
                pt.apply(this, arguments),
                    this._timer = null,
                    this._input = null
            }
            function St() {
                Ct.apply(this, arguments)
            }
            function Wt() {
                Ct.apply(this, arguments)
            }
            function Vt() {
                pt.apply(this, arguments),
                    this.pTime = !1,
                    this.pCenter = !1,
                    this._timer = null,
                    this._input = null,
                    this.count = 0
            }
            function xt(t, e) {
                return (e = e || {}).recognizers = S(e.recognizers, xt.defaults.preset),
                    new It(t,e)
            }
            function It(t, e) {
                var i;
                this.options = c({}, xt.defaults, e || {}),
                    this.options.inputTarget = this.options.inputTarget || t,
                    this.handlers = {},
                    this.session = {},
                    this.recognizers = [],
                    this.oldCssProps = {},
                    this.element = t,
                    this.input = new ((i = this).options.inputClass || (R ? tt : M ? nt : E ? st : Y))(i,F),
                    this.touchAction = new ht(this,this.options.touchAction),
                    _t(this, !0),
                    f(this.options.recognizers, (function(t) {
                            var e = this.add(new t[0](t[1]));
                            t[2] && e.recognizeWith(t[2]),
                            t[3] && e.requireFailure(t[3])
                        }
                    ), this)
            }
            function _t(t, e) {
                var i, a = t.element;
                a.style && (f(t.options.cssProps, (function(o, n) {
                        i = L(a.style, n),
                            e ? (t.oldCssProps[i] = a.style[i],
                                a.style[i] = o) : a.style[i] = t.oldCssProps[i] || ""
                    }
                )),
                e || (t.oldCssProps = {}))
            }
            ht.prototype = {
                set: function(t) {
                    "compute" == t && (t = this.compute()),
                    dt && this.manager.element.style && mt[t] && (this.manager.element.style[ut] = t),
                        this.actions = t.toLowerCase().trim()
                },
                update: function() {
                    this.set(this.manager.options.touchAction)
                },
                compute: function() {
                    var t = [];
                    return f(this.manager.recognizers, (function(e) {
                            D(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                        }
                    )),
                        function(t) {
                            if (I(t, "none"))
                                return "none";
                            var e = I(t, "pan-x")
                                , i = I(t, "pan-y");
                            return e && i ? "none" : e || i ? e ? "pan-x" : "pan-y" : I(t, "manipulation") ? "manipulation" : "auto"
                        }(t.join(" "))
                },
                preventDefaults: function(t) {
                    var e = t.srcEvent
                        , i = t.offsetDirection;
                    if (this.manager.session.prevented)
                        e.preventDefault();
                    else {
                        var a = this.actions
                            , o = I(a, "none") && !mt.none
                            , n = I(a, "pan-y") && !mt["pan-y"]
                            , r = I(a, "pan-x") && !mt["pan-x"];
                        if (o && 1 === t.pointers.length && t.distance < 2 && t.deltaTime < 250)
                            return;
                        if (!r || !n)
                            return o || n && 6 & i || r && 24 & i ? this.preventSrc(e) : void 0
                    }
                },
                preventSrc: function(t) {
                    this.manager.session.prevented = !0,
                        t.preventDefault()
                }
            },
                pt.prototype = {
                    defaults: {},
                    set: function(t) {
                        return c(this.options, t),
                        this.manager && this.manager.touchAction.update(),
                            this
                    },
                    recognizeWith: function(t) {
                        if (p(t, "recognizeWith", this))
                            return this;
                        var e = this.simultaneous;
                        return e[(t = vt(t, this)).id] || (e[t.id] = t,
                            t.recognizeWith(this)),
                            this
                    },
                    dropRecognizeWith: function(t) {
                        return p(t, "dropRecognizeWith", this) ? this : (t = vt(t, this),
                            delete this.simultaneous[t.id],
                            this)
                    },
                    requireFailure: function(t) {
                        if (p(t, "requireFailure", this))
                            return this;
                        var e = this.requireFail;
                        return -1 === k(e, t = vt(t, this)) && (e.push(t),
                            t.requireFailure(this)),
                            this
                    },
                    dropRequireFailure: function(t) {
                        if (p(t, "dropRequireFailure", this))
                            return this;
                        t = vt(t, this);
                        var e = k(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1),
                            this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        var e = this
                            , i = this.state;
                        function a(i) {
                            e.manager.emit(i, t)
                        }
                        i < 8 && a(e.options.event + ft(i)),
                            a(e.options.event),
                        t.additionalEvent && a(t.additionalEvent),
                        i >= 8 && a(e.options.event + ft(i))
                    },
                    tryEmit: function(t) {
                        if (this.canEmit())
                            return this.emit(t);
                        this.state = 32
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length; ) {
                            if (!(33 & this.requireFail[t].state))
                                return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = c({}, t);
                        if (!D(this.options.enable, [this, e]))
                            return this.reset(),
                                void (this.state = 32);
                        56 & this.state && (this.state = 1),
                            this.state = this.process(e),
                        30 & this.state && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {}
                },
                w(Ct, pt, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state
                            , i = t.eventType
                            , a = 6 & e
                            , o = this.attrTest(t);
                        return a && (8 & i || !o) ? 16 | e : a || o ? 4 & i ? 8 | e : 2 & e ? 4 | e : 2 : 32
                    }
                }),
                w(wt, Ct, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var t = this.options.direction
                            , e = [];
                        return 6 & t && e.push("pan-y"),
                        24 & t && e.push("pan-x"),
                            e
                    },
                    directionTest: function(t) {
                        var e = this.options
                            , i = !0
                            , a = t.distance
                            , o = t.direction
                            , n = t.deltaX
                            , r = t.deltaY;
                        return o & e.direction || (6 & e.direction ? (o = 0 === n ? 1 : n < 0 ? 2 : 4,
                            i = n != this.pX,
                            a = Math.abs(t.deltaX)) : (o = 0 === r ? 1 : r < 0 ? 8 : 16,
                            i = r != this.pY,
                            a = Math.abs(t.deltaY))),
                            t.direction = o,
                        i && a > e.threshold && o & e.direction
                    },
                    attrTest: function(t) {
                        return Ct.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX,
                            this.pY = t.deltaY;
                        var e = gt(t.direction);
                        e && (t.additionalEvent = this.options.event + e),
                            this._super.emit.call(this, t)
                    }
                }),
                w(yt, Ct, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return ["none"]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(t) {
                        1 !== t.scale && (t.additionalEvent = this.options.event + (t.scale < 1 ? "in" : "out")),
                            this._super.emit.call(this, t)
                    }
                }),
                w(Dt, pt, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return ["auto"]
                    },
                    process: function(t) {
                        var e = this.options
                            , i = t.pointers.length === e.pointers
                            , a = t.distance < e.threshold
                            , o = t.deltaTime > e.time;
                        if (this._input = t,
                        !a || !i || 12 & t.eventType && !o)
                            this.reset();
                        else if (1 & t.eventType)
                            this.reset(),
                                this._timer = h((function() {
                                        this.state = 8,
                                            this.tryEmit()
                                    }
                                ), e.time, this);
                        else if (4 & t.eventType)
                            return 8;
                        return 32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = m(),
                            this.manager.emit(this.options.event, this._input)))
                    }
                }),
                w(St, Ct, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return ["none"]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                    }
                }),
                w(Wt, Ct, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return wt.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, i = this.options.direction;
                        return 30 & i ? e = t.overallVelocity : 6 & i ? e = t.overallVelocityX : 24 & i && (e = t.overallVelocityY),
                        this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && d(e) > this.options.velocity && 4 & t.eventType
                    },
                    emit: function(t) {
                        var e = gt(t.offsetDirection);
                        e && this.manager.emit(this.options.event + e, t),
                            this.manager.emit(this.options.event, t)
                    }
                }),
                w(Vt, pt, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return ["manipulation"]
                    },
                    process: function(t) {
                        var e = this.options
                            , i = t.pointers.length === e.pointers
                            , a = t.distance < e.threshold
                            , o = t.deltaTime < e.time;
                        if (this.reset(),
                        1 & t.eventType && 0 === this.count)
                            return this.failTimeout();
                        if (a && o && i) {
                            if (4 != t.eventType)
                                return this.failTimeout();
                            var n = !this.pTime || t.timeStamp - this.pTime < e.interval
                                , r = !this.pCenter || z(this.pCenter, t.center) < e.posThreshold;
                            if (this.pTime = t.timeStamp,
                                this.pCenter = t.center,
                                r && n ? this.count += 1 : this.count = 1,
                                this._input = t,
                            0 == this.count % e.taps)
                                return this.hasRequireFailures() ? (this._timer = h((function() {
                                        this.state = 8,
                                            this.tryEmit()
                                    }
                                ), e.interval, this),
                                    2) : 8
                        }
                        return 32
                    },
                    failTimeout: function() {
                        return this._timer = h((function() {
                                this.state = 32
                            }
                        ), this.options.interval, this),
                            32
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count,
                            this.manager.emit(this.options.event, this._input))
                    }
                }),
                xt.VERSION = "2.0.7",
                xt.defaults = {
                    domEvents: !1,
                    touchAction: "compute",
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [[St, {
                        enable: !1
                    }], [yt, {
                        enable: !1
                    }, ["rotate"]], [Wt, {
                        direction: 6
                    }], [wt, {
                        direction: 6
                    }, ["swipe"]], [Vt], [Vt, {
                        event: "doubletap",
                        taps: 2
                    }, ["tap"]], [Dt]],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                },
                It.prototype = {
                    set: function(t) {
                        return c(this.options, t),
                        t.touchAction && this.touchAction.update(),
                        t.inputTarget && (this.input.destroy(),
                            this.input.target = t.inputTarget,
                            this.input.init()),
                            this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            var i;
                            this.touchAction.preventDefaults(t);
                            var a = this.recognizers
                                , o = e.curRecognizer;
                            (!o || o && 8 & o.state) && (o = e.curRecognizer = null);
                            for (var n = 0; n < a.length; )
                                i = a[n],
                                    2 === e.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(t),
                                !o && 14 & i.state && (o = e.curRecognizer = i),
                                    n++
                        }
                    },
                    get: function(t) {
                        if (t instanceof pt)
                            return t;
                        for (var e = this.recognizers, i = 0; i < e.length; i++)
                            if (e[i].options.event == t)
                                return e[i];
                        return null
                    },
                    add: function(t) {
                        if (p(t, "add", this))
                            return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e),
                            this.recognizers.push(t),
                            t.manager = this,
                            this.touchAction.update(),
                            t
                    },
                    remove: function(t) {
                        if (p(t, "remove", this))
                            return this;
                        if (t = this.get(t)) {
                            var e = this.recognizers
                                , i = k(e, t);
                            -1 !== i && (e.splice(i, 1),
                                this.touchAction.update())
                        }
                        return this
                    },
                    on: function(t, e) {
                        if (void 0 !== t && void 0 !== e) {
                            var i = this.handlers;
                            return f(_(t), (function(t) {
                                    i[t] = i[t] || [],
                                        i[t].push(e)
                                }
                            )),
                                this
                        }
                    },
                    off: function(t, e) {
                        if (void 0 !== t) {
                            var i = this.handlers;
                            return f(_(t), (function(t) {
                                    e ? i[t] && i[t].splice(k(i[t], e), 1) : delete i[t]
                                }
                            )),
                                this
                        }
                    },
                    emit: function(t, e) {
                        this.options.domEvents && function(t, e) {
                            var i = n.createEvent("Event");
                            i.initEvent(t, !0, !0),
                                i.gesture = e,
                                e.target.dispatchEvent(i)
                        }(t, e);
                        var i = this.handlers[t] && this.handlers[t].slice();
                        if (i && i.length) {
                            e.type = t,
                                e.preventDefault = function() {
                                    e.srcEvent.preventDefault()
                                }
                            ;
                            for (var a = 0; a < i.length; )
                                i[a](e),
                                    a++
                        }
                    },
                    destroy: function() {
                        this.element && _t(this, !1),
                            this.handlers = {},
                            this.session = {},
                            this.input.destroy(),
                            this.element = null
                    }
                },
                c(xt, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: 32,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: 24,
                    DIRECTION_ALL: 30,
                    Manager: It,
                    Input: N,
                    TouchAction: ht,
                    TouchInput: nt,
                    MouseInput: Y,
                    PointerEventInput: tt,
                    TouchMouseInput: st,
                    SingleTouchInput: it,
                    Recognizer: pt,
                    AttrRecognizer: Ct,
                    Tap: Vt,
                    Pan: wt,
                    Swipe: Wt,
                    Pinch: yt,
                    Rotate: St,
                    Press: Dt,
                    on: W,
                    off: V,
                    each: f,
                    merge: C,
                    extend: v,
                    assign: c,
                    inherit: w,
                    bindFn: y,
                    prefixed: L
                }),
                (void 0 !== o ? o : "undefined" != typeof self ? self : {}).Hammer = xt,
            void 0 === (a = (function() {
                    return xt
                }
            ).call(e, i, e, t)) || (t.exports = a)
        }(window, document)
    },
    zUnb: function(t, e, i) {
        "use strict";
        i.r(e);
        var a = i("fXoL");
        i("yLV6");
        var o = i("jhN1")
            , n = i("tk/3")
            , r = i("b6Qw")
            , s = i("3Pt+")
            , c = i("lJxs")
            , l = i("JIr8");
        let b = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/admin"
                    }
                    getApplicationConfiguration() {
                        return this.configObservable ? this.configObservable : (this.configObservable = this.http.get(this.host + "/application-configuration").pipe(Object(c.a)(t=>t.config, Object(l.a)(t=>{
                                throw t
                            }
                        ))),
                            this.configObservable)
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var u = i("7O5W")
            , d = i("8tEE")
            , m = i("wHSu")
            , h = i("twK/")
            , p = i("XiUz")
            , f = i("Wp6s")
            , g = i("sYmb")
            , v = i("bTqV");
        const C = function(t) {
            return {
                juicycoin: t
            }
        };
        u.b.add(d.a, m.eb, m.t, m.j, m.k, h.a, h.b),
            u.a.watch();
        let w = (()=>{
                class t {
                    constructor(t) {
                        this.configurationService = t,
                            this.altcoinName = "Juicycoin"
                    }
                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                t && t.application && t.application.altcoinName && (this.altcoinName = t.application.altcoinName)
                            }
                            , t=>console.log(t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(b))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-token-sale"]],
                        decls: 114,
                        vars: 26,
                        consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "whitepaper-container", "offer-container"], [1, "heading"], [2, "margin-left", "10px", 3, "innerHtml"], [2, "margin-left", "10px"], ["translate", ""], ["href", "https://ponzico.win/ponzico.pdf", "target", "_blank", "rel", "noopener noreferrer"], ["mat-raised-button", "", "color", "accent"], [1, "fas", "fa-university", "fa-lg"], ["href", "https://www.sec.gov/investor/alerts/ia_virtualcurrencies.pdf", "target", "_blank", "rel", "noopener noreferrer"], [1, "fas", "fa-graduation-cap", "fa-lg"], [1, "offer-box"], [1, "text-justify"], [1, "fab", "fa-bitcoin"], [1, "badge"], ["fxFlexAlign.lt-md", "center", 1, "faq-container"], [1, "fas", "fa-comments", "fa-2x"], [1, "far", "fa-comment-alt", "fa-2x"], [1, "far", "fa-comments", "fa-2x"], [1, "fas", "fa-comment-alt", "fa-2x"], ["translate", "", 1, "text-justify"], ["src", "assets/public/images/padding/56px.png"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "div", 1),
                                a.Wb(2, "div", 2),
                                a.Wb(3, "span"),
                                a.Jc(4),
                                a.jc(5, "translate"),
                                a.Rb(6, "small", 3),
                                a.jc(7, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(8, "mat-card"),
                                a.Wb(9, "h4"),
                                a.Jc(10),
                                a.jc(11, "translate"),
                                a.Wb(12, "small", 4),
                                a.Jc(13, "("),
                                a.Wb(14, "span", 5),
                                a.Jc(15, "WHITEPAPER_REFERENCES"),
                                a.Vb(),
                                a.Jc(16, ")"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(17, "div"),
                                a.Wb(18, "a", 6),
                                a.Wb(19, "button", 7),
                                a.Rb(20, "i", 8),
                                a.Jc(21, " PonzICO Whitepaper"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(22, "a", 9),
                                a.Wb(23, "button", 7),
                                a.Rb(24, "i", 10),
                                a.Jc(25, " PonziCoin Whitepaper"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(26, "div", 11),
                                a.Wb(27, "h3", 5),
                                a.Jc(28, "SECTION_SALES_PITCH"),
                                a.Vb(),
                                a.Wb(29, "p", 12),
                                a.Jc(30, " Lorem ipsum dolor sit amet "),
                                a.Wb(31, "strong"),
                                a.Rb(32, "i", 13),
                                a.Jc(33),
                                a.Vb(),
                                a.Jc(34, ", consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),
                                a.Wb(35, "span", 5),
                                a.Jc(36, "GIVE_US_ALL_YOUR_MONEY"),
                                a.Vb(),
                                a.Jc(37, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "),
                                a.Wb(38, "span", 5),
                                a.Jc(39, "GIVE_US_ALL_YOUR_MONEY"),
                                a.Vb(),
                                a.Jc(40, " Ut wisi enim ad minim veniam, quis "),
                                a.Wb(41, "strong"),
                                a.Rb(42, "i", 13),
                                a.Jc(43),
                                a.Vb(),
                                a.Jc(44, " nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. "),
                                a.Wb(45, "span", 5),
                                a.Jc(46, "GIVE_US_ALL_YOUR_MONEY"),
                                a.Vb(),
                                a.Jc(47, " Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "),
                                a.Wb(48, "span", 5),
                                a.Jc(49, "GIVE_US_ALL_YOUR_MONEY"),
                                a.Vb(),
                                a.Jc(50, " Duis autem vel eum "),
                                a.Wb(51, "strong"),
                                a.Rb(52, "i", 13),
                                a.Jc(53),
                                a.Vb(),
                                a.Jc(54, " iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "),
                                a.Wb(55, "span", 5),
                                a.Jc(56, "GIVE_US_ALL_YOUR_MONEY"),
                                a.Vb(),
                                a.Jc(57, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. "),
                                a.Wb(58, "span", 14),
                                a.Rb(59, "i", 13),
                                a.Jc(60),
                                a.Vb(),
                                a.Jc(61, " est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur. "),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(62, "div", 15),
                                a.Wb(63, "div", 2),
                                a.Wb(64, "span", 5),
                                a.Jc(65, "ICO_FAQ"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(66, "mat-card"),
                                a.Wb(67, "h5"),
                                a.Rb(68, "i", 16),
                                a.Jc(69, " Stet "),
                                a.Wb(70, "strong"),
                                a.Rb(71, "i", 13),
                                a.Jc(72),
                                a.Vb(),
                                a.Jc(73, " clita kasd gubergren?"),
                                a.Vb(),
                                a.Wb(74, "small", 12),
                                a.Jc(75, " Stet clita kasd gubergren, no "),
                                a.Wb(76, "strong"),
                                a.Rb(77, "i", 13),
                                a.Jc(78),
                                a.Vb(),
                                a.Jc(79, " sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(80, "mat-card"),
                                a.Wb(81, "h5"),
                                a.Rb(82, "i", 17),
                                a.Jc(83, " Consetetur sadipscing elitr?"),
                                a.Vb(),
                                a.Wb(84, "small", 12),
                                a.Jc(85, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed "),
                                a.Wb(86, "strong"),
                                a.Rb(87, "i", 13),
                                a.Jc(88),
                                a.Vb(),
                                a.Jc(89, " diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(90, "mat-card"),
                                a.Wb(91, "h5"),
                                a.Rb(92, "i", 18),
                                a.Jc(93, " Hendrerit "),
                                a.Wb(94, "strong"),
                                a.Rb(95, "i", 13),
                                a.Jc(96),
                                a.Vb(),
                                a.Jc(97, " in vulputate velit?"),
                                a.Vb(),
                                a.Wb(98, "small", 12),
                                a.Jc(99, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(100, "mat-card"),
                                a.Wb(101, "h5"),
                                a.Rb(102, "i", 19),
                                a.Jc(103, " Justo duo dolores et ea rebum?"),
                                a.Vb(),
                                a.Wb(104, "small", 12),
                                a.Jc(105, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(106, "mat-card"),
                                a.Wb(107, "h5"),
                                a.Rb(108, "i", 16),
                                a.Rb(109, "span", 3),
                                a.jc(110, "translate"),
                                a.Vb(),
                                a.Wb(111, "small", 20),
                                a.Jc(112, "ICO_FAQ_ANSWER"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(113, "img", 21),
                                a.Vb()),
                            2 & t && (a.Db(4),
                                a.Lc("", a.kc(5, 12, "TITLE_TOKENSALE"), " "),
                                a.Db(2),
                                a.oc("innerHtml", a.lc(7, 14, "SECTION_ICO", a.tc(22, C, e.altcoinName)), a.Ac),
                                a.Db(4),
                                a.Lc("", a.kc(11, 17, "SECTION_WHITEPAPER"), " "),
                                a.Db(23),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(10),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(10),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(7),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(12),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(6),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(10),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(8),
                                a.Lc(" ", e.altcoinName, ""),
                                a.Db(13),
                                a.oc("innerHtml", a.lc(110, 19, "ICO_FAQ_QUESTION", a.tc(24, C, e.altcoinName)), a.Ac))
                        },
                        directives: [p.d, p.e, p.a, f.a, g.a, v.a],
                        pipes: [g.d],
                        styles: [".container[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{justify-content:center}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);margin-bottom:10px;padding:12px 20px}.whitepaper-container.offer-container[_ngcontent-%COMP%]{max-width:700px;min-width:400px;width:70%}.faq-container[_ngcontent-%COMP%]{max-width:500px;min-width:200px;width:70%}.text-justify[_ngcontent-%COMP%]{text-align:justify}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]
                    }),
                    t
            }
        )();
        var y = i("XNiG");
        let D = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.isLoggedIn = new y.a,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Users"
                    }
                    find(t) {
                        return this.http.get(this.hostServer + "/rest/user/authentication-details/", {
                            params: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    get(t) {
                        return this.http.get(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    login(t) {
                        return this.isLoggedIn.next(!0),
                            this.http.post(this.hostServer + "/rest/user/login", t).pipe(Object(c.a)(t=>t.authentication), Object(l.a)(t=>{
                                    throw t
                                }
                            ))
                    }
                    getLoggedInState() {
                        return this.isLoggedIn.asObservable()
                    }
                    changePassword(t) {
                        return this.http.get(this.hostServer + "/rest/user/change-password?current=" + t.current + "&new=" + t.new + "&repeat=" + t.repeat).pipe(Object(c.a)(t=>t.user), Object(l.a)(t=>{
                                throw t.error
                            }
                        ))
                    }
                    resetPassword(t) {
                        return this.http.post(this.hostServer + "/rest/user/reset-password", t).pipe(Object(c.a)(t=>t.user), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    whoAmI() {
                        return this.http.get(this.hostServer + "/rest/user/whoami").pipe(Object(c.a)(t=>t.user), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    oauthLogin(t) {
                        return this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + t)
                    }
                    saveLastLoginIp() {
                        return this.http.get(this.hostServer + "/rest/saveLoginIp").pipe(Object(c.a)(t=>t), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    deluxeStatus() {
                        return this.http.get(this.hostServer + "/rest/deluxe-membership").pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    upgradeToDeluxe(t) {
                        return this.http.post(this.hostServer + "/rest/deluxe-membership", {
                            paymentMode: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var S = i("tyNb");
        let W = (()=>{
                class t {
                    constructor(t, e, i, a, o) {
                        this.cookieService = t,
                            this.userService = e,
                            this.router = i,
                            this.route = a,
                            this.ngZone = o
                    }
                    ngOnInit() {
                        this.userService.oauthLogin(this.parseRedirectUrlParams().access_token).subscribe(t=>{
                                let e = btoa(t.email.split("").reverse().join(""));
                                this.userService.save({
                                    email: t.email,
                                    password: e,
                                    passwordRepeat: e
                                }).subscribe(()=>{
                                        this.login(t)
                                    }
                                    , ()=>this.login(t))
                            }
                            , t=>{
                                this.invalidateSession(t),
                                    this.ngZone.run(()=>this.router.navigate(["/login"]))
                            }
                        )
                    }
                    login(t) {
                        this.userService.login({
                            email: t.email,
                            password: btoa(t.email.split("").reverse().join("")),
                            oauth: !0
                        }).subscribe(t=>{
                                let e = new Date;
                                e.setHours(e.getHours() + 8),
                                    this.cookieService.set("token", t.token, e, "/"),
                                    localStorage.setItem("token", t.token),
                                    sessionStorage.setItem("bid", t.bid),
                                    this.userService.isLoggedIn.next(!0),
                                    this.ngZone.run(()=>this.router.navigate(["/"]))
                            }
                            , t=>{
                                this.invalidateSession(t),
                                    this.ngZone.run(()=>this.router.navigate(["/login"]))
                            }
                        )
                    }
                    invalidateSession(t) {
                        console.log(t),
                            this.cookieService.delete("token", "/"),
                            localStorage.removeItem("token"),
                            sessionStorage.removeItem("bid")
                    }
                    parseRedirectUrlParams() {
                        let t = this.route.snapshot.data.params.substr(1).split("&")
                            , e = {};
                        for (let i = 0; i < t.length; i++) {
                            let a = t[i].split("=");
                            e[a[0]] = a[1]
                        }
                        return e
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(r.a),a.Qb(D),a.Qb(S.b),a.Qb(S.a),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-oauth"]],
                        decls: 9,
                        vars: 6,
                        consts: [["fxLayoutAlign", "center"], [1, "primary-notification"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "div"),
                                a.Wb(3, "h3"),
                                a.Jc(4),
                                a.jc(5, "translate"),
                                a.Vb(),
                                a.Wb(6, "div"),
                                a.Jc(7),
                                a.jc(8, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(4),
                                a.Kc(a.kc(5, 2, "TITLE_LOGIN")),
                                a.Db(3),
                                a.Kc(a.kc(8, 4, "CONFIRM_LOGGED_IN_VIA_OAUTH2")))
                        },
                        directives: [p.c, f.a],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:300px;width:35%}"]
                    }),
                    t
            }
        )()
            , V = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.itemTotal = new y.a,
                            this.host = this.hostServer + "/api/BasketItems"
                    }
                    find(t) {
                        return this.http.get(this.hostServer + "/rest/basket/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    get(t) {
                        return this.http.get(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    put(t, e) {
                        return this.http.put(this.host + "/" + t, e).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    del(t) {
                        return this.http.delete(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    checkout(t, e, i) {
                        return this.http.post(this.hostServer + "/rest/basket/" + t + "/checkout", {
                            couponData: e,
                            orderDetails: i
                        }).pipe(Object(c.a)(t=>t.orderConfirmation), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    applyCoupon(t, e) {
                        return this.http.put(this.hostServer + "/rest/basket/" + t + "/coupon/" + e, {}).pipe(Object(c.a)(t=>t.discount), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    updateNumberOfCardItems() {
                        this.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(t=>{
                                this.itemTotal.next(t.Products.reduce((t,e)=>t + e.BasketItem.quantity, 0))
                            }
                            , t=>console.log(t))
                    }
                    getItemTotal() {
                        return this.itemTotal.asObservable()
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var x = i("BOF4");
        let I = (()=>{
                class t {
                    constructor(t, e) {
                        this.router = t,
                            this.ngZone = e
                    }
                    canActivate() {
                        return !!localStorage.getItem("token") || (this.forbidRoute("UNAUTHORIZED_ACCESS_ERROR"),
                            !1)
                    }
                    forbidRoute(t="UNAUTHORIZED_PAGE_ACCESS_ERROR") {
                        this.ngZone.run(()=>this.router.navigate(["403"], {
                            skipLocationChange: !0,
                            queryParams: {
                                error: t
                            }
                        }))
                    }
                    tokenDecode() {
                        let t = null;
                        const e = localStorage.getItem("token");
                        if (e)
                            try {
                                t = x(e)
                            } catch (i) {
                                console.log(i)
                            }
                        return t
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(S.b),a.ac(a.A))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac
                    }),
                    t
            }
        )()
            , _ = (()=>{
                class t {
                    constructor(t) {
                        this.loginGuard = t
                    }
                    canActivate() {
                        let t = this.loginGuard.tokenDecode();
                        return !(!t || !t.data || "admin" !== t.data.role) || (this.loginGuard.forbidRoute(),
                            !1)
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(I))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac
                    }),
                    t
            }
        )()
            , k = (()=>{
                class t {
                    constructor(t, e) {
                        this.router = t,
                            this.loginGuard = e
                    }
                    canActivate() {
                        let t = this.loginGuard.tokenDecode();
                        return !(!t || !t.data || "accounting" !== t.data.role) || (this.loginGuard.forbidRoute(),
                            !1)
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(S.b),a.ac(I))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac
                    }),
                    t
            }
        )()
            , O = (()=>{
                class t {
                    constructor(t) {
                        this.loginGuard = t
                    }
                    isDeluxe() {
                        let t = this.loginGuard.tokenDecode();
                        return t && t.data && "deluxe" === t.data.role
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(I))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac
                    }),
                    t
            }
        )();
        var T = i("dNgK");
        let L = (()=>{
                class t {
                    constructor(t, e) {
                        this.translateService = t,
                            this.snackBar = e
                    }
                    open(t, e) {
                        this.translateService.get(t).subscribe(t=>{
                                this.snackBar.open(t, "X", {
                                    duration: 5e3,
                                    panelClass: e
                                })
                            }
                            , ()=>{
                                this.snackBar.open(t, "X", {
                                    duration: 5e3,
                                    panelClass: e
                                })
                            }
                        )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(g.e),a.ac(T.a))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var A = i("+0xr")
            , P = i("ofXK")
            , E = i("znSr");
        function R(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 19)
        }
        function M(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 20),
                a.Rb(1, "img", 21),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.pc("alt", t.name),
                    a.oc("src", "assets/public/images/products/" + t.image, a.Cc)
            }
        }
        function J(t, e) {
            1 & t && a.Rb(0, "mat-footer-cell", 20)
        }
        function H(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 19)
        }
        function N(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 22),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.name, " ")
            }
        }
        function F(t, e) {
            1 & t && a.Rb(0, "mat-footer-cell", 23)
        }
        function B(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 19)
        }
        function U(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 27),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic().$implicit;
                            return a.ic().dec(e.BasketItem.id)
                        }
                    )),
                    a.Rb(1, "i", 28),
                    a.Vb()
            }
        }
        function j(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 27),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic().$implicit;
                            return a.ic().inc(e.BasketItem.id)
                        }
                    )),
                    a.Rb(1, "i", 29),
                    a.Vb()
            }
        }
        function Q(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 24),
                a.Hc(1, U, 2, 0, "button", 25),
                a.Wb(2, "span", 26),
                a.Jc(3),
                a.Vb(),
                a.Hc(4, j, 2, 0, "button", 25),
                a.Vb()),
            2 & t) {
                const t = e.$implicit
                    , i = a.ic();
                a.Db(1),
                    a.oc("ngIf", i.allowEdit),
                    a.Db(2),
                    a.Lc(" ", t.BasketItem.quantity, ""),
                    a.Db(1),
                    a.oc("ngIf", i.allowEdit)
            }
        }
        function z(t, e) {
            1 & t && (a.Wb(0, "mat-footer-cell", 30),
                a.Jc(1, "TOTAL"),
                a.Vb())
        }
        function G(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 19)
        }
        function q(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 31),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.price, "\xa4")
            }
        }
        function Y(t, e) {
            1 & t && a.Rb(0, "mat-footer-cell", 32)
        }
        function K(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 19)
        }
        function X(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 36),
                    a.Wb(1, "button", 27),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).delete(i.BasketItem.id)
                        }
                    )),
                    a.Rb(2, "i", 37),
                    a.Vb(),
                    a.Vb()
            }
        }
        function $(t, e) {
            1 & t && a.Rb(0, "mat-footer-cell", 36)
        }
        function Z(t, e) {
            1 & t && (a.Ub(0, 33),
                a.Hc(1, K, 1, 0, "mat-header-cell", 2),
                a.Hc(2, X, 3, 0, "mat-cell", 34),
                a.Hc(3, $, 1, 0, "mat-footer-cell", 35),
                a.Tb())
        }
        function tt(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function et(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function it(t, e) {
            1 & t && a.Rb(0, "mat-footer-row", 39)
        }
        function at(t, e) {
            if (1 & t && (a.Wb(0, "span"),
                a.Hc(1, it, 1, 0, "mat-footer-row", 38),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("matFooterRowDef", t.tableColumns)
            }
        }
        function ot(t, e) {
            if (1 & t && (a.Wb(0, "div", 40),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.Mc("", a.kc(2, 2, "LABEL_TOTAL_PRICE"), ": ", t.itemTotal, "\xa4")
            }
        }
        u.b.add(h.g, m.C, m.E),
            u.a.watch();
        let nt = (()=>{
                class t {
                    constructor(t, e, i, o) {
                        this.deluxeGuard = t,
                            this.basketService = e,
                            this.userService = i,
                            this.snackBarHelperService = o,
                            this.allowEdit = !1,
                            this.displayTotal = !1,
                            this.totalPrice = !0,
                            this.emitTotal = new a.o,
                            this.emitProductCount = new a.o,
                            this.tableColumns = ["image", "product", "quantity", "price"],
                            this.dataSource = [],
                            this.bonus = 0,
                            this.itemTotal = 0
                    }
                    ngOnInit() {
                        this.allowEdit && !this.tableColumns.includes("remove") && this.tableColumns.push("remove"),
                            this.load(),
                            this.userService.whoAmI().subscribe(t=>{
                                    this.userEmail = t.email || "anonymous",
                                        this.userEmail = "(" + this.userEmail + ")"
                                }
                                , t=>console.log(t))
                    }
                    load() {
                        this.basketService.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(t=>{
                                this.isDeluxe() && t.Products.map(t=>{
                                        t.price = t.deluxePrice
                                    }
                                ),
                                    this.dataSource = t.Products,
                                    this.itemTotal = t.Products.reduce((t,e)=>t + e.price * e.BasketItem.quantity, 0),
                                    this.bonus = t.Products.reduce((t,e)=>t + Math.round(e.price / 10) * e.BasketItem.quantity, 0),
                                    this.sendToParent(this.dataSource.length)
                            }
                            , t=>console.log(t))
                    }
                    delete(t) {
                        this.basketService.del(t).subscribe(()=>{
                                this.load(),
                                    this.basketService.updateNumberOfCardItems()
                            }
                            , t=>console.log(t))
                    }
                    inc(t) {
                        this.addToQuantity(t, 1)
                    }
                    dec(t) {
                        this.addToQuantity(t, -1)
                    }
                    addToQuantity(t, e) {
                        this.basketService.get(t).subscribe(i=>{
                                let a = i.quantity + e;
                                this.basketService.put(t, {
                                    quantity: a < 1 ? 1 : a
                                }).subscribe(()=>{
                                        this.load(),
                                            this.basketService.updateNumberOfCardItems()
                                    }
                                    , t=>{
                                        var e;
                                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                            console.log(t)
                                    }
                                )
                            }
                            , t=>console.log(t))
                    }
                    sendToParent(t) {
                        this.emitTotal.emit([this.itemTotal, this.bonus]),
                            this.emitProductCount.emit(t)
                    }
                    isDeluxe() {
                        return this.deluxeGuard.isDeluxe()
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(O),a.Qb(V),a.Qb(D),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-purchase-basket"]],
                        inputs: {
                            allowEdit: "allowEdit",
                            displayTotal: "displayTotal",
                            totalPrice: "totalPrice"
                        },
                        outputs: {
                            emitTotal: "emitTotal",
                            emitProductCount: "emitProductCount"
                        },
                        decls: 27,
                        vars: 10,
                        consts: [[3, "dataSource"], ["matColumnDef", "image"], ["style", "display: none;", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matFooterCellDef"], ["matColumnDef", "product"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", "style", "font-size: initial;", 4, "matCellDef"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 4, "matFooterCellDef"], ["matColumnDef", "quantity"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "content-align", 4, "matCellDef"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "header-align", 4, "matFooterCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", "style", "font-size: initial;", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 4, "matFooterCellDef"], ["matColumnDef", "remove", 4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["id", "price", 4, "ngIf"], [2, "display", "none"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", 1, "content-align"], [1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 2, "font-size", "initial"], ["fxFlex", "35%", "fxFlex.lt-md", "30%"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "content-align"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [2, "font-size", "initial"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-minus-square"], [1, "fas", "fa-plus-square"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "header-align"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 2, "font-size", "initial"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%"], ["matColumnDef", "remove"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matFooterCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%"], [1, "far", "fa-trash-alt"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-footer-row", ""], ["id", "price"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "h1"),
                                a.Jc(1),
                                a.jc(2, "translate"),
                                a.Wb(3, "small"),
                                a.Jc(4),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(5, "mat-table", 0),
                                a.Ub(6, 1),
                                a.Hc(7, R, 1, 0, "mat-header-cell", 2),
                                a.Hc(8, M, 2, 2, "mat-cell", 3),
                                a.Hc(9, J, 1, 0, "mat-footer-cell", 4),
                                a.Tb(),
                                a.Ub(10, 5),
                                a.Hc(11, H, 1, 0, "mat-header-cell", 2),
                                a.Hc(12, N, 2, 1, "mat-cell", 6),
                                a.Hc(13, F, 1, 0, "mat-footer-cell", 7),
                                a.Tb(),
                                a.Ub(14, 8),
                                a.Hc(15, B, 1, 0, "mat-header-cell", 2),
                                a.Hc(16, Q, 5, 3, "mat-cell", 9),
                                a.Hc(17, z, 2, 0, "mat-footer-cell", 10),
                                a.Tb(),
                                a.Ub(18, 11),
                                a.Hc(19, G, 1, 0, "mat-header-cell", 2),
                                a.Hc(20, q, 2, 1, "mat-cell", 12),
                                a.Hc(21, Y, 1, 0, "mat-footer-cell", 13),
                                a.Tb(),
                                a.Hc(22, Z, 4, 0, "ng-container", 14),
                                a.Hc(23, tt, 1, 0, "mat-header-row", 15),
                                a.Hc(24, et, 1, 0, "mat-row", 16),
                                a.Hc(25, at, 2, 1, "span", 17),
                                a.Vb(),
                                a.Hc(26, ot, 3, 4, "div", 18)),
                            2 & t && (a.Db(1),
                                a.Lc(" ", a.kc(2, 8, "TITLE_BASKET"), " "),
                                a.Db(3),
                                a.Kc(e.userEmail),
                                a.Db(1),
                                a.oc("dataSource", e.dataSource),
                                a.Db(17),
                                a.oc("ngIf", e.allowEdit),
                                a.Db(1),
                                a.oc("matHeaderRowDef", e.tableColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.tableColumns),
                                a.Db(1),
                                a.oc("ngIf", e.displayTotal),
                                a.Db(1),
                                a.oc("ngIf", e.totalPrice))
                        },
                        directives: [A.n, A.c, A.i, A.b, A.e, P.l, A.k, A.m, A.h, A.a, E.b, p.b, A.d, v.a, A.j, A.l, A.g, A.f],
                        pipes: [g.d],
                        styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{height:auto;width:90px}mat-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;margin-top:15px;margin-bottom:15px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.content-align[_ngcontent-%COMP%]{display:flex;justify-content:center}#price[_ngcontent-%COMP%]{margin-top:30px;width:100%;font-size:large;text-align:right}"]
                    }),
                    t
            }
        )();
        const rt = function(t) {
            return {
                bonus: t
            }
        };
        u.b.add(m.d),
            u.a.watch();
        let st = (()=>{
                class t {
                    constructor(t, e) {
                        this.router = t,
                            this.ngZone = e,
                            this.productCount = 0,
                            this.bonus = 0
                    }
                    checkout() {
                        this.ngZone.run(()=>this.router.navigate(["/address/select"]))
                    }
                    getProductCount(t) {
                        this.productCount = t
                    }
                    getBonusPoints(t) {
                        sessionStorage.setItem("itemTotal", t[0]),
                            this.bonus = t[1]
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(S.b),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-basket"]],
                        decls: 8,
                        vars: 8,
                        consts: [[1, "mat-elevation-z6"], [3, "allowEdit", "emitTotal", "emitProductCount"], ["id", "checkoutButton", "color", "primary", "mat-raised-button", "", 1, "checkout-button", 3, "disabled", "click"], [1, "fas", "fa-cart-arrow-down"], ["translate", "", 1, "hint", 3, "translateParams"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "app-purchase-basket", 1),
                                a.ec("emitTotal", (function(t) {
                                        return e.getBonusPoints(t)
                                    }
                                ))("emitProductCount", (function(t) {
                                        return e.getProductCount(t)
                                    }
                                )),
                                a.Vb(),
                                a.Wb(2, "button", 2),
                                a.ec("click", (function() {
                                        return e.checkout()
                                    }
                                )),
                                a.Rb(3, "i", 3),
                                a.Jc(4),
                                a.jc(5, "translate"),
                                a.Vb(),
                                a.Wb(6, "div", 4),
                                a.Jc(7, "CHECKOUT_FOR_BONUS_POINTS"),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(1),
                                a.oc("allowEdit", !0),
                                a.Db(1),
                                a.oc("disabled", e.productCount < 1),
                                a.Db(2),
                                a.Lc(" ", a.kc(5, 4, "BTN_CHECKOUT"), " "),
                                a.Db(2),
                                a.oc("translateParams", a.tc(6, rt, e.bonus)))
                        },
                        directives: [f.a, nt, v.a, g.a],
                        pipes: [g.d],
                        styles: [".container[_ngcontent-%COMP%]{min-width:420px;width:40%}mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);justify-content:center;padding:12px 20px}.mat-row[_ngcontent-%COMP%]{padding-bottom:10px}.mat-column-bonus[_ngcontent-%COMP%], .mat-column-description[_ngcontent-%COMP%], .mat-column-price[_ngcontent-%COMP%]{margin-left:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:22px}mat-form-field[_ngcontent-%COMP%]{margin-top:15px;width:100%}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:20px}#checkoutButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:center;margin-top:5px}.payment-label[_ngcontent-%COMP%]{padding-top:10px}"]
                    }),
                    t
            }
        )()
            , ct = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/track-order"
                    }
                    save(t) {
                        return t = encodeURIComponent(t),
                            this.http.get(this.host + "/" + t).pipe(Object(c.a)(t=>t), Object(l.a)(t=>{
                                    throw t
                                }
                            ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function lt(t, e) {
            1 & t && (a.Wb(0, "span"),
                a.Rb(1, "i", 27),
                a.Vb())
        }
        function bt(t, e) {
            1 & t && (a.Wb(0, "span"),
                a.Rb(1, "i", 28),
                a.Vb())
        }
        function ut(t, e) {
            1 & t && (a.Wb(0, "span"),
                a.Rb(1, "i", 29),
                a.Vb())
        }
        function dt(t, e) {
            1 & t && (a.Wb(0, "span"),
                a.Rb(1, "i", 30),
                a.Vb())
        }
        function mt(t, e) {
            1 & t && (a.Wb(0, "span"),
                a.Rb(1, "i", 31),
                a.Vb())
        }
        function ht(t, e) {
            1 & t && (a.Wb(0, "span"),
                a.Rb(1, "i", 32),
                a.Vb())
        }
        function pt(t, e) {
            if (1 & t && (a.Wb(0, "span", 33),
                a.Wb(1, "span"),
                a.Rb(2, "i", 34),
                a.Vb(),
                a.Wb(3, "span", 35),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Mc("", t.results.eta, " ", a.kc(5, 2, "LABEL_DAYS"), "")
            }
        }
        function ft(t, e) {
            if (1 & t && (a.Wb(0, "span", 33),
                a.Wb(1, "span"),
                a.Rb(2, "i", 36),
                a.Vb(),
                a.Wb(3, "span", 35),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Mc("", t.results.eta, " ", a.kc(5, 2, "LABEL_DAYS"), "")
            }
        }
        function gt(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 1),
                a.Jc(1, "LABEL_PRODUCT"),
                a.Vb())
        }
        function vt(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 37),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.name, "")
            }
        }
        function Ct(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 38),
                a.Jc(1, "LABEL_PRICE"),
                a.Vb())
        }
        function wt(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 39),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.price, "\xa4")
            }
        }
        function yt(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 1),
                a.Jc(1, "LABEL_QUANTITY"),
                a.Vb())
        }
        function Dt(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 40),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.quantity, "")
            }
        }
        function St(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 1),
                a.Jc(1, "LABEL_TOTAL_PRICE"),
                a.Vb())
        }
        function Wt(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 41),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.total, "\xa4")
            }
        }
        function Vt(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function xt(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        const It = function(t) {
            return {
                bonus: t
            }
        };
        u.b.add(m.mb, m.Q, m.cb, m.bb, m.x),
            u.a.watch();
        var _t = function(t) {
            return t[t.New = 0] = "New",
                t[t.Packing = 1] = "Packing",
                t[t.Transit = 2] = "Transit",
                t[t.Delivered = 3] = "Delivered",
                t
        }({});
        let kt = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.route = t,
                            this.trackOrderService = e,
                            this.sanitizer = i,
                            this.displayedColumns = ["product", "price", "quantity", "total price"],
                            this.dataSource = new A.o,
                            this.results = {},
                            this.status = _t.New,
                            this.Status = _t
                    }
                    ngOnInit() {
                        this.orderId = this.route.snapshot.queryParams.id,
                            this.trackOrderService.save(this.orderId).subscribe(t=>{
                                    this.results.orderNo = this.sanitizer.bypassSecurityTrustHtml(`<code>${t.data[0].orderId}</code>`),
                                        this.results.email = t.data[0].email,
                                        this.results.totalPrice = t.data[0].totalPrice,
                                        this.results.products = t.data[0].products,
                                        this.results.eta = void 0 !== t.data[0].eta ? t.data[0].eta : "?",
                                        this.results.bonus = t.data[0].bonus,
                                        this.dataSource.data = this.results.products,
                                        this.status = t.data[0].delivered ? _t.Delivered : this.route.snapshot.data.type ? _t.New : this.results.eta > 2 ? _t.Packing : _t.Transit
                                }
                            )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(S.a),a.Qb(ct),a.Qb(o.c))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-track-result"]],
                        decls: 48,
                        vars: 18,
                        consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], [3, "innerHtml"], [2, "text-align", "center"], [1, "container-fluid", "well"], [1, "row", "fa-4x"], [4, "ngIf"], ["class", "fa-layers fa-fw", 4, "ngIf"], ["fxLayoutAlign", "center", 1, "table-wrapper"], [1, "table-heading", "heading"], ["fxLayoutAlign", "center"], [1, "mat-elevation-z0", 3, "dataSource"], ["table", ""], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], ["class", "product-name", 4, "matCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["class", "product-price", "fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "quantity"], ["class", "product-quantity", 4, "matCellDef"], ["matColumnDef", "total price"], ["class", "product-total", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "bonus-container"], ["translate", "", 3, "translateParams"], [1, "fas", "fa-warehouse", "confirmation"], [1, "fas", "fa-warehouse"], [1, "fas", "fa-truck-loading", "confirmation"], [1, "fas", "fa-truck-loading"], [1, "fas", "fa-truck", "confirmation"], [1, "fas", "fa-truck"], [1, "fa-layers", "fa-fw"], [1, "fas", "fa-home", "confirmation"], [1, "fa-layers-counter", "accent-notification", 2, "width", "max-content"], [1, "fas", "fa-home"], [1, "product-name"], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", "", 1, "product-price"], [1, "product-quantity"], [1, "product-total"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "h1"),
                                a.Wb(2, "span", 1),
                                a.Jc(3, "TITLE_SEARCH_RESULTS"),
                                a.Vb(),
                                a.Jc(4, " - "),
                                a.Rb(5, "span", 2),
                                a.Vb(),
                                a.Wb(6, "div", 3),
                                a.Wb(7, "h3", 1),
                                a.Jc(8, "LABEL_EXPECTED_DELIVERY"),
                                a.Vb(),
                                a.Wb(9, "div", 4),
                                a.Wb(10, "div", 5),
                                a.Hc(11, lt, 2, 0, "span", 6),
                                a.Hc(12, bt, 2, 0, "span", 6),
                                a.Hc(13, ut, 2, 0, "span", 6),
                                a.Hc(14, dt, 2, 0, "span", 6),
                                a.Hc(15, mt, 2, 0, "span", 6),
                                a.Hc(16, ht, 2, 0, "span", 6),
                                a.Hc(17, pt, 6, 4, "span", 7),
                                a.Hc(18, ft, 6, 4, "span", 7),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(19, "div", 8),
                                a.Wb(20, "div", 9),
                                a.Wb(21, "h2", 1),
                                a.Jc(22, "LABEL_PRODUCT_ORDERED"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(23, "div", 10),
                                a.Wb(24, "mat-table", 11, 12),
                                a.Ub(26, 13),
                                a.Hc(27, gt, 2, 0, "mat-header-cell", 14),
                                a.Hc(28, vt, 2, 1, "mat-cell", 15),
                                a.Tb(),
                                a.Ub(29, 16),
                                a.Hc(30, Ct, 2, 0, "mat-header-cell", 17),
                                a.Hc(31, wt, 2, 1, "mat-cell", 18),
                                a.Tb(),
                                a.Ub(32, 19),
                                a.Hc(33, yt, 2, 0, "mat-header-cell", 14),
                                a.Hc(34, Dt, 2, 1, "mat-cell", 20),
                                a.Tb(),
                                a.Ub(35, 21),
                                a.Hc(36, St, 2, 0, "mat-header-cell", 14),
                                a.Hc(37, Wt, 2, 1, "mat-cell", 22),
                                a.Tb(),
                                a.Hc(38, Vt, 1, 0, "mat-header-row", 23),
                                a.Hc(39, xt, 1, 0, "mat-row", 24),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(40, "div", 25),
                                a.Wb(41, "h2", 26),
                                a.Jc(42, "BONUS_POINTS_EARNED"),
                                a.Vb(),
                                a.Wb(43, "p"),
                                a.Jc(44, "("),
                                a.Rb(45, "span", 2),
                                a.jc(46, "translate"),
                                a.Jc(47, ")"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(5),
                                a.oc("innerHtml", e.results.orderNo, a.Ac),
                                a.Db(6),
                                a.oc("ngIf", e.status === e.Status.New),
                                a.Db(1),
                                a.oc("ngIf", e.status !== e.Status.New),
                                a.Db(1),
                                a.oc("ngIf", e.status === e.Status.Packing),
                                a.Db(1),
                                a.oc("ngIf", e.status !== e.Status.Packing),
                                a.Db(1),
                                a.oc("ngIf", e.status === e.Status.Transit),
                                a.Db(1),
                                a.oc("ngIf", e.status !== e.Status.Transit),
                                a.Db(1),
                                a.oc("ngIf", e.status === e.Status.Delivered),
                                a.Db(1),
                                a.oc("ngIf", e.status !== e.Status.Delivered),
                                a.Db(6),
                                a.oc("dataSource", e.dataSource),
                                a.Db(14),
                                a.oc("matHeaderRowDef", e.displayedColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.displayedColumns),
                                a.Db(2),
                                a.oc("translateParams", a.tc(16, It, e.results.bonus)),
                                a.Db(4),
                                a.oc("innerHtml", a.kc(46, 14, "BONUS_FOR_FUTURE_PURCHASES"), a.Ac))
                        },
                        directives: [f.a, g.a, P.l, p.c, A.n, A.c, A.i, A.b, A.k, A.m, A.h, A.a, E.b, A.j, A.l],
                        pipes: [g.d],
                        styles: [".heading[_ngcontent-%COMP%], .table-heading[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{width:90%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);justify-content:center;padding:0 20px;height:35px}.product-name[_ngcontent-%COMP%]{margin-right:25px}.table-wrapper[_ngcontent-%COMP%]{margin-top:30px}.table-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.row.fa-4x[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:10px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.bonus-container[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;margin-top:10px;place-content:stretch center}.bonus-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0}"]
                    }),
                    t
            }
        )()
            , Ot = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Feedbacks"
                    }
                    find(t) {
                        return this.http.get(this.host + "/", {
                            params: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    del(t) {
                        return this.http.delete(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )()
            , Tt = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/captcha"
                    }
                    getCaptcha() {
                        return this.http.get(this.host + "/").pipe(Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )()
            , Lt = (()=>{
                class t {
                    constructor(t) {
                        this._document = t
                    }
                    attachEnterKeyHandler(t, e, i) {
                        const a = this._document.getElementById(t)
                            , o = this._document.getElementById(e);
                        a.addEventListener("keyup", (function(t) {
                                t.preventDefault(),
                                13 !== t.keyCode || o.disabled || i()
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(P.d))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var At = i("kmnG")
            , Pt = i("qFsG")
            , Et = i("2rR7");
        function Rt(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_COMMENT "),
                a.Vb())
        }
        function Mt(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_CAPTCHA "),
                a.Vb())
        }
        function Jt(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "INVALID_CAPTCHA "),
                a.Vb())
        }
        const Ht = function() {
            return {
                length: "160"
            }
        };
        u.b.add(m.O, m.D),
            u.a.watch();
        let Nt = (()=>{
                class t {
                    constructor(t, e, i, a, o, n) {
                        this.userService = t,
                            this.captchaService = e,
                            this.feedbackService = i,
                            this.formSubmitService = a,
                            this.translate = o,
                            this.snackBarHelperService = n,
                            this.authorControl = new s.c({
                                value: "",
                                disabled: !0
                            },[]),
                            this.feedbackControl = new s.c("",[s.x.required, s.x.maxLength(160)]),
                            this.captchaControl = new s.c("",[s.x.required, s.x.pattern("-?[\\d]*")]),
                            this.userIdControl = new s.c("",[]),
                            this.rating = 0,
                            this.feedback = void 0
                    }
                    ngOnInit() {
                        this.userService.whoAmI().subscribe(t=>{
                                this.feedback = {},
                                    this.userIdControl.setValue(t.id),
                                    this.feedback.UserId = t.id,
                                    this.authorControl.setValue(t.email ? "***" + t.email.slice(3) : "anonymous")
                            }
                            , t=>{
                                this.feedback = void 0,
                                    console.log(t)
                            }
                        ),
                            this.getNewCaptcha(),
                            this.formSubmitService.attachEnterKeyHandler("feedback-form", "submitButton", ()=>this.save())
                    }
                    getNewCaptcha() {
                        this.captchaService.getCaptcha().subscribe(t=>{
                                this.captcha = t.captcha,
                                    this.captchaId = t.captchaId
                            }
                            , t=>t)
                    }
                    save() {
                        this.feedback.captchaId = this.captchaId,
                            this.feedback.captcha = this.captchaControl.value,
                            this.feedback.comment = `${this.feedbackControl.value} (${this.authorControl.value})`,
                            this.feedback.rating = this.rating,
                            this.feedback.UserId = this.userIdControl.value,
                            this.feedbackService.save(this.feedback).subscribe(t=>{
                                    5 === t.rating ? this.translate.get("FEEDBACK_FIVE_STAR_THANK_YOU").subscribe(t=>{
                                            this.snackBarHelperService.open(t)
                                        }
                                        , t=>{
                                            this.snackBarHelperService.open(t)
                                        }
                                    ) : this.translate.get("FEEDBACK_THANK_YOU").subscribe(t=>{
                                            this.snackBarHelperService.open(t)
                                        }
                                        , t=>{
                                            this.snackBarHelperService.open(t)
                                        }
                                    ),
                                        this.feedback = {},
                                        this.ngOnInit(),
                                        this.resetForm()
                                }
                                , t=>{
                                    var e;
                                    this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                        this.feedback = {},
                                        this.resetCaptcha()
                                }
                            )
                    }
                    resetForm() {
                        this.authorControl.markAsUntouched(),
                            this.authorControl.markAsPristine(),
                            this.authorControl.setValue(""),
                            this.feedbackControl.markAsUntouched(),
                            this.feedbackControl.markAsPristine(),
                            this.feedbackControl.setValue(""),
                            this.rating = 0,
                            this.captchaControl.markAsUntouched(),
                            this.captchaControl.markAsPristine(),
                            this.captchaControl.setValue("")
                    }
                    resetCaptcha() {
                        this.captchaControl.markAsUntouched(),
                            this.captchaControl.markAsPristine(),
                            this.captchaControl.setValue("")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(D),a.Qb(Tt),a.Qb(Ot),a.Qb(Lt),a.Qb(g.e),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-contact"]],
                        decls: 52,
                        vars: 26,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "feedback-form", 1, "form-container"], ["hidden", "", "type", "text", "id", "userId", 3, "formControl"], ["appearance", "outline", "color", "accent"], ["matInput", "", "type", "text", "aria-label", "Field with the name of the author", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "comment", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "aria-label", "Field for entering the comment or the feedback", 3, "formControl", "placeholder"], ["comment", ""], ["align", "end"], ["translate", "", 4, "ngIf"], [1, "rating-container"], ["translate", "", 2, "font-weight", "500", "margin-right", "8px", "float", "left"], [3, "rate", "max", "rateChange"], [2, "margin-bottom", "10px", "margin-top", "10px"], [2, "font-weight", "500"], ["translate", "", 2, "font-size", "small"], ["id", "captcha", "aria-label", "CAPTCHA code which must be solved"], [2, "font-size", "small"], ["id", "captchaControl", "matInput", "", "type", "text", "aria-label", "Field for the result of the CAPTCHA code", "pattern", "-?[\\d]*", 3, "formControl", "placeholder"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the review", 3, "disabled", "click"], [1, "material-icons"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "SECTION_CUSTOMER_FEEDBACK"),
                                a.Vb(),
                                a.Wb(4, "div", 3),
                                a.Rb(5, "input", 4),
                                a.Wb(6, "mat-form-field", 5),
                                a.Wb(7, "mat-label", 2),
                                a.Jc(8, "LABEL_AUTHOR"),
                                a.Vb(),
                                a.Rb(9, "input", 6),
                                a.Vb(),
                                a.Wb(10, "mat-form-field", 5),
                                a.Wb(11, "mat-label", 2),
                                a.Jc(12, "LABEL_COMMENT"),
                                a.Vb(),
                                a.Wb(13, "mat-hint", 2),
                                a.Rb(14, "i", 7),
                                a.Wb(15, "em", 8),
                                a.Jc(16),
                                a.jc(17, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(18, "textarea", 9, 10),
                                a.jc(20, "translate"),
                                a.Wb(21, "mat-hint", 11),
                                a.Jc(22),
                                a.Vb(),
                                a.Hc(23, Rt, 2, 0, "mat-error", 12),
                                a.Vb(),
                                a.Wb(24, "div", 13),
                                a.Wb(25, "label", 14),
                                a.Jc(26, "LABEL_RATING"),
                                a.Vb(),
                                a.Wb(27, "bar-rating", 15),
                                a.ec("rateChange", (function(t) {
                                        return e.rating = t
                                    }
                                )),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(28, "div", 16),
                                a.Wb(29, "label", 17),
                                a.Jc(30, "CAPTCHA:"),
                                a.Vb(),
                                a.Jc(31, "\xa0\xa0"),
                                a.Wb(32, "span", 18),
                                a.Jc(33, "LABEL_WHAT_IS"),
                                a.Vb(),
                                a.Jc(34, "\xa0 "),
                                a.Wb(35, "code", 19),
                                a.Jc(36),
                                a.Vb(),
                                a.Jc(37, "\xa0"),
                                a.Wb(38, "label", 20),
                                a.Jc(39, "?"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(40, "mat-form-field", 5),
                                a.Wb(41, "mat-label", 2),
                                a.Jc(42, "LABEL_RESULT"),
                                a.Vb(),
                                a.Rb(43, "input", 21),
                                a.jc(44, "translate"),
                                a.Hc(45, Mt, 2, 0, "mat-error", 12),
                                a.Hc(46, Jt, 2, 0, "mat-error", 12),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(47, "button", 22),
                                a.ec("click", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Wb(48, "i", 23),
                                a.Jc(49, " send "),
                                a.Vb(),
                                a.Jc(50),
                                a.jc(51, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(19);
                                a.Db(5),
                                    a.oc("formControl", e.userIdControl),
                                    a.Db(4),
                                    a.oc("formControl", e.authorControl),
                                    a.Db(7),
                                    a.Kc(a.lc(17, 16, "MAX_TEXTAREA_LENGTH", a.sc(25, Ht))),
                                    a.Db(2),
                                    a.pc("placeholder", a.kc(20, 19, "WRITE_REVIEW_PLACEHOLDER")),
                                    a.oc("formControl", e.feedbackControl),
                                    a.Db(4),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/160"),
                                    a.Db(1),
                                    a.oc("ngIf", e.feedbackControl.invalid && e.feedbackControl.errors.required),
                                    a.Db(4),
                                    a.oc("rate", e.rating)("max", 5),
                                    a.Db(9),
                                    a.Kc(e.captcha),
                                    a.Db(7),
                                    a.pc("placeholder", a.kc(44, 21, "MANDATORY_CAPTCHA")),
                                    a.oc("formControl", e.captchaControl),
                                    a.Db(2),
                                    a.oc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.pattern),
                                    a.Db(1),
                                    a.oc("disabled", e.authorControl.invalid || e.feedbackControl.invalid || e.captchaControl.invalid || !e.rating),
                                    a.Db(3),
                                    a.Lc(" ", a.kc(51, 23, "BTN_SUBMIT"), " ")
                            }
                        },
                        directives: [p.c, f.a, g.a, s.b, s.n, s.d, At.c, At.g, Pt.b, At.f, Pt.d, s.i, P.l, Et.a, s.t, v.a, At.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.rating-container[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px}.star[_ngcontent-%COMP%]{color:#c8c8c8}.active[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{color:gold}[_nghost-%COMP%]     .br{margin:0!important}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
                    }),
                    t
            }
        )()
            , Ft = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/SecurityQuestions"
                    }
                    find(t) {
                        return this.http.get(this.host + "/", {
                            params: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    findBy(t) {
                        return this.http.get(this.hostServer + "/rest/user/security-question?email=" + t).pipe(Object(c.a)(t=>t.question), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )()
            , Bt = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/user"
                    }
                    erase(t) {
                        return this.http.post(this.host + "/erasure-request", t).pipe(Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    dataExport(t) {
                        return this.http.post(this.host + "/data-export", t).pipe(Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function Ut(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_EMAIL"),
                a.Vb())
        }
        function jt(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "INVALID_EMAIL"),
                a.Vb())
        }
        function Qt(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_SECURITY_ANSWER"),
                a.Vb())
        }
        function zt(t, e) {
            if (1 & t && (a.Wb(0, "div", 12),
                a.Wb(1, "mat-form-field", 6),
                a.Wb(2, "mat-label"),
                a.Jc(3),
                a.Vb(),
                a.Rb(4, "input", 13),
                a.Hc(5, Qt, 2, 0, "mat-error", 8),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(3),
                    a.Kc(t.securityQuestion),
                    a.Db(2),
                    a.oc("ngIf", t.securityQuestionForm)
            }
        }
        u.b.add(m.O, m.n),
            u.a.watch();
        let Gt = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r, c, l) {
                        this.securityQuestionService = t,
                            this.dataSubjectService = e,
                            this.ngZone = i,
                            this.router = a,
                            this.cookieService = o,
                            this.userService = n,
                            this.translateService = r,
                            this.snackBar = c,
                            this.snackBarHelperService = l,
                            this.dataSubjectGroup = new s.f({
                                emailControl: new s.c("",[s.x.required, s.x.email]),
                                securityQuestionControl: new s.c("",[s.x.required])
                            })
                    }
                    ngOnInit() {
                        this.findSecurityQuestion()
                    }
                    get emailForm() {
                        return this.dataSubjectGroup.get("emailControl")
                    }
                    get securityQuestionForm() {
                        return this.dataSubjectGroup.get("securityQuestionControl")
                    }
                    findSecurityQuestion() {
                        this.securityQuestion = void 0,
                        this.emailForm.value && this.securityQuestionService.findBy(this.emailForm.value).subscribe(t=>{
                                t && (this.securityQuestion = t.question)
                            }
                            , t=>t)
                    }
                    save() {
                        this.dataSubjectService.erase({
                            email: this.emailForm.value,
                            securityAnswer: this.securityQuestionForm.value
                        }).subscribe(t=>{
                                this.error = void 0,
                                    this.logout()
                            }
                            , t=>{
                                this.error = t.message,
                                    this.resetForm()
                            }
                        )
                    }
                    logout() {
                        this.userService.saveLastLoginIp().subscribe(t=>{
                                this.noop()
                            }
                            , t=>console.log(t)),
                            localStorage.removeItem("token"),
                            this.cookieService.delete("token", "/"),
                            sessionStorage.removeItem("bid"),
                            this.userService.isLoggedIn.next(!1),
                            this.ngZone.run(()=>this.router.navigate(["/"])),
                            this.snackBarHelperService.open("CONFIRM_ERASURE_REQUEST")
                    }
                    noop() {}
                    resetForm() {
                        this.emailForm.markAsUntouched(),
                            this.emailForm.markAsPristine(),
                            this.emailForm.setValue(""),
                            this.securityQuestionForm.markAsUntouched(),
                            this.securityQuestionForm.markAsPristine(),
                            this.securityQuestionForm.setValue("")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ft),a.Qb(Bt),a.Qb(a.A),a.Qb(S.b),a.Qb(r.a),a.Qb(D),a.Qb(g.e),a.Qb(T.a),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-erasure-request"]],
                        decls: 23,
                        vars: 10,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "data-subject-container"], [1, "error", 3, "hidden"], ["id", "data-subject-form", "color", "warn", 1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline", "color", "accent"], ["id", "email", "formControlName", "emailControl", "type", "text", "matInput", "", "placeholder", "Enter your email", 3, "ngModelChange"], ["translate", "", 4, "ngIf"], ["class", "form-container", "id", "forgot-form", 4, "ngIf"], ["type", "submit", "id", "deleteUserButton", "mat-raised-button", "", "color", "primary", 3, "disabled"], [1, "fas", "fa-exclamation-triangle", "fa-lg"], ["id", "forgot-form", 1, "form-container"], ["id", "securityAnswer", "formControlName", "securityQuestionControl", "type", "password", "matInput", "", "placeholder", ""]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "GDPR_HEADING"),
                                a.Vb(),
                                a.Wb(4, "p", 2),
                                a.Jc(5, "GDPR_MESSAGE"),
                                a.Vb(),
                                a.Wb(6, "h3", 2),
                                a.Jc(7, "DATA_SUBJECT_TITLE"),
                                a.Vb(),
                                a.Wb(8, "div", 3),
                                a.Wb(9, "div", 4),
                                a.Jc(10),
                                a.Vb(),
                                a.Wb(11, "form", 5),
                                a.ec("ngSubmit", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Wb(12, "mat-form-field", 6),
                                a.Wb(13, "mat-label", 2),
                                a.Jc(14, "LABEL_EMAIL"),
                                a.Vb(),
                                a.Wb(15, "input", 7),
                                a.ec("ngModelChange", (function() {
                                        return e.findSecurityQuestion()
                                    }
                                )),
                                a.Vb(),
                                a.Hc(16, Ut, 2, 0, "mat-error", 8),
                                a.Hc(17, jt, 2, 0, "mat-error", 8),
                                a.Vb(),
                                a.Hc(18, zt, 6, 2, "div", 9),
                                a.Wb(19, "button", 10),
                                a.Rb(20, "i", 11),
                                a.Jc(21),
                                a.jc(22, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(9),
                                a.oc("hidden", !e.error),
                                a.Db(1),
                                a.Kc(e.error),
                                a.Db(1),
                                a.oc("formGroup", e.dataSubjectGroup),
                                a.Db(5),
                                a.oc("ngIf", e.emailForm.invalid && e.emailForm.errors.required),
                                a.Db(1),
                                a.oc("ngIf", e.emailForm.invalid && e.emailForm.errors.email),
                                a.Db(1),
                                a.oc("ngIf", e.securityQuestion),
                                a.Db(1),
                                a.oc("disabled", e.emailForm.invalid || e.securityQuestionForm.invalid),
                                a.Db(2),
                                a.Lc(" ", a.kc(22, 8, "DELETE_DATA_LABEL"), " "))
                        },
                        directives: [p.c, f.a, g.a, s.z, s.o, s.g, At.c, At.g, s.b, Pt.b, s.n, s.e, P.l, v.a, At.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;margin-bottom:30px;min-width:320px;width:30%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#deleteUserButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:1.2rem;width:60%}"]
                    }),
                    t
            }
        )();
        var qt = i("QoAZ");
        function Yt(t, e) {
            if (1 & t && (a.Wb(0, "a", 14),
                a.Wb(1, "button", 15),
                a.Rb(2, "i", 16),
                a.Jc(3, " Twitter"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.oc("href", t.twitterUrl, a.Cc)
            }
        }
        function Kt(t, e) {
            if (1 & t && (a.Wb(0, "a", 17),
                a.Wb(1, "button", 15),
                a.Rb(2, "i", 18),
                a.Jc(3, " Facebook"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.oc("href", t.facebookUrl, a.Cc)
            }
        }
        function Xt(t, e) {
            if (1 & t && (a.Wb(0, "a", 19),
                a.Wb(1, "button", 15),
                a.Rb(2, "i", 20),
                a.Jc(3, " Slack"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.oc("href", t.slackUrl, a.Cc)
            }
        }
        function $t(t, e) {
            if (1 & t && (a.Wb(0, "a", 21),
                a.Wb(1, "button", 15),
                a.Rb(2, "i", 22),
                a.Jc(3, " Reddit"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.oc("href", t.redditUrl, a.Cc)
            }
        }
        function Zt(t, e) {
            if (1 & t && (a.Wb(0, "a", 23),
                a.Wb(1, "button", 15),
                a.Rb(2, "i", 24),
                a.Jc(3, " Press Kit"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.oc("href", t.pressKitUrl, a.Cc)
            }
        }
        function te(t, e) {
            if (1 & t && (a.Wb(0, "div", 8),
                a.Wb(1, "h3"),
                a.Wb(2, "span", 3),
                a.Jc(3, "SECTION_SOCIAL_MEDIA"),
                a.Vb(),
                a.Vb(),
                a.Hc(4, Yt, 4, 1, "a", 9),
                a.Hc(5, Kt, 4, 1, "a", 10),
                a.Hc(6, Xt, 4, 1, "a", 11),
                a.Hc(7, $t, 4, 1, "a", 12),
                a.Hc(8, Zt, 4, 1, "a", 13),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.oc("ngIf", t.twitterUrl),
                    a.Db(1),
                    a.oc("ngIf", t.facebookUrl),
                    a.Db(1),
                    a.oc("ngIf", t.slackUrl),
                    a.Db(1),
                    a.oc("ngIf", t.redditUrl),
                    a.Db(1),
                    a.oc("ngIf", t.pressKitUrl)
            }
        }
        u.b.add(d.c, d.k, d.i, d.h, h.e, h.f, m.O),
            u.a.watch();
        let ee = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.configurationService = t,
                            this.feedbackService = e,
                            this.sanitizer = i,
                            this.slideshowDataSource = [],
                            this.images = ["assets/public/images/carousel/1.jpg", "assets/public/images/carousel/2.jpg", "assets/public/images/carousel/3.jpg", "assets/public/images/carousel/4.jpg", "assets/public/images/carousel/5.png", "assets/public/images/carousel/6.jpg", "assets/public/images/carousel/7.jpg"],
                            this.stars = [null, '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>']
                    }
                    ngOnInit() {
                        this.populateSlideshowFromFeedbacks(),
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    t && t.application && t.application.social && (t.application.social.twitterUrl && (this.twitterUrl = t.application.social.twitterUrl),
                                    t.application.social.facebookUrl && (this.facebookUrl = t.application.social.facebookUrl),
                                    t.application.social.slackUrl && (this.slackUrl = t.application.social.slackUrl),
                                    t.application.social.redditUrl && (this.redditUrl = t.application.social.redditUrl),
                                    t.application.social.pressKitUrl && (this.pressKitUrl = t.application.social.pressKitUrl))
                                }
                                , t=>console.log(t))
                    }
                    populateSlideshowFromFeedbacks() {
                        this.feedbackService.find().subscribe(t=>{
                                for (let e = 0; e < t.length; e++)
                                    t[e].comment = '<span style="width: 90%; display:block;">' + t[e].comment + "<br/> (" + this.stars[t[e].rating] + ")</span>",
                                        t[e].comment = this.sanitizer.bypassSecurityTrustHtml(t[e].comment),
                                        this.slideshowDataSource.push({
                                            url: this.images[e % this.images.length],
                                            caption: t[e].comment
                                        })
                            }
                            , t=>{
                                console.log(t)
                            }
                        )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(b),a.Qb(Ot),a.Qb(o.c))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-about"]],
                        decls: 17,
                        vars: 7,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], [1, "about-us"], ["translate", ""], [1, "text-justify"], ["href", "ftp/legal.md", "aria-label", "Link to the Terms of Use", "translate", ""], [3, "height", "autoPlay", "arrowSize", "showArrows", "showDots", "imageUrls"], ["class", "social", 4, "ngIf"], [1, "social"], ["target", "_blank", "rel", "noopener noreferrer", "style", "margin-left: 0px;", "aria-label", "Button for the Twitter page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Twitter page of the shop", 2, "margin-left", "0px", 3, "href"], ["mat-raised-button", "", "color", "accent"], [1, "fab", "fa-twitter", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href"], [1, "fab", "fa-facebook", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href"], [1, "fab", "fa-slack", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href"], [1, "fab", "fa-reddit", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href"], [1, "far", "fa-newspaper", "fa-lg"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "section", 2),
                                a.Wb(3, "h1", 3),
                                a.Jc(4, "TITLE_ABOUT"),
                                a.Vb(),
                                a.Wb(5, "h3", 3),
                                a.Jc(6, "SECTION_CORPORATE_HISTORY"),
                                a.Vb(),
                                a.Wb(7, "p", 4),
                                a.Jc(8, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "),
                                a.Wb(9, "a", 5),
                                a.Jc(10, "LINK_TERMS_OF_USE"),
                                a.Vb(),
                                a.Jc(11, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. "),
                                a.Vb(),
                                a.Wb(12, "h3"),
                                a.Wb(13, "span", 3),
                                a.Jc(14, "SECTION_CUSTOMER_FEEDBACK"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(15, "slideshow", 6),
                                a.Hc(16, te, 9, 5, "div", 7),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(15),
                                a.oc("height", "300px")("autoPlay", !0)("arrowSize", "10px")("showArrows", !0)("showDots", !1)("imageUrls", e.slideshowDataSource),
                                a.Db(1),
                                a.oc("ngIf", e.twitterUrl || e.facebookUrl))
                        },
                        directives: [p.c, f.a, g.a, qt.b, P.l, v.a],
                        styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:30px;margin-left:auto;margin-right:auto;width:80%}.about-us[_ngcontent-%COMP%]{margin-left:8.33333%;margin-right:8.33333%;width:83.3333%}.social[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:5px}.text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}"]
                    }),
                    t
            }
        )()
            , ie = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/SecurityAnswers"
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var ae = i("1jcm")
            , oe = i("Rw1y")
            , ne = i("d3UM")
            , re = i("FKr1");
        function se(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_EMAIL"),
                a.Vb())
        }
        function ce(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "INVALID_EMAIL"),
                a.Vb())
        }
        function le(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_PASSWORD "),
                a.Vb())
        }
        const be = function() {
            return {
                length: "5-20"
            }
        };
        function ue(t, e) {
            1 & t && (a.Wb(0, "mat-error", 30),
                a.Jc(1, "INVALID_PASSWORD_LENGTH "),
                a.Vb()),
            2 & t && a.oc("translateParams", a.sc(1, be))
        }
        function de(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_PASSWORD_REPEAT "),
                a.Vb())
        }
        function me(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " PASSWORDS_NOT_MATCHING "),
                a.Vb())
        }
        const he = function() {
            return {
                value: 8
            }
        };
        function pe(t, e) {
            if (1 & t && (a.Rb(0, "mat-password-strength-info", 31),
                a.jc(1, "translate"),
                a.jc(2, "translate"),
                a.jc(3, "translate"),
                a.jc(4, "translate"),
                a.jc(5, "translate")),
            2 & t) {
                a.ic();
                const t = a.wc(41);
                a.oc("passwordComponent", t)("lowerCaseCriteriaMsg", a.kc(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", a.kc(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", a.kc(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", a.kc(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", a.lc(5, 14, "MIN_CHARS_CRITERIA_MSG", a.sc(17, he)))
            }
        }
        function fe(t, e) {
            if (1 & t && (a.Wb(0, "mat-option", 32),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.oc("value", t.id),
                    a.Db(1),
                    a.Lc(" ", t.question, " ")
            }
        }
        function ge(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_SECURITY_QUESTION "),
                a.Vb())
        }
        function ve(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_SECURITY_ANSWER "),
                a.Vb())
        }
        u.b.add(m.jb, m.m),
            u.a.watch();
        let Ce = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r, c, l) {
                        var b;
                        this.securityQuestionService = t,
                            this.userService = e,
                            this.securityAnswerService = i,
                            this.router = a,
                            this.formSubmitService = o,
                            this.translateService = n,
                            this.snackBar = r,
                            this.snackBarHelperService = c,
                            this.ngZone = l,
                            this.emailControl = new s.c("",[s.x.required, s.x.email]),
                            this.passwordControl = new s.c("",[s.x.required, s.x.minLength(5), s.x.maxLength(20)]),
                            this.repeatPasswordControl = new s.c("",[s.x.required, (b = this.passwordControl,
                                    function(t) {
                                        return b.value !== t.value ? {
                                            notSame: !0
                                        } : null
                                    }
                            )]),
                            this.securityQuestionControl = new s.c("",[s.x.required]),
                            this.securityAnswerControl = new s.c("",[s.x.required]),
                            this.error = null
                    }
                    ngOnInit() {
                        this.securityQuestionService.find(null).subscribe(t=>{
                                this.securityQuestions = t
                            }
                            , t=>console.log(t)),
                            this.formSubmitService.attachEnterKeyHandler("registration-form", "registerButton", ()=>this.save())
                    }
                    save() {
                        const t = {
                            email: this.emailControl.value,
                            password: this.passwordControl.value,
                            passwordRepeat: this.repeatPasswordControl.value,
                            securityQuestion: this.securityQuestions.find(t=>t.id === this.securityQuestionControl.value),
                            securityAnswer: this.securityAnswerControl.value
                        };
                        this.userService.save(t).subscribe(t=>{
                                this.securityAnswerService.save({
                                    UserId: t.id,
                                    answer: this.securityAnswerControl.value,
                                    SecurityQuestionId: this.securityQuestionControl.value
                                }).subscribe(()=>{
                                        this.ngZone.run(()=>this.router.navigate(["/login"])),
                                            this.snackBarHelperService.open("CONFIRM_REGISTER")
                                    }
                                )
                            }
                            , t=>{
                                if (console.log(t),
                                t.error && t.error.errors) {
                                    const e = t.error.errors[0];
                                    this.error = e.message ? e.message[0].toUpperCase() + e.message.slice(1) : e
                                }
                            }
                        )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ft),a.Qb(D),a.Qb(ie),a.Qb(S.b),a.Qb(Lt),a.Qb(g.e),a.Qb(T.a),a.Qb(L),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-register"]],
                        decls: 69,
                        vars: 39,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["ng-if", "error", 1, "error"], ["id", "registration-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "emailControl", "type", "text", "matInput", "", "aria-label", "Email address field", 3, "formControl", "focus"], ["translate", "", 4, "ngIf"], ["id", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field for the password", 3, "formControl", "focus"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "repeatPasswordControl", "type", "password", "matInput", "", "aria-label", "Field to confirm the password", 3, "formControl", "focus"], ["repeatPassword", ""], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], [1, "security-container"], ["color", "accent", "appearance", "outline"], ["placeholder", "", "name", "securityQuestion", "aria-label", "Selection list for the security question", 3, "formControl", "value", "valueChange", "focus"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "securityAnswerControl", "type", "text", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder", "focus"], ["type", "submit", "id", "registerButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the registration", 3, "disabled", "click"], [1, "material-icons"], ["id", "alreadyACustomerLink"], ["routerLink", "/login", "translate", "", 1, "primary-link"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"], [3, "value"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_REGISTRATION"),
                                a.Vb(),
                                a.Wb(4, "div", 3),
                                a.Jc(5),
                                a.Vb(),
                                a.Wb(6, "div", 4),
                                a.Wb(7, "mat-form-field", 5),
                                a.Wb(8, "mat-label", 2),
                                a.Jc(9, "LABEL_EMAIL"),
                                a.Vb(),
                                a.Wb(10, "input", 6),
                                a.ec("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.Vb(),
                                a.Hc(11, se, 2, 0, "mat-error", 7),
                                a.Hc(12, ce, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Wb(13, "mat-form-field", 5),
                                a.Wb(14, "mat-label", 2),
                                a.Jc(15, "LABEL_PASSWORD"),
                                a.Vb(),
                                a.Wb(16, "input", 8, 9),
                                a.ec("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.Vb(),
                                a.Wb(18, "mat-hint", 2),
                                a.Rb(19, "i", 10),
                                a.Wb(20, "em", 11),
                                a.Jc(21),
                                a.jc(22, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(23, "mat-hint", 12),
                                a.Jc(24),
                                a.Vb(),
                                a.Hc(25, le, 2, 0, "mat-error", 7),
                                a.Hc(26, ue, 2, 2, "mat-error", 13),
                                a.Vb(),
                                a.Wb(27, "mat-form-field", 5),
                                a.Wb(28, "mat-label", 2),
                                a.Jc(29, "LABEL_PASSWORD_REPEAT"),
                                a.Vb(),
                                a.Wb(30, "input", 14, 15),
                                a.ec("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.Vb(),
                                a.Wb(32, "mat-hint", 12),
                                a.Jc(33),
                                a.Vb(),
                                a.Hc(34, de, 2, 0, "mat-error", 7),
                                a.Hc(35, me, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Wb(36, "mat-slide-toggle", 16, 17),
                                a.Jc(38),
                                a.jc(39, "translate"),
                                a.Vb(),
                                a.Rb(40, "mat-password-strength", 18, 19),
                                a.Hc(42, pe, 6, 18, "mat-password-strength-info", 20),
                                a.Wb(43, "div", 21),
                                a.Wb(44, "mat-form-field", 22),
                                a.Wb(45, "mat-label"),
                                a.Jc(46),
                                a.jc(47, "translate"),
                                a.Vb(),
                                a.Wb(48, "mat-select", 23),
                                a.ec("valueChange", (function(t) {
                                        return e.selected = t
                                    }
                                ))("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.Hc(49, fe, 2, 2, "mat-option", 24),
                                a.Vb(),
                                a.Wb(50, "mat-hint", 2),
                                a.Rb(51, "i", 10),
                                a.Wb(52, "em", 11),
                                a.Jc(53, "CANNOT_BE_CHANGED_LATER"),
                                a.Vb(),
                                a.Vb(),
                                a.Hc(54, ge, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Wb(55, "mat-form-field", 5),
                                a.Wb(56, "mat-label", 2),
                                a.Jc(57, "SECURITY_ANSWER"),
                                a.Vb(),
                                a.Wb(58, "input", 25),
                                a.ec("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.jc(59, "translate"),
                                a.Vb(),
                                a.Hc(60, ve, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(61, "button", 26),
                                a.ec("click", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Wb(62, "i", 27),
                                a.Jc(63, " person_add "),
                                a.Vb(),
                                a.Jc(64),
                                a.jc(65, "translate"),
                                a.Vb(),
                                a.Wb(66, "div", 28),
                                a.Wb(67, "a", 29),
                                a.Jc(68, "ALREADY_A_CUSTOMER"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(17)
                                    , i = a.wc(31)
                                    , o = a.wc(37)
                                    , n = a.wc(41);
                                a.Db(5),
                                    a.Kc(e.error),
                                    a.Db(5),
                                    a.oc("formControl", e.emailControl),
                                    a.Db(1),
                                    a.oc("ngIf", e.emailControl.invalid && e.emailControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.emailControl.invalid && e.emailControl.errors.email),
                                    a.Db(4),
                                    a.oc("formControl", e.passwordControl),
                                    a.Db(5),
                                    a.Kc(a.lc(22, 27, "INVALID_PASSWORD_LENGTH", a.sc(38, be))),
                                    a.Db(3),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/20"),
                                    a.Db(1),
                                    a.oc("ngIf", e.passwordControl.invalid && e.passwordControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.passwordControl.invalid && (e.passwordControl.errors.minlength || e.passwordControl.errors.maxlength)),
                                    a.Db(4),
                                    a.oc("formControl", e.repeatPasswordControl),
                                    a.Db(3),
                                    a.Lc("", (null == i.value ? null : i.value.length) || 0, "/20"),
                                    a.Db(1),
                                    a.oc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.notSame),
                                    a.Db(1),
                                    a.oc("color", n.color),
                                    a.Db(2),
                                    a.Kc(a.kc(39, 30, "SHOW_PASSWORD_ADVICE")),
                                    a.Db(2),
                                    a.oc("password", t.value),
                                    a.Db(2),
                                    a.oc("ngIf", o.checked),
                                    a.Db(4),
                                    a.Lc(" ", a.kc(47, 32, "LABEL_SECURITY_QUESTION"), " "),
                                    a.Db(2),
                                    a.oc("formControl", e.securityQuestionControl)("value", e.selected),
                                    a.Db(1),
                                    a.oc("ngForOf", e.securityQuestions),
                                    a.Db(5),
                                    a.oc("ngIf", e.securityQuestionControl.invalid && e.securityQuestionControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.securityAnswerControl)("placeholder", a.kc(59, 34, "SECURITY_ANSWER_PLACEHOLDER")),
                                    a.Db(2),
                                    a.oc("ngIf", e.securityAnswerControl.invalid && e.securityAnswerControl.errors.required),
                                    a.Db(1),
                                    a.oc("disabled", e.emailControl.invalid || e.passwordControl.invalid || e.repeatPasswordControl.invalid || e.securityQuestionControl.invalid || e.securityAnswerControl.invalid),
                                    a.Db(3),
                                    a.Lc(" ", a.kc(65, 36, "BTN_REGISTER"), " ")
                            }
                        },
                        directives: [p.c, f.a, g.a, At.c, At.g, Pt.b, s.b, s.n, s.d, P.l, At.f, ae.a, oe.a, ne.a, P.k, v.a, S.d, At.b, oe.b, re.k],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#registerButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#alreadyACustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}.security-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}  mat-option .mat-option-text{font-size:14px}"]
                    }),
                    t
            }
        )();
        var we = i("NFeN")
            , ye = i("Qu3c");
        function De(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_EMAIL"),
                a.Vb())
        }
        function Se(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "INVALID_EMAIL"),
                a.Vb())
        }
        function We(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_SECURITY_ANSWER "),
                a.Vb())
        }
        function Ve(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_NEW_PASSWORD "),
                a.Vb())
        }
        function xe(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_PASSWORD_REPEAT "),
                a.Vb())
        }
        function Ie(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " PASSWORDS_NOT_MATCHING "),
                a.Vb())
        }
        const _e = function() {
            return {
                length: "5-20"
            }
        };
        function ke(t, e) {
            1 & t && (a.Wb(0, "mat-error", 28),
                a.Jc(1, "INVALID_PASSWORD_LENGTH "),
                a.Vb()),
            2 & t && a.oc("translateParams", a.sc(1, _e))
        }
        const Oe = function() {
            return {
                value: 8
            }
        };
        function Te(t, e) {
            if (1 & t && (a.Rb(0, "mat-password-strength-info", 29),
                a.jc(1, "translate"),
                a.jc(2, "translate"),
                a.jc(3, "translate"),
                a.jc(4, "translate"),
                a.jc(5, "translate")),
            2 & t) {
                a.ic();
                const t = a.wc(55);
                a.oc("passwordComponent", t)("lowerCaseCriteriaMsg", a.kc(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", a.kc(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", a.kc(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", a.kc(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", a.lc(5, 14, "MIN_CHARS_CRITERIA_MSG", a.sc(17, Oe)))
            }
        }
        u.b.add(m.I, h.c),
            u.a.watch();
        let Le = (()=>{
                class t {
                    constructor(t, e, i) {
                        var a;
                        this.securityQuestionService = t,
                            this.userService = e,
                            this.translate = i,
                            this.emailControl = new s.c("",[s.x.required, s.x.email]),
                            this.securityQuestionControl = new s.c({
                                disabled: !0,
                                value: ""
                            },[s.x.required]),
                            this.passwordControl = new s.c({
                                disabled: !0,
                                value: ""
                            },[s.x.required, s.x.minLength(5)]),
                            this.repeatPasswordControl = new s.c({
                                disabled: !0,
                                value: ""
                            },[s.x.required, (a = this.passwordControl,
                                    function(t) {
                                        return a.value !== t.value ? {
                                            notSame: !0
                                        } : null
                                    }
                            )])
                    }
                    findSecurityQuestion() {
                        this.securityQuestion = void 0,
                            this.emailControl.value ? this.securityQuestionService.findBy(this.emailControl.value).subscribe(t=>{
                                    t ? (this.securityQuestion = t.question,
                                        this.securityQuestionControl.enable(),
                                        this.passwordControl.enable(),
                                        this.repeatPasswordControl.enable()) : (this.securityQuestionControl.disable(),
                                        this.passwordControl.disable(),
                                        this.repeatPasswordControl.disable())
                                }
                                , t=>t) : (this.securityQuestionControl.disable(),
                                this.passwordControl.disable(),
                                this.repeatPasswordControl.disable())
                    }
                    resetPassword() {
                        this.userService.resetPassword({
                            email: this.emailControl.value,
                            answer: this.securityQuestionControl.value,
                            new: this.passwordControl.value,
                            repeat: this.repeatPasswordControl.value
                        }).subscribe(()=>{
                                this.error = void 0,
                                    this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(t=>{
                                            this.confirmation = t
                                        }
                                        , t=>{
                                            this.confirmation = t
                                        }
                                    ),
                                    this.resetForm()
                            }
                            , t=>{
                                this.error = t.error,
                                    this.confirmation = void 0,
                                    this.resetErrorForm()
                            }
                        )
                    }
                    resetForm() {
                        this.emailControl.setValue(""),
                            this.emailControl.markAsPristine(),
                            this.emailControl.markAsUntouched(),
                            this.securityQuestionControl.setValue(""),
                            this.securityQuestionControl.markAsPristine(),
                            this.securityQuestionControl.markAsUntouched(),
                            this.passwordControl.setValue(""),
                            this.passwordControl.markAsPristine(),
                            this.passwordControl.markAsUntouched(),
                            this.repeatPasswordControl.setValue(""),
                            this.repeatPasswordControl.markAsPristine(),
                            this.repeatPasswordControl.markAsUntouched()
                    }
                    resetErrorForm() {
                        this.emailControl.markAsPristine(),
                            this.emailControl.markAsUntouched(),
                            this.securityQuestionControl.setValue(""),
                            this.securityQuestionControl.markAsPristine(),
                            this.securityQuestionControl.markAsUntouched(),
                            this.passwordControl.setValue(""),
                            this.passwordControl.markAsPristine(),
                            this.passwordControl.markAsUntouched(),
                            this.repeatPasswordControl.setValue(""),
                            this.repeatPasswordControl.markAsPristine(),
                            this.repeatPasswordControl.markAsUntouched()
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ft),a.Qb(D),a.Qb(g.e))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-forgot-password"]],
                        decls: 61,
                        vars: 39,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], [1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "email", "type", "email", "matInput", "", "placeholder", "Enter your email", "aria-label", "Email address field", 3, "formControl", "ngModelChange"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please enter your email address to proceed", 3, "matTooltip"], ["translate", "", 4, "ngIf"], ["id", "forgot-form", 1, "form-container"], ["id", "securityAnswer", "type", "password", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please answer your selected security question", 3, "matTooltip"], ["id", "newPassword", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field for New Password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field to confirm the new password", 3, "formControl"], ["repeatPassword", ""], ["translate", "", 3, "translateParams", 4, "ngIf"], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], ["type", "submit", "id", "resetButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the changes", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_FORGOT_PASSWORD"),
                                a.Vb(),
                                a.Wb(4, "div", 3),
                                a.Jc(5),
                                a.Vb(),
                                a.Wb(6, "div", 4),
                                a.Jc(7),
                                a.Vb(),
                                a.Wb(8, "div", 5),
                                a.Wb(9, "mat-form-field", 6),
                                a.Wb(10, "mat-label", 2),
                                a.Jc(11, "LABEL_EMAIL"),
                                a.Vb(),
                                a.Wb(12, "input", 7),
                                a.ec("ngModelChange", (function() {
                                        return e.findSecurityQuestion()
                                    }
                                )),
                                a.Vb(),
                                a.Wb(13, "mat-icon", 8),
                                a.jc(14, "translate"),
                                a.Jc(15, "help_outline "),
                                a.Vb(),
                                a.Hc(16, De, 2, 0, "mat-error", 9),
                                a.Hc(17, Se, 2, 0, "mat-error", 9),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(18, "div", 10),
                                a.Wb(19, "mat-form-field", 6),
                                a.Wb(20, "mat-label", 2),
                                a.Jc(21, "LABEL_SECURITY_QUESTION"),
                                a.Vb(),
                                a.Rb(22, "input", 11),
                                a.Wb(23, "mat-icon", 12),
                                a.jc(24, "translate"),
                                a.Jc(25, "help_outline "),
                                a.Vb(),
                                a.Hc(26, We, 2, 0, "mat-error", 9),
                                a.Vb(),
                                a.Wb(27, "mat-form-field", 6),
                                a.Wb(28, "mat-label", 2),
                                a.Jc(29, "LABEL_NEW_PASSWORD"),
                                a.Vb(),
                                a.Rb(30, "input", 13, 14),
                                a.Wb(32, "mat-hint", 2),
                                a.Rb(33, "i", 15),
                                a.Wb(34, "em", 16),
                                a.Jc(35),
                                a.jc(36, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(37, "mat-hint", 17),
                                a.Jc(38),
                                a.Vb(),
                                a.Hc(39, Ve, 2, 0, "mat-error", 9),
                                a.Vb(),
                                a.Wb(40, "mat-form-field", 6),
                                a.Wb(41, "mat-label", 2),
                                a.Jc(42, "LABEL_REPEAT_NEW_PASSWORD"),
                                a.Vb(),
                                a.Rb(43, "input", 18, 19),
                                a.Wb(45, "mat-hint", 17),
                                a.Jc(46),
                                a.Vb(),
                                a.Hc(47, xe, 2, 0, "mat-error", 9),
                                a.Hc(48, Ie, 2, 0, "mat-error", 9),
                                a.Hc(49, ke, 2, 2, "mat-error", 20),
                                a.Vb(),
                                a.Wb(50, "mat-slide-toggle", 21, 22),
                                a.Jc(52),
                                a.jc(53, "translate"),
                                a.Vb(),
                                a.Rb(54, "mat-password-strength", 23, 24),
                                a.Hc(56, Te, 6, 18, "mat-password-strength-info", 25),
                                a.Vb(),
                                a.Wb(57, "button", 26),
                                a.ec("click", (function() {
                                        return e.resetPassword()
                                    }
                                )),
                                a.Rb(58, "i", 27),
                                a.Jc(59),
                                a.jc(60, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(31)
                                    , i = a.wc(44)
                                    , o = a.wc(51)
                                    , n = a.wc(55);
                                a.Db(4),
                                    a.oc("hidden", !(e.confirmation && !e.emailControl.dirty && !e.securityQuestionControl.dirty && !e.passwordControl.dirty && !e.repeatPasswordControl.dirty)),
                                    a.Db(1),
                                    a.Lc(" ", e.confirmation, " "),
                                    a.Db(1),
                                    a.oc("hidden", !(e.error && !e.emailControl.dirty && !e.securityQuestionControl.dirty && !e.passwordControl.dirty && !e.repeatPasswordControl.dirty)),
                                    a.Db(1),
                                    a.Lc(" ", e.error, " "),
                                    a.Db(5),
                                    a.oc("formControl", e.emailControl),
                                    a.Db(1),
                                    a.pc("matTooltip", a.kc(14, 27, "MANDATORY_EMAIL")),
                                    a.Db(3),
                                    a.oc("ngIf", e.emailControl.invalid && e.emailControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.emailControl.invalid && e.emailControl.errors.email),
                                    a.Db(5),
                                    a.pc("placeholder", e.securityQuestion),
                                    a.oc("formControl", e.securityQuestionControl),
                                    a.Db(1),
                                    a.pc("matTooltip", a.kc(24, 29, "MANDATORY_SECURITY_ANSWER")),
                                    a.Db(3),
                                    a.oc("ngIf", e.securityQuestionControl.invalid && e.securityQuestionControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.passwordControl),
                                    a.Db(5),
                                    a.Kc(a.lc(36, 31, "INVALID_PASSWORD_LENGTH", a.sc(38, _e))),
                                    a.Db(3),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/20"),
                                    a.Db(1),
                                    a.oc("ngIf", e.passwordControl.invalid && e.passwordControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.repeatPasswordControl),
                                    a.Db(3),
                                    a.Lc("", (null == i.value ? null : i.value.length) || 0, "/20"),
                                    a.Db(1),
                                    a.oc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.notSame),
                                    a.Db(1),
                                    a.oc("ngIf", e.repeatPasswordControl.invalid && ((null == e.repeatPasswordControl ? null : e.repeatPasswordControl.errors.minlength) || (null == e.repeatPasswordControl ? null : e.repeatPasswordControl.errors.maxlength))),
                                    a.Db(1),
                                    a.oc("color", n.color),
                                    a.Db(2),
                                    a.Kc(a.kc(53, 34, "SHOW_PASSWORD_ADVICE")),
                                    a.Db(2),
                                    a.oc("password", t.value),
                                    a.Db(2),
                                    a.oc("ngIf", o.checked),
                                    a.Db(1),
                                    a.oc("disabled", e.emailControl.invalid || e.securityQuestionControl.invalid || e.passwordControl.invalid || e.repeatPasswordControl.invalid || e.repeatPasswordControl.disabled),
                                    a.Db(2),
                                    a.Lc(" ", a.kc(60, 36, "BTN_CHANGE"), " ")
                            }
                        },
                        directives: [p.c, f.a, g.a, At.c, At.g, Pt.b, s.b, s.n, s.d, we.a, At.h, ye.a, P.l, At.f, ae.a, oe.a, v.a, At.b, oe.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:30px;width:60%}"]
                    }),
                    t
            }
        )();
        var Ae = i("0IaG");
        let Pe = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/products"
                    }
                    get(t) {
                        return this.http.get(this.host + "/" + t + "/reviews").pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    create(t, e) {
                        return this.http.put(this.host + "/" + t + "/reviews", e).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    patch(t) {
                        return this.http.patch(this.host + "/reviews", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    like(t) {
                        return this.http.post(this.host + "/reviews", {
                            id: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function Ee(t, e) {
            1 & t && (a.Wb(0, "mat-error", 1),
                a.Jc(1, "MANDATORY_REVIEW"),
                a.Vb())
        }
        u.b.add(m.D, m.b),
            u.a.watch();
        let Re = (()=>{
                class t {
                    constructor(t, e, i, a, o) {
                        this.data = t,
                            this.productReviewService = e,
                            this.dialogRef = i,
                            this.snackBar = a,
                            this.snackBarHelperService = o,
                            this.editReviewControl = new s.c("",[s.x.required, s.x.minLength(1), s.x.maxLength(160)]),
                            this.error = null
                    }
                    ngOnInit() {
                        this.editReviewControl.setValue(this.data.reviewData.message)
                    }
                    editReview() {
                        this.productReviewService.patch({
                            id: this.data.reviewData._id,
                            message: this.editReviewControl.value
                        }).subscribe(()=>{
                                this.dialogRef.close()
                            }
                            , t=>{
                                console.log(t),
                                    this.error = t
                            }
                        ),
                            this.snackBarHelperService.open("CONFIRM_CHANGES_SAVED")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.a),a.Qb(Pe),a.Qb(Ae.g),a.Qb(T.a),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-product-review-edit"]],
                        decls: 27,
                        vars: 13,
                        consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["translate", ""], ["appearance", "outline", "color", "accent", "hintLabel", "Max 160 characters", "floatLabel", "always"], ["matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to edit a product review", 3, "formControl", "placeholder", "focus"], ["textPut", ""], ["align", "end"], ["translate", "", 4, "ngIf"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog"], [1, "material-icons"], ["type", "submit", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 2, "margin-left", "5px", 3, "disabled", "click"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "mat-dialog-content"),
                                a.Wb(1, "div", 0),
                                a.Wb(2, "h1", 1),
                                a.Jc(3, "LABEL_EDIT_REVIEW"),
                                a.Vb(),
                                a.Wb(4, "div"),
                                a.Wb(5, "mat-form-field", 2),
                                a.Wb(6, "mat-label", 1),
                                a.Jc(7, "LABEL_REVIEW"),
                                a.Vb(),
                                a.Wb(8, "textarea", 3, 4),
                                a.ec("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.jc(10, "translate"),
                                a.Vb(),
                                a.Wb(11, "mat-hint", 5),
                                a.Jc(12),
                                a.Vb(),
                                a.Hc(13, Ee, 2, 0, "mat-error", 6),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(14, "mat-dialog-actions", 5),
                                a.Wb(15, "button", 7),
                                a.Wb(16, "i", 8),
                                a.Jc(17, " close "),
                                a.Vb(),
                                a.Wb(18, "span"),
                                a.Jc(19),
                                a.jc(20, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(21, "button", 9),
                                a.ec("click", (function() {
                                        return e.editReview()
                                    }
                                )),
                                a.Wb(22, "i", 8),
                                a.Jc(23, " send "),
                                a.Vb(),
                                a.Wb(24, "span"),
                                a.Jc(25),
                                a.jc(26, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(9);
                                a.Db(8),
                                    a.pc("placeholder", a.kc(10, 7, "WRITE_REVIEW_PLACEHOLDER")),
                                    a.oc("formControl", e.editReviewControl),
                                    a.Db(4),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/160"),
                                    a.Db(1),
                                    a.oc("ngIf", e.editReviewControl.invalid),
                                    a.Db(6),
                                    a.Lc(" ", a.kc(20, 9, "BTN_CLOSE"), ""),
                                    a.Db(2),
                                    a.oc("disabled", e.editReviewControl.invalid),
                                    a.Db(4),
                                    a.Lc(" ", a.kc(26, 11, "BTN_SUBMIT"), "")
                            }
                        },
                        directives: [Ae.e, p.d, g.a, At.c, At.g, Pt.b, Pt.d, s.b, s.i, s.n, s.d, At.f, P.l, Ae.c, v.a, Ae.d, At.b],
                        pipes: [g.d],
                        styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"]
                    }),
                    t
            }
        )();
        var Me = i("f0Cb")
            , Je = i("7EHt");
        function He(t, e) {
            if (1 & t && (a.Wb(0, "div", 24),
                a.jc(1, "translate"),
                a.Wb(2, "span", 25),
                a.Rb(3, "i", 26),
                a.Wb(4, "span", 27),
                a.Jc(5),
                a.Vb(),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.pc("matTooltip", a.kc(1, 2, "LABEL_BONUS")),
                    a.Db(5),
                    a.Kc(t.data.productData.points)
            }
        }
        function Ne(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "div", 29),
                    a.Wb(1, "div", 30),
                    a.Wb(2, "div", 31),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit
                                , o = a.ic(2);
                            return "Anonymous" !== i.author && i.author === o.author && o.editReview(i)
                        }
                    )),
                    a.jc(3, "translate"),
                    a.Wb(4, "cite"),
                    a.Jc(5),
                    a.Vb(),
                    a.Wb(6, "p"),
                    a.Jc(7),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(8, "div"),
                    a.Wb(9, "button", 32),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).likeReview(i)
                        }
                    )),
                    a.Wb(10, "span", 25),
                    a.Wb(11, "mat-icon"),
                    a.Jc(12, "thumb_up"),
                    a.Vb(),
                    a.Wb(13, "span", 33),
                    a.Jc(14),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic(2);
                a.Db(2),
                    a.pc("matTooltipDisabled", t.author !== i.author),
                    a.pc("matTooltip", a.kc(3, 6, "LABEL_EDIT_REVIEW")),
                    a.Db(3),
                    a.Kc(t.author),
                    a.Db(2),
                    a.Kc(t.message),
                    a.Db(2),
                    a.oc("disabled", t.liked || !i.isLoggedIn()),
                    a.Db(5),
                    a.Kc(t.likesCount)
            }
        }
        function Fe(t, e) {
            if (1 & t && (a.Wb(0, "div"),
                a.Hc(1, Ne, 15, 8, "div", 28),
                a.jc(2, "async"),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("ngForOf", a.kc(2, 1, t.reviews$))
            }
        }
        function Be(t, e) {
            1 & t && (a.Wb(0, "div"),
                a.Wb(1, "span", 34),
                a.Jc(2, " EMPTY_REVIEW_LIST "),
                a.Vb(),
                a.Vb())
        }
        const Ue = function() {
            return {
                length: "160"
            }
        };
        u.b.add(m.D, m.b, m.ib, m.W, m.l),
            u.a.watch();
        let je = (()=>{
                class t {
                    constructor(t, e, i, a, o, n) {
                        this.dialog = t,
                            this.data = e,
                            this.productReviewService = i,
                            this.userService = a,
                            this.snackBar = o,
                            this.snackBarHelperService = n,
                            this.author = "Anonymous",
                            this.reviewControl = new s.c("",[s.x.maxLength(160)])
                    }
                    ngOnInit() {
                        this.data.productData.points = Math.round(this.data.productData.price / 10),
                            this.reviews$ = this.productReviewService.get(this.data.productData.id),
                            this.userSubscription = this.userService.whoAmI().subscribe(t=>{
                                    this.author = t && t.email ? t.email : "Anonymous"
                                }
                                , t=>console.log(t))
                    }
                    ngOnDestroy() {
                        this.userSubscription && this.userSubscription.unsubscribe()
                    }
                    addReview(t) {
                        const e = {
                            message: t.value,
                            author: this.author
                        };
                        t.value = "",
                            this.productReviewService.create(this.data.productData.id, e).subscribe(()=>{
                                    this.reviews$ = this.productReviewService.get(this.data.productData.id)
                                }
                                , t=>console.log(t)),
                            this.snackBarHelperService.open("CONFIRM_REVIEW_SAVED")
                    }
                    editReview(t) {
                        this.dialog.open(Re, {
                            width: "500px",
                            height: "max-content",
                            data: {
                                reviewData: t
                            }
                        }).afterClosed().subscribe(()=>this.reviews$ = this.productReviewService.get(this.data.productData.id))
                    }
                    likeReview(t) {
                        this.productReviewService.like(t._id).subscribe(()=>{
                                console.log("Liked " + t._id)
                            }
                        ),
                            setTimeout(()=>this.reviews$ = this.productReviewService.get(this.data.productData.id), 200)
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.b),a.Qb(Ae.a),a.Qb(Pe),a.Qb(D),a.Qb(T.a),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-product-details"]],
                        decls: 59,
                        vars: 36,
                        consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "20px"], ["fxFlex", "noshrink"], [1, "img-thumbnail", 3, "src", "alt"], [3, "innerHTML"], [1, "item-price"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip", 4, "ngIf"], [1, "detail-divider"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["aria-label", "Expand for Reviews", 1, "mat-elevation-z0"], ["translate", "", 2, "margin-right", "5px"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["translate", ""], ["appearance", "outline", "color", "accent", "floatLabel", "always"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["cols", "50", "matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to review a product", 3, "formControl", "placeholder"], ["textPut", ""], ["align", "end"], ["align", "end", 1, "dialogAction"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 1, "buttons", 2, "margin-bottom", "5px", "margin-top", "5px", "margin-left", "5px", 3, "disabled", "click"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip"], [1, "fa-2x", "fa-layers", "fa-fw"], [1, "fas", "fa-crown"], [1, "fa-layers-counter", "fa-layers-bottom-left", "fa-2x", "warn-notification", 2, "font-size", "47px"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "comment"], ["fxLayout", "row"], ["matTooltipPosition", "right", 1, "review-text", 3, "matTooltipDisabled", "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Rate a helpful review", 1, "rw-button", 3, "disabled", "click"], [1, "fa-layers-counter", "fa-layers-bottom-right", "accent-notification", 2, "font-size", "32px"], ["translate", "", 1, "noResultText"]],
                        template: function(t, e) {
                            if (1 & t) {
                                const t = a.Xb();
                                a.Wb(0, "mat-dialog-content"),
                                    a.Wb(1, "div", 0),
                                    a.Wb(2, "div", 1),
                                    a.Wb(3, "div", 2),
                                    a.Rb(4, "img", 3),
                                    a.Vb(),
                                    a.Wb(5, "div"),
                                    a.Wb(6, "h1"),
                                    a.Jc(7),
                                    a.Vb(),
                                    a.Rb(8, "div", 4),
                                    a.Rb(9, "br"),
                                    a.Wb(10, "div"),
                                    a.Wb(11, "p", 5),
                                    a.Jc(12),
                                    a.Vb(),
                                    a.Hc(13, He, 6, 4, "div", 6),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Rb(14, "mat-divider", 7),
                                    a.Rb(15, "button", 8),
                                    a.Wb(16, "mat-expansion-panel", 9),
                                    a.Wb(17, "mat-expansion-panel-header"),
                                    a.Wb(18, "mat-panel-title"),
                                    a.Wb(19, "span", 10),
                                    a.Jc(20, "LABEL_REVIEWS"),
                                    a.Vb(),
                                    a.Wb(21, "span"),
                                    a.Jc(22),
                                    a.jc(23, "async"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Rb(24, "button", 8),
                                    a.Hc(25, Fe, 3, 3, "div", 11),
                                    a.jc(26, "async"),
                                    a.Hc(27, Be, 3, 0, "ng-template", null, 12, a.Ic),
                                    a.Vb(),
                                    a.Wb(29, "div"),
                                    a.Rb(30, "mat-divider", 7),
                                    a.Wb(31, "h4", 13),
                                    a.Jc(32, "WRITE_REVIEW"),
                                    a.Vb(),
                                    a.Wb(33, "mat-form-field", 14),
                                    a.Wb(34, "mat-label", 13),
                                    a.Jc(35, "LABEL_REVIEW"),
                                    a.Vb(),
                                    a.Wb(36, "mat-hint", 13),
                                    a.Rb(37, "i", 15),
                                    a.Wb(38, "em", 16),
                                    a.Jc(39),
                                    a.jc(40, "translate"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Rb(41, "textarea", 17, 18),
                                    a.jc(43, "translate"),
                                    a.Wb(44, "mat-hint", 19),
                                    a.Jc(45),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(46, "mat-dialog-actions", 20),
                                    a.Wb(47, "button", 21),
                                    a.Wb(48, "i", 22),
                                    a.Jc(49, " close "),
                                    a.Vb(),
                                    a.Wb(50, "span"),
                                    a.Jc(51),
                                    a.jc(52, "translate"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(53, "button", 23),
                                    a.ec("click", (function() {
                                            a.zc(t);
                                            const i = a.wc(42);
                                            return e.addReview(i)
                                        }
                                    )),
                                    a.Wb(54, "i", 22),
                                    a.Jc(55, " send "),
                                    a.Vb(),
                                    a.Wb(56, "span"),
                                    a.Jc(57),
                                    a.jc(58, "translate"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb()
                            }
                            if (2 & t) {
                                const t = a.wc(28)
                                    , n = a.wc(42);
                                var i, o;
                                const r = (null == (o = a.kc(26, 24, e.reviews$)) ? null : o.length) >= 1;
                                a.Db(4),
                                    a.pc("alt", e.data.productData.name),
                                    a.oc("src", "assets/public/images/products/" + e.data.productData.image, a.Cc),
                                    a.Db(3),
                                    a.Kc(e.data.productData.name),
                                    a.Db(1),
                                    a.oc("innerHTML", e.data.productData.description, a.Ac),
                                    a.Db(4),
                                    a.Lc("", e.data.productData.price, "\xa4"),
                                    a.Db(1),
                                    a.oc("ngIf", e.data.productData.points > 0),
                                    a.Db(9),
                                    a.Lc("(", null == (i = a.kc(23, 22, e.reviews$)) ? null : i.length, ")"),
                                    a.Db(3),
                                    a.oc("ngIf", r)("ngIfElse", t),
                                    a.Db(6),
                                    a.Gc("display", e.isLoggedIn() ? "block" : "none"),
                                    a.Db(2),
                                    a.Gc("display", e.isLoggedIn() ? "block" : "none"),
                                    a.Db(6),
                                    a.Kc(a.lc(40, 26, "MAX_TEXTAREA_LENGTH", a.sc(35, Ue))),
                                    a.Db(2),
                                    a.pc("placeholder", a.kc(43, 29, "WRITE_REVIEW_PLACEHOLDER")),
                                    a.oc("formControl", e.reviewControl),
                                    a.Db(4),
                                    a.Lc("", (null == n.value ? null : n.value.length) || 0, "/160"),
                                    a.Db(6),
                                    a.Lc(" ", a.kc(52, 31, "BTN_CLOSE"), ""),
                                    a.Db(2),
                                    a.Gc("display", e.isLoggedIn() ? "block" : "none"),
                                    a.oc("disabled", !n.value.trim()),
                                    a.Db(4),
                                    a.Lc(" ", a.kc(58, 33, "BTN_SUBMIT"), " ")
                            }
                        },
                        directives: [Ae.e, p.d, p.e, p.b, P.l, Me.a, v.a, Je.b, Je.d, Je.e, g.a, At.c, At.g, At.f, Pt.b, Pt.d, s.b, s.i, s.n, s.d, Ae.c, Ae.d, ye.a, P.k, we.a],
                        pipes: [P.b, g.d],
                        styles: [".img-thumbnail[_ngcontent-%COMP%]{height:auto;max-width:100%;padding:0;width:200px}mat-form-field[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]{word-break:break-all}.btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){left:530px;width:50px}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.rw-button[_ngcontent-%COMP%]{margin-left:8px}.comment[_ngcontent-%COMP%]{margin-bottom:8px}.review-link[_ngcontent-%COMP%]{font-size:11px;margin-top:-10px;text-decoration:none}#submitButton[_ngcontent-%COMP%]{float:right}.item-price[_ngcontent-%COMP%]{float:left;margin-right:40px;margin-top:8px}.noResultText[_ngcontent-%COMP%]{display:block;font-size:small;margin-left:auto;margin-right:auto;text-align:center}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}.buttons[_ngcontent-%COMP%]{padding-left:13px;padding-right:13px}"]
                    }),
                    t
            }
        )()
            , Qe = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Products"
                    }
                    search(t) {
                        return this.http.get(this.hostServer + "/rest/products/search?q=" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    find(t) {
                        return this.http.get(this.host + "/", {
                            params: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    get(t) {
                        return this.http.get(this.host + "/" + t + "?d=" + encodeURIComponent((new Date).toDateString())).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    put(t, e) {
                        return this.http.put(this.host + "/" + t, e).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var ze = i("M9IT")
            , Ge = i("cp0P")
            , qe = i("gFX4");
        let Ye = (()=>{
                class t {
                    constructor(t) {
                        this.ngZone = t,
                            this.io = qe,
                            this.ngZone.runOutsideAngular(()=>{
                                    this._socket = this.io.connect(window.location.origin, {
                                        path: (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname + "/") + "socket.io"
                                    })
                                }
                            )
                    }
                    socket() {
                        return this._socket
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(a.A))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )()
            , Ke = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Quantitys"
                    }
                    getAll() {
                        return this.http.get(this.host + "/").pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    put(t, e) {
                        return this.http.put(this.host + "/" + t, e).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var Xe = i("zkoq");
        function $e(t, e) {
            if (1 & t && (a.Wb(0, "div"),
                a.Wb(1, "span"),
                a.Jc(2),
                a.jc(3, "translate"),
                a.Vb(),
                a.Rb(4, "span", 9),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(2),
                    a.Lc("", a.kc(3, 2, "TITLE_SEARCH_RESULTS"), " - "),
                    a.Db(2),
                    a.oc("innerHTML", t.searchValue, a.Ac)
            }
        }
        function Ze(t, e) {
            1 & t && (a.Wb(0, "div"),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t && (a.Db(1),
                a.Kc(a.kc(2, 1, "TITLE_ALL_PRODUCTS")))
        }
        const ti = function(t) {
            return {
                quantity: t
            }
        };
        function ei(t, e) {
            if (1 & t && (a.Wb(0, "div", 24),
                a.Wb(1, "span", 25),
                a.Jc(2, "LABEL_ONLY_QUANTITY_LEFT"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic().$implicit;
                a.Db(1),
                    a.oc("translateParams", a.tc(1, ti, t.quantity))
            }
        }
        function ii(t, e) {
            1 & t && (a.Wb(0, "div", 26),
                a.Wb(1, "span", 27),
                a.Jc(2, "LABEL_SOLD_OUT"),
                a.Vb(),
                a.Vb())
        }
        function ai(t, e) {
            if (1 & t && (a.Wb(0, "span"),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = a.ic().$implicit;
                a.Db(1),
                    a.Lc("", t.price, "\xa4")
            }
        }
        function oi(t, e) {
            if (1 & t && (a.Wb(0, "span"),
                a.Wb(1, "s"),
                a.Jc(2),
                a.Vb(),
                a.Jc(3),
                a.Vb()),
            2 & t) {
                const t = a.ic().$implicit;
                a.Db(2),
                    a.Kc(t.price),
                    a.Db(1),
                    a.Lc(" ", t.deluxePrice, "\xa4")
            }
        }
        function ni(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 28),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic().$implicit;
                            return a.ic(2).addToBasket(e.id)
                        }
                    )),
                    a.Wb(1, "span", 27),
                    a.Jc(2, "ADD_BASKET"),
                    a.Vb(),
                    a.Vb()
            }
        }
        function ri(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-grid-tile"),
                    a.Wb(1, "mat-card", 13),
                    a.Hc(2, ei, 3, 3, "div", 14),
                    a.Hc(3, ii, 3, 0, "div", 15),
                    a.Wb(4, "div", 16),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).showDetail(i)
                        }
                    )),
                    a.Wb(5, "div", 17),
                    a.Rb(6, "img", 18),
                    a.Vb(),
                    a.Wb(7, "div", 19),
                    a.Wb(8, "div", 20),
                    a.Jc(9),
                    a.Vb(),
                    a.Wb(10, "div", 21),
                    a.Hc(11, ai, 2, 1, "span", 3),
                    a.Hc(12, oi, 4, 2, "span", 3),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(13, "div", 22),
                    a.Hc(14, ni, 3, 0, "button", 23),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic(2);
                a.Db(1),
                    a.Gc("width", "100%"),
                    a.Db(1),
                    a.oc("ngIf", t.quantity <= 5 && t.quantity > 0),
                    a.Db(1),
                    a.oc("ngIf", t.quantity <= 0),
                    a.Db(3),
                    a.pc("alt", t.name),
                    a.oc("src", "assets/public/images/products/" + t.image, a.Cc),
                    a.Db(3),
                    a.Lc(" ", t.name, " "),
                    a.Db(2),
                    a.oc("ngIf", !i.isDeluxe() || t.price === t.deluxePrice),
                    a.Db(1),
                    a.oc("ngIf", i.isDeluxe() && t.price !== t.deluxePrice),
                    a.Db(2),
                    a.oc("ngIf", i.isLoggedIn())
            }
        }
        function si(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "div"),
                    a.Wb(1, "mat-grid-list", 10, 11),
                    a.ec("resize", (function(e) {
                            return a.zc(t),
                                a.ic().onResize(e)
                        }
                    ), !1, a.yc),
                    a.Hc(3, ri, 15, 10, "mat-grid-tile", 12),
                    a.jc(4, "async"),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("cols", t.breakpoint),
                    a.Db(2),
                    a.oc("ngForOf", a.kc(4, 2, t.gridDataSource))
            }
        }
        function ci(t, e) {
            1 & t && (a.Wb(0, "mat-card", 29),
                a.Rb(1, "img", 30),
                a.Wb(2, "mat-card-title"),
                a.Wb(3, "span", 31),
                a.Jc(4, " NO_SEARCH_RESULT "),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "mat-card-content"),
                a.Wb(6, "span", 31),
                a.Jc(7, " EMPTY_SEARCH_RESULT "),
                a.Vb(),
                a.Vb(),
                a.Vb())
        }
        u.b.add(m.o, m.e),
            u.a.watch();
        let li = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r, s, c, l, b, u, d) {
                        this.deluxeGuard = t,
                            this.dialog = e,
                            this.productService = i,
                            this.quantityService = a,
                            this.basketService = o,
                            this.translateService = n,
                            this.router = r,
                            this.route = s,
                            this.sanitizer = c,
                            this.ngZone = l,
                            this.io = b,
                            this.snackBarHelperService = u,
                            this.cdRef = d,
                            this.displayedColumns = ["Image", "Product", "Description", "Price", "Select"],
                            this.pageSizeOptions = [],
                            this.resultsLength = 0,
                            this.paginator = null,
                            this.breakpoint = 6,
                            this.emptyState = !1
                    }
                    ngAfterViewInit() {
                        const t = this.productService.search("")
                            , e = this.quantityService.getAll();
                        Object(Ge.a)([e, t]).subscribe(([t,e])=>{
                                let i = [];
                                this.tableData = e,
                                    this.trustProductDescription(e);
                                for (const o of e)
                                    i.push({
                                        name: o.name,
                                        price: o.price,
                                        deluxePrice: o.deluxePrice,
                                        id: o.id,
                                        image: o.image,
                                        description: o.description
                                    });
                                for (const o of t) {
                                    const t = i.find(t=>t.id === o.ProductId);
                                    void 0 !== t && (t.quantity = o.quantity)
                                }
                                this.dataSource = new A.o(i);
                                for (let o = 1; o <= Math.ceil(this.dataSource.data.length / 12); o++)
                                    this.pageSizeOptions.push(12 * o);
                                this.paginator.pageSizeOptions = this.pageSizeOptions,
                                    this.dataSource.paginator = this.paginator,
                                    this.gridDataSource = this.dataSource.connect(),
                                    this.resultsLength = this.dataSource.data.length,
                                    this.filterTable(),
                                    this.routerSubscription = this.router.events.subscribe(()=>{
                                            this.filterTable()
                                        }
                                    );
                                let a = this.route.snapshot.queryParams.challenge;
                                a && this.route.snapshot.url.join("").match(/hacking-instructor/) && this.startHackingInstructor(decodeURIComponent(a)),
                                    window.innerWidth < 2600 ? (this.breakpoint = 4,
                                    window.innerWidth < 1740 && (this.breakpoint = 3,
                                    window.innerWidth < 1280 && (this.breakpoint = 2,
                                    window.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6,
                                    this.cdRef.detectChanges()
                            }
                            , t=>console.log(t))
                    }
                    ngOnDestroy() {
                        this.routerSubscription && this.routerSubscription.unsubscribe(),
                        this.productSubscription && this.productSubscription.unsubscribe(),
                        this.dataSource && this.dataSource.disconnect()
                    }
                    filterTable() {
                        let t = this.route.snapshot.queryParams.q;
                        t ? (t = t.trim(),
                            this.ngZone.runOutsideAngular(()=>{
                                    this.io.socket().emit("verifyLocalXssChallenge", t)
                                }
                            ),
                            this.dataSource.filter = t.toLowerCase(),
                            this.searchValue = this.sanitizer.bypassSecurityTrustHtml(t),
                            this.gridDataSource.subscribe(t=>{
                                    this.emptyState = 0 === t.length
                                }
                            )) : (this.dataSource.filter = "",
                            this.searchValue = void 0,
                            this.emptyState = !1)
                    }
                    startHackingInstructor(t) {
                        console.log(`Starting instructions for challenge "${t}"`),
                            i.e(5).then(i.bind(null, "s2oO")).then(e=>{
                                    e.startHackingInstructorFor(t)
                                }
                            )
                    }
                    showDetail(t) {
                        this.dialog.open(je, {
                            width: "500px",
                            height: "max-content",
                            data: {
                                productData: t
                            }
                        })
                    }
                    addToBasket(t) {
                        this.basketService.find(Number(sessionStorage.getItem("bid"))).subscribe(e=>{
                                let i = e.Products
                                    , a = !1;
                                for (let o = 0; o < i.length; o++)
                                    if (i[o].id === t) {
                                        a = !0,
                                            this.basketService.get(i[o].BasketItem.id).subscribe(t=>{
                                                    this.basketService.put(t.id, {
                                                        quantity: t.quantity + 1
                                                    }).subscribe(t=>{
                                                            this.productService.get(t.ProductId).subscribe(t=>{
                                                                    this.translateService.get("BASKET_ADD_SAME_PRODUCT", {
                                                                        product: t.name
                                                                    }).subscribe(t=>{
                                                                            this.snackBarHelperService.open(t, "confirmBar"),
                                                                                this.basketService.updateNumberOfCardItems()
                                                                        }
                                                                        , t=>{
                                                                            this.snackBarHelperService.open(t, "confirmBar"),
                                                                                this.basketService.updateNumberOfCardItems()
                                                                        }
                                                                    )
                                                                }
                                                                , t=>console.log(t))
                                                        }
                                                        , t=>{
                                                            var e;
                                                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                                                console.log(t)
                                                        }
                                                    )
                                                }
                                                , t=>console.log(t));
                                        break
                                    }
                                a || this.basketService.save({
                                    ProductId: t,
                                    BasketId: sessionStorage.getItem("bid"),
                                    quantity: 1
                                }).subscribe(t=>{
                                        this.productService.get(t.ProductId).subscribe(t=>{
                                                this.translateService.get("BASKET_ADD_PRODUCT", {
                                                    product: t.name
                                                }).subscribe(t=>{
                                                        this.snackBarHelperService.open(t, "confirmBar"),
                                                            this.basketService.updateNumberOfCardItems()
                                                    }
                                                    , t=>{
                                                        this.snackBarHelperService.open(t, "confirmBar"),
                                                            this.basketService.updateNumberOfCardItems()
                                                    }
                                                )
                                            }
                                            , t=>console.log(t))
                                    }
                                    , t=>{
                                        var e;
                                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                            console.log(t)
                                    }
                                )
                            }
                            , t=>console.log(t))
                    }
                    trustProductDescription(t) {
                        for (let e = 0; e < t.length; e++)
                            t[e].description = this.sanitizer.bypassSecurityTrustHtml(t[e].description)
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    onResize(t) {
                        t.target.innerWidth < 2600 ? (this.breakpoint = 4,
                        t.target.innerWidth < 1740 && (this.breakpoint = 3,
                        t.target.innerWidth < 1280 && (this.breakpoint = 2,
                        t.target.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6
                    }
                    isDeluxe() {
                        return this.deluxeGuard.isDeluxe()
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(O),a.Qb(Ae.b),a.Qb(Qe),a.Qb(Ke),a.Qb(V),a.Qb(g.e),a.Qb(S.b),a.Qb(S.a),a.Qb(o.c),a.Qb(a.A),a.Qb(Ye),a.Qb(L),a.Qb(a.h))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-search-result"]],
                        viewQuery: function(t, e) {
                            var i;
                            1 & t && a.Fc(ze.a, !0),
                            2 & t && a.vc(i = a.fc()) && (e.paginator = i.first)
                        },
                        decls: 12,
                        vars: 7,
                        consts: [["fxLayoutAlign", "center"], [1, "table-container", "custom-slate"], [1, "heading", "mat-elevation-z6"], [4, "ngIf"], ["id", "search-result-heading"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["color", "accent", 1, "mat-elevation-z6", 3, "pageSize", "pageSizeOptions", "length"], ["paginator", ""], ["id", "searchValue", 3, "innerHTML"], ["gutterSize", "30px", 3, "cols", "resize"], ["table", ""], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z6", "ribbon-card"], ["class", "ribbon ribbon-top-left", 4, "ngIf"], ["class", "ribbon ribbon-top-left ribbon-sold", 4, "ngIf"], ["aria-label", "Click for more information about the product", "matTooltip", "Click for more information", "matTooltipPosition", "above", 1, "product", 3, "click"], ["fxFlexAlign", "center", "fxFlex", "60%", 1, "img-container"], ["mat-card-image", "", "role", "button", 1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlexAlign", "center", "fxFlex", "40%"], [1, "item-name"], [1, "item-price"], [2, "display", "flex", "justify-content", "center"], ["aria-label", "Add to Basket", "class", "btn-basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "ribbon", "ribbon-top-left"], ["translate", "", 3, "translateParams"], [1, "ribbon", "ribbon-top-left", "ribbon-sold"], ["translate", ""], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-basket", 3, "click"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "div", 1),
                                a.Wb(2, "div", 2),
                                a.Hc(3, $e, 5, 4, "div", 3),
                                a.Hc(4, Ze, 3, 3, "div", 3),
                                a.Rb(5, "div", 4),
                                a.Vb(),
                                a.Hc(6, si, 5, 4, "div", 5),
                                a.Hc(7, ci, 8, 0, "ng-template", null, 6, a.Ic),
                                a.Rb(9, "mat-divider"),
                                a.Rb(10, "mat-paginator", 7, 8),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(8);
                                a.Db(3),
                                    a.oc("ngIf", e.searchValue),
                                    a.Db(1),
                                    a.oc("ngIf", !e.searchValue),
                                    a.Db(2),
                                    a.oc("ngIf", !e.emptyState)("ngIfElse", t),
                                    a.Db(4),
                                    a.oc("pageSize", 12)("pageSizeOptions", e.pageSizeOptions)("length", e.resultsLength)
                            }
                        },
                        directives: [p.c, P.l, Me.a, ze.a, Xe.a, P.k, Xe.c, f.a, ye.a, p.a, p.b, f.d, g.a, v.a, f.f, f.b],
                        pipes: [g.d, P.b],
                        styles: ['.table-container[_ngcontent-%COMP%]{min-width:350px;width:80%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{width:100%}.product[_ngcontent-%COMP%]{cursor:pointer}.btn-basket[_ngcontent-%COMP%]{bottom:10%}mat-card[_ngcontent-%COMP%]{height:calc(100% - 70px)}.item-price[_ngcontent-%COMP%]{font-size:medium;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.ribbon-card[_ngcontent-%COMP%]{position:relative}.ribbon[_ngcontent-%COMP%]{height:150px;overflow:hidden;position:absolute;width:150px}.ribbon[_ngcontent-%COMP%]:before{content:"";z-index:-1}.ribbon[_ngcontent-%COMP%]:before, .ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;position:absolute}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:700 18px/1 Lato,sans-serif;padding:15px 0;text-align:center;text-shadow:0 1px 1px rgba(0,0,0,.2);width:225px}.ribbon-top-left[_ngcontent-%COMP%]{left:-10px;top:-10px}.ribbon-top-left[_ngcontent-%COMP%]:before{border-left-color:transparent;border-top-color:transparent;right:0;top:0}.ribbon-top-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{right:-25px;top:30px;transform:rotate(-45deg)}']
                    }),
                    t
            }
        )()
            , bi = (()=>{
                class t {
                    get nativeWindow() {
                        return window
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var ui = i("bSwM");
        function di(t, e) {
            if (1 & t && (a.Wb(0, "div", 20),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.Kc(t.error)
            }
        }
        function mi(t, e) {
            1 & t && (a.Wb(0, "mat-error", 5),
                a.Jc(1, "MANDATORY_EMAIL"),
                a.Vb())
        }
        function hi(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 21),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic();
                            return e.hide = !e.hide
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Rb(2, "i", 22),
                    a.Vb()
            }
            2 & t && a.pc("matTooltip", a.kc(1, 1, "SHOW_PWD_TOOLTIP"))
        }
        function pi(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 23),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic();
                            return e.hide = !e.hide
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Rb(2, "i", 24),
                    a.Vb()
            }
            2 & t && a.pc("matTooltip", a.kc(1, 1, "HIDE_PWD_TOOLTIP"))
        }
        function fi(t, e) {
            1 & t && (a.Wb(0, "mat-error", 5),
                a.Jc(1, "MANDATORY_PASSWORD"),
                a.Vb())
        }
        function gi(t, e) {
            1 & t && (a.Wb(0, "div", 25),
                a.Wb(1, "div", 26),
                a.Rb(2, "div"),
                a.Vb(),
                a.Wb(3, "div", 27),
                a.Jc(4, "LABEL_OR"),
                a.Vb(),
                a.Wb(5, "div", 26),
                a.Rb(6, "div"),
                a.Vb(),
                a.Vb())
        }
        function vi(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 28),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().googleLogin()
                        }
                    )),
                    a.Rb(1, "i", 29),
                    a.Jc(2),
                    a.jc(3, "translate"),
                    a.Vb()
            }
            2 & t && (a.Db(2),
                a.Lc(" ", a.kc(3, 1, "BTN_GOOGLE_LOGIN"), " "))
        }
        u.b.add(m.z, m.o, m.p, d.f),
            u.a.watch();
        let Ci = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r) {
                        this.configurationService = t,
                            this.userService = e,
                            this.windowRefService = i,
                            this.cookieService = a,
                            this.router = o,
                            this.formSubmitService = n,
                            this.ngZone = r,
                            this.emailControl = new s.c("",[s.x.required]),
                            this.passwordControl = new s.c("",[s.x.required]),
                            this.hide = !0,
                            this.rememberMe = new s.c(!1),
                            this.clientId = "1005568560502-6hm16lef8oh46hr2d98vf2ohlnj4nfhq.apps.googleusercontent.com",
                            this.oauthUnavailable = !0,
                            this.redirectUri = ""
                    }
                    ngOnInit() {
                        const t = localStorage.getItem("email");
                        t ? (this.user = {},
                            this.user.email = t,
                            this.rememberMe.setValue(!0)) : this.rememberMe.setValue(!1),
                            this.redirectUri = this.windowRefService.nativeWindow.location.protocol + "//" + this.windowRefService.nativeWindow.location.host,
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    if (t && t.application && t.application.googleOauth) {
                                        this.clientId = t.application.googleOauth.clientId;
                                        let e = t.application.googleOauth.authorizedRedirects.find(t=>t.uri === this.redirectUri);
                                        e ? (this.oauthUnavailable = !1,
                                            this.redirectUri = e.proxy ? e.proxy : e.uri) : (this.oauthUnavailable = !0,
                                            console.log(this.redirectUri + " is not an authorized redirect URI for this application."))
                                    }
                                }
                                , t=>console.log(t)),
                            this.formSubmitService.attachEnterKeyHandler("login-form", "loginButton", ()=>this.login())
                    }
                    login() {
                        this.user = {},
                            this.user.email = this.emailControl.value,
                            this.user.password = this.passwordControl.value,
                            this.userService.login(this.user).subscribe(t=>{
                                    localStorage.setItem("token", t.token);
                                    let e = new Date;
                                    e.setHours(e.getHours() + 8),
                                        this.cookieService.set("token", t.token, e, "/"),
                                        sessionStorage.setItem("bid", t.bid),
                                        this.userService.isLoggedIn.next(!0),
                                        this.ngZone.run(()=>this.router.navigate(["/search"]))
                                }
                                , ({error: t})=>{
                                    if (t.status && t.data && "totp_token_required" === t.status)
                                        return localStorage.setItem("totp_tmp_token", t.data.tmpToken),
                                            void this.ngZone.run(()=>this.router.navigate(["/2fa/enter"]));
                                    localStorage.removeItem("token"),
                                        this.cookieService.delete("token", "/"),
                                        sessionStorage.removeItem("bid"),
                                        this.error = t,
                                        this.userService.isLoggedIn.next(!1),
                                        this.emailControl.markAsPristine(),
                                        this.passwordControl.markAsPristine()
                                }
                            ),
                            this.rememberMe.value ? localStorage.setItem("email", this.user.email) : localStorage.removeItem("email"),
                        this.error && this.user.email && this.user.email.match(/support@.*/) && console.log("@echipa de suport: Secretul nostru comun este \xeenc\u0103 Caoimhe cu parola de master gol!")
                    }
                    googleLogin() {
                        this.windowRefService.nativeWindow.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.clientId}&response_type=token&scope=email&redirect_uri=${this.redirectUri}`)
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(b),a.Qb(D),a.Qb(bi),a.Qb(r.a),a.Qb(S.b),a.Qb(Lt),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-login"]],
                        decls: 35,
                        vars: 18,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["class", "error", 4, "ngIf"], ["id", "login-form", 1, "form-container"], ["color", "accent", "appearance", "outline"], ["translate", ""], ["id", "email", "name", "email", "matInput", "", "placeholder", "", "aria-label", "Text field for the login email", 3, "formControl", "focus"], ["email", ""], ["translate", "", 4, "ngIf"], ["id", "password", "name", "password", "matInput", "", "placeholder", "", "aria-label", "Text field for the login password", 3, "formControl", "type", "focus"], ["password", ""], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["routerLink", "/forgot-password", "translate", "", 1, "primary-link", "forgot-pw"], ["type", "submit", "id", "loginButton", "mat-raised-button", "", "color", "primary", "aria-label", "Login", 3, "disabled", "click"], ["id", "rememberMe", "aria-label", "Checkbox to stay logged in or not logged in", 3, "formControl"], ["class", "breakLine", 4, "ngIf"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", "class", "google-button", 3, "click", 4, "ngIf"], ["id", "newCustomerLink"], ["routerLink", "/register", "translate", "", 1, "primary-link"], [1, "error"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye", 1, "fas", "fa-eye"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye Slash", 1, "fas", "fa-eye-slash"], [1, "breakLine"], [1, "line"], ["translate", "", 1, "textOnLine"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", 1, "google-button", 3, "click"], [1, "fab", "fa-google", "fa-lg"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1"),
                                a.Jc(3, "Login"),
                                a.Vb(),
                                a.Hc(4, di, 2, 1, "div", 2),
                                a.Wb(5, "div", 3),
                                a.Wb(6, "mat-form-field", 4),
                                a.Wb(7, "mat-label", 5),
                                a.Jc(8, "LABEL_EMAIL"),
                                a.Vb(),
                                a.Wb(9, "input", 6, 7),
                                a.ec("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.Vb(),
                                a.Hc(11, mi, 2, 0, "mat-error", 8),
                                a.Vb(),
                                a.Wb(12, "mat-form-field", 4),
                                a.Wb(13, "mat-label", 5),
                                a.Jc(14, "LABEL_PASSWORD"),
                                a.Vb(),
                                a.Wb(15, "input", 9, 10),
                                a.ec("focus", (function() {
                                        return e.error = null
                                    }
                                )),
                                a.Vb(),
                                a.Hc(17, hi, 3, 3, "button", 11),
                                a.Hc(18, pi, 3, 3, "button", 12),
                                a.Hc(19, fi, 2, 0, "mat-error", 8),
                                a.Vb(),
                                a.Wb(20, "a", 13),
                                a.Jc(21, "FORGOT_PASSWORD"),
                                a.Vb(),
                                a.Wb(22, "button", 14),
                                a.ec("click", (function() {
                                        return e.login()
                                    }
                                )),
                                a.Wb(23, "mat-icon"),
                                a.Jc(24, " exit_to_app "),
                                a.Vb(),
                                a.Jc(25),
                                a.jc(26, "translate"),
                                a.Vb(),
                                a.Wb(27, "mat-checkbox", 15),
                                a.Jc(28),
                                a.jc(29, "translate"),
                                a.Vb(),
                                a.Hc(30, gi, 7, 0, "div", 16),
                                a.Hc(31, vi, 4, 3, "button", 17),
                                a.Wb(32, "div", 18),
                                a.Wb(33, "a", 19),
                                a.Jc(34, "NO_CUSTOMER"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(4),
                                a.oc("ngIf", e.error),
                                a.Db(5),
                                a.oc("formControl", e.emailControl),
                                a.Db(2),
                                a.oc("ngIf", e.emailControl.invalid),
                                a.Db(4),
                                a.oc("formControl", e.passwordControl)("type", e.hide ? "password" : "text"),
                                a.Db(2),
                                a.oc("ngIf", e.hide),
                                a.Db(1),
                                a.oc("ngIf", !e.hide),
                                a.Db(1),
                                a.oc("ngIf", e.passwordControl.invalid),
                                a.Db(3),
                                a.oc("disabled", !e.emailControl.value || !e.passwordControl.value),
                                a.Db(3),
                                a.Lc(" ", a.kc(26, 14, "BTN_LOGIN"), " "),
                                a.Db(2),
                                a.oc("formControl", e.rememberMe),
                                a.Db(1),
                                a.Lc(" ", a.kc(29, 16, "REMEMBER_ME"), " "),
                                a.Db(2),
                                a.oc("ngIf", !e.oauthUnavailable),
                                a.Db(1),
                                a.oc("ngIf", !e.oauthUnavailable))
                        },
                        directives: [p.c, f.a, P.l, At.c, At.g, g.a, Pt.b, s.b, s.n, s.d, S.d, v.a, we.a, ui.a, At.b, At.h, ye.a],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.forgot-pw[_ngcontent-%COMP%]{font-size:11px;margin-top:-15px}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px;margin-left:20%;margin-top:5px}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}mat-form-field[_ngcontent-%COMP%]:nth-child(2){padding-bottom:20px}#loginButton[_ngcontent-%COMP%], #loginButtonGoogle[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.breakLine[_ngcontent-%COMP%]{display:table}.breakLine[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:table-cell;white-space:nowrap}.line[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-bottom:1px solid silver;height:1px}.textOnLine[_ngcontent-%COMP%]{padding:0 5px}.line[_ngcontent-%COMP%]{vertical-align:middle;width:50%}#newCustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}[_nghost-%COMP%]     .mat-form-field-suffix{margin-bottom:auto!important;margin-top:auto!important}[_nghost-%COMP%]     .mat-icon-button{height:40px!important;width:24px!important}"]
                    }),
                    t
            }
        )();
        u.b.add(m.b),
            u.a.watch();
        let wi = (()=>{
                class t {
                    constructor(t, e) {
                        this.dialogData = t,
                            this.userService = e
                    }
                    ngOnInit() {
                        this.userService.get(this.dialogData.id).subscribe(t=>{
                                this.user = t
                            }
                            , t=>console.log(t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.a),a.Qb(D))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-user-details"]],
                        decls: 29,
                        vars: 10,
                        consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], ["translate", "LABEL_EMAIL"], ["translate", "LABEL_CREATED_AT"], ["translate", "LABEL_UPDATED_AT"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-dialog-content", 0),
                                a.Wb(1, "header"),
                                a.Wb(2, "h1"),
                                a.Jc(3),
                                a.jc(4, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(5, "mat-divider"),
                                a.Wb(6, "div", 1),
                                a.Wb(7, "div", 2),
                                a.Wb(8, "div"),
                                a.Rb(9, "strong", 3),
                                a.Wb(10, "p"),
                                a.Jc(11),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(12, "div", 2),
                                a.Wb(13, "div"),
                                a.Rb(14, "strong", 4),
                                a.Wb(15, "p"),
                                a.Jc(16),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(17, "div"),
                                a.Rb(18, "strong", 5),
                                a.Wb(19, "p"),
                                a.Jc(20),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(21, "mat-dialog-actions", 6),
                                a.Rb(22, "button", 7),
                                a.Wb(23, "button", 8),
                                a.Wb(24, "i", 9),
                                a.Jc(25, " close "),
                                a.Vb(),
                                a.Wb(26, "span"),
                                a.Jc(27),
                                a.jc(28, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(3),
                                a.Mc("", a.kc(4, 6, "LABEL_USER"), " #", null == e.user ? null : e.user.id, ""),
                                a.Db(8),
                                a.Kc(null == e.user ? null : e.user.email),
                                a.Db(5),
                                a.Kc(null == e.user ? null : e.user.createdAt),
                                a.Db(4),
                                a.Kc(null == e.user ? null : e.user.updatedAt),
                                a.Db(7),
                                a.Lc(" ", a.kc(28, 8, "BTN_CLOSE"), ""))
                        },
                        directives: [Ae.e, Me.a, p.d, p.e, g.a, Ae.c, v.a, Ae.d],
                        pipes: [g.d],
                        styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}"]
                    }),
                    t
            }
        )()
            , yi = (()=>{
                class t {
                    constructor(t) {
                        this.dialogData = t
                    }
                    ngOnInit() {
                        this.feedback = this.dialogData.feedback,
                            this.id = this.dialogData.id
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.a))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-feedback-details"]],
                        decls: 23,
                        vars: 11,
                        consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], [2, "margin-top", "10px !important"], [3, "innerHTML"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-dialog-content", 0),
                                a.Wb(1, "header"),
                                a.Wb(2, "h1"),
                                a.Jc(3),
                                a.jc(4, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(5, "mat-divider"),
                                a.Wb(6, "div", 1),
                                a.Wb(7, "div", 2),
                                a.Wb(8, "span"),
                                a.Jc(9),
                                a.jc(10, "translate"),
                                a.Vb(),
                                a.Wb(11, "p"),
                                a.Jc(12),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(13, "div", 3),
                                a.Rb(14, "cite", 4),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(15, "mat-dialog-actions", 5),
                                a.Rb(16, "button", 6),
                                a.Wb(17, "button", 7),
                                a.Wb(18, "i", 8),
                                a.Jc(19, " close "),
                                a.Vb(),
                                a.Wb(20, "span"),
                                a.Jc(21),
                                a.jc(22, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(3),
                                a.Kc(a.kc(4, 5, "LABEL_COMMENT")),
                                a.Db(6),
                                a.Lc("", a.kc(10, 7, "LABEL_USER"), ":"),
                                a.Db(3),
                                a.Lc("#", e.id, ""),
                                a.Db(2),
                                a.oc("innerHTML", e.feedback, a.Ac),
                                a.Db(7),
                                a.Lc(" ", a.kc(22, 9, "BTN_CLOSE"), ""))
                        },
                        directives: [Ae.e, Me.a, p.d, p.e, Ae.c, v.a, Ae.d],
                        pipes: [g.d],
                        styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}mat-dialog-content[_ngcontent-%COMP%]{max-width:320px;min-width:280px}"]
                    }),
                    t
            }
        )();
        const Di = ["paginatorUsers"]
            , Si = ["paginatorFeedb"];
        function Wi(t, e) {
            1 & t && a.Rb(0, "mat-header-cell")
        }
        function Vi(t, e) {
            1 & t && a.Rb(0, "i", 30)
        }
        function xi(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 28),
                a.Hc(1, Vi, 1, 0, "i", 29),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("ngIf", t.token)
            }
        }
        function Ii(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 1)
        }
        function _i(t, e) {
            1 & t && a.Rb(0, "mat-cell", 31),
            2 & t && a.oc("innerHTML", e.$implicit.email, a.Ac)
        }
        function ki(t, e) {
            1 & t && a.Rb(0, "mat-header-cell")
        }
        function Oi(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell"),
                    a.Wb(1, "button", 32),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().showUserDetail(i.id)
                        }
                    )),
                    a.Rb(2, "i", 33),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Ti(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Li(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function Ai(t, e) {
            1 & t && a.Rb(0, "mat-header-cell")
        }
        function Pi(t, e) {
            1 & t && a.Rb(0, "mat-cell", 28)
        }
        function Ei(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 1)
        }
        function Ri(t, e) {
            1 & t && a.Rb(0, "mat-cell", 31),
            2 & t && a.oc("innerHTML", e.$implicit.email, a.Ac)
        }
        function Mi(t, e) {
            1 & t && a.Rb(0, "mat-header-cell")
        }
        function Ji(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell"),
                    a.Wb(1, "button", 32),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().showUserDetail(i.id)
                        }
                    )),
                    a.Rb(2, "i", 33),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Hi(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Ni(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function Fi(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 1)
        }
        function Bi(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell"),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.UserId, "")
            }
        }
        function Ui(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 1)
        }
        function ji(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 34),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().showFeedbackDetails(i.comment, i.UserId)
                        }
                    )),
                    a.Rb(1, "p", 35),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("innerHTML", t.comment, a.Ac)
            }
        }
        function Qi(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 1)
        }
        function zi(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell"),
                a.Rb(1, "bar-rating", 36),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("rate", t.rating)("max", 5)
            }
        }
        function Gi(t, e) {
            1 & t && a.Rb(0, "mat-header-cell")
        }
        function qi(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell"),
                    a.Wb(1, "button", 32),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().deleteFeedback(i.id)
                        }
                    )),
                    a.Rb(2, "i", 37),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Yi(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Ki(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        u.b.add(m.gb, m.o, m.x, m.a, m.Z),
            u.a.watch();
        let Xi = (()=>{
                class t {
                    constructor(t, e, i, a) {
                        this.dialog = t,
                            this.userService = e,
                            this.feedbackService = i,
                            this.sanitizer = a,
                            this.userColumns = ["user", "email", "user_detail"],
                            this.feedbackColumns = ["user", "comment", "rating", "remove"],
                            this.resultsLengthUser = 0,
                            this.resultsLengthFeedback = 0
                    }
                    ngOnInit() {
                        this.findAllUsers(),
                            this.findAllFeedbacks()
                    }
                    findAllUsers() {
                        this.userService.find().subscribe(t=>{
                                this.userDataSource = t,
                                    this.userDataSourceHidden = t;
                                for (let e of this.userDataSource)
                                    e.email = this.sanitizer.bypassSecurityTrustHtml(`<span class="${e.token ? "confirmation" : "error"}">${e.email}</span>`);
                                this.userDataSource = new A.o(this.userDataSource),
                                    this.userDataSource.paginator = this.paginatorUsers,
                                    this.resultsLengthUser = t.length
                            }
                            , t=>{
                                this.error = t,
                                    console.log(this.error)
                            }
                        )
                    }
                    findAllFeedbacks() {
                        this.feedbackService.find().subscribe(t=>{
                                this.feedbackDataSource = t;
                                for (let e of this.feedbackDataSource)
                                    e.comment = this.sanitizer.bypassSecurityTrustHtml(e.comment);
                                this.feedbackDataSource = new A.o(this.feedbackDataSource),
                                    this.feedbackDataSource.paginator = this.paginatorFeedb,
                                    this.resultsLengthFeedback = t.length
                            }
                            , t=>{
                                this.error = t,
                                    console.log(this.error)
                            }
                        )
                    }
                    deleteFeedback(t) {
                        this.feedbackService.del(t).subscribe(()=>{
                                this.findAllFeedbacks()
                            }
                            , t=>{
                                this.error = t,
                                    console.log(this.error)
                            }
                        )
                    }
                    showUserDetail(t) {
                        this.dialog.open(wi, {
                            data: {
                                id: t
                            }
                        })
                    }
                    showFeedbackDetails(t, e) {
                        this.dialog.open(yi, {
                            data: {
                                feedback: t,
                                id: e
                            }
                        })
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.b),a.Qb(D),a.Qb(Ot),a.Qb(o.c))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-administration"]],
                        viewQuery: function(t, e) {
                            var i;
                            1 & t && (a.Pc(Di, !0),
                                a.Pc(Si, !0)),
                            2 & t && (a.vc(i = a.fc()) && (e.paginatorUsers = i.first),
                            a.vc(i = a.fc()) && (e.paginatorFeedb = i.first))
                        },
                        decls: 58,
                        vars: 13,
                        consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "user-container"], [1, "user-table"], [1, "heading"], [2, "height", "700px", 3, "dataSource"], ["matColumnDef", "user"], [4, "matHeaderCellDef"], ["style", "vertical-align: middle", 4, "matCellDef"], ["matColumnDef", "email"], ["translate", "", 4, "matHeaderCellDef"], ["style", "vertical-align: middle", 3, "innerHTML", 4, "matCellDef"], ["matColumnDef", "user_detail"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize", "length"], ["paginatorUsers", ""], [2, "visibility", "hidden", "height", "0px", 3, "dataSource"], ["fxFlexAlign.lt-md", "center", 1, "customer-container"], [1, "customer-table"], ["matColumnDef", "comment"], [3, "click", 4, "matCellDef"], ["matColumnDef", "rating"], ["matColumnDef", "remove"], ["paginatorFeedb", ""], ["src", "assets/public/images/padding/19px.png"], [2, "vertical-align", "middle"], ["class", "fas fa-user fa-lg confirmation", 4, "ngIf"], [1, "fas", "fa-user", "fa-lg", "confirmation"], [2, "vertical-align", "middle", 3, "innerHTML"], ["mat-button", "", 3, "click"], [1, "fas", "fa-eye"], [3, "click"], ["matTooltip", "Click for more information", "matTooltipPosition", "above", 3, "innerHTML"], ["readOnly", "true", 3, "rate", "max"], [1, "fas", "fa-trash-alt"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "h1", 1),
                                a.Jc(2, "TITLE_ADMINISTRATION"),
                                a.Vb(),
                                a.Wb(3, "div", 2),
                                a.Wb(4, "div", 3),
                                a.Wb(5, "div", 4),
                                a.Wb(6, "div", 5),
                                a.Wb(7, "span", 1),
                                a.Jc(8, "SECTION_USER"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(9, "mat-table", 6),
                                a.Ub(10, 7),
                                a.Hc(11, Wi, 1, 0, "mat-header-cell", 8),
                                a.Hc(12, xi, 2, 1, "mat-cell", 9),
                                a.Tb(),
                                a.Ub(13, 10),
                                a.Hc(14, Ii, 1, 0, "mat-header-cell", 11),
                                a.Hc(15, _i, 1, 1, "mat-cell", 12),
                                a.Tb(),
                                a.Ub(16, 13),
                                a.Hc(17, ki, 1, 0, "mat-header-cell", 8),
                                a.Hc(18, Oi, 3, 0, "mat-cell", 14),
                                a.Tb(),
                                a.Hc(19, Ti, 1, 0, "mat-header-row", 15),
                                a.Hc(20, Li, 1, 0, "mat-row", 16),
                                a.Vb(),
                                a.Rb(21, "mat-paginator", 17, 18),
                                a.Vb(),
                                a.Wb(23, "mat-table", 19),
                                a.Ub(24, 7),
                                a.Hc(25, Ai, 1, 0, "mat-header-cell", 8),
                                a.Hc(26, Pi, 1, 0, "mat-cell", 9),
                                a.Tb(),
                                a.Ub(27, 10),
                                a.Hc(28, Ei, 1, 0, "mat-header-cell", 11),
                                a.Hc(29, Ri, 1, 1, "mat-cell", 12),
                                a.Tb(),
                                a.Ub(30, 13),
                                a.Hc(31, Mi, 1, 0, "mat-header-cell", 8),
                                a.Hc(32, Ji, 3, 0, "mat-cell", 14),
                                a.Tb(),
                                a.Hc(33, Hi, 1, 0, "mat-header-row", 15),
                                a.Hc(34, Ni, 1, 0, "mat-row", 16),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(35, "div", 20),
                                a.Wb(36, "div", 21),
                                a.Wb(37, "div", 5),
                                a.Wb(38, "span", 1),
                                a.Jc(39, "SECTION_CUSTOMER_FEEDBACK"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(40, "mat-table", 6),
                                a.Ub(41, 7),
                                a.Hc(42, Fi, 1, 0, "mat-header-cell", 11),
                                a.Hc(43, Bi, 2, 1, "mat-cell", 14),
                                a.Tb(),
                                a.Ub(44, 22),
                                a.Hc(45, Ui, 1, 0, "mat-header-cell", 11),
                                a.Hc(46, ji, 2, 1, "mat-cell", 23),
                                a.Tb(),
                                a.Ub(47, 24),
                                a.Hc(48, Qi, 1, 0, "mat-header-cell", 11),
                                a.Hc(49, zi, 2, 2, "mat-cell", 14),
                                a.Tb(),
                                a.Ub(50, 25),
                                a.Hc(51, Gi, 1, 0, "mat-header-cell", 8),
                                a.Hc(52, qi, 3, 0, "mat-cell", 14),
                                a.Tb(),
                                a.Hc(53, Yi, 1, 0, "mat-header-row", 15),
                                a.Hc(54, Ki, 1, 0, "mat-row", 16),
                                a.Vb(),
                                a.Rb(55, "mat-paginator", 17, 26),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(57, "img", 27),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(9),
                                a.oc("dataSource", e.userDataSource),
                                a.Db(10),
                                a.oc("matHeaderRowDef", e.userColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.userColumns),
                                a.Db(1),
                                a.oc("pageSize", 10)("length", e.resultsLengthUser),
                                a.Db(2),
                                a.oc("dataSource", e.userDataSourceHidden),
                                a.Db(10),
                                a.oc("matHeaderRowDef", e.userColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.userColumns),
                                a.Db(6),
                                a.oc("dataSource", e.feedbackDataSource),
                                a.Db(13),
                                a.oc("matHeaderRowDef", e.feedbackColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.feedbackColumns),
                                a.Db(1),
                                a.oc("pageSize", 10)("length", e.resultsLengthFeedback))
                        },
                        directives: [f.a, g.a, p.d, p.e, p.a, A.n, A.c, A.i, A.b, A.k, A.m, ze.a, A.h, A.a, P.l, v.a, A.j, A.l, ye.a, Et.a],
                        styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);margin-bottom:10px;padding:12px;font-size:large}.container[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.customer-container[_ngcontent-%COMP%], .user-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.customer-table[_ngcontent-%COMP%], .user-table[_ngcontent-%COMP%]{margin-bottom:25px}.mat-column-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .mat-column-user_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:38%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}.mat-column-comment[_ngcontent-%COMP%]{flex:0 0 55%!important;width:55%!important}.mat-column-comment[_ngcontent-%COMP%], .mat-column-user[_ngcontent-%COMP%]{padding:5px;word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.mat-column-user[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important}.mat-column-rating[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 20%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%;margin-bottom:20px}p[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}"]
                    }),
                    t
            }
        )();
        function $i(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_CURRENT_PASSWORD"),
                a.Vb())
        }
        function Zi(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_NEW_PASSWORD "),
                a.Vb())
        }
        const ta = function() {
            return {
                length: "5-20"
            }
        };
        function ea(t, e) {
            1 & t && (a.Wb(0, "mat-error", 19),
                a.Jc(1, "INVALID_PASSWORD_LENGTH "),
                a.Vb()),
            2 & t && a.oc("translateParams", a.sc(1, ta))
        }
        function ia(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_PASSWORD_REPEAT"),
                a.Vb())
        }
        function aa(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " PASSWORDS_NOT_MATCHING "),
                a.Vb())
        }
        u.b.add(m.I, h.c),
            u.a.watch();
        let oa = (()=>{
                class t {
                    constructor(t, e, i) {
                        var a;
                        this.userService = t,
                            this.formSubmitService = e,
                            this.translate = i,
                            this.passwordControl = new s.c("",[s.x.required]),
                            this.newPasswordControl = new s.c("",[s.x.required, s.x.minLength(5), s.x.maxLength(20)]),
                            this.repeatNewPasswordControl = new s.c("",[s.x.required, s.x.minLength(5), s.x.maxLength(20), (a = this.newPasswordControl,
                                    function(t) {
                                        return a.value !== t.value ? {
                                            notSame: !0
                                        } : null
                                    }
                            )])
                    }
                    ngOnInit() {
                        this.formSubmitService.attachEnterKeyHandler("password-form", "changeButton", ()=>this.changePassword())
                    }
                    changePassword() {
                        this.userService.changePassword({
                            current: this.passwordControl.value,
                            new: this.newPasswordControl.value,
                            repeat: this.repeatNewPasswordControl.value
                        }).subscribe(t=>{
                                this.error = void 0,
                                    this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(t=>{
                                            this.confirmation = t
                                        }
                                        , t=>{
                                            this.confirmation = {
                                                error: t
                                            }
                                        }
                                    ),
                                    this.resetForm()
                            }
                            , t=>{
                                console.log(t),
                                    this.error = t,
                                    this.confirmation = void 0,
                                    this.resetPasswords()
                            }
                        )
                    }
                    resetForm() {
                        this.passwordControl.setValue(""),
                            this.passwordControl.markAsPristine(),
                            this.passwordControl.markAsUntouched(),
                            this.newPasswordControl.setValue(""),
                            this.newPasswordControl.markAsPristine(),
                            this.newPasswordControl.markAsUntouched(),
                            this.repeatNewPasswordControl.setValue(""),
                            this.repeatNewPasswordControl.markAsPristine(),
                            this.repeatNewPasswordControl.markAsUntouched()
                    }
                    resetPasswords() {
                        this.newPasswordControl.setValue(""),
                            this.newPasswordControl.markAsPristine(),
                            this.newPasswordControl.markAsUntouched(),
                            this.repeatNewPasswordControl.setValue(""),
                            this.repeatNewPasswordControl.markAsPristine(),
                            this.repeatNewPasswordControl.markAsUntouched()
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(D),a.Qb(Lt),a.Qb(g.e))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-change-password"]],
                        decls: 42,
                        vars: 26,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6", 2, "margin-bottom", "20px"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], ["id", "password-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "currentPassword", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["id", "newPassword", "type", "password", "matInput", "", "aria-label", "Field for the new password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "aria-label", "Field to repeat the new password", 3, "formControl"], ["passwordRepeat", ""], ["type", "submit", "id", "changeButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the change", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_CHANGE_PASSWORD"),
                                a.Vb(),
                                a.Wb(4, "div", 3),
                                a.Jc(5),
                                a.Vb(),
                                a.Wb(6, "div", 4),
                                a.Jc(7),
                                a.Vb(),
                                a.Wb(8, "div", 5),
                                a.Wb(9, "mat-form-field", 6),
                                a.Wb(10, "mat-label", 2),
                                a.Jc(11, "LABEL_CURRENT_PASSWORD"),
                                a.Vb(),
                                a.Rb(12, "input", 7),
                                a.jc(13, "translate"),
                                a.Hc(14, $i, 2, 0, "mat-error", 8),
                                a.Vb(),
                                a.Wb(15, "mat-form-field", 6),
                                a.Wb(16, "mat-label", 2),
                                a.Jc(17, "LABEL_NEW_PASSWORD"),
                                a.Vb(),
                                a.Rb(18, "input", 9, 10),
                                a.Wb(20, "mat-hint", 2),
                                a.Rb(21, "i", 11),
                                a.Wb(22, "em", 12),
                                a.Jc(23),
                                a.jc(24, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(25, "mat-hint", 13),
                                a.Jc(26),
                                a.Vb(),
                                a.Hc(27, Zi, 2, 0, "mat-error", 8),
                                a.Hc(28, ea, 2, 2, "mat-error", 14),
                                a.Vb(),
                                a.Wb(29, "mat-form-field", 6),
                                a.Wb(30, "mat-label", 2),
                                a.Jc(31, "LABEL_REPEAT_NEW_PASSWORD"),
                                a.Vb(),
                                a.Rb(32, "input", 15, 16),
                                a.Wb(34, "mat-hint", 13),
                                a.Jc(35),
                                a.Vb(),
                                a.Hc(36, ia, 2, 0, "mat-error", 8),
                                a.Hc(37, aa, 2, 0, "mat-error", 8),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(38, "button", 17),
                                a.ec("click", (function() {
                                        return e.changePassword()
                                    }
                                )),
                                a.Rb(39, "i", 18),
                                a.Jc(40),
                                a.jc(41, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(19)
                                    , i = a.wc(33);
                                a.Db(4),
                                    a.oc("hidden", !(e.confirmation && !e.passwordControl.dirty && !e.newPasswordControl.dirty && !e.repeatNewPasswordControl.dirty)),
                                    a.Db(1),
                                    a.Lc(" ", e.confirmation, " "),
                                    a.Db(1),
                                    a.oc("hidden", !(e.error && !e.passwordControl.dirty && !e.newPasswordControl.dirty && !e.repeatNewPasswordControl.dirty)),
                                    a.Db(1),
                                    a.Lc(" ", e.error, " "),
                                    a.Db(5),
                                    a.pc("placeholder", a.kc(13, 18, "MANDATORY_CURRENT_PASSWORD")),
                                    a.oc("formControl", e.passwordControl),
                                    a.Db(2),
                                    a.oc("ngIf", e.passwordControl.invalid),
                                    a.Db(4),
                                    a.oc("formControl", e.newPasswordControl),
                                    a.Db(5),
                                    a.Kc(a.lc(24, 20, "INVALID_PASSWORD_LENGTH", a.sc(25, ta))),
                                    a.Db(3),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/20"),
                                    a.Db(1),
                                    a.oc("ngIf", (null == e.newPasswordControl ? null : e.newPasswordControl.invalid) && (null == e.newPasswordControl ? null : e.newPasswordControl.errors.required)),
                                    a.Db(1),
                                    a.oc("ngIf", (null == e.newPasswordControl ? null : e.newPasswordControl.invalid) && ((null == e.newPasswordControl ? null : e.newPasswordControl.errors.minlength) || (null == e.newPasswordControl ? null : e.newPasswordControl.errors.maxlength))),
                                    a.Db(4),
                                    a.oc("formControl", e.repeatNewPasswordControl),
                                    a.Db(3),
                                    a.Lc("", (null == i.value ? null : i.value.length) || 0, "/20"),
                                    a.Db(1),
                                    a.oc("ngIf", e.repeatNewPasswordControl.invalid && e.repeatNewPasswordControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.repeatNewPasswordControl.invalid && e.repeatNewPasswordControl.errors.notSame),
                                    a.Db(1),
                                    a.oc("disabled", e.passwordControl.invalid || e.newPasswordControl.invalid || e.repeatNewPasswordControl.invalid),
                                    a.Db(2),
                                    a.Lc(" ", a.kc(41, 23, "BTN_CHANGE"), " ")
                            }
                        },
                        directives: [p.c, f.a, g.a, At.c, At.g, Pt.b, s.b, s.n, s.d, P.l, At.f, v.a, At.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-top:5px}#changeButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
                    }),
                    t
            }
        )()
            , na = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Complaints"
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var ra = i("7pIB");
        const sa = ["fileControl"]
            , ca = function() {
            return {
                type: "PDF, ZIP"
            }
        };
        function la(t, e) {
            1 & t && (a.Wb(0, "div", 20),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t && (a.Db(1),
                a.Lc("", a.lc(2, 1, "INVALID_FILE_TYPE", a.sc(4, ca)), " "))
        }
        const ba = function() {
            return {
                size: "100 KB"
            }
        };
        function ua(t, e) {
            1 & t && (a.Wb(0, "div", 20),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t && (a.Db(1),
                a.Lc("", a.lc(2, 1, "INVALID_FILE_SIZE", a.sc(4, ba)), " "))
        }
        function da(t, e) {
            1 & t && (a.Wb(0, "mat-error"),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t && (a.Db(1),
                a.Lc("", a.kc(2, 1, "MANDATORY_MESSAGE"), " "))
        }
        const ma = function() {
            return {
                length: "160"
            }
        };
        u.b.add(m.c),
            u.a.watch();
        let ha = (()=>{
                class t {
                    constructor(t, e, i, a) {
                        this.userService = t,
                            this.complaintService = e,
                            this.formSubmitService = i,
                            this.translate = a,
                            this.customerControl = new s.c({
                                value: "",
                                disabled: !0
                            },[]),
                            this.messageControl = new s.c("",[s.x.required, s.x.maxLength(160)]),
                            this.fileUploadError = void 0,
                            this.uploader = new ra.c({
                                url: "./file-upload",
                                authToken: `Bearer ${localStorage.getItem("token")}`,
                                allowedMimeType: ["application/pdf", "application/xml", "text/xml", "application/zip", "application/x-zip-compressed", "multipart/x-zip"],
                                maxFileSize: 1e5
                            }),
                            this.userEmail = void 0,
                            this.complaint = void 0
                    }
                    ngOnInit() {
                        this.initComplaint(),
                            this.uploader.onWhenAddingFileFailed = (t,e)=>{
                                throw this.fileUploadError = e,
                                    new Error(`Error due to : ${e.name}`)
                            }
                            ,
                            this.uploader.onAfterAddingFile = ()=>{
                                this.fileUploadError = void 0
                            }
                            ,
                            this.uploader.onSuccessItem = ()=>{
                                this.saveComplaint(),
                                    this.uploader.clearQueue()
                            }
                            ,
                            this.formSubmitService.attachEnterKeyHandler("complaint-form", "submitButton", ()=>this.save())
                    }
                    initComplaint() {
                        this.userService.whoAmI().subscribe(t=>{
                                this.complaint = {},
                                    this.complaint.UserId = t.id,
                                    this.userEmail = t.email,
                                    this.customerControl.setValue(this.userEmail)
                            }
                            , t=>{
                                this.complaint = void 0,
                                    console.log(t)
                            }
                        )
                    }
                    save() {
                        this.uploader.queue[0] ? (this.uploader.queue[0].upload(),
                            this.fileControl.nativeElement.value = null) : this.saveComplaint()
                    }
                    saveComplaint() {
                        this.complaint.message = this.messageControl.value,
                            this.complaintService.save(this.complaint).subscribe(t=>{
                                    this.translate.get("CUSTOMER_SUPPORT_COMPLAINT_REPLY", {
                                        ref: t.id
                                    }).subscribe(t=>{
                                            this.confirmation = t
                                        }
                                        , t=>{
                                            this.confirmation = t
                                        }
                                    ),
                                        this.initComplaint(),
                                        this.resetForm(),
                                        this.fileUploadError = void 0
                                }
                                , t=>t)
                    }
                    resetForm() {
                        this.messageControl.setValue(""),
                            this.messageControl.markAsUntouched(),
                            this.messageControl.markAsPristine(),
                            this.fileControl.nativeElement.value = null
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(D),a.Qb(na),a.Qb(Lt),a.Qb(g.e))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-complaint"]],
                        viewQuery: function(t, e) {
                            var i;
                            1 & t && a.Fc(sa, !0),
                            2 & t && a.vc(i = a.fc()) && (e.fileControl = i.first)
                        },
                        decls: 39,
                        vars: 21,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], ["class", "error fileUploadError", 4, "ngIf"], ["id", "complaint-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", "aria-label", "Text field for the mail address of the user", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "complaintMessage", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "matInput", "", "aria-label", "Field for entering the complaint", 3, "formControl", "placeholder"], ["complaintMessage", ""], [4, "ngIf"], ["align", "end"], [2, "margin-top", "15px"], ["for", "file", "translate", ""], ["ng2FileSelect", "", "id", "file", "type", "file", "accept", ".pdf,.zip", "aria-label", "Input area for uploading a single invoice PDF or XML B2B order file or a ZIP archive containing multiple invoices or orders\x3c!----\x3e", 2, "margin-left", "10px", 3, "uploader"], ["fileControl", ""], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the complaint", 3, "disabled", "click"], [1, "material-icons"], [1, "error", "fileUploadError"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "NAV_COMPLAIN"),
                                a.Vb(),
                                a.Wb(4, "div", 3),
                                a.Jc(5),
                                a.Vb(),
                                a.Hc(6, la, 3, 5, "div", 4),
                                a.Hc(7, ua, 3, 5, "div", 4),
                                a.Wb(8, "div", 5),
                                a.Wb(9, "mat-form-field", 6),
                                a.Wb(10, "mat-label", 2),
                                a.Jc(11, "LABEL_CUSTOMER"),
                                a.Vb(),
                                a.Rb(12, "input", 7),
                                a.Vb(),
                                a.Wb(13, "mat-form-field", 6),
                                a.Wb(14, "mat-label", 2),
                                a.Jc(15, "LABEL_MESSAGE"),
                                a.Vb(),
                                a.Wb(16, "mat-hint", 2),
                                a.Rb(17, "i", 8),
                                a.Wb(18, "em", 9),
                                a.Jc(19),
                                a.jc(20, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(21, "textarea", 10, 11),
                                a.jc(23, "translate"),
                                a.Hc(24, da, 3, 3, "mat-error", 12),
                                a.Wb(25, "mat-hint", 13),
                                a.Jc(26),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(27, "div", 14),
                                a.Wb(28, "label", 15),
                                a.Jc(29, "LABEL_INVOICE"),
                                a.Wb(30, "span"),
                                a.Jc(31, ":"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(32, "input", 16, 17),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(34, "button", 18),
                                a.ec("click", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Wb(35, "i", 19),
                                a.Jc(36, " send "),
                                a.Vb(),
                                a.Jc(37),
                                a.jc(38, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(22);
                                a.Db(4),
                                    a.oc("hidden", !(e.confirmation && !e.messageControl.dirty)),
                                    a.Db(1),
                                    a.Kc(e.confirmation),
                                    a.Db(1),
                                    a.oc("ngIf", e.fileUploadError && "mimeType" == e.fileUploadError.name),
                                    a.Db(1),
                                    a.oc("ngIf", e.fileUploadError && "fileSize" == e.fileUploadError.name),
                                    a.Db(5),
                                    a.oc("formControl", e.customerControl),
                                    a.Db(7),
                                    a.Kc(a.lc(20, 13, "MAX_TEXTAREA_LENGTH", a.sc(20, ma))),
                                    a.Db(2),
                                    a.pc("placeholder", a.kc(23, 16, "WRITE_MESSAGE_PLACEHOLDER")),
                                    a.oc("formControl", e.messageControl),
                                    a.Db(3),
                                    a.oc("ngIf", e.messageControl.invalid && (null == e.messageControl ? null : e.messageControl.errors.required)),
                                    a.Db(2),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/160"),
                                    a.Db(6),
                                    a.oc("uploader", e.uploader),
                                    a.Db(2),
                                    a.oc("disabled", e.messageControl.invalid || e.fileUploadError),
                                    a.Db(3),
                                    a.Lc(" ", a.kc(38, 18, "BTN_SUBMIT"), " ")
                            }
                        },
                        directives: [p.c, f.a, g.a, P.l, At.c, At.g, Pt.b, s.b, s.n, s.d, At.f, Pt.d, s.i, ra.a, v.a, At.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
                    }),
                    t
            }
        )()
            , pa = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Recycles"
                    }
                    find(t) {
                        return this.http.get(this.host + "/", {
                            params: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )()
            , fa = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Addresss"
                    }
                    get() {
                        return this.http.get(this.host).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    getById(t) {
                        return this.http.get(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    put(t, e) {
                        return this.http.put(this.host + "/" + t, e).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    del(t) {
                        return this.http.delete(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var ga = i("0EQZ")
            , va = i("QibW");
        function Ca(t, e) {
            1 & t && (a.Wb(0, "h1", 5),
                a.Jc(1, "TITLE_SELECT_ADDRESS"),
                a.Vb())
        }
        function wa(t, e) {
            1 & t && (a.Wb(0, "h1", 5),
                a.Jc(1, "MY_SAVED_ADRESSES"),
                a.Vb())
        }
        function ya(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 20)
        }
        function Da(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 20),
                    a.Wb(1, "mat-radio-button", 21),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).emitSelectionToParent(i.id)
                        }
                    ))("change", (function(i) {
                            a.zc(t);
                            const o = e.$implicit
                                , n = a.ic(2);
                            return i ? n.selection.toggle(o) : null
                        }
                    )),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic(2);
                a.Db(1),
                    a.oc("checked", i.selection.isSelected(t))
            }
        }
        function Sa(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 22)
        }
        function Wa(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 20),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", null == t ? null : t.fullName, " ")
            }
        }
        function Va(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 22)
        }
        function xa(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 23),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Nc(" ", null == t ? null : t.streetAddress, ", ", null == t ? null : t.city, ", ", null == t ? null : t.state, ", ", null == t ? null : t.zipCode, " ")
            }
        }
        function Ia(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 22)
        }
        function _a(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 20),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Kc(null == t ? null : t.country)
            }
        }
        function ka(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 22)
        }
        function Oa(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 24),
                a.Wb(1, "button", 25),
                a.Rb(2, "i", 26),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.qc("routerLink", "/address/edit/", t.id, "")
            }
        }
        function Ta(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 22)
        }
        function La(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 24),
                    a.Wb(1, "button", 27),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).deleteAddress(i.id)
                        }
                    )),
                    a.Rb(2, "i", 28),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Aa(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Pa(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-row", 29),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit
                                , o = e.$implicit
                                , n = a.ic(2);
                            return n.selection.toggle(i),
                                n.emitSelectionToParent(o.id)
                        }
                    )),
                    a.Vb()
            }
        }
        function Ea(t, e) {
            if (1 & t && (a.Wb(0, "mat-table", 6),
                a.Ub(1, 7),
                a.Hc(2, ya, 1, 0, "mat-header-cell", 8),
                a.Hc(3, Da, 2, 1, "mat-cell", 9),
                a.Tb(),
                a.Ub(4, 10),
                a.Hc(5, Sa, 1, 0, "mat-header-cell", 11),
                a.Hc(6, Wa, 2, 1, "mat-cell", 9),
                a.Tb(),
                a.Ub(7, 12),
                a.Hc(8, Va, 1, 0, "mat-header-cell", 11),
                a.Hc(9, xa, 2, 4, "mat-cell", 13),
                a.Tb(),
                a.Ub(10, 14),
                a.Hc(11, Ia, 1, 0, "mat-header-cell", 11),
                a.Hc(12, _a, 2, 1, "mat-cell", 9),
                a.Tb(),
                a.Ub(13, 15),
                a.Hc(14, ka, 1, 0, "mat-header-cell", 11),
                a.Hc(15, Oa, 3, 1, "mat-cell", 16),
                a.Tb(),
                a.Ub(16, 17),
                a.Hc(17, Ta, 1, 0, "mat-header-cell", 11),
                a.Hc(18, La, 3, 0, "mat-cell", 16),
                a.Tb(),
                a.Hc(19, Aa, 1, 0, "mat-header-row", 18),
                a.Hc(20, Pa, 1, 0, "mat-row", 19),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.oc("dataSource", t.dataSource),
                    a.Db(19),
                    a.oc("matHeaderRowDef", t.displayedColumns),
                    a.Db(1),
                    a.oc("matRowDefColumns", t.displayedColumns)
            }
        }
        function Ra(t, e) {
            1 & t && (a.Wb(0, "div", 30),
                a.Wb(1, "button", 31),
                a.Wb(2, "mat-icon"),
                a.Jc(3, " add "),
                a.Vb(),
                a.Wb(4, "span", 5),
                a.Jc(5, "ADD_NEW_ADDRESS"),
                a.Vb(),
                a.Vb(),
                a.Vb())
        }
        function Ma(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 32),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().chooseAddress()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " navigate_next "),
                    a.Vb(),
                    a.Wb(3, "span", 5),
                    a.Jc(4, "LABEL_CONTINUE"),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.oc("disabled", void 0 === t.addressId)
            }
        }
        u.b.add(h.c, h.g),
            u.a.watch();
        let Ja = (()=>{
                class t {
                    constructor(t, e, i, o, n) {
                        this.addressService = t,
                            this.translate = e,
                            this.router = i,
                            this.ngZone = o,
                            this.snackBarHelperService = n,
                            this.emitSelection = new a.o,
                            this.allowEdit = !1,
                            this.addNewAddressDiv = !0,
                            this.showNextButton = !1,
                            this.addressId = void 0,
                            this.displayedColumns = ["Name", "Address", "Country"],
                            this.selection = new ga.c(!1,[]),
                            this.addressExist = !1
                    }
                    ngOnInit() {
                        this.allowEdit ? this.displayedColumns.push("Edit", "Remove") : this.displayedColumns.unshift("Selection"),
                            this.load()
                    }
                    load() {
                        this.addressService.get().subscribe(t=>{
                                this.addressExist = t.length,
                                    this.storedAddresses = t,
                                    this.dataSource = new A.o(this.storedAddresses)
                            }
                            , t=>{
                                var e;
                                this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                    console.log(t)
                            }
                        )
                    }
                    emitSelectionToParent(t) {
                        this.selection.hasValue() ? (this.emitSelection.emit(t),
                            this.addressId = t) : (this.emitSelection.emit(void 0),
                            this.addressId = void 0)
                    }
                    chooseAddress() {
                        sessionStorage.setItem("addressId", this.addressId),
                            this.ngZone.run(()=>this.router.navigate(["/delivery-method"]))
                    }
                    deleteAddress(t) {
                        this.addressService.del(t).subscribe(()=>{
                                this.error = null,
                                    this.translate.get("ADDRESS_REMOVED").subscribe(t=>{
                                            this.snackBarHelperService.open(t, "confirmBar")
                                        }
                                        , t=>{
                                            this.snackBarHelperService.open(t, "confirmBar")
                                        }
                                    ),
                                    this.load()
                            }
                            , t=>{
                                var e;
                                this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                    console.log(t)
                            }
                        )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(fa),a.Qb(g.e),a.Qb(S.b),a.Qb(a.A),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-address"]],
                        inputs: {
                            allowEdit: "allowEdit",
                            addNewAddressDiv: "addNewAddressDiv",
                            showNextButton: "showNextButton"
                        },
                        outputs: {
                            emitSelection: "emitSelection"
                        },
                        decls: 6,
                        vars: 7,
                        consts: [[1, "mat-elevation-z6"], ["translate", "", 4, "ngIf"], [3, "dataSource", 4, "ngIf"], ["style", "margin-top: 20px;", 4, "ngIf"], ["mat-raised-button", "", "mat-button", "", "class", "btn btn-next", "color", "primary", "aria-label", "Proceed to payment selection", 3, "disabled", "click", 4, "ngIf"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["style", "display: none;", 4, "matHeaderCellDef"], ["matColumnDef", "Address"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Edit"], ["fxflex", "10%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["fxFlex", "20%"], [3, "checked", "click", "change"], [2, "display", "none"], ["fxFlex", "40%"], ["fxflex", "10%"], ["mat-icon-button", "", 3, "routerLink"], [1, "far", "fa-edit"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "click"], [2, "margin-top", "20px"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Add a new address", "routerLink", "/address/create", 1, "btn", "btn-new-address"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to payment selection", 1, "btn", "btn-next", 3, "disabled", "click"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Hc(1, Ca, 2, 0, "h1", 1),
                                a.Hc(2, wa, 2, 0, "h1", 1),
                                a.Hc(3, Ea, 21, 3, "mat-table", 2),
                                a.Hc(4, Ra, 6, 0, "div", 3),
                                a.Hc(5, Ma, 5, 1, "button", 4),
                                a.Vb()),
                            2 & t && (a.Hb("div-boundary", !e.addNewAddressDiv),
                                a.Db(1),
                                a.oc("ngIf", e.showNextButton),
                                a.Db(1),
                                a.oc("ngIf", !e.showNextButton),
                                a.Db(1),
                                a.oc("ngIf", e.addressExist),
                                a.Db(1),
                                a.oc("ngIf", e.addNewAddressDiv),
                                a.Db(1),
                                a.oc("ngIf", e.showNextButton))
                        },
                        directives: [f.a, P.l, g.a, A.n, A.c, A.i, A.b, A.k, A.m, A.h, p.b, A.a, va.a, v.a, S.c, A.j, A.l, we.a],
                        styles: [".btn-new-address[_ngcontent-%COMP%]{margin-left:0;margin-right:auto;display:block}.btn-next[_ngcontent-%COMP%]{margin-right:0;margin-left:auto;display:block;margin-top:-37px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.div-boundary[_ngcontent-%COMP%]{border:1px solid hsla(0,0%,100%,.3);border-radius:5px;box-shadow:0 0 0!important}"]
                    }),
                    t
            }
        )();
        var Ha = i("iadO");
        const Na = ["addressComp"];
        function Fa(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_QUANTITY "),
                a.Vb())
        }
        const Ba = function() {
            return {
                range: "10-1000"
            }
        };
        function Ua(t, e) {
            1 & t && (a.Wb(0, "mat-error", 21),
                a.Jc(1, "INVALID_QUANTITY "),
                a.Vb()),
            2 & t && a.oc("translateParams", a.sc(1, Ba))
        }
        function ja(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "INVALID_DATE"),
                a.Vb())
        }
        function Qa(t, e) {
            if (1 & t && (a.Wb(0, "mat-form-field", 22),
                a.Wb(1, "mat-label", 2),
                a.Jc(2, "LABEL_PICKUP_DATE"),
                a.Vb(),
                a.Rb(3, "input", 23),
                a.Rb(4, "mat-datepicker-toggle", 24),
                a.Rb(5, "mat-datepicker", null, 25),
                a.Hc(7, ja, 2, 0, "mat-error", 7),
                a.Vb()),
            2 & t) {
                const t = a.wc(6)
                    , e = a.ic();
                a.Db(3),
                    a.oc("formControl", e.pickUpDateControl)("matDatepicker", t),
                    a.Db(1),
                    a.oc("for", t),
                    a.Db(3),
                    a.oc("ngIf", e.pickUpDateControl.invalid)
            }
        }
        function za(t, e) {
            if (1 & t && (a.Wb(0, "mat-checkbox", 26),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.oc("formControl", t.pickup),
                    a.Db(1),
                    a.Lc("", a.kc(2, 2, "REQUEST_PICKUP"), " ")
            }
        }
        u.b.add(m.D),
            u.a.watch();
        let Ga = (()=>{
                class t {
                    constructor(t, e, i, a, o, n) {
                        this.recycleService = t,
                            this.userService = e,
                            this.configurationService = i,
                            this.formSubmitService = a,
                            this.translate = o,
                            this.snackBarHelperService = n,
                            this.requestorControl = new s.c({
                                value: "",
                                disabled: !0
                            },[]),
                            this.recycleQuantityControl = new s.c("",[s.x.required, s.x.min(10), s.x.max(1e3)]),
                            this.pickUpDateControl = new s.c,
                            this.pickup = new s.c(!1),
                            this.recycle = {},
                            this.addressId = void 0
                    }
                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                t && t.application && t.application.recyclePage && (this.topImage = "assets/public/images/products/" + t.application.recyclePage.topProductImage,
                                    this.bottomImage = "assets/public/images/products/" + t.application.recyclePage.bottomProductImage)
                            }
                            , t=>console.log(t)),
                            this.initRecycle(),
                            this.findAll(),
                            this.formSubmitService.attachEnterKeyHandler("recycle-form", "recycleButton", ()=>this.save())
                    }
                    initRecycle() {
                        this.userService.whoAmI().subscribe(t=>{
                                this.recycle = {},
                                    this.recycle.UserId = t.id,
                                    this.userEmail = t.email,
                                    this.requestorControl.setValue(this.userEmail)
                            }
                            , t=>console.log(t))
                    }
                    save() {
                        this.recycle.AddressId = this.addressId,
                            this.recycle.quantity = this.recycleQuantityControl.value,
                        this.pickup.value && (this.recycle.isPickUp = this.pickup.value,
                            this.recycle.date = this.pickUpDateControl.value),
                            this.recycleService.save(this.recycle).subscribe(t=>{
                                    t.isPickup ? this.translate.get("CONFIRM_RECYCLING_PICKUP", {
                                        pickupdate: t.pickupDate
                                    }).subscribe(t=>{
                                            this.snackBarHelperService.open(t, "confirmBar")
                                        }
                                        , t=>{
                                            this.snackBarHelperService.open(t, "confirmBar")
                                        }
                                    ) : this.translate.get("CONFIRM_RECYCLING_BOX").subscribe(t=>{
                                            this.snackBarHelperService.open(t, "confirmBar")
                                        }
                                        , t=>{
                                            this.snackBarHelperService.open(t, "confirmBar")
                                        }
                                    ),
                                        this.addressComponent.load(),
                                        this.initRecycle(),
                                        this.resetForm()
                                }
                                , t=>{
                                    var e;
                                    this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                        console.log(t)
                                }
                            )
                    }
                    findAll() {
                        this.recycleService.find().subscribe(t=>{
                                this.recycles = t
                            }
                            , t=>{
                                console.log(t)
                            }
                        )
                    }
                    resetForm() {
                        this.addressId = void 0,
                            this.recycleQuantityControl.setValue(""),
                            this.recycleQuantityControl.markAsPristine(),
                            this.recycleQuantityControl.markAsUntouched(),
                            this.pickUpDateControl.setValue(""),
                            this.pickUpDateControl.markAsPristine(),
                            this.pickUpDateControl.markAsUntouched(),
                            this.pickup.setValue(!1)
                    }
                    getMessage(t) {
                        this.addressId = t
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(pa),a.Qb(D),a.Qb(b),a.Qb(Lt),a.Qb(g.e),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-recycle"]],
                        viewQuery: function(t, e) {
                            var i;
                            1 & t && a.Fc(Na, !0),
                            2 & t && a.vc(i = a.fc()) && (e.addressComponent = i.first)
                        },
                        decls: 41,
                        vars: 16,
                        consts: [["fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "20px", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "50%"], ["translate", ""], ["id", "recycle-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "mat-elevation-z0", 3, "addNewAddressDiv", "emitSelection"], ["addressComp", ""], ["appearance", "outline", 4, "ngIf"], [3, "formControl", 4, "ngIf"], ["type", "submit", "id", "recycleButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "fas", "fa-paper-plane", "fa-lg"], ["fxFlex", "50%"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center"], ["translate", "", 1, "responsibility-header"], ["fxLayout", "row", "fxLayoutGap", "20px", 1, "mat-elevation-z0"], ["mat-card-image", "", 3, "src"], [1, "fill-remaining-space"], ["translate", "", 3, "translateParams"], ["appearance", "outline"], ["matInput", "", 3, "formControl", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "formControl"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "div", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_RECYCLE"),
                                a.Vb(),
                                a.Wb(4, "div", 3),
                                a.Wb(5, "mat-form-field", 4),
                                a.Wb(6, "mat-label", 2),
                                a.Jc(7, "LABEL_REQUESTOR"),
                                a.Vb(),
                                a.Rb(8, "input", 5),
                                a.Vb(),
                                a.Wb(9, "mat-form-field", 4),
                                a.Wb(10, "mat-label", 2),
                                a.Jc(11, "LABEL_QUANTITY"),
                                a.Vb(),
                                a.Rb(12, "input", 6),
                                a.jc(13, "translate"),
                                a.Hc(14, Fa, 2, 0, "mat-error", 7),
                                a.Hc(15, Ua, 2, 2, "mat-error", 8),
                                a.Vb(),
                                a.Wb(16, "app-address", 9, 10),
                                a.ec("emitSelection", (function(t) {
                                        return e.getMessage(t)
                                    }
                                )),
                                a.Vb(),
                                a.Hc(18, Qa, 8, 4, "mat-form-field", 11),
                                a.Hc(19, za, 3, 4, "mat-checkbox", 12),
                                a.Vb(),
                                a.Wb(20, "button", 13),
                                a.ec("click", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Rb(21, "i", 14),
                                a.Jc(22),
                                a.jc(23, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(24, "div", 15),
                                a.Wb(25, "div", 16),
                                a.Wb(26, "h3", 17),
                                a.Jc(27, "SECTION_PRESS_JUICE_RESPONSIBLY"),
                                a.Vb(),
                                a.Wb(28, "mat-card", 18),
                                a.Rb(29, "img", 19),
                                a.Wb(30, "mat-card-content"),
                                a.Wb(31, "div"),
                                a.Wb(32, "small"),
                                a.Jc(33, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(34, "mat-card", 18),
                                a.Rb(35, "img", 19),
                                a.Wb(36, "mat-card-content"),
                                a.Wb(37, "div"),
                                a.Wb(38, "small"),
                                a.Jc(39, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(40, "span", 20),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(8),
                                a.oc("formControl", e.requestorControl),
                                a.Db(4),
                                a.oc("formControl", e.recycleQuantityControl)("placeholder", a.kc(13, 12, "IN_LITERS_PLACEHOLDER")),
                                a.Db(2),
                                a.oc("ngIf", e.recycleQuantityControl.invalid && e.recycleQuantityControl.errors.required),
                                a.Db(1),
                                a.oc("ngIf", e.recycleQuantityControl.invalid && (e.recycleQuantityControl.errors.min || e.recycleQuantityControl.errors.max)),
                                a.Db(1),
                                a.oc("addNewAddressDiv", !1),
                                a.Db(2),
                                a.oc("ngIf", e.pickup.value && e.recycleQuantityControl.value > 100),
                                a.Db(1),
                                a.oc("ngIf", e.recycleQuantityControl.value > 100),
                                a.Db(1),
                                a.oc("disabled", void 0 === e.addressId || e.recycleQuantityControl.invalid || e.pickUpDateControl.invalid),
                                a.Db(2),
                                a.Lc(" ", a.kc(23, 14, "BTN_SUBMIT"), " "),
                                a.Db(7),
                                a.oc("src", e.topImage, a.Cc),
                                a.Db(6),
                                a.oc("src", e.bottomImage, a.Cc))
                        },
                        directives: [f.a, p.d, p.e, p.b, g.a, At.c, At.g, Pt.b, s.b, s.n, s.d, s.s, P.l, Ja, v.a, p.c, f.d, f.b, At.b, Ha.b, Ha.d, At.h, Ha.a, ui.a],
                        pipes: [g.d],
                        styles: ["mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-left:20%;margin-top:5px;width:60%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}"]
                    }),
                    t
            }
        )()
            , qa = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Challenges"
                    }
                    find(t) {
                        return this.http.get(this.host + "/", {
                            params: t
                        }).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    repeatNotification(t) {
                        return this.http.get(this.hostServer + "/rest/repeat-notification", {
                            params: {
                                challenge: t
                            }
                        }).pipe(Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    continueCode() {
                        return this.http.get(this.hostServer + "/rest/continue-code").pipe(Object(c.a)(t=>t.continueCode), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    restoreProgress(t) {
                        return this.http.put(this.hostServer + "/rest/continue-code/apply/" + t, {}).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var Ya = i("JqCM")
            , Ka = i("bv9b")
            , Xa = i("jaxi");
        function $a(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 3),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().repeatNotification()
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Wb(2, "mat-icon", 4),
                    a.Jc(3, "flag"),
                    a.Vb(),
                    a.Wb(4, "mat-icon", 4),
                    a.Jc(5, "check_box"),
                    a.Vb(),
                    a.Wb(6, "span", 5),
                    a.Jc(7),
                    a.jc(8, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.oc("id", t.challenge.name + ".solved")("matTooltip", t.allowRepeatNotifications ? a.kc(1, 5, "NOTIFICATION_RESEND_INSTRUCTIONS") : null),
                    a.Db(2),
                    a.oc("hidden", !t.allowRepeatNotifications),
                    a.Db(2),
                    a.oc("hidden", t.allowRepeatNotifications),
                    a.Db(3),
                    a.Kc(a.kc(8, 7, "STATUS_SOLVED"))
            }
        }
        function Za(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 6),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().openHint()
                        }
                    )),
                    a.Wb(1, "mat-icon", 4),
                    a.Jc(2, "book"),
                    a.Vb(),
                    a.Wb(3, "mat-icon", 4),
                    a.Jc(4, "check_box_outline_blank"),
                    a.Vb(),
                    a.Wb(5, "span", 5),
                    a.Jc(6),
                    a.jc(7, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.oc("id", t.challenge.name + ".notSolved")("matTooltip", t.showChallengeHints ? t.challenge.hint : null),
                    a.Db(1),
                    a.oc("hidden", !t.showChallengeHints || !t.challenge.hintUrl),
                    a.Db(2),
                    a.oc("hidden", t.showChallengeHints && t.challenge.hintUrl),
                    a.Db(3),
                    a.Kc(a.kc(7, 5, "STATUS_UNSOLVED"))
            }
        }
        function to(t, e) {
            if (1 & t && a.Rb(0, "i"),
            2 & t) {
                const t = a.ic(2);
                a.Fb("icon-" + (null == t.challenge.disabledEnv ? null : t.challenge.disabledEnv.toString().toLowerCase()))
            }
        }
        function eo(t, e) {
            if (1 & t && a.Rb(0, "i"),
            2 & t) {
                const t = a.ic(2);
                a.Fb("fab fa-" + (null == t.challenge.disabledEnv ? null : t.challenge.disabledEnv.toString().toLowerCase()))
            }
        }
        function io(t, e) {
            if (1 & t && (a.Wb(0, "button", 7),
                a.Wb(1, "span"),
                a.Hc(2, to, 1, 3, "i", 8),
                a.Hc(3, eo, 1, 3, "i", 8),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.oc("id", t.challenge.name + ".unavailable")("matTooltip", t.challenge.hint),
                    a.Db(2),
                    a.oc("ngIf", "Windows" !== t.challenge.disabledEnv),
                    a.Db(1),
                    a.oc("ngIf", "Windows" === t.challenge.disabledEnv),
                    a.Db(1),
                    a.Lc(" ", a.kc(5, 5, "STATUS_UNAVAILABLE"), " ")
            }
        }
        u.b.add(d.l),
            u.a.watch();
        let ao = (()=>{
                class t {
                    constructor(t, e) {
                        this.challengeService = t,
                            this.windowRefService = e,
                            this.challenge = {},
                            this.allowRepeatNotifications = !1,
                            this.showChallengeHints = !0
                    }
                    repeatNotification() {
                        this.allowRepeatNotifications && this.challengeService.repeatNotification(encodeURIComponent(this.challenge.name)).subscribe(()=>{
                                this.windowRefService.nativeWindow.scrollTo(0, 0)
                            }
                            , t=>console.log(t))
                    }
                    openHint() {
                        this.showChallengeHints && this.challenge.hintUrl && this.windowRefService.nativeWindow.open(this.challenge.hintUrl, "_blank")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(qa),a.Qb(bi))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-challenge-status-badge"]],
                        inputs: {
                            challenge: "challenge",
                            allowRepeatNotifications: "allowRepeatNotifications",
                            showChallengeHints: "showChallengeHints"
                        },
                        decls: 3,
                        vars: 3,
                        consts: [["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], [3, "hidden"], ["fxShow", "", "fxHide.lt-sm", ""], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip"], [3, "class", 4, "ngIf"]],
                        template: function(t, e) {
                            1 & t && (a.Hc(0, $a, 9, 9, "button", 0),
                                a.Hc(1, Za, 8, 7, "button", 1),
                                a.Hc(2, io, 6, 7, "button", 2)),
                            2 & t && (a.oc("ngIf", !e.challenge.disabledEnv && e.challenge.solved),
                                a.Db(1),
                                a.oc("ngIf", !e.challenge.disabledEnv && !e.challenge.solved),
                                a.Db(1),
                                a.oc("ngIf", e.challenge.disabledEnv))
                        },
                        directives: [P.l, v.a, ye.a, we.a, E.b],
                        pipes: [g.d],
                        styles: [""]
                    }),
                    t
            }
        )();
        const oo = function(t) {
            return {
                num: t
            }
        }
            , no = function(t) {
            return {
                tier: t
            }
        };
        function ro(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-button-toggle", 6),
                    a.ec("change", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().toggleDifficulty(i)
                        }
                    )),
                    a.jc(1, "translate"),
                    a.jc(2, "translate"),
                    a.Wb(3, "label"),
                    a.Wb(4, "span", 18),
                    a.hc(),
                    a.Wb(5, "svg", 19),
                    a.Wb(6, "linearGradient", 20),
                    a.Rb(7, "stop", 21),
                    a.Rb(8, "stop", 22),
                    a.Vb(),
                    a.Rb(9, "path", 23),
                    a.Vb(),
                    a.gc(),
                    a.Wb(10, "span", 24),
                    a.Jc(11),
                    a.Vb(),
                    a.Wb(12, "span"),
                    a.Jc(13),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic();
                a.oc("checked", i.displayedDifficulties.includes(t))("disabled", i.restrictToTutorialsFirst && t > i.tutorialsTier)("matTooltip", i.restrictToTutorialsFirst && !i.allTutorialsCompleted && t > i.tutorialsTier ? i.isLastTutorialsTier ? a.lc(1, 13, "INFO_FULL_CHALLENGE_MODE", a.tc(19, oo, i.challenges.length)) : a.lc(2, 16, "INFO_NEXT_TUTORIAL_TIER", a.tc(21, no, "\u2605".repeat(i.tutorialsTier))) : ""),
                    a.Db(5),
                    a.Gc("fill", "url(#" + t + ")"),
                    a.Db(1),
                    a.oc("id", t),
                    a.Db(1),
                    a.Eb("offset", i.challenges ? i.offsetValue[t - 1] : "100%"),
                    a.Db(1),
                    a.Eb("offset", i.challenges ? i.offsetValue[t - 1] : "100%"),
                    a.Db(1),
                    a.Eb("fill", "inherit"),
                    a.Db(2),
                    a.Kc(t),
                    a.Db(1),
                    a.Fb("fa-layers-counter " + (i.solvedChallengesOfDifficulty[t - 1].length === i.totalChallengesOfDifficulty[t - 1].length ? "accent-notification" : 0 === i.solvedChallengesOfDifficulty[t - 1].length ? "warn-notification" : "primary-notification")),
                    a.Db(1),
                    a.Lc(" ", i.solvedChallengesOfDifficulty[t - 1].length + "/" + i.totalChallengesOfDifficulty[t - 1].length, " ")
            }
        }
        function so(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-button-toggle", 6),
                    a.ec("change", (function() {
                            return a.zc(t),
                                a.ic().toggleShowDisabledChallenges()
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Rb(2, "i", 25),
                    a.Jc(3),
                    a.jc(4, "translate"),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.oc("checked", t.showDisabledChallenges)("disabled", t.restrictToTutorialsFirst && !t.allTutorialsCompleted)("matTooltip", t.restrictToTutorialsFirst && !t.allTutorialsCompleted ? a.lc(1, 4, "INFO_FULL_CHALLENGE_MODE", a.tc(9, oo, t.challenges.length)) : ""),
                    a.Db(3),
                    a.Lc(" ", a.kc(4, 7, "BTN_SHOW_UNAVAILABLE"), " ")
            }
        }
        const co = function(t, e) {
            return {
                num: t,
                env: e
            }
        };
        function lo(t, e) {
            if (1 & t && (a.Rb(0, "div", 26),
                a.jc(1, "translate")),
            2 & t) {
                const t = a.ic();
                a.oc("innerHTML", a.lc(1, 1, "INFO_DISABLED_CHALLENGES", a.uc(4, co, t.numDisabledChallenges, t.disabledEnv)), a.Ac)
            }
        }
        function bo(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-button-toggle", 27),
                    a.ec("change", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().toggleShowChallengeCategory(i)
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Jc(2),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic();
                a.oc("checked", i.displayedChallengeCategories.includes(t))("disabled", i.restrictToTutorialsFirst && !i.allTutorialsCompleted)("matTooltip", i.restrictToTutorialsFirst && !i.allTutorialsCompleted ? a.lc(1, 4, "INFO_FULL_CHALLENGE_MODE", a.tc(7, oo, i.challenges.length)) : ""),
                    a.Db(2),
                    a.Lc(" ", t, " ")
            }
        }
        function uo(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 46),
                a.Jc(1, "LABEL_NAME"),
                a.Vb())
        }
        function mo(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 47),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.name, "")
            }
        }
        function ho(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 48),
                a.Jc(1, "LABEL_DIFFICULTY"),
                a.Vb())
        }
        function po(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 49),
                a.Rb(1, "bar-rating", 50),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("rate", t.difficulty)("max", t.difficulty)
            }
        }
        function fo(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 51),
                a.Jc(1, "LABEL_DESCRIPTION "),
                a.Vb())
        }
        function go(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 52),
                a.Rb(1, "div", 53),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("innerHTML", t.description, a.Ac)
            }
        }
        function vo(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 54),
                a.Jc(1, "LABEL_CATEGORY"),
                a.Vb())
        }
        function Co(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 55),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.category, "")
            }
        }
        function wo(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 56),
                a.Jc(1, "LABEL_STATUS"),
                a.Vb())
        }
        function yo(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 59),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic().$implicit;
                            return a.ic(2).startHackingInstructor(e.name)
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Wb(2, "mat-icon"),
                    a.Jc(3, " school "),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic().$implicit;
                a.oc("matTooltip", a.kc(1, 2, "INFO_HACKING_INSTRUCTOR"))("disabled", t.solved)
            }
        }
        function Do(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell"),
                a.Rb(1, "app-challenge-status-badge", 57),
                a.Hc(2, yo, 4, 4, "button", 58),
                a.Vb()),
            2 & t) {
                const t = e.$implicit
                    , i = a.ic(2);
                a.Db(1),
                    a.oc("challenge", t)("allowRepeatNotifications", i.allowRepeatNotifications)("showChallengeHints", i.showChallengeHints),
                    a.Db(1),
                    a.oc("ngIf", i.showHackingInstructor && !t.disabledEnv && t.hasTutorial)
            }
        }
        function So(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Wo(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function Vo(t, e) {
            if (1 & t && (a.Wb(0, "mat-table", 28),
                a.Ub(1, 29),
                a.Hc(2, uo, 2, 0, "mat-header-cell", 30),
                a.Hc(3, mo, 2, 1, "mat-cell", 31),
                a.Tb(),
                a.Ub(4, 32),
                a.Hc(5, ho, 2, 0, "mat-header-cell", 33),
                a.Hc(6, po, 2, 2, "mat-cell", 34),
                a.Tb(),
                a.Ub(7, 35),
                a.Hc(8, fo, 2, 0, "mat-header-cell", 36),
                a.Hc(9, go, 2, 1, "mat-cell", 37),
                a.Tb(),
                a.Ub(10, 38),
                a.Hc(11, vo, 2, 0, "mat-header-cell", 39),
                a.Hc(12, Co, 2, 1, "mat-cell", 40),
                a.Tb(),
                a.Ub(13, 41),
                a.Hc(14, wo, 2, 0, "mat-header-cell", 42),
                a.Hc(15, Do, 3, 4, "mat-cell", 43),
                a.Tb(),
                a.Hc(16, So, 1, 0, "mat-header-row", 44),
                a.Hc(17, Wo, 1, 0, "mat-row", 45),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.oc("dataSource", t.filterToDataSource(t.challenges))("trackBy", t.trackById),
                    a.Db(16),
                    a.oc("matHeaderRowDef", t.displayedColumns),
                    a.Db(1),
                    a.oc("matRowDefColumns", t.displayedColumns)
            }
        }
        function xo(t, e) {
            1 & t && (a.Rb(0, "mat-card", 64),
                a.jc(1, "translate")),
            2 & t && a.oc("innerHTML", a.kc(1, 1, "CALL_FOR_CONTRIBUTIONS"), a.Ac)
        }
        const Io = function(t, e) {
            return {
                appname: t,
                questionnaire: e
            }
        };
        function _o(t, e) {
            if (1 & t && (a.Rb(0, "mat-card", 65),
                a.jc(1, "translate")),
            2 & t) {
                const t = a.ic(2);
                a.oc("innerHTML", a.lc(1, 1, "CALL_FOR_FEEDBACK", a.uc(4, Io, t.appName, t.questionnaireUrl)), a.Ac)
            }
        }
        function ko(t, e) {
            if (1 & t && (a.Wb(0, "div", 60),
                a.Hc(1, xo, 2, 3, "mat-card", 61),
                a.Rb(2, "span", 62),
                a.Hc(3, _o, 2, 7, "mat-card", 63),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("ngIf", t.showContributionInfoBox),
                    a.Db(2),
                    a.oc("ngIf", t.questionnaireUrl)
            }
        }
        u.b.add(m.O, h.d, d.e, d.d, d.b, m.ab, m.F),
            u.a.watch();
        let Oo = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r) {
                        this.configurationService = t,
                            this.challengeService = e,
                            this.sanitizer = i,
                            this.ngZone = a,
                            this.io = o,
                            this.spinner = n,
                            this.translate = r,
                            this.availableDifficulties = [1, 2, 3, 4, 5, 6],
                            this.displayedDifficulties = [1],
                            this.availableChallengeCategories = [],
                            this.displayedChallengeCategories = [],
                            this.toggledMajorityOfDifficulties = !1,
                            this.toggledMajorityOfCategories = !0,
                            this.showSolvedChallenges = !0,
                            this.numDisabledChallenges = 0,
                            this.showDisabledChallenges = !1,
                            this.showOnlyTutorialChallenges = !1,
                            this.restrictToTutorialsFirst = !1,
                            this.allTutorialsCompleted = !1,
                            this.isLastTutorialsTier = !1,
                            this.tutorialsTier = 1,
                            this.displayedColumns = ["name", "difficulty", "description", "category", "status"],
                            this.offsetValue = ["100%", "100%", "100%", "100%", "100%", "100%"],
                            this.allowRepeatNotifications = !1,
                            this.showChallengeHints = !0,
                            this.showHackingInstructor = !0,
                            this.challenges = [],
                            this.percentChallengesSolved = "0",
                            this.solvedChallengesOfDifficulty = [[], [], [], [], [], []],
                            this.totalChallengesOfDifficulty = [[], [], [], [], [], []],
                            this.showContributionInfoBox = !0,
                            this.questionnaireUrl = "https://forms.gle/2Tr5m1pqnnesApxN8",
                            this.appName = "OWASP Juice Shop"
                    }
                    ngOnInit() {
                        this.spinner.show(),
                            this.displayedDifficulties = localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : [1],
                            this.showSolvedChallenges = !localStorage.getItem("showSolvedChallenges") || JSON.parse(String(localStorage.getItem("showSolvedChallenges"))),
                            this.showDisabledChallenges = !!localStorage.getItem("showDisabledChallenges") && JSON.parse(String(localStorage.getItem("showDisabledChallenges"))),
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    var e;
                                    this.allowRepeatNotifications = t.challenges.showSolvedNotifications && (null === (e = t.ctf) || void 0 === e ? void 0 : e.showFlagsInNotifications),
                                        this.showChallengeHints = t.challenges.showHints,
                                        this.showHackingInstructor = t.hackingInstructor && t.hackingInstructor.isEnabled,
                                        this.showContributionInfoBox = t.application.showGitHubLinks,
                                        this.questionnaireUrl = t.application.social && t.application.social.questionnaireUrl,
                                        this.appName = t.application.name,
                                        this.restrictToTutorialsFirst = t.challenges.restrictToTutorialsFirst,
                                        this.showOnlyTutorialChallenges = localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : this.restrictToTutorialsFirst,
                                        this.challengeService.find({
                                            sort: "name"
                                        }).subscribe(t=>{
                                                this.challenges = t;
                                                for (let e = 0; e < this.challenges.length; e++)
                                                    this.augmentHintText(this.challenges[e]),
                                                        this.trustDescriptionHtml(this.challenges[e]),
                                                    "Score Board" === this.challenges[e].name && (this.challenges[e].solved = !0),
                                                    this.availableChallengeCategories.includes(t[e].category) || this.availableChallengeCategories.push(t[e].category),
                                                    this.showHackingInstructor && i.e(5).then(i.bind(null, "s2oO")).then(i=>{
                                                            t[e].hasTutorial = i.hasInstructions(t[e].name)
                                                        }
                                                    );
                                                this.availableChallengeCategories.sort(),
                                                    this.displayedChallengeCategories = localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : this.availableChallengeCategories,
                                                    this.calculateProgressPercentage(),
                                                    this.populateFilteredChallengeLists(),
                                                    this.calculateGradientOffsets(t),
                                                    this.calculateTutorialTier(t),
                                                    this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties(),
                                                    this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories(),
                                                this.showOnlyTutorialChallenges && this.challenges.sort((t,e)=>t.tutorialOrder - e.tutorialOrder),
                                                    this.spinner.hide()
                                            }
                                            , t=>{
                                                this.challenges = [],
                                                    console.log(t)
                                            }
                                        )
                                }
                                , t=>console.log(t)),
                            this.ngZone.runOutsideAngular(()=>{
                                    this.io.socket().on("challenge solved", t=>{
                                            if (t && t.challenge) {
                                                for (let e = 0; e < this.challenges.length; e++)
                                                    if (this.challenges[e].name === t.name) {
                                                        this.challenges[e].solved = !0;
                                                        break
                                                    }
                                                this.calculateProgressPercentage(),
                                                    this.populateFilteredChallengeLists(),
                                                    this.calculateGradientOffsets(this.challenges),
                                                    this.calculateTutorialTier(this.challenges)
                                            }
                                        }
                                    )
                                }
                            )
                    }
                    augmentHintText(t) {
                        t.disabledEnv ? (this.numDisabledChallenges++,
                            this.disabledEnv = t.disabledEnv,
                            this.translate.get("CHALLENGE_UNAVAILABLE", {
                                env: t.disabledEnv
                            }).subscribe(e=>{
                                    t.hint = e
                                }
                                , e=>{
                                    t.hint = e
                                }
                            )) : t.hintUrl && (t.hint ? this.translate.get("CLICK_FOR_MORE_HINTS").subscribe(e=>{
                                t.hint += ` ${e}`
                            }
                            , e=>{
                                t.hint += ` ${e}`
                            }
                        ) : this.translate.get("CLICK_TO_OPEN_HINTS").subscribe(e=>{
                                t.hint = e
                            }
                            , e=>{
                                t.hint = e
                            }
                        ))
                    }
                    trustDescriptionHtml(t) {
                        t.description = this.sanitizer.bypassSecurityTrustHtml(t.description)
                    }
                    calculateProgressPercentage() {
                        let t = 0;
                        for (let e = 0; e < this.challenges.length; e++)
                            t += this.challenges[e].solved ? 1 : 0;
                        this.percentChallengesSolved = (100 * t / this.challenges.length).toFixed(0)
                    }
                    calculateTutorialTier(t) {
                        this.allTutorialsCompleted = !0,
                            this.isLastTutorialsTier = !0,
                            this.tutorialsTier = 1;
                        for (let e = 1; e <= 6; e++) {
                            const i = t.filter(t=>t.tutorialOrder && t.difficulty === e).length
                                , a = t.filter(t=>t.tutorialOrder && t.difficulty === e && t.solved).length;
                            this.allTutorialsCompleted = this.allTutorialsCompleted && i === a,
                            this.tutorialsTier === e && i === a && this.tutorialsTier++
                        }
                        if (!this.allTutorialsCompleted) {
                            this.isLastTutorialsTier = 0 === t.filter(t=>t.tutorialOrder && !t.solved && t.difficulty > this.tutorialsTier).length;
                            for (let t = 1; t <= this.tutorialsTier; t++)
                                this.displayedDifficulties.includes(t) || this.toggleDifficulty(this.tutorialsTier)
                        }
                    }
                    calculateGradientOffsets(t) {
                        for (let e = 1; e <= 6; e++) {
                            let i = 0
                                , a = 0;
                            for (let n = 0; n < t.length; n++)
                                t[n].difficulty === e && (a++,
                                t[n].solved && i++);
                            let o = Math.round(100 * i / a);
                            o = 100 - o,
                                o = +o + "%",
                                this.offsetValue[e - 1] = o
                        }
                    }
                    toggleDifficulty(t) {
                        this.displayedDifficulties.includes(t) ? this.displayedDifficulties = this.displayedDifficulties.filter(e=>e !== t) : this.displayedDifficulties.push(t),
                            localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties)),
                            this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties()
                    }
                    toggleAllDifficulty() {
                        this.toggledMajorityOfDifficulties ? (this.displayedDifficulties = [],
                            this.toggledMajorityOfDifficulties = !1) : (this.displayedDifficulties = this.availableDifficulties,
                            this.toggledMajorityOfDifficulties = !0),
                            localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties))
                    }
                    toggleShowSolvedChallenges() {
                        this.showSolvedChallenges = !this.showSolvedChallenges,
                            localStorage.setItem("showSolvedChallenges", JSON.stringify(this.showSolvedChallenges))
                    }
                    toggleShowDisabledChallenges() {
                        this.showDisabledChallenges = !this.showDisabledChallenges,
                            localStorage.setItem("showDisabledChallenges", JSON.stringify(this.showDisabledChallenges))
                    }
                    toggleShowOnlyTutorialChallenges() {
                        this.showOnlyTutorialChallenges = !this.showOnlyTutorialChallenges,
                            localStorage.setItem("showOnlyTutorialChallenges", JSON.stringify(this.showOnlyTutorialChallenges)),
                            this.challenges.sort(this.showOnlyTutorialChallenges ? (t,e)=>t.tutorialOrder - e.tutorialOrder : (t,e)=>t.name < e.name ? -1 : t.name > e.name ? 1 : 0)
                    }
                    toggleShowChallengeCategory(t) {
                        this.displayedChallengeCategories.includes(t) ? this.displayedChallengeCategories = this.displayedChallengeCategories.filter(e=>e !== t) : this.displayedChallengeCategories.push(t),
                            localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories)),
                            this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories()
                    }
                    toggleAllChallengeCategory() {
                        this.toggledMajorityOfCategories ? (this.displayedChallengeCategories = [],
                            this.toggledMajorityOfCategories = !1) : (this.displayedChallengeCategories = this.availableChallengeCategories,
                            this.toggledMajorityOfCategories = !0),
                            localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories))
                    }
                    determineToggledMajorityOfDifficulties() {
                        return this.displayedDifficulties.length > this.availableDifficulties.length / 2
                    }
                    determineToggledMajorityOfCategories() {
                        return this.displayedChallengeCategories.length > this.availableChallengeCategories.length / 2
                    }
                    filterToDataSource(t) {
                        t = t.filter(t=>!(!this.displayedDifficulties.includes(t.difficulty) || !this.displayedChallengeCategories.includes(t.category) || !this.showSolvedChallenges && t.solved || !this.showDisabledChallenges && t.disabledEnv || this.showOnlyTutorialChallenges && !t.hasTutorial));
                        let e = new A.o;
                        return e.data = t,
                            e
                    }
                    populateFilteredChallengeLists() {
                        for (const t of this.availableDifficulties)
                            0 === this.challenges.length ? (this.totalChallengesOfDifficulty[t - 1] = [],
                                this.solvedChallengesOfDifficulty[t - 1] = []) : (this.totalChallengesOfDifficulty[t - 1] = this.challenges.filter(e=>e.difficulty === t),
                                this.solvedChallengesOfDifficulty[t - 1] = this.challenges.filter(e=>e.difficulty === t && !0 === e.solved))
                    }
                    startHackingInstructor(t) {
                        console.log(`Starting instructions for challenge "${t}"`),
                            i.e(5).then(i.bind(null, "s2oO")).then(e=>{
                                    e.startHackingInstructorFor(t)
                                }
                            )
                    }
                    trackById(t, e) {
                        return e.id
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(b),a.Qb(qa),a.Qb(o.c),a.Qb(a.A),a.Qb(Ye),a.Qb(Ya.c),a.Qb(g.e))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-score-board"]],
                        decls: 38,
                        vars: 42,
                        consts: [["fxLayout", "column"], [1, "confirmation"], ["mode", "determinate", 3, "color", "value"], ["fxLayout", "row wrap", 1, "star-container"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], ["id", "btnToggleAllDifficulties", 1, "mat-button", 3, "disabled", "click"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-trophy"], ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"], ["class", "disabled-challenges-infoBox mat-button", 3, "innerHTML", 4, "ngIf"], ["fxLayout", "row wrap", 1, "category-container"], ["class", "category-toggle", "appearance", "legacy", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], [1, "mat-button", 3, "disabled", "click"], [3, "dataSource", "trackBy", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-lg", "column", 4, "ngIf"], ["src", "assets/public/images/padding/1px.png"], ["type", "timer", "size", "large", 1, "overlay-fullscreen"], [1, "fa-4x", "fa-layers", "fa-fw", 2, "display", "block", "margin", "5px"], ["aria-hidden", "true", "data-prefix", "fa", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", "data-fa-i2svg", "", "stroke-width", "10", 1, "svg-inline--fa", "fa-star", "fa-w-18", "star-border"], ["x1", "0", "x2", "0", "y1", "0", "y2", "100%", 3, "id"], [1, "empty-star"], [1, "filled-star"], ["d", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], ["data-fa-transform", "shrink-9", 1, "fa-layers-text", "fa-inverse", 2, "font-weight", "900"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-exclamation-circle"], [1, "disabled-challenges-infoBox", "mat-button", 3, "innerHTML"], ["appearance", "legacy", "matTooltipPosition", "above", 1, "category-toggle", 3, "checked", "disabled", "matTooltip", "change"], [3, "dataSource", "trackBy"], ["matColumnDef", "name"], ["fxShow", "", "fxHide.lt-sm", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-sm", "", 4, "matCellDef"], ["matColumnDef", "difficulty"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "description"], ["fxFlex", "1 1 50%", "translate", "", 4, "matHeaderCellDef"], ["fxFlex", "1 1 50%", 4, "matCellDef"], ["matColumnDef", "category"], ["fxShow", "", "fxHide.lt-lg", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-lg", "", 4, "matCellDef"], ["matColumnDef", "status"], ["translate", "", 4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""], ["fxShow", "", "fxHide.lt-sm", ""], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", ""], ["readOnly", "true", 3, "rate", "max"], ["fxFlex", "1 1 50%", "translate", ""], ["fxFlex", "1 1 50%"], [3, "innerHTML"], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["fxShow", "", "fxHide.lt-lg", ""], ["translate", ""], [3, "challenge", "allowRepeatNotifications", "showChallengeHints"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", "class", "hacking-instructor-button", 3, "matTooltip", "disabled", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 1, "hacking-instructor-button", 3, "matTooltip", "disabled", "click"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", "class", "primary-notification", 3, "innerHTML", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", "class", "warn-notification", 3, "innerHTML", 4, "ngIf"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", 1, "primary-notification", 3, "innerHTML"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", 1, "warn-notification", 3, "innerHTML"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card"),
                                a.Wb(2, "mat-card-title"),
                                a.Jc(3),
                                a.jc(4, "translate"),
                                a.Wb(5, "small", 1),
                                a.Jc(6),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(7, "mat-progress-bar", 2),
                                a.Vb(),
                                a.Wb(8, "mat-card"),
                                a.Wb(9, "div", 3),
                                a.Hc(10, ro, 14, 23, "mat-button-toggle", 4),
                                a.Wb(11, "button", 5),
                                a.ec("click", (function() {
                                        return e.toggleAllDifficulty()
                                    }
                                )),
                                a.Jc(12),
                                a.jc(13, "translate"),
                                a.Vb(),
                                a.Wb(14, "mat-button-toggle", 6),
                                a.ec("change", (function() {
                                        return e.toggleShowSolvedChallenges()
                                    }
                                )),
                                a.jc(15, "translate"),
                                a.Rb(16, "i", 7),
                                a.Jc(17),
                                a.jc(18, "translate"),
                                a.Vb(),
                                a.Wb(19, "mat-button-toggle", 8),
                                a.ec("change", (function() {
                                        return e.toggleShowOnlyTutorialChallenges()
                                    }
                                )),
                                a.jc(20, "translate"),
                                a.Wb(21, "mat-icon"),
                                a.Jc(22, " school "),
                                a.Vb(),
                                a.Jc(23),
                                a.jc(24, "translate"),
                                a.Vb(),
                                a.Hc(25, so, 5, 11, "mat-button-toggle", 9),
                                a.Hc(26, lo, 2, 7, "div", 10),
                                a.Vb(),
                                a.Rb(27, "mat-divider"),
                                a.Wb(28, "div", 11),
                                a.Hc(29, bo, 3, 9, "mat-button-toggle", 12),
                                a.Wb(30, "button", 13),
                                a.ec("click", (function() {
                                        return e.toggleAllChallengeCategory()
                                    }
                                )),
                                a.Jc(31),
                                a.jc(32, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(33, "mat-card"),
                                a.Hc(34, Vo, 18, 4, "mat-table", 14),
                                a.Vb(),
                                a.Hc(35, ko, 4, 2, "div", 15),
                                a.Vb(),
                                a.Rb(36, "img", 16),
                                a.Rb(37, "ngx-spinner", 17)),
                            2 & t && (a.Db(3),
                                a.Lc("", a.kc(4, 22, "TITLE_SCORE_BOARD"), " "),
                                a.Db(3),
                                a.Lc("", e.percentChallengesSolved, "%"),
                                a.Db(1),
                                a.oc("color", "accent")("value", e.percentChallengesSolved),
                                a.Db(3),
                                a.oc("ngForOf", e.availableDifficulties),
                                a.Db(1),
                                a.oc("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted),
                                a.Db(1),
                                a.Kc(a.kc(13, 24, e.toggledMajorityOfDifficulties ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")),
                                a.Db(2),
                                a.oc("checked", e.showSolvedChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? a.lc(15, 26, "INFO_FULL_CHALLENGE_MODE", a.tc(38, oo, e.challenges.length)) : ""),
                                a.Db(3),
                                a.Lc(" ", a.kc(18, 29, "BTN_SHOW_SOLVED"), " "),
                                a.Db(2),
                                a.oc("checked", e.showOnlyTutorialChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? a.lc(20, 31, "INFO_FULL_CHALLENGE_MODE", a.tc(40, oo, e.challenges.length)) : ""),
                                a.Db(4),
                                a.Lc(" ", a.kc(24, 34, "BTN_SHOW_ONLY_TUTORIALS"), " "),
                                a.Db(2),
                                a.oc("ngIf", e.numDisabledChallenges > 0),
                                a.Db(1),
                                a.oc("ngIf", e.numDisabledChallenges > 0 && e.showDisabledChallenges),
                                a.Db(3),
                                a.oc("ngForOf", e.availableChallengeCategories),
                                a.Db(1),
                                a.oc("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted),
                                a.Db(1),
                                a.Kc(a.kc(32, 36, e.toggledMajorityOfCategories ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")),
                                a.Db(3),
                                a.oc("ngIf", e.challenges),
                                a.Db(1),
                                a.oc("ngIf", e.showContributionInfoBox || e.questionnaireUrl))
                        },
                        directives: [p.d, f.a, f.f, Ka.a, P.k, Xa.a, ye.a, we.a, P.l, Me.a, Ya.a, A.n, A.c, A.i, A.b, A.k, A.m, A.h, E.b, g.a, A.a, Et.a, p.b, ao, v.a, A.j, A.l],
                        pipes: [g.d],
                        styles: ["footer[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:35px;margin-left:35px;margin-right:35px;min-width:300px}.category-container[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{margin-top:25px}.star-container[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:25px}.star-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:auto}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:pointer}.heading[_ngcontent-%COMP%]{padding-top:5px}.mat-raised-button[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.category-toggle[_ngcontent-%COMP%]{font-size:small}.overlay-fullscreen[_ngcontent-%COMP%]     .black-overlay{position:fixed}.hacking-instructor-button[_ngcontent-%COMP%]{margin-left:8px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.disabled-challenges-infoBox[_ngcontent-%COMP%]{height:100%;margin:0;align-self:center;color:#e64a19;cursor:default}.disabled-challenges-infoBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;color:#546e7a}"]
                    }),
                    t
            }
        )()
            , To = (()=>{
                class t {
                    constructor(t) {
                        this.http = t
                    }
                    verify(t) {
                        return this.http.post("./rest/2fa/verify", {
                            tmpToken: localStorage.getItem("totp_tmp_token"),
                            totpToken: t
                        }).pipe(Object(c.a)(t=>t.authentication), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    status() {
                        return this.http.get("./rest/2fa/status").pipe(Object(c.a)(t=>t), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    setup(t, e, i) {
                        return this.http.post("./rest/2fa/setup", {
                            password: t,
                            setupToken: i,
                            initialToken: e
                        }).pipe(Object(c.a)(()=>{}
                        ), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    disable(t) {
                        return this.http.post("./rest/2fa/disable", {
                            password: t
                        }).pipe(Object(c.a)(()=>{}
                        ), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function Lo(t, e) {
            1 & t && (a.Wb(0, "div", 13),
                a.Jc(1, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
                a.Vb())
        }
        u.b.add(m.fb),
            u.a.watch();
        let Ao = (()=>{
                class t {
                    constructor(t, e, i, a, o) {
                        this.twoFactorAuthService = t,
                            this.cookieService = e,
                            this.userService = i,
                            this.router = a,
                            this.ngZone = o,
                            this.twoFactorForm = new s.f({
                                token: new s.c("",[s.x.minLength(6), s.x.maxLength(6), s.x.required, s.x.pattern("^[\\d]{6}$")])
                            }),
                            this.errored = !1
                    }
                    verify() {
                        this.twoFactorAuthService.verify(this.twoFactorForm.value.token).subscribe(t=>{
                                localStorage.setItem("token", t.token);
                                let e = new Date;
                                e.setHours(e.getHours() + 8),
                                    this.cookieService.set("token", t.token, e, "/"),
                                    sessionStorage.setItem("bid", t.bid.toString()),
                                    this.userService.isLoggedIn.next(!0),
                                    this.ngZone.run(()=>this.router.navigate(["/search"]))
                            }
                            , t=>(this.errored = !0,
                                setTimeout(()=>{
                                        this.errored = !1
                                    }
                                    , 5e3),
                                t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(To),a.Qb(r.a),a.Qb(D),a.Qb(S.b),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-two-factor-auth-enter"]],
                        decls: 27,
                        vars: 13,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["class", "error", "style", "margin-bottom: 10px;", "translate", "", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-container"], ["id", "inputToken", "appearance", "outline", "color", "accent"], ["formControlName", "token", "type", "text", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", "matInput", "", "id", "totpToken", "aria-label", "Field for entering the Two Factor token", 3, "placeholder"], ["tokenInput", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The code to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "color", "primary", "mat-raised-button", "", "id", "totpSubmitButton", "aria-label", "Button to confirm the input", 3, "disabled"], [1, "material-icons"], ["translate", "", 1, "error", 2, "margin-bottom", "10px"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_TWO_FACTOR_AUTHENTICATION"),
                                a.Vb(),
                                a.Wb(4, "p", 2),
                                a.Jc(5, "TITLE_TWO_FACTOR_AUTH_ENTER"),
                                a.Vb(),
                                a.Hc(6, Lo, 2, 0, "div", 3),
                                a.Wb(7, "form", 4),
                                a.ec("ngSubmit", (function() {
                                        return e.verify()
                                    }
                                )),
                                a.Wb(8, "div", 5),
                                a.Wb(9, "mat-form-field", 6),
                                a.Wb(10, "mat-label", 2),
                                a.Jc(11, "LABEL_TWO_FACTOR_AUTH_TOKEN"),
                                a.Vb(),
                                a.Rb(12, "input", 7, 8),
                                a.jc(14, "translate"),
                                a.Wb(15, "mat-icon", 9),
                                a.jc(16, "translate"),
                                a.Jc(17, " help_outline "),
                                a.Vb(),
                                a.Wb(18, "mat-hint", 10),
                                a.Jc(19),
                                a.Vb(),
                                a.Wb(20, "mat-error", 2),
                                a.Jc(21, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(22, "button", 11),
                                a.Wb(23, "i", 12),
                                a.Jc(24, " lock_open "),
                                a.Vb(),
                                a.Jc(25),
                                a.jc(26, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(13);
                                a.Db(6),
                                    a.oc("ngIf", e.errored),
                                    a.Db(1),
                                    a.oc("formGroup", e.twoFactorForm),
                                    a.Db(5),
                                    a.pc("placeholder", a.kc(14, 7, "2FA_ENTER_CODE_PLACEHOLDER")),
                                    a.Db(3),
                                    a.pc("matTooltip", a.kc(16, 9, "INITIAL_TOKEN_TOOLTIP")),
                                    a.Db(4),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/6"),
                                    a.Db(3),
                                    a.oc("disabled", e.twoFactorForm.invalid),
                                    a.Db(3),
                                    a.Lc(" ", a.kc(26, 11, "BTN_LOGIN"), " ")
                            }
                        },
                        directives: [p.c, f.a, g.a, P.l, s.z, s.o, s.g, At.c, At.g, s.b, Pt.b, s.n, s.e, s.j, s.i, s.t, we.a, At.h, ye.a, At.f, At.b, v.a],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}#totpSubmitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#inputToken[_ngcontent-%COMP%]{width:100%}"]
                    }),
                    t
            }
        )();
        u.b.add(m.lb, m.v),
            u.a.watch();
        let Po = (()=>{
                class t {
                    constructor(t, e) {
                        this.route = t,
                            this.translate = e,
                            this.error = null
                    }
                    ngOnInit() {
                        const t = this.route.snapshot.queryParams.error;
                        t && this.translate.get(t).subscribe(t=>{
                                this.error = t
                            }
                            , t=>{
                                this.error = t
                            }
                        )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(S.a),a.Qb(g.e))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-error-page"]],
                        decls: 7,
                        vars: 1,
                        consts: [[1, "warn-notification", "mat-elevation-z6"], [1, "mat-display-3"], [1, "fas", "fa-hand-paper"], [1, "mat-subheading-2"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "div"),
                                a.Wb(2, "div", 1),
                                a.Rb(3, "i", 2),
                                a.Jc(4, " 403"),
                                a.Vb(),
                                a.Wb(5, "span", 3),
                                a.Jc(6),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(6),
                                a.Kc(e.error))
                        },
                        directives: [f.a],
                        styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                    }),
                    t
            }
        )();
        var Eo = i("0MNC")
            , Ro = i("XhcP");
        let Mo = (()=>{
                class t {
                    constructor(t) {
                        this.breakpointObserver = t,
                            this.windowWidth = window.innerWidth,
                            this.isHandset$ = this.breakpointObserver.observe(Eo.b.Handset).pipe(Object(c.a)(t=>t.matches))
                    }
                    ngAfterViewInit() {
                        this.windowWidth = window.innerWidth
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Eo.a))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-privacy-security"]],
                        decls: 3,
                        vars: 0,
                        consts: [[1, "sidenav-container"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-sidenav-container", 0),
                                a.Wb(1, "mat-sidenav-content"),
                                a.Rb(2, "router-outlet"),
                                a.Vb(),
                                a.Vb())
                        },
                        directives: [Ro.b, Ro.c, S.f],
                        styles: [""]
                    }),
                    t
            }
        )();
        var Jo = i("O0x4");
        function Ho(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "div", 5),
                    a.Wb(1, "p", 6),
                    a.Jc(2, "2FA_SUCCESSFUL_SETUP"),
                    a.Vb(),
                    a.Wb(3, "form", 7),
                    a.ec("ngSubmit", (function() {
                            return a.zc(t),
                                a.ic().disable()
                        }
                    )),
                    a.Wb(4, "h2", 8),
                    a.Jc(5, "REMOVE_TWO_FACTOR_AUTH"),
                    a.Vb(),
                    a.Wb(6, "div", 9),
                    a.Jc(7, "2FA_SETUP_ERROR"),
                    a.Vb(),
                    a.Wb(8, "mat-form-field", 10),
                    a.Wb(9, "mat-label", 6),
                    a.Jc(10, "LABEL_CURRENT_PASSWORD"),
                    a.Vb(),
                    a.Rb(11, "input", 11),
                    a.jc(12, "translate"),
                    a.Vb(),
                    a.Wb(13, "button", 12),
                    a.Wb(14, "i", 13),
                    a.Jc(15, " remove_circle_outline "),
                    a.Vb(),
                    a.Jc(16),
                    a.jc(17, "translate"),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(3),
                    a.oc("formGroup", t.twoFactorDisableForm),
                    a.Db(3),
                    a.oc("hidden", !(t.errored && !t.twoFactorDisableForm.dirty)),
                    a.Db(5),
                    a.pc("placeholder", a.kc(12, 5, "MANDATORY_CURRENT_PASSWORD")),
                    a.Db(2),
                    a.oc("disabled", t.twoFactorDisableForm.invalid),
                    a.Db(3),
                    a.Lc(" ", a.kc(17, 7, "BTN_REMOVE"), " ")
            }
        }
        function No(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "form", 14),
                    a.ec("ngSubmit", (function() {
                            return a.zc(t),
                                a.ic().setup()
                        }
                    )),
                    a.Wb(1, "span", 15),
                    a.Jc(2, "2FA_AUTH_SETUP_INSTRUCTIONS"),
                    a.Vb(),
                    a.Wb(3, "div", 16),
                    a.Rb(4, "qr-code", 17),
                    a.Vb(),
                    a.Wb(5, "div", 9),
                    a.Jc(6, "2FA_SETUP_ERROR"),
                    a.Vb(),
                    a.Wb(7, "mat-form-field", 10),
                    a.Wb(8, "mat-label", 6),
                    a.Jc(9, "LABEL_CURRENT_PASSWORD"),
                    a.Vb(),
                    a.Rb(10, "input", 18),
                    a.jc(11, "translate"),
                    a.Vb(),
                    a.Wb(12, "mat-form-field", 10),
                    a.Wb(13, "mat-label", 6),
                    a.Jc(14, "INITIAL_CODE"),
                    a.Vb(),
                    a.Rb(15, "input", 19, 20),
                    a.jc(17, "translate"),
                    a.Wb(18, "mat-error", 6),
                    a.Jc(19, "INVALID_TWO_FACTOR_AUTH_TOKEN"),
                    a.Vb(),
                    a.Wb(20, "mat-icon", 21),
                    a.jc(21, "translate"),
                    a.Jc(22, " help_outline "),
                    a.Vb(),
                    a.Wb(23, "mat-hint", 22),
                    a.Jc(24),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(25, "button", 23),
                    a.Wb(26, "i", 13),
                    a.Jc(27, " save "),
                    a.Vb(),
                    a.Jc(28),
                    a.jc(29, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.wc(16)
                    , e = a.ic();
                a.oc("formGroup", e.twoFactorSetupForm),
                    a.Db(4),
                    a.oc("value", e.totpUrl)("size", 300)("level", "L"),
                    a.Db(1),
                    a.oc("hidden", !(e.errored && !e.twoFactorSetupForm.dirty)),
                    a.Db(5),
                    a.pc("placeholder", a.kc(11, 12, "MANDATORY_CURRENT_PASSWORD")),
                    a.Db(5),
                    a.pc("placeholder", a.kc(17, 14, "INITIAL_CODE_PLACEHOLDER")),
                    a.Eb("data-test-totp-secret", e.totpSecret),
                    a.Db(5),
                    a.pc("matTooltip", a.kc(21, 16, "INITIAL_TOKEN_TOOLTIP")),
                    a.Db(4),
                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/6"),
                    a.Db(1),
                    a.oc("disabled", e.twoFactorSetupForm.invalid),
                    a.Db(3),
                    a.Lc(" ", a.kc(29, 18, "BTN_SAVE"), " ")
            }
        }
        u.b.add(m.fb, m.I),
            u.a.watch();
        let Fo = (()=>{
                class t {
                    constructor(t, e, i, a, o) {
                        this.twoFactorAuthService = t,
                            this.configurationService = e,
                            this.snackBar = i,
                            this.translateService = a,
                            this.snackBarHelperService = o,
                            this.twoFactorSetupForm = new s.f({
                                passwordControl: new s.c("",[s.x.required]),
                                initalTokenControl: new s.c("",[s.x.required, s.x.pattern("^[\\d]{6}$")])
                            }),
                            this.twoFactorDisableForm = new s.f({
                                passwordControl: new s.c("",[s.x.required])
                            }),
                            this.setupStatus = null,
                            this.errored = null,
                            this.appName = "OWASP Juice Shop"
                    }
                    ngOnInit() {
                        this.updateStatus()
                    }
                    updateStatus() {
                        const t = this.twoFactorAuthService.status()
                            , e = this.configurationService.getApplicationConfiguration();
                        return Object(Ge.a)([t, e]).subscribe(([{setup: t, email: e, secret: i, setupToken: a},o])=>{
                                if (this.setupStatus = t,
                                    this.appName = o.application.name,
                                !1 === t) {
                                    const t = encodeURIComponent(this.appName);
                                    this.totpUrl = `otpauth://totp/${t}:${e}?secret=${i}&issuer=${t}`,
                                        this.totpSecret = i,
                                        this.setupToken = a
                                }
                            }
                            , ()=>{
                                console.log("Failed to fetch 2fa status")
                            }
                        ),
                            t
                    }
                    setup() {
                        this.twoFactorAuthService.setup(this.twoFactorSetupForm.get("passwordControl").value, this.twoFactorSetupForm.get("initalTokenControl").value, this.setupToken).subscribe(()=>{
                                this.setupStatus = !0,
                                    this.snackBarHelperService.open("CONFIRM_2FA_SETUP")
                            }
                            , ()=>{
                                this.twoFactorSetupForm.get("passwordControl").markAsPristine(),
                                    this.twoFactorSetupForm.get("initalTokenControl").markAsPristine(),
                                    this.errored = !0
                            }
                        )
                    }
                    disable() {
                        this.twoFactorAuthService.disable(this.twoFactorDisableForm.get("passwordControl").value).subscribe(()=>{
                                this.updateStatus().subscribe(()=>{
                                        this.setupStatus = !1
                                    }
                                ),
                                    this.snackBarHelperService.open("CONFIRM_2FA_DISABLE")
                            }
                            , ()=>{
                                this.twoFactorDisableForm.get("passwordControl").markAsPristine(),
                                    this.errored = !0
                            }
                        )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(To),a.Qb(b),a.Qb(T.a),a.Qb(g.e),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-two-factor-auth"]],
                        decls: 6,
                        vars: 2,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["id", "2fa-setup-title", "translate", ""], ["id", "2fa-setup-successfully", 4, "ngIf"], ["class", "form-container", "id", "two-factor-auth-setup", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "2fa-setup-successfully"], ["translate", ""], ["id", "two-factor-auth-disable", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "two-factor-auth-disable-title", "translate", ""], ["translate", "", 1, "error", 3, "hidden"], ["appearance", "outline", "color", "accent"], ["id", "currentPasswordDisable", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["type", "submit", "id", "disableTwoFactorAuth", "mat-raised-button", "", "color", "warn", "aria-label", "Button to remove the two-factor authentication", 3, "disabled"], [1, "material-icons"], ["id", "two-factor-auth-setup", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "2fa-setup-instructions", "translate", ""], ["fxLayoutAlign", "center", 1, "two-factor-qr-code"], [3, "value", "size", "level"], ["id", "currentPasswordSetup", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["id", "initalToken", "formControlName", "initalTokenControl", "type", "text", "matInput", "", "aria-label", "Field to enter the initial token. This must have 6 digits.", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", 3, "placeholder"], ["initToken", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The token to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "id", "setupTwoFactorAuth", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the two-factor configuration", 3, "disabled"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                                a.Vb(),
                                a.Hc(4, Ho, 18, 9, "div", 3),
                                a.Hc(5, No, 30, 20, "form", 4),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(4),
                                a.oc("ngIf", !0 === e.setupStatus),
                                a.Db(1),
                                a.oc("ngIf", !1 === e.setupStatus))
                        },
                        directives: [p.c, f.a, g.a, P.l, s.z, s.o, s.g, At.c, At.g, s.b, Pt.b, s.n, s.e, v.a, Jo.a, s.j, s.i, s.t, At.b, we.a, At.h, ye.a, At.f],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#disableTwoFactorAuth[_ngcontent-%COMP%], #setupTwoFactorAuth[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.two-factor-qr-code[_ngcontent-%COMP%]{margin:16px 0}#two-factor-auth-disable[_ngcontent-%COMP%]{margin-top:32px}#two-factor-auth-disable-title[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{margin-top:5px}"]
                    }),
                    t
            }
        )()
            , Bo = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = "."
                    }
                    getCaptcha() {
                        return this.http.get(this.hostServer + "/rest/image-captcha/").pipe(Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function Uo(t, e) {
            if (1 & t && (a.Wb(0, "div"),
                a.Wb(1, "p", 13),
                a.Jc(2),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(2),
                    a.Kc(t.error)
            }
        }
        function jo(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_CAPTCHA "),
                a.Vb())
        }
        function Qo(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_CAPTCHA "),
                a.Vb())
        }
        const zo = function() {
            return {
                length: "5"
            }
        };
        function Go(t, e) {
            if (1 & t && (a.Wb(0, "div"),
                a.Wb(1, "div"),
                a.Wb(2, "span", 14),
                a.Jc(3, "CAPTCHA "),
                a.Wb(4, "span"),
                a.Jc(5, ":"),
                a.Vb(),
                a.Vb(),
                a.Rb(6, "div", 15),
                a.Vb(),
                a.Wb(7, "mat-form-field", 16),
                a.Wb(8, "mat-label", 2),
                a.Jc(9, "ENTER_CAPTCHA"),
                a.Vb(),
                a.Rb(10, "input", 17, 18),
                a.jc(12, "translate"),
                a.Wb(13, "mat-hint", 19),
                a.Jc(14),
                a.Vb(),
                a.Hc(15, jo, 2, 0, "mat-error", 20),
                a.Hc(16, Qo, 2, 0, "mat-error", 20),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.wc(11)
                    , e = a.ic();
                a.Db(6),
                    a.oc("innerHTML", e.captcha, a.Ac),
                    a.Db(4),
                    a.pc("placeholder", a.lc(12, 6, "TYPE_THESE_LETTERS", a.sc(9, zo))),
                    a.oc("formControl", e.captchaControl),
                    a.Db(4),
                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/5"),
                    a.Db(1),
                    a.oc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.required),
                    a.Db(1),
                    a.oc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.minlength)
            }
        }
        let qo = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.sanitizer = t,
                            this.imageCaptchaService = e,
                            this.dataSubjectService = i,
                            this.captchaControl = new s.c("",[s.x.required, s.x.minLength(5)]),
                            this.formatControl = new s.c("",[s.x.required]),
                            this.dataRequest = void 0,
                            this.presenceOfCaptcha = !1
                    }
                    ngOnInit() {
                        this.needCaptcha(),
                            this.dataRequest = {}
                    }
                    needCaptcha() {
                        let t = new Date
                            , e = localStorage.getItem("lstdtxprt") ? new Date(JSON.parse(String(localStorage.getItem("lstdtxprt")))) : new Date(0);
                        t.getTime() - e.getTime() < 3e5 && (this.getNewCaptcha(),
                            this.presenceOfCaptcha = !0)
                    }
                    getNewCaptcha() {
                        this.imageCaptchaService.getCaptcha().subscribe(t=>{
                                this.captcha = this.sanitizer.bypassSecurityTrustHtml(t.image)
                            }
                        )
                    }
                    save() {
                        this.presenceOfCaptcha && (this.dataRequest.answer = this.captchaControl.value),
                            this.dataRequest.format = this.formatControl.value,
                            this.dataSubjectService.dataExport(this.dataRequest).subscribe(t=>{
                                    this.error = null,
                                        this.confirmation = t.confirmation,
                                        this.userData = t.userData,
                                        window.open("", "_blank", "width=500").document.write(this.userData),
                                        this.lastSuccessfulTry = new Date,
                                        localStorage.setItem("lstdtxprt", JSON.stringify(this.lastSuccessfulTry)),
                                        this.ngOnInit(),
                                        this.resetForm()
                                }
                                , t=>{
                                    this.error = t.error,
                                        this.confirmation = null,
                                        this.resetFormError()
                                }
                            )
                    }
                    resetForm() {
                        this.captchaControl.markAsUntouched(),
                            this.captchaControl.markAsPristine(),
                            this.captchaControl.setValue(""),
                            this.formatControl.markAsUntouched(),
                            this.formatControl.markAsPristine(),
                            this.formatControl.setValue("")
                    }
                    resetFormError() {
                        this.captchaControl.markAsUntouched(),
                            this.captchaControl.markAsPristine(),
                            this.captchaControl.setValue("")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(o.c),a.Qb(Bo),a.Qb(Bt))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-data-export"]],
                        decls: 26,
                        vars: 7,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [4, "ngIf"], ["id", "data-export-form", 1, "form-container"], ["id", "formatControl", "aria-label", "Select an option", 3, "formControl"], ["translate", "", 1, "radio-label"], ["value", "1", "aria-label", "Export Option JSON"], ["value", "2", "aria-label", "Export Option PDF", "disabled", ""], ["value", "3", "aria-label", "Export Option Excel", "disabled", ""], ["type", "submit", "id", "submitButton", "color", "primary", "mat-raised-button", "", "aria-label", "Button to send the request", 2, "margin-top", "15px", 3, "disabled", "click"], [1, "material-icons"], [1, "hint"], [1, "error"], ["translate", "", 2, "float", "left", "margin-top", "40px", "font-weight", "500", "margin-bottom", "20px"], [1, "captcha-image", 2, "margin-left", "10px", 3, "innerHTML"], ["appearance", "outline", "color", "accent", 2, "margin-top", "10px", "width", "100%"], ["type", "text", "matInput", "", "maxlength", "5", "aria-label", "Input for the CAPTCHA", 3, "formControl", "placeholder"], ["captchaInput", ""], ["align", "end"], ["translate", "", 4, "ngIf"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_REQUEST_DATA_EXPORT"),
                                a.Vb(),
                                a.Hc(4, Uo, 3, 1, "div", 3),
                                a.Wb(5, "div", 4),
                                a.Wb(6, "mat-radio-group", 5),
                                a.Wb(7, "mat-label", 6),
                                a.Jc(8, "EXPORT_LABEL "),
                                a.Wb(9, "span"),
                                a.Jc(10, ":"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(11, "mat-radio-button", 7),
                                a.Jc(12, "JSON"),
                                a.Vb(),
                                a.Wb(13, "mat-radio-button", 8),
                                a.Jc(14, "PDF"),
                                a.Vb(),
                                a.Wb(15, "mat-radio-button", 9),
                                a.Jc(16, "Excel"),
                                a.Vb(),
                                a.Vb(),
                                a.Hc(17, Go, 17, 10, "div", 3),
                                a.Vb(),
                                a.Wb(18, "button", 10),
                                a.ec("click", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Wb(19, "i", 11),
                                a.Jc(20, " save_alt "),
                                a.Vb(),
                                a.Jc(21),
                                a.jc(22, "translate"),
                                a.Vb(),
                                a.Wb(23, "div", 12),
                                a.Wb(24, "span", 2),
                                a.Jc(25, "DATA_EXPORT_HINT"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(4),
                                a.oc("ngIf", e.error),
                                a.Db(2),
                                a.oc("formControl", e.formatControl),
                                a.Db(11),
                                a.oc("ngIf", e.presenceOfCaptcha),
                                a.Db(1),
                                a.oc("disabled", e.formatControl.invalid || e.captchaControl.invalid && e.presenceOfCaptcha),
                                a.Db(3),
                                a.Lc(" ", a.kc(22, 5, "BTN_REQUEST"), " "))
                        },
                        directives: [p.c, f.a, g.a, P.l, va.b, s.n, s.d, At.g, va.a, v.a, At.c, Pt.b, s.b, s.i, At.f, At.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{display:block;height:auto;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:25%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:10px;justify-content:center;margin-top:5px}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-bottom:16px;margin-left:16px}.radio-label[_ngcontent-%COMP%]{font-weight:500;margin-right:8px}.captcha-image[_ngcontent-%COMP%]{float:left;margin-bottom:10px;margin-top:20px}"]
                    }),
                    t
            }
        )()
            , Yo = (()=>{
                class t {
                    constructor(t) {
                        this.sanitizer = t,
                            this.lastLoginIp = "?"
                    }
                    ngOnInit() {
                        try {
                            this.parseAuthToken()
                        } catch (t) {
                            console.log(t)
                        }
                    }
                    parseAuthToken() {
                        let t = {};
                        const e = localStorage.getItem("token");
                        e && (t = x(e),
                        t.data.lastLoginIp && (this.lastLoginIp = this.sanitizer.bypassSecurityTrustHtml(`<small>${t.data.lastLoginIp}</small>`)))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(o.c))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-last-login-ip"]],
                        decls: 8,
                        vars: 1,
                        consts: [[1, "ipCard", "mat-elevation-z6"], ["translate", ""], [2, "margin-bottom", "15px"], [3, "innerHTML"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "h1", 1),
                                a.Jc(2, "LAST_LOGIN_IP"),
                                a.Vb(),
                                a.Wb(3, "p", 2),
                                a.Wb(4, "span", 1),
                                a.Jc(5, "IP_ADDRESS"),
                                a.Vb(),
                                a.Jc(6, "\xa0\xa0"),
                                a.Rb(7, "span", 3),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(7),
                                a.oc("innerHTML", e.lastLoginIp, a.Ac))
                        },
                        directives: [f.a, g.a],
                        styles: [".ipCard[_ngcontent-%COMP%]{display:block;margin:0 auto 5%;min-width:320px;width:25%}"]
                    }),
                    t
            }
        )()
            , Ko = (()=>{
                class t {
                    constructor(t, e) {
                        this._document = t,
                            this.configurationService = e,
                            this.applicationName = "OWASP Juice Shop"
                    }
                    ngOnInit() {
                        this.applicationUrl = this._document.location.protocol + "//" + this._document.location.hostname,
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    t && t.application && t.application.name && (this.applicationName = t.application.name),
                                        this.privacyContactEmail = t && t.application && t.application.privacyContactEmail ? t.application.privacyContactEmail : `donotreply@${this._document.location.hostname}`
                                }
                                , t=>console.log(t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(P.d),a.Qb(b))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-privacy-policy"]],
                        decls: 169,
                        vars: 9,
                        consts: [[1, "mat-elevation-z6"], [1, "privacy-policy"], ["translate", ""], [1, "hot"], ["href", "https://www.freeprivacypolicy.com/", "aria-label", "Link to the page where the privacy policy was created"], [1, "divider"], ["src", "assets/public/images/padding/81px.png"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "section", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "TITLE_PRIVACY_POLICY"),
                                a.Vb(),
                                a.Wb(4, "p"),
                                a.Jc(5, "Effective date: March 15, 2019"),
                                a.Vb(),
                                a.Wb(6, "p"),
                                a.Jc(7),
                                a.Wb(8, "span", 3),
                                a.Jc(9),
                                a.Vb(),
                                a.Jc(10, ' website (the "Service").'),
                                a.Vb(),
                                a.Wb(11, "p"),
                                a.Jc(12),
                                a.Wb(13, "a", 4),
                                a.Jc(14, "Free Privacy Policy website"),
                                a.Vb(),
                                a.Jc(15, "."),
                                a.Vb(),
                                a.Wb(16, "p"),
                                a.Jc(17),
                                a.Vb(),
                                a.Rb(18, "mat-divider", 5),
                                a.Wb(19, "h2"),
                                a.Jc(20, "A. Information Collection And Use"),
                                a.Vb(),
                                a.Wb(21, "p"),
                                a.Jc(22, "We collect several different types of information for various purposes to provide and improve our Service to you."),
                                a.Vb(),
                                a.Wb(23, "h3"),
                                a.Jc(24, "A1. Types of Data Collected"),
                                a.Vb(),
                                a.Wb(25, "h4"),
                                a.Jc(26, "A1.1 Personal Data"),
                                a.Vb(),
                                a.Wb(27, "p"),
                                a.Jc(28, 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'),
                                a.Vb(),
                                a.Wb(29, "ul"),
                                a.Wb(30, "li"),
                                a.Jc(31, "Email address"),
                                a.Vb(),
                                a.Wb(32, "li"),
                                a.Jc(33, "Address, State, Province, ZIP/Postal code, City"),
                                a.Vb(),
                                a.Wb(34, "li"),
                                a.Jc(35, "Cookies and Usage Data"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(36, "h4"),
                                a.Jc(37, "A1.2 Usage Data"),
                                a.Vb(),
                                a.Wb(38, "p"),
                                a.Wb(39, "span", 3),
                                a.Jc(40, "We may also"),
                                a.Vb(),
                                a.Jc(41, ' collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.'),
                                a.Vb(),
                                a.Wb(42, "h4"),
                                a.Jc(43, "A1.3 Tracking & Cookies Data"),
                                a.Vb(),
                                a.Wb(44, "p"),
                                a.Jc(45, "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."),
                                a.Vb(),
                                a.Wb(46, "p"),
                                a.Jc(47, "Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."),
                                a.Vb(),
                                a.Wb(48, "p"),
                                a.Jc(49, "You can "),
                                a.Wb(50, "span", 3),
                                a.Jc(51, "instruct you"),
                                a.Vb(),
                                a.Jc(52, "r browser "),
                                a.Wb(53, "span", 3),
                                a.Jc(54, "to refuse all"),
                                a.Vb(),
                                a.Jc(55, " cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."),
                                a.Vb(),
                                a.Wb(56, "p"),
                                a.Jc(57, "Examples of Cookies we use:"),
                                a.Vb(),
                                a.Wb(58, "ul"),
                                a.Wb(59, "li"),
                                a.Wb(60, "strong"),
                                a.Jc(61, "Session Cookies:"),
                                a.Vb(),
                                a.Jc(62, " \xa0We use Session Cookies to operate our Service."),
                                a.Vb(),
                                a.Wb(63, "li"),
                                a.Wb(64, "strong"),
                                a.Jc(65, "Preference Cookies:"),
                                a.Vb(),
                                a.Jc(66, "\xa0We use Preference Cookies to remember your preferences and various settings. "),
                                a.Vb(),
                                a.Wb(67, "li"),
                                a.Wb(68, "strong"),
                                a.Jc(69, "Security Cookies:"),
                                a.Vb(),
                                a.Jc(70, "\xa0We use Security Cookies for security purposes."),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(71, "h3"),
                                a.Jc(72, "A2. Use of Data"),
                                a.Vb(),
                                a.Wb(73, "p"),
                                a.Jc(74),
                                a.Vb(),
                                a.Wb(75, "ul"),
                                a.Wb(76, "li"),
                                a.Jc(77, "To provide and maintain the Service"),
                                a.Vb(),
                                a.Wb(78, "li"),
                                a.Jc(79, "To notify you about changes to our Service"),
                                a.Vb(),
                                a.Wb(80, "li"),
                                a.Jc(81, "To allow you to participate in interactive features of our Service when you choose to do so"),
                                a.Vb(),
                                a.Wb(82, "li"),
                                a.Jc(83, "To provide customer care and support"),
                                a.Vb(),
                                a.Wb(84, "li"),
                                a.Jc(85, "To provide analysis or valuable information so that we can improve the Service"),
                                a.Vb(),
                                a.Wb(86, "li"),
                                a.Jc(87, "To monitor the usage of the Service"),
                                a.Vb(),
                                a.Wb(88, "li"),
                                a.Jc(89, "To detect, prevent and address technical issues"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(90, "mat-divider", 5),
                                a.Wb(91, "h2"),
                                a.Jc(92, "B. Transfer Of Data"),
                                a.Vb(),
                                a.Wb(93, "p"),
                                a.Jc(94, "Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."),
                                a.Vb(),
                                a.Wb(95, "p"),
                                a.Jc(96, "If you are located outside Germany and choose to provide information to us, please note that we transfer the data, including Personal Data, to Germany and process it there."),
                                a.Vb(),
                                a.Wb(97, "p"),
                                a.Jc(98, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."),
                                a.Vb(),
                                a.Wb(99, "p"),
                                a.Jc(100),
                                a.Wb(101, "span", 3),
                                a.Jc(102, "reasonably necessary"),
                                a.Vb(),
                                a.Jc(103, " to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."),
                                a.Vb(),
                                a.Rb(104, "mat-divider", 5),
                                a.Wb(105, "h2"),
                                a.Jc(106, "C. Disclosure Of Data"),
                                a.Vb(),
                                a.Wb(107, "h3"),
                                a.Jc(108, "C1. Legal Requirements"),
                                a.Vb(),
                                a.Wb(109, "p"),
                                a.Jc(110),
                                a.Vb(),
                                a.Wb(111, "ul"),
                                a.Wb(112, "li"),
                                a.Jc(113, "To comply with a legal obligation"),
                                a.Vb(),
                                a.Wb(114, "li"),
                                a.Jc(115),
                                a.Vb(),
                                a.Wb(116, "li"),
                                a.Jc(117, "To prevent or investigate possible wrongdoing in connection with the Service"),
                                a.Vb(),
                                a.Wb(118, "li"),
                                a.Jc(119, "To protect the personal safety of users of the Service or the public"),
                                a.Vb(),
                                a.Wb(120, "li"),
                                a.Jc(121, "To protect against legal liability"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(122, "mat-divider", 5),
                                a.Wb(123, "h2"),
                                a.Jc(124, "D. Security Of Data"),
                                a.Vb(),
                                a.Wb(125, "p"),
                                a.Jc(126, "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."),
                                a.Vb(),
                                a.Rb(127, "mat-divider", 5),
                                a.Wb(128, "h2"),
                                a.Jc(129, "E. Service Providers"),
                                a.Vb(),
                                a.Wb(130, "p"),
                                a.Jc(131, 'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'),
                                a.Vb(),
                                a.Wb(132, "p"),
                                a.Jc(133, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."),
                                a.Vb(),
                                a.Rb(134, "mat-divider", 5),
                                a.Wb(135, "h2"),
                                a.Jc(136, "F. Links To Other Sites"),
                                a.Vb(),
                                a.Wb(137, "p"),
                                a.Jc(138, "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."),
                                a.Vb(),
                                a.Wb(139, "p"),
                                a.Jc(140, "We have no control over and assume no "),
                                a.Wb(141, "span", 3),
                                a.Jc(142, "responsibility"),
                                a.Vb(),
                                a.Jc(143, " for the content, privacy policies or practices of any third party sites or services."),
                                a.Vb(),
                                a.Rb(144, "mat-divider", 5),
                                a.Wb(145, "h2"),
                                a.Jc(146, "G. Children's Privacy"),
                                a.Vb(),
                                a.Wb(147, "p"),
                                a.Jc(148, 'Our Service does not address anyone under the age of 18 ("Children").'),
                                a.Vb(),
                                a.Wb(149, "p"),
                                a.Jc(150, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."),
                                a.Vb(),
                                a.Rb(151, "mat-divider", 5),
                                a.Wb(152, "h2"),
                                a.Jc(153, "H. Changes To This Privacy Policy"),
                                a.Vb(),
                                a.Wb(154, "p"),
                                a.Jc(155, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."),
                                a.Vb(),
                                a.Wb(156, "p"),
                                a.Jc(157, 'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'),
                                a.Vb(),
                                a.Wb(158, "p"),
                                a.Jc(159, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."),
                                a.Vb(),
                                a.Rb(160, "mat-divider", 5),
                                a.Wb(161, "h2"),
                                a.Jc(162, "Contact Us"),
                                a.Vb(),
                                a.Wb(163, "p"),
                                a.Jc(164, "If you have any questions about this Privacy Policy, please contact us:"),
                                a.Vb(),
                                a.Wb(165, "ul"),
                                a.Wb(166, "li"),
                                a.Jc(167),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(168, "img", 6),
                                a.Vb()),
                            2 & t && (a.Db(7),
                                a.Lc("", e.applicationName, ' ("us", "we", or "our") operates the '),
                                a.Db(2),
                                a.Kc(e.applicationUrl),
                                a.Db(3),
                                a.Lc("This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for ", e.applicationName, " is created with the help of the "),
                                a.Db(5),
                                a.Lc("We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from ", e.applicationUrl, " ."),
                                a.Db(57),
                                a.Lc("", e.applicationName, " uses the collected data for various purposes:"),
                                a.Db(26),
                                a.Lc("", e.applicationName, " will take all steps "),
                                a.Db(10),
                                a.Lc("", e.applicationName, " may disclose your Personal Data in the good faith belief that such action is necessary to:"),
                                a.Db(5),
                                a.Lc("To protect and defend the rights or property of ", e.applicationName, ""),
                                a.Db(52),
                                a.Lc("By email: ", e.privacyContactEmail, ""))
                        },
                        directives: [f.a, g.a, Me.a],
                        styles: [".privacy-policy[_ngcontent-%COMP%]{margin-left:8.33333%;width:83.3333%}.privacy-policy[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-bottom:15px}p[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;width:90%}h2[_ngcontent-%COMP%]{padding-top:10px}h3[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:550}strong[_ngcontent-%COMP%]{font-style:italic}h4[_ngcontent-%COMP%]{text-decoration:underline}.hot[_ngcontent-%COMP%]:hover{text-shadow:0 0 20px #fefcc9,10px -10px 30px #feec85,-20px -20px 40px #ffae34,20px -40px 50px #ec760c,-20px -60px 60px #cd4606,0 -80px 70px #973716,10px -90px 80px #451b0e}.divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:9%!important;width:82%!important}"]
                    }),
                    t
            }
        )();
        function Xo(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_COUNTRY "),
                a.Vb())
        }
        function $o(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_NAME "),
                a.Vb())
        }
        function Zo(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_NUMBER "),
                a.Vb())
        }
        const tn = function() {
            return {
                range: "1000000-9999999999"
            }
        };
        function en(t, e) {
            1 & t && (a.Wb(0, "mat-error", 18),
                a.Jc(1, "INVALID_MOBILE_NUMBER "),
                a.Vb()),
            2 & t && a.oc("translateParams", a.sc(1, tn))
        }
        function an(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_ZIP "),
                a.Vb())
        }
        function on(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, "MANDATORY_ADDRESS"),
                a.Vb())
        }
        function nn(t, e) {
            1 & t && (a.Wb(0, "mat-error", 2),
                a.Jc(1, " MANDATORY_CITY "),
                a.Vb())
        }
        const rn = function() {
            return {
                length: "160"
            }
        };
        let sn = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r) {
                        this.location = t,
                            this.formSubmitService = e,
                            this.addressService = i,
                            this.router = a,
                            this.activatedRoute = o,
                            this.translate = n,
                            this.snackBarHelperService = r,
                            this.countryControl = new s.c("",[s.x.required]),
                            this.nameControl = new s.c("",[s.x.required]),
                            this.numberControl = new s.c("",[s.x.required, s.x.min(1111111), s.x.max(9999999999)]),
                            this.pinControl = new s.c("",[s.x.required, s.x.maxLength(8)]),
                            this.addressControl = new s.c("",[s.x.required, s.x.maxLength(160)]),
                            this.cityControl = new s.c("",[s.x.required]),
                            this.stateControl = new s.c,
                            this.address = void 0,
                            this.mode = "create",
                            this.addressId = void 0
                    }
                    ngOnInit() {
                        this.address = {},
                            this.activatedRoute.paramMap.subscribe(t=>{
                                    t.has("addressId") ? (this.mode = "edit",
                                        this.addressId = t.get("addressId"),
                                        this.addressService.getById(this.addressId).subscribe(t=>{
                                                this.initializeForm(t)
                                            }
                                        )) : (this.mode = "create",
                                        this.addressId = null)
                                }
                            ),
                            this.formSubmitService.attachEnterKeyHandler("address-form", "submitButton", ()=>this.save())
                    }
                    save() {
                        this.address.country = this.countryControl.value,
                            this.address.fullName = this.nameControl.value,
                            this.address.mobileNum = this.numberControl.value,
                            this.address.zipCode = this.pinControl.value,
                            this.address.streetAddress = this.addressControl.value,
                            this.address.city = this.cityControl.value,
                            this.address.state = this.stateControl.value,
                            "edit" === this.mode ? this.addressService.put(this.addressId, this.address).subscribe(t=>{
                                    this.address = {},
                                        this.ngOnInit(),
                                        this.resetForm(),
                                        this.routeToPreviousUrl(),
                                        this.translate.get("ADDRESS_UPDATED", {
                                            city: t.city
                                        }).subscribe(t=>{
                                                this.snackBarHelperService.open(t, "confirmBar")
                                            }
                                            , t=>{
                                                this.snackBarHelperService.open(t, "confirmBar")
                                            }
                                        )
                                }
                                , t=>{
                                    var e;
                                    this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                        this.address = {},
                                        this.resetForm()
                                }
                            ) : this.addressService.save(this.address).subscribe(t=>{
                                    this.address = {},
                                        this.ngOnInit(),
                                        this.resetForm(),
                                        this.routeToPreviousUrl(),
                                        this.translate.get("ADDRESS_ADDED", {
                                            city: t.city
                                        }).subscribe(t=>{
                                                this.snackBarHelperService.open(t, "confirmBar")
                                            }
                                            , t=>{
                                                this.snackBarHelperService.open(t, "confirmBar")
                                            }
                                        )
                                }
                                , t=>{
                                    var e;
                                    this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                        this.address = {},
                                        this.resetForm()
                                }
                            )
                    }
                    initializeForm(t) {
                        this.countryControl.setValue(t.country),
                            this.nameControl.setValue(t.fullName),
                            this.numberControl.setValue(t.mobileNum),
                            this.pinControl.setValue(t.zipCode),
                            this.addressControl.setValue(t.streetAddress),
                            this.cityControl.setValue(t.city),
                            this.stateControl.setValue(t.state)
                    }
                    routeToPreviousUrl() {
                        this.location.back()
                    }
                    resetForm() {
                        this.countryControl.markAsUntouched(),
                            this.countryControl.markAsPristine(),
                            this.countryControl.setValue(""),
                            this.nameControl.markAsUntouched(),
                            this.nameControl.markAsPristine(),
                            this.nameControl.setValue(""),
                            this.numberControl.markAsUntouched(),
                            this.numberControl.markAsPristine(),
                            this.numberControl.setValue(""),
                            this.pinControl.markAsUntouched(),
                            this.pinControl.markAsPristine(),
                            this.pinControl.setValue(""),
                            this.addressControl.markAsUntouched(),
                            this.addressControl.markAsPristine(),
                            this.addressControl.setValue(""),
                            this.cityControl.markAsUntouched(),
                            this.cityControl.markAsPristine(),
                            this.cityControl.setValue(""),
                            this.stateControl.markAsUntouched(),
                            this.stateControl.markAsPristine(),
                            this.stateControl.setValue("")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(P.g),a.Qb(Lt),a.Qb(fa),a.Qb(S.b),a.Qb(S.a),a.Qb(g.e),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-address-create"]],
                        decls: 69,
                        vars: 49,
                        consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "address-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["pin", ""], ["align", "end"], ["id", "address", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", 3, "formControl", "placeholder"], ["adress", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["mat-stroked-button", "", 1, "btn-return", 3, "click"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], ["translate", "", 3, "translateParams"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "mat-card", 1),
                                a.Wb(2, "h1", 2),
                                a.Jc(3, "ADD_NEW_ADDRESS"),
                                a.Vb(),
                                a.Wb(4, "div", 3),
                                a.Wb(5, "mat-form-field", 4),
                                a.Wb(6, "mat-label", 2),
                                a.Jc(7, "LABEL_COUNTRY"),
                                a.Vb(),
                                a.Rb(8, "input", 5),
                                a.jc(9, "translate"),
                                a.Hc(10, Xo, 2, 0, "mat-error", 6),
                                a.Vb(),
                                a.Wb(11, "mat-form-field", 4),
                                a.Wb(12, "mat-label", 2),
                                a.Jc(13, "LABEL_NAME"),
                                a.Vb(),
                                a.Rb(14, "input", 5),
                                a.jc(15, "translate"),
                                a.Hc(16, $o, 2, 0, "mat-error", 6),
                                a.Vb(),
                                a.Wb(17, "mat-form-field", 4),
                                a.Wb(18, "mat-label", 2),
                                a.Jc(19, "LABEL_MOBILE_NUMBER"),
                                a.Vb(),
                                a.Rb(20, "input", 7),
                                a.jc(21, "translate"),
                                a.Hc(22, Zo, 2, 0, "mat-error", 6),
                                a.Hc(23, en, 2, 2, "mat-error", 8),
                                a.Vb(),
                                a.Wb(24, "mat-form-field", 4),
                                a.Wb(25, "mat-label", 2),
                                a.Jc(26, "LABEL_ZIP_CODE"),
                                a.Vb(),
                                a.Rb(27, "input", 5, 9),
                                a.jc(29, "translate"),
                                a.Wb(30, "mat-hint", 10),
                                a.Jc(31),
                                a.Vb(),
                                a.Hc(32, an, 2, 0, "mat-error", 6),
                                a.Vb(),
                                a.Wb(33, "mat-form-field", 4),
                                a.Wb(34, "mat-label", 2),
                                a.Jc(35, "LABEL_ADDRESS"),
                                a.Vb(),
                                a.Rb(36, "textarea", 11, 12),
                                a.jc(38, "translate"),
                                a.Wb(39, "mat-hint", 2),
                                a.Rb(40, "i", 13),
                                a.Wb(41, "em", 14),
                                a.Jc(42),
                                a.jc(43, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(44, "mat-hint", 10),
                                a.Jc(45),
                                a.Vb(),
                                a.Hc(46, on, 2, 0, "mat-error", 6),
                                a.Vb(),
                                a.Wb(47, "mat-form-field", 4),
                                a.Wb(48, "mat-label", 2),
                                a.Jc(49, "LABEL_CITY"),
                                a.Vb(),
                                a.Rb(50, "input", 5),
                                a.jc(51, "translate"),
                                a.Hc(52, nn, 2, 0, "mat-error", 6),
                                a.Vb(),
                                a.Wb(53, "mat-form-field", 4),
                                a.Wb(54, "mat-label", 2),
                                a.Jc(55, "LABEL_STATE"),
                                a.Vb(),
                                a.Rb(56, "input", 5),
                                a.jc(57, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(58, "div"),
                                a.Wb(59, "button", 15),
                                a.ec("click", (function() {
                                        return e.routeToPreviousUrl()
                                    }
                                )),
                                a.Wb(60, "mat-icon"),
                                a.Jc(61, " navigate_before "),
                                a.Vb(),
                                a.Jc(62),
                                a.jc(63, "translate"),
                                a.Vb(),
                                a.Wb(64, "button", 16),
                                a.ec("click", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Wb(65, "i", 17),
                                a.Jc(66, " send "),
                                a.Vb(),
                                a.Jc(67),
                                a.jc(68, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(28)
                                    , i = a.wc(37);
                                a.Db(8),
                                    a.oc("formControl", e.countryControl)("placeholder", a.kc(9, 27, "MANDATORY_COUNTRY")),
                                    a.Db(2),
                                    a.oc("ngIf", e.countryControl.invalid && e.countryControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.nameControl)("placeholder", a.kc(15, 29, "MANDATORY_NAME")),
                                    a.Db(2),
                                    a.oc("ngIf", e.nameControl.invalid && e.nameControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.numberControl)("placeholder", a.kc(21, 31, "MANDATORY_NUMBER")),
                                    a.Db(2),
                                    a.oc("ngIf", e.numberControl.invalid && e.numberControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.numberControl.invalid && (e.numberControl.errors.min || e.numberControl.errors.max)),
                                    a.Db(4),
                                    a.oc("formControl", e.pinControl)("placeholder", a.kc(29, 33, "MANDATORY_ZIP")),
                                    a.Db(4),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/8"),
                                    a.Db(1),
                                    a.oc("ngIf", e.pinControl.invalid && e.pinControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.addressControl)("placeholder", a.kc(38, 35, "MANDATORY_ADDRESS")),
                                    a.Db(6),
                                    a.Kc(a.lc(43, 37, "MAX_TEXTAREA_LENGTH", a.sc(48, rn))),
                                    a.Db(3),
                                    a.Lc("", (null == i.value ? null : i.value.length) || 0, "/160"),
                                    a.Db(1),
                                    a.oc("ngIf", e.addressControl.invalid && e.addressControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.cityControl)("placeholder", a.kc(51, 40, "MANDATORY_CITY")),
                                    a.Db(2),
                                    a.oc("ngIf", e.cityControl.invalid && e.cityControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.stateControl)("placeholder", a.kc(57, 42, "STATE_PLACEHOLDER")),
                                    a.Db(6),
                                    a.Lc(" ", a.kc(63, 44, "LABEL_BACK"), " "),
                                    a.Db(2),
                                    a.oc("disabled", e.countryControl.invalid || e.nameControl.invalid || e.numberControl.invalid || e.pinControl.invalid || e.addressControl.invalid || e.cityControl.invalid),
                                    a.Db(3),
                                    a.Lc(" ", a.kc(68, 46, "BTN_SUBMIT"), " ")
                            }
                        },
                        directives: [p.c, f.a, g.a, At.c, At.g, Pt.b, s.b, s.n, s.d, P.l, s.s, At.f, Pt.d, s.i, v.a, we.a, At.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}#submitButton[_ngcontent-%COMP%]{float:right}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.btn-return[_ngcontent-%COMP%]{float:left}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
                    }),
                    t
            }
        )()
            , cn = (()=>{
                class t {
                    constructor(t, e) {
                        this.router = t,
                            this.ngZone = e,
                            this.addressId = void 0,
                            this.showNextButton = !0
                    }
                    getMessage(t) {
                        this.addressId = t
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(S.b),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-address-select"]],
                        decls: 2,
                        vars: 1,
                        consts: [["id", "card"], [3, "showNextButton"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Rb(1, "app-address", 1),
                                a.Vb()),
                            2 & t && (a.Db(1),
                                a.oc("showNextButton", e.showNextButton))
                        },
                        directives: [Ja],
                        styles: [".btn-pay[_ngcontent-%COMP%]{display:block;width:100%}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px;margin-top:3px}#card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                    }),
                    t
            }
        )()
            , ln = (()=>{
                class t {
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-saved-address"]],
                        decls: 2,
                        vars: 1,
                        consts: [[1, "main-wrapper"], [3, "allowEdit"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Rb(1, "app-address", 1),
                                a.Vb()),
                            2 & t && (a.Db(1),
                                a.oc("allowEdit", !0))
                        },
                        directives: [Ja],
                        styles: [".main-wrapper[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                    }),
                    t
            }
        )();
        u.b.add(m.b),
            u.a.watch();
        let bn = (()=>{
                class t {
                    constructor(t) {
                        this.dialogData = t
                    }
                    ngOnInit() {
                        this.title = this.dialogData.title,
                            this.url = this.dialogData.url,
                            this.address = this.dialogData.address,
                            this.data = this.dialogData.data
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.a))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-qr-code"]],
                        decls: 17,
                        vars: 11,
                        consts: [[1, "qr-code", "mat-typography"], ["fxLayout", "column", "fxLayoutGap", "10px"], [1, "container"], [3, "href"], [3, "value", "size", "level"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close-dialog"], [1, "fas", "fa-arrow-circle-left", "fa-lg"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "header"),
                                a.Wb(2, "h3"),
                                a.Jc(3),
                                a.jc(4, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(5, "div", 1),
                                a.Rb(6, "mat-divider"),
                                a.Wb(7, "div", 2),
                                a.Wb(8, "a", 3),
                                a.Rb(9, "qr-code", 4),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(10, "small"),
                                a.Jc(11),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(12, "footer"),
                                a.Wb(13, "button", 5),
                                a.Rb(14, "i", 6),
                                a.Jc(15),
                                a.jc(16, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(3),
                                a.Kc(a.kc(4, 7, e.title)),
                                a.Db(5),
                                a.oc("href", e.url, a.Cc),
                                a.Db(1),
                                a.oc("value", e.data)("size", 300)("level", "M"),
                                a.Db(2),
                                a.Kc(e.address),
                                a.Db(4),
                                a.Lc(" ", a.kc(16, 9, "BTN_CLOSE"), ""))
                        },
                        directives: [p.d, p.e, Me.a, Jo.a, v.a, Ae.d],
                        pipes: [g.d],
                        styles: [""]
                    }),
                    t
            }
        )()
            , un = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/wallet/balance"
                    }
                    get() {
                        return this.http.get(this.host).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    put(t) {
                        return this.http.put(this.host, t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )()
            , dn = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Deliverys"
                    }
                    get() {
                        return this.http.get(this.host).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    getById(t) {
                        return this.http.get(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )()
            , mn = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/api/Cards"
                    }
                    get() {
                        return this.http.get(this.host).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    getById(t) {
                        return this.http.get(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    save(t) {
                        return this.http.post(this.host + "/", t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    del(t) {
                        return this.http.delete(this.host + "/" + t).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function hn(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 33)
        }
        function pn(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 33),
                    a.Wb(1, "mat-radio-button", 34),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).emitSelectionToParent(i.id)
                        }
                    )),
                    a.Vb(),
                    a.Vb()
            }
        }
        function fn(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 35)
        }
        function gn(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 35),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.cardNum, " ")
            }
        }
        function vn(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 36)
        }
        function Cn(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 36),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Kc(t.fullName)
            }
        }
        function wn(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 37)
        }
        function yn(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 37),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Mc("", t.expMonth, "/", t.expYear, "")
            }
        }
        function Dn(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 33)
        }
        function Sn(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 33),
                    a.Wb(1, "button", 38),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).delete(i.id)
                        }
                    )),
                    a.Rb(2, "i", 39),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Wn(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Vn(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function xn(t, e) {
            if (1 & t && (a.Wb(0, "div"),
                a.Wb(1, "mat-table", 17),
                a.Ub(2, 18),
                a.Hc(3, hn, 1, 0, "mat-header-cell", 19),
                a.Hc(4, pn, 2, 0, "mat-cell", 20),
                a.Tb(),
                a.Ub(5, 21),
                a.Hc(6, fn, 1, 0, "mat-header-cell", 22),
                a.Hc(7, gn, 2, 1, "mat-cell", 23),
                a.Tb(),
                a.Ub(8, 24),
                a.Hc(9, vn, 1, 0, "mat-header-cell", 25),
                a.Hc(10, Cn, 2, 1, "mat-cell", 26),
                a.Tb(),
                a.Ub(11, 27),
                a.Hc(12, wn, 1, 0, "mat-header-cell", 28),
                a.Hc(13, yn, 2, 2, "mat-cell", 29),
                a.Tb(),
                a.Ub(14, 30),
                a.Hc(15, Dn, 1, 0, "mat-header-cell", 19),
                a.Hc(16, Sn, 3, 0, "mat-cell", 20),
                a.Tb(),
                a.Hc(17, Wn, 1, 0, "mat-header-row", 31),
                a.Hc(18, Vn, 1, 0, "mat-row", 32),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("dataSource", t.dataSource),
                    a.Db(16),
                    a.oc("matHeaderRowDef", t.displayedColumns),
                    a.Db(1),
                    a.oc("matRowDefColumns", t.displayedColumns)
            }
        }
        function In(t, e) {
            1 & t && (a.Wb(0, "mat-error", 5),
                a.Jc(1, " MANDATORY_NAME "),
                a.Vb())
        }
        function _n(t, e) {
            1 & t && (a.Wb(0, "mat-error", 5),
                a.Jc(1, " MANDATORY_CARD_NUMBER "),
                a.Vb())
        }
        function kn(t, e) {
            1 & t && (a.Wb(0, "mat-error", 5),
                a.Jc(1, " VALID_CARD_NUMBER "),
                a.Vb())
        }
        function On(t, e) {
            if (1 & t && (a.Wb(0, "option", 40),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.pc("value", t),
                    a.Db(1),
                    a.Kc(t)
            }
        }
        function Tn(t, e) {
            1 & t && (a.Wb(0, "mat-error", 5),
                a.Jc(1, " MANDATORY_EXPIRY_MONTH "),
                a.Vb())
        }
        function Ln(t, e) {
            if (1 & t && (a.Wb(0, "option", 40),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.pc("value", t),
                    a.Db(1),
                    a.Kc(t)
            }
        }
        function An(t, e) {
            1 & t && (a.Wb(0, "mat-error", 5),
                a.Jc(1, " MANDATORY_EXPIRY_YEAR "),
                a.Vb())
        }
        u.b.add(m.D, h.g),
            u.a.watch();
        let Pn = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.paymentService = t,
                            this.translate = e,
                            this.snackBarHelperService = i,
                            this.emitSelection = new a.o,
                            this.allowDelete = !1,
                            this.displayedColumns = ["Number", "Name", "Expiry"],
                            this.nameControl = new s.c("",[s.x.required]),
                            this.numberControl = new s.c("",[s.x.required, s.x.min(1e15), s.x.max(1e16)]),
                            this.monthControl = new s.c("",[s.x.required]),
                            this.yearControl = new s.c("",[s.x.required]),
                            this.card = {},
                            this.cardsExist = !1,
                            this.paymentId = void 0
                    }
                    ngOnInit() {
                        this.monthRange = Array.from(Array(12).keys()).map(t=>t + 1),
                            this.yearRange = Array.from(Array(20).keys()).map(t=>t + 2080),
                            this.allowDelete ? this.displayedColumns.push("Remove") : this.displayedColumns.unshift("Selection"),
                            this.load()
                    }
                    load() {
                        this.paymentService.get().subscribe(t=>{
                                t.map(t=>{
                                        t.cardNum = "************" + String(t.cardNum).substring(String(t.cardNum).length - 4)
                                    }
                                ),
                                    this.cardsExist = t.length,
                                    this.storedCards = t,
                                    this.dataSource = new A.o(this.storedCards)
                            }
                            , t=>console.log(t))
                    }
                    save() {
                        this.card.fullName = this.nameControl.value,
                            this.card.cardNum = this.numberControl.value,
                            this.card.expMonth = this.monthControl.value,
                            this.card.expYear = this.yearControl.value,
                            this.paymentService.save(this.card).subscribe(t=>{
                                    this.error = null,
                                        this.translate.get("CREDIT_CARD_SAVED", {
                                            cardnumber: String(t.cardNum).substring(String(t.cardNum).length - 4)
                                        }).subscribe(t=>{
                                                this.snackBarHelperService.open(t, "confirmBar")
                                            }
                                            , t=>{
                                                this.snackBarHelperService.open(t, "confirmBar")
                                            }
                                        ),
                                        this.load(),
                                        this.resetForm()
                                }
                                , t=>{
                                    var e;
                                    this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                        this.resetForm()
                                }
                            )
                    }
                    delete(t) {
                        this.paymentService.del(t).subscribe(()=>{
                                this.load()
                            }
                            , t=>console.log(t))
                    }
                    emitSelectionToParent(t) {
                        this.emitSelection.emit(t)
                    }
                    resetForm() {
                        this.nameControl.markAsUntouched(),
                            this.nameControl.markAsPristine(),
                            this.nameControl.setValue(""),
                            this.numberControl.markAsUntouched(),
                            this.numberControl.markAsPristine(),
                            this.numberControl.setValue(""),
                            this.monthControl.markAsUntouched(),
                            this.monthControl.markAsPristine(),
                            this.monthControl.setValue(""),
                            this.yearControl.markAsUntouched(),
                            this.yearControl.markAsPristine(),
                            this.yearControl.setValue("")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(mn),a.Qb(g.e),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-payment-method"]],
                        inputs: {
                            allowDelete: "allowDelete"
                        },
                        outputs: {
                            emitSelection: "emitSelection"
                        },
                        decls: 46,
                        vars: 26,
                        consts: [["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngIf"], [1, "mat-elevation-z0"], [2, "margin-bottom", "12px"], ["appearance", "outline", "color", "accent"], ["translate", ""], ["type", "text", "matInput", "", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl"], ["cardIn", ""], ["align", "end"], ["appearance", "outline", "color", "accent", 2, "width", "45%", "margin-right", "10%"], ["matNativeControl", "", "required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "color", "accent", 2, "width", "45%"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "material-icons"], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Number"], ["fxFlex", "35%", 4, "matHeaderCellDef"], ["fxFlex", "35%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Expiry"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["fxFlex", "15%"], [3, "click"], ["fxFlex", "35%"], ["fxFlex", "30%"], ["fxFlex", "20%"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "value"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "h1"),
                                a.Jc(2),
                                a.jc(3, "translate"),
                                a.Vb(),
                                a.Hc(4, xn, 19, 3, "div", 1),
                                a.Wb(5, "div"),
                                a.Wb(6, "mat-expansion-panel", 2),
                                a.Wb(7, "mat-expansion-panel-header", 3),
                                a.Wb(8, "mat-panel-title"),
                                a.Jc(9),
                                a.jc(10, "translate"),
                                a.Vb(),
                                a.Wb(11, "mat-panel-description"),
                                a.Jc(12),
                                a.jc(13, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(14, "div"),
                                a.Wb(15, "mat-form-field", 4),
                                a.Wb(16, "mat-label", 5),
                                a.Jc(17, "LABEL_NAME"),
                                a.Vb(),
                                a.Rb(18, "input", 6),
                                a.Hc(19, In, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Wb(20, "mat-form-field", 4),
                                a.Wb(21, "mat-label", 5),
                                a.Jc(22, "LABEL_CARD_NUMBER"),
                                a.Vb(),
                                a.Rb(23, "input", 8, 9),
                                a.Wb(25, "mat-hint", 10),
                                a.Jc(26),
                                a.Vb(),
                                a.Hc(27, _n, 2, 0, "mat-error", 7),
                                a.Hc(28, kn, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Wb(29, "mat-form-field", 11),
                                a.Wb(30, "mat-label", 5),
                                a.Jc(31, "LABEL_EXPIRY_MONTH"),
                                a.Vb(),
                                a.Wb(32, "select", 12),
                                a.Hc(33, On, 2, 2, "option", 13),
                                a.Vb(),
                                a.Hc(34, Tn, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Wb(35, "mat-form-field", 14),
                                a.Wb(36, "mat-label", 5),
                                a.Jc(37, "LABEL_EXPIRY_YEAR"),
                                a.Vb(),
                                a.Wb(38, "select", 12),
                                a.Hc(39, Ln, 2, 2, "option", 13),
                                a.Vb(),
                                a.Hc(40, An, 2, 0, "mat-error", 7),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(41, "button", 15),
                                a.ec("click", (function() {
                                        return e.save()
                                    }
                                )),
                                a.Wb(42, "i", 16),
                                a.Jc(43, " send "),
                                a.Vb(),
                                a.Jc(44),
                                a.jc(45, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(24);
                                a.Db(2),
                                    a.Kc(a.kc(3, 18, "MY_PAYMENT_OPTIONS")),
                                    a.Db(2),
                                    a.oc("ngIf", e.cardsExist),
                                    a.Db(5),
                                    a.Lc(" ", a.kc(10, 20, "ADD_NEW_CARD"), " "),
                                    a.Db(3),
                                    a.Lc(" ", a.kc(13, 22, "ADD_NEW_CARD_DESCRIPTION"), " "),
                                    a.Db(6),
                                    a.oc("formControl", e.nameControl),
                                    a.Db(1),
                                    a.oc("ngIf", e.nameControl.invalid && e.nameControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.numberControl),
                                    a.Db(3),
                                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/16"),
                                    a.Db(1),
                                    a.oc("ngIf", e.numberControl.invalid && e.numberControl.errors.required),
                                    a.Db(1),
                                    a.oc("ngIf", e.numberControl.invalid && (e.numberControl.errors.min || e.numberControl.errors.max)),
                                    a.Db(4),
                                    a.oc("formControl", e.monthControl),
                                    a.Db(1),
                                    a.oc("ngForOf", e.monthRange),
                                    a.Db(1),
                                    a.oc("ngIf", e.monthControl.invalid && e.monthControl.errors.required),
                                    a.Db(4),
                                    a.oc("formControl", e.yearControl),
                                    a.Db(1),
                                    a.oc("ngForOf", e.yearRange),
                                    a.Db(1),
                                    a.oc("ngIf", e.yearControl.invalid && e.yearControl.errors.required),
                                    a.Db(1),
                                    a.oc("disabled", e.nameControl.invalid || e.numberControl.invalid || e.monthControl.invalid || e.yearControl.invalid),
                                    a.Db(3),
                                    a.Lc(" ", a.kc(45, 24, "BTN_SUBMIT"), " ")
                            }
                        },
                        directives: [p.d, p.e, P.l, Je.b, Je.d, Je.e, Je.c, At.c, At.g, g.a, Pt.b, s.b, s.n, s.d, s.s, At.f, s.w, s.v, P.k, v.a, A.n, A.c, A.i, A.b, A.k, A.m, A.h, p.b, A.a, va.a, A.j, A.l, At.b, s.r, s.y],
                        pipes: [g.d],
                        styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
                    }),
                    t
            }
        )();
        function En(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "div", 11),
                    a.Wb(1, "div", 12),
                    a.Wb(2, "div", 13),
                    a.Wb(3, "span", 14),
                    a.Jc(4, "LABEL_PAY_USING_WALLET"),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(5, "div", 15),
                    a.Wb(6, "b"),
                    a.Wb(7, "span", 14),
                    a.Jc(8, "LABEL_WALLET_BALANCE"),
                    a.Vb(),
                    a.Wb(9, "span", 16),
                    a.Jc(10),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(11, "div", 17),
                    a.Wb(12, "button", 18),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().useWallet()
                        }
                    )),
                    a.Rb(13, "i", 19),
                    a.Jc(14),
                    a.jc(15, "translate"),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(10),
                    a.Lc(" ", t.walletBalanceStr, ""),
                    a.Db(2),
                    a.oc("disabled", t.walletBalance - t.totalPrice < 0),
                    a.Db(2),
                    a.Mc(" ", a.kc(15, 4, "LABEL_PAY"), " ", null == t.totalPrice ? null : t.totalPrice.toFixed(2), "\xa4 ")
            }
        }
        function Rn(t, e) {
            if (1 & t && (a.Wb(0, "div", 31),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.Db(1),
                    a.Lc("", t.couponConfirmation, " ")
            }
        }
        function Mn(t, e) {
            if (1 & t && (a.Wb(0, "div", 32),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.Db(1),
                    a.Lc("", null == t.couponError ? null : t.couponError.error, " ")
            }
        }
        function Jn(t, e) {
            1 & t && (a.Wb(0, "mat-error"),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t && (a.Db(1),
                a.Lc(" ", a.kc(2, 1, "COUPON_CODE_HINT"), " "))
        }
        const Hn = function(t, e) {
            return {
                twitter: t,
                facebook: e
            }
        };
        function Nn(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-expansion-panel", 20),
                    a.Wb(1, "mat-expansion-panel-header", 21),
                    a.Wb(2, "mat-panel-title"),
                    a.Jc(3),
                    a.jc(4, "translate"),
                    a.Vb(),
                    a.Wb(5, "mat-panel-description"),
                    a.Jc(6),
                    a.jc(7, "translate"),
                    a.Vb(),
                    a.Vb(),
                    a.Hc(8, Rn, 2, 1, "div", 22),
                    a.Hc(9, Mn, 2, 1, "div", 23),
                    a.Wb(10, "mat-form-field", 24),
                    a.Wb(11, "mat-label", 8),
                    a.Jc(12, "LABEL_COUPON"),
                    a.Vb(),
                    a.Rb(13, "mat-hint", 25),
                    a.jc(14, "translate"),
                    a.Rb(15, "input", 26, 27),
                    a.jc(17, "translate"),
                    a.Wb(18, "mat-hint", 28),
                    a.Jc(19),
                    a.Vb(),
                    a.Hc(20, Jn, 3, 3, "mat-error", 29),
                    a.Vb(),
                    a.Wb(21, "button", 30),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().applyCoupon()
                        }
                    )),
                    a.Wb(22, "mat-icon"),
                    a.Jc(23, " redeem "),
                    a.Vb(),
                    a.Jc(24),
                    a.jc(25, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.wc(16)
                    , e = a.ic();
                a.oc("expanded", e.couponPanelExpanded),
                    a.Db(3),
                    a.Lc(" ", a.kc(4, 12, "ADD_A_COUPON"), " "),
                    a.Db(3),
                    a.Lc(" ", a.kc(7, 14, "VOUCHERS_AND_PROMOTIONAL_CODE"), " "),
                    a.Db(2),
                    a.oc("ngIf", e.couponConfirmation && !e.couponControl.dirty),
                    a.Db(1),
                    a.oc("ngIf", e.couponError && !e.couponControl.dirty),
                    a.Db(4),
                    a.oc("innerHtml", a.lc(14, 16, "FOLLOW_FOR_MONTHLY_COUPONS", a.uc(23, Hn, e.twitterUrl, e.facebookUrl)), a.Ac),
                    a.Db(2),
                    a.pc("placeholder", a.kc(17, 19, "ENTER_COUPON_CODE")),
                    a.oc("formControl", e.couponControl),
                    a.Db(4),
                    a.Lc("", (null == t.value ? null : t.value.length) || 0, "/10"),
                    a.Db(1),
                    a.oc("ngIf", e.couponControl.invalid && (e.couponControl.errors.minlength || e.couponControl.errors.maxlength)),
                    a.Db(1),
                    a.oc("disabled", e.couponControl.invalid),
                    a.Db(3),
                    a.Lc(" ", a.kc(25, 21, "BTN_REDEEM"), " ")
            }
        }
        const Fn = function() {
            return {
                juiceshop: "OWASP Juice Shop"
            }
        };
        function Bn(t, e) {
            1 & t && (a.Wb(0, "span", 54),
                a.Jc(1, "THANKS_FOR_SUPPORT"),
                a.Vb()),
            2 & t && a.oc("translateParams", a.sc(1, Fn))
        }
        const Un = function(t) {
            return {
                appname: t
            }
        };
        function jn(t, e) {
            if (1 & t && (a.Wb(0, "span", 54),
                a.Jc(1, "THANKS_FOR_SUPPORT_CUSTOMIZED"),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.oc("translateParams", a.tc(1, Un, t.applicationName))
            }
        }
        function Qn(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 55),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic(2).showBitcoinQrCode()
                        }
                    )),
                    a.Rb(1, "i", 56),
                    a.Jc(2, " Bitcoin "),
                    a.Vb()
            }
        }
        function zn(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 55),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic(2).showDashQrCode()
                        }
                    )),
                    a.Wb(1, "i", 57),
                    a.Jc(2, "\xd0"),
                    a.Vb(),
                    a.Jc(3, " Dash"),
                    a.Vb()
            }
        }
        function Gn(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 55),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic(2).showEtherQrCode()
                        }
                    )),
                    a.Rb(1, "i", 58),
                    a.Jc(2, " Ether "),
                    a.Vb()
            }
        }
        function qn(t, e) {
            1 & t && (a.Wb(0, "span", 54),
                a.Jc(1, "OFFICIAL_MERCHANDISE_STORES"),
                a.Vb()),
            2 & t && a.oc("translateParams", a.sc(1, Fn))
        }
        function Yn(t, e) {
            if (1 & t && (a.Wb(0, "span", 54),
                a.Jc(1, "OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED"),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.oc("translateParams", a.tc(1, Un, t.applicationName))
            }
        }
        function Kn(t, e) {
            if (1 & t && (a.Wb(0, "mat-expansion-panel", 33),
                a.Wb(1, "mat-expansion-panel-header", 21),
                a.Wb(2, "mat-panel-title"),
                a.Jc(3),
                a.jc(4, "translate"),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "div", 34),
                a.Wb(6, "div", 35),
                a.Wb(7, "div", 36),
                a.Wb(8, "label", 8),
                a.Jc(9, "LABEL_DONATIONS"),
                a.Vb(),
                a.Vb(),
                a.Wb(10, "small"),
                a.Jc(11, " ("),
                a.Hc(12, Bn, 2, 2, "span", 37),
                a.Hc(13, jn, 2, 3, "span", 37),
                a.Rb(14, "i", 38),
                a.Jc(15, ") "),
                a.Vb(),
                a.Wb(16, "div", 39),
                a.Wb(17, "a", 40),
                a.Wb(18, "button", 41),
                a.Rb(19, "i", 42),
                a.Jc(20),
                a.jc(21, "translate"),
                a.Vb(),
                a.Vb(),
                a.Hc(22, Qn, 3, 0, "button", 43),
                a.Hc(23, zn, 4, 0, "button", 43),
                a.Hc(24, Gn, 3, 0, "button", 43),
                a.Vb(),
                a.Vb(),
                a.Rb(25, "span", 44),
                a.Wb(26, "div", 45),
                a.Wb(27, "div", 36),
                a.Wb(28, "label", 8),
                a.Jc(29, "LABEL_MERCHANDISE"),
                a.Vb(),
                a.Vb(),
                a.Wb(30, "small"),
                a.Jc(31, " ("),
                a.Hc(32, qn, 2, 2, "span", 37),
                a.Hc(33, Yn, 2, 3, "span", 37),
                a.Rb(34, "i", 46),
                a.Jc(35, ") "),
                a.Vb(),
                a.Wb(36, "div", 39),
                a.Wb(37, "a", 47),
                a.Wb(38, "button", 41),
                a.Rb(39, "i", 48),
                a.Jc(40, " Spreadshirt (US)"),
                a.Vb(),
                a.Vb(),
                a.Wb(41, "a", 49),
                a.Wb(42, "button", 41),
                a.Rb(43, "i", 48),
                a.Jc(44, " Spreadshirt (DE)"),
                a.Vb(),
                a.Vb(),
                a.Wb(45, "a", 50),
                a.Wb(46, "button", 41),
                a.Rb(47, "i", 51),
                a.Jc(48, " StickerYou"),
                a.Vb(),
                a.Vb(),
                a.Wb(49, "a", 52),
                a.Wb(50, "button", 41),
                a.Rb(51, "i", 53),
                a.Jc(52, " Leanpub"),
                a.Vb(),
                a.Vb(),
                a.Vb(),
                a.Vb(),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.oc("expanded", t.paymentPanelExpanded),
                    a.Db(3),
                    a.Lc(" ", a.kc(4, 10, "OTHER_PAYMENT_OPTIONS"), " "),
                    a.Db(9),
                    a.oc("ngIf", "OWASP Juice Shop" === t.applicationName),
                    a.Db(1),
                    a.oc("ngIf", "OWASP Juice Shop" !== t.applicationName),
                    a.Db(7),
                    a.Lc(" ", a.kc(21, 12, "BTN_CREDIT_CARD"), ""),
                    a.Db(2),
                    a.oc("ngIf", !1),
                    a.Db(1),
                    a.oc("ngIf", !1),
                    a.Db(1),
                    a.oc("ngIf", !1),
                    a.Db(8),
                    a.oc("ngIf", "OWASP Juice Shop" === t.applicationName),
                    a.Db(1),
                    a.oc("ngIf", "OWASP Juice Shop" !== t.applicationName)
            }
        }
        function Xn(t, e) {
            1 & t && (a.Wb(0, "span", 8),
                a.Jc(1, "REVIEW_ALERT"),
                a.Vb())
        }
        function $n(t, e) {
            1 & t && (a.Wb(0, "span", 8),
                a.Jc(1, "REVIEW_WALLET"),
                a.Vb())
        }
        u.b.add(m.d, m.r, m.w, d.g, m.W, m.db, m.P, m.u, m.h, m.X, d.j),
            u.a.watch();
        let Zn = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r, c, l, b, u, d, m) {
                        this.location = t,
                            this.cookieService = e,
                            this.userService = i,
                            this.deliveryService = a,
                            this.walletService = o,
                            this.router = n,
                            this.dialog = r,
                            this.configurationService = c,
                            this.basketService = l,
                            this.translate = b,
                            this.activatedRoute = u,
                            this.ngZone = d,
                            this.snackBarHelperService = m,
                            this.card = {},
                            this.twitterUrl = null,
                            this.facebookUrl = null,
                            this.applicationName = "OWASP Juice Shop",
                            this.couponControl = new s.c("",[s.x.required, s.x.minLength(10), s.x.maxLength(10)]),
                            this.paymentId = void 0,
                            this.couponPanelExpanded = !1,
                            this.paymentPanelExpanded = !1,
                            this.walletBalance = 0,
                            this.totalPrice = 0,
                            this.paymentMode = "card",
                            this.campaigns = {
                                WMNSDY2019: {
                                    validOn: 15519996e5,
                                    discount: 75
                                },
                                WMNSDY2020: {
                                    validOn: 1583622e6,
                                    discount: 60
                                },
                                WMNSDY2021: {
                                    validOn: 1615158e6,
                                    discount: 60
                                },
                                WMNSDY2022: {
                                    validOn: 1646694e6,
                                    discount: 60
                                },
                                WMNSDY2023: {
                                    validOn: 167823e7,
                                    discount: 60
                                },
                                ORANGE2020: {
                                    validOn: 15885468e5,
                                    discount: 50
                                },
                                ORANGE2021: {
                                    validOn: 16200828e5,
                                    discount: 40
                                },
                                ORANGE2022: {
                                    validOn: 16516188e5,
                                    discount: 40
                                },
                                ORANGE2023: {
                                    validOn: 16831548e5,
                                    discount: 40
                                }
                            }
                    }
                    ngOnInit() {
                        this.initTotal(),
                            this.walletService.get().subscribe(t=>{
                                    this.walletBalance = t,
                                        this.walletBalanceStr = parseFloat(t).toFixed(2)
                                }
                                , t=>console.log(t)),
                            this.couponPanelExpanded = !!localStorage.getItem("couponPanelExpanded") && JSON.parse(localStorage.getItem("couponPanelExpanded")),
                            this.paymentPanelExpanded = !!localStorage.getItem("paymentPanelExpanded") && JSON.parse(localStorage.getItem("paymentPanelExpanded")),
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    t && t.application && t.application.social && (t.application.social.twitterUrl && (this.twitterUrl = t.application.social.twitterUrl),
                                    t.application.social.facebookUrl && (this.facebookUrl = t.application.social.facebookUrl),
                                    t.application.name && (this.applicationName = t.application.name))
                                }
                                , t=>console.log(t))
                    }
                    initTotal() {
                        this.activatedRoute.paramMap.subscribe(t=>{
                                if (this.mode = t.get("entity"),
                                "wallet" === this.mode)
                                    this.totalPrice = parseFloat(sessionStorage.getItem("walletTotal"));
                                else if ("deluxe" === this.mode)
                                    this.userService.deluxeStatus().subscribe(t=>{
                                            this.totalPrice = t.membershipCost
                                        }
                                        , t=>console.log(t));
                                else {
                                    const t = parseFloat(sessionStorage.getItem("itemTotal"))
                                        , e = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * t : 0;
                                    this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(i=>{
                                            this.totalPrice = t + i.price - e
                                        }
                                    )
                                }
                            }
                            , t=>console.log(t))
                    }
                    applyCoupon() {
                        this.campaignCoupon = this.couponControl.value,
                            this.clientDate = new Date;
                        const t = 60 * (this.clientDate.getTimezoneOffset() + 60) * 1e3;
                        this.clientDate.setHours(0, 0, 0, 0),
                            this.clientDate = this.clientDate.getTime() - t,
                            sessionStorage.setItem("couponDetails", this.campaignCoupon + "-" + this.clientDate);
                        const e = this.campaigns[this.couponControl.value];
                        e ? this.clientDate === e.validOn ? this.showConfirmation(e.discount) : (this.couponConfirmation = void 0,
                            this.translate.get("INVALID_COUPON").subscribe(t=>{
                                    this.couponError = {
                                        error: t
                                    }
                                }
                                , t=>{
                                    this.couponError = {
                                        error: t
                                    }
                                }
                            ),
                            this.resetCouponForm()) : this.basketService.applyCoupon(Number(sessionStorage.getItem("bid")), encodeURIComponent(this.couponControl.value)).subscribe(t=>{
                                this.showConfirmation(t)
                            }
                            , t=>{
                                this.couponConfirmation = void 0,
                                    this.couponError = t,
                                    this.resetCouponForm()
                            }
                        )
                    }
                    showConfirmation(t) {
                        this.resetCouponForm(),
                            this.couponError = void 0,
                            sessionStorage.setItem("couponDiscount", t),
                            this.translate.get("DISCOUNT_APPLIED", {
                                discount: t
                            }).subscribe(t=>{
                                    this.couponConfirmation = t
                                }
                                , t=>{
                                    this.couponConfirmation = t
                                }
                            ),
                            this.initTotal()
                    }
                    getMessage(t) {
                        this.paymentId = t,
                            this.paymentMode = "card"
                    }
                    routeToPreviousUrl() {
                        this.location.back()
                    }
                    choosePayment() {
                        sessionStorage.removeItem("itemTotal"),
                            "wallet" === this.mode ? this.walletService.put({
                                balance: this.totalPrice
                            }).subscribe(()=>{
                                    sessionStorage.removeItem("walletTotal"),
                                        this.ngZone.run(()=>this.router.navigate(["/wallet"])),
                                        this.snackBarHelperService.open("CHARGED_WALLET", "confirmBar")
                                }
                                , t=>{
                                    var e;
                                    console.log(t),
                                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar")
                                }
                            ) : "deluxe" === this.mode ? this.userService.upgradeToDeluxe(this.paymentMode).subscribe(t=>{
                                    localStorage.setItem("token", t.token),
                                        this.cookieService.set("token", t.token),
                                        this.ngZone.run(()=>this.router.navigate(["/deluxe-membership"]))
                                }
                                , t=>console.log(t)) : ("wallet" === this.paymentMode ? sessionStorage.setItem("paymentId", "wallet") : sessionStorage.setItem("paymentId", this.paymentId),
                                this.ngZone.run(()=>this.router.navigate(["/order-summary"])))
                    }
                    noop() {}
                    showBitcoinQrCode() {
                        this.dialog.open(bn, {
                            data: {
                                data: "bitcoin:1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                                url: "./redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                                address: "1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                                title: "TITLE_BITCOIN_ADDRESS"
                            }
                        })
                    }
                    showDashQrCode() {
                        this.dialog.open(bn, {
                            data: {
                                data: "dash:Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                                url: "./redirect?to=https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                                address: "Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                                title: "TITLE_DASH_ADDRESS"
                            }
                        })
                    }
                    showEtherQrCode() {
                        this.dialog.open(bn, {
                            data: {
                                data: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                                url: "./redirect?to=https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6",
                                address: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                                title: "TITLE_ETHER_ADDRESS"
                            }
                        })
                    }
                    useWallet() {
                        this.paymentMode = "wallet",
                            this.choosePayment()
                    }
                    resetCouponForm() {
                        this.couponControl.setValue(""),
                            this.couponControl.markAsPristine(),
                            this.couponControl.markAsUntouched()
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(P.g),a.Qb(r.a),a.Qb(D),a.Qb(dn),a.Qb(un),a.Qb(S.b),a.Qb(Ae.b),a.Qb(b),a.Qb(V),a.Qb(g.e),a.Qb(S.a),a.Qb(a.A),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-payment"]],
                        decls: 24,
                        vars: 10,
                        consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete", "emitSelection"], ["class", "mat-elevation-z0", "class", "custom-card", 4, "ngIf"], ["class", "mat-elevation-z0", "id", "collapseCouponElement", 3, "expanded", 4, "ngIf"], ["class", "mat-elevation-z0", 3, "expanded", 4, "ngIf"], [2, "margin-top", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to review", 1, "btn", "nextButton", 3, "disabled", "click"], ["translate", ""], [2, "text-align", "center", "margin-top", "-27px"], ["translate", "", 4, "ngIf"], [1, "custom-card"], ["fxLayout", "row"], ["fxFlex", "42%"], ["translate", "", 1, "card-title"], ["fxFlex", "38%"], [1, "confirmation", "card-title"], ["fxFlex", "20%"], ["type", "submit", "color", "primary", "mat-raised-button", "", 1, "btn", 2, "float", "right", 3, "disabled", "click"], [1, "fas", "fa-hand-holding-usd", "fa-lg"], ["id", "collapseCouponElement", 1, "mat-elevation-z0", 3, "expanded"], [1, "detail-divider"], ["style", "margin-top:5px;", "class", "confirmation", 4, "ngIf"], ["style", "margin-top:5px;", "class", "error", 4, "ngIf"], ["appearance", "outline", "color", "accent"], [3, "innerHtml"], ["id", "coupon", "matInput", "", "type", "text", 3, "formControl", "placeholder"], ["coupon", ""], ["align", "end"], [4, "ngIf"], ["type", "submit", "id", "applyCouponButton", "color", "accent", "mat-raised-button", "", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "confirmation", 2, "margin-top", "5px"], [1, "error", 2, "margin-top", "5px"], [1, "mat-elevation-z0", 3, "expanded"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "34%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "payment-label"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "fas", "fa-heart", "error", 2, "margin-left", "3px"], [1, "button-container", 2, "margin-top", "6px"], ["href", "https://pwning.owasp-juice.shop/part3/donations.html"], ["mat-stroked-button", ""], [1, "fab", "fa-stripe", "fa-lg"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "65%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "fas", "fa-thumbs-up", "confirmation", 2, "margin-left", "3px"], ["href", "./redirect?to=http://shop.spreadshirt.com/juiceshop"], [1, "fas", "fa-tshirt", "fa-lg"], ["href", "./redirect?to=http://shop.spreadshirt.de/juiceshop"], ["href", "./redirect?to=https://www.stickeryou.com/products/owasp-juice-shop/794"], [1, "fas", "fa-sticky-note", "fa-lg"], ["href", "./redirect?to=http://leanpub.com/juice-shop"], [1, "fab", "fa-leanpub", "fa-lg"], ["translate", "", 3, "translateParams"], ["mat-stroked-button", "", 3, "click"], [1, "fab", "fa-btc", "fa-lg"], [1, "fa-lg"], [1, "fab", "fa-ethereum", "fa-lg"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "div"),
                                a.Wb(2, "app-payment-method", 1),
                                a.ec("emitSelection", (function(t) {
                                        return e.getMessage(t)
                                    }
                                )),
                                a.Vb(),
                                a.Rb(3, "mat-divider"),
                                a.Hc(4, En, 16, 6, "div", 2),
                                a.Rb(5, "mat-divider"),
                                a.Hc(6, Nn, 26, 26, "mat-expansion-panel", 3),
                                a.Rb(7, "mat-divider"),
                                a.Hc(8, Kn, 53, 14, "mat-expansion-panel", 4),
                                a.Rb(9, "mat-divider"),
                                a.Wb(10, "div", 5),
                                a.Wb(11, "button", 6),
                                a.ec("click", (function() {
                                        return e.routeToPreviousUrl()
                                    }
                                )),
                                a.Wb(12, "mat-icon"),
                                a.Jc(13, " navigate_before "),
                                a.Vb(),
                                a.Jc(14),
                                a.jc(15, "translate"),
                                a.Vb(),
                                a.Wb(16, "button", 7),
                                a.ec("click", (function() {
                                        return e.choosePayment()
                                    }
                                )),
                                a.Wb(17, "mat-icon"),
                                a.Jc(18, " navigate_next "),
                                a.Vb(),
                                a.Wb(19, "span", 8),
                                a.Jc(20, "LABEL_CONTINUE"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(21, "p", 9),
                                a.Hc(22, Xn, 2, 0, "span", 10),
                                a.Hc(23, $n, 2, 0, "span", 10),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(2),
                                a.oc("allowDelete", !1),
                                a.Db(2),
                                a.oc("ngIf", "wallet" !== e.mode),
                                a.Db(2),
                                a.oc("ngIf", "wallet" !== e.mode),
                                a.Db(2),
                                a.oc("ngIf", "wallet" !== e.mode),
                                a.Db(6),
                                a.Lc(" ", a.kc(15, 8, "LABEL_BACK"), " "),
                                a.Db(2),
                                a.oc("disabled", void 0 === e.paymentId && "wallet" !== e.paymentMode),
                                a.Db(6),
                                a.oc("ngIf", "deluxe" !== e.mode && "wallet" !== e.mode),
                                a.Db(1),
                                a.oc("ngIf", "wallet" === e.mode))
                        },
                        directives: [f.a, Pn, Me.a, P.l, v.a, we.a, g.a, p.d, p.b, Je.b, Je.d, Je.e, Je.c, At.c, At.g, At.f, Pt.b, s.b, s.n, s.d, At.b],
                        pipes: [g.d],
                        styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.btn-return[_ngcontent-%COMP%]{margin-left:0;margin-right:auto;display:block}.nextButton[_ngcontent-%COMP%]{margin-right:0;margin-left:auto;display:block;margin-top:-37px}mat-card[_ngcontent-%COMP%]{height:auto}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px}.custom-card[_ngcontent-%COMP%]{padding:18px 24px}.card-title[_ngcontent-%COMP%]{font-size:15px;line-height:36px;vertical-align:middle}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}"]
                    }),
                    t
            }
        )()
            , tr = (()=>{
                class t {
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-saved-payment-methods"]],
                        decls: 2,
                        vars: 1,
                        consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Rb(1, "app-payment-method", 1),
                                a.Vb()),
                            2 & t && (a.Db(1),
                                a.oc("allowDelete", !0))
                        },
                        directives: [f.a, Pn],
                        styles: [".mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
                    }),
                    t
            }
        )()
            , er = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/order-history"
                    }
                    get() {
                        return this.http.get(this.host).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    getAll() {
                        return this.http.get(this.host + "/orders").pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                    toggleDeliveryStatus(t, e) {
                        return this.http.put(this.host + "/" + t + "/delivery-status", e).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        const ir = ["paginatorOrderHistory"]
            , ar = ["paginator"];
        function or(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 31)
        }
        function nr(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 20),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.orderId, "")
            }
        }
        function rr(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 32)
        }
        function sr(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 33),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", null == t.totalPrice ? null : t.totalPrice.toFixed(2), "\xa4")
            }
        }
        function cr(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 34)
        }
        function lr(t, e) {
            1 & t && (a.Wb(0, "div", 38),
                a.Jc(1, "LABEL_IN_TRANSIT"),
                a.Vb())
        }
        function br(t, e) {
            1 & t && (a.Wb(0, "div", 39),
                a.Jc(1, "LABEL_DELIVERED"),
                a.Vb())
        }
        function ur(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 35),
                a.Hc(1, lr, 2, 0, "div", 36),
                a.Hc(2, br, 2, 0, "div", 37),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("ngIf", !t.delivered),
                    a.Db(1),
                    a.oc("ngIf", t.delivered)
            }
        }
        function dr(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 33)
        }
        function mr(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 41),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic().$implicit;
                            return a.ic().changeDeliveryStatus(e.delivered, e.id)
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Wb(2, "mat-icon"),
                    a.Jc(3, " cached "),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && a.pc("matTooltip", a.kc(1, 1, "LABEL_MARK_AS_TRANSIT"))
        }
        function hr(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 41),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic().$implicit;
                            return a.ic().changeDeliveryStatus(e.delivered, e.id)
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Wb(2, "mat-icon"),
                    a.Jc(3, " check_circle "),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && a.pc("matTooltip", a.kc(1, 1, "LABEL_MARK_AS_DELIVERED"))
        }
        function pr(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 33),
                a.Hc(1, mr, 4, 3, "button", 40),
                a.Hc(2, hr, 4, 3, "button", 40),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("ngIf", t.delivered),
                    a.Db(1),
                    a.oc("ngIf", !t.delivered)
            }
        }
        function fr(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function gr(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function vr(t, e) {
            if (1 & t && (a.Wb(0, "div", 42),
                a.Wb(1, "p", 43),
                a.Jc(2),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(2),
                    a.Kc(t.confirmation)
            }
        }
        function Cr(t, e) {
            if (1 & t && (a.Wb(0, "div", 42),
                a.Wb(1, "p", 44),
                a.Jc(2),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(2),
                    a.Kc(null == t.error ? null : t.error.error)
            }
        }
        function wr(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 45)
        }
        function yr(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 46),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc(" ", t.name, "")
            }
        }
        function Dr(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 47)
        }
        function Sr(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 48),
                    a.Wb(1, "mat-form-field", 49),
                    a.Rb(2, "input", 50, 51),
                    a.Wb(4, "button", 52),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit
                                , o = a.wc(3);
                            return a.ic().modifyPrice(i.id, o.value)
                        }
                    )),
                    a.Rb(5, "i", 53),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit;
                a.Db(2),
                    a.pc("value", t.price)
            }
        }
        function Wr(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 54)
        }
        function Vr(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 48),
                    a.Wb(1, "mat-form-field", 49),
                    a.Rb(2, "input", 50, 55),
                    a.Wb(4, "button", 52),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit
                                , o = a.wc(3)
                                , n = a.ic();
                            return n.modifyQuantity(n.quantityMap[i.id].id, o.value)
                        }
                    )),
                    a.Rb(5, "i", 53),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic();
                a.Db(2),
                    a.pc("value", i.quantityMap[t.id].quantity)
            }
        }
        function xr(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Ir(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        const _r = function() {
            return [10, 20, 30]
        };
        u.b.add(m.f),
            u.a.watch();
        let kr = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.productService = t,
                            this.quantityService = e,
                            this.orderHistoryService = i,
                            this.orderHistoryColumns = ["OrderId", "Price", "Status", "StatusButton"],
                            this.displayedColumns = ["Product", "Price", "Quantity"],
                            this.confirmation = void 0,
                            this.error = void 0
                    }
                    ngAfterViewInit() {
                        this.loadQuantity(),
                            this.loadProducts(),
                            this.loadOrders()
                    }
                    loadQuantity() {
                        this.quantitySubscription = this.quantityService.getAll().subscribe(t=>{
                                this.quantityMap = {},
                                    t.map(t=>{
                                            this.quantityMap[t.ProductId] = {
                                                id: t.id,
                                                quantity: t.quantity
                                            }
                                        }
                                    )
                            }
                            , t=>{
                                this.error = t.error,
                                    this.confirmation = null,
                                    console.log(t)
                            }
                        )
                    }
                    loadProducts() {
                        this.productSubscription = this.productService.search("").subscribe(t=>{
                                this.tableData = t,
                                    this.dataSource = new A.o(this.tableData),
                                    this.dataSource.paginator = this.paginator
                            }
                            , t=>console.log(t))
                    }
                    loadOrders() {
                        this.orderHistoryService.getAll().subscribe(t=>{
                                this.orderData = [];
                                for (const e of t)
                                    this.orderData.push({
                                        id: e._id,
                                        orderId: e.orderId,
                                        totalPrice: e.totalPrice,
                                        delivered: e.delivered
                                    });
                                this.orderSource = new A.o(this.orderData),
                                    this.orderSource.paginator = this.paginatorOrderHistory
                            }
                            , t=>console.log(t))
                    }
                    ngOnDestroy() {
                        this.productSubscription && this.productSubscription.unsubscribe(),
                        this.quantitySubscription && this.quantitySubscription.unsubscribe()
                    }
                    modifyQuantity(t, e) {
                        this.error = null,
                            this.quantityService.put(t, {
                                quantity: e < 0 ? 0 : e
                            }).subscribe(t=>{
                                    const e = this.tableData.find(e=>e.id === t.ProductId);
                                    this.confirmation = "Quantity for " + e.name + " has been updated.",
                                        this.loadQuantity()
                                }
                                , t=>{
                                    this.error = t.error,
                                        this.confirmation = null,
                                        console.log(t)
                                }
                            )
                    }
                    modifyPrice(t, e) {
                        this.error = null,
                            this.productService.put(t, {
                                price: e < 0 ? 0 : e
                            }).subscribe(t=>{
                                    this.confirmation = "Price for " + t.name + " has been updated.",
                                        this.loadProducts()
                                }
                                , t=>{
                                    this.error = t.error,
                                        this.confirmation = null,
                                        console.log(t)
                                }
                            )
                    }
                    changeDeliveryStatus(t, e) {
                        this.orderHistoryService.toggleDeliveryStatus(e, {
                            deliveryStatus: t
                        }).subscribe(()=>{
                                this.loadOrders()
                            }
                            , t=>console.log(t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Qe),a.Qb(Ke),a.Qb(er))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-accounting"]],
                        viewQuery: function(t, e) {
                            var i;
                            1 & t && (a.Fc(ir, !0),
                                a.Fc(ar, !0)),
                            2 & t && (a.vc(i = a.fc()) && (e.paginatorOrderHistory = i.first),
                            a.vc(i = a.fc()) && (e.paginator = i.first))
                        },
                        decls: 49,
                        vars: 20,
                        consts: [["fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "20px", 1, "main-wrapper"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "50%"], [1, "table-container", "custom-slate", "mat-elevation-z6"], [1, "heading"], [3, "dataSource"], ["matColumnDef", "OrderId"], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Status"], ["translate", "LABEL_STATUS", "fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "StatusButton"], ["fxFlex", "15%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "mat-elevation-z6", 3, "pageSize", "pageSizeOptions"], ["paginatorOrderHistory", ""], ["fxFlex", "50%"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center"], ["style", "margin-top:5px;", 4, "ngIf"], ["matColumnDef", "Product"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matCellDef"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matCellDef"], ["matColumnDef", "Quantity"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["paginator", ""], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "15%"], ["fxFlex", "15%"], ["translate", "LABEL_STATUS", "fxFlex", "20%"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [2, "margin-top", "5px"], [1, "confirmation"], [1, "error"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%"], ["fxFlex", "50%", "fxFlex.lt-md", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["fxFlex", "25%", "fxFlex.lt-md", "25%"], [1, "input-field"], ["matInput", "", "type", "number", 3, "value"], ["price", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "fas", "fa-check"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["quanitity", ""]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "div", 1),
                                a.Wb(2, "div", 2),
                                a.Wb(3, "div", 3),
                                a.Wb(4, "div"),
                                a.Jc(5),
                                a.jc(6, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(7, "mat-table", 4),
                                a.Ub(8, 5),
                                a.Hc(9, or, 1, 0, "mat-header-cell", 6),
                                a.Hc(10, nr, 2, 1, "mat-cell", 7),
                                a.Tb(),
                                a.Ub(11, 8),
                                a.Hc(12, rr, 1, 0, "mat-header-cell", 9),
                                a.Hc(13, sr, 2, 1, "mat-cell", 10),
                                a.Tb(),
                                a.Ub(14, 11),
                                a.Hc(15, cr, 1, 0, "mat-header-cell", 12),
                                a.Hc(16, ur, 3, 2, "mat-cell", 13),
                                a.Tb(),
                                a.Ub(17, 14),
                                a.Hc(18, dr, 1, 0, "mat-header-cell", 15),
                                a.Hc(19, pr, 3, 2, "mat-cell", 10),
                                a.Tb(),
                                a.Hc(20, fr, 1, 0, "mat-header-row", 16),
                                a.Hc(21, gr, 1, 0, "mat-row", 17),
                                a.Vb(),
                                a.Rb(22, "mat-divider"),
                                a.Rb(23, "mat-paginator", 18, 19),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(25, "div", 20),
                                a.Wb(26, "div", 21),
                                a.Wb(27, "div", 2),
                                a.Wb(28, "div", 3),
                                a.Wb(29, "div"),
                                a.Jc(30),
                                a.jc(31, "translate"),
                                a.Vb(),
                                a.Hc(32, vr, 3, 1, "div", 22),
                                a.Hc(33, Cr, 3, 1, "div", 22),
                                a.Vb(),
                                a.Wb(34, "mat-table", 4),
                                a.Ub(35, 23),
                                a.Hc(36, wr, 1, 0, "mat-header-cell", 24),
                                a.Hc(37, yr, 2, 1, "mat-cell", 25),
                                a.Tb(),
                                a.Ub(38, 8),
                                a.Hc(39, Dr, 1, 0, "mat-header-cell", 26),
                                a.Hc(40, Sr, 6, 1, "mat-cell", 27),
                                a.Tb(),
                                a.Ub(41, 28),
                                a.Hc(42, Wr, 1, 0, "mat-header-cell", 29),
                                a.Hc(43, Vr, 6, 1, "mat-cell", 27),
                                a.Tb(),
                                a.Hc(44, xr, 1, 0, "mat-header-row", 16),
                                a.Hc(45, Ir, 1, 0, "mat-row", 17),
                                a.Vb(),
                                a.Rb(46, "mat-divider"),
                                a.Rb(47, "mat-paginator", 18, 30),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(5),
                                a.Kc(a.kc(6, 14, "TITLE_TRACK_ORDERS")),
                                a.Db(2),
                                a.oc("dataSource", e.orderSource),
                                a.Db(13),
                                a.oc("matHeaderRowDef", e.orderHistoryColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.orderHistoryColumns),
                                a.Db(2),
                                a.oc("pageSize", 10)("pageSizeOptions", a.sc(18, _r)),
                                a.Db(7),
                                a.Kc(a.kc(31, 16, "TITLE_ALL_PRODUCTS")),
                                a.Db(2),
                                a.oc("ngIf", e.confirmation),
                                a.Db(1),
                                a.oc("ngIf", e.error),
                                a.Db(1),
                                a.oc("dataSource", e.dataSource),
                                a.Db(10),
                                a.oc("matHeaderRowDef", e.displayedColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.displayedColumns),
                                a.Db(2),
                                a.oc("pageSize", 10)("pageSizeOptions", a.sc(19, _r)))
                        },
                        directives: [p.d, p.e, p.b, A.n, A.c, A.i, A.b, A.k, A.m, Me.a, ze.a, p.c, P.l, A.h, g.a, A.a, v.a, ye.a, we.a, A.j, A.l, At.c, Pt.b, At.h],
                        pipes: [g.d],
                        styles: [".table-container[_ngcontent-%COMP%]{min-width:350px}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.product[_ngcontent-%COMP%]{cursor:pointer}.input-field[_ngcontent-%COMP%]{width:80px}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}"]
                    }),
                    t
            }
        )();
        const Or = function(t) {
            return {
                numberdays: t
            }
        };
        function Tr(t, e) {
            if (1 & t && (a.Wb(0, "span"),
                a.Wb(1, "div", 30),
                a.Jc(2, "ESTIMATED_TIME_OF_DELIVERY"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.Db(1),
                    a.oc("translateParams", a.tc(1, Or, t.orderDetails.eta))
            }
        }
        function Lr(t, e) {
            if (1 & t && (a.Wb(0, "div"),
                a.Hc(1, Tr, 3, 3, "span", 7),
                a.Wb(2, "div"),
                a.Wb(3, "b", 4),
                a.Jc(4, "LABEL_DELIVERY_ADDRESS"),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "div"),
                a.Jc(6),
                a.Vb(),
                a.Wb(7, "div"),
                a.Jc(8),
                a.Vb(),
                a.Wb(9, "div"),
                a.Jc(10),
                a.Vb(),
                a.Wb(11, "div"),
                a.Wb(12, "span", 4),
                a.Jc(13, "PHONE_NUMBER"),
                a.Vb(),
                a.Jc(14),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("ngIf", "?" !== t.orderDetails.eta && void 0 !== t.orderDetails.eta),
                    a.Db(5),
                    a.Kc(null == t.address ? null : t.address.fullName),
                    a.Db(2),
                    a.Nc("", null == t.address ? null : t.address.streetAddress, ", ", null == t.address ? null : t.address.city, ", ", null == t.address ? null : t.address.state, ", ", null == t.address ? null : t.address.zipCode, ""),
                    a.Db(2),
                    a.Kc(null == t.address ? null : t.address.country),
                    a.Db(4),
                    a.Lc(" ", null == t.address ? null : t.address.mobileNum, "")
            }
        }
        function Ar(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 4),
                a.Jc(1, "LABEL_PRODUCT"),
                a.Vb())
        }
        function Pr(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell"),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.name, " ")
            }
        }
        function Er(t, e) {
            1 & t && a.Rb(0, "mat-footer-cell")
        }
        function Rr(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 4),
                a.Jc(1, "LABEL_PRICE"),
                a.Vb())
        }
        function Mr(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell"),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.price, "\xa4")
            }
        }
        function Jr(t, e) {
            1 & t && a.Rb(0, "mat-footer-cell")
        }
        function Hr(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 4),
                a.Jc(1, "LABEL_QUANTITY"),
                a.Vb())
        }
        function Nr(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell"),
                a.Wb(1, "span"),
                a.Jc(2),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(2),
                    a.Kc(t.quantity)
            }
        }
        function Fr(t, e) {
            1 & t && (a.Wb(0, "mat-footer-cell"),
                a.Wb(1, "table", 31),
                a.Wb(2, "tr", 32),
                a.Wb(3, "td", 4),
                a.Jc(4, "ITEMS"),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "tr", 32),
                a.Wb(6, "td", 4),
                a.Jc(7, "DELIVERY"),
                a.Vb(),
                a.Vb(),
                a.Wb(8, "tr", 32),
                a.Wb(9, "td", 4),
                a.Jc(10, "PROMOTION"),
                a.Vb(),
                a.Vb(),
                a.Wb(11, "tr", 33),
                a.Wb(12, "td", 4),
                a.Jc(13, "LABEL_TOTAL_PRICE"),
                a.Vb(),
                a.Vb(),
                a.Vb(),
                a.Vb())
        }
        function Br(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 4),
                a.Jc(1, "LABEL_TOTAL_PRICE"),
                a.Vb())
        }
        function Ur(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 34),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.total.toFixed(2), "\xa4")
            }
        }
        function jr(t, e) {
            if (1 & t && (a.Wb(0, "mat-footer-cell"),
                a.Wb(1, "table", 34),
                a.Wb(2, "tr", 32),
                a.Wb(3, "td"),
                a.Jc(4),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "tr", 32),
                a.Wb(6, "td"),
                a.Jc(7),
                a.Vb(),
                a.Vb(),
                a.Wb(8, "tr", 32),
                a.Wb(9, "td"),
                a.Jc(10),
                a.Vb(),
                a.Vb(),
                a.Wb(11, "tr", 33),
                a.Wb(12, "td"),
                a.Jc(13),
                a.Vb(),
                a.Vb(),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Lc("", null == t.orderDetails.itemTotal ? null : t.orderDetails.itemTotal.toFixed(2), "\xa4"),
                    a.Db(3),
                    a.Lc("", t.deliveryPrice.toFixed(2), "\xa4"),
                    a.Db(3),
                    a.Lc("", t.promotionalDiscount.toFixed(2), "\xa4"),
                    a.Db(3),
                    a.Lc("", null == t.orderDetails.totalPrice ? null : t.orderDetails.totalPrice.toFixed(2), "\xa4")
            }
        }
        function Qr(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function zr(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function Gr(t, e) {
            1 & t && a.Rb(0, "mat-footer-row", 35)
        }
        const qr = function(t) {
            return {
                id: t
            }
        }
            , Yr = function(t) {
            return {
                bonus: t
            }
        };
        u.b.add(d.k),
            u.a.watch();
        let Kr = (()=>{
                class t {
                    constructor(t, e, i, a, o) {
                        this.configurationService = t,
                            this.addressService = e,
                            this.trackOrderService = i,
                            this.activatedRoute = a,
                            this.basketService = o,
                            this.tableColumns = ["product", "price", "quantity", "total price"],
                            this.orderDetails = {
                                totalPrice: 0
                            },
                            this.deliveryPrice = 0,
                            this.promotionalDiscount = 0,
                            this.tweetText = "I just purchased",
                            this.truncateTweet = (t,e=140)=>{
                                if (!t)
                                    return null;
                                const i = t.length > e;
                                return `${t.substring(0, e)}${i ? "..." : ""}`
                            }
                    }
                    ngOnInit() {
                        this.activatedRoute.paramMap.subscribe(t=>{
                                this.orderId = t.get("id"),
                                    this.trackOrderService.save(this.orderId).subscribe(t=>{
                                            this.promotionalDiscount = t.data[0].promotionalAmount ? parseFloat(t.data[0].promotionalAmount) : 0,
                                                this.deliveryPrice = t.data[0].deliveryPrice ? parseFloat(t.data[0].deliveryPrice) : 0,
                                                this.orderDetails.addressId = t.data[0].addressId,
                                                this.orderDetails.paymentId = t.data[0].paymentId,
                                                this.orderDetails.totalPrice = t.data[0].totalPrice,
                                                this.orderDetails.itemTotal = t.data[0].totalPrice + this.promotionalDiscount - this.deliveryPrice,
                                                this.orderDetails.eta = t.data[0].eta || "?",
                                                this.orderDetails.products = t.data[0].products,
                                                this.orderDetails.bonus = t.data[0].bonus,
                                                this.dataSource = new A.o(this.orderDetails.products);
                                            for (const e of this.orderDetails.products)
                                                this.tweetText += "%0a- " + e.name;
                                            this.tweetText = this.truncateTweet(this.tweetText),
                                                this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                                        t && t.application && t.application.social && (this.tweetText += "%0afrom ",
                                                            this.tweetText += t.application.social.twitterUrl ? t.application.social.twitterUrl.replace("https://twitter.com/", "@") : t.application.name)
                                                    }
                                                    , t=>console.log(t)),
                                                this.addressService.getById(this.orderDetails.addressId).subscribe(t=>{
                                                        this.address = t
                                                    }
                                                    , t=>console.log(t))
                                        }
                                        , t=>console.log(t))
                            }
                            , t=>console.log(t))
                    }
                    openConfirmationPDF() {
                        window.open(this.basketService.hostServer + "/ftp/order_" + this.orderId + ".pdf", "_blank")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(b),a.Qb(fa),a.Qb(ct),a.Qb(S.a),a.Qb(V))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-order-completion"]],
                        decls: 51,
                        vars: 18,
                        consts: [[1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["translate", "", 1, "confirmation"], ["translate", ""], ["routerLink", "/track-result/new", "translate", "", 3, "queryParams"], ["fxFlex", "40%", 1, "mat-elevation-z0"], [4, "ngIf"], [1, "mat-elevation-z0", "table-container"], [1, "heading"], [1, "heading-text"], ["fxFlex", ""], [3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "mat-elevation-z0"], ["translate", "", 3, "translateParams"], ["translate", "", 1, "confirmation", 3, "translateParams"], [1, "mat-table"], [1, "mat-row"], [1, "mat-row", 2, "font-weight", "bold"], [1, "price-align"], ["mat-footer-row", ""]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "div"),
                                a.Wb(2, "div", 1),
                                a.Wb(3, "mat-card", 2),
                                a.Wb(4, "div"),
                                a.Wb(5, "h1", 3),
                                a.Jc(6, "THANKS_FOR_PURCHASE"),
                                a.Vb(),
                                a.Wb(7, "div", 4),
                                a.Jc(8, "PURCHASE_COMMENT_PREFIX "),
                                a.Wb(9, "a", 5),
                                a.Jc(10, "TITLE_TRACK_ORDERS"),
                                a.Vb(),
                                a.Jc(11, " PURCHASE_COMMENT_SUFFIX"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(12, "mat-card", 6),
                                a.Hc(13, Lr, 15, 8, "div", 7),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(14, "div", 8),
                                a.Wb(15, "div", 9),
                                a.Wb(16, "span", 10),
                                a.Jc(17),
                                a.jc(18, "translate"),
                                a.Vb(),
                                a.Rb(19, "span", 11),
                                a.Wb(20, "a", 12),
                                a.Wb(21, "button", 13),
                                a.Rb(22, "i", 14),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(23, "button", 15),
                                a.ec("click", (function() {
                                        return e.openConfirmationPDF()
                                    }
                                )),
                                a.jc(24, "translate"),
                                a.Wb(25, "mat-icon"),
                                a.Jc(26, " note "),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(27, "mat-table", 16),
                                a.Ub(28, 17),
                                a.Hc(29, Ar, 2, 0, "mat-header-cell", 18),
                                a.Hc(30, Pr, 2, 1, "mat-cell", 19),
                                a.Hc(31, Er, 1, 0, "mat-footer-cell", 20),
                                a.Tb(),
                                a.Ub(32, 21),
                                a.Hc(33, Rr, 2, 0, "mat-header-cell", 18),
                                a.Hc(34, Mr, 2, 1, "mat-cell", 19),
                                a.Hc(35, Jr, 1, 0, "mat-footer-cell", 20),
                                a.Tb(),
                                a.Ub(36, 22),
                                a.Hc(37, Hr, 2, 0, "mat-header-cell", 18),
                                a.Hc(38, Nr, 3, 1, "mat-cell", 19),
                                a.Hc(39, Fr, 14, 0, "mat-footer-cell", 20),
                                a.Tb(),
                                a.Ub(40, 23),
                                a.Hc(41, Br, 2, 0, "mat-header-cell", 18),
                                a.Hc(42, Ur, 2, 1, "mat-cell", 24),
                                a.Hc(43, jr, 14, 4, "mat-footer-cell", 20),
                                a.Tb(),
                                a.Hc(44, Qr, 1, 0, "mat-header-row", 25),
                                a.Hc(45, zr, 1, 0, "mat-row", 26),
                                a.Hc(46, Gr, 1, 0, "mat-footer-row", 27),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(47, "div"),
                                a.Wb(48, "mat-card", 28),
                                a.Wb(49, "div", 29),
                                a.Jc(50, "BONUS_POINTS_COUNT"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(9),
                                a.oc("queryParams", a.tc(14, qr, e.orderId)),
                                a.Db(4),
                                a.oc("ngIf", e.address),
                                a.Db(4),
                                a.Kc(a.kc(18, 10, "ORDER_SUMMARY")),
                                a.Db(3),
                                a.qc("href", "https://twitter.com/intent/tweet?text=", e.tweetText, "&hashtags=security", a.Cc),
                                a.Db(3),
                                a.pc("matTooltip", a.kc(24, 12, "PRINT_ORDER_CONFIRMATION")),
                                a.Db(4),
                                a.oc("dataSource", e.dataSource),
                                a.Db(17),
                                a.oc("matHeaderRowDef", e.tableColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.tableColumns),
                                a.Db(1),
                                a.oc("matFooterRowDef", e.tableColumns),
                                a.Db(3),
                                a.oc("translateParams", a.tc(16, Yr, e.orderDetails.bonus)))
                        },
                        directives: [f.a, p.d, p.b, g.a, S.d, P.l, v.a, ye.a, we.a, A.n, A.c, A.i, A.b, A.e, A.k, A.m, A.g, A.h, A.a, A.d, A.j, A.l, A.f],
                        pipes: [g.d],
                        styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
                    }),
                    t
            }
        )();
        function Xr(t, e) {
            if (1 & t && (a.Wb(0, "mat-card", 20),
                a.Wb(1, "div"),
                a.Wb(2, "div"),
                a.Wb(3, "b", 14),
                a.Jc(4, "PAYMENT_METHOD"),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "div"),
                a.Wb(6, "span", 14),
                a.Jc(7, "CARD_ENDING_IN"),
                a.Vb(),
                a.Jc(8),
                a.Vb(),
                a.Wb(9, "div"),
                a.Wb(10, "span", 14),
                a.Jc(11, "CARD_HOLDER"),
                a.Vb(),
                a.Jc(12),
                a.Vb(),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.Db(8),
                    a.Lc(" ", null == t.paymentMethod ? null : t.paymentMethod.cardNum, ""),
                    a.Db(4),
                    a.Lc(" ", null == t.paymentMethod ? null : t.paymentMethod.fullName, "")
            }
        }
        function $r(t, e) {
            1 & t && (a.Wb(0, "mat-card", 20),
                a.Wb(1, "div"),
                a.Wb(2, "div"),
                a.Wb(3, "b", 14),
                a.Jc(4, "PAYMENT_METHOD"),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "div"),
                a.Wb(6, "span", 14),
                a.Jc(7, "DIGITAL_WALLET"),
                a.Vb(),
                a.Vb(),
                a.Vb(),
                a.Vb())
        }
        function Zr(t, e) {
            if (1 & t && (a.Wb(0, "div", 16),
                a.Wb(1, "mat-card", 17),
                a.Wb(2, "div"),
                a.Wb(3, "div"),
                a.Wb(4, "b", 14),
                a.Jc(5, "LABEL_DELIVERY_ADDRESS"),
                a.Vb(),
                a.Vb(),
                a.Wb(6, "div"),
                a.Jc(7),
                a.Vb(),
                a.Wb(8, "div"),
                a.Jc(9),
                a.Vb(),
                a.Wb(10, "div"),
                a.Jc(11),
                a.Vb(),
                a.Wb(12, "div"),
                a.Wb(13, "span", 14),
                a.Jc(14, "PHONE_NUMBER"),
                a.Vb(),
                a.Jc(15),
                a.Vb(),
                a.Vb(),
                a.Vb(),
                a.Hc(16, Xr, 13, 2, "mat-card", 18),
                a.Hc(17, $r, 8, 0, "ng-template", null, 19, a.Ic),
                a.Vb()),
            2 & t) {
                const t = a.wc(18)
                    , e = a.ic();
                a.Db(7),
                    a.Kc(null == e.address ? null : e.address.fullName),
                    a.Db(2),
                    a.Nc("", null == e.address ? null : e.address.streetAddress, ", ", null == e.address ? null : e.address.city, ", ", null == e.address ? null : e.address.state, ", ", null == e.address ? null : e.address.zipCode, ""),
                    a.Db(2),
                    a.Kc(null == e.address ? null : e.address.country),
                    a.Db(4),
                    a.Lc(" ", null == e.address ? null : e.address.mobileNum, ""),
                    a.Db(1),
                    a.oc("ngIf", "wallet" !== e.paymentMethod)("ngIfElse", t)
            }
        }
        const ts = function(t) {
            return {
                bonus: t
            }
        };
        let es = (()=>{
                class t {
                    constructor(t, e, i, a, o, n) {
                        this.router = t,
                            this.addressService = e,
                            this.paymentService = i,
                            this.basketService = a,
                            this.deliveryService = o,
                            this.ngZone = n,
                            this.bonus = 0,
                            this.itemTotal = 0,
                            this.deliveryPrice = 0,
                            this.promotionalDiscount = 0
                    }
                    ngOnInit() {
                        this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(t=>{
                                this.deliveryPrice = t.price
                            }
                        ),
                            this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(t=>{
                                    this.address = t
                                }
                                , t=>console.log(t)),
                            "wallet" !== sessionStorage.getItem("paymentId") ? this.paymentService.getById(sessionStorage.getItem("paymentId")).subscribe(t=>{
                                    t.cardNum = String(t.cardNum).substring(String(t.cardNum).length - 4),
                                        this.paymentMethod = t
                                }
                                , t=>console.log(t)) : "wallet" === sessionStorage.getItem("paymentId") && (this.paymentMethod = "wallet")
                    }
                    getMessage(t) {
                        this.itemTotal = t[0],
                            this.promotionalDiscount = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * this.itemTotal : 0,
                            this.bonus = t[1]
                    }
                    placeOrder() {
                        const t = {
                            paymentId: sessionStorage.getItem("paymentId"),
                            addressId: sessionStorage.getItem("addressId"),
                            deliveryMethodId: sessionStorage.getItem("deliveryMethodId")
                        };
                        this.basketService.checkout(Number(sessionStorage.getItem("bid")), btoa(sessionStorage.getItem("couponDetails")), t).subscribe(t=>{
                                sessionStorage.removeItem("paymentId"),
                                    sessionStorage.removeItem("addressId"),
                                    sessionStorage.removeItem("deliveryMethodId"),
                                    sessionStorage.removeItem("couponDetails"),
                                    sessionStorage.removeItem("couponDiscount"),
                                    this.basketService.updateNumberOfCardItems(),
                                    this.ngZone.run(()=>this.router.navigate(["/order-completion", t]))
                            }
                            , t=>console.log(t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(S.b),a.Qb(fa),a.Qb(mn),a.Qb(V),a.Qb(dn),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-order-summary"]],
                        decls: 36,
                        vars: 10,
                        consts: [["fxLayout", "row", "fxLayoutGap", "10%", "fxLayout.lt-md", "column", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "70%"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column", 4, "ngIf"], [3, "allowEdit", "totalPrice", "emitTotal"], ["fxFlex", "40%"], [1, "mat-elevation-z0"], ["translate", "", 1, "order-summary"], [1, "mat-table"], [1, "mat-row"], ["translate", "", 1, "mat-cell", "label"], [1, "mat-cell", "price"], ["translate", "", 1, "mat-footer-cell", "label"], [1, "mat-footer-cell", "price"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Complete your purchase", "id", "checkoutButton", 1, "btn", "btn-pay", 3, "click"], ["translate", ""], ["translate", "", 1, "bonus-points", 3, "translateParams"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["class", "mat-elevation-z0", "fxFlex", "40%", 4, "ngIf", "ngIfElse"], ["walletPayment", ""], ["fxFlex", "40%", 1, "mat-elevation-z0"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "div", 1),
                                a.Hc(2, Zr, 19, 9, "div", 2),
                                a.Wb(3, "app-purchase-basket", 3),
                                a.ec("emitTotal", (function(t) {
                                        return e.getMessage(t)
                                    }
                                )),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(4, "div", 4),
                                a.Wb(5, "mat-card", 5),
                                a.Wb(6, "div", 6),
                                a.Jc(7, "ORDER_SUMMARY"),
                                a.Vb(),
                                a.Wb(8, "table", 7),
                                a.Wb(9, "tr", 8),
                                a.Wb(10, "td", 9),
                                a.Jc(11, "ITEMS"),
                                a.Vb(),
                                a.Wb(12, "td", 10),
                                a.Jc(13),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(14, "tr", 8),
                                a.Wb(15, "td", 9),
                                a.Jc(16, "DELIVERY"),
                                a.Vb(),
                                a.Wb(17, "td", 10),
                                a.Jc(18),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(19, "tr", 8),
                                a.Wb(20, "td", 9),
                                a.Jc(21, "PROMOTION"),
                                a.Vb(),
                                a.Wb(22, "td", 10),
                                a.Jc(23),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(24, "tr", 8),
                                a.Wb(25, "td", 11),
                                a.Jc(26, "LABEL_TOTAL_PRICE"),
                                a.Vb(),
                                a.Wb(27, "td", 12),
                                a.Jc(28),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(29, "button", 13),
                                a.ec("click", (function() {
                                        return e.placeOrder()
                                    }
                                )),
                                a.Wb(30, "mat-icon"),
                                a.Jc(31, " monetization_on "),
                                a.Vb(),
                                a.Wb(32, "span", 14),
                                a.Jc(33, "PLACE_ORDER_AND_PAY"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(34, "div", 15),
                                a.Jc(35, "CHECKOUT_FOR_BONUS_POINTS"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(2),
                                a.oc("ngIf", e.address && e.paymentMethod),
                                a.Db(1),
                                a.oc("allowEdit", !1)("totalPrice", !1),
                                a.Db(10),
                                a.Lc("", null == e.itemTotal ? null : e.itemTotal.toFixed(2), "\xa4"),
                                a.Db(5),
                                a.Lc("", e.deliveryPrice.toFixed(2), "\xa4"),
                                a.Db(5),
                                a.Lc("", e.promotionalDiscount.toFixed(2), "\xa4"),
                                a.Db(5),
                                a.Lc("", e.itemTotal + e.deliveryPrice - e.promotionalDiscount == null ? null : (e.itemTotal + e.deliveryPrice - e.promotionalDiscount).toFixed(2), "\xa4 "),
                                a.Db(6),
                                a.oc("translateParams", a.tc(8, ts, e.bonus)))
                        },
                        directives: [f.a, p.d, p.e, p.b, P.l, nt, g.a, v.a, we.a],
                        styles: [".btn-pay[_ngcontent-%COMP%]{display:block;margin-top:10px;width:100%}mat-card[_ngcontent-%COMP%]{height:auto;margin-top:20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price[_ngcontent-%COMP%]:last-of-type{padding-right:10px;text-align:right}.label[_ngcontent-%COMP%]:first-of-type{padding-left:10px}table[_ngcontent-%COMP%]{width:100%}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.order-summary[_ngcontent-%COMP%]{font-size:x-large;padding-bottom:10px;padding-left:10px}.bonus-points[_ngcontent-%COMP%]{margin-top:5px;text-align:center}"]
                    }),
                    t
            }
        )();
        function is(t, e) {
            1 & t && (a.Wb(0, "mat-error", 1),
                a.Jc(1, " MANDATORY_AMOUNT "),
                a.Vb())
        }
        function as(t, e) {
            1 & t && (a.Wb(0, "mat-error", 1),
                a.Jc(1, " AMOUNT_LIMIT "),
                a.Vb())
        }
        let os = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.router = t,
                            this.walletService = e,
                            this.ngZone = i,
                            this.balanceControl = new s.c("",[s.x.required, s.x.min(10), s.x.max(1e3)])
                    }
                    ngOnInit() {
                        this.walletService.get().subscribe(t=>{
                                this.balance = parseFloat(t).toFixed(2)
                            }
                            , t=>{
                                console.log(t)
                            }
                        )
                    }
                    continue() {
                        sessionStorage.setItem("walletTotal", this.balanceControl.value),
                            this.ngZone.run(()=>this.router.navigate(["/payment", "wallet"]))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(S.b),a.Qb(un),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-wallet"]],
                        decls: 25,
                        vars: 14,
                        consts: [[1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation"], ["appearance", "outline", "color", "accent"], ["type", "number", "matInput", "", "aria-label", "Enter an amount", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to continue to payment", 3, "disabled", "click"], [1, "material-icons"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "h1"),
                                a.Wb(2, "div"),
                                a.Jc(3),
                                a.jc(4, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(5, "h3", 1),
                                a.Jc(6, "LABEL_ADD_MONEY"),
                                a.Vb(),
                                a.Wb(7, "p"),
                                a.Wb(8, "b"),
                                a.Wb(9, "span", 1),
                                a.Jc(10, "LABEL_WALLET_BALANCE"),
                                a.Vb(),
                                a.Wb(11, "span", 2),
                                a.Jc(12),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(13, "mat-form-field", 3),
                                a.Wb(14, "mat-label"),
                                a.Jc(15),
                                a.jc(16, "translate"),
                                a.Vb(),
                                a.Rb(17, "input", 4),
                                a.Hc(18, is, 2, 0, "mat-error", 5),
                                a.Hc(19, as, 2, 0, "mat-error", 5),
                                a.Vb(),
                                a.Wb(20, "button", 6),
                                a.ec("click", (function() {
                                        return e.continue()
                                    }
                                )),
                                a.Wb(21, "i", 7),
                                a.Jc(22, " send "),
                                a.Vb(),
                                a.Jc(23),
                                a.jc(24, "translate"),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(3),
                                a.Kc(a.kc(4, 8, "DIGITAL_WALLET")),
                                a.Db(9),
                                a.Lc(" ", e.balance, ""),
                                a.Db(3),
                                a.Kc(a.kc(16, 10, "LABEL_AMOUNT")),
                                a.Db(2),
                                a.oc("formControl", e.balanceControl),
                                a.Db(1),
                                a.oc("ngIf", e.balanceControl.invalid && e.balanceControl.errors.required),
                                a.Db(1),
                                a.oc("ngIf", e.balanceControl.invalid && (e.balanceControl.errors.min || e.balanceControl.errors.max)),
                                a.Db(1),
                                a.oc("disabled", e.balanceControl.invalid),
                                a.Db(3),
                                a.Lc(" ", a.kc(24, 12, "LABEL_CONTINUE"), " "))
                        },
                        directives: [f.a, g.a, At.c, At.g, s.s, Pt.b, s.b, s.n, s.d, P.l, v.a, At.b],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:30%;margin-right:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px;width:100%}.form-container[_ngcontent-%COMP%]{min-width:350px}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}"]
                    }),
                    t
            }
        )();
        function ns(t, e) {
            1 & t && (a.Wb(0, "div", 32),
                a.Jc(1, "LABEL_IN_TRANSIT"),
                a.Vb())
        }
        function rs(t, e) {
            1 & t && (a.Wb(0, "div", 33),
                a.Jc(1, "LABEL_DELIVERED"),
                a.Vb())
        }
        function ss(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 34),
                a.Jc(1, "LABEL_PRODUCT"),
                a.Vb())
        }
        function cs(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 35),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.name, " ")
            }
        }
        function ls(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 36),
                a.Jc(1, "LABEL_PRICE"),
                a.Vb())
        }
        function bs(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 37),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.price, "\xa4")
            }
        }
        function us(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 36),
                a.Jc(1, "LABEL_QUANTITY"),
                a.Vb())
        }
        function ds(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 37),
                a.Wb(1, "span"),
                a.Jc(2),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(2),
                    a.Kc(t.quantity)
            }
        }
        function ms(t, e) {
            1 & t && (a.Wb(0, "mat-header-cell", 36),
                a.Jc(1, "LABEL_TOTAL_PRICE"),
                a.Vb())
        }
        function hs(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 38),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.total.toFixed(2), "\xa4")
            }
        }
        function ps(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 36)
        }
        function fs(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 37),
                    a.Wb(1, "button", 18),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(3).showDetail(i.id)
                        }
                    )),
                    a.jc(2, "translate"),
                    a.Wb(3, "mat-icon"),
                    a.Jc(4, " rate_review "),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(1),
                a.pc("matTooltip", a.kc(2, 1, "WRITE_REVIEW")))
        }
        function gs(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function vs(t, e) {
            1 & t && a.Rb(0, "mat-row")
        }
        function Cs(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "div"),
                    a.Wb(1, "div", 7),
                    a.Wb(2, "div", 8),
                    a.Wb(3, "div", 9),
                    a.Wb(4, "div", 10),
                    a.Wb(5, "div", 11),
                    a.Jc(6, "LABEL_ORDER_ID"),
                    a.Vb(),
                    a.Wb(7, "div"),
                    a.Jc(8),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(9, "div", 12),
                    a.Wb(10, "div", 11),
                    a.Jc(11, "LABEL_TOTAL_PRICE"),
                    a.Vb(),
                    a.Wb(12, "div"),
                    a.Jc(13),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(14, "div", 12),
                    a.Wb(15, "div", 11),
                    a.Jc(16, "LABEL_BONUS"),
                    a.Vb(),
                    a.Wb(17, "div"),
                    a.Jc(18),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(19, "div", 13),
                    a.Hc(20, ns, 2, 0, "div", 14),
                    a.Hc(21, rs, 2, 0, "div", 15),
                    a.Vb(),
                    a.Wb(22, "div", 16),
                    a.Wb(23, "button", 17),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).trackOrder(i.orderId)
                        }
                    )),
                    a.jc(24, "translate"),
                    a.Wb(25, "mat-icon"),
                    a.Jc(26, " local_shipping "),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(27, "div", 16),
                    a.Wb(28, "button", 18),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic(2).openConfirmationPDF(i.orderId)
                        }
                    )),
                    a.jc(29, "translate"),
                    a.Wb(30, "mat-icon"),
                    a.Jc(31, " note "),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Wb(32, "mat-table", 19),
                    a.Ub(33, 20),
                    a.Hc(34, ss, 2, 0, "mat-header-cell", 21),
                    a.Hc(35, cs, 2, 1, "mat-cell", 22),
                    a.Tb(),
                    a.Ub(36, 23),
                    a.Hc(37, ls, 2, 0, "mat-header-cell", 24),
                    a.Hc(38, bs, 2, 1, "mat-cell", 25),
                    a.Tb(),
                    a.Ub(39, 26),
                    a.Hc(40, us, 2, 0, "mat-header-cell", 24),
                    a.Hc(41, ds, 3, 1, "mat-cell", 25),
                    a.Tb(),
                    a.Ub(42, 27),
                    a.Hc(43, ms, 2, 0, "mat-header-cell", 24),
                    a.Hc(44, hs, 2, 1, "mat-cell", 28),
                    a.Tb(),
                    a.Ub(45, 29),
                    a.Hc(46, ps, 1, 0, "mat-header-cell", 24),
                    a.Hc(47, fs, 5, 3, "mat-cell", 25),
                    a.Tb(),
                    a.Hc(48, gs, 1, 0, "mat-header-row", 30),
                    a.Hc(49, vs, 1, 0, "mat-row", 31),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic(2);
                a.Db(8),
                    a.Lc("#", t.orderId, ""),
                    a.Db(5),
                    a.Lc("", t.totalPrice.toFixed(2), "\xa4"),
                    a.Db(5),
                    a.Kc(t.bonus),
                    a.Db(2),
                    a.oc("ngIf", !t.delivered),
                    a.Db(1),
                    a.oc("ngIf", t.delivered),
                    a.Db(2),
                    a.pc("matTooltip", a.kc(24, 10, "LABEL_TRACK_ORDER")),
                    a.Db(5),
                    a.pc("matTooltip", a.kc(29, 12, "PRINT_ORDER_CONFIRMATION")),
                    a.Db(4),
                    a.oc("dataSource", t.products),
                    a.Db(16),
                    a.oc("matHeaderRowDef", i.tableColumns),
                    a.Db(1),
                    a.oc("matRowDefColumns", i.tableColumns)
            }
        }
        function ws(t, e) {
            if (1 & t && (a.Wb(0, "div", 5),
                a.Hc(1, Cs, 50, 14, "div", 6),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("ngForOf", t.orders)
            }
        }
        function ys(t, e) {
            1 & t && (a.Wb(0, "mat-card", 39),
                a.Rb(1, "img", 40),
                a.Wb(2, "mat-card-title"),
                a.Wb(3, "span", 41),
                a.Jc(4, " NO_SEARCH_RESULT "),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "mat-card-content"),
                a.Wb(6, "span", 41),
                a.Jc(7, " NO_ORDERS_PLACED "),
                a.Vb(),
                a.Vb(),
                a.Vb())
        }
        let Ds = (()=>{
                class t {
                    constructor(t, e, i, a, o, n) {
                        this.router = t,
                            this.dialog = e,
                            this.orderHistoryService = i,
                            this.basketService = a,
                            this.productService = o,
                            this.ngZone = n,
                            this.tableColumns = ["product", "price", "quantity", "total price", "review"],
                            this.orders = [],
                            this.emptyState = !0
                    }
                    ngOnInit() {
                        this.orderHistoryService.get().subscribe(t=>{
                                t = t.reverse(),
                                    this.emptyState = 0 === t.length;
                                for (const e of t) {
                                    const t = [];
                                    for (const i of e.products)
                                        t.push({
                                            id: i.id,
                                            name: i.name,
                                            price: i.price,
                                            quantity: i.quantity,
                                            total: i.total
                                        });
                                    this.orders.push({
                                        orderId: e.orderId,
                                        totalPrice: e.totalPrice,
                                        bonus: e.bonus,
                                        products: new A.o(t),
                                        delivered: e.delivered
                                    })
                                }
                            }
                            , t=>console.log(t))
                    }
                    showDetail(t) {
                        this.productService.get(t).subscribe(t=>{
                                const e = {
                                    id: t.id,
                                    name: t.name,
                                    description: t.description,
                                    image: t.image,
                                    price: t.price,
                                    points: Math.round(t.price / 10)
                                };
                                this.dialog.open(je, {
                                    width: "500px",
                                    height: "max-content",
                                    data: {
                                        productData: e
                                    }
                                })
                            }
                            , t=>console.log(t))
                    }
                    openConfirmationPDF(t) {
                        window.open(this.basketService.hostServer + "/ftp/order_" + t + ".pdf", "_blank")
                    }
                    trackOrder(t) {
                        this.ngZone.run(()=>this.router.navigate(["/track-result"], {
                            queryParams: {
                                id: t
                            }
                        }))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(S.b),a.Qb(Ae.b),a.Qb(er),a.Qb(V),a.Qb(Qe),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-order-history"]],
                        decls: 8,
                        vars: 5,
                        consts: [["fxLayout", "column", "fxLayoutGap", "20px", 1, "main-wrapper"], [1, "heading", "mat-elevation-z6"], [1, "heading-main"], ["fxLayout", "column", "fxLayoutGap", "20px", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z6", "table-container", "custom-slate"], [1, "heading"], ["fxLayout", "row"], ["fxFlex", "40%", "fxLayout", "column"], ["translate", ""], ["fxFlex", "15%", "fxLayout", "column"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["fxFlex", "5%", "fxLayoutAlign", "end"], ["mat-icon-button", "", "aria-label", "Track Your Order", "matTooltipPosition", "below", 3, "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", "fxFlex", "40%", 4, "matHeaderCellDef"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "price"], ["translate", "", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", "fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "review"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["translate", "", "fxFlex", "40%"], ["fxFlex", "40%"], ["translate", "", "fxFlex", "15%"], ["fxFlex", "15%"], ["fxFlex", "15%", 1, "price-align"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "div", 1),
                                a.Wb(2, "div", 2),
                                a.Jc(3),
                                a.jc(4, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Hc(5, ws, 2, 1, "div", 3),
                                a.Hc(6, ys, 8, 0, "ng-template", null, 4, a.Ic),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(7);
                                a.Db(3),
                                    a.Kc(a.kc(4, 3, "LABEL_ORDER_HISTORY")),
                                    a.Db(2),
                                    a.oc("ngIf", !e.emptyState)("ngIfElse", t)
                            }
                        },
                        directives: [p.d, p.e, P.l, P.k, p.b, g.a, p.c, v.a, ye.a, we.a, A.n, A.c, A.i, A.b, A.k, A.m, A.h, A.a, A.j, A.l, f.a, f.f, f.b],
                        pipes: [g.d],
                        styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);padding:12px 20px}.heading-main[_ngcontent-%COMP%]{font-size:x-large;justify-content:center}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}mat-card[_ngcontent-%COMP%]{height:auto}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}"]
                    }),
                    t
            }
        )();
        function Ss(t, e) {
            if (1 & t && (a.Wb(0, "div", 22),
                a.Wb(1, "h1", 4),
                a.Jc(2, "LABEL_DELIVERY_ADDRESS"),
                a.Vb(),
                a.Wb(3, "div"),
                a.Jc(4),
                a.Vb(),
                a.Wb(5, "div"),
                a.Jc(6),
                a.Vb(),
                a.Wb(7, "div"),
                a.Jc(8),
                a.Vb(),
                a.Wb(9, "div"),
                a.Wb(10, "span", 4),
                a.Jc(11, "PHONE_NUMBER"),
                a.Vb(),
                a.Jc(12),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Kc(null == t.address ? null : t.address.fullName),
                    a.Db(2),
                    a.Nc("", null == t.address ? null : t.address.streetAddress, ", ", null == t.address ? null : t.address.city, ", ", null == t.address ? null : t.address.state, ", ", null == t.address ? null : t.address.zipCode, ""),
                    a.Db(2),
                    a.Kc(null == t.address ? null : t.address.country),
                    a.Db(4),
                    a.Lc(" ", null == t.address ? null : t.address.mobileNum, "")
            }
        }
        function Ws(t, e) {
            1 & t && a.Rb(0, "mat-divider", 23)
        }
        function Vs(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 24)
        }
        function xs(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-cell", 24),
                    a.Wb(1, "mat-radio-button", 25),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().selectMethod(i.id)
                        }
                    ))("change", (function(i) {
                            a.zc(t);
                            const o = e.$implicit
                                , n = a.ic();
                            return i ? n.selection.toggle(o) : null
                        }
                    )),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic();
                a.Db(1),
                    a.oc("checked", i.selection.isSelected(t))
            }
        }
        function Is(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 26)
        }
        function _s(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 26),
                a.Rb(1, "i", 27),
                a.Jc(2),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.oc("ngClass", t.icon),
                    a.Db(1),
                    a.Lc("\xa0", t.name, "")
            }
        }
        function ks(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 28)
        }
        function Os(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 29),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Lc("", t.price.toFixed(2), "\xa4")
            }
        }
        function Ts(t, e) {
            1 & t && a.Rb(0, "mat-header-cell", 30)
        }
        function Ls(t, e) {
            if (1 & t && (a.Wb(0, "mat-cell", 29),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t) {
                const t = e.$implicit;
                a.Db(1),
                    a.Mc("", t.eta, " ", a.kc(2, 2, "LABEL_DAYS"), "")
            }
        }
        function As(t, e) {
            1 & t && a.Rb(0, "mat-header-row")
        }
        function Ps(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-row", 31),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit
                                , o = e.$implicit
                                , n = a.ic();
                            return n.selection.toggle(i),
                                n.selectMethod(o.id)
                        }
                    )),
                    a.Vb()
            }
        }
        u.b.add(m.H, m.K, m.bb),
            u.a.watch();
        let Es = (()=>{
                class t {
                    constructor(t, e, i, a, o) {
                        this.location = t,
                            this.deliverySerivce = e,
                            this.addressService = i,
                            this.router = a,
                            this.ngZone = o,
                            this.displayedColumns = ["Selection", "Name", "Price", "ETA"],
                            this.deliveryMethodId = void 0,
                            this.selection = new ga.c(!1,[])
                    }
                    ngOnInit() {
                        this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(t=>{
                                this.address = t
                            }
                            , t=>console.log(t)),
                            this.deliverySerivce.get().subscribe(t=>{
                                    console.log(t),
                                        this.methods = t,
                                        this.dataSource = new A.o(this.methods)
                                }
                                , t=>console.log(t))
                    }
                    selectMethod(t) {
                        this.deliveryMethodId = this.selection.hasValue() || t ? t : void 0
                    }
                    routeToPreviousUrl() {
                        this.location.back()
                    }
                    chooseDeliveryMethod() {
                        sessionStorage.setItem("deliveryMethodId", this.deliveryMethodId.toString()),
                            this.ngZone.run(()=>this.router.navigate(["/payment", "shop"]))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(P.g),a.Qb(dn),a.Qb(fa),a.Qb(S.b),a.Qb(a.A))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-delivery-method"]],
                        decls: 33,
                        vars: 9,
                        consts: [[1, "mat-elevation-z6"], ["class", "addressCont", 4, "ngIf"], ["class", "detail-divider", 4, "ngIf"], [2, "height", "12px"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", 4, "matCellDef"], ["matColumnDef", "ETA"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], [2, "margin-top", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to delivery method selection", 1, "btn", "nextButton", 3, "disabled", "click"], [1, "addressCont"], [1, "detail-divider"], ["fxFlex", "20%"], [3, "checked", "click", "change"], ["fxFlex", "30%"], [3, "ngClass"], ["translate", "LABEL_PRICE", "fxFlex", "25%"], ["fxFlex", "25%"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%"], [3, "click"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-card", 0),
                                a.Hc(1, Ss, 13, 7, "div", 1),
                                a.Hc(2, Ws, 1, 0, "mat-divider", 2),
                                a.Rb(3, "div", 3),
                                a.Wb(4, "div"),
                                a.Wb(5, "h1", 4),
                                a.Jc(6, "LABEL_CHOOSE_A_DELIVERY_SPEED"),
                                a.Vb(),
                                a.Wb(7, "mat-table", 5),
                                a.Ub(8, 6),
                                a.Hc(9, Vs, 1, 0, "mat-header-cell", 7),
                                a.Hc(10, xs, 2, 1, "mat-cell", 8),
                                a.Tb(),
                                a.Ub(11, 9),
                                a.Hc(12, Is, 1, 0, "mat-header-cell", 10),
                                a.Hc(13, _s, 3, 2, "mat-cell", 11),
                                a.Tb(),
                                a.Ub(14, 12),
                                a.Hc(15, ks, 1, 0, "mat-header-cell", 13),
                                a.Hc(16, Os, 2, 1, "mat-cell", 14),
                                a.Tb(),
                                a.Ub(17, 15),
                                a.Hc(18, Ts, 1, 0, "mat-header-cell", 16),
                                a.Hc(19, Ls, 3, 4, "mat-cell", 14),
                                a.Tb(),
                                a.Hc(20, As, 1, 0, "mat-header-row", 17),
                                a.Hc(21, Ps, 1, 0, "mat-row", 18),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(22, "div", 19),
                                a.Wb(23, "button", 20),
                                a.ec("click", (function() {
                                        return e.routeToPreviousUrl()
                                    }
                                )),
                                a.Wb(24, "mat-icon"),
                                a.Jc(25, " navigate_before "),
                                a.Vb(),
                                a.Jc(26),
                                a.jc(27, "translate"),
                                a.Vb(),
                                a.Wb(28, "button", 21),
                                a.ec("click", (function() {
                                        return e.chooseDeliveryMethod()
                                    }
                                )),
                                a.Wb(29, "mat-icon"),
                                a.Jc(30, " navigate_next "),
                                a.Vb(),
                                a.Wb(31, "span", 4),
                                a.Jc(32, "LABEL_CONTINUE"),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(1),
                                a.oc("ngIf", e.address),
                                a.Db(1),
                                a.oc("ngIf", e.address),
                                a.Db(5),
                                a.oc("dataSource", e.dataSource),
                                a.Db(13),
                                a.oc("matHeaderRowDef", e.displayedColumns),
                                a.Db(1),
                                a.oc("matRowDefColumns", e.displayedColumns),
                                a.Db(5),
                                a.Lc(" ", a.kc(27, 7, "LABEL_BACK"), " "),
                                a.Db(2),
                                a.oc("disabled", void 0 === e.deliveryMethodId))
                        },
                        directives: [f.a, P.l, g.a, A.n, A.c, A.i, A.b, A.k, A.m, v.a, we.a, Me.a, A.h, p.b, A.a, va.a, P.j, E.a, A.j, A.l],
                        pipes: [g.d],
                        styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.addressCont[_ngcontent-%COMP%]{margin-bottom:12px}.detail-divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:1%!important;width:98%!important}.btn-return[_ngcontent-%COMP%]{margin-left:0;margin-right:auto;display:block}.nextButton[_ngcontent-%COMP%]{margin-right:0;margin-left:auto;display:block;margin-top:-37px}"]
                    }),
                    t
            }
        )();
        var Rs = i("LRne")
            , Ms = i("HDdC");
        const Js = t=>{
                if ("string" == typeof t.value)
                    return Object(Rs.a)(null);
                const e = t.value
                    , i = new FileReader;
                return new Ms.a(t=>{
                        i.addEventListener("loadend", ()=>{
                                const e = new Uint8Array(i.result).subarray(0, 4);
                                let a = ""
                                    , o = !1;
                                for (let t = 0; t < e.length; t++)
                                    a += e[t].toString(16);
                                switch (a) {
                                    case "89504e47":
                                        o = !0;
                                        break;
                                    case "ffd8ffe0":
                                    case "ffd8ffe1":
                                    case "ffd8ffe2":
                                    case "ffd8ffe3":
                                    case "ffd8ffe8":
                                        o = !0;
                                        break;
                                    default:
                                        o = !1
                                }
                                t.next(o ? null : {
                                    invalidMimeType: !0
                                }),
                                    t.complete()
                            }
                        ),
                            i.readAsArrayBuffer(e)
                    }
                )
            }
        ;
        let Hs = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/memories"
                    }
                    addMemory(t, e) {
                        const i = new FormData;
                        return i.append("image", e, t),
                            i.append("caption", t),
                            this.http.post(this.host, i).pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                    throw t
                                }
                            ))
                    }
                    get() {
                        return this.http.get(this.host + "/").pipe(Object(c.a)(t=>t.data), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function Ns(t, e) {
            if (1 & t && (a.Wb(0, "a", 10),
                a.Wb(1, "button", 11),
                a.Rb(2, "i", 12),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic().$implicit
                    , e = a.ic(2);
                a.rc("href", "https://twitter.com/intent/tweet?text=", t.caption, " ", e.twitterHandle, "&hashtags=appsec", a.Cc)
            }
        }
        function Fs(t, e) {
            if (1 & t && (a.Wb(0, "span", 6),
                a.Rb(1, "img", 7),
                a.Wb(2, "div", 8),
                a.Wb(3, "div"),
                a.Jc(4),
                a.Vb(),
                a.Hc(5, Ns, 3, 2, "a", 9),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = e.$implicit
                    , i = a.ic(2);
                a.Db(1),
                    a.pc("src", t.url, a.Cc),
                    a.pc("alt", t.caption),
                    a.Db(3),
                    a.Kc(t.caption),
                    a.Db(1),
                    a.oc("ngIf", i.twitterHandle)
            }
        }
        function Bs(t, e) {
            if (1 & t && (a.Wb(0, "div", 4),
                a.Hc(1, Fs, 6, 4, "span", 5),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(1),
                    a.oc("ngForOf", t.slideshowDataSource)
            }
        }
        function Us(t, e) {
            1 & t && (a.Wb(0, "mat-card", 13),
                a.Rb(1, "img", 14),
                a.Wb(2, "mat-card-title"),
                a.Wb(3, "span", 15),
                a.Jc(4, " NO_SEARCH_RESULT "),
                a.Vb(),
                a.Vb(),
                a.Wb(5, "mat-card-content"),
                a.Wb(6, "span", 15),
                a.Jc(7, " EMPTY_MEMORY_LIST "),
                a.Vb(),
                a.Vb(),
                a.Vb())
        }
        function js(t, e) {
            if (1 & t && (a.Wb(0, "div", 28),
                a.Rb(1, "img", 29),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.Db(1),
                    a.oc("src", t.imagePreview, a.Cc)("alt", t.form.value.caption)
            }
        }
        function Qs(t, e) {
            1 & t && (a.Wb(0, "mat-error", 17),
                a.Jc(1),
                a.jc(2, "translate"),
                a.Vb()),
            2 & t && (a.Db(1),
                a.Kc(a.kc(2, 1, "MANDATORY_CAPTION")))
        }
        function zs(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "div"),
                    a.Wb(1, "div", 16),
                    a.Wb(2, "h2", 17),
                    a.Jc(3, "LABEL_SHARE_A_MEMORY"),
                    a.Vb(),
                    a.Wb(4, "form", 18),
                    a.Wb(5, "div"),
                    a.Wb(6, "button", 19),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.wc(10).click()
                        }
                    )),
                    a.Jc(7),
                    a.jc(8, "translate"),
                    a.Vb(),
                    a.Wb(9, "input", 20, 21),
                    a.ec("change", (function(e) {
                            return a.zc(t),
                                a.ic().onImagePicked(e)
                        }
                    )),
                    a.Vb(),
                    a.Vb(),
                    a.Hc(11, js, 2, 2, "div", 22),
                    a.Wb(12, "mat-form-field", 23),
                    a.Wb(13, "mat-label", 17),
                    a.Jc(14, "LABEL_CAPTION"),
                    a.Vb(),
                    a.Rb(15, "input", 24),
                    a.Hc(16, Qs, 3, 3, "mat-error", 25),
                    a.Vb(),
                    a.Wb(17, "button", 26),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().save()
                        }
                    )),
                    a.Wb(18, "i", 27),
                    a.Jc(19, " send "),
                    a.Vb(),
                    a.Jc(20),
                    a.jc(21, "translate"),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.oc("formGroup", t.form),
                    a.Db(3),
                    a.Lc("", a.kc(8, 6, "LABEL_PICK_IMAGE"), " "),
                    a.Db(4),
                    a.oc("ngIf", "" !== t.imagePreview && t.imagePreview && t.form.get("image").valid),
                    a.Db(5),
                    a.oc("ngIf", t.form.get("caption").invalid),
                    a.Db(1),
                    a.oc("disabled", t.form.get("image").invalid || t.form.get("caption").invalid),
                    a.Db(3),
                    a.Lc(" ", a.kc(21, 8, "BTN_SUBMIT"), " ")
            }
        }
        u.b.add(d.k),
            u.a.watch();
        let Gs = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.photoWallService = t,
                            this.configurationService = e,
                            this.snackBarHelperService = i,
                            this.emptyState = !0,
                            this.form = new s.f({
                                image: new s.c("",{
                                    validators: [s.x.required],
                                    asyncValidators: [Js]
                                }),
                                caption: new s.c("",[s.x.required])
                            }),
                            this.slideshowDataSource = [],
                            this.twitterHandle = null
                    }
                    ngOnInit() {
                        this.slideshowDataSource = [],
                            this.photoWallService.get().subscribe(t=>{
                                    this.emptyState = 0 === t.length;
                                    for (const e of t)
                                        this.slideshowDataSource.push({
                                            url: e.imagePath,
                                            caption: e.caption
                                        })
                                }
                                , t=>console.log(t)),
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    t && t.application && t.application.social && t.application.social.twitterUrl && (this.twitterHandle = t.application.social.twitterUrl.replace("https://twitter.com/", "@"))
                                }
                                , t=>console.log(t))
                    }
                    onImagePicked(t) {
                        const e = t.target.files[0];
                        this.form.patchValue({
                            image: e
                        }),
                            this.form.get("image").updateValueAndValidity();
                        const i = new FileReader;
                        i.onload = ()=>{
                            this.imagePreview = i.result
                        }
                            ,
                            i.readAsDataURL(e)
                    }
                    save() {
                        this.photoWallService.addMemory(this.form.value.caption, this.form.value.image).subscribe(()=>{
                                this.resetForm(),
                                    this.ngOnInit(),
                                    this.snackBarHelperService.open("IMAGE_UPLOAD_SUCCESS", "confirmBar")
                            }
                            , t=>{
                                var e;
                                this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"),
                                    console.log(t)
                            }
                        )
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    resetForm() {
                        this.form.get("image").setValue(""),
                            this.form.get("image").markAsPristine(),
                            this.form.get("image").markAsUntouched(),
                            this.form.get("caption").setValue(""),
                            this.form.get("caption").markAsPristine(),
                            this.form.get("caption").markAsUntouched(),
                            this.form.get("caption").setErrors(null)
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Hs),a.Qb(b),a.Qb(L))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-photo-wall"]],
                        decls: 9,
                        vars: 6,
                        consts: [[1, "heading", "mat-elevation-z6", "mat-own-card", 2, "margin-bottom", "10px"], ["class", "grid", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], [4, "ngIf"], [1, "grid"], ["class", "container mat-elevation-z6", 4, "ngFor", "ngForOf"], [1, "container", "mat-elevation-z6"], [1, "image", 3, "src", "alt"], [1, "overlay"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], [1, "mat-elevation-z0", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"], [2, "margin-top", "10px"], ["translate", ""], ["enctype", "multipart/form-data", 3, "formGroup"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", "name", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["appearance", "outline", "color", "accent"], ["formControlName", "caption", "type", "text", "matInput", ""], ["translate", "", 4, "ngIf"], ["id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], [1, "image-preview"], [3, "src", "alt"]],
                        template: function(t, e) {
                            if (1 & t && (a.Wb(0, "mat-card", 0),
                                a.Wb(1, "h1"),
                                a.Jc(2),
                                a.jc(3, "translate"),
                                a.Vb(),
                                a.Wb(4, "div"),
                                a.Hc(5, Bs, 2, 1, "div", 1),
                                a.Vb(),
                                a.Hc(6, Us, 8, 0, "ng-template", null, 2, a.Ic),
                                a.Hc(8, zs, 22, 10, "div", 3),
                                a.Vb()),
                            2 & t) {
                                const t = a.wc(7);
                                a.Db(2),
                                    a.Kc(a.kc(3, 4, "LABEL_PHOTO_WALL")),
                                    a.Db(3),
                                    a.oc("ngIf", !e.emptyState)("ngIfElse", t),
                                    a.Db(3),
                                    a.oc("ngIf", e.isLoggedIn())
                            }
                        },
                        directives: [f.a, P.l, P.k, v.a, f.f, g.a, f.b, s.z, s.o, s.g, At.c, At.g, s.b, Pt.b, s.n, s.e, At.b],
                        pipes: [g.d],
                        styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:10px;width:60%}input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.heading-main[_ngcontent-%COMP%]{font-size:x-large;justify-content:center}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.grid[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px;box-shadow:2px 2px 6px 0 rgba(0,0,0,.3);max-width:100%}.container[_ngcontent-%COMP%]{position:relative}.image[_ngcontent-%COMP%]{display:block}.overlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);bottom:0;font-size:20px;left:0;opacity:0;padding:20px;position:absolute;right:0;text-align:center;transition:.5s ease}.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
                    }),
                    t
            }
        )();
        function qs(t, e) {
            if (1 & t && (a.Wb(0, "div", 22),
                a.Wb(1, "div", 23),
                a.Wb(2, "p", 24),
                a.Jc(3),
                a.Vb(),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(3),
                    a.Kc(t.error)
            }
        }
        function Ys(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "div"),
                    a.Wb(1, "div", 14),
                    a.Jc(2),
                    a.Vb(),
                    a.Wb(3, "div", 14),
                    a.Wb(4, "button", 25),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().upgradeToDeluxe()
                        }
                    )),
                    a.Wb(5, "span", 13),
                    a.Jc(6, "LABEL_BECOME_MEMBER"),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(2),
                    a.Lc(" ", t.membershipCost, "\xa4 ")
            }
        }
        const Ks = function(t) {
            return {
                appname: t
            }
        }
            , Xs = [{
            path: "administration",
            component: Xi,
            canActivate: [_]
        }, {
            path: "accounting",
            component: kr,
            canActivate: [k]
        }, {
            path: "about",
            component: ee
        }, {
            path: "address/select",
            component: cn,
            canActivate: [I]
        }, {
            path: "address/saved",
            component: ln,
            canActivate: [I]
        }, {
            path: "address/create",
            component: sn,
            canActivate: [I]
        }, {
            path: "address/edit/:addressId",
            component: sn,
            canActivate: [I]
        }, {
            path: "delivery-method",
            component: Es
        }, {
            path: "deluxe-membership",
            component: (()=>{
                    class t {
                        constructor(t, e, i, a, o, n, r) {
                            this.router = t,
                                this.userService = e,
                                this.cookieService = i,
                                this.configurationService = a,
                                this.route = o,
                                this.ngZone = n,
                                this.io = r,
                                this.membershipCost = 0,
                                this.error = void 0,
                                this.applicationName = "OWASP Juice Shop",
                                this.logoSrc = "assets/public/images/JuiceShop_Logo.png"
                        }
                        ngOnInit() {
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    let e = this.route.snapshot.queryParams.testDecal;
                                    if (t && t.application && (t.application.name && (this.applicationName = t.application.name),
                                        t.application.logo)) {
                                        let i = t.application.logo;
                                        "http" === i.substring(0, 4) && (i = decodeURIComponent(i.substring(i.lastIndexOf("/") + 1))),
                                            this.logoSrc = "assets/public/images/" + (e || i)
                                    }
                                    e && this.ngZone.runOutsideAngular(()=>{
                                            this.io.socket().emit("verifySvgInjectionChallenge", e)
                                        }
                                    )
                                }
                                , t=>console.log(t)),
                                this.userService.deluxeStatus().subscribe(t=>{
                                        this.membershipCost = t.membershipCost
                                    }
                                    , t=>{
                                        this.error = t.error.error
                                    }
                                )
                        }
                        upgradeToDeluxe() {
                            this.ngZone.run(()=>this.router.navigate(["/payment", "deluxe"]))
                        }
                    }
                    return t.\u0275fac = function(e) {
                        return new (e || t)(a.Qb(S.b),a.Qb(D),a.Qb(r.a),a.Qb(b),a.Qb(S.a),a.Qb(a.A),a.Qb(Ye))
                    }
                        ,
                        t.\u0275cmp = a.Kb({
                            type: t,
                            selectors: [["app-deluxe-user"]],
                            decls: 50,
                            vars: 10,
                            consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "main-wrapper"], ["class", "heading mat-elevation-z6", 4, "ngIf"], [1, "mat-elevation-z6", "deluxe-membership"], ["fxFlexAlign", "center", "fxFlex", "30%", 1, "img-container"], ["viewBox", "0 0 720 720", "xmlns", "http://www.w3.org/2000/svg"], ["href", "assets/public/images/deluxe/blankBoxes.png", "x", "0", "y", "0", "height", "720", "width", "720"], ["x", "260", "y", "130", "height", "50"], ["x", "230", "y", "330", "height", "70"], ["x", "70", "y", "355", "height", "40"], ["x", "120", "y", "450", "height", "55"], ["x", "500", "y", "410", "height", "45"], ["fxFlexAlign", "center", "fxFlex", "60%"], [1, "item-name"], ["translate", ""], [1, "item-description"], ["translate", "", 3, "translateParams"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "33.33%", 1, "mat-elevation-z6"], ["fxFlexAlign", "center", "fxFlex", "40%", 1, "img-container"], [1, "img-responsive", "img-thumbnail", 2, "font-size", "100px"], ["translate", "", 1, "item-description"], [1, "heading", "mat-elevation-z6"], [2, "margin-top", "5px"], [1, "error"], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-member", 3, "click"]],
                            template: function(t, e) {
                                1 & t && (a.Wb(0, "div", 0),
                                    a.Hc(1, qs, 4, 1, "div", 1),
                                    a.Wb(2, "mat-card", 2),
                                    a.Wb(3, "div", 3),
                                    a.hc(),
                                    a.Wb(4, "svg", 4),
                                    a.Rb(5, "image", 5),
                                    a.Rb(6, "image", 6),
                                    a.Rb(7, "image", 7),
                                    a.Rb(8, "image", 8),
                                    a.Rb(9, "image", 9),
                                    a.Rb(10, "image", 10),
                                    a.Vb(),
                                    a.Vb(),
                                    a.gc(),
                                    a.Wb(11, "div", 11),
                                    a.Wb(12, "div", 12),
                                    a.Wb(13, "b", 13),
                                    a.Jc(14, "LABEL_DELUXE_MEMBERSHIP"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(15, "div", 14),
                                    a.Wb(16, "span", 15),
                                    a.Jc(17, "DESCRIPTION_DELUXE_MEMBERSHIP"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Hc(18, Ys, 7, 1, "div", 16),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(19, "div", 17),
                                    a.Wb(20, "mat-card", 18),
                                    a.Wb(21, "div", 19),
                                    a.Wb(22, "mat-icon", 20),
                                    a.Jc(23, " slideshow "),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(24, "div", 11),
                                    a.Wb(25, "div", 12),
                                    a.Wb(26, "b", 13),
                                    a.Jc(27, "LABEL_DEALS_OFFERS"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(28, "div", 21),
                                    a.Jc(29, " DESCRIPTION_DEALS_OFFERS "),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(30, "mat-card", 18),
                                    a.Wb(31, "div", 19),
                                    a.Wb(32, "mat-icon", 20),
                                    a.Jc(33, " directions_car "),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(34, "div", 11),
                                    a.Wb(35, "div", 12),
                                    a.Wb(36, "b", 13),
                                    a.Jc(37, "LABEL_FREE_FAST_DELIVERY"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(38, "div", 21),
                                    a.Jc(39, " DESCRIPTION_FREE_FAST_DELIVERY "),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(40, "mat-card", 18),
                                    a.Wb(41, "div", 19),
                                    a.Wb(42, "mat-icon", 20),
                                    a.Jc(43, " add "),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(44, "div", 11),
                                    a.Wb(45, "div", 12),
                                    a.Wb(46, "b", 13),
                                    a.Jc(47, "LABEL_UNLIMITED_PURCHASE"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(48, "div", 21),
                                    a.Jc(49, " DESCRIPTION_UNLIMITED_PURCHASE "),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb()),
                                2 & t && (a.Db(1),
                                    a.oc("ngIf", e.error),
                                    a.Db(5),
                                    a.Eb("href", e.logoSrc),
                                    a.Db(1),
                                    a.Eb("href", e.logoSrc),
                                    a.Db(1),
                                    a.Eb("href", e.logoSrc),
                                    a.Db(1),
                                    a.Eb("href", e.logoSrc),
                                    a.Db(1),
                                    a.Eb("href", e.logoSrc),
                                    a.Db(6),
                                    a.oc("translateParams", a.tc(8, Ks, e.applicationName)),
                                    a.Db(2),
                                    a.oc("ngIf", !e.error))
                            },
                            directives: [p.d, p.e, P.l, f.a, p.a, p.b, g.a, we.a, v.a],
                            styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.img-thumbnail[_ngcontent-%COMP%]{background:none;border:0;width:100%}.btn-member[_ngcontent-%COMP%]{bottom:10%}.item-description[_ngcontent-%COMP%]{font-size:medium;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}"]
                        }),
                        t
                }
            )(),
            canActivate: [I]
        }, {
            path: "saved-payment-methods",
            component: tr
        }, {
            path: "basket",
            component: st
        }, {
            path: "order-completion/:id",
            component: Kr
        }, {
            path: "contact",
            component: Nt
        }, {
            path: "photo-wall",
            component: Gs
        }, {
            path: "complain",
            component: ha
        }, {
            path: "order-summary",
            component: es
        }, {
            path: "order-history",
            component: Ds
        }, {
            path: "payment/:entity",
            component: Zn
        }, {
            path: "wallet",
            component: os
        }, {
            path: "login",
            component: Ci
        }, {
            path: "forgot-password",
            component: Le
        }, {
            path: "recycle",
            component: Ga
        }, {
            path: "register",
            component: Ce
        }, {
            path: "search",
            component: li
        }, {
            path: "hacking-instructor",
            component: li
        }, {
            path: "score-board",
            component: Oo
        }, {
            path: "track-result",
            component: kt
        }, {
            path: "track-result/new",
            component: kt,
            data: {
                type: "new"
            }
        }, {
            path: "2fa/enter",
            component: Ao
        }, {
            path: "privacy-security",
            component: Mo,
            children: [{
                path: "privacy-policy",
                component: Ko
            }, {
                path: "change-password",
                component: oa
            }, {
                path: "two-factor-authentication",
                component: Fo
            }, {
                path: "data-export",
                component: qo
            }, {
                path: "erasure-request",
                component: Gt
            }, {
                path: "last-login-ip",
                component: Yo
            }]
        }, {
            matcher: function(t) {
                return 0 === t.length ? null : window.location.href.includes("#access_token=") ? {
                    consumed: t
                } : null
            },
            data: {
                params: window.location.href.substr(window.location.href.indexOf("#"))
            },
            component: W
        }, {
            matcher: function(t) {
                return 0 === t.length ? null : t[0].toString().match(function(...t) {
                    let e = Array.prototype.slice.call([25, 184, 174, 179, 182, 186])
                        , i = e.shift();
                    return e.reverse().map((function(t, e) {
                            return String.fromCharCode(t - i - 45 - e)
                        }
                    )).join("")
                }() + 36669..toString(36).toLowerCase() + function(...t) {
                    let e = Array.prototype.slice.call(arguments)
                        , i = e.shift();
                    return e.reverse().map((function(t, e) {
                            return String.fromCharCode(t - i - 24 - e)
                        }
                    )).join("")
                }(13, 144, 87, 152, 139, 144, 83, 138) + 10..toString(36).toLowerCase()) ? {
                    consumed: t
                } : null
            },
            component: w
        }, {
            path: "403",
            component: Po
        }, {
            path: "**",
            component: li
        }]
            , $s = S.e.forRoot(Xs, {
            useHash: !0
        });
        var Zs = i("mqiu")
            , tc = i("Dvla");
        let ec = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = ".",
                            this.host = this.hostServer + "/rest/admin"
                    }
                    getApplicationVersion() {
                        return this.http.get(this.host + "/application-version").pipe(Object(c.a)(t=>t.version), Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var ic = i("/t3+")
            , ac = i("MutI");
        function oc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 35),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().onToggleSidenav()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " exit_to_app "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "TITLE_LOGIN"), " "))
        }
        function nc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 36),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic();
                            return e.onToggleSidenav(),
                                e.goToProfilePage()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " account_circle "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Lc(" ", t.userEmail, " ")
            }
        }
        function rc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 37),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().onToggleSidenav()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " account_balance "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "ACCOUNTING"), " "))
        }
        const sc = function(t) {
            return {
                rotated: t
            }
        };
        function cc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-list-item", 38),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic();
                            return e.showOrdersSubmenu = !e.showOrdersSubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " check_circle_outline "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Wb(6, "mat-icon", 39),
                    a.Jc(7, " expand_more "),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Lc(" ", a.kc(5, 2, "ORDERS_AND_PAYMENT"), " "),
                    a.Db(2),
                    a.oc("ngClass", a.tc(4, sc, t.showOrdersSubmenu))
            }
        }
        function lc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 46),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showOrdersSubmenu = !e.showOrdersSubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " archive "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "LABEL_ORDER_HISTORY"), " "))
        }
        function bc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 47),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showOrdersSubmenu = !e.showOrdersSubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " autorenew "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "NAV_RECYCLE"), " "))
        }
        function uc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 48),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showOrdersSubmenu = !e.showOrdersSubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " my_location "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "MY_SAVED_ADRESSES"), " "))
        }
        function dc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 49),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showOrdersSubmenu = !e.showOrdersSubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " credit_card "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }
        function mc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 50),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showOrdersSubmenu = !e.showOrdersSubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " account_balance_wallet "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "DIGITAL_WALLET"), " "))
        }
        const hc = function(t) {
            return {
                expanded: t
            }
        };
        function pc(t, e) {
            if (1 & t && (a.Wb(0, "div", 40),
                a.Hc(1, lc, 6, 3, "a", 41),
                a.Hc(2, bc, 6, 3, "a", 42),
                a.Rb(3, "mat-divider"),
                a.Hc(4, uc, 6, 3, "a", 43),
                a.Hc(5, dc, 6, 3, "a", 44),
                a.Hc(6, mc, 6, 3, "a", 45),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.oc("ngClass", a.tc(6, hc, t.showOrdersSubmenu)),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(2),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn())
            }
        }
        function fc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-list-item", 51),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic();
                            return e.showPrivacySubmenu = !e.showPrivacySubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " security "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Wb(6, "mat-icon", 39),
                    a.Jc(7, " expand_more "),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Lc(" ", a.kc(5, 2, "PRIVACY_AND_SECURITY"), " "),
                    a.Db(2),
                    a.oc("ngClass", a.tc(4, sc, t.showPrivacySubmenu))
            }
        }
        function gc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 58),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showPrivacySubmenu = !e.showPrivacySubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " assignment "),
                    a.Vb(),
                    a.Wb(3, "span", 59),
                    a.Jc(4, "TITLE_PRIVACY_POLICY"),
                    a.Vb(),
                    a.Vb()
            }
        }
        function vc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 60),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showPrivacySubmenu = !e.showPrivacySubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " get_app "),
                    a.Vb(),
                    a.Wb(3, "span", 59),
                    a.Jc(4, "TITLE_REQUEST_DATA_EXPORT"),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Cc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 61),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showPrivacySubmenu = !e.showPrivacySubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " delete_forever "),
                    a.Vb(),
                    a.Wb(3, "span", 59),
                    a.Jc(4, "DATA_SUBJECT_TITLE"),
                    a.Vb(),
                    a.Vb()
            }
        }
        function wc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 62),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showPrivacySubmenu = !e.showPrivacySubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " edit "),
                    a.Vb(),
                    a.Wb(3, "span", 59),
                    a.Jc(4, "TITLE_CHANGE_PASSWORD"),
                    a.Vb(),
                    a.Vb()
            }
        }
        function yc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 63),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showPrivacySubmenu = !e.showPrivacySubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " exposure_plus_2 "),
                    a.Vb(),
                    a.Wb(3, "span", 59),
                    a.Jc(4, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Dc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 64),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic(2);
                            return e.onToggleSidenav(),
                                e.showPrivacySubmenu = !e.showPrivacySubmenu
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " place "),
                    a.Vb(),
                    a.Wb(3, "span", 59),
                    a.Jc(4, "LAST_LOGIN_IP"),
                    a.Vb(),
                    a.Vb()
            }
        }
        function Sc(t, e) {
            if (1 & t && (a.Wb(0, "div", 40),
                a.Hc(1, gc, 5, 0, "a", 52),
                a.Hc(2, vc, 5, 0, "a", 53),
                a.Hc(3, Cc, 5, 0, "a", 54),
                a.Rb(4, "mat-divider"),
                a.Hc(5, wc, 5, 0, "a", 55),
                a.Hc(6, yc, 5, 0, "a", 56),
                a.Hc(7, Dc, 5, 0, "a", 57),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.oc("ngClass", a.tc(7, hc, t.showPrivacySubmenu)),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(2),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn()),
                    a.Db(1),
                    a.oc("ngIf", t.isLoggedIn())
            }
        }
        function Wc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 65),
                    a.ec("click", (function() {
                            a.zc(t);
                            const e = a.ic();
                            return e.onToggleSidenav(),
                                e.logout()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " power_settings_new "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "TITLE_LOGOUT"), " "))
        }
        function Vc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 66),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().onToggleSidenav()
                        }
                    )),
                    a.Wb(1, "i", 13),
                    a.Jc(2, " sentiment_dissatisfied "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "NAV_COMPLAIN"), " "))
        }
        function xc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 67),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().onToggleSidenav()
                        }
                    )),
                    a.Wb(1, "i", 13),
                    a.Jc(2, " card_membership "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "LABEL_DELUXE_MEMBERSHIP"), " "))
        }
        function Ic(t, e) {
            1 & t && a.Rb(0, "mat-divider", 68)
        }
        function _c(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 69),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().onToggleSidenav()
                        }
                    )),
                    a.Rb(1, "mat-icon", 70),
                    a.Wb(2, "span", 14),
                    a.Jc(3),
                    a.jc(4, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(3),
                a.Lc(" ", a.kc(4, 1, "TITLE_SCORE_BOARD"), " "))
        }
        function kc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "a", 71),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().startHackingInstructor()
                        }
                    )),
                    a.Wb(1, "i", 13),
                    a.Jc(2, " school "),
                    a.Vb(),
                    a.Wb(3, "span", 14),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "BTN_GETTING_STARTED"), " "))
        }
        function Oc(t, e) {
            1 & t && (a.Wb(0, "a", 72),
                a.Rb(1, "mat-icon", 73),
                a.Wb(2, "span", 14),
                a.Jc(3, " GitHub "),
                a.Vb(),
                a.Vb())
        }
        let Tc = (()=>{
                class t {
                    constructor(t, e, i, o, n, r, s, c, l) {
                        this.administrationService = t,
                            this.challengeService = e,
                            this.ngZone = i,
                            this.io = o,
                            this.userService = n,
                            this.cookieService = r,
                            this.router = s,
                            this.configurationService = c,
                            this.loginGuard = l,
                            this.applicationName = "OWASP Juice Shop",
                            this.showGitHubLink = !0,
                            this.userEmail = "",
                            this.scoreBoardVisible = !1,
                            this.version = "",
                            this.isExpanded = !0,
                            this.showPrivacySubmenu = !1,
                            this.showOrdersSubmenu = !1,
                            this.isShowing = !1,
                            this.sizeOfMail = 0,
                            this.offerScoreBoardTutorial = !1,
                            this.sidenavToggle = new a.o,
                            this.onToggleSidenav = ()=>{
                                this.sidenavToggle.emit()
                            }
                    }
                    ngOnInit() {
                        this.administrationService.getApplicationVersion().subscribe(t=>{
                                t && (this.version = "v" + t)
                            }
                            , t=>console.log(t)),
                            this.getApplicationDetails(),
                            this.getScoreBoardStatus(),
                            localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "",
                            this.userService.getLoggedInState().subscribe(t=>{
                                    t ? this.getUserDetails() : this.userEmail = ""
                                }
                            ),
                            this.ngZone.runOutsideAngular(()=>{
                                    this.io.socket().on("challenge solved", t=>{
                                            "scoreBoardChallenge" === t.key && (this.scoreBoardVisible = !0)
                                        }
                                    )
                                }
                            )
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    logout() {
                        this.userService.saveLastLoginIp().subscribe(t=>{
                                this.noop()
                            }
                            , t=>console.log(t)),
                            localStorage.removeItem("token"),
                            this.cookieService.delete("token", "/"),
                            sessionStorage.removeItem("bid"),
                            this.userService.isLoggedIn.next(!1),
                            this.ngZone.run(()=>this.router.navigate(["/"]))
                    }
                    goToProfilePage() {
                        window.location.replace("./profile")
                    }
                    noop() {}
                    getScoreBoardStatus() {
                        this.challengeService.find({
                            name: "Score Board"
                        }).subscribe(t=>{
                                this.ngZone.run(()=>{
                                        this.scoreBoardVisible = t[0].solved
                                    }
                                )
                            }
                            , t=>console.log(t))
                    }
                    getUserDetails() {
                        this.userService.whoAmI().subscribe(t=>{
                                this.userEmail = t.email,
                                    this.sizeOfMail = ("" + t.email).length
                            }
                            , t=>console.log(t))
                    }
                    getApplicationDetails() {
                        this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                t && t.application && t.application.name && (this.applicationName = t.application.name),
                                t && t.application && (this.showGitHubLink = t.application.showGitHubLinks),
                                t && t.application.welcomeBanner.showOnFirstStart && t.hackingInstructor.isEnabled && (this.offerScoreBoardTutorial = t.application.welcomeBanner.showOnFirstStart && t.hackingInstructor.isEnabled)
                            }
                            , t=>console.log(t))
                    }
                    isAccounting() {
                        const t = this.loginGuard.tokenDecode();
                        return !(!t || !t.data || "accounting" !== t.data.role)
                    }
                    startHackingInstructor() {
                        this.onToggleSidenav(),
                            console.log('Starting instructions for challenge "Score Board"'),
                            i.e(5).then(i.bind(null, "s2oO")).then(t=>{
                                    t.startHackingInstructorFor("Score Board")
                                }
                            )
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(ec),a.Qb(qa),a.Qb(a.A),a.Qb(Ye),a.Qb(D),a.Qb(r.a),a.Qb(S.b),a.Qb(b),a.Qb(I))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["sidenav"]],
                        outputs: {
                            sidenavToggle: "sidenavToggle"
                        },
                        decls: 71,
                        vars: 26,
                        consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-subheader", "", "translate", "", "fxHide", "", "fxShow.lt-md", "", 1, "side-subHeader"], ["fxHide", "", "fxShow.lt-md", ""], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click", 4, "ngIf"], ["class", "parent", "aria-label", "Show Orders and Payment Menu", 3, "click", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], ["class", "parent", "aria-label", "Show Privacy and Security Menu", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Logout", 3, "click", 4, "ngIf"], ["mat-subheader", "", "translate", "", 1, "side-subHeader"], ["mat-list-item", "", "routerLink", "/contact", "aria-label", "Go to contact us page", 3, "click"], [1, "material-icons"], [1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/about", "aria-label", "Go to about us page", 3, "click"], ["mat-list-item", "", "routerLink", "/photo-wall", "aria-label", "Go to photo wall", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 10px;", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click", 4, "ngIf"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page", 4, "ngIf"], [1, "appVersion"], [2, "font-size", "13px"], [2, "font-size", "12px"], [2, "margin-top", "10px"], [1, "icon-angular"], [1, "icon-html5"], [1, "icon-sass"], [1, "icon-css3"], [1, "icon-javascript-alt"], [1, "icon-nodejs"], [1, "icon-database-alt2"], [1, "icon-mongodb"], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click"], ["aria-label", "Show Orders and Payment Menu", 1, "parent", 3, "click"], [1, "menu-button", 3, "ngClass"], [1, "submenu", 3, "ngClass"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click"], ["aria-label", "Show Privacy and Security Menu", 1, "parent", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/erasure-request", "aria-label", "Go to data subject page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click"], ["translate", "", 1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/erasure-request", "aria-label", "Go to data subject page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click"], ["mat-list-item", "", "aria-label", "Logout", 3, "click"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click"], [2, "margin-bottom", "10px"], ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click"], ["matListIcon", "", 1, "fas", "fa-trophy", "fa-lg"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page"], ["matListIcon", "", 1, "fab", "fa-github", "fa-lg"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "mat-toolbar", 0),
                                a.Wb(1, "mat-toolbar-row"),
                                a.Wb(2, "h2"),
                                a.Jc(3),
                                a.Vb(),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(4, "mat-nav-list"),
                                a.Rb(5, "button", 1),
                                a.Wb(6, "h3", 2),
                                a.Jc(7, "ACCOUNT"),
                                a.Vb(),
                                a.Wb(8, "div", 3),
                                a.Hc(9, oc, 6, 3, "a", 4),
                                a.Hc(10, nc, 5, 1, "a", 5),
                                a.Hc(11, rc, 6, 3, "a", 6),
                                a.Hc(12, cc, 8, 6, "mat-list-item", 7),
                                a.Hc(13, pc, 7, 8, "div", 8),
                                a.Hc(14, fc, 8, 6, "mat-list-item", 9),
                                a.Hc(15, Sc, 8, 9, "div", 8),
                                a.Hc(16, Wc, 6, 3, "a", 10),
                                a.Vb(),
                                a.Rb(17, "mat-divider", 3),
                                a.Wb(18, "h3", 11),
                                a.Jc(19, "TITLE_CONTACT"),
                                a.Vb(),
                                a.Wb(20, "a", 12),
                                a.ec("click", (function() {
                                        return e.onToggleSidenav()
                                    }
                                )),
                                a.Wb(21, "i", 13),
                                a.Jc(22, " feedback "),
                                a.Vb(),
                                a.Wb(23, "span", 14),
                                a.Jc(24),
                                a.jc(25, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Hc(26, Vc, 6, 3, "a", 15),
                                a.Rb(27, "mat-divider"),
                                a.Wb(28, "h3", 11),
                                a.Jc(29, "COMPANY"),
                                a.Vb(),
                                a.Wb(30, "a", 16),
                                a.ec("click", (function() {
                                        return e.onToggleSidenav()
                                    }
                                )),
                                a.Wb(31, "i", 13),
                                a.Jc(32, " business_center "),
                                a.Vb(),
                                a.Wb(33, "span", 14),
                                a.Jc(34),
                                a.jc(35, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(36, "a", 17),
                                a.ec("click", (function() {
                                        return e.onToggleSidenav()
                                    }
                                )),
                                a.Wb(37, "i", 13),
                                a.Jc(38, " camera "),
                                a.Vb(),
                                a.Wb(39, "span", 14),
                                a.Jc(40),
                                a.jc(41, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Hc(42, xc, 6, 3, "a", 18),
                                a.Hc(43, Ic, 1, 0, "mat-divider", 19),
                                a.Hc(44, _c, 5, 3, "a", 20),
                                a.Hc(45, kc, 6, 3, "a", 21),
                                a.Hc(46, Oc, 4, 0, "a", 22),
                                a.Vb(),
                                a.Wb(47, "div", 23),
                                a.Wb(48, "span"),
                                a.Wb(49, "span", 24),
                                a.Jc(50),
                                a.Vb(),
                                a.Rb(51, "br"),
                                a.Wb(52, "span", 25),
                                a.Jc(53),
                                a.Vb(),
                                a.Rb(54, "br"),
                                a.Wb(55, "div", 26),
                                a.Rb(56, "i", 27),
                                a.Jc(57, "\xa0 "),
                                a.Rb(58, "i", 28),
                                a.Jc(59, "\xa0 "),
                                a.Rb(60, "i", 29),
                                a.Jc(61, "\xa0 "),
                                a.Rb(62, "i", 30),
                                a.Jc(63, "\xa0 "),
                                a.Rb(64, "i", 31),
                                a.Jc(65, "\xa0 "),
                                a.Rb(66, "i", 32),
                                a.Jc(67, "\xa0 "),
                                a.Rb(68, "i", 33),
                                a.Jc(69, "\xa0 "),
                                a.Rb(70, "i", 34),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(3),
                                a.Lc(" ", e.applicationName, ""),
                                a.Db(6),
                                a.oc("ngIf", !e.isLoggedIn()),
                                a.Db(1),
                                a.oc("ngIf", e.isLoggedIn()),
                                a.Db(1),
                                a.oc("ngIf", e.isLoggedIn() && e.isAccounting()),
                                a.Db(1),
                                a.oc("ngIf", e.isLoggedIn()),
                                a.Db(1),
                                a.oc("ngIf", e.showOrdersSubmenu),
                                a.Db(1),
                                a.oc("ngIf", e.isLoggedIn()),
                                a.Db(1),
                                a.oc("ngIf", e.showPrivacySubmenu),
                                a.Db(1),
                                a.oc("ngIf", e.isLoggedIn()),
                                a.Db(8),
                                a.Lc(" ", a.kc(25, 20, "SECTION_CUSTOMER_FEEDBACK"), " "),
                                a.Db(2),
                                a.oc("ngIf", e.isLoggedIn()),
                                a.Db(8),
                                a.Lc(" ", a.kc(35, 22, "TITLE_ABOUT"), " "),
                                a.Db(6),
                                a.Lc(" ", a.kc(41, 24, "LABEL_PHOTO_WALL"), " "),
                                a.Db(2),
                                a.oc("ngIf", e.isLoggedIn()),
                                a.Db(1),
                                a.oc("ngIf", e.scoreBoardVisible || e.showGitHubLink),
                                a.Db(1),
                                a.oc("ngIf", e.scoreBoardVisible),
                                a.Db(1),
                                a.oc("ngIf", !e.scoreBoardVisible && e.offerScoreBoardTutorial),
                                a.Db(1),
                                a.oc("ngIf", e.showGitHubLink),
                                a.Db(4),
                                a.Kc(e.applicationName),
                                a.Db(3),
                                a.Kc(e.version))
                        },
                        directives: [ic.a, ic.c, ac.e, v.a, ac.d, g.a, E.b, P.l, Me.a, ac.b, S.d, we.a, P.j, E.a, ac.a],
                        pipes: [g.d],
                        styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}a[_ngcontent-%COMP%]{text-decoration:none!important}.menu-text[_ngcontent-%COMP%]{padding-left:10px}.mat-list-base[_ngcontent-%COMP%], .mat-list-icon[_ngcontent-%COMP%], .mat-list-item[_ngcontent-%COMP%]{padding:0!important}.toolbar-title[_ngcontent-%COMP%]{margin:0 16px}.mat-subheader[_ngcontent-%COMP%]{font-size:18px;font-weight:900}.app-nav-list-icon[_ngcontent-%COMP%]{margin:0 12px}.side-subHeader[_ngcontent-%COMP%]{font-weight:300}mat-nav-list[_ngcontent-%COMP%]{margin-bottom:50px}.menu-button[_ngcontent-%COMP%]{transform:rotate(0deg);transition:.3s ease-in-out}.menu-button.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.submenu[_ngcontent-%COMP%]{overflow-y:hidden;padding-left:30px;transform:scaleY(0);transform-origin:top;transition:transform .3s ease}.submenu.expanded[_ngcontent-%COMP%]{transform:scaleY(1)}.appVersion[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px;text-align:center}.truncate[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
                    }),
                    t
            }
        )()
            , Lc = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = "."
                    }
                    getLanguages() {
                        return this.http.get(`${this.hostServer}/rest/languages`).pipe(Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        var Ac = i("oWl+")
            , Pc = i("STbY");
        function Ec(t, e) {
            1 & t && (a.Wb(0, "button", 38),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " exit_to_app "),
                a.Vb(),
                a.Wb(3, "span"),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "TITLE_LOGIN"), " "))
        }
        function Rc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 39),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().goToProfilePage()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " account_circle "),
                    a.Vb(),
                    a.Wb(3, "span"),
                    a.Jc(4),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Lc(" ", t.userEmail, " ")
            }
        }
        function Mc(t, e) {
            1 & t && (a.Wb(0, "button", 40),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " account_balance "),
                a.Vb(),
                a.Wb(3, "span"),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "ACCOUNTING"), " "))
        }
        function Jc(t, e) {
            if (1 & t && (a.Wb(0, "button", 41),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " check_circle_outline "),
                a.Vb(),
                a.Wb(3, "span"),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                a.ic();
                const t = a.wc(71);
                a.oc("matMenuTriggerFor", t),
                    a.Db(4),
                    a.Lc(" ", a.kc(5, 2, "ORDERS_AND_PAYMENT"), " ")
            }
        }
        function Hc(t, e) {
            if (1 & t && (a.Wb(0, "button", 42),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " security "),
                a.Vb(),
                a.Wb(3, "span"),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t) {
                a.ic();
                const t = a.wc(38);
                a.oc("matMenuTriggerFor", t),
                    a.Db(4),
                    a.Lc(" ", a.kc(5, 2, "PRIVACY_AND_SECURITY"), " ")
            }
        }
        function Nc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 43),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().logout()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " power_settings_new "),
                    a.Vb(),
                    a.Wb(3, "span"),
                    a.Jc(4),
                    a.jc(5, "translate"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "TITLE_LOGOUT"), " "))
        }
        function Fc(t, e) {
            if (1 & t && (a.Wb(0, "button", 44),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " shopping_cart "),
                a.Vb(),
                a.Wb(3, "span", 20),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Wb(6, "span", 45),
                a.Jc(7),
                a.Vb(),
                a.Vb()),
            2 & t) {
                const t = a.ic();
                a.Db(4),
                    a.Lc(" ", a.kc(5, 2, "TITLE_BASKET"), ""),
                    a.Db(3),
                    a.Kc(t.itemTotal)
            }
        }
        function Bc(t, e) {
            1 & t && a.Rb(0, "span"),
            2 & t && a.Fb("flag-icon flag-icon-" + e.$implicit)
        }
        function Uc(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-radio-button", 46),
                    a.ec("click", (function() {
                            a.zc(t);
                            const i = e.$implicit;
                            return a.ic().changeLanguage(i.key)
                        }
                    )),
                    a.Wb(1, "div", 47),
                    a.Hc(2, Bc, 1, 2, "span", 48),
                    a.Jc(3),
                    a.Vb(),
                    a.Rb(4, "i"),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic();
                a.pc("checked", i.selectedLanguage === t),
                    a.pc("aria-label", t.lang),
                    a.oc("value", t),
                    a.Db(2),
                    a.oc("ngForOf", t.icons),
                    a.Db(1),
                    a.Lc(" ", null == t ? null : t.lang, " "),
                    a.Db(1),
                    a.Fb("fas fa-thermometer-" + t.gauge + (t.percentage > 70 ? " confirmation" : " error"))
            }
        }
        function jc(t, e) {
            1 & t && (a.Wb(0, "button", 49),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " my_location "),
                a.Vb(),
                a.Wb(3, "span"),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "MY_SAVED_ADRESSES"), " "))
        }
        function Qc(t, e) {
            1 & t && (a.Wb(0, "button", 50),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " credit_card "),
                a.Vb(),
                a.Wb(3, "span"),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }
        function zc(t, e) {
            1 & t && (a.Wb(0, "button", 51),
                a.Wb(1, "mat-icon"),
                a.Jc(2, " account_balance_wallet "),
                a.Vb(),
                a.Wb(3, "span"),
                a.Jc(4),
                a.jc(5, "translate"),
                a.Vb(),
                a.Vb()),
            2 & t && (a.Db(4),
                a.Lc(" ", a.kc(5, 1, "DIGITAL_WALLET"), " "))
        }
        const Gc = function() {
            return ["privacy-security/privacy-policy"]
        }
            , qc = function() {
            return ["privacy-security/data-export"]
        }
            , Yc = function() {
            return ["privacy-security/erasure-request"]
        }
            , Kc = function() {
            return ["privacy-security/change-password"]
        }
            , Xc = function() {
            return ["privacy-security/two-factor-authentication"]
        }
            , $c = function() {
            return ["privacy-security/last-login-ip"]
        };
        u.b.add(m.A, m.J, m.M, m.N, m.i, m.c, m.ab, m.y, m.L, m.kb, m.G, m.B, m.hb, d.d, h.b, m.R, m.U, m.T, m.V, m.S),
            u.a.watch();
        let Zc = (()=>{
                class t {
                    constructor(t, e, i, o, n, r, s, c, l, b, u, d, m) {
                        this.administrationService = t,
                            this.challengeService = e,
                            this.configurationService = i,
                            this.userService = o,
                            this.ngZone = n,
                            this.cookieService = r,
                            this.router = s,
                            this.translate = c,
                            this.io = l,
                            this.langService = b,
                            this.loginGuard = u,
                            this.snackBar = d,
                            this.basketService = m,
                            this.userEmail = "",
                            this.languages = [],
                            this.selectedLanguage = "placeholder",
                            this.version = "",
                            this.applicationName = "OWASP Juice Shop",
                            this.showGitHubLink = !0,
                            this.logoSrc = "assets/public/images/JuiceShop_Logo.png",
                            this.scoreBoardVisible = !1,
                            this.shortKeyLang = "placeholder",
                            this.itemTotal = 0,
                            this.sidenavToggle = new a.o,
                            this.onToggleSidenav = ()=>{
                                this.sidenavToggle.emit()
                            }
                    }
                    ngOnInit() {
                        this.getLanguages(),
                            this.basketService.getItemTotal().subscribe(t=>this.itemTotal = t),
                            this.administrationService.getApplicationVersion().subscribe(t=>{
                                    t && (this.version = "v" + t)
                                }
                                , t=>console.log(t)),
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    if (t && t.application && t.application.name && (this.applicationName = t.application.name),
                                    t && t.application && (this.showGitHubLink = t.application.showGitHubLinks),
                                    t && t.application && t.application.logo) {
                                        let e = t.application.logo;
                                        "http" === e.substring(0, 4) && (e = decodeURIComponent(e.substring(e.lastIndexOf("/") + 1))),
                                            this.logoSrc = "assets/public/images/" + e
                                    }
                                }
                                , t=>console.log(t)),
                            localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "",
                            this.userService.getLoggedInState().subscribe(t=>{
                                    t ? this.getUserDetails() : this.userEmail = ""
                                }
                            ),
                            this.getScoreBoardStatus(),
                            this.ngZone.runOutsideAngular(()=>{
                                    this.io.socket().on("challenge solved", t=>{
                                            "scoreBoardChallenge" === t.key && (this.scoreBoardVisible = !0)
                                        }
                                    )
                                }
                            )
                    }
                    checkLanguage() {
                        if (this.cookieService.get("language")) {
                            const t = this.cookieService.get("language");
                            this.translate.use(t),
                                this.selectedLanguage = this.languages.find(e=>e.key === t),
                                this.shortKeyLang = this.languages.find(e=>e.key === t).shortKey
                        } else
                            this.changeLanguage("en"),
                                this.selectedLanguage = this.languages.find(t=>"en" === t.key),
                                this.shortKeyLang = this.languages.find(t=>"en" === t.key).shortKey
                    }
                    search(t) {
                        if (t) {
                            const e = {
                                queryParams: {
                                    q: t
                                }
                            };
                            this.ngZone.run(()=>this.router.navigate(["/search"], e))
                        } else
                            this.ngZone.run(()=>this.router.navigate(["/search"]))
                    }
                    getUserDetails() {
                        this.userService.whoAmI().subscribe(t=>{
                                this.userEmail = t.email
                            }
                            , t=>console.log(t))
                    }
                    isLoggedIn() {
                        return localStorage.getItem("token")
                    }
                    logout() {
                        this.userService.saveLastLoginIp().subscribe(t=>{
                                this.noop()
                            }
                            , t=>console.log(t)),
                            localStorage.removeItem("token"),
                            this.cookieService.delete("token", "/"),
                            sessionStorage.removeItem("bid"),
                            this.userService.isLoggedIn.next(!1),
                            this.ngZone.run(()=>this.router.navigate(["/"]))
                    }
                    changeLanguage(t) {
                        this.translate.use(t);
                        let e = new Date;
                        if (e.setFullYear(e.getFullYear() + 1),
                            this.cookieService.set("language", t, e, "/"),
                            this.languages.find(e=>e.key === t)) {
                            const e = this.languages.find(e=>e.key === t);
                            this.shortKeyLang = e.shortKey,
                                this.snackBar.open("Language has been changed to " + e.lang, "Force page reload", {
                                    duration: 5e3
                                }).onAction().subscribe(()=>{
                                        location.reload()
                                    }
                                )
                        }
                    }
                    getScoreBoardStatus() {
                        this.challengeService.find({
                            name: "Score Board"
                        }).subscribe(t=>{
                                this.ngZone.run(()=>{
                                        this.scoreBoardVisible = t[0].solved
                                    }
                                )
                            }
                            , t=>console.log(t))
                    }
                    goToProfilePage() {
                        window.location.replace("./profile")
                    }
                    noop() {}
                    getLanguages() {
                        this.langService.getLanguages().subscribe(t=>{
                                this.languages = t,
                                    this.checkLanguage()
                            }
                        )
                    }
                    isAccounting() {
                        const t = this.loginGuard.tokenDecode();
                        return t && t.data && "accounting" === t.data.role
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(ec),a.Qb(qa),a.Qb(b),a.Qb(D),a.Qb(a.A),a.Qb(r.a),a.Qb(S.b),a.Qb(g.e),a.Qb(Ye),a.Qb(Lc),a.Qb(I),a.Qb(T.a),a.Qb(V))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-navbar"]],
                        outputs: {
                            sidenavToggle: "sidenavToggle"
                        },
                        decls: 88,
                        vars: 45,
                        consts: [["color", "primary", "fxLayout", "column", "xmlns", "http://www.w3.org/1999/html", 1, "mat-elevation-z6"], ["fxLayout", "row"], ["mat-button", "", "aria-label", "Open Sidenav", "matTooltipPosition", "below", 2, "height", "48px", "width", "48px", 3, "matTooltip", "click"], ["mat-button", "", "routerLink", "/search", "aria-label", "Back to homepage", 1, "buttons", 2, "height", "60px"], [1, "logo", 3, "src", "alt"], ["fxHide.lt-sm", "", "fxShow", "", 2, "font-size", "x-large"], [1, "fill-remaining-space"], ["id", "searchQuery", "aria-label", "Click to search", 3, "onEnter"], ["searchControl", ""], ["mat-button", "", "fxHide.lt-md", "", "fxShow", "", "aria-label", "Show/hide account menu", "id", "navbarAccount", 1, "buttons", 2, "vertical-align", "middle", "height", "48px", 3, "matMenuTriggerFor"], [1, "material-icons"], ["userMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "/basket", "style", "height:48px;", "class", "buttons", "aria-label", "Show the shopping cart", 4, "ngIf"], ["mat-button", "", "aria-label", "Language selection menu", "matTooltipPosition", "below", 1, "buttons", 2, "height", "48px", "width", "48px", 3, "matMenuTriggerFor", "matTooltip"], ["fxHide.lt-md", "", "fxShow", ""], [3, "overlapTrigger"], ["menu", "matMenu"], ["class", "mat-menu-item", "style", "width: 240px;", 3, "value", "checked", "aria-label", "click", 4, "ngFor", "ngForOf"], ["privacySubMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Go to privacy policy page", 3, "routerLink"], ["translate", ""], ["mat-menu-item", "", "aria-label", "Go to data export page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to data subject page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to change password page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to two factor authentication page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to last login ip page", 3, "routerLink"], ["ordersSubMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page"], ["mat-menu-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click"], ["mat-button", "", "routerLink", "/basket", "aria-label", "Show the shopping cart", 1, "buttons", 2, "height", "48px"], [1, "fa-layers-counter", "fa-layers-top-right", "fa-3x", "warn-notification", 2, "font-size", "47px"], [1, "mat-menu-item", 2, "width", "240px", 3, "value", "checked", "aria-label", "click"], [2, "display", "inline-block", "width", "200px", "margin-left", "5px"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page"]],
                        template: function(t, e) {
                            if (1 & t) {
                                const t = a.Xb();
                                a.Wb(0, "mat-toolbar", 0),
                                    a.Wb(1, "mat-toolbar-row", 1),
                                    a.Wb(2, "button", 2),
                                    a.ec("click", (function() {
                                            return e.onToggleSidenav()
                                        }
                                    )),
                                    a.jc(3, "translate"),
                                    a.Wb(4, "mat-icon"),
                                    a.Jc(5, "menu"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(6, "button", 3),
                                    a.Rb(7, "img", 4),
                                    a.Wb(8, "span", 5),
                                    a.Jc(9),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Rb(10, "span", 6),
                                    a.Wb(11, "mat-search-bar", 7, 8),
                                    a.ec("onEnter", (function() {
                                            a.zc(t);
                                            const i = a.wc(12);
                                            return e.search(i.value)
                                        }
                                    )),
                                    a.Vb(),
                                    a.Wb(13, "button", 9),
                                    a.Wb(14, "i", 10),
                                    a.Jc(15, " account_circle "),
                                    a.Vb(),
                                    a.Wb(16, "span"),
                                    a.Jc(17),
                                    a.jc(18, "translate"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(19, "mat-menu", null, 11),
                                    a.Hc(21, Ec, 6, 3, "button", 12),
                                    a.Hc(22, Rc, 5, 1, "button", 13),
                                    a.Hc(23, Mc, 6, 3, "button", 14),
                                    a.Hc(24, Jc, 6, 4, "button", 15),
                                    a.Hc(25, Hc, 6, 4, "button", 16),
                                    a.Hc(26, Nc, 6, 3, "button", 17),
                                    a.Vb(),
                                    a.Hc(27, Fc, 8, 4, "button", 18),
                                    a.Wb(28, "button", 19),
                                    a.jc(29, "translate"),
                                    a.Wb(30, "mat-icon"),
                                    a.Jc(31, " language "),
                                    a.Vb(),
                                    a.Wb(32, "span", 20),
                                    a.Jc(33),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(34, "mat-menu", 21, 22),
                                    a.Hc(36, Uc, 5, 7, "mat-radio-button", 23),
                                    a.Vb(),
                                    a.Wb(37, "mat-menu", null, 24),
                                    a.Wb(39, "button", 25),
                                    a.Wb(40, "mat-icon"),
                                    a.Jc(41, " assignment "),
                                    a.Vb(),
                                    a.Wb(42, "span", 26),
                                    a.Jc(43, "TITLE_PRIVACY_POLICY"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(44, "button", 27),
                                    a.Wb(45, "mat-icon"),
                                    a.Jc(46, " get_app "),
                                    a.Vb(),
                                    a.Wb(47, "span", 26),
                                    a.Jc(48, "TITLE_REQUEST_DATA_EXPORT"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(49, "button", 28),
                                    a.Wb(50, "mat-icon"),
                                    a.Jc(51, " delete_forever "),
                                    a.Vb(),
                                    a.Wb(52, "span", 26),
                                    a.Jc(53, "DATA_SUBJECT_TITLE"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Rb(54, "mat-divider"),
                                    a.Wb(55, "button", 29),
                                    a.Wb(56, "mat-icon"),
                                    a.Jc(57, " edit "),
                                    a.Vb(),
                                    a.Wb(58, "span", 26),
                                    a.Jc(59, "TITLE_CHANGE_PASSWORD"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(60, "button", 30),
                                    a.Wb(61, "mat-icon"),
                                    a.Jc(62, " exposure_plus_2 "),
                                    a.Vb(),
                                    a.Wb(63, "span", 26),
                                    a.Jc(64, "TITLE_TWO_FACTOR_AUTH_CONFIG"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(65, "button", 31),
                                    a.Wb(66, "mat-icon"),
                                    a.Jc(67, " place "),
                                    a.Vb(),
                                    a.Wb(68, "span", 26),
                                    a.Jc(69, "LAST_LOGIN_IP"),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(70, "mat-menu", null, 32),
                                a.Wb(72, "button", 33),
                                a.Wb(73, "mat-icon"),
                                a.Jc(74, " archive "),
                                a.Vb(),
                                a.Wb(75, "span"),
                                a.Jc(76),
                                a.jc(77, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Wb(78, "button", 34),
                                a.Wb(79, "mat-icon"),
                                a.Jc(80, " autorenew "),
                                a.Vb(),
                                a.Wb(81, "span"),
                                a.Jc(82),
                                a.jc(83, "translate"),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(84, "mat-divider"),
                                a.Hc(85, jc, 6, 3, "button", 35),
                                a.Hc(86, Qc, 6, 3, "button", 36),
                                a.Hc(87, zc, 6, 3, "button", 37),
                                a.Vb(),
                                a.Vb(),
                                a.Vb()
                            }
                            if (2 & t) {
                                const t = a.wc(20)
                                    , i = a.wc(35);
                                a.Db(2),
                                    a.pc("matTooltip", a.kc(3, 29, "SIDENAV_HINT")),
                                    a.Db(5),
                                    a.pc("alt", e.applicationName),
                                    a.oc("src", e.logoSrc, a.Cc),
                                    a.Db(2),
                                    a.Lc(" ", e.applicationName, " "),
                                    a.Db(4),
                                    a.oc("matMenuTriggerFor", t),
                                    a.Db(4),
                                    a.Lc(" ", a.kc(18, 31, "ACCOUNT"), " "),
                                    a.Db(4),
                                    a.oc("ngIf", !e.isLoggedIn()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn() && e.isAccounting()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn()),
                                    a.Db(1),
                                    a.pc("matTooltip", a.kc(29, 33, "LANGUAGE_SEL_HINT")),
                                    a.oc("matMenuTriggerFor", i),
                                    a.Db(5),
                                    a.Lc(" ", e.shortKeyLang, " "),
                                    a.Db(1),
                                    a.oc("overlapTrigger", !0),
                                    a.Db(2),
                                    a.oc("ngForOf", e.languages),
                                    a.Db(3),
                                    a.oc("routerLink", a.sc(39, Gc)),
                                    a.Db(5),
                                    a.oc("routerLink", a.sc(40, qc)),
                                    a.Db(5),
                                    a.oc("routerLink", a.sc(41, Yc)),
                                    a.Db(6),
                                    a.oc("routerLink", a.sc(42, Kc)),
                                    a.Db(5),
                                    a.oc("routerLink", a.sc(43, Xc)),
                                    a.Db(5),
                                    a.oc("routerLink", a.sc(44, $c)),
                                    a.Db(11),
                                    a.Lc(" ", a.kc(77, 35, "LABEL_ORDER_HISTORY"), " "),
                                    a.Db(6),
                                    a.Lc(" ", a.kc(83, 37, "NAV_RECYCLE"), " "),
                                    a.Db(3),
                                    a.oc("ngIf", e.isLoggedIn()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn()),
                                    a.Db(1),
                                    a.oc("ngIf", e.isLoggedIn())
                            }
                        },
                        directives: [ic.a, p.d, ic.c, v.a, ye.a, we.a, S.c, E.b, Ac.b, Pc.c, Pc.d, P.l, P.k, Pc.a, g.a, Me.a, va.a],
                        pipes: [g.d],
                        styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}.mat-button[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}.logo[_ngcontent-%COMP%]{max-height:60px;width:auto}.avatar[_ngcontent-%COMP%]{background-repeat:no-repeat;border-radius:50%;display:inline-block;max-height:35px;max-width:35px;padding:0;pointer-events:none}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.language-select[_ngcontent-%COMP%]{margin-left:10px;width:11%}  .mat-select-value-text{font-size:15px}.user-info[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.flag-icon[_ngcontent-%COMP%]{margin-right:2px}[_nghost-%COMP%]     mat-form-field, [_nghost-%COMP%]     mat-icon{background:transparent!important}mat-search-bar[_ngcontent-%COMP%]{font-size:13px;margin-right:14px}.buttons[_ngcontent-%COMP%]{width:auto}@media screen and (max-width:959px){.buttons[_ngcontent-%COMP%]{width:48px}}[_nghost-%COMP%]     .mat-form-field-infix{max-width:250px!important;width:14vw!important}"]
                    }),
                    t
            }
        )();
        function tl(t, e) {
            1 & t && (a.Wb(0, "span", 2),
                a.Jc(1, "RESTART_REQUIRED"),
                a.Vb())
        }
        function el(t, e) {
            1 & t && (a.Wb(0, "span", 2),
                a.Jc(1, "RESET_HACKING_PROGRESS"),
                a.Vb())
        }
        function il(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-card", 1),
                    a.Rb(1, "mat-card-header"),
                    a.Wb(2, "mat-card-content"),
                    a.Wb(3, "span", 2),
                    a.Jc(4, "NOTIFICATION_SERVER_STARTED"),
                    a.Vb(),
                    a.Jc(5),
                    a.Wb(6, "span", 3),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().closeNotification()
                        }
                    )),
                    a.Jc(7, "X"),
                    a.Vb(),
                    a.Wb(8, "button", 4),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().clearProgress()
                        }
                    )),
                    a.Rb(9, "i", 5),
                    a.Hc(10, tl, 2, 0, "span", 6),
                    a.Hc(11, el, 2, 0, "span", 6),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = a.ic();
                a.Db(5),
                    a.Lc(": ", t.hackingProgress.autoRestoreMessage, ""),
                    a.Db(3),
                    a.oc("disabled", t.hackingProgress.cleared),
                    a.Db(2),
                    a.oc("ngIf", t.hackingProgress.cleared),
                    a.Db(1),
                    a.oc("ngIf", !t.hackingProgress.cleared)
            }
        }
        u.b.add(m.Y),
            u.a.watch();
        let al = (()=>{
                class t {
                    constructor(t, e, i, a, o, n) {
                        this.ngZone = t,
                            this.challengeService = e,
                            this.translate = i,
                            this.cookieService = a,
                            this.ref = o,
                            this.io = n,
                            this.hackingProgress = {}
                    }
                    ngOnInit() {
                        this.ngZone.runOutsideAngular(()=>{
                                this.io.socket().on("server started", ()=>{
                                        let t = this.cookieService.get("continueCode");
                                        t && this.challengeService.restoreProgress(encodeURIComponent(t)).subscribe(()=>{
                                                this.translate.get("AUTO_RESTORED_PROGRESS").subscribe(t=>{
                                                        this.hackingProgress.autoRestoreMessage = t
                                                    }
                                                    , t=>{
                                                        this.hackingProgress.autoRestoreMessage = t
                                                    }
                                                )
                                            }
                                            , t=>{
                                                console.log(t),
                                                    this.translate.get("AUTO_RESTORE_PROGRESS_FAILED", {
                                                        error: t
                                                    }).subscribe(t=>{
                                                            this.hackingProgress.autoRestoreMessage = t
                                                        }
                                                        , t=>{
                                                            this.hackingProgress.autoRestoreMessage = t
                                                        }
                                                    )
                                            }
                                        ),
                                            this.ref.detectChanges()
                                    }
                                )
                            }
                        )
                    }
                    closeNotification() {
                        this.hackingProgress.autoRestoreMessage = null
                    }
                    clearProgress() {
                        this.cookieService.delete("continueCode", "/"),
                            localStorage.removeItem("displayedDifficulties"),
                            localStorage.removeItem("showSolvedChallenges"),
                            localStorage.removeItem("showDisabledChallenges"),
                            localStorage.removeItem("showOnlyTutorialChallenges"),
                            localStorage.removeItem("displayedChallengeCategories"),
                            this.hackingProgress.cleared = !0
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(a.A),a.Qb(qa),a.Qb(g.e),a.Qb(r.a),a.Qb(a.h),a.Qb(Ye))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-server-started-notification"]],
                        decls: 1,
                        vars: 1,
                        consts: [["class", "container primary-notification mat-elevation-z4", 4, "ngIf"], [1, "container", "primary-notification", "mat-elevation-z4"], ["translate", ""], [2, "float", "right", "cursor", "pointer", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fas", "fa-trash"], ["translate", "", 4, "ngIf"]],
                        template: function(t, e) {
                            1 & t && a.Hc(0, il, 12, 4, "mat-card", 0),
                            2 & t && a.oc("ngIf", e.hackingProgress.autoRestoreMessage)
                        },
                        directives: [P.l, f.a, f.c, f.b, g.a, v.a],
                        styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}"]
                    }),
                    t
            }
        )()
            , ol = (()=>{
                class t {
                    constructor(t) {
                        this.http = t,
                            this.hostServer = "."
                    }
                    getCountryMapping() {
                        return this.http.get(this.hostServer + "/rest/country-mapping").pipe(Object(l.a)(t=>{
                                throw t
                            }
                        ))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.ac(n.b))
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac,
                        providedIn: "root"
                    }),
                    t
            }
        )();
        function nl(t, e) {
            if (1 & t && (a.Rb(0, "span"),
                a.jc(1, "lowercase")),
            2 & t) {
                const t = a.ic(2).$implicit;
                a.Gb("flag-icon flag-icon-", a.kc(1, 3, t.country.code), "")
            }
        }
        function rl(t, e) {
            1 & t && a.Rb(0, "i", 11)
        }
        function sl(t, e) {
            if (1 & t && (a.Wb(0, "span"),
                a.Jc(1),
                a.Vb()),
            2 & t) {
                const t = a.ic(2).$implicit;
                a.Db(1),
                    a.Lc(" ", t.country.name, " ")
            }
        }
        function cl(t, e) {
            if (1 & t && (a.Wb(0, "div"),
                a.Hc(1, nl, 2, 5, "span", 9),
                a.Hc(2, rl, 1, 0, "i", 10),
                a.Hc(3, sl, 2, 1, "span", 5),
                a.Rb(4, "br"),
                a.Vb()),
            2 & t) {
                const t = a.ic(2);
                a.Db(1),
                    a.oc("ngIf", "flag" === t.showCtfCountryDetailsInNotifications || "both" === t.showCtfCountryDetailsInNotifications),
                    a.Db(1),
                    a.oc("ngIf", "name" === t.showCtfCountryDetailsInNotifications),
                    a.Db(1),
                    a.oc("ngIf", "name" === t.showCtfCountryDetailsInNotifications || "both" === t.showCtfCountryDetailsInNotifications)
            }
        }
        function ll(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "mat-card", 2),
                    a.Wb(1, "div"),
                    a.Jc(2),
                    a.Wb(3, "span", 3),
                    a.ec("click", (function(i) {
                            a.zc(t);
                            const o = e.index;
                            return a.ic().closeNotification(o, i.shiftKey)
                        }
                    )),
                    a.Jc(4, "X"),
                    a.Vb(),
                    a.Vb(),
                    a.Rb(5, "br"),
                    a.Wb(6, "div", 4),
                    a.Hc(7, cl, 5, 3, "div", 5),
                    a.Rb(8, "i", 6),
                    a.Jc(9),
                    a.Wb(10, "button", 7),
                    a.ec("cbOnSuccess", (function() {
                            return e.$implicit.copied = !0
                        }
                    )),
                    a.Rb(11, "i", 8),
                    a.Wb(12, "span", 4),
                    a.Jc(13),
                    a.jc(14, "translate"),
                    a.Vb(),
                    a.Wb(15, "span", 4),
                    a.Jc(16),
                    a.jc(17, "translate"),
                    a.Vb(),
                    a.Vb(),
                    a.Vb(),
                    a.Vb()
            }
            if (2 & t) {
                const t = e.$implicit
                    , i = a.ic();
                a.Db(2),
                    a.Lc(" ", t.message, ""),
                    a.Db(4),
                    a.oc("hidden", !i.showCtfFlagsInNotifications),
                    a.Db(1),
                    a.oc("ngIf", "none" !== i.showCtfCountryDetailsInNotifications),
                    a.Db(2),
                    a.Lc(" ", t.flag, " "),
                    a.Db(1),
                    a.oc("cbContent", t.flag)("disabled", t.copied),
                    a.Db(2),
                    a.oc("hidden", !t.copied),
                    a.Db(1),
                    a.Kc(a.kc(14, 10, "COPY_SUCCESS")),
                    a.Db(2),
                    a.oc("hidden", t.copied),
                    a.Db(1),
                    a.Kc(a.kc(17, 12, "COPY_TO_CLIPBOARD"))
            }
        }
        u.b.add(m.s, m.q, m.g),
            u.a.watch();
        let bl = (()=>{
                class t {
                    constructor(t, e, i, a, o, n, r, s) {
                        this.ngZone = t,
                            this.configurationService = e,
                            this.challengeService = i,
                            this.countryMappingService = a,
                            this.translate = o,
                            this.cookieService = n,
                            this.ref = r,
                            this.io = s,
                            this.notifications = [],
                            this.showCtfFlagsInNotifications = !1,
                            this.showCtfCountryDetailsInNotifications = "none"
                    }
                    ngOnInit() {
                        this.ngZone.runOutsideAngular(()=>{
                                this.io.socket().on("challenge solved", t=>{
                                        t && t.challenge && (t.hidden || this.showNotification(t),
                                        t.isRestore || this.saveProgress(),
                                            this.io.socket().emit("notification received", t.flag))
                                    }
                                )
                            }
                        ),
                            this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                    t && t.ctf && (this.showCtfFlagsInNotifications = !!t.ctf.showFlagsInNotifications && t.ctf.showFlagsInNotifications,
                                        t.ctf.showCountryDetailsInNotifications ? (this.showCtfCountryDetailsInNotifications = t.ctf.showCountryDetailsInNotifications,
                                        "none" !== t.ctf.showCountryDetailsInNotifications && this.countryMappingService.getCountryMapping().subscribe(t=>{
                                                this.countryMap = t
                                            }
                                            , t=>console.log(t))) : this.showCtfCountryDetailsInNotifications = "none")
                                }
                            )
                    }
                    closeNotification(t, e=!1) {
                        e ? this.notifications = [] : this.notifications.splice(t, 1),
                            this.ref.detectChanges()
                    }
                    showNotification(t) {
                        this.translate.get("CHALLENGE_SOLVED", {
                            challenge: t.challenge
                        }).toPromise().then(t=>t, t=>t).then(e=>{
                                let i;
                                this.showCtfCountryDetailsInNotifications && "none" !== this.showCtfCountryDetailsInNotifications && (i = this.countryMap[t.key]),
                                    this.notifications.push({
                                        message: e,
                                        flag: t.flag,
                                        country: i,
                                        copied: !1
                                    }),
                                    this.ref.detectChanges()
                            }
                        )
                    }
                    saveProgress() {
                        this.challengeService.continueCode().subscribe(t=>{
                                if (!t)
                                    throw new Error("Received invalid continue code from the sever!");
                                let e = new Date;
                                e.setFullYear(e.getFullYear() + 1),
                                    this.cookieService.set("continueCode", t, e, "/")
                            }
                            , t=>console.log(t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(a.A),a.Qb(b),a.Qb(qa),a.Qb(ol),a.Qb(g.e),a.Qb(r.a),a.Qb(a.h),a.Qb(Ye))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-challenge-solved-notification"]],
                        decls: 2,
                        vars: 1,
                        consts: [[1, "container", "challenge-solved-toast", "mat-elevation-z4"], ["class", "accent-notification", 4, "ngFor", "ngForOf"], [1, "accent-notification"], [2, "float", "right", "cursor", "pointer", 3, "click"], [3, "hidden"], [4, "ngIf"], [1, "fas", "fa-flag-checkered"], ["ngxClipboard", "", "mat-raised-button", "", 3, "cbContent", "disabled", "cbOnSuccess"], ["aria-hidden", "true", 1, "fas", "fa-clipboard"], [3, "class", 4, "ngIf"], ["class", "fa fa-globe", 4, "ngIf"], [1, "fa", "fa-globe"]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Hc(1, ll, 18, 14, "mat-card", 1),
                                a.Vb()),
                            2 & t && (a.Db(1),
                                a.oc("ngForOf", e.notifications))
                        },
                        directives: [P.k, f.a, P.l, v.a, tc.a],
                        pipes: [g.d, P.i],
                        styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]
                    }),
                    t
            }
        )();
        function ul(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 4),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().startHackingInstructor()
                        }
                    )),
                    a.jc(1, "translate"),
                    a.Wb(2, "mat-icon"),
                    a.Jc(3, " school "),
                    a.Vb(),
                    a.Wb(4, "span", 5),
                    a.Jc(5, "BTN_GETTING_STARTED"),
                    a.Vb(),
                    a.Vb()
            }
            2 & t && a.oc("matTooltip", a.kc(1, 1, "SCORE_BOARD_HACKING_INSTRUCTOR"))
        }
        function dl(t, e) {
            if (1 & t) {
                const t = a.Xb();
                a.Wb(0, "button", 6),
                    a.ec("click", (function() {
                            return a.zc(t),
                                a.ic().closeWelcome()
                        }
                    )),
                    a.Wb(1, "mat-icon"),
                    a.Jc(2, " visibility_off "),
                    a.Vb(),
                    a.Wb(3, "span", 7),
                    a.Jc(4, "BTN_DISMISS"),
                    a.Vb(),
                    a.Vb()
            }
        }
        let ml = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.dialogRef = t,
                            this.configurationService = e,
                            this.cookieService = i,
                            this.title = "Welcome to OWASP Juice Shop",
                            this.message = "<p>Being a web application with a vast number of intended security vulnerabilities, the <strong>OWASP Juice Shop</strong> is supposed to be the opposite of a best practice or template application for web developers: It is an awareness, training, demonstration and exercise tool for security risks in modern web applications. The <strong>OWASP Juice Shop</strong> is an open-source project hosted by the non-profit <a href='https://owasp.org' target='_blank'>Open Web Application Security Project (OWASP)</a> and is developed and maintained by volunteers. Check out the link below for more information and documentation on the project.</p><h1><a href='https://owasp-juice.shop' target='_blank'>https://owasp-juice.shop</a></h1>",
                            this.showHackingInstructor = !0,
                            this.showDismissBtn = !0,
                            this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                    }
                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                t && t.application && t.application.welcomeBanner && (this.title = t.application.welcomeBanner.title,
                                    this.message = t.application.welcomeBanner.message),
                                t && t.application && (this.showHackingInstructor = t.hackingInstructor && t.hackingInstructor.isEnabled),
                                this.showHackingInstructor && t.challenges && t.challenges.restrictToTutorialsFirst && (this.dialogRef.disableClose = !0,
                                    this.showDismissBtn = !1)
                            }
                            , t=>console.log(t))
                    }
                    startHackingInstructor() {
                        this.closeWelcome(),
                            console.log('Starting instructions for challenge "Score Board"'),
                            i.e(5).then(i.bind(null, "s2oO")).then(t=>{
                                    t.startHackingInstructorFor("Score Board")
                                }
                            )
                    }
                    closeWelcome() {
                        this.dialogRef.close();
                        let t = new Date;
                        t.setFullYear(t.getFullYear() + 1),
                            this.cookieService.set(this.welcomeBannerStatusCookieKey, "dismiss", t, "/")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.g),a.Qb(b),a.Qb(r.a))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-welcome-banner"]],
                        decls: 8,
                        vars: 4,
                        consts: [[1, "mat-typography"], [1, "text-justify", 3, "innerHtml"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "close-dialog", "color", "primary", "aria-label", "Close Welcome Banner", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click"], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["mat-raised-button", "", "color", "primary", "aria-label", "Close Welcome Banner", 1, "close-dialog", 3, "click"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""]],
                        template: function(t, e) {
                            1 & t && (a.Wb(0, "div", 0),
                                a.Wb(1, "h1"),
                                a.Wb(2, "span"),
                                a.Jc(3),
                                a.Vb(),
                                a.Vb(),
                                a.Rb(4, "div", 1),
                                a.Wb(5, "div"),
                                a.Hc(6, ul, 6, 3, "button", 2),
                                a.Hc(7, dl, 5, 0, "button", 3),
                                a.Vb(),
                                a.Vb()),
                            2 & t && (a.Db(3),
                                a.Kc(e.title),
                                a.Db(1),
                                a.oc("innerHtml", e.message, a.Ac),
                                a.Db(2),
                                a.oc("ngIf", e.showHackingInstructor),
                                a.Db(1),
                                a.oc("ngIf", e.showDismissBtn))
                        },
                        directives: [P.l, v.a, ye.a, we.a, E.b, g.a],
                        pipes: [g.d],
                        styles: [".text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}[_nghost-%COMP%]     h1 a{font-size:20px}[_nghost-%COMP%]     strong{font-style:italic}"]
                    }),
                    t
            }
        )()
            , hl = (()=>{
                class t {
                    constructor(t, e, i) {
                        this.dialog = t,
                            this.configurationService = e,
                            this.cookieService = i,
                            this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                    }
                    ngOnInit() {
                        "dismiss" !== this.cookieService.get(this.welcomeBannerStatusCookieKey) && this.configurationService.getApplicationConfiguration().subscribe(t=>{
                                t && t.application && t.application.welcomeBanner && !t.application.welcomeBanner.showOnFirstStart || this.dialog.open(ml, {
                                    minWidth: "320px",
                                    width: "35%",
                                    position: {
                                        top: "50px"
                                    }
                                })
                            }
                            , t=>console.log(t))
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(Ae.b),a.Qb(b),a.Qb(r.a))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-welcome"]],
                        decls: 1,
                        vars: 0,
                        template: function(t, e) {
                            1 & t && a.Rb(0, "div")
                        },
                        styles: [".welcome-style[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;max-width:50%;min-width:320px}"]
                    }),
                    t
            }
        )()
            , pl = (()=>{
                class t {
                    constructor(t, e) {
                        this._document = t,
                            this.translate = e,
                            this.translate.setDefaultLang("en")
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)(a.Qb(P.d),a.Qb(g.e))
                }
                    ,
                    t.\u0275cmp = a.Kb({
                        type: t,
                        selectors: [["app-root"]],
                        decls: 10,
                        vars: 0,
                        consts: [[1, "mat-typography"], ["fullscreen", ""], ["mode", "over"], ["sidenav", ""], [3, "sidenavToggle"]],
                        template: function(t, e) {
                            if (1 & t) {
                                const t = a.Xb();
                                a.Wb(0, "div", 0),
                                    a.Wb(1, "mat-sidenav-container", 1),
                                    a.Wb(2, "mat-sidenav", 2, 3),
                                    a.Wb(4, "sidenav", 4),
                                    a.ec("sidenavToggle", (function() {
                                            return a.zc(t),
                                                a.wc(3).toggle()
                                        }
                                    )),
                                    a.Vb(),
                                    a.Vb(),
                                    a.Wb(5, "app-navbar", 4),
                                    a.ec("sidenavToggle", (function() {
                                            return a.zc(t),
                                                a.wc(3).toggle()
                                        }
                                    )),
                                    a.Vb(),
                                    a.Rb(6, "app-server-started-notification"),
                                    a.Rb(7, "app-challenge-solved-notification"),
                                    a.Rb(8, "app-welcome"),
                                    a.Rb(9, "router-outlet"),
                                    a.Vb(),
                                    a.Vb()
                            }
                        },
                        directives: [Ro.b, Ro.a, Tc, Zc, al, bl, hl, S.f],
                        styles: [".mat-sidenav[_ngcontent-%COMP%]{width:280px}"]
                    }),
                    t
            }
        )()
            , fl = (()=>{
                class t {
                    intercept(t, e) {
                        return localStorage.getItem("token") && (t = t.clone({
                            setHeaders: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                            }
                        })),
                        localStorage.getItem("email") && (t = t.clone({
                            setHeaders: {
                                "X-User-Email": String(localStorage.getItem("email"))
                            }
                        })),
                            e.handle(t)
                    }
                }
                return t.\u0275fac = function(e) {
                    return new (e || t)
                }
                    ,
                    t.\u0275prov = a.Mb({
                        token: t,
                        factory: t.\u0275fac
                    }),
                    t
            }
        )();
        var gl = i("YUcS")
            , vl = i("R1ws")
            , Cl = i("TU8p")
            , wl = i("rDax");
        function yl(t) {
            return new Zs.a(t,"./assets/i18n/",".json")
        }
        let Dl = (()=>{
                class t {
                    constructor(t, e) {
                        t.getApplicationConfiguration().subscribe(t=>{
                                e.getContainerElement().classList.add(t.application.theme + "-theme")
                            }
                        )
                    }
                }
                return t.\u0275mod = a.Ob({
                    type: t,
                    bootstrap: [pl]
                }),
                    t.\u0275inj = a.Nb({
                        factory: function(e) {
                            return new (e || t)(a.ac(b),a.ac(wl.e))
                        },
                        providers: [{
                            provide: n.a,
                            useClass: fl,
                            multi: !0
                        }, Qe, b, ec, Ft, Bt, D, ie, Tt, Ot, bi, Pe, na, ct, pa, V, qa, r.a, _, I, mn, k, O, Bo, fa, Ke, un, er, dn, Hs],
                        imports: [[o.a, $s, g.c.forRoot({
                            loader: {
                                provide: g.b,
                                useFactory: yl,
                                deps: [n.b]
                            }
                        }), oe.c.forRoot(), gl.a, n.c, s.u, vl.b, qt.a, Jo.b, Et.b, ra.b, tc.b, Ya.b, ic.b, we.b, At.e, ne.b, v.b, Ro.d, A.p, ze.b, f.e, Pt.c, ui.b, Ae.f, Me.b, Ha.c, re.i, Je.a, Ka.b, ye.b, Pc.b, ac.c, Xa.b, Eo.c, Xe.b, Ac.a, Cl.a, va.c, T.b, ae.b]]
                    }),
                    t
            }
        )();
        Object(a.U)(),
            o.g().bootstrapModule(Dl).catch(t=>console.log(t))
    }
}, [[0, 0, 6]]]);
