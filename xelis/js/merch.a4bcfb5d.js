"use strict";
(self["webpackChunkxelis"] = self["webpackChunkxelis"] || []).push([
   [372],
   {
      5574: function (e, t, r) {
         r.r(t),
            r.d(t, {
               default: function () {
                  return P;
               },
            });
         var s = r(6768),
            o = r(4232);
         const a = {
               id: "merch",
            },
            i = {
               style: {
                  display: "none",
               },
               version: "2.0",
            },
            n = {
               class: "bg",
            },
            c = {
               class: "type-filter scroll-bar",
            },
            h = ["onClick"],
            l = ["innerHTML"],
            d = {
               key: 0,
               class: "content",
            },
            p = {
               class: "item-count",
            },
            m = {
               class: "text",
            },
            u = {
               key: 1,
               class: "content",
            },
            w = {
               key: 0,
               class: "item",
            },
            b = {
               class: "item-info",
            },
            g = {
               class: "title",
            },
            f = {
               class: "description",
            },
            y = ["href"],
            k = {
               class: "subtext",
            },
            v = {
               key: 0,
               class: "images",
            },
            x = ["src"],
            _ = {
               class: "colors",
            },
            L = ["onClick"],
            C = {
               class: "hidden-seo-links",
            },
            E = ["href"],
            M = {
               class: "modal-content",
            };
         function T(e, t, r, T, F, H) {
            const j = (0, s.g2)("NavigationMenu"),
               X = (0, s.g2)("XelisLogo");
            return (
               (0, s.uX)(),
               (0, s.CE)("div", a, [
                  ((0, s.uX)(),
                  (0, s.CE)(
                     "svg",
                     i,
                     t[7] ||
                        (t[7] = [
                           (0, s.Fv)(
                              '<defs><symbol id="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><g><path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke-width="2"></path><path d="M16 12L8 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></symbol></defs><use href="#arrow-icon"></use>',
                              2
                           ),
                        ])
                  )),
                  (0, s.Lk)(
                     "header",
                     {
                        class: (0, o.C4)({
                           safari: e.isSafari,
                        }),
                     },
                     [
                        (0, s.bF)(j),
                        (0, s.Lk)("div", n, [
                           (0, s.bF)(X),
                           t[8] ||
                              (t[8] = (0, s.Lk)(
                                 "div",
                                 {
                                    class: "bgtr",
                                 },
                                 null,
                                 -1
                              )),
                           t[9] ||
                              (t[9] = (0, s.Lk)(
                                 "div",
                                 {
                                    class: "bgm",
                                 },
                                 null,
                                 -1
                              )),
                           t[10] ||
                              (t[10] = (0, s.Lk)(
                                 "div",
                                 {
                                    class: "bgt",
                                 },
                                 null,
                                 -1
                              )),
                        ]),
                     ],
                     2
                  ),
                  t[24] ||
                     (t[24] = (0, s.Lk)(
                        "div",
                        {
                           class: "store-bg",
                        },
                        null,
                        -1
                     )),
                  (0, s.Lk)("main", null, [
                     t[16] ||
                        (t[16] = (0, s.Lk)(
                           "div",
                           {
                              class: "header",
                           },
                           [
                              (0, s.Lk)("div", null, [
                                 (0, s.Lk)(
                                    "div",
                                    {
                                       class: "title",
                                    },
                                    "Merch"
                                 ),
                                 (0, s.Lk)(
                                    "div",
                                    {
                                       class: "subtitle",
                                    },
                                    "84 premium products"
                                 ),
                              ]),
                              (0, s.Lk)("img", {
                                 src: "/merch/merch.webp",
                              }),
                           ],
                           -1
                        )),
                     (0, s.Lk)("div", c, [
                        ((0, s.uX)(!0),
                        (0, s.CE)(
                           s.FK,
                           null,
                           (0, s.pI)(
                              F.filters,
                              (e) => (
                                 (0, s.uX)(),
                                 (0, s.CE)(
                                    "div",
                                    {
                                       key: e,
                                       class: (0, o.C4)({
                                          active: H.isActiveFilter(e),
                                       }),
                                       onClick: (t) => H.setFilter(e),
                                    },
                                    [
                                       (0, s.Lk)(
                                          "div",
                                          {
                                             innerHTML: H.filterIcon(e),
                                          },
                                          null,
                                          8,
                                          l
                                       ),
                                       (0, s.Lk)("div", null, (0, o.v_)(e), 1),
                                       (0, s.Lk)("div", null, "(" + (0, o.v_)(H.filterItemCount(e)) + ")", 1),
                                    ],
                                    10,
                                    h
                                 )
                              )
                           ),
                           128
                        )),
                     ]),
                     0 === H.itemCount
                        ? ((0, s.uX)(), (0, s.CE)("div", d, " No items for this category. "))
                        : (0, s.Q3)("", !0),
                     (0, s.Lk)("div", p, [
                        (0, s.Lk)("div", null, (0, o.v_)(H.filter), 1),
                        ((0, s.uX)(),
                        (0, s.CE)(
                           "svg",
                           {
                              class: "arrow",
                              onClick: t[0] || (t[0] = (e) => H.prevItemIndex()),
                           },
                           t[11] ||
                              (t[11] = [
                                 (0, s.Lk)(
                                    "use",
                                    {
                                       href: "#arrow-icon",
                                    },
                                    null,
                                    -1
                                 ),
                              ])
                        )),
                        (0, s.Lk)("div", m, (0, o.v_)(H.itemIndex) + " / " + (0, o.v_)(H.itemCount) + " items", 1),
                        ((0, s.uX)(),
                        (0, s.CE)(
                           "svg",
                           {
                              class: "arrow",
                              onClick: t[1] || (t[1] = (e) => H.nextItemIndex()),
                           },
                           t[12] ||
                              (t[12] = [
                                 (0, s.Lk)(
                                    "use",
                                    {
                                       href: "#arrow-icon",
                                    },
                                    null,
                                    -1
                                 ),
                              ])
                        )),
                     ]),
                     H.itemCount > 0
                        ? ((0, s.uX)(),
                          (0, s.CE)("div", u, [
                             (0, s.Lk)("div", null, [
                                ((0, s.uX)(!0),
                                (0, s.CE)(
                                   s.FK,
                                   null,
                                   (0, s.pI)(
                                      H.items,
                                      (e, r) => (
                                         (0, s.uX)(),
                                         (0, s.CE)(
                                            "div",
                                            {
                                               key: r,
                                            },
                                            [
                                               r === H.itemIndex - 1
                                                  ? ((0, s.uX)(),
                                                    (0, s.CE)("div", w, [
                                                       (0, s.Lk)("div", b, [
                                                          (0, s.Lk)("div", g, (0, o.v_)(e.title), 1),
                                                          (0, s.Lk)("div", f, (0, o.v_)(e.description), 1),
                                                          (0, s.Lk)("div", null, [
                                                             (0, s.Lk)(
                                                                "a",
                                                                {
                                                                   class: "link",
                                                                   href: e.link,
                                                                   target: "_blank",
                                                                },
                                                                t[13] ||
                                                                   (t[13] = [
                                                                      (0, s.Lk)(
                                                                         "svg",
                                                                         {
                                                                            width: "24px",
                                                                            height: "24px",
                                                                            viewBox: "0 0 24 24",
                                                                            fill: "currentColor",
                                                                         },
                                                                         [
                                                                            (0, s.Lk)("path", {
                                                                               "fill-rule": "evenodd",
                                                                               "clip-rule": "evenodd",
                                                                               d: "M5 3C3.89543 3 3 3.89543 3 5V6.83772L1.49006 11.3675C1.10052 12.5362 1.8474 13.7393 3 13.963V20C3 21.1046 3.89543 22 5 22H9H10H14H15H19C20.1046 22 21 21.1046 21 20V13.963C22.1526 13.7393 22.8995 12.5362 22.5099 11.3675L21 6.83772V5C21 3.89543 20.1046 3 19 3H5ZM15 20H19V14H17.5H12H6.5H5V20H9V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20ZM11 20H13V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V20ZM3.38743 12L4.72076 8H6.31954L5.65287 12H4H3.38743ZM7.68046 12L8.34713 8H11V12H7.68046ZM13 12V8H15.6529L16.3195 12H13ZM18.3471 12L17.6805 8H19.2792L20.6126 12H20H18.3471ZM19 5V6H16.5H12H7.5H5V5H19Z",
                                                                            }),
                                                                         ],
                                                                         -1
                                                                      ),
                                                                      (0, s.eW)(" Go to supplier "),
                                                                   ]),
                                                                8,
                                                                y
                                                             ),
                                                             (0, s.Lk)("div", k, [
                                                                t[14] ||
                                                                   (t[14] = (0, s.eW)(
                                                                      " XELIS is accepted as a form of payment by using the "
                                                                   )),
                                                                (0, s.Lk)(
                                                                   "span",
                                                                   {
                                                                      class: "payment-option-btn",
                                                                      onClick:
                                                                         t[2] ||
                                                                         (t[2] = (e) => (F.modal_xelis_option = !0)),
                                                                   },
                                                                   "XELIS payment option"
                                                                ),
                                                                t[15] || (t[15] = (0, s.eW)(". ")),
                                                             ]),
                                                          ]),
                                                       ]),
                                                    ]))
                                                  : (0, s.Q3)("", !0),
                                            ]
                                         )
                                      )
                                   ),
                                   128
                                )),
                             ]),
                             ((0, s.uX)(!0),
                             (0, s.CE)(
                                s.FK,
                                null,
                                (0, s.pI)(
                                   H.items,
                                   (e, r) => (
                                      (0, s.uX)(),
                                      (0, s.CE)(
                                         s.FK,
                                         {
                                            key: r,
                                         },
                                         [
                                            r === H.itemIndex - 1
                                               ? ((0, s.uX)(),
                                                 (0, s.CE)("div", v, [
                                                    (0, s.Lk)(
                                                       "img",
                                                       {
                                                          class: "img",
                                                          src: e.images[H.colorIndex - 1][F.img_key],
                                                          onMouseenter:
                                                             t[3] || (t[3] = (e) => (F.img_key = "hover_src")),
                                                          onMouseleave: t[4] || (t[4] = (e) => (F.img_key = "src")),
                                                       },
                                                       null,
                                                       40,
                                                       x
                                                    ),
                                                    (0, s.Lk)("div", _, [
                                                       ((0, s.uX)(!0),
                                                       (0, s.CE)(
                                                          s.FK,
                                                          null,
                                                          (0, s.pI)(
                                                             e.images,
                                                             (e, t) => (
                                                                (0, s.uX)(),
                                                                (0, s.CE)(
                                                                   "div",
                                                                   {
                                                                      key: t,
                                                                      class: (0, o.C4)([
                                                                         "color",
                                                                         {
                                                                            active: H.isActiveColor(t + 1),
                                                                         },
                                                                      ]),
                                                                      style: (0, o.Tr)({
                                                                         background: e.color,
                                                                      }),
                                                                      onClick: (e) => H.setColorIndex(t + 1),
                                                                   },
                                                                   null,
                                                                   14,
                                                                   L
                                                                )
                                                             )
                                                          ),
                                                          128
                                                       )),
                                                    ]),
                                                 ]))
                                               : (0, s.Q3)("", !0),
                                         ],
                                         64
                                      )
                                   )
                                ),
                                128
                             )),
                          ]))
                        : (0, s.Q3)("", !0),
                     t[17] ||
                        (t[17] = (0, s.Fv)(
                           '<div class="disclaimer"><svg width="30px" height="30px" viewBox="0 0 18 18" fill="currentColor"><path d="M9,14a1.5,1.5,0,1,1,1.5068-1.5A1.5035,1.5035,0,0,1,9,14Z"></path><path d="M9,2A7,7,0,1,1,2,9,7.0079,7.0079,0,0,1,9,2M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"></path><path d="M10,4H8a1,1,0,0,0-.97,1.2425l1,4a1,1,0,0,0,1.94,0l1-4A1,1,0,0,0,10,4Zm0,2h0Z"></path></svg> PoolPartyNodes is the official supplier of all high-quality XELIS merchandise. The XELIS merch store operates as a non-profit initiative, with all proceeds from sales to the supplier. </div>',
                           1
                        )),
                  ]),
                  (0, s.Lk)("div", C, [
                     ((0, s.uX)(!0),
                     (0, s.CE)(
                        s.FK,
                        null,
                        (0, s.pI)(
                           H.all_merch,
                           (e, t) => (
                              (0, s.uX)(),
                              (0, s.CE)(
                                 "a",
                                 {
                                    target: "_blank",
                                    key: t,
                                    href: e.link,
                                 },
                                 (0, o.v_)(e.title),
                                 9,
                                 E
                              )
                           )
                        ),
                        128
                     )),
                  ]),
                  F.modal_xelis_option
                     ? ((0, s.uX)(),
                       (0, s.CE)(
                          "div",
                          {
                             key: 0,
                             class: "modal",
                             onClick: t[6] || (t[6] = (e) => H.handleXelisOptionModal(e)),
                          },
                          [
                             t[23] ||
                                (t[23] = (0, s.Lk)(
                                   "div",
                                   {
                                      class: "modal-backdrop",
                                   },
                                   null,
                                   -1
                                )),
                             (0, s.Lk)("div", M, [
                                ((0, s.uX)(),
                                (0, s.CE)(
                                   "svg",
                                   {
                                      width: "30px",
                                      height: "30px",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      onClick: t[5] || (t[5] = (e) => (F.modal_xelis_option = !1)),
                                   },
                                   t[18] ||
                                      (t[18] = [
                                         (0, s.Lk)(
                                            "path",
                                            {
                                               d: "M15 9.00004L9 15M15 15L9 9.00004M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z",
                                               stroke: "currentColor",
                                               "stroke-width": "2",
                                               "stroke-linecap": "round",
                                               "stroke-linejoin": "round",
                                            },
                                            null,
                                            -1
                                         ),
                                      ])
                                )),
                                t[19] || (t[19] = (0, s.Lk)("div", null, "Pay with XELIS!", -1)),
                                t[20] ||
                                   (t[20] = (0, s.Lk)(
                                      "div",
                                      null,
                                      " Add the items you wish to purchase to your cart on the supplier's platform and proceed to checkout. On the checkout page, select the XELIS payment option and complete your payment. Once it is confirmed, finalize your order by clicking 'Place Your Order'. ",
                                      -1
                                   )),
                                t[21] || (t[21] = (0, s.Lk)("div", null, "A preview of how it should appear ↓", -1)),
                                t[22] ||
                                   (t[22] = (0, s.Lk)(
                                      "img",
                                      {
                                         src: "/merch/xelis-payment-option.webp",
                                         alt: "Buy with XELIS payment option",
                                      },
                                      null,
                                      -1
                                   )),
                             ]),
                          ]
                       ))
                     : (0, s.Q3)("", !0),
               ])
            );
         }
         r(4114);
         var F = r(9107),
            H = {
               Hoodies: [
                  {
                     title: "Xelis: Quadlemma Solved Unisex Hoodie",
                     description:
                        "This comfy unisex hoodie has a soft outside with a vibrant print and an even softer brushed fleece inside. The hoodie has a relaxed fit, and it's perfect for wrapping yourself into on a chilly evening.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-unisex-hoodie-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-front-675a3f19ef514.webp",
                           hover_src:
                              "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-back-675a3f19f06c2.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Out of the Smoke Unisex Hoodie",
                     description:
                        "This comfy unisex hoodie has a soft outside with a vibrant print and an even softer brushed fleece inside. The hoodie has a relaxed fit, and it's perfect for wrapping yourself into on a chilly evening.",
                     link: "https://poolpartynodes.com/product/xelis-custom-design-unisex-hoodie-3/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-front-6759dd680f7f4.webp",
                           hover_src:
                              "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-back-6759dd681050a.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Night Moon Unisex Hoodie",
                     description:
                        "This comfy unisex hoodie has a soft outside with a vibrant print and an even softer brushed fleece inside. The hoodie has a relaxed fit, and it's perfect for wrapping yourself into on a chilly evening.",
                     link: "https://poolpartynodes.com/product/xelis-custom-design-unisex-hoodie/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-front-6759d817a0644.webp",
                           hover_src:
                              "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-back-6759d817a1382.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Rises Unisex Hoodie",
                     description:
                        "This comfy unisex hoodie has a soft outside with a vibrant print and an even softer brushed fleece inside. The hoodie has a relaxed fit, and it's perfect for wrapping yourself into on a chilly evening.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-unisex-hoodie/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-front-6759d6b759342.webp",
                           hover_src:
                              "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-back-6759d6b759e49.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Eclipse Unisex Hoodie",
                     description:
                        "This comfy unisex hoodie has a soft outside with a vibrant print and an even softer brushed fleece inside. The hoodie has a relaxed fit, and it's perfect for wrapping yourself into on a chilly evening.",
                     link: "https://poolpartynodes.com/product/xelis-custom-design-unisex-hoodie-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-front-6759cd109330d.webp",
                           hover_src:
                              "/merch/hoodies/transparent/all-over-print-recycled-unisex-hoodie-white-back-6759cd10942c1.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-hoodie-4/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-front-66d8acd29e037.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-back-66d8acd2a04eb.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-front-66d8acd2a22e0.webp",
                           hover_src:
                              "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-back-66d8acd2a4e7e.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-hoodie-3/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-front-66d8acc6cb7ed.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-back-66d8acc6cfd02.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-front-66d8acc6d5437.webp",
                           hover_src:
                              "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-back-66d8acc6e434f.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-hoodie-2/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-front-66d8acbbb0209.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-back-66d8acbbb2a91.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-hoodie/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-front-66d8acb400ca0.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-back-66d8acb405dca.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-hoodie-4/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-front-66d68481b763a.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-front-66d68481b763a.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-carbon-grey-front-66d68481bb744.webp",
                           hover_src:
                              "/merch/hoodies/transparent/unisex-premium-hoodie-carbon-grey-front-66d68481bb744.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-hoodie-3/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-front-66d68381cd923.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-front-66d68381cd923.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-carbon-grey-front-66d68381d156d.webp",
                           hover_src:
                              "/merch/hoodies/transparent/unisex-premium-hoodie-carbon-grey-front-66d68381d156d.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-hoodie-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-front-66d6833a9c842.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-front-66d6833a9c842.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-front-66d6833aa082a.webp",
                           hover_src:
                              "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-front-66d6833aa082a.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-hoodie/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-front-66d682fb345bc.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-front-66d682fb345bc.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-front-66d682fb37735.webp",
                           hover_src:
                              "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-front-66d682fb37735.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-unisex-hoodie-2/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-front-66d39304811f7.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-white-back-66d3930483306.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Unisex Hoodie",
                     description:
                        "Who knew that the softest hoodie you'll ever own comes with such a cool design. You won't regret buying this classic streetwear piece of apparel with a convenient pouch pocket and warm hood for chilly evenings.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-unisex-hoodie/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-front-66d3929533629.webp",
                           hover_src: "/merch/hoodies/transparent/unisex-premium-hoodie-black-back-66d3929536703.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-front-66d392953a500.webp",
                           hover_src:
                              "/merch/hoodies/transparent/unisex-premium-hoodie-charcoal-heather-back-66d3929541833.webp",
                        },
                     ],
                  },
               ],
               "T Shirts": [
                  {
                     title: "Xelis Neon Proofs Men's t-shirt",
                     description:
                        "Get to know your new favorite tee—it's super smooth, super comfortable, and made from a cotton touch polyester jersey that won't fade after washing.",
                     link: "https://poolpartynodes.com/product/xelis-custom-designs-mens-t-shirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-front-6757730de70ab.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-back-6757730de99be.webp",
                        },
                     ],
                  },
                  {
                     title: "Pulse of Xelis Men's t-shirt",
                     description:
                        "Get to know your new favorite tee—it's super smooth, super comfortable, and made from a cotton touch polyester jersey that won't fade after washing.",
                     link: "https://poolpartynodes.com/product/xelis-custom-design-mens-t-shirt-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-front-675771c3ce5f0.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-back-675771c3cf3e0.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Limitless Men's t-shirt",
                     description:
                        "Get to know your new favorite tee—it's super smooth, super comfortable, and made from a cotton touch polyester jersey that won't fade after washing.",
                     link: "https://poolpartynodes.com/product/xelis-custom-design-mens-t-shirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-front-67576fbf08f0e.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-back-67576fbf09b7c.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Eclipse Design Men's t-shirt",
                     description:
                        "Get to know your new favorite tee—it's super smooth, super comfortable, and made from a cotton touch polyester jersey that won't fade after washing.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-design-mens-t-shirt-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-front-6753063180417.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-back-6753063181056.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Men's t-shirt",
                     description:
                        "Get to know your new favorite tee—it's super smooth, super comfortable, and made from a cotton touch polyester jersey that won't fade after washing.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-mens-t-shirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-front-675a3e2fea542.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/all-over-print-mens-crew-neck-t-shirt-white-back-675a3e2feae40.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved All-Over Print Men's Athletic T-shirt",
                     description:
                        "A t-shirt perfect for all kinds of workouts. Its moisture management is sure to keep athletes dry and comfortable even during the most vigorous of workouts.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-all-over-print-mens-athletic-t-shirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/all-over-print-mens-athletic-t-shirt-white-front-675a40e3171e8.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/all-over-print-mens-athletic-t-shirt-white-back-675a40e317b47.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-mens-premium-heavyweight-tee-4/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d8ab568b537.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d8ab56910e0.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d8ab568eb67.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d8ab568fe0b.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-mens-premium-heavyweight-tee-3/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d8ab3ef18b7.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d8ab3f07d8a.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d8ab3f0186c.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d8ab3f063fd.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-mens-premium-heavyweight-tee-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d8ab1b0dc6b.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d8ab1b1060f.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d8ab1b11770.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d8ab1b139be.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-mens-premium-heavyweight-tee/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d8aaff73f49.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d8aaff77880.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d8aaff78a3f-600x600.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d8aaff7adcd.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo adidas space-dyed polo",
                     description:
                        "Experience the comfort and performance of adidas with this versatile polo. Made with high-quality recycled materials, it offers a comfortable fit that moves with you throughout the day. Besides, the space-dyed pattern adds a modern flair to make you stand out.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-adidas-space-dyed-polo-2/",
                     images: [
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/adidas-space-dyed-polo-shirt-black-melange-front-66d79913a76d2.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/adidas-space-dyed-polo-shirt-black-melange-right-66d79913a9a18.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo adidas space-dyed polo",
                     description:
                        "Experience the comfort and performance of adidas with this versatile polo. Made with high-quality recycled materials, it offers a comfortable fit that moves with you throughout the day. Besides, the space-dyed pattern adds a modern flair to make you stand out.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-adidas-space-dyed-polo/",
                     images: [
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/adidas-space-dyed-polo-shirt-grey-one-heather-front-66d798c02d86a.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/adidas-space-dyed-polo-shirt-grey-one-heather-right-66d798c030a74.webp",
                        },
                        {
                           color: "navy",
                           src: "/merch/t_shirts/transparent/adidas-space-dyed-polo-shirt-collegiate-navy-melange-front-66d798c0305ca.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/adidas-space-dyed-polo-shirt-collegiate-navy-melange-right-66d798c0307cf.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-mens-premium-heavyweight-tee-4/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d6870790969.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d6870795364.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d6870793386.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d6870793e44.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-mens-premium-heavyweight-tee-3/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d686ce11eb5.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d686ce16e6f.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d686ce154d0.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d686ce15f3a.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-mens-premium-heavyweight-tee-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d6864c16da7.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d6864c18ba6.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d6864c19a5b.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d6864c1afba.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-mens-premium-heavyweight-tee/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d686082d528.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d686082f409.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d6860831711.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d686083ae7f.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-10/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d54c0ae1235.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d54c0ae371f.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d54c0ae44c4.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d54c0ae5bc0.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-9/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d54bcb4af4a.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d54bcb4ce08.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d54bcb4d8a6.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d54bcb4efc7.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-8/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d54b715fcd6.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d54b716b09e.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d54b7167a8e.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d54b7168b18.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-7/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d54b20ec54e.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d54b20f32e3.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d54b20f069a.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d54b20f19d6.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-6/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d549c88223b.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d549c887b0c.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d549c885ec4.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d549c88695d.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-5/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d5496510dcd.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-back-66d5496514936.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d54965133a1.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-back-66d5496513ca4.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-4/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d548faee95d.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d548faf0430.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d548faf117c.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d548faf2ac5.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-3/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d548b208db0.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d548b20acc1.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d548b20bfe4.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d548b20e01b.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee-2/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-front-66d3a81b67b8d.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-white-right-66d3a81b6cf2b.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-front-66d3a81b6b67b.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-carbon-grey-right-66d3a81b6c186.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Men's premium heavyweight tee",
                     description:
                        "Elevate your outfit with the men's premium heavyweight tee. The tee has a structured, classy fit and is both durable and soft thanks to its ring-spun cotton material. Layer the t-shirt or wear it on its own and enjoy great looks with little effort!",
                     link: "https://poolpartynodes.com/product/xelis-logo-mens-premium-heavyweight-tee/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-front-66d3a7d39b004.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-black-back-66d3a7d39d7df.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-front-66d3a7d39ecf1.webp",
                           hover_src:
                              "/merch/t_shirts/transparent/mens-premium-heavyweight-tee-charcoal-heather-back-66d3a7d3a2657.webp",
                        },
                     ],
                  },
               ],
               Sweatshirts: [
                  {
                     title: "Xelis: Quadlemma Solved Unisex Sweatshirt",
                     description:
                        "Each unique, all-over printed sweatshirt is precision-cut and hand-sewn to achieve the best possible look and bring out the intricate design. What's more, the durable fabric with a cotton-feel face and soft brushed fleece inside means that this sweatshirt is bound to become your favorite for a long time.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-unisex-sweatshirt-4/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-front-675a3f6e75b6c.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-back-675a3f6e76966.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Neon Proofs Unisex Sweatshirt",
                     description:
                        "Each unique, all-over printed sweatshirt is precision-cut and hand-sewn to achieve the best possible look and bring out the intricate design. What's more, the durable fabric with a cotton-feel face and soft brushed fleece inside means that this sweatshirt is bound to become your favorite for a long time.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-unisex-sweatshirt-3/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-front-675a3cbfbaf60.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-back-675a3cbfbba61.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Night Moon Unisex Sweatshirt",
                     description:
                        "Each unique, all-over printed sweatshirt is precision-cut and hand-sewn to achieve the best possible look and bring out the intricate design. What's more, the durable fabric with a cotton-feel face and soft brushed fleece inside means that this sweatshirt is bound to become your favorite for a long time.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-unisex-sweatshirt-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-front-675a3c4bb5bec.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-back-675a3c4bb664d.webp",
                        },
                     ],
                  },
                  {
                     title: "Pulse of Xelis Unisex Sweatshirt",
                     description:
                        "Each unique, all-over printed sweatshirt is precision-cut and hand-sewn to achieve the best possible look and bring out the intricate design. What's more, the durable fabric with a cotton-feel face and soft brushed fleece inside means that this sweatshirt is bound to become your favorite for a long time.",
                     link: "https://poolpartynodes.com/product/xelis-custom-design-unisex-sweatshirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-front-675b68dbe0f43.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-back-675b68dbe1abb.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Limitless Unisex Sweatshirt",
                     description:
                        "Each unique, all-over printed sweatshirt is precision-cut and hand-sewn to achieve the best possible look and bring out the intricate design. What's more, the durable fabric with a cotton-feel face and soft brushed fleece inside means that this sweatshirt is bound to become your favorite for a long time.",
                     link: "https://poolpartynodes.com/product/xelis-custom-logo-unisex-sweatshirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-front-675a3a6968ee2.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/all-over-print-recycled-unisex-sweatshirt-white-back-675a3a6969819.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex organic raglan sweatshirt",
                     description:
                        "To do list: feel comfy and look stylish at the same time. Mark both tasks as done with the unisex organic raglan sweatshirt. Its brushed fleece lining will make you feel like you're being hugged by a cloud of softness . . . and the 100% cotton exterior will ensure a smooth feel on the outside.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-organic-raglan-sweatshirt-4/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-white-front-66d8b0bba525a.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-white-back-66d8b0bba71e1.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex organic raglan sweatshirt",
                     description:
                        "To do list: feel comfy and look stylish at the same time. Mark both tasks as done with the unisex organic raglan sweatshirt. Its brushed fleece lining will make you feel like you're being hugged by a cloud of softness . . . and the 100% cotton exterior will ensure a smooth feel on the outside.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-organic-raglan-sweatshirt-3/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-white-front-66d8b0761a289.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-white-back-66d8b0761da6c.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex organic raglan sweatshirt",
                     description:
                        "To do list: feel comfy and look stylish at the same time. Mark both tasks as done with the unisex organic raglan sweatshirt. Its brushed fleece lining will make you feel like you're being hugged by a cloud of softness . . . and the 100% cotton exterior will ensure a smooth feel on the outside.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-organic-raglan-sweatshirt-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-black-front-66d8b02a5f468.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-black-back-66d8b02a6075d.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-charcoal-melange-front-66d8b02a60abf.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-charcoal-melange-back-66d8b02a619cd.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Print Unisex organic raglan sweatshirt",
                     description:
                        "To do list: feel comfy and look stylish at the same time. Mark both tasks as done with the unisex organic raglan sweatshirt. Its brushed fleece lining will make you feel like you're being hugged by a cloud of softness . . . and the 100% cotton exterior will ensure a smooth feel on the outside.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-print-unisex-organic-raglan-sweatshirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-black-front-66d8ae7b23650.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-black-back-66d8b354754fe.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-charcoal-melange-back-66d8ae7b23b4f.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-organic-raglan-sweatshirt-charcoal-melange-back-66d8b35475f16.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-eco-sweatshirt-4/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-front-66d685ad4050b.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-back-66d685ad42e56.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-eco-sweatshirt-3/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-front-66d6856b5420e.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-back-66d6856b554a6.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-eco-sweatshirt-2/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-front-66d6853734767.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-back-66d6853735cb1.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-unisex-eco-sweatshirt/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-front-66d68507d15c1.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-back-66d68507d2cfc.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-logo-unisex-eco-sweatshirt-4/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-front-66d5517eb3b63.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-back-66d5517eb5241.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-logo-unisex-eco-sweatshirt-3/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-front-66d550f176b23.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-white-back-66d550f178248.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-logo-unisex-eco-sweatshirt-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-front-66d54ff4dce1d.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-back-66d54ff4debe8.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Unisex eco sweatshirt",
                     description:
                        "Elevate your style with this unisex eco sweatshirt. The shirt has a chic, crisp look and will go great with both casual and more dressed up outfits. Made of organic cotton, this sweatshirt is durable, comfy, and extra soft.",
                     link: "https://poolpartynodes.com/product/xelis-logo-unisex-eco-sweatshirt/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-front-66d54f06d25ad.webp",
                           hover_src:
                              "/merch/sweatshirts/transparent/unisex-eco-sweatshirt-black-back-66d54f06d523a.webp",
                        },
                     ],
                  },
               ],
               Pants: [
                  {
                     title: "Full Logo Jerzees Unisex Joggers",
                     description:
                        "Get ready for that 10K run or take it slow in your backyard—these joggers are sure to make you feel comfortable either way.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-jerzees-unisex-joggers-2/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/pants/transparent/unisex-joggers-athletic-heather-front-66d79795d9871.webp",
                           hover_src:
                              "/merch/pants/transparent/unisex-joggers-athletic-heather-back-66d79795daad4.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Jerzees Unisex Joggers",
                     description:
                        "Get ready for that 10K run or take it slow in your backyard—these joggers are sure to make you feel comfortable either way.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-jerzees-unisex-joggers/",
                     images: [
                        {
                           color: "gray",
                           src: "/merch/pants/transparent/unisex-joggers-black-heather-front-66d796a81ec6c.webp",
                           hover_src: "/merch/pants/transparent/unisex-joggers-black-heather-back-66d796a820d67.webp",
                        },
                        {
                           color: "navy",
                           src: "/merch/pants/transparent/unisex-joggers-j.-navy-front-66d796a8209c1.webp",
                           hover_src: "/merch/pants/transparent/unisex-joggers-j.-navy-back-66d796a820aa4.webp",
                        },
                        {
                           color: "black",
                           src: "/merch/pants/transparent/unisex-joggers-black-front-66d796a820bc0.webp",
                           hover_src: "/merch/pants/transparent/unisex-joggers-black-back-66d796a820c9d.webp",
                        },
                     ],
                  },
               ],
               Hats: [
                  {
                     title: "Full Logo Champion Dad Hat",
                     description:
                        "Rock your athletic look with this iconic hat. Crafted from premium twill and complete with an adjustable strap, it's your go-to for any activity.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-champion-dad-hat/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hats/transparent/champion-dad-hat-black-right-front-66d7b4b2ca85e.webp",
                           hover_src:
                              "/merch/hats/transparent/champion-dad-hat-black-product-details-2-66d7b4b2ccede.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Embroidered Beanie",
                     description:
                        "The perfect beanie has arrived! This embroidered beauty has a snug fit that ensures you're going to feel cozy and warm whatever you're doing.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-embroidered-beanie/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hats/transparent/knit-beanie-black-front-66d7b3e4c9de6.webp",
                           hover_src: "/merch/hats/transparent/knit-beanie-black-front-66d7b3e4c9de6.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Pom-Pom Beanie",
                     description:
                        "Expand your wardrobe with a classic embroidered beanie. Finished with a pom-pom on top, it offers tons of warmth and comfort, and is destined to find its way into all your favorite cold-weather looks.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-champion-dad-hat/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hats/transparent/pom-pom-knit-cap-black-front-66d7b4339cd94.webp",
                           hover_src: "/merch/hats/transparent/pom-pom-knit-cap-black-front-66d7b4339cd94.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hats/transparent/pom-pom-knit-cap-dark-heather-grey-black-front-66d7b4339ff21.webp",
                           hover_src:
                              "/merch/hats/transparent/pom-pom-knit-cap-dark-heather-grey-black-front-66d7b4339ff21.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Adidas Performance Cap",
                     description:
                        "Stay comfortable and protected with this moisture-wicking unisex hat. Its sleek design and iconic adidas logo add style to any look, while the UPF 50+ protection keeps you cool and dry.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-adidas-performance-cap/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hats/transparent/adidas-performance-cap-black-left-front-66d7b38775734.webp",
                           hover_src:
                              "/merch/hats/transparent/adidas-performance-cap-black-product-details-2-66d7b3877820b.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Dad Hat",
                     description:
                        "Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-dad-hat-2/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hats/transparent/classic-dad-hat-black-front-66d3a65988d2f.webp",
                           hover_src: "/merch/hats/transparent/classic-dad-hat-black-back-66d3a6598a73d.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hats/transparent/classic-dad-hat-dark-grey-front-66d3a6598addb.webp",
                           hover_src: "/merch/hats/transparent/classic-dad-hat-dark-grey-back-66d3a6598b2ca.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Full Logo Dad Hat",
                     description:
                        "Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-dad-hat/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/hats/transparent/classic-dad-hat-white-front-66d3a627d0892.webp",
                           hover_src: "/merch/hats/transparent/classic-dad-hat-white-back-66d3a627d2401.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Dad Hat",
                     description:
                        "Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.",
                     link: "https://poolpartynodes.com/product/xelis-logo-dad-hat-2/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/hats/transparent/classic-dad-hat-white-front-66d394c786882.webp",
                           hover_src: "/merch/hats/transparent/classic-dad-hat-white-back-66d394c789ade.webp",
                        },
                     ],
                  },
                  {
                     title: "Embroidered Logo Dad Hat",
                     description:
                        "Dad hats aren't just for dads. This one's got a low profile with an adjustable strap and curved visor.",
                     link: "https://poolpartynodes.com/product/xelis-logo-dad-hat/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/hats/transparent/classic-dad-hat-black-front-66d393b146fd5.webp",
                           hover_src: "/merch/hats/transparent/classic-dad-hat-black-back-66d393b148ff6.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/hats/transparent/classic-dad-hat-dark-grey-front-66d393b14974d.webp",
                           hover_src: "/merch/hats/transparent/classic-dad-hat-dark-grey-back-66d393b149c55.webp",
                        },
                     ],
                  },
               ],
               Stickers: [
                  {
                     title: "Circle Logo Bubble-free stickers",
                     description:
                        "These stickers are printed on durable, high opacity adhesive vinyl which makes them perfect for regular use, as well as for covering other stickers or paint. The high-quality vinyl ensures there are no bubbles when applying the stickers.",
                     link: "https://poolpartynodes.com/product/xelis-circle-logo-bubble-free-stickers-2/",
                     images: [
                        {
                           color: "#79f5d0",
                           src: "/merch/stickers/transparent/kiss-cut-stickers-white-4x4-default-66d792f549150.webp",
                           hover_src:
                              "/merch/stickers/transparent/kiss-cut-stickers-white-4x4-default-66d792f549150.webp",
                        },
                     ],
                  },
                  {
                     title: "Circle Logo Bubble-free stickers",
                     description:
                        "These stickers are printed on durable, high opacity adhesive vinyl which makes them perfect for regular use, as well as for covering other stickers or paint. The high-quality vinyl ensures there are no bubbles when applying the stickers.",
                     link: "https://poolpartynodes.com/product/xelis-circle-logo-bubble-free-stickers/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/stickers/transparent/kiss-cut-stickers-white-4x4-default-66d793e535f92.webp",
                           hover_src:
                              "/merch/stickers/transparent/kiss-cut-stickers-white-4x4-default-66d793e535f92.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Bubble-free stickers",
                     description:
                        "These stickers are printed on durable, high opacity adhesive vinyl which makes them perfect for regular use, as well as for covering other stickers or paint. The high-quality vinyl ensures there are no bubbles when applying the stickers.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-bubble-free-stickers/",
                     images: [
                        {
                           color: "#79f5d0",
                           src: "/merch/stickers/transparent/kiss-cut-stickers-white-5.5x5.5-default-66d794af94e40.webp",
                           hover_src:
                              "/merch/stickers/transparent/kiss-cut-stickers-white-5.5x5.5-default-66d794af94e40.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Bubble-free stickers",
                     description:
                        "These stickers are printed on durable, high opacity adhesive vinyl which makes them perfect for regular use, as well as for covering other stickers or paint. The high-quality vinyl ensures there are no bubbles when applying the stickers.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-bubble-free-stickers-2/",
                     images: [
                        {
                           color: "#79f5d0",
                           src: "/merch/stickers/transparent/kiss-cut-stickers-white-15x3.75-default-66d79154f089b.webp",
                           hover_src:
                              "/merch/stickers/transparent/kiss-cut-stickers-white-15x3.75-default-66d79154f089b.webp",
                        },
                     ],
                  },
               ],
               Accessories: [
                  {
                     title: "Xelis: Quadlemma Solved Poster",
                     description:
                        "Museum-quality posters made on thick matte paper. Add a wonderful accent to your room and office with these posters that are sure to brighten any environment.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-poster/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/enhanced-matte-paper-poster-in-11x14-front-675dd06caa1e0.webp",
                           hover_src:
                              "/merch/accessories/transparent/enhanced-matte-paper-poster-in-11x14-front-675dd06caa1e0.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Stainless steel water bottle with a straw lid",
                     description:
                        "Stay hydrated all day with this 32 oz (950 ml) water bottle. It's ideal for workouts or busy days, with a wide-mouth foldable straw for spill-free sipping and a rotating handle for easy carrying.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-stainless-steel-water-bottle-with-a-straw-lid/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/stainless-steel-water-bottle-with-a-straw-lid-white-32-oz-front-675dd015bb9b1.webp",
                           hover_src:
                              "/merch/accessories/transparent/stainless-steel-water-bottle-with-a-straw-lid-white-32-oz-left-675dd015bc5e1.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Black Glossy Mug",
                     description:
                        "This cupboard essential is sturdy, sleek, and perfect for your morning java or afternoon tea.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-black-glossy-mug/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/black-glossy-mug-black-15-oz-front-675dcf70dce11.webp",
                           hover_src:
                              "/merch/accessories/transparent/black-glossy-mug-black-11-oz-handle-on-right-675dcf70dd629.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Flag",
                     description:
                        "Who doesn't want to turn their house into a home? Brighten up your space by adding this unique flag to your wall. Your flag won't crease or shrink thanks to the polyester material and will last a long time.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-flag/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/all-over-print-flag-white-front-675dce155241c.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-flag-white-product-details-675dce1552d93.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Tote bag",
                     description: "A spacious and trendy tote bag to help you carry around everything that matters.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-tote-bag/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/all-over-print-tote-bag-black-15x15-front-675dcdccb2751.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-tote-bag-black-15x15-front-675dcdccb2109.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Drawstring bag",
                     description:
                        "Combine your love for vibrant prints and a sporty style with a cool drawstring bag. It's a must-have gym essential that can be worn as a backpack with drawstring closure at top, and narrow, contrasting shoulder straps.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-drawstring-bag/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/all-over-print-drawstring-bag-white-mockup-675dcd849d6af.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-drawstring-bag-white-mockup-675dcd849d6af.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Utility crossbody bag",
                     description:
                        "This bag is sturdy, stylish, and ready to go wherever you do. With adjustable straps and two spacious pockets, it's the ultimate accessory for hiking, festivals, and everyday use.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-utility-crossbody-bag/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/all-over-print-utility-crossbody-bag-white-front-675dccf602bee.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-utility-crossbody-bag-white-front-675dccf602bee.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis: Quadlemma Solved Backpack",
                     description:
                        "This medium size backpack is just what you need for daily use or sports activities! The pockets (including one for your laptop) give plenty of room for all your necessities, while the water-resistant material will protect them from the weather.",
                     link: "https://poolpartynodes.com/product/xelis-quadlemma-solved-backpack/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/all-over-print-backpack-white-front-675dcc8a802d0.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-backpack-white-back-675dcc8a80d84.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Drawstring bag",
                     description:
                        "Combine your love for vibrant prints and a sporty style with a cool drawstring bag. It's a must-have gym essential that can be worn as a backpack with drawstring closure at top, and narrow, contrasting shoulder straps.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-drawstring-bag/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/accessories/transparent/all-over-print-drawstring-bag-white-mockup-66d7a17d65546.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-drawstring-bag-white-mockup-66d7a17d65546.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Fanny Pack",
                     description:
                        "Fanny pack is the ultimate accessory for people on the go. And this waist bag has everything—the right size, a small inside pocket, and adjustable straps—to become your favorite fashion item if you're going to a festival, getting ready for a vacation, or just like to keep your hands free.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-fanny-pack/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/accessories/transparent/all-over-print-fanny-pack-white-front-left-66d7a102906e5.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-fanny-pack-white-front-left-66d7a102906e5.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Tote bag",
                     description: "A spacious and trendy tote bag to help you carry around everything that matters.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-tote-bag/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/accessories/transparent/all-over-print-tote-bag-black-15x15-front-66d79ea12a0e9.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-tote-bag-black-15x15-front-66d79ea12a0e9.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Champion backpack",
                     description:
                        "Gear up for your next urban excursion! Crafted with durability in mind, this Champion Backpack boasts ample storage space and a comfortable design, perfect for carrying your essentials while maintaining your streetwear style.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-champion-backpack/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/champion-backpack-black-front-66d79cc31bfb8.webp",
                           hover_src: "/merch/accessories/transparent/champion-backpack-black-back-66d79cc31d5ed.webp",
                        },
                        {
                           color: "gray",
                           src: "/merch/accessories/transparent/champion-backpack-heather-oxford-grey-front-66d79cc31d6b4.webp",
                           hover_src:
                              "/merch/accessories/transparent/champion-backpack-heather-oxford-grey-back-66d79cc31d742.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Premium sherpa blanket",
                     description:
                        "There's something special about having that one blanket you know will bring you comfort no matter when and where. It's time to take a new one home—the embroidered premium sherpa blanket has sheeny fleece fabric on one side and super-soft sherpa fabric on the other that'll keep you warm and snug. The blanket's plush look makes it a great home accessory as well as the perfect travel buddy.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-premium-sherpa-blanket/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/embroidered-premium-sherpa-blanket-black-front-66d7ac950f77c.webp",
                           hover_src:
                              "/merch/accessories/transparent/embroidered-premium-sherpa-blanket-black-front-66d7ac950f77c.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo White glossy mug",
                     description:
                        "Whether you're drinking your morning coffee, evening tea, or something in between—this mug's for you! It's sturdy and glossy with a vivid print that'll withstand the microwave and dishwasher.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-white-glossy-mug/",
                     images: [
                        {
                           color: "white",
                           src: "/merch/accessories/transparent/white-glossy-mug-white-11-oz-front-view-66d7ab5b1517a.webp",
                           hover_src:
                              "/merch/accessories/transparent/white-glossy-mug-white-11-oz-handle-on-left-66d7ab5b1001b.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Black Glossy Mug",
                     description:
                        "Whether you're drinking your morning coffee, evening tea, or something in between—this mug's for you! It's sturdy and glossy with a vivid print that'll withstand the microwave and dishwasher.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-black-glossy-mug/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/black-glossy-mug-black-11-oz-front-66d7ab013f60f.webp",
                           hover_src:
                              "/merch/accessories/transparent/black-glossy-mug-black-11-oz-handle-on-left-66d7ab013f4d5.webp",
                        },
                     ],
                  },
                  {
                     title: "Full Logo Flag",
                     description:
                        "Who doesn't want to turn their house into a home? Brighten up your space by adding this unique flag to your wall. Your flag won't crease or shrink thanks to the polyester material and will last a long time.",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-flag/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/all-over-print-flag-white-front-66d7a999cb46b.webp",
                           hover_src:
                              "/merch/accessories/transparent/all-over-print-flag-white-front-66d7a999cb46b.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Full Logo Tough case for Samsung®",
                     description:
                        "Make your phone look like a work of art with this tough-yet-sleek phone case. Made with impact-resistant and shock-absorbing materials, it'll keep your phone safe from bumps and scratches. Plus, the dual-layer design offers extra durability and protection. It's time to add some fun, protective flair to your phone!",
                     link: "https://poolpartynodes.com/product/xelis-full-logo-tough-case-for-samsung/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/tough-case-for-samsung-glossy-samsung-galaxy-s10-plus-front-66d73db4f0604.webp",
                           hover_src:
                              "/merch/accessories/transparent/tough-case-for-samsung-glossy-samsung-galaxy-s10-plus-front-66d73db4f0604.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Full Logo Snap case for Samsung®",
                     description:
                        "With this snap case, you'll never have to compromise style for safety. Its slim and lightweight design is perfect for a busy lifestyle, adding minimal weight to your device while still keeping it protected.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-snap-case-for-samsung/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/snap-case-for-samsung-glossy-samsung-galaxy-s10-front-66d689423b97d.webp",
                           hover_src:
                              "/merch/accessories/transparent/snap-case-for-samsung-glossy-samsung-galaxy-s10-front-66d689423b97d.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Full Logo Snap case for iPhone®",
                     description:
                        "This premium phone case is made for all minimalist style lovers. It's classy and lightweight but will certainly do the job when it comes to keeping your phone safe.",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-snap-case-for-iphone/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/snap-case-for-iphone-glossy-iphone-11-pro-front-66d688cd22cec.webp",
                           hover_src:
                              "/merch/accessories/transparent/snap-case-for-iphone-glossy-iphone-11-pro-front-66d688cd22cec.webp",
                        },
                     ],
                  },
                  {
                     title: "Xelis Full Logo Tough Case for iPhone®",
                     description:
                        "Protect your phone with style using a durable, dual-layered case. The outer shell is made of impact-resistant polycarbonate, while the inner lining sports TPU lining for maximum impact absorption. Keep your phone fashionable and safe all year round!",
                     link: "https://poolpartynodes.com/product/xelis-embroidered-full-logo-tough-case-for-iphone/",
                     images: [
                        {
                           color: "black",
                           src: "/merch/accessories/transparent/tough-case-for-iphone-glossy-iphone-11-pro-front-66d688824f3d5.webp",
                           hover_src:
                              "/merch/accessories/transparent/tough-case-for-iphone-glossy-iphone-11-pro-front-66d688824f3d5.webp",
                        },
                     ],
                  },
               ],
            },
            j = r(5214),
            X = r.n(j),
            I = {
               name: "MerchView",
               components: {
                  NavigationMenu: F.A,
               },
               mounted() {
                  document.title = X()["/merch"].title;
               },
               computed: {
                  filter() {
                     return this.$route.query.filter || "Hoodies";
                  },
                  all_merch() {
                     var e = [];
                     return (
                        Object.keys(H).forEach((t) => {
                           const r = H[t] || [];
                           r.forEach((t) => e.push(t));
                        }),
                        e
                     );
                  },
                  items() {
                     return H[this.filter] || [];
                  },
                  itemCount() {
                     return this.items.length;
                  },
                  itemIndex() {
                     var e = this.$route.query.item,
                        t = parseInt(e) || 1;
                     return t > this.items.length ? 1 : t;
                  },
                  colorIndex() {
                     var e = this.$route.query.color,
                        t = parseInt(e || 1);
                     return t;
                  },
               },
               data() {
                  return {
                     modal_xelis_option: !1,
                     img_key: "src",
                     filters: Object.keys(H),
                  };
               },
               methods: {
                  isActiveFilter(e) {
                     return this.filter === e;
                  },
                  isActiveColor(e) {
                     return this.colorIndex === e;
                  },
                  setFilter(e) {
                     this.$router.push({
                        path: "/merch",
                        query: {
                           filter: e,
                           item: 1,
                           color: 1,
                        },
                     });
                  },
                  filterIcon(e) {
                     let t = "";
                     switch (e) {
                        case "Hoodies":
                           t =
                              '<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 512.001 512.001">\n            <polygon points="285.063,368.426 226.939,368.426 209.708,394.274 209.708,408.106 302.294,408.106 302.294,394.274 \t\t"/>\n            <path d="M509.45,351.636l-97.204-205.209c-6.564-13.859-20.527-22.693-35.86-22.693h-14.569v-13.227\n              c0-58.439-47.374-105.814-105.814-105.814c-58.438,0-105.812,47.374-105.814,105.812v13.227v0.001h-14.569\n              c-15.334,0-29.296,8.835-35.86,22.693L2.552,351.636c-6.161,13.006-0.795,28.55,12.076,34.985l32.536,16.269\n              c13.068,6.534,28.957,1.237,35.491-11.83l27.85-55.699v145.494c0,14.61,11.843,26.453,26.453,26.453h238.08\n              c14.61,0,26.453-11.843,26.453-26.453V335.361l27.85,55.699c6.534,13.068,22.423,18.364,35.491,11.83l32.536-16.269\n              C510.243,380.185,515.609,364.641,509.45,351.636z M317.125,77.439l-61.125,61.125l-61.125-61.125H317.125z M341.974,447.786\n              H170.027v-65.528l35.675-53.513h100.597l35.675,53.513V447.786z"/>\n          </svg>';
                           break;
                        case "T Shirts":
                           t =
                              '<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 295.526 295.526">\n            <path d="M147.763,44.074c12.801,0,23.858-8.162,27.83-20.169c-7.578,2.086-17.237,3.345-27.83,3.345\n              c-10.592,0-20.251-1.259-27.828-3.345C123.905,35.911,134.961,44.074,147.763,44.074z"/>\n            <path d="M295.158,58.839c-0.608-1.706-1.873-3.109-3.521-3.873l-56.343-26.01c-11.985-4.06-24.195-7.267-36.524-9.611\n              c-0.434-0.085-0.866-0.126-1.292-0.126c-3.052,0-5.785,2.107-6.465,5.197c-4.502,19.82-22.047,34.659-43.251,34.659\n              c-21.203,0-38.749-14.838-43.25-34.659c-0.688-3.09-3.416-5.197-6.466-5.197c-0.426,0-0.858,0.041-1.292,0.126\n              c-12.328,2.344-24.538,5.551-36.542,9.611L3.889,54.965c-1.658,0.764-2.932,2.167-3.511,3.873\n              c-0.599,1.726-0.491,3.589,0.353,5.217l24.46,48.272c1.145,2.291,3.474,3.666,5.938,3.666c0.636,0,1.281-0.092,1.917-0.283\n              l27.167-8.052v161.97c0,3.678,3.001,6.678,6.689,6.678h161.723c3.678,0,6.67-3.001,6.67-6.678V107.66l27.186,8.052\n              c0.636,0.191,1.28,0.283,1.915,0.283c2.459,0,4.779-1.375,5.94-3.666l24.469-48.272C295.629,62.428,295.747,60.565,295.158,58.839z\n              "/>\n          </svg>';
                           break;
                        case "Sweatshirts":
                           t =
                              '<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 512 512">\n              <path d="M509.865,305.512c-33.633-58.251-4.392-7.595-123.055-213.172c-19.073-33-51.507-29.193-72.517-29.193\n                c-4.426,0-8.65,1.841-11.664,5.082l-42.732,45.96c-2.116,2.273-5.691,2.259-7.788,0.005l-42.737-45.965\n                c-3.013-3.241-7.238-5.082-11.664-5.082c-20.493,0-53.344-3.957-72.511,29.199C7.31,296.557,33.209,251.696,2.135,305.512\n                c-4.397,7.615-1.786,17.36,5.83,21.758l69.42,40.072c7.619,4.397,17.357,1.786,21.755-5.83\n                c34.714-60.122,18.653-32.3,36.185-62.672v84.629c0,8.082,6.026,14.743,13.827,15.773v33.832c0,8.796,7.131,15.927,15.927,15.927\n                h181.839c8.796,0,15.927-7.131,15.927-15.927v-33.83c7.806-1.026,13.837-7.688,13.837-15.774v-84.61\n                c20.002,34.645,6.893,11.943,36.174,62.652c4.398,7.616,14.137,10.227,21.755,5.83l69.42-40.072\n                C511.649,322.873,514.263,313.129,509.865,305.512z M79.519,331.792l-41.833-24.147l7.197-12.465l41.833,24.147L79.519,331.792z\n                M330.993,417.147H181.008v-17.746h149.985V417.147z M432.481,331.793l-7.197-12.465l41.833-24.147l7.197,12.465L432.481,331.793z\n                "/>\n          </svg>';
                           break;
                        case "Pants":
                           t =
                              '<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 512 512">\n            <path d="M286.936,96.786l18.597,32.212c4.933,8.542,2.005,19.466-6.537,24.397c-8.541,4.932-19.466,2.006-24.397-6.537\n              L256,114.646l-18.599,32.213c-4.935,8.548-15.862,11.466-24.397,6.537c-8.543-4.932-11.47-15.855-6.537-24.397l18.599-32.213\n              H89.561l30.603,330.095h125.489L256,357.895l10.347,68.985h125.489l30.602-330.095H286.936z"/>\n            <path d="M271.707,462.602l5.127,34.187c1.312,8.743,8.822,15.211,17.663,15.211h73.168c9.226,0,16.933-7.026,17.784-16.211\n              l3.077-33.187H271.707z"/>\n            <path d="M406.159,0H105.841c-9.864,0-17.86,7.997-17.86,17.86v43.204h336.039V17.86C424.019,7.997,416.023,0,406.159,0z"/>\n            <path d="M123.477,462.602l3.077,33.187c0.851,9.186,8.558,16.211,17.783,16.211h73.168c8.841,0,16.351-6.468,17.663-15.211\n              l5.128-34.187H123.477z"/>\n          </svg>';
                           break;
                        case "Hats":
                           t =
                              '<svg width="20px" height="20px" viewBox="0 0 512 512" fill="currentColor">\n            <path d="M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75\n              c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234\n              c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203\n              C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218\n              C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891\n              C375.352,282.254,287.258,337.708,132.289,308.348z"/>\n          </svg>';
                           break;
                        case "Stickers":
                           t =
                              '<svg width="20px" height="20px" viewBox="0 0 24 24" fill="currentColor">\n            <path d="M21.9595 11.6608C20.7695 10.9108 19.3895 10.5008 17.9695 10.5008C13.8295 10.5008 10.4695 13.8608 10.4695 18.0008C10.4695 19.4208 10.8695 20.7908 11.6195 21.9808C11.1595 21.9708 10.6895 21.9208 10.2095 21.8508C6.0995 21.1508 2.7895 17.8208 2.1095 13.7008C0.979502 6.85075 6.8195 1.01075 13.6695 2.14075C17.7895 2.82075 21.1195 6.13075 21.8195 10.2408C21.8995 10.7208 21.9495 11.2008 21.9595 11.6608Z" />\n            <path d="M13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41" />\n          </svg>';
                           break;
                        case "Accessories":
                           t =
                              '<svg fill="currentColor" width="20px" height="20px" viewBox="0 0 43.181 43.181">\n            <path d="M25.629,11.02h7.332c-9.344-9.21-13.398-9.21-22.742,0h7.332C20.669,8.475,22.51,8.475,25.629,11.02z"/>\n            <path d="M39.629,13.02H7.541c-2.762,0-5.264,2.223-5.59,4.965l-1.915,16.12c-0.326,2.742,1.649,4.965,4.41,4.965h34.29\n              c2.763,0,4.735-2.223,4.41-4.965L40.76,14.022C40.426,13.642,40.047,13.305,39.629,13.02z"/>\n          </svg>';
                           break;
                     }
                     return t;
                  },
                  prevItemIndex() {
                     this.itemIndex <= 0 ||
                        this.$router.push({
                           path: "/merch",
                           query: {
                              filter: this.filter,
                              item: this.itemIndex - 1,
                           },
                        });
                  },
                  nextItemIndex() {
                     this.itemIndex >= this.itemCount ||
                        this.$router.push({
                           path: "/merch",
                           query: {
                              filter: this.filter,
                              item: this.itemIndex + 1,
                           },
                        });
                  },
                  setColorIndex(e) {
                     this.$router.push({
                        path: "/merch",
                        query: {
                           filter: this.filter,
                           item: this.itemIndex,
                           color: e,
                        },
                     });
                  },
                  filterItemCount(e) {
                     return H[e].length;
                  },
                  handleXelisOptionModal(e) {
                     e.target.classList.contains("modal-backdrop") && (this.modal_xelis_option = !1);
                  },
               },
            },
            S = r(1241);
         const U = (0, S.A)(I, [["render", T]]);
         var P = U;
      },
   },
]);
//# sourceMappingURL=merch.a4bcfb5d.js.map
