(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    0: function (t, e, a) {
        t.exports = a("zUnb")
    }, 1: function (t, e) {
    }, crnd: function (t, e) {
        function a(t) {
            return Promise.resolve().then((function () {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }))
        }

        a.keys = function () {
            return []
        }, a.resolve = a, t.exports = a, a.id = "crnd"
    }, zUnb: function (t, e, a) {
        "use strict";
        a.r(e);
        var i = a("8Y7J"), o = a("cUpR"), n = a("IheW"), r = a("z4EA"), c = a("s7LF"), s = a("lJxs"), l = a("JIr8");
        let b = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/admin"
                }

                getApplicationConfiguration() {
                    return this.configObservable || (this.configObservable = this.http.get(this.host + "/application-configuration").pipe(Object(s.a)(t => t.config, Object(l.a)(t => {
                        throw t
                    })))), this.configObservable
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var u = a("7O5W"), d = a("8tEE"), m = a("wHSu"), h = a("twK/"), p = a("VDRc"), g = a("PDjf"), f = a("TSSN"),
            S = a("Dxy4");
        const T = function (t) {
            return {juicycoin: t}
        };
        u.b.add(d.a, m.eb, m.t, m.j, m.k, h.a, h.b), u.a.watch();
        let v = (() => {
            class t {
                constructor(t) {
                    this.configurationService = t, this.altcoinName = "Juicycoin"
                }

                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.altcoinName && (this.altcoinName = t.application.altcoinName)
                    }, t => console.log(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(b))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-token-sale"]],
                decls: 114,
                vars: 26,
                consts: [["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "whitepaper-container", "offer-container"], [1, "heading"], [2, "margin-left", "10px", 3, "innerHtml"], [2, "margin-left", "10px"], ["translate", ""], ["href", "https://ponzico.win/ponzico.pdf", "target", "_blank", "rel", "noopener noreferrer"], ["mat-raised-button", "", "color", "accent"], [1, "fas", "fa-university", "fa-lg"], ["href", "https://www.sec.gov/investor/alerts/ia_virtualcurrencies.pdf", "target", "_blank", "rel", "noopener noreferrer"], [1, "fas", "fa-graduation-cap", "fa-lg"], [1, "offer-box"], [1, "text-justify"], [1, "fab", "fa-bitcoin"], [1, "badge"], ["fxFlexAlign.lt-md", "center", 1, "faq-container"], [1, "fas", "fa-comments", "fa-2x"], [1, "far", "fa-comment-alt", "fa-2x"], [1, "far", "fa-comments", "fa-2x"], [1, "fas", "fa-comment-alt", "fa-2x"], ["translate", "", 1, "text-justify"], ["src", "assets/public/images/padding/56px.png"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "div", 1), i.Tb(2, "div", 2), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Ob(6, "small", 3), i.fc(7, "translate"), i.Sb(), i.Sb(), i.Tb(8, "mat-card"), i.Tb(9, "h4"), i.Hc(10), i.fc(11, "translate"), i.Tb(12, "small", 4), i.Hc(13, "("), i.Tb(14, "span", 5), i.Hc(15, "WHITEPAPER_REFERENCES"), i.Sb(), i.Hc(16, ")"), i.Sb(), i.Sb(), i.Tb(17, "div"), i.Tb(18, "a", 6), i.Tb(19, "button", 7), i.Ob(20, "i", 8), i.Hc(21, " PonzICO Whitepaper"), i.Sb(), i.Sb(), i.Tb(22, "a", 9), i.Tb(23, "button", 7), i.Ob(24, "i", 10), i.Hc(25, " PonziCoin Whitepaper"), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Tb(26, "div", 11), i.Tb(27, "h3", 5), i.Hc(28, "SECTION_SALES_PITCH"), i.Sb(), i.Tb(29, "p", 12), i.Hc(30, " Lorem ipsum dolor sit amet "), i.Tb(31, "strong"), i.Ob(32, "i", 13), i.Hc(33), i.Sb(), i.Hc(34, ", consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "), i.Tb(35, "span", 5), i.Hc(36, "GIVE_US_ALL_YOUR_MONEY"), i.Sb(), i.Hc(37, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "), i.Tb(38, "span", 5), i.Hc(39, "GIVE_US_ALL_YOUR_MONEY"), i.Sb(), i.Hc(40, " Ut wisi enim ad minim veniam, quis "), i.Tb(41, "strong"), i.Ob(42, "i", 13), i.Hc(43), i.Sb(), i.Hc(44, " nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. "), i.Tb(45, "span", 5), i.Hc(46, "GIVE_US_ALL_YOUR_MONEY"), i.Sb(), i.Hc(47, " Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. "), i.Tb(48, "span", 5), i.Hc(49, "GIVE_US_ALL_YOUR_MONEY"), i.Sb(), i.Hc(50, " Duis autem vel eum "), i.Tb(51, "strong"), i.Ob(52, "i", 13), i.Hc(53), i.Sb(), i.Hc(54, " iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "), i.Tb(55, "span", 5), i.Hc(56, "GIVE_US_ALL_YOUR_MONEY"), i.Sb(), i.Hc(57, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. "), i.Tb(58, "span", 14), i.Ob(59, "i", 13), i.Hc(60), i.Sb(), i.Hc(61, " est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur. "), i.Sb(), i.Sb(), i.Sb(), i.Tb(62, "div", 15), i.Tb(63, "div", 2), i.Tb(64, "span", 5), i.Hc(65, "ICO_FAQ"), i.Sb(), i.Sb(), i.Tb(66, "mat-card"), i.Tb(67, "h5"), i.Ob(68, "i", 16), i.Hc(69, " Stet "), i.Tb(70, "strong"), i.Ob(71, "i", 13), i.Hc(72), i.Sb(), i.Hc(73, " clita kasd gubergren?"),i.Sb(),i.Tb(74, "small", 12),i.Hc(75, " Stet clita kasd gubergren, no "),i.Tb(76, "strong"),i.Ob(77, "i", 13),i.Hc(78),i.Sb(),i.Hc(79, " sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),i.Sb(),i.Sb(),i.Tb(80, "mat-card"),i.Tb(81, "h5"),i.Ob(82, "i", 17),i.Hc(83, " Consetetur sadipscing elitr?"),i.Sb(),i.Tb(84, "small", 12),i.Hc(85, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed "),i.Tb(86, "strong"),i.Ob(87, "i", 13),i.Hc(88),i.Sb(),i.Hc(89, " diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),i.Sb(),i.Sb(),i.Tb(90, "mat-card"),i.Tb(91, "h5"),i.Ob(92, "i", 18),i.Hc(93, " Hendrerit "),i.Tb(94, "strong"),i.Ob(95, "i", 13),i.Hc(96),i.Sb(),i.Hc(97, " in vulputate velit?"),i.Sb(),i.Tb(98, "small", 12),i.Hc(99, " Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. "),i.Sb(),i.Sb(),i.Tb(100, "mat-card"),i.Tb(101, "h5"),i.Ob(102, "i", 19),i.Hc(103, " Justo duo dolores et ea rebum?"),i.Sb(),i.Tb(104, "small", 12),i.Hc(105, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "),i.Sb(),i.Sb(),i.Tb(106, "mat-card"),i.Tb(107, "h5"),i.Ob(108, "i", 16),i.Ob(109, "span", 3),i.fc(110, "translate"),i.Sb(),i.Tb(111, "small", 20),i.Hc(112, "ICO_FAQ_ANSWER"),i.Sb(),i.Sb(),i.Sb(),i.Ob(113, "img", 21),i.Sb()), 2 & t && (i.Bb(4), i.Jc("", i.gc(5, 12, "TITLE_TOKENSALE"), " "), i.Bb(2), i.kc("innerHtml", i.hc(7, 14, "SECTION_ICO", i.pc(22, T, e.altcoinName)), i.wc), i.Bb(4), i.Jc("", i.gc(11, 17, "SECTION_WHITEPAPER"), " "), i.Bb(23), i.Jc(" ", e.altcoinName, ""), i.Bb(10), i.Jc(" ", e.altcoinName, ""), i.Bb(10), i.Jc(" ", e.altcoinName, ""), i.Bb(7), i.Jc(" ", e.altcoinName, ""), i.Bb(12), i.Jc(" ", e.altcoinName, ""), i.Bb(6), i.Jc(" ", e.altcoinName, ""), i.Bb(10), i.Jc(" ", e.altcoinName, ""), i.Bb(8), i.Jc(" ", e.altcoinName, ""), i.Bb(13), i.kc("innerHtml", i.hc(110, 19, "ICO_FAQ_QUESTION", i.pc(24, T, e.altcoinName)), i.wc))
                },
                directives: [p.d, p.e, p.a, g.a, f.a, S.a],
                pipes: [f.d],
                styles: [".container[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{justify-content:center}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);margin-bottom:10px;padding:12px 20px}.whitepaper-container.offer-container[_ngcontent-%COMP%]{max-width:700px;min-width:400px;width:70%}.faq-container[_ngcontent-%COMP%]{max-width:500px;min-width:200px;width:70%}.text-justify[_ngcontent-%COMP%]{text-align:justify}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]
            }), t
        })();
        var C = a("XNiG");
        let w = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.isLoggedIn = new C.a, this.hostServer = ".", this.host = this.hostServer + "/api/Users"
                }

                find(t) {
                    return this.http.get(this.hostServer + "/rest/user/authentication-details/", {params: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                get(t) {
                    return this.http.get(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                login(t) {
                    return this.isLoggedIn.next(!0), this.http.post(this.hostServer + "/rest/user/login", t).pipe(Object(s.a)(t => t.authentication), Object(l.a)(t => {
                        throw t
                    }))
                }

                getLoggedInState() {
                    return this.isLoggedIn.asObservable()
                }

                changePassword(t) {
                    return this.http.get(this.hostServer + "/rest/user/change-password?current=" + t.current + "&new=" + t.new + "&repeat=" + t.repeat).pipe(Object(s.a)(t => t.user), Object(l.a)(t => {
                        throw t.error
                    }))
                }

                resetPassword(t) {
                    return this.http.post(this.hostServer + "/rest/user/reset-password", t).pipe(Object(s.a)(t => t.user), Object(l.a)(t => {
                        throw t
                    }))
                }

                whoAmI() {
                    return this.http.get(this.hostServer + "/rest/user/whoami").pipe(Object(s.a)(t => t.user), Object(l.a)(t => {
                        throw t
                    }))
                }

                oauthLogin(t) {
                    return this.http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + t)
                }

                saveLastLoginIp() {
                    return this.http.get(this.hostServer + "/rest/saveLoginIp").pipe(Object(s.a)(t => t), Object(l.a)(t => {
                        throw t
                    }))
                }

                deluxeStatus() {
                    return this.http.get(this.hostServer + "/rest/deluxe-membership").pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                upgradeToDeluxe(t) {
                    return this.http.post(this.hostServer + "/rest/deluxe-membership", {paymentMode: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var y = a("iInd");
        let k = (() => {
            class t {
                constructor(t, e, a, i, o) {
                    this.cookieService = t, this.userService = e, this.router = a, this.route = i, this.ngZone = o
                }

                ngOnInit() {
                    this.userService.oauthLogin(this.parseRedirectUrlParams().access_token).subscribe(t => {
                        let e = btoa(t.email.split("").reverse().join(""));
                        this.userService.save({email: t.email, password: e, passwordRepeat: e}).subscribe(() => {
                            this.login(t)
                        }, () => this.login(t))
                    }, t => {
                        this.invalidateSession(t), this.ngZone.run(() => this.router.navigate(["/login"]))
                    })
                }

                login(t) {
                    this.userService.login({
                        email: t.email,
                        password: btoa(t.email.split("").reverse().join("")),
                        oauth: !0
                    }).subscribe(t => {
                        let e = new Date;
                        e.setHours(e.getHours() + 8), this.cookieService.set("token", t.token, e, "/"), localStorage.setItem("token", t.token), sessionStorage.setItem("bid", t.bid), this.userService.isLoggedIn.next(!0), this.ngZone.run(() => this.router.navigate(["/"]))
                    }, t => {
                        this.invalidateSession(t), this.ngZone.run(() => this.router.navigate(["/login"]))
                    })
                }

                invalidateSession(t) {
                    console.log(t), this.cookieService.delete("token", "/"), localStorage.removeItem("token"), sessionStorage.removeItem("bid")
                }

                parseRedirectUrlParams() {
                    let t = this.route.snapshot.data.params.substr(1).split("&"), e = {};
                    for (let a = 0; a < t.length; a++) {
                        let i = t[a].split("=");
                        e[i[0]] = i[1]
                    }
                    return e
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(r.a), i.Nb(w), i.Nb(y.b), i.Nb(y.a), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-oauth"]],
                decls: 9,
                vars: 6,
                consts: [["fxLayoutAlign", "center"], [1, "primary-notification"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "div"), i.Tb(3, "h3"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Tb(6, "div"), i.Hc(7), i.fc(8, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.Ic(i.gc(5, 2, "TITLE_LOGIN")), i.Bb(3), i.Ic(i.gc(8, 4, "CONFIRM_LOGGED_IN_VIA_OAUTH2")))
                },
                directives: [p.c, g.a],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:300px;width:35%}"]
            }), t
        })(), O = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.itemTotal = new C.a, this.host = this.hostServer + "/api/BasketItems"
                }

                find(t) {
                    return this.http.get(this.hostServer + "/rest/basket/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                get(t) {
                    return this.http.get(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                put(t, e) {
                    return this.http.put(this.host + "/" + t, e).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                del(t) {
                    return this.http.delete(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                checkout(t, e, a) {
                    return this.http.post(this.hostServer + "/rest/basket/" + t + "/checkout", {
                        couponData: e,
                        orderDetails: a
                    }).pipe(Object(s.a)(t => t.orderConfirmation), Object(l.a)(t => {
                        throw t
                    }))
                }

                applyCoupon(t, e) {
                    return this.http.put(this.hostServer + "/rest/basket/" + t + "/coupon/" + e, {}).pipe(Object(s.a)(t => t.discount), Object(l.a)(t => {
                        throw t
                    }))
                }

                updateNumberOfCardItems() {
                    this.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(t => {
                        this.itemTotal.next(t.Products.reduce((t, e) => t + e.BasketItem.quantity, 0))
                    }, t => console.log(t))
                }

                getItemTotal() {
                    return this.itemTotal.asObservable()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var I = a("BOF4");
        let _ = (() => {
            class t {
                constructor(t, e) {
                    this.router = t, this.ngZone = e
                }

                canActivate() {
                    return !!localStorage.getItem("token") || (this.forbidRoute("UNAUTHORIZED_ACCESS_ERROR"), !1)
                }

                forbidRoute(t = "UNAUTHORIZED_PAGE_ACCESS_ERROR") {
                    this.ngZone.run(() => this.router.navigate(["403"], {
                        skipLocationChange: !0,
                        queryParams: {error: t}
                    }))
                }

                tokenDecode() {
                    let t = null;
                    const e = localStorage.getItem("token");
                    if (e) try {
                        t = I(e)
                    } catch (a) {
                        console.log(a)
                    }
                    return t
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(y.b), i.Xb(i.B))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac}), t
        })(), x = (() => {
            class t {
                constructor(t) {
                    this.loginGuard = t
                }

                canActivate() {
                    let t = this.loginGuard.tokenDecode();
                    return !(!t || !t.data || "admin" !== t.data.role) || (this.loginGuard.forbidRoute(), !1)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(_))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac}), t
        })(), B = (() => {
            class t {
                constructor(t) {
                    this.loginGuard = t
                }

                canActivate() {
                    let t = this.loginGuard.tokenDecode();
                    return !(!t || !t.data || "accounting" !== t.data.role) || (this.loginGuard.forbidRoute(), !1)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(_))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac}), t
        })(), H = (() => {
            class t {
                constructor(t) {
                    this.loginGuard = t
                }

                isDeluxe() {
                    let t = this.loginGuard.tokenDecode();
                    return t && t.data && "deluxe" === t.data.role
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(_))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac}), t
        })();
        var P = a("zHaW");
        let A = (() => {
            class t {
                constructor(t, e) {
                    this.translateService = t, this.snackBar = e
                }

                open(t, e) {
                    this.translateService.get(t).subscribe(t => {
                        this.snackBar.open(t, "X", {duration: 5e3, panelClass: e})
                    }, () => {
                        this.snackBar.open(t, "X", {duration: 5e3, panelClass: e})
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(f.e), i.Xb(P.a))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var E = a("OaSA"), L = a("SVse"), D = a("ura0");

        function N(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 19)
        }

        function F(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 20), i.Ob(1, "img", 21), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.lc("alt", t.name), i.kc("src", "assets/public/images/products/" + t.image, i.yc)
            }
        }

        function M(t, e) {
            1 & t && i.Ob(0, "mat-footer-cell", 20)
        }

        function R(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 19)
        }

        function U(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 22), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.name, " ")
            }
        }

        function j(t, e) {
            1 & t && i.Ob(0, "mat-footer-cell", 23)
        }

        function J(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 19)
        }

        function G(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 27), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec().$implicit;
                    return i.ec().dec(e.BasketItem.id)
                })), i.Ob(1, "i", 28), i.Sb()
            }
        }

        function z(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 27), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec().$implicit;
                    return i.ec().inc(e.BasketItem.id)
                })), i.Ob(1, "i", 29), i.Sb()
            }
        }

        function q(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 24), i.Fc(1, G, 2, 0, "button", 25), i.Tb(2, "span", 26), i.Hc(3), i.Sb(), i.Fc(4, z, 2, 0, "button", 25), i.Sb()), 2 & t) {
                const t = e.$implicit, a = i.ec();
                i.Bb(1), i.kc("ngIf", a.allowEdit), i.Bb(2), i.Jc(" ", t.BasketItem.quantity, ""), i.Bb(1), i.kc("ngIf", a.allowEdit)
            }
        }

        function W(t, e) {
            1 & t && (i.Tb(0, "mat-footer-cell", 30), i.Hc(1, "TOTAL"), i.Sb())
        }

        function Y(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 19)
        }

        function V(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 31), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.price, "\xa4")
            }
        }

        function Q(t, e) {
            1 & t && i.Ob(0, "mat-footer-cell", 32)
        }

        function $(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 19)
        }

        function K(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 36), i.Tb(1, "button", 27), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).delete(a.BasketItem.id)
                })), i.Ob(2, "i", 37), i.Sb(), i.Sb()
            }
        }

        function X(t, e) {
            1 & t && i.Ob(0, "mat-footer-cell", 36)
        }

        function Z(t, e) {
            1 & t && (i.Rb(0, 33), i.Fc(1, $, 1, 0, "mat-header-cell", 2), i.Fc(2, K, 3, 0, "mat-cell", 34), i.Fc(3, X, 1, 0, "mat-footer-cell", 35), i.Qb())
        }

        function tt(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function et(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function at(t, e) {
            1 & t && i.Ob(0, "mat-footer-row", 39)
        }

        function it(t, e) {
            if (1 & t && (i.Tb(0, "span"), i.Fc(1, at, 1, 0, "mat-footer-row", 38), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("matFooterRowDef", t.tableColumns)
            }
        }

        function ot(t, e) {
            if (1 & t && (i.Tb(0, "div", 40), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.Kc("", i.gc(2, 2, "LABEL_TOTAL_PRICE"), ": ", t.itemTotal, "\xa4")
            }
        }

        u.b.add(h.g, m.C, m.E), u.a.watch();
        let nt = (() => {
            class t {
                constructor(t, e, a, o) {
                    this.deluxeGuard = t, this.basketService = e, this.userService = a, this.snackBarHelperService = o, this.allowEdit = !1, this.displayTotal = !1, this.totalPrice = !0, this.emitTotal = new i.o, this.emitProductCount = new i.o, this.tableColumns = ["image", "product", "quantity", "price"], this.dataSource = [], this.bonus = 0, this.itemTotal = 0
                }

                ngOnInit() {
                    this.allowEdit && !this.tableColumns.includes("remove") && this.tableColumns.push("remove"), this.load(), this.userService.whoAmI().subscribe(t => {
                        this.userEmail = t.email || "anonymous", this.userEmail = "(" + this.userEmail + ")"
                    }, t => console.log(t))
                }

                load() {
                    this.basketService.find(parseInt(sessionStorage.getItem("bid"), 10)).subscribe(t => {
                        this.isDeluxe() && t.Products.map(t => {
                            t.price = t.deluxePrice
                        }), this.dataSource = t.Products, this.itemTotal = t.Products.reduce((t, e) => t + e.price * e.BasketItem.quantity, 0), this.bonus = t.Products.reduce((t, e) => t + Math.round(e.price / 10) * e.BasketItem.quantity, 0), this.sendToParent(this.dataSource.length)
                    }, t => console.log(t))
                }

                delete(t) {
                    this.basketService.del(t).subscribe(() => {
                        this.load(), this.basketService.updateNumberOfCardItems()
                    }, t => console.log(t))
                }

                inc(t) {
                    this.addToQuantity(t, 1)
                }

                dec(t) {
                    this.addToQuantity(t, -1)
                }

                addToQuantity(t, e) {
                    this.basketService.get(t).subscribe(a => {
                        let i = a.quantity + e;
                        this.basketService.put(t, {quantity: i < 1 ? 1 : i}).subscribe(() => {
                            this.load(), this.basketService.updateNumberOfCardItems()
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                        })
                    }, t => console.log(t))
                }

                sendToParent(t) {
                    this.emitTotal.emit([this.itemTotal, this.bonus]), this.emitProductCount.emit(t)
                }

                isDeluxe() {
                    return this.deluxeGuard.isDeluxe()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(H), i.Nb(O), i.Nb(w), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-purchase-basket"]],
                inputs: {allowEdit: "allowEdit", displayTotal: "displayTotal", totalPrice: "totalPrice"},
                outputs: {emitTotal: "emitTotal", emitProductCount: "emitProductCount"},
                decls: 27,
                vars: 10,
                consts: [[3, "dataSource"], ["matColumnDef", "image"], ["style", "display: none;", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", "class", "content-align", 4, "matFooterCellDef"], ["matColumnDef", "product"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", "style", "font-size: initial;", 4, "matCellDef"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 4, "matFooterCellDef"], ["matColumnDef", "quantity"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "content-align", 4, "matCellDef"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", "class", "header-align", 4, "matFooterCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", "style", "font-size: initial;", 4, "matCellDef"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 4, "matFooterCellDef"], ["matColumnDef", "remove", 4, "ngIf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["id", "price", 4, "ngIf"], [2, "display", "none"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "20%", 1, "content-align"], [1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlex", "35%", "fxFlex.lt-md", "30%", 2, "font-size", "initial"], ["fxFlex", "35%", "fxFlex.lt-md", "30%"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "content-align"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [2, "font-size", "initial"], ["mat-icon-button", "", 3, "click"], [1, "fas", "fa-minus-square"], [1, "fas", "fa-plus-square"], ["fxFlex", "16%", "fxFlex.lt-md", "35%", 1, "header-align"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%", 2, "font-size", "initial"], ["fxShow", "", "fxHide.lt-md", "", "fxFlex", "16%"], ["matColumnDef", "remove"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%", 4, "matFooterCellDef"], ["fxFlex", "10%", "fxFlex.lt-md", "15%"], [1, "far", "fa-trash-alt"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-footer-row", ""], ["id", "price"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "h1"), i.Hc(1), i.fc(2, "translate"), i.Tb(3, "small"), i.Hc(4), i.Sb(), i.Sb(), i.Tb(5, "mat-table", 0), i.Rb(6, 1), i.Fc(7, N, 1, 0, "mat-header-cell", 2), i.Fc(8, F, 2, 2, "mat-cell", 3), i.Fc(9, M, 1, 0, "mat-footer-cell", 4), i.Qb(), i.Rb(10, 5), i.Fc(11, R, 1, 0, "mat-header-cell", 2), i.Fc(12, U, 2, 1, "mat-cell", 6), i.Fc(13, j, 1, 0, "mat-footer-cell", 7), i.Qb(), i.Rb(14, 8), i.Fc(15, J, 1, 0, "mat-header-cell", 2), i.Fc(16, q, 5, 3, "mat-cell", 9), i.Fc(17, W, 2, 0, "mat-footer-cell", 10), i.Qb(), i.Rb(18, 11), i.Fc(19, Y, 1, 0, "mat-header-cell", 2), i.Fc(20, V, 2, 1, "mat-cell", 12), i.Fc(21, Q, 1, 0, "mat-footer-cell", 13), i.Qb(), i.Fc(22, Z, 4, 0, "ng-container", 14), i.Fc(23, tt, 1, 0, "mat-header-row", 15), i.Fc(24, et, 1, 0, "mat-row", 16), i.Fc(25, it, 2, 1, "span", 17), i.Sb(), i.Fc(26, ot, 3, 4, "div", 18)), 2 & t && (i.Bb(1), i.Jc(" ", i.gc(2, 8, "TITLE_BASKET"), " "), i.Bb(3), i.Ic(e.userEmail), i.Bb(1), i.kc("dataSource", e.dataSource), i.Bb(17), i.kc("ngIf", e.allowEdit), i.Bb(1), i.kc("matHeaderRowDef", e.tableColumns), i.Bb(1), i.kc("matRowDefColumns", e.tableColumns), i.Bb(1), i.kc("ngIf", e.displayTotal), i.Bb(1), i.kc("ngIf", e.totalPrice))
                },
                directives: [E.n, E.c, E.i, E.b, E.e, L.l, E.k, E.m, E.h, E.a, D.b, p.b, E.d, S.a, E.j, E.l, E.g, E.f],
                pipes: [f.d],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{height:auto;width:90px}mat-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px;margin-top:15px;margin-bottom:15px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.content-align[_ngcontent-%COMP%]{display:flex;justify-content:center}#price[_ngcontent-%COMP%]{margin-top:30px;width:100%;font-size:large;text-align:right}"]
            }), t
        })();
        const rt = function (t) {
            return {bonus: t}
        };
        u.b.add(m.d), u.a.watch();
        let ct = (() => {
            class t {
                constructor(t, e) {
                    this.router = t, this.ngZone = e, this.productCount = 0, this.bonus = 0
                }

                checkout() {
                    this.ngZone.run(() => this.router.navigate(["/address/select"]))
                }

                getProductCount(t) {
                    this.productCount = t
                }

                getBonusPoints(t) {
                    sessionStorage.setItem("itemTotal", t[0]), this.bonus = t[1]
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(y.b), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-basket"]],
                decls: 8,
                vars: 8,
                consts: [[1, "mat-elevation-z6"], [3, "allowEdit", "emitTotal", "emitProductCount"], ["id", "checkoutButton", "color", "primary", "mat-raised-button", "", 1, "checkout-button", 3, "disabled", "click"], [1, "fas", "fa-cart-arrow-down"], ["translate", "", 1, "hint", 3, "translateParams"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "app-purchase-basket", 1), i.ac("emitTotal", (function (t) {
                        return e.getBonusPoints(t)
                    }))("emitProductCount", (function (t) {
                        return e.getProductCount(t)
                    })), i.Sb(), i.Tb(2, "button", 2), i.ac("click", (function () {
                        return e.checkout()
                    })), i.Ob(3, "i", 3), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Tb(6, "div", 4), i.Hc(7, "CHECKOUT_FOR_BONUS_POINTS"), i.Sb(), i.Sb()), 2 & t && (i.Bb(1), i.kc("allowEdit", !0), i.Bb(1), i.kc("disabled", e.productCount < 1), i.Bb(2), i.Jc(" ", i.gc(5, 4, "BTN_CHECKOUT"), " "), i.Bb(2), i.kc("translateParams", i.pc(6, rt, e.bonus)))
                },
                directives: [g.a, nt, S.a, f.a],
                pipes: [f.d],
                styles: [".container[_ngcontent-%COMP%]{min-width:420px;width:40%}mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);justify-content:center;padding:12px 20px}.mat-row[_ngcontent-%COMP%]{padding-bottom:10px}.mat-column-bonus[_ngcontent-%COMP%], .mat-column-description[_ngcontent-%COMP%], .mat-column-price[_ngcontent-%COMP%]{margin-left:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{width:20px}.mat-column-quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:22px}mat-form-field[_ngcontent-%COMP%]{margin-top:15px;width:100%}mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:20px}#checkoutButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:13px;justify-content:center;margin-top:5px}.payment-label[_ngcontent-%COMP%]{padding-top:10px}"]
            }), t
        })(), st = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/track-order"
                }

                save(t) {
                    return t = encodeURIComponent(t), this.http.get(this.host + "/" + t).pipe(Object(s.a)(t => t), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function lt(t, e) {
            1 & t && (i.Tb(0, "span"), i.Ob(1, "i", 27), i.Sb())
        }

        function bt(t, e) {
            1 & t && (i.Tb(0, "span"), i.Ob(1, "i", 28), i.Sb())
        }

        function ut(t, e) {
            1 & t && (i.Tb(0, "span"), i.Ob(1, "i", 29), i.Sb())
        }

        function dt(t, e) {
            1 & t && (i.Tb(0, "span"), i.Ob(1, "i", 30), i.Sb())
        }

        function mt(t, e) {
            1 & t && (i.Tb(0, "span"), i.Ob(1, "i", 31), i.Sb())
        }

        function ht(t, e) {
            1 & t && (i.Tb(0, "span"), i.Ob(1, "i", 32), i.Sb())
        }

        function pt(t, e) {
            if (1 & t && (i.Tb(0, "span", 33), i.Tb(1, "span"), i.Ob(2, "i", 34), i.Sb(), i.Tb(3, "span", 35), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(4), i.Kc("", t.results.eta, " ", i.gc(5, 2, "LABEL_DAYS"), "")
            }
        }

        function gt(t, e) {
            if (1 & t && (i.Tb(0, "span", 33), i.Tb(1, "span"), i.Ob(2, "i", 36), i.Sb(), i.Tb(3, "span", 35), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(4), i.Kc("", t.results.eta, " ", i.gc(5, 2, "LABEL_DAYS"), "")
            }
        }

        function ft(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 1), i.Hc(1, "LABEL_PRODUCT"), i.Sb())
        }

        function St(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 37), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.name, "")
            }
        }

        function Tt(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 38), i.Hc(1, "LABEL_PRICE"), i.Sb())
        }

        function vt(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 39), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.price, "\xa4")
            }
        }

        function Ct(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 1), i.Hc(1, "LABEL_QUANTITY"), i.Sb())
        }

        function wt(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 40), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.quantity, "")
            }
        }

        function yt(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 1), i.Hc(1, "LABEL_TOTAL_PRICE"), i.Sb())
        }

        function kt(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 41), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.total, "\xa4")
            }
        }

        function Ot(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function It(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        const _t = function (t) {
            return {bonus: t}
        };
        u.b.add(m.mb, m.Q, m.cb, m.bb, m.x), u.a.watch();
        var xt = function (t) {
            return t[t.New = 0] = "New", t[t.Packing = 1] = "Packing", t[t.Transit = 2] = "Transit", t[t.Delivered = 3] = "Delivered", t
        }({});
        let Bt = (() => {
            class t {
                constructor(t, e, a) {
                    this.route = t, this.trackOrderService = e, this.sanitizer = a, this.displayedColumns = ["product", "price", "quantity", "total price"], this.dataSource = new E.o, this.results = {}, this.status = xt.New, this.Status = xt
                }

                ngOnInit() {
                    this.orderId = this.route.snapshot.queryParams.id, this.trackOrderService.save(this.orderId).subscribe(t => {
                        this.results.orderNo = this.sanitizer.bypassSecurityTrustHtml(`<code>${t.data[0].orderId}</code>`), this.results.email = t.data[0].email, this.results.totalPrice = t.data[0].totalPrice, this.results.products = t.data[0].products, this.results.eta = void 0 !== t.data[0].eta ? t.data[0].eta : "?", this.results.bonus = t.data[0].bonus, this.dataSource.data = this.results.products, this.status = t.data[0].delivered ? xt.Delivered : this.route.snapshot.data.type ? xt.New : this.results.eta > 2 ? xt.Packing : xt.Transit
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(y.a), i.Nb(st), i.Nb(o.c))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-track-result"]],
                decls: 48,
                vars: 18,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], [3, "innerHtml"], [2, "text-align", "center"], [1, "container-fluid", "well"], [1, "row", "fa-4x"], [4, "ngIf"], ["class", "fa-layers fa-fw", 4, "ngIf"], ["fxLayoutAlign", "center", 1, "table-wrapper"], [1, "table-heading", "heading"], ["fxLayoutAlign", "center"], [1, "mat-elevation-z0", 3, "dataSource"], ["table", ""], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], ["class", "product-name", 4, "matCellDef"], ["matColumnDef", "price"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["class", "product-price", "fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "quantity"], ["class", "product-quantity", 4, "matCellDef"], ["matColumnDef", "total price"], ["class", "product-total", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "bonus-container"], ["translate", "", 3, "translateParams"], [1, "fas", "fa-warehouse", "confirmation"], [1, "fas", "fa-warehouse"], [1, "fas", "fa-truck-loading", "confirmation"], [1, "fas", "fa-truck-loading"], [1, "fas", "fa-truck", "confirmation"], [1, "fas", "fa-truck"], [1, "fa-layers", "fa-fw"], [1, "fas", "fa-home", "confirmation"], [1, "fa-layers-counter", "accent-notification", 2, "width", "max-content"], [1, "fas", "fa-home"], [1, "product-name"], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", "", 1, "product-price"], [1, "product-quantity"], [1, "product-total"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "h1"), i.Tb(2, "span", 1), i.Hc(3, "TITLE_SEARCH_RESULTS"), i.Sb(), i.Hc(4, " - "), i.Ob(5, "span", 2), i.Sb(), i.Tb(6, "div", 3), i.Tb(7, "h3", 1), i.Hc(8, "LABEL_EXPECTED_DELIVERY"), i.Sb(), i.Tb(9, "div", 4), i.Tb(10, "div", 5), i.Fc(11, lt, 2, 0, "span", 6), i.Fc(12, bt, 2, 0, "span", 6), i.Fc(13, ut, 2, 0, "span", 6), i.Fc(14, dt, 2, 0, "span", 6), i.Fc(15, mt, 2, 0, "span", 6), i.Fc(16, ht, 2, 0, "span", 6), i.Fc(17, pt, 6, 4, "span", 7), i.Fc(18, gt, 6, 4, "span", 7), i.Sb(), i.Sb(), i.Sb(), i.Tb(19, "div", 8), i.Tb(20, "div", 9), i.Tb(21, "h2", 1), i.Hc(22, "LABEL_PRODUCT_ORDERED"), i.Sb(), i.Sb(), i.Sb(), i.Tb(23, "div", 10), i.Tb(24, "mat-table", 11, 12), i.Rb(26, 13), i.Fc(27, ft, 2, 0, "mat-header-cell", 14), i.Fc(28, St, 2, 1, "mat-cell", 15), i.Qb(), i.Rb(29, 16), i.Fc(30, Tt, 2, 0, "mat-header-cell", 17), i.Fc(31, vt, 2, 1, "mat-cell", 18), i.Qb(), i.Rb(32, 19), i.Fc(33, Ct, 2, 0, "mat-header-cell", 14), i.Fc(34, wt, 2, 1, "mat-cell", 20), i.Qb(), i.Rb(35, 21), i.Fc(36, yt, 2, 0, "mat-header-cell", 14), i.Fc(37, kt, 2, 1, "mat-cell", 22), i.Qb(), i.Fc(38, Ot, 1, 0, "mat-header-row", 23), i.Fc(39, It, 1, 0, "mat-row", 24), i.Sb(), i.Sb(), i.Tb(40, "div", 25), i.Tb(41, "h2", 26), i.Hc(42, "BONUS_POINTS_EARNED"), i.Sb(), i.Tb(43, "p"), i.Hc(44, "("), i.Ob(45, "span", 2), i.fc(46, "translate"), i.Hc(47, ")"), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(5), i.kc("innerHtml", e.results.orderNo, i.wc), i.Bb(6), i.kc("ngIf", e.status === e.Status.New), i.Bb(1), i.kc("ngIf", e.status !== e.Status.New), i.Bb(1), i.kc("ngIf", e.status === e.Status.Packing), i.Bb(1), i.kc("ngIf", e.status !== e.Status.Packing), i.Bb(1), i.kc("ngIf", e.status === e.Status.Transit), i.Bb(1), i.kc("ngIf", e.status !== e.Status.Transit), i.Bb(1), i.kc("ngIf", e.status === e.Status.Delivered), i.Bb(1), i.kc("ngIf", e.status !== e.Status.Delivered), i.Bb(6), i.kc("dataSource", e.dataSource), i.Bb(14), i.kc("matHeaderRowDef", e.displayedColumns), i.Bb(1), i.kc("matRowDefColumns", e.displayedColumns), i.Bb(2), i.kc("translateParams", i.pc(16, _t, e.results.bonus)), i.Bb(4), i.kc("innerHtml", i.gc(46, 14, "BONUS_FOR_FUTURE_PURCHASES"), i.wc))
                },
                directives: [g.a, f.a, L.l, p.c, E.n, E.c, E.i, E.b, E.k, E.m, E.h, E.a, D.b, E.j, E.l],
                pipes: [f.d],
                styles: [".heading[_ngcontent-%COMP%], .table-heading[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{width:90%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);justify-content:center;padding:0 20px;height:35px}.product-name[_ngcontent-%COMP%]{margin-right:25px}.table-wrapper[_ngcontent-%COMP%]{margin-top:30px}.table-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:0}.row.fa-4x[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:10px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.bonus-container[_ngcontent-%COMP%]{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;margin-top:10px;place-content:stretch center}.bonus-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;padding:0}"]
            }), t
        })(), Ht = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Feedbacks"
                }

                find(t) {
                    return this.http.get(this.host + "/", {params: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                del(t) {
                    return this.http.delete(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })(), Pt = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/captcha"
                }

                getCaptcha() {
                    return this.http.get(this.host + "/").pipe(Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })(), At = (() => {
            class t {
                constructor(t) {
                    this._document = t
                }

                attachEnterKeyHandler(t, e, a) {
                    const i = this._document.getElementById(t), o = this._document.getElementById(e);
                    i.addEventListener("keyup", (function (t) {
                        t.preventDefault(), 13 !== t.keyCode || o.disabled || a()
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(L.d))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var Et = a("Q2Ze"), Lt = a("e6WT"), Dt = a("mPVK");

        function Nt(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_COMMENT "), i.Sb())
        }

        function Ft(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_CAPTCHA "), i.Sb())
        }

        function Mt(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "INVALID_CAPTCHA "), i.Sb())
        }

        const Rt = function () {
            return {length: "160"}
        };
        u.b.add(m.O, m.D), u.a.watch();
        let Ut = (() => {
            class t {
                constructor(t, e, a, i, o, n) {
                    this.userService = t, this.captchaService = e, this.feedbackService = a, this.formSubmitService = i, this.translate = o, this.snackBarHelperService = n, this.authorControl = new c.d({
                        value: "",
                        disabled: !0
                    }, []), this.feedbackControl = new c.d("", [c.y.required, c.y.maxLength(160)]), this.captchaControl = new c.d("", [c.y.required, c.y.pattern("-?[\\d]*")]), this.userIdControl = new c.d("", []), this.rating = 0, this.feedback = void 0
                }

                ngOnInit() {
                    this.userService.whoAmI().subscribe(t => {
                        this.feedback = {}, this.userIdControl.setValue(t.id), this.feedback.UserId = t.id, this.authorControl.setValue(t.email ? "***" + t.email.slice(3) : "anonymous")
                    }, t => {
                        this.feedback = void 0, console.log(t)
                    }), this.getNewCaptcha(), this.formSubmitService.attachEnterKeyHandler("feedback-form", "submitButton", () => this.save())
                }

                getNewCaptcha() {
                    this.captchaService.getCaptcha().subscribe(t => {
                        this.captcha = t.captcha, this.captchaId = t.captchaId
                    }, t => t)
                }

                save() {
                    this.feedback.captchaId = this.captchaId, this.feedback.captcha = this.captchaControl.value, this.feedback.comment = `${this.feedbackControl.value} (${this.authorControl.value})`, this.feedback.rating = this.rating, this.feedback.UserId = this.userIdControl.value, this.feedbackService.save(this.feedback).subscribe(t => {
                        5 === t.rating ? this.translate.get("FEEDBACK_FIVE_STAR_THANK_YOU").subscribe(t => {
                            this.snackBarHelperService.open(t)
                        }, t => {
                            this.snackBarHelperService.open(t)
                        }) : this.translate.get("FEEDBACK_THANK_YOU").subscribe(t => {
                            this.snackBarHelperService.open(t)
                        }, t => {
                            this.snackBarHelperService.open(t)
                        }), this.feedback = {}, this.ngOnInit(), this.resetForm()
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.feedback = {}, this.resetCaptcha()
                    })
                }

                resetForm() {
                    this.authorControl.markAsUntouched(), this.authorControl.markAsPristine(), this.authorControl.setValue(""), this.feedbackControl.markAsUntouched(), this.feedbackControl.markAsPristine(), this.feedbackControl.setValue(""), this.rating = 0, this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue("")
                }

                resetCaptcha() {
                    this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue("")
                }

                formatRating(t) {
                    return t + "\u2605"
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(w), i.Nb(Pt), i.Nb(Ht), i.Nb(At), i.Nb(f.e), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-contact"]],
                decls: 52,
                vars: 26,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "feedback-form", 1, "form-container"], ["hidden", "", "type", "text", "id", "userId", 3, "formControl"], ["appearance", "outline", "color", "accent"], ["matInput", "", "type", "text", "aria-label", "Field with the name of the author", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "comment", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "aria-label", "Field for entering the comment or the feedback", 3, "formControl", "placeholder"], ["comment", ""], ["align", "end"], ["translate", "", 4, "ngIf"], [1, "rating-container"], ["translate", "", 2, "font-weight", "500", "margin-right", "8px", "float", "left"], ["id", "rating", "min", "1", "max", "5", "thumbLabel", "", "tickInterval", "1", "aria-label", "Slider for selecting the star rating", 3, "value", "displayWith", "valueChange"], [2, "margin-bottom", "10px", "margin-top", "10px"], [2, "font-weight", "500"], ["translate", "", 2, "font-size", "small"], ["id", "captcha", "aria-label", "CAPTCHA code which must be solved"], [2, "font-size", "small"], ["id", "captchaControl", "matInput", "", "type", "text", "aria-label", "Field for the result of the CAPTCHA code", "pattern", "-?[\\d]*", 3, "formControl", "placeholder"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the review", 3, "disabled", "click"], [1, "material-icons"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "SECTION_CUSTOMER_FEEDBACK"), i.Sb(), i.Tb(4, "div", 3), i.Ob(5, "input", 4), i.Tb(6, "mat-form-field", 5), i.Tb(7, "mat-label", 2), i.Hc(8, "LABEL_AUTHOR"), i.Sb(), i.Ob(9, "input", 6), i.Sb(), i.Tb(10, "mat-form-field", 5), i.Tb(11, "mat-label", 2), i.Hc(12, "LABEL_COMMENT"), i.Sb(), i.Tb(13, "mat-hint", 2), i.Ob(14, "i", 7), i.Tb(15, "em", 8), i.Hc(16), i.fc(17, "translate"), i.Sb(), i.Sb(), i.Ob(18, "textarea", 9, 10), i.fc(20, "translate"), i.Tb(21, "mat-hint", 11), i.Hc(22), i.Sb(), i.Fc(23, Nt, 2, 0, "mat-error", 12), i.Sb(), i.Tb(24, "div", 13), i.Tb(25, "label", 14), i.Hc(26, "LABEL_RATING"), i.Sb(), i.Tb(27, "mat-slider", 15), i.ac("valueChange", (function (t) {
                        return e.rating = t
                    })), i.Sb(), i.Sb(), i.Tb(28, "div", 16), i.Tb(29, "label", 17), i.Hc(30, "CAPTCHA:"), i.Sb(), i.Hc(31, "\xa0\xa0"), i.Tb(32, "span", 18), i.Hc(33, "LABEL_WHAT_IS"), i.Sb(), i.Hc(34, "\xa0 "), i.Tb(35, "code", 19), i.Hc(36), i.Sb(), i.Hc(37, "\xa0"), i.Tb(38, "label", 20), i.Hc(39, "?"), i.Sb(), i.Sb(), i.Tb(40, "mat-form-field", 5), i.Tb(41, "mat-label", 2), i.Hc(42, "LABEL_RESULT"), i.Sb(), i.Ob(43, "input", 21), i.fc(44, "translate"), i.Fc(45, Ft, 2, 0, "mat-error", 12), i.Fc(46, Mt, 2, 0, "mat-error", 12), i.Sb(), i.Sb(), i.Tb(47, "button", 22), i.ac("click", (function () {
                        return e.save()
                    })), i.Tb(48, "i", 23), i.Hc(49, " send "), i.Sb(), i.Hc(50), i.fc(51, "translate"), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(19);
                        i.Bb(5), i.kc("formControl", e.userIdControl), i.Bb(4), i.kc("formControl", e.authorControl), i.Bb(7), i.Ic(i.hc(17, 16, "MAX_TEXTAREA_LENGTH", i.oc(25, Rt))), i.Bb(2), i.lc("placeholder", i.gc(20, 19, "WRITE_REVIEW_PLACEHOLDER")), i.kc("formControl", e.feedbackControl), i.Bb(4), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/160"), i.Bb(1), i.kc("ngIf", e.feedbackControl.invalid && e.feedbackControl.errors.required), i.Bb(4), i.kc("value", e.rating)("displayWith", e.formatRating), i.Bb(9), i.Ic(e.captcha), i.Bb(7), i.lc("placeholder", i.gc(44, 21, "MANDATORY_CAPTCHA")), i.kc("formControl", e.captchaControl), i.Bb(2), i.kc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.required), i.Bb(1), i.kc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.pattern), i.Bb(1), i.kc("disabled", e.authorControl.invalid || e.feedbackControl.invalid || e.captchaControl.invalid || !e.rating), i.Bb(3), i.Jc(" ", i.gc(51, 23, "BTN_SUBMIT"), " ")
                    }
                },
                directives: [p.c, g.a, f.a, c.c, c.o, c.e, Et.c, Et.g, Lt.b, Et.f, Lt.d, c.j, L.l, Dt.a, c.u, S.a, Et.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.rating-container[_ngcontent-%COMP%]{margin-bottom:15px;margin-top:15px}.star[_ngcontent-%COMP%]{color:#c8c8c8}.active[_ngcontent-%COMP%], .select[_ngcontent-%COMP%]{color:gold}[_nghost-%COMP%]     .br{margin:0!important}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }), t
        })(), jt = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/SecurityQuestions"
                }

                find(t) {
                    return this.http.get(this.host + "/", {params: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                findBy(t) {
                    return this.http.get(this.hostServer + "/rest/user/security-question?email=" + t).pipe(Object(s.a)(t => t.question), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })(), Jt = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/user"
                }

                erase(t) {
                    return this.http.post(this.host + "/erasure-request", t).pipe(Object(l.a)(t => {
                        throw t
                    }))
                }

                dataExport(t) {
                    return this.http.post(this.host + "/data-export", t).pipe(Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function Gt(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_EMAIL"), i.Sb())
        }

        function zt(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "INVALID_EMAIL"), i.Sb())
        }

        function qt(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_SECURITY_ANSWER"), i.Sb())
        }

        function Wt(t, e) {
            if (1 & t && (i.Tb(0, "div", 12), i.Tb(1, "mat-form-field", 6), i.Tb(2, "mat-label"), i.Hc(3), i.Sb(), i.Ob(4, "input", 13), i.Fc(5, qt, 2, 0, "mat-error", 8), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(3), i.Ic(t.securityQuestion), i.Bb(2), i.kc("ngIf", t.securityQuestionForm)
            }
        }

        u.b.add(m.O, m.n), u.a.watch();
        let Yt = (() => {
            class t {
                constructor(t, e, a, i, o, n, r, s, l) {
                    this.securityQuestionService = t, this.dataSubjectService = e, this.ngZone = a, this.router = i, this.cookieService = o, this.userService = n, this.translateService = r, this.snackBar = s, this.snackBarHelperService = l, this.dataSubjectGroup = new c.g({
                        emailControl: new c.d("", [c.y.required, c.y.email]),
                        securityQuestionControl: new c.d("", [c.y.required])
                    })
                }

                ngOnInit() {
                    this.findSecurityQuestion()
                }

                get emailForm() {
                    return this.dataSubjectGroup.get("emailControl")
                }

                get securityQuestionForm() {
                    return this.dataSubjectGroup.get("securityQuestionControl")
                }

                findSecurityQuestion() {
                    this.securityQuestion = void 0, this.emailForm.value && this.securityQuestionService.findBy(this.emailForm.value).subscribe(t => {
                        t && (this.securityQuestion = t.question)
                    }, t => t)
                }

                save() {
                    this.dataSubjectService.erase({
                        email: this.emailForm.value,
                        securityAnswer: this.securityQuestionForm.value
                    }).subscribe(t => {
                        this.error = void 0, this.logout()
                    }, t => {
                        this.error = t.message, this.resetForm()
                    })
                }

                logout() {
                    this.userService.saveLastLoginIp().subscribe(t => {
                        this.noop()
                    }, t => console.log(t)), localStorage.removeItem("token"), this.cookieService.delete("token", "/"), sessionStorage.removeItem("bid"), this.userService.isLoggedIn.next(!1), this.ngZone.run(() => this.router.navigate(["/"])), this.snackBarHelperService.open("CONFIRM_ERASURE_REQUEST")
                }

                noop() {
                }

                resetForm() {
                    this.emailForm.markAsUntouched(), this.emailForm.markAsPristine(), this.emailForm.setValue(""), this.securityQuestionForm.markAsUntouched(), this.securityQuestionForm.markAsPristine(), this.securityQuestionForm.setValue("")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(jt), i.Nb(Jt), i.Nb(i.B), i.Nb(y.b), i.Nb(r.a), i.Nb(w), i.Nb(f.e), i.Nb(P.a), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-erasure-request"]],
                decls: 23,
                vars: 10,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "data-subject-container"], [1, "error", 3, "hidden"], ["id", "data-subject-form", "color", "warn", 1, "form-container", 3, "formGroup", "ngSubmit"], ["appearance", "outline", "color", "accent"], ["id", "email", "formControlName", "emailControl", "type", "text", "matInput", "", "placeholder", "Enter your email", 3, "ngModelChange"], ["translate", "", 4, "ngIf"], ["class", "form-container", "id", "forgot-form", 4, "ngIf"], ["type", "submit", "id", "deleteUserButton", "mat-raised-button", "", "color", "primary", 3, "disabled"], [1, "fas", "fa-exclamation-triangle", "fa-lg"], ["id", "forgot-form", 1, "form-container"], ["id", "securityAnswer", "formControlName", "securityQuestionControl", "type", "password", "matInput", "", "placeholder", ""]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "GDPR_HEADING"), i.Sb(), i.Tb(4, "p", 2), i.Hc(5, "GDPR_MESSAGE"), i.Sb(), i.Tb(6, "h3", 2), i.Hc(7, "DATA_SUBJECT_TITLE"), i.Sb(), i.Tb(8, "div", 3), i.Tb(9, "div", 4), i.Hc(10), i.Sb(), i.Tb(11, "form", 5), i.ac("ngSubmit", (function () {
                        return e.save()
                    })), i.Tb(12, "mat-form-field", 6), i.Tb(13, "mat-label", 2), i.Hc(14, "LABEL_EMAIL"), i.Sb(), i.Tb(15, "input", 7), i.ac("ngModelChange", (function () {
                        return e.findSecurityQuestion()
                    })), i.Sb(), i.Fc(16, Gt, 2, 0, "mat-error", 8), i.Fc(17, zt, 2, 0, "mat-error", 8), i.Sb(), i.Fc(18, Wt, 6, 2, "div", 9), i.Tb(19, "button", 10), i.Ob(20, "i", 11), i.Hc(21), i.fc(22, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(9), i.kc("hidden", !e.error), i.Bb(1), i.Ic(e.error), i.Bb(1), i.kc("formGroup", e.dataSubjectGroup), i.Bb(5), i.kc("ngIf", e.emailForm.invalid && e.emailForm.errors.required), i.Bb(1), i.kc("ngIf", e.emailForm.invalid && e.emailForm.errors.email), i.Bb(1), i.kc("ngIf", e.securityQuestion), i.Bb(1), i.kc("disabled", e.emailForm.invalid || e.securityQuestionForm.invalid), i.Bb(2), i.Jc(" ", i.gc(22, 8, "DELETE_DATA_LABEL"), " "))
                },
                directives: [p.c, g.a, f.a, c.A, c.p, c.h, Et.c, Et.g, c.c, Lt.b, c.o, c.f, L.l, S.a, Et.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;margin-bottom:30px;min-width:320px;width:30%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#deleteUserButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:1.2rem;width:60%}"]
            }), t
        })();
        var Vt = a("5VOe");

        function Qt(t, e) {
            if (1 & t && (i.Tb(0, "a", 14), i.Tb(1, "button", 15), i.Ob(2, "i", 16), i.Hc(3, " Twitter"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.kc("href", t.twitterUrl, i.yc)
            }
        }

        function $t(t, e) {
            if (1 & t && (i.Tb(0, "a", 17), i.Tb(1, "button", 15), i.Ob(2, "i", 18), i.Hc(3, " Facebook"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.kc("href", t.facebookUrl, i.yc)
            }
        }

        function Kt(t, e) {
            if (1 & t && (i.Tb(0, "a", 19), i.Tb(1, "button", 15), i.Ob(2, "i", 20), i.Hc(3, " Slack"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.kc("href", t.slackUrl, i.yc)
            }
        }

        function Xt(t, e) {
            if (1 & t && (i.Tb(0, "a", 21), i.Tb(1, "button", 15), i.Ob(2, "i", 22), i.Hc(3, " Reddit"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.kc("href", t.redditUrl, i.yc)
            }
        }

        function Zt(t, e) {
            if (1 & t && (i.Tb(0, "a", 23), i.Tb(1, "button", 15), i.Ob(2, "i", 24), i.Hc(3, " Press Kit"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.kc("href", t.pressKitUrl, i.yc)
            }
        }

        function te(t, e) {
            if (1 & t && (i.Tb(0, "div", 8), i.Tb(1, "h3"), i.Tb(2, "span", 3), i.Hc(3, "SECTION_SOCIAL_MEDIA"), i.Sb(), i.Sb(), i.Fc(4, Qt, 4, 1, "a", 9), i.Fc(5, $t, 4, 1, "a", 10), i.Fc(6, Kt, 4, 1, "a", 11), i.Fc(7, Xt, 4, 1, "a", 12), i.Fc(8, Zt, 4, 1, "a", 13), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(4), i.kc("ngIf", t.twitterUrl), i.Bb(1), i.kc("ngIf", t.facebookUrl), i.Bb(1), i.kc("ngIf", t.slackUrl), i.Bb(1), i.kc("ngIf", t.redditUrl), i.Bb(1), i.kc("ngIf", t.pressKitUrl)
            }
        }

        u.b.add(d.c, d.k, d.i, d.h, h.e, h.f, m.O), u.a.watch();
        let ee = (() => {
            class t {
                constructor(t, e, a) {
                    this.configurationService = t, this.feedbackService = e, this.sanitizer = a, this.slideshowDataSource = [], this.images = ["assets/public/images/carousel/1.jpg", "assets/public/images/carousel/2.jpg", "assets/public/images/carousel/3.jpg", "assets/public/images/carousel/4.jpg", "assets/public/images/carousel/5.png", "assets/public/images/carousel/6.jpg", "assets/public/images/carousel/7.jpg"], this.stars = [null, '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>', '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>']
                }

                ngOnInit() {
                    this.populateSlideshowFromFeedbacks(), this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.social && (t.application.social.twitterUrl && (this.twitterUrl = t.application.social.twitterUrl), t.application.social.facebookUrl && (this.facebookUrl = t.application.social.facebookUrl), t.application.social.slackUrl && (this.slackUrl = t.application.social.slackUrl), t.application.social.redditUrl && (this.redditUrl = t.application.social.redditUrl), t.application.social.pressKitUrl && (this.pressKitUrl = t.application.social.pressKitUrl))
                    }, t => console.log(t))
                }

                populateSlideshowFromFeedbacks() {
                    this.feedbackService.find().subscribe(t => {
                        for (let e = 0; e < t.length; e++) t[e].comment = '<span style="width: 90%; display:block;">' + t[e].comment + "<br/> (" + this.stars[t[e].rating] + ")</span>", t[e].comment = this.sanitizer.bypassSecurityTrustHtml(t[e].comment), this.slideshowDataSource.push({
                            url: this.images[e % this.images.length],
                            caption: t[e].comment
                        })
                    }, t => {
                        console.log(t)
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(b), i.Nb(Ht), i.Nb(o.c))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-about"]],
                decls: 17,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], [1, "about-us"], ["translate", ""], [1, "text-justify"], ["href", "ftp/legal.md", "aria-label", "Link to the Terms of Use", "translate", ""], [3, "height", "autoPlay", "arrowSize", "showArrows", "showDots", "imageUrls"], ["class", "social", 4, "ngIf"], [1, "social"], ["target", "_blank", "rel", "noopener noreferrer", "style", "margin-left: 0px;", "aria-label", "Button for the Twitter page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Twitter page of the shop", 2, "margin-left", "0px", 3, "href"], ["mat-raised-button", "", "color", "accent"], [1, "fab", "fa-twitter", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Facebook page of the shop", 3, "href"], [1, "fab", "fa-facebook", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Slack page of the shop", 3, "href"], [1, "fab", "fa-slack", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the Reddit page of the shop", 3, "href"], [1, "fab", "fa-reddit", "fa-lg"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Button for the PressKit page of the shop", 3, "href"], [1, "far", "fa-newspaper", "fa-lg"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "section", 2), i.Tb(3, "h1", 3), i.Hc(4, "TITLE_ABOUT"), i.Sb(), i.Tb(5, "h3", 3), i.Hc(6, "SECTION_CORPORATE_HISTORY"), i.Sb(), i.Tb(7, "p", 4), i.Hc(8, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. "), i.Tb(9, "a", 5), i.Hc(10, "LINK_TERMS_OF_USE"), i.Sb(), i.Hc(11, " At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. "), i.Sb(), i.Tb(12, "h3"), i.Tb(13, "span", 3), i.Hc(14, "SECTION_CUSTOMER_FEEDBACK"), i.Sb(), i.Sb(), i.Ob(15, "slideshow", 6), i.Fc(16, te, 9, 5, "div", 7), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(15), i.kc("height", "300px")("autoPlay", !0)("arrowSize", "10px")("showArrows", !0)("showDots", !1)("imageUrls", e.slideshowDataSource), i.Bb(1), i.kc("ngIf", e.twitterUrl || e.facebookUrl))
                },
                directives: [p.c, g.a, f.a, Vt.b, L.l, S.a],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:30px;margin-left:auto;margin-right:auto;width:80%}.about-us[_ngcontent-%COMP%]{margin-left:8.33333%;margin-right:8.33333%;width:83.3333%}.social[_ngcontent-%COMP%]{margin-top:20px}button[_ngcontent-%COMP%]{margin:5px}.text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}"]
            }), t
        })(), ae = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/SecurityAnswers"
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var ie = a("jMqV"), oe = a("sOue"), ne = a("ZTz/"), re = a("UhP/");

        function ce(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_EMAIL"), i.Sb())
        }

        function se(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "INVALID_EMAIL"), i.Sb())
        }

        function le(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_PASSWORD "), i.Sb())
        }

        const be = function () {
            return {length: "5-20"}
        };

        function ue(t, e) {
            1 & t && (i.Tb(0, "mat-error", 30), i.Hc(1, "INVALID_PASSWORD_LENGTH "), i.Sb()), 2 & t && i.kc("translateParams", i.oc(1, be))
        }

        function de(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_PASSWORD_REPEAT "), i.Sb())
        }

        function me(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " PASSWORDS_NOT_MATCHING "), i.Sb())
        }

        const he = function () {
            return {value: 8}
        };

        function pe(t, e) {
            if (1 & t && (i.Ob(0, "mat-password-strength-info", 31), i.fc(1, "translate"), i.fc(2, "translate"), i.fc(3, "translate"), i.fc(4, "translate"), i.fc(5, "translate")), 2 & t) {
                i.ec();
                const t = i.sc(41);
                i.kc("passwordComponent", t)("lowerCaseCriteriaMsg", i.gc(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", i.gc(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", i.gc(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", i.gc(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", i.hc(5, 14, "MIN_CHARS_CRITERIA_MSG", i.oc(17, he)))
            }
        }

        function ge(t, e) {
            if (1 & t && (i.Tb(0, "mat-option", 32), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.kc("value", t.id), i.Bb(1), i.Jc(" ", t.question, " ")
            }
        }

        function fe(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_SECURITY_QUESTION "), i.Sb())
        }

        function Se(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_SECURITY_ANSWER "), i.Sb())
        }

        u.b.add(m.jb, m.m), u.a.watch();
        let Te = (() => {
            class t {
                constructor(t, e, a, i, o, n, r, s, l) {
                    var b;
                    this.securityQuestionService = t, this.userService = e, this.securityAnswerService = a, this.router = i, this.formSubmitService = o, this.translateService = n, this.snackBar = r, this.snackBarHelperService = s, this.ngZone = l, this.emailControl = new c.d("", [c.y.required, c.y.email]), this.passwordControl = new c.d("", [c.y.required, c.y.minLength(5), c.y.maxLength(20)]), this.repeatPasswordControl = new c.d("", [c.y.required, (b = this.passwordControl, function (t) {
                        return b.value !== t.value ? {notSame: !0} : null
                    })]), this.securityQuestionControl = new c.d("", [c.y.required]), this.securityAnswerControl = new c.d("", [c.y.required]), this.error = null
                }

                ngOnInit() {
                    this.securityQuestionService.find(null).subscribe(t => {
                        this.securityQuestions = t
                    }, t => console.log(t)), this.formSubmitService.attachEnterKeyHandler("registration-form", "registerButton", () => this.save())
                }

                save() {
                    const t = {
                        email: this.emailControl.value,
                        password: this.passwordControl.value,
                        passwordRepeat: this.repeatPasswordControl.value,
                        securityQuestion: this.securityQuestions.find(t => t.id === this.securityQuestionControl.value),
                        securityAnswer: this.securityAnswerControl.value
                    };
                    this.userService.save(t).subscribe(t => {
                        this.securityAnswerService.save({
                            UserId: t.id,
                            answer: this.securityAnswerControl.value,
                            SecurityQuestionId: this.securityQuestionControl.value
                        }).subscribe(() => {
                            this.ngZone.run(() => this.router.navigate(["/login"])), this.snackBarHelperService.open("CONFIRM_REGISTER")
                        })
                    }, t => {
                        if (console.log(t), t.error && t.error.errors) {
                            const e = t.error.errors[0];
                            this.error = e.message ? e.message[0].toUpperCase() + e.message.slice(1) : e
                        }
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(jt), i.Nb(w), i.Nb(ae), i.Nb(y.b), i.Nb(At), i.Nb(f.e), i.Nb(P.a), i.Nb(A), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-register"]],
                decls: 69,
                vars: 39,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["ng-if", "error", 1, "error"], ["id", "registration-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "emailControl", "type", "text", "matInput", "", "aria-label", "Email address field", 3, "formControl", "focus"], ["translate", "", 4, "ngIf"], ["id", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field for the password", 3, "formControl", "focus"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "repeatPasswordControl", "type", "password", "matInput", "", "aria-label", "Field to confirm the password", 3, "formControl", "focus"], ["repeatPassword", ""], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], [1, "security-container"], ["color", "accent", "appearance", "outline"], ["placeholder", "", "name", "securityQuestion", "aria-label", "Selection list for the security question", 3, "formControl", "value", "valueChange", "focus"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "securityAnswerControl", "type", "text", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder", "focus"], ["type", "submit", "id", "registerButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the registration", 3, "disabled", "click"], [1, "material-icons"], ["id", "alreadyACustomerLink"], ["routerLink", "/login", "translate", "", 1, "primary-link"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"], [3, "value"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_REGISTRATION"), i.Sb(), i.Tb(4, "div", 3), i.Hc(5), i.Sb(), i.Tb(6, "div", 4), i.Tb(7, "mat-form-field", 5), i.Tb(8, "mat-label", 2), i.Hc(9, "LABEL_EMAIL"), i.Sb(), i.Tb(10, "input", 6), i.ac("focus", (function () {
                        return e.error = null
                    })), i.Sb(), i.Fc(11, ce, 2, 0, "mat-error", 7), i.Fc(12, se, 2, 0, "mat-error", 7), i.Sb(), i.Tb(13, "mat-form-field", 5), i.Tb(14, "mat-label", 2), i.Hc(15, "LABEL_PASSWORD"), i.Sb(), i.Tb(16, "input", 8, 9), i.ac("focus", (function () {
                        return e.error = null
                    })), i.Sb(), i.Tb(18, "mat-hint", 2), i.Ob(19, "i", 10), i.Tb(20, "em", 11), i.Hc(21), i.fc(22, "translate"), i.Sb(), i.Sb(), i.Tb(23, "mat-hint", 12), i.Hc(24), i.Sb(), i.Fc(25, le, 2, 0, "mat-error", 7), i.Fc(26, ue, 2, 2, "mat-error", 13), i.Sb(), i.Tb(27, "mat-form-field", 5), i.Tb(28, "mat-label", 2), i.Hc(29, "LABEL_PASSWORD_REPEAT"), i.Sb(), i.Tb(30, "input", 14, 15), i.ac("focus", (function () {
                        return e.error = null
                    })), i.Sb(), i.Tb(32, "mat-hint", 12), i.Hc(33), i.Sb(), i.Fc(34, de, 2, 0, "mat-error", 7), i.Fc(35, me, 2, 0, "mat-error", 7), i.Sb(), i.Tb(36, "mat-slide-toggle", 16, 17), i.Hc(38), i.fc(39, "translate"), i.Sb(), i.Ob(40, "mat-password-strength", 18, 19), i.Fc(42, pe, 6, 18, "mat-password-strength-info", 20), i.Tb(43, "div", 21), i.Tb(44, "mat-form-field", 22), i.Tb(45, "mat-label"), i.Hc(46), i.fc(47, "translate"), i.Sb(), i.Tb(48, "mat-select", 23), i.ac("valueChange", (function (t) {
                        return e.selected = t
                    }))("focus", (function () {
                        return e.error = null
                    })), i.Fc(49, ge, 2, 2, "mat-option", 24), i.Sb(), i.Tb(50, "mat-hint", 2), i.Ob(51, "i", 10), i.Tb(52, "em", 11), i.Hc(53, "CANNOT_BE_CHANGED_LATER"), i.Sb(), i.Sb(), i.Fc(54, fe, 2, 0, "mat-error", 7), i.Sb(), i.Tb(55, "mat-form-field", 5), i.Tb(56, "mat-label", 2), i.Hc(57, "SECURITY_ANSWER"), i.Sb(), i.Tb(58, "input", 25), i.ac("focus", (function () {
                        return e.error = null
                    })), i.fc(59, "translate"), i.Sb(), i.Fc(60, Se, 2, 0, "mat-error", 7), i.Sb(), i.Sb(), i.Tb(61, "button", 26), i.ac("click", (function () {
                        return e.save()
                    })), i.Tb(62, "i", 27), i.Hc(63, " person_add "), i.Sb(), i.Hc(64), i.fc(65, "translate"), i.Sb(), i.Tb(66, "div", 28), i.Tb(67, "a", 29), i.Hc(68, "ALREADY_A_CUSTOMER"), i.Sb(), i.Sb(), i.Sb(),i.Sb(),i.Sb()), 2 & t) {
                        const t = i.sc(17), a = i.sc(31), o = i.sc(37), n = i.sc(41);
                        i.Bb(5), i.Ic(e.error), i.Bb(5), i.kc("formControl", e.emailControl), i.Bb(1), i.kc("ngIf", e.emailControl.invalid && e.emailControl.errors.required), i.Bb(1), i.kc("ngIf", e.emailControl.invalid && e.emailControl.errors.email), i.Bb(4), i.kc("formControl", e.passwordControl), i.Bb(5), i.Ic(i.hc(22, 27, "INVALID_PASSWORD_LENGTH", i.oc(38, be))), i.Bb(3), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/20"), i.Bb(1), i.kc("ngIf", e.passwordControl.invalid && e.passwordControl.errors.required), i.Bb(1), i.kc("ngIf", e.passwordControl.invalid && (e.passwordControl.errors.minlength || e.passwordControl.errors.maxlength)), i.Bb(4), i.kc("formControl", e.repeatPasswordControl), i.Bb(3), i.Jc("", (null == a.value ? null : a.value.length) || 0, "/20"), i.Bb(1), i.kc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.required), i.Bb(1), i.kc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.notSame), i.Bb(1), i.kc("color", n.color), i.Bb(2), i.Ic(i.gc(39, 30, "SHOW_PASSWORD_ADVICE")), i.Bb(2), i.kc("password", t.value), i.Bb(2), i.kc("ngIf", o.checked), i.Bb(4), i.Jc(" ", i.gc(47, 32, "LABEL_SECURITY_QUESTION"), " "), i.Bb(2), i.kc("formControl", e.securityQuestionControl)("value", e.selected), i.Bb(1), i.kc("ngForOf", e.securityQuestions), i.Bb(5), i.kc("ngIf", e.securityQuestionControl.invalid && e.securityQuestionControl.errors.required), i.Bb(4), i.kc("formControl", e.securityAnswerControl)("placeholder", i.gc(59, 34, "SECURITY_ANSWER_PLACEHOLDER")), i.Bb(2), i.kc("ngIf", e.securityAnswerControl.invalid && e.securityAnswerControl.errors.required), i.Bb(1), i.kc("disabled", e.emailControl.invalid || e.passwordControl.invalid || e.repeatPasswordControl.invalid || e.securityQuestionControl.invalid || e.securityAnswerControl.invalid), i.Bb(3), i.Jc(" ", i.gc(65, 36, "BTN_REGISTER"), " ")
                    }
                },
                directives: [p.c, g.a, f.a, Et.c, Et.g, Lt.b, c.c, c.o, c.e, L.l, Et.f, ie.a, oe.a, ne.a, L.k, S.a, y.d, Et.b, oe.b, re.l],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#registerButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#alreadyACustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}.security-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}  mat-option .mat-option-text{font-size:14px}"]
            }), t
        })();
        var ve = a("Tj54"), Ce = a("ZFy/");

        function we(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_EMAIL"), i.Sb())
        }

        function ye(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "INVALID_EMAIL"), i.Sb())
        }

        function ke(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_SECURITY_ANSWER "), i.Sb())
        }

        function Oe(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_NEW_PASSWORD "), i.Sb())
        }

        function Ie(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_PASSWORD_REPEAT "), i.Sb())
        }

        function _e(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " PASSWORDS_NOT_MATCHING "), i.Sb())
        }

        const xe = function () {
            return {length: "5-20"}
        };

        function Be(t, e) {
            1 & t && (i.Tb(0, "mat-error", 28), i.Hc(1, "INVALID_PASSWORD_LENGTH "), i.Sb()), 2 & t && i.kc("translateParams", i.oc(1, xe))
        }

        const He = function () {
            return {value: 8}
        };

        function Pe(t, e) {
            if (1 & t && (i.Ob(0, "mat-password-strength-info", 29), i.fc(1, "translate"), i.fc(2, "translate"), i.fc(3, "translate"), i.fc(4, "translate"), i.fc(5, "translate")), 2 & t) {
                i.ec();
                const t = i.sc(55);
                i.kc("passwordComponent", t)("lowerCaseCriteriaMsg", i.gc(1, 6, "LOWER_CASE_CRITERIA_MSG"))("upperCaseCriteriaMsg", i.gc(2, 8, "UPPER_CASE_CRITERIA_MSG"))("digitsCriteriaMsg", i.gc(3, 10, "DIGITS_CRITERIA_MSG"))("specialCharsCriteriaMsg", i.gc(4, 12, "SPECIAL_CHARS_CRITERIA_MSG"))("minCharsCriteriaMsg", i.hc(5, 14, "MIN_CHARS_CRITERIA_MSG", i.oc(17, He)))
            }
        }

        u.b.add(m.I, h.c), u.a.watch();
        let Ae = (() => {
            class t {
                constructor(t, e, a) {
                    var i;
                    this.securityQuestionService = t, this.userService = e, this.translate = a, this.emailControl = new c.d("", [c.y.required, c.y.email]), this.securityQuestionControl = new c.d({
                        disabled: !0,
                        value: ""
                    }, [c.y.required]), this.passwordControl = new c.d({
                        disabled: !0,
                        value: ""
                    }, [c.y.required, c.y.minLength(5)]), this.repeatPasswordControl = new c.d({
                        disabled: !0,
                        value: ""
                    }, [c.y.required, (i = this.passwordControl, function (t) {
                        return i.value !== t.value ? {notSame: !0} : null
                    })])
                }

                findSecurityQuestion() {
                    this.securityQuestion = void 0, this.emailControl.value ? this.securityQuestionService.findBy(this.emailControl.value).subscribe(t => {
                        t ? (this.securityQuestion = t.question, this.securityQuestionControl.enable(), this.passwordControl.enable(), this.repeatPasswordControl.enable()) : (this.securityQuestionControl.disable(), this.passwordControl.disable(), this.repeatPasswordControl.disable())
                    }, t => t) : (this.securityQuestionControl.disable(), this.passwordControl.disable(), this.repeatPasswordControl.disable())
                }

                resetPassword() {
                    this.userService.resetPassword({
                        email: this.emailControl.value,
                        answer: this.securityQuestionControl.value,
                        new: this.passwordControl.value,
                        repeat: this.repeatPasswordControl.value
                    }).subscribe(() => {
                        this.error = void 0, this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(t => {
                            this.confirmation = t
                        }, t => {
                            this.confirmation = t
                        }), this.resetForm()
                    }, t => {
                        this.error = t.error, this.confirmation = void 0, this.resetErrorForm()
                    })
                }

                resetForm() {
                    this.emailControl.setValue(""), this.emailControl.markAsPristine(), this.emailControl.markAsUntouched(), this.securityQuestionControl.setValue(""), this.securityQuestionControl.markAsPristine(), this.securityQuestionControl.markAsUntouched(), this.passwordControl.setValue(""), this.passwordControl.markAsPristine(), this.passwordControl.markAsUntouched(), this.repeatPasswordControl.setValue(""), this.repeatPasswordControl.markAsPristine(), this.repeatPasswordControl.markAsUntouched()
                }

                resetErrorForm() {
                    this.emailControl.markAsPristine(), this.emailControl.markAsUntouched(), this.securityQuestionControl.setValue(""), this.securityQuestionControl.markAsPristine(), this.securityQuestionControl.markAsUntouched(), this.passwordControl.setValue(""), this.passwordControl.markAsPristine(), this.passwordControl.markAsUntouched(), this.repeatPasswordControl.setValue(""), this.repeatPasswordControl.markAsPristine(), this.repeatPasswordControl.markAsUntouched()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(jt), i.Nb(w), i.Nb(f.e))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-forgot-password"]],
                decls: 61,
                vars: 39,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], [1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "email", "type", "email", "matInput", "", "placeholder", "Enter your email", "aria-label", "Email address field", 3, "formControl", "ngModelChange"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please enter your email address to proceed", 3, "matTooltip"], ["translate", "", 4, "ngIf"], ["id", "forgot-form", 1, "form-container"], ["id", "securityAnswer", "type", "password", "matInput", "", "aria-label", "Field for the answer to the security question", 3, "formControl", "placeholder"], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "Please answer your selected security question", 3, "matTooltip"], ["id", "newPassword", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field for New Password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "placeholder", "", "aria-label", "Field to confirm the new password", 3, "formControl"], ["repeatPassword", ""], ["translate", "", 3, "translateParams", 4, "ngIf"], [3, "color"], ["passwordInfoToggle", ""], [3, "password"], ["passwordStrength", ""], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg", 4, "ngIf"], ["type", "submit", "id", "resetButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the changes", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"], [3, "passwordComponent", "lowerCaseCriteriaMsg", "upperCaseCriteriaMsg", "digitsCriteriaMsg", "specialCharsCriteriaMsg", "minCharsCriteriaMsg"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_FORGOT_PASSWORD"), i.Sb(), i.Tb(4, "div", 3), i.Hc(5), i.Sb(), i.Tb(6, "div", 4), i.Hc(7), i.Sb(), i.Tb(8, "div", 5), i.Tb(9, "mat-form-field", 6), i.Tb(10, "mat-label", 2), i.Hc(11, "LABEL_EMAIL"), i.Sb(), i.Tb(12, "input", 7), i.ac("ngModelChange", (function () {
                        return e.findSecurityQuestion()
                    })), i.Sb(), i.Tb(13, "mat-icon", 8), i.fc(14, "translate"), i.Hc(15, "help_outline "), i.Sb(), i.Fc(16, we, 2, 0, "mat-error", 9), i.Fc(17, ye, 2, 0, "mat-error", 9), i.Sb(), i.Sb(), i.Tb(18, "div", 10), i.Tb(19, "mat-form-field", 6), i.Tb(20, "mat-label", 2), i.Hc(21, "LABEL_SECURITY_QUESTION"), i.Sb(), i.Ob(22, "input", 11), i.Tb(23, "mat-icon", 12), i.fc(24, "translate"), i.Hc(25, "help_outline "), i.Sb(), i.Fc(26, ke, 2, 0, "mat-error", 9), i.Sb(), i.Tb(27, "mat-form-field", 6), i.Tb(28, "mat-label", 2), i.Hc(29, "LABEL_NEW_PASSWORD"), i.Sb(), i.Ob(30, "input", 13, 14), i.Tb(32, "mat-hint", 2), i.Ob(33, "i", 15), i.Tb(34, "em", 16), i.Hc(35), i.fc(36, "translate"), i.Sb(), i.Sb(), i.Tb(37, "mat-hint", 17), i.Hc(38), i.Sb(), i.Fc(39, Oe, 2, 0, "mat-error", 9), i.Sb(), i.Tb(40, "mat-form-field", 6), i.Tb(41, "mat-label", 2), i.Hc(42, "LABEL_REPEAT_NEW_PASSWORD"), i.Sb(), i.Ob(43, "input", 18, 19), i.Tb(45, "mat-hint", 17), i.Hc(46), i.Sb(), i.Fc(47, Ie, 2, 0, "mat-error", 9), i.Fc(48, _e, 2, 0, "mat-error", 9), i.Fc(49, Be, 2, 2, "mat-error", 20), i.Sb(), i.Tb(50, "mat-slide-toggle", 21, 22), i.Hc(52), i.fc(53, "translate"), i.Sb(), i.Ob(54, "mat-password-strength", 23, 24), i.Fc(56, Pe, 6, 18, "mat-password-strength-info", 25), i.Sb(), i.Tb(57, "button", 26), i.ac("click", (function () {
                        return e.resetPassword()
                    })), i.Ob(58, "i", 27), i.Hc(59), i.fc(60, "translate"), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(31), a = i.sc(44), o = i.sc(51), n = i.sc(55);
                        i.Bb(4), i.kc("hidden", !(e.confirmation && !e.emailControl.dirty && !e.securityQuestionControl.dirty && !e.passwordControl.dirty && !e.repeatPasswordControl.dirty)), i.Bb(1), i.Jc(" ", e.confirmation, " "), i.Bb(1), i.kc("hidden", !(e.error && !e.emailControl.dirty && !e.securityQuestionControl.dirty && !e.passwordControl.dirty && !e.repeatPasswordControl.dirty)), i.Bb(1), i.Jc(" ", e.error, " "), i.Bb(5), i.kc("formControl", e.emailControl), i.Bb(1), i.lc("matTooltip", i.gc(14, 27, "MANDATORY_EMAIL")), i.Bb(3), i.kc("ngIf", e.emailControl.invalid && e.emailControl.errors.required), i.Bb(1), i.kc("ngIf", e.emailControl.invalid && e.emailControl.errors.email), i.Bb(5), i.lc("placeholder", e.securityQuestion), i.kc("formControl", e.securityQuestionControl), i.Bb(1), i.lc("matTooltip", i.gc(24, 29, "MANDATORY_SECURITY_ANSWER")), i.Bb(3), i.kc("ngIf", e.securityQuestionControl.invalid && e.securityQuestionControl.errors.required), i.Bb(4), i.kc("formControl", e.passwordControl), i.Bb(5), i.Ic(i.hc(36, 31, "INVALID_PASSWORD_LENGTH", i.oc(38, xe))), i.Bb(3), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/20"), i.Bb(1), i.kc("ngIf", e.passwordControl.invalid && e.passwordControl.errors.required), i.Bb(4), i.kc("formControl", e.repeatPasswordControl), i.Bb(3), i.Jc("", (null == a.value ? null : a.value.length) || 0, "/20"), i.Bb(1), i.kc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.required), i.Bb(1), i.kc("ngIf", e.repeatPasswordControl.invalid && e.repeatPasswordControl.errors.notSame), i.Bb(1), i.kc("ngIf", e.repeatPasswordControl.invalid && ((null == e.repeatPasswordControl ? null : e.repeatPasswordControl.errors.minlength) || (null == e.repeatPasswordControl ? null : e.repeatPasswordControl.errors.maxlength))), i.Bb(1), i.kc("color", n.color), i.Bb(2), i.Ic(i.gc(53, 34, "SHOW_PASSWORD_ADVICE")), i.Bb(2), i.kc("password", t.value), i.Bb(2), i.kc("ngIf", o.checked), i.Bb(1), i.kc("disabled", e.emailControl.invalid || e.securityQuestionControl.invalid || e.passwordControl.invalid || e.repeatPasswordControl.invalid || e.repeatPasswordControl.disabled), i.Bb(2), i.Jc(" ", i.gc(60, 36, "BTN_CHANGE"), " ")
                    }
                },
                directives: [p.c, g.a, f.a, Et.c, Et.g, Lt.b, c.c, c.o, c.e, ve.a, Et.h, Ce.a, L.l, Et.f, ie.a, oe.a, S.a, Et.b, oe.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;margin-top:30px;width:60%}"]
            }), t
        })();
        var Ee = a("iELJ");
        let Le = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/products"
                }

                get(t) {
                    return this.http.get(this.host + "/" + t + "/reviews").pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                create(t, e) {
                    return this.http.put(this.host + "/" + t + "/reviews", e).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                patch(t) {
                    return this.http.patch(this.host + "/reviews", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                like(t) {
                    return this.http.post(this.host + "/reviews", {id: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function De(t, e) {
            1 & t && (i.Tb(0, "mat-error", 1), i.Hc(1, "MANDATORY_REVIEW"), i.Sb())
        }

        u.b.add(m.D, m.b), u.a.watch();
        let Ne = (() => {
            class t {
                constructor(t, e, a, i, o) {
                    this.data = t, this.productReviewService = e, this.dialogRef = a, this.snackBar = i, this.snackBarHelperService = o, this.editReviewControl = new c.d("", [c.y.required, c.y.minLength(1), c.y.maxLength(160)]), this.error = null
                }

                ngOnInit() {
                    this.editReviewControl.setValue(this.data.reviewData.message)
                }

                editReview() {
                    this.productReviewService.patch({
                        id: this.data.reviewData._id,
                        message: this.editReviewControl.value
                    }).subscribe(() => {
                        this.dialogRef.close()
                    }, t => {
                        console.log(t), this.error = t
                    }), this.snackBarHelperService.open("CONFIRM_CHANGES_SAVED")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.a), i.Nb(Le), i.Nb(Ee.g), i.Nb(P.a), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-product-review-edit"]],
                decls: 27,
                vars: 13,
                consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["translate", ""], ["appearance", "outline", "color", "accent", "hintLabel", "Max 160 characters", "floatLabel", "always"], ["matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to edit a product review", 3, "formControl", "placeholder", "focus"], ["textPut", ""], ["align", "end"], ["translate", "", 4, "ngIf"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog"], [1, "material-icons"], ["type", "submit", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 2, "margin-left", "5px", 3, "disabled", "click"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "mat-dialog-content"), i.Tb(1, "div", 0), i.Tb(2, "h1", 1), i.Hc(3, "LABEL_EDIT_REVIEW"), i.Sb(), i.Tb(4, "div"), i.Tb(5, "mat-form-field", 2), i.Tb(6, "mat-label", 1), i.Hc(7, "LABEL_REVIEW"), i.Sb(), i.Tb(8, "textarea", 3, 4), i.ac("focus", (function () {
                        return e.error = null
                    })), i.fc(10, "translate"), i.Sb(), i.Tb(11, "mat-hint", 5), i.Hc(12), i.Sb(), i.Fc(13, De, 2, 0, "mat-error", 6), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Tb(14, "mat-dialog-actions", 5), i.Tb(15, "button", 7), i.Tb(16, "i", 8), i.Hc(17, " close "), i.Sb(), i.Tb(18, "span"), i.Hc(19), i.fc(20, "translate"), i.Sb(), i.Sb(), i.Tb(21, "button", 9), i.ac("click", (function () {
                        return e.editReview()
                    })), i.Tb(22, "i", 8), i.Hc(23, " send "), i.Sb(), i.Tb(24, "span"), i.Hc(25), i.fc(26, "translate"), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(9);
                        i.Bb(8), i.lc("placeholder", i.gc(10, 7, "WRITE_REVIEW_PLACEHOLDER")), i.kc("formControl", e.editReviewControl), i.Bb(4), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/160"), i.Bb(1), i.kc("ngIf", e.editReviewControl.invalid), i.Bb(6), i.Jc(" ", i.gc(20, 9, "BTN_CLOSE"), ""), i.Bb(2), i.kc("disabled", e.editReviewControl.invalid), i.Bb(4), i.Jc(" ", i.gc(26, 11, "BTN_SUBMIT"), "")
                    }
                },
                directives: [Ee.e, p.d, f.a, Et.c, Et.g, Lt.b, Lt.d, c.c, c.j, c.o, c.e, Et.f, L.l, Ee.c, S.a, Ee.d, Et.b],
                pipes: [f.d],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}"]
            }), t
        })();
        var Fe = a("BSbQ"), Me = a("o4Yh");

        function Re(t, e) {
            if (1 & t && (i.Tb(0, "div", 24), i.fc(1, "translate"), i.Tb(2, "span", 25), i.Ob(3, "i", 26), i.Tb(4, "span", 27), i.Hc(5), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.lc("matTooltip", i.gc(1, 2, "LABEL_BONUS")), i.Bb(5), i.Ic(t.data.productData.points)
            }
        }

        function Ue(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "div", 29), i.Tb(1, "div", 30), i.Tb(2, "div", 31), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit, o = i.ec(2);
                    return "Anonymous" !== a.author && a.author === o.author && o.editReview(a)
                })), i.fc(3, "translate"), i.Tb(4, "cite"), i.Hc(5), i.Sb(), i.Tb(6, "p"), i.Hc(7), i.Sb(), i.Sb(), i.Tb(8, "div"), i.Tb(9, "button", 32), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).likeReview(a)
                })), i.Tb(10, "span", 25), i.Tb(11, "mat-icon"), i.Hc(12, "thumb_up"), i.Sb(), i.Tb(13, "span", 33), i.Hc(14), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec(2);
                i.Bb(2), i.lc("matTooltipDisabled", t.author !== a.author), i.lc("matTooltip", i.gc(3, 6, "LABEL_EDIT_REVIEW")), i.Bb(3), i.Ic(t.author), i.Bb(2), i.Ic(t.message), i.Bb(2), i.kc("disabled", t.liked || !a.isLoggedIn()), i.Bb(5), i.Ic(t.likesCount)
            }
        }

        function je(t, e) {
            if (1 & t && (i.Tb(0, "div"), i.Fc(1, Ue, 15, 8, "div", 28), i.fc(2, "async"), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("ngForOf", i.gc(2, 1, t.reviews$))
            }
        }

        function Je(t, e) {
            1 & t && (i.Tb(0, "div"), i.Tb(1, "span", 34), i.Hc(2, " EMPTY_REVIEW_LIST "), i.Sb(), i.Sb())
        }

        const Ge = function () {
            return {length: "160"}
        };
        u.b.add(m.D, m.b, m.ib, m.W, m.l), u.a.watch();
        let ze = (() => {
            class t {
                constructor(t, e, a, i, o, n) {
                    this.dialog = t, this.data = e, this.productReviewService = a, this.userService = i, this.snackBar = o, this.snackBarHelperService = n, this.author = "Anonymous", this.reviewControl = new c.d("", [c.y.maxLength(160)])
                }

                ngOnInit() {
                    this.data.productData.points = Math.round(this.data.productData.price / 10), this.reviews$ = this.productReviewService.get(this.data.productData.id), this.userSubscription = this.userService.whoAmI().subscribe(t => {
                        this.author = t && t.email ? t.email : "Anonymous"
                    }, t => console.log(t))
                }

                ngOnDestroy() {
                    this.userSubscription && this.userSubscription.unsubscribe()
                }

                addReview(t) {
                    const e = {message: t.value, author: this.author};
                    t.value = "", this.productReviewService.create(this.data.productData.id, e).subscribe(() => {
                        this.reviews$ = this.productReviewService.get(this.data.productData.id)
                    }, t => console.log(t)), this.snackBarHelperService.open("CONFIRM_REVIEW_SAVED")
                }

                editReview(t) {
                    this.dialog.open(Ne, {
                        width: "500px",
                        height: "max-content",
                        data: {reviewData: t}
                    }).afterClosed().subscribe(() => this.reviews$ = this.productReviewService.get(this.data.productData.id))
                }

                likeReview(t) {
                    this.productReviewService.like(t._id).subscribe(() => {
                        console.log("Liked " + t._id)
                    }), setTimeout(() => this.reviews$ = this.productReviewService.get(this.data.productData.id), 200)
                }

                isLoggedIn() {
                    return localStorage.getItem("token")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.b), i.Nb(Ee.a), i.Nb(Le), i.Nb(w), i.Nb(P.a), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-product-details"]],
                decls: 59,
                vars: 36,
                consts: [["fxLayout", "column", 1, "container", "mat-typography"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "20px"], ["fxFlex", "noshrink"], [1, "img-thumbnail", 3, "src", "alt"], [3, "innerHTML"], [1, "item-price"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip", 4, "ngIf"], [1, "detail-divider"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["aria-label", "Expand for Reviews", 1, "mat-elevation-z0"], ["translate", "", 2, "margin-right", "5px"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["translate", ""], ["appearance", "outline", "color", "accent", "floatLabel", "always"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["cols", "50", "matInput", "", "matTextareaAutosize", "", "matAutosizeMinRows", "2", "maxlength", "160", "matAutosizeMaxRows", "4", "aria-label", "Text field to review a product", 3, "formControl", "placeholder"], ["textPut", ""], ["align", "end"], ["align", "end", 1, "dialogAction"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Send the review", 1, "buttons", 2, "margin-bottom", "5px", "margin-top", "5px", "margin-left", "5px", 3, "disabled", "click"], ["aria-label", "Bonus points when buying the product", 3, "matTooltip"], [1, "fa-2x", "fa-layers", "fa-fw"], [1, "fas", "fa-crown"], [1, "fa-layers-counter", "fa-layers-bottom-left", "fa-2x", "warn-notification", 2, "font-size", "47px"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "comment"], ["fxLayout", "row"], ["matTooltipPosition", "right", 1, "review-text", 3, "matTooltipDisabled", "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Rate a helpful review", 1, "rw-button", 3, "disabled", "click"], [1, "fa-layers-counter", "fa-layers-bottom-right", "accent-notification", 2, "font-size", "32px"], ["translate", "", 1, "noResultText"]],
                template: function (t, e) {
                    if (1 & t) {
                        const t = i.Ub();
                        i.Tb(0, "mat-dialog-content"), i.Tb(1, "div", 0), i.Tb(2, "div", 1), i.Tb(3, "div", 2), i.Ob(4, "img", 3), i.Sb(), i.Tb(5, "div"), i.Tb(6, "h1"), i.Hc(7), i.Sb(), i.Ob(8, "div", 4), i.Ob(9, "br"), i.Tb(10, "div"), i.Tb(11, "p", 5), i.Hc(12), i.Sb(), i.Fc(13, Re, 6, 4, "div", 6), i.Sb(), i.Sb(), i.Sb(), i.Ob(14, "mat-divider", 7), i.Ob(15, "button", 8), i.Tb(16, "mat-expansion-panel", 9), i.Tb(17, "mat-expansion-panel-header"), i.Tb(18, "mat-panel-title"), i.Tb(19, "span", 10), i.Hc(20, "LABEL_REVIEWS"), i.Sb(), i.Tb(21, "span"), i.Hc(22), i.fc(23, "async"), i.Sb(), i.Sb(), i.Sb(), i.Ob(24, "button", 8), i.Fc(25, je, 3, 3, "div", 11), i.fc(26, "async"), i.Fc(27, Je, 3, 0, "ng-template", null, 12, i.Gc), i.Sb(), i.Tb(29, "div"), i.Ob(30, "mat-divider", 7), i.Tb(31, "h4", 13), i.Hc(32, "WRITE_REVIEW"), i.Sb(), i.Tb(33, "mat-form-field", 14), i.Tb(34, "mat-label", 13), i.Hc(35, "LABEL_REVIEW"), i.Sb(), i.Tb(36, "mat-hint", 13), i.Ob(37, "i", 15), i.Tb(38, "em", 16), i.Hc(39), i.fc(40, "translate"), i.Sb(), i.Sb(), i.Ob(41, "textarea", 17, 18), i.fc(43, "translate"), i.Tb(44, "mat-hint", 19), i.Hc(45), i.Sb(), i.Sb(), i.Tb(46, "mat-dialog-actions", 20), i.Tb(47, "button", 21), i.Tb(48, "i", 22), i.Hc(49, " close "), i.Sb(), i.Tb(50, "span"), i.Hc(51), i.fc(52, "translate"), i.Sb(), i.Sb(), i.Tb(53, "button", 23), i.ac("click", (function () {
                            i.vc(t);
                            const a = i.sc(42);
                            return e.addReview(a)
                        })), i.Tb(54, "i", 22), i.Hc(55, " send "), i.Sb(), i.Tb(56, "span"), i.Hc(57), i.fc(58, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb()
                    }
                    if (2 & t) {
                        const t = i.sc(28), n = i.sc(42);
                        var a, o;
                        i.Bb(4), i.lc("alt", e.data.productData.name), i.kc("src", "assets/public/images/products/" + e.data.productData.image, i.yc), i.Bb(3), i.Ic(e.data.productData.name), i.Bb(1), i.kc("innerHTML", e.data.productData.description, i.wc), i.Bb(4), i.Jc("", e.data.productData.price, "\xa4"), i.Bb(1), i.kc("ngIf", e.data.productData.points > 0), i.Bb(9), i.Jc("(", null == (a = i.gc(23, 22, e.reviews$)) ? null : a.length, ")"), i.Bb(3), i.kc("ngIf", (null == (o = i.gc(26, 24, e.reviews$)) ? null : o.length) >= 1)("ngIfElse", t), i.Bb(6), i.Cc("display", e.isLoggedIn() ? "block" : "none"), i.Bb(2), i.Cc("display", e.isLoggedIn() ? "block" : "none"), i.Bb(6), i.Ic(i.hc(40, 26, "MAX_TEXTAREA_LENGTH", i.oc(35, Ge))), i.Bb(2), i.lc("placeholder", i.gc(43, 29, "WRITE_REVIEW_PLACEHOLDER")), i.kc("formControl", e.reviewControl), i.Bb(4), i.Jc("", (null == n.value ? null : n.value.length) || 0, "/160"), i.Bb(6), i.Jc(" ", i.gc(52, 31, "BTN_CLOSE"), ""), i.Bb(2), i.Cc("display", e.isLoggedIn() ? "block" : "none"), i.kc("disabled", !n.value.trim()), i.Bb(4), i.Jc(" ", i.gc(58, 33, "BTN_SUBMIT"), " ")
                    }
                },
                directives: [Ee.e, p.d, p.e, p.b, L.l, Fe.a, S.a, Me.b, Me.d, Me.e, f.a, Et.c, Et.g, Et.f, Lt.b, Lt.d, c.c, c.j, c.o, c.e, Ee.c, Ee.d, Ce.a, L.k, ve.a],
                pipes: [L.b, f.d],
                styles: [".img-thumbnail[_ngcontent-%COMP%]{height:auto;max-width:100%;padding:0;width:200px}mat-form-field[_ngcontent-%COMP%]{width:100%}p[_ngcontent-%COMP%]{word-break:break-all}.btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2){left:530px;width:50px}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}.rw-button[_ngcontent-%COMP%]{margin-left:8px}.comment[_ngcontent-%COMP%]{margin-bottom:8px}.review-link[_ngcontent-%COMP%]{font-size:11px;margin-top:-10px;text-decoration:none}#submitButton[_ngcontent-%COMP%]{float:right}.item-price[_ngcontent-%COMP%]{float:left;margin-right:40px;margin-top:8px}.noResultText[_ngcontent-%COMP%]{display:block;font-size:small;margin-left:auto;margin-right:auto;text-align:center}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}.buttons[_ngcontent-%COMP%]{padding-left:13px;padding-right:13px}"]
            }), t
        })(), qe = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Products"
                }

                search(t) {
                    return this.http.get(this.hostServer + "/rest/products/search?q=" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                find(t) {
                    return this.http.get(this.host + "/", {params: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                get(t) {
                    return this.http.get(this.host + "/" + t + "?d=" + encodeURIComponent((new Date).toDateString())).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                put(t, e) {
                    return this.http.put(this.host + "/" + t, e).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var We = a("5QHs"), Ye = a("cp0P"), Ve = a("S+pz");
        let Qe = (() => {
            class t {
                constructor(t) {
                    this.ngZone = t, this.io = Ve, this.ngZone.runOutsideAngular(() => {
                        this._socket = this.io.connect(window.location.origin, {path: (window.location.pathname.endsWith("/") ? window.location.pathname : window.location.pathname + "/") + "socket.io"})
                    })
                }

                socket() {
                    return this._socket
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(i.B))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })(), $e = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Quantitys"
                }

                getAll() {
                    return this.http.get(this.host + "/").pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                put(t, e) {
                    return this.http.put(this.host + "/" + t, e).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var Ke = a("40+f");

        function Xe(t, e) {
            if (1 & t && (i.Tb(0, "div"), i.Tb(1, "span"), i.Hc(2), i.fc(3, "translate"), i.Sb(), i.Ob(4, "span", 9), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(2), i.Jc("", i.gc(3, 2, "TITLE_SEARCH_RESULTS"), " - "), i.Bb(2), i.kc("innerHTML", t.searchValue, i.wc)
            }
        }

        function Ze(t, e) {
            1 & t && (i.Tb(0, "div"), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t && (i.Bb(1), i.Ic(i.gc(2, 1, "TITLE_ALL_PRODUCTS")))
        }

        const ta = function (t) {
            return {quantity: t}
        };

        function ea(t, e) {
            if (1 & t && (i.Tb(0, "div", 24), i.Tb(1, "span", 25), i.Hc(2, "LABEL_ONLY_QUANTITY_LEFT"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec().$implicit;
                i.Bb(1), i.kc("translateParams", i.pc(1, ta, t.quantity))
            }
        }

        function aa(t, e) {
            1 & t && (i.Tb(0, "div", 26), i.Tb(1, "span", 27), i.Hc(2, "LABEL_SOLD_OUT"), i.Sb(), i.Sb())
        }

        function ia(t, e) {
            if (1 & t && (i.Tb(0, "span"), i.Hc(1), i.Sb()), 2 & t) {
                const t = i.ec().$implicit;
                i.Bb(1), i.Jc("", t.price, "\xa4")
            }
        }

        function oa(t, e) {
            if (1 & t && (i.Tb(0, "span"), i.Tb(1, "s"), i.Hc(2), i.Sb(), i.Hc(3), i.Sb()), 2 & t) {
                const t = i.ec().$implicit;
                i.Bb(2), i.Ic(t.price), i.Bb(1), i.Jc(" ", t.deluxePrice, "\xa4")
            }
        }

        function na(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 28), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec().$implicit;
                    return i.ec(2).addToBasket(e.id)
                })), i.Tb(1, "span", 27), i.Hc(2, "ADD_BASKET"), i.Sb(), i.Sb()
            }
        }

        function ra(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-grid-tile"), i.Tb(1, "mat-card", 13), i.Fc(2, ea, 3, 3, "div", 14), i.Fc(3, aa, 3, 0, "div", 15), i.Tb(4, "div", 16), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).showDetail(a)
                })), i.Tb(5, "div", 17), i.Ob(6, "img", 18), i.Sb(), i.Tb(7, "div", 19), i.Tb(8, "div", 20), i.Hc(9), i.Sb(), i.Tb(10, "div", 21), i.Fc(11, ia, 2, 1, "span", 3), i.Fc(12, oa, 4, 2, "span", 3), i.Sb(), i.Sb(), i.Sb(), i.Tb(13, "div", 22), i.Fc(14, na, 3, 0, "button", 23), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec(2);
                i.Bb(1), i.Cc("width", "100%"), i.Bb(1), i.kc("ngIf", t.quantity <= 5 && t.quantity > 0), i.Bb(1), i.kc("ngIf", t.quantity <= 0), i.Bb(3), i.lc("alt", t.name), i.kc("src", "assets/public/images/products/" + t.image, i.yc), i.Bb(3), i.Jc(" ", t.name, " "), i.Bb(2), i.kc("ngIf", !a.isDeluxe() || t.price === t.deluxePrice), i.Bb(1), i.kc("ngIf", a.isDeluxe() && t.price !== t.deluxePrice), i.Bb(2), i.kc("ngIf", a.isLoggedIn())
            }
        }

        function ca(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "div"), i.Tb(1, "mat-grid-list", 10, 11), i.ac("resize", (function (e) {
                    return i.vc(t), i.ec().onResize(e)
                }), !1, i.uc), i.Fc(3, ra, 15, 10, "mat-grid-tile", 12), i.fc(4, "async"), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("cols", t.breakpoint), i.Bb(2), i.kc("ngForOf", i.gc(4, 2, t.gridDataSource))
            }
        }

        function sa(t, e) {
            1 & t && (i.Tb(0, "mat-card", 29), i.Ob(1, "img", 30), i.Tb(2, "mat-card-title"), i.Tb(3, "span", 31), i.Hc(4, " NO_SEARCH_RESULT "), i.Sb(), i.Sb(), i.Tb(5, "mat-card-content"), i.Tb(6, "span", 31), i.Hc(7, " EMPTY_SEARCH_RESULT "), i.Sb(), i.Sb(), i.Sb())
        }

        u.b.add(m.o, m.e), u.a.watch();
        let la = (() => {
            class t {
                constructor(t, e, a, i, o, n, r, c, s, l, b, u, d) {
                    this.deluxeGuard = t, this.dialog = e, this.productService = a, this.quantityService = i, this.basketService = o, this.translateService = n, this.router = r, this.route = c, this.sanitizer = s, this.ngZone = l, this.io = b, this.snackBarHelperService = u, this.cdRef = d, this.displayedColumns = ["Image", "Product", "Description", "Price", "Select"], this.pageSizeOptions = [], this.resultsLength = 0, this.paginator = null, this.breakpoint = 6, this.emptyState = !1
                }

                ngAfterViewInit() {
                    const t = this.productService.search(""), e = this.quantityService.getAll();
                    Object(Ye.a)([e, t]).subscribe(([t, e]) => {
                        let a = [];
                        this.tableData = e, this.trustProductDescription(e);
                        for (const o of e) a.push({
                            name: o.name,
                            price: o.price,
                            deluxePrice: o.deluxePrice,
                            id: o.id,
                            image: o.image,
                            description: o.description
                        });
                        for (const o of t) {
                            const t = a.find(t => t.id === o.ProductId);
                            void 0 !== t && (t.quantity = o.quantity)
                        }
                        this.dataSource = new E.o(a);
                        for (let o = 1; o <= Math.ceil(this.dataSource.data.length / 12); o++) this.pageSizeOptions.push(12 * o);
                        this.paginator.pageSizeOptions = this.pageSizeOptions, this.dataSource.paginator = this.paginator, this.gridDataSource = this.dataSource.connect(), this.resultsLength = this.dataSource.data.length, this.filterTable(), this.routerSubscription = this.router.events.subscribe(() => {
                            this.filterTable()
                        });
                        let i = this.route.snapshot.queryParams.challenge;
                        i && this.route.snapshot.url.join("").match(/hacking-instructor/) && this.startHackingInstructor(decodeURIComponent(i)), window.innerWidth < 2600 ? (this.breakpoint = 4, window.innerWidth < 1740 && (this.breakpoint = 3, window.innerWidth < 1280 && (this.breakpoint = 2, window.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6, this.cdRef.detectChanges()
                    }, t => console.log(t))
                }

                ngOnDestroy() {
                    this.routerSubscription && this.routerSubscription.unsubscribe(), this.productSubscription && this.productSubscription.unsubscribe(), this.dataSource && this.dataSource.disconnect()
                }

                filterTable() {
                    let t = this.route.snapshot.queryParams.q;
                    t ? (t = t.trim(), this.ngZone.runOutsideAngular(() => {
                        this.io.socket().emit("verifyLocalXssChallenge", t)
                    }), this.dataSource.filter = t.toLowerCase(), this.searchValue = this.sanitizer.bypassSecurityTrustHtml(t), this.gridDataSource.subscribe(t => {
                        this.emptyState = 0 === t.length
                    })) : (this.dataSource.filter = "", this.searchValue = void 0, this.emptyState = !1)
                }

                startHackingInstructor(t) {
                    console.log(`Starting instructions for challenge "${t}"`), a.e(5).then(a.bind(null, "s2oO")).then(e => {
                        e.startHackingInstructorFor(t)
                    })
                }

                showDetail(t) {
                    this.dialog.open(ze, {width: "500px", height: "max-content", data: {productData: t}})
                }

                addToBasket(t) {
                    this.basketService.find(Number(sessionStorage.getItem("bid"))).subscribe(e => {
                        let a = e.Products, i = !1;
                        for (let o = 0; o < a.length; o++) if (a[o].id === t) {
                            i = !0, this.basketService.get(a[o].BasketItem.id).subscribe(t => {
                                this.basketService.put(t.id, {quantity: t.quantity + 1}).subscribe(t => {
                                    this.productService.get(t.ProductId).subscribe(t => {
                                        this.translateService.get("BASKET_ADD_SAME_PRODUCT", {product: t.name}).subscribe(t => {
                                            this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCardItems()
                                        }, t => {
                                            this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCardItems()
                                        })
                                    }, t => console.log(t))
                                }, t => {
                                    var e;
                                    this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                                })
                            }, t => console.log(t));
                            break
                        }
                        i || this.basketService.save({
                            ProductId: t,
                            BasketId: sessionStorage.getItem("bid"),
                            quantity: 1
                        }).subscribe(t => {
                            this.productService.get(t.ProductId).subscribe(t => {
                                this.translateService.get("BASKET_ADD_PRODUCT", {product: t.name}).subscribe(t => {
                                    this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCardItems()
                                }, t => {
                                    this.snackBarHelperService.open(t, "confirmBar"), this.basketService.updateNumberOfCardItems()
                                })
                            }, t => console.log(t))
                        }, t => {
                            var e;
                            this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                        })
                    }, t => console.log(t))
                }

                trustProductDescription(t) {
                    for (let e = 0; e < t.length; e++) t[e].description = this.sanitizer.bypassSecurityTrustHtml(t[e].description)
                }

                isLoggedIn() {
                    return localStorage.getItem("token")
                }

                onResize(t) {
                    t.target.innerWidth < 2600 ? (this.breakpoint = 4, t.target.innerWidth < 1740 && (this.breakpoint = 3, t.target.innerWidth < 1280 && (this.breakpoint = 2, t.target.innerWidth < 850 && (this.breakpoint = 1)))) : this.breakpoint = 6
                }

                isDeluxe() {
                    return this.deluxeGuard.isDeluxe()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(H), i.Nb(Ee.b), i.Nb(qe), i.Nb($e), i.Nb(O), i.Nb(f.e), i.Nb(y.b), i.Nb(y.a), i.Nb(o.c), i.Nb(i.B), i.Nb(Qe), i.Nb(A), i.Nb(i.h))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-search-result"]],
                viewQuery: function (t, e) {
                    var a;
                    1 & t && i.Bc(We.a, !0), 2 & t && i.rc(a = i.bc()) && (e.paginator = a.first)
                },
                decls: 12,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "table-container", "custom-slate"], [1, "heading", "mat-elevation-z6"], [4, "ngIf"], ["id", "search-result-heading"], [4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["color", "accent", 1, "mat-elevation-z6", 3, "pageSize", "pageSizeOptions", "length"], ["paginator", ""], ["id", "searchValue", 3, "innerHTML"], ["gutterSize", "30px", 3, "cols", "resize"], ["table", ""], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z6", "ribbon-card"], ["class", "ribbon ribbon-top-left", 4, "ngIf"], ["class", "ribbon ribbon-top-left ribbon-sold", 4, "ngIf"], ["aria-label", "Click for more information about the product", "matTooltip", "Click for more information", "matTooltipPosition", "above", 1, "product", 3, "click"], ["fxFlexAlign", "center", "fxFlex", "60%", 1, "img-container"], ["mat-card-image", "", "role", "button", 1, "img-responsive", "img-thumbnail", 3, "src", "alt"], ["fxFlexAlign", "center", "fxFlex", "40%"], [1, "item-name"], [1, "item-price"], [2, "display", "flex", "justify-content", "center"], ["aria-label", "Add to Basket", "class", "btn-basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 3, "click", 4, "ngIf"], [1, "ribbon", "ribbon-top-left"], ["translate", "", 3, "translateParams"], [1, "ribbon", "ribbon-top-left", "ribbon-sold"], ["translate", ""], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-basket", 3, "click"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "div", 1), i.Tb(2, "div", 2), i.Fc(3, Xe, 5, 4, "div", 3), i.Fc(4, Ze, 3, 3, "div", 3), i.Ob(5, "div", 4), i.Sb(), i.Fc(6, ca, 5, 4, "div", 5), i.Fc(7, sa, 8, 0, "ng-template", null, 6, i.Gc), i.Ob(9, "mat-divider"), i.Ob(10, "mat-paginator", 7, 8), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(8);
                        i.Bb(3), i.kc("ngIf", e.searchValue), i.Bb(1), i.kc("ngIf", !e.searchValue), i.Bb(2), i.kc("ngIf", !e.emptyState)("ngIfElse", t), i.Bb(4), i.kc("pageSize", 12)("pageSizeOptions", e.pageSizeOptions)("length", e.resultsLength)
                    }
                },
                directives: [p.c, L.l, Fe.a, We.a, Ke.a, L.k, Ke.c, g.a, Ce.a, p.a, p.b, g.d, f.a, S.a, g.f, g.b],
                pipes: [f.d, L.b],
                styles: ['.table-container[_ngcontent-%COMP%]{min-width:350px;width:80%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.img-thumbnail[_ngcontent-%COMP%]{width:100%}.product[_ngcontent-%COMP%]{cursor:pointer}.btn-basket[_ngcontent-%COMP%]{bottom:10%}mat-card[_ngcontent-%COMP%]{height:calc(100% - 70px)}.item-price[_ngcontent-%COMP%]{font-size:medium;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.ribbon-card[_ngcontent-%COMP%]{position:relative}.ribbon[_ngcontent-%COMP%]{height:150px;overflow:hidden;position:absolute;width:150px}.ribbon[_ngcontent-%COMP%]:before{content:"";z-index:-1}.ribbon[_ngcontent-%COMP%]:before, .ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;position:absolute}.ribbon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:700 18px/1 Lato,sans-serif;padding:15px 0;text-align:center;text-shadow:0 1px 1px rgba(0,0,0,.2);width:225px}.ribbon-top-left[_ngcontent-%COMP%]{left:-10px;top:-10px}.ribbon-top-left[_ngcontent-%COMP%]:before{border-left-color:transparent;border-top-color:transparent;right:0;top:0}.ribbon-top-left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{right:-25px;top:30px;transform:rotate(-45deg)}']
            }), t
        })(), ba = (() => {
            class t {
                get nativeWindow() {
                    return window
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var ua = a("pMoy");

        function da(t, e) {
            if (1 & t && (i.Tb(0, "div", 20), i.Hc(1), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.Ic(t.error)
            }
        }

        function ma(t, e) {
            1 & t && (i.Tb(0, "mat-error", 5), i.Hc(1, "MANDATORY_EMAIL"), i.Sb())
        }

        function ha(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 21), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec();
                    return e.hide = !e.hide
                })), i.fc(1, "translate"), i.Ob(2, "i", 22), i.Sb()
            }
            2 & t && i.lc("matTooltip", i.gc(1, 1, "SHOW_PWD_TOOLTIP"))
        }

        function pa(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 23), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec();
                    return e.hide = !e.hide
                })), i.fc(1, "translate"), i.Ob(2, "i", 24), i.Sb()
            }
            2 & t && i.lc("matTooltip", i.gc(1, 1, "HIDE_PWD_TOOLTIP"))
        }

        function ga(t, e) {
            1 & t && (i.Tb(0, "mat-error", 5), i.Hc(1, "MANDATORY_PASSWORD"), i.Sb())
        }

        function fa(t, e) {
            1 & t && (i.Tb(0, "div", 25), i.Tb(1, "div", 26), i.Ob(2, "div"), i.Sb(), i.Tb(3, "div", 27), i.Hc(4, "LABEL_OR"), i.Sb(), i.Tb(5, "div", 26), i.Ob(6, "div"), i.Sb(), i.Sb())
        }

        function Sa(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 28), i.ac("click", (function () {
                    return i.vc(t), i.ec().googleLogin()
                })), i.Ob(1, "i", 29), i.Hc(2), i.fc(3, "translate"), i.Sb()
            }
            2 & t && (i.Bb(2), i.Jc(" ", i.gc(3, 1, "BTN_GOOGLE_LOGIN"), " "))
        }

        u.b.add(m.z, m.o, m.p, d.f), u.a.watch();
        let Ta = (() => {
            class t {
                constructor(t, e, a, i, o, n, r) {
                    this.configurationService = t, this.userService = e, this.windowRefService = a, this.cookieService = i, this.router = o, this.formSubmitService = n, this.ngZone = r, this.emailControl = new c.d("", [c.y.required]), this.passwordControl = new c.d("", [c.y.required]), this.hide = !0, this.rememberMe = new c.d(!1), this.clientId = "1005568560502-6hm16lef8oh46hr2d98vf2ohlnj4nfhq.apps.googleusercontent.com", this.oauthUnavailable = !0, this.redirectUri = ""
                }

                ngOnInit() {
                    const t = localStorage.getItem("email");
                    t ? (this.user = {}, this.user.email = t, this.rememberMe.setValue(!0)) : this.rememberMe.setValue(!1), this.redirectUri = this.windowRefService.nativeWindow.location.protocol + "//" + this.windowRefService.nativeWindow.location.host, this.configurationService.getApplicationConfiguration().subscribe(t => {
                        if (t && t.application && t.application.googleOauth) {
                            this.clientId = t.application.googleOauth.clientId;
                            let e = t.application.googleOauth.authorizedRedirects.find(t => t.uri === this.redirectUri);
                            e ? (this.oauthUnavailable = !1, this.redirectUri = e.proxy ? e.proxy : e.uri) : (this.oauthUnavailable = !0, console.log(this.redirectUri + " is not an authorized redirect URI for this application."))
                        }
                    }, t => console.log(t)), this.formSubmitService.attachEnterKeyHandler("login-form", "loginButton", () => this.login())
                }

                login() {
                    this.user = {}, this.user.email = this.emailControl.value, this.user.password = this.passwordControl.value, this.userService.login(this.user).subscribe(t => {
                        localStorage.setItem("token", t.token);
                        let e = new Date;
                        e.setHours(e.getHours() + 8), this.cookieService.set("token", t.token, e, "/"), sessionStorage.setItem("bid", t.bid), this.userService.isLoggedIn.next(!0), this.ngZone.run(() => this.router.navigate(["/search"]))
                    }, ({error: t}) => {
                        if (t.status && t.data && "totp_token_required" === t.status) return localStorage.setItem("totp_tmp_token", t.data.tmpToken), void this.ngZone.run(() => this.router.navigate(["/2fa/enter"]));
                        localStorage.removeItem("token"), this.cookieService.delete("token", "/"), sessionStorage.removeItem("bid"), this.error = t, this.userService.isLoggedIn.next(!1), this.emailControl.markAsPristine(), this.passwordControl.markAsPristine()
                    }), this.rememberMe.value ? localStorage.setItem("email", this.user.email) : localStorage.removeItem("email"), this.error && this.user.email && this.user.email.match(/support@.*/) && console.log("@echipa de suport: Secretul nostru comun este \xeenc\u0103 Caoimhe cu parola de master gol!")
                }

                googleLogin() {
                    this.windowRefService.nativeWindow.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.clientId}&response_type=token&scope=email&redirect_uri=${this.redirectUri}`)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(b), i.Nb(w), i.Nb(ba), i.Nb(r.a), i.Nb(y.b), i.Nb(At), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-login"]],
                decls: 35,
                vars: 18,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["class", "error", 4, "ngIf"], ["id", "login-form", 1, "form-container"], ["color", "accent", "appearance", "outline"], ["translate", ""], ["id", "email", "name", "email", "matInput", "", "placeholder", "", "aria-label", "Text field for the login email", 3, "formControl", "focus"], ["email", ""], ["translate", "", 4, "ngIf"], ["id", "password", "name", "password", "matInput", "", "placeholder", "", "aria-label", "Text field for the login password", 3, "formControl", "type", "focus"], ["password", ""], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngIf"], ["routerLink", "/forgot-password", "translate", "", 1, "primary-link", "forgot-pw"], ["type", "submit", "id", "loginButton", "mat-raised-button", "", "color", "primary", "aria-label", "Login", 3, "disabled", "click"], ["id", "rememberMe", "aria-label", "Checkbox to stay logged in or not logged in", 3, "formControl"], ["class", "breakLine", 4, "ngIf"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", "class", "google-button", 3, "click", 4, "ngIf"], ["id", "newCustomerLink"], ["routerLink", "/register", "translate", "", 1, "primary-link"], [1, "error"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to display the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye", 1, "fas", "fa-eye"], ["mat-icon-button", "", "matSuffix", "", "aria-label", "Button to hide the password", "matTooltipPosition", "right", 3, "matTooltip", "click"], ["aria-label", "Eye Slash", 1, "fas", "fa-eye-slash"], [1, "breakLine"], [1, "line"], ["translate", "", 1, "textOnLine"], ["id", "loginButtonGoogle", "mat-raised-button", "", "color", "accent", "aria-label", "Login with Google", 1, "google-button", 3, "click"], [1, "fab", "fa-google", "fa-lg"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1"), i.Hc(3, "Login"), i.Sb(), i.Fc(4, da, 2, 1, "div", 2), i.Tb(5, "div", 3), i.Tb(6, "mat-form-field", 4), i.Tb(7, "mat-label", 5), i.Hc(8, "LABEL_EMAIL"), i.Sb(), i.Tb(9, "input", 6, 7), i.ac("focus", (function () {
                        return e.error = null
                    })), i.Sb(), i.Fc(11, ma, 2, 0, "mat-error", 8), i.Sb(), i.Tb(12, "mat-form-field", 4), i.Tb(13, "mat-label", 5), i.Hc(14, "LABEL_PASSWORD"), i.Sb(), i.Tb(15, "input", 9, 10), i.ac("focus", (function () {
                        return e.error = null
                    })), i.Sb(), i.Fc(17, ha, 3, 3, "button", 11), i.Fc(18, pa, 3, 3, "button", 12), i.Fc(19, ga, 2, 0, "mat-error", 8), i.Sb(), i.Tb(20, "a", 13), i.Hc(21, "FORGOT_PASSWORD"), i.Sb(), i.Tb(22, "button", 14), i.ac("click", (function () {
                        return e.login()
                    })), i.Tb(23, "mat-icon"), i.Hc(24, " exit_to_app "), i.Sb(), i.Hc(25), i.fc(26, "translate"), i.Sb(), i.Tb(27, "mat-checkbox", 15), i.Hc(28), i.fc(29, "translate"), i.Sb(), i.Fc(30, fa, 7, 0, "div", 16), i.Fc(31, Sa, 4, 3, "button", 17), i.Tb(32, "div", 18), i.Tb(33, "a", 19), i.Hc(34, "NO_CUSTOMER"), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.kc("ngIf", e.error), i.Bb(5), i.kc("formControl", e.emailControl), i.Bb(2), i.kc("ngIf", e.emailControl.invalid), i.Bb(4), i.kc("formControl", e.passwordControl)("type", e.hide ? "password" : "text"), i.Bb(2), i.kc("ngIf", e.hide), i.Bb(1), i.kc("ngIf", !e.hide), i.Bb(1), i.kc("ngIf", e.passwordControl.invalid), i.Bb(3), i.kc("disabled", !e.emailControl.value || !e.passwordControl.value), i.Bb(3), i.Jc(" ", i.gc(26, 14, "BTN_LOGIN"), " "), i.Bb(2), i.kc("formControl", e.rememberMe), i.Bb(1), i.Jc(" ", i.gc(29, 16, "REMEMBER_ME"), " "), i.Bb(2), i.kc("ngIf", !e.oauthUnavailable), i.Bb(1), i.kc("ngIf", !e.oauthUnavailable))
                },
                directives: [p.c, g.a, L.l, Et.c, Et.g, f.a, Lt.b, c.c, c.o, c.e, y.d, S.a, ve.a, ua.a, Et.b, Et.h, Ce.a],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.forgot-pw[_ngcontent-%COMP%]{font-size:11px;margin-top:-15px}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px;margin-left:20%;margin-top:5px}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}mat-form-field[_ngcontent-%COMP%]:nth-child(2){padding-bottom:20px}#loginButton[_ngcontent-%COMP%], #loginButtonGoogle[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.breakLine[_ngcontent-%COMP%]{display:table}.breakLine[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:table-cell;white-space:nowrap}.line[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-bottom:1px solid silver;height:1px}.textOnLine[_ngcontent-%COMP%]{padding:0 5px}.line[_ngcontent-%COMP%]{vertical-align:middle;width:50%}#newCustomerLink[_ngcontent-%COMP%]{align-self:center;font-size:12px;margin-top:40px}[_nghost-%COMP%]     .mat-form-field-suffix{margin-bottom:auto!important;margin-top:auto!important}[_nghost-%COMP%]     .mat-icon-button{height:40px!important;width:24px!important}"]
            }), t
        })();
        u.b.add(m.b), u.a.watch();
        let va = (() => {
            class t {
                constructor(t, e) {
                    this.dialogData = t, this.userService = e
                }

                ngOnInit() {
                    this.userService.get(this.dialogData.id).subscribe(t => {
                        this.user = t
                    }, t => console.log(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.a), i.Nb(w))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-user-details"]],
                decls: 29,
                vars: 10,
                consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], ["translate", "LABEL_EMAIL"], ["translate", "LABEL_CREATED_AT"], ["translate", "LABEL_UPDATED_AT"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-dialog-content", 0), i.Tb(1, "header"), i.Tb(2, "h1"), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb(), i.Ob(5, "mat-divider"), i.Tb(6, "div", 1), i.Tb(7, "div", 2), i.Tb(8, "div"), i.Ob(9, "strong", 3), i.Tb(10, "p"), i.Hc(11), i.Sb(), i.Sb(), i.Sb(), i.Tb(12, "div", 2), i.Tb(13, "div"), i.Ob(14, "strong", 4), i.Tb(15, "p"), i.Hc(16), i.Sb(), i.Sb(), i.Tb(17, "div"), i.Ob(18, "strong", 5), i.Tb(19, "p"), i.Hc(20), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Tb(21, "mat-dialog-actions", 6), i.Ob(22, "button", 7), i.Tb(23, "button", 8), i.Tb(24, "i", 9), i.Hc(25, " close "), i.Sb(), i.Tb(26, "span"), i.Hc(27), i.fc(28, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(3), i.Kc("", i.gc(4, 6, "LABEL_USER"), " #", null == e.user ? null : e.user.id, ""), i.Bb(8), i.Ic(null == e.user ? null : e.user.email), i.Bb(5), i.Ic(null == e.user ? null : e.user.createdAt), i.Bb(4), i.Ic(null == e.user ? null : e.user.updatedAt), i.Bb(7), i.Jc(" ", i.gc(28, 8, "BTN_CLOSE"), ""))
                },
                directives: [Ee.e, Fe.a, p.d, p.e, f.a, Ee.c, S.a, Ee.d],
                pipes: [f.d],
                styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}"]
            }), t
        })(), Ca = (() => {
            class t {
                constructor(t) {
                    this.dialogData = t
                }

                ngOnInit() {
                    this.feedback = this.dialogData.feedback, this.id = this.dialogData.id
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.a))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-feedback-details"]],
                decls: 23,
                vars: 11,
                consts: [[1, "mat-typography"], ["fxLayout", "column", 1, "container"], ["fxLayout", "row", "fxLayoutGap", "10px"], [2, "margin-top", "10px !important"], [3, "innerHTML"], ["align", "end", 1, "dialogAction"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-stroked-button", "", "mat-dialog-close", "", "aria-label", "Close Dialog", 1, "close-dialog", "buttons"], [1, "material-icons"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-dialog-content", 0), i.Tb(1, "header"), i.Tb(2, "h1"), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb(), i.Ob(5, "mat-divider"), i.Tb(6, "div", 1), i.Tb(7, "div", 2), i.Tb(8, "span"), i.Hc(9), i.fc(10, "translate"), i.Sb(), i.Tb(11, "p"), i.Hc(12), i.Sb(), i.Sb(), i.Tb(13, "div", 3), i.Ob(14, "cite", 4), i.Sb(), i.Sb(), i.Tb(15, "mat-dialog-actions", 5), i.Ob(16, "button", 6), i.Tb(17, "button", 7), i.Tb(18, "i", 8), i.Hc(19, " close "), i.Sb(), i.Tb(20, "span"), i.Hc(21), i.fc(22, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(3), i.Ic(i.gc(4, 5, "LABEL_COMMENT")), i.Bb(6), i.Jc("", i.gc(10, 7, "LABEL_USER"), ":"), i.Bb(3), i.Jc("#", e.id, ""), i.Bb(2), i.kc("innerHTML", e.feedback, i.wc), i.Bb(7), i.Jc(" ", i.gc(22, 9, "BTN_CLOSE"), ""))
                },
                directives: [Ee.e, Fe.a, p.d, p.e, Ee.c, S.a, Ee.d],
                pipes: [f.d],
                styles: ["mat-divider[_ngcontent-%COMP%]{margin-bottom:10px}.dialogAction[_ngcontent-%COMP%]{margin-bottom:0!important}mat-dialog-content[_ngcontent-%COMP%]{max-width:320px;min-width:280px}"]
            }), t
        })();
        const wa = ["paginatorUsers"], ya = ["paginatorFeedb"];

        function ka(t, e) {
            1 & t && i.Ob(0, "mat-header-cell")
        }

        function Oa(t, e) {
            1 & t && i.Ob(0, "i", 30)
        }

        function Ia(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 28), i.Fc(1, Oa, 1, 0, "i", 29), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("ngIf", t.token)
            }
        }

        function _a(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 1)
        }

        function xa(t, e) {
            1 & t && i.Ob(0, "mat-cell", 31), 2 & t && i.kc("innerHTML", e.$implicit.email, i.wc)
        }

        function Ba(t, e) {
            1 & t && i.Ob(0, "mat-header-cell")
        }

        function Ha(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell"), i.Tb(1, "button", 32), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().showUserDetail(a.id)
                })), i.Ob(2, "i", 33), i.Sb(), i.Sb()
            }
        }

        function Pa(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function Aa(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function Ea(t, e) {
            1 & t && i.Ob(0, "mat-header-cell")
        }

        function La(t, e) {
            1 & t && i.Ob(0, "mat-cell", 28)
        }

        function Da(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 1)
        }

        function Na(t, e) {
            1 & t && i.Ob(0, "mat-cell", 31), 2 & t && i.kc("innerHTML", e.$implicit.email, i.wc)
        }

        function Fa(t, e) {
            1 & t && i.Ob(0, "mat-header-cell")
        }

        function Ma(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell"), i.Tb(1, "button", 32), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().showUserDetail(a.id)
                })), i.Ob(2, "i", 33), i.Sb(), i.Sb()
            }
        }

        function Ra(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function Ua(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function ja(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 1)
        }

        function Ja(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell"), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.UserId, "")
            }
        }

        function Ga(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 1)
        }

        function za(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 34), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().showFeedbackDetails(a.comment, a.UserId)
                })), i.Ob(1, "p", 35), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("innerHTML", t.comment, i.wc)
            }
        }

        function qa(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 1)
        }

        function Wa(t, e) {
            1 & t && (i.Tb(0, "mat-icon"), i.Hc(1, " star_rate "), i.Sb())
        }

        function Ya(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell"), i.Fc(1, Wa, 2, 0, "mat-icon", 36), i.Sb()), 2 & t) {
                const t = e.$implicit, a = i.ec();
                i.Bb(1), i.kc("ngForOf", a.times(t.rating))
            }
        }

        function Va(t, e) {
            1 & t && i.Ob(0, "mat-header-cell")
        }

        function Qa(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell"), i.Tb(1, "button", 32), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().deleteFeedback(a.id)
                })), i.Ob(2, "i", 37), i.Sb(), i.Sb()
            }
        }

        function $a(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function Ka(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        u.b.add(m.gb, m.o, m.x, m.a, m.Z), u.a.watch();
        let Xa = (() => {
            class t {
                constructor(t, e, a, i) {
                    this.dialog = t, this.userService = e, this.feedbackService = a, this.sanitizer = i, this.userColumns = ["user", "email", "user_detail"], this.feedbackColumns = ["user", "comment", "rating", "remove"], this.resultsLengthUser = 0, this.resultsLengthFeedback = 0
                }

                ngOnInit() {
                    this.findAllUsers(), this.findAllFeedbacks()
                }

                findAllUsers() {
                    this.userService.find().subscribe(t => {
                        this.userDataSource = t, this.userDataSourceHidden = t;
                        for (let e of this.userDataSource) e.email = this.sanitizer.bypassSecurityTrustHtml(`<span class="${e.token ? "confirmation" : "error"}">${e.email}</span>`);
                        this.userDataSource = new E.o(this.userDataSource), this.userDataSource.paginator = this.paginatorUsers, this.resultsLengthUser = t.length
                    }, t => {
                        this.error = t, console.log(this.error)
                    })
                }

                findAllFeedbacks() {
                    this.feedbackService.find().subscribe(t => {
                        this.feedbackDataSource = t;
                        for (let e of this.feedbackDataSource) e.comment = this.sanitizer.bypassSecurityTrustHtml(e.comment);
                        this.feedbackDataSource = new E.o(this.feedbackDataSource), this.feedbackDataSource.paginator = this.paginatorFeedb, this.resultsLengthFeedback = t.length
                    }, t => {
                        this.error = t, console.log(this.error)
                    })
                }

                deleteFeedback(t) {
                    this.feedbackService.del(t).subscribe(() => {
                        this.findAllFeedbacks()
                    }, t => {
                        this.error = t, console.log(this.error)
                    })
                }

                showUserDetail(t) {
                    this.dialog.open(va, {data: {id: t}})
                }

                showFeedbackDetails(t, e) {
                    this.dialog.open(Ca, {data: {feedback: t, id: e}})
                }

                times(t) {
                    return Array(t).fill("\u2605")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.b), i.Nb(w), i.Nb(Ht), i.Nb(o.c))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-administration"]],
                viewQuery: function (t, e) {
                    var a;
                    1 & t && (i.Mc(wa, !0), i.Mc(ya, !0)), 2 & t && (i.rc(a = i.bc()) && (e.paginatorUsers = a.first), i.rc(a = i.bc()) && (e.paginatorFeedb = a.first))
                },
                decls: 58,
                vars: 13,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["translate", ""], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutGap", "20px", 1, "container"], ["fxFlexAlign", "center", 1, "user-container"], [1, "user-table"], [1, "heading"], [2, "height", "700px", 3, "dataSource"], ["matColumnDef", "user"], [4, "matHeaderCellDef"], ["style", "vertical-align: middle", 4, "matCellDef"], ["matColumnDef", "email"], ["translate", "", 4, "matHeaderCellDef"], ["style", "vertical-align: middle", 3, "innerHTML", 4, "matCellDef"], ["matColumnDef", "user_detail"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["color", "accent", 1, "mat-elevation-z0", 3, "pageSize", "length"], ["paginatorUsers", ""], [2, "visibility", "hidden", "height", "0px", 3, "dataSource"], ["fxFlexAlign.lt-md", "center", 1, "customer-container"], [1, "customer-table"], ["matColumnDef", "comment"], [3, "click", 4, "matCellDef"], ["matColumnDef", "rating"], ["matColumnDef", "remove"], ["paginatorFeedb", ""], ["src", "assets/public/images/padding/19px.png"], [2, "vertical-align", "middle"], ["class", "fas fa-user fa-lg confirmation", 4, "ngIf"], [1, "fas", "fa-user", "fa-lg", "confirmation"], [2, "vertical-align", "middle", 3, "innerHTML"], ["mat-button", "", 3, "click"], [1, "fas", "fa-eye"], [3, "click"], ["matTooltip", "Click for more information", "matTooltipPosition", "above", 3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-trash-alt"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "h1", 1), i.Hc(2, "TITLE_ADMINISTRATION"), i.Sb(), i.Tb(3, "div", 2), i.Tb(4, "div", 3), i.Tb(5, "div", 4), i.Tb(6, "div", 5), i.Tb(7, "span", 1), i.Hc(8, "SECTION_USER"), i.Sb(), i.Sb(), i.Tb(9, "mat-table", 6), i.Rb(10, 7), i.Fc(11, ka, 1, 0, "mat-header-cell", 8), i.Fc(12, Ia, 2, 1, "mat-cell", 9), i.Qb(), i.Rb(13, 10), i.Fc(14, _a, 1, 0, "mat-header-cell", 11), i.Fc(15, xa, 1, 1, "mat-cell", 12), i.Qb(), i.Rb(16, 13), i.Fc(17, Ba, 1, 0, "mat-header-cell", 8), i.Fc(18, Ha, 3, 0, "mat-cell", 14), i.Qb(), i.Fc(19, Pa, 1, 0, "mat-header-row", 15), i.Fc(20, Aa, 1, 0, "mat-row", 16), i.Sb(), i.Ob(21, "mat-paginator", 17, 18), i.Sb(), i.Tb(23, "mat-table", 19), i.Rb(24, 7), i.Fc(25, Ea, 1, 0, "mat-header-cell", 8), i.Fc(26, La, 1, 0, "mat-cell", 9), i.Qb(), i.Rb(27, 10), i.Fc(28, Da, 1, 0, "mat-header-cell", 11), i.Fc(29, Na, 1, 1, "mat-cell", 12), i.Qb(), i.Rb(30, 13), i.Fc(31, Fa, 1, 0, "mat-header-cell", 8), i.Fc(32, Ma, 3, 0, "mat-cell", 14), i.Qb(), i.Fc(33, Ra, 1, 0, "mat-header-row", 15), i.Fc(34, Ua, 1, 0, "mat-row", 16), i.Sb(), i.Sb(), i.Tb(35, "div", 20), i.Tb(36, "div", 21), i.Tb(37, "div", 5), i.Tb(38, "span", 1), i.Hc(39, "SECTION_CUSTOMER_FEEDBACK"), i.Sb(), i.Sb(), i.Tb(40, "mat-table", 6), i.Rb(41, 7), i.Fc(42, ja, 1, 0, "mat-header-cell", 11), i.Fc(43, Ja, 2, 1, "mat-cell", 14), i.Qb(), i.Rb(44, 22), i.Fc(45, Ga, 1, 0, "mat-header-cell", 11), i.Fc(46, za, 2, 1, "mat-cell", 23), i.Qb(), i.Rb(47, 24), i.Fc(48, qa, 1, 0, "mat-header-cell", 11), i.Fc(49, Ya, 2, 1, "mat-cell", 14), i.Qb(), i.Rb(50, 25), i.Fc(51, Va, 1, 0, "mat-header-cell", 8), i.Fc(52, Qa, 3, 0, "mat-cell", 14), i.Qb(), i.Fc(53, $a, 1, 0, "mat-header-row", 15), i.Fc(54, Ka, 1, 0, "mat-row", 16), i.Sb(), i.Ob(55, "mat-paginator", 17, 26), i.Sb(), i.Sb(), i.Ob(57, "img", 27), i.Sb(), i.Sb()), 2 & t && (i.Bb(9), i.kc("dataSource", e.userDataSource), i.Bb(10), i.kc("matHeaderRowDef", e.userColumns), i.Bb(1), i.kc("matRowDefColumns", e.userColumns), i.Bb(1), i.kc("pageSize", 10)("length", e.resultsLengthUser), i.Bb(2), i.kc("dataSource", e.userDataSourceHidden), i.Bb(10), i.kc("matHeaderRowDef", e.userColumns), i.Bb(1), i.kc("matRowDefColumns", e.userColumns), i.Bb(6), i.kc("dataSource", e.feedbackDataSource), i.Bb(13), i.kc("matHeaderRowDef", e.feedbackColumns), i.Bb(1), i.kc("matRowDefColumns", e.feedbackColumns), i.Bb(1), i.kc("pageSize", 10)("length", e.resultsLengthFeedback))
                },
                directives: [g.a, f.a, p.d, p.e, p.a, E.n, E.c, E.i, E.b, E.k, E.m, We.a, E.h, E.a, L.l, S.a, E.j, E.l, Ce.a, L.k, ve.a],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.13);margin-bottom:10px;padding:12px;font-size:large}.container[_ngcontent-%COMP%], .heading[_ngcontent-%COMP%]{justify-content:center}mat-table[_ngcontent-%COMP%]{height:767px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.customer-container[_ngcontent-%COMP%], .user-container[_ngcontent-%COMP%]{max-width:600px;min-width:300px;width:70%}.customer-table[_ngcontent-%COMP%], .user-table[_ngcontent-%COMP%]{margin-bottom:25px}.mat-column-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .mat-column-user_detail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:38%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{align-items:normal;display:block}.mat-column-comment[_ngcontent-%COMP%]{flex:0 0 55%!important;width:55%!important}.mat-column-comment[_ngcontent-%COMP%], .mat-column-user[_ngcontent-%COMP%]{padding:5px;word-wrap:break-word!important;white-space:unset!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.mat-column-user[_ngcontent-%COMP%]{flex:0 0 7%!important;width:7%!important}.mat-column-rating[_ngcontent-%COMP%]{word-wrap:break-word!important;white-space:unset!important;flex:0 0 20%!important;width:20%!important;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}mat-cell[_ngcontent-%COMP%]:last-child, mat-footer-cell[_ngcontent-%COMP%]:last-child, mat-header-cell[_ngcontent-%COMP%]:last-child{padding-right:50px}mat-row[_ngcontent-%COMP%]{height:69px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%;margin-bottom:20px}p[_ngcontent-%COMP%]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}"]
            }), t
        })();

        function Za(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_CURRENT_PASSWORD"), i.Sb())
        }

        function ti(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_NEW_PASSWORD "), i.Sb())
        }

        const ei = function () {
            return {length: "5-20"}
        };

        function ai(t, e) {
            1 & t && (i.Tb(0, "mat-error", 19), i.Hc(1, "INVALID_PASSWORD_LENGTH "), i.Sb()), 2 & t && i.kc("translateParams", i.oc(1, ei))
        }

        function ii(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_PASSWORD_REPEAT"), i.Sb())
        }

        function oi(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " PASSWORDS_NOT_MATCHING "), i.Sb())
        }

        u.b.add(m.I, h.c), u.a.watch();
        let ni = (() => {
            class t {
                constructor(t, e, a) {
                    var i;
                    this.userService = t, this.formSubmitService = e, this.translate = a, this.passwordControl = new c.d("", [c.y.required]), this.newPasswordControl = new c.d("", [c.y.required, c.y.minLength(5), c.y.maxLength(20)]), this.repeatNewPasswordControl = new c.d("", [c.y.required, c.y.minLength(5), c.y.maxLength(20), (i = this.newPasswordControl, function (t) {
                        return i.value !== t.value ? {notSame: !0} : null
                    })])
                }

                ngOnInit() {
                    this.formSubmitService.attachEnterKeyHandler("password-form", "changeButton", () => this.changePassword())
                }

                changePassword() {
                    this.userService.changePassword({
                        current: this.passwordControl.value,
                        new: this.newPasswordControl.value,
                        repeat: this.repeatNewPasswordControl.value
                    }).subscribe(t => {
                        this.error = void 0, this.translate.get("PASSWORD_SUCCESSFULLY_CHANGED").subscribe(t => {
                            this.confirmation = t
                        }, t => {
                            this.confirmation = {error: t}
                        }), this.resetForm()
                    }, t => {
                        console.log(t), this.error = t, this.confirmation = void 0, this.resetPasswords()
                    })
                }

                resetForm() {
                    this.passwordControl.setValue(""), this.passwordControl.markAsPristine(), this.passwordControl.markAsUntouched(), this.newPasswordControl.setValue(""), this.newPasswordControl.markAsPristine(), this.newPasswordControl.markAsUntouched(), this.repeatNewPasswordControl.setValue(""), this.repeatNewPasswordControl.markAsPristine(), this.repeatNewPasswordControl.markAsUntouched()
                }

                resetPasswords() {
                    this.newPasswordControl.setValue(""), this.newPasswordControl.markAsPristine(), this.newPasswordControl.markAsUntouched(), this.repeatNewPasswordControl.setValue(""), this.repeatNewPasswordControl.markAsPristine(), this.repeatNewPasswordControl.markAsUntouched()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(w), i.Nb(At), i.Nb(f.e))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-change-password"]],
                decls: 42,
                vars: 26,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6", 2, "margin-bottom", "20px"], ["translate", ""], [1, "confirmation", 3, "hidden"], [1, "error", 3, "hidden"], ["id", "password-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["id", "currentPassword", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["id", "newPassword", "type", "password", "matInput", "", "aria-label", "Field for the new password", 3, "formControl"], ["password", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["align", "end"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["id", "newPasswordRepeat", "type", "password", "matInput", "", "aria-label", "Field to repeat the new password", 3, "formControl"], ["passwordRepeat", ""], ["type", "submit", "id", "changeButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to confirm the change", 3, "disabled", "click"], ["aria-hidden", "true", 1, "far", "fa-edit", "fa-lg"], ["translate", "", 3, "translateParams"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_CHANGE_PASSWORD"), i.Sb(), i.Tb(4, "div", 3), i.Hc(5), i.Sb(), i.Tb(6, "div", 4), i.Hc(7), i.Sb(), i.Tb(8, "div", 5), i.Tb(9, "mat-form-field", 6), i.Tb(10, "mat-label", 2), i.Hc(11, "LABEL_CURRENT_PASSWORD"), i.Sb(), i.Ob(12, "input", 7), i.fc(13, "translate"), i.Fc(14, Za, 2, 0, "mat-error", 8), i.Sb(), i.Tb(15, "mat-form-field", 6), i.Tb(16, "mat-label", 2), i.Hc(17, "LABEL_NEW_PASSWORD"), i.Sb(), i.Ob(18, "input", 9, 10), i.Tb(20, "mat-hint", 2), i.Ob(21, "i", 11), i.Tb(22, "em", 12), i.Hc(23), i.fc(24, "translate"), i.Sb(), i.Sb(), i.Tb(25, "mat-hint", 13), i.Hc(26), i.Sb(), i.Fc(27, ti, 2, 0, "mat-error", 8), i.Fc(28, ai, 2, 2, "mat-error", 14), i.Sb(), i.Tb(29, "mat-form-field", 6), i.Tb(30, "mat-label", 2), i.Hc(31, "LABEL_REPEAT_NEW_PASSWORD"), i.Sb(), i.Ob(32, "input", 15, 16), i.Tb(34, "mat-hint", 13), i.Hc(35), i.Sb(), i.Fc(36, ii, 2, 0, "mat-error", 8), i.Fc(37, oi, 2, 0, "mat-error", 8), i.Sb(), i.Sb(), i.Tb(38, "button", 17), i.ac("click", (function () {
                        return e.changePassword()
                    })), i.Ob(39, "i", 18), i.Hc(40), i.fc(41, "translate"), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(19), a = i.sc(33);
                        i.Bb(4), i.kc("hidden", !(e.confirmation && !e.passwordControl.dirty && !e.newPasswordControl.dirty && !e.repeatNewPasswordControl.dirty)), i.Bb(1), i.Jc(" ", e.confirmation, " "), i.Bb(1), i.kc("hidden", !(e.error && !e.passwordControl.dirty && !e.newPasswordControl.dirty && !e.repeatNewPasswordControl.dirty)), i.Bb(1), i.Jc(" ", e.error, " "), i.Bb(5), i.lc("placeholder", i.gc(13, 18, "MANDATORY_CURRENT_PASSWORD")), i.kc("formControl", e.passwordControl), i.Bb(2), i.kc("ngIf", e.passwordControl.invalid), i.Bb(4), i.kc("formControl", e.newPasswordControl), i.Bb(5), i.Ic(i.hc(24, 20, "INVALID_PASSWORD_LENGTH", i.oc(25, ei))), i.Bb(3), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/20"), i.Bb(1), i.kc("ngIf", (null == e.newPasswordControl ? null : e.newPasswordControl.invalid) && (null == e.newPasswordControl ? null : e.newPasswordControl.errors.required)), i.Bb(1), i.kc("ngIf", (null == e.newPasswordControl ? null : e.newPasswordControl.invalid) && ((null == e.newPasswordControl ? null : e.newPasswordControl.errors.minlength) || (null == e.newPasswordControl ? null : e.newPasswordControl.errors.maxlength))), i.Bb(4), i.kc("formControl", e.repeatNewPasswordControl), i.Bb(3), i.Jc("", (null == a.value ? null : a.value.length) || 0, "/20"), i.Bb(1), i.kc("ngIf", e.repeatNewPasswordControl.invalid && e.repeatNewPasswordControl.errors.required), i.Bb(1), i.kc("ngIf", e.repeatNewPasswordControl.invalid && e.repeatNewPasswordControl.errors.notSame), i.Bb(1), i.kc("disabled", e.passwordControl.invalid || e.newPasswordControl.invalid || e.repeatNewPasswordControl.invalid), i.Bb(2), i.Jc(" ", i.gc(41, 23, "BTN_CHANGE"), " ")
                    }
                },
                directives: [p.c, g.a, f.a, Et.c, Et.g, Lt.b, c.c, c.o, c.e, L.l, Et.f, S.a, Et.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-top:5px}#changeButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }), t
        })(), ri = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Complaints"
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var ci = a("pYyI");
        const si = ["fileControl"], li = function () {
            return {type: "PDF, ZIP"}
        };

        function bi(t, e) {
            1 & t && (i.Tb(0, "div", 20), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t && (i.Bb(1), i.Jc("", i.hc(2, 1, "INVALID_FILE_TYPE", i.oc(4, li)), " "))
        }

        const ui = function () {
            return {size: "100 KB"}
        };

        function di(t, e) {
            1 & t && (i.Tb(0, "div", 20), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t && (i.Bb(1), i.Jc("", i.hc(2, 1, "INVALID_FILE_SIZE", i.oc(4, ui)), " "))
        }

        function mi(t, e) {
            1 & t && (i.Tb(0, "mat-error"), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t && (i.Bb(1), i.Jc("", i.gc(2, 1, "MANDATORY_MESSAGE"), " "))
        }

        const hi = function () {
            return {length: "160"}
        };
        u.b.add(m.c), u.a.watch();
        let pi = (() => {
            class t {
                constructor(t, e, a, i) {
                    this.userService = t, this.complaintService = e, this.formSubmitService = a, this.translate = i, this.customerControl = new c.d({
                        value: "",
                        disabled: !0
                    }, []), this.messageControl = new c.d("", [c.y.required, c.y.maxLength(160)]), this.fileUploadError = void 0, this.uploader = new ci.c({
                        url: "./file-upload",
                        authToken: "Bearer " + localStorage.getItem("token"),
                        allowedMimeType: ["application/pdf", "application/xml", "text/xml", "application/zip", "application/x-zip-compressed", "multipart/x-zip"],
                        maxFileSize: 1e5
                    }), this.userEmail = void 0, this.complaint = void 0
                }

                ngOnInit() {
                    this.initComplaint(), this.uploader.onWhenAddingFileFailed = (t, e) => {
                        throw this.fileUploadError = e, new Error("Error due to : " + e.name)
                    }, this.uploader.onAfterAddingFile = () => {
                        this.fileUploadError = void 0
                    }, this.uploader.onSuccessItem = () => {
                        this.saveComplaint(), this.uploader.clearQueue()
                    }, this.formSubmitService.attachEnterKeyHandler("complaint-form", "submitButton", () => this.save())
                }

                initComplaint() {
                    this.userService.whoAmI().subscribe(t => {
                        this.complaint = {}, this.complaint.UserId = t.id, this.userEmail = t.email, this.customerControl.setValue(this.userEmail)
                    }, t => {
                        this.complaint = void 0, console.log(t)
                    })
                }

                save() {
                    this.uploader.queue[0] ? (this.uploader.queue[0].upload(), this.fileControl.nativeElement.value = null) : this.saveComplaint()
                }

                saveComplaint() {
                    this.complaint.message = this.messageControl.value, this.complaintService.save(this.complaint).subscribe(t => {
                        this.translate.get("CUSTOMER_SUPPORT_COMPLAINT_REPLY", {ref: t.id}).subscribe(t => {
                            this.confirmation = t
                        }, t => {
                            this.confirmation = t
                        }), this.initComplaint(), this.resetForm(), this.fileUploadError = void 0
                    }, t => t)
                }

                resetForm() {
                    this.messageControl.setValue(""), this.messageControl.markAsUntouched(), this.messageControl.markAsPristine(), this.fileControl.nativeElement.value = null
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(w), i.Nb(ri), i.Nb(At), i.Nb(f.e))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-complaint"]],
                viewQuery: function (t, e) {
                    var a;
                    1 & t && i.Bc(si, !0), 2 & t && i.rc(a = i.bc()) && (e.fileControl = a.first)
                },
                decls: 39,
                vars: 21,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation", 3, "hidden"], ["class", "error fileUploadError", 4, "ngIf"], ["id", "complaint-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", "aria-label", "Text field for the mail address of the user", 3, "formControl"], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["id", "complaintMessage", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", "matInput", "", "aria-label", "Field for entering the complaint", 3, "formControl", "placeholder"], ["complaintMessage", ""], [4, "ngIf"], ["align", "end"], [2, "margin-top", "15px"], ["for", "file", "translate", ""], ["ng2FileSelect", "", "id", "file", "type", "file", "accept", ".pdf,.zip", "aria-label", "Input area for uploading a single invoice PDF or XML B2B order file or a ZIP archive containing multiple invoices or orders\x3c!----\x3e", 2, "margin-left", "10px", 3, "uploader"], ["fileControl", ""], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to send the complaint", 3, "disabled", "click"], [1, "material-icons"], [1, "error", "fileUploadError"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "NAV_COMPLAIN"), i.Sb(), i.Tb(4, "div", 3), i.Hc(5), i.Sb(), i.Fc(6, bi, 3, 5, "div", 4), i.Fc(7, di, 3, 5, "div", 4), i.Tb(8, "div", 5), i.Tb(9, "mat-form-field", 6), i.Tb(10, "mat-label", 2), i.Hc(11, "LABEL_CUSTOMER"), i.Sb(), i.Ob(12, "input", 7), i.Sb(), i.Tb(13, "mat-form-field", 6), i.Tb(14, "mat-label", 2), i.Hc(15, "LABEL_MESSAGE"), i.Sb(), i.Tb(16, "mat-hint", 2), i.Ob(17, "i", 8), i.Tb(18, "em", 9), i.Hc(19), i.fc(20, "translate"), i.Sb(), i.Sb(), i.Ob(21, "textarea", 10, 11), i.fc(23, "translate"), i.Fc(24, mi, 3, 3, "mat-error", 12), i.Tb(25, "mat-hint", 13), i.Hc(26), i.Sb(), i.Sb(), i.Tb(27, "div", 14), i.Tb(28, "label", 15), i.Hc(29, "LABEL_INVOICE"), i.Tb(30, "span"), i.Hc(31, ":"), i.Sb(), i.Sb(), i.Ob(32, "input", 16, 17), i.Sb(), i.Sb(), i.Tb(34, "button", 18), i.ac("click", (function () {
                        return e.save()
                    })), i.Tb(35, "i", 19), i.Hc(36, " send "), i.Sb(), i.Hc(37), i.fc(38, "translate"), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(22);
                        i.Bb(4), i.kc("hidden", !(e.confirmation && !e.messageControl.dirty)), i.Bb(1), i.Ic(e.confirmation), i.Bb(1), i.kc("ngIf", e.fileUploadError && "mimeType" == e.fileUploadError.name), i.Bb(1), i.kc("ngIf", e.fileUploadError && "fileSize" == e.fileUploadError.name), i.Bb(5), i.kc("formControl", e.customerControl), i.Bb(7), i.Ic(i.hc(20, 13, "MAX_TEXTAREA_LENGTH", i.oc(20, hi))), i.Bb(2), i.lc("placeholder", i.gc(23, 16, "WRITE_MESSAGE_PLACEHOLDER")), i.kc("formControl", e.messageControl), i.Bb(3), i.kc("ngIf", e.messageControl.invalid && (null == e.messageControl ? null : e.messageControl.errors.required)), i.Bb(2), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/160"), i.Bb(6), i.kc("uploader", e.uploader), i.Bb(2), i.kc("disabled", e.messageControl.invalid || e.fileUploadError), i.Bb(3), i.Jc(" ", i.gc(38, 18, "BTN_SUBMIT"), " ")
                    }
                },
                directives: [p.c, g.a, f.a, L.l, Et.c, Et.g, Lt.b, c.c, c.o, c.e, Et.f, Lt.d, c.j, ci.a, S.a, Et.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}"]
            }), t
        })(), gi = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/chatbot"
                }

                getChatbotStatus() {
                    return this.http.get(this.host + "/status").pipe(Object(s.a)(t => t), Object(l.a)(t => {
                        throw t
                    }))
                }

                getResponse(t, e) {
                    return this.http.post(this.host + "/respond", {
                        action: t,
                        query: e
                    }).pipe(Object(s.a)(t => t), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function fi(t, e) {
            if (1 & t && i.Ob(0, "img", 16), 2 & t) {
                const t = i.ec(2);
                i.lc("src", t.juicyImageSrc, i.yc)
            }
        }

        function Si(t, e) {
            if (1 & t && i.Ob(0, "img", 17), 2 & t) {
                const t = i.ec(2);
                i.lc("src", t.profileImageSrc, i.yc)
            }
        }

        function Ti(t, e) {
            if (1 & t && (i.Tb(0, "div", 13), i.Fc(1, fi, 1, 1, "img", 14), i.Fc(2, Si, 1, 1, "img", 15), i.Tb(3, "div"), i.Hc(4), i.Sb(), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("ngIf", "bot" == t.author), i.Bb(1), i.kc("ngIf", "user" == t.author), i.Bb(1), i.Db("user" == t.author ? "speech-bubble-right" : "speech-bubble-left"), i.Bb(1), i.Jc(" ", t.body, " ")
            }
        }

        const vi = function () {
            return {chatbot: "juicy-chat-bot"}
        };
        u.b.add(m.c), u.a.watch();
        var Ci = function (t) {
            return t.user = "user", t.bot = "bot", t
        }({});
        let wi = (() => {
            class t {
                constructor(t, e, a, i, o) {
                    this.userService = t, this.chatbotService = e, this.cookieService = a, this.formSubmitService = i, this.translate = o, this.messageControl = new c.d, this.messages = [], this.juicyImageSrc = "assets/public/images/ChatbotAvatar.png", this.profileImageSrc = "assets/public/images/uploads/default.svg", this.messageActions = {
                        response: "query",
                        namequery: "setname"
                    }, this.currentAction = this.messageActions.response
                }

                ngOnInit() {
                    this.chatbotService.getChatbotStatus().subscribe(t => {
                        this.messages.push({
                            author: Ci.bot,
                            body: t.body
                        }), t.action && (this.currentAction = this.messageActions[t.action])
                    }), this.userService.whoAmI().subscribe(t => {
                        this.profileImageSrc = t.profileImage
                    }, t => {
                        console.log(t)
                    })
                }

                handleResponse(t) {
                    if (this.messages.push({
                        author: Ci.bot,
                        body: t.body
                    }), this.currentAction = this.messageActions[t.action], t.token) {
                        localStorage.setItem("token", t.token);
                        let e = new Date;
                        e.setHours(e.getHours() + 8), this.cookieService.set("token", t.token, e, "/")
                    }
                }

                sendMessage() {
                    let t = this.messageControl.value;
                    t && (this.messages.push({
                        author: Ci.user,
                        body: t
                    }), this.messageControl.setValue(""), this.chatbotService.getChatbotStatus().subscribe(e => {
                        e.status || e.action ? this.chatbotService.getResponse(this.currentAction, t).subscribe(t => {
                            this.handleResponse(t)
                        }) : this.messages.push({author: Ci.bot, body: e.body});
                        const a = document.getElementById("chat-window");
                        a.scrollTop = a.scrollHeight
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(w), i.Nb(gi), i.Nb(r.a), i.Nb(At), i.Nb(f.e))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-chatbot"]],
                decls: 20,
                vars: 13,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], [1, "powered-by"], ["id", "chat-container"], ["id", "chat-box"], ["id", "chat-window"], ["class", "message-container", 4, "ngFor", "ngForOf"], [1, "message-box-container"], [1, "form-wrapper"], ["color", "accent", "appearance", "outline"], ["translate", ""], ["id", "message-input", "name", "message", "matInput", "", "aria-label", "Text field for a chat message", 3, "formControl", "placeholder", "keyup.enter"], ["message", ""], [1, "message-container"], ["class", "juicy-chat-bot-image", 3, "src", 4, "ngIf"], ["class", "profile-image", 3, "src", 4, "ngIf"], [1, "juicy-chat-bot-image", 3, "src"], [1, "profile-image", 3, "src"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1"), i.Hc(3), i.fc(4, "translate"), i.Tb(5, "span", 2), i.Hc(6), i.fc(7, "translate"), i.Sb(), i.Sb(), i.Tb(8, "mat-card", 3), i.Tb(9, "mat-card", 4), i.Tb(10, "div", 5), i.Fc(11, Ti, 5, 6, "div", 6), i.Sb(), i.Tb(12, "div", 7), i.Tb(13, "div", 8), i.Tb(14, "mat-form-field", 9), i.Tb(15, "mat-label", 10), i.Hc(16, "LABEL_MESSAGE"), i.Sb(), i.Tb(17, "input", 11, 12), i.ac("keyup.enter", (function () {
                        return e.sendMessage()
                    })), i.fc(19, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(3), i.Jc("", i.gc(4, 5, "SECTION_SUPPORT_CHAT"), " "), i.Bb(3), i.Jc("(", i.hc(7, 7, "LABEL_POWERED_BY_CHATBOT", i.oc(12, vi)), ")"), i.Bb(5), i.kc("ngForOf", e.messages), i.Bb(6), i.lc("placeholder", i.gc(19, 10, "ASK_ME_ANYTHING_PLACEHOLDER")), i.kc("formControl", e.messageControl))
                },
                directives: [p.c, g.a, L.k, Et.c, Et.g, f.a, Lt.b, c.c, c.o, c.e, L.l],
                pipes: [f.d],
                styles: ['mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:60%}mat-form-field[_ngcontent-%COMP%]{height:0;width:70%;display:block;margin:auto}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#chat-container[_ngcontent-%COMP%]{display:flex;position:relative;width:95%;box-shadow:none}#chat-box[_ngcontent-%COMP%]{width:80%;display:block;margin-left:auto;margin-right:auto;height:650px;background-color:rgba(0,0,0,.3);padding:0;display:flex;flex-direction:column;align-content:space-between}.form-wrapper[_ngcontent-%COMP%]{font-size:10px}#chat-window[_ngcontent-%COMP%]{height:90%;padding:20px;overflow-y:auto}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:20px;background:none}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{background:none}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:red;border-radius:10px}#chat-window[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#b30000}.message-box-container[_ngcontent-%COMP%]{width:auto;height:10%;border-top:1px solid #fff;padding-top:15px}.message-container[_ngcontent-%COMP%]{margin-right:25px;width:auto;overflow:hidden;height:auto}.speech-bubble-right[_ngcontent-%COMP%]{background:#546e7a;border-radius:4px;font-size:15px;line-height:1.3;max-width:500px;padding:15px;float:right;position:relative;margin-bottom:25px}.speech-bubble-right[_ngcontent-%COMP%]:after{border-left:20px solid transparent;border-top:20px solid #546e7a;bottom:-20px;content:"";position:absolute;right:20px}.speech-bubble-left[_ngcontent-%COMP%]{background:#546e7a;border-radius:4px;font-size:15px;line-height:1.3;max-width:500px;padding:15px;float:left;position:relative;margin-bottom:25px}.speech-bubble-left[_ngcontent-%COMP%]:after{border-right:20px solid transparent;border-top:20px solid #546e7a;bottom:-20px;content:"";position:absolute;left:20px}.juicy-chat-bot-image[_ngcontent-%COMP%]{float:left;margin-top:20px;height:70px}.profile-image[_ngcontent-%COMP%]{float:right;margin-top:20px;margin-left:10px;height:40px;border-radius:50%}.powered-by[_ngcontent-%COMP%]{font-size:xx-small}']
            }), t
        })(), yi = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Recycles"
                }

                find(t) {
                    return this.http.get(this.host + "/", {params: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })(), ki = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Addresss"
                }

                get() {
                    return this.http.get(this.host).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                getById(t) {
                    return this.http.get(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                put(t, e) {
                    return this.http.put(this.host + "/" + t, e).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                del(t) {
                    return this.http.delete(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var Oi = a("CtHx"), Ii = a("zQhy");

        function _i(t, e) {
            1 & t && (i.Tb(0, "h1", 5), i.Hc(1, "TITLE_SELECT_ADDRESS"), i.Sb())
        }

        function xi(t, e) {
            1 & t && (i.Tb(0, "h1", 5), i.Hc(1, "MY_SAVED_ADRESSES"), i.Sb())
        }

        function Bi(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 20)
        }

        function Hi(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 20), i.Tb(1, "mat-radio-button", 21), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).emitSelectionToParent(a.id)
                }))("change", (function (a) {
                    i.vc(t);
                    const o = e.$implicit, n = i.ec(2);
                    return a ? n.selection.toggle(o) : null
                })), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec(2);
                i.Bb(1), i.kc("checked", a.selection.isSelected(t))
            }
        }

        function Pi(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 22)
        }

        function Ai(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 20), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", null == t ? null : t.fullName, " ")
            }
        }

        function Ei(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 22)
        }

        function Li(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 23), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Lc(" ", null == t ? null : t.streetAddress, ", ", null == t ? null : t.city, ", ", null == t ? null : t.state, ", ", null == t ? null : t.zipCode, " ")
            }
        }

        function Di(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 22)
        }

        function Ni(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 20), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Ic(null == t ? null : t.country)
            }
        }

        function Fi(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 22)
        }

        function Mi(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 24), i.Tb(1, "button", 25), i.Ob(2, "i", 26), i.Sb(), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.mc("routerLink", "/address/edit/", t.id, "")
            }
        }

        function Ri(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 22)
        }

        function Ui(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 24), i.Tb(1, "button", 27), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).deleteAddress(a.id)
                })), i.Ob(2, "i", 28), i.Sb(), i.Sb()
            }
        }

        function ji(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function Ji(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-row", 29), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit, o = e.$implicit, n = i.ec(2);
                    return n.selection.toggle(a), n.emitSelectionToParent(o.id)
                })), i.Sb()
            }
        }

        function Gi(t, e) {
            if (1 & t && (i.Tb(0, "mat-table", 6), i.Rb(1, 7), i.Fc(2, Bi, 1, 0, "mat-header-cell", 8), i.Fc(3, Hi, 2, 1, "mat-cell", 9), i.Qb(), i.Rb(4, 10), i.Fc(5, Pi, 1, 0, "mat-header-cell", 11), i.Fc(6, Ai, 2, 1, "mat-cell", 9), i.Qb(), i.Rb(7, 12), i.Fc(8, Ei, 1, 0, "mat-header-cell", 11), i.Fc(9, Li, 2, 4, "mat-cell", 13), i.Qb(), i.Rb(10, 14), i.Fc(11, Di, 1, 0, "mat-header-cell", 11), i.Fc(12, Ni, 2, 1, "mat-cell", 9), i.Qb(), i.Rb(13, 15), i.Fc(14, Fi, 1, 0, "mat-header-cell", 11), i.Fc(15, Mi, 3, 1, "mat-cell", 16), i.Qb(), i.Rb(16, 17), i.Fc(17, Ri, 1, 0, "mat-header-cell", 11), i.Fc(18, Ui, 3, 0, "mat-cell", 16), i.Qb(), i.Fc(19, ji, 1, 0, "mat-header-row", 18), i.Fc(20, Ji, 1, 0, "mat-row", 19), i.Sb()), 2 & t) {
                const t = i.ec();
                i.kc("dataSource", t.dataSource), i.Bb(19), i.kc("matHeaderRowDef", t.displayedColumns), i.Bb(1), i.kc("matRowDefColumns", t.displayedColumns)
            }
        }

        function zi(t, e) {
            1 & t && (i.Tb(0, "div", 30), i.Tb(1, "button", 31), i.Tb(2, "mat-icon"), i.Hc(3, " add "), i.Sb(), i.Tb(4, "span", 5), i.Hc(5, "ADD_NEW_ADDRESS"), i.Sb(), i.Sb(), i.Sb())
        }

        function qi(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 32), i.ac("click", (function () {
                    return i.vc(t), i.ec().chooseAddress()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " navigate_next "), i.Sb(), i.Tb(3, "span", 5), i.Hc(4, "LABEL_CONTINUE"), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.kc("disabled", void 0 === t.addressId)
            }
        }

        u.b.add(h.c, h.g), u.a.watch();
        let Wi = (() => {
            class t {
                constructor(t, e, a, o, n) {
                    this.addressService = t, this.translate = e, this.router = a, this.ngZone = o, this.snackBarHelperService = n, this.emitSelection = new i.o, this.allowEdit = !1, this.addNewAddressDiv = !0, this.showNextButton = !1, this.addressId = void 0, this.displayedColumns = ["Name", "Address", "Country"], this.selection = new Oi.c(!1, []), this.addressExist = !1
                }

                ngOnInit() {
                    this.allowEdit ? this.displayedColumns.push("Edit", "Remove") : this.displayedColumns.unshift("Selection"), this.load()
                }

                load() {
                    this.addressService.get().subscribe(t => {
                        this.addressExist = t.length, this.storedAddresses = t, this.dataSource = new E.o(this.storedAddresses)
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                    })
                }

                emitSelectionToParent(t) {
                    this.selection.hasValue() ? (this.emitSelection.emit(t), this.addressId = t) : (this.emitSelection.emit(void 0), this.addressId = void 0)
                }

                chooseAddress() {
                    sessionStorage.setItem("addressId", this.addressId), this.ngZone.run(() => this.router.navigate(["/delivery-method"]))
                }

                deleteAddress(t) {
                    this.addressService.del(t).subscribe(() => {
                        this.error = null, this.translate.get("ADDRESS_REMOVED").subscribe(t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }, t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }), this.load()
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(ki), i.Nb(f.e), i.Nb(y.b), i.Nb(i.B), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-address"]],
                inputs: {
                    allowEdit: "allowEdit",
                    addNewAddressDiv: "addNewAddressDiv",
                    showNextButton: "showNextButton"
                },
                outputs: {emitSelection: "emitSelection"},
                decls: 6,
                vars: 7,
                consts: [[1, "mat-elevation-z6"], ["translate", "", 4, "ngIf"], [3, "dataSource", 4, "ngIf"], ["style", "margin-top: 20px;", 4, "ngIf"], ["mat-raised-button", "", "mat-button", "", "class", "btn btn-next", "color", "primary", "aria-label", "Proceed to payment selection", 3, "disabled", "click", 4, "ngIf"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["style", "display: none;", 4, "matHeaderCellDef"], ["matColumnDef", "Address"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "Country"], ["matColumnDef", "Edit"], ["fxflex", "10%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], ["fxFlex", "20%"], [3, "checked", "click", "change"], [2, "display", "none"], ["fxFlex", "40%"], ["fxflex", "10%"], ["mat-icon-button", "", 3, "routerLink"], [1, "far", "fa-edit"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "click"], [2, "margin-top", "20px"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Add a new address", "routerLink", "/address/create", 1, "btn", "btn-new-address"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to payment selection", 1, "btn", "btn-next", 3, "disabled", "click"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Fc(1, _i, 2, 0, "h1", 1), i.Fc(2, xi, 2, 0, "h1", 1), i.Fc(3, Gi, 21, 3, "mat-table", 2), i.Fc(4, zi, 6, 0, "div", 3), i.Fc(5, qi, 5, 1, "button", 4), i.Sb()), 2 & t && (i.Fb("div-boundary", !e.addNewAddressDiv), i.Bb(1), i.kc("ngIf", e.showNextButton), i.Bb(1), i.kc("ngIf", !e.showNextButton), i.Bb(1), i.kc("ngIf", e.addressExist), i.Bb(1), i.kc("ngIf", e.addNewAddressDiv), i.Bb(1), i.kc("ngIf", e.showNextButton))
                },
                directives: [g.a, L.l, f.a, E.n, E.c, E.i, E.b, E.k, E.m, E.h, p.b, E.a, Ii.a, S.a, y.c, E.j, E.l, ve.a],
                styles: [".btn-new-address[_ngcontent-%COMP%]{margin-left:0;margin-right:auto;display:block}.btn-next[_ngcontent-%COMP%]{margin-right:0;margin-left:auto;display:block;margin-top:-37px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.div-boundary[_ngcontent-%COMP%]{border:1px solid hsla(0,0%,100%,.3);border-radius:5px;box-shadow:0 0 0!important}"]
            }), t
        })();
        var Yi = a("TN/R");
        const Vi = ["addressComp"];

        function Qi(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_QUANTITY "), i.Sb())
        }

        const $i = function () {
            return {range: "10-1000"}
        };

        function Ki(t, e) {
            1 & t && (i.Tb(0, "mat-error", 21), i.Hc(1, "INVALID_QUANTITY "), i.Sb()), 2 & t && i.kc("translateParams", i.oc(1, $i))
        }

        function Xi(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "INVALID_DATE"), i.Sb())
        }

        function Zi(t, e) {
            if (1 & t && (i.Tb(0, "mat-form-field", 22), i.Tb(1, "mat-label", 2), i.Hc(2, "LABEL_PICKUP_DATE"), i.Sb(), i.Ob(3, "input", 23), i.Ob(4, "mat-datepicker-toggle", 24), i.Ob(5, "mat-datepicker", null, 25), i.Fc(7, Xi, 2, 0, "mat-error", 7), i.Sb()), 2 & t) {
                const t = i.sc(6), e = i.ec();
                i.Bb(3), i.kc("formControl", e.pickUpDateControl)("matDatepicker", t), i.Bb(1), i.kc("for", t), i.Bb(3), i.kc("ngIf", e.pickUpDateControl.invalid)
            }
        }

        function to(t, e) {
            if (1 & t && (i.Tb(0, "mat-checkbox", 26), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t) {
                const t = i.ec();
                i.kc("formControl", t.pickup), i.Bb(1), i.Jc("", i.gc(2, 2, "REQUEST_PICKUP"), " ")
            }
        }

        u.b.add(m.D), u.a.watch();
        let eo = (() => {
            class t {
                constructor(t, e, a, i, o, n) {
                    this.recycleService = t, this.userService = e, this.configurationService = a, this.formSubmitService = i, this.translate = o, this.snackBarHelperService = n, this.requestorControl = new c.d({
                        value: "",
                        disabled: !0
                    }, []), this.recycleQuantityControl = new c.d("", [c.y.required, c.y.min(10), c.y.max(1e3)]), this.pickUpDateControl = new c.d, this.pickup = new c.d(!1), this.recycle = {}, this.addressId = void 0
                }

                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.recyclePage && (this.topImage = "assets/public/images/products/" + t.application.recyclePage.topProductImage, this.bottomImage = "assets/public/images/products/" + t.application.recyclePage.bottomProductImage)
                    }, t => console.log(t)), this.initRecycle(), this.findAll(), this.formSubmitService.attachEnterKeyHandler("recycle-form", "recycleButton", () => this.save())
                }

                initRecycle() {
                    this.userService.whoAmI().subscribe(t => {
                        this.recycle = {}, this.recycle.UserId = t.id, this.userEmail = t.email, this.requestorControl.setValue(this.userEmail)
                    }, t => console.log(t))
                }

                save() {
                    this.recycle.AddressId = this.addressId, this.recycle.quantity = this.recycleQuantityControl.value, this.pickup.value && (this.recycle.isPickUp = this.pickup.value, this.recycle.date = this.pickUpDateControl.value), this.recycleService.save(this.recycle).subscribe(t => {
                        t.isPickup ? this.translate.get("CONFIRM_RECYCLING_PICKUP", {pickupdate: t.pickupDate}).subscribe(t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }, t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }) : this.translate.get("CONFIRM_RECYCLING_BOX").subscribe(t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }, t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }), this.addressComponent.load(), this.initRecycle(), this.resetForm()
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                    })
                }

                findAll() {
                    this.recycleService.find().subscribe(t => {
                        this.recycles = t
                    }, t => {
                        console.log(t)
                    })
                }

                resetForm() {
                    this.addressId = void 0, this.recycleQuantityControl.setValue(""), this.recycleQuantityControl.markAsPristine(), this.recycleQuantityControl.markAsUntouched(), this.pickUpDateControl.setValue(""), this.pickUpDateControl.markAsPristine(), this.pickUpDateControl.markAsUntouched(), this.pickup.setValue(!1)
                }

                getMessage(t) {
                    this.addressId = t
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(yi), i.Nb(w), i.Nb(b), i.Nb(At), i.Nb(f.e), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-recycle"]],
                viewQuery: function (t, e) {
                    var a;
                    1 & t && i.Bc(Vi, !0), 2 & t && i.rc(a = i.bc()) && (e.addressComponent = a.first)
                },
                decls: 41,
                vars: 16,
                consts: [["fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "20px", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "50%"], ["translate", ""], ["id", "recycle-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "mat-elevation-z0", 3, "addNewAddressDiv", "emitSelection"], ["addressComp", ""], ["appearance", "outline", 4, "ngIf"], [3, "formControl", 4, "ngIf"], ["type", "submit", "id", "recycleButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "fas", "fa-paper-plane", "fa-lg"], ["fxFlex", "50%"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center"], ["translate", "", 1, "responsibility-header"], ["fxLayout", "row", "fxLayoutGap", "20px", 1, "mat-elevation-z0"], ["mat-card-image", "", 3, "src"], [1, "fill-remaining-space"], ["translate", "", 3, "translateParams"], ["appearance", "outline"], ["matInput", "", 3, "formControl", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "formControl"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "div", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_RECYCLE"), i.Sb(), i.Tb(4, "div", 3), i.Tb(5, "mat-form-field", 4), i.Tb(6, "mat-label", 2), i.Hc(7, "LABEL_REQUESTOR"), i.Sb(), i.Ob(8, "input", 5), i.Sb(), i.Tb(9, "mat-form-field", 4), i.Tb(10, "mat-label", 2), i.Hc(11, "LABEL_QUANTITY"), i.Sb(), i.Ob(12, "input", 6), i.fc(13, "translate"), i.Fc(14, Qi, 2, 0, "mat-error", 7), i.Fc(15, Ki, 2, 2, "mat-error", 8), i.Sb(), i.Tb(16, "app-address", 9, 10), i.ac("emitSelection", (function (t) {
                        return e.getMessage(t)
                    })), i.Sb(), i.Fc(18, Zi, 8, 4, "mat-form-field", 11), i.Fc(19, to, 3, 4, "mat-checkbox", 12), i.Sb(), i.Tb(20, "button", 13), i.ac("click", (function () {
                        return e.save()
                    })), i.Ob(21, "i", 14), i.Hc(22), i.fc(23, "translate"), i.Sb(), i.Sb(), i.Tb(24, "div", 15), i.Tb(25, "div", 16), i.Tb(26, "h3", 17), i.Hc(27, "SECTION_PRESS_JUICE_RESPONSIBLY"), i.Sb(), i.Tb(28, "mat-card", 18), i.Ob(29, "img", 19), i.Tb(30, "mat-card-content"), i.Tb(31, "div"), i.Tb(32, "small"), i.Hc(33, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Tb(34, "mat-card", 18), i.Ob(35, "img", 19), i.Tb(36, "mat-card-content"), i.Tb(37, "div"), i.Tb(38, "small"), i.Hc(39, "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Ob(40, "span", 20), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(8), i.kc("formControl", e.requestorControl), i.Bb(4), i.kc("formControl", e.recycleQuantityControl)("placeholder", i.gc(13, 12, "IN_LITERS_PLACEHOLDER")), i.Bb(2), i.kc("ngIf", e.recycleQuantityControl.invalid && e.recycleQuantityControl.errors.required), i.Bb(1), i.kc("ngIf", e.recycleQuantityControl.invalid && (e.recycleQuantityControl.errors.min || e.recycleQuantityControl.errors.max)), i.Bb(1), i.kc("addNewAddressDiv", !1), i.Bb(2), i.kc("ngIf", e.pickup.value && e.recycleQuantityControl.value > 100), i.Bb(1), i.kc("ngIf", e.recycleQuantityControl.value > 100), i.Bb(1), i.kc("disabled", void 0 === e.addressId || e.recycleQuantityControl.invalid || e.pickUpDateControl.invalid), i.Bb(2), i.Jc(" ", i.gc(23, 14, "BTN_SUBMIT"), " "), i.Bb(7), i.kc("src", e.topImage, i.yc), i.Bb(6), i.kc("src", e.bottomImage, i.yc))
                },
                directives: [g.a, p.d, p.e, p.b, f.a, Et.c, Et.g, Lt.b, c.c, c.o, c.e, c.t, L.l, Wi, S.a, p.c, g.d, g.b, Et.b, Yi.b, Yi.d, Et.h, Yi.a, ua.a],
                pipes: [f.d],
                styles: ["mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-left:20%;margin-top:5px;width:60%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;width:auto}mat-checkbox[_ngcontent-%COMP%]{margin-bottom:20px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}"]
            }), t
        })(), ao = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Challenges"
                }

                find(t) {
                    return this.http.get(this.host + "/", {params: t}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                repeatNotification(t) {
                    return this.http.get(this.hostServer + "/rest/repeat-notification", {params: {challenge: t}}).pipe(Object(l.a)(t => {
                        throw t
                    }))
                }

                continueCode() {
                    return this.http.get(this.hostServer + "/rest/continue-code").pipe(Object(s.a)(t => t.continueCode), Object(l.a)(t => {
                        throw t
                    }))
                }

                restoreProgress(t) {
                    return this.http.put(this.hostServer + "/rest/continue-code/apply/" + t, {}).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var io = a("Iab2"), oo = a("Cfvw");
        let no = (() => {
            class t {
                constructor(t, e, a) {
                    this.cookieService = t, this.snackBarHelperService = e, this.snackBar = a, this.VERSION = 1
                }

                save(t = "owasp_juice_shop") {
                    const e = {version: this.VERSION};
                    e.scoreBoard = {
                        displayedDifficulties: localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : void 0,
                        showSolvedChallenges: localStorage.getItem("showSolvedChallenges") ? JSON.parse(String(localStorage.getItem("showSolvedChallenges"))) : void 0,
                        showDisabledChallenges: localStorage.getItem("showDisabledChallenges") ? JSON.parse(String(localStorage.getItem("showDisabledChallenges"))) : void 0,
                        showOnlyTutorialChallenges: localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : void 0,
                        displayedChallengeCategories: localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : void 0
                    }, e.banners = {
                        welcomeBannerStatus: this.cookieService.get("welcomebanner_status") ? this.cookieService.get("welcomebanner_status") : void 0,
                        cookieConsentStatus: this.cookieService.get("cookieconsent_status") ? this.cookieService.get("cookieconsent_status") : void 0
                    }, e.language = this.cookieService.get("language") ? this.cookieService.get("language") : void 0, e.continueCode = this.cookieService.get("continueCode") ? this.cookieService.get("continueCode") : void 0;
                    const a = new Blob([JSON.stringify(e)], {type: "text/plain;charset=utf-8"});
                    Object(io.saveAs)(a, `${t}-${(new Date).toISOString().split("T")[0]}.json`)
                }

                restore(t) {
                    return Object(oo.a)(t.text().then(e => {
                        var a, i, o, n, r, c, s;
                        const l = JSON.parse(e);
                        l.version === this.VERSION ? (this.restoreLocalStorage("displayedDifficulties", null === (a = l.scoreBoard) || void 0 === a ? void 0 : a.displayedDifficulties), this.restoreLocalStorage("showSolvedChallenges", null === (i = l.scoreBoard) || void 0 === i ? void 0 : i.showSolvedChallenges), this.restoreLocalStorage("showDisabledChallenges", null === (o = l.scoreBoard) || void 0 === o ? void 0 : o.showDisabledChallenges), this.restoreLocalStorage("showOnlyTutorialChallenges", null === (n = l.scoreBoard) || void 0 === n ? void 0 : n.showOnlyTutorialChallenges), this.restoreLocalStorage("displayedChallengeCategories", null === (r = l.scoreBoard) || void 0 === r ? void 0 : r.displayedChallengeCategories), this.restoreCookie("welcomebanner_status", null === (c = l.banners) || void 0 === c ? void 0 : c.welcomeBannerStatus), this.restoreCookie("cookieconsent_status", null === (s = l.banners) || void 0 === s ? void 0 : s.cookieConsentStatus), this.restoreCookie("language", l.language), this.restoreCookie("continueCode", l.continueCode), this.snackBar.open("Backup has been restored from " + t.name, "Force page reload", {duration: 5e3}).onAction().subscribe(() => {
                            location.reload()
                        })) : this.snackBarHelperService.open("Version " + l.version + " is incompatible with expected version " + this.VERSION, "errorBar")
                    }).catch(t => {
                        this.snackBarHelperService.open("Backup restore operation failed: " + t.message, "errorBar")
                    }))
                }

                restoreCookie(t, e) {
                    if (e) {
                        let a = new Date;
                        a.setFullYear(a.getFullYear() + 1), this.cookieService.set(t, e, a, "/")
                    } else this.cookieService.delete(t, "/")
                }

                restoreLocalStorage(t, e) {
                    e ? localStorage.setItem(t, JSON.stringify(e)) : localStorage.removeItem(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(r.a), i.Xb(A), i.Xb(P.a))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var ro = a("7g+E"), co = a("BTe0"), so = a("Ynp+"), lo = a("f44v");

        function bo(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 3), i.ac("click", (function () {
                    return i.vc(t), i.ec().repeatNotification()
                })), i.fc(1, "translate"), i.Tb(2, "mat-icon", 4), i.Hc(3, "flag"), i.Sb(), i.Tb(4, "mat-icon", 4), i.Hc(5, "check_box"), i.Sb(), i.Tb(6, "span", 5), i.Hc(7), i.fc(8, "translate"), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.kc("id", t.challenge.name + ".solved")("matTooltip", t.allowRepeatNotifications ? i.gc(1, 5, "NOTIFICATION_RESEND_INSTRUCTIONS") : null), i.Bb(2), i.kc("hidden", !t.allowRepeatNotifications), i.Bb(2), i.kc("hidden", t.allowRepeatNotifications), i.Bb(3), i.Ic(i.gc(8, 7, "STATUS_SOLVED"))
            }
        }

        function uo(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 6), i.ac("click", (function () {
                    return i.vc(t), i.ec().openHint()
                })), i.Tb(1, "mat-icon", 4), i.Hc(2, "book"), i.Sb(), i.Tb(3, "mat-icon", 4), i.Hc(4, "check_box_outline_blank"), i.Sb(), i.Tb(5, "span", 5), i.Hc(6), i.fc(7, "translate"), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.kc("id", t.challenge.name + ".notSolved")("matTooltip", t.showChallengeHints ? t.challenge.hint : null), i.Bb(1), i.kc("hidden", !t.showChallengeHints || !t.challenge.hintUrl), i.Bb(2), i.kc("hidden", t.showChallengeHints && t.challenge.hintUrl), i.Bb(3), i.Ic(i.gc(7, 5, "STATUS_UNSOLVED"))
            }
        }

        function mo(t, e) {
            if (1 & t && i.Ob(0, "i"), 2 & t) {
                const t = i.ec(2);
                i.Db("icon-" + (null == t.challenge.disabledEnv ? null : t.challenge.disabledEnv.toString().toLowerCase()))
            }
        }

        function ho(t, e) {
            if (1 & t && i.Ob(0, "i"), 2 & t) {
                const t = i.ec(2);
                i.Db("fab fa-" + (null == t.challenge.disabledEnv ? null : t.challenge.disabledEnv.toString().toLowerCase()))
            }
        }

        function po(t, e) {
            if (1 & t && (i.Tb(0, "button", 7), i.Tb(1, "span"), i.Fc(2, mo, 1, 3, "i", 8), i.Fc(3, ho, 1, 3, "i", 8), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.kc("id", t.challenge.name + ".unavailable")("matTooltip", t.challenge.hint), i.Bb(2), i.kc("ngIf", "Windows" !== t.challenge.disabledEnv), i.Bb(1), i.kc("ngIf", "Windows" === t.challenge.disabledEnv), i.Bb(1), i.Jc(" ", i.gc(5, 5, "STATUS_UNAVAILABLE"), " ")
            }
        }

        u.b.add(d.l), u.a.watch();
        let go = (() => {
            class t {
                constructor(t, e) {
                    this.challengeService = t, this.windowRefService = e, this.challenge = {}, this.allowRepeatNotifications = !1, this.showChallengeHints = !0
                }

                repeatNotification() {
                    this.allowRepeatNotifications && this.challengeService.repeatNotification(encodeURIComponent(this.challenge.name)).subscribe(() => {
                        this.windowRefService.nativeWindow.scrollTo(0, 0)
                    }, t => console.log(t))
                }

                openHint() {
                    this.showChallengeHints && this.challenge.hintUrl && this.windowRefService.nativeWindow.open(this.challenge.hintUrl, "_blank")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(ao), i.Nb(ba))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-challenge-status-badge"]],
                inputs: {
                    challenge: "challenge",
                    allowRepeatNotifications: "allowRepeatNotifications",
                    showChallengeHints: "showChallengeHints"
                },
                decls: 3,
                vars: 3,
                consts: [["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], [3, "hidden"], ["fxShow", "", "fxHide.lt-sm", ""], ["mat-raised-button", "", "color", "primary", "matTooltipPosition", "above", 3, "id", "matTooltip", "click"], ["mat-raised-button", "", "matTooltipPosition", "above", 3, "id", "matTooltip"], [3, "class", 4, "ngIf"]],
                template: function (t, e) {
                    1 & t && (i.Fc(0, bo, 9, 9, "button", 0), i.Fc(1, uo, 8, 7, "button", 1), i.Fc(2, po, 6, 7, "button", 2)), 2 & t && (i.kc("ngIf", !e.challenge.disabledEnv && e.challenge.solved), i.Bb(1), i.kc("ngIf", !e.challenge.disabledEnv && !e.challenge.solved), i.Bb(1), i.kc("ngIf", e.challenge.disabledEnv))
                },
                directives: [L.l, S.a, Ce.a, ve.a, D.b],
                pipes: [f.d],
                styles: [""]
            }), t
        })();
        const fo = function (t) {
            return {num: t}
        }, So = function (t) {
            return {tier: t}
        };

        function To(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-button-toggle", 6), i.ac("change", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().toggleDifficulty(a)
                })), i.fc(1, "translate"), i.fc(2, "translate"), i.Tb(3, "label"), i.Tb(4, "span", 23), i.dc(), i.Tb(5, "svg", 24), i.Tb(6, "linearGradient", 25), i.Ob(7, "stop", 26), i.Ob(8, "stop", 27), i.Sb(), i.Ob(9, "path", 28), i.Sb(), i.cc(), i.Tb(10, "span", 29), i.Hc(11), i.Sb(), i.Tb(12, "span"), i.Hc(13), i.Sb(), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec();
                i.kc("checked", a.displayedDifficulties.includes(t))("disabled", a.restrictToTutorialsFirst && t > a.tutorialsTier)("matTooltip", a.restrictToTutorialsFirst && !a.allTutorialsCompleted && t > a.tutorialsTier ? a.isLastTutorialsTier ? i.hc(1, 13, "INFO_FULL_CHALLENGE_MODE", i.pc(19, fo, a.challenges.length)) : i.hc(2, 16, "INFO_NEXT_TUTORIAL_TIER", i.pc(21, So, "\u2605".repeat(a.tutorialsTier))) : ""), i.Bb(5), i.Cc("fill", "url(#" + t + ")"), i.Bb(1), i.kc("id", t), i.Bb(1), i.Cb("offset", a.challenges ? a.offsetValue[t - 1] : "100%"), i.Bb(1), i.Cb("offset", a.challenges ? a.offsetValue[t - 1] : "100%"), i.Bb(1), i.Cb("fill", "inherit"), i.Bb(2), i.Ic(t), i.Bb(1), i.Db("fa-layers-counter " + (a.solvedChallengesOfDifficulty[t - 1].length === a.totalChallengesOfDifficulty[t - 1].length ? "accent-notification" : 0 === a.solvedChallengesOfDifficulty[t - 1].length ? "warn-notification" : "primary-notification")), i.Bb(1), i.Jc(" ", a.solvedChallengesOfDifficulty[t - 1].length + "/" + a.totalChallengesOfDifficulty[t - 1].length, " ")
            }
        }

        function vo(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-button-toggle", 6), i.ac("change", (function () {
                    return i.vc(t), i.ec().toggleShowDisabledChallenges()
                })), i.fc(1, "translate"), i.Ob(2, "i", 30), i.Hc(3), i.fc(4, "translate"), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.kc("checked", t.showDisabledChallenges)("disabled", t.restrictToTutorialsFirst && !t.allTutorialsCompleted)("matTooltip", t.restrictToTutorialsFirst && !t.allTutorialsCompleted ? i.hc(1, 4, "INFO_FULL_CHALLENGE_MODE", i.pc(9, fo, t.challenges.length)) : ""), i.Bb(3), i.Jc(" ", i.gc(4, 7, "BTN_SHOW_UNAVAILABLE"), " ")
            }
        }

        function Co(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 31), i.ac("click", (function () {
                    return i.vc(t), i.ec().saveBackup()
                })), i.fc(1, "translate"), i.Tb(2, "mat-icon"), i.Hc(3, " save_alt "), i.Sb(), i.Sb()
            }
            2 & t && i.lc("matTooltip", i.gc(1, 1, "SAVE_BACKUP_TOOLTIP"))
        }

        function wo(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 32), i.ac("click", (function () {
                    return i.vc(t), i.ec(), i.sc(29).click()
                })), i.fc(1, "translate"), i.Tb(2, "mat-icon"), i.Hc(3, " settings_backup_restore "), i.Sb(), i.Sb()
            }
            2 & t && i.lc("matTooltip", i.gc(1, 1, "RESTORE_BACKUP_TOOLTIP"))
        }

        const yo = function (t, e) {
            return {num: t, env: e}
        };

        function ko(t, e) {
            if (1 & t && (i.Ob(0, "div", 33), i.fc(1, "translate")), 2 & t) {
                const t = i.ec();
                i.kc("innerHTML", i.hc(1, 1, "INFO_DISABLED_CHALLENGES", i.qc(4, yo, t.numDisabledChallenges, t.disabledEnv)), i.wc)
            }
        }

        function Oo(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-button-toggle", 34), i.ac("change", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().toggleShowChallengeCategory(a)
                })), i.fc(1, "translate"), i.fc(2, "translate"), i.Hc(3), i.fc(4, "translate"), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec();
                i.kc("checked", a.displayedChallengeCategories.includes(t))("disabled", a.restrictToTutorialsFirst && !a.allTutorialsCompleted)("matTooltip", a.restrictToTutorialsFirst && !a.allTutorialsCompleted ? i.hc(1, 4, "INFO_FULL_CHALLENGE_MODE", i.pc(11, fo, a.challenges.length)) : i.gc(2, 7, "CATEGORY_" + (null == t ? null : t.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")), i.Bb(3), i.Jc(" ", i.gc(4, 9, "CATEGORY_" + (null == t ? null : t.toUpperCase().split(" ").join("_"))), " ")
            }
        }

        function Io(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 54), i.Hc(1, "LABEL_NAME"), i.Sb())
        }

        function _o(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 55), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.name, "")
            }
        }

        function xo(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 56), i.Hc(1, "LABEL_DIFFICULTY"), i.Sb())
        }

        function Bo(t, e) {
            1 & t && (i.Tb(0, "mat-icon"), i.Hc(1, " star_rate "), i.Sb())
        }

        function Ho(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 57), i.Fc(1, Bo, 2, 0, "mat-icon", 58), i.Sb()), 2 & t) {
                const t = e.$implicit, a = i.ec(2);
                i.Bb(1), i.kc("ngForOf", a.times(t.difficulty))
            }
        }

        function Po(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 59), i.Hc(1, "LABEL_DESCRIPTION "), i.Sb())
        }

        function Ao(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 60), i.Ob(1, "div", 61), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("innerHTML", t.description, i.wc)
            }
        }

        function Eo(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 62), i.Hc(1, "LABEL_CATEGORY"), i.Sb())
        }

        function Lo(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 63), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", i.gc(2, 1, "CATEGORY_" + (null == t.category ? null : t.category.toUpperCase().split(" ").join("_"))), " ")
            }
        }

        function Do(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 62), i.Hc(1, "LABEL_TAGS"), i.Sb())
        }

        function No(t, e) {
            if (1 & t && (i.Tb(0, "mat-chip-list"), i.Tb(1, "mat-chip", 65), i.fc(2, "translate"), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("matTooltip", i.gc(2, 2, "TAG_" + (null == t ? null : t.toUpperCase().split(" ").join("_")) + "_DESCRIPTION")), i.Bb(2), i.Jc(" ", i.gc(4, 4, "TAG_" + (null == t ? null : t.toUpperCase().split(" ").join("_"))), " ")
            }
        }

        function Fo(t, e) {
            if (1 & t && (i.Tb(0, "span"), i.Fc(1, No, 5, 6, "mat-chip-list", 58), i.Sb()), 2 & t) {
                const t = i.ec().$implicit;
                i.Bb(1), i.kc("ngForOf", t.tags.split(",").sort())
            }
        }

        function Mo(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 63), i.Fc(1, Fo, 2, 1, "span", 64), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("ngIf", t.tags)
            }
        }

        function Ro(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 66), i.Hc(1, "LABEL_STATUS"), i.Sb())
        }

        function Uo(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 70), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec().$implicit;
                    return i.ec(2).startHackingInstructor(e.name)
                })), i.fc(1, "translate"), i.Tb(2, "mat-icon"), i.Hc(3, " school "), i.Sb(), i.Sb()
            }
            2 & t && i.kc("matTooltip", i.gc(1, 1, "INFO_HACKING_INSTRUCTOR"))
        }

        function jo(t, e) {
            if (1 & t && (i.Tb(0, "a", 71), i.Tb(1, "button", 72), i.fc(2, "translate"), i.Tb(3, "mat-icon"), i.Hc(4, " policy "), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec().$implicit;
                i.kc("href", t.mitigationUrl, i.yc), i.Bb(1), i.kc("matTooltip", i.gc(2, 2, "INFO_VULNERABILITY_MITIGATION_LINK"))
            }
        }

        function Jo(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell"), i.Ob(1, "app-challenge-status-badge", 67), i.Fc(2, Uo, 4, 3, "button", 68), i.Fc(3, jo, 5, 4, "a", 69), i.Sb()), 2 & t) {
                const t = e.$implicit, a = i.ec(2);
                i.Bb(1), i.kc("challenge", t)("allowRepeatNotifications", a.allowRepeatNotifications)("showChallengeHints", a.showChallengeHints), i.Bb(1), i.kc("ngIf", a.showHackingInstructor && !t.solved && !t.disabledEnv && t.hasTutorial), i.Bb(1), i.kc("ngIf", a.showVulnerabilityMitigations && t.solved && t.mitigationUrl)
            }
        }

        function Go(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function zo(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function qo(t, e) {
            if (1 & t && (i.Tb(0, "mat-table", 35), i.Rb(1, 36), i.Fc(2, Io, 2, 0, "mat-header-cell", 37), i.Fc(3, _o, 2, 1, "mat-cell", 38), i.Qb(), i.Rb(4, 39), i.Fc(5, xo, 2, 0, "mat-header-cell", 40), i.Fc(6, Ho, 2, 1, "mat-cell", 41), i.Qb(), i.Rb(7, 42), i.Fc(8, Po, 2, 0, "mat-header-cell", 43), i.Fc(9, Ao, 2, 1, "mat-cell", 44), i.Qb(), i.Rb(10, 45), i.Fc(11, Eo, 2, 0, "mat-header-cell", 46), i.Fc(12, Lo, 3, 3, "mat-cell", 47), i.Qb(), i.Rb(13, 48), i.Fc(14, Do, 2, 0, "mat-header-cell", 46), i.Fc(15, Mo, 2, 1, "mat-cell", 47), i.Qb(), i.Rb(16, 49), i.Fc(17, Ro, 2, 0, "mat-header-cell", 50), i.Fc(18, Jo, 4, 5, "mat-cell", 51), i.Qb(), i.Fc(19, Go, 1, 0, "mat-header-row", 52), i.Fc(20, zo, 1, 0, "mat-row", 53), i.Sb()), 2 & t) {
                const t = i.ec();
                i.kc("dataSource", t.filterToDataSource(t.challenges))("trackBy", t.trackById), i.Bb(19), i.kc("matHeaderRowDef", t.displayedColumns), i.Bb(1), i.kc("matRowDefColumns", t.displayedColumns)
            }
        }

        function Wo(t, e) {
            1 & t && (i.Ob(0, "mat-card", 77), i.fc(1, "translate")), 2 & t && i.kc("innerHTML", i.gc(1, 1, "CALL_FOR_CONTRIBUTIONS"), i.wc)
        }

        const Yo = function (t, e) {
            return {appname: t, questionnaire: e}
        };

        function Vo(t, e) {
            if (1 & t && (i.Ob(0, "mat-card", 78), i.fc(1, "translate")), 2 & t) {
                const t = i.ec(2);
                i.kc("innerHTML", i.hc(1, 1, "CALL_FOR_FEEDBACK", i.qc(4, Yo, t.appName, t.questionnaireUrl)), i.wc)
            }
        }

        function Qo(t, e) {
            if (1 & t && (i.Tb(0, "div", 73), i.Fc(1, Wo, 2, 3, "mat-card", 74), i.Ob(2, "span", 75), i.Fc(3, Vo, 2, 7, "mat-card", 76), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("ngIf", t.showContributionInfoBox), i.Bb(2), i.kc("ngIf", t.questionnaireUrl)
            }
        }

        u.b.add(m.O, h.d, d.e, d.d, d.b, m.ab, m.F), u.a.watch();
        let $o = (() => {
            class t {
                constructor(t, e, a, i, o, n, r, c) {
                    this.configurationService = t, this.challengeService = e, this.sanitizer = a, this.ngZone = i, this.io = o, this.spinner = n, this.translate = r, this.localBackupService = c, this.availableDifficulties = [1, 2, 3, 4, 5, 6], this.displayedDifficulties = [1], this.availableChallengeCategories = [], this.displayedChallengeCategories = [], this.toggledMajorityOfDifficulties = !1, this.toggledMajorityOfCategories = !0, this.showSolvedChallenges = !0, this.numDisabledChallenges = 0, this.showDisabledChallenges = !1, this.showOnlyTutorialChallenges = !1, this.restrictToTutorialsFirst = !1, this.allTutorialsCompleted = !1, this.isLastTutorialsTier = !1, this.tutorialsTier = 1, this.displayedColumns = ["name", "difficulty", "description", "category", "tags", "status"], this.offsetValue = ["100%", "100%", "100%", "100%", "100%", "100%"], this.allowRepeatNotifications = !1, this.showChallengeHints = !0, this.showVulnerabilityMitigations = !0, this.showHackingInstructor = !0, this.challenges = [], this.percentChallengesSolved = "0", this.solvedChallengesOfDifficulty = [[], [], [], [], [], []], this.totalChallengesOfDifficulty = [[], [], [], [], [], []], this.showContributionInfoBox = !0, this.questionnaireUrl = "https://forms.gle/2Tr5m1pqnnesApxN8", this.appName = "OWASP Juice Shop", this.localBackupEnabled = !0
                }

                ngOnInit() {
                    this.spinner.show(), this.displayedDifficulties = localStorage.getItem("displayedDifficulties") ? JSON.parse(String(localStorage.getItem("displayedDifficulties"))) : [1], this.showSolvedChallenges = !localStorage.getItem("showSolvedChallenges") || JSON.parse(String(localStorage.getItem("showSolvedChallenges"))), this.showDisabledChallenges = !!localStorage.getItem("showDisabledChallenges") && JSON.parse(String(localStorage.getItem("showDisabledChallenges"))), this.configurationService.getApplicationConfiguration().subscribe(t => {
                        var e;
                        this.allowRepeatNotifications = t.challenges.showSolvedNotifications && (null === (e = t.ctf) || void 0 === e ? void 0 : e.showFlagsInNotifications), this.showChallengeHints = t.challenges.showHints, this.showVulnerabilityMitigations = t.challenges.showMitigations, this.showHackingInstructor = t.hackingInstructor && t.hackingInstructor.isEnabled, this.showContributionInfoBox = t.application.showGitHubLinks, this.questionnaireUrl = t.application.social && t.application.social.questionnaireUrl, this.appName = t.application.name, this.restrictToTutorialsFirst = t.challenges.restrictToTutorialsFirst, this.showOnlyTutorialChallenges = localStorage.getItem("showOnlyTutorialChallenges") ? JSON.parse(String(localStorage.getItem("showOnlyTutorialChallenges"))) : this.restrictToTutorialsFirst, this.localBackupEnabled = t.application.localBackupEnabled, this.challengeService.find({sort: "name"}).subscribe(t => {
                            this.challenges = t;
                            for (let e = 0; e < this.challenges.length; e++) this.augmentHintText(this.challenges[e]), this.trustDescriptionHtml(this.challenges[e]), "Score Board" === this.challenges[e].name && (this.challenges[e].solved = !0), this.availableChallengeCategories.includes(t[e].category) || this.availableChallengeCategories.push(t[e].category), this.showHackingInstructor && a.e(5).then(a.bind(null, "s2oO")).then(a => {
                                t[e].hasTutorial = a.hasInstructions(t[e].name)
                            });
                            this.availableChallengeCategories.sort(), this.displayedChallengeCategories = localStorage.getItem("displayedChallengeCategories") ? JSON.parse(String(localStorage.getItem("displayedChallengeCategories"))) : this.availableChallengeCategories, this.calculateProgressPercentage(), this.populateFilteredChallengeLists(), this.calculateGradientOffsets(t), this.calculateTutorialTier(t), this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties(), this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories(), this.showOnlyTutorialChallenges && this.challenges.sort((t, e) => t.tutorialOrder - e.tutorialOrder), this.spinner.hide()
                        }, t => {
                            this.challenges = [], console.log(t)
                        })
                    }, t => console.log(t)), this.ngZone.runOutsideAngular(() => {
                        this.io.socket().on("challenge solved", t => {
                            if (t && t.challenge) {
                                for (let e = 0; e < this.challenges.length; e++) if (this.challenges[e].name === t.name) {
                                    this.challenges[e].solved = !0;
                                    break
                                }
                                this.calculateProgressPercentage(), this.populateFilteredChallengeLists(), this.calculateGradientOffsets(this.challenges), this.calculateTutorialTier(this.challenges)
                            }
                        })
                    })
                }

                augmentHintText(t) {
                    t.disabledEnv ? (this.numDisabledChallenges++, this.disabledEnv = t.disabledEnv, this.translate.get("CHALLENGE_UNAVAILABLE", {env: t.disabledEnv}).subscribe(e => {
                        t.hint = e
                    }, e => {
                        t.hint = e
                    })) : t.hintUrl && (t.hint ? this.translate.get("CLICK_FOR_MORE_HINTS").subscribe(e => {
                        t.hint += " " + e
                    }, e => {
                        t.hint += " " + e
                    }) : this.translate.get("CLICK_TO_OPEN_HINTS").subscribe(e => {
                        t.hint = e
                    }, e => {
                        t.hint = e
                    }))
                }

                trustDescriptionHtml(t) {
                    t.description = this.sanitizer.bypassSecurityTrustHtml(t.description)
                }

                calculateProgressPercentage() {
                    let t = 0;
                    for (let e = 0; e < this.challenges.length; e++) t += this.challenges[e].solved ? 1 : 0;
                    this.percentChallengesSolved = (100 * t / this.challenges.length).toFixed(0)
                }

                calculateTutorialTier(t) {
                    this.allTutorialsCompleted = !0, this.isLastTutorialsTier = !0, this.tutorialsTier = 1;
                    for (let e = 1; e <= 6; e++) {
                        const a = t.filter(t => t.tutorialOrder && t.difficulty === e).length,
                            i = t.filter(t => t.tutorialOrder && t.difficulty === e && t.solved).length;
                        this.allTutorialsCompleted = this.allTutorialsCompleted && a === i, this.tutorialsTier === e && a === i && this.tutorialsTier++
                    }
                    if (!this.allTutorialsCompleted) {
                        this.isLastTutorialsTier = 0 === t.filter(t => t.tutorialOrder && !t.solved && t.difficulty > this.tutorialsTier).length;
                        for (let t = 1; t <= this.tutorialsTier; t++) this.displayedDifficulties.includes(t) || this.toggleDifficulty(this.tutorialsTier)
                    }
                }

                calculateGradientOffsets(t) {
                    for (let e = 1; e <= 6; e++) this.offsetValue[e - 1] = this.calculateGradientOffset(t, e)
                }

                calculateGradientOffset(t, e) {
                    let a = 0, i = 0;
                    for (let n = 0; n < t.length; n++) t[n].difficulty === e && (i++, t[n].solved && a++);
                    let o = Math.round(100 * a / i);
                    return o = 100 - o, +o + "%"
                }

                toggleDifficulty(t) {
                    this.displayedDifficulties.includes(t) ? this.displayedDifficulties = this.displayedDifficulties.filter(e => e !== t) : this.displayedDifficulties.push(t), localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties)), this.toggledMajorityOfDifficulties = this.determineToggledMajorityOfDifficulties()
                }

                toggleAllDifficulty() {
                    this.toggledMajorityOfDifficulties ? (this.displayedDifficulties = [], this.toggledMajorityOfDifficulties = !1) : (this.displayedDifficulties = this.availableDifficulties, this.toggledMajorityOfDifficulties = !0), localStorage.setItem("displayedDifficulties", JSON.stringify(this.displayedDifficulties))
                }

                toggleShowSolvedChallenges() {
                    this.showSolvedChallenges = !this.showSolvedChallenges, localStorage.setItem("showSolvedChallenges", JSON.stringify(this.showSolvedChallenges))
                }

                toggleShowDisabledChallenges() {
                    this.showDisabledChallenges = !this.showDisabledChallenges, localStorage.setItem("showDisabledChallenges", JSON.stringify(this.showDisabledChallenges))
                }

                toggleShowOnlyTutorialChallenges() {
                    this.showOnlyTutorialChallenges = !this.showOnlyTutorialChallenges, localStorage.setItem("showOnlyTutorialChallenges", JSON.stringify(this.showOnlyTutorialChallenges)), this.challenges.sort(this.showOnlyTutorialChallenges ? (t, e) => t.tutorialOrder - e.tutorialOrder : (t, e) => t.name < e.name ? -1 : t.name > e.name ? 1 : 0)
                }

                toggleShowChallengeCategory(t) {
                    this.displayedChallengeCategories.includes(t) ? this.displayedChallengeCategories = this.displayedChallengeCategories.filter(e => e !== t) : this.displayedChallengeCategories.push(t), localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories)), this.toggledMajorityOfCategories = this.determineToggledMajorityOfCategories()
                }

                toggleAllChallengeCategory() {
                    this.toggledMajorityOfCategories ? (this.displayedChallengeCategories = [], this.toggledMajorityOfCategories = !1) : (this.displayedChallengeCategories = this.availableChallengeCategories, this.toggledMajorityOfCategories = !0), localStorage.setItem("displayedChallengeCategories", JSON.stringify(this.displayedChallengeCategories))
                }

                determineToggledMajorityOfDifficulties() {
                    return this.displayedDifficulties.length > this.availableDifficulties.length / 2
                }

                determineToggledMajorityOfCategories() {
                    return this.displayedChallengeCategories.length > this.availableChallengeCategories.length / 2
                }

                filterToDataSource(t) {
                    t = t.filter(t => !(!this.displayedDifficulties.includes(t.difficulty) || !this.displayedChallengeCategories.includes(t.category) || !this.showSolvedChallenges && t.solved || !this.showDisabledChallenges && t.disabledEnv || this.showOnlyTutorialChallenges && !t.hasTutorial));
                    let e = new E.o;
                    return e.data = t, e
                }

                populateFilteredChallengeLists() {
                    for (const t of this.availableDifficulties) 0 === this.challenges.length ? (this.totalChallengesOfDifficulty[t - 1] = [], this.solvedChallengesOfDifficulty[t - 1] = []) : (this.totalChallengesOfDifficulty[t - 1] = this.challenges.filter(e => e.difficulty === t), this.solvedChallengesOfDifficulty[t - 1] = this.challenges.filter(e => e.difficulty === t && !0 === e.solved))
                }

                startHackingInstructor(t) {
                    console.log(`Starting instructions for challenge "${t}"`), a.e(5).then(a.bind(null, "s2oO")).then(e => {
                        e.startHackingInstructorFor(t)
                    })
                }

                trackById(t, e) {
                    return e.id
                }

                times(t) {
                    return Array(t).fill("\u2605")
                }

                saveBackup() {
                    this.localBackupService.save(this.appName.toLowerCase().replace(/ /, "_"))
                }

                restoreBackup(t) {
                    this.localBackupService.restore(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(b), i.Nb(ao), i.Nb(o.c), i.Nb(i.B), i.Nb(Qe), i.Nb(ro.c), i.Nb(f.e), i.Nb(no))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-score-board"]],
                decls: 43,
                vars: 44,
                consts: [["fxLayout", "column"], [1, "confirmation"], ["mode", "determinate", 3, "color", "value"], ["fxLayout", "row wrap", 1, "star-container"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], ["id", "btnToggleAllDifficulties", 1, "mat-button", 3, "disabled", "click"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-trophy"], ["id", "btnToggleShowOnlyTutorialChallenges", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change"], ["matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngIf"], ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], [1, "form-group"], ["type", "file", 2, "display", "none", 3, "change"], ["restoreBackupFile", ""], ["mat-fab", "", "class", "backupButton", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["class", "disabled-challenges-infoBox mat-button", 3, "innerHTML", 4, "ngIf"], ["fxLayout", "row wrap", 1, "category-container"], ["class", "category-toggle", "appearance", "legacy", "matTooltipPosition", "above", 3, "checked", "disabled", "matTooltip", "change", 4, "ngFor", "ngForOf"], [1, "mat-button", 3, "disabled", "click"], [3, "dataSource", "trackBy", 4, "ngIf"], ["fxLayout", "row", "fxLayout.lt-lg", "column", 4, "ngIf"], ["src", "assets/public/images/padding/1px.png"], ["type", "timer", "size", "large", 1, "overlay-fullscreen"], [1, "fa-4x", "fa-layers", "fa-fw", 2, "display", "block", "margin", "5px"], ["aria-hidden", "true", "data-prefix", "fa", "data-icon", "star", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 576 512", "data-fa-i2svg", "", "stroke-width", "10", 1, "svg-inline--fa", "fa-star", "fa-w-18", "star-border"], ["x1", "0", "x2", "0", "y1", "0", "y2", "100%", 3, "id"], [1, "empty-star"], [1, "filled-star"], ["d", "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"], ["data-fa-transform", "shrink-9", 1, "fa-layers-text", "fa-inverse", 2, "font-weight", "900"], ["aria-hidden", "true", 1, "fa-2x", "fas", "fa-exclamation-circle"], ["mat-fab", "", "color", "primary", "aria-label", "Button to save local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"], ["mat-fab", "", "color", "primary", "aria-label", "Button to restore local backup", "matTooltipPosition", "above", 1, "backupButton", 3, "matTooltip", "click"], [1, "disabled-challenges-infoBox", "mat-button", 3, "innerHTML"], ["appearance", "legacy", "matTooltipPosition", "above", 1, "category-toggle", 3, "checked", "disabled", "matTooltip", "change"], [3, "dataSource", "trackBy"], ["matColumnDef", "name"], ["fxShow", "", "fxHide.lt-sm", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-sm", "", 4, "matCellDef"], ["matColumnDef", "difficulty"], ["fxShow", "", "fxHide.lt-md", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-md", "", 4, "matCellDef"], ["matColumnDef", "description"], ["fxFlex", "1 1 50%", "translate", "", 4, "matHeaderCellDef"], ["fxFlex", "1 1 50%", 4, "matCellDef"], ["matColumnDef", "category"], ["fxShow", "", "fxHide.lt-lg", "", "translate", "", 4, "matHeaderCellDef"], ["fxShow", "", "fxHide.lt-lg", "", 4, "matCellDef"], ["matColumnDef", "tags"], ["matColumnDef", "status"], ["translate", "", 4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""], ["fxShow", "", "fxHide.lt-sm", ""], ["fxShow", "", "fxHide.lt-md", "", "translate", ""], ["fxShow", "", "fxHide.lt-md", ""], [4, "ngFor", "ngForOf"], ["fxFlex", "1 1 50%", "translate", ""], ["fxFlex", "1 1 50%"], [3, "innerHTML"], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["fxShow", "", "fxHide.lt-lg", ""], [4, "ngIf"], [3, "matTooltip"], ["translate", ""], [3, "challenge", "allowRepeatNotifications", "showChallengeHints"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", "class", "hacking-instructor-button", 3, "matTooltip", "click", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 1, "hacking-instructor-button", 3, "matTooltip", "click"], ["target", "_blank", 3, "href"], ["mat-raised-button", "", "color", "accent", "matTooltipPosition", "above", 1, "vulnerability-mitigation-button", 3, "matTooltip"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", "class", "primary-notification", 3, "innerHTML", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", "class", "warn-notification", 3, "innerHTML", 4, "ngIf"], ["fxFlex", "40%", "fxFlex.lt-lg", "100%", 1, "primary-notification", 3, "innerHTML"], ["fxFlex", "20%", "fxFlex.lt-lg", "100%", 1, "warn-notification", 3, "innerHTML"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card"), i.Tb(2, "mat-card-title"), i.Hc(3), i.fc(4, "translate"), i.Tb(5, "small", 1), i.Hc(6), i.Sb(), i.Sb(), i.Ob(7, "mat-progress-bar", 2), i.Sb(), i.Tb(8, "mat-card"), i.Tb(9, "div", 3), i.Fc(10, To, 14, 23, "mat-button-toggle", 4), i.Tb(11, "button", 5), i.ac("click", (function () {
                        return e.toggleAllDifficulty()
                    })), i.Hc(12), i.fc(13, "translate"), i.Sb(), i.Tb(14, "mat-button-toggle", 6), i.ac("change", (function () {
                        return e.toggleShowSolvedChallenges()
                    })), i.fc(15, "translate"), i.Ob(16, "i", 7), i.Hc(17), i.fc(18, "translate"), i.Sb(), i.Tb(19, "mat-button-toggle", 8), i.ac("change", (function () {
                        return e.toggleShowOnlyTutorialChallenges()
                    })), i.fc(20, "translate"), i.Tb(21, "mat-icon"), i.Hc(22, " school "), i.Sb(), i.Hc(23), i.fc(24, "translate"), i.Sb(), i.Fc(25, vo, 5, 11, "mat-button-toggle", 9), i.Fc(26, Co, 4, 3, "button", 10), i.Tb(27, "div", 11), i.Tb(28, "input", 12, 13), i.ac("change", (function (t) {
                        return e.restoreBackup(t.target.files.item(0))
                    })), i.Sb(), i.Sb(), i.Fc(30, wo, 4, 3, "button", 14), i.Fc(31, ko, 2, 7, "div", 15), i.Sb(), i.Ob(32, "mat-divider"), i.Tb(33, "div", 16), i.Fc(34, Oo, 5, 13, "mat-button-toggle", 17), i.Tb(35, "button", 18), i.ac("click", (function () {
                        return e.toggleAllChallengeCategory()
                    })), i.Hc(36), i.fc(37, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Tb(38, "mat-card"), i.Fc(39, qo, 21, 4, "mat-table", 19), i.Sb(), i.Fc(40, Qo, 4, 2, "div", 20), i.Sb(), i.Ob(41, "img", 21), i.Ob(42, "ngx-spinner", 22)), 2 & t && (i.Bb(3), i.Jc("", i.gc(4, 24, "TITLE_SCORE_BOARD"), " "), i.Bb(3), i.Jc("", e.percentChallengesSolved, "%"), i.Bb(1), i.kc("color", "accent")("value", e.percentChallengesSolved), i.Bb(3), i.kc("ngForOf", e.availableDifficulties), i.Bb(1), i.kc("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted), i.Bb(1), i.Ic(i.gc(13, 26, e.toggledMajorityOfDifficulties ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")), i.Bb(2), i.kc("checked", e.showSolvedChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? i.hc(15, 28, "INFO_FULL_CHALLENGE_MODE", i.pc(40, fo, e.challenges.length)) : ""), i.Bb(3), i.Jc(" ", i.gc(18, 31, "BTN_SHOW_SOLVED"), " "), i.Bb(2), i.kc("checked", e.showOnlyTutorialChallenges)("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted)("matTooltip", e.restrictToTutorialsFirst && !e.allTutorialsCompleted ? i.hc(20, 33, "INFO_FULL_CHALLENGE_MODE", i.pc(42, fo, e.challenges.length)) : ""), i.Bb(4), i.Jc(" ", i.gc(24, 36, "BTN_SHOW_ONLY_TUTORIALS"), " "), i.Bb(2), i.kc("ngIf", e.numDisabledChallenges > 0), i.Bb(1), i.kc("ngIf", e.localBackupEnabled), i.Bb(4), i.kc("ngIf", e.localBackupEnabled), i.Bb(1), i.kc("ngIf", e.numDisabledChallenges > 0 && e.showDisabledChallenges), i.Bb(3), i.kc("ngForOf", e.availableChallengeCategories), i.Bb(1), i.kc("disabled", e.restrictToTutorialsFirst && !e.allTutorialsCompleted), i.Bb(1), i.Ic(i.gc(37, 38, e.toggledMajorityOfCategories ? "BTN_HIDE_ALL" : "BTN_SHOW_ALL")), i.Bb(3), i.kc("ngIf", e.challenges), i.Bb(1), i.kc("ngIf", e.showContributionInfoBox || e.questionnaireUrl))
                },
                directives: [p.d, g.a, g.f, co.a, L.k, so.a, Ce.a, ve.a, L.l, Fe.a, ro.a, S.a, E.n, E.c, E.i, E.b, E.k, E.m, E.h, D.b, f.a, E.a, p.b, lo.b, lo.a, go, E.j, E.l],
                pipes: [f.d],
                styles: ["footer[_ngcontent-%COMP%], mat-card[_ngcontent-%COMP%], mat-expansion-panel[_ngcontent-%COMP%]{margin-bottom:35px;margin-left:35px;margin-right:35px;min-width:300px}.category-container[_ngcontent-%COMP%], mat-table[_ngcontent-%COMP%]{margin-top:25px}.star-container[_ngcontent-%COMP%]{margin-bottom:10px;margin-top:25px}.star-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover{cursor:pointer}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:auto}.mat-column-status[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]{cursor:pointer}.heading[_ngcontent-%COMP%]{padding-top:5px}.mat-raised-button[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.category-toggle[_ngcontent-%COMP%]{font-size:small}.overlay-fullscreen[_ngcontent-%COMP%]     .black-overlay{position:fixed}.hacking-instructor-button[_ngcontent-%COMP%], .vulnerability-mitigation-button[_ngcontent-%COMP%]{margin-left:8px}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.disabled-challenges-infoBox[_ngcontent-%COMP%]{height:100%;margin:0;align-self:center;color:#e64a19;cursor:default}.disabled-challenges-infoBox[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-style:normal;color:#546e7a}.backupButton[_ngcontent-%COMP%]{margin-left:15px;align-self:center}"]
            }), t
        })(), Ko = (() => {
            class t {
                constructor(t) {
                    this.http = t
                }

                verify(t) {
                    return this.http.post("./rest/2fa/verify", {
                        tmpToken: localStorage.getItem("totp_tmp_token"),
                        totpToken: t
                    }).pipe(Object(s.a)(t => t.authentication), Object(l.a)(t => {
                        throw t
                    }))
                }

                status() {
                    return this.http.get("./rest/2fa/status").pipe(Object(s.a)(t => t), Object(l.a)(t => {
                        throw t
                    }))
                }

                setup(t, e, a) {
                    return this.http.post("./rest/2fa/setup", {
                        password: t,
                        setupToken: a,
                        initialToken: e
                    }).pipe(Object(s.a)(() => {
                    }), Object(l.a)(t => {
                        throw t
                    }))
                }

                disable(t) {
                    return this.http.post("./rest/2fa/disable", {password: t}).pipe(Object(s.a)(() => {
                    }), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function Xo(t, e) {
            1 & t && (i.Tb(0, "div", 13), i.Hc(1, "INVALID_TWO_FACTOR_AUTH_TOKEN"), i.Sb())
        }

        u.b.add(m.fb), u.a.watch();
        let Zo = (() => {
            class t {
                constructor(t, e, a, i, o) {
                    this.twoFactorAuthService = t, this.cookieService = e, this.userService = a, this.router = i, this.ngZone = o, this.twoFactorForm = new c.g({token: new c.d("", [c.y.minLength(6), c.y.maxLength(6), c.y.required, c.y.pattern("^[\\d]{6}$")])}), this.errored = !1
                }

                verify() {
                    this.twoFactorAuthService.verify(this.twoFactorForm.value.token).subscribe(t => {
                        localStorage.setItem("token", t.token);
                        let e = new Date;
                        e.setHours(e.getHours() + 8), this.cookieService.set("token", t.token, e, "/"), sessionStorage.setItem("bid", t.bid.toString()), this.userService.isLoggedIn.next(!0), this.ngZone.run(() => this.router.navigate(["/search"]))
                    }, t => (this.errored = !0, setTimeout(() => {
                        this.errored = !1
                    }, 5e3), t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ko), i.Nb(r.a), i.Nb(w), i.Nb(y.b), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-two-factor-auth-enter"]],
                decls: 27,
                vars: 13,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["class", "error", "style", "margin-bottom: 10px;", "translate", "", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-container"], ["id", "inputToken", "appearance", "outline", "color", "accent"], ["formControlName", "token", "type", "text", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", "matInput", "", "id", "totpToken", "aria-label", "Field for entering the Two Factor token", 3, "placeholder"], ["tokenInput", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The code to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "color", "primary", "mat-raised-button", "", "id", "totpSubmitButton", "aria-label", "Button to confirm the input", 3, "disabled"], [1, "material-icons"], ["translate", "", 1, "error", 2, "margin-bottom", "10px"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_TWO_FACTOR_AUTHENTICATION"), i.Sb(), i.Tb(4, "p", 2), i.Hc(5, "TITLE_TWO_FACTOR_AUTH_ENTER"), i.Sb(), i.Fc(6, Xo, 2, 0, "div", 3), i.Tb(7, "form", 4), i.ac("ngSubmit", (function () {
                        return e.verify()
                    })), i.Tb(8, "div", 5), i.Tb(9, "mat-form-field", 6), i.Tb(10, "mat-label", 2), i.Hc(11, "LABEL_TWO_FACTOR_AUTH_TOKEN"), i.Sb(), i.Ob(12, "input", 7, 8), i.fc(14, "translate"), i.Tb(15, "mat-icon", 9), i.fc(16, "translate"), i.Hc(17, " help_outline "), i.Sb(), i.Tb(18, "mat-hint", 10), i.Hc(19), i.Sb(), i.Tb(20, "mat-error", 2), i.Hc(21, "INVALID_TWO_FACTOR_AUTH_TOKEN"), i.Sb(), i.Sb(), i.Sb(), i.Tb(22, "button", 11), i.Tb(23, "i", 12), i.Hc(24, " lock_open "), i.Sb(), i.Hc(25), i.fc(26, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(13);
                        i.Bb(6), i.kc("ngIf", e.errored), i.Bb(1), i.kc("formGroup", e.twoFactorForm), i.Bb(5), i.lc("placeholder", i.gc(14, 7, "2FA_ENTER_CODE_PLACEHOLDER")), i.Bb(3), i.lc("matTooltip", i.gc(16, 9, "INITIAL_TOKEN_TOOLTIP")), i.Bb(4), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/6"), i.Bb(3), i.kc("disabled", e.twoFactorForm.invalid), i.Bb(3), i.Jc(" ", i.gc(26, 11, "BTN_LOGIN"), " ")
                    }
                },
                directives: [p.c, g.a, f.a, L.l, c.A, c.p, c.h, Et.c, Et.g, c.c, Lt.b, c.o, c.f, c.k, c.j, c.u, ve.a, Et.h, Ce.a, Et.f, Et.b, S.a],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:25%}#totpSubmitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}#inputToken[_ngcontent-%COMP%]{width:100%}"]
            }), t
        })();
        u.b.add(m.lb, m.v), u.a.watch();
        let tn = (() => {
            class t {
                constructor(t, e) {
                    this.route = t, this.translate = e, this.error = null
                }

                ngOnInit() {
                    const t = this.route.snapshot.queryParams.error;
                    t && this.translate.get(t).subscribe(t => {
                        this.error = t
                    }, t => {
                        this.error = t
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(y.a), i.Nb(f.e))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-error-page"]],
                decls: 7,
                vars: 1,
                consts: [[1, "warn-notification", "mat-elevation-z6"], [1, "mat-display-3"], [1, "fas", "fa-hand-paper"], [1, "mat-subheading-2"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "div"), i.Tb(2, "div", 1), i.Ob(3, "i", 2), i.Hc(4, " 403"), i.Sb(), i.Tb(5, "span", 3), i.Hc(6), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(6), i.Ic(e.error))
                },
                directives: [g.a],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }), t
        })();
        var en = a("HeVh"), an = a("q7Ft");
        let on = (() => {
            class t {
                constructor(t) {
                    this.breakpointObserver = t, this.windowWidth = window.innerWidth, this.isHandset$ = this.breakpointObserver.observe(en.b.Handset).pipe(Object(s.a)(t => t.matches))
                }

                ngAfterViewInit() {
                    this.windowWidth = window.innerWidth
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(en.a))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-privacy-security"]],
                decls: 3,
                vars: 0,
                consts: [[1, "sidenav-container"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-sidenav-container", 0), i.Tb(1, "mat-sidenav-content"), i.Ob(2, "router-outlet"), i.Sb(), i.Sb())
                },
                directives: [an.b, an.c, y.f],
                styles: [""]
            }), t
        })();
        var nn = a("WF00");

        function rn(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "div", 5), i.Tb(1, "p", 6), i.Hc(2, "2FA_SUCCESSFUL_SETUP"), i.Sb(), i.Tb(3, "form", 7), i.ac("ngSubmit", (function () {
                    return i.vc(t), i.ec().disable()
                })), i.Tb(4, "h2", 8), i.Hc(5, "REMOVE_TWO_FACTOR_AUTH"), i.Sb(), i.Tb(6, "div", 9), i.Hc(7, "2FA_SETUP_ERROR"), i.Sb(), i.Tb(8, "mat-form-field", 10), i.Tb(9, "mat-label", 6), i.Hc(10, "LABEL_CURRENT_PASSWORD"), i.Sb(), i.Ob(11, "input", 11), i.fc(12, "translate"), i.Sb(), i.Tb(13, "button", 12), i.Tb(14, "i", 13), i.Hc(15, " remove_circle_outline "), i.Sb(), i.Hc(16), i.fc(17, "translate"), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(3), i.kc("formGroup", t.twoFactorDisableForm), i.Bb(3), i.kc("hidden", !(t.errored && !t.twoFactorDisableForm.dirty)), i.Bb(5), i.lc("placeholder", i.gc(12, 5, "MANDATORY_CURRENT_PASSWORD")), i.Bb(2), i.kc("disabled", t.twoFactorDisableForm.invalid), i.Bb(3), i.Jc(" ", i.gc(17, 7, "BTN_REMOVE"), " ")
            }
        }

        function cn(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "form", 14), i.ac("ngSubmit", (function () {
                    return i.vc(t), i.ec().setup()
                })), i.Tb(1, "span", 15), i.Hc(2, "2FA_AUTH_SETUP_INSTRUCTIONS"), i.Sb(), i.Tb(3, "div", 16), i.Ob(4, "qr-code", 17), i.Sb(), i.Tb(5, "div", 9), i.Hc(6, "2FA_SETUP_ERROR"), i.Sb(), i.Tb(7, "mat-form-field", 10), i.Tb(8, "mat-label", 6), i.Hc(9, "LABEL_CURRENT_PASSWORD"), i.Sb(), i.Ob(10, "input", 18), i.fc(11, "translate"), i.Sb(), i.Tb(12, "mat-form-field", 10), i.Tb(13, "mat-label", 6), i.Hc(14, "INITIAL_CODE"), i.Sb(), i.Ob(15, "input", 19, 20), i.fc(17, "translate"), i.Tb(18, "mat-error", 6), i.Hc(19, "INVALID_TWO_FACTOR_AUTH_TOKEN"), i.Sb(), i.Tb(20, "mat-icon", 21), i.fc(21, "translate"), i.Hc(22, " help_outline "), i.Sb(), i.Tb(23, "mat-hint", 22), i.Hc(24), i.Sb(), i.Sb(), i.Tb(25, "button", 23), i.Tb(26, "i", 13), i.Hc(27, " save "), i.Sb(), i.Hc(28), i.fc(29, "translate"), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.sc(16), e = i.ec();
                i.kc("formGroup", e.twoFactorSetupForm), i.Bb(4), i.kc("value", e.totpUrl)("size", 300)("level", "L"), i.Bb(1), i.kc("hidden", !(e.errored && !e.twoFactorSetupForm.dirty)), i.Bb(5), i.lc("placeholder", i.gc(11, 12, "MANDATORY_CURRENT_PASSWORD")), i.Bb(5), i.lc("placeholder", i.gc(17, 14, "INITIAL_CODE_PLACEHOLDER")), i.Cb("data-test-totp-secret", e.totpSecret), i.Bb(5), i.lc("matTooltip", i.gc(21, 16, "INITIAL_TOKEN_TOOLTIP")), i.Bb(4), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/6"), i.Bb(1), i.kc("disabled", e.twoFactorSetupForm.invalid), i.Bb(3), i.Jc(" ", i.gc(29, 18, "BTN_SAVE"), " ")
            }
        }

        u.b.add(m.fb, m.I), u.a.watch();
        let sn = (() => {
            class t {
                constructor(t, e, a, i, o) {
                    this.twoFactorAuthService = t, this.configurationService = e, this.snackBar = a, this.translateService = i, this.snackBarHelperService = o, this.twoFactorSetupForm = new c.g({
                        passwordControl: new c.d("", [c.y.required]),
                        initalTokenControl: new c.d("", [c.y.required, c.y.pattern("^[\\d]{6}$")])
                    }), this.twoFactorDisableForm = new c.g({passwordControl: new c.d("", [c.y.required])}), this.setupStatus = null, this.errored = null, this.appName = "OWASP Juice Shop"
                }

                ngOnInit() {
                    this.updateStatus()
                }

                updateStatus() {
                    const t = this.twoFactorAuthService.status(),
                        e = this.configurationService.getApplicationConfiguration();
                    return Object(Ye.a)([t, e]).subscribe(([{setup: t, email: e, secret: a, setupToken: i}, o]) => {
                        if (this.setupStatus = t, this.appName = o.application.name, !1 === t) {
                            const t = encodeURIComponent(this.appName);
                            this.totpUrl = `otpauth://totp/${t}:${e}?secret=${a}&issuer=${t}`, this.totpSecret = a, this.setupToken = i
                        }
                    }, () => {
                        console.log("Failed to fetch 2fa status")
                    }), t
                }

                setup() {
                    this.twoFactorAuthService.setup(this.twoFactorSetupForm.get("passwordControl").value, this.twoFactorSetupForm.get("initalTokenControl").value, this.setupToken).subscribe(() => {
                        this.setupStatus = !0, this.snackBarHelperService.open("CONFIRM_2FA_SETUP")
                    }, () => {
                        this.twoFactorSetupForm.get("passwordControl").markAsPristine(), this.twoFactorSetupForm.get("initalTokenControl").markAsPristine(), this.errored = !0
                    })
                }

                disable() {
                    this.twoFactorAuthService.disable(this.twoFactorDisableForm.get("passwordControl").value).subscribe(() => {
                        this.updateStatus().subscribe(() => {
                            this.setupStatus = !1
                        }), this.snackBarHelperService.open("CONFIRM_2FA_DISABLE")
                    }, () => {
                        this.twoFactorDisableForm.get("passwordControl").markAsPristine(), this.errored = !0
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ko), i.Nb(b), i.Nb(P.a), i.Nb(f.e), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-two-factor-auth"]],
                decls: 6,
                vars: 2,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["id", "2fa-setup-title", "translate", ""], ["id", "2fa-setup-successfully", 4, "ngIf"], ["class", "form-container", "id", "two-factor-auth-setup", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "2fa-setup-successfully"], ["translate", ""], ["id", "two-factor-auth-disable", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "two-factor-auth-disable-title", "translate", ""], ["translate", "", 1, "error", 3, "hidden"], ["appearance", "outline", "color", "accent"], ["id", "currentPasswordDisable", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["type", "submit", "id", "disableTwoFactorAuth", "mat-raised-button", "", "color", "warn", "aria-label", "Button to remove the two-factor authentication", 3, "disabled"], [1, "material-icons"], ["id", "two-factor-auth-setup", 1, "form-container", 3, "formGroup", "ngSubmit"], ["id", "2fa-setup-instructions", "translate", ""], ["fxLayoutAlign", "center", 1, "two-factor-qr-code"], [3, "value", "size", "level"], ["id", "currentPasswordSetup", "formControlName", "passwordControl", "type", "password", "matInput", "", "aria-label", "Field to enter the current password", "autocomplete", "off", 3, "placeholder"], ["id", "initalToken", "formControlName", "initalTokenControl", "type", "text", "matInput", "", "aria-label", "Field to enter the initial token. This must have 6 digits.", "minlength", "6", "maxlength", "6", "pattern", "^[\\d]{6}$", 3, "placeholder"], ["initToken", ""], ["matSuffix", "", "matTooltipPosition", "right", "aria-label", "The token to be entered from the authenticator must have 6 digits.", 3, "matTooltip"], ["align", "end"], ["type", "submit", "id", "setupTwoFactorAuth", "mat-raised-button", "", "color", "primary", "aria-label", "Button to complete the two-factor configuration", 3, "disabled"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_TWO_FACTOR_AUTH_CONFIG"), i.Sb(), i.Fc(4, rn, 18, 9, "div", 3), i.Fc(5, cn, 30, 20, "form", 4), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.kc("ngIf", !0 === e.setupStatus), i.Bb(1), i.kc("ngIf", !1 === e.setupStatus))
                },
                directives: [p.c, g.a, f.a, L.l, c.A, c.p, c.h, Et.c, Et.g, c.c, Lt.b, c.o, c.f, S.a, nn.a, c.k, c.j, c.u, Et.b, ve.a, Et.h, Ce.a, Et.f],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}#disableTwoFactorAuth[_ngcontent-%COMP%], #setupTwoFactorAuth[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.two-factor-qr-code[_ngcontent-%COMP%]{margin:16px 0}#two-factor-auth-disable[_ngcontent-%COMP%]{margin-top:32px}#two-factor-auth-disable-title[_ngcontent-%COMP%]{margin-bottom:0}button[_ngcontent-%COMP%]{margin-top:5px}"]
            }), t
        })(), ln = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = "."
                }

                getCaptcha() {
                    return this.http.get(this.hostServer + "/rest/image-captcha/").pipe(Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function bn(t, e) {
            if (1 & t && (i.Tb(0, "div"), i.Tb(1, "p", 13), i.Hc(2), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(2), i.Ic(t.error)
            }
        }

        function un(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_CAPTCHA "), i.Sb())
        }

        function dn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_CAPTCHA "), i.Sb())
        }

        const mn = function () {
            return {length: "5"}
        };

        function hn(t, e) {
            if (1 & t && (i.Tb(0, "div"), i.Tb(1, "div"), i.Tb(2, "span", 14), i.Hc(3, "CAPTCHA "), i.Tb(4, "span"), i.Hc(5, ":"), i.Sb(), i.Sb(), i.Ob(6, "div", 15), i.Sb(), i.Tb(7, "mat-form-field", 16), i.Tb(8, "mat-label", 2), i.Hc(9, "ENTER_CAPTCHA"), i.Sb(), i.Ob(10, "input", 17, 18), i.fc(12, "translate"), i.Tb(13, "mat-hint", 19), i.Hc(14), i.Sb(), i.Fc(15, un, 2, 0, "mat-error", 20), i.Fc(16, dn, 2, 0, "mat-error", 20), i.Sb(), i.Sb()), 2 & t) {
                const t = i.sc(11), e = i.ec();
                i.Bb(6), i.kc("innerHTML", e.captcha, i.wc), i.Bb(4), i.lc("placeholder", i.hc(12, 6, "TYPE_THESE_LETTERS", i.oc(9, mn))), i.kc("formControl", e.captchaControl), i.Bb(4), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/5"), i.Bb(1), i.kc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.required), i.Bb(1), i.kc("ngIf", e.captchaControl.invalid && e.captchaControl.errors.minlength)
            }
        }

        let pn = (() => {
            class t {
                constructor(t, e, a) {
                    this.sanitizer = t, this.imageCaptchaService = e, this.dataSubjectService = a, this.captchaControl = new c.d("", [c.y.required, c.y.minLength(5)]), this.formatControl = new c.d("", [c.y.required]), this.dataRequest = void 0, this.presenceOfCaptcha = !1
                }

                ngOnInit() {
                    this.needCaptcha(), this.dataRequest = {}
                }

                needCaptcha() {
                    let t = new Date,
                        e = localStorage.getItem("lstdtxprt") ? new Date(JSON.parse(String(localStorage.getItem("lstdtxprt")))) : new Date(0);
                    t.getTime() - e.getTime() < 3e5 && (this.getNewCaptcha(), this.presenceOfCaptcha = !0)
                }

                getNewCaptcha() {
                    this.imageCaptchaService.getCaptcha().subscribe(t => {
                        this.captcha = this.sanitizer.bypassSecurityTrustHtml(t.image)
                    })
                }

                save() {
                    this.presenceOfCaptcha && (this.dataRequest.answer = this.captchaControl.value), this.dataRequest.format = this.formatControl.value, this.dataSubjectService.dataExport(this.dataRequest).subscribe(t => {
                        this.error = null, this.confirmation = t.confirmation, this.userData = t.userData, window.open("", "_blank", "width=500").document.write(this.userData), this.lastSuccessfulTry = new Date, localStorage.setItem("lstdtxprt", JSON.stringify(this.lastSuccessfulTry)), this.ngOnInit(), this.resetForm()
                    }, t => {
                        this.error = t.error, this.confirmation = null, this.resetFormError()
                    })
                }

                resetForm() {
                    this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue(""), this.formatControl.markAsUntouched(), this.formatControl.markAsPristine(), this.formatControl.setValue("")
                }

                resetFormError() {
                    this.captchaControl.markAsUntouched(), this.captchaControl.markAsPristine(), this.captchaControl.setValue("")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(o.c), i.Nb(ln), i.Nb(Jt))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-data-export"]],
                decls: 26,
                vars: 7,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], [4, "ngIf"], ["id", "data-export-form", 1, "form-container"], ["id", "formatControl", "aria-label", "Select an option", 3, "formControl"], ["translate", "", 1, "radio-label"], ["value", "1", "aria-label", "Export Option JSON"], ["value", "2", "aria-label", "Export Option PDF", "disabled", ""], ["value", "3", "aria-label", "Export Option Excel", "disabled", ""], ["type", "submit", "id", "submitButton", "color", "primary", "mat-raised-button", "", "aria-label", "Button to send the request", 2, "margin-top", "15px", 3, "disabled", "click"], [1, "material-icons"], [1, "hint"], [1, "error"], ["translate", "", 2, "float", "left", "margin-top", "40px", "font-weight", "500", "margin-bottom", "20px"], [1, "captcha-image", 2, "margin-left", "10px", 3, "innerHTML"], ["appearance", "outline", "color", "accent", 2, "margin-top", "10px", "width", "100%"], ["type", "text", "matInput", "", "maxlength", "5", "aria-label", "Input for the CAPTCHA", 3, "formControl", "placeholder"], ["captchaInput", ""], ["align", "end"], ["translate", "", 4, "ngIf"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_REQUEST_DATA_EXPORT"), i.Sb(), i.Fc(4, bn, 3, 1, "div", 3), i.Tb(5, "div", 4), i.Tb(6, "mat-radio-group", 5), i.Tb(7, "mat-label", 6), i.Hc(8, "EXPORT_LABEL "), i.Tb(9, "span"), i.Hc(10, ":"), i.Sb(), i.Sb(), i.Tb(11, "mat-radio-button", 7), i.Hc(12, "JSON"), i.Sb(), i.Tb(13, "mat-radio-button", 8), i.Hc(14, "PDF"), i.Sb(), i.Tb(15, "mat-radio-button", 9), i.Hc(16, "Excel"), i.Sb(), i.Sb(), i.Fc(17, hn, 17, 10, "div", 3), i.Sb(), i.Tb(18, "button", 10), i.ac("click", (function () {
                        return e.save()
                    })), i.Tb(19, "i", 11), i.Hc(20, " save_alt "), i.Sb(), i.Hc(21), i.fc(22, "translate"), i.Sb(), i.Tb(23, "div", 12), i.Tb(24, "span", 2), i.Hc(25, "DATA_EXPORT_HINT"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.kc("ngIf", e.error), i.Bb(2), i.kc("formControl", e.formatControl), i.Bb(11), i.kc("ngIf", e.presenceOfCaptcha), i.Bb(1), i.kc("disabled", e.formatControl.invalid || e.captchaControl.invalid && e.presenceOfCaptcha), i.Bb(3), i.Jc(" ", i.gc(22, 5, "BTN_REQUEST"), " "))
                },
                directives: [p.c, g.a, f.a, L.l, Ii.b, c.o, c.e, Et.g, Ii.a, S.a, Et.c, Lt.b, c.c, c.j, Et.f, Et.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;height:auto;margin-bottom:50px;margin-left:auto;margin-right:auto;min-width:320px;width:25%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;width:60%}.hint[_ngcontent-%COMP%]{display:flex;font-size:10px;justify-content:center;margin-top:5px}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-bottom:16px;margin-left:16px}.radio-label[_ngcontent-%COMP%]{font-weight:500;margin-right:8px}.captcha-image[_ngcontent-%COMP%]{float:left;margin-bottom:10px;margin-top:20px}"]
            }), t
        })(), gn = (() => {
            class t {
                constructor(t) {
                    this.sanitizer = t, this.lastLoginIp = "?"
                }

                ngOnInit() {
                    try {
                        this.parseAuthToken()
                    } catch (t) {
                        console.log(t)
                    }
                }

                parseAuthToken() {
                    let t = {};
                    const e = localStorage.getItem("token");
                    e && (t = I(e), t.data.lastLoginIp && (this.lastLoginIp = this.sanitizer.bypassSecurityTrustHtml(`<small>${t.data.lastLoginIp}</small>`)))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(o.c))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-last-login-ip"]],
                decls: 8,
                vars: 1,
                consts: [[1, "ipCard", "mat-elevation-z6"], ["translate", ""], [2, "margin-bottom", "15px"], [3, "innerHTML"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "h1", 1), i.Hc(2, "LAST_LOGIN_IP"), i.Sb(), i.Tb(3, "p", 2), i.Tb(4, "span", 1), i.Hc(5, "IP_ADDRESS"), i.Sb(), i.Hc(6, "\xa0\xa0"), i.Ob(7, "span", 3), i.Sb(), i.Sb()), 2 & t && (i.Bb(7), i.kc("innerHTML", e.lastLoginIp, i.wc))
                },
                directives: [g.a, f.a],
                styles: [".ipCard[_ngcontent-%COMP%]{display:block;margin:0 auto 5%;min-width:320px;width:25%}"]
            }), t
        })(), fn = (() => {
            class t {
                constructor(t, e) {
                    this._document = t, this.configurationService = e, this.applicationName = "OWASP Juice Shop"
                }

                ngOnInit() {
                    this.applicationUrl = this._document.location.protocol + "//" + this._document.location.hostname, this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.name && (this.applicationName = t.application.name), this.privacyContactEmail = t && t.application && t.application.privacyContactEmail ? t.application.privacyContactEmail : "donotreply@" + this._document.location.hostname
                    }, t => console.log(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(L.d), i.Nb(b))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-privacy-policy"]],
                decls: 169,
                vars: 9,
                consts: [[1, "mat-elevation-z6"], [1, "privacy-policy"], ["translate", ""], [1, "hot"], ["href", "https://www.freeprivacypolicy.com/", "aria-label", "Link to the page where the privacy policy was created"], [1, "divider"], ["src", "assets/public/images/padding/81px.png"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "section", 1), i.Tb(2, "h1", 2), i.Hc(3, "TITLE_PRIVACY_POLICY"), i.Sb(), i.Tb(4, "p"), i.Hc(5, "Effective date: March 15, 2019"), i.Sb(), i.Tb(6, "p"), i.Hc(7), i.Tb(8, "span", 3), i.Hc(9), i.Sb(), i.Hc(10, ' website (the "Service").'), i.Sb(), i.Tb(11, "p"), i.Hc(12), i.Tb(13, "a", 4), i.Hc(14, "Free Privacy Policy website"), i.Sb(), i.Hc(15, "."), i.Sb(), i.Tb(16, "p"), i.Hc(17), i.Sb(), i.Ob(18, "mat-divider", 5), i.Tb(19, "h2"), i.Hc(20, "A. Information Collection And Use"), i.Sb(), i.Tb(21, "p"), i.Hc(22, "We collect several different types of information for various purposes to provide and improve our Service to you."), i.Sb(), i.Tb(23, "h3"), i.Hc(24, "A1. Types of Data Collected"), i.Sb(), i.Tb(25, "h4"), i.Hc(26, "A1.1 Personal Data"), i.Sb(), i.Tb(27, "p"), i.Hc(28, 'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:'), i.Sb(), i.Tb(29, "ul"), i.Tb(30, "li"), i.Hc(31, "Email address"), i.Sb(), i.Tb(32, "li"), i.Hc(33, "Address, State, Province, ZIP/Postal code, City"), i.Sb(), i.Tb(34, "li"), i.Hc(35, "Cookies and Usage Data"), i.Sb(), i.Sb(), i.Tb(36, "h4"), i.Hc(37, "A1.2 Usage Data"), i.Sb(), i.Tb(38, "p"), i.Tb(39, "span", 3), i.Hc(40, "We may also"), i.Sb(), i.Hc(41, ' collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.'), i.Sb(), i.Tb(42, "h4"), i.Hc(43, "A1.3 Tracking & Cookies Data"), i.Sb(), i.Tb(44, "p"), i.Hc(45, "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."), i.Sb(), i.Tb(46, "p"), i.Hc(47, "Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."), i.Sb(), i.Tb(48, "p"), i.Hc(49, "You can "), i.Tb(50, "span", 3), i.Hc(51, "instruct you"), i.Sb(), i.Hc(52, "r browser "), i.Tb(53, "span", 3), i.Hc(54, "to refuse all"), i.Sb(), i.Hc(55, " cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."), i.Sb(), i.Tb(56, "p"), i.Hc(57, "Examples of Cookies we use:"), i.Sb(), i.Tb(58, "ul"), i.Tb(59, "li"), i.Tb(60, "strong"), i.Hc(61, "Session Cookies:"), i.Sb(), i.Hc(62, " \xa0We use Session Cookies to operate our Service."), i.Sb(), i.Tb(63, "li"), i.Tb(64, "strong"), i.Hc(65, "Preference Cookies:"), i.Sb(), i.Hc(66, "\xa0We use Preference Cookies to remember your preferences and various settings. "), i.Sb(), i.Tb(67, "li"), i.Tb(68, "strong"), i.Hc(69, "Security Cookies:"), i.Sb(),i.Hc(70, "\xa0We use Security Cookies for security purposes."),i.Sb(),i.Sb(),i.Tb(71, "h3"),i.Hc(72, "A2. Use of Data"),i.Sb(),i.Tb(73, "p"),i.Hc(74),i.Sb(),i.Tb(75, "ul"),i.Tb(76, "li"),i.Hc(77, "To provide and maintain the Service"),i.Sb(),i.Tb(78, "li"),i.Hc(79, "To notify you about changes to our Service"),i.Sb(),i.Tb(80, "li"),i.Hc(81, "To allow you to participate in interactive features of our Service when you choose to do so"),i.Sb(),i.Tb(82, "li"),i.Hc(83, "To provide customer care and support"),i.Sb(),i.Tb(84, "li"),i.Hc(85, "To provide analysis or valuable information so that we can improve the Service"),i.Sb(),i.Tb(86, "li"),i.Hc(87, "To monitor the usage of the Service"),i.Sb(),i.Tb(88, "li"),i.Hc(89, "To detect, prevent and address technical issues"),i.Sb(),i.Sb(),i.Ob(90, "mat-divider", 5),i.Tb(91, "h2"),i.Hc(92, "B. Transfer Of Data"),i.Sb(),i.Tb(93, "p"),i.Hc(94, "Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."),i.Sb(),i.Tb(95, "p"),i.Hc(96, "If you are located outside Germany and choose to provide information to us, please note that we transfer the data, including Personal Data, to Germany and process it there."),i.Sb(),i.Tb(97, "p"),i.Hc(98, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."),i.Sb(),i.Tb(99, "p"),i.Hc(100),i.Tb(101, "span", 3),i.Hc(102, "reasonably necessary"),i.Sb(),i.Hc(103, " to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."),i.Sb(),i.Ob(104, "mat-divider", 5),i.Tb(105, "h2"),i.Hc(106, "C. Disclosure Of Data"),i.Sb(),i.Tb(107, "h3"),i.Hc(108, "C1. Legal Requirements"),i.Sb(),i.Tb(109, "p"),i.Hc(110),i.Sb(),i.Tb(111, "ul"),i.Tb(112, "li"),i.Hc(113, "To comply with a legal obligation"),i.Sb(),i.Tb(114, "li"),i.Hc(115),i.Sb(),i.Tb(116, "li"),i.Hc(117, "To prevent or investigate possible wrongdoing in connection with the Service"),i.Sb(),i.Tb(118, "li"),i.Hc(119, "To protect the personal safety of users of the Service or the public"),i.Sb(),i.Tb(120, "li"),i.Hc(121, "To protect against legal liability"),i.Sb(),i.Sb(),i.Ob(122, "mat-divider", 5),i.Tb(123, "h2"),i.Hc(124, "D. Security Of Data"),i.Sb(),i.Tb(125, "p"),i.Hc(126, "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."),i.Sb(),i.Ob(127, "mat-divider", 5),i.Tb(128, "h2"),i.Hc(129, "E. Service Providers"),i.Sb(),i.Tb(130, "p"),i.Hc(131, 'We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'),i.Sb(),i.Tb(132, "p"),i.Hc(133, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."),i.Sb(),i.Ob(134, "mat-divider", 5),i.Tb(135, "h2"),i.Hc(136, "F. Links To Other Sites"),i.Sb(),i.Tb(137, "p"),i.Hc(138, "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit."),i.Sb(),i.Tb(139, "p"),i.Hc(140, "We have no control over and assume no "),i.Tb(141, "span", 3),i.Hc(142, "responsibility"),i.Sb(),i.Hc(143, " for the content, privacy policies or practices of any third party sites or services."),i.Sb(),i.Ob(144, "mat-divider", 5),i.Tb(145, "h2"),i.Hc(146, "G. Children's Privacy"),i.Sb(),i.Tb(147, "p"),i.Hc(148, 'Our Service does not address anyone under the age of 18 ("Children").'),i.Sb(),i.Tb(149, "p"),i.Hc(150, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."),i.Sb(),i.Ob(151, "mat-divider", 5),i.Tb(152, "h2"),i.Hc(153, "H. Changes To This Privacy Policy"),i.Sb(),i.Tb(154, "p"),i.Hc(155, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."),i.Sb(),i.Tb(156, "p"),i.Hc(157, 'We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.'),i.Sb(),i.Tb(158, "p"),i.Hc(159, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."),i.Sb(),i.Ob(160, "mat-divider", 5),i.Tb(161, "h2"),i.Hc(162, "Contact Us"),i.Sb(),i.Tb(163, "p"),i.Hc(164, "If you have any questions about this Privacy Policy, please contact us:"),i.Sb(),i.Tb(165, "ul"),i.Tb(166, "li"),i.Hc(167),i.Sb(),i.Sb(),i.Sb(),i.Ob(168, "img", 6),i.Sb()), 2 & t && (i.Bb(7), i.Jc("", e.applicationName, ' ("us", "we", or "our") operates the '), i.Bb(2), i.Ic(e.applicationUrl), i.Bb(3), i.Jc("This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for ", e.applicationName, " is created with the help of the "), i.Bb(5), i.Jc("We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from ", e.applicationUrl, " ."), i.Bb(57), i.Jc("", e.applicationName, " uses the collected data for various purposes:"), i.Bb(26), i.Jc("", e.applicationName, " will take all steps "), i.Bb(10), i.Jc("", e.applicationName, " may disclose your Personal Data in the good faith belief that such action is necessary to:"), i.Bb(5), i.Jc("To protect and defend the rights or property of ", e.applicationName, ""), i.Bb(52), i.Jc("By email: ", e.privacyContactEmail, ""))
                },
                directives: [g.a, f.a, Fe.a],
                styles: [".privacy-policy[_ngcontent-%COMP%]{margin-left:8.33333%;width:83.3333%}.privacy-policy[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{margin-bottom:15px}p[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}mat-card[_ngcontent-%COMP%]{display:block;margin-bottom:50px;margin-left:auto;margin-right:auto;width:90%}h2[_ngcontent-%COMP%]{padding-top:10px}h3[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:550}strong[_ngcontent-%COMP%]{font-style:italic}h4[_ngcontent-%COMP%]{text-decoration:underline}.hot[_ngcontent-%COMP%]:hover{text-shadow:0 0 20px #fefcc9,10px -10px 30px #feec85,-20px -20px 40px #ffae34,20px -40px 50px #ec760c,-20px -60px 60px #cd4606,0 -80px 70px #973716,10px -90px 80px #451b0e}.divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:9%!important;width:82%!important}"]
            }), t
        })();

        function Sn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_COUNTRY "), i.Sb())
        }

        function Tn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_NAME "), i.Sb())
        }

        function vn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_NUMBER "), i.Sb())
        }

        const Cn = function () {
            return {range: "1000000-9999999999"}
        };

        function wn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 18), i.Hc(1, "INVALID_MOBILE_NUMBER "), i.Sb()), 2 & t && i.kc("translateParams", i.oc(1, Cn))
        }

        function yn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_ZIP "), i.Sb())
        }

        function kn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, "MANDATORY_ADDRESS"), i.Sb())
        }

        function On(t, e) {
            1 & t && (i.Tb(0, "mat-error", 2), i.Hc(1, " MANDATORY_CITY "), i.Sb())
        }

        const In = function () {
            return {length: "160"}
        };
        let _n = (() => {
            class t {
                constructor(t, e, a, i, o, n, r) {
                    this.location = t, this.formSubmitService = e, this.addressService = a, this.router = i, this.activatedRoute = o, this.translate = n, this.snackBarHelperService = r, this.countryControl = new c.d("", [c.y.required]), this.nameControl = new c.d("", [c.y.required]), this.numberControl = new c.d("", [c.y.required, c.y.min(1111111), c.y.max(9999999999)]), this.pinControl = new c.d("", [c.y.required, c.y.maxLength(8)]), this.addressControl = new c.d("", [c.y.required, c.y.maxLength(160)]), this.cityControl = new c.d("", [c.y.required]), this.stateControl = new c.d, this.address = void 0, this.mode = "create", this.addressId = void 0
                }

                ngOnInit() {
                    this.address = {}, this.activatedRoute.paramMap.subscribe(t => {
                        t.has("addressId") ? (this.mode = "edit", this.addressId = t.get("addressId"), this.addressService.getById(this.addressId).subscribe(t => {
                            this.initializeForm(t)
                        })) : (this.mode = "create", this.addressId = null)
                    }), this.formSubmitService.attachEnterKeyHandler("address-form", "submitButton", () => this.save())
                }

                save() {
                    this.address.country = this.countryControl.value, this.address.fullName = this.nameControl.value, this.address.mobileNum = this.numberControl.value, this.address.zipCode = this.pinControl.value, this.address.streetAddress = this.addressControl.value, this.address.city = this.cityControl.value, this.address.state = this.stateControl.value, "edit" === this.mode ? this.addressService.put(this.addressId, this.address).subscribe(t => {
                        this.address = {}, this.ngOnInit(), this.resetForm(), this.routeToPreviousUrl(), this.translate.get("ADDRESS_UPDATED", {city: t.city}).subscribe(t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }, t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        })
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.address = {}, this.resetForm()
                    }) : this.addressService.save(this.address).subscribe(t => {
                        this.address = {}, this.ngOnInit(), this.resetForm(), this.routeToPreviousUrl(), this.translate.get("ADDRESS_ADDED", {city: t.city}).subscribe(t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }, t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        })
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.address = {}, this.resetForm()
                    })
                }

                initializeForm(t) {
                    this.countryControl.setValue(t.country), this.nameControl.setValue(t.fullName), this.numberControl.setValue(t.mobileNum), this.pinControl.setValue(t.zipCode), this.addressControl.setValue(t.streetAddress), this.cityControl.setValue(t.city), this.stateControl.setValue(t.state)
                }

                routeToPreviousUrl() {
                    this.location.back()
                }

                resetForm() {
                    this.countryControl.markAsUntouched(), this.countryControl.markAsPristine(), this.countryControl.setValue(""), this.nameControl.markAsUntouched(), this.nameControl.markAsPristine(), this.nameControl.setValue(""), this.numberControl.markAsUntouched(), this.numberControl.markAsPristine(), this.numberControl.setValue(""), this.pinControl.markAsUntouched(), this.pinControl.markAsPristine(), this.pinControl.setValue(""), this.addressControl.markAsUntouched(), this.addressControl.markAsPristine(), this.addressControl.setValue(""), this.cityControl.markAsUntouched(), this.cityControl.markAsPristine(), this.cityControl.setValue(""), this.stateControl.markAsUntouched(), this.stateControl.markAsPristine(), this.stateControl.setValue("")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(L.g), i.Nb(At), i.Nb(ki), i.Nb(y.b), i.Nb(y.a), i.Nb(f.e), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-address-create"]],
                decls: 69,
                vars: 49,
                consts: [["fxLayoutAlign", "center"], [1, "mat-elevation-z6"], ["translate", ""], ["id", "address-form", 1, "form-container"], ["appearance", "outline", "color", "accent"], ["type", "text", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl", "placeholder"], ["translate", "", 3, "translateParams", 4, "ngIf"], ["pin", ""], ["align", "end"], ["id", "address", "matInput", "", "matAutosizeMinRows", "4", "matAutosizeMaxRows", "4", "matTextareaAutosize", "", "cols", "50", "maxlength", "160", 3, "formControl", "placeholder"], ["adress", ""], [1, "fas", "fa-exclamation-circle"], ["translate", "", 2, "margin-left", "5px"], ["mat-stroked-button", "", 1, "btn-return", 3, "click"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], ["translate", "", 3, "translateParams"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "mat-card", 1), i.Tb(2, "h1", 2), i.Hc(3, "ADD_NEW_ADDRESS"), i.Sb(), i.Tb(4, "div", 3), i.Tb(5, "mat-form-field", 4), i.Tb(6, "mat-label", 2), i.Hc(7, "LABEL_COUNTRY"), i.Sb(), i.Ob(8, "input", 5), i.fc(9, "translate"), i.Fc(10, Sn, 2, 0, "mat-error", 6), i.Sb(), i.Tb(11, "mat-form-field", 4), i.Tb(12, "mat-label", 2), i.Hc(13, "LABEL_NAME"), i.Sb(), i.Ob(14, "input", 5), i.fc(15, "translate"), i.Fc(16, Tn, 2, 0, "mat-error", 6), i.Sb(), i.Tb(17, "mat-form-field", 4), i.Tb(18, "mat-label", 2), i.Hc(19, "LABEL_MOBILE_NUMBER"), i.Sb(), i.Ob(20, "input", 7), i.fc(21, "translate"), i.Fc(22, vn, 2, 0, "mat-error", 6), i.Fc(23, wn, 2, 2, "mat-error", 8), i.Sb(), i.Tb(24, "mat-form-field", 4), i.Tb(25, "mat-label", 2), i.Hc(26, "LABEL_ZIP_CODE"), i.Sb(), i.Ob(27, "input", 5, 9), i.fc(29, "translate"), i.Tb(30, "mat-hint", 10), i.Hc(31), i.Sb(), i.Fc(32, yn, 2, 0, "mat-error", 6), i.Sb(), i.Tb(33, "mat-form-field", 4), i.Tb(34, "mat-label", 2), i.Hc(35, "LABEL_ADDRESS"), i.Sb(), i.Ob(36, "textarea", 11, 12), i.fc(38, "translate"), i.Tb(39, "mat-hint", 2), i.Ob(40, "i", 13), i.Tb(41, "em", 14), i.Hc(42), i.fc(43, "translate"), i.Sb(), i.Sb(), i.Tb(44, "mat-hint", 10), i.Hc(45), i.Sb(), i.Fc(46, kn, 2, 0, "mat-error", 6), i.Sb(), i.Tb(47, "mat-form-field", 4), i.Tb(48, "mat-label", 2), i.Hc(49, "LABEL_CITY"), i.Sb(), i.Ob(50, "input", 5), i.fc(51, "translate"), i.Fc(52, On, 2, 0, "mat-error", 6), i.Sb(), i.Tb(53, "mat-form-field", 4), i.Tb(54, "mat-label", 2), i.Hc(55, "LABEL_STATE"), i.Sb(), i.Ob(56, "input", 5), i.fc(57, "translate"), i.Sb(), i.Sb(), i.Tb(58, "div"), i.Tb(59, "button", 15), i.ac("click", (function () {
                        return e.routeToPreviousUrl()
                    })), i.Tb(60, "mat-icon"), i.Hc(61, " navigate_before "), i.Sb(), i.Hc(62), i.fc(63, "translate"), i.Sb(), i.Tb(64, "button", 16), i.ac("click", (function () {
                        return e.save()
                    })), i.Tb(65, "i", 17), i.Hc(66, " send "), i.Sb(), i.Hc(67), i.fc(68, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(28), a = i.sc(37);
                        i.Bb(8), i.kc("formControl", e.countryControl)("placeholder", i.gc(9, 27, "MANDATORY_COUNTRY")), i.Bb(2), i.kc("ngIf", e.countryControl.invalid && e.countryControl.errors.required), i.Bb(4), i.kc("formControl", e.nameControl)("placeholder", i.gc(15, 29, "MANDATORY_NAME")), i.Bb(2), i.kc("ngIf", e.nameControl.invalid && e.nameControl.errors.required), i.Bb(4), i.kc("formControl", e.numberControl)("placeholder", i.gc(21, 31, "MANDATORY_NUMBER")), i.Bb(2), i.kc("ngIf", e.numberControl.invalid && e.numberControl.errors.required), i.Bb(1), i.kc("ngIf", e.numberControl.invalid && (e.numberControl.errors.min || e.numberControl.errors.max)), i.Bb(4), i.kc("formControl", e.pinControl)("placeholder", i.gc(29, 33, "MANDATORY_ZIP")), i.Bb(4), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/8"), i.Bb(1), i.kc("ngIf", e.pinControl.invalid && e.pinControl.errors.required), i.Bb(4), i.kc("formControl", e.addressControl)("placeholder", i.gc(38, 35, "MANDATORY_ADDRESS")), i.Bb(6), i.Ic(i.hc(43, 37, "MAX_TEXTAREA_LENGTH", i.oc(48, In))), i.Bb(3), i.Jc("", (null == a.value ? null : a.value.length) || 0, "/160"), i.Bb(1), i.kc("ngIf", e.addressControl.invalid && e.addressControl.errors.required), i.Bb(4), i.kc("formControl", e.cityControl)("placeholder", i.gc(51, 40, "MANDATORY_CITY")), i.Bb(2), i.kc("ngIf", e.cityControl.invalid && e.cityControl.errors.required), i.Bb(4), i.kc("formControl", e.stateControl)("placeholder", i.gc(57, 42, "STATE_PLACEHOLDER")), i.Bb(6), i.Jc(" ", i.gc(63, 44, "LABEL_BACK"), " "), i.Bb(2), i.kc("disabled", e.countryControl.invalid || e.nameControl.invalid || e.numberControl.invalid || e.pinControl.invalid || e.addressControl.invalid || e.cityControl.invalid), i.Bb(3), i.Jc(" ", i.gc(68, 46, "BTN_SUBMIT"), " ")
                    }
                },
                directives: [p.c, g.a, f.a, Et.c, Et.g, Lt.b, c.c, c.o, c.e, L.l, c.t, Et.f, Lt.d, c.j, S.a, ve.a, Et.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{height:auto;min-width:320px;width:30%}#submitButton[_ngcontent-%COMP%]{float:right}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}.btn-return[_ngcontent-%COMP%]{float:left}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
            }), t
        })(), xn = (() => {
            class t {
                constructor(t, e) {
                    this.router = t, this.ngZone = e, this.addressId = void 0, this.showNextButton = !0
                }

                getMessage(t) {
                    this.addressId = t
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(y.b), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-address-select"]],
                decls: 2,
                vars: 1,
                consts: [["id", "card"], [3, "showNextButton"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Ob(1, "app-address", 1), i.Sb()), 2 & t && (i.Bb(1), i.kc("showNextButton", e.showNextButton))
                },
                directives: [Wi],
                styles: [".btn-pay[_ngcontent-%COMP%]{display:block;width:100%}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px;margin-top:3px}#card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }), t
        })(), Bn = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-saved-address"]],
                decls: 2,
                vars: 1,
                consts: [[1, "main-wrapper"], [3, "allowEdit"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Ob(1, "app-address", 1), i.Sb()), 2 & t && (i.Bb(1), i.kc("allowEdit", !0))
                },
                directives: [Wi],
                styles: [".main-wrapper[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }), t
        })();
        u.b.add(m.b), u.a.watch();
        let Hn = (() => {
            class t {
                constructor(t) {
                    this.dialogData = t
                }

                ngOnInit() {
                    this.title = this.dialogData.title, this.url = this.dialogData.url, this.address = this.dialogData.address, this.data = this.dialogData.data
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.a))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-qr-code"]],
                decls: 17,
                vars: 11,
                consts: [[1, "qr-code", "mat-typography"], ["fxLayout", "column", "fxLayoutGap", "10px"], [1, "container"], [3, "href"], [3, "value", "size", "level"], ["mat-raised-button", "", "mat-dialog-close", "", 1, "close-dialog"], [1, "fas", "fa-arrow-circle-left", "fa-lg"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "header"), i.Tb(2, "h3"), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb(), i.Tb(5, "div", 1), i.Ob(6, "mat-divider"), i.Tb(7, "div", 2), i.Tb(8, "a", 3), i.Ob(9, "qr-code", 4), i.Sb(), i.Sb(), i.Tb(10, "small"), i.Hc(11), i.Sb(), i.Sb(), i.Tb(12, "footer"), i.Tb(13, "button", 5), i.Ob(14, "i", 6), i.Hc(15), i.fc(16, "translate"), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(3), i.Ic(i.gc(4, 7, e.title)), i.Bb(5), i.kc("href", e.url, i.yc), i.Bb(1), i.kc("value", e.data)("size", 300)("level", "M"), i.Bb(2), i.Ic(e.address), i.Bb(4), i.Jc(" ", i.gc(16, 9, "BTN_CLOSE"), ""))
                },
                directives: [p.d, p.e, Fe.a, nn.a, S.a, Ee.d],
                pipes: [f.d],
                styles: [""]
            }), t
        })(), Pn = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/wallet/balance"
                }

                get() {
                    return this.http.get(this.host).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                put(t) {
                    return this.http.put(this.host, t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })(), An = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Deliverys"
                }

                get() {
                    return this.http.get(this.host).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                getById(t) {
                    return this.http.get(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })(), En = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/api/Cards"
                }

                get() {
                    return this.http.get(this.host).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                getById(t) {
                    return this.http.get(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                save(t) {
                    return this.http.post(this.host + "/", t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                del(t) {
                    return this.http.delete(this.host + "/" + t).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function Ln(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 33)
        }

        function Dn(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 33), i.Tb(1, "mat-radio-button", 34), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).emitSelectionToParent(a.id)
                })), i.Sb(), i.Sb()
            }
        }

        function Nn(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 35)
        }

        function Fn(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 35), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.cardNum, " ")
            }
        }

        function Mn(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 36)
        }

        function Rn(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 36), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Ic(t.fullName)
            }
        }

        function Un(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 37)
        }

        function jn(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 37), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Kc("", t.expMonth, "/", t.expYear, "")
            }
        }

        function Jn(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 33)
        }

        function Gn(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 33), i.Tb(1, "button", 38), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).delete(a.id)
                })), i.Ob(2, "i", 39), i.Sb(), i.Sb()
            }
        }

        function zn(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function qn(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function Wn(t, e) {
            if (1 & t && (i.Tb(0, "div"), i.Tb(1, "mat-table", 17), i.Rb(2, 18), i.Fc(3, Ln, 1, 0, "mat-header-cell", 19), i.Fc(4, Dn, 2, 0, "mat-cell", 20), i.Qb(), i.Rb(5, 21), i.Fc(6, Nn, 1, 0, "mat-header-cell", 22), i.Fc(7, Fn, 2, 1, "mat-cell", 23), i.Qb(), i.Rb(8, 24), i.Fc(9, Mn, 1, 0, "mat-header-cell", 25), i.Fc(10, Rn, 2, 1, "mat-cell", 26), i.Qb(), i.Rb(11, 27), i.Fc(12, Un, 1, 0, "mat-header-cell", 28), i.Fc(13, jn, 2, 2, "mat-cell", 29), i.Qb(), i.Rb(14, 30), i.Fc(15, Jn, 1, 0, "mat-header-cell", 19), i.Fc(16, Gn, 3, 0, "mat-cell", 20), i.Qb(), i.Fc(17, zn, 1, 0, "mat-header-row", 31), i.Fc(18, qn, 1, 0, "mat-row", 32), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("dataSource", t.dataSource), i.Bb(16), i.kc("matHeaderRowDef", t.displayedColumns), i.Bb(1), i.kc("matRowDefColumns", t.displayedColumns)
            }
        }

        function Yn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 5), i.Hc(1, " MANDATORY_NAME "), i.Sb())
        }

        function Vn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 5), i.Hc(1, " MANDATORY_CARD_NUMBER "), i.Sb())
        }

        function Qn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 5), i.Hc(1, " VALID_CARD_NUMBER "), i.Sb())
        }

        function $n(t, e) {
            if (1 & t && (i.Tb(0, "option", 40), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.lc("value", t), i.Bb(1), i.Ic(t)
            }
        }

        function Kn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 5), i.Hc(1, " MANDATORY_EXPIRY_MONTH "), i.Sb())
        }

        function Xn(t, e) {
            if (1 & t && (i.Tb(0, "option", 40), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.lc("value", t), i.Bb(1), i.Ic(t)
            }
        }

        function Zn(t, e) {
            1 & t && (i.Tb(0, "mat-error", 5), i.Hc(1, " MANDATORY_EXPIRY_YEAR "), i.Sb())
        }

        u.b.add(m.D, h.g), u.a.watch();
        let tr = (() => {
            class t {
                constructor(t, e, a) {
                    this.paymentService = t, this.translate = e, this.snackBarHelperService = a, this.emitSelection = new i.o, this.allowDelete = !1, this.displayedColumns = ["Number", "Name", "Expiry"], this.nameControl = new c.d("", [c.y.required]), this.numberControl = new c.d("", [c.y.required, c.y.min(1e15), c.y.max(1e16)]), this.monthControl = new c.d("", [c.y.required]), this.yearControl = new c.d("", [c.y.required]), this.card = {}, this.cardsExist = !1, this.paymentId = void 0
                }

                ngOnInit() {
                    this.monthRange = Array.from(Array(12).keys()).map(t => t + 1), this.yearRange = Array.from(Array(20).keys()).map(t => t + 2080), this.allowDelete ? this.displayedColumns.push("Remove") : this.displayedColumns.unshift("Selection"), this.load()
                }

                load() {
                    this.paymentService.get().subscribe(t => {
                        t.map(t => {
                            t.cardNum = "************" + String(t.cardNum).substring(String(t.cardNum).length - 4)
                        }), this.cardsExist = t.length, this.storedCards = t, this.dataSource = new E.o(this.storedCards)
                    }, t => console.log(t))
                }

                save() {
                    this.card.fullName = this.nameControl.value, this.card.cardNum = this.numberControl.value, this.card.expMonth = this.monthControl.value, this.card.expYear = this.yearControl.value, this.paymentService.save(this.card).subscribe(t => {
                        this.error = null, this.translate.get("CREDIT_CARD_SAVED", {cardnumber: String(t.cardNum).substring(String(t.cardNum).length - 4)}).subscribe(t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }, t => {
                            this.snackBarHelperService.open(t, "confirmBar")
                        }), this.load(), this.resetForm()
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), this.resetForm()
                    })
                }

                delete(t) {
                    this.paymentService.del(t).subscribe(() => {
                        this.load()
                    }, t => console.log(t))
                }

                emitSelectionToParent(t) {
                    this.emitSelection.emit(t)
                }

                resetForm() {
                    this.nameControl.markAsUntouched(), this.nameControl.markAsPristine(), this.nameControl.setValue(""), this.numberControl.markAsUntouched(), this.numberControl.markAsPristine(), this.numberControl.setValue(""), this.monthControl.markAsUntouched(), this.monthControl.markAsPristine(), this.monthControl.setValue(""), this.yearControl.markAsUntouched(), this.yearControl.markAsPristine(), this.yearControl.setValue("")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(En), i.Nb(f.e), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-payment-method"]],
                inputs: {allowDelete: "allowDelete"},
                outputs: {emitSelection: "emitSelection"},
                decls: 46,
                vars: 26,
                consts: [["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngIf"], [1, "mat-elevation-z0"], [2, "margin-bottom", "12px"], ["appearance", "outline", "color", "accent"], ["translate", ""], ["type", "text", "matInput", "", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "number", "matInput", "", 3, "formControl"], ["cardIn", ""], ["align", "end"], ["appearance", "outline", "color", "accent", 2, "width", "45%", "margin-right", "10%"], ["matNativeControl", "", "required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", "color", "accent", 2, "width", "45%"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "material-icons"], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Number"], ["fxFlex", "35%", 4, "matHeaderCellDef"], ["fxFlex", "35%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Expiry"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Remove"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["fxFlex", "15%"], [3, "click"], ["fxFlex", "35%"], ["fxFlex", "30%"], ["fxFlex", "20%"], ["mat-icon-button", "", 3, "click"], [1, "far", "fa-trash-alt"], [3, "value"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "h1"), i.Hc(2), i.fc(3, "translate"), i.Sb(), i.Fc(4, Wn, 19, 3, "div", 1), i.Tb(5, "div"), i.Tb(6, "mat-expansion-panel", 2), i.Tb(7, "mat-expansion-panel-header", 3), i.Tb(8, "mat-panel-title"), i.Hc(9), i.fc(10, "translate"), i.Sb(), i.Tb(11, "mat-panel-description"), i.Hc(12), i.fc(13, "translate"), i.Sb(), i.Sb(), i.Tb(14, "div"), i.Tb(15, "mat-form-field", 4), i.Tb(16, "mat-label", 5), i.Hc(17, "LABEL_NAME"), i.Sb(), i.Ob(18, "input", 6), i.Fc(19, Yn, 2, 0, "mat-error", 7), i.Sb(), i.Tb(20, "mat-form-field", 4), i.Tb(21, "mat-label", 5), i.Hc(22, "LABEL_CARD_NUMBER"), i.Sb(), i.Ob(23, "input", 8, 9), i.Tb(25, "mat-hint", 10), i.Hc(26), i.Sb(), i.Fc(27, Vn, 2, 0, "mat-error", 7), i.Fc(28, Qn, 2, 0, "mat-error", 7), i.Sb(), i.Tb(29, "mat-form-field", 11), i.Tb(30, "mat-label", 5), i.Hc(31, "LABEL_EXPIRY_MONTH"), i.Sb(), i.Tb(32, "select", 12), i.Fc(33, $n, 2, 2, "option", 13), i.Sb(), i.Fc(34, Kn, 2, 0, "mat-error", 7), i.Sb(), i.Tb(35, "mat-form-field", 14), i.Tb(36, "mat-label", 5), i.Hc(37, "LABEL_EXPIRY_YEAR"), i.Sb(), i.Tb(38, "select", 12), i.Fc(39, Xn, 2, 2, "option", 13), i.Sb(), i.Fc(40, Zn, 2, 0, "mat-error", 7), i.Sb(), i.Sb(), i.Tb(41, "button", 15), i.ac("click", (function () {
                        return e.save()
                    })), i.Tb(42, "i", 16), i.Hc(43, " send "), i.Sb(), i.Hc(44), i.fc(45, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                        const t = i.sc(24);
                        i.Bb(2), i.Ic(i.gc(3, 18, "MY_PAYMENT_OPTIONS")), i.Bb(2), i.kc("ngIf", e.cardsExist), i.Bb(5), i.Jc(" ", i.gc(10, 20, "ADD_NEW_CARD"), " "), i.Bb(3), i.Jc(" ", i.gc(13, 22, "ADD_NEW_CARD_DESCRIPTION"), " "), i.Bb(6), i.kc("formControl", e.nameControl), i.Bb(1), i.kc("ngIf", e.nameControl.invalid && e.nameControl.errors.required), i.Bb(4), i.kc("formControl", e.numberControl), i.Bb(3), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/16"), i.Bb(1), i.kc("ngIf", e.numberControl.invalid && e.numberControl.errors.required), i.Bb(1), i.kc("ngIf", e.numberControl.invalid && (e.numberControl.errors.min || e.numberControl.errors.max)), i.Bb(4), i.kc("formControl", e.monthControl), i.Bb(1), i.kc("ngForOf", e.monthRange), i.Bb(1), i.kc("ngIf", e.monthControl.invalid && e.monthControl.errors.required), i.Bb(4), i.kc("formControl", e.yearControl), i.Bb(1), i.kc("ngForOf", e.yearRange), i.Bb(1), i.kc("ngIf", e.yearControl.invalid && e.yearControl.errors.required), i.Bb(1), i.kc("disabled", e.nameControl.invalid || e.numberControl.invalid || e.monthControl.invalid || e.yearControl.invalid), i.Bb(3), i.Jc(" ", i.gc(45, 24, "BTN_SUBMIT"), " ")
                    }
                },
                directives: [p.d, p.e, L.l, Me.b, Me.d, Me.e, Me.c, Et.c, Et.g, f.a, Lt.b, c.c, c.o, c.e, c.t, Et.f, c.x, c.w, L.k, S.a, E.n, E.c, E.i, E.b, E.k, E.m, E.h, p.b, E.a, Ii.a, E.j, E.l, Et.b, c.s, c.z],
                pipes: [f.d],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}mat-header-row[_ngcontent-%COMP%]{min-height:0!important}input[_ngcontent-%COMP%]::-webkit-inner-spin-button, input[_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:none;margin:0}"]
            }), t
        })();

        function er(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "div", 11), i.Tb(1, "div", 12), i.Tb(2, "div", 13), i.Tb(3, "span", 14), i.Hc(4, "LABEL_PAY_USING_WALLET"), i.Sb(), i.Sb(), i.Tb(5, "div", 15), i.Tb(6, "b"), i.Tb(7, "span", 14), i.Hc(8, "LABEL_WALLET_BALANCE"), i.Sb(), i.Tb(9, "span", 16), i.Hc(10), i.Sb(), i.Sb(), i.Sb(), i.Tb(11, "div", 17), i.Tb(12, "button", 18), i.ac("click", (function () {
                    return i.vc(t), i.ec().useWallet()
                })), i.Ob(13, "i", 19), i.Hc(14), i.fc(15, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(10), i.Jc(" ", t.walletBalanceStr, ""), i.Bb(2), i.kc("disabled", t.walletBalance - t.totalPrice < 0), i.Bb(2), i.Kc(" ", i.gc(15, 4, "LABEL_PAY"), " ", null == t.totalPrice ? null : t.totalPrice.toFixed(2), "\xa4 ")
            }
        }

        function ar(t, e) {
            if (1 & t && (i.Tb(0, "div", 31), i.Hc(1), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.Bb(1), i.Jc("", t.couponConfirmation, " ")
            }
        }

        function ir(t, e) {
            if (1 & t && (i.Tb(0, "div", 32), i.Hc(1), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.Bb(1), i.Jc("", null == t.couponError ? null : t.couponError.error, " ")
            }
        }

        function or(t, e) {
            1 & t && (i.Tb(0, "mat-error"), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t && (i.Bb(1), i.Jc(" ", i.gc(2, 1, "COUPON_CODE_HINT"), " "))
        }

        const nr = function (t, e) {
            return {twitter: t, facebook: e}
        };

        function rr(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-expansion-panel", 20), i.Tb(1, "mat-expansion-panel-header", 21), i.Tb(2, "mat-panel-title"), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Tb(5, "mat-panel-description"), i.Hc(6), i.fc(7, "translate"), i.Sb(), i.Sb(), i.Fc(8, ar, 2, 1, "div", 22), i.Fc(9, ir, 2, 1, "div", 23), i.Tb(10, "mat-form-field", 24), i.Tb(11, "mat-label", 8), i.Hc(12, "LABEL_COUPON"), i.Sb(), i.Ob(13, "mat-hint", 25), i.fc(14, "translate"), i.Ob(15, "input", 26, 27), i.fc(17, "translate"), i.Tb(18, "mat-hint", 28), i.Hc(19), i.Sb(), i.Fc(20, or, 3, 3, "mat-error", 29), i.Sb(), i.Tb(21, "button", 30), i.ac("click", (function () {
                    return i.vc(t), i.ec().applyCoupon()
                })), i.Tb(22, "mat-icon"), i.Hc(23, " redeem "), i.Sb(), i.Hc(24), i.fc(25, "translate"), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.sc(16), e = i.ec();
                i.kc("expanded", e.couponPanelExpanded), i.Bb(3), i.Jc(" ", i.gc(4, 12, "ADD_A_COUPON"), " "), i.Bb(3), i.Jc(" ", i.gc(7, 14, "VOUCHERS_AND_PROMOTIONAL_CODE"), " "), i.Bb(2), i.kc("ngIf", e.couponConfirmation && !e.couponControl.dirty), i.Bb(1), i.kc("ngIf", e.couponError && !e.couponControl.dirty), i.Bb(4), i.kc("innerHtml", i.hc(14, 16, "FOLLOW_FOR_MONTHLY_COUPONS", i.qc(23, nr, e.twitterUrl, e.facebookUrl)), i.wc), i.Bb(2), i.lc("placeholder", i.gc(17, 19, "ENTER_COUPON_CODE")), i.kc("formControl", e.couponControl), i.Bb(4), i.Jc("", (null == t.value ? null : t.value.length) || 0, "/10"), i.Bb(1), i.kc("ngIf", e.couponControl.invalid && (e.couponControl.errors.minlength || e.couponControl.errors.maxlength)), i.Bb(1), i.kc("disabled", e.couponControl.invalid), i.Bb(3), i.Jc(" ", i.gc(25, 21, "BTN_REDEEM"), " ")
            }
        }

        const cr = function () {
            return {juiceshop: "OWASP Juice Shop"}
        };

        function sr(t, e) {
            1 & t && (i.Tb(0, "span", 54), i.Hc(1, "THANKS_FOR_SUPPORT"), i.Sb()), 2 & t && i.kc("translateParams", i.oc(1, cr))
        }

        const lr = function (t) {
            return {appname: t}
        };

        function br(t, e) {
            if (1 & t && (i.Tb(0, "span", 54), i.Hc(1, "THANKS_FOR_SUPPORT_CUSTOMIZED"), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.kc("translateParams", i.pc(1, lr, t.applicationName))
            }
        }

        function ur(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 55), i.ac("click", (function () {
                    return i.vc(t), i.ec(2).showBitcoinQrCode()
                })), i.Ob(1, "i", 56), i.Hc(2, " Bitcoin "), i.Sb()
            }
        }

        function dr(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 55), i.ac("click", (function () {
                    return i.vc(t), i.ec(2).showDashQrCode()
                })), i.Tb(1, "i", 57), i.Hc(2, "\xd0"), i.Sb(), i.Hc(3, " Dash"), i.Sb()
            }
        }

        function mr(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 55), i.ac("click", (function () {
                    return i.vc(t), i.ec(2).showEtherQrCode()
                })), i.Ob(1, "i", 58), i.Hc(2, " Ether "), i.Sb()
            }
        }

        function hr(t, e) {
            1 & t && (i.Tb(0, "span", 54), i.Hc(1, "OFFICIAL_MERCHANDISE_STORES"), i.Sb()), 2 & t && i.kc("translateParams", i.oc(1, cr))
        }

        function pr(t, e) {
            if (1 & t && (i.Tb(0, "span", 54), i.Hc(1, "OFFICIAL_MERCHANDISE_STORES_CUSTOMIZED"), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.kc("translateParams", i.pc(1, lr, t.applicationName))
            }
        }

        function gr(t, e) {
            if (1 & t && (i.Tb(0, "mat-expansion-panel", 33), i.Tb(1, "mat-expansion-panel-header", 21), i.Tb(2, "mat-panel-title"), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb(), i.Tb(5, "div", 34), i.Tb(6, "div", 35), i.Tb(7, "div", 36), i.Tb(8, "label", 8), i.Hc(9, "LABEL_DONATIONS"), i.Sb(), i.Sb(), i.Tb(10, "small"), i.Hc(11, " ("), i.Fc(12, sr, 2, 2, "span", 37), i.Fc(13, br, 2, 3, "span", 37), i.Ob(14, "i", 38), i.Hc(15, ") "), i.Sb(), i.Tb(16, "div", 39), i.Tb(17, "a", 40), i.Tb(18, "button", 41), i.Ob(19, "i", 42), i.Hc(20), i.fc(21, "translate"), i.Sb(), i.Sb(), i.Fc(22, ur, 3, 0, "button", 43), i.Fc(23, dr, 4, 0, "button", 43), i.Fc(24, mr, 3, 0, "button", 43), i.Sb(), i.Sb(), i.Ob(25, "span", 44), i.Tb(26, "div", 45), i.Tb(27, "div", 36), i.Tb(28, "label", 8), i.Hc(29, "LABEL_MERCHANDISE"), i.Sb(), i.Sb(), i.Tb(30, "small"), i.Hc(31, " ("), i.Fc(32, hr, 2, 2, "span", 37), i.Fc(33, pr, 2, 3, "span", 37), i.Ob(34, "i", 46), i.Hc(35, ") "), i.Sb(), i.Tb(36, "div", 39), i.Tb(37, "a", 47), i.Tb(38, "button", 41), i.Ob(39, "i", 48), i.Hc(40, " Spreadshirt (US)"), i.Sb(), i.Sb(), i.Tb(41, "a", 49), i.Tb(42, "button", 41), i.Ob(43, "i", 48), i.Hc(44, " Spreadshirt (DE)"), i.Sb(), i.Sb(), i.Tb(45, "a", 50), i.Tb(46, "button", 41), i.Ob(47, "i", 51), i.Hc(48, " StickerYou"), i.Sb(), i.Sb(), i.Tb(49, "a", 52), i.Tb(50, "button", 41), i.Ob(51, "i", 53), i.Hc(52, " Leanpub"), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.kc("expanded", t.paymentPanelExpanded), i.Bb(3), i.Jc(" ", i.gc(4, 10, "OTHER_PAYMENT_OPTIONS"), " "), i.Bb(9), i.kc("ngIf", "OWASP Juice Shop" === t.applicationName), i.Bb(1), i.kc("ngIf", "OWASP Juice Shop" !== t.applicationName), i.Bb(7), i.Jc(" ", i.gc(21, 12, "BTN_CREDIT_CARD"), ""), i.Bb(2), i.kc("ngIf", !1), i.Bb(1), i.kc("ngIf", !1), i.Bb(1), i.kc("ngIf", !1), i.Bb(8), i.kc("ngIf", "OWASP Juice Shop" === t.applicationName), i.Bb(1), i.kc("ngIf", "OWASP Juice Shop" !== t.applicationName)
            }
        }

        function fr(t, e) {
            1 & t && (i.Tb(0, "span", 8), i.Hc(1, "REVIEW_ALERT"), i.Sb())
        }

        function Sr(t, e) {
            1 & t && (i.Tb(0, "span", 8), i.Hc(1, "REVIEW_WALLET"), i.Sb())
        }

        u.b.add(m.d, m.r, m.w, d.g, m.W, m.db, m.P, m.u, m.h, m.X, d.j), u.a.watch();
        let Tr = (() => {
            class t {
                constructor(t, e, a, i, o, n, r, s, l, b, u, d, m) {
                    this.location = t, this.cookieService = e, this.userService = a, this.deliveryService = i, this.walletService = o, this.router = n, this.dialog = r, this.configurationService = s, this.basketService = l, this.translate = b, this.activatedRoute = u, this.ngZone = d, this.snackBarHelperService = m, this.card = {}, this.twitterUrl = null, this.facebookUrl = null, this.applicationName = "OWASP Juice Shop", this.couponControl = new c.d("", [c.y.required, c.y.minLength(10), c.y.maxLength(10)]), this.paymentId = void 0, this.couponPanelExpanded = !1, this.paymentPanelExpanded = !1, this.walletBalance = 0, this.totalPrice = 0, this.paymentMode = "card", this.campaigns = {
                        WMNSDY2019: {
                            validOn: 15519996e5,
                            discount: 75
                        },
                        WMNSDY2020: {validOn: 1583622e6, discount: 60},
                        WMNSDY2021: {validOn: 1615158e6, discount: 60},
                        WMNSDY2022: {validOn: 1646694e6, discount: 60},
                        WMNSDY2023: {validOn: 167823e7, discount: 60},
                        ORANGE2020: {validOn: 15885468e5, discount: 50},
                        ORANGE2021: {validOn: 16200828e5, discount: 40},
                        ORANGE2022: {validOn: 16516188e5, discount: 40},
                        ORANGE2023: {validOn: 16831548e5, discount: 40}
                    }
                }

                ngOnInit() {
                    this.initTotal(), this.walletService.get().subscribe(t => {
                        this.walletBalance = t, this.walletBalanceStr = parseFloat(t).toFixed(2)
                    }, t => console.log(t)), this.couponPanelExpanded = !!localStorage.getItem("couponPanelExpanded") && JSON.parse(localStorage.getItem("couponPanelExpanded")), this.paymentPanelExpanded = !!localStorage.getItem("paymentPanelExpanded") && JSON.parse(localStorage.getItem("paymentPanelExpanded")), this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.social && (t.application.social.twitterUrl && (this.twitterUrl = t.application.social.twitterUrl), t.application.social.facebookUrl && (this.facebookUrl = t.application.social.facebookUrl), t.application.name && (this.applicationName = t.application.name))
                    }, t => console.log(t))
                }

                initTotal() {
                    this.activatedRoute.paramMap.subscribe(t => {
                        if (this.mode = t.get("entity"), "wallet" === this.mode) this.totalPrice = parseFloat(sessionStorage.getItem("walletTotal")); else if ("deluxe" === this.mode) this.userService.deluxeStatus().subscribe(t => {
                            this.totalPrice = t.membershipCost
                        }, t => console.log(t)); else {
                            const t = parseFloat(sessionStorage.getItem("itemTotal")),
                                e = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * t : 0;
                            this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(a => {
                                this.totalPrice = t + a.price - e
                            })
                        }
                    }, t => console.log(t))
                }

                applyCoupon() {
                    this.campaignCoupon = this.couponControl.value, this.clientDate = new Date;
                    const t = 60 * (this.clientDate.getTimezoneOffset() + 60) * 1e3;
                    this.clientDate.setHours(0, 0, 0, 0), this.clientDate = this.clientDate.getTime() - t, sessionStorage.setItem("couponDetails", this.campaignCoupon + "-" + this.clientDate);
                    const e = this.campaigns[this.couponControl.value];
                    e ? this.clientDate === e.validOn ? this.showConfirmation(e.discount) : (this.couponConfirmation = void 0, this.translate.get("INVALID_COUPON").subscribe(t => {
                        this.couponError = {error: t}
                    }, t => {
                        this.couponError = {error: t}
                    }), this.resetCouponForm()) : this.basketService.applyCoupon(Number(sessionStorage.getItem("bid")), encodeURIComponent(this.couponControl.value)).subscribe(t => {
                        this.showConfirmation(t)
                    }, t => {
                        this.couponConfirmation = void 0, this.couponError = t, this.resetCouponForm()
                    })
                }

                showConfirmation(t) {
                    this.resetCouponForm(), this.couponError = void 0, sessionStorage.setItem("couponDiscount", t), this.translate.get("DISCOUNT_APPLIED", {discount: t}).subscribe(t => {
                        this.couponConfirmation = t
                    }, t => {
                        this.couponConfirmation = t
                    }), this.initTotal()
                }

                getMessage(t) {
                    this.paymentId = t, this.paymentMode = "card"
                }

                routeToPreviousUrl() {
                    this.location.back()
                }

                choosePayment() {
                    sessionStorage.removeItem("itemTotal"), "wallet" === this.mode ? this.walletService.put({balance: this.totalPrice}).subscribe(() => {
                        sessionStorage.removeItem("walletTotal"), this.ngZone.run(() => this.router.navigate(["/wallet"])), this.snackBarHelperService.open("CHARGED_WALLET", "confirmBar")
                    }, t => {
                        var e;
                        console.log(t), this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar")
                    }) : "deluxe" === this.mode ? this.userService.upgradeToDeluxe(this.paymentMode).subscribe(t => {
                        localStorage.setItem("token", t.token), this.cookieService.set("token", t.token), this.ngZone.run(() => this.router.navigate(["/deluxe-membership"]))
                    }, t => console.log(t)) : ("wallet" === this.paymentMode ? sessionStorage.setItem("paymentId", "wallet") : sessionStorage.setItem("paymentId", this.paymentId), this.ngZone.run(() => this.router.navigate(["/order-summary"])))
                }

                noop() {
                }

                showBitcoinQrCode() {
                    this.dialog.open(Hn, {
                        data: {
                            data: "bitcoin:1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            url: "./redirect?to=https://blockchain.info/address/1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            address: "1AbKfgvw9psQ41NbLi8kufDQTezwG8DRZm",
                            title: "TITLE_BITCOIN_ADDRESS"
                        }
                    })
                }

                showDashQrCode() {
                    this.dialog.open(Hn, {
                        data: {
                            data: "dash:Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            url: "./redirect?to=https://explorer.dash.org/address/Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            address: "Xr556RzuwX6hg5EGpkybbv5RanJoZN17kW",
                            title: "TITLE_DASH_ADDRESS"
                        }
                    })
                }

                showEtherQrCode() {
                    this.dialog.open(Hn, {
                        data: {
                            data: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                            url: "./redirect?to=https://etherscan.io/address/0x0f933ab9fcaaa782d0279c300d73750e1311eae6",
                            address: "0x0f933ab9fCAAA782D0279C300D73750e1311EAE6",
                            title: "TITLE_ETHER_ADDRESS"
                        }
                    })
                }

                useWallet() {
                    this.paymentMode = "wallet", this.choosePayment()
                }

                resetCouponForm() {
                    this.couponControl.setValue(""), this.couponControl.markAsPristine(), this.couponControl.markAsUntouched()
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(L.g), i.Nb(r.a), i.Nb(w), i.Nb(An), i.Nb(Pn), i.Nb(y.b), i.Nb(Ee.b), i.Nb(b), i.Nb(O), i.Nb(f.e), i.Nb(y.a), i.Nb(i.B), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-payment"]],
                decls: 24,
                vars: 10,
                consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete", "emitSelection"], ["class", "mat-elevation-z0", "class", "custom-card", 4, "ngIf"], ["class", "mat-elevation-z0", "id", "collapseCouponElement", 3, "expanded", 4, "ngIf"], ["class", "mat-elevation-z0", 3, "expanded", 4, "ngIf"], [2, "margin-top", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to review", 1, "btn", "nextButton", 3, "disabled", "click"], ["translate", ""], [2, "text-align", "center", "margin-top", "-27px"], ["translate", "", 4, "ngIf"], [1, "custom-card"], ["fxLayout", "row"], ["fxFlex", "42%"], ["translate", "", 1, "card-title"], ["fxFlex", "38%"], [1, "confirmation", "card-title"], ["fxFlex", "20%"], ["type", "submit", "color", "primary", "mat-raised-button", "", 1, "btn", 2, "float", "right", 3, "disabled", "click"], [1, "fas", "fa-hand-holding-usd", "fa-lg"], ["id", "collapseCouponElement", 1, "mat-elevation-z0", 3, "expanded"], [1, "detail-divider"], ["style", "margin-top:5px;", "class", "confirmation", 4, "ngIf"], ["style", "margin-top:5px;", "class", "error", 4, "ngIf"], ["appearance", "outline", "color", "accent"], [3, "innerHtml"], ["id", "coupon", "matInput", "", "type", "text", 3, "formControl", "placeholder"], ["coupon", ""], ["align", "end"], [4, "ngIf"], ["type", "submit", "id", "applyCouponButton", "color", "accent", "mat-raised-button", "", 2, "margin-top", "5px", "float", "right", 3, "disabled", "click"], [1, "confirmation", 2, "margin-top", "5px"], [1, "error", 2, "margin-top", "5px"], [1, "mat-elevation-z0", 3, "expanded"], ["fxLayout", "row", "fxLayout.lt-lg", "column"], ["fxFlex", "34%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "payment-label"], ["translate", "", 3, "translateParams", 4, "ngIf"], [1, "fas", "fa-heart", "error", 2, "margin-left", "3px"], [1, "button-container", 2, "margin-top", "6px"], ["href", "https://pwning.owasp-juice.shop/part3/donations.html"], ["mat-stroked-button", ""], [1, "fab", "fa-stripe", "fa-lg"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [1, "fill-remaining-space"], ["fxFlex", "65%", "fxFlex.lt-lg", "100%", 1, "mat-elevation-z0"], [1, "fas", "fa-thumbs-up", "confirmation", 2, "margin-left", "3px"], ["href", "./redirect?to=http://shop.spreadshirt.com/juiceshop"], [1, "fas", "fa-tshirt", "fa-lg"], ["href", "./redirect?to=http://shop.spreadshirt.de/juiceshop"], ["href", "./redirect?to=https://www.stickeryou.com/products/owasp-juice-shop/794"], [1, "fas", "fa-sticky-note", "fa-lg"], ["href", "./redirect?to=http://leanpub.com/juice-shop"], [1, "fab", "fa-leanpub", "fa-lg"], ["translate", "", 3, "translateParams"], ["mat-stroked-button", "", 3, "click"], [1, "fab", "fa-btc", "fa-lg"], [1, "fa-lg"], [1, "fab", "fa-ethereum", "fa-lg"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "div"), i.Tb(2, "app-payment-method", 1), i.ac("emitSelection", (function (t) {
                        return e.getMessage(t)
                    })), i.Sb(), i.Ob(3, "mat-divider"), i.Fc(4, er, 16, 6, "div", 2), i.Ob(5, "mat-divider"), i.Fc(6, rr, 26, 26, "mat-expansion-panel", 3), i.Ob(7, "mat-divider"), i.Fc(8, gr, 53, 14, "mat-expansion-panel", 4), i.Ob(9, "mat-divider"), i.Tb(10, "div", 5), i.Tb(11, "button", 6), i.ac("click", (function () {
                        return e.routeToPreviousUrl()
                    })), i.Tb(12, "mat-icon"), i.Hc(13, " navigate_before "), i.Sb(), i.Hc(14), i.fc(15, "translate"), i.Sb(), i.Tb(16, "button", 7), i.ac("click", (function () {
                        return e.choosePayment()
                    })), i.Tb(17, "mat-icon"), i.Hc(18, " navigate_next "), i.Sb(), i.Tb(19, "span", 8), i.Hc(20, "LABEL_CONTINUE"), i.Sb(), i.Sb(), i.Tb(21, "p", 9), i.Fc(22, fr, 2, 0, "span", 10), i.Fc(23, Sr, 2, 0, "span", 10), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(2), i.kc("allowDelete", !1), i.Bb(2), i.kc("ngIf", "wallet" !== e.mode), i.Bb(2), i.kc("ngIf", "wallet" !== e.mode), i.Bb(2), i.kc("ngIf", "wallet" !== e.mode), i.Bb(6), i.Jc(" ", i.gc(15, 8, "LABEL_BACK"), " "), i.Bb(2), i.kc("disabled", void 0 === e.paymentId && "wallet" !== e.paymentMode), i.Bb(6), i.kc("ngIf", "deluxe" !== e.mode && "wallet" !== e.mode), i.Bb(1), i.kc("ngIf", "wallet" === e.mode))
                },
                directives: [g.a, tr, Fe.a, L.l, S.a, ve.a, f.a, p.d, p.b, Me.b, Me.d, Me.e, Me.c, Et.c, Et.g, Et.f, Lt.b, c.c, c.o, c.e, Et.b],
                pipes: [f.d],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.btn-return[_ngcontent-%COMP%]{margin-left:0;margin-right:auto;display:block}.nextButton[_ngcontent-%COMP%]{margin-right:0;margin-left:auto;display:block;margin-top:-37px}mat-card[_ngcontent-%COMP%]{height:auto}.mat-expansion-panel-header-description[_ngcontent-%COMP%]{flex-basis:0}.mat-raised-button[_ngcontent-%COMP%]{margin-right:3px}.custom-card[_ngcontent-%COMP%]{padding:18px 24px}.card-title[_ngcontent-%COMP%]{font-size:15px;line-height:36px;vertical-align:middle}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.detail-divider[_ngcontent-%COMP%]{margin-bottom:12px;margin-top:12px}"]
            }), t
        })(), vr = (() => {
            class t {
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-saved-payment-methods"]],
                decls: 2,
                vars: 1,
                consts: [[1, "mat-own-card", "mat-elevation-z6"], [3, "allowDelete"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Ob(1, "app-payment-method", 1), i.Sb()), 2 & t && (i.Bb(1), i.kc("allowDelete", !0))
                },
                directives: [g.a, tr],
                styles: [".mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}"]
            }), t
        })(), Cr = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/order-history"
                }

                get() {
                    return this.http.get(this.host).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                getAll() {
                    return this.http.get(this.host + "/orders").pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                toggleDeliveryStatus(t, e) {
                    return this.http.put(this.host + "/" + t + "/delivery-status", e).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        const wr = ["paginatorOrderHistory"], yr = ["paginator"];

        function kr(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 31)
        }

        function Or(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 20), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.orderId, "")
            }
        }

        function Ir(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 32)
        }

        function _r(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 33), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", null == t.totalPrice ? null : t.totalPrice.toFixed(2), "\xa4")
            }
        }

        function xr(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 34)
        }

        function Br(t, e) {
            1 & t && (i.Tb(0, "div", 38), i.Hc(1, "LABEL_IN_TRANSIT"), i.Sb())
        }

        function Hr(t, e) {
            1 & t && (i.Tb(0, "div", 39), i.Hc(1, "LABEL_DELIVERED"), i.Sb())
        }

        function Pr(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 35), i.Fc(1, Br, 2, 0, "div", 36), i.Fc(2, Hr, 2, 0, "div", 37), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("ngIf", !t.delivered), i.Bb(1), i.kc("ngIf", t.delivered)
            }
        }

        function Ar(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 33)
        }

        function Er(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 41), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec().$implicit;
                    return i.ec().changeDeliveryStatus(e.delivered, e.id)
                })), i.fc(1, "translate"), i.Tb(2, "mat-icon"), i.Hc(3, " cached "), i.Sb(), i.Sb()
            }
            2 & t && i.lc("matTooltip", i.gc(1, 1, "LABEL_MARK_AS_TRANSIT"))
        }

        function Lr(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 41), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec().$implicit;
                    return i.ec().changeDeliveryStatus(e.delivered, e.id)
                })), i.fc(1, "translate"), i.Tb(2, "mat-icon"), i.Hc(3, " check_circle "), i.Sb(), i.Sb()
            }
            2 & t && i.lc("matTooltip", i.gc(1, 1, "LABEL_MARK_AS_DELIVERED"))
        }

        function Dr(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 33), i.Fc(1, Er, 4, 3, "button", 40), i.Fc(2, Lr, 4, 3, "button", 40), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("ngIf", t.delivered), i.Bb(1), i.kc("ngIf", !t.delivered)
            }
        }

        function Nr(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function Fr(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function Mr(t, e) {
            if (1 & t && (i.Tb(0, "div", 42), i.Tb(1, "p", 43), i.Hc(2), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(2), i.Ic(t.confirmation)
            }
        }

        function Rr(t, e) {
            if (1 & t && (i.Tb(0, "div", 42), i.Tb(1, "p", 44), i.Hc(2), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(2), i.Ic(null == t.error ? null : t.error.error)
            }
        }

        function Ur(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 45)
        }

        function jr(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 46), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc(" ", t.name, "")
            }
        }

        function Jr(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 47)
        }

        function Gr(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 48), i.Tb(1, "mat-form-field", 49), i.Ob(2, "input", 50, 51), i.Tb(4, "button", 52), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit, o = i.sc(3);
                    return i.ec().modifyPrice(a.id, o.value)
                })), i.Ob(5, "i", 53), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit;
                i.Bb(2), i.lc("value", t.price)
            }
        }

        function zr(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 54)
        }

        function qr(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 48), i.Tb(1, "mat-form-field", 49), i.Ob(2, "input", 50, 55), i.Tb(4, "button", 52), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit, o = i.sc(3), n = i.ec();
                    return n.modifyQuantity(n.quantityMap[a.id].id, o.value)
                })), i.Ob(5, "i", 53), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec();
                i.Bb(2), i.lc("value", a.quantityMap[t.id].quantity)
            }
        }

        function Wr(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function Yr(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        const Vr = function () {
            return [10, 20, 30]
        };
        u.b.add(m.f), u.a.watch();
        let Qr = (() => {
            class t {
                constructor(t, e, a) {
                    this.productService = t, this.quantityService = e, this.orderHistoryService = a, this.orderHistoryColumns = ["OrderId", "Price", "Status", "StatusButton"], this.displayedColumns = ["Product", "Price", "Quantity"], this.confirmation = void 0, this.error = void 0
                }

                ngAfterViewInit() {
                    this.loadQuantity(), this.loadProducts(), this.loadOrders()
                }

                loadQuantity() {
                    this.quantitySubscription = this.quantityService.getAll().subscribe(t => {
                        this.quantityMap = {}, t.map(t => {
                            this.quantityMap[t.ProductId] = {id: t.id, quantity: t.quantity}
                        })
                    }, t => {
                        this.error = t.error, this.confirmation = null, console.log(t)
                    })
                }

                loadProducts() {
                    this.productSubscription = this.productService.search("").subscribe(t => {
                        this.tableData = t, this.dataSource = new E.o(this.tableData), this.dataSource.paginator = this.paginator
                    }, t => console.log(t))
                }

                loadOrders() {
                    this.orderHistoryService.getAll().subscribe(t => {
                        this.orderData = [];
                        for (const e of t) this.orderData.push({
                            id: e._id,
                            orderId: e.orderId,
                            totalPrice: e.totalPrice,
                            delivered: e.delivered
                        });
                        this.orderSource = new E.o(this.orderData), this.orderSource.paginator = this.paginatorOrderHistory
                    }, t => console.log(t))
                }

                ngOnDestroy() {
                    this.productSubscription && this.productSubscription.unsubscribe(), this.quantitySubscription && this.quantitySubscription.unsubscribe()
                }

                modifyQuantity(t, e) {
                    this.error = null, this.quantityService.put(t, {quantity: e < 0 ? 0 : e}).subscribe(t => {
                        const e = this.tableData.find(e => e.id === t.ProductId);
                        this.confirmation = "Quantity for " + e.name + " has been updated.", this.loadQuantity()
                    }, t => {
                        this.error = t.error, this.confirmation = null, console.log(t)
                    })
                }

                modifyPrice(t, e) {
                    this.error = null, this.productService.put(t, {price: e < 0 ? 0 : e}).subscribe(t => {
                        this.confirmation = "Price for " + t.name + " has been updated.", this.loadProducts()
                    }, t => {
                        this.error = t.error, this.confirmation = null, console.log(t)
                    })
                }

                changeDeliveryStatus(t, e) {
                    this.orderHistoryService.toggleDeliveryStatus(e, {deliveryStatus: t}).subscribe(() => {
                        this.loadOrders()
                    }, t => console.log(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(qe), i.Nb($e), i.Nb(Cr))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-accounting"]],
                viewQuery: function (t, e) {
                    var a;
                    1 & t && (i.Bc(wr, !0), i.Bc(yr, !0)), 2 & t && (i.rc(a = i.bc()) && (e.paginatorOrderHistory = a.first), i.rc(a = i.bc()) && (e.paginator = a.first))
                },
                decls: 49,
                vars: 20,
                consts: [["fxLayout", "row", "fxLayoutGap", "5%", "fxLayout.lt-md", "column", "fxLayoutGap.lt-md", "20px", 1, "main-wrapper"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "50%"], [1, "table-container", "custom-slate", "mat-elevation-z6"], [1, "heading"], [3, "dataSource"], ["matColumnDef", "OrderId"], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "Status"], ["translate", "LABEL_STATUS", "fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "StatusButton"], ["fxFlex", "15%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [1, "mat-elevation-z6", 3, "pageSize", "pageSizeOptions"], ["paginatorOrderHistory", ""], ["fxFlex", "50%"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxLayoutAlign", "center"], ["style", "margin-top:5px;", 4, "ngIf"], ["matColumnDef", "Product"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matHeaderCellDef"], ["fxFlex", "50%", "fxFlex.lt-md", "50%", 4, "matCellDef"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matCellDef"], ["matColumnDef", "Quantity"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%", 4, "matHeaderCellDef"], ["paginator", ""], ["translate", "LABEL_ORDER_ID", "fxFlex", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "15%"], ["fxFlex", "15%"], ["translate", "LABEL_STATUS", "fxFlex", "20%"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [2, "margin-top", "5px"], [1, "confirmation"], [1, "error"], ["translate", "LABEL_PRODUCT", "fxFlex", "50%", "fxFlex.lt-md", "50%"], ["fxFlex", "50%", "fxFlex.lt-md", "50%"], ["translate", "LABEL_PRICE", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["fxFlex", "25%", "fxFlex.lt-md", "25%"], [1, "input-field"], ["matInput", "", "type", "number", 3, "value"], ["price", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "fas", "fa-check"], ["translate", "LABEL_QUANTITY", "fxFlex", "25%", "fxFlex.lt-md", "25%"], ["quanitity", ""]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "div", 1), i.Tb(2, "div", 2), i.Tb(3, "div", 3), i.Tb(4, "div"), i.Hc(5), i.fc(6, "translate"), i.Sb(), i.Sb(), i.Tb(7, "mat-table", 4), i.Rb(8, 5), i.Fc(9, kr, 1, 0, "mat-header-cell", 6), i.Fc(10, Or, 2, 1, "mat-cell", 7), i.Qb(), i.Rb(11, 8), i.Fc(12, Ir, 1, 0, "mat-header-cell", 9), i.Fc(13, _r, 2, 1, "mat-cell", 10), i.Qb(), i.Rb(14, 11), i.Fc(15, xr, 1, 0, "mat-header-cell", 12), i.Fc(16, Pr, 3, 2, "mat-cell", 13), i.Qb(), i.Rb(17, 14), i.Fc(18, Ar, 1, 0, "mat-header-cell", 15), i.Fc(19, Dr, 3, 2, "mat-cell", 10), i.Qb(), i.Fc(20, Nr, 1, 0, "mat-header-row", 16), i.Fc(21, Fr, 1, 0, "mat-row", 17), i.Sb(), i.Ob(22, "mat-divider"), i.Ob(23, "mat-paginator", 18, 19), i.Sb(), i.Sb(), i.Tb(25, "div", 20), i.Tb(26, "div", 21), i.Tb(27, "div", 2), i.Tb(28, "div", 3), i.Tb(29, "div"), i.Hc(30), i.fc(31, "translate"), i.Sb(), i.Fc(32, Mr, 3, 1, "div", 22), i.Fc(33, Rr, 3, 1, "div", 22), i.Sb(), i.Tb(34, "mat-table", 4), i.Rb(35, 23), i.Fc(36, Ur, 1, 0, "mat-header-cell", 24), i.Fc(37, jr, 2, 1, "mat-cell", 25), i.Qb(), i.Rb(38, 8), i.Fc(39, Jr, 1, 0, "mat-header-cell", 26), i.Fc(40, Gr, 6, 1, "mat-cell", 27), i.Qb(), i.Rb(41, 28), i.Fc(42, zr, 1, 0, "mat-header-cell", 29), i.Fc(43, qr, 6, 1, "mat-cell", 27), i.Qb(), i.Fc(44, Wr, 1, 0, "mat-header-row", 16), i.Fc(45, Yr, 1, 0, "mat-row", 17), i.Sb(), i.Ob(46, "mat-divider"), i.Ob(47, "mat-paginator", 18, 30), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(5), i.Ic(i.gc(6, 14, "TITLE_TRACK_ORDERS")), i.Bb(2), i.kc("dataSource", e.orderSource), i.Bb(13), i.kc("matHeaderRowDef", e.orderHistoryColumns), i.Bb(1), i.kc("matRowDefColumns", e.orderHistoryColumns), i.Bb(2), i.kc("pageSize", 10)("pageSizeOptions", i.oc(18, Vr)), i.Bb(7), i.Ic(i.gc(31, 16, "TITLE_ALL_PRODUCTS")), i.Bb(2), i.kc("ngIf", e.confirmation), i.Bb(1), i.kc("ngIf", e.error), i.Bb(1), i.kc("dataSource", e.dataSource), i.Bb(10), i.kc("matHeaderRowDef", e.displayedColumns), i.Bb(1), i.kc("matRowDefColumns", e.displayedColumns), i.Bb(2), i.kc("pageSize", 10)("pageSizeOptions", i.oc(19, Vr)))
                },
                directives: [p.d, p.e, p.b, E.n, E.c, E.i, E.b, E.k, E.m, Fe.a, We.a, p.c, L.l, E.h, f.a, E.a, S.a, Ce.a, ve.a, E.j, E.l, Et.c, Lt.b, Et.h],
                pipes: [f.d],
                styles: [".table-container[_ngcontent-%COMP%]{min-width:350px}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.product[_ngcontent-%COMP%]{cursor:pointer}.input-field[_ngcontent-%COMP%]{width:80px}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}"]
            }), t
        })();
        const $r = function (t) {
            return {numberdays: t}
        };

        function Kr(t, e) {
            if (1 & t && (i.Tb(0, "span"), i.Tb(1, "div", 30), i.Hc(2, "ESTIMATED_TIME_OF_DELIVERY"), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.Bb(1), i.kc("translateParams", i.pc(1, $r, t.orderDetails.eta))
            }
        }

        function Xr(t, e) {
            if (1 & t && (i.Tb(0, "div"), i.Fc(1, Kr, 3, 3, "span", 7), i.Tb(2, "div"), i.Tb(3, "b", 4), i.Hc(4, "LABEL_DELIVERY_ADDRESS"), i.Sb(), i.Sb(), i.Tb(5, "div"), i.Hc(6), i.Sb(), i.Tb(7, "div"), i.Hc(8), i.Sb(), i.Tb(9, "div"), i.Hc(10), i.Sb(), i.Tb(11, "div"), i.Tb(12, "span", 4), i.Hc(13, "PHONE_NUMBER"), i.Sb(), i.Hc(14), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("ngIf", "?" !== t.orderDetails.eta && void 0 !== t.orderDetails.eta), i.Bb(5), i.Ic(null == t.address ? null : t.address.fullName), i.Bb(2), i.Lc("", null == t.address ? null : t.address.streetAddress, ", ", null == t.address ? null : t.address.city, ", ", null == t.address ? null : t.address.state, ", ", null == t.address ? null : t.address.zipCode, ""), i.Bb(2), i.Ic(null == t.address ? null : t.address.country), i.Bb(4), i.Jc(" ", null == t.address ? null : t.address.mobileNum, "")
            }
        }

        function Zr(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 4), i.Hc(1, "LABEL_PRODUCT"), i.Sb())
        }

        function tc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell"), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.name, " ")
            }
        }

        function ec(t, e) {
            1 & t && i.Ob(0, "mat-footer-cell")
        }

        function ac(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 4), i.Hc(1, "LABEL_PRICE"), i.Sb())
        }

        function ic(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell"), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.price, "\xa4")
            }
        }

        function oc(t, e) {
            1 & t && i.Ob(0, "mat-footer-cell")
        }

        function nc(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 4), i.Hc(1, "LABEL_QUANTITY"), i.Sb())
        }

        function rc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell"), i.Tb(1, "span"), i.Hc(2), i.Sb(), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(2), i.Ic(t.quantity)
            }
        }

        function cc(t, e) {
            1 & t && (i.Tb(0, "mat-footer-cell"), i.Tb(1, "table", 31), i.Tb(2, "tr", 32), i.Tb(3, "td", 4), i.Hc(4, "ITEMS"), i.Sb(), i.Sb(), i.Tb(5, "tr", 32), i.Tb(6, "td", 4), i.Hc(7, "DELIVERY"), i.Sb(), i.Sb(), i.Tb(8, "tr", 32), i.Tb(9, "td", 4), i.Hc(10, "PROMOTION"), i.Sb(), i.Sb(), i.Tb(11, "tr", 33), i.Tb(12, "td", 4), i.Hc(13, "LABEL_TOTAL_PRICE"), i.Sb(), i.Sb(), i.Sb(), i.Sb())
        }

        function sc(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 4), i.Hc(1, "LABEL_TOTAL_PRICE"), i.Sb())
        }

        function lc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 34), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.total.toFixed(2), "\xa4")
            }
        }

        function bc(t, e) {
            if (1 & t && (i.Tb(0, "mat-footer-cell"), i.Tb(1, "table", 34), i.Tb(2, "tr", 32), i.Tb(3, "td"), i.Hc(4), i.Sb(), i.Sb(), i.Tb(5, "tr", 32), i.Tb(6, "td"), i.Hc(7), i.Sb(), i.Sb(), i.Tb(8, "tr", 32), i.Tb(9, "td"), i.Hc(10), i.Sb(), i.Sb(), i.Tb(11, "tr", 33), i.Tb(12, "td"), i.Hc(13), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(4), i.Jc("", null == t.orderDetails.itemTotal ? null : t.orderDetails.itemTotal.toFixed(2), "\xa4"), i.Bb(3), i.Jc("", t.deliveryPrice.toFixed(2), "\xa4"), i.Bb(3), i.Jc("", t.promotionalDiscount.toFixed(2), "\xa4"), i.Bb(3), i.Jc("", null == t.orderDetails.totalPrice ? null : t.orderDetails.totalPrice.toFixed(2), "\xa4")
            }
        }

        function uc(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function dc(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function mc(t, e) {
            1 & t && i.Ob(0, "mat-footer-row", 35)
        }

        const hc = function (t) {
            return {id: t}
        }, pc = function (t) {
            return {bonus: t}
        };
        u.b.add(d.k), u.a.watch();
        let gc = (() => {
            class t {
                constructor(t, e, a, i, o) {
                    this.configurationService = t, this.addressService = e, this.trackOrderService = a, this.activatedRoute = i, this.basketService = o, this.tableColumns = ["product", "price", "quantity", "total price"], this.orderDetails = {totalPrice: 0}, this.deliveryPrice = 0, this.promotionalDiscount = 0, this.tweetText = "I just purchased", this.truncateTweet = (t, e = 140) => {
                        if (!t) return null;
                        const a = t.length > e;
                        return `${t.substring(0, e)}${a ? "..." : ""}`
                    }
                }

                ngOnInit() {
                    this.activatedRoute.paramMap.subscribe(t => {
                        this.orderId = t.get("id"), this.trackOrderService.save(this.orderId).subscribe(t => {
                            this.promotionalDiscount = t.data[0].promotionalAmount ? parseFloat(t.data[0].promotionalAmount) : 0, this.deliveryPrice = t.data[0].deliveryPrice ? parseFloat(t.data[0].deliveryPrice) : 0, this.orderDetails.addressId = t.data[0].addressId, this.orderDetails.paymentId = t.data[0].paymentId, this.orderDetails.totalPrice = t.data[0].totalPrice, this.orderDetails.itemTotal = t.data[0].totalPrice + this.promotionalDiscount - this.deliveryPrice, this.orderDetails.eta = t.data[0].eta || "?", this.orderDetails.products = t.data[0].products, this.orderDetails.bonus = t.data[0].bonus, this.dataSource = new E.o(this.orderDetails.products);
                            for (const e of this.orderDetails.products) this.tweetText += "%0a- " + e.name;
                            this.tweetText = this.truncateTweet(this.tweetText), this.configurationService.getApplicationConfiguration().subscribe(t => {
                                t && t.application && t.application.social && (this.tweetText += "%0afrom ", this.tweetText += t.application.social.twitterUrl ? t.application.social.twitterUrl.replace("https://twitter.com/", "@") : t.application.name)
                            }, t => console.log(t)), this.addressService.getById(this.orderDetails.addressId).subscribe(t => {
                                this.address = t
                            }, t => console.log(t))
                        }, t => console.log(t))
                    }, t => console.log(t))
                }

                openConfirmationPDF() {
                    window.open(this.basketService.hostServer + "/ftp/order_" + this.orderId + ".pdf", "_blank")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(b), i.Nb(ki), i.Nb(st), i.Nb(y.a), i.Nb(O))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-order-completion"]],
                decls: 51,
                vars: 18,
                consts: [[1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "row", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["translate", "", 1, "confirmation"], ["translate", ""], ["routerLink", "/track-result/new", "translate", "", 3, "queryParams"], ["fxFlex", "40%", 1, "mat-elevation-z0"], [4, "ngIf"], [1, "mat-elevation-z0", "table-container"], [1, "heading"], [1, "heading-text"], ["fxFlex", ""], [3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", 4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "price"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", 4, "matCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], [1, "mat-elevation-z0"], ["translate", "", 3, "translateParams"], ["translate", "", 1, "confirmation", 3, "translateParams"], [1, "mat-table"], [1, "mat-row"], [1, "mat-row", 2, "font-weight", "bold"], [1, "price-align"], ["mat-footer-row", ""]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "div"), i.Tb(2, "div", 1), i.Tb(3, "mat-card", 2), i.Tb(4, "div"), i.Tb(5, "h1", 3), i.Hc(6, "THANKS_FOR_PURCHASE"), i.Sb(), i.Tb(7, "div", 4), i.Hc(8, "PURCHASE_COMMENT_PREFIX "), i.Tb(9, "a", 5), i.Hc(10, "TITLE_TRACK_ORDERS"), i.Sb(), i.Hc(11, " PURCHASE_COMMENT_SUFFIX"), i.Sb(), i.Sb(), i.Sb(), i.Tb(12, "mat-card", 6), i.Fc(13, Xr, 15, 8, "div", 7), i.Sb(), i.Sb(), i.Sb(), i.Tb(14, "div", 8), i.Tb(15, "div", 9), i.Tb(16, "span", 10), i.Hc(17), i.fc(18, "translate"), i.Sb(), i.Ob(19, "span", 11), i.Tb(20, "a", 12), i.Tb(21, "button", 13), i.Ob(22, "i", 14), i.Sb(), i.Sb(), i.Tb(23, "button", 15), i.ac("click", (function () {
                        return e.openConfirmationPDF()
                    })), i.fc(24, "translate"), i.Tb(25, "mat-icon"), i.Hc(26, " note "), i.Sb(), i.Sb(), i.Sb(), i.Tb(27, "mat-table", 16), i.Rb(28, 17), i.Fc(29, Zr, 2, 0, "mat-header-cell", 18), i.Fc(30, tc, 2, 1, "mat-cell", 19), i.Fc(31, ec, 1, 0, "mat-footer-cell", 20), i.Qb(), i.Rb(32, 21), i.Fc(33, ac, 2, 0, "mat-header-cell", 18), i.Fc(34, ic, 2, 1, "mat-cell", 19), i.Fc(35, oc, 1, 0, "mat-footer-cell", 20), i.Qb(), i.Rb(36, 22), i.Fc(37, nc, 2, 0, "mat-header-cell", 18), i.Fc(38, rc, 3, 1, "mat-cell", 19), i.Fc(39, cc, 14, 0, "mat-footer-cell", 20), i.Qb(), i.Rb(40, 23), i.Fc(41, sc, 2, 0, "mat-header-cell", 18), i.Fc(42, lc, 2, 1, "mat-cell", 24), i.Fc(43, bc, 14, 4, "mat-footer-cell", 20), i.Qb(), i.Fc(44, uc, 1, 0, "mat-header-row", 25), i.Fc(45, dc, 1, 0, "mat-row", 26), i.Fc(46, mc, 1, 0, "mat-footer-row", 27), i.Sb(), i.Sb(), i.Tb(47, "div"), i.Tb(48, "mat-card", 28), i.Tb(49, "div", 29), i.Hc(50, "BONUS_POINTS_COUNT"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(9), i.kc("queryParams", i.pc(14, hc, e.orderId)), i.Bb(4), i.kc("ngIf", e.address), i.Bb(4), i.Ic(i.gc(18, 10, "ORDER_SUMMARY")), i.Bb(3), i.mc("href", "https://twitter.com/intent/tweet?text=", e.tweetText, "&hashtags=security", i.yc), i.Bb(3), i.lc("matTooltip", i.gc(24, 12, "PRINT_ORDER_CONFIRMATION")), i.Bb(4), i.kc("dataSource", e.dataSource), i.Bb(17), i.kc("matHeaderRowDef", e.tableColumns), i.Bb(1), i.kc("matRowDefColumns", e.tableColumns), i.Bb(1), i.kc("matFooterRowDef", e.tableColumns), i.Bb(3), i.kc("translateParams", i.pc(16, pc, e.orderDetails.bonus)))
                },
                directives: [g.a, p.d, p.b, f.a, y.d, L.l, S.a, Ce.a, ve.a, E.n, E.c, E.i, E.b, E.e, E.k, E.m, E.g, E.h, E.a, E.d, E.j, E.l, E.f],
                pipes: [f.d],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%], mat-header-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
            }), t
        })();

        function fc(t, e) {
            if (1 & t && (i.Tb(0, "mat-card", 20), i.Tb(1, "div"), i.Tb(2, "div"), i.Tb(3, "b", 14), i.Hc(4, "PAYMENT_METHOD"), i.Sb(), i.Sb(), i.Tb(5, "div"), i.Tb(6, "span", 14), i.Hc(7, "CARD_ENDING_IN"), i.Sb(), i.Hc(8), i.Sb(), i.Tb(9, "div"), i.Tb(10, "span", 14), i.Hc(11, "CARD_HOLDER"), i.Sb(), i.Hc(12), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.Bb(8), i.Jc(" ", null == t.paymentMethod ? null : t.paymentMethod.cardNum, ""), i.Bb(4), i.Jc(" ", null == t.paymentMethod ? null : t.paymentMethod.fullName, "")
            }
        }

        function Sc(t, e) {
            1 & t && (i.Tb(0, "mat-card", 20), i.Tb(1, "div"), i.Tb(2, "div"), i.Tb(3, "b", 14), i.Hc(4, "PAYMENT_METHOD"), i.Sb(), i.Sb(), i.Tb(5, "div"), i.Tb(6, "span", 14), i.Hc(7, "DIGITAL_WALLET"), i.Sb(), i.Sb(), i.Sb(), i.Sb())
        }

        function Tc(t, e) {
            if (1 & t && (i.Tb(0, "div", 16), i.Tb(1, "mat-card", 17), i.Tb(2, "div"), i.Tb(3, "div"), i.Tb(4, "b", 14), i.Hc(5, "LABEL_DELIVERY_ADDRESS"), i.Sb(), i.Sb(), i.Tb(6, "div"), i.Hc(7), i.Sb(), i.Tb(8, "div"), i.Hc(9), i.Sb(), i.Tb(10, "div"), i.Hc(11), i.Sb(), i.Tb(12, "div"), i.Tb(13, "span", 14), i.Hc(14, "PHONE_NUMBER"), i.Sb(), i.Hc(15), i.Sb(), i.Sb(), i.Sb(), i.Fc(16, fc, 13, 2, "mat-card", 18), i.Fc(17, Sc, 8, 0, "ng-template", null, 19, i.Gc), i.Sb()), 2 & t) {
                const t = i.sc(18), e = i.ec();
                i.Bb(7), i.Ic(null == e.address ? null : e.address.fullName), i.Bb(2), i.Lc("", null == e.address ? null : e.address.streetAddress, ", ", null == e.address ? null : e.address.city, ", ", null == e.address ? null : e.address.state, ", ", null == e.address ? null : e.address.zipCode, ""), i.Bb(2), i.Ic(null == e.address ? null : e.address.country), i.Bb(4), i.Jc(" ", null == e.address ? null : e.address.mobileNum, ""), i.Bb(1), i.kc("ngIf", "wallet" !== e.paymentMethod)("ngIfElse", t)
            }
        }

        const vc = function (t) {
            return {bonus: t}
        };
        let Cc = (() => {
            class t {
                constructor(t, e, a, i, o, n) {
                    this.router = t, this.addressService = e, this.paymentService = a, this.basketService = i, this.deliveryService = o, this.ngZone = n, this.bonus = 0, this.itemTotal = 0, this.deliveryPrice = 0, this.promotionalDiscount = 0
                }

                ngOnInit() {
                    this.deliveryService.getById(sessionStorage.getItem("deliveryMethodId")).subscribe(t => {
                        this.deliveryPrice = t.price
                    }), this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(t => {
                        this.address = t
                    }, t => console.log(t)), "wallet" !== sessionStorage.getItem("paymentId") ? this.paymentService.getById(sessionStorage.getItem("paymentId")).subscribe(t => {
                        t.cardNum = String(t.cardNum).substring(String(t.cardNum).length - 4), this.paymentMethod = t
                    }, t => console.log(t)) : "wallet" === sessionStorage.getItem("paymentId") && (this.paymentMethod = "wallet")
                }

                getMessage(t) {
                    this.itemTotal = t[0], this.promotionalDiscount = sessionStorage.getItem("couponDiscount") ? parseFloat(sessionStorage.getItem("couponDiscount")) / 100 * this.itemTotal : 0, this.bonus = t[1]
                }

                placeOrder() {
                    const t = {
                        paymentId: sessionStorage.getItem("paymentId"),
                        addressId: sessionStorage.getItem("addressId"),
                        deliveryMethodId: sessionStorage.getItem("deliveryMethodId")
                    };
                    this.basketService.checkout(Number(sessionStorage.getItem("bid")), btoa(sessionStorage.getItem("couponDetails")), t).subscribe(t => {
                        sessionStorage.removeItem("paymentId"), sessionStorage.removeItem("addressId"), sessionStorage.removeItem("deliveryMethodId"), sessionStorage.removeItem("couponDetails"), sessionStorage.removeItem("couponDiscount"), this.basketService.updateNumberOfCardItems(), this.ngZone.run(() => this.router.navigate(["/order-completion", t]))
                    }, t => console.log(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(y.b), i.Nb(ki), i.Nb(En), i.Nb(O), i.Nb(An), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-order-summary"]],
                decls: 36,
                vars: 10,
                consts: [["fxLayout", "row", "fxLayoutGap", "10%", "fxLayout.lt-md", "column", 1, "mat-elevation-z6", "mat-own-card"], ["fxLayout", "column", "fxLayoutGap", "20px", "fxFlex", "70%"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column", 4, "ngIf"], [3, "allowEdit", "totalPrice", "emitTotal"], ["fxFlex", "40%"], [1, "mat-elevation-z0"], ["translate", "", 1, "order-summary"], [1, "mat-table"], [1, "mat-row"], ["translate", "", 1, "mat-cell", "label"], [1, "mat-cell", "price"], ["translate", "", 1, "mat-footer-cell", "label"], [1, "mat-footer-cell", "price"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Complete your purchase", "id", "checkoutButton", 1, "btn", "btn-pay", 3, "click"], ["translate", ""], ["translate", "", 1, "bonus-points", 3, "translateParams"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "60%", 1, "mat-elevation-z0"], ["class", "mat-elevation-z0", "fxFlex", "40%", 4, "ngIf", "ngIfElse"], ["walletPayment", ""], ["fxFlex", "40%", 1, "mat-elevation-z0"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "div", 1), i.Fc(2, Tc, 19, 9, "div", 2), i.Tb(3, "app-purchase-basket", 3), i.ac("emitTotal", (function (t) {
                        return e.getMessage(t)
                    })), i.Sb(), i.Sb(), i.Tb(4, "div", 4), i.Tb(5, "mat-card", 5), i.Tb(6, "div", 6), i.Hc(7, "ORDER_SUMMARY"), i.Sb(), i.Tb(8, "table", 7), i.Tb(9, "tr", 8), i.Tb(10, "td", 9), i.Hc(11, "ITEMS"), i.Sb(), i.Tb(12, "td", 10), i.Hc(13), i.Sb(), i.Sb(), i.Tb(14, "tr", 8), i.Tb(15, "td", 9), i.Hc(16, "DELIVERY"), i.Sb(), i.Tb(17, "td", 10), i.Hc(18), i.Sb(), i.Sb(), i.Tb(19, "tr", 8), i.Tb(20, "td", 9), i.Hc(21, "PROMOTION"), i.Sb(), i.Tb(22, "td", 10), i.Hc(23), i.Sb(), i.Sb(), i.Tb(24, "tr", 8), i.Tb(25, "td", 11), i.Hc(26, "LABEL_TOTAL_PRICE"), i.Sb(), i.Tb(27, "td", 12), i.Hc(28), i.Sb(), i.Sb(), i.Sb(), i.Tb(29, "button", 13), i.ac("click", (function () {
                        return e.placeOrder()
                    })), i.Tb(30, "mat-icon"), i.Hc(31, " monetization_on "), i.Sb(), i.Tb(32, "span", 14), i.Hc(33, "PLACE_ORDER_AND_PAY"), i.Sb(), i.Sb(), i.Tb(34, "div", 15), i.Hc(35, "CHECKOUT_FOR_BONUS_POINTS"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(2), i.kc("ngIf", e.address && e.paymentMethod), i.Bb(1), i.kc("allowEdit", !1)("totalPrice", !1), i.Bb(10), i.Jc("", null == e.itemTotal ? null : e.itemTotal.toFixed(2), "\xa4"), i.Bb(5), i.Jc("", e.deliveryPrice.toFixed(2), "\xa4"), i.Bb(5), i.Jc("", e.promotionalDiscount.toFixed(2), "\xa4"), i.Bb(5), i.Jc("", e.itemTotal + e.deliveryPrice - e.promotionalDiscount == null ? null : (e.itemTotal + e.deliveryPrice - e.promotionalDiscount).toFixed(2), "\xa4 "), i.Bb(6), i.kc("translateParams", i.pc(8, vc, e.bonus)))
                },
                directives: [g.a, p.d, p.e, p.b, L.l, nt, f.a, S.a, ve.a],
                styles: [".btn-pay[_ngcontent-%COMP%]{display:block;margin-top:10px;width:100%}mat-card[_ngcontent-%COMP%]{height:auto;margin-top:20px}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price[_ngcontent-%COMP%]:last-of-type{padding-right:10px;text-align:right}.label[_ngcontent-%COMP%]:first-of-type{padding-left:10px}table[_ngcontent-%COMP%]{width:100%}.mat-footer-cell[_ngcontent-%COMP%]{font-weight:700}.order-summary[_ngcontent-%COMP%]{font-size:x-large;padding-bottom:10px;padding-left:10px}.bonus-points[_ngcontent-%COMP%]{margin-top:5px;text-align:center}"]
            }), t
        })();

        function wc(t, e) {
            1 & t && (i.Tb(0, "mat-error", 1), i.Hc(1, " MANDATORY_AMOUNT "), i.Sb())
        }

        function yc(t, e) {
            1 & t && (i.Tb(0, "mat-error", 1), i.Hc(1, " AMOUNT_LIMIT "), i.Sb())
        }

        let kc = (() => {
            class t {
                constructor(t, e, a) {
                    this.router = t, this.walletService = e, this.ngZone = a, this.balanceControl = new c.d("", [c.y.required, c.y.min(10), c.y.max(1e3)])
                }

                ngOnInit() {
                    this.walletService.get().subscribe(t => {
                        this.balance = parseFloat(t).toFixed(2)
                    }, t => {
                        console.log(t)
                    })
                }

                continue() {
                    sessionStorage.setItem("walletTotal", this.balanceControl.value), this.ngZone.run(() => this.router.navigate(["/payment", "wallet"]))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(y.b), i.Nb(Pn), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-wallet"]],
                decls: 25,
                vars: 14,
                consts: [[1, "mat-elevation-z6"], ["translate", ""], [1, "confirmation"], ["appearance", "outline", "color", "accent"], ["type", "number", "matInput", "", "aria-label", "Enter an amount", 3, "formControl"], ["translate", "", 4, "ngIf"], ["type", "submit", "id", "submitButton", "mat-raised-button", "", "color", "primary", "aria-label", "Button to continue to payment", 3, "disabled", "click"], [1, "material-icons"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "h1"), i.Tb(2, "div"), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb(), i.Tb(5, "h3", 1), i.Hc(6, "LABEL_ADD_MONEY"), i.Sb(), i.Tb(7, "p"), i.Tb(8, "b"), i.Tb(9, "span", 1), i.Hc(10, "LABEL_WALLET_BALANCE"), i.Sb(), i.Tb(11, "span", 2), i.Hc(12), i.Sb(), i.Sb(), i.Sb(), i.Tb(13, "mat-form-field", 3), i.Tb(14, "mat-label"), i.Hc(15), i.fc(16, "translate"), i.Sb(), i.Ob(17, "input", 4), i.Fc(18, wc, 2, 0, "mat-error", 5), i.Fc(19, yc, 2, 0, "mat-error", 5), i.Sb(), i.Tb(20, "button", 6), i.ac("click", (function () {
                        return e.continue()
                    })), i.Tb(21, "i", 7), i.Hc(22, " send "), i.Sb(), i.Hc(23), i.fc(24, "translate"), i.Sb(), i.Sb()), 2 & t && (i.Bb(3), i.Ic(i.gc(4, 8, "DIGITAL_WALLET")), i.Bb(9), i.Jc(" ", e.balance, ""), i.Bb(3), i.Ic(i.gc(16, 10, "LABEL_AMOUNT")), i.Bb(2), i.kc("formControl", e.balanceControl), i.Bb(1), i.kc("ngIf", e.balanceControl.invalid && e.balanceControl.errors.required), i.Bb(1), i.kc("ngIf", e.balanceControl.invalid && (e.balanceControl.errors.min || e.balanceControl.errors.max)), i.Bb(1), i.kc("disabled", e.balanceControl.invalid), i.Bb(3), i.Jc(" ", i.gc(24, 12, "LABEL_CONTINUE"), " "))
                },
                directives: [g.a, f.a, Et.c, Et.g, c.t, Lt.b, c.c, c.o, c.e, L.l, S.a, Et.b],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:30%;margin-right:30%}mat-form-field[_ngcontent-%COMP%]{padding-top:10px;width:100%}.form-container[_ngcontent-%COMP%]{min-width:350px}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:30px;width:60%}.heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}"]
            }), t
        })();

        function Oc(t, e) {
            1 & t && (i.Tb(0, "div", 32), i.Hc(1, "LABEL_IN_TRANSIT"), i.Sb())
        }

        function Ic(t, e) {
            1 & t && (i.Tb(0, "div", 33), i.Hc(1, "LABEL_DELIVERED"), i.Sb())
        }

        function _c(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 34), i.Hc(1, "LABEL_PRODUCT"), i.Sb())
        }

        function xc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 35), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.name, " ")
            }
        }

        function Bc(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 36), i.Hc(1, "LABEL_PRICE"), i.Sb())
        }

        function Hc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 37), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.price, "\xa4")
            }
        }

        function Pc(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 36), i.Hc(1, "LABEL_QUANTITY"), i.Sb())
        }

        function Ac(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 37), i.Tb(1, "span"), i.Hc(2), i.Sb(), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(2), i.Ic(t.quantity)
            }
        }

        function Ec(t, e) {
            1 & t && (i.Tb(0, "mat-header-cell", 36), i.Hc(1, "LABEL_TOTAL_PRICE"), i.Sb())
        }

        function Lc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 38), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.total.toFixed(2), "\xa4")
            }
        }

        function Dc(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 36)
        }

        function Nc(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 37), i.Tb(1, "button", 18), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(3).showDetail(a.id)
                })), i.fc(2, "translate"), i.Tb(3, "mat-icon"), i.Hc(4, " rate_review "), i.Sb(), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(1), i.lc("matTooltip", i.gc(2, 1, "WRITE_REVIEW")))
        }

        function Fc(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function Mc(t, e) {
            1 & t && i.Ob(0, "mat-row")
        }

        function Rc(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "div"), i.Tb(1, "div", 7), i.Tb(2, "div", 8), i.Tb(3, "div", 9), i.Tb(4, "div", 10), i.Tb(5, "div", 11), i.Hc(6, "LABEL_ORDER_ID"), i.Sb(), i.Tb(7, "div"), i.Hc(8), i.Sb(), i.Sb(), i.Tb(9, "div", 12), i.Tb(10, "div", 11), i.Hc(11, "LABEL_TOTAL_PRICE"), i.Sb(), i.Tb(12, "div"), i.Hc(13), i.Sb(), i.Sb(), i.Tb(14, "div", 12), i.Tb(15, "div", 11), i.Hc(16, "LABEL_BONUS"), i.Sb(), i.Tb(17, "div"), i.Hc(18), i.Sb(), i.Sb(), i.Tb(19, "div", 13), i.Fc(20, Oc, 2, 0, "div", 14), i.Fc(21, Ic, 2, 0, "div", 15), i.Sb(), i.Tb(22, "div", 16), i.Tb(23, "button", 17), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).trackOrder(a.orderId)
                })), i.fc(24, "translate"), i.Tb(25, "mat-icon"), i.Hc(26, " local_shipping "), i.Sb(), i.Sb(), i.Sb(), i.Tb(27, "div", 16), i.Tb(28, "button", 18), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec(2).openConfirmationPDF(a.orderId)
                })), i.fc(29, "translate"), i.Tb(30, "mat-icon"), i.Hc(31, " note "), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Tb(32, "mat-table", 19), i.Rb(33, 20), i.Fc(34, _c, 2, 0, "mat-header-cell", 21), i.Fc(35, xc, 2, 1, "mat-cell", 22), i.Qb(), i.Rb(36, 23), i.Fc(37, Bc, 2, 0, "mat-header-cell", 24), i.Fc(38, Hc, 2, 1, "mat-cell", 25), i.Qb(), i.Rb(39, 26), i.Fc(40, Pc, 2, 0, "mat-header-cell", 24), i.Fc(41, Ac, 3, 1, "mat-cell", 25), i.Qb(), i.Rb(42, 27), i.Fc(43, Ec, 2, 0, "mat-header-cell", 24), i.Fc(44, Lc, 2, 1, "mat-cell", 28), i.Qb(), i.Rb(45, 29), i.Fc(46, Dc, 1, 0, "mat-header-cell", 24), i.Fc(47, Nc, 5, 3, "mat-cell", 25), i.Qb(), i.Fc(48, Fc, 1, 0, "mat-header-row", 30), i.Fc(49, Mc, 1, 0, "mat-row", 31), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec(2);
                i.Bb(8), i.Jc("#", t.orderId, ""), i.Bb(5), i.Jc("", t.totalPrice.toFixed(2), "\xa4"), i.Bb(5), i.Ic(t.bonus), i.Bb(2), i.kc("ngIf", !t.delivered), i.Bb(1), i.kc("ngIf", t.delivered), i.Bb(2), i.lc("matTooltip", i.gc(24, 10, "LABEL_TRACK_ORDER")), i.Bb(5), i.lc("matTooltip", i.gc(29, 12, "PRINT_ORDER_CONFIRMATION")), i.Bb(4), i.kc("dataSource", t.products), i.Bb(16), i.kc("matHeaderRowDef", a.tableColumns), i.Bb(1), i.kc("matRowDefColumns", a.tableColumns)
            }
        }

        function Uc(t, e) {
            if (1 & t && (i.Tb(0, "div", 5), i.Fc(1, Rc, 50, 14, "div", 6), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("ngForOf", t.orders)
            }
        }

        function jc(t, e) {
            1 & t && (i.Tb(0, "mat-card", 39), i.Ob(1, "img", 40), i.Tb(2, "mat-card-title"), i.Tb(3, "span", 41), i.Hc(4, " NO_SEARCH_RESULT "), i.Sb(), i.Sb(), i.Tb(5, "mat-card-content"), i.Tb(6, "span", 41), i.Hc(7, " NO_ORDERS_PLACED "), i.Sb(), i.Sb(), i.Sb())
        }

        let Jc = (() => {
            class t {
                constructor(t, e, a, i, o, n) {
                    this.router = t, this.dialog = e, this.orderHistoryService = a, this.basketService = i, this.productService = o, this.ngZone = n, this.tableColumns = ["product", "price", "quantity", "total price", "review"], this.orders = [], this.emptyState = !0
                }

                ngOnInit() {
                    this.orderHistoryService.get().subscribe(t => {
                        t = t.reverse(), this.emptyState = 0 === t.length;
                        for (const e of t) {
                            const t = [];
                            for (const a of e.products) t.push({
                                id: a.id,
                                name: a.name,
                                price: a.price,
                                quantity: a.quantity,
                                total: a.total
                            });
                            this.orders.push({
                                orderId: e.orderId,
                                totalPrice: e.totalPrice,
                                bonus: e.bonus,
                                products: new E.o(t),
                                delivered: e.delivered
                            })
                        }
                    }, t => console.log(t))
                }

                showDetail(t) {
                    this.productService.get(t).subscribe(t => {
                        const e = {
                            id: t.id,
                            name: t.name,
                            description: t.description,
                            image: t.image,
                            price: t.price,
                            points: Math.round(t.price / 10)
                        };
                        this.dialog.open(ze, {width: "500px", height: "max-content", data: {productData: e}})
                    }, t => console.log(t))
                }

                openConfirmationPDF(t) {
                    window.open(this.basketService.hostServer + "/ftp/order_" + t + ".pdf", "_blank")
                }

                trackOrder(t) {
                    this.ngZone.run(() => this.router.navigate(["/track-result"], {queryParams: {id: t}}))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(y.b), i.Nb(Ee.b), i.Nb(Cr), i.Nb(O), i.Nb(qe), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-order-history"]],
                decls: 8,
                vars: 5,
                consts: [["fxLayout", "column", "fxLayoutGap", "20px", 1, "main-wrapper"], [1, "heading", "mat-elevation-z6"], [1, "heading-main"], ["fxLayout", "column", "fxLayoutGap", "20px", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], ["fxLayout", "column", "fxLayoutGap", "20px"], [4, "ngFor", "ngForOf"], [1, "mat-elevation-z6", "table-container", "custom-slate"], [1, "heading"], ["fxLayout", "row"], ["fxFlex", "40%", "fxLayout", "column"], ["translate", ""], ["fxFlex", "15%", "fxLayout", "column"], ["fxFlex", "20%"], ["class", "error", "translate", "", 4, "ngIf"], ["class", "confirmation", "translate", "", 4, "ngIf"], ["fxFlex", "5%", "fxLayoutAlign", "end"], ["mat-icon-button", "", "aria-label", "Track Your Order", "matTooltipPosition", "below", 3, "matTooltip", "click"], ["mat-icon-button", "", "aria-label", "Print order confirmation", "matTooltipPosition", "below", 3, "matTooltip", "click"], [3, "dataSource"], ["matColumnDef", "product"], ["translate", "", "fxFlex", "40%", 4, "matHeaderCellDef"], ["fxFlex", "40%", 4, "matCellDef"], ["matColumnDef", "price"], ["translate", "", "fxFlex", "15%", 4, "matHeaderCellDef"], ["fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "quantity"], ["matColumnDef", "total price"], ["class", "price-align", "fxFlex", "15%", 4, "matCellDef"], ["matColumnDef", "review"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], ["translate", "", 1, "error"], ["translate", "", 1, "confirmation"], ["translate", "", "fxFlex", "40%"], ["fxFlex", "40%"], ["translate", "", "fxFlex", "15%"], ["fxFlex", "15%"], ["fxFlex", "15%", 1, "price-align"], [1, "mat-elevation-z6", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "div", 0), i.Tb(1, "div", 1), i.Tb(2, "div", 2), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb(), i.Fc(5, Uc, 2, 1, "div", 3), i.Fc(6, jc, 8, 0, "ng-template", null, 4, i.Gc), i.Sb()), 2 & t) {
                        const t = i.sc(7);
                        i.Bb(3), i.Ic(i.gc(4, 3, "LABEL_ORDER_HISTORY")), i.Bb(2), i.kc("ngIf", !e.emptyState)("ngIfElse", t)
                    }
                },
                directives: [p.d, p.e, L.l, L.k, p.b, f.a, p.c, S.a, Ce.a, ve.a, E.n, E.c, E.i, E.b, E.k, E.m, E.h, E.a, E.j, E.l, g.a, g.f, g.b],
                pipes: [f.d],
                styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);padding:12px 20px}.heading-main[_ngcontent-%COMP%]{font-size:x-large;justify-content:center}.heading-text[_ngcontent-%COMP%]{justify-content:center;padding:12px 20px}mat-card[_ngcontent-%COMP%]{height:auto}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}mat-cell[_ngcontent-%COMP%], mat-footer-cell[_ngcontent-%COMP%]{padding-left:10px;padding-right:10px}.price-align[_ngcontent-%COMP%]{text-align:right}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}"]
            }), t
        })();

        function Gc(t, e) {
            if (1 & t && (i.Tb(0, "div", 22), i.Tb(1, "h1", 4), i.Hc(2, "LABEL_DELIVERY_ADDRESS"), i.Sb(), i.Tb(3, "div"), i.Hc(4), i.Sb(), i.Tb(5, "div"), i.Hc(6), i.Sb(), i.Tb(7, "div"), i.Hc(8), i.Sb(), i.Tb(9, "div"), i.Tb(10, "span", 4), i.Hc(11, "PHONE_NUMBER"), i.Sb(), i.Hc(12), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(4), i.Ic(null == t.address ? null : t.address.fullName), i.Bb(2), i.Lc("", null == t.address ? null : t.address.streetAddress, ", ", null == t.address ? null : t.address.city, ", ", null == t.address ? null : t.address.state, ", ", null == t.address ? null : t.address.zipCode, ""), i.Bb(2), i.Ic(null == t.address ? null : t.address.country), i.Bb(4), i.Jc(" ", null == t.address ? null : t.address.mobileNum, "")
            }
        }

        function zc(t, e) {
            1 & t && i.Ob(0, "mat-divider", 23)
        }

        function qc(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 24)
        }

        function Wc(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-cell", 24), i.Tb(1, "mat-radio-button", 25), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().selectMethod(a.id)
                }))("change", (function (a) {
                    i.vc(t);
                    const o = e.$implicit, n = i.ec();
                    return a ? n.selection.toggle(o) : null
                })), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec();
                i.Bb(1), i.kc("checked", a.selection.isSelected(t))
            }
        }

        function Yc(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 26)
        }

        function Vc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 26), i.Ob(1, "i", 27), i.Hc(2), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.kc("ngClass", t.icon), i.Bb(1), i.Jc("\xa0", t.name, "")
            }
        }

        function Qc(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 28)
        }

        function $c(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 29), i.Hc(1), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Jc("", t.price.toFixed(2), "\xa4")
            }
        }

        function Kc(t, e) {
            1 & t && i.Ob(0, "mat-header-cell", 30)
        }

        function Xc(t, e) {
            if (1 & t && (i.Tb(0, "mat-cell", 29), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t) {
                const t = e.$implicit;
                i.Bb(1), i.Kc("", t.eta, " ", i.gc(2, 2, "LABEL_DAYS"), "")
            }
        }

        function Zc(t, e) {
            1 & t && i.Ob(0, "mat-header-row")
        }

        function ts(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-row", 31), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit, o = e.$implicit, n = i.ec();
                    return n.selection.toggle(a), n.selectMethod(o.id)
                })), i.Sb()
            }
        }

        u.b.add(m.H, m.K, m.bb), u.a.watch();
        let es = (() => {
            class t {
                constructor(t, e, a, i, o) {
                    this.location = t, this.deliverySerivce = e, this.addressService = a, this.router = i, this.ngZone = o, this.displayedColumns = ["Selection", "Name", "Price", "ETA"], this.deliveryMethodId = void 0, this.selection = new Oi.c(!1, [])
                }

                ngOnInit() {
                    this.addressService.getById(sessionStorage.getItem("addressId")).subscribe(t => {
                        this.address = t
                    }, t => console.log(t)), this.deliverySerivce.get().subscribe(t => {
                        console.log(t), this.methods = t, this.dataSource = new E.o(this.methods)
                    }, t => console.log(t))
                }

                selectMethod(t) {
                    this.deliveryMethodId = this.selection.hasValue() || t ? t : void 0
                }

                routeToPreviousUrl() {
                    this.location.back()
                }

                chooseDeliveryMethod() {
                    sessionStorage.setItem("deliveryMethodId", this.deliveryMethodId.toString()), this.ngZone.run(() => this.router.navigate(["/payment", "shop"]))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(L.g), i.Nb(An), i.Nb(ki), i.Nb(y.b), i.Nb(i.B))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-delivery-method"]],
                decls: 33,
                vars: 9,
                consts: [[1, "mat-elevation-z6"], ["class", "addressCont", 4, "ngIf"], ["class", "detail-divider", 4, "ngIf"], [2, "height", "12px"], ["translate", ""], [3, "dataSource"], ["matColumnDef", "Selection"], ["fxFlex", "20%", 4, "matHeaderCellDef"], ["fxFlex", "20%", 4, "matCellDef"], ["matColumnDef", "Name"], ["fxFlex", "30%", 4, "matHeaderCellDef"], ["fxFlex", "30%", 4, "matCellDef"], ["matColumnDef", "Price"], ["translate", "LABEL_PRICE", "fxFlex", "25%", 4, "matHeaderCellDef"], ["fxFlex", "25%", 4, "matCellDef"], ["matColumnDef", "ETA"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%", 4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [3, "click", 4, "matRowDef", "matRowDefColumns"], [2, "margin-top", "20px"], ["mat-stroked-button", "", 1, "btn", "btn-return", 3, "click"], ["mat-raised-button", "", "mat-button", "", "color", "primary", "aria-label", "Proceed to delivery method selection", 1, "btn", "nextButton", 3, "disabled", "click"], [1, "addressCont"], [1, "detail-divider"], ["fxFlex", "20%"], [3, "checked", "click", "change"], ["fxFlex", "30%"], [3, "ngClass"], ["translate", "LABEL_PRICE", "fxFlex", "25%"], ["fxFlex", "25%"], ["translate", "LABEL_EXPECTED_DELIVERY", "fxFlex", "25%"], [3, "click"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-card", 0), i.Fc(1, Gc, 13, 7, "div", 1), i.Fc(2, zc, 1, 0, "mat-divider", 2), i.Ob(3, "div", 3), i.Tb(4, "div"), i.Tb(5, "h1", 4), i.Hc(6, "LABEL_CHOOSE_A_DELIVERY_SPEED"), i.Sb(), i.Tb(7, "mat-table", 5), i.Rb(8, 6), i.Fc(9, qc, 1, 0, "mat-header-cell", 7), i.Fc(10, Wc, 2, 1, "mat-cell", 8), i.Qb(), i.Rb(11, 9), i.Fc(12, Yc, 1, 0, "mat-header-cell", 10), i.Fc(13, Vc, 3, 2, "mat-cell", 11), i.Qb(), i.Rb(14, 12), i.Fc(15, Qc, 1, 0, "mat-header-cell", 13), i.Fc(16, $c, 2, 1, "mat-cell", 14), i.Qb(), i.Rb(17, 15), i.Fc(18, Kc, 1, 0, "mat-header-cell", 16), i.Fc(19, Xc, 3, 4, "mat-cell", 14), i.Qb(), i.Fc(20, Zc, 1, 0, "mat-header-row", 17), i.Fc(21, ts, 1, 0, "mat-row", 18), i.Sb(), i.Sb(), i.Tb(22, "div", 19), i.Tb(23, "button", 20), i.ac("click", (function () {
                        return e.routeToPreviousUrl()
                    })), i.Tb(24, "mat-icon"), i.Hc(25, " navigate_before "), i.Sb(), i.Hc(26), i.fc(27, "translate"), i.Sb(), i.Tb(28, "button", 21), i.ac("click", (function () {
                        return e.chooseDeliveryMethod()
                    })), i.Tb(29, "mat-icon"), i.Hc(30, " navigate_next "), i.Sb(), i.Tb(31, "span", 4), i.Hc(32, "LABEL_CONTINUE"), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(1), i.kc("ngIf", e.address), i.Bb(1), i.kc("ngIf", e.address), i.Bb(5), i.kc("dataSource", e.dataSource), i.Bb(13), i.kc("matHeaderRowDef", e.displayedColumns), i.Bb(1), i.kc("matRowDefColumns", e.displayedColumns), i.Bb(5), i.Jc(" ", i.gc(27, 7, "LABEL_BACK"), " "), i.Bb(2), i.kc("disabled", void 0 === e.deliveryMethodId))
                },
                directives: [g.a, L.l, f.a, E.n, E.c, E.i, E.b, E.k, E.m, S.a, ve.a, Fe.a, E.h, p.b, E.a, Ii.a, L.j, D.a, E.j, E.l],
                pipes: [f.d],
                styles: ["mat-card[_ngcontent-%COMP%]{display:block;margin-left:20%;margin-right:20%}.addressCont[_ngcontent-%COMP%]{margin-bottom:12px}.detail-divider[_ngcontent-%COMP%]{border-top-width:4px!important;margin-left:1%!important;width:98%!important}.btn-return[_ngcontent-%COMP%]{margin-left:0;margin-right:auto;display:block}.nextButton[_ngcontent-%COMP%]{margin-right:0;margin-left:auto;display:block;margin-top:-37px}"]
            }), t
        })();
        var as = a("LRne"), is = a("HDdC");
        const os = t => {
            if ("string" == typeof t.value) return Object(as.a)(null);
            const e = t.value, a = new FileReader;
            return new is.a(t => {
                a.addEventListener("loadend", () => {
                    const e = new Uint8Array(a.result).subarray(0, 4);
                    let i = "", o = !1;
                    for (let t = 0; t < e.length; t++) i += e[t].toString(16);
                    switch (i) {
                        case"89504e47":
                            o = !0;
                            break;
                        case"ffd8ffe0":
                        case"ffd8ffe1":
                        case"ffd8ffe2":
                        case"ffd8ffe3":
                        case"ffd8ffe8":
                            o = !0;
                            break;
                        default:
                            o = !1
                    }
                    t.next(o ? null : {invalidMimeType: !0}), t.complete()
                }), a.readAsArrayBuffer(e)
            })
        };
        let ns = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/memories"
                }

                addMemory(t, e) {
                    const a = new FormData;
                    return a.append("image", e, t), a.append("caption", t), this.http.post(this.host, a).pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }

                get() {
                    return this.http.get(this.host + "/").pipe(Object(s.a)(t => t.data), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function rs(t, e) {
            if (1 & t && (i.Tb(0, "a", 10), i.Tb(1, "button", 11), i.Ob(2, "i", 12), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec().$implicit, e = i.ec(2);
                i.nc("href", "https://twitter.com/intent/tweet?text=", t.caption, " ", e.twitterHandle, "&hashtags=appsec", i.yc)
            }
        }

        function cs(t, e) {
            if (1 & t && (i.Tb(0, "span", 6), i.Ob(1, "img", 7), i.Tb(2, "div", 8), i.Tb(3, "div"), i.Hc(4), i.Sb(), i.Fc(5, rs, 3, 2, "a", 9), i.Sb(), i.Sb()), 2 & t) {
                const t = e.$implicit, a = i.ec(2);
                i.Bb(1), i.lc("src", t.url, i.yc), i.lc("alt", t.caption), i.Bb(3), i.Ic(t.caption), i.Bb(1), i.kc("ngIf", a.twitterHandle)
            }
        }

        function ss(t, e) {
            if (1 & t && (i.Tb(0, "div", 4), i.Fc(1, cs, 6, 4, "span", 5), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(1), i.kc("ngForOf", t.slideshowDataSource)
            }
        }

        function ls(t, e) {
            1 & t && (i.Tb(0, "mat-card", 13), i.Ob(1, "img", 14), i.Tb(2, "mat-card-title"), i.Tb(3, "span", 15), i.Hc(4, " NO_SEARCH_RESULT "), i.Sb(), i.Sb(), i.Tb(5, "mat-card-content"), i.Tb(6, "span", 15), i.Hc(7, " EMPTY_MEMORY_LIST "), i.Sb(), i.Sb(), i.Sb())
        }

        function bs(t, e) {
            if (1 & t && (i.Tb(0, "div", 28), i.Ob(1, "img", 29), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.Bb(1), i.kc("src", t.imagePreview, i.yc)("alt", t.form.value.caption)
            }
        }

        function us(t, e) {
            1 & t && (i.Tb(0, "mat-error", 17), i.Hc(1), i.fc(2, "translate"), i.Sb()), 2 & t && (i.Bb(1), i.Ic(i.gc(2, 1, "MANDATORY_CAPTION")))
        }

        function ds(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "div"), i.Tb(1, "div", 16), i.Tb(2, "h2", 17), i.Hc(3, "LABEL_SHARE_A_MEMORY"), i.Sb(), i.Tb(4, "form", 18), i.Tb(5, "div"), i.Tb(6, "button", 19), i.ac("click", (function () {
                    return i.vc(t), i.sc(10).click()
                })), i.Hc(7), i.fc(8, "translate"), i.Sb(), i.Tb(9, "input", 20, 21), i.ac("change", (function (e) {
                    return i.vc(t), i.ec().onImagePicked(e)
                })), i.Sb(), i.Sb(), i.Fc(11, bs, 2, 2, "div", 22), i.Tb(12, "mat-form-field", 23), i.Tb(13, "mat-label", 17), i.Hc(14, "LABEL_CAPTION"), i.Sb(), i.Ob(15, "input", 24), i.Fc(16, us, 3, 3, "mat-error", 25), i.Sb(), i.Tb(17, "button", 26), i.ac("click", (function () {
                    return i.vc(t), i.ec().save()
                })), i.Tb(18, "i", 27), i.Hc(19, " send "), i.Sb(), i.Hc(20), i.fc(21, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(4), i.kc("formGroup", t.form), i.Bb(3), i.Jc("", i.gc(8, 6, "LABEL_PICK_IMAGE"), " "), i.Bb(4), i.kc("ngIf", "" !== t.imagePreview && t.imagePreview && t.form.get("image").valid), i.Bb(5), i.kc("ngIf", t.form.get("caption").invalid), i.Bb(1), i.kc("disabled", t.form.get("image").invalid || t.form.get("caption").invalid), i.Bb(3), i.Jc(" ", i.gc(21, 8, "BTN_SUBMIT"), " ")
            }
        }

        u.b.add(d.k), u.a.watch();
        let ms = (() => {
            class t {
                constructor(t, e, a) {
                    this.photoWallService = t, this.configurationService = e, this.snackBarHelperService = a, this.emptyState = !0, this.form = new c.g({
                        image: new c.d("", {
                            validators: [c.y.required],
                            asyncValidators: [os]
                        }), caption: new c.d("", [c.y.required])
                    }), this.slideshowDataSource = [], this.twitterHandle = null
                }

                ngOnInit() {
                    this.slideshowDataSource = [], this.photoWallService.get().subscribe(t => {
                        var e;
                        this.emptyState = 0 === t.length;
                        for (const a of t) (null === (e = a.User) || void 0 === e ? void 0 : e.username) && (a.caption += ` (\xa9 ${a.User.username})`), this.slideshowDataSource.push({
                            url: a.imagePath,
                            caption: a.caption
                        })
                    }, t => console.log(t)), this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.social && t.application.social.twitterUrl && (this.twitterHandle = t.application.social.twitterUrl.replace("https://twitter.com/", "@"))
                    }, t => console.log(t))
                }

                onImagePicked(t) {
                    const e = t.target.files[0];
                    this.form.patchValue({image: e}), this.form.get("image").updateValueAndValidity();
                    const a = new FileReader;
                    a.onload = () => {
                        this.imagePreview = a.result
                    }, a.readAsDataURL(e)
                }

                save() {
                    this.photoWallService.addMemory(this.form.value.caption, this.form.value.image).subscribe(() => {
                        this.resetForm(), this.ngOnInit(), this.snackBarHelperService.open("IMAGE_UPLOAD_SUCCESS", "confirmBar")
                    }, t => {
                        var e;
                        this.snackBarHelperService.open(null === (e = t.error) || void 0 === e ? void 0 : e.error, "errorBar"), console.log(t)
                    })
                }

                isLoggedIn() {
                    return localStorage.getItem("token")
                }

                resetForm() {
                    this.form.get("image").setValue(""), this.form.get("image").markAsPristine(), this.form.get("image").markAsUntouched(), this.form.get("caption").setValue(""), this.form.get("caption").markAsPristine(), this.form.get("caption").markAsUntouched(), this.form.get("caption").setErrors(null)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(ns), i.Nb(b), i.Nb(A))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-photo-wall"]],
                decls: 9,
                vars: 6,
                consts: [[1, "heading", "mat-elevation-z6", "mat-own-card", 2, "margin-bottom", "10px"], ["class", "grid", 4, "ngIf", "ngIfElse"], ["emptyResult", ""], [4, "ngIf"], [1, "grid"], ["class", "container mat-elevation-z6", 4, "ngFor", "ngForOf"], [1, "container", "mat-elevation-z6"], [1, "image", 3, "src", "alt"], [1, "overlay"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["mat-icon-button", "", "aria-label", "Tweet"], [1, "fab", "fa-twitter", "fa-lg"], [1, "mat-elevation-z0", "emptyState"], ["alt", " No results found", "src", "assets/public/images/products/no-results.png", 1, "img-responsive", "noResult"], ["translate", "", 1, "noResultText"], [2, "margin-top", "10px"], ["translate", ""], ["enctype", "multipart/form-data", 3, "formGroup"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", "name", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["appearance", "outline", "color", "accent"], ["formControlName", "caption", "type", "text", "matInput", ""], ["translate", "", 4, "ngIf"], ["id", "submitButton", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "material-icons"], [1, "image-preview"], [3, "src", "alt"]],
                template: function (t, e) {
                    if (1 & t && (i.Tb(0, "mat-card", 0), i.Tb(1, "h1"), i.Hc(2), i.fc(3, "translate"), i.Sb(), i.Tb(4, "div"), i.Fc(5, ss, 2, 1, "div", 1), i.Sb(), i.Fc(6, ls, 8, 0, "ng-template", null, 2, i.Gc), i.Fc(8, ds, 22, 10, "div", 3), i.Sb()), 2 & t) {
                        const t = i.sc(7);
                        i.Bb(2), i.Ic(i.gc(3, 4, "LABEL_PHOTO_WALL")), i.Bb(3), i.kc("ngIf", !e.emptyState)("ngIfElse", t), i.Bb(3), i.kc("ngIf", e.isLoggedIn())
                    }
                },
                directives: [g.a, L.l, L.k, S.a, g.f, f.a, g.b, c.A, c.p, c.h, Et.c, Et.g, c.c, Lt.b, c.o, c.f, Et.b],
                pipes: [f.d],
                styles: ["mat-form-field[_ngcontent-%COMP%]{width:100%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}#submitButton[_ngcontent-%COMP%]{margin-left:20%;margin-top:10px;width:60%}input[type=file][_ngcontent-%COMP%]{visibility:hidden}.image-preview[_ngcontent-%COMP%]{height:5rem;margin:1rem 0}.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}.heading-main[_ngcontent-%COMP%]{font-size:x-large;justify-content:center}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.grid[_ngcontent-%COMP%]{align-items:center;display:grid;grid-gap:20px;grid-template-columns:repeat(auto-fill,minmax(300px,1fr))}.grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:4px;box-shadow:2px 2px 6px 0 rgba(0,0,0,.3);max-width:100%}.container[_ngcontent-%COMP%]{position:relative}.image[_ngcontent-%COMP%]{display:block}.overlay[_ngcontent-%COMP%]{background:rgba(0,0,0,.5);bottom:0;font-size:20px;left:0;opacity:0;padding:20px;position:absolute;right:0;text-align:center;transition:.5s ease}.container[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%]{opacity:1}.emptyState[_ngcontent-%COMP%]{display:block;height:auto!important;margin:20px auto;width:50%}.noResult[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:60%}.noResultText[_ngcontent-%COMP%]{display:block;margin-top:10px;text-align:center}.tweet-logo[_ngcontent-%COMP%]{height:24px}"]
            }), t
        })();

        function hs(t, e) {
            if (1 & t && (i.Tb(0, "div", 22), i.Tb(1, "div", 23), i.Tb(2, "p", 24), i.Hc(3), i.Sb(), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(3), i.Ic(t.error)
            }
        }

        function ps(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "div"), i.Tb(1, "div", 14), i.Hc(2), i.Sb(), i.Tb(3, "div", 14), i.Tb(4, "button", 25), i.ac("click", (function () {
                    return i.vc(t), i.ec().upgradeToDeluxe()
                })), i.Tb(5, "span", 13), i.Hc(6, "LABEL_BECOME_MEMBER"), i.Sb(), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(2), i.Jc(" ", t.membershipCost, "\xa4 ")
            }
        }

        const gs = function (t) {
            return {appname: t}
        }, fs = [{path: "administration", component: Xa, canActivate: [x]}, {
            path: "accounting",
            component: Qr,
            canActivate: [B]
        }, {path: "about", component: ee}, {
            path: "address/select",
            component: xn,
            canActivate: [_]
        }, {path: "address/saved", component: Bn, canActivate: [_]}, {
            path: "address/create",
            component: _n,
            canActivate: [_]
        }, {path: "address/edit/:addressId", component: _n, canActivate: [_]}, {
            path: "delivery-method",
            component: es
        }, {
            path: "deluxe-membership", component: (() => {
                class t {
                    constructor(t, e, a, i, o, n, r) {
                        this.router = t, this.userService = e, this.cookieService = a, this.configurationService = i, this.route = o, this.ngZone = n, this.io = r, this.membershipCost = 0, this.error = void 0, this.applicationName = "OWASP Juice Shop", this.logoSrc = "assets/public/images/JuiceShop_Logo.png"
                    }

                    ngOnInit() {
                        this.configurationService.getApplicationConfiguration().subscribe(t => {
                            let e = this.route.snapshot.queryParams.testDecal;
                            if (t && t.application && (t.application.name && (this.applicationName = t.application.name), t.application.logo)) {
                                let a = t.application.logo;
                                "http" === a.substring(0, 4) && (a = decodeURIComponent(a.substring(a.lastIndexOf("/") + 1))), this.logoSrc = "assets/public/images/" + (e || a)
                            }
                            e && this.ngZone.runOutsideAngular(() => {
                                this.io.socket().emit("verifySvgInjectionChallenge", e)
                            })
                        }, t => console.log(t)), this.userService.deluxeStatus().subscribe(t => {
                            this.membershipCost = t.membershipCost
                        }, t => {
                            this.error = t.error.error
                        })
                    }

                    upgradeToDeluxe() {
                        this.ngZone.run(() => this.router.navigate(["/payment", "deluxe"]))
                    }
                }

                return t.\u0275fac = function (e) {
                    return new (e || t)(i.Nb(y.b), i.Nb(w), i.Nb(r.a), i.Nb(b), i.Nb(y.a), i.Nb(i.B), i.Nb(Qe))
                }, t.\u0275cmp = i.Hb({
                    type: t,
                    selectors: [["app-deluxe-user"]],
                    decls: 50,
                    vars: 10,
                    consts: [["fxLayout", "column", "fxLayoutGap", "10px", 1, "main-wrapper"], ["class", "heading mat-elevation-z6", 4, "ngIf"], [1, "mat-elevation-z6", "deluxe-membership"], ["fxFlexAlign", "center", "fxFlex", "30%", 1, "img-container"], ["viewBox", "0 0 720 720", "xmlns", "http://www.w3.org/2000/svg"], ["href", "assets/public/images/deluxe/blankBoxes.png", "x", "0", "y", "0", "height", "720", "width", "720"], ["x", "260", "y", "130", "height", "50"], ["x", "230", "y", "330", "height", "70"], ["x", "70", "y", "355", "height", "40"], ["x", "120", "y", "450", "height", "55"], ["x", "500", "y", "410", "height", "45"], ["fxFlexAlign", "center", "fxFlex", "60%"], [1, "item-name"], ["translate", ""], [1, "item-description"], ["translate", "", 3, "translateParams"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayout.lt-md", "column"], ["fxFlex", "33.33%", 1, "mat-elevation-z6"], ["fxFlexAlign", "center", "fxFlex", "40%", 1, "img-container"], [1, "img-responsive", "img-thumbnail", 2, "font-size", "100px"], ["translate", "", 1, "item-description"], [1, "heading", "mat-elevation-z6"], [2, "margin-top", "5px"], [1, "error"], ["aria-label", "Add to Basket", "color", "primary", "mat-button", "", "mat-raised-button", "", 1, "btn-member", 3, "click"]],
                    template: function (t, e) {
                        1 & t && (i.Tb(0, "div", 0), i.Fc(1, hs, 4, 1, "div", 1), i.Tb(2, "mat-card", 2), i.Tb(3, "div", 3), i.dc(), i.Tb(4, "svg", 4), i.Ob(5, "image", 5), i.Ob(6, "image", 6), i.Ob(7, "image", 7), i.Ob(8, "image", 8), i.Ob(9, "image", 9), i.Ob(10, "image", 10), i.Sb(), i.Sb(), i.cc(), i.Tb(11, "div", 11), i.Tb(12, "div", 12), i.Tb(13, "b", 13), i.Hc(14, "LABEL_DELUXE_MEMBERSHIP"), i.Sb(), i.Sb(), i.Tb(15, "div", 14), i.Tb(16, "span", 15), i.Hc(17, "DESCRIPTION_DELUXE_MEMBERSHIP"), i.Sb(), i.Sb(), i.Fc(18, ps, 7, 1, "div", 16), i.Sb(), i.Sb(), i.Tb(19, "div", 17), i.Tb(20, "mat-card", 18), i.Tb(21, "div", 19), i.Tb(22, "mat-icon", 20), i.Hc(23, " slideshow "), i.Sb(), i.Sb(), i.Tb(24, "div", 11), i.Tb(25, "div", 12), i.Tb(26, "b", 13), i.Hc(27, "LABEL_DEALS_OFFERS"), i.Sb(), i.Sb(), i.Tb(28, "div", 21), i.Hc(29, " DESCRIPTION_DEALS_OFFERS "), i.Sb(), i.Sb(), i.Sb(), i.Tb(30, "mat-card", 18), i.Tb(31, "div", 19), i.Tb(32, "mat-icon", 20), i.Hc(33, " directions_car "), i.Sb(), i.Sb(), i.Tb(34, "div", 11), i.Tb(35, "div", 12), i.Tb(36, "b", 13), i.Hc(37, "LABEL_FREE_FAST_DELIVERY"), i.Sb(), i.Sb(), i.Tb(38, "div", 21), i.Hc(39, " DESCRIPTION_FREE_FAST_DELIVERY "), i.Sb(), i.Sb(), i.Sb(), i.Tb(40, "mat-card", 18), i.Tb(41, "div", 19), i.Tb(42, "mat-icon", 20), i.Hc(43, " add "), i.Sb(), i.Sb(), i.Tb(44, "div", 11), i.Tb(45, "div", 12), i.Tb(46, "b", 13), i.Hc(47, "LABEL_UNLIMITED_PURCHASE"), i.Sb(), i.Sb(), i.Tb(48, "div", 21), i.Hc(49, " DESCRIPTION_UNLIMITED_PURCHASE "), i.Sb(), i.Sb(), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(1), i.kc("ngIf", e.error), i.Bb(5), i.Cb("href", e.logoSrc), i.Bb(1), i.Cb("href", e.logoSrc), i.Bb(1), i.Cb("href", e.logoSrc), i.Bb(1), i.Cb("href", e.logoSrc), i.Bb(1), i.Cb("href", e.logoSrc), i.Bb(6), i.kc("translateParams", i.pc(8, gs, e.applicationName)), i.Bb(2), i.kc("ngIf", !e.error))
                    },
                    directives: [p.d, p.e, L.l, g.a, p.a, p.b, f.a, ve.a, S.a],
                    styles: [".heading[_ngcontent-%COMP%]{background:rgba(0,0,0,.2);font-size:x-large;justify-content:center;padding:12px 20px}.main-wrapper[_ngcontent-%COMP%]{margin-left:10%;margin-right:10%}.img-thumbnail[_ngcontent-%COMP%]{background:none;border:0;width:100%}.btn-member[_ngcontent-%COMP%]{bottom:10%}.item-description[_ngcontent-%COMP%]{font-size:medium;margin-top:12px;text-align:center}.item-name[_ngcontent-%COMP%]{font-size:large;text-align:center}"]
                }), t
            })(), canActivate: [_]
        }, {path: "saved-payment-methods", component: vr}, {
            path: "basket",
            component: ct
        }, {path: "order-completion/:id", component: gc}, {path: "contact", component: Ut}, {
            path: "photo-wall",
            component: ms
        }, {path: "complain", component: pi}, {path: "chatbot", component: wi}, {
            path: "order-summary",
            component: Cc
        }, {path: "order-history", component: Jc}, {path: "payment/:entity", component: Tr}, {
            path: "wallet",
            component: kc
        }, {path: "login", component: Ta}, {path: "forgot-password", component: Ae}, {
            path: "recycle",
            component: eo
        }, {path: "register", component: Te}, {path: "search", component: la}, {
            path: "hacking-instructor",
            component: la
        }, {path: "score-board", component: $o}, {path: "track-result", component: Bt}, {
            path: "track-result/new",
            component: Bt,
            data: {type: "new"}
        }, {path: "2fa/enter", component: Zo}, {
            path: "privacy-security",
            component: on,
            children: [{path: "privacy-policy", component: fn}, {
                path: "change-password",
                component: ni
            }, {path: "two-factor-authentication", component: sn}, {
                path: "data-export",
                component: pn
            }, {path: "erasure-request", component: Yt}, {path: "last-login-ip", component: gn}]
        }, {
            matcher: function (t) {
                return 0 === t.length ? null : window.location.href.includes("#access_token=") ? {consumed: t} : null
            }, data: {params: window.location.href.substr(window.location.href.indexOf("#"))}, component: k
        }, {
            matcher: function (t) {
                return 0 === t.length ? null : t[0].toString().match(function (...t) {
                    let e = Array.prototype.slice.call([25, 184, 174, 179, 182, 186]), a = e.shift();
                    return e.reverse().map((function (t, e) {
                        return String.fromCharCode(t - a - 45 - e)
                    })).join("")
                }() + 36669..toString(36).toLowerCase() + function (...t) {
                    let e = Array.prototype.slice.call(arguments), a = e.shift();
                    return e.reverse().map((function (t, e) {
                        return String.fromCharCode(t - a - 24 - e)
                    })).join("")
                }(13, 144, 87, 152, 139, 144, 83, 138) + 10..toString(36).toLowerCase()) ? {consumed: t} : null
            }, component: v
        }, {path: "403", component: tn}, {path: "**", component: la}], Ss = y.e.forRoot(fs, {useHash: !0});
        var Ts = a("k5Gf"), vs = a("IbkX");
        let Cs = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = ".", this.host = this.hostServer + "/rest/admin"
                }

                getApplicationVersion() {
                    return this.http.get(this.host + "/application-version").pipe(Object(s.a)(t => t.version), Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var ws = a("l0rg"), ys = a("SqCe");

        function ks(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 36), i.ac("click", (function () {
                    return i.vc(t), i.ec().onToggleSidenav()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " exit_to_app "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "TITLE_LOGIN"), " "))
        }

        function Os(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 37), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec();
                    return e.onToggleSidenav(), e.goToProfilePage()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " account_circle "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(4), i.Jc(" ", t.userEmail, " ")
            }
        }

        function Is(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 38), i.ac("click", (function () {
                    return i.vc(t), i.ec().onToggleSidenav()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " account_balance "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "ACCOUNTING"), " "))
        }

        const _s = function (t) {
            return {rotated: t}
        };

        function xs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-list-item", 39), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec();
                    return e.showOrdersSubmenu = !e.showOrdersSubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " check_circle_outline "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Tb(6, "mat-icon", 40), i.Hc(7, " expand_more "), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(4), i.Jc(" ", i.gc(5, 2, "ORDERS_AND_PAYMENT"), " "), i.Bb(2), i.kc("ngClass", i.pc(4, _s, t.showOrdersSubmenu))
            }
        }

        function Bs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 47), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " archive "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "LABEL_ORDER_HISTORY"), " "))
        }

        function Hs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 48), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " autorenew "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "NAV_RECYCLE"), " "))
        }

        function Ps(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 49), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " my_location "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "MY_SAVED_ADRESSES"), " "))
        }

        function As(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 50), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " credit_card "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }

        function Es(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 51), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showOrdersSubmenu = !e.showOrdersSubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " account_balance_wallet "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "DIGITAL_WALLET"), " "))
        }

        const Ls = function (t) {
            return {expanded: t}
        };

        function Ds(t, e) {
            if (1 & t && (i.Tb(0, "div", 41), i.Fc(1, Bs, 6, 3, "a", 42), i.Fc(2, Hs, 6, 3, "a", 43), i.Ob(3, "mat-divider"), i.Fc(4, Ps, 6, 3, "a", 44), i.Fc(5, As, 6, 3, "a", 45), i.Fc(6, Es, 6, 3, "a", 46), i.Sb()), 2 & t) {
                const t = i.ec();
                i.kc("ngClass", i.pc(6, Ls, t.showOrdersSubmenu)), i.Bb(1), i.kc("ngIf", t.isLoggedIn()), i.Bb(1), i.kc("ngIf", t.isLoggedIn()), i.Bb(2), i.kc("ngIf", t.isLoggedIn()), i.Bb(1), i.kc("ngIf", t.isLoggedIn()), i.Bb(1), i.kc("ngIf", t.isLoggedIn())
            }
        }

        function Ns(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-list-item", 52), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec();
                    return e.showPrivacySubmenu = !e.showPrivacySubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " security "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Tb(6, "mat-icon", 40), i.Hc(7, " expand_more "), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(4), i.Jc(" ", i.gc(5, 2, "PRIVACY_AND_SECURITY"), " "), i.Bb(2), i.kc("ngClass", i.pc(4, _s, t.showPrivacySubmenu))
            }
        }

        function Fs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 59), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " assignment "), i.Sb(), i.Tb(3, "span", 60), i.Hc(4, "TITLE_PRIVACY_POLICY"), i.Sb(), i.Sb()
            }
        }

        function Ms(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 61), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " get_app "), i.Sb(), i.Tb(3, "span", 60), i.Hc(4, "TITLE_REQUEST_DATA_EXPORT"), i.Sb(), i.Sb()
            }
        }

        function Rs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 62), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " delete_forever "), i.Sb(), i.Tb(3, "span", 60), i.Hc(4, "DATA_SUBJECT_TITLE"), i.Sb(), i.Sb()
            }
        }

        function Us(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 63), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " edit "), i.Sb(), i.Tb(3, "span", 60), i.Hc(4, "TITLE_CHANGE_PASSWORD"), i.Sb(), i.Sb()
            }
        }

        function js(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 64), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " exposure_plus_2 "), i.Sb(), i.Tb(3, "span", 60), i.Hc(4, "TITLE_TWO_FACTOR_AUTH_CONFIG"), i.Sb(), i.Sb()
            }
        }

        function Js(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 65), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec(2);
                    return e.onToggleSidenav(), e.showPrivacySubmenu = !e.showPrivacySubmenu
                })), i.Tb(1, "mat-icon"), i.Hc(2, " place "), i.Sb(), i.Tb(3, "span", 60), i.Hc(4, "LAST_LOGIN_IP"), i.Sb(), i.Sb()
            }
        }

        function Gs(t, e) {
            if (1 & t && (i.Tb(0, "div", 41), i.Fc(1, Fs, 5, 0, "a", 53), i.Fc(2, Ms, 5, 0, "a", 54), i.Fc(3, Rs, 5, 0, "a", 55), i.Ob(4, "mat-divider"), i.Fc(5, Us, 5, 0, "a", 56), i.Fc(6, js, 5, 0, "a", 57), i.Fc(7, Js, 5, 0, "a", 58), i.Sb()), 2 & t) {
                const t = i.ec();
                i.kc("ngClass", i.pc(7, Ls, t.showPrivacySubmenu)), i.Bb(1), i.kc("ngIf", t.isLoggedIn()), i.Bb(1), i.kc("ngIf", t.isLoggedIn()), i.Bb(1), i.kc("ngIf", t.isLoggedIn()), i.Bb(2), i.kc("ngIf", t.isLoggedIn()), i.Bb(1), i.kc("ngIf", t.isLoggedIn()), i.Bb(1), i.kc("ngIf", t.isLoggedIn())
            }
        }

        function zs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 66), i.ac("click", (function () {
                    i.vc(t);
                    const e = i.ec();
                    return e.onToggleSidenav(), e.logout()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " power_settings_new "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "TITLE_LOGOUT"), " "))
        }

        function qs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 67), i.ac("click", (function () {
                    return i.vc(t), i.ec().onToggleSidenav()
                })), i.Tb(1, "i", 13), i.Hc(2, " sentiment_dissatisfied "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "NAV_COMPLAIN"), " "))
        }

        function Ws(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 68), i.ac("click", (function () {
                    return i.vc(t), i.ec().onToggleSidenav()
                })), i.Tb(1, "i", 13), i.Hc(2, " chat "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "SECTION_SUPPORT_CHAT"), " "))
        }

        function Ys(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 69), i.ac("click", (function () {
                    return i.vc(t), i.ec().onToggleSidenav()
                })), i.Tb(1, "i", 13), i.Hc(2, " card_membership "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "LABEL_DELUXE_MEMBERSHIP"), " "))
        }

        function Vs(t, e) {
            1 & t && i.Ob(0, "mat-divider", 70)
        }

        function Qs(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 71), i.ac("click", (function () {
                    return i.vc(t), i.ec().onToggleSidenav()
                })), i.Ob(1, "mat-icon", 72), i.Tb(2, "span", 14), i.Hc(3), i.fc(4, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(3), i.Jc(" ", i.gc(4, 1, "TITLE_SCORE_BOARD"), " "))
        }

        function $s(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "a", 73), i.ac("click", (function () {
                    return i.vc(t), i.ec().startHackingInstructor()
                })), i.Tb(1, "i", 13), i.Hc(2, " school "), i.Sb(), i.Tb(3, "span", 14), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "BTN_GETTING_STARTED"), " "))
        }

        function Ks(t, e) {
            1 & t && (i.Tb(0, "a", 74), i.Ob(1, "mat-icon", 75), i.Tb(2, "span", 14), i.Hc(3, " GitHub "), i.Sb(), i.Sb())
        }

        let Xs = (() => {
            class t {
                constructor(t, e, a, o, n, r, c, s, l) {
                    this.administrationService = t, this.challengeService = e, this.ngZone = a, this.io = o, this.userService = n, this.cookieService = r, this.router = c, this.configurationService = s, this.loginGuard = l, this.applicationName = "OWASP Juice Shop", this.showGitHubLink = !0, this.userEmail = "", this.scoreBoardVisible = !1, this.version = "", this.isExpanded = !0, this.showPrivacySubmenu = !1, this.showOrdersSubmenu = !1, this.isShowing = !1, this.sizeOfMail = 0, this.offerScoreBoardTutorial = !1, this.sidenavToggle = new i.o, this.onToggleSidenav = () => {
                        this.sidenavToggle.emit()
                    }
                }

                ngOnInit() {
                    this.administrationService.getApplicationVersion().subscribe(t => {
                        t && (this.version = "v" + t)
                    }, t => console.log(t)), this.getApplicationDetails(), this.getScoreBoardStatus(), localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "", this.userService.getLoggedInState().subscribe(t => {
                        t ? this.getUserDetails() : this.userEmail = ""
                    }), this.ngZone.runOutsideAngular(() => {
                        this.io.socket().on("challenge solved", t => {
                            "scoreBoardChallenge" === t.key && (this.scoreBoardVisible = !0)
                        })
                    })
                }

                isLoggedIn() {
                    return localStorage.getItem("token")
                }

                logout() {
                    this.userService.saveLastLoginIp().subscribe(t => {
                        this.noop()
                    }, t => console.log(t)), localStorage.removeItem("token"), this.cookieService.delete("token", "/"), sessionStorage.removeItem("bid"), this.userService.isLoggedIn.next(!1), this.ngZone.run(() => this.router.navigate(["/"]))
                }

                goToProfilePage() {
                    window.location.replace("./profile")
                }

                noop() {
                }

                getScoreBoardStatus() {
                    this.challengeService.find({name: "Score Board"}).subscribe(t => {
                        this.ngZone.run(() => {
                            this.scoreBoardVisible = t[0].solved
                        })
                    }, t => console.log(t))
                }

                getUserDetails() {
                    this.userService.whoAmI().subscribe(t => {
                        this.userEmail = t.email, this.sizeOfMail = ("" + t.email).length
                    }, t => console.log(t))
                }

                getApplicationDetails() {
                    this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.name && (this.applicationName = t.application.name), t && t.application && (this.showGitHubLink = t.application.showGitHubLinks), t && t.application.welcomeBanner.showOnFirstStart && t.hackingInstructor.isEnabled && (this.offerScoreBoardTutorial = t.application.welcomeBanner.showOnFirstStart && t.hackingInstructor.isEnabled)
                    }, t => console.log(t))
                }

                isAccounting() {
                    const t = this.loginGuard.tokenDecode();
                    return !(!t || !t.data || "accounting" !== t.data.role)
                }

                startHackingInstructor() {
                    this.onToggleSidenav(), console.log('Starting instructions for challenge "Score Board"'), a.e(5).then(a.bind(null, "s2oO")).then(t => {
                        t.startHackingInstructorFor("Score Board")
                    })
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Cs), i.Nb(ao), i.Nb(i.B), i.Nb(Qe), i.Nb(w), i.Nb(r.a), i.Nb(y.b), i.Nb(b), i.Nb(_))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["sidenav"]],
                outputs: {sidenavToggle: "sidenavToggle"},
                decls: 72,
                vars: 27,
                consts: [["color", "primary", 1, "mat-elevation-z6"], ["mat-button", "", 2, "height", "0", "position", "absolute"], ["mat-subheader", "", "translate", "", "fxHide", "", "fxShow.lt-md", "", 1, "side-subHeader"], ["fxHide", "", "fxShow.lt-md", ""], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click", 4, "ngIf"], ["class", "parent", "aria-label", "Show Orders and Payment Menu", 3, "click", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], ["class", "parent", "aria-label", "Show Privacy and Security Menu", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Logout", 3, "click", 4, "ngIf"], ["mat-subheader", "", "translate", "", 1, "side-subHeader"], ["mat-list-item", "", "routerLink", "/contact", "aria-label", "Go to contact us page", 3, "click"], [1, "material-icons"], [1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/about", "aria-label", "Go to about us page", 3, "click"], ["mat-list-item", "", "routerLink", "/photo-wall", "aria-label", "Go to photo wall", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click", 4, "ngIf"], ["style", "margin-bottom: 10px;", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click", 4, "ngIf"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click", 4, "ngIf"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page", 4, "ngIf"], [1, "appVersion"], [2, "font-size", "13px"], [2, "font-size", "12px"], [2, "margin-top", "10px"], [1, "icon-angular"], [1, "icon-html5"], [1, "icon-sass"], [1, "icon-css3"], [1, "icon-javascript-alt"], [1, "icon-nodejs"], [1, "icon-database-alt2"], [1, "icon-mongodb"], ["mat-list-item", "", "routerLink", "/login", "aria-label", "Go to login page", 3, "click"], ["mat-list-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-list-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 3, "click"], ["aria-label", "Show Orders and Payment Menu", 1, "parent", 3, "click"], [1, "menu-button", 3, "ngClass"], [1, "submenu", 3, "ngClass"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page", 3, "click"], ["mat-list-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page", 3, "click"], ["mat-list-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 3, "click"], ["mat-list-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 3, "click"], ["mat-list-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 3, "click"], ["aria-label", "Show Privacy and Security Menu", 1, "parent", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/erasure-request", "aria-label", "Go to data subject page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click", 4, "ngIf"], ["mat-list-item", "", "routerLink", "privacy-security/privacy-policy", "aria-label", "Go to privacy policy page", 3, "click"], ["translate", "", 1, "menu-text", "truncate"], ["mat-list-item", "", "routerLink", "privacy-security/data-export", "aria-label", "Go to data export page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/erasure-request", "aria-label", "Go to data subject page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/change-password", "aria-label", "Go to change password page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/two-factor-authentication", "aria-label", "Go to two factor authentication page", 3, "click"], ["mat-list-item", "", "routerLink", "privacy-security/last-login-ip", "aria-label", "Go to last login ip page", 3, "click"], ["mat-list-item", "", "aria-label", "Logout", 3, "click"], ["mat-list-item", "", "routerLink", "/complain", "aria-label", "Go to complain page", 3, "click"], ["mat-list-item", "", "routerLink", "/chatbot", "aria-label", "Go to chatbot page", 3, "click"], ["mat-list-item", "", "routerLink", "/deluxe-membership", "aria-label", "Go to deluxe membership page", 3, "click"], [2, "margin-bottom", "10px"], ["mat-list-item", "", "routerLink", "/score-board", "aria-label", "Open score-board", 3, "click"], ["matListIcon", "", 1, "fas", "fa-trophy", "fa-lg"], ["mat-list-item", "", "aria-label", "Launch beginners tutorial", 3, "click"], ["mat-list-item", "", "href", "./redirect?to=https://github.com/bkimminich/juice-shop", "aria-label", "Go to OWASP Juice Shop GitHub page"], ["matListIcon", "", 1, "fab", "fa-github", "fa-lg"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "mat-toolbar", 0), i.Tb(1, "mat-toolbar-row"), i.Tb(2, "h2"), i.Hc(3), i.Sb(), i.Sb(), i.Sb(), i.Tb(4, "mat-nav-list"), i.Ob(5, "button", 1), i.Tb(6, "h3", 2), i.Hc(7, "ACCOUNT"), i.Sb(), i.Tb(8, "div", 3), i.Fc(9, ks, 6, 3, "a", 4), i.Fc(10, Os, 5, 1, "a", 5), i.Fc(11, Is, 6, 3, "a", 6), i.Fc(12, xs, 8, 6, "mat-list-item", 7), i.Fc(13, Ds, 7, 8, "div", 8), i.Fc(14, Ns, 8, 6, "mat-list-item", 9), i.Fc(15, Gs, 8, 9, "div", 8), i.Fc(16, zs, 6, 3, "a", 10), i.Sb(), i.Ob(17, "mat-divider", 3), i.Tb(18, "h3", 11), i.Hc(19, "TITLE_CONTACT"), i.Sb(), i.Tb(20, "a", 12), i.ac("click", (function () {
                        return e.onToggleSidenav()
                    })), i.Tb(21, "i", 13), i.Hc(22, " feedback "), i.Sb(), i.Tb(23, "span", 14), i.Hc(24), i.fc(25, "translate"), i.Sb(), i.Sb(), i.Fc(26, qs, 6, 3, "a", 15), i.Fc(27, Ws, 6, 3, "a", 16), i.Ob(28, "mat-divider"), i.Tb(29, "h3", 11), i.Hc(30, "COMPANY"), i.Sb(), i.Tb(31, "a", 17), i.ac("click", (function () {
                        return e.onToggleSidenav()
                    })), i.Tb(32, "i", 13), i.Hc(33, " business_center "), i.Sb(), i.Tb(34, "span", 14), i.Hc(35), i.fc(36, "translate"), i.Sb(), i.Sb(), i.Tb(37, "a", 18), i.ac("click", (function () {
                        return e.onToggleSidenav()
                    })), i.Tb(38, "i", 13), i.Hc(39, " camera "), i.Sb(), i.Tb(40, "span", 14), i.Hc(41), i.fc(42, "translate"), i.Sb(), i.Sb(), i.Fc(43, Ys, 6, 3, "a", 19), i.Fc(44, Vs, 1, 0, "mat-divider", 20), i.Fc(45, Qs, 5, 3, "a", 21), i.Fc(46, $s, 6, 3, "a", 22), i.Fc(47, Ks, 4, 0, "a", 23), i.Sb(), i.Tb(48, "div", 24), i.Tb(49, "span"), i.Tb(50, "span", 25), i.Hc(51), i.Sb(), i.Ob(52, "br"), i.Tb(53, "span", 26), i.Hc(54), i.Sb(), i.Ob(55, "br"), i.Tb(56, "div", 27), i.Ob(57, "i", 28), i.Hc(58, "\xa0 "), i.Ob(59, "i", 29), i.Hc(60, "\xa0 "), i.Ob(61, "i", 30), i.Hc(62, "\xa0 "), i.Ob(63, "i", 31), i.Hc(64, "\xa0 "), i.Ob(65, "i", 32), i.Hc(66, "\xa0 "), i.Ob(67, "i", 33), i.Hc(68, "\xa0 "), i.Ob(69, "i", 34), i.Hc(70, "\xa0 "), i.Ob(71, "i", 35), i.Sb(), i.Sb(), i.Sb()), 2 & t && (i.Bb(3), i.Jc(" ", e.applicationName, ""), i.Bb(6), i.kc("ngIf", !e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn() && e.isAccounting()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.showOrdersSubmenu), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.showPrivacySubmenu), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(8), i.Jc(" ", i.gc(25, 21, "SECTION_CUSTOMER_FEEDBACK"), " "), i.Bb(2), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(8), i.Jc(" ", i.gc(36, 23, "TITLE_ABOUT"), " "), i.Bb(6), i.Jc(" ", i.gc(42, 25, "LABEL_PHOTO_WALL"), " "), i.Bb(2), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.scoreBoardVisible || e.showGitHubLink), i.Bb(1), i.kc("ngIf", e.scoreBoardVisible), i.Bb(1), i.kc("ngIf", !e.scoreBoardVisible && e.offerScoreBoardTutorial), i.Bb(1), i.kc("ngIf", e.showGitHubLink), i.Bb(4), i.Ic(e.applicationName), i.Bb(3), i.Ic(e.version))
                },
                directives: [ws.a, ws.c, ys.e, S.a, ys.d, f.a, D.b, L.l, Fe.a, ys.b, y.d, ve.a, L.j, D.a, ys.a],
                pipes: [f.d],
                styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}a[_ngcontent-%COMP%]{text-decoration:none!important}.menu-text[_ngcontent-%COMP%]{padding-left:10px}.mat-list-base[_ngcontent-%COMP%], .mat-list-icon[_ngcontent-%COMP%], .mat-list-item[_ngcontent-%COMP%]{padding:0!important}.toolbar-title[_ngcontent-%COMP%]{margin:0 16px}.mat-subheader[_ngcontent-%COMP%]{font-size:18px;font-weight:900}.app-nav-list-icon[_ngcontent-%COMP%]{margin:0 12px}.side-subHeader[_ngcontent-%COMP%]{font-weight:300}mat-nav-list[_ngcontent-%COMP%]{margin-bottom:50px}.menu-button[_ngcontent-%COMP%]{transform:rotate(0deg);transition:.3s ease-in-out}.menu-button.rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}.submenu[_ngcontent-%COMP%]{overflow-y:hidden;padding-left:30px;transform:scaleY(0);transform-origin:top;transition:transform .3s ease}.submenu.expanded[_ngcontent-%COMP%]{transform:scaleY(1)}.appVersion[_ngcontent-%COMP%]{margin-bottom:20px;margin-top:20px;text-align:center}.truncate[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
            }), t
        })(), Zs = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = "."
                }

                getLanguages() {
                    return this.http.get(this.hostServer + "/rest/languages").pipe(Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();
        var tl = a("lGt0"), el = a("rJgo");

        function al(t, e) {
            1 & t && (i.Tb(0, "button", 38), i.Tb(1, "mat-icon"), i.Hc(2, " exit_to_app "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "TITLE_LOGIN"), " "))
        }

        function il(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 39), i.ac("click", (function () {
                    return i.vc(t), i.ec().goToProfilePage()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " account_circle "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(4), i.Jc(" ", t.userEmail, " ")
            }
        }

        function ol(t, e) {
            1 & t && (i.Tb(0, "button", 40), i.Tb(1, "mat-icon"), i.Hc(2, " account_balance "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "ACCOUNTING"), " "))
        }

        function nl(t, e) {
            if (1 & t && (i.Tb(0, "button", 41), i.Tb(1, "mat-icon"), i.Hc(2, " check_circle_outline "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t) {
                i.ec();
                const t = i.sc(71);
                i.kc("matMenuTriggerFor", t), i.Bb(4), i.Jc(" ", i.gc(5, 2, "ORDERS_AND_PAYMENT"), " ")
            }
        }

        function rl(t, e) {
            if (1 & t && (i.Tb(0, "button", 42), i.Tb(1, "mat-icon"), i.Hc(2, " security "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t) {
                i.ec();
                const t = i.sc(38);
                i.kc("matMenuTriggerFor", t), i.Bb(4), i.Jc(" ", i.gc(5, 2, "PRIVACY_AND_SECURITY"), " ")
            }
        }

        function cl(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 43), i.ac("click", (function () {
                    return i.vc(t), i.ec().logout()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " power_settings_new "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()
            }
            2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "TITLE_LOGOUT"), " "))
        }

        function sl(t, e) {
            if (1 & t && (i.Tb(0, "button", 44), i.Tb(1, "mat-icon"), i.Hc(2, " shopping_cart "), i.Sb(), i.Tb(3, "span", 20), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Tb(6, "span", 45), i.Hc(7), i.Sb(), i.Sb()), 2 & t) {
                const t = i.ec();
                i.Bb(4), i.Jc(" ", i.gc(5, 2, "TITLE_BASKET"), ""), i.Bb(3), i.Ic(t.itemTotal)
            }
        }

        function ll(t, e) {
            1 & t && i.Ob(0, "span"), 2 & t && i.Db("flag-icon flag-icon-" + e.$implicit)
        }

        function bl(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-radio-button", 46), i.ac("click", (function () {
                    i.vc(t);
                    const a = e.$implicit;
                    return i.ec().changeLanguage(a.key)
                })), i.Tb(1, "div", 47), i.Fc(2, ll, 1, 2, "span", 48), i.Hc(3), i.Sb(), i.Ob(4, "i"), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec();
                i.lc("checked", a.selectedLanguage === t), i.lc("aria-label", t.lang), i.kc("value", t), i.Bb(2), i.kc("ngForOf", t.icons), i.Bb(1), i.Jc(" ", null == t ? null : t.lang, " "), i.Bb(1), i.Db("fas fa-thermometer-" + t.gauge + (t.percentage > 70 ? " confirmation" : " error"))
            }
        }

        function ul(t, e) {
            1 & t && (i.Tb(0, "button", 49), i.Tb(1, "mat-icon"), i.Hc(2, " my_location "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "MY_SAVED_ADRESSES"), " "))
        }

        function dl(t, e) {
            1 & t && (i.Tb(0, "button", 50), i.Tb(1, "mat-icon"), i.Hc(2, " credit_card "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "MY_PAYMENT_OPTIONS"), " "))
        }

        function ml(t, e) {
            1 & t && (i.Tb(0, "button", 51), i.Tb(1, "mat-icon"), i.Hc(2, " account_balance_wallet "), i.Sb(), i.Tb(3, "span"), i.Hc(4), i.fc(5, "translate"), i.Sb(), i.Sb()), 2 & t && (i.Bb(4), i.Jc(" ", i.gc(5, 1, "DIGITAL_WALLET"), " "))
        }

        const hl = function () {
            return ["privacy-security/privacy-policy"]
        }, pl = function () {
            return ["privacy-security/data-export"]
        }, gl = function () {
            return ["privacy-security/erasure-request"]
        }, fl = function () {
            return ["privacy-security/change-password"]
        }, Sl = function () {
            return ["privacy-security/two-factor-authentication"]
        }, Tl = function () {
            return ["privacy-security/last-login-ip"]
        };
        u.b.add(m.A, m.J, m.M, m.N, m.i, m.c, m.ab, m.y, m.L, m.kb, m.G, m.B, m.hb, d.d, h.b, m.R, m.U, m.T, m.V, m.S), u.a.watch();
        let vl = (() => {
            class t {
                constructor(t, e, a, o, n, r, c, s, l, b, u, d, m) {
                    this.administrationService = t, this.challengeService = e, this.configurationService = a, this.userService = o, this.ngZone = n, this.cookieService = r, this.router = c, this.translate = s, this.io = l, this.langService = b, this.loginGuard = u, this.snackBar = d, this.basketService = m, this.userEmail = "", this.languages = [], this.selectedLanguage = "placeholder", this.version = "", this.applicationName = "OWASP Juice Shop", this.showGitHubLink = !0, this.logoSrc = "assets/public/images/JuiceShop_Logo.png", this.scoreBoardVisible = !1, this.shortKeyLang = "placeholder", this.itemTotal = 0, this.sidenavToggle = new i.o, this.onToggleSidenav = () => {
                        this.sidenavToggle.emit()
                    }
                }

                ngOnInit() {
                    this.getLanguages(), this.basketService.getItemTotal().subscribe(t => this.itemTotal = t), this.administrationService.getApplicationVersion().subscribe(t => {
                        t && (this.version = "v" + t)
                    }, t => console.log(t)), this.configurationService.getApplicationConfiguration().subscribe(t => {
                        if (t && t.application && t.application.name && (this.applicationName = t.application.name), t && t.application && (this.showGitHubLink = t.application.showGitHubLinks), t && t.application && t.application.logo) {
                            let e = t.application.logo;
                            "http" === e.substring(0, 4) && (e = decodeURIComponent(e.substring(e.lastIndexOf("/") + 1))), this.logoSrc = "assets/public/images/" + e
                        }
                    }, t => console.log(t)), localStorage.getItem("token") ? this.getUserDetails() : this.userEmail = "", this.userService.getLoggedInState().subscribe(t => {
                        t ? this.getUserDetails() : this.userEmail = ""
                    }), this.getScoreBoardStatus(), this.ngZone.runOutsideAngular(() => {
                        this.io.socket().on("challenge solved", t => {
                            "scoreBoardChallenge" === t.key && (this.scoreBoardVisible = !0)
                        })
                    })
                }

                checkLanguage() {
                    if (this.cookieService.get("language")) {
                        const t = this.cookieService.get("language");
                        this.translate.use(t), this.selectedLanguage = this.languages.find(e => e.key === t), this.shortKeyLang = this.languages.find(e => e.key === t).shortKey
                    } else this.changeLanguage("en"), this.selectedLanguage = this.languages.find(t => "en" === t.key), this.shortKeyLang = this.languages.find(t => "en" === t.key).shortKey
                }

                search(t) {
                    if (t) {
                        const e = {queryParams: {q: t}};
                        this.ngZone.run(() => this.router.navigate(["/search"], e))
                    } else this.ngZone.run(() => this.router.navigate(["/search"]))
                }

                getUserDetails() {
                    this.userService.whoAmI().subscribe(t => {
                        this.userEmail = t.email
                    }, t => console.log(t))
                }

                isLoggedIn() {
                    return localStorage.getItem("token")
                }

                logout() {
                    this.userService.saveLastLoginIp().subscribe(t => {
                        this.noop()
                    }, t => console.log(t)), localStorage.removeItem("token"), this.cookieService.delete("token", "/"), sessionStorage.removeItem("bid"), this.userService.isLoggedIn.next(!1), this.ngZone.run(() => this.router.navigate(["/"]))
                }

                changeLanguage(t) {
                    this.translate.use(t);
                    let e = new Date;
                    if (e.setFullYear(e.getFullYear() + 1), this.cookieService.set("language", t, e, "/"), this.languages.find(e => e.key === t)) {
                        const e = this.languages.find(e => e.key === t);
                        this.shortKeyLang = e.shortKey, this.snackBar.open("Language has been changed to " + e.lang, "Force page reload", {duration: 5e3}).onAction().subscribe(() => {
                            location.reload()
                        })
                    }
                }

                getScoreBoardStatus() {
                    this.challengeService.find({name: "Score Board"}).subscribe(t => {
                        this.ngZone.run(() => {
                            this.scoreBoardVisible = t[0].solved
                        })
                    }, t => console.log(t))
                }

                goToProfilePage() {
                    window.location.replace("./profile")
                }

                noop() {
                }

                getLanguages() {
                    this.langService.getLanguages().subscribe(t => {
                        this.languages = t, this.checkLanguage()
                    })
                }

                isAccounting() {
                    const t = this.loginGuard.tokenDecode();
                    return t && t.data && "accounting" === t.data.role
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Cs), i.Nb(ao), i.Nb(b), i.Nb(w), i.Nb(i.B), i.Nb(r.a), i.Nb(y.b), i.Nb(f.e), i.Nb(Qe), i.Nb(Zs), i.Nb(_), i.Nb(P.a), i.Nb(O))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-navbar"]],
                outputs: {sidenavToggle: "sidenavToggle"},
                decls: 88,
                vars: 45,
                consts: [["color", "primary", "fxLayout", "column", "xmlns", "http://www.w3.org/1999/html", 1, "mat-elevation-z6"], ["fxLayout", "row"], ["mat-button", "", "aria-label", "Open Sidenav", "matTooltipPosition", "below", 2, "height", "48px", "width", "48px", 3, "matTooltip", "click"], ["mat-button", "", "routerLink", "/search", "aria-label", "Back to homepage", 1, "buttons", 2, "height", "60px"], [1, "logo", 3, "src", "alt"], ["fxHide.lt-sm", "", "fxShow", "", 2, "font-size", "x-large"], [1, "fill-remaining-space"], ["id", "searchQuery", "aria-label", "Click to search", 3, "onEnter"], ["searchControl", ""], ["mat-button", "", "fxHide.lt-md", "", "fxShow", "", "aria-label", "Show/hide account menu", "id", "navbarAccount", 1, "buttons", 2, "vertical-align", "middle", "height", "48px", 3, "matMenuTriggerFor"], [1, "material-icons"], ["userMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click", 4, "ngIf"], ["mat-button", "", "routerLink", "/basket", "style", "height:48px;", "class", "buttons", "aria-label", "Show the shopping cart", 4, "ngIf"], ["mat-button", "", "aria-label", "Language selection menu", "matTooltipPosition", "below", 1, "buttons", 2, "height", "48px", "width", "48px", 3, "matMenuTriggerFor", "matTooltip"], ["fxHide.lt-md", "", "fxShow", ""], [3, "overlapTrigger"], ["menu", "matMenu"], ["class", "mat-menu-item", "style", "width: 240px;", 3, "value", "checked", "aria-label", "click", 4, "ngFor", "ngForOf"], ["privacySubMenu", "matMenu"], ["mat-menu-item", "", "aria-label", "Go to privacy policy page", 3, "routerLink"], ["translate", ""], ["mat-menu-item", "", "aria-label", "Go to data export page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to data subject page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to change password page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to two factor authentication page", 3, "routerLink"], ["mat-menu-item", "", "aria-label", "Go to last login ip page", 3, "routerLink"], ["ordersSubMenu", "matMenu"], ["mat-menu-item", "", "routerLink", "/order-history", "aria-label", "Go to order history page"], ["mat-menu-item", "", "routerLink", "/recycle", "aria-label", "Go to recycling page"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page", 4, "ngIf"], ["mat-menu-item", "", "routerLink", "/login", "aria-label", "Go to login page", "id", "navbarLoginButton"], ["mat-menu-item", "", "aria-label", "Go to user profile", 3, "click"], ["mat-menu-item", "", "routerLink", "/accounting", "aria-label", "Go to accounting page"], ["mat-menu-item", "", "aria-label", "Show Orders and Payment Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Show Privacy and Security Menu", 3, "matMenuTriggerFor"], ["mat-menu-item", "", "aria-label", "Logout", "id", "navbarLogoutButton", 3, "click"], ["mat-button", "", "routerLink", "/basket", "aria-label", "Show the shopping cart", 1, "buttons", 2, "height", "48px"], [1, "fa-layers-counter", "fa-layers-top-right", "fa-3x", "warn-notification", 2, "font-size", "47px"], [1, "mat-menu-item", 2, "width", "240px", 3, "value", "checked", "aria-label", "click"], [2, "display", "inline-block", "width", "200px", "margin-left", "5px"], [3, "class", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "routerLink", "/address/saved", "aria-label", "Go to saved address page"], ["mat-menu-item", "", "routerLink", "/saved-payment-methods", "aria-label", "Go to saved payment methods page"], ["mat-menu-item", "", "routerLink", "/wallet", "aria-label", "Go to wallet page"]],
                template: function (t, e) {
                    if (1 & t) {
                        const t = i.Ub();
                        i.Tb(0, "mat-toolbar", 0), i.Tb(1, "mat-toolbar-row", 1), i.Tb(2, "button", 2), i.ac("click", (function () {
                            return e.onToggleSidenav()
                        })), i.fc(3, "translate"), i.Tb(4, "mat-icon"), i.Hc(5, "menu"), i.Sb(), i.Sb(), i.Tb(6, "button", 3), i.Ob(7, "img", 4), i.Tb(8, "span", 5), i.Hc(9), i.Sb(), i.Sb(), i.Ob(10, "span", 6), i.Tb(11, "mat-search-bar", 7, 8), i.ac("onEnter", (function () {
                            i.vc(t);
                            const a = i.sc(12);
                            return e.search(a.value)
                        })), i.Sb(), i.Tb(13, "button", 9), i.Tb(14, "i", 10), i.Hc(15, " account_circle "), i.Sb(), i.Tb(16, "span"), i.Hc(17), i.fc(18, "translate"), i.Sb(), i.Sb(), i.Tb(19, "mat-menu", null, 11), i.Fc(21, al, 6, 3, "button", 12), i.Fc(22, il, 5, 1, "button", 13), i.Fc(23, ol, 6, 3, "button", 14), i.Fc(24, nl, 6, 4, "button", 15), i.Fc(25, rl, 6, 4, "button", 16), i.Fc(26, cl, 6, 3, "button", 17), i.Sb(), i.Fc(27, sl, 8, 4, "button", 18), i.Tb(28, "button", 19), i.fc(29, "translate"), i.Tb(30, "mat-icon"), i.Hc(31, " language "), i.Sb(), i.Tb(32, "span", 20), i.Hc(33), i.Sb(), i.Sb(), i.Tb(34, "mat-menu", 21, 22), i.Fc(36, bl, 5, 7, "mat-radio-button", 23), i.Sb(), i.Tb(37, "mat-menu", null, 24), i.Tb(39, "button", 25), i.Tb(40, "mat-icon"), i.Hc(41, " assignment "), i.Sb(), i.Tb(42, "span", 26), i.Hc(43, "TITLE_PRIVACY_POLICY"), i.Sb(), i.Sb(), i.Tb(44, "button", 27), i.Tb(45, "mat-icon"), i.Hc(46, " get_app "), i.Sb(), i.Tb(47, "span", 26), i.Hc(48, "TITLE_REQUEST_DATA_EXPORT"), i.Sb(), i.Sb(), i.Tb(49, "button", 28), i.Tb(50, "mat-icon"), i.Hc(51, " delete_forever "), i.Sb(), i.Tb(52, "span", 26), i.Hc(53, "DATA_SUBJECT_TITLE"), i.Sb(), i.Sb(), i.Ob(54, "mat-divider"), i.Tb(55, "button", 29), i.Tb(56, "mat-icon"), i.Hc(57, " edit "), i.Sb(), i.Tb(58, "span", 26), i.Hc(59, "TITLE_CHANGE_PASSWORD"), i.Sb(), i.Sb(), i.Tb(60, "button", 30), i.Tb(61, "mat-icon"), i.Hc(62, " exposure_plus_2 "), i.Sb(), i.Tb(63, "span", 26), i.Hc(64, "TITLE_TWO_FACTOR_AUTH_CONFIG"), i.Sb(), i.Sb(), i.Tb(65, "button", 31), i.Tb(66, "mat-icon"), i.Hc(67, " place "), i.Sb(), i.Tb(68, "span", 26), i.Hc(69, "LAST_LOGIN_IP"), i.Sb(), i.Sb(), i.Sb(), i.Tb(70, "mat-menu", null, 32),i.Tb(72, "button", 33),i.Tb(73, "mat-icon"),i.Hc(74, " archive "),i.Sb(),i.Tb(75, "span"),i.Hc(76),i.fc(77, "translate"),i.Sb(),i.Sb(),i.Tb(78, "button", 34),i.Tb(79, "mat-icon"),i.Hc(80, " autorenew "),i.Sb(),i.Tb(81, "span"),i.Hc(82),i.fc(83, "translate"),i.Sb(),i.Sb(),i.Ob(84, "mat-divider"),i.Fc(85, ul, 6, 3, "button", 35),i.Fc(86, dl, 6, 3, "button", 36),i.Fc(87, ml, 6, 3, "button", 37),i.Sb(),i.Sb(),i.Sb()
                    }
                    if (2 & t) {
                        const t = i.sc(20), a = i.sc(35);
                        i.Bb(2), i.lc("matTooltip", i.gc(3, 29, "SIDENAV_HINT")), i.Bb(5), i.lc("alt", e.applicationName), i.kc("src", e.logoSrc, i.yc), i.Bb(2), i.Jc(" ", e.applicationName, " "), i.Bb(4), i.kc("matMenuTriggerFor", t), i.Bb(4), i.Jc(" ", i.gc(18, 31, "ACCOUNT"), " "), i.Bb(4), i.kc("ngIf", !e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn() && e.isAccounting()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.lc("matTooltip", i.gc(29, 33, "LANGUAGE_SEL_HINT")), i.kc("matMenuTriggerFor", a), i.Bb(5), i.Jc(" ", e.shortKeyLang, " "), i.Bb(1), i.kc("overlapTrigger", !0), i.Bb(2), i.kc("ngForOf", e.languages), i.Bb(3), i.kc("routerLink", i.oc(39, hl)), i.Bb(5), i.kc("routerLink", i.oc(40, pl)), i.Bb(5), i.kc("routerLink", i.oc(41, gl)), i.Bb(6), i.kc("routerLink", i.oc(42, fl)), i.Bb(5), i.kc("routerLink", i.oc(43, Sl)), i.Bb(5), i.kc("routerLink", i.oc(44, Tl)), i.Bb(11), i.Jc(" ", i.gc(77, 35, "LABEL_ORDER_HISTORY"), " "), i.Bb(6), i.Jc(" ", i.gc(83, 37, "NAV_RECYCLE"), " "), i.Bb(3), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn()), i.Bb(1), i.kc("ngIf", e.isLoggedIn())
                    }
                },
                directives: [ws.a, p.d, ws.c, S.a, Ce.a, ve.a, y.c, D.b, tl.b, el.c, el.d, L.l, L.k, el.a, f.a, Fe.a, Ii.a],
                pipes: [f.d],
                styles: ["mat-toolbar[_ngcontent-%COMP%]{height:auto;min-width:100%;padding-bottom:5px;width:100%}.mat-button[_ngcontent-%COMP%]{padding-left:8px;padding-right:8px}.logo[_ngcontent-%COMP%]{max-height:60px;width:auto}.avatar[_ngcontent-%COMP%]{background-repeat:no-repeat;border-radius:50%;display:inline-block;max-height:35px;max-width:35px;padding:0;pointer-events:none}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.language-select[_ngcontent-%COMP%]{margin-left:10px;width:11%}  .mat-select-value-text{font-size:15px}.user-info[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px}.flag-icon[_ngcontent-%COMP%]{margin-right:2px}[_nghost-%COMP%]     mat-form-field, [_nghost-%COMP%]     mat-icon{background:transparent!important}mat-search-bar[_ngcontent-%COMP%]{font-size:13px;margin-right:14px}.buttons[_ngcontent-%COMP%]{width:auto}@media screen and (max-width:959px){.buttons[_ngcontent-%COMP%]{width:48px}}[_nghost-%COMP%]     .mat-form-field-infix{max-width:250px!important;width:14vw!important}"]
            }), t
        })();

        function Cl(t, e) {
            1 & t && (i.Tb(0, "span", 2), i.Hc(1, "RESTART_REQUIRED"), i.Sb())
        }

        function wl(t, e) {
            1 & t && (i.Tb(0, "span", 2), i.Hc(1, "RESET_HACKING_PROGRESS"), i.Sb())
        }

        function yl(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-card", 1), i.Ob(1, "mat-card-header"), i.Tb(2, "mat-card-content"), i.Tb(3, "span", 2), i.Hc(4, "NOTIFICATION_SERVER_STARTED"), i.Sb(), i.Hc(5), i.Tb(6, "span", 3), i.ac("click", (function () {
                    return i.vc(t), i.ec().closeNotification()
                })), i.Hc(7, "X"), i.Sb(), i.Tb(8, "button", 4), i.ac("click", (function () {
                    return i.vc(t), i.ec().clearProgress()
                })), i.Ob(9, "i", 5), i.Fc(10, Cl, 2, 0, "span", 6), i.Fc(11, wl, 2, 0, "span", 6), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = i.ec();
                i.Bb(5), i.Jc(": ", t.hackingProgress.autoRestoreMessage, ""), i.Bb(3), i.kc("disabled", t.hackingProgress.cleared), i.Bb(2), i.kc("ngIf", t.hackingProgress.cleared), i.Bb(1), i.kc("ngIf", !t.hackingProgress.cleared)
            }
        }

        u.b.add(m.Y), u.a.watch();
        let kl = (() => {
            class t {
                constructor(t, e, a, i, o, n) {
                    this.ngZone = t, this.challengeService = e, this.translate = a, this.cookieService = i, this.ref = o, this.io = n, this.hackingProgress = {}
                }

                ngOnInit() {
                    this.ngZone.runOutsideAngular(() => {
                        this.io.socket().on("server started", () => {
                            let t = this.cookieService.get("continueCode");
                            t && this.challengeService.restoreProgress(encodeURIComponent(t)).subscribe(() => {
                                this.translate.get("AUTO_RESTORED_PROGRESS").subscribe(t => {
                                    this.hackingProgress.autoRestoreMessage = t
                                }, t => {
                                    this.hackingProgress.autoRestoreMessage = t
                                })
                            }, t => {
                                console.log(t), this.translate.get("AUTO_RESTORE_PROGRESS_FAILED", {error: t}).subscribe(t => {
                                    this.hackingProgress.autoRestoreMessage = t
                                }, t => {
                                    this.hackingProgress.autoRestoreMessage = t
                                })
                            }), this.ref.detectChanges()
                        })
                    })
                }

                closeNotification() {
                    this.hackingProgress.autoRestoreMessage = null
                }

                clearProgress() {
                    this.cookieService.delete("continueCode", "/"), localStorage.removeItem("displayedDifficulties"), localStorage.removeItem("showSolvedChallenges"), localStorage.removeItem("showDisabledChallenges"), localStorage.removeItem("showOnlyTutorialChallenges"), localStorage.removeItem("displayedChallengeCategories"), this.hackingProgress.cleared = !0
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(i.B), i.Nb(ao), i.Nb(f.e), i.Nb(r.a), i.Nb(i.h), i.Nb(Qe))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-server-started-notification"]],
                decls: 1,
                vars: 1,
                consts: [["class", "container primary-notification mat-elevation-z4", 4, "ngIf"], [1, "container", "primary-notification", "mat-elevation-z4"], ["translate", ""], [2, "float", "right", "cursor", "pointer", 3, "click"], ["mat-raised-button", "", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fas", "fa-trash"], ["translate", "", 4, "ngIf"]],
                template: function (t, e) {
                    1 & t && i.Fc(0, yl, 12, 4, "mat-card", 0), 2 & t && i.kc("ngIf", e.hackingProgress.autoRestoreMessage)
                },
                directives: [L.l, g.a, g.c, g.b, f.a, S.a],
                styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}"]
            }), t
        })(), Ol = (() => {
            class t {
                constructor(t) {
                    this.http = t, this.hostServer = "."
                }

                getCountryMapping() {
                    return this.http.get(this.hostServer + "/rest/country-mapping").pipe(Object(l.a)(t => {
                        throw t
                    }))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Xb(n.b))
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac, providedIn: "root"}), t
        })();

        function Il(t, e) {
            if (1 & t && (i.Ob(0, "span"), i.fc(1, "lowercase")), 2 & t) {
                const t = i.ec(2).$implicit;
                i.Eb("flag-icon flag-icon-", i.gc(1, 3, t.country.code), "")
            }
        }

        function _l(t, e) {
            1 & t && i.Ob(0, "i", 11)
        }

        function xl(t, e) {
            if (1 & t && (i.Tb(0, "span"), i.Hc(1), i.Sb()), 2 & t) {
                const t = i.ec(2).$implicit;
                i.Bb(1), i.Jc(" ", t.country.name, " ")
            }
        }

        function Bl(t, e) {
            if (1 & t && (i.Tb(0, "div"), i.Fc(1, Il, 2, 5, "span", 9), i.Fc(2, _l, 1, 0, "i", 10), i.Fc(3, xl, 2, 1, "span", 5), i.Ob(4, "br"), i.Sb()), 2 & t) {
                const t = i.ec(2);
                i.Bb(1), i.kc("ngIf", "flag" === t.showCtfCountryDetailsInNotifications || "both" === t.showCtfCountryDetailsInNotifications), i.Bb(1), i.kc("ngIf", "name" === t.showCtfCountryDetailsInNotifications), i.Bb(1), i.kc("ngIf", "name" === t.showCtfCountryDetailsInNotifications || "both" === t.showCtfCountryDetailsInNotifications)
            }
        }

        function Hl(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "mat-card", 2), i.Tb(1, "div"), i.Hc(2), i.Tb(3, "span", 3), i.ac("click", (function (a) {
                    i.vc(t);
                    const o = e.index;
                    return i.ec().closeNotification(o, a.shiftKey)
                })), i.Hc(4, "X"), i.Sb(), i.Sb(), i.Ob(5, "br"), i.Tb(6, "div", 4), i.Fc(7, Bl, 5, 3, "div", 5), i.Ob(8, "i", 6), i.Hc(9), i.Tb(10, "button", 7), i.ac("cbOnSuccess", (function () {
                    return e.$implicit.copied = !0
                })), i.Ob(11, "i", 8), i.Tb(12, "span", 4), i.Hc(13), i.fc(14, "translate"), i.Sb(), i.Tb(15, "span", 4), i.Hc(16), i.fc(17, "translate"), i.Sb(), i.Sb(), i.Sb(), i.Sb()
            }
            if (2 & t) {
                const t = e.$implicit, a = i.ec();
                i.Bb(2), i.Jc(" ", t.message, ""), i.Bb(4), i.kc("hidden", !a.showCtfFlagsInNotifications), i.Bb(1), i.kc("ngIf", "none" !== a.showCtfCountryDetailsInNotifications), i.Bb(2), i.Jc(" ", t.flag, " "), i.Bb(1), i.kc("cbContent", t.flag)("disabled", t.copied), i.Bb(2), i.kc("hidden", !t.copied), i.Bb(1), i.Ic(i.gc(14, 10, "COPY_SUCCESS")), i.Bb(2), i.kc("hidden", t.copied), i.Bb(1), i.Ic(i.gc(17, 12, "COPY_TO_CLIPBOARD"))
            }
        }

        u.b.add(m.s, m.q, m.g), u.a.watch();
        let Pl = (() => {
            class t {
                constructor(t, e, a, i, o, n, r, c) {
                    this.ngZone = t, this.configurationService = e, this.challengeService = a, this.countryMappingService = i, this.translate = o, this.cookieService = n, this.ref = r, this.io = c, this.notifications = [], this.showCtfFlagsInNotifications = !1, this.showCtfCountryDetailsInNotifications = "none"
                }

                ngOnInit() {
                    this.ngZone.runOutsideAngular(() => {
                        this.io.socket().on("challenge solved", t => {
                            t && t.challenge && (t.hidden || this.showNotification(t), t.isRestore || this.saveProgress(), this.io.socket().emit("notification received", t.flag))
                        })
                    }), this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.ctf && (this.showCtfFlagsInNotifications = !!t.ctf.showFlagsInNotifications && t.ctf.showFlagsInNotifications, t.ctf.showCountryDetailsInNotifications ? (this.showCtfCountryDetailsInNotifications = t.ctf.showCountryDetailsInNotifications, "none" !== t.ctf.showCountryDetailsInNotifications && this.countryMappingService.getCountryMapping().subscribe(t => {
                            this.countryMap = t
                        }, t => console.log(t))) : this.showCtfCountryDetailsInNotifications = "none")
                    })
                }

                closeNotification(t, e = !1) {
                    e ? this.notifications = [] : this.notifications.splice(t, 1), this.ref.detectChanges()
                }

                showNotification(t) {
                    this.translate.get("CHALLENGE_SOLVED", {challenge: t.challenge}).toPromise().then(t => t, t => t).then(e => {
                        let a;
                        this.showCtfCountryDetailsInNotifications && "none" !== this.showCtfCountryDetailsInNotifications && (a = this.countryMap[t.key]), this.notifications.push({
                            message: e,
                            flag: t.flag,
                            country: a,
                            copied: !1
                        }), this.ref.detectChanges()
                    })
                }

                saveProgress() {
                    this.challengeService.continueCode().subscribe(t => {
                        if (!t) throw new Error("Received invalid continue code from the sever!");
                        let e = new Date;
                        e.setFullYear(e.getFullYear() + 1), this.cookieService.set("continueCode", t, e, "/")
                    }, t => console.log(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(i.B), i.Nb(b), i.Nb(ao), i.Nb(Ol), i.Nb(f.e), i.Nb(r.a), i.Nb(i.h), i.Nb(Qe))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-challenge-solved-notification"]],
                decls: 2,
                vars: 1,
                consts: [[1, "container", "challenge-solved-toast", "mat-elevation-z4"], ["class", "accent-notification", 4, "ngFor", "ngForOf"], [1, "accent-notification"], [2, "float", "right", "cursor", "pointer", 3, "click"], [3, "hidden"], [4, "ngIf"], [1, "fas", "fa-flag-checkered"], ["ngxClipboard", "", "mat-raised-button", "", 3, "cbContent", "disabled", "cbOnSuccess"], ["aria-hidden", "true", 1, "fas", "fa-clipboard"], [3, "class", 4, "ngIf"], ["class", "fa fa-globe", 4, "ngIf"], [1, "fa", "fa-globe"]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Fc(1, Hl, 18, 14, "mat-card", 1), i.Sb()), 2 & t && (i.Bb(1), i.kc("ngForOf", e.notifications))
                },
                directives: [L.k, g.a, L.l, S.a, vs.a],
                pipes: [f.d, L.i],
                styles: [".container[_ngcontent-%COMP%]{font-size:14px;margin:40px}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}"]
            }), t
        })();

        function Al(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 4), i.ac("click", (function () {
                    return i.vc(t), i.ec().startHackingInstructor()
                })), i.fc(1, "translate"), i.Tb(2, "mat-icon"), i.Hc(3, " school "), i.Sb(), i.Tb(4, "span", 5), i.Hc(5, "BTN_GETTING_STARTED"), i.Sb(), i.Sb()
            }
            2 & t && i.kc("matTooltip", i.gc(1, 1, "SCORE_BOARD_HACKING_INSTRUCTOR"))
        }

        function El(t, e) {
            if (1 & t) {
                const t = i.Ub();
                i.Tb(0, "button", 6), i.ac("click", (function () {
                    return i.vc(t), i.ec().closeWelcome()
                })), i.Tb(1, "mat-icon"), i.Hc(2, " visibility_off "), i.Sb(), i.Tb(3, "span", 7), i.Hc(4, "BTN_DISMISS"), i.Sb(), i.Sb()
            }
        }

        let Ll = (() => {
            class t {
                constructor(t, e, a) {
                    this.dialogRef = t, this.configurationService = e, this.cookieService = a, this.title = "Welcome to OWASP Juice Shop", this.message = "<p>Being a web application with a vast number of intended security vulnerabilities, the <strong>OWASP Juice Shop</strong> is supposed to be the opposite of a best practice or template application for web developers: It is an awareness, training, demonstration and exercise tool for security risks in modern web applications. The <strong>OWASP Juice Shop</strong> is an open-source project hosted by the non-profit <a href='https://owasp.org' target='_blank'>Open Web Application Security Project (OWASP)</a> and is developed and maintained by volunteers. Check out the link below for more information and documentation on the project.</p><h1><a href='https://owasp-juice.shop' target='_blank'>https://owasp-juice.shop</a></h1>", this.showHackingInstructor = !0, this.showDismissBtn = !0, this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                }

                ngOnInit() {
                    this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.welcomeBanner && (this.title = t.application.welcomeBanner.title, this.message = t.application.welcomeBanner.message), t && t.application && (this.showHackingInstructor = t.hackingInstructor && t.hackingInstructor.isEnabled), this.showHackingInstructor && t.challenges && t.challenges.restrictToTutorialsFirst && (this.dialogRef.disableClose = !0, this.showDismissBtn = !1)
                    }, t => console.log(t))
                }

                startHackingInstructor() {
                    this.closeWelcome(), console.log('Starting instructions for challenge "Score Board"'), a.e(5).then(a.bind(null, "s2oO")).then(t => {
                        t.startHackingInstructorFor("Score Board")
                    })
                }

                closeWelcome() {
                    this.dialogRef.close();
                    let t = new Date;
                    t.setFullYear(t.getFullYear() + 1), this.cookieService.set(this.welcomeBannerStatusCookieKey, "dismiss", t, "/")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.g), i.Nb(b), i.Nb(r.a))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-welcome-banner"]],
                decls: 8,
                vars: 4,
                consts: [[1, "mat-typography"], [1, "text-justify", 3, "innerHtml"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click", 4, "ngIf"], ["mat-raised-button", "", "class", "close-dialog", "color", "primary", "aria-label", "Close Welcome Banner", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "warn", "matTooltipPosition", "above", 3, "matTooltip", "click"], ["fxShow", "", "fxHide.lt-lg", "", "translate", ""], ["mat-raised-button", "", "color", "primary", "aria-label", "Close Welcome Banner", 1, "close-dialog", 3, "click"], ["fxShow", "", "fxHide.lt-sm", "", "translate", ""]],
                template: function (t, e) {
                    1 & t && (i.Tb(0, "div", 0), i.Tb(1, "h1"), i.Tb(2, "span"), i.Hc(3), i.Sb(), i.Sb(), i.Ob(4, "div", 1), i.Tb(5, "div"), i.Fc(6, Al, 6, 3, "button", 2), i.Fc(7, El, 5, 0, "button", 3), i.Sb(), i.Sb()), 2 & t && (i.Bb(3), i.Ic(e.title), i.Bb(1), i.kc("innerHtml", e.message, i.wc), i.Bb(2), i.kc("ngIf", e.showHackingInstructor), i.Bb(1), i.kc("ngIf", e.showDismissBtn))
                },
                directives: [L.l, S.a, Ce.a, ve.a, D.b, f.a],
                pipes: [f.d],
                styles: [".text-justify[_ngcontent-%COMP%]{text-align:justify;text-justify:inter-word}[_nghost-%COMP%]     h1 a{font-size:20px}[_nghost-%COMP%]     strong{font-style:italic}"]
            }), t
        })(), Dl = (() => {
            class t {
                constructor(t, e, a) {
                    this.dialog = t, this.configurationService = e, this.cookieService = a, this.welcomeBannerStatusCookieKey = "welcomebanner_status"
                }

                ngOnInit() {
                    "dismiss" !== this.cookieService.get(this.welcomeBannerStatusCookieKey) && this.configurationService.getApplicationConfiguration().subscribe(t => {
                        t && t.application && t.application.welcomeBanner && !t.application.welcomeBanner.showOnFirstStart || this.dialog.open(Ll, {
                            minWidth: "320px",
                            width: "35%",
                            position: {top: "50px"}
                        })
                    }, t => console.log(t))
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(Ee.b), i.Nb(b), i.Nb(r.a))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-welcome"]],
                decls: 1,
                vars: 0,
                template: function (t, e) {
                    1 & t && i.Ob(0, "div")
                },
                styles: [".welcome-style[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;max-width:50%;min-width:320px}"]
            }), t
        })(), Nl = (() => {
            class t {
                constructor(t, e) {
                    this._document = t, this.translate = e, this.translate.setDefaultLang("en")
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)(i.Nb(L.d), i.Nb(f.e))
            }, t.\u0275cmp = i.Hb({
                type: t,
                selectors: [["app-root"]],
                decls: 10,
                vars: 0,
                consts: [[1, "mat-typography"], ["fullscreen", ""], ["mode", "over"], ["sidenav", ""], [3, "sidenavToggle"]],
                template: function (t, e) {
                    if (1 & t) {
                        const t = i.Ub();
                        i.Tb(0, "div", 0), i.Tb(1, "mat-sidenav-container", 1), i.Tb(2, "mat-sidenav", 2, 3), i.Tb(4, "sidenav", 4), i.ac("sidenavToggle", (function () {
                            return i.vc(t), i.sc(3).toggle()
                        })), i.Sb(), i.Sb(), i.Tb(5, "app-navbar", 4), i.ac("sidenavToggle", (function () {
                            return i.vc(t), i.sc(3).toggle()
                        })), i.Sb(), i.Ob(6, "app-server-started-notification"), i.Ob(7, "app-challenge-solved-notification"), i.Ob(8, "app-welcome"), i.Ob(9, "router-outlet"), i.Sb(), i.Sb()
                    }
                },
                directives: [an.b, an.a, Xs, vl, kl, Pl, Dl, y.f],
                styles: [".mat-sidenav[_ngcontent-%COMP%]{width:280px}"]
            }), t
        })(), Fl = (() => {
            class t {
                intercept(t, e) {
                    return localStorage.getItem("token") && (t = t.clone({setHeaders: {Authorization: "Bearer " + localStorage.getItem("token")}})), localStorage.getItem("email") && (t = t.clone({setHeaders: {"X-User-Email": String(localStorage.getItem("email"))}})), e.handle(t)
                }
            }

            return t.\u0275fac = function (e) {
                return new (e || t)
            }, t.\u0275prov = i.Jb({token: t, factory: t.\u0275fac}), t
        })();
        var Ml = a("u9T3"), Rl = a("omvX"), Ul = a("8Qe2"), jl = a("1O3W");

        function Jl(t) {
            return new Ts.a(t, "./assets/i18n/", ".json")
        }

        let Gl = (() => {
            class t {
                constructor(t, e) {
                    t.getApplicationConfiguration().subscribe(t => {
                        e.getContainerElement().classList.add(t.application.theme + "-theme")
                    })
                }
            }

            return t.\u0275mod = i.Lb({type: t, bootstrap: [Nl]}), t.\u0275inj = i.Kb({
                factory: function (e) {
                    return new (e || t)(i.Xb(b), i.Xb(jl.e))
                },
                providers: [{
                    provide: n.a,
                    useClass: Fl,
                    multi: !0
                }, qe, b, Cs, jt, Jt, w, ae, Pt, Ht, ba, Le, ri, gi, st, yi, O, ao, r.a, x, _, En, B, H, ln, ki, $e, Pn, Cr, An, ns],
                imports: [[o.a, Ss, f.c.forRoot({
                    loader: {
                        provide: f.b,
                        useFactory: Jl,
                        deps: [n.b]
                    }
                }), oe.c.forRoot(), Ml.a, n.c, c.v, Rl.b, Vt.a, nn.b, ci.b, vs.b, ro.b, ws.b, ve.b, Et.e, ne.b, S.b, an.d, E.p, We.b, g.e, Lt.c, ua.b, Ee.f, Fe.b, Yi.c, re.k, Me.a, co.b, Ce.b, el.b, ys.c, so.b, en.c, Ke.b, tl.a, Ul.a, Ii.c, P.b, Dt.b, ie.b, lo.c]]
            }), t
        })();
        Object(i.U)(), o.f().bootstrapModule(Gl).catch(t => console.log(t))
    }
}, [[0, 0, 6]]]);