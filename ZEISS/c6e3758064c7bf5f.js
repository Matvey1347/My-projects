(() => {
   "use strict";
   var e,
      b = {},
      p = {};
   function o(e) {
      var i = p[e];
      if (void 0 !== i) return i.exports;
      var _ = (p[e] = {
         id: e,
         loaded: !1,
         exports: {},
      });
      return b[e].call(_.exports, _, _.exports, o), (_.loaded = !0), _.exports;
   }
   (o.m = b),
      (o.amdO = {}),
      (e = []),
      (o.O = (i, _, t, d) => {
         if (!_) {
            var n = 1 / 0;
            for (s = 0; s < e.length; s++) {
               for (var [_, t, d] = e[s], f = !0, r = 0; r < _.length; r++)
                  (!1 & d || n >= d) && Object.keys(o.O).every((u) => o.O[u](_[r]))
                     ? _.splice(r--, 1)
                     : ((f = !1), d < n && (n = d));
               if (f) {
                  e.splice(s--, 1);
                  var a = t();
                  void 0 !== a && (i = a);
               }
            }
            return i;
         }
         d = d || 0;
         for (var s = e.length; s > 0 && e[s - 1][2] > d; s--) e[s] = e[s - 1];
         e[s] = [_, t, d];
      }),
      (o.n = (e) => {
         var i = e && e.__esModule ? () => e.default : () => e;
         return (
            o.d(i, {
               a: i,
            }),
            i
         );
      }),
      (() => {
         var i,
            e = Object.getPrototypeOf ? (_) => Object.getPrototypeOf(_) : (_) => _.__proto__;
         o.t = function (_, t) {
            if (
               (1 & t && (_ = this(_)),
               8 & t ||
                  ("object" == typeof _ && _ && ((4 & t && _.__esModule) || (16 & t && "function" == typeof _.then))))
            )
               return _;
            var d = Object.create(null);
            o.r(d);
            var s = {};
            i = i || [null, e({}), e([]), e(e)];
            for (var n = 2 & t && _; "object" == typeof n && !~i.indexOf(n); n = e(n))
               Object.getOwnPropertyNames(n).forEach((f) => (s[f] = () => _[f]));
            return (s.default = () => _), o.d(d, s), d;
         };
      })(),
      (o.d = (e, i) => {
         for (var _ in i)
            o.o(i, _) &&
               !o.o(e, _) &&
               Object.defineProperty(e, _, {
                  enumerable: !0,
                  get: i[_],
               });
      }),
      (o.f = {}),
      (o.e = (e) => Promise.all(Object.keys(o.f).reduce((i, _) => (o.f[_](e, i), i), []))),
      (o.u = (e) =>
         ({
            "node_modules_lottie-web_build_player_lottie_js": "aa390df505c56eac",
            common: "a3fccd06665eae49",
            "node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js": "9bccf754b5fc4678",
            "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js": "03dd1112a39d4365",
            "node_modules_ionic_core_dist_esm_ion-alert_entry_js": "9280efca60d19196",
            "node_modules_ionic_core_dist_esm_ion-app_8_entry_js": "f002a7f5392c3c10",
            "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js": "6db4383cd822e190",
            "node_modules_ionic_core_dist_esm_ion-back-button_entry_js": "9a6b970191adc6be",
            "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js": "b6782568315f096f",
            "node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js": "9ff654071b100d6d",
            "node_modules_ionic_core_dist_esm_ion-button_2_entry_js": "990884c6d3ca7f89",
            "node_modules_ionic_core_dist_esm_ion-card_5_entry_js": "4e0a574719e331f0",
            "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js": "43a82f18a4b15db5",
            "node_modules_ionic_core_dist_esm_ion-chip_entry_js": "78c6158482860d07",
            "node_modules_ionic_core_dist_esm_ion-col_3_entry_js": "790965b19742626c",
            "default-node_modules_ionic_core_dist_esm_data-775093f5_js-node_modules_ionic_core_dist_esm_th-7c84dd":
               "e260e1f562084fbf",
            "node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js": "b2ecccdb2bd048d9",
            "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js": "0a93f3b6669ed4ef",
            "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js": "cb78a72e3f5ecd23",
            "node_modules_ionic_core_dist_esm_ion-img_entry_js": "553688f49e2446d4",
            "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js": "1f236d5dde89bee7",
            "node_modules_ionic_core_dist_esm_ion-input_entry_js": "d6fb66171b006329",
            "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js": "919c26ad0f8c3db6",
            "node_modules_ionic_core_dist_esm_ion-item_8_entry_js": "1fdd4f801a7e9574",
            "node_modules_ionic_core_dist_esm_ion-loading_entry_js": "c19b1ef6822c7090",
            "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js": "45e3f51f5e440094",
            "node_modules_ionic_core_dist_esm_ion-modal_entry_js": "7bea554a67726495",
            "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js": "cb9fcfc1703838d0",
            "node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js": "9977458b5d0ff1b8",
            "node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js": "1f366c25e00bc42e",
            "node_modules_ionic_core_dist_esm_ion-popover_entry_js": "1a943ea9e4ba5ca1",
            "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js": "ad456ac4022ca60f",
            "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js": "540082de615830cc",
            "node_modules_ionic_core_dist_esm_ion-range_entry_js": "7cc5e55f506f2354",
            "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js": "d52dc2b0ad54ea0d",
            "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js": "42c7ec7420ff6da2",
            "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js": "062cdc816245c05f",
            "node_modules_ionic_core_dist_esm_ion-route_4_entry_js": "6924924343416e5c",
            "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js": "cd23ded81cdceae6",
            "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js": "14abeb2f87fb5f5e",
            "node_modules_ionic_core_dist_esm_ion-select_3_entry_js": "aa2c7171bca3f4b4",
            "node_modules_ionic_core_dist_esm_ion-spinner_entry_js": "78e0df5f4b93b99e",
            "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js": "d5051057688940c4",
            "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js": "adda13aefefc891c",
            "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js": "2a4a02f7b678c13f",
            "node_modules_ionic_core_dist_esm_ion-text_entry_js": "1ca0ca201b4d2838",
            "node_modules_ionic_core_dist_esm_ion-textarea_entry_js": "339b1e109a03d37e",
            "node_modules_ionic_core_dist_esm_ion-toast_entry_js": "fb5ad92045739762",
            "node_modules_ionic_core_dist_esm_ion-toggle_entry_js": "f570b7935cba3344",
            "polyfills-dom": "8a400898f96651ce",
            "polyfills-core-js": "8918775838f5bf59",
            "default-node_modules_ionic_core_components_animation_js": "021088a6e9ab7a51",
            node_modules_ionic_core_components_ios_transition_js: "1269c333405737b5",
            node_modules_ionic_core_components_md_transition_js: "495187a9b0a133ef",
            "src_app_acuity-test_acuity-check_acuity-check_module_ts": "196105cf54ae08de",
            src_app_portal_portal_module_ts: "8303f418aec5874b",
            "src_app_mega-test_mega-test_module_ts": "56cedf780b0eab12",
            "src_app_store-locator_store-locator_module_ts": "670cfc30859767ed",
            "node_modules_ionic_core_dist_esm_index-82eeb47f_js": "b6a9b65a0ca35d8f",
            "node_modules_ionic_core_dist_esm_status-tap-16fd8f3d_js": "350f4f828dc2a1a9",
            "node_modules_ionic_core_dist_esm_input-shims-6539ce13_js": "4b486216e7ea6a01",
         }[e] + ".js")),
      (o.miniCssF = (e) => {}),
      (o.o = (e, i) => Object.prototype.hasOwnProperty.call(e, i)),
      (() => {
         var e = {},
            i = "online-vision-screening:";
         o.l = (_, t, d, s) => {
            if (e[_]) e[_].push(t);
            else {
               var n, f;
               if (void 0 !== d)
                  for (var r = document.getElementsByTagName("script"), a = 0; a < r.length; a++) {
                     var c = r[a];
                     if (c.getAttribute("src") == _ || c.getAttribute("data-webpack") == i + d) {
                        n = c;
                        break;
                     }
                  }
               n ||
                  ((f = !0),
                  ((n = document.createElement("script")).type = "module"),
                  (n.charset = "utf-8"),
                  (n.timeout = 120),
                  o.nc && n.setAttribute("nonce", o.nc),
                  n.setAttribute("data-webpack", i + d),
                  (n.src = o.tu(_))),
                  (e[_] = [t]);
               var m = (y, u) => {
                     (n.onerror = n.onload = null), clearTimeout(l);
                     var j = e[_];
                     if ((delete e[_], n.parentNode && n.parentNode.removeChild(n), j && j.forEach((g) => g(u)), y))
                        return y(u);
                  },
                  l = setTimeout(
                     m.bind(null, void 0, {
                        type: "timeout",
                        target: n,
                     }),
                     12e4
                  );
               (n.onerror = m.bind(null, n.onerror)),
                  (n.onload = m.bind(null, n.onload)),
                  f && document.head.appendChild(n);
            }
         };
      })(),
      (o.r = (e) => {
         typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, {
               value: "Module",
            }),
            Object.defineProperty(e, "__esModule", {
               value: !0,
            });
      }),
      (o.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
      (() => {
         var e;
         o.tt = () => (
            void 0 === e &&
               ((e = {
                  createScriptURL: (i) => i,
               }),
               typeof trustedTypes < "u" &&
                  trustedTypes.createPolicy &&
                  (e = trustedTypes.createPolicy("angular#bundler", e))),
            e
         );
      })(),
      (o.tu = (e) => o.tt().createScriptURL(e)),
      (o.p = ""),
      (() => {
         var e = {
            runtime: 0,
         };
         (o.f.j = (t, d) => {
            var s = o.o(e, t) ? e[t] : void 0;
            if (0 !== s)
               if (s) d.push(s[2]);
               else if ("runtime" != t) {
                  var n = new Promise((c, m) => (s = e[t] = [c, m]));
                  d.push((s[2] = n));
                  var f = o.p + o.u(t),
                     r = new Error();
                  o.l(
                     f,
                     (c) => {
                        if (o.o(e, t) && (0 !== (s = e[t]) && (e[t] = void 0), s)) {
                           var m = c && ("load" === c.type ? "missing" : c.type),
                              l = c && c.target && c.target.src;
                           (r.message = "Loading chunk " + t + " failed.\n(" + m + ": " + l + ")"),
                              (r.name = "ChunkLoadError"),
                              (r.type = m),
                              (r.request = l),
                              s[1](r);
                        }
                     },
                     "chunk-" + t,
                     t
                  );
               } else e[t] = 0;
         }),
            (o.O.j = (t) => 0 === e[t]);
         var i = (t, d) => {
               var r,
                  a,
                  [s, n, f] = d,
                  c = 0;
               if (s.some((l) => 0 !== e[l])) {
                  for (r in n) o.o(n, r) && (o.m[r] = n[r]);
                  if (f) var m = f(o);
               }
               for (t && t(d); c < s.length; c++) o.o(e, (a = s[c])) && e[a] && e[a][0](), (e[a] = 0);
               return o.O(m);
            },
            _ = (self.webpackChunkonline_vision_screening = self.webpackChunkonline_vision_screening || []);
         _.forEach(i.bind(null, 0)), (_.push = i.bind(null, _.push.bind(_)));
      })();
})();
