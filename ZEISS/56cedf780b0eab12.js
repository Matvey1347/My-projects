"use strict";
(self.webpackChunkonline_vision_screening = self.webpackChunkonline_vision_screening || []).push([
   ["src_app_mega-test_mega-test_module_ts"],
   {
      6786: (Ot, w, o) => {
         o.r(w),
            o.d(w, {
               MegaTestModule: () => Mt,
            });
         var u = o(6814),
            h = o(6560),
            A = o(7850),
            z = o(7582),
            T = o(655),
            R = o(1791),
            k = o(9397),
            I = o(932),
            Z = o(8180),
            N = o(2181),
            f = o(553),
            M = o(3576),
            b = o(6856),
            v = o(1345),
            g = o(5097),
            C = o(191),
            E = o(4691),
            d = o(1992),
            J = o(5939),
            m = o(212),
            y = o(5779),
            L = o(996),
            S = o(8485),
            Q = o(6709),
            j = o(9224),
            F = o(3069),
            c = o(7088),
            P = o(3876),
            l = o(9271),
            $ = o(5625),
            t = o(5879),
            U = o(676),
            Y = o(7090),
            H = o(3005),
            B = o(4704),
            G = o(758),
            K = o(8348),
            X = o(2383),
            V = o(5096),
            W = o(5350),
            D = o(4514),
            q = o(748),
            s = o(6825),
            tt = o(8514);
         function et(e, a) {
            if (
               (1 & e &&
                  (t.ynx(0),
                  t.TgZ(1, "div", 1)(2, "app-icon", 2),
                  t._UZ(3, "app-icon", 3),
                  t.qZA(),
                  t._UZ(4, "span", 4),
                  t.qZA(),
                  t.TgZ(5, "div", 5),
                  t._UZ(6, "app-icon", 6),
                  t.qZA(),
                  t.BQk()),
               2 & e)
            ) {
               const n = a.$implicit,
                  i = t.oxw();
               t.xp6(2),
                  t.Q6J("name", i.image)("width", 30)("height", 30),
                  t.xp6(1),
                  t.Q6J("name", "icon_smiley_" + i.result)("width", 16)("height", 16),
                  t.xp6(1),
                  t.Q6J("innerHTML", n(i.testName), t.oJD),
                  t.xp6(2),
                  t.Q6J("@openClose", i.expended ? "open" : "closed")("width", 24)("height", 24);
            }
         }
         let nt = (() => {
            var e;
            class a {}
            return (
               ((e = a).ɵfac = function (i) {
                  return new (i || e)();
               }),
               (e.ɵcmp = t.Xpm({
                  type: e,
                  selectors: [["zat-result-panel-title"]],
                  inputs: {
                     testName: "testName",
                     image: "image",
                     expended: "expended",
                     imageId: "imageId",
                     result: "result",
                  },
                  decls: 1,
                  vars: 0,
                  consts: [
                     [4, "transloco"],
                     [1, "va-description-image"],
                     ["id", "imageId", "alt", "", 1, "icon-small", 3, "name", "width", "height"],
                     ["id", "imageResultId", "alt", "", 1, "icon-small-result", 3, "name", "width", "height"],
                     [1, "title", "text-headline", 3, "innerHTML"],
                     [1, "icon"],
                     [
                        "id",
                        "iconArrowUp",
                        "name",
                        "icn_arrow_down",
                        "alt",
                        "Show / Hide",
                        1,
                        "arrow-up",
                        3,
                        "width",
                        "height",
                     ],
                  ],
                  template: function (i, r) {
                     1 & i && t.YNc(0, et, 7, 10, "ng-container", 0);
                  },
                  dependencies: [h.KI, tt.U],
                  styles: [
                     '.va-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.va-content.no-bottom-padding[_ngcontent-%COMP%]{padding-bottom:0}.va-content--result[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;text-align:center;background-color:var(--background-color-primary);padding:24px;box-sizing:border-box;border-radius:8px}.va-content--result[_ngcontent-%COMP%]   .va-description[_ngcontent-%COMP%]{margin-bottom:16px;margin-top:24px}.single-row[_ngcontent-%COMP%]   .va-content--result[_ngcontent-%COMP%]{width:100%}.va-content--mega-test[_ngcontent-%COMP%]{padding:24px;text-align:center}.va-content-container[_ngcontent-%COMP%]{width:312px}.webcomponent[_ngcontent-%COMP%]{display:inline-block}.va-values[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:flex;flex-direction:row;justify-content:center}.va-column[_ngcontent-%COMP%]{width:140px}.va-column[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{overflow:visible}.va-label[_ngcontent-%COMP%]{font:var(--text-eyebrow);color:var(--text-color-headline);margin-top:8px;text-transform:uppercase}.va-label--mb[_ngcontent-%COMP%]{margin-bottom:10px}.va-label--mt[_ngcontent-%COMP%]{margin-top:5px}.va-description[_ngcontent-%COMP%]{text-align:center;margin:0;font:var(--text-body-m);color:var(--text-color-headline)}.save-result-cta[_ngcontent-%COMP%]{padding:24px 0 0;font-family:ZEISS Frutiger Next;font-size:16px;font-weight:700;line-height:24px;display:flex;flex-direction:column;gap:16px}.save-result-cta[_ngcontent-%COMP%]:before{content:"";border:1px solid #ECF0F4;margin:0 -24px}.va-description-image[_ngcontent-%COMP%]{display:flex;align-items:start;flex-direction:row;justify-content:space-between;position:relative;font-size:21px;line-height:1.285;font-weight:500}.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:16px;width:30px;height:30px}@container appComp (min-width: 1024px){.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}}.va-description-image[_ngcontent-%COMP%]:after{content:""}.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{padding-top:5px;padding-left:46px;font:var(--text-hl-l);color:var(--text-color-headline);font-size:30px}@container appComp (min-width: 768px){.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{--text-hl-l: 700 28px/32px var(--font-family-frutiger)}}.result-title[_ngcontent-%COMP%]{display:block;padding:20px 20px 24px}@container appComp (min-width: 1024px){.result-title[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:38px}}.va-result-image[_ngcontent-%COMP%]{max-width:90px;width:100%}@container appComp (min-width: 1024px){zat-action-button[_ngcontent-%COMP%]{font-size:16px}}zat-action-button[_ngcontent-%COMP%]:not(:last-child){margin-bottom:15px}.tooltip[_ngcontent-%COMP%]{cursor:pointer;width:16px;height:16px;background-image:url(icon_info.0e6185d3fa601b34.svg);background-size:16px;background-repeat:no-repeat;padding:0;border:none}  .tooltip-text{background-color:var(--background-color-primary);width:190px;min-height:95px;color:var(--background-color-primary-invert)!important;padding:12px 15px;font-size:14px;font-weight:500;text-align:left;border:3px solid var(--background-color-primary-invert);box-sizing:border-box;border-radius:0!important}@container appComp (min-width: 1024px){  .tooltip-text{width:220px;min-height:110px}}footer[_ngcontent-%COMP%]{background-color:var(--background-color-dark-03);height:440px}.va-content-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 1 50%}@container appComp (min-width: 1024px){  .individual-result .va-content--result{padding-top:0;min-height:auto}}  .individual-result .va-description-image{display:none}@container appComp (min-width: 1024px){  .individual-result .va-content--recommend{min-height:440px}}.icon-small[_ngcontent-%COMP%]{position:absolute}.icon-small-result[_ngcontent-%COMP%]{position:absolute;bottom:-3px;right:-7px}.result-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;padding:24px;border-top:1px solid var(--background-color-light-02)}.va-result-content[_ngcontent-%COMP%]{background-color:var(--background-color-primary);border-radius:8px;box-shadow:2px 4px 16px #19191914}.result-content[_ngcontent-%COMP%]{background-color:var(--bg-color-light);display:flex;flex-direction:row;justify-content:center;height:calc(100% - 64px);overflow-y:scroll}.result-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:24px;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom:1px solid var(--background-color-light-02);background-color:var(--background-color-primary);font:var(--text-hl-xl);color:var(--text-color-headline)}@container appComp (min-width: 768px){.result-head[_ngcontent-%COMP%]{--text-hl-xl: 700 32px/36px var(--font-family-frutiger)}}.result-button[_ngcontent-%COMP%]{width:100%}.result-status-mega-test[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;background-color:var(--background-color-secondary);border-bottom:1px solid var(--background-color-light-04);border-top:1px solid var(--background-color-light-04);min-height:64px}.result-status-mega-test-stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}.stats-title[_ngcontent-%COMP%]{color:var(--text-color-body);font:var(--text-hl-xs)}.ecp-result-exit-btn[_ngcontent-%COMP%]{margin-top:25px}[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.va-description-image[_ngcontent-%COMP%]{position:static}.title[_ngcontent-%COMP%]{margin-left:46px;font-weight:700;font-size:20px;line-height:28px;margin-top:5px}.icon[_ngcontent-%COMP%]{position:absolute;top:50%;right:20px;transform:translateY(-50%);margin-top:3px}.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:16px;height:16px}@container appComp (min-width: 1024px){.icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:22px;height:22px}}',
                  ],
                  data: {
                     animation: [
                        (0, s.X$)("openClose", [
                           (0, s.SB)(
                              "open",
                              (0, s.oB)({
                                 transform: "rotate(0deg)",
                              })
                           ),
                           (0, s.SB)(
                              "closed",
                              (0, s.oB)({
                                 transform: "rotate(180deg)",
                              })
                           ),
                           (0, s.eR)("open => closed", [(0, s.jt)(".4s ease")]),
                           (0, s.eR)("closed => open", [(0, s.jt)(".4s ease")]),
                        ]),
                     ],
                  },
               })),
               a
            );
         })();
         var p,
            ot = o(5330),
            _ = o(7421);
         const it = ["accordion"],
            at = ["panel"];
         function rt(e, a) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "span", 18),
                  t.NdJ("keyup", function (r) {
                     t.CHM(n);
                     const x = t.oxw(2);
                     return t.KtG(x.checkTheKey(r));
                  })("click", function () {
                     t.CHM(n);
                     const r = t.oxw(2);
                     return t.KtG(r.openAll());
                  }),
                  t._uU(1),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw().$implicit;
               t.Q6J("tabIndex", 0), t.xp6(1), t.hij(" ", n("button.showAll"), " ");
            }
         }
         function lt(e, a) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "span", 18),
                  t.NdJ("keyup", function (r) {
                     t.CHM(n);
                     const x = t.oxw(2);
                     return t.KtG(x.checkTheKey(r));
                  })("click", function () {
                     t.CHM(n);
                     const r = t.oxw(2);
                     return t.KtG(r.closeAll());
                  }),
                  t._uU(1),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw().$implicit;
               t.Q6J("tabIndex", 0), t.xp6(1), t.hij(" ", n("button.hideAll"), " ");
            }
         }
         function st(e, a) {
            if (
               (1 & e &&
                  (t.TgZ(0, "mat-expansion-panel", 19, 20)(3, "mat-expansion-panel-header")(4, "mat-panel-title", 21),
                  t._UZ(5, "zat-result-panel-title", 22),
                  t.ALo(6, "async"),
                  t.qZA()(),
                  t._UZ(7, "zat-acuity-test-result", 23),
                  t.ALo(8, "async"),
                  t.ALo(9, "async"),
                  t.ALo(10, "async"),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.MAs(1),
                  i = t.oxw().$implicit,
                  r = t.oxw();
               t.xp6(5),
                  t.Q6J("image", "acuity_test_small")("imageId", "acuityTestSmall")(
                     "testName",
                     i("acuityTest.result.testName")
                  )("expended", n.opened)("result", t.lcZ(6, 8, r.imageAcuitySummarized$)),
                  t.xp6(2),
                  t.Q6J("results", t.lcZ(8, 10, r.vaResult$))("image", t.lcZ(9, 12, r.imageAcuity$))(
                     "vaValues",
                     t.lcZ(10, 14, r.vaValues$)
                  );
            }
         }
         function ct(e, a) {
            if (
               (1 & e &&
                  (t.TgZ(0, "mat-expansion-panel", 19, 24)(3, "mat-expansion-panel-header")(4, "mat-panel-title", 21),
                  t._UZ(5, "zat-result-panel-title", 22),
                  t.ALo(6, "async"),
                  t.qZA()(),
                  t._UZ(7, "zat-contrast-test-result", 25),
                  t.ALo(8, "async"),
                  t.ALo(9, "async"),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.MAs(1),
                  i = t.oxw().$implicit,
                  r = t.oxw();
               t.xp6(5),
                  t.Q6J("image", "contrast_test_small")("imageId", "contrastTestSmall")(
                     "testName",
                     i("contrastTest.result.testName")
                  )("expended", n.opened)("result", t.lcZ(6, 7, r.imageContrastSummarized$)),
                  t.xp6(2),
                  t.Q6J("results", t.lcZ(8, 9, r.contrastResults$))("image", t.lcZ(9, 11, r.imageContrast$));
            }
         }
         function pt(e, a) {
            if (
               (1 & e &&
                  (t.TgZ(0, "mat-expansion-panel", 19, 26)(3, "mat-expansion-panel-header")(4, "mat-panel-title", 21),
                  t._UZ(5, "zat-result-panel-title", 22),
                  t.ALo(6, "async"),
                  t.qZA()(),
                  t._UZ(7, "zat-color-test-result", 27),
                  t.ALo(8, "async"),
                  t.ALo(9, "async"),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.MAs(1),
                  i = t.oxw().$implicit,
                  r = t.oxw();
               t.xp6(5),
                  t.Q6J("image", "color_test_small")("imageId", "colorTestSmall")(
                     "testName",
                     i("colorTest.result.testName")
                  )("expended", n.opened)("result", t.lcZ(6, 7, r.imageColor$)),
                  t.xp6(2),
                  t.Q6J("image", t.lcZ(8, 9, r.imageColor$))("level", t.lcZ(9, 11, r.level$));
            }
         }
         function gt(e, a) {
            if (
               (1 & e &&
                  (t.TgZ(0, "mat-expansion-panel", 19, 28)(3, "mat-expansion-panel-header")(4, "mat-panel-title", 21),
                  t._UZ(5, "zat-result-panel-title", 22),
                  t.ALo(6, "async"),
                  t.qZA()(),
                  t._UZ(7, "zat-astigmatism-test-result", 25),
                  t.ALo(8, "async"),
                  t.ALo(9, "async"),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.MAs(1),
                  i = t.oxw().$implicit,
                  r = t.oxw();
               t.xp6(5),
                  t.Q6J("image", "astigmatism_test_small")("imageId", "astigmatismTestSmall")(
                     "testName",
                     i("astigmatismTest.result.testName")
                  )("expended", n.opened)("result", t.lcZ(6, 7, r.imageAstigmatismSummarized$)),
                  t.xp6(2),
                  t.Q6J("results", t.lcZ(8, 9, r.resultAstigmatism$))("image", t.lcZ(9, 11, r.imageAstigmatism$));
            }
         }
         function dt(e, a) {
            if (
               (1 & e &&
                  (t.TgZ(0, "mat-expansion-panel", 19, 29)(3, "mat-expansion-panel-header")(4, "mat-panel-title", 21),
                  t._UZ(5, "zat-result-panel-title", 22),
                  t.ALo(6, "async"),
                  t.qZA()(),
                  t.ynx(7),
                  t._UZ(8, "zat-amsler-test-result", 25),
                  t.ALo(9, "async"),
                  t.ALo(10, "async"),
                  t.BQk(),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.MAs(1),
                  i = t.oxw(2).$implicit,
                  r = t.oxw();
               t.xp6(5),
                  t.Q6J("image", "amsler_test_small")("imageId", "amslerTestSmall")(
                     "testName",
                     i("amslerTest.result.testName")
                  )("expended", n.opened)("result", t.lcZ(6, 7, r.imageAmslerSummarized$)),
                  t.xp6(3),
                  t.Q6J("results", t.lcZ(9, 9, r.resultSummary$))("image", t.lcZ(10, 11, r.resultAmsler$));
            }
         }
         function mt(e, a) {
            if (
               (1 & e && (t.TgZ(0, "div"), t.YNc(1, dt, 11, 13, "mat-expansion-panel", 11), t.ALo(2, "async"), t.qZA()),
               2 & e)
            ) {
               const n = t.oxw(2);
               t.xp6(1), t.Q6J("ngIf", !t.lcZ(2, 1, n.isUSMode$));
            }
         }
         function xt(e, a) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "zat-action-button", 30),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const r = t.oxw(2);
                     return t.KtG(r.emitExitEcpResult());
                  }),
                  t._uU(1),
                  t.ALo(2, "async"),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw().$implicit,
                  i = t.oxw();
               let r;
               t.xp6(1),
                  t.hij(
                     " ",
                     null !== (r = t.lcZ(2, 1, i.buttonText$)) && void 0 !== r ? r : n("button.ecpResultExit"),
                     " "
                  );
            }
         }
         function ut(e, a) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "div", 31),
                  t._uU(1),
                  t.TgZ(2, "zat-action-button", 32),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const r = t.oxw(2);
                     return t.KtG(r.handleResultCodeFlow());
                  }),
                  t._uU(3),
                  t.qZA()();
            }
            if (2 & e) {
               const n = t.oxw().$implicit;
               t.xp6(1),
                  t.hij(" ", n("result.generateYourCode"), " "),
                  t.xp6(1),
                  t.Q6J("type", "solid"),
                  t.xp6(1),
                  t.Oqu(n("button.save"));
            }
         }
         function ht(e, a) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "div", 33)(1, "zat-action-button", 34),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const r = t.oxw(2);
                     return t.KtG(r.sendResults());
                  }),
                  t._uU(2),
                  t.qZA()();
            }
            if (2 & e) {
               const n = t.oxw().$implicit;
               t.xp6(2), t.hij(" ", n("button.save"), " ");
            }
         }
         function ft(e, a) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "zat-result-call-to-action", 35),
                  t.NdJ("goToHomepage", function () {
                     t.CHM(n);
                     const r = t.oxw(2);
                     return t.KtG(r.goToHomePage());
                  }),
                  t.ALo(1, "async"),
                  t.ALo(2, "async"),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw(2);
               t.Q6J("isUSChannel", t.lcZ(1, 2, n.appChannel$) === n.AppChannel.US)(
                  "isFRChannel",
                  "fr-FR" === t.lcZ(2, 4, n.locale$)
               );
            }
         }
         function vt(e, a) {
            if (
               (1 & e &&
                  (t.ynx(0, 2),
                  t.TgZ(1, "div", 3)(2, "div", 4, 2)(4, "div", 5)(5, "div", 6)(6, "span"),
                  t._uU(7),
                  t.qZA(),
                  t.YNc(8, rt, 2, 2, "span", 7),
                  t.YNc(9, lt, 2, 2, "span", 7),
                  t.qZA(),
                  t.TgZ(10, "div", 8)(11, "mat-accordion", 9, 10)(13, "div"),
                  t.YNc(14, st, 11, 16, "mat-expansion-panel", 11),
                  t.ALo(15, "async"),
                  t.YNc(16, ct, 10, 13, "mat-expansion-panel", 11),
                  t.ALo(17, "async"),
                  t.YNc(18, pt, 10, 13, "mat-expansion-panel", 11),
                  t.ALo(19, "async"),
                  t.YNc(20, gt, 10, 13, "mat-expansion-panel", 11),
                  t.ALo(21, "async"),
                  t.YNc(22, mt, 3, 3, "div", 12),
                  t.ALo(23, "async"),
                  t.qZA()(),
                  t.YNc(24, xt, 3, 3, "zat-action-button", 13),
                  t.ALo(25, "async"),
                  t.YNc(26, ut, 4, 3, "div", 14),
                  t.ALo(27, "async"),
                  t.ALo(28, "async"),
                  t.YNc(29, ht, 3, 1, "div", 15),
                  t.ALo(30, "async"),
                  t.ALo(31, "async"),
                  t.qZA()(),
                  t.TgZ(32, "div", 16),
                  t.YNc(33, ft, 3, 6, "zat-result-call-to-action", 17),
                  t.ALo(34, "async"),
                  t.qZA()()(),
                  t.BQk()),
               2 & e)
            ) {
               const n = a.$implicit,
                  i = t.oxw();
               t.xp6(7),
                  t.hij(" ", n("defaultTest.result.title"), ""),
                  t.xp6(1),
                  t.Q6J("ngIf", !i.panelState),
                  t.xp6(1),
                  t.Q6J("ngIf", i.panelState),
                  t.xp6(2),
                  t.Q6J("multi", !0),
                  t.xp6(3),
                  t.Q6J("ngIf", t.lcZ(15, 13, i.showAcuity$)),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(17, 15, i.showContrast$)),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(19, 17, i.showColor$)),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(21, 19, i.showAstigmatism$)),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(23, 21, i.showAmsler$)),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(25, 23, i.specialScreeningMode$) === i.SpecialScreeningMode.ECP),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(27, 25, i.showSaveFeature$) && t.lcZ(28, 27, i.isMegaTestActive$)),
                  t.xp6(3),
                  t.Q6J(
                     "ngIf",
                     i.environment.webcomponent &&
                        t.lcZ(30, 29, i.specialScreeningMode$) === i.SpecialScreeningMode.MY_ZEISS &&
                        t.lcZ(31, 31, i.isMegaTestActive$)
                  ),
                  t.xp6(4),
                  t.Q6J(
                     "ngIf",
                     !i.isWebcomponent && t.lcZ(34, 33, i.specialScreeningMode$) === i.SpecialScreeningMode.MY_ZEISS
                  );
            }
         }
         let O =
            (((p = class {
               onPopState() {
                  f.N.webcomponent || (history.pushState(null, null, location.href), this.triggerCloseWarning());
               }
               constructor(a, n, i, r, x, bt) {
                  (this.store = a),
                     (this.logger = n),
                     (this.generalService = i),
                     (this.locationService = r),
                     (this.transloco = x),
                     (this.analytics = bt),
                     (this.specialScreeningMode$ = this.store.select(T.P2)),
                     (this.SpecialScreeningMode = $.i),
                     (this.environment = f.N),
                     (this.isWebcomponent = f.N.webcomponent),
                     (this.vaResult$ = this.store.select(d.LO.fh)),
                     (this.vaValues$ = this.store.select(d.LO.vS)),
                     (this.imageAcuity$ = this.store.select(d.LO.D)),
                     (this.imageAcuitySummarized$ = this.store.select(d.LO.jT)),
                     (this.contrastResults$ = this.store.select(y.zX.q3)),
                     (this.imageContrast$ = this.store.select(y.zX.D)),
                     (this.imageContrastSummarized$ = this.store.select(y.zX.jT)),
                     (this.percent$ = this.store.select(m.H2.OY)),
                     (this.level$ = this.store.select(m.H2.Wv)),
                     (this.imageColor$ = this.store.select(m.H2.D)),
                     (this.resultAstigmatism$ = this.store.select(g.Pg.P7)),
                     (this.resultAstigmatismSmiley$ = this.store.select(g.Pg.nC)),
                     (this.imageAstigmatism$ = this.store.select(g.Pg.D)),
                     (this.imageAstigmatismSummarized$ = this.store.select(g.Pg.jT)),
                     (this.resultAmsler$ = this.store.select(C.t7.O7)),
                     (this.resultSummary$ = this.store.select(C.t7.mh)),
                     (this.imageAmslerSummarized$ = this.store.select(C.t7.jT)),
                     (this.appChannel$ = this.store.select(v.f.mr)),
                     (this.locale$ = this.store.select(v.f.Kd)),
                     (this.TEST_TYPES = c.P),
                     (this.isMegaTestActive$ = this.store.select(v.f.Wk)),
                     (this.buttonText$ = this.store.select(T.Xg)),
                     (this.showSaveFeature$ = this.generalService.showImportSaveOption$()),
                     (this.isUSMode$ = this.generalService.hideLastTest$()),
                     (this.env = f.N),
                     (this.showAmsler$ = this.store.select(C.t7.I9)),
                     (this.showAstigmatism$ = this.store.select(g.Pg.Xb)),
                     (this.showColor$ = this.store.select(m.H2.I9)),
                     (this.showContrast$ = this.store.select(y.zX.Xb)),
                     (this.showAcuity$ = this.store.select(d.LO.Xb)),
                     (this.ColorResultLevels = J.i),
                     (this.levels = E.d),
                     (this.AppChannel = j.ti),
                     (this.headerConfig = {
                        label: P.cr.CheckResult,
                        left: P.EO.Empty,
                        right: P.EO.Close,
                        theme: P.dW.LightMode,
                     }),
                     (this.accordionState = !1),
                     history.pushState(null, null, location.href);
               }
               ngOnInit() {}
               ngAfterViewInit() {
                  this.panels.changes
                     .pipe(
                        (0, k.b)((a) => {
                           if (this.panels && 1 === this.panels.length) for (let n of this.panels) n.expanded = !0;
                        })
                     )
                     .subscribe();
               }
               ngOnDestroy() {}
               get panelState() {
                  if (void 0 !== this.panels)
                     return this.panels.find((a) => !0 === a.expanded)
                        ? ((this.accordionState = !0), !0)
                        : ((this.accordionState = !1), !1);
               }
               handleResultCodeFlow() {
                  this.store.dispatch((0, M.SaveAndGenerateResultCodeAction)());
               }
               emitExitEcpResult() {
                  this.store.dispatch((0, M.ExitEcpResultAction)());
               }
               triggerCloseWarning() {
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${l.GU.CTA}`,
                     eventAction: `${l.Br.Click}`,
                     eventType: `${l.o6.Internal}`,
                     eventValue: `${l.Vy.ExitResultPage}`,
                     eventDetail: `${l.xP.ResultPage} - ${l.xP.Summary}`,
                  }),
                     this.specialScreeningMode$.pipe((0, I.g)(0), (0, Z.q)(1)).subscribe((a) => {
                        this.store.dispatch(
                           m.Ww.ShowCloseWarningAction({
                              context: a === $.i.ECP ? S.j.ResultECP : S.j.ResultNotECP,
                              previousPath: this.locationService.path(),
                           })
                        );
                     });
               }
               goToHomePage() {
                  this.store.dispatch((0, M.OpenHomePageAction)());
               }
               startTest() {
                  this.store.dispatch(b.wV.ClearAllTests()),
                     this.store.dispatch(b.wV.RunMegaTest()),
                     this.store.dispatch(
                        b.wV.SetActiveTest({
                           testType: c.P.ACUITY,
                        })
                     ),
                     this.store
                        .select(v.f.Xm)
                        .pipe(
                           (0, N.h)((a) => a === c.P.ACUITY),
                           (0, Z.q)(1)
                        )
                        .subscribe(() => {
                           this.generalService.routeToNextScreen(F.a.CalibrateBrightness);
                        });
               }
               sendResults() {
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${l.GU.CTA}`,
                     eventAction: `${l.Br.Click}`,
                     eventType: `${l.o6.Internal}`,
                     eventValue: `${l.Vy.SaveResults}`,
                     eventDetail: `${l.xP.ResultPage} - ${l.xP.Summary}`,
                  }),
                     this.logger.info("### Send result", "Mega-test"),
                     this.store.dispatch((0, Q.SendResultsAction)());
               }
               openAll() {
                  this.accordion.openAll();
               }
               closeAll() {
                  this.accordion.closeAll();
               }
               checkTheKey(a) {
                  console.log("### this.panelState", this.panelState),
                     ("Space" === a.code || "Enter" === a.code) && (this.panelState ? this.closeAll() : this.openAll());
               }
            }).ɵfac = function (a) {
               return new (a || p)(t.Y36(U.yh), t.Y36(Y.r), t.Y36(H.m), t.Y36(u.Ye), t.Y36(h.Vn), t.Y36(B.y));
            }),
            (p.ɵcmp = t.Xpm({
               type: p,
               selectors: [["zat-result-page"]],
               viewQuery: function (a, n) {
                  if ((1 & a && (t.Gf(it, 5), t.Gf(at, 5)), 2 & a)) {
                     let i;
                     t.iGM((i = t.CRH())) && (n.accordion = i.first), t.iGM((i = t.CRH())) && (n.panels = i);
                  }
               },
               hostBindings: function (a, n) {
                  1 & a &&
                     t.NdJ(
                        "popstate",
                        function (r) {
                           return n.onPopState(r);
                        },
                        !1,
                        t.Jf7
                     );
               },
               decls: 2,
               vars: 4,
               consts: [
                  [3, "label", "left", "right", "theme", "clickRight"],
                  ["content", "", 4, "transloco"],
                  ["content", ""],
                  [1, "result-wrapper"],
                  [1, "va-content", "no-bottom-padding"],
                  [1, "va-result-content"],
                  [1, "result-head"],
                  ["class", "show-all-link", 3, "tabIndex", "keyup", "click", 4, "ngIf"],
                  [1, "va-content-container"],
                  [1, "va-accordion", 3, "multi"],
                  ["accordion", "matAccordion"],
                  ["hideToggle", "", 4, "ngIf"],
                  [4, "ngIf"],
                  ["class", "ecp-result-exit-btn", "type", "outline", "size", "small-medium", 3, "click", 4, "ngIf"],
                  ["class", "save-result-cta", 4, "ngIf"],
                  ["class", "result-btn", 4, "ngIf"],
                  [1, "individual-result", "sticky"],
                  [3, "isUSChannel", "isFRChannel", "goToHomepage", 4, "ngIf"],
                  [1, "show-all-link", 3, "tabIndex", "keyup", "click"],
                  ["hideToggle", ""],
                  ["acuityPanel", "", "panel", "matExpansionPanel"],
                  [1, "panel-title"],
                  [3, "image", "imageId", "testName", "expended", "result"],
                  [1, "individual-result", 3, "results", "image", "vaValues"],
                  ["contrastPanel", "", "panel", "matExpansionPanel"],
                  [1, "individual-result", 3, "results", "image"],
                  ["colorPanel", "", "panel", "matExpansionPanel"],
                  [1, "individual-result", 3, "image", "level"],
                  ["astigmatismPanel", "", "panel", "matExpansionPanel"],
                  ["amslerPanel", "", "panel", "matExpansionPanel"],
                  ["type", "outline", "size", "small-medium", 1, "ecp-result-exit-btn", 3, "click"],
                  [1, "save-result-cta"],
                  [3, "type", "click"],
                  [1, "result-btn"],
                  ["color", "primary", "type", "solid", "data-testid", "button-mega-result-save", 3, "click"],
                  [3, "isUSChannel", "isFRChannel", "goToHomepage"],
               ],
               template: function (a, n) {
                  1 & a &&
                     (t.TgZ(0, "zat-ovs-header", 0),
                     t.NdJ("clickRight", function () {
                        return n.triggerCloseWarning();
                     }),
                     t.qZA(),
                     t.YNc(1, vt, 35, 35, "ng-container", 1)),
                     2 & a &&
                        t.Q6J("label", n.headerConfig.label)("left", n.headerConfig.left)(
                           "right",
                           n.headerConfig.right
                        )("theme", n.headerConfig.theme);
               },
               dependencies: [u.O5, G.x, K.s, X.M, V.h, W.Q, D.$, q.X, nt, ot.P, _.pp, _.ib, _.yz, _.yK, h.KI, u.Ov],
               styles: [
                  '[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.va-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.va-content.no-bottom-padding[_ngcontent-%COMP%]{padding-bottom:0}.va-content--result[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;text-align:center;background-color:var(--background-color-primary);padding:24px;box-sizing:border-box;border-radius:8px}.va-content--result[_ngcontent-%COMP%]   .va-description[_ngcontent-%COMP%]{margin-bottom:16px;margin-top:24px}.single-row[_ngcontent-%COMP%]   .va-content--result[_ngcontent-%COMP%]{width:100%}.va-content--mega-test[_ngcontent-%COMP%]{padding:24px;text-align:center}.va-content-container[_ngcontent-%COMP%]{width:312px}.webcomponent[_ngcontent-%COMP%]{display:inline-block}.va-values[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:flex;flex-direction:row;justify-content:center}.va-column[_ngcontent-%COMP%]{width:140px}.va-column[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{overflow:visible}.va-label[_ngcontent-%COMP%]{font:var(--text-eyebrow);color:var(--text-color-headline);margin-top:8px;text-transform:uppercase}.va-label--mb[_ngcontent-%COMP%]{margin-bottom:10px}.va-label--mt[_ngcontent-%COMP%]{margin-top:5px}.va-description[_ngcontent-%COMP%]{text-align:center;margin:0;font:var(--text-body-m);color:var(--text-color-headline)}.save-result-cta[_ngcontent-%COMP%]{padding:24px 0 0;font-family:ZEISS Frutiger Next;font-size:16px;font-weight:700;line-height:24px;display:flex;flex-direction:column;gap:16px}.save-result-cta[_ngcontent-%COMP%]:before{content:"";border:1px solid #ECF0F4;margin:0 -24px}.va-description-image[_ngcontent-%COMP%]{display:flex;align-items:start;flex-direction:row;justify-content:space-between;position:relative;font-size:21px;line-height:1.285;font-weight:500}.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:16px;width:30px;height:30px}@container appComp (min-width: 1024px){.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}}.va-description-image[_ngcontent-%COMP%]:after{content:""}.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{padding-top:5px;padding-left:46px;font:var(--text-hl-l);color:var(--text-color-headline);font-size:30px}@container appComp (min-width: 768px){.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{--text-hl-l: 700 28px/32px var(--font-family-frutiger)}}.result-title[_ngcontent-%COMP%]{display:block;padding:20px 20px 24px}@container appComp (min-width: 1024px){.result-title[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:38px}}.va-result-image[_ngcontent-%COMP%]{max-width:90px;width:100%}@container appComp (min-width: 1024px){zat-action-button[_ngcontent-%COMP%]{font-size:16px}}zat-action-button[_ngcontent-%COMP%]:not(:last-child){margin-bottom:15px}.tooltip[_ngcontent-%COMP%]{cursor:pointer;width:16px;height:16px;background-image:url(icon_info.0e6185d3fa601b34.svg);background-size:16px;background-repeat:no-repeat;padding:0;border:none}  .tooltip-text{background-color:var(--background-color-primary);width:190px;min-height:95px;color:var(--background-color-primary-invert)!important;padding:12px 15px;font-size:14px;font-weight:500;text-align:left;border:3px solid var(--background-color-primary-invert);box-sizing:border-box;border-radius:0!important}@container appComp (min-width: 1024px){  .tooltip-text{width:220px;min-height:110px}}footer[_ngcontent-%COMP%]{background-color:var(--background-color-dark-03);height:440px}.va-content-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 1 50%}@container appComp (min-width: 1024px){  .individual-result .va-content--result{padding-top:0;min-height:auto}}  .individual-result .va-description-image{display:none}@container appComp (min-width: 1024px){  .individual-result .va-content--recommend{min-height:440px}}.icon-small[_ngcontent-%COMP%]{position:absolute}.icon-small-result[_ngcontent-%COMP%]{position:absolute;bottom:-3px;right:-7px}.result-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;padding:24px;border-top:1px solid var(--background-color-light-02)}.va-result-content[_ngcontent-%COMP%]{background-color:var(--background-color-primary);border-radius:8px;box-shadow:2px 4px 16px #19191914}.result-content[_ngcontent-%COMP%]{background-color:var(--bg-color-light);display:flex;flex-direction:row;justify-content:center;height:calc(100% - 64px);overflow-y:scroll}.result-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:24px;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom:1px solid var(--background-color-light-02);background-color:var(--background-color-primary);font:var(--text-hl-xl);color:var(--text-color-headline)}@container appComp (min-width: 768px){.result-head[_ngcontent-%COMP%]{--text-hl-xl: 700 32px/36px var(--font-family-frutiger)}}.result-button[_ngcontent-%COMP%]{width:100%}.result-status-mega-test[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;background-color:var(--background-color-secondary);border-bottom:1px solid var(--background-color-light-04);border-top:1px solid var(--background-color-light-04);min-height:64px}.result-status-mega-test-stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}.stats-title[_ngcontent-%COMP%]{color:var(--text-color-body);font:var(--text-hl-xs)}.ecp-result-exit-btn[_ngcontent-%COMP%]{margin-top:25px}[_nghost-%COMP%]{flex-grow:1;overflow-y:hidden}.va-content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.va-content-container[_ngcontent-%COMP%]   .ecp-result-exit-btn[_ngcontent-%COMP%]{margin:24px}.va-content-container[_ngcontent-%COMP%]   .save-result-cta[_ngcontent-%COMP%]{padding:20px}.va-content-container[_ngcontent-%COMP%]   .save-result-cta[_ngcontent-%COMP%]:before{content:none!important}.individual-result[_ngcontent-%COMP%]{display:block;order:2}[_nghost-%COMP%]     .individual-result.sticky .va-content--recommend{position:sticky;top:80px;margin-bottom:28px;width:312px}@container appComp (min-width: 768px){[_nghost-%COMP%]     .individual-result.sticky .va-content--recommend{margin:0 12px;width:308px}}[_nghost-%COMP%]     .ovs-header{background:var(--bg-color-light)!important}[_nghost-%COMP%]     .va-result-content{width:312px}@container appComp (min-width: 768px){[_nghost-%COMP%]     .va-result-content{width:308px;margin:0 12px}}[_nghost-%COMP%]     .va-result-content .result-head{flex-direction:column}[_nghost-%COMP%]     .va-result-content .result-head span{text-align:center}[_nghost-%COMP%]     .va-result-content .result-head zat-action-button button{padding:0 24px}mat-panel-description[_ngcontent-%COMP%]{justify-content:flex-end;padding-right:10px}.va-content--recommend[_ngcontent-%COMP%]{margin-left:0;display:flex;flex-direction:column}mat-expansion-panel-header[_ngcontent-%COMP%]{background-color:var(--background-color-primary)!important}@container appComp (min-width: 1024px){mat-expansion-panel-header[_ngcontent-%COMP%]{margin-right:0!important;padding-left:20px!important}}mat-expansion-panel-header[_ngcontent-%COMP%]:not(.mat-expanded){background-color:var(--background-color-primary)}mat-expansion-panel[_ngcontent-%COMP%]:last-child   mat-expansion-panel-header[_ngcontent-%COMP%]{margin-bottom:0;background-color:var(--background-color-primary);padding:0 24px;box-shadow:none!important}mat-expansion-panel[_ngcontent-%COMP%]{width:312px;border-bottom:1px solid var(--bg-color-light)!important;padding:24px 0;box-shadow:none!important}@container appComp (min-width: 768px){mat-expansion-panel[_ngcontent-%COMP%]{width:308px}}zat-result-panel-description[_ngcontent-%COMP%]{width:38px;height:38px}.accordion-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;box-sizing:border-box;height:80px;order:1;margin-top:10px;margin-bottom:16px}.accordion-buttons-native[_ngcontent-%COMP%]{justify-content:space-between;margin-top:0}@container appComp (min-width: 1024px){[_nghost-%COMP%]  .accordion-buttons zat-action-button span{font-size:18px}}.delete-button[_ngcontent-%COMP%]{padding:12px}.va-accordion[_ngcontent-%COMP%]{order:0}.no-results-content[_ngcontent-%COMP%]{box-sizing:border-box;width:100%;padding-bottom:20px;padding-top:160px;display:flex;flex-direction:column;align-items:center;justify-content:space-between}.info-text[_ngcontent-%COMP%]{margin-bottom:20px;width:80%;text-align:center}.image[_ngcontent-%COMP%]{position:relative;text-align:center;flex-grow:1;display:flex;flex-direction:column;justify-content:center;margin-bottom:30px}.monitoring-tab[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.monitoring-tab-full-width[_ngcontent-%COMP%]{padding-top:10px;margin-left:0;width:100%;z-index:9}.monitoring-input[_ngcontent-%COMP%]{width:99%;height:44px;border:2px solid var(--background-color-primary-invert);font-family:ZEISS Frutiger Next,sans-serif;font-weight:500;font-size:18pt;border-radius:0!important;text-align:center}.monitoring-options[_ngcontent-%COMP%]{z-index:15;background:var(--background-color-primary)!important;font-size:18px}.va-content[_ngcontent-%COMP%]{padding:0 24px;margin:0;width:100%;background-color:var(--bg-color-light)}@container appComp (min-width: 768px){.va-content[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:flex-start}}.va-content[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{border:1px solid transparent;border-radius:3px}.va-content[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:focus{color:var(--color-interaction-focused);border-color:var(--color-interaction-focused)}.va-content[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]:focus:not(:focus-visible){border-color:transparent}[_nghost-%COMP%]  .mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-10%) translate(-10%)!important;padding:10px}  .mat-form-field-appearance-fill .mat-form-field-flex{padding:0!important}  .mat-select-value{padding-top:8px}  .mat-select-panel .mat-option{font-size:22px!important;font-family:ZEISS Frutiger Next,sans-serif;font-weight:500;text-align:center}  .mat-select-panel{min-width:101%!important;position:absolute;left:14px;top:46px;border-radius:0!important}.result-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;padding:24px;border-top:1px solid var(--bg-color-light)}.panel-title[_ngcontent-%COMP%]{min-height:30px}.result-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;background-color:var(--bg-color-light);height:calc(100% - 64px);overflow-y:scroll}.show-all-link[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:right;font:var(--text-link-m);color:var(--primary-blue);border:1px solid transparent}.show-all-link[_ngcontent-%COMP%]:focus{color:var(--color-interaction-focused);border-color:var(--color-interaction-focused)}.show-all-link[_ngcontent-%COMP%]:focus:not(:focus-visible){border-color:transparent}.show-all-link[_ngcontent-%COMP%]:hover{color:var(--primary-hover-blue)}',
               ],
               data: {
                  animation: [L.BX],
               },
               changeDetection: 0,
            })),
            p);
         O = (0, z.gn)([(0, R.c)()], O);
         const Ct = [
            {
               path: "check/result",
               component: O,
               data: {
                  animation: "MegaTestResult",
               },
            },
            {
               path: c.P.ACUITY,
               loadChildren: () =>
                  Promise.resolve()
                     .then(o.bind(o, 9270))
                     .then((e) => e.AcuityTestModule),
            },
            {
               path: c.P.CONTRAST,
               loadChildren: () =>
                  Promise.resolve()
                     .then(o.bind(o, 5079))
                     .then((e) => e.ContrastTestModule),
            },
            {
               path: c.P.COLOR,
               loadChildren: () =>
                  Promise.resolve()
                     .then(o.bind(o, 9186))
                     .then((e) => e.ColorTestModule),
            },
            {
               path: c.P.ASTIGMATISM,
               loadChildren: () =>
                  Promise.resolve()
                     .then(o.bind(o, 5064))
                     .then((e) => e.AstigmatismTestModule),
            },
            {
               path: c.P.AMSLER,
               loadChildren: () =>
                  Promise.resolve()
                     .then(o.bind(o, 4818))
                     .then((e) => e.AmslerTestModule),
            },
         ];
         let yt = (() => {
            var e;
            class a {}
            return (
               ((e = a).ɵfac = function (i) {
                  return new (i || e)();
               }),
               (e.ɵmod = t.oAB({
                  type: e,
               })),
               (e.ɵinj = t.cJS({
                  imports: [A.Bz.forChild(Ct), A.Bz],
               })),
               a
            );
         })();
         var Pt = o(2337),
            _t = o(1056);
         let Mt = (() => {
            var e;
            class a {}
            return (
               ((e = a).ɵfac = function (i) {
                  return new (i || e)();
               }),
               (e.ɵmod = t.oAB({
                  type: e,
               })),
               (e.ɵinj = t.cJS({
                  imports: [u.ez, yt, Pt.o, _t.M, h.y4],
               })),
               a
            );
         })();
      },
   },
]);
