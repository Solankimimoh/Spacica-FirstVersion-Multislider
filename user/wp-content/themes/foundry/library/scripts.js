function ajax_loader(t, e, n, i, o) {
	function r() {
		return window.onhashchange = null, t(".h1").unbind("click"), t("nav").removeClass("overlay-active"), window.location.hash = "", i.hide("fade", {}, o / 2, function () {
			i.switchClass("active", "inactive"), i.empty()
		}), !1
	}

	function s(e, n) {
		function i(t) {
			var e = new Packery(t.get()[0], {
				itemSelector: n,
				transitionDuration: ".8s",
				containerStyle: {
					position: "relative",
					height: t.height() + 150
				}
			});
			e.bindResize(), t.find(n).on("mouseenter", function (t) {
				return
			})
		}
		e.find("ul.portfolio").each(function (e, n) {
			i(t(n))
		})
	}

	function a() {
		return host = "localhost" === window.location.hostname ? "//localhost" + window.location.pathname : "//" + window.location.host + "/"
	}

	function c() {
		if (0 !== window.location.hash.length) {
			var t = window.location.hash.split("#")[1];
			if (t.length > 1) {
				var e = a() + t;
				h(e)
			}
		}
	}

	function u(t) {
		var e = t.split(a())[1];
		window.location.hash = e
	}

	function l(e) {
		var n = t.parseHTML(e);
		i.append(t(n).find("#main"));
		var a = t("<a href='#' class='button-close'>x</a>").appendTo(i.find("#main"));
		a.click(r), t(".h1").click(r), i.find(".projects.list").length > 0 && s(i, "li"), ajax_loader(t, i.find(".single.page article"), "a", i, o), t(document).keydown(function (t) {
			27 === t.keyCode && r()
		}), window.onhashchange = r
	}

	function h(e) {
		jQuery("video").each(function () {
			console.log(this), this.pause()
		}), i.empty(), i.append("<img class='preloader' src='" + a() + "wp-content/themes/foundry/library/images/preloader.gif' />"), i.hasClass("active") || i.show("fade", {}, o, function () {
			i.switchClass("inactive", "active"), t("nav").addClass("overlay-active")
		}), window.onhashchange = null, _gaq.push(["_trackEvent", "Overlay", "Open: " + e]), t.ajax({
			url: e,
			type: "GET",
			datatype: "html",
			success: l,
			complete: function () {
				i.children("img.preloader").remove()
			}
		})
	}
	i.hasClass("active") || c(), t(e.find(n)).click(function (e) {
		var n;
		return n = t(this).filter("a").length > 0 ? t(this).attr("href") : t(this).find("a").attr("href"), -1 === n.indexOf("wp-content") && -1 !== n.indexOf(a()) ? (e.preventDefault(), u(n), h(n), !1) : void 0
	})
}

function setup_colors(t, e, n, i, o) {
	function r(t, e, n, i, o) {
		a.find("g.one path, g.three path").animate({
			fill: n
		}, o), a.find("g.two path").animate({
			fill: i
		}, o)
	}

	function s(e) {
		var o = n;
		n = i, i = o, r(t, a, n, i, e)
	}
	var a = e;
	jQuery.Color.hook("fill stroke"), s(o), self.setInterval(function () {
		s(o)
	}, o)
}

function loadSVG(t, e) {
	var n = t.get()[0].contentDocument;
	if ("undefined" == typeof n) try {
		n = t.get()[0].getSVGDocument()
	} catch (i) {}
	null === n || "undefined" == typeof n ? jQuery(window).load(function () {
		loadSVG(t, e)
	}) : e(jQuery(n))
}

function progressive_img(t, e, n, i) {
	function o() {
		var t = c.eq(0),
			e = t.attr("data-" + s + "-image");
		c = c.not(t), jQuery('<img src ="' + e + '"/>').appendTo("html").load(function () {
			jQuery(this).remove(), t.css("background-image", "url(" + e + ")"), c.length > 0 && o()
		}), c.length > 0 && i > r && (r++, o(), bg_loaded(t, function () {
			r--
		}))
	}
	var r = 0,
		s = "large",
		a = t.find("article:last .gallery-icon:last .image.canvas"),
		c = t.find(".gallery-icon div.image.canvas");
	n && bg_loaded(a, function () {
		o(c)
	})
}

