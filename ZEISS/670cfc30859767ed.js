"use strict";
(self.webpackChunkonline_vision_screening = self.webpackChunkonline_vision_screening || []).push([
   ["src_app_store-locator_store-locator_module_ts"],
   {
      2641: (b, i, o) => {
         o.r(i),
            o.d(i, {
               StoreLocatorModule: () => M,
            });
         var c = o(6814),
            p = o(6560),
            f = o(7850),
            h = o(2096),
            m = o(4664),
            u = o(553),
            x = o(3576),
            d = o(1345),
            s = o(3876),
            r = o(5879),
            v = o(676),
            y = o(7229),
            C = o(5330);
         const S = [
            {
               path: "",
               component: (() => {
                  var t;
                  class a {
                     constructor(e, n, g) {
                        (this.location = e),
                           (this.store = n),
                           (this.locatorService = g),
                           (this.headerConfig = {
                              label: s.cr.StoreLocator,
                              left: s.EO.Back,
                              right: s.EO.Empty,
                              theme: s.dW.LightMode,
                           });
                     }
                     ngOnInit() {
                        this.loadStoreLocatorFromJS$().subscribe(), (this.isWebcomponent = u.N.webcomponent);
                     }
                     loadStoreLocatorFromJS$() {
                        return (0, h.of)(null).pipe(
                           (0, m.w)(() =>
                              this.locatorService.loadScript$("https://lf.o-c.io/static/js-plugin/store-locator.js")
                           ),
                           (0, m.w)(() => this.locatorService.loadScript$("./assets/scripts/store-locator.js"))
                        );
                     }
                     goToPreviousScreen() {
                        this.store
                           .select(d.f.UC)
                           .subscribe((e) => {
                              (null == e ? void 0 : e.indexOf("check/result")) > -1
                                 ? this.location.back()
                                 : this.goToHomePage();
                           })
                           .unsubscribe();
                     }
                     goToHomePage() {
                        this.store.dispatch((0, x.OpenHomePageAction)());
                     }
                  }
                  return (
                     ((t = a).ɵfac = function (e) {
                        return new (e || t)(r.Y36(c.Ye), r.Y36(v.yh), r.Y36(y.u));
                     }),
                     (t.ɵcmp = r.Xpm({
                        type: t,
                        selectors: [["zat-locator-page"]],
                        decls: 2,
                        vars: 4,
                        consts: [
                           [3, "label", "left", "right", "theme", "clickLeft"],
                           ["id", "oc-store-locator", 1, "store-locator"],
                        ],
                        template: function (e, n) {
                           1 & e &&
                              (r.TgZ(0, "zat-ovs-header", 0),
                              r.NdJ("clickLeft", function () {
                                 return n.goToPreviousScreen();
                              }),
                              r.qZA(),
                              r._UZ(1, "div", 1)),
                              2 & e &&
                                 r.Q6J("label", n.headerConfig.label)("left", n.headerConfig.left)(
                                    "right",
                                    n.headerConfig.right
                                 )("theme", n.headerConfig.theme);
                        },
                        dependencies: [C.P],
                        styles: [
                           "[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.store-locator[_ngcontent-%COMP%]{width:100%}",
                        ],
                     })),
                     a
                  );
               })(),
            },
         ];
         let L = (() => {
            var t;
            class a {}
            return (
               ((t = a).ɵfac = function (e) {
                  return new (e || t)();
               }),
               (t.ɵmod = r.oAB({
                  type: t,
               })),
               (t.ɵinj = r.cJS({
                  imports: [f.Bz.forChild(S), f.Bz],
               })),
               a
            );
         })();
         var P = o(2337);
         let M = (() => {
            var t;
            class a {}
            return (
               ((t = a).ɵfac = function (e) {
                  return new (e || t)();
               }),
               (t.ɵmod = r.oAB({
                  type: t,
               })),
               (t.ɵinj = r.cJS({
                  imports: [c.ez, L, P.o, p.y4],
               })),
               a
            );
         })();
      },
   },
]);
