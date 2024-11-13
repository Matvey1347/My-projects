"use strict";
(self.webpackChunkonline_vision_screening = self.webpackChunkonline_vision_screening || []).push([
   ["src_app_acuity-test_acuity-check_acuity-check_module_ts"],
   {
      9660: (ee, E, a) => {
         a.r(E),
            a.d(E, {
               AcuityCheckModule: () => Xt,
               playerFactory: () => D,
            });
         var g = a(6814),
            _ = a(6560),
            I = a(9777),
            R = a(8862),
            j = a(2315),
            b = a(7850),
            L = a(1056),
            U = a(2337),
            t = a(5879);
         let B = (() => {
            var e;
            class i {}
            return (
               ((e = i).ɵfac = function (o) {
                  return new (o || e)();
               }),
               (e.ɵmod = t.oAB({
                  type: e,
               })),
               (e.ɵinj = t.cJS({
                  imports: [g.ez, b.Bz, _.y4, L.M, U.o, g.ez],
               })),
               i
            );
         })();
         var N = a(7582),
            p = a(1791),
            K = a(8645),
            J = a(5619),
            X = a(2572),
            q = a(2096),
            tt = a(7398),
            A = a(9397),
            et = a(2181),
            F = a(932),
            w = a(8180),
            C = a(553),
            nt = a(6856),
            y = a(1345),
            Y = a(3576),
            r = a(1992),
            V = a(2622),
            u = a(3069),
            h = a(3876),
            P = a(8485),
            s = a(9271),
            it = a(9667),
            x = a(7088),
            d = a(9224),
            T = a(996),
            k = a(676),
            ot = a(215),
            H = a(7090),
            Q = a(4704),
            ct = a(607),
            M = a(3005),
            at = a(5561),
            Z = a(5330),
            st = a(484),
            rt = a(4666),
            lt = a(5405),
            gt = a(2921);
         const ht = ["scrollableElement"];
         function pt(e, i) {
            if ((1 & e && t._UZ(0, "zat-how-it-works-checks-general", 14), 2 & e)) {
               const n = t.oxw(2);
               t.Q6J("coverEye", n.instructions.COVER_RIGHT_EYE)("distance", n.instructions.KEEP_AN_ARM);
            }
         }
         function ut(e, i) {
            if ((1 & e && t._UZ(0, "zat-how-it-works-checks-general", 14), 2 & e)) {
               const n = t.oxw(2);
               t.Q6J("coverEye", n.instructions.COVER_LEFT_EYE)("distance", n.instructions.KEEP_AN_ARM);
            }
         }
         function dt(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "div", 1)(1, "zat-ovs-header", 2),
                  t.NdJ("clickLeft", function () {
                     t.CHM(n);
                     const c = t.oxw();
                     return t.KtG(c.closeHint());
                  }),
                  t.qZA(),
                  t.TgZ(2, "div", 3, 4)(4, "div", 5),
                  t._uU(5),
                  t.qZA(),
                  t.TgZ(6, "div", 6),
                  t.ynx(7, 7),
                  t.ALo(8, "async"),
                  t.YNc(9, pt, 1, 2, "zat-how-it-works-checks-general", 8),
                  t.YNc(10, ut, 1, 2, "zat-how-it-works-checks-general", 8),
                  t.BQk(),
                  t.TgZ(11, "div", 9)(12, "div", 10),
                  t._UZ(13, "ng-lottie", 11),
                  t.qZA(),
                  t.TgZ(14, "div", 12)(15, "span", 13),
                  t._uU(16, "3) "),
                  t.qZA(),
                  t.TgZ(17, "span"),
                  t._uU(18),
                  t.qZA()()()(),
                  t._UZ(19, "zat-how-it-works-general"),
                  t.qZA()();
            }
            if (2 & e) {
               const n = i.$implicit,
                  o = t.oxw();
               t.xp6(1),
                  t.Q6J("label", o.headerConfig.label)("left", o.headerConfig.left)("right", o.headerConfig.right)(
                     "theme",
                     o.headerConfig.theme
                  ),
                  t.xp6(4),
                  t.hij(" ", n("howItWorks.title"), " "),
                  t.xp6(2),
                  t.Q6J("ngSwitch", t.lcZ(8, 10, o.activeEye$)),
                  t.xp6(2),
                  t.Q6J("ngSwitchCase", o.eyes.LEFT),
                  t.xp6(1),
                  t.Q6J("ngSwitchCase", o.eyes.RIGHT),
                  t.xp6(3),
                  t.Q6J("options", o.optionsAcuity),
                  t.xp6(5),
                  t.hij(" ", n("check.hint.markTheGap"), " ");
            }
         }
         let _t = (() => {
            var e;
            class i {
               constructor(o, c) {
                  (this.store = o),
                     (this.generalService = c),
                     (this.clickClose = new t.vpe()),
                     (this.Eyes = d.w9),
                     (this.TEST_TYPES = x.P),
                     (this.activeEye$ = this.store.select(st.Um)),
                     (this.eyes = d.w9),
                     (this.environment = C.N),
                     (this.instructions = d.vr),
                     (this.optionsAcuity = null),
                     (this.headerConfig = {
                        left: h.EO.Back,
                        right: h.EO.Empty,
                        label: h.cr.AcuityCheck,
                        theme: h.dW.LightMode,
                     });
               }
               ngOnInit() {
                  this.optionsAcuity = this.generalService.getLottieOptions(rt.r.VaCheck);
               }
               ngAfterViewInit() {
                  this.scrollableElement.nativeElement.focus();
               }
               closeHint() {
                  this.clickClose.emit();
               }
            }
            return (
               ((e = i).ɵfac = function (o) {
                  return new (o || e)(t.Y36(k.yh), t.Y36(M.m));
               }),
               (e.ɵcmp = t.Xpm({
                  type: e,
                  selectors: [["zat-how-it-works-acuity-page"]],
                  viewQuery: function (o, c) {
                     if ((1 & o && t.Gf(ht, 5), 2 & o)) {
                        let l;
                        t.iGM((l = t.CRH())) && (c.scrollableElement = l.first);
                     }
                  },
                  outputs: {
                     clickClose: "clickClose",
                  },
                  decls: 1,
                  vars: 0,
                  consts: [
                     ["class", "how-it-works", 4, "transloco"],
                     [1, "how-it-works"],
                     [3, "label", "left", "right", "theme", "clickLeft"],
                     ["tabindex", "0", 1, "how-it-works-content"],
                     ["scrollableElement", ""],
                     [1, "headline"],
                     [1, "check-hint"],
                     [3, "ngSwitch"],
                     [3, "coverEye", "distance", 4, "ngSwitchCase"],
                     [1, "hint"],
                     [1, "media-space"],
                     ["alt", "", 1, "animation", 3, "options"],
                     [1, "text-space"],
                     [1, "text-highlight"],
                     [3, "coverEye", "distance"],
                  ],
                  template: function (o, c) {
                     1 & o && t.YNc(0, dt, 20, 12, "div", 0);
                  },
                  dependencies: [g.RF, g.n9, _.KI, Z.P, lt.I, gt.F, I.e$, g.Ov],
                  styles: [
                     "[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.how-it-works[_ngcontent-%COMP%]{height:100%;width:100%;background:var(--bg-color-light);display:flex;flex-direction:column;align-items:center;overflow:hidden}.how-it-works[_ngcontent-%COMP%]   zat-ovs-header[_ngcontent-%COMP%]{width:100%}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]{overflow-y:scroll;width:100%;max-width:560px;max-height:calc(100% - 64px);display:flex;flex-direction:column;align-items:center;padding:0 24px;outline:none!important}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]{text-align:center;font:var(--text-hl-xl);color:var(--text-color-headline)}@container appComp (min-width: 768px){.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]{--text-hl-xl: 700 32px/36px var(--font-family-frutiger)}}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .check-hint[_ngcontent-%COMP%]{max-width:560px;padding-left:24px;padding-right:24px;padding-bottom:40px;border-bottom:1px solid var(--border-color-inactive)}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .check-hint[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]{margin-top:40px;display:flex}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .check-hint[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]   .media-space[_ngcontent-%COMP%]{min-width:128px;max-width:184px}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .check-hint[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]   .media-space[_ngcontent-%COMP%]   .animation[_ngcontent-%COMP%]{display:flex;width:96px}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .check-hint[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]   .media-space[_ngcontent-%COMP%]   zat-animate-cover-eye[_ngcontent-%COMP%]{transform:scale(.48)}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .check-hint[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]   .text-space[_ngcontent-%COMP%]{width:100%;font:var(--text-body-l);color:var(--text-color-body);text-align:left}.how-it-works[_ngcontent-%COMP%]   .how-it-works-content[_ngcontent-%COMP%]   .check-hint[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]   .text-space[_ngcontent-%COMP%]   .text-highlight[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]{position:absolute;height:100%}",
                  ],
               })),
               i
            );
         })();
         var m;
         function xt(e, i) {
            if (
               (1 & e &&
                  (t.ynx(0), t.TgZ(1, "label", 10), t._uU(2, "1) "), t.qZA(), t._UZ(3, "label", 11)(4, "br"), t.BQk()),
               2 & e)
            ) {
               const n = t.oxw(2).$implicit;
               t.xp6(3), t.Q6J("innerHtml", n("check.hint.eyeCover.right"), t.oJD);
            }
         }
         function mt(e, i) {
            if ((1 & e && (t.TgZ(0, "label", 10), t._uU(1, "1) "), t.qZA(), t._UZ(2, "label", 11)(3, "br")), 2 & e)) {
               const n = t.oxw(2).$implicit;
               t.xp6(2), t.Q6J("innerHtml", n("check.hint.eyeCover.left"), t.oJD);
            }
         }
         function vt(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "div", 5)(1, "zat-ovs-header", 6),
                  t.NdJ("clickLeft", function () {
                     t.CHM(n);
                     const c = t.oxw(2);
                     return t.KtG(c.openInfo());
                  })("clickRight", function () {
                     t.CHM(n);
                     const c = t.oxw(2);
                     return t.KtG(c.cross());
                  }),
                  t.qZA(),
                  t.TgZ(2, "div", 7),
                  t.YNc(3, xt, 5, 1, "ng-container", 8),
                  t.YNc(4, mt, 4, 1, "ng-template", null, 9, t.W1O),
                  t.TgZ(6, "label", 10),
                  t._uU(7, "2) "),
                  t.qZA(),
                  t._UZ(8, "label", 11)(9, "br"),
                  t.TgZ(10, "label", 10),
                  t._uU(11, "3) "),
                  t.qZA(),
                  t._UZ(12, "label", 11),
                  t.qZA(),
                  t.TgZ(13, "div", 12)(14, "div", 13)(15, "div", 14)(16, "div", 15),
                  t.O4$(),
                  t.TgZ(17, "svg", 16),
                  t.NdJ("@landoltCAnimation.done", function (c) {
                     t.CHM(n);
                     const l = t.oxw(2);
                     return t.KtG(l.onLandoltCAnimationDone(c));
                  }),
                  t.ALo(18, "async"),
                  t.ALo(19, "async"),
                  t._UZ(20, "path", 17),
                  t.qZA()()(),
                  t.kcU(),
                  t.TgZ(21, "div", 18)(22, "zat-pizza-control", 19),
                  t.NdJ("idle", function () {
                     t.CHM(n);
                     const c = t.oxw(2);
                     return t.KtG((c.landoltCAnimationState = "idle"));
                  })("init", function () {
                     t.CHM(n);
                     const c = t.oxw(2);
                     return t.KtG((c.landoltCAnimationState = "init"));
                  })("done", function (c) {
                     t.CHM(n);
                     const l = t.oxw(2);
                     return t.KtG(l.onComplete(c));
                  }),
                  t.qZA()()()()();
            }
            if (2 & e) {
               const n = t.MAs(5),
                  o = t.oxw().$implicit,
                  c = t.oxw();
               t.xp6(1),
                  t.Q6J("label", c.headerConfig.label)("left", c.headerConfig.left)("right", c.headerConfig.right)(
                     "theme",
                     c.headerConfig.theme
                  ),
                  t.xp6(2),
                  t.Q6J("ngIf", c.activeEye === c.Eyes.LEFT)("ngIfElse", n),
                  t.xp6(5),
                  t.Q6J("innerHtml", o("check.hint.keepArmsLength"), t.oJD),
                  t.xp6(4),
                  t.Q6J("innerHtml", o("check.hint.markTheGap"), t.oJD),
                  t.xp6(4),
                  t.Q6J("@fadeIn", void 0),
                  t.xp6(1),
                  t.Udp("width", t.lcZ(18, 16, c.width$) + "px")(
                     "transform",
                     "rotate(" + t.lcZ(19, 18, c.rotationAngle$) + "deg)"
                  ),
                  t.Q6J("@landoltCAnimation", c.landoltCAnimationState),
                  t.xp6(5),
                  t.Q6J("angle", c.cAngle)("checkType", c.checkType);
            }
         }
         function ft(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "zat-how-it-works-acuity-page", 20),
                  t.NdJ("clickClose", function () {
                     t.CHM(n);
                     const c = t.oxw(2);
                     return t.KtG(c.closeHint());
                  }),
                  t.qZA();
            }
         }
         function Ct(e, i) {
            if ((1 & e && (t.TgZ(0, "strong"), t._uU(1), t.qZA()), 2 & e)) {
               const n = t.oxw(3);
               t.xp6(1), t.Oqu(n.lastIsCorrectValue ? "Correct" : "Wrong");
            }
         }
         function yt(e, i) {
            1 & e && t._uU(0, "-");
         }
         function Pt(e, i) {
            if (
               (1 & e &&
                  (t.TgZ(0, "div", 21)(1, "div")(2, "span"),
                  t._uU(3, "Test no: "),
                  t.TgZ(4, "strong"),
                  t._uU(5),
                  t.qZA()(),
                  t._UZ(6, "br"),
                  t.TgZ(7, "span"),
                  t._uU(8, "Current eye (Test): "),
                  t.TgZ(9, "strong"),
                  t._uU(10),
                  t.qZA()(),
                  t._UZ(11, "br"),
                  t.TgZ(12, "span"),
                  t._uU(13, "Current eye (Cover): "),
                  t.TgZ(14, "strong"),
                  t._uU(15),
                  t.qZA()(),
                  t._UZ(16, "br"),
                  t.TgZ(17, "span"),
                  t._uU(18, "logMAR: "),
                  t.TgZ(19, "strong"),
                  t._uU(20),
                  t.ALo(21, "async"),
                  t.qZA()(),
                  t._UZ(22, "br"),
                  t.TgZ(23, "span"),
                  t._uU(24, "Last answer: "),
                  t.YNc(25, Ct, 2, 1, "strong", 8),
                  t.YNc(26, yt, 1, 0, "ng-template", null, 22, t.W1O),
                  t.qZA(),
                  t._UZ(28, "br"),
                  t.TgZ(29, "span"),
                  t._uU(30, "Direction changes: "),
                  t.TgZ(31, "strong"),
                  t._uU(32),
                  t.ALo(33, "async"),
                  t.qZA()(),
                  t._UZ(34, "br"),
                  t.TgZ(35, "span"),
                  t._uU(36, "Pixel-pitch: "),
                  t.TgZ(37, "strong"),
                  t._uU(38),
                  t.qZA()(),
                  t._UZ(39, "br"),
                  t.qZA()()),
               2 & e)
            ) {
               const n = t.MAs(27),
                  o = t.oxw(2);
               t.xp6(5),
                  t.Oqu(o.testCount),
                  t.xp6(5),
                  t.Oqu(o.activeEye),
                  t.xp6(5),
                  t.Oqu(o.activeEye !== o.Eyes.LEFT ? o.Eyes.LEFT : o.Eyes.RIGHT),
                  t.xp6(5),
                  t.Oqu(t.lcZ(21, 8, o.va$)),
                  t.xp6(5),
                  t.Q6J("ngIf", void 0 !== o.lastIsCorrectValue)("ngIfElse", n),
                  t.xp6(7),
                  t.Oqu(t.lcZ(33, 10, o.directionChanges$)),
                  t.xp6(6),
                  t.Oqu(o.pixelPitchForDebug);
            }
         }
         function kt(e, i) {
            if (
               (1 & e &&
                  (t.TgZ(0, "div", 1),
                  t.YNc(1, vt, 23, 20, "div", 2),
                  t.ALo(2, "async"),
                  t.YNc(3, ft, 1, 0, "zat-how-it-works-acuity-page", 3),
                  t.ALo(4, "async"),
                  t.YNc(5, Pt, 40, 12, "div", 4),
                  t.ALo(6, "async"),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.oxw();
               t.xp6(1),
                  t.Q6J("ngIf", !t.lcZ(2, 3, n.toggleHint$)),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(4, 5, n.toggleHint$)),
                  t.xp6(2),
                  t.Q6J("ngIf", t.lcZ(6, 7, n.debug$));
            }
         }
         let $ =
            (((m = class {
               onPopState() {
                  C.N.webcomponent || (history.pushState(null, null, location.href), this.cross());
               }
               constructor(i, n, o, c, l, f, z) {
                  (this.store = i),
                     (this.locationService = n),
                     (this.cookies = o),
                     (this.logger = c),
                     (this.analytics = l),
                     (this.tableService = f),
                     (this.generalService = z),
                     (this.checkType = s.o6.Acuity),
                     (this.Eyes = d.w9),
                     (this.landoltCAnimationState = "init"),
                     (this.isInitialPageTracked = !1),
                     (this.destroy$ = new K.x()),
                     (this.pixelPitchForDebug = 0),
                     (this.headerConfig = {
                        label: h.cr.AcuityCheck,
                        right: h.EO.Close,
                        left: h.EO.Info,
                        theme: h.dW.LightMode,
                     }),
                     (this.toggleHint$ = new J.X(!1)),
                     history.pushState(null, null, location.href);
               }
               ngOnInit() {
                  (this.megaTestActive$ = this.store.select(y.f.Wk)),
                     (this.debug$ = this.store.select(y.f.v4)),
                     (this.width$ = this.store.select(r.LO.Ks).pipe(
                        (0, tt.U)((i) => {
                           const n = this.cookies.getPixelPitch();
                           let o = (0, it.zQ)(i, n);
                           return (this.pixelPitchForDebug = n), o;
                        })
                     )),
                     (this.rotationAngle$ = this.store.select(r.LO.cA)),
                     (this.va$ = this.store.select(r.LO.Ks)),
                     this.va$
                        .pipe(
                           (0, A.b)((i) => {
                              this.visualAcuity = i;
                           })
                        )
                        .subscribe(),
                     (this.testCount$ = this.store.select(r.LO.Zq)),
                     (this.reachedMaxTests$ = this.store.select(r.LO.UA)),
                     (this.activeEye$ = this.store.select(r.LO.Um)),
                     (this.lastScaleDirection$ = this.store.select(r.LO.sO)),
                     (this.activeEyeFinished$ = this.store.select(r.LO.WR)),
                     (this.directionChanges$ = this.store.select(r.LO.pe)),
                     this.store.dispatch(r.zb.RandomizeAngle()),
                     (0, X.a)([this.activeEye$, this.testCount$])
                        .pipe((0, p.t)(this))
                        .subscribe(([i, n]) => {
                           (this.activeEye = i), (this.testCount = n), this.trackInitialVirtualPage();
                        }),
                     this.rotationAngle$.pipe((0, p.t)(this)).subscribe((i) => {
                        this.cAngle = i;
                     }),
                     this.va$.pipe((0, p.t)(this)).subscribe((i) => (this.currentVA = i)),
                     this.activeEyeFinished$.pipe((0, p.t)(this)).subscribe((i) => {
                        this.activeEyeFinished = i;
                     }),
                     this.megaTestActive$.pipe((0, p.t)(this)).subscribe((i) => {
                        (this.megaTestActive = i), this.goToResultWhenFinished(i);
                     }),
                     this.tableService.resetInteractionStartTime();
               }
               ngOnDestroy() {
                  this.destroy$.next(), this.destroy$.complete();
               }
               onComplete(i) {
                  this.store.dispatch(r.zb.IncreaseCount()),
                     (this.currentIsCorrectValue = i),
                     void 0 !== this.lastIsCorrectValue &&
                        this.lastIsCorrectValue !== i &&
                        this.store.dispatch(
                           r.zb.IncreaseStepChangeCount({
                              eye: this.activeEye,
                           })
                        ),
                     i
                        ? (this.currentVA === V.V3 &&
                             this.store.dispatch(
                                r.zb.IncreaseSmallestStepCounter({
                                   eye: this.activeEye,
                                })
                             ),
                          this.store.dispatch(
                             r.zb.StoreValue({
                                eye: this.activeEye,
                                value: this.currentVA,
                             })
                          ),
                          this.store.dispatch(r.zb.Decrease()))
                        : (this.currentVA === V.Qr &&
                             this.store.dispatch(
                                r.zb.IncreaseHighestStepCounter({
                                   eye: this.activeEye,
                                })
                             ),
                          this.store.dispatch(
                             r.zb.ResetSmallestStepCounter({
                                eye: this.activeEye,
                             })
                          ),
                          this.store.dispatch(r.zb.Increase())),
                     (this.lastIsCorrectValue = i),
                     this.next();
               }
               next() {
                  this.tableService.updateAnalysisData(this.activeEye, this.currentIsCorrectValue, this.visualAcuity),
                     this.activeEyeFinished ? this.finishTest() : this.trackNewVirtualPage();
               }
               finishTest() {
                  if ((this.trackFinishVirtualPage(), this.activeEye === d.w9.RIGHT)) {
                     this.store.dispatch(
                        r.zb.SetActiveEye({
                           eye: d.w9.LEFT,
                        })
                     );
                     let i = `${x.P.ACUITY}${u.a.CheckPrepare}`;
                     return (
                        this.megaTestActive && (i = `${u.a.Default}/${i}`),
                        this.generalService.routeToNextScreen(i),
                        void this.store.dispatch(r.zb.ResetTests())
                     );
                  }
                  this.goToResults();
               }
               goToResults() {
                  this.tableService.storeAnalysisData$().subscribe((n) => {
                     null !== n && this.logger.info("#### [ACUITY_CHECK] response: ", n);
                  }),
                     this.megaTestActive &&
                        this.store.dispatch(
                           nt.wV.SetTestInMegaTest({
                              testType: x.P.ACUITY,
                           })
                        );
                  let i = `/${x.P.ACUITY}${u.a.CheckResult}`;
                  this.megaTestActive && (i = `${u.a.Default}/${i}`),
                     this.generalService.routeToNextScreen(i),
                     this.store.dispatch(r.zb.ResetTests());
               }
               trackInitialVirtualPage() {
                  this.isInitialPageTracked ||
                     (this.trackVirtualPage(this.activeEye, this.testCount), (this.isInitialPageTracked = !0));
               }
               trackNewVirtualPage() {
                  this.trackVirtualPage(this.activeEye, this.testCount);
               }
               trackFinishVirtualPage() {
                  this.trackVirtualPage(this.activeEye, this.testCount - 1, "_end");
               }
               trackVirtualPage(i, n, o = "") {
                  const l = `${this.locationService.path()}/${i}_${n}${o}`;
                  this.analytics.trackVirtualPage(l);
               }
               cancelTest() {
                  this.tableService.clearVisualCheckData(), this.store.dispatch((0, Y.OpenHomePageAction)());
               }
               onLandoltCAnimationDone(i) {
                  "init" === i.toState && (this.landoltCAnimationState = "idle");
               }
               goToResultWhenFinished(i) {
                  this.store
                     .select(r.LO.Xb)
                     .pipe((0, et.h)((n) => !!n))
                     .subscribe(() => {
                        let n = `${x.P.ACUITY}${u.a.CheckResult}`;
                        i && (n = `${u.a.Default}/${n}`), this.generalService.routeToNextScreen(n);
                     })
                     .unsubscribe();
               }
               openInfo() {
                  this.toggleHint$.next(!0),
                     this.analytics.createCustomEvent({
                        event: "event",
                        eventName: `${s.GU.CTA}`,
                        eventAction: `${s.Br.Click}`,
                        eventType: `${s.o6.Internal}`,
                        eventValue: `${s.Vy.Acuity}`,
                        eventDetail: `${s.xP.HowItWorks}`,
                     });
               }
               closeHint() {
                  this.toggleHint$.next(!1);
               }
               cross() {
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${s.GU.CTA}`,
                     eventAction: `${s.Br.Click}`,
                     eventType: `${s.o6.Acuity}`,
                     eventValue: `${s.Vy.ExitCheck}`,
                     eventDetail: `${s.xP.Clear}`,
                  }),
                     (0, q.of)(null)
                        .pipe((0, F.g)(0), (0, w.q)(1))
                        .subscribe(() => {
                           this.store.dispatch(
                              r.zb.ShowCloseWarningAction({
                                 context: P.j.Check,
                                 previousPath: this.locationService.path(),
                              })
                           );
                        });
               }
            }).ɵfac = function (i) {
               return new (i || m)(
                  t.Y36(k.yh),
                  t.Y36(g.Ye),
                  t.Y36(ot.f),
                  t.Y36(H.r),
                  t.Y36(Q.y),
                  t.Y36(ct.H),
                  t.Y36(M.m)
               );
            }),
            (m.ɵcmp = t.Xpm({
               type: m,
               selectors: [["zat-acuity-check-page"]],
               hostBindings: function (i, n) {
                  1 & i &&
                     t.NdJ(
                        "popstate",
                        function (c) {
                           return n.onPopState(c);
                        },
                        !1,
                        t.Jf7
                     );
               },
               decls: 1,
               vars: 0,
               consts: [
                  ["class", "va-check", 4, "transloco"],
                  [1, "va-check"],
                  ["class", "the-check", 4, "ngIf"],
                  ["class", "the-check-hint", 3, "clickClose", 4, "ngIf"],
                  ["class", "debug", 4, "ngIf"],
                  [1, "the-check"],
                  [3, "label", "left", "right", "theme", "clickLeft", "clickRight"],
                  [1, "check-introduction"],
                  [4, "ngIf", "ngIfElse"],
                  ["rightEyeText", ""],
                  [1, "number"],
                  [3, "innerHtml"],
                  [1, "check-card-spacing"],
                  [1, "check-card"],
                  [1, "check-controls"],
                  [1, "landolt-c"],
                  [
                     "xmlns",
                     "http://www.w3.org/2000/svg",
                     "fill-rule",
                     "evenodd",
                     "stroke-linejoin",
                     "round",
                     "stroke-miterlimit",
                     "2",
                     "clip-rule",
                     "evenodd",
                     "viewBox",
                     "0 0 3 3",
                     "alt",
                     "landolt ring",
                  ],
                  [
                     "d",
                     "M1.785,0.015c0.684,0.139 1.2,0.745 1.2,1.47c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.725 0.516,-1.331 1.2,-1.47l0,0.69c-0.321,0.119 -0.55,0.424 -0.55,0.78c0,0.46 0.381,0.833 0.85,0.833c0.469,0 0.85,-0.373 0.85,-0.833c0,-0.356 -0.229,-0.661 -0.55,-0.78l0,-0.69Z",
                  ],
                  [1, "pizza-control"],
                  [1, "user-control", 3, "angle", "checkType", "idle", "init", "done"],
                  [1, "the-check-hint", 3, "clickClose"],
                  [1, "debug"],
                  ["placeholder", ""],
               ],
               template: function (i, n) {
                  1 & i && t.YNc(0, kt, 7, 9, "div", 0);
               },
               dependencies: [g.O5, _.KI, at.c, Z.P, _t, g.Ov],
               styles: [
                  '[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.content[_ngcontent-%COMP%]{flex-grow:1;display:flex;align-items:center;flex-direction:column;height:100%;box-sizing:border-box;padding-bottom:0}@container appComp (min-width: 768px){.content[_ngcontent-%COMP%]{height:calc(100% - 60px)}}svg[_ngcontent-%COMP%]{overflow:visible}.user-control[_ngcontent-%COMP%]{bottom:5%}@container appComP(max-height: 719px){.user-control[_ngcontent-%COMP%]{transform:scale(.831)}}@container appComp (min-height: 720px){.user-control[_ngcontent-%COMP%]{transform:scale(.923)}}@container appComp (max-height: 600px){.user-control[_ngcontent-%COMP%]{position:relative;bottom:0}}@container appComp (min-width: 768px){.user-control[_ngcontent-%COMP%]{position:relative;bottom:0%}}.landolt-c[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center}@container appComp (min-width: 768px){.landolt-c[_ngcontent-%COMP%]{min-height:100px}}.test-controls[_ngcontent-%COMP%]{display:flex;flex-grow:1;flex-direction:column;justify-content:space-between;position:relative;align-self:stretch;justify-content:center}@container appComp (max-height: 600px){.test-controls[_ngcontent-%COMP%]{height:100px}}[_nghost-%COMP%]     .fit-screen .content-container{flex-grow:1;padding-bottom:340px}@container appComp (min-width: 768px){[_nghost-%COMP%]     .fit-screen .content-container{padding-bottom:0!important}}[_nghost-%COMP%]{touch-action:pan-x pan-y;flex-grow:2}.va-check[_ngcontent-%COMP%]{height:100%;width:100%;background:var(--bg-color-light);display:flex;flex-direction:column;align-items:center}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]{width:100%;height:100%;overflow:hidden;display:flex;flex-direction:column}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   zat-ovs-header[_ngcontent-%COMP%]{width:100%}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-introduction[_ngcontent-%COMP%]{text-align:center;margin:0 24px;font:var(--text-body-m);color:var(--text-color-body);font-size:16px}@container appComp (min-width: 768px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-introduction[_ngcontent-%COMP%]{font-size:20px!important}}@container appComp (min-height: 680px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-introduction[_ngcontent-%COMP%]{margin-top:40px}}@container appComp (min-height: 720px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-introduction[_ngcontent-%COMP%]{margin-bottom:40px}}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-introduction[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-weight:700}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;height:100%;overflow:hidden}@container appComp (min-height: 752px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]{align-items:center}}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]{margin-top:24px;width:312px;box-shadow:2px -4px 16px #19191914;border-radius:16px;background:var(--background-color-primary);content:"";display:flex;flex-direction:column;align-items:center}@container appComp (min-height: 920px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]{min-height:640px}}@container appComp (min-height: 752px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]{margin-top:0}}@container appComp (min-width: 432px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]{min-width:384px}}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]   .check-controls[_ngcontent-%COMP%]{margin-top:16px}@container appComp (min-height: 920px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]   .check-controls[_ngcontent-%COMP%]{margin-top:50px}}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]   .check-controls[_ngcontent-%COMP%]   .landolt-c[_ngcontent-%COMP%]{background:var(--background-color-primary);min-height:150px}.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]   .pizza-control[_ngcontent-%COMP%]{margin-bottom:35px}@container appComp (min-height: 920px){.va-check[_ngcontent-%COMP%]   .the-check[_ngcontent-%COMP%]   .check-card-spacing[_ngcontent-%COMP%]   .check-card[_ngcontent-%COMP%]   .pizza-control[_ngcontent-%COMP%]{margin-top:100px}}.va-check[_ngcontent-%COMP%]   .the-check-hint[_ngcontent-%COMP%]{width:100%;overflow-y:hidden}.va-check[_ngcontent-%COMP%]   .content-invisible[_ngcontent-%COMP%]{position:absolute;top:0;left:0;align-items:center;width:100%;height:100%;visibility:hidden}.va-check[_ngcontent-%COMP%]   .distance-warning[_ngcontent-%COMP%]{width:100%;height:100%;visibility:visible;z-index:9}.va-check[_ngcontent-%COMP%]   .debug[_ngcontent-%COMP%]{position:absolute;top:64px;right:24px;border-radius:3px;border:1px dotted red;background:var(--background-color-primary);opacity:.3;color:#0000001a}.va-check[_ngcontent-%COMP%]   .debug[_ngcontent-%COMP%]:hover{color:#000;opacity:1}',
               ],
               data: {
                  animation: [T.BX, T.eV],
               },
               changeDetection: 0,
            })),
            m);
         $ = (0, N.gn)([(0, p.c)()], $);
         var v,
            Mt = a(8965),
            Ot = a(7631);
         let S =
            (((v = class {
               constructor(i, n, o) {
                  (this.generalService = i),
                     (this.store = n),
                     (this.locationService = o),
                     (this.headerLabel = h.cr.Setup),
                     (this.checkType = s.xP.Acuity);
               }
               ngOnInit() {
                  (this.megaTestActive$ = this.store.select(y.f.Wk)),
                     this.megaTestActive$.pipe((0, p.t)(this)).subscribe((i) => (this.isMegaTestActive = i));
               }
               next() {
                  let i = `${x.P.ACUITY}${u.a.CheckStart}`;
                  this.isMegaTestActive && (i = `${u.a.Default}/${i}`), this.generalService.routeToNextScreen(i);
               }
               cancelTest() {
                  this.store.dispatch(
                     (0, Mt.ShowCloseWarningAction)({
                        context: P.j.Check,
                        previousPath: this.locationService.path(),
                     })
                  );
               }
            }).ɵfac = function (i) {
               return new (i || v)(t.Y36(M.m), t.Y36(k.yh), t.Y36(g.Ye));
            }),
            (v.ɵcmp = t.Xpm({
               type: v,
               selectors: [["zat-acuity-prepare-check-page"]],
               decls: 1,
               vars: 2,
               consts: [[3, "label", "checkType", "next", "clickCross"]],
               template: function (i, n) {
                  1 & i &&
                     (t.TgZ(0, "zat-prepare-next-test", 0),
                     t.NdJ("next", function () {
                        return n.next();
                     })("clickCross", function () {
                        return n.cancelTest();
                     }),
                     t.qZA()),
                     2 & i && t.Q6J("label", n.headerLabel)("checkType", n.checkType);
               },
               dependencies: [Ot.P],
               styles: ["[_nghost-%COMP%]{flex-grow:1}"],
               changeDetection: 0,
            })),
            v);
         S = (0, N.gn)([(0, p.c)()], S);
         var bt = a(6709),
            W = a(655),
            At = a(9221),
            G = a(5625),
            wt = a(758),
            Tt = a(8348),
            Zt = a(748);
         const $t = ["content"];
         function St(e, i) {
            1 & e && (t.TgZ(0, "span", 17), t._uU(1, "4"), t.qZA());
         }
         function zt(e, i) {
            1 & e && (t.TgZ(0, "span", 17), t._uU(1, "3"), t.qZA());
         }
         function Et(e, i) {
            if (
               (1 & e &&
                  (t.TgZ(0, "div", 16),
                  t.YNc(1, St, 2, 0, "span", 20),
                  t.YNc(2, zt, 2, 0, "span", 20),
                  t.TgZ(3, "span", 18),
                  t._uU(4),
                  t.qZA()()),
               2 & e)
            ) {
               const n = i.ngLet,
                  o = t.oxw(4).$implicit;
               t.xp6(1), t.Q6J("ngIf", !n), t.xp6(1), t.Q6J("ngIf", n), t.xp6(2), t.Oqu(o("result.minutesLeft"));
            }
         }
         function It(e, i) {
            if (
               (1 & e &&
                  (t.TgZ(0, "div", 15)(1, "div", 16)(2, "span", 17),
                  t._uU(3),
                  t.ALo(4, "async"),
                  t.qZA(),
                  t.TgZ(5, "span", 18),
                  t._uU(6),
                  t.qZA()(),
                  t.YNc(7, Et, 5, 3, "div", 19),
                  t.ALo(8, "async"),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.oxw(3).$implicit,
                  o = t.oxw(2);
               t.xp6(3),
                  t.hij("1/", t.lcZ(4, 3, o.megaTestList$), ""),
                  t.xp6(3),
                  t.Oqu(n("result.checksCompleted")),
                  t.xp6(1),
                  t.Q6J("ngLet", t.lcZ(8, 5, o.isUSMode$));
            }
         }
         function Rt(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "zat-action-button", 25),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const c = t.oxw(6);
                     return t.KtG(c.goToResultSummary());
                  }),
                  t._uU(1),
                  t.ALo(2, "async"),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw(4).$implicit,
                  o = t.oxw(2);
               t.xp6(1),
                  t.hij(" ", t.lcZ(2, 1, o.showSaveFeature$) ? n("button.summarizeSave") : n("button.summarize"), " ");
            }
         }
         function Lt(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "zat-action-button", 26),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const c = t.oxw(6);
                     return t.KtG(c.sendResults());
                  }),
                  t._uU(1),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw(4).$implicit;
               t.xp6(1), t.hij(" ", n("button.summarizeSave"), " ");
            }
         }
         function Ut(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "div")(1, "div", 21)(2, "zat-action-button", 22),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const c = t.oxw(5);
                     return t.KtG(c.nextTest());
                  }),
                  t._uU(3),
                  t.qZA(),
                  t.YNc(4, Rt, 3, 3, "zat-action-button", 23),
                  t.ALo(5, "async"),
                  t.YNc(6, Lt, 2, 1, "zat-action-button", 24),
                  t.ALo(7, "async"),
                  t.qZA()();
            }
            if (2 & e) {
               const n = t.oxw(3).$implicit,
                  o = t.oxw(2);
               t.xp6(3),
                  t.hij(" ", n("acuityTest.result.continueToContrastTest"), " "),
                  t.xp6(1),
                  t.Q6J(
                     "ngIf",
                     t.lcZ(5, 3, o.specialScreeningMode$) === o.SpecialScreeningMode.ECP || !o.isWebcomponent
                  ),
                  t.xp6(2),
                  t.Q6J(
                     "ngIf",
                     t.lcZ(7, 5, o.specialScreeningMode$) === o.SpecialScreeningMode.MY_ZEISS && o.isWebcomponent
                  );
            }
         }
         function Nt(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "zat-action-button", 30),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const c = t.oxw(6);
                     return t.KtG(c.sendResults());
                  }),
                  t._uU(1),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw(4).$implicit;
               t.xp6(1), t.hij(" ", n("button.save"), " ");
            }
         }
         function Jt(e, i) {
            if (1 & e) {
               const n = t.EpF();
               t.TgZ(0, "zat-action-button", 31),
                  t.NdJ("click", function () {
                     t.CHM(n);
                     const c = t.oxw(6);
                     return t.KtG(c.sendResults());
                  }),
                  t._uU(1),
                  t.qZA();
            }
            if (2 & e) {
               const n = t.oxw(4).$implicit;
               t.xp6(1), t.hij(" ", n("button.sendViaMail"), " ");
            }
         }
         function Ft(e, i) {
            if (
               (1 & e &&
                  (t.TgZ(0, "div", 27),
                  t.YNc(1, Nt, 2, 1, "zat-action-button", 28),
                  t.YNc(2, Jt, 2, 1, "zat-action-button", 29),
                  t.qZA()),
               2 & e)
            ) {
               const n = t.oxw().ngLet,
                  o = t.oxw(4);
               t.xp6(1),
                  t.Q6J("ngIf", n === o.SpecialScreeningMode.MY_ZEISS),
                  t.xp6(1),
                  t.Q6J("ngIf", n === o.SpecialScreeningMode.NL_CAMPAIGN);
            }
         }
         function Yt(e, i) {
            if ((1 & e && (t._UZ(0, "zat-result-call-to-action", 32), t.ALo(1, "async")), 2 & e)) {
               const n = t.oxw(5);
               t.Q6J("isFRChannel", "fr-FR" === t.lcZ(1, 1, n.locale$));
            }
         }
         const Vt = function (e, i) {
            return {
               "single-row": e,
               webcomponent: i,
            };
         };
         function Ht(e, i) {
            if (
               (1 & e &&
                  (t.TgZ(0, "div", 8)(1, "div", 9),
                  t._UZ(2, "zat-acuity-test-result", 10),
                  t.ALo(3, "async"),
                  t.ALo(4, "async"),
                  t.ALo(5, "async"),
                  t.ALo(6, "async"),
                  t.YNc(7, It, 9, 7, "div", 11),
                  t.YNc(8, Ut, 8, 7, "div", 12),
                  t.YNc(9, Ft, 3, 2, "div", 13),
                  t.qZA(),
                  t.YNc(10, Yt, 2, 3, "zat-result-call-to-action", 14),
                  t.ALo(11, "async"),
                  t.qZA()),
               2 & e)
            ) {
               const n = i.ngLet,
                  o = t.oxw(3).ngLet,
                  c = t.oxw();
               t.Q6J("ngClass", t.WLB(19, Vt, o, c.isWebcomponent)),
                  t.xp6(2),
                  t.Q6J("results", t.lcZ(3, 9, c.vaResult$))("image", t.lcZ(4, 11, c.image$))(
                     "vaValues",
                     t.lcZ(5, 13, c.vaValues$)
                  )("isFRChannel", "fr-FR" === t.lcZ(6, 15, c.locale$) && !o),
                  t.xp6(5),
                  t.Q6J("ngIf", o),
                  t.xp6(1),
                  t.Q6J("ngIf", o),
                  t.xp6(1),
                  t.Q6J("ngIf", c.isWebcomponent && n !== c.SpecialScreeningMode.ECP && !o),
                  t.xp6(1),
                  t.Q6J(
                     "ngIf",
                     !c.isWebcomponent &&
                        t.lcZ(11, 17, c.specialScreeningMode$) === c.SpecialScreeningMode.MY_ZEISS &&
                        !o
                  );
            }
         }
         function Qt(e, i) {
            if ((1 & e && (t.TgZ(0, "div", 6, 4), t.YNc(2, Ht, 12, 22, "div", 7), t.ALo(3, "async"), t.qZA()), 2 & e)) {
               const n = t.oxw(3);
               t.xp6(2), t.Q6J("ngLet", t.lcZ(3, 1, n.specialScreeningMode$));
            }
         }
         function Wt(e, i) {
            if ((1 & e && (t.ynx(0, 4), t.YNc(1, Qt, 4, 3, "div", 5), t.ALo(2, "async"), t.BQk()), 2 & e)) {
               const n = t.oxw(2);
               t.xp6(1), t.Q6J("ngLet", t.lcZ(2, 1, n.vaValues$));
            }
         }
         function Gt(e, i) {
            1 & e && (t.TgZ(0, "div", 2), t.YNc(1, Wt, 3, 3, "ng-container", 3), t.qZA());
         }
         let Dt = (() => {
            var e;
            class i {
               onPopState() {
                  C.N.webcomponent || (history.pushState(null, null, location.href), this.triggerCloseWarning());
               }
               constructor(o, c, l, f, z, qt) {
                  (this.store = o),
                     (this.logger = c),
                     (this.locationService = l),
                     (this.transloco = f),
                     (this.analytics = z),
                     (this.generalService = qt),
                     (this.specialScreeningMode$ = this.store.select(W.P2)),
                     (this.SpecialScreeningMode = G.i),
                     (this.resultString = null),
                     (this.image$ = this.store.select(r.LO.D).pipe(
                        (0, w.q)(1),
                        (0, A.b)((O) => {
                           this.resultString = `Left: ${O.leftEye} - Right: ${O.rightEye}`;
                        })
                     )),
                     (this.RESULT = d.B8),
                     (this.AppChannel = d.ti),
                     (this.isWebcomponent = C.N.webcomponent),
                     (this.isMegaTestActive$ = this.store.select(W.Wk)),
                     (this.locale$ = this.store.select(y.f.Kd)),
                     (this.showSaveFeature$ = this.generalService.showImportSaveOption$()),
                     (this.isUSMode$ = this.generalService.hideLastTest$().pipe(
                        (0, A.b)((O) => {
                           this.megaTestList$.next(O ? 4 : 5);
                        })
                     )),
                     (this.megaTestList$ = new J.X(void 0)),
                     (this.headerConfig = {
                        label: h.cr.SingleCheckResult,
                        left: h.EO.Empty,
                        right: h.EO.Close,
                        theme: h.dW.LightMode,
                     }),
                     history.pushState(null, null, location.href);
               }
               ngOnInit() {
                  (this.vaResult$ = this.store.select(r.LO.fh)), (this.vaValues$ = this.store.select(r.LO.vS));
               }
               ngAfterViewInit() {
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${s.GU.CTA}`,
                     eventAction: `${s.Br.View}`,
                     eventType: `${s.o6.Acuity} Test`,
                     eventValue: `${s.Vy.Result}`,
                     eventDetail: `${this.resultString}`,
                  });
               }
               ngOnDestroy() {}
               goToResultSummary() {
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${s.GU.CTA}`,
                     eventAction: `${s.Br.Click}`,
                     eventType: `${s.o6.Internal}`,
                     eventValue: `${s.Vy.ShowResults}`,
                     eventDetail: `${s.xP.ResultPage} - ${s.xP.Acuity}`,
                  }),
                     this.store.dispatch((0, Y.ShowMegaTestResultsAction)());
               }
               nextTest() {
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${s.GU.CTA}`,
                     eventAction: `${s.Br.Click}`,
                     eventType: `${s.o6.Internal}`,
                     eventValue: `${s.Vy.ContinueTo}${s.Vy.Contrast}`,
                     eventDetail: `${s.xP.ResultPage} - ${s.xP.Acuity}`,
                  }),
                     this.store.dispatch((0, At.StartContrastMegaTestAction)());
               }
               sendResults() {
                  this.logger.info("### Send result", "Acuity"),
                     this.analytics.createCustomEvent({
                        event: "event",
                        eventName: `${s.GU.CTA}`,
                        eventAction: `${s.Br.Click}`,
                        eventType: `${s.o6.Internal}`,
                        eventValue: `${s.Vy.SaveResults}`,
                        eventDetail: `${s.xP.ResultPage} - ${s.xP.Acuity}`,
                     }),
                     this.store.dispatch((0, bt.SendResultsAction)());
               }
               triggerCloseWarning() {
                  this.analytics.createCustomEvent({
                     event: "event",
                     eventName: `${s.GU.CTA}`,
                     eventAction: `${s.Br.Click}`,
                     eventType: `${s.o6.Internal}`,
                     eventValue: `${s.Vy.ExitResultPage}`,
                     eventDetail: `${s.xP.ResultPage} - ${s.xP.Acuity}`,
                  }),
                     this.specialScreeningMode$.pipe((0, F.g)(0), (0, w.q)(1)).subscribe((o) => {
                        this.store.dispatch(
                           r.zb.ShowCloseWarningAction({
                              context: o === G.i.ECP ? P.j.ResultECP : P.j.ResultNotECP,
                              previousPath: this.locationService.path(),
                           })
                        );
                     });
               }
            }
            return (
               ((e = i).ɵfac = function (o) {
                  return new (o || e)(t.Y36(k.yh), t.Y36(H.r), t.Y36(g.Ye), t.Y36(_.Vn), t.Y36(Q.y), t.Y36(M.m));
               }),
               (e.ɵcmp = t.Xpm({
                  type: e,
                  selectors: [["zat-acuity-result-page"]],
                  viewQuery: function (o, c) {
                     if ((1 & o && t.Gf($t, 5), 2 & o)) {
                        let l;
                        t.iGM((l = t.CRH())) && (c.content = l.first);
                     }
                  },
                  hostBindings: function (o, c) {
                     1 & o &&
                        t.NdJ(
                           "popstate",
                           function (f) {
                              return c.onPopState(f);
                           },
                           !1,
                           t.Jf7
                        );
                  },
                  decls: 3,
                  vars: 7,
                  consts: [
                     [3, "label", "left", "right", "theme", "clickRight"],
                     ["class", "result-content", 4, "ngLet"],
                     [1, "result-content"],
                     ["content", "", 4, "transloco"],
                     ["content", ""],
                     ["class", "va-content", 4, "ngLet"],
                     [1, "va-content"],
                     ["class", "va-content-container", 3, "ngClass", 4, "ngLet"],
                     [1, "va-content-container", 3, "ngClass"],
                     [1, "va-result-content"],
                     [3, "results", "image", "vaValues", "isFRChannel"],
                     ["class", "result-status-mega-test", 4, "ngIf"],
                     [4, "ngIf"],
                     ["class", "result-btn", 4, "ngIf"],
                     [3, "isFRChannel", 4, "ngIf"],
                     [1, "result-status-mega-test"],
                     [1, "result-status-mega-test-stats"],
                     [1, "stats-title"],
                     [1, "va-description"],
                     ["class", "result-status-mega-test-stats", 4, "ngLet"],
                     ["class", "stats-title", 4, "ngIf"],
                     [1, "va-content--mega-test"],
                     [
                        "color",
                        "primary",
                        "type",
                        "solid",
                        "data-testid",
                        "button-acuity-result-next",
                        1,
                        "result-button",
                        3,
                        "click",
                     ],
                     [
                        "class",
                        "result-button",
                        "color",
                        "primary",
                        "type",
                        "inverted",
                        "data-testid",
                        "button-acuity-result-summarize",
                        3,
                        "click",
                        4,
                        "ngIf",
                     ],
                     [
                        "class",
                        "result-button",
                        "color",
                        "primary",
                        "type",
                        "inverted",
                        "data-testid",
                        "button-acuity-result-summarize-and-save",
                        3,
                        "click",
                        4,
                        "ngIf",
                     ],
                     [
                        "color",
                        "primary",
                        "type",
                        "inverted",
                        "data-testid",
                        "button-acuity-result-summarize",
                        1,
                        "result-button",
                        3,
                        "click",
                     ],
                     [
                        "color",
                        "primary",
                        "type",
                        "inverted",
                        "data-testid",
                        "button-acuity-result-summarize-and-save",
                        1,
                        "result-button",
                        3,
                        "click",
                     ],
                     [1, "result-btn"],
                     [
                        "color",
                        "primary",
                        "type",
                        "solid",
                        "data-testid",
                        "button-acuity-result-save",
                        3,
                        "click",
                        4,
                        "ngIf",
                     ],
                     [
                        "class",
                        "result-button",
                        "color",
                        "primary",
                        "type",
                        "solid",
                        "data-testid",
                        "button-acuity-result-save",
                        3,
                        "click",
                        4,
                        "ngIf",
                     ],
                     ["color", "primary", "type", "solid", "data-testid", "button-acuity-result-save", 3, "click"],
                     [
                        "color",
                        "primary",
                        "type",
                        "solid",
                        "data-testid",
                        "button-acuity-result-save",
                        1,
                        "result-button",
                        3,
                        "click",
                     ],
                     [3, "isFRChannel"],
                  ],
                  template: function (o, c) {
                     1 & o &&
                        (t.TgZ(0, "zat-ovs-header", 0),
                        t.NdJ("clickRight", function () {
                           return c.triggerCloseWarning();
                        }),
                        t.qZA(),
                        t.YNc(1, Gt, 2, 0, "div", 1),
                        t.ALo(2, "async")),
                        2 & o &&
                           (t.Q6J("label", c.headerConfig.label)("left", c.headerConfig.left)(
                              "right",
                              c.headerConfig.right
                           )("theme", c.headerConfig.theme),
                           t.xp6(1),
                           t.Q6J("ngLet", t.lcZ(2, 5, c.isMegaTestActive$)));
                  },
                  dependencies: [g.mk, g.O5, _.KI, wt.x, Tt.s, Zt.X, Z.P, R.h, g.Ov],
                  styles: [
                     '[_nghost-%COMP%]{--background-color-dark-03: #17191C;--chubGrey: #606A76;--primary-blue: #0072EF;--primary-hover-blue: #0052AA;--text-color-button: white;--bg-color-light: #ECF0F4;--light-text-headline: #32373E;--light-interaction-blue: #0072EF;--tiles-margin-of-about-us: 16px}@media (min-width: 48rem){[_nghost-%COMP%]{--text-hl-s: 700 20px/28px var(--font-family-frutiger);--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 700 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@media (min-width: 80rem){[_nghost-%COMP%]{--text-hl-xl: 700 24px/30px var(--font-family-frutiger);--text-hl-l: 700 20px/28px var(--font-family-frutiger);--text-hl-xxl: 750 32px/36px var(--font-family-frutiger);--text-hl-sub-xl: 300 24px/30px var(--font-family-frutiger);--text-hl-sub-xxl: 300 32px/36px var(--font-family-frutiger);--text-display-s: 900 32px/36px var(--font-family-frutiger);--text-display-m: 900 40px/44px var(--font-family-frutiger);--text-display-l: 900 60px/64px var(--font-family-frutiger)}}@keyframes _ngcontent-%COMP%_rotate{0%{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes _ngcontent-%COMP%_stepRotate{0%{transform:rotate(0)}25%{transform:rotate(90deg)}50%{transform:rotate(135deg)}75%{transform:rotate(225deg)}to{transform:rotate(359deg)}}.va-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-left:auto;margin-right:auto}.va-content.no-bottom-padding[_ngcontent-%COMP%]{padding-bottom:0}.va-content--result[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;text-align:center;background-color:var(--background-color-primary);padding:24px;box-sizing:border-box;border-radius:8px}.va-content--result[_ngcontent-%COMP%]   .va-description[_ngcontent-%COMP%]{margin-bottom:16px;margin-top:24px}.single-row[_ngcontent-%COMP%]   .va-content--result[_ngcontent-%COMP%]{width:100%}.va-content--mega-test[_ngcontent-%COMP%]{padding:24px;text-align:center}.va-content-container[_ngcontent-%COMP%]{width:312px}.webcomponent[_ngcontent-%COMP%]{display:inline-block}.va-values[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;display:flex;flex-direction:row;justify-content:center}.va-column[_ngcontent-%COMP%]{width:140px}.va-column[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{overflow:visible}.va-label[_ngcontent-%COMP%]{font:var(--text-eyebrow);color:var(--text-color-headline);margin-top:8px;text-transform:uppercase}.va-label--mb[_ngcontent-%COMP%]{margin-bottom:10px}.va-label--mt[_ngcontent-%COMP%]{margin-top:5px}.va-description[_ngcontent-%COMP%]{text-align:center;margin:0;font:var(--text-body-m);color:var(--text-color-headline)}.save-result-cta[_ngcontent-%COMP%]{padding:24px 0 0;font-family:ZEISS Frutiger Next;font-size:16px;font-weight:700;line-height:24px;display:flex;flex-direction:column;gap:16px}.save-result-cta[_ngcontent-%COMP%]:before{content:"";border:1px solid #ECF0F4;margin:0 -24px}.va-description-image[_ngcontent-%COMP%]{display:flex;align-items:start;flex-direction:row;justify-content:space-between;position:relative;font-size:21px;line-height:1.285;font-weight:500}.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-right:16px;width:30px;height:30px}@container appComp (min-width: 1024px){.va-description-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}}.va-description-image[_ngcontent-%COMP%]:after{content:""}.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{padding-top:5px;padding-left:46px;font:var(--text-hl-l);color:var(--text-color-headline);font-size:30px}@container appComp (min-width: 768px){.va-description-image[_ngcontent-%COMP%]   .icon-title[_ngcontent-%COMP%]{--text-hl-l: 700 28px/32px var(--font-family-frutiger)}}.result-title[_ngcontent-%COMP%]{display:block;padding:20px 20px 24px}@container appComp (min-width: 1024px){.result-title[_ngcontent-%COMP%]{padding-left:0;padding-right:0;padding-bottom:38px}}.va-result-image[_ngcontent-%COMP%]{max-width:90px;width:100%}@container appComp (min-width: 1024px){zat-action-button[_ngcontent-%COMP%]{font-size:16px}}zat-action-button[_ngcontent-%COMP%]:not(:last-child){margin-bottom:15px}.tooltip[_ngcontent-%COMP%]{cursor:pointer;width:16px;height:16px;background-image:url(icon_info.0e6185d3fa601b34.svg);background-size:16px;background-repeat:no-repeat;padding:0;border:none}  .tooltip-text{background-color:var(--background-color-primary);width:190px;min-height:95px;color:var(--background-color-primary-invert)!important;padding:12px 15px;font-size:14px;font-weight:500;text-align:left;border:3px solid var(--background-color-primary-invert);box-sizing:border-box;border-radius:0!important}@container appComp (min-width: 1024px){  .tooltip-text{width:220px;min-height:110px}}footer[_ngcontent-%COMP%]{background-color:var(--background-color-dark-03);height:440px}.va-content-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 1 50%}@container appComp (min-width: 1024px){  .individual-result .va-content--result{padding-top:0;min-height:auto}}  .individual-result .va-description-image{display:none}@container appComp (min-width: 1024px){  .individual-result .va-content--recommend{min-height:440px}}.icon-small[_ngcontent-%COMP%]{position:absolute}.icon-small-result[_ngcontent-%COMP%]{position:absolute;bottom:-3px;right:-7px}.result-btn[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;padding:24px;border-top:1px solid var(--background-color-light-02)}.va-result-content[_ngcontent-%COMP%]{background-color:var(--background-color-primary);border-radius:8px;box-shadow:2px 4px 16px #19191914}.result-content[_ngcontent-%COMP%]{background-color:var(--bg-color-light);display:flex;flex-direction:row;justify-content:center;height:calc(100% - 64px);overflow-y:scroll}.result-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:24px;border-top-left-radius:8px;border-top-right-radius:8px;border-bottom:1px solid var(--background-color-light-02);background-color:var(--background-color-primary);font:var(--text-hl-xl);color:var(--text-color-headline)}@container appComp (min-width: 768px){.result-head[_ngcontent-%COMP%]{--text-hl-xl: 700 32px/36px var(--font-family-frutiger)}}.result-button[_ngcontent-%COMP%]{width:100%}.result-status-mega-test[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%;background-color:var(--background-color-secondary);border-bottom:1px solid var(--background-color-light-04);border-top:1px solid var(--background-color-light-04);min-height:64px}.result-status-mega-test-stats[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}.stats-title[_ngcontent-%COMP%]{color:var(--text-color-body);font:var(--text-hl-xs)}.ecp-result-exit-btn[_ngcontent-%COMP%]{margin-top:25px}[_nghost-%COMP%]{flex-grow:1;overflow-y:hidden}[_nghost-%COMP%]     .ovs-header{background:var(--bg-color-light)!important}',
                  ],
                  data: {
                     animation: [T.BX],
                  },
               })),
               i
            );
         })();
         const Bt = [
            {
               path: "instructions",
               component: a(8028).K,
               data: {
                  animation: "AcuityTestInstructionsPage",
               },
            },
            {
               path: "start",
               component: $,
               data: {
                  animation: "AcuityTestTestPage",
               },
            },
            {
               path: "result",
               component: Dt,
               data: {
                  animation: "AcuityTestResultPage",
               },
            },
            {
               path: "prepare",
               component: S,
               data: {
                  animation: "AcuityTestPrepareCheckPage",
               },
            },
         ];
         let Kt = (() => {
            var e;
            class i {}
            return (
               ((e = i).ɵfac = function (o) {
                  return new (o || e)();
               }),
               (e.ɵmod = t.oAB({
                  type: e,
               })),
               (e.ɵinj = t.cJS({
                  imports: [b.Bz.forChild(Bt), b.Bz],
               })),
               i
            );
         })();
         function D() {
            return a.e("node_modules_lottie-web_build_player_lottie_js").then(a.t.bind(a, 5904, 23));
         }
         let Xt = (() => {
            var e;
            class i {}
            return (
               ((e = i).ɵfac = function (o) {
                  return new (o || e)();
               }),
               (e.ɵmod = t.oAB({
                  type: e,
               })),
               (e.ɵinj = t.cJS({
                  imports: [
                     g.ez,
                     Kt,
                     B,
                     L.M,
                     _.y4,
                     U.o,
                     j.x,
                     R.f,
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
