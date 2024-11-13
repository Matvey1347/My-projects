(self.webpackChunkonline_vision_screening = self.webpackChunkonline_vision_screening || []).push([
   ["polyfills"],
   {
      1927: (st, Ct, it) => {
         "use strict";
         it(3584), it(8332);
         var et = it(5861);
         function U() {
            return (
               (U = Object.assign
                  ? Object.assign.bind()
                  : function (e) {
                       for (var t = 1; t < arguments.length; t++) {
                          var n = arguments[t];
                          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                       }
                       return e;
                    }),
               U.apply(this, arguments)
            );
         }
         function yt(e, t) {
            const n = t.width,
               r = t.height,
               s = t.inlineSize,
               u = t.blockSize;
            switch (e) {
               case 1:
                  return null != n
                     ? {
                          type: 3,
                          value: n,
                          unit: "px",
                       }
                     : {
                          type: 1,
                       };
               case 3:
                  return null != s
                     ? {
                          type: 3,
                          value: s,
                          unit: "px",
                       }
                     : {
                          type: 1,
                       };
               case 2:
                  return null != r
                     ? {
                          type: 3,
                          value: r,
                          unit: "px",
                       }
                     : {
                          type: 1,
                       };
               case 4:
                  return null != u
                     ? {
                          type: 3,
                          value: u,
                          unit: "px",
                       }
                     : {
                          type: 1,
                       };
               case 5:
                  return null != n && null != r && r > 0
                     ? {
                          type: 2,
                          value: n / r,
                       }
                     : {
                          type: 1,
                       };
               case 6:
                  return null != n && null != r
                     ? {
                          type: 4,
                          value: r >= n ? "portrait" : "landscape",
                       }
                     : {
                          type: 1,
                       };
            }
         }
         function Ue(e, t) {
            switch (e.type) {
               case 1:
               case 2:
               case 3:
               case 4:
                  return Be(e, t);
               case 5: {
                  const n = t.sizeFeatures.get(e.feature);
                  return null == n
                     ? {
                          type: 1,
                       }
                     : n;
               }
               case 6:
                  return e.value;
            }
         }
         function Pe(e) {
            return {
               type: 5,
               value: e,
            };
         }
         function xe(e, t, n) {
            return Pe(
               (function (r, s, u) {
                  switch (u) {
                     case 1:
                        return r === s;
                     case 2:
                        return r > s;
                     case 3:
                        return r >= s;
                     case 4:
                        return r < s;
                     case 5:
                        return r <= s;
                  }
               })(e, t, n)
            );
         }
         function Ze(e, t, n) {
            return null == e ? t : null == t ? e : n(e, t);
         }
         function Ie(e, t) {
            switch (e) {
               case "cqw":
                  return t.cqw;
               case "cqh":
                  return t.cqh;
               case "cqi":
                  return 0 === t.writingAxis ? t.cqw : t.cqh;
               case "cqb":
                  return 1 === t.writingAxis ? t.cqw : t.cqh;
               case "cqmin":
                  return Ze(Ie("cqi", t), Ie("cqb", t), Math.min);
               case "cqmax":
                  return Ze(Ie("cqi", t), Ie("cqb", t), Math.max);
            }
         }
         function We(e, { treeContext: t }) {
            switch (e.unit) {
               case "px":
                  return e.value;
               case "rem":
                  return e.value * t.rootFontSize;
               case "em":
                  return e.value * t.fontSize;
               case "cqw":
               case "cqh":
               case "cqi":
               case "cqb":
               case "cqmin":
               case "cqmax":
                  return Ze(e.value, Ie(e.unit, t), (n, r) => n * r);
            }
            return null;
         }
         function ee(e, t) {
            switch (e.type) {
               case 2:
                  return 0 === e.value ? 0 : null;
               case 3:
                  return We(e, t);
            }
            return null;
         }
         function Be(e, t) {
            switch (e.type) {
               case 4:
                  return (function (n, r) {
                     const s = Ue(n.left, r),
                        u = Ue(n.right, r),
                        E = n.operator;
                     if ((4 === s.type && 4 === u.type) || (5 === s.type && 5 === u.type))
                        return 1 === E
                           ? Pe(s.value === u.value)
                           : {
                                type: 1,
                             };
                     if (3 === s.type || 3 === u.type) {
                        const w = ee(s, r),
                           D = ee(u, r);
                        if (null != w && null != D) return xe(w, D, E);
                     } else if (2 === s.type && 2 === u.type) return xe(s.value, u.value, E);
                     return {
                        type: 1,
                     };
                  })(e, t);
               case 2:
                  return (function (n, r) {
                     const s = Be(n.left, r);
                     return 5 !== s.type || !0 !== s.value ? s : Be(n.right, r);
                  })(e, t);
               case 3:
                  return (function (n, r) {
                     const s = Be(n.left, r);
                     return 5 === s.type && !0 === s.value ? s : Be(n.right, r);
                  })(e, t);
               case 1: {
                  const n = Be(e.value, t);
                  return 5 === n.type
                     ? {
                          type: 5,
                          value: !n.value,
                       }
                     : {
                          type: 1,
                       };
               }
               case 5:
                  return vt(Ue(e, t));
               case 6:
                  return vt(e.value);
            }
         }
         function vt(e) {
            switch (e.type) {
               case 5:
                  return e;
               case 2:
               case 3:
                  return {
                     type: 5,
                     value: e.value > 0,
                  };
            }
            return {
               type: 1,
            };
         }
         const ye = Array.from(
               {
                  length: 4,
               },
               () => Math.floor(256 * Math.random()).toString(16)
            ).join(""),
            fn = at("container"),
            ct = at("container-type"),
            Ot = at("container-name"),
            Zt = `data-cqs-${ye}`,
            It = `data-cqc-${ye}`,
            ut = at("cqw"),
            mt = at("cqh"),
            jt = at("cqi"),
            _t = at("cqb");
         function at(e) {
            return `--cq-${e}-${ye}`;
         }
         const _ = Symbol();
         function Jt(e, t) {
            const n = {
               value: t,
               errorIndices: [],
               index: -1,
               at(r) {
                  const s = n.index + r;
                  return s >= e.length ? t : e[s];
               },
               consume: (r) => ((n.index += r), (n.value = n.at(0)), n.value),
               reconsume() {
                  n.index -= 1;
               },
               error() {
                  n.errorIndices.push(n.index);
               },
            };
            return n;
         }
         function ue(e) {
            return Jt(e, {
               type: 0,
            });
         }
         function* gt(e) {
            const t = [];
            let n = !1;
            for (const b of e) {
               const H = b.codePointAt(0);
               n && 10 !== H && ((n = !1), t.push(10)),
                  0 === H || (H >= 55296 && H <= 57343) ? t.push(65533) : 13 === H ? (n = !0) : t.push(H);
            }
            const r = Jt(t, -1),
               { at: s, consume: u, error: E, reconsume: w } = r;
            function D() {
               return String.fromCodePoint(r.value);
            }
            function z() {
               return {
                  type: 13,
                  value: D(),
               };
            }
            function Ee() {
               for (; lt(s(1)); ) u(1);
            }
            function Ce() {
               for (; -1 !== r.value; ) if ((u(1), 42 === s(0) && 47 === s(1))) return void u(1);
               E();
            }
            function ze() {
               const [b, H] = (function () {
                     let ie = 0,
                        y = "",
                        C = s(1);
                     for ((43 !== C && 45 !== C) || (u(1), (y += D())); ve(s(1)); ) u(1), (y += D());
                     if (46 === s(1) && ve(s(2))) for (ie = 1, u(1), y += D(); ve(s(1)); ) u(1), (y += D());
                     if (((C = s(1)), 69 === C || 101 === C)) {
                        const ne = s(2);
                        if (ve(ne)) for (ie = 1, u(1), y += D(); ve(s(1)); ) u(1), (y += D());
                        else if ((45 === ne || 43 === ne) && ve(s(3)))
                           for (ie = 1, u(1), y += D(), u(1), y += D(); ve(s(1)); ) u(1), (y += D());
                     }
                     return [y, ie];
                  })(),
                  se = s(1);
               return de(se, s(1), s(2))
                  ? {
                       type: 15,
                       value: b,
                       flag: H,
                       unit: Ne(),
                    }
                  : 37 === se
                  ? (u(1),
                    {
                       type: 16,
                       value: b,
                    })
                  : {
                       type: 17,
                       value: b,
                       flag: H,
                    };
            }
            function be() {
               const b = Ne();
               let H = s(1);
               if ("url" === b.toLowerCase() && 40 === H) {
                  for (u(1); lt(s(1)) && lt(s(2)); ) u(1);
                  H = s(1);
                  const se = s(2);
                  return 34 === H || 39 === H
                     ? {
                          type: 23,
                          value: b,
                       }
                     : !lt(H) || (34 !== se && 39 !== se)
                     ? (function () {
                          let ie = "";
                          for (Ee(); ; ) {
                             const C = u(1);
                             if (41 === C)
                                return {
                                   type: 20,
                                   value: ie,
                                };
                             if (-1 === C)
                                return (
                                   E(),
                                   {
                                      type: 20,
                                      value: ie,
                                   }
                                );
                             if (lt(C)) {
                                Ee();
                                const ne = s(1);
                                return 41 === ne || -1 === ne
                                   ? (u(1),
                                     -1 === C && E(),
                                     {
                                        type: 20,
                                        value: ie,
                                     })
                                   : ($e(),
                                     {
                                        type: 21,
                                     });
                             }
                             if (
                                34 === C ||
                                39 === C ||
                                40 === C ||
                                ((y = C) >= 0 && y <= 8) ||
                                11 === y ||
                                (y >= 14 && y <= 31) ||
                                127 === y
                             )
                                return (
                                   E(),
                                   $e(),
                                   {
                                      type: 21,
                                   }
                                );
                             if (92 === C) {
                                if (!Pt(C, s(1)))
                                   return (
                                      E(),
                                      {
                                         type: 21,
                                      }
                                   );
                                ie += Je();
                             } else ie += D();
                          }
                          var y;
                       })()
                     : {
                          type: 23,
                          value: b,
                       };
               }
               return 40 === H
                  ? (u(1),
                    {
                       type: 23,
                       value: b,
                    })
                  : {
                       type: 24,
                       value: b,
                    };
            }
            function Qe(b) {
               let H = "";
               for (;;) {
                  const se = u(1);
                  if (-1 === se || se === b)
                     return (
                        -1 === se && E(),
                        {
                           type: 2,
                           value: H,
                        }
                     );
                  if (He(se))
                     return (
                        E(),
                        w(),
                        {
                           type: 3,
                        }
                     );
                  if (92 === se) {
                     const ie = s(1);
                     if (-1 === ie) continue;
                     He(ie) ? u(1) : (H += Je());
                  } else H += D();
               }
            }
            function Je() {
               const b = u(1);
               if (hn(b)) {
                  const H = [b];
                  for (let ie = 0; ie < 5; ie++) {
                     const y = s(1);
                     if (!hn(y)) break;
                     H.push(y), u(1);
                  }
                  lt(s(1)) && u(1);
                  let se = parseInt(String.fromCodePoint(...H), 16);
                  return (
                     (0 === se || (se >= 55296 && se <= 57343) || se > 1114111) && (se = 65533),
                     String.fromCodePoint(se)
                  );
               }
               return -1 === b ? (E(), String.fromCodePoint(65533)) : D();
            }
            function de(b, H, se) {
               return 45 === b ? Rt(H) || 45 === H || Pt(H, se) : !!Rt(b);
            }
            function Ae(b, H, se) {
               return 43 === b || 45 === b ? ve(H) || (46 === H && ve(se)) : !(46 !== b || !ve(H)) || !!ve(b);
            }
            function Ne() {
               let b = "";
               for (;;) {
                  const H = u(1);
                  if (dn(H)) b += D();
                  else {
                     if (!Pt(H, s(1))) return w(), b;
                     b += Je();
                  }
               }
            }
            function $e() {
               for (;;) {
                  const b = u(1);
                  if (-1 === b) return;
                  Pt(b, s(1)) && Je();
               }
            }
            for (;;) {
               const b = u(1);
               if (47 === b && 42 === s(1)) u(2), Ce();
               else if (lt(b))
                  Ee(),
                     yield {
                        type: 1,
                     };
               else if (34 === b) yield Qe(b);
               else if (35 === b) {
                  const H = s(1);
                  dn(H) || Pt(H, s(2))
                     ? yield {
                          type: 14,
                          flag: de(s(1), s(2), s(3)) ? 1 : 0,
                          value: Ne(),
                       }
                     : yield z();
               } else if (39 === b) yield Qe(b);
               else if (40 === b)
                  yield {
                     type: 4,
                  };
               else if (41 === b)
                  yield {
                     type: 5,
                  };
               else if (43 === b) Ae(b, s(1), s(2)) ? (w(), yield ze()) : yield z();
               else if (44 === b)
                  yield {
                     type: 6,
                  };
               else if (45 === b) {
                  const H = s(1),
                     se = s(2);
                  Ae(b, H, se)
                     ? (w(), yield ze())
                     : 45 === H && 62 === se
                     ? (u(2),
                       yield {
                          type: 19,
                       })
                     : de(b, H, se)
                     ? (w(), yield be())
                     : yield z();
               } else if (46 === b) Ae(b, s(1), s(2)) ? (w(), yield ze()) : yield z();
               else if (58 === b)
                  yield {
                     type: 7,
                  };
               else if (59 === b)
                  yield {
                     type: 8,
                  };
               else if (60 === b)
                  33 === s(1) && 45 === s(2) && 45 === s(3)
                     ? yield {
                          type: 18,
                       }
                     : yield z();
               else if (64 === b)
                  de(s(1), s(2), s(3))
                     ? yield {
                          type: 22,
                          value: Ne(),
                       }
                     : yield z();
               else if (91 === b)
                  yield {
                     type: 9,
                  };
               else if (92 === b) Pt(b, s(1)) ? (w(), yield be()) : (E(), yield z());
               else if (93 === b)
                  yield {
                     type: 10,
                  };
               else if (123 === b)
                  yield {
                     type: 11,
                  };
               else if (125 === b)
                  yield {
                     type: 12,
                  };
               else if (ve(b)) w(), yield ze();
               else if (Rt(b)) w(), yield be();
               else {
                  if (-1 === b)
                     return (
                        yield {
                           type: 0,
                        },
                        r.errorIndices
                     );
                  yield {
                     type: 13,
                     value: D(),
                  };
               }
            }
         }
         function ve(e) {
            return e >= 48 && e <= 57;
         }
         function hn(e) {
            return ve(e) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
         }
         function He(e) {
            return 10 === e || 13 === e || 12 === e;
         }
         function lt(e) {
            return He(e) || 9 === e || 32 === e;
         }
         function Rt(e) {
            return (e >= 65 && e <= 90) || (e >= 97 && e <= 122) || e >= 128 || 95 === e;
         }
         function Pt(e, t) {
            return 92 === e && !He(t);
         }
         function dn(e) {
            return Rt(e) || ve(e) || 45 === e;
         }
         const xt = {
            11: 12,
            9: 10,
            4: 5,
         };
         function qt(e, t) {
            const n = (function (r, s) {
               const u = [];
               for (;;)
                  switch (r.consume(1).type) {
                     case 1:
                        break;
                     case 0:
                        return {
                           type: 3,
                           value: u,
                        };
                     case 18:
                     case 19:
                        if (!1 !== s) {
                           r.reconsume();
                           const E = Vt(r);
                           E !== _ && u.push(E);
                        }
                        break;
                     case 22:
                        r.reconsume(), u.push(Kt(r));
                        break;
                     default: {
                        r.reconsume();
                        const E = Vt(r);
                        E !== _ && u.push(E);
                        break;
                     }
                  }
            })(ue(e), !0 === t);
            return U({}, n, {
               value: n.value.map((r) => {
                  return 26 === r.type
                     ? 0 === (s = r).value.value.type
                        ? U({}, s, {
                             value: U({}, s.value, {
                                value: pn(s.value.value.value),
                             }),
                          })
                        : s
                     : r;
                  var s;
               }),
            });
         }
         function je(e) {
            const t = ue(e),
               n = [];
            for (;;) {
               if (0 === t.consume(1).type) return n;
               t.reconsume(), n.push(tt(t));
            }
         }
         function pn(e) {
            return (function (t) {
               const n = [],
                  r = [];
               for (;;) {
                  const s = t.consume(1);
                  switch (s.type) {
                     case 1:
                     case 8:
                        break;
                     case 0:
                        return {
                           type: 1,
                           value: [...r, ...n],
                        };
                     case 22:
                        t.reconsume(), n.push(Kt(t));
                        break;
                     case 24: {
                        const u = [s];
                        let E = t.at(1);
                        for (; 8 !== E.type && 0 !== E.type; ) u.push(tt(t)), (E = t.at(1));
                        const w = yn(ue(u));
                        w !== _ && r.push(w);
                        break;
                     }
                     case 13:
                        if ("&" === s.value) {
                           t.reconsume();
                           const u = Vt(t);
                           u !== _ && n.push(u);
                           break;
                        }
                     default: {
                        t.error(), t.reconsume();
                        let u = t.at(1);
                        for (; 8 !== u.type && 0 !== u.type; ) tt(t), (u = t.at(1));
                        break;
                     }
                  }
               }
            })(ue(e));
         }
         function Oe(e) {
            for (; 1 === e.at(1).type; ) e.consume(1);
         }
         function Kt(e) {
            let t = e.consume(1);
            if (22 !== t.type) throw new Error(`Unexpected type ${t.type}`);
            const n = t.value,
               r = [];
            for (;;)
               switch (((t = e.consume(1)), t.type)) {
                  case 8:
                     return {
                        type: 25,
                        name: n,
                        prelude: r,
                        value: null,
                     };
                  case 0:
                     return (
                        e.error(),
                        {
                           type: 25,
                           name: n,
                           prelude: r,
                           value: null,
                        }
                     );
                  case 11:
                     return {
                        type: 25,
                        name: n,
                        prelude: r,
                        value: en(e),
                     };
                  case 28:
                     if (11 === t.source.type)
                        return {
                           type: 25,
                           name: n,
                           prelude: r,
                           value: t,
                        };
                  default:
                     e.reconsume(), r.push(tt(e));
               }
         }
         function Vt(e) {
            let t = e.value;
            const n = [];
            for (;;)
               switch (((t = e.consume(1)), t.type)) {
                  case 0:
                     return e.error(), _;
                  case 11:
                     return {
                        type: 26,
                        prelude: n,
                        value: en(e),
                     };
                  case 28:
                     if (11 === t.source.type)
                        return {
                           type: 26,
                           prelude: n,
                           value: t,
                        };
                  default:
                     e.reconsume(), n.push(tt(e));
               }
         }
         function yn(e) {
            const t = e.consume(1);
            if (24 !== t.type) throw new Error(`Unexpected type ${t.type}`);
            const n = t.value,
               r = [];
            let s = !1;
            if ((Oe(e), 7 !== e.at(1).type)) return e.error(), _;
            for (e.consume(1), Oe(e); 0 !== e.at(1).type; ) r.push(tt(e));
            const u = r[r.length - 2],
               E = r[r.length - 1];
            return (
               u &&
                  13 === u.type &&
                  "!" === u.value &&
                  24 === E.type &&
                  "important" === E.value.toLowerCase() &&
                  ((s = !0), r.splice(r.length - 2)),
               {
                  type: 29,
                  name: n,
                  value: r,
                  important: s,
               }
            );
         }
         function tt(e) {
            const t = e.consume(1);
            switch (t.type) {
               case 11:
               case 9:
               case 4:
                  return en(e);
               case 23:
                  return (function (n) {
                     let r = n.value;
                     if (23 !== r.type) throw new Error(`Unexpected type ${r.type}`);
                     const s = r.value,
                        u = [];
                     for (;;)
                        switch (((r = n.consume(1)), r.type)) {
                           case 5:
                              return {
                                 type: 27,
                                 name: s,
                                 value: u,
                              };
                           case 0:
                              return (
                                 n.error(),
                                 {
                                    type: 27,
                                    name: s,
                                    value: u,
                                 }
                              );
                           default:
                              n.reconsume(), u.push(tt(n));
                        }
                  })(e);
               default:
                  return t;
            }
         }
         function en(e) {
            let t = e.value;
            const n = t,
               r = xt[n.type];
            if (!r) throw new Error(`Unexpected type ${t.type}`);
            const s = [];
            for (;;)
               switch (((t = e.consume(1)), t.type)) {
                  case r:
                     return {
                        type: 28,
                        source: n,
                        value: {
                           type: 0,
                           value: s,
                        },
                     };
                  case 0:
                     return (
                        e.error(),
                        {
                           type: 28,
                           source: n,
                           value: {
                              type: 0,
                              value: s,
                           },
                        }
                     );
                  default:
                     e.reconsume(), s.push(tt(e));
               }
         }
         function Et(e) {
            return Oe(e), 0 === e.at(1).type;
         }
         const vn = {
            11: ["{", "}"],
            9: ["[", "]"],
            4: ["(", ")"],
         };
         function nt(e, t) {
            switch (e.type) {
               case 25:
                  return `@${CSS.escape(e.name)} ${e.prelude.map((n) => nt(n)).join("")}${e.value ? nt(e.value) : ";"}`;
               case 26:
                  return `${e.prelude.map((n) => nt(n)).join("")}${nt(e.value)}`;
               case 28: {
                  const [n, r] = vn[e.source.type];
                  return `${n}${Ut(e.value)}${r}`;
               }
               case 27:
                  return `${CSS.escape(e.name)}(${e.value.map((n) => nt(n)).join("")})`;
               case 29:
                  return `${CSS.escape(e.name)}:${e.value.map((n) => nt(n)).join("")}${
                     e.important ? " !important" : ""
                  }`;
               case 1:
                  return " ";
               case 8:
                  return ";";
               case 7:
                  return ":";
               case 14:
                  return "#" + CSS.escape(e.value);
               case 24:
                  return CSS.escape(e.value);
               case 15:
                  return e.value + CSS.escape(e.unit);
               case 13:
               case 17:
                  return e.value;
               case 2:
                  return `"${CSS.escape(e.value)}"`;
               case 6:
                  return ",";
               case 20:
                  return "url(" + CSS.escape(e.value) + ")";
               case 22:
                  return "@" + CSS.escape(e.value);
               case 16:
                  return e.value + "%";
               default:
                  throw new Error(`Unsupported token ${e.type}`);
            }
         }
         function Ut(e, t) {
            return e.value
               .map((n) => {
                  let r = nt(n);
                  return 29 === n.type && 0 !== e.type && (r += ";"), r;
               })
               .join("");
         }
         function mn(e) {
            return nt(e);
         }
         function _n(e) {
            const t = e.at(1);
            return 13 === t.type && "=" === t.value && (e.consume(1), !0);
         }
         function bt(e, t) {
            const n = [];
            for (;;) {
               const r = e.at(1);
               if (
                  0 === r.type ||
                  (t && 7 === r.type) ||
                  (13 === r.type && (">" === r.value || "<" === r.value || "=" === r.value))
               )
                  break;
               n.push(e.consume(1));
            }
            return n;
         }
         function Tt(e) {
            Oe(e);
            const t = e.consume(1);
            return 13 !== t.type
               ? _
               : ">" === t.value
               ? _n(e)
                  ? 3
                  : 2
               : "<" === t.value
               ? _n(e)
                  ? 5
                  : 4
               : "=" === t.value
               ? 1
               : _;
         }
         function gn(e) {
            return 4 === e || 5 === e;
         }
         function En(e) {
            return 2 === e || 3 === e;
         }
         function zt(e, t, n) {
            const r = (function (u) {
               Oe(u);
               const E = u.consume(1);
               return Oe(u), 24 !== E.type || 0 !== u.at(1).type ? _ : E.value;
            })(ue(e));
            if (r === _) return _;
            let s = r.toLowerCase();
            return (s = n ? n(s) : s), t.has(s) ? s : _;
         }
         function o(e) {
            return {
               type: 13,
               value: e,
            };
         }
         function c(e, t) {
            return {
               type: 29,
               name: e,
               value: t,
               important: !1,
            };
         }
         function l(e) {
            return {
               type: 24,
               value: e,
            };
         }
         function a(e, t) {
            return {
               type: 27,
               name: e,
               value: t,
            };
         }
         function h(e) {
            return a("var", [l(e)]);
         }
         function v(e, t) {
            Oe(e);
            let n = !1,
               r = e.at(1);
            if (24 === r.type) {
               if ("not" !== r.value.toLowerCase()) return _;
               e.consume(1), Oe(e), (n = !0);
            }
            let s = (function (E) {
               const w = E.consume(1);
               switch (w.type) {
                  case 28: {
                     if (4 !== w.source.type) return _;
                     const D = v(ue(w.value.value), null);
                     return D !== _
                        ? D
                        : {
                             type: 4,
                             value: w,
                          };
                  }
                  case 27:
                     return {
                        type: 4,
                        value: w,
                     };
                  default:
                     return _;
               }
            })(e);
            if (s === _) return _;
            (s = n
               ? {
                    type: 1,
                    value: s,
                 }
               : s),
               Oe(e),
               (r = e.at(1));
            const u = 24 === r.type ? r.value.toLowerCase() : null;
            if (null !== u) {
               if ((e.consume(1), Oe(e), ("and" !== u && "or" !== u) || (null !== t && u !== t))) return _;
               const E = v(e, u);
               return E === _
                  ? _
                  : {
                       type: "and" === u ? 2 : 3,
                       left: s,
                       right: E,
                    };
            }
            return Et(e) ? s : _;
         }
         function x(e) {
            return v(e, null);
         }
         function O(e) {
            switch (e.type) {
               case 1:
                  return [
                     l("not"),
                     {
                        type: 1,
                     },
                     ...O(e.value),
                  ];
               case 2:
               case 3:
                  return [
                     ...O(e.left),
                     {
                        type: 1,
                     },
                     l(2 === e.type ? "and" : "or"),
                     {
                        type: 1,
                     },
                     ...O(e.right),
                  ];
               case 4:
                  return [e.value];
            }
         }
         const j = {
               width: 1,
               height: 2,
               "inline-size": 3,
               "block-size": 4,
               "aspect-ratio": 5,
               orientation: 6,
            },
            Z = new Set(Object.keys(j)),
            L = new Set(["none", "and", "not", "or", "normal", "auto"]),
            Y = new Set(["initial", "inherit", "revert", "revert-layer", "unset"]),
            W = new Set(["size", "inline-size"]);
         function B(e, t, n, r) {
            const s = n();
            if (s === _) return _;
            let u = [s, null];
            Oe(e);
            const E = e.at(1);
            if (13 === E.type) {
               if (E.value !== t) return _;
               e.consume(1), Oe(e);
               const w = r();
               Oe(e), w !== _ && (u = [s, w]);
            }
            return Et(e) ? u : _;
         }
         function fe(e) {
            const t = e.consume(1);
            return 17 === t.type ? parseInt(t.value) : _;
         }
         function re(e) {
            const t = ue(e);
            Oe(t);
            const n = t.consume(1);
            let r = _;
            switch (n.type) {
               case 17:
                  t.reconsume(),
                     (r = (function (s) {
                        const u = B(
                           s,
                           "/",
                           () => fe(s),
                           () => fe(s)
                        );
                        return u === _
                           ? _
                           : {
                                type: 2,
                                value: u[0] / (null !== u[1] ? u[1] : 1),
                             };
                     })(t));
                  break;
               case 15:
                  r = {
                     type: 3,
                     value: parseInt(n.value),
                     unit: n.unit.toLowerCase(),
                  };
                  break;
               case 24: {
                  const s = n.value.toLowerCase();
                  switch (s) {
                     case "landscape":
                     case "portrait":
                        r = {
                           type: 4,
                           value: s,
                        };
                  }
               }
            }
            return r === _
               ? _
               : Et(t)
               ? {
                    type: 6,
                    value: r,
                 }
               : _;
         }
         function Re(e) {
            return !R((e = e.toLowerCase())) && !L.has(e);
         }
         function he(e, t) {
            const n = [];
            for (;;) {
               Oe(e);
               const r = e.at(1);
               if (24 !== r.type || !t(r.value)) return n;
               e.consume(1), n.push(r.value);
            }
         }
         function F(e) {
            const t = [];
            for (;;) {
               Oe(e);
               const n = e.at(1);
               if (24 !== n.type) break;
               const r = n.value;
               if (!Re(r)) break;
               e.consume(1), t.push(r);
            }
            return t;
         }
         function R(e) {
            return Y.has(e);
         }
         function Se(e) {
            return e.map((t) => "cq-" + t);
         }
         function oe(e) {
            const t = he(e, (n) => R(n));
            return 1 === t.length ? Se(t) : _;
         }
         function me(e, t) {
            const n = he(e, (s) => "none" === s);
            if (1 === n.length) return Se(n);
            if (0 !== n.length) return _;
            if (t) {
               const s = oe(e);
               if (s !== _) return s;
            }
            const r = F(e);
            return r.length > 0 && (!t || Et(e)) ? r : _;
         }
         function Q(e, t) {
            if (t) {
               const n = oe(e);
               if (n !== _) return n;
            }
            return (function (n) {
               const r = he(n, (u) => "normal" === u);
               if (1 === r.length) return Se(r);
               if (0 !== r.length) return _;
               const s = he(n, (u) => W.has(u));
               return s.length > 0 && Et(n) ? s : _;
            })(e);
         }
         function P(e) {
            const t = ue(e),
               n = oe(t);
            if (n !== _) return [n, n];
            const r = B(
               t,
               "/",
               () => me(t, !1),
               () => Q(t, !1)
            );
            return r !== _ && Et(t) ? [r[0], r[1] || []] : _;
         }
         function ae(e) {
            const t = ue(e),
               n = F(t);
            if (!n || n.length > 1) return _;
            const r = x(t);
            if (r === _) return _;
            const s = {
                  features: new Set(),
               },
               u = k(r, s);
            return Et(t)
               ? {
                    name: n.length > 0 ? n[0] : null,
                    condition: u,
                    features: s.features,
                 }
               : _;
         }
         function k(e, t) {
            switch (e.type) {
               case 1:
                  return {
                     type: 1,
                     value: k(e.value, t),
                  };
               case 2:
               case 3:
                  return {
                     type: 2 === e.type ? 2 : 3,
                     left: k(e.left, t),
                     right: k(e.right, t),
                  };
               case 4:
                  if (28 === e.value.type) {
                     const n = (function (r, s) {
                        const u = (function (w, D) {
                           const z = bt(w, !0),
                              Ee = w.at(1);
                           if (0 === Ee.type) {
                              const de = zt(z, D);
                              return de !== _ && D.has(de)
                                 ? {
                                      type: 1,
                                      feature: de,
                                   }
                                 : _;
                           }
                           if (7 === Ee.type) {
                              w.consume(1);
                              const de = bt(w, !1);
                              let Ae = 1;
                              const Ne = zt(z, D, ($e) =>
                                 $e.startsWith("min-")
                                    ? ((Ae = 3), $e.substring(4))
                                    : $e.startsWith("max-")
                                    ? ((Ae = 5), $e.substring(4))
                                    : $e
                              );
                              return Ne !== _
                                 ? {
                                      type: 2,
                                      feature: Ne,
                                      bounds: [null, [Ae, de]],
                                   }
                                 : _;
                           }
                           const Ce = Tt(w);
                           if (Ce === _) return _;
                           const ze = bt(w, !1);
                           if (0 === w.at(1).type) {
                              const de = zt(z, D);
                              if (de !== _)
                                 return {
                                    type: 2,
                                    feature: de,
                                    bounds: [null, [Ce, ze]],
                                 };
                              const Ae = zt(ze, D);
                              return Ae !== _
                                 ? {
                                      type: 2,
                                      feature: Ae,
                                      bounds: [[Ce, z], null],
                                   }
                                 : _;
                           }
                           const be = Tt(w);
                           if (be === _ || !((En(Ce) && En(be)) || (gn(Ce) && gn(be)))) return _;
                           const Qe = bt(w, !1),
                              Je = zt(ze, D);
                           return Je !== _
                              ? {
                                   type: 2,
                                   feature: Je,
                                   bounds: [
                                      [Ce, z],
                                      [be, Qe],
                                   ],
                                }
                              : _;
                        })(r, Z);
                        if (u === _) return _;
                        const E = j[u.feature];
                        if (null == E) return _;
                        if ((s.features.add(E), 1 === u.type))
                           return {
                              type: 5,
                              feature: E,
                           };
                        {
                           const w = {
                              type: 5,
                              feature: E,
                           };
                           let D = _;
                           if (null !== u.bounds[0]) {
                              const z = re(u.bounds[0][1]);
                              if (z === _) return _;
                              D = {
                                 type: 4,
                                 operator: u.bounds[0][0],
                                 left: z,
                                 right: w,
                              };
                           }
                           if (null !== u.bounds[1]) {
                              const z = re(u.bounds[1][1]);
                              if (z === _) return _;
                              const Ee = {
                                 type: 4,
                                 operator: u.bounds[1][0],
                                 left: w,
                                 right: z,
                              };
                              D =
                                 D !== _
                                    ? {
                                         type: 2,
                                         left: D,
                                         right: Ee,
                                      }
                                    : Ee;
                           }
                           return D;
                        }
                     })(ue(e.value.value.value), t);
                     if (n !== _) return n;
                  }
                  return {
                     type: 6,
                     value: {
                        type: 1,
                     },
                  };
            }
         }
         let X = 0;
         const q = {
               cqw: ut,
               cqh: mt,
               cqi: jt,
               cqb: _t,
            },
            Me = CSS.supports("selector(:where(div))"),
            qe = ":not(.container-query-polyfill)";
         je(Array.from(gt(qe)));
         const ke = document.createElement("div"),
            _e = new Set(["before", "after", "first-line", "first-letter"]);
         function Fe(e, t) {
            return a("calc", [
               {
                  type: 17,
                  flag: e.flag,
                  value: e.value,
               },
               o("*"),
               t,
            ]);
         }
         function De(e) {
            return e.map((t) => {
               switch (t.type) {
                  case 15:
                     return (function (n) {
                        const r = n.unit,
                           s = q[r];
                        return null != s
                           ? Fe(n, h(s))
                           : "cqmin" === r || "cqmax" === r
                           ? Fe(
                                n,
                                a(n.unit.slice(2), [
                                   h(jt),
                                   {
                                      type: 6,
                                   },
                                   h(_t),
                                ])
                             )
                           : n;
                     })(t);
                  case 27:
                     return U({}, t, {
                        value: De(t.value),
                     });
               }
               return t;
            });
         }
         function pe(e) {
            switch (e.name) {
               case "container":
                  return P(e.value)
                     ? U({}, e, {
                          name: fn,
                       })
                     : e;
               case "container-name":
                  return me(ue(e.value), !0)
                     ? U({}, e, {
                          name: Ot,
                       })
                     : e;
               case "container-type":
                  return null != Q(ue(e.value), !0)
                     ? U({}, e, {
                          name: ct,
                       })
                     : e;
            }
            return U({}, e, {
               value: De(e.value),
            });
         }
         function J(e, t) {
            try {
               const n = Array.from(gt(e));
               if (t)
                  for (let s = 0; s < n.length; s++) {
                     const u = n[s];
                     if (20 === u.type) u.value = new URL(u.value, t).toString();
                     else if (23 === u.type && "url" === u.value.toLowerCase()) {
                        const E = s + 1 < n.length ? n[s + 1] : null;
                        E && 2 === E.type && (E.value = new URL(E.value, t).toString());
                     }
                  }
               const r = {
                  descriptors: [],
                  parent: null,
                  transformStyleRule: (s) => s,
               };
               return {
                  source: Ut(T(qt(n, !0), r)),
                  descriptors: r.descriptors,
               };
            } catch (n) {
               return (
                  console.warn("An error occurred while transpiling stylesheet: " + n),
                  {
                     source: e,
                     descriptors: [],
                  }
               );
            }
         }
         function T(e, t) {
            return U({}, e, {
               value: e.value.map((n) => {
                  switch (n.type) {
                     case 25:
                        return p(n, t);
                     case 26:
                        return (s = t).transformStyleRule(
                           U({}, (r = n), {
                              value: S(r.value, s),
                           })
                        );
                     default:
                        return n;
                  }
                  var r, s;
               }),
            });
         }
         function d(e) {
            return 0 === e.type || 6 === e.type;
         }
         function i(e) {
            for (let t = e.length - 1; t >= 0; t--) if (1 !== e[t].type) return e.slice(0, t + 1);
            return e;
         }
         function S(e, t) {
            return (function (n, r) {
               const s = [];
               let u = null,
                  E = null;
               for (const w of n.value.value)
                  switch (w.type) {
                     case 25:
                        {
                           const D = r ? r(w) : w;
                           D && s.push(D);
                        }
                        break;
                     case 29: {
                        const D = pe(w);
                        switch (D.name) {
                           case fn: {
                              const z = P(w.value);
                              z !== _ && ((u = z[0]), (E = z[1]));
                              break;
                           }
                           case Ot: {
                              const z = me(ue(w.value), !0);
                              z !== _ && (u = z);
                              break;
                           }
                           case ct: {
                              const z = Q(ue(w.value), !0);
                              z !== _ && (E = z);
                              break;
                           }
                           default:
                              s.push(D);
                        }
                     }
                  }
               return (
                  u && u.length > 0 && s.push(c(Ot, [l(u.join(" "))])),
                  E && E.length > 0 && s.push(c(ct, [l(E.join(" "))])),
                  U({}, n, {
                     value: {
                        type: 2,
                        value: s,
                     },
                  })
               );
            })(e, (n) => p(n, t));
         }
         function I(e) {
            if (1 === e.type)
               return U({}, e, {
                  value: I(e.value),
               });
            if (2 === e.type || 3 === e.type)
               return U({}, e, {
                  left: I(e.left),
                  right: I(e.right),
               });
            if (4 === e.type && 28 === e.value.type) {
               const t = (function (n) {
                  const r = ue(n);
                  return Oe(r), 24 !== r.at(1).type ? _ : yn(r) || _;
               })(e.value.value.value);
               if (t !== _)
                  return U({}, e, {
                     value: U({}, e.value, {
                        value: {
                           type: 0,
                           value: [pe(t)],
                        },
                     }),
                  });
            }
            return e;
         }
         function K(e, t) {
            let n = x(ue(e.prelude));
            return (
               (n = n !== _ ? I(n) : _),
               U({}, e, {
                  prelude: n !== _ ? O(n) : e.prelude,
                  value: e.value
                     ? U({}, e.value, {
                          value: T(qt(e.value.value.value), t),
                       })
                     : null,
               })
            );
         }
         function p(e, t) {
            switch (e.name.toLocaleLowerCase()) {
               case "media":
               case "layer":
                  return (
                     (r = t),
                     U({}, (n = e), {
                        value: n.value
                           ? U({}, n.value, {
                                value: T(qt(n.value.value.value), r),
                             })
                           : null,
                     })
                  );
               case "keyframes":
                  return (function (n, r) {
                     let s = null;
                     return (
                        n.value &&
                           (s = U({}, n.value, {
                              value: {
                                 type: 3,
                                 value: qt(n.value.value.value).value.map((u) => {
                                    switch (u.type) {
                                       case 26:
                                          return U({}, (E = u), {
                                             value: S(E.value, r),
                                          });
                                       case 25:
                                          return p(u, r);
                                    }
                                    var E;
                                 }),
                              },
                           })),
                        U({}, n, {
                           value: s,
                        })
                     );
                  })(e, t);
               case "supports":
                  return K(e, t);
               case "container":
                  return (function (n, r) {
                     if (n.value) {
                        const s = ae(n.prelude);
                        if (s !== _) {
                           const u = {
                                 rule: s,
                                 selector: null,
                                 parent: r.parent,
                                 uid: "c" + X++,
                              },
                              E = new Set(),
                              w = [],
                              D = T(qt(n.value.value.value), {
                                 descriptors: r.descriptors,
                                 parent: u,
                                 transformStyleRule: (z) => {
                                    const [Ee, Ce] = (function (be, Qe, Je) {
                                       const de = ue(be),
                                          Ae = [],
                                          Ne = [];
                                       for (;;) {
                                          if (0 === de.at(1).type) return [Ae, Ne];
                                          const H = Math.max(0, de.index);
                                          for (
                                             ;
                                             ($e = de.at(1)),
                                                (b = de.at(2)),
                                                !(
                                                   d($e) ||
                                                   (7 === $e.type &&
                                                      (7 === b.type ||
                                                         (24 === b.type && _e.has(b.value.toLowerCase()))))
                                                );

                                          )
                                             de.consume(1);
                                          const se = de.index + 1,
                                             ie = be.slice(H, se),
                                             y = ie.length > 0 ? i(ie) : [o("*")];
                                          for (; !d(de.at(1)); ) de.consume(1);
                                          const C = be.slice(se, Math.max(0, de.index + 1));
                                          let ne = y,
                                             Te = [
                                                {
                                                   type: 28,
                                                   source: {
                                                      type: 9,
                                                   },
                                                   value: {
                                                      type: 0,
                                                      value: [
                                                         l(C.length > 0 ? Zt : It),
                                                         o("~"),
                                                         o("="),
                                                         {
                                                            type: 2,
                                                            value: Qe,
                                                         },
                                                      ],
                                                   },
                                                },
                                             ];
                                          if (Me) Te = [o(":"), a("where", Te)];
                                          else {
                                             const Ve = y.map(mn).join("");
                                             Ve.endsWith(qe)
                                                ? (ne = je(Array.from(gt(Ve.substring(0, Ve.length - qe.length)))))
                                                : w.push({
                                                     actual: Ve,
                                                     expected: Ve + qe,
                                                  });
                                          }
                                          Ae.push(...y), Ne.push(...ne), Ne.push(...Te), Ne.push(...C), de.consume(1);
                                       }
                                       var $e, b;
                                    })(z.prelude, u.uid);
                                    if (w.length > 0) return z;
                                    const ze = Ee.map(mn).join("");
                                    try {
                                       ke.matches(ze), E.add(ze);
                                    } catch {}
                                    return U({}, z, {
                                       prelude: Ce,
                                    });
                                 },
                              }).value;
                           if (w.length > 0) {
                              const z = new Set(),
                                 Ee = [];
                              let Ce = 0;
                              for (const { actual: be } of w) Ce = Math.max(Ce, be.length);
                              const ze = Array.from(
                                 {
                                    length: Ce,
                                 },
                                 () => " "
                              ).join("");
                              for (const { actual: be, expected: Qe } of w)
                                 z.has(be) || (Ee.push(`${be}${ze.substring(0, Ce - be.length)} => ${Qe}`), z.add(be));
                              console.warn(
                                 `The :where() pseudo-class is not supported by this browser. To use the Container Query Polyfill, you must modify the selectors under your @container rules:\n\n${Ee.join(
                                    "\n"
                                 )}`
                              );
                           }
                           return (
                              E.size > 0 && (u.selector = Array.from(E).join(", ")),
                              r.descriptors.push(u),
                              {
                                 type: 25,
                                 name: "media",
                                 prelude: [l("all")],
                                 value: U({}, n.value, {
                                    value: {
                                       type: 3,
                                       value: D,
                                    },
                                 }),
                              }
                           );
                        }
                     }
                     return n;
                  })(e, t);
            }
            var n, r;
            return e;
         }
         class m {
            constructor(t) {
               (this.value = void 0), (this.value = t);
            }
         }
         function f(e, t) {
            if (e === t) return !0;
            if (typeof e == typeof t && null !== e && null !== t && "object" == typeof e) {
               if (Array.isArray(e)) {
                  if (!Array.isArray(t) || t.length !== e.length) return !1;
                  for (let n = 0, r = e.length; n < r; n++) if (!f(e[n], t[n])) return !1;
                  return !0;
               }
               if (e instanceof m) return t instanceof m && e.value === t.value;
               {
                  const n = Object.keys(e);
                  if (n.length !== Object.keys(t).length) return !1;
                  for (let r = 0, s = n.length; r < s; r++) {
                     const u = n[r];
                     if (!f(e[u], t[u])) return !1;
                  }
                  return !0;
               }
            }
            return !1;
         }
         const g = Symbol("CQ_INSTANCE"),
            N = Symbol("CQ_STYLESHEET"),
            A = Symbol("CQ_SHADOW"),
            M = CSS.supports("width: 1svh"),
            $ = new Set(["vertical-lr", "vertical-rl", "sideways-rl", "sideways-lr", "tb", "tb-lr", "tb-rl"]),
            G = ["padding-left", "padding-right", "border-left-width", "border-right-width"],
            V = ["padding-top", "padding-bottom", "border-top-width", "border-bottom-width"],
            le = /(\w*(\s|-))?(table|ruby)(-\w*)?/;
         class te {
            constructor(t) {
               (this.node = void 0), (this.node = t);
            }
            connected() {}
            disconnected() {}
            updated() {}
            mutated() {}
         }
         class ft extends te {
            constructor(t, n) {
               super(t),
                  (this.context = void 0),
                  (this.controller = null),
                  (this.styleSheet = null),
                  (this.context = n);
            }
            connected() {
               var t = this;
               const n = this.node;
               if ("stylesheet" === n.rel) {
                  const r = new URL(n.href, document.baseURI);
                  r.origin === location.origin &&
                     (this.controller = wt(
                        (function () {
                           var s = (0, et.Z)(function* (u) {
                              const E = yield fetch(r.toString(), {
                                    signal: u,
                                 }),
                                 w = yield E.text(),
                                 D = (t.styleSheet = yield t.context.registerStyleSheet({
                                    source: w,
                                    url: r,
                                    signal: u,
                                 })),
                                 z = new Blob([D.source], {
                                    type: "text/css",
                                 }),
                                 Ee = new Image();
                              (Ee.onload = Ee.onerror = D.refresh), (Ee.src = n.href = URL.createObjectURL(z));
                           });
                           return function (u) {
                              return s.apply(this, arguments);
                           };
                        })()
                     ));
               }
            }
            disconnected() {
               var t, n;
               null == (t = this.controller) || t.abort(),
                  (this.controller = null),
                  null == (n = this.styleSheet) || n.dispose(),
                  (this.styleSheet = null);
            }
         }
         class Xe extends te {
            constructor(t, n) {
               super(t),
                  (this.context = void 0),
                  (this.controller = null),
                  (this.styleSheet = null),
                  (this.context = n);
            }
            connected() {
               var t = this;
               this.controller = wt(
                  (function () {
                     var n = (0, et.Z)(function* (r) {
                        const s = t.node,
                           u = (t.styleSheet = yield t.context.registerStyleSheet({
                              source: s.innerHTML,
                              signal: r,
                           }));
                        (s.innerHTML = u.source), u.refresh();
                     });
                     return function (r) {
                        return n.apply(this, arguments);
                     };
                  })()
               );
            }
            disconnected() {
               var t, n;
               null == (t = this.controller) || t.abort(),
                  (this.controller = null),
                  null == (n = this.styleSheet) || n.dispose(),
                  (this.styleSheet = null);
            }
         }
         const Wt = [];
         let tn = !1;
         class Mn extends te {
            constructor(t, n) {
               super(t),
                  (this.controller = null),
                  (this.mo = void 0),
                  (this.mo = n),
                  tn ||
                     ((window.onload = () => {
                        for (const r of Wt) r();
                     }),
                     (tn = !0));
            }
            connected() {
               var t;
               Wt.push(() => {
                  const n = document.createElement("style");
                  (n.textContent = `* { ${ct}: inherit; ${Ot}: inherit; }`), this.node.appendChild(n);
               }),
                  null == (t = this.mo) ||
                     t.observe(this.node, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                        attributeOldValue: !0,
                     });
            }
            disconnected() {
               var t, n;
               null == (t = this.controller) || t.abort(),
                  (this.controller = null),
                  null == (n = this.mo) || n.disconnect();
            }
         }
         class nn extends te {
            connected() {
               const t = `* { ${ct}: cq-normal; ${Ot}: cq-none; }`;
               this.node.innerHTML = void 0 === window.CSSLayerBlockRule ? t : `@layer cq-polyfill-${ye} { ${t} }`;
            }
         }
         class bn extends te {
            constructor(t, n) {
               super(t),
                  (this.context = void 0),
                  (this.styles = void 0),
                  (this.context = n),
                  (this.styles = window.getComputedStyle(t));
            }
            connected() {
               this.node.style.cssText =
                  "position: fixed; top: 0; left: 0; visibility: hidden; " +
                  (M ? "width: 1svw; height: 1svh;" : "width: 1%; height: 1%;");
            }
            updated() {
               const t = kt((n) => this.styles.getPropertyValue(n));
               this.context.viewportChanged({
                  width: t.width,
                  height: t.height,
               });
            }
         }
         function wt(e) {
            const t = new AbortController();
            return (
               e(t.signal).catch((n) => {
                  if (!(n instanceof DOMException && "AbortError" === n.message)) throw n;
               }),
               t
            );
         }
         function Tn(e) {
            let t = 0;
            if (0 === e.length || (e.startsWith("cq-") && ("normal" === (e = e.substring(3)) || R(e)))) return t;
            const n = e.split(" ");
            for (const r of n)
               switch (r) {
                  case "size":
                     t |= 3;
                     break;
                  case "inline-size":
                     t |= 1;
                     break;
                  default:
                     return 0;
               }
            return t;
         }
         function Bt(e) {
            let t = 0;
            return "none" !== e && ((t |= 1), "contents" === e || "inline" === e || le.test(e) || (t |= 2)), t;
         }
         function Ht(e, t) {
            return parseFloat(e(t));
         }
         function rn(e, t) {
            return t.reduce((n, r) => n + Ht(e, r), 0);
         }
         function kt(e) {
            let t = 0,
               n = 0;
            return (
               "border-box" === e("box-sizing") && ((t = rn(e, G)), (n = rn(e, V))),
               {
                  fontSize: Ht(e, "font-size"),
                  width: Ht(e, "width") - t,
                  height: Ht(e, "height") - n,
               }
            );
         }
         function rt(e) {
            return {
               containerType: Tn(e(ct).trim()),
               containerNames:
                  ((n = e(Ot).trim()),
                  n.startsWith("cq-") && ("none" === (n = n.substring(3)) || R(n))
                     ? new Set([])
                     : new Set(0 === n.length ? [] : n.split(" "))),
               writingAxis: ((t = e("writing-mode").trim()), $.has(t) ? 1 : 0),
               displayFlags: Bt(e("display").trim()),
            };
            var t, n;
         }
         function Ye(e, t, n) {
            null != n ? n != e.getPropertyValue(t) && e.setProperty(t, n) : e.removeProperty(t);
         }
         function Dn(e) {
            const t = e[N];
            return null != t ? t : [];
         }
         function wn(e, t) {
            e[N] = t;
         }
         new Promise((e) => {}),
            (window.CQPolyfill = {
               version: "1.1.8",
            }),
            "container" in document.documentElement.style ||
               (function (e) {
                  function t(y) {
                     return y[g] || null;
                  }
                  const n = document.documentElement;
                  if (t(n)) return;
                  const r = document.createElement(`cq-polyfill-${ye}`),
                     s = document.createElement("style"),
                     u = () =>
                        new MutationObserver((y) => {
                           for (const C of y) {
                              for (const ne of C.removedNodes) {
                                 const Te = t(ne);
                                 null == Te || Te.disconnect();
                              }
                              (C.target.nodeType !== Node.DOCUMENT_NODE &&
                                 C.target.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
                                 null === C.target.parentNode) ||
                                 ("attributes" === C.type &&
                                    C.attributeName &&
                                    (C.attributeName === Zt ||
                                       C.attributeName === It ||
                                       (C.target instanceof Element &&
                                          C.target.getAttribute(C.attributeName) === C.oldValue))) ||
                                 (ie(C.target).mutate(), Ne());
                           }
                        });
                  u().observe(n, {
                     childList: !0,
                     subtree: !0,
                     attributes: !0,
                     attributeOldValue: !0,
                  });
                  const E = Element.prototype.attachShadow;
                  Element.prototype.attachShadow = function (y) {
                     const C = E.apply(this, [y]);
                     return (this[A] = C), ie(C), C;
                  };
                  const w = CSSStyleSheet.prototype.replaceSync;
                  w &&
                     (CSSStyleSheet.prototype.replaceSync = function (y) {
                        const C = J(y, void 0);
                        return wn(this, C.descriptors), w.apply(this, [C.source]);
                     });
                  const D = CSSStyleSheet.prototype.replace;
                  let z;
                  D &&
                     (CSSStyleSheet.prototype.replace = function (y) {
                        const C = J(y, void 0);
                        return wn(this, C.descriptors), D.apply(this, [C.source]);
                     });
                  const Ee = ResizeObserver.prototype.unobserve;
                  ResizeObserver.prototype.unobserve = function (y) {
                     return z && window.cancelAnimationFrame(z), Ee.apply(this, [y]);
                  };
                  const Ce = new ResizeObserver((y) => {
                        z = window.requestAnimationFrame(() => {
                           for (const C of y) ie(C.target).resize();
                           ie(n).update(H());
                        });
                     }),
                     ze = new te(n);
                  function be(y, C) {
                     return Qe.apply(this, arguments);
                  }
                  function Qe() {
                     return (Qe = (0, et.Z)(function* (y, { source: C, url: ne, signal: Te }) {
                        const Ve = J(C, ne ? ne.toString() : void 0);
                        let St = () => {},
                           Mt = () => {};
                        const Ft = ie(n);
                        let On = !1;
                        return (
                           (null != Te && Te.aborted) ||
                              (Mt = () => {
                                 if (!On) {
                                    const { sheet: Ge } = y;
                                    null != Ge &&
                                       (wn(Ge, Ve.descriptors),
                                       (On = !0),
                                       (St = () => {
                                          wn(Ge), Ft.mutate(), Ne();
                                       }),
                                       Ft.mutate(),
                                       Ne());
                                 }
                              }),
                           {
                              source: Ve.source,
                              dispose: St,
                              refresh: Mt,
                           }
                        );
                     })).apply(this, arguments);
                  }
                  const Je = {
                     cqw: null,
                     cqh: null,
                  };
                  function de({ width: y, height: C }) {
                     (Je.cqw = y), (Je.cqh = C);
                  }
                  function Ae(y, C, ne) {
                     if (y instanceof Element && C) {
                        let Te = "";
                        for (const [Ve, St] of C.conditions) {
                           const Mt = Ve.value;
                           null != Mt.selector &&
                              null != St &&
                              2 == (2 & St) &&
                              y.matches(Mt.selector) &&
                              (Te.length > 0 && (Te += " "), (Te += Mt.uid));
                        }
                        Te.length > 0 ? y.setAttribute(ne, Te) : y.removeAttribute(ne);
                     }
                  }
                  function Ne() {
                     Ce.unobserve(n), Ce.observe(n);
                  }
                  const $e = () => {
                        const y = [];
                        for (const C of document.styleSheets) for (const ne of Dn(C)) y.push([new m(ne), 0]);
                        return y;
                     },
                     b = window.getComputedStyle(n),
                     H = () => {
                        const y = (Te) => b.getPropertyValue(Te),
                           C = rt(y),
                           ne = kt(y);
                        return {
                           parentState: null,
                           conditions: $e(),
                           context: U({}, Je, {
                              fontSize: ne.fontSize,
                              rootFontSize: ne.fontSize,
                              writingAxis: C.writingAxis,
                           }),
                           displayFlags: C.displayFlags,
                           isQueryContainer: !1,
                        };
                     },
                     se = (y) => y;
                  function ie(y) {
                     let C = t(y);
                     if (!C) {
                        let ne,
                           Te = null,
                           Ve = !1;
                        y === n
                           ? ((ne = ze), (Te = se))
                           : y === r
                           ? ((Ve = !0),
                             (ne = new bn(r, {
                                viewportChanged: de,
                             })))
                           : y === s
                           ? (ne = new nn(s))
                           : y instanceof HTMLLinkElement
                           ? (ne = new ft(y, {
                                registerStyleSheet: (ce) => be(y, U({}, ce)),
                             }))
                           : y instanceof ShadowRoot
                           ? ((ne = new Mn(y, u())),
                             (ce = y),
                             (Te = (ge) => {
                                var $t, Yt;
                                const we = [],
                                   ht = (Le) => {
                                      var dt;
                                      const sn = null == (dt = Le.parentState) ? void 0 : dt.value;
                                      return Le.isQueryContainer || 2 === (sn && ht(sn)) ? 2 : 0;
                                   },
                                   Dt = (Le) => {
                                      we.push([new m(Le), ht(ge)]);
                                   },
                                   Nt = null != ($t = null == ce ? void 0 : ce.adoptedStyleSheets) ? $t : [];
                                for (const Le of Nt) if (Le) for (const dt of Dn(Le)) Dt(dt);
                                const on = null != (Yt = null == ce ? void 0 : ce.styleSheets) ? Yt : [];
                                for (const Le of on) if (Le) for (const dt of Dn(Le)) Dt(dt);
                                return U({}, ge, {
                                   conditions: we,
                                });
                             }))
                           : (ne =
                                y instanceof HTMLStyleElement
                                   ? new Xe(y, {
                                        registerStyleSheet: (ce) => be(y, U({}, ce)),
                                     })
                                   : new te(y));
                        let St = Symbol();
                        if (null == Te && y instanceof Element) {
                           const ce = (function (ge) {
                              const $t = window.getComputedStyle(ge);
                              return (function (Yt) {
                                 let we = null;
                                 return (...ht) => {
                                    if (null == we || !f(we[0], ht)) {
                                       const Dt = ((Nt, on) => {
                                          const { context: Le, conditions: dt } = Nt,
                                             sn = (Zn) => $t.getPropertyValue(Zn),
                                             Pn = rt(sn),
                                             cn = U({}, Le, {
                                                writingAxis: Pn.writingAxis,
                                             });
                                          let Ln = dt,
                                             $n = !1,
                                             An = Pn.displayFlags;
                                          !(1 & Nt.displayFlags) && (An = 0);
                                          const { containerType: Gn, containerNames: dr } = Pn;
                                          if (Gn > 0) {
                                             const Zn = Gn > 0 && 2 == (2 & An),
                                                pr = new Map(dt.map((un) => [un[0].value, un[1]]));
                                             if (((Ln = []), ($n = !0), Zn)) {
                                                const un = kt(sn);
                                                cn.fontSize = un.fontSize;
                                                const an = (function (Ke, ot) {
                                                      const pt = {
                                                            value: ot.width,
                                                         },
                                                         Lt = {
                                                            value: ot.height,
                                                         };
                                                      let Qt = pt,
                                                         Gt = Lt;
                                                      if (1 === Ke.writingAxis) {
                                                         const xn = Qt;
                                                         (Qt = Gt), (Gt = xn);
                                                      }
                                                      return (
                                                         2 != (2 & Ke.containerType) && (Gt.value = void 0),
                                                         {
                                                            width: pt.value,
                                                            height: Lt.value,
                                                            inlineSize: Qt.value,
                                                            blockSize: Gt.value,
                                                         }
                                                      );
                                                   })(Pn, un),
                                                   yr = {
                                                      sizeFeatures: an,
                                                      treeContext: cn,
                                                   },
                                                   vr = (Ke) => {
                                                      const { rule: ot } = Ke,
                                                         pt = ot.name,
                                                         Lt =
                                                            null == pt || dr.has(pt)
                                                               ? (function (Gt, xn) {
                                                                    const Un = new Map(),
                                                                       _r = xn.sizeFeatures;
                                                                    for (const Bn of Gt.features) {
                                                                       const Xn = yt(Bn, _r);
                                                                       if (1 === Xn.type) return null;
                                                                       Un.set(Bn, Xn);
                                                                    }
                                                                    const Wn = Be(Gt.condition, {
                                                                       sizeFeatures: Un,
                                                                       treeContext: xn.treeContext,
                                                                    });
                                                                    return 5 === Wn.type ? Wn.value : null;
                                                                 })(ot, yr)
                                                               : null;
                                                      var Qt;
                                                      return null == Lt
                                                         ? 1 === ((null != (Qt = pr.get(Ke)) ? Qt : 0) && 1)
                                                         : !0 === Lt;
                                                   },
                                                   Vn = (Ke, ot) => {
                                                      let pt = Ke.get(ot);
                                                      if (null == pt) {
                                                         const Lt = vr(ot);
                                                         (pt =
                                                            (Lt ? 1 : 0) |
                                                            (!0 !== Lt ||
                                                            (null != ot.parent && 1 != (1 & Vn(Ke, ot.parent)))
                                                               ? 0
                                                               : 2)),
                                                            Ke.set(ot, pt);
                                                      }
                                                      return pt;
                                                   },
                                                   mr = new Map();
                                                for (const Ke of dt) Ln.push([Ke[0], Vn(mr, Ke[0].value)]);
                                                (cn.cqw = null != an.width ? an.width / 100 : Le.cqw),
                                                   (cn.cqh = null != an.height ? an.height / 100 : Le.cqh);
                                             }
                                          }
                                          return {
                                             parentState: new m(Nt),
                                             conditions: Ln,
                                             context: cn,
                                             displayFlags: An,
                                             isQueryContainer: $n,
                                          };
                                       })(...ht);
                                       (null != we && f(we[1], Dt)) || (we = [ht, Dt]);
                                    }
                                    return we[1];
                                 };
                              })();
                           })(y);
                           Te = (ge) => ce(ge, St);
                        }
                        const Mt = Te || se;
                        let Ft = null;
                        const On = (ce) => {
                              const ge = Ft;
                              return (Ft = Mt(ce)), [Ft, Ft !== ge];
                           },
                           Ge = y instanceof HTMLElement || y instanceof SVGElement ? y.style : null;
                        let Rn = !1;
                        (C = {
                           connect() {
                              for (let ce = y.firstChild; null != ce; ce = ce.nextSibling) ie(ce);
                              ne.connected();
                           },
                           disconnect() {
                              y instanceof Element && (Ce.unobserve(y), y.removeAttribute(Zt), y.removeAttribute(It)),
                                 Ge &&
                                    (Ge.removeProperty(jt),
                                    Ge.removeProperty(_t),
                                    Ge.removeProperty(ut),
                                    Ge.removeProperty(mt));
                              for (let ce = y.firstChild; null != ce; ce = ce.nextSibling) {
                                 const ge = t(ce);
                                 null == ge || ge.disconnect();
                              }
                              ne.disconnected(), delete y[g];
                           },
                           update(ce) {
                              const [ge, $t] = On(ce);
                              if ($t) {
                                 if ((Ae(y, ce, It), Ae(y, ge, Zt), y instanceof Element)) {
                                    const we = Ve || ge.isQueryContainer;
                                    we && !Rn ? (Ce.observe(y), (Rn = !0)) : !we && Rn && (Ce.unobserve(y), (Rn = !1));
                                 }
                                 if (Ge) {
                                    const we = ge.context,
                                       ht = we.writingAxis;
                                    let Dt = null,
                                       Nt = null,
                                       on = null,
                                       Le = null;
                                    (ht !== ce.context.writingAxis || ge.isQueryContainer) &&
                                       ((Dt = `var(${0 === ht ? ut : mt})`), (Nt = `var(${1 === ht ? ut : mt})`)),
                                       (ce && !ge.isQueryContainer) ||
                                          (we.cqw && (on = we.cqw + "px"), we.cqh && (Le = we.cqh + "px")),
                                       Ye(Ge, jt, Dt),
                                       Ye(Ge, _t, Nt),
                                       Ye(Ge, ut, on),
                                       Ye(Ge, mt, Le);
                                 }
                                 ne.updated();
                              }
                              for (let we = y.firstChild; null != we; we = we.nextSibling) ie(we).update(ge);
                              const Yt = y[A];
                              Yt && ie(Yt).update(ge);
                           },
                           resize() {
                              St = Symbol();
                           },
                           mutate() {
                              (St = Symbol()), ne.mutated();
                              for (let ge = y.firstChild; null != ge; ge = ge.nextSibling) ie(ge).mutate();
                              const ce = y[A];
                              ce && ie(ce).mutate();
                           },
                        }),
                           (y[g] = C),
                           C.connect();
                     }
                     var ce;
                     return C;
                  }
                  n.prepend(s, r), ie(n), Ne();
               })();
         var In = (function () {
               if (typeof Map < "u") return Map;
               function e(t, n) {
                  var r = -1;
                  return (
                     t.some(function (s, u) {
                        return s[0] === n && ((r = u), !0);
                     }),
                     r
                  );
               }
               return (function () {
                  function t() {
                     this.__entries__ = [];
                  }
                  return (
                     Object.defineProperty(t.prototype, "size", {
                        get: function () {
                           return this.__entries__.length;
                        },
                        enumerable: !0,
                        configurable: !0,
                     }),
                     (t.prototype.get = function (n) {
                        var r = e(this.__entries__, n),
                           s = this.__entries__[r];
                        return s && s[1];
                     }),
                     (t.prototype.set = function (n, r) {
                        var s = e(this.__entries__, n);
                        ~s ? (this.__entries__[s][1] = r) : this.__entries__.push([n, r]);
                     }),
                     (t.prototype.delete = function (n) {
                        var r = this.__entries__,
                           s = e(r, n);
                        ~s && r.splice(s, 1);
                     }),
                     (t.prototype.has = function (n) {
                        return !!~e(this.__entries__, n);
                     }),
                     (t.prototype.clear = function () {
                        this.__entries__.splice(0);
                     }),
                     (t.prototype.forEach = function (n, r) {
                        void 0 === r && (r = null);
                        for (var s = 0, u = this.__entries__; s < u.length; s++) {
                           var E = u[s];
                           n.call(r, E[1], E[0]);
                        }
                     }),
                     t
                  );
               })();
            })(),
            Nn = typeof window < "u" && typeof document < "u" && window.document === document,
            kn =
               typeof global < "u" && global.Math === Math
                  ? global
                  : typeof self < "u" && self.Math === Math
                  ? self
                  : typeof window < "u" && window.Math === Math
                  ? window
                  : Function("return this")(),
            Yn =
               "function" == typeof requestAnimationFrame
                  ? requestAnimationFrame.bind(kn)
                  : function (e) {
                       return setTimeout(function () {
                          return e(Date.now());
                       }, 1e3 / 60);
                    },
            er = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            tr = typeof MutationObserver < "u",
            nr = (function () {
               function e() {
                  (this.connected_ = !1),
                     (this.mutationEventsAdded_ = !1),
                     (this.mutationsObserver_ = null),
                     (this.observers_ = []),
                     (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                     (this.refresh = (function Jn(e, t) {
                        var n = !1,
                           r = !1,
                           s = 0;
                        function u() {
                           n && ((n = !1), e()), r && w();
                        }
                        function E() {
                           Yn(u);
                        }
                        function w() {
                           var D = Date.now();
                           if (n) {
                              if (D - s < 2) return;
                              r = !0;
                           } else (n = !0), (r = !1), setTimeout(E, t);
                           s = D;
                        }
                        return w;
                     })(this.refresh.bind(this), 20));
               }
               return (
                  (e.prototype.addObserver = function (t) {
                     ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
                  }),
                  (e.prototype.removeObserver = function (t) {
                     var n = this.observers_,
                        r = n.indexOf(t);
                     ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
                  }),
                  (e.prototype.refresh = function () {
                     this.updateObservers_() && this.refresh();
                  }),
                  (e.prototype.updateObservers_ = function () {
                     var t = this.observers_.filter(function (n) {
                        return n.gatherActive(), n.hasActive();
                     });
                     return (
                        t.forEach(function (n) {
                           return n.broadcastActive();
                        }),
                        t.length > 0
                     );
                  }),
                  (e.prototype.connect_ = function () {
                     !Nn ||
                        this.connected_ ||
                        (document.addEventListener("transitionend", this.onTransitionEnd_),
                        window.addEventListener("resize", this.refresh),
                        tr
                           ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
                             this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0,
                             }))
                           : (document.addEventListener("DOMSubtreeModified", this.refresh),
                             (this.mutationEventsAdded_ = !0)),
                        (this.connected_ = !0));
                  }),
                  (e.prototype.disconnect_ = function () {
                     !Nn ||
                        !this.connected_ ||
                        (document.removeEventListener("transitionend", this.onTransitionEnd_),
                        window.removeEventListener("resize", this.refresh),
                        this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                        this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                        (this.mutationsObserver_ = null),
                        (this.mutationEventsAdded_ = !1),
                        (this.connected_ = !1));
                  }),
                  (e.prototype.onTransitionEnd_ = function (t) {
                     var n = t.propertyName,
                        r = void 0 === n ? "" : n;
                     er.some(function (u) {
                        return !!~r.indexOf(u);
                     }) && this.refresh();
                  }),
                  (e.getInstance = function () {
                     return this.instance_ || (this.instance_ = new e()), this.instance_;
                  }),
                  (e.instance_ = null),
                  e
               );
            })(),
            jn = function (e, t) {
               for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                  var s = r[n];
                  Object.defineProperty(e, s, {
                     value: t[s],
                     enumerable: !1,
                     writable: !1,
                     configurable: !0,
                  });
               }
               return e;
            },
            Xt = function (e) {
               return (e && e.ownerDocument && e.ownerDocument.defaultView) || kn;
            },
            qn = Cn(0, 0, 0, 0);
         function Sn(e) {
            return parseFloat(e) || 0;
         }
         function zn(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            return t.reduce(function (r, s) {
               return r + Sn(e["border-" + s + "-width"]);
            }, 0);
         }
         var ir =
            typeof SVGGraphicsElement < "u"
               ? function (e) {
                    return e instanceof Xt(e).SVGGraphicsElement;
                 }
               : function (e) {
                    return e instanceof Xt(e).SVGElement && "function" == typeof e.getBBox;
                 };
         function ur(e) {
            return Nn
               ? ir(e)
                  ? (function or(e) {
                       var t = e.getBBox();
                       return Cn(0, 0, t.width, t.height);
                    })(e)
                  : (function sr(e) {
                       var t = e.clientWidth,
                          n = e.clientHeight;
                       if (!t && !n) return qn;
                       var r = Xt(e).getComputedStyle(e),
                          s = (function rr(e) {
                             for (var n = {}, r = 0, s = ["top", "right", "bottom", "left"]; r < s.length; r++) {
                                var u = s[r];
                                n[u] = Sn(e["padding-" + u]);
                             }
                             return n;
                          })(r),
                          u = s.left + s.right,
                          E = s.top + s.bottom,
                          w = Sn(r.width),
                          D = Sn(r.height);
                       if (
                          ("border-box" === r.boxSizing &&
                             (Math.round(w + u) !== t && (w -= zn(r, "left", "right") + u),
                             Math.round(D + E) !== n && (D -= zn(r, "top", "bottom") + E)),
                          !(function cr(e) {
                             return e === Xt(e).document.documentElement;
                          })(e))
                       ) {
                          var z = Math.round(w + u) - t,
                             Ee = Math.round(D + E) - n;
                          1 !== Math.abs(z) && (w -= z), 1 !== Math.abs(Ee) && (D -= Ee);
                       }
                       return Cn(s.left, s.top, w, D);
                    })(e)
               : qn;
         }
         function Cn(e, t, n, r) {
            return {
               x: e,
               y: t,
               width: n,
               height: r,
            };
         }
         var lr = (function () {
               function e(t) {
                  (this.broadcastWidth = 0),
                     (this.broadcastHeight = 0),
                     (this.contentRect_ = Cn(0, 0, 0, 0)),
                     (this.target = t);
               }
               return (
                  (e.prototype.isActive = function () {
                     var t = ur(this.target);
                     return (
                        (this.contentRect_ = t), t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
                     );
                  }),
                  (e.prototype.broadcastRect = function () {
                     var t = this.contentRect_;
                     return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t;
                  }),
                  e
               );
            })(),
            fr = function e(t, n) {
               var r = (function ar(e) {
                  var t = e.x,
                     n = e.y,
                     r = e.width,
                     s = e.height,
                     u = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
                     E = Object.create(u.prototype);
                  return (
                     jn(E, {
                        x: t,
                        y: n,
                        width: r,
                        height: s,
                        top: n,
                        right: t + r,
                        bottom: s + n,
                        left: t,
                     }),
                     E
                  );
               })(n);
               jn(this, {
                  target: t,
                  contentRect: r,
               });
            },
            hr = (function () {
               function e(t, n, r) {
                  if (((this.activeObservations_ = []), (this.observations_ = new In()), "function" != typeof t))
                     throw new TypeError("The callback provided as parameter 1 is not a function.");
                  (this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r);
               }
               return (
                  (e.prototype.observe = function (t) {
                     if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                     if (!(typeof Element > "u") && Element instanceof Object) {
                        if (!(t instanceof Xt(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var n = this.observations_;
                        n.has(t) ||
                           (n.set(t, new lr(t)), this.controller_.addObserver(this), this.controller_.refresh());
                     }
                  }),
                  (e.prototype.unobserve = function (t) {
                     if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                     if (!(typeof Element > "u") && Element instanceof Object) {
                        if (!(t instanceof Xt(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                        var n = this.observations_;
                        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
                     }
                  }),
                  (e.prototype.disconnect = function () {
                     this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
                  }),
                  (e.prototype.gatherActive = function () {
                     var t = this;
                     this.clearActive(),
                        this.observations_.forEach(function (n) {
                           n.isActive() && t.activeObservations_.push(n);
                        });
                  }),
                  (e.prototype.broadcastActive = function () {
                     if (this.hasActive()) {
                        var t = this.callbackCtx_,
                           n = this.activeObservations_.map(function (r) {
                              return new fr(r.target, r.broadcastRect());
                           });
                        this.callback_.call(t, n, t), this.clearActive();
                     }
                  }),
                  (e.prototype.clearActive = function () {
                     this.activeObservations_.splice(0);
                  }),
                  (e.prototype.hasActive = function () {
                     return this.activeObservations_.length > 0;
                  }),
                  e
               );
            })(),
            Hn = typeof WeakMap < "u" ? new WeakMap() : new In(),
            Fn = function e(t) {
               if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
               if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
               var n = nr.getInstance(),
                  r = new hr(t, n, this);
               Hn.set(this, r);
            };
         ["observe", "unobserve", "disconnect"].forEach(function (e) {
            Fn.prototype[e] = function () {
               var t;
               return (t = Hn.get(this))[e].apply(t, arguments);
            };
         });
      },
      3584: () => {
         window.__Zone_disable_customElements = !0;
      },
      8332: () => {
         "use strict";
         !(function (o) {
            const c = o.performance;
            function l(J) {
               c && c.mark && c.mark(J);
            }
            function a(J, T) {
               c && c.measure && c.measure(J, T);
            }
            l("Zone");
            const h = o.__Zone_symbol_prefix || "__zone_symbol__";
            function v(J) {
               return h + J;
            }
            const x = !0 === o[v("forceDuplicateZoneCheck")];
            if (o.Zone) {
               if (x || "function" != typeof o.Zone.__symbol__) throw new Error("Zone already loaded.");
               return o.Zone;
            }
            let O = (() => {
               class T {
                  static assertZonePatched() {
                     if (o.Promise !== qe.ZoneAwarePromise)
                        throw new Error(
                           "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
                        );
                  }
                  static get root() {
                     let i = T.current;
                     for (; i.parent; ) i = i.parent;
                     return i;
                  }
                  static get current() {
                     return _e.zone;
                  }
                  static get currentTask() {
                     return Fe;
                  }
                  static __load_patch(i, S, I = !1) {
                     if (qe.hasOwnProperty(i)) {
                        if (!I && x) throw Error("Already loaded patch: " + i);
                     } else if (!o["__Zone_disable_" + i]) {
                        const K = "Zone:" + i;
                        l(K), (qe[i] = S(o, T, ke)), a(K, K);
                     }
                  }
                  get parent() {
                     return this._parent;
                  }
                  get name() {
                     return this._name;
                  }
                  constructor(i, S) {
                     (this._parent = i),
                        (this._name = S ? S.name || "unnamed" : "<root>"),
                        (this._properties = (S && S.properties) || {}),
                        (this._zoneDelegate = new Z(this, this._parent && this._parent._zoneDelegate, S));
                  }
                  get(i) {
                     const S = this.getZoneWith(i);
                     if (S) return S._properties[i];
                  }
                  getZoneWith(i) {
                     let S = this;
                     for (; S; ) {
                        if (S._properties.hasOwnProperty(i)) return S;
                        S = S._parent;
                     }
                     return null;
                  }
                  fork(i) {
                     if (!i) throw new Error("ZoneSpec required!");
                     return this._zoneDelegate.fork(this, i);
                  }
                  wrap(i, S) {
                     if ("function" != typeof i) throw new Error("Expecting function got: " + i);
                     const I = this._zoneDelegate.intercept(this, i, S),
                        K = this;
                     return function () {
                        return K.runGuarded(I, this, arguments, S);
                     };
                  }
                  run(i, S, I, K) {
                     _e = {
                        parent: _e,
                        zone: this,
                     };
                     try {
                        return this._zoneDelegate.invoke(this, i, S, I, K);
                     } finally {
                        _e = _e.parent;
                     }
                  }
                  runGuarded(i, S = null, I, K) {
                     _e = {
                        parent: _e,
                        zone: this,
                     };
                     try {
                        try {
                           return this._zoneDelegate.invoke(this, i, S, I, K);
                        } catch (p) {
                           if (this._zoneDelegate.handleError(this, p)) throw p;
                        }
                     } finally {
                        _e = _e.parent;
                     }
                  }
                  runTask(i, S, I) {
                     if (i.zone != this)
                        throw new Error(
                           "A task can only be run in the zone of creation! (Creation: " +
                              (i.zone || Se).name +
                              "; Execution: " +
                              this.name +
                              ")"
                        );
                     if (i.state === oe && (i.type === Me || i.type === q)) return;
                     const K = i.state != P;
                     K && i._transitionTo(P, Q), i.runCount++;
                     const p = Fe;
                     (Fe = i),
                        (_e = {
                           parent: _e,
                           zone: this,
                        });
                     try {
                        i.type == q && i.data && !i.data.isPeriodic && (i.cancelFn = void 0);
                        try {
                           return this._zoneDelegate.invokeTask(this, i, S, I);
                        } catch (m) {
                           if (this._zoneDelegate.handleError(this, m)) throw m;
                        }
                     } finally {
                        i.state !== oe &&
                           i.state !== k &&
                           (i.type == Me || (i.data && i.data.isPeriodic)
                              ? K && i._transitionTo(Q, P)
                              : ((i.runCount = 0), this._updateTaskCount(i, -1), K && i._transitionTo(oe, P, oe))),
                           (_e = _e.parent),
                           (Fe = p);
                     }
                  }
                  scheduleTask(i) {
                     if (i.zone && i.zone !== this) {
                        let I = this;
                        for (; I; ) {
                           if (I === i.zone)
                              throw Error(
                                 `can not reschedule task to ${this.name} which is descendants of the original zone ${i.zone.name}`
                              );
                           I = I.parent;
                        }
                     }
                     i._transitionTo(me, oe);
                     const S = [];
                     (i._zoneDelegates = S), (i._zone = this);
                     try {
                        i = this._zoneDelegate.scheduleTask(this, i);
                     } catch (I) {
                        throw (i._transitionTo(k, me, oe), this._zoneDelegate.handleError(this, I), I);
                     }
                     return (
                        i._zoneDelegates === S && this._updateTaskCount(i, 1),
                        i.state == me && i._transitionTo(Q, me),
                        i
                     );
                  }
                  scheduleMicroTask(i, S, I, K) {
                     return this.scheduleTask(new L(X, i, S, I, K, void 0));
                  }
                  scheduleMacroTask(i, S, I, K, p) {
                     return this.scheduleTask(new L(q, i, S, I, K, p));
                  }
                  scheduleEventTask(i, S, I, K, p) {
                     return this.scheduleTask(new L(Me, i, S, I, K, p));
                  }
                  cancelTask(i) {
                     if (i.zone != this)
                        throw new Error(
                           "A task can only be cancelled in the zone of creation! (Creation: " +
                              (i.zone || Se).name +
                              "; Execution: " +
                              this.name +
                              ")"
                        );
                     if (i.state === Q || i.state === P) {
                        i._transitionTo(ae, Q, P);
                        try {
                           this._zoneDelegate.cancelTask(this, i);
                        } catch (S) {
                           throw (i._transitionTo(k, ae), this._zoneDelegate.handleError(this, S), S);
                        }
                        return this._updateTaskCount(i, -1), i._transitionTo(oe, ae), (i.runCount = 0), i;
                     }
                  }
                  _updateTaskCount(i, S) {
                     const I = i._zoneDelegates;
                     -1 == S && (i._zoneDelegates = null);
                     for (let K = 0; K < I.length; K++) I[K]._updateTaskCount(i.type, S);
                  }
               }
               return (T.__symbol__ = v), T;
            })();
            const j = {
               name: "",
               onHasTask: (J, T, d, i) => J.hasTask(d, i),
               onScheduleTask: (J, T, d, i) => J.scheduleTask(d, i),
               onInvokeTask: (J, T, d, i, S, I) => J.invokeTask(d, i, S, I),
               onCancelTask: (J, T, d, i) => J.cancelTask(d, i),
            };
            class Z {
               constructor(T, d, i) {
                  (this._taskCounts = {
                     microTask: 0,
                     macroTask: 0,
                     eventTask: 0,
                  }),
                     (this.zone = T),
                     (this._parentDelegate = d),
                     (this._forkZS = i && (i && i.onFork ? i : d._forkZS)),
                     (this._forkDlgt = i && (i.onFork ? d : d._forkDlgt)),
                     (this._forkCurrZone = i && (i.onFork ? this.zone : d._forkCurrZone)),
                     (this._interceptZS = i && (i.onIntercept ? i : d._interceptZS)),
                     (this._interceptDlgt = i && (i.onIntercept ? d : d._interceptDlgt)),
                     (this._interceptCurrZone = i && (i.onIntercept ? this.zone : d._interceptCurrZone)),
                     (this._invokeZS = i && (i.onInvoke ? i : d._invokeZS)),
                     (this._invokeDlgt = i && (i.onInvoke ? d : d._invokeDlgt)),
                     (this._invokeCurrZone = i && (i.onInvoke ? this.zone : d._invokeCurrZone)),
                     (this._handleErrorZS = i && (i.onHandleError ? i : d._handleErrorZS)),
                     (this._handleErrorDlgt = i && (i.onHandleError ? d : d._handleErrorDlgt)),
                     (this._handleErrorCurrZone = i && (i.onHandleError ? this.zone : d._handleErrorCurrZone)),
                     (this._scheduleTaskZS = i && (i.onScheduleTask ? i : d._scheduleTaskZS)),
                     (this._scheduleTaskDlgt = i && (i.onScheduleTask ? d : d._scheduleTaskDlgt)),
                     (this._scheduleTaskCurrZone = i && (i.onScheduleTask ? this.zone : d._scheduleTaskCurrZone)),
                     (this._invokeTaskZS = i && (i.onInvokeTask ? i : d._invokeTaskZS)),
                     (this._invokeTaskDlgt = i && (i.onInvokeTask ? d : d._invokeTaskDlgt)),
                     (this._invokeTaskCurrZone = i && (i.onInvokeTask ? this.zone : d._invokeTaskCurrZone)),
                     (this._cancelTaskZS = i && (i.onCancelTask ? i : d._cancelTaskZS)),
                     (this._cancelTaskDlgt = i && (i.onCancelTask ? d : d._cancelTaskDlgt)),
                     (this._cancelTaskCurrZone = i && (i.onCancelTask ? this.zone : d._cancelTaskCurrZone)),
                     (this._hasTaskZS = null),
                     (this._hasTaskDlgt = null),
                     (this._hasTaskDlgtOwner = null),
                     (this._hasTaskCurrZone = null);
                  const S = i && i.onHasTask;
                  (S || (d && d._hasTaskZS)) &&
                     ((this._hasTaskZS = S ? i : j),
                     (this._hasTaskDlgt = d),
                     (this._hasTaskDlgtOwner = this),
                     (this._hasTaskCurrZone = T),
                     i.onScheduleTask ||
                        ((this._scheduleTaskZS = j),
                        (this._scheduleTaskDlgt = d),
                        (this._scheduleTaskCurrZone = this.zone)),
                     i.onInvokeTask ||
                        ((this._invokeTaskZS = j), (this._invokeTaskDlgt = d), (this._invokeTaskCurrZone = this.zone)),
                     i.onCancelTask ||
                        ((this._cancelTaskZS = j), (this._cancelTaskDlgt = d), (this._cancelTaskCurrZone = this.zone)));
               }
               fork(T, d) {
                  return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, T, d) : new O(T, d);
               }
               intercept(T, d, i) {
                  return this._interceptZS
                     ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, T, d, i)
                     : d;
               }
               invoke(T, d, i, S, I) {
                  return this._invokeZS
                     ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, T, d, i, S, I)
                     : d.apply(i, S);
               }
               handleError(T, d) {
                  return (
                     !this._handleErrorZS ||
                     this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, T, d)
                  );
               }
               scheduleTask(T, d) {
                  let i = d;
                  if (this._scheduleTaskZS)
                     this._hasTaskZS && i._zoneDelegates.push(this._hasTaskDlgtOwner),
                        (i = this._scheduleTaskZS.onScheduleTask(
                           this._scheduleTaskDlgt,
                           this._scheduleTaskCurrZone,
                           T,
                           d
                        )),
                        i || (i = d);
                  else if (d.scheduleFn) d.scheduleFn(d);
                  else {
                     if (d.type != X) throw new Error("Task is missing scheduleFn.");
                     F(d);
                  }
                  return i;
               }
               invokeTask(T, d, i, S) {
                  return this._invokeTaskZS
                     ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, T, d, i, S)
                     : d.callback.apply(i, S);
               }
               cancelTask(T, d) {
                  let i;
                  if (this._cancelTaskZS)
                     i = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, T, d);
                  else {
                     if (!d.cancelFn) throw Error("Task is not cancelable");
                     i = d.cancelFn(d);
                  }
                  return i;
               }
               hasTask(T, d) {
                  try {
                     this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, T, d);
                  } catch (i) {
                     this.handleError(T, i);
                  }
               }
               _updateTaskCount(T, d) {
                  const i = this._taskCounts,
                     S = i[T],
                     I = (i[T] = S + d);
                  if (I < 0) throw new Error("More tasks executed then were scheduled.");
                  (0 != S && 0 != I) ||
                     this.hasTask(this.zone, {
                        microTask: i.microTask > 0,
                        macroTask: i.macroTask > 0,
                        eventTask: i.eventTask > 0,
                        change: T,
                     });
               }
            }
            class L {
               constructor(T, d, i, S, I, K) {
                  if (
                     ((this._zone = null),
                     (this.runCount = 0),
                     (this._zoneDelegates = null),
                     (this._state = "notScheduled"),
                     (this.type = T),
                     (this.source = d),
                     (this.data = S),
                     (this.scheduleFn = I),
                     (this.cancelFn = K),
                     !i)
                  )
                     throw new Error("callback is not defined");
                  this.callback = i;
                  const p = this;
                  this.invoke =
                     T === Me && S && S.useG
                        ? L.invokeTask
                        : function () {
                             return L.invokeTask.call(o, p, this, arguments);
                          };
               }
               static invokeTask(T, d, i) {
                  T || (T = this), De++;
                  try {
                     return T.runCount++, T.zone.runTask(T, d, i);
                  } finally {
                     1 == De && R(), De--;
                  }
               }
               get zone() {
                  return this._zone;
               }
               get state() {
                  return this._state;
               }
               cancelScheduleRequest() {
                  this._transitionTo(oe, me);
               }
               _transitionTo(T, d, i) {
                  if (this._state !== d && this._state !== i)
                     throw new Error(
                        `${this.type} '${this.source}': can not transition to '${T}', expecting state '${d}'${
                           i ? " or '" + i + "'" : ""
                        }, was '${this._state}'.`
                     );
                  (this._state = T), T == oe && (this._zoneDelegates = null);
               }
               toString() {
                  return this.data && typeof this.data.handleId < "u"
                     ? this.data.handleId.toString()
                     : Object.prototype.toString.call(this);
               }
               toJSON() {
                  return {
                     type: this.type,
                     state: this.state,
                     source: this.source,
                     zone: this.zone.name,
                     runCount: this.runCount,
                  };
               }
            }
            const Y = v("setTimeout"),
               W = v("Promise"),
               B = v("then");
            let Re,
               fe = [],
               re = !1;
            function he(J) {
               if ((Re || (o[W] && (Re = o[W].resolve(0))), Re)) {
                  let T = Re[B];
                  T || (T = Re.then), T.call(Re, J);
               } else o[Y](J, 0);
            }
            function F(J) {
               0 === De && 0 === fe.length && he(R), J && fe.push(J);
            }
            function R() {
               if (!re) {
                  for (re = !0; fe.length; ) {
                     const J = fe;
                     fe = [];
                     for (let T = 0; T < J.length; T++) {
                        const d = J[T];
                        try {
                           d.zone.runTask(d, null, null);
                        } catch (i) {
                           ke.onUnhandledError(i);
                        }
                     }
                  }
                  ke.microtaskDrainDone(), (re = !1);
               }
            }
            const Se = {
                  name: "NO ZONE",
               },
               oe = "notScheduled",
               me = "scheduling",
               Q = "scheduled",
               P = "running",
               ae = "canceling",
               k = "unknown",
               X = "microTask",
               q = "macroTask",
               Me = "eventTask",
               qe = {},
               ke = {
                  symbol: v,
                  currentZoneFrame: () => _e,
                  onUnhandledError: pe,
                  microtaskDrainDone: pe,
                  scheduleMicroTask: F,
                  showUncaughtError: () => !O[v("ignoreConsoleErrorUncaughtError")],
                  patchEventTarget: () => [],
                  patchOnProperties: pe,
                  patchMethod: () => pe,
                  bindArguments: () => [],
                  patchThen: () => pe,
                  patchMacroTask: () => pe,
                  patchEventPrototype: () => pe,
                  isIEOrEdge: () => !1,
                  getGlobalObjects: () => {},
                  ObjectDefineProperty: () => pe,
                  ObjectGetOwnPropertyDescriptor: () => {},
                  ObjectCreate: () => {},
                  ArraySlice: () => [],
                  patchClass: () => pe,
                  wrapWithCurrentZone: () => pe,
                  filterProperties: () => [],
                  attachOriginToPatched: () => pe,
                  _redefineProperty: () => pe,
                  patchCallbacks: () => pe,
                  nativeScheduleMicroTask: he,
               };
            let _e = {
                  parent: null,
                  zone: new O(null, null),
               },
               Fe = null,
               De = 0;
            function pe() {}
            a("Zone", "Zone"), (o.Zone = O);
         })((typeof window < "u" && window) || (typeof self < "u" && self) || global);
         const st = Object.getOwnPropertyDescriptor,
            Ct = Object.defineProperty,
            it = Object.getPrototypeOf,
            At = Object.create,
            ln = Array.prototype.slice,
            et = "addEventListener",
            U = "removeEventListener",
            yt = Zone.__symbol__(et),
            Ue = Zone.__symbol__(U),
            Pe = "true",
            xe = "false",
            Ze = Zone.__symbol__("");
         function Ie(o, c) {
            return Zone.current.wrap(o, c);
         }
         function We(o, c, l, a, h) {
            return Zone.current.scheduleMacroTask(o, c, l, a, h);
         }
         const ee = Zone.__symbol__,
            Be = typeof window < "u",
            vt = Be ? window : void 0,
            ye = (Be && vt) || ("object" == typeof self && self) || global,
            fn = "removeAttribute";
         function ct(o, c) {
            for (let l = o.length - 1; l >= 0; l--) "function" == typeof o[l] && (o[l] = Ie(o[l], c + "_" + l));
            return o;
         }
         function Zt(o) {
            return !o || (!1 !== o.writable && !("function" == typeof o.get && typeof o.set > "u"));
         }
         const It = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
            ut = !("nw" in ye) && typeof ye.process < "u" && "[object process]" === {}.toString.call(ye.process),
            mt = !ut && !It && !(!Be || !vt.HTMLElement),
            jt =
               typeof ye.process < "u" &&
               "[object process]" === {}.toString.call(ye.process) &&
               !It &&
               !(!Be || !vt.HTMLElement),
            _t = {},
            at = function (o) {
               if (!(o = o || ye.event)) return;
               let c = _t[o.type];
               c || (c = _t[o.type] = ee("ON_PROPERTY" + o.type));
               const l = this || o.target || ye,
                  a = l[c];
               let h;
               return (
                  mt && l === vt && "error" === o.type
                     ? ((h = a && a.call(this, o.message, o.filename, o.lineno, o.colno, o.error)),
                       !0 === h && o.preventDefault())
                     : ((h = a && a.apply(this, arguments)), null != h && !h && o.preventDefault()),
                  h
               );
            };
         function _(o, c, l) {
            let a = st(o, c);
            if (
               (!a &&
                  l &&
                  st(l, c) &&
                  (a = {
                     enumerable: !0,
                     configurable: !0,
                  }),
               !a || !a.configurable)
            )
               return;
            const h = ee("on" + c + "patched");
            if (o.hasOwnProperty(h) && o[h]) return;
            delete a.writable, delete a.value;
            const v = a.get,
               x = a.set,
               O = c.slice(2);
            let j = _t[O];
            j || (j = _t[O] = ee("ON_PROPERTY" + O)),
               (a.set = function (Z) {
                  let L = this;
                  !L && o === ye && (L = ye),
                     L &&
                        ("function" == typeof L[j] && L.removeEventListener(O, at),
                        x && x.call(L, null),
                        (L[j] = Z),
                        "function" == typeof Z && L.addEventListener(O, at, !1));
               }),
               (a.get = function () {
                  let Z = this;
                  if ((!Z && o === ye && (Z = ye), !Z)) return null;
                  const L = Z[j];
                  if (L) return L;
                  if (v) {
                     let Y = v.call(this);
                     if (Y) return a.set.call(this, Y), "function" == typeof Z[fn] && Z.removeAttribute(c), Y;
                  }
                  return null;
               }),
               Ct(o, c, a),
               (o[h] = !0);
         }
         function Jt(o, c, l) {
            if (c) for (let a = 0; a < c.length; a++) _(o, "on" + c[a], l);
            else {
               const a = [];
               for (const h in o) "on" == h.slice(0, 2) && a.push(h);
               for (let h = 0; h < a.length; h++) _(o, a[h], l);
            }
         }
         const ue = ee("originalInstance");
         function gt(o) {
            const c = ye[o];
            if (!c) return;
            (ye[ee(o)] = c),
               (ye[o] = function () {
                  const h = ct(arguments, o);
                  switch (h.length) {
                     case 0:
                        this[ue] = new c();
                        break;
                     case 1:
                        this[ue] = new c(h[0]);
                        break;
                     case 2:
                        this[ue] = new c(h[0], h[1]);
                        break;
                     case 3:
                        this[ue] = new c(h[0], h[1], h[2]);
                        break;
                     case 4:
                        this[ue] = new c(h[0], h[1], h[2], h[3]);
                        break;
                     default:
                        throw new Error("Arg list too long.");
                  }
               }),
               He(ye[o], c);
            const l = new c(function () {});
            let a;
            for (a in l)
               ("XMLHttpRequest" === o && "responseBlob" === a) ||
                  (function (h) {
                     "function" == typeof l[h]
                        ? (ye[o].prototype[h] = function () {
                             return this[ue][h].apply(this[ue], arguments);
                          })
                        : Ct(ye[o].prototype, h, {
                             set: function (v) {
                                "function" == typeof v
                                   ? ((this[ue][h] = Ie(v, o + "." + h)), He(this[ue][h], v))
                                   : (this[ue][h] = v);
                             },
                             get: function () {
                                return this[ue][h];
                             },
                          });
                  })(a);
            for (a in c) "prototype" !== a && c.hasOwnProperty(a) && (ye[o][a] = c[a]);
         }
         function ve(o, c, l) {
            let a = o;
            for (; a && !a.hasOwnProperty(c); ) a = it(a);
            !a && o[c] && (a = o);
            const h = ee(c);
            let v = null;
            if (a && (!(v = a[h]) || !a.hasOwnProperty(h)) && ((v = a[h] = a[c]), Zt(a && st(a, c)))) {
               const O = l(v, h, c);
               (a[c] = function () {
                  return O(this, arguments);
               }),
                  He(a[c], v);
            }
            return v;
         }
         function hn(o, c, l) {
            let a = null;
            function h(v) {
               const x = v.data;
               return (
                  (x.args[x.cbIdx] = function () {
                     v.invoke.apply(this, arguments);
                  }),
                  a.apply(x.target, x.args),
                  v
               );
            }
            a = ve(
               o,
               c,
               (v) =>
                  function (x, O) {
                     const j = l(x, O);
                     return j.cbIdx >= 0 && "function" == typeof O[j.cbIdx]
                        ? We(j.name, O[j.cbIdx], j, h)
                        : v.apply(x, O);
                  }
            );
         }
         function He(o, c) {
            o[ee("OriginalDelegate")] = c;
         }
         let lt = !1,
            Rt = !1;
         function dn() {
            if (lt) return Rt;
            lt = !0;
            try {
               const o = vt.navigator.userAgent;
               (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/") || -1 !== o.indexOf("Edge/")) && (Rt = !0);
            } catch {}
            return Rt;
         }
         Zone.__load_patch("ZoneAwarePromise", (o, c, l) => {
            const a = Object.getOwnPropertyDescriptor,
               h = Object.defineProperty,
               x = l.symbol,
               O = [],
               j = !0 === o[x("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],
               Z = x("Promise"),
               L = x("then"),
               Y = "__creationTrace__";
            (l.onUnhandledError = (p) => {
               if (l.showUncaughtError()) {
                  const m = p && p.rejection;
                  m
                     ? console.error(
                          "Unhandled Promise rejection:",
                          m instanceof Error ? m.message : m,
                          "; Zone:",
                          p.zone.name,
                          "; Task:",
                          p.task && p.task.source,
                          "; Value:",
                          m,
                          m instanceof Error ? m.stack : void 0
                       )
                     : console.error(p);
               }
            }),
               (l.microtaskDrainDone = () => {
                  for (; O.length; ) {
                     const p = O.shift();
                     try {
                        p.zone.runGuarded(() => {
                           throw p.throwOriginal ? p.rejection : p;
                        });
                     } catch (m) {
                        B(m);
                     }
                  }
               });
            const W = x("unhandledPromiseRejectionHandler");
            function B(p) {
               l.onUnhandledError(p);
               try {
                  const m = c[W];
                  "function" == typeof m && m.call(this, p);
               } catch {}
            }
            function fe(p) {
               return p && p.then;
            }
            function re(p) {
               return p;
            }
            function Re(p) {
               return d.reject(p);
            }
            const he = x("state"),
               F = x("value"),
               R = x("finally"),
               Se = x("parentPromiseValue"),
               oe = x("parentPromiseState"),
               me = "Promise.then",
               Q = null,
               P = !0,
               ae = !1,
               k = 0;
            function X(p, m) {
               return (f) => {
                  try {
                     ke(p, m, f);
                  } catch (g) {
                     ke(p, !1, g);
                  }
               };
            }
            const q = function () {
                  let p = !1;
                  return function (f) {
                     return function () {
                        p || ((p = !0), f.apply(null, arguments));
                     };
                  };
               },
               Me = "Promise resolved with itself",
               qe = x("currentTaskTrace");
            function ke(p, m, f) {
               const g = q();
               if (p === f) throw new TypeError(Me);
               if (p[he] === Q) {
                  let N = null;
                  try {
                     ("object" == typeof f || "function" == typeof f) && (N = f && f.then);
                  } catch (A) {
                     return (
                        g(() => {
                           ke(p, !1, A);
                        })(),
                        p
                     );
                  }
                  if (m !== ae && f instanceof d && f.hasOwnProperty(he) && f.hasOwnProperty(F) && f[he] !== Q)
                     Fe(f), ke(p, f[he], f[F]);
                  else if (m !== ae && "function" == typeof N)
                     try {
                        N.call(f, g(X(p, m)), g(X(p, !1)));
                     } catch (A) {
                        g(() => {
                           ke(p, !1, A);
                        })();
                     }
                  else {
                     p[he] = m;
                     const A = p[F];
                     if (
                        ((p[F] = f),
                        p[R] === R && m === P && ((p[he] = p[oe]), (p[F] = p[Se])),
                        m === ae && f instanceof Error)
                     ) {
                        const M = c.currentTask && c.currentTask.data && c.currentTask.data[Y];
                        M &&
                           h(f, qe, {
                              configurable: !0,
                              enumerable: !1,
                              writable: !0,
                              value: M,
                           });
                     }
                     for (let M = 0; M < A.length; ) De(p, A[M++], A[M++], A[M++], A[M++]);
                     if (0 == A.length && m == ae) {
                        p[he] = k;
                        let M = f;
                        try {
                           throw new Error(
                              "Uncaught (in promise): " +
                                 (function v(p) {
                                    return p && p.toString === Object.prototype.toString
                                       ? ((p.constructor && p.constructor.name) || "") + ": " + JSON.stringify(p)
                                       : p
                                       ? p.toString()
                                       : Object.prototype.toString.call(p);
                                 })(f) +
                                 (f && f.stack ? "\n" + f.stack : "")
                           );
                        } catch ($) {
                           M = $;
                        }
                        j && (M.throwOriginal = !0),
                           (M.rejection = f),
                           (M.promise = p),
                           (M.zone = c.current),
                           (M.task = c.currentTask),
                           O.push(M),
                           l.scheduleMicroTask();
                     }
                  }
               }
               return p;
            }
            const _e = x("rejectionHandledHandler");
            function Fe(p) {
               if (p[he] === k) {
                  try {
                     const m = c[_e];
                     m &&
                        "function" == typeof m &&
                        m.call(this, {
                           rejection: p[F],
                           promise: p,
                        });
                  } catch {}
                  p[he] = ae;
                  for (let m = 0; m < O.length; m++) p === O[m].promise && O.splice(m, 1);
               }
            }
            function De(p, m, f, g, N) {
               Fe(p);
               const A = p[he],
                  M = A ? ("function" == typeof g ? g : re) : "function" == typeof N ? N : Re;
               m.scheduleMicroTask(
                  me,
                  () => {
                     try {
                        const $ = p[F],
                           G = !!f && R === f[R];
                        G && ((f[Se] = $), (f[oe] = A));
                        const V = m.run(M, void 0, G && M !== Re && M !== re ? [] : [$]);
                        ke(f, !0, V);
                     } catch ($) {
                        ke(f, !1, $);
                     }
                  },
                  f
               );
            }
            const J = function () {},
               T = o.AggregateError;
            class d {
               static toString() {
                  return "function ZoneAwarePromise() { [native code] }";
               }
               static resolve(m) {
                  return ke(new this(null), P, m);
               }
               static reject(m) {
                  return ke(new this(null), ae, m);
               }
               static any(m) {
                  if (!m || "function" != typeof m[Symbol.iterator])
                     return Promise.reject(new T([], "All promises were rejected"));
                  const f = [];
                  let g = 0;
                  try {
                     for (let M of m) g++, f.push(d.resolve(M));
                  } catch {
                     return Promise.reject(new T([], "All promises were rejected"));
                  }
                  if (0 === g) return Promise.reject(new T([], "All promises were rejected"));
                  let N = !1;
                  const A = [];
                  return new d((M, $) => {
                     for (let G = 0; G < f.length; G++)
                        f[G].then(
                           (V) => {
                              N || ((N = !0), M(V));
                           },
                           (V) => {
                              A.push(V), g--, 0 === g && ((N = !0), $(new T(A, "All promises were rejected")));
                           }
                        );
                  });
               }
               static race(m) {
                  let f,
                     g,
                     N = new this(($, G) => {
                        (f = $), (g = G);
                     });
                  function A($) {
                     f($);
                  }
                  function M($) {
                     g($);
                  }
                  for (let $ of m) fe($) || ($ = this.resolve($)), $.then(A, M);
                  return N;
               }
               static all(m) {
                  return d.allWithCallback(m);
               }
               static allSettled(m) {
                  return (this && this.prototype instanceof d ? this : d).allWithCallback(m, {
                     thenCallback: (g) => ({
                        status: "fulfilled",
                        value: g,
                     }),
                     errorCallback: (g) => ({
                        status: "rejected",
                        reason: g,
                     }),
                  });
               }
               static allWithCallback(m, f) {
                  let g,
                     N,
                     A = new this((V, le) => {
                        (g = V), (N = le);
                     }),
                     M = 2,
                     $ = 0;
                  const G = [];
                  for (let V of m) {
                     fe(V) || (V = this.resolve(V));
                     const le = $;
                     try {
                        V.then(
                           (te) => {
                              (G[le] = f ? f.thenCallback(te) : te), M--, 0 === M && g(G);
                           },
                           (te) => {
                              f ? ((G[le] = f.errorCallback(te)), M--, 0 === M && g(G)) : N(te);
                           }
                        );
                     } catch (te) {
                        N(te);
                     }
                     M++, $++;
                  }
                  return (M -= 2), 0 === M && g(G), A;
               }
               constructor(m) {
                  const f = this;
                  if (!(f instanceof d)) throw new Error("Must be an instanceof Promise.");
                  (f[he] = Q), (f[F] = []);
                  try {
                     const g = q();
                     m && m(g(X(f, P)), g(X(f, ae)));
                  } catch (g) {
                     ke(f, !1, g);
                  }
               }
               get [Symbol.toStringTag]() {
                  return "Promise";
               }
               get [Symbol.species]() {
                  return d;
               }
               then(m, f) {
                  var g;
                  let N = null === (g = this.constructor) || void 0 === g ? void 0 : g[Symbol.species];
                  (!N || "function" != typeof N) && (N = this.constructor || d);
                  const A = new N(J),
                     M = c.current;
                  return this[he] == Q ? this[F].push(M, A, m, f) : De(this, M, A, m, f), A;
               }
               catch(m) {
                  return this.then(null, m);
               }
               finally(m) {
                  var f;
                  let g = null === (f = this.constructor) || void 0 === f ? void 0 : f[Symbol.species];
                  (!g || "function" != typeof g) && (g = d);
                  const N = new g(J);
                  N[R] = R;
                  const A = c.current;
                  return this[he] == Q ? this[F].push(A, N, m, m) : De(this, A, N, m, m), N;
               }
            }
            (d.resolve = d.resolve), (d.reject = d.reject), (d.race = d.race), (d.all = d.all);
            const i = (o[Z] = o.Promise);
            o.Promise = d;
            const S = x("thenPatched");
            function I(p) {
               const m = p.prototype,
                  f = a(m, "then");
               if (f && (!1 === f.writable || !f.configurable)) return;
               const g = m.then;
               (m[L] = g),
                  (p.prototype.then = function (N, A) {
                     return new d(($, G) => {
                        g.call(this, $, G);
                     }).then(N, A);
                  }),
                  (p[S] = !0);
            }
            return (
               (l.patchThen = I),
               i &&
                  (I(i),
                  ve(o, "fetch", (p) =>
                     (function K(p) {
                        return function (m, f) {
                           let g = p.apply(m, f);
                           if (g instanceof d) return g;
                           let N = g.constructor;
                           return N[S] || I(N), g;
                        };
                     })(p)
                  )),
               (Promise[c.__symbol__("uncaughtPromiseErrors")] = O),
               d
            );
         }),
            Zone.__load_patch("toString", (o) => {
               const c = Function.prototype.toString,
                  l = ee("OriginalDelegate"),
                  a = ee("Promise"),
                  h = ee("Error"),
                  v = function () {
                     if ("function" == typeof this) {
                        const Z = this[l];
                        if (Z) return "function" == typeof Z ? c.call(Z) : Object.prototype.toString.call(Z);
                        if (this === Promise) {
                           const L = o[a];
                           if (L) return c.call(L);
                        }
                        if (this === Error) {
                           const L = o[h];
                           if (L) return c.call(L);
                        }
                     }
                     return c.call(this);
                  };
               (v[l] = c), (Function.prototype.toString = v);
               const x = Object.prototype.toString;
               Object.prototype.toString = function () {
                  return "function" == typeof Promise && this instanceof Promise ? "[object Promise]" : x.call(this);
               };
            });
         let xt = !1;
         if (typeof window < "u")
            try {
               const o = Object.defineProperty({}, "passive", {
                  get: function () {
                     xt = !0;
                  },
               });
               window.addEventListener("test", o, o), window.removeEventListener("test", o, o);
            } catch {
               xt = !1;
            }
         const qt = {
               useG: !0,
            },
            je = {},
            pn = {},
            Oe = new RegExp("^" + Ze + "(\\w+)(true|false)$"),
            Kt = ee("propagationStopped");
         function Vt(o, c) {
            const l = (c ? c(o) : o) + xe,
               a = (c ? c(o) : o) + Pe,
               h = Ze + l,
               v = Ze + a;
            (je[o] = {}), (je[o][xe] = h), (je[o][Pe] = v);
         }
         function yn(o, c, l, a) {
            const h = (a && a.add) || et,
               v = (a && a.rm) || U,
               x = (a && a.listeners) || "eventListeners",
               O = (a && a.rmAll) || "removeAllListeners",
               j = ee(h),
               Z = "." + h + ":",
               L = "prependListener",
               Y = "." + L + ":",
               W = function (F, R, Se) {
                  if (F.isRemoved) return;
                  const oe = F.callback;
                  let me;
                  "object" == typeof oe &&
                     oe.handleEvent &&
                     ((F.callback = (P) => oe.handleEvent(P)), (F.originalDelegate = oe));
                  try {
                     F.invoke(F, R, [Se]);
                  } catch (P) {
                     me = P;
                  }
                  const Q = F.options;
                  return (
                     Q &&
                        "object" == typeof Q &&
                        Q.once &&
                        R[v].call(R, Se.type, F.originalDelegate ? F.originalDelegate : F.callback, Q),
                     me
                  );
               };
            function B(F, R, Se) {
               if (!(R = R || o.event)) return;
               const oe = F || R.target || o,
                  me = oe[je[R.type][Se ? Pe : xe]];
               if (me) {
                  const Q = [];
                  if (1 === me.length) {
                     const P = W(me[0], oe, R);
                     P && Q.push(P);
                  } else {
                     const P = me.slice();
                     for (let ae = 0; ae < P.length && (!R || !0 !== R[Kt]); ae++) {
                        const k = W(P[ae], oe, R);
                        k && Q.push(k);
                     }
                  }
                  if (1 === Q.length) throw Q[0];
                  for (let P = 0; P < Q.length; P++) {
                     const ae = Q[P];
                     c.nativeScheduleMicroTask(() => {
                        throw ae;
                     });
                  }
               }
            }
            const fe = function (F) {
                  return B(this, F, !1);
               },
               re = function (F) {
                  return B(this, F, !0);
               };
            function Re(F, R) {
               if (!F) return !1;
               let Se = !0;
               R && void 0 !== R.useG && (Se = R.useG);
               const oe = R && R.vh;
               let me = !0;
               R && void 0 !== R.chkDup && (me = R.chkDup);
               let Q = !1;
               R && void 0 !== R.rt && (Q = R.rt);
               let P = F;
               for (; P && !P.hasOwnProperty(h); ) P = it(P);
               if ((!P && F[h] && (P = F), !P || P[j])) return !1;
               const ae = R && R.eventNameToString,
                  k = {},
                  X = (P[j] = P[h]),
                  q = (P[ee(v)] = P[v]),
                  Me = (P[ee(x)] = P[x]),
                  qe = (P[ee(O)] = P[O]);
               let ke;
               R && R.prepend && (ke = P[ee(R.prepend)] = P[R.prepend]);
               const d = Se
                     ? function (f) {
                          if (!k.isExisting) return X.call(k.target, k.eventName, k.capture ? re : fe, k.options);
                       }
                     : function (f) {
                          return X.call(k.target, k.eventName, f.invoke, k.options);
                       },
                  i = Se
                     ? function (f) {
                          if (!f.isRemoved) {
                             const g = je[f.eventName];
                             let N;
                             g && (N = g[f.capture ? Pe : xe]);
                             const A = N && f.target[N];
                             if (A)
                                for (let M = 0; M < A.length; M++)
                                   if (A[M] === f) {
                                      A.splice(M, 1),
                                         (f.isRemoved = !0),
                                         0 === A.length && ((f.allRemoved = !0), (f.target[N] = null));
                                      break;
                                   }
                          }
                          if (f.allRemoved) return q.call(f.target, f.eventName, f.capture ? re : fe, f.options);
                       }
                     : function (f) {
                          return q.call(f.target, f.eventName, f.invoke, f.options);
                       },
                  I =
                     R && R.diff
                        ? R.diff
                        : function (f, g) {
                             const N = typeof g;
                             return (
                                ("function" === N && f.callback === g) || ("object" === N && f.originalDelegate === g)
                             );
                          },
                  K = Zone[ee("UNPATCHED_EVENTS")],
                  p = o[ee("PASSIVE_EVENTS")],
                  m = function (f, g, N, A, M = !1, $ = !1) {
                     return function () {
                        const G = this || o;
                        let V = arguments[0];
                        R && R.transferEventName && (V = R.transferEventName(V));
                        let le = arguments[1];
                        if (!le) return f.apply(this, arguments);
                        if (ut && "uncaughtException" === V) return f.apply(this, arguments);
                        let te = !1;
                        if ("function" != typeof le) {
                           if (!le.handleEvent) return f.apply(this, arguments);
                           te = !0;
                        }
                        if (oe && !oe(f, le, G, arguments)) return;
                        const ft = xt && !!p && -1 !== p.indexOf(V),
                           Xe = (function _e(f, g) {
                              return !xt && "object" == typeof f && f
                                 ? !!f.capture
                                 : xt && g
                                 ? "boolean" == typeof f
                                    ? {
                                         capture: f,
                                         passive: !0,
                                      }
                                    : f
                                    ? "object" == typeof f && !1 !== f.passive
                                       ? {
                                            ...f,
                                            passive: !0,
                                         }
                                       : f
                                    : {
                                         passive: !0,
                                      }
                                 : f;
                           })(arguments[2], ft);
                        if (K)
                           for (let Ye = 0; Ye < K.length; Ye++)
                              if (V === K[Ye]) return ft ? f.call(G, V, le, Xe) : f.apply(this, arguments);
                        const Wt = !!Xe && ("boolean" == typeof Xe || Xe.capture),
                           tn = !(!Xe || "object" != typeof Xe) && Xe.once,
                           Mn = Zone.current;
                        let nn = je[V];
                        nn || (Vt(V, ae), (nn = je[V]));
                        const bn = nn[Wt ? Pe : xe];
                        let Bt,
                           wt = G[bn],
                           Tn = !1;
                        if (wt) {
                           if (((Tn = !0), me)) for (let Ye = 0; Ye < wt.length; Ye++) if (I(wt[Ye], le)) return;
                        } else wt = G[bn] = [];
                        const Ht = G.constructor.name,
                           rn = pn[Ht];
                        rn && (Bt = rn[V]),
                           Bt || (Bt = Ht + g + (ae ? ae(V) : V)),
                           (k.options = Xe),
                           tn && (k.options.once = !1),
                           (k.target = G),
                           (k.capture = Wt),
                           (k.eventName = V),
                           (k.isExisting = Tn);
                        const kt = Se ? qt : void 0;
                        kt && (kt.taskData = k);
                        const rt = Mn.scheduleEventTask(Bt, le, kt, N, A);
                        return (
                           (k.target = null),
                           kt && (kt.taskData = null),
                           tn && (Xe.once = !0),
                           (!xt && "boolean" == typeof rt.options) || (rt.options = Xe),
                           (rt.target = G),
                           (rt.capture = Wt),
                           (rt.eventName = V),
                           te && (rt.originalDelegate = le),
                           $ ? wt.unshift(rt) : wt.push(rt),
                           M ? G : void 0
                        );
                     };
                  };
               return (
                  (P[h] = m(X, Z, d, i, Q)),
                  ke &&
                     (P[L] = m(
                        ke,
                        Y,
                        function (f) {
                           return ke.call(k.target, k.eventName, f.invoke, k.options);
                        },
                        i,
                        Q,
                        !0
                     )),
                  (P[v] = function () {
                     const f = this || o;
                     let g = arguments[0];
                     R && R.transferEventName && (g = R.transferEventName(g));
                     const N = arguments[2],
                        A = !!N && ("boolean" == typeof N || N.capture),
                        M = arguments[1];
                     if (!M) return q.apply(this, arguments);
                     if (oe && !oe(q, M, f, arguments)) return;
                     const $ = je[g];
                     let G;
                     $ && (G = $[A ? Pe : xe]);
                     const V = G && f[G];
                     if (V)
                        for (let le = 0; le < V.length; le++) {
                           const te = V[le];
                           if (I(te, M))
                              return (
                                 V.splice(le, 1),
                                 (te.isRemoved = !0),
                                 0 === V.length &&
                                    ((te.allRemoved = !0), (f[G] = null), "string" == typeof g) &&
                                    (f[Ze + "ON_PROPERTY" + g] = null),
                                 te.zone.cancelTask(te),
                                 Q ? f : void 0
                              );
                        }
                     return q.apply(this, arguments);
                  }),
                  (P[x] = function () {
                     const f = this || o;
                     let g = arguments[0];
                     R && R.transferEventName && (g = R.transferEventName(g));
                     const N = [],
                        A = tt(f, ae ? ae(g) : g);
                     for (let M = 0; M < A.length; M++) {
                        const $ = A[M];
                        N.push($.originalDelegate ? $.originalDelegate : $.callback);
                     }
                     return N;
                  }),
                  (P[O] = function () {
                     const f = this || o;
                     let g = arguments[0];
                     if (g) {
                        R && R.transferEventName && (g = R.transferEventName(g));
                        const N = je[g];
                        if (N) {
                           const $ = f[N[xe]],
                              G = f[N[Pe]];
                           if ($) {
                              const V = $.slice();
                              for (let le = 0; le < V.length; le++) {
                                 const te = V[le];
                                 this[v].call(
                                    this,
                                    g,
                                    te.originalDelegate ? te.originalDelegate : te.callback,
                                    te.options
                                 );
                              }
                           }
                           if (G) {
                              const V = G.slice();
                              for (let le = 0; le < V.length; le++) {
                                 const te = V[le];
                                 this[v].call(
                                    this,
                                    g,
                                    te.originalDelegate ? te.originalDelegate : te.callback,
                                    te.options
                                 );
                              }
                           }
                        }
                     } else {
                        const N = Object.keys(f);
                        for (let A = 0; A < N.length; A++) {
                           const $ = Oe.exec(N[A]);
                           let G = $ && $[1];
                           G && "removeListener" !== G && this[O].call(this, G);
                        }
                        this[O].call(this, "removeListener");
                     }
                     if (Q) return this;
                  }),
                  He(P[h], X),
                  He(P[v], q),
                  qe && He(P[O], qe),
                  Me && He(P[x], Me),
                  !0
               );
            }
            let he = [];
            for (let F = 0; F < l.length; F++) he[F] = Re(l[F], a);
            return he;
         }
         function tt(o, c) {
            if (!c) {
               const v = [];
               for (let x in o) {
                  const O = Oe.exec(x);
                  let j = O && O[1];
                  if (j && (!c || j === c)) {
                     const Z = o[x];
                     if (Z) for (let L = 0; L < Z.length; L++) v.push(Z[L]);
                  }
               }
               return v;
            }
            let l = je[c];
            l || (Vt(c), (l = je[c]));
            const a = o[l[xe]],
               h = o[l[Pe]];
            return a ? (h ? a.concat(h) : a.slice()) : h ? h.slice() : [];
         }
         function en(o, c) {
            const l = o.Event;
            l &&
               l.prototype &&
               c.patchMethod(
                  l.prototype,
                  "stopImmediatePropagation",
                  (a) =>
                     function (h, v) {
                        (h[Kt] = !0), a && a.apply(h, v);
                     }
               );
         }
         function Et(o, c, l, a, h) {
            const v = Zone.__symbol__(a);
            if (c[v]) return;
            const x = (c[v] = c[a]);
            (c[a] = function (O, j, Z) {
               return (
                  j &&
                     j.prototype &&
                     h.forEach(function (L) {
                        const Y = `${l}.${a}::` + L,
                           W = j.prototype;
                        try {
                           if (W.hasOwnProperty(L)) {
                              const B = o.ObjectGetOwnPropertyDescriptor(W, L);
                              B && B.value
                                 ? ((B.value = o.wrapWithCurrentZone(B.value, Y)),
                                   o._redefineProperty(j.prototype, L, B))
                                 : W[L] && (W[L] = o.wrapWithCurrentZone(W[L], Y));
                           } else W[L] && (W[L] = o.wrapWithCurrentZone(W[L], Y));
                        } catch {}
                     }),
                  x.call(c, O, j, Z)
               );
            }),
               o.attachOriginToPatched(c[a], x);
         }
         function vn(o, c, l) {
            if (!l || 0 === l.length) return c;
            const a = l.filter((v) => v.target === o);
            if (!a || 0 === a.length) return c;
            const h = a[0].ignoreProperties;
            return c.filter((v) => -1 === h.indexOf(v));
         }
         function nt(o, c, l, a) {
            o && Jt(o, vn(o, c, l), a);
         }
         function Ut(o) {
            return Object.getOwnPropertyNames(o)
               .filter((c) => c.startsWith("on") && c.length > 2)
               .map((c) => c.substring(2));
         }
         Zone.__load_patch("util", (o, c, l) => {
            const a = Ut(o);
            (l.patchOnProperties = Jt), (l.patchMethod = ve), (l.bindArguments = ct), (l.patchMacroTask = hn);
            const h = c.__symbol__("BLACK_LISTED_EVENTS"),
               v = c.__symbol__("UNPATCHED_EVENTS");
            o[v] && (o[h] = o[v]),
               o[h] && (c[h] = c[v] = o[h]),
               (l.patchEventPrototype = en),
               (l.patchEventTarget = yn),
               (l.isIEOrEdge = dn),
               (l.ObjectDefineProperty = Ct),
               (l.ObjectGetOwnPropertyDescriptor = st),
               (l.ObjectCreate = At),
               (l.ArraySlice = ln),
               (l.patchClass = gt),
               (l.wrapWithCurrentZone = Ie),
               (l.filterProperties = vn),
               (l.attachOriginToPatched = He),
               (l._redefineProperty = Object.defineProperty),
               (l.patchCallbacks = Et),
               (l.getGlobalObjects = () => ({
                  globalSources: pn,
                  zoneSymbolEventNames: je,
                  eventNames: a,
                  isBrowser: mt,
                  isMix: jt,
                  isNode: ut,
                  TRUE_STR: Pe,
                  FALSE_STR: xe,
                  ZONE_SYMBOL_PREFIX: Ze,
                  ADD_EVENT_LISTENER_STR: et,
                  REMOVE_EVENT_LISTENER_STR: U,
               }));
         });
         const bt = ee("zoneTask");
         function Tt(o, c, l, a) {
            let h = null,
               v = null;
            l += a;
            const x = {};
            function O(Z) {
               const L = Z.data;
               return (
                  (L.args[0] = function () {
                     return Z.invoke.apply(this, arguments);
                  }),
                  (L.handleId = h.apply(o, L.args)),
                  Z
               );
            }
            function j(Z) {
               return v.call(o, Z.data.handleId);
            }
            (h = ve(
               o,
               (c += a),
               (Z) =>
                  function (L, Y) {
                     if ("function" == typeof Y[0]) {
                        const W = {
                              isPeriodic: "Interval" === a,
                              delay: "Timeout" === a || "Interval" === a ? Y[1] || 0 : void 0,
                              args: Y,
                           },
                           B = Y[0];
                        Y[0] = function () {
                           try {
                              return B.apply(this, arguments);
                           } finally {
                              W.isPeriodic ||
                                 ("number" == typeof W.handleId
                                    ? delete x[W.handleId]
                                    : W.handleId && (W.handleId[bt] = null));
                           }
                        };
                        const fe = We(c, Y[0], W, O, j);
                        if (!fe) return fe;
                        const re = fe.data.handleId;
                        return (
                           "number" == typeof re ? (x[re] = fe) : re && (re[bt] = fe),
                           re &&
                              re.ref &&
                              re.unref &&
                              "function" == typeof re.ref &&
                              "function" == typeof re.unref &&
                              ((fe.ref = re.ref.bind(re)), (fe.unref = re.unref.bind(re))),
                           "number" == typeof re || re ? re : fe
                        );
                     }
                     return Z.apply(o, Y);
                  }
            )),
               (v = ve(
                  o,
                  l,
                  (Z) =>
                     function (L, Y) {
                        const W = Y[0];
                        let B;
                        "number" == typeof W ? (B = x[W]) : ((B = W && W[bt]), B || (B = W)),
                           B && "string" == typeof B.type
                              ? "notScheduled" !== B.state &&
                                ((B.cancelFn && B.data.isPeriodic) || 0 === B.runCount) &&
                                ("number" == typeof W ? delete x[W] : W && (W[bt] = null), B.zone.cancelTask(B))
                              : Z.apply(o, Y);
                     }
               ));
         }
         Zone.__load_patch("legacy", (o) => {
            const c = o[Zone.__symbol__("legacyPatch")];
            c && c();
         }),
            Zone.__load_patch("timers", (o) => {
               const c = "set",
                  l = "clear";
               Tt(o, c, l, "Timeout"), Tt(o, c, l, "Interval"), Tt(o, c, l, "Immediate");
            }),
            Zone.__load_patch("requestAnimationFrame", (o) => {
               Tt(o, "request", "cancel", "AnimationFrame"),
                  Tt(o, "mozRequest", "mozCancel", "AnimationFrame"),
                  Tt(o, "webkitRequest", "webkitCancel", "AnimationFrame");
            }),
            Zone.__load_patch("blocking", (o, c) => {
               const l = ["alert", "prompt", "confirm"];
               for (let a = 0; a < l.length; a++)
                  ve(
                     o,
                     l[a],
                     (v, x, O) =>
                        function (j, Z) {
                           return c.current.run(v, o, Z, O);
                        }
                  );
            }),
            Zone.__load_patch("EventTarget", (o, c, l) => {
               (function zt(o, c) {
                  c.patchEventPrototype(o, c);
               })(o, l),
                  (function En(o, c) {
                     if (Zone[c.symbol("patchEventTarget")]) return;
                     const {
                        eventNames: l,
                        zoneSymbolEventNames: a,
                        TRUE_STR: h,
                        FALSE_STR: v,
                        ZONE_SYMBOL_PREFIX: x,
                     } = c.getGlobalObjects();
                     for (let j = 0; j < l.length; j++) {
                        const Z = l[j],
                           W = x + (Z + v),
                           B = x + (Z + h);
                        (a[Z] = {}), (a[Z][v] = W), (a[Z][h] = B);
                     }
                     const O = o.EventTarget;
                     O && O.prototype && c.patchEventTarget(o, c, [O && O.prototype]);
                  })(o, l);
               const a = o.XMLHttpRequestEventTarget;
               a && a.prototype && l.patchEventTarget(o, l, [a.prototype]);
            }),
            Zone.__load_patch("MutationObserver", (o, c, l) => {
               gt("MutationObserver"), gt("WebKitMutationObserver");
            }),
            Zone.__load_patch("IntersectionObserver", (o, c, l) => {
               gt("IntersectionObserver");
            }),
            Zone.__load_patch("FileReader", (o, c, l) => {
               gt("FileReader");
            }),
            Zone.__load_patch("on_property", (o, c, l) => {
               !(function mn(o, c) {
                  if ((ut && !jt) || Zone[o.symbol("patchEvents")]) return;
                  const l = c.__Zone_ignore_on_properties;
                  let a = [];
                  if (mt) {
                     const h = window;
                     a = a.concat([
                        "Document",
                        "SVGElement",
                        "Element",
                        "HTMLElement",
                        "HTMLBodyElement",
                        "HTMLMediaElement",
                        "HTMLFrameSetElement",
                        "HTMLFrameElement",
                        "HTMLIFrameElement",
                        "HTMLMarqueeElement",
                        "Worker",
                     ]);
                     const v = (function Pt() {
                        try {
                           const o = vt.navigator.userAgent;
                           if (-1 !== o.indexOf("MSIE ") || -1 !== o.indexOf("Trident/")) return !0;
                        } catch {}
                        return !1;
                     })()
                        ? [
                             {
                                target: h,
                                ignoreProperties: ["error"],
                             },
                          ]
                        : [];
                     nt(h, Ut(h), l && l.concat(v), it(h));
                  }
                  a = a.concat([
                     "XMLHttpRequest",
                     "XMLHttpRequestEventTarget",
                     "IDBIndex",
                     "IDBRequest",
                     "IDBOpenDBRequest",
                     "IDBDatabase",
                     "IDBTransaction",
                     "IDBCursor",
                     "WebSocket",
                  ]);
                  for (let h = 0; h < a.length; h++) {
                     const v = c[a[h]];
                     v && v.prototype && nt(v.prototype, Ut(v.prototype), l);
                  }
               })(l, o);
            }),
            Zone.__load_patch("customElements", (o, c, l) => {
               !(function gn(o, c) {
                  const { isBrowser: l, isMix: a } = c.getGlobalObjects();
                  (l || a) &&
                     o.customElements &&
                     "customElements" in o &&
                     c.patchCallbacks(c, o.customElements, "customElements", "define", [
                        "connectedCallback",
                        "disconnectedCallback",
                        "adoptedCallback",
                        "attributeChangedCallback",
                     ]);
               })(o, l);
            }),
            Zone.__load_patch("XHR", (o, c) => {
               !(function j(Z) {
                  const L = Z.XMLHttpRequest;
                  if (!L) return;
                  const Y = L.prototype;
                  let B = Y[yt],
                     fe = Y[Ue];
                  if (!B) {
                     const k = Z.XMLHttpRequestEventTarget;
                     if (k) {
                        const X = k.prototype;
                        (B = X[yt]), (fe = X[Ue]);
                     }
                  }
                  const re = "readystatechange",
                     Re = "scheduled";
                  function he(k) {
                     const X = k.data,
                        q = X.target;
                     (q[v] = !1), (q[O] = !1);
                     const Me = q[h];
                     B || ((B = q[yt]), (fe = q[Ue])), Me && fe.call(q, re, Me);
                     const qe = (q[h] = () => {
                        if (q.readyState === q.DONE)
                           if (!X.aborted && q[v] && k.state === Re) {
                              const _e = q[c.__symbol__("loadfalse")];
                              if (0 !== q.status && _e && _e.length > 0) {
                                 const Fe = k.invoke;
                                 (k.invoke = function () {
                                    const De = q[c.__symbol__("loadfalse")];
                                    for (let pe = 0; pe < De.length; pe++) De[pe] === k && De.splice(pe, 1);
                                    !X.aborted && k.state === Re && Fe.call(k);
                                 }),
                                    _e.push(k);
                              } else k.invoke();
                           } else !X.aborted && !1 === q[v] && (q[O] = !0);
                     });
                     return B.call(q, re, qe), q[l] || (q[l] = k), P.apply(q, X.args), (q[v] = !0), k;
                  }
                  function F() {}
                  function R(k) {
                     const X = k.data;
                     return (X.aborted = !0), ae.apply(X.target, X.args);
                  }
                  const Se = ve(
                        Y,
                        "open",
                        () =>
                           function (k, X) {
                              return (k[a] = 0 == X[2]), (k[x] = X[1]), Se.apply(k, X);
                           }
                     ),
                     me = ee("fetchTaskAborting"),
                     Q = ee("fetchTaskScheduling"),
                     P = ve(
                        Y,
                        "send",
                        () =>
                           function (k, X) {
                              if (!0 === c.current[Q] || k[a]) return P.apply(k, X);
                              {
                                 const q = {
                                       target: k,
                                       url: k[x],
                                       isPeriodic: !1,
                                       args: X,
                                       aborted: !1,
                                    },
                                    Me = We("XMLHttpRequest.send", F, q, he, R);
                                 k && !0 === k[O] && !q.aborted && Me.state === Re && Me.invoke();
                              }
                           }
                     ),
                     ae = ve(
                        Y,
                        "abort",
                        () =>
                           function (k, X) {
                              const q = (function W(k) {
                                 return k[l];
                              })(k);
                              if (q && "string" == typeof q.type) {
                                 if (null == q.cancelFn || (q.data && q.data.aborted)) return;
                                 q.zone.cancelTask(q);
                              } else if (!0 === c.current[me]) return ae.apply(k, X);
                           }
                     );
               })(o);
               const l = ee("xhrTask"),
                  a = ee("xhrSync"),
                  h = ee("xhrListener"),
                  v = ee("xhrScheduled"),
                  x = ee("xhrURL"),
                  O = ee("xhrErrorBeforeScheduled");
            }),
            Zone.__load_patch("geolocation", (o) => {
               o.navigator &&
                  o.navigator.geolocation &&
                  (function Ot(o, c) {
                     const l = o.constructor.name;
                     for (let a = 0; a < c.length; a++) {
                        const h = c[a],
                           v = o[h];
                        if (v) {
                           if (!Zt(st(o, h))) continue;
                           o[h] = ((O) => {
                              const j = function () {
                                 return O.apply(this, ct(arguments, l + "." + h));
                              };
                              return He(j, O), j;
                           })(v);
                        }
                     }
                  })(o.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
            }),
            Zone.__load_patch("PromiseRejectionEvent", (o, c) => {
               function l(a) {
                  return function (h) {
                     tt(o, a).forEach((x) => {
                        const O = o.PromiseRejectionEvent;
                        if (O) {
                           const j = new O(a, {
                              promise: h.promise,
                              reason: h.rejection,
                           });
                           x.invoke(j);
                        }
                     });
                  };
               }
               o.PromiseRejectionEvent &&
                  ((c[ee("unhandledPromiseRejectionHandler")] = l("unhandledrejection")),
                  (c[ee("rejectionHandledHandler")] = l("rejectionhandled")));
            }),
            Zone.__load_patch("queueMicrotask", (o, c, l) => {
               !(function _n(o, c) {
                  c.patchMethod(
                     o,
                     "queueMicrotask",
                     (l) =>
                        function (a, h) {
                           Zone.current.scheduleMicroTask("queueMicrotask", h[0]);
                        }
                  );
               })(o, l);
            });
      },
      5861: (st, Ct, it) => {
         "use strict";
         function At(et, U, yt, Ue, Pe, xe, Ze) {
            try {
               var Ie = et[xe](Ze),
                  We = Ie.value;
            } catch (ee) {
               return void yt(ee);
            }
            Ie.done ? U(We) : Promise.resolve(We).then(Ue, Pe);
         }
         function ln(et) {
            return function () {
               var U = this,
                  yt = arguments;
               return new Promise(function (Ue, Pe) {
                  var xe = et.apply(U, yt);
                  function Ze(We) {
                     At(xe, Ue, Pe, Ze, Ie, "next", We);
                  }
                  function Ie(We) {
                     At(xe, Ue, Pe, Ze, Ie, "throw", We);
                  }
                  Ze(void 0);
               });
            };
         }
         it.d(Ct, {
            Z: () => ln,
         });
      },
   },
   (st) => {
      st((st.s = 1927));
   },
]);
