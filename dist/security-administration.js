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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, T = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ee = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, te = /-\w/g, E = ee((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), ne = /\B([A-Z])/g, D = ee((e) => e.replace(ne, "-$1").toLowerCase()), re = ee((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = ee((e) => e ? `on${re(e)}` : ""), O = (e, t) => !Object.is(e, t), k = (e, ...t) => {
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
}, ae, oe = () => ae ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function se(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? M(r) : se(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var ce = /;(?![^(]*\))/g, le = /:([^]+)/, ue = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function M(e) {
	let t = {};
	return e.replace(ue, (e) => e.startsWith("/*") ? "" : e).split(ce).forEach((e) => {
		if (e) {
			let n = e.split(le);
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
function P(e) {
	return !!e || e === "";
}
function pe(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = _e(e[i], t[i], n);
	return r;
}
function me(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && _e(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function he(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? me(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !_e(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function ge(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function _e(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? ge(e, t, n, pe) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : ge(e, t, n, he) : String(e) === String(t))));
}
function ve(e, t) {
	return e.findIndex((e) => _e(e, t));
}
var ye = (e) => !!(e && e.__v_isRef === !0), F = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? ye(e) ? F(e.value) : JSON.stringify(e, be, 2) : String(e), be = (e, t) => ye(t) ? be(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[xe(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => xe(e)) } : _(t) ? xe(t) : v(t) && !d(t) && !C(t) ? String(t) : t, xe = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, I, Se = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && I && (I.active ? (this.parent = I, this.index = (I.scopes || (I.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = I;
			try {
				return I = this, e();
			} finally {
				I = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = I, I = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (I === this) I = this.prevScope;
			else {
				let e = I;
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
function Ce() {
	return I;
}
function we(e, t = !1) {
	I && I.cleanups.push(e);
}
var L, Te = /* @__PURE__ */ new WeakSet(), Ee = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, I && (I.active ? I.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Te.has(this) && (Te.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ae(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, He(this), Ne(this);
		let e = L, t = R;
		L = this, R = !0;
		try {
			return this.fn();
		} finally {
			Pe(this), L = e, R = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Le(e);
			this.deps = this.depsTail = void 0, He(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Te.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Fe(this) && this.run();
	}
	get dirty() {
		return Fe(this);
	}
}, De = 0, Oe, ke;
function Ae(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = ke, ke = e;
		return;
	}
	e.next = Oe, Oe = e;
}
function je() {
	De++;
}
function Me() {
	if (--De > 0) return;
	if (ke) {
		let e = ke;
		for (ke = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Oe;) {
		let t = Oe;
		for (Oe = void 0; t;) {
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
function Ne(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Pe(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Le(r), Re(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Fe(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ie(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ie(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ue) || (e.globalVersion = Ue, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Fe(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = L, r = R;
	L = e, R = !0;
	try {
		Ne(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		L = n, R = r, Pe(e), e.flags &= -3;
	}
}
function Le(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Le(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Re(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var R = !0, ze = [];
function Be() {
	ze.push(R), R = !1;
}
function Ve() {
	let e = ze.pop();
	R = e === void 0 || e;
}
function He(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = L;
		L = void 0;
		try {
			t();
		} finally {
			L = e;
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
		if (!L || !R || L === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== L) t = this.activeLink = new We(L, this), L.deps ? (t.prevDep = L.depsTail, L.depsTail.nextDep = t, L.depsTail = t) : L.deps = L.depsTail = t, Ke(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = L.depsTail, t.nextDep = void 0, L.depsTail.nextDep = t, L.depsTail = t, L.deps === t && (L.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ue++, this.notify(e);
	}
	notify(e) {
		je();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Me();
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
function z(e, t, n) {
	if (R && L) {
		let t = qe.get(e);
		t || qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ge()), r.map = t, r.key = n), r.track();
	}
}
function Ze(e, t, n, r, i, a) {
	let o = qe.get(e);
	if (!o) {
		Ue++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (je(), t === "clear") o.forEach(s);
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
	Me();
}
function Qe(e, t) {
	let n = qe.get(e);
	return n && n.get(t);
}
function $e(e) {
	let t = /* @__PURE__ */ V(e);
	return t === e || (z(t, "iterate", Xe), /* @__PURE__ */ Lt(e)) ? t : /* @__PURE__ */ It(e) ? /* @__PURE__ */ Ft(e) ? t.map((e) => Vt(Bt(e))) : t.map(Vt) : t.map(Bt);
}
function et(e) {
	return z(e = /* @__PURE__ */ V(e), "iterate", Xe), e;
}
function tt(e, t) {
	return /* @__PURE__ */ It(e) ? Vt(/* @__PURE__ */ Ft(e) ? Bt(t) : t) : Bt(t);
}
var nt = {
	__proto__: null,
	[Symbol.iterator]() {
		return rt(this, Symbol.iterator, (e) => tt(this, e));
	},
	concat(...e) {
		return $e(this).concat(...e.map((e) => d(e) ? $e(e) : e));
	},
	entries() {
		return rt(this, "entries", (e) => (e[1] = tt(this, e[1]), e));
	},
	every(e, t) {
		return at(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return at(this, "filter", e, t, (e) => e.map((e) => tt(this, e)), arguments);
	},
	find(e, t) {
		return at(this, "find", e, t, (e) => tt(this, e), arguments);
	},
	findIndex(e, t) {
		return at(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return at(this, "findLast", e, t, (e) => tt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return at(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return at(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return st(this, "includes", e);
	},
	indexOf(...e) {
		return st(this, "indexOf", e);
	},
	join(e) {
		return $e(this).join(e);
	},
	lastIndexOf(...e) {
		return st(this, "lastIndexOf", e);
	},
	map(e, t) {
		return at(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ct(this, "pop");
	},
	push(...e) {
		return ct(this, "push", e);
	},
	reduce(e, ...t) {
		return ot(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ot(this, "reduceRight", e, t);
	},
	shift() {
		return ct(this, "shift");
	},
	some(e, t) {
		return at(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ct(this, "splice", e);
	},
	toReversed() {
		return $e(this).toReversed();
	},
	toSorted(e) {
		return $e(this).toSorted(e);
	},
	toSpliced(...e) {
		return $e(this).toSpliced(...e);
	},
	unshift(...e) {
		return ct(this, "unshift", e);
	},
	values() {
		return rt(this, "values", (e) => tt(this, e));
	}
};
function rt(e, t, n) {
	let r = et(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Lt(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var it = Array.prototype;
function at(e, t, n, r, i, a) {
	let o = et(e), s = o !== e && !/* @__PURE__ */ Lt(e), c = o[t];
	if (c !== it[t]) {
		let t = c.apply(e, a);
		return s ? Bt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, tt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ot(e, t, n, r) {
	let i = et(e), a = i !== e && !/* @__PURE__ */ Lt(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = tt(e, t)), n.call(this, t, tt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? tt(e, c) : c;
}
function st(e, t, n) {
	let r = /* @__PURE__ */ V(e);
	z(r, "iterate", Xe);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Rt(n[0]) ? (n[0] = /* @__PURE__ */ V(n[0]), r[t](...n)) : i;
}
function ct(e, t, n = []) {
	Be(), je();
	let r = (/* @__PURE__ */ V(e))[t].apply(e, n);
	return Me(), Ve(), r;
}
var lt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), ut = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function dt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ V(this);
	return z(t, "has", e), t.hasOwnProperty(e);
}
var ft = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? At : kt : i ? Ot : Dt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = nt[t])) return e;
			if (t === "hasOwnProperty") return dt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ H(e) ? e : n);
		if ((_(t) ? ut.has(t) : lt(t)) || (r || z(e, "get", t), i)) return o;
		if (/* @__PURE__ */ H(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Nt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Nt(o) : /* @__PURE__ */ B(o) : o;
	}
}, pt = class extends ft {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ It(i);
			if (!/* @__PURE__ */ Lt(n) && !/* @__PURE__ */ It(n) && (i = /* @__PURE__ */ V(i), n = /* @__PURE__ */ V(n)), !a && /* @__PURE__ */ H(i) && !/* @__PURE__ */ H(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ H(e) ? e : r);
		return e === /* @__PURE__ */ V(r) && s && (o ? O(n, i) && Ze(e, "set", t, n, i) : Ze(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && Ze(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !ut.has(t)) && z(e, "has", t), n;
	}
	ownKeys(e) {
		return z(e, "iterate", d(e) ? "length" : Je), Reflect.ownKeys(e);
	}
}, mt = class extends ft {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, ht = /* @__PURE__ */ new pt(), gt = /* @__PURE__ */ new mt(), _t = /* @__PURE__ */ new pt(!0), vt = (e) => e, yt = (e) => Reflect.getPrototypeOf(e);
function bt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ V(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? vt : t ? Vt : Bt;
		return !t && z(a, "iterate", l ? Ye : Je), s(Object.create(u), { next() {
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
function xt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function St(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ V(r), a = /* @__PURE__ */ V(n);
			e || (O(n, a) && z(i, "get", n), z(i, "get", a));
			let { has: o } = yt(i), s = t ? vt : e ? Vt : Bt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && z(/* @__PURE__ */ V(t), "iterate", Je), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ V(n), i = /* @__PURE__ */ V(t);
			return e || (O(t, i) && z(r, "has", t), z(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ V(a), s = t ? vt : e ? Vt : Bt;
			return !e && z(o, "iterate", Je), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: xt("add"),
		set: xt("set"),
		delete: xt("delete"),
		clear: xt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ V(this), r = yt(n), i = /* @__PURE__ */ V(e), a = !t && !/* @__PURE__ */ Lt(e) && !/* @__PURE__ */ It(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), Ze(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Lt(n) && !/* @__PURE__ */ It(n) && (n = /* @__PURE__ */ V(n));
			let r = /* @__PURE__ */ V(this), { has: i, get: a } = yt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ V(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && Ze(r, "set", e, n, s) : Ze(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ V(this), { has: n, get: r } = yt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ V(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && Ze(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ V(this), t = e.size !== 0, n = e.clear();
			return t && Ze(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = bt(r, e, t);
	}), n;
}
function Ct(e, t) {
	let n = St(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var wt = { get: /* @__PURE__ */ Ct(!1, !1) }, Tt = { get: /* @__PURE__ */ Ct(!1, !0) }, Et = { get: /* @__PURE__ */ Ct(!0, !1) }, Dt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap();
function jt(e) {
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
function B(e) {
	return /* @__PURE__ */ It(e) ? e : Pt(e, !1, ht, wt, Dt);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
	return Pt(e, !1, _t, Tt, Ot);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
	return Pt(e, !0, gt, Et, kt);
}
function Pt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = jt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
	return /* @__PURE__ */ It(e) ? /* @__PURE__ */ Ft(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function V(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ V(t) : e;
}
function zt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && A(e, "__v_skip", !0), e;
}
var Bt = (e) => v(e) ? /* @__PURE__ */ B(e) : e, Vt = (e) => v(e) ? /* @__PURE__ */ Nt(e) : e;
// @__NO_SIDE_EFFECTS__
function H(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
	return Ut(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return Ut(e, !0);
}
function Ut(e, t) {
	return /* @__PURE__ */ H(e) ? e : new Wt(e, t);
}
var Wt = class {
	constructor(e, t) {
		this.dep = new Ge(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ V(e), this._value = t ? e : Bt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Lt(e) || /* @__PURE__ */ It(e);
		e = n ? e : /* @__PURE__ */ V(e), O(e, t) && (this._rawValue = e, this._value = n ? e : Bt(e), this.dep.trigger());
	}
};
function W(e) {
	return /* @__PURE__ */ H(e) ? e.value : e;
}
var Gt = {
	get: (e, t, n) => t === "__v_raw" ? e : W(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ H(i) && !/* @__PURE__ */ H(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Kt(e) {
	return /* @__PURE__ */ Ft(e) ? e : new Proxy(e, Gt);
}
var qt = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ V(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ Rt(i) || /* @__PURE__ */ Lt(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = W(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ H(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ H(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return Qe(this._raw, this._key);
	}
}, Jt = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Yt(e, t, n) {
	return /* @__PURE__ */ H(e) ? e : h(e) ? new Jt(e) : v(e) && arguments.length > 1 ? Xt(e, t, n) : /* @__PURE__ */ U(e);
}
function Xt(e, t, n) {
	return new qt(e, t, n);
}
var Zt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ge(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ue - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && L !== this) return Ae(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Ie(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function Qt(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new Zt(r, i, n);
}
var $t = {}, en = /* @__PURE__ */ new WeakMap(), tn = void 0;
function nn(e, t = !1, n = tn) {
	if (n) {
		let t = en.get(n);
		t || en.set(n, t = []), t.push(e);
	}
}
function rn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ Lt(e) || o === !1 || o === 0 ? an(e, 1) : an(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ H(e) ? (g = () => e.value, y = /* @__PURE__ */ Lt(e)) : /* @__PURE__ */ Ft(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Ft(e) || /* @__PURE__ */ Lt(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ H(e)) return e.value;
		if (/* @__PURE__ */ Ft(e)) return p(e);
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
		let t = tn;
		tn = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			tn = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => an(e(), t);
	}
	let x = Ce(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill($t) : $t, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (n) {
				let t = m.run();
				if (e || o || y || (b ? t.some((e, t) => O(e, C[t])) : O(t, C))) {
					_ && _();
					let e = tn;
					tn = m;
					try {
						let e = [
							t,
							C === $t ? void 0 : b && C[0] === $t ? [] : C,
							v
						];
						C = t, f ? f(n, 3, e) : n(...e);
					} finally {
						tn = e;
					}
				}
			} else m.run();
		}
	};
	return u && u(w), m = new Ee(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => nn(e, !1, m), _ = m.onStop = () => {
		let e = en.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			en.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function an(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ H(e)) an(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) an(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		an(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) an(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && an(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function on(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		cn(e, t, n);
	}
}
function sn(e, t, n, r) {
	if (h(e)) {
		let i = on(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			cn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(sn(e[a], t, n, r));
		return i;
	}
}
function cn(e, n, r, i = !0) {
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
			Be(), on(o, null, 10, [
				e,
				i,
				a
			]), Ve();
			return;
		}
	}
	ln(e, r, a, i, s);
}
function ln(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var G = [], un = -1, dn = [], fn = null, pn = 0, mn = /* @__PURE__ */ Promise.resolve(), hn = null;
function gn(e) {
	let t = hn || mn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function _n(e) {
	let t = un + 1, n = G.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = G[r], a = Cn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function vn(e) {
	if (!(e.flags & 1)) {
		let t = Cn(e), n = G[G.length - 1];
		!n || !(e.flags & 2) && t >= Cn(n) ? G.push(e) : G.splice(_n(t), 0, e), e.flags |= 1, yn();
	}
}
function yn() {
	hn ||= mn.then(wn);
}
function bn(e) {
	if (!d(e)) fn && e.id === -1 ? fn.splice(pn + 1, 0, e) : e.flags & 1 || (dn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) dn.push(e[t]);
	yn();
}
function xn(e, t, n = un + 1) {
	for (; n < G.length; n++) {
		let t = G[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			G.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Sn(e) {
	if (dn.length) {
		let e = [...new Set(dn)].sort((e, t) => Cn(e) - Cn(t));
		if (dn.length = 0, fn) {
			for (let t = 0; t < e.length; t++) fn.push(e[t]);
			return;
		}
		for (fn = e, pn = 0; pn < fn.length; pn++) {
			let e = fn[pn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		fn = null, pn = 0;
	}
}
var Cn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function wn(e) {
	try {
		for (un = 0; un < G.length; un++) {
			let e = G[un];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), on(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; un < G.length; un++) {
			let e = G[un];
			e && (e.flags &= -2);
		}
		un = -1, G.length = 0, Sn(e), hn = null, (G.length || dn.length) && wn(e);
	}
}
var Tn = null, En = null;
function Dn(e) {
	let t = Tn;
	return Tn = e, En = e && e.type.__scopeId || null, t;
}
function On(e, t = Tn, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ii(-1);
		let i = Dn(t), a = Mi.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Mi.length; e > a; e--) Pi();
			Dn(i), r._d && Ii(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function kn(e, n) {
	if (Tn === null) return e;
	let r = ha(Tn), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && an(o), i.push({
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
function An(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Be(), sn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ve());
	}
}
function jn(e, t) {
	if (ta) {
		let n = ta.provides, r = ta.parent && ta.parent.provides;
		r === n && (n = ta.provides = Object.create(r)), n[e] = t;
	}
}
function Mn(e, t, n = !1) {
	let r = na();
	if (r || zr) {
		let i = zr ? zr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
var Nn = /* @__PURE__ */ Symbol.for("v-scx"), Pn = () => Mn(Nn);
function Fn(e, t, n) {
	return In(e, t, n);
}
function In(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (ca) {
		if (c === "sync") {
			let e = Pn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = ta;
	u.call = (e, t, n) => sn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		gi(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : vn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = rn(e, n, u);
	return ca && (f ? f.push(h) : d && h()), h;
}
function Ln(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Rn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = aa(this), s = In(i, a.bind(r), n);
	return o(), s;
}
function Rn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var zn = /* @__PURE__ */ Symbol("_vte"), Bn = (e) => e.__isTeleport, Vn = /* @__PURE__ */ Symbol("_leaveCb");
function Hn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== Ai) {
			t = n;
			break;
		}
	}
	return t;
}
function Un(e) {
	if (!Qn(e)) return Bn(e.type) && e.children ? Hn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Wn(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Wn(Bn(n.type) && Un(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Gn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Kn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function qn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Jn = /* @__PURE__ */ new WeakMap();
function Yn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Yn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (Zn(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Yn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? ha(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ V(v), b = v === t ? i : (e) => !qn(_, e) && u(y, e), x = (e, t) => !(t && qn(_, t));
	if (m != null && m !== p) {
		if (Xn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ H(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) on(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ H(p);
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
					i(), Jn.delete(e);
				};
				t.id = -1, Jn.set(e, t), gi(t, r);
			} else Xn(e), i();
		}
	}
}
function Xn(e) {
	let t = Jn.get(e);
	t && (t.flags |= 8, Jn.delete(e));
}
oe().requestIdleCallback, oe().cancelIdleCallback;
var Zn = (e) => !!e.type.__asyncLoader, Qn = (e) => e.type.__isKeepAlive;
function $n(e, t) {
	tr(e, "a", t);
}
function er(e, t) {
	tr(e, "da", t);
}
function tr(e, t, n = ta) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (rr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Qn(e.parent.vnode) && nr(r, t, n, e), e = e.parent;
	}
}
function nr(e, t, n, r) {
	let i = rr(t, e, r, !0);
	ur(() => {
		c(r[t], i);
	}, n);
}
function rr(e, t, n = ta, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Be();
			let i = aa(n), a = sn(t, n, e, r);
			return i(), Ve(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var ir = (e) => (t, n = ta) => {
	(!ca || e === "sp") && rr(e, (...e) => t(...e), n);
}, ar = ir("bm"), or = ir("m"), sr = ir("bu"), cr = ir("u"), lr = ir("bum"), ur = ir("um"), dr = ir("sp"), fr = ir("rtg"), pr = ir("rtc");
function mr(e, t = ta) {
	rr("ec", e, t);
}
var hr = /* @__PURE__ */ Symbol.for("v-ndc");
function K(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Ft(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Lt(e), s = /* @__PURE__ */ It(e), e = et(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Vt(Bt(e[n])) : Bt(e[n]) : e[n], n, void 0, a && a[n]);
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
var gr = (e) => e ? sa(e) ? ha(e) : gr(e.parent) : null, _r = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => gr(e.parent),
	$root: (e) => gr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Er(e),
	$forceUpdate: (e) => e.f ||= () => {
		vn(e.update);
	},
	$nextTick: (e) => e.n ||= gn.bind(e.proxy),
	$watch: (e) => Ln.bind(e)
}), vr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), yr = {
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
			else if (vr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else xr && (s[n] = 0);
		}
		let d = _r[n], f, p;
		if (d) return n === "$attrs" && z(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return vr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || vr(n, c) || u(o, c) || u(i, c) || u(_r, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function br(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var xr = !0;
function Sr(e) {
	let t = Er(e), n = e.proxy, i = e.ctx;
	xr = !1, t.beforeCreate && wr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: T, renderTracked: ee, renderTriggered: te, errorCaptured: E, serverPrefetch: ne, expose: D, inheritAttrs: re, components: ie, directives: O, filters: k } = t;
	if (u && Cr(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ B(t));
	}
	if (xr = !0, o) for (let e in o) {
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
	if (c) for (let e in c) Tr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			jn(t, e[t]);
		});
	}
	f && wr(f, e, "c");
	function A(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (A(ar, p), A(or, m), A(sr, g), A(cr, _), A($n, y), A(er, b), A(mr, E), A(pr, ee), A(fr, te), A(lr, S), A(ur, w), A(dr, ne), d(D)) {
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
	T && e.render === r && (e.render = T), re != null && (e.inheritAttrs = re), ie && (e.components = ie), O && (e.directives = O), ne && Kn(e);
}
function Cr(e, t, n = r) {
	d(e) && (e = jr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Mn(r.from || n, r.default, !0) : Mn(r.from || n) : Mn(r), /* @__PURE__ */ H(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function wr(e, t, n) {
	sn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Tr(e, t, n, r) {
	let i = r.includes(".") ? Rn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && Fn(i, n);
	} else if (h(e)) Fn(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Tr(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) && Fn(i, r, e);
		}
	}
}
function Er(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Dr(c, e, o, !0)), Dr(c, t, o)), v(t) && a.set(t, c), c;
}
function Dr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Dr(e, a, n, !0), i && i.forEach((t) => Dr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Or[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Or = {
	data: kr,
	props: Pr,
	emits: Pr,
	methods: Nr,
	computed: Nr,
	beforeCreate: Mr,
	created: Mr,
	beforeMount: Mr,
	mounted: Mr,
	beforeUpdate: Mr,
	updated: Mr,
	beforeDestroy: Mr,
	beforeUnmount: Mr,
	destroyed: Mr,
	unmounted: Mr,
	activated: Mr,
	deactivated: Mr,
	errorCaptured: Mr,
	serverPrefetch: Mr,
	components: Nr,
	directives: Nr,
	watch: Fr,
	provide: kr,
	inject: Ar
};
function kr(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Ar(e, t) {
	return Nr(jr(e), jr(t));
}
function jr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Mr(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Nr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pr(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), br(e), br(t ?? {})) : t;
}
function Fr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Mr(e[r], t[r]);
	return n;
}
function Ir() {
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
var Lr = 0;
function Rr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Ir(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Lr++,
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
					let u = l._ceVNode || Z(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, ha(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (sn(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = zr;
				zr = l;
				try {
					return e();
				} finally {
					zr = t;
				}
			}
		};
		return l;
	};
}
var zr = null, Br = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function Vr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Br(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(j)));
	let c, l = i[c = ie(n)] || i[c = ie(E(n))];
	!l && o && (l = i[c = ie(D(n))]), l && sn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, sn(u, e, 6, a);
	}
}
var Hr = /* @__PURE__ */ new WeakMap();
function Ur(e, t, n = !1) {
	let r = n ? Hr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Ur(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Wr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, D(t)) || u(e, t));
}
function Gr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = Dn(e), v, y;
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
			}) : e(f, null)), y = t.props ? c : Kr(c);
		}
	} catch (t) {
		Mi.length = 0, cn(t, e, 1), v = Z(Ai);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = qr(y, a)), b = Gi(b, y, !1, !0));
	}
	return n.dirs && (b = Gi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Wn(Bn(b.type) && Un(b) || b, n.transition), v = b, Dn(_), v;
}
var Kr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, qr = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Jr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Yr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Xr(o, r, n) && !Wr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Yr(r, o, l) : !!o;
	return !1;
}
function Yr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Xr(t, e, a) && !Wr(n, a)) return !0;
	}
	return !1;
}
function Xr(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !_e(r, i) : r !== i;
}
function Zr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Qr = {}, $r = () => Object.create(Qr), ei = (e) => Object.getPrototypeOf(e) === Qr;
function ti(e, t, n, r = !1) {
	let i = {}, a = $r();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ri(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Mt(i) : e.type.props ? i : a, e.attrs = a;
}
function ni(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ V(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Wr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = E(o);
						i[t] = ii(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ri(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = D(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ii(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && Ze(e.attrs, "set", "");
}
function ri(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (T(t)) continue;
		let l = n[t], d;
		a && u(a, d = E(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Wr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ V(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = ii(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function ii(e, t, n, r, i, a) {
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
var ai = /* @__PURE__ */ new WeakMap();
function oi(e, r, i = !1) {
	let a = i ? ai : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = oi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = E(c[e]);
		si(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = E(e);
		if (si(t)) {
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
function si(e) {
	return e[0] !== "$" && !T(e);
}
var ci = (e) => e === "_" || e === "_ctx" || e === "$stable", li = (e) => d(e) ? e.map(qi) : [qi(e)], ui = (e, t, n) => {
	if (t._n) return t;
	let r = On((...e) => li(t(...e)), n);
	return r._c = !1, r;
}, di = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ci(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = ui(n, i, r);
		else if (i != null) {
			let e = li(i);
			t[n] = () => e;
		}
	}
}, fi = (e, t) => {
	let n = li(t);
	e.slots.default = () => n;
}, pi = (e, t, n) => {
	for (let r in t) (n || !ci(r)) && (e[r] = t[r]);
}, mi = (e, t, n) => {
	let r = e.slots = $r();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (pi(r, t, n), n && A(r, "_", e, !0)) : di(t, r);
	} else t && fi(e, t);
}, hi = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : pi(a, n, r) : (o = !n.$stable, di(n, a)), s = n;
	} else n && (fi(e, n), s = { default: 1 });
	if (o) for (let e in a) !ci(e) && s[e] == null && delete a[e];
}, gi = Oi;
function _i(e) {
	return vi(e);
}
function vi(e, i) {
	let a = oe();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Bi(e, t) && (i = me(e), N(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case ki:
				y(e, t, r, i);
				break;
			case Ai:
				b(e, t, r, i);
				break;
			case ji:
				e ?? x(t, r, i, s);
				break;
			case q:
				ie(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, r, i, a, o, s, c, l) : f & 6 ? O(e, t, r, i, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, r, i, a, o, s, c, l, _e);
		}
		d != null && a ? Yn(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Yn(e.ref, null, o, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), ne(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && E(e.children, d, null, r, i, yi(e, a), s, u), _ && An(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !T(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Zi(f, r, e);
		}
		_ && An(e, null, r, "beforeMount");
		let v = xi(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && gi(() => {
			try {
				f && Zi(f, r, e), v && g.enter(d), _ && An(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Di(n.type) && (n.ssContent === t || n.ssFallback === t)) {
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
		if (r && bi(r, !1), (g = h.onVnodeBeforeUpdate) && Zi(g, r, n, e), f && An(n, e, r, "beforeUpdate"), r && bi(r, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? D(e.dynamicChildren, d, l, r, i, yi(n, a), o) : s || ce(e, n, l, null, r, i, yi(n, a), o, !1), u > 0) {
			if (u & 16) re(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && re(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && gi(() => {
			g && Zi(g, r, n, e), f && An(n, e, r, "updated");
		}, i);
	}, D = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === q || !Bi(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, re = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !T(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (T(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ie = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), E(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (D(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Si(e, t, !0)) : ce(e, t, n, f, i, a, s, c, l);
	}, O = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : A(t, n, r, i, a, o, c) : j(e, t, c);
	}, A = (e, t, n, r, i, a, o) => {
		let s = e.component = ea(e, r, i);
		if (Qn(e) && (s.ctx.renderer = _e), la(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ae, o), !e.el) {
				let r = s.subTree = Z(Ai);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ae(s, e, t, n, i, a, o);
	}, j = (e, t, n) => {
		let r = t.component = e.component;
		if (Jr(e, t, n)) {
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
					let n = wi(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							gi(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				bi(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && k(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Zi(d, s, t, c), bi(e, !0);
				let f = Gr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), me(p), e, i, a), t.el = f.el, u === null && Zr(e, f.el), r && gi(r, i), (d = t.props && t.props.onVnodeUpdated) && gi(() => Zi(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Zn(t);
				if (bi(e, !1), l && k(l), !m && (o = c && c.onVnodeBeforeMount) && Zi(o, d, t), bi(e, !0), s && ye) {
					let t = () => {
						e.subTree = Gr(e), ye(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Gr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && gi(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					gi(() => Zi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Zn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && gi(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Ee(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => vn(u), bi(e, !0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ni(e, t.props, r, n), hi(e, t.children, n), Be(), xn(e), Ve();
	}, ce = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				ue(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				le(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && pe(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ue(l, d, n, r, i, a, o, s, c) : pe(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && E(d, n, r, i, a, o, s, c));
	}, le = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Ji(t[p]) : qi(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? pe(e, a, o, !0, !1, f) : E(t, r, i, a, o, s, c, l, f);
	}, ue = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Ji(t[u]) : qi(t[u]);
			if (Bi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Ji(t[p]) : qi(t[p]);
			if (Bi(n, i)) v(n, i, r, null, a, o, s, c, l);
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
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Bi(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? N(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? Ci(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Ei(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? M(n, r, p, 2) : _--);
			}
		}
	}, M = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			M(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, _e);
			return;
		}
		if (c === q) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) M(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === ji) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Vn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), gi(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Vn];
					a._isLeaving && a[Vn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, N = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Be(), Yn(s, null, n, e, !0), Ve()), p != null && (!e.ctx || e.ctx === t) && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Zn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Zi(_, t, e), u & 6) P(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && An(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, _e, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? pe(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && pe(c, t, n), r && de(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && gi(() => {
			_ && Zi(_, t, e), h && An(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, de = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === q) {
			fe(n, r);
			return;
		}
		if (t === ji) {
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
	}, P = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ti(c), Ti(l), r && k(r), i.stop(), a ? (a.flags |= 8, N(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, N(o, e, t, n)), s && gi(s, t), gi(() => {
			e.isUnmounted = !0;
		}, t);
	}, pe = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) N(e[o], t, n, r, i);
	}, me = (e) => {
		if (e.shapeFlag & 6) return me(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[zn];
		return n ? h(n) : t;
	}, he = !1, ge = (e, t, n) => {
		let r;
		e == null ? t._vnode && (N(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, he ||= (he = !0, xn(r), Sn(), !1);
	}, _e = {
		p: v,
		um: N,
		m: M,
		r: de,
		mt: A,
		mc: E,
		pc: ce,
		pbc: D,
		n: me,
		o: e
	}, ve, ye;
	return i && ([ve, ye] = i(_e)), {
		render: ge,
		hydrate: ve,
		createApp: Rr(ge, ve)
	};
}
function yi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function xi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Si(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Ji(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Si(t, a)), a.type === ki && (a.patchFlag === -1 && (a = i[e] = Ji(a)), a.el = t.el), a.type === Ai && !a.el && (a.el = t.el);
	}
}
function Ci(e) {
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
function wi(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : wi(t);
}
function Ti(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Ei(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Ei(t.subTree) : null;
}
var Di = (e) => e.__isSuspense;
function Oi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : bn(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), ki = /* @__PURE__ */ Symbol.for("v-txt"), Ai = /* @__PURE__ */ Symbol.for("v-cmt"), ji = /* @__PURE__ */ Symbol.for("v-stc"), Mi = [], Ni = null;
function J(e = !1) {
	Mi.push(Ni = e ? null : []);
}
function Pi() {
	Mi.pop(), Ni = Mi[Mi.length - 1] || null;
}
var Fi = 1;
function Ii(e, t = !1) {
	Fi += e, e < 0 && Ni && t && (Ni.hasOnce = !0);
}
function Li(e) {
	return e.dynamicChildren = Fi > 0 ? Ni || n : null, Pi(), Fi > 0 && Ni && Ni.push(e), e;
}
function Y(e, t, n, r, i, a) {
	return Li(X(e, t, n, r, i, a, !0));
}
function Ri(e, t, n, r, i) {
	return Li(Z(e, t, n, r, i, !0));
}
function zi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Bi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Vi = ({ key: e }) => e ?? null, Hi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ H(e) || h(e) ? {
	i: Tn,
	r: e,
	k: t,
	f: !!n
} : e);
function X(e, t = null, n = null, r = 0, i = null, a = e === q ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Vi(t),
		ref: t && Hi(t),
		scopeId: En,
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
		ctx: Tn
	};
	return s ? (Yi(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Fi > 0 && !o && Ni && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Ni.push(c), c;
}
var Z = Ui;
function Ui(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === hr) && (e = Ai), zi(e)) {
		let r = Gi(e, t, !0);
		return n && Yi(r, n), Fi > 0 && !a && Ni && (r.shapeFlag & 6 ? Ni[Ni.indexOf(e)] = r : Ni.push(r)), r.patchFlag = -2, r;
	}
	if (ga(e) && (e = e.__vccOpts), t) {
		t = Wi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = N(e)), v(n) && (/* @__PURE__ */ Rt(n) && !d(n) && (n = s({}, n)), t.style = se(n));
	}
	let o = g(e) ? 1 : Di(e) ? 128 : Bn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return X(e, t, n, r, i, o, a, !0);
}
function Wi(e) {
	return e ? /* @__PURE__ */ Rt(e) || ei(e) ? s({}, e) : e : null;
}
function Gi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Xi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Vi(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(Hi(t)) : [a, Hi(t)] : Hi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== q ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Gi(e.ssContent),
		ssFallback: e.ssFallback && Gi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Wn(u, c.clone(u)), u;
}
function Ki(e = " ", t = 0) {
	return Z(ki, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (J(), Ri(Ai, null, e)) : Z(Ai, null, e);
}
function qi(e) {
	return e == null || typeof e == "boolean" ? Z(Ai) : d(e) ? Z(q, null, e.slice()) : zi(e) ? Ji(e) : Z(ki, null, String(e));
}
function Ji(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gi(e);
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
			!r && !ei(t) ? t._ctx = Tn : r === 3 && Tn && (Tn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			Yi(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Tn
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Ki(t)]) : n = 8;
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
	sn(e, t, 7, [n, r]);
}
var Qi = Ir(), $i = 0;
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
		scope: new Se(!0),
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
		propsOptions: oi(i, a),
		emitsOptions: Ur(i, a),
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
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = Vr.bind(null, o), e.ce && e.ce(o), o;
}
var ta = null, na = () => ta || Tn, ra, ia;
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
	ti(e, r, a, t), mi(e, i, n || t);
	let o = a ? ua(e, t) : void 0;
	return t && ia(!1), o;
}
function ua(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, yr);
	let { setup: r } = n;
	if (r) {
		Be();
		let n = e.setupContext = r.length > 1 ? ma(e) : null, i = aa(e), a = on(r, e, 0, [e.props, n]), o = y(a);
		if (Ve(), i(), (o || e.sp) && !Zn(e) && Kn(e), o) {
			if (a.then(oa, oa), t) return a.then((n) => {
				ia(!0);
				try {
					da(e, n, t);
				} finally {
					ia(!1);
				}
			}).catch((t) => {
				cn(t, e, 0);
			});
			e.asyncDep = a;
		} else da(e, a, t);
	} else fa(e, t);
}
function da(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Kt(t)), fa(e, n);
}
function fa(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = aa(e);
		Be();
		try {
			Sr(e);
		} finally {
			Ve(), t();
		}
	}
}
var pa = { get(e, t) {
	return z(e, "get", ""), e[t];
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
	return e.exposed ? e.exposeProxy ||= new Proxy(Kt(zt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in _r) return _r[n](e);
		},
		has(e, t) {
			return t in e || t in _r;
		}
	}) : e.proxy;
}
function ga(e) {
	return h(e) && "__vccOpts" in e;
}
var _a = (e, t) => /* @__PURE__ */ Qt(e, t, ca);
function va(e, t, n) {
	try {
		Ii(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? zi(t) ? Z(e, null, [t]) : Z(e, t) : Z(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && zi(n) && (n = [n]), Z(e, t, n));
	} finally {
		Ii(1);
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
	r = re(r);
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
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Va, t.slice(6, t.length)) : e.setAttributeNS(Va, t, n) : n == null || a && !P(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
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
		r === "boolean" ? n = P(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
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
				e && sn(e, t, 5, a);
			}
		} else sn(r, t, 5, [e]);
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
	return d(t) ? (e) => k(t, e) : t;
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
	return t && (e = e.trim()), n && (e = j(e)), e;
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
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? j(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, po = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Wa(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? j(go(e)) : go(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[co](i);
			} finally {
				gn(() => {
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
	if (!n || d(e)) return _e(e, t);
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
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : ve(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (_e(go(a), t)) {
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
}, bo = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, xo = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = D(n.key);
		if (t.some((e) => e === r || bo[e] === r)) return e(n);
	}));
}, So = /* @__PURE__ */ s({ patchProp: no }, Da), Co;
function wo() {
	return Co ||= _i(So);
}
var To = ((...e) => {
	let t = wo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Do(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Eo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Eo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Do(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region src/session-expiry.ts
function Oo(e) {
	try {
		let t = e.split(".")[1];
		if (!t) return;
		let n = atob(t.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(t.length / 4) * 4, "=")), r = JSON.parse(n).exp;
		return typeof r == "number" && Number.isFinite(r) ? r * 1e3 : void 0;
	} catch {
		return;
	}
}
var ko = class {
	warnSeconds;
	hooks;
	timer;
	current;
	warned = !1;
	constructor(e, t) {
		this.warnSeconds = e, this.hooks = t;
	}
	observe(e) {
		let t = Oo(e);
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
function Ao(e) {
	return e === "MFA_REQUIRED" ? "Esta operación requiere verificación en dos pasos. Vuelva a autenticarse con su segundo factor e inténtelo de nuevo." : e === "NOT_AUTHORIZED_TO_ADMINISTER_TENANT_CATALOG" ? "Para definir o modificar roles y perfiles de todo el inquilino debe administrar al menos una aplicación." : "No tiene permisos para administrar la seguridad de esta aplicación.";
}
var jo = { PROTECTED_ROLE: "El rol ADMIN administra la aplicación y no se puede modificar ni eliminar." }, Mo = /* @__PURE__ */ new Map(), No = /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi;
function Po(e, t = 0) {
	if (!e || typeof e != "object" || t > 6) return;
	if (Array.isArray(e)) {
		for (let n of e) Po(n, t + 1);
		return;
	}
	let n = e;
	if (typeof n.id == "string") {
		let e = typeof n.name == "string" && n.name ? n.name : typeof n.email == "string" && n.email ? n.email : typeof n.path == "string" && typeof n.method == "string" ? `${n.method} ${n.path}` : void 0;
		e && (Mo.size > 5e3 && Mo.clear(), Mo.set(n.id.toLowerCase(), e));
	}
	for (let e of Object.values(n)) e && typeof e == "object" && Po(e, t + 1);
}
function Fo(e) {
	if (e) return e.replace(No, (e) => Mo.get(e.toLowerCase()) ?? "").replace(/\s{2,}/g, " ").trim() || void 0;
}
var Io = class extends Error {
	status;
	code;
	fields;
	constructor(e, t, n = "No fue posible completar la solicitud.", r = []) {
		super(n), this.status = e, this.code = t, this.fields = r, this.name = "ApiError";
	}
}, Lo = class {
	options;
	baseUrl;
	expiry;
	constructor(e, t = {}) {
		if (this.options = e, this.baseUrl = e.apiBaseUrl.replace(/\/$/, ""), e.getAccessToken) {
			let n = e.sessionWarningSeconds ?? 60;
			this.expiry = new ko(n, {
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
		let n = new Io(401, "UNAUTHENTICATED", "No hay una sesión vigente. Inicie sesión de nuevo.");
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
			throw e instanceof DOMException && e.name === "AbortError" ? e : new Io(0, "NETWORK_ERROR", "No fue posible conectar con el PDP.");
		}
		if (!i.ok) {
			let e = await i.json().catch(() => null), t = i.status === 403 ? Ao(e?.code) : i.status === 404 ? "El elemento ya no existe o no pertenece a esta aplicación." : i.status === 409 ? "La operación entra en conflicto con el estado actual." : i.status === 400 ? "Revise los datos ingresados." : i.status === 429 ? "Demasiadas solicitudes. Espere unos segundos e inténtelo de nuevo." : i.status === 503 ? "El servicio no está disponible temporalmente. Inténtelo de nuevo en unos segundos." : `El servicio respondió ${i.status}.`, n = new Io(i.status, e?.code, i.status === 403 ? t : (e?.code ? jo[e.code] : void 0) ?? Fo(e?.detail ?? e?.message) ?? t, e?.fieldErrors ?? e?.errors ?? []);
			throw this.report(n), n;
		}
		if (i.status === 204) return;
		let a = (await i.json()).data;
		return Po(a), a;
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
function Ro(e) {
	let t = /* @__PURE__ */ U(""), n = /* @__PURE__ */ U(), r = /* @__PURE__ */ U(!1), i = /* @__PURE__ */ U(""), a = /* @__PURE__ */ U(!1), o = /* @__PURE__ */ B(/* @__PURE__ */ new Set()), s = /* @__PURE__ */ B($()), c = /* @__PURE__ */ B($()), l = /* @__PURE__ */ B($()), u = /* @__PURE__ */ B($()), d = /* @__PURE__ */ B($()), f = /* @__PURE__ */ B($()), p = /* @__PURE__ */ B($()), m = /* @__PURE__ */ B($()), h = /* @__PURE__ */ B($()), g = /* @__PURE__ */ B($()), _ = /* @__PURE__ */ B($()), v = /* @__PURE__ */ B($()), y = /* @__PURE__ */ B($()), b = /* @__PURE__ */ B($()), x = /* @__PURE__ */ new Map(), S, C = /* @__PURE__ */ U(null), w, T = _a(() => (w?.dispose(), w = new Lo(e.value, {
		onExpiring: (e) => {
			C.value = e;
		},
		onRenewed: () => {
			C.value = null;
		}
	}), w)), ee = _a(() => !!n.value && !r.value), te = {
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
	}, E = {
		resources: s,
		roles: c,
		profiles: l,
		administrators: u,
		roleAssignments: d,
		profileAssignments: f
	}, ne = (e, n, r) => `${t.value}:${e}:${n}:${r}`;
	function D() {
		x.clear(), n.value = void 0;
		for (let e of Object.values(E)) Object.assign(e, $(), { limit: e.limit });
		Object.assign(p, $()), Object.assign(m, $()), Object.assign(h, $()), Object.assign(g, $()), Object.assign(_, $()), Object.assign(v, $()), Object.assign(y, $()), Object.assign(b, $());
	}
	async function re() {
		S?.abort(), S = new AbortController(), r.value = !0, i.value = "";
		try {
			let e = await T.value.resolveApplicationId(S.signal);
			t.value = e, n.value = await T.value.getSummary(e, S.signal);
		} catch (e) {
			Jo(e) || (i.value = Yo(e));
		} finally {
			r.value = !1;
		}
	}
	async function ie(e, n = E[e].page, r = !1) {
		if (!t.value) return;
		let i = E[e], a = ne(e, n, i.limit);
		i.abortController?.abort(), i.error = null;
		let o = !r && x.get(a);
		if (o) {
			qo(i, o);
			return;
		}
		let s = new AbortController();
		i.abortController = s, i.loading = !0;
		try {
			let r = await te[e](T.value, t.value, n, i.limit, s.signal);
			if (i.abortController !== s) return;
			x.set(a, r), qo(i, r);
		} catch (e) {
			!Jo(e) && i.abortController === s && (i.error = Yo(e));
		} finally {
			i.abortController === s && (i.loading = !1);
		}
	}
	async function O(e, n = 0, r = !1) {
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
			r ? (p.content = [...p.content, ...a.content], p.total = a.total, p.page = a.page, p.limit = a.limit, p.loaded = !0) : qo(p, a);
		} catch (e) {
			Jo(e) || (p.error = Yo(e));
		} finally {
			p.abortController === i && (p.loading = !1);
		}
	}
	async function k(e, n = m.page, r = !1) {
		return se("role-resources", e, m, (r) => T.value.getRoleResources(t.value, e, {
			page: n,
			size: m.limit
		}, r), n, r);
	}
	async function A(e, n = h.page, r = !1) {
		return se("profile-roles", e, h, (r) => T.value.getProfileRoles(t.value, e, {
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
			qo(_, a.roleAssignments), qo(v, a.profileAssignments);
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
			x.set(i, r), qo(_, r.roleAssignments), qo(v, r.profileAssignments);
		} catch (e) {
			if (!Jo(e)) {
				let t = Yo(e);
				_.error = v.error = t;
			}
		} finally {
			_.abortController === o && (_.loading = v.loading = !1);
		}
	}
	async function ae(e, n = y.page, r = !1) {
		return se("role-assignments", e, y, (r) => T.value.getAssignmentsForRole(t.value, e, {
			page: n,
			size: y.limit
		}, r), n, r);
	}
	async function oe(e, n = b.page, r = !1) {
		return se("profile-assignments", e, b, (r) => T.value.getAssignmentsForProfile(t.value, e, {
			page: n,
			size: b.limit
		}, r), n, r);
	}
	async function se(e, n, r, i, a, o) {
		if (!t.value) return;
		let s = `${t.value}:${n}:${e}:${a}:${r.limit}`;
		r.abortController?.abort(), r.error = null;
		let c = o ? void 0 : x.get(s);
		if (c) {
			qo(r, c);
			return;
		}
		let l = new AbortController();
		r.abortController = l, r.loading = !0;
		try {
			let e = await i(l.signal);
			if (r.abortController !== l) return;
			x.set(s, e), qo(r, e);
		} catch (e) {
			!Jo(e) && r.abortController === l && (r.error = Yo(e));
		} finally {
			r.abortController === l && (r.loading = !1);
		}
	}
	let ce = [
		":user-assignments:",
		":role-assignments:",
		":profile-assignments:"
	];
	function le(...e) {
		if (e.includes("roleAssignments") || e.includes("profileAssignments")) for (let e of [...x.keys()]) e.startsWith(`${t.value}:`) && ce.some((t) => e.includes(t)) && x.delete(e);
		for (let r of e) {
			if (r === "summary") {
				n.value = void 0;
				continue;
			}
			for (let e of x.keys()) e.startsWith(`${t.value}:${r}:`) && x.delete(e);
			E[r].loaded = !1;
		}
	}
	function ue(e, n) {
		for (let r of x.keys()) r.startsWith(`${t.value}:${n}:${e}:`) && x.delete(r);
	}
	async function M() {
		D(), await re();
	}
	function N(e) {
		return e ? o.has(e) : o.size > 0;
	}
	async function de(e, n, r = "global", s = !1) {
		if (!t.value || o.has(r)) return !1;
		o.add(r), a.value = !0, i.value = "";
		try {
			await e(T.value, t.value), le(...n);
			let r = n.filter((e) => e !== "summary");
			return await Promise.all(r.map((e) => ie(e, E[e].page, !0))), s && await Promise.all(r.filter((e) => E[e].page > 0 && E[e].content.length === 0).map((e) => ie(e, E[e].page - 1, !0))), n.includes("summary") && await re(), !0;
		} catch (e) {
			return i.value = Yo(e), !1;
		} finally {
			o.delete(r), a.value = o.size > 0;
		}
	}
	return Fn(e, () => {
		D(), re();
	}, {
		immediate: !0,
		deep: !0
	}), we(() => {
		w?.dispose(), S?.abort();
		for (let e of Object.values(E)) e.abortController?.abort();
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
		ready: ee,
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
		load: ie,
		loadSummary: re,
		loadRoleResources: k,
		loadProfileRoles: A,
		loadUserAssignments: j,
		loadAssignmentsForRole: ae,
		loadAssignmentsForProfile: oe,
		searchUsers: O,
		refresh: M,
		mutate: de,
		invalidate: le,
		invalidateRelation: ue
	};
}
function zo(e) {
	return {
		summary: e.summary,
		loading: e.summaryLoading,
		load: e.loadSummary
	};
}
function Bo(e) {
	return e.resources;
}
function Vo(e) {
	return e.roles;
}
function Ho(e) {
	return e.profiles;
}
function Uo(e) {
	return e.administrators;
}
function Wo(e) {
	return e.roleAssignments;
}
function Go(e) {
	return e.profileAssignments;
}
function Ko(e) {
	return {
		state: e.users,
		search: e.searchUsers
	};
}
function qo(e, t) {
	e.content = t.content, e.total = t.total, e.page = t.page, e.limit = t.limit, e.loaded = !0;
}
function Jo(e) {
	return e instanceof DOMException && e.name === "AbortError";
}
function Yo(e) {
	return e instanceof Error ? e.message : "No fue posible cargar la seguridad.";
}
//#endregion
//#region src/components/ConfirmDangerDialog.vue?vue&type=script&setup=true&lang.ts
var Xo = {
	class: "dialog",
	role: "alertdialog",
	"aria-modal": "true",
	"aria-labelledby": "confirm-title"
}, Zo = { class: "dialog-body" }, Qo = { class: "sub" }, $o = { class: "actions bottom" }, es = ["disabled"], ts = ["disabled"], ns = /* @__PURE__ */ Gn({
	__name: "ConfirmDangerDialog",
	props: {
		open: { type: Boolean },
		message: {},
		busy: { type: Boolean }
	},
	emits: ["cancel", "confirm"],
	setup(e) {
		return (t, n) => e.open ? (J(), Y("div", {
			key: 0,
			class: "backdrop",
			onClick: n[2] ||= yo((e) => t.$emit("cancel"), ["self"])
		}, [X("div", Xo, [
			n[3] ||= X("div", { class: "dialog-head" }, [X("p", { class: "eyebrow" }, "Acción irreversible"), X("h3", { id: "confirm-title" }, "Confirmar acción destructiva")], -1),
			X("div", Zo, [X("p", Qo, F(e.message), 1)]),
			X("div", $o, [X("button", {
				class: "quiet",
				disabled: e.busy,
				onClick: n[0] ||= (e) => t.$emit("cancel")
			}, " Cancelar ", 8, es), X("button", {
				"data-testid": "confirm-danger",
				class: "primary danger",
				disabled: e.busy,
				onClick: n[1] ||= (e) => t.$emit("confirm")
			}, " Confirmar ", 8, ts)])
		])])) : Q("", !0);
	}
}), rs = ["aria-label"], is = ["disabled"], as = ["disabled"], os = /* @__PURE__ */ Gn({
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
		return (t, n) => e.total > e.limit ? (J(), Y("div", {
			key: 0,
			class: "pager",
			"aria-label": e.label ?? "Paginación"
		}, [
			X("button", {
				class: "quiet",
				disabled: e.page === 0 || e.loading,
				onClick: n[0] ||= (e) => t.$emit("previous")
			}, " Anterior ", 8, is),
			X("span", null, "Página " + F(e.page + 1) + " de " + F(Math.ceil(e.total / e.limit)), 1),
			X("button", {
				class: "quiet",
				disabled: (e.page + 1) * e.limit >= e.total || e.loading,
				onClick: n[1] ||= (e) => t.$emit("next")
			}, " Siguiente ", 8, as)
		], 8, rs)) : Q("", !0);
	}
}), ss = {
	key: 0,
	class: "empty"
}, cs = { class: "stats" }, ls = {
	key: 0,
	class: "next-steps"
}, us = /* @__PURE__ */ Gn({
	__name: "SecuritySummaryPanel",
	props: {
		summary: {},
		loading: { type: Boolean },
		assignmentCount: {}
	},
	setup(e) {
		let t = e, n = _a(() => {
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
		}), r = _a(() => n.value.length > 0 && n.value.every((e) => e.done));
		return (t, i) => e.loading ? (J(), Y("p", ss, "Consultando políticas de seguridad…")) : e.summary ? (J(), Y(q, { key: 1 }, [X("div", cs, [(J(!0), Y(q, null, K([
			[e.summary.counts.administrators, "administradores"],
			[e.assignmentCount, "asignaciones"],
			[e.summary.counts.roles, "roles"],
			[e.summary.counts.resources, "recursos"]
		], (e) => (J(), Y("div", {
			key: e[1],
			class: "stat"
		}, [X("b", null, F(e[0]), 1), X("small", null, F(e[1]), 1)]))), 128))]), r.value ? Q("", !0) : (J(), Y("div", ls, [i[0] ||= X("h4", null, "Cómo empezar", -1), X("ol", null, [(J(!0), Y(q, null, K(n.value, (e) => (J(), Y("li", {
			key: e.text,
			class: N({ done: e.done })
		}, F(e.text), 3))), 128))])]))], 64)) : Q("", !0);
	}
}), ds = ["aria-busy"], fs = {
	key: 0,
	class: "empty"
}, ps = {
	key: 1,
	class: "error"
}, ms = { class: "method" }, hs = { class: "grow" }, gs = ["disabled", "onClick"], _s = ["disabled", "onClick"], vs = {
	key: 2,
	class: "empty"
}, ys = /* @__PURE__ */ Gn({
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
		return (t, r) => (J(), Y(q, null, [X("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (J(), Y("div", fs, "Actualizando página…")) : Q("", !0),
			e.state.error ? (J(), Y("p", ps, F(e.state.error), 1)) : Q("", !0),
			(J(!0), Y(q, null, K(e.state.content, (t) => (J(), Y("div", {
				key: t.id,
				class: "row"
			}, [
				X("span", ms, F(t.method), 1),
				X("div", hs, [X("strong", null, F(t.path), 1), r[2] ||= X("small", null, "Recurso protegido", -1)]),
				X("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, gs),
				X("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, _s)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (J(), Y("p", vs, "No hay datos en esta página.")) : Q("", !0)
		], 8, ds), Z(os, {
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
}), bs = ["aria-busy"], xs = {
	key: 0,
	class: "empty"
}, Ss = {
	key: 1,
	class: "error"
}, Cs = { class: "grow" }, ws = { class: "pill" }, Ts = ["disabled", "onClick"], Es = ["disabled", "onClick"], Ds = ["disabled", "onClick"], Os = { key: 1 }, ks = {
	key: 2,
	class: "empty"
}, As = /* @__PURE__ */ Gn({
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
		return (t, i) => (J(), Y(q, null, [X("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (J(), Y("div", xs, "Actualizando página…")) : Q("", !0),
			e.state.error ? (J(), Y("p", Ss, F(e.state.error), 1)) : Q("", !0),
			(J(!0), Y(q, null, K(e.state.content, (t) => (J(), Y("div", {
				key: t.id,
				class: "row"
			}, [
				X("div", Cs, [X("strong", null, F(t.name), 1), X("small", null, F(t.resourceCount ?? 0) + " recursos autorizados", 1)]),
				X("span", ws, F(n(t) ? "Protegido" : "Aplicación"), 1),
				n(t) ? (J(), Y("small", Os, "Administra la aplicación; no se edita.")) : (J(), Y(q, { key: 0 }, [
					X("button", {
						class: "quiet",
						disabled: e.busy,
						onClick: (e) => r("manage", t)
					}, "Administrar recursos", 8, Ts),
					X("button", {
						class: "quiet",
						disabled: e.busy,
						onClick: (e) => r("edit", t)
					}, "Editar", 8, Es),
					X("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("remove", t)
					}, "Eliminar", 8, Ds)
				], 64))
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (J(), Y("p", ks, "No hay datos en esta página.")) : Q("", !0)
		], 8, bs), Z(os, {
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
}), js = ["aria-busy"], Ms = {
	key: 0,
	class: "empty"
}, Ns = {
	key: 1,
	class: "error"
}, Ps = { class: "grow" }, Fs = ["disabled", "onClick"], Is = ["disabled", "onClick"], Ls = ["disabled", "onClick"], Rs = {
	key: 2,
	class: "empty"
}, zs = /* @__PURE__ */ Gn({
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
		return (t, r) => (J(), Y(q, null, [X("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (J(), Y("div", Ms, "Actualizando página…")) : Q("", !0),
			e.state.error ? (J(), Y("p", Ns, F(e.state.error), 1)) : Q("", !0),
			(J(!0), Y(q, null, K(e.state.content, (t) => (J(), Y("div", {
				key: t.id,
				class: "row"
			}, [
				X("div", Ps, [X("strong", null, F(t.name), 1), X("small", null, F(t.roleCount ?? 0) + " roles agrupados", 1)]),
				r[2] ||= X("span", { class: "pill" }, "Aplicación", -1),
				X("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("manage", t)
				}, "Administrar roles", 8, Fs),
				X("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, Is),
				X("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, Ls)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (J(), Y("p", Rs, "No hay datos en esta página.")) : Q("", !0)
		], 8, js), Z(os, {
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
}), Bs = ["aria-busy"], Vs = {
	key: 0,
	class: "empty"
}, Hs = {
	key: 1,
	class: "error"
}, Us = { class: "grow" }, Ws = ["disabled", "onClick"], Gs = {
	key: 2,
	class: "empty"
}, Ks = /* @__PURE__ */ Gn({
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
		return (t, i) => (J(), Y(q, null, [X("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (J(), Y("div", Vs, "Actualizando página…")) : Q("", !0),
			e.state.error ? (J(), Y("p", Hs, F(e.state.error), 1)) : Q("", !0),
			(J(!0), Y(q, null, K(e.state.content, (t) => (J(), Y("div", {
				key: t.user.id,
				class: "row"
			}, [X("div", Us, [
				X("strong", null, F(t.user.name), 1),
				X("small", null, F(t.user.email), 1),
				X("small", null, "Administrador · desde " + F(r(t.validFrom)), 1)
			]), X("button", {
				class: "quiet danger",
				disabled: e.busy,
				onClick: (e) => n("remove", t.user.id)
			}, "Retirar", 8, Ws)]))), 128)),
			e.state.loaded && !e.state.content.length ? (J(), Y("p", Gs, "No hay datos en esta página.")) : Q("", !0)
		], 8, Bs), Z(os, {
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
}), qs = {
	class: "access-workbench",
	"aria-label": "Administración de personas y accesos"
}, Js = {
	class: "perspective-tabs",
	role: "tablist",
	"aria-label": "Perspectiva de consulta"
}, Ys = ["aria-selected", "onClick"], Xs = { class: "access-layout" }, Zs = { class: "access-query" }, Qs = { class: "search-field" }, $s = ["onClick"], ec = { class: "avatar" }, tc = {
	key: 0,
	class: "empty compact"
}, nc = {
	key: 1,
	class: "empty compact people-count"
}, rc = { class: "option-grid" }, ic = ["onClick"], ac = {
	key: 0,
	class: "empty compact"
}, oc = { class: "option-grid" }, sc = ["onClick"], cc = {
	key: 0,
	class: "empty compact"
}, lc = { class: "access-results" }, uc = {
	key: 0,
	class: "empty-state"
}, dc = { class: "identity-strip" }, fc = { class: "avatar large" }, pc = {
	key: 0,
	class: "admin-mark"
}, mc = {
	key: 0,
	class: "error"
}, hc = { class: "access-group" }, gc = { class: "group-title" }, _c = ["disabled", "onClick"], vc = {
	key: 0,
	class: "empty compact"
}, yc = { class: "access-group" }, bc = { class: "group-title" }, xc = ["disabled", "onClick"], Sc = {
	key: 0,
	class: "empty compact"
}, Cc = { class: "result-title" }, wc = { class: "count-badge" }, Tc = {
	key: 0,
	class: "error"
}, Ec = { class: "avatar" }, Dc = { class: "access-meta" }, Oc = ["disabled", "onClick"], kc = {
	key: 1,
	class: "empty compact"
}, Ac = {
	key: 3,
	class: "empty-state"
}, jc = /* @__PURE__ */ Gn({
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
		let n = e, r = t, i = /* @__PURE__ */ U("person"), a = /* @__PURE__ */ U(""), o = /* @__PURE__ */ U(), s = /* @__PURE__ */ U(), c = /* @__PURE__ */ U(), l;
		Fn(a, (e) => {
			l && clearTimeout(l), l = setTimeout(() => r("searchUsers", e), 200);
		}), Fn(i, (e) => {
			e === "person" && !n.users.loaded && r("searchUsers", a.value);
		}), or(() => r("searchUsers", a.value)), lr(() => {
			l && clearTimeout(l);
		});
		function u(e) {
			let t = e.target;
			t.scrollHeight - t.scrollTop - t.clientHeight < 32 && !n.users.loading && n.users.content.length < n.users.total && r("searchUsers", a.value, n.users.page + 1, !0);
		}
		let d = _a(() => i.value === "role" ? n.roleAssignments : n.profileAssignments);
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
		return (t, n) => (J(), Y("section", qs, [
			n[18] ||= X("header", { class: "access-heading" }, [X("div", null, [
				X("p", { class: "kicker" }, "Consultar y ajustar"),
				X("h4", null, "Personas y accesos"),
				X("p", null, "Encuentre una relación vigente y actúe desde el mismo lugar.")
			]), X("span", { class: "scope-mark" }, "Aplicación actual")], -1),
			X("div", Js, [(J(), Y(q, null, K([
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
			], (e) => X("button", {
				key: e.id,
				type: "button",
				role: "tab",
				"aria-selected": i.value === e.id,
				class: N({ active: i.value === e.id }),
				onClick: (t) => i.value = e.id
			}, [X("strong", null, F(e.label), 1), X("small", null, F(e.hint), 1)], 10, Ys)), 64))]),
			X("div", Xs, [X("aside", Zs, [i.value === "person" ? (J(), Y(q, { key: 0 }, [
				n[6] ||= X("label", { for: "person-search" }, "Buscar una persona", -1),
				X("div", Qs, [n[5] ||= X("span", { "aria-hidden": "true" }, "⌕", -1), kn(X("input", {
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
				n[7] ||= X("p", { class: "query-help" }, "Personas del tenant actual, en orden alfabético. Escribe para filtrar por nombre o correo.", -1),
				X("div", {
					class: "choices",
					"aria-label": "Resultados de personas",
					onScrollPassive: u
				}, [
					(J(!0), Y(q, null, K(e.users.content, (e) => (J(), Y("button", {
						key: e.id,
						type: "button",
						class: N(["choice", { selected: o.value?.id === e.id }]),
						onClick: (t) => f(e)
					}, [X("span", ec, F(e.name.slice(0, 1)), 1), X("span", null, [X("strong", null, F(e.name), 1), X("small", null, F(e.email), 1)])], 10, $s))), 128)),
					e.users.loaded && !e.users.content.length ? (J(), Y("p", tc, "No se encontraron personas.")) : Q("", !0),
					e.users.content.length ? (J(), Y("p", nc, F(e.users.loading ? "Cargando más personas…" : e.users.content.length < e.users.total ? `Mostrando ${e.users.content.length} de ${e.users.total} · desliza para ver más` : `${e.users.total} ${e.users.total === 1 ? "persona" : "personas"}`), 1)) : Q("", !0)
				], 32)
			], 64)) : i.value === "role" ? (J(), Y(q, { key: 1 }, [
				n[8] ||= X("p", { class: "query-label" }, "Elija un rol", -1),
				n[9] ||= X("p", { class: "query-help" }, "Muestra únicamente roles de esta aplicación.", -1),
				X("div", rc, [(J(!0), Y(q, null, K(e.roles.content, (e) => (J(), Y("button", {
					key: e.id,
					type: "button",
					class: N({ selected: s.value?.id === e.id }),
					onClick: (t) => p(e)
				}, F(e.name), 11, ic))), 128)), e.roles.loaded && !e.roles.content.length ? (J(), Y("p", ac, "No hay roles disponibles.")) : Q("", !0)])
			], 64)) : (J(), Y(q, { key: 2 }, [
				n[10] ||= X("p", { class: "query-label" }, "Elija un perfil", -1),
				n[11] ||= X("p", { class: "query-help" }, "Muestra únicamente perfiles de esta aplicación.", -1),
				X("div", oc, [(J(!0), Y(q, null, K(e.profiles.content, (e) => (J(), Y("button", {
					key: e.id,
					type: "button",
					class: N({ selected: c.value?.id === e.id }),
					onClick: (t) => m(e)
				}, F(e.name), 11, sc))), 128)), e.profiles.loaded && !e.profiles.content.length ? (J(), Y("p", cc, "No hay perfiles disponibles.")) : Q("", !0)])
			], 64))]), X("div", lc, [i.value === "person" && !o.value ? (J(), Y("div", uc, [...n[12] ||= [
				X("span", { "aria-hidden": "true" }, "⌁", -1),
				X("strong", null, "Seleccione una persona", -1),
				X("p", null, "Busque por nombre o correo para consultar sus accesos vigentes.", -1)
			]])) : i.value === "person" && o.value ? (J(), Y(q, { key: 1 }, [
				X("div", dc, [
					X("span", fc, F(o.value.name.slice(0, 1)), 1),
					X("div", null, [X("strong", null, F(o.value.name), 1), X("small", null, F(o.value.email), 1)]),
					e.personRoleAssignments.content.some((e) => e.role.name === "ADMIN") ? (J(), Y("span", pc, "Administra esta aplicación")) : Q("", !0)
				]),
				e.personRoleAssignments.error || e.personProfileAssignments.error ? (J(), Y("p", mc, F(e.personRoleAssignments.error || e.personProfileAssignments.error), 1)) : Q("", !0),
				X("section", hc, [
					X("div", gc, [n[13] ||= X("span", null, "Roles vigentes", -1), X("b", null, F(e.personRoleAssignments.total), 1)]),
					(J(!0), Y(q, null, K(e.personRoleAssignments.content, (t) => (J(), Y("div", {
						key: t.id,
						class: "access-row"
					}, [X("div", null, [X("strong", null, F(t.role.name), 1), X("small", null, "Vigente desde " + F(g(t.validFrom)), 1)]), X("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, _c)]))), 128)),
					e.personRoleAssignments.loaded && !e.personRoleAssignments.content.length ? (J(), Y("p", vc, "Esta persona no tiene roles asignados.")) : Q("", !0)
				]),
				X("section", yc, [
					X("div", bc, [n[14] ||= X("span", null, "Perfiles vigentes", -1), X("b", null, F(e.personProfileAssignments.total), 1)]),
					(J(!0), Y(q, null, K(e.personProfileAssignments.content, (t) => (J(), Y("div", {
						key: t.id,
						class: "access-row"
					}, [X("div", null, [X("strong", null, F(t.profile.name), 1), X("small", null, "Vigente desde " + F(g(t.validFrom)), 1)]), X("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, xc)]))), 128)),
					e.personProfileAssignments.loaded && !e.personProfileAssignments.content.length ? (J(), Y("p", Sc, "Esta persona no tiene perfiles asignados.")) : Q("", !0)
				]),
				Z(os, {
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
			], 64)) : i.value === "role" && s.value || i.value === "profile" && c.value ? (J(), Y(q, { key: 2 }, [
				X("div", Cc, [X("div", null, [n[15] ||= X("p", { class: "kicker" }, "Personas con acceso", -1), X("h5", null, F(s.value?.name ?? c.value?.name), 1)]), X("span", wc, F(d.value.total), 1)]),
				d.value.error ? (J(), Y("p", Tc, F(d.value.error), 1)) : Q("", !0),
				(J(!0), Y(q, null, K(d.value.content, (t) => (J(), Y("div", {
					key: t.id,
					class: "access-row person-row"
				}, [
					X("span", Ec, F(t.user.name.slice(0, 1)), 1),
					X("div", null, [
						X("strong", null, F(t.user.name), 1),
						X("small", null, F(t.user.email), 1),
						X("small", Dc, [Ki(F(h(t)) + " · desde " + F(g(t.validFrom)), 1), t.validUntil ? (J(), Y(q, { key: 0 }, [Ki(" hasta " + F(g(t.validUntil)), 1)], 64)) : Q("", !0)])
					]),
					X("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, Oc)
				]))), 128)),
				d.value.loaded && !d.value.content.length ? (J(), Y("p", kc, F(i.value === "role" ? "No hay personas con este rol." : "No hay personas con este perfil."), 1)) : Q("", !0),
				Z(os, {
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
			], 64)) : (J(), Y("div", Ac, [
				n[16] ||= X("span", { "aria-hidden": "true" }, "⌁", -1),
				X("strong", null, "Seleccione un " + F(i.value === "role" ? "rol" : "perfil"), 1),
				n[17] ||= X("p", null, "Las personas con ese acceso aparecerán aquí.", -1)
			]))])])
		]));
	}
}), Mc = { class: "chip" }, Nc = { class: "grid" }, Pc = { "aria-label": "Secciones de seguridad" }, Fc = ["aria-current", "onClick"], Ic = {
	key: 0,
	class: "nav-count"
}, Lc = { class: "title" }, Rc = { class: "sub" }, zc = { class: "actions" }, Bc = ["disabled"], Vc = ["disabled"], Hc = {
	key: 0,
	class: "notice",
	role: "status",
	"aria-live": "polite"
}, Uc = {
	key: 1,
	class: "error"
}, Wc = { class: "dialog-head" }, Gc = { class: "dialog-body" }, Kc = ["aria-expanded"], qc = ["aria-busy"], Jc = {
	key: 0,
	class: "user-result-status"
}, Yc = ["aria-selected", "onClick"], Xc = {
	key: 1,
	class: "user-result-status user-result-count"
}, Zc = {
	key: 1,
	class: "selected-user",
	role: "status"
}, Qc = ["value"], $c = { key: 3 }, el = ["value"], tl = ["aria-busy"], nl = { class: "grow" }, rl = ["disabled", "onClick"], il = {
	key: 0,
	class: "empty"
}, al = { class: "actions bottom" }, ol = ["disabled"], sl = ["disabled"], cl = 200, ll = /* @__PURE__ */ Gn({
	__name: "SecurityAdministration",
	props: { options: {} },
	setup(e, { expose: t }) {
		let n = e, r = Ro(/* @__PURE__ */ Yt(n, "options")), { summary: i, loading: a } = zo(r), o = Bo(r), s = Vo(r), c = Ho(r), l = Uo(r);
		Wo(r), Go(r);
		let { state: u, search: d } = Ko(r), { saving: f, error: p, ready: m, load: h, refresh: g, mutate: _, roleResources: v, profileRoles: y, loadRoleResources: b, loadProfileRoles: x, userRoleAssignments: S, userProfileAssignments: C, assignmentsForRole: w, assignmentsForProfile: T, loadUserAssignments: ee, loadAssignmentsForRole: te, loadAssignmentsForProfile: E, invalidateRelation: ne, sessionExpiresAt: D } = r;
		t({ refresh: g });
		let re = /* @__PURE__ */ U(Date.now()), ie;
		Fn(D, (e) => {
			clearInterval(ie), ie = void 0, e !== null && (re.value = Date.now(), ie = setInterval(() => re.value = Date.now(), 1e3));
		}), lr(() => clearInterval(ie));
		let O = _a(() => D.value === null ? null : Math.max(0, Math.ceil((D.value - re.value) / 1e3))), k = /* @__PURE__ */ U("summary"), A = /* @__PURE__ */ U(null), j = /* @__PURE__ */ U(), ae = /* @__PURE__ */ U(), oe = /* @__PURE__ */ U(""), ce = /* @__PURE__ */ U(""), le = /* @__PURE__ */ U(""), ue = /* @__PURE__ */ U(), M = /* @__PURE__ */ U(!1), de = "", fe, P = /* @__PURE__ */ U({
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
			}
		], me = {
			summary: "Resumen de seguridad",
			people: "Personas y asignaciones",
			roles: "Roles de aplicación",
			profiles: "Perfiles de acceso",
			resources: "Recursos protegidos",
			admins: "Administradores"
		}, he = {
			summary: "Un vistazo a cómo está protegida esta aplicación.",
			people: "Quién tiene acceso y por cuál rol o perfil. Asigna o revoca desde aquí.",
			roles: "Un rol agrupa los recursos (rutas) que puede usar quien lo recibe.",
			profiles: "Un perfil agrupa varios roles para asignarlos de una vez.",
			resources: "Rutas y métodos HTTP que la aplicación pone bajo el control de la plataforma.",
			admins: "Personas que pueden administrar la seguridad de esta aplicación."
		}, ge = {
			summary: "Configurar accesos",
			people: "Asignar acceso",
			roles: "Definir rol",
			profiles: "Definir perfil",
			resources: "Registrar recurso",
			admins: "Agregar administrador"
		}, _e = _a(() => ({
			people: (i.value?.counts.roleAssignments ?? 0) + (i.value?.counts.profileAssignments ?? 0),
			roles: i.value?.counts.roles ?? 0,
			profiles: i.value?.counts.profiles ?? 0,
			resources: i.value?.counts.resources ?? 0,
			admins: i.value?.counts.administrators ?? 0
		})), ve = _a(() => k.value === "summary" && n.options.allowApplicationLifecycleManagement ? "Editar aplicación" : ge[k.value]), ye = _a(() => ({
			roles: s,
			profiles: c,
			resources: o,
			admins: l
		})[k.value]), be = _a(() => ({
			"--accent": n.options.theme?.accent ?? "#018b51",
			"--font": n.options.theme?.fontFamily ?? "'IBM Plex Sans', Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
			"--radius": n.options.theme?.radius ?? "12px"
		}));
		Fn(k, (e) => {
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
		}, { immediate: !0 }), Fn(() => P.value.accessKind, (e) => {
			A.value === "access" && h(e === "role" ? "roles" : "profiles");
		});
		function xe(e, t) {
			A.value = e ?? (k.value === "summary" ? n.options.allowApplicationLifecycleManagement ? "application" : "access" : k.value === "people" ? "access" : k.value === "roles" ? "role" : k.value === "profiles" ? "profile" : k.value === "resources" ? "resource" : "admin"), j.value = t, P.value = {
				userId: "",
				userQuery: "",
				description: "",
				baseUrl: "",
				path: "",
				method: "GET",
				name: "",
				targetId: "",
				accessKind: "role"
			}, t && "path" in t && (P.value.path = t.path, P.value.method = t.method), t && "name" in t && (P.value.name = t.name), A.value === "application" && i.value && (P.value.name = i.value.application.name, P.value.description = i.value.application.description ?? "", P.value.baseUrl = i.value.application.baseUrl ?? ""), (A.value === "admin" || A.value === "access") && (de = "", M.value = !1, d("")), (A.value === "access" || A.value === "profile-role") && h("roles"), A.value === "role-resource" && h("resources"), t && A.value === "role-resource" && b(t.id), t && A.value === "profile-role" && x(t.id);
		}
		function I() {
			fe && clearTimeout(fe), A.value = null, j.value = void 0, ue.value = void 0, M.value = !1;
		}
		function Se() {
			let e = P.value.userQuery.trim();
			P.value.userId = "", ue.value = void 0, M.value = !0, fe && clearTimeout(fe), de = e, fe = setTimeout(() => void d(e), cl);
		}
		function Ce() {
			u.loading || u.content.length >= u.total || d(de, u.page + 1, !0);
		}
		function we(e) {
			let t = e.target;
			t.scrollHeight - t.scrollTop - t.clientHeight < 32 && Ce();
		}
		function L(e) {
			P.value.userId = e.id, P.value.userQuery = `${e.name} · ${e.email}`, ue.value = e, M.value = !1;
		}
		let Te = _a(() => u.loading ? "Buscando coincidencias…" : u.error ? "No fue posible buscar personas. Inténtelo de nuevo." : M.value && u.loaded && !u.content.length ? "No hay coincidencias para esta búsqueda." : P.value.userQuery.trim() ? "Seleccione una persona de los resultados." : "Personas del tenant en orden alfabético. Escriba para filtrar por nombre o correo.");
		lr(() => {
			fe && clearTimeout(fe);
		});
		async function Ee() {
			let e = P.value, t = A.value;
			if (!t || t === "confirm") return;
			let n = !!j.value, r = t === "application" ? ["summary"] : t === "admin" ? ["administrators", "summary"] : t === "resource" ? ["resources", "summary"] : t === "role" ? ["roles", "summary"] : t === "profile" ? ["profiles", "summary"] : t === "access" ? [e.accessKind === "role" ? "roleAssignments" : "profileAssignments", "summary"] : t === "role-resource" ? ["roles"] : ["profiles"], i = await _((r, i) => t === "application" ? r.updateApplication(i, {
				name: e.name,
				description: e.description,
				baseUrl: e.baseUrl
			}) : t === "admin" ? r.addAdministrator(i, e.userId) : t === "resource" ? n ? r.updateResource(i, j.value.id, {
				path: e.path,
				method: e.method
			}) : r.createResource(i, {
				path: e.path,
				method: e.method
			}) : t === "role" ? n ? r.updateRole(j.value.id, { name: e.name }) : r.createRole(i, e.name) : t === "profile" ? n ? r.updateProfile(j.value.id, { name: e.name }) : r.createProfile(i, e.name) : t === "access" ? r.assignAccess(i, e.accessKind, e.targetId, e.userId) : t === "role-resource" ? r.linkRoleResource(j.value.id, e.targetId) : r.linkProfileRole(j.value.id, e.targetId), [...r], `${t}:${j.value?.id ?? e.userId}`);
			i && t === "access" && (oe.value === e.userId && await ee(e.userId, S.page, !0), e.accessKind === "role" && ce.value === e.targetId && await te(e.targetId, w.page, !0), e.accessKind === "profile" && le.value === e.targetId && await E(e.targetId, T.page, !0)), i && I();
		}
		function De(e, t) {
			Oe.value = e, ae.value = t, A.value = "confirm";
		}
		let Oe = /* @__PURE__ */ U("");
		async function ke() {
			let e = ae.value;
			(!e || await e()) && I();
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
				return n && oe.value && await ee(oe.value, S.page, !0), n && t && ce.value && await te(ce.value, w.page, !0), n && !t && le.value && await E(le.value, T.page, !0), n;
			});
		}
		function Fe(e) {
			let t = j.value.id;
			De("Retirar este recurso elimina el permiso que este rol concede sobre él.", async () => {
				let n = await _((n) => n.unlinkRoleResource(t, e), ["roles"], `role-resource:${t}:${e}`);
				return n && (ne("role-resources", t), await b(t, v.page, !0), v.page > 0 && !v.content.length && await b(t, v.page - 1, !0)), n;
			});
		}
		function Ie(e) {
			let t = j.value.id;
			De("Retirar este rol cambia los permisos heredados por este perfil.", async () => {
				let n = await _((n) => n.unlinkProfileRole(t, e), ["profiles"], `profile-role:${t}:${e}`);
				return n && (ne("profile-roles", t), await x(t, y.page, !0), y.page > 0 && !y.content.length && await x(t, y.page - 1, !0)), n;
			});
		}
		function Le(e) {
			if (!j.value) return;
			let t = A.value === "role-resource" ? v : y, n = t.page + e;
			n < 0 || n * t.limit >= t.total || (A.value === "role-resource" ? b(j.value.id, n) : A.value === "profile-role" && x(j.value.id, n));
		}
		function Re() {
			let e = ye.value;
			e && (e.page + 1) * e.limit < e.total && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[k.value], e.page + 1);
		}
		function R() {
			let e = ye.value;
			e && e.page > 0 && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[k.value], e.page - 1);
		}
		return (t, n) => (J(), Y("section", {
			class: "shell",
			style: se(be.value),
			"aria-live": "polite"
		}, [
			X("header", null, [n[32] ||= X("div", null, [
				X("p", { class: "eyebrow" }, "Seguridad · aplicación actual"),
				X("h2", null, "Control de acceso"),
				X("p", null, "La información y las acciones están acotadas a esta aplicación.")
			], -1), X("span", Mc, F(W(i)?.application.name ?? e.options.applicationName ?? "Cargando"), 1)]),
			X("div", Nc, [X("nav", Pc, [(J(), Y(q, null, K(pe, (e) => X("button", {
				key: e.id,
				"aria-current": k.value === e.id,
				onClick: (t) => k.value = e.id
			}, [X("span", null, F(e.label), 1), e.id === "summary" ? Q("", !0) : (J(), Y("span", Ic, F(_e.value[e.id]), 1))], 8, Fc)), 64))]), X("main", null, [
				X("div", Lc, [X("div", null, [X("h3", null, F(me[k.value]), 1), X("p", Rc, F(he[k.value]), 1)]), X("div", zc, [X("button", {
					class: "quiet",
					disabled: W(a) || W(f),
					onClick: n[0] ||= (...e) => W(g) && W(g)(...e)
				}, " Actualizar", 8, Bc), X("button", {
					class: "primary",
					disabled: !W(m) || W(f),
					onClick: n[1] ||= (e) => xe()
				}, F(ve.value), 9, Vc)])]),
				e.options.sessionNotice && O.value !== null ? (J(), Y("p", Hc, F(O.value > 0 ? `Tu sesión vence en ${O.value} s. La aplicación la renueva con tu siguiente acción; si no, tendrás que iniciar sesión de nuevo.` : "Tu sesión venció. Pulsa Actualizar o vuelve a iniciar sesión en la aplicación."), 1)) : Q("", !0),
				W(p) ? (J(), Y("p", Uc, F(W(p)), 1)) : Q("", !0),
				k.value === "summary" ? (J(), Ri(us, {
					key: 2,
					summary: W(i),
					loading: W(a),
					"assignment-count": _e.value.people
				}, null, 8, [
					"summary",
					"loading",
					"assignment-count"
				])) : k.value === "people" ? (J(), Ri(jc, {
					key: 3,
					users: W(u),
					roles: W(s),
					profiles: W(c),
					"person-role-assignments": W(S),
					"person-profile-assignments": W(C),
					"role-assignments": W(w),
					"profile-assignments": W(T),
					busy: W(f),
					onSearchUsers: n[2] ||= (e, t, n) => W(d)(e, t, n),
					onSelectPerson: n[3] ||= (e) => {
						oe.value = e.id, W(ee)(e.id, 0);
					},
					onSelectRole: n[4] ||= (e) => {
						ce.value = e.id, W(te)(e.id, 0);
					},
					onSelectProfile: n[5] ||= (e) => {
						le.value = e.id, W(E)(e.id, 0);
					},
					onRevoke: Pe,
					onPersonPage: n[6] ||= (e) => {
						oe.value && W(S).page + e >= 0 && W(ee)(oe.value, W(S).page + e);
					},
					onRolePage: n[7] ||= (e) => {
						ce.value && W(w).page + e >= 0 && W(te)(ce.value, W(w).page + e);
					},
					onProfilePage: n[8] ||= (e) => {
						le.value && W(T).page + e >= 0 && W(E)(le.value, W(T).page + e);
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
				])) : (J(), Y(q, { key: 4 }, [k.value === "resources" ? (J(), Ri(ys, {
					key: 0,
					state: W(o),
					busy: W(f),
					onEdit: n[9] ||= (e) => xe("resource", e),
					onRemove: n[10] ||= (e) => je(e.id),
					onPrevious: R,
					onNext: Re
				}, null, 8, ["state", "busy"])) : k.value === "roles" ? (J(), Ri(As, {
					key: 1,
					state: W(s),
					busy: W(f),
					onManage: n[11] ||= (e) => xe("role-resource", e),
					onEdit: n[12] ||= (e) => xe("role", e),
					onRemove: n[13] ||= (e) => Me(e.id),
					onPrevious: R,
					onNext: Re
				}, null, 8, ["state", "busy"])) : k.value === "profiles" ? (J(), Ri(zs, {
					key: 2,
					state: W(c),
					busy: W(f),
					onManage: n[14] ||= (e) => xe("profile-role", e),
					onEdit: n[15] ||= (e) => xe("profile", e),
					onRemove: n[16] ||= (e) => Ne(e.id),
					onPrevious: R,
					onNext: Re
				}, null, 8, ["state", "busy"])) : (J(), Ri(Ks, {
					key: 3,
					state: W(l),
					busy: W(f),
					onRemove: Ae,
					onPrevious: R,
					onNext: Re
				}, null, 8, ["state", "busy"]))], 64))
			])]),
			A.value ? (J(), Y("div", {
				key: 0,
				class: "backdrop",
				onClick: yo(I, ["self"])
			}, [A.value === "confirm" ? (J(), Ri(ns, {
				key: 1,
				open: !0,
				message: Oe.value,
				busy: W(f),
				onCancel: I,
				onConfirm: ke
			}, null, 8, ["message", "busy"])) : (J(), Y("form", {
				key: 0,
				class: "dialog",
				onSubmit: yo(Ee, ["prevent"])
			}, [
				X("div", Wc, [
					n[33] ||= X("p", { class: "eyebrow" }, "Esta aplicación", -1),
					X("h3", null, F(A.value === "role-resource" ? "Administrar recursos del rol" : A.value === "profile-role" ? "Administrar roles del perfil" : ge[k.value]), 1),
					n[34] ||= X("p", { class: "sub" }, "La acción se aplica solo a esta aplicación.", -1)
				]),
				X("div", Gc, [A.value === "admin" || A.value === "access" ? (J(), Y(q, { key: 0 }, [
					X("label", null, [n[35] ||= Ki("Buscar usuario", -1), kn(X("input", {
						"onUpdate:modelValue": n[17] ||= (e) => P.value.userQuery = e,
						placeholder: "Nombre o correo",
						autocomplete: "off",
						"aria-describedby": "user-search-hint",
						"aria-expanded": M.value,
						"aria-controls": "user-search-results",
						onFocus: n[18] ||= (e) => M.value = !0,
						onClick: n[19] ||= (e) => M.value = !0,
						onKeydown: n[20] ||= xo(yo((e) => M.value = !1, ["stop", "prevent"]), ["esc"]),
						onInput: Se
					}, null, 40, Kc), [[
						fo,
						P.value.userQuery,
						void 0,
						{ trim: !0 }
					]])]),
					X("p", {
						id: "user-search-hint",
						class: N(["field-hint", { "is-error": W(u).error }])
					}, F(Te.value), 3),
					M.value && (W(u).loading || W(u).content.length || W(u).error) ? (J(), Y("div", {
						key: 0,
						id: "user-search-results",
						class: "user-result-list",
						role: "listbox",
						"aria-label": "Coincidencias de usuario",
						"aria-busy": W(u).loading,
						onScrollPassive: we
					}, [
						W(u).loading && !W(u).content.length ? (J(), Y("p", Jc, "Buscando en el directorio…")) : Q("", !0),
						(J(!0), Y(q, null, K(W(u).content, (e) => (J(), Y("button", {
							key: e.id,
							type: "button",
							class: "user-result",
							role: "option",
							"aria-selected": P.value.userId === e.id,
							onClick: (t) => L(e)
						}, [X("span", null, F(e.name || e.email), 1), X("small", null, F(e.email), 1)], 8, Yc))), 128)),
						W(u).content.length ? (J(), Y("p", Xc, F(W(u).loading ? "Cargando más personas…" : W(u).content.length < W(u).total ? `Mostrando ${W(u).content.length} de ${W(u).total} · desliza para ver más` : `${W(u).total} ${W(u).total === 1 ? "persona" : "personas"}`), 1)) : Q("", !0)
					], 40, qc)) : Q("", !0),
					ue.value ? (J(), Y("div", Zc, [
						n[36] ||= X("span", null, "Persona seleccionada", -1),
						X("strong", null, F(ue.value.name || ue.value.email), 1),
						X("small", null, F(ue.value.email), 1)
					])) : Q("", !0),
					A.value === "access" ? (J(), Y(q, { key: 2 }, [X("label", null, [n[38] ||= Ki("Tipo", -1), kn(X("select", { "onUpdate:modelValue": n[21] ||= (e) => P.value.accessKind = e }, [...n[37] ||= [X("option", { value: "role" }, "Rol", -1), X("option", { value: "profile" }, "Perfil", -1)]], 512), [[po, P.value.accessKind]])]), X("label", null, [n[40] ||= Ki("Acceso", -1), kn(X("select", {
						"onUpdate:modelValue": n[22] ||= (e) => P.value.targetId = e,
						required: ""
					}, [n[39] ||= X("option", {
						disabled: "",
						value: ""
					}, "Seleccione un acceso", -1), (J(!0), Y(q, null, K(P.value.accessKind === "role" ? W(s).content : W(c).content, (e) => (J(), Y("option", {
						key: e.id,
						value: e.id
					}, F(e.name), 9, Qc))), 128))], 512), [[po, P.value.targetId]])])], 64)) : Q("", !0)
				], 64)) : A.value === "application" ? (J(), Y(q, { key: 1 }, [
					X("label", null, [n[41] ||= Ki("Nombre", -1), kn(X("input", {
						"onUpdate:modelValue": n[23] ||= (e) => P.value.name = e,
						required: ""
					}, null, 512), [[
						fo,
						P.value.name,
						void 0,
						{ trim: !0 }
					]])]),
					X("label", null, [n[42] ||= Ki("Descripción", -1), kn(X("textarea", { "onUpdate:modelValue": n[24] ||= (e) => P.value.description = e }, null, 512), [[
						fo,
						P.value.description,
						void 0,
						{ trim: !0 }
					]])]),
					X("label", null, [n[43] ||= Ki("URL base", -1), kn(X("input", {
						"onUpdate:modelValue": n[25] ||= (e) => P.value.baseUrl = e,
						type: "url"
					}, null, 512), [[
						fo,
						P.value.baseUrl,
						void 0,
						{ trim: !0 }
					]])])
				], 64)) : A.value === "resource" ? (J(), Y(q, { key: 2 }, [X("label", null, [n[44] ||= Ki("Ruta", -1), kn(X("input", {
					"onUpdate:modelValue": n[26] ||= (e) => P.value.path = e,
					placeholder: "/api/v1/notas",
					required: ""
				}, null, 512), [[
					fo,
					P.value.path,
					void 0,
					{ trim: !0 }
				]])]), X("label", null, [n[46] ||= Ki("Método", -1), kn(X("select", { "onUpdate:modelValue": n[27] ||= (e) => P.value.method = e }, [...n[45] ||= [
					X("option", null, "GET", -1),
					X("option", null, "POST", -1),
					X("option", null, "PUT", -1),
					X("option", null, "PATCH", -1),
					X("option", null, "DELETE", -1)
				]], 512), [[po, P.value.method]])])], 64)) : A.value === "role" || A.value === "profile" ? (J(), Y("label", $c, [n[47] ||= Ki("Nombre", -1), kn(X("input", {
					"onUpdate:modelValue": n[28] ||= (e) => P.value.name = e,
					required: ""
				}, null, 512), [[
					fo,
					P.value.name,
					void 0,
					{ trim: !0 }
				]])])) : (J(), Y(q, { key: 4 }, [X("label", null, [Ki(F(A.value === "role-resource" ? "Agregar recurso" : "Agregar rol"), 1), kn(X("select", {
					"onUpdate:modelValue": n[29] ||= (e) => P.value.targetId = e,
					required: ""
				}, [n[48] ||= X("option", {
					disabled: "",
					value: ""
				}, "Seleccione una opción", -1), (J(!0), Y(q, null, K(A.value === "role-resource" ? W(o).content : W(s).content, (e) => (J(), Y("option", {
					key: e.id,
					value: e.id
				}, F("path" in e ? `${e.method} · ${e.path}` : e.name), 9, el))), 128))], 512), [[po, P.value.targetId]])]), X("div", {
					class: "relation-list",
					"aria-busy": A.value === "role-resource" ? W(v).loading : W(y).loading
				}, [
					n[49] ||= X("p", { class: "sub" }, "Relaciones vigentes", -1),
					(J(!0), Y(q, null, K(A.value === "role-resource" ? W(v).content : W(y).content, (e) => (J(), Y("div", {
						key: e.id,
						class: "row"
					}, [X("div", nl, [X("strong", null, F("path" in e ? `${e.method} · ${e.path}` : e.name), 1)]), X("button", {
						class: "quiet danger",
						type: "button",
						disabled: W(f),
						onClick: (t) => A.value === "role-resource" ? Fe(e.id) : Ie(e.id)
					}, " Retirar ", 8, rl)]))), 128)),
					(A.value === "role-resource" ? W(v).content : W(y).content).length ? Q("", !0) : (J(), Y("p", il, " No hay relaciones en esta página. ")),
					Z(os, {
						page: A.value === "role-resource" ? W(v).page : W(y).page,
						limit: A.value === "role-resource" ? W(v).limit : W(y).limit,
						total: A.value === "role-resource" ? W(v).total : W(y).total,
						loading: A.value === "role-resource" ? W(v).loading : W(y).loading,
						label: "Paginación de relaciones",
						onPrevious: n[30] ||= (e) => Le(-1),
						onNext: n[31] ||= (e) => Le(1)
					}, null, 8, [
						"page",
						"limit",
						"total",
						"loading"
					])
				], 8, tl)], 64))]),
				X("div", al, [X("button", {
					class: "quiet",
					type: "button",
					disabled: W(f),
					onClick: I
				}, " Cancelar", 8, ol), X("button", {
					class: "primary",
					disabled: W(f)
				}, F(W(f) ? "Guardando…" : "Guardar"), 9, sl)])
			], 32))])) : Q("", !0)
		], 4));
	}
}), ul = ":host{all:initial;display:block}*{box-sizing:border-box}.shell{--field:#f2f3f2;--canvas:#f8f9f7;--paper:#fff;--ink:#111312;--text:#59625d;--faint:#959d98;--line:#1113121f;--soft-line:#11131211;--green-ink:#0b5c39;--green-wash:#e7f1eb;--green-tint:#018b5113;--red:#b93d3c;--amber:#9b6818;--mono:\"IBM Plex Mono\", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;font-family:var(--font);color:var(--ink);background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);font-synthesis:none;overflow:hidden}button,input,select,textarea{font-family:inherit}button{cursor:pointer}button:disabled{opacity:.52;cursor:not-allowed}header{border-bottom:1px solid var(--line);justify-content:space-between;align-items:flex-start;gap:18px;padding:23px 26px 18px;display:flex}.eyebrow,.kicker{color:var(--faint);font:500 10px var(--mono);letter-spacing:.12em;text-transform:uppercase;margin:0 0 7px}h2{letter-spacing:-.04em;margin:0;font-size:28px;font-weight:700}h3{letter-spacing:-.025em;margin:0;font-size:19px;font-weight:600}header p:last-child,.sub,small{color:var(--text);font-size:13px}header p:last-child{margin:6px 0 0}.sub{margin:4px 0 0}.chip,.pill{font:600 10px var(--mono);border-radius:999px;align-items:center;gap:5px;padding:5px 9px;display:inline-flex}.pill{color:var(--accent);background:var(--green-tint);border:1px solid color-mix(in srgb, var(--accent) 22%, transparent)}.chip{height:max-content;color:var(--accent);background:var(--green-tint);border:1px solid color-mix(in srgb, var(--accent) 22%, transparent)}.grid{grid-template-columns:210px 1fr;min-height:470px;display:grid}nav{border-right:1px solid color-mix(in srgb, var(--accent) 14%, transparent);background:var(--green-wash);flex-direction:column;gap:3px;padding:15px 12px;display:flex}nav button{text-align:left;width:100%;min-height:34px;color:var(--text);background:0 0;border:1px solid #0000;border-radius:6px;justify-content:space-between;align-items:center;gap:8px;padding:0 10px;font-size:13px;font-weight:500;transition:all .16s;display:flex}nav button:hover{color:var(--ink);background:#fff9}nav button[aria-current=true]{background:var(--paper);border-color:color-mix(in srgb, var(--accent) 24%, transparent);color:var(--green-ink);font-weight:600}.nav-count{min-width:22px;color:var(--text);text-align:center;font:500 10px var(--mono);background:#1113120f;border-radius:99px;padding:1px 6px}nav button[aria-current=true] .nav-count{background:var(--green-tint);color:var(--accent)}main{background:var(--paper);min-width:0;padding:23px 26px}.title,.actions,.row{align-items:center;gap:10px;display:flex}.title{justify-content:space-between;margin-bottom:18px}.actions{flex-wrap:wrap;justify-content:flex-end}.primary,.quiet{border-radius:6px;align-items:center;gap:7px;height:34px;padding:0 14px;font-size:12px;font-weight:600;transition:all .16s;display:inline-flex}.primary{background:var(--ink);color:#fff;border:0}.primary:hover:not(:disabled){background:var(--accent);transform:translateY(-1px)}.quiet{border:1px solid var(--line);background:var(--paper);color:var(--text)}.quiet:hover:not(:disabled){color:var(--ink);border-color:#11131247}.quiet.danger{color:var(--red);background:#b93d3c0a;border-color:#b93d3c3d}.quiet.danger:hover:not(:disabled){border-color:var(--red);color:var(--red)}.primary.danger{background:var(--red);color:#fff}.primary.danger:hover:not(:disabled){background:#962d2c}:is(button,input,select,textarea,a):focus-visible{outline:2px solid var(--accent);outline-offset:2px}.stats{grid-template-columns:repeat(4,1fr);gap:12px;display:grid}.stat,.panel{border:1px solid var(--line);background:var(--paper);border-radius:12px}.stat{padding:16px}.stat b{color:var(--ink);font:500 28px var(--mono);letter-spacing:-.04em;display:block}.stat small{color:var(--text);margin-top:4px;font-size:12px;display:block}.next-steps{border:1px solid color-mix(in srgb, var(--accent) 20%, transparent);background:var(--green-tint);border-radius:12px;margin-top:16px;padding:16px 18px}.next-steps h4{color:var(--green-ink);margin:0 0 8px;font-size:13px;font-weight:600}.next-steps ol{color:var(--text);margin:0;padding-left:18px;font-size:13px;line-height:1.7}.next-steps li.done{color:var(--faint);text-decoration:line-through}.panel{margin-top:4px;overflow:hidden}.row{border-bottom:1px solid var(--soft-line);padding:13px 16px}.row:last-child{border:0}.row:hover{background:#fafbfa}.grow{flex:1;min-width:0}.grow strong{font-size:13px;font-weight:600;display:block}.grow small{margin-top:2px;display:block}.method{border:1px solid color-mix(in srgb, var(--accent) 22%, transparent);background:var(--green-tint);min-width:58px;color:var(--accent);text-align:center;font:600 10px var(--mono);border-radius:4px;padding:5px 7px}.empty{color:var(--faint);text-align:center;padding:28px;font-size:12px}.error{color:var(--red);background:#b93d3c0f;border:1px solid #b93d3c3d;border-radius:7px;align-items:flex-start;gap:9px;margin:0 0 14px;padding:10px 12px;font-size:12px;line-height:1.45;display:flex}.notice{color:var(--amber);background:#9b681812;border:1px solid #9b681838;border-radius:7px;margin:0 0 14px;padding:10px 12px;font-size:12px;line-height:1.45}.pager{color:var(--text);justify-content:flex-end;align-items:center;gap:10px;margin-top:12px;font-size:12px;display:flex}.backdrop{z-index:20;backdrop-filter:blur(3px);background:#0a110d61;place-items:center;padding:20px;display:grid;position:fixed;inset:0}.dialog{background:var(--paper);width:min(500px,100%);max-height:calc(100vh - 40px);color:var(--ink);font-family:var(--font);border:1px solid #11131229;border-radius:12px;padding:0;overflow:auto;box-shadow:0 22px 60px #091a102e}.dialog-head{border-bottom:1px solid var(--soft-line);padding:24px 28px 16px}.dialog-head h3{letter-spacing:-.03em;font-size:22px}.dialog-body{padding:18px 28px 22px}.actions.bottom,.dialog-foot{border-top:1px solid var(--soft-line);justify-content:flex-end;gap:10px;margin:0;padding:16px 28px;display:flex}.dialog .primary,.dialog .quiet{height:40px}label{color:var(--ink);gap:6px;margin-top:14px;font-size:12px;font-weight:600;display:grid}label:first-child{margin-top:0}input,select,textarea{border:1px solid var(--line);background:var(--field);width:100%;height:40px;color:var(--ink);border-radius:6px;padding:0 12px;font-size:13px;font-weight:400;transition:all .16s}input:focus,select:focus,textarea:focus{background:var(--paper);border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb, var(--accent) 14%, transparent);outline:none}textarea{resize:vertical;height:auto;min-height:78px;padding:10px 12px}.field-hint{color:var(--text);margin:6px 0 0;font-size:12px;line-height:1.4}.field-hint.is-error{color:var(--red)}.relation-list{border:1px solid var(--soft-line);border-radius:10px;margin-top:18px;overflow:hidden}.relation-list>.sub{background:var(--field);color:var(--text);letter-spacing:.04em;text-transform:uppercase;margin:0;padding:10px 14px;font-size:11px;font-weight:600}.relation-list .row{padding:10px 14px}.user-result-list{overscroll-behavior:contain;border:1px solid var(--line);background:var(--paper);border-radius:8px;max-height:min(240px,38vh);margin-top:8px;overflow-y:auto;box-shadow:0 10px 24px #091a1014}.user-result-status{color:var(--text);margin:0;padding:11px 13px;font-size:12px}.user-result-count{border-top:1px solid var(--soft-line);background:var(--field);font-size:11px;position:sticky;bottom:0}.user-result{border:0;border-bottom:1px solid var(--soft-line);width:100%;color:var(--ink);text-align:left;background:0 0;border-radius:0;gap:2px;padding:10px 13px;display:grid}.user-result:last-child{border-bottom:0}.user-result:hover,.user-result:focus-visible,.user-result[aria-selected=true]{color:var(--green-ink);background:var(--green-tint);outline:none}.user-result span{font-size:13px;font-weight:600}.user-result small,.selected-user small{color:var(--text);font-size:12px}.selected-user{border-left:3px solid var(--accent);background:var(--green-tint);border-radius:6px;gap:2px;margin-top:10px;padding:10px 12px;display:grid}.selected-user>span{color:var(--green-ink);font:500 10px var(--mono);letter-spacing:.1em;text-transform:uppercase}.selected-user strong{color:var(--ink);font-size:13px}.access-workbench{border:1px solid var(--line);background:var(--paper);border-radius:12px;margin-top:4px;overflow:hidden}.access-heading{border-bottom:1px solid var(--soft-line);justify-content:space-between;align-items:flex-start;gap:16px;padding:20px 22px 16px;display:flex}.access-heading h4,.result-title h5{color:var(--ink);letter-spacing:-.025em;margin:2px 0 4px;font-size:19px;font-weight:600}.access-heading p:last-child{color:var(--text);margin:0;font-size:13px}.scope-mark,.count-badge,.admin-mark{background:var(--green-tint);border:1px solid color-mix(in srgb, var(--accent) 22%, transparent);color:var(--accent);font:600 10px var(--mono);white-space:nowrap;border-radius:999px;padding:5px 9px}.perspective-tabs{border-bottom:1px solid var(--soft-line);background:var(--field);grid-template-columns:repeat(3,1fr);gap:6px;padding:8px;display:grid}.perspective-tabs button{min-height:52px;color:var(--text);text-align:left;background:0 0;border:1px solid #0000;border-radius:8px;padding:8px 12px;transition:all .16s}.perspective-tabs button:hover{color:var(--ink);background:#ffffffb3}.perspective-tabs button.active{color:var(--ink);background:var(--paper);border-color:color-mix(in srgb, var(--accent) 26%, transparent)}.perspective-tabs strong,.perspective-tabs small{display:block}.perspective-tabs strong{font-size:13px;font-weight:600}.perspective-tabs small{color:inherit;opacity:.75;margin-top:2px;font-size:11px;font-weight:400}.access-layout{grid-template-columns:minmax(220px,.8fr) minmax(0,1.7fr);min-height:390px;display:grid}.access-query{border-right:1px solid var(--soft-line);background:#fafbfa;padding:18px}.access-query label,.query-label{color:var(--ink);margin:0 0 8px;font-size:12px;font-weight:600;display:block}.query-help{color:var(--text);margin:8px 0 14px;font-size:12px;line-height:1.45}.search-field{border:1px solid var(--line);background:var(--field);border-radius:6px;align-items:center;gap:8px;padding:0 10px;transition:all .16s;display:flex}.search-field:focus-within{background:var(--paper);border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb, var(--accent) 14%, transparent)}.search-field span{color:var(--accent);font-size:18px;line-height:1}.search-field input{height:38px;box-shadow:none;background:0 0;border:0;padding:0}.search-field input:focus{box-shadow:none;background:0 0}.choices,.option-grid{gap:4px;display:grid}.choices{overscroll-behavior:contain;align-content:start;max-height:min(380px,50vh);overflow-y:auto}.people-count{text-align:center;background:#fafbfa;padding:8px 4px;font-size:11px;position:sticky;bottom:0}.choice,.option-grid button{color:var(--ink);text-align:left;background:0 0;border:1px solid #0000;border-radius:6px;padding:8px;transition:all .16s}.choice{align-items:center;gap:9px;display:flex}.choice:hover,.option-grid button:hover{background:var(--green-tint)}.choice.selected,.option-grid button.selected{border-color:color-mix(in srgb, var(--accent) 30%, transparent);background:var(--green-tint);color:var(--green-ink)}.choice strong,.choice small{display:block}.choice small{text-overflow:ellipsis;white-space:nowrap;margin-top:2px;overflow:hidden}.option-grid button{font-size:12px;font-weight:600}.access-results{background:var(--paper);min-width:0;padding:18px 22px}.empty-state{text-align:center;min-height:300px;color:var(--faint);place-content:center;display:grid}.empty-state span{width:38px;height:38px;color:var(--accent);background:var(--green-tint);border-radius:50%;place-items:center;margin:0 auto 10px;font-size:20px;display:grid}.empty-state strong{color:var(--ink);font-size:13px}.empty-state p{max-width:260px;margin:6px 0 0;font-size:12px;line-height:1.5}.identity-strip,.result-title{border-bottom:1px solid var(--soft-line);align-items:center;gap:10px;padding-bottom:14px;display:flex}.identity-strip>div{flex:1;min-width:0}.identity-strip strong,.identity-strip small{display:block}.identity-strip small{margin-top:2px}.avatar{width:28px;height:28px;color:var(--green-ink);background:var(--green-wash);text-transform:uppercase;border-radius:50%;flex:0 0 28px;place-items:center;font-size:11px;font-weight:700;display:grid}.avatar.large{flex-basis:38px;width:38px;height:38px;font-size:15px}.access-group{border:1px solid var(--soft-line);border-radius:10px;margin-top:16px;overflow:hidden}.group-title{background:var(--field);color:var(--text);letter-spacing:.04em;text-transform:uppercase;justify-content:space-between;align-items:center;padding:9px 12px;font-size:11px;font-weight:600;display:flex}.group-title b{min-width:20px;color:var(--accent);background:var(--green-tint);text-align:center;font:600 10px var(--mono);border-radius:99px;padding:1px 6px}.access-row{border-top:1px solid var(--soft-line);align-items:center;gap:10px;min-height:56px;padding:10px 12px;display:flex}.access-row>div{flex:1;min-width:0}.access-row strong,.access-row small{display:block}.access-row strong{color:var(--ink);font-size:13px;font-weight:600}.access-row small{margin-top:3px}.person-row{padding-left:0;padding-right:0}.access-meta{color:var(--faint)!important}.result-title{justify-content:space-between}.result-title h5{font-size:17px}.count-badge{text-align:center;min-width:28px}.compact{text-align:left;padding:14px 12px}@media (width<=700px){header{padding:20px;display:block}.chip{margin-top:14px;display:inline-flex}.grid{grid-template-columns:1fr}nav{border-right:0;border-bottom:1px solid var(--line);flex-direction:row;overflow:auto}nav button{min-width:max-content}main{padding:20px}.stats{grid-template-columns:repeat(2,1fr)}.title{flex-direction:column;align-items:flex-start}.access-heading{padding:18px}.access-layout{grid-template-columns:1fr}.access-query{border-right:0;border-bottom:1px solid var(--soft-line)}.access-results{padding:18px}.perspective-tabs{grid-template-columns:repeat(3,minmax(122px,1fr));overflow-x:auto}.scope-mark,.admin-mark{display:none}}@media (width<=560px){.shell{border-radius:min(var(--radius), 10px)}header{padding:16px}h2{font-size:23px}main{padding:16px}.title{gap:12px}.actions{justify-content:stretch;width:100%}.actions .primary,.actions .quiet{flex:auto;justify-content:center}.row{flex-wrap:wrap;padding:12px}.row .grow{flex-basis:calc(100% - 70px)}.stats{gap:8px}.stat{padding:12px}.stat b{font-size:22px}.backdrop{align-items:end;padding:10px}.dialog{width:100%;max-height:calc(100vh - 20px)}.dialog-head{padding:18px 18px 12px}.dialog-head h3{font-size:19px}.dialog-body{padding:14px 18px 18px}.actions.bottom,.dialog-foot{padding:12px 18px}.actions.bottom .primary,.actions.bottom .quiet{flex:1 1 0;justify-content:center}.access-query,.access-results,.access-heading{padding:14px}.access-layout{min-height:0}.empty-state{min-height:180px}.identity-strip,.access-row{flex-wrap:wrap}.pager{justify-content:space-between}}", dl = "uco-security-administration", fl = "uco-security-fonts";
function pl() {
	if (typeof document > "u" || document.getElementById(fl)) return;
	let e = document.createElement("link");
	e.id = fl, e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap", document.head.appendChild(e);
}
var ml = class extends HTMLElement {
	root = this.attachShadow({ mode: "open" });
	options = /* @__PURE__ */ Ht();
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
		this.options.value.loadFonts !== !1 && pl();
		let e = document.createElement("style");
		e.textContent = ul;
		let t = document.createElement("div");
		this.root.replaceChildren(e, t), this.app = To({ setup: () => () => va(ll, {
			options: this.options.value,
			ref: (e) => {
				this.component = e;
			}
		}) }), this.app.mount(t);
	}
};
function hl(e, t) {
	if (!(e instanceof HTMLElement)) throw TypeError("El contenedor debe ser un HTMLElement.");
	let n = new ml();
	return n.configure(t), e.replaceChildren(n), {
		element: n,
		refresh: () => n.refresh(),
		unmount: () => {
			n.parentElement === e && e.replaceChildren(), n.destroy();
		}
	};
}
customElements.get(dl) || customElements.define(dl, ml);
//#endregion
export { ml as SecurityAdministrationElement, hl as mount };
