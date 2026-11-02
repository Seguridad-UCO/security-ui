//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, T = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), E = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ee = /-\w/g, D = E((e) => e.replace(ee, (e) => e.slice(1).toUpperCase())), te = /\B([A-Z])/g, O = E((e) => e.replace(te, "-$1").toLowerCase()), ne = E((e) => e.charAt(0).toUpperCase() + e.slice(1)), re = E((e) => e ? `on${ne(e)}` : ""), k = (e, t) => !Object.is(e, t), ie = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, A = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, j = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, M, ae = () => M ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function oe(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ue(r) : oe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var se = /;(?![^(]*\))/g, ce = /:([^]+)/, le = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ue(e) {
	let t = {};
	return e.replace(le, (e) => e.startsWith("/*") ? "" : e).split(se).forEach((e) => {
		if (e) {
			let n = e.split(ce);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function N(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = N(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var de = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", P = /* @__PURE__ */ e(de);
de + "";
function fe(e) {
	return !!e || e === "";
}
function F(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = ge(e[i], t[i], n);
	return r;
}
function pe(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && ge(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function me(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? pe(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !ge(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function he(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function ge(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? he(e, t, n, F) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : he(e, t, n, me) : String(e) === String(t))));
}
function _e(e, t) {
	return e.findIndex((e) => ge(e, t));
}
var ve = (e) => !!(e && e.__v_isRef === !0), I = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? ve(e) ? I(e.value) : JSON.stringify(e, ye, 2) : String(e), ye = (e, t) => ve(t) ? ye(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[be(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => be(e)) } : _(t) ? be(t) : v(t) && !d(t) && !C(t) ? String(t) : t, be = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, L, xe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && L && (L.active ? (this.parent = L, this.index = (L.scopes || (L.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = L;
			try {
				return L = this, e();
			} finally {
				L = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = L, L = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (L === this) L = this.prevScope;
			else {
				let e = L;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Se() {
	return L;
}
function Ce(e, t = !1) {
	L && L.cleanups.push(e);
}
var R, we = /* @__PURE__ */ new WeakSet(), Te = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, L && (L.active ? L.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, we.has(this) && (we.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ke(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, He(this), Me(this);
		let e = R, t = Re;
		R = this, Re = !0;
		try {
			return this.fn();
		} finally {
			Ne(this), R = e, Re = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ie(e);
			this.deps = this.depsTail = void 0, He(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? we.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Pe(this) && this.run();
	}
	get dirty() {
		return Pe(this);
	}
}, Ee = 0, De, Oe;
function ke(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Oe, Oe = e;
		return;
	}
	e.next = De, De = e;
}
function Ae() {
	Ee++;
}
function je() {
	if (--Ee > 0) return;
	if (Oe) {
		let e = Oe;
		for (Oe = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; De;) {
		let t = De;
		for (De = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Me(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ne(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ie(r), Le(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Pe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Fe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Fe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ue) || (e.globalVersion = Ue, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Pe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = R, r = Re;
	R = e, Re = !0;
	try {
		Me(e);
		let n = e.fn(e._value);
		(t.version === 0 || k(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		R = n, Re = r, Ne(e), e.flags &= -3;
	}
}
function Ie(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ie(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Le(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Re = !0, ze = [];
function Be() {
	ze.push(Re), Re = !1;
}
function Ve() {
	let e = ze.pop();
	Re = e === void 0 || e;
}
function He(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = R;
		R = void 0;
		try {
			t();
		} finally {
			R = e;
		}
	}
}
var Ue = 0, We = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ge = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!R || !Re || R === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== R) t = this.activeLink = new We(R, this), R.deps ? (t.prevDep = R.depsTail, R.depsTail.nextDep = t, R.depsTail = t) : R.deps = R.depsTail = t, Ke(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = R.depsTail, t.nextDep = void 0, R.depsTail.nextDep = t, R.depsTail = t, R.deps === t && (R.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ue++, this.notify(e);
	}
	notify(e) {
		Ae();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			je();
		}
	}
};
function Ke(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ke(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var qe = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ Symbol(""), Ye = /* @__PURE__ */ Symbol(""), Xe = /* @__PURE__ */ Symbol("");
function Ze(e, t, n) {
	if (Re && R) {
		let t = qe.get(e);
		t || qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ge()), r.map = t, r.key = n), r.track();
	}
}
function Qe(e, t, n, r, i, a) {
	let o = qe.get(e);
	if (!o) {
		Ue++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ae(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === Xe || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(Xe)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Je)), f(e) && s(o.get(Ye)));
				break;
			case "delete":
				i || (s(o.get(Je)), f(e) && s(o.get(Ye)));
				break;
			case "set": f(e) && s(o.get(Je));
		}
	}
	je();
}
function $e(e, t) {
	let n = qe.get(e);
	return n && n.get(t);
}
function et(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e || (Ze(t, "iterate", Xe), /* @__PURE__ */ Rt(e)) ? t : /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ It(e) ? t.map((e) => Ht(Vt(e))) : t.map(Ht) : t.map(Vt);
}
function tt(e) {
	return Ze(e = /* @__PURE__ */ B(e), "iterate", Xe), e;
}
function nt(e, t) {
	return /* @__PURE__ */ Lt(e) ? Ht(/* @__PURE__ */ It(e) ? Vt(t) : t) : Vt(t);
}
var rt = {
	__proto__: null,
	[Symbol.iterator]() {
		return it(this, Symbol.iterator, (e) => nt(this, e));
	},
	concat(...e) {
		return et(this).concat(...e.map((e) => d(e) ? et(e) : e));
	},
	entries() {
		return it(this, "entries", (e) => (e[1] = nt(this, e[1]), e));
	},
	every(e, t) {
		return ot(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ot(this, "filter", e, t, (e) => e.map((e) => nt(this, e)), arguments);
	},
	find(e, t) {
		return ot(this, "find", e, t, (e) => nt(this, e), arguments);
	},
	findIndex(e, t) {
		return ot(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ot(this, "findLast", e, t, (e) => nt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ot(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ot(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return ct(this, "includes", e);
	},
	indexOf(...e) {
		return ct(this, "indexOf", e);
	},
	join(e) {
		return et(this).join(e);
	},
	lastIndexOf(...e) {
		return ct(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ot(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return lt(this, "pop");
	},
	push(...e) {
		return lt(this, "push", e);
	},
	reduce(e, ...t) {
		return st(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return st(this, "reduceRight", e, t);
	},
	shift() {
		return lt(this, "shift");
	},
	some(e, t) {
		return ot(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return lt(this, "splice", e);
	},
	toReversed() {
		return et(this).toReversed();
	},
	toSorted(e) {
		return et(this).toSorted(e);
	},
	toSpliced(...e) {
		return et(this).toSpliced(...e);
	},
	unshift(...e) {
		return lt(this, "unshift", e);
	},
	values() {
		return it(this, "values", (e) => nt(this, e));
	}
};
function it(e, t, n) {
	let r = tt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Rt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var at = Array.prototype;
function ot(e, t, n, r, i, a) {
	let o = tt(e), s = o !== e && !/* @__PURE__ */ Rt(e), c = o[t];
	if (c !== at[t]) {
		let t = c.apply(e, a);
		return s ? Vt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, nt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function st(e, t, n, r) {
	let i = tt(e), a = i !== e && !/* @__PURE__ */ Rt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = nt(e, t)), n.call(this, t, nt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? nt(e, c) : c;
}
function ct(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	Ze(r, "iterate", Xe);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ zt(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function lt(e, t, n = []) {
	Be(), Ae();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return je(), Ve(), r;
}
var ut = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), dt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function ft(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return Ze(t, "has", e), t.hasOwnProperty(e);
}
var pt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? jt : At : i ? kt : Ot).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = rt[t])) return e;
			if (t === "hasOwnProperty") return ft;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((_(t) ? dt.has(t) : ut(t)) || (r || Ze(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Pt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Pt(o) : /* @__PURE__ */ z(o) : o;
	}
}, mt = class extends pt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Lt(i);
			if (!/* @__PURE__ */ Rt(n) && !/* @__PURE__ */ Lt(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? k(n, i) && Qe(e, "set", t, n, i) : Qe(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && Qe(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !dt.has(t)) && Ze(e, "has", t), n;
	}
	ownKeys(e) {
		return Ze(e, "iterate", d(e) ? "length" : Je), Reflect.ownKeys(e);
	}
}, ht = class extends pt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, gt = /* @__PURE__ */ new mt(), _t = /* @__PURE__ */ new ht(), vt = /* @__PURE__ */ new mt(!0), yt = (e) => e, bt = (e) => Reflect.getPrototypeOf(e);
function xt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? yt : t ? Ht : Vt;
		return !t && Ze(a, "iterate", l ? Ye : Je), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function St(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ct(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (k(n, a) && Ze(i, "get", n), Ze(i, "get", a));
			let { has: o } = bt(i), s = t ? yt : e ? Ht : Vt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && Ze(/* @__PURE__ */ B(t), "iterate", Je), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (k(t, i) && Ze(r, "has", t), Ze(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? yt : e ? Ht : Vt;
			return !e && Ze(o, "iterate", Je), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: St("add"),
		set: St("set"),
		delete: St("delete"),
		clear: St("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = bt(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ Rt(e) && !/* @__PURE__ */ Lt(e) ? i : e;
			return r.has.call(n, a) || k(e, a) && r.has.call(n, e) || k(i, a) && r.has.call(n, i) || (n.add(a), Qe(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Rt(n) && !/* @__PURE__ */ Lt(n) && (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = bt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ B(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? k(n, s) && Qe(r, "set", e, n, s) : Qe(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = bt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ B(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && Qe(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = e.clear();
			return t && Qe(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = xt(r, e, t);
	}), n;
}
function wt(e, t) {
	let n = Ct(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Tt = { get: /* @__PURE__ */ wt(!1, !1) }, Et = { get: /* @__PURE__ */ wt(!1, !0) }, Dt = { get: /* @__PURE__ */ wt(!0, !1) }, Ot = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap();
function Mt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function z(e) {
	return /* @__PURE__ */ Lt(e) ? e : Ft(e, !1, gt, Tt, Ot);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
	return Ft(e, !1, vt, Et, kt);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
	return Ft(e, !0, _t, Dt, At);
}
function Ft(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Mt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ It(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function Bt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && A(e, "__v_skip", !0), e;
}
var Vt = (e) => v(e) ? /* @__PURE__ */ z(e) : e, Ht = (e) => v(e) ? /* @__PURE__ */ Pt(e) : e;
// @__NO_SIDE_EFFECTS__
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
	return Wt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ut(e) {
	return Wt(e, !0);
}
function Wt(e, t) {
	return /* @__PURE__ */ V(e) ? e : new Gt(e, t);
}
var Gt = class {
	constructor(e, t) {
		this.dep = new Ge(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ B(e), this._value = t ? e : Vt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Rt(e) || /* @__PURE__ */ Lt(e);
		e = n ? e : /* @__PURE__ */ B(e), k(e, t) && (this._rawValue = e, this._value = n ? e : Vt(e), this.dep.trigger());
	}
};
function U(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
var Kt = {
	get: (e, t, n) => t === "__v_raw" ? e : U(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function qt(e) {
	return /* @__PURE__ */ It(e) ? e : new Proxy(e, Kt);
}
var Jt = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ B(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ zt(i) || /* @__PURE__ */ Rt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = U(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ V(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ V(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return $e(this._raw, this._key);
	}
}, Yt = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Xt(e, t, n) {
	return /* @__PURE__ */ V(e) ? e : h(e) ? new Yt(e) : v(e) && arguments.length > 1 ? Zt(e, t, n) : /* @__PURE__ */ H(e);
}
function Zt(e, t, n) {
	return new Jt(e, t, n);
}
var Qt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ge(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ue - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && R !== this) return ke(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Fe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function $t(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new Qt(r, i, n);
}
var en = {}, tn = /* @__PURE__ */ new WeakMap(), nn = void 0;
function rn(e, t = !1, n = nn) {
	if (n) {
		let t = tn.get(n);
		t || tn.set(n, t = []), t.push(e);
	}
}
function an(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Rt(e) || o === !1 || o === 0 ? on(e, 1) : on(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ V(e) ? (g = () => e.value, y = /* @__PURE__ */ Rt(e)) : /* @__PURE__ */ It(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ It(e) || /* @__PURE__ */ Rt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ It(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			Be();
			try {
				_();
			} finally {
				Ve();
			}
		}
		let t = nn;
		nn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			nn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => on(e(), t);
	}
	let x = Se(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(en) : en, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => k(e, C[t])) : k(t, C))) {
					_ && _();
					let e = nn;
					nn = m;
					try {
						let e = [
							t,
							C === en ? void 0 : b && C[0] === en ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						nn = e;
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new Te(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => rn(e, !1, m), _ = m.onStop = () => {
		let e = tn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			tn.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function on(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) on(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) on(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		on(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) on(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && on(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function sn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		ln(e, t, n);
	}
}
function cn(e, t, n, r) {
	if (h(e)) {
		let i = sn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			ln(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(cn(e[a], t, n, r));
		return i;
	}
}
function ln(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Be(), sn(o, null, 10, [
				e,
				i,
				a
			]), Ve();
			return;
		}
	}
	un(e, r, a, i, s);
}
function un(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var dn = [], fn = -1, pn = [], mn = null, hn = 0, gn = /* @__PURE__ */ Promise.resolve(), _n = null;
function vn(e) {
	let t = _n || gn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function yn(e) {
	let t = fn + 1, n = dn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = dn[r], a = Tn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function bn(e) {
	if (!(e.flags & 1)) {
		let t = Tn(e), n = dn[dn.length - 1];
		!n || !(e.flags & 2) && t >= Tn(n) ? dn.push(e) : dn.splice(yn(t), 0, e), e.flags |= 1, xn();
	}
}
function xn() {
	_n ||= gn.then(En);
}
function Sn(e) {
	if (!d(e)) mn && e.id === -1 ? mn.splice(hn + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) pn.push(e[t]);
	xn();
}
function Cn(e, t, n = fn + 1) {
	for (; n < dn.length; n++) {
		let t = dn[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			dn.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function wn(e) {
	if (pn.length) {
		let e = [...new Set(pn)].sort((e, t) => Tn(e) - Tn(t));
		if (pn.length = 0, mn) {
			for (let t = 0; t < e.length; t++) mn.push(e[t]);
			return;
		}
		for (mn = e, hn = 0; hn < mn.length; hn++) {
			let e = mn[hn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		mn = null, hn = 0;
	}
}
var Tn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function En(e) {
	try {
		for (fn = 0; fn < dn.length; fn++) {
			let e = dn[fn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), sn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; fn < dn.length; fn++) {
			let e = dn[fn];
			e && (e.flags &= -2);
		}
		fn = -1, dn.length = 0, wn(e), _n = null, (dn.length || pn.length) && En(e);
	}
}
var Dn = null, On = null;
function kn(e) {
	let t = Dn;
	return Dn = e, On = e && e.type.__scopeId || null, t;
}
function An(e, t = Dn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Li(-1);
		let i = kn(t), a = Ni.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ni.length; e > a; e--) Fi();
			kn(i), r._d && Li(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function W(e, n) {
	if (Dn === null) return e;
	let r = ga(Dn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && on(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function jn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Be(), cn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ve());
	}
}
function Mn(e, t) {
	if (na) {
		let n = na.provides, r = na.parent && na.parent.provides;
		r === n && (n = na.provides = Object.create(r)), n[e] = t;
	}
}
function Nn(e, t, n = !1) {
	let r = ra();
	if (r || Br) {
		let i = Br ? Br._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Pn = /* @__PURE__ */ Symbol.for("v-scx"), Fn = () => Nn(Pn);
function In(e, t, n) {
	return Ln(e, t, n);
}
function Ln(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (la) {
		if (c === "sync") {
			let e = Fn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = na;
	u.call = (e, t, n) => cn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		_i(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : bn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = an(e, n, u);
	return la && (f ? f.push(h) : d && h()), h;
}
function Rn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? zn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = oa(this), s = Ln(i, a.bind(r), n);
	return o(), s;
}
function zn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Bn = /* @__PURE__ */ Symbol("_vte"), Vn = (e) => e.__isTeleport, Hn = /* @__PURE__ */ Symbol("_leaveCb");
function Un(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ji) {
			t = n;
			break;
		}
	}
	return t;
}
function Wn(e) {
	if (!$n(e)) return Vn(e.type) && e.children ? Un(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Gn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Gn(Vn(n.type) && Wn(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Kn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function qn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Jn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Yn = /* @__PURE__ */ new WeakMap();
function Xn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Xn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (Qn(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Xn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? ga(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ B(v), b = v === t ? i : (e) => !Jn(_, e) && u(y, e), x = (e, t) => !(t && Jn(_, t));
	if (m != null && m !== p) {
		if (Zn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ V(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) sn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ V(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), Yn.delete(e);
				};
				t.id = -1, Yn.set(e, t), _i(t, r);
			} else Zn(e), i();
		}
	}
}
function Zn(e) {
	let t = Yn.get(e);
	t && (t.flags |= 8, Yn.delete(e));
}
ae().requestIdleCallback, ae().cancelIdleCallback;
var Qn = (e) => !!e.type.__asyncLoader, $n = (e) => e.type.__isKeepAlive;
function er(e, t) {
	nr(e, "a", t);
}
function tr(e, t) {
	nr(e, "da", t);
}
function nr(e, t, n = na) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ir(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) $n(e.parent.vnode) && rr(r, t, n, e), e = e.parent;
	}
}
function rr(e, t, n, r) {
	let i = ir(t, e, r, !0);
	dr(() => {
		c(r[t], i);
	}, n);
}
function ir(e, t, n = na, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Be();
			let i = oa(n), a = cn(t, n, e, r);
			return i(), Ve(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var ar = (e) => (t, n = na) => {
	(!la || e === "sp") && ir(e, (...e) => t(...e), n);
}, or = ar("bm"), sr = ar("m"), cr = ar("bu"), lr = ar("u"), ur = ar("bum"), dr = ar("um"), fr = ar("sp"), pr = ar("rtg"), mr = ar("rtc");
function hr(e, t = na) {
	ir("ec", e, t);
}
var gr = /* @__PURE__ */ Symbol.for("v-ndc");
function G(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ It(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Rt(e), s = /* @__PURE__ */ Lt(e), e = tt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Ht(Vt(e[n])) : Vt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (v(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
var _r = (e) => e ? ca(e) ? ga(e) : _r(e.parent) : null, vr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => _r(e.parent),
	$root: (e) => _r(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Dr(e),
	$forceUpdate: (e) => e.f ||= () => {
		bn(e.update);
	},
	$nextTick: (e) => e.n ||= vn.bind(e.proxy),
	$watch: (e) => Rn.bind(e)
}), yr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), br = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (yr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Sr && (s[n] = 0);
		}
		let d = vr[n], f, p;
		if (d) return n === "$attrs" && Ze(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return yr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || yr(n, c) || u(o, c) || u(i, c) || u(vr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function xr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Sr = !0;
function Cr(e) {
	let t = Dr(e), n = e.proxy, i = e.ctx;
	Sr = !1, t.beforeCreate && Tr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: E, renderTriggered: ee, errorCaptured: D, serverPrefetch: te, expose: O, inheritAttrs: ne, components: re, directives: k, filters: ie } = t;
	if (u && wr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ z(t));
	}
	if (Sr = !0, o) for (let e in o) {
		let t = o[e], a = va({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Er(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Mn(t, e[t]);
		});
	}
	f && Tr(f, e, "c");
	function A(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (A(or, p), A(sr, m), A(cr, g), A(lr, _), A(er, y), A(tr, b), A(hr, D), A(mr, E), A(pr, ee), A(ur, S), A(dr, w), A(fr, te), d(O)) {
		if (O.length) {
			let t = e.exposed ||= {};
			O.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	T && e.render === r && (e.render = T), ne != null && (e.inheritAttrs = ne), re && (e.components = re), k && (e.directives = k), te && qn(e);
}
function wr(e, t, n = r) {
	d(e) && (e = Mr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Nn(r.from || n, r.default, !0) : Nn(r.from || n) : Nn(r), /* @__PURE__ */ V(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Tr(e, t, n) {
	cn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Er(e, t, n, r) {
	let i = r.includes(".") ? zn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && In(i, n);
	} else if (h(e)) In(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Er(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && In(i, r, e);
		}
	}
}
function Dr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Or(c, e, o, !0)), Or(c, t, o)), v(t) && a.set(t, c), c;
}
function Or(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Or(e, a, n, !0), i && i.forEach((t) => Or(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = kr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var kr = {
	data: Ar,
	props: Fr,
	emits: Fr,
	methods: Pr,
	computed: Pr,
	beforeCreate: Nr,
	created: Nr,
	beforeMount: Nr,
	mounted: Nr,
	beforeUpdate: Nr,
	updated: Nr,
	beforeDestroy: Nr,
	beforeUnmount: Nr,
	destroyed: Nr,
	unmounted: Nr,
	activated: Nr,
	deactivated: Nr,
	errorCaptured: Nr,
	serverPrefetch: Nr,
	components: Pr,
	directives: Pr,
	watch: Ir,
	provide: Ar,
	inject: jr
};
function Ar(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function jr(e, t) {
	return Pr(Mr(e), Mr(t));
}
function Mr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Nr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Pr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), xr(e), xr(t ?? {})) : t;
}
function Ir(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Nr(e[r], t[r]);
	return n;
}
function Lr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Rr = 0;
function zr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Lr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Rr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ba,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || X(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, ga(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (cn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Br;
				Br = l;
				try {
					return e();
				} finally {
					Br = t;
				}
			}
		};
		return l;
	};
}
var Br = null, Vr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${D(t)}Modifiers`] || e[`${O(t)}Modifiers`];
function Hr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Vr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(j)));
	let c, l = i[c = re(n)] || i[c = re(D(n))];
	!l && o && (l = i[c = re(O(n))]), l && cn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, cn(u, e, 6, a);
	}
}
var Ur = /* @__PURE__ */ new WeakMap();
function Wr(e, t, n = !1) {
	let r = n ? Ur : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Wr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Gr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, O(t)) || u(e, t));
}
function Kr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = kn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = Ji(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = Ji(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : qr(c);
		}
	} catch (t) {
		Ni.length = 0, ln(t, e, 1), v = X(ji);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Jr(y, a)), b = Ki(b, y, !1, !0));
	}
	return n.dirs && (b = Ki(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Gn(Vn(b.type) && Wn(b) || b, n.transition), v = b, kn(_), v;
}
var qr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Jr = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Yr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Xr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Zr(o, r, n) && !Gr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Xr(r, o, l) : !!o;
	return !1;
}
function Xr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Zr(t, e, a) && !Gr(n, a)) return !0;
	}
	return !1;
}
function Zr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !ge(r, i) : r !== i;
}
function Qr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var $r = {}, ei = () => Object.create($r), ti = (e) => Object.getPrototypeOf(e) === $r;
function ni(e, t, n, r = !1) {
	let i = {}, a = ei();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ii(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Nt(i) : e.type.props ? i : a, e.attrs = a;
}
function ri(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Gr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = D(o);
						i[t] = ai(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ii(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = O(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ai(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && Qe(e.attrs, "set", "");
}
function ii(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (T(t)) continue;
		let l = n[t], d;
		a && u(a, d = D(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Gr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ B(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = ai(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function ai(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = oa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === O(n)) && (r = !0));
	}
	return r;
}
var oi = /* @__PURE__ */ new WeakMap();
function si(e, r, i = !1) {
	let a = i ? oi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = si(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = D(c[e]);
		ci(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = D(e);
		if (ci(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function ci(e) {
	return e[0] !== "$" && !T(e);
}
var li = (e) => e === "_" || e === "_ctx" || e === "$stable", ui = (e) => d(e) ? e.map(Ji) : [Ji(e)], di = (e, t, n) => {
	if (t._n) return t;
	let r = An((...e) => ui(t(...e)), n);
	return r._c = !1, r;
}, fi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (li(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = di(n, i, r);
		else if (i != null) {
			let e = ui(i);
			t[n] = () => e;
		}
	}
}, pi = (e, t) => {
	let n = ui(t);
	e.slots.default = () => n;
}, mi = (e, t, n) => {
	for (let r in t) (n || !li(r)) && (e[r] = t[r]);
}, hi = (e, t, n) => {
	let r = e.slots = ei();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (mi(r, t, n), n && A(r, "_", e, !0)) : fi(t, r);
	} else t && pi(e, t);
}, gi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : mi(a, n, r) : (o = !n.$stable, fi(n, a)), s = n;
	} else n && (pi(e, n), s = { default: 1 });
	if (o) for (let e in a) !li(e) && s[e] == null && delete a[e];
}, _i = ki;
function vi(e) {
	return yi(e);
}
function yi(e, i) {
	let a = ae();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Vi(e, t) && (i = pe(e), N(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ai:
				y(e, t, r, i);
				break;
			case ji:
				b(e, t, r, i);
				break;
			case Mi:
				e ?? x(t, r, i, s);
				break;
			case K:
				re(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? k(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, ge);
		}
		d != null && a ? Xn(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Xn(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) E(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, E = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, bi(e, a), s, u), _ && jn(e, null, r, "created"), ee(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !T(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Qi(f, r, e);
		}
		_ && jn(e, null, r, "beforeMount");
		let v = Si(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && _i(() => {
			try {
				f && Qi(f, r, e), v && g.enter(d), _ && jn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ee = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Oi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ee(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Yi(e[l]) : Ji(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, te = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && xi(r, !1), (g = h.onVnodeBeforeUpdate) && Qi(g, r, n, e), f && jn(n, e, r, "beforeUpdate"), r && xi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? O(e.dynamicChildren, d, l, r, i, bi(n, a), o) : s || se(e, n, l, null, r, i, bi(n, a), o, !1), u > 0) {
			if (u & 16) ne(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ne(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && _i(() => {
			g && Qi(g, r, n, e), f && jn(n, e, r, "updated");
		}, i);
	}, O = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === K || !Vi(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, ne = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !T(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (T(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, re = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (O(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ci(e, t, !0)) : se(e, t, n, f, i, a, s, c, l);
	}, k = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : A(t, n, r, i, a, o, c) : j(e, t, c);
	}, A = (e, t, n, r, i, a, o) => {
		let s = e.component = ta(e, r, i);
		if ($n(e) && (s.ctx.renderer = ge), ua(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, M, o), !e.el) {
				let r = s.subTree = X(ji);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else M(s, e, t, n, i, a, o);
	}, j = (e, t, n) => {
		let r = t.component = e.component;
		if (Yr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, oe(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, M = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ti(e);
					if (n) {
						t && (t.el = c.el, oe(e, t, o)), n.asyncDep.then(() => {
							_i(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				xi(e, !1), t ? (t.el = c.el, oe(e, t, o)) : t = c, n && ie(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Qi(d, s, t, c), xi(e, !0);
				let f = Kr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), pe(p), e, i, a), t.el = f.el, u === null && Qr(e, f.el), r && _i(r, i), (d = t.props && t.props.onVnodeUpdated) && _i(() => Qi(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Qn(t);
				if (xi(e, !1), l && ie(l), !m && (o = c && c.onVnodeBeforeMount) && Qi(o, d, t), xi(e, !0), s && ve) {
					let t = () => {
						e.subTree = Kr(e), ve(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Kr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && _i(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					_i(() => Qi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Qn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && _i(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Te(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => bn(u), xi(e, !0), l();
	}, oe = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ri(e, t.props, r, n), gi(e, t.children, n), Be(), Cn(e), Ve();
	}, se = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				le(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				ce(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && F(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? le(l, d, n, r, i, a, o, s, c) : F(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, ce = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Yi(t[p]) : Ji(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? F(e, a, o, !0, !1, f) : D(t, r, i, a, o, s, c, l, f);
	}, le = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Yi(t[u]) : Ji(t[u]);
			if (Vi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Yi(t[p]) : Ji(t[p]);
			if (Vi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Yi(t[u]) : Ji(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) N(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Yi(t[u]) : Ji(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					N(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Vi(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? N(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? wi(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Di(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? ue(n, r, p, 2) : _--);
			}
		}
	}, ue = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ue(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, ge);
			return;
		}
		if (c === K) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) ue(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Mi) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Hn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), _i(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Hn];
					a._isLeaving && a[Hn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, N = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Be(), Xn(s, null, n, e, !0), Ve()), p != null && (!e.ctx || e.ctx === t) && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Qn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Qi(_, t, e), u & 6) fe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && jn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ge, r) : l && !l.hasOnce && (a !== K || d > 0 && d & 64) ? F(l, t, n, !1, !0) : (a === K && d & 384 || !i && u & 16) && F(c, t, n), r && de(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && _i(() => {
			_ && Qi(_, t, e), h && jn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, de = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === K) {
			P(n, r);
			return;
		}
		if (t === Mi) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, P = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, fe = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ei(c), Ei(l), r && ie(r), i.stop(), a ? (a.flags |= 8, N(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, N(o, e, t, n)), s && _i(s, t), _i(() => {
			e.isUnmounted = !0;
		}, t);
	}, F = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) N(e[o], t, n, r, i);
	}, pe = (e) => {
		if (e.shapeFlag & 6) return pe(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Bn];
		return n ? h(n) : t;
	}, me = !1, he = (e, t, n) => {
		let r;
		e == null ? t._vnode && (N(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, me ||= (me = !0, Cn(r), wn(), !1);
	}, ge = {
		p: v,
		um: N,
		m: ue,
		r: de,
		mt: A,
		mc: D,
		pc: se,
		pbc: O,
		n: pe,
		o: e
	}, _e, ve;
	return i && ([_e, ve] = i(ge)), {
		render: he,
		hydrate: _e,
		createApp: zr(he, _e)
	};
}
function bi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function xi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Si(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ci(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Yi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ci(t, a)), a.type === Ai && (a.patchFlag === -1 && (a = i[e] = Yi(a)), a.el = t.el), a.type === ji && !a.el && (a.el = t.el);
	}
}
function wi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Ti(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ti(t);
}
function Ei(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Di(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Di(t.subTree) : null;
}
var Oi = (e) => e.__isSuspense;
function ki(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Sn(e);
}
var K = /* @__PURE__ */ Symbol.for("v-fgt"), Ai = /* @__PURE__ */ Symbol.for("v-txt"), ji = /* @__PURE__ */ Symbol.for("v-cmt"), Mi = /* @__PURE__ */ Symbol.for("v-stc"), Ni = [], Pi = null;
function q(e = !1) {
	Ni.push(Pi = e ? null : []);
}
function Fi() {
	Ni.pop(), Pi = Ni[Ni.length - 1] || null;
}
var Ii = 1;
function Li(e, t = !1) {
	Ii += e, e < 0 && Pi && t && (Pi.hasOnce = !0);
}
function Ri(e) {
	return e.dynamicChildren = Ii > 0 ? Pi || n : null, Fi(), Ii > 0 && Pi && Pi.push(e), e;
}
function J(e, t, n, r, i, a) {
	return Ri(Y(e, t, n, r, i, a, !0));
}
function zi(e, t, n, r, i) {
	return Ri(X(e, t, n, r, i, !0));
}
function Bi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Vi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Hi = ({ key: e }) => e ?? null, Ui = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ V(e) || h(e) ? {
	i: Dn,
	r: e,
	k: t,
	f: !!n
} : e);
function Y(e, t = null, n = null, r = 0, i = null, a = e === K ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Hi(t),
		ref: t && Ui(t),
		scopeId: On,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: Dn
	};
	return s ? (Xi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Ii > 0 && !o && Pi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Pi.push(c), c;
}
var X = Wi;
function Wi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === gr) && (e = ji), Bi(e)) {
		let r = Ki(e, t, !0);
		return n && Xi(r, n), Ii > 0 && !a && Pi && (r.shapeFlag & 6 ? Pi[Pi.indexOf(e)] = r : Pi.push(r)), r.patchFlag = -2, r;
	}
	if (_a(e) && (e = e.__vccOpts), t) {
		t = Gi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = N(e)), v(n) && (/* @__PURE__ */ zt(n) && !d(n) && (n = s({}, n)), t.style = oe(n));
	}
	let o = g(e) ? 1 : Oi(e) ? 128 : Vn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return Y(e, t, n, r, i, o, a, !0);
}
function Gi(e) {
	return e ? /* @__PURE__ */ zt(e) || ti(e) ? s({}, e) : e : null;
}
function Ki(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Zi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Hi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Ui(t)) : [a, Ui(t)] : Ui(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== K ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Ki(e.ssContent),
		ssFallback: e.ssFallback && Ki(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Gn(u, c.clone(u)), u;
}
function Z(e = " ", t = 0) {
	return X(Ai, null, e, t);
}
function qi(e, t) {
	let n = X(Mi, null, e);
	return n.staticCount = t, n;
}
function Q(e = "", t = !1) {
	return t ? (q(), zi(ji, null, e)) : X(ji, null, e);
}
function Ji(e) {
	return e == null || typeof e == "boolean" ? X(ji) : d(e) ? X(K, null, e.slice()) : Bi(e) ? Yi(e) : X(Ai, null, String(e));
}
function Yi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ki(e);
}
function Xi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Xi(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !ti(t) ? t._ctx = Dn : r === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			Xi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Dn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Z(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Zi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = N([t.class, r.class]));
		else if (e === "style") t.style = oe([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Qi(e, t, n, r = null) {
	cn(e, t, 7, [n, r]);
}
var $i = Lr(), ea = 0;
function ta(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || $i, o = {
		uid: ea++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new xe(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: si(i, a),
		emitsOptions: Wr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Hr.bind(null, o), e.ce && e.ce(o), o;
}
var na = null, ra = () => na || Dn, ia, aa;
{
	let e = ae(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ia = t("__VUE_INSTANCE_SETTERS__", (e) => na = e), aa = t("__VUE_SSR_SETTERS__", (e) => la = e);
}
var oa = (e) => {
	let t = na;
	return ia(e), e.scope.on(), () => {
		e.scope.off(), ia(t);
	};
}, sa = () => {
	na && na.scope.off(), ia(null);
};
function ca(e) {
	return e.vnode.shapeFlag & 4;
}
var la = !1;
function ua(e, t = !1, n = !1) {
	t && aa(t);
	let { props: r, children: i } = e.vnode, a = ca(e);
	ni(e, r, a, t), hi(e, i, n || t);
	let o = a ? da(e, t) : void 0;
	return t && aa(!1), o;
}
function da(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, br);
	let { setup: r } = n;
	if (r) {
		Be();
		let n = e.setupContext = r.length > 1 ? ha(e) : null, i = oa(e), a = sn(r, e, 0, [e.props, n]), o = y(a);
		if (Ve(), i(), (o || e.sp) && !Qn(e) && qn(e), o) {
			if (a.then(sa, sa), t) return a.then((n) => {
				aa(!0);
				try {
					fa(e, n, t);
				} finally {
					aa(!1);
				}
			}).catch((t) => {
				ln(t, e, 0);
			});
			e.asyncDep = a;
		} else fa(e, a, t);
	} else pa(e, t);
}
function fa(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = qt(t)), pa(e, n);
}
function pa(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = oa(e);
		Be();
		try {
			Cr(e);
		} finally {
			Ve(), t();
		}
	}
}
var ma = { get(e, t) {
	return Ze(e, "get", ""), e[t];
} };
function ha(e) {
	return {
		attrs: new Proxy(e.attrs, ma),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ga(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(qt(Bt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in vr) return vr[n](e);
		},
		has(e, t) {
			return t in e || t in vr;
		}
	}) : e.proxy;
}
function _a(e) {
	return h(e) && "__vccOpts" in e;
}
var va = (e, t) => /* @__PURE__ */ $t(e, t, la);
function ya(e, t, n) {
	try {
		Li(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? Bi(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Bi(n) && (n = [n]), X(e, t, n));
	} finally {
		Li(1);
	}
}
var ba = "3.5.43", xa = void 0, Sa = typeof window < "u" && window.trustedTypes;
if (Sa) try {
	xa = /* @__PURE__ */ Sa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Ca = xa ? (e) => xa.createHTML(e) : (e) => e, wa = "http://www.w3.org/2000/svg", Ta = "http://www.w3.org/1998/Math/MathML", Ea = typeof document < "u" ? document : null, Da = Ea && /* @__PURE__ */ Ea.createElement("template"), Oa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ea.createElementNS(wa, e) : t === "mathml" ? Ea.createElementNS(Ta, e) : n ? Ea.createElement(e, { is: n }) : Ea.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ea.createTextNode(e),
	createComment: (e) => Ea.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ea.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Da.innerHTML = Ca(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Da.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, ka = /* @__PURE__ */ Symbol("_vtc");
function Aa(e, t, n) {
	let r = e[ka];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var ja = /* @__PURE__ */ Symbol("_vod"), Ma = /* @__PURE__ */ Symbol("_vsh"), Na = /* @__PURE__ */ Symbol(""), Pa = /(?:^|;)\s*display\s*:/;
function Fa(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? La(r, t, "");
			}
			else for (let e in t) n[e] ?? La(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? La(r, i, "") : Va(e, i, !g(t) && t ? t[i] : void 0, o) || La(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Na];
			e && (n += ";" + e), r.cssText = n, a = Pa.test(n);
		}
	} else t && e.removeAttribute("style");
	ja in e && (e[ja] = a ? r.display : "", e[Ma] && (r.display = "none"));
}
var Ia = /\s*!important$/;
function La(e, t, n) {
	if (d(n)) n.forEach((n) => La(e, t, n));
	else if (n ??= "", t.startsWith("--")) Ia.test(n) ? e.setProperty(t, n.replace(Ia, ""), "important") : e.setProperty(t, n);
	else {
		let r = Ba(e, t);
		Ia.test(n) ? e.setProperty(O(r), n.replace(Ia, ""), "important") : e[r] = n;
	}
}
var Ra = [
	"Webkit",
	"Moz",
	"ms"
], za = {};
function Ba(e, t) {
	let n = za[t];
	if (n) return n;
	let r = D(t);
	if (r !== "filter" && r in e) return za[t] = r;
	r = ne(r);
	for (let n = 0; n < Ra.length; n++) {
		let i = Ra[n] + r;
		if (i in e) return za[t] = i;
	}
	return t;
}
function Va(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ha = "http://www.w3.org/1999/xlink";
function Ua(e, t, n, r, i, a = P(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ha, t.slice(6, t.length)) : e.setAttributeNS(Ha, t, n) : n == null || a && !fe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Wa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Ca(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = fe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Ga(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ka(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var qa = /* @__PURE__ */ Symbol("_vei");
function Ja(e, t, n, r, i = null) {
	let a = e[qa] || (e[qa] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Za(t);
		r ? Ga(e, n, a[t] = to(r, i), s) : o && (Ka(e, n, o, s), a[t] = void 0);
	}
}
var Ya = /(Once|Passive|Capture)$/, Xa = /^on:?(?:Once|Passive|Capture)$/;
function Za(e) {
	let t, n;
	for (; (n = e.match(Ya)) && !Xa.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : O(e.slice(2)), t];
}
var Qa = 0, $a = /* @__PURE__ */ Promise.resolve(), eo = () => Qa ||= ($a.then(() => Qa = 0), Date.now());
function to(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && cn(e, t, 5, a);
			}
		} else cn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = eo(), n;
}
var no = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ro = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Aa(e, r, c) : t === "style" ? Fa(e, n, r) : a(t) ? o(t) || Ja(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : io(e, t, r, c)) ? (Wa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ua(e, t, r, c, s, t !== "value")) : e._isVueCE && (ao(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Wa(e, D(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ua(e, t, r, c));
};
function io(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && no(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return no(t) && g(n) ? !1 : t in e;
}
function ao(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = D(t);
	return Array.isArray(n) ? n.some((e) => D(e) === r) : Object.keys(n).some((e) => D(e) === r);
}
var oo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => ie(t, e) : t;
};
function so(e) {
	e.target.composing = !0;
}
function co(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var lo = /* @__PURE__ */ Symbol("_assign"), uo = /* @__PURE__ */ Symbol("_initialValue");
function fo(e, t, n) {
	return t && (e = e.trim()), n && (e = j(e)), e;
}
var po = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[uo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[uo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[lo] = oo(i);
		let a = r || i.props && i.props.type === "number";
		Ga(e, t ? "change" : "input", (t) => {
			t.target.composing || e[lo](fo(e.value, n, a));
		}), (n || a) && Ga(e, "change", () => {
			e.value = fo(e.value, n, a);
		}), t || (Ga(e, "compositionstart", so), Ga(e, "compositionend", co), Ga(e, "change", co));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[uo];
		delete e[uo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[lo](fo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[lo] = oo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? j(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, mo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Ga(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? j(_o(e)) : _o(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[lo](i);
			} finally {
				vn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[lo] = oo(r);
	},
	mounted(e, { value: t }) {
		go(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[lo] = oo(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ho(t, n[1], n[0])) && go(e, t);
	}
};
function ho(e, t, n) {
	if (!n || d(e)) return ge(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function go(e, t) {
	let n = e.multiple, r = d(t);
	if (!n || r || p(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = _o(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : _e(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (ge(_o(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function _o(e) {
	return "_value" in e ? e._value : e.value;
}
var vo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], yo = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => vo.some((n) => e[`${n}Key`] && !t.includes(n))
}, bo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = yo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, xo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, So = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = O(n.key);
		if (t.some((e) => e === r || xo[e] === r)) return e(n);
	}));
}, Co = /* @__PURE__ */ s({ patchProp: ro }, Oa), wo;
function To() {
	return wo ||= vi(Co);
}
var Eo = ((...e) => {
	let t = To().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Oo(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Do(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Do(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Oo(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/session-expiry.ts
function ko(e) {
	try {
		let t = e.split(".")[1];
		if (!t) return;
		let n = atob(t.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(t.length / 4) * 4, "=")), r = JSON.parse(n).exp;
		return typeof r == "number" && Number.isFinite(r) ? r * 1e3 : void 0;
	} catch {
		return;
	}
}
var Ao = class {
	warnSeconds;
	hooks;
	timer;
	current;
	warned = !1;
	constructor(e, t) {
		this.warnSeconds = e, this.hooks = t;
	}
	observe(e) {
		let t = ko(e);
		if (t === void 0 || t === this.current) return;
		this.warned && this.hooks.onRenewed(), this.warned = !1, this.current = t, this.clear();
		let n = t - this.warnSeconds * 1e3 - Date.now();
		n <= 0 ? this.fire(t) : this.timer = setTimeout(() => this.fire(t), n);
	}
	dispose() {
		this.clear();
	}
	fire(e) {
		this.warned = !0, this.hooks.onExpiring(e);
	}
	clear() {
		this.timer !== void 0 && clearTimeout(this.timer), this.timer = void 0;
	}
};
//#endregion
//#region src/security-api.ts
function jo(e) {
	return e === "MFA_REQUIRED" ? "Esta operación requiere verificación en dos pasos. Vuelva a autenticarse con su segundo factor e inténtelo de nuevo." : e === "NOT_AUTHORIZED_TO_ADMINISTER_TENANT_CATALOG" ? "Para definir o modificar roles y perfiles de todo el inquilino debe administrar al menos una aplicación." : "No tiene permisos para administrar la seguridad de esta aplicación.";
}
var Mo = { PROTECTED_ROLE: "El rol ADMIN administra la aplicación y no se puede modificar ni eliminar." }, No = /* @__PURE__ */ new Map(), Po = /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi;
function Fo(e, t = 0) {
	if (!e || typeof e != "object" || t > 6) return;
	if (Array.isArray(e)) {
		for (let n of e) Fo(n, t + 1);
		return;
	}
	let n = e;
	if (typeof n.id == "string") {
		let e = typeof n.name == "string" && n.name ? n.name : typeof n.email == "string" && n.email ? n.email : typeof n.path == "string" && typeof n.method == "string" ? `${n.method} ${n.path}` : void 0;
		e && (No.size > 5e3 && No.clear(), No.set(n.id.toLowerCase(), e));
	}
	for (let e of Object.values(n)) e && typeof e == "object" && Fo(e, t + 1);
}
function Io(e) {
	if (e) return e.replace(Po, (e) => No.get(e.toLowerCase()) ?? "").replace(/\s{2,}/g, " ").trim() || void 0;
}
var Lo = class extends Error {
	status;
	code;
	fields;
	constructor(e, t, n = "No fue posible completar la solicitud.", r = []) {
		super(n), this.status = e, this.code = t, this.fields = r, this.name = "ApiError";
	}
}, Ro = class {
	options;
	baseUrl;
	expiry;
	constructor(e, t = {}) {
		if (this.options = e, this.baseUrl = e.apiBaseUrl.replace(/\/$/, ""), e.getAccessToken) {
			let n = e.sessionWarningSeconds ?? 60;
			this.expiry = new Ao(n, {
				onExpiring: (n) => {
					t.onExpiring?.(n);
					try {
						e.onSessionExpiring?.({ secondsLeft: Math.max(0, Math.round((n - Date.now()) / 1e3)) });
					} catch {}
				},
				onRenewed: () => t.onRenewed?.()
			});
		}
	}
	dispose() {
		this.expiry?.dispose();
	}
	async resolveApplicationId(e) {
		if (this.options.applicationId) return this.options.applicationId;
		let t = this.options.applicationName, n = (await this.request(`/api/v1/applications?name=${encodeURIComponent(t)}&limit=100`, { signal: e })).content.filter((e) => e.name === t);
		if (n.length !== 1) throw Error(n.length ? "El nombre de aplicación no es único." : "No existe la aplicación en este tenant.");
		return n[0].id;
	}
	getSummary(e, t) {
		return this.request(this.security(e, "summary"), { signal: t });
	}
	getResources(e, t, n) {
		return this.page(e, "resources", t, n);
	}
	getRoles(e, t, n) {
		return this.page(e, "roles", t, n);
	}
	getProfiles(e, t, n) {
		return this.page(e, "profiles", t, n);
	}
	getAdministrators(e, t, n) {
		return this.page(e, "administrators", t, n);
	}
	getRoleAssignments(e, t, n) {
		return this.page(e, "role-assignments", t, n);
	}
	getProfileAssignments(e, t, n) {
		return this.page(e, "profile-assignments", t, n);
	}
	getUserAssignments(e, t, n, r) {
		let i = new URLSearchParams({
			page: String(n.page ?? 0),
			size: String(n.size ?? 20)
		});
		return this.request(`${this.security(e, `users/${encodeURIComponent(t)}/assignments`)}?${i}`, { signal: r });
	}
	getAssignmentsForRole(e, t, n, r) {
		return this.page(e, `roles/${encodeURIComponent(t)}/assignments`, n, r);
	}
	getAssignmentsForProfile(e, t, n, r) {
		return this.page(e, `profiles/${encodeURIComponent(t)}/assignments`, n, r);
	}
	getApplications(e, t) {
		return this.request(`/api/v1/applications?${new URLSearchParams({
			page: String(e.page ?? 0),
			size: String(e.size ?? 100)
		})}`, { signal: t });
	}
	getServiceIdentities(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-identities`, { signal: t });
	}
	createServiceIdentity(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-identities`, {
			method: "POST",
			body: { name: t }
		});
	}
	getServiceTechnicalRoles(e, t, n) {
		return this.page(e, "service-technical-roles", t, n);
	}
	getServiceTechnicalRoleResources(e, t, n, r) {
		return this.page(e, `service-technical-roles/${encodeURIComponent(t)}/resources`, n, r);
	}
	createServiceTechnicalRole(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-technical-roles`, {
			method: "POST",
			body: t
		});
	}
	addServiceTechnicalRoleResource(e, t, n) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-technical-roles/${encodeURIComponent(t)}/resources`, {
			method: "POST",
			body: { resourceId: n }
		});
	}
	removeServiceTechnicalRoleResource(e, t, n) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-technical-roles/${encodeURIComponent(t)}/resources/${encodeURIComponent(n)}`, { method: "DELETE" });
	}
	getServiceAccessGrants(e, t, n) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-identities/${encodeURIComponent(t)}/access-requests`, { signal: n });
	}
	getReceivedServiceAccessGrants(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-access-requests`, { signal: t });
	}
	requestServiceAccess(e, t, n) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-identities/${encodeURIComponent(t)}/access-requests`, {
			method: "POST",
			body: n
		});
	}
	decideServiceAccess(e, t, n) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-access-requests/${encodeURIComponent(t)}/decision`, {
			method: "POST",
			body: { approve: n }
		});
	}
	revokeServiceAccess(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/service-access-requests/${encodeURIComponent(t)}/revocation`, { method: "POST" });
	}
	getRoleResources(e, t, n, r) {
		return this.page(e, `roles/${encodeURIComponent(t)}/resources`, n, r);
	}
	getProfileRoles(e, t, n, r) {
		return this.page(e, `profiles/${encodeURIComponent(t)}/roles`, n, r);
	}
	searchUsers(e, t, n, r) {
		return this.page(e, `users?query=${encodeURIComponent(t)}`, n, r);
	}
	addAdministrator(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/administrators`, {
			method: "POST",
			body: { userId: t }
		});
	}
	updateApplication(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}`, {
			method: "PATCH",
			body: t
		});
	}
	removeAdministrator(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/administrators/${encodeURIComponent(t)}`, { method: "DELETE" });
	}
	createResource(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/resources`, {
			method: "POST",
			body: t
		});
	}
	createRole(e, t) {
		return this.request("/api/v1/roles", {
			method: "POST",
			body: {
				name: t,
				scope: "APPLICATION",
				applicationId: e
			}
		});
	}
	createProfile(e, t) {
		return this.request("/api/v1/profiles", {
			method: "POST",
			body: {
				name: t,
				scope: "APPLICATION",
				applicationId: e
			}
		});
	}
	assignAccess(e, t, n, r) {
		return this.request(`/api/v1/${t}s/${encodeURIComponent(n)}/assignments`, {
			method: "POST",
			body: {
				userId: r,
				applicationId: e
			}
		});
	}
	linkRoleResource(e, t) {
		return this.request(`/api/v1/roles/${encodeURIComponent(e)}/resources`, {
			method: "POST",
			body: { resourceId: t }
		});
	}
	linkProfileRole(e, t) {
		return this.request(`/api/v1/profiles/${encodeURIComponent(e)}/roles`, {
			method: "POST",
			body: { roleId: t }
		});
	}
	updateResource(e, t, n) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/resources/${encodeURIComponent(t)}`, {
			method: "PATCH",
			body: n
		});
	}
	deleteResource(e, t) {
		return this.request(`/api/v1/applications/${encodeURIComponent(e)}/resources/${encodeURIComponent(t)}`, { method: "DELETE" });
	}
	updateRole(e, t) {
		return this.request(`/api/v1/roles/${encodeURIComponent(e)}`, {
			method: "PATCH",
			body: t
		});
	}
	deleteRole(e) {
		return this.request(`/api/v1/roles/${encodeURIComponent(e)}`, { method: "DELETE" });
	}
	unlinkRoleResource(e, t) {
		return this.request(`/api/v1/roles/${encodeURIComponent(e)}/resources/${encodeURIComponent(t)}`, { method: "DELETE" });
	}
	updateProfile(e, t) {
		return this.request(`/api/v1/profiles/${encodeURIComponent(e)}`, {
			method: "PATCH",
			body: t
		});
	}
	deleteProfile(e) {
		return this.request(`/api/v1/profiles/${encodeURIComponent(e)}`, { method: "DELETE" });
	}
	unlinkProfileRole(e, t) {
		return this.request(`/api/v1/profiles/${encodeURIComponent(e)}/roles/${encodeURIComponent(t)}`, { method: "DELETE" });
	}
	revokeRoleAssignment(e, t) {
		return this.request(`/api/v1/roles/${encodeURIComponent(e)}/assignments/${encodeURIComponent(t)}`, { method: "DELETE" });
	}
	revokeProfileAssignment(e, t) {
		return this.request(`/api/v1/profiles/${encodeURIComponent(e)}/assignments/${encodeURIComponent(t)}`, { method: "DELETE" });
	}
	security(e, t) {
		return `/api/v1/applications/${encodeURIComponent(e)}/security/${t}`;
	}
	page(e, t, n, r) {
		let i = new URLSearchParams();
		return n.offset !== void 0 || n.limit !== void 0 ? (i.set("offset", String(n.offset ?? 0)), i.set("limit", String(n.limit ?? 20))) : (i.set("page", String(n.page ?? 0)), i.set("size", String(n.size ?? 20))), this.request(`${this.security(e, t)}${t.includes("?") ? "&" : "?"}${i}`, { signal: r });
	}
	async accessToken(e) {
		let t;
		try {
			t = await e();
		} catch {
			t = void 0;
		}
		if (t) return this.expiry?.observe(t), t;
		let n = new Lo(401, "UNAUTHENTICATED", "No hay una sesión vigente. Inicie sesión de nuevo.");
		throw this.report(n), n;
	}
	report(e) {
		let t = e.status === 401 ? "unauthenticated" : e.status === 403 && e.code === "MFA_REQUIRED" ? "mfa_required" : e.status === 403 ? "forbidden" : e.status === 429 || e.status === 503 ? "unavailable" : void 0;
		if (t) try {
			this.options.onError?.({
				cause: t,
				status: e.status,
				code: e.code
			});
		} catch {}
	}
	async request(e, t = {}) {
		let n = new Headers(t.headers);
		n.set("Accept", "application/json");
		let r = !!this.options.getAccessToken;
		if (this.options.getAccessToken) {
			let e = await this.accessToken(this.options.getAccessToken);
			n.set("Authorization", `Bearer ${e}`);
		} else {
			let e = document.cookie.split("; ").find((e) => e.startsWith("XSRF-TOKEN="));
			e && t.method && t.method !== "GET" && n.set("X-XSRF-TOKEN", decodeURIComponent(e.slice(11)));
		}
		t.body !== void 0 && n.set("Content-Type", "application/json");
		let i;
		try {
			i = await fetch(`${this.baseUrl}${e}`, {
				...t,
				body: t.body === void 0 ? void 0 : JSON.stringify(t.body),
				credentials: r ? "omit" : "include",
				headers: n
			});
		} catch (e) {
			throw e instanceof DOMException && e.name === "AbortError" ? e : new Lo(0, "NETWORK_ERROR", "No fue posible conectar con el PDP.");
		}
		if (!i.ok) {
			let e = await i.json().catch(() => null), t = i.status === 403 ? jo(e?.code) : i.status === 404 ? "El elemento ya no existe o no pertenece a esta aplicación." : i.status === 409 ? "La operación entra en conflicto con el estado actual." : i.status === 400 ? "Revise los datos ingresados." : i.status === 429 ? "Demasiadas solicitudes. Espere unos segundos e inténtelo de nuevo." : i.status === 503 ? "El servicio no está disponible temporalmente. Inténtelo de nuevo en unos segundos." : `El servicio respondió ${i.status}.`, n = new Lo(i.status, e?.code, i.status === 403 ? t : (e?.code ? Mo[e.code] : void 0) ?? Io(e?.detail ?? e?.message) ?? t, e?.fieldErrors ?? e?.errors ?? []);
			throw this.report(n), n;
		}
		if (i.status === 204) return;
		let a = (await i.json()).data;
		return Fo(a), a;
	}
}, $ = () => ({
	content: [],
	total: 0,
	page: 0,
	limit: 20,
	loading: !1,
	error: null,
	loaded: !1
});
function zo(e) {
	let t = /* @__PURE__ */ H(""), n = /* @__PURE__ */ H(), r = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H(""), a = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ z(/* @__PURE__ */ new Set()), s = /* @__PURE__ */ z($()), c = /* @__PURE__ */ z($()), l = /* @__PURE__ */ z($()), u = /* @__PURE__ */ z($()), d = /* @__PURE__ */ z($()), f = /* @__PURE__ */ z($()), p = /* @__PURE__ */ z($()), m = /* @__PURE__ */ z($()), h = /* @__PURE__ */ z($()), g = /* @__PURE__ */ z($()), _ = /* @__PURE__ */ z($()), v = /* @__PURE__ */ z($()), y = /* @__PURE__ */ z($()), b = /* @__PURE__ */ z($()), x = /* @__PURE__ */ new Map(), S, C = /* @__PURE__ */ H(null), w, T = va(() => (w?.dispose(), w = new Ro(e.value, {
		onExpiring: (e) => {
			C.value = e;
		},
		onRenewed: () => {
			C.value = null;
		}
	}), w)), E = va(() => !!n.value && !r.value), ee = {
		resources: (e, t, n, r, i) => e.getResources(t, {
			page: n,
			size: r
		}, i),
		roles: (e, t, n, r, i) => e.getRoles(t, {
			page: n,
			size: r
		}, i),
		profiles: (e, t, n, r, i) => e.getProfiles(t, {
			page: n,
			size: r
		}, i),
		administrators: (e, t, n, r, i) => e.getAdministrators(t, {
			page: n,
			size: r
		}, i),
		roleAssignments: (e, t, n, r, i) => e.getRoleAssignments(t, {
			page: n,
			size: r
		}, i),
		profileAssignments: (e, t, n, r, i) => e.getProfileAssignments(t, {
			page: n,
			size: r
		}, i)
	}, D = {
		resources: s,
		roles: c,
		profiles: l,
		administrators: u,
		roleAssignments: d,
		profileAssignments: f
	}, te = (e, n, r) => `${t.value}:${e}:${n}:${r}`;
	function O() {
		x.clear(), n.value = void 0;
		for (let e of Object.values(D)) Object.assign(e, $(), { limit: e.limit });
		Object.assign(p, $()), Object.assign(m, $()), Object.assign(h, $()), Object.assign(g, $()), Object.assign(_, $()), Object.assign(v, $()), Object.assign(y, $()), Object.assign(b, $());
	}
	async function ne() {
		S?.abort(), S = new AbortController(), r.value = !0, i.value = "";
		try {
			let e = await T.value.resolveApplicationId(S.signal);
			t.value = e, n.value = await T.value.getSummary(e, S.signal);
		} catch (e) {
			Yo(e) || (i.value = Xo(e));
		} finally {
			r.value = !1;
		}
	}
	async function re(e, n = D[e].page, r = !1) {
		if (!t.value) return;
		let i = D[e], a = te(e, n, i.limit);
		i.abortController?.abort(), i.error = null;
		let o = !r && x.get(a);
		if (o) {
			Jo(i, o);
			return;
		}
		let s = new AbortController();
		i.abortController = s, i.loading = !0;
		try {
			let r = await ee[e](T.value, t.value, n, i.limit, s.signal);
			if (i.abortController !== s) return;
			x.set(a, r), Jo(i, r);
		} catch (e) {
			!Yo(e) && i.abortController === s && (i.error = Xo(e));
		} finally {
			i.abortController === s && (i.loading = !1);
		}
	}
	async function k(e, n = 0, r = !1) {
		if (!t.value) return;
		p.abortController?.abort();
		let i = new AbortController();
		p.abortController = i, p.loading = !0, p.error = null;
		try {
			let a = await T.value.searchUsers(t.value, e.trim(), {
				page: n,
				size: p.limit
			}, i.signal);
			if (p.abortController !== i) return;
			r ? (p.content = [...p.content, ...a.content], p.total = a.total, p.page = a.page, p.limit = a.limit, p.loaded = !0) : Jo(p, a);
		} catch (e) {
			Yo(e) || (p.error = Xo(e));
		} finally {
			p.abortController === i && (p.loading = !1);
		}
	}
	async function ie(e, n = m.page, r = !1) {
		return oe("role-resources", e, m, (r) => T.value.getRoleResources(t.value, e, {
			page: n,
			size: m.limit
		}, r), n, r);
	}
	async function A(e, n = h.page, r = !1) {
		return oe("profile-roles", e, h, (r) => T.value.getProfileRoles(t.value, e, {
			page: n,
			size: h.limit
		}, r), n, r);
	}
	async function j(e, n = _.page, r = !1) {
		if (!t.value) return;
		let i = `${t.value}:${e}:user-assignments:${n}:${_.limit}`;
		_.abortController?.abort();
		let a = r ? void 0 : x.get(i);
		if (a) {
			Jo(_, a.roleAssignments), Jo(v, a.profileAssignments);
			return;
		}
		let o = new AbortController();
		_.abortController = o, v.abortController = o, _.loading = v.loading = !0;
		try {
			let r = await T.value.getUserAssignments(t.value, e, {
				page: n,
				size: _.limit
			}, o.signal);
			if (_.abortController !== o) return;
			x.set(i, r), Jo(_, r.roleAssignments), Jo(v, r.profileAssignments);
		} catch (e) {
			if (!Yo(e)) {
				let t = Xo(e);
				_.error = v.error = t;
			}
		} finally {
			_.abortController === o && (_.loading = v.loading = !1);
		}
	}
	async function M(e, n = y.page, r = !1) {
		return oe("role-assignments", e, y, (r) => T.value.getAssignmentsForRole(t.value, e, {
			page: n,
			size: y.limit
		}, r), n, r);
	}
	async function ae(e, n = b.page, r = !1) {
		return oe("profile-assignments", e, b, (r) => T.value.getAssignmentsForProfile(t.value, e, {
			page: n,
			size: b.limit
		}, r), n, r);
	}
	async function oe(e, n, r, i, a, o) {
		if (!t.value) return;
		let s = `${t.value}:${n}:${e}:${a}:${r.limit}`;
		r.abortController?.abort(), r.error = null;
		let c = o ? void 0 : x.get(s);
		if (c) {
			Jo(r, c);
			return;
		}
		let l = new AbortController();
		r.abortController = l, r.loading = !0;
		try {
			let e = await i(l.signal);
			if (r.abortController !== l) return;
			x.set(s, e), Jo(r, e);
		} catch (e) {
			!Yo(e) && r.abortController === l && (r.error = Xo(e));
		} finally {
			r.abortController === l && (r.loading = !1);
		}
	}
	let se = [
		":user-assignments:",
		":role-assignments:",
		":profile-assignments:"
	];
	function ce(...e) {
		if (e.includes("roleAssignments") || e.includes("profileAssignments")) for (let e of [...x.keys()]) e.startsWith(`${t.value}:`) && se.some((t) => e.includes(t)) && x.delete(e);
		for (let r of e) {
			if (r === "summary") {
				n.value = void 0;
				continue;
			}
			for (let e of x.keys()) e.startsWith(`${t.value}:${r}:`) && x.delete(e);
			D[r].loaded = !1;
		}
	}
	function le(e, n) {
		for (let r of x.keys()) r.startsWith(`${t.value}:${n}:${e}:`) && x.delete(r);
	}
	async function ue() {
		O(), await ne();
	}
	function N(e) {
		return e ? o.has(e) : o.size > 0;
	}
	async function de(e, n, r = "global", s = !1) {
		if (!t.value || o.has(r)) return !1;
		o.add(r), a.value = !0, i.value = "";
		try {
			await e(T.value, t.value), ce(...n);
			let r = n.filter((e) => e !== "summary");
			return await Promise.all(r.map((e) => re(e, D[e].page, !0))), s && await Promise.all(r.filter((e) => D[e].page > 0 && D[e].content.length === 0).map((e) => re(e, D[e].page - 1, !0))), n.includes("summary") && await ne(), !0;
		} catch (e) {
			return i.value = Xo(e), !1;
		} finally {
			o.delete(r), a.value = o.size > 0;
		}
	}
	function P() {
		return t.value;
	}
	async function fe(e) {
		return T.value.getServiceIdentities(P(), e);
	}
	async function F(e) {
		return T.value.createServiceIdentity(P(), e);
	}
	async function pe(e = 0, t) {
		return T.value.getServiceTechnicalRoles(P(), {
			page: e,
			size: 100
		}, t);
	}
	async function me(e, t) {
		return T.value.getServiceTechnicalRoles(e, {
			page: 0,
			size: 100
		}, t);
	}
	async function he(e, t = 0, n) {
		return T.value.getServiceTechnicalRoleResources(P(), e, {
			page: t,
			size: 100
		}, n);
	}
	async function ge(e) {
		return T.value.createServiceTechnicalRole(P(), e);
	}
	async function _e(e, t) {
		return T.value.addServiceTechnicalRoleResource(P(), e, t);
	}
	async function ve(e, t) {
		return T.value.removeServiceTechnicalRoleResource(P(), e, t);
	}
	async function I(e, t) {
		return T.value.getServiceAccessGrants(P(), e, t);
	}
	async function ye(e) {
		return T.value.getReceivedServiceAccessGrants(P(), e);
	}
	async function be(e, t) {
		return T.value.requestServiceAccess(P(), e, t);
	}
	async function L(e, t) {
		return T.value.decideServiceAccess(P(), e, t);
	}
	async function xe(e) {
		return T.value.revokeServiceAccess(P(), e);
	}
	async function Se(e) {
		return T.value.getApplications({
			page: 0,
			size: 100
		}, e);
	}
	async function R(e, t) {
		return T.value.getResources(e, {
			page: 0,
			size: 100
		}, t);
	}
	async function we(e, t) {
		return T.value.getRoles(e, {
			page: 0,
			size: 100
		}, t);
	}
	return In(e, () => {
		O(), ne();
	}, {
		immediate: !0,
		deep: !0
	}), Ce(() => {
		w?.dispose(), S?.abort();
		for (let e of Object.values(D)) e.abortController?.abort();
		p.abortController?.abort(), m.abortController?.abort(), h.abortController?.abort(), g.abortController?.abort(), _.abortController?.abort(), v.abortController?.abort(), y.abortController?.abort(), b.abortController?.abort();
	}), {
		applicationId: t,
		sessionExpiresAt: C,
		summary: n,
		summaryLoading: r,
		loading: r,
		saving: a,
		mutations: o,
		isMutating: N,
		error: i,
		ready: E,
		resources: s,
		roles: c,
		profiles: l,
		administrators: u,
		roleAssignments: d,
		profileAssignments: f,
		roleResources: m,
		profileRoles: h,
		userAssignments: g,
		userRoleAssignments: _,
		userProfileAssignments: v,
		assignmentsForRole: y,
		assignmentsForProfile: b,
		users: p,
		load: re,
		loadSummary: ne,
		loadRoleResources: ie,
		loadProfileRoles: A,
		loadUserAssignments: j,
		loadAssignmentsForRole: M,
		loadAssignmentsForProfile: ae,
		searchUsers: k,
		refresh: ue,
		mutate: de,
		invalidate: ce,
		invalidateRelation: le,
		getServiceIdentities: fe,
		createServiceIdentity: F,
		getServiceTechnicalRoles: pe,
		getServiceTechnicalRolesForApplication: me,
		getServiceTechnicalRoleResources: he,
		createServiceTechnicalRole: ge,
		addServiceTechnicalRoleResource: _e,
		removeServiceTechnicalRoleResource: ve,
		getServiceAccessGrants: I,
		getReceivedServiceAccessGrants: ye,
		requestServiceAccess: be,
		decideServiceAccess: L,
		revokeServiceAccess: xe,
		getServiceApplications: Se,
		getServiceResources: R,
		getServiceRoles: we
	};
}
function Bo(e) {
	return {
		summary: e.summary,
		loading: e.summaryLoading,
		load: e.loadSummary
	};
}
function Vo(e) {
	return e.resources;
}
function Ho(e) {
	return e.roles;
}
function Uo(e) {
	return e.profiles;
}
function Wo(e) {
	return e.administrators;
}
function Go(e) {
	return e.roleAssignments;
}
function Ko(e) {
	return e.profileAssignments;
}
function qo(e) {
	return {
		state: e.users,
		search: e.searchUsers
	};
}
function Jo(e, t) {
	e.content = t.content, e.total = t.total, e.page = t.page, e.limit = t.limit, e.loaded = !0;
}
function Yo(e) {
	return e instanceof DOMException && e.name === "AbortError";
}
function Xo(e) {
	return e instanceof Error ? e.message : "No fue posible cargar la seguridad.";
}
//#endregion
//#region src/components/ConfirmDangerDialog.vue?vue&type=script&setup=true&lang.ts
var Zo = {
	class: "dialog",
	role: "alertdialog",
	"aria-modal": "true",
	"aria-labelledby": "confirm-title"
}, Qo = { class: "dialog-body" }, $o = { class: "sub" }, es = { class: "actions bottom" }, ts = ["disabled"], ns = ["disabled"], rs = /* @__PURE__ */ Kn({
	__name: "ConfirmDangerDialog",
	props: {
		open: { type: Boolean },
		message: {},
		busy: { type: Boolean }
	},
	emits: ["cancel", "confirm"],
	setup(e) {
		return (t, n) => e.open ? (q(), J("div", {
			key: 0,
			class: "backdrop",
			onClick: n[2] ||= bo((e) => t.$emit("cancel"), ["self"])
		}, [Y("div", Zo, [
			n[3] ||= Y("div", { class: "dialog-head" }, [Y("p", { class: "eyebrow" }, "Acción irreversible"), Y("h3", { id: "confirm-title" }, "Confirmar acción destructiva")], -1),
			Y("div", Qo, [Y("p", $o, I(e.message), 1)]),
			Y("div", es, [Y("button", {
				class: "quiet",
				disabled: e.busy,
				onClick: n[0] ||= (e) => t.$emit("cancel")
			}, " Cancelar ", 8, ts), Y("button", {
				"data-testid": "confirm-danger",
				class: "primary danger",
				disabled: e.busy,
				onClick: n[1] ||= (e) => t.$emit("confirm")
			}, " Confirmar ", 8, ns)])
		])])) : Q("", !0);
	}
}), is = ["aria-label"], as = ["disabled"], os = ["disabled"], ss = /* @__PURE__ */ Kn({
	__name: "PaginationControls",
	props: {
		page: {},
		limit: {},
		total: {},
		loading: { type: Boolean },
		label: {}
	},
	emits: ["previous", "next"],
	setup(e) {
		return (t, n) => e.total > e.limit ? (q(), J("div", {
			key: 0,
			class: "pager",
			"aria-label": e.label ?? "Paginación"
		}, [
			Y("button", {
				class: "quiet",
				disabled: e.page === 0 || e.loading,
				onClick: n[0] ||= (e) => t.$emit("previous")
			}, " Anterior ", 8, as),
			Y("span", null, "Página " + I(e.page + 1) + " de " + I(Math.ceil(e.total / e.limit)), 1),
			Y("button", {
				class: "quiet",
				disabled: (e.page + 1) * e.limit >= e.total || e.loading,
				onClick: n[1] ||= (e) => t.$emit("next")
			}, " Siguiente ", 8, os)
		], 8, is)) : Q("", !0);
	}
}), cs = {
	key: 0,
	class: "empty"
}, ls = { class: "stats" }, us = {
	key: 0,
	class: "next-steps"
}, ds = /* @__PURE__ */ Kn({
	__name: "SecuritySummaryPanel",
	props: {
		summary: {},
		loading: { type: Boolean },
		assignmentCount: {}
	},
	setup(e) {
		let t = e, n = va(() => {
			let e = t.summary?.counts;
			return e ? [
				{
					done: e.resources > 0,
					text: "Registra en Recursos las rutas de tu aplicación que quieres proteger."
				},
				{
					done: e.roles > 1,
					text: "Crea en Roles los grupos de permisos y marca qué recursos concede cada uno."
				},
				{
					done: t.assignmentCount > 1,
					text: "Asigna en Personas el rol (o un perfil) a quien debe usarlo."
				}
			] : [];
		}), r = va(() => n.value.length > 0 && n.value.every((e) => e.done));
		return (t, i) => e.loading ? (q(), J("p", cs, "Consultando políticas de seguridad…")) : e.summary ? (q(), J(K, { key: 1 }, [Y("div", ls, [(q(!0), J(K, null, G([
			[e.summary.counts.administrators, "administradores"],
			[e.assignmentCount, "asignaciones"],
			[e.summary.counts.roles, "roles"],
			[e.summary.counts.resources, "recursos"]
		], (e) => (q(), J("div", {
			key: e[1],
			class: "stat"
		}, [Y("b", null, I(e[0]), 1), Y("small", null, I(e[1]), 1)]))), 128))]), r.value ? Q("", !0) : (q(), J("div", us, [i[0] ||= Y("h4", null, "Cómo empezar", -1), Y("ol", null, [(q(!0), J(K, null, G(n.value, (e) => (q(), J("li", {
			key: e.text,
			class: N({ done: e.done })
		}, I(e.text), 3))), 128))])]))], 64)) : Q("", !0);
	}
}), fs = ["aria-busy"], ps = {
	key: 0,
	class: "empty"
}, ms = {
	key: 1,
	class: "error"
}, hs = { class: "method" }, gs = { class: "grow" }, _s = ["disabled", "onClick"], vs = ["disabled", "onClick"], ys = {
	key: 2,
	class: "empty"
}, bs = /* @__PURE__ */ Kn({
	__name: "ResourceList",
	props: {
		state: {},
		busy: { type: Boolean }
	},
	emits: [
		"edit",
		"remove",
		"previous",
		"next"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (q(), J(K, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", ps, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", ms, I(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("span", hs, I(t.method), 1),
				Y("div", gs, [Y("strong", null, I(t.path), 1), r[2] ||= Y("small", null, "Recurso protegido", -1)]),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, _s),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, vs)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", ys, "No hay datos en esta página.")) : Q("", !0)
		], 8, fs), X(ss, {
			page: e.state.page,
			limit: e.state.limit,
			total: e.state.total,
			loading: e.state.loading,
			onPrevious: r[0] ||= (e) => n("previous"),
			onNext: r[1] ||= (e) => n("next")
		}, null, 8, [
			"page",
			"limit",
			"total",
			"loading"
		])], 64));
	}
}), xs = ["aria-busy"], Ss = {
	key: 0,
	class: "empty"
}, Cs = {
	key: 1,
	class: "error"
}, ws = { class: "grow" }, Ts = { class: "pill" }, Es = ["disabled", "onClick"], Ds = ["disabled", "onClick"], Os = ["disabled", "onClick"], ks = { key: 1 }, As = {
	key: 2,
	class: "empty"
}, js = /* @__PURE__ */ Kn({
	__name: "RoleList",
	props: {
		state: {},
		busy: { type: Boolean }
	},
	emits: [
		"edit",
		"remove",
		"manage",
		"previous",
		"next"
	],
	setup(e, { emit: t }) {
		let n = (e) => e.name.trim().toUpperCase() === "ADMIN", r = t;
		return (t, i) => (q(), J(K, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", Ss, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", Cs, I(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", ws, [Y("strong", null, I(t.name), 1), Y("small", null, I(t.resourceCount ?? 0) + " recursos autorizados", 1)]),
				Y("span", Ts, I(n(t) ? "Protegido" : "Aplicación"), 1),
				n(t) ? (q(), J("small", ks, "Administra la aplicación; no se edita.")) : (q(), J(K, { key: 0 }, [
					Y("button", {
						class: "quiet",
						disabled: e.busy,
						onClick: (e) => r("manage", t)
					}, "Administrar recursos", 8, Es),
					Y("button", {
						class: "quiet",
						disabled: e.busy,
						onClick: (e) => r("edit", t)
					}, "Editar", 8, Ds),
					Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("remove", t)
					}, "Eliminar", 8, Os)
				], 64))
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", As, "No hay datos en esta página.")) : Q("", !0)
		], 8, xs), X(ss, {
			page: e.state.page,
			limit: e.state.limit,
			total: e.state.total,
			loading: e.state.loading,
			onPrevious: i[0] ||= (e) => r("previous"),
			onNext: i[1] ||= (e) => r("next")
		}, null, 8, [
			"page",
			"limit",
			"total",
			"loading"
		])], 64));
	}
}), Ms = ["aria-busy"], Ns = {
	key: 0,
	class: "empty"
}, Ps = {
	key: 1,
	class: "error"
}, Fs = { class: "grow" }, Is = ["disabled", "onClick"], Ls = ["disabled", "onClick"], Rs = ["disabled", "onClick"], zs = {
	key: 2,
	class: "empty"
}, Bs = /* @__PURE__ */ Kn({
	__name: "ProfileList",
	props: {
		state: {},
		busy: { type: Boolean }
	},
	emits: [
		"edit",
		"remove",
		"manage",
		"previous",
		"next"
	],
	setup(e, { emit: t }) {
		let n = t;
		return (t, r) => (q(), J(K, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", Ns, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", Ps, I(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", Fs, [Y("strong", null, I(t.name), 1), Y("small", null, I(t.roleCount ?? 0) + " roles agrupados", 1)]),
				r[2] ||= Y("span", { class: "pill" }, "Aplicación", -1),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("manage", t)
				}, "Administrar roles", 8, Is),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, Ls),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, Rs)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", zs, "No hay datos en esta página.")) : Q("", !0)
		], 8, Ms), X(ss, {
			page: e.state.page,
			limit: e.state.limit,
			total: e.state.total,
			loading: e.state.loading,
			onPrevious: r[0] ||= (e) => n("previous"),
			onNext: r[1] ||= (e) => n("next")
		}, null, 8, [
			"page",
			"limit",
			"total",
			"loading"
		])], 64));
	}
}), Vs = ["aria-busy"], Hs = {
	key: 0,
	class: "empty"
}, Us = {
	key: 1,
	class: "error"
}, Ws = { class: "grow" }, Gs = ["disabled", "onClick"], Ks = {
	key: 2,
	class: "empty"
}, qs = /* @__PURE__ */ Kn({
	__name: "AdministratorList",
	props: {
		state: {},
		busy: { type: Boolean }
	},
	emits: [
		"remove",
		"previous",
		"next"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(new Date(e));
		}
		return (t, i) => (q(), J(K, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", Hs, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", Us, I(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.user.id,
				class: "row"
			}, [Y("div", Ws, [
				Y("strong", null, I(t.user.name), 1),
				Y("small", null, I(t.user.email), 1),
				Y("small", null, "Administrador · desde " + I(r(t.validFrom)), 1)
			]), Y("button", {
				class: "quiet danger",
				disabled: e.busy,
				onClick: (e) => n("remove", t.user.id)
			}, "Retirar", 8, Gs)]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", Ks, "No hay datos en esta página.")) : Q("", !0)
		], 8, Vs), X(ss, {
			page: e.state.page,
			limit: e.state.limit,
			total: e.state.total,
			loading: e.state.loading,
			onPrevious: i[0] ||= (e) => n("previous"),
			onNext: i[1] ||= (e) => n("next")
		}, null, 8, [
			"page",
			"limit",
			"total",
			"loading"
		])], 64));
	}
}), Js = {
	class: "access-workbench",
	"aria-label": "Administración de personas y accesos"
}, Ys = {
	class: "perspective-tabs",
	role: "tablist",
	"aria-label": "Perspectiva de consulta"
}, Xs = ["aria-selected", "onClick"], Zs = { class: "access-layout" }, Qs = { class: "access-query" }, $s = { class: "search-field" }, ec = ["onClick"], tc = { class: "avatar" }, nc = {
	key: 0,
	class: "empty compact"
}, rc = {
	key: 1,
	class: "empty compact people-count"
}, ic = { class: "option-grid" }, ac = ["onClick"], oc = {
	key: 0,
	class: "empty compact"
}, sc = { class: "option-grid" }, cc = ["onClick"], lc = {
	key: 0,
	class: "empty compact"
}, uc = { class: "access-results" }, dc = {
	key: 0,
	class: "empty-state"
}, fc = { class: "identity-strip" }, pc = { class: "avatar large" }, mc = {
	key: 0,
	class: "admin-mark"
}, hc = {
	key: 0,
	class: "error"
}, gc = { class: "access-group" }, _c = { class: "group-title" }, vc = ["disabled", "onClick"], yc = {
	key: 0,
	class: "empty compact"
}, bc = { class: "access-group" }, xc = { class: "group-title" }, Sc = ["disabled", "onClick"], Cc = {
	key: 0,
	class: "empty compact"
}, wc = { class: "result-title" }, Tc = { class: "count-badge" }, Ec = {
	key: 0,
	class: "error"
}, Dc = { class: "avatar" }, Oc = { class: "access-meta" }, kc = ["disabled", "onClick"], Ac = {
	key: 1,
	class: "empty compact"
}, jc = {
	key: 3,
	class: "empty-state"
}, Mc = /* @__PURE__ */ Kn({
	__name: "AccessAdministrationPanel",
	props: {
		users: {},
		roles: {},
		profiles: {},
		personRoleAssignments: {},
		personProfileAssignments: {},
		roleAssignments: {},
		profileAssignments: {},
		busy: { type: Boolean }
	},
	emits: [
		"searchUsers",
		"selectPerson",
		"selectRole",
		"selectProfile",
		"personPage",
		"rolePage",
		"profilePage",
		"revoke"
	],
	setup(e, { emit: t }) {
		let n = e, r = t, i = /* @__PURE__ */ H("person"), a = /* @__PURE__ */ H(""), o = /* @__PURE__ */ H(), s = /* @__PURE__ */ H(), c = /* @__PURE__ */ H(), l;
		In(a, (e) => {
			l && clearTimeout(l), l = setTimeout(() => r("searchUsers", e), 200);
		}), In(i, (e) => {
			e === "person" && !n.users.loaded && r("searchUsers", a.value);
		}), sr(() => r("searchUsers", a.value)), ur(() => {
			l && clearTimeout(l);
		});
		function u(e) {
			let t = e.target;
			t.scrollHeight - t.scrollTop - t.clientHeight < 32 && !n.users.loading && n.users.content.length < n.users.total && r("searchUsers", a.value, n.users.page + 1, !0);
		}
		let d = va(() => i.value === "role" ? n.roleAssignments : n.profileAssignments);
		function f(e) {
			o.value = e, r("selectPerson", e);
		}
		function p(e) {
			s.value = e, r("selectRole", e);
		}
		function m(e) {
			c.value = e, r("selectProfile", e);
		}
		function h(e) {
			return "role" in e ? `Rol · ${e.role.name}` : `Perfil · ${e.profile.name}`;
		}
		function g(e) {
			return new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(new Date(e));
		}
		function _(e) {
			i.value === "person" ? r("personPage", e) : i.value === "role" ? r("rolePage", e) : r("profilePage", e);
		}
		return (t, n) => (q(), J("section", Js, [
			n[18] ||= Y("header", { class: "access-heading" }, [Y("div", null, [
				Y("p", { class: "kicker" }, "Consultar y ajustar"),
				Y("h4", null, "Personas y accesos"),
				Y("p", null, "Encuentre una relación vigente y actúe desde el mismo lugar.")
			]), Y("span", { class: "scope-mark" }, "Aplicación actual")], -1),
			Y("div", Ys, [(q(), J(K, null, G([
				{
					id: "person",
					label: "Por persona",
					hint: "Ver sus accesos"
				},
				{
					id: "role",
					label: "Por rol",
					hint: "Ver quién lo tiene"
				},
				{
					id: "profile",
					label: "Por perfil",
					hint: "Ver quién lo tiene"
				}
			], (e) => Y("button", {
				key: e.id,
				type: "button",
				role: "tab",
				"aria-selected": i.value === e.id,
				class: N({ active: i.value === e.id }),
				onClick: (t) => i.value = e.id
			}, [Y("strong", null, I(e.label), 1), Y("small", null, I(e.hint), 1)], 10, Xs)), 64))]),
			Y("div", Zs, [Y("aside", Qs, [i.value === "person" ? (q(), J(K, { key: 0 }, [
				n[6] ||= Y("label", { for: "person-search" }, "Buscar una persona", -1),
				Y("div", $s, [n[5] ||= Y("span", { "aria-hidden": "true" }, "⌕", -1), W(Y("input", {
					id: "person-search",
					"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
					autocomplete: "off",
					placeholder: "Nombre o correo"
				}, null, 512), [[
					po,
					a.value,
					void 0,
					{ trim: !0 }
				]])]),
				n[7] ||= Y("p", { class: "query-help" }, "Personas del tenant actual, en orden alfabético. Escribe para filtrar por nombre o correo.", -1),
				Y("div", {
					class: "choices",
					"aria-label": "Resultados de personas",
					onScrollPassive: u
				}, [
					(q(!0), J(K, null, G(e.users.content, (e) => (q(), J("button", {
						key: e.id,
						type: "button",
						class: N(["choice", { selected: o.value?.id === e.id }]),
						onClick: (t) => f(e)
					}, [Y("span", tc, I(e.name.slice(0, 1)), 1), Y("span", null, [Y("strong", null, I(e.name), 1), Y("small", null, I(e.email), 1)])], 10, ec))), 128)),
					e.users.loaded && !e.users.content.length ? (q(), J("p", nc, "No se encontraron personas.")) : Q("", !0),
					e.users.content.length ? (q(), J("p", rc, I(e.users.loading ? "Cargando más personas…" : e.users.content.length < e.users.total ? `Mostrando ${e.users.content.length} de ${e.users.total} · desliza para ver más` : `${e.users.total} ${e.users.total === 1 ? "persona" : "personas"}`), 1)) : Q("", !0)
				], 32)
			], 64)) : i.value === "role" ? (q(), J(K, { key: 1 }, [
				n[8] ||= Y("p", { class: "query-label" }, "Elija un rol", -1),
				n[9] ||= Y("p", { class: "query-help" }, "Muestra únicamente roles de esta aplicación.", -1),
				Y("div", ic, [(q(!0), J(K, null, G(e.roles.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: N({ selected: s.value?.id === e.id }),
					onClick: (t) => p(e)
				}, I(e.name), 11, ac))), 128)), e.roles.loaded && !e.roles.content.length ? (q(), J("p", oc, "No hay roles disponibles.")) : Q("", !0)])
			], 64)) : (q(), J(K, { key: 2 }, [
				n[10] ||= Y("p", { class: "query-label" }, "Elija un perfil", -1),
				n[11] ||= Y("p", { class: "query-help" }, "Muestra únicamente perfiles de esta aplicación.", -1),
				Y("div", sc, [(q(!0), J(K, null, G(e.profiles.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: N({ selected: c.value?.id === e.id }),
					onClick: (t) => m(e)
				}, I(e.name), 11, cc))), 128)), e.profiles.loaded && !e.profiles.content.length ? (q(), J("p", lc, "No hay perfiles disponibles.")) : Q("", !0)])
			], 64))]), Y("div", uc, [i.value === "person" && !o.value ? (q(), J("div", dc, [...n[12] ||= [
				Y("span", { "aria-hidden": "true" }, "⌁", -1),
				Y("strong", null, "Seleccione una persona", -1),
				Y("p", null, "Busque por nombre o correo para consultar sus accesos vigentes.", -1)
			]])) : i.value === "person" && o.value ? (q(), J(K, { key: 1 }, [
				Y("div", fc, [
					Y("span", pc, I(o.value.name.slice(0, 1)), 1),
					Y("div", null, [Y("strong", null, I(o.value.name), 1), Y("small", null, I(o.value.email), 1)]),
					e.personRoleAssignments.content.some((e) => e.role.name === "ADMIN") ? (q(), J("span", mc, "Administra esta aplicación")) : Q("", !0)
				]),
				e.personRoleAssignments.error || e.personProfileAssignments.error ? (q(), J("p", hc, I(e.personRoleAssignments.error || e.personProfileAssignments.error), 1)) : Q("", !0),
				Y("section", gc, [
					Y("div", _c, [n[13] ||= Y("span", null, "Roles vigentes", -1), Y("b", null, I(e.personRoleAssignments.total), 1)]),
					(q(!0), J(K, null, G(e.personRoleAssignments.content, (t) => (q(), J("div", {
						key: t.id,
						class: "access-row"
					}, [Y("div", null, [Y("strong", null, I(t.role.name), 1), Y("small", null, "Vigente desde " + I(g(t.validFrom)), 1)]), Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, vc)]))), 128)),
					e.personRoleAssignments.loaded && !e.personRoleAssignments.content.length ? (q(), J("p", yc, "Esta persona no tiene roles asignados.")) : Q("", !0)
				]),
				Y("section", bc, [
					Y("div", xc, [n[14] ||= Y("span", null, "Perfiles vigentes", -1), Y("b", null, I(e.personProfileAssignments.total), 1)]),
					(q(!0), J(K, null, G(e.personProfileAssignments.content, (t) => (q(), J("div", {
						key: t.id,
						class: "access-row"
					}, [Y("div", null, [Y("strong", null, I(t.profile.name), 1), Y("small", null, "Vigente desde " + I(g(t.validFrom)), 1)]), Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, Sc)]))), 128)),
					e.personProfileAssignments.loaded && !e.personProfileAssignments.content.length ? (q(), J("p", Cc, "Esta persona no tiene perfiles asignados.")) : Q("", !0)
				]),
				X(ss, {
					page: e.personRoleAssignments.page,
					limit: e.personRoleAssignments.limit,
					total: Math.max(e.personRoleAssignments.total, e.personProfileAssignments.total),
					loading: e.personRoleAssignments.loading,
					label: "Paginación de accesos de la persona",
					onPrevious: n[1] ||= (e) => _(-1),
					onNext: n[2] ||= (e) => _(1)
				}, null, 8, [
					"page",
					"limit",
					"total",
					"loading"
				])
			], 64)) : i.value === "role" && s.value || i.value === "profile" && c.value ? (q(), J(K, { key: 2 }, [
				Y("div", wc, [Y("div", null, [n[15] ||= Y("p", { class: "kicker" }, "Personas con acceso", -1), Y("h5", null, I(s.value?.name ?? c.value?.name), 1)]), Y("span", Tc, I(d.value.total), 1)]),
				d.value.error ? (q(), J("p", Ec, I(d.value.error), 1)) : Q("", !0),
				(q(!0), J(K, null, G(d.value.content, (t) => (q(), J("div", {
					key: t.id,
					class: "access-row person-row"
				}, [
					Y("span", Dc, I(t.user.name.slice(0, 1)), 1),
					Y("div", null, [
						Y("strong", null, I(t.user.name), 1),
						Y("small", null, I(t.user.email), 1),
						Y("small", Oc, [Z(I(h(t)) + " · desde " + I(g(t.validFrom)), 1), t.validUntil ? (q(), J(K, { key: 0 }, [Z(" hasta " + I(g(t.validUntil)), 1)], 64)) : Q("", !0)])
					]),
					Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, kc)
				]))), 128)),
				d.value.loaded && !d.value.content.length ? (q(), J("p", Ac, I(i.value === "role" ? "No hay personas con este rol." : "No hay personas con este perfil."), 1)) : Q("", !0),
				X(ss, {
					page: d.value.page,
					limit: d.value.limit,
					total: d.value.total,
					loading: d.value.loading,
					label: "Paginación de accesos",
					onPrevious: n[3] ||= (e) => _(-1),
					onNext: n[4] ||= (e) => _(1)
				}, null, 8, [
					"page",
					"limit",
					"total",
					"loading"
				])
			], 64)) : (q(), J("div", jc, [
				n[16] ||= Y("span", { "aria-hidden": "true" }, "⌁", -1),
				Y("strong", null, "Seleccione un " + I(i.value === "role" ? "rol" : "perfil"), 1),
				n[17] ||= Y("p", null, "Las personas con ese acceso aparecerán aquí.", -1)
			]))])])
		]));
	}
}), Nc = {
	class: "service-admin",
	"aria-label": "Identidades de servicio"
}, Pc = {
	class: "service-tabs",
	role: "tablist",
	"aria-label": "Secciones de identidades de servicio"
}, Fc = ["aria-selected", "onClick"], Ic = {
	key: 0,
	class: "error",
	role: "alert"
}, Lc = {
	key: 1,
	class: "success",
	role: "status"
}, Rc = {
	key: 2,
	class: "service-content"
}, zc = { class: "section-title" }, Bc = ["disabled"], Vc = {
	key: 0,
	class: "secret-box"
}, Hc = { class: "panel" }, Uc = { class: "grow" }, Wc = {
	key: 0,
	class: "empty"
}, Gc = {
	key: 3,
	class: "service-content"
}, Kc = { class: "section-title" }, qc = ["disabled"], Jc = { class: "role-layout" }, Yc = { class: "panel" }, Xc = ["onClick"], Zc = {
	key: 0,
	class: "empty"
}, Qc = { class: "panel role-detail" }, $c = { class: "grow" }, el = ["disabled", "onClick"], tl = { class: "add-resource" }, nl = ["value"], rl = {
	key: 0,
	class: "empty compact"
}, il = {
	key: 1,
	class: "empty"
}, al = {
	key: 4,
	class: "service-content"
}, ol = { class: "section-title" }, sl = ["value"], cl = { class: "toolbar" }, ll = { class: "panel" }, ul = { class: "grow" }, dl = { class: "chip" }, fl = {
	key: 0,
	class: "empty"
}, pl = {
	key: 5,
	class: "service-content"
}, ml = ["value"], hl = ["value"], gl = ["disabled"], _l = { key: 0 }, vl = ["disabled"], yl = ["value"], bl = { key: 1 }, xl = ["disabled"], Sl = ["value"], Cl = ["disabled"], wl = {
	key: 6,
	class: "service-content"
}, Tl = { class: "section-title" }, El = { class: "panel" }, Dl = { class: "grow" }, Ol = { class: "chip" }, kl = { class: "row-actions" }, Al = ["disabled", "onClick"], jl = ["disabled", "onClick"], Ml = ["disabled", "onClick"], Nl = {
	key: 0,
	class: "empty"
}, Pl = /* @__PURE__ */ Kn({
	__name: "ServiceIdentityAdministration",
	props: {
		store: {},
		applicationId: {},
		applicationName: {},
		initialSection: {}
	},
	setup(e) {
		let t = e, n = /* @__PURE__ */ H("identities"), r = /* @__PURE__ */ H([]), i = /* @__PURE__ */ H(""), a = /* @__PURE__ */ H([]), o = /* @__PURE__ */ H(""), s = /* @__PURE__ */ H([]), c = /* @__PURE__ */ H([]), l = /* @__PURE__ */ H([]), u = /* @__PURE__ */ H([]), d = /* @__PURE__ */ H([]), f = /* @__PURE__ */ H(""), p = /* @__PURE__ */ H([]), m = /* @__PURE__ */ H([]), h = /* @__PURE__ */ H("resource"), g = /* @__PURE__ */ H(""), _ = /* @__PURE__ */ H(""), v = /* @__PURE__ */ H("ALL"), y = /* @__PURE__ */ H(!1), b = /* @__PURE__ */ H(null), x = /* @__PURE__ */ H(""), S = /* @__PURE__ */ H(""), C = /* @__PURE__ */ H(""), w = /* @__PURE__ */ H(""), T = /* @__PURE__ */ H(""), E = /* @__PURE__ */ H(!1), ee = /* @__PURE__ */ H(""), D = {
			PENDING: "Pendiente",
			APPROVED: "Aprobada",
			REJECTED: "Rechazada",
			REVOKED: "Revocada"
		}, te = va(() => a.value.find((e) => e.id === o.value)), O = va(() => u.value.filter((e) => e.serviceIdentityId === i.value && (v.value === "ALL" || e.status === v.value))), ne = va(() => c.value.filter((e) => !s.value.some((t) => t.id === e.id))), re = (e) => l.value.find((t) => t.id === e)?.name ?? "Aplicación no disponible", k = (e) => {
			if (e.technicalRoleId) return `Rol técnico · ${e.technicalRole || "sin código"}`;
			let t = [...c.value, ...p.value].find((t) => t.id === e.resourceId);
			return t ? `Recurso · ${t.method} ${t.path}` : "Recurso no disponible";
		};
		function ie(e, t) {
			return e instanceof Error && e.message ? e.message : t;
		}
		function A(e) {
			return e ? new Intl.DateTimeFormat("es-CO", { dateStyle: "medium" }).format(new Date(e)) : "—";
		}
		async function j(e, t) {
			y.value = !0, x.value = "", S.value = "";
			try {
				await e();
			} catch (e) {
				x.value = ie(e, t);
			} finally {
				y.value = !1;
			}
		}
		async function M() {
			await j(async () => {
				r.value = await t.store.getServiceIdentities(), !i.value && r.value[0] && (i.value = r.value[0].id);
			}, "No fue posible cargar las identidades de servicio.");
		}
		async function ae() {
			await j(async () => {
				a.value = (await t.store.getServiceTechnicalRoles()).content, !o.value && a.value[0] && (o.value = a.value[0].id);
			}, "No fue posible cargar los roles técnicos.");
		}
		async function oe() {
			await j(async () => {
				c.value = (await t.store.getServiceResources(t.applicationId)).content;
			}, "No fue posible cargar los recursos de la aplicación.");
		}
		async function se() {
			if (!o.value) {
				s.value = [];
				return;
			}
			await j(async () => {
				s.value = (await t.store.getServiceTechnicalRoleResources(o.value)).content;
			}, "No fue posible cargar los recursos del rol técnico.");
		}
		async function ce() {
			await j(async () => {
				let e = await Promise.all(r.value.map((e) => t.store.getServiceAccessGrants(e.id)));
				u.value = e.flat();
			}, "No fue posible cargar las asignaciones de servicio.");
		}
		async function le() {
			await j(async () => {
				d.value = await t.store.getReceivedServiceAccessGrants();
			}, "No fue posible cargar las solicitudes recibidas.");
		}
		async function ue() {
			await j(async () => {
				l.value = (await t.store.getServiceApplications()).content.filter((e) => e.id !== t.applicationId);
			}, "No fue posible cargar las aplicaciones destino.");
		}
		async function de() {
			if (!f.value) {
				p.value = [], m.value = [];
				return;
			}
			await j(async () => {
				let [e, n] = await Promise.all([t.store.getServiceResources(f.value), t.store.getServiceTechnicalRolesForApplication(f.value)]);
				p.value = e.content, m.value = n.content;
			}, "No fue posible consultar los accesos de la aplicación destino.");
		}
		async function P(e) {
			n.value = e, x.value = "", e === "identities" && await M(), e === "roles" && (await ae(), await oe()), e === "assignments" && (r.value.length || await M(), l.value.length || await ue(), await ce()), e === "request" && (r.value.length || await M(), l.value.length || await ue()), e === "approvals" && await le();
		}
		async function fe() {
			if (C.value.trim()) {
				E.value = !0;
				try {
					let e = await t.store.createServiceIdentity(C.value.trim());
					ee.value = e.clientSecret, C.value = "", await M(), S.value = "Identidad creada. Guarde la credencial ahora; no volverá a mostrarse.";
				} catch (e) {
					x.value = ie(e, "No fue posible crear la identidad.");
				} finally {
					E.value = !1;
				}
			}
		}
		async function F() {
			if (w.value.trim() && T.value.trim()) {
				E.value = !0;
				try {
					await t.store.createServiceTechnicalRole({
						code: w.value.trim(),
						name: T.value.trim(),
						resourceIds: []
					}), w.value = "", T.value = "", await ae(), S.value = "Rol técnico creado.";
				} catch (e) {
					x.value = ie(e, "No fue posible crear el rol técnico.");
				} finally {
					E.value = !1;
				}
			}
		}
		async function pe(e) {
			if (o.value) {
				b.value = e;
				try {
					await t.store.addServiceTechnicalRoleResource(o.value, e), await Promise.all([se(), ae()]);
				} catch (e) {
					x.value = ie(e, "No fue posible asociar el recurso.");
				} finally {
					b.value = null;
				}
			}
		}
		async function me(e) {
			if (o.value) {
				b.value = e;
				try {
					await t.store.removeServiceTechnicalRoleResource(o.value, e), await Promise.all([se(), ae()]);
				} catch (e) {
					x.value = ie(e, "No fue posible retirar el recurso.");
				} finally {
					b.value = null;
				}
			}
		}
		async function he() {
			if (!(!i.value || !f.value || (h.value === "resource" ? !g.value : !_.value))) {
				b.value = "request";
				try {
					await t.store.requestServiceAccess(i.value, h.value === "resource" ? { resourceId: g.value } : { technicalRoleId: _.value }), g.value = "", _.value = "", S.value = "La solicitud quedó pendiente de aprobación por la aplicación dueña.", await P("assignments");
				} catch (e) {
					x.value = ie(e, "No fue posible enviar la solicitud.");
				} finally {
					b.value = null;
				}
			}
		}
		async function ge(e, n) {
			b.value = e.id;
			try {
				await t.store.decideServiceAccess(e.id, n), await le();
			} catch (e) {
				x.value = ie(e, "No fue posible registrar la decisión.");
			} finally {
				b.value = null;
			}
		}
		async function _e(e) {
			if (window.confirm("¿Revocar este acceso aprobado?")) {
				b.value = e.id;
				try {
					await t.store.revokeServiceAccess(e.id), await le();
				} catch (e) {
					x.value = ie(e, "No fue posible revocar el acceso.");
				} finally {
					b.value = null;
				}
			}
		}
		return In(o, () => {
			se();
		}), In(f, () => {
			g.value = "", _.value = "", de();
		}), In(() => t.initialSection, (e) => {
			n.value = e, P(e);
		}), sr(() => {
			M();
		}), (t, c) => (q(), J("section", Nc, [
			Y("div", Pc, [(q(), J(K, null, G([
				{
					id: "identities",
					label: "Identidades"
				},
				{
					id: "roles",
					label: "Roles técnicos"
				},
				{
					id: "assignments",
					label: "Asignaciones"
				},
				{
					id: "request",
					label: "Solicitar acceso"
				},
				{
					id: "approvals",
					label: "Aprobaciones"
				}
			], (e) => Y("button", {
				key: e.id,
				type: "button",
				role: "tab",
				"aria-selected": n.value === e.id,
				class: N({ active: n.value === e.id }),
				onClick: (t) => P(e.id)
			}, I(e.label), 11, Fc)), 64))]),
			x.value ? (q(), J("p", Ic, I(x.value), 1)) : Q("", !0),
			S.value ? (q(), J("p", Lc, I(S.value), 1)) : Q("", !0),
			n.value === "identities" ? (q(), J("div", Rc, [
				Y("div", zc, [Y("div", null, [Y("h5", null, "Identidades de " + I(e.applicationName), 1), c[11] ||= Y("p", null, "Solo se muestran identidades cuyo consumidor es esta aplicación.", -1)]), Y("form", {
					class: "inline-form",
					onSubmit: bo(fe, ["prevent"])
				}, [W(Y("input", {
					"onUpdate:modelValue": c[0] ||= (e) => C.value = e,
					placeholder: "Nombre de la nueva identidad",
					"aria-label": "Nombre de la nueva identidad"
				}, null, 512), [[po, C.value]]), Y("button", {
					class: "primary",
					disabled: E.value || !C.value.trim()
				}, I(E.value ? "Creando…" : "Crear identidad"), 9, Bc)], 32)]),
				ee.value ? (q(), J("div", Vc, [
					c[12] ||= Y("strong", null, "Credencial generada", -1),
					Y("code", null, I(ee.value), 1),
					c[13] ||= Y("small", null, "Guárdela ahora. El PDP no volverá a mostrarla.", -1)
				])) : Q("", !0),
				Y("div", Hc, [(q(!0), J(K, null, G(r.value, (e) => (q(), J("div", {
					key: e.id,
					class: "row"
				}, [Y("div", Uc, [Y("strong", null, I(e.name), 1), Y("small", null, I(e.clientId) + " · creada " + I(A(e.registeredAt)), 1)]), Y("span", { class: N(["chip", e.status.toLowerCase()]) }, I(e.status === "ACTIVE" ? "Activa" : e.status === "SUSPENDED" ? "Suspendida" : "Revocada"), 3)]))), 128)), !y.value && !r.value.length ? (q(), J("p", Wc, "Esta aplicación aún no tiene identidades de servicio.")) : Q("", !0)])
			])) : n.value === "roles" ? (q(), J("div", Gc, [Y("div", Kc, [Y("div", null, [Y("h5", null, "Roles técnicos de " + I(e.applicationName), 1), c[14] ||= Y("p", null, "Defina agrupaciones de recursos que sus identidades podrán solicitar.", -1)]), Y("form", {
				class: "role-create",
				onSubmit: bo(F, ["prevent"])
			}, [
				W(Y("input", {
					"onUpdate:modelValue": c[1] ||= (e) => w.value = e,
					placeholder: "Código",
					"aria-label": "Código del rol técnico"
				}, null, 512), [[po, w.value]]),
				W(Y("input", {
					"onUpdate:modelValue": c[2] ||= (e) => T.value = e,
					placeholder: "Nombre visible",
					"aria-label": "Nombre del rol técnico"
				}, null, 512), [[po, T.value]]),
				Y("button", {
					class: "primary",
					disabled: E.value || !w.value.trim() || !T.value.trim()
				}, "Crear rol", 8, qc)
			], 32)]), Y("div", Jc, [Y("div", Yc, [(q(!0), J(K, null, G(a.value, (e) => (q(), J("button", {
				key: e.id,
				type: "button",
				class: N(["role-choice", { selected: o.value === e.id }]),
				onClick: (t) => o.value = e.id
			}, [Y("strong", null, I(e.name), 1), Y("small", null, I(e.code) + " · " + I(e.resourceCount) + " recursos", 1)], 10, Xc))), 128)), !y.value && !a.value.length ? (q(), J("p", Zc, "No hay roles técnicos definidos.")) : Q("", !0)]), Y("div", Qc, [te.value ? (q(), J(K, { key: 0 }, [
				Y("h5", null, [Z(I(te.value.name) + " ", 1), Y("code", null, I(te.value.code), 1)]),
				c[17] ||= Y("p", { class: "sub" }, "Recursos asociados", -1),
				(q(!0), J(K, null, G(s.value, (e) => (q(), J("div", {
					key: e.id,
					class: "row"
				}, [Y("div", $c, [Y("strong", null, I(e.method) + " " + I(e.path), 1)]), Y("button", {
					class: "quiet danger",
					disabled: b.value === e.id,
					onClick: (t) => me(e.id)
				}, "Retirar", 8, el)]))), 128)),
				Y("label", tl, [c[16] ||= Z("Agregar recurso", -1), Y("select", { onChange: c[3] ||= (e) => pe(e.target.value) }, [c[15] ||= Y("option", { value: "" }, "Seleccione un recurso", -1), (q(!0), J(K, null, G(ne.value, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, I(e.method) + " " + I(e.path), 9, nl))), 128))], 32)]),
				s.value.length ? Q("", !0) : (q(), J("p", rl, "Este rol aún no tiene recursos."))
			], 64)) : (q(), J("p", il, "Seleccione un rol técnico para ver sus recursos."))])])])) : n.value === "assignments" ? (q(), J("div", al, [
				Y("div", ol, [Y("div", null, [c[18] ||= Y("h5", null, "Asignaciones de las identidades", -1), Y("p", null, "Estado de los accesos solicitados por " + I(e.applicationName) + ". Las decisiones pertenecen a la aplicación dueña.", 1)]), Y("label", null, [c[19] ||= Z("Identidad", -1), W(Y("select", { "onUpdate:modelValue": c[4] ||= (e) => i.value = e }, [(q(!0), J(K, null, G(r.value, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, I(e.name), 9, sl))), 128))], 512), [[mo, i.value]])])]),
				Y("div", cl, [Y("label", null, [c[21] ||= Z("Estado", -1), W(Y("select", { "onUpdate:modelValue": c[5] ||= (e) => v.value = e }, [...c[20] ||= [qi("<option value=\"ALL\">Todas</option><option value=\"PENDING\">Pendientes</option><option value=\"APPROVED\">Aprobadas</option><option value=\"REJECTED\">Rechazadas</option><option value=\"REVOKED\">Revocadas</option>", 5)]], 512), [[mo, v.value]])]), Y("span", null, I(O.value.length) + " asignaciones mostradas", 1)]),
				Y("div", ll, [(q(!0), J(K, null, G(O.value, (e) => (q(), J("div", {
					key: e.id,
					class: "row"
				}, [Y("div", ul, [Y("strong", null, I(k(e)), 1), Y("small", null, I(re(e.targetApplicationId)) + " · solicitada " + I(A(e.requestedAt)) + " · decidida " + I(A(e.decidedAt)), 1)]), Y("span", dl, I(D[e.status]), 1)]))), 128)), !y.value && !O.value.length ? (q(), J("p", fl, "Esta identidad no tiene asignaciones con el filtro seleccionado.")) : Q("", !0)])
			])) : n.value === "request" ? (q(), J("div", pl, [c[32] ||= Y("div", { class: "section-title" }, [Y("div", null, [Y("h5", null, "Solicitar acceso para una identidad"), Y("p", null, "La solicitud se envía a la aplicación dueña del recurso o rol.")])], -1), Y("form", {
				class: "request-form",
				onSubmit: bo(he, ["prevent"])
			}, [
				Y("label", null, [c[23] ||= Z("Identidad", -1), W(Y("select", { "onUpdate:modelValue": c[6] ||= (e) => i.value = e }, [c[22] ||= Y("option", { value: "" }, "Seleccione una identidad", -1), (q(!0), J(K, null, G(r.value, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, I(e.name), 9, ml))), 128))], 512), [[mo, i.value]])]),
				Y("label", null, [c[25] ||= Z("Aplicación dueña", -1), W(Y("select", { "onUpdate:modelValue": c[7] ||= (e) => f.value = e }, [c[24] ||= Y("option", { value: "" }, "Seleccione una aplicación", -1), (q(!0), J(K, null, G(l.value, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, I(e.name), 9, hl))), 128))], 512), [[mo, f.value]])]),
				Y("label", null, [c[27] ||= Z("Tipo", -1), W(Y("select", {
					"onUpdate:modelValue": c[8] ||= (e) => h.value = e,
					disabled: !f.value
				}, [...c[26] ||= [Y("option", { value: "resource" }, "Recurso independiente", -1), Y("option", { value: "role" }, "Rol técnico", -1)]], 8, gl), [[mo, h.value]])]),
				h.value === "resource" ? (q(), J("label", _l, [c[29] ||= Z("Recurso", -1), W(Y("select", {
					"onUpdate:modelValue": c[9] ||= (e) => g.value = e,
					disabled: !f.value
				}, [c[28] ||= Y("option", { value: "" }, "Seleccione un recurso", -1), (q(!0), J(K, null, G(p.value, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, I(e.method) + " " + I(e.path), 9, yl))), 128))], 8, vl), [[mo, g.value]])])) : (q(), J("label", bl, [c[31] ||= Z("Rol técnico", -1), W(Y("select", {
					"onUpdate:modelValue": c[10] ||= (e) => _.value = e,
					disabled: !f.value
				}, [c[30] ||= Y("option", { value: "" }, "Seleccione un rol", -1), (q(!0), J(K, null, G(m.value, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, I(e.name) + " · " + I(e.code), 9, Sl))), 128))], 8, xl), [[mo, _.value]])])),
				Y("button", {
					class: "primary",
					disabled: b.value === "request" || !i.value || !f.value || (h.value === "resource" ? !g.value : !_.value)
				}, I(b.value === "request" ? "Enviando…" : "Enviar solicitud"), 9, Cl)
			], 32)])) : (q(), J("div", wl, [Y("div", Tl, [Y("div", null, [Y("h5", null, "Aprobaciones para " + I(e.applicationName), 1), c[33] ||= Y("p", null, "Solicitudes recibidas por recursos de esta aplicación. Aquí sí puede decidir como administrador dueño.", -1)])]), Y("div", El, [(q(!0), J(K, null, G(d.value, (e) => (q(), J("div", {
				key: e.id,
				class: "row"
			}, [
				Y("div", Dl, [Y("strong", null, I(k(e)), 1), Y("small", null, "Identidad " + I(e.serviceIdentityId.slice(0, 8)) + " · solicitada " + I(A(e.requestedAt)), 1)]),
				Y("span", Ol, I(D[e.status]), 1),
				Y("div", kl, [e.status === "PENDING" ? (q(), J(K, { key: 0 }, [Y("button", {
					class: "primary",
					disabled: b.value !== null,
					onClick: (t) => ge(e, !0)
				}, "Aprobar", 8, Al), Y("button", {
					class: "quiet danger",
					disabled: b.value !== null,
					onClick: (t) => ge(e, !1)
				}, "Rechazar", 8, jl)], 64)) : Q("", !0), e.status === "APPROVED" ? (q(), J("button", {
					key: 1,
					class: "quiet danger",
					disabled: b.value !== null,
					onClick: (t) => _e(e)
				}, "Revocar", 8, Ml)) : Q("", !0)])
			]))), 128)), !y.value && !d.value.length ? (q(), J("p", Nl, "No hay solicitudes recibidas para esta aplicación.")) : Q("", !0)])]))
		]));
	}
}), Fl = { class: "chip" }, Il = { class: "grid" }, Ll = { "aria-label": "Secciones de seguridad" }, Rl = ["aria-current", "onClick"], zl = {
	key: 0,
	class: "nav-count"
}, Bl = { class: "title" }, Vl = { class: "sub" }, Hl = { class: "actions" }, Ul = ["disabled"], Wl = ["disabled"], Gl = {
	key: 0,
	class: "notice",
	role: "status",
	"aria-live": "polite"
}, Kl = {
	key: 1,
	class: "error"
}, ql = { class: "dialog-head" }, Jl = { class: "dialog-body" }, Yl = ["aria-expanded"], Xl = ["aria-busy"], Zl = {
	key: 0,
	class: "user-result-status"
}, Ql = ["aria-selected", "onClick"], $l = {
	key: 1,
	class: "user-result-status user-result-count"
}, eu = {
	key: 1,
	class: "selected-user",
	role: "status"
}, tu = ["value"], nu = { key: 3 }, ru = ["value"], iu = ["aria-busy"], au = { class: "grow" }, ou = ["disabled", "onClick"], su = {
	key: 0,
	class: "empty"
}, cu = { class: "actions bottom" }, lu = ["disabled"], uu = ["disabled"], du = 200, fu = /* @__PURE__ */ Kn({
	__name: "SecurityAdministration",
	props: { options: {} },
	setup(e, { expose: t }) {
		let n = e, r = zo(/* @__PURE__ */ Xt(n, "options")), { summary: i, loading: a } = Bo(r), o = Vo(r), s = Ho(r), c = Uo(r), l = Wo(r);
		Go(r), Ko(r);
		let { state: u, search: d } = qo(r), { saving: f, error: p, ready: m, load: h, refresh: g, mutate: _, roleResources: v, profileRoles: y, loadRoleResources: b, loadProfileRoles: x, userRoleAssignments: S, userProfileAssignments: C, assignmentsForRole: w, assignmentsForProfile: T, loadUserAssignments: E, loadAssignmentsForRole: ee, loadAssignmentsForProfile: D, invalidateRelation: te, sessionExpiresAt: O } = r;
		t({ refresh: g });
		let ne = /* @__PURE__ */ H(Date.now()), re;
		In(O, (e) => {
			clearInterval(re), re = void 0, e !== null && (ne.value = Date.now(), re = setInterval(() => ne.value = Date.now(), 1e3));
		}), ur(() => clearInterval(re));
		let k = va(() => O.value === null ? null : Math.max(0, Math.ceil((O.value - ne.value) / 1e3))), ie = va(() => r.applicationId.value), A = /* @__PURE__ */ H("summary"), j = /* @__PURE__ */ H(null), M = /* @__PURE__ */ H(), ae = /* @__PURE__ */ H(), se = /* @__PURE__ */ H(""), ce = /* @__PURE__ */ H(""), le = /* @__PURE__ */ H(""), ue = /* @__PURE__ */ H(), de = /* @__PURE__ */ H(!1), P = "", fe, F = /* @__PURE__ */ H({
			userId: "",
			userQuery: "",
			description: "",
			baseUrl: "",
			path: "",
			method: "GET",
			name: "",
			targetId: "",
			accessKind: "role"
		}), pe = [
			{
				id: "summary",
				label: "Resumen"
			},
			{
				id: "people",
				label: "Personas"
			},
			{
				id: "roles",
				label: "Roles"
			},
			{
				id: "profiles",
				label: "Perfiles"
			},
			{
				id: "resources",
				label: "Recursos"
			},
			{
				id: "admins",
				label: "Administradores"
			},
			{
				id: "service",
				label: "Identidades M2M"
			}
		], me = {
			summary: "Resumen de seguridad",
			people: "Personas y asignaciones",
			roles: "Roles de aplicación",
			profiles: "Perfiles de acceso",
			resources: "Recursos protegidos",
			admins: "Administradores",
			service: "Identidades de servicio"
		}, he = {
			summary: "Un vistazo a cómo está protegida esta aplicación.",
			people: "Quién tiene acceso y por cuál rol o perfil. Asigna o revoca desde aquí.",
			roles: "Un rol agrupa los recursos (rutas) que puede usar quien lo recibe.",
			profiles: "Un perfil agrupa varios roles para asignarlos de una vez.",
			resources: "Rutas y métodos HTTP que la aplicación pone bajo el control de la plataforma.",
			admins: "Personas que pueden administrar la seguridad de esta aplicación.",
			service: "Identidades, roles técnicos, asignaciones, solicitudes y aprobaciones de esta aplicación."
		}, ge = {
			summary: "Configurar accesos",
			people: "Asignar acceso",
			roles: "Definir rol",
			profiles: "Definir perfil",
			resources: "Registrar recurso",
			admins: "Agregar administrador",
			service: ""
		}, _e = va(() => ({
			people: (i.value?.counts.roleAssignments ?? 0) + (i.value?.counts.profileAssignments ?? 0),
			roles: i.value?.counts.roles ?? 0,
			profiles: i.value?.counts.profiles ?? 0,
			resources: i.value?.counts.resources ?? 0,
			admins: i.value?.counts.administrators ?? 0,
			service: 0
		})), ve = va(() => A.value === "summary" && n.options.allowApplicationLifecycleManagement ? "Editar aplicación" : ge[A.value]), ye = va(() => ({
			roles: s,
			profiles: c,
			resources: o,
			admins: l
		})[A.value]), be = va(() => ({
			"--accent": n.options.theme?.accent ?? "#018b51",
			"--font": n.options.theme?.fontFamily ?? "'IBM Plex Sans', Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
			"--radius": n.options.theme?.radius ?? "12px"
		}));
		In(A, (e) => {
			if (e === "people") {
				h("roles"), h("profiles");
				return;
			}
			let t = {
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[e];
			t && h(t);
		}, { immediate: !0 }), In(() => F.value.accessKind, (e) => {
			j.value === "access" && h(e === "role" ? "roles" : "profiles");
		});
		function L(e, t) {
			j.value = e ?? (A.value === "summary" ? n.options.allowApplicationLifecycleManagement ? "application" : "access" : A.value === "people" ? "access" : A.value === "roles" ? "role" : A.value === "profiles" ? "profile" : A.value === "resources" ? "resource" : "admin"), M.value = t, F.value = {
				userId: "",
				userQuery: "",
				description: "",
				baseUrl: "",
				path: "",
				method: "GET",
				name: "",
				targetId: "",
				accessKind: "role"
			}, t && "path" in t && (F.value.path = t.path, F.value.method = t.method), t && "name" in t && (F.value.name = t.name), j.value === "application" && i.value && (F.value.name = i.value.application.name, F.value.description = i.value.application.description ?? "", F.value.baseUrl = i.value.application.baseUrl ?? ""), (j.value === "admin" || j.value === "access") && (P = "", de.value = !1, d("")), (j.value === "access" || j.value === "profile-role") && h("roles"), j.value === "role-resource" && h("resources"), t && j.value === "role-resource" && b(t.id), t && j.value === "profile-role" && x(t.id);
		}
		function xe() {
			fe && clearTimeout(fe), j.value = null, M.value = void 0, ue.value = void 0, de.value = !1;
		}
		function Se() {
			let e = F.value.userQuery.trim();
			F.value.userId = "", ue.value = void 0, de.value = !0, fe && clearTimeout(fe), P = e, fe = setTimeout(() => void d(e), du);
		}
		function Ce() {
			u.loading || u.content.length >= u.total || d(P, u.page + 1, !0);
		}
		function R(e) {
			let t = e.target;
			t.scrollHeight - t.scrollTop - t.clientHeight < 32 && Ce();
		}
		function we(e) {
			F.value.userId = e.id, F.value.userQuery = `${e.name} · ${e.email}`, ue.value = e, de.value = !1;
		}
		let Te = va(() => u.loading ? "Buscando coincidencias…" : u.error ? "No fue posible buscar personas. Inténtelo de nuevo." : de.value && u.loaded && !u.content.length ? "No hay coincidencias para esta búsqueda." : F.value.userQuery.trim() ? "Seleccione una persona de los resultados." : "Personas del tenant en orden alfabético. Escriba para filtrar por nombre o correo.");
		ur(() => {
			fe && clearTimeout(fe);
		});
		async function Ee() {
			let e = F.value, t = j.value;
			if (!t || t === "confirm") return;
			let n = !!M.value, r = t === "application" ? ["summary"] : t === "admin" ? ["administrators", "summary"] : t === "resource" ? ["resources", "summary"] : t === "role" ? ["roles", "summary"] : t === "profile" ? ["profiles", "summary"] : t === "access" ? [e.accessKind === "role" ? "roleAssignments" : "profileAssignments", "summary"] : t === "role-resource" ? ["roles"] : ["profiles"], i = await _((r, i) => t === "application" ? r.updateApplication(i, {
				name: e.name,
				description: e.description,
				baseUrl: e.baseUrl
			}) : t === "admin" ? r.addAdministrator(i, e.userId) : t === "resource" ? n ? r.updateResource(i, M.value.id, {
				path: e.path,
				method: e.method
			}) : r.createResource(i, {
				path: e.path,
				method: e.method
			}) : t === "role" ? n ? r.updateRole(M.value.id, { name: e.name }) : r.createRole(i, e.name) : t === "profile" ? n ? r.updateProfile(M.value.id, { name: e.name }) : r.createProfile(i, e.name) : t === "access" ? r.assignAccess(i, e.accessKind, e.targetId, e.userId) : t === "role-resource" ? r.linkRoleResource(M.value.id, e.targetId) : r.linkProfileRole(M.value.id, e.targetId), [...r], `${t}:${M.value?.id ?? e.userId}`);
			i && t === "access" && (se.value === e.userId && await E(e.userId, S.page, !0), e.accessKind === "role" && ce.value === e.targetId && await ee(e.targetId, w.page, !0), e.accessKind === "profile" && le.value === e.targetId && await D(e.targetId, T.page, !0)), i && xe();
		}
		function De(e, t) {
			Oe.value = e, ae.value = t, j.value = "confirm";
		}
		let Oe = /* @__PURE__ */ H("");
		async function ke() {
			let e = ae.value;
			(!e || await e()) && xe();
		}
		function Ae(e) {
			De("Retirar este administrador puede dejar la aplicación sin administración. El PDP impedirá retirar el último administrador.", async () => _((t, n) => t.removeAdministrator(n, e), ["administrators", "summary"], `admin:${e}`, !0));
		}
		function je(e) {
			De("Eliminar este recurso revoca su protección y puede estar bloqueado si tiene dependencias.", async () => _((t, n) => t.deleteResource(n, e), ["resources", "summary"], `resource:${e}`, !0));
		}
		function Me(e) {
			De("Eliminar este rol requiere que no tenga perfiles ni asignaciones dependientes.", async () => _((t) => t.deleteRole(e), ["roles", "summary"], `role:${e}`, !0));
		}
		function Ne(e) {
			De("Eliminar este perfil requiere que no tenga asignaciones dependientes.", async () => _((t) => t.deleteProfile(e), ["profiles", "summary"], `profile:${e}`, !0));
		}
		function Pe(e) {
			let t = "role" in e;
			De(`Revocar ${t ? `el rol ${e.role.name}` : `el perfil ${e.profile.name}`} de ${e.user.name} (${e.user.email}) retira su acceso vigente.`, async () => {
				let n = await _((n) => t ? n.revokeRoleAssignment(e.role.id, e.id) : n.revokeProfileAssignment(e.profile.id, e.id), [t ? "roleAssignments" : "profileAssignments", "summary"], `assignment:${e.id}`, !0);
				return n && se.value && await E(se.value, S.page, !0), n && t && ce.value && await ee(ce.value, w.page, !0), n && !t && le.value && await D(le.value, T.page, !0), n;
			});
		}
		function Fe(e) {
			let t = M.value.id;
			De("Retirar este recurso elimina el permiso que este rol concede sobre él.", async () => {
				let n = await _((n) => n.unlinkRoleResource(t, e), ["roles"], `role-resource:${t}:${e}`);
				return n && (te("role-resources", t), await b(t, v.page, !0), v.page > 0 && !v.content.length && await b(t, v.page - 1, !0)), n;
			});
		}
		function Ie(e) {
			let t = M.value.id;
			De("Retirar este rol cambia los permisos heredados por este perfil.", async () => {
				let n = await _((n) => n.unlinkProfileRole(t, e), ["profiles"], `profile-role:${t}:${e}`);
				return n && (te("profile-roles", t), await x(t, y.page, !0), y.page > 0 && !y.content.length && await x(t, y.page - 1, !0)), n;
			});
		}
		function Le(e) {
			if (!M.value) return;
			let t = j.value === "role-resource" ? v : y, n = t.page + e;
			n < 0 || n * t.limit >= t.total || (j.value === "role-resource" ? b(M.value.id, n) : j.value === "profile-role" && x(M.value.id, n));
		}
		function Re() {
			let e = ye.value;
			e && (e.page + 1) * e.limit < e.total && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[A.value], e.page + 1);
		}
		function ze() {
			let e = ye.value;
			e && e.page > 0 && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[A.value], e.page - 1);
		}
		return (t, n) => (q(), J("section", {
			class: "shell",
			style: oe(be.value),
			"aria-live": "polite"
		}, [
			Y("header", null, [n[32] ||= Y("div", null, [
				Y("p", { class: "eyebrow" }, "Seguridad · aplicación actual"),
				Y("h2", null, "Control de acceso"),
				Y("p", null, "La información y las acciones están acotadas a esta aplicación.")
			], -1), Y("span", Fl, I(U(i)?.application.name ?? e.options.applicationName ?? "Cargando"), 1)]),
			Y("div", Il, [Y("nav", Ll, [(q(), J(K, null, G(pe, (e) => Y("button", {
				key: e.id,
				"aria-current": A.value === e.id,
				onClick: (t) => A.value = e.id
			}, [Y("span", null, I(e.label), 1), e.id === "summary" ? Q("", !0) : (q(), J("span", zl, I(_e.value[e.id]), 1))], 8, Rl)), 64))]), Y("main", null, [
				Y("div", Bl, [Y("div", null, [Y("h3", null, I(me[A.value]), 1), Y("p", Vl, I(he[A.value]), 1)]), Y("div", Hl, [Y("button", {
					class: "quiet",
					disabled: U(a) || U(f),
					onClick: n[0] ||= (...e) => U(g) && U(g)(...e)
				}, " Actualizar", 8, Ul), A.value === "service" ? Q("", !0) : (q(), J("button", {
					key: 0,
					class: "primary",
					disabled: !U(m) || U(f),
					onClick: n[1] ||= (e) => L()
				}, I(ve.value), 9, Wl))])]),
				e.options.sessionNotice && k.value !== null ? (q(), J("p", Gl, I(k.value > 0 ? `Tu sesión vence en ${k.value} s. La aplicación la renueva con tu siguiente acción; si no, tendrás que iniciar sesión de nuevo.` : "Tu sesión venció. Pulsa Actualizar o vuelve a iniciar sesión en la aplicación."), 1)) : Q("", !0),
				U(p) ? (q(), J("p", Kl, I(U(p)), 1)) : Q("", !0),
				A.value === "summary" ? (q(), zi(ds, {
					key: 2,
					summary: U(i),
					loading: U(a),
					"assignment-count": _e.value.people
				}, null, 8, [
					"summary",
					"loading",
					"assignment-count"
				])) : A.value === "people" ? (q(), zi(Mc, {
					key: 3,
					users: U(u),
					roles: U(s),
					profiles: U(c),
					"person-role-assignments": U(S),
					"person-profile-assignments": U(C),
					"role-assignments": U(w),
					"profile-assignments": U(T),
					busy: U(f),
					onSearchUsers: n[2] ||= (e, t, n) => U(d)(e, t, n),
					onSelectPerson: n[3] ||= (e) => {
						se.value = e.id, U(E)(e.id, 0);
					},
					onSelectRole: n[4] ||= (e) => {
						ce.value = e.id, U(ee)(e.id, 0);
					},
					onSelectProfile: n[5] ||= (e) => {
						le.value = e.id, U(D)(e.id, 0);
					},
					onRevoke: Pe,
					onPersonPage: n[6] ||= (e) => {
						se.value && U(S).page + e >= 0 && U(E)(se.value, U(S).page + e);
					},
					onRolePage: n[7] ||= (e) => {
						ce.value && U(w).page + e >= 0 && U(ee)(ce.value, U(w).page + e);
					},
					onProfilePage: n[8] ||= (e) => {
						le.value && U(T).page + e >= 0 && U(D)(le.value, U(T).page + e);
					}
				}, null, 8, [
					"users",
					"roles",
					"profiles",
					"person-role-assignments",
					"person-profile-assignments",
					"role-assignments",
					"profile-assignments",
					"busy"
				])) : A.value === "service" ? (q(), zi(Pl, {
					key: 4,
					store: U(r),
					"application-id": ie.value,
					"application-name": U(i)?.application.name ?? e.options.applicationName ?? "la aplicación actual",
					"initial-section": "identities"
				}, null, 8, [
					"store",
					"application-id",
					"application-name"
				])) : (q(), J(K, { key: 5 }, [A.value === "resources" ? (q(), zi(bs, {
					key: 0,
					state: U(o),
					busy: U(f),
					onEdit: n[9] ||= (e) => L("resource", e),
					onRemove: n[10] ||= (e) => je(e.id),
					onPrevious: ze,
					onNext: Re
				}, null, 8, ["state", "busy"])) : A.value === "roles" ? (q(), zi(js, {
					key: 1,
					state: U(s),
					busy: U(f),
					onManage: n[11] ||= (e) => L("role-resource", e),
					onEdit: n[12] ||= (e) => L("role", e),
					onRemove: n[13] ||= (e) => Me(e.id),
					onPrevious: ze,
					onNext: Re
				}, null, 8, ["state", "busy"])) : A.value === "profiles" ? (q(), zi(Bs, {
					key: 2,
					state: U(c),
					busy: U(f),
					onManage: n[14] ||= (e) => L("profile-role", e),
					onEdit: n[15] ||= (e) => L("profile", e),
					onRemove: n[16] ||= (e) => Ne(e.id),
					onPrevious: ze,
					onNext: Re
				}, null, 8, ["state", "busy"])) : (q(), zi(qs, {
					key: 3,
					state: U(l),
					busy: U(f),
					onRemove: Ae,
					onPrevious: ze,
					onNext: Re
				}, null, 8, ["state", "busy"]))], 64))
			])]),
			j.value ? (q(), J("div", {
				key: 0,
				class: "backdrop",
				onClick: bo(xe, ["self"])
			}, [j.value === "confirm" ? (q(), zi(rs, {
				key: 1,
				open: !0,
				message: Oe.value,
				busy: U(f),
				onCancel: xe,
				onConfirm: ke
			}, null, 8, ["message", "busy"])) : (q(), J("form", {
				key: 0,
				class: "dialog",
				onSubmit: bo(Ee, ["prevent"])
			}, [
				Y("div", ql, [
					n[33] ||= Y("p", { class: "eyebrow" }, "Esta aplicación", -1),
					Y("h3", null, I(j.value === "role-resource" ? "Administrar recursos del rol" : j.value === "profile-role" ? "Administrar roles del perfil" : ge[A.value]), 1),
					n[34] ||= Y("p", { class: "sub" }, "La acción se aplica solo a esta aplicación.", -1)
				]),
				Y("div", Jl, [j.value === "admin" || j.value === "access" ? (q(), J(K, { key: 0 }, [
					Y("label", null, [n[35] ||= Z("Buscar usuario", -1), W(Y("input", {
						"onUpdate:modelValue": n[17] ||= (e) => F.value.userQuery = e,
						placeholder: "Nombre o correo",
						autocomplete: "off",
						"aria-describedby": "user-search-hint",
						"aria-expanded": de.value,
						"aria-controls": "user-search-results",
						onFocus: n[18] ||= (e) => de.value = !0,
						onClick: n[19] ||= (e) => de.value = !0,
						onKeydown: n[20] ||= So(bo((e) => de.value = !1, ["stop", "prevent"]), ["esc"]),
						onInput: Se
					}, null, 40, Yl), [[
						po,
						F.value.userQuery,
						void 0,
						{ trim: !0 }
					]])]),
					Y("p", {
						id: "user-search-hint",
						class: N(["field-hint", { "is-error": U(u).error }])
					}, I(Te.value), 3),
					de.value && (U(u).loading || U(u).content.length || U(u).error) ? (q(), J("div", {
						key: 0,
						id: "user-search-results",
						class: "user-result-list",
						role: "listbox",
						"aria-label": "Coincidencias de usuario",
						"aria-busy": U(u).loading,
						onScrollPassive: R
					}, [
						U(u).loading && !U(u).content.length ? (q(), J("p", Zl, "Buscando en el directorio…")) : Q("", !0),
						(q(!0), J(K, null, G(U(u).content, (e) => (q(), J("button", {
							key: e.id,
							type: "button",
							class: "user-result",
							role: "option",
							"aria-selected": F.value.userId === e.id,
							onClick: (t) => we(e)
						}, [Y("span", null, I(e.name || e.email), 1), Y("small", null, I(e.email), 1)], 8, Ql))), 128)),
						U(u).content.length ? (q(), J("p", $l, I(U(u).loading ? "Cargando más personas…" : U(u).content.length < U(u).total ? `Mostrando ${U(u).content.length} de ${U(u).total} · desliza para ver más` : `${U(u).total} ${U(u).total === 1 ? "persona" : "personas"}`), 1)) : Q("", !0)
					], 40, Xl)) : Q("", !0),
					ue.value ? (q(), J("div", eu, [
						n[36] ||= Y("span", null, "Persona seleccionada", -1),
						Y("strong", null, I(ue.value.name || ue.value.email), 1),
						Y("small", null, I(ue.value.email), 1)
					])) : Q("", !0),
					j.value === "access" ? (q(), J(K, { key: 2 }, [Y("label", null, [n[38] ||= Z("Tipo", -1), W(Y("select", { "onUpdate:modelValue": n[21] ||= (e) => F.value.accessKind = e }, [...n[37] ||= [Y("option", { value: "role" }, "Rol", -1), Y("option", { value: "profile" }, "Perfil", -1)]], 512), [[mo, F.value.accessKind]])]), Y("label", null, [n[40] ||= Z("Acceso", -1), W(Y("select", {
						"onUpdate:modelValue": n[22] ||= (e) => F.value.targetId = e,
						required: ""
					}, [n[39] ||= Y("option", {
						disabled: "",
						value: ""
					}, "Seleccione un acceso", -1), (q(!0), J(K, null, G(F.value.accessKind === "role" ? U(s).content : U(c).content, (e) => (q(), J("option", {
						key: e.id,
						value: e.id
					}, I(e.name), 9, tu))), 128))], 512), [[mo, F.value.targetId]])])], 64)) : Q("", !0)
				], 64)) : j.value === "application" ? (q(), J(K, { key: 1 }, [
					Y("label", null, [n[41] ||= Z("Nombre", -1), W(Y("input", {
						"onUpdate:modelValue": n[23] ||= (e) => F.value.name = e,
						required: ""
					}, null, 512), [[
						po,
						F.value.name,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[42] ||= Z("Descripción", -1), W(Y("textarea", { "onUpdate:modelValue": n[24] ||= (e) => F.value.description = e }, null, 512), [[
						po,
						F.value.description,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[43] ||= Z("URL base", -1), W(Y("input", {
						"onUpdate:modelValue": n[25] ||= (e) => F.value.baseUrl = e,
						type: "url"
					}, null, 512), [[
						po,
						F.value.baseUrl,
						void 0,
						{ trim: !0 }
					]])])
				], 64)) : j.value === "resource" ? (q(), J(K, { key: 2 }, [Y("label", null, [n[44] ||= Z("Ruta", -1), W(Y("input", {
					"onUpdate:modelValue": n[26] ||= (e) => F.value.path = e,
					placeholder: "/api/v1/notas",
					required: ""
				}, null, 512), [[
					po,
					F.value.path,
					void 0,
					{ trim: !0 }
				]])]), Y("label", null, [n[46] ||= Z("Método", -1), W(Y("select", { "onUpdate:modelValue": n[27] ||= (e) => F.value.method = e }, [...n[45] ||= [
					Y("option", null, "GET", -1),
					Y("option", null, "POST", -1),
					Y("option", null, "PUT", -1),
					Y("option", null, "PATCH", -1),
					Y("option", null, "DELETE", -1)
				]], 512), [[mo, F.value.method]])])], 64)) : j.value === "role" || j.value === "profile" ? (q(), J("label", nu, [n[47] ||= Z("Nombre", -1), W(Y("input", {
					"onUpdate:modelValue": n[28] ||= (e) => F.value.name = e,
					required: ""
				}, null, 512), [[
					po,
					F.value.name,
					void 0,
					{ trim: !0 }
				]])])) : (q(), J(K, { key: 4 }, [Y("label", null, [Z(I(j.value === "role-resource" ? "Agregar recurso" : "Agregar rol"), 1), W(Y("select", {
					"onUpdate:modelValue": n[29] ||= (e) => F.value.targetId = e,
					required: ""
				}, [n[48] ||= Y("option", {
					disabled: "",
					value: ""
				}, "Seleccione una opción", -1), (q(!0), J(K, null, G(j.value === "role-resource" ? U(o).content : U(s).content, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, I("path" in e ? `${e.method} · ${e.path}` : e.name), 9, ru))), 128))], 512), [[mo, F.value.targetId]])]), Y("div", {
					class: "relation-list",
					"aria-busy": j.value === "role-resource" ? U(v).loading : U(y).loading
				}, [
					n[49] ||= Y("p", { class: "sub" }, "Relaciones vigentes", -1),
					(q(!0), J(K, null, G(j.value === "role-resource" ? U(v).content : U(y).content, (e) => (q(), J("div", {
						key: e.id,
						class: "row"
					}, [Y("div", au, [Y("strong", null, I("path" in e ? `${e.method} · ${e.path}` : e.name), 1)]), Y("button", {
						class: "quiet danger",
						type: "button",
						disabled: U(f),
						onClick: (t) => j.value === "role-resource" ? Fe(e.id) : Ie(e.id)
					}, " Retirar ", 8, ou)]))), 128)),
					(j.value === "role-resource" ? U(v).content : U(y).content).length ? Q("", !0) : (q(), J("p", su, " No hay relaciones en esta página. ")),
					X(ss, {
						page: j.value === "role-resource" ? U(v).page : U(y).page,
						limit: j.value === "role-resource" ? U(v).limit : U(y).limit,
						total: j.value === "role-resource" ? U(v).total : U(y).total,
						loading: j.value === "role-resource" ? U(v).loading : U(y).loading,
						label: "Paginación de relaciones",
						onPrevious: n[30] ||= (e) => Le(-1),
						onNext: n[31] ||= (e) => Le(1)
					}, null, 8, [
						"page",
						"limit",
						"total",
						"loading"
					])
				], 8, iu)], 64))]),
				Y("div", cu, [Y("button", {
					class: "quiet",
					type: "button",
					disabled: U(f),
					onClick: xe
				}, " Cancelar", 8, lu), Y("button", {
					class: "primary",
					disabled: U(f)
				}, I(U(f) ? "Guardando…" : "Guardar"), 9, uu)])
			], 32))])) : Q("", !0)
		], 4));
	}
}), pu = ":host{all:initial;display:block}*{box-sizing:border-box}.shell{--field:#f2f3f2;--canvas:#f8f9f7;--paper:#fff;--ink:#111312;--text:#59625d;--faint:#959d98;--line:#1113121f;--soft-line:#11131211;--green-ink:#0b5c39;--green-wash:#e7f1eb;--green-tint:#018b5113;--red:#b93d3c;--amber:#9b6818;--mono:\"IBM Plex Mono\", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;font-family:var(--font);color:var(--ink);background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);font-synthesis:none;overflow:hidden}button,input,select,textarea{font-family:inherit}button{cursor:pointer}button:disabled{opacity:.52;cursor:not-allowed}header{border-bottom:1px solid var(--line);justify-content:space-between;align-items:flex-start;gap:18px;padding:23px 26px 18px;display:flex}.eyebrow,.kicker{color:var(--faint);font:500 10px var(--mono);letter-spacing:.12em;text-transform:uppercase;margin:0 0 7px}h2{letter-spacing:-.04em;margin:0;font-size:28px;font-weight:700}h3{letter-spacing:-.025em;margin:0;font-size:19px;font-weight:600}header p:last-child,.sub,small{color:var(--text);font-size:13px}header p:last-child{margin:6px 0 0}.sub{margin:4px 0 0}.chip,.pill{font:600 10px var(--mono);border-radius:999px;align-items:center;gap:5px;padding:5px 9px;display:inline-flex}.pill{color:var(--accent);background:var(--green-tint);border:1px solid color-mix(in srgb, var(--accent) 22%, transparent)}.chip{height:max-content;color:var(--accent);background:var(--green-tint);border:1px solid color-mix(in srgb, var(--accent) 22%, transparent)}.grid{grid-template-columns:210px 1fr;min-height:470px;display:grid}nav{border-right:1px solid color-mix(in srgb, var(--accent) 14%, transparent);background:var(--green-wash);flex-direction:column;gap:3px;padding:15px 12px;display:flex}nav button{text-align:left;width:100%;min-height:34px;color:var(--text);background:0 0;border:1px solid #0000;border-radius:6px;justify-content:space-between;align-items:center;gap:8px;padding:0 10px;font-size:13px;font-weight:500;transition:all .16s;display:flex}nav button:hover{color:var(--ink);background:#fff9}nav button[aria-current=true]{background:var(--paper);border-color:color-mix(in srgb, var(--accent) 24%, transparent);color:var(--green-ink);font-weight:600}.nav-count{min-width:22px;color:var(--text);text-align:center;font:500 10px var(--mono);background:#1113120f;border-radius:99px;padding:1px 6px}nav button[aria-current=true] .nav-count{background:var(--green-tint);color:var(--accent)}main{background:var(--paper);min-width:0;padding:23px 26px}.title,.actions,.row{align-items:center;gap:10px;display:flex}.title{justify-content:space-between;margin-bottom:18px}.actions{flex-wrap:wrap;justify-content:flex-end}.primary,.quiet{border-radius:6px;align-items:center;gap:7px;height:34px;padding:0 14px;font-size:12px;font-weight:600;transition:all .16s;display:inline-flex}.primary{background:var(--ink);color:#fff;border:0}.primary:hover:not(:disabled){background:var(--accent);transform:translateY(-1px)}.quiet{border:1px solid var(--line);background:var(--paper);color:var(--text)}.quiet:hover:not(:disabled){color:var(--ink);border-color:#11131247}.quiet.danger{color:var(--red);background:#b93d3c0a;border-color:#b93d3c3d}.quiet.danger:hover:not(:disabled){border-color:var(--red);color:var(--red)}.primary.danger{background:var(--red);color:#fff}.primary.danger:hover:not(:disabled){background:#962d2c}:is(button,input,select,textarea,a):focus-visible{outline:2px solid var(--accent);outline-offset:2px}.stats{grid-template-columns:repeat(4,1fr);gap:12px;display:grid}.stat,.panel{border:1px solid var(--line);background:var(--paper);border-radius:12px}.stat{padding:16px}.stat b{color:var(--ink);font:500 28px var(--mono);letter-spacing:-.04em;display:block}.stat small{color:var(--text);margin-top:4px;font-size:12px;display:block}.next-steps{border:1px solid color-mix(in srgb, var(--accent) 20%, transparent);background:var(--green-tint);border-radius:12px;margin-top:16px;padding:16px 18px}.next-steps h4{color:var(--green-ink);margin:0 0 8px;font-size:13px;font-weight:600}.next-steps ol{color:var(--text);margin:0;padding-left:18px;font-size:13px;line-height:1.7}.next-steps li.done{color:var(--faint);text-decoration:line-through}.panel{margin-top:4px;overflow:hidden}.row{border-bottom:1px solid var(--soft-line);padding:13px 16px}.row:last-child{border:0}.row:hover{background:#fafbfa}.grow{flex:1;min-width:0}.grow strong{font-size:13px;font-weight:600;display:block}.grow small{margin-top:2px;display:block}.method{border:1px solid color-mix(in srgb, var(--accent) 22%, transparent);background:var(--green-tint);min-width:58px;color:var(--accent);text-align:center;font:600 10px var(--mono);border-radius:4px;padding:5px 7px}.empty{color:var(--faint);text-align:center;padding:28px;font-size:12px}.error{color:var(--red);background:#b93d3c0f;border:1px solid #b93d3c3d;border-radius:7px;align-items:flex-start;gap:9px;margin:0 0 14px;padding:10px 12px;font-size:12px;line-height:1.45;display:flex}.notice{color:var(--amber);background:#9b681812;border:1px solid #9b681838;border-radius:7px;margin:0 0 14px;padding:10px 12px;font-size:12px;line-height:1.45}.pager{color:var(--text);justify-content:flex-end;align-items:center;gap:10px;margin-top:12px;font-size:12px;display:flex}.backdrop{z-index:20;backdrop-filter:blur(3px);background:#0a110d61;place-items:center;padding:20px;display:grid;position:fixed;inset:0}.dialog{background:var(--paper);width:min(500px,100%);max-height:calc(100vh - 40px);color:var(--ink);font-family:var(--font);border:1px solid #11131229;border-radius:12px;padding:0;overflow:auto;box-shadow:0 22px 60px #091a102e}.dialog-head{border-bottom:1px solid var(--soft-line);padding:24px 28px 16px}.dialog-head h3{letter-spacing:-.03em;font-size:22px}.dialog-body{padding:18px 28px 22px}.actions.bottom,.dialog-foot{border-top:1px solid var(--soft-line);justify-content:flex-end;gap:10px;margin:0;padding:16px 28px;display:flex}.dialog .primary,.dialog .quiet{height:40px}label{color:var(--ink);gap:6px;margin-top:14px;font-size:12px;font-weight:600;display:grid}label:first-child{margin-top:0}input,select,textarea{border:1px solid var(--line);background:var(--field);width:100%;height:40px;color:var(--ink);border-radius:6px;padding:0 12px;font-size:13px;font-weight:400;transition:all .16s}input:focus,select:focus,textarea:focus{background:var(--paper);border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb, var(--accent) 14%, transparent);outline:none}textarea{resize:vertical;height:auto;min-height:78px;padding:10px 12px}.field-hint{color:var(--text);margin:6px 0 0;font-size:12px;line-height:1.4}.field-hint.is-error{color:var(--red)}.relation-list{border:1px solid var(--soft-line);border-radius:10px;margin-top:18px;overflow:hidden}.relation-list>.sub{background:var(--field);color:var(--text);letter-spacing:.04em;text-transform:uppercase;margin:0;padding:10px 14px;font-size:11px;font-weight:600}.relation-list .row{padding:10px 14px}.user-result-list{overscroll-behavior:contain;border:1px solid var(--line);background:var(--paper);border-radius:8px;max-height:min(240px,38vh);margin-top:8px;overflow-y:auto;box-shadow:0 10px 24px #091a1014}.user-result-status{color:var(--text);margin:0;padding:11px 13px;font-size:12px}.user-result-count{border-top:1px solid var(--soft-line);background:var(--field);font-size:11px;position:sticky;bottom:0}.user-result{border:0;border-bottom:1px solid var(--soft-line);width:100%;color:var(--ink);text-align:left;background:0 0;border-radius:0;gap:2px;padding:10px 13px;display:grid}.user-result:last-child{border-bottom:0}.user-result:hover,.user-result:focus-visible,.user-result[aria-selected=true]{color:var(--green-ink);background:var(--green-tint);outline:none}.user-result span{font-size:13px;font-weight:600}.user-result small,.selected-user small{color:var(--text);font-size:12px}.selected-user{border:1px solid color-mix(in srgb, var(--accent) 24%, transparent);background:var(--green-tint);border-radius:6px;gap:2px;margin-top:10px;padding:10px 12px;display:grid}.selected-user>span{color:var(--green-ink);font:500 10px var(--mono);letter-spacing:.1em;text-transform:uppercase}.selected-user strong{color:var(--ink);font-size:13px}.access-workbench{border:1px solid var(--line);background:var(--paper);border-radius:12px;margin-top:4px;overflow:hidden}.access-heading{border-bottom:1px solid var(--soft-line);justify-content:space-between;align-items:flex-start;gap:16px;padding:20px 22px 16px;display:flex}.access-heading h4,.result-title h5{color:var(--ink);letter-spacing:-.025em;margin:2px 0 4px;font-size:19px;font-weight:600}.access-heading p:last-child{color:var(--text);margin:0;font-size:13px}.scope-mark,.count-badge,.admin-mark{background:var(--green-tint);border:1px solid color-mix(in srgb, var(--accent) 22%, transparent);color:var(--accent);font:600 10px var(--mono);white-space:nowrap;border-radius:999px;padding:5px 9px}.perspective-tabs{border-bottom:1px solid var(--soft-line);background:var(--field);grid-template-columns:repeat(3,1fr);gap:6px;padding:8px;display:grid}.perspective-tabs button{min-height:52px;color:var(--text);text-align:left;background:0 0;border:1px solid #0000;border-radius:8px;padding:8px 12px;transition:all .16s}.perspective-tabs button:hover{color:var(--ink);background:#ffffffb3}.perspective-tabs button.active{color:var(--ink);background:var(--paper);border-color:color-mix(in srgb, var(--accent) 26%, transparent)}.perspective-tabs strong,.perspective-tabs small{display:block}.perspective-tabs strong{font-size:13px;font-weight:600}.perspective-tabs small{color:inherit;opacity:.75;margin-top:2px;font-size:11px;font-weight:400}.access-layout{grid-template-columns:minmax(220px,.8fr) minmax(0,1.7fr);min-height:390px;display:grid}.access-query{border-right:1px solid var(--soft-line);background:#fafbfa;padding:18px}.access-query label,.query-label{color:var(--ink);margin:0 0 8px;font-size:12px;font-weight:600;display:block}.query-help{color:var(--text);margin:8px 0 14px;font-size:12px;line-height:1.45}.search-field{border:1px solid var(--line);background:var(--field);border-radius:6px;align-items:center;gap:8px;padding:0 10px;transition:all .16s;display:flex}.search-field:focus-within{background:var(--paper);border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb, var(--accent) 14%, transparent)}.search-field span{color:var(--accent);font-size:18px;line-height:1}.search-field input{height:38px;box-shadow:none;background:0 0;border:0;padding:0}.search-field input:focus{box-shadow:none;background:0 0}.choices,.option-grid{gap:4px;display:grid}.choices{overscroll-behavior:contain;align-content:start;max-height:min(380px,50vh);overflow-y:auto}.people-count{text-align:center;background:#fafbfa;padding:8px 4px;font-size:11px;position:sticky;bottom:0}.choice,.option-grid button{color:var(--ink);text-align:left;background:0 0;border:1px solid #0000;border-radius:6px;padding:8px;transition:all .16s}.choice{align-items:center;gap:9px;display:flex}.choice:hover,.option-grid button:hover{background:var(--green-tint)}.choice.selected,.option-grid button.selected{border-color:color-mix(in srgb, var(--accent) 30%, transparent);background:var(--green-tint);color:var(--green-ink)}.choice strong,.choice small{display:block}.choice small{text-overflow:ellipsis;white-space:nowrap;margin-top:2px;overflow:hidden}.option-grid button{font-size:12px;font-weight:600}.access-results{background:var(--paper);min-width:0;padding:18px 22px}.empty-state{text-align:center;min-height:300px;color:var(--faint);place-content:center;display:grid}.empty-state span{width:38px;height:38px;color:var(--accent);background:var(--green-tint);border-radius:50%;place-items:center;margin:0 auto 10px;font-size:20px;display:grid}.empty-state strong{color:var(--ink);font-size:13px}.empty-state p{max-width:260px;margin:6px 0 0;font-size:12px;line-height:1.5}.identity-strip,.result-title{border-bottom:1px solid var(--soft-line);align-items:center;gap:10px;padding-bottom:14px;display:flex}.identity-strip>div{flex:1;min-width:0}.identity-strip strong,.identity-strip small{display:block}.identity-strip small{margin-top:2px}.avatar{width:28px;height:28px;color:var(--green-ink);background:var(--green-wash);text-transform:uppercase;border-radius:50%;flex:0 0 28px;place-items:center;font-size:11px;font-weight:700;display:grid}.avatar.large{flex-basis:38px;width:38px;height:38px;font-size:15px}.access-group{border:1px solid var(--soft-line);border-radius:10px;margin-top:16px;overflow:hidden}.group-title{background:var(--field);color:var(--text);letter-spacing:.04em;text-transform:uppercase;justify-content:space-between;align-items:center;padding:9px 12px;font-size:11px;font-weight:600;display:flex}.group-title b{min-width:20px;color:var(--accent);background:var(--green-tint);text-align:center;font:600 10px var(--mono);border-radius:99px;padding:1px 6px}.access-row{border-top:1px solid var(--soft-line);align-items:center;gap:10px;min-height:56px;padding:10px 12px;display:flex}.access-row>div{flex:1;min-width:0}.access-row strong,.access-row small{display:block}.access-row strong{color:var(--ink);font-size:13px;font-weight:600}.access-row small{margin-top:3px}.person-row{padding-left:0;padding-right:0}.access-meta{color:var(--faint)!important}.result-title{justify-content:space-between}.result-title h5{font-size:17px}.count-badge{text-align:center;min-width:28px}.compact{text-align:left;padding:14px 12px}@media (width<=700px){header{padding:20px;display:block}.chip{margin-top:14px;display:inline-flex}.grid{grid-template-columns:1fr}nav{border-right:0;border-bottom:1px solid var(--line);flex-direction:row;overflow:auto}nav button{min-width:max-content}main{padding:20px}.stats{grid-template-columns:repeat(2,1fr)}.title{flex-direction:column;align-items:flex-start}.access-heading{padding:18px}.access-layout{grid-template-columns:1fr}.access-query{border-right:0;border-bottom:1px solid var(--soft-line)}.access-results{padding:18px}.perspective-tabs{grid-template-columns:repeat(3,minmax(122px,1fr));overflow-x:auto}.scope-mark,.admin-mark{display:none}}.service-admin{border:1px solid var(--line);background:var(--paper);border-radius:12px;overflow:hidden}.service-head{border-bottom:1px solid var(--line);justify-content:space-between;align-items:flex-start;gap:16px;padding:20px 22px 16px;display:flex}.service-head h4,.section-title h5,.role-detail h5{letter-spacing:-.025em;margin:0;font-size:18px}.service-head p:last-child,.section-title p{color:var(--text);margin:5px 0 0;font-size:12px}.service-tabs{border-bottom:1px solid var(--line);background:var(--field);gap:2px;padding:0 14px;display:flex;overflow-x:auto}.service-tabs button{color:var(--text);white-space:nowrap;background:0 0;border:0;border-bottom:2px solid #0000;padding:12px 10px 10px;font-size:12px}.service-tabs button.active{border-bottom-color:var(--accent);color:var(--ink);background:var(--paper);font-weight:600}.service-content{padding:20px 22px 24px}.section-title{justify-content:space-between;align-items:flex-end;gap:16px;margin-bottom:16px;display:flex}.inline-form,.role-create,.toolbar,.request-form,.row-actions{flex-wrap:wrap;align-items:center;gap:8px;display:flex}.inline-form input,.role-create input,.request-form input,.request-form select,.add-resource select,.section-title select,.toolbar select{border:1px solid var(--line);background:var(--paper);min-height:34px;color:var(--ink);border-radius:6px;padding:0 9px}.inline-form input{width:210px}.role-create input:first-child{width:100px}.role-create input:nth-child(2){width:150px}.secret-box{border:1px solid color-mix(in srgb, var(--accent) 22%, transparent);background:var(--green-tint);color:var(--green-ink);border-radius:8px;gap:5px;margin:0 0 14px;padding:12px;display:grid}.secret-box code{color:var(--ink);overflow-wrap:anywhere;font:12px var(--mono)}.secret-box small{color:var(--text)}.chip.active{color:var(--green-ink);background:var(--green-wash)}.chip.suspended{color:var(--amber);background:#fff4d9}.chip.revoked{color:var(--red);background:#fdecec}.role-layout{grid-template-columns:minmax(180px,.7fr) minmax(0,1.3fr);gap:14px;display:grid}.role-choice{border:0;border-bottom:1px solid var(--soft-line);background:var(--paper);width:100%;color:var(--ink);text-align:left;gap:3px;padding:12px;display:grid}.role-choice.selected{background:var(--green-tint)}.role-choice small,.role-detail .sub,.service-admin .row small{color:var(--text);font-size:11px}.role-detail{min-height:220px;padding:14px}.role-detail code{color:var(--accent);font:11px var(--mono);margin-left:6px}.add-resource{color:var(--text);gap:6px;margin-top:14px;font-size:11px;display:grid}.toolbar{color:var(--text);justify-content:space-between;margin:-4px 0 12px;font-size:12px}.toolbar label,.request-form label{color:var(--text);gap:6px;font-size:11px;font-weight:600;display:grid}.request-form{grid-template-columns:repeat(2,minmax(180px,1fr));align-items:end;max-width:780px;display:grid}.request-form .primary{grid-column:1/-1;justify-self:start}.success{background:var(--green-tint);color:var(--green-ink);border-radius:6px;margin:12px 22px 0;padding:9px 11px;font-size:12px}.service-admin>.error{margin:12px 22px 0}.service-admin button,.service-admin input,.service-admin select{font-family:inherit}.service-tabs{background:#f4f6f4;gap:5px;padding:8px 14px 0}.service-tabs button{appearance:none;color:#68736d;background:0 0;border:1px solid #0000;border-bottom:0;border-radius:7px 7px 0 0;min-height:36px;padding:0 13px;font-size:12px;font-weight:500;transition:background .16s,color .16s,border-color .16s}.service-tabs button:hover{color:var(--ink);background:#ffffffb8}.service-tabs button.active{border-color:var(--line);background:var(--paper);color:var(--green-ink);box-shadow:0 -1px #fff9}.service-admin .primary,.service-admin .quiet{border-radius:7px;min-height:36px;padding:0 13px;font-size:12px;font-weight:600;transition:transform .16s,background .16s,border-color .16s,box-shadow .16s}.service-admin .primary{background:var(--ink);box-shadow:0 1px 2px #1113121f}.service-admin .primary:hover:not(:disabled){background:var(--accent);transform:translateY(-1px);box-shadow:0 3px 8px #018b5129}.service-admin .quiet{background:var(--paper)}.service-admin .quiet:hover:not(:disabled){border-color:color-mix(in srgb, var(--accent) 38%, transparent);background:var(--green-tint);color:var(--green-ink)}.service-admin .quiet.danger:hover:not(:disabled){border-color:color-mix(in srgb, var(--red) 46%, transparent);color:var(--red);background:#b93d3c12}.service-admin input,.service-admin select{min-height:38px;color:var(--ink);background:#fff;border:1px solid #d4dad6;border-radius:7px;outline:0;font-size:12px;transition:border-color .16s,box-shadow .16s,background .16s}.service-admin input{padding:0 11px}.service-admin select{padding:0 30px 0 11px}.service-admin input::placeholder{color:#9aa39e}.service-admin input:hover:not(:focus),.service-admin select:hover:not(:focus){border-color:#aebbb3}.service-admin input:focus,.service-admin select:focus{border-color:color-mix(in srgb, var(--accent) 68%, #fff);box-shadow:0 0 0 3px #018b511c}.service-admin input:disabled,.service-admin select:disabled{color:#9aa39e;background:#f1f3f1}.section-title{border-bottom:1px solid var(--soft-line);padding-bottom:15px}.section-title h5{color:var(--ink);font-size:19px}.section-title p{max-width:62ch;line-height:1.45}.service-admin .panel{border-color:#dfe4e0;box-shadow:0 1px 2px #11131208}.service-admin .row{min-height:58px;padding:12px 15px}.service-admin .row:hover{background:#f8faf8}.service-admin .row strong{color:var(--ink)}.service-admin .chip{border:1px solid #0000}.role-choice{min-height:68px;padding:13px 14px;transition:background .16s,box-shadow .16s}.role-choice:hover{background:#f7faf7}.role-choice.selected{box-shadow:inset 3px 0 0 var(--accent);background:var(--green-tint)}.role-detail{border-color:#dfe4e0}.secret-box{box-shadow:0 1px 3px #1113120a}@media (width<=700px){.service-head,.section-title{flex-direction:column;align-items:stretch}.inline-form,.role-create{align-items:stretch}.inline-form input,.role-create input:first-child,.role-create input:nth-child(2){width:100%}.role-layout,.request-form{grid-template-columns:1fr}.request-form .primary{grid-column:auto}.service-content{padding:16px}}@media (width<=560px){.shell{border-radius:min(var(--radius), 10px)}header{padding:16px}h2{font-size:23px}main{padding:16px}.title{gap:12px}.actions{justify-content:stretch;width:100%}.actions .primary,.actions .quiet{flex:auto;justify-content:center}.row{flex-wrap:wrap;padding:12px}.row .grow{flex-basis:calc(100% - 70px)}.stats{gap:8px}.stat{padding:12px}.stat b{font-size:22px}.backdrop{align-items:end;padding:10px}.dialog{width:100%;max-height:calc(100vh - 20px)}.dialog-head{padding:18px 18px 12px}.dialog-head h3{font-size:19px}.dialog-body{padding:14px 18px 18px}.actions.bottom,.dialog-foot{padding:12px 18px}.actions.bottom .primary,.actions.bottom .quiet{flex:1 1 0;justify-content:center}.access-query,.access-results,.access-heading{padding:14px}.access-layout{min-height:0}.empty-state{min-height:180px}.identity-strip,.access-row{flex-wrap:wrap}.pager{justify-content:space-between}}", mu = "uco-security-administration", hu = "uco-security-fonts";
function gu() {
	if (typeof document > "u" || document.getElementById(hu)) return;
	let e = document.createElement("link");
	e.id = hu, e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap", document.head.appendChild(e);
}
var _u = class extends HTMLElement {
	root = this.attachShadow({ mode: "open" });
	options = /* @__PURE__ */ Ut();
	app;
	component;
	configure(e) {
		if (!e.applicationId && !e.applicationName || !e.apiBaseUrl) throw TypeError("applicationId o applicationName y apiBaseUrl son obligatorios.");
		this.options.value = {
			...e,
			apiBaseUrl: e.apiBaseUrl.replace(/\/$/, "")
		}, this.start();
	}
	connectedCallback() {
		this.start();
	}
	disconnectedCallback() {}
	async refresh() {
		await this.component?.refresh();
	}
	destroy() {
		this.app?.unmount(), this.app = void 0, this.component = void 0, this.root.replaceChildren();
	}
	start() {
		if (this.app || !this.options.value) return;
		this.options.value.loadFonts !== !1 && gu();
		let e = document.createElement("style");
		e.textContent = pu;
		let t = document.createElement("div");
		this.root.replaceChildren(e, t), this.app = Eo({ setup: () => () => ya(fu, {
			options: this.options.value,
			ref: (e) => {
				this.component = e;
			}
		}) }), this.app.mount(t);
	}
};
function vu(e, t) {
	if (!(e instanceof HTMLElement)) throw TypeError("El contenedor debe ser un HTMLElement.");
	let n = new _u();
	return n.configure(t), e.replaceChildren(n), {
		element: n,
		refresh: () => n.refresh(),
		unmount: () => {
			n.parentElement === e && e.replaceChildren(), n.destroy();
		}
	};
}
customElements.get(mu) || customElements.define(mu, _u);
//#endregion
export { _u as SecurityAdministrationElement, vu as mount };
