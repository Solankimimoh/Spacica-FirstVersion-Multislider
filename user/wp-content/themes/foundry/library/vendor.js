! function (t, e) {
	function n(e, n) {
		var o, r, s, a = e.nodeName.toLowerCase();
		return "area" === a ? (o = e.parentNode, r = o.name, e.href && r && "map" === o.nodeName.toLowerCase() ? (s = t("img[usemap=#" + r + "]")[0], !!s && i(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
	}

	function i(e) {
		return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
			return "hidden" === t.css(this, "visibility")
		}).length
	}
	var o = 0,
		r = /^ui-id-\d+$/;
	t.ui = t.ui || {}, t.extend(t.ui, {
		version: "1.10.3",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), t.fn.extend({
		focus: function (e) {
			return function (n, i) {
				return "number" == typeof n ? this.each(function () {
					var e = this;
					setTimeout(function () {
						t(e).focus(), i && i.call(e)
					}, n)
				}) : e.apply(this, arguments)
			}
		}(t.fn.focus),
		scrollParent: function () {
			var e;
			return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
				return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function () {
				return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
		},
		zIndex: function (n) {
			if (n !== e) return this.css("zIndex", n);
			if (this.length)
				for (var i, o, r = t(this[0]); r.length && r[0] !== document;) {
					if (i = r.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (o = parseInt(r.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
					r = r.parent()
				}
			return 0
		},
		uniqueId: function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++o)
			})
		},
		removeUniqueId: function () {
			return this.each(function () {
				r.test(this.id) && t(this).removeAttr("id")
			})
		}
	}), t.extend(t.expr[":"], {
		data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
			return function (n) {
				return !!t.data(n, e)
			}
		}) : function (e, n, i) {
			return !!t.data(e, i[3])
		},
		focusable: function (e) {
			return n(e, !isNaN(t.attr(e, "tabindex")))
		},
		tabbable: function (e) {
			var i = t.attr(e, "tabindex"),
				o = isNaN(i);
			return (o || i >= 0) && n(e, !o)
		}
	}), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (n, i) {
		function o(e, n, i, o) {
			return t.each(r, function () {
				n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
			}), n
		}
		var r = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			s = i.toLowerCase(),
			a = {
				innerWidth: t.fn.innerWidth,
				innerHeight: t.fn.innerHeight,
				outerWidth: t.fn.outerWidth,
				outerHeight: t.fn.outerHeight
			};
		t.fn["inner" + i] = function (n) {
			return n === e ? a["inner" + i].call(this) : this.each(function () {
				t(this).css(s, o(this, n) + "px")
			})
		}, t.fn["outer" + i] = function (e, n) {
			return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
				t(this).css(s, o(this, e, !0, n) + "px")
			})
		}
	}), t.fn.addBack || (t.fn.addBack = function (t) {
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
		return function (n) {
			return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
		}
	}(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.support.selectstart = "onselectstart" in document.createElement("div"), t.fn.extend({
		disableSelection: function () {
			return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
				t.preventDefault()
			})
		},
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		}
	}), t.extend(t.ui, {
		plugin: {
			add: function (e, n, i) {
				var o, r = t.ui[e].prototype;
				for (o in i) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([n, i[o]])
			},
			call: function (t, e, n) {
				var i, o = t.plugins[e];
				if (o && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
					for (i = 0; o.length > i; i++) t.options[o[i][0]] && o[i][1].apply(t.element, n)
			}
		},
		hasScroll: function (e, n) {
			if ("hidden" === t(e).css("overflow")) return !1;
			var i = n && "left" === n ? "scrollLeft" : "scrollTop",
				o = !1;
			return e[i] > 0 ? !0 : (e[i] = 1, o = e[i] > 0, e[i] = 0, o)
		}
	})
}(jQuery),
function (t, e) {
	function n(t, e, n) {
		return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? n / 100 : 1)]
	}

	function i(e, n) {
		return parseInt(t.css(e, n), 10) || 0
	}

	function o(e) {
		var n = e[0];
		return 9 === n.nodeType ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: 0,
				left: 0
			}
		} : t.isWindow(n) ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: e.scrollTop(),
				left: e.scrollLeft()
			}
		} : n.preventDefault ? {
			width: 0,
			height: 0,
			offset: {
				top: n.pageY,
				left: n.pageX
			}
		} : {
			width: e.outerWidth(),
			height: e.outerHeight(),
			offset: e.offset()
		}
	}
	t.ui = t.ui || {};
	var r, s = Math.max,
		a = Math.abs,
		c = Math.round,
		u = /left|center|right/,
		h = /top|center|bottom/,
		f = /[\+\-]\d+(\.[\d]+)?%?/,
		l = /^\w+/,
		p = /%$/,
		d = t.fn.position;
	t.position = {
			scrollbarWidth: function () {
				if (r !== e) return r;
				var n, i, o = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
					s = o.children()[0];
				return t("body").append(o), n = s.offsetWidth, o.css("overflow", "scroll"), i = s.offsetWidth, n === i && (i = o[0].clientWidth), o.remove(), r = n - i
			},
			getScrollInfo: function (e) {
				var n = e.isWindow ? "" : e.element.css("overflow-x"),
					i = e.isWindow ? "" : e.element.css("overflow-y"),
					o = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth,
					r = "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight;
				return {
					width: r ? t.position.scrollbarWidth() : 0,
					height: o ? t.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function (e) {
				var n = t(e || window),
					i = t.isWindow(n[0]);
				return {
					element: n,
					isWindow: i,
					offset: n.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: n.scrollLeft(),
					scrollTop: n.scrollTop(),
					width: i ? n.width() : n.outerWidth(),
					height: i ? n.height() : n.outerHeight()
				}
			}
		}, t.fn.position = function (e) {
			if (!e || !e.of) return d.apply(this, arguments);
			e = t.extend({}, e);
			var r, p, g, m, y, v, b = t(e.of),
				E = t.position.getWithinInfo(e.within),
				w = t.position.getScrollInfo(E),
				_ = (e.collision || "flip").split(" "),
				T = {};
			return v = o(b), b[0].preventDefault && (e.at = "left top"), p = v.width, g = v.height, m = v.offset, y = t.extend({}, m), t.each(["my", "at"], function () {
				var t, n, i = (e[this] || "").split(" ");
				1 === i.length && (i = u.test(i[0]) ? i.concat(["center"]) : h.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = u.test(i[0]) ? i[0] : "center", i[1] = h.test(i[1]) ? i[1] : "center", t = f.exec(i[0]), n = f.exec(i[1]), T[this] = [t ? t[0] : 0, n ? n[0] : 0], e[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]
			}), 1 === _.length && (_[1] = _[0]), "right" === e.at[0] ? y.left += p : "center" === e.at[0] && (y.left += p / 2), "bottom" === e.at[1] ? y.top += g : "center" === e.at[1] && (y.top += g / 2), r = n(T.at, p, g), y.left += r[0], y.top += r[1], this.each(function () {
				var o, u, h = t(this),
					f = h.outerWidth(),
					l = h.outerHeight(),
					d = i(this, "marginLeft"),
					v = i(this, "marginTop"),
					x = f + d + i(this, "marginRight") + w.width,
					S = l + v + i(this, "marginBottom") + w.height,
					I = t.extend({}, y),
					N = n(T.my, h.outerWidth(), h.outerHeight());
				"right" === e.my[0] ? I.left -= f : "center" === e.my[0] && (I.left -= f / 2), "bottom" === e.my[1] ? I.top -= l : "center" === e.my[1] && (I.top -= l / 2), I.left += N[0], I.top += N[1], t.support.offsetFractions || (I.left = c(I.left), I.top = c(I.top)), o = {
					marginLeft: d,
					marginTop: v
				}, t.each(["left", "top"], function (n, i) {
					t.ui.position[_[n]] && t.ui.position[_[n]][i](I, {
						targetWidth: p,
						targetHeight: g,
						elemWidth: f,
						elemHeight: l,
						collisionPosition: o,
						collisionWidth: x,
						collisionHeight: S,
						offset: [r[0] + N[0], r[1] + N[1]],
						my: e.my,
						at: e.at,
						within: E,
						elem: h
					})
				}), e.using && (u = function (t) {
					var n = m.left - I.left,
						i = n + p - f,
						o = m.top - I.top,
						r = o + g - l,
						c = {
							target: {
								element: b,
								left: m.left,
								top: m.top,
								width: p,
								height: g
							},
							element: {
								element: h,
								left: I.left,
								top: I.top,
								width: f,
								height: l
							},
							horizontal: 0 > i ? "left" : n > 0 ? "right" : "center",
							vertical: 0 > r ? "top" : o > 0 ? "bottom" : "middle"
						};
					f > p && p > a(n + i) && (c.horizontal = "center"), l > g && g > a(o + r) && (c.vertical = "middle"), c.important = s(a(n), a(i)) > s(a(o), a(r)) ? "horizontal" : "vertical", e.using.call(this, t, c)
				}), h.offset(t.extend(I, {
					using: u
				}))
			})
		}, t.ui.position = {
			fit: {
				left: function (t, e) {
					var n, i = e.within,
						o = i.isWindow ? i.scrollLeft : i.offset.left,
						r = i.width,
						a = t.left - e.collisionPosition.marginLeft,
						c = o - a,
						u = a + e.collisionWidth - r - o;
					e.collisionWidth > r ? c > 0 && 0 >= u ? (n = t.left + c + e.collisionWidth - r - o, t.left += c - n) : t.left = u > 0 && 0 >= c ? o : c > u ? o + r - e.collisionWidth : o : c > 0 ? t.left += c : u > 0 ? t.left -= u : t.left = s(t.left - a, t.left)
				},
				top: function (t, e) {
					var n, i = e.within,
						o = i.isWindow ? i.scrollTop : i.offset.top,
						r = e.within.height,
						a = t.top - e.collisionPosition.marginTop,
						c = o - a,
						u = a + e.collisionHeight - r - o;
					e.collisionHeight > r ? c > 0 && 0 >= u ? (n = t.top + c + e.collisionHeight - r - o, t.top += c - n) : t.top = u > 0 && 0 >= c ? o : c > u ? o + r - e.collisionHeight : o : c > 0 ? t.top += c : u > 0 ? t.top -= u : t.top = s(t.top - a, t.top)
				}
			},
			flip: {
				left: function (t, e) {
					var n, i, o = e.within,
						r = o.offset.left + o.scrollLeft,
						s = o.width,
						c = o.isWindow ? o.scrollLeft : o.offset.left,
						u = t.left - e.collisionPosition.marginLeft,
						h = u - c,
						f = u + e.collisionWidth - s - c,
						l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
						p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
						d = -2 * e.offset[0];
					0 > h ? (n = t.left + l + p + d + e.collisionWidth - s - r, (0 > n || a(h) > n) && (t.left += l + p + d)) : f > 0 && (i = t.left - e.collisionPosition.marginLeft + l + p + d - c, (i > 0 || f > a(i)) && (t.left += l + p + d))
				},
				top: function (t, e) {
					var n, i, o = e.within,
						r = o.offset.top + o.scrollTop,
						s = o.height,
						c = o.isWindow ? o.scrollTop : o.offset.top,
						u = t.top - e.collisionPosition.marginTop,
						h = u - c,
						f = u + e.collisionHeight - s - c,
						l = "top" === e.my[1],
						p = l ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
						d = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
						g = -2 * e.offset[1];
					0 > h ? (i = t.top + p + d + g + e.collisionHeight - s - r, t.top + p + d + g > h && (0 > i || a(h) > i) && (t.top += p + d + g)) : f > 0 && (n = t.top - e.collisionPosition.marginTop + p + d + g - c, t.top + p + d + g > f && (n > 0 || f > a(n)) && (t.top += p + d + g))
				}
			},
			flipfit: {
				left: function () {
					t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
				},
				top: function () {
					t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
				}
			}
		},
		function () {
			var e, n, i, o, r, s = document.getElementsByTagName("body")[0],
				a = document.createElement("div");
			e = document.createElement(s ? "div" : "body"), i = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			}, s && t.extend(i, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			});
			for (r in i) e.style[r] = i[r];
			e.appendChild(a), n = s || document.documentElement, n.insertBefore(e, n.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", o = t(a).offset().left, t.support.offsetFractions = o > 10 && 11 > o, e.innerHTML = "", n.removeChild(e)
		}()
}(jQuery),
function (t, e) {
	var n = "ui-effects-";
	t.effects = {
			effect: {}
		},
		function (t, e) {
			function n(t, e, n) {
				var i = f[e.type] || {};
				return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : t > i.max ? i.max : t)
			}

			function i(n) {
				var i = u(),
					o = i._rgba = [];
				return n = n.toLowerCase(), d(c, function (t, r) {
					var s, a = r.re.exec(n),
						c = a && r.parse(a),
						u = r.space || "rgba";
					return c ? (s = i[u](c), i[h[u].cache] = s[h[u].cache], o = i._rgba = s._rgba, !1) : e
				}), o.length ? ("0,0,0,0" === o.join() && t.extend(o, r.transparent), i) : r[n]
			}

			function o(t, e, n) {
				return n = (n + 1) % 1, 1 > 6 * n ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + 6 * (e - t) * (2 / 3 - n) : t
			}
			var r, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				a = /^([\-+])=\s*(\d+\.?\d*)/,
				c = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function (t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function (t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function (t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				u = t.Color = function (e, n, i, o) {
					return new t.Color.fn.parse(e, n, i, o)
				},
				h = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				f = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				l = u.support = {},
				p = t("<p>")[0],
				d = t.each;
			p.style.cssText = "background-color:rgba(1,1,1,.5)", l.rgba = p.style.backgroundColor.indexOf("rgba") > -1, d(h, function (t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), u.fn = t.extend(u.prototype, {
				parse: function (o, s, a, c) {
					if (o === e) return this._rgba = [null, null, null, null], this;
					(o.jquery || o.nodeType) && (o = t(o).css(s), s = e);
					var f = this,
						l = t.type(o),
						p = this._rgba = [];
					return s !== e && (o = [o, s, a, c], l = "array"), "string" === l ? this.parse(i(o) || r._default) : "array" === l ? (d(h.rgba.props, function (t, e) {
						p[e.idx] = n(o[e.idx], e)
					}), this) : "object" === l ? (o instanceof u ? d(h, function (t, e) {
						o[e.cache] && (f[e.cache] = o[e.cache].slice())
					}) : d(h, function (e, i) {
						var r = i.cache;
						d(i.props, function (t, e) {
							if (!f[r] && i.to) {
								if ("alpha" === t || null == o[t]) return;
								f[r] = i.to(f._rgba)
							}
							f[r][e.idx] = n(o[t], e, !0)
						}), f[r] && 0 > t.inArray(null, f[r].slice(0, 3)) && (f[r][3] = 1, i.from && (f._rgba = i.from(f[r])))
					}), this) : e
				},
				is: function (t) {
					var n = u(t),
						i = !0,
						o = this;
					return d(h, function (t, r) {
						var s, a = n[r.cache];
						return a && (s = o[r.cache] || r.to && r.to(o._rgba) || [], d(r.props, function (t, n) {
							return null != a[n.idx] ? i = a[n.idx] === s[n.idx] : e
						})), i
					}), i
				},
				_space: function () {
					var t = [],
						e = this;
					return d(h, function (n, i) {
						e[i.cache] && t.push(n)
					}), t.pop()
				},
				transition: function (t, e) {
					var i = u(t),
						o = i._space(),
						r = h[o],
						s = 0 === this.alpha() ? u("transparent") : this,
						a = s[r.cache] || r.to(s._rgba),
						c = a.slice();
					return i = i[r.cache], d(r.props, function (t, o) {
						var r = o.idx,
							s = a[r],
							u = i[r],
							h = f[o.type] || {};
						null !== u && (null === s ? c[r] = u : (h.mod && (u - s > h.mod / 2 ? s += h.mod : s - u > h.mod / 2 && (s -= h.mod)), c[r] = n((u - s) * e + s, o)))
					}), this[o](c)
				},
				blend: function (e) {
					if (1 === this._rgba[3]) return this;
					var n = this._rgba.slice(),
						i = n.pop(),
						o = u(e)._rgba;
					return u(t.map(n, function (t, e) {
						return (1 - i) * o[e] + i * t
					}))
				},
				toRgbaString: function () {
					var e = "rgba(",
						n = t.map(this._rgba, function (t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
				},
				toHslaString: function () {
					var e = "hsla(",
						n = t.map(this.hsla(), function (t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
				},
				toHexString: function (e) {
					var n = this._rgba.slice(),
						i = n.pop();
					return e && n.push(~~(255 * i)), "#" + t.map(n, function (t) {
						return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
					}).join("")
				},
				toString: function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), u.fn.parse.prototype = u.fn, h.hsla.to = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e, n, i = t[0] / 255,
					o = t[1] / 255,
					r = t[2] / 255,
					s = t[3],
					a = Math.max(i, o, r),
					c = Math.min(i, o, r),
					u = a - c,
					h = a + c,
					f = .5 * h;
				return e = c === a ? 0 : i === a ? 60 * (o - r) / u + 360 : o === a ? 60 * (r - i) / u + 120 : 60 * (i - o) / u + 240, n = 0 === u ? 0 : .5 >= f ? u / h : u / (2 - h), [Math.round(e) % 360, n, f, null == s ? 1 : s]
			}, h.hsla.from = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e = t[0] / 360,
					n = t[1],
					i = t[2],
					r = t[3],
					s = .5 >= i ? i * (1 + n) : i + n - i * n,
					a = 2 * i - s;
				return [Math.round(255 * o(a, s, e + 1 / 3)), Math.round(255 * o(a, s, e)), Math.round(255 * o(a, s, e - 1 / 3)), r]
			}, d(h, function (i, o) {
				var r = o.props,
					s = o.cache,
					c = o.to,
					h = o.from;
				u.fn[i] = function (i) {
					if (c && !this[s] && (this[s] = c(this._rgba)), i === e) return this[s].slice();
					var o, a = t.type(i),
						f = "array" === a || "object" === a ? i : arguments,
						l = this[s].slice();
					return d(r, function (t, e) {
						var i = f["object" === a ? t : e.idx];
						null == i && (i = l[e.idx]), l[e.idx] = n(i, e)
					}), h ? (o = u(h(l)), o[s] = l, o) : u(l)
				}, d(r, function (e, n) {
					u.fn[e] || (u.fn[e] = function (o) {
						var r, s = t.type(o),
							c = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i,
							u = this[c](),
							h = u[n.idx];
						return "undefined" === s ? h : ("function" === s && (o = o.call(this, h), s = t.type(o)), null == o && n.empty ? this : ("string" === s && (r = a.exec(o), r && (o = h + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), u[n.idx] = o, this[c](u)))
					})
				})
			}), u.hook = function (e) {
				var n = e.split(" ");
				d(n, function (e, n) {
					t.cssHooks[n] = {
						set: function (e, o) {
							var r, s, a = "";
							if ("transparent" !== o && ("string" !== t.type(o) || (r = i(o)))) {
								if (o = u(r || o), !l.rgba && 1 !== o._rgba[3]) {
									for (s = "backgroundColor" === n ? e.parentNode : e;
										("" === a || "transparent" === a) && s && s.style;) try {
										a = t.css(s, "backgroundColor"), s = s.parentNode
									} catch (c) {}
									o = o.blend(a && "transparent" !== a ? a : "_default")
								}
								o = o.toRgbaString()
							}
							try {
								e.style[n] = o
							} catch (c) {}
						}
					}, t.fx.step[n] = function (e) {
						e.colorInit || (e.start = u(e.elem, n), e.end = u(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
					}
				})
			}, u.hook(s), t.cssHooks.borderColor = {
				expand: function (t) {
					var e = {};
					return d(["Top", "Right", "Bottom", "Left"], function (n, i) {
						e["border" + i + "Color"] = t
					}), e
				}
			}, r = t.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}(jQuery),
		function () {
			function n(e) {
				var n, i, o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					r = {};
				if (o && o.length && o[0] && o[o[0]])
					for (i = o.length; i--;) n = o[i], "string" == typeof o[n] && (r[t.camelCase(n)] = o[n]);
				else
					for (n in o) "string" == typeof o[n] && (r[n] = o[n]);
				return r
			}

			function i(e, n) {
				var i, o, s = {};
				for (i in n) o = n[i], e[i] !== o && (r[i] || (t.fx.step[i] || !isNaN(parseFloat(o))) && (s[i] = o));
				return s
			}
			var o = ["add", "remove", "toggle"],
				r = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, n) {
				t.fx.step[n] = function (t) {
					("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, n, t.end), t.setAttr = !0)
				}
			}), t.fn.addBack || (t.fn.addBack = function (t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}), t.effects.animateClass = function (e, r, s, a) {
				var c = t.speed(r, s, a);
				return this.queue(function () {
					var r, s = t(this),
						a = s.attr("class") || "",
						u = c.children ? s.find("*").addBack() : s;
					u = u.map(function () {
						var e = t(this);
						return {
							el: e,
							start: n(this)
						}
					}), r = function () {
						t.each(o, function (t, n) {
							e[n] && s[n + "Class"](e[n])
						})
					}, r(), u = u.map(function () {
						return this.end = n(this.el[0]), this.diff = i(this.start, this.end), this
					}), s.attr("class", a), u = u.map(function () {
						var e = this,
							n = t.Deferred(),
							i = t.extend({}, c, {
								queue: !1,
								complete: function () {
									n.resolve(e)
								}
							});
						return this.el.animate(this.diff, i), n.promise()
					}), t.when.apply(t, u.get()).done(function () {
						r(), t.each(arguments, function () {
							var e = this.el;
							t.each(this.diff, function (t) {
								e.css(t, "")
							})
						}), c.complete.call(s[0])
					})
				})
			}, t.fn.extend({
				addClass: function (e) {
					return function (n, i, o, r) {
						return i ? t.effects.animateClass.call(this, {
							add: n
						}, i, o, r) : e.apply(this, arguments)
					}
				}(t.fn.addClass),
				removeClass: function (e) {
					return function (n, i, o, r) {
						return arguments.length > 1 ? t.effects.animateClass.call(this, {
							remove: n
						}, i, o, r) : e.apply(this, arguments)
					}
				}(t.fn.removeClass),
				toggleClass: function (n) {
					return function (i, o, r, s, a) {
						return "boolean" == typeof o || o === e ? r ? t.effects.animateClass.call(this, o ? {
							add: i
						} : {
							remove: i
						}, r, s, a) : n.apply(this, arguments) : t.effects.animateClass.call(this, {
							toggle: i
						}, o, r, s)
					}
				}(t.fn.toggleClass),
				switchClass: function (e, n, i, o, r) {
					return t.effects.animateClass.call(this, {
						add: n,
						remove: e
					}, i, o, r)
				}
			})
		}(),
		function () {
			function i(e, n, i, o) {
				return t.isPlainObject(e) && (n = e, e = e.effect), e = {
					effect: e
				}, null == n && (n = {}), t.isFunction(n) && (o = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (o = i, i = n, n = {}), t.isFunction(i) && (o = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = o || n.complete, e
			}

			function o(e) {
				return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
			}
			t.extend(t.effects, {
				version: "1.10.3",
				save: function (t, e) {
					for (var i = 0; e.length > i; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
				},
				restore: function (t, i) {
					var o, r;
					for (r = 0; i.length > r; r++) null !== i[r] && (o = t.data(n + i[r]), o === e && (o = ""), t.css(i[r], o))
				},
				setMode: function (t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				getBaseline: function (t, e) {
					var n, i;
					switch (t[0]) {
						case "top":
							n = 0;
							break;
						case "middle":
							n = .5;
							break;
						case "bottom":
							n = 1;
							break;
						default:
							n = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							i = 0;
							break;
						case "center":
							i = .5;
							break;
						case "right":
							i = 1;
							break;
						default:
							i = t[1] / e.width
					}
					return {
						x: i,
						y: n
					}
				},
				createWrapper: function (e) {
					if (e.parent().is(".ui-effects-wrapper")) return e.parent();
					var n = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							"float": e.css("float")
						},
						i = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						o = {
							width: e.width(),
							height: e.height()
						},
						r = document.activeElement;
					try {
						r.id
					} catch (s) {
						r = document.body
					}
					return e.wrap(i), (e[0] === r || t.contains(e[0], r)) && t(r).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(n, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function (t, i) {
						n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(o), i.css(n).show()
				},
				removeWrapper: function (e) {
					var n = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), e
				},
				setTransition: function (e, n, i, o) {
					return o = o || {}, t.each(n, function (t, n) {
						var r = e.cssUnit(n);
						r[0] > 0 && (o[n] = r[0] * i + r[1])
					}), o
				}
			}), t.fn.extend({
				effect: function () {
					function e(e) {
						function i() {
							t.isFunction(r) && r.call(o[0]), t.isFunction(e) && e()
						}
						var o = t(this),
							r = n.complete,
							a = n.mode;
						(o.is(":hidden") ? "hide" === a : "show" === a) ? (o[a](), i()) : s.call(o[0], n, i)
					}
					var n = i.apply(this, arguments),
						o = n.mode,
						r = n.queue,
						s = t.effects.effect[n.effect];
					return t.fx.off || !s ? o ? this[o](n.duration, n.complete) : this.each(function () {
						n.complete && n.complete.call(this)
					}) : r === !1 ? this.each(e) : this.queue(r || "fx", e)
				},
				show: function (t) {
					return function (e) {
						if (o(e)) return t.apply(this, arguments);
						var n = i.apply(this, arguments);
						return n.mode = "show", this.effect.call(this, n)
					}
				}(t.fn.show),
				hide: function (t) {
					return function (e) {
						if (o(e)) return t.apply(this, arguments);
						var n = i.apply(this, arguments);
						return n.mode = "hide", this.effect.call(this, n)
					}
				}(t.fn.hide),
				toggle: function (t) {
					return function (e) {
						if (o(e) || "boolean" == typeof e) return t.apply(this, arguments);
						var n = i.apply(this, arguments);
						return n.mode = "toggle", this.effect.call(this, n)
					}
				}(t.fn.toggle),
				cssUnit: function (e) {
					var n = this.css(e),
						i = [];
					return t.each(["em", "px", "%", "pt"], function (t, e) {
						n.indexOf(e) > 0 && (i = [parseFloat(n), e])
					}), i
				}
			})
		}(),
		function () {
			var e = {};
			t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, n) {
				e[n] = function (e) {
					return Math.pow(e, t + 2)
				}
			}), t.extend(e, {
				Sine: function (t) {
					return 1 - Math.cos(t * Math.PI / 2)
				},
				Circ: function (t) {
					return 1 - Math.sqrt(1 - t * t)
				},
				Elastic: function (t) {
					return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
				},
				Back: function (t) {
					return t * t * (3 * t - 2)
				},
				Bounce: function (t) {
					for (var e, n = 4;
						((e = Math.pow(2, --n)) - 1) / 11 > t;);
					return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			}), t.each(e, function (e, n) {
				t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function (t) {
					return 1 - n(1 - t)
				}, t.easing["easeInOut" + e] = function (t) {
					return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
				}
			})
		}()
}(jQuery),
function (t) {
	var e = /up|down|vertical/,
		n = /up|left|vertical|horizontal/;
	t.effects.effect.blind = function (i, o) {
		var r, s, a, c = t(this),
			u = ["position", "top", "bottom", "left", "right", "height", "width"],
			h = t.effects.setMode(c, i.mode || "hide"),
			f = i.direction || "up",
			l = e.test(f),
			p = l ? "height" : "width",
			d = l ? "top" : "left",
			g = n.test(f),
			m = {},
			y = "show" === h;
		c.parent().is(".ui-effects-wrapper") ? t.effects.save(c.parent(), u) : t.effects.save(c, u), c.show(), r = t.effects.createWrapper(c).css({
			overflow: "hidden"
		}), s = r[p](), a = parseFloat(r.css(d)) || 0, m[p] = y ? s : 0, g || (c.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
			position: "absolute"
		}), m[d] = y ? a : s + a), y && (r.css(p, 0), g || r.css(d, a + s)), r.animate(m, {
			duration: i.duration,
			easing: i.easing,
			queue: !1,
			complete: function () {
				"hide" === h && c.hide(), t.effects.restore(c, u), t.effects.removeWrapper(c), o()
			}
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.bounce = function (e, n) {
		var i, o, r, s = t(this),
			a = ["position", "top", "bottom", "left", "right", "height", "width"],
			c = t.effects.setMode(s, e.mode || "effect"),
			u = "hide" === c,
			h = "show" === c,
			f = e.direction || "up",
			l = e.distance,
			p = e.times || 5,
			d = 2 * p + (h || u ? 1 : 0),
			g = e.duration / d,
			m = e.easing,
			y = "up" === f || "down" === f ? "top" : "left",
			v = "up" === f || "left" === f,
			b = s.queue(),
			E = b.length;
		for ((h || u) && a.push("opacity"), t.effects.save(s, a), s.show(), t.effects.createWrapper(s), l || (l = s["top" === y ? "outerHeight" : "outerWidth"]() / 3), h && (r = {
				opacity: 1
			}, r[y] = 0, s.css("opacity", 0).css(y, v ? 2 * -l : 2 * l).animate(r, g, m)), u && (l /= Math.pow(2, p - 1)), r = {}, r[y] = 0, i = 0; p > i; i++) o = {}, o[y] = (v ? "-=" : "+=") + l, s.animate(o, g, m).animate(r, g, m), l = u ? 2 * l : l / 2;
		u && (o = {
			opacity: 0
		}, o[y] = (v ? "-=" : "+=") + l, s.animate(o, g, m)), s.queue(function () {
			u && s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n()
		}), E > 1 && b.splice.apply(b, [1, 0].concat(b.splice(E, d + 1))), s.dequeue()
	}
}(jQuery),
function (t) {
	t.effects.effect.clip = function (e, n) {
		var i, o, r, s = t(this),
			a = ["position", "top", "bottom", "left", "right", "height", "width"],
			c = t.effects.setMode(s, e.mode || "hide"),
			u = "show" === c,
			h = e.direction || "vertical",
			f = "vertical" === h,
			l = f ? "height" : "width",
			p = f ? "top" : "left",
			d = {};
		t.effects.save(s, a), s.show(), i = t.effects.createWrapper(s).css({
			overflow: "hidden"
		}), o = "IMG" === s[0].tagName ? i : s, r = o[l](), u && (o.css(l, 0), o.css(p, r / 2)), d[l] = u ? r : 0, d[p] = u ? 0 : r / 2, o.animate(d, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				u || s.hide(), t.effects.restore(s, a), t.effects.removeWrapper(s), n()
			}
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.drop = function (e, n) {
		var i, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			s = t.effects.setMode(o, e.mode || "hide"),
			a = "show" === s,
			c = e.direction || "left",
			u = "up" === c || "down" === c ? "top" : "left",
			h = "up" === c || "left" === c ? "pos" : "neg",
			f = {
				opacity: a ? 1 : 0
			};
		t.effects.save(o, r), o.show(), t.effects.createWrapper(o), i = e.distance || o["top" === u ? "outerHeight" : "outerWidth"](!0) / 2, a && o.css("opacity", 0).css(u, "pos" === h ? -i : i), f[u] = (a ? "pos" === h ? "+=" : "-=" : "pos" === h ? "-=" : "+=") + i, o.animate(f, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === s && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), n()
			}
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.explode = function (e, n) {
		function i() {
			b.push(this), b.length === f * l && o()
		}

		function o() {
			p.css({
				visibility: "visible"
			}), t(b).remove(), g || p.hide(), n()
		}
		var r, s, a, c, u, h, f = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
			l = f,
			p = t(this),
			d = t.effects.setMode(p, e.mode || "hide"),
			g = "show" === d,
			m = p.show().css("visibility", "hidden").offset(),
			y = Math.ceil(p.outerWidth() / l),
			v = Math.ceil(p.outerHeight() / f),
			b = [];
		for (r = 0; f > r; r++)
			for (c = m.top + r * v, h = r - (f - 1) / 2, s = 0; l > s; s++) a = m.left + s * y, u = s - (l - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -s * y,
				top: -r * v
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: y,
				height: v,
				left: a + (g ? u * y : 0),
				top: c + (g ? h * v : 0),
				opacity: g ? 0 : 1
			}).animate({
				left: a + (g ? 0 : u * y),
				top: c + (g ? 0 : h * v),
				opacity: g ? 1 : 0
			}, e.duration || 500, e.easing, i)
	}
}(jQuery),
function (t) {
	t.effects.effect.fade = function (e, n) {
		var i = t(this),
			o = t.effects.setMode(i, e.mode || "toggle");
		i.animate({
			opacity: o
		}, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: n
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.fold = function (e, n) {
		var i, o, r = t(this),
			s = ["position", "top", "bottom", "left", "right", "height", "width"],
			a = t.effects.setMode(r, e.mode || "hide"),
			c = "show" === a,
			u = "hide" === a,
			h = e.size || 15,
			f = /([0-9]+)%/.exec(h),
			l = !!e.horizFirst,
			p = c !== l,
			d = p ? ["width", "height"] : ["height", "width"],
			g = e.duration / 2,
			m = {},
			y = {};
		t.effects.save(r, s), r.show(), i = t.effects.createWrapper(r).css({
			overflow: "hidden"
		}), o = p ? [i.width(), i.height()] : [i.height(), i.width()], f && (h = parseInt(f[1], 10) / 100 * o[u ? 0 : 1]), c && i.css(l ? {
			height: 0,
			width: h
		} : {
			height: h,
			width: 0
		}), m[d[0]] = c ? o[0] : h, y[d[1]] = c ? o[1] : 0, i.animate(m, g, e.easing).animate(y, g, e.easing, function () {
			u && r.hide(), t.effects.restore(r, s), t.effects.removeWrapper(r), n()
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.highlight = function (e, n) {
		var i = t(this),
			o = ["backgroundImage", "backgroundColor", "opacity"],
			r = t.effects.setMode(i, e.mode || "show"),
			s = {
				backgroundColor: i.css("backgroundColor")
			};
		"hide" === r && (s.opacity = 0), t.effects.save(i, o), i.show().css({
			backgroundImage: "none",
			backgroundColor: e.color || "#ffff99"
		}).animate(s, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === r && i.hide(), t.effects.restore(i, o), n()
			}
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.pulsate = function (e, n) {
		var i, o = t(this),
			r = t.effects.setMode(o, e.mode || "show"),
			s = "show" === r,
			a = "hide" === r,
			c = s || "hide" === r,
			u = 2 * (e.times || 5) + (c ? 1 : 0),
			h = e.duration / u,
			f = 0,
			l = o.queue(),
			p = l.length;
		for ((s || !o.is(":visible")) && (o.css("opacity", 0).show(), f = 1), i = 1; u > i; i++) o.animate({
			opacity: f
		}, h, e.easing), f = 1 - f;
		o.animate({
			opacity: f
		}, h, e.easing), o.queue(function () {
			a && o.hide(), n()
		}), p > 1 && l.splice.apply(l, [1, 0].concat(l.splice(p, u + 1))), o.dequeue()
	}
}(jQuery),
function (t) {
	t.effects.effect.puff = function (e, n) {
		var i = t(this),
			o = t.effects.setMode(i, e.mode || "hide"),
			r = "hide" === o,
			s = parseInt(e.percent, 10) || 150,
			a = s / 100,
			c = {
				height: i.height(),
				width: i.width(),
				outerHeight: i.outerHeight(),
				outerWidth: i.outerWidth()
			};
		t.extend(e, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: o,
			complete: n,
			percent: r ? s : 100,
			from: r ? c : {
				height: c.height * a,
				width: c.width * a,
				outerHeight: c.outerHeight * a,
				outerWidth: c.outerWidth * a
			}
		}), i.effect(e)
	}, t.effects.effect.scale = function (e, n) {
		var i = t(this),
			o = t.extend(!0, {}, e),
			r = t.effects.setMode(i, e.mode || "effect"),
			s = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === r ? 0 : 100),
			a = e.direction || "both",
			c = e.origin,
			u = {
				height: i.height(),
				width: i.width(),
				outerHeight: i.outerHeight(),
				outerWidth: i.outerWidth()
			},
			h = {
				y: "horizontal" !== a ? s / 100 : 1,
				x: "vertical" !== a ? s / 100 : 1
			};
		o.effect = "size", o.queue = !1, o.complete = n, "effect" !== r && (o.origin = c || ["middle", "center"], o.restore = !0), o.from = e.from || ("show" === r ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : u), o.to = {
			height: u.height * h.y,
			width: u.width * h.x,
			outerHeight: u.outerHeight * h.y,
			outerWidth: u.outerWidth * h.x
		}, o.fade && ("show" === r && (o.from.opacity = 0, o.to.opacity = 1), "hide" === r && (o.from.opacity = 1, o.to.opacity = 0)), i.effect(o)
	}, t.effects.effect.size = function (e, n) {
		var i, o, r, s = t(this),
			a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			c = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			u = ["width", "height", "overflow"],
			h = ["fontSize"],
			f = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			p = t.effects.setMode(s, e.mode || "effect"),
			d = e.restore || "effect" !== p,
			g = e.scale || "both",
			m = e.origin || ["middle", "center"],
			y = s.css("position"),
			v = d ? a : c,
			b = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		"show" === p && s.show(), i = {
			height: s.height(),
			width: s.width(),
			outerHeight: s.outerHeight(),
			outerWidth: s.outerWidth()
		}, "toggle" === e.mode && "show" === p ? (s.from = e.to || b, s.to = e.from || i) : (s.from = e.from || ("show" === p ? b : i), s.to = e.to || ("hide" === p ? b : i)), r = {
			from: {
				y: s.from.height / i.height,
				x: s.from.width / i.width
			},
			to: {
				y: s.to.height / i.height,
				x: s.to.width / i.width
			}
		}, ("box" === g || "both" === g) && (r.from.y !== r.to.y && (v = v.concat(f), s.from = t.effects.setTransition(s, f, r.from.y, s.from), s.to = t.effects.setTransition(s, f, r.to.y, s.to)), r.from.x !== r.to.x && (v = v.concat(l), s.from = t.effects.setTransition(s, l, r.from.x, s.from), s.to = t.effects.setTransition(s, l, r.to.x, s.to))), ("content" === g || "both" === g) && r.from.y !== r.to.y && (v = v.concat(h).concat(u), s.from = t.effects.setTransition(s, h, r.from.y, s.from), s.to = t.effects.setTransition(s, h, r.to.y, s.to)), t.effects.save(s, v), s.show(), t.effects.createWrapper(s), s.css("overflow", "hidden").css(s.from), m && (o = t.effects.getBaseline(m, i), s.from.top = (i.outerHeight - s.outerHeight()) * o.y, s.from.left = (i.outerWidth - s.outerWidth()) * o.x, s.to.top = (i.outerHeight - s.to.outerHeight) * o.y, s.to.left = (i.outerWidth - s.to.outerWidth) * o.x), s.css(s.from), ("content" === g || "both" === g) && (f = f.concat(["marginTop", "marginBottom"]).concat(h), l = l.concat(["marginLeft", "marginRight"]), u = a.concat(f).concat(l), s.find("*[width]").each(function () {
			var n = t(this),
				i = {
					height: n.height(),
					width: n.width(),
					outerHeight: n.outerHeight(),
					outerWidth: n.outerWidth()
				};
			d && t.effects.save(n, u), n.from = {
				height: i.height * r.from.y,
				width: i.width * r.from.x,
				outerHeight: i.outerHeight * r.from.y,
				outerWidth: i.outerWidth * r.from.x
			}, n.to = {
				height: i.height * r.to.y,
				width: i.width * r.to.x,
				outerHeight: i.height * r.to.y,
				outerWidth: i.width * r.to.x
			}, r.from.y !== r.to.y && (n.from = t.effects.setTransition(n, f, r.from.y, n.from), n.to = t.effects.setTransition(n, f, r.to.y, n.to)), r.from.x !== r.to.x && (n.from = t.effects.setTransition(n, l, r.from.x, n.from), n.to = t.effects.setTransition(n, l, r.to.x, n.to)), n.css(n.from), n.animate(n.to, e.duration, e.easing, function () {
				d && t.effects.restore(n, u)
			})
		})), s.animate(s.to, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				0 === s.to.opacity && s.css("opacity", s.from.opacity), "hide" === p && s.hide(), t.effects.restore(s, v), d || ("static" === y ? s.css({
					position: "relative",
					top: s.to.top,
					left: s.to.left
				}) : t.each(["top", "left"], function (t, e) {
					s.css(e, function (e, n) {
						var i = parseInt(n, 10),
							o = t ? s.to.left : s.to.top;
						return "auto" === n ? o + "px" : i + o + "px"
					})
				})), t.effects.removeWrapper(s), n()
			}
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.shake = function (e, n) {
		var i, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			s = t.effects.setMode(o, e.mode || "effect"),
			a = e.direction || "left",
			c = e.distance || 20,
			u = e.times || 3,
			h = 2 * u + 1,
			f = Math.round(e.duration / h),
			l = "up" === a || "down" === a ? "top" : "left",
			p = "up" === a || "left" === a,
			d = {},
			g = {},
			m = {},
			y = o.queue(),
			v = y.length;
		for (t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d[l] = (p ? "-=" : "+=") + c, g[l] = (p ? "+=" : "-=") + 2 * c, m[l] = (p ? "-=" : "+=") + 2 * c, o.animate(d, f, e.easing), i = 1; u > i; i++) o.animate(g, f, e.easing).animate(m, f, e.easing);
		o.animate(g, f, e.easing).animate(d, f / 2, e.easing).queue(function () {
			"hide" === s && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), n()
		}), v > 1 && y.splice.apply(y, [1, 0].concat(y.splice(v, h + 1))), o.dequeue()
	}
}(jQuery),
function (t) {
	t.effects.effect.slide = function (e, n) {
		var i, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "width", "height"],
			s = t.effects.setMode(o, e.mode || "show"),
			a = "show" === s,
			c = e.direction || "left",
			u = "up" === c || "down" === c ? "top" : "left",
			h = "up" === c || "left" === c,
			f = {};
		t.effects.save(o, r), o.show(), i = e.distance || o["top" === u ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(o).css({
			overflow: "hidden"
		}), a && o.css(u, h ? isNaN(i) ? "-" + i : -i : i), f[u] = (a ? h ? "+=" : "-=" : h ? "-=" : "+=") + i, o.animate(f, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === s && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), n()
			}
		})
	}
}(jQuery),
function (t) {
	t.effects.effect.transfer = function (e, n) {
		var i = t(this),
			o = t(e.to),
			r = "fixed" === o.css("position"),
			s = t("body"),
			a = r ? s.scrollTop() : 0,
			c = r ? s.scrollLeft() : 0,
			u = o.offset(),
			h = {
				top: u.top - a,
				left: u.left - c,
				height: o.innerHeight(),
				width: o.innerWidth()
			},
			f = i.offset(),
			l = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
				top: f.top - a,
				left: f.left - c,
				height: i.innerHeight(),
				width: i.innerWidth(),
				position: r ? "fixed" : "absolute"
			}).animate(h, e.duration, e.easing, function () {
				l.remove(), n()
			})
	}
}(jQuery),
function (t, e) {
	"use strict";

	function n() {
		if (!i.READY) {
			i.event.determineEventTypes();
			for (var t in i.gestures) i.gestures.hasOwnProperty(t) && i.detection.register(i.gestures[t]);
			i.event.onTouch(i.DOCUMENT, i.EVENT_MOVE, i.detection.detect), i.event.onTouch(i.DOCUMENT, i.EVENT_END, i.detection.detect), i.READY = !0
		}
	}
	var i = function (t, e) {
		return new i.Instance(t, e || {})
	};
	i.defaults = {
		stop_browser_behavior: {
			userSelect: "none",
			touchAction: "none",
			touchCallout: "none",
			contentZooming: "none",
			userDrag: "none",
			tapHighlightColor: "rgba(0,0,0,0)"
		}
	}, i.HAS_POINTEREVENTS = t.navigator.pointerEnabled || t.navigator.msPointerEnabled, i.HAS_TOUCHEVENTS = "ontouchstart" in t, i.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android|silk/i, i.NO_MOUSEEVENTS = i.HAS_TOUCHEVENTS && t.navigator.userAgent.match(i.MOBILE_REGEX), i.EVENT_TYPES = {}, i.DIRECTION_DOWN = "down", i.DIRECTION_LEFT = "left", i.DIRECTION_UP = "up", i.DIRECTION_RIGHT = "right", i.POINTER_MOUSE = "mouse", i.POINTER_TOUCH = "touch", i.POINTER_PEN = "pen", i.EVENT_START = "start", i.EVENT_MOVE = "move", i.EVENT_END = "end", i.DOCUMENT = t.document, i.plugins = {}, i.READY = !1, i.Instance = function (t, e) {
		var o = this;
		return n(), this.element = t, this.enabled = !0, this.options = i.utils.extend(i.utils.extend({}, i.defaults), e || {}), this.options.stop_browser_behavior && i.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), i.event.onTouch(t, i.EVENT_START, function (t) {
			o.enabled && i.detection.startDetect(o, t)
		}), this
	}, i.Instance.prototype = {
		on: function (t, e) {
			for (var n = t.split(" "), i = 0; n.length > i; i++) this.element.addEventListener(n[i], e, !1);
			return this
		},
		off: function (t, e) {
			for (var n = t.split(" "), i = 0; n.length > i; i++) this.element.removeEventListener(n[i], e, !1);
			return this
		},
		trigger: function (t, e) {
			e || (e = {});
			var n = i.DOCUMENT.createEvent("Event");
			n.initEvent(t, !0, !0), n.gesture = e;
			var o = this.element;
			return i.utils.hasParent(e.target, o) && (o = e.target), o.dispatchEvent(n), this
		},
		enable: function (t) {
			return this.enabled = t, this
		}
	};
	var o = null,
		r = !1,
		s = !1;
	i.event = {
		bindDom: function (t, e, n) {
			for (var i = e.split(" "), o = 0; i.length > o; o++) t.addEventListener(i[o], n, !1)
		},
		onTouch: function (t, e, n) {
			var a = this;
			this.bindDom(t, i.EVENT_TYPES[e], function (c) {
				var u = c.type.toLowerCase();
				if (!u.match(/mouse/) || !s) {
					u.match(/touch/) || u.match(/pointerdown/) || u.match(/mouse/) && 1 === c.which ? r = !0 : u.match(/mouse/) && 1 !== c.which && (r = !1), u.match(/touch|pointer/) && (s = !0);
					var h = 0;
					r && (i.HAS_POINTEREVENTS && e != i.EVENT_END ? h = i.PointerEvent.updatePointer(e, c) : u.match(/touch/) ? h = c.touches.length : s || (h = u.match(/up/) ? 0 : 1), h > 0 && e == i.EVENT_END ? e = i.EVENT_MOVE : h || (e = i.EVENT_END), (h || null === o) && (o = c), n.call(i.detection, a.collectEventData(t, e, a.getTouchList(o, e), c)), i.HAS_POINTEREVENTS && e == i.EVENT_END && (h = i.PointerEvent.updatePointer(e, c))), h || (o = null, r = !1, s = !1, i.PointerEvent.reset())
				}
			})
		},
		determineEventTypes: function () {
			var t;
			t = i.HAS_POINTEREVENTS ? i.PointerEvent.getEvents() : i.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i.EVENT_TYPES[i.EVENT_START] = t[0], i.EVENT_TYPES[i.EVENT_MOVE] = t[1], i.EVENT_TYPES[i.EVENT_END] = t[2]
		},
		getTouchList: function (t) {
			return i.HAS_POINTEREVENTS ? i.PointerEvent.getTouchList() : t.touches ? t.touches : (t.indentifier = 1, [t])
		},
		collectEventData: function (t, e, n, o) {
			var r = i.POINTER_TOUCH;
			return (o.type.match(/mouse/) || i.PointerEvent.matchType(i.POINTER_MOUSE, o)) && (r = i.POINTER_MOUSE), {
				center: i.utils.getCenter(n),
				timeStamp: (new Date).getTime(),
				target: o.target,
				touches: n,
				eventType: e,
				pointerType: r,
				srcEvent: o,
				preventDefault: function () {
					this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
				},
				stopPropagation: function () {
					this.srcEvent.stopPropagation()
				},
				stopDetect: function () {
					return i.detection.stopDetect()
				}
			}
		}
	}, i.PointerEvent = {
		pointers: {},
		getTouchList: function () {
			var t = this,
				e = [];
			return Object.keys(t.pointers).sort().forEach(function (n) {
				e.push(t.pointers[n])
			}), e
		},
		updatePointer: function (t, e) {
			return t == i.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length
		},
		matchType: function (t, e) {
			if (!e.pointerType) return !1;
			var n = {};
			return n[i.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == i.POINTER_MOUSE, n[i.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == i.POINTER_TOUCH, n[i.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == i.POINTER_PEN, n[t]
		},
		getEvents: function () {
			return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
		},
		reset: function () {
			this.pointers = {}
		}
	}, i.utils = {
		extend: function (t, n, i) {
			for (var o in n) t[o] !== e && i || (t[o] = n[o]);
			return t
		},
		hasParent: function (t, e) {
			for (; t;) {
				if (t == e) return !0;
				t = t.parentNode
			}
			return !1
		},
		getCenter: function (t) {
			for (var e = [], n = [], i = 0, o = t.length; o > i; i++) e.push(t[i].pageX), n.push(t[i].pageY);
			return {
				pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
				pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
			}
		},
		getVelocity: function (t, e, n) {
			return {
				x: Math.abs(e / t) || 0,
				y: Math.abs(n / t) || 0
			}
		},
		getAngle: function (t, e) {
			var n = e.pageY - t.pageY,
				i = e.pageX - t.pageX;
			return 180 * Math.atan2(n, i) / Math.PI
		},
		getDirection: function (t, e) {
			var n = Math.abs(t.pageX - e.pageX),
				o = Math.abs(t.pageY - e.pageY);
			return n >= o ? t.pageX - e.pageX > 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
		},
		getDistance: function (t, e) {
			var n = e.pageX - t.pageX,
				i = e.pageY - t.pageY;
			return Math.sqrt(n * n + i * i)
		},
		getScale: function (t, e) {
			return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
		},
		getRotation: function (t, e) {
			return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
		},
		isVertical: function (t) {
			return t == i.DIRECTION_UP || t == i.DIRECTION_DOWN
		},
		stopDefaultBrowserBehavior: function (t, e) {
			var n, i = ["webkit", "khtml", "moz", "Moz", "ms", "o", ""];
			if (e && t.style) {
				for (var o = 0; i.length > o; o++)
					for (var r in e) e.hasOwnProperty(r) && (n = r, i[o] && (n = i[o] + n.substring(0, 1).toUpperCase() + n.substring(1)), t.style[n] = e[r]);
				"none" == e.userSelect && (t.onselectstart = function () {
					return !1
				}), "none" == e.userDrag && (t.ondragstart = function () {
					return !1
				})
			}
		}
	}, i.detection = {
		gestures: [],
		current: null,
		previous: null,
		stopped: !1,
		startDetect: function (t, e) {
			this.current || (this.stopped = !1, this.current = {
				inst: t,
				startEvent: i.utils.extend({}, e),
				lastEvent: !1,
				name: ""
			}, this.detect(e))
		},
		detect: function (t) {
			if (this.current && !this.stopped) {
				t = this.extendEventData(t);
				for (var e = this.current.inst.options, n = 0, o = this.gestures.length; o > n; n++) {
					var r = this.gestures[n];
					if (!this.stopped && e[r.name] !== !1 && r.handler.call(r, t, this.current.inst) === !1) {
						this.stopDetect();
						break
					}
				}
				return this.current && (this.current.lastEvent = t), t.eventType == i.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
			}
		},
		stopDetect: function () {
			this.previous = i.utils.extend({}, this.current), this.current = null, this.stopped = !0
		},
		extendEventData: function (t) {
			var e = this.current.startEvent;
			if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) {
				e.touches = [];
				for (var n = 0, o = t.touches.length; o > n; n++) e.touches.push(i.utils.extend({}, t.touches[n]))
			}
			var r = t.timeStamp - e.timeStamp,
				s = t.center.pageX - e.center.pageX,
				a = t.center.pageY - e.center.pageY,
				c = i.utils.getVelocity(r, s, a);
			return i.utils.extend(t, {
				deltaTime: r,
				deltaX: s,
				deltaY: a,
				velocityX: c.x,
				velocityY: c.y,
				distance: i.utils.getDistance(e.center, t.center),
				angle: i.utils.getAngle(e.center, t.center),
				interimAngle: this.current.lastEvent && i.utils.getAngle(this.current.lastEvent.center, t.center),
				direction: i.utils.getDirection(e.center, t.center),
				interimDirection: this.current.lastEvent && i.utils.getDirection(this.current.lastEvent.center, t.center),
				scale: i.utils.getScale(e.touches, t.touches),
				rotation: i.utils.getRotation(e.touches, t.touches),
				startEvent: e
			}), t
		},
		register: function (t) {
			var n = t.defaults || {};
			return n[t.name] === e && (n[t.name] = !0), i.utils.extend(i.defaults, n, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function (t, e) {
				return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
			}), this.gestures
		}
	}, i.gestures = i.gestures || {}, i.gestures.Hold = {
		name: "hold",
		index: 10,
		defaults: {
			hold_timeout: 500,
			hold_threshold: 1
		},
		timer: null,
		handler: function (t, e) {
			switch (t.eventType) {
				case i.EVENT_START:
					clearTimeout(this.timer), i.detection.current.name = this.name, this.timer = setTimeout(function () {
						"hold" == i.detection.current.name && e.trigger("hold", t)
					}, e.options.hold_timeout);
					break;
				case i.EVENT_MOVE:
					t.distance > e.options.hold_threshold && clearTimeout(this.timer);
					break;
				case i.EVENT_END:
					clearTimeout(this.timer)
			}
		}
	}, i.gestures.Tap = {
		name: "tap",
		index: 100,
		defaults: {
			tap_max_touchtime: 250,
			tap_max_distance: 10,
			tap_always: !0,
			doubletap_distance: 20,
			doubletap_interval: 300
		},
		handler: function (t, e) {
			if (t.eventType == i.EVENT_END && "touchcancel" != t.srcEvent.type) {
				var n = i.detection.previous,
					o = !1;
				if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance) return;
				n && "tap" == n.name && t.timeStamp - n.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), o = !0), (!o || e.options.tap_always) && (i.detection.current.name = "tap", e.trigger(i.detection.current.name, t))
			}
		}
	}, i.gestures.Swipe = {
		name: "swipe",
		index: 40,
		defaults: {
			swipe_min_touches: 1,
			swipe_max_touches: 1,
			swipe_velocity: .7
		},
		handler: function (t, e) {
			if (t.eventType == i.EVENT_END) {
				if (e.options.swipe_max_touches > 0 && t.touches.length < e.options.swipe_min_touches && t.touches.length > e.options.swipe_max_touches) return;
				(t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
			}
		}
	}, i.gestures.Drag = {
		name: "drag",
		index: 50,
		defaults: {
			drag_min_distance: 10,
			correct_for_drag_min_distance: !0,
			drag_max_touches: 1,
			drag_block_horizontal: !1,
			drag_block_vertical: !1,
			drag_lock_to_axis: !1,
			drag_lock_min_distance: 25
		},
		triggered: !1,
		handler: function (t, n) {
			if (i.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), this.triggered = !1, e;
			if (!(n.options.drag_max_touches > 0 && t.touches.length > n.options.drag_max_touches)) switch (t.eventType) {
				case i.EVENT_START:
					this.triggered = !1;
					break;
				case i.EVENT_MOVE:
					if (t.distance < n.options.drag_min_distance && i.detection.current.name != this.name) return;
					if (i.detection.current.name != this.name && (i.detection.current.name = this.name, n.options.correct_for_drag_min_distance)) {
						var o = Math.abs(n.options.drag_min_distance / t.distance);
						i.detection.current.startEvent.center.pageX += t.deltaX * o, i.detection.current.startEvent.center.pageY += t.deltaY * o, t = i.detection.extendEventData(t)
					}(i.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
					var r = i.detection.current.lastEvent.direction;
					t.drag_locked_to_axis && r !== t.direction && (t.direction = i.utils.isVertical(r) ? 0 > t.deltaY ? i.DIRECTION_UP : i.DIRECTION_DOWN : 0 > t.deltaX ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT), this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), n.trigger(this.name + t.direction, t), (n.options.drag_block_vertical && i.utils.isVertical(t.direction) || n.options.drag_block_horizontal && !i.utils.isVertical(t.direction)) && t.preventDefault();
					break;
				case i.EVENT_END:
					this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
			}
		}
	}, i.gestures.Transform = {
		name: "transform",
		index: 45,
		defaults: {
			transform_min_scale: .01,
			transform_min_rotation: 1,
			transform_always_block: !1
		},
		triggered: !1,
		handler: function (t, n) {
			if (i.detection.current.name != this.name && this.triggered) return n.trigger(this.name + "end", t), this.triggered = !1, e;
			if (!(2 > t.touches.length)) switch (n.options.transform_always_block && t.preventDefault(), t.eventType) {
				case i.EVENT_START:
					this.triggered = !1;
					break;
				case i.EVENT_MOVE:
					var o = Math.abs(1 - t.scale),
						r = Math.abs(t.rotation);
					if (n.options.transform_min_scale > o && n.options.transform_min_rotation > r) return;
					i.detection.current.name = this.name, this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), r > n.options.transform_min_rotation && n.trigger("rotate", t), o > n.options.transform_min_scale && (n.trigger("pinch", t), n.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
					break;
				case i.EVENT_END:
					this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
			}
		}
	}, i.gestures.Touch = {
		name: "touch",
		index: -1 / 0,
		defaults: {
			prevent_default: !1,
			prevent_mouseevents: !1
		},
		handler: function (t, n) {
			return n.options.prevent_mouseevents && t.pointerType == i.POINTER_MOUSE ? (t.stopDetect(), e) : (n.options.prevent_default && t.preventDefault(), t.eventType == i.EVENT_START && n.trigger(this.name, t), e)
		}
	}, i.gestures.Release = {
		name: "release",
		index: 1 / 0,
		handler: function (t, e) {
			t.eventType == i.EVENT_END && e.trigger(this.name, t)
		}
	};
	var a = function (t, n) {
		return n === e ? t : (t.event.bindDom = function (t, i, o) {
			n(t).on(i, function (t) {
				var n = t.originalEvent || t;
				n.pageX === e && (n.pageX = t.pageX, n.pageY = t.pageY), n.target || (n.target = t.target), n.which === e && (n.which = n.button), n.preventDefault || (n.preventDefault = t.preventDefault), n.stopPropagation || (n.stopPropagation = t.stopPropagation), o.call(this, n)
			})
		}, t.Instance.prototype.on = function (t, e) {
			return n(this.element).on(t, e)
		}, t.Instance.prototype.off = function (t, e) {
			return n(this.element).off(t, e)
		}, t.Instance.prototype.trigger = function (t, e) {
			var i = n(this.element);
			return i.has(e.target).length && (i = n(e.target)), i.trigger({
				type: t,
				gesture: e
			})
		}, n.fn.hammer = function (e) {
			return this.each(function () {
				var i = n(this),
					o = i.data("hammer");
				o ? o && e && t.utils.extend(o.options, e) : i.data("hammer", new t(this, e || {}))
			})
		}, e)
	};
	"function" == typeof define && "object" == typeof define.amd && define.amd ? define(["jquery"], function (t) {
		a(i, t)
	}) : a(i, t.jQuery || t.Zepto)
}(this), window.Modernizr = function (t, e, n) {
		function i(t) {
			b.cssText = t
		}

		function o(t, e) {
			return i(T.join(t + ";") + (e || ""))
		}

		function r(t, e) {
			return typeof t === e
		}

		function s(t, e) {
			return !!~("" + t).indexOf(e)
		}

		function a(t, e) {
			for (var i in t) {
				var o = t[i];
				if (!s(o, "-") && b[o] !== n) return "pfx" == e ? o : !0
			}
			return !1
		}

		function c(t, e, i) {
			for (var o in t) {
				var s = e[t[o]];
				if (s !== n) return i === !1 ? t[o] : r(s, "function") ? s.bind(i || e) : s
			}
			return !1
		}

		function u(t, e, n) {
			var i = t.charAt(0).toUpperCase() + t.slice(1),
				o = (t + " " + S.join(i + " ") + i).split(" ");
			return r(e, "string") || r(e, "undefined") ? a(o, e) : (o = (t + " " + I.join(i + " ") + i).split(" "), c(o, e, n))
		}

		function h() {
			d.input = function (n) {
				for (var i = 0, o = n.length; o > i; i++) M[n[i]] = n[i] in E;
				return M.list && (M.list = !!e.createElement("datalist") && !!t.HTMLDataListElement), M
			}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function (t) {
				for (var i, o, r, s = 0, a = t.length; a > s; s++) E.setAttribute("type", o = t[s]), i = "text" !== E.type, i && (E.value = w, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (m.appendChild(E), r = e.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, m.removeChild(E)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != w)), C[t[s]] = !!i;
				return C
			}("search tel url email datetime date month week time datetime-local number range color".split(" "))
		}
		var f, l, p = "2.6.2",
			d = {},
			g = !0,
			m = e.documentElement,
			y = "modernizr",
			v = e.createElement(y),
			b = v.style,
			E = e.createElement("input"),
			w = ":)",
			_ = {}.toString,
			T = " -webkit- -moz- -o- -ms- ".split(" "),
			x = "Webkit Moz O ms",
			S = x.split(" "),
			I = x.toLowerCase().split(" "),
			N = {
				svg: "http://www.w3.org/2000/svg"
			},
			P = {},
			C = {},
			M = {},
			R = [],
			D = R.slice,
			O = function (t, n, i, o) {
				var r, s, a, c, u = e.createElement("div"),
					h = e.body,
					f = h || e.createElement("body");
				if (parseInt(i, 10))
					for (; i--;) a = e.createElement("div"), a.id = o ? o[i] : y + (i + 1), u.appendChild(a);
				return r = ["&#173;", '<style id="s', y, '">', t, "</style>"].join(""), u.id = y, (h ? u : f).innerHTML += r, f.appendChild(u), h || (f.style.background = "", f.style.overflow = "hidden", c = m.style.overflow, m.style.overflow = "hidden", m.appendChild(f)), s = n(u, t), h ? u.parentNode.removeChild(u) : (f.parentNode.removeChild(f), m.style.overflow = c), !!s
			},
			L = function (e) {
				var n = t.matchMedia || t.msMatchMedia;
				if (n) return n(e).matches;
				var i;
				return O("@media " + e + " { #" + y + " { position: absolute; } }", function (e) {
					i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
				}), i
			},
			W = function () {
				function t(t, o) {
					o = o || e.createElement(i[t] || "div"), t = "on" + t;
					var s = t in o;
					return s || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), s = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, s
				}
				var i = {
					select: "input",
					change: "input",
					submit: "form",
					reset: "form",
					error: "img",
					load: "img",
					abort: "img"
				};
				return t
			}(),
			k = {}.hasOwnProperty;
		l = r(k, "undefined") || r(k.call, "undefined") ? function (t, e) {
			return e in t && r(t.constructor.prototype[e], "undefined")
		} : function (t, e) {
			return k.call(t, e)
		}, Function.prototype.bind || (Function.prototype.bind = function (t) {
			var e = this;
			if ("function" != typeof e) throw new TypeError;
			var n = D.call(arguments, 1),
				i = function () {
					if (this instanceof i) {
						var o = function () {};
						o.prototype = e.prototype;
						var r = new o,
							s = e.apply(r, n.concat(D.call(arguments)));
						return Object(s) === s ? s : r
					}
					return e.apply(t, n.concat(D.call(arguments)))
				};
			return i
		}), P.flexbox = function () {
			return u("flexWrap")
		}, P.webgl = function () {
			return !!t.WebGLRenderingContext
		}, P.touch = function () {
			var n;
			return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : O(["@media (", T.join("touch-enabled),("), y, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
				n = 9 === t.offsetTop
			}), n
		}, P.geolocation = function () {
			return "geolocation" in navigator
		}, P.hashchange = function () {
			return W("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
		}, P.history = function () {
			return !!t.history && !!history.pushState
		}, P.websockets = function () {
			return "WebSocket" in t || "MozWebSocket" in t
		}, P.rgba = function () {
			return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba")
		}, P.hsla = function () {
			return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
		}, P.multiplebgs = function () {
			return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
		}, P.backgroundsize = function () {
			return u("backgroundSize")
		}, P.borderimage = function () {
			return u("borderImage")
		}, P.textshadow = function () {
			return "" === e.createElement("div").style.textShadow
		}, P.opacity = function () {
			return o("opacity:.55"), /^0.55$/.test(b.opacity)
		}, P.cssanimations = function () {
			return u("animationName")
		}, P.csscolumns = function () {
			return u("columnCount")
		}, P.cssgradients = function () {
			var t = "background-image:",
				e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
				n = "linear-gradient(left top,#9f9, white);";
			return i((t + "-webkit- ".split(" ").join(e + t) + T.join(n + t)).slice(0, -t.length)), s(b.backgroundImage, "gradient")
		}, P.cssreflections = function () {
			return u("boxReflect")
		}, P.csstransforms = function () {
			return !!u("transform")
		}, P.csstransforms3d = function () {
			var t = !!u("perspective");
			return t && "webkitPerspective" in m.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e) {
				t = 9 === e.offsetLeft && 3 === e.offsetHeight
			}), t
		}, P.csstransitions = function () {
			return u("transition")
		}, P.fontface = function () {
			var t;
			return O('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
				var o = e.getElementById("smodernizr"),
					r = o.sheet || o.styleSheet,
					s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
				t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
			}), t
		}, P.generatedcontent = function () {
			var t;
			return O(["#", y, "{font:0/0 a}#", y, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
				t = e.offsetHeight >= 3
			}), t
		}, P.video = function () {
			var t = e.createElement("video"),
				n = !1;
			try {
				(n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
			} catch (i) {}
			return n
		}, P.audio = function () {
			var t = e.createElement("audio"),
				n = !1;
			try {
				(n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
			} catch (i) {}
			return n
		}, P.localstorage = function () {
			try {
				return localStorage.setItem(y, y), localStorage.removeItem(y), !0
			} catch (t) {
				return !1
			}
		}, P.applicationcache = function () {
			return !!t.applicationCache
		}, P.svg = function () {
			return !!e.createElementNS && !!e.createElementNS(N.svg, "svg").createSVGRect
		}, P.svgclippaths = function () {
			return !!e.createElementNS && /SVGClipPath/.test(_.call(e.createElementNS(N.svg, "clipPath")))
		};
		for (var H in P) l(P, H) && (f = H.toLowerCase(), d[f] = P[H](), R.push((d[f] ? "" : "no-") + f));
		return d.input || h(), d.addTest = function (t, e) {
				if ("object" == typeof t)
					for (var i in t) l(t, i) && d.addTest(i, t[i]);
				else {
					if (t = t.toLowerCase(), d[t] !== n) return d;
					e = "function" == typeof e ? e() : e, "undefined" != typeof g && g && (m.className += " " + (e ? "" : "no-") + t), d[t] = e
				}
				return d
			}, i(""), v = E = null,
			function (t, e) {
				function n(t, e) {
					var n = t.createElement("p"),
						i = t.getElementsByTagName("head")[0] || t.documentElement;
					return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
				}

				function i() {
					var t = y.elements;
					return "string" == typeof t ? t.split(" ") : t
				}

				function o(t) {
					var e = m[t[d]];
					return e || (e = {}, g++, t[d] = g, m[g] = e), e
				}

				function r(t, n, i) {
					if (n || (n = e), h) return n.createElement(t);
					i || (i = o(n));
					var r;
					return r = i.cache[t] ? i.cache[t].cloneNode() : p.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), r.canHaveChildren && !l.test(t) ? i.frag.appendChild(r) : r
				}

				function s(t, n) {
					if (t || (t = e), h) return t.createDocumentFragment();
					n = n || o(t);
					for (var r = n.frag.cloneNode(), s = 0, a = i(), c = a.length; c > s; s++) r.createElement(a[s]);
					return r
				}

				function a(t, e) {
					e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
						return y.shivMethods ? r(n, t, e) : e.createElem(n)
					}, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (t) {
						return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
					}) + ");return n}")(y, e.frag)
				}

				function c(t) {
					t || (t = e);
					var i = o(t);
					return y.shivCSS && !u && !i.hasCSS && (i.hasCSS = !!n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), h || a(t, i), t
				}
				var u, h, f = t.html5 || {},
					l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					d = "_html5shiv",
					g = 0,
					m = {};
				! function () {
					try {
						var t = e.createElement("a");
						t.innerHTML = "<xyz></xyz>", u = "hidden" in t, h = 1 == t.childNodes.length || function () {
							e.createElement("a");
							var t = e.createDocumentFragment();
							return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
						}()
					} catch (n) {
						u = !0, h = !0
					}
				}();
				var y = {
					elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: f.shivCSS !== !1,
					supportsUnknownElements: h,
					shivMethods: f.shivMethods !== !1,
					type: "default",
					shivDocument: c,
					createElement: r,
					createDocumentFragment: s
				};
				t.html5 = y, c(e)
			}(this, e), d._version = p, d._prefixes = T, d._domPrefixes = I, d._cssomPrefixes = S, d.mq = L, d.hasEvent = W, d.testProp = function (t) {
				return a([t])
			}, d.testAllProps = u, d.testStyles = O, d.prefixed = function (t, e, n) {
				return e ? u(t, e, n) : u(t, "pfx")
			}, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + R.join(" ") : ""), d
	}(this, this.document),
	function (t, e, n) {
		function i(t) {
			return "[object Function]" == m.call(t)
		}

		function o(t) {
			return "string" == typeof t
		}

		function r() {}

		function s(t) {
			return !t || "loaded" == t || "complete" == t || "uninitialized" == t
		}

		function a() {
			var t = y.shift();
			v = 1, t ? t.t ? d(function () {
				("c" == t.t ? l.injectCss : l.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
			}, 0) : (t(), a()) : v = 0
		}

		function c(t, n, i, o, r, c, u) {
			function h(e) {
				if (!p && s(f.readyState) && (b.r = p = 1, !v && a(), f.onload = f.onreadystatechange = null, e)) {
					"img" != t && d(function () {
						w.removeChild(f)
					}, 50);
					for (var i in I[n]) I[n].hasOwnProperty(i) && I[n][i].onload()
				}
			}
			var u = u || l.errorTimeout,
				f = e.createElement(t),
				p = 0,
				m = 0,
				b = {
					t: i,
					s: n,
					e: r,
					a: c,
					x: u
				};
			1 === I[n] && (m = 1, I[n] = []), "object" == t ? f.data = n : (f.src = n, f.type = t), f.width = f.height = "0", f.onerror = f.onload = f.onreadystatechange = function () {
				h.call(this, m)
			}, y.splice(o, 0, b), "img" != t && (m || 2 === I[n] ? (w.insertBefore(f, E ? null : g), d(h, u)) : I[n].push(f))
		}

		function u(t, e, n, i, r) {
			return v = 0, e = e || "j", o(t) ? c("c" == e ? T : _, t, e, this.i++, n, i, r) : (y.splice(this.i++, 0, t), 1 == y.length && a()), this
		}

		function h() {
			var t = l;
			return t.loader = {
				load: u,
				i: 0
			}, t
		}
		var f, l, p = e.documentElement,
			d = t.setTimeout,
			g = e.getElementsByTagName("script")[0],
			m = {}.toString,
			y = [],
			v = 0,
			b = "MozAppearance" in p.style,
			E = b && !!e.createRange().compareNode,
			w = E ? p : g.parentNode,
			p = t.opera && "[object Opera]" == m.call(t.opera),
			p = !!e.attachEvent && !p,
			_ = b ? "object" : p ? "script" : "img",
			T = p ? "script" : _,
			x = Array.isArray || function (t) {
				return "[object Array]" == m.call(t)
			},
			S = [],
			I = {},
			N = {
				timeout: function (t, e) {
					return e.length && (t.timeout = e[0]), t
				}
			};
		l = function (t) {
			function e(t) {
				var e, n, i, t = t.split("!"),
					o = S.length,
					r = t.pop(),
					s = t.length,
					r = {
						url: r,
						origUrl: r,
						prefixes: t
					};
				for (n = 0; s > n; n++) i = t[n].split("="), (e = N[i.shift()]) && (r = e(r, i));
				for (n = 0; o > n; n++) r = S[n](r);
				return r
			}

			function s(t, o, r, s, a) {
				var c = e(t),
					u = c.autoCallback;
				c.url.split(".").pop().split("?").shift(), c.bypass || (o && (o = i(o) ? o : o[t] || o[s] || o[t.split("/").pop().split("?")[0]]), c.instead ? c.instead(t, o, r, s, a) : (I[c.url] ? c.noexec = !0 : I[c.url] = 1, r.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (i(o) || i(u)) && r.load(function () {
					h(), o && o(c.origUrl, a, s), u && u(c.origUrl, a, s), I[c.url] = 2
				})))
			}

			function a(t, e) {
				function n(t, n) {
					if (t) {
						if (o(t)) n || (f = function () {
							var t = [].slice.call(arguments);
							l.apply(this, t), p()
						}), s(t, f, e, 0, u);
						else if (Object(t) === t)
							for (c in a = function () {
									var e, n = 0;
									for (e in t) t.hasOwnProperty(e) && n++;
									return n
								}(), t) t.hasOwnProperty(c) && (!n && !--a && (i(f) ? f = function () {
								var t = [].slice.call(arguments);
								l.apply(this, t), p()
							} : f[c] = function (t) {
								return function () {
									var e = [].slice.call(arguments);
									t && t.apply(this, e), p()
								}
							}(l[c])), s(t[c], f, e, c, u))
					} else !n && p()
				}
				var a, c, u = !!t.test,
					h = t.load || t.both,
					f = t.callback || r,
					l = f,
					p = t.complete || r;
				n(u ? t.yep : t.nope, !!h), h && n(h)
			}
			var c, u, f = this.yepnope.loader;
			if (o(t)) s(t, 0, f, 0);
			else if (x(t))
				for (c = 0; c < t.length; c++) u = t[c], o(u) ? s(u, 0, f, 0) : x(u) ? l(u) : Object(u) === u && a(u, f);
			else Object(t) === t && a(t, f)
		}, l.addPrefix = function (t, e) {
			N[t] = e
		}, l.addFilter = function (t) {
			S.push(t)
		}, l.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", f = function () {
			e.removeEventListener("DOMContentLoaded", f, 0), e.readyState = "complete"
		}, 0)), t.yepnope = h(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, n, i, o, c, u) {
			var h, f, p = e.createElement("script"),
				o = o || l.errorTimeout;
			p.src = t;
			for (f in i) p.setAttribute(f, i[f]);
			n = u ? a : n || r, p.onreadystatechange = p.onload = function () {
				!h && s(p.readyState) && (h = 1, n(), p.onload = p.onreadystatechange = null)
			}, d(function () {
				h || (h = 1, n(1))
			}, o), c ? p.onload() : g.parentNode.insertBefore(p, g)
		}, t.yepnope.injectCss = function (t, n, i, o, s, c) {
			var u, o = e.createElement("link"),
				n = c ? a : n || r;
			o.href = t, o.rel = "stylesheet", o.type = "text/css";
			for (u in i) o.setAttribute(u, i[u]);
			s || (g.parentNode.insertBefore(o, g), d(n, 0))
		}
	}(this, document), Modernizr.load = function () {
		yepnope.apply(window, [].slice.call(arguments, 0))
	}, Modernizr.addTest("mediaqueries", Modernizr.mq("only all")), Modernizr.addTest("regions", function () {
		var t = Modernizr.prefixed("flowFrom"),
			e = Modernizr.prefixed("flowInto");
		if (!t || !e) return !1;
		var n = document.createElement("div"),
			i = document.createElement("div"),
			o = document.createElement("div"),
			r = "modernizr_flow_for_regions_check";
		i.innerText = "M", n.style.cssText = "top: 150px; left: 150px; padding: 0px;", o.style.cssText = "width: 50px; height: 50px; padding: 42px;", o.style[t] = r, n.appendChild(i), n.appendChild(o), document.documentElement.appendChild(n);
		var s, a, c = i.getBoundingClientRect();
		return i.style[e] = r, s = i.getBoundingClientRect(), a = s.left - c.left, document.documentElement.removeChild(n), i = o = n = void 0, 42 == a
	}), Modernizr.addTest("supports", "CSSSupportsRule" in window),
	function (t) {
		"use strict";

		function e(t) {
			return RegExp("(^|\\s+)" + t + "(\\s+|$)")
		}

		function n(t, e) {
			var n = i(t, e) ? r : o;
			n(t, e)
		}
		var i, o, r;
		"classList" in document.documentElement ? (i = function (t, e) {
			return t.classList.contains(e)
		}, o = function (t, e) {
			t.classList.add(e)
		}, r = function (t, e) {
			t.classList.remove(e)
		}) : (i = function (t, n) {
			return e(n).test(t.className)
		}, o = function (t, e) {
			i(t, e) || (t.className = t.className + " " + e)
		}, r = function (t, n) {
			t.className = t.className.replace(e(n), " ")
		});
		var s = {
			hasClass: i,
			addClass: o,
			removeClass: r,
			toggleClass: n,
			has: i,
			add: o,
			remove: r,
			toggle: n
		};
		"function" == typeof define && define.amd ? define(s) : t.classie = s
	}(window),
	function (t) {
		"use strict";

		function e(t) {
			if (t) {
				if ("string" == typeof i[t]) return t;
				t = t.charAt(0).toUpperCase() + t.slice(1);
				for (var e, o = 0, r = n.length; r > o; o++)
					if (e = n[o] + t, "string" == typeof i[e]) return e
			}
		}
		var n = "Webkit Moz ms Ms O".split(" "),
			i = document.documentElement.style;
		"function" == typeof define && define.amd ? define(function () {
			return e
		}) : t.getStyleProperty = e
	}(window),
	function (t) {
		"use strict";

		function e(t) {
			var e = parseFloat(t),
				n = -1 === t.indexOf("%") && !isNaN(e);
			return n && e
		}

		function n() {
			for (var t = {
					width: 0,
					height: 0,
					innerWidth: 0,
					innerHeight: 0,
					outerWidth: 0,
					outerHeight: 0
				}, e = 0, n = s.length; n > e; e++) {
				var i = s[e];
				t[i] = 0
			}
			return t
		}

		function i(t) {
			function i(t) {
				if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
					var i = r(t);
					if ("none" === i.display) return n();
					var c = {};
					c.width = t.offsetWidth, c.height = t.offsetHeight;
					for (var u = c.isBorderBox = !(!a || !i[a] || "border-box" !== i[a]), h = 0, f = s.length; f > h; h++) {
						var l = s[h],
							p = i[l],
							d = parseFloat(p);
						c[l] = isNaN(d) ? 0 : d
					}
					var g = c.paddingLeft + c.paddingRight,
						m = c.paddingTop + c.paddingBottom,
						y = c.marginLeft + c.marginRight,
						v = c.marginTop + c.marginBottom,
						b = c.borderLeftWidth + c.borderRightWidth,
						E = c.borderTopWidth + c.borderBottomWidth,
						w = u && o,
						_ = e(i.width);
					_ !== !1 && (c.width = _ + (w ? 0 : g + b));
					var T = e(i.height);
					return T !== !1 && (c.height = T + (w ? 0 : m + E)), c.innerWidth = c.width - (g + b), c.innerHeight = c.height - (m + E), c.outerWidth = c.width + y, c.outerHeight = c.height + v, c
				}
			}
			var o, a = t("boxSizing");
			return function () {
				if (a) {
					var t = document.createElement("div");
					t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style[a] = "border-box";
					var n = document.body || document.documentElement;
					n.appendChild(t);
					var i = r(t);
					o = 200 === e(i.width), n.removeChild(t)
				}
			}(), i
		}
		var o = document.defaultView,
			r = o && o.getComputedStyle ? function (t) {
				return o.getComputedStyle(t, null)
			} : function (t) {
				return t.currentStyle
			},
			s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
		"function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], i) : t.getSize = i(t.getStyleProperty)
	}(window),
	function (t) {
		"use strict";
		var e = document.documentElement,
			n = function () {};
		e.addEventListener ? n = function (t, e, n) {
			t.addEventListener(e, n, !1)
		} : e.attachEvent && (n = function (e, n, i) {
			e[n + i] = i.handleEvent ? function () {
				var e = t.event;
				e.target = e.target || e.srcElement, i.handleEvent.call(i, e)
			} : function () {
				var n = t.event;
				n.target = n.target || n.srcElement, i.call(e, n)
			}, e.attachEvent("on" + n, e[n + i])
		});
		var i = function () {};
		e.removeEventListener ? i = function (t, e, n) {
			t.removeEventListener(e, n, !1)
		} : e.detachEvent && (i = function (t, e, n) {
			t.detachEvent("on" + e, t[e + n]);
			try {
				delete t[e + n]
			} catch (i) {
				t[e + n] = void 0
			}
		});
		var o = {
			bind: n,
			unbind: i
		};
		"function" == typeof define && define.amd ? define(o) : t.eventie = o
	}(this),
	function (t) {
		"use strict";

		function e(t) {
			"function" == typeof t && (e.isReady ? t() : r.push(t))
		}

		function n(t) {
			var n = "readystatechange" === t.type && "complete" !== o.readyState;
			if (!e.isReady && !n) {
				e.isReady = !0;
				for (var i = 0, s = r.length; s > i; i++) {
					var a = r[i];
					a()
				}
			}
		}

		function i(i) {
			return i.bind(o, "DOMContentLoaded", n), i.bind(o, "readystatechange", n), i.bind(t, "load", n), e
		}
		var o = t.document,
			r = [];
		e.isReady = !1, "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define(["eventie/eventie"], i)) : t.docReady = i(t.eventie)
	}(this),
	function () {
		"use strict";

		function t() {}

		function e(t, e) {
			for (var n = t.length; n--;)
				if (t[n].listener === e) return n;
			return -1
		}

		function n(t) {
			return function () {
				return this[t].apply(this, arguments)
			}
		}
		var i = t.prototype;
		i.getListeners = function (t) {
			var e, n, i = this._getEvents();
			if ("object" == typeof t) {
				e = {};
				for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
			} else e = i[t] || (i[t] = []);
			return e
		}, i.flattenListeners = function (t) {
			var e, n = [];
			for (e = 0; t.length > e; e += 1) n.push(t[e].listener);
			return n
		}, i.getListenersAsObject = function (t) {
			var e, n = this.getListeners(t);
			return n instanceof Array && (e = {}, e[t] = n), e || n
		}, i.addListener = function (t, n) {
			var i, o = this.getListenersAsObject(t),
				r = "object" == typeof n;
			for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {
				listener: n,
				once: !1
			});
			return this
		}, i.on = n("addListener"), i.addOnceListener = function (t, e) {
			return this.addListener(t, {
				listener: e,
				once: !0
			})
		}, i.once = n("addOnceListener"), i.defineEvent = function (t) {
			return this.getListeners(t), this
		}, i.defineEvents = function (t) {
			for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
			return this
		}, i.removeListener = function (t, n) {
			var i, o, r = this.getListenersAsObject(t);
			for (o in r) r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
			return this
		}, i.off = n("removeListener"), i.addListeners = function (t, e) {
			return this.manipulateListeners(!1, t, e)
		}, i.removeListeners = function (t, e) {
			return this.manipulateListeners(!0, t, e)
		}, i.manipulateListeners = function (t, e, n) {
			var i, o, r = t ? this.removeListener : this.addListener,
				s = t ? this.removeListeners : this.addListeners;
			if ("object" != typeof e || e instanceof RegExp)
				for (i = n.length; i--;) r.call(this, e, n[i]);
			else
				for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
			return this
		}, i.removeEvent = function (t) {
			var e, n = typeof t,
				i = this._getEvents();
			if ("string" === n) delete i[t];
			else if ("object" === n)
				for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e];
			else delete this._events;
			return this
		}, i.emitEvent = function (t, e) {
			var n, i, o, r, s = this.getListenersAsObject(t);
			for (o in s)
				if (s.hasOwnProperty(o))
					for (i = s[o].length; i--;) n = s[o][i], n.once === !0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
			return this
		}, i.trigger = n("emitEvent"), i.emit = function (t) {
			var e = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(t, e)
		}, i.setOnceReturnValue = function (t) {
			return this._onceReturnValue = t, this
		}, i._getOnceReturnValue = function () {
			return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
		}, i._getEvents = function () {
			return this._events || (this._events = {})
		}, "function" == typeof define && define.amd ? define(function () {
			return t
		}) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
	}.call(this),
	function (t) {
		"use strict";

		function e() {}

		function n(t) {
			function n(e) {
				e.prototype.option || (e.prototype.option = function (e) {
					t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
				})
			}

			function o(e, n) {
				t.fn[e] = function (o) {
					if ("string" == typeof o) {
						for (var s = i.call(arguments, 1), a = 0, c = this.length; c > a; a++) {
							var u = this[a],
								h = t.data(u, e);
							if (h)
								if (t.isFunction(h[o]) && "_" !== o.charAt(0)) {
									var f = h[o].apply(h, s);
									if (void 0 !== f) return f
								} else r("no such method '" + o + "' for " + e + " instance");
							else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + o + "'")
						}
						return this
					}
					return this.each(function () {
						var i = t.data(this, e);
						i ? (i.option(o), i._init()) : (i = new n(this, o), t.data(this, e, i))
					})
				}
			}
			if (t) {
				var r = "undefined" == typeof console ? e : function (t) {
					console.error(t)
				};
				t.bridget = function (t, e) {
					n(e), o(t, e)
				}
			}
		}
		var i = Array.prototype.slice;
		"function" == typeof define && define.amd ? define(["jquery"], n) : n(t.jQuery)
	}(window),
	function (t, e) {
		"use strict";

		function n(t, e) {
			return t[a](e)
		}

		function i(t) {
			if (!t.parentNode) {
				var e = document.createDocumentFragment();
				e.appendChild(t)
			}
		}

		function o(t, e) {
			i(t);
			for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
				if (n[o] === t) return !0;
			return !1
		}

		function r(t, e) {
			return i(t), n(t, e)
		}
		var s, a = function () {
			if (e.matchesSelector) return "matchesSelector";
			for (var t = ["webkit", "moz", "ms", "o"], n = 0, i = t.length; i > n; n++) {
				var o = t[n],
					r = o + "MatchesSelector";
				if (e[r]) return r
			}
		}();
		if (a) {
			var c = document.createElement("div"),
				u = n(c, "div");
			s = u ? n : r
		} else s = o;
		"function" == typeof define && define.amd ? define(function () {
			return s
		}) : window.matchesSelector = s
	}(this, Element.prototype),
	function (t) {
		"use strict";

		function e(t, e) {
			for (var n in e) t[n] = e[n];
			return t
		}

		function n(t) {
			for (var e in t) return !1;
			return e = null, !0
		}

		function i(t) {
			return t.replace(/([A-Z])/g, function (t) {
				return "-" + t.toLowerCase()
			})
		}

		function o(t, o, r) {
			function a(t, e) {
				t && (this.element = t, this.layout = e, this.position = {
					x: 0,
					y: 0
				}, this._create())
			}
			var c = r("transition"),
				u = r("transform"),
				h = c && u,
				f = !!r("perspective"),
				l = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "otransitionend",
					transition: "transitionend"
				}[c],
				p = ["transform", "transition", "transitionDuration", "transitionProperty"],
				d = function () {
					for (var t = {}, e = 0, n = p.length; n > e; e++) {
						var i = p[e],
							o = r(i);
						o && o !== i && (t[i] = o)
					}
					return t
				}();
			e(a.prototype, t.prototype), a.prototype._create = function () {
				this._transition = {
					ingProperties: {},
					clean: {},
					onEnd: {}
				}, this.css({
					position: "absolute"
				})
			}, a.prototype.handleEvent = function (t) {
				var e = "on" + t.type;
				this[e] && this[e](t)
			}, a.prototype.getSize = function () {
				this.size = o(this.element)
			}, a.prototype.css = function (t) {
				var e = this.element.style;
				for (var n in t) {
					var i = d[n] || n;
					e[i] = t[n]
				}
			}, a.prototype.getPosition = function () {
				var t = s(this.element),
					e = this.layout.options,
					n = e.isOriginLeft,
					i = e.isOriginTop,
					o = parseInt(t[n ? "left" : "right"], 10),
					r = parseInt(t[i ? "top" : "bottom"], 10);
				o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
				var a = this.layout.size;
				o -= n ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
			}, a.prototype.layoutPosition = function () {
				var t = this.layout.size,
					e = this.layout.options,
					n = {};
				e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
			};
			var g = f ? function (t, e) {
				return "translate3d(" + t + "px, " + e + "px, 0)"
			} : function (t, e) {
				return "translate(" + t + "px, " + e + "px)"
			};
			a.prototype._transitionTo = function (t, e) {
				this.getPosition();
				var n = this.position.x,
					i = this.position.y,
					o = parseInt(t, 10),
					r = parseInt(e, 10),
					s = o === this.position.x && r === this.position.y;
				if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
				var a = t - n,
					c = e - i,
					u = {},
					h = this.layout.options;
				a = h.isOriginLeft ? a : -a, c = h.isOriginTop ? c : -c, u.transform = g(a, c), this.transition({
					to: u,
					onTransitionEnd: {
						transform: this.layoutPosition
					},
					isCleaning: !0
				})
			}, a.prototype.goTo = function (t, e) {
				this.setPosition(t, e), this.layoutPosition()
			}, a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function (t, e) {
				this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
			}, a.prototype._nonTransition = function (t) {
				this.css(t.to), t.isCleaning && this._removeStyles(t.to);
				for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
			}, a.prototype._transition = function (t) {
				if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
				var e = this._transition;
				for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
				for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
				if (t.from) {
					this.css(t.from);
					var i = this.element.offsetHeight;
					i = null
				}
				this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
			};
			var m = u && i(u) + ",opacity";
			a.prototype.enableTransition = function () {
				this.isTransitioning || (this.css({
					transitionProperty: m,
					transitionDuration: this.layout.options.transitionDuration
				}), this.element.addEventListener(l, this, !1))
			}, a.prototype.transition = a.prototype[c ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function (t) {
				this.ontransitionend(t)
			}, a.prototype.onotransitionend = function (t) {
				this.ontransitionend(t)
			};
			var y = {
				"-webkit-transform": "transform",
				"-moz-transform": "transform",
				"-o-transform": "transform"
			};
			a.prototype.ontransitionend = function (t) {
				if (t.target === this.element) {
					var e = this._transition,
						i = y[t.propertyName] || t.propertyName;
					if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
						var o = e.onEnd[i];
						o.call(this), delete e.onEnd[i]
					}
					this.emitEvent("transitionEnd", [this])
				}
			}, a.prototype.disableTransition = function () {
				this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
			}, a.prototype._removeStyles = function (t) {
				var e = {};
				for (var n in t) e[n] = "";
				this.css(e)
			};
			var v = {
				transitionProperty: "",
				transitionDuration: ""
			};
			return a.prototype.removeTransitionStyles = function () {
				this.css(v)
			}, a.prototype.removeElem = function () {
				this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
			}, a.prototype.remove = function () {
				if (!c || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
				var t = this;
				this.on("transitionEnd", function () {
					return t.removeElem(), !0
				}), this.hide()
			}, a.prototype.reveal = function () {
				delete this.isHidden, this.css({
					display: ""
				});
				var t = this.layout.options;
				this.transition({
					from: t.hiddenStyle,
					to: t.visibleStyle,
					isCleaning: !0
				})
			}, a.prototype.hide = function () {
				this.isHidden = !0, this.css({
					display: ""
				});
				var t = this.layout.options;
				this.transition({
					from: t.visibleStyle,
					to: t.hiddenStyle,
					isCleaning: !0,
					onTransitionEnd: {
						opacity: function () {
							this.css({
								display: "none"
							})
						}
					}
				})
			}, a.prototype.destroy = function () {
				this.css({
					position: "",
					left: "",
					right: "",
					top: "",
					bottom: "",
					transition: "",
					transform: ""
				})
			}, a
		}
		var r = document.defaultView,
			s = r && r.getComputedStyle ? function (t) {
				return r.getComputedStyle(t, null)
			} : function (t) {
				return t.currentStyle
			};
		"function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
	}(window),
	function (t) {
		"use strict";

		function e(t, e) {
			for (var n in e) t[n] = e[n];
			return t
		}

		function n(t) {
			return "[object Array]" === h.call(t)
		}

		function i(t) {
			var e = [];
			if (n(t)) e = t;
			else if (t && "number" == typeof t.length)
				for (var i = 0, o = t.length; o > i; i++) e.push(t[i]);
			else e.push(t);
			return e
		}

		function o(t) {
			return t.replace(/(.)([A-Z])/g, function (t, e, n) {
				return e + "-" + n
			}).toLowerCase()
		}

		function r(n, r, h, p, d, g) {
			function m(t, n) {
				if ("string" == typeof t && (t = s.querySelector(t)), !t || !f(t)) return a && a.error("Bad " + this.settings.namespace + " element: " + t), void 0;
				this.element = t, this.options = e({}, this.options), this.option(n);
				var i = ++v;
				this.element.outlayerGUID = i, b[i] = this, this._create(), this.options.isInitLayout && this.layout()
			}

			function y(t, n) {
				t.prototype[n] = e({}, m.prototype[n])
			}
			var v = 0,
				b = {};
			return m.prototype.settings = {
				namespace: "outlayer",
				item: g
			}, m.prototype.options = {
				containerStyle: {
					position: "relative"
				},
				isInitLayout: !0,
				isOriginLeft: !0,
				isOriginTop: !0,
				isResizeBound: !0,
				transitionDuration: "0.4s",
				hiddenStyle: {
					opacity: 0,
					transform: "scale(0.001)"
				},
				visibleStyle: {
					opacity: 1,
					transform: "scale(1)"
				}
			}, e(m.prototype, h.prototype), m.prototype.option = function (t) {
				e(this.options, t)
			}, m.prototype._create = function () {
				this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
			}, m.prototype.reloadItems = function () {
				this.items = this._getItems(this.element.children)
			}, m.prototype._getItems = function (t) {
				for (var e = this._filterFindItemElements(t), n = this.settings.item, i = [], o = 0, r = e.length; r > o; o++) {
					var s = e[o],
						a = new n(s, this, this.options.itemOptions);
					i.push(a)
				}
				return i
			}, m.prototype._filterFindItemElements = function (t) {
				t = i(t);
				for (var e = this.options.itemSelector, n = [], o = 0, r = t.length; r > o; o++) {
					var s = t[o];
					if (f(s))
						if (e) {
							d(s, e) && n.push(s);
							for (var a = s.querySelectorAll(e), c = 0, u = a.length; u > c; c++) n.push(a[c])
						} else n.push(s)
				}
				return n
			}, m.prototype.getItemElements = function () {
				for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
				return t
			}, m.prototype.layout = function () {
				this._resetLayout(), this._manageStamps();
				var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
				this.layoutItems(this.items, t), this._isLayoutInited = !0
			}, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function () {
				this.getSize()
			}, m.prototype.getSize = function () {
				this.size = p(this.element)
			}, m.prototype._getMeasurement = function (t, e) {
				var n, i = this.options[t];
				i ? ("string" == typeof i ? n = this.element.querySelector(i) : f(i) && (n = i), this[t] = n ? p(n)[e] : i) : this[t] = 0
			}, m.prototype.layoutItems = function (t, e) {
				t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
			}, m.prototype._getItemsForLayout = function (t) {
				for (var e = [], n = 0, i = t.length; i > n; n++) {
					var o = t[n];
					o.isIgnored || e.push(o)
				}
				return e
			}, m.prototype._layoutItems = function (t, e) {
				if (!t || !t.length) return this.emitEvent("layoutComplete", [this, t]), void 0;
				this._itemsOn(t, "layout", function () {
					this.emitEvent("layoutComplete", [this, t])
				});
				for (var n = [], i = 0, o = t.length; o > i; i++) {
					var r = t[i],
						s = this._getItemLayoutPosition(r);
					s.item = r, s.isInstant = e, n.push(s)
				}
				this._processLayoutQueue(n)
			}, m.prototype._getItemLayoutPosition = function () {
				return {
					x: 0,
					y: 0
				}
			}, m.prototype._processLayoutQueue = function (t) {
				for (var e = 0, n = t.length; n > e; e++) {
					var i = t[e];
					this._positionItem(i.item, i.x, i.y, i.isInstant)
				}
			}, m.prototype._positionItem = function (t, e, n, i) {
				i ? t.goTo(e, n) : t.moveTo(e, n)
			}, m.prototype._postLayout = function () {
				var t = this._getContainerSize();
				t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
			}, m.prototype._getContainerSize = u, m.prototype._setContainerMeasure = function (t, e) {
				if (void 0 !== t) {
					var n = this.size;
					n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
				}
			}, m.prototype._itemsOn = function (t, e, n) {
				function i() {
					return o++, o === r && n.call(s), !0
				}
				for (var o = 0, r = t.length, s = this, a = 0, c = t.length; c > a; a++) {
					var u = t[a];
					u.on(e, i)
				}
			}, m.prototype.ignore = function (t) {
				var e = this.getItem(t);
				e && (e.isIgnored = !0)
			}, m.prototype.unignore = function (t) {
				var e = this.getItem(t);
				e && delete e.isIgnored
			}, m.prototype.stamp = function (t) {
				if (t = this._find(t)) {
					this.stamps = this.stamps.concat(t);
					for (var e = 0, n = t.length; n > e; e++) {
						var i = t[e];
						this.ignore(i)
					}
				}
			}, m.prototype.unstamp = function (t) {
				if (t = this._find(t))
					for (var e = 0, n = t.length; n > e; e++) {
						var i = t[e],
							o = l(this.stamps, i); - 1 !== o && this.stamps.splice(o, 1), this.unignore(i)
					}
			}, m.prototype._find = function (t) {
				return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
			}, m.prototype._manageStamps = function () {
				if (this.stamps && this.stamps.length) {
					this._getBoundingRect();
					for (var t = 0, e = this.stamps.length; e > t; t++) {
						var n = this.stamps[t];
						this._manageStamp(n)
					}
				}
			}, m.prototype._getBoundingRect = function () {
				var t = this.element.getBoundingClientRect(),
					e = this.size;
				this._boundingRect = {
					left: t.left + e.paddingLeft + e.borderLeftWidth,
					top: t.top + e.paddingTop + e.borderTopWidth,
					right: t.right - (e.paddingRight + e.borderRightWidth),
					bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
				}
			}, m.prototype._manageStamp = u, m.prototype._getElementOffset = function (t) {
				var e = t.getBoundingClientRect(),
					n = this._boundingRect,
					i = p(t),
					o = {
						left: e.left - n.left - i.marginLeft,
						top: e.top - n.top - i.marginTop,
						right: n.right - e.right - i.marginRight,
						bottom: n.bottom - e.bottom - i.marginBottom
					};
				return o
			}, m.prototype.handleEvent = function (t) {
				var e = "on" + t.type;
				this[e] && this[e](t)
			}, m.prototype.bindResize = function () {
				this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound = !0)
			}, m.prototype.unbindResize = function () {
				n.unbind(t, "resize", this), this.isResizeBound = !1
			}, m.prototype.onresize = function () {
				function t() {
					e.resize(), delete e.resizeTimeout
				}
				this.resizeTimeout && clearTimeout(this.resizeTimeout);
				var e = this;
				this.resizeTimeout = setTimeout(t, 100)
			}, m.prototype.resize = function () {
				var t = p(this.element),
					e = this.size && t;
				e && t.innerWidth === this.size.innerWidth || this.layout()
			}, m.prototype.addItems = function (t) {
				var e = this._getItems(t);
				return e.length ? (this.items = this.items.concat(e), e) : void 0
			}, m.prototype.appended = function (t) {
				var e = this.addItems(t);
				e.length && (this.layoutItems(e, !0), this.reveal(e))
			}, m.prototype.prepended = function (t) {
				var e = this._getItems(t);
				if (e.length) {
					var n = this.items.slice(0);
					this.items = e.concat(n), this._resetLayout(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
				}
			}, m.prototype.reveal = function (t) {
				if (t && t.length)
					for (var e = 0, n = t.length; n > e; e++) {
						var i = t[e];
						i.reveal()
					}
			}, m.prototype.hide = function (t) {
				if (t && t.length)
					for (var e = 0, n = t.length; n > e; e++) {
						var i = t[e];
						i.hide()
					}
			}, m.prototype.getItem = function (t) {
				for (var e = 0, n = this.items.length; n > e; e++) {
					var i = this.items[e];
					if (i.element === t) return i
				}
			}, m.prototype.getItems = function (t) {
				if (t && t.length) {
					for (var e = [], n = 0, i = t.length; i > n; n++) {
						var o = t[n],
							r = this.getItem(o);
						r && e.push(r)
					}
					return e
				}
			}, m.prototype.remove = function (t) {
				t = i(t);
				var e = this.getItems(t);
				if (e && e.length) {
					this._itemsOn(e, "remove", function () {
						this.emitEvent("removeComplete", [this, e])
					});
					for (var n = 0, o = e.length; o > n; n++) {
						var r = e[n];
						r.remove();
						var s = l(this.items, r);
						this.items.splice(s, 1)
					}
				}
			}, m.prototype.destroy = function () {
				var t = this.element.style;
				t.height = "", t.position = "", t.width = "";
				for (var e = 0, n = this.items.length; n > e; e++) {
					var i = this.items[e];
					i.destroy()
				}
				this.unbindResize(), delete this.element.outlayerGUID, c && c.removeData(this.element, this.settings.namespace)
			}, m.data = function (t) {
				var e = t && t.outlayerGUID;
				return e && b[e]
			}, m.create = function (t, n) {
				function i() {
					m.apply(this, arguments)
				}
				return e(i.prototype, m.prototype), y(i, "options"), y(i, "settings"), e(i.prototype.options, n), i.prototype.settings.namespace = t, i.data = m.data, i.Item = function () {
					g.apply(this, arguments)
				}, i.Item.prototype = new g, i.prototype.settings.item = i.Item, r(function () {
					for (var e = o(t), n = s.querySelectorAll(".js-" + e), r = "data-" + e + "-options", u = 0, h = n.length; h > u; u++) {
						var f, l = n[u],
							p = l.getAttribute(r);
						try {
							f = p && JSON.parse(p)
						} catch (d) {
							a && a.error("Error parsing " + r + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + d);
							continue
						}
						var g = new i(l, f);
						c && c.data(l, t, g)
					}
				}), c && c.bridget && c.bridget(t, i), i
			}, m.Item = g, m
		}
		var s = t.document,
			a = t.console,
			c = t.jQuery,
			u = function () {},
			h = Object.prototype.toString,
			f = "object" == typeof HTMLElement ? function (t) {
				return t instanceof HTMLElement
			} : function (t) {
				return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
			},
			l = Array.prototype.indexOf ? function (t, e) {
				return t.indexOf(e)
			} : function (t, e) {
				for (var n = 0, i = t.length; i > n; n++)
					if (t[n] === e) return n;
				return -1
			};
		"function" == typeof define && define.amd ? define(["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], r) : t.Outlayer = r(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
	}(window),
	function (t) {
		"use strict";

		function e() {
			function t(e) {
				for (var n in t.defaults) this[n] = t.defaults[n];
				for (n in e) this[n] = e[n]
			}
			return n.Rect = t, t.defaults = {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			}, t.prototype.contains = function (t) {
				var e = t.width || 0,
					n = t.height || 0;
				return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + n
			}, t.prototype.overlaps = function (t) {
				var e = this.x + this.width,
					n = this.y + this.height,
					i = t.x + t.width,
					o = t.y + t.height;
				return i > this.x && e > t.x && o > this.y && n > t.y
			}, t.prototype.getMaximalFreeRects = function (e) {
				if (!this.overlaps(e)) return !1;
				var n, i = [],
					o = this.x + this.width,
					r = this.y + this.height,
					s = e.x + e.width,
					a = e.y + e.height;
				return this.y < e.y && (n = new t({
					x: this.x,
					y: this.y,
					width: this.width,
					height: e.y - this.y
				}), i.push(n)), o > s && (n = new t({
					x: s,
					y: this.y,
					width: o - s,
					height: this.height
				}), i.push(n)), r > a && (n = new t({
					x: this.x,
					y: a,
					width: this.width,
					height: r - a
				}), i.push(n)), this.x < e.x && (n = new t({
					x: this.x,
					y: this.y,
					width: e.x - this.x,
					height: this.height
				}), i.push(n)), i
			}, t.prototype.canFit = function (t) {
				return this.width >= t.width && this.height >= t.height
			}, t
		}
		var n = t.Packery = function () {};
		"function" == typeof define && define.amd ? define(e) : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
	}(window),
	function (t) {
		"use strict";

		function e(t) {
			function e(t, e) {
				this.width = t || 0, this.height = e || 0, this.reset()
			}
			return e.prototype.reset = function () {
				this.spaces = [], this.newSpaces = [];
				var e = new t({
					x: 0,
					y: 0,
					width: this.width,
					height: this.height
				});
				this.spaces.push(e)
			}, e.prototype.pack = function (t) {
				for (var e = 0, n = this.spaces.length; n > e; e++) {
					var i = this.spaces[e];
					if (i.canFit(t)) {
						this.placeInSpace(t, i);
						break
					}
				}
			}, e.prototype.placeInSpace = function (t, e) {
				t.x = e.x, t.y = e.y, this.placed(t)
			}, e.prototype.placed = function (t) {
				for (var n = [], i = 0, o = this.spaces.length; o > i; i++) {
					var r = this.spaces[i],
						s = r.getMaximalFreeRects(t);
					s ? n.push.apply(n, s) : n.push(r)
				}
				this.spaces = n, e.mergeRects(this.spaces), this.spaces.sort(e.spaceSorterTopLeft)
			}, e.mergeRects = function (t) {
				for (var e = 0, n = t.length; n > e; e++) {
					var i = t[e];
					if (i) {
						var o = t.slice(0);
						o.splice(e, 1);
						for (var r = 0, s = 0, a = o.length; a > s; s++) {
							var c = o[s],
								u = e > s ? 0 : 1;
							i.contains(c) && (t.splice(s + u - r, 1), r++)
						}
					}
				}
				return t
			}, e.spaceSorterTopLeft = function (t, e) {
				return t.y - e.y || t.x - e.x
			}, e.spaceSorterLeftTop = function (t, e) {
				return t.x - e.x || t.y - e.y
			}, e
		}
		if ("function" == typeof define && define.amd) define(["./rect"], e);
		else {
			var n = t.Packery = t.Packery || {};
			n.Packer = e(n.Rect)
		}
	}(window),
	function (t) {
		"use strict";

		function e(t, e, n) {
			var i = t("transform"),
				o = function () {
					e.Item.apply(this, arguments)
				};
			o.prototype = new e.Item;
			var r = o.prototype._create;
			return o.prototype._create = function () {
				r.call(this), this.rect = new n, this.placeRect = new n
			}, o.prototype.dragStart = function () {
				this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && i && (this.element.style[i] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
			}, o.prototype.dragMove = function (t, e) {
				this.didDrag = !0;
				var n = this.layout.size;
				t -= n.paddingLeft, e -= n.paddingTop, this.positionPlaceRect(t, e)
			}, o.prototype.dragStop = function () {
				this.getPosition();
				var t = this.position.x !== this.placeRect.x,
					e = this.position.y !== this.placeRect.y;
				this.needsPositioning = t || e, this.didDrag = !1
			}, o.prototype.positionPlaceRect = function (t, e, n) {
				this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, n)
			}, o.prototype.getPlaceRectCoord = function (t, e, n) {
				var i = e ? "Width" : "Height",
					o = this.size["outer" + i],
					r = this.layout[e ? "columnWidth" : "rowHeight"],
					s = this.layout.size["inner" + i];
				e || (s = Math.max(s, this.layout.maxY), this.layout.rowHeight || (s -= this.layout.gutter));
				var a;
				if (r) {
					r += this.layout.gutter, s += e ? this.layout.gutter : 0, t = Math.round(t / r);
					var c = Math[e ? "floor" : "ceil"](s / r);
					c -= Math.ceil(o / r), a = c
				} else a = s - o;
				return t = n ? t : Math.min(t, a), t *= r || 1, Math.max(0, t)
			}, o.prototype.copyPlaceRectPosition = function () {
				this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
			}, o
		}
		"function" == typeof define && define.amd ? define(["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
	}(window),
	function (t) {
		"use strict";

		function e(t, e, n, i, o, r) {
			var s = n.create("packery");
			return s.Item = s.prototype.settings.item = r, s.prototype._create = function () {
				n.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
				var t = this;
				this.handleDraggabilly = {
					dragStart: function (e) {
						t.itemDragStart(e.element)
					},
					dragMove: function (e) {
						t.itemDragMove(e.element, e.position.x, e.position.y)
					},
					dragEnd: function (e) {
						t.itemDragEnd(e.element)
					}
				}, this.handleUIDraggable = {
					start: function (e) {
						t.itemDragStart(e.currentTarget)
					},
					drag: function (e, n) {
						t.itemDragMove(e.currentTarget, n.position.left, n.position.top)
					},
					stop: function (e) {
						t.itemDragEnd(e.currentTarget)
					}
				}
			}, s.prototype._resetLayout = function () {
				this.getSize(), this._getMeasurements(), this.packer.width = this.size.innerWidth + this.gutter, this.packer.height = Number.POSITIVE_INFINITY, this.packer.reset(), this.maxY = 0
			}, s.prototype._getMeasurements = function () {
				this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
			}, s.prototype._getItemLayoutPosition = function (t) {
				return this._packItem(t), t.rect
			}, s.prototype._packItem = function (t) {
				this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxY(t.rect)
			}, s.prototype._setMaxY = function (t) {
				this.maxY = Math.max(t.y + t.height, this.maxY)
			}, s.prototype._setRectSize = function (t, n) {
				var i = e(t),
					o = i.outerWidth,
					r = i.outerHeight,
					s = this.columnWidth + this.gutter,
					a = this.rowHeight + this.gutter;
				o = this.columnWidth ? Math.ceil(o / s) * s : o + this.gutter, r = this.rowHeight ? Math.ceil(r / a) * a : r + this.gutter, n.width = Math.min(o, this.packer.width), n.height = r
			}, s.prototype._getContainerSize = function () {
				return {
					height: this.maxY - this.gutter
				}
			}, s.prototype._manageStamp = function (t) {
				var e, n = this.getItem(t);
				if (n && n.isPlacing) e = n.placeRect;
				else {
					var o = this._getElementOffset(t);
					e = new i({
						x: o.left,
						y: o.top
					})
				}
				this._setRectSize(t, e), this.packer.placed(e), this._setMaxY(e)
			}, s.prototype.sortItemsByPosition = function () {
				this.items.sort(function (t, e) {
					return t.position.y - e.position.y || t.position.x - e.position.x
				})
			}, s.prototype.fit = function (t, e, n) {
				var i = this.getItem(t);
				i && (this._getMeasurements(), this.stamp(i.element), i.getSize(), i.isPlacing = !0, e = void 0 === e ? i.rect.x : e, n = void 0 === n ? i.rect.y : n, i.positionPlaceRect(e, n, !0), this._bindFitEvents(i), i.moveTo(i.placeRect.x, i.placeRect.y), this.layout(), this.unstamp(i.element), this.sortItemsByPosition(), i.isPlacing = !1, i.copyPlaceRectPosition())
			}, s.prototype._bindFitEvents = function (t) {
				function e() {
					i++, 2 === i && n.emitEvent("fitComplete", [n, t])
				}
				var n = this,
					i = 0;
				t.on("layout", function () {
					return e(), !0
				}), this.on("layoutComplete", function () {
					return e(), !0
				})
			}, s.prototype.itemDragStart = function (t) {
				this.stamp(t);
				var e = this.getItem(t);
				e && e.dragStart()
			}, s.prototype.itemDragMove = function (t, e, n) {
				function i() {
					r.layout(), delete r.dragTimeout
				}
				var o = this.getItem(t);
				o && o.dragMove(e, n);
				var r = this;
				this.clearDragTimeout(), this.dragTimeout = setTimeout(i, 40)
			}, s.prototype.clearDragTimeout = function () {
				this.dragTimeout && clearTimeout(this.dragTimeout)
			}, s.prototype.itemDragEnd = function (e) {
				var n, i = this.getItem(e);
				if (i && (n = i.didDrag, i.dragStop()), !i || !n && !i.needsPositioning) return this.unstamp(e), void 0;
				t.add(i.element, "is-positioning-post-drag");
				var o = this._getDragEndLayoutComplete(e, i);
				i.needsPositioning ? (i.on("layout", o), i.moveTo(i.placeRect.x, i.placeRect.y)) : i && i.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
			}, s.prototype._getDragEndLayoutComplete = function (e, n) {
				var i = n && n.needsPositioning,
					o = 0,
					r = i ? 2 : 1,
					s = this;
				return function () {
					return o++, o !== r ? !0 : (n && (t.remove(n.element, "is-positioning-post-drag"), n.isPlacing = !1, n.copyPlaceRectPosition()), s.unstamp(e), s.sortItemsByPosition(), i && s.emitEvent("dragItemPositioned", [s, n]), !0)
				}
			}, s.prototype.bindDraggabillyEvents = function (t) {
				t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
			}, s.prototype.bindUIDraggableEvents = function (t) {
				t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
			}, s.Rect = i, s.Packer = o, s
		}
		"function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], e) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
	}(window);
