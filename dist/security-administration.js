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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, te = /-\w/g, E = T((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, D = T((e) => e.replace(ne, "-$1").toLowerCase()), O = T((e) => e.charAt(0).toUpperCase() + e.slice(1)), k = T((e) => e ? `on${O(e)}` : ""), A = (e, t) => !Object.is(e, t), re = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, j = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, ie = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ae, oe = () => ae ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function se(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? ue(r) : se(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var ce = /;(?![^(]*\))/g, M = /:([^]+)/, le = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ue(e) {
	let t = {};
	return e.replace(le, (e) => e.startsWith("/*") ? "" : e).split(ce).forEach((e) => {
		if (e) {
			let n = e.split(M);
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
var de = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", fe = /* @__PURE__ */ e(de);
de + "";
function pe(e) {
	return !!e || e === "";
}
function me(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = ve(e[i], t[i], n);
	return r;
}
function he(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && ve(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function ge(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? he(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !ve(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function _e(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function ve(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? _e(e, t, n, me) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : _e(e, t, n, ge) : String(e) === String(t))));
}
function ye(e, t) {
	return e.findIndex((e) => ve(e, t));
}
var be = (e) => !!(e && e.__v_isRef === !0), P = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? be(e) ? P(e.value) : JSON.stringify(e, xe, 2) : String(e), xe = (e, t) => be(t) ? xe(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Se(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Se(e)) } : _(t) ? Se(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Se = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, F, Ce = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && F && (F.active ? (this.parent = F, this.index = (F.scopes || (F.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = F;
			try {
				return F = this, e();
			} finally {
				F = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = F, F = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (F === this) F = this.prevScope;
			else {
				let e = F;
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
function we() {
	return F;
}
function Te(e, t = !1) {
	F && F.cleanups.push(e);
}
var I, Ee = /* @__PURE__ */ new WeakSet(), De = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, F && (F.active ? F.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ee.has(this) && (Ee.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || je(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, We(this), Pe(this);
		let e = I, t = Be;
		I = this, Be = !0;
		try {
			return this.fn();
		} finally {
			Fe(this), I = e, Be = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Re(e);
			this.deps = this.depsTail = void 0, We(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ee.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ie(this) && this.run();
	}
	get dirty() {
		return Ie(this);
	}
}, Oe = 0, ke, Ae;
function je(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Ae, Ae = e;
		return;
	}
	e.next = ke, ke = e;
}
function Me() {
	Oe++;
}
function Ne() {
	if (--Oe > 0) return;
	if (Ae) {
		let e = Ae;
		for (Ae = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; ke;) {
		let t = ke;
		for (ke = void 0; t;) {
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
function Pe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Fe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Re(r), ze(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ie(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Le(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Le(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ge) || (e.globalVersion = Ge, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ie(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = I, r = Be;
	I = e, Be = !0;
	try {
		Pe(e);
		let n = e.fn(e._value);
		(t.version === 0 || A(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		I = n, Be = r, Fe(e), e.flags &= -3;
	}
}
function Re(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Re(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function ze(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Be = !0, Ve = [];
function He() {
	Ve.push(Be), Be = !1;
}
function Ue() {
	let e = Ve.pop();
	Be = e === void 0 || e;
}
function We(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = I;
		I = void 0;
		try {
			t();
		} finally {
			I = e;
		}
	}
}
var Ge = 0, Ke = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, qe = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!I || !Be || I === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== I) t = this.activeLink = new Ke(I, this), I.deps ? (t.prevDep = I.depsTail, I.depsTail.nextDep = t, I.depsTail = t) : I.deps = I.depsTail = t, Je(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = I.depsTail, t.nextDep = void 0, I.depsTail.nextDep = t, I.depsTail = t, I.deps === t && (I.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ge++, this.notify(e);
	}
	notify(e) {
		Me();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ne();
		}
	}
};
function Je(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Je(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ye = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ Symbol(""), Ze = /* @__PURE__ */ Symbol(""), Qe = /* @__PURE__ */ Symbol("");
function L(e, t, n) {
	if (Be && I) {
		let t = Ye.get(e);
		t || Ye.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new qe()), r.map = t, r.key = n), r.track();
	}
}
function $e(e, t, n, r, i, a) {
	let o = Ye.get(e);
	if (!o) {
		Ge++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Me(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === Qe || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(Qe)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Xe)), f(e) && s(o.get(Ze)));
				break;
			case "delete":
				i || (s(o.get(Xe)), f(e) && s(o.get(Ze)));
				break;
			case "set": f(e) && s(o.get(Xe));
		}
	}
	Ne();
}
function et(e, t) {
	let n = Ye.get(e);
	return n && n.get(t);
}
function tt(e) {
	let t = /* @__PURE__ */ z(e);
	return t === e || (L(t, "iterate", Qe), /* @__PURE__ */ zt(e)) ? t : /* @__PURE__ */ Rt(e) ? /* @__PURE__ */ Lt(e) ? t.map((e) => Ut(Ht(e))) : t.map(Ut) : t.map(Ht);
}
function nt(e) {
	return L(e = /* @__PURE__ */ z(e), "iterate", Qe), e;
}
function rt(e, t) {
	return /* @__PURE__ */ Rt(e) ? Ut(/* @__PURE__ */ Lt(e) ? Ht(t) : t) : Ht(t);
}
var it = {
	__proto__: null,
	[Symbol.iterator]() {
		return at(this, Symbol.iterator, (e) => rt(this, e));
	},
	concat(...e) {
		return tt(this).concat(...e.map((e) => d(e) ? tt(e) : e));
	},
	entries() {
		return at(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
	},
	every(e, t) {
		return st(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return st(this, "filter", e, t, (e) => e.map((e) => rt(this, e)), arguments);
	},
	find(e, t) {
		return st(this, "find", e, t, (e) => rt(this, e), arguments);
	},
	findIndex(e, t) {
		return st(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return st(this, "findLast", e, t, (e) => rt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return st(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return st(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return lt(this, "includes", e);
	},
	indexOf(...e) {
		return lt(this, "indexOf", e);
	},
	join(e) {
		return tt(this).join(e);
	},
	lastIndexOf(...e) {
		return lt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return st(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ut(this, "pop");
	},
	push(...e) {
		return ut(this, "push", e);
	},
	reduce(e, ...t) {
		return ct(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ct(this, "reduceRight", e, t);
	},
	shift() {
		return ut(this, "shift");
	},
	some(e, t) {
		return st(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ut(this, "splice", e);
	},
	toReversed() {
		return tt(this).toReversed();
	},
	toSorted(e) {
		return tt(this).toSorted(e);
	},
	toSpliced(...e) {
		return tt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ut(this, "unshift", e);
	},
	values() {
		return at(this, "values", (e) => rt(this, e));
	}
};
function at(e, t, n) {
	let r = nt(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ zt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ot = Array.prototype;
function st(e, t, n, r, i, a) {
	let o = nt(e), s = o !== e && !/* @__PURE__ */ zt(e), c = o[t];
	if (c !== ot[t]) {
		let t = c.apply(e, a);
		return s ? Ht(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, rt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ct(e, t, n, r) {
	let i = nt(e), a = i !== e && !/* @__PURE__ */ zt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = rt(e, t)), n.call(this, t, rt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? rt(e, c) : c;
}
function lt(e, t, n) {
	let r = /* @__PURE__ */ z(e);
	L(r, "iterate", Qe);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Bt(n[0]) ? (n[0] = /* @__PURE__ */ z(n[0]), r[t](...n)) : i;
}
function ut(e, t, n = []) {
	He(), Me();
	let r = (/* @__PURE__ */ z(e))[t].apply(e, n);
	return Ne(), Ue(), r;
}
var dt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), ft = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function pt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ z(this);
	return L(t, "has", e), t.hasOwnProperty(e);
}
var mt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Mt : jt : i ? At : kt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = it[t])) return e;
			if (t === "hasOwnProperty") return pt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ B(e) ? e : n);
		if ((_(t) ? ft.has(t) : dt(t)) || (r || L(e, "get", t), i)) return o;
		if (/* @__PURE__ */ B(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Ft(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Ft(o) : /* @__PURE__ */ R(o) : o;
	}
}, ht = class extends mt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Rt(i);
			if (!/* @__PURE__ */ zt(n) && !/* @__PURE__ */ Rt(n) && (i = /* @__PURE__ */ z(i), n = /* @__PURE__ */ z(n)), !a && /* @__PURE__ */ B(i) && !/* @__PURE__ */ B(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ B(e) ? e : r);
		return e === /* @__PURE__ */ z(r) && s && (o ? A(n, i) && $e(e, "set", t, n, i) : $e(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && $e(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !ft.has(t)) && L(e, "has", t), n;
	}
	ownKeys(e) {
		return L(e, "iterate", d(e) ? "length" : Xe), Reflect.ownKeys(e);
	}
}, gt = class extends mt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, _t = /* @__PURE__ */ new ht(), vt = /* @__PURE__ */ new gt(), yt = /* @__PURE__ */ new ht(!0), bt = (e) => e, xt = (e) => Reflect.getPrototypeOf(e);
function St(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ z(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? bt : t ? Ut : Ht;
		return !t && L(a, "iterate", l ? Ze : Xe), s(Object.create(u), { next() {
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
function Ct(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function wt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ z(r), a = /* @__PURE__ */ z(n);
			e || (A(n, a) && L(i, "get", n), L(i, "get", a));
			let { has: o } = xt(i), s = t ? bt : e ? Ut : Ht;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && L(/* @__PURE__ */ z(t), "iterate", Xe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ z(n), i = /* @__PURE__ */ z(t);
			return e || (A(t, i) && L(r, "has", t), L(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ z(a), s = t ? bt : e ? Ut : Ht;
			return !e && L(o, "iterate", Xe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Ct("add"),
		set: Ct("set"),
		delete: Ct("delete"),
		clear: Ct("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ z(this), r = xt(n), i = /* @__PURE__ */ z(e), a = !t && !/* @__PURE__ */ zt(e) && !/* @__PURE__ */ Rt(e) ? i : e;
			return r.has.call(n, a) || A(e, a) && r.has.call(n, e) || A(i, a) && r.has.call(n, i) || (n.add(a), $e(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ zt(n) && !/* @__PURE__ */ Rt(n) && (n = /* @__PURE__ */ z(n));
			let r = /* @__PURE__ */ z(this), { has: i, get: a } = xt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ z(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? A(n, s) && $e(r, "set", e, n, s) : $e(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ z(this), { has: n, get: r } = xt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ z(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && $e(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ z(this), t = e.size !== 0, n = e.clear();
			return t && $e(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = St(r, e, t);
	}), n;
}
function Tt(e, t) {
	let n = wt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Et = { get: /* @__PURE__ */ Tt(!1, !1) }, Dt = { get: /* @__PURE__ */ Tt(!1, !0) }, Ot = { get: /* @__PURE__ */ Tt(!0, !1) }, kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap();
function Nt(e) {
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
function R(e) {
	return /* @__PURE__ */ Rt(e) ? e : It(e, !1, _t, Et, kt);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
	return It(e, !1, yt, Dt, At);
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
	return It(e, !0, vt, Ot, jt);
}
function It(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Nt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return /* @__PURE__ */ Rt(e) ? /* @__PURE__ */ Lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function z(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ z(t) : e;
}
function Vt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && j(e, "__v_skip", !0), e;
}
var Ht = (e) => v(e) ? /* @__PURE__ */ R(e) : e, Ut = (e) => v(e) ? /* @__PURE__ */ Ft(e) : e;
// @__NO_SIDE_EFFECTS__
function B(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function V(e) {
	return Gt(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
	return Gt(e, !0);
}
function Gt(e, t) {
	return /* @__PURE__ */ B(e) ? e : new Kt(e, t);
}
var Kt = class {
	constructor(e, t) {
		this.dep = new qe(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ z(e), this._value = t ? e : Ht(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ zt(e) || /* @__PURE__ */ Rt(e);
		e = n ? e : /* @__PURE__ */ z(e), A(e, t) && (this._rawValue = e, this._value = n ? e : Ht(e), this.dep.trigger());
	}
};
function H(e) {
	return /* @__PURE__ */ B(e) ? e.value : e;
}
var qt = {
	get: (e, t, n) => t === "__v_raw" ? e : H(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ B(i) && !/* @__PURE__ */ B(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Jt(e) {
	return /* @__PURE__ */ Lt(e) ? e : new Proxy(e, qt);
}
var Yt = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ z(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ Bt(i) || /* @__PURE__ */ zt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = H(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ B(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ B(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return et(this._raw, this._key);
	}
}, Xt = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Zt(e, t, n) {
	return /* @__PURE__ */ B(e) ? e : h(e) ? new Xt(e) : v(e) && arguments.length > 1 ? Qt(e, t, n) : /* @__PURE__ */ V(e);
}
function Qt(e, t, n) {
	return new Yt(e, t, n);
}
var $t = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new qe(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ge - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && I !== this) return je(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Le(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function en(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new $t(r, i, n);
}
var tn = {}, nn = /* @__PURE__ */ new WeakMap(), rn = void 0;
function an(e, t = !1, n = rn) {
	if (n) {
		let t = nn.get(n);
		t || nn.set(n, t = []), t.push(e);
	}
}
function on(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ zt(e) || o === !1 || o === 0 ? sn(e, 1) : sn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ B(e) ? (g = () => e.value, y = /* @__PURE__ */ zt(e)) : /* @__PURE__ */ Lt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Lt(e) || /* @__PURE__ */ zt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ B(e)) return e.value;
		if (/* @__PURE__ */ Lt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			He();
			try {
				_();
			} finally {
				Ue();
			}
		}
		let t = rn;
		rn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			rn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => sn(e(), t);
	}
	let x = we(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(tn) : tn, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => A(e, C[t])) : A(t, C))) {
					_ && _();
					let e = rn;
					rn = m;
					try {
						let e = [
							t,
							C === tn ? void 0 : b && C[0] === tn ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						rn = e;
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new De(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => an(e, !1, m), _ = m.onStop = () => {
		let e = nn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			nn.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function sn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ B(e)) sn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) sn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		sn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) sn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && sn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function cn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		un(e, t, n);
	}
}
function ln(e, t, n, r) {
	if (h(e)) {
		let i = cn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			un(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(ln(e[a], t, n, r));
		return i;
	}
}
function un(e, n, r, i = !0) {
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
			He(), cn(o, null, 10, [
				e,
				i,
				a
			]), Ue();
			return;
		}
	}
	dn(e, r, a, i, s);
}
function dn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var U = [], fn = -1, pn = [], mn = null, hn = 0, gn = /* @__PURE__ */ Promise.resolve(), _n = null;
function vn(e) {
	let t = _n || gn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function yn(e) {
	let t = fn + 1, n = U.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = U[r], a = Tn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function bn(e) {
	if (!(e.flags & 1)) {
		let t = Tn(e), n = U[U.length - 1];
		!n || !(e.flags & 2) && t >= Tn(n) ? U.push(e) : U.splice(yn(t), 0, e), e.flags |= 1, xn();
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
	for (; n < U.length; n++) {
		let t = U[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			U.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
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
		for (fn = 0; fn < U.length; fn++) {
			let e = U[fn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), cn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; fn < U.length; fn++) {
			let e = U[fn];
			e && (e.flags &= -2);
		}
		fn = -1, U.length = 0, wn(e), _n = null, (U.length || pn.length) && En(e);
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
function jn(e, n) {
	if (Dn === null) return e;
	let r = ha(Dn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && sn(o), i.push({
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
function Mn(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (He(), ln(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ue());
	}
}
function Nn(e, t) {
	if (ta) {
		let n = ta.provides, r = ta.parent && ta.parent.provides;
		r === n && (n = ta.provides = Object.create(r)), n[e] = t;
	}
}
function Pn(e, t, n = !1) {
	let r = na();
	if (r || Br) {
		let i = Br ? Br._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Fn = /* @__PURE__ */ Symbol.for("v-scx"), In = () => Pn(Fn);
function Ln(e, t, n) {
	return Rn(e, t, n);
}
function Rn(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ca) {
		if (c === "sync") {
			let e = In();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = ta;
	u.call = (e, t, n) => ln(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		_i(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : bn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = on(e, n, u);
	return ca && (f ? f.push(h) : d && h()), h;
}
function zn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Bn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = aa(this), s = Rn(i, a.bind(r), n);
	return o(), s;
}
function Bn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Vn = /* @__PURE__ */ Symbol("_vte"), Hn = (e) => e.__isTeleport, Un = /* @__PURE__ */ Symbol("_leaveCb");
function Wn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== ji) {
			t = n;
			break;
		}
	}
	return t;
}
function Gn(e) {
	if (!er(e)) return Hn(e.type) && e.children ? Wn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Kn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Kn(Hn(n.type) && Gn(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function qn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Jn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Yn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xn = /* @__PURE__ */ new WeakMap();
function Zn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Zn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if ($n(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Zn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? ha(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ z(v), b = v === t ? i : (e) => !Yn(_, e) && u(y, e), x = (e, t) => !(t && Yn(_, t));
	if (m != null && m !== p) {
		if (Qn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ B(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) cn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ B(p);
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
					i(), Xn.delete(e);
				};
				t.id = -1, Xn.set(e, t), _i(t, r);
			} else Qn(e), i();
		}
	}
}
function Qn(e) {
	let t = Xn.get(e);
	t && (t.flags |= 8, Xn.delete(e));
}
oe().requestIdleCallback, oe().cancelIdleCallback;
var $n = (e) => !!e.type.__asyncLoader, er = (e) => e.type.__isKeepAlive;
function tr(e, t) {
	rr(e, "a", t);
}
function nr(e, t) {
	rr(e, "da", t);
}
function rr(e, t, n = ta) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ar(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) er(e.parent.vnode) && ir(r, t, n, e), e = e.parent;
	}
}
function ir(e, t, n, r) {
	let i = ar(t, e, r, !0);
	fr(() => {
		c(r[t], i);
	}, n);
}
function ar(e, t, n = ta, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			He();
			let i = aa(n), a = ln(t, n, e, r);
			return i(), Ue(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var or = (e) => (t, n = ta) => {
	(!ca || e === "sp") && ar(e, (...e) => t(...e), n);
}, sr = or("bm"), cr = or("m"), lr = or("bu"), ur = or("u"), dr = or("bum"), fr = or("um"), pr = or("sp"), mr = or("rtg"), hr = or("rtc");
function gr(e, t = ta) {
	ar("ec", e, t);
}
var _r = /* @__PURE__ */ Symbol.for("v-ndc");
function W(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Lt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ zt(e), s = /* @__PURE__ */ Rt(e), e = nt(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Ut(Ht(e[n])) : Ht(e[n]) : e[n], n, void 0, a && a[n]);
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
var vr = (e) => e ? sa(e) ? ha(e) : vr(e.parent) : null, yr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => vr(e.parent),
	$root: (e) => vr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Or(e),
	$forceUpdate: (e) => e.f ||= () => {
		bn(e.update);
	},
	$nextTick: (e) => e.n ||= vn.bind(e.proxy),
	$watch: (e) => zn.bind(e)
}), br = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), xr = {
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
			else if (br(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Cr && (s[n] = 0);
		}
		let d = yr[n], f, p;
		if (d) return n === "$attrs" && L(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return br(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || br(n, c) || u(o, c) || u(i, c) || u(yr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Sr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Cr = !0;
function wr(e) {
	let t = Or(e), n = e.proxy, i = e.ctx;
	Cr = !1, t.beforeCreate && Er(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: T, renderTriggered: te, errorCaptured: E, serverPrefetch: ne, expose: D, inheritAttrs: O, components: k, directives: A, filters: re } = t;
	if (u && Tr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ R(t));
	}
	if (Cr = !0, o) for (let e in o) {
		let t = o[e], a = _a({
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
	if (c) for (let e in c) Dr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Nn(t, e[t]);
		});
	}
	f && Er(f, e, "c");
	function j(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (j(sr, p), j(cr, m), j(lr, g), j(ur, _), j(tr, y), j(nr, b), j(gr, E), j(hr, T), j(mr, te), j(dr, S), j(fr, w), j(pr, ne), d(D)) {
		if (D.length) {
			let t = e.exposed ||= {};
			D.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ee && e.render === r && (e.render = ee), O != null && (e.inheritAttrs = O), k && (e.components = k), A && (e.directives = A), ne && Jn(e);
}
function Tr(e, t, n = r) {
	d(e) && (e = Nr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Pn(r.from || n, r.default, !0) : Pn(r.from || n) : Pn(r), /* @__PURE__ */ B(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function Er(e, t, n) {
	ln(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Dr(e, t, n, r) {
	let i = r.includes(".") ? Bn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Ln(i, n);
	} else if (h(e)) Ln(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Dr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Ln(i, r, e);
		}
	}
}
function Or(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => kr(c, e, o, !0)), kr(c, t, o)), v(t) && a.set(t, c), c;
}
function kr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && kr(e, a, n, !0), i && i.forEach((t) => kr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Ar[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Ar = {
	data: jr,
	props: Fr,
	emits: Fr,
	methods: Pr,
	computed: Pr,
	beforeCreate: G,
	created: G,
	beforeMount: G,
	mounted: G,
	beforeUpdate: G,
	updated: G,
	beforeDestroy: G,
	beforeUnmount: G,
	destroyed: G,
	unmounted: G,
	activated: G,
	deactivated: G,
	errorCaptured: G,
	serverPrefetch: G,
	components: Pr,
	directives: Pr,
	watch: Ir,
	provide: jr,
	inject: Mr
};
function jr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Mr(e, t) {
	return Pr(Nr(e), Nr(t));
}
function Nr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function G(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Pr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Sr(e), Sr(t ?? {})) : t;
}
function Ir(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = G(e[r], t[r]);
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
			version: ya,
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
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, ha(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (ln(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
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
var Br = null, Vr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function Hr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Vr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(ie)));
	let c, l = i[c = k(n)] || i[c = k(E(n))];
	!l && o && (l = i[c = k(D(n))]), l && ln(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, ln(u, e, 6, a);
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
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, D(t)) || u(e, t));
}
function Kr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = kn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = qi(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = qi(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : qr(c);
		}
	} catch (t) {
		Ni.length = 0, un(t, e, 1), v = X(ji);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = Jr(y, a)), b = Ki(b, y, !1, !0));
	}
	return n.dirs && (b = Ki(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Kn(Hn(b.type) && Gn(b) || b, n.transition), v = b, kn(_), v;
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
	return n === "style" && v(r) && v(i) ? !ve(r, i) : r !== i;
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
	e.props = n ? r ? i : /* @__PURE__ */ Pt(i) : e.type.props ? i : a, e.attrs = a;
}
function ri(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ z(i), [c] = e.propsOptions, l = !1;
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
						let t = E(o);
						i[t] = ai(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ii(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = D(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ai(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && $e(e.attrs, "set", "");
}
function ii(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = E(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Gr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ z(r), i = c || t;
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
					let o = aa(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === D(n)) && (r = !0));
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
		let n = E(c[e]);
		ci(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = E(e);
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
	return e[0] !== "$" && !ee(e);
}
var li = (e) => e === "_" || e === "_ctx" || e === "$stable", ui = (e) => d(e) ? e.map(qi) : [qi(e)], di = (e, t, n) => {
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
		e ? (mi(r, t, n), n && j(r, "_", e, !0)) : fi(t, r);
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
	let a = oe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Vi(e, t) && (i = he(e), N(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
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
				k(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? A(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, ve);
		}
		d != null && a ? Zn(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Zn(e.ref, null, o, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) T(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, T = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && E(e.children, d, null, r, i, bi(e, a), s, u), _ && Mn(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Zi(f, r, e);
		}
		_ && Mn(e, null, r, "beforeMount");
		let v = Si(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && _i(() => {
			try {
				f && Zi(f, r, e), v && g.enter(d), _ && Mn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Oi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, E = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Ji(e[l]) : qi(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, ne = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && xi(r, !1), (g = h.onVnodeBeforeUpdate) && Zi(g, r, n, e), f && Mn(n, e, r, "beforeUpdate"), r && xi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? D(e.dynamicChildren, d, l, r, i, bi(n, a), o) : s || ce(e, n, l, null, r, i, bi(n, a), o, !1), u > 0) {
			if (u & 16) O(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && O(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && _i(() => {
			g && Zi(g, r, n, e), f && Mn(n, e, r, "updated");
		}, i);
	}, D = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === K || !Vi(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, O = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, k = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), E(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (D(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Ci(e, t, !0)) : ce(e, t, n, f, i, a, s, c, l);
	}, A = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : j(t, n, r, i, a, o, c) : ie(e, t, c);
	}, j = (e, t, n, r, i, a, o) => {
		let s = e.component = ea(e, r, i);
		if (er(e) && (s.ctx.renderer = ve), la(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ae, o), !e.el) {
				let r = s.subTree = X(ji);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ae(s, e, t, n, i, a, o);
	}, ie = (e, t, n) => {
		let r = t.component = e.component;
		if (Yr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, se(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, ae = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ti(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							_i(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				xi(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && re(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Zi(d, s, t, c), xi(e, !0);
				let f = Kr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), he(p), e, i, a), t.el = f.el, u === null && Qr(e, f.el), r && _i(r, i), (d = t.props && t.props.onVnodeUpdated) && _i(() => Zi(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $n(t);
				if (xi(e, !1), l && re(l), !m && (o = c && c.onVnodeBeforeMount) && Zi(o, d, t), xi(e, !0), s && be) {
					let t = () => {
						e.subTree = Kr(e), be(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Kr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && _i(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					_i(() => Zi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && $n(d.vnode) && d.vnode.shapeFlag & 256) && e.a && _i(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new De(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => bn(u), xi(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ri(e, t.props, r, n), gi(e, t.children, n), He(), Cn(e), Ue();
	}, ce = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				le(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				M(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && me(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? le(l, d, n, r, i, a, o, s, c) : me(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && E(d, n, r, i, a, o, s, c));
	}, M = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Ji(t[p]) : qi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? me(e, a, o, !0, !1, f) : E(t, r, i, a, o, s, c, l, f);
	}, le = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Ji(t[u]) : qi(t[u]);
			if (Vi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Ji(t[p]) : qi(t[p]);
			if (Vi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Ji(t[u]) : qi(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) N(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Ji(t[u]) : qi(t[u]);
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
			c.move(e, t, n, ve);
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
			if (r === 0) l.persisted && !a[Un] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), _i(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Un];
					a._isLeaving && a[Un](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, N = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (He(), Zn(s, null, n, e, !0), Ue()), p != null && (!e.ctx || e.ctx === t) && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !$n(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Zi(_, t, e), u & 6) pe(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Mn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, ve, r) : l && !l.hasOnce && (a !== K || d > 0 && d & 64) ? me(l, t, n, !1, !0) : (a === K && d & 384 || !i && u & 16) && me(c, t, n), r && de(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && _i(() => {
			_ && Zi(_, t, e), h && Mn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, de = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === K) {
			fe(n, r);
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
	}, fe = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, pe = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ei(c), Ei(l), r && re(r), i.stop(), a ? (a.flags |= 8, N(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, N(o, e, t, n)), s && _i(s, t), _i(() => {
			e.isUnmounted = !0;
		}, t);
	}, me = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) N(e[o], t, n, r, i);
	}, he = (e) => {
		if (e.shapeFlag & 6) return he(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Vn];
		return n ? h(n) : t;
	}, ge = !1, _e = (e, t, n) => {
		let r;
		e == null ? t._vnode && (N(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ge ||= (ge = !0, Cn(r), wn(), !1);
	}, ve = {
		p: v,
		um: N,
		m: ue,
		r: de,
		mt: j,
		mc: E,
		pc: ce,
		pbc: D,
		n: he,
		o: e
	}, ye, be;
	return i && ([ye, be] = i(ve)), {
		render: _e,
		hydrate: ye,
		createApp: zr(_e, ye)
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
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ji(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Ci(t, a)), a.type === Ai && (a.patchFlag === -1 && (a = i[e] = Ji(a)), a.el = t.el), a.type === ji && !a.el && (a.el = t.el);
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
var Hi = ({ key: e }) => e ?? null, Ui = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ B(e) || h(e) ? {
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
	return s ? (Yi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Ii > 0 && !o && Pi && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Pi.push(c), c;
}
var X = Wi;
function Wi(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === _r) && (e = ji), Bi(e)) {
		let r = Ki(e, t, !0);
		return n && Yi(r, n), Ii > 0 && !a && Pi && (r.shapeFlag & 6 ? Pi[Pi.indexOf(e)] = r : Pi.push(r)), r.patchFlag = -2, r;
	}
	if (ga(e) && (e = e.__vccOpts), t) {
		t = Gi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = N(e)), v(n) && (/* @__PURE__ */ Bt(n) && !d(n) && (n = s({}, n)), t.style = se(n));
	}
	let o = g(e) ? 1 : Oi(e) ? 128 : Hn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return Y(e, t, n, r, i, o, a, !0);
}
function Gi(e) {
	return e ? /* @__PURE__ */ Bt(e) || ti(e) ? s({}, e) : e : null;
}
function Ki(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Xi(i || {}, t) : i, u = {
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
	return c && r && Kn(u, c.clone(u)), u;
}
function Z(e = " ", t = 0) {
	return X(Ai, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (q(), zi(ji, null, e)) : X(ji, null, e);
}
function qi(e) {
	return e == null || typeof e == "boolean" ? X(ji) : d(e) ? X(K, null, e.slice()) : Bi(e) ? Ji(e) : X(Ai, null, String(e));
}
function Ji(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ki(e);
}
function Yi(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Yi(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !ti(t) ? t._ctx = Dn : r === 3 && Dn && (Dn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			Yi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Dn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Z(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Xi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = N([t.class, r.class]));
		else if (e === "style") t.style = se([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Zi(e, t, n, r = null) {
	ln(e, t, 7, [n, r]);
}
var Qi = Lr(), $i = 0;
function ea(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || Qi, o = {
		uid: $i++,
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
		scope: new Ce(!0),
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
var ta = null, na = () => ta || Dn, ra, ia;
{
	let e = oe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ra = t("__VUE_INSTANCE_SETTERS__", (e) => ta = e), ia = t("__VUE_SSR_SETTERS__", (e) => ca = e);
}
var aa = (e) => {
	let t = ta;
	return ra(e), e.scope.on(), () => {
		e.scope.off(), ra(t);
	};
}, oa = () => {
	ta && ta.scope.off(), ra(null);
};
function sa(e) {
	return e.vnode.shapeFlag & 4;
}
var ca = !1;
function la(e, t = !1, n = !1) {
	t && ia(t);
	let { props: r, children: i } = e.vnode, a = sa(e);
	ni(e, r, a, t), hi(e, i, n || t);
	let o = a ? ua(e, t) : void 0;
	return t && ia(!1), o;
}
function ua(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, xr);
	let { setup: r } = n;
	if (r) {
		He();
		let n = e.setupContext = r.length > 1 ? ma(e) : null, i = aa(e), a = cn(r, e, 0, [e.props, n]), o = y(a);
		if (Ue(), i(), (o || e.sp) && !$n(e) && Jn(e), o) {
			if (a.then(oa, oa), t) return a.then((n) => {
				ia(!0);
				try {
					da(e, n, t);
				} finally {
					ia(!1);
				}
			}).catch((t) => {
				un(t, e, 0);
			});
			e.asyncDep = a;
		} else da(e, a, t);
	} else fa(e, t);
}
function da(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Jt(t)), fa(e, n);
}
function fa(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = aa(e);
		He();
		try {
			wr(e);
		} finally {
			Ue(), t();
		}
	}
}
var pa = { get(e, t) {
	return L(e, "get", ""), e[t];
} };
function ma(e) {
	return {
		attrs: new Proxy(e.attrs, pa),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ha(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Jt(Vt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in yr) return yr[n](e);
		},
		has(e, t) {
			return t in e || t in yr;
		}
	}) : e.proxy;
}
function ga(e) {
	return h(e) && "__vccOpts" in e;
}
var _a = (e, t) => /* @__PURE__ */ en(e, t, ca);
function va(e, t, n) {
	try {
		Li(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? Bi(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Bi(n) && (n = [n]), X(e, t, n));
	} finally {
		Li(1);
	}
}
var ya = "3.5.43", ba = void 0, xa = typeof window < "u" && window.trustedTypes;
if (xa) try {
	ba = /* @__PURE__ */ xa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Sa = ba ? (e) => ba.createHTML(e) : (e) => e, Ca = "http://www.w3.org/2000/svg", wa = "http://www.w3.org/1998/Math/MathML", Ta = typeof document < "u" ? document : null, Ea = Ta && /* @__PURE__ */ Ta.createElement("template"), Da = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ta.createElementNS(Ca, e) : t === "mathml" ? Ta.createElementNS(wa, e) : n ? Ta.createElement(e, { is: n }) : Ta.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ta.createTextNode(e),
	createComment: (e) => Ta.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ta.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			Ea.innerHTML = Sa(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Ea.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Oa = /* @__PURE__ */ Symbol("_vtc");
function ka(e, t, n) {
	let r = e[Oa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Aa = /* @__PURE__ */ Symbol("_vod"), ja = /* @__PURE__ */ Symbol("_vsh"), Ma = /* @__PURE__ */ Symbol(""), Na = /(?:^|;)\s*display\s*:/;
function Pa(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ia(r, t, "");
			}
			else for (let e in t) n[e] ?? Ia(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ia(r, i, "") : Ba(e, i, !g(t) && t ? t[i] : void 0, o) || Ia(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Ma];
			e && (n += ";" + e), r.cssText = n, a = Na.test(n);
		}
	} else t && e.removeAttribute("style");
	Aa in e && (e[Aa] = a ? r.display : "", e[ja] && (r.display = "none"));
}
var Fa = /\s*!important$/;
function Ia(e, t, n) {
	if (d(n)) n.forEach((n) => Ia(e, t, n));
	else if (n ??= "", t.startsWith("--")) Fa.test(n) ? e.setProperty(t, n.replace(Fa, ""), "important") : e.setProperty(t, n);
	else {
		let r = za(e, t);
		Fa.test(n) ? e.setProperty(D(r), n.replace(Fa, ""), "important") : e[r] = n;
	}
}
var La = [
	"Webkit",
	"Moz",
	"ms"
], Ra = {};
function za(e, t) {
	let n = Ra[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return Ra[t] = r;
	r = O(r);
	for (let n = 0; n < La.length; n++) {
		let i = La[n] + r;
		if (i in e) return Ra[t] = i;
	}
	return t;
}
function Ba(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Va = "http://www.w3.org/1999/xlink";
function Ha(e, t, n, r, i, a = fe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Va, t.slice(6, t.length)) : e.setAttributeNS(Va, t, n) : n == null || a && !pe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Ua(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Sa(n) : n);
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
		r === "boolean" ? n = pe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Wa(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ga(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Ka = /* @__PURE__ */ Symbol("_vei");
function qa(e, t, n, r, i = null) {
	let a = e[Ka] || (e[Ka] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Xa(t);
		r ? Wa(e, n, a[t] = eo(r, i), s) : o && (Ga(e, n, o, s), a[t] = void 0);
	}
}
var Ja = /(Once|Passive|Capture)$/, Ya = /^on:?(?:Once|Passive|Capture)$/;
function Xa(e) {
	let t, n;
	for (; (n = e.match(Ja)) && !Ya.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : D(e.slice(2)), t];
}
var Za = 0, Qa = /* @__PURE__ */ Promise.resolve(), $a = () => Za ||= (Qa.then(() => Za = 0), Date.now());
function eo(e, t) {
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
				e && ln(e, t, 5, a);
			}
		} else ln(r, t, 5, [e]);
	};
	return n.value = e, n.attached = $a(), n;
}
var to = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, no = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? ka(e, r, c) : t === "style" ? Pa(e, n, r) : a(t) ? o(t) || qa(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : ro(e, t, r, c)) ? (Ua(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ha(e, t, r, c, s, t !== "value")) : e._isVueCE && (io(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Ua(e, E(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ha(e, t, r, c));
};
function ro(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && to(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return to(t) && g(n) ? !1 : t in e;
}
function io(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var ao = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => re(t, e) : t;
};
function oo(e) {
	e.target.composing = !0;
}
function so(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var co = /* @__PURE__ */ Symbol("_assign"), lo = /* @__PURE__ */ Symbol("_initialValue");
function uo(e, t, n) {
	return t && (e = e.trim()), n && (e = ie(e)), e;
}
var fo = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[lo] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[lo] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[co] = ao(i);
		let a = r || i.props && i.props.type === "number";
		Wa(e, t ? "change" : "input", (t) => {
			t.target.composing || e[co](uo(e.value, n, a));
		}), (n || a) && Wa(e, "change", () => {
			e.value = uo(e.value, n, a);
		}), t || (Wa(e, "compositionstart", oo), Wa(e, "compositionend", so), Wa(e, "change", so));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[lo];
		delete e[lo], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[co](uo(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[co] = ao(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? ie(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, po = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Wa(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? ie(go(e)) : go(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[co](i);
			} finally {
				vn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[co] = ao(r);
	},
	mounted(e, { value: t }) {
		ho(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[co] = ao(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, (!n || n[0] !== e.multiple || !mo(t, n[1], n[0])) && ho(e, t);
	}
};
function mo(e, t, n) {
	if (!n || d(e)) return ve(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function ho(e, t) {
	let n = e.multiple, r = d(t);
	if (!n || r || p(t)) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = go(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : ye(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (ve(go(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function go(e) {
	return "_value" in e ? e._value : e.value;
}
var _o = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], vo = {
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
	exact: (e, t) => _o.some((n) => e[`${n}Key`] && !t.includes(n))
}, yo = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = vo[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, bo = /* @__PURE__ */ s({ patchProp: no }, Da), xo;
function So() {
	return xo ||= vi(bo);
}
var Co = ((...e) => {
	let t = So().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = To(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, wo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function wo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function To(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/security-api.ts
function Eo(e) {
	return e === "MFA_REQUIRED" ? "Esta operación requiere verificación en dos pasos. Vuelva a autenticarse con su segundo factor e inténtelo de nuevo." : e === "NOT_AUTHORIZED_TO_ADMINISTER_TENANT_CATALOG" ? "Para definir o modificar roles y perfiles de todo el inquilino debe administrar al menos una aplicación." : "No tiene permisos para administrar la seguridad de esta aplicación.";
}
var Do = {
	ASSIGNMENT_ALREADY_ACTIVE: "Esta persona ya tiene ese rol vigente en la aplicación.",
	PROFILE_ASSIGNMENT_ALREADY_ACTIVE: "Esta persona ya tiene ese perfil vigente en la aplicación.",
	PROTECTED_ROLE: "El rol ADMIN administra la aplicación y no se puede modificar ni eliminar."
}, Oo = /\s*\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi;
function ko(e) {
	return e && e.replace(Oo, "").replace(/\s{2,}/g, " ").trim() || void 0;
}
var Ao = class extends Error {
	status;
	code;
	fields;
	constructor(e, t, n = "No fue posible completar la solicitud.", r = []) {
		super(n), this.status = e, this.code = t, this.fields = r, this.name = "ApiError";
	}
}, jo = class {
	options;
	baseUrl;
	constructor(e) {
		this.options = e, this.baseUrl = e.apiBaseUrl.replace(/\/$/, "");
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
		if (t) return t;
		let n = new Ao(401, "UNAUTHENTICATED", "No hay una sesión vigente. Inicie sesión de nuevo.");
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
			throw e instanceof DOMException && e.name === "AbortError" ? e : new Ao(0, "NETWORK_ERROR", "No fue posible conectar con el PDP.");
		}
		if (!i.ok) {
			let e = await i.json().catch(() => null), t = i.status === 403 ? Eo(e?.code) : i.status === 404 ? "El elemento ya no existe o no pertenece a esta aplicación." : i.status === 409 ? "La operación entra en conflicto con el estado actual." : i.status === 400 ? "Revise los datos ingresados." : i.status === 429 ? "Demasiadas solicitudes. Espere unos segundos e inténtelo de nuevo." : i.status === 503 ? "El servicio no está disponible temporalmente. Inténtelo de nuevo en unos segundos." : `El servicio respondió ${i.status}.`, n = new Ao(i.status, e?.code, i.status === 403 ? t : (e?.code ? Do[e.code] : void 0) ?? ko(e?.detail ?? e?.message) ?? t, e?.fieldErrors ?? e?.errors ?? []);
			throw this.report(n), n;
		}
		if (i.status !== 204) return (await i.json()).data;
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
function Mo(e) {
	let t = /* @__PURE__ */ V(""), n = /* @__PURE__ */ V(), r = /* @__PURE__ */ V(!1), i = /* @__PURE__ */ V(""), a = /* @__PURE__ */ V(!1), o = /* @__PURE__ */ R(/* @__PURE__ */ new Set()), s = /* @__PURE__ */ R($()), c = /* @__PURE__ */ R($()), l = /* @__PURE__ */ R($()), u = /* @__PURE__ */ R($()), d = /* @__PURE__ */ R($()), f = /* @__PURE__ */ R($()), p = /* @__PURE__ */ R($()), m = /* @__PURE__ */ R($()), h = /* @__PURE__ */ R($()), g = /* @__PURE__ */ R($()), _ = /* @__PURE__ */ R($()), v = /* @__PURE__ */ R($()), y = /* @__PURE__ */ R($()), b = /* @__PURE__ */ R($()), x = /* @__PURE__ */ new Map(), S, C = _a(() => new jo(e.value)), w = _a(() => !!n.value && !r.value), ee = {
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
	}, T = {
		resources: s,
		roles: c,
		profiles: l,
		administrators: u,
		roleAssignments: d,
		profileAssignments: f
	}, te = (e, n, r) => `${t.value}:${e}:${n}:${r}`;
	function E() {
		x.clear(), n.value = void 0;
		for (let e of Object.values(T)) Object.assign(e, $(), { limit: e.limit });
		Object.assign(p, $()), Object.assign(m, $()), Object.assign(h, $()), Object.assign(g, $()), Object.assign(_, $()), Object.assign(v, $()), Object.assign(y, $()), Object.assign(b, $());
	}
	async function ne() {
		S?.abort(), S = new AbortController(), r.value = !0, i.value = "";
		try {
			let e = await C.value.resolveApplicationId(S.signal);
			t.value = e, n.value = await C.value.getSummary(e, S.signal);
		} catch (e) {
			Ho(e) || (i.value = Uo(e));
		} finally {
			r.value = !1;
		}
	}
	async function D(e, n = T[e].page, r = !1) {
		if (!t.value) return;
		let i = T[e], a = te(e, n, i.limit);
		i.abortController?.abort(), i.error = null;
		let o = !r && x.get(a);
		if (o) {
			Vo(i, o);
			return;
		}
		let s = new AbortController();
		i.abortController = s, i.loading = !0;
		try {
			let r = await ee[e](C.value, t.value, n, i.limit, s.signal);
			if (i.abortController !== s) return;
			x.set(a, r), Vo(i, r);
		} catch (e) {
			!Ho(e) && i.abortController === s && (i.error = Uo(e));
		} finally {
			i.abortController === s && (i.loading = !1);
		}
	}
	async function O(e, n = 0) {
		if (!t.value || !e.trim()) {
			Object.assign(p, $());
			return;
		}
		p.abortController?.abort();
		let r = new AbortController();
		p.abortController = r, p.loading = !0, p.error = null;
		try {
			let i = await C.value.searchUsers(t.value, e.trim(), {
				page: n,
				size: p.limit
			}, r.signal);
			if (p.abortController !== r) return;
			Vo(p, i);
		} catch (e) {
			Ho(e) || (p.error = Uo(e));
		} finally {
			p.abortController === r && (p.loading = !1);
		}
	}
	async function k(e, n = m.page, r = !1) {
		return ae("role-resources", e, m, (r) => C.value.getRoleResources(t.value, e, {
			page: n,
			size: m.limit
		}, r), n, r);
	}
	async function A(e, n = h.page, r = !1) {
		return ae("profile-roles", e, h, (r) => C.value.getProfileRoles(t.value, e, {
			page: n,
			size: h.limit
		}, r), n, r);
	}
	async function re(e, n = _.page, r = !1) {
		if (!t.value) return;
		let i = `${t.value}:${e}:user-assignments:${n}:${_.limit}`;
		_.abortController?.abort();
		let a = r ? void 0 : x.get(i);
		if (a) {
			Vo(_, a.roleAssignments), Vo(v, a.profileAssignments);
			return;
		}
		let o = new AbortController();
		_.abortController = o, v.abortController = o, _.loading = v.loading = !0;
		try {
			let r = await C.value.getUserAssignments(t.value, e, {
				page: n,
				size: _.limit
			}, o.signal);
			if (_.abortController !== o) return;
			x.set(i, r), Vo(_, r.roleAssignments), Vo(v, r.profileAssignments);
		} catch (e) {
			if (!Ho(e)) {
				let t = Uo(e);
				_.error = v.error = t;
			}
		} finally {
			_.abortController === o && (_.loading = v.loading = !1);
		}
	}
	async function j(e, n = y.page, r = !1) {
		return ae("role-assignments", e, y, (r) => C.value.getAssignmentsForRole(t.value, e, {
			page: n,
			size: y.limit
		}, r), n, r);
	}
	async function ie(e, n = b.page, r = !1) {
		return ae("profile-assignments", e, b, (r) => C.value.getAssignmentsForProfile(t.value, e, {
			page: n,
			size: b.limit
		}, r), n, r);
	}
	async function ae(e, n, r, i, a, o) {
		if (!t.value) return;
		let s = `${t.value}:${n}:${e}:${a}:${r.limit}`;
		r.abortController?.abort(), r.error = null;
		let c = o ? void 0 : x.get(s);
		if (c) {
			Vo(r, c);
			return;
		}
		let l = new AbortController();
		r.abortController = l, r.loading = !0;
		try {
			let e = await i(l.signal);
			if (r.abortController !== l) return;
			x.set(s, e), Vo(r, e);
		} catch (e) {
			!Ho(e) && r.abortController === l && (r.error = Uo(e));
		} finally {
			r.abortController === l && (r.loading = !1);
		}
	}
	let oe = [
		":user-assignments:",
		":role-assignments:",
		":profile-assignments:"
	];
	function se(...e) {
		if (e.includes("roleAssignments") || e.includes("profileAssignments")) for (let e of [...x.keys()]) e.startsWith(`${t.value}:`) && oe.some((t) => e.includes(t)) && x.delete(e);
		for (let r of e) {
			if (r === "summary") {
				n.value = void 0;
				continue;
			}
			for (let e of x.keys()) e.startsWith(`${t.value}:${r}:`) && x.delete(e);
			T[r].loaded = !1;
		}
	}
	function ce(e, n) {
		for (let r of x.keys()) r.startsWith(`${t.value}:${n}:${e}:`) && x.delete(r);
	}
	async function M() {
		E(), await ne();
	}
	function le(e) {
		return e ? o.has(e) : o.size > 0;
	}
	async function ue(e, n, r = "global", s = !1) {
		if (!t.value || o.has(r)) return !1;
		o.add(r), a.value = !0, i.value = "";
		try {
			await e(C.value, t.value), se(...n);
			let r = n.filter((e) => e !== "summary");
			return await Promise.all(r.map((e) => D(e, T[e].page, !0))), s && await Promise.all(r.filter((e) => T[e].page > 0 && T[e].content.length === 0).map((e) => D(e, T[e].page - 1, !0))), n.includes("summary") && await ne(), !0;
		} catch (e) {
			return i.value = Uo(e), !1;
		} finally {
			o.delete(r), a.value = o.size > 0;
		}
	}
	return Ln(e, () => {
		E(), ne();
	}, {
		immediate: !0,
		deep: !0
	}), Te(() => {
		S?.abort();
		for (let e of Object.values(T)) e.abortController?.abort();
		p.abortController?.abort(), m.abortController?.abort(), h.abortController?.abort(), g.abortController?.abort(), _.abortController?.abort(), v.abortController?.abort(), y.abortController?.abort(), b.abortController?.abort();
	}), {
		applicationId: t,
		summary: n,
		summaryLoading: r,
		loading: r,
		saving: a,
		mutations: o,
		isMutating: le,
		error: i,
		ready: w,
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
		load: D,
		loadSummary: ne,
		loadRoleResources: k,
		loadProfileRoles: A,
		loadUserAssignments: re,
		loadAssignmentsForRole: j,
		loadAssignmentsForProfile: ie,
		searchUsers: O,
		refresh: M,
		mutate: ue,
		invalidate: se,
		invalidateRelation: ce
	};
}
function No(e) {
	return {
		summary: e.summary,
		loading: e.summaryLoading,
		load: e.loadSummary
	};
}
function Po(e) {
	return e.resources;
}
function Fo(e) {
	return e.roles;
}
function Io(e) {
	return e.profiles;
}
function Lo(e) {
	return e.administrators;
}
function Ro(e) {
	return e.roleAssignments;
}
function zo(e) {
	return e.profileAssignments;
}
function Bo(e) {
	return {
		state: e.users,
		search: e.searchUsers
	};
}
function Vo(e, t) {
	e.content = t.content, e.total = t.total, e.page = t.page, e.limit = t.limit, e.loaded = !0;
}
function Ho(e) {
	return e instanceof DOMException && e.name === "AbortError";
}
function Uo(e) {
	return e instanceof Error ? e.message : "No fue posible cargar la seguridad.";
}
//#endregion
//#region src/components/ConfirmDangerDialog.vue?vue&type=script&setup=true&lang.ts
var Wo = {
	class: "dialog",
	role: "alertdialog",
	"aria-modal": "true",
	"aria-labelledby": "confirm-title"
}, Go = { class: "sub" }, Ko = { class: "actions bottom" }, qo = ["disabled"], Jo = ["disabled"], Yo = /* @__PURE__ */ qn({
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
			onClick: n[2] ||= yo((e) => t.$emit("cancel"), ["self"])
		}, [Y("div", Wo, [
			n[3] ||= Y("h3", { id: "confirm-title" }, "Confirmar acción destructiva", -1),
			Y("p", Go, P(e.message), 1),
			Y("div", Ko, [Y("button", {
				class: "quiet",
				disabled: e.busy,
				onClick: n[0] ||= (e) => t.$emit("cancel")
			}, " Cancelar ", 8, qo), Y("button", {
				"data-testid": "confirm-danger",
				class: "primary danger",
				disabled: e.busy,
				onClick: n[1] ||= (e) => t.$emit("confirm")
			}, " Confirmar ", 8, Jo)])
		])])) : Q("", !0);
	}
}), Xo = ["aria-label"], Zo = ["disabled"], Qo = ["disabled"], $o = /* @__PURE__ */ qn({
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
			}, " Anterior ", 8, Zo),
			Y("span", null, "Página " + P(e.page + 1) + " de " + P(Math.ceil(e.total / e.limit)), 1),
			Y("button", {
				class: "quiet",
				disabled: (e.page + 1) * e.limit >= e.total || e.loading,
				onClick: n[1] ||= (e) => t.$emit("next")
			}, " Siguiente ", 8, Qo)
		], 8, Xo)) : Q("", !0);
	}
}), es = {
	key: 0,
	class: "empty"
}, ts = {
	key: 1,
	class: "stats"
}, ns = /* @__PURE__ */ qn({
	__name: "SecuritySummaryPanel",
	props: {
		summary: {},
		loading: { type: Boolean },
		assignmentCount: {}
	},
	setup(e) {
		return (t, n) => e.loading ? (q(), J("p", es, "Consultando políticas de seguridad…")) : e.summary ? (q(), J("div", ts, [(q(!0), J(K, null, W([
			[e.summary.counts.administrators, "administradores"],
			[e.assignmentCount, "asignaciones"],
			[e.summary.counts.roles, "roles"],
			[e.summary.counts.resources, "recursos"]
		], (e) => (q(), J("div", {
			key: e[1],
			class: "stat"
		}, [Y("b", null, P(e[0]), 1), Y("small", null, P(e[1]), 1)]))), 128))])) : Q("", !0);
	}
}), rs = ["aria-busy"], is = {
	key: 0,
	class: "empty"
}, as = {
	key: 1,
	class: "error"
}, os = { class: "method" }, ss = { class: "grow" }, cs = ["disabled", "onClick"], ls = ["disabled", "onClick"], us = {
	key: 2,
	class: "empty"
}, ds = /* @__PURE__ */ qn({
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
			e.state.loading ? (q(), J("div", is, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", as, P(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, W(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("span", os, P(t.method), 1),
				Y("div", ss, [Y("strong", null, P(t.path), 1), r[2] ||= Y("small", null, "Recurso protegido", -1)]),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, cs),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, ls)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", us, "No hay datos en esta página.")) : Q("", !0)
		], 8, rs), X($o, {
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
}), fs = ["aria-busy"], ps = {
	key: 0,
	class: "empty"
}, ms = {
	key: 1,
	class: "error"
}, hs = { class: "grow" }, gs = { class: "pill" }, _s = ["disabled", "onClick"], vs = ["disabled", "onClick"], ys = ["disabled", "onClick"], bs = { key: 1 }, xs = {
	key: 2,
	class: "empty"
}, Ss = /* @__PURE__ */ qn({
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
			e.state.loading ? (q(), J("div", ps, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", ms, P(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, W(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", hs, [Y("strong", null, P(t.name), 1), Y("small", null, P(t.resourceCount ?? 0) + " recursos autorizados", 1)]),
				Y("span", gs, P(n(t) ? "Protegido" : "Aplicación"), 1),
				n(t) ? (q(), J("small", bs, "Administra la aplicación; no se edita.")) : (q(), J(K, { key: 0 }, [
					Y("button", {
						class: "quiet",
						disabled: e.busy,
						onClick: (e) => r("manage", t)
					}, "Administrar recursos", 8, _s),
					Y("button", {
						class: "quiet",
						disabled: e.busy,
						onClick: (e) => r("edit", t)
					}, "Editar", 8, vs),
					Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("remove", t)
					}, "Eliminar", 8, ys)
				], 64))
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", xs, "No hay datos en esta página.")) : Q("", !0)
		], 8, fs), X($o, {
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
}), Cs = ["aria-busy"], ws = {
	key: 0,
	class: "empty"
}, Ts = {
	key: 1,
	class: "error"
}, Es = { class: "grow" }, Ds = ["disabled", "onClick"], Os = ["disabled", "onClick"], ks = ["disabled", "onClick"], As = {
	key: 2,
	class: "empty"
}, js = /* @__PURE__ */ qn({
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
			e.state.loading ? (q(), J("div", ws, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", Ts, P(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, W(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", Es, [Y("strong", null, P(t.name), 1), Y("small", null, P(t.roleCount ?? 0) + " roles agrupados", 1)]),
				r[2] ||= Y("span", { class: "pill" }, "Aplicación", -1),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("manage", t)
				}, "Administrar roles", 8, Ds),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, Os),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, ks)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", As, "No hay datos en esta página.")) : Q("", !0)
		], 8, Cs), X($o, {
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
}), Ms = ["aria-busy"], Ns = {
	key: 0,
	class: "empty"
}, Ps = {
	key: 1,
	class: "error"
}, Fs = { class: "grow" }, Is = ["disabled", "onClick"], Ls = {
	key: 2,
	class: "empty"
}, Rs = /* @__PURE__ */ qn({
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
			e.state.loading ? (q(), J("div", Ns, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", Ps, P(e.state.error), 1)) : Q("", !0),
			(q(!0), J(K, null, W(e.state.content, (t) => (q(), J("div", {
				key: t.user.id,
				class: "row"
			}, [Y("div", Fs, [
				Y("strong", null, P(t.user.name), 1),
				Y("small", null, P(t.user.email), 1),
				Y("small", null, "Administrador · desde " + P(r(t.validFrom)), 1)
			]), Y("button", {
				class: "quiet danger",
				disabled: e.busy,
				onClick: (e) => n("remove", t.user.id)
			}, "Retirar", 8, Is)]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", Ls, "No hay datos en esta página.")) : Q("", !0)
		], 8, Ms), X($o, {
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
}), zs = {
	class: "access-workbench",
	"aria-label": "Administración de personas y accesos"
}, Bs = {
	class: "perspective-tabs",
	role: "tablist",
	"aria-label": "Perspectiva de consulta"
}, Vs = ["aria-selected", "onClick"], Hs = { class: "access-layout" }, Us = { class: "access-query" }, Ws = { class: "search-field" }, Gs = {
	key: 0,
	class: "choices",
	"aria-label": "Resultados de personas"
}, Ks = ["onClick"], qs = { class: "avatar" }, Js = {
	key: 0,
	class: "empty compact"
}, Ys = { class: "option-grid" }, Xs = ["onClick"], Zs = {
	key: 0,
	class: "empty compact"
}, Qs = { class: "option-grid" }, $s = ["onClick"], ec = {
	key: 0,
	class: "empty compact"
}, tc = { class: "access-results" }, nc = {
	key: 0,
	class: "empty-state"
}, rc = { class: "identity-strip" }, ic = { class: "avatar large" }, ac = {
	key: 0,
	class: "admin-mark"
}, oc = {
	key: 0,
	class: "error"
}, sc = { class: "access-group" }, cc = { class: "group-title" }, lc = ["disabled", "onClick"], uc = {
	key: 0,
	class: "empty compact"
}, dc = { class: "access-group" }, fc = { class: "group-title" }, pc = ["disabled", "onClick"], mc = {
	key: 0,
	class: "empty compact"
}, hc = { class: "result-title" }, gc = { class: "count-badge" }, _c = {
	key: 0,
	class: "error"
}, vc = { class: "avatar" }, yc = { class: "access-meta" }, bc = ["disabled", "onClick"], xc = {
	key: 1,
	class: "empty compact"
}, Sc = {
	key: 3,
	class: "empty-state"
}, Cc = /* @__PURE__ */ qn({
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
		let n = e, r = t, i = /* @__PURE__ */ V("person"), a = /* @__PURE__ */ V(""), o = /* @__PURE__ */ V(), s = /* @__PURE__ */ V(), c = /* @__PURE__ */ V();
		Ln(a, (e) => r("searchUsers", e));
		let l = _a(() => i.value === "role" ? n.roleAssignments : n.profileAssignments);
		function u(e) {
			o.value = e, r("selectPerson", e);
		}
		function d(e) {
			s.value = e, r("selectRole", e);
		}
		function f(e) {
			c.value = e, r("selectProfile", e);
		}
		function p(e) {
			return "role" in e ? `Rol · ${e.role.name}` : `Perfil · ${e.profile.name}`;
		}
		function m(e) {
			return new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(new Date(e));
		}
		function h(e) {
			i.value === "person" ? r("personPage", e) : i.value === "role" ? r("rolePage", e) : r("profilePage", e);
		}
		return (t, n) => (q(), J("section", zs, [
			n[18] ||= Y("header", { class: "access-heading" }, [Y("div", null, [
				Y("p", { class: "kicker" }, "Consultar y ajustar"),
				Y("h4", null, "Personas y accesos"),
				Y("p", null, "Encuentre una relación vigente y actúe desde el mismo lugar.")
			]), Y("span", { class: "scope-mark" }, "Aplicación actual")], -1),
			Y("div", Bs, [(q(), J(K, null, W([
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
			}, [Y("strong", null, P(e.label), 1), Y("small", null, P(e.hint), 1)], 10, Vs)), 64))]),
			Y("div", Hs, [Y("aside", Us, [i.value === "person" ? (q(), J(K, { key: 0 }, [
				n[6] ||= Y("label", { for: "person-search" }, "Buscar una persona", -1),
				Y("div", Ws, [n[5] ||= Y("span", { "aria-hidden": "true" }, "⌕", -1), jn(Y("input", {
					id: "person-search",
					"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
					autocomplete: "off",
					placeholder: "Nombre o correo"
				}, null, 512), [[
					fo,
					a.value,
					void 0,
					{ trim: !0 }
				]])]),
				n[7] ||= Y("p", { class: "query-help" }, "Los resultados pertenecen al tenant actual.", -1),
				a.value ? (q(), J("div", Gs, [(q(!0), J(K, null, W(e.users.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: N(["choice", { selected: o.value?.id === e.id }]),
					onClick: (t) => u(e)
				}, [Y("span", qs, P(e.name.slice(0, 1)), 1), Y("span", null, [Y("strong", null, P(e.name), 1), Y("small", null, P(e.email), 1)])], 10, Ks))), 128)), e.users.loaded && !e.users.content.length ? (q(), J("p", Js, "No se encontraron personas.")) : Q("", !0)])) : Q("", !0)
			], 64)) : i.value === "role" ? (q(), J(K, { key: 1 }, [
				n[8] ||= Y("p", { class: "query-label" }, "Elija un rol", -1),
				n[9] ||= Y("p", { class: "query-help" }, "Muestra únicamente roles de esta aplicación.", -1),
				Y("div", Ys, [(q(!0), J(K, null, W(e.roles.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: N({ selected: s.value?.id === e.id }),
					onClick: (t) => d(e)
				}, P(e.name), 11, Xs))), 128)), e.roles.loaded && !e.roles.content.length ? (q(), J("p", Zs, "No hay roles disponibles.")) : Q("", !0)])
			], 64)) : (q(), J(K, { key: 2 }, [
				n[10] ||= Y("p", { class: "query-label" }, "Elija un perfil", -1),
				n[11] ||= Y("p", { class: "query-help" }, "Muestra únicamente perfiles de esta aplicación.", -1),
				Y("div", Qs, [(q(!0), J(K, null, W(e.profiles.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: N({ selected: c.value?.id === e.id }),
					onClick: (t) => f(e)
				}, P(e.name), 11, $s))), 128)), e.profiles.loaded && !e.profiles.content.length ? (q(), J("p", ec, "No hay perfiles disponibles.")) : Q("", !0)])
			], 64))]), Y("div", tc, [i.value === "person" && !o.value ? (q(), J("div", nc, [...n[12] ||= [
				Y("span", { "aria-hidden": "true" }, "⌁", -1),
				Y("strong", null, "Seleccione una persona", -1),
				Y("p", null, "Busque por nombre o correo para consultar sus accesos vigentes.", -1)
			]])) : i.value === "person" && o.value ? (q(), J(K, { key: 1 }, [
				Y("div", rc, [
					Y("span", ic, P(o.value.name.slice(0, 1)), 1),
					Y("div", null, [Y("strong", null, P(o.value.name), 1), Y("small", null, P(o.value.email), 1)]),
					e.personRoleAssignments.content.some((e) => e.role.name === "ADMIN") ? (q(), J("span", ac, "Administra esta aplicación")) : Q("", !0)
				]),
				e.personRoleAssignments.error || e.personProfileAssignments.error ? (q(), J("p", oc, P(e.personRoleAssignments.error || e.personProfileAssignments.error), 1)) : Q("", !0),
				Y("section", sc, [
					Y("div", cc, [n[13] ||= Y("span", null, "Roles vigentes", -1), Y("b", null, P(e.personRoleAssignments.total), 1)]),
					(q(!0), J(K, null, W(e.personRoleAssignments.content, (t) => (q(), J("div", {
						key: t.id,
						class: "access-row"
					}, [Y("div", null, [Y("strong", null, P(t.role.name), 1), Y("small", null, "Vigente desde " + P(m(t.validFrom)), 1)]), Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, lc)]))), 128)),
					e.personRoleAssignments.loaded && !e.personRoleAssignments.content.length ? (q(), J("p", uc, "Esta persona no tiene roles asignados.")) : Q("", !0)
				]),
				Y("section", dc, [
					Y("div", fc, [n[14] ||= Y("span", null, "Perfiles vigentes", -1), Y("b", null, P(e.personProfileAssignments.total), 1)]),
					(q(!0), J(K, null, W(e.personProfileAssignments.content, (t) => (q(), J("div", {
						key: t.id,
						class: "access-row"
					}, [Y("div", null, [Y("strong", null, P(t.profile.name), 1), Y("small", null, "Vigente desde " + P(m(t.validFrom)), 1)]), Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, pc)]))), 128)),
					e.personProfileAssignments.loaded && !e.personProfileAssignments.content.length ? (q(), J("p", mc, "Esta persona no tiene perfiles asignados.")) : Q("", !0)
				]),
				X($o, {
					page: e.personRoleAssignments.page,
					limit: e.personRoleAssignments.limit,
					total: Math.max(e.personRoleAssignments.total, e.personProfileAssignments.total),
					loading: e.personRoleAssignments.loading,
					label: "Paginación de accesos de la persona",
					onPrevious: n[1] ||= (e) => h(-1),
					onNext: n[2] ||= (e) => h(1)
				}, null, 8, [
					"page",
					"limit",
					"total",
					"loading"
				])
			], 64)) : i.value === "role" && s.value || i.value === "profile" && c.value ? (q(), J(K, { key: 2 }, [
				Y("div", hc, [Y("div", null, [n[15] ||= Y("p", { class: "kicker" }, "Personas con acceso", -1), Y("h5", null, P(s.value?.name ?? c.value?.name), 1)]), Y("span", gc, P(l.value.total), 1)]),
				l.value.error ? (q(), J("p", _c, P(l.value.error), 1)) : Q("", !0),
				(q(!0), J(K, null, W(l.value.content, (t) => (q(), J("div", {
					key: t.id,
					class: "access-row person-row"
				}, [
					Y("span", vc, P(t.user.name.slice(0, 1)), 1),
					Y("div", null, [
						Y("strong", null, P(t.user.name), 1),
						Y("small", null, P(t.user.email), 1),
						Y("small", yc, [Z(P(p(t)) + " · desde " + P(m(t.validFrom)), 1), t.validUntil ? (q(), J(K, { key: 0 }, [Z(" hasta " + P(m(t.validUntil)), 1)], 64)) : Q("", !0)])
					]),
					Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, bc)
				]))), 128)),
				l.value.loaded && !l.value.content.length ? (q(), J("p", xc, P(i.value === "role" ? "No hay personas con este rol." : "No hay personas con este perfil."), 1)) : Q("", !0),
				X($o, {
					page: l.value.page,
					limit: l.value.limit,
					total: l.value.total,
					loading: l.value.loading,
					label: "Paginación de accesos",
					onPrevious: n[3] ||= (e) => h(-1),
					onNext: n[4] ||= (e) => h(1)
				}, null, 8, [
					"page",
					"limit",
					"total",
					"loading"
				])
			], 64)) : (q(), J("div", Sc, [
				n[16] ||= Y("span", { "aria-hidden": "true" }, "⌁", -1),
				Y("strong", null, "Seleccione un " + P(i.value === "role" ? "rol" : "perfil"), 1),
				n[17] ||= Y("p", null, "Las personas con ese acceso aparecerán aquí.", -1)
			]))])])
		]));
	}
}), wc = { class: "chip" }, Tc = { class: "grid" }, Ec = { "aria-label": "Secciones de seguridad" }, Dc = ["aria-current", "onClick"], Oc = { class: "title" }, kc = { class: "actions" }, Ac = ["disabled"], jc = ["disabled"], Mc = {
	key: 0,
	class: "error"
}, Nc = ["aria-expanded"], Pc = ["aria-busy"], Fc = {
	key: 0,
	class: "user-result-status"
}, Ic = ["aria-selected", "onClick"], Lc = {
	key: 1,
	class: "selected-user",
	role: "status"
}, Rc = ["value"], zc = { key: 3 }, Bc = ["value"], Vc = ["aria-busy"], Hc = { class: "grow" }, Uc = ["disabled", "onClick"], Wc = {
	key: 0,
	class: "empty"
}, Gc = { class: "actions bottom" }, Kc = ["disabled"], qc = ["disabled"], Jc = 3, Yc = /* @__PURE__ */ qn({
	__name: "SecurityAdministration",
	props: { options: {} },
	setup(e, { expose: t }) {
		let n = e, r = Mo(/* @__PURE__ */ Zt(n, "options")), { summary: i, loading: a } = No(r), o = Po(r), s = Fo(r), c = Io(r), l = Lo(r);
		Ro(r), zo(r);
		let { state: u, search: d } = Bo(r), { saving: f, error: p, ready: m, load: h, refresh: g, mutate: _, roleResources: v, profileRoles: y, loadRoleResources: b, loadProfileRoles: x, userRoleAssignments: S, userProfileAssignments: C, assignmentsForRole: w, assignmentsForProfile: ee, loadUserAssignments: T, loadAssignmentsForRole: te, loadAssignmentsForProfile: E, invalidateRelation: ne } = r;
		t({ refresh: g });
		let D = /* @__PURE__ */ V("summary"), O = /* @__PURE__ */ V(null), k = /* @__PURE__ */ V(), A = /* @__PURE__ */ V(), re = /* @__PURE__ */ V(""), j = /* @__PURE__ */ V(""), ie = /* @__PURE__ */ V(""), ae = /* @__PURE__ */ V(), oe = /* @__PURE__ */ V(!1), ce, M = /* @__PURE__ */ V({
			userId: "",
			userQuery: "",
			description: "",
			baseUrl: "",
			path: "",
			method: "GET",
			name: "",
			targetId: "",
			accessKind: "role"
		}), le = [
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
			}
		], ue = {
			summary: "Resumen de seguridad",
			people: "Personas y asignaciones",
			roles: "Roles de aplicación",
			profiles: "Perfiles de acceso",
			resources: "Recursos protegidos",
			admins: "Administradores"
		}, de = {
			summary: "Configurar accesos",
			people: "Asignar acceso",
			roles: "Definir rol",
			profiles: "Definir perfil",
			resources: "Registrar recurso",
			admins: "Agregar administrador"
		}, fe = _a(() => ({
			people: (i.value?.counts.roleAssignments ?? 0) + (i.value?.counts.profileAssignments ?? 0),
			roles: i.value?.counts.roles ?? 0,
			profiles: i.value?.counts.profiles ?? 0,
			resources: i.value?.counts.resources ?? 0,
			admins: i.value?.counts.administrators ?? 0
		})), pe = _a(() => D.value === "summary" && n.options.allowApplicationLifecycleManagement ? "Editar aplicación" : de[D.value]), me = _a(() => ({
			roles: s,
			profiles: c,
			resources: o,
			admins: l
		})[D.value]), he = _a(() => ({
			"--accent": n.options.theme?.accent ?? "#295181",
			"--font": n.options.theme?.fontFamily ?? "Inter, system-ui, sans-serif",
			"--radius": n.options.theme?.radius ?? "14px"
		}));
		Ln(D, (e) => {
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
		}, { immediate: !0 }), Ln(() => M.value.accessKind, (e) => {
			O.value === "access" && h(e === "role" ? "roles" : "profiles");
		});
		function ge(e, t) {
			O.value = e ?? (D.value === "summary" ? n.options.allowApplicationLifecycleManagement ? "application" : "access" : D.value === "people" ? "access" : D.value === "roles" ? "role" : D.value === "profiles" ? "profile" : D.value === "resources" ? "resource" : "admin"), k.value = t, M.value = {
				userId: "",
				userQuery: "",
				description: "",
				baseUrl: "",
				path: "",
				method: "GET",
				name: "",
				targetId: "",
				accessKind: "role"
			}, t && "path" in t && (M.value.path = t.path, M.value.method = t.method), t && "name" in t && (M.value.name = t.name), O.value === "application" && i.value && (M.value.name = i.value.application.name, M.value.description = i.value.application.description ?? "", M.value.baseUrl = i.value.application.baseUrl ?? ""), (O.value === "admin" || O.value === "access") && d(""), (O.value === "access" || O.value === "profile-role") && h("roles"), O.value === "role-resource" && h("resources"), t && O.value === "role-resource" && b(t.id), t && O.value === "profile-role" && x(t.id);
		}
		function _e() {
			ce && clearTimeout(ce), O.value = null, k.value = void 0, ae.value = void 0, oe.value = !1;
		}
		function ve() {
			let e = M.value.userQuery.trim();
			if (M.value.userId = "", ae.value = void 0, oe.value = !0, ce && clearTimeout(ce), e.length < Jc) {
				d("");
				return;
			}
			ce = setTimeout(() => void d(e), 250);
		}
		function ye(e) {
			M.value.userId = e.id, M.value.userQuery = `${e.name} · ${e.email}`, ae.value = e, oe.value = !1;
		}
		let be = _a(() => M.value.userQuery.trim().length < Jc ? `Escriba al menos ${Jc} caracteres para buscar.` : u.loading ? "Buscando coincidencias…" : u.error ? "No fue posible buscar personas. Inténtelo de nuevo." : oe.value && !u.content.length ? "No hay coincidencias para esta búsqueda." : "Seleccione una persona de los resultados.");
		dr(() => {
			ce && clearTimeout(ce);
		});
		async function xe() {
			let e = M.value, t = O.value;
			if (!t || t === "confirm") return;
			let n = !!k.value, r = t === "application" ? ["summary"] : t === "admin" ? ["administrators", "summary"] : t === "resource" ? ["resources", "summary"] : t === "role" ? ["roles", "summary"] : t === "profile" ? ["profiles", "summary"] : t === "access" ? [e.accessKind === "role" ? "roleAssignments" : "profileAssignments", "summary"] : t === "role-resource" ? ["roles"] : ["profiles"], i = await _((r, i) => t === "application" ? r.updateApplication(i, {
				name: e.name,
				description: e.description,
				baseUrl: e.baseUrl
			}) : t === "admin" ? r.addAdministrator(i, e.userId) : t === "resource" ? n ? r.updateResource(i, k.value.id, {
				path: e.path,
				method: e.method
			}) : r.createResource(i, {
				path: e.path,
				method: e.method
			}) : t === "role" ? n ? r.updateRole(k.value.id, { name: e.name }) : r.createRole(i, e.name) : t === "profile" ? n ? r.updateProfile(k.value.id, { name: e.name }) : r.createProfile(i, e.name) : t === "access" ? r.assignAccess(i, e.accessKind, e.targetId, e.userId) : t === "role-resource" ? r.linkRoleResource(k.value.id, e.targetId) : r.linkProfileRole(k.value.id, e.targetId), [...r], `${t}:${k.value?.id ?? e.userId}`);
			i && t === "access" && (re.value === e.userId && await T(e.userId, S.page, !0), e.accessKind === "role" && j.value === e.targetId && await te(e.targetId, w.page, !0), e.accessKind === "profile" && ie.value === e.targetId && await E(e.targetId, ee.page, !0)), i && _e();
		}
		function Se(e, t) {
			F.value = e, A.value = t, O.value = "confirm";
		}
		let F = /* @__PURE__ */ V("");
		async function Ce() {
			let e = A.value;
			(!e || await e()) && _e();
		}
		function we(e) {
			Se("Retirar este administrador puede dejar la aplicación sin administración. El PDP impedirá retirar el último administrador.", async () => _((t, n) => t.removeAdministrator(n, e), ["administrators", "summary"], `admin:${e}`, !0));
		}
		function Te(e) {
			Se("Eliminar este recurso revoca su protección y puede estar bloqueado si tiene dependencias.", async () => _((t, n) => t.deleteResource(n, e), ["resources", "summary"], `resource:${e}`, !0));
		}
		function I(e) {
			Se("Eliminar este rol requiere que no tenga perfiles ni asignaciones dependientes.", async () => _((t) => t.deleteRole(e), ["roles", "summary"], `role:${e}`, !0));
		}
		function Ee(e) {
			Se("Eliminar este perfil requiere que no tenga asignaciones dependientes.", async () => _((t) => t.deleteProfile(e), ["profiles", "summary"], `profile:${e}`, !0));
		}
		function De(e) {
			let t = "role" in e;
			Se(`Revocar ${t ? `el rol ${e.role.name}` : `el perfil ${e.profile.name}`} de ${e.user.name} (${e.user.email}) retira su acceso vigente.`, async () => {
				let n = await _((n) => t ? n.revokeRoleAssignment(e.role.id, e.id) : n.revokeProfileAssignment(e.profile.id, e.id), [t ? "roleAssignments" : "profileAssignments", "summary"], `assignment:${e.id}`, !0);
				return n && re.value && await T(re.value, S.page, !0), n && t && j.value && await te(j.value, w.page, !0), n && !t && ie.value && await E(ie.value, ee.page, !0), n;
			});
		}
		function Oe(e) {
			let t = k.value.id;
			Se("Retirar este recurso elimina el permiso que este rol concede sobre él.", async () => {
				let n = await _((n) => n.unlinkRoleResource(t, e), ["roles"], `role-resource:${t}:${e}`);
				return n && (ne("role-resources", t), await b(t, v.page, !0), v.page > 0 && !v.content.length && await b(t, v.page - 1, !0)), n;
			});
		}
		function ke(e) {
			let t = k.value.id;
			Se("Retirar este rol cambia los permisos heredados por este perfil.", async () => {
				let n = await _((n) => n.unlinkProfileRole(t, e), ["profiles"], `profile-role:${t}:${e}`);
				return n && (ne("profile-roles", t), await x(t, y.page, !0), y.page > 0 && !y.content.length && await x(t, y.page - 1, !0)), n;
			});
		}
		function Ae(e) {
			if (!k.value) return;
			let t = O.value === "role-resource" ? v : y, n = t.page + e;
			n < 0 || n * t.limit >= t.total || (O.value === "role-resource" ? b(k.value.id, n) : O.value === "profile-role" && x(k.value.id, n));
		}
		function je() {
			let e = me.value;
			e && (e.page + 1) * e.limit < e.total && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[D.value], e.page + 1);
		}
		function Me() {
			let e = me.value;
			e && e.page > 0 && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[D.value], e.page - 1);
		}
		return (t, n) => (q(), J("section", {
			class: "shell",
			style: se(he.value),
			"aria-live": "polite"
		}, [
			Y("header", null, [n[29] ||= Y("div", null, [
				Y("p", { class: "eyebrow" }, "Seguridad · aplicación actual"),
				Y("h2", null, "Control de acceso"),
				Y("p", null, "La información y las acciones están acotadas a esta aplicación.")
			], -1), Y("span", wc, P(H(i)?.application.name ?? e.options.applicationName ?? "Cargando"), 1)]),
			Y("div", Tc, [Y("nav", Ec, [(q(), J(K, null, W(le, (e) => Y("button", {
				key: e.id,
				"aria-current": D.value === e.id,
				onClick: (t) => D.value = e.id
			}, [Z(P(e.label), 1), e.id === "summary" ? Q("", !0) : (q(), J(K, { key: 0 }, [Z(" · " + P(fe.value[e.id]), 1)], 64))], 8, Dc)), 64))]), Y("main", null, [
				Y("div", Oc, [Y("div", null, [Y("h3", null, P(ue[D.value]), 1), n[30] ||= Y("p", { class: "sub" }, "Alcance exclusivo de la aplicación abierta.", -1)]), Y("div", kc, [Y("button", {
					class: "quiet",
					disabled: H(a) || H(f),
					onClick: n[0] ||= (...e) => H(g) && H(g)(...e)
				}, " Actualizar", 8, Ac), Y("button", {
					class: "primary",
					disabled: !H(m) || H(f),
					onClick: n[1] ||= (e) => ge()
				}, P(pe.value), 9, jc)])]),
				H(p) ? (q(), J("p", Mc, P(H(p)), 1)) : Q("", !0),
				D.value === "summary" ? (q(), zi(ns, {
					key: 1,
					summary: H(i),
					loading: H(a),
					"assignment-count": fe.value.people
				}, null, 8, [
					"summary",
					"loading",
					"assignment-count"
				])) : D.value === "people" ? (q(), zi(Cc, {
					key: 2,
					users: H(u),
					roles: H(s),
					profiles: H(c),
					"person-role-assignments": H(S),
					"person-profile-assignments": H(C),
					"role-assignments": H(w),
					"profile-assignments": H(ee),
					busy: H(f),
					onSearchUsers: H(d),
					onSelectPerson: n[2] ||= (e) => {
						re.value = e.id, H(T)(e.id, 0);
					},
					onSelectRole: n[3] ||= (e) => {
						j.value = e.id, H(te)(e.id, 0);
					},
					onSelectProfile: n[4] ||= (e) => {
						ie.value = e.id, H(E)(e.id, 0);
					},
					onRevoke: De,
					onPersonPage: n[5] ||= (e) => {
						re.value && H(S).page + e >= 0 && H(T)(re.value, H(S).page + e);
					},
					onRolePage: n[6] ||= (e) => {
						j.value && H(w).page + e >= 0 && H(te)(j.value, H(w).page + e);
					},
					onProfilePage: n[7] ||= (e) => {
						ie.value && H(ee).page + e >= 0 && H(E)(ie.value, H(ee).page + e);
					}
				}, null, 8, [
					"users",
					"roles",
					"profiles",
					"person-role-assignments",
					"person-profile-assignments",
					"role-assignments",
					"profile-assignments",
					"busy",
					"onSearchUsers"
				])) : (q(), J(K, { key: 3 }, [D.value === "resources" ? (q(), zi(ds, {
					key: 0,
					state: H(o),
					busy: H(f),
					onEdit: n[8] ||= (e) => ge("resource", e),
					onRemove: n[9] ||= (e) => Te(e.id),
					onPrevious: Me,
					onNext: je
				}, null, 8, ["state", "busy"])) : D.value === "roles" ? (q(), zi(Ss, {
					key: 1,
					state: H(s),
					busy: H(f),
					onManage: n[10] ||= (e) => ge("role-resource", e),
					onEdit: n[11] ||= (e) => ge("role", e),
					onRemove: n[12] ||= (e) => I(e.id),
					onPrevious: Me,
					onNext: je
				}, null, 8, ["state", "busy"])) : D.value === "profiles" ? (q(), zi(js, {
					key: 2,
					state: H(c),
					busy: H(f),
					onManage: n[13] ||= (e) => ge("profile-role", e),
					onEdit: n[14] ||= (e) => ge("profile", e),
					onRemove: n[15] ||= (e) => Ee(e.id),
					onPrevious: Me,
					onNext: je
				}, null, 8, ["state", "busy"])) : (q(), zi(Rs, {
					key: 3,
					state: H(l),
					busy: H(f),
					onRemove: we,
					onPrevious: Me,
					onNext: je
				}, null, 8, ["state", "busy"]))], 64))
			])]),
			O.value ? (q(), J("div", {
				key: 0,
				class: "backdrop",
				onClick: yo(_e, ["self"])
			}, [O.value === "confirm" ? (q(), zi(Yo, {
				key: 1,
				open: !0,
				message: F.value,
				busy: H(f),
				onCancel: _e,
				onConfirm: Ce
			}, null, 8, ["message", "busy"])) : (q(), J("form", {
				key: 0,
				class: "dialog",
				onSubmit: yo(xe, ["prevent"])
			}, [
				Y("h3", null, P(O.value === "role-resource" ? "Administrar recursos del rol" : O.value === "profile-role" ? "Administrar roles del perfil" : de[D.value]), 1),
				n[46] ||= Y("p", { class: "sub" }, "La acción se aplica solo a esta aplicación.", -1),
				O.value === "admin" || O.value === "access" ? (q(), J(K, { key: 0 }, [
					Y("label", null, [n[31] ||= Z("Buscar usuario", -1), jn(Y("input", {
						"onUpdate:modelValue": n[16] ||= (e) => M.value.userQuery = e,
						placeholder: "Nombre o correo",
						autocomplete: "off",
						"aria-describedby": "user-search-hint",
						"aria-expanded": oe.value && M.value.userQuery.trim().length >= Jc,
						"aria-controls": "user-search-results",
						onFocus: n[17] ||= (e) => oe.value = !0,
						onInput: ve
					}, null, 40, Nc), [[
						fo,
						M.value.userQuery,
						void 0,
						{ trim: !0 }
					]])]),
					Y("p", {
						id: "user-search-hint",
						class: N(["field-hint", { "is-error": H(u).error }])
					}, P(be.value), 3),
					oe.value && M.value.userQuery.trim().length >= Jc && (H(u).loading || H(u).content.length || H(u).error) ? (q(), J("div", {
						key: 0,
						id: "user-search-results",
						class: "user-result-list",
						role: "listbox",
						"aria-label": "Coincidencias de usuario",
						"aria-busy": H(u).loading
					}, [H(u).loading ? (q(), J("p", Fc, "Buscando en el directorio…")) : Q("", !0), (q(!0), J(K, null, W(H(u).content, (e) => (q(), J("button", {
						key: e.id,
						type: "button",
						class: "user-result",
						role: "option",
						"aria-selected": M.value.userId === e.id,
						onClick: (t) => ye(e)
					}, [Y("span", null, P(e.name || e.email), 1), Y("small", null, P(e.email), 1)], 8, Ic))), 128))], 8, Pc)) : Q("", !0),
					ae.value ? (q(), J("div", Lc, [
						n[32] ||= Y("span", null, "Persona seleccionada", -1),
						Y("strong", null, P(ae.value.name || ae.value.email), 1),
						Y("small", null, P(ae.value.email), 1)
					])) : Q("", !0),
					O.value === "access" ? (q(), J(K, { key: 2 }, [Y("label", null, [n[34] ||= Z("Tipo", -1), jn(Y("select", { "onUpdate:modelValue": n[18] ||= (e) => M.value.accessKind = e }, [...n[33] ||= [Y("option", { value: "role" }, "Rol", -1), Y("option", { value: "profile" }, "Perfil", -1)]], 512), [[po, M.value.accessKind]])]), Y("label", null, [n[36] ||= Z("Acceso", -1), jn(Y("select", {
						"onUpdate:modelValue": n[19] ||= (e) => M.value.targetId = e,
						required: ""
					}, [n[35] ||= Y("option", {
						disabled: "",
						value: ""
					}, "Seleccione un acceso", -1), (q(!0), J(K, null, W(M.value.accessKind === "role" ? H(s).content : H(c).content, (e) => (q(), J("option", {
						key: e.id,
						value: e.id
					}, P(e.name), 9, Rc))), 128))], 512), [[po, M.value.targetId]])])], 64)) : Q("", !0)
				], 64)) : O.value === "application" ? (q(), J(K, { key: 1 }, [
					Y("label", null, [n[37] ||= Z("Nombre", -1), jn(Y("input", {
						"onUpdate:modelValue": n[20] ||= (e) => M.value.name = e,
						required: ""
					}, null, 512), [[
						fo,
						M.value.name,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[38] ||= Z("Descripción", -1), jn(Y("textarea", { "onUpdate:modelValue": n[21] ||= (e) => M.value.description = e }, null, 512), [[
						fo,
						M.value.description,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[39] ||= Z("URL base", -1), jn(Y("input", {
						"onUpdate:modelValue": n[22] ||= (e) => M.value.baseUrl = e,
						type: "url"
					}, null, 512), [[
						fo,
						M.value.baseUrl,
						void 0,
						{ trim: !0 }
					]])])
				], 64)) : O.value === "resource" ? (q(), J(K, { key: 2 }, [Y("label", null, [n[40] ||= Z("Ruta", -1), jn(Y("input", {
					"onUpdate:modelValue": n[23] ||= (e) => M.value.path = e,
					placeholder: "/api/v1/notas",
					required: ""
				}, null, 512), [[
					fo,
					M.value.path,
					void 0,
					{ trim: !0 }
				]])]), Y("label", null, [n[42] ||= Z("Método", -1), jn(Y("select", { "onUpdate:modelValue": n[24] ||= (e) => M.value.method = e }, [...n[41] ||= [
					Y("option", null, "GET", -1),
					Y("option", null, "POST", -1),
					Y("option", null, "PUT", -1),
					Y("option", null, "PATCH", -1),
					Y("option", null, "DELETE", -1)
				]], 512), [[po, M.value.method]])])], 64)) : O.value === "role" || O.value === "profile" ? (q(), J("label", zc, [n[43] ||= Z("Nombre", -1), jn(Y("input", {
					"onUpdate:modelValue": n[25] ||= (e) => M.value.name = e,
					required: ""
				}, null, 512), [[
					fo,
					M.value.name,
					void 0,
					{ trim: !0 }
				]])])) : (q(), J(K, { key: 4 }, [Y("label", null, [Z(P(O.value === "role-resource" ? "Agregar recurso" : "Agregar rol"), 1), jn(Y("select", {
					"onUpdate:modelValue": n[26] ||= (e) => M.value.targetId = e,
					required: ""
				}, [n[44] ||= Y("option", {
					disabled: "",
					value: ""
				}, "Seleccione una opción", -1), (q(!0), J(K, null, W(O.value === "role-resource" ? H(o).content : H(s).content, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, P("path" in e ? `${e.method} · ${e.path}` : e.name), 9, Bc))), 128))], 512), [[po, M.value.targetId]])]), Y("div", {
					class: "relation-list",
					"aria-busy": O.value === "role-resource" ? H(v).loading : H(y).loading
				}, [
					n[45] ||= Y("p", { class: "sub" }, "Relaciones vigentes", -1),
					(q(!0), J(K, null, W(O.value === "role-resource" ? H(v).content : H(y).content, (e) => (q(), J("div", {
						key: e.id,
						class: "row"
					}, [Y("div", Hc, [Y("strong", null, P("path" in e ? `${e.method} · ${e.path}` : e.name), 1)]), Y("button", {
						class: "quiet danger",
						type: "button",
						disabled: H(f),
						onClick: (t) => O.value === "role-resource" ? Oe(e.id) : ke(e.id)
					}, " Retirar ", 8, Uc)]))), 128)),
					(O.value === "role-resource" ? H(v).content : H(y).content).length ? Q("", !0) : (q(), J("p", Wc, " No hay relaciones en esta página. ")),
					X($o, {
						page: O.value === "role-resource" ? H(v).page : H(y).page,
						limit: O.value === "role-resource" ? H(v).limit : H(y).limit,
						total: O.value === "role-resource" ? H(v).total : H(y).total,
						loading: O.value === "role-resource" ? H(v).loading : H(y).loading,
						label: "Paginación de relaciones",
						onPrevious: n[27] ||= (e) => Ae(-1),
						onNext: n[28] ||= (e) => Ae(1)
					}, null, 8, [
						"page",
						"limit",
						"total",
						"loading"
					])
				], 8, Vc)], 64)),
				Y("div", Gc, [Y("button", {
					class: "quiet",
					type: "button",
					disabled: H(f),
					onClick: _e
				}, " Cancelar", 8, Kc), Y("button", {
					class: "primary",
					disabled: H(f)
				}, P(H(f) ? "Guardando…" : "Guardar"), 9, qc)])
			], 32))])) : Q("", !0)
		], 4));
	}
}), Xc = ":host{all:initial;display:block}*{box-sizing:border-box}.shell{font-family:var(--font);color:#17263c;--line:#dce5df;border:1px solid var(--line);border-radius:var(--radius);background:#fffdfa;overflow:hidden;box-shadow:0 18px 42px #18321b14}header{border-bottom:1px solid var(--line);justify-content:space-between;gap:18px;padding:27px 30px 20px;display:flex}.eyebrow{color:#9a6c32;letter-spacing:.1em;text-transform:uppercase;margin:0 0 7px;font:700 12px ui-monospace,monospace}h2{letter-spacing:-.03em;margin:0;font:700 28px Georgia,serif}h3{margin:0;font-size:19px}header p:last-child,.sub,small{color:#66776c;font-size:13px}.chip,.pill{color:#287045;background:#edf4ef;border-radius:999px;padding:5px 9px;font-size:11px;font-weight:700}.chip{height:max-content;color:var(--accent);background:#f2f6fb}.grid{grid-template-columns:190px 1fr;min-height:470px;display:grid}nav{border-right:1px solid var(--line);background:#fafbf8;padding:12px}nav button{text-align:left;color:#486053;cursor:pointer;background:0 0;border:0;border-radius:8px;width:100%;padding:10px;font:600 13px inherit}nav button[aria-current=true]{color:#183c2a;background:#e8f0eb}main{padding:25px 30px}.title,.actions,.row{align-items:center;gap:10px;display:flex}.title{justify-content:space-between;margin-bottom:18px}.actions{flex-wrap:wrap;justify-content:end}button{cursor:pointer}button:disabled{cursor:wait;opacity:.62}.primary,.quiet{border:0;border-radius:8px;padding:9px 12px;font:700 12px inherit}.primary{background:var(--accent);color:#fff}.quiet{color:#29523c;background:#edf3ed}.danger{color:#96332c;background:#fff2f0}.stats{grid-template-columns:repeat(4,1fr);gap:10px;display:grid}.stat,.panel{border:1px solid var(--line);background:#fff;border-radius:10px}.stat{padding:15px}.stat b{color:var(--accent);font:700 25px Georgia,serif;display:block}.panel{margin-top:20px;overflow:hidden}.row{border-bottom:1px solid #edf1ee;padding:13px 15px}.row:last-child{border:0}.grow{flex:1;min-width:0}.grow strong{font-size:13px;display:block}.method{color:#265482;min-width:54px;font:700 11px ui-monospace,monospace}.empty{color:#66776c;text-align:center;padding:25px;font-size:13px}.error{color:#96332c;background:#fff2f0;border-left:3px solid #b7473d;padding:11px;font-size:13px}.backdrop{z-index:1;background:#17263c66;place-items:center;padding:16px;display:grid;position:fixed;inset:0}.dialog{background:#fff;border-radius:14px;width:min(460px,100%);padding:23px;box-shadow:0 25px 70px #0005}label{gap:6px;margin-top:12px;font-size:12px;font-weight:700;display:grid}input,select,textarea{border:1px solid #cad8d0;border-radius:8px;width:100%;padding:10px;font:13px inherit}textarea{resize:vertical;min-height:72px}.bottom{margin-top:20px}.field-hint{color:#66776c;margin:6px 0 0;font-size:12px;line-height:1.35}.field-hint.is-error{color:#96332c}.user-result-list{background:#f8faf7;border:1px solid #cad8d0;border-radius:10px;max-height:216px;margin-top:8px;overflow-y:auto;box-shadow:0 10px 24px #17263c12}.user-result-status{color:#66776c;margin:0;padding:11px 13px;font-size:12px}.user-result{color:#17263c;text-align:left;background:0 0;border:0;border-bottom:1px solid #dce4de;border-radius:0;gap:2px;width:100%;padding:11px 13px;display:grid}.user-result:last-child{border-bottom:0}.user-result:hover,.user-result:focus-visible,.user-result[aria-selected=true]{color:#173d30;background:#e8f0e9;outline:none}.user-result span{font-weight:700}.user-result small,.selected-user small{color:#66776c;font-size:12px}.selected-user{background:#edf4ed;border-left:3px solid #4c8065;border-radius:7px;gap:2px;margin-top:10px;padding:10px 12px;display:grid}.selected-user>span{color:#49705a;letter-spacing:.08em;text-transform:uppercase;font-size:10px;font-weight:800}.selected-user strong{color:#173d30;font-size:13px}.access-workbench{--paper:#fffdfa;--ledger:#f5f1e8;--ink:#17263c;--muted-ink:#68776f;--sage:#dfe9df;--sage-deep:#2d5947;--ochre:#9a6c32;--rule:#dce4de;--inset:#f8faf7;border:1px solid var(--rule);background:var(--paper);border-radius:14px;margin-top:18px;overflow:hidden}.access-heading{border-bottom:1px solid var(--rule);background:#fffefa;justify-content:space-between;align-items:flex-start;gap:16px;padding:22px 24px 18px;display:flex}.access-heading h4,.result-title h5{color:var(--ink);letter-spacing:-.025em;margin:2px 0 4px;font:700 22px Georgia,serif}.access-heading p:last-child{color:var(--muted-ink);margin:0;font-size:13px}.kicker{color:var(--ochre);letter-spacing:.12em;text-transform:uppercase;margin:0;font:700 10px ui-monospace,monospace}.scope-mark,.count-badge,.admin-mark{background:var(--ledger);color:var(--sage-deep);white-space:nowrap;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:700}.perspective-tabs{border-bottom:1px solid var(--rule);background:#fbfcf9;grid-template-columns:repeat(3,1fr);gap:0;padding:8px;display:grid}.perspective-tabs button{color:#64736a;text-align:left;background:0 0;border:0;border-radius:9px;min-height:56px;padding:9px 12px;transition:background .16s,color .16s}.perspective-tabs button:hover{color:var(--sage-deep);background:#eff4ee}.perspective-tabs button.active{color:var(--ink);background:var(--paper);box-shadow:0 1px 3px #20352414,inset 0 0 0 1px #d4dfd6}.perspective-tabs strong,.perspective-tabs small{display:block}.perspective-tabs strong{font-size:13px}.perspective-tabs small{color:inherit;opacity:.72;margin-top:3px;font-size:11px;font-weight:500}.access-layout{grid-template-columns:minmax(220px,.8fr) minmax(0,1.7fr);min-height:390px;display:grid}.access-query{border-right:1px solid var(--rule);background:#fafbf8;padding:20px}.access-query label,.query-label{color:var(--ink);margin:0 0 8px;font-size:13px;font-weight:700;display:block}.query-help{color:var(--muted-ink);margin:8px 0 14px;font-size:12px;line-height:1.45}.search-field{background:#f1f5f0;border:1px solid #c9d8ce;border-radius:9px;align-items:center;gap:8px;padding:0 10px;transition:border-color .16s,box-shadow .16s;display:flex}.search-field:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)}.search-field span{color:var(--sage-deep);font-size:20px;line-height:1}.search-field input{background:0 0;border:0;border-radius:0;outline:0;padding:11px 0}.choices,.option-grid{gap:6px;display:grid}.choice,.option-grid button{color:var(--ink);text-align:left;background:0 0;border:1px solid #0000;border-radius:9px;padding:9px}.choice{align-items:center;gap:9px;display:flex}.choice:hover,.option-grid button:hover{background:#edf3ed}.choice.selected,.option-grid button.selected{background:var(--sage);color:#183c2a;border-color:#b8d0be}.choice strong,.choice small{display:block}.choice small{text-overflow:ellipsis;white-space:nowrap;margin-top:2px;overflow:hidden}.option-grid button{font-size:12px;font-weight:700}.access-results{background:var(--paper);min-width:0;padding:20px 24px}.empty-state{text-align:center;min-height:300px;color:var(--muted-ink);place-content:center;display:grid}.empty-state span{width:38px;height:38px;color:var(--ochre);background:var(--ledger);border-radius:50%;place-items:center;margin:0 auto 10px;font-size:23px;display:grid}.empty-state strong{color:var(--ink);font-size:14px}.empty-state p{max-width:260px;margin:6px 0 0;font-size:12px;line-height:1.5}.identity-strip,.result-title{border-bottom:1px solid var(--rule);align-items:center;gap:10px;padding-bottom:16px;display:flex}.identity-strip>div{flex:1;min-width:0}.identity-strip strong,.identity-strip small{display:block}.identity-strip small{margin-top:2px}.admin-mark{background:#eff5ef}.avatar{color:#315745;text-transform:uppercase;background:#e0ebe1;border-radius:50%;flex:0 0 28px;place-items:center;width:28px;height:28px;font-size:11px;font-weight:800;display:grid}.avatar.large{background:#dce8df;flex-basis:38px;width:38px;height:38px;font-size:15px}.access-group{border:1px solid #e5ebe5;border-radius:10px;margin-top:18px;overflow:hidden}.group-title{color:#506258;background:#f7f9f6;justify-content:space-between;align-items:center;padding:9px 12px;font-size:12px;font-weight:700;display:flex}.group-title b{min-width:20px;color:var(--sage-deep);background:var(--sage);text-align:center;border-radius:99px;padding:1px 6px;font-size:11px}.access-row{border-top:1px solid #edf1ed;align-items:center;gap:10px;min-height:58px;padding:11px 12px;display:flex}.access-row>div{flex:1;min-width:0}.access-row strong,.access-row small{display:block}.access-row strong{color:var(--ink);font-size:13px}.access-row small{margin-top:3px}.person-row{padding-left:0;padding-right:0}.person-row>div{flex:1}.access-meta{color:#718078!important}.result-title{justify-content:space-between}.result-title h5{font-size:20px}.count-badge{text-align:center;background:#eef3ee;min-width:28px}.compact{text-align:left;padding:14px 12px}@media (width<=700px){header{padding:20px;display:block}.chip{margin-top:14px;display:inline-block}.grid{grid-template-columns:1fr}nav{border-right:0;border-bottom:1px solid var(--line);display:flex;overflow:auto}nav button{min-width:max-content}main{padding:20px}.stats{grid-template-columns:repeat(2,1fr)}.access-heading{padding:18px}.access-heading h4{font-size:20px}.access-layout{grid-template-columns:1fr}.access-query{border-right:0;border-bottom:1px solid var(--rule)}.access-results{padding:18px}.perspective-tabs{grid-template-columns:repeat(3,minmax(122px,1fr));overflow-x:auto}.scope-mark,.admin-mark{display:none}}", Zc = "uco-security-administration", Qc = class extends HTMLElement {
	root = this.attachShadow({ mode: "open" });
	options = /* @__PURE__ */ Wt();
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
		let e = document.createElement("style");
		e.textContent = Xc;
		let t = document.createElement("div");
		this.root.replaceChildren(e, t), this.app = Co({ setup: () => () => va(Yc, {
			options: this.options.value,
			ref: (e) => {
				this.component = e;
			}
		}) }), this.app.mount(t);
	}
};
function $c(e, t) {
	if (!(e instanceof HTMLElement)) throw TypeError("El contenedor debe ser un HTMLElement.");
	let n = new Qc();
	return n.configure(t), e.replaceChildren(n), {
		element: n,
		refresh: () => n.refresh(),
		unmount: () => {
			n.parentElement === e && e.replaceChildren(), n.destroy();
		}
	};
}
customElements.get(Zc) || customElements.define(Zc, Qc);
//#endregion
export { Qc as SecurityAdministrationElement, $c as mount };
