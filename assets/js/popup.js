// popup for post gallery
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(k, e) {
    "use strict";
    var t = []
      , N = k.document
      , r = Object.getPrototypeOf
      , s = t.slice
      , m = t.concat
      , l = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , g = n.hasOwnProperty
      , a = g.toString
      , c = a.call(Object)
      , v = {}
      , b = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , y = function(e) {
        return null != e && e === e.window
    }
      , u = {
        type: !0,
        src: !0,
        noModule: !0
    };
    function x(e, t, n) {
        var r, i = (t = t || N).createElement("script");
        if (i.text = e,
        n)
            for (r in u)
                n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var C = function(e, t) {
        return new C.fn.init(e,t)
    }
      , d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function f(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !b(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    },
    C.extend = C.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || b(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (c && r && (C.isPlainObject(r) || (i = Array.isArray(r))) ? (o = i ? (i = !1,
                    n && Array.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {},
                    a[t] = C.extend(c, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e) || (t = r(e)) && ("function" != typeof (n = g.call(t, "constructor") && t.constructor) || a.call(n) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            x(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (f(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (f(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (f(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return m.apply([], a)
        },
        guid: 1,
        support: v
    }),
    "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
    C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        var e, p, x, o, i, h, d, m, w, l, c, _, k, a, N, g, s, u, v, C = "sizzle" + 1 * new Date, b = n.document, E = 0, r = 0, f = ae(), y = ae(), S = ae(), T = function(e, t) {
            return e === t && (c = !0),
            0
        }, L = {}.hasOwnProperty, t = [], A = t.pop, M = t.push, j = t.push, z = t.slice, D = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", q = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", B = "\\[" + q + "*(" + H + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + q + "*\\]", R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)", P = new RegExp(q + "+","g"), O = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$","g"), $ = new RegExp("^" + q + "*," + q + "*"), F = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"), W = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]","g"), U = new RegExp(R), X = new RegExp("^" + H + "$"), K = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + B),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)","i"),
            bool: new RegExp("^(?:" + I + ")$","i"),
            needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)","i")
        }, Z = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, V = /^[^{]+\{\s*\[native \w/, Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)","ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, re = function() {
            _()
        }, ie = be(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            j.apply(t = z.call(b.childNodes), b.childNodes),
            t[b.childNodes.length].nodeType
        } catch (n) {
            j = {
                apply: t.length ? function(e, t) {
                    M.apply(e, z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, n, r) {
            var i, o, a, s, l, c, u, d = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
                return n;
            if (!r && ((t ? t.ownerDocument || t : b) !== k && _(t),
            t = t || k,
            N)) {
                if (11 !== f && (l = Y.exec(e)))
                    if (i = l[1]) {
                        if (9 === f) {
                            if (!(a = t.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (d && (a = d.getElementById(i)) && v(t, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (l[2])
                            return j.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = l[3]) && p.getElementsByClassName && t.getElementsByClassName)
                            return j.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (p.qsa && !S[e + " "] && (!g || !g.test(e))) {
                    if (1 !== f)
                        d = t,
                        u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = C),
                        o = (c = h(e)).length; o--; )
                            c[o] = "#" + s + " " + ve(c[o]);
                        u = c.join(","),
                        d = G.test(e) && me(t.parentNode) || t
                    }
                    if (u)
                        try {
                            return j.apply(n, d.querySelectorAll(u)),
                            n
                        } catch (e) {} finally {
                            s === C && t.removeAttribute("id")
                        }
                }
            }
            return m(e.replace(O, "$1"), t, n, r)
        }
        function ae() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function se(e) {
            return e[C] = !0,
            e
        }
        function le(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ce(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function ue(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function fe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function pe(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function he(a) {
            return se(function(o) {
                return o = +o,
                se(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in p = oe.support = {},
        i = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        _ = oe.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : b;
            return r !== k && 9 === r.nodeType && r.documentElement && (a = (k = r).documentElement,
            N = !i(k),
            b !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)),
            p.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            p.getElementsByTagName = le(function(e) {
                return e.appendChild(k.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            p.getElementsByClassName = V.test(k.getElementsByClassName),
            p.getById = le(function(e) {
                return a.appendChild(e).id = C,
                !k.getElementsByName || !k.getElementsByName(C).length
            }),
            p.getById ? (x.filter.ID = function(e) {
                var t = e.replace(J, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var n = e.replace(J, ee);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = p.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            x.find.CLASS = p.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && N)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            g = [],
            (p.qsa = V.test(k.querySelectorAll)) && (le(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + q + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || g.push("\\[" + q + "*(?:value|" + I + ")"),
                e.querySelectorAll("[id~=" + C + "-]").length || g.push("~="),
                e.querySelectorAll(":checked").length || g.push(":checked"),
                e.querySelectorAll("a#" + C + "+*").length || g.push(".#.+[+~]")
            }),
            le(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && g.push("name" + q + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (p.matchesSelector = V.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function(e) {
                p.disconnectedMatch = u.call(e, "*"),
                u.call(e, "[s!='']:x"),
                s.push("!=", R)
            }),
            g = g.length && new RegExp(g.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = V.test(a.compareDocumentPosition),
            v = t || V.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            T = t ? function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === b && v(b, e) ? -1 : t === k || t.ownerDocument === b && v(b, t) ? 1 : l ? D(l, e) - D(l, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return c = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === k ? -1 : t === k ? 1 : i ? -1 : o ? 1 : l ? D(l, e) - D(l, t) : 0;
                if (i === o)
                    return ue(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (; a[r] === s[r]; )
                    r++;
                return r ? ue(a[r], s[r]) : a[r] === b ? -1 : s[r] === b ? 1 : 0
            }
            ),
            k
        }
        ,
        oe.matches = function(e, t) {
            return oe(e, null, null, t)
        }
        ,
        oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== k && _(e),
            t = t.replace(W, "='$1']"),
            p.matchesSelector && N && !S[t + " "] && (!s || !s.test(t)) && (!g || !g.test(t)))
                try {
                    var n = u.call(e, t);
                    if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < oe(t, k, null, [e]).length
        }
        ,
        oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== k && _(e),
            v(e, t)
        }
        ,
        oe.attr = function(e, t) {
            (e.ownerDocument || e) !== k && _(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && L.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== r ? r : p.attributes || !N ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        oe.escape = function(e) {
            return (e + "").replace(te, ne)
        }
        ,
        oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        oe.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (c = !p.detectDuplicates,
            l = !p.sortStable && e.slice(0),
            e.sort(T),
            c) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return l = null,
            e
        }
        ,
        o = oe.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (x = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(J, ee),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(J, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(J, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = f[e + " "];
                    return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && f(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = oe.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(P, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, m, g) {
                    var v = "nth" !== h.slice(0, 3)
                      , b = "last" !== h.slice(-4)
                      , y = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, l, c = v !== b ? "nextSibling" : "previousSibling", u = e.parentNode, d = y && e.nodeName.toLowerCase(), f = !n && !y, p = !1;
                        if (u) {
                            if (v) {
                                for (; c; ) {
                                    for (a = e; a = a[c]; )
                                        if (y ? a.nodeName.toLowerCase() === d : 1 === a.nodeType)
                                            return !1;
                                    l = c = "only" === h && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [b ? u.firstChild : u.lastChild],
                            b && f) {
                                for (p = (s = (r = (i = (o = (a = u)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === E && r[1]) && r[2],
                                a = s && u.childNodes[s]; a = ++s && a && a[c] || (p = s = 0) || l.pop(); )
                                    if (1 === a.nodeType && ++p && a === e) {
                                        i[h] = [E, s, p];
                                        break
                                    }
                            } else if (f && (p = s = (r = (i = (o = (a = e)[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === E && r[1]),
                            !1 === p)
                                for (; (a = ++s && a && a[c] || (p = s = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[C] || (a[C] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [E, p]),
                                a !== e)); )
                                    ;
                            return (p -= g) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; )
                            e[n = D(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: se(function(e) {
                    var r = []
                      , i = []
                      , s = d(e.replace(O, "$1"));
                    return s[C] ? se(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; )
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: se(function(t) {
                    return function(e) {
                        return 0 < oe(t, e).length
                    }
                }),
                contains: se(function(t) {
                    return t = t.replace(J, ee),
                    function(e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),
                lang: se(function(n) {
                    return X.test(n || "") || oe.error("unsupported lang: " + n),
                    n = n.replace(J, ee).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return Z.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = fe(e);
        function ge() {}
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var l = e.dir
              , c = e.next
              , u = c || l
              , d = t && "parentNode" === u
              , f = r++;
            return e.first ? function(e, t, n) {
                for (; e = e[l]; )
                    if (1 === e.nodeType || d)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [E, f];
                if (n) {
                    for (; e = e[l]; )
                        if ((1 === e.nodeType || d) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[l]; )
                        if (1 === e.nodeType || d)
                            if (i = (o = e[C] || (e[C] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            c && c === e.nodeName.toLowerCase())
                                e = e[l] || e;
                            else {
                                if ((r = i[u]) && r[0] === E && r[1] === f)
                                    return a[2] = r[2];
                                if ((i[u] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function ye(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function xe(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                c && t.push(s)));
            return a
        }
        function we(p, h, m, g, v, e) {
            return g && !g[C] && (g = we(g)),
            v && !v[C] && (v = we(v, e)),
            se(function(e, t, n, r) {
                var i, o, a, s = [], l = [], c = t.length, u = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        oe(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), d = !p || !e && h ? u : xe(u, s, p, n, r), f = m ? v || (e ? p : c || g) ? [] : t : d;
                if (m && m(d, f, n, r),
                g)
                    for (i = xe(f, l),
                    g(i, [], n, r),
                    o = i.length; o--; )
                        (a = i[o]) && (f[l[o]] = !(d[l[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [],
                            o = f.length; o--; )
                                (a = f[o]) && i.push(d[o] = a);
                            v(null, f = [], i, r)
                        }
                        for (o = f.length; o--; )
                            (a = f[o]) && -1 < (i = v ? D(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    f = xe(f === t ? f.splice(c, f.length) : f),
                    v ? v(null, t, f, r) : j.apply(t, f)
            })
        }
        function _e(e) {
            for (var i, t, n, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = be(function(e) {
                return e === i
            }, a, !0), c = be(function(e) {
                return -1 < D(i, e)
            }, a, !0), u = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : c(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = x.relative[e[s].type])
                    u = [be(ye(u), t)];
                else {
                    if ((t = x.filter[e[s].type].apply(null, e[s].matches))[C]) {
                        for (n = ++s; n < r && !x.relative[e[n].type]; n++)
                            ;
                        return we(1 < s && ye(u), 1 < s && ve(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(O, "$1"), t, s < n && _e(e.slice(s, n)), n < r && _e(e = e.slice(n)), n < r && ve(e))
                    }
                    u.push(t)
                }
            return ye(u)
        }
        return ge.prototype = x.filters = x.pseudos,
        x.setFilters = new ge,
        h = oe.tokenize = function(e, t) {
            var n, r, i, o, a, s, l, c = y[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (a = e,
            s = [],
            l = x.preFilter; a; ) {
                for (o in n && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = F.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(O, " ")
                }),
                a = a.slice(n.length)),
                x.filter)
                    !(r = K[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? oe.error(e) : y(e, s).slice(0)
        }
        ,
        d = oe.compile = function(e, t) {
            var n, g, v, b, y, r, i = [], o = [], a = S[e + " "];
            if (!a) {
                for (t || (t = h(e)),
                n = t.length; n--; )
                    (a = _e(t[n]))[C] ? i.push(a) : o.push(a);
                (a = S(e, (g = o,
                v = i,
                b = 0 < v.length,
                y = 0 < g.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, l = 0, c = "0", u = e && [], d = [], f = w, p = e || y && x.find.TAG("*", i), h = E += null == f ? 1 : Math.random() || .1, m = p.length;
                    for (i && (w = t === k || t || i); c !== m && null != (o = p[c]); c++) {
                        if (y && o) {
                            for (a = 0,
                            t || o.ownerDocument === k || (_(o),
                            n = !N); s = g[a++]; )
                                if (s(o, t || k, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (E = h)
                        }
                        b && ((o = !s && o) && l--,
                        e && u.push(o))
                    }
                    if (l += c,
                    b && c !== l) {
                        for (a = 0; s = v[a++]; )
                            s(u, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--; )
                                    u[c] || d[c] || (d[c] = A.call(r));
                            d = xe(d)
                        }
                        j.apply(r, d),
                        i && !e && 0 < d.length && 1 < l + v.length && oe.uniqueSort(r)
                    }
                    return i && (E = h,
                    w = f),
                    u
                }
                ,
                b ? se(r) : r))).selector = e
            }
            return a
        }
        ,
        m = oe.select = function(e, t, n, r) {
            var i, o, a, s, l, c = "function" == typeof e && e, u = !r && h(e = c.selector || e);
            if (n = n || [],
            1 === u.length) {
                if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && N && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(J, ee), t) || [])[0]))
                        return n;
                    c && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = K.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !x.relative[s = a.type]); )
                    if ((l = x.find[s]) && (r = l(a.matches[0].replace(J, ee), G.test(o[0].type) && me(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && ve(o)))
                            return j.apply(n, r),
                            n;
                        break
                    }
            }
            return (c || d(e, u))(r, t, !N, n, !t || G.test(e) && me(t.parentNode) || t),
            n
        }
        ,
        p.sortStable = C.split("").sort(T).join("") === C,
        p.detectDuplicates = !!c,
        _(),
        p.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        p.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(I, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        oe
    }(k);
    C.find = p,
    C.expr = p.selectors,
    C.expr[":"] = C.expr.pseudos,
    C.uniqueSort = C.unique = p.uniqueSort,
    C.text = p.getText,
    C.isXMLDoc = p.isXML,
    C.contains = p.contains,
    C.escapeSelector = p.escape;
    var h = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && C(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , _ = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , E = C.expr.match.needsContext;
    function S(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function L(e, n, r) {
        return b(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : C.filter(n, e, r)
    }
    C.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    C.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(C(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (C.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                C.find(e, i[t], n);
            return 1 < r ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(L(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(L(this, e || [], !0))
        },
        is: function(e) {
            return !!L(this, "string" == typeof e && E.test(e) ? C(e) : e || [], !1).length
        }
    });
    var A, M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || A,
        "string" != typeof e)
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !r[1] && t)
            return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (r[1]) {
            if (t = t instanceof C ? t[0] : t,
            C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : N, !0)),
            T.test(r[1]) && C.isPlainObject(t))
                for (r in t)
                    b(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
        }
        return (i = N.getElementById(r[2])) && (this[0] = i,
        this.length = 1),
        this
    }
    ).prototype = C.fn,
    A = C(N);
    var j = /^(?:parents|prev(?:Until|All))/
      , z = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function D(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && C(e);
            if (!E.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(C(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    C.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _(e.firstChild)
        },
        contents: function(e) {
            return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e),
            C.merge([], e.childNodes))
        }
    }, function(r, i) {
        C.fn[r] = function(e, t) {
            var n = C.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = C.filter(t, n)),
            1 < this.length && (z[r] || C.uniqueSort(n),
            j.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var I = /[^\x20\t\r\n\f]+/g;
    function q(e) {
        return e
    }
    function H(e) {
        throw e
    }
    function B(e, t, n, r) {
        var i;
        try {
            e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        C.each(e.match(I) || [], function(e, t) {
            n[t] = !0
        }),
        n) : C.extend({}, r);
        var i, t, o, a, s = [], l = [], c = -1, u = function() {
            for (a = a || r.once,
            o = i = !0; l.length; c = -1)
                for (t = l.shift(); ++c < s.length; )
                    !1 === s[c].apply(t[0], t[1]) && r.stopOnFalse && (c = s.length,
                    t = !1);
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, d = {
            add: function() {
                return s && (t && !i && (c = s.length - 1,
                l.push(t)),
                function n(e) {
                    C.each(e, function(e, t) {
                        b(t) ? r.unique && d.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && u()),
                this
            },
            remove: function() {
                return C.each(arguments, function(e, t) {
                    for (var n; -1 < (n = C.inArray(t, s, n)); )
                        s.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < C.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = l = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = l = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                l.push(t),
                i || u()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return d
    }
    ,
    C.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return C.Deferred(function(r) {
                        C.each(o, function(e, t) {
                            var n = b(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && b(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var l = 0;
                    function c(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < l)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    b(t) ? s ? t.call(e, c(l, o, q, s), c(l, o, H, s)) : (l++,
                                    t.call(e, c(l, o, q, s), c(l, o, H, s), c(l, o, q, o.notifyWith))) : (a !== q && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= i + 1 && (a !== H && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()),
                            k.setTimeout(t))
                        }
                    }
                    return C.Deferred(function(e) {
                        o[0][3].add(c(0, e, b(r) ? r : q, e.notifyWith)),
                        o[1][3].add(c(0, e, b(t) ? t : q)),
                        o[2][3].add(c(0, e, b(n) ? n : H))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? C.extend(e, a) : a
                }
            }
              , s = {};
            return C.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = C.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (B(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || b(i[t] && i[t].then)))
                return o.then();
            for (; t--; )
                B(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        k.console && k.console.warn && e && R.test(e.name) && k.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    C.readyException = function(e) {
        k.setTimeout(function() {
            throw e
        })
    }
    ;
    var P = C.Deferred();
    function O() {
        N.removeEventListener("DOMContentLoaded", O),
        k.removeEventListener("load", O),
        C.ready()
    }
    C.fn.ready = function(e) {
        return P.then(e).catch(function(e) {
            C.readyException(e)
        }),
        this
    }
    ,
    C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || P.resolveWith(N, [C]))
        }
    }),
    C.ready.then = P.then,
    "complete" === N.readyState || "loading" !== N.readyState && !N.documentElement.doScroll ? k.setTimeout(C.ready) : (N.addEventListener("DOMContentLoaded", O),
    k.addEventListener("load", O));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , l = e.length
          , c = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        b(r) || (a = !0),
        c && (t = a ? (t.call(e, r),
        null) : (c = t,
        function(e, t, n) {
            return c.call(C(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
      , F = /^-ms-/
      , W = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(F, "ms-").replace(W, U)
    }
    var K = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Z() {
        this.expando = C.expando + Z.uid++
    }
    Z.uid = 1,
    Z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(I) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || C.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t)
        }
    };
    var Q = new Z
      , V = new Z
      , Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , G = /[A-Z]/g;
    function J(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(G, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Y.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                V.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return V.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return V.access(e, t, n)
        },
        removeData: function(e, t) {
            V.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    C.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n)
                return "object" == typeof n ? this.each(function() {
                    V.set(this, n)
                }) : $(this, function(e) {
                    var t;
                    if (o && void 0 === e) {
                        if (void 0 !== (t = V.get(o, n)))
                            return t;
                        if (void 0 !== (t = J(o, n)))
                            return t
                    } else
                        this.each(function() {
                            V.set(this, n, e)
                        })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = V.get(o),
            1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--; )
                    a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                    J(o, r, i[r]));
                Q.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                V.remove(this, e)
            })
        }
    }),
    C.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Q.get(e, t),
                n && (!r || Array.isArray(n) ? r = Q.access(e, t, C.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = C._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                C.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = C.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
    }
      , ie = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function oe(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return C.css(e, t, "")
        }
        , l = s(), c = n && n[3] || (C.cssNumber[t] ? "" : "px"), u = (C.cssNumber[t] || "px" !== c && +l) && te.exec(C.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; a--; )
                C.style(e, t, u + c),
                (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0),
                u /= o;
            u *= 2,
            C.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        i = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = c,
        r.start = u,
        r.end = i)),
        i
    }
    var ae = {};
    function se(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style && (n = r.style.display,
            t ? ("none" === n && (i[o] = Q.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && re(r) && (i[o] = (d = c = l = void 0,
            c = (s = r).ownerDocument,
            u = s.nodeName,
            (d = ae[u]) || (l = c.body.appendChild(c.createElement(u)),
            d = C.css(l, "display"),
            l.parentNode.removeChild(l),
            "none" === d && (d = "block"),
            ae[u] = d)))) : "none" !== n && (i[o] = "none",
            Q.set(r, "display", n)));
        var s, l, c, u, d;
        for (o = 0; o < a; o++)
            null != i[o] && (e[o].style.display = i[o]);
        return e
    }
    C.fn.extend({
        show: function() {
            return se(this, !0)
        },
        hide: function() {
            return se(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i
      , ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , ue = /^$|^module$|\/(?:java|ecma)script/i
      , de = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function fe(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && S(e, t) ? C.merge([e], n) : n
    }
    function pe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    de.optgroup = de.option,
    de.tbody = de.tfoot = de.colgroup = de.caption = de.thead,
    de.th = de.td;
    var he, me, ge = /<|&#?\w+;/;
    function ve(e, t, n, r, i) {
        for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === w(o))
                    C.merge(f, o.nodeType ? [o] : o);
                else if (ge.test(o)) {
                    for (a = a || d.appendChild(t.createElement("div")),
                    s = (ce.exec(o) || ["", ""])[1].toLowerCase(),
                    l = de[s] || de._default,
                    a.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                    u = l[0]; u--; )
                        a = a.lastChild;
                    C.merge(f, a.childNodes),
                    (a = d.firstChild).textContent = ""
                } else
                    f.push(t.createTextNode(o));
        for (d.textContent = "",
        p = 0; o = f[p++]; )
            if (r && -1 < C.inArray(o, r))
                i && i.push(o);
            else if (c = C.contains(o.ownerDocument, o),
            a = fe(d.appendChild(o), "script"),
            c && pe(a),
            n)
                for (u = 0; o = a[u++]; )
                    ue.test(o.type || "") && n.push(o);
        return d
    }
    he = N.createDocumentFragment().appendChild(N.createElement("div")),
    (me = N.createElement("input")).setAttribute("type", "radio"),
    me.setAttribute("checked", "checked"),
    me.setAttribute("name", "t"),
    he.appendChild(me),
    v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked,
    he.innerHTML = "<textarea>x</textarea>",
    v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue;
    var be = N.documentElement
      , ye = /^key/
      , xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , we = /^([^.]*)(?:\.(.+)|)/;
    function _e() {
        return !0
    }
    function ke() {
        return !1
    }
    function Ne() {
        try {
            return N.activeElement
        } catch (e) {}
    }
    function Ce(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ce(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = ke;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return C().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = C.guid++)),
        e.each(function() {
            C.event.add(this, t, i, r, n)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, l, c, u, d, f, p, h, m, g = Q.get(t);
            if (g)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && C.find.matchesSelector(be, i),
                n.guid || (n.guid = C.guid++),
                (l = g.events) || (l = g.events = {}),
                (a = g.handle) || (a = g.handle = function(e) {
                    return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(I) || [""]).length; c--; )
                    p = m = (s = we.exec(e[c]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (d = C.event.special[p] || {},
                    p = (i ? d.delegateType : d.bindType) || p,
                    d = C.event.special[p] || {},
                    u = C.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && C.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (f = l[p]) || ((f = l[p] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(p, a)),
                    d.add && (d.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    C.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, c, u, d, f, p, h, m, g = Q.hasData(e) && Q.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--; )
                    if (p = m = (s = we.exec(t[c]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = C.event.special[p] || {},
                        f = l[p = (r ? d.delegateType : d.bindType) || p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = f.length; o--; )
                            u = f[o],
                            !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || C.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            C.event.remove(e, p + t[c], n, r, !0);
                C.isEmptyObject(l) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = C.event.fix(e), l = new Array(arguments.length), c = (Q.get(this, "events") || {})[s.type] || [], u = C.event.special[s.type] || {};
            for (l[0] = s,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (s.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (a = C.event.handlers.call(this, s, c),
                t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < l; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < C(i, this).index(c) : C.find(i, this, null, [c]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: c,
                            handlers: o
                        })
                    }
            return c = this,
            l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ne() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ne() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && S(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return S(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    C.Event = function(e, t) {
        if (!(this instanceof C.Event))
            return new C.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? _e : ke,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && C.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[C.expando] = !0
    }
    ,
    C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: ke,
        isPropagationStopped: ke,
        isImmediatePropagationStopped: ke,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = _e,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = _e,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = _e,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && xe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp),
    C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        C.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    C.fn.extend({
        on: function(e, t, n, r) {
            return Ce(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ce(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = ke),
                this.each(function() {
                    C.event.remove(this, e, n, t)
                });
            for (i in e)
                this.off(i, t, e[i]);
            return this
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Se = /<script|<style|<link/i
      , Te = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Ae(e, t) {
        return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }
    function Me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function ze(e, t) {
        var n, r, i, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
            a = Q.set(t, o),
            c = o.events))
                for (i in delete a.handle,
                a.events = {},
                c)
                    for (n = 0,
                    r = c[i].length; n < r; n++)
                        C.event.add(t, i, c[i][n]);
            V.hasData(e) && (s = V.access(e),
            l = C.extend({}, s),
            V.set(t, l))
        }
    }
    function De(n, r, i, o) {
        r = m.apply([], r);
        var e, t, a, s, l, c, u = 0, d = n.length, f = d - 1, p = r[0], h = b(p);
        if (h || 1 < d && "string" == typeof p && !v.checkClone && Te.test(p))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = p.call(this, e, t.html())),
                De(t, r, i, o)
            });
        if (d && (t = (e = ve(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = C.map(fe(e, "script"), Me)).length; u < d; u++)
                l = e,
                u !== f && (l = C.clone(l, !0, !0),
                s && C.merge(a, fe(l, "script"))),
                i.call(n[u], l, u);
            if (s)
                for (c = a[a.length - 1].ownerDocument,
                C.map(a, je),
                u = 0; u < s; u++)
                    l = a[u],
                    ue.test(l.type || "") && !Q.access(l, "globalEval") && C.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : x(l.textContent.replace(Le, ""), c, l))
        }
        return n
    }
    function Ie(e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || C.cleanData(fe(r)),
            r.parentNode && (n && C.contains(r.ownerDocument, r) && pe(fe(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ee, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, l, c, u = e.cloneNode(!0), d = C.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = fe(u),
                r = 0,
                i = (o = fe(e)).length; r < i; r++)
                    s = o[r],
                    l = a[r],
                    void 0,
                    "input" === (c = l.nodeName.toLowerCase()) && le.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || fe(e),
                    a = a || fe(u),
                    r = 0,
                    i = o.length; r < i; r++)
                        ze(o[r], a[r]);
                else
                    ze(e, u);
            return 0 < (a = fe(u, "script")).length && pe(a, !d && fe(e, "script")),
            u
        },
        cleanData: function(e) {
            for (var t, n, r, i = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (K(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[V.expando] && (n[V.expando] = void 0)
                }
        }
    }),
    C.fn.extend({
        detach: function(e) {
            return Ie(this, e, !0)
        },
        remove: function(e) {
            return Ie(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return De(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return De(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ae(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return De(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return De(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (C.cleanData(fe(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !de[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (C.cleanData(fe(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return De(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(fe(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        C.fn[e] = function(e) {
            for (var t, n = [], r = C(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                C(r[o])[a](t),
                l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var qe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , He = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = k),
        t.getComputedStyle(e)
    }
      , Be = new RegExp(ne.join("|"),"i");
    function Re(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (a = C.style(e, t)),
        !v.pixelBoxStyles() && qe.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Pe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                be.appendChild(s).appendChild(l);
                var e = k.getComputedStyle(l);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 36 === l.offsetWidth || "absolute",
                be.removeChild(s),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = N.createElement("div"), l = N.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        v.clearCloneStyle = "content-box" === l.style.backgroundClip,
        C.extend(v, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            }
        }))
    }();
    var Oe = /^(none|table(?!-c[ea]).+)/
      , $e = /^--/
      , Fe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , We = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ue = ["Webkit", "Moz", "ms"]
      , Xe = N.createElement("div").style;
    function Ke(e) {
        var t = C.cssProps[e];
        return t || (t = C.cssProps[e] = function(e) {
            if (e in Xe)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; )
                if ((e = Ue[n] + t)in Xe)
                    return e
        }(e) || e),
        t
    }
    function Ze(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += C.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (l -= C.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (l -= C.css(e, "border" + ne[a] + "Width", !0, i))) : (l += C.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? l += C.css(e, "border" + ne[a] + "Width", !0, i) : s += C.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))),
        l
    }
    function Ve(e, t, n) {
        var r = He(e)
          , i = Re(e, t, r)
          , o = "border-box" === C.css(e, "boxSizing", !1, r)
          , a = o;
        if (qe.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return a = a && (v.boxSizingReliable() || i === e.style[t]),
        ("auto" === i || !parseFloat(i) && "inline" === C.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)],
        a = !0),
        (i = parseFloat(i) || 0) + Qe(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }
    function Ye(e, t, n, r, i) {
        return new Ye.prototype.init(e,t,n,r,i)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Re(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), l = $e.test(t), c = e.style;
                if (l || (t = Ke(s)),
                a = C.cssHooks[t] || C.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : c[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = oe(e, t, i),
                o = "number"),
                null != n && n == n && ("number" === o && (n += i && i[3] || (C.cssNumber[s] ? "" : "px")),
                v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return $e.test(t) || (t = Ke(s)),
            (a = C.cssHooks[t] || C.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = Re(e, t, r)),
            "normal" === i && t in We && (i = We[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    C.each(["height", "width"], function(e, s) {
        C.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !Oe.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ve(e, s, n) : ie(e, Fe, function() {
                        return Ve(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = He(e), o = "border-box" === C.css(e, "boxSizing", !1, i), a = n && Qe(e, s, n, o, i);
                return o && v.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - Qe(e, s, "border", !1, i) - .5)),
                a && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t,
                t = C.css(e, s)),
                Ze(0, t, a)
            }
        }
    }),
    C.cssHooks.marginLeft = Pe(v.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Re(e, "marginLeft")) || e.getBoundingClientRect().left - ie(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        C.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (C.cssHooks[i + o].set = Ze)
    }),
    C.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = He(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = C.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((C.Tween = Ye).prototype = {
        constructor: Ye,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || C.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ye.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ye.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ye.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ye.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ye.prototype,
    (Ye.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ye.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    C.fx = Ye.prototype.init,
    C.fx.step = {};
    var Ge, Je, et, tt, nt = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;
    function it() {
        Je && (!1 === N.hidden && k.requestAnimationFrame ? k.requestAnimationFrame(it) : k.setTimeout(it, C.fx.interval),
        C.fx.tick())
    }
    function ot() {
        return k.setTimeout(function() {
            Ge = void 0
        }),
        Ge = Date.now()
    }
    function at(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function st(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function lt(o, e, t) {
        var n, a, r = 0, i = lt.prefilters.length, s = C.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (a)
                return !1;
            for (var e = Ge || ot(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), r = 0, i = c.tweens.length; r < i; r++)
                c.tweens[r].run(n);
            return s.notifyWith(o, [c, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [c, 1, 0]),
            s.resolveWith(o, [c]),
            !1)
        }, c = s.promise({
            elem: o,
            props: C.extend({}, e),
            opts: C.extend(!0, {
                specialEasing: {},
                easing: C.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ge || ot(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = C.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? c.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    c.tweens[t].run(1);
                return e ? (s.notifyWith(o, [c, 1, 0]),
                s.resolveWith(o, [c, e])) : s.rejectWith(o, [c, e]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = C.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(u, c.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(c, o, u, c.opts))
                return b(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                n;
        return C.map(u, st, c),
        b(c.opts.start) && c.opts.start.call(o, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        C.fx.timer(C.extend(l, {
            elem: o,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    C.Animation = C.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return oe(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = b(e) ? (t = e,
            ["*"]) : e.match(I)).length; r < i; r++)
                n = e[r],
                lt.tweeners[n] = lt.tweeners[n] || [],
                lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, l, c, u, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, m = e.nodeType && re(e), g = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    C.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                nt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (m ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])
                            continue;
                        m = !0
                    }
                    p[r] = g && g[r] || C.style(e, r)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (c = g && g.display) && (c = Q.get(e, "display")),
                "none" === (u = C.css(e, "display")) && (c ? u = c : (se([e], !0),
                c = e.style.display || c,
                u = C.css(e, "display"),
                se([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (f.done(function() {
                    h.display = c
                }),
                null == c && (u = h.display,
                c = "none" === u ? "" : u)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                f.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Q.access(e, "fxshow", {
                        display: c
                    }),
                    o && (g.hidden = !m),
                    m && se([e], !0),
                    f.done(function() {
                        for (r in m || se([e]),
                        Q.remove(e, "fxshow"),
                        p)
                            C.style(e, r, p[r])
                    })),
                    l = st(m ? g[r] : 0, r, f),
                    r in g || (g[r] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }),
    C.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            b(r.old) && r.old.call(this),
            r.queue && C.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    C.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = C.isEmptyObject(t)
              , o = C.speed(e, n, r)
              , a = function() {
                var e = lt(this, C.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = C.timers
                  , r = Q.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && rt.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || C.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = C.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                C.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    C.each(["toggle", "show", "hide"], function(e, r) {
        var i = C.fn[r];
        C.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(at(r, !0), e, t, n)
        }
    }),
    C.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        C.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    C.timers = [],
    C.fx.tick = function() {
        var e, t = 0, n = C.timers;
        for (Ge = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(),
        Ge = void 0
    }
    ,
    C.fx.timer = function(e) {
        C.timers.push(e),
        C.fx.start()
    }
    ,
    C.fx.interval = 13,
    C.fx.start = function() {
        Je || (Je = !0,
        it())
    }
    ,
    C.fx.stop = function() {
        Je = null
    }
    ,
    C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    C.fn.delay = function(r, e) {
        return r = C.fx && C.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = k.setTimeout(e, r);
            t.stop = function() {
                k.clearTimeout(n)
            }
        })
    }
    ,
    et = N.createElement("input"),
    tt = N.createElement("select").appendChild(N.createElement("option")),
    et.type = "checkbox",
    v.checkOn = "" !== et.value,
    v.optSelected = tt.selected,
    (et = N.createElement("input")).value = "t",
    et.type = "radio",
    v.radioValue = "t" === et.value;
    var ct, ut = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return $(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }),
    C.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (i = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void C.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = C.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && S(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(I);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ut[t] || C.find.attr;
        ut[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ut[o],
            ut[o] = r,
            r = null != a(e, t, n) ? o : null,
            ut[o] = i),
            r
        }
    });
    var dt = /^(?:input|select|textarea|button)$/i
      , ft = /^(?:a|area)$/i;
    function pt(e) {
        return (e.match(I) || []).join(" ")
    }
    function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(I) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return $(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }),
    C.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t,
                i = C.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    v.optSelected || (C.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }),
    C.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).addClass(t.call(this, e, ht(this)))
                });
            if ((e = mt(t)).length)
                for (; n = this[l++]; )
                    if (i = ht(n),
                    r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, l = 0;
            if (b(t))
                return this.each(function(e) {
                    C(this).removeClass(t.call(this, e, ht(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = mt(t)).length)
                for (; n = this[l++]; )
                    if (i = ht(n),
                    r = 1 === n.nodeType && " " + pt(i) + " ") {
                        for (a = 0; o = e[a++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = pt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(e) {
                C(this).toggleClass(i.call(this, e, ht(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0,
                    n = C(this),
                    r = mt(i); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" !== o || ((e = ht(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + pt(ht(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var gt = /\r/g;
    C.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = b(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = C.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(gt, "") : null == e ? "" : e : void 0
        }
    }),
    C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : pt(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], l = a ? o + 1 : i.length;
                    for (r = o < 0 ? l : a ? o : 0; r < l; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (t = C(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = -1 < C.inArray(C.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        },
        v.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    v.focusin = "onfocusin"in k;
    var vt = /^(?:focusinfocus|focusoutblur)$/
      , bt = function(e) {
        e.stopPropagation()
    };
    C.extend(C.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, l, c, u, d, f = [n || N], p = g.call(e, "type") ? e.type : e, h = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = d = a = n = n || N,
            3 !== n.nodeType && 8 !== n.nodeType && !vt.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(),
            h.sort()),
            l = p.indexOf(":") < 0 && "on" + p,
            (e = e[C.expando] ? e : new C.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : C.makeArray(t, [e]),
            u = C.event.special[p] || {},
            r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !y(n)) {
                    for (s = u.delegateType || p,
                    vt.test(s + p) || (o = o.parentNode); o; o = o.parentNode)
                        f.push(o),
                        a = o;
                    a === (n.ownerDocument || N) && f.push(a.defaultView || a.parentWindow || k)
                }
                for (i = 0; (o = f[i++]) && !e.isPropagationStopped(); )
                    d = o,
                    e.type = 1 < i ? s : u.bindType || p,
                    (c = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && c.apply(o, t),
                    (c = l && o[l]) && c.apply && K(o) && (e.result = c.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = p,
                r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !K(n) || l && b(n[p]) && !y(n) && ((a = n[l]) && (n[l] = null),
                C.event.triggered = p,
                e.isPropagationStopped() && d.addEventListener(p, bt),
                n[p](),
                e.isPropagationStopped() && d.removeEventListener(p, bt),
                C.event.triggered = void 0,
                a && (n[l] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(r, null, t)
        }
    }),
    C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return C.event.trigger(e, t, n, !0)
        }
    }),
    v.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            C.event.simulate(r, e.target, C.event.fix(e))
        };
        C.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r);
                t || e.addEventListener(n, i, !0),
                Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Q.remove(e, r))
            }
        }
    });
    var yt = k.location
      , xt = Date.now()
      , wt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new k.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e),
        t
    }
    ;
    var _t = /\[\]$/
      , kt = /\r?\n/g
      , Nt = /^(?:submit|button|image|reset|file)$/i
      , Ct = /^(?:input|select|textarea|keygen)/i;
    function Et(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            C.each(e, function(e, t) {
                r || _t.test(n) ? i(n, t) : Et(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                Et(n + "[" + t + "]", e[t], r, i)
    }
    C.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = b(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e))
            C.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Et(n, e[n], t, i);
        return r.join("&")
    }
    ,
    C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Ct.test(this.nodeName) && !Nt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var St = /%20/g
      , Tt = /#.*$/
      , Lt = /([?&])_=[^&]*/
      , At = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Mt = /^(?:GET|HEAD)$/
      , jt = /^\/\//
      , zt = {}
      , Dt = {}
      , It = "*/".concat("*")
      , qt = N.createElement("a");
    function Ht(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(I) || [];
            if (b(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Bt(t, i, o, a) {
        var s = {}
          , l = t === Dt;
        function c(e) {
            var r;
            return s[e] = !0,
            C.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                c(n),
                !1)
            }),
            r
        }
        return c(i.dataTypes[0]) || !s["*"] && c("*")
    }
    function Rt(e, t) {
        var n, r, i = C.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && C.extend(!0, e, r),
        e
    }
    qt.href = yt.href,
    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rt(Rt(e, C.ajaxSettings), t) : Rt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Ht(zt),
        ajaxTransport: Ht(Dt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var u, d, f, n, p, r, h, m, i, o, g = C.ajaxSetup({}, t), v = g.context || g, b = g.context && (v.nodeType || v.jquery) ? C(v) : C.event, y = C.Deferred(), x = C.Callbacks("once memory"), w = g.statusCode || {}, a = {}, s = {}, l = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n)
                            for (n = {}; t = At.exec(f); )
                                n[t[1].toLowerCase()] = t[2];
                        t = n[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return h ? f : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (g.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            _.always(e[_.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || l;
                    return u && u.abort(t),
                    c(0, t),
                    this
                }
            };
            if (y.promise(_),
            g.url = ((e || g.url || yt.href) + "").replace(jt, yt.protocol + "//"),
            g.type = t.method || t.type || g.method || g.type,
            g.dataTypes = (g.dataType || "*").toLowerCase().match(I) || [""],
            null == g.crossDomain) {
                r = N.createElement("a");
                try {
                    r.href = g.url,
                    r.href = r.href,
                    g.crossDomain = qt.protocol + "//" + qt.host != r.protocol + "//" + r.host
                } catch (e) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)),
            Bt(zt, g, t, _),
            h)
                return _;
            for (i in (m = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
            g.type = g.type.toUpperCase(),
            g.hasContent = !Mt.test(g.type),
            d = g.url.replace(Tt, ""),
            g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(St, "+")) : (o = g.url.slice(d.length),
            g.data && (g.processData || "string" == typeof g.data) && (d += (wt.test(d) ? "&" : "?") + g.data,
            delete g.data),
            !1 === g.cache && (d = d.replace(Lt, "$1"),
            o = (wt.test(d) ? "&" : "?") + "_=" + xt++ + o),
            g.url = d + o),
            g.ifModified && (C.lastModified[d] && _.setRequestHeader("If-Modified-Since", C.lastModified[d]),
            C.etag[d] && _.setRequestHeader("If-None-Match", C.etag[d])),
            (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && _.setRequestHeader("Content-Type", g.contentType),
            _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + It + "; q=0.01" : "") : g.accepts["*"]),
            g.headers)
                _.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(v, _, g) || h))
                return _.abort();
            if (l = "abort",
            x.add(g.complete),
            _.done(g.success),
            _.fail(g.error),
            u = Bt(Dt, g, t, _)) {
                if (_.readyState = 1,
                m && b.trigger("ajaxSend", [_, g]),
                h)
                    return _;
                g.async && 0 < g.timeout && (p = k.setTimeout(function() {
                    _.abort("timeout")
                }, g.timeout));
                try {
                    h = !1,
                    u.send(a, c)
                } catch (e) {
                    if (h)
                        throw e;
                    c(-1, e)
                }
            } else
                c(-1, "No Transport");
            function c(e, t, n, r) {
                var i, o, a, s, l, c = t;
                h || (h = !0,
                p && k.clearTimeout(p),
                u = void 0,
                f = r || "",
                _.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(g, _, n)),
                s = function(e, t, n, r) {
                    var i, o, a, s, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (a in e.converters)
                            c[a.toLowerCase()] = e.converters[a];
                    for (o = u.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = u.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(a = c[l + " " + o] || c["* " + o]))
                                    for (i in c)
                                        if ((s = i.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[i] : !0 !== c[i] && (o = s[0],
                                            u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws)
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(g, s, _, i),
                i ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (C.lastModified[d] = l),
                (l = _.getResponseHeader("etag")) && (C.etag[d] = l)),
                204 === e || "HEAD" === g.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = c,
                !e && c || (c = "error",
                e < 0 && (e = 0))),
                _.status = e,
                _.statusText = (t || c) + "",
                i ? y.resolveWith(v, [o, c, _]) : y.rejectWith(v, [_, c, a]),
                _.statusCode(w),
                w = void 0,
                m && b.trigger(i ? "ajaxSuccess" : "ajaxError", [_, g, i ? o : a]),
                x.fireWith(v, [_, c]),
                m && (b.trigger("ajaxComplete", [_, g]),
                --C.active || C.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }),
    C.each(["get", "post"], function(e, i) {
        C[i] = function(e, t, n, r) {
            return b(t) && (r = r || n,
            n = t,
            t = void 0),
            C.ajax(C.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }),
    C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    C.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])),
            t = C(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }
    ,
    C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    C.ajaxSettings.xhr = function() {
        try {
            return new k.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Pt = {
        0: 200,
        1223: 204
    }
      , Ot = C.ajaxSettings.xhr();
    v.cors = !!Ot && "withCredentials"in Ot,
    v.ajax = Ot = !!Ot,
    C.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || Ot && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Pt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && k.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e),
                e
            }
        }
    }),
    C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    C.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain)
            return {
                send: function(e, t) {
                    r = C("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    N.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var $t, Ft = [], Wt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ft.pop() || C.expando + "_" + xt++;
            return this[e] = !0,
            e
        }
    }),
    C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Wt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Wt, "$1" + r) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || C.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = k[r],
            k[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? C(k).removeProp(r) : k[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Ft.push(r)),
                o && b(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    v.createHTMLDocument = (($t = N.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === $t.childNodes.length),
    C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (v.createHTMLDocument ? ((r = (t = N.implementation.createHTMLDocument("")).createElement("base")).href = N.location.href,
        t.head.appendChild(r)) : t = N),
        o = !n && [],
        (i = T.exec(e)) ? [t.createElement(i[1])] : (i = ve([e], t, o),
        o && o.length && C(o).remove(),
        C.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    C.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = pt(e.slice(s)),
        e = e.slice(0, s)),
        b(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && C.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    C.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, l, c = C.css(e, "position"), u = C(e), d = {};
            "static" === c && (e.style.position = "relative"),
            s = u.offset(),
            o = C.css(e, "top"),
            l = C.css(e, "left"),
            i = ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (r = u.position()).top,
            r.left) : (a = parseFloat(o) || 0,
            parseFloat(l) || 0),
            b(t) && (t = t.call(e, n, C.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, d) : u.css(d)
        }
    },
    C.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === C.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0),
                    i.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - C.css(r, "marginTop", !0),
                    left: t.left - i.left - C.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position"); )
                    e = e.offsetParent;
                return e || be
            })
        }
    }),
    C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        C.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Pe(v.pixelPosition, function(e, t) {
            if (t)
                return t = Re(e, n),
                qe.test(t) ? C(e).position()[n] + "px" : t
        })
    }),
    C.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        C.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            C.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? C.css(e, t, i) : C.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    C.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        b(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || C.guid++,
            i
    }
    ,
    C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }
    ,
    C.isArray = Array.isArray,
    C.parseJSON = JSON.parse,
    C.nodeName = S,
    C.isFunction = b,
    C.isWindow = y,
    C.camelCase = X,
    C.type = w,
    C.now = Date.now,
    C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var Ut = k.jQuery
      , Xt = k.$;
    return C.noConflict = function(e) {
        return k.$ === C && (k.$ = Xt),
        e && k.jQuery === C && (k.jQuery = Ut),
        C
    }
    ,
    e || (k.jQuery = k.$ = C),
    C
}),
function(i) {
    "use strict";
    i.fn.fitVids = function(e) {
        var n = {
            customSelector: null,
            ignore: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var t = document.head || document.getElementsByTagName("head")[0]
              , r = document.createElement("div");
            r.innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',
            t.appendChild(r.childNodes[1])
        }
        return e && i.extend(n, e),
        this.each(function() {
            var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            n.customSelector && e.push(n.customSelector);
            var r = ".fitvidsignore";
            n.ignore && (r = r + ", " + n.ignore);
            var t = i(this).find(e.join(","));
            (t = (t = t.not("object object")).not(r)).each(function() {
                var e = i(this);
                if (!(0 < e.parents(r).length || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                    e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9),
                    e.attr("width", 16));
                    var t = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                    if (!e.attr("name")) {
                        var n = "fitvid" + i.fn.fitVids._count;
                        e.attr("name", n),
                        i.fn.fitVids._count++
                    }
                    e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * t + "%"),
                    e.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
    ,
    i.fn.fitVids._count = 0
}(window.jQuery || window.Zepto),
function(e) {
    var t = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}),
    "function" == typeof define && define.amd && define([], function() {
        return t.hljs
    }))
}(function(i) {
    function b(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    function f(e) {
        return e.nodeName.toLowerCase()
    }
    function y(e, t) {
        var n = e && e.exec(t);
        return n && 0 === n.index
    }
    function p(e) {
        return r.test(e)
    }
    function c(e) {
        var t, n = {}, r = Array.prototype.slice.call(arguments, 1);
        for (t in e)
            n[t] = e[t];
        return r.forEach(function(e) {
            for (t in e)
                n[t] = e[t]
        }),
        n
    }
    function h(e) {
        var i = [];
        return function e(t, n) {
            for (var r = t.firstChild; r; r = r.nextSibling)
                3 === r.nodeType ? n += r.nodeValue.length : 1 === r.nodeType && (i.push({
                    event: "start",
                    offset: n,
                    node: r
                }),
                n = e(r, n),
                f(r).match(/br|hr|img|input/) || i.push({
                    event: "stop",
                    offset: n,
                    node: r
                }));
            return n
        }(e, 0),
        i
    }
    function x(a) {
        function s(e) {
            return e && e.source || e
        }
        function l(e, t) {
            return new RegExp(s(e),"m" + (a.cI ? "i" : "") + (t ? "g" : ""))
        }
        !function t(n, e) {
            if (!n.compiled) {
                if (n.compiled = !0,
                n.k = n.k || n.bK,
                n.k) {
                    var r = {}
                      , i = function(n, e) {
                        a.cI && (e = e.toLowerCase()),
                        e.split(" ").forEach(function(e) {
                            var t = e.split("|");
                            r[t[0]] = [n, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof n.k ? i("keyword", n.k) : u(n.k).forEach(function(e) {
                        i(e, n.k[e])
                    }),
                    n.k = r
                }
                n.lR = l(n.l || /\w+/, !0),
                e && (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"),
                n.b || (n.b = /\B|\b/),
                n.bR = l(n.b),
                n.e || n.eW || (n.e = /\B|\b/),
                n.e && (n.eR = l(n.e)),
                n.tE = s(n.e) || "",
                n.eW && e.tE && (n.tE += (n.e ? "|" : "") + e.tE)),
                n.i && (n.iR = l(n.i)),
                null == n.r && (n.r = 1),
                n.c || (n.c = []),
                n.c = Array.prototype.concat.apply([], n.c.map(function(e) {
                    return (t = "self" === e ? n : e).v && !t.cached_variants && (t.cached_variants = t.v.map(function(e) {
                        return c(t, {
                            v: null
                        }, e)
                    })),
                    t.cached_variants || t.eW && [c(t)] || [t];
                    var t
                })),
                n.c.forEach(function(e) {
                    t(e, n)
                }),
                n.starts && t(n.starts, e);
                var o = n.c.map(function(e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([n.tE, n.i]).map(s).filter(Boolean);
                n.t = o.length ? l(o.join("|"), !0) : {
                    exec: function() {
                        return null
                    }
                }
            }
        }(a)
    }
    function w(e, t, s, n) {
        function l(e, t, n, r) {
            var i = '<span class="' + (r ? "" : S.classPrefix);
            return (i += e + '">') + t + (n ? "" : E)
        }
        function c() {
            p += null != f.sL ? function() {
                var e = "string" == typeof f.sL;
                if (e && !N[f.sL])
                    return b(h);
                var t = e ? w(f.sL, h, !0, o[f.sL]) : _(h, f.sL.length ? f.sL : void 0);
                return 0 < f.r && (m += t.r),
                e && (o[f.sL] = t.top),
                l(t.language, t.value, !1, !0)
            }() : function() {
                var e, t, n, r, i, o, a;
                if (!f.k)
                    return b(h);
                for (r = "",
                t = 0,
                f.lR.lastIndex = 0,
                n = f.lR.exec(h); n; )
                    r += b(h.substring(t, n.index)),
                    i = f,
                    o = n,
                    a = d.cI ? o[0].toLowerCase() : o[0],
                    (e = i.k.hasOwnProperty(a) && i.k[a]) ? (m += e[1],
                    r += l(e[0], b(n[0]))) : r += b(n[0]),
                    t = f.lR.lastIndex,
                    n = f.lR.exec(h);
                return r + b(h.substr(t))
            }(),
            h = ""
        }
        function u(e) {
            p += e.cN ? l(e.cN, "", !0) : "",
            f = Object.create(e, {
                parent: {
                    value: f
                }
            })
        }
        function r(e, t) {
            if (h += e,
            null == t)
                return c(),
                0;
            var n = function(e, t) {
                var n, r;
                for (n = 0,
                r = t.c.length; n < r; n++)
                    if (y(t.c[n].bR, e))
                        return t.c[n]
            }(t, f);
            if (n)
                return n.skip ? h += t : (n.eB && (h += t),
                c(),
                n.rB || n.eB || (h = t)),
                u(n),
                n.rB ? 0 : t.length;
            var r, i, o = function e(t, n) {
                if (y(t.eR, n)) {
                    for (; t.endsParent && t.parent; )
                        t = t.parent;
                    return t
                }
                return t.eW ? e(t.parent, n) : void 0
            }(f, t);
            if (o) {
                var a = f;
                for (a.skip ? h += t : (a.rE || a.eE || (h += t),
                c(),
                a.eE && (h = t)); f.cN && (p += E),
                f.skip || (m += f.r),
                (f = f.parent) !== o.parent; )
                    ;
                return o.starts && u(o.starts),
                a.rE ? 0 : t.length
            }
            if (r = t,
            i = f,
            !s && y(i.iR, r))
                throw new Error('Illegal lexeme "' + t + '" for mode "' + (f.cN || "<unnamed>") + '"');
            return h += t,
            t.length || 1
        }
        var d = k(e);
        if (!d)
            throw new Error('Unknown language: "' + e + '"');
        x(d);
        var i, f = n || d, o = {}, p = "";
        for (i = f; i !== d; i = i.parent)
            i.cN && (p = l(i.cN, "", !0) + p);
        var h = ""
          , m = 0;
        try {
            for (var a, g, v = 0; f.t.lastIndex = v,
            a = f.t.exec(t); )
                g = r(t.substring(v, a.index), a[0]),
                v = a.index + g;
            for (r(t.substr(v)),
            i = f; i.parent; i = i.parent)
                i.cN && (p += E);
            return {
                r: m,
                value: p,
                language: e,
                top: f
            }
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf("Illegal"))
                return {
                    r: 0,
                    value: b(t)
                };
            throw e
        }
    }
    function _(n, e) {
        e = e || S.languages || u(N);
        var r = {
            r: 0,
            value: b(n)
        }
          , i = r;
        return e.filter(k).forEach(function(e) {
            var t = w(e, n, !1);
            t.language = e,
            t.r > i.r && (i = t),
            t.r > r.r && (i = r,
            r = t)
        }),
        i.language && (r.second_best = i),
        r
    }
    function m(e) {
        return S.tabReplace || S.useBR ? e.replace(o, function(e, t) {
            return S.useBR && "\n" === e ? "<br>" : S.tabReplace ? t.replace(/\t/g, S.tabReplace) : ""
        }) : e
    }
    function t(e) {
        var t, n, r, i, o, a, s, l, c, u, d = function(e) {
            var t, n, r, i, o = e.className + " ";
            if (o += e.parentNode ? e.parentNode.className : "",
            n = C.exec(o))
                return k(n[1]) ? n[1] : "no-highlight";
            for (t = 0,
            r = (o = o.split(/\s+/)).length; t < r; t++)
                if (p(i = o[t]) || k(i))
                    return i
        }(e);
        p(d) || (S.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : t = e,
        o = t.textContent,
        r = d ? w(d, o, !0) : _(o),
        (n = h(t)).length && ((i = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = r.value,
        r.value = function(e, t, n) {
            function r() {
                return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
            }
            function i(e) {
                l += "<" + f(e) + g.map.call(e.attributes, function(e) {
                    return " " + e.nodeName + '="' + b(e.value).replace('"', "&quot;") + '"'
                }).join("") + ">"
            }
            function o(e) {
                l += "</" + f(e) + ">"
            }
            function a(e) {
                ("start" === e.event ? i : o)(e.node)
            }
            for (var s = 0, l = "", c = []; e.length || t.length; ) {
                var u = r();
                if (l += b(n.substring(s, u[0].offset)),
                s = u[0].offset,
                u === e) {
                    for (c.reverse().forEach(o); a(u.splice(0, 1)[0]),
                    (u = r()) === e && u.length && u[0].offset === s; )
                        ;
                    c.reverse().forEach(i)
                } else
                    "start" === u[0].event ? c.push(u[0].node) : c.pop(),
                    a(u.splice(0, 1)[0])
            }
            return l + b(n.substr(s))
        }(n, h(i), o)),
        r.value = m(r.value),
        e.innerHTML = r.value,
        e.className = (a = e.className,
        s = d,
        l = r.language,
        c = s ? v[s] : l,
        u = [a.trim()],
        a.match(/\bhljs\b/) || u.push("hljs"),
        -1 === a.indexOf(c) && u.push(c),
        u.join(" ").trim()),
        e.result = {
            language: r.language,
            re: r.r
        },
        r.second_best && (e.second_best = {
            language: r.second_best.language,
            re: r.second_best.r
        }))
    }
    function n() {
        if (!n.called) {
            n.called = !0;
            var e = document.querySelectorAll("pre code");
            g.forEach.call(e, t)
        }
    }
    function k(e) {
        return e = (e || "").toLowerCase(),
        N[e] || N[v[e]]
    }
    var g = []
      , u = Object.keys
      , N = {}
      , v = {}
      , r = /^(no-?highlight|plain|text)$/i
      , C = /\blang(?:uage)?-([\w-]+)\b/i
      , o = /((^(<[^>]+>|\t|)+|(?:\n)))/gm
      , E = "</span>"
      , S = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    };
    return i.highlight = w,
    i.highlightAuto = _,
    i.fixMarkup = m,
    i.highlightBlock = t,
    i.configure = function(e) {
        S = c(S, e)
    }
    ,
    i.initHighlighting = n,
    i.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded", n, !1),
        addEventListener("load", n, !1)
    }
    ,
    i.registerLanguage = function(t, e) {
        var n = N[t] = e(i);
        n.aliases && n.aliases.forEach(function(e) {
            v[e] = t
        })
    }
    ,
    i.listLanguages = function() {
        return u(N)
    }
    ,
    i.getLanguage = k,
    i.inherit = c,
    i.IR = "[a-zA-Z]\\w*",
    i.UIR = "[a-zA-Z_]\\w*",
    i.NR = "\\b\\d+(\\.\\d+)?",
    i.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    i.BNR = "\\b(0b[01]+)",
    i.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    i.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    },
    i.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [i.BE]
    },
    i.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [i.BE]
    },
    i.PWM = {
        b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    i.C = function(e, t, n) {
        var r = i.inherit({
            cN: "comment",
            b: e,
            e: t,
            c: []
        }, n || {});
        return r.c.push(i.PWM),
        r.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }),
        r
    }
    ,
    i.CLCM = i.C("//", "$"),
    i.CBCM = i.C("/\\*", "\\*/"),
    i.HCM = i.C("#", "$"),
    i.NM = {
        cN: "number",
        b: i.NR,
        r: 0
    },
    i.CNM = {
        cN: "number",
        b: i.CNR,
        r: 0
    },
    i.BNM = {
        cN: "number",
        b: i.BNR,
        r: 0
    },
    i.CSSNM = {
        cN: "number",
        b: i.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    },
    i.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [i.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [i.BE]
        }]
    },
    i.TM = {
        cN: "title",
        b: i.IR,
        r: 0
    },
    i.UTM = {
        cN: "title",
        b: i.UIR,
        r: 0
    },
    i.METHOD_GUARD = {
        b: "\\.\\s*" + i.UIR,
        r: 0
    },
    i
}),
hljs.registerLanguage("css", function(e) {
    var t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{
                        cN: "built_in",
                        b: /[\w-]+/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        c: [e.ASM, e.QSM]
                    }]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "number",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "meta",
                    b: "!important"
                }]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {
            cN: "selector-id",
            b: /#[A-Za-z0-9_-]+/
        }, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {
            cN: "selector-attr",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{
                cN: "keyword",
                b: /\w+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [e.ASM, e.QSM, e.CSSNM]
            }]
        }, {
            cN: "selector-tag",
            b: "[a-zA-Z-][a-zA-Z0-9_-]*",
            r: 0
        }, {
            b: "{",
            e: "}",
            i: /\S/,
            c: [e.CBCM, t]
        }]
    }
}),
hljs.registerLanguage("nginx", function(e) {
    var t = {
        cN: "variable",
        v: [{
            b: /\$\d+/
        }, {
            b: /\$\{/,
            e: /}/
        }, {
            b: "[\\$\\@]" + e.UIR
        }]
    }
      , n = {
        eW: !0,
        l: "[a-z/_]+",
        k: {
            literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [e.HCM, {
            cN: "string",
            c: [e.BE, t],
            v: [{
                b: /"/,
                e: /"/
            }, {
                b: /'/,
                e: /'/
            }]
        }, {
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [t]
        }, {
            cN: "regexp",
            c: [e.BE, t],
            v: [{
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "\\*(\\.[a-z\\-]+)+"
            }, {
                b: "([a-z\\-]+\\.)+\\*"
            }]
        }, {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, t]
    };
    return {
        aliases: ["nginxconf"],
        c: [e.HCM, {
            b: e.UIR + "\\s+{",
            rB: !0,
            e: "{",
            c: [{
                cN: "section",
                b: e.UIR
            }],
            r: 0
        }, {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [{
                cN: "attribute",
                b: e.UIR,
                starts: n
            }],
            r: 0
        }],
        i: "[^\\s\\}]"
    }
}),
hljs.registerLanguage("ini", function(e) {
    var t = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: "'''",
            e: "'''",
            r: 10
        }, {
            b: '"""',
            e: '"""',
            r: 10
        }, {
            b: '"',
            e: '"'
        }, {
            b: "'",
            e: "'"
        }]
    };
    return {
        aliases: ["toml"],
        cI: !0,
        i: /\S/,
        c: [e.C(";", "$"), e.HCM, {
            cN: "section",
            b: /^\s*\[+/,
            e: /\]+/
        }, {
            b: /^[a-z0-9\[\]_-]+\s*=\s*/,
            e: "$",
            rB: !0,
            c: [{
                cN: "attr",
                b: /[a-z0-9\[\]_-]+/
            }, {
                b: /=/,
                eW: !0,
                r: 0,
                c: [{
                    cN: "literal",
                    b: /\bon|off|true|false|yes|no\b/
                }, {
                    cN: "variable",
                    v: [{
                        b: /\$[\w\d"][\w\d_]*/
                    }, {
                        b: /\$\{(.*?)}/
                    }]
                }, t, {
                    cN: "number",
                    b: /([\+\-]+)?[\d]+_[\d_]+/
                }, e.NM]
            }]
        }]
    }
}),
hljs.registerLanguage("ruby", function(e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?"
      , n = {
        keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
        literal: "true false nil"
    }
      , r = {
        cN: "doctag",
        b: "@[A-Za-z]+"
    }
      , i = {
        b: "#<",
        e: ">"
    }
      , o = [e.C("#", "$", {
        c: [r]
    }), e.C("^\\=begin", "^\\=end", {
        c: [r],
        r: 10
    }), e.C("^__END__", "\\n$")]
      , a = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: n
    }
      , s = {
        cN: "string",
        c: [e.BE, a],
        v: [{
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: /`/,
            e: /`/
        }, {
            b: "%[qQwWx]?\\(",
            e: "\\)"
        }, {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        }, {
            b: "%[qQwWx]?{",
            e: "}"
        }, {
            b: "%[qQwWx]?<",
            e: ">"
        }, {
            b: "%[qQwWx]?/",
            e: "/"
        }, {
            b: "%[qQwWx]?%",
            e: "%"
        }, {
            b: "%[qQwWx]?-",
            e: "-"
        }, {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        }, {
            b: /<<(-?)\w+$/,
            e: /^\s*\w+$/
        }]
    }
      , l = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        endsParent: !0,
        k: n
    }
      , c = [s, i, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            b: "<\\s*",
            c: [{
                b: "(" + e.IR + "::)?" + e.IR
            }]
        }].concat(o)
    }, {
        cN: "function",
        bK: "def",
        e: "$|;",
        c: [e.inherit(e.TM, {
            b: t
        }), l].concat(o)
    }, {
        b: e.IR + "::"
    }, {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "symbol",
        b: ":(?!\\s)",
        c: [s, {
            b: t
        }],
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        cN: "params",
        b: /\|/,
        e: /\|/,
        k: n
    }, {
        b: "(" + e.RSR + "|unless)\\s*",
        k: "unless",
        c: [i, {
            cN: "regexp",
            c: [e.BE, a],
            i: /\n/,
            v: [{
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            }]
        }].concat(o),
        r: 0
    }].concat(o);
    a.c = c;
    var u = [{
        b: /^\s*=>/,
        starts: {
            e: "$",
            c: l.c = c
        }
    }, {
        cN: "meta",
        b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
        starts: {
            e: "$",
            c: c
        }
    }];
    return {
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        k: n,
        i: /\/\*/,
        c: o.concat(u).concat(c)
    }
}),
hljs.registerLanguage("xml", function(e) {
    var t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{
            cN: "attr",
            b: "[A-Za-z0-9\\._:-]+",
            r: 0
        }, {
            b: /=\s*/,
            r: 0,
            c: [{
                cN: "string",
                endsParent: !0,
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s"'=<>`]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, e.C("\x3c!--", "--\x3e", {
            r: 10
        }), {
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{
                b: "/\\*",
                e: "\\*/",
                skip: !0
            }]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                name: "style"
            },
            c: [t],
            starts: {
                e: "</style>",
                rE: !0,
                sL: ["css", "xml"]
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                name: "script"
            },
            c: [t],
            starts: {
                e: "<\/script>",
                rE: !0,
                sL: ["actionscript", "javascript", "handlebars", "xml"]
            }
        }, {
            cN: "meta",
            v: [{
                b: /<\?xml/,
                e: /\?>/,
                r: 10
            }, {
                b: /<\?\w+/,
                e: /\?>/
            }]
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "name",
                b: /[^\/><\s]+/,
                r: 0
            }, t]
        }]
    }
}),
hljs.registerLanguage("markdown", function(e) {
    return {
        aliases: ["md", "mkdown", "mkd"],
        c: [{
            cN: "section",
            v: [{
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            }]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [{
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            }]
        }, {
            cN: "quote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [{
                b: "^```w*s*$",
                e: "^```s*$"
            }, {
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            }]
        }, {
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [{
                cN: "string",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "symbol",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            }],
            r: 10
        }, {
            b: /^\[[^\n]+\]:/,
            rB: !0,
            c: [{
                cN: "symbol",
                b: /\[/,
                e: /\]/,
                eB: !0,
                eE: !0
            }, {
                cN: "link",
                b: /:\s*/,
                e: /$/,
                eB: !0
            }]
        }]
    }
}),
hljs.registerLanguage("json", function(e) {
    var t = {
        literal: "true false null"
    }
      , n = [e.QSM, e.CNM]
      , r = {
        e: ",",
        eW: !0,
        eE: !0,
        c: n,
        k: t
    }
      , i = {
        b: "{",
        e: "}",
        c: [{
            cN: "attr",
            b: /"/,
            e: /"/,
            c: [e.BE],
            i: "\\n"
        }, e.inherit(r, {
            b: /:/
        })],
        i: "\\S"
    }
      , o = {
        b: "\\[",
        e: "\\]",
        c: [e.inherit(r)],
        i: "\\S"
    };
    return n.splice(n.length, 0, i, o),
    {
        c: n,
        k: t,
        i: "\\S"
    }
}),
hljs.registerLanguage("java", function(e) {
    var t = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do"
      , n = {
        cN: "number",
        b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
        r: 0
    };
    return {
        aliases: ["jsp"],
        k: t,
        i: /<\/|#/,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{
                b: /\w+@/,
                r: 0
            }, {
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [e.UTM]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }, n, {
            cN: "meta",
            b: "@[A-Za-z]+"
        }]
    }
}),
hljs.registerLanguage("apache", function(e) {
    var t = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [e.HCM, {
            cN: "section",
            b: "</?",
            e: ">"
        }, {
            cN: "attribute",
            b: /\w+/,
            r: 0,
            k: {
                nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [{
                    cN: "meta",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "variable",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: ["self", t]
                }, t, e.QSM]
            }
        }],
        i: /\S/
    }
}),
hljs.registerLanguage("cpp", function(e) {
    var t = {
        cN: "keyword",
        b: "\\b[a-z\\d_]*_t\\b"
    }
      , n = {
        cN: "string",
        v: [{
            b: '(u8?|U)?L?"',
            e: '"',
            i: "\\n",
            c: [e.BE]
        }, {
            b: '(u8?|U)?R"',
            e: '"',
            c: [e.BE]
        }, {
            b: "'\\\\?.",
            e: "'",
            i: "."
        }]
    }
      , r = {
        cN: "number",
        v: [{
            b: "\\b(0b[01']+)"
        }, {
            b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
        }, {
            b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
        }],
        r: 0
    }
      , i = {
        cN: "meta",
        b: /#\s*[a-z]+\b/,
        e: /$/,
        k: {
            "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
        },
        c: [{
            b: /\\\n/,
            r: 0
        }, e.inherit(n, {
            cN: "meta-string"
        }), {
            cN: "meta-string",
            b: /<[^\n>]*>/,
            e: /$/,
            i: "\\n"
        }, e.CLCM, e.CBCM]
    }
      , o = e.IR + "\\s*\\("
      , a = {
        keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
        built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
        literal: "true false nullptr NULL"
    }
      , s = [t, e.CLCM, e.CBCM, r, n];
    return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: a,
        i: "</",
        c: s.concat([i, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: a,
            c: ["self", t]
        }, {
            b: e.IR + "::",
            k: a
        }, {
            v: [{
                b: /=/,
                e: /;/
            }, {
                b: /\(/,
                e: /\)/
            }, {
                bK: "new throw return else",
                e: /;/
            }],
            k: a,
            c: s.concat([{
                b: /\(/,
                e: /\)/,
                k: a,
                c: s.concat(["self"]),
                r: 0
            }]),
            r: 0
        }, {
            cN: "function",
            b: "(" + e.IR + "[\\*&\\s]+)+" + o,
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: a,
            i: /[^\w\s\*&]/,
            c: [{
                b: o,
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: a,
                r: 0,
                c: [e.CLCM, e.CBCM, n, r, t]
            }, e.CLCM, e.CBCM, i]
        }, {
            cN: "class",
            bK: "class struct",
            e: /[{;:]/,
            c: [{
                b: /</,
                e: />/,
                c: ["self"]
            }, e.TM]
        }]),
        exports: {
            preprocessor: i,
            strings: n,
            k: a
        }
    }
}),
hljs.registerLanguage("php", function(e) {
    var t = {
        b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
    }
      , n = {
        cN: "meta",
        b: /<\?(php)?|\?>/
    }
      , r = {
        cN: "string",
        c: [e.BE, n],
        v: [{
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, e.inherit(e.ASM, {
            i: null
        }), e.inherit(e.QSM, {
            i: null
        })]
    }
      , i = {
        v: [e.BNM, e.CNM]
    };
    return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [e.HCM, e.C("//", "$", {
            c: [n]
        }), e.C("/\\*", "\\*/", {
            c: [{
                cN: "doctag",
                b: "@[A-Za-z]+"
            }]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }), {
            cN: "string",
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, {
                cN: "subst",
                v: [{
                    b: /\$\w+/
                }, {
                    b: /\{\$/,
                    e: /\}/
                }]
            }]
        }, n, {
            cN: "keyword",
            b: /\$this\b/
        }, t, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: ["self", t, e.CBCM, r, i]
            }]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{
                bK: "extends implements"
            }, e.UTM]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [e.UTM]
        }, {
            bK: "use",
            e: ";",
            c: [e.UTM]
        }, {
            b: "=>"
        }, r, i]
    }
}),
hljs.registerLanguage("javascript", function(e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*"
      , n = {
        keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
        literal: "true false null undefined NaN Infinity",
        built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
    }
      , r = {
        cN: "number",
        v: [{
            b: "\\b(0[bB][01]+)"
        }, {
            b: "\\b(0[oO][0-7]+)"
        }, {
            b: e.CNR
        }],
        r: 0
    }
      , i = {
        cN: "subst",
        b: "\\$\\{",
        e: "\\}",
        k: n,
        c: []
    }
      , o = {
        cN: "string",
        b: "`",
        e: "`",
        c: [e.BE, i]
    };
    i.c = [e.ASM, e.QSM, o, r, e.RM];
    var a = i.c.concat([e.CBCM, e.CLCM]);
    return {
        aliases: ["js", "jsx"],
        k: n,
        c: [{
            cN: "meta",
            r: 10,
            b: /^\s*['"]use (strict|asm)['"]/
        }, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, o, e.CLCM, e.CBCM, r, {
            b: /[{,]\s*/,
            r: 0,
            c: [{
                b: t + "\\s*:",
                rB: !0,
                r: 0,
                c: [{
                    cN: "attr",
                    b: t,
                    r: 0
                }]
            }]
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                cN: "function",
                b: "(\\(.*?\\)|" + t + ")\\s*=>",
                rB: !0,
                e: "\\s*=>",
                c: [{
                    cN: "params",
                    v: [{
                        b: t
                    }, {
                        b: /\(\s*\)/
                    }, {
                        b: /\(/,
                        e: /\)/,
                        eB: !0,
                        eE: !0,
                        k: n,
                        c: a
                    }]
                }]
            }, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{
                    b: /<\w+\s*\/>/,
                    skip: !0
                }, {
                    b: /<\w+/,
                    e: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    c: [{
                        b: /<\w+\s*\/>/,
                        skip: !0
                    }, "self"]
                }]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {
                b: t
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                c: a
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{
                bK: "extends"
            }, e.UTM]
        }, {
            bK: "constructor",
            e: /\{/,
            eE: !0
        }],
        i: /#(?!!)/
    }
}),
hljs.registerLanguage("objectivec", function(e) {
    var t = /[a-zA-Z@][a-zA-Z0-9_]*/
      , n = "@interface @class @protocol @implementation";
    return {
        aliases: ["mm", "objc", "obj-c"],
        k: {
            keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        },
        l: t,
        i: "</",
        c: [{
            cN: "built_in",
            b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
        }, e.CLCM, e.CBCM, e.CNM, e.QSM, {
            cN: "string",
            v: [{
                b: '@"',
                e: '"',
                i: "\\n",
                c: [e.BE]
            }, {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            }]
        }, {
            cN: "meta",
            b: "#",
            e: "$",
            c: [{
                cN: "meta-string",
                v: [{
                    b: '"',
                    e: '"'
                }, {
                    b: "<",
                    e: ">"
                }]
            }]
        }, {
            cN: "class",
            b: "(" + n.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: n,
            l: t,
            c: [e.UTM]
        }, {
            b: "\\." + e.UIR,
            r: 0
        }]
    }
}),
hljs.registerLanguage("bash", function(e) {
    var t = {
        cN: "variable",
        v: [{
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)}/
        }]
    }
      , n = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [e.BE]
        }]
    };
    return {
        aliases: ["sh", "zsh"],
        l: /\b-?[a-z\._]+\b/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{
            cN: "meta",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            })],
            r: 0
        }, e.HCM, n, {
            cN: "string",
            b: /'/,
            e: /'/
        }, t]
    }
}),
hljs.registerLanguage("coffeescript", function(e) {
    var t = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        built_in: "npm require console print module global window document"
    }
      , n = "[A-Za-z$_][0-9A-Za-z$_]*"
      , r = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: t
    }
      , i = [e.BNM, e.inherit(e.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [{
            b: /'''/,
            e: /'''/,
            c: [e.BE]
        }, {
            b: /'/,
            e: /'/,
            c: [e.BE]
        }, {
            b: /"""/,
            e: /"""/,
            c: [e.BE, r]
        }, {
            b: /"/,
            e: /"/,
            c: [e.BE, r]
        }]
    }, {
        cN: "regexp",
        v: [{
            b: "///",
            e: "///",
            c: [r, e.HCM]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        }]
    }, {
        b: "@" + n
    }, {
        sL: "javascript",
        eB: !0,
        eE: !0,
        v: [{
            b: "```",
            e: "```"
        }, {
            b: "`",
            e: "`"
        }]
    }];
    r.c = i;
    var o = e.inherit(e.TM, {
        b: n
    })
      , a = "(\\(.*\\))?\\s*\\B[-=]>"
      , s = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [{
            b: /\(/,
            e: /\)/,
            k: t,
            c: ["self"].concat(i)
        }]
    };
    return {
        aliases: ["coffee", "cson", "iced"],
        k: t,
        i: /\/\*/,
        c: i.concat([e.C("###", "###"), e.HCM, {
            cN: "function",
            b: "^\\s*" + n + "\\s*=\\s*" + a,
            e: "[-=]>",
            rB: !0,
            c: [o, s]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [{
                cN: "function",
                b: a,
                e: "[-=]>",
                rB: !0,
                c: [s]
            }]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [o]
            }, o]
        }, {
            b: n + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        }])
    }
}),
hljs.registerLanguage("sql", function(e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>{}*#]/,
        c: [{
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
            e: /;/,
            eW: !0,
            l: /[\w\.]+/,
            k: {
                keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
            },
            c: [{
                cN: "string",
                b: "'",
                e: "'",
                c: [e.BE, {
                    b: "''"
                }]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [e.BE, {
                    b: '""'
                }]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE]
            }, e.CNM, e.CBCM, t]
        }, e.CBCM, t]
    }
}),
hljs.registerLanguage("perl", function(e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
      , n = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: t
    }
      , r = {
        b: "->{",
        e: "}"
    }
      , i = {
        v: [{
            b: /\$\d/
        }, {
            b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
        }, {
            b: /[\$%@][^\s\w{]/,
            r: 0
        }]
    }
      , o = [e.BE, n, i]
      , a = [i, e.HCM, e.C("^\\=\\w", "\\=cut", {
        eW: !0
    }), r, {
        cN: "string",
        c: o,
        v: [{
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        }, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {
            b: "'",
            e: "'",
            c: [e.BE]
        }, {
            b: '"',
            e: '"'
        }, {
            b: "`",
            e: "`",
            c: [e.BE]
        }, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        }]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [e.HCM, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        }, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [e.BE],
            r: 0
        }]
    }, {
        cN: "function",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        eE: !0,
        r: 5,
        c: [e.TM]
    }, {
        b: "-\\w\\b",
        r: 0
    }, {
        b: "^__DATA__$",
        e: "^__END__$",
        sL: "mojolicious",
        c: [{
            b: "^@@.*",
            e: "$",
            cN: "comment"
        }]
    }];
    return n.c = a,
    {
        aliases: ["pl", "pm"],
        l: /[\w\.]+/,
        k: t,
        c: r.c = a
    }
}),
hljs.registerLanguage("python", function(e) {
    var t = {
        keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
        built_in: "Ellipsis NotImplemented"
    }
      , n = {
        cN: "meta",
        b: /^(>>>|\.\.\.) /
    }
      , r = {
        cN: "subst",
        b: /\{/,
        e: /\}/,
        k: t,
        i: /#/
    }
      , i = {
        cN: "string",
        c: [e.BE],
        v: [{
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [n],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [n],
            r: 10
        }, {
            b: /(fr|rf|f)'''/,
            e: /'''/,
            c: [n, r]
        }, {
            b: /(fr|rf|f)"""/,
            e: /"""/,
            c: [n, r]
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/
        }, {
            b: /(b|br)"/,
            e: /"/
        }, {
            b: /(fr|rf|f)'/,
            e: /'/,
            c: [r]
        }, {
            b: /(fr|rf|f)"/,
            e: /"/,
            c: [r]
        }, e.ASM, e.QSM]
    }
      , o = {
        cN: "number",
        r: 0,
        v: [{
            b: e.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: e.CNR + "[lLjJ]?"
        }]
    }
      , a = {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: ["self", n, o, i]
    };
    return r.c = [i, o, n],
    {
        aliases: ["py", "gyp"],
        k: t,
        i: /(<\/|->|\?)|=>/,
        c: [n, o, i, e.HCM, {
            v: [{
                cN: "function",
                bK: "def"
            }, {
                cN: "class",
                bK: "class"
            }],
            e: /:/,
            i: /[${=;\n,]/,
            c: [e.UTM, a, {
                b: /->/,
                eW: !0,
                k: "None"
            }]
        }, {
            cN: "meta",
            b: /^[\t ]*@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        }]
    }
}),
hljs.registerLanguage("http", function(e) {
    var t = "HTTP/[0-9\\.]+";
    return {
        aliases: ["https"],
        i: "\\S",
        c: [{
            b: "^" + t,
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            b: "^[A-Z]+ (.*?) " + t + "$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }, {
                b: t
            }, {
                cN: "keyword",
                b: "[A-Z]+"
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                e: "$",
                r: 0
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: [],
                eW: !0
            }
        }]
    }
}),
hljs.registerLanguage("diff", function(e) {
    return {
        aliases: ["patch"],
        c: [{
            cN: "meta",
            r: 10,
            v: [{
                b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            }]
        }, {
            cN: "comment",
            v: [{
                b: /Index: /,
                e: /$/
            }, {
                b: /={3,}/,
                e: /$/
            }, {
                b: /^\-{3}/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+{3}/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            }]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "addition",
            b: "^\\!",
            e: "$"
        }]
    }
}),
hljs.registerLanguage("makefile", function(e) {
    var t = {
        cN: "variable",
        v: [{
            b: "\\$\\(" + e.UIR + "\\)",
            c: [e.BE]
        }, {
            b: /\$[@%<?\^\+\*]/
        }]
    }
      , n = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [e.BE, t]
    }
      , r = {
        cN: "variable",
        b: /\$\([\w-]+\s/,
        e: /\)/,
        k: {
            built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
        },
        c: [t]
    }
      , i = {
        b: "^" + e.UIR + "\\s*[:+?]?=",
        i: "\\n",
        rB: !0,
        c: [{
            b: "^" + e.UIR,
            e: "[:+?]?=",
            eE: !0
        }]
    }
      , o = {
        cN: "section",
        b: /^[^\s]+:/,
        e: /$/,
        c: [t]
    };
    return {
        aliases: ["mk", "mak"],
        k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
        l: /[\w-]+/,
        c: [e.HCM, t, n, r, i, {
            cN: "meta",
            b: /^\.PHONY:/,
            e: /$/,
            k: {
                "meta-keyword": ".PHONY"
            },
            l: /[\.\w]+/
        }, o]
    }
}),
hljs.registerLanguage("cs", function(e) {
    var t = {
        keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
        literal: "null false true"
    }
      , n = {
        cN: "string",
        b: '@"',
        e: '"',
        c: [{
            b: '""'
        }]
    }
      , r = e.inherit(n, {
        i: /\n/
    })
      , i = {
        cN: "subst",
        b: "{",
        e: "}",
        k: t
    }
      , o = e.inherit(i, {
        i: /\n/
    })
      , a = {
        cN: "string",
        b: /\$"/,
        e: '"',
        i: /\n/,
        c: [{
            b: "{{"
        }, {
            b: "}}"
        }, e.BE, o]
    }
      , s = {
        cN: "string",
        b: /\$@"/,
        e: '"',
        c: [{
            b: "{{"
        }, {
            b: "}}"
        }, {
            b: '""'
        }, i]
    }
      , l = e.inherit(s, {
        i: /\n/,
        c: [{
            b: "{{"
        }, {
            b: "}}"
        }, {
            b: '""'
        }, o]
    });
    i.c = [s, a, n, e.ASM, e.QSM, e.CNM, e.CBCM],
    o.c = [l, a, r, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, {
        i: /\n/
    })];
    var c = {
        v: [s, a, n, e.ASM, e.QSM]
    }
      , u = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
    return {
        aliases: ["csharp"],
        k: t,
        i: /::/,
        c: [e.C("///", "$", {
            rB: !0,
            c: [{
                cN: "doctag",
                v: [{
                    b: "///",
                    r: 0
                }, {
                    b: "\x3c!--|--\x3e"
                }, {
                    b: "</?",
                    e: ">"
                }]
            }]
        }), e.CLCM, e.CBCM, {
            cN: "meta",
            b: "#",
            e: "$",
            k: {
                "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
            }
        }, c, e.CNM, {
            bK: "class interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.TM, e.CLCM, e.CBCM]
        }, {
            bK: "namespace",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.inherit(e.TM, {
                b: "[a-zA-Z](\\.?\\w)*"
            }), e.CLCM, e.CBCM]
        }, {
            cN: "meta",
            b: "^\\s*\\[",
            eB: !0,
            e: "\\]",
            eE: !0,
            c: [{
                cN: "meta-string",
                b: /"/,
                e: /"/
            }]
        }, {
            bK: "new return throw await else",
            r: 0
        }, {
            cN: "function",
            b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [e.TM],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                eB: !0,
                eE: !0,
                k: t,
                r: 0,
                c: [c, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }]
    }
}),
hljs.registerLanguage("shell", function(e) {
    return {
        aliases: ["console"],
        c: [{
            cN: "meta",
            b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
            starts: {
                e: "$",
                sL: "bash"
            }
        }]
    }
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Fuse", [], t) : "object" == typeof exports ? exports.Fuse = t() : e.Fuse = t()
}(this, function() {
    return function(n) {
        function r(e) {
            if (i[e])
                return i[e].exports;
            var t = i[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, r),
            t.l = !0,
            t.exports
        }
        var i = {};
        return r.m = n,
        r.c = i,
        r.i = function(e) {
            return e
        }
        ,
        r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, "a", t),
            t
        }
        ,
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "",
        r(r.s = 8)
    }([function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t),
                n && r(e, n),
                e
            }
        }()
          , u = n(5)
          , d = n(7)
          , y = n(4)
          , i = function() {
            function b(e, t) {
                var n = t.location
                  , r = void 0 === n ? 0 : n
                  , i = t.distance
                  , o = void 0 === i ? 100 : i
                  , a = t.threshold
                  , s = void 0 === a ? .6 : a
                  , l = t.maxPatternLength
                  , c = void 0 === l ? 32 : l
                  , u = t.isCaseSensitive
                  , d = void 0 !== u && u
                  , f = t.tokenSeparator
                  , p = void 0 === f ? / +/g : f
                  , h = t.findAllMatches
                  , m = void 0 !== h && h
                  , g = t.minMatchCharLength
                  , v = void 0 === g ? 1 : g;
                (function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, b),
                this.options = {
                    location: r,
                    distance: o,
                    threshold: s,
                    maxPatternLength: c,
                    isCaseSensitive: d,
                    tokenSeparator: p,
                    findAllMatches: m,
                    minMatchCharLength: v
                },
                this.pattern = this.options.isCaseSensitive ? e : e.toLowerCase(),
                this.pattern.length <= c && (this.patternAlphabet = y(this.pattern))
            }
            return r(b, [{
                key: "search",
                value: function(e) {
                    if (this.options.isCaseSensitive || (e = e.toLowerCase()),
                    this.pattern === e)
                        return {
                            isMatch: !0,
                            score: 0,
                            matchedIndices: [[0, e.length - 1]]
                        };
                    var t = this.options
                      , n = t.maxPatternLength
                      , r = t.tokenSeparator;
                    if (this.pattern.length > n)
                        return u(e, this.pattern, r);
                    var i = this.options
                      , o = i.location
                      , a = i.distance
                      , s = i.threshold
                      , l = i.findAllMatches
                      , c = i.minMatchCharLength;
                    return d(e, this.pattern, this.patternAlphabet, {
                        location: o,
                        distance: a,
                        threshold: s,
                        findAllMatches: l,
                        minMatchCharLength: c
                    })
                }
            }]),
            b
        }();
        e.exports = i
    }
    , function(e, t, n) {
        "use strict";
        var u = n(0);
        e.exports = function(e, t) {
            return function e(t, n, r) {
                if (n) {
                    var i = n.indexOf(".")
                      , o = n
                      , a = null;
                    -1 !== i && (o = n.slice(0, i),
                    a = n.slice(i + 1));
                    var s = t[o];
                    if (null != s)
                        if (a || "string" != typeof s && "number" != typeof s)
                            if (u(s))
                                for (var l = 0, c = s.length; l < c; l += 1)
                                    e(s[l], a, r);
                            else
                                a && e(s, a, r);
                        else
                            r.push(s.toString())
                } else
                    r.push(t);
                return r
            }(e, t, [])
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function() {
            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [], t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, n = [], r = -1, i = -1, o = 0, a = e.length; o < a; o += 1) {
                var s = e[o];
                s && -1 === r ? r = o : s || -1 === r || (t <= (i = o - 1) - r + 1 && n.push([r, i]),
                r = -1)
            }
            return e[o - 1] && t <= o - r && n.push([r, o - 1]),
            n
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            for (var t = {}, n = e.length, r = 0; r < n; r += 1)
                t[e.charAt(r)] = 0;
            for (var i = 0; i < n; i += 1)
                t[e.charAt(i)] |= 1 << n - i - 1;
            return t
        }
    }
    , function(e, t, n) {
        "use strict";
        var u = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
        e.exports = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : / +/g
              , r = new RegExp(t.replace(u, "\\$&").replace(n, "|"))
              , i = e.match(r)
              , o = !!i
              , a = [];
            if (o)
                for (var s = 0, l = i.length; s < l; s += 1) {
                    var c = i[s];
                    a.push([e.indexOf(c), c.length - 1])
                }
            return {
                score: o ? .5 : 1,
                isMatch: o,
                matchedIndices: a
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n = t.errors
              , r = void 0 === n ? 0 : n
              , i = t.currentLocation
              , o = void 0 === i ? 0 : i
              , a = t.expectedLocation
              , s = void 0 === a ? 0 : a
              , l = t.distance
              , c = void 0 === l ? 100 : l
              , u = r / e.length
              , d = Math.abs(s - o);
            return c ? u + d / c : d ? 1 : u
        }
    }
    , function(e, t, n) {
        "use strict";
        var q = n(6)
          , H = n(3);
        e.exports = function(e, t, n, r) {
            for (var i = r.location, o = void 0 === i ? 0 : i, a = r.distance, s = void 0 === a ? 100 : a, l = r.threshold, c = void 0 === l ? .6 : l, u = r.findAllMatches, d = void 0 !== u && u, f = r.minMatchCharLength, p = void 0 === f ? 1 : f, h = o, m = e.length, g = c, v = e.indexOf(t, h), b = t.length, y = [], x = 0; x < m; x += 1)
                y[x] = 0;
            if (-1 !== v) {
                var w = q(t, {
                    errors: 0,
                    currentLocation: v,
                    expectedLocation: h,
                    distance: s
                });
                if (g = Math.min(w, g),
                -1 !== (v = e.lastIndexOf(t, h + b))) {
                    var _ = q(t, {
                        errors: 0,
                        currentLocation: v,
                        expectedLocation: h,
                        distance: s
                    });
                    g = Math.min(_, g)
                }
            }
            v = -1;
            for (var k = [], N = 1, C = b + m, E = 1 << b - 1, S = 0; S < b; S += 1) {
                for (var T = 0, L = C; T < L; )
                    q(t, {
                        errors: S,
                        currentLocation: h + L,
                        expectedLocation: h,
                        distance: s
                    }) <= g ? T = L : C = L,
                    L = Math.floor((C - T) / 2 + T);
                C = L;
                var A = Math.max(1, h - L + 1)
                  , M = d ? m : Math.min(h + L, m) + b
                  , j = Array(M + 2);
                j[M + 1] = (1 << S) - 1;
                for (var z = M; A <= z; z -= 1) {
                    var D = z - 1
                      , I = n[e.charAt(D)];
                    if (I && (y[D] = 1),
                    j[z] = (j[z + 1] << 1 | 1) & I,
                    0 !== S && (j[z] |= (k[z + 1] | k[z]) << 1 | 1 | k[z + 1]),
                    j[z] & E && (N = q(t, {
                        errors: S,
                        currentLocation: D,
                        expectedLocation: h,
                        distance: s
                    })) <= g) {
                        if (g = N,
                        (v = D) <= h)
                            break;
                        A = Math.max(1, 2 * h - v)
                    }
                }
                if (q(t, {
                    errors: S + 1,
                    currentLocation: h,
                    expectedLocation: h,
                    distance: s
                }) > g)
                    break;
                k = j
            }
            return {
                isMatch: 0 <= v,
                score: 0 === N ? .001 : N,
                matchedIndices: H(y, p)
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        var r = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t),
                n && r(e, n),
                e
            }
        }()
          , o = n(1)
          , R = n(2)
          , q = n(0)
          , i = function() {
            function B(e, t) {
                var n = t.location
                  , r = void 0 === n ? 0 : n
                  , i = t.distance
                  , o = void 0 === i ? 100 : i
                  , a = t.threshold
                  , s = void 0 === a ? .6 : a
                  , l = t.maxPatternLength
                  , c = void 0 === l ? 32 : l
                  , u = t.caseSensitive
                  , d = void 0 !== u && u
                  , f = t.tokenSeparator
                  , p = void 0 === f ? / +/g : f
                  , h = t.findAllMatches
                  , m = void 0 !== h && h
                  , g = t.minMatchCharLength
                  , v = void 0 === g ? 1 : g
                  , b = t.id
                  , y = void 0 === b ? null : b
                  , x = t.keys
                  , w = void 0 === x ? [] : x
                  , _ = t.shouldSort
                  , k = void 0 === _ || _
                  , N = t.getFn
                  , C = void 0 === N ? R : N
                  , E = t.sortFn
                  , S = void 0 === E ? function(e, t) {
                    return e.score - t.score
                }
                : E
                  , T = t.tokenize
                  , L = void 0 !== T && T
                  , A = t.matchAllTokens
                  , M = void 0 !== A && A
                  , j = t.includeMatches
                  , z = void 0 !== j && j
                  , D = t.includeScore
                  , I = void 0 !== D && D
                  , q = t.verbose
                  , H = void 0 !== q && q;
                (function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, B),
                this.options = {
                    location: r,
                    distance: o,
                    threshold: s,
                    maxPatternLength: c,
                    isCaseSensitive: d,
                    tokenSeparator: p,
                    findAllMatches: m,
                    minMatchCharLength: v,
                    id: y,
                    keys: w,
                    includeMatches: z,
                    includeScore: I,
                    shouldSort: k,
                    getFn: C,
                    sortFn: S,
                    verbose: H,
                    tokenize: L,
                    matchAllTokens: M
                },
                this.setCollection(e)
            }
            return r(B, [{
                key: "setCollection",
                value: function(e) {
                    return this.list = e
                }
            }, {
                key: "search",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                        limit: !1
                    };
                    this._log('---------\nSearch pattern: "' + e + '"');
                    var n = this._prepareSearchers(e)
                      , r = n.tokenSearchers
                      , i = n.fullSearcher
                      , o = this._search(r, i)
                      , a = o.weights
                      , s = o.results;
                    return this._computeScore(a, s),
                    this.options.shouldSort && this._sort(s),
                    t.limit && "number" == typeof t.limit && (s = s.slice(0, t.limit)),
                    this._format(s)
                }
            }, {
                key: "_prepareSearchers",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = [];
                    if (this.options.tokenize)
                        for (var n = e.split(this.options.tokenSeparator), r = 0, i = n.length; r < i; r += 1)
                            t.push(new o(n[r],this.options));
                    return {
                        tokenSearchers: t,
                        fullSearcher: new o(e,this.options)
                    }
                }
            }, {
                key: "_search",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : []
                      , t = arguments[1]
                      , n = this.list
                      , r = {}
                      , i = [];
                    if ("string" == typeof n[0]) {
                        for (var o = 0, a = n.length; o < a; o += 1)
                            this._analyze({
                                key: "",
                                value: n[o],
                                record: o,
                                index: o
                            }, {
                                resultMap: r,
                                results: i,
                                tokenSearchers: e,
                                fullSearcher: t
                            });
                        return {
                            weights: null,
                            results: i
                        }
                    }
                    for (var s = {}, l = 0, c = n.length; l < c; l += 1)
                        for (var u = n[l], d = 0, f = this.options.keys.length; d < f; d += 1) {
                            var p = this.options.keys[d];
                            if ("string" != typeof p) {
                                if (s[p.name] = {
                                    weight: 1 - p.weight || 1
                                },
                                p.weight <= 0 || 1 < p.weight)
                                    throw new Error("Key weight has to be > 0 and <= 1");
                                p = p.name
                            } else
                                s[p] = {
                                    weight: 1
                                };
                            this._analyze({
                                key: p,
                                value: this.options.getFn(u, p),
                                record: u,
                                index: l
                            }, {
                                resultMap: r,
                                results: i,
                                tokenSearchers: e,
                                fullSearcher: t
                            })
                        }
                    return {
                        weights: s,
                        results: i
                    }
                }
            }, {
                key: "_analyze",
                value: function(e, t) {
                    var n = e.key
                      , r = e.arrayIndex
                      , i = void 0 === r ? -1 : r
                      , o = e.value
                      , a = e.record
                      , s = e.index
                      , l = t.tokenSearchers
                      , c = void 0 === l ? [] : l
                      , u = t.fullSearcher
                      , d = void 0 === u ? [] : u
                      , f = t.resultMap
                      , p = void 0 === f ? {} : f
                      , h = t.results
                      , m = void 0 === h ? [] : h;
                    if (null != o) {
                        var g = !1
                          , v = -1
                          , b = 0;
                        if ("string" == typeof o) {
                            this._log("\nKey: " + ("" === n ? "-" : n));
                            var y = d.search(o);
                            if (this._log('Full text: "' + o + '", score: ' + y.score),
                            this.options.tokenize) {
                                for (var x = o.split(this.options.tokenSeparator), w = [], _ = 0; _ < c.length; _ += 1) {
                                    var k = c[_];
                                    this._log('\nPattern: "' + k.pattern + '"');
                                    for (var N = !1, C = 0; C < x.length; C += 1) {
                                        var E = x[C]
                                          , S = k.search(E)
                                          , T = {};
                                        S.isMatch ? (T[E] = S.score,
                                        N = g = !0,
                                        w.push(S.score)) : (T[E] = 1,
                                        this.options.matchAllTokens || w.push(1)),
                                        this._log('Token: "' + E + '", score: ' + T[E])
                                    }
                                    N && (b += 1)
                                }
                                v = w[0];
                                for (var L = w.length, A = 1; A < L; A += 1)
                                    v += w[A];
                                v /= L,
                                this._log("Token score average:", v)
                            }
                            var M = y.score;
                            -1 < v && (M = (M + v) / 2),
                            this._log("Score average:", M);
                            var j = !this.options.tokenize || !this.options.matchAllTokens || b >= c.length;
                            if (this._log("\nCheck Matches: " + j),
                            (g || y.isMatch) && j) {
                                var z = p[s];
                                z ? z.output.push({
                                    key: n,
                                    arrayIndex: i,
                                    value: o,
                                    score: M,
                                    matchedIndices: y.matchedIndices
                                }) : (p[s] = {
                                    item: a,
                                    output: [{
                                        key: n,
                                        arrayIndex: i,
                                        value: o,
                                        score: M,
                                        matchedIndices: y.matchedIndices
                                    }]
                                },
                                m.push(p[s]))
                            }
                        } else if (q(o))
                            for (var D = 0, I = o.length; D < I; D += 1)
                                this._analyze({
                                    key: n,
                                    arrayIndex: D,
                                    value: o[D],
                                    record: a,
                                    index: s
                                }, {
                                    resultMap: p,
                                    results: m,
                                    tokenSearchers: c,
                                    fullSearcher: d
                                })
                    }
                }
            }, {
                key: "_computeScore",
                value: function(e, t) {
                    this._log("\n\nComputing score:\n");
                    for (var n = 0, r = t.length; n < r; n += 1) {
                        for (var i = t[n].output, o = i.length, a = 1, s = 1, l = 0; l < o; l += 1) {
                            var c = e ? e[i[l].key].weight : 1
                              , u = (1 === c ? i[l].score : i[l].score || .001) * c;
                            1 !== c ? s = Math.min(s, u) : a *= i[l].nScore = u
                        }
                        t[n].score = 1 === s ? a : s,
                        this._log(t[n])
                    }
                }
            }, {
                key: "_sort",
                value: function(e) {
                    this._log("\n\nSorting...."),
                    e.sort(this.options.sortFn)
                }
            }, {
                key: "_format",
                value: function(e) {
                    var t = [];
                    this.options.verbose && this._log("\n\nOutput:\n\n", JSON.stringify(e));
                    var n = [];
                    this.options.includeMatches && n.push(function(e, t) {
                        var n = e.output;
                        t.matches = [];
                        for (var r = 0, i = n.length; r < i; r += 1) {
                            var o = n[r];
                            if (0 !== o.matchedIndices.length) {
                                var a = {
                                    indices: o.matchedIndices,
                                    value: o.value
                                };
                                o.key && (a.key = o.key),
                                o.hasOwnProperty("arrayIndex") && -1 < o.arrayIndex && (a.arrayIndex = o.arrayIndex),
                                t.matches.push(a)
                            }
                        }
                    }),
                    this.options.includeScore && n.push(function(e, t) {
                        t.score = e.score
                    });
                    for (var r = 0, i = e.length; r < i; r += 1) {
                        var o = e[r];
                        if (this.options.id && (o.item = this.options.getFn(o.item, this.options.id)[0]),
                        n.length) {
                            for (var a = {
                                item: o.item
                            }, s = 0, l = n.length; s < l; s += 1)
                                n[s](o, a);
                            t.push(a)
                        } else
                            t.push(o.item)
                    }
                    return t
                }
            }, {
                key: "_log",
                value: function() {
                    var e;
                    this.options.verbose && (e = console).log.apply(e, arguments)
                }
            }]),
            B
        }();
        e.exports = i
    }
    ])
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.mediumZoom = t()
}(this, function() {
    "use strict";
    var N = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
      , n = function(e) {
        return "IMG" === e.tagName
    }
      , C = function(e) {
        return e && 1 === e.nodeType
    }
      , E = function(e) {
        return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase()
    }
      , c = function(e) {
        try {
            return Array.isArray(e) ? e.filter(n) : (t = e,
            NodeList.prototype.isPrototypeOf(t) ? [].slice.call(e).filter(n) : C(e) ? [e].filter(n) : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)).filter(n) : [])
        } catch (e) {
            throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")
        }
        var t
    }
      , S = function(e, t) {
        var n = N({
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        }, t);
        if ("function" == typeof window.CustomEvent)
            return new CustomEvent(e,n);
        var r = document.createEvent("CustomEvent");
        return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail),
        r
    }
      , u = window.Promise || function(e) {
        function t() {}
        e(t, t)
    }
    ;
    return function(e, t) {
        void 0 === t && (t = {});
        var n = t.insertAt;
        if ("undefined" != typeof document) {
            var r = document.head || document.getElementsByTagName("head")[0]
              , i = document.createElement("style");
            i.type = "text/css",
            "top" === n && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i),
            i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
        }
    }(".medium-zoom-overlay{bottom:0;left:0;opacity:0;position:fixed;right:0;top:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{cursor:pointer;cursor:zoom-out;position:relative;will-change:transform}"),
    function t(e) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          , r = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var i = t.reduce(function(e, t) {
                return [].concat(e, c(t))
            }, []);
            return i.filter(function(e) {
                return -1 === v.indexOf(e)
            }).forEach(function(e) {
                v.push(e),
                e.classList.add("medium-zoom-image")
            }),
            a.forEach(function(e) {
                var t = e.type
                  , n = e.listener
                  , r = e.options;
                i.forEach(function(e) {
                    e.addEventListener(t, n, r)
                })
            }),
            k
        }
          , i = function() {
            var h = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target
              , m = function() {
                var e = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
                  , t = void 0
                  , n = void 0;
                if (x.container)
                    if (x.container instanceof Object)
                        t = (e = N({}, e, x.container)).width - e.left - e.right - 2 * x.margin,
                        n = e.height - e.top - e.bottom - 2 * x.margin;
                    else {
                        var r = (C(x.container) ? x.container : document.querySelector(x.container)).getBoundingClientRect()
                          , i = r.width
                          , o = r.height
                          , a = r.left
                          , s = r.top;
                        e = N({}, e, {
                            width: i,
                            height: o,
                            left: a,
                            top: s
                        })
                    }
                t = t || e.width - 2 * x.margin,
                n = n || e.height - 2 * x.margin;
                var l = w.zoomedHd || w.original
                  , c = E(l) ? t : l.naturalWidth || t
                  , u = E(l) ? n : l.naturalHeight || n
                  , d = l.getBoundingClientRect()
                  , f = d.top
                  , p = d.left
                  , h = d.width
                  , m = d.height
                  , g = Math.min(c, t) / h
                  , v = Math.min(u, n) / m
                  , b = Math.min(g, v)
                  , y = "scale(" + b + ") translate3d(" + ((t - h) / 2 - p + x.margin + e.left) / b + "px, " + ((n - m) / 2 - f + x.margin + e.top) / b + "px, 0)";
                w.zoomed.style.transform = y,
                w.zoomedHd && (w.zoomedHd.style.transform = y)
            };
            return new u(function(t) {
                if (h && -1 === v.indexOf(h))
                    t(k);
                else if (w.zoomed)
                    t(k);
                else {
                    if (h)
                        w.original = h;
                    else {
                        if (!(0 < v.length))
                            return void t(k);
                        var e = v;
                        w.original = e[0]
                    }
                    var n, r, i, o, a, s, l, c, u;
                    if (w.original.dispatchEvent(S("medium-zoom:open", {
                        detail: {
                            zoom: k
                        }
                    })),
                    y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                    b = !0,
                    w.zoomed = (i = (r = (n = w.original).getBoundingClientRect()).top,
                    o = r.left,
                    a = r.width,
                    s = r.height,
                    l = n.cloneNode(),
                    c = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
                    u = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                    l.removeAttribute("id"),
                    l.style.position = "absolute",
                    l.style.top = i + c + "px",
                    l.style.left = o + u + "px",
                    l.style.width = a + "px",
                    l.style.height = s + "px",
                    l.style.transform = "",
                    l),
                    document.body.appendChild(_),
                    x.template) {
                        var d = C(x.template) ? x.template : document.querySelector(x.template);
                        w.template = document.createElement("div"),
                        w.template.appendChild(d.content.cloneNode(!0)),
                        document.body.appendChild(w.template)
                    }
                    if (document.body.appendChild(w.zoomed),
                    window.requestAnimationFrame(function() {
                        document.body.classList.add("medium-zoom--opened")
                    }),
                    w.original.classList.add("medium-zoom-image--hidden"),
                    w.zoomed.classList.add("medium-zoom-image--opened"),
                    w.zoomed.addEventListener("click", g),
                    w.zoomed.addEventListener("transitionend", function e() {
                        b = !1,
                        w.zoomed.removeEventListener("transitionend", e),
                        w.original.dispatchEvent(S("medium-zoom:opened", {
                            detail: {
                                zoom: k
                            }
                        })),
                        t(k)
                    }),
                    w.original.getAttribute("data-zoom-src")) {
                        w.zoomedHd = w.zoomed.cloneNode(),
                        w.zoomedHd.removeAttribute("srcset"),
                        w.zoomedHd.removeAttribute("sizes"),
                        w.zoomedHd.src = w.zoomed.getAttribute("data-zoom-src"),
                        w.zoomedHd.onerror = function() {
                            clearInterval(f),
                            console.warn("Unable to reach the zoom image target " + w.zoomedHd.src),
                            w.zoomedHd = null,
                            m()
                        }
                        ;
                        var f = setInterval(function() {
                            w.zoomedHd.complete && (clearInterval(f),
                            w.zoomedHd.classList.add("medium-zoom-image--opened"),
                            w.zoomedHd.addEventListener("click", g),
                            document.body.appendChild(w.zoomedHd),
                            m())
                        }, 10)
                    } else if (w.original.hasAttribute("srcset")) {
                        w.zoomedHd = w.zoomed.cloneNode(),
                        w.zoomedHd.removeAttribute("sizes");
                        var p = w.zoomedHd.addEventListener("load", function() {
                            w.zoomedHd.removeEventListener("load", p),
                            w.zoomedHd.classList.add("medium-zoom-image--opened"),
                            w.zoomedHd.addEventListener("click", g),
                            document.body.appendChild(w.zoomedHd),
                            m()
                        })
                    } else
                        m()
                }
            }
            )
        }
          , g = function() {
            return new u(function(t) {
                !b && w.original ? (b = !0,
                document.body.classList.remove("medium-zoom--opened"),
                w.zoomed.style.transform = "",
                w.zoomedHd && (w.zoomedHd.style.transform = ""),
                w.template && (w.template.style.transition = "opacity 150ms",
                w.template.style.opacity = 0),
                w.original.dispatchEvent(S("medium-zoom:close", {
                    detail: {
                        zoom: k
                    }
                })),
                w.zoomed.addEventListener("transitionend", function e() {
                    w.original.classList.remove("medium-zoom-image--hidden"),
                    document.body.removeChild(w.zoomed),
                    w.zoomedHd && document.body.removeChild(w.zoomedHd),
                    document.body.removeChild(_),
                    w.zoomed.classList.remove("medium-zoom-image--opened"),
                    w.template && document.body.removeChild(w.template),
                    b = !1,
                    w.zoomed.removeEventListener("transitionend", e),
                    w.original.dispatchEvent(S("medium-zoom:closed", {
                        detail: {
                            zoom: k
                        }
                    })),
                    w.original = null,
                    w.zoomed = null,
                    w.zoomedHd = null,
                    w.template = null,
                    t(k)
                })) : t(k)
            }
            )
        }
          , o = function() {
            var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).target;
            return w.original ? g() : i({
                target: e
            })
        }
          , v = []
          , a = []
          , b = !1
          , y = 0
          , x = n
          , w = {
            original: null,
            zoomed: null,
            zoomedHd: null,
            template: null
        };
        "[object Object]" === Object.prototype.toString.call(e) ? x = e : (e || "string" == typeof e) && r(e);
        var s, l, _ = (s = (x = N({
            margin: 0,
            background: "#fff",
            scrollOffset: 40,
            container: null,
            template: null
        }, x)).background,
        (l = document.createElement("div")).classList.add("medium-zoom-overlay"),
        l.style.background = s,
        l);
        document.addEventListener("click", function(e) {
            var t = e.target;
            t !== _ ? -1 !== v.indexOf(t) && o({
                target: t
            }) : g()
        }),
        document.addEventListener("keyup", function(e) {
            27 === (e.keyCode || e.which) && g()
        }),
        document.addEventListener("scroll", function() {
            if (!b && w.original) {
                var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                Math.abs(y - e) > x.scrollOffset && setTimeout(g, 150)
            }
        }),
        window.addEventListener("resize", g);
        var k = {
            open: i,
            close: g,
            toggle: o,
            update: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e;
                if (e.background && (_.style.background = e.background),
                e.container && e.container instanceof Object && (t.container = N({}, x.container, e.container)),
                e.template) {
                    var n = C(e.template) ? e.template : document.querySelector(e.template);
                    t.template = n
                }
                return x = N({}, x, t),
                v.forEach(function(e) {
                    e.dispatchEvent(S("medium-zoom:update", {
                        detail: {
                            zoom: k
                        }
                    }))
                }),
                k
            },
            clone: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return t(N({}, x, e))
            },
            attach: r,
            detach: function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                w.zoomed && g();
                var r = 0 < t.length ? t.reduce(function(e, t) {
                    return [].concat(e, c(t))
                }, []) : v;
                return r.forEach(function(e) {
                    e.classList.remove("medium-zoom-image"),
                    e.dispatchEvent(S("medium-zoom:detach", {
                        detail: {
                            zoom: k
                        }
                    }))
                }),
                v = v.filter(function(e) {
                    return -1 === r.indexOf(e)
                }),
                k
            },
            on: function(t, n) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                return v.forEach(function(e) {
                    e.addEventListener("medium-zoom:" + t, n, r)
                }),
                a.push({
                    type: "medium-zoom:" + t,
                    listener: n,
                    options: r
                }),
                k
            },
            off: function(t, n) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                return v.forEach(function(e) {
                    e.removeEventListener("medium-zoom:" + t, n, r)
                }),
                a = a.filter(function(e) {
                    return !(e.type === "medium-zoom:" + t && e.listener.toString() === n.toString())
                }),
                k
            },
            getOptions: function() {
                return x
            },
            getImages: function() {
                return v
            },
            getZoomedImage: function() {
                return w.original
            }
        };
        return k
    }
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Siema", [], t) : "object" == typeof exports ? exports.Siema = t() : e.Siema = t()
}("undefined" != typeof self ? self : this, function() {
    return function(n) {
        function r(e) {
            if (i[e])
                return i[e].exports;
            var t = i[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n[e].call(t.exports, t, t.exports, r),
            t.l = !0,
            t.exports
        }
        var i = {};
        return r.m = n,
        r.c = i,
        r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, "a", t),
            t
        }
        ,
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        r.p = "",
        r(r.s = 0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = function() {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(e, t, n) {
                return t && r(e.prototype, t),
                n && r(e, n),
                e
            }
        }()
          , o = function() {
            function n(e) {
                var t = this;
                if (function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, n),
                this.config = n.mergeSettings(e),
                this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector,
                null === this.selector)
                    throw new Error("Something wrong with your selector 😭");
                this.resolveSlidesNumber(),
                this.selectorWidth = this.selector.offsetWidth,
                this.innerElements = [].slice.call(this.selector.children),
                this.currentSlide = this.config.loop ? this.config.startIndex % this.innerElements.length : Math.max(0, Math.min(this.config.startIndex, this.innerElements.length - this.perPage)),
                this.transformProperty = n.webkitOrNot(),
                ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler", "clickHandler"].forEach(function(e) {
                    t[e] = t[e].bind(t)
                }),
                this.init()
            }
            return i(n, [{
                key: "attachEvents",
                value: function() {
                    window.addEventListener("resize", this.resizeHandler),
                    this.config.draggable && (this.pointerDown = !1,
                    this.drag = {
                        startX: 0,
                        endX: 0,
                        startY: 0,
                        letItGo: null,
                        preventClick: !1
                    },
                    this.selector.addEventListener("touchstart", this.touchstartHandler),
                    this.selector.addEventListener("touchend", this.touchendHandler),
                    this.selector.addEventListener("touchmove", this.touchmoveHandler),
                    this.selector.addEventListener("mousedown", this.mousedownHandler),
                    this.selector.addEventListener("mouseup", this.mouseupHandler),
                    this.selector.addEventListener("mouseleave", this.mouseleaveHandler),
                    this.selector.addEventListener("mousemove", this.mousemoveHandler),
                    this.selector.addEventListener("click", this.clickHandler))
                }
            }, {
                key: "detachEvents",
                value: function() {
                    window.removeEventListener("resize", this.resizeHandler),
                    this.selector.removeEventListener("touchstart", this.touchstartHandler),
                    this.selector.removeEventListener("touchend", this.touchendHandler),
                    this.selector.removeEventListener("touchmove", this.touchmoveHandler),
                    this.selector.removeEventListener("mousedown", this.mousedownHandler),
                    this.selector.removeEventListener("mouseup", this.mouseupHandler),
                    this.selector.removeEventListener("mouseleave", this.mouseleaveHandler),
                    this.selector.removeEventListener("mousemove", this.mousemoveHandler),
                    this.selector.removeEventListener("click", this.clickHandler)
                }
            }, {
                key: "init",
                value: function() {
                    this.attachEvents(),
                    this.selector.style.overflow = "hidden",
                    this.selector.style.direction = this.config.rtl ? "rtl" : "ltr",
                    this.buildSliderFrame(),
                    this.config.onInit.call(this)
                }
            }, {
                key: "buildSliderFrame",
                value: function() {
                    var e = this.selectorWidth / this.perPage
                      , t = this.config.loop ? this.innerElements.length + 2 * this.perPage : this.innerElements.length;
                    this.sliderFrame = document.createElement("div"),
                    this.sliderFrame.style.width = e * t + "px",
                    this.enableTransition(),
                    this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
                    var n = document.createDocumentFragment();
                    if (this.config.loop)
                        for (var r = this.innerElements.length - this.perPage; r < this.innerElements.length; r++) {
                            var i = this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));
                            n.appendChild(i)
                        }
                    for (var o = 0; o < this.innerElements.length; o++) {
                        var a = this.buildSliderFrameItem(this.innerElements[o]);
                        n.appendChild(a)
                    }
                    if (this.config.loop)
                        for (var s = 0; s < this.perPage; s++) {
                            var l = this.buildSliderFrameItem(this.innerElements[s].cloneNode(!0));
                            n.appendChild(l)
                        }
                    this.sliderFrame.appendChild(n),
                    this.selector.innerHTML = "",
                    this.selector.appendChild(this.sliderFrame),
                    this.slideToCurrent()
                }
            }, {
                key: "buildSliderFrameItem",
                value: function(e) {
                    var t = document.createElement("div");
                    return t.style.cssFloat = this.config.rtl ? "right" : "left",
                    t.style.float = this.config.rtl ? "right" : "left",
                    t.style.width = (this.config.loop ? 100 / (this.innerElements.length + 2 * this.perPage) : 100 / this.innerElements.length) + "%",
                    t.appendChild(e),
                    t
                }
            }, {
                key: "resolveSlidesNumber",
                value: function() {
                    if ("number" == typeof this.config.perPage)
                        this.perPage = this.config.perPage;
                    else if ("object" === r(this.config.perPage))
                        for (var e in this.perPage = 1,
                        this.config.perPage)
                            window.innerWidth >= e && (this.perPage = this.config.perPage[e])
                }
            }, {
                key: "prev",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1
                      , t = arguments[1];
                    if (!(this.innerElements.length <= this.perPage)) {
                        var n = this.currentSlide;
                        if (this.config.loop)
                            if (this.currentSlide - e < 0) {
                                this.disableTransition();
                                var r = this.currentSlide + this.innerElements.length
                                  , i = r + this.perPage
                                  , o = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage)
                                  , a = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (o + a) + "px, 0, 0)",
                                this.currentSlide = r - e
                            } else
                                this.currentSlide = this.currentSlide - e;
                        else
                            this.currentSlide = Math.max(this.currentSlide - e, 0);
                        n !== this.currentSlide && (this.slideToCurrent(this.config.loop),
                        this.config.onChange.call(this),
                        t && t.call(this))
                    }
                }
            }, {
                key: "next",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1
                      , t = arguments[1];
                    if (!(this.innerElements.length <= this.perPage)) {
                        var n = this.currentSlide;
                        if (this.config.loop)
                            if (this.currentSlide + e > this.innerElements.length - this.perPage) {
                                this.disableTransition();
                                var r = this.currentSlide - this.innerElements.length
                                  , i = r + this.perPage
                                  , o = (this.config.rtl ? 1 : -1) * i * (this.selectorWidth / this.perPage)
                                  , a = this.config.draggable ? this.drag.endX - this.drag.startX : 0;
                                this.sliderFrame.style[this.transformProperty] = "translate3d(" + (o + a) + "px, 0, 0)",
                                this.currentSlide = r + e
                            } else
                                this.currentSlide = this.currentSlide + e;
                        else
                            this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage);
                        n !== this.currentSlide && (this.slideToCurrent(this.config.loop),
                        this.config.onChange.call(this),
                        t && t.call(this))
                    }
                }
            }, {
                key: "disableTransition",
                value: function() {
                    this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing,
                    this.sliderFrame.style.transition = "all 0ms " + this.config.easing
                }
            }, {
                key: "enableTransition",
                value: function() {
                    this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing,
                    this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing
                }
            }, {
                key: "goTo",
                value: function(e, t) {
                    if (!(this.innerElements.length <= this.perPage)) {
                        var n = this.currentSlide;
                        this.currentSlide = this.config.loop ? e % this.innerElements.length : Math.min(Math.max(e, 0), this.innerElements.length - this.perPage),
                        n !== this.currentSlide && (this.slideToCurrent(),
                        this.config.onChange.call(this),
                        t && t.call(this))
                    }
                }
            }, {
                key: "slideToCurrent",
                value: function(e) {
                    var t = this
                      , n = this.config.loop ? this.currentSlide + this.perPage : this.currentSlide
                      , r = (this.config.rtl ? 1 : -1) * n * (this.selectorWidth / this.perPage);
                    e ? requestAnimationFrame(function() {
                        requestAnimationFrame(function() {
                            t.enableTransition(),
                            t.sliderFrame.style[t.transformProperty] = "translate3d(" + r + "px, 0, 0)"
                        })
                    }) : this.sliderFrame.style[this.transformProperty] = "translate3d(" + r + "px, 0, 0)"
                }
            }, {
                key: "updateAfterDrag",
                value: function() {
                    var e = (this.config.rtl ? -1 : 1) * (this.drag.endX - this.drag.startX)
                      , t = Math.abs(e)
                      , n = this.config.multipleDrag ? Math.ceil(t / (this.selectorWidth / this.perPage)) : 1
                      , r = 0 < e && this.currentSlide - n < 0
                      , i = e < 0 && this.currentSlide + n > this.innerElements.length - this.perPage;
                    0 < e && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(n) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(n),
                    this.slideToCurrent(r || i)
                }
            }, {
                key: "resizeHandler",
                value: function() {
                    this.resolveSlidesNumber(),
                    this.currentSlide + this.perPage > this.innerElements.length && (this.currentSlide = this.innerElements.length <= this.perPage ? 0 : this.innerElements.length - this.perPage),
                    this.selectorWidth = this.selector.offsetWidth,
                    this.buildSliderFrame()
                }
            }, {
                key: "clearDrag",
                value: function() {
                    this.drag = {
                        startX: 0,
                        endX: 0,
                        startY: 0,
                        letItGo: null,
                        preventClick: this.drag.preventClick
                    }
                }
            }, {
                key: "touchstartHandler",
                value: function(e) {
                    -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.stopPropagation(),
                    this.pointerDown = !0,
                    this.drag.startX = e.touches[0].pageX,
                    this.drag.startY = e.touches[0].pageY)
                }
            }, {
                key: "touchendHandler",
                value: function(e) {
                    e.stopPropagation(),
                    this.pointerDown = !1,
                    this.enableTransition(),
                    this.drag.endX && this.updateAfterDrag(),
                    this.clearDrag()
                }
            }, {
                key: "touchmoveHandler",
                value: function(e) {
                    if (e.stopPropagation(),
                    null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)),
                    this.pointerDown && this.drag.letItGo) {
                        e.preventDefault(),
                        this.drag.endX = e.touches[0].pageX,
                        this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing,
                        this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                        var t = (this.config.loop ? this.currentSlide + this.perPage : this.currentSlide) * (this.selectorWidth / this.perPage)
                          , n = this.drag.endX - this.drag.startX
                          , r = this.config.rtl ? t + n : t - n;
                        this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * r + "px, 0, 0)"
                    }
                }
            }, {
                key: "mousedownHandler",
                value: function(e) {
                    -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT"].indexOf(e.target.nodeName) || (e.preventDefault(),
                    e.stopPropagation(),
                    this.pointerDown = !0,
                    this.drag.startX = e.pageX)
                }
            }, {
                key: "mouseupHandler",
                value: function(e) {
                    e.stopPropagation(),
                    this.pointerDown = !1,
                    this.selector.style.cursor = "-webkit-grab",
                    this.enableTransition(),
                    this.drag.endX && this.updateAfterDrag(),
                    this.clearDrag()
                }
            }, {
                key: "mousemoveHandler",
                value: function(e) {
                    if (e.preventDefault(),
                    this.pointerDown) {
                        "A" === e.target.nodeName && (this.drag.preventClick = !0),
                        this.drag.endX = e.pageX,
                        this.selector.style.cursor = "-webkit-grabbing",
                        this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing,
                        this.sliderFrame.style.transition = "all 0ms " + this.config.easing;
                        var t = (this.config.loop ? this.currentSlide + this.perPage : this.currentSlide) * (this.selectorWidth / this.perPage)
                          , n = this.drag.endX - this.drag.startX
                          , r = this.config.rtl ? t + n : t - n;
                        this.sliderFrame.style[this.transformProperty] = "translate3d(" + (this.config.rtl ? 1 : -1) * r + "px, 0, 0)"
                    }
                }
            }, {
                key: "mouseleaveHandler",
                value: function(e) {
                    this.pointerDown && (this.pointerDown = !1,
                    this.selector.style.cursor = "-webkit-grab",
                    this.drag.endX = e.pageX,
                    this.drag.preventClick = !1,
                    this.enableTransition(),
                    this.updateAfterDrag(),
                    this.clearDrag())
                }
            }, {
                key: "clickHandler",
                value: function(e) {
                    this.drag.preventClick && e.preventDefault(),
                    this.drag.preventClick = !1
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    if (e < 0 || e >= this.innerElements.length)
                        throw new Error("Item to remove doesn't exist 😭");
                    var n = e < this.currentSlide
                      , r = this.currentSlide + this.perPage - 1 === e;
                    (n || r) && this.currentSlide--,
                    this.innerElements.splice(e, 1),
                    this.buildSliderFrame(),
                    t && t.call(this)
                }
            }, {
                key: "insert",
                value: function(e, t, n) {
                    if (t < 0 || t > this.innerElements.length + 1)
                        throw new Error("Unable to inset it at this index 😭");
                    if (-1 !== this.innerElements.indexOf(e))
                        throw new Error("The same item in a carousel? Really? Nope 😭");
                    var r = 0 < (t <= this.currentSlide) && this.innerElements.length;
                    this.currentSlide = r ? this.currentSlide + 1 : this.currentSlide,
                    this.innerElements.splice(t, 0, e),
                    this.buildSliderFrame(),
                    n && n.call(this)
                }
            }, {
                key: "prepend",
                value: function(e, t) {
                    this.insert(e, 0),
                    t && t.call(this)
                }
            }, {
                key: "append",
                value: function(e, t) {
                    this.insert(e, this.innerElements.length + 1),
                    t && t.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]
                      , t = arguments[1];
                    if (this.detachEvents(),
                    this.selector.style.cursor = "auto",
                    e) {
                        for (var n = document.createDocumentFragment(), r = 0; r < this.innerElements.length; r++)
                            n.appendChild(this.innerElements[r]);
                        this.selector.innerHTML = "",
                        this.selector.appendChild(n),
                        this.selector.removeAttribute("style")
                    }
                    t && t.call(this)
                }
            }], [{
                key: "mergeSettings",
                value: function(e) {
                    var t = {
                        selector: ".siema",
                        duration: 200,
                        easing: "ease-out",
                        perPage: 1,
                        startIndex: 0,
                        draggable: !0,
                        multipleDrag: !0,
                        threshold: 20,
                        loop: !1,
                        rtl: !1,
                        onInit: function() {},
                        onChange: function() {}
                    }
                      , n = e;
                    for (var r in n)
                        t[r] = n[r];
                    return t
                }
            }, {
                key: "webkitOrNot",
                value: function() {
                    return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform"
                }
            }]),
            n
        }();
        t.default = o,
        e.exports = t.default
    }
    ])
}),
function(e, t) {
    "object" == typeof exports ? module.exports = t(window, document) : e.SimpleScrollbar = t(window, document)
}(this, function(e, a) {
    function n(e) {
        Object.prototype.hasOwnProperty.call(e, "data-simple-scrollbar") || Object.defineProperty(e, "data-simple-scrollbar", {
            value: new i(e)
        })
    }
    function t(e) {
        for (this.target = e,
        this.direction = window.getComputedStyle(this.target).direction,
        this.bar = '<div class="ss-scroll">',
        this.wrapper = a.createElement("div"),
        this.wrapper.setAttribute("class", "ss-wrapper"),
        this.el = a.createElement("div"),
        this.el.setAttribute("class", "ss-content"),
        "rtl" === this.direction && this.el.classList.add("rtl"),
        this.wrapper.appendChild(this.el); this.target.firstChild; )
            this.el.appendChild(this.target.firstChild);
        this.target.appendChild(this.wrapper),
        this.target.insertAdjacentHTML("beforeend", this.bar),
        this.bar = this.target.lastChild,
        function(t, n) {
            function r(e) {
                var t = e.pageY - o;
                o = e.pageY,
                s(function() {
                    n.el.scrollTop += t / n.scrollRatio
                })
            }
            function i() {
                t.classList.remove("ss-grabbed"),
                a.body.classList.remove("ss-grabbed"),
                a.removeEventListener("mousemove", r),
                a.removeEventListener("mouseup", i)
            }
            var o;
            t.addEventListener("mousedown", function(e) {
                return o = e.pageY,
                t.classList.add("ss-grabbed"),
                a.body.classList.add("ss-grabbed"),
                a.addEventListener("mousemove", r),
                a.addEventListener("mouseup", i),
                !1
            })
        }(this.bar, this),
        this.moveBar(),
        this.el.addEventListener("scroll", this.moveBar.bind(this)),
        this.el.addEventListener("mouseenter", this.moveBar.bind(this)),
        this.target.classList.add("ss-container");
        var t = window.getComputedStyle(e);
        "0px" === t.height && "0px" !== t["max-height"] && (e.style.height = t["max-height"])
    }
    function r() {
        for (var e = a.querySelectorAll("*[ss-container]"), t = 0; t < e.length; t++)
            n(e[t])
    }
    var s = e.requestAnimationFrame || e.setImmediate || function(e) {
        return setTimeout(e, 0)
    }
    ;
    t.prototype = {
        moveBar: function(e) {
            var t = this.el.scrollHeight
              , n = this.el.clientHeight
              , r = this;
            this.scrollRatio = n / t;
            var i = "rtl" === r.direction ? r.target.clientWidth - r.bar.clientWidth + 18 : -1 * (r.target.clientWidth - r.bar.clientWidth);
            s(function() {
                1 <= r.scrollRatio ? r.bar.classList.add("ss-hidden") : (r.bar.classList.remove("ss-hidden"),
                r.bar.style.cssText = "height:" + Math.max(100 * r.scrollRatio, 10) + "%; top:" + r.el.scrollTop / t * 100 + "%;right:" + i + "px;")
            })
        }
    },
    a.addEventListener("DOMContentLoaded", r),
    t.initEl = n,
    t.initAll = r;
    var i = t;
    return i
}),
function(a) {
    var e = {
        featuredSlider: function() {
            if (a(".featured-slider").length) {
                var e = new Siema({
                    selector: ".featured-slider",
                    duration: 500,
                    easing: "ease-in-out",
                    loop: !0,
                    onInit: function() {
                        var e = a(".featured-slider")
                          , t = e.height();
                        e.find(".post-wrap").height(t),
                        e.addClass("visible")
                    }
                });
                a(".prev").on("click", function() {
                    e.prev()
                }),
                a(".next").on("click", function() {
                    e.next()
                });
                var t = null;
                function n() {
                    t = setInterval(function() {
                        e.next()
                    }, 3e3)
                }
                n(),
                a(".featured-slider-wrap").hover(function() {
                    clearInterval(t)
                }, function() {
                    n()
                })
            }
        },
        responsiveIframe: function() {
            a(".single-article").fitVids()
        },
        highlighter: function() {
            a("pre code").each(function(e, t) {
                hljs.highlightBlock(t)
            })
        },
        mobileMenu: function() {
            a("#menu-open").on("click", function(e) {
                e.preventDefault(),
                a("body").toggleClass("mobile-menu-opened")
            }),
            a("#backdrop").on("click", function() {
                a("body").toggleClass("mobile-menu-opened")
            })
        },
        SearchProcess: function() {
            var t = [];
            a(".search-open").on("click", function(e) {
                e.preventDefault(),
                0 == t.length && void 0 !== typeof searchApi && a.get(searchApi).done(function(e) {
                    t = e.posts,
                    function() {
                        if (0 < t.length) {
                            fuse = new Fuse(t,{
                                shouldSort: !0,
                                tokenize: !0,
                                matchAllTokens: !0,
                                threshold: 0,
                                location: 0,
                                distance: 100,
                                maxPatternLength: 32,
                                minMatchCharLength: 1,
                                keys: [{
                                    name: "title"
                                }, {
                                    name: "plaintext"
                                }]
                            }),
                            a("#search-input").on("keyup", function() {
                                keyWord = this.value;
                                var e = fuse.search(keyWord)
                                  , r = ""
                                  , i = a("html").attr("lang");
                                a.each(e, function(e, t) {
                                    var n = new Date(t.published_at).toLocaleDateString(i, {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    });
                                    r += '<div id="' + t.id + '" class="result-item">',
                                    r += '<a href="' + t.url + '"><div class="title">' + t.title + "</div>",
                                    r += '<div class="date">' + n + "</div></a>",
                                    r += "</div>"
                                }),
                                a("#search-results").html(r)
                            })
                        }
                    }()
                }).fail(function(e) {}),
                a(".search-popup").addClass("visible"),
                a("#search-input").css("visibility", "visible").focus()
            }),
            a(".close-button").on("click", function(e) {
                e.preventDefault(),
                a(".search-popup").removeClass("visible"),
                a("#search-input").val(""),
                a("#search-results").empty()
            })
        },
        backToTop: function() {
            a(window).scroll(function() {
                100 < a(this).scrollTop() ? a("#back-to-top").fadeIn() : a("#back-to-top").fadeOut()
            }),
            a("#back-to-top").on("click", function(e) {
                return e.preventDefault(),
                a("html, body").animate({
                    scrollTop: 0
                }, 1e3),
                !1
            })
        },
        gallery: function() {
            document.querySelectorAll(".kg-gallery-image img").forEach(function(e) {
                var t = e.closest(".kg-gallery-image")
                  , n = e.attributes.width.value / e.attributes.height.value;
                t.style.flex = n + " 1 0%"
            }),
            mediumZoom(".kg-gallery-image img", {
                margin: 30
            })
        },
        loadMore: function() {
            var n = a("link[rel=next]").attr("href")
              , r = a(".btn-load-more");
            r.on("click", function(e) {
                e.preventDefault();
                var t = n.split(/page/)[0] + "page/" + nextPage + "/";
                a.ajax({
                    url: t,
                    beforeSend: function() {
                        r.addClass("loading")
                    }
                }).done(function(e) {
                    var t = a(e).find(".post-wrap");
                    r.removeClass("loading"),
                    a(".post-list-wrap").append(t),
                    a(window).scroll(),
                    nextPage++,
                    nextPage > totalPages && (r.addClass("disabled"),
                    r.attr("disabled", !0))
                })
            })
        },
        sortAuthorTags: function() {
            a("#sortby").on("change", function() {
                var e, n = this.value;
                e = a(".card-wrap").sort(function(e, t) {
                    switch (n) {
                    case "post-asc":
                        return a(e).data("count") > a(t).data("count") ? 1 : -1;
                    case "post-desc":
                        return a(e).data("count") > a(t).data("count") ? -1 : 1;
                    case "alpha-asc":
                        return a(e).data("name").toLowerCase() > a(t).data("name").toLowerCase() ? 1 : -1;
                    case "alpha-desc":
                        return a(e).data("name").toLowerCase() > a(t).data("name").toLowerCase() ? -1 : 1
                    }
                }),
                a("#sortable-wrap").append(e),
                a(window).scroll()
            })
        },
        animateOnScroll: function() {
            var t = a(window);
            t.on("scroll resize reload", function() {
                var e = t.height()
                  , i = t.scrollTop()
                  , o = i + e;
                a(".animate").each(function() {
                    var e = a(this)
                      , t = e.height()
                      , n = e.offset().top
                      , r = n + t;
                    (n <= o - 100 && i <= n || i <= r && r <= o || n <= o - 100 && o <= r) && e.addClass("visible " + e.data("animation"))
                })
            }),
            t.scroll()
        },
        menuScroll: function() {
            function e() {
                var e = a(".site-header").height() - a(".logo-wrap").height() + a(".header-bottom").height();
                a(".site-nav").height(e - 282)
            }
            e(),
            a(window).on("resize", e);
            var t = a(".site-nav")[0];
            SimpleScrollbar.initEl(t)
        },
        init: function() {
            e.featuredSlider(),
            e.responsiveIframe(),
            e.highlighter(),
            e.mobileMenu(),
            e.SearchProcess(),
            e.backToTop(),
            e.gallery(),
            e.loadMore(),
            e.sortAuthorTags(),
            e.animateOnScroll(),
            e.menuScroll()
        }
    };
    a(document).ready(function() {
        e.init()
    })
}(jQuery);
