(function () {
   var L = {
         6422: function (L, t) {
            "use strict";
            t.A = [
               {
                  name: "Project Initialized",
                  description: "Laying the foundation for everythiing to rest upon. First commit! (Not the launch)",
                  status: "Completed",
                  year: "2021",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q1",
               },
               {
                  name: "BlockDAG Implementation",
                  description: "Use DAG structure instead of linear blockchain.",
                  status: "Completed",
                  year: "2023",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q2",
               },
               {
                  name: "XSWD",
                  description: "Permissioned protocol that uses WebSocket to exchange data between wallet and dApp.",
                  status: "Completed",
                  year: "2023",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q3",
               },
               {
                  name: "Client Protocol",
                  description:
                     "Accept multiple occurences of the same transactions. Avoid excluding entire block due to collision.",
                  status: "Completed",
                  year: "2023",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q4",
               },
               {
                  name: "Homomorphic Encryption",
                  description: "Use ElGamal to provide privacy on transferred amounts and wallet balances.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q1",
               },
               {
                  name: "Difficulty Adjustement",
                  description:
                     "Use Kalman Filter to estimate the network's hash rate and adjust the difficulty target accurately.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q1",
               },
               {
                  name: "XELIS Hash",
                  description: "New CPU and GPU friendly algo. Memory focused and FPGAs, ASIC resistance.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q1",
               },
               {
                  name: "Block Explorer",
                  description: "Interface to track and verify txs on the network. Graphic to view the BlockDAG.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "High",
                  quarter: "Q1",
               },
               {
                  name: "Indexer & Stats Tools",
                  description:
                     "Consolidate blockchain data into structured tables for seamless analysis, with tools for data visualization.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "Mid",
                  quarter: "Q1",
               },
               {
                  name: "Genesix Wallet (Desktop & Mobile)",
                  description: "New official XELIS wallet written in Flutter.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "High",
                  quarter: "Q1",
               },
               {
                  name: "Documentations",
                  description:
                     "Comprehensive project resources: detailed guides, feature overviews, APIs, SDKs, and more.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "High",
                  quarter: "Q1",
               },
               {
                  name: "BoostSync & FastSync",
                  description:
                     "Synchronize the full blockchain faster in parallel or instantly using the last chain state.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "Mid",
                  quarter: "Q2",
               },
               {
                  name: "Project Mainnet Launch",
                  description: "The mainnet was launched on April 20, 2024, at 3PM UTC.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q2",
               },
               {
                  name: "XELIS Hash V2",
                  description: "Improvement on all stages.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q2",
               },
               {
                  name: "Network Upgrade #1",
                  description:
                     "Introduce XELIS Hash v2 live to enhance resistance against FPGAs. Also includes fix for low-bits hash.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q2",
               },
               {
                  name: "Status Page",
                  description: "Status of official nodes with latency.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "Low",
                  quarter: "Q2",
               },
               {
                  name: "Mainnet Faucet",
                  description: "Easily receive dust in your wallet to interact with the XELIS ecosystem.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "Low",
                  quarter: "Q2",
               },
               {
                  name: "Multisig",
                  description: "Multi-signature wallet: all keys to spend, one to view all balances.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "FastSync Rework",
                  description: "New fetching logic and improved storage solution.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "ZK Proof",
                  description: "Use Bulletproofs to create efficient range proofs without trusted sources.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "Q2",
               },
               {
                  name: "Whitepaper",
                  description: "General overview of the project, featuring technical explanations.",
                  status: "Completed",
                  year: "2024",
                  tag: "",
                  priority: "High",
                  quarter: "Q4",
               },
               {
                  name: "Paper Wallet",
                  description: "Generate offline keys and print for long term storage.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "P2P Key Enchange Encryption",
                  description: "Replace P2P handshake with DH for more secure channel between peers.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "Balance Proof",
                  description: "One-time proof to securely reveal the account balance of a specific asset.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "Ownership Proof",
                  description: "One-time proof to verify that you own at least N amounts of a specific asset.",
                  status: "Completed",
                  year: "2024",
                  tag: "Blockchain",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "Genesix Update v0.0.6",
                  description: "New official wallet v0.0.6 update. Bunch of new goodies and bug fixes.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "XVM - Enums",
                  description: "Useful for future event system.",
                  status: "Completed",
                  year: "2024",
                  tag: "XVM",
                  priority: "High",
                  quarter: "Q4",
               },
               {
                  name: "WooCommerce Payment",
                  description: "New WooCommerce payment plugin. Easily accept XELIS for online business.",
                  status: "Completed",
                  year: "2024",
                  tag: "Plugin",
                  priority: "High",
                  quarter: "Q4",
               },
               {
                  name: "Merch Store",
                  description:
                     "Partnership with retailers to offer XEL goodies through an eCommerce website, along with a dedicated XELIS merch front page.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "XVM Playground",
                  description: "An accessible webpage to experiment with coding in the XELIS programming language.",
                  status: "Completed",
                  year: "2024",
                  tag: "App",
                  priority: "Mid",
                  quarter: "Q4",
               },
               {
                  name: "XVM - Shunting Yard Algo",
                  description: "Priority rules for code execution flow.",
                  status: "In Progress",
                  year: "2024",
                  tag: "XVM",
                  priority: "High",
                  quarter: "Q4",
               },
               {
                  name: "XVM - Optimizations",
                  description: "Reduce the cost of running Smart Contracts.",
                  status: "In Progress",
                  year: "2024",
                  tag: "XVM",
                  priority: "High",
                  quarter: "Q4",
               },
               {
                  name: "VSCode Extension for XVM",
                  description:
                     "Syntax highlighting for Visual Code. Enhance code readability for developing Smart Contracts.",
                  status: "In Progress",
                  year: "2024",
                  tag: "Plugin",
                  priority: "Low",
                  quarter: "Q4",
               },
               {
                  name: "Genesix Update v0.0.7",
                  description: "Add tx timestamp, improve seed recovery UX, and launch the app on Android & IOS.",
                  status: "In Progress",
                  year: "2025",
                  tag: "App",
                  priority: "Mid",
                  quarter: "",
               },
               {
                  name: "XELIS Quests",
                  description: "A new interactive guide to easily onboard newcomers in the XELIS world.\t",
                  status: "Planned",
                  year: "2025",
                  tag: "App",
                  priority: "Low",
                  quarter: "",
               },
               {
                  name: "Ledger App",
                  description: "XELIS integration with Ledger devices.",
                  status: "Planned",
                  year: "2025",
                  tag: "App",
                  priority: "Low",
                  quarter: "",
               },
               {
                  name: "Smart Contract Integration",
                  description: "Integration of XVM into the XELIS blockchain core. Write decentralized code.",
                  status: "In Progress",
                  year: "2025",
                  tag: "Blockchain",
                  priority: "High",
                  quarter: "",
               },
               {
                  name: "XELIS DEX",
                  description: "Smart contract based liquidity pools, swaps, and spot trading.",
                  status: "Planned",
                  year: "2025",
                  tag: "App",
                  priority: "High",
                  quarter: "",
               },
            ];
         },
         3031: function (L, t, e) {
            "use strict";
            var o = e(5130),
               i = e(6768),
               r = e(4232);
            const a = {
               key: 0,
               id: "noise_effect",
            };
            function n(L, t, e, n, s, l) {
               const d = (0, i.g2)("router-view"),
                  h = (0, i.g2)("FooterSection");
               return (
                  (0, i.uX)(),
                  (0, i.CE)(
                     i.FK,
                     null,
                     [
                        l.isSafari ? (0, i.Q3)("", !0) : ((0, i.uX)(), (0, i.CE)("div", a)),
                        (0, i.bF)(d, null, {
                           default: (0, i.k6)(({ Component: t }) => [
                              (0, i.bF)(
                                 o.eB,
                                 {
                                    name: "fade-router",
                                    mode: "out-in",
                                    css: !L.preRendered,
                                 },
                                 {
                                    default: (0, i.k6)(() => [((0, i.uX)(), (0, i.Wv)((0, i.$y)(t)))]),
                                    _: 2,
                                 },
                                 1032,
                                 ["css"]
                              ),
                           ]),
                           _: 1,
                        }),
                        (0, i.bF)(
                           h,
                           {
                              class: (0, r.C4)({
                                 safari: l.isSafari,
                              }),
                           },
                           null,
                           8,
                           ["class"]
                        ),
                     ],
                     64
                  )
               );
            }
            var s = e(3935);
            const l = {
               class: "bottom-menu",
            };
            function d(L, t, e, o, r, a) {
               const n = (0, i.g2)("CircuitImg"),
                  d = (0, i.g2)("router-link");
               return (
                  (0, i.uX)(),
                  (0, i.CE)("footer", null, [
                     (0, i.bF)(n),
                     (0, i.Lk)("div", null, [
                        t[7] ||
                           (t[7] = (0, i.Lk)(
                              "div",
                              {
                                 id: "bottom_logo",
                              },
                              [
                                 (0, i.Lk)("img", {
                                    src: s,
                                 }),
                                 (0, i.Lk)("div", null, "XELIS"),
                              ],
                              -1
                           )),
                        (0, i.Lk)("div", null, [
                           (0, i.Lk)("div", l, [
                              (0, i.Lk)("div", null, [
                                 (0, i.bF)(
                                    d,
                                    {
                                       to: {
                                          name: "home",
                                          hash: "#objectives",
                                       },
                                    },
                                    {
                                       default: (0, i.k6)(() => t[0] || (t[0] = [(0, i.eW)(" Objectives ")])),
                                       _: 1,
                                    }
                                 ),
                                 (0, i.bF)(
                                    d,
                                    {
                                       to: {
                                          name: "home",
                                          hash: "#network",
                                       },
                                    },
                                    {
                                       default: (0, i.k6)(() => t[1] || (t[1] = [(0, i.eW)(" Network ")])),
                                       _: 1,
                                    }
                                 ),
                                 (0, i.bF)(
                                    d,
                                    {
                                       to: {
                                          name: "home",
                                          hash: "#supply",
                                       },
                                    },
                                    {
                                       default: (0, i.k6)(() => t[2] || (t[2] = [(0, i.eW)(" Supply ")])),
                                       _: 1,
                                    }
                                 ),
                                 (0, i.bF)(
                                    d,
                                    {
                                       to: {
                                          name: "home",
                                          hash: "#roadmap",
                                       },
                                    },
                                    {
                                       default: (0, i.k6)(() => t[3] || (t[3] = [(0, i.eW)(" Roadmap ")])),
                                       _: 1,
                                    }
                                 ),
                                 (0, i.bF)(
                                    d,
                                    {
                                       to: {
                                          name: "home",
                                          hash: "#socials",
                                       },
                                    },
                                    {
                                       default: (0, i.k6)(() => t[4] || (t[4] = [(0, i.eW)(" Socials ")])),
                                       _: 1,
                                    }
                                 ),
                              ]),
                              t[5] ||
                                 (t[5] = (0, i.Lk)(
                                    "div",
                                    null,
                                    [
                                       (0, i.Lk)(
                                          "a",
                                          {
                                             href: "https://docs.xelis.io/",
                                             target: "_blank",
                                          },
                                          " Documentation "
                                       ),
                                       (0, i.Lk)(
                                          "a",
                                          {
                                             href: "https://explorer.xelis.io",
                                             target: "_blank",
                                          },
                                          " Block Explorer "
                                       ),
                                       (0, i.Lk)(
                                          "a",
                                          {
                                             href: "https://explorer.xelis.io/dag",
                                             target: "_blank",
                                          },
                                          " DAG Viewer "
                                       ),
                                       (0, i.Lk)(
                                          "a",
                                          {
                                             href: "https://github.com/xelis-project",
                                             target: "_blank",
                                          },
                                          " GitHub "
                                       ),
                                    ],
                                    -1
                                 )),
                           ]),
                           t[6] ||
                              (t[6] = (0, i.Lk)(
                                 "p",
                                 null,
                                 [
                                    (0, i.eW)(
                                       " XELIS is a private blockDAG with Homomorphic Encryption and Smart Contracts."
                                    ),
                                    (0, i.Lk)("br"),
                                    (0, i.eW)(
                                       " Use our tools and software at your own risk, we will not take any responsibility in the way it is used. "
                                    ),
                                 ],
                                 -1
                              )),
                        ]),
                     ]),
                     t[8] ||
                        (t[8] = (0, i.Lk)(
                           "div",
                           {
                              class: "copyright",
                           },
                           [
                              (0, i.Lk)("div", null, " © 2024 Copyright "),
                              (0, i.Lk)("div", null, [
                                 (0, i.eW)(" Website designed by "),
                                 (0, i.Lk)(
                                    "a",
                                    {
                                       href: "https://exactly.digital/",
                                       target: "_blank",
                                    },
                                    " exactly.digital "
                                 ),
                                 (0, i.eW)(" & integrated by "),
                                 (0, i.Lk)(
                                    "a",
                                    {
                                       href: "https://github.com/HectoFR",
                                       target: " _blank",
                                    },
                                    " HectoFR "
                                 ),
                              ]),
                           ],
                           -1
                        )),
                  ])
               );
            }
            var h = e(4274),
               p = {
                  name: "NodesSection",
                  components: {
                     CircuitImg: h.A,
                  },
               },
               C = e(1241);
            const c = (0, C.A)(p, [["render", d]]);
            var u = c;
            e(6429);
            const k = {
                  class: "header-content",
               },
               m = {
                  class: "bg",
               },
               f = {
                  id: "home",
               };
            function g(L, t, e, o, a, n) {
               const s = (0, i.g2)("NavigationMenu"),
                  l = (0, i.g2)("HeroSection"),
                  d = (0, i.g2)("XelisLogo"),
                  h = (0, i.g2)("CircuitImg"),
                  p = (0, i.g2)("QuadSection"),
                  C = (0, i.g2)("FeaturesSection"),
                  c = (0, i.g2)("ObjectivesSection"),
                  u = (0, i.g2)("NetworkSection"),
                  g = (0, i.g2)("SupplySection"),
                  v = (0, i.g2)("TimelineSection"),
                  M = (0, i.g2)("BlockDAGSection"),
                  w = (0, i.g2)("SocialSection");
               return (
                  (0, i.uX)(),
                  (0, i.CE)("div", null, [
                     (0, i.Lk)(
                        "header",
                        {
                           class: (0, r.C4)({
                              safari: n.isSafari,
                           }),
                        },
                        [
                           (0, i.bF)(s),
                           (0, i.Lk)("div", k, [(0, i.bF)(l)]),
                           (0, i.Lk)("div", m, [
                              (0, i.bF)(d),
                              t[0] ||
                                 (t[0] = (0, i.Lk)(
                                    "div",
                                    {
                                       class: "bgtr",
                                    },
                                    null,
                                    -1
                                 )),
                              t[1] ||
                                 (t[1] = (0, i.Lk)(
                                    "div",
                                    {
                                       class: "bgm",
                                    },
                                    null,
                                    -1
                                 )),
                              t[2] ||
                                 (t[2] = (0, i.Lk)(
                                    "div",
                                    {
                                       class: "bgt",
                                    },
                                    null,
                                    -1
                                 )),
                              (0, i.bF)(h),
                           ]),
                        ],
                        2
                     ),
                     (0, i.Lk)("main", f, [
                        (0, i.bF)(p),
                        (0, i.bF)(C),
                        (0, i.bF)(c),
                        (0, i.bF)(u),
                        (0, i.bF)(g),
                        (0, i.bF)(v, {
                           "show-roadmap-link": !0,
                        }),
                        (0, i.bF)(M),
                        (0, i.bF)(w),
                     ]),
                  ])
               );
            }
            const v = {
               id: "objectives",
            };
            function M(L, t) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)("section", v, [
                     t[1] ||
                        (t[1] = (0, i.Lk)(
                           "div",
                           {
                              class: "obg",
                           },
                           [
                              (0, i.Lk)(
                                 "svg",
                                 {
                                    width: "800px",
                                    height: "800px",
                                    viewBox: "0 0 16 16",
                                    fill: "currentColor",
                                 },
                                 [
                                    (0, i.Lk)("path", {
                                       "fill-rule": "evenodd",
                                       "clip-rule": "evenodd",
                                       d: "M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8Z",
                                    }),
                                    (0, i.Lk)("path", {
                                       "fill-rule": "evenodd",
                                       "clip-rule": "evenodd",
                                       d: "M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z",
                                    }),
                                 ]
                              ),
                           ],
                           -1
                        )),
                     t[2] || (t[2] = (0, i.Lk)("h2", null, " Objectives ", -1)),
                     (0, i.Lk)(
                        "div",
                        {
                           class: (0, r.C4)([
                              "is-animated",
                              {
                                 "fade-childs": !L.preRendered,
                              },
                           ]),
                        },
                        t[0] ||
                           (t[0] = [
                              (0, i.Fv)(
                                 "<div><h3>Main Objectives</h3><ol><li>Provide privacy on transactions / balances.</li><li>Enable Smart Contracts.</li><li>Scalable blockchain for daily usage.</li><li>Easy to integrate for developers.</li></ol></div><div><h3>Other Objectives</h3><ol><li>Issue custom assets identical to the native XEL.</li><li>POW algorithm designed as CPU / GPU friendly.</li><li>Decentralization.</li><li>Simple to use.</li></ol></div>",
                                 2
                              ),
                           ]),
                        2
                     ),
                  ])
               );
            }
            const w = {},
               B = (0, C.A)(w, [["render", M]]);
            var D = B;
            const b = {
               id: "network_container",
            };
            function y(L, t) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)(
                     "section",
                     b,
                     t[0] ||
                        (t[0] = [
                           (0, i.Fv)(
                              '<div id="network" class="is-animated"><div class="angle tl"></div><div class="angle tr"></div><div class="angle bl"></div><div class="angle br"></div><div class="bg bgbl"></div><div class="bg bgtr"></div><svg fill="currentColor" class="network-icon" width="800px" height="800px" viewBox="0 0 1024 1024"><path d="M372.288 745.792a394.048 394.048 0 0 0 113.728 102.848v-127.744a390.08 390.08 0 0 0-113.728 24.896z m-51.584 24.192a392.96 392.96 0 0 0-60.16 41.6h-1.28a390.336 390.336 0 0 0 205.696 89.6 450.24 450.24 0 0 1-144.256-131.2z m-24.704-230.016c3.968 56.768 20.096 110.208 45.696 157.696a445.696 445.696 0 0 1 144.32-32.896v-124.8h-190.08z m-56.128 0H120.96a390.4 390.4 0 0 0 98.56 233.024c22.208-19.2 46.272-36.224 71.808-50.752a445.312 445.312 0 0 1-51.456-182.272z m445.824 158.784c25.984-47.808 42.24-101.568 46.336-158.72H540.992v124.864c51.072 3.2 99.776 14.976 144.704 33.92z m50.24 24.96c24.448 14.08 47.552 30.464 68.928 48.896a390.4 390.4 0 0 0 98.176-232.576h-114.88a445.312 445.312 0 0 1-52.224 183.68z m-194.944 125.44a394.048 394.048 0 0 0 113.92-102.4 389.888 389.888 0 0 0-113.92-25.728v128.192z m23.104 51.392a390.4 390.4 0 0 0 200.704-88.96h-0.512a392.96 392.96 0 0 0-57.92-40.32 450.24 450.24 0 0 1-142.272 129.28zM341.76 326.144a389.632 389.632 0 0 0-45.76 157.824h190.016V358.976a445.696 445.696 0 0 1-144.256-32.768z m-50.368-24.576a449.216 449.216 0 0 1-71.808-50.56 390.4 390.4 0 0 0-98.56 232.96h118.848a445.312 445.312 0 0 1 51.52-182.4z m194.56-126.208A394.048 394.048 0 0 0 372.48 278.016a390.08 390.08 0 0 0 113.536 24.768V175.36z m-20.992-52.544a390.272 390.272 0 0 0-205.312 89.152h0.512c18.88 15.872 39.168 29.888 60.608 41.92a450.24 450.24 0 0 1 144.192-131.072z m189.76 154.048a394.048 394.048 0 0 0-113.728-102.08v127.808a389.952 389.952 0 0 0 113.728-25.728z m51.392-24.576a392.96 392.96 0 0 0 57.856-40.32h0.384A390.336 390.336 0 0 0 564.16 123.52a450.24 450.24 0 0 1 141.952 128.832z m25.92 231.68a389.632 389.632 0 0 0-46.528-159.168 445.568 445.568 0 0 1-144.512 33.92v125.248h191.04z m56.128 0h114.88a390.4 390.4 0 0 0-98.56-232.96 449.28 449.28 0 0 1-68.736 48.896c29.824 55.424 48.32 117.76 52.416 184.128zM512 960A448 448 0 1 1 512 64a448 448 0 0 1 0 896z"></path></svg><h2>Network</h2><ul><li>Coin Name: <span>XELIS (XEL)</span></li><li>Average Block Time: <span>15 seconds</span></li><li>Maximum Block Size: <span>1.25 MB</span></li><li>Block Reward: <span>up to ~ 1.46 XEL</span></li><li>Maximum Supply: <span>18.4 million</span></li><li>Minimum Transaction Fees: <span>0.0001 XEL per kB</span></li><li>Atomic Units: <span>8</span></li><li>Block Dev Fee: <span>10%</span></li></ul></div>',
                              1
                           ),
                        ])
                  )
               );
            }
            const j = {},
               Z = (0, C.A)(j, [["render", y]]);
            var x = Z;
            const S = {
                  id: "supply",
               },
               F = {
                  class: "supply-graph scroll-bar",
               };
            function E(L, t, e, o, r, a) {
               const n = (0, i.g2)("SupplyGraphBar");
               return (
                  (0, i.uX)(),
                  (0, i.CE)("section", S, [
                     t[0] ||
                        (t[0] = (0, i.Lk)(
                           "h2",
                           null,
                           [
                              (0, i.eW)(" Supply Emission "),
                              (0, i.Lk)(
                                 "div",
                                 {
                                    class: "supply-description",
                                 },
                                 "Instead of halving, the reward is decreasing with each block with a maximum supply of 18.4 million."
                              ),
                           ],
                           -1
                        )),
                     (0, i.Lk)("div", F, [
                        (0, i.bF)(n, {
                           amount: 2.8,
                           graphHeight: 50,
                           year: "Q2 2025",
                        }),
                        (0, i.bF)(n, {
                           amount: 5.2,
                           graphHeight: 100,
                           year: "Q2 2026",
                        }),
                        (0, i.bF)(n, {
                           amount: 7.2,
                           graphHeight: 200,
                           year: "Q2 2027",
                        }),
                        (0, i.bF)(n, {
                           amount: 8.9,
                           graphHeight: 200,
                           year: "Q2 2028",
                        }),
                        (0, i.bF)(n, {
                           amount: 10.4,
                           graphHeight: 200,
                           year: "Q2 2029",
                        }),
                        (0, i.bF)(n, {
                           amount: 11.6,
                           graphHeight: 200,
                           year: "Q2 2030",
                        }),
                        (0, i.bF)(n, {
                           amount: 12.6,
                           graphHeight: 200,
                           year: "Q2 2031",
                        }),
                        (0, i.bF)(n, {
                           amount: 13.5,
                           graphHeight: 200,
                           year: "Q2 2032",
                        }),
                        (0, i.bF)(n, {
                           amount: 14.3,
                           graphHeight: 200,
                           year: "Q2 2033",
                        }),
                        (0, i.bF)(n, {
                           amount: 14.9,
                           graphHeight: 200,
                           year: "Q2 2034",
                        }),
                        (0, i.bF)(n, {
                           amount: 15.5,
                           graphHeight: 200,
                           year: "Q2 2035",
                        }),
                        (0, i.bF)(n, {
                           amount: 15.9,
                           graphHeight: 200,
                           year: "Q2 2036",
                        }),
                        (0, i.bF)(n, {
                           amount: 16.3,
                           graphHeight: 200,
                           year: "Q2 2037",
                        }),
                        (0, i.bF)(n, {
                           amount: 17.7,
                           graphHeight: 200,
                           year: "Q2 2045",
                        }),
                        (0, i.bF)(n, {
                           amount: 18.3,
                           graphHeight: 200,
                           year: "Q2 2061",
                        }),
                     ]),
                  ])
               );
            }
            const _ = {
                  class: "supply-bar",
               },
               A = {
                  class: "supply-bar-graph-year",
               },
               X = {
                  class: "supply-bar-amount is-animated",
               };
            function I(L, t, e, o, a, n) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)("div", _, [
                     (0, i.Lk)(
                        "div",
                        {
                           class: "supply-bar-graph is-animated",
                           style: (0, r.Tr)({
                              height: n.width,
                              width: n.width,
                           }),
                        },
                        [(0, i.Lk)("div", A, (0, r.v_)(e.year), 1)],
                        4
                     ),
                     (0, i.Lk)("div", X, (0, r.v_)(e.amount) + "m", 1),
                  ])
               );
            }
            var H = {
               name: "SupplyBar",
               props: ["amount", "year"],
               computed: {
                  width() {
                     return Math.min(Math.max(10, (100 * this.amount) / 18.4), 90) + "%";
                  },
               },
            };
            const P = (0, C.A)(H, [["render", I]]);
            var W = P,
               T = {
                  components: {
                     SupplyGraphBar: W,
                  },
               };
            const Q = (0, C.A)(T, [["render", E]]);
            var q = Q;
            const N = {
               id: "blockdag",
            };
            function G(L, t) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)("section", N, [
                     t[1] ||
                        (t[1] = (0, i.Lk)(
                           "div",
                           {
                              class: "title",
                           },
                           [
                              (0, i.Lk)("h2", null, "BlockDAG"),
                              (0, i.Lk)(
                                 "span",
                                 null,
                                 " Provide scalability by using a DAG structure instead of a linear blockchain. Up to several chains in parallel, each block can have multiple parents. "
                              ),
                           ],
                           -1
                        )),
                     (0, i.Lk)(
                        "ul",
                        {
                           class: (0, r.C4)([
                              "content is-animated",
                              {
                                 "fade-childs": !L.preRendered,
                              },
                           ]),
                        },
                        t[0] ||
                           (t[0] = [
                              (0, i.Fv)(
                                 '<li class="item is-animated"><div class="number"> 1. </div><div class="text"> Reduce the rate of orphan&#39;s blocks when miners find a block at the same time. Instead of choosing one block, both blocks are included in the DAG. </div></li><li class="item is-animated"><div class="number"> 2. </div><div class="text"> Height is not unique anymore and can have multiple blocks. </div></li><li class="item is-animated"><div class="number"> 3. </div><div class="text"> Topo Height (topological height) is the new and unique height for a block which is ordered by the DAG. </div></li><li class="item is-animated"><div class="number"> 4. </div><div class="text"> Stable height is the last height in which the order of the DAG cannot change. </div></li><li class="item is-animated"><div class="number"> 5. </div><div class="text"> Different types of blocks: <ul class="list"><li> Sync: It is at a stable height and is the only block at its height (or the only ordered block at this height and doesn&#39;t have a lower cumulative difficulty than previous blocks). </li><li> Side: Its height is less than or equal to the height of the past 8 topographical blocks. Its block rewards are reduced to 30%. </li><li> Orphaned: This block was not ordered in the DAG and has no topographical height (it&#39;s transactions are not executed). </li></ul></div></li><li class="item is-animated"><div class="number"> 6. </div><div class="text"> Up to 3 previous blocks (called TIPS) <ul class="list"><li> Circulating Supply is re-calculated each time the block is reordered because it is based on DAG order. </li></ul></div></li>',
                                 6
                              ),
                           ]),
                        2
                     ),
                  ])
               );
            }
            const z = {},
               V = (0, C.A)(z, [["render", G]]);
            var O = V,
               R = e.p + "img/discord.2d93cac6.svg",
               U = e.p + "img/telegram.130379b4.svg",
               $ = e.p + "img/x.df8f6d22.svg",
               K = e.p + "img/youtube.ef0f214f.svg",
               Y = e.p + "img/medium.41b8fad5.svg",
               J = e.p + "img/github_2.b1adc4bd.svg",
               LL = e.p + "img/facebook.b9c14aaa.svg",
               tL = e.p + "img/linkedin.1d24c72e.svg",
               eL = e.p + "img/reddit.b885a8c2.svg",
               oL = e.p + "img/instagram.f7ad6485.svg",
               iL = e.p + "img/tiktok.06d527a0.svg",
               rL = e.p + "img/matrix.999be003.svg";
            const aL = {
               id: "socials",
               class: "is-animated",
            };
            function nL(L, t) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)(
                     "section",
                     aL,
                     t[0] ||
                        (t[0] = [
                           (0, i.Fv)(
                              '<h2> Socials </h2><div><div><a href="https://discord.gg/xelis" target="_blank"><img src="' +
                                 R +
                                 '" alt="Github logo"> Discord </a><a href="https://t.me/xelis_io" target="_blank"><img src="' +
                                 U +
                                 '" alt="Telegram logo"> Telegram </a><a href="https://twitter.com/xelis_project" target="_blank"><img src="' +
                                 $ +
                                 '" alt="Twitter / X logo"> Twitter / X </a><a href="https://youtube.com/@xelis_project" target="_blank"><img src="' +
                                 K +
                                 '" alt="Youtube logo"> Youtube </a><a href="https://xeliscommunity.org/" target="_blank"><img src="' +
                                 Y +
                                 '" alt="Medium logo"> Medium </a><a href="https://github.com/xelis-project" target="_blank"><img src="' +
                                 J +
                                 '" alt="GitHub logo"> GitHub </a><a href="https://www.facebook.com/xeliscommunity" target="_blank"><img src="' +
                                 LL +
                                 '" alt="Facebook logo"> Facebook </a><a href="https://www.linkedin.com/company/xelis" target="_blank"><img src="' +
                                 tL +
                                 '" alt="LinkedIn logo"> LinkedIn </a><a href="https://www.reddit.com/r/xelis/" target="_blank"><img src="' +
                                 eL +
                                 '" alt="Reddit logo"> Reddit </a><a href="https://www.instagram.com/xeliscommunity/" target="_blank"><img src="' +
                                 oL +
                                 '" alt="Instagram logo"> Instagram </a><a href="https://tiktok.com/@xeliscommunity" target="_blank"><img src="' +
                                 iL +
                                 '" alt="Tiktok logo"> Tiktok </a><a href="https://matrix.to/#/#xelis:matrix.org" target="_blank"><img src="' +
                                 rL +
                                 '" alt="Matrix logo"> Matrix </a></div></div>',
                              2
                           ),
                        ])
                  )
               );
            }
            const sL = {},
               lL = (0, C.A)(sL, [["render", nL]]);
            var dL = lL,
               hL = e(2913),
               pL = e(9107);
            const CL = {
                  id: "hero",
               },
               cL = {
                  class: "hero-button",
               },
               uL = {
                  class: "hero-button-links",
               },
               kL = {
                  class: "button",
                  href: "https://github.com/xelis-project/xelis-blockchain",
                  target: "_blank",
               },
               mL = {
                  class: "big",
               };
            function fL(L, t, e, o, r, a) {
               const n = (0, i.g2)("router-link"),
                  s = (0, i.g2)("GithubLogo");
               return (
                  (0, i.uX)(),
                  (0, i.CE)("div", CL, [
                     (0, i.bF)(
                        n,
                        {
                           to: {
                              name: "merch",
                           },
                           class: "merch-available",
                        },
                        {
                           default: (0, i.k6)(
                              () =>
                                 t[0] ||
                                 (t[0] = [
                                    (0, i.Lk)(
                                       "div",
                                       {
                                          class: "merch-available-bg",
                                       },
                                       null,
                                       -1
                                    ),
                                    (0, i.Lk)(
                                       "div",
                                       null,
                                       [(0, i.eW)("Merch"), (0, i.Lk)("br"), (0, i.eW)("Available")],
                                       -1
                                    ),
                                 ])
                           ),
                           _: 1,
                        }
                     ),
                     t[4] ||
                        (t[4] = (0, i.Lk)(
                           "p",
                           {
                              id: "resume",
                           },
                           [
                              (0, i.eW)(" XELIS is the world's first BlockDAG with "),
                              (0, i.Lk)("span", null, "Privacy"),
                              (0, i.eW)(", "),
                              (0, i.Lk)("span", null, "Speed"),
                              (0, i.eW)(", "),
                              (0, i.Lk)("span", null, "Scalability"),
                              (0, i.eW)(" and "),
                              (0, i.Lk)("span", null, "Smart Contracts"),
                              (0, i.eW)(". "),
                           ],
                           -1
                        )),
                     (0, i.Lk)("div", cL, [
                        t[3] ||
                           (t[3] = (0, i.Lk)(
                              "h4",
                              null,
                              " Layer 1 + Rust + BlockDAG + Homomorphic Encryption + Smart Contracts - created by the people, for the people. ",
                              -1
                           )),
                        (0, i.Lk)("div", uL, [
                           (0, i.Lk)("a", kL, [
                              (0, i.Lk)("button", mL, [
                                 (0, i.bF)(s),
                                 t[1] || (t[1] = (0, i.Lk)("span", null, "GitHub", -1)),
                              ]),
                           ]),
                           t[2] ||
                              (t[2] = (0, i.Fv)(
                                 '<a class="button" href="https://whitepaper.xelis.io" target="_blank"><button class="big"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 22H18C19.1046 22 20 21.1046 20 20V9.82843C20 9.29799 19.7893 8.78929 19.4142 8.41421L13.5858 2.58579C13.2107 2.21071 12.702 2 12.1716 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 2.5V9H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 17H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 13H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 9H9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Whitepaper</span></button></a>',
                                 1
                              )),
                        ]),
                     ]),
                  ])
               );
            }
            var gL = e(7568),
               vL = {
                  name: "HeroSection",
                  components: {
                     GithubLogo: gL.A,
                  },
               };
            const ML = (0, C.A)(vL, [["render", fL]]);
            var wL = ML;
            const BL = {
               class: "logo",
               width: "778",
               height: "743",
               viewBox: "0 0 778 743",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
            };
            function DL(L, t) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)(
                     "svg",
                     BL,
                     t[0] ||
                        (t[0] = [
                           (0, i.Lk)(
                              "path",
                              {
                                 "fill-rule": "evenodd",
                                 "clip-rule": "evenodd",
                                 d: "M388.909 742.872L777.817 353.964L424.056 0.202599L478.809 132.737L700.036 353.964L388.909 665.091L77.7817\n            353.964L299.507 129.121L353.964 0L0 353.964L388.909 742.872Z",
                                 fill: "currentColor",
                              },
                              null,
                              -1
                           ),
                           (0, i.Lk)(
                              "path",
                              {
                                 d: "M388.909 665.091L353.964 0L299.507 129.121L388.909 665.091Z",
                                 fill: "currentColor",
                              },
                              null,
                              -1
                           ),
                           (0, i.Lk)(
                              "path",
                              {
                                 d: "M424.056 0.202599L388.909 665.091L478.809 132.737L424.056 0.202599Z",
                                 fill: "currentColor",
                              },
                              null,
                              -1
                           ),
                        ])
                  )
               );
            }
            const bL = {},
               yL = (0, C.A)(bL, [["render", DL]]);
            var jL = yL;
            const ZL = {
               id: "features",
            };
            function xL(L, t) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)("section", ZL, [
                     t[1] || (t[1] = (0, i.Lk)("h2", null, "Key Features", -1)),
                     (0, i.Lk)(
                        "div",
                        {
                           id: "features-container",
                           class: (0, r.C4)([
                              "is-animated",
                              {
                                 "fade-childs": !L.preRendered,
                              },
                           ]),
                        },
                        t[0] ||
                           (t[0] = [
                              (0, i.Fv)(
                                 '<div class="feature-item"><svg width="40" height="40" fill="currentColor" viewBox="0 0 96.666 96.666"><rect x="36" y="6" width="24.666" height="24.666"></rect><rect x="36" y="66" width="24.666" height="24.666"></rect><rect y="66" width="24.666" height="24.666"></rect><rect x="72" y="66" width="24.666" height="24.666"></rect><polygon points="15.31,51.333 45.833,51.333 45.833,62.666 50.833,62.666 50.833,51.333 82.105,51.333 82.105,63.066  86.561,63.066 86.561,46.4 84.334,46.4 84.334,46.333 50.833,46.333 50.833,35 45.833,35 45.833,46.333 12.334,46.333 12.334,46.4  10.856,46.4 10.856,63.066 15.31,63.066  "></polygon></svg><div class="title">BlockDAG</div><div class="description">Mutliple blocks at the same height to improve scalability and security of the network.</div></div><div class="feature-item"><svg width="40" height="40" viewBox="0 0 16 16"><path d="m 8 1 c -2.199219 0 -4 1.800781 -4 4 v 2 c -1.109375 0 -2 0.890625 -2 2 v 5 c 0 0.554688 0.445312 1 1 1 h 10 c 0.554688 0 1 -0.445312 1 -1 v -5 c 0 -1.109375 -0.890625 -2 -2 -2 v -2 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 2 c 1.125 0 2 0.875 2 2 v 2 h -4 v -2 c 0 -1.125 0.875 -2 2 -2 z m 0 0" fill="currentColor"></path></svg><div class="title">Homomorphic Encryption</div><div class="description">Enabled using ElGamal to provide privacy on transferred amounts and balances.</div></div><div class="feature-item"><svg width="35" height="35" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 1H1V15H15V1ZM6 5L7.41421 6.41421L5.82843 8L7.41421 9.58579L6 11L3 8L6 5ZM10 5L8.58579 6.41421L10.1716 8L8.58579 9.58579L10 11L13 8L10 5Z" fill="currentColor"></path></svg><div class="title">Smart Contracts</div><div class="description">Easily code and create decentralized programs.</div></div><div class="feature-item"><svg width="30" height="30" viewBox="-2 0 32 32" fill="currentColor"><path id="Path_62" data-name="Path 62" d="M28,0H6A4,4,0,0,0,2,4V28a4,4,0,0,0,4,4H28a2,2,0,0,0,2-2V2A2,2,0,0,0,28,0ZM26,27a1,1,0,0,1-1,1H7.98A1.979,1.979,0,0,1,6,26.02v-.04A1.979,1.979,0,0,1,7.98,24H25a1,1,0,0,1,1,1Zm0-7.937a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1H25a1,1,0,0,1,1,1Z"></path><rect id="Rectangle_19" data-name="Rectangle 19" width="8" height="4" rx="1" transform="translate(14 8)"></rect></svg><div class="title">Account Model</div><div class="description">Account based blockchain with more advantages than traditional UTXO.</div></div><div class="feature-item"><svg width="35" height="35" viewBox="0 0 512 512" fill="currentColor"><polygon points="386.415,193.208 287.481,193.208 359.434,0 161.566,0 125.585,280.151 206.528,280.151 170.557,512"></polygon></svg><div class="title">Boost &amp; Fast Synchronization</div><div class="description">Synchronize in parallel across multiple nodes or instantly with the latest chain state.</div></div><div class="feature-item"><svg width="40" height="40" fill="currentColor" viewBox="0 0 32 32"><path d="M21.022 7.57l-1.085 0.672-0.638 4.16-0.001 0.002 2.392-3.692zM17.176 13.044l-4.91-1.623-1.362 0.841 0.897 1.080zM12.916 4.884c0.199-0.111 0.367-0.269 0.483-0.471 0.404-0.701 0.048-1.664-0.796-2.151s-1.856-0.314-2.26 0.386c-0.117 0.202-0.17 0.426-0.166 0.655-2.892-1.297-6.034-1.598-8.557-0.37 6.565 1.888 12.005 5.305 16.746 9.674-0.665-3.046-2.783-5.805-5.451-7.723zM8.636 6.416l-7.023 12.172c0.521 0.857 1.287 1.552 2.592 1.498l7.023-12.172c-0.798-0.574-1.666-1.068-2.592-1.498zM25.291 12.093l-11.3 3.489-2.641 5.171 13.511 9.812 5.526-15.689z"></path></svg><div class="title">XELIS Hash</div><div class="description">A new CPU/GPU friendly algorithm. FPGAs and ASIC resistance.</div></div><div class="feature-item"><svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M17.8321 9.5547C18.1384 9.09517 18.0142 8.4743 17.5547 8.16795C17.0952 7.8616 16.4743 7.98577 16.168 8.4453L13.3925 12.6085L10.0529 10.3542C9.421 9.92768 8.55941 10.1339 8.18917 10.8004L6.12584 14.5144C5.85763 14.9971 6.03157 15.6059 6.51436 15.8742C6.99714 16.1424 7.60594 15.9684 7.87416 15.4856L9.56672 12.439L12.8571 14.66C13.4546 15.0634 14.2662 14.9035 14.6661 14.3036L17.8321 9.5547Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM4 7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z" fill="currentColor"></path></svg><div class="title">Difficulty Adjustment</div><div class="description">Using Kalman Filter to quickly converge network hashrate and filter misleading fluctuations.</div></div><div class="feature-item"><svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="title">Proofs</div><div class="description">ZK Proof, ownership proof and balance proof.</div></div><div class="feature-item"><svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" stroke-width="2" d="M10 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm9 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 15 .211-.106a4 4 0 0 1 3.578 0L14 15m3-6-1.65-4.125a1 1 0 0 0-1.245-.577l-1.473.491a2 2 0 0 1-1.264 0L9.894 4.3a1 1 0 0 0-1.245.576L7 9m-4 1c7.5-1 11-1 18 0"></path></svg><div class="title">Confidential Assets</div><div class="description">Create your own native token fully compatible with all services.</div></div><div class="feature-item"><svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M13.4822 17.7322L12.7071 16.9571L15.1893 14.4749C16.5562 13.108 16.5562 10.8919 15.1893 9.52511L12.7071 7.04288L13.4822 6.26776C14.4585 5.29144 16.0414 5.29144 17.0178 6.26776L20.9822 10.2322C21.9585 11.2085 21.9585 12.7914 20.9822 13.7678L17.0178 17.7322C16.0414 18.7085 14.4585 18.7085 13.4822 17.7322Z"></path><path d="M14.4822 13.7678C15.4585 12.7914 15.4585 11.2085 14.4822 10.2322L10.5178 6.26776C9.54144 5.29144 7.95853 5.29145 6.98222 6.26776L3.01776 10.2322C2.04144 11.2085 2.04145 12.7914 3.01776 13.7678L6.98222 17.7322C7.95853 18.7085 9.54144 18.7085 10.5178 17.7322L14.4822 13.7678Z"></path></svg><div class="title">Client Protocol</div><div class="description">Allows accepting same transaction in multiple blocks without double spending.</div></div><div class="feature-item"><svg width="50" height="50" viewBox="0 0 24 24" fill="none"><path d="M13.5 7L17 10.5" stroke="currentColor" stroke-linecap="round"></path><path d="M7 13.5L10.5 17" stroke="currentColor" stroke-linecap="round"></path><path d="M10.5 7L7 10.5" stroke="currentColor" stroke-linecap="round"></path><path d="M17 13.5L13.5 17" stroke="currentColor" stroke-linecap="round"></path><circle cx="12" cy="5.5" r="2" stroke="currentColor"></circle><circle cx="12" cy="18.5" r="2" stroke="currentColor"></circle><circle cx="5.5" cy="12" r="2" stroke="currentColor"></circle><circle cx="18.5" cy="12" r="2" stroke="currentColor"></circle><circle cx="5.5" cy="12" r="0.5" stroke="currentColor"></circle><circle cx="12" cy="18.5" r="0.5" stroke="currentColor"></circle><circle cx="18.5" cy="12" r="0.5" stroke="currentColor"></circle></svg><div class="title">P2P Encrypted Network</div><div class="description">Prevent any network traffic analysis and provide better privacy.</div></div><div class="feature-item"><svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M13.5295 8.35186C12.9571 8.75995 12.2566 9 11.5 9C9.567 9 8 7.433 8 5.5C8 3.567 9.567 2 11.5 2C12.753 2 13.8522 2.65842 14.4705 3.64814M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2086L12.3769 20.8789C12.9753 21.0247 13.5988 21.0388 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7854 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4134 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2091C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1417C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M20 6.5C20 8.433 18.433 10 16.5 10C14.567 10 13 8.433 13 6.5C13 4.567 14.567 3 16.5 3C18.433 3 20 4.567 20 6.5ZM2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7951 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.0399 6 13.7599 5.89101 13.546C5.79513 13.3578 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13L3.6 13C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3578 2.10899 13.546C2 13.7599 2 14.0399 2 14.6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="title">Transaction Fees</div><div class="description">Strict fees to avoid blockchain abuse.</div></div><div class="feature-item"><svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor"><path d="M31.989 9.078c0.015-0.739-0.184-2.464-2.433-3.064l-22.576-4.519c-1.655 0-3 1.345-3 3v4.022l-1-0.002c-1.649 0.007-2.989 1.348-2.989 2.999v15.994c0 1.654 1.345 3 3 3h26.014c1.654 0 3-1.346 3-3zM5.981 4.494c0-0.522 0.402-0.952 0.913-0.996l22.063 4.465c0.008 0.004-0.164 0.56-0.965 0.55h-22.011zM30.008 27.507c0 0.552-0.448 1-1 1h-26.015c-0.552 0-1-0.448-1-1v-15.995c0-0.552 0.448-1 1-1h25.002c0.982 0 2.012-0.335 2.012-0.996v17.991h0zM5.995 17.516c-1.104 0-2 0.895-2 2s0.896 2 2 2 2-0.895 2-2-0.896-2-2-2z"></path></svg><div class="title">Wallet &amp; Tools</div><div class="description">Desktop &amp; Mobile wallet with XSWD, Integrated Address, Encrypted Storage, MultiSig and more.</div></div>',
                                 13
                              ),
                           ]),
                        2
                     ),
                  ])
               );
            }
            const SL = {},
               FL = (0, C.A)(SL, [["render", xL]]);
            var EL = FL;
            const _L = {
               id: "quad",
            };
            function AL(L, t) {
               return (
                  (0, i.uX)(),
                  (0, i.CE)(
                     "section",
                     _L,
                     t[0] ||
                        (t[0] = [
                           (0, i.Fv)(
                              '<h2> Solving the Quadlemma <div> XELIS introduces the concept of a quadrilemma or ”quadlemma”, as it will be referred to, adding privacy as a critical fourth pillar. </div></h2><svg class="quadlemma" width="481" height="462" viewBox="0 0 481 462" fill="none" xmlns="http://www.w3.org/2000/svg"><g class="logo is-animated"><path fill-rule="evenodd" clip-rule="evenodd" d="M240.5 462L481 220.134L262.235 0.125998L296.094 82.5503L432.9 220.134L240.5 413.627L48.1 220.134L185.214 80.3017L218.89 0L0 220.134L240.5 462Z" fill="#02FFCF" fill-opacity="0.29"></path><path d="M240.5 413.627L218.89 0L185.214 80.3017L240.5 413.627Z" fill="#02FFCF" fill-opacity="0.29"></path><path d="M262.235 0.125998L240.5 413.627L296.094 82.5503L262.235 0.125998Z" fill="#02FFCF" fill-opacity="0.29"></path></g><g class="block privacy is-animated"><rect x="123.066" y="116" width="150" height="150" rx="10" transform="rotate(45 123.066 116)" fill="#02FFCF"></rect><text fill="#094237" style="white-space:pre;" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="90" y="228.476">PRIVACY</tspan></text></g><g class="block security is-animated"><rect x="240.066" y="1" width="150" height="150" rx="10" transform="rotate(45 240.066 1)" fill="#02FFCF"></rect><text fill="#094237" style="white-space:pre;" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="200" y="113.476">SECURITY</tspan></text></g><g class="block scalability is-animated"><rect x="355.066" y="116" width="150" height="150" rx="10" transform="rotate(45 355.066 116)" fill="#02FFCF"></rect><text fill="#094237" style="white-space:pre;" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="304" y="228.476">SCALABILITY</tspan></text></g><g class="block decentralization is-animated"><rect x="240.066" y="230" width="150" height="150" rx="10" transform="rotate(45 240.066 230)" fill="#02FFCF"></rect><text fill="#094237" style="white-space:pre;" font-family="Jura" font-size="16" font-weight="bold" letter-spacing="0em"><tspan x="164" y="343.476">DECENTRALIZATION</tspan></text></g></svg>',
                              2
                           ),
                        ])
                  )
               );
            }
            const XL = {},
               IL = (0, C.A)(XL, [["render", AL]]);
            var HL = IL,
               PL = e(5214),
               WL = e.n(PL),
               TL = {
                  name: "HomeView",
                  components: {
                     ObjectivesSection: D,
                     NetworkSection: x,
                     SupplySection: q,
                     BlockDAGSection: O,
                     SocialSection: dL,
                     TimelineSection: hL.A,
                     FeaturesSection: EL,
                     QuadSection: HL,
                     NavigationMenu: pL.A,
                     HeroSection: wL,
                     XelisLogo: jL,
                     CircuitImg: h.A,
                  },
                  inject: ["isSafari"],
                  mounted() {
                     document.title = WL()["/"].title;
                  },
               };
            const QL = (0, C.A)(TL, [["render", g]]);
            var qL = QL,
               NL =
                  (e(408),
                  e(3792),
                  e(3413),
                  {
                     name: "App",
                     components: {
                        FooterSection: u,
                     },
                     data() {
                        return {
                           isMobile: !1,
                        };
                     },
                     provide() {
                        return {
                           isSafari: this.isSafari,
                        };
                     },
                     computed: {
                        isSafari() {
                           const L = navigator.userAgent.toLowerCase(),
                              t = L.includes("safari") && !L.includes("chrome") && !L.includes("android"),
                              e = /iPad|iPhone|iPod/.test(L) && !window.MSStream;
                           return t || e;
                        },
                     },
                     mounted() {
                        function L(L) {
                           const t = L.getBoundingClientRect();
                           return t.top <= (window.innerHeight || document.documentElement.clientHeight);
                        }
                        this.isMobile = window.matchMedia("(max-width: 748px)").matches;
                        const t = () => {
                           const t = document.querySelectorAll(".is-animated");
                           [...t].forEach((t) => {
                              L(t) && t.classList.add("active");
                           });
                        };
                        document.addEventListener("scroll", t), t();
                     },
                  });
            const GL = (0, C.A)(NL, [["render", n]]);
            var zL = GL,
               VL = e(1387);
            const OL = [
                  {
                     path: "/",
                     name: "home",
                     component: qL,
                  },
                  {
                     path: "/resources",
                     name: "resources",
                     component: () => Promise.resolve().then(e.bind(e, 6429)),
                  },
                  {
                     path: "/merch",
                     name: "merch",
                     component: () => e.e(372).then(e.bind(e, 5574)),
                  },
                  {
                     path: "/roadmap",
                     name: "roadmap",
                     component: () => Promise.resolve().then(e.bind(e, 3792)),
                  },
                  {
                     path: "/exchanges",
                     name: "exchanges",
                     component: () => Promise.resolve().then(e.bind(e, 3413)),
                  },
                  //{
                  //   path: "/:catchAll(.*)",
                  //   name: "not_found",
                  //   component: () => Promise.resolve().then(e.bind(e, 408)),
                  //},
               ],
               RL = (0, VL.aE)({
                  history: (0, VL.LA)(),
                  routes: OL,
                  scrollBehavior(L) {
                     if (L.hash) {
                        const t = document.querySelector(L.hash);
                        t &&
                           t.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                           });
                     }
                  },
               });
            var UL = RL,
               $L = e(782),
               KL = (0, $L.y$)({
                  state: {},
                  getters: {},
                  mutations: {},
                  actions: {},
                  modules: {},
               });
            const YL = {
                  data() {
                     return {
                        preRendered: !1,
                     };
                  },
                  mounted() {
                     window.__PRERENDER_INJECTED && (this.preRendered = !0);
                  },
               },
               JL = (0, o.Ef)(zL);
            JL.mixin(YL), JL.use(KL), JL.use(UL), JL.mount("#app");
         },
         5214: function (L) {
            const t = {
               "/": {
                  title: "XELIS - Private BlockDAG with Smart Contracts",
                  description:
                     "XELIS is the world's first BlockDAG with Privacy, Speed, Scalability and Smart Contracts.",
                  keywords:
                     "BlockDAG, Homomorphic Encryption, Privacy, Confidentiality, Smart Contracts, Rust, Decentralized, Cryptocurrency, Blockchain, XELIS, XEL, Bitcoin, BTC, ETH, Ethereum, Monero, XMR",
               },
               "/resources": {
                  title: "XELIS - Resources",
                  description: "Links for wallets, nodes, exhchanges, mining specifications and more.",
                  keywords: "Browser wallet, iOS wallet, Android wallet, Desktop Wallet, XELIS Miner",
               },
               "/merch": {
                  title: "XELIS - Merchandises",
                  description: "Official XELIS premium merchandise products.",
                  keywords: "XELIS hoodies, XELIS t-shirts, XELIS mugs, XELIS accessories",
               },
               "/roadmap": {
                  title: "XELIS - Roadmap",
                  description: "Past & ongoing development tasks of the XELIS project.",
                  keywords: "",
               },
               "/exchanges": {
                  title: "XELIS - Exchanges",
                  description: "List of exchanges where you can trade XELIS.",
                  keywords: "",
               },
            };
            L.exports = t;
         },
         4274: function (L, t, e) {
            "use strict";
            e.d(t, {
               A: function () {
                  return l;
               },
            });
            var o = e(6768);
            const i = {
               class: "circuit",
               width: "1596",
               height: "1700",
               viewBox: "0 0 1596 1700",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
               ref: "svg",
            };
            function r(L, t, e, r, a, n) {
               return (
                  (0, o.uX)(),
                  (0, o.CE)(
                     "svg",
                     i,
                     t[0] ||
                        (t[0] = [
                           (0, o.Fv)(
                              '<g id="circuit-lines"><path d="M543.869 1035.99L551.413 1037.3L558.957 1038.6L566.5 1039.91L573.965 1041.27L581.453 1042.49L588.997 1043.8L596.541 1045.1L604.084 1046.41L611.628 1047.71L619.093 1049.07L626.581 1050.3L634.124 1051.6L640.366 1047.2L646.607 1042.8L652.848 1038.4L659.089 1034L665.331 1029.6L671.572 1025.2L677.813 1020.79L684.054 1016.39L690.296 1011.99L696.537 1007.59L702.699 1003.25L708.94 998.847L715.182 994.446L721.423 990.045L727.664 985.644L733.905 981.244L741.449 982.548L748.993 983.853L755.234 979.452L761.475 975.051L767.717 970.65L773.958 966.25L780.199 961.849L786.44 957.448L792.603 953.103L798.844 948.702L805.085 944.301L811.326 939.901L817.567 935.5L823.809 931.099L830.05 926.698L836.291 922.298L842.532 917.897L850.076 919.201L857.564 920.427L865.108 921.732L872.573 923.092L880.116 924.397L887.66 925.701L895.204 927.006L902.692 928.231L910.157 929.592L917.7 930.896L925.244 932.201L932.788 933.506L940.331 934.81L947.819 936.036L955.284 937.396L962.828 938.701L970.372 940.006L977.915 941.31L985.459 942.615L989.804 948.777L994.205 955.018L998.606 961.26L1003.01 967.501L1001.7 975.045L1000.4 982.588L999.092 990.132L997.788 997.676L996.507 1005.08L995.202 1012.63L993.897 1020.17L992.593 1027.72L991.288 1035.26L989.983 1042.8L988.702 1050.21L987.397 1057.76L986.093 1065.3L984.788 1072.84L983.483 1080.39L982.202 1087.8L980.898 1095.34L979.593 1102.88L978.288 1110.43L972.047 1114.83L965.806 1119.23L959.565 1123.63L953.323 1128.03L947.082 1132.43L940.841 1136.83L934.6 1141.23L928.358 1145.63L922.196 1149.98L915.955 1154.38L909.714 1158.78L903.472 1163.18L897.231 1167.58L889.687 1166.28L882.144 1164.97L874.6 1163.67L867.112 1162.44L859.647 1161.08L855.246 1154.84L850.846 1148.6L846.445 1142.36L842.044 1136.12" stroke="#0B5C4D" stroke-width="0.4646" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.339 1042.01L534.034 1049.55L532.729 1057.1L531.448 1064.51L530.143 1072.05L528.839 1079.59L527.534 1087.14L526.229 1094.68L525.004 1102.17L523.643 1109.63L522.339 1117.18L521.034 1124.72L519.73 1132.27L524.13 1138.51L522.826 1146.05L521.544 1153.46L520.24 1161L524.64 1167.24L529.041 1173.49L533.442 1179.73L537.843 1185.97L542.244 1192.21L546.644 1198.45L551.045 1204.69L555.446 1210.93L559.847 1217.17L564.247 1223.42L571.791 1224.72L579.2 1226L586.744 1227.31" stroke="#0B5C4D" stroke-width="0.6228" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.468 1035.92L550.932 1037.28L557.174 1032.88L563.415 1028.48L569.656 1024.08L575.897 1019.68L582.139 1015.28L588.38 1010.88L594.621 1006.48L600.862 1002.08L607.104 997.676L613.345 993.275L619.586 988.874L625.827 984.473L632.069 980.072L638.31 975.672L644.551 971.271L650.792 966.87L656.955 962.525L663.196 958.124L664.501 950.581L665.805 943.037L667.11 935.493L668.414 927.949L669.719 920.406L671 912.997L672.305 905.453L673.61 897.909L674.914 890.365L676.219 882.822L677.445 875.334L678.805 867.869L680.11 860.325L686.351 855.925L692.592 851.524L698.833 847.123L705.074 842.722L711.316 838.321L717.557 833.921L723.798 829.52L730.04 825.119L736.281 820.718L742.522 816.318L743.748 808.83L745.052 801.286L746.357 793.742L747.717 786.277L749.022 778.734L750.327 771.19L751.552 763.702L752.857 756.158L754.161 748.614L755.522 741.15L756.826 733.606L758.052 726.118L759.357 718.574L760.661 711.031L761.966 703.487L763.326 696.022L764.631 688.478L770.872 684.078L777.113 679.677L783.276 675.332L789.517 670.931L795.758 666.53L797.063 658.987L798.367 651.443L799.672 643.899L801.032 636.434L802.258 628.946L803.563 621.403L804.867 613.859L806.172 606.315L807.477 598.772L808.837 591.307L810.063 583.819L811.367 576.275L812.672 568.731L813.976 561.188L820.218 556.787L826.459 552.386L832.7 547.985L838.941 543.585L845.183 539.184L851.424 534.783L857.665 530.382L863.827 526.037L870.069 521.636L876.31 517.236L882.551 512.835L888.792 508.434L895.034 504.033L901.275 499.632L907.516 495.232L913.757 490.831L919.999 486.43L921.303 478.886L922.664 471.422L923.889 463.934L925.194 456.39L926.498 448.846L927.803 441.302L929.163 433.838L930.468 426.294L931.694 418.806L932.998 411.262L934.303 403.719L935.608 396.175L936.968 388.71L938.194 381.222" stroke="#0B5C4D" stroke-width="0.3736" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.314 1042.14L529.073 1046.54L522.831 1050.94L516.59 1055.34L510.349 1059.74L504.187 1064.09L497.945 1068.49L491.704 1072.89L485.463 1077.29L479.222 1081.69L472.98 1086.09L466.739 1090.49L460.498 1094.9L454.257 1099.3L448.015 1103.7L441.774 1108.1L435.533 1112.5L429.292 1116.9L427.987 1124.44L426.627 1131.91L425.401 1139.4L424.096 1146.94L422.792 1154.48L421.487 1162.03L420.183 1169.57L418.901 1176.98L417.597 1184.52L416.292 1192.07L414.987 1199.61L413.683 1207.15L412.322 1214.62L411.097 1222.11L404.855 1226.51L398.614 1230.91L392.373 1235.31L386.132 1239.71L379.89 1244.11L373.649 1248.51L367.408 1252.91L366.103 1260.46L364.799 1268L363.573 1275.49L362.268 1283.03L360.908 1290.5L359.603 1298.04L358.299 1305.58L356.994 1313.13L355.769 1320.62L360.169 1326.86L364.57 1333.1L368.971 1339.34L373.372 1345.58L367.13 1349.98L360.889 1354.38L354.648 1358.78L348.407 1363.18L342.165 1367.58L335.924 1371.99L329.683 1376.39L323.442 1380.79L317.2 1385.19L310.959 1389.59L304.718 1393.99L303.358 1401.45L302.132 1408.94L300.827 1416.49L299.523 1424.03L298.218 1431.57L296.858 1439.04L295.553 1446.58L294.327 1454.07L288.086 1458.47L281.845 1462.87L275.604 1467.27L274.299 1474.82L272.994 1482.36L271.69 1489.9L270.33 1497.37L269.104 1504.86L267.799 1512.4L261.558 1516.8L255.317 1521.2L249.075 1525.6L242.834 1530L236.593 1534.4L230.352 1538.8L224.11 1543.2L217.869 1547.61L211.628 1552.01L205.387 1556.41L197.922 1555.05L190.378 1553.74L182.89 1552.52L175.347 1551.21L167.803 1549.91L160.259 1548.6L152.794 1547.24L145.251 1545.94L137.763 1544.71L130.219 1543.41L122.675 1542.1L116.434 1546.5L110.193 1550.9L103.952 1555.31L97.7103 1559.71L91.548 1564.05L85.3068 1568.45L77.7631 1567.15L70.2193 1565.84L62.7313 1564.62" stroke="#0B5C4D" stroke-width="0.5006" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.361 1041.87L529.119 1046.27L522.878 1050.67L516.637 1055.07L510.396 1059.48L504.233 1063.82L497.992 1068.22L491.751 1072.62L485.51 1077.02L479.268 1081.42L473.027 1085.82L466.786 1090.23L460.545 1094.63L454.303 1099.03L448.062 1103.43L440.518 1102.12L432.975 1100.82L425.51 1099.46L417.966 1098.15L410.478 1096.93L402.935 1095.62L395.391 1094.32L387.847 1093.01L383.446 1086.77L379.046 1080.53L380.35 1072.99L376.005 1066.83L377.31 1059.28L378.614 1051.74" stroke="#0B5C4D" stroke-width="0.7939" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.382 1041.74L534.078 1049.28L532.773 1056.83L531.468 1064.37L530.164 1071.91L528.882 1079.32L527.578 1086.87L526.273 1094.41L524.968 1101.95L523.664 1109.5L522.359 1117.04L521.078 1124.45L519.773 1131.99L518.469 1139.54L517.164 1147.08L515.859 1154.62L520.26 1160.87L524.661 1167.11L529.062 1173.35L533.462 1179.59L537.807 1185.75L542.208 1191.99L546.609 1198.23L551.01 1204.48L555.411 1210.72L559.811 1216.96L564.212 1223.2L568.613 1229.44L573.014 1235.68L577.414 1241.92L581.815 1248.16L586.216 1254.41L593.76 1255.71L601.304 1257.01L608.791 1258.24L616.335 1259.55L623.8 1260.91L631.344 1262.21L630.039 1269.75L628.758 1277.16L627.453 1284.71L626.148 1292.25L624.844 1299.79L623.539 1307.34L622.235 1314.88L620.953 1322.29L619.649 1329.83L618.344 1337.38L612.103 1341.78L605.861 1346.18L604.557 1353.72L603.252 1361.27L602.027 1368.76L600.666 1376.22L599.362 1383.76L598.057 1391.31" stroke="#0B5C4D" stroke-width="0.6076" stroke-linecap="round" stroke-linejoin="round"></path><path d="M544.006 1036.01L551.55 1037.32L559.093 1038.62L566.558 1039.98L574.046 1041.21L581.59 1042.51L589.133 1043.82L596.677 1045.12L604.221 1046.43L611.686 1047.79L619.174 1049.01L626.717 1050.32L634.261 1051.62L641.805 1052.93L649.269 1054.29L656.757 1055.51L664.301 1056.82L671.845 1058.12L676.246 1064.36L680.646 1070.61L685.047 1076.85L689.448 1083.09L693.849 1089.33L698.25 1095.57L702.65 1101.81L707.051 1108.05L711.452 1114.29L715.853 1120.54L720.253 1126.78L724.599 1132.94L728.999 1139.18L733.4 1145.42L737.801 1151.66L736.496 1159.21L735.192 1166.75L727.648 1165.45" stroke="#0B5C4D" stroke-width="0.4896" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.385 1041.74L534.081 1049.28L532.8 1056.69L531.495 1064.23L530.19 1071.78L528.886 1079.32L527.581 1086.86L526.355 1094.35L524.995 1101.82L523.69 1109.36L522.386 1116.9L516.144 1121.31L509.903 1125.71L503.662 1130.11L502.357 1137.65L501.132 1145.14L499.771 1152.6L498.467 1160.15L497.162 1167.69L495.857 1175.23L494.553 1182.78L493.327 1190.27L491.967 1197.73L490.662 1205.28L489.358 1212.82L488.053 1220.36L486.748 1227.91L491.149 1234.15L495.55 1240.39L499.951 1246.63L504.296 1252.79L508.697 1259.03L507.471 1266.52L506.166 1274.07L504.862 1281.61L503.557 1289.15L502.252 1296.7L500.971 1304.11L494.73 1308.51L488.489 1312.91L482.247 1317.31L476.006 1321.71L469.765 1326.11L463.524 1330.51L457.282 1334.91L455.978 1342.45L454.673 1350L453.368 1357.54L452.143 1365.03L450.838 1372.57L449.478 1380.04L453.879 1386.28L458.279 1392.52L462.68 1398.76L467.081 1405L471.482 1411.24L475.882 1417.49L480.283 1423.73L484.684 1429.97L489.085 1436.21L493.486 1442.45L497.886 1448.69L502.287 1454.93L506.688 1461.17L511.089 1467.42L509.728 1474.88L508.424 1482.42L507.198 1489.91L505.894 1497.46L504.589 1505L503.229 1512.46L501.924 1520.01L500.619 1527.55L499.394 1535.04L498.089 1542.58L496.784 1550.13L495.424 1557.59L494.119 1565.14L492.815 1572.68L491.589 1580.17L490.285 1587.71L488.98 1595.25L487.62 1602.72L492.02 1608.96L496.421 1615.2L500.822 1621.44L505.223 1627.68L509.623 1633.93L514.024 1640.17L518.425 1646.41L522.826 1652.65L521.521 1660.19L520.296 1667.68L518.935 1675.15L517.631 1682.69L516.326 1690.23L515.021 1697.78L513.717 1705.32L512.491 1712.81L511.131 1720.27L509.826 1727.82L508.521 1735.36L507.217 1742.9L511.618 1749.15L516.018 1755.39L520.419 1761.63L524.82 1767.87L529.221 1774.11L533.621 1780.35L537.967 1786.51" stroke="#0B5C4D" stroke-width="0.457" stroke-linecap="round" stroke-linejoin="round"></path><path d="M544.139 1036.04L551.603 1037.4L559.091 1038.62L566.635 1039.93L574.179 1041.23L581.723 1042.54L589.266 1043.84L596.675 1045.12L604.219 1046.43L611.763 1047.73L619.306 1049.04L626.85 1050.34L631.251 1056.58L635.652 1062.83L640.052 1069.07L644.453 1075.31L648.854 1081.55L656.263 1082.83L663.807 1084.13L671.35 1085.44L678.894 1086.74L686.438 1088.05L692.679 1083.65" stroke="#0B5C4D" stroke-width="0.7895" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.312 1042.14L534.008 1049.69L532.703 1057.23L531.398 1064.78L530.094 1072.32L523.852 1076.72L517.611 1081.12L511.37 1085.52L505.208 1089.87L498.966 1094.27L492.725 1098.67L486.484 1103.07L480.243 1107.47L474.001 1111.87L467.76 1116.27L461.519 1120.67L455.278 1125.07L453.973 1132.62L452.613 1140.08L451.387 1147.57L450.082 1155.11L448.778 1162.66L447.473 1170.2L446.113 1177.67L444.808 1185.21L443.583 1192.7L437.341 1197.1L431.1 1201.5L424.859 1205.9L418.618 1210.3L412.376 1214.7L411.072 1222.24L409.767 1229.79L408.462 1237.33L407.181 1244.74L405.876 1252.28L404.572 1259.83L403.267 1267.37L401.963 1274.92L406.363 1281.16L413.851 1282.38L421.395 1283.69L420.09 1291.23L418.786 1298.77L417.481 1306.32L416.256 1313.81L414.895 1321.27L419.296 1327.51L423.697 1333.75L428.098 1339.99L432.498 1346.24L440.042 1347.54L447.507 1348.9L453.748 1344.5L461.292 1345.8L468.835 1347.11L476.324 1348.34L483.867 1349.64L491.332 1351L498.876 1352.3L506.419 1353.61L513.907 1354.84L521.451 1356.14L528.995 1357.44" stroke="#0B5C4D" stroke-width="0.5046" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.598 1035.94L551.141 1037.25L558.685 1038.55L566.15 1039.91L573.638 1041.14L578.039 1047.38L582.439 1053.62L586.84 1059.86L591.241 1066.1L595.642 1072.35L600.043 1078.59L604.443 1084.83L608.844 1091.07L616.388 1092.37L623.932 1093.68L631.42 1094.9L638.963 1096.21L646.428 1097.57L653.972 1098.87L661.515 1100.18L669.059 1101.48L676.547 1102.71L684.091 1104.01L691.556 1105.37L699.099 1106.68L706.643 1107.98L714.187 1109.29L720.428 1104.89L726.669 1100.49L727.974 1092.94L723.573 1086.7L716.029 1085.4L708.486 1084.09L700.942 1082.79" stroke="#0B5C4D" stroke-width="0.4863" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.6 1035.95L548.001 1042.19L552.401 1048.43L556.802 1054.67L561.203 1060.91L565.604 1067.15L570.004 1073.39L574.405 1079.63L578.806 1085.88L583.207 1092.12L587.608 1098.36L592.008 1104.6L596.409 1110.84L600.81 1117.08L605.211 1123.32L609.611 1129.56L614.012 1135.81L618.413 1142.05L617.053 1149.51L615.827 1157L614.522 1164.54L613.218 1172.09L611.913 1179.63L610.553 1187.1L609.327 1194.58L608.023 1202.13L606.718 1209.67L605.413 1217.22L604.109 1224.76L608.509 1231L615.997 1232.23L623.541 1233.53L631.085 1234.83L637.326 1230.43L632.925 1224.19L625.382 1222.89L617.838 1221.58L610.35 1220.36L611.655 1212.81L612.959 1205.27L614.264 1197.73L615.489 1190.24" stroke="#0B5C4D" stroke-width="0.3797" stroke-linecap="round" stroke-linejoin="round"></path><path d="M544.006 1036.01L551.55 1037.32L559.014 1038.68L566.502 1039.91L574.046 1041.21L581.59 1042.51L589.133 1043.82L596.677 1045.12L604.142 1046.48L611.63 1047.71L619.174 1049.01L626.717 1050.32L634.261 1051.62L641.805 1052.93L649.269 1054.29L656.757 1055.51L664.301 1056.82L671.845 1058.12L679.389 1059.43L685.63 1055.03L691.871 1050.63L698.112 1046.23L704.275 1041.88L710.516 1037.48L716.757 1033.08L722.998 1028.68L729.24 1024.28L730.544 1016.73L738.088 1018.04L745.632 1019.34L753.12 1020.57L760.584 1021.93L768.128 1023.23L775.672 1024.54L783.216 1025.84L790.759 1027.15L797 1022.75L803.242 1018.35L795.698 1017.04L788.154 1015.74L780.611 1014.43L773.067 1013.13L765.523 1011.82L758.114 1010.54L750.57 1009.24" stroke="#0B5C4D" stroke-width="0.9527" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.315 1042.14L534.089 1049.63L532.729 1057.1L531.424 1064.64L530.119 1072.18L528.815 1079.73L527.51 1087.27L526.229 1094.68L524.924 1102.22L523.619 1109.77L522.315 1117.31L521.01 1124.86L525.411 1131.1L529.812 1137.34L534.213 1143.58L538.613 1149.82L542.958 1155.98L547.359 1162.22L546.055 1169.77L544.829 1177.26L543.524 1184.8L542.22 1192.34L540.915 1199.89L539.555 1207.35L538.329 1214.84L537.024 1222.38L535.72 1229.93L534.415 1237.47L533.055 1244.94L531.75 1252.48L536.151 1258.72L540.552 1264.96L544.953 1271.2L549.353 1277.44L553.754 1283.69L558.155 1289.93L562.556 1296.17L566.956 1302.41L571.357 1308.65L575.758 1314.89L580.159 1321.13L584.56 1327.37L588.96 1333.62L593.361 1339.86L597.762 1346.1L602.107 1352.26L600.881 1359.75L599.577 1367.29L598.272 1374.84L596.967 1382.38L595.663 1389.92L600.064 1396.16L604.409 1402.33L608.809 1408.57L613.21 1414.81L617.611 1421.05L622.012 1427.29L626.413 1433.53L630.813 1439.77L635.214 1446.02L639.615 1452.26L644.016 1458.5L648.417 1464.74L652.817 1470.98L657.218 1477.22L661.619 1483.46L660.314 1491.01L659.033 1498.42L657.728 1505.96L656.424 1513.5L655.119 1521.05L653.814 1528.59L652.589 1536.08L651.228 1543.54L649.924 1551.09L648.619 1558.63L647.314 1566.17L646.01 1573.72L644.728 1581.13L643.424 1588.67L642.119 1596.21L646.52 1602.46L650.921 1608.7L658.464 1610L666.008 1611.31L673.417 1612.59L680.961 1613.89L688.505 1615.2L696.048 1616.5L703.592 1617.81L711.136 1619.11L718.545 1620.39L726.089 1621.7L733.632 1623L741.176 1624.31L748.72 1625.61L756.184 1626.97L763.672 1628.2L768.073 1634.44L772.474 1640.68L776.875 1646.92L781.276 1653.16L785.676 1659.4L790.077 1665.64L794.478 1671.89L798.879 1678.13L797.574 1685.67L801.975 1691.91L806.376 1698.15L810.776 1704.39" stroke="#0B5C4D" stroke-width="0.3641" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.736 1035.97L551.201 1037.33L558.689 1038.56L566.233 1039.86L573.777 1041.17L581.32 1042.47L588.864 1043.77L596.329 1045.13L600.729 1051.38L605.13 1057.62L609.475 1063.78L608.25 1071.27L606.945 1078.81L611.346 1085.05L618.889 1086.36L614.489 1080.12L610.088 1073.87" stroke="#0B5C4D" stroke-width="0.812" stroke-linecap="round" stroke-linejoin="round"></path><path d="M544.006 1036.01L551.55 1037.32L559.093 1038.62L566.637 1039.93L574.181 1041.23L581.645 1042.59L589.133 1043.82L596.677 1045.12L604.221 1046.43L611.765 1047.73L619.308 1049.04L626.773 1050.4L634.261 1051.62L641.805 1052.93L649.348 1054.23L653.749 1060.47L658.15 1066.72L662.551 1072.96L666.952 1079.2L671.352 1085.44L675.753 1091.68L680.154 1097.92L684.555 1104.16L688.956 1110.4L693.301 1116.57L697.701 1122.81L702.102 1129.05L706.503 1135.29L710.904 1141.53L715.304 1147.77L719.705 1154.01L718.401 1161.56L722.801 1167.8L730.345 1169.1L737.889 1170.41L745.298 1171.69L752.842 1172.99L759.083 1168.59L765.324 1164.19L771.565 1159.79L777.807 1155.39L784.048 1150.99L790.289 1146.59L796.53 1142.19L802.772 1137.79L809.013 1133.39L815.254 1128.99L821.495 1124.59L817.094 1118.34L812.694 1112.1L806.452 1116.5L805.148 1124.05L803.843 1131.59L797.602 1135.99L791.361 1140.39L785.12 1144.79L777.576 1143.49L773.175 1137.25L767.013 1141.59L760.771 1145.99L754.53 1150.39L748.289 1154.8L742.048 1159.2L740.743 1166.74" stroke="#0B5C4D" stroke-width="0.3455" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.598 1035.94L551.141 1037.25L558.685 1038.55L566.15 1039.91L573.638 1041.14L581.182 1042.44L588.725 1043.75L596.269 1045.05L603.813 1046.36L608.213 1052.6L612.614 1058.84L616.959 1065L621.36 1071.24L625.761 1077.49L630.162 1083.73L634.562 1089.97L638.963 1096.21L643.364 1102.45L647.765 1108.69L652.166 1114.93L656.566 1121.17L655.262 1128.72L653.957 1136.26L646.413 1134.96L638.87 1133.65L631.326 1132.35L623.861 1130.99L619.46 1124.75" stroke="#0B5C4D" stroke-width="1.0373" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.525 1040.93L534.22 1048.47L532.916 1056.02L531.69 1063.51L530.33 1070.97L529.025 1078.51L527.72 1086.06L526.416 1093.6L525.111 1101.15L523.83 1108.56L528.23 1114.8L532.631 1121.04L537.032 1127.28L541.433 1133.52L545.834 1139.76L550.234 1146L554.635 1152.24L559.036 1158.49L563.437 1164.73L567.838 1170.97L572.238 1177.21L576.639 1183.45L581.04 1189.69L585.441 1195.93L589.841 1202.17L597.306 1203.53L604.794 1204.76L606.154 1197.3" stroke="#0B5C4D" stroke-width="0.9568" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.332 1035.9L550.876 1037.2L558.419 1038.51L565.963 1039.81L573.372 1041.09L580.916 1042.4L588.46 1043.7L596.003 1045.01L603.547 1046.31L611.012 1047.67L618.5 1048.9L626.043 1050.2L633.587 1051.51L641.131 1052.81L648.675 1054.12L654.916 1049.72L661.078 1045.37L667.319 1040.97L673.561 1036.57L679.802 1032.17L686.043 1027.77L693.587 1029.07L701.075 1030.3L708.619 1031.6L716.162 1032.91L723.627 1034.27L731.171 1035.57L738.659 1036.8L746.202 1038.1L753.746 1039.41L761.211 1040.77L768.755 1042.07L776.298 1043.38L783.786 1044.6L791.33 1045.91L798.874 1047.21L806.338 1048.57L812.58 1044.17L818.821 1039.77L825.062 1035.37L831.303 1030.97L837.545 1026.57L843.786 1022.17L850.027 1017.77L856.268 1013.37L862.51 1008.97L863.814 1001.42L865.119 993.879L866.345 986.391L862 980.228L857.599 973.987L853.198 967.746L854.503 960.202L855.807 952.658L848.264 951.354L840.72 950.049L833.255 948.689L825.767 947.463L819.526 951.864L813.285 956.265L807.043 960.666L805.683 968.13L804.378 975.674L803.074 983.218L801.848 990.706L800.543 998.249L799.239 1005.79L792.998 1010.19" stroke="#0B5C4D" stroke-width="0.3705" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.524 1040.93L534.242 1048.34L532.938 1055.89L537.338 1062.13L544.882 1063.43L543.577 1070.97L542.273 1078.52L546.674 1084.76L551.019 1090.92L555.419 1097.16L559.82 1103.4L564.221 1109.65L565.581 1102.18L561.181 1095.94L556.78 1089.7L552.379 1083.46L547.978 1077.22" stroke="#0B5C4D" stroke-width="0.4687" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.063 1035.85L547.464 1042.1L551.864 1048.34L556.265 1054.58L560.666 1060.82L565.067 1067.06L569.468 1073.3L573.868 1079.54L578.269 1085.78L582.67 1092.03L587.071 1098.27L591.416 1104.43L595.816 1110.67L600.217 1116.91L604.618 1123.15L603.313 1130.7L607.714 1136.94" stroke="#0B5C4D" stroke-width="0.7041" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.48 1041.2L534.198 1048.61L532.894 1056.15L531.589 1063.7L530.285 1071.24L528.98 1078.78L527.675 1086.33L526.394 1093.74L525.089 1101.28L523.785 1108.82L522.48 1116.37L521.175 1123.91L519.95 1131.4L518.589 1138.87L517.285 1146.41L511.044 1150.81L504.802 1155.21L498.561 1159.61L492.32 1164.01L486.079 1168.41L479.837 1172.81L473.596 1177.21L472.291 1184.76L476.692 1191L481.093 1197.24L485.494 1203.48L484.268 1210.97L482.964 1218.51L481.603 1225.98L480.299 1233.52L484.699 1239.76L489.1 1246L493.501 1252.25L497.902 1258.49L502.302 1264.73L500.998 1272.27L499.693 1279.82L498.412 1287.22L497.107 1294.77L495.803 1302.31" stroke="#0B5C4D" stroke-width="0.6696" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.525 1040.93L534.22 1048.47L532.995 1055.96L531.634 1063.43L530.33 1070.97L529.025 1078.51L527.72 1086.06L526.416 1093.6L525.134 1101.01L523.83 1108.56L522.525 1116.1L516.284 1120.5L510.043 1124.9L503.802 1129.3L497.56 1133.7L491.319 1138.1L485.078 1142.5L478.836 1146.9L472.595 1151.31L466.354 1155.71L460.113 1160.11L453.951 1164.45L447.709 1168.85L440.166 1167.55L432.622 1166.24L431.317 1173.79L430.013 1181.33L428.708 1188.87L427.482 1196.36L421.241 1200.76" stroke="#0B5C4D" stroke-width="0.8401" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.062 1035.85L547.463 1042.09L551.864 1048.34L556.265 1054.58L560.666 1060.82L565.066 1067.06L569.467 1073.3L573.868 1079.54L578.269 1085.78L582.67 1092.02L587.07 1098.27L591.471 1104.51L595.872 1110.75L600.273 1116.99L604.673 1123.23L609.074 1129.47L613.475 1135.71L617.876 1141.95L622.221 1148.12L629.765 1149.42L637.308 1150.73L644.852 1152.03L652.396 1153.33L659.86 1154.69L667.348 1155.92L674.892 1157.23L682.436 1158.53L689.98 1159.83L697.523 1161.14L704.988 1162.5L712.476 1163.73L716.877 1169.97L721.278 1176.21L725.678 1182.45L730.079 1188.69L734.48 1194.93L738.881 1201.17L743.282 1207.41L747.682 1213.66L752.083 1219.9L756.484 1226.14L760.885 1232.38L765.285 1238.62L769.686 1244.86L774.087 1251.1L781.575 1252.33L785.976 1258.57L790.377 1264.81L794.777 1271.05L799.178 1277.29L803.579 1283.53L807.98 1289.78L812.38 1296.02L816.781 1302.26L821.182 1308.5L825.583 1314.74L829.984 1320.98L834.384 1327.22L838.785 1333.46L843.186 1339.71L847.587 1345.95L851.987 1352.19L856.388 1358.43L860.789 1364.67L868.277 1365.9L875.821 1367.2L883.286 1368.56L890.829 1369.87L898.373 1371.17L905.861 1372.4L913.405 1373.7L920.948 1375.01L928.413 1376.37L935.957 1377.67L940.358 1383.91L944.758 1390.15L949.159 1396.39L953.56 1402.64L957.905 1408.8L962.306 1415.04L961.001 1422.58L959.776 1430.07L953.534 1434.47L947.293 1438.87L941.052 1443.27L934.811 1447.67L928.569 1452.07L922.328 1456.48L916.087 1460.88L908.543 1459.57L902.302 1463.97L906.703 1470.21L911.103 1476.45L915.504 1482.7" stroke="#0B5C4D" stroke-width="0.7224" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.549 1040.8L534.244 1048.34L532.939 1055.88L531.635 1063.43L530.353 1070.84L529.049 1078.38L527.744 1085.92L526.439 1093.47L525.135 1101.01L523.853 1108.42L522.549 1115.96L521.244 1123.51L519.939 1131.05L518.635 1138.6L517.33 1146.14L511.168 1150.48L503.624 1149.18" stroke="#0B5C4D" stroke-width="0.3134" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.546 1040.79L534.242 1048.34L532.96 1055.75L531.656 1063.29L525.415 1067.69L519.173 1072.09L512.932 1076.49L506.691 1080.89L500.45 1085.3L494.208 1089.7L487.967 1094.1L481.726 1098.5L475.485 1102.9L469.243 1107.3L463.002 1111.7L456.761 1116.1L450.52 1120.5L444.357 1124.85L438.116 1129.25L431.875 1133.65L425.634 1138.05L424.329 1145.59L423.024 1153.14L421.72 1160.68L420.415 1168.22L419.134 1175.63L417.829 1183.18L416.525 1190.72L415.22 1198.26L413.915 1205.81L412.555 1213.27L416.956 1219.51" stroke="#0B5C4D" stroke-width="0.4813" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.454 1041.33L539.855 1047.58L544.256 1053.82L548.656 1060.06L553.057 1066.3L557.458 1072.54L561.859 1078.78L566.204 1084.94L570.605 1091.18L575.005 1097.43L579.406 1103.67L583.807 1109.91L588.208 1116.15L595.751 1117.45L600.152 1123.7L604.553 1129.94L608.954 1136.18L613.354 1142.42L617.755 1148.66L622.156 1154.9L626.557 1161.14L630.958 1167.38L635.358 1173.63L639.703 1179.79L644.104 1186.03L648.505 1192.27L647.2 1199.81L645.896 1207.36L644.67 1214.85L643.365 1222.39L642.005 1229.85L640.701 1237.4L639.396 1244.94L638.091 1252.49L636.866 1259.97L635.561 1267.52L639.962 1273.76L644.363 1280L648.708 1286.16L653.108 1292.4L657.509 1298.64L661.91 1304.89L666.311 1311.13L665.006 1318.67L658.765 1323.07L652.524 1327.47L646.282 1331.87" stroke="#0B5C4D" stroke-width="0.6609" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.195 1035.88L547.596 1042.12L551.997 1048.36L556.398 1054.6L560.743 1060.76L565.144 1067L569.544 1073.24L573.945 1079.49L578.346 1085.73L582.747 1091.97L587.147 1098.21L591.548 1104.45L595.949 1110.69L600.35 1116.93L604.751 1123.17L609.151 1129.42L613.552 1135.66L617.953 1141.9L622.354 1148.14L626.754 1154.38L634.163 1155.66L641.707 1156.97L649.251 1158.27L656.795 1159.58L664.338 1160.88L668.739 1167.12L673.14 1173.36L677.541 1179.6L676.18 1187.07L674.876 1194.61L673.571 1202.16L666.027 1200.85L667.332 1193.31L673.573 1188.91L666.085 1187.68" stroke="#0B5C4D" stroke-width="0.2934" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.658 1035.78L550.202 1037.09L557.667 1038.45L565.155 1039.67L572.698 1040.98L580.242 1042.28L587.786 1043.59L595.33 1044.89L599.73 1051.13L604.131 1057.37L608.532 1063.62L612.877 1069.78L617.278 1076.02L621.678 1082.26L626.079 1088.5L630.48 1094.74L634.881 1100.98L639.282 1107.22L646.746 1108.59L654.29 1109.89L661.834 1111.19L669.322 1112.42L676.866 1113.72L684.33 1115.09L691.874 1116.39L699.418 1117.69L706.961 1119L714.449 1120.22L721.993 1121.53L729.458 1122.89L737.002 1124.19L743.243 1119.79L749.484 1115.39L755.725 1110.99L761.967 1106.59L768.208 1102.19L774.449 1097.79L766.905 1096.49L759.362 1095.18L751.818 1093.88L744.409 1092.59L736.865 1091.29L729.321 1089.99" stroke="#0B5C4D" stroke-width="0.7898" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.658 1035.78L550.202 1037.09L557.746 1038.39L565.289 1039.7L569.69 1045.94L574.091 1052.18L578.492 1058.42L582.837 1064.58L587.238 1070.82L591.638 1077.06L590.334 1084.61L594.734 1090.85L602.278 1092.15" stroke="#0B5C4D" stroke-width="0.8726" stroke-linecap="round" stroke-linejoin="round"></path><path d="M543.06 1035.85L549.301 1031.45L555.543 1027.05L561.784 1022.65L568.025 1018.25L574.266 1013.85L575.571 1006.3L576.931 998.84L578.157 991.352L579.462 983.808L580.766 976.264L582.071 968.72L583.376 961.177L584.657 953.768L585.962 946.224L587.266 938.68L588.571 931.137L584.17 924.895L579.769 918.654L575.368 912.413L569.127 916.814L562.886 921.214L570.43 922.519L577.973 923.824" stroke="#0B5C4D" stroke-width="0.5941" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.525 1040.93L534.22 1048.47L532.915 1056.02L526.674 1060.42L520.433 1064.82L514.271 1069.16L508.029 1073.56L501.788 1077.97L495.547 1082.37L489.306 1086.77L483.064 1091.17L481.76 1098.71L480.399 1106.18L479.095 1113.72L477.79 1121.26L476.564 1128.75L475.26 1136.3L473.9 1143.76L472.595 1151.3L471.29 1158.85L470.065 1166.34L468.76 1173.88L467.455 1181.42L466.095 1188.89L459.854 1193.29L453.613 1197.69L447.371 1202.09L441.13 1206.49L434.889 1210.89L428.648 1215.29L422.406 1219.69L416.244 1224.04L410.003 1228.44L403.762 1232.84L397.52 1237.24L391.279 1241.64L385.038 1246.04L378.797 1250.44L372.555 1254.84L366.314 1259.24L365.009 1266.79L363.705 1274.33L362.4 1281.88L361.175 1289.36L365.575 1295.6L369.976 1301.85L374.377 1308.09L378.722 1314.25L383.123 1320.49L387.524 1326.73L391.924 1332.97L385.683 1337.37L379.442 1341.77L375.041 1335.53L370.64 1329.29L366.239 1323.05L367.6 1315.59L368.825 1308.1L373.226 1314.34L377.627 1320.58L382.028 1326.82L386.429 1333.06" stroke="#0B5C4D" stroke-width="0.3358" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.926 1035.83L550.47 1037.13L558.013 1038.44L565.557 1039.74L573.101 1041.05L580.565 1042.41L588.053 1043.63L595.597 1044.94L603.141 1046.24L610.685 1047.55L618.228 1048.85L625.693 1050.21L633.181 1051.44L640.725 1052.74L648.268 1054.05L655.812 1055.35L663.356 1056.66L669.518 1052.31L675.759 1047.91L682.001 1043.51L688.242 1039.11L694.483 1034.71L700.724 1030.31L706.966 1025.91L713.207 1021.51L719.448 1017.11L725.689 1012.7L731.931 1008.3L733.235 1000.76L734.54 993.216L740.702 988.871" stroke="#0B5C4D" stroke-width="0.4559" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.616 1040.39L540.017 1046.63L544.418 1052.87L548.818 1059.12L553.219 1065.36L557.62 1071.6L562.021 1077.84L566.421 1084.08L570.822 1090.32L575.223 1096.56L579.624 1102.8L584.025 1109.05L588.425 1115.29L592.826 1121.53L597.227 1127.77L601.628 1134.01L605.973 1140.17L610.374 1146.41L617.917 1147.72L622.318 1153.96L626.719 1160.2L631.12 1166.44L635.52 1172.68L639.921 1178.93L644.322 1185.17L648.723 1191.41L653.124 1197.65L657.524 1203.89L661.925 1210.13L666.326 1216.37L670.727 1222.61L675.128 1228.86L679.473 1235.02L683.873 1241.26L688.274 1247.5L692.675 1253.74L700.14 1255.1L704.54 1261.34L703.315 1268.83L702.01 1276.37L700.706 1283.92L699.345 1291.38L698.041 1298.93L696.736 1306.47L695.51 1313.96L694.206 1321.5L692.845 1328.97L691.541 1336.51L690.236 1344.05L688.931 1351.6L687.706 1359.09L686.401 1366.63L685.041 1374.09L689.442 1380.34L693.842 1386.58L698.243 1392.82L705.787 1394.12L713.331 1395.43L720.795 1396.79L728.339 1398.09L735.827 1399.32L743.371 1400.62L750.914 1401.93L758.458 1403.23L765.923 1404.59L773.467 1405.9L777.812 1412.06L782.213 1418.3L786.613 1424.54L791.014 1430.78L795.415 1437.02L799.816 1443.27L804.216 1449.51L808.617 1455.75L816.161 1457.05L823.705 1458.36L831.248 1459.66L838.736 1460.89L846.201 1462.25L853.745 1463.55L861.289 1464.86L868.832 1466.16L876.32 1467.39L883.864 1468.69L891.329 1470.05L898.872 1471.36L903.273 1477.6L907.674 1483.84L912.075 1490.08L916.476 1496.32L920.876 1502.56L925.277 1508.8L929.678 1515.05L934.079 1521.29L938.424 1527.45L942.825 1533.69L947.225 1539.93L951.626 1546.17L956.027 1552.41L960.428 1558.66L964.828 1564.9L969.229 1571.14L973.63 1577.38L978.031 1583.62L976.726 1591.16L975.5 1598.65L974.14 1606.12L972.835 1613.66L971.531 1621.2L970.226 1628.75" stroke="#0B5C4D" stroke-width="0.399" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.663 1040.12L534.359 1047.67L533.054 1055.21L531.75 1062.75L530.468 1070.16L529.164 1077.71L527.859 1085.25L526.554 1092.79L525.25 1100.34L523.945 1107.88L522.664 1115.29L527.065 1121.53L531.465 1127.77L535.866 1134.01L540.267 1140.26L544.668 1146.5L549.068 1152.74L553.469 1158.98L557.87 1165.22L562.271 1171.46L566.672 1177.7L571.072 1183.94L575.473 1190.19L579.874 1196.43L584.275 1202.67L588.675 1208.91L593.076 1215.15L597.421 1221.31L601.822 1227.55L606.223 1233.8L613.688 1235.16L621.231 1236.46L628.775 1237.77L636.319 1239.07L630.078 1243.47L623.836 1247.87L617.595 1252.27L611.354 1256.67L606.953 1250.43L602.552 1244.19L598.151 1237.95L599.456 1230.41" stroke="#0B5C4D" stroke-width="0.3723" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.573 1040.66L534.268 1048.2L532.964 1055.75L531.659 1063.29L530.354 1070.84L529.05 1078.38L527.769 1085.79L526.464 1093.33L525.159 1100.88L523.855 1108.42L522.55 1115.96L521.324 1123.45L519.964 1130.92L518.659 1138.46L517.355 1146L521.755 1152.24L526.156 1158.49L530.557 1164.73L534.958 1170.97L539.359 1177.21L543.759 1183.45L548.16 1189.69L552.561 1195.93L556.906 1202.1L561.307 1208.34L565.708 1214.58L564.403 1222.12L563.098 1229.67L561.873 1237.15L560.568 1244.7L559.263 1252.24L557.903 1259.71L556.598 1267.25L555.294 1274.79L554.068 1282.28L552.764 1289.83L551.403 1297.29L550.099 1304.83L548.794 1312.38L547.568 1319.87L546.264 1327.41L544.959 1334.95L543.599 1342.42L542.294 1349.96L536.053 1354.36L529.812 1358.76L523.57 1363.16L517.329 1367.56L511.088 1371.97L504.926 1376.31L498.684 1380.71L492.443 1385.11L486.202 1389.51L478.658 1388.21L471.17 1386.98L463.626 1385.68L456.083 1384.37L460.483 1390.61L464.884 1396.86L469.285 1403.1L473.686 1409.34L481.23 1410.64L488.718 1411.87L496.261 1413.17L503.805 1414.48L511.349 1415.78L518.813 1417.14L526.301 1418.37L533.845 1419.67L541.389 1420.98L547.63 1416.58L553.871 1412.18L560.113 1407.78L566.354 1403.37L572.595 1398.97L578.757 1394.63L584.999 1390.23L591.24 1385.83L592.544 1378.28L593.849 1370.74L595.209 1363.27L596.514 1355.73L597.819 1348.19L590.275 1346.88L582.731 1345.58L581.427 1353.12L580.122 1360.67L584.523 1366.91L588.924 1373.15L587.619 1380.69" stroke="#0B5C4D" stroke-width="0.6879" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.119 1035.69L549.528 1036.97L557.072 1038.27L564.616 1039.58L572.159 1040.88L579.703 1042.19L587.168 1043.55L594.656 1044.77L602.199 1046.08L609.743 1047.38L617.287 1048.69L624.831 1049.99L632.295 1051.35L639.783 1052.58L647.327 1053.88L654.871 1055.19L662.414 1056.49L669.879 1057.85L677.367 1059.08L683.608 1054.68L689.85 1050.28L696.091 1045.88L702.332 1041.48L708.573 1037.07L714.815 1032.67L721.056 1028.27L727.297 1023.87L733.538 1019.47L739.78 1015.07L746.021 1010.67L752.262 1006.27L759.806 1007.57L767.271 1008.93L774.814 1010.24L782.358 1011.54L789.902 1012.85L797.39 1014.07L804.854 1015.43L812.398 1016.74L816.799 1022.98L821.2 1029.22L819.895 1036.77L812.43 1035.4L804.887 1034.1L797.343 1032.8L789.855 1031.57L782.311 1030.27L774.846 1028.9L768.605 1033.31L762.364 1037.71L769.829 1039.07L777.372 1040.37L784.86 1041.6L792.404 1042.9L799.948 1044.21L807.492 1045.51L808.717 1038.02L801.253 1036.66L795.011 1041.06L790.61 1034.82" stroke="#0B5C4D" stroke-width="0.3932" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.119 1035.69L549.663 1036.99L557.207 1038.3L564.671 1039.66L572.159 1040.88L579.703 1042.19L587.247 1043.49L594.79 1044.8L602.334 1046.1L609.743 1047.38L617.287 1048.69L624.831 1049.99L632.374 1051.3L639.918 1052.6L647.383 1053.96L654.871 1055.19L662.414 1056.49L666.815 1062.73L674.359 1064.04L678.76 1070.28L683.161 1076.52L690.704 1077.83L698.248 1079.13L705.657 1080.41L713.201 1081.72L720.744 1083.02L728.288 1084.33L735.832 1085.63L743.376 1086.93L750.785 1088.22L758.328 1089.52L765.872 1090.83L773.416 1092.13L780.959 1093.43L788.368 1094.72L795.912 1096.02L803.456 1097.33L811 1098.63L815.4 1104.87L819.801 1111.11L824.202 1117.35L828.603 1123.6L833.003 1129.84L837.404 1136.08L841.805 1142.32L846.15 1148.48L850.551 1154.72L854.952 1160.96L859.352 1167.2L863.753 1173.45L868.154 1179.69L872.555 1185.93L876.956 1192.17L881.356 1198.41L880.052 1205.95L878.747 1213.5L877.443 1221.04L876.161 1228.45L874.857 1235.99L873.552 1243.54L872.247 1251.08L876.648 1257.32L875.343 1264.87L869.102 1269.27L862.861 1273.67L856.62 1278.07L850.457 1282.41L844.216 1286.82L837.975 1291.22L831.734 1295.62L825.492 1300.02L817.949 1298.71L813.548 1292.47L809.147 1286.23L804.746 1279.99L800.346 1273.75L795.945 1267.51L791.544 1261.27L787.143 1255.02" stroke="#0B5C4D" stroke-width="0.64" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.57 1040.66L529.329 1045.06L523.088 1049.46L516.846 1053.86L510.605 1058.26L504.364 1062.66L498.123 1067.07L491.881 1071.47L484.338 1070.16L476.873 1068.8L469.385 1067.58L461.841 1066.27L454.298 1064.97L446.754 1063.66L439.289 1062.3L431.801 1061.08L424.257 1059.77L416.714 1058.47L409.17 1057.16L401.626 1055.86L395.385 1060.26L389.144 1064.66L382.981 1069L376.74 1073.4L375.436 1080.95L367.892 1079.64L360.348 1078.34L352.86 1077.11L345.316 1075.81L337.852 1074.45L330.308 1073.14L322.764 1071.84L315.221 1070.53L307.733 1069.31L300.268 1067.95L292.724 1066.64L285.18 1065.34L277.637 1064.03L270.149 1062.81L262.605 1061.5L255.14 1060.14L247.596 1058.84L243.196 1052.6L238.795 1046.36L234.394 1040.12L229.993 1033.87L222.45 1032.57L214.962 1031.34L207.418 1030.04L199.874 1028.74L192.409 1027.37L184.866 1026.07L177.378 1024.84L169.834 1023.54L162.29 1022.24L154.826 1020.87L147.282 1019.57L139.738 1018.27L132.25 1017.04L124.706 1015.74L118.465 1020.14L112.224 1024.54L105.983 1028.94L99.7414 1033.34L93.5792 1037.68L87.3379 1042.08L81.0967 1046.49L74.8555 1050.89L68.6142 1055.29L62.373 1059.69L56.1317 1064.09L49.8905 1068.49L43.6492 1072.89L37.408 1077.29L31.1667 1081.69L24.9255 1086.09L18.6842 1090.49L17.3796 1098.04L16.0192 1105.5L14.7936 1112.99L13.489 1120.53L12.1844 1128.08L10.8797 1135.62L9.57506 1143.16L8.29373 1150.57L6.98913 1158.12L5.6845 1165.66L4.37986 1173.2L3.07523 1180.75L1.71486 1188.21L0.48922 1195.7L-0.815374 1203.24L-2.12 1210.79L-3.42464 1218.33L-4.72927 1225.88L-10.9705 1230.28L-17.2118 1234.68L-23.453 1239.08L-29.6153 1243.42L-35.8565 1247.82L-37.2168 1255.29L-38.5215 1262.83L-39.8261 1270.38L-41.1308 1277.92L-42.4354 1285.46L-43.661 1292.95L-45.0214 1300.42L-46.326 1307.96L-47.6306 1315.5L-48.9353 1323.05" stroke="#0B5C4D" stroke-width="1.0487" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.251 1035.71L546.652 1041.95L551.053 1048.19L555.454 1054.44L559.855 1060.68L564.255 1066.92L568.656 1073.16L567.296 1080.62L571.697 1086.87L576.097 1093.11L580.498 1099.35L584.899 1105.59L589.3 1111.83L593.7 1118.07L598.101 1124.31L602.502 1130.55L606.903 1136.8L611.304 1143.04L615.704 1149.28L620.105 1155.52L624.506 1161.76L628.907 1168L633.308 1174.24L637.708 1180.48L645.196 1181.71L649.597 1187.95L653.998 1194.19L658.399 1200.43L662.799 1206.68L667.2 1212.92L671.601 1219.16L676.002 1225.4L680.403 1231.64L684.803 1237.88L689.204 1244.12L693.605 1250.36L698.006 1256.61L702.406 1262.85L706.807 1269.09L711.208 1275.33L715.553 1281.49L714.248 1289.03L718.649 1295.28L723.05 1301.52L727.451 1307.76L731.852 1314L736.252 1320.24L740.653 1326.48L745.054 1332.72L749.455 1338.96L753.856 1345.21L758.256 1351.45L756.952 1358.99L755.591 1366.46L754.287 1374L758.687 1380.24L763.088 1386.48L767.489 1392.72L771.89 1398.96L776.291 1405.21L780.691 1411.45L785.092 1417.69L789.493 1423.93L793.894 1430.17L801.437 1431.48L808.926 1432.7L816.469 1434.01L824.013 1435.31L831.557 1436.61L839.021 1437.98L846.565 1439.28L854.053 1440.51L861.597 1441.81L869.14 1443.11L876.605 1444.48L884.149 1445.78L888.55 1452.02L892.95 1458.26L897.296 1464.42L901.696 1470.67L906.097 1476.91L910.498 1483.15L914.899 1489.39L919.299 1495.63L923.7 1501.87L931.244 1503.18L935.645 1509.42L940.045 1515.66L947.589 1516.96L955.133 1518.27L962.621 1519.49L970.086 1520.85L977.629 1522.16L985.173 1523.46L989.574 1529.7L993.975 1535.95L998.375 1542.19L1002.78 1548.43L1007.18 1554.67L1011.52 1560.83L1015.92 1567.07L1020.32 1573.31L1024.72 1579.56L1029.13 1585.8L1033.53 1592.04L1037.93 1598.28L1042.33 1604.52L1046.73 1610.76L1051.13 1617L1055.53 1623.24" stroke="#0B5C4D" stroke-width="0.7736" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.387 1035.74L549.93 1037.04L557.474 1038.34L565.018 1039.65L572.483 1041.01L578.724 1036.61L584.965 1032.21L591.206 1027.81L597.448 1023.41L603.689 1019.01L609.93 1014.6L616.171 1010.2L622.413 1005.8L628.654 1001.4L634.895 997.002L641.136 992.601L647.378 988.2L653.619 983.8L659.86 979.399L666.101 974.998L672.343 970.597L679.752 971.878L687.295 973.183L694.839 974.488L702.383 975.792L709.926 977.097L717.47 978.402L724.879 979.683L732.423 980.988L739.967 982.292L747.51 983.597L751.911 989.838L750.606 997.382L744.365 1001.78L738.124 1006.18" stroke="#0B5C4D" stroke-width="0.3236" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.571 1040.66L534.29 1048.07L532.985 1055.61L531.68 1063.16L530.376 1070.7L529.071 1078.24L527.766 1085.79L526.485 1093.2L525.18 1100.74L523.876 1108.28L522.571 1115.83L521.267 1123.37L519.962 1130.92L518.681 1138.33L517.376 1145.87L516.071 1153.41L514.767 1160.96L513.462 1168.5L517.863 1174.74L522.264 1180.98L526.609 1187.14L531.009 1193.39L535.41 1199.63L539.811 1205.87L544.212 1212.11L548.613 1218.35L556.156 1219.66L560.557 1225.9L559.252 1233.44L553.011 1237.84L546.77 1242.24L540.608 1246.59L534.366 1250.99L535.592 1243.5L536.897 1235.96L538.201 1228.41L539.562 1220.95L540.866 1213.4L545.267 1219.65L549.668 1225.89L557.156 1227.11" stroke="#0B5C4D" stroke-width="0.7185" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.119 1035.69L549.663 1036.99L554.064 1043.23L558.464 1049.48L562.865 1055.72L567.266 1061.96L571.667 1068.2L576.068 1074.44L580.468 1080.68L584.869 1086.92L589.27 1093.16L593.671 1099.41L598.071 1105.65L602.472 1111.89L606.873 1118.13L611.274 1124.37L615.619 1130.53L620.02 1136.77L627.563 1138.08L635.107 1139.38L642.651 1140.69L650.116 1142.05L657.659 1143.35L665.147 1144.58L672.691 1145.88L680.235 1147.19L687.778 1148.49L695.243 1149.85L702.787 1151.16L710.275 1152.38L717.819 1153.69L725.362 1154.99L732.827 1156.35L740.371 1157.66L746.612 1153.26L752.853 1148.86L759.094 1144.46L765.336 1140.05L771.577 1135.65L777.818 1131.25L784.059 1126.85L790.301 1122.45L796.542 1118.05L802.783 1113.65L809.024 1109.25L816.512 1110.47L820.913 1116.72L825.314 1122.96L824.009 1130.5L822.705 1138.04L821.4 1145.59L820.095 1153.13L818.735 1160.6L817.51 1168.08L816.205 1175.63L814.9 1183.17L819.301 1189.41L817.996 1196.96L816.692 1204.5L815.331 1211.97L814.106 1219.45L812.801 1227L811.496 1234.54L810.192 1242.08L808.832 1249.55L807.606 1257.04L806.301 1264.58L810.702 1270.82L815.103 1277.06L819.504 1283.3L823.904 1289.55L828.305 1295.79L832.706 1302.03L837.107 1308.27L841.508 1314.51L845.908 1320.75L850.309 1326.99L854.71 1333.23L859.055 1339.4L863.456 1345.64L867.857 1351.88L872.257 1358.12L876.658 1364.36L884.202 1365.67L890.364 1361.32L896.605 1356.92L902.847 1352.52L909.088 1348.12L915.329 1343.72L916.634 1336.17L917.938 1328.63L919.299 1321.17L920.603 1313.62L926.845 1309.22L933.007 1304.88L940.55 1306.18L944.951 1312.42L949.352 1318.66L953.697 1324.83L958.098 1331.07L962.499 1337.31L966.899 1343.55L971.3 1349.79L975.701 1356.03L980.102 1362.27L978.797 1369.82L977.572 1377.31L976.267 1384.85L974.907 1392.31L973.602 1399.86" stroke="#0B5C4D" stroke-width="0.4426" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.59 1040.53L534.286 1048.07L532.981 1055.61L531.676 1063.16L530.372 1070.7L529.091 1078.11L527.786 1085.65L526.481 1093.2L525.177 1100.74L523.872 1108.29L522.646 1115.77L521.286 1123.24L525.687 1129.48L530.088 1135.72L534.488 1141.96L538.889 1148.2L543.29 1154.44L547.691 1160.69L552.091 1166.93L556.492 1173.17L560.893 1179.41L565.294 1185.65L572.838 1186.96L571.477 1194.42L570.173 1201.96L568.868 1209.51L567.563 1217.05L566.259 1224.6L565.033 1232.08L563.673 1239.55L568.073 1245.79L572.474 1252.03L576.875 1258.27L581.276 1264.51L585.677 1270.75L584.372 1278.3L583.067 1285.84L581.763 1293.39L580.402 1300.85L579.177 1308.34L577.872 1315.88" stroke="#0B5C4D" stroke-width="0.8186" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.616 1040.39L534.312 1047.94L533.03 1055.34L531.726 1062.89L530.421 1070.43L529.116 1077.98L527.812 1085.52L526.507 1093.06L525.226 1100.47L523.921 1108.02L522.617 1115.56L521.312 1123.1L520.007 1130.65L524.408 1136.89L528.809 1143.13L533.21 1149.37L537.555 1155.53L541.956 1161.77L546.356 1168.02L550.757 1174.26L555.158 1180.5L559.559 1186.74L563.959 1192.98L568.36 1199.22L572.761 1205.46L577.162 1211.7L581.563 1217.95L585.963 1224.19L593.507 1225.49L592.202 1233.04L590.921 1240.44L589.616 1247.99L588.312 1255.53L587.007 1263.08L585.703 1270.62L584.342 1278.08L583.117 1285.57L581.812 1293.12L580.507 1300.66L579.203 1308.2L577.898 1315.75L571.657 1320.15L565.416 1324.55L559.174 1328.95L551.71 1327.59L552.935 1320.1L554.24 1312.56L555.545 1305.01L556.849 1297.47" stroke="#0B5C4D" stroke-width="0.3708" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.174 1035.77L549.662 1036.99L557.206 1038.3L564.749 1039.6L572.293 1040.91L579.758 1042.27L587.246 1043.49L594.789 1044.8L602.333 1046.1L609.877 1047.41L617.421 1048.71L624.885 1050.07L632.373 1051.3L639.917 1052.6L644.318 1058.84L648.719 1065.09L653.119 1071.33L651.815 1078.87L647.414 1072.63L643.013 1066.39L638.612 1060.15L634.212 1053.91" stroke="#0B5C4D" stroke-width="0.5807" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.521 1035.76L549.986 1037.12L557.474 1038.34L565.018 1039.65L572.562 1040.95L580.105 1042.26L587.57 1043.62L595.058 1044.84L602.602 1046.15L610.146 1047.45L617.689 1048.76L625.233 1050.06L632.698 1051.42L638.939 1047.02L645.18 1042.62L651.421 1038.22L657.663 1033.82L663.904 1029.42L671.392 1030.65L678.936 1031.95L686.479 1033.25L693.944 1034.61L701.488 1035.92L707.729 1031.52L713.97 1027.12L720.212 1022.72L726.453 1018.32L732.694 1013.92L738.935 1009.51L745.177 1005.11L751.418 1000.71L757.659 996.313L758.964 988.769L760.189 981.281L766.431 976.88L772.672 972.479L778.913 968.078L785.154 963.678L791.396 959.277L797.637 954.876L803.878 950.475L810.119 946.075L817.663 947.379" stroke="#0B5C4D" stroke-width="0.5099" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.119 1035.69L549.584 1037.05L557.072 1038.27L564.616 1039.58L572.159 1040.88L579.703 1042.19L587.168 1043.55L594.656 1044.77L602.199 1046.08L609.743 1047.38L617.287 1048.69L624.831 1049.99L632.295 1051.35L638.537 1046.95L644.778 1042.55L651.019 1038.15L657.26 1033.75L663.502 1029.35L669.743 1024.95L675.984 1020.55L682.225 1016.15L688.467 1011.75L694.708 1007.35L700.949 1002.94L708.437 1004.17L714.678 999.77L720.92 995.369L727.161 990.968L733.323 986.623L739.564 982.222L745.806 977.821L752.047 973.421L758.288 969.02L764.529 964.619L770.77 960.218L777.012 955.817L783.253 951.417L789.494 947.016L795.736 942.615L801.977 938.214L809.52 939.519L817.064 940.824L824.529 942.184L832.073 943.489L839.616 944.793L847.104 946.019L854.648 947.323L862.113 948.684L869.657 949.988L877.2 951.293L884.688 952.519L892.232 953.823L899.776 955.128L907.24 956.488L914.784 957.793L922.328 959.098L929.816 960.323L937.36 961.628L944.903 962.932L951.065 958.587L957.307 954.187L963.548 949.786L969.789 945.385L976.03 940.984L982.272 936.584L988.513 932.183L994.754 927.782L996.059 920.238L997.363 912.695L998.724 905.23L999.949 897.742L1001.25 890.198L1002.56 882.654L1003.86 875.111L1005.17 867.567L1006.53 860.102L1007.75 852.614L1009.06 845.07L1010.36 837.527L1011.67 829.983L1013.03 822.518L1014.25 815.03L1015.56 807.487L1021.8 803.086L1028.04 798.685L1034.28 794.284L1040.52 789.883L1046.76 785.483L1053.01 781.082L1059.25 776.681L1065.49 772.28L1071.73 767.88L1077.97 763.479L1084.21 759.078L1090.45 754.677L1096.69 750.276L1102.94 745.876L1109.1 741.531L1115.34 737.13L1121.58 732.729L1127.82 728.328L1134.06 723.927L1141.61 725.232L1149.15 726.537L1156.64 727.762L1164.18 729.067L1171.65 730.427L1179.19 731.732L1186.73 733.037L1191.14 739.278" stroke="#0B5C4D" stroke-width="0.6757" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.623 1040.74L534.263 1048.2L532.958 1055.75L531.654 1063.29L530.349 1070.84L529.045 1078.38L527.763 1085.79L526.459 1093.33L525.154 1100.88L523.849 1108.42L522.545 1115.96L521.24 1123.51L519.959 1130.92L513.717 1135.32L507.476 1139.72L501.235 1144.12L494.994 1148.52L488.752 1152.92L482.511 1157.32L476.27 1161.72L470.029 1166.12L463.787 1170.52L457.546 1174.92L451.305 1179.33L445.064 1183.73L443.759 1191.27L442.533 1198.76L441.229 1206.3L439.924 1213.84L438.564 1221.31L437.259 1228.85L436.034 1236.34L434.729 1243.89L433.424 1251.43L432.12 1258.97L430.759 1266.44L429.455 1273.98L428.229 1281.47L426.924 1289.01L425.62 1296.56L424.315 1304.1L422.955 1311.56L421.65 1319.11L415.488 1323.45L409.247 1327.85L403.005 1332.26L396.764 1336.66L390.523 1341.06L384.282 1345.46L378.041 1349.86L371.799 1354.26L370.495 1361.8L374.895 1368.04L379.296 1374.29L383.697 1380.53L388.098 1386.77L392.499 1393.01L396.899 1399.25L401.3 1405.49L405.701 1411.73L410.102 1417.97L414.447 1424.14L418.848 1430.38L423.248 1436.62L427.649 1442.86L432.05 1449.1L439.594 1450.41L447.137 1451.71L454.681 1453.02L462.146 1454.38L469.634 1455.6L477.177 1456.91L484.721 1458.21L492.265 1459.52L499.73 1460.88L504.13 1467.12L508.531 1473.36L502.369 1477.7L496.128 1482.1L489.886 1486.5L483.645 1490.91L477.404 1495.31L471.163 1499.71L464.921 1504.11L457.378 1502.8L449.834 1501.5L442.29 1500.19L434.826 1498.83L427.282 1497.53L419.794 1496.3L412.25 1495L404.706 1493.69L397.163 1492.39L389.698 1491.03L382.21 1489.8L374.666 1488.5L367.123 1487.19L359.579 1485.89L352.114 1484.53L344.57 1483.22L337.082 1482L329.539 1480.69L321.995 1479.39L315.754 1483.79L309.512 1488.19L308.287 1495.68L306.982 1503.22L305.622 1510.69L304.317 1518.23L303.013 1525.77" stroke="#0B5C4D" stroke-width="0.5671" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.571 1040.66L534.267 1048.21L532.962 1055.75L531.658 1063.29L530.376 1070.7L529.072 1078.25L527.767 1085.79L526.462 1093.33L525.158 1100.88L529.558 1107.12L533.959 1113.36L538.36 1119.6L542.705 1125.76L547.106 1132L551.507 1138.25L555.907 1144.49L560.308 1150.73L564.709 1156.97L569.11 1163.21L573.511 1169.45L577.911 1175.69L582.312 1181.93L586.713 1188.18L591.114 1194.42L595.514 1200.66L599.915 1206.9L598.69 1214.39L597.329 1221.85L596.025 1229.4L594.72 1236.94L593.415 1244.48L592.111 1252.03L590.885 1259.51L589.525 1266.98L588.22 1274.52L586.916 1282.07L585.611 1289.61L584.306 1297.15L583.025 1304.56L581.72 1312.11L580.416 1319.65L579.111 1327.19L577.806 1334.74L576.581 1342.23L575.22 1349.69L573.916 1357.23L572.611 1364.78L571.307 1372.32L565.065 1376.72L558.824 1381.12L552.583 1385.52L546.341 1389.93L540.179 1394.27L533.938 1398.67L527.697 1403.07L521.455 1407.47L513.912 1406.17L506.368 1404.86L498.824 1403.56L491.336 1402.33L483.872 1400.97L476.328 1399.67L468.784 1398.36L473.185 1404.6L480.729 1405.91L488.272 1407.21L495.737 1408.57L503.225 1409.8L510.769 1411.1L518.313 1412.41L525.856 1413.71L533.321 1415.07L540.865 1416.38L547.106 1411.98L548.411 1404.43L549.715 1396.89L551.02 1389.35L546.619 1383.11L542.218 1376.86L537.818 1370.62L533.417 1364.38L534.721 1356.84L542.186 1358.2L549.73 1359.5L557.274 1360.81L564.817 1362.11L571.059 1357.71L569.754 1365.26L563.513 1369.66L557.271 1374.06L551.03 1378.46L546.629 1372.22L547.934 1364.67L540.39 1363.37L544.791 1369.61L552.335 1370.91L558.576 1366.51" stroke="#0B5C4D" stroke-width="0.7587" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.309 1035.55L548.852 1036.85L553.253 1043.09L557.654 1049.34L562.055 1055.58L566.455 1061.82L570.856 1068.06L575.257 1074.3L579.658 1080.54L584.059 1086.78L588.459 1093.02L592.86 1099.27L597.261 1105.51L601.662 1111.75L602.966 1104.2L598.566 1097.96L606.109 1099.27L613.653 1100.57L621.062 1101.85L628.606 1103.16L633.007 1109.4L637.407 1115.64L641.808 1121.88L648.049 1117.48L652.45 1123.72" stroke="#0B5C4D" stroke-width="0.635" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.754 1039.58L534.449 1047.13L538.85 1053.37L543.251 1059.61L547.652 1065.85L552.053 1072.09L556.453 1078.33L560.854 1084.58L565.255 1090.82L569.656 1097.06L568.351 1104.6L566.991 1112.07L560.75 1116.47L554.508 1120.87L548.267 1125.27L543.866 1119.03L539.521 1112.87L535.12 1106.62L530.72 1100.38L532.024 1092.84L533.329 1085.3L534.633 1077.75L535.938 1070.21" stroke="#0B5C4D" stroke-width="0.324" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.309 1035.55L548.852 1036.85L555.094 1032.45L561.256 1028.11L567.497 1023.71L573.738 1019.31L579.98 1014.9L581.284 1007.36L587.525 1002.96L593.767 998.559L600.008 994.158L606.249 989.758L612.49 985.357L618.732 980.956L624.973 976.555L631.214 972.154L637.455 967.754L643.697 963.353L649.938 958.952L656.1 954.607L662.341 950.206L668.583 945.805L674.824 941.405L681.065 937.004L687.306 932.603L693.548 928.202L699.789 923.802L707.333 925.106L714.876 926.411L722.364 927.636L728.606 923.236L734.768 918.891L741.009 914.49L747.25 910.089L753.492 905.688L759.733 901.287L765.974 896.887L772.215 892.486L778.456 888.085L784.698 883.684L790.939 879.284L797.18 874.883L798.541 867.418L799.845 859.874L801.071 852.386L807.312 847.986" stroke="#0B5C4D" stroke-width="0.418" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.175 1035.53L548.719 1036.83L553.12 1043.07L557.521 1049.31L561.921 1055.56L566.322 1061.8L570.723 1068.04L575.124 1074.28L579.525 1080.52L583.925 1086.76L588.326 1093L592.727 1099.24L597.128 1105.49L601.528 1111.73L605.929 1117.97L610.33 1124.21L614.731 1130.45L619.076 1136.61L623.477 1142.85L627.877 1149.1L632.278 1155.34L636.679 1161.58L641.08 1167.82L645.481 1174.06L649.881 1180.3L654.282 1186.54L658.683 1192.78L663.084 1199.03L667.484 1205.27L671.885 1211.51L676.286 1217.75L680.687 1223.99L685.088 1230.23L689.488 1236.47L693.889 1242.71L698.29 1248.96L702.635 1255.12L707.036 1261.36L705.731 1268.9L704.505 1276.39L708.906 1282.63L713.307 1288.87L717.708 1295.11L722.109 1301.36L726.509 1307.6L730.91 1313.84L735.311 1320.08L739.712 1326.32L744.112 1332.56L751.521 1333.84L759.065 1335.15L766.609 1336.45L774.153 1337.76L781.696 1339.06L789.161 1340.42L796.649 1341.65L804.193 1342.95L811.737 1344.26L819.28 1345.56L826.824 1346.87L834.233 1348.15L841.777 1349.45L849.32 1350.76L848.016 1358.3L846.711 1365.84L845.486 1373.33L849.886 1379.57L854.231 1385.74L858.632 1391.98L863.033 1398.22L867.434 1404.46L871.835 1410.7L876.235 1416.94L880.636 1423.18L885.037 1429.42L889.438 1435.67L893.838 1441.91L898.239 1448.15L902.64 1454.39L907.041 1460.63L911.442 1466.87L915.842 1473.11L920.243 1479.35L918.939 1486.9L923.284 1493.06L927.684 1499.3L935.228 1500.61L939.629 1506.85L944.03 1513.09L951.494 1514.45L959.038 1515.75L966.582 1517.06L974.07 1518.28L981.614 1519.59L989.157 1520.89L996.622 1522.25L1004.17 1523.56L1011.71 1524.86L1019.2 1526.09L1026.74 1527.39L1034.21 1528.75L1040.45 1524.35L1046.69 1519.95L1052.93 1515.55L1059.17 1511.15L1060.48 1503.61L1061.78 1496.06L1063.14 1488.6L1064.45 1481.05L1065.67 1473.57" stroke="#0B5C4D" stroke-width="0.4217" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.732 1039.72L534.506 1047.21L538.851 1053.37L543.252 1059.61L547.653 1065.85L552.054 1072.09L556.454 1078.33L560.855 1084.58L565.256 1090.82L569.657 1097.06L574.058 1103.3L578.458 1109.54L582.859 1115.78L587.26 1122.02L591.661 1128.26L596.062 1134.51L600.462 1140.75L604.863 1146.99L609.264 1153.23L613.665 1159.47L618.01 1165.63L622.411 1171.87L626.811 1178.11L634.276 1179.48L638.677 1185.72L643.078 1191.96L647.478 1198.2L651.879 1204.44L656.28 1210.68L660.681 1216.92L665.081 1223.16L669.482 1229.41L673.883 1235.65L678.284 1241.89L682.685 1248.13L687.085 1254.37L691.486 1260.61L695.831 1266.77L700.232 1273.01L704.633 1279.26L712.176 1280.56L718.418 1276.16L719.722 1268.62L721.083 1261.15L722.387 1253.61L728.629 1249.21L734.87 1244.81L741.032 1240.46L747.273 1236.06L748.578 1228.52L744.177 1222.28L739.776 1216.03L735.376 1209.79L730.975 1203.55L724.734 1207.95L723.429 1215.5L722.203 1222.98L720.899 1230.53L719.538 1237.99L718.234 1245.54L716.929 1253.08L715.625 1260.62L714.399 1268.11L713.094 1275.66" stroke="#0B5C4D" stroke-width="0.5253" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.801 1039.31L534.497 1046.86L528.334 1051.2L522.093 1055.6L515.852 1060.01L523.261 1061.29" stroke="#0B5C4D" stroke-width="0.8559" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.582 1035.59L549.126 1036.9L553.527 1043.14L557.927 1049.38L562.328 1055.62L566.729 1061.86L571.13 1068.11L575.53 1074.35L579.931 1080.59L584.332 1086.83L588.733 1093.07L593.134 1099.31L597.534 1105.55L601.935 1111.79L606.336 1118.04L613.824 1119.26L621.368 1120.57L628.911 1121.87L636.376 1123.23L643.92 1124.54L651.463 1125.84L658.951 1127.07L666.495 1128.37L674.039 1129.68L681.504 1131.04L689.047 1132.34L696.535 1133.57L697.896 1126.1L704.137 1121.7" stroke="#0B5C4D" stroke-width="0.6256" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.582 1035.59L549.126 1036.9L553.527 1043.14L557.927 1049.38L562.328 1055.62L566.729 1061.86L571.13 1068.11L575.53 1074.35L583.018 1075.57L578.673 1069.41" stroke="#0B5C4D" stroke-width="0.4013" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.176 1035.53L548.72 1036.83L554.961 1032.43L561.203 1028.03L567.444 1023.63L573.685 1019.23L579.926 1014.83L586.088 1010.48L592.33 1006.08L598.571 1001.68L604.812 997.281L611.053 992.88L617.295 988.48L618.599 980.936L624.841 976.535L631.082 972.134L637.323 967.734L643.564 963.333L644.869 955.789L646.095 948.301L647.455 940.836L648.76 933.293L650.064 925.749L651.369 918.205L652.674 910.661L653.955 903.252L655.259 895.709L656.564 888.165L657.869 880.621L659.173 873.078L665.415 868.677L671.656 864.276L677.897 859.875L685.362 861.236L691.603 856.835L697.844 852.434L704.086 848.033L710.327 843.632L716.568 839.232L722.809 834.831L729.051 830.43L735.292 826.029L741.533 821.629L747.774 817.228L754.016 812.827L760.257 808.426L766.498 804.025L772.739 799.625L778.981 795.224L785.222 790.823L791.384 786.478L797.625 782.077L803.867 777.676L805.171 770.133L811.412 765.732L817.654 761.331L823.895 756.93L830.136 752.53L836.377 748.129L842.619 743.728L848.86 739.327L855.101 734.926L861.342 730.526L867.584 726.125L873.825 721.724L880.066 717.323L886.228 712.978L892.47 708.577L898.711 704.177L900.016 696.633L901.376 689.168L902.681 681.624L903.985 674.081L905.29 666.537L906.515 659.049L907.82 651.505L909.18 644.041L910.485 636.497L911.79 628.953L913.015 621.465L914.32 613.921L915.68 606.457L916.985 598.913L918.29 591.369L919.594 583.826L920.82 576.338L922.124 568.794L923.485 561.329L924.789 553.785L931.031 549.385L937.272 544.984L943.513 540.583L949.754 536.182L955.996 531.782L962.237 527.381L968.399 523.036L969.704 515.492L971.008 507.948L972.313 500.405L973.618 492.861L979.859 488.46L986.1 484.059L992.341 479.658L998.583 475.258L1004.74 470.913L1010.99 466.512L1017.23 462.111L1023.47 457.71L1029.71 453.309L1035.95 448.909" stroke="#0B5C4D" stroke-width="0.4173" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.804 1039.31L534.5 1046.86L538.901 1053.1L543.301 1059.34L547.702 1065.58L552.103 1071.82L556.448 1077.98L560.849 1084.22L565.25 1090.47L569.65 1096.71L574.051 1102.95L578.452 1109.19L582.853 1115.43L587.253 1121.67L585.949 1129.22L584.723 1136.7L583.418 1144.25L582.058 1151.71L580.754 1159.26L579.449 1166.8L578.144 1174.34L576.919 1181.83L575.614 1189.37L574.254 1196.84L572.949 1204.38L571.644 1211.93L570.419 1219.42L569.114 1226.96L573.515 1233.2L581.003 1234.43L588.468 1235.79L587.242 1243.27L585.937 1250.82L579.696 1255.22L575.295 1248.98L570.895 1242.74L566.494 1236.49" stroke="#0B5C4D" stroke-width="0.4447" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.734 1039.72L534.429 1047.26L538.83 1053.5L543.231 1059.74L547.632 1065.99L552.032 1072.23L556.433 1078.47L560.834 1084.71L565.235 1090.95L569.636 1097.19L574.036 1103.43L578.437 1109.67L582.838 1115.92L587.239 1122.16L591.584 1128.32L595.985 1134.56L600.385 1140.8L604.786 1147.04L609.187 1153.28L613.588 1159.52L617.989 1165.77L622.389 1172.01L626.79 1178.25L631.191 1184.49L635.592 1190.73L639.992 1196.97L644.393 1203.21L648.794 1209.45L653.195 1215.7L657.596 1221.94L661.996 1228.18L666.397 1234.42L670.742 1240.58L675.143 1246.82L679.544 1253.06L678.239 1260.61L676.935 1268.15L675.63 1275.7L674.404 1283.18L673.044 1290.65L671.739 1298.19L670.435 1305.74L669.13 1313.28L667.825 1320.82L666.6 1328.31L665.239 1335.78L663.935 1343.32L662.63 1350.86L667.031 1357.1L671.432 1363.35L675.832 1369.59L680.233 1375.83L684.634 1382.07L689.035 1388.31L693.436 1394.55L697.836 1400.79L702.237 1407.03L706.638 1413.28L711.039 1419.52L715.384 1425.68L719.785 1431.92L724.185 1438.16L728.586 1444.4L732.987 1450.64L737.388 1456.89L736.083 1464.43L734.857 1471.92L733.553 1479.46L727.312 1483.86L721.07 1488.26L714.829 1492.66L708.588 1497.06L702.347 1501.47L696.105 1505.87L700.506 1512.11L704.907 1518.35L712.395 1519.57L719.939 1520.88L727.403 1522.24L734.947 1523.54L741.188 1519.14L747.43 1514.74L753.671 1510.34L759.912 1505.94L766.153 1501.54L772.395 1497.14L773.699 1489.6L775.004 1482.05L776.229 1474.56L777.59 1467.1L778.894 1459.55L780.199 1452.01L781.504 1444.47L782.808 1436.92L784.034 1429.44L779.633 1423.19L775.288 1417.03L770.887 1410.79" stroke="#0B5C4D" stroke-width="0.5287" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.637 1035.68L549.125 1036.9L553.525 1043.14L557.926 1049.39L562.327 1055.63L566.728 1061.87L574.272 1063.17L569.871 1056.93L565.47 1050.69L561.069 1044.45" stroke="#0B5C4D" stroke-width="1.2616" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.688 1039.99L534.383 1047.53L533.079 1055.07L531.774 1062.62L525.533 1067.02L519.371 1071.36L513.129 1075.77L506.888 1080.17L500.647 1084.57L494.406 1088.97L488.164 1093.37L481.923 1097.77L475.682 1102.17L469.441 1106.57L463.199 1110.97L461.839 1118.44L460.534 1125.98L459.309 1133.47L458.004 1141.01L456.7 1148.56L455.395 1156.1L454.035 1163.56L452.73 1171.11L451.504 1178.6L450.2 1186.14L448.895 1193.68L447.59 1201.23L446.23 1208.69L444.925 1216.24L443.7 1223.72L442.395 1231.27L446.796 1237.51L454.34 1238.81L461.749 1240.09L469.292 1241.4L476.836 1242.7L484.38 1244.01L479.979 1237.77L475.578 1231.53L471.178 1225.28L466.777 1219.04L462.376 1212.8L457.975 1206.56L453.574 1200.32" stroke="#0B5C4D" stroke-width="0.4575" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.731 1039.72L529.49 1044.12L523.249 1048.52L517.007 1052.92L510.766 1057.32L503.301 1055.96L495.758 1054.66L488.214 1053.35L480.726 1052.13L473.182 1050.82L465.639 1049.52L458.174 1048.16L450.63 1046.85L443.086 1045.55L435.598 1044.32L428.055 1043.02L420.59 1041.66L413.046 1040.35L408.645 1034.11L404.245 1027.87L399.844 1021.63L393.603 1026.03L387.361 1030.43L381.12 1034.83L374.879 1039.23L382.423 1040.54" stroke="#0B5C4D" stroke-width="0.6245" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.804 1039.31L534.5 1046.86L528.258 1051.26L522.017 1055.66L515.776 1060.06L509.534 1064.46L503.293 1068.86L497.052 1073.26L490.811 1077.66L484.57 1082.06L478.328 1086.47L472.087 1090.87L465.846 1095.27L459.684 1099.61L453.442 1104.01L447.201 1108.41L440.96 1112.81L434.719 1117.22L428.477 1121.62L420.934 1120.31" stroke="#0B5C4D" stroke-width="0.602" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.309 1035.55L548.773 1036.91L553.118 1043.07L557.519 1049.31L561.92 1055.55L566.321 1061.79L570.722 1068.04L575.122 1074.28L579.523 1080.52L583.924 1086.76L588.325 1093L592.725 1099.24L597.126 1105.48L601.527 1111.72L605.928 1117.97L607.232 1110.42L608.537 1102.88L616.081 1104.18L620.481 1110.42L619.177 1117.97L617.872 1125.51" stroke="#0B5C4D" stroke-width="0.6588" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.812 1039.66L534.452 1047.13L538.853 1053.37L543.253 1059.61L547.654 1065.85L552.055 1072.09L556.456 1078.33L560.857 1084.57L565.257 1090.82L569.658 1097.06L574.059 1103.3L578.46 1109.54L582.86 1115.78L587.261 1122.02L591.662 1128.26L596.063 1134.5L600.464 1140.75L604.809 1146.91L609.209 1153.15L613.61 1159.39L618.011 1165.63L622.412 1171.87L626.813 1178.11L631.213 1184.35L635.614 1190.6L640.015 1196.84L644.416 1203.08L648.816 1209.32L653.217 1215.56L657.618 1221.8L656.313 1229.35L650.072 1233.75L648.768 1241.29L647.407 1248.76L646.103 1256.3L644.877 1263.79L649.278 1270.03L653.679 1276.27L658.079 1282.51L662.48 1288.75L666.881 1294.99L665.576 1302.54L664.216 1310L662.911 1317.55L661.607 1325.09" stroke="#0B5C4D" stroke-width="0.8524" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.895 1038.78L534.67 1046.26L528.428 1050.66L522.187 1055.07L515.946 1059.47L509.705 1063.87L503.463 1068.27L497.222 1072.67L490.981 1077.07L484.74 1081.47L478.498 1085.87L472.257 1090.27L466.016 1094.67L459.775 1099.07L458.414 1106.54L457.189 1114.03L455.884 1121.57L449.643 1125.97L443.402 1130.37L437.16 1134.77L430.919 1139.17L424.678 1143.57L418.437 1147.97L412.195 1152.38L405.954 1156.78L404.649 1164.32L403.345 1171.86L402.063 1179.27L400.759 1186.82L399.454 1194.36L398.15 1201.9L396.845 1209.45L395.619 1216.94L394.259 1224.4L392.954 1231.94L386.713 1236.34L380.472 1240.75L374.231 1245.15L367.989 1249.55L361.748 1253.95L355.507 1258.35L349.266 1262.75L343.024 1267.15L336.783 1271.55L330.542 1275.95L324.301 1280.35L318.138 1284.7L311.897 1289.1L305.656 1293.5L299.415 1297.9L293.173 1302.3L286.932 1306.7L279.388 1305.4L271.9 1304.17L264.357 1302.87L256.892 1301.51L249.348 1300.2L243.107 1304.6L241.802 1312.15L235.561 1316.55L229.32 1320.95L223.079 1325.35L216.837 1329.75L210.596 1334.15L204.355 1338.55L198.114 1342.95L191.872 1347.35L185.631 1351.75L179.39 1356.15L173.228 1360.5L166.986 1364.9L160.745 1369.3L154.504 1373.7L148.263 1378.1L142.021 1382.5L135.78 1386.9L129.539 1391.3L123.298 1395.71L121.993 1403.25L120.688 1410.79L119.328 1418.26L118.102 1425.75L116.798 1433.29L115.493 1440.83L114.188 1448.38L112.828 1455.84L111.602 1463.33L110.298 1470.87L108.993 1478.42L107.689 1485.96L106.384 1493.5L105.024 1500.97L103.798 1508.46L102.493 1516L96.2521 1520.4L90.0108 1524.8L83.7696 1529.2L77.5283 1533.6L71.2871 1538L65.0459 1542.41L58.8046 1546.81L52.5634 1551.21L46.3221 1555.61L40.0809 1560.01L33.8396 1564.41L27.5984 1568.81L21.3571 1573.21L15.1159 1577.61L8.95363 1581.96L2.71239 1586.36" stroke="#0B5C4D" stroke-width="0.9223" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.826 1039.18L534.521 1046.72L538.922 1052.96L543.323 1059.21L547.723 1065.45L552.124 1071.69L556.525 1077.93L560.926 1084.17L565.327 1090.41L569.672 1096.57L574.072 1102.82L578.473 1109.06L582.874 1115.3L587.275 1121.54L591.676 1127.78L596.076 1134.02L600.477 1140.26L604.878 1146.5L609.279 1152.75L613.679 1158.99L618.08 1165.23L622.481 1171.47L626.882 1177.71L631.283 1183.95L635.683 1190.19L640.084 1196.43L644.485 1202.68L648.886 1208.92L656.374 1210.14L660.774 1216.38L659.47 1223.93L658.165 1231.47L656.861 1239.01L655.635 1246.5L654.275 1253.97L652.97 1261.51L651.665 1269.05L650.361 1276.6L649.135 1284.09L647.83 1291.63L646.47 1299.09L645.165 1306.64L643.861 1314.18L637.62 1318.58L631.378 1322.98L630.153 1330.47L628.848 1338.02L633.249 1344.26L637.65 1350.5L636.289 1357.96L634.985 1365.51L628.743 1369.91L622.502 1374.31L623.807 1366.76L625.167 1359.3L626.472 1351.76L627.697 1344.27" stroke="#0B5C4D" stroke-width="0.4969" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.825 1039.18L534.52 1046.72L538.921 1052.97L543.321 1059.21" stroke="#0B5C4D" stroke-width="0.45" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.501 1035.41L548.045 1036.71L554.286 1032.31L560.527 1027.91L566.768 1023.51L573.01 1019.11L579.251 1014.71L585.492 1010.31L591.733 1005.91L597.975 1001.51L604.216 997.106L610.457 992.706L616.619 988.36L622.86 983.96L629.102 979.559L635.343 975.158L641.584 970.757L647.825 966.357L654.067 961.956L660.308 957.555L666.549 953.154L672.79 948.753L679.032 944.353L685.273 939.952L691.514 935.551L697.755 931.15L705.299 932.455L712.764 933.815L720.308 935.12L726.549 930.719L732.79 926.318L739.031 921.918L745.273 917.517L751.514 913.116L757.755 908.715L763.996 904.314L770.238 899.914L776.479 895.513L782.72 891.112L788.961 886.711L795.203 882.311L796.428 874.822L792.027 868.581L787.627 862.34L788.931 854.796L784.531 848.555L780.13 842.314" stroke="#0B5C4D" stroke-width="0.6461" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.041 1035.51L548.506 1036.87L554.747 1032.46L560.988 1028.06L567.23 1023.66L573.471 1019.26L579.712 1014.86L585.953 1010.46L592.194 1006.06L598.436 1001.66L604.677 997.258L610.918 992.858L617.159 988.457L623.401 984.056L629.642 979.655L635.883 975.254L642.124 970.854L648.366 966.453L654.528 962.108L660.769 957.707L665.114 963.869L663.889 971.357L657.647 975.758L651.406 980.159L645.165 984.56L638.924 988.96L632.682 993.361L626.441 997.762L620.2 1002.16L613.959 1006.56L607.717 1010.96L601.476 1015.37L595.235 1019.77L587.691 1018.46L581.45 1022.86L575.209 1027.26L569.046 1031.61L562.805 1036.01L570.27 1037.37L576.511 1032.97L582.752 1028.57L588.994 1024.17" stroke="#0B5C4D" stroke-width="0.4064" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.895 1038.78L534.59 1046.32L528.349 1050.72L522.108 1055.12L515.867 1059.52L509.625 1063.92L503.384 1068.32L497.143 1072.72L490.902 1077.13L484.66 1081.53L478.498 1085.87L472.257 1090.27L466.016 1094.67L459.774 1099.07L453.533 1103.47L447.292 1107.87L441.051 1112.28L434.809 1116.68L433.505 1124.22L432.2 1131.76L430.84 1139.23L429.614 1146.72L428.309 1154.26L427.005 1161.8L425.7 1169.35L430.101 1175.59L434.502 1181.83L433.141 1189.3L431.837 1196.84" stroke="#0B5C4D" stroke-width="0.8975" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.898 1038.78L534.593 1046.32L528.352 1050.72L522.111 1055.12L515.869 1059.52L509.628 1063.92L503.387 1068.32L497.145 1072.72L490.904 1077.13L484.663 1081.53L478.422 1085.93L472.181 1090.33L465.939 1094.73L459.698 1099.13L453.457 1103.53L447.215 1107.93L441.053 1112.28L434.812 1116.68L428.571 1121.08L422.329 1125.48L416.088 1129.88L409.847 1134.28L403.606 1138.68L397.365 1143.08L391.123 1147.48L384.882 1151.88L378.641 1156.28L372.4 1160.68L366.158 1165.09L359.917 1169.49L353.676 1173.89L346.132 1172.58L339.97 1176.93L333.729 1181.33L327.487 1185.73L321.246 1190.13L315.005 1194.53L308.764 1198.93L302.522 1203.33L301.218 1210.88L299.913 1218.42L298.608 1225.96L297.383 1233.45L296.078 1240.99L294.718 1248.46L293.413 1256L292.109 1263.55L290.804 1271.09L289.578 1278.58L288.274 1286.12L286.913 1293.59L285.609 1301.13L279.367 1305.53L273.126 1309.93L271.822 1317.48L270.596 1324.96L269.291 1332.51L267.931 1339.97L266.626 1347.52L265.322 1355.06L264.017 1362.6L262.791 1370.09L261.487 1377.64L260.126 1385.1L258.822 1392.64L257.517 1400.19L256.292 1407.68L254.987 1415.22L253.682 1422.76L252.322 1430.23L251.017 1437.77L249.713 1445.32L248.487 1452.8L242.246 1457.2L236.005 1461.6L229.763 1466.01L223.522 1470.41L217.281 1474.81L209.737 1473.5L202.193 1472.2L197.793 1465.96L193.392 1459.72L188.991 1453.47L184.59 1447.23L180.189 1440.99L175.844 1434.83L171.444 1428.59L167.043 1422.35L162.642 1416.11L163.947 1408.56L165.251 1401.02L166.556 1393.47L167.782 1385.99L169.142 1378.52L170.447 1370.98L171.751 1363.43L167.35 1357.19L162.95 1350.95L158.549 1344.71L154.148 1338.47L149.747 1332.23L145.346 1325.99L140.946 1319.75L136.545 1313.5L132.144 1307.26L138.385 1302.86L145.929 1304.17L153.473 1305.47L160.938 1306.83L168.481 1308.14" stroke="#0B5C4D" stroke-width="0.7843" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.852 1039.04L534.547 1046.59L528.306 1050.99L522.064 1055.39L515.823 1059.79L509.582 1064.19L503.341 1068.59L497.099 1072.99L490.858 1077.39L484.617 1081.79L478.376 1086.19L472.134 1090.6L465.893 1095L459.731 1099.34L453.49 1103.74L452.185 1111.29L450.88 1118.83L449.576 1126.37L448.215 1133.84L446.911 1141.38L445.685 1148.87L444.381 1156.41L443.076 1163.96L441.771 1171.5L440.411 1178.97L439.185 1186.45L437.881 1194L431.639 1198.4L425.398 1202.8L419.157 1207.2L412.916 1211.6L406.674 1216L400.433 1220.4L399.129 1227.95" stroke="#0B5C4D" stroke-width="0.5542" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.771 1035.46L548.315 1036.76L552.716 1043L557.117 1049.24L561.518 1055.48L565.918 1061.73L570.319 1067.97L574.72 1074.21L579.121 1080.45L583.466 1086.61L587.867 1092.85L592.267 1099.09L596.668 1105.34L601.069 1111.58L605.47 1117.82L609.87 1124.06L614.271 1130.3L618.672 1136.54L623.073 1142.78L627.474 1149.02L631.874 1155.27L636.275 1161.51L640.676 1167.75L645.077 1173.99L649.477 1180.23L653.878 1186.47L658.279 1192.71L656.919 1200.18" stroke="#0B5C4D" stroke-width="0.6288" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.5 1035.41L548.044 1036.71L554.285 1032.31L560.448 1027.97L566.689 1023.57L572.93 1019.17L579.171 1014.77L585.413 1010.36L586.717 1002.82L582.316 996.58L583.621 989.036L584.926 981.492L586.23 973.949L587.512 966.54L588.816 958.996L590.121 951.452L591.426 943.908L592.73 936.365L594.012 928.956L595.316 921.412L596.621 913.868L597.926 906.325L599.23 898.781L605.471 894.38L611.713 889.979L617.954 885.579L624.195 881.178L630.436 876.777L636.599 872.432L642.84 868.031L649.081 863.63L655.322 859.23L661.564 854.829L667.805 850.428L674.046 846.027L680.287 841.626L686.529 837.226L687.833 829.682L689.194 822.217L684.793 815.976L680.392 809.735L675.991 803.494L671.59 797.252L667.19 791.011L662.789 784.77L658.388 778.528L653.987 772.287L649.587 766.046L645.186 759.805L640.785 753.564L636.384 747.322L631.983 741.081L627.583 734.84L628.943 727.375L630.169 719.887L631.473 712.343L632.778 704.8L634.083 697.256L635.387 689.712L636.669 682.303L637.973 674.759L639.278 667.216L640.582 659.672L646.824 655.271L653.065 650.87L659.306 646.47L665.547 642.069L671.789 637.668L673.014 630.18L674.319 622.636L675.679 615.172L676.984 607.628L672.583 601.387L673.888 593.843L680.129 589.442L686.37 585.041L690.771 591.283L695.172 597.524L699.573 603.765L703.973 610.006L708.374 616.248L712.775 622.489L717.176 628.73L721.577 634.971L725.977 641.213L724.617 648.677L723.312 656.221L722.008 663.765L720.703 671.309L719.477 678.797L718.173 686.34L716.812 693.805L715.508 701.349L714.203 708.892L712.899 716.436L711.673 723.924L710.313 731.389L709.008 738.933L707.703 746.476L706.399 754.02L700.157 758.421L693.916 762.822L687.675 767.222L681.513 771.567L680.208 779.111L678.903 786.655L677.543 794.12L676.238 801.663L683.782 802.968L691.326 804.273" stroke="#0B5C4D" stroke-width="0.9656" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.922 1038.64L540.323 1044.88L544.724 1051.12L549.125 1057.36L553.526 1063.61L557.926 1069.85L562.327 1076.09L566.728 1082.33L571.129 1088.57L575.529 1094.81L579.93 1101.05L584.331 1107.29L588.732 1113.54L593.133 1119.78L597.533 1126.02L601.934 1132.26L606.279 1138.42L610.68 1144.66L615.081 1150.9L619.482 1157.15L618.177 1164.69L616.872 1172.23L615.568 1179.78L614.263 1187.32L608.101 1191.67L601.86 1196.07L597.459 1189.82L598.684 1182.34L599.989 1174.79L601.294 1167.25" stroke="#0B5C4D" stroke-width="0.5042" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.874 1038.91L529.633 1043.31L523.392 1047.71L517.15 1052.11L510.909 1056.51L504.668 1060.91L498.506 1065.26L492.264 1069.66L486.023 1074.06L479.782 1078.46L473.541 1082.86L467.299 1087.26L461.058 1091.66L454.817 1096.06L448.576 1100.46L442.334 1104.87L436.093 1109.27L429.852 1113.67L423.611 1118.07L417.369 1122.47L411.128 1126.87L404.887 1131.27L398.646 1135.67L392.404 1140.07L386.242 1144.42L380.001 1148.82L373.76 1153.22L367.518 1157.62L366.214 1165.16L364.853 1172.63L363.549 1180.17L362.244 1187.72L366.645 1193.96L371.046 1200.2L375.447 1206.44L379.847 1212.68L384.248 1218.92L388.649 1225.16L387.423 1232.65" stroke="#0B5C4D" stroke-width="0.5911" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536 1038.58L534.64 1046.05L539.041 1052.29L543.442 1058.53L547.842 1064.77L552.243 1071.01L556.644 1077.26L561.045 1083.5L565.445 1089.74L569.846 1095.98L574.247 1102.22L578.648 1108.46L583.049 1114.7L587.449 1120.94L591.85 1127.19L596.251 1133.43L600.652 1139.67L604.997 1145.83L609.398 1152.07L613.798 1158.31L618.199 1164.55L622.6 1170.8L627.001 1177.04L631.402 1183.28L635.802 1189.52L640.203 1195.76L644.604 1202L649.005 1208.24L653.405 1214.48L657.806 1220.73L662.207 1226.97L669.751 1228.27L674.151 1234.51" stroke="#0B5C4D" stroke-width="0.4073" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.825 1035.54L548.313 1036.76L552.714 1043L557.115 1049.24L561.516 1055.48L565.917 1061.73L570.317 1067.97L574.718 1074.21L579.119 1080.45L583.52 1086.69L587.92 1092.93L595.464 1094.24L603.008 1095.54L610.496 1096.77L618.04 1098.07L625.504 1099.43L633.048 1100.74L640.592 1102.04L644.993 1108.28L649.393 1114.52L653.794 1120.76L658.139 1126.93L662.54 1133.17L666.941 1139.41L671.342 1145.65L675.742 1151.89L680.143 1158.13L684.544 1164.37L683.239 1171.92L681.935 1179.46L680.709 1186.95L679.349 1194.41L678.044 1201.96L676.739 1209.5L681.14 1215.74L685.541 1221.98L693.085 1223.29L699.326 1218.89L705.567 1214.49L711.808 1210.09L718.05 1205.69L724.291 1201.29L730.532 1196.88L734.933 1203.13L739.334 1209.37L743.734 1215.61L748.135 1221.85L752.536 1228.09L751.176 1235.56L755.576 1241.8L759.977 1248.04L764.378 1254.28L763.073 1261.82L761.769 1269.37L760.464 1276.91L759.159 1284.45L757.878 1291.86L762.279 1298.1L766.68 1304.35L771.08 1310.59L775.481 1316.83L779.882 1323.07L784.283 1329.31L776.739 1328.01L769.195 1326.7L761.707 1325.48L754.164 1324.17L746.699 1322.81L739.155 1321.51L740.46 1313.96L741.685 1306.47L743.046 1299.01L744.351 1291.47L739.95 1285.22L735.549 1278.98L731.148 1272.74L726.747 1266.5L722.347 1260.26L728.588 1255.86L734.829 1251.46L741.07 1247.06L747.312 1242.66" stroke="#0B5C4D" stroke-width="0.5887" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.907 1035.48L545.307 1041.72L544.003 1049.26" stroke="#0B5C4D" stroke-width="0.4639" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.369 1035.39L547.913 1036.69L552.314 1042.93L556.714 1049.17L561.115 1055.41L565.516 1061.66L569.917 1067.9L574.318 1074.14L578.718 1080.38L583.063 1086.54L587.464 1092.78L591.865 1099.02L596.266 1105.27L600.667 1111.51L605.067 1117.75L609.468 1123.99L613.869 1130.23L618.27 1136.47L622.67 1142.71L627.071 1148.95L631.472 1155.2L635.873 1161.44L640.274 1167.68L644.674 1173.92L649.075 1180.16L653.476 1186.4L657.877 1192.64L662.277 1198.88L666.678 1205.13L665.318 1212.59" stroke="#0B5C4D" stroke-width="0.5947" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.965 1038.37L534.66 1045.91L539.061 1052.16L543.462 1058.4L547.862 1064.64L552.263 1070.88L556.608 1077.04L561.009 1083.28L565.41 1089.52L569.811 1095.77L574.212 1102.01L578.612 1108.25L572.371 1112.65L566.13 1117.05L559.889 1121.45L553.726 1125.8L552.422 1133.34" stroke="#0B5C4D" stroke-width="0.6798" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.014 1038.1L540.414 1044.34L544.815 1050.58L549.216 1056.82L553.617 1063.07L558.018 1069.31L562.363 1075.47L566.763 1081.71L571.164 1087.95L575.565 1094.19L579.966 1100.43L587.509 1101.74" stroke="#0B5C4D" stroke-width="0.5158" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.012 1038.1L534.708 1045.64L528.467 1050.04L522.225 1054.45L515.984 1058.85L509.743 1063.25L503.502 1067.65L497.26 1072.05L491.098 1076.39L484.857 1080.79L478.616 1085.2L472.374 1089.6L466.133 1094L459.892 1098.4L453.651 1102.8L447.409 1107.2L446.105 1114.74L444.8 1122.29L438.559 1126.69L432.318 1131.09" stroke="#0B5C4D" stroke-width="0.3824" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.152 1035.42L547.64 1036.64L553.882 1032.24L560.123 1027.84L566.364 1023.44L572.605 1019.04L578.847 1014.64L585.088 1010.24L591.329 1005.84L597.57 1001.44L603.812 997.038" stroke="#0B5C4D" stroke-width="0.4889" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.828 1035.29L547.372 1036.6L551.773 1042.84L556.173 1049.08L560.574 1055.32L564.975 1061.56L569.376 1067.8L573.777 1074.05L578.177 1080.29L582.578 1086.53L586.979 1092.77L591.38 1099.01L595.781 1105.25L600.126 1111.41L604.526 1117.66L608.927 1123.9L613.328 1130.14L617.729 1136.38L622.129 1142.62L626.53 1148.86L630.931 1155.1L635.332 1161.34L634.027 1168.89" stroke="#0B5C4D" stroke-width="0.3984" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.23 1035.36L547.774 1036.67L552.175 1042.91L556.576 1049.15L560.977 1055.39L565.377 1061.63L569.778 1067.88L574.179 1074.12L578.58 1080.36L582.98 1086.6L587.381 1092.84L591.782 1099.08L596.183 1105.32L600.584 1111.56L604.929 1117.73L609.329 1123.97L613.73 1130.21L618.131 1136.45L622.532 1142.69L626.933 1148.93L631.333 1155.17L635.734 1161.41L640.135 1167.66L644.536 1173.9L648.936 1180.14L653.337 1186.38L660.881 1187.68L667.122 1183.28L673.363 1178.88L668.963 1172.64L664.562 1166.4L657.018 1165.1L649.475 1163.79L641.931 1162.49" stroke="#0B5C4D" stroke-width="0.411" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.944 1038.51L534.64 1046.05L528.477 1050.4L527.117 1057.86" stroke="#0B5C4D" stroke-width="0.5903" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.035 1037.97L534.73 1045.51L539.131 1051.75L543.532 1057.99L547.933 1064.24L552.333 1070.48L556.734 1076.72L561.135 1082.96L565.48 1089.12L569.881 1095.36L574.282 1101.6L578.682 1107.85L583.083 1114.09L587.484 1120.33L591.885 1126.57L596.286 1132.81L600.686 1139.05L599.382 1146.6L598.156 1154.08L596.796 1161.55L595.491 1169.09L594.186 1176.64L592.882 1184.18L591.577 1191.72L595.978 1197.96L603.522 1199.27L602.161 1206.73L600.936 1214.22L599.631 1221.76" stroke="#0B5C4D" stroke-width="0.6864" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.037 1037.97L534.733 1045.51L539.134 1051.75L543.534 1057.99L547.879 1064.16L552.28 1070.4L556.681 1076.64L561.082 1082.88L565.483 1089.12L569.883 1095.36L574.284 1101.6L578.685 1107.84" stroke="#0B5C4D" stroke-width="0.689" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.368 1035.39L547.911 1036.69L554.074 1032.35L560.315 1027.94L566.556 1023.54L572.797 1019.14L579.039 1014.74L585.28 1010.34L591.521 1005.94L597.762 1001.54L604.004 997.139L610.245 992.739L616.486 988.338L622.727 983.937L624.032 976.393L619.631 970.152L615.23 963.911L610.83 957.67L606.429 951.428L602.028 945.187L597.627 938.946" stroke="#0B5C4D" stroke-width="0.4604" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.235 1035.36L547.778 1036.67L554.02 1032.27L560.261 1027.87L566.502 1023.47L572.743 1019.07L578.985 1014.66L585.226 1010.26L591.467 1005.86L597.708 1001.46L599.013 993.918L594.668 987.756L590.267 981.515L596.508 977.114L602.67 972.769L608.912 968.368L615.153 963.967L622.641 965.193L630.185 966.498L636.426 962.097L637.731 954.553L639.091 947.088L640.317 939.6L641.621 932.057L642.926 924.513L644.23 916.969L645.535 909.426L646.895 901.961L648.121 894.473L649.426 886.929L650.73 879.385L652.035 871.842L645.794 876.243L639.552 880.643L633.311 885.044L627.07 889.445L620.829 893.846L614.587 898.246L613.283 905.79L612.057 913.278L610.753 920.822L609.448 928.366L608.088 935.83L606.783 943.374L611.184 949.615L615.585 955.857L623.128 957.161L624.433 949.617L625.738 942.074L627.098 934.609L628.324 927.121L629.628 919.577L630.933 912.034L632.237 904.49L633.542 896.946L629.141 890.705L624.796 884.543L618.555 888.943L612.314 893.344L606.072 897.745L599.831 902.146" stroke="#0B5C4D" stroke-width="0.6504" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.037 1037.97L534.732 1045.51L528.491 1049.91L522.25 1054.31L516.009 1058.71L509.767 1063.11L503.526 1067.51L497.285 1071.91L491.044 1076.32L484.881 1080.66L478.64 1085.06L472.399 1089.46L466.158 1093.86L459.916 1098.26L453.675 1102.66L447.434 1107.07L441.193 1111.47L434.951 1115.87L433.647 1123.41L432.342 1130.95L426.101 1135.36L419.86 1139.76L413.618 1144.16L407.377 1148.56L401.215 1152.9L394.974 1157.3L388.732 1161.7L382.491 1166.1L376.25 1170.51L370.009 1174.91L363.768 1179.31L357.526 1183.71L356.166 1191.17L354.861 1198.72L353.557 1206.26L352.331 1213.75L351.026 1221.29L349.722 1228.84L348.361 1236.3L347.057 1243.84L345.831 1251.33L344.527 1258.88L343.222 1266.42L341.862 1273.88L340.557 1281.43L339.252 1288.97L338.027 1296.46L342.427 1302.7L346.828 1308.94L351.229 1315.18L349.924 1322.73L343.683 1327.13L337.442 1331.53L331.201 1335.93L324.959 1340.33L318.718 1344.73L312.477 1349.13L306.236 1353.53L299.994 1357.93L293.753 1362.33L287.512 1366.73L281.271 1371.14L275.029 1375.54L268.788 1379.94L262.626 1384.28L261.266 1391.75L259.961 1399.29L258.656 1406.83L264.898 1402.43L271.139 1398.03L277.38 1393.63L284.924 1394.94L292.468 1396.24L299.932 1397.6L301.237 1390.06L302.541 1382.51L303.846 1374.97L305.151 1367.43L306.376 1359.94L312.618 1355.54L318.859 1351.14L325.1 1346.74L331.341 1342.34L337.583 1337.93L336.278 1345.48L335.052 1352.97L333.748 1360.51L332.443 1368.05L326.202 1372.45L319.961 1376.86L313.719 1381.26L307.478 1385.66" stroke="#0B5C4D" stroke-width="0.6426" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.967 1038.37L534.741 1045.86L539.086 1052.02L543.487 1058.26L547.888 1064.5L552.289 1070.74L556.689 1076.99L561.09 1083.23L565.491 1089.47L569.892 1095.71L574.293 1101.95L578.693 1108.19L583.094 1114.43L587.495 1120.67L591.896 1126.92L596.297 1133.16L600.697 1139.4L605.098 1145.64L609.499 1151.88L613.9 1158.12L618.3 1164.36L622.645 1170.53L627.046 1176.77L631.447 1183.01L635.848 1189.25L640.249 1195.49L644.649 1201.73L649.05 1207.97L653.451 1214.21L657.852 1220.46L662.253 1226.7L660.948 1234.24L659.643 1241.78L658.283 1249.25L656.978 1256.79L655.674 1264.34L654.448 1271.82L653.143 1279.37L651.839 1286.91L650.478 1294.38L649.174 1301.92L647.869 1309.46L646.644 1316.95L645.339 1324.5L644.034 1332.04L642.674 1339.5L641.369 1347.05L640.144 1354.54L638.839 1362.08L637.534 1369.62L631.293 1374.02L625.052 1378.43L623.692 1385.89L622.387 1393.43L621.082 1400.98L619.857 1408.47L624.257 1414.71L628.658 1420.95L633.059 1427.19L637.46 1433.43L641.861 1439.67L646.261 1445.91L650.662 1452.15L655.007 1458.32L659.408 1464.56L663.809 1470.8L668.21 1477.04L672.61 1483.28L677.011 1489.52L681.412 1495.76L685.813 1502L690.213 1508.25L694.614 1514.49L699.015 1520.73L706.48 1522.09L714.023 1523.39L721.511 1524.62L729.055 1525.92L736.599 1527.23L744.143 1528.53L751.607 1529.89L759.151 1531.2L766.639 1532.42L774.183 1533.73L781.726 1535.03L789.27 1536.34L796.735 1537.7L804.223 1538.92L811.767 1540.23L819.31 1541.53L826.854 1542.84L831.255 1549.08L835.656 1555.32L840.056 1561.56L844.457 1567.8L848.858 1574.04L847.553 1581.59L846.193 1589.05L844.888 1596.6L843.584 1604.14L842.358 1611.63L841.053 1619.17L839.693 1626.64L838.389 1634.18L842.789 1640.42L847.19 1646.66L851.591 1652.9L855.992 1659.14L860.392 1665.39L864.793 1671.63" stroke="#0B5C4D" stroke-width="0.7845" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.966 1035.32L547.509 1036.62L553.751 1032.22L559.913 1027.87L566.154 1023.47L572.395 1019.07L578.637 1014.67L584.878 1010.27L591.119 1005.87L597.36 1001.47L603.602 997.069L609.843 992.668L616.084 988.268L622.325 983.867L628.567 979.466L634.808 975.065L641.049 970.664L647.29 966.264L653.532 961.863L659.773 957.462L666.014 953.061L672.255 948.661L678.417 944.316L684.659 939.915L690.9 935.514L697.141 931.113L703.382 926.712L709.624 922.312L715.865 917.911L722.106 913.51L723.411 905.966L724.715 898.423L730.957 894.022L737.198 889.621L743.439 885.22L749.68 880.819L755.843 876.474L762.084 872.074L768.325 867.673L774.566 863.272L780.808 858.871L787.049 854.47L793.29 850.07L799.532 845.669L805.773 841.268L813.316 842.573L820.86 843.877L828.404 845.182L835.813 846.463L843.357 847.768L850.9 849.073L858.444 850.377L865.988 851.682L873.397 852.963L880.94 854.268L888.484 855.573L896.028 856.877L903.572 858.182L911.115 859.486L917.357 855.086L923.519 850.741L929.76 846.34L936.001 841.939L942.243 837.538L948.484 833.137L954.725 828.737L960.966 824.336L967.208 819.935L973.449 815.534L979.69 811.134L985.931 806.733L992.173 802.332L998.414 797.931L1004.66 793.53L1010.9 789.13L1012.2 781.586L1013.43 774.098L1014.73 766.554L1016.04 759.01L1017.34 751.467L1018.7 744.002L1020.01 736.458L1021.23 728.97L1022.54 721.427L1023.84 713.883L1025.2 706.418L1026.51 698.874L1027.73 691.386L1029.04 683.843L1030.34 676.299L1031.64 668.755L1033.01 661.291L1034.31 653.747L1029.91 647.506L1025.51 641.264L1021.11 635.023L1016.71 628.782L1012.31 622.541L1007.91 616.299L1003.5 610.058L999.104 603.817L994.703 597.576L990.302 591.334L985.901 585.093L981.5 578.852L977.1 572.611L972.755 566.448L968.354 560.207L969.579 552.719L970.884 545.175" stroke="#0B5C4D" stroke-width="0.9618" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.012 1038.1L534.731 1045.51L528.489 1049.91L522.248 1054.31L516.007 1058.71L509.766 1063.11L503.524 1067.51L497.283 1071.91L491.042 1076.32L484.801 1080.72L478.559 1085.12L472.318 1089.52L466.077 1093.92L459.836 1098.32L453.594 1102.72L447.353 1107.12L441.112 1111.52L434.871 1115.92L428.708 1120.27L422.467 1124.67L416.226 1129.07L409.985 1133.47L403.743 1137.87L397.502 1142.27L391.261 1146.67L385.02 1151.07L378.778 1155.47L372.537 1159.87L366.296 1164.28L360.055 1168.68L353.813 1173.08L347.572 1177.48L341.331 1181.88L335.09 1186.28L328.848 1190.68L322.607 1195.08L316.366 1199.48L310.204 1203.83L302.716 1202.6L295.172 1201.3L287.628 1199.99L280.085 1198.69L272.541 1197.38L265.076 1196.02L257.588 1194.8L250.044 1193.49L242.501 1192.19L234.957 1190.88L227.413 1189.58L220.004 1188.3L213.763 1192.7L207.522 1197.1L201.281 1201.5L195.039 1205.9L188.798 1210.3L182.557 1214.7L176.316 1219.1L170.074 1223.5L163.833 1227.9L157.592 1232.3L151.351 1236.71L145.109 1241.11L138.868 1245.51L132.627 1249.91L126.386 1254.31L120.223 1258.65L113.982 1263.05L106.438 1261.75L98.8946 1260.45L91.3509 1259.14L83.8072 1257.84L76.2635 1256.53L68.8545 1255.25L61.3107 1253.95L53.767 1252.64L46.2233 1251.34L38.6796 1250.03L31.2149 1248.67L23.7269 1247.45L16.1831 1246.14L9.94188 1250.54L3.70063 1254.94L-2.54061 1259.34L-3.84523 1266.89L-5.20557 1274.35L-6.43122 1281.84L-7.73583 1289.38L-9.04046 1296.93L-10.3451 1304.47L-11.6497 1312.01L-13.0101 1319.48L-14.2357 1326.97L-15.5403 1334.51L-16.845 1342.05L-18.1496 1349.6L-19.4542 1357.14L-20.8146 1364.61L-22.0402 1372.09L-23.3448 1379.64L-29.5861 1384.04L-35.8273 1388.44L-42.0686 1392.84L-48.3098 1397.24L-54.5511 1401.64L-60.7923 1406.04L-67.0336 1410.44L-73.2748 1414.84L-79.5161 1419.25L-85.7573 1423.65L-91.9986 1428.05" stroke="#0B5C4D" stroke-width="0.9839" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.23 1035.36L547.774 1036.67L554.015 1032.27" stroke="#0B5C4D" stroke-width="0.7225" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.942 1038.51L534.637 1046.05L539.038 1052.29L543.439 1058.53L547.84 1064.77L552.24 1071.02L556.641 1077.26L560.986 1083.42L565.387 1089.66L569.788 1095.9L574.189 1102.14L578.589 1108.38L577.285 1115.93L576.059 1123.42L580.46 1129.66L584.861 1135.9L589.261 1142.14L593.662 1148.38L598.063 1154.62L602.464 1160.86L606.865 1167.1L611.21 1173.27L615.61 1179.51L620.011 1185.75L624.412 1191.99L628.813 1198.23L633.214 1204.47L637.614 1210.71L642.015 1216.96L640.71 1224.5L639.406 1232.04L638.101 1239.59L636.741 1247.05L635.436 1254.6L634.211 1262.08L632.906 1269.63L631.601 1277.17L630.241 1284.64L628.936 1292.18L627.711 1299.67L626.406 1307.21L625.101 1314.75L623.797 1322.3L622.436 1329.76L621.132 1337.31L619.906 1344.79L613.665 1349.2L607.424 1353.6L606.119 1361.14L604.814 1368.68L603.51 1376.23L602.149 1383.69L600.924 1391.18L605.325 1397.42L609.725 1403.66" stroke="#0B5C4D" stroke-width="1.0402" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.427 1035.22L546.971 1036.53L553.212 1032.13L559.374 1027.78L565.615 1023.38L571.857 1018.98L578.098 1014.58L584.339 1010.18L590.58 1005.78L596.822 1001.38L603.063 996.975L609.304 992.575L615.545 988.174L621.787 983.773L623.091 976.229L624.396 968.685L625.622 961.197L626.926 953.654L628.287 946.189L629.591 938.645L630.896 931.102L632.2 923.558L633.426 916.07L634.731 908.526L636.091 901.062L637.396 893.518L632.995 887.277L628.594 881.035L634.835 876.634L641.077 872.234L647.318 867.833L653.559 863.432L659.8 859.031L665.963 854.686L672.204 850.285L678.445 845.885L684.686 841.484L690.928 837.083L697.169 832.682L704.713 833.987L698.471 838.388L692.23 842.789L685.989 847.189L679.748 851.59L673.506 855.991L667.265 860.392L661.024 864.792L654.862 869.138" stroke="#0B5C4D" stroke-width="0.4635" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.107 1037.56L534.826 1044.97L539.227 1051.21L543.627 1057.45L548.028 1063.7L552.429 1069.94L556.83 1076.18L561.23 1082.42L565.631 1088.66L570.032 1094.9L574.433 1101.14L578.834 1107.38L583.234 1113.63L587.635 1119.87L592.036 1126.11L590.731 1133.65L589.371 1141.12L593.772 1147.36L598.173 1153.6L602.573 1159.84L606.974 1166.08L611.375 1172.32L615.776 1178.56L620.176 1184.8L624.577 1191.05L628.978 1197.29L633.379 1203.53L637.78 1209.77L642.18 1216.01L646.581 1222.25L645.221 1229.72L643.916 1237.26L642.612 1244.8L641.386 1252.29L640.081 1259.84L638.777 1267.38L637.416 1274.84L636.112 1282.39L634.886 1289.88L633.581 1297.42L632.277 1304.96L630.972 1312.51L629.612 1319.97L628.307 1327.52L627.082 1335L625.777 1342.55L624.472 1350.09L623.168 1357.64L621.807 1365.1L620.503 1372.64L619.277 1380.13L617.972 1387.68L616.668 1395.22L615.307 1402.68L614.003 1410.23L618.404 1416.47L622.804 1422.71L627.205 1428.95L631.606 1435.19L636.007 1441.43L640.407 1447.67L644.808 1453.92L649.209 1460.16L653.61 1466.4L658.011 1472.64L662.411 1478.88L666.812 1485.12L671.213 1491.36L675.614 1497.61L679.959 1503.77L684.36 1510.01L688.76 1516.25L693.161 1522.49L697.562 1528.73L696.336 1536.22L695.032 1543.76L693.727 1551.31L692.422 1558.85L691.062 1566.32L689.757 1573.86L688.532 1581.35L687.227 1588.89L685.923 1596.44L684.618 1603.98L678.377 1608.38L672.135 1612.78L665.894 1617.18L659.653 1621.58L653.412 1625.98L647.17 1630.38L641.008 1634.73L634.767 1639.13L628.526 1643.53L627.165 1651L625.861 1658.54L624.556 1666.08L623.251 1673.63L627.652 1679.87L632.053 1686.11L636.454 1692.35L640.855 1698.59L645.255 1704.83L649.6 1710.99L654.001 1717.24L658.402 1723.48L662.803 1729.72L661.498 1737.26L655.336 1741.61L649.095 1746.01L642.853 1750.41" stroke="#0B5C4D" stroke-width="0.373" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.199 1037.03L529.957 1041.43L523.716 1045.83L517.475 1050.23L511.234 1054.63L504.992 1059.03L498.751 1063.43L492.51 1067.83L486.269 1072.23L480.027 1076.63L473.786 1081.03L467.545 1085.43L461.383 1089.78L455.142 1094.18L448.9 1098.58L442.659 1102.98L436.418 1107.38L430.177 1111.78L423.935 1116.18L416.392 1114.88L408.904 1113.65L401.36 1112.35L393.895 1110.99L386.351 1109.68L378.808 1108.38L371.264 1107.07L363.776 1105.85L357.535 1110.25L351.293 1114.65L345.052 1119.05L338.811 1123.45L332.57 1127.85L326.407 1132.2L320.166 1136.6L313.925 1141L307.684 1145.4L301.443 1149.8L300.082 1157.27L293.841 1161.67L289.44 1155.43L285.095 1149.26L280.694 1143.02L273.151 1141.72L265.607 1140.41L261.206 1134.17L256.805 1127.93L249.341 1126.57L243.099 1130.97L236.858 1135.37L230.617 1139.77L224.376 1144.17L218.134 1148.57L211.893 1152.97L204.349 1151.67L196.861 1150.44L201.262 1156.69" stroke="#0B5C4D" stroke-width="0.5065" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.292 1035.2L546.757 1036.56L552.998 1032.16L559.239 1027.76L565.48 1023.36L571.722 1018.96L577.963 1014.56L584.204 1010.16L585.509 1002.61L586.813 995.068L588.118 987.524L589.344 980.036L590.704 972.571L592.008 965.027L593.313 957.484L594.618 949.94L595.922 942.396L597.148 934.908L598.508 927.444L599.813 919.9L601.118 912.356L596.717 906.115L592.316 899.874L587.915 893.632L583.515 887.391L575.971 886.086L582.212 881.686" stroke="#0B5C4D" stroke-width="0.4657" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.02 1035.15L545.261 1030.75L551.503 1026.35L557.744 1021.95L563.985 1017.55L570.226 1013.15L576.389 1008.8L582.63 1004.4L588.871 1000L595.112 995.602L601.354 991.201L607.595 986.8L613.836 982.4L620.077 977.999L626.318 973.598L632.56 969.197L638.801 964.797L640.106 957.253L641.41 949.709L642.636 942.221L643.996 934.756L645.301 927.213L646.606 919.669L647.91 912.125L649.215 904.581L650.496 897.172L651.801 889.629L653.105 882.085L654.41 874.541L660.651 870.141L666.892 865.74L673.134 861.339L679.375 856.938L685.616 852.537L691.858 848.137L698.02 843.792L704.261 839.391L710.502 834.99L716.744 830.589L722.985 826.188L729.226 821.788L735.467 817.387L736.772 809.843L738.076 802.299L739.437 794.835L740.662 787.347L741.967 779.803L743.272 772.259L744.576 764.716L745.881 757.172L747.241 749.707L748.467 742.219L749.772 734.675L751.076 727.132L752.381 719.588L753.741 712.123L754.967 704.635L756.271 697.091L757.576 689.548L758.881 682.004L760.185 674.46L755.785 668.219L751.439 662.057L747.039 655.816L742.638 649.574L738.237 643.333L733.836 637.092L729.436 630.851L725.035 624.609L720.634 618.368L716.233 612.127L711.832 605.886L707.432 599.644L703.031 593.403L698.63 587.162L694.229 580.921L692.925 588.464L688.524 582.223" stroke="#0B5C4D" stroke-width="0.5466" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.941 1035.21L546.429 1036.44L552.671 1032.03L558.912 1027.63L565.153 1023.23L571.394 1018.83L577.636 1014.43L583.877 1010.03L590.118 1005.63L596.359 1001.23L602.601 996.829L608.842 992.428L615.083 988.027L621.324 983.626L627.566 979.226L633.728 974.88L639.969 970.48L646.21 966.079L652.452 961.678L658.693 957.277L664.934 952.877L671.175 948.476L678.719 949.78L686.263 951.085L693.807 952.39L698.207 958.631L702.608 964.872L707.009 971.113" stroke="#0B5C4D" stroke-width="0.9973" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.129 1037.43L534.825 1044.97L539.225 1051.21L543.626 1057.45L548.027 1063.7L552.428 1069.94L556.829 1076.18L561.229 1082.42L565.63 1088.66" stroke="#0B5C4D" stroke-width="0.3577" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.02 1035.15L546.563 1036.46" stroke="#0B5C4D" stroke-width="0.8106" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.129 1037.43L534.825 1044.97L539.225 1051.21L543.571 1057.37L547.971 1063.62L552.372 1069.86L556.773 1076.1L561.174 1082.34L565.574 1088.58L569.975 1094.82L574.376 1101.06L578.777 1107.3L583.178 1113.55L587.578 1119.79L591.979 1126.03L596.38 1132.27L600.781 1138.51L594.619 1142.86" stroke="#0B5C4D" stroke-width="0.6729" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.129 1037.43L534.825 1044.97L539.225 1051.21L543.626 1057.45L548.027 1063.7L552.428 1069.94L556.829 1076.18L561.229 1082.42L565.63 1088.66L570.031 1094.9" stroke="#0B5C4D" stroke-width="0.5685" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.94 1035.21L546.428 1036.44L552.67 1032.04L558.911 1027.64L565.152 1023.23L571.393 1018.83L577.635 1014.43L583.876 1010.03L590.117 1005.63L596.358 1001.23L602.6 996.83L608.841 992.429L615.082 988.028L621.323 983.627L627.565 979.226L633.806 974.826L639.968 970.481L646.209 966.08L652.451 961.679L658.692 957.278L664.933 952.877L671.174 948.477L672.535 941.012L673.839 933.468L675.144 925.924L676.449 918.381L677.674 910.893L679.035 903.428" stroke="#0B5C4D" stroke-width="0.7644" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.106 1037.56L534.801 1045.11L539.202 1051.35L537.897 1058.89L542.242 1065.05L546.643 1071.29L551.044 1077.54L555.445 1083.78L559.845 1090.02L564.246 1096.26L568.647 1102.5L573.048 1108.74L571.822 1116.23L570.518 1123.77L569.213 1131.32L567.852 1138.78L561.611 1143.18L566.012 1149.42L570.413 1155.66L574.814 1161.91" stroke="#0B5C4D" stroke-width="0.9713" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.082 1037.7L534.778 1045.24L539.179 1051.48L543.579 1057.72L547.98 1063.97L552.381 1070.21L556.782 1076.45L561.182 1082.69L565.583 1088.93L569.984 1095.17L574.385 1101.41L578.786 1107.65" stroke="#0B5C4D" stroke-width="0.645" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.199 1037.03L529.957 1041.43L523.716 1045.83L517.475 1050.23L511.234 1054.63L504.993 1059.03L498.751 1063.43L491.208 1062.13L483.799 1060.84L476.255 1059.54L468.711 1058.23L461.167 1056.93L453.624 1055.63L446.08 1054.32L438.671 1053.04L431.127 1051.73L423.584 1050.43L416.04 1049.13L408.496 1047.82L401.031 1046.46L393.543 1045.23L386 1043.93L378.456 1042.63L372.215 1047.03L365.973 1051.43L359.732 1055.83L353.491 1060.23L347.25 1064.63L345.945 1072.17L339.783 1076.52L333.542 1080.92L327.3 1085.32L321.059 1089.72L314.818 1094.12L308.577 1098.52L302.335 1102.92L296.094 1107.32L289.853 1111.72L283.612 1116.13L282.307 1123.67L280.947 1131.13L279.721 1138.62L273.48 1143.02L267.239 1147.42L260.997 1151.82L254.756 1156.22L248.515 1160.63L242.273 1165.03L234.73 1163.72L227.242 1162.5L219.698 1161.19L212.233 1159.83L204.69 1158.53L197.146 1157.22L189.602 1155.92L182.114 1154.69L174.57 1153.39L167.106 1152.03L159.562 1150.72L152.018 1149.42L144.53 1148.19L136.987 1146.89L129.522 1145.53L121.978 1144.22L114.434 1142.92L106.891 1141.61L102.49 1135.37L98.1449 1129.21L93.7441 1122.97L89.3433 1116.73L84.9425 1110.49L80.5417 1104.24L76.1409 1098L71.7402 1091.76L67.3394 1085.52L62.9386 1079.28L58.5378 1073.04L50.9941 1071.73" stroke="#0B5C4D" stroke-width="0.5128" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.107 1037.56L534.826 1044.97" stroke="#0B5C4D" stroke-width="0.4301" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.152 1035.18L546.696 1036.48L552.937 1032.08L559.179 1027.68L565.42 1023.28L571.661 1018.88L577.902 1014.48L584.144 1010.08L590.385 1005.68L596.626 1001.28L602.867 996.874L609.03 992.529L615.271 988.129L621.512 983.728L627.753 979.327L633.995 974.926L640.236 970.525L646.477 966.125L652.718 961.724L658.96 957.323L665.201 952.922L671.442 948.522L677.683 944.121L683.925 939.72L691.468 941.025L699.012 942.329L706.477 943.69L713.965 944.915L721.508 946.22L729.052 947.524L736.596 948.829L744.061 950.189L751.604 951.494L759.092 952.72L766.636 954.024L774.18 955.329" stroke="#0B5C4D" stroke-width="0.358" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.426 1035.22L546.969 1036.53L551.37 1042.77L555.771 1049.01L560.172 1055.25L564.573 1061.49L568.973 1067.73L573.374 1073.97L577.775 1080.22L582.176 1086.46L586.577 1092.7L590.922 1098.86L595.322 1105.1L599.723 1111.34L604.124 1117.58L608.525 1123.82L612.926 1130.07L617.326 1136.31L621.727 1142.55L626.128 1148.79L630.529 1155.03L634.929 1161.27L639.33 1167.51L643.731 1173.75L648.132 1180L652.533 1186.24L651.228 1193.78" stroke="#0B5C4D" stroke-width="0.9262" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.75 1035.1L546.294 1036.41L552.535 1032.01L558.698 1027.66L564.939 1023.26L571.18 1018.86L577.421 1014.46L583.663 1010.06L589.904 1005.66L596.145 1001.26L602.386 996.858L608.628 992.457L614.869 988.056L621.11 983.656L627.351 979.255L633.593 974.854L639.834 970.453L646.075 966.053L652.316 961.652L658.558 957.251L664.799 952.85L670.961 948.505L677.202 944.104L683.444 939.704L684.748 932.16L686.053 924.616L687.357 917.072L688.662 909.529L690.022 902.064L691.248 894.576L692.553 887.032L693.857 879.489L695.162 871.945L696.467 864.401L697.748 856.992L699.053 849.448L705.294 845.048L712.838 846.352L720.326 847.578L727.869 848.882L735.413 850.187L742.878 851.547L750.421 852.852L757.965 854.157L765.453 855.382L769.854 861.624L763.613 866.024L757.371 870.425L751.13 874.826L744.889 879.227L738.648 883.628L732.406 888.028L726.165 892.429L719.924 896.83L712.436 895.604L704.971 894.244L697.428 892.939L696.123 900.483L694.818 908.027L693.458 915.491L692.153 923.035L698.395 918.634L699.699 911.091L701.059 903.626L702.364 896.082L703.669 888.539L704.973 880.995L706.199 873.507L707.504 865.963L708.864 858.498L710.169 850.955L703.927 855.355L702.623 862.899L701.262 870.364L699.958 877.908L698.732 885.396" stroke="#0B5C4D" stroke-width="0.7166" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.295 1036.49L534.991 1044.03" stroke="#0B5C4D" stroke-width="0.5049" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.884 1035.13L546.349 1036.49L552.59 1032.09L558.831 1027.69L565.073 1023.29L571.314 1018.89L577.555 1014.49L583.796 1010.09L590.038 1005.69L596.279 1001.28L602.52 996.883L608.761 992.483L615.003 988.082L621.244 983.681L627.485 979.28L633.726 974.88L639.968 970.479L646.209 966.078L652.371 961.733L658.612 957.332L664.854 952.931L671.095 948.531L677.336 944.13L678.641 936.586L679.945 929.042L681.25 921.499L682.555 913.955L683.78 906.467L685.141 899.002L686.445 891.458L687.75 883.915L689.054 876.371L690.28 868.883L691.585 861.339L692.945 853.875L699.186 849.474L705.428 845.073L711.669 840.672L717.91 836.271L724.151 831.871L730.393 827.47L736.634 823.069L742.875 818.668L749.116 814.268L755.358 809.867L761.599 805.466L767.761 801.121L774.002 796.72L775.307 789.176L776.612 781.633L777.916 774.089L779.221 766.545L780.581 759.081L781.807 751.593L783.111 744.049L784.416 736.505L785.721 728.961L787.025 721.418L788.307 714.009L789.611 706.465L795.853 702.064L802.094 697.663L808.335 693.263L814.576 688.862L820.818 684.461L827.059 680.06L833.3 675.66L839.541 671.259L845.783 666.858L852.024 662.457L858.265 658.056L864.506 653.656L870.747 649.255L876.989 644.854L883.23 640.453L889.392 636.108L895.633 631.707L901.875 627.307L908.116 622.906L909.421 615.362L910.725 607.818L912.03 600.275L913.335 592.731L914.616 585.322L915.921 577.778L917.225 570.234L918.53 562.691L919.834 555.147L921.139 547.603L922.42 540.194L923.725 532.651L925.03 525.107L926.334 517.563L927.639 510.019L933.88 505.619L940.121 501.218L946.284 496.873L952.525 492.472L958.766 488.071L965.007 483.67L971.249 479.27L977.49 474.869L983.731 470.468L989.972 466.067L996.214 461.667L1002.45 457.266L1008.7 452.865L1014.94 448.464L1021.18 444.063L1027.42 439.663" stroke="#0B5C4D" stroke-width="0.4388" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.266 1035.09L545.754 1036.32" stroke="#0B5C4D" stroke-width="0.4437" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.295 1036.49L534.991 1044.03" stroke="#0B5C4D" stroke-width="0.4056" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.752 1035.11L546.295 1036.41L552.537 1032.01L558.778 1027.61L565.019 1023.21L571.26 1018.81L577.501 1014.41L583.743 1010.01L589.984 1005.61L596.225 1001.2L602.466 996.804L608.629 992.459L614.87 988.058L621.111 983.657L627.352 979.256L633.594 974.855L639.835 970.455L646.076 966.054L652.317 961.653L658.559 957.252L664.8 952.852L671.041 948.451L677.282 944.05L683.524 939.649L689.765 935.248L696.006 930.848L702.247 926.447L708.489 922.046L714.73 917.645L720.971 913.245L727.212 908.844L733.375 904.499L739.616 900.098L745.857 895.697L752.098 891.296L758.34 886.895L764.581 882.495L770.822 878.094L772.127 870.55L773.487 863.086L774.792 855.542L776.017 848.054L777.322 840.51L778.627 832.966L779.931 825.423L775.586 819.26L771.185 813.019L766.785 806.778L760.543 811.179L754.302 815.579L748.061 819.98L741.82 824.381L735.578 828.782L729.337 833.183L723.096 837.583L716.855 841.984" stroke="#0B5C4D" stroke-width="0.5275" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.221 1036.89L529.98 1041.29L523.739 1045.69L516.195 1044.39L508.707 1043.16L501.163 1041.86L493.699 1040.5L486.155 1039.19L478.611 1037.89L471.068 1036.58L463.58 1035.36L456.115 1034L448.571 1032.69L441.027 1031.39L434.786 1035.79L428.545 1040.19L422.304 1044.59L416.062 1048.99L409.821 1053.39L402.277 1052.09L394.734 1050.78L387.325 1049.5L379.781 1048.2L372.237 1046.89L364.694 1045.59L357.15 1044.28L349.741 1043L342.197 1041.7L334.653 1040.39L327.11 1039.09L319.566 1037.78L312.022 1036.48L304.613 1035.2L300.212 1028.95L295.812 1022.71L291.411 1016.47L287.01 1010.23L282.609 1003.99L288.851 999.589" stroke="#0B5C4D" stroke-width="0.409" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.348 1035.04L545.891 1036.34" stroke="#0B5C4D" stroke-width="0.5571" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.295 1036.49L534.991 1044.03" stroke="#0B5C4D" stroke-width="0.5111" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.752 1035.11L546.296 1036.41L552.537 1032.01L558.778 1027.61L565.019 1023.21L571.261 1018.81L577.502 1014.41L583.743 1010.01L589.984 1005.61L596.226 1001.2L602.467 996.804L608.708 992.403L614.949 988.003L621.191 983.602L627.353 979.257L633.594 974.856L639.835 970.455L646.077 966.054L652.318 961.654L658.559 957.253L664.8 952.852L671.042 948.451L677.283 944.05L683.524 939.65L689.765 935.249L696.007 930.848L703.55 932.153L711.094 933.457L718.559 934.818L726.102 936.122L733.59 937.348L741.134 938.653L748.678 939.957L756.143 941.318L763.686 942.622L771.23 943.927L777.471 939.526L783.713 935.125L789.954 930.725L796.195 926.324L802.436 921.923L808.677 917.522L809.982 909.978L811.208 902.49L812.512 894.947L813.817 887.403L815.122 879.859L816.482 872.395L817.787 864.851L819.012 857.363L820.317 849.819L812.773 848.514L817.174 854.756L810.933 859.157L804.691 863.557L803.466 871.045L802.161 878.589L800.857 886.133L794.615 890.534L788.374 894.934L782.133 899.335L775.892 903.736L769.65 908.137L763.409 912.537L757.168 916.938L750.927 921.339L744.764 925.684L738.523 930.085L732.282 934.486" stroke="#0B5C4D" stroke-width="0.4742" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.269 1036.62L534.988 1044.03" stroke="#0B5C4D" stroke-width="0.6492" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.223 1036.89L534.918 1044.43" stroke="#0B5C4D" stroke-width="0.6052" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.617 1035.08L546.161 1036.39" stroke="#0B5C4D" stroke-width="0.5539" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.48 1035.06L546.024 1036.37" stroke="#0B5C4D" stroke-width="0.9416" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.617 1035.08L546.082 1036.44" stroke="#0B5C4D" stroke-width="0.5642" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.213 1035.01L545.678 1036.37" stroke="#0B5C4D" stroke-width="0.5231" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.404 1034.87L544.948 1036.18" stroke="#0B5C4D" stroke-width="0.4412" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.861 1035.02L542.262 1041.26L546.662 1047.51L551.007 1053.67L555.408 1059.91L559.809 1066.15L564.21 1072.39L568.611 1078.63L573.011 1084.87L577.412 1091.12L581.813 1097.36L586.214 1103.6L590.614 1109.84L595.015 1116.08L599.416 1122.32L603.817 1128.56L608.218 1134.8L612.618 1141.05L617.019 1147.29L621.42 1153.53L625.821 1159.77L630.166 1165.93L634.567 1172.17L638.967 1178.41L643.368 1184.66L647.769 1190.9L652.17 1197.14L656.571 1203.38L655.345 1210.87L659.746 1217.11L664.146 1223.35L668.547 1229.59L672.948 1235.83L677.349 1242.07L681.75 1248.31L686.15 1254.56L690.551 1260.8L694.896 1266.96L699.297 1273.2L703.698 1279.44L708.099 1285.68L712.499 1291.92L716.9 1298.17L721.301 1304.41L725.702 1310.65L730.102 1316.89L734.503 1323.13L741.968 1324.49L749.512 1325.8L757.055 1327.1L764.543 1328.33L772.087 1329.63L779.631 1330.93L787.096 1332.3L794.639 1333.6L802.127 1334.83L809.671 1336.13L817.215 1337.43L823.456 1333.03L824.682 1325.55L825.986 1318L832.228 1313.6L838.469 1309.2L844.71 1304.8L850.951 1300.4L857.192 1296L863.434 1291.6L869.675 1287.2L875.916 1282.8L882.157 1278.4L888.399 1273.99L895.942 1275.3L903.407 1276.66L910.951 1277.96L918.495 1279.27L926.038 1280.57L930.383 1286.74L934.784 1292.98L939.185 1299.22L943.586 1305.46L947.987 1311.7L952.387 1317.94L956.788 1324.18L961.189 1330.42L965.59 1336.67L969.99 1342.91L974.391 1349.15L981.935 1350.45L989.479 1351.76L996.888 1353.04L1004.43 1354.34L1011.98 1355.65L1019.52 1356.95L1027.06 1358.26L1034.53 1359.62L1042.02 1360.84L1049.56 1362.15L1057.1 1363.45L1064.65 1364.76L1072.19 1366.06L1079.65 1367.42L1087.14 1368.65L1093.38 1364.25L1099.63 1359.85L1105.87 1355.45L1112.11 1351.04L1118.35 1346.64L1124.59 1342.24L1130.83 1337.84L1137.07 1333.44" stroke="#0B5C4D" stroke-width="0.4189" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.434 1035.68L540.834 1041.92L545.235 1048.16L549.58 1054.32L553.981 1060.56L558.382 1066.8L562.783 1073.05L567.183 1079.29L571.584 1085.53L575.985 1091.77L580.386 1098.01L584.786 1104.25L589.187 1110.49L593.588 1116.73L597.989 1122.98L602.39 1129.22L606.79 1135.46L611.191 1141.7L615.592 1147.94L619.993 1154.18L624.394 1160.42L628.739 1166.59L636.282 1167.89L640.683 1174.13L645.084 1180.37L649.485 1186.61L653.885 1192.85L658.286 1199.1L662.687 1205.34L667.088 1211.58L671.489 1217.82L675.889 1224.06L680.29 1230.3L684.691 1236.54L689.092 1242.78" stroke="#0B5C4D" stroke-width="0.8034" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.807 1034.94L545.271 1036.3" stroke="#0B5C4D" stroke-width="0.5615" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.674 1034.92L545.218 1036.23" stroke="#0B5C4D" stroke-width="0.6598" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.539 1034.9L545.083 1036.2" stroke="#0B5C4D" stroke-width="0.98" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.456 1035.54L530.215 1039.94L523.974 1044.34L517.733 1048.75L511.491 1053.15L505.25 1057.55L499.009 1061.95L492.847 1066.29L486.605 1070.69L480.364 1075.09L474.123 1079.49L467.882 1083.9L461.64 1088.3L455.399 1092.7L449.158 1097.1L442.917 1101.5L436.675 1105.9L430.434 1110.3L424.193 1114.7L417.952 1119.1L411.71 1123.5L405.469 1127.9L399.228 1132.3L392.987 1136.71L386.745 1141.11L380.504 1145.51L374.342 1149.85L368.101 1154.25L361.86 1158.65L355.618 1163.05L349.377 1167.45L343.136 1171.86L336.894 1176.26L335.59 1183.8L339.991 1190.04L347.479 1191.27L351.879 1197.51L350.575 1205.05L349.27 1212.6L347.966 1220.14L346.74 1227.63L345.435 1235.17L344.075 1242.64L342.77 1250.18L341.466 1257.72L340.161 1265.27L333.92 1269.67L327.758 1274.01L321.516 1278.41L315.275 1282.81L309.034 1287.22L302.793 1291.62L295.249 1290.31L290.848 1284.07L292.153 1276.53L293.457 1268.98L294.739 1261.57L296.043 1254.03L297.348 1246.49L298.653 1238.94L299.957 1231.4L301.262 1223.86L302.543 1216.45L303.848 1208.9L311.392 1210.21L318.88 1211.43L323.28 1217.67L327.681 1223.92L332.082 1230.16L336.483 1236.4L340.883 1242.64L342.188 1235.1L343.469 1227.69L344.774 1220.14L346.079 1212.6L347.383 1205.06L348.688 1197.51L342.447 1201.91L336.205 1206.31L329.964 1210.71L323.723 1215.11L317.482 1219.52L311.24 1223.92L309.936 1231.46L308.631 1239L307.406 1246.49L301.164 1250.89L299.86 1258.44L298.499 1265.9L297.195 1273.44L295.89 1280.99" stroke="#0B5C4D" stroke-width="0.4538" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.863 1035.02L545.351 1036.25" stroke="#0B5C4D" stroke-width="0.8226" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.807 1034.94L545.35 1036.25" stroke="#0B5C4D" stroke-width="0.5111" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.457 1035.54L530.216 1039.94L523.975 1044.34L517.733 1048.74L511.492 1053.14L505.251 1057.55L499.01 1061.95L492.768 1066.35L486.527 1070.75L480.286 1075.15L474.045 1079.55L467.803 1083.95L461.562 1088.35L455.321 1092.75L449.159 1097.1L441.615 1095.79L434.127 1094.57L426.583 1093.26L419.039 1091.96L411.496 1090.65L404.031 1089.29L396.487 1087.99L388.999 1086.76L381.455 1085.46L373.912 1084.15L369.511 1077.91L365.11 1071.67L360.709 1065.43L362.014 1057.89L368.255 1053.48L374.497 1049.08L373.192 1056.63L371.887 1064.17L370.662 1071.66L366.261 1065.42" stroke="#0B5C4D" stroke-width="0.393" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.729 1035L545.217 1036.23" stroke="#0B5C4D" stroke-width="0.6614" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.539 1034.9L545.004 1036.26" stroke="#0B5C4D" stroke-width="0.3914" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.512 1035.62L535.152 1043.09" stroke="#0B5C4D" stroke-width="0.8324" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.385 1035.95L535.08 1043.49" stroke="#0B5C4D" stroke-width="0.6474" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.43 1035.68L535.125 1043.22" stroke="#0B5C4D" stroke-width="0.5854" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.338 1036.22L535.034 1043.76" stroke="#0B5C4D" stroke-width="0.5937" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.418 1036.16L535.058 1043.63" stroke="#0B5C4D" stroke-width="0.4001" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.863 1034.78L544.407 1036.09" stroke="#0B5C4D" stroke-width="0.3534" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.504 1035.27L535.2 1042.82" stroke="#0B5C4D" stroke-width="0.3303" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.524 1035.14L535.219 1042.68" stroke="#0B5C4D" stroke-width="0.569" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.549 1035.01L540.95 1041.25L545.35 1047.49L549.751 1053.73L554.152 1059.97L558.553 1066.21L562.954 1072.45L567.354 1078.69L571.755 1084.93L576.156 1091.18L580.557 1097.42L584.957 1103.66L589.358 1109.9L593.759 1116.14L598.16 1122.38L602.561 1128.62L606.906 1134.79L611.306 1141.03L615.707 1147.27" stroke="#0B5C4D" stroke-width="0.5443" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.27 1034.85L544.679 1036.13" stroke="#0B5C4D" stroke-width="0.4376" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.27 1034.85L544.813 1036.16" stroke="#0B5C4D" stroke-width="0.6604" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.863 1034.78L544.407 1036.09" stroke="#0B5C4D" stroke-width="0.6345" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.527 1035.14L535.245 1042.55" stroke="#0B5C4D" stroke-width="0.9799" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.48 1035.41L530.318 1039.75L524.076 1044.15L517.835 1048.56L511.594 1052.96L505.353 1057.36L499.111 1061.76L492.87 1066.16L486.629 1070.56L480.388 1074.96L474.147 1079.36L467.905 1083.76L461.664 1088.16L455.423 1092.56L449.182 1096.96L442.94 1101.36L435.397 1100.06L427.932 1098.7L420.388 1097.39L412.844 1096.09L411.54 1103.63L410.235 1111.18L417.779 1112.48L424.02 1108.08L430.261 1103.68L422.718 1102.38L415.174 1101.07L419.575 1107.31" stroke="#0B5C4D" stroke-width="0.7797" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.549 1035L535.245 1042.55" stroke="#0B5C4D" stroke-width="0.4889" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.27 1034.85L544.813 1036.16" stroke="#0B5C4D" stroke-width="0.4961" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.477 1035.41L530.236 1039.81L523.994 1044.21L517.753 1048.61L511.512 1053.01L505.271 1057.41L499.03 1061.81L492.788 1066.21L486.547 1070.61L480.306 1075.01L474.065 1079.42L467.823 1083.82L461.582 1088.22L455.341 1092.62L449.1 1097.02L442.858 1101.42L436.617 1105.82L430.455 1110.17L424.214 1114.57L417.972 1118.97L411.731 1123.37L405.49 1127.77L399.249 1132.17L393.007 1136.57L386.766 1140.97L380.525 1145.37L374.284 1149.77L368.042 1154.17L361.801 1158.57L355.56 1162.97L349.319 1167.38L343.077 1171.78L335.589 1170.55L328.125 1169.19L320.581 1167.89L313.037 1166.58L305.493 1165.28L297.95 1163.97L290.462 1162.75L282.997 1161.39L275.453 1160.08L267.91 1158.78L260.366 1157.47L254.125 1161.87L247.883 1166.27L241.642 1170.67L235.401 1175.07L229.16 1179.48L222.997 1183.82L216.756 1188.22L210.515 1192.62L204.274 1197.02L198.032 1201.42L191.791 1205.82L185.55 1210.23L179.309 1214.63L173.067 1219.03L166.826 1223.43L160.585 1227.83L154.344 1232.23L148.102 1236.63L141.861 1241.03L140.556 1248.57L139.331 1256.06L138.026 1263.61L136.722 1271.15L135.361 1278.61L134.057 1286.16L132.752 1293.7L131.526 1301.19L130.222 1308.73L134.623 1314.98L139.023 1321.22L143.424 1327.46L147.825 1333.7L152.226 1339.94L156.571 1346.1L160.972 1352.34L165.372 1358.58L159.131 1362.99L152.89 1367.39L146.649 1371.79L140.407 1376.19L134.166 1380.59L127.925 1384.99L121.684 1389.39L115.442 1393.79L109.201 1398.19L102.96 1402.59L96.7185 1406.99L95.4929 1414.48L94.1883 1422.03L92.8837 1429.57L91.579 1437.11L90.2187 1444.58L88.914 1452.12L87.6884 1459.61L86.3838 1467.15L85.0792 1474.7L83.7745 1482.24L82.4142 1489.71L81.1885 1497.19L79.8839 1504.74L78.5793 1512.28L77.2747 1519.82L75.97 1527.37L82.2113 1522.97L88.4525 1518.57L94.6938 1514.17L100.935 1509.76" stroke="#0B5C4D" stroke-width="0.9838" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.548 1035L535.267 1042.41" stroke="#0B5C4D" stroke-width="0.8276" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.524 1035.14L535.219 1042.68" stroke="#0B5C4D" stroke-width="0.2762" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.73 1034.76L544.195 1036.12" stroke="#0B5C4D" stroke-width="0.8171" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.571 1034.87L535.266 1042.41" stroke="#0B5C4D" stroke-width="0.4023" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.524 1035.14L535.219 1042.68" stroke="#0B5C4D" stroke-width="0.3222" stroke-linecap="round" stroke-linejoin="round"></path><path d="M542.119 1035.69L537.718 1029.45L539.022 1021.91L540.248 1014.42L541.553 1006.87L542.913 999.41L544.218 991.866L545.522 984.322L546.748 976.834L548.053 969.291L549.413 961.826L550.717 954.282L552.022 946.738L553.327 939.195L554.552 931.707L555.857 924.163L557.217 916.698L558.522 909.155L554.121 902.913L549.72 896.672L545.32 890.431L540.919 884.19L536.518 877.948L532.117 871.707L527.717 865.466L523.316 859.225L518.915 852.983L514.514 846.742L510.113 840.501L505.713 834.26L501.312 828.018L496.911 821.777" stroke="#0B5C4D" stroke-width="0.5012" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.175 1035.53L536.774 1029.28L532.374 1023.04L527.973 1016.8L523.628 1010.64L519.227 1004.4L514.826 998.157L510.425 991.916L506.025 985.675L501.624 979.434L497.223 973.192L492.822 966.951L488.421 960.71L484.021 954.469L479.62 948.228L475.219 941.986L470.818 935.745L466.418 929.504L462.017 923.263L457.616 917.021L450.128 915.796L443.887 920.196" stroke="#0B5C4D" stroke-width="0.4714" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.579 1035.6L537.179 1029.36L532.778 1023.11L528.377 1016.87L523.976 1010.63L519.576 1004.39L515.175 998.149L510.83 991.987L506.429 985.745L502.028 979.504L497.627 973.263L493.227 967.022L488.826 960.78L484.425 954.539L480.024 948.298L475.623 942.057L471.223 935.815L466.822 929.574L462.421 923.333L458.02 917.092L453.62 910.851L449.219 904.609L444.818 898.368L446.178 890.903L447.483 883.36L448.709 875.872L450.013 868.328L451.318 860.784L452.622 853.24L453.983 845.776L455.287 838.232L456.513 830.744L457.818 823.2L459.122 815.657L460.427 808.113L461.787 800.648L463.092 793.104L464.318 785.616L459.917 779.375L452.452 778.015L448.051 771.774L443.651 765.532L439.25 759.291L434.849 753.05L436.13 745.641L442.372 741.24L448.613 736.839L444.212 730.598L439.811 724.357" stroke="#0B5C4D" stroke-width="0.7867" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.175 1035.53L536.774 1029.29L532.373 1023.04L527.973 1016.8L523.572 1010.56L519.171 1004.32L514.77 998.079L510.37 991.838L505.969 985.597" stroke="#0B5C4D" stroke-width="0.8817" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.58 1035.59L537.235 1029.43L532.834 1023.19L528.433 1016.95L524.033 1010.71L519.632 1004.47L515.231 998.226L516.536 990.682L517.84 983.138L519.145 975.595L520.45 968.051L521.731 960.642L523.035 953.098L524.34 945.555L525.645 938.011L526.949 930.467L528.31 923.002L529.535 915.514L530.84 907.971L532.145 900.427L533.449 892.883L534.754 885.339L536.035 877.93L537.34 870.387L538.644 862.843L539.949 855.299L541.254 847.756L536.853 841.514L532.452 835.273L528.051 829.032L523.706 822.87L519.306 816.628L514.905 810.387L510.504 804.146L506.103 797.905L501.702 791.663L497.302 785.422L492.901 779.181L488.5 772.94L484.099 766.698L479.698 760.457L475.298 754.216L470.897 747.975L466.496 741.733L462.095 735.492L457.695 729.251L453.294 723.01L454.654 715.545L455.88 708.057L457.184 700.513L458.489 692.97L459.794 685.426L461.098 677.882L462.459 670.417L463.684 662.929L464.989 655.386L466.294 647.842L467.598 640.298L468.903 632.754L470.184 625.345L471.489 617.802L477.73 613.401L479.035 605.857L480.339 598.314L481.644 590.77L483.004 583.305L484.23 575.817L485.535 568.273L486.839 560.73L493.08 556.329L499.322 551.928L505.563 547.527L511.804 543.127L518.045 538.726L524.287 534.325L530.528 529.924L537.993 531.285L544.234 526.884L550.475 522.483L556.716 518.082L562.958 513.681L569.199 509.281L575.44 504.88L581.681 500.479L587.923 496.078L595.466 497.383L603.01 498.688L610.498 499.913L617.963 501.274L625.506 502.578L633.05 503.883L637.451 510.124L641.852 516.365L646.253 522.606L650.653 528.848L655.054 535.089L659.455 541.33L663.8 547.492L662.495 555.036L661.191 562.58L659.965 570.068L655.564 563.827L651.164 557.585L646.763 551.344L647.988 543.856L643.588 537.615L639.187 531.374L634.786 525.132L630.385 518.891" stroke="#0B5C4D" stroke-width="0.5136" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.715 1035.62L537.314 1029.38L532.913 1023.14L528.513 1016.89L524.112 1010.65L519.711 1004.41L515.31 998.171L516.671 990.706L517.975 983.163L519.201 975.674L520.505 968.131L521.81 960.587L523.115 953.043L524.475 945.579L525.78 938.035L527.005 930.547L522.605 924.306L518.204 918.064L513.803 911.823L509.402 905.582L501.938 904.222L500.633 911.765L505.034 918.007L509.434 924.248L513.835 930.489L518.236 936.73L522.637 942.972L530.181 944.276L537.645 945.636L536.364 953.046L535.059 960.589L530.658 954.348L531.963 946.804L533.244 939.395L534.549 931.852L528.308 936.252" stroke="#0B5C4D" stroke-width="1.0073" stroke-linecap="round" stroke-linejoin="round"></path><path d="M541.042 1035.5L536.641 1029.26L532.24 1023.02L527.84 1016.78L523.439 1010.54L519.038 1004.3L514.637 998.056L510.237 991.814L505.836 985.573L501.435 979.332L497.034 973.091L492.689 966.928L488.288 960.687L483.888 954.446L479.487 948.205L475.086 941.963L470.685 935.722L466.284 929.481L458.741 928.176L451.197 926.872L443.653 925.567L439.253 919.326L434.908 913.163L430.507 906.922L423.042 905.562L415.498 904.257L407.955 902.953L400.411 901.648L392.867 900.343L385.379 899.118L377.914 897.757L370.371 896.453L362.827 895.148L355.283 893.844L347.795 892.618L340.251 891.313L332.787 889.953L325.243 888.648L317.699 887.344L311.458 891.744L310.153 899.288L302.61 897.984L295.145 896.623L287.657 895.398L280.113 894.093" stroke="#0B5C4D" stroke-width="0.4693" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.904 1035.48L536.503 1029.24L532.102 1023L527.701 1016.75L523.301 1010.51L518.9 1004.27L514.555 998.11L510.154 991.868L505.753 985.627L501.352 979.386L496.952 973.145L492.551 966.903L488.15 960.662L489.455 953.119L490.759 945.575L491.985 938.087L493.345 930.622L494.65 923.078L495.954 915.535L497.259 907.991L498.564 900.447L499.789 892.959L501.15 885.494L502.454 877.951L503.759 870.407L505.064 862.863L506.368 855.32L507.594 847.832L508.954 840.367L510.259 832.823L511.563 825.279L512.868 817.736L508.467 811.494L504.067 805.253L499.666 799.012L495.265 792.771L490.864 786.529L486.463 780.288L482.118 774.126L477.718 767.885L473.317 761.643L468.916 755.402L464.515 749.161L460.114 742.92L455.714 736.678L451.313 730.437L452.617 722.894L453.843 715.406L455.148 707.862L456.508 700.397L457.813 692.853L459.117 685.31L460.343 677.822L461.648 670.278L462.952 662.734L464.313 655.269L465.617 647.726L466.922 640.182L468.147 632.694L469.452 625.15L470.812 617.686L472.117 610.142L473.422 602.598L474.647 595.11L470.247 588.869L465.846 582.628L461.445 576.386L457.044 570.145L452.643 563.904L454.004 556.439L455.308 548.895L456.613 541.352L457.918 533.808L459.222 526.264L460.448 518.776L461.808 511.312L457.407 505.07L453.007 498.829L448.606 492.588L444.205 486.347L439.804 480.105L435.404 473.864L431.003 467.623L426.602 461.382L422.201 455.14L423.506 447.597L424.811 440.053L426.171 432.588L427.475 425.044L428.701 417.556L430.006 410.013L431.31 402.469L426.91 396.228L422.509 389.987L418.108 383.745L413.763 377.583L409.362 371.342L404.961 365.101L400.561 358.859L396.16 352.618L391.759 346.377L387.358 340.136L382.957 333.894L378.557 327.653L374.156 321.412L369.755 315.171L365.354 308.929L360.954 302.688L356.553 296.447" stroke="#0B5C4D" stroke-width="0.3647" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.771 1035.46L536.37 1029.22L531.969 1022.97L533.274 1015.43L534.634 1007.97L535.86 1000.48L537.164 992.934L538.469 985.39L539.774 977.847L541.078 970.303L542.439 962.838L543.664 955.35L544.969 947.806L546.274 940.263L547.578 932.719L548.939 925.254L550.243 917.711L551.469 910.223L552.773 902.679L554.078 895.135L555.383 887.591L556.743 880.127L557.969 872.639L553.568 866.397L549.167 860.156L544.766 853.915L540.366 847.674L535.965 841.432L531.564 835.191L527.163 828.95L522.763 822.709L518.362 816.467L513.961 810.226L509.56 803.985L505.159 797.744L500.759 791.502L496.414 785.34L492.013 779.099L487.612 772.858L483.211 766.616L478.81 760.375L474.41 754.134L470.009 747.893L471.313 740.349L466.913 734.108L462.512 727.866L458.111 721.625L453.71 715.384L449.31 709.143L444.909 702.901L440.508 696.66L436.107 690.419L431.706 684.178L427.361 678.015L422.961 671.774L418.56 665.533L419.864 657.989L421.169 650.445L422.474 642.902L423.778 635.358L425.06 627.949L426.364 620.405L427.669 612.862L428.974 605.318L430.278 597.774L431.583 590.23L432.864 582.821L434.169 575.278L435.473 567.734L436.778 560.19L438.083 552.647L439.308 545.159L440.669 537.694L441.973 530.15L443.278 522.606L438.877 516.365L440.182 508.821L441.486 501.278L442.768 493.869L444.072 486.325L445.377 478.781L446.682 471.238L447.986 463.694L449.291 456.15L450.572 448.741L451.877 441.197L447.476 434.956L443.075 428.715L444.38 421.171L445.685 413.628L446.989 406.084L448.271 398.675L449.575 391.131L450.88 383.587L452.184 376.044L453.489 368.5L454.85 361.035L456.075 353.547L457.38 346.003L458.684 338.46L454.284 332.219L449.883 325.977L451.187 318.434L452.548 310.969L453.852 303.425L455.078 295.937L456.383 288.393L457.687 280.85L458.992 273.306" stroke="#0B5C4D" stroke-width="0.4616" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.504 1035.41L536.103 1029.17L531.702 1022.93L527.301 1016.69L522.901 1010.44L518.555 1004.28L514.155 998.041L509.754 991.8L505.353 985.559L500.952 979.318L496.552 973.076L492.151 966.835L487.75 960.594L483.349 954.353L478.948 948.111L474.548 941.87L467.004 940.566" stroke="#0B5C4D" stroke-width="1.0597" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.963 1035.32L541.268 1027.77L542.628 1020.31L543.854 1012.82L545.158 1005.28L546.463 997.732L552.704 993.331L558.946 988.93L565.187 984.529L571.428 980.129L577.669 975.728L578.974 968.184L580.279 960.64L581.56 953.231L582.865 945.688L584.169 938.144L585.474 930.6L591.715 926.2L590.411 933.743L589.106 941.287L587.801 948.831L586.441 956.295L585.215 963.783L583.911 971.327L582.606 978.871L581.301 986.415L579.997 993.958" stroke="#0B5C4D" stroke-width="0.8677" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.963 1035.32L541.323 1027.85L542.628 1020.31L548.869 1015.91L556.413 1017.21L562.654 1012.81L568.816 1008.47" stroke="#0B5C4D" stroke-width="0.7129" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.691 1035.27L541.051 1027.8L542.356 1020.26L543.661 1012.72L544.965 1005.17L546.191 997.686L547.551 990.221L548.856 982.677L550.16 975.134L551.465 967.59L552.77 960.046L553.995 952.558L555.356 945.093L556.66 937.55L557.965 930.006L559.27 922.462L560.574 914.919L566.736 910.573L572.978 906.173L579.219 901.772L586.763 903.077L591.163 909.318L589.859 916.862L588.633 924.35" stroke="#0B5C4D" stroke-width="0.6073" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.059 1037.83L531.658 1031.59L524.115 1030.29L516.627 1029.06L509.083 1027.76L501.618 1026.4L494.074 1025.09L486.531 1023.79L478.987 1022.48L471.499 1021.26L463.955 1019.95L456.491 1018.59L448.947 1017.29L441.403 1015.98L433.915 1014.76L426.371 1013.45L418.828 1012.15L411.363 1010.79L403.819 1009.48L396.276 1008.18L388.788 1006.95L381.244 1005.65L373.779 1004.29L366.235 1002.98L358.692 1001.68L351.148 1000.37L343.66 999.147L339.259 992.906L334.858 986.665L330.458 980.423L326.057 974.182L321.656 967.941L317.255 961.7L318.56 954.156L319.865 946.612L321.169 939.068L313.681 937.843L306.137 936.538L298.594 935.234" stroke="#0B5C4D" stroke-width="0.6672" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.989 1038.24L531.588 1032L524.045 1030.69L516.58 1029.33L509.036 1028.03L501.493 1026.72L494.005 1025.5L486.461 1024.19L478.996 1022.83L471.452 1021.53L463.909 1020.22L456.421 1019L452.02 1012.76L447.619 1006.51L443.218 1000.27L438.818 994.032L434.417 987.791L430.016 981.55L425.615 975.309L421.214 969.067L416.814 962.826L412.413 956.585L408.012 950.344L403.611 944.102L399.211 937.861L394.81 931.62L390.409 925.379L386.008 919.137L381.607 912.896L377.262 906.734L378.567 899.19L374.166 892.949L369.765 886.708L365.365 880.466L360.964 874.225L356.563 867.984L352.162 861.743L347.762 855.501L343.361 849.26L338.96 843.019L334.559 836.778L330.158 830.536L325.758 824.295L321.357 818.054L316.956 811.813L312.555 805.571L305.067 804.346L297.524 803.041L289.98 801.737L282.515 800.376L274.971 799.072L267.483 797.846L259.94 796.541L253.698 800.942L247.457 805.343L239.913 804.038L232.449 802.678L224.905 801.373L217.361 800.069L209.873 798.843L202.33 797.538L194.786 796.234L187.321 794.873L179.777 793.569L172.289 792.343L164.746 791.039L157.202 789.734L149.737 788.374L142.194 787.069L134.65 785.764L127.162 784.539L120.921 788.939L114.679 793.34L108.438 797.741L102.197 802.142L95.9556 806.543L89.7143 810.943L83.4731 815.344L77.2318 819.745L71.0696 824.09L64.8284 828.491L57.2846 827.186L49.7409 825.881L42.1972 824.577L34.6535 823.272L27.1098 821.968L19.7008 820.686L12.157 819.382L4.61331 818.077L-2.93042 816.772L-10.4741 815.468L-17.9388 814.107L-25.4268 812.882L-32.9706 811.577L-40.5143 810.272L-48.058 808.968L-55.6017 807.663L-63.0107 806.382L-70.5544 805.077L-74.9552 798.836L-79.356 792.595L-83.7568 786.353L-88.1576 780.112L-95.7013 778.808L-103.245 777.503L-110.789 776.198L-118.277 774.973L-125.741 773.612L-133.285 772.308" stroke="#0B5C4D" stroke-width="0.655" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.156 1035.42L535.755 1029.18L531.354 1022.94L526.953 1016.69L522.553 1010.45L515.088 1009.09" stroke="#0B5C4D" stroke-width="0.5609" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.992 1038.24L531.591 1031.99L527.19 1025.75L522.79 1019.51L518.389 1013.27L513.988 1007.03L509.587 1000.79L505.242 994.626L500.841 988.385L493.298 987.08L485.754 985.776L478.21 984.471L473.81 978.23L469.409 971.988L465.008 965.747L460.607 959.506L456.206 953.265L451.806 947.024L447.405 940.782L448.765 933.318L444.364 927.076L445.669 919.533L441.268 913.291" stroke="#0B5C4D" stroke-width="0.3326" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.014 1038.1L531.614 1031.86L532.918 1024.32" stroke="#0B5C4D" stroke-width="0.6077" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.234 1035.36L541.538 1027.82L542.843 1020.28L544.124 1012.87L545.429 1005.32L546.733 997.78L548.038 990.236L549.343 982.693L550.568 975.204L551.929 967.74L553.233 960.196L554.538 952.652L555.843 945.109L557.147 937.565L558.428 930.156L559.733 922.612L561.038 915.068L556.637 908.827L552.236 902.586L547.835 896.345L549.14 888.801L550.445 881.257L551.805 873.793L553.031 866.305L554.335 858.761L555.64 851.217L556.945 843.673L558.249 836.13L559.61 828.665L560.835 821.177L562.14 813.633L563.444 806.089L564.749 798.546L566.109 791.081L567.335 783.593L568.64 776.049L569.944 768.506L571.249 760.962L572.554 753.418L578.795 749.017L585.036 744.617L591.277 740.216L597.519 735.815L603.681 731.47L609.922 727.069L616.163 722.668L608.754 721.387L604.354 715.146L605.579 707.658L606.884 700.114L608.188 692.57L609.493 685.027L610.853 677.562L606.453 671.321L602.052 665.079L597.651 658.838L593.25 652.597L585.707 651.292L578.163 649.988L570.619 648.683L563.075 647.378L555.666 646.097L548.123 644.792L540.579 643.488L536.178 637.247L531.777 631.005L527.377 624.764L522.976 618.523L529.217 614.122L535.458 609.721L541.7 605.321L547.941 600.92L554.182 596.519L560.423 592.118L566.665 587.717L574.129 589.078L581.673 590.382L589.217 591.687L596.705 592.913L604.248 594.217L611.713 595.578L619.257 596.882L626.801 598.187L634.344 599.491L638.745 605.733L643.09 611.895L647.491 618.136L651.892 624.377L645.651 628.778L639.409 633.179L633.168 637.58L626.927 641.981L620.686 646.381L613.198 645.156L608.797 638.914L604.396 632.673L599.995 626.432L595.594 620.191L591.194 613.949L586.793 607.708L582.392 601.467L577.991 595.226L585.535 596.53L593.079 597.835L600.567 599.061L608.11 600.365L615.654 601.67L623.119 603.03L630.663 604.335" stroke="#0B5C4D" stroke-width="0.598" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.827 1035.29L541.053 1027.8L542.358 1020.26L543.662 1012.72L545.023 1005.25L546.327 997.709L547.632 990.165L548.858 982.677L550.162 975.133L551.467 967.59L552.827 960.125L554.132 952.581L555.436 945.037L556.662 937.549L557.967 930.006L559.271 922.462L560.632 914.997L556.231 908.756L551.83 902.515L547.429 896.274L543.029 890.032L538.628 883.791L534.227 877.55L529.826 871.309L525.425 865.067L521.025 858.826L516.624 852.585L512.223 846.344L513.528 838.8L514.809 831.391L516.114 823.847L517.418 816.303L518.723 808.76L520.028 801.216L521.332 793.672L522.614 786.263L518.213 780.022L513.812 773.781L509.411 767.539L505.01 761.298L500.61 755.057L496.209 748.816L491.808 742.575L487.407 736.333L483.007 730.092L484.311 722.548L485.616 715.005L486.976 707.54L488.281 699.996L489.585 692.452L490.811 684.964L492.116 677.421L493.42 669.877L494.781 662.412L496.085 654.869L497.311 647.381L498.616 639.837L499.92 632.293L501.281 624.828L502.585 617.285L503.89 609.741L505.115 602.253L506.42 594.709L507.725 587.166L503.324 580.924L498.979 574.762L494.578 568.521L490.177 562.28L485.776 556.038L481.376 549.797L476.975 543.556L472.574 537.315L465.03 536.01L460.63 529.769L453.086 528.464L445.621 527.104L446.903 519.695L448.207 512.151L449.512 504.607" stroke="#0B5C4D" stroke-width="0.4229" stroke-linecap="round" stroke-linejoin="round"></path><path d="M540.369 1035.39L535.968 1029.15L531.568 1022.9L527.167 1016.66L522.766 1010.42L518.365 1004.18L513.965 997.939L509.564 991.698L505.163 985.456L500.762 979.215L496.361 972.974L491.961 966.733L484.473 965.507" stroke="#0B5C4D" stroke-width="0.459" stroke-linecap="round" stroke-linejoin="round"></path><path d="M535.943 1038.51L531.542 1032.26L527.141 1026.02L522.741 1019.78L518.34 1013.54L513.939 1007.3L509.538 1001.06L505.138 994.817L500.737 988.576L496.336 982.334L491.935 976.093L487.534 969.852L483.134 963.611L478.733 957.369L474.332 951.128L469.931 944.887L465.531 938.646L461.13 932.404L456.785 926.242L452.384 920.001L447.983 913.76L443.582 907.518L436.118 906.158L428.574 904.853L421.03 903.549L413.486 902.244L405.998 901.018L398.534 899.658L390.99 898.354L386.589 892.112L382.188 885.871L377.788 879.63L373.387 873.389L368.986 867.147L364.585 860.906L360.185 854.665L355.784 848.424L351.383 842.182L346.982 835.941L342.581 829.7L343.942 822.235" stroke="#0B5C4D" stroke-width="0.591" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.828 1035.29L541.132 1027.75L542.493 1020.28L543.718 1012.8L539.318 1006.56L534.917 1000.31L530.516 994.073L526.115 987.832L521.714 981.591L517.314 975.349L512.913 969.108L508.512 962.867L504.111 956.626L499.711 950.384L495.31 944.143L490.909 937.902L486.508 931.661L482.107 925.419L474.698 924.138L470.298 917.897L477.707 919.178L483.948 914.777" stroke="#0B5C4D" stroke-width="0.7377" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.425 1035.22L540.729 1027.68L542.09 1020.21L543.394 1012.67L544.62 1005.18L545.925 997.638L547.229 990.095L548.589 982.63L549.894 975.086L551.199 967.543L552.424 960.055L553.729 952.511L555.034 944.967L561.275 940.566L567.516 936.166L573.757 931.765L579.999 927.364" stroke="#0B5C4D" stroke-width="0.5441" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.152 1037.29L531.751 1031.05L527.35 1024.81L522.949 1018.57L518.548 1012.33L514.203 1006.17L509.803 999.926L505.402 993.684L501.001 987.443L496.6 981.202L492.199 974.961L484.656 973.656L478.414 978.057L474.014 971.816" stroke="#0B5C4D" stroke-width="0.709" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.081 1037.7L531.681 1031.46L527.28 1025.22L522.879 1018.97L518.478 1012.73L514.077 1006.49L509.677 1000.25L505.276 994.01L500.875 987.768L496.474 981.527L492.073 975.286L487.673 969.045L489.033 961.58L484.632 955.339L480.231 949.097L475.831 942.856L471.43 936.615L467.029 930.374L459.485 929.069L453.244 933.47L457.645 939.711" stroke="#0B5C4D" stroke-width="0.6667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.155 1035.18L540.38 1027.69L541.685 1020.14L542.99 1012.6L544.294 1005.06L545.655 997.592L546.88 990.104L548.185 982.56L549.49 975.016L550.794 967.473L557.035 963.072L563.277 958.671L569.518 954.27L575.759 949.87L582 945.469L583.226 937.981L578.881 931.818" stroke="#0B5C4D" stroke-width="0.4408" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.291 1035.2L534.89 1028.96L527.347 1027.65L522.946 1021.41L518.545 1015.17L514.144 1008.93L509.744 1002.69L505.343 996.447L500.942 990.206L496.541 983.965L492.196 977.803L487.795 971.561L483.395 965.32L478.994 959.079L474.593 952.838L470.192 946.596L465.791 940.355L461.391 934.114L456.99 927.873L449.446 926.568L441.902 925.263L434.359 923.959L426.95 922.677L419.406 921.373L411.862 920.068L404.319 918.763L396.775 917.459L389.287 916.233L381.822 914.873L374.278 913.568L366.735 912.264L359.191 910.959L351.647 909.654L344.238 908.373L336.695 907.068L329.151 905.764L321.607 904.459L314.063 903.154L306.52 901.85L299.111 900.568L291.567 899.264L284.023 897.959L276.48 896.655L272.079 890.413L267.678 884.172L263.277 877.931L258.876 871.69L254.476 865.448L246.988 864.223L239.444 862.918L231.979 861.558L224.435 860.253L216.892 858.948L209.348 857.644L201.86 856.418L194.395 855.058L186.852 853.753L180.61 858.154L179.306 865.698L178.001 873.241L176.641 880.706L175.336 888.25L174.11 895.738L172.806 903.282L171.501 910.825L170.197 918.369L168.836 925.834L167.532 933.377L166.306 940.865L165.001 948.409L163.697 955.953L162.392 963.497L161.032 970.961L159.806 978.449L166.047 974.049L172.21 969.703L178.451 965.303L185.995 966.607L193.538 967.912L194.843 960.368L196.148 952.825L197.452 945.281L198.734 937.872L194.333 931.631L189.932 925.389L185.531 919.148L181.13 912.907L176.73 906.666L178.034 899.122L179.339 891.578L180.644 884.034L182.004 876.57L183.229 869.082L184.534 861.538L192.078 862.843L187.677 856.601" stroke="#0B5C4D" stroke-width="1.1337" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.885 1035.13L540.19 1027.59L541.55 1020.12L542.855 1012.58L544.081 1005.09L545.385 997.546L546.69 990.003L547.994 982.459L549.355 974.994L550.58 967.506L551.885 959.962L553.19 952.419L554.494 944.875L555.855 937.41L557.159 929.867L563.401 925.466L570.865 926.826L564.624 931.227" stroke="#0B5C4D" stroke-width="0.6556" stroke-linecap="round" stroke-linejoin="round"></path><path d="M539.424 1035.22L540.729 1027.68L541.955 1020.19L543.259 1012.65L544.619 1005.18L545.924 997.638L547.229 990.094L553.47 985.694L559.711 981.293L565.873 976.948L572.115 972.547L578.356 968.146L579.661 960.602L580.965 953.059L582.27 945.515L583.63 938.05L584.856 930.562" stroke="#0B5C4D" stroke-width="0.7175" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.246 1036.76L531.845 1030.51L527.445 1024.27L523.044 1018.03L515.5 1016.73L508.012 1015.5L500.468 1014.2L493.004 1012.84L485.46 1011.53L477.916 1010.23L470.372 1008.92L462.884 1007.7L455.42 1006.34L447.876 1005.03L441.635 1009.43" stroke="#0B5C4D" stroke-width="0.8735" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.21 1035.02L539.436 1027.53L540.74 1019.98L542.045 1012.44L543.405 1004.97L544.71 997.431L546.015 989.888L547.24 982.4L548.545 974.856L549.85 967.312L551.21 959.847L552.515 952.304L553.819 944.76L555.045 937.272L556.349 929.728L557.654 922.185L553.309 916.022L548.908 909.781L544.507 903.54L540.107 897.299L535.706 891.057L531.305 884.816L526.904 878.575L522.504 872.334L518.103 866.092L513.702 859.851L509.301 853.61L504.9 847.369L500.5 841.127L496.099 834.886L491.698 828.645L484.154 827.34L476.666 826.115L477.971 818.571" stroke="#0B5C4D" stroke-width="0.4301" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.317 1036.35L528.829 1035.13L521.285 1033.82L513.741 1032.52L506.198 1031.21L498.733 1029.85L491.189 1028.55L483.701 1027.32L476.158 1026.02L468.614 1024.71L461.07 1023.41L453.605 1022.05L446.117 1020.82L438.574 1019.52L432.332 1023.92L431.028 1031.46L424.787 1035.86L418.545 1040.26" stroke="#0B5C4D" stroke-width="0.7739" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.269 1036.62L537.55 1029.21L538.855 1021.67L534.454 1015.42L530.053 1009.18L525.653 1002.94L521.252 996.701L516.851 990.459L512.45 984.218L508.05 977.977L503.649 971.736L499.248 965.494L494.847 959.253L490.446 953.012L486.046 946.771L481.701 940.608L483.005 933.065L484.31 925.521L485.614 917.977L486.84 910.489L488.145 902.945L489.505 895.481L490.81 887.937L492.114 880.393L493.419 872.85L494.645 865.362L495.949 857.818L491.604 851.656L487.203 845.414L482.803 839.173L478.402 832.932L474.001 826.691L475.306 819.147L476.61 811.603L477.915 804.059L479.22 796.516L480.501 789.107L481.806 781.563L483.11 774.019L484.415 766.476L485.719 758.932L487.08 751.467L488.305 743.979L489.61 736.435L490.915 728.892L492.219 721.348L498.461 716.947L504.702 712.546L505.927 705.058L507.288 697.594L508.592 690.05L509.897 682.506L511.202 674.963L512.506 667.419L513.732 659.931L515.092 652.466L516.397 644.922L517.701 637.379L519.006 629.835L520.311 622.291L521.592 614.882L522.897 607.339L518.496 601.097L519.801 593.554L521.105 586.01L522.41 578.466L523.636 570.978L524.996 563.513L526.301 555.97L527.605 548.426L523.204 542.185L518.804 535.943L514.403 529.702L510.002 523.461L505.601 517.22L498.058 515.915L490.57 514.689L483.026 513.385L475.561 512.024L468.017 510.72L463.617 504.479L459.216 498.237L454.815 491.996L450.414 485.755" stroke="#0B5C4D" stroke-width="0.5718" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.213 1035.01L539.518 1027.47L540.823 1019.93L542.104 1012.52L548.345 1008.12L554.587 1003.72L560.828 999.315L567.069 994.914L573.31 990.513L574.615 982.969L568.374 987.37L562.132 991.771L555.891 996.172L549.65 1000.57" stroke="#0B5C4D" stroke-width="0.8548" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.751 1035.11L540.111 1027.64L541.416 1020.1L542.72 1012.55L538.32 1006.31L533.919 1000.07L529.518 993.831L525.117 987.59L520.716 981.349L516.316 975.107L511.915 968.866L504.371 967.561L505.731 960.097L507.036 952.553L508.262 945.065L509.566 937.521L505.166 931.28L500.765 925.039L499.46 932.582L498.235 940.07L502.635 946.312L503.861 938.824" stroke="#0B5C4D" stroke-width="0.6353" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.291 1036.48L537.596 1028.94L538.901 1021.4L540.205 1013.85L541.487 1006.44L542.791 998.901L544.096 991.357L545.4 983.813L546.705 976.269L548.01 968.726L549.291 961.317L550.596 953.773L551.9 946.229L553.205 938.686L554.51 931.142L555.87 923.677L557.096 916.189L552.695 909.948L548.294 903.707L543.893 897.465L539.492 891.224L535.092 884.983L530.691 878.742L526.29 872.5L521.889 866.259L523.194 858.715L524.499 851.172L525.859 843.707L527.164 836.163L528.389 828.675L529.694 821.131L530.998 813.588L532.359 806.123L533.663 798.579L534.968 791.036L536.194 783.548L537.498 776.004L538.803 768.46L540.163 760.995L541.468 753.452L542.773 745.908L543.998 738.42L539.597 732.179L532.133 730.818L524.645 729.593L517.101 728.288L509.557 726.984L502.014 725.679L494.47 724.374L493.244 731.862L491.94 739.406" stroke="#0B5C4D" stroke-width="0.4428" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.346 1035.04L539.65 1027.49L541.011 1020.03L542.315 1012.49L543.541 1005L544.845 997.454L546.15 989.911L547.51 982.446L548.815 974.902L550.12 967.358L551.345 959.87L552.65 952.327L553.955 944.783L555.315 937.318L556.62 929.774L557.845 922.287L559.15 914.743L560.454 907.199L561.759 899.655L557.358 893.414L553.013 887.252L548.612 881.011L544.212 874.769L539.811 868.528L535.41 862.287L531.009 856.046L526.609 849.804L527.913 842.261L523.512 836.019L519.112 829.778L514.711 823.537L510.31 817.296L505.909 811.054L501.508 804.813L494.02 803.588L489.62 797.346L485.219 791.105L480.818 784.864L476.417 778.623L472.017 772.381L467.616 766.14L463.215 759.899L458.814 753.658L454.413 747.416L450.013 741.175L451.317 733.631L446.916 727.39L442.516 721.149L441.211 728.693L439.906 736.236" stroke="#0B5C4D" stroke-width="0.5016" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.754 1035.11L540.059 1027.56L535.658 1021.32L531.257 1015.08L526.856 1008.84L522.455 1002.6L518.11 996.436L513.71 990.195L509.309 983.953L504.908 977.712L500.507 971.471L496.106 965.23L491.706 958.988L487.305 952.747L482.904 946.506L478.503 940.265L470.96 938.96L466.559 932.719L462.158 926.478L457.757 920.236L453.356 913.995L448.956 907.754L444.611 901.592L440.21 895.35L435.809 889.109L431.408 882.868L427.007 876.627L422.607 870.385L418.206 864.144L413.805 857.903L409.404 851.662L401.861 850.357L394.317 849.052L386.773 847.748L379.364 846.466L371.82 845.162L364.277 843.857L359.876 837.616L355.475 831.375L351.074 825.133L346.674 818.892L342.273 812.651L337.872 806.41L333.471 800.168L329.07 793.927L324.67 787.686L320.325 781.524L315.924 775.282L311.523 769.041L307.122 762.8L302.722 756.559L295.178 755.254L287.634 753.949L280.169 752.589L272.626 751.284L265.138 750.059L257.594 748.754L250.05 747.45L242.506 746.145L236.265 750.546L230.103 754.891L223.862 759.292L217.62 763.692L211.379 768.093L205.138 772.494L203.833 780.038L197.592 784.438L191.351 788.839L185.11 793.24L180.709 786.999L173.165 785.694L166.924 790.095" stroke="#0B5C4D" stroke-width="0.4436" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.27 1036.62L537.575 1029.08L538.879 1021.53L540.184 1013.99L541.465 1006.58L542.77 999.035L544.074 991.491L545.379 983.948L546.684 976.404L547.988 968.86L549.27 961.451L550.574 953.907L551.879 946.364L553.184 938.82L554.488 931.276L555.793 923.733L557.074 916.324L558.379 908.78L559.683 901.236L560.988 893.692L562.293 886.149L563.574 878.74L564.879 871.196L566.183 863.652L567.488 856.109L568.793 848.565L570.097 841.021L571.379 833.612L572.683 826.068L573.988 818.525L575.292 810.981L576.597 803.437L577.957 795.973L584.12 791.627L590.361 787.227L596.602 782.826L602.843 778.425L609.085 774.024L610.389 766.481L611.694 758.937L612.999 751.393L614.303 743.849L615.529 736.361L616.889 728.897L618.194 721.353L619.498 713.809L620.803 706.266L622.108 698.722L623.333 691.234L624.694 683.769L625.998 676.225L627.303 668.682L628.608 661.138L629.833 653.65L631.194 646.185L637.435 641.784L643.676 637.384L649.917 632.983L656.159 628.582L657.463 621.038L658.768 613.495L660.072 605.951L661.298 598.463L662.603 590.919L663.963 583.455L665.268 575.911L666.572 568.367L667.798 560.879L669.103 553.335L670.407 545.792L666.006 539.55L661.661 533.388L657.261 527.147L652.86 520.906L648.459 514.664L644.058 508.423L639.657 502.182L635.257 495.941L630.856 489.699L626.455 483.458L627.76 475.914L629.064 468.371L630.369 460.827L631.65 453.418L632.955 445.874L634.26 438.331L635.564 430.787L636.869 423.243L638.229 415.778L639.455 408.29L640.76 400.747L642.064 393.203L643.369 385.659L649.61 381.258L655.851 376.858L662.092 372.457L668.334 368.056L674.575 363.655L680.737 359.31L686.978 354.91L693.22 350.509L699.461 346.108L705.702 341.707L711.944 337.306L719.487 338.611L727.031 339.916L734.575 341.22L742.118 342.525L746.519 348.766" stroke="#0B5C4D" stroke-width="0.8441" stroke-linecap="round" stroke-linejoin="round"></path><path d="M538.752 1035.11L534.352 1028.87L529.951 1022.63L525.55 1016.38L521.149 1010.14L516.749 1003.9L512.348 997.661L507.947 991.42L503.546 985.179L499.145 978.937L494.745 972.696L490.344 966.455L485.943 960.214L481.598 954.051L477.197 947.81L478.423 940.322L474.022 934.081L469.621 927.84L465.22 921.598L460.82 915.357L456.419 909.116L452.018 902.875L447.617 896.633L440.153 895.273L435.752 889.032L431.351 882.791L426.95 876.549L422.549 870.308L418.204 864.146L413.804 857.905L409.403 851.663L405.002 845.422L400.601 839.181L396.2 832.94L391.8 826.698L387.399 820.457L382.998 814.216L378.597 807.975L374.197 801.733L366.653 800.429L359.109 799.124L351.621 797.899L344.077 796.594L336.613 795.234L329.069 793.929L324.668 787.688L320.267 781.446L315.867 775.205L311.466 768.964L307.065 762.723L302.664 756.481L298.264 750.24L293.918 744.078L289.518 737.837L285.117 731.595L280.716 725.354L276.315 719.113L268.772 717.808L261.228 716.504L253.684 715.199L246.14 713.894L238.731 712.613L231.188 711.308L223.644 710.004L216.1 708.699L208.557 707.395L201.069 706.169L193.604 704.809L186.06 703.504L178.516 702.199L172.275 706.6L166.034 711.001L159.793 715.402L153.551 719.802L147.31 724.203L141.069 728.604L139.764 736.148L138.539 743.636L137.234 751.179L135.874 758.644L143.417 759.949L150.961 761.253L158.426 762.614L165.97 763.918L173.458 765.144L181.001 766.449L188.545 767.753L196.089 769.058L203.553 770.418L209.795 766.017L216.036 761.617L222.277 757.216L228.518 752.815L234.76 748.414L241.001 744.014L247.242 739.613L253.483 735.212L259.725 730.811L265.966 726.41L272.207 722.01L264.663 720.705L257.12 719.4L249.576 718.096L242.111 716.735L234.623 715.51L227.08 714.205L219.536 712.901L211.992 711.596L205.751 715.997" stroke="#0B5C4D" stroke-width="0.4043" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.675 1034.92L530.132 1033.62L522.644 1032.39L516.482 1036.74L510.24 1041.14" stroke="#0B5C4D" stroke-width="0.8919" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.945 1034.97L530.401 1033.66L526 1027.42L521.655 1021.26L517.254 1015.02L509.71 1013.71L502.246 1012.35L494.702 1011.05L487.158 1009.74L479.615 1008.44L472.127 1007.21L464.662 1005.85L457.118 1004.55L449.574 1003.24L442.031 1001.94L435.789 1006.34L428.301 1005.12L420.758 1003.81L413.293 1002.45" stroke="#0B5C4D" stroke-width="0.4344" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.338 1036.22L528.795 1034.91L521.251 1033.61L513.786 1032.25L506.298 1031.02L498.755 1029.72L491.211 1028.41L483.667 1027.11L476.202 1025.75L468.659 1024.44L461.171 1023.22L453.627 1021.91L446.083 1020.61L438.539 1019.3L431.075 1017.94L423.587 1016.72L416.043 1015.41L411.642 1009.17L407.242 1002.93L402.841 996.688L398.44 990.446L394.039 984.205L389.638 977.964L385.238 971.723L380.837 965.481L376.436 959.24L372.035 952.999L367.634 946.758L363.234 940.516L355.746 939.291L348.202 937.986L340.658 936.682L333.194 935.321L325.65 934.017L318.106 932.712L310.618 931.486L303.074 930.182L295.61 928.821L288.066 927.517L280.522 926.212L272.979 924.907L265.49 923.682L257.947 922.377L251.706 926.778L245.543 931.123L239.302 935.524L233.061 939.925L226.82 944.325L220.578 948.726L214.337 953.127L208.096 957.528L201.855 961.928L195.613 966.329L203.157 967.634L210.645 968.859L218.11 970.22L225.653 971.524L233.197 972.829L240.741 974.134L248.285 975.438L255.773 976.664L263.237 978.024L270.781 979.329L278.325 980.634L285.868 981.938L293.412 983.243L300.821 984.524L308.365 985.829L315.909 987.133L322.15 982.733" stroke="#0B5C4D" stroke-width="0.9244" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.418 1036.16L528.874 1034.86L522.633 1039.26L515.089 1037.95L507.545 1036.65L500.002 1035.34L492.458 1034.04L485.049 1032.76L477.505 1031.45L469.961 1030.15L462.418 1028.84L454.874 1027.54L447.409 1026.18L439.921 1024.95L432.378 1023.65L424.834 1022.34L417.29 1021.04L409.746 1019.73L402.282 1018.37L397.937 1012.21L390.393 1010.91L382.849 1009.6L375.305 1008.3L367.762 1006.99L360.218 1005.69L352.809 1004.41L345.265 1003.1L337.722 1001.8L330.178 1000.49L322.634 999.188L315.169 997.827L307.681 996.602L300.138 995.297L292.594 993.992L286.353 998.393L278.809 997.089L271.265 995.784L263.856 994.503L256.313 993.198L248.769 991.893L241.225 990.589L233.681 989.284L226.217 987.924L218.729 986.698L211.185 985.393L203.641 984.089L196.098 982.784L188.554 981.48L181.089 980.119L173.601 978.894L166.057 977.589L159.816 981.99L153.575 986.391L147.334 990.791L141.092 995.192L134.851 999.593L128.61 1003.99L122.369 1008.39L116.127 1012.8L109.886 1017.2L103.645 1021.6L97.4827 1025.94L91.2415 1030.34L85.0002 1034.74L78.7589 1039.14L72.5177 1043.54L66.2765 1047.95L60.0352 1052.35L58.7306 1059.89L57.3702 1067.35L56.0656 1074.9L54.84 1082.39L53.5353 1089.93L52.2307 1097.47L50.9261 1105.02L49.5657 1112.48L43.3245 1116.88L37.0833 1121.28L30.842 1125.68L24.6007 1130.09L18.4385 1134.43L10.9505 1133.21L3.40676 1131.9L-4.13696 1130.6L-11.6806 1129.29L-19.2244 1127.99L-26.6891 1126.63L-34.1771 1125.4L-41.7208 1124.1L-49.2646 1122.79L-56.8082 1121.49L-61.209 1115.25L-65.6098 1109L-70.0106 1102.76L-74.4114 1096.52L-81.8994 1095.3L-89.3641 1093.94L-96.9078 1092.63L-103.149 1097.03L-109.39 1101.43L-115.632 1105.83L-121.873 1110.23L-128.114 1114.63L-134.355 1119.04L-140.597 1123.44L-148.14 1122.13L-155.605 1120.77L-163.149 1119.47L-170.637 1118.24" stroke="#0B5C4D" stroke-width="0.648" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.594 1034.98L538.899 1027.43L545.14 1023.03L551.381 1018.63L557.623 1014.23L563.864 1009.83L570.105 1005.43L571.41 997.885L572.714 990.341L573.94 982.853L575.3 975.388L576.605 967.844L577.91 960.301L579.214 952.757L580.519 945.213L581.744 937.725L583.105 930.26" stroke="#0B5C4D" stroke-width="0.6385" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.387 1035.95L528.922 1034.59L521.378 1033.28L513.835 1031.98L506.291 1030.67L498.747 1029.37L491.338 1028.09L486.937 1021.85L482.537 1015.6L478.136 1009.36L473.735 1003.12L469.334 996.881L464.933 990.639L460.533 984.398L456.132 978.157L451.731 971.916L447.33 965.674L442.929 959.433L438.529 953.192L434.128 946.951L429.727 940.709L431.008 933.3L432.313 925.757L433.618 918.213L429.217 911.972L427.912 919.515" stroke="#0B5C4D" stroke-width="0.6956" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.431 1035.68L528.888 1034.37L521.423 1033.01L513.879 1031.71L506.391 1030.48L498.848 1029.18L491.304 1027.87L483.76 1026.57L476.295 1025.21L468.752 1023.9L461.264 1022.68L453.72 1021.37L446.176 1020.07L438.633 1018.76L431.168 1017.4L423.68 1016.18L419.279 1009.94L411.735 1008.63L404.192 1007.33L396.648 1006.02L389.183 1004.66L381.639 1003.36L377.294 997.195L372.894 990.954L368.493 984.712L364.092 978.471L359.691 972.23L355.29 965.989L350.89 959.747L346.489 953.506L347.793 945.962L343.393 939.721L335.849 938.417L328.305 937.112L320.817 935.886L313.274 934.582L305.73 933.277L298.265 931.917L290.721 930.612L283.233 929.386L275.69 928.082L268.146 926.777L260.602 925.473L253.137 924.112L245.594 922.808L238.106 921.582L233.705 915.341L229.304 909.099L224.903 902.858L220.503 896.617L216.102 890.376L211.701 884.134L207.3 877.893L202.9 871.652L198.499 865.411L194.098 859.169L189.697 852.928L185.296 846.687L180.896 840.446L176.495 834.204L172.094 827.963L167.693 821.722L169.054 814.257L170.358 806.714L171.584 799.226L167.183 792.984L159.718 791.624L152.175 790.319L144.687 789.094L137.143 787.789L129.599 786.484L122.055 785.18L114.591 783.819L107.047 782.515L99.5591 781.289L92.0153 779.985L84.4716 778.68L77.0069 777.32L69.4632 776.015L63.2219 780.416L56.9807 784.816L50.7395 789.217L44.4982 793.618L38.2569 798.019L32.0157 802.42L25.7744 806.82L19.5332 811.221L13.2919 815.622L5.74824 814.317L1.40317 808.155L-2.99761 801.914L-7.39839 795.673L-11.7992 789.431L-16.2 783.19L-20.6007 776.949L-19.2961 769.405L-17.9915 761.861L-16.6868 754.318L-15.3822 746.774L-14.0219 739.309L-12.7962 731.821L-11.4916 724.278L-10.187 716.734L-8.88234 709.19L-7.52202 701.725L-6.29638 694.237L-4.99172 686.694L2.55198 687.998L10.0957 689.303" stroke="#0B5C4D" stroke-width="0.8931" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.385 1035.95L528.841 1034.64L522.6 1039.04" stroke="#0B5C4D" stroke-width="1.0827" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.405 1034.87L529.861 1033.57L522.318 1032.27L514.774 1030.96L507.286 1029.74L501.045 1034.14L494.883 1038.48L493.522 1045.95L487.281 1050.35L479.793 1049.12L472.249 1047.82L464.705 1046.51L460.305 1040.27L467.848 1041.58" stroke="#0B5C4D" stroke-width="0.6292" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.809 1034.94L539.114 1027.4L540.474 1019.94L541.699 1012.45L543.004 1004.9L544.309 997.36L545.613 989.816L546.918 982.272L548.278 974.807L549.504 967.319L550.809 959.776L552.113 952.232L553.418 944.688L554.723 937.145L556.083 929.68L557.308 922.192L558.613 914.648L554.212 908.407L549.812 902.166" stroke="#0B5C4D" stroke-width="0.8831" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.402 1034.87L538.707 1027.33L540.067 1019.87L541.372 1012.32L542.598 1004.83L543.902 997.29L545.207 989.746L546.512 982.203L547.872 974.738L549.176 967.194L550.402 959.706L551.707 952.162L553.011 944.619L554.372 937.154L555.676 929.61L556.902 922.122L558.207 914.579L559.511 907.035L560.816 899.491L556.415 893.25L552.07 887.088L547.669 880.846L543.269 874.605L538.868 868.364L534.467 862.123L530.066 855.881L525.665 849.64L521.265 843.399L516.864 837.158L512.463 830.916L508.062 824.675L503.661 818.434L499.261 812.193L491.717 810.888L487.316 804.647L482.915 798.406L481.611 805.949" stroke="#0B5C4D" stroke-width="0.7398" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.406 1034.87L538.71 1027.33L540.015 1019.79L541.296 1012.38L542.601 1004.83L543.905 997.29L545.21 989.746L546.515 982.203L547.819 974.659L549.101 967.25L550.405 959.706L551.71 952.163L547.309 945.921L542.908 939.68L538.508 933.439L534.107 927.198L529.706 920.956L525.305 914.715L520.904 908.474L516.504 902.233L512.159 896.07L507.758 889.829L503.357 883.588L504.662 876.044L505.966 868.5L507.192 861.012L508.496 853.469L509.857 846.004L511.162 838.46L512.466 830.917L513.771 823.373L514.996 815.885L516.301 808.341L517.661 800.876L518.966 793.333L520.271 785.789L515.87 779.548L511.469 773.306L507.068 767.065L502.667 760.824L498.267 754.583L493.866 748.341L489.465 742.1L485.064 735.859L480.664 729.618L476.263 723.376L471.918 717.214L467.517 710.973L463.116 704.732L458.715 698.49L454.315 692.249L449.914 686.008L442.37 684.703L443.675 677.16L439.274 670.918L434.873 664.677L430.472 658.436L426.072 652.195L421.671 645.953L417.27 639.712L412.925 633.55L408.524 627.309L404.123 621.067L399.723 614.826L395.322 608.585L390.921 602.344L386.52 596.102L382.12 589.861L377.719 583.62L373.318 577.379L368.917 571.137L364.516 564.896L360.116 558.655L352.572 557.35L345.028 556.046L337.54 554.82L329.996 553.515L322.532 552.155L314.988 550.85L308.747 555.251L302.505 559.652L296.264 564.053L290.023 568.454L283.782 572.854L277.54 577.255L271.299 581.656L265.058 586.057L258.817 590.457L263.218 596.699L267.618 602.94L272.019 609.181L279.563 610.486L287.107 611.791L294.595 613.016L302.138 614.321L308.301 609.976L314.542 605.575L320.783 601.174L327.024 596.773L333.265 592.373L339.507 587.972L345.748 583.571L351.989 579.17L358.23 574.769L364.472 570.369L360.071 564.127L352.583 562.902L345.039 561.597L337.575 560.237" stroke="#0B5C4D" stroke-width="0.4381" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.386 1035.95L537.668 1028.54L538.972 1021L540.277 1013.45L541.582 1005.91L542.886 998.364L544.191 990.82L545.472 983.411L546.777 975.868L548.081 968.324L549.386 960.78L550.691 953.236L551.995 945.693L553.277 938.284L554.581 930.74L555.886 923.196L557.191 915.653L558.495 908.109L559.856 900.644L561.081 893.156L562.386 885.613L563.69 878.069L564.995 870.525L566.3 862.981L572.541 858.581L578.782 854.18L584.945 849.835L591.186 845.434L597.427 841.033L603.668 836.632L609.909 832.232L617.453 833.536L624.997 834.841L632.541 836.145L640.084 837.45L647.549 838.81L655.037 840.036L662.581 841.341L668.822 836.94L675.063 832.539L681.305 828.138L676.904 821.897L669.36 820.593L661.872 819.367L654.328 818.062L646.864 816.702L639.32 815.397L631.776 814.093L624.232 812.788L617.991 817.189L611.75 821.59L605.509 825.99L599.267 830.391L593.026 834.792L586.785 839.193L580.544 843.593L574.381 847.939L581.846 849.299" stroke="#0B5C4D" stroke-width="0.6008" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.503 1035.27L528.96 1033.97L521.416 1032.66L513.928 1031.44L506.463 1030.08L498.919 1028.77L491.376 1027.47L483.832 1026.16L476.288 1024.86L468.879 1023.58L461.336 1022.27L453.792 1020.97L446.248 1019.66L438.704 1018.36L431.216 1017.13L423.752 1015.77L417.51 1020.17L411.269 1024.57L405.028 1028.97L398.787 1033.38L392.545 1037.78L385.002 1036.47L377.458 1035.17L369.914 1033.86L362.45 1032.5L358.049 1026.26" stroke="#0B5C4D" stroke-width="0.5326" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.73 1034.76L529.187 1033.45L521.643 1032.15L514.099 1030.84L506.556 1029.54L499.068 1028.31L491.603 1026.95L487.202 1020.71L482.801 1014.47L478.401 1008.23L470.857 1006.92L463.313 1005.62L455.769 1004.32L448.281 1003.09L440.817 1001.73L433.273 1000.42L425.729 999.12L418.185 997.815L410.697 996.59L403.154 995.285L395.689 993.925L388.145 992.62L380.602 991.315L373.058 990.011L365.57 988.785L358.026 987.48L350.561 986.12L343.018 984.815L335.474 983.511L331.073 977.27L332.434 969.805L338.675 965.404L344.916 961.003L340.515 954.762L336.115 948.521L331.714 942.28L324.17 940.975L328.571 947.216L332.972 953.457L337.372 959.699L331.131 964.099L324.89 968.5L320.489 962.259L321.794 954.715" stroke="#0B5C4D" stroke-width="0.5283" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.729 1034.76L538.034 1027.21L539.338 1019.67L540.62 1012.26L541.924 1004.72L543.229 997.173L544.534 989.629L545.838 982.086L541.437 975.845L537.037 969.603L532.692 963.441L528.291 957.2L523.89 950.959L519.489 944.717L515.088 938.476L510.688 932.235L506.287 925.994L501.886 919.752L497.485 913.511L493.085 907.27L488.684 901.029L484.283 894.787L485.588 887.244L486.813 879.756L488.174 872.291L489.478 864.747L490.783 857.203L492.087 849.66L498.329 845.259L493.928 839.018L489.527 832.776L485.126 826.535L480.726 820.294L476.325 814.053L471.924 807.811L467.579 801.649L463.178 795.408L458.777 789.167L454.377 782.925L449.976 776.684L445.575 770.443L441.174 764.202L442.4 756.714L437.999 750.472L433.598 744.231L429.198 737.99L424.797 731.749L420.396 725.507L415.995 719.266L411.594 713.025L407.194 706.784L402.793 700.542L398.448 694.38L394.047 688.139L389.646 681.898L385.245 675.656L380.845 669.415L376.444 663.174L372.043 656.933L364.578 655.572L357.035 654.268L349.491 652.963L342.003 651.738L334.459 650.433L326.995 649.073L319.451 647.768L311.907 646.463L304.363 645.159L298.122 649.559L291.881 653.96L285.64 658.361L279.398 662.762L273.157 667.163L265.669 665.937L270.07 672.178L274.471 678.419L278.871 684.661L283.217 690.823L287.617 697.064L292.018 703.305L296.419 709.547L300.82 715.788L305.22 722.029L309.621 728.27L314.022 734.512L318.423 740.753L322.824 746.994L327.224 753.235L331.625 759.477L336.026 765.718L329.864 770.063L323.622 774.464L328.023 780.705L332.424 786.946" stroke="#0B5C4D" stroke-width="0.8549" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.526 1035.14L528.983 1033.83L521.439 1032.53L513.951 1031.3L506.486 1029.94L498.943 1028.64L491.399 1027.34L483.855 1026.03L476.367 1024.8L468.823 1023.5L461.359 1022.14L453.815 1020.84L447.574 1025.24L440.03 1023.93L432.486 1022.63L424.998 1021.4L417.534 1020.04L409.99 1018.74L402.446 1017.43L394.902 1016.13L387.359 1014.82L379.871 1013.6L372.406 1012.24L364.862 1010.93L357.319 1009.63L349.775 1008.32L342.287 1007.1L334.822 1005.74L327.278 1004.43L321.037 1008.83L314.796 1013.23L308.555 1017.63L302.313 1022.03L296.072 1026.44L289.831 1030.84L283.59 1035.24L277.348 1039.64L271.107 1044.04L264.866 1048.44L258.625 1052.84L263.025 1059.08L255.482 1057.78L248.017 1056.42L241.776 1060.82L235.534 1065.22L229.293 1069.62L223.052 1074.02L216.811 1078.42L210.569 1082.82L204.328 1087.22L203.024 1094.77L201.719 1102.31L200.493 1109.8L199.189 1117.34L197.828 1124.81L196.524 1132.35L195.219 1139.89L193.914 1147.44L192.689 1154.93L191.328 1162.39L190.024 1169.93L188.719 1177.48L187.415 1185.02L186.11 1192.56L184.884 1200.05L183.524 1207.52L177.283 1211.92L171.041 1216.32L164.8 1220.72L158.559 1225.12L152.318 1229.52L146.077 1233.92L139.835 1238.32L133.594 1242.72L127.353 1247.12L121.111 1251.53L114.87 1255.93L108.629 1260.33L107.403 1267.81L106.099 1275.36L104.794 1282.9L103.489 1290.45L102.185 1297.99L95.9436 1302.39L88.4789 1301.03L80.9351 1299.73L73.3914 1298.42L65.8477 1297.12L58.304 1295.81L52.0628 1300.21L45.8215 1304.61L39.5803 1309.01L33.339 1313.41L27.1768 1317.76L20.9355 1322.16L14.6943 1326.56L8.45304 1330.96L7.14838 1338.51L5.84376 1346.05L4.53911 1353.59L3.23446 1361.14L2.00885 1368.63L0.648528 1376.09L-0.656124 1383.63L-1.96074 1391.18L-3.2654 1398.72L-4.57005 1406.26L-5.85138 1413.67L-7.15598 1421.22" stroke="#0B5C4D" stroke-width="0.6529" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.549 1035L529.005 1033.7L521.54 1032.34L513.996 1031.03L506.508 1029.81L498.965 1028.5L491.421 1027.2L483.877 1025.89L476.413 1024.53L468.869 1023.23L461.381 1022L453.837 1020.7L446.293 1019.39L438.75 1018.09L431.285 1016.73L423.797 1015.5L416.253 1014.2L408.709 1012.89L402.468 1017.29L396.227 1021.7L389.986 1026.1L383.744 1030.5L376.28 1029.14L368.736 1027.83L361.192 1026.53L353.704 1025.3L346.161 1024L338.617 1022.69L332.376 1027.09L326.213 1031.44L318.67 1030.13L311.126 1028.83L303.582 1027.52L296.094 1026.3L288.551 1024.99L281.086 1023.63L273.542 1022.33L265.998 1021.02L258.51 1019.8L250.967 1018.49L243.423 1017.19L235.958 1015.83L228.414 1014.52L220.871 1013.22L216.47 1006.98L212.069 1000.74L207.724 994.575L203.323 988.334L195.78 987.029L188.236 985.725L181.995 990.126L175.753 994.526L169.591 998.871L163.35 1003.27L162.045 1010.82L166.446 1017.06L173.99 1018.36L180.231 1013.96L186.393 1009.62L192.635 1005.22L198.876 1000.81L205.117 996.414L200.716 990.172L194.475 994.573L188.234 998.974L181.993 1003.37L175.83 1007.72L169.589 1012.12L165.188 1005.88L171.429 1001.48L177.592 997.133L183.833 992.733L190.074 988.332" stroke="#0B5C4D" stroke-width="0.7844" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.27 1034.85L538.575 1027.31L539.879 1019.76L541.161 1012.35L542.465 1004.81L543.77 997.267L545.074 989.723L546.379 982.18L547.739 974.715L548.965 967.227L550.27 959.683L556.511 955.282L562.752 950.881L568.993 946.481L575.235 942.08L581.476 937.679L582.78 930.135" stroke="#0B5C4D" stroke-width="0.9331" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.481 1035.41L528.993 1034.18L521.449 1032.88L513.905 1031.57L506.362 1030.27L498.818 1028.96L492.577 1033.36L485.168 1032.08L477.624 1030.78L470.08 1029.47L462.536 1028.17L454.993 1026.86L447.528 1025.5L440.04 1024.28L432.496 1022.97L424.953 1021.67L417.409 1020.36L409.865 1019.06L402.4 1017.7L394.912 1016.47L387.369 1015.17L379.825 1013.86L372.281 1012.56L364.737 1011.25L357.328 1009.97L349.785 1008.67L342.241 1007.36L334.697 1006.06L327.154 1004.75L319.689 1003.39L312.201 1002.17L304.657 1000.86L297.113 999.559L292.713 993.318L288.312 987.077L280.768 985.772L273.224 984.467L265.815 983.186L258.272 981.881L250.728 980.577L243.184 979.272L235.641 977.968L228.097 976.663L220.688 975.382L213.144 974.077L205.6 972.772L198.057 971.468L191.815 975.868L185.574 980.269L179.333 984.67L173.092 989.071L166.85 993.472L160.688 997.817L159.384 1005.36L158.079 1012.9L162.48 1019.15L170.023 1020.45L177.511 1021.68L184.976 1023.04L192.52 1024.34L200.064 1025.65" stroke="#0B5C4D" stroke-width="0.9391" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.788 1034.84L538.093 1027.29L539.397 1019.75L540.702 1012.21L542.007 1004.66L543.311 997.118L544.593 989.709L545.897 982.165L547.202 974.621L548.507 967.078L549.811 959.534L551.037 952.046L552.397 944.581L553.702 937.037L555.006 929.494L556.311 921.95L557.616 914.406L558.897 906.997L554.496 900.756L550.096 894.515L545.695 888.274L541.294 882.032L536.893 875.791L532.492 869.55L528.092 863.309L523.691 857.067L519.29 850.826L514.889 844.585L510.488 838.344L506.088 832.102L501.687 825.861L497.286 819.62L498.591 812.076L499.951 804.611L501.256 797.068L502.56 789.524L503.865 781.98L505.091 774.492L506.451 767.027L507.756 759.484L509.06 751.94L515.301 747.539L521.543 743.138L527.784 738.738L534.025 734.337" stroke="#0B5C4D" stroke-width="0.8534" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.481 1035.41L528.937 1034.1L521.472 1032.74L513.929 1031.44L506.441 1030.21L498.897 1028.91L491.353 1027.6L483.809 1026.3L477.568 1030.7L470.104 1029.34L462.56 1028.03L455.072 1026.81L447.528 1025.5L439.984 1024.2L432.441 1022.89L424.976 1021.53L417.488 1020.31L409.944 1019L402.4 1017.7L394.857 1016.4L387.392 1015.03L379.848 1013.73L372.36 1012.5L364.817 1011.2L357.273 1009.9L349.729 1008.59L342.264 1007.23L337.864 1000.99L333.463 994.748L329.062 988.506L324.661 982.265L320.316 976.103L315.915 969.862L311.515 963.62L307.114 957.379L302.713 951.138L298.312 944.897L293.912 938.655L289.511 932.414L281.967 931.11L274.423 929.805L266.88 928.5L259.392 927.275L251.927 925.914L247.526 919.673L243.125 913.432L238.725 907.191L234.324 900.949L229.923 894.708L225.522 888.467L221.121 882.226L216.721 875.984L212.32 869.743L207.919 863.502L203.518 857.261L199.118 851.019L194.717 844.778L190.372 838.616L191.597 831.128L192.902 823.584L194.207 816.04L195.511 808.497L196.816 800.953L189.328 799.727L181.784 798.423L174.24 797.118L172.936 804.662L171.71 812.15L170.35 819.615L176.591 815.214L182.832 810.813L189.073 806.412L195.236 802.067" stroke="#0B5C4D" stroke-width="0.8413" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.548 1035L529.06 1033.78L521.517 1032.47L513.973 1031.17L506.429 1029.86L498.886 1028.56L491.477 1027.28L483.933 1025.97L477.692 1030.37L470.148 1029.07L462.604 1027.76L455.06 1026.46L447.596 1025.1L440.108 1023.87L432.564 1022.57L426.323 1026.97L420.081 1031.37L413.84 1035.77L409.439 1029.53L415.681 1025.13" stroke="#0B5C4D" stroke-width="0.6888" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.135 1034.83L529.726 1033.55L525.325 1027.3L520.924 1021.06L516.524 1014.82L512.123 1008.58L507.722 1002.34L503.321 996.098L498.92 989.857L494.52 983.615L490.119 977.374L485.718 971.133L478.174 969.828L470.686 968.603L463.143 967.298L455.599 965.993L448.055 964.689L440.591 963.328L433.047 962.024L425.559 960.798L418.015 959.493L410.471 958.189L402.928 956.884L395.463 955.524L387.919 954.219L380.431 952.994L374.19 957.394L367.949 961.795L361.707 966.196L357.307 959.955L352.906 953.713L354.211 946.17L360.452 941.769L361.756 934.225L363.061 926.681L364.287 919.193L358.045 923.594L356.82 931.082L350.579 935.483L358.043 936.843L359.348 929.3" stroke="#0B5C4D" stroke-width="0.3906" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.525 1035.14L537.83 1027.59L539.111 1020.18L545.352 1015.78L546.657 1008.24L547.962 1000.7L549.266 993.153L550.571 985.609L551.852 978.2L553.157 970.656L554.461 963.113L555.766 955.569L557.071 948.025L558.375 940.482L559.657 933.073L560.961 925.529L562.266 917.985L563.571 910.441L564.875 902.898L566.18 895.354L567.461 887.945L573.702 883.544L579.944 879.143L587.432 880.369L594.975 881.674L602.519 882.978L610.063 884.283L616.225 879.938L622.466 875.537L628.708 871.136L634.949 866.735L641.19 862.335L647.431 857.934L653.673 853.533L659.914 849.132L666.155 844.732L672.396 840.331L678.638 835.93L684.879 831.529L686.183 823.985L681.783 817.744L674.239 816.44L666.695 815.135L659.207 813.909L651.664 812.605L644.199 811.244L636.655 809.94L629.111 808.635L622.87 813.036" stroke="#0B5C4D" stroke-width="0.2469" stroke-linecap="round" stroke-linejoin="round"></path><path d="M536.572 1034.87L529.029 1033.56L521.485 1032.26L514.02 1030.9L506.532 1029.67L498.988 1028.37L492.747 1032.77L485.204 1031.47L477.66 1030.16L470.195 1028.8L462.707 1027.57L455.163 1026.27L447.62 1024.97L440.076 1023.66L432.532 1022.36L425.067 1021L417.579 1019.77L410.036 1018.47L402.492 1017.16L394.948 1015.86L387.484 1014.5L379.94 1013.19L372.452 1011.97L366.211 1016.37L364.85 1023.83L357.362 1022.61L349.819 1021.3L342.354 1019.94L334.81 1018.64L327.266 1017.33L319.723 1016.03L325.964 1011.63L332.205 1007.22L336.606 1013.47" stroke="#0B5C4D" stroke-width="0.5911" stroke-linecap="round" stroke-linejoin="round"></path><path d="M529.455 1033.5L523.214 1037.9L516.973 1042.3" stroke="#0B5C4D" stroke-width="0.6023" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.781 1027.86L533.38 1021.62L528.979 1015.38L524.579 1009.14L520.178 1002.9L515.777 996.657L511.432 990.494L507.031 984.253L502.63 978.012L498.23 971.771L493.829 965.529L489.428 959.288L485.027 953.047L480.627 946.806L476.226 940.564L471.825 934.323L467.424 928.082L463.023 921.841L464.328 914.297L465.554 906.809L466.914 899.344L468.219 891.801L469.523 884.257L470.828 876.713L472.133 869.169L473.414 861.76L474.718 854.217L476.023 846.673L477.328 839.129L478.632 831.586L474.232 825.344L469.831 819.103L465.43 812.862L461.029 806.621L456.684 800.458L452.283 794.217L447.883 787.976L443.482 781.735L439.081 775.493L434.68 769.252L430.28 763.011L431.505 755.523L432.81 747.979L434.114 740.435L435.475 732.971L436.779 725.427L438.084 717.883L433.683 711.642L429.282 705.401L424.882 699.159L420.481 692.918L416.08 686.677L411.679 680.436L407.279 674.194L402.878 667.953L398.477 661.712L394.076 655.471L389.675 649.229L385.33 643.067L380.93 636.826L376.529 630.585L368.985 629.28L361.441 627.976L353.898 626.671L346.354 625.366L338.866 624.141L331.401 622.78L323.858 621.476L316.314 620.171L308.77 618.866L301.226 617.562L293.817 616.28L286.274 614.976L278.73 613.671L271.186 612.367L264.945 616.767L258.704 621.168L257.399 628.712L256.173 636.2L254.869 643.744L253.508 651.208L247.267 655.609L241.026 660.01L234.785 664.411L228.543 668.811L222.302 673.212L216.061 677.613L209.82 682.014L203.578 686.414L197.337 690.815L191.096 695.216L184.855 699.617L177.446 698.335L171.204 702.736L164.963 707.137L158.722 711.538L152.481 715.939L146.239 720.339L139.998 724.74L132.454 723.436L124.911 722.131L117.446 720.771L109.902 719.466L114.303 725.707L118.704 731.948L123.105 738.19L127.505 744.431L131.906 750.672" stroke="#0B5C4D" stroke-width="0.313" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.853 1027.46L533.452 1021.22L529.052 1014.98L524.707 1008.82L520.306 1002.58L515.905 996.334L511.504 990.093L507.103 983.852L502.703 977.61L498.302 971.369L493.901 965.128L486.357 963.823" stroke="#0B5C4D" stroke-width="0.9088" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.853 1027.46L544.095 1023.06L550.336 1018.66L556.577 1014.26L562.819 1009.86L569.06 1005.46L575.301 1001.06L582.766 1002.42L578.365 996.175" stroke="#0B5C4D" stroke-width="0.6333" stroke-linecap="round" stroke-linejoin="round"></path><path d="M529.782 1033.63L525.381 1027.38L520.981 1021.14L516.58 1014.9L512.179 1008.66L507.778 1002.42L503.378 996.179L498.977 989.937L494.576 983.696L490.175 977.455L485.774 971.214L481.374 964.973L476.973 958.731L472.572 952.49L468.171 946.249L460.762 944.967L453.219 943.663L445.675 942.358L439.434 946.759" stroke="#0B5C4D" stroke-width="0.8594" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.877 1027.32L544.118 1022.92L550.359 1018.52L556.601 1014.12L562.842 1009.72L569.083 1005.32L575.245 1000.98L582.789 1002.28L578.388 996.038" stroke="#0B5C4D" stroke-width="0.9468" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.854 1027.46L533.453 1021.22L529.052 1014.98L530.357 1007.43L525.956 1001.19L521.555 994.949L517.154 988.708L512.754 982.467L508.353 976.226L503.952 969.984L499.551 963.743L495.15 957.502L490.75 951.261L492.11 943.796L493.415 936.252L494.719 928.709L496.024 921.165L491.623 914.924L487.222 908.682L482.821 902.441L478.421 896.2L470.877 894.895L472.237 887.431L473.463 879.942L479.704 875.542L484.105 881.783L485.41 874.239L481.009 867.998L476.608 861.757L475.303 869.3L473.999 876.844" stroke="#0B5C4D" stroke-width="0.4407" stroke-linecap="round" stroke-linejoin="round"></path><path d="M529.591 1033.52L525.19 1027.28L520.79 1021.04L516.389 1014.8L508.845 1013.49L501.302 1012.19L493.814 1010.96L486.27 1009.66L478.805 1008.3L471.261 1006.99L463.718 1005.69L456.174 1004.39L448.686 1003.16L441.221 1001.8L433.677 1000.49L426.134 999.19L418.59 997.885L411.102 996.66L404.861 1001.06L397.317 999.756L389.852 998.396L382.309 997.091" stroke="#0B5C4D" stroke-width="0.5963" stroke-linecap="round" stroke-linejoin="round"></path><path d="M529.185 1033.45L524.784 1027.21L517.241 1025.91L509.697 1024.6L502.209 1023.38L494.744 1022.02L487.201 1020.71L479.657 1019.41L472.113 1018.1L464.569 1016.8L457.081 1015.57L449.617 1014.21L442.073 1012.91L434.529 1011.6L426.985 1010.3L419.497 1009.07L412.033 1007.71L404.489 1006.41L396.945 1005.1L389.402 1003.8L381.858 1002.49L374.37 1001.27L366.905 999.908L359.361 998.603L351.818 997.299L344.274 995.994L336.73 994.689L329.242 993.464L321.778 992.103L317.377 985.862L312.976 979.621L308.575 973.38L304.174 967.138L305.4 959.65L306.705 952.107L308.065 944.642L309.37 937.098L313.77 943.339L318.171 949.581L325.659 950.806L330.06 957.048L323.819 961.448L319.418 955.207" stroke="#0B5C4D" stroke-width="0.4577" stroke-linecap="round" stroke-linejoin="round"></path><path d="M529.59 1033.52L523.349 1037.92L517.107 1042.32" stroke="#0B5C4D" stroke-width="0.2969" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.809 1027.73L544.05 1023.33L550.291 1018.93L556.453 1014.58L562.695 1010.18L568.936 1005.78L575.177 1001.38" stroke="#0B5C4D" stroke-width="0.7848" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.877 1027.32L544.118 1022.92L550.359 1018.52L556.601 1014.12L562.842 1009.72L569.083 1005.32L575.324 1000.92L582.868 1002.22L578.467 995.983" stroke="#0B5C4D" stroke-width="0.495" stroke-linecap="round" stroke-linejoin="round"></path><path d="M530.399 1033.66L525.998 1027.42L521.597 1021.18L517.197 1014.94L512.796 1008.7L508.395 1002.46L503.994 996.215L499.593 989.974L495.193 983.733L490.792 977.492L486.391 971.25L481.99 965.009L477.589 958.768L473.189 952.527L468.788 946.285L464.387 940.044L460.042 933.882L461.268 926.394L456.867 920.153L452.466 913.911L448.065 907.67L443.665 901.429L439.264 895.188L434.863 888.946L430.462 882.705L426.061 876.464L421.661 870.223L414.196 868.862L406.708 867.637L399.164 866.332L391.621 865.027L384.077 863.723L376.533 862.418L369.068 861.058L375.31 856.657L381.472 852.312L389.016 853.616L396.559 854.921L404.103 856.226L411.647 857.53L405.406 861.931L412.949 863.236" stroke="#0B5C4D" stroke-width="0.4453" stroke-linecap="round" stroke-linejoin="round"></path><path d="M530.265 1033.64L522.721 1032.34L515.177 1031.03L507.689 1029.81L500.225 1028.45L492.681 1027.14L485.137 1025.84L478.896 1030.24L472.655 1034.64L471.35 1042.18L478.894 1043.49L486.437 1044.79" stroke="#0B5C4D" stroke-width="0.4044" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.739 1028.13L539.044 1020.59L540.349 1013.05L541.653 1005.5L542.958 997.958L544.318 990.493L545.544 983.005L546.849 975.462L548.153 967.918L549.458 960.374L550.763 952.831L552.044 945.422L553.348 937.878L554.653 930.334L555.958 922.79L557.262 915.247L552.862 909.005L548.461 902.764L544.06 896.523L539.715 890.361L535.314 884.119L530.913 877.878L526.513 871.637L522.112 865.396L517.711 859.155L513.31 852.913L508.91 846.672L504.509 840.431L500.108 834.189L495.707 827.948L491.306 821.707L486.906 815.466L482.505 809.225L478.104 802.983L473.703 796.742L469.302 790.501L464.902 784.259L460.501 778.018L456.1 771.777L451.755 765.615L447.354 759.374L442.954 753.132L438.553 746.891L434.152 740.65L429.751 734.409L425.35 728.167L417.807 726.863L413.406 720.621L409.005 714.38L404.604 708.139L400.204 701.898L395.803 695.656L388.315 694.431L382.074 698.832L375.832 703.232L369.591 707.633L363.35 712.034L357.109 716.435L350.867 720.835L344.626 725.236L343.345 732.645L342.04 740.189L340.735 747.733L339.431 755.276L338.126 762.82L336.845 770.229L335.54 777.773L334.236 785.317L341.779 786.621L349.323 787.926L356.788 789.286L364.276 790.512L371.819 791.816L379.363 793.121L386.907 794.426L394.372 795.786L401.915 797.091L409.403 798.316L415.645 793.916L421.886 789.515L428.127 785.114L434.368 780.713L438.769 786.954L443.17 793.196L447.571 799.437L446.266 806.981L444.961 814.524L443.657 822.068L437.494 826.413L431.253 830.814L425.012 835.215L418.771 839.616L412.529 844.016L416.93 850.258L421.331 856.499L425.676 862.661L430.077 868.902L431.437 861.438L427.036 855.196L422.636 848.955L418.235 842.714L413.834 836.473L409.433 830.231L405.033 823.99L400.632 817.749L393.088 816.444L388.687 810.203L384.286 803.962" stroke="#0B5C4D" stroke-width="0.4044" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.645 1028.67L538.926 1021.26L540.231 1013.72L541.536 1006.17L542.84 998.631L544.145 991.087L545.45 983.543L546.731 976.134L548.036 968.591L549.34 961.047L550.645 953.503L551.949 945.96L553.31 938.495L554.535 931.007L555.84 923.463L557.145 915.919L558.449 908.376L559.754 900.832L561.035 893.423L562.34 885.879L563.645 878.336L564.949 870.792L566.254 863.248L567.558 855.704L568.84 848.295L575.081 843.895L581.322 839.494L587.564 835.093L593.805 830.692L600.046 826.292L606.287 821.891L612.529 817.49L618.77 813.089L625.011 808.688L631.252 804.288L637.494 799.887L644.982 801.112L652.446 802.473L659.99 803.777L667.534 805.082L675.077 806.387L679.478 812.628" stroke="#0B5C4D" stroke-width="0.646" stroke-linecap="round" stroke-linejoin="round"></path><path d="M530.536 1033.69L522.992 1032.38L515.448 1031.08L507.96 1029.85L503.559 1023.61L499.159 1017.37L494.758 1011.13L490.357 1004.89L485.956 998.646L481.555 992.405L477.155 986.163L469.69 984.803L462.146 983.499L455.905 987.899L449.664 992.3L445.263 986.059L440.862 979.818L436.461 973.576L432.061 967.335" stroke="#0B5C4D" stroke-width="1.0352" stroke-linecap="round" stroke-linejoin="round"></path><path d="M530.128 1033.61L522.64 1032.39L515.175 1031.03L507.631 1029.72L500.087 1028.42L492.544 1027.12L485 1025.81L477.512 1024.58L470.047 1023.22L463.806 1027.63L457.565 1032.03L456.26 1039.57L460.661 1045.81" stroke="#0B5C4D" stroke-width="0.6525" stroke-linecap="round" stroke-linejoin="round"></path><path d="M530.129 1033.62L522.585 1032.31L515.041 1031.01L507.553 1029.78L503.152 1023.54L498.752 1017.3L494.351 1011.06L489.95 1004.82L491.255 997.273L492.559 989.729" stroke="#0B5C4D" stroke-width="0.6851" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.668 1028.54L538.949 1021.13L540.254 1013.59L541.559 1006.04" stroke="#0B5C4D" stroke-width="0.6192" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.714 1028.27L538.995 1020.86L540.3 1013.32L541.605 1005.77L542.909 998.229L544.214 990.685L545.574 983.22L546.8 975.732L548.104 968.188L549.409 960.645L550.714 953.101L552.018 945.557L553.3 938.148L554.604 930.605L555.909 923.061L557.214 915.517L558.518 907.973L559.823 900.43L561.104 893.021L562.409 885.477L563.713 877.933L565.018 870.389L566.323 862.846L567.683 855.381L568.909 847.893L570.213 840.349L576.454 835.949L582.696 831.548L588.937 827.147L595.178 822.746L601.419 818.345L607.661 813.945L613.902 809.544L615.207 802L616.432 794.512L617.737 786.968L619.097 779.504L620.402 771.96L621.706 764.416L623.011 756.873L618.61 750.631L619.836 743.143L621.196 735.679L622.501 728.135L623.806 720.591L625.11 713.047L626.415 705.504L627.64 698.016L629.001 690.551L630.305 683.007L631.61 675.463L632.915 667.92L634.14 660.432L635.445 652.888L636.805 645.423L643.047 641.023L649.288 636.622L655.529 632.221L661.77 627.82L663.075 620.276L664.38 612.733L665.605 605.245L666.91 597.701L668.214 590.157L674.456 585.757L680.697 581.356L686.938 576.955L693.179 572.554L699.421 568.153L705.662 563.753L711.903 559.352L718.144 554.951L724.386 550.55L730.548 546.205L736.789 541.804L743.03 537.404L749.272 533.003L755.513 528.602L756.873 521.137L758.178 513.594L759.483 506.05L760.787 498.506L762.013 491.018L763.373 483.554L764.678 476.01L765.982 468.466L767.287 460.922L762.886 454.681L758.486 448.44L754.085 442.199L749.684 435.957L745.283 429.716L740.882 423.475L736.482 417.234L737.842 409.769L739.068 402.281L740.372 394.737L741.677 387.193L742.981 379.65L744.342 372.185L745.567 364.697L746.872 357.153L748.177 349.61L749.481 342.066L750.786 334.522L752.146 327.057L753.372 319.569L754.677 312.026" stroke="#0B5C4D" stroke-width="0.6256" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.713 1028.27L539.018 1020.72L540.323 1013.18L541.604 1005.77L542.909 998.227L544.213 990.683L545.518 983.14L541.117 976.898L536.716 970.657L532.316 964.416L527.915 958.175L523.514 951.933L519.113 945.692L514.713 939.451L510.367 933.289L505.967 927.047L501.566 920.806L497.165 914.565L498.47 907.021L499.774 899.477L501 891.989L496.599 885.748L492.198 879.507L487.798 873.266L483.397 867.024L478.996 860.783L474.651 854.621L470.25 848.38L465.849 842.138L458.385 840.778L457.08 848.322L455.72 855.787L454.415 863.33L453.111 870.874L451.806 878.418L450.58 885.906" stroke="#0B5C4D" stroke-width="0.4966" stroke-linecap="round" stroke-linejoin="round"></path><path d="M530.534 1033.69L522.99 1032.38L515.447 1031.08L507.903 1029.77L500.359 1028.47L492.871 1027.24L485.407 1025.88L477.863 1024.58L470.319 1023.27L462.775 1021.97L455.287 1020.74L447.823 1019.38L440.279 1018.08L432.735 1016.77L425.192 1015.47L418.95 1019.87L412.709 1024.27L406.468 1028.67L400.227 1033.07L393.985 1037.47L387.744 1041.87L395.288 1043.18" stroke="#0B5C4D" stroke-width="0.4596" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.596 1028.94L538.901 1021.4L540.206 1013.85L541.487 1006.45L542.792 998.902L544.096 991.359L545.401 983.815L546.705 976.271L548.01 968.727L549.291 961.318L550.596 953.775L551.901 946.231L553.205 938.687L554.51 931.144L555.87 923.679L557.096 916.191L552.695 909.949L548.294 903.708L543.894 897.467L539.493 891.226L535.092 884.984L530.691 878.743L526.291 872.502L521.89 866.261L517.489 860.02L513.088 853.778L508.687 847.537L504.287 841.296L499.886 835.055L495.485 828.813L491.084 822.572L486.739 816.41L482.338 810.169L477.938 803.927L479.242 796.384L480.547 788.84L481.851 781.296L483.156 773.752L478.755 767.511L474.355 761.27L469.954 755.029L465.609 748.866L461.208 742.625L456.807 736.384L452.406 730.143L448.006 723.901L443.605 717.66L439.204 711.419L434.803 705.178L430.402 698.936L426.002 692.695L421.601 686.454L417.2 680.213L412.799 673.971L414.025 666.483L418.426 672.725L422.826 678.966" stroke="#0B5C4D" stroke-width="0.5971" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.503 1029.48L533.102 1023.24L528.701 1017L524.3 1010.76L519.9 1004.52L515.499 998.274L511.098 992.033L506.697 985.791L502.297 979.55L497.896 973.309L493.495 967.068L489.15 960.905L484.749 954.664L480.348 948.423L475.948 942.182L471.547 935.94L467.146 929.699L468.451 922.155L469.755 914.612L471.06 907.068L472.286 899.58L473.646 892.115L474.951 884.572L470.55 878.33L466.149 872.089L467.454 864.545L468.758 857.002L470.063 849.458L471.344 842.049L472.649 834.505L473.953 826.961L475.258 819.418L476.563 811.874L477.844 804.465L479.149 796.921L480.453 789.378L481.758 781.834L483.063 774.29L484.367 766.746L485.649 759.337L486.953 751.794L488.258 744.25L489.562 736.706L490.867 729.163L492.172 721.619L493.453 714.21L494.758 706.666L496.062 699.122L497.367 691.579L498.672 684.035L499.953 676.626L501.258 669.082L502.562 661.539L503.867 653.995L505.171 646.451L506.476 638.907L502.075 632.666L497.73 626.504L493.33 620.263L488.929 614.021L481.385 612.717L476.984 606.476L478.289 598.932" stroke="#0B5C4D" stroke-width="0.6763" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.506 1029.48L538.811 1021.94L540.115 1014.39L541.42 1006.85L542.725 999.305L544.085 991.841L545.31 984.353L540.91 978.111L536.509 971.87L537.814 964.326L539.118 956.783L540.423 949.239L541.727 941.695L543.009 934.286L544.313 926.742L545.618 919.199L546.923 911.655L548.227 904.111L549.588 896.647L550.813 889.159L552.118 881.615L553.423 874.071L554.727 866.527L556.032 858.984L557.392 851.519L558.618 844.031L559.922 836.487L555.522 830.246L551.121 824.005L546.72 817.763L539.176 816.459L532.935 820.86L531.71 828.348L536.11 834.589L540.511 840.83L544.912 847.071L549.313 853.313L550.538 845.825L546.137 839.583L541.737 833.342L537.336 827.101L544.88 828.405L552.423 829.71L558.665 825.309L566.208 826.614L564.904 834.158L563.543 841.622L562.239 849.166L561.013 856.654L559.708 864.198" stroke="#0B5C4D" stroke-width="0.6337" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.597 1028.94L538.878 1021.53L534.477 1015.29L530.077 1009.05L525.676 1002.81L521.275 996.568L516.874 990.327L512.473 984.086L508.073 977.845L503.672 971.603L499.271 965.362L494.87 959.121L490.47 952.88L486.069 946.638L481.668 940.397L477.267 934.156L472.866 927.915L468.466 921.673L464.065 915.432L459.72 909.27L455.319 903.029L450.918 896.787L446.517 890.546L442.117 884.305L437.716 878.064L430.251 876.703L425.85 870.462L421.45 864.221L417.049 857.98L412.648 851.738L408.247 845.497L403.846 839.256L399.446 833.015L395.045 826.773L390.644 820.532L386.299 814.37L381.898 808.129L377.497 801.887L373.097 795.646L365.553 794.341L358.009 793.037L350.466 791.732L342.922 790.428L335.513 789.146L327.969 787.842L323.568 781.6L319.167 775.359L314.767 769.118L316.071 761.574L317.297 754.086L318.602 746.542L314.201 740.301L309.856 734.139L305.455 727.898L301.054 721.656L296.653 715.415L292.253 709.174L287.852 702.933L283.451 696.691L279.05 690.45L274.65 684.209L270.249 677.968L265.848 671.726L261.447 665.485L257.046 659.244L252.646 653.003L248.245 646.761L249.549 639.218L250.91 631.753L252.214 624.209L253.44 616.721L254.745 609.178L256.049 601.634L251.649 595.393L247.248 589.151L242.847 582.91L238.502 576.748L234.101 570.507L229.7 564.265L225.3 558.024L220.899 551.783L216.498 545.542L217.803 537.998L219.107 530.454L220.412 522.91L221.693 515.501L222.998 507.958L224.302 500.414L225.607 492.87L226.912 485.327L228.137 477.839L229.498 470.374L230.802 462.83L232.107 455.286L233.412 447.743L229.011 441.501L224.61 435.26L220.209 429.019L215.808 422.778L211.408 416.536L203.92 415.311L196.376 414.006L188.832 412.702L181.289 411.397L173.824 410.037L166.28 408.732L158.792 407.506L151.248 406.202" stroke="#0B5C4D" stroke-width="0.9609" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.552 1029.21L538.857 1021.67L540.162 1014.12L541.466 1006.58L542.771 999.035L544.131 991.57L545.357 984.082L546.662 976.538L547.966 968.994L549.271 961.451L550.575 953.907L551.857 946.498L553.161 938.954L548.761 932.713L544.36 926.472L539.959 920.231L535.558 913.989L531.158 907.748L526.757 901.507L522.356 895.266L517.955 889.024L513.554 882.783L509.154 876.542L504.753 870.301L500.352 864.059L495.951 857.818L497.312 850.353L498.616 842.81L499.921 835.266L501.226 827.722L502.451 820.234L503.756 812.69L505.116 805.226L506.421 797.682L512.662 793.281L513.967 785.738" stroke="#0B5C4D" stroke-width="0.6248" stroke-linecap="round" stroke-linejoin="round"></path><path d="M530.67 1033.71L523.126 1032.4L515.638 1031.18L508.173 1029.82L500.629 1028.51L493.086 1027.21L485.542 1025.9L478.054 1024.68L470.589 1023.32L463.045 1022.01L455.502 1020.71L447.958 1019.4L440.414 1018.1L432.926 1016.87L425.462 1015.51L417.918 1014.21L410.374 1012.9L404.133 1017.3L397.892 1021.71L391.65 1026.11L385.409 1030.51L379.168 1034.91L372.927 1039.31L366.685 1043.71L362.285 1037.47L357.884 1031.23L350.34 1029.92L354.741 1036.16L359.142 1042.4L357.916 1049.89L351.675 1054.29L344.131 1052.99L336.587 1051.68L329.099 1050.46L321.556 1049.15L314.091 1047.79L306.547 1046.49L299.004 1045.18L291.46 1043.88L283.972 1042.65L277.731 1047.06L271.489 1051.46L265.248 1055.86" stroke="#0B5C4D" stroke-width="0.7054" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.551 1029.21L538.855 1021.67L540.16 1014.12L541.441 1006.72L542.746 999.172L544.05 991.628L545.355 984.084L546.66 976.54L547.964 968.997L549.246 961.588L550.55 954.044L551.855 946.5L547.454 940.259L543.053 934.018L538.653 927.776L539.957 920.233L535.556 913.992L531.156 907.75L526.755 901.509L522.354 895.268L518.009 889.106L513.608 882.864L509.207 876.623L504.807 870.382L500.406 864.14L496.005 857.899L491.604 851.658L487.204 845.417L482.803 839.176L478.402 832.934L474.001 826.693L466.458 825.388L462.057 819.147" stroke="#0B5C4D" stroke-width="1.0249" stroke-linecap="round" stroke-linejoin="round"></path><path d="M531.071 1033.78L523.527 1032.47L516.039 1031.25L508.574 1029.89L501.031 1028.58L493.487 1027.28L485.943 1025.97L478.399 1024.67L470.911 1023.44L463.447 1022.08L459.046 1015.84L454.645 1009.6L450.244 1003.36L445.844 997.119L441.443 990.878L437.042 984.637L432.641 978.395L428.24 972.154L423.84 965.913L419.439 959.672L415.038 953.43L410.637 947.189L406.292 941.027L401.891 934.786L397.491 928.544L393.09 922.303L388.689 916.062L381.145 914.757L373.602 913.453L366.058 912.148L358.514 910.843L351.105 909.562L343.561 908.257L336.018 906.953L328.474 905.648L320.93 904.343L313.387 903.039L305.978 901.758L298.434 900.453L290.89 899.148L283.346 897.844L275.803 896.539L268.315 895.313L260.85 893.953L254.609 898.354L248.368 902.755L247.063 910.298" stroke="#0B5C4D" stroke-width="1.0792" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.617 1028.81L538.922 1021.26L540.227 1013.72L541.531 1006.18L542.813 998.767L544.117 991.223L545.422 983.679L546.727 976.136L548.031 968.592L549.313 961.183L550.617 953.639L551.922 946.096L553.226 938.552L554.531 931.008L555.836 923.464L557.117 916.055L558.422 908.512L559.726 900.968L555.326 894.727L550.925 888.485L546.524 882.244L542.123 876.003L537.722 869.762L533.322 863.52L528.921 857.279L524.52 851.038L520.119 844.797L515.719 838.555L511.373 832.393L506.973 826.152L502.572 819.911L503.877 812.367L505.181 804.823L506.486 797.28L507.711 789.792L509.072 782.327L504.671 776.086L500.27 769.844L495.869 763.603L491.469 757.362L487.068 751.121L482.667 744.879L478.266 738.638L473.866 732.397L469.465 726.156L465.064 719.914L460.663 713.673L456.262 707.432L451.862 701.191L447.461 694.949L443.06 688.708L438.659 682.467L431.171 681.241L432.476 673.698L433.781 666.154L435.085 658.61L436.39 651.066L437.694 643.523L438.976 636.114L445.217 631.713L451.458 627.312L457.7 622.911L463.941 618.511L470.182 614.11L465.781 607.868L461.38 601.627L453.837 600.323L446.293 599.018L447.598 591.474L453.839 587.073L460.08 582.673L464.481 588.914L468.882 595.155L467.577 602.699L463.176 596.458L458.776 590.216L452.534 594.617L460.078 595.922" stroke="#0B5C4D" stroke-width="0.6441" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.552 1029.21L538.856 1021.67L540.161 1014.12L541.442 1006.71L542.747 999.171L544.052 991.627L545.356 984.083L546.661 976.539L547.966 968.996L549.247 961.587L550.551 954.043L551.856 946.499L553.161 938.956L554.465 931.412L555.826 923.947L557.051 916.459" stroke="#0B5C4D" stroke-width="0.589" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.621 1028.81L538.926 1021.26L540.23 1013.72L541.535 1006.18L542.816 998.768L544.121 991.224L545.425 983.68L546.73 976.137L548.035 968.593L549.339 961.049L550.621 953.64L551.925 946.097L553.23 938.553L554.535 931.009L555.839 923.465L551.438 917.224L547.038 910.983L542.637 904.742L538.292 898.579L533.891 892.338L529.49 886.097L525.089 879.856L520.689 873.614L516.288 867.373L511.887 861.132L507.486 854.891L503.086 848.649L498.685 842.408L494.284 836.167L489.883 829.926L485.482 823.684L481.082 817.443L473.538 816.138" stroke="#0B5C4D" stroke-width="0.6087" stroke-linecap="round" stroke-linejoin="round"></path><path d="M531.473 1033.85L527.072 1027.61L522.672 1021.37L518.271 1015.12L513.87 1008.88L509.469 1002.64L505.069 996.4L500.668 990.159L496.267 983.918L491.922 977.756L487.521 971.514L483.12 965.273L478.72 959.032L474.319 952.791L469.918 946.549L465.517 940.308L461.116 934.067L456.716 927.826L452.315 921.584L447.914 915.343L443.513 909.102L439.113 902.861L434.712 896.619L430.311 890.378L431.616 882.834L432.976 875.37L434.202 867.882L435.506 860.338L436.811 852.794L438.115 845.251L439.42 837.707L440.701 830.298L446.943 825.897L448.247 818.353L449.552 810.81L450.857 803.266" stroke="#0B5C4D" stroke-width="1.0759" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.433 1029.88L533.032 1023.64L528.631 1017.4L524.231 1011.16L519.83 1004.92L515.429 998.678L511.028 992.437L506.628 986.196L502.227 979.955L497.826 973.713L493.481 967.551L489.08 961.31L484.679 955.069L480.279 948.827L475.878 942.586L471.477 936.345L467.076 930.104L462.675 923.862L458.275 917.621L453.874 911.38L449.473 905.139L445.072 898.897L446.377 891.354L447.682 883.81L448.963 876.401L450.267 868.857L451.572 861.313L452.877 853.77L454.181 846.226L455.542 838.761L456.767 831.273L463.009 826.873L464.313 819.329" stroke="#0B5C4D" stroke-width="0.6925" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.457 1029.75L533.056 1023.51L528.655 1017.27L524.255 1011.03L519.854 1004.78L515.453 998.543L511.052 992.301L506.707 986.139L502.306 979.898L497.906 973.657L493.505 967.415L489.104 961.174L484.703 954.933L480.302 948.692L475.902 942.45L477.206 934.907L472.806 928.665L468.405 922.424L464.004 916.183L459.603 909.942L455.202 903.7L456.563 896.236L457.788 888.748L459.093 881.204L460.398 873.66L461.702 866.117L463.007 858.573L464.288 851.164L465.593 843.62L466.898 836.076L468.202 828.533L469.507 820.989L470.811 813.445L472.093 806.036L473.397 798.493L474.702 790.949L476.007 783.405L477.311 775.861L478.593 768.452L479.897 760.909L475.497 754.667L471.096 748.426L466.695 742.185L462.294 735.944L457.893 729.702L453.493 723.461L449.092 717.22L444.691 710.979L440.29 704.737L435.889 698.496L431.489 692.255L427.088 686.014L428.448 678.549L429.753 671.005L431.058 663.462L432.362 655.918L433.588 648.43L434.892 640.886L436.253 633.421L437.557 625.878L438.862 618.334L440.167 610.79L441.392 603.302L442.697 595.759L444.057 588.294L445.362 580.75L446.667 573.206L447.971 565.663L443.57 559.421L439.17 553.18L434.769 546.939L430.368 540.698L425.967 534.456L421.566 528.215L414.078 526.99L406.535 525.685L398.991 524.38L391.447 523.076L383.904 521.771L376.495 520.49L368.951 519.185L361.407 517.88L353.863 516.576L346.32 515.271L338.776 513.966L331.367 512.685L323.823 511.381L316.28 510.076L308.736 508.771L301.192 507.467L293.648 506.162L286.239 504.881L278.696 503.576L274.295 497.335L269.894 491.094L265.493 484.852L261.093 478.611L256.692 472.37L252.291 466.129L247.89 459.887L243.489 453.646L239.089 447.405L240.449 439.94L241.675 432.452L242.979 424.908L244.284 417.365L245.589 409.821L246.893 402.277" stroke="#0B5C4D" stroke-width="1.1122" stroke-linecap="round" stroke-linejoin="round"></path><path d="M532.015 1033.94L527.614 1027.7L523.213 1021.46L518.812 1015.22L514.467 1009.06L510.067 1002.81L505.666 996.573L501.265 990.332L496.864 984.091L492.463 977.85L488.063 971.608L483.662 965.367L479.261 959.126L474.86 952.884L470.46 946.643L466.059 940.402L461.658 934.161L457.257 927.92L452.856 921.678L448.456 915.437L444.055 909.196L436.567 907.97L432.166 901.729L424.701 900.369L417.158 899.064L409.614 897.759L402.07 896.455L394.582 895.229L390.181 888.988L385.781 882.747L381.38 876.505L376.979 870.264L372.578 864.023L368.177 857.782L363.777 851.54L359.376 845.299L354.975 839.058L350.574 832.817L346.174 826.575L341.773 820.334L337.372 814.093L332.971 807.852L328.57 801.61L324.17 795.369L316.682 794.143L309.217 792.783L301.673 791.478L294.129 790.174L286.586 788.869L279.042 787.565L271.554 786.339L264.089 784.979L256.546 783.674L249.002 782.369L241.458 781.065L233.97 779.839L226.505 778.479L218.962 777.174L211.418 775.869L203.874 774.565L196.331 773.26L188.843 772.035L182.601 776.435L176.439 780.78L170.198 785.181L162.654 783.877L155.11 782.572L147.567 781.267L140.023 779.963L132.479 778.658L125.07 777.377L117.527 776.072L109.983 774.767L102.439 773.463L96.1978 777.864L88.6541 776.559L84.2533 770.318L79.8525 764.076L75.4518 757.835L71.1067 751.673L66.7059 745.432L62.3051 739.19L57.9043 732.949L53.5036 726.708L49.1028 720.467L44.702 714.225L40.3012 707.984L35.9004 701.743L31.4996 695.502L27.0989 689.261L19.6341 687.9L12.0905 686.596L4.60241 685.37L-2.94129 684.065L-10.485 682.761L-18.0287 681.456L-25.4935 680.096L-33.0371 678.791L-40.5252 677.565L-48.0689 676.261L-55.6126 674.956L-63.0773 673.596L-70.621 672.291L-78.109 671.066L-85.6528 669.761L-93.1965 668.456L-97.5973 662.215L-101.998 655.974" stroke="#0B5C4D" stroke-width="0.2485" stroke-linecap="round" stroke-linejoin="round"></path><path d="M531.61 1033.87L527.21 1027.63L522.809 1021.39L518.408 1015.15L514.007 1008.91L509.607 1002.67L505.206 996.425L500.805 990.184L496.404 983.943L492.003 977.701L487.603 971.46L483.202 965.219L478.801 958.978L474.4 952.737L470.055 946.574L465.654 940.333L461.254 934.092L456.853 927.851L449.309 926.546L441.765 925.241L434.222 923.937L426.678 922.632L419.269 921.351L411.725 920.046L404.182 918.741L396.638 917.437L389.094 916.132L381.55 914.827L374.141 913.546L366.598 912.242L372.839 907.841L365.295 906.536L357.752 905.231L350.208 903.927L342.664 902.622" stroke="#0B5C4D" stroke-width="0.4737" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.411 1030.02L533.01 1023.78L528.665 1017.62L524.264 1011.37L519.863 1005.13L515.463 998.892L511.062 992.651L506.661 986.41L502.26 980.168L497.859 973.927L493.459 967.686L489.058 961.445L484.657 955.203L480.256 948.962L475.856 942.721L471.455 936.48L467.054 930.238L462.653 923.997L455.109 922.693" stroke="#0B5C4D" stroke-width="0.6637" stroke-linecap="round" stroke-linejoin="round"></path><path d="M532.015 1033.94L527.67 1027.78L523.269 1021.54L518.868 1015.3L514.467 1009.06L510.067 1002.82L503.825 1007.22L496.361 1005.86L491.96 999.614L487.559 993.373L483.158 987.132" stroke="#0B5C4D" stroke-width="0.3762" stroke-linecap="round" stroke-linejoin="round"></path><path d="M531.613 1033.87L527.212 1027.63L522.811 1021.39L518.41 1015.15L514.01 1008.91L509.609 1002.67L505.208 996.425L500.807 990.184L496.406 983.943L492.006 977.701L487.605 971.46L483.204 965.219L478.803 958.978L474.403 952.736L470.002 946.495L465.601 940.254L461.256 934.092L456.855 927.85L449.311 926.546L441.768 925.241L434.224 923.936L426.68 922.632L419.137 921.327L414.792 915.165L410.391 908.924L402.926 907.563L395.382 906.259L387.839 904.954L380.295 903.649L372.751 902.345L365.263 901.119L357.798 899.759L350.255 898.454L342.711 897.15L335.167 895.845L327.679 894.619L323.278 888.378L318.878 882.137L314.477 875.896L310.076 869.654L305.675 863.413L301.275 857.172L296.874 850.931L292.473 844.689L288.072 838.448L283.671 832.207L279.271 825.966L274.87 819.724L270.469 813.483L266.068 807.242L261.668 801.001L257.267 794.759L252.866 788.518L248.521 782.356L241.056 780.996L233.512 779.691L225.969 778.386L218.425 777.082L210.881 775.777L203.393 774.551L195.929 773.191L188.385 771.886L180.841 770.582L173.297 769.277L165.754 767.973L158.266 766.747L150.801 765.387L143.257 764.082L135.714 762.777L131.313 756.536L126.912 750.295L122.511 744.054L118.11 737.812L113.71 731.571L109.309 725.33L104.908 719.089L100.563 712.926L96.1622 706.685L91.7614 700.444L87.3606 694.203L82.9599 687.961L78.5591 681.72L74.1583 675.479L75.4629 667.935L76.7676 660.391L77.9932 652.903L79.3535 645.439L80.6582 637.895L81.9628 630.351L83.2674 622.808L84.5721 615.264L85.7977 607.776L81.4526 601.614L77.0519 595.372L69.5872 594.012L62.0434 592.707L55.8022 597.108L49.5609 601.509L43.3197 605.91L37.0784 610.31L30.8372 614.711L24.5959 619.112L18.3547 623.513L12.1135 627.914L5.87219 632.314L-0.369076 636.715L-6.6103 641.116L-12.8516 645.517" stroke="#0B5C4D" stroke-width="0.5089" stroke-linecap="round" stroke-linejoin="round"></path><path d="M531.61 1033.87L527.21 1027.63L522.809 1021.39L518.408 1015.15L510.864 1013.84L503.376 1012.62L495.833 1011.31L488.368 1009.95L480.824 1008.65L476.423 1002.41L472.023 996.167L467.622 989.926L463.221 983.684L458.82 977.443L454.419 971.202L450.074 965.04L445.674 958.798L441.273 952.557L436.872 946.316L432.471 940.075L428.07 933.833L423.67 927.592L416.126 926.288L408.582 924.983L401.039 923.678L393.63 922.397L386.086 921.092L378.542 919.788L370.998 918.483L363.455 917.178L355.911 915.874L348.502 914.592L344.101 908.351L339.7 902.11L335.3 895.869L330.899 889.627L326.498 883.386L322.097 877.145L317.696 870.904L313.296 864.662L308.895 858.421L304.494 852.18L300.093 845.939L295.693 839.697L296.918 832.209L298.279 824.745L299.583 817.201L300.888 809.657L293.344 808.353L285.8 807.048L278.257 805.743L270.848 804.462" stroke="#0B5C4D" stroke-width="0.4824" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.435 1029.88L533.034 1023.64L528.633 1017.4L524.233 1011.16L519.832 1004.92L515.431 998.677L511.03 992.436L506.629 986.195L502.229 979.953L497.828 973.712L493.427 967.471L489.026 961.23L484.681 955.068L480.28 948.826L475.88 942.585L468.336 941.28" stroke="#0B5C4D" stroke-width="0.6098" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.365 1030.29L532.964 1024.05L528.563 1017.81L524.162 1011.57L519.762 1005.32L515.361 999.084L511.016 992.921L506.615 986.68L502.214 980.439L497.813 974.198L493.413 967.956L489.012 961.715L484.611 955.474L480.21 949.233L475.809 942.991L471.409 936.75L467.008 930.509" stroke="#0B5C4D" stroke-width="0.5453" stroke-linecap="round" stroke-linejoin="round"></path><path d="M537.366 1030.29L532.965 1024.05L528.564 1017.81L524.163 1011.56L519.762 1005.32L515.362 999.082L510.961 992.841L506.56 986.6L502.159 980.358L497.814 974.196L493.414 967.955L489.013 961.714L484.612 955.472L480.211 949.231L475.81 942.99L471.41 936.749L467.009 930.507L462.608 924.266L458.207 918.025L453.806 911.784L449.406 905.542L445.005 899.301L440.604 893.06L441.909 885.516L443.269 878.051L444.495 870.563L445.799 863.02L447.104 855.476L448.409 847.932L449.713 840.389L451.074 832.924L452.299 825.436L453.604 817.892L454.909 810.348L456.213 802.805L451.812 796.563L447.412 790.322L443.011 784.081L449.252 779.68L444.907 773.518L440.506 767.277L436.105 761.035L437.41 753.492" stroke="#0B5C4D" stroke-width="0.3665" stroke-linecap="round" stroke-linejoin="round"></path></g><g id="circuit-dots"><path d="M843.387 1135.17C842.83 1134.38 841.808 1134.27 841.097 1134.77C840.307 1135.33 840.2 1136.35 840.701 1137.06C841.258 1137.85 842.28 1137.96 842.991 1137.46C843.758 1137.04 843.944 1135.96 843.387 1135.17Z" fill="#0B5C4D"></path><path d="M586.425 1229.54C587.638 1229.75 588.823 1228.91 589.032 1227.7C589.242 1226.49 588.406 1225.3 587.194 1225.09C585.982 1224.88 584.797 1225.72 584.587 1226.93C584.377 1228.14 585.213 1229.33 586.425 1229.54Z" fill="#0B5C4D"></path><path d="M62.979 1562.79C62.036 1562.63 61.088 1563.29 60.8459 1564.29C60.6828 1565.24 61.3513 1566.18 62.35 1566.43C63.2929 1566.59 64.241 1565.92 64.4831 1564.92C64.6694 1563.84 64.0567 1562.98 62.979 1562.79Z" fill="#0B5C4D"></path><path d="M381.442 1052.23C381.722 1050.61 380.664 1049.11 379.103 1048.91C377.486 1048.63 375.985 1049.69 375.785 1051.25C375.505 1052.87 376.564 1054.37 378.124 1054.57C379.662 1054.9 381.163 1053.84 381.442 1052.23Z" fill="#0B5C4D"></path><path d="M599.342 1393.13C600.346 1392.42 600.586 1391.03 599.878 1390.03C599.171 1389.02 597.783 1388.78 596.78 1389.49C595.776 1390.2 595.536 1391.59 596.244 1392.59C596.952 1393.59 598.339 1393.83 599.342 1393.13Z" fill="#0B5C4D"></path><path d="M727.949 1163.7C727.006 1163.53 726.058 1164.2 725.895 1165.14C725.732 1166.09 726.4 1167.04 727.343 1167.2C728.286 1167.36 729.234 1166.69 729.397 1165.75C729.639 1164.75 728.971 1163.8 727.949 1163.7Z" fill="#0B5C4D"></path><path d="M694.294 1085.94C695.559 1085.05 695.94 1083.24 694.993 1081.9C694.046 1080.56 692.295 1080.25 690.952 1081.2C689.609 1082.15 689.306 1083.9 690.253 1085.24C691.2 1086.59 692.951 1086.89 694.294 1085.94Z" fill="#0B5C4D"></path><path d="M528.672 1359.33C529.615 1359.49 530.563 1358.83 530.805 1357.83C530.968 1356.88 530.3 1355.94 529.301 1355.69C528.358 1355.53 527.41 1356.2 527.168 1357.2C527.005 1358.14 527.674 1359.09 528.672 1359.33Z" fill="#0B5C4D"></path><path d="M701.25 1081.04C700.307 1080.87 699.359 1081.54 699.196 1082.48C699.032 1083.43 699.701 1084.38 700.644 1084.54C701.587 1084.7 702.535 1084.03 702.698 1083.09C702.861 1082.15 702.248 1081.28 701.25 1081.04Z" fill="#0B5C4D"></path><path d="M616.916 1190.42C617.055 1189.61 616.554 1188.9 615.801 1188.84C614.993 1188.7 614.282 1189.2 614.221 1189.95C614.082 1190.76 614.583 1191.47 615.336 1191.53C616.065 1191.73 616.776 1191.23 616.916 1190.42Z" fill="#0B5C4D"></path><path d="M751.098 1005.79C749.212 1005.47 747.395 1006.75 747.069 1008.63C746.743 1010.52 748.024 1012.34 749.91 1012.66C751.796 1012.99 753.613 1011.71 753.939 1009.82C754.265 1007.93 752.984 1006.12 751.098 1005.79Z" fill="#0B5C4D"></path><path d="M612.457 1072.2C611.51 1070.86 609.624 1070.53 608.281 1071.48C606.938 1072.43 606.612 1074.31 607.559 1075.66C608.506 1077 610.392 1077.33 611.735 1076.38C613.022 1075.35 613.404 1073.55 612.457 1072.2Z" fill="#0B5C4D"></path><path d="M739.531 1166.53C739.414 1167.2 739.86 1167.84 740.533 1167.95C741.207 1168.07 741.839 1167.62 741.955 1166.95C742.072 1166.28 741.626 1165.64 740.953 1165.53C740.279 1165.41 739.647 1165.86 739.531 1166.53Z" fill="#0B5C4D"></path><path d="M621.639 1127.83C623.341 1126.63 623.747 1124.28 622.548 1122.58C621.348 1120.87 618.996 1120.47 617.294 1121.67C615.592 1122.87 615.186 1125.22 616.385 1126.92C617.585 1128.62 619.937 1129.03 621.639 1127.83Z" fill="#0B5C4D"></path><path d="M609.523 1197.88C609.849 1195.99 608.568 1194.17 606.682 1193.85C604.796 1193.52 602.979 1194.8 602.653 1196.69C602.327 1198.57 603.608 1200.39 605.494 1200.72C607.459 1200.99 609.197 1199.76 609.523 1197.88Z" fill="#0B5C4D"></path><path d="M792.217 1009.09C791.585 1009.53 791.446 1010.34 791.891 1010.97C792.337 1011.6 793.145 1011.74 793.777 1011.3C794.409 1010.85 794.549 1010.04 794.103 1009.41C793.658 1008.78 792.849 1008.64 792.217 1009.09Z" fill="#0B5C4D"></path><path d="M549.323 1076.27C548.766 1075.48 547.689 1075.29 546.899 1075.85C546.109 1076.41 545.922 1077.48 546.479 1078.27C547.036 1079.06 548.114 1079.25 548.904 1078.69C549.694 1078.14 549.825 1076.98 549.323 1076.27Z" fill="#0B5C4D"></path><path d="M605.659 1138.38C606.495 1139.57 608.056 1139.77 609.162 1138.99C610.347 1138.15 610.547 1136.59 609.767 1135.49C608.932 1134.3 607.371 1134.1 606.265 1134.88C605.08 1135.72 604.824 1137.2 605.659 1138.38Z" fill="#0B5C4D"></path><path d="M493.376 1301.89C493.143 1303.24 494.034 1304.5 495.381 1304.74C496.728 1304.97 497.992 1304.08 498.225 1302.73C498.458 1301.38 497.567 1300.12 496.22 1299.89C494.873 1299.65 493.609 1300.55 493.376 1301.89Z" fill="#0B5C4D"></path><path d="M419.458 1198.24C418.115 1199.18 417.71 1201.12 418.712 1202.55C419.715 1203.97 421.601 1204.3 423.023 1203.29C424.445 1202.29 424.771 1200.4 423.769 1198.98C422.766 1197.56 420.801 1197.29 419.458 1198.24Z" fill="#0B5C4D"></path><path d="M503.754 1148.02C503.081 1147.91 502.528 1148.3 502.411 1148.97C502.295 1149.64 502.685 1150.2 503.358 1150.31C504.032 1150.43 504.585 1150.04 504.701 1149.37C504.874 1148.77 504.428 1148.14 503.754 1148.02Z" fill="#0B5C4D"></path><path d="M415.534 1220.52C416.091 1221.31 417.169 1221.5 417.959 1220.94C418.749 1220.38 418.935 1219.3 418.378 1218.51C417.821 1217.72 416.743 1217.54 415.953 1218.09C415.163 1218.65 414.977 1219.73 415.534 1220.52Z" fill="#0B5C4D"></path><path d="M644.889 1329.9C643.783 1330.68 643.527 1332.16 644.307 1333.27C645.087 1334.37 646.568 1334.63 647.674 1333.85C648.78 1333.07 649.037 1331.59 648.257 1330.48C647.477 1329.38 645.995 1329.12 644.889 1329.9Z" fill="#0B5C4D"></path><path d="M666.702 1188.55C667.182 1188.21 667.297 1187.55 666.958 1187.07C666.62 1186.59 665.956 1186.47 665.476 1186.81C664.996 1187.15 664.882 1187.81 665.22 1188.29C665.559 1188.77 666.222 1188.89 666.702 1188.55Z" fill="#0B5C4D"></path><path d="M729.812 1087.16C728.195 1086.88 726.773 1087.88 726.494 1089.5C726.214 1091.11 727.217 1092.53 728.833 1092.81C730.45 1093.09 731.872 1092.09 732.151 1090.47C732.431 1088.86 731.428 1087.44 729.812 1087.16Z" fill="#0B5C4D"></path><path d="M604.118 1094.76C605.557 1093.75 605.902 1091.76 604.886 1090.32C603.871 1088.88 601.881 1088.53 600.441 1089.55C599.001 1090.56 598.657 1092.55 599.672 1093.99C600.688 1095.43 602.678 1095.78 604.118 1094.76Z" fill="#0B5C4D"></path><path d="M577.602 925.979C578.814 926.189 579.92 925.409 580.13 924.197C580.34 922.984 579.56 921.878 578.348 921.669C577.135 921.459 576.029 922.239 575.819 923.451C575.61 924.664 576.39 925.77 577.602 925.979Z" fill="#0B5C4D"></path><path d="M385.48 1333.73C385.87 1334.29 386.678 1334.43 387.231 1334.04C387.784 1333.65 387.924 1332.84 387.534 1332.28C387.144 1331.73 386.336 1331.59 385.783 1331.98C385.151 1332.43 385.09 1333.18 385.48 1333.73Z" fill="#0B5C4D"></path><path d="M741.651 990.215C742.362 989.714 742.549 988.636 742.047 987.925C741.546 987.214 740.468 987.027 739.757 987.529C739.046 988.03 738.86 989.108 739.361 989.819C739.862 990.53 740.94 990.716 741.651 990.215Z" fill="#0B5C4D"></path><path d="M600.805 1230.64C600.921 1229.96 600.42 1229.25 599.691 1229.06C599.017 1228.94 598.306 1229.44 598.111 1230.17C597.994 1230.85 598.495 1231.56 599.225 1231.75C599.977 1231.81 600.609 1231.37 600.805 1230.64Z" fill="#0B5C4D"></path><path d="M585.135 1380.19C584.902 1381.54 585.794 1382.8 587.196 1383.12C588.544 1383.35 589.808 1382.46 590.12 1381.06C590.353 1379.71 589.461 1378.44 588.058 1378.13C586.711 1377.9 585.368 1378.85 585.135 1380.19Z" fill="#0B5C4D"></path><path d="M791.717 1034.04C791.272 1033.41 790.329 1033.25 789.697 1033.69C789.065 1034.14 788.902 1035.08 789.347 1035.71C789.793 1036.35 790.736 1036.51 791.368 1036.06C792.079 1035.56 792.163 1034.67 791.717 1034.04Z" fill="#0B5C4D"></path><path d="M789.039 1253.69C788.315 1252.66 786.833 1252.4 785.806 1253.13C784.779 1253.85 784.523 1255.33 785.247 1256.36C785.971 1257.39 787.453 1257.65 788.48 1256.92C789.507 1256.2 789.763 1254.72 789.039 1253.69Z" fill="#0B5C4D"></path><path d="M737.401 1005.16C736.848 1005.55 736.732 1006.22 737.122 1006.77C737.512 1007.33 738.185 1007.44 738.738 1007.05C739.291 1006.66 739.408 1005.99 739.018 1005.44C738.683 1004.96 737.954 1004.77 737.401 1005.16Z" fill="#0B5C4D"></path><path d="M558.661 1229.24C559.839 1228.41 560.12 1226.78 559.29 1225.61C558.459 1224.43 556.831 1224.15 555.653 1224.98C554.475 1225.81 554.193 1227.44 555.024 1228.61C555.854 1229.79 557.483 1230.07 558.661 1229.24Z" fill="#0B5C4D"></path><path d="M574.912 1315.37C574.632 1316.99 575.746 1318.57 577.363 1318.85C578.979 1319.12 580.559 1318.01 580.839 1316.39C581.118 1314.78 580.004 1313.2 578.388 1312.92C576.771 1312.64 575.191 1313.75 574.912 1315.37Z" fill="#0B5C4D"></path><path d="M558.197 1297.7C558.314 1297.03 557.813 1296.32 557.083 1296.12C556.41 1296.01 555.699 1296.51 555.503 1297.24C555.387 1297.91 555.888 1298.62 556.617 1298.82C557.426 1298.96 558.058 1298.51 558.197 1297.7Z" fill="#0B5C4D"></path><path d="M635.95 1052.68C635.281 1051.73 633.934 1051.5 632.986 1052.17C632.038 1052.84 631.805 1054.18 632.474 1055.13C633.142 1056.08 634.489 1056.31 635.437 1055.64C636.385 1054.98 636.618 1053.63 635.95 1052.68Z" fill="#0B5C4D"></path><path d="M817.284 949.188C818.227 949.351 819.254 948.627 819.417 947.684C819.58 946.741 818.856 945.714 817.913 945.551C816.97 945.388 815.943 946.112 815.78 947.055C815.672 948.077 816.341 949.025 817.284 949.188Z" fill="#0B5C4D"></path><path d="M300.994 1525.43C300.807 1526.5 301.587 1527.61 302.665 1527.8C303.743 1527.98 304.849 1527.2 305.035 1526.12C305.221 1525.05 304.442 1523.94 303.364 1523.75C302.286 1523.57 301.18 1524.35 300.994 1525.43Z" fill="#0B5C4D"></path><path d="M560.135 1368.73C561.399 1367.83 561.702 1366.08 560.811 1364.82C559.92 1363.56 558.168 1363.25 556.904 1364.14C555.64 1365.03 555.337 1366.79 556.229 1368.05C557.12 1369.31 558.871 1369.62 560.135 1368.73Z" fill="#0B5C4D"></path><path d="M650.556 1125.06C651.28 1126.09 652.762 1126.34 653.789 1125.62C654.816 1124.89 655.072 1123.41 654.348 1122.39C653.624 1121.36 652.142 1121.1 651.115 1121.83C650.088 1122.55 649.832 1124.03 650.556 1125.06Z" fill="#0B5C4D"></path><path d="M537.075 1070.47C537.191 1069.8 536.801 1069.25 536.128 1069.13C535.454 1069.02 534.901 1069.41 534.784 1070.08C534.668 1070.75 535.058 1071.31 535.731 1071.42C536.405 1071.54 536.958 1071.15 537.075 1070.47Z" fill="#0B5C4D"></path><path d="M808.205 849.251C808.916 848.75 809.079 847.807 808.578 847.096C808.076 846.385 807.133 846.222 806.422 846.723C805.711 847.224 805.548 848.167 806.05 848.878C806.63 849.534 807.573 849.697 808.205 849.251Z" fill="#0B5C4D"></path><path d="M711.209 1275.33C711.022 1276.41 711.691 1277.35 712.768 1277.54C713.846 1277.73 714.794 1277.06 714.981 1275.98C715.167 1274.9 714.498 1273.95 713.421 1273.77C712.343 1273.58 711.395 1274.25 711.209 1275.33Z" fill="#0B5C4D"></path><path d="M522.806 1064.33C524.557 1064.63 526.137 1063.52 526.44 1061.77C526.743 1060.02 525.628 1058.44 523.877 1058.13C522.126 1057.83 520.546 1058.94 520.243 1060.7C519.94 1062.45 521.11 1064.11 522.806 1064.33Z" fill="#0B5C4D"></path><path d="M705.416 1123.52C706.443 1122.79 706.699 1121.31 705.975 1120.29C705.251 1119.26 703.769 1119 702.742 1119.73C701.715 1120.45 701.458 1121.93 702.183 1122.96C702.963 1124.07 704.389 1124.24 705.416 1123.52Z" fill="#0B5C4D"></path><path d="M579.854 1068.58C579.408 1067.95 578.466 1067.78 577.833 1068.23C577.201 1068.67 577.038 1069.62 577.484 1070.25C577.93 1070.88 578.873 1071.04 579.505 1070.6C580.137 1070.15 580.3 1069.21 579.854 1068.58Z" fill="#0B5C4D"></path><path d="M567.834 1235.55C567.333 1234.84 566.334 1234.6 565.544 1235.15C564.754 1235.71 564.591 1236.65 565.148 1237.44C565.65 1238.15 566.648 1238.4 567.438 1237.84C568.228 1237.28 568.336 1236.26 567.834 1235.55Z" fill="#0B5C4D"></path><path d="M772.468 1409.68C771.855 1408.81 770.642 1408.6 769.773 1409.21C768.904 1409.83 768.695 1411.04 769.307 1411.91C769.92 1412.78 771.133 1412.99 772.002 1412.37C772.815 1411.68 773.08 1410.55 772.468 1409.68Z" fill="#0B5C4D"></path><path d="M563.688 1048.16C565.738 1046.71 566.229 1043.88 564.783 1041.83C563.337 1039.78 560.502 1039.29 558.451 1040.73C556.401 1042.18 555.91 1045.01 557.356 1047.06C558.802 1049.11 561.637 1049.6 563.688 1048.16Z" fill="#0B5C4D"></path><path d="M454.518 1201.66C455.26 1201.14 455.437 1200.12 454.914 1199.37C454.391 1198.63 453.366 1198.45 452.624 1198.98C451.883 1199.5 451.705 1200.53 452.228 1201.27C452.751 1202.01 453.777 1202.19 454.518 1201.66Z" fill="#0B5C4D"></path><path d="M382.029 1042.83C383.241 1043.04 384.426 1042.2 384.636 1040.99C384.846 1039.78 384.01 1038.59 382.798 1038.38C381.585 1038.17 380.4 1039.01 380.191 1040.22C379.981 1041.43 380.816 1042.62 382.029 1042.83Z" fill="#0B5C4D"></path><path d="M421.305 1118.16C420.092 1117.95 418.986 1118.73 418.776 1119.94C418.567 1121.15 419.347 1122.26 420.559 1122.47C421.771 1122.68 422.877 1121.9 423.087 1120.68C423.352 1119.55 422.517 1118.36 421.305 1118.16Z" fill="#0B5C4D"></path><path d="M619.268 1127.49C620.359 1126.72 620.62 1125.21 619.851 1124.12C619.081 1123.03 617.574 1122.77 616.483 1123.54C615.392 1124.31 615.131 1125.81 615.9 1126.9C616.67 1127.99 618.177 1128.26 619.268 1127.49Z" fill="#0B5C4D"></path><path d="M658.588 1324.5C658.285 1326.25 659.399 1327.83 661.095 1328.05C662.846 1328.36 664.426 1327.24 664.65 1325.55C664.953 1323.8 663.839 1322.22 662.143 1321.99C660.448 1321.77 658.868 1322.88 658.588 1324.5Z" fill="#0B5C4D"></path><path d="M0.763156 1583.59C-0.737903 1584.65 -1.11066 1586.81 -0.0522397 1588.31C1.00618 1589.81 3.16152 1590.18 4.66258 1589.12C6.16364 1588.06 6.53639 1585.91 5.47798 1584.41C4.34056 1582.96 2.26422 1582.53 0.763156 1583.59Z" fill="#0B5C4D"></path><path d="M629.528 1344.52C629.691 1343.57 629.023 1342.63 628.08 1342.46C627.137 1342.3 626.189 1342.97 626.026 1343.91C625.863 1344.85 626.531 1345.8 627.474 1345.96C628.417 1346.13 629.286 1345.51 629.528 1344.52Z" fill="#0B5C4D"></path><path d="M541.978 1060.15C542.48 1060.86 543.557 1061.05 544.268 1060.55C544.979 1060.05 545.166 1058.97 544.664 1058.26C544.163 1057.55 543.085 1057.36 542.374 1057.86C541.584 1058.42 541.477 1059.44 541.978 1060.15Z" fill="#0B5C4D"></path><path d="M781.47 844.212C782.518 843.474 782.768 842.026 782.03 840.979C781.291 839.932 779.844 839.682 778.797 840.42C777.749 841.158 777.499 842.606 778.237 843.653C778.976 844.7 780.423 844.95 781.47 844.212Z" fill="#0B5C4D"></path><path d="M589.886 1025.43C590.518 1024.98 590.681 1024.04 590.235 1023.41C589.789 1022.78 588.846 1022.61 588.214 1023.06C587.582 1023.5 587.419 1024.45 587.865 1025.08C588.311 1025.71 589.254 1025.87 589.886 1025.43Z" fill="#0B5C4D"></path><path d="M428.686 1196.22C428.384 1197.98 429.609 1199.71 431.36 1200.02C433.112 1200.32 434.85 1199.09 435.152 1197.34C435.455 1195.59 434.23 1193.85 432.479 1193.55C430.648 1193.3 428.989 1194.47 428.686 1196.22Z" fill="#0B5C4D"></path><path d="M167.991 1310.97C169.608 1311.25 171.03 1310.24 171.31 1308.63C171.589 1307.01 170.586 1305.59 168.97 1305.31C167.353 1305.03 165.931 1306.03 165.652 1307.65C165.372 1309.26 166.454 1310.63 167.991 1310.97Z" fill="#0B5C4D"></path><path d="M397.107 1227.6C396.921 1228.67 397.645 1229.7 398.723 1229.89C399.8 1230.07 400.827 1229.35 401.014 1228.27C401.2 1227.19 400.476 1226.17 399.398 1225.98C398.399 1225.74 397.372 1226.46 397.107 1227.6Z" fill="#0B5C4D"></path><path d="M658.257 1202.07C659.305 1201.34 659.555 1199.89 658.817 1198.84C658.078 1197.79 656.631 1197.54 655.584 1198.28C654.536 1199.02 654.286 1200.47 655.024 1201.51C655.763 1202.56 657.21 1202.81 658.257 1202.07Z" fill="#0B5C4D"></path><path d="M690.722 807.775C692.608 808.101 694.425 806.82 694.751 804.934C695.078 803.048 693.796 801.231 691.91 800.905C690.024 800.579 688.207 801.86 687.881 803.746C687.499 805.553 688.781 807.37 690.722 807.775Z" fill="#0B5C4D"></path><path d="M603.099 1167.63C603.262 1166.69 602.594 1165.74 601.595 1165.5C600.596 1165.26 599.704 1166 599.462 1167C599.22 1168 599.967 1168.89 600.966 1169.13C601.964 1169.38 602.936 1168.57 603.099 1167.63Z" fill="#0B5C4D"></path><path d="M385.265 1232.28C385.055 1233.49 385.835 1234.6 386.992 1234.73C388.204 1234.94 389.31 1234.16 389.441 1233C389.65 1231.79 388.871 1230.68 387.714 1230.55C386.581 1230.29 385.474 1231.07 385.265 1232.28Z" fill="#0B5C4D"></path><path d="M672.888 1235.4C673.334 1236.04 674.277 1236.2 674.909 1235.75C675.541 1235.31 675.704 1234.37 675.258 1233.73C674.813 1233.1 673.87 1232.94 673.238 1233.38C672.606 1233.83 672.387 1234.69 672.888 1235.4Z" fill="#0B5C4D"></path><path d="M748.541 1244.39C749.489 1243.73 749.722 1242.38 749.053 1241.43C748.385 1240.48 747.038 1240.25 746.09 1240.92C745.142 1241.59 744.909 1242.93 745.577 1243.88C746.246 1244.83 747.593 1245.06 748.541 1244.39Z" fill="#0B5C4D"></path><path d="M542.331 1048.91C542.168 1049.85 542.781 1050.72 543.724 1050.88C544.667 1051.04 545.536 1050.43 545.699 1049.49C545.862 1048.55 545.25 1047.68 544.307 1047.51C543.34 1047.48 542.471 1048.1 542.331 1048.91Z" fill="#0B5C4D"></path><path d="M663.216 1212.3C663.006 1213.51 663.786 1214.62 664.999 1214.83C666.211 1215.04 667.317 1214.26 667.527 1213.04C667.736 1211.83 666.956 1210.73 665.744 1210.52C664.532 1210.31 663.426 1211.09 663.216 1212.3Z" fill="#0B5C4D"></path><path d="M549.997 1132.92C549.764 1134.27 550.655 1135.53 552.002 1135.76C553.349 1136 554.613 1135.11 554.846 1133.76C555.079 1132.41 554.188 1131.15 552.841 1130.91C551.494 1130.68 550.23 1131.57 549.997 1132.92Z" fill="#0B5C4D"></path><path d="M587.181 1103.62C588.258 1103.81 589.206 1103.14 589.314 1102.12C589.5 1101.04 588.832 1100.09 587.81 1099.99C586.732 1099.8 585.784 1100.47 585.677 1101.49C585.514 1102.43 586.182 1103.38 587.181 1103.62Z" fill="#0B5C4D"></path><path d="M431.485 1129.9C430.853 1130.35 430.713 1131.16 431.159 1131.79C431.604 1132.42 432.413 1132.56 433.045 1132.12C433.677 1131.67 433.816 1130.86 433.371 1130.23C433.06 1129.62 432.117 1129.46 431.485 1129.9Z" fill="#0B5C4D"></path><path d="M604.871 998.538C605.661 997.98 605.847 996.903 605.29 996.113C604.733 995.323 603.656 995.136 602.866 995.693C602.075 996.25 601.889 997.328 602.446 998.118C602.924 998.964 604.081 999.095 604.871 998.538Z" fill="#0B5C4D"></path><path d="M632.626 1168.57C632.486 1169.38 632.987 1170.09 633.796 1170.23C634.604 1170.37 635.315 1169.87 635.455 1169.06C635.594 1168.26 635.093 1167.54 634.285 1167.4C633.477 1167.27 632.687 1167.82 632.626 1168.57Z" fill="#0B5C4D"></path><path d="M642.188 1161C641.38 1160.86 640.59 1161.42 640.45 1162.23C640.31 1163.04 640.867 1163.83 641.675 1163.97C642.484 1164.11 643.274 1163.55 643.414 1162.74C643.553 1161.93 642.996 1161.14 642.188 1161Z" fill="#0B5C4D"></path><path d="M525.017 1057.57C524.807 1058.78 525.587 1059.88 526.744 1060.02C527.956 1060.23 529.062 1059.45 529.193 1058.29C529.402 1057.08 528.622 1055.97 527.466 1055.84C526.332 1055.57 525.226 1056.35 525.017 1057.57Z" fill="#0B5C4D"></path><path d="M597.206 1221.34C596.973 1222.69 597.864 1223.95 599.211 1224.19C600.558 1224.42 601.822 1223.53 602.055 1222.18C602.288 1220.84 601.397 1219.57 600.05 1219.34C598.703 1219.11 597.439 1220 597.206 1221.34Z" fill="#0B5C4D"></path><path d="M576.628 1109.29C577.408 1110.4 579.024 1110.68 580.131 1109.9C581.237 1109.12 581.516 1107.5 580.736 1106.4C579.956 1105.29 578.34 1105.01 577.234 1105.79C576.128 1106.57 575.848 1108.19 576.628 1109.29Z" fill="#0B5C4D"></path><path d="M598.969 937.999C598.412 937.209 597.39 937.102 596.679 937.603C595.968 938.104 595.782 939.182 596.283 939.893C596.84 940.683 597.862 940.79 598.573 940.289C599.284 939.788 599.526 938.789 598.969 937.999Z" fill="#0B5C4D"></path><path d="M598.439 900.17C597.333 900.95 597.156 902.376 597.88 903.403C598.66 904.509 600.086 904.686 601.113 903.962C602.219 903.182 602.396 901.756 601.672 900.729C600.948 899.702 599.466 899.446 598.439 900.17Z" fill="#0B5C4D"></path><path d="M306.14 1383.76C305.113 1384.49 304.857 1385.97 305.581 1386.99C306.305 1388.02 307.787 1388.28 308.814 1387.55C309.841 1386.83 310.097 1385.35 309.373 1384.32C308.593 1383.21 307.167 1383.04 306.14 1383.76Z" fill="#0B5C4D"></path><path d="M555.522 1034.4C556.707 1033.56 556.987 1031.95 556.151 1030.76C555.315 1029.58 553.699 1029.3 552.514 1030.13C551.329 1030.97 551.049 1032.59 551.885 1033.77C552.721 1034.96 554.337 1035.24 555.522 1034.4Z" fill="#0B5C4D"></path><path d="M611.901 1406.74C613.603 1405.54 614.009 1403.19 612.809 1401.49C611.61 1399.79 609.257 1399.38 607.556 1400.58C605.854 1401.78 605.447 1404.13 606.647 1405.83C607.847 1407.54 610.199 1407.94 611.901 1406.74Z" fill="#0B5C4D"></path><path d="M655.807 870.482C656.549 869.959 656.726 868.934 656.203 868.192C655.68 867.451 654.655 867.273 653.913 867.796C653.172 868.319 652.994 869.345 653.517 870.086C654.04 870.828 655.066 871.005 655.807 870.482Z" fill="#0B5C4D"></path><path d="M199.762 1157.74C200.375 1158.61 201.531 1158.74 202.321 1158.19C203.19 1157.57 203.321 1156.42 202.764 1155.63C202.151 1154.76 200.995 1154.63 200.204 1155.19C199.359 1155.66 199.149 1156.88 199.762 1157.74Z" fill="#0B5C4D"></path><path d="M583.213 883.108C584.003 882.551 584.189 881.473 583.632 880.683C583.075 879.893 581.997 879.707 581.207 880.264C580.417 880.821 580.231 881.899 580.788 882.689C581.345 883.479 582.423 883.665 583.213 883.108Z" fill="#0B5C4D"></path><path d="M689.694 583.884C690.61 583.238 690.829 581.971 690.183 581.055C689.537 580.139 688.271 579.919 687.354 580.566C686.438 581.212 686.219 582.478 686.865 583.394C687.511 584.311 688.778 584.53 689.694 583.884Z" fill="#0B5C4D"></path><path d="M704.005 973.228C705.175 974.887 707.409 975.204 708.989 974.09C710.648 972.92 710.965 970.686 709.851 969.106C708.681 967.447 706.447 967.13 704.867 968.244C703.231 969.279 702.835 971.569 704.005 973.228Z" fill="#0B5C4D"></path><path d="M564.603 1089.38C564.993 1089.94 565.801 1090.08 566.354 1089.69C566.907 1089.3 567.047 1088.49 566.657 1087.94C566.267 1087.38 565.459 1087.24 564.906 1087.63C564.297 1087.94 564.158 1088.75 564.603 1089.38Z" fill="#0B5C4D"></path><path d="M545.994 1039.34C547.611 1039.62 549.112 1038.56 549.392 1036.95C549.671 1035.33 548.613 1033.83 546.996 1033.55C545.38 1033.27 543.879 1034.33 543.599 1035.95C543.32 1037.56 544.378 1039.06 545.994 1039.34Z" fill="#0B5C4D"></path><path d="M596.01 1144.83C597.101 1144.06 597.362 1142.56 596.593 1141.46C595.824 1140.37 594.316 1140.11 593.225 1140.88C592.134 1141.65 591.874 1143.16 592.643 1144.25C593.412 1145.34 594.92 1145.6 596.01 1144.83Z" fill="#0B5C4D"></path><path d="M568.371 1096.07C569.039 1097.02 570.331 1097.17 571.2 1096.56C572.148 1095.89 572.302 1094.6 571.689 1093.73C571.021 1092.78 569.729 1092.63 568.86 1093.24C567.856 1093.83 567.702 1095.12 568.371 1096.07Z" fill="#0B5C4D"></path><path d="M681.728 903.893C681.984 902.411 680.982 900.989 679.444 900.654C677.962 900.397 676.54 901.4 676.205 902.937C675.949 904.419 676.952 905.841 678.489 906.177C680.05 906.377 681.472 905.374 681.728 903.893Z" fill="#0B5C4D"></path><path d="M571.971 1163.91C573.085 1165.49 575.296 1165.94 576.956 1164.77C578.615 1163.6 578.987 1161.45 577.818 1159.79C576.648 1158.13 574.492 1157.76 572.833 1158.93C571.174 1160.1 570.857 1162.33 571.971 1163.91Z" fill="#0B5C4D"></path><path d="M576.887 1108.99C577.612 1110.02 579.093 1110.28 580.12 1109.55C581.147 1108.83 581.404 1107.35 580.68 1106.32C579.955 1105.29 578.474 1105.03 577.446 1105.76C576.285 1106.46 576.107 1107.89 576.887 1108.99Z" fill="#0B5C4D"></path><path d="M51.3788 1069.93C50.3011 1069.74 49.3531 1070.41 49.2458 1071.43C49.0594 1072.51 49.7279 1073.46 50.7498 1073.56C51.8275 1073.75 52.7755 1073.08 52.8829 1072.06C52.9902 1071.04 52.3218 1070.09 51.3788 1069.93Z" fill="#0B5C4D"></path><path d="M535.719 1046.24C536.417 1045.74 536.584 1044.78 536.091 1044.08C535.599 1043.38 534.634 1043.22 533.936 1043.71C533.238 1044.2 533.071 1045.16 533.563 1045.86C534.055 1046.56 535.02 1046.73 535.719 1046.24Z" fill="#0B5C4D"></path><path d="M773.946 956.675C774.62 956.792 775.331 956.291 775.448 955.617C775.564 954.943 775.063 954.232 774.389 954.116C773.716 953.999 773.005 954.501 772.888 955.174C772.772 955.848 773.217 956.48 773.946 956.675Z" fill="#0B5C4D"></path><path d="M647.86 1193.2C647.534 1195.09 648.759 1196.82 650.589 1197.07C652.475 1197.4 654.213 1196.17 654.461 1194.34C654.787 1192.46 653.561 1190.72 651.731 1190.47C649.924 1190.09 648.186 1191.31 647.86 1193.2Z" fill="#0B5C4D"></path><path d="M696.173 884.954C695.917 886.436 696.864 887.779 698.29 887.957C699.772 888.213 701.115 887.266 701.292 885.84C701.548 884.358 700.601 883.015 699.175 882.838C697.749 882.66 696.406 883.607 696.173 884.954Z" fill="#0B5C4D"></path><path d="M533.157 1043.78C532.994 1044.73 533.663 1045.67 534.661 1045.92C535.604 1046.08 536.552 1045.41 536.794 1044.41C536.957 1043.47 536.289 1042.52 535.29 1042.28C534.292 1042.04 533.344 1042.7 533.157 1043.78Z" fill="#0B5C4D"></path><path d="M545.475 1037.94C546.418 1038.1 547.208 1037.54 547.371 1036.6C547.534 1035.66 546.977 1034.87 546.034 1034.7C545.091 1034.54 544.301 1035.1 544.138 1036.04C544.054 1036.93 544.667 1037.8 545.475 1037.94Z" fill="#0B5C4D"></path><path d="M533.507 1043.77C533.367 1044.58 533.924 1045.37 534.732 1045.51C535.54 1045.65 536.33 1045.09 536.47 1044.28C536.61 1043.48 536.053 1042.69 535.245 1042.55C534.436 1042.41 533.646 1042.96 533.507 1043.77Z" fill="#0B5C4D"></path><path d="M715.74 840.405C714.871 841.017 714.662 842.23 715.274 843.099C715.887 843.968 717.099 844.177 717.968 843.565C718.837 842.952 719.047 841.74 718.434 840.87C717.822 840.001 716.609 839.792 715.74 840.405Z" fill="#0B5C4D"></path><path d="M289.69 1000.77C290.322 1000.33 290.485 999.386 290.039 998.754C289.594 998.122 288.651 997.959 288.019 998.404C287.387 998.85 287.224 999.793 287.669 1000.42C288.036 1001.11 288.979 1001.28 289.69 1000.77Z" fill="#0B5C4D"></path><path d="M545.542 1038.36C546.62 1038.55 547.647 1037.82 547.912 1036.69C548.098 1035.61 547.374 1034.59 546.241 1034.32C545.163 1034.13 544.136 1034.86 543.871 1035.99C543.684 1037.07 544.464 1038.18 545.542 1038.36Z" fill="#0B5C4D"></path><path d="M533.182 1043.65C532.996 1044.73 533.665 1045.67 534.687 1045.78C535.764 1045.97 536.712 1045.3 536.82 1044.28C537.006 1043.2 536.338 1042.25 535.316 1042.14C534.294 1042.04 533.346 1042.71 533.182 1043.65Z" fill="#0B5C4D"></path><path d="M731.276 933.065C730.486 933.622 730.299 934.7 730.856 935.49C731.413 936.28 732.491 936.466 733.281 935.909C734.071 935.352 734.257 934.274 733.7 933.484C733.064 932.75 731.987 932.563 731.276 933.065Z" fill="#0B5C4D"></path><path d="M532.619 1043.69C532.386 1045.04 533.222 1046.22 534.569 1046.45C535.916 1046.69 537.101 1045.85 537.334 1044.5C537.567 1043.16 536.731 1041.97 535.384 1041.74C534.093 1041.59 532.908 1042.42 532.619 1043.69Z" fill="#0B5C4D"></path><path d="M532.705 1043.98C532.496 1045.19 533.276 1046.3 534.488 1046.51C535.7 1046.72 536.806 1045.94 537.016 1044.73C537.226 1043.52 536.446 1042.41 535.233 1042.2C534.156 1042.01 532.971 1042.85 532.705 1043.98Z" fill="#0B5C4D"></path><path d="M545.81 1038.41C546.888 1038.59 547.915 1037.87 548.102 1036.79C548.288 1035.72 547.564 1034.69 546.486 1034.5C545.408 1034.32 544.381 1035.04 544.195 1036.12C544.009 1037.2 544.733 1038.22 545.81 1038.41Z" fill="#0B5C4D"></path><path d="M545.442 1039.73C547.328 1040.06 549.066 1038.83 549.392 1036.95C549.718 1035.06 548.493 1033.32 546.607 1033C544.721 1032.67 542.983 1033.9 542.657 1035.78C542.33 1037.67 543.556 1039.41 545.442 1039.73Z" fill="#0B5C4D"></path><path d="M545.731 1038.46C546.809 1038.65 547.915 1037.87 548.101 1036.79C548.288 1035.72 547.508 1034.61 546.43 1034.42C545.353 1034.24 544.247 1035.02 544.06 1036.09C543.874 1037.17 544.598 1038.2 545.731 1038.46Z" fill="#0B5C4D"></path><path d="M545.295 1038.18C546.373 1038.37 547.321 1037.7 547.507 1036.62C547.694 1035.54 547.025 1034.6 545.947 1034.41C544.87 1034.22 543.922 1034.89 543.735 1035.97C543.628 1036.99 544.352 1038.02 545.295 1038.18Z" fill="#0B5C4D"></path><path d="M544.615 1037.71C545.423 1037.85 546.292 1037.24 546.432 1036.43C546.572 1035.62 545.959 1034.76 545.151 1034.62C544.342 1034.48 543.473 1035.09 543.334 1035.9C543.194 1036.71 543.728 1037.63 544.615 1037.71Z" fill="#0B5C4D"></path><path d="M686.721 1244.46C687.668 1245.8 689.498 1246.05 690.762 1245.15C692.105 1244.21 692.352 1242.38 691.461 1241.11C690.514 1239.77 688.684 1239.52 687.42 1240.41C686.1 1241.23 685.774 1243.11 686.721 1244.46Z" fill="#0B5C4D"></path><path d="M546.442 1037.96C547.358 1037.32 547.577 1036.05 546.931 1035.13C546.285 1034.22 545.019 1034 544.102 1034.65C543.186 1035.29 542.967 1036.56 543.613 1037.47C544.259 1038.39 545.526 1038.61 546.442 1037.96Z" fill="#0B5C4D"></path><path d="M544.876 1038.59C546.223 1038.83 547.408 1037.99 547.641 1036.64C547.874 1035.3 547.039 1034.11 545.691 1033.88C544.344 1033.65 543.159 1034.48 542.926 1035.83C542.638 1037.1 543.529 1038.36 544.876 1038.59Z" fill="#0B5C4D"></path><path d="M544.476 1039.7C546.362 1040.03 548.258 1038.69 548.584 1036.81C548.91 1034.92 547.573 1033.03 545.687 1032.7C543.801 1032.37 541.905 1033.71 541.579 1035.6C541.174 1037.54 542.455 1039.36 544.476 1039.7Z" fill="#0B5C4D"></path><path d="M294.274 1280.71C294.111 1281.65 294.668 1282.44 295.611 1282.6C296.554 1282.77 297.344 1282.21 297.507 1281.27C297.67 1280.32 297.113 1279.53 296.17 1279.37C295.306 1279.15 294.437 1279.76 294.274 1280.71Z" fill="#0B5C4D"></path><path d="M544.839 1039.21C546.456 1039.49 548.036 1038.38 548.315 1036.76C548.595 1035.14 547.481 1033.56 545.864 1033.29C544.248 1033.01 542.668 1034.12 542.388 1035.74C542.164 1037.43 543.223 1038.93 544.839 1039.21Z" fill="#0B5C4D"></path><path d="M545.024 1038.13C546.101 1038.32 546.994 1037.57 547.157 1036.63C547.343 1035.55 546.595 1034.66 545.653 1034.5C544.575 1034.31 543.683 1035.06 543.519 1036C543.356 1036.94 544.025 1037.89 545.024 1038.13Z" fill="#0B5C4D"></path><path d="M367.368 1064.64C366.922 1064.01 365.979 1063.84 365.347 1064.29C364.715 1064.74 364.552 1065.68 364.998 1066.31C365.443 1066.94 366.386 1067.11 367.018 1066.66C367.729 1066.16 367.813 1065.27 367.368 1064.64Z" fill="#0B5C4D"></path><path d="M544.876 1038.59C546.223 1038.83 547.408 1037.99 547.641 1036.64C547.874 1035.3 547.039 1034.11 545.691 1033.88C544.344 1033.65 543.159 1034.48 542.926 1035.83C542.638 1037.1 543.529 1038.36 544.876 1038.59Z" fill="#0B5C4D"></path><path d="M544.768 1037.6C545.576 1037.74 546.287 1037.24 546.427 1036.44C546.567 1035.63 546.066 1034.92 545.257 1034.78C544.449 1034.64 543.738 1035.14 543.598 1035.95C543.459 1036.75 543.96 1037.47 544.768 1037.6Z" fill="#0B5C4D"></path><path d="M536.877 1045.54C538.23 1044.58 538.553 1042.71 537.6 1041.36C536.646 1040.01 534.776 1039.68 533.424 1040.64C532.071 1041.59 531.748 1043.46 532.701 1044.81C533.655 1046.17 535.525 1046.49 536.877 1045.54Z" fill="#0B5C4D"></path><path d="M532.794 1043.09C532.561 1044.44 533.396 1045.63 534.688 1045.78C536.035 1046.01 537.22 1045.18 537.374 1043.89C537.607 1042.54 536.771 1041.35 535.48 1041.2C534.212 1040.91 533.026 1041.75 532.794 1043.09Z" fill="#0B5C4D"></path><path d="M533.027 1042.93C532.818 1044.14 533.598 1045.24 534.754 1045.38C535.967 1045.58 537.073 1044.8 537.203 1043.65C537.334 1042.49 536.633 1041.33 535.476 1041.2C534.32 1041.07 533.237 1041.71 533.027 1042.93Z" fill="#0B5C4D"></path><path d="M536.263 1045.5C537.223 1044.82 537.453 1043.49 536.776 1042.53C536.099 1041.57 534.772 1041.34 533.812 1042.02C532.852 1042.7 532.623 1044.03 533.3 1044.99C533.977 1045.95 535.303 1046.17 536.263 1045.5Z" fill="#0B5C4D"></path><path d="M535.893 1044.81C536.548 1044.35 536.704 1043.44 536.243 1042.79C535.781 1042.14 534.877 1041.98 534.222 1042.44C533.568 1042.9 533.411 1043.81 533.873 1044.46C534.334 1045.12 535.239 1045.27 535.893 1044.81Z" fill="#0B5C4D"></path><path d="M545.134 1037.11C545.701 1036.71 545.836 1035.93 545.436 1035.36C545.037 1034.79 544.252 1034.66 543.685 1035.06C543.118 1035.46 542.982 1036.24 543.382 1036.81C543.782 1037.38 544.566 1037.51 545.134 1037.11Z" fill="#0B5C4D"></path><path d="M533.987 1042.61C533.87 1043.28 534.316 1043.91 534.99 1044.03C535.663 1044.15 536.295 1043.7 536.412 1043.03C536.528 1042.35 536.082 1041.72 535.409 1041.6C534.791 1041.57 534.159 1042.01 533.987 1042.61Z" fill="#0B5C4D"></path><path d="M533.146 1042.25C532.96 1043.33 533.74 1044.44 534.817 1044.62C535.895 1044.81 537.001 1044.03 537.187 1042.95C537.374 1041.87 536.594 1040.77 535.516 1040.58C534.439 1040.39 533.412 1041.12 533.146 1042.25Z" fill="#0B5C4D"></path><path d="M614.048 1148.44C614.66 1149.31 615.873 1149.52 616.742 1148.9C617.611 1148.29 617.821 1147.08 617.208 1146.21C616.595 1145.34 615.383 1145.13 614.514 1145.74C613.645 1146.36 613.435 1147.57 614.048 1148.44Z" fill="#0B5C4D"></path><path d="M545.568 1037.4C546.266 1036.9 546.433 1035.94 545.941 1035.24C545.449 1034.54 544.484 1034.38 543.786 1034.87C543.087 1035.36 542.921 1036.32 543.413 1037.02C543.905 1037.72 544.87 1037.89 545.568 1037.4Z" fill="#0B5C4D"></path><path d="M544.339 1038.5C545.686 1038.73 546.871 1037.9 547.104 1036.55C547.337 1035.2 546.501 1034.02 545.154 1033.79C543.807 1033.55 542.622 1034.39 542.389 1035.74C542.156 1037.08 543.048 1038.35 544.339 1038.5Z" fill="#0B5C4D"></path><path d="M544.014 1038.38C545.227 1038.59 546.412 1037.75 546.7 1036.48C546.91 1035.27 546.074 1034.08 544.806 1033.8C543.594 1033.59 542.409 1034.42 542.12 1035.69C541.911 1036.9 542.802 1038.17 544.014 1038.38Z" fill="#0B5C4D"></path><path d="M531.743 1041.94C531.416 1043.83 532.753 1045.72 534.639 1046.05C536.525 1046.38 538.421 1045.04 538.747 1043.15C539.074 1041.27 537.737 1039.37 535.851 1039.05C533.886 1038.78 532.069 1040.06 531.743 1041.94Z" fill="#0B5C4D"></path><path d="M421.188 1109.6C422.453 1108.71 422.756 1106.96 421.864 1105.7C420.971 1104.43 419.222 1104.13 417.957 1105.02C416.692 1105.91 416.389 1107.66 417.282 1108.93C418.174 1110.19 419.923 1110.5 421.188 1109.6Z" fill="#0B5C4D"></path><path d="M533.494 1042.24C533.331 1043.19 534 1044.14 534.943 1044.3C535.886 1044.46 536.834 1043.79 536.997 1042.85C537.16 1041.91 536.491 1040.96 535.548 1040.8C534.606 1040.63 533.657 1041.3 533.494 1042.24Z" fill="#0B5C4D"></path><path d="M544.51 1037.91C545.453 1038.07 546.401 1037.4 546.564 1036.46C546.727 1035.52 546.058 1034.57 545.115 1034.4C544.172 1034.24 543.224 1034.91 543.061 1035.85C542.819 1036.85 543.488 1037.8 544.51 1037.91Z" fill="#0B5C4D"></path><path d="M102.998 1512.69C104.579 1511.57 104.975 1509.28 103.86 1507.7C102.746 1506.12 100.456 1505.73 98.8762 1506.84C97.2962 1507.96 96.9001 1510.25 98.0143 1511.83C99.1284 1513.41 101.418 1513.8 102.998 1512.69Z" fill="#0B5C4D"></path><path d="M532.304 1041.9C532.025 1043.52 533.139 1045.1 534.755 1045.38C536.372 1045.66 537.952 1044.54 538.231 1042.93C538.511 1041.31 537.397 1039.73 535.78 1039.45C534.164 1039.17 532.584 1040.28 532.304 1041.9Z" fill="#0B5C4D"></path><path d="M534.197 1042.57C534.104 1043.11 534.494 1043.66 535.033 1043.76C535.572 1043.85 536.125 1043.46 536.218 1042.92C536.311 1042.38 535.921 1041.83 535.382 1041.74C534.843 1041.64 534.29 1042.03 534.197 1042.57Z" fill="#0B5C4D"></path><path d="M543.705 1038.95C545.322 1039.23 546.823 1038.17 547.103 1036.55C547.382 1034.93 546.324 1033.43 544.707 1033.15C543.091 1032.87 541.59 1033.93 541.31 1035.55C541.03 1037.17 542.089 1038.67 543.705 1038.95Z" fill="#0B5C4D"></path><path d="M533.788 1042.16C533.648 1042.96 534.149 1043.68 534.958 1043.82C535.766 1043.96 536.477 1043.45 536.617 1042.65C536.756 1041.84 536.255 1041.13 535.447 1040.99C534.718 1040.79 533.928 1041.35 533.788 1042.16Z" fill="#0B5C4D"></path><path d="M534.088 1042.42C533.972 1043.09 534.362 1043.64 535.035 1043.76C535.709 1043.88 536.262 1043.49 536.379 1042.81C536.495 1042.14 536.105 1041.59 535.431 1041.47C534.814 1041.43 534.182 1041.88 534.088 1042.42Z" fill="#0B5C4D"></path><path d="M497.969 823.275C498.798 822.69 498.997 821.544 498.412 820.715C497.828 819.886 496.682 819.688 495.853 820.273C495.024 820.857 494.825 822.003 495.41 822.832C495.995 823.661 497.14 823.859 497.969 823.275Z" fill="#0B5C4D"></path><path d="M442.885 918.774C442.095 919.331 441.909 920.409 442.466 921.199C443.023 921.989 444.1 922.175 444.89 921.618C445.68 921.061 445.867 919.983 445.31 919.193C444.753 918.403 443.675 918.217 442.885 918.774Z" fill="#0B5C4D"></path><path d="M442.181 722.685C441.29 721.421 439.483 721.039 438.14 721.986C436.876 722.877 436.494 724.684 437.441 726.027C438.332 727.291 440.139 727.673 441.482 726.726C442.769 725.7 443.072 723.949 442.181 722.685Z" fill="#0B5C4D"></path><path d="M508.578 983.756C507.575 982.334 505.554 981.984 504.132 982.987C502.71 983.99 502.361 986.01 503.364 987.432C504.366 988.854 506.387 989.204 507.809 988.201C509.231 987.199 509.636 985.257 508.578 983.756Z" fill="#0B5C4D"></path><path d="M631.444 520.394C632.273 519.809 632.472 518.663 631.887 517.834C631.302 517.005 630.157 516.807 629.327 517.392C628.498 517.976 628.3 519.122 628.885 519.951C629.469 520.78 630.615 520.978 631.444 520.394Z" fill="#0B5C4D"></path><path d="M526.19 933.251C524.531 934.421 524.135 936.711 525.304 938.37C526.474 940.03 528.764 940.426 530.423 939.256C532.082 938.086 532.479 935.796 531.309 934.137C530.139 932.478 527.849 932.082 526.19 933.251Z" fill="#0B5C4D"></path><path d="M280.335 892.397C279.392 892.234 278.523 892.846 278.36 893.789C278.196 894.732 278.809 895.601 279.752 895.764C280.695 895.927 281.564 895.315 281.727 894.372C281.89 893.429 281.278 892.56 280.335 892.397Z" fill="#0B5C4D"></path><path d="M357.338 297.554C357.948 297.124 358.095 296.279 357.664 295.669C357.233 295.058 356.389 294.912 355.778 295.342C355.167 295.773 355.021 296.617 355.452 297.228C355.882 297.839 356.727 297.985 357.338 297.554Z" fill="#0B5C4D"></path><path d="M460.665 273.665C460.828 272.722 460.215 271.853 459.272 271.69C458.329 271.527 457.46 272.139 457.297 273.082C457.134 274.025 457.747 274.894 458.69 275.057C459.577 275.142 460.446 274.529 460.665 273.665Z" fill="#0B5C4D"></path><path d="M467.654 936.794C465.499 936.421 463.524 937.814 463.23 939.913C462.857 942.069 464.25 944.044 466.349 944.338C468.505 944.71 470.48 943.318 470.773 941.218C471.202 939.142 469.809 937.167 467.654 936.794Z" fill="#0B5C4D"></path><path d="M576.844 993.343C576.541 995.094 577.655 996.674 579.406 996.977C581.158 997.28 582.738 996.166 583.041 994.415C583.343 992.663 582.229 991.083 580.478 990.78C578.862 990.501 577.202 991.671 576.844 993.343Z" fill="#0B5C4D"></path><path d="M570.266 1010.52C571.451 1009.68 571.731 1008.07 570.895 1006.88C570.06 1005.7 568.443 1005.42 567.258 1006.25C566.073 1007.09 565.793 1008.71 566.629 1009.89C567.544 1011.02 569.16 1011.3 570.266 1010.52Z" fill="#0B5C4D"></path><path d="M586.401 924.033C586.192 925.246 586.972 926.352 588.184 926.561C589.396 926.771 590.502 925.991 590.712 924.779C590.922 923.567 590.142 922.46 588.93 922.251C587.796 921.985 586.611 922.821 586.401 924.033Z" fill="#0B5C4D"></path><path d="M299.016 932.808C297.669 932.575 296.405 933.466 296.251 934.758C296.018 936.105 296.909 937.369 298.2 937.523C299.547 937.756 300.811 936.865 300.965 935.573C301.254 934.305 300.363 933.041 299.016 932.808Z" fill="#0B5C4D"></path><path d="M515.356 1007.13C514.278 1006.94 513.172 1007.72 512.986 1008.8C512.8 1009.88 513.579 1010.98 514.657 1011.17C515.735 1011.36 516.841 1010.58 517.027 1009.5C517.293 1008.37 516.513 1007.26 515.356 1007.13Z" fill="#0B5C4D"></path><path d="M442.294 912.566C441.904 912.013 441.096 911.873 440.543 912.263C439.99 912.653 439.85 913.461 440.24 914.014C440.63 914.567 441.438 914.707 441.991 914.317C442.488 913.848 442.684 913.119 442.294 912.566Z" fill="#0B5C4D"></path><path d="M535.072 1024.69C535.281 1023.48 534.501 1022.37 533.289 1022.16C532.077 1021.95 530.971 1022.73 530.761 1023.94C530.551 1025.16 531.331 1026.26 532.543 1026.47C533.756 1026.68 534.941 1025.85 535.072 1024.69Z" fill="#0B5C4D"></path><path d="M630.29 606.489C631.502 606.699 632.608 605.919 632.818 604.707C633.027 603.494 632.247 602.388 631.035 602.179C629.823 601.969 628.717 602.749 628.507 603.961C628.297 605.173 629.077 606.28 630.29 606.489Z" fill="#0B5C4D"></path><path d="M450.994 504.865C451.133 504.056 450.576 503.266 449.768 503.126C448.96 502.987 448.17 503.544 448.03 504.352C447.89 505.16 448.447 505.95 449.256 506.09C450.064 506.23 450.854 505.673 450.994 504.865Z" fill="#0B5C4D"></path><path d="M484.693 963.812C483.75 963.649 482.881 964.262 482.797 965.149C482.634 966.092 483.247 966.961 484.134 967.045C485.077 967.208 485.946 966.595 486.03 965.708C486.249 964.844 485.636 963.975 484.693 963.812Z" fill="#0B5C4D"></path><path d="M345.168 823.974C346.128 823.298 346.357 821.971 345.68 821.011C345.003 820.051 343.676 819.821 342.717 820.498C341.757 821.175 341.527 822.502 342.204 823.462C342.881 824.422 344.208 824.651 345.168 823.974Z" fill="#0B5C4D"></path><path d="M485.509 916.989C486.694 916.153 487.053 914.481 486.162 913.217C485.326 912.032 483.654 911.673 482.39 912.564C481.205 913.4 480.846 915.072 481.737 916.336C482.708 917.545 484.324 917.824 485.509 916.989Z" fill="#0B5C4D"></path><path d="M581.168 929.025C582.037 928.413 582.247 927.2 581.634 926.331C581.021 925.462 579.809 925.252 578.94 925.865C578.071 926.478 577.861 927.69 578.474 928.559C579.007 929.484 580.22 929.694 581.168 929.025Z" fill="#0B5C4D"></path><path d="M476.147 970.312C475.312 969.127 473.695 968.847 472.51 969.683C471.325 970.518 471.045 972.135 471.881 973.32C472.717 974.505 474.333 974.784 475.518 973.949C476.703 973.113 476.983 971.497 476.147 970.312Z" fill="#0B5C4D"></path><path d="M455.672 941.103C456.452 942.209 457.934 942.465 459.04 941.686C460.146 940.906 460.402 939.424 459.622 938.318C458.842 937.212 457.36 936.956 456.254 937.735C455.148 938.515 454.892 939.997 455.672 941.103Z" fill="#0B5C4D"></path><path d="M580.225 930.874C579.724 930.163 578.725 929.921 577.935 930.478C577.145 931.035 576.982 931.978 577.539 932.768C578.04 933.479 579.039 933.721 579.829 933.164C580.619 932.607 580.726 931.585 580.225 930.874Z" fill="#0B5C4D"></path><path d="M191.074 854.207C189.737 852.311 187.178 851.868 185.282 853.205C183.386 854.542 182.943 857.102 184.28 858.998C185.617 860.894 188.177 861.337 190.073 860C191.913 858.584 192.356 856.024 191.074 854.207Z" fill="#0B5C4D"></path><path d="M563.231 929.251C562.125 930.031 561.869 931.513 562.649 932.619C563.428 933.725 564.91 933.981 566.016 933.201C567.122 932.421 567.379 930.939 566.599 929.833C565.819 928.727 564.337 928.471 563.231 929.251Z" fill="#0B5C4D"></path><path d="M587.494 930.952C587.75 929.47 586.803 928.127 585.377 927.95C583.895 927.693 582.552 928.64 582.375 930.066C582.119 931.548 583.066 932.891 584.492 933.068C585.839 933.301 587.182 932.354 587.494 930.952Z" fill="#0B5C4D"></path><path d="M443.471 1012.04C444.911 1011.02 445.255 1009.03 444.24 1007.59C443.225 1006.15 441.234 1005.81 439.795 1006.82C438.355 1007.84 438.011 1009.83 439.026 1011.27C440.041 1012.71 442.031 1013.05 443.471 1012.04Z" fill="#0B5C4D"></path><path d="M479.533 818.767C479.672 817.958 479.06 817.089 478.251 816.95C477.443 816.81 476.574 817.423 476.434 818.231C476.295 819.039 476.907 819.908 477.716 820.048C478.58 820.267 479.37 819.71 479.533 818.767Z" fill="#0B5C4D"></path><path d="M416.873 1037.89C415.609 1038.78 415.306 1040.53 416.197 1041.8C417.089 1043.06 418.84 1043.36 420.104 1042.47C421.368 1041.58 421.671 1039.83 420.78 1038.57C419.888 1037.3 418.137 1037 416.873 1037.89Z" fill="#0B5C4D"></path><path d="M452.073 484.585C451.404 483.637 450.113 483.483 449.244 484.096C448.296 484.764 448.063 486.111 448.676 486.98C449.344 487.929 450.636 488.083 451.584 487.414C452.587 486.825 452.741 485.533 452.073 484.585Z" fill="#0B5C4D"></path><path d="M547.866 998.045C546.444 999.047 546.118 1000.93 547.12 1002.36C548.123 1003.78 550.009 1004.1 551.431 1003.1C552.853 1002.1 553.179 1000.21 552.177 998.79C551.174 997.368 549.288 997.042 547.866 998.045Z" fill="#0B5C4D"></path><path d="M506.153 939.22C506.363 938.008 505.528 936.823 504.259 936.534C503.047 936.324 501.862 937.16 501.573 938.428C501.364 939.64 502.199 940.825 503.467 941.114C504.759 941.268 505.944 940.432 506.153 939.22Z" fill="#0B5C4D"></path><path d="M490.326 739.129C490.163 740.072 490.72 740.862 491.663 741.025C492.606 741.188 493.396 740.631 493.559 739.688C493.777 738.824 493.165 737.955 492.222 737.792C491.334 737.708 490.465 738.32 490.326 739.129Z" fill="#0B5C4D"></path><path d="M438.155 735.931C437.992 736.874 438.661 737.822 439.659 738.064C440.602 738.227 441.55 737.558 441.792 736.56C441.956 735.617 441.287 734.669 440.288 734.427C439.211 734.24 438.263 734.909 438.155 735.931Z" fill="#0B5C4D"></path><path d="M166.029 788.831C165.318 789.333 165.075 790.331 165.633 791.122C166.19 791.912 167.133 792.075 167.923 791.518C168.634 791.016 168.876 790.018 168.319 789.228C167.762 788.437 166.819 788.274 166.029 788.831Z" fill="#0B5C4D"></path><path d="M204.916 714.81C204.283 715.256 204.12 716.199 204.566 716.831C205.012 717.463 205.955 717.626 206.587 717.18C207.219 716.734 207.382 715.792 206.936 715.159C206.57 714.472 205.627 714.309 204.916 714.81Z" fill="#0B5C4D"></path><path d="M508.346 1038.45C506.845 1039.51 506.496 1041.53 507.554 1043.03C508.613 1044.53 510.633 1044.88 512.134 1043.82C513.635 1042.76 513.985 1040.74 512.926 1039.24C511.789 1037.8 509.768 1037.45 508.346 1038.45Z" fill="#0B5C4D"></path><path d="M413.492 1000.89C412.683 1000.75 411.814 1001.36 411.675 1002.17C411.535 1002.98 412.148 1003.85 412.956 1003.99C413.764 1004.13 414.633 1003.51 414.773 1002.7C414.992 1001.84 414.435 1001.05 413.492 1000.89Z" fill="#0B5C4D"></path><path d="M324.102 985.498C325.603 984.439 325.976 982.284 324.917 980.783C323.859 979.282 321.704 978.909 320.203 979.967C318.702 981.026 318.329 983.181 319.387 984.682C320.446 986.183 322.601 986.556 324.102 985.498Z" fill="#0B5C4D"></path><path d="M585.394 930.657C585.603 929.445 584.712 928.181 583.5 927.971C582.287 927.762 581.023 928.653 580.814 929.865C580.604 931.078 581.495 932.342 582.708 932.552C583.999 932.705 585.184 931.87 585.394 930.657Z" fill="#0B5C4D"></path><path d="M425.43 919.016C425.197 920.363 426.144 921.706 427.491 921.939C428.838 922.172 430.181 921.225 430.414 919.878C430.647 918.531 429.7 917.188 428.353 916.955C426.927 916.777 425.663 917.669 425.43 919.016Z" fill="#0B5C4D"></path><path d="M9.48238 692.457C11.2336 692.76 12.8927 691.59 13.1955 689.839C13.4984 688.088 12.3286 686.429 10.5774 686.126C8.82613 685.823 7.16706 686.993 6.8642 688.744C6.56133 690.495 7.73116 692.154 9.48238 692.457Z" fill="#0B5C4D"></path><path d="M520.317 1035.8C518.579 1037.03 518.081 1039.51 519.362 1041.33C520.643 1043.14 523.068 1043.56 524.885 1042.28C526.623 1041.06 527.122 1038.58 525.84 1036.76C524.559 1034.94 522.134 1034.52 520.317 1035.8Z" fill="#0B5C4D"></path><path d="M467.453 1043.86C468.665 1044.07 469.85 1043.24 470.06 1042.02C470.269 1040.81 469.434 1039.63 468.221 1039.42C467.009 1039.21 465.824 1040.04 465.614 1041.26C465.349 1042.39 466.185 1043.57 467.453 1043.86Z" fill="#0B5C4D"></path><path d="M551.647 904.772C553.087 903.756 553.431 901.766 552.416 900.326C551.401 898.886 549.41 898.542 547.97 899.557C546.531 900.573 546.186 902.563 547.202 904.003C548.217 905.443 550.207 905.787 551.647 904.772Z" fill="#0B5C4D"></path><path d="M479.051 805.506C478.795 806.988 479.742 808.331 481.223 808.587C482.705 808.843 484.048 807.896 484.304 806.414C484.561 804.933 483.614 803.59 482.132 803.333C480.65 803.077 479.228 804.08 479.051 805.506Z" fill="#0B5C4D"></path><path d="M338.463 561.499C339.161 561.007 339.328 560.042 338.835 559.344C338.343 558.646 337.378 558.479 336.68 558.971C335.982 559.463 335.815 560.428 336.307 561.126C336.8 561.825 337.765 561.991 338.463 561.499Z" fill="#0B5C4D"></path><path d="M581.472 851.453C582.685 851.663 583.791 850.883 584.001 849.67C584.21 848.458 583.43 847.352 582.218 847.142C581.006 846.933 579.9 847.712 579.69 848.925C579.559 850.081 580.339 851.187 581.472 851.453Z" fill="#0B5C4D"></path><path d="M359.63 1025.15C359.017 1024.28 357.805 1024.07 356.936 1024.68C356.066 1025.29 355.857 1026.51 356.47 1027.38C357.082 1028.25 358.295 1028.45 359.164 1027.84C360.033 1027.23 360.298 1026.1 359.63 1025.15Z" fill="#0B5C4D"></path><path d="M323.68 955.041C323.866 953.964 323.198 953.016 322.12 952.829C321.042 952.643 320.094 953.311 319.908 954.389C319.721 955.467 320.39 956.415 321.468 956.601C322.545 956.787 323.493 956.119 323.68 955.041Z" fill="#0B5C4D"></path><path d="M329.818 788.785C330.82 790.207 332.706 790.533 334.129 789.531C335.551 788.528 335.877 786.642 334.874 785.22C333.871 783.798 331.985 783.472 330.563 784.474C329.22 785.421 328.815 787.363 329.818 788.785Z" fill="#0B5C4D"></path><path d="M191.69 990.626C192.954 989.735 193.257 987.983 192.366 986.719C191.474 985.455 189.723 985.153 188.459 986.044C187.195 986.935 186.892 988.686 187.783 989.95C188.675 991.214 190.426 991.517 191.69 990.626Z" fill="#0B5C4D"></path><path d="M586.144 930.717C586.47 928.831 585.245 927.093 583.359 926.767C581.473 926.441 579.735 927.666 579.409 929.552C579.082 931.438 580.308 933.176 582.194 933.503C584.08 933.829 585.818 932.603 586.144 930.717Z" fill="#0B5C4D"></path><path d="M199.479 1029.01C201.365 1029.34 203.103 1028.11 203.429 1026.23C203.755 1024.34 202.53 1022.6 200.644 1022.28C198.758 1021.95 197.02 1023.18 196.694 1025.06C196.368 1026.95 197.593 1028.69 199.479 1029.01Z" fill="#0B5C4D"></path><path d="M535.806 736.865C537.228 735.862 537.554 733.976 536.552 732.554C535.549 731.132 533.663 730.806 532.241 731.808C530.819 732.811 530.493 734.697 531.495 736.119C532.498 737.541 534.384 737.867 535.806 736.865Z" fill="#0B5C4D"></path><path d="M197.015 804.595C198.358 803.648 198.763 801.706 197.761 800.284C196.814 798.941 194.872 798.536 193.45 799.539C192.107 800.486 191.702 802.427 192.704 803.849C193.786 805.216 195.672 805.542 197.015 804.595Z" fill="#0B5C4D"></path><path d="M417.13 1027.18C418.237 1026.4 418.516 1024.79 417.736 1023.68C416.956 1022.58 415.34 1022.3 414.234 1023.08C413.128 1023.86 412.848 1025.47 413.628 1026.58C414.408 1027.68 416.024 1027.96 417.13 1027.18Z" fill="#0B5C4D"></path><path d="M360.83 929.556C360.969 928.748 360.468 928.037 359.66 927.897C358.852 927.757 358.141 928.259 358.001 929.067C357.861 929.875 358.362 930.586 359.171 930.726C359.923 930.787 360.634 930.285 360.83 929.556Z" fill="#0B5C4D"></path><path d="M622.369 812.326C621.974 812.604 621.881 813.143 622.16 813.538C622.438 813.933 622.977 814.026 623.372 813.748C623.767 813.469 623.86 812.931 623.582 812.536C623.303 812.141 622.764 812.047 622.369 812.326Z" fill="#0B5C4D"></path><path d="M334.864 1014.69C335.533 1015.64 336.88 1015.87 337.828 1015.2C338.776 1014.54 339.009 1013.19 338.34 1012.24C337.672 1011.29 336.325 1011.06 335.377 1011.73C334.429 1012.4 334.196 1013.74 334.864 1014.69Z" fill="#0B5C4D"></path><path d="M515.692 1040.48C514.665 1041.21 514.432 1042.55 515.156 1043.58C515.88 1044.61 517.227 1044.84 518.254 1044.12C519.282 1043.39 519.515 1042.05 518.79 1041.02C518.066 1039.99 516.64 1039.82 515.692 1040.48Z" fill="#0B5C4D"></path><path d="M130.961 751.342C131.296 751.816 132.025 752.011 132.578 751.621C133.131 751.231 133.247 750.558 132.858 750.005C132.468 749.452 131.794 749.335 131.241 749.725C130.688 750.115 130.627 750.868 130.961 751.342Z" fill="#0B5C4D"></path><path d="M486.916 960.589C485.165 960.287 483.427 961.512 483.124 963.263C482.821 965.015 484.047 966.753 485.798 967.056C487.549 967.358 489.287 966.133 489.59 964.382C489.893 962.63 488.667 960.892 486.916 960.589Z" fill="#0B5C4D"></path><path d="M580.26 994.839C579.536 993.811 578.054 993.555 577.027 994.279C576 995.004 575.744 996.485 576.468 997.512C577.192 998.539 578.674 998.796 579.701 998.072C580.807 997.292 580.984 995.866 580.26 994.839Z" fill="#0B5C4D"></path><path d="M437.651 944.228C436.229 945.231 435.903 947.117 436.906 948.539C437.908 949.961 439.794 950.287 441.216 949.285C442.638 948.282 442.965 946.396 441.962 944.974C440.959 943.552 439.073 943.226 437.651 944.228Z" fill="#0B5C4D"></path><path d="M580.394 998.883C581.965 997.776 582.34 995.604 581.233 994.034C580.125 992.463 577.954 992.087 576.383 993.195C574.812 994.302 574.437 996.474 575.544 998.044C576.652 999.615 578.823 999.991 580.394 998.883Z" fill="#0B5C4D"></path><path d="M472.462 876.51C472.322 877.318 472.935 878.188 473.743 878.327C474.551 878.467 475.42 877.854 475.56 877.046C475.7 876.238 475.087 875.369 474.279 875.229C473.47 875.089 472.601 875.702 472.462 876.51Z" fill="#0B5C4D"></path><path d="M382.68 994.934C381.467 994.725 380.361 995.505 380.151 996.717C379.942 997.929 380.722 999.035 381.934 999.245C383.146 999.455 384.253 998.675 384.462 997.462C384.593 996.306 383.813 995.2 382.68 994.934Z" fill="#0B5C4D"></path><path d="M320.764 954.261C320.207 953.471 319.185 953.363 318.474 953.865C317.684 954.422 317.577 955.444 318.078 956.155C318.635 956.945 319.657 957.052 320.368 956.551C321.135 956.128 321.321 955.051 320.764 954.261Z" fill="#0B5C4D"></path><path d="M516.496 1041.46C516.022 1041.79 515.906 1042.46 516.24 1042.94C516.574 1043.41 517.248 1043.53 517.722 1043.19C518.196 1042.86 518.312 1042.19 517.978 1041.71C517.644 1041.24 516.97 1041.12 516.496 1041.46Z" fill="#0B5C4D"></path><path d="M576.847 1003.75C578.111 1002.86 578.493 1001.05 577.546 999.709C576.655 998.444 574.848 998.063 573.505 999.01C572.241 999.901 571.859 1001.71 572.806 1003.05C573.832 1004.34 575.583 1004.64 576.847 1003.75Z" fill="#0B5C4D"></path><path d="M579.526 997.486C580.355 996.901 580.553 995.755 579.969 994.926C579.384 994.097 578.238 993.899 577.409 994.484C576.58 995.068 576.382 996.214 576.967 997.043C577.551 997.872 578.697 998.07 579.526 997.486Z" fill="#0B5C4D"></path><path d="M412.614 864.771C413.557 864.935 414.347 864.378 414.51 863.435C414.674 862.492 414.116 861.702 413.174 861.538C412.231 861.375 411.441 861.932 411.278 862.875C411.114 863.818 411.727 864.687 412.614 864.771Z" fill="#0B5C4D"></path><path d="M486.123 1046.19C486.931 1046.33 487.721 1045.77 487.861 1044.97C488.001 1044.16 487.443 1043.37 486.635 1043.23C485.827 1043.09 485.037 1043.65 484.897 1044.45C484.813 1045.34 485.314 1046.05 486.123 1046.19Z" fill="#0B5C4D"></path><path d="M385.467 803.126C385.022 802.494 384.079 802.331 383.447 802.777C382.815 803.222 382.652 804.165 383.097 804.797C383.543 805.429 384.486 805.593 385.118 805.147C385.75 804.701 385.969 803.837 385.467 803.126Z" fill="#0B5C4D"></path><path d="M677.581 813.965C678.305 814.992 679.787 815.248 680.814 814.524C681.841 813.8 682.097 812.318 681.373 811.291C680.649 810.264 679.167 810.007 678.14 810.732C677.057 811.377 676.801 812.859 677.581 813.965Z" fill="#0B5C4D"></path><path d="M435.141 965.161C433.972 963.502 431.626 963.027 429.888 964.252C428.229 965.422 427.754 967.768 428.979 969.506C430.149 971.165 432.495 971.64 434.233 970.415C435.892 969.245 436.367 966.899 435.141 965.161Z" fill="#0B5C4D"></path><path d="M458.688 1047.2C459.467 1048.31 460.949 1048.57 462.055 1047.79C463.161 1047.01 463.418 1045.53 462.638 1044.42C461.858 1043.31 460.376 1043.06 459.27 1043.84C458.164 1044.62 457.908 1046.1 458.688 1047.2Z" fill="#0B5C4D"></path><path d="M494.987 990.147C495.22 988.8 494.328 987.536 492.981 987.303C491.634 987.07 490.37 987.962 490.137 989.309C489.904 990.656 490.796 991.92 492.143 992.153C493.49 992.386 494.754 991.494 494.987 990.147Z" fill="#0B5C4D"></path><path d="M543.79 1006.36C544 1005.15 543.164 1003.96 541.952 1003.75C540.74 1003.54 539.555 1004.38 539.345 1005.59C539.135 1006.8 539.971 1007.99 541.183 1008.2C542.451 1008.49 543.557 1007.71 543.79 1006.36Z" fill="#0B5C4D"></path><path d="M448.749 885.659C448.586 886.602 449.254 887.55 450.197 887.713C451.14 887.876 452.088 887.208 452.251 886.265C452.414 885.322 451.746 884.374 450.803 884.211C449.883 883.913 448.935 884.582 448.749 885.659Z" fill="#0B5C4D"></path><path d="M396.233 1044.52C396.975 1044 397.152 1042.97 396.629 1042.23C396.106 1041.49 395.081 1041.31 394.339 1041.83C393.597 1042.36 393.42 1043.38 393.943 1044.12C394.466 1044.87 395.491 1045.04 396.233 1044.52Z" fill="#0B5C4D"></path><path d="M421.089 680.19C421.757 681.138 423.104 681.371 424.052 680.703C425 680.034 425.233 678.687 424.565 677.739C423.897 676.791 422.549 676.558 421.601 677.227C420.653 677.895 420.42 679.242 421.089 680.19Z" fill="#0B5C4D"></path><path d="M480.715 599.352C480.948 598.005 480.057 596.741 478.71 596.508C477.363 596.275 476.099 597.167 475.866 598.514C475.633 599.861 476.524 601.125 477.871 601.358C479.218 601.591 480.482 600.7 480.715 599.352Z" fill="#0B5C4D"></path><path d="M557.417 863.803C557.207 865.015 558.043 866.2 559.311 866.489C560.524 866.699 561.708 865.863 561.997 864.595C562.207 863.383 561.371 862.198 560.103 861.909C558.812 861.755 557.627 862.591 557.417 863.803Z" fill="#0B5C4D"></path><path d="M151.856 402.698C149.97 402.371 148.153 403.653 147.827 405.539C147.5 407.425 148.782 409.242 150.668 409.568C152.553 409.894 154.371 408.613 154.697 406.727C155.023 404.841 153.742 403.024 151.856 402.698Z" fill="#0B5C4D"></path><path d="M516.175 786.191C516.385 784.978 515.549 783.793 514.337 783.584C513.124 783.374 511.939 784.21 511.73 785.422C511.52 786.634 512.356 787.819 513.568 788.029C514.78 788.239 515.965 787.403 516.175 786.191Z" fill="#0B5C4D"></path><path d="M263.744 1053.73C262.559 1054.56 262.28 1056.18 263.115 1057.36C263.951 1058.55 265.568 1058.83 266.753 1057.99C267.938 1057.16 268.217 1055.54 267.382 1054.35C266.546 1053.17 264.929 1052.89 263.744 1053.73Z" fill="#0B5C4D"></path><path d="M465.139 816.974C463.97 815.314 461.624 814.839 459.886 816.065C458.148 817.29 457.752 819.58 458.977 821.319C460.147 822.978 462.493 823.453 464.231 822.227C465.969 821.002 466.365 818.712 465.139 816.974Z" fill="#0B5C4D"></path><path d="M243.158 909.622C242.785 911.778 244.233 913.832 246.333 914.126C248.488 914.498 250.542 913.05 250.836 910.95C251.209 908.795 249.76 906.741 247.661 906.447C245.584 906.019 243.53 907.467 243.158 909.622Z" fill="#0B5C4D"></path><path d="M459.68 598.212C460.893 598.421 462.157 597.53 462.366 596.318C462.576 595.105 461.685 593.841 460.472 593.632C459.26 593.422 457.996 594.313 457.786 595.526C457.577 596.738 458.468 598.002 459.68 598.212Z" fill="#0B5C4D"></path><path d="M559.15 916.752C559.359 915.539 558.579 914.433 557.423 914.303C556.21 914.093 555.104 914.873 554.974 916.029C554.764 917.242 555.544 918.348 556.701 918.479C557.834 918.744 558.94 917.964 559.15 916.752Z" fill="#0B5C4D"></path><path d="M473.912 813.983C472.7 813.773 471.594 814.553 471.384 815.766C471.174 816.978 471.954 818.084 473.166 818.294C474.379 818.504 475.485 817.724 475.695 816.511C475.96 815.378 475.124 814.193 473.912 813.983Z" fill="#0B5C4D"></path><path d="M454.768 803.943C455.14 801.787 453.748 799.812 451.592 799.439C449.437 799.067 447.462 800.459 447.089 802.615C446.716 804.77 448.109 806.745 450.264 807.118C452.42 807.491 454.395 806.098 454.768 803.943Z" fill="#0B5C4D"></path><path d="M466.819 819.692C467.052 818.345 466.105 817.002 464.758 816.769C463.411 816.536 462.068 817.483 461.835 818.83C461.602 820.177 462.549 821.52 463.896 821.753C465.243 821.986 466.507 821.095 466.819 819.692Z" fill="#0B5C4D"></path><path d="M249.234 405.598C251.066 404.306 251.504 401.773 250.212 399.941C248.92 398.108 246.387 397.67 244.555 398.962C242.722 400.254 242.284 402.787 243.576 404.62C244.868 406.453 247.401 406.891 249.234 405.598Z" fill="#0B5C4D"></path><path d="M343.022 900.95C342.079 900.786 341.21 901.399 341.047 902.342C340.884 903.285 341.497 904.154 342.44 904.317C343.383 904.48 344.252 903.868 344.415 902.925C344.578 901.982 343.965 901.113 343.022 900.95Z" fill="#0B5C4D"></path><path d="M455.506 920.402C454.159 920.169 452.895 921.06 452.741 922.352C452.508 923.699 453.399 924.963 454.691 925.117C456.038 925.35 457.302 924.458 457.456 923.167C457.689 921.82 456.853 920.635 455.506 920.402Z" fill="#0B5C4D"></path><path d="M484.264 986.352C483.818 985.72 483.01 985.58 482.378 986.026C481.746 986.472 481.606 987.28 482.051 987.912C482.497 988.544 483.305 988.684 483.937 988.238C484.569 987.792 484.709 986.984 484.264 986.352Z" fill="#0B5C4D"></path><path d="M271.072 802.765C270.129 802.602 269.181 803.27 269.018 804.213C268.855 805.156 269.523 806.104 270.466 806.267C271.409 806.43 272.357 805.762 272.52 804.819C272.628 803.797 272.015 802.928 271.072 802.765Z" fill="#0B5C4D"></path><path d="M468.787 939.071C467.575 938.861 466.469 939.641 466.259 940.854C466.049 942.066 466.829 943.172 468.041 943.382C469.254 943.591 470.36 942.812 470.57 941.599C470.7 940.443 469.92 939.336 468.787 939.071Z" fill="#0B5C4D"></path><path d="M468.588 929.395C467.975 928.526 466.707 928.237 465.759 928.906C464.811 929.574 464.601 930.786 465.269 931.734C465.882 932.603 467.15 932.892 468.098 932.224C469.046 931.555 469.2 930.264 468.588 929.395Z" fill="#0B5C4D"></path><path d="M438.676 753.781C438.792 753.108 438.291 752.397 437.618 752.28C436.944 752.164 436.233 752.665 436.116 753.338C436 754.012 436.501 754.723 437.175 754.84C437.848 754.956 438.56 754.455 438.676 753.781Z" fill="#0B5C4D"></path></g>',
                              2
                           ),
                        ]),
                     512
                  )
               );
            }
            var a = {
                  name: "CircuitImg",
                  props: {},
                  mounted() {
                     function L(L, t) {
                        return (L = Math.ceil(L)), (t = Math.floor(t)), Math.floor(Math.random() * (t - L + 1)) + L;
                     }
                     const t = this.$refs.svg.getElementById("circuit-lines"),
                        e = t.querySelectorAll("path");
                     e.forEach((t) => {
                        const e = t.getTotalLength();
                        t.style.setProperty("--path-length", e),
                           setTimeout(() => {
                              t.classList.add("animated");
                           }, L(0, 2500));
                     }),
                        setInterval(() => {
                           const o = e[L(0, e.length)];
                           if (o) {
                              let L = o.cloneNode(!0);
                              L.classList.add("animated-lineover"),
                                 (L.style.stroke = "#02FFCF"),
                                 L.addEventListener("animationend", () => {
                                    L.remove();
                                 }),
                                 t.appendChild(L);
                           }
                        }, 500);
                  },
               },
               n = e(1241);
            const s = (0, n.A)(a, [["render", r]]);
            var l = s;
         },
         7568: function (L, t, e) {
            "use strict";
            e.d(t, {
               A: function () {
                  return l;
               },
            });
            var o = e(6768);
            const i = {
               width: "19",
               height: "19",
               viewBox: "0 0 19 19",
               fill: "none",
               xmlns: "http://www.w3.org/2000/svg",
            };
            function r(L, t) {
               return (
                  (0, o.uX)(),
                  (0, o.CE)(
                     "svg",
                     i,
                     t[0] ||
                        (t[0] = [
                           (0, o.Lk)(
                              "path",
                              {
                                 d: "M9.26198 0.385742C4.14474 0.385742 0 4.46101 0 9.48718C0 13.5092 2.65356 16.9199 6.33288 18.1224C6.79598\n            18.2081 6.96578 17.9264 6.96578 17.6848C6.96578 17.4687 6.95806 16.896 6.9542 16.1373C4.37783 16.6861\n            3.83446 14.9162 3.83446 14.9162C3.41304 13.8658 2.80406 13.5848 2.80406 13.5848C1.96508 13.0206 2.8689\n            13.0322 2.8689 13.0322C3.79896 13.0955 4.28753 13.97 4.28753 13.97C5.11339 15.3616 6.4556 14.9595 6.98508\n            14.7271C7.06844 14.1382 7.30693 13.7377 7.57167 13.51C5.51474 13.2823 3.35284 12.4996 3.35284 9.0125C3.35284\n            8.01916 3.71174 7.20719 4.30605 6.57043C4.20185 6.34042 3.88926 5.415 4.38709 4.16154C4.38709 4.16154\n            5.16278 3.91764 6.93414 5.09469C7.6751 4.89247 8.46236 4.79213 9.24963 4.7875C10.0369 4.79213 10.8242\n            4.89247 11.5651 5.09469C13.3249 3.91764 14.1006 4.16154 14.1006 4.16154C14.5984 5.415 14.2858 6.34042\n            14.1932 6.57043C14.7837 7.20719 15.1426 8.01916 15.1426 9.0125C15.1426 12.5089 12.9776 13.2784 10.9168\n            13.5022C11.241 13.7755 11.542 14.3335 11.542 15.1864C11.542 16.4043 11.5304 17.383 11.5304 17.6786C11.5304\n            17.9171 11.6925 18.2019 12.1672 18.1109C15.8727 16.9161 18.524 13.503 18.524 9.48718C18.524 4.46101 14.3769\n            0.385742 9.26198 0.385742Z",
                                 fill: "currentColor",
                              },
                              null,
                              -1
                           ),
                        ])
                  )
               );
            }
            var a = e(1241);
            const n = {},
               s = (0, a.A)(n, [["render", r]]);
            var l = s;
         },
         9107: function (L, t, e) {
            "use strict";
            e.d(t, {
               A: function () {
                  return M;
               },
            });
            var o = e(6768),
               i = e(3935);
            const r = {
                  class: "scroll-bar-top",
               },
               a = {
                  id: "logo",
               },
               n = {
                  id: "mobile_menu",
               };
            function s(L, t, e, s, l, d) {
               const h = (0, o.g2)("router-link"),
                  p = (0, o.g2)("NavLinks");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("div", null, [
                     (0, o.Lk)("nav", r, [
                        (0, o.Lk)("ul", null, [
                           (0, o.Lk)("li", a, [
                              (0, o.bF)(
                                 h,
                                 {
                                    to: {
                                       name: "home",
                                    },
                                 },
                                 {
                                    default: (0, o.k6)(
                                       () =>
                                          t[0] ||
                                          (t[0] = [
                                             (0, o.Lk)(
                                                "img",
                                                {
                                                   src: i,
                                                },
                                                null,
                                                -1
                                             ),
                                             (0, o.Lk)("div", null, " XELIS ", -1),
                                          ])
                                    ),
                                    _: 1,
                                 }
                              ),
                           ]),
                           "home" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.CE)(
                                   o.FK,
                                   {
                                      key: 0,
                                   },
                                   [
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#objectives",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[1] || (t[1] = [(0, o.eW)(" Objectives ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#network",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[2] || (t[2] = [(0, o.eW)(" Network ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#supply",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[3] || (t[3] = [(0, o.eW)(" Supply ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#timeline",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[4] || (t[4] = [(0, o.eW)(" Timeline ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#socials",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[5] || (t[5] = [(0, o.eW)(" Socials ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      t[6] || (t[6] = (0, o.Lk)("li", null, "/", -1)),
                                      (0, o.bF)(p),
                                   ],
                                   64
                                ))
                              : (0, o.Q3)("", !0),
                           "resources" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.CE)(
                                   o.FK,
                                   {
                                      key: 1,
                                   },
                                   [
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#wallets",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[7] || (t[7] = [(0, o.eW)(" Wallets ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#nodes",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[8] || (t[8] = [(0, o.eW)(" Nodes ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#mining",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[9] || (t[9] = [(0, o.eW)(" Mining ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#links",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[10] || (t[10] = [(0, o.eW)(" Links ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      t[11] || (t[11] = (0, o.Lk)("li", null, "/", -1)),
                                      (0, o.bF)(p),
                                   ],
                                   64
                                ))
                              : (0, o.Q3)("", !0),
                           "roadmap" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.CE)(
                                   o.FK,
                                   {
                                      key: 2,
                                   },
                                   [
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "roadmap",
                                                  hash: "#tasks",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[12] || (t[12] = [(0, o.eW)(" Tasks ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "roadmap",
                                                  hash: "#timeline",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[13] || (t[13] = [(0, o.eW)(" Timeline ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      t[14] || (t[14] = (0, o.Lk)("li", null, "/", -1)),
                                      (0, o.bF)(p),
                                   ],
                                   64
                                ))
                              : (0, o.Q3)("", !0),
                           "exchanges" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.Wv)(p, {
                                   key: 3,
                                }))
                              : (0, o.Q3)("", !0),
                           "merch" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.Wv)(p, {
                                   key: 4,
                                }))
                              : (0, o.Q3)("", !0),
                           //"not_found" === L.$route.name
                           //   ? ((0, o.uX)(),
                           //     (0, o.Wv)(p, {
                           //        key: 5,
                           //     }))
                           //   : (0, o.Q3)("", !0),
                           t[15] ||
                              (t[15] = (0, o.Lk)(
                                 "li",
                                 {
                                    id: "burger_menu",
                                 },
                                 [(0, o.Lk)("button", null, [(0, o.Lk)("span")])],
                                 -1
                              )),
                        ]),
                     ]),
                     (0, o.Lk)("div", n, [
                        (0, o.Lk)("ul", null, [
                           "home" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.CE)(
                                   o.FK,
                                   {
                                      key: 0,
                                   },
                                   [
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#objectives",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[16] || (t[16] = [(0, o.eW)(" Objectives ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#network",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[17] || (t[17] = [(0, o.eW)(" Network ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#supply",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[18] || (t[18] = [(0, o.eW)(" Supply ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "home",
                                                  hash: "#socials",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[19] || (t[19] = [(0, o.eW)(" Socials ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      t[20] || (t[20] = (0, o.Lk)("li", null, "-", -1)),
                                      (0, o.bF)(p),
                                   ],
                                   64
                                ))
                              : (0, o.Q3)("", !0),
                           "resources" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.CE)(
                                   o.FK,
                                   {
                                      key: 1,
                                   },
                                   [
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#wallets",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[21] || (t[21] = [(0, o.eW)(" Wallets ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#nodes",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[22] || (t[22] = [(0, o.eW)(" Nodes ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#mining",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[23] || (t[23] = [(0, o.eW)(" Mining ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "resources",
                                                  hash: "#links",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[24] || (t[24] = [(0, o.eW)(" Links ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      t[25] || (t[25] = (0, o.Lk)("li", null, "-", -1)),
                                      (0, o.bF)(p),
                                   ],
                                   64
                                ))
                              : (0, o.Q3)("", !0),
                           "roadmap" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.CE)(
                                   o.FK,
                                   {
                                      key: 2,
                                   },
                                   [
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "roadmap",
                                                  hash: "#tasks",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[26] || (t[26] = [(0, o.eW)(" Tasks ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      (0, o.Lk)("li", null, [
                                         (0, o.bF)(
                                            h,
                                            {
                                               to: {
                                                  name: "roadmap",
                                                  hash: "#timeline",
                                               },
                                            },
                                            {
                                               default: (0, o.k6)(() => t[27] || (t[27] = [(0, o.eW)(" Timeline ")])),
                                               _: 1,
                                            }
                                         ),
                                      ]),
                                      t[28] || (t[28] = (0, o.Lk)("li", null, "-", -1)),
                                      (0, o.bF)(p),
                                   ],
                                   64
                                ))
                              : (0, o.Q3)("", !0),
                           "exchanges" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.Wv)(p, {
                                   key: 3,
                                }))
                              : (0, o.Q3)("", !0),
                           "merch" === L.$route.name
                              ? ((0, o.uX)(),
                                (0, o.Wv)(p, {
                                   key: 4,
                                }))
                              : (0, o.Q3)("", !0),
                           //"not_found" === L.$route.name
                           //   ? ((0, o.uX)(),
                           //     (0, o.Wv)(p, {
                           //        key: 5,
                           //     }))
                           //   : (0, o.Q3)("", !0),
                        ]),
                     ]),
                  ])
               );
            }
            const l = {
                  key: 0,
               },
               d = {
                  key: 1,
               },
               h = {
                  key: 2,
               },
               p = {
                  key: 3,
               },
               C = {
                  key: 4,
               };
            function c(L, t, e, i, r, a) {
               const n = (0, o.g2)("router-link");
               return (
                  (0, o.uX)(),
                  (0, o.CE)(
                     o.FK,
                     null,
                     [
                        "home" !== L.$route.name
                           ? ((0, o.uX)(),
                             (0, o.CE)("li", l, [
                                (0, o.bF)(
                                   n,
                                   {
                                      to: {
                                         name: "home",
                                      },
                                   },
                                   {
                                      default: (0, o.k6)(() => t[0] || (t[0] = [(0, o.eW)(" Home ")])),
                                      _: 1,
                                   }
                                ),
                             ]))
                           : (0, o.Q3)("", !0),
                        "roadmap" !== L.$route.name
                           ? ((0, o.uX)(),
                             (0, o.CE)("li", d, [
                                (0, o.bF)(
                                   n,
                                   {
                                      to: {
                                         name: "roadmap",
                                      },
                                   },
                                   {
                                      default: (0, o.k6)(() => t[1] || (t[1] = [(0, o.eW)(" Roadmap ")])),
                                      _: 1,
                                   }
                                ),
                             ]))
                           : (0, o.Q3)("", !0),
                        "resources" !== L.$route.name
                           ? ((0, o.uX)(),
                             (0, o.CE)("li", h, [
                                (0, o.bF)(
                                   n,
                                   {
                                      to: {
                                         name: "resources",
                                      },
                                   },
                                   {
                                      default: (0, o.k6)(() => t[2] || (t[2] = [(0, o.eW)(" Resources ")])),
                                      _: 1,
                                   }
                                ),
                             ]))
                           : (0, o.Q3)("", !0),
                        "merch" !== L.$route.name
                           ? ((0, o.uX)(),
                             (0, o.CE)("li", p, [
                                (0, o.bF)(
                                   n,
                                   {
                                      to: {
                                         name: "merch",
                                      },
                                   },
                                   {
                                      default: (0, o.k6)(() => t[3] || (t[3] = [(0, o.eW)(" Merch ")])),
                                      _: 1,
                                   }
                                ),
                             ]))
                           : (0, o.Q3)("", !0),
                        "exchanges" !== L.$route.name
                           ? ((0, o.uX)(),
                             (0, o.CE)("li", C, [
                                (0, o.bF)(
                                   n,
                                   {
                                      to: {
                                         name: "exchanges",
                                      },
                                   },
                                   {
                                      default: (0, o.k6)(() => t[4] || (t[4] = [(0, o.eW)(" Exchanges ")])),
                                      _: 1,
                                   }
                                ),
                             ]))
                           : (0, o.Q3)("", !0),
                        t[5] ||
                           (t[5] = (0, o.Lk)(
                              "li",
                              null,
                              [
                                 (0, o.Lk)(
                                    "a",
                                    {
                                       href: "https://xeliscommunity.org/",
                                       target: "_blank",
                                    },
                                    " Blog "
                                 ),
                              ],
                              -1
                           )),
                        t[6] ||
                           (t[6] = (0, o.Lk)(
                              "li",
                              null,
                              [
                                 (0, o.Lk)(
                                    "a",
                                    {
                                       href: "https://docs.xelis.io/",
                                       target: "_blank",
                                    },
                                    " Documentation "
                                 ),
                              ],
                              -1
                           )),
                     ],
                     64
                  )
               );
            }
            var u = {
                  name: "NavLinks",
                  props: [],
               },
               k = e(1241);
            const m = (0, k.A)(u, [["render", c]]);
            var f = m,
               g = {
                  name: "NavigationMenu",
                  components: {
                     NavLinks: f,
                  },
                  mounted() {
                     const L = document.querySelector("#burger_menu button");
                     L &&
                        L.addEventListener("click", () => {
                           document.body.classList.toggle("menu-open");
                        }),
                        document.querySelectorAll("#mobile_menu a").forEach((L) => {
                           L.addEventListener("click", () => {
                              document.body.classList.remove("menu-open");
                           });
                        }),
                        window.addEventListener("resize", () => {
                           window.innerWidth > 748 && document.body.classList.remove("menu-open");
                        });
                  },
               };
            const v = (0, k.A)(g, [["render", s]]);
            var M = v;
         },
         2913: function (L, t, e) {
            "use strict";
            e.d(t, {
               A: function () {
                  return C;
               },
            });
            var o = e(6768),
               i = e(4232);
            const r = {
                  id: "timeline",
               },
               a = {
                  class: "top",
               },
               n = {
                  class: "bottom",
               };
            function s(L, t, e, s, l, d) {
               const h = (0, o.g2)("router-link");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("section", r, [
                     t[2] || (t[2] = (0, o.Lk)("h2", null, "Timeline", -1)),
                     (0, o.Lk)(
                        "div",
                        {
                           id: "timeline-container",
                           class: (0, i.C4)([
                              "scroll-bar is-animated",
                              {
                                 "fade-childs": !L.preRendered,
                              },
                           ]),
                        },
                        [
                           ((0, o.uX)(!0),
                           (0, o.CE)(
                              o.FK,
                              null,
                              (0, o.pI)(
                                 l.tasks,
                                 (L, e) => (
                                    (0, o.uX)(),
                                    (0, o.CE)(
                                       "div",
                                       {
                                          key: e,
                                          class: (0, i.C4)([
                                             "is-animated",
                                             {
                                                done: "Completed" === L.status,
                                             },
                                          ]),
                                       },
                                       [
                                          (0, o.Lk)("div", a, [
                                             e % 2 === 0
                                                ? ((0, o.uX)(),
                                                  (0, o.CE)(
                                                     o.FK,
                                                     {
                                                        key: 0,
                                                     },
                                                     [
                                                        (0, o.Lk)(
                                                           "div",
                                                           null,
                                                           (0, i.v_)(L.year) + " " + (0, i.v_)(L.quarter),
                                                           1
                                                        ),
                                                        (0, o.Lk)("div", null, (0, i.v_)(L.name), 1),
                                                     ],
                                                     64
                                                  ))
                                                : (0, o.Q3)("", !0),
                                          ]),
                                          t[0] ||
                                             (t[0] = (0, o.Lk)(
                                                "div",
                                                {
                                                   class: "circle",
                                                },
                                                [(0, o.Lk)("div")],
                                                -1
                                             )),
                                          (0, o.Lk)("div", n, [
                                             e % 2 === 1
                                                ? ((0, o.uX)(),
                                                  (0, o.CE)(
                                                     o.FK,
                                                     {
                                                        key: 0,
                                                     },
                                                     [
                                                        (0, o.Lk)(
                                                           "div",
                                                           null,
                                                           (0, i.v_)(L.year) + " " + (0, i.v_)(L.quarter),
                                                           1
                                                        ),
                                                        (0, o.Lk)("div", null, (0, i.v_)(L.name), 1),
                                                     ],
                                                     64
                                                  ))
                                                : (0, o.Q3)("", !0),
                                          ]),
                                       ],
                                       2
                                    )
                                 )
                              ),
                              128
                           )),
                        ],
                        2
                     ),
                     e.showRoadmapLink
                        ? ((0, o.uX)(),
                          (0, o.Wv)(
                             h,
                             {
                                key: 0,
                                to: {
                                   name: "roadmap",
                                },
                             },
                             {
                                default: (0, o.k6)(
                                   () =>
                                      t[1] ||
                                      (t[1] = [
                                         (0, o.Lk)(
                                            "svg",
                                            {
                                               fill: "currentColor",
                                               height: "20px",
                                               width: "20px",
                                               xmlns: "http://www.w3.org/2000/svg",
                                               "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                               viewBox: "0 0 491.5 491.5",
                                            },
                                            [
                                               (0, o.Lk)("path", {
                                                  d: "M348.1,245.7c-67.8,0-122.9,55.1-122.9,122.9s55.1,122.9,122.9,122.9S471,436.4,471,368.6S415.9,245.7,348.1,245.7z\n                    M403.5,362.6l-41,41c-4,4-9.2,6-14.5,6c-5.2,0-10.5-2-14.5-6L313,383.1c-8-8-8-21,0-29s21-8,29,0l6,6l26.5-26.5c8-8,21-8,29,0\n                    C411.5,341.7,411.5,354.6,403.5,362.6z",
                                               }),
                                               (0, o.Lk)("path", {
                                                  d: "M385.3,41h-57.7v-9.8c0-17.2-14-31.2-31.2-31.2H154c-17.2,0-31.2,14-31.2,31.2v9.7H65.2c-24.7,0-44.7,20.1-44.7,44.7\n                    v361.1c0,24.7,20.1,44.7,44.7,44.7h174.9c-34.2-29.9-55.8-73.8-55.8-122.8h-81.9c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5\n                    h81.9c1.8,0,3.4,0.6,5.1,1c3.8-14.9,9.5-29,17-42h-83.6c-11.3,0-20.5-9.2-20.5-20.5s9.2-20.5,20.5-20.5h102.4\n                    c4.1,0,7.7,1.5,10.9,3.6c29.3-27.5,68.6-44.6,112-44.6c29.9,0,57.8,8.2,81.9,22.2V85.7C430,61,409.9,41,385.3,41z M163.8,184.3\n                    h-41c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h41c11.3,0,20.5,9.2,20.5,20.5C184.3,175.1,175.1,184.3,163.8,184.3z\n                    M163.8,81.9v-41h122.9v41H163.8z M327.6,184.3h-81.9c-11.3,0-20.5-9.2-20.5-20.5c0-11.3,9.2-20.5,20.5-20.5h81.9\n                    c11.3,0,20.5,9.2,20.5,20.5C348.1,175.1,338.9,184.3,327.6,184.3z",
                                               }),
                                            ],
                                            -1
                                         ),
                                         (0, o.eW)(" Check the roadmap "),
                                      ])
                                ),
                                _: 1,
                             }
                          ))
                        : (0, o.Q3)("", !0),
                  ])
               );
            }
            var l = e(6422),
               d = {
                  props: ["showRoadmapLink"],
                  data() {
                     return {
                        tasks: l.A,
                     };
                  },
               },
               h = e(1241);
            const p = (0, h.A)(d, [["render", s]]);
            var C = p;
         },
         3413: function (L, t, e) {
            "use strict";
            e.r(t),
               e.d(t, {
                  default: function () {
                     return g;
                  },
               });
            var o = e(6768),
               i = e(4232);
            const r = {
                  id: "exchanges_view",
               },
               a = {
                  class: "sort-container",
               },
               n = {
                  class: "exchange-list",
               },
               s = ["href"],
               l = {
                  class: "title",
               },
               d = ["alt", "src"];
            function h(L, t, e, h, p, C) {
               const c = (0, o.g2)("NavigationMenu");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("div", r, [
                     t[5] ||
                        (t[5] = (0, o.Fv)(
                           '<svg class="coins" width="483" height="475" viewBox="0 0 483 475" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.28"><circle cx="320" cy="184" r="133" transform="rotate(-15 320 184)" fill="#09836C"></circle><circle cx="316.938" cy="182.232" r="130.5" transform="rotate(-15 316.938 182.232)" fill="#02FFCF"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M340.412 258.247L398.557 156.491L306.473 102.777L325.034 127.171L382.619 160.761L336.103 242.166L255.117 194.926L288.094 136.268L292.099 106.583L239.179 199.196L340.412 258.247Z" fill="#0F493E"></path><path d="M336.103 242.166L292.099 106.583L288.094 136.268L336.103 242.166Z" fill="#0F493E"></path><path d="M306.473 102.777L336.103 242.166L325.034 127.171L306.473 102.777Z" fill="#0F493E"></path></g><g opacity="0.8"><circle cx="181.681" cy="181.681" r="133" transform="rotate(30 181.681 181.681)" fill="#09836C"></circle><circle cx="180.766" cy="178.266" r="130.5" transform="rotate(30 180.766 178.266)" fill="#02FFCF"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M143.614 248.615L256.681 217.778L229.55 114.683L225.425 145.057L242.392 209.528L151.938 234.198L128.077 143.528L192.872 125.369L216.695 107.211L113.787 135.278L143.614 248.615Z" fill="#0F493E"></path><path d="M151.938 234.198L216.695 107.211L192.872 125.369L151.938 234.198Z" fill="#0F493E"></path><path d="M229.55 114.683L151.938 234.198L225.425 145.057L229.55 114.683Z" fill="#0F493E"></path></g><g><circle cx="250.891" cy="311.891" r="133" transform="rotate(-15 250.891 311.891)" fill="#09836C"></circle><circle cx="247.829" cy="310.123" r="130.5" transform="rotate(-15 247.829 310.123)" fill="#02FFCF"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M271.303 386.138L329.448 284.382L237.364 230.668L255.925 255.062L313.51 288.652L266.994 370.057L186.008 322.817L218.985 264.159L222.99 234.474L170.07 327.087L271.303 386.138Z" fill="#0F493E"></path><path d="M266.994 370.057L222.99 234.474L218.985 264.159L266.994 370.057Z" fill="#0F493E"></path><path d="M237.364 230.668L266.994 370.057L255.925 255.062L237.364 230.668Z" fill="#0F493E"></path></g></svg>',
                           1
                        )),
                     (0, o.Lk)(
                        "header",
                        {
                           class: (0, i.C4)({
                              safari: C.isSafari,
                           }),
                        },
                        [
                           (0, o.bF)(c),
                           t[2] ||
                              (t[2] = (0, o.Lk)(
                                 "div",
                                 {
                                    class: "bg",
                                 },
                                 [
                                    (0, o.Lk)("div", {
                                       class: "bgtr",
                                    }),
                                    (0, o.Lk)("div", {
                                       class: "bgt",
                                    }),
                                 ],
                                 -1
                              )),
                        ],
                        2
                     ),
                     (0, o.Lk)("main", null, [
                        (0, o.Lk)("h2", null, [
                           (0, o.eW)(" Exchanges (" + (0, i.v_)(C.exchanges.length) + ") ", 1),
                           t[3] ||
                              (t[3] = (0, o.Lk)(
                                 "div",
                                 null,
                                 " Use at your own risk, and never keep your coins on the platform after trading. Not your keys, not your coins! ",
                                 -1
                              )),
                        ]),
                        (0, o.Lk)("div", a, [
                           (0, o.Lk)(
                              "button",
                              {
                                 class: (0, i.C4)({
                                    active: "volume" === C.sort,
                                 }),
                                 onClick: t[0] || (t[0] = (L) => C.setSort("volume")),
                              },
                              "Sort By Volume",
                              2
                           ),
                           t[4] || (t[4] = (0, o.Lk)("div", null, "|", -1)),
                           (0, o.Lk)(
                              "button",
                              {
                                 class: (0, i.C4)({
                                    active: "date" === C.sort,
                                 }),
                                 onClick: t[1] || (t[1] = (L) => C.setSort("date")),
                              },
                              "Sort By Added Date",
                              2
                           ),
                        ]),
                        (0, o.Lk)("div", n, [
                           ((0, o.uX)(!0),
                           (0, o.CE)(
                              o.FK,
                              null,
                              (0, o.pI)(
                                 C.exchanges,
                                 (L, t) => (
                                    (0, o.uX)(),
                                    (0, o.CE)(
                                       "a",
                                       {
                                          key: t,
                                          class: "exchange",
                                          href: L.link,
                                       },
                                       [
                                          (0, o.Lk)("div", l, (0, i.v_)(L.name), 1),
                                          (0, o.Lk)(
                                             "div",
                                             {
                                                class: "ebg",
                                                style: (0, i.Tr)({
                                                   backgroundImage: "url(" + L.market_img + ")",
                                                }),
                                             },
                                             null,
                                             4
                                          ),
                                          (0, o.Lk)(
                                             "img",
                                             {
                                                alt: "Logo of " + L.name,
                                                src: L.logo_img,
                                             },
                                             null,
                                             8,
                                             d
                                          ),
                                       ],
                                       8,
                                       s
                                    )
                                 )
                              ),
                              128
                           )),
                        ]),
                     ]),
                  ])
               );
            }
            e(4114);
            var p = e(9107),
               C = [
                  {
                     name: "TradeOgre",
                     link: "https://tradeogre.com/exchange/XEL-USDT",
                     logo_img: "https://docs.xelis.io/exchanges/tradeogre_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/tradeogre.webp",
                     sort_volume: 3,
                  },
                  {
                     name: "Exbitron",
                     link: "https://exbitron.com/trade?market=XEL-USDT",
                     logo_img: "https://docs.xelis.io/exchanges/exbitron_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/exbitron.webp",
                     sort_volume: 7,
                  },
                  {
                     name: "Seven Seas",
                     link: "https://www.sevenseas.exchange/market/XEL-USDT",
                     logo_img: "https://docs.xelis.io/exchanges/sevenseas_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/sevenseas.webp",
                     sort_volume: 8,
                  },
                  {
                     name: "NonKYC",
                     link: "https://nonkyc.io/market/XEL_USDT",
                     logo_img: "https://docs.xelis.io/exchanges/nonkyc_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/nonkyc.webp",
                     sort_volume: 5,
                  },
                  {
                     name: "Xeggex",
                     link: "https://xeggex.com/market/XEL_USDT",
                     logo_img: "https://docs.xelis.io/exchanges/xeggex_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/xeggex.webp",
                     sort_volume: 4,
                  },
                  {
                     name: "CoinEx",
                     link: "https://www.coinex.com/en/exchange/xel-usdt",
                     logo_img: "https://docs.xelis.io/exchanges/coinex_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/coinex.webp",
                     sort_volume: 2,
                  },
                  {
                     name: "MEXC",
                     link: "https://www.mexc.com/exchange/XEL_USDT",
                     logo_img: "https://docs.xelis.io/exchanges/mexc_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/mexc.webp",
                     sort_volume: 1,
                  },
                  {
                     name: "Biconomy",
                     link: "https://www.biconomy.com/exchange/XEL_USDT",
                     logo_img: "https://docs.xelis.io/exchanges/biconomy_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/biconomy.webp",
                     sort_volume: 0,
                  },
                  {
                     name: "SafeTrade",
                     link: "https://safe.trade/exchange/XEL-USDT",
                     logo_img: "https://docs.xelis.io/exchanges/safetrade_logo.webp",
                     market_img: "https://docs.xelis.io/exchanges/safetrade.webp",
                     sort_volume: 6,
                  },
               ],
               c = e(5214),
               u = e.n(c),
               k = {
                  name: "ExchangesView",
                  components: {
                     NavigationMenu: p.A,
                  },
                  mounted() {
                     document.title = u()["/exchanges"].title;
                  },
                  methods: {
                     setSort(L) {
                        this.$router.push({
                           path: "/exchanges",
                           query: {
                              sort: L,
                           },
                        });
                     },
                  },
                  computed: {
                     sort() {
                        return this.$route.query.sort || "volume";
                     },
                     exchanges() {
                        return "date" === this.sort
                           ? C
                           : Object.assign([], C).sort((L, t) => L.sort_volume - t.sort_volume);
                     },
                  },
                  inject: ["isSafari"],
               },
               m = e(1241);
            const f = (0, m.A)(k, [["render", h]]);
            var g = f;
         },
         408: function (L, t, e) {
            "use strict";
            e.r(t),
               e.d(t, {
                  default: function () {
                     return h;
                  },
               });
            var o = e(6768),
               i = e(4232);
            const r = {
               id: "not_found_view",
            };
            function a(L, t, e, a, n, s) {
               const l = (0, o.g2)("NavigationMenu");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("div", r, [
                     (0, o.Lk)(
                        "header",
                        {
                           class: (0, i.C4)({
                              safari: s.isSafari,
                           }),
                        },
                        [(0, o.bF)(l)],
                        2
                     ),
                     t[0] ||
                        (t[0] = (0, o.Lk)(
                           "main",
                           null,
                           [
                              (0, o.Lk)("div", null, "Not Found"),
                              (0, o.Lk)("div", null, "Error 404"),
                              (0, o.Lk)("div", null, "/ The page you are looking for doesn't exist or was removed."),
                           ],
                           -1
                        )),
                  ])
               );
            }
            var n = e(9107),
               s = {
                  name: "NotFound",
                  components: {
                     NavigationMenu: n.A,
                  },
                  inject: ["isSafari"],
                  mounted() {
                     document.title = "XELIS - Not found";
                  },
               },
               l = e(1241);
            const d = (0, l.A)(s, [["render", a]]);
            var h = d;
         },
         6429: function (L, t, e) {
            "use strict";
            e.r(t),
               e.d(t, {
                  default: function () {
                     return V;
                  },
               });
            var o = e(6768),
               i = e(4232);
            const r = {
               id: "resources_view",
            };
            function a(L, t, e, a, n, s) {
               const l = (0, o.g2)("NavigationMenu"),
                  d = (0, o.g2)("WalletsSection"),
                  h = (0, o.g2)("NodesSection"),
                  p = (0, o.g2)("MinersSection"),
                  C = (0, o.g2)("LinksSection");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("div", r, [
                     (0, o.Lk)(
                        "header",
                        {
                           class: (0, i.C4)({
                              safari: s.isSafari,
                           }),
                        },
                        [(0, o.bF)(l)],
                        2
                     ),
                     (0, o.Lk)("main", null, [(0, o.bF)(d), (0, o.bF)(h), (0, o.bF)(p), (0, o.bF)(C)]),
                  ])
               );
            }
            var n = e(9107),
               s = e.p + "img/genesix_wallet.75342687.png",
               l = e.p + "img/github.757ce449.svg",
               d = e.p + "img/paperwallet.52fe6563.png",
               h = e.p + "img/browser.06a6cd11.svg",
               p = e.p + "img/cli_wallet.9231fddb.png",
               C = e.p + "img/genesix_wallet_web.978d5b8e.png";
            const c = {
               id: "wallets",
            };
            function u(L, t) {
               return (
                  (0, o.uX)(),
                  (0, o.CE)(
                     "section",
                     c,
                     t[0] ||
                        (t[0] = [
                           (0, o.Fv)(
                              '<h2>Resources</h2><div id="wallets_container"><div class="angle tl"></div><div class="angle tr"></div><div class="angle bl"></div><div class="angle br"></div><div class="wallets-header"><h2>Wallets</h2><p> Designed for ease-of-use and make Xelis more accessible for everyone. </p></div><div class="wallets-content"><div class="left"><div class="item"><img src="' +
                                 s +
                                 '" alt="Genesix Wallet"><div class="left-content"><p> Genesix Wallet </p><p> The main graphical interface wallet. Can be used on all major operating systems and mobile devices. </p><div>Not available on app stores yet.</div><div class="buttons"><a class="button" target="_blank" href="https://github.com/xelis-project/xelis-genesix-wallet/releases"><button><img src="' +
                                 l +
                                 '" alt="Github logo"><span>Releases</span></button></a></div></div></div><div class="item"><img src="' +
                                 d +
                                 '" alt="Paper Wallet"><div class="left-content"><p> Paper Wallet </p><p> Generate offline keys and print for long term storage. </p><div class="buttons"><a class="button" target="_blank" href="https://paperwallet.xelis.io"><button><img src="' +
                                 h +
                                 '" alt="Browser logo"><span>Open</span></button></a></div></div></div></div><div class="right"><div class="item"><img src="' +
                                 p +
                                 '" alt="CLI wallet"><div class="right-content"><p> CLI Wallet </p><p> The command line interface wallet. If you&#39;re an advanced user or prefer a minimalistic interface. </p><div class="buttons"><a class="button" target="_blank" href="https://github.com/xelis-project/xelis-blockchain/releases"><button><img src="' +
                                 l +
                                 '" alt="Github logo"><span>Releases</span></button></a></div></div></div><div class="item"><img src="' +
                                 C +
                                 '" alt="Web wallet"><div class="right-content"><p> Web Wallet (Genesix) </p><p> The wallet from your browser. Quickly access your funds without the need to download an application. </p><div class="buttons"><a class="button" target="_blank" href="https://wallet.xelis.io"><button><img src="' +
                                 h +
                                 '" alt="Browser logo"><span>Open</span></button></a></div></div></div></div></div></div>',
                              2
                           ),
                        ])
                  )
               );
            }
            var k = e(1241);
            const m = {},
               f = (0, k.A)(m, [["render", u]]);
            var g = f;
            const v = {
                  id: "nodes",
               },
               M = {
                  id: "nodes_container",
               },
               w = {
                  target: "_blank",
                  href: "https://github.com/xelis-project/xelis-blockchain/releases",
                  class: "button",
               };
            function B(L, t, e, i, r, a) {
               const n = (0, o.g2)("CircuitImg");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("section", v, [
                     t[2] || (t[2] = (0, o.Lk)("h2", null, "Nodes", -1)),
                     (0, o.Lk)("div", M, [
                        t[1] ||
                           (t[1] = (0, o.Lk)(
                              "p",
                              null,
                              [
                                 (0, o.eW)(
                                    " Support and secure the network by running your own node. This improves your privacy and the decentralization of the network. "
                                 ),
                                 (0, o.Lk)("br"),
                                 (0, o.eW)(" No technical knowlegde is needed, download the software and run it ! "),
                              ],
                              -1
                           )),
                        (0, o.Lk)("a", w, [
                           t[0] ||
                              (t[0] = (0, o.Lk)(
                                 "button",
                                 {
                                    class: "big",
                                 },
                                 [
                                    (0, o.Lk)(
                                       "svg",
                                       {
                                          fill: "currentColor",
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                       },
                                       [
                                          (0, o.Lk)("path", {
                                             "fill-rule": "evenodd",
                                             "clip-rule": "evenodd",
                                             d: "M12 3C12.5523 3 13 3.44772 13 4V12.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071L7.2929 11.7071C6.90238 11.3166 6.90238 10.6834 7.2929 10.2929C7.68342 9.90237 8.31659 9.90237 8.70711 10.2929L11 12.5858V4C11 3.44772 11.4477 3 12 3ZM4.00001 14C4.55229 14 5.00001 14.4477 5.00001 15C5.00001 15.9772 5.00485 16.3198 5.05765 16.5853C5.29437 17.7753 6.22466 18.7056 7.41474 18.9424C7.68018 18.9952 8.02276 19 9.00001 19H15C15.9772 19 16.3198 18.9952 16.5853 18.9424C17.7753 18.7056 18.7056 17.7753 18.9424 16.5853C18.9952 16.3198 19 15.9772 19 15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15C21 15.0392 21 15.0777 21 15.1157C21.0002 15.9334 21.0004 16.4906 20.9039 16.9755C20.5094 18.9589 18.9589 20.5094 16.9755 20.9039C16.4907 21.0004 15.9334 21.0002 15.1158 21C15.0778 21 15.0392 21 15 21H9.00001C8.96084 21 8.92225 21 8.88423 21C8.06664 21.0002 7.50935 21.0004 7.02456 20.9039C5.0411 20.5094 3.49061 18.9589 3.09608 16.9755C2.99965 16.4906 2.99978 15.9334 2.99999 15.1158C3 15.0777 3.00001 15.0392 3.00001 15C3.00001 14.4477 3.44772 14 4.00001 14Z",
                                          }),
                                       ]
                                    ),
                                    (0, o.Lk)("span", null, "Download"),
                                 ],
                                 -1
                              )),
                           (0, o.bF)(n),
                        ]),
                     ]),
                  ])
               );
            }
            var D = e(4274),
               b = {
                  name: "NodesSection",
                  components: {
                     CircuitImg: D.A,
                  },
               };
            const y = (0, k.A)(b, [["render", B]]);
            var j = y;
            const Z = {
                  id: "mining",
               },
               x = {
                  class: "right",
               },
               S = {
                  class: "button",
                  href: "https://github.com/xelis-project/xelis-blockchain",
                  target: "_blank",
               },
               F = {
                  class: "big",
               };
            function E(L, t, e, i, r, a) {
               const n = (0, o.g2)("GithubLogo");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("section", Z, [
                     t[3] ||
                        (t[3] = (0, o.Lk)(
                           "div",
                           {
                              class: "left",
                           },
                           [(0, o.Lk)("h2", null, [(0, o.eW)("Miner"), (0, o.Lk)("br"), (0, o.eW)("Section")])],
                           -1
                        )),
                     (0, o.Lk)("div", x, [
                        t[1] ||
                           (t[1] = (0, o.Lk)(
                              "p",
                              null,
                              " Miner software is used to generate new blocks on the XELIS network and secure it using the Proof-of-Work (PoW) consensus. ",
                              -1
                           )),
                        t[2] ||
                           (t[2] = (0, o.Lk)(
                              "p",
                              null,
                              ' Each block found and accepted by the network gives a reward (called "Coinbase") to the miner address in exchange of its work. ',
                              -1
                           )),
                        (0, o.Lk)("a", S, [
                           (0, o.Lk)("button", F, [
                              (0, o.bF)(n),
                              t[0] || (t[0] = (0, o.Lk)("span", null, "GitHub", -1)),
                           ]),
                        ]),
                     ]),
                  ])
               );
            }
            var _ = e(7568),
               A = {
                  name: "MinersSection",
                  components: {
                     GithubLogo: _.A,
                  },
               };
            const X = (0, k.A)(A, [["render", E]]);
            var I = X;
            const H = {
               id: "links",
            };
            function P(L, t, e, i, r, a) {
               return (
                  (0, o.uX)(),
                  (0, o.CE)(
                     "section",
                     H,
                     t[0] ||
                        (t[0] = [
                           (0, o.Fv)(
                              '<div class="left"><h2>Links</h2></div><div class="content"><div class="links"><a href="https://explorer.xelis.io/" target="_blank">Block Explorer</a><a href="https://status.xelis.io/" target="_blank">Nodes Status</a><a href="https://stats.xelis.io/" target="_blank">Network Statistics</a><a href="https://docs.xelis.io/" target="_blank">Documentation</a><a href="https://explorer.xelis.io/dag" target="_blank">DAG Viewer</a><a href="https://github.com/xelis-project" target="_blank">Project Repository</a><a href="https://docs.xelis.io/links/pools" target="_blank">Mining Pools</a><a href="https://docs.xelis.io/links/seed_nodes" target="_blank">Seed Nodes</a><a href="https://docs.xelis.io/developers-sdk" target="_blank">SDKs</a><a href="https://docs.xelis.io/getting-started/bootstrap" target="_blank">Bootstrap</a><a href="https://paperwallet.xelis.io/" target="_blank">Paper Wallet</a></div></div>',
                              2
                           ),
                        ])
                  )
               );
            }
            var W = {
               name: "LinksSection",
               components: {},
            };
            const T = (0, k.A)(W, [["render", P]]);
            var Q = T,
               q = e(5214),
               N = e.n(q),
               G = {
                  name: "ResourcesView",
                  components: {
                     NavigationMenu: n.A,
                     WalletsSection: g,
                     NodesSection: j,
                     MinersSection: I,
                     LinksSection: Q,
                  },
                  inject: ["isSafari"],
                  mounted() {
                     document.title = N()["/resources"].title;
                  },
               };
            const z = (0, k.A)(G, [["render", a]]);
            var V = z;
         },
         3792: function (L, t, e) {
            "use strict";
            e.r(t),
               e.d(t, {
                  default: function () {
                     return T;
                  },
               });
            var o = e(6768),
               i = e(4232);
            const r = {
                  id: "roadmap_view",
               },
               a = {
                  class: "bg",
               };
            function n(L, t, e, n, s, l) {
               const d = (0, o.g2)("NavigationMenu"),
                  h = (0, o.g2)("CircuitImg"),
                  p = (0, o.g2)("TasksSection"),
                  C = (0, o.g2)("TimelineSection");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("div", r, [
                     (0, o.Lk)(
                        "header",
                        {
                           class: (0, i.C4)({
                              safari: l.isSafari,
                           }),
                        },
                        [
                           (0, o.bF)(d),
                           (0, o.Lk)("div", a, [
                              t[0] ||
                                 (t[0] = (0, o.Lk)(
                                    "div",
                                    {
                                       class: "bgtr",
                                    },
                                    null,
                                    -1
                                 )),
                              t[1] ||
                                 (t[1] = (0, o.Lk)(
                                    "div",
                                    {
                                       class: "bgt",
                                    },
                                    null,
                                    -1
                                 )),
                              (0, o.bF)(h),
                           ]),
                        ],
                        2
                     ),
                     (0, o.Lk)("main", null, [(0, o.bF)(p), (0, o.bF)(C)]),
                  ])
               );
            }
            var s = e(2913),
               l = e(9107);
            const d = {
                  id: "tasks",
               },
               h = ["value"],
               p = {
                  class: "filters",
               },
               C = {
                  class: "filter-buttons",
               },
               c = {
                  class: "filter-buttons",
               },
               u = {
                  class: "filter-buttons",
               },
               k = {
                  class: "filter-buttons",
               },
               m = {
                  class: "task-list",
               },
               f = {
                  key: 0,
               };
            function g(L, t, e, r, a, n) {
               const s = (0, o.g2)("TaskItem");
               return (
                  (0, o.uX)(),
                  (0, o.CE)("section", d, [
                     t[22] || (t[22] = (0, o.Lk)("h2", null, "Tasks", -1)),
                     t[23] || (t[23] = (0, o.Lk)("h3", null, "Development status of the XELIS project", -1)),
                     (0, o.Lk)(
                        "input",
                        {
                           type: "text",
                           class: "task-search",
                           placeholder: "Search",
                           value: n.search,
                           onInput: t[0] || (t[0] = (L) => n.setSearch(L.target.value || null)),
                        },
                        null,
                        40,
                        h
                     ),
                     (0, o.Lk)("div", p, [
                        (0, o.Lk)("div", null, [
                           t[18] || (t[18] = (0, o.Lk)("div", null, "Status", -1)),
                           (0, o.Lk)("div", C, [
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: !n.status,
                                    }),
                                    onClick: t[1] || (t[1] = (L) => n.setStatus(null)),
                                 },
                                 "All",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "In Progress" === n.status,
                                    }),
                                    onClick: t[2] || (t[2] = (L) => n.setStatus("In Progress")),
                                 },
                                 " In Progress (" + (0, i.v_)(n.countTasks("In Progress")) + ") ",
                                 3
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "Planned" === n.status,
                                    }),
                                    onClick: t[3] || (t[3] = (L) => n.setStatus("Planned")),
                                 },
                                 " Planned (" + (0, i.v_)(n.countTasks("Planned")) + ") ",
                                 3
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "Completed" === n.status,
                                    }),
                                    onClick: t[4] || (t[4] = (L) => n.setStatus("Completed")),
                                 },
                                 " Completed (" + (0, i.v_)(n.countTasks("Completed")) + ") ",
                                 3
                              ),
                           ]),
                        ]),
                        (0, o.Lk)("div", null, [
                           t[19] || (t[19] = (0, o.Lk)("div", null, "Years", -1)),
                           (0, o.Lk)("div", c, [
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: !n.year,
                                    }),
                                    onClick: t[5] || (t[5] = (L) => n.setYear(null)),
                                 },
                                 "All",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "2025" === n.year,
                                    }),
                                    onClick: t[6] || (t[6] = (L) => n.setYear("2025")),
                                 },
                                 "2025",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "2024" === n.year,
                                    }),
                                    onClick: t[7] || (t[7] = (L) => n.setYear("2024")),
                                 },
                                 "2024",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "2023" === n.year,
                                    }),
                                    onClick: t[8] || (t[8] = (L) => n.setYear("2023")),
                                 },
                                 "2023",
                                 2
                              ),
                           ]),
                        ]),
                        (0, o.Lk)("div", null, [
                           t[20] || (t[20] = (0, o.Lk)("div", null, "Priority", -1)),
                           (0, o.Lk)("div", u, [
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: !n.priority,
                                    }),
                                    onClick: t[9] || (t[9] = (L) => n.setPriority(null)),
                                 },
                                 "All",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "High" === n.priority,
                                    }),
                                    onClick: t[10] || (t[10] = (L) => n.setPriority("High")),
                                 },
                                 "High",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "Mid" === n.priority,
                                    }),
                                    onClick: t[11] || (t[11] = (L) => n.setPriority("Mid")),
                                 },
                                 "Mid",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "Low" === n.priority,
                                    }),
                                    onClick: t[12] || (t[12] = (L) => n.setPriority("Low")),
                                 },
                                 "Low",
                                 2
                              ),
                           ]),
                        ]),
                        (0, o.Lk)("div", null, [
                           t[21] || (t[21] = (0, o.Lk)("div", null, "Tags", -1)),
                           (0, o.Lk)("div", k, [
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: !n.tag,
                                    }),
                                    onClick: t[13] || (t[13] = (L) => n.setTag(null)),
                                 },
                                 "All",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "Blockchain" === n.tag,
                                    }),
                                    onClick: t[14] || (t[14] = (L) => n.setTag("Blockchain")),
                                 },
                                 "Blockchain",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "XVM" === n.tag,
                                    }),
                                    onClick: t[15] || (t[15] = (L) => n.setTag("XVM")),
                                 },
                                 "XVM",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "App" === n.tag,
                                    }),
                                    onClick: t[16] || (t[16] = (L) => n.setTag("App")),
                                 },
                                 "App",
                                 2
                              ),
                              (0, o.Lk)(
                                 "button",
                                 {
                                    class: (0, i.C4)({
                                       active: "Plugin" === n.tag,
                                    }),
                                    onClick: t[17] || (t[17] = (L) => n.setTag("Plugin")),
                                 },
                                 "Plugin",
                                 2
                              ),
                           ]),
                        ]),
                     ]),
                     (0, o.Lk)("div", m, [
                        ((0, o.uX)(!0),
                        (0, o.CE)(
                           o.FK,
                           null,
                           (0, o.pI)(
                              n.tasks,
                              (L, t) => (
                                 (0, o.uX)(),
                                 (0, o.CE)(
                                    "div",
                                    {
                                       key: t,
                                    },
                                    [
                                       (0, o.bF)(
                                          s,
                                          {
                                             name: L.name,
                                             description: L.description,
                                             status: L.status,
                                             year: L.year,
                                             priority: L.priority,
                                             tag: L.tag,
                                             quarter: L.quarter,
                                          },
                                          null,
                                          8,
                                          ["name", "description", "status", "year", "priority", "tag", "quarter"]
                                       ),
                                    ]
                                 )
                              )
                           ),
                           128
                        )),
                     ]),
                     0 === n.tasks.length ? ((0, o.uX)(), (0, o.CE)("div", f, "No results")) : (0, o.Q3)("", !0),
                     t[24] ||
                        (t[24] = (0, o.Lk)(
                           "div",
                           {
                              class: "disclaimer",
                           },
                           " / Does NOT include internal tasks, bug fixes, maintenance, minor enhancements, etc. ",
                           -1
                        )),
                  ])
               );
            }
            e(4114);
            const v = {
                  class: "task-title",
               },
               M = {
                  class: "task-description",
               },
               w = {
                  class: "task-bottom",
               },
               B = {
                  class: "task-info",
               },
               D = {
                  class: "task-status",
               },
               b = {
                  class: "task-more",
               };
            function y(L, t, e, r, a, n) {
               return (
                  (0, o.uX)(),
                  (0, o.CE)(
                     "div",
                     {
                        class: (0, i.C4)(["task-item", n.classStatus]),
                     },
                     [
                        (0, o.Lk)("div", null, [
                           (0, o.Lk)("div", v, (0, i.v_)(e.name), 1),
                           (0, o.Lk)("div", M, (0, i.v_)(e.description), 1),
                        ]),
                        (0, o.Lk)("div", w, [
                           (0, o.Lk)("div", B, [
                              (0, o.Lk)("div", D, [
                                 (0, o.Lk)(
                                    "div",
                                    {
                                       class: (0, i.C4)(["status-dot", n.classStatus]),
                                    },
                                    null,
                                    2
                                 ),
                                 (0, o.Lk)("div", null, (0, i.v_)(e.status), 1),
                              ]),
                              (0, o.Lk)("div", null, (0, i.v_)(e.year) + " " + (0, i.v_)(e.quarter), 1),
                           ]),
                           (0, o.Lk)("div", b, [
                              (0, o.Lk)("div", null, (0, i.v_)(e.tag), 1),
                              (0, o.Lk)("div", null, (0, i.v_)(e.priority), 1),
                           ]),
                        ]),
                     ],
                     2
                  )
               );
            }
            var j = {
                  name: "TaskItem",
                  props: ["name", "description", "status", "year", "priority", "tag", "quarter"],
                  computed: {
                     classStatus() {
                        return this.status.toLowerCase().split(" ").join("-");
                     },
                  },
               },
               Z = e(1241);
            const x = (0, Z.A)(j, [["render", y]]);
            var S = x,
               F = e(6422),
               E = {
                  components: {
                     TaskItem: S,
                  },
                  data() {
                     return {
                        searchCancelTimeout: null,
                     };
                  },
                  methods: {
                     pushQuery(L, t, e, o, i) {
                        const r = {};
                        L && (r["search"] = L),
                           t && (r["status"] = t),
                           e && (r["year"] = e),
                           o && (r["priority"] = o),
                           i && (r["tag"] = i),
                           this.$router.push({
                              path: "/roadmap",
                              query: r,
                           });
                     },
                     setStatus(L) {
                        this.pushQuery(this.search, L, this.year, this.priority, this.tag);
                     },
                     setYear(L) {
                        this.pushQuery(this.search, this.status, L, this.priority, this.tag);
                     },
                     setPriority(L) {
                        this.pushQuery(this.search, this.status, this.year, L, this.tag);
                     },
                     setTag(L) {
                        this.pushQuery(this.search, this.status, this.year, this.priority, L);
                     },
                     setSearch(L) {
                        this.searchCancelTimeout && clearTimeout(this.searchCancelTimeout),
                           (this.searchCancelTimeout = setTimeout(() => {
                              this.pushQuery(L, this.status, this.year, this.priority, this.tag),
                                 (this.searchCancelTimeout = null);
                           }, 400));
                     },
                     countTasks(L) {
                        return F.A.filter((t) => t.status === L).length;
                     },
                  },
                  computed: {
                     search() {
                        return this.$route.query.search;
                     },
                     year() {
                        return this.$route.query.year;
                     },
                     status() {
                        return this.$route.query.status;
                     },
                     priority() {
                        return this.$route.query.priority;
                     },
                     tag() {
                        return this.$route.query.tag;
                     },
                     tasks() {
                        return F.A.filter((L) => {
                           let t = !0;
                           if (
                              (this.status && (t = L.status === this.status),
                              this.year && t && (t = L.year === this.year),
                              this.priority && t && (t = L.priority === this.priority),
                              this.tag && t && (t = L.tag === this.tag),
                              this.search && t)
                           ) {
                              const e = L.name.toLowerCase(),
                                 o = this.search.toLocaleLowerCase();
                              t = -1 !== e.indexOf(o);
                           }
                           return t;
                        });
                     },
                  },
               };
            const _ = (0, Z.A)(E, [["render", g]]);
            var A = _,
               X = e(4274),
               I = e(5214),
               H = e.n(I),
               P = {
                  name: "RoadmapView",
                  components: {
                     NavigationMenu: l.A,
                     TasksSection: A,
                     TimelineSection: s.A,
                     CircuitImg: X.A,
                  },
                  inject: ["isSafari"],
                  mounted() {
                     document.title = H()["/roadmap"].title;
                  },
               };
            const W = (0, Z.A)(P, [["render", n]]);
            var T = W;
         },
         3935: function (L, t, e) {
            "use strict";
            L.exports = e.p + "img/logo.ac9a2a33.svg";
         },
      },
      t = {};
   function e(o) {
      var i = t[o];
      if (void 0 !== i) return i.exports;
      var r = (t[o] = {
         exports: {},
      });
      return L[o].call(r.exports, r, r.exports, e), r.exports;
   }
   (e.m = L),
      (function () {
         var L = [];
         e.O = function (t, o, i, r) {
            if (!o) {
               var a = 1 / 0;
               for (d = 0; d < L.length; d++) {
                  (o = L[d][0]), (i = L[d][1]), (r = L[d][2]);
                  for (var n = !0, s = 0; s < o.length; s++)
                     (!1 & r || a >= r) &&
                     Object.keys(e.O).every(function (L) {
                        return e.O[L](o[s]);
                     })
                        ? o.splice(s--, 1)
                        : ((n = !1), r < a && (a = r));
                  if (n) {
                     L.splice(d--, 1);
                     var l = i();
                     void 0 !== l && (t = l);
                  }
               }
               return t;
            }
            r = r || 0;
            for (var d = L.length; d > 0 && L[d - 1][2] > r; d--) L[d] = L[d - 1];
            L[d] = [o, i, r];
         };
      })(),
      (function () {
         e.n = function (L) {
            var t =
               L && L.__esModule
                  ? function () {
                       return L["default"];
                    }
                  : function () {
                       return L;
                    };
            return (
               e.d(t, {
                  a: t,
               }),
               t
            );
         };
      })(),
      (function () {
         e.d = function (L, t) {
            for (var o in t)
               e.o(t, o) &&
                  !e.o(L, o) &&
                  Object.defineProperty(L, o, {
                     enumerable: !0,
                     get: t[o],
                  });
         };
      })(),
      (function () {
         (e.f = {}),
            (e.e = function (L) {
               return Promise.all(
                  Object.keys(e.f).reduce(function (t, o) {
                     return e.f[o](L, t), t;
                  }, [])
               );
            });
      })(),
      (function () {
         e.u = function (L) {
            return "js/merch.a4bcfb5d.js";
         };
      })(),
      (function () {
         e.miniCssF = function (L) {
            return "css/merch.3ded4d49.css";
         };
      })(),
      (function () {
         e.g = (function () {
            if ("object" === typeof globalThis) return globalThis;
            try {
               return this || new Function("return this")();
            } catch (L) {
               if ("object" === typeof window) return window;
            }
         })();
      })(),
      (function () {
         e.o = function (L, t) {
            return Object.prototype.hasOwnProperty.call(L, t);
         };
      })(),
      (function () {
         var L = {},
            t = "xelis:";
         e.l = function (o, i, r, a) {
            if (L[o]) L[o].push(i);
            else {
               var n, s;
               if (void 0 !== r)
                  for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                     var h = l[d];
                     if (h.getAttribute("src") == o || h.getAttribute("data-webpack") == t + r) {
                        n = h;
                        break;
                     }
                  }
               n ||
                  ((s = !0),
                  (n = document.createElement("script")),
                  (n.charset = "utf-8"),
                  (n.timeout = 120),
                  e.nc && n.setAttribute("nonce", e.nc),
                  n.setAttribute("data-webpack", t + r),
                  (n.src = o)),
                  (L[o] = [i]);
               var p = function (t, e) {
                     (n.onerror = n.onload = null), clearTimeout(C);
                     var i = L[o];
                     if (
                        (delete L[o],
                        n.parentNode && n.parentNode.removeChild(n),
                        i &&
                           i.forEach(function (L) {
                              return L(e);
                           }),
                        t)
                     )
                        return t(e);
                  },
                  C = setTimeout(
                     p.bind(null, void 0, {
                        type: "timeout",
                        target: n,
                     }),
                     12e4
                  );
               (n.onerror = p.bind(null, n.onerror)),
                  (n.onload = p.bind(null, n.onload)),
                  s && document.head.appendChild(n);
            }
         };
      })(),
      (function () {
         e.r = function (L) {
            "undefined" !== typeof Symbol &&
               Symbol.toStringTag &&
               Object.defineProperty(L, Symbol.toStringTag, {
                  value: "Module",
               }),
               Object.defineProperty(L, "__esModule", {
                  value: !0,
               });
         };
      })(),
      (function () {
         e.p = "/";
      })(),
      (function () {
         if ("undefined" !== typeof document) {
            var L = function (L, t, o, i, r) {
                  var a = document.createElement("link");
                  (a.rel = "stylesheet"), (a.type = "text/css"), e.nc && (a.nonce = e.nc);
                  var n = function (e) {
                     if (((a.onerror = a.onload = null), "load" === e.type)) i();
                     else {
                        var o = e && e.type,
                           n = (e && e.target && e.target.href) || t,
                           s = new Error("Loading CSS chunk " + L + " failed.\n(" + o + ": " + n + ")");
                        (s.name = "ChunkLoadError"),
                           (s.code = "CSS_CHUNK_LOAD_FAILED"),
                           (s.type = o),
                           (s.request = n),
                           a.parentNode && a.parentNode.removeChild(a),
                           r(s);
                     }
                  };
                  return (
                     (a.onerror = a.onload = n),
                     (a.href = t),
                     o ? o.parentNode.insertBefore(a, o.nextSibling) : document.head.appendChild(a),
                     a
                  );
               },
               t = function (L, t) {
                  for (var e = document.getElementsByTagName("link"), o = 0; o < e.length; o++) {
                     var i = e[o],
                        r = i.getAttribute("data-href") || i.getAttribute("href");
                     if ("stylesheet" === i.rel && (r === L || r === t)) return i;
                  }
                  var a = document.getElementsByTagName("style");
                  for (o = 0; o < a.length; o++) {
                     (i = a[o]), (r = i.getAttribute("data-href"));
                     if (r === L || r === t) return i;
                  }
               },
               o = function (o) {
                  return new Promise(function (i, r) {
                     var a = e.miniCssF(o),
                        n = e.p + a;
                     if (t(a, n)) return i();
                     L(o, n, null, i, r);
                  });
               },
               i = {
                  524: 0,
               };
            e.f.miniCss = function (L, t) {
               var e = {
                  372: 1,
               };
               i[L]
                  ? t.push(i[L])
                  : 0 !== i[L] &&
                    e[L] &&
                    t.push(
                       (i[L] = o(L).then(
                          function () {
                             i[L] = 0;
                          },
                          function (t) {
                             throw (delete i[L], t);
                          }
                       ))
                    );
            };
         }
      })(),
      (function () {
         var L = {
            524: 0,
         };
         (e.f.j = function (t, o) {
            var i = e.o(L, t) ? L[t] : void 0;
            if (0 !== i)
               if (i) o.push(i[2]);
               else {
                  var r = new Promise(function (e, o) {
                     i = L[t] = [e, o];
                  });
                  o.push((i[2] = r));
                  var a = e.p + e.u(t),
                     n = new Error(),
                     s = function (o) {
                        if (e.o(L, t) && ((i = L[t]), 0 !== i && (L[t] = void 0), i)) {
                           var r = o && ("load" === o.type ? "missing" : o.type),
                              a = o && o.target && o.target.src;
                           (n.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")"),
                              (n.name = "ChunkLoadError"),
                              (n.type = r),
                              (n.request = a),
                              i[1](n);
                        }
                     };
                  e.l(a, s, "chunk-" + t, t);
               }
         }),
            (e.O.j = function (t) {
               return 0 === L[t];
            });
         var t = function (t, o) {
               var i,
                  r,
                  a = o[0],
                  n = o[1],
                  s = o[2],
                  l = 0;
               if (
                  a.some(function (t) {
                     return 0 !== L[t];
                  })
               ) {
                  for (i in n) e.o(n, i) && (e.m[i] = n[i]);
                  if (s) var d = s(e);
               }
               for (t && t(o); l < a.length; l++) (r = a[l]), e.o(L, r) && L[r] && L[r][0](), (L[r] = 0);
               return e.O(d);
            },
            o = (self["webpackChunkxelis"] = self["webpackChunkxelis"] || []);
         o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
      })();
   var o = e.O(void 0, [504], function () {
      return e(3031);
   });
   o = e.O(o);
})();
//# sourceMappingURL=app.77885d5e.js.map
