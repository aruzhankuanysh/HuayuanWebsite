/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function a() {
    var e, t, n, a, o, i, s;
    for (var c in T)
      if (T.hasOwnProperty(c)) {
        if (
          ((e = []),
          (t = T[c]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
          (i = e[o]),
            (s = i.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = a)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = a)),
            C.push((a ? "" : "no-") + s.join("-"));
      }
  }
  function o(e) {
    var t = E.className,
      n = Modernizr._config.classPrefix || "";
    if ((k && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      k ? (E.className.baseVal = t) : (E.className = t));
  }
  function i(e, t) {
    if ("object" == typeof e) for (var n in e) S(e, n) && i(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        a = Modernizr[r[0]];
      if ((2 == r.length && (a = a[r[1]]), "undefined" != typeof a))
        return Modernizr;
      (t = "function" == typeof t ? t() : t),
        1 == r.length
          ? (Modernizr[r[0]] = t)
          : (!Modernizr[r[0]] ||
              Modernizr[r[0]] instanceof Boolean ||
              (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            (Modernizr[r[0]][r[1]] = t)),
        o([(t && 0 != t ? "" : "no-") + r.join("-")]),
        Modernizr._trigger(e, t);
    }
    return Modernizr;
  }
  function s() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : k
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function c() {
    var e = t.body;
    return e || ((e = s(k ? "svg" : "body")), (e.fake = !0)), e;
  }
  function l(e, n, r, a) {
    var o,
      i,
      l,
      d,
      u = "modernizr",
      f = s("div"),
      p = c();
    if (parseInt(r, 10))
      for (; r--; )
        (l = s("div")), (l.id = a ? a[r] : u + (r + 1)), f.appendChild(l);
    return (
      (o = s("style")),
      (o.type = "text/css"),
      (o.id = "s" + u),
      (p.fake ? p : f).appendChild(o),
      p.appendChild(f),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(t.createTextNode(e)),
      (f.id = u),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (d = E.style.overflow),
        (E.style.overflow = "hidden"),
        E.appendChild(p)),
      (i = n(f, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (E.style.overflow = d), E.offsetHeight)
        : f.parentNode.removeChild(f),
      !!i
    );
  }
  function d(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function u(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function f(t, n, r) {
    var a;
    if ("getComputedStyle" in e) {
      a = getComputedStyle.call(e, t, n);
      var o = e.console;
      if (null !== a) r && (a = a.getPropertyValue(r));
      else if (o) {
        var i = o.error ? "error" : "log";
        o[i].call(
          o,
          "getComputedStyle returning null, its possible modernizr test results are inaccurate"
        );
      }
    } else a = !n && t.currentStyle && t.currentStyle[r];
    return a;
  }
  function p(t, r) {
    var a = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; a--; ) if (e.CSS.supports(u(t[a]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; a--; ) o.push("(" + u(t[a]) + ":" + r + ")");
      return (
        (o = o.join(" or ")),
        l(
          "@supports (" + o + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == f(e, null, "position");
          }
        )
      );
    }
    return n;
  }
  function m(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function g(e, t, a, o) {
    function i() {
      l && (delete A.style, delete A.modElem);
    }
    if (((o = r(o, "undefined") ? !1 : o), !r(a, "undefined"))) {
      var c = p(e, a);
      if (!r(c, "undefined")) return c;
    }
    for (
      var l, u, f, g, h, v = ["modernizr", "tspan", "samp"];
      !A.style && v.length;

    )
      (l = !0), (A.modElem = s(v.shift())), (A.style = A.modElem.style);
    for (f = e.length, u = 0; f > u; u++)
      if (
        ((g = e[u]),
        (h = A.style[g]),
        d(g, "-") && (g = m(g)),
        A.style[g] !== n)
      ) {
        if (o || r(a, "undefined")) return i(), "pfx" == t ? g : !0;
        try {
          A.style[g] = a;
        } catch (y) {}
        if (A.style[g] != h) return i(), "pfx" == t ? g : !0;
      }
    return i(), !1;
  }
  function h(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function v(e, t, n) {
    var a;
    for (var o in e)
      if (e[o] in t)
        return n === !1
          ? e[o]
          : ((a = t[e[o]]), r(a, "function") ? h(a, n || t) : a);
    return !1;
  }
  function y(e, t, n, a, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + z.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? g(s, t, a, o)
      : ((s = (e + " " + R.join(i + " ") + i).split(" ")), v(s, t, n));
  }
  function b(e, t, r) {
    return y(e, n, n, t, r);
  }
  function x(e, t) {
    var n = e.deleteDatabase(t);
    (n.onsuccess = function () {
      i("indexeddb.deletedatabase", !0);
    }),
      (n.onerror = function () {
        i("indexeddb.deletedatabase", !1);
      });
  }
  var T = [],
    w = {
      _version: "3.5.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        T.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        T.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = w), (Modernizr = new Modernizr());
  var S,
    C = [],
    E = t.documentElement,
    k = "svg" === E.nodeName.toLowerCase();
  !(function () {
    var e = {}.hasOwnProperty;
    S =
      r(e, "undefined") || r(e.call, "undefined")
        ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined");
          }
        : function (t, n) {
            return e.call(t, n);
          };
  })(),
    (w._l = {}),
    (w.on = function (e, t) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (w._trigger = function (e, t) {
      if (this._l[e]) {
        var n = this._l[e];
        setTimeout(function () {
          var e, r;
          for (e = 0; e < n.length; e++) (r = n[e])(t);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function () {
      w.addTest = i;
    });
  k ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = b.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function a(e, t) {
        var n = b.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (b.elements = n + " " + e),
          l(t);
      }
      function o(e) {
        var t = y[e[h]];
        return t || ((t = {}), v++, (e[h] = v), (y[v] = t)), t;
      }
      function i(e, n, r) {
        if ((n || (n = t), u)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : g.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !a.canHaveChildren || m.test(e) || a.tagUrn
            ? a
            : r.frag.appendChild(a)
        );
      }
      function s(e, n) {
        if ((e || (e = t), u)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length;
          c > i;
          i++
        )
          a.createElement(s[i]);
        return a;
      }
      function c(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return b.shivMethods ? i(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(b, t.frag));
      }
      function l(e) {
        e || (e = t);
        var r = o(e);
        return (
          !b.shivCSS ||
            d ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          u || c(e, r),
          e
        );
      }
      var d,
        u,
        f = "3.7.3",
        p = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        g =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = "_html5shiv",
        v = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (d = "hidden" in e),
            (u =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (d = !0), (u = !0);
        }
      })();
      var b = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: f,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: u,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: l,
        createElement: i,
        createDocumentFragment: s,
        addElements: a,
      };
      (e.html5 = b),
        l(t),
        "object" == typeof module && module.exports && (module.exports = b);
    })("undefined" != typeof e ? e : this, t);
  var _ = (function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t
      ? function (e) {
          var n = t(e);
          return (n && n.matches) || !1;
        }
      : function (t) {
          var n = !1;
          return (
            l(
              "@media " + t + " { #modernizr { position: absolute; } }",
              function (t) {
                n =
                  "absolute" ==
                  (e.getComputedStyle
                    ? e.getComputedStyle(t, null)
                    : t.currentStyle
                  ).position;
              }
            ),
            n
          );
        };
  })();
  w.mq = _;
  var P = "Moz O ms Webkit",
    z = w._config.usePrefixes ? P.split(" ") : [];
  w._cssomPrefixes = z;
  var N = { elem: s("modernizr") };
  Modernizr._q.push(function () {
    delete N.elem;
  });
  var A = { style: N.elem.style };
  Modernizr._q.unshift(function () {
    delete A.style;
  });
  var R = w._config.usePrefixes ? P.toLowerCase().split(" ") : [];
  (w._domPrefixes = R), (w.testAllProps = y);
  var $ = function (t) {
    var r,
      a = j.length,
      o = e.CSSRule;
    if ("undefined" == typeof o) return n;
    if (!t) return !1;
    if (
      ((t = t.replace(/^@/, "")),
      (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in o)
    )
      return "@" + t;
    for (var i = 0; a > i; i++) {
      var s = j[i],
        c = s.toUpperCase() + "_" + r;
      if (c in o) return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  w.atRule = $;
  var M = (w.prefixed = function (e, t, n) {
      return 0 === e.indexOf("@")
        ? $(e)
        : (-1 != e.indexOf("-") && (e = m(e)), t ? y(e, t, n) : y(e, "pfx"));
    }),
    O = (w.testStyles = l),
    L = (w.testProp = function (e, t, r) {
      return g([e], n, t, r);
    });
  w.testAllProps = b;
  var B = (function () {
    function e(e, t) {
      var a;
      return e
        ? ((t && "string" != typeof t) || (t = s(t || "div")),
          (e = "on" + e),
          (a = e in t),
          !a &&
            r &&
            (t.setAttribute || (t = s("div")),
            t.setAttribute(e, ""),
            (a = "function" == typeof t[e]),
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
          a)
        : !1;
    }
    var r = !("onblur" in t.documentElement);
    return e;
  })();
  w.hasEvent = B;
  var j = w._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  (w._prefixes = j),
    Modernizr.addTest("canvas", function () {
      var e = s("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    Modernizr.addTest("canvastext", function () {
      return Modernizr.canvas === !1
        ? !1
        : "function" == typeof s("canvas").getContext("2d").fillText;
    });
  var F = (function () {
    var e = navigator.userAgent,
      t = e.match(/w(eb)?osbrowser/gi),
      n =
        e.match(/windows phone/gi) &&
        e.match(/iemobile\/([0-9])+/gi) &&
        parseFloat(RegExp.$1) >= 9;
    return t || n;
  })();
  F
    ? Modernizr.addTest("fontface", !1)
    : O('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
        var r = t.getElementById("smodernizr"),
          a = r.sheet || r.styleSheet,
          o = a
            ? a.cssRules && a.cssRules[0]
              ? a.cssRules[0].cssText
              : a.cssText || ""
            : "",
          i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i);
      }),
    Modernizr.addTest("backgroundsize", b("backgroundSize", "100%", !0)),
    Modernizr.addTest("borderimage", b("borderImage", "url() 1", !0)),
    Modernizr.addTest("borderradius", b("borderRadius", "0px", !0)),
    Modernizr.addTest("boxshadow", b("boxShadow", "1px 1px", !0)),
    Modernizr.addTest("flexbox", b("flexBasis", "1px", !0)),
    Modernizr.addTest("flexboxlegacy", b("boxDirection", "reverse", !0)),
    Modernizr.addTest("hsla", function () {
      var e = s("a").style;
      return (
        (e.cssText = "background-color:hsla(120,40%,100%,.5)"),
        d(e.backgroundColor, "rgba") || d(e.backgroundColor, "hsla")
      );
    }),
    Modernizr.addTest("multiplebgs", function () {
      var e = s("a").style;
      return (
        (e.cssText =
          "background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(e.background)
      );
    }),
    Modernizr.addTest("opacity", function () {
      var e = s("a").style;
      return (e.cssText = j.join("opacity:.55;")), /^0.55$/.test(e.opacity);
    }),
    Modernizr.addTest("rgba", function () {
      var e = s("a").style;
      return (
        (e.cssText = "background-color:rgba(150,255,150,.5)"),
        ("" + e.backgroundColor).indexOf("rgba") > -1
      );
    }),
    Modernizr.addTest("textshadow", L("textShadow", "1px 1px")),
    Modernizr.addTest("cssanimations", b("animationName", "a", !0)),
    (function () {
      Modernizr.addTest("csscolumns", function () {
        var e = !1,
          t = b("columnCount");
        try {
          (e = !!t), e && (e = new Boolean(e));
        } catch (n) {}
        return e;
      });
      for (
        var e,
          t,
          n = [
            "Width",
            "Span",
            "Fill",
            "Gap",
            "Rule",
            "RuleColor",
            "RuleStyle",
            "RuleWidth",
            "BreakBefore",
            "BreakAfter",
            "BreakInside",
          ],
          r = 0;
        r < n.length;
        r++
      )
        (e = n[r].toLowerCase()),
          (t = b("column" + n[r])),
          ("breakbefore" === e || "breakafter" === e || "breakinside" == e) &&
            (t = t || b(n[r])),
          Modernizr.addTest("csscolumns." + e, t);
    })(),
    O(
      '#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',
      function (e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 6);
      }
    ),
    Modernizr.addTest("cssgradients", function () {
      for (
        var e,
          t = "background-image:",
          n = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
          r = "",
          a = 0,
          o = j.length - 1;
        o > a;
        a++
      )
        (e = 0 === a ? "to " : ""),
          (r += t + j[a] + "linear-gradient(" + e + "left top, #9f9, white);");
      Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
      var i = s("a"),
        c = i.style;
      return (c.cssText = r), ("" + c.backgroundImage).indexOf("gradient") > -1;
    }),
    Modernizr.addTest("cssreflections", b("boxReflect", "above", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        b("transform", "scale(1)", !0)
      );
    });
  var I = "CSS" in e && "supports" in e.CSS,
    D = "supportsCSS" in e;
  Modernizr.addTest("supports", I || D),
    Modernizr.addTest("csstransforms3d", function () {
      var e = !!b("perspective", "1px", !0),
        t = Modernizr._config.usePrefixes;
      if (e && (!t || "webkitPerspective" in E.style)) {
        var n,
          r = "#modernizr{width:0;height:0}";
        Modernizr.supports
          ? (n = "@supports (perspective: 1px)")
          : ((n = "@media (transform-3d)"),
            t && (n += ",(-webkit-transform-3d)")),
          (n +=
            "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
          O(r + n, function (t) {
            e = 7 === t.offsetWidth && 18 === t.offsetHeight;
          });
      }
      return e;
    }),
    Modernizr.addTest("csstransitions", b("transition", "all", !0)),
    Modernizr.addTest("applicationcache", "applicationCache" in e),
    Modernizr.addTest("hashchange", function () {
      return B("hashchange", e) === !1
        ? !1
        : t.documentMode === n || t.documentMode > 7;
    }),
    Modernizr.addTest("history", function () {
      var t = navigator.userAgent;
      return (-1 === t.indexOf("Android 2.") &&
        -1 === t.indexOf("Android 4.0")) ||
        -1 === t.indexOf("Mobile Safari") ||
        -1 !== t.indexOf("Chrome") ||
        -1 !== t.indexOf("Windows Phone") ||
        "file:" === location.protocol
        ? e.history && "pushState" in e.history
        : !1;
    }),
    Modernizr.addTest("audio", function () {
      var e = s("audio"),
        t = !1;
      try {
        (t = !!e.canPlayType),
          t &&
            ((t = new Boolean(t)),
            (t.ogg = e
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (t.mp3 = e
              .canPlayType('audio/mpeg; codecs="mp3"')
              .replace(/^no$/, "")),
            (t.opus =
              e.canPlayType('audio/ogg; codecs="opus"') ||
              e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
            (t.wav = e
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (t.m4a = (
              e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
            ).replace(/^no$/, "")));
      } catch (n) {}
      return t;
    }),
    Modernizr.addTest("video", function () {
      var e = s("video"),
        t = !1;
      try {
        (t = !!e.canPlayType),
          t &&
            ((t = new Boolean(t)),
            (t.ogg = e
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (t.h264 = e
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (t.webm = e
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, "")),
            (t.vp9 = e
              .canPlayType('video/webm; codecs="vp9"')
              .replace(/^no$/, "")),
            (t.hls = e
              .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
              .replace(/^no$/, "")));
      } catch (n) {}
      return t;
    }),
    Modernizr.addAsyncTest(function () {
      var t;
      try {
        t = M("indexedDB", e);
      } catch (n) {}
      if (t) {
        var r = "modernizr-" + Math.random(),
          a = t.open(r);
        (a.onerror = function () {
          a.error && "InvalidStateError" === a.error.name
            ? i("indexeddb", !1)
            : (i("indexeddb", !0), x(t, r));
        }),
          (a.onsuccess = function () {
            i("indexeddb", !0), x(t, r);
          });
      } else i("indexeddb", !1);
    });
  var V = s("input"),
    W =
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      ),
    q = {};
  Modernizr.input = (function (t) {
    for (var n = 0, r = t.length; r > n; n++) q[t[n]] = !!(t[n] in V);
    return q.list && (q.list = !(!s("datalist") || !e.HTMLDataListElement)), q;
  })(W);
  var H =
      "search tel url email datetime date month week time datetime-local number range color".split(
        " "
      ),
    U = {};
  (Modernizr.inputtypes = (function (e) {
    for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++)
      V.setAttribute("type", (r = e[c])),
        (o = "text" !== V.type && "style" in V),
        o &&
          ((V.value = s),
          (V.style.cssText = "position:absolute;visibility:hidden;"),
          /^range$/.test(r) && V.style.WebkitAppearance !== n
            ? (E.appendChild(V),
              (a = t.defaultView),
              (o =
                a.getComputedStyle &&
                "textfield" !== a.getComputedStyle(V, null).WebkitAppearance &&
                0 !== V.offsetHeight),
              E.removeChild(V))
            : /^(search|tel)$/.test(r) ||
              (o = /^(url|email)$/.test(r)
                ? V.checkValidity && V.checkValidity() === !1
                : V.value != s)),
        (U[e[c]] = !!o);
    return U;
  })(H)),
    Modernizr.addTest("localstorage", function () {
      var e = "modernizr";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    }),
    Modernizr.addTest("postmessage", "postMessage" in e),
    Modernizr.addTest("sessionstorage", function () {
      var e = "modernizr";
      try {
        return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    });
  var G = !1;
  try {
    G = "WebSocket" in e && 2 === e.WebSocket.CLOSING;
  } catch (J) {}
  Modernizr.addTest("websockets", G),
    Modernizr.addTest("websqldatabase", "openDatabase" in e),
    Modernizr.addTest("webworkers", "Worker" in e),
    Modernizr.addTest("geolocation", "geolocation" in navigator),
    Modernizr.addTest("inlinesvg", function () {
      var e = s("div");
      return (
        (e.innerHTML = "<svg/>"),
        "http://www.w3.org/2000/svg" ==
          ("undefined" != typeof SVGRect &&
            e.firstChild &&
            e.firstChild.namespaceURI)
      );
    });
  var Z = {}.toString;
  Modernizr.addTest("smil", function () {
    return (
      !!t.createElementNS &&
      /SVGAnimate/.test(
        Z.call(t.createElementNS("http://www.w3.org/2000/svg", "animate"))
      )
    );
  }),
    Modernizr.addTest(
      "svg",
      !!t.createElementNS &&
        !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    ),
    Modernizr.addTest("svgclippaths", function () {
      return (
        !!t.createElementNS &&
        /SVGClipPath/.test(
          Z.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath"))
        )
      );
    }),
    Modernizr.addTest("webgl", function () {
      var t = s("canvas"),
        n =
          "probablySupportsContext" in t
            ? "probablySupportsContext"
            : "supportsContext";
      return n in t
        ? t[n]("webgl") || t[n]("experimental-webgl")
        : "WebGLRenderingContext" in e;
    }),
    a(),
    o(C),
    delete w.addTest,
    delete w.addAsyncTest;
  for (var K = 0; K < Modernizr._q.length; K++) Modernizr._q[K]();
  e.Modernizr = Modernizr;
})(window, document);
