"use strict";
(self.webpackChunkonline_vision_screening = self.webpackChunkonline_vision_screening || []).push([
   ["src_app_portal_portal_module_ts"],
   {
      3001: (Lt, S, r) => {
         r.r(S),
            r.d(S, {
               PortalModule: () => kt,
               playerFactory: () => D,
            });
         var d = r(6814),
            g = r(6560),
            I = r(9777),
            v = r(8862),
            y = r(7850),
            m = r(3576),
            s = r(3876),
            t = r(5879),
            h = r(676),
            J = r(7582),
            w = r(1791),
            q = r(5619),
            E = r(9397),
            l = r(7088),
            Z = r(3005),
            Y = r(8965),
            $ = r(9221),
            G = r(7360),
            H = r(5905),
            R = r(7457),
            c = r(9271),
            f = r(9649),
            u = r(6301),
            k = r(4704),
            P = r(8514),
            T = r(758);
         function j(n, i) {
            if ((1 & n && (t.TgZ(0, "div")(1, "div"), t._UZ(2, "app-icon", 10), t.qZA()()), 2 & n)) {
               const e = t.oxw(2);
               t.xp6(2), t.Q6J("width", e.dimension)("height", e.dimension);
            }
         }
         function K(n, i) {
            if ((1 & n && (t.TgZ(0, "div")(1, "div", 11), t._UZ(2, "app-icon", 12), t.qZA()()), 2 & n)) {
               const e = t.oxw(2);
               t.xp6(2), t.Q6J("width", e.dimension)("height", e.dimension);
            }
         }
         function B(n, i) {
            if ((1 & n && (t.TgZ(0, "div")(1, "div", 11), t._UZ(2, "app-icon", 13), t.qZA()()), 2 & n)) {
               const e = t.oxw(2);
               t.xp6(2), t.Q6J("width", e.dimension)("height", e.dimension);
            }
         }
         function V(n, i) {
            if ((1 & n && (t.TgZ(0, "div")(1, "div"), t._UZ(2, "app-icon", 14), t.qZA()()), 2 & n)) {
               const e = t.oxw(2);
               t.xp6(2), t.Q6J("width", e.dimension)("height", e.dimension);
            }
         }
         function W(n, i) {
            if ((1 & n && (t.TgZ(0, "div")(1, "div"), t._UZ(2, "app-icon", 15), t.qZA()()), 2 & n)) {
               const e = t.oxw(2);
               t.xp6(2), t.Q6J("width", e.dimension)("height", e.dimension);
            }
         }
         function X(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3),
                  t.YNc(3, j, 3, 2, "div", 4),
                  t.YNc(4, K, 3, 2, "div", 4),
                  t.YNc(5, B, 3, 2, "div", 4),
                  t.YNc(6, V, 3, 2, "div", 4),
                  t.YNc(7, W, 3, 2, "div", 4),
                  t.qZA()(),
                  t.TgZ(8, "span", 5),
                  t._uU(9),
                  t.qZA(),
                  t.TgZ(10, "div", 6),
                  t._uU(11),
                  t.qZA(),
                  t.TgZ(12, "div", 7)(13, "a", 8),
                  t.NdJ("click", function () {
                     t.CHM(e);
                     const a = t.oxw();
                     return t.KtG(a.detail());
                  })("keyup", function (a) {
                     t.CHM(e);
                     const p = t.oxw();
                     return t.KtG(p.checkTheKey(a));
                  }),
                  t._uU(14),
                  t.qZA(),
                  t.TgZ(15, "zat-action-button", 9),
                  t.NdJ("click", function () {
                     t.CHM(e);
                     const a = t.oxw();
                     return t.KtG(a.startSingleTest());
                  }),
                  t._uU(16),
                  t.qZA()()();
            }
            if (2 & n) {
               const e = i.$implicit,
                  o = t.oxw();
               t.xp6(2),
                  t.Q6J("ngSwitch", o.test),
                  t.xp6(1),
                  t.Q6J("ngSwitchCase", o.TEST_TYPES.ACUITY),
                  t.xp6(1),
                  t.Q6J("ngSwitchCase", o.TEST_TYPES.CONTRAST),
                  t.xp6(1),
                  t.Q6J("ngSwitchCase", o.TEST_TYPES.ASTIGMATISM),
                  t.xp6(1),
                  t.Q6J("ngSwitchCase", o.TEST_TYPES.COLOR),
                  t.xp6(1),
                  t.Q6J("ngSwitchCase", o.TEST_TYPES.AMSLER),
                  t.xp6(2),
                  t.hij(" ", e(o.mapTestString(o.test) + "Test.startPage.detailsTitle"), " "),
                  t.xp6(2),
                  t.hij(" ", e(o.mapTestString(o.test) + "Test.startPage.detailsText"), " "),
                  t.xp6(2),
                  t.Q6J("tabIndex", 0),
                  t.uIk("data-testid", "test-card-detail-" + o.test)(
                     "aria-label",
                     e(o.testCode + ".result.testName") + " " + e("button.details")
                  ),
                  t.xp6(1),
                  t.hij(" ", e("button.details"), " "),
                  t.xp6(1),
                  t.uIk("data-testid", "test-card-start-" + o.test),
                  t.xp6(1),
                  t.hij(" ", e(o.mapTestString(o.test) + "Test.startPage.startCheck"), " ");
            }
         }
         let tt = (() => {
            var n;
            class i {
               constructor(o, a, p) {
                  (this.store = o),
                     (this.generalService = a),
                     (this.analytics = p),
                     (this.TEST_TYPES = l.P),
                     (this.testCode = ""),
                     (this.dimension = 80);
               }
               ngOnInit() {
                  switch (this.test) {
                     case l.P.ACUITY:
                        this.testCode = "acuityTest";
                        break;
                     case l.P.CONTRAST:
                        this.testCode = "contrastTest";
                        break;
                     case l.P.COLOR:
                        this.testCode = "colorTest";
                        break;
                     case l.P.ASTIGMATISM:
                        this.testCode = "astigmatismTest";
                        break;
                     case l.P.AMSLER:
                        this.testCode = "amslerTest";
                  }
               }
               ngOnDestroy() {}
               checkTheKey(o) {
                  ("Space" === o.code || "Enter" === o.code) && this.detail();
               }
               detail() {
                  let o = "";
                  switch (this.test) {
                     case l.P.ACUITY:
                        this.store.dispatch((0, Y.OpenAcuityDetailsPageAction)()), (o = c.xP.Acuity);
                        break;
                     case l.P.CONTRAST:
                        this.store.dispatch((0, $.OpenContrastDetailsPageAction)()), (o = c.xP.Contrast);
                        break;
                     case l.P.COLOR:
                        this.store.dispatch((0, G.OpenColorDetailsPageAction)()), (o = c.xP.Color);
                        break;
                     case l.P.ASTIGMATISM:
                        this.store.dispatch((0, H.OpenAstigmatismDetailsPageAction)()), (o = c.xP.Astigmatism);
                        break;
                     case l.P.AMSLER:
                        this.store.dispatch((0, R.OpenAmslerDetailsPageAction)()), (o = c.xP.Amsler);
                  }
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${c.GU.CTA}`,
                     eventAction: `${c.Br.Click}`,
                     eventType: `${c.o6.Internal}`,
                     eventValue: `${c.Vy.Details}`,
                     eventDetail: `${o}`,
                  }),
                     this.generalService.routeToNextScreen(`/${this.test}`);
               }
               startSingleTest() {
                  switch (this.test) {
                     case l.P.ACUITY:
                        this.store.dispatch(
                           (0, f.JJ)({
                              testType: u.m.ACUITY,
                           })
                        );
                        break;
                     case l.P.CONTRAST:
                        this.store.dispatch(
                           (0, f.JJ)({
                              testType: u.m.CONTRAST,
                           })
                        );
                        break;
                     case l.P.COLOR:
                        this.store.dispatch(
                           (0, f.JJ)({
                              testType: u.m.COLOR,
                           })
                        );
                        break;
                     case l.P.ASTIGMATISM:
                        this.store.dispatch(
                           (0, f.JJ)({
                              testType: u.m.ASTIGMATISM,
                           })
                        );
                        break;
                     case l.P.AMSLER:
                        this.store.dispatch(
                           (0, f.JJ)({
                              testType: u.m.AMSLER,
                           })
                        );
                  }
               }
               mapTestString(o) {
                  return this.generalService.mapTestString(o);
               }
            }
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)(t.Y36(h.yh), t.Y36(Z.m), t.Y36(k.y));
               }),
               (n.ɵcmp = t.Xpm({
                  type: n,
                  selectors: [["zat-test-card"]],
                  inputs: {
                     test: "test",
                  },
                  decls: 1,
                  vars: 0,
                  consts: [
                     ["class", "test-card", 4, "transloco"],
                     [1, "test-card"],
                     [1, "image"],
                     [3, "ngSwitch"],
                     [4, "ngSwitchCase"],
                     [1, "title"],
                     [1, "description"],
                     [1, "actions"],
                     [1, "details", 3, "tabIndex", "click", "keyup"],
                     ["type", "solid", "size", "small-medium", "color", "primary", 1, "spacing-to-top", 3, "click"],
                     ["id", "acuityTestThick", "name", "acuity_thick", 3, "width", "height", "alt"],
                     [1, "desktop"],
                     ["id", "contrastTestThick", "name", "contrast_thick", 3, "width", "height", "alt"],
                     ["id", "astigmatismTestThick", "name", "astigmatism_thick", 3, "width", "height", "alt"],
                     ["id", "colorTestThick", "name", "color_thick", 3, "width", "height", "alt"],
                     ["id", "amslerTestThick", "name", "amsler_thick", 3, "width", "height", "alt"],
                  ],
                  template: function (o, a) {
                     1 & o && t.YNc(0, X, 17, 14, "div", 0);
                  },
                  dependencies: [d.RF, d.n9, g.KI, P.U, T.x],
                  styles: [
                     "[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.test-card[_ngcontent-%COMP%]{width:100%;max-width:512px;background:var(--background-color-primary);display:flex;flex-direction:column;align-items:center;box-shadow:2px 4px 16px #19191914;border-radius:8px}.test-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{margin-top:32px}.test-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font:var(--text-hl-xl);text-align:center;padding:0 24px;margin-top:32px}@container appComp (min-width: 768px){.test-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{--text-hl-xl: 700 32px/36px var(--font-family-frutiger)}}.test-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font:var(--text-body-l);text-align:center;padding:0 24px}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{font:var(--text-body-l);text-align:center;background:var(--background-color-primary);width:100%;color:var(--primary-blue);border:1px solid transparent}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:hover{color:var(--primary-hover-blue);text-decoration:underline}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:active{color:var(--color-interaction-active);text-decoration:underline}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:disabled{color:var(--color-interaction-disabled)}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:focus{color:var(--color-interaction-focused);border-color:var(--color-interaction-focused)}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]:focus:not(:focus-visible){border-color:transparent}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   zat-action-button[_ngcontent-%COMP%]{margin-bottom:32px;width:100%}.test-card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .spacing-to-top[_ngcontent-%COMP%]{margin-top:32px}",
                  ],
               })),
               i
            );
         })();
         var _;
         function et(n, i) {
            1 & n && t._UZ(0, "zat-test-card", 6), 2 & n && t.Q6J("test", i.$implicit);
         }
         function nt(n, i) {
            if (
               (1 & n &&
                  (t.TgZ(0, "div", 1)(1, "div", 2)(2, "div", 3),
                  t._uU(3),
                  t.qZA(),
                  t.TgZ(4, "div", 4),
                  t.YNc(5, et, 1, 1, "zat-test-card", 5),
                  t.ALo(6, "async"),
                  t.qZA()()()),
               2 & n)
            ) {
               const e = i.$implicit,
                  o = t.oxw();
               t.xp6(3),
                  t.hij(" ", e("home.selectCheck.title"), " "),
                  t.xp6(2),
                  t.Q6J("ngForOf", t.lcZ(6, 2, o.availableTests$));
            }
         }
         let U =
            (((_ = class {
               constructor(i, e) {
                  (this.store = i),
                     (this.generalService = e),
                     (this.allTests = [l.P.ACUITY, l.P.CONTRAST, l.P.COLOR, l.P.ASTIGMATISM, l.P.AMSLER]),
                     (this.availableTests$ = new q.X(this.allTests)),
                     (this.itemPerView = 1.15);
               }
               ngOnInit() {
                  this.generalService
                     .hideLastTest$()
                     .pipe(
                        (0, E.b)((i) => {
                           if ((console.log("#### isUSMode in test-group: ", i), i)) {
                              let e = this.allTests.filter((o) => o !== l.P.AMSLER);
                              this.availableTests$.next(e);
                           } else
                              this.availableTests$.next(this.allTests),
                                 console.log("#### available tests: ", this.availableTests$.getValue());
                        }),
                        (0, w.t)(this)
                     )
                     .subscribe();
               }
               ngOnDestroy() {}
               updateIndex() {}
            }).ɵfac = function (i) {
               return new (i || _)(t.Y36(h.yh), t.Y36(Z.m));
            }),
            (_.ɵcmp = t.Xpm({
               type: _,
               selectors: [["zat-test-group"]],
               inputs: {
                  title: "title",
               },
               decls: 1,
               vars: 0,
               consts: [
                  ["class", "test-group", 4, "transloco"],
                  [1, "test-group"],
                  [1, "test-group-content"],
                  [1, "test-group-title"],
                  [1, "test-group-checks"],
                  [3, "test", 4, "ngFor", "ngForOf"],
                  [3, "test"],
               ],
               template: function (i, e) {
                  1 & i && t.YNc(0, nt, 7, 4, "div", 0);
               },
               dependencies: [d.sg, g.KI, tt, d.Ov],
               styles: [
                  "@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}.test-group[_ngcontent-%COMP%]{background:var(--bg-color-light);height:100%;width:100%;display:flex;flex-direction:column;align-items:center}.test-group[_ngcontent-%COMP%]   .test-group-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:0 24px}.test-group[_ngcontent-%COMP%]   .test-group-content[_ngcontent-%COMP%]   .test-group-title[_ngcontent-%COMP%]{font:var(--text-display-s);padding:0 24px;text-align:center;max-width:512px}@container appComp (min-width: 768px){.test-group[_ngcontent-%COMP%]   .test-group-content[_ngcontent-%COMP%]   .test-group-title[_ngcontent-%COMP%]{--text-display-s: 900 48px/52px var(--font-family-frutiger)}}.test-group[_ngcontent-%COMP%]   .test-group-checks[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-bottom:24px;width:100%}.test-group[_ngcontent-%COMP%]   .test-group-checks[_ngcontent-%COMP%]   zat-test-card[_ngcontent-%COMP%]{width:100%;margin-top:24px;display:flex;flex-direction:column;align-items:center}",
               ],
               changeDetection: 0,
            })),
            _);
         U = (0, J.gn)([(0, w.c)()], U);
         var b = r(5330);
         function ot(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 1)(1, "zat-ovs-header", 2),
                  t.NdJ("clickLeft", function () {
                     t.CHM(e);
                     const a = t.oxw();
                     return t.KtG(a.back());
                  }),
                  t.qZA(),
                  t.TgZ(2, "div", 3)(3, "div", 4),
                  t._UZ(4, "zat-test-group", 5),
                  t.qZA()()();
            }
            if (2 & n) {
               const e = i.$implicit,
                  o = t.oxw();
               t.xp6(1),
                  t.Q6J("label", o.headerConfig.label)("left", o.headerConfig.left)("right", o.headerConfig.right)(
                     "theme",
                     o.headerConfig.theme
                  ),
                  t.xp6(3),
                  t.Q6J("title", e("home.whatWeTest"));
            }
         }
         let it = (() => {
            var n;
            class i {
               constructor(o) {
                  (this.store = o),
                     (this.headerConfig = {
                        label: s.cr.CheckSelection,
                        left: s.EO.Back,
                        right: s.EO.Empty,
                        theme: s.dW.LightMode,
                     });
               }
               ngOnInit() {}
               back() {
                  this.store.dispatch((0, m.OpenHomePageAction)());
               }
            }
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)(t.Y36(h.yh));
               }),
               (n.ɵcmp = t.Xpm({
                  type: n,
                  selectors: [["zat-check-selection"]],
                  decls: 1,
                  vars: 0,
                  consts: [
                     ["class", "check-selection", 4, "transloco"],
                     [1, "check-selection"],
                     [3, "label", "left", "right", "theme", "clickLeft"],
                     [1, "selection"],
                     [1, "test-group-container"],
                     [3, "title"],
                  ],
                  template: function (o, a) {
                     1 & o && t.YNc(0, ot, 5, 5, "div", 0);
                  },
                  dependencies: [U, b.P, g.KI],
                  styles: [
                     "[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}[_nghost-%COMP%]{position:absolute;height:100%;width:100%}.check-selection[_ngcontent-%COMP%]{background:var(--bg-color-light);height:100%;width:100%;min-width:360px;display:flex;flex-direction:column;overflow-y:hidden}.check-selection[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]{overflow-y:scroll;height:100%}.check-selection[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .test-group-container[_ngcontent-%COMP%]{min-height:rem(400px)}.check-selection[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]   .test-group-container-mobile[_ngcontent-%COMP%]{min-height:rem(355px)}",
                  ],
               })),
               i
            );
         })();
         var C,
            M = r(553),
            at = r(1345),
            rt = r(4666),
            ct = r(996),
            lt = r(9224),
            z = r(5625),
            st = r(788),
            pt = r(215);
         function gt(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "zat-action-button", 11),
                  t.NdJ("click", function () {
                     t.CHM(e);
                     const a = t.oxw(3);
                     return t.KtG(a.clickSelectASpecificCheck());
                  }),
                  t._uU(1),
                  t.qZA();
            }
            if (2 & n) {
               const e = t.oxw(2).$implicit;
               t.xp6(1), t.hij(" ", e("home.selectCheck.button"), " ");
            }
         }
         function xt(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 4),
                  t._UZ(1, "app-icon", 5),
                  t.TgZ(2, "div", 6),
                  t._UZ(3, "div", 7),
                  t.qZA(),
                  t.TgZ(4, "div", 8)(5, "zat-action-button", 9),
                  t.NdJ("click", function () {
                     t.CHM(e);
                     const a = t.oxw(2);
                     return t.KtG(a.clickCheckYourVision());
                  }),
                  t._uU(6),
                  t.qZA(),
                  t.YNc(7, gt, 2, 1, "zat-action-button", 10),
                  t.qZA()();
            }
            if (2 & n) {
               const e = i.ngLet,
                  o = t.oxw().$implicit,
                  a = t.oxw();
               t.xp6(1),
                  t.Q6J("width", 168)("height", 87),
                  t.xp6(2),
                  t.Q6J(
                     "innerHTML",
                     o(e !== a.SpecialScreeningMode.NL_CAMPAIGN ? "common.appName" : "common.appNameNLCampaign"),
                     t.oJD
                  ),
                  t.xp6(3),
                  t.hij(" ", o("button.testYourVision"), " "),
                  t.xp6(1),
                  t.Q6J("ngIf", e !== a.SpecialScreeningMode.NL_CAMPAIGN);
            }
         }
         function dt(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 1)(1, "zat-ovs-header", 2),
                  t.NdJ("clickLeft", function () {
                     t.CHM(e);
                     const a = t.oxw();
                     return t.KtG(a.back());
                  })("clickRight", function () {
                     t.CHM(e);
                     const a = t.oxw();
                     return t.KtG(a.openInfo());
                  }),
                  t.qZA(),
                  t.YNc(2, xt, 8, 5, "div", 3),
                  t.ALo(3, "async"),
                  t.qZA();
            }
            if (2 & n) {
               const e = t.oxw();
               t.xp6(1),
                  t.Q6J("label", e.headerConfig.label)("left", e.headerConfig.left)("right", e.headerConfig.right)(
                     "theme",
                     e.headerConfig.theme
                  ),
                  t.xp6(1),
                  t.Q6J("ngLet", t.lcZ(3, 5, e.specialScreeningMode$));
            }
         }
         let L =
            (((C = class {
               constructor(i, e, o, a, p, x, Ut) {
                  (this.store = i),
                     (this.router = e),
                     (this.localize = o),
                     (this.appCookiesService = a),
                     (this.generalService = p),
                     (this.transloco = x),
                     (this.analytics = Ut),
                     (this.appChannel = lt.ti),
                     (this.SpecialScreeningMode = z.i),
                     (this.environment = M.N),
                     (this.headerConfig = {
                        label: s.cr.Home,
                        left: M.N.webcomponent ? s.EO.Back : s.EO.Empty,
                        right: s.EO.AboutUs,
                        theme: s.dW.DarkMode,
                     }),
                     (this.options = null);
               }
               ngOnInit() {
                  (this.specialScreeningMode$ = this.store.select(at.f.P2)),
                     this.generalService.centerCCM(),
                     (this.options = this.generalService.getLottieOptions(rt.r.AnimatedEye)),
                     console.log(">>> [PORTAL PAGE] ngOnInit() -- end");
               }
               ngOnDestroy() {}
               clickCheckYourVision() {
                  this.specialScreeningMode$
                     .pipe(
                        (0, E.b)((i) => {
                           this.store.dispatch(
                              (0, f.JJ)(
                                 i === z.i.NL_CAMPAIGN
                                    ? {
                                         testType: u.m.ACUITY,
                                      }
                                    : {
                                         testType: u.m.ALL,
                                      }
                              )
                           ),
                              this.analytics.createCustomEvent({
                                 event: "event",
                                 eventName: `${c.GU.CTA}`,
                                 eventAction: `${c.Br.Click}`,
                                 eventType: `${c.o6.Internal}`,
                                 eventValue: `${c.Vy.CheckYourVision}`,
                                 eventDetail: `${c.xP.Homepage}`,
                              });
                        })
                     )
                     .subscribe();
               }
               clickSelectASpecificCheck() {
                  this.store.dispatch((0, m.OpenCheckSelectionPageAction)()),
                     this.analytics.createCustomEvent({
                        event: "event",
                        eventName: `${c.GU.CTA}`,
                        eventAction: `${c.Br.Click}`,
                        eventType: `${c.o6.Internal}`,
                        eventValue: `${c.Vy.SelectASpecificCheck}`,
                        eventDetail: `${c.xP.Homepage}`,
                     });
               }
               openInfo() {
                  this.store.dispatch((0, m.OpenAboutUsPageAction)()),
                     this.analytics.createCustomEvent({
                        event: "event",
                        eventName: `${c.GU.CTA}`,
                        eventAction: `${c.Br.Click}`,
                        eventType: `${c.o6.Internal}`,
                        eventValue: `${c.Vy.InfoButton}`,
                        eventDetail: `${c.xP.Homepage}`,
                     });
               }
               back() {
                  this.store.dispatch((0, m.RouteToParentComponentAction)());
               }
            }).ɵfac = function (i) {
               return new (i || C)(
                  t.Y36(h.yh),
                  t.Y36(y.F0),
                  t.Y36(st.w),
                  t.Y36(pt.f),
                  t.Y36(Z.m),
                  t.Y36(g.Vn),
                  t.Y36(k.y)
               );
            }),
            (C.ɵcmp = t.Xpm({
               type: C,
               selectors: [["zat-portal-page"]],
               decls: 1,
               vars: 0,
               consts: [
                  ["class", "root", 4, "transloco"],
                  [1, "root"],
                  [3, "label", "left", "right", "theme", "clickLeft", "clickRight"],
                  ["class", "entry-content", 4, "ngLet"],
                  [1, "entry-content"],
                  ["name", "ovs_eye", "alt", "", 3, "width", "height"],
                  [1, "entry-title"],
                  [3, "innerHTML"],
                  [1, "entry-actions"],
                  [
                     "data-testid",
                     "button-start-test",
                     "color",
                     "primary",
                     "type",
                     "solid",
                     1,
                     "ovs-home-spacing-down",
                     3,
                     "click",
                  ],
                  [
                     "data-testid",
                     "button-select-check",
                     "color",
                     "primary",
                     "type",
                     "outline-white",
                     3,
                     "click",
                     4,
                     "ngIf",
                  ],
                  ["data-testid", "button-select-check", "color", "primary", "type", "outline-white", 3, "click"],
               ],
               template: function (i, e) {
                  1 & i && t.YNc(0, dt, 4, 7, "div", 0);
               },
               dependencies: [d.O5, T.x, b.P, g.KI, P.U, v.h, d.Ov],
               styles: [
                  "[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}[_nghost-%COMP%]{display:flex;flex-grow:2}.root[_ngcontent-%COMP%]{background:var(--background-color-dark-03);flex-grow:2;display:flex;flex-direction:column;align-items:stretch;justify-content:center}.root[_ngcontent-%COMP%]   .entry-content[_ngcontent-%COMP%]{margin-bottom:24px;flex-grow:2;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-right:clamp(10px,5%,24px);padding-left:clamp(10px,5%,24px)}.root[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]{max-width:560px;width:100%;font:var(--text-display-m);text-align:center;color:var(--text-color-button);display:flex;flex-direction:column;align-items:center;margin-top:32px;white-space:normal;overflow-wrap:break-word;word-break:break-word;hyphens:auto;-ms-hyphens:auto;-moz-hyphens:auto;-webkit-hyphens:auto}@container appComp (min-width: 768px){.root[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]{--text-display-m: 900 64px/68px var(--font-family-frutiger)}}@container appComp (min-width: 1280px){.root[_ngcontent-%COMP%]   .entry-title[_ngcontent-%COMP%]{--text-display-m: 900 80px/84px var(--font-family-frutiger);font-size:64px;line-height:68px}}.root[_ngcontent-%COMP%]   .entry-actions[_ngcontent-%COMP%]{margin-top:32px;max-width:560px;width:100%;display:flex;flex-direction:column;align-items:center}.root[_ngcontent-%COMP%]   .entry-actions[_ngcontent-%COMP%]   zat-action-button[_ngcontent-%COMP%]{width:100%}.root[_ngcontent-%COMP%]   .entry-actions[_ngcontent-%COMP%]   zat-action-button[_ngcontent-%COMP%]     button{height:48px}.root[_ngcontent-%COMP%]   .entry-actions[_ngcontent-%COMP%]   .ovs-home-spacing-down[_ngcontent-%COMP%]{margin-bottom:16px}",
               ],
               data: {
                  animation: [ct.BX],
               },
            })),
            C);
         L = (0, J.gn)([(0, w.c)()], L);
         var O = r(3069);
         const mt = [
            {
               path: O.a.Home,
               component: L,
               data: {
                  animation: "PortalPage",
               },
            },
            {
               path: O.a.Home_CheckSelection,
               component: it,
               data: {
                  animation: "PortalPage",
               },
            },
         ];
         let ht = (() => {
            var n;
            class i {}
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)();
               }),
               (n.ɵmod = t.oAB({
                  type: n,
               })),
               (n.ɵinj = t.cJS({
                  imports: [y.Bz.forChild(mt), y.Bz],
               })),
               i
            );
         })();
         var N = r(2315);
         function ft(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 5)(1, "zat-action-button", 6),
                  t.NdJ("click", function () {
                     const p = t.CHM(e).ngLet,
                        x = t.oxw(2);
                     return t.KtG(x.openDocument(p.imprintUrl));
                  }),
                  t.ALo(2, "transloco"),
                  t.TgZ(3, "div", 7)(4, "div", 8),
                  t._UZ(5, "app-icon", 9),
                  t.qZA(),
                  t.TgZ(6, "div", 10)(7, "label"),
                  t._uU(8),
                  t.qZA()(),
                  t.TgZ(9, "div", 11),
                  t._UZ(10, "app-icon", 12),
                  t.qZA()()(),
                  t.TgZ(11, "zat-action-button", 6),
                  t.NdJ("click", function () {
                     const p = t.CHM(e).ngLet,
                        x = t.oxw(2);
                     return t.KtG(x.openDocument(p.legalUrl));
                  }),
                  t.ALo(12, "transloco"),
                  t.TgZ(13, "div", 13)(14, "div", 8),
                  t._UZ(15, "app-icon", 9),
                  t.qZA(),
                  t.TgZ(16, "div", 10)(17, "label"),
                  t._uU(18),
                  t.qZA()(),
                  t.TgZ(19, "div", 11),
                  t._UZ(20, "app-icon", 12),
                  t.qZA()()(),
                  t.TgZ(21, "zat-action-button", 14),
                  t.NdJ("click", function () {
                     const p = t.CHM(e).ngLet,
                        x = t.oxw(2);
                     return t.KtG(x.openDocument(p.privacyUrl));
                  }),
                  t.ALo(22, "transloco"),
                  t.TgZ(23, "div", 13)(24, "div", 8),
                  t._UZ(25, "app-icon", 9),
                  t.qZA(),
                  t.TgZ(26, "div", 10),
                  t._uU(27),
                  t.qZA(),
                  t.TgZ(28, "div", 11),
                  t._UZ(29, "app-icon", 12),
                  t.qZA()()(),
                  t.TgZ(30, "zat-action-button", 14),
                  t.NdJ("click", function () {
                     const p = t.CHM(e).ngLet,
                        x = t.oxw(2);
                     return t.KtG(x.openDocument(p.licenceUrl));
                  }),
                  t.ALo(31, "transloco"),
                  t.TgZ(32, "div", 13)(33, "div", 8),
                  t._UZ(34, "app-icon", 9),
                  t.qZA(),
                  t.TgZ(35, "div", 10),
                  t._uU(36),
                  t.qZA(),
                  t.TgZ(37, "div", 11),
                  t._UZ(38, "app-icon", 12),
                  t.qZA()()()();
            }
            if (2 & n) {
               const e = t.oxw().$implicit;
               t.xp6(1),
                  t.s9C("ariaLabel", t.lcZ(2, 24, "menu.imprint.text")),
                  t.xp6(4),
                  t.Q6J("width", 24)("height", 17),
                  t.xp6(3),
                  t.Oqu(e("menu.imprint.text")),
                  t.xp6(2),
                  t.Q6J("width", 7)("height", 11),
                  t.xp6(1),
                  t.s9C("ariaLabel", t.lcZ(12, 26, "home.about.legalDocuments.legalNotice.label")),
                  t.xp6(4),
                  t.Q6J("width", 24)("height", 17),
                  t.xp6(3),
                  t.Oqu(e("home.about.legalDocuments.legalNotice.label")),
                  t.xp6(2),
                  t.Q6J("width", 7)("height", 11),
                  t.xp6(1),
                  t.s9C("ariaLabel", t.lcZ(22, 28, "home.about.legalDocuments.privacyNotice.title")),
                  t.xp6(4),
                  t.Q6J("width", 24)("height", 17),
                  t.xp6(2),
                  t.hij(" ", e("home.about.legalDocuments.privacyNotice.title"), " "),
                  t.xp6(2),
                  t.Q6J("width", 7)("height", 11),
                  t.xp6(1),
                  t.MGl("ariaLabel", "t", t.lcZ(31, 30, "home.about.legalDocuments.licence"), ""),
                  t.xp6(4),
                  t.Q6J("width", 24)("height", 17),
                  t.xp6(2),
                  t.hij(" ", e("home.about.legalDocuments.licence"), " "),
                  t.xp6(2),
                  t.Q6J("width", 7)("height", 11);
            }
         }
         const ut = function (n) {
               return {
                  "web-c-height": n,
               };
            },
            _t = function (n, i, e, o) {
               return {
                  imprintUrl: n,
                  legalUrl: i,
                  privacyUrl: e,
                  licenceUrl: o,
               };
            };
         function Ct(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 1)(1, "zat-ovs-header", 2),
                  t.NdJ("clickLeft", function () {
                     t.CHM(e);
                     const a = t.oxw();
                     return t.KtG(a.back());
                  }),
                  t.qZA(),
                  t.TgZ(2, "div", 3),
                  t.YNc(3, ft, 39, 32, "div", 4),
                  t.qZA()();
            }
            if (2 & n) {
               const e = i.$implicit,
                  o = t.oxw();
               t.xp6(1),
                  t.Q6J("label", o.headerConfig.label)("left", o.headerConfig.left)("right", o.headerConfig.right)(
                     "theme",
                     o.headerConfig.theme
                  ),
                  t.xp6(1),
                  t.Q6J("ngClass", t.VKq(6, ut, o.environment.webcomponent)),
                  t.xp6(1),
                  t.Q6J(
                     "ngLet",
                     t.l5B(
                        8,
                        _t,
                        e("menu.imprint.url"),
                        e("menu.legal.url"),
                        e("menu.privacy.url"),
                        o.environment.licenseUrl
                     )
                  );
            }
         }
         let vt = (() => {
            var n;
            class i {
               constructor(o) {
                  (this.store = o),
                     (this.environment = M.N),
                     (this.headerConfig = {
                        label: s.cr.LegalDocuments,
                        left: s.EO.Back,
                        right: s.EO.Empty,
                        theme: s.dW.LightMode,
                     });
               }
               ngOnInit() {}
               openDocument(o) {
                  window.open(o, "_blank");
               }
               back() {
                  this.store.dispatch((0, m.OpenAboutUsPageAction)());
               }
            }
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)(t.Y36(h.yh));
               }),
               (n.ɵcmp = t.Xpm({
                  type: n,
                  selectors: [["zat-legal-documents"]],
                  decls: 1,
                  vars: 0,
                  consts: [
                     ["class", "legal-documents", 4, "transloco"],
                     [1, "legal-documents"],
                     [3, "label", "left", "right", "theme", "clickLeft"],
                     [1, "info-sets", 3, "ngClass"],
                     ["class", "info-set", 4, "ngLet"],
                     [1, "info-set"],
                     ["type", "focus", "alt", "", 3, "ariaLabel", "click"],
                     [1, "info-set-content"],
                     [1, "icon-tile"],
                     ["id", "document", "name", "document", "alt", "", 3, "width", "height"],
                     [1, "tile-text"],
                     [1, "icon-tile", "right"],
                     ["id", "arrow_right", "name", "arrow_right", "alt", "", 3, "width", "height"],
                     [1, "info-set-content", "info-line", "not-first-entry"],
                     ["type", "focus", 3, "ariaLabel", "click"],
                  ],
                  template: function (o, a) {
                     1 & o && t.YNc(0, Ct, 4, 13, "div", 0);
                  },
                  dependencies: [d.mk, T.x, b.P, g.KI, v.h, P.U, g.Ot],
                  styles: [
                     "[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}[_nghost-%COMP%]{flex-grow:1}[_nghost-%COMP%]     .mat-mdc-button .mdc-button__label{width:100%}.legal-documents[_ngcontent-%COMP%]{background:var(--bg-color-light);height:100%;width:100%;min-width:360px}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin:0 20px;padding-bottom:16px}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]{margin-top:16px;background-color:var(--background-color-primary);box-shadow:2px 4px 16px #19191914;border-radius:8px;max-width:560px;width:100%}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   .info-set-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:0 24px;height:64px;width:100%}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   .info-set-content.info-line[_ngcontent-%COMP%]{border-top:1px solid var(--background-color-light-04);color:var(--text-color-headline)}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   .info-set-content.not-first-entry[_ngcontent-%COMP%]{height:63px}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   .info-set-content[_ngcontent-%COMP%]   .tile-text[_ngcontent-%COMP%]{flex-grow:1;padding-left:10px;margin-top:5px;font:var(--text-hl-xs);color:var(--text-color-headline)}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   .info-set-content[_ngcontent-%COMP%]   .icon-tile[_ngcontent-%COMP%]{height:24px;width:24px;display:flex;flex-direction:row;align-items:center;margin-top:5px}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   .info-set-content[_ngcontent-%COMP%]   .icon-tile.right[_ngcontent-%COMP%]{margin-top:0;cursor:pointer}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   .info-set-content[_ngcontent-%COMP%]   .icon-tile.right[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{height:auto!important}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   zat-action-button[_ngcontent-%COMP%]{width:100%;max-width:560px}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   zat-action-button.top-spacing[_ngcontent-%COMP%]{margin-top:var(--tiles-margin-of-about-us)}.legal-documents[_ngcontent-%COMP%]   .info-sets[_ngcontent-%COMP%]   .info-set[_ngcontent-%COMP%]   zat-action-button[_ngcontent-%COMP%]     .action-button{background:transparent;height:100%;max-width:560px;width:100%;padding:0;text-align:left}.legal-documents[_ngcontent-%COMP%]   .info-sets.web-c-height[_ngcontent-%COMP%]{max-height:600px}",
                  ],
               })),
               i
            );
         })();
         var A = r(7421);
         function yt(n, i) {
            if (
               (1 & n &&
                  (t.TgZ(0, "div", 3),
                  t.ynx(1, 4),
                  t.TgZ(2, "mat-accordion", 5)(3, "mat-expansion-panel")(4, "mat-expansion-panel-header", 6)(
                     5,
                     "mat-panel-title",
                     7
                  ),
                  t._uU(6),
                  t.qZA()(),
                  t.TgZ(7, "div", 8),
                  t._UZ(8, "app-icon", 9),
                  t.qZA(),
                  t._UZ(9, "p", 10),
                  t.TgZ(10, "div", 8),
                  t._UZ(11, "app-icon", 11),
                  t.qZA(),
                  t._UZ(12, "p", 10),
                  t.qZA(),
                  t.TgZ(13, "mat-expansion-panel")(14, "mat-expansion-panel-header", 6)(15, "mat-panel-title", 7),
                  t._uU(16),
                  t.qZA()(),
                  t.TgZ(17, "div", 12),
                  t._UZ(18, "app-icon", 13),
                  t.qZA(),
                  t._UZ(19, "p", 10),
                  t.qZA(),
                  t.TgZ(20, "mat-expansion-panel")(21, "mat-expansion-panel-header", 6)(22, "mat-panel-title", 7),
                  t._uU(23),
                  t.qZA()(),
                  t._UZ(24, "p", 10),
                  t.qZA(),
                  t.TgZ(25, "mat-expansion-panel")(26, "mat-expansion-panel-header", 6)(27, "mat-panel-title", 7),
                  t._uU(28),
                  t.qZA()(),
                  t._UZ(29, "p", 10),
                  t.qZA(),
                  t.TgZ(30, "mat-expansion-panel")(31, "mat-expansion-panel-header", 6)(32, "mat-panel-title", 7),
                  t._uU(33),
                  t.qZA()(),
                  t._UZ(34, "p", 10),
                  t.qZA(),
                  t.TgZ(35, "mat-expansion-panel")(36, "mat-expansion-panel-header", 6)(37, "mat-panel-title", 7),
                  t._uU(38),
                  t.qZA()(),
                  t._UZ(39, "p", 10),
                  t.qZA()(),
                  t.BQk(),
                  t.qZA()),
               2 & n)
            ) {
               const e = i.$implicit;
               t.xp6(2),
                  t.Q6J("displayMode", "flat")("multi", !0)("@.disabled", !0),
                  t.xp6(4),
                  t.hij(" ", e("faq.section1.question"), " "),
                  t.xp6(2),
                  t.Q6J("width", 160)("height", 106),
                  t.xp6(1),
                  t.Q6J("innerHTML", e("faq.section1.paragraph1"), t.oJD),
                  t.xp6(2),
                  t.Q6J("width", 200)("height", 60),
                  t.xp6(1),
                  t.Q6J("innerHTML", e("faq.section1.paragraph2"), t.oJD),
                  t.xp6(4),
                  t.hij(" ", e("faq.section2.question"), " "),
                  t.xp6(2),
                  t.Q6J("width", 300)("height", 190),
                  t.xp6(1),
                  t.Q6J("innerHTML", e("faq.section2.paragraph1"), t.oJD),
                  t.xp6(4),
                  t.hij(" ", e("faq.section3.question"), " "),
                  t.xp6(1),
                  t.Q6J("innerHTML", e("faq.section3.paragraph1"), t.oJD),
                  t.xp6(4),
                  t.hij(" ", e("faq.section4.question"), " "),
                  t.xp6(1),
                  t.Q6J("innerHTML", e("faq.section4.paragraph1"), t.oJD),
                  t.xp6(4),
                  t.hij(" ", e("faq.section5.question"), " "),
                  t.xp6(1),
                  t.Q6J("innerHTML", e("faq.section5.paragraph1"), t.oJD),
                  t.xp6(4),
                  t.hij(" ", e("faq.section6.question"), " "),
                  t.xp6(1),
                  t.Q6J("innerHTML", e("faq.section6.paragraph1"), t.oJD);
            }
         }
         let Pt = (() => {
            var n;
            class i {
               constructor(o) {
                  (this.store = o),
                     (this.headerConfig = {
                        label: s.cr.Faq,
                        left: s.EO.Back,
                        right: s.EO.Empty,
                        theme: s.dW.LightMode,
                     });
               }
               ngOnInit() {}
               back() {
                  this.store.dispatch((0, m.OpenAboutUsPageAction)());
               }
            }
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)(t.Y36(h.yh));
               }),
               (n.ɵcmp = t.Xpm({
                  type: n,
                  selectors: [["zat-help-page"]],
                  decls: 3,
                  vars: 4,
                  consts: [
                     [1, "help"],
                     [3, "label", "left", "right", "theme", "clickLeft"],
                     ["class", "accordion-body", 4, "transloco"],
                     [1, "accordion-body"],
                     ["content", ""],
                     [1, "help-content", 3, "displayMode", "multi"],
                     ["collapsedHeight", "*", "expandedHeight", "*"],
                     [1, "accordion-title"],
                     [1, "images"],
                     ["id", "keep_distance_mobile", "name", "keep_distance_mobile", "alt", "", 3, "width", "height"],
                     [1, "accordion-text", 3, "innerHTML"],
                     ["id", "wear_your_glasses", "name", "wear_your_glasses", "alt", "", 3, "width", "height"],
                     [1, "text-center", 2, "margin-top", "28px", "margin-bottom", "16px"],
                     [
                        "id",
                        "credit_card_front_landscape",
                        "name",
                        "credit_card_front_landscape",
                        "alt",
                        "",
                        3,
                        "width",
                        "height",
                     ],
                  ],
                  template: function (o, a) {
                     1 & o &&
                        (t.TgZ(0, "div", 0)(1, "zat-ovs-header", 1),
                        t.NdJ("clickLeft", function () {
                           return a.back();
                        }),
                        t.qZA(),
                        t.YNc(2, yt, 40, 22, "div", 2),
                        t.qZA()),
                        2 & o &&
                           (t.xp6(1),
                           t.Q6J("label", a.headerConfig.label)("left", a.headerConfig.left)(
                              "right",
                              a.headerConfig.right
                           )("theme", a.headerConfig.theme));
                  },
                  dependencies: [b.P, A.pp, A.ib, A.yz, A.yK, g.KI, P.U],
                  styles: [
                     "@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}[_nghost-%COMP%]{flex-grow:1;display:flex;position:absolute;height:100%;width:100%}.help[_ngcontent-%COMP%]{flex-grow:2;background:var(--bg-color-light);width:100%;height:100%;min-width:360px;display:flex;flex-direction:column}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]{overflow-x:hidden;height:100%;padding:0 24px;display:flex;flex-direction:column;align-items:center}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   .accordion-title[_ngcontent-%COMP%]{font:var(--text-hl-xs);color:var(--text-color-headline)}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   .accordion-text[_ngcontent-%COMP%]{font:var(--text-body-m);color:var(--text-color-body);padding:0 24px;align-items:flex-start}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-accordion[_ngcontent-%COMP%]{max-width:560px}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]{margin-top:28px;margin-bottom:42px;display:block}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{background:transparent}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;margin-top:24px;margin-bottom:24px;text-align:center}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:3px}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:focus{color:var(--color-interaction-focused);border-color:var(--color-interaction-focused)}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:focus:not(:focus-visible){border-color:transparent}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]{border-radius:0;box-shadow:none}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:not(:first-child){border-top:1px solid var(--border-color-inactive)!important}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:first-child{border-top:2px solid var(--border-color-active)!important}.help[_ngcontent-%COMP%]   .accordion-body[_ngcontent-%COMP%]   mat-expansion-panel[_ngcontent-%COMP%]:last-child{border-bottom:2px solid var(--border-color-active)!important}.help-topics[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:36px;border-radius:5px;border:1px solid hsl(300,2%,91%);padding:13px 14px;font-weight:400;font-family:ZEISS Frutiger Next,sans-serif;box-sizing:border-box}.graphics-help-1[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:24px}[_nghost-%COMP%]  .mat-expansion-panel-header{padding:24px 10px 24px 0;background-color:var(--bg-color-light)!important;line-height:1.5;margin-right:0!important}@container appComp (min-width: 1024px){[_nghost-%COMP%]  .mat-expansion-panel-header{min-height:0}}[_nghost-%COMP%]  .mat-expansion-panel-header:hover{background-color:var(--bg-color-light)}[_nghost-%COMP%]  .mat-expansion-indicator:after{border-width:0px 1px 1px 0px}[_nghost-%COMP%]  .mat-expansion-panel-body{padding-left:20px;padding-right:20px;line-height:1.5}@container appComp (min-width: 1024px){[_nghost-%COMP%]  .mat-expansion-panel-body{padding-left:30px;padding-right:30px}}",
                  ],
               })),
               i
            );
         })();
         function bt(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "zat-action-button", 16),
                  t.NdJ("click", function () {
                     t.CHM(e);
                     const a = t.oxw(3);
                     return t.KtG(a.openLegalDocuments());
                  }),
                  t.ALo(1, "transloco"),
                  t.TgZ(2, "div", 7)(3, "div", 8)(4, "div", 9),
                  t._UZ(5, "app-icon", 19),
                  t.qZA(),
                  t.TgZ(6, "div", 11)(7, "span", 12),
                  t._uU(8),
                  t.qZA(),
                  t.TgZ(9, "div", 13),
                  t._uU(10),
                  t.qZA()(),
                  t.TgZ(11, "div", 14),
                  t._UZ(12, "app-icon", 15),
                  t.qZA()()()();
            }
            if (2 & n) {
               const e = t.oxw(2).$implicit;
               t.s9C("ariaLabel", t.lcZ(1, 7, "home.about.legalDocuments.title")),
                  t.xp6(5),
                  t.Q6J("width", 15)("height", 19),
                  t.xp6(3),
                  t.Oqu(e("home.about.legalDocuments.title")),
                  t.xp6(2),
                  t.hij(" ", e("home.about.legalDocuments.text"), " "),
                  t.xp6(2),
                  t.Q6J("width", 7)("height", 11);
            }
         }
         function Mt(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 5)(1, "zat-action-button", 6),
                  t.NdJ("click", function () {
                     const p = t.CHM(e).ngLet,
                        x = t.oxw(2);
                     return t.KtG(x.openContact(p));
                  }),
                  t.ALo(2, "transloco"),
                  t.TgZ(3, "div", 7)(4, "div", 8)(5, "div", 9),
                  t._UZ(6, "app-icon", 10),
                  t.qZA(),
                  t.TgZ(7, "div", 11)(8, "span", 12),
                  t._uU(9),
                  t.qZA(),
                  t.TgZ(10, "div", 13),
                  t._uU(11),
                  t.qZA()(),
                  t.TgZ(12, "div", 14),
                  t._UZ(13, "app-icon", 15),
                  t.qZA()()()(),
                  t.TgZ(14, "zat-action-button", 16),
                  t.NdJ("click", function () {
                     t.CHM(e);
                     const a = t.oxw(2);
                     return t.KtG(a.openFAQs());
                  }),
                  t.ALo(15, "transloco"),
                  t.TgZ(16, "div", 7)(17, "div", 8)(18, "div", 9),
                  t._UZ(19, "app-icon", 17),
                  t.qZA(),
                  t.TgZ(20, "div", 11)(21, "span", 12),
                  t._uU(22),
                  t.qZA(),
                  t.TgZ(23, "div", 13),
                  t._uU(24),
                  t.qZA()(),
                  t.TgZ(25, "div", 14),
                  t._UZ(26, "app-icon", 15),
                  t.qZA()()()(),
                  t.YNc(27, bt, 13, 9, "zat-action-button", 18),
                  t.qZA();
            }
            if (2 & n) {
               const e = t.oxw().$implicit,
                  o = t.oxw();
               t.xp6(1),
                  t.s9C("ariaLabel", t.lcZ(2, 15, "home.about.contact")),
                  t.xp6(5),
                  t.Q6J("width", 24)("height", 17),
                  t.xp6(3),
                  t.Oqu(e("home.about.contact")),
                  t.xp6(2),
                  t.hij(" ", e("home.about.contact.text"), " "),
                  t.xp6(2),
                  t.Q6J("width", 7)("height", 11),
                  t.xp6(1),
                  t.s9C("ariaLabel", t.lcZ(15, 17, "home.about.faqs.header")),
                  t.xp6(5),
                  t.Q6J("width", 19)("height", 19),
                  t.xp6(3),
                  t.Oqu(e("home.about.faqs.header")),
                  t.xp6(2),
                  t.hij(" ", e("home.about.faqs.text"), " "),
                  t.xp6(2),
                  t.Q6J("width", 7)("height", 11),
                  t.xp6(1),
                  t.Q6J("ngIf", !o.isWebComponent);
            }
         }
         function Ot(n, i) {
            if (1 & n) {
               const e = t.EpF();
               t.TgZ(0, "div", 1)(1, "zat-ovs-header", 2),
                  t.NdJ("clickLeft", function () {
                     t.CHM(e);
                     const a = t.oxw();
                     return t.KtG(a.back());
                  }),
                  t.qZA(),
                  t.YNc(2, Mt, 28, 19, "div", 3),
                  t.TgZ(3, "div", 4),
                  t._uU(4),
                  t.qZA()();
            }
            if (2 & n) {
               const e = i.$implicit,
                  o = t.oxw();
               t.xp6(1),
                  t.Q6J("label", o.headerConfig.label)("left", o.headerConfig.left)("right", o.headerConfig.right)(
                     "theme",
                     o.headerConfig.theme
                  ),
                  t.xp6(1),
                  t.Q6J("ngLet", e("help.contactUrl")),
                  t.xp6(2),
                  t.hij("Version ", o.semanticVersion, "");
            }
         }
         const At = [
            {
               path: O.a.AboutUs,
               component: (() => {
                  var n;
                  class i {
                     constructor(o, a) {
                        (this.store = o),
                           (this.analytics = a),
                           (this.headerConfig = {
                              label: s.cr.AboutUs,
                              left: s.EO.Back,
                              right: s.EO.Empty,
                              theme: s.dW.LightMode,
                           }),
                           (this.isWebComponent = M.N.webcomponent),
                           (this.semanticVersion = M.N.semanticVersion);
                     }
                     ngOnInit() {}
                     openLegalDocuments() {
                        this.store.dispatch((0, m.OpenLegalDocumentsPageAction)());
                     }
                     openFAQs() {
                        this.store.dispatch((0, m.OpenFaqPageAction)()),
                           this.analytics.createCustomEvent({
                              event: "event",
                              eventName: `${c.GU.CTA}`,
                              eventAction: `${c.Br.Click}`,
                              eventType: `${c.o6.Internal}`,
                              eventValue: `${c.Vy.FAQ}`,
                              eventDetail: `${c.xP.AboutOVS}`,
                           });
                     }
                     openContact(o) {
                        window.open(o, "_blank");
                     }
                     back() {
                        this.store.dispatch((0, m.OpenHomePageAction)());
                     }
                  }
                  return (
                     ((n = i).ɵfac = function (o) {
                        return new (o || n)(t.Y36(h.yh), t.Y36(k.y));
                     }),
                     (n.ɵcmp = t.Xpm({
                        type: n,
                        selectors: [["zat-about-us"]],
                        decls: 1,
                        vars: 0,
                        consts: [
                           ["class", "about-us", 4, "transloco"],
                           [1, "about-us"],
                           [3, "label", "left", "right", "theme", "clickLeft"],
                           ["class", "info-tile-set", 4, "ngLet"],
                           [1, "semantic-version"],
                           [1, "info-tile-set"],
                           ["type", "focus", 3, "ariaLabel", "click"],
                           [1, "tile"],
                           [1, "headline"],
                           [1, "icon-tile", "left"],
                           ["id", "contact", "name", "contact", "alt", "", 3, "width", "height"],
                           [1, "tile-text"],
                           [1, "info-headline"],
                           [1, "info-text"],
                           [1, "icon-tile", "right"],
                           ["id", "arrow_right", "name", "arrow_right", "alt", "", 3, "width", "height"],
                           ["type", "focus", 1, "top-spacing", 3, "ariaLabel", "click"],
                           ["id", "btn_help", "name", "btn_help", "alt", "", 3, "width", "height"],
                           ["class", "top-spacing", "type", "focus", 3, "ariaLabel", "click", 4, "ngIf"],
                           ["id", "document", "name", "document", "alt", "", 3, "width", "height"],
                        ],
                        template: function (o, a) {
                           1 & o && t.YNc(0, Ot, 5, 6, "div", 0);
                        },
                        dependencies: [d.O5, T.x, b.P, g.KI, v.h, P.U, g.Ot],
                        styles: [
                           "[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}[_nghost-%COMP%]{flex-grow:1}.about-us[_ngcontent-%COMP%]{background:var(--bg-color-light);height:100%;width:100%;min-width:360px}.about-us[_ngcontent-%COMP%]   .semantic-version[_ngcontent-%COMP%]{text-align:center;font-size:16px;font-family:var(--font-family-frutiger)}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]{margin:16px 24px 0;min-height:320px;display:flex;flex-direction:column;align-items:center;padding-bottom:16px}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]{background:var(--background-color-primary);display:flex;flex-direction:column;align-items:stretch;max-width:560px;width:100%;box-shadow:2px 4px 16px #19191914;border-radius:8px}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]{padding:24px;display:flex}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]   .tile-text[_ngcontent-%COMP%]{flex-grow:2;padding-left:16px;text-align:start}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]   .tile-text[_ngcontent-%COMP%]   .info-headline[_ngcontent-%COMP%]{color:var(--text-color-headline);font:var(--text-hl-s)}@container appComp (min-width: 768px){.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]   .tile-text[_ngcontent-%COMP%]   .info-headline[_ngcontent-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger)}}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]   .tile-text[_ngcontent-%COMP%]   .info-text[_ngcontent-%COMP%]{color:var(--text-color-body);font:var(--text-body-m);white-space:initial}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]   .icon-tile[_ngcontent-%COMP%]{height:24px;width:24px;display:flex;flex-direction:row}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]   .icon-tile.left[_ngcontent-%COMP%]{align-items:center}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   .tile[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]   .icon-tile.right[_ngcontent-%COMP%]{justify-content:center;cursor:pointer}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   zat-action-button[_ngcontent-%COMP%]{width:100%;max-width:560px;display:flex;justify-content:center}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   zat-action-button.top-spacing[_ngcontent-%COMP%]{margin-top:var(--tiles-margin-of-about-us)}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]   zat-action-button[_ngcontent-%COMP%]     .action-button{background:transparent;height:100%;max-width:560px;width:100%;padding:0}.about-us[_ngcontent-%COMP%]   .info-tile-set[_ngcontent-%COMP%]     .mat-mdc-button .mdc-button__label{width:100%}",
                        ],
                     })),
                     i
                  );
               })(),
            },
            {
               path: O.a.AboutUs_Faq,
               component: Pt,
            },
            {
               path: O.a.AboutUs_LegalDocuments,
               component: vt,
            },
         ];
         let wt = (() => {
            var n;
            class i {}
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)();
               }),
               (n.ɵmod = t.oAB({
                  type: n,
               })),
               (n.ɵinj = t.cJS({
                  imports: [y.Bz.forChild(At), y.Bz],
               })),
               i
            );
         })();
         var F = r(1056),
            Q = r(2337);
         let Zt = (() => {
            var n;
            class i {}
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)();
               }),
               (n.ɵmod = t.oAB({
                  type: n,
               })),
               (n.ɵinj = t.cJS({
                  imports: [d.ez, wt, Q.o, F.M, g.y4, v.f, N.x],
               })),
               i
            );
         })();
         function D() {
            return r.e("node_modules_lottie-web_build_player_lottie_js").then(r.t.bind(r, 5904, 23));
         }
         let kt = (() => {
            var n;
            class i {}
            return (
               ((n = i).ɵfac = function (o) {
                  return new (o || n)();
               }),
               (n.ɵmod = t.oAB({
                  type: n,
               })),
               (n.ɵinj = t.cJS({
                  imports: [
                     d.ez,
                     ht,
                     Q.o,
                     F.M,
                     g.y4,
                     N.x,
                     Zt,
                     v.f,
                     I.CT.forRoot({
                        player: D,
                        useCache: !0,
                     }),
                  ],
               })),
               i
            );
         })();
      },
   },
]);