function bg_loaded(t, e) {
	var n, i, o;
	o = t.css("background-image"), i = function () {
		e(t)
	}, "undefined" != typeof o ? (n = o.match(/^url\(["']?(.+?)["']?\)$/)[1], jQuery("<img>").attr("src", n).appendTo("html").load(function () {
		jQuery(this).remove(), i()
	})) : i()
}

function load_thumbs(t) {
	t.find(".image.canvas").each(function (t, e) {
		var n = jQuery(e);
		n.attr("data-medium-image", n.css("background-image")), n.css("background-image", "url(" + n.attr("data-thumb-image") + ")")
	})
}

function get_active_index(t) {
	"use strict";
	var e = t.index(t.filter(".active"));
	return e
}

function get_next(t, e) {
	"use strict";
	var n = t.children("article, .gallery-item"),
		i = get_active_index(n),
		o = -1;
	e ? (o = i + 1, o >= n.length && (o = -1)) : (o = i - 1, 0 > o && (o = -1));
	var r = n.eq(o),
		s = n.eq(i);
	return -1 === o && (r = null), -1 === i && (s = null), {
		next: r,
		active: s
	}
}

function is_next(t, e) {
	"use strict";
	return null !== get_next(t, e).next ? !0 : !1
}

function rollover_set_status(t, e) {
	var n = !1;
	t.removeClass("on"), t.hasClass("forward") && (n = !0), is_next(e, n) && t.addClass("on")
}

function show(t, e, n, i, o) {
	"use strict";
	var r, s = 5,
		a = !1,
		c = "width",
		u = t.children("article, .gallery-item"),
		l = {},
		h = {
			duration: i,
			easing: "easeOutQuart",
			queue: !1
		};
	if (t.on("transitioncomplete", o), "vert" === n && (a = !0, c = "height"), t.find("br").remove(), u.removeClass("active"), u.addClass("inactive"), e.removeClass("inactive"), e.addClass("active"), u.addClass("animating"), r = get_active_index(u), a && u.length - r < 3 && InfScroll.go(), u.length > 1 && (l[c] = "0%", h.duration = .99 * h.duration, u.filter(".inactive").animate(l, h), h.duration = 1.0101 * h.duration, h.complete = function () {
			t.trigger("transitioncomplete"), u.removeClass("animating")
		}, l[c] = "100%", e.animate(l, h), delete h.complete, rollover_set_status(make_rollover(t, a, !0, s, h), t), rollover_set_status(make_rollover(t, a, !1, s, h), t)), a) {
		show(e.find(".gallery"), e.find(".gallery-item").eq(0), "horz", 0), jQuery("video").each(function () {
			this.pause()
		});
		var f = e.find("video")[0];
		"undefined" != typeof f && (f.currentTime = 0, f.play())
	} else append_slide_meta(t);
	return r
}

function move_vert(t) {
	"use strict";
	var e = !0,
		n = jQuery("#main.slides");
	0 > t && (e = !1);
	var i = get_next(n, e).next;
	null !== i && (show(n, i, "vert", 2e3, Chevrons.on), _gaq.push(["_trackEvent", "Project", i.find(".project.caption .artist").text() + " - " + i.find(".project.caption .title .title").text()]))
}

function move_horz(t) {
	"use strict";
	var e = jQuery("article.active .gallery"),
		n = !0;
	0 > t && (n = !1), is_next(e, n) && show(e, get_next(e, n).next, "horz", 2e3, Chevrons.on)
}

function make_rollover(t, e, n, i, o) {
	"use strict";
	var r = "width",
		s = "forward",
		a = jQuery();
	return e && (r = "height"), n || (s = "reverse"), a = t.find(".rollover.shim." + s), 0 === a.length && (a = jQuery('<div class="rollover shim ' + s + '">').appendTo(t), n ? (a.css("right", 0), a.css("bottom", 0)) : (a.css("left", 0), a.css("top", 0)), a.css({
		width: "100%",
		height: "100%",
		position: "absolute",
		"z-index": "1102"
	}).css(r, i + "%"), o.duration = 1200, a.click(function () {
		return e && n ? move_vert(1) : e && !n ? move_vert(-1) : !e && n ? move_horz(1) : move_horz(-1), !1
	})), a
}

function pager_set_status(t, e) {
	var n = t.children(".pager"),
		o = t.children(".gallery-item");
	if (0 === n.length) {
		for (n = jQuery('<div class="pager" />').appendTo(t), i = 0; i < o.length; i++) n.append('<div class="pager-icon" />');
		n.children().click(function () {
			var e = jQuery(this),
				i = n.children().index(e);
			console.log(i), show(t, o.eq(i), "horz", 1500)
		})
	}
	n.children().removeClass("active").addClass("inactive"), n.children().eq(e).removeClass("inactive").addClass("active")
}

function setup_navigation(t) {
	"use strict";

	function e() {
		jQuery(document).keydown(function (t) {
			switch (t.which) {
				case 37:
					t.preventDefault(), move_horz(-1);
					break;
				case 39:
					t.preventDefault(), move_horz(1);
					break;
				case 38:
					t.preventDefault(), move_vert(-1);
					break;
				case 40:
					t.preventDefault(), move_vert(1)
			}
		})
	}

	function n() {
		function t(t) {
			return jQuery(".overlay").hasClass("active") ? void 0 : (t.originalEvent.wheelDeltaY < 0 || t.originalEvent.wheelDelta < 0 || t.originalEvent.deltaY > 0 ? move_vert(1) : t.originalEvent.wheelDeltaY > 0 || t.originalEvent.wheelDelta > 0 || t.originalEvent.deltaY < 0 ? move_vert(-1) : t.originalEvent.wheelDeltaX > 0 || t.originalEvent.deltaX < 0 ? move_horz(-1) : (t.originalEvent.wheelDeltaX < 0 || t.originalEvent.deltaX > 0) && move_horz(1), !1)
		}
		Modernizr.hasEvent("wheel") ? jQuery(document).on("DOMMouseScroll wheel", t) : jQuery(document).on("DOMMouseSroll mousewheel", t)
	}

	function i(t) {
		t.bind("touchmove", function (t) {
			jQuery(".overlay").hasclass("active") || t.preventdefault()
		}, !1), t.hammer({
			swipe_velocity: .3
		}), t.hammer().on("swipedown", function () {
			move_vert(-1)
		}), t.hammer().on("swipeup", function () {
			move_vert(1)
		}), t.hammer().on("swipeleft", function () {
			move_horz(1)
		}), t.hammer().on("swiperight", function () {
			move_horz(-1)
		})
	}

	function o(t) {
		jQuery('<navbutton class="right"></navbutton>').appendTo(t).click(function () {
			move_horz(1)
		}), jQuery('<navbutton class="left">').appendTo(t).click(function () {
			move_horz(-1)
		}), jQuery('<navbutton class="down"></navbutton>').appendTo(t).click(function () {
			move_vert(1)
		}), jQuery('<navbutton class="up">').appendTo(t).click(function () {
			move_vert(-1)
		})
	}
	o(t), e(t), n(t), i(t)
}

function append_slide_meta(t) {
	var e = t.parent(),
		n = e.find(".gallery-item.active .gallery-caption"),
		i = e.find(".project.caption .photo-credit");
	n.length > 0 ? (i.hasClass("changed") || i.attr("data-orig-content", i.text()), 0 === i.length && (i = jQuery('<p class="photo-credit" />').appendTo(e.find(".project.caption"))), i.empty().text(n.text()), i.addClass("changed")) : i.hasClass("changed") && i.empty().text(i.attr("data-orig-content"))
}
var Chevrons = function () {
		function t() {
			if (r) {
				var t = jQuery("article.active .gallery");
				e.removeClass("on"), e.each(function (e, i) {
					var o = n,
						r = !1,
						s = jQuery(i);
					(s.hasClass("right") || s.hasClass("left")) && (o = t), (s.hasClass("down") || s.hasClass("right")) && (r = !0), is_next(o, r) && s.addClass("on")
				})
			}
		}
		var e, n, i, o, r = !0,
			s = function () {
				r = !0, t(), o = window.setInterval(t, 4e3)
			},
			a = function () {
				e.removeClass("on"), r = !1, window.clearInterval(o)
			},
			c = function (r, a) {
				n = r, e = n.find("navbutton"), i = a, t(), o = window.setInterval(t, 4e3), s()
			};
		return {
			init: c,
			on: s,
			off: a
		}
	}(),
	InfScroll = function () {
		function t(t) {
			var n = jQuery(jQuery.parseHTML(t)).find("#main.slides");
			n.children("article"), i && n.find(".gallery-item .image.canvas").each(function () {
				jQuery(this).css("background-image", "url(" + jQuery(this).attr("data-large-image") + ")")
			}), o = n.find(".next-link a").attr("href"), bg_loaded(n.find(".hentry .image.canvas").first(), function () {
				e.append(n.children("article")), jQuery("article.preloader").hasClass("active") ? (move_vert(1), window.setTimeout(function () {
					jQuery(".preloader").remove()
				}, 300)) : jQuery(".preloader").remove(), r = !1
			})
		}
		var e = null,
			n = !1,
			i = !1,
			o = null,
			r = !1,
			s = function (t, r, s) {
				n = r, i = s, o = t.find(".next-link a").attr("href"), e = t
			},
			a = function () {
				r === !1 && void 0 !== o && (r = !0, e.append("<article class='hentry preloader'><div class='preloader'></div></article>"), jQuery.ajax({
					url: o,
					success: t
				}))
			};
		return {
			go: a,
			init: s
		}
	}();
window.getComputedStyle || (window.getComputedStyle = function (t) {
		return this.el = t, this.getPropertyValue = function (e) {
			var n = /(\-([a-z]){1})/g;
			return "float" == e && (e = "styleFloat"), n.test(e) && (e = e.replace(n, function () {
				return arguments[2].toUpperCase()
			})), t.currentStyle[e] ? t.currentStyle[e] : null
		}, this
	}), jQuery(document).ready(function (t) {
		"use strict";
		var e = !1,
			n = !1,
			i = t(window).width(),
			o = t("#main");
		if (481 > i && (e = !0), i >= 768 && (n = !0), t("html").hasClass("lt-ie9")) t("html").addClass("no-js").removeClass("js");
		else if (jQuery.Color(145, 145, 144), jQuery.Color(252, 252, 251), o.hasClass("slides")) {
			window.setTimeout(function () {
				jQuery(".slides .init.preloader").remove()
			}, 6e4), bg_loaded(jQuery("article:last .gallery-icon:last .image.canvas"), function () {
				jQuery(".slides .init.preloader").remove()
			}), InfScroll.init(o, e, n), show(o, t(o.children()[0]), "vert", 1500), setup_navigation(o), Chevrons.init(o, 3, 1e3), jQuery(".entry-content video").parent().addClass("video-post");
			var r = t('<div class="page overlay ajax inactive"></div>').prependTo("#inner-content").hide();
			ajax_loader(t, t(".nav"), "li.menu-item", r, 1400), progressive_img(o, e, n, 5)
		}
	}),
	function (t) {
		function e() {
			u.setAttribute("content", f), d = !0
		}

		function n() {
			u.setAttribute("content", h), d = !1
		}

		function i(i) {
			c = i.accelerationIncludingGravity, r = Math.abs(c.x), s = Math.abs(c.y), a = Math.abs(c.z), !t.orientation && (r > 7 || (a > 6 && 8 > s || 8 > a && s > 6) && r > 5) ? d && n() : d || e()
		}
		if (/iPhone|iPad|iPod/.test(navigator.platform) && navigator.userAgent.indexOf("AppleWebKit") > -1) {
			var o = t.document;
			if (o.querySelector) {
				var r, s, a, c, u = o.querySelector("meta[name=viewport]"),
					l = u && u.getAttribute("content"),
					h = l + ",maximum-scale=1",
					f = l + ",maximum-scale=10",
					d = !0;
				u && (t.addEventListener("orientationchange", e, !1), t.addEventListener("devicemotion", i, !1))
			}
		}
	}(this);
