"use strict";
(self.webpackChunkonline_vision_screening = self.webpackChunkonline_vision_screening || []).push([
   ["common"],
   {
      5151: (b, h, s) => {
         s.d(h, {
            c: () => r,
         });
         var p = s(771),
            l = s(9951),
            c = s(6535);
         const r = (o, t) => {
            let e, n;
            const u = (a, E, y) => {
                  if (typeof document > "u") return;
                  const w = document.elementFromPoint(a, E);
                  w && t(w) ? w !== e && (i(), d(w, y)) : i();
               },
               d = (a, E) => {
                  (e = a), n || (n = e);
                  const y = e;
                  (0, p.w)(() => y.classList.add("ion-activated")), E();
               },
               i = (a = !1) => {
                  if (!e) return;
                  const E = e;
                  (0, p.w)(() => E.classList.remove("ion-activated")), a && n !== e && e.click(), (e = void 0);
               };
            return (0, c.createGesture)({
               el: o,
               gestureName: "buttonActiveDrag",
               threshold: 0,
               onStart: (a) => u(a.currentX, a.currentY, l.a),
               onMove: (a) => u(a.currentX, a.currentY, l.b),
               onEnd: () => {
                  i(!0), (0, l.h)(), (n = void 0);
               },
            });
         };
      },
      1836: (b, h, s) => {
         s.d(h, {
            g: () => l,
         });
         var p = s(1848);
         const l = () => {
            if (void 0 !== p.w) return p.w.Capacitor;
         };
      },
      983: (b, h, s) => {
         s.d(h, {
            c: () => p,
            i: () => l,
         });
         const p = (c, r, o) =>
               "function" == typeof o
                  ? o(c, r)
                  : "string" == typeof o
                  ? c[o] === r[o]
                  : Array.isArray(r)
                  ? r.includes(c)
                  : c === r,
            l = (c, r, o) => void 0 !== c && (Array.isArray(c) ? c.some((t) => p(t, r, o)) : p(c, r, o));
      },
      4510: (b, h, s) => {
         s.d(h, {
            g: () => p,
         });
         const p = (t, e, n, u, d) => c(t[1], e[1], n[1], u[1], d).map((i) => l(t[0], e[0], n[0], u[0], i)),
            l = (t, e, n, u, d) =>
               d * (3 * e * Math.pow(d - 1, 2) + d * (-3 * n * d + 3 * n + u * d)) - t * Math.pow(d - 1, 3),
            c = (t, e, n, u, d) =>
               o((u -= d) - 3 * (n -= d) + 3 * (e -= d) - (t -= d), 3 * n - 6 * e + 3 * t, 3 * e - 3 * t, t).filter(
                  (a) => a >= 0 && a <= 1
               ),
            o = (t, e, n, u) => {
               if (0 === t)
                  return ((t, e, n) => {
                     const u = e * e - 4 * t * n;
                     return u < 0 ? [] : [(-e + Math.sqrt(u)) / (2 * t), (-e - Math.sqrt(u)) / (2 * t)];
                  })(e, n, u);
               const d = (3 * (n /= t) - (e /= t) * e) / 3,
                  i = (2 * e * e * e - 9 * e * n + 27 * (u /= t)) / 27;
               if (0 === d) return [Math.pow(-i, 1 / 3)];
               if (0 === i) return [Math.sqrt(-d), -Math.sqrt(-d)];
               const a = Math.pow(i / 2, 2) + Math.pow(d / 3, 3);
               if (0 === a) return [Math.pow(i / 2, 0.5) - e / 3];
               if (a > 0)
                  return [Math.pow(-i / 2 + Math.sqrt(a), 1 / 3) - Math.pow(i / 2 + Math.sqrt(a), 1 / 3) - e / 3];
               const E = Math.sqrt(Math.pow(-d / 3, 3)),
                  y = Math.acos(-i / (2 * Math.sqrt(Math.pow(-d / 3, 3)))),
                  w = 2 * Math.pow(E, 1 / 3);
               return [
                  w * Math.cos(y / 3) - e / 3,
                  w * Math.cos((y + 2 * Math.PI) / 3) - e / 3,
                  w * Math.cos((y + 4 * Math.PI) / 3) - e / 3,
               ];
            };
      },
      4162: (b, h, s) => {
         s.d(h, {
            i: () => p,
         });
         const p = (l) =>
            l && "" !== l.dir
               ? "rtl" === l.dir.toLowerCase()
               : "rtl" === (null == document ? void 0 : document.dir.toLowerCase());
      },
      8434: (b, h, s) => {
         s.r(h),
            s.d(h, {
               startFocusVisible: () => r,
            });
         const p = "ion-focused",
            c = [
               "Tab",
               "ArrowDown",
               "Space",
               "Escape",
               " ",
               "Shift",
               "Enter",
               "ArrowLeft",
               "ArrowRight",
               "ArrowUp",
               "Home",
               "End",
            ],
            r = (o) => {
               let t = [],
                  e = !0;
               const n = o ? o.shadowRoot : document,
                  u = o || document.body,
                  d = (C) => {
                     t.forEach((_) => _.classList.remove(p)), C.forEach((_) => _.classList.add(p)), (t = C);
                  },
                  i = () => {
                     (e = !1), d([]);
                  },
                  a = (C) => {
                     (e = c.includes(C.key)), e || d([]);
                  },
                  E = (C) => {
                     if (e && void 0 !== C.composedPath) {
                        const _ = C.composedPath().filter(
                           (v) => !!v.classList && v.classList.contains("ion-focusable")
                        );
                        d(_);
                     }
                  },
                  y = () => {
                     n.activeElement === u && d([]);
                  };
               return (
                  n.addEventListener("keydown", a),
                  n.addEventListener("focusin", E),
                  n.addEventListener("focusout", y),
                  n.addEventListener("touchstart", i, {
                     passive: !0,
                  }),
                  n.addEventListener("mousedown", i),
                  {
                     destroy: () => {
                        n.removeEventListener("keydown", a),
                           n.removeEventListener("focusin", E),
                           n.removeEventListener("focusout", y),
                           n.removeEventListener("touchstart", i),
                           n.removeEventListener("mousedown", i);
                     },
                     setFocus: d,
                  }
               );
            };
      },
      9749: (b, h, s) => {
         s.d(h, {
            c: () => l,
         });
         var p = s(512);
         const l = (t) => {
               const e = t;
               let n;
               return {
                  hasLegacyControl: () => {
                     if (void 0 === n) {
                        const d = void 0 !== e.label || c(e),
                           i =
                              e.hasAttribute("aria-label") ||
                              (e.hasAttribute("aria-labelledby") && null === e.shadowRoot),
                           a = (0, p.h)(e);
                        n = !0 === e.legacy || (!d && !i && null !== a);
                     }
                     return n;
                  },
               };
            },
            c = (t) =>
               !!(
                  (r.includes(t.tagName) && null !== t.querySelector('[slot="label"]')) ||
                  (o.includes(t.tagName) && "" !== t.textContent)
               ),
            r = ["ION-INPUT", "ION-TEXTAREA", "ION-SELECT", "ION-RANGE"],
            o = ["ION-TOGGLE", "ION-CHECKBOX", "ION-RADIO"];
      },
      9951: (b, h, s) => {
         s.d(h, {
            I: () => l,
            a: () => e,
            b: () => n,
            c: () => t,
            d: () => d,
            h: () => u,
         });
         var p = s(1836),
            l = (function (i) {
               return (i.Heavy = "HEAVY"), (i.Medium = "MEDIUM"), (i.Light = "LIGHT"), i;
            })(l || {});
         const r = {
               getEngine() {
                  const i = window.TapticEngine;
                  if (i) return i;
                  const a = (0, p.g)();
                  return null != a && a.isPluginAvailable("Haptics") ? a.Plugins.Haptics : void 0;
               },
               available() {
                  if (!this.getEngine()) return !1;
                  const a = (0, p.g)();
                  return (
                     "web" !== (null == a ? void 0 : a.getPlatform()) ||
                     (typeof navigator < "u" && void 0 !== navigator.vibrate)
                  );
               },
               isCordova: () => void 0 !== window.TapticEngine,
               isCapacitor: () => void 0 !== (0, p.g)(),
               impact(i) {
                  const a = this.getEngine();
                  if (!a) return;
                  const E = this.isCapacitor() ? i.style : i.style.toLowerCase();
                  a.impact({
                     style: E,
                  });
               },
               notification(i) {
                  const a = this.getEngine();
                  if (!a) return;
                  const E = this.isCapacitor() ? i.type : i.type.toLowerCase();
                  a.notification({
                     type: E,
                  });
               },
               selection() {
                  const i = this.isCapacitor() ? l.Light : "light";
                  this.impact({
                     style: i,
                  });
               },
               selectionStart() {
                  const i = this.getEngine();
                  i && (this.isCapacitor() ? i.selectionStart() : i.gestureSelectionStart());
               },
               selectionChanged() {
                  const i = this.getEngine();
                  i && (this.isCapacitor() ? i.selectionChanged() : i.gestureSelectionChanged());
               },
               selectionEnd() {
                  const i = this.getEngine();
                  i && (this.isCapacitor() ? i.selectionEnd() : i.gestureSelectionEnd());
               },
            },
            o = () => r.available(),
            t = () => {
               o() && r.selection();
            },
            e = () => {
               o() && r.selectionStart();
            },
            n = () => {
               o() && r.selectionChanged();
            },
            u = () => {
               o() && r.selectionEnd();
            },
            d = (i) => {
               o() && r.impact(i);
            };
      },
      7946: (b, h, s) => {
         s.d(h, {
            I: () => t,
            a: () => d,
            b: () => o,
            c: () => E,
            d: () => w,
            f: () => i,
            g: () => u,
            i: () => n,
            p: () => y,
            r: () => C,
            s: () => a,
         });
         var p = s(5861),
            l = s(512),
            c = s(2400);
         const o = "ion-content",
            t = ".ion-content-scroll-host",
            e = `${o}, ${t}`,
            n = (_) => "ION-CONTENT" === _.tagName,
            u = (function () {
               var _ = (0, p.Z)(function* (v) {
                  return n(v) ? (yield new Promise((x) => (0, l.c)(v, x)), v.getScrollElement()) : v;
               });
               return function (x) {
                  return _.apply(this, arguments);
               };
            })(),
            d = (_) => _.querySelector(t) || _.querySelector(e),
            i = (_) => _.closest(e),
            a = (_, v) =>
               n(_)
                  ? _.scrollToTop(v)
                  : Promise.resolve(
                       _.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: v > 0 ? "smooth" : "auto",
                       })
                    ),
            E = (_, v, x, O) =>
               n(_)
                  ? _.scrollByPoint(v, x, O)
                  : Promise.resolve(
                       _.scrollBy({
                          top: x,
                          left: v,
                          behavior: O > 0 ? "smooth" : "auto",
                       })
                    ),
            y = (_) => (0, c.b)(_, o),
            w = (_) => {
               if (n(_)) {
                  const x = _.scrollY;
                  return (_.scrollY = !1), x;
               }
               return _.style.setProperty("overflow", "hidden"), !0;
            },
            C = (_, v) => {
               n(_) ? (_.scrollY = v) : _.style.removeProperty("overflow");
            };
      },
      5307: (b, h, s) => {
         s.d(h, {
            a: () => p,
            b: () => E,
            c: () => e,
            d: () => y,
            e: () => T,
            f: () => t,
            g: () => w,
            h: () => c,
            i: () => l,
            j: () => O,
            k: () => P,
            l: () => n,
            m: () => i,
            n: () => C,
            o: () => d,
            p: () => o,
            q: () => r,
            r: () => x,
            s: () => g,
            t: () => a,
            u: () => _,
            v: () => v,
            w: () => u,
         });
         const p =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",
            l =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",
            c =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",
            r =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",
            o =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",
            t =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
            e =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",
            n =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",
            u =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",
            d =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
            i =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",
            a =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",
            E =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",
            y =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",
            w =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
            C =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",
            _ =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
            v =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",
            x =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
            O =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
            P =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",
            g =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",
            T =
               "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";
      },
      5917: (b, h, s) => {
         s.d(h, {
            c: () => r,
            g: () => o,
         });
         var p = s(1848),
            l = s(512),
            c = s(2400);
         const r = (e, n, u) => {
               let d, i;
               if (void 0 !== p.w && "MutationObserver" in p.w) {
                  const w = Array.isArray(n) ? n : [n];
                  (d = new MutationObserver((C) => {
                     for (const _ of C)
                        for (const v of _.addedNodes)
                           if (v.nodeType === Node.ELEMENT_NODE && w.includes(v.slot))
                              return u(), void (0, l.r)(() => a(v));
                  })),
                     d.observe(e, {
                        childList: !0,
                     });
               }
               const a = (w) => {
                     var C;
                     i && (i.disconnect(), (i = void 0)),
                        (i = new MutationObserver((_) => {
                           u();
                           for (const v of _)
                              for (const x of v.removedNodes) x.nodeType === Node.ELEMENT_NODE && x.slot === n && y();
                        })),
                        i.observe(null !== (C = w.parentElement) && void 0 !== C ? C : w, {
                           subtree: !0,
                           childList: !0,
                        });
                  },
                  y = () => {
                     i && (i.disconnect(), (i = void 0));
                  };
               return {
                  destroy: () => {
                     d && (d.disconnect(), (d = void 0)), y();
                  },
               };
            },
            o = (e, n, u) => {
               const d = null == e ? 0 : e.toString().length,
                  i = t(d, n);
               if (void 0 === u) return i;
               try {
                  return u(d, n);
               } catch (a) {
                  return (0, c.a)("Exception in provided `counterFormatter`.", a), i;
               }
            },
            t = (e, n) => `${e} / ${n}`;
      },
      6591: (b, h, s) => {
         s.r(h),
            s.d(h, {
               KEYBOARD_DID_CLOSE: () => o,
               KEYBOARD_DID_OPEN: () => r,
               copyVisualViewport: () => P,
               keyboardDidClose: () => _,
               keyboardDidOpen: () => w,
               keyboardDidResize: () => C,
               resetKeyboardAssist: () => d,
               setKeyboardClose: () => y,
               setKeyboardOpen: () => E,
               startKeyboardAssist: () => i,
               trackViewportChanges: () => O,
            });
         var p = s(3920);
         s(1836), s(1848);
         const r = "ionKeyboardDidShow",
            o = "ionKeyboardDidHide";
         let e = {},
            n = {},
            u = !1;
         const d = () => {
               (e = {}), (n = {}), (u = !1);
            },
            i = (g) => {
               if (p.K.getEngine()) a(g);
               else {
                  if (!g.visualViewport) return;
                  (n = P(g.visualViewport)),
                     (g.visualViewport.onresize = () => {
                        O(g), w() || C(g) ? E(g) : _(g) && y(g);
                     });
               }
            },
            a = (g) => {
               g.addEventListener("keyboardDidShow", (T) => E(g, T)), g.addEventListener("keyboardDidHide", () => y(g));
            },
            E = (g, T) => {
               v(g, T), (u = !0);
            },
            y = (g) => {
               x(g), (u = !1);
            },
            w = () => !u && e.width === n.width && (e.height - n.height) * n.scale > 150,
            C = (g) => u && !_(g),
            _ = (g) => u && n.height === g.innerHeight,
            v = (g, T) => {
               const m = new CustomEvent(r, {
                  detail: {
                     keyboardHeight: T ? T.keyboardHeight : g.innerHeight - n.height,
                  },
               });
               g.dispatchEvent(m);
            },
            x = (g) => {
               const T = new CustomEvent(o);
               g.dispatchEvent(T);
            },
            O = (g) => {
               (e = Object.assign({}, n)), (n = P(g.visualViewport));
            },
            P = (g) => ({
               width: Math.round(g.width),
               height: Math.round(g.height),
               offsetTop: g.offsetTop,
               offsetLeft: g.offsetLeft,
               pageTop: g.pageTop,
               pageLeft: g.pageLeft,
               scale: g.scale,
            });
      },
      3920: (b, h, s) => {
         s.d(h, {
            K: () => r,
            a: () => c,
         });
         var p = s(1836),
            l = (function (o) {
               return (o.Unimplemented = "UNIMPLEMENTED"), (o.Unavailable = "UNAVAILABLE"), o;
            })(l || {}),
            c = (function (o) {
               return (o.Body = "body"), (o.Ionic = "ionic"), (o.Native = "native"), (o.None = "none"), o;
            })(c || {});
         const r = {
            getEngine() {
               const o = (0, p.g)();
               if (null != o && o.isPluginAvailable("Keyboard")) return o.Plugins.Keyboard;
            },
            getResizeMode() {
               const o = this.getEngine();
               return null != o && o.getResizeMode
                  ? o.getResizeMode().catch((t) => {
                       if (t.code !== l.Unimplemented) throw t;
                    })
                  : Promise.resolve(void 0);
            },
         };
      },
      9252: (b, h, s) => {
         s.d(h, {
            c: () => t,
         });
         var p = s(5861),
            l = s(1848),
            c = s(3920);
         const r = (e) => {
               if (void 0 === l.d || e === c.a.None || void 0 === e) return null;
               const n = l.d.querySelector("ion-app");
               return null != n ? n : l.d.body;
            },
            o = (e) => {
               const n = r(e);
               return null === n ? 0 : n.clientHeight;
            },
            t = (function () {
               var e = (0, p.Z)(function* (n) {
                  let u, d, i, a;
                  const E = (function () {
                        var v = (0, p.Z)(function* () {
                           const x = yield c.K.getResizeMode(),
                              O = void 0 === x ? void 0 : x.mode;
                           (u = () => {
                              void 0 === a && (a = o(O)), (i = !0), y(i, O);
                           }),
                              (d = () => {
                                 (i = !1), y(i, O);
                              }),
                              null == l.w || l.w.addEventListener("keyboardWillShow", u),
                              null == l.w || l.w.addEventListener("keyboardWillHide", d);
                        });
                        return function () {
                           return v.apply(this, arguments);
                        };
                     })(),
                     y = (v, x) => {
                        n && n(v, w(x));
                     },
                     w = (v) => {
                        if (0 === a || a === o(v)) return;
                        const x = r(v);
                        return null !== x
                           ? new Promise((O) => {
                                const g = new ResizeObserver(() => {
                                   x.clientHeight === a && (g.disconnect(), O());
                                });
                                g.observe(x);
                             })
                           : void 0;
                     };
                  return (
                     yield E(),
                     {
                        init: E,
                        destroy: () => {
                           null == l.w || l.w.removeEventListener("keyboardWillShow", u),
                              null == l.w || l.w.removeEventListener("keyboardWillHide", d),
                              (u = d = void 0);
                        },
                        isKeyboardVisible: () => i,
                     }
                  );
               });
               return function (u) {
                  return e.apply(this, arguments);
               };
            })();
      },
      4713: (b, h, s) => {
         s.d(h, {
            c: () => l,
         });
         var p = s(5861);
         const l = () => {
            let c;
            return {
               lock: (function () {
                  var o = (0, p.Z)(function* () {
                     const t = c;
                     let e;
                     return (c = new Promise((n) => (e = n))), void 0 !== t && (yield t), e;
                  });
                  return function () {
                     return o.apply(this, arguments);
                  };
               })(),
            };
         };
      },
      4793: (b, h, s) => {
         s.d(h, {
            c: () => c,
         });
         var p = s(1848),
            l = s(512);
         const c = (r, o, t) => {
            let e;
            const n = () => !(void 0 === o() || void 0 !== r.label || null === t()),
               d = () => {
                  const a = o();
                  if (void 0 === a) return;
                  if (!n()) return void a.style.removeProperty("width");
                  const E = t().scrollWidth;
                  if (0 === E && null === a.offsetParent && void 0 !== p.w && "IntersectionObserver" in p.w) {
                     if (void 0 !== e) return;
                     const y = (e = new IntersectionObserver(
                        (w) => {
                           1 === w[0].intersectionRatio && (d(), y.disconnect(), (e = void 0));
                        },
                        {
                           threshold: 0.01,
                           root: r,
                        }
                     ));
                     y.observe(a);
                  } else a.style.setProperty("width", 0.75 * E + "px");
               };
            return {
               calculateNotchWidth: () => {
                  n() &&
                     (0, l.r)(() => {
                        d();
                     });
               },
               destroy: () => {
                  e && (e.disconnect(), (e = void 0));
               },
            };
         };
      },
      2217: (b, h, s) => {
         s.d(h, {
            S: () => l,
         });
         const l = {
            bubbles: {
               dur: 1e3,
               circles: 9,
               fn: (c, r, o) => {
                  const t = (c * r) / o - c + "ms",
                     e = (2 * Math.PI * r) / o;
                  return {
                     r: 5,
                     style: {
                        top: 32 * Math.sin(e) + "%",
                        left: 32 * Math.cos(e) + "%",
                        "animation-delay": t,
                     },
                  };
               },
            },
            circles: {
               dur: 1e3,
               circles: 8,
               fn: (c, r, o) => {
                  const t = r / o,
                     e = c * t - c + "ms",
                     n = 2 * Math.PI * t;
                  return {
                     r: 5,
                     style: {
                        top: 32 * Math.sin(n) + "%",
                        left: 32 * Math.cos(n) + "%",
                        "animation-delay": e,
                     },
                  };
               },
            },
            circular: {
               dur: 1400,
               elmDuration: !0,
               circles: 1,
               fn: () => ({
                  r: 20,
                  cx: 48,
                  cy: 48,
                  fill: "none",
                  viewBox: "24 24 48 48",
                  transform: "translate(0,0)",
                  style: {},
               }),
            },
            crescent: {
               dur: 750,
               circles: 1,
               fn: () => ({
                  r: 26,
                  style: {},
               }),
            },
            dots: {
               dur: 750,
               circles: 3,
               fn: (c, r) => ({
                  r: 6,
                  style: {
                     left: 32 - 32 * r + "%",
                     "animation-delay": -110 * r + "ms",
                  },
               }),
            },
            lines: {
               dur: 1e3,
               lines: 8,
               fn: (c, r, o) => ({
                  y1: 14,
                  y2: 26,
                  style: {
                     transform: `rotate(${(360 / o) * r + (r < o / 2 ? 180 : -180)}deg)`,
                     "animation-delay": (c * r) / o - c + "ms",
                  },
               }),
            },
            "lines-small": {
               dur: 1e3,
               lines: 8,
               fn: (c, r, o) => ({
                  y1: 12,
                  y2: 20,
                  style: {
                     transform: `rotate(${(360 / o) * r + (r < o / 2 ? 180 : -180)}deg)`,
                     "animation-delay": (c * r) / o - c + "ms",
                  },
               }),
            },
            "lines-sharp": {
               dur: 1e3,
               lines: 12,
               fn: (c, r, o) => ({
                  y1: 17,
                  y2: 29,
                  style: {
                     transform: `rotate(${30 * r + (r < 6 ? 180 : -180)}deg)`,
                     "animation-delay": (c * r) / o - c + "ms",
                  },
               }),
            },
            "lines-sharp-small": {
               dur: 1e3,
               lines: 12,
               fn: (c, r, o) => ({
                  y1: 12,
                  y2: 20,
                  style: {
                     transform: `rotate(${30 * r + (r < 6 ? 180 : -180)}deg)`,
                     "animation-delay": (c * r) / o - c + "ms",
                  },
               }),
            },
         };
      },
      3049: (b, h, s) => {
         s.r(h),
            s.d(h, {
               createSwipeBackGesture: () => o,
            });
         var p = s(512),
            l = s(4162),
            c = s(6535);
         s(2019);
         const o = (t, e, n, u, d) => {
            const i = t.ownerDocument.defaultView;
            let a = (0, l.i)(t);
            const y = (x) => (a ? -x.deltaX : x.deltaX);
            return (0, c.createGesture)({
               el: t,
               gestureName: "goback-swipe",
               gesturePriority: 101,
               threshold: 10,
               canStart: (x) => (
                  (a = (0, l.i)(t)),
                  ((x) => {
                     const { startX: P } = x;
                     return a ? P >= i.innerWidth - 50 : P <= 50;
                  })(x) && e()
               ),
               onStart: n,
               onMove: (x) => {
                  const P = y(x) / i.innerWidth;
                  u(P);
               },
               onEnd: (x) => {
                  const O = y(x),
                     P = i.innerWidth,
                     g = O / P,
                     T = ((x) => (a ? -x.velocityX : x.velocityX))(x),
                     m = T >= 0 && (T > 0.2 || O > P / 2),
                     f = (m ? 1 - g : g) * P;
                  let M = 0;
                  if (f > 5) {
                     const D = f / Math.abs(T);
                     M = Math.min(D, 540);
                  }
                  d(m, g <= 0 ? 0.01 : (0, p.l)(0, g, 0.9999), M);
               },
            });
         };
      },
      6806: (b, h, s) => {
         s.d(h, {
            w: () => p,
         });
         const p = (r, o, t) => {
               if (typeof MutationObserver > "u") return;
               const e = new MutationObserver((n) => {
                  t(l(n, o));
               });
               return (
                  e.observe(r, {
                     childList: !0,
                     subtree: !0,
                  }),
                  e
               );
            },
            l = (r, o) => {
               let t;
               return (
                  r.forEach((e) => {
                     for (let n = 0; n < e.addedNodes.length; n++) t = c(e.addedNodes[n], o) || t;
                  }),
                  t
               );
            },
            c = (r, o) => {
               if (1 !== r.nodeType) return;
               const t = r;
               return (t.tagName === o.toUpperCase() ? [t] : Array.from(t.querySelectorAll(o))).find(
                  (n) => n.value === t.value
               );
            };
      },
      8348: (b, h, s) => {
         s.d(h, {
            s: () => A,
         });
         var p = s(9224),
            l = s(3576),
            c = s(5625),
            r = s(655),
            o = s(553),
            t = s(5879),
            e = s(676),
            n = s(6560),
            u = s(3005),
            d = s(6814),
            i = s(8514),
            a = s(758);
         function E(m, L) {
            if ((1 & m && t._UZ(0, "span", 12), 2 & m)) {
               const f = t.oxw(2).$implicit;
               t.Q6J("innerHTML", f("acuityTest.result.bothEyesExcellent"), t.oJD);
            }
         }
         function y(m, L) {
            if ((1 & m && t._UZ(0, "span", 12), 2 & m)) {
               const f = t.oxw(2).$implicit;
               t.Q6J("innerHTML", f("acuityTest.result.bothEyesFine"), t.oJD);
            }
         }
         function w(m, L) {
            if ((1 & m && t._UZ(0, "span", 12), 2 & m)) {
               const f = t.oxw(2).$implicit;
               t.Q6J("innerHTML", f("acuityTest.result.bothEyesReduced"), t.oJD);
            }
         }
         function C(m, L) {
            if (
               (1 & m &&
                  (t.ynx(0),
                  t.YNc(1, E, 1, 1, "span", 11),
                  t.YNc(2, y, 1, 1, "span", 11),
                  t.YNc(3, w, 1, 1, "span", 11),
                  t.BQk()),
               2 & m)
            ) {
               const f = t.oxw(2);
               t.xp6(1),
                  t.Q6J("ngIf", f.results.sumResult === f.RESULT.EXCELLENT),
                  t.xp6(1),
                  t.Q6J("ngIf", f.results.sumResult === f.RESULT.FINE),
                  t.xp6(1),
                  t.Q6J("ngIf", f.results.sumResult === f.RESULT.REDUCED);
            }
         }
         function _(m, L) {
            if ((1 & m && t._UZ(0, "span", 12), 2 & m)) {
               const f = t.oxw(2).$implicit;
               t.Q6J("innerHTML", f("acuityTest.result.oneEyeFine"), t.oJD);
            }
         }
         function v(m, L) {
            if ((1 & m && t._UZ(0, "span", 12), 2 & m)) {
               const f = t.oxw(2).$implicit;
               t.Q6J("innerHTML", f("acuityTest.result.oneEyeReduced"), t.oJD);
            }
         }
         function x(m, L) {
            if ((1 & m && (t.ynx(0), t.YNc(1, _, 1, 1, "span", 11), t.YNc(2, v, 1, 1, "span", 11), t.BQk()), 2 & m)) {
               const f = t.oxw(2);
               t.xp6(1),
                  t.Q6J("ngIf", f.results.sumResult === f.RESULT.FINE),
                  t.xp6(1),
                  t.Q6J("ngIf", f.results.sumResult === f.RESULT.REDUCED);
            }
         }
         function O(m, L) {
            if (
               (1 & m &&
                  (t.TgZ(0, "div", 13)(1, "div", 14),
                  t._UZ(2, "app-icon", 15),
                  t.TgZ(3, "div", 16),
                  t._uU(4),
                  t.qZA()(),
                  t.TgZ(5, "div", 14),
                  t._UZ(6, "app-icon", 17),
                  t.TgZ(7, "div", 16),
                  t._uU(8),
                  t.qZA()()()),
               2 & m)
            ) {
               const f = t.oxw().$implicit,
                  M = t.oxw();
               t.xp6(1),
                  t.uIk(
                     "aria-label",
                     f("acuityTest.result.testName") + " " + f("result.eye.left") + " " + M.image.leftEye
                  ),
                  t.xp6(1),
                  t.Q6J("name", M.image.leftEye)("width", 96)("height", 56),
                  t.xp6(2),
                  t.hij(" ", f("result.eye.left"), " "),
                  t.xp6(1),
                  t.uIk(
                     "aria-label",
                     f("acuityTest.result.testName") + " " + f("result.eye.right") + " " + M.image.rightEye
                  ),
                  t.xp6(1),
                  t.Q6J("name", M.image.rightEye)("width", 96)("height", 56),
                  t.xp6(2),
                  t.hij(" ", f("result.eye.right"), " ");
            }
         }
         function P(m, L) {
            if (1 & m) {
               const f = t.EpF();
               t.TgZ(0, "div", 18),
                  t._uU(1),
                  t.TgZ(2, "zat-action-button", 19),
                  t.NdJ("click", function () {
                     t.CHM(f);
                     const D = t.oxw(2);
                     return t.KtG(D.handleResultCodeFlow());
                  }),
                  t._uU(3),
                  t.qZA()();
            }
            if (2 & m) {
               const f = t.oxw().$implicit;
               t.xp6(1),
                  t.hij(" ", f("result.generateYourCode"), " "),
                  t.xp6(1),
                  t.Q6J("type", "solid"),
                  t.xp6(1),
                  t.Oqu(f("button.save"));
            }
         }
         function g(m, L) {
            if (1 & m) {
               const f = t.EpF();
               t.TgZ(0, "zat-action-button", 20),
                  t.NdJ("click", function () {
                     t.CHM(f);
                     const D = t.oxw(2);
                     return t.KtG(D.emitExitEcpResult());
                  }),
                  t._uU(1),
                  t.ALo(2, "async"),
                  t.qZA();
            }
            if (2 & m) {
               const f = t.oxw().$implicit,
                  M = t.oxw();
               let D;
               t.xp6(1),
                  t.hij(
                     " ",
                     null !== (D = t.lcZ(2, 1, M.buttonText$)) && void 0 !== D ? D : f("button.ecpResultExit"),
                     " "
                  );
            }
         }
         function T(m, L) {
            if (
               (1 & m &&
                  (t.TgZ(0, "div", 1)(1, "div", 2),
                  t._UZ(2, "app-icon", 3)(3, "span", 4),
                  t.qZA(),
                  t.TgZ(4, "div", 5)(5, "div", 6),
                  t.YNc(6, C, 4, 3, "ng-container", 7),
                  t.YNc(7, x, 3, 2, "ng-container", 7),
                  t.qZA(),
                  t.YNc(8, O, 9, 10, "div", 8),
                  t.qZA(),
                  t.YNc(9, P, 4, 3, "div", 9),
                  t.ALo(10, "async"),
                  t.ALo(11, "async"),
                  t.YNc(12, g, 3, 3, "zat-action-button", 10),
                  t.ALo(13, "async"),
                  t.ALo(14, "async"),
                  t.qZA()),
               2 & m)
            ) {
               const f = L.$implicit,
                  M = t.oxw();
               t.xp6(2),
                  t.Q6J("width", 30)("height", 30),
                  t.xp6(1),
                  t.Q6J("innerHTML", f("acuityTest.result.testName"), t.oJD),
                  t.xp6(3),
                  t.Q6J("ngIf", M.results.eyesResult === M.RESULT.BOTHEYES),
                  t.xp6(1),
                  t.Q6J("ngIf", M.results.eyesResult === M.RESULT.ONEEYE),
                  t.xp6(1),
                  t.Q6J("ngIf", M.image),
                  t.xp6(1),
                  t.Q6J("ngIf", t.lcZ(10, 8, M.showSaveFeature$) && !t.lcZ(11, 10, M.isMegaTestActive$)),
                  t.xp6(3),
                  t.Q6J(
                     "ngIf",
                     t.lcZ(13, 12, M.specialScreeningMode$) === M.SpecialScreeningMode.ECP &&
                        !t.lcZ(14, 14, M.isMegaTestActive$)
                  );
            }
         }
         let A = (() => {
            var m;
            class L {
               constructor(M, D, R) {
                  (this.store = M),
                     (this.transloco = D),
                     (this.generalService = R),
                     (this.RESULT = p.B8),
                     (this.SpecialScreeningMode = c.i),
                     (this.specialScreeningMode$ = this.store.select(r.P2)),
                     (this.buttonText$ = this.store.select(r.Xg)),
                     (this.isMegaTestActive$ = this.store.select(r.Wk)),
                     (this.showSaveFeature$ = this.generalService.showImportSaveOption$()),
                     (this.env = o.N);
               }
               handleResultCodeFlow() {
                  this.store.dispatch((0, l.SaveAndGenerateResultCodeAction)());
               }
               emitExitEcpResult() {
                  this.store.dispatch((0, l.ExitEcpResultAction)());
               }
            }
            return (
               ((m = L).ɵfac = function (M) {
                  return new (M || m)(t.Y36(e.yh), t.Y36(n.Vn), t.Y36(u.m));
               }),
               (m.ɵcmp = t.Xpm({
                  type: m,
                  selectors: [["zat-acuity-test-result"]],
                  inputs: {
                     results: "results",
                     image: "image",
                     vaValues: "vaValues",
                     isFRChannel: "isFRChannel",
                  },
                  decls: 1,
                  vars: 0,
                  consts: [
                     ["class", "va-content--result", 4, "transloco"],
                     [1, "va-content--result"],
                     [1, "va-description-image"],
                     [
                        "id",
                        "acuityTestSmall",
                        "name",
                        "acuity_test_small",
                        "alt",
                        "",
                        1,
                        "icon-small",
                        3,
                        "width",
                        "height",
                     ],
                     [1, "icon-title", 3, "innerHTML"],
                     [1, "va-description-wrapper"],
                     [1, "va-description", "text-body"],
                     [4, "ngIf"],
                     ["class", "va-values", 4, "ngIf"],
                     ["class", "save-result-cta", 4, "ngIf"],
                     ["class", "ecp-result-exit-btn", "type", "outline", "size", "small-medium", 3, "click", 4, "ngIf"],
                     [3, "innerHTML", 4, "ngIf"],
                     [3, "innerHTML"],
                     [1, "va-values"],
                     [1, "text-center", "va-column"],
                     ["id", "resultLeftEye", "alt", "", 3, "name", "width", "height"],
                     [1, "va-label", "text-body"],
                     ["id", "acuityResultRightEye", "alt", "", 3, "name", "width", "height"],
                     [1, "save-result-cta"],
                     [3, "type", "click"],
                     ["type", "outline", "size", "small-medium", 1, "ecp-result-exit-btn", 3, "click"],
                  ],
                  template: function (M, D) {
                     1 & M && t.YNc(0, T, 15, 16, "div", 0);
                  },
                  dependencies: [d.O5, n.KI, i.U, a.x, d.Ov],
                  styles: [
                     '[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.va-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.va-content.no-bottom-padding[_ngcontent-%COMP%]{padding-bottom:0}.va-content--result[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;text-align:center;background-color:var(--background-color-primary);padding:24px;box-sizing:border-box;border-radius:8px}.va-content--result[_ngcontent-%COMP%]   .va-description[_ngcontent-%COMP%]{margin-bottom:16px;margin-top:24px}.single-row[_ngcontent-%COMP%]   .va-content--result[_ngcontent-%COMP%]{width:100%}.va-content--mega-test[_ngcontent-%COMP%]{padding:24px;text-align:center}.va-content-container[_ngcontent-%COMP%]{width:312px}.webcomponent[_ngcontent-%COMP%]{display:inline-block}.va-values[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:flex;flex-direction:row;justify-content:center}.va-column[_ngcontent-%COMP%]{width:140px}.va-column[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{overflow:visible}.va-label[_ngcontent-%COMP%]{font:var(--text-eyebrow);color:var(--text-color-headline);margin-top:8px;text-transform:uppercase}.va-label--mb[_ngcontent-%COMP%]{margin-bottom:10px}.va-label--mt[_ngcontent-%COMP%]{margin-top:5px}.va-description[_ngcontent-%COMP%]{text-align:center;margin:0;font:var(--text-body-m);color:var(--text-color-headline)}.save-result-cta[_ngcontent-%COMP%]{padding:24px 0 0;font-family:ZEISS Frutiger Next;font-size:16px;font-weight:700;line-height:24px;display:flex;flex-direction:column;gap:16px}.save-result-cta[_ngcontent-%COMP%]:before{content:"";border:1px solid #ECF0F4;margin:0 -24px}.va-description-image[_ngcontent-%COMP%]{display:flex;align-items:start;flex-direction:row;justify-content:space-between;position:relative;font-size:21px;line-height:1.285;font-weight:500}.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:16px;width:30px;height:30px}@container appComp (min-width: 1024px){.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}}.va-description-image[_ngcontent-%COMP%]:after{content:""}.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{padding-top:5px;padding-left:46px;font:var(--text-hl-l);color:var(--text-color-headline);font-size:30px}@container appComp (min-width: 768px){.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{--text-hl-l: 700 28px/32px var(--font-family-frutiger)}}.result-title[_ngcontent-%COMP%]{display:block;padding:20px 20px 24px}@container appComp (min-width: 1024px){.result-title[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:38px}}.va-result-image[_ngcontent-%COMP%]{max-width:90px;width:100%}@container appComp (min-width: 1024px){zat-action-button[_ngcontent-%COMP%]{font-size:16px}}zat-action-button[_ngcontent-%COMP%]:not(:last-child){margin-bottom:15px}.tooltip[_ngcontent-%COMP%]{cursor:pointer;width:16px;height:16px;background-image:url(icon_info.0e6185d3fa601b34.svg);background-size:16px;background-repeat:no-repeat;padding:0;border:none}  .tooltip-text{background-color:var(--background-color-primary);width:190px;min-height:95px;color:var(--background-color-primary-invert)!important;padding:12px 15px;font-size:14px;font-weight:500;text-align:left;border:3px solid var(--background-color-primary-invert);box-sizing:border-box;border-radius:0!important}@container appComp (min-width: 1024px){  .tooltip-text{width:220px;min-height:110px}}footer[_ngcontent-%COMP%]{background-color:var(--background-color-dark-03);height:440px}.va-content-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 1 50%}@container appComp (min-width: 1024px){  .individual-result .va-content--result{padding-top:0;min-height:auto}}  .individual-result .va-description-image{display:none}@container appComp (min-width: 1024px){  .individual-result .va-content--recommend{min-height:440px}}.icon-small[_ngcontent-%COMP%]{position:absolute}.icon-small-result[_ngcontent-%COMP%]{position:absolute;bottom:-3px;right:-7px}.result-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;padding:24px;border-top:1px solid var(--background-color-light-02)}.va-result-content[_ngcontent-%COMP%]{background-color:var(--background-color-primary);border-radius:8px;box-shadow:2px 4px 16px #19191914}.result-content[_ngcontent-%COMP%]{background-color:var(--bg-color-light);display:flex;flex-direction:row;justify-content:center;height:calc(100% - 64px);overflow-y:scroll}.result-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:24px;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom:1px solid var(--background-color-light-02);background-color:var(--background-color-primary);font:var(--text-hl-xl);color:var(--text-color-headline)}@container appComp (min-width: 768px){.result-head[_ngcontent-%COMP%]{--text-hl-xl: 700 32px/36px var(--font-family-frutiger)}}.result-button[_ngcontent-%COMP%]{width:100%}.result-status-mega-test[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;background-color:var(--background-color-secondary);border-bottom:1px solid var(--background-color-light-04);border-top:1px solid var(--background-color-light-04);min-height:64px}.result-status-mega-test-stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}.stats-title[_ngcontent-%COMP%]{color:var(--text-color-body);font:var(--text-hl-xs)}.ecp-result-exit-btn[_ngcontent-%COMP%]{margin-top:25px}',
                  ],
               })),
               L
            );
         })();
      },
   },
]);
