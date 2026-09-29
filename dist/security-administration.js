//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = process.env.NODE_ENV === "production" ? {} : Object.freeze({}), n = process.env.NODE_ENV === "production" ? [] : Object.freeze([]), r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, T = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), E = /* @__PURE__ */ e("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), D = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ee = /-\w/g, O = D((e) => e.replace(ee, (e) => e.slice(1).toUpperCase())), te = /\B([A-Z])/g, k = D((e) => e.replace(te, "-$1").toLowerCase()), ne = D((e) => e.charAt(0).toUpperCase() + e.slice(1)), re = D((e) => e ? `on${ne(e)}` : ""), A = (e, t) => !Object.is(e, t), ie = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ae = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, j = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, oe, se = () => oe ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ce(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? fe(r) : ce(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (g(e) || v(e)) return e;
}
var le = /;(?![^(]*\))/g, ue = /:([^]+)/, de = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function fe(e) {
	let t = {};
	return e.replace(de, (e) => e.startsWith("/*") ? "" : e).split(le).forEach((e) => {
		if (e) {
			let n = e.split(ue);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function pe(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = pe(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var me = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", he = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ge = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", _e = /* @__PURE__ */ e(me), ve = /* @__PURE__ */ e(he), ye = /* @__PURE__ */ e(ge), be = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", xe = /* @__PURE__ */ e(be);
be + "";
function Se(e) {
	return !!e || e === "";
}
function Ce(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = De(e[i], t[i], n);
	return r;
}
function we(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && De(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Te(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? we(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !De(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Ee(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function De(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? Ee(e, t, n, Ce) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : Ee(e, t, n, Te) : String(e) === String(t))));
}
function Oe(e, t) {
	return e.findIndex((e) => De(e, t));
}
var ke = (e) => !!(e && e.__v_isRef === !0), M = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? ke(e) ? M(e.value) : JSON.stringify(e, Ae, 2) : String(e), Ae = (e, t) => ke(t) ? Ae(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[je(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => je(e)) } : _(t) ? je(t) : v(t) && !d(t) && !C(t) ? String(t) : t, je = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e;
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
function Me(e, ...t) {
	console.warn(`[Vue warn] ${e}`, ...t);
}
var N, Ne = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && N && (N.active ? (this.parent = N, this.index = (N.scopes || (N.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
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
			let t = N;
			try {
				return N = this, e();
			} finally {
				N = t;
			}
		} else process.env.NODE_ENV !== "production" && this._warnOnRun && Me("cannot run an inactive effect scope.");
	}
	on() {
		++this._on === 1 && (this.prevScope = N, N = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (N === this) N = this.prevScope;
			else {
				let e = N;
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
function Pe() {
	return N;
}
function Fe(e, t = !1) {
	N ? N.cleanups.push(e) : process.env.NODE_ENV !== "production" && !t && Me("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
var P, Ie = /* @__PURE__ */ new WeakSet(), Le = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, N && (N.active ? N.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Ie.has(this) && (Ie.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ve(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, et(this), We(this);
		let e = P, t = Xe;
		P = this, Xe = !0;
		try {
			return this.fn();
		} finally {
			process.env.NODE_ENV !== "production" && P !== this && Me("Active effect was not restored correctly - this is likely a Vue internal bug."), Ge(this), P = e, Xe = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Je(e);
			this.deps = this.depsTail = void 0, et(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Ie.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ke(this) && this.run();
	}
	get dirty() {
		return Ke(this);
	}
}, Re = 0, ze, Be;
function Ve(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Be, Be = e;
		return;
	}
	e.next = ze, ze = e;
}
function He() {
	Re++;
}
function Ue() {
	if (--Re > 0) return;
	if (Be) {
		let e = Be;
		for (Be = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; ze;) {
		let t = ze;
		for (ze = void 0; t;) {
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
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ge(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Je(r), Ye(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ke(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (qe(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function qe(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === tt) || (e.globalVersion = tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ke(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = P, r = Xe;
	P = e, Xe = !0;
	try {
		We(e);
		let n = e.fn(e._value);
		(t.version === 0 || A(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		P = n, Xe = r, Ge(e), e.flags &= -3;
	}
}
function Je(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Je(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ye(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Xe = !0, Ze = [];
function Qe() {
	Ze.push(Xe), Xe = !1;
}
function $e() {
	let e = Ze.pop();
	Xe = e === void 0 || e;
}
function et(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = P;
		P = void 0;
		try {
			t();
		} finally {
			P = e;
		}
	}
}
var tt = 0, nt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, rt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
	}
	track(e) {
		if (!P || !Xe || P === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== P) t = this.activeLink = new nt(P, this), P.deps ? (t.prevDep = P.depsTail, P.depsTail.nextDep = t, P.depsTail = t) : P.deps = P.depsTail = t, it(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = P.depsTail, t.nextDep = void 0, P.depsTail.nextDep = t, P.depsTail = t, P.deps === t && (P.deps = e);
		}
		return process.env.NODE_ENV !== "production" && P.onTrack && P.onTrack(s({ effect: P }, e)), t;
	}
	trigger(e) {
		this.version++, tt++, this.notify(e);
	}
	notify(e) {
		He();
		try {
			if (process.env.NODE_ENV !== "production") for (let t = this.subsHead; t; t = t.nextSub) t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(s({ effect: t.sub }, e));
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ue();
		}
	}
};
function it(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) it(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
	}
}
var at = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Object iterate"), st = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Map keys iterate"), ct = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Array iterate");
function F(e, t, n) {
	if (Xe && P) {
		let r = at.get(e);
		r || at.set(e, r = /* @__PURE__ */ new Map());
		let i = r.get(n);
		i || (r.set(n, i = new rt()), i.map = r, i.key = n), process.env.NODE_ENV === "production" ? i.track() : i.track({
			target: e,
			type: t,
			key: n
		});
	}
}
function lt(e, t, n, r, i, a) {
	let o = at.get(e);
	if (!o) {
		tt++;
		return;
	}
	let s = (o) => {
		o && (process.env.NODE_ENV === "production" ? o.trigger() : o.trigger({
			target: e,
			type: t,
			key: n,
			newValue: r,
			oldValue: i,
			oldTarget: a
		}));
	};
	if (He(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ct || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ct)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(ot)), f(e) && s(o.get(st)));
				break;
			case "delete":
				i || (s(o.get(ot)), f(e) && s(o.get(st)));
				break;
			case "set": f(e) && s(o.get(ot));
		}
	}
	Ue();
}
function ut(e, t) {
	let n = at.get(e);
	return n && n.get(t);
}
function dt(e) {
	let t = /* @__PURE__ */ L(e);
	return t === e || (F(t, "iterate", ct), /* @__PURE__ */ I(e)) ? t : /* @__PURE__ */ $t(e) ? /* @__PURE__ */ Qt(e) ? t.map((e) => rn(nn(e))) : t.map(rn) : t.map(nn);
}
function ft(e) {
	return F(e = /* @__PURE__ */ L(e), "iterate", ct), e;
}
function pt(e, t) {
	return /* @__PURE__ */ $t(e) ? rn(/* @__PURE__ */ Qt(e) ? nn(t) : t) : nn(t);
}
var mt = {
	__proto__: null,
	[Symbol.iterator]() {
		return ht(this, Symbol.iterator, (e) => pt(this, e));
	},
	concat(...e) {
		return dt(this).concat(...e.map((e) => d(e) ? dt(e) : e));
	},
	entries() {
		return ht(this, "entries", (e) => (e[1] = pt(this, e[1]), e));
	},
	every(e, t) {
		return _t(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return _t(this, "filter", e, t, (e) => e.map((e) => pt(this, e)), arguments);
	},
	find(e, t) {
		return _t(this, "find", e, t, (e) => pt(this, e), arguments);
	},
	findIndex(e, t) {
		return _t(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return _t(this, "findLast", e, t, (e) => pt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return _t(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return _t(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return yt(this, "includes", e);
	},
	indexOf(...e) {
		return yt(this, "indexOf", e);
	},
	join(e) {
		return dt(this).join(e);
	},
	lastIndexOf(...e) {
		return yt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return _t(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return bt(this, "pop");
	},
	push(...e) {
		return bt(this, "push", e);
	},
	reduce(e, ...t) {
		return vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return vt(this, "reduceRight", e, t);
	},
	shift() {
		return bt(this, "shift");
	},
	some(e, t) {
		return _t(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return bt(this, "splice", e);
	},
	toReversed() {
		return dt(this).toReversed();
	},
	toSorted(e) {
		return dt(this).toSorted(e);
	},
	toSpliced(...e) {
		return dt(this).toSpliced(...e);
	},
	unshift(...e) {
		return bt(this, "unshift", e);
	},
	values() {
		return ht(this, "values", (e) => pt(this, e));
	}
};
function ht(e, t, n) {
	let r = ft(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ I(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var gt = Array.prototype;
function _t(e, t, n, r, i, a) {
	let o = ft(e), s = o !== e && !/* @__PURE__ */ I(e), c = o[t];
	if (c !== gt[t]) {
		let t = c.apply(e, a);
		return s ? nn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, pt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function vt(e, t, n, r) {
	let i = ft(e), a = i !== e && !/* @__PURE__ */ I(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = pt(e, t)), n.call(this, t, pt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? pt(e, c) : c;
}
function yt(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	F(r, "iterate", ct);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ en(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function bt(e, t, n = []) {
	Qe(), He();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return Ue(), $e(), r;
}
var xt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), St = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function Ct(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return F(t, "has", e), t.hasOwnProperty(e);
}
var wt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Gt : Wt : i ? Ut : Ht).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = mt[t])) return e;
			if (t === "hasOwnProperty") return Ct;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ R(e) ? e : n);
		if ((_(t) ? St.has(t) : xt(t)) || (r || F(e, "get", t), i)) return o;
		if (/* @__PURE__ */ R(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Yt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Yt(o) : /* @__PURE__ */ qt(o) : o;
	}
}, Tt = class extends wt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let r = /* @__PURE__ */ $t(i);
			if (!/* @__PURE__ */ I(n) && !/* @__PURE__ */ $t(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n)) return r ? (process.env.NODE_ENV !== "production" && Me(`Set operation on key "${String(t)}" failed: target is readonly.`, e[t]), !0) : (i.value = n, !0);
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ R(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && s && (o ? A(n, i) && lt(e, "set", t, n, i) : lt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && lt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !St.has(t)) && F(e, "has", t), n;
	}
	ownKeys(e) {
		return F(e, "iterate", d(e) ? "length" : ot), Reflect.ownKeys(e);
	}
}, Et = class extends wt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return process.env.NODE_ENV !== "production" && Me(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
	deleteProperty(e, t) {
		return process.env.NODE_ENV !== "production" && Me(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
}, Dt = /* @__PURE__ */ new Tt(), Ot = /* @__PURE__ */ new Et(), kt = /* @__PURE__ */ new Tt(!0), At = /* @__PURE__ */ new Et(!0), jt = (e) => e, Mt = (e) => Reflect.getPrototypeOf(e);
function Nt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? jt : t ? rn : nn;
		return !t && F(a, "iterate", l ? st : ot), s(Object.create(u), { next() {
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
function Pt(e) {
	return function(...t) {
		if (process.env.NODE_ENV !== "production") {
			let n = t[0] ? `on key "${t[0]}" ` : "";
			Me(`${ne(e)} operation ${n}failed: target is readonly.`, /* @__PURE__ */ L(this));
		}
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Ft(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (A(n, a) && F(i, "get", n), F(i, "get", a));
			let { has: o } = Mt(i), s = t ? jt : e ? rn : nn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && F(/* @__PURE__ */ L(t), "iterate", ot), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (A(t, i) && F(r, "has", t), F(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? jt : e ? rn : nn;
			return !e && F(o, "iterate", ot), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Pt("add"),
		set: Pt("set"),
		delete: Pt("delete"),
		clear: Pt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = Mt(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ I(e) && !/* @__PURE__ */ $t(e) ? i : e;
			return r.has.call(n, a) || A(e, a) && r.has.call(n, e) || A(i, a) && r.has.call(n, i) || (n.add(a), lt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ I(n) && !/* @__PURE__ */ $t(n) && (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = Mt(r), o = i.call(r, e);
			o ? process.env.NODE_ENV !== "production" && Vt(r, i, e) : (e = /* @__PURE__ */ L(e), o = i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? A(n, s) && lt(r, "set", e, n, s) : lt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = Mt(t), i = n.call(t, e);
			i ? process.env.NODE_ENV !== "production" && Vt(t, n, e) : (e = /* @__PURE__ */ L(e), i = n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && lt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = process.env.NODE_ENV === "production" ? void 0 : f(e) ? new Map(e) : new Set(e), r = e.clear();
			return t && lt(e, "clear", void 0, void 0, n), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = Nt(r, e, t);
	}), n;
}
function It(e, t) {
	let n = Ft(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Lt = { get: /* @__PURE__ */ It(!1, !1) }, Rt = { get: /* @__PURE__ */ It(!1, !0) }, zt = { get: /* @__PURE__ */ It(!0, !1) }, Bt = { get: /* @__PURE__ */ It(!0, !0) };
function Vt(e, t, n) {
	let r = /* @__PURE__ */ L(n);
	if (r !== n && t.call(e, r)) {
		let t = S(e);
		Me(`Reactive ${t} contains both the raw and reactive versions of the same object${t === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
	}
}
var Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap();
function Kt(e) {
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
function qt(e) {
	return /* @__PURE__ */ $t(e) ? e : Zt(e, !1, Dt, Lt, Ht);
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
	return Zt(e, !1, kt, Rt, Ut);
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return Zt(e, !0, Ot, zt, Wt);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return Zt(e, !0, At, Bt, Gt);
}
function Zt(e, t, n, r, i) {
	if (!v(e)) return process.env.NODE_ENV !== "production" && Me(`value cannot be made ${t ? "readonly" : "reactive"}: ${String(e)}`), e;
	if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Kt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Qt(e) {
	return /* @__PURE__ */ $t(e) ? /* @__PURE__ */ Qt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function tn(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && ae(e, "__v_skip", !0), e;
}
var nn = (e) => v(e) ? /* @__PURE__ */ qt(e) : e, rn = (e) => v(e) ? /* @__PURE__ */ Yt(e) : e;
// @__NO_SIDE_EFFECTS__
function R(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function an(e) {
	return sn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function on(e) {
	return sn(e, !0);
}
function sn(e, t) {
	return /* @__PURE__ */ R(e) ? e : new cn(e, t);
}
var cn = class {
	constructor(e, t) {
		this.dep = new rt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : nn(e), this.__v_isShallow = t;
	}
	get value() {
		return process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		}), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ I(e) || /* @__PURE__ */ $t(e);
		e = n ? e : /* @__PURE__ */ L(e), A(e, t) && (this._rawValue = e, this._value = n ? e : nn(e), process.env.NODE_ENV === "production" ? this.dep.trigger() : this.dep.trigger({
			target: this,
			type: "set",
			key: "value",
			newValue: e,
			oldValue: t
		}));
	}
};
function z(e) {
	return /* @__PURE__ */ R(e) ? e.value : e;
}
var ln = {
	get: (e, t, n) => t === "__v_raw" ? e : z(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ R(i) && !/* @__PURE__ */ R(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function un(e) {
	return /* @__PURE__ */ Qt(e) ? e : new Proxy(e, ln);
}
var dn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ L(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ en(i) || /* @__PURE__ */ I(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = z(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ R(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ R(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return ut(this._raw, this._key);
	}
}, fn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function pn(e, t, n) {
	return /* @__PURE__ */ R(e) ? e : h(e) ? new fn(e) : v(e) && arguments.length > 1 ? mn(e, t, n) : /* @__PURE__ */ an(e);
}
function mn(e, t, n) {
	return new dn(e, t, n);
}
var hn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new rt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && P !== this) return Ve(this, !0), !0;
		process.env.NODE_ENV;
	}
	get value() {
		let e = process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		});
		return qe(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Me("Write operation failed: computed value is readonly");
	}
};
// @__NO_SIDE_EFFECTS__
function gn(e, t, n = !1) {
	let r, i;
	h(e) ? r = e : (r = e.get, i = e.set);
	let a = new hn(r, i, n);
	return process.env.NODE_ENV !== "production" && t && !n && (a.onTrack = t.onTrack, a.onTrigger = t.onTrigger), a;
}
var _n = {}, vn = /* @__PURE__ */ new WeakMap(), yn = void 0;
function bn(e, t = !1, n = yn) {
	if (n) {
		let t = vn.get(n);
		t || vn.set(n, t = []), t.push(e);
	} else process.env.NODE_ENV !== "production" && !t && Me("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function xn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => {
		(i.onWarn || Me)("Invalid watch source: ", e, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
	}, m = (e) => o ? e : /* @__PURE__ */ I(e) || o === !1 || o === 0 ? Sn(e, 1) : Sn(e), g, _, v, y, b = !1, x = !1;
	if (/* @__PURE__ */ R(e) ? (_ = () => e.value, b = /* @__PURE__ */ I(e)) : /* @__PURE__ */ Qt(e) ? (_ = () => m(e), b = !0) : d(e) ? (x = !0, b = e.some((e) => /* @__PURE__ */ Qt(e) || /* @__PURE__ */ I(e)), _ = () => e.map((e) => {
		if (/* @__PURE__ */ R(e)) return e.value;
		if (/* @__PURE__ */ Qt(e)) return m(e);
		if (h(e)) return f ? f(e, 2) : e();
		process.env.NODE_ENV !== "production" && p(e);
	})) : h(e) ? _ = n ? f ? () => f(e, 2) : e : () => {
		if (v) {
			Qe();
			try {
				v();
			} finally {
				$e();
			}
		}
		let t = yn;
		yn = g;
		try {
			return f ? f(e, 3, [y]) : e(y);
		} finally {
			yn = t;
		}
	} : (_ = r, process.env.NODE_ENV !== "production" && p(e)), n && o) {
		let e = _, t = o === !0 ? Infinity : o;
		_ = () => Sn(e(), t);
	}
	let S = Pe(), C = () => {
		g.stop(), S && S.active && c(S.effects, g);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return C(), n;
		};
	}
	let w = x ? Array(e.length).fill(_n) : _n, T = (e) => {
		if (g.flags & 1 && (g.dirty || e)) {
			if (n) {
				let t = g.run();
				if (e || o || b || (x ? t.some((e, t) => A(e, w[t])) : A(t, w))) {
					v && v();
					let e = yn;
					yn = g;
					try {
						let e = [
							t,
							w === _n ? void 0 : x && w[0] === _n ? [] : w,
							y
						];
						w = t, f ? f(n, 3, e) : n(...e);
					} finally {
						yn = e;
					}
				}
			} else g.run();
		}
	};
	return u && u(T), g = new Le(_), g.scheduler = l ? () => l(T, !1) : T, y = (e) => bn(e, !1, g), v = g.onStop = () => {
		let e = vn.get(g);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			vn.delete(g);
		}
	}, process.env.NODE_ENV !== "production" && (g.onTrack = i.onTrack, g.onTrigger = i.onTrigger), n ? a ? T(!0) : w = g.run() : l ? l(T.bind(null, !0), !0) : g.run(), C.pause = g.pause.bind(g), C.resume = g.resume.bind(g), C.stop = C, C;
}
function Sn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ R(e)) Sn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) Sn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		Sn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) Sn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Sn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var Cn = [];
function wn(e) {
	Cn.push(e);
}
function Tn() {
	Cn.pop();
}
var En = !1;
function B(e, ...t) {
	if (En) return;
	En = !0, Qe();
	let n = Cn.length ? Cn[Cn.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Dn();
	if (r) Nn(r, n, 11, [
		e + t.map((e) => e.toString?.call(e) ?? JSON.stringify(e)).join(""),
		n && n.proxy,
		i.map(({ vnode: e }) => `at <${ts(n, e.type)}>`).join("\n"),
		i
	]);
	else {
		let n = [`[Vue warn]: ${e}`, ...t];
		i.length && n.push("\n", ...On(i)), console.warn(...n);
	}
	$e(), En = !1;
}
function Dn() {
	let e = Cn[Cn.length - 1];
	if (!e) return [];
	let t = [];
	for (; e;) {
		let n = t[0];
		n && n.vnode === e ? n.recurseCount++ : t.push({
			vnode: e,
			recurseCount: 0
		});
		let r = e.component && e.component.parent;
		e = r && r.vnode;
	}
	return t;
}
function On(e) {
	let t = [];
	return e.forEach((e, n) => {
		t.push(...n === 0 ? [] : ["\n"], ...kn(e));
	}), t;
}
function kn({ vnode: e, recurseCount: t }) {
	let n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${ts(e.component, e.type, r)}`, a = ">" + n;
	return e.props ? [
		i,
		...An(e.props),
		a
	] : [i + a];
}
function An(e) {
	let t = [], n = Object.keys(e);
	return n.slice(0, 3).forEach((n) => {
		t.push(...jn(n, e[n]));
	}), n.length > 3 && t.push(" ..."), t;
}
function jn(e, t, n) {
	return g(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ R(t) ? (t = jn(e, /* @__PURE__ */ L(t.value), !0), n ? t : [
		`${e}=Ref<`,
		t,
		">"
	]) : h(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ L(t), n ? t : [`${e}=`, t]);
}
var Mn = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function Nn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Fn(e, t, n);
	}
}
function Pn(e, t, n, r) {
	if (h(e)) {
		let i = Nn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			Fn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Pn(e[a], t, n, r));
		return i;
	}
	process.env.NODE_ENV !== "production" && B(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function Fn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = process.env.NODE_ENV === "production" ? `https://vuejs.org/error-reference/#runtime-${r}` : Mn[r];
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Qe(), Nn(o, null, 10, [
				e,
				i,
				a
			]), $e();
			return;
		}
	}
	In(e, r, a, i, s);
}
function In(e, t, n, r = !0, i = !1) {
	if (process.env.NODE_ENV !== "production") {
		let i = Mn[t];
		if (n && wn(n), B(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Tn(), r) throw e;
		console.error(e);
	} else if (i) throw e;
	else console.error(e);
}
var V = [], Ln = -1, Rn = [], zn = null, Bn = 0, Vn = /* @__PURE__ */ Promise.resolve(), Hn = null, Un = 100;
function Wn(e) {
	let t = Hn || Vn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gn(e) {
	let t = Ln + 1, n = V.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = V[r], a = Zn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Kn(e) {
	if (!(e.flags & 1)) {
		let t = Zn(e), n = V[V.length - 1];
		!n || !(e.flags & 2) && t >= Zn(n) ? V.push(e) : V.splice(Gn(t), 0, e), e.flags |= 1, qn();
	}
}
function qn() {
	Hn ||= Vn.then(Qn);
}
function Jn(e) {
	if (!d(e)) zn && e.id === -1 ? zn.splice(Bn + 1, 0, e) : e.flags & 1 || (Rn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Rn.push(e[t]);
	qn();
}
function Yn(e, t, n = Ln + 1) {
	for (process.env.NODE_ENV !== "production" && (t ||= /* @__PURE__ */ new Map()); n < V.length; n++) {
		let r = V[n];
		if (r && r.flags & 2) {
			if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && $n(t, r)) continue;
			V.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
		}
	}
}
function Xn(e) {
	if (Rn.length) {
		let t = [...new Set(Rn)].sort((e, t) => Zn(e) - Zn(t));
		if (Rn.length = 0, zn) {
			for (let e = 0; e < t.length; e++) zn.push(t[e]);
			return;
		}
		for (zn = t, process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map()), Bn = 0; Bn < zn.length; Bn++) {
			let t = zn[Bn];
			process.env.NODE_ENV !== "production" && $n(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
		}
		zn = null, Bn = 0;
	}
}
var Zn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Qn(e) {
	process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map());
	let t = process.env.NODE_ENV === "production" ? r : (t) => $n(e, t);
	try {
		for (Ln = 0; Ln < V.length; Ln++) {
			let e = V[Ln];
			if (e && !(e.flags & 8)) {
				if (process.env.NODE_ENV !== "production" && t(e)) continue;
				e.flags & 4 && (e.flags &= -2), Nn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2);
			}
		}
	} finally {
		for (; Ln < V.length; Ln++) {
			let e = V[Ln];
			e && (e.flags &= -2);
		}
		Ln = -1, V.length = 0, Xn(e), Hn = null, (V.length || Rn.length) && Qn(e);
	}
}
function $n(e, t) {
	let n = e.get(t) || 0;
	if (n > Un) {
		let e = t.i, n = e && es(e.type);
		return Fn(`Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
	}
	return e.set(t, n + 1), !1;
}
var er = !1, tr = (e) => {
	try {
		return er;
	} finally {
		er = e;
	}
}, nr = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (se().__VUE_HMR_RUNTIME__ = {
	createRecord: dr(or),
	rerender: dr(cr),
	reload: dr(lr)
});
var rr = /* @__PURE__ */ new Map();
function ir(e) {
	let t = e.type.__hmrId, n = rr.get(t);
	n ||= (or(t, e.type), rr.get(t)), n.instances.add(e);
}
function ar(e) {
	rr.get(e.type.__hmrId).instances.delete(e);
}
function or(e, t) {
	return !rr.has(e) && (rr.set(e, {
		initialDef: sr(t),
		instances: /* @__PURE__ */ new Set()
	}), !0);
}
function sr(e) {
	return ns(e) ? e.__vccOpts : e;
}
function cr(e, t) {
	let n = rr.get(e);
	n && (n.initialDef.render = t, [...n.instances].forEach((e) => {
		t && (e.render = t, sr(e.type).render = t), e.renderCache = [], er = !0, e.job.flags & 8 || e.update(), er = !1;
	}));
}
function lr(e, t) {
	let n = rr.get(e);
	if (!n) return;
	t = sr(t), ur(n.initialDef, t);
	let r = [...n.instances];
	for (let e = 0; e < r.length; e++) {
		let i = r[e], a = sr(i.type), o = nr.get(a);
		o || (a !== n.initialDef && ur(a, t), nr.set(a, o = /* @__PURE__ */ new Set())), o.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (o.add(i), i.ceReload(t.styles), o.delete(i)) : i.parent ? Kn(() => {
			i.job.flags & 8 || (er = !0, i.parent.update(), er = !1, o.delete(i));
		}) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(a);
	}
	Jn(() => {
		nr.clear();
	});
}
function ur(e, t) {
	s(e, t);
	for (let n in e) n !== "__file" && !(n in t) && delete e[n];
}
function dr(e) {
	return (t, n) => {
		try {
			return e(t, n);
		} catch (e) {
			console.error(e), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
		}
	};
}
var fr, pr = [], mr = !1;
function hr(e, ...t) {
	fr ? fr.emit(e, ...t) : mr || pr.push({
		event: e,
		args: t
	});
}
function gr(e, t) {
	fr = e, fr ? (fr.enabled = !0, pr.forEach(({ event: e, args: t }) => fr.emit(e, ...t)), pr = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		gr(e, t);
	}), setTimeout(() => {
		fr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, mr = !0, pr = []);
	}, 3e3)) : (mr = !0, pr = []);
}
function _r(e, t) {
	hr("app:init", e, t, {
		Fragment: G,
		Text: oo,
		Comment: K,
		Static: so
	});
}
function vr(e) {
	hr("app:unmount", e);
}
var yr = /* @__PURE__ */ Cr("component:added"), br = /* @__PURE__ */ Cr("component:updated"), xr = /* @__PURE__ */ Cr("component:removed"), Sr = (e) => {
	fr && typeof fr.cleanupBuffer == "function" && !fr.cleanupBuffer(e) && xr(e);
};
// @__NO_SIDE_EFFECTS__
function Cr(e) {
	return (t) => {
		hr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
	};
}
var wr = /* @__PURE__ */ Er("perf:start"), Tr = /* @__PURE__ */ Er("perf:end");
function Er(e) {
	return (t, n, r) => {
		hr(e, t.appContext.app, t.uid, t, n, r);
	};
}
function Dr(e, t, n) {
	hr("component:emit", e.appContext.app, e, t, n);
}
var H = null, Or = null;
function kr(e) {
	let t = H;
	return H = e, Or = e && e.type.__scopeId || null, t;
}
function Ar(e, t = H, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && po(-1);
		let i = kr(t), a = co.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = co.length; e > a; e--) uo();
			kr(i), r._d && po(1);
		}
		return process.env.NODE_ENV !== "production" && br(t), o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function jr(e) {
	E(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function Mr(e, n) {
	if (H === null) return process.env.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
	let r = Zo(H), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && Sn(o), i.push({
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
function Nr(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Qe(), Pn(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), $e());
	}
}
function Pr(e, t) {
	if (process.env.NODE_ENV !== "production" && (!$ || $.isMounted) && B("provide() can only be used inside setup()."), $) {
		let n = $.provides, r = $.parent && $.parent.provides;
		r === n && (n = $.provides = Object.create(r)), n[e] = t;
	}
}
function Fr(e, t, n = !1) {
	let r = Po();
	if (r || Xi) {
		let i = Xi ? Xi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
		process.env.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
	} else process.env.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
var Ir = /* @__PURE__ */ Symbol.for("v-scx"), Lr = () => {
	{
		let e = Fr(Ir);
		return e || process.env.NODE_ENV !== "production" && B("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
	}
};
function Rr(e, t, n) {
	return process.env.NODE_ENV !== "production" && !h(t) && B("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), zr(e, t, n);
}
function zr(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i;
	process.env.NODE_ENV !== "production" && !n && (a !== void 0 && B("watch() \"immediate\" option is only respected when using the watch(source, callback, options?) signature."), o !== void 0 && B("watch() \"deep\" option is only respected when using the watch(source, callback, options?) signature."), l !== void 0 && B("watch() \"once\" option is only respected when using the watch(source, callback, options?) signature."));
	let u = s({}, i);
	process.env.NODE_ENV !== "production" && (u.onWarn = B);
	let d = n && a || !n && c !== "post", f;
	if (Ho) {
		if (c === "sync") {
			let e = Lr();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = $;
	u.call = (e, t, n) => Pn(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		W(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Kn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = xn(e, n, u);
	return Ho && (f ? f.push(h) : d && h()), h;
}
function Br(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? Vr(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Lo(this), s = zr(i, a.bind(r), n);
	return o(), s;
}
function Vr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Hr = /* @__PURE__ */ Symbol("_vte"), Ur = (e) => e.__isTeleport, Wr = /* @__PURE__ */ Symbol("_leaveCb");
function Gr(e) {
	let t = e[0];
	if (e.length > 1) {
		let n = !1;
		for (let r of e) if (r.type !== K) {
			if (process.env.NODE_ENV !== "production" && n) {
				B("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
				break;
			}
			if (t = r, n = !0, process.env.NODE_ENV === "production") break;
		}
	}
	return t;
}
function Kr(e) {
	if (!ni(e)) return Ur(e.type) && e.children ? Gr(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function qr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		qr(Ur(n.type) && Kr(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Jr(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Yr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var Xr = /* @__PURE__ */ new WeakSet();
function Zr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Qr = /* @__PURE__ */ new WeakMap();
function $r(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => $r(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (ti(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && $r(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Zo(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e;
	if (process.env.NODE_ENV !== "production" && !f) {
		B("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
		return;
	}
	let m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ L(v), b = v === t ? i : (e) => process.env.NODE_ENV !== "production" && (u(y, e) && !/* @__PURE__ */ R(y[e]) && B(`Template ref "${e}" used on a non-ref value. It will not work in the production build.`), Xr.has(y[e])) || Zr(_, e) ? !1 : u(y, e), x = (e, t) => !(process.env.NODE_ENV !== "production" && Xr.has(e) || t && Zr(_, t));
	if (m != null && m !== p) {
		if (ei(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ R(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) Nn(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ R(p);
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
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n ? (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l)) : process.env.NODE_ENV !== "production" && B("Invalid template ref type:", p, `(${typeof p})`);
			};
			if (l) {
				let t = () => {
					i(), Qr.delete(e);
				};
				t.id = -1, Qr.set(e, t), W(t, r);
			} else ei(e), i();
		} else process.env.NODE_ENV !== "production" && B("Invalid template ref type:", p, `(${typeof p})`);
	}
}
function ei(e) {
	let t = Qr.get(e);
	t && (t.flags |= 8, Qr.delete(e));
}
se().requestIdleCallback, se().cancelIdleCallback;
var ti = (e) => !!e.type.__asyncLoader, ni = (e) => e.type.__isKeepAlive;
function ri(e, t) {
	ai(e, "a", t);
}
function ii(e, t) {
	ai(e, "da", t);
}
function ai(e, t, n = $) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (si(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) ni(e.parent.vnode) && oi(r, t, n, e), e = e.parent;
	}
}
function oi(e, t, n, r) {
	let i = si(t, e, r, !0);
	mi(() => {
		c(r[t], i);
	}, n);
}
function si(e, t, n = $, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Qe();
			let i = Lo(n), a = Pn(t, n, e, r);
			return i(), $e(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
	process.env.NODE_ENV !== "production" && B(`${re(Mn[e].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var ci = (e) => (t, n = $) => {
	(!Ho || e === "sp") && si(e, (...e) => t(...e), n);
}, li = ci("bm"), ui = ci("m"), di = ci("bu"), fi = ci("u"), pi = ci("bum"), mi = ci("um"), hi = ci("sp"), gi = ci("rtg"), _i = ci("rtc");
function vi(e, t = $) {
	si("ec", e, t);
}
var yi = /* @__PURE__ */ Symbol.for("v-ndc");
function bi(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Qt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ I(e), s = /* @__PURE__ */ $t(e), e = ft(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? rn(nn(e[n])) : nn(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0)) B(`The v-for range expects a positive integer value but got ${e}.`), i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
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
var xi = (e) => e ? Vo(e) ? Zo(e) : xi(e.parent) : null, Si = (e) => {
	let t = !1;
	for (;;) {
		if (e.patchFlag > 0 && e.patchFlag & 2048) {
			let n = oa(e.children);
			if (!n) return;
			e = n, t = !0;
			continue;
		}
		let n = e.component;
		if (n && n.subTree) {
			e = n.subTree;
			continue;
		}
		let r = e.suspense;
		if (r && r.activeBranch) {
			e = r.activeBranch;
			continue;
		}
		return t ? e.el : void 0;
	}
}, Ci = (e) => {
	let t = e.subTree && Si(e.subTree);
	return t === void 0 ? e.vnode.el : t;
}, wi = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => process.env.NODE_ENV === "production" ? e.vnode.el : Ci(e),
	$data: (e) => e.data,
	$props: (e) => process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ Xt(e.props),
	$attrs: (e) => process.env.NODE_ENV === "production" ? e.attrs : /* @__PURE__ */ Xt(e.attrs),
	$slots: (e) => process.env.NODE_ENV === "production" ? e.slots : /* @__PURE__ */ Xt(e.slots),
	$refs: (e) => process.env.NODE_ENV === "production" ? e.refs : /* @__PURE__ */ Xt(e.refs),
	$parent: (e) => xi(e.parent),
	$root: (e) => xi(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Ri(e),
	$forceUpdate: (e) => e.f ||= () => {
		Kn(e.update);
	},
	$nextTick: (e) => e.n ||= Wn.bind(e.proxy),
	$watch: (e) => Br.bind(e)
}), Ti = (e) => e === "_" || e === "$", Ei = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Di = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (process.env.NODE_ENV !== "production" && n === "__isVue") return !0;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Ei(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Ni && (s[n] = 0);
		}
		let d = wi[n], f, p;
		if (d) return n === "$attrs" ? (F(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && ra()) : process.env.NODE_ENV !== "production" && n === "$slots" && F(e, "get", n), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
		process.env.NODE_ENV !== "production" && H && (!g(n) || n.indexOf("__v") !== 0) && (a !== t && Ti(n[0]) && u(a, n) ? B(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === H && B(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`));
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Ei(a, n) ? (a[n] = r, !0) : process.env.NODE_ENV !== "production" && a.__isScriptSetup && u(a, n) ? (B(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) ? (process.env.NODE_ENV !== "production" && B(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && B(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && n in e.appContext.config.globalProperties ? Object.defineProperty(o, n, {
			enumerable: !0,
			configurable: !0,
			value: r
		}) : o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Ei(n, c) || u(o, c) || u(i, c) || u(wi, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
process.env.NODE_ENV !== "production" && (Di.ownKeys = (e) => (B("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Oi(e) {
	let t = {};
	return Object.defineProperty(t, "_", {
		configurable: !0,
		enumerable: !1,
		get: () => e
	}), Object.keys(wi).forEach((n) => {
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !1,
			get: () => wi[n](e),
			set: r
		});
	}), t;
}
function ki(e) {
	let { ctx: t, propsOptions: [n] } = e;
	n && Object.keys(n).forEach((n) => {
		Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => e.props[n],
			set: r
		});
	});
}
function Ai(e) {
	let { ctx: t, setupState: n } = e;
	Object.keys(/* @__PURE__ */ L(n)).forEach((e) => {
		if (!n.__isScriptSetup) {
			if (Ti(e[0])) {
				B(`setup() return property ${JSON.stringify(e)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
				return;
			}
			Object.defineProperty(t, e, {
				enumerable: !0,
				configurable: !0,
				get: () => n[e],
				set: r
			});
		}
	});
}
function ji(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Mi() {
	let e = /* @__PURE__ */ Object.create(null);
	return (t, n) => {
		e[n] ? B(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
	};
}
var Ni = !0;
function Pi(e) {
	let t = Ri(e), n = e.proxy, i = e.ctx;
	Ni = !1, t.beforeCreate && Ii(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: b, deactivated: x, beforeDestroy: S, beforeUnmount: C, destroyed: w, unmounted: T, render: E, renderTracked: D, renderTriggered: ee, errorCaptured: O, serverPrefetch: te, expose: k, inheritAttrs: ne, components: re, directives: A, filters: ie } = t, ae = process.env.NODE_ENV === "production" ? null : Mi();
	if (process.env.NODE_ENV !== "production") {
		let [t] = e.propsOptions;
		if (t) for (let e in t) ae("Props", e);
	}
	if (u && Fi(u, i, ae), s) for (let e in s) {
		let t = s[e];
		h(t) ? (process.env.NODE_ENV === "production" ? i[e] = t.bind(n) : Object.defineProperty(i, e, {
			value: t.bind(n),
			configurable: !0,
			enumerable: !0,
			writable: !0
		}), process.env.NODE_ENV !== "production" && ae("Methods", e)) : process.env.NODE_ENV !== "production" && B(`Method "${e}" has type "${typeof t}" in the component definition. Did you reference the function correctly?`);
	}
	if (a) {
		process.env.NODE_ENV !== "production" && !h(a) && B("The data option must be a function. Plain object usage is no longer supported.");
		let t = a.call(n, n);
		if (process.env.NODE_ENV !== "production" && y(t) && B("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !v(t)) process.env.NODE_ENV !== "production" && B("data() should return an object.");
		else if (e.data = /* @__PURE__ */ qt(t), process.env.NODE_ENV !== "production") for (let e in t) ae("Data", e), Ti(e[0]) || Object.defineProperty(i, e, {
			configurable: !0,
			enumerable: !0,
			get: () => t[e],
			set: r
		});
	}
	if (Ni = !0, o) for (let e in o) {
		let t = o[e], a = h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r;
		process.env.NODE_ENV !== "production" && a === r && B(`Computed property "${e}" has no getter.`);
		let s = rs({
			get: a,
			set: !h(t) && h(t.set) ? t.set.bind(n) : process.env.NODE_ENV === "production" ? r : () => {
				B(`Write operation failed: computed property "${e}" is readonly.`);
			}
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => s.value,
			set: (e) => s.value = e
		}), process.env.NODE_ENV !== "production" && ae("Computed", e);
	}
	if (c) for (let e in c) Li(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Pr(t, e[t]);
		});
	}
	f && Ii(f, e, "c");
	function j(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (j(li, p), j(ui, m), j(di, g), j(fi, _), j(ri, b), j(ii, x), j(vi, O), j(_i, D), j(gi, ee), j(pi, C), j(mi, T), j(hi, te), d(k)) {
		if (k.length) {
			let t = e.exposed ||= {};
			k.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	E && e.render === r && (e.render = E), ne != null && (e.inheritAttrs = ne), re && (e.components = re), A && (e.directives = A), te && Yr(e);
}
function Fi(e, t, n = r) {
	d(e) && (e = Ui(e));
	for (let r in e) {
		let i = e[r], a;
		a = v(i) ? "default" in i ? Fr(i.from || r, i.default, !0) : Fr(i.from || r) : Fr(i), /* @__PURE__ */ R(a) ? Object.defineProperty(t, r, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		}) : t[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
	}
}
function Ii(e, t, n) {
	Pn(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Li(e, t, n, r) {
	let i = r.includes(".") ? Vr(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) ? Rr(i, n) : process.env.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, n);
	} else if (h(e)) Rr(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Li(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) ? Rr(i, r, e) : process.env.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, r);
		}
	} else process.env.NODE_ENV !== "production" && B(`Invalid watch option: "${r}"`, e);
}
function Ri(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => zi(c, e, o, !0)), zi(c, t, o)), v(t) && a.set(t, c), c;
}
function zi(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && zi(e, a, n, !0), i && i.forEach((t) => zi(e, t, n, !0));
	for (let i in t) if (r && i === "expose") process.env.NODE_ENV !== "production" && B("\"expose\" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.");
	else {
		let r = Bi[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Bi = {
	data: Vi,
	props: Gi,
	emits: Gi,
	methods: Wi,
	computed: Wi,
	beforeCreate: U,
	created: U,
	beforeMount: U,
	mounted: U,
	beforeUpdate: U,
	updated: U,
	beforeDestroy: U,
	beforeUnmount: U,
	destroyed: U,
	unmounted: U,
	activated: U,
	deactivated: U,
	errorCaptured: U,
	serverPrefetch: U,
	components: Wi,
	directives: Wi,
	watch: Ki,
	provide: Vi,
	inject: Hi
};
function Vi(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Hi(e, t) {
	return Wi(Ui(e), Ui(t));
}
function Ui(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function U(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Wi(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Gi(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), ji(e), ji(t ?? {})) : t;
}
function Ki(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = U(e[r], t[r]);
	return n;
}
function qi() {
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
var Ji = 0;
function Yi(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (process.env.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), r = null);
		let i = qi(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Ji++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: os,
			get config() {
				return i.config;
			},
			set config(e) {
				process.env.NODE_ENV !== "production" && B("app.config cannot be replaced. Modify individual options instead.");
			},
			use(e, ...t) {
				return a.has(e) ? process.env.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) ? (a.add(e), e(l, ...t)) : process.env.NODE_ENV !== "production" && B("A plugin must either be a function or an object with an \"install\" function."), l;
			},
			mixin(e) {
				return i.mixins.includes(e) ? process.env.NODE_ENV !== "production" && B("Mixin has already been applied to target app" + (e.name ? `: ${e.name}` : "")) : i.mixins.push(e), l;
			},
			component(e, t) {
				return process.env.NODE_ENV !== "production" && Bo(e, i.config), t ? (process.env.NODE_ENV !== "production" && i.components[e] && B(`Component "${e}" has already been registered in target app.`), i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return process.env.NODE_ENV !== "production" && jr(e), t ? (process.env.NODE_ENV !== "production" && i.directives[e] && B(`Directive "${e}" has already been registered in target app.`), i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (c) process.env.NODE_ENV !== "production" && B("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
				else {
					process.env.NODE_ENV !== "production" && a.__vue_app__ && B("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
					let u = l._ceVNode || X(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
						let t = wo(u);
						t.el = null, e(t, a, s);
					}), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = u.component, _r(l, os)), Zo(u.component);
				}
			},
			onUnmount(e) {
				process.env.NODE_ENV !== "production" && typeof e != "function" && B(`Expected function as first argument to app.onUnmount(), but got ${typeof e}`), o.push(e);
			},
			unmount() {
				c ? (Pn(o, l._instance, 16), e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, vr(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
			},
			provide(e, t) {
				return process.env.NODE_ENV !== "production" && e in i.provides && (u(i.provides, e) ? B(`App already provides property with key "${String(e)}". It will be overwritten with the new value.`) : B(`App already provides property with key "${String(e)}" inherited from its parent element. It will be overwritten with the new value.`)), i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Xi;
				Xi = l;
				try {
					return e();
				} finally {
					Xi = t;
				}
			}
		};
		return l;
	};
}
var Xi = null, Zi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${O(t)}Modifiers`] || e[`${k(t)}Modifiers`];
function Qi(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t;
	if (process.env.NODE_ENV !== "production") {
		let { emitsOptions: t, propsOptions: [i] } = e;
		if (t) {
			if (!(n in t)) (!i || !(re(O(n)) in i)) && B(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${re(O(n))}" prop.`);
			else {
				let e = t[n];
				h(e) && (e(...r) || B(`Invalid event arguments: event validation failed for event "${n}".`));
			}
		}
	}
	let a = r, o = n.startsWith("update:"), s = o && Zi(i, n.slice(7));
	if (s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(j))), process.env.NODE_ENV !== "production" && Dr(e, n, a), process.env.NODE_ENV !== "production") {
		let t = n.toLowerCase();
		t !== n && i[re(t)] && B(`Event "${t}" is emitted in component ${ts(e, e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${k(n)}" instead of "${n}".`);
	}
	let c, l = i[c = re(n)] || i[c = re(O(n))];
	!l && o && (l = i[c = re(k(n))]), l && Pn(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, Pn(u, e, 6, a);
	}
}
var $i = /* @__PURE__ */ new WeakMap();
function ea(e, t, n = !1) {
	let r = n ? $i : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = ea(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function ta(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, k(t)) || u(e, t));
}
var na = !1;
function ra() {
	na = !0;
}
function ia(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: c, attrs: l, emit: u, render: d, renderCache: f, props: p, data: m, setupState: h, ctx: g, inheritAttrs: _ } = e, v = kr(e), y, b;
	process.env.NODE_ENV !== "production" && (na = !1);
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(e, { get(e, t, n) {
				return B(`Property '${String(t)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(e, t, n);
			} }) : e;
			y = Eo(d.call(t, e, f, process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ Xt(p), h, m, g)), b = l;
		} else {
			let e = t;
			process.env.NODE_ENV !== "production" && l === p && ra(), y = Eo(e.length > 1 ? e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ Xt(p), process.env.NODE_ENV === "production" ? {
				attrs: l,
				slots: c,
				emit: u
			} : {
				get attrs() {
					return ra(), /* @__PURE__ */ Xt(l);
				},
				slots: c,
				emit: u
			}) : e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ Xt(p), null)), b = t.props ? l : sa(l);
		}
	} catch (t) {
		co.length = 0, Fn(t, e, 1), y = X(K);
	}
	let x = y, S;
	if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([x, S] = aa(y)), b && _ !== !1) {
		let e = Object.keys(b), { shapeFlag: t } = x;
		if (e.length) {
			if (t & 7) s && e.some(o) && (b = ca(b, s)), x = wo(x, b, !1, !0);
			else if (process.env.NODE_ENV !== "production" && !na && x.type !== K) {
				let e = Object.keys(l), t = [], n = [];
				for (let r = 0, i = e.length; r < i; r++) {
					let i = e[r];
					a(i) ? o(i) || t.push(i[2].toLowerCase() + i.slice(3)) : n.push(i);
				}
				n.length && B(`Extraneous non-props attributes (${n.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), t.length && B(`Extraneous non-emits event listeners (${t.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
			}
		}
	}
	if (n.dirs && (process.env.NODE_ENV !== "production" && !la(x) && B("Runtime directive used on component with non-element root node. The directives will not function as intended."), x = wo(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition) {
		let e = Ur(x.type) && Kr(x) || x;
		process.env.NODE_ENV !== "production" && !la(e) && B("Component inside <Transition> renders non-element root node that cannot be animated."), qr(e, n.transition);
	}
	return process.env.NODE_ENV !== "production" && S ? S(x) : y = x, kr(v), y;
}
var aa = (e) => {
	let t = e.children, n = e.dynamicChildren, r = oa(t, !1);
	if (!r) return [e, void 0];
	if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048) return aa(r);
	let i = t.indexOf(r), a = n ? n.indexOf(r) : -1;
	return [Eo(r), (r) => {
		t[i] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
	}];
};
function oa(e, t = !0) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (go(i)) {
			if (i.type !== K || i.children === "v-if") {
				if (n) return;
				if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048) return oa(n.children);
			}
		} else return;
	}
	return n;
}
var sa = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, ca = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
}, la = (e) => e.shapeFlag & 7 || e.type === K;
function ua(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (process.env.NODE_ENV !== "production" && (i || s) && er || t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? da(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (fa(o, r, n) && !ta(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || da(r, o, l) : !!o;
	return !1;
}
function da(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (fa(t, e, a) && !ta(n, a)) return !0;
	}
	return !1;
}
function fa(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !De(r, i) : r !== i;
}
function pa({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ma = {}, ha = () => Object.create(ma), ga = (e) => Object.getPrototypeOf(e) === ma;
function _a(e, t, n, r = !1) {
	let i = {}, a = ha();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), ba(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	process.env.NODE_ENV !== "production" && Ea(t || {}, i, e), e.props = n ? r ? i : /* @__PURE__ */ Jt(i) : e.type.props ? i : a, e.attrs = a;
}
function va(e) {
	for (; e;) {
		if (e.type.__hmrId) return !0;
		e = e.parent;
	}
}
function ya(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
	if (!(process.env.NODE_ENV !== "production" && va(e)) && (r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (ta(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = O(o);
						i[t] = xa(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		ba(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = k(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = xa(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && lt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Ea(t || {}, i, e);
}
function ba(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (T(t)) continue;
		let l = n[t], d;
		a && u(a, d = O(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : ta(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ L(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = xa(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function xa(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Lo(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === k(n)) && (r = !0));
	}
	return r;
}
var Sa = /* @__PURE__ */ new WeakMap();
function Ca(e, r, i = !1) {
	let a = i ? Sa : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = Ca(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		process.env.NODE_ENV !== "production" && !g(c[e]) && B("props must be strings when using array syntax.", c[e]);
		let n = O(c[e]);
		wa(n) && (l[n] = t);
	}
	else if (c) {
		process.env.NODE_ENV !== "production" && !v(c) && B("invalid props options", c);
		for (let e in c) {
			let t = O(e);
			if (wa(t)) {
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
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function wa(e) {
	return e[0] !== "$" && !T(e) || (process.env.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ta(e) {
	return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ea(e, t, n) {
	let r = /* @__PURE__ */ L(t), i = n.propsOptions[0], a = Object.keys(e).map((e) => O(e));
	for (let e in i) {
		let t = i[e];
		t != null && Da(e, r[e], t, process.env.NODE_ENV === "production" ? r : /* @__PURE__ */ Xt(r), !a.includes(e));
	}
}
function Da(e, t, n, r, i) {
	let { type: a, required: o, validator: s, skipCheck: c } = n;
	if (o && i) {
		B("Missing required prop: \"" + e + "\"");
		return;
	}
	if (t != null || o) {
		if (a != null && a !== !0 && !c) {
			let n = !1, r = d(a) ? a : [a], i = [];
			for (let e = 0; e < r.length && !n; e++) {
				let { valid: a, expectedType: o } = ka(t, r[e]);
				i.push(o || ""), n = a;
			}
			if (!n) {
				B(Aa(e, t, i));
				return;
			}
		}
		s && !s(t, r) && B("Invalid prop: custom validator check failed for prop \"" + e + "\".");
	}
}
var Oa = /* @__PURE__ */ e("String,Number,Boolean,Function,Symbol,BigInt");
function ka(e, t) {
	let n, r = Ta(t);
	if (r === "null") n = e === null;
	else if (Oa(r)) {
		let i = typeof e;
		n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
	} else n = r === "Object" ? v(e) : r === "Array" ? d(e) : e instanceof t;
	return {
		valid: n,
		expectedType: r
	};
}
function Aa(e, t, n) {
	if (n.length === 0) return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
	let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ne).join(" | ")}`, i = n[0], a = S(t), o = ja(t, i), s = ja(t, a);
	return n.length === 1 && Ma(i) && Na(i, a) && (r += ` with value ${o}`), r += `, got ${a} `, Ma(a) && (r += `with value ${s}.`), r;
}
function ja(e, t) {
	return _(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ma(e) {
	return [
		"string",
		"number",
		"boolean"
	].some((t) => e.toLowerCase() === t);
}
function Na(...e) {
	return e.every((e) => {
		let t = e.toLowerCase();
		return t !== "boolean" && t !== "symbol";
	});
}
var Pa = (e) => e === "_" || e === "_ctx" || e === "$stable", Fa = (e) => d(e) ? e.map(Eo) : [Eo(e)], Ia = (e, t, n) => {
	if (t._n) return t;
	let r = Ar((...r) => (process.env.NODE_ENV !== "production" && $ && !(n === null && H) && !(n && n.root !== $.root) && B(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Fa(t(...r))), n);
	return r._c = !1, r;
}, La = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Pa(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Ia(n, i, r);
		else if (i != null) {
			process.env.NODE_ENV !== "production" && B(`Non-function value encountered for slot "${n}". Prefer function slots for better performance.`);
			let e = Fa(i);
			t[n] = () => e;
		}
	}
}, Ra = (e, t) => {
	process.env.NODE_ENV !== "production" && !ni(e.vnode) && B("Non-function value encountered for default slot. Prefer function slots for better performance.");
	let n = Fa(t);
	e.slots.default = () => n;
}, za = (e, t, n) => {
	for (let r in t) (n || !Pa(r)) && (e[r] = t[r]);
}, Ba = (e, t, n) => {
	let r = e.slots = ha();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (za(r, t, n), n && ae(r, "_", e, !0)) : La(t, r);
	} else t && Ra(e, t);
}, Va = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let t = n._;
		t ? process.env.NODE_ENV !== "production" && er ? (za(a, n, r), lt(e, "set", "$slots")) : r && t === 1 ? o = !1 : za(a, n, r) : (o = !n.$stable, La(n, a)), s = n;
	} else n && (Ra(e, n), s = { default: 1 });
	if (o) for (let e in a) !Pa(e) && s[e] == null && delete a[e];
}, Ha, Ua;
function Wa(e, t) {
	e.appContext.config.performance && Ka() && Ua.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && wr(e, t, Ka() ? Ua.now() : Date.now());
}
function Ga(e, t) {
	if (e.appContext.config.performance && Ka()) {
		let n = `vue-${t}-${e.uid}`, r = n + ":end", i = `<${ts(e, e.type)}> ${t}`;
		Ua.mark(r), Ua.measure(i, n, r), Ua.clearMeasures(i), Ua.clearMarks(n), Ua.clearMarks(r);
	}
	process.env.NODE_ENV !== "production" && Tr(e, t, Ka() ? Ua.now() : Date.now());
}
function Ka() {
	return Ha === void 0 && (typeof window < "u" && window.performance ? (Ha = !0, Ua = window.performance) : Ha = !1), Ha;
}
function qa() {
	let e = [];
	if (process.env.NODE_ENV !== "production" && e.length) {
		let t = e.length > 1;
		console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
	}
}
var W = ao;
function Ja(e) {
	return Ya(e);
}
function Ya(e, i) {
	qa();
	let a = se();
	a.__VUE__ = !0, process.env.NODE_ENV !== "production" && gr(a.__VUE_DEVTOOLS_GLOBAL_HOOK__, a);
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = process.env.NODE_ENV !== "production" && er ? !1 : !!t.dynamicChildren) => {
		if (e === t) return;
		e && !_o(e, t) && (i = ye(e), me(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case oo:
				y(e, t, r, i);
				break;
			case K:
				b(e, t, r, i);
				break;
			case so:
				e == null ? x(t, r, i, s) : process.env.NODE_ENV !== "production" && S(e, t, r, s);
				break;
			case G:
				re(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? E(e, t, r, i, a, o, s, c, l) : f & 6 ? A(e, t, r, i, a, o, s, c, l) : f & 64 || f & 128 ? u.process(e, t, r, i, a, o, s, c, l, Se) : process.env.NODE_ENV !== "production" && B("Invalid VNode type:", u, `(${typeof u})`);
		}
		d != null && a ? $r(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && $r(e.ref, null, o, e, !0);
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
	}, S = (e, t, n, r) => {
		if (t.children !== e.children) {
			let i = h(e.anchor);
			w(e), [t.el, t.anchor] = _(t.children, n, i, r);
		} else t.el = e.el, t.anchor = e.anchor;
	}, C = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, w = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, E = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) D(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), te(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, D = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, Xa(e, a), s, u), _ && Nr(e, null, r, "created"), ee(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !T(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Ao(f, r, e);
		}
		process.env.NODE_ENV !== "production" && (ae(d, "__vnode", e, !0), ae(d, "__vueParentComponent", r, !0)), _ && Nr(e, null, r, "beforeMount");
		let v = Qa(i, g);
		if (v && g.beforeEnter(d), o(d, t, n), (f = m && m.onVnodeMounted) || v || _) {
			let t = process.env.NODE_ENV !== "production" && er;
			W(() => {
				let n;
				process.env.NODE_ENV !== "production" && (n = tr(t));
				try {
					f && Ao(f, r, e), v && g.enter(d), _ && Nr(e, null, r, "mounted");
				} finally {
					process.env.NODE_ENV !== "production" && tr(n);
				}
			}, i);
		}
	}, ee = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048 && (n = oa(n.children) || n), t === n || io(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ee(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Do(e[l]) : Eo(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, te = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el;
		process.env.NODE_ENV !== "production" && (l.__vnode = n);
		let { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Za(r, !1), (g = h.onVnodeBeforeUpdate) && Ao(g, r, n, e), f && Nr(n, e, r, "beforeUpdate"), r && Za(r, !0), (process.env.NODE_ENV !== "production" && er || d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length)) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? (k(e.dynamicChildren, d, l, r, i, Xa(n, a), o), process.env.NODE_ENV !== "production" && $a(e, n)) : s || ue(e, n, l, null, r, i, Xa(n, a), o, !1), u > 0) {
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
		((g = h.onVnodeUpdated) || f) && W(() => {
			g && Ao(g, r, n, e), f && Nr(n, e, r, "updated");
		}, i);
	}, k = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === G || !_o(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
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
		process.env.NODE_ENV !== "production" && (er || p & 2048) && (p = 0, l = !1, m = null), h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (k(e.dynamicChildren, m, n, i, a, s, c), process.env.NODE_ENV === "production" ? (t.key != null || i && t === i.subTree) && $a(e, t, !0) : $a(e, t)) : ue(e, t, n, f, i, a, s, c, l);
	}, A = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : j(t, n, r, i, a, o, c) : oe(e, t, c);
	}, j = (e, t, n, r, i, a, o) => {
		let s = e.component = No(e, r, i);
		if (process.env.NODE_ENV !== "production" && s.type.__hmrId && ir(s), process.env.NODE_ENV !== "production" && (wn(e), Wa(s, "mount")), ni(e) && (s.ctx.renderer = Se), process.env.NODE_ENV !== "production" && Wa(s, "init"), Uo(s, !1, o), process.env.NODE_ENV !== "production" && Ga(s, "init"), process.env.NODE_ENV !== "production" && er && (e.el = null), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = X(K);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
		process.env.NODE_ENV !== "production" && (Tn(), Ga(s, "mount"));
	}, oe = (e, t, n) => {
		let r = t.component = e.component;
		if (ua(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				process.env.NODE_ENV !== "production" && wn(t), t.el = e.el, le(r, t, n), process.env.NODE_ENV !== "production" && Tn();
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = to(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							W(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				process.env.NODE_ENV !== "production" && wn(t || e.vnode), Za(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && ie(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Ao(d, s, t, c), Za(e, !0), process.env.NODE_ENV !== "production" && Wa(e, "render");
				let f = ia(e);
				process.env.NODE_ENV !== "production" && Ga(e, "render");
				let p = e.subTree;
				e.subTree = f, process.env.NODE_ENV !== "production" && Wa(e, "patch"), v(p, f, m(p.el), ye(p), e, i, a), process.env.NODE_ENV !== "production" && Ga(e, "patch"), t.el = f.el, u === null && pa(e, f.el), r && W(r, i), (d = t.props && t.props.onVnodeUpdated) && W(() => Ao(d, s, t, c), i), process.env.NODE_ENV !== "production" && br(e), process.env.NODE_ENV !== "production" && Tn();
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = ti(t);
				if (Za(e, !1), l && ie(l), !m && (o = c && c.onVnodeBeforeMount) && Ao(o, d, t), Za(e, !0), s && we) {
					let t = () => {
						process.env.NODE_ENV !== "production" && Wa(e, "render"), e.subTree = ia(e), process.env.NODE_ENV !== "production" && Ga(e, "render"), process.env.NODE_ENV !== "production" && Wa(e, "hydrate"), we(s, e.subTree, e, i, null), process.env.NODE_ENV !== "production" && Ga(e, "hydrate");
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0), process.env.NODE_ENV !== "production" && Wa(e, "render");
					let o = e.subTree = ia(e);
					process.env.NODE_ENV !== "production" && Ga(e, "render"), process.env.NODE_ENV !== "production" && Wa(e, "patch"), v(null, o, n, r, e, i, a), process.env.NODE_ENV !== "production" && Ga(e, "patch"), t.el = o.el;
				}
				if (u && W(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					W(() => Ao(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && ti(d.vnode) && d.vnode.shapeFlag & 256) && e.a && W(e.a, i), e.isMounted = !0, process.env.NODE_ENV !== "production" && yr(e), t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Le(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Kn(u), Za(e, !0), process.env.NODE_ENV !== "production" && (c.onTrack = e.rtc ? (t) => ie(e.rtc, t) : void 0, c.onTrigger = e.rtg ? (t) => ie(e.rtg, t) : void 0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ya(e, t.props, r, n), Va(e, t.children, n), Qe(), Yn(e), $e();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? fe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && O(d, n, r, i, a, o, s, c));
	}, de = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Do(t[p]) : Eo(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : O(t, r, i, a, o, s, c, l, f);
	}, fe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Do(t[u]) : Eo(t[u]);
			if (_o(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Do(t[p]) : Eo(t[p]);
			if (_o(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Do(t[u]) : Eo(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) me(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Do(t[u]) : Eo(t[u]);
				e.key != null && (process.env.NODE_ENV !== "production" && g.has(e.key) && B("Duplicate keys found during update:", JSON.stringify(e.key), "Make sure keys are unique."), g.set(e.key, u));
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					me(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && _o(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? me(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? eo(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || ro(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? pe(n, r, p, 2) : _--);
			}
		}
	}, pe = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			pe(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, Se);
			return;
		}
		if (c === G) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) pe(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === so) {
			C(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Wr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), W(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Wr];
					a._isLeaving && a[Wr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, me = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Qe(), $r(s, null, n, e, !0), $e()), p != null && (!e.ctx || e.ctx === t) && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !ti(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Ao(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Nr(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, Se, r) : l && !l.hasOnce && (a !== G || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === G && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && W(() => {
			_ && Ao(_, t, e), h && Nr(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === G) {
			process.env.NODE_ENV !== "production" && e.patchFlag > 0 && e.patchFlag & 2048 && i && !i.persisted ? e.children.forEach((e) => {
				e.type === K ? s(e.el) : he(e);
			}) : ge(n, r);
			return;
		}
		if (t === so) {
			w(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, _e = (e, t, n) => {
		process.env.NODE_ENV !== "production" && e.type.__hmrId && ar(e);
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		no(c), no(l), r && ie(r), i.stop(), a ? (a.flags |= 8, me(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, me(o, e, t, n)), s && W(s, t), W(() => {
			e.isUnmounted = !0;
		}, t), process.env.NODE_ENV !== "production" && Sr(e);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) me(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Hr];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (me(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, Yn(r), Xn(), !1);
	}, Se = {
		p: v,
		um: me,
		m: pe,
		r: he,
		mt: j,
		mc: O,
		pc: ue,
		pbc: k,
		n: ye,
		o: e
	}, Ce, we;
	return i && ([Ce, we] = i(Se)), {
		render: xe,
		hydrate: Ce,
		createApp: Yi(xe, Ce)
	};
}
function Xa({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Za({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qa(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $a(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Do(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && $a(t, a)), a.type === oo && (a.patchFlag === -1 && (a = i[e] = Do(a)), a.el = t.el), a.type === K && !a.el && (a.el = t.el), process.env.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
	}
}
function eo(e) {
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
function to(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : to(t);
}
function no(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function ro(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? ro(t.subTree) : null;
}
var io = (e) => e.__isSuspense;
function ao(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Jn(e);
}
var G = /* @__PURE__ */ Symbol.for("v-fgt"), oo = /* @__PURE__ */ Symbol.for("v-txt"), K = /* @__PURE__ */ Symbol.for("v-cmt"), so = /* @__PURE__ */ Symbol.for("v-stc"), co = [], lo = null;
function q(e = !1) {
	co.push(lo = e ? null : []);
}
function uo() {
	co.pop(), lo = co[co.length - 1] || null;
}
var fo = 1;
function po(e, t = !1) {
	fo += e, e < 0 && lo && t && (lo.hasOnce = !0);
}
function mo(e) {
	return e.dynamicChildren = fo > 0 ? lo || n : null, uo(), fo > 0 && lo && lo.push(e), e;
}
function J(e, t, n, r, i, a) {
	return mo(Y(e, t, n, r, i, a, !0));
}
function ho(e, t, n, r, i) {
	return mo(X(e, t, n, r, i, !0));
}
function go(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function _o(e, t) {
	if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
		let n = nr.get(t.type);
		if (n && n.has(e.component)) return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
	}
	return e.type === t.type && e.key === t.key;
}
var vo = (...e) => So(...e), yo = ({ key: e }) => e ?? null, bo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ R(e) || h(e) ? {
	i: H,
	r: e,
	k: t,
	f: !!n
} : e);
function Y(e, t = null, n = null, r = 0, i = null, a = e === G ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && yo(t),
		ref: t && bo(t),
		scopeId: Or,
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
		ctx: H
	};
	if (s ? (Oo(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && B("VNode created with invalid key (NaN). VNode type:", c.type), process.env.NODE_ENV !== "production" && t && c.shapeFlag & 1) {
		let e = t.innerHTML == null ? t.textContent == null ? null : "textContent" : "innerHTML";
		e && xo(c.children) && B(`The \`${e}\` prop on <${c.type}> will override its children. Remove either the \`${e}\` prop or the children.`);
	}
	return fo > 0 && !o && lo && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && lo.push(c), c;
}
function xo(e) {
	return g(e) ? e !== "" : d(e) ? e.length > 0 : !1;
}
var X = process.env.NODE_ENV === "production" ? So : vo;
function So(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === yi) && (process.env.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = K), go(e)) {
		let r = wo(e, t, !0);
		return n && Oo(r, n), fo > 0 && !a && lo && (r.shapeFlag & 6 ? lo[lo.indexOf(e)] = r : lo.push(r)), r.patchFlag = -2, r;
	}
	if (ns(e) && (e = e.__vccOpts), t) {
		t = Co(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = pe(e)), v(n) && (/* @__PURE__ */ en(n) && !d(n) && (n = s({}, n)), t.style = ce(n));
	}
	let o = g(e) ? 1 : io(e) ? 128 : Ur(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return process.env.NODE_ENV !== "production" && o & 4 && /* @__PURE__ */ en(e) && (e = /* @__PURE__ */ L(e), B("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", "\nComponent that was made reactive: ", e)), Y(e, t, n, r, i, o, a, !0);
}
function Co(e) {
	return e ? /* @__PURE__ */ en(e) || ga(e) ? s({}, e) : e : null;
}
function wo(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ko(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && yo(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(bo(t)) : [a, bo(t)] : bo(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: process.env.NODE_ENV !== "production" && o === -1 && d(s) ? s.map(To) : s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== G ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && wo(e.ssContent),
		ssFallback: e.ssFallback && wo(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && qr(u, c.clone(u)), u;
}
function To(e) {
	let t = wo(e);
	return d(e.children) && (t.children = e.children.map(To)), t;
}
function Z(e = " ", t = 0) {
	return X(oo, null, e, t);
}
function Q(e = "", t = !1) {
	return t ? (q(), ho(K, null, e)) : X(K, null, e);
}
function Eo(e) {
	return e == null || typeof e == "boolean" ? X(K) : d(e) ? X(G, null, e.slice()) : go(e) ? Do(e) : X(oo, null, String(e));
}
function Do(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : wo(e);
}
function Oo(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Oo(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !ga(t) ? t._ctx = H : r === 3 && H && (H.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			Oo(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: H
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Z(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ko(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = pe([t.class, r.class]));
		else if (e === "style") t.style = ce([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Ao(e, t, n, r = null) {
	Pn(e, t, 7, [n, r]);
}
var jo = qi(), Mo = 0;
function No(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || jo, o = {
		uid: Mo++,
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
		scope: new Ne(!0),
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
		propsOptions: Ca(i, a),
		emitsOptions: ea(i, a),
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
	return o.ctx = process.env.NODE_ENV === "production" ? { _: o } : Oi(o), o.root = n ? n.root : o, o.emit = Qi.bind(null, o), e.ce && e.ce(o), o;
}
var $ = null, Po = () => $ || H, Fo, Io;
{
	let e = se(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Fo = t("__VUE_INSTANCE_SETTERS__", (e) => $ = e), Io = t("__VUE_SSR_SETTERS__", (e) => Ho = e);
}
var Lo = (e) => {
	let t = $;
	return Fo(e), e.scope.on(), () => {
		e.scope.off(), Fo(t);
	};
}, Ro = () => {
	$ && $.scope.off(), Fo(null);
}, zo = /* @__PURE__ */ e("slot,component");
function Bo(e, { isNativeTag: t }) {
	(zo(e) || t(e)) && B("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Vo(e) {
	return e.vnode.shapeFlag & 4;
}
var Ho = !1;
function Uo(e, t = !1, n = !1) {
	t && Io(t);
	let { props: r, children: i } = e.vnode, a = Vo(e);
	_a(e, r, a, t), Ba(e, i, n || t);
	let o = a ? Wo(e, t) : void 0;
	return t && Io(!1), o;
}
function Wo(e, t) {
	let n = e.type;
	if (process.env.NODE_ENV !== "production") {
		if (n.name && Bo(n.name, e.appContext.config), n.components) {
			let t = Object.keys(n.components);
			for (let n = 0; n < t.length; n++) Bo(t[n], e.appContext.config);
		}
		if (n.directives) {
			let e = Object.keys(n.directives);
			for (let t = 0; t < e.length; t++) jr(e[t]);
		}
		n.compilerOptions && Ko() && B("\"compilerOptions\" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.");
	}
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Di), process.env.NODE_ENV !== "production" && ki(e);
	let { setup: r } = n;
	if (r) {
		Qe();
		let i = e.setupContext = r.length > 1 ? Xo(e) : null, a = Lo(e), o = Nn(r, e, 0, [process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ Xt(e.props), i]), s = y(o);
		if ($e(), a(), (s || e.sp) && !ti(e) && Yr(e), s) {
			if (o.then(Ro, Ro), t) return o.then((n) => {
				Io(!0);
				try {
					Go(e, n, t);
				} finally {
					Io(!1);
				}
			}).catch((t) => {
				Fn(t, e, 0);
			});
			e.asyncDep = o, process.env.NODE_ENV !== "production" && !e.suspense && B(`Component <${ts(e, n)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
		} else Go(e, o, t);
	} else qo(e, t);
}
function Go(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) ? (process.env.NODE_ENV !== "production" && go(t) && B("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = un(t), process.env.NODE_ENV !== "production" && Ai(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && B(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), qo(e, n);
}
var Ko = () => !0;
function qo(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Lo(e);
		Qe();
		try {
			Pi(e);
		} finally {
			$e(), t();
		}
	}
	process.env.NODE_ENV !== "production" && !i.render && e.render === r && !t && (i.template ? B("Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\".") : B("Component is missing template or render function: ", i));
}
var Jo = process.env.NODE_ENV === "production" ? { get(e, t) {
	return F(e, "get", ""), e[t];
} } : {
	get(e, t) {
		return ra(), F(e, "get", ""), e[t];
	},
	set() {
		return B("setupContext.attrs is readonly."), !1;
	},
	deleteProperty() {
		return B("setupContext.attrs is readonly."), !1;
	}
};
function Yo(e) {
	return new Proxy(e.slots, { get(t, n) {
		return F(e, "get", "$slots"), t[n];
	} });
}
function Xo(e) {
	let t = (t) => {
		if (process.env.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), t != null)) {
			let e = typeof t;
			e === "object" && (d(t) ? e = "array" : /* @__PURE__ */ R(t) && (e = "ref")), e !== "object" && B(`expose() should be passed a plain object, received ${e}.`);
		}
		e.exposed = t || {};
	};
	if (process.env.NODE_ENV !== "production") {
		let n, r;
		return Object.freeze({
			get attrs() {
				return n ||= new Proxy(e.attrs, Jo);
			},
			get slots() {
				return r ||= Yo(e);
			},
			get emit() {
				return (t, ...n) => e.emit(t, ...n);
			},
			expose: t
		});
	}
	return {
		attrs: new Proxy(e.attrs, Jo),
		slots: e.slots,
		emit: e.emit,
		expose: t
	};
}
function Zo(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(un(tn(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in wi) return wi[n](e);
		},
		has(e, t) {
			return t in e || t in wi;
		}
	}) : e.proxy;
}
var Qo = /(?:^|[-_])\w/g, $o = (e) => e.replace(Qo, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function es(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ts(e, t, n = !1) {
	let r = es(t);
	if (!r && t.__file) {
		let e = t.__file.match(/([^/\\]+)\.\w+$/);
		e && (r = e[1]);
	}
	if (!r && e) {
		let n = (e) => {
			for (let n in e) if (e[n] === t) return n;
		};
		r = n(e.components) || e.parent && n(e.parent.type.components) || n(e.appContext.components);
	}
	return r ? $o(r) : n ? "App" : "Anonymous";
}
function ns(e) {
	return h(e) && "__vccOpts" in e;
}
var rs = (e, t) => {
	let n = /* @__PURE__ */ gn(e, t, Ho);
	if (process.env.NODE_ENV !== "production") {
		let e = Po();
		e && e.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
	}
	return n;
};
function is(e, t, n) {
	try {
		po(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? go(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && go(n) && (n = [n]), X(e, t, n));
	} finally {
		po(1);
	}
}
function as() {
	if (process.env.NODE_ENV === "production" || typeof window > "u") return;
	let e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, a = {
		__vue_custom_formatter: !0,
		header(t) {
			if (!v(t)) return null;
			if (t.__isVue) return [
				"div",
				e,
				"VueInstance"
			];
			if (/* @__PURE__ */ R(t)) {
				Qe();
				let n = t.value;
				return $e(), [
					"div",
					{},
					[
						"span",
						e,
						p(t)
					],
					"<",
					l(n),
					">"
				];
			}
			return /* @__PURE__ */ Qt(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ I(t) ? "ShallowReactive" : "Reactive"
				],
				"<",
				l(t),
				`>${/* @__PURE__ */ $t(t) ? " (readonly)" : ""}`
			] : /* @__PURE__ */ $t(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ I(t) ? "ShallowReadonly" : "Readonly"
				],
				"<",
				l(t),
				">"
			] : null;
		},
		hasBody(e) {
			return e && e.__isVue;
		},
		body(e) {
			if (e && e.__isVue) return [
				"div",
				{},
				...o(e.$)
			];
		}
	};
	function o(e) {
		let n = [];
		e.type.props && e.props && n.push(c("props", /* @__PURE__ */ L(e.props))), e.setupState !== t && n.push(c("setup", e.setupState)), e.data !== t && n.push(c("data", /* @__PURE__ */ L(e.data)));
		let r = u(e, "computed");
		r && n.push(c("computed", r));
		let a = u(e, "inject");
		return a && n.push(c("injected", a)), n.push([
			"div",
			{},
			[
				"span",
				{ style: i.style + ";opacity:0.66" },
				"$ (internal): "
			],
			["object", { object: e }]
		]), n;
	}
	function c(e, t) {
		return t = s({}, t), Object.keys(t).length ? [
			"div",
			{ style: "line-height:1.25em;margin-bottom:0.6em" },
			[
				"div",
				{ style: "color:#476582" },
				e
			],
			[
				"div",
				{ style: "padding-left:1.25em" },
				...Object.keys(t).map((e) => [
					"div",
					{},
					[
						"span",
						i,
						e + ": "
					],
					l(t[e], !1)
				])
			]
		] : ["span", {}];
	}
	function l(e, t = !0) {
		return typeof e == "number" ? [
			"span",
			n,
			e
		] : typeof e == "string" ? [
			"span",
			r,
			JSON.stringify(e)
		] : typeof e == "boolean" ? [
			"span",
			i,
			e
		] : v(e) ? ["object", { object: t ? /* @__PURE__ */ L(e) : e }] : [
			"span",
			r,
			String(e)
		];
	}
	function u(e, t) {
		let n = e.type;
		if (h(n)) return;
		let r = {};
		for (let i in e.ctx) f(n, i, t) && (r[i] = e.ctx[i]);
		return r;
	}
	function f(e, t, n) {
		let r = e[n];
		if (d(r) && r.includes(t) || v(r) && t in r || e.extends && f(e.extends, t, n) || e.mixins && e.mixins.some((e) => f(e, t, n))) return !0;
	}
	function p(e) {
		return /* @__PURE__ */ I(e) ? "ShallowRef" : e.effect ? "ComputedRef" : "Ref";
	}
	window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
var os = "3.5.43", ss = process.env.NODE_ENV === "production" ? r : B;
process.env.NODE_ENV, process.env.NODE_ENV;
//#endregion
//#region node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var cs = void 0, ls = typeof window < "u" && window.trustedTypes;
if (ls) try {
	cs = /* @__PURE__ */ ls.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {
	process.env.NODE_ENV !== "production" && ss(`Error creating trusted types policy: ${e}`);
}
var us = cs ? (e) => cs.createHTML(e) : (e) => e, ds = "http://www.w3.org/2000/svg", fs = "http://www.w3.org/1998/Math/MathML", ps = typeof document < "u" ? document : null, ms = ps && /* @__PURE__ */ ps.createElement("template"), hs = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ps.createElementNS(ds, e) : t === "mathml" ? ps.createElementNS(fs, e) : n ? ps.createElement(e, { is: n }) : ps.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ps.createTextNode(e),
	createComment: (e) => ps.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ps.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			ms.innerHTML = us(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = ms.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, gs = /* @__PURE__ */ Symbol("_vtc");
function _s(e, t, n) {
	let r = e[gs];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var vs = /* @__PURE__ */ Symbol("_vod"), ys = /* @__PURE__ */ Symbol("_vsh"), bs = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "CSS_VAR_TEXT"), xs = /(?:^|;)\s*display\s*:/;
function Ss(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Ts(r, t, "");
			}
			else for (let e in t) n[e] ?? Ts(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ts(r, i, "") : ks(e, i, !g(t) && t ? t[i] : void 0, o) || Ts(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[bs];
			e && (n += ";" + e), r.cssText = n, a = xs.test(n);
		}
	} else t && e.removeAttribute("style");
	vs in e && (e[vs] = a ? r.display : "", e[ys] && (r.display = "none"));
}
var Cs = /[^\\];\s*$/, ws = /\s*!important$/;
function Ts(e, t, n) {
	if (d(n)) n.forEach((n) => Ts(e, t, n));
	else if (n ??= "", process.env.NODE_ENV !== "production" && Cs.test(n) && ss(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--")) ws.test(n) ? e.setProperty(t, n.replace(ws, ""), "important") : e.setProperty(t, n);
	else {
		let r = Os(e, t);
		ws.test(n) ? e.setProperty(k(r), n.replace(ws, ""), "important") : e[r] = n;
	}
}
var Es = [
	"Webkit",
	"Moz",
	"ms"
], Ds = {};
function Os(e, t) {
	let n = Ds[t];
	if (n) return n;
	let r = O(t);
	if (r !== "filter" && r in e) return Ds[t] = r;
	r = ne(r);
	for (let n = 0; n < Es.length; n++) {
		let i = Es[n] + r;
		if (i in e) return Ds[t] = i;
	}
	return t;
}
function ks(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var As = "http://www.w3.org/1999/xlink";
function js(e, t, n, r, i, a = xe(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(As, t.slice(6, t.length)) : e.setAttributeNS(As, t, n) : n == null || a && !Se(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Ms(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? us(n) : n);
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
		r === "boolean" ? n = Se(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch (e) {
		process.env.NODE_ENV !== "production" && !o && ss(`Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`, e);
	}
	o && e.removeAttribute(i || t);
}
function Ns(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ps(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Fs = /* @__PURE__ */ Symbol("_vei");
function Is(e, t, n, r, i = null) {
	let a = e[Fs] || (e[Fs] = {}), o = a[t];
	if (r && o) o.value = process.env.NODE_ENV === "production" ? r : Ws(r, t);
	else {
		let [n, s] = zs(t);
		r ? Ns(e, n, a[t] = Us(process.env.NODE_ENV === "production" ? r : Ws(r, t), i), s) : o && (Ps(e, n, o, s), a[t] = void 0);
	}
}
var Ls = /(Once|Passive|Capture)$/, Rs = /^on:?(?:Once|Passive|Capture)$/;
function zs(e) {
	let t, n;
	for (; (n = e.match(Ls)) && !Rs.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : k(e.slice(2)), t];
}
var Bs = 0, Vs = /* @__PURE__ */ Promise.resolve(), Hs = () => Bs ||= (Vs.then(() => Bs = 0), Date.now());
function Us(e, t) {
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
				e && Pn(e, t, 5, a);
			}
		} else Pn(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Hs(), n;
}
function Ws(e, t) {
	return h(e) || d(e) ? e : (ss(`Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`), r);
}
var Gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ks = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? _s(e, r, c) : t === "style" ? Ss(e, n, r) : a(t) ? o(t) || Is(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : qs(e, t, r, c)) ? (Ms(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && js(e, t, r, c, s, t !== "value")) : e._isVueCE && (Js(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Ms(e, O(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), js(e, t, r, c));
};
function qs(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Gs(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Gs(t) && g(n) ? !1 : t in e;
}
function Js(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = O(t);
	return Array.isArray(n) ? n.some((e) => O(e) === r) : Object.keys(n).some((e) => O(e) === r);
}
var Ys = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => ie(t, e) : t;
};
function Xs(e) {
	e.target.composing = !0;
}
function Zs(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Qs = /* @__PURE__ */ Symbol("_assign"), $s = /* @__PURE__ */ Symbol("_initialValue");
function ec(e, t, n) {
	return t && (e = e.trim()), n && (e = j(e)), e;
}
var tc = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[$s] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[$s] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Qs] = Ys(i);
		let a = r || i.props && i.props.type === "number";
		Ns(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Qs](ec(e.value, n, a));
		}), (n || a) && Ns(e, "change", () => {
			e.value = ec(e.value, n, a);
		}), t || (Ns(e, "compositionstart", Xs), Ns(e, "compositionend", Zs), Ns(e, "change", Zs));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[$s];
		delete e[$s], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Qs](ec(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Qs] = Ys(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? j(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, nc = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Ns(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? j(ac(e)) : ac(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[Qs](i);
			} finally {
				Wn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Qs] = Ys(r);
	},
	mounted(e, { value: t }) {
		ic(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Qs] = Ys(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, (!n || n[0] !== e.multiple || !rc(t, n[1], n[0])) && ic(e, t);
	}
};
function rc(e, t, n) {
	if (!n || d(e)) return De(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function ic(e, t) {
	let n = e.multiple, r = d(t);
	if (n && !r && !p(t)) {
		process.env.NODE_ENV !== "production" && ss(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
		return;
	}
	for (let i = 0, a = e.options.length; i < a; i++) {
		let a = e.options[i], o = ac(a);
		if (n) {
			if (r) {
				let e = typeof o;
				a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Oe(t, o) > -1;
			} else a.selected = t.has(o);
		} else if (De(ac(a), t)) {
			e.selectedIndex !== i && (e.selectedIndex = i);
			return;
		}
	}
	!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function ac(e) {
	return "_value" in e ? e._value : e.value;
}
var oc = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], sc = {
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
	exact: (e, t) => oc.some((n) => e[`${n}Key`] && !t.includes(n))
}, cc = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = sc[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, lc = /* @__PURE__ */ s({ patchProp: Ks }, hs), uc;
function dc() {
	return uc ||= Ja(lc);
}
var fc = ((...e) => {
	let t = dc().createApp(...e);
	process.env.NODE_ENV !== "production" && (mc(t), hc(t));
	let { mount: n } = t;
	return t.mount = (e) => {
		let r = gc(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, pc(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function pc(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function mc(e) {
	Object.defineProperty(e.config, "isNativeTag", {
		value: (e) => _e(e) || ve(e) || ye(e),
		writable: !1
	});
}
function hc(e) {
	if (Ko()) {
		let t = e.config.isCustomElement;
		Object.defineProperty(e.config, "isCustomElement", {
			get() {
				return t;
			},
			set() {
				ss("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
			}
		});
		let n = e.config.compilerOptions, r = "The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka \"full build\"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc";
		Object.defineProperty(e.config, "compilerOptions", {
			get() {
				return ss(r), n;
			},
			set() {
				ss(r);
			}
		});
	}
}
function gc(e) {
	if (g(e)) {
		let t = document.querySelector(e);
		return process.env.NODE_ENV !== "production" && !t && ss(`Failed to mount app: mount target selector "${e}" returned null.`), t;
	}
	return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ss("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs"), e;
}
//#endregion
//#region node_modules/vue/dist/vue.runtime.esm-bundler.js
function _c() {
	as();
}
process.env.NODE_ENV !== "production" && _c();
//#endregion
//#region src/security-api.ts
var vc = class extends Error {
	status;
	code;
	fields;
	constructor(e, t, n = "No fue posible completar la solicitud.", r = []) {
		super(n), this.status = e, this.code = t, this.fields = r, this.name = "ApiError";
	}
}, yc = class {
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
	async request(e, t = {}) {
		let n = new Headers(t.headers);
		n.set("Accept", "application/json");
		let r = document.cookie.split("; ").find((e) => e.startsWith("XSRF-TOKEN="));
		r && t.method && t.method !== "GET" && n.set("X-XSRF-TOKEN", decodeURIComponent(r.slice(11))), t.body !== void 0 && n.set("Content-Type", "application/json");
		let i;
		try {
			i = await fetch(`${this.baseUrl}${e}`, {
				...t,
				body: t.body === void 0 ? void 0 : JSON.stringify(t.body),
				credentials: "include",
				headers: n
			});
		} catch (e) {
			throw e instanceof DOMException && e.name === "AbortError" ? e : new vc(0, "NETWORK_ERROR", "No fue posible conectar con el PDP.");
		}
		if (!i.ok) {
			let e = await i.json().catch(() => null), t = i.status === 403 ? "No tiene permisos para administrar la seguridad de esta aplicación." : i.status === 404 ? "El elemento ya no existe o no pertenece a esta aplicación." : i.status === 409 ? "La operación entra en conflicto con el estado actual." : i.status === 400 ? "Revise los datos ingresados." : `El servicio respondió ${i.status}.`;
			throw new vc(i.status, e?.code, i.status === 403 ? t : e?.detail ?? e?.message ?? t, e?.fieldErrors ?? e?.errors ?? []);
		}
		if (i.status !== 204) return (await i.json()).data;
	}
}, bc = () => ({
	content: [],
	total: 0,
	page: 0,
	limit: 20,
	loading: !1,
	error: null,
	loaded: !1
});
function xc(e) {
	let t = /* @__PURE__ */ an(""), n = /* @__PURE__ */ an(), r = /* @__PURE__ */ an(!1), i = /* @__PURE__ */ an(""), a = /* @__PURE__ */ an(!1), o = /* @__PURE__ */ qt(/* @__PURE__ */ new Set()), s = /* @__PURE__ */ qt(bc()), c = /* @__PURE__ */ qt(bc()), l = /* @__PURE__ */ qt(bc()), u = /* @__PURE__ */ qt(bc()), d = /* @__PURE__ */ qt(bc()), f = /* @__PURE__ */ qt(bc()), p = /* @__PURE__ */ qt(bc()), m = /* @__PURE__ */ qt(bc()), h = /* @__PURE__ */ qt(bc()), g = /* @__PURE__ */ new Map(), _, v = rs(() => new yc(e.value)), y = rs(() => !!n.value && !r.value), b = {
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
	}, x = {
		resources: s,
		roles: c,
		profiles: l,
		administrators: u,
		roleAssignments: d,
		profileAssignments: f
	}, S = (e, n, r) => `${t.value}:${e}:${n}:${r}`;
	function C() {
		g.clear(), n.value = void 0;
		for (let e of Object.values(x)) Object.assign(e, bc(), { limit: e.limit });
		Object.assign(p, bc()), Object.assign(m, bc()), Object.assign(h, bc());
	}
	async function w() {
		_?.abort(), _ = new AbortController(), r.value = !0, i.value = "";
		try {
			let e = await v.value.resolveApplicationId(_.signal);
			t.value = e, n.value = await v.value.getSummary(e, _.signal);
		} catch (e) {
			jc(e) || (i.value = Mc(e));
		} finally {
			r.value = !1;
		}
	}
	async function T(e, n = x[e].page, r = !1) {
		if (!t.value) return;
		let i = x[e], a = S(e, n, i.limit);
		i.abortController?.abort(), i.error = null;
		let o = !r && g.get(a);
		if (o) {
			Ac(i, o);
			return;
		}
		let s = new AbortController();
		i.abortController = s, i.loading = !0;
		try {
			let r = await b[e](v.value, t.value, n, i.limit, s.signal);
			if (i.abortController !== s) return;
			g.set(a, r), Ac(i, r);
		} catch (e) {
			!jc(e) && i.abortController === s && (i.error = Mc(e));
		} finally {
			i.abortController === s && (i.loading = !1);
		}
	}
	async function E(e, n = 0) {
		if (!t.value || !e.trim()) {
			Object.assign(p, bc());
			return;
		}
		p.abortController?.abort();
		let r = new AbortController();
		p.abortController = r, p.loading = !0, p.error = null;
		try {
			let i = await v.value.searchUsers(t.value, e.trim(), {
				page: n,
				size: p.limit
			}, r.signal);
			if (p.abortController !== r) return;
			Ac(p, i);
		} catch (e) {
			jc(e) || (p.error = Mc(e));
		} finally {
			p.abortController === r && (p.loading = !1);
		}
	}
	async function D(e, n = m.page, r = !1) {
		return O("role-resources", e, m, (r) => v.value.getRoleResources(t.value, e, {
			page: n,
			size: m.limit
		}, r), n, r);
	}
	async function ee(e, n = h.page, r = !1) {
		return O("profile-roles", e, h, (r) => v.value.getProfileRoles(t.value, e, {
			page: n,
			size: h.limit
		}, r), n, r);
	}
	async function O(e, n, r, i, a, o) {
		if (!t.value) return;
		let s = `${t.value}:${n}:${e}:${a}:${r.limit}`;
		r.abortController?.abort(), r.error = null;
		let c = o ? void 0 : g.get(s);
		if (c) {
			Ac(r, c);
			return;
		}
		let l = new AbortController();
		r.abortController = l, r.loading = !0;
		try {
			let e = await i(l.signal);
			if (r.abortController !== l) return;
			g.set(s, e), Ac(r, e);
		} catch (e) {
			!jc(e) && r.abortController === l && (r.error = Mc(e));
		} finally {
			r.abortController === l && (r.loading = !1);
		}
	}
	function te(...e) {
		for (let r of e) {
			if (r === "summary") {
				n.value = void 0;
				continue;
			}
			for (let e of g.keys()) e.startsWith(`${t.value}:${r}:`) && g.delete(e);
			x[r].loaded = !1;
		}
	}
	function k(e, n) {
		for (let r of g.keys()) r.startsWith(`${t.value}:${n}:${e}:`) && g.delete(r);
	}
	async function ne() {
		C(), await w();
	}
	function re(e) {
		return e ? o.has(e) : o.size > 0;
	}
	async function A(e, n, r = "global", s = !1) {
		if (!t.value || o.has(r)) return !1;
		o.add(r), a.value = !0, i.value = "";
		try {
			await e(v.value, t.value), te(...n);
			let r = n.filter((e) => e !== "summary");
			return await Promise.all(r.map((e) => T(e, x[e].page, !0))), s && await Promise.all(r.filter((e) => x[e].page > 0 && x[e].content.length === 0).map((e) => T(e, x[e].page - 1, !0))), n.includes("summary") && await w(), !0;
		} catch (e) {
			return i.value = Mc(e), !1;
		} finally {
			o.delete(r), a.value = o.size > 0;
		}
	}
	return Rr(e, () => {
		C(), w();
	}, {
		immediate: !0,
		deep: !0
	}), Fe(() => {
		_?.abort();
		for (let e of Object.values(x)) e.abortController?.abort();
		p.abortController?.abort(), m.abortController?.abort(), h.abortController?.abort();
	}), {
		applicationId: t,
		summary: n,
		summaryLoading: r,
		loading: r,
		saving: a,
		mutations: o,
		isMutating: re,
		error: i,
		ready: y,
		resources: s,
		roles: c,
		profiles: l,
		administrators: u,
		roleAssignments: d,
		profileAssignments: f,
		roleResources: m,
		profileRoles: h,
		users: p,
		load: T,
		loadSummary: w,
		loadRoleResources: D,
		loadProfileRoles: ee,
		searchUsers: E,
		refresh: ne,
		mutate: A,
		invalidate: te,
		invalidateRelation: k
	};
}
function Sc(e) {
	return {
		summary: e.summary,
		loading: e.summaryLoading,
		load: e.loadSummary
	};
}
function Cc(e) {
	return e.resources;
}
function wc(e) {
	return e.roles;
}
function Tc(e) {
	return e.profiles;
}
function Ec(e) {
	return e.administrators;
}
function Dc(e) {
	return e.roleAssignments;
}
function Oc(e) {
	return e.profileAssignments;
}
function kc(e) {
	return {
		state: e.users,
		search: e.searchUsers
	};
}
function Ac(e, t) {
	e.content = t.content, e.total = t.total, e.page = t.page, e.limit = t.limit, e.loaded = !0;
}
function jc(e) {
	return e instanceof DOMException && e.name === "AbortError";
}
function Mc(e) {
	return e instanceof Error ? e.message : "No fue posible cargar la seguridad.";
}
//#endregion
//#region src/components/ConfirmDangerDialog.vue?vue&type=script&setup=true&lang.ts
var Nc = {
	class: "dialog",
	role: "alertdialog",
	"aria-modal": "true",
	"aria-labelledby": "confirm-title"
}, Pc = { class: "sub" }, Fc = { class: "actions bottom" }, Ic = ["disabled"], Lc = ["disabled"], Rc = /* @__PURE__ */ Jr({
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
			onClick: n[2] ||= cc((e) => t.$emit("cancel"), ["self"])
		}, [Y("div", Nc, [
			n[3] ||= Y("h3", { id: "confirm-title" }, "Confirmar acción destructiva", -1),
			Y("p", Pc, M(e.message), 1),
			Y("div", Fc, [Y("button", {
				class: "quiet",
				disabled: e.busy,
				onClick: n[0] ||= (e) => t.$emit("cancel")
			}, " Cancelar ", 8, Ic), Y("button", {
				"data-testid": "confirm-danger",
				class: "primary danger",
				disabled: e.busy,
				onClick: n[1] ||= (e) => t.$emit("confirm")
			}, " Confirmar ", 8, Lc)])
		])])) : Q("", !0);
	}
}), zc = ["aria-label"], Bc = ["disabled"], Vc = ["disabled"], Hc = /* @__PURE__ */ Jr({
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
			}, " Anterior ", 8, Bc),
			Y("span", null, "Página " + M(e.page + 1) + " de " + M(Math.ceil(e.total / e.limit)), 1),
			Y("button", {
				class: "quiet",
				disabled: (e.page + 1) * e.limit >= e.total || e.loading,
				onClick: n[1] ||= (e) => t.$emit("next")
			}, " Siguiente ", 8, Vc)
		], 8, zc)) : Q("", !0);
	}
}), Uc = {
	key: 0,
	class: "empty"
}, Wc = {
	key: 1,
	class: "stats"
}, Gc = /* @__PURE__ */ Jr({
	__name: "SecuritySummaryPanel",
	props: {
		summary: {},
		loading: { type: Boolean },
		assignmentCount: {}
	},
	setup(e) {
		return (t, n) => e.loading ? (q(), J("p", Uc, "Consultando políticas de seguridad…")) : e.summary ? (q(), J("div", Wc, [(q(!0), J(G, null, bi([
			[e.summary.counts.administrators, "administradores"],
			[e.assignmentCount, "asignaciones"],
			[e.summary.counts.roles, "roles"],
			[e.summary.counts.resources, "recursos"]
		], (e) => (q(), J("div", {
			key: e[1],
			class: "stat"
		}, [Y("b", null, M(e[0]), 1), Y("small", null, M(e[1]), 1)]))), 128))])) : Q("", !0);
	}
}), Kc = ["aria-busy"], qc = {
	key: 0,
	class: "empty"
}, Jc = {
	key: 1,
	class: "error"
}, Yc = { class: "method" }, Xc = { class: "grow" }, Zc = ["disabled", "onClick"], Qc = ["disabled", "onClick"], $c = {
	key: 2,
	class: "empty"
}, el = /* @__PURE__ */ Jr({
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
		return (t, r) => (q(), J(G, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", qc, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", Jc, M(e.state.error), 1)) : Q("", !0),
			(q(!0), J(G, null, bi(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("span", Yc, M(t.method), 1),
				Y("div", Xc, [Y("strong", null, M(t.path), 1), r[2] ||= Y("small", null, "Recurso protegido", -1)]),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, Zc),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, Qc)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", $c, "No hay datos en esta página.")) : Q("", !0)
		], 8, Kc), X(Hc, {
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
}), tl = ["aria-busy"], nl = {
	key: 0,
	class: "empty"
}, rl = {
	key: 1,
	class: "error"
}, il = { class: "grow" }, al = ["disabled", "onClick"], ol = ["disabled", "onClick"], sl = ["disabled", "onClick"], cl = {
	key: 2,
	class: "empty"
}, ll = /* @__PURE__ */ Jr({
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
		let n = t;
		return (t, r) => (q(), J(G, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", nl, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", rl, M(e.state.error), 1)) : Q("", !0),
			(q(!0), J(G, null, bi(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", il, [Y("strong", null, M(t.name), 1), Y("small", null, M(t.resourceCount ?? 0) + " recursos autorizados", 1)]),
				r[2] ||= Y("span", { class: "pill" }, "Aplicación", -1),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("manage", t)
				}, "Administrar recursos", 8, al),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, ol),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, sl)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", cl, "No hay datos en esta página.")) : Q("", !0)
		], 8, tl), X(Hc, {
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
}), ul = ["aria-busy"], dl = {
	key: 0,
	class: "empty"
}, fl = {
	key: 1,
	class: "error"
}, pl = { class: "grow" }, ml = ["disabled", "onClick"], hl = ["disabled", "onClick"], gl = ["disabled", "onClick"], _l = {
	key: 2,
	class: "empty"
}, vl = /* @__PURE__ */ Jr({
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
		return (t, r) => (q(), J(G, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", dl, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", fl, M(e.state.error), 1)) : Q("", !0),
			(q(!0), J(G, null, bi(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", pl, [Y("strong", null, M(t.name), 1), Y("small", null, M(t.roleCount ?? 0) + " roles agrupados", 1)]),
				r[2] ||= Y("span", { class: "pill" }, "Aplicación", -1),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("manage", t)
				}, "Administrar roles", 8, ml),
				Y("button", {
					class: "quiet",
					disabled: e.busy,
					onClick: (e) => n("edit", t)
				}, "Editar", 8, hl),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("remove", t)
				}, "Eliminar", 8, gl)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", _l, "No hay datos en esta página.")) : Q("", !0)
		], 8, ul), X(Hc, {
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
}), yl = ["aria-busy"], bl = {
	key: 0,
	class: "empty"
}, xl = {
	key: 1,
	class: "error"
}, Sl = { class: "grow" }, Cl = ["disabled", "onClick"], wl = {
	key: 2,
	class: "empty"
}, Tl = /* @__PURE__ */ Jr({
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
		return (t, i) => (q(), J(G, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", bl, "Actualizando página…")) : Q("", !0),
			e.state.error ? (q(), J("p", xl, M(e.state.error), 1)) : Q("", !0),
			(q(!0), J(G, null, bi(e.state.content, (t) => (q(), J("div", {
				key: t.userId,
				class: "row"
			}, [Y("div", Sl, [Y("strong", null, M(t.userId), 1), Y("small", null, "desde " + M(r(t.validFrom)), 1)]), Y("button", {
				class: "quiet danger",
				disabled: e.busy,
				onClick: (e) => n("remove", t.userId)
			}, "Retirar", 8, Cl)]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", wl, "No hay datos en esta página.")) : Q("", !0)
		], 8, yl), X(Hc, {
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
}), El = ["aria-busy", "aria-label"], Dl = {
	key: 0,
	class: "empty"
}, Ol = {
	key: 1,
	class: "error"
}, kl = { class: "grow" }, Al = ["disabled", "onClick"], jl = {
	key: 2,
	class: "empty"
}, Ml = /* @__PURE__ */ Jr({
	__name: "AssignmentList",
	props: {
		state: {},
		kind: {},
		busy: { type: Boolean }
	},
	emits: [
		"revoke",
		"previous",
		"next"
	],
	setup(e, { emit: t }) {
		let n = t;
		function r(e) {
			return new Intl.DateTimeFormat(void 0, { dateStyle: "medium" }).format(new Date(e));
		}
		function i(e) {
			return "roleId" in e ? e.roleId : e.profileId;
		}
		return (t, a) => (q(), J(G, null, [Y("section", {
			class: "panel",
			"aria-busy": e.state.loading,
			"aria-label": `Asignaciones de ${e.kind === "role" ? "roles" : "perfiles"}`
		}, [
			e.state.loading ? (q(), J("p", Dl, "Actualizando asignaciones…")) : Q("", !0),
			e.state.error ? (q(), J("p", Ol, M(e.state.error), 1)) : Q("", !0),
			(q(!0), J(G, null, bi(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", kl, [Y("strong", null, M(t.userId), 1), Y("small", null, M(e.kind === "role" ? "Rol" : "Perfil") + " · " + M(i(t)) + " · desde " + M(r(t.validFrom)), 1)]),
				a[2] ||= Y("span", { class: "pill" }, "Vigente", -1),
				Y("button", {
					class: "quiet danger",
					disabled: e.busy,
					onClick: (e) => n("revoke", t)
				}, "Revocar", 8, Al)
			]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", jl, "No hay asignaciones vigentes.")) : Q("", !0)
		], 8, El), X(Hc, {
			page: e.state.page,
			limit: e.state.limit,
			total: e.state.total,
			loading: e.state.loading,
			label: `Paginación de asignaciones de ${e.kind === "role" ? "roles" : "perfiles"}`,
			onPrevious: a[0] ||= (e) => n("previous"),
			onNext: a[1] ||= (e) => n("next")
		}, null, 8, [
			"page",
			"limit",
			"total",
			"loading",
			"label"
		])], 64));
	}
}), Nl = { class: "chip" }, Pl = { class: "grid" }, Fl = { "aria-label": "Secciones de seguridad" }, Il = ["aria-current", "onClick"], Ll = { class: "title" }, Rl = { class: "actions" }, zl = ["disabled"], Bl = ["disabled"], Vl = {
	key: 0,
	class: "error"
}, Hl = ["value"], Ul = { key: 3 }, Wl = ["value"], Gl = ["value"], Kl = ["value"], ql = ["aria-busy"], Jl = { class: "grow" }, Yl = ["disabled", "onClick"], Xl = {
	key: 0,
	class: "empty"
}, Zl = { id: "security-users" }, Ql = ["value"], $l = { class: "actions bottom" }, eu = ["disabled"], tu = ["disabled"], nu = /* @__PURE__ */ Jr({
	__name: "SecurityAdministration",
	props: { options: {} },
	setup(e, { expose: t }) {
		let n = e, r = xc(/* @__PURE__ */ pn(n, "options")), { summary: i, loading: a } = Sc(r), o = Cc(r), s = wc(r), c = Tc(r), l = Ec(r), u = Dc(r), d = Oc(r), { state: f, search: p } = kc(r), { saving: m, error: h, ready: g, load: _, refresh: v, mutate: y, roleResources: b, profileRoles: x, loadRoleResources: S, loadProfileRoles: C, invalidateRelation: w } = r;
		t({ refresh: v });
		let T = /* @__PURE__ */ an("summary"), E = /* @__PURE__ */ an(null), D = /* @__PURE__ */ an(), ee = /* @__PURE__ */ an(), O = /* @__PURE__ */ an({
			userId: "",
			userQuery: "",
			description: "",
			baseUrl: "",
			path: "",
			method: "GET",
			name: "",
			targetId: "",
			accessKind: "role"
		}), te = [
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
		], k = {
			summary: "Resumen de seguridad",
			people: "Personas y asignaciones",
			roles: "Roles de aplicación",
			profiles: "Perfiles de acceso",
			resources: "Recursos protegidos",
			admins: "Administradores"
		}, ne = {
			summary: "Configurar accesos",
			people: "Asignar acceso",
			roles: "Definir rol",
			profiles: "Definir perfil",
			resources: "Registrar recurso",
			admins: "Agregar administrador"
		}, re = rs(() => ({
			people: (i.value?.counts.roleAssignments ?? 0) + (i.value?.counts.profileAssignments ?? 0),
			roles: i.value?.counts.roles ?? 0,
			profiles: i.value?.counts.profiles ?? 0,
			resources: i.value?.counts.resources ?? 0,
			admins: i.value?.counts.administrators ?? 0
		})), A = rs(() => T.value === "summary" && n.options.allowApplicationLifecycleManagement ? "Editar aplicación" : ne[T.value]), ie = rs(() => ({
			roles: s,
			profiles: c,
			resources: o,
			admins: l
		})[T.value]), ae = rs(() => ({
			"--accent": n.options.theme?.accent ?? "#295181",
			"--font": n.options.theme?.fontFamily ?? "Inter, system-ui, sans-serif",
			"--radius": n.options.theme?.radius ?? "14px"
		}));
		Rr(T, (e) => {
			if (e === "people") {
				_("roleAssignments"), _("profileAssignments");
				return;
			}
			let t = {
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[e];
			t && _(t);
		}, { immediate: !0 }), Rr(() => O.value.accessKind, (e) => {
			E.value === "access" && _(e === "role" ? "roles" : "profiles");
		});
		function j(e, t) {
			E.value = e ?? (T.value === "summary" ? n.options.allowApplicationLifecycleManagement ? "application" : "access" : T.value === "people" ? "access" : T.value === "roles" ? "role" : T.value === "profiles" ? "profile" : T.value === "resources" ? "resource" : "admin"), D.value = t, O.value = {
				userId: "",
				userQuery: "",
				description: "",
				baseUrl: "",
				path: "",
				method: "GET",
				name: "",
				targetId: "",
				accessKind: "role"
			}, t && "path" in t && (O.value.path = t.path, O.value.method = t.method), t && "name" in t && (O.value.name = t.name), E.value === "application" && i.value && (O.value.name = i.value.application.name, O.value.description = i.value.application.description ?? "", O.value.baseUrl = i.value.application.baseUrl ?? ""), (E.value === "admin" || E.value === "access") && p(""), (E.value === "access" || E.value === "profile-role") && _("roles"), E.value === "role-resource" && _("resources"), t && E.value === "role-resource" && S(t.id), t && E.value === "profile-role" && C(t.id);
		}
		function oe() {
			E.value = null, D.value = void 0;
		}
		async function se() {
			let e = O.value, t = E.value;
			if (!t || t === "confirm") return;
			let n = !!D.value, r = t === "application" ? ["summary"] : t === "admin" ? ["administrators", "summary"] : t === "resource" ? ["resources", "summary"] : t === "role" ? ["roles", "summary"] : t === "profile" ? ["profiles", "summary"] : t === "access" ? [e.accessKind === "role" ? "roleAssignments" : "profileAssignments", "summary"] : t === "role-resource" ? ["roles"] : ["profiles"];
			await y((r, i) => t === "application" ? r.updateApplication(i, {
				name: e.name,
				description: e.description,
				baseUrl: e.baseUrl
			}) : t === "admin" ? r.addAdministrator(i, e.userId) : t === "resource" ? n ? r.updateResource(i, D.value.id, {
				path: e.path,
				method: e.method
			}) : r.createResource(i, {
				path: e.path,
				method: e.method
			}) : t === "role" ? n ? r.updateRole(D.value.id, { name: e.name }) : r.createRole(i, e.name) : t === "profile" ? n ? r.updateProfile(D.value.id, { name: e.name }) : r.createProfile(i, e.name) : t === "access" ? r.assignAccess(i, e.accessKind, e.targetId, e.userId) : t === "role-resource" ? r.linkRoleResource(D.value.id, e.targetId) : r.linkProfileRole(D.value.id, e.targetId), [...r], `${t}:${D.value?.id ?? e.userId}`) && oe();
		}
		function le(e, t) {
			ue.value = e, ee.value = t, E.value = "confirm";
		}
		let ue = /* @__PURE__ */ an("");
		async function de() {
			let e = ee.value;
			(!e || await e()) && oe();
		}
		function fe(e) {
			le("Retirar este administrador puede dejar la aplicación sin administración. El PDP impedirá retirar el último administrador.", async () => y((t, n) => t.removeAdministrator(n, e), ["administrators", "summary"], `admin:${e}`, !0));
		}
		function pe(e) {
			le("Eliminar este recurso revoca su protección y puede estar bloqueado si tiene dependencias.", async () => y((t, n) => t.deleteResource(n, e), ["resources", "summary"], `resource:${e}`, !0));
		}
		function me(e) {
			le("Eliminar este rol requiere que no tenga perfiles ni asignaciones dependientes.", async () => y((t) => t.deleteRole(e), ["roles", "summary"], `role:${e}`, !0));
		}
		function he(e) {
			le("Eliminar este perfil requiere que no tenga asignaciones dependientes.", async () => y((t) => t.deleteProfile(e), ["profiles", "summary"], `profile:${e}`, !0));
		}
		function ge(e) {
			le("Revocar este acceso retira el permiso vigente del usuario.", async () => y((t) => e.roleId ? t.revokeRoleAssignment(e.roleId, e.id) : t.revokeProfileAssignment(e.profileId, e.id), [e.roleId ? "roleAssignments" : "profileAssignments", "summary"], `assignment:${e.id}`, !0));
		}
		function _e(e) {
			let t = D.value.id;
			le("Retirar este recurso elimina el permiso que este rol concede sobre él.", async () => {
				let n = await y((n) => n.unlinkRoleResource(t, e), ["roles"], `role-resource:${t}:${e}`);
				return n && (w("role-resources", t), await S(t, b.page, !0), b.page > 0 && !b.content.length && await S(t, b.page - 1, !0)), n;
			});
		}
		function ve(e) {
			let t = D.value.id;
			le("Retirar este rol cambia los permisos heredados por este perfil.", async () => {
				let n = await y((n) => n.unlinkProfileRole(t, e), ["profiles"], `profile-role:${t}:${e}`);
				return n && (w("profile-roles", t), await C(t, x.page, !0), x.page > 0 && !x.content.length && await C(t, x.page - 1, !0)), n;
			});
		}
		function ye(e) {
			if (!D.value) return;
			let t = E.value === "role-resource" ? b : x, n = t.page + e;
			n < 0 || n * t.limit >= t.total || (E.value === "role-resource" ? S(D.value.id, n) : E.value === "profile-role" && C(D.value.id, n));
		}
		function be() {
			let e = ie.value;
			e && (e.page + 1) * e.limit < e.total && _({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[T.value], e.page + 1);
		}
		function xe() {
			let e = ie.value;
			e && e.page > 0 && _({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[T.value], e.page - 1);
		}
		function Se(e, t) {
			let n = e === "roleAssignments" ? u : d, r = n.page + t;
			r >= 0 && r * n.limit < n.total && _(e, r);
		}
		return (t, n) => (q(), J("section", {
			class: "shell",
			style: ce(ae.value),
			"aria-live": "polite"
		}, [
			Y("header", null, [n[31] ||= Y("div", null, [
				Y("p", { class: "eyebrow" }, "Seguridad · aplicación actual"),
				Y("h2", null, "Control de acceso"),
				Y("p", null, "La información y las acciones están acotadas a esta aplicación.")
			], -1), Y("span", Nl, M(z(i)?.application.name ?? e.options.applicationName ?? "Cargando"), 1)]),
			Y("div", Pl, [Y("nav", Fl, [(q(), J(G, null, bi(te, (e) => Y("button", {
				key: e.id,
				"aria-current": T.value === e.id,
				onClick: (t) => T.value = e.id
			}, [Z(M(e.label), 1), e.id === "summary" ? Q("", !0) : (q(), J(G, { key: 0 }, [Z(" · " + M(re.value[e.id]), 1)], 64))], 8, Il)), 64))]), Y("main", null, [
				Y("div", Ll, [Y("div", null, [Y("h3", null, M(k[T.value]), 1), n[32] ||= Y("p", { class: "sub" }, "Alcance exclusivo de la aplicación abierta.", -1)]), Y("div", Rl, [Y("button", {
					class: "quiet",
					disabled: z(a) || z(m),
					onClick: n[0] ||= (...e) => z(v) && z(v)(...e)
				}, " Actualizar", 8, zl), Y("button", {
					class: "primary",
					disabled: !z(g) || z(m),
					onClick: n[1] ||= (e) => j()
				}, M(A.value), 9, Bl)])]),
				z(h) ? (q(), J("p", Vl, M(z(h)), 1)) : Q("", !0),
				T.value === "summary" ? (q(), ho(Gc, {
					key: 1,
					summary: z(i),
					loading: z(a),
					"assignment-count": re.value.people
				}, null, 8, [
					"summary",
					"loading",
					"assignment-count"
				])) : T.value === "people" ? (q(), J(G, { key: 2 }, [X(Ml, {
					state: z(u),
					kind: "role",
					busy: z(m),
					onRevoke: ge,
					onPrevious: n[2] ||= (e) => Se("roleAssignments", -1),
					onNext: n[3] ||= (e) => Se("roleAssignments", 1)
				}, null, 8, ["state", "busy"]), X(Ml, {
					state: z(d),
					kind: "profile",
					busy: z(m),
					onRevoke: ge,
					onPrevious: n[4] ||= (e) => Se("profileAssignments", -1),
					onNext: n[5] ||= (e) => Se("profileAssignments", 1)
				}, null, 8, ["state", "busy"])], 64)) : (q(), J(G, { key: 3 }, [T.value === "resources" ? (q(), ho(el, {
					key: 0,
					state: z(o),
					busy: z(m),
					onEdit: n[6] ||= (e) => j("resource", e),
					onRemove: n[7] ||= (e) => pe(e.id),
					onPrevious: xe,
					onNext: be
				}, null, 8, ["state", "busy"])) : T.value === "roles" ? (q(), ho(ll, {
					key: 1,
					state: z(s),
					busy: z(m),
					onManage: n[8] ||= (e) => j("role-resource", e),
					onEdit: n[9] ||= (e) => j("role", e),
					onRemove: n[10] ||= (e) => me(e.id),
					onPrevious: xe,
					onNext: be
				}, null, 8, ["state", "busy"])) : T.value === "profiles" ? (q(), ho(vl, {
					key: 2,
					state: z(c),
					busy: z(m),
					onManage: n[11] ||= (e) => j("profile-role", e),
					onEdit: n[12] ||= (e) => j("profile", e),
					onRemove: n[13] ||= (e) => he(e.id),
					onPrevious: xe,
					onNext: be
				}, null, 8, ["state", "busy"])) : (q(), ho(Tl, {
					key: 3,
					state: z(l),
					busy: z(m),
					onRemove: fe,
					onPrevious: xe,
					onNext: be
				}, null, 8, ["state", "busy"]))], 64))
			])]),
			E.value ? (q(), J("div", {
				key: 0,
				class: "backdrop",
				onClick: cc(oe, ["self"])
			}, [E.value === "confirm" ? (q(), ho(Rc, {
				key: 1,
				open: !0,
				message: ue.value,
				busy: z(m),
				onCancel: oe,
				onConfirm: de
			}, null, 8, ["message", "busy"])) : (q(), J("form", {
				key: 0,
				class: "dialog",
				onSubmit: cc(se, ["prevent"])
			}, [
				Y("h3", null, M(E.value === "role-resource" ? "Administrar recursos del rol" : E.value === "profile-role" ? "Administrar roles del perfil" : ne[T.value]), 1),
				n[52] ||= Y("p", { class: "sub" }, "La acción se aplica solo a esta aplicación.", -1),
				E.value === "admin" ? (q(), J(G, { key: 0 }, [Y("label", null, [n[33] ||= Z("Buscar usuario", -1), Mr(Y("input", {
					"onUpdate:modelValue": n[14] ||= (e) => O.value.userQuery = e,
					placeholder: "Nombre o correo",
					onInput: n[15] ||= (e) => z(p)(O.value.userQuery)
				}, null, 544), [[
					tc,
					O.value.userQuery,
					void 0,
					{ trim: !0 }
				]])]), Y("label", null, [n[35] ||= Z("Usuario", -1), Mr(Y("select", {
					"onUpdate:modelValue": n[16] ||= (e) => O.value.userId = e,
					required: ""
				}, [n[34] ||= Y("option", {
					disabled: "",
					value: ""
				}, "Seleccione una coincidencia", -1), (q(!0), J(G, null, bi(z(f).content, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, M(e.name || e.email) + " · " + M(e.email), 9, Hl))), 128))], 512), [[nc, O.value.userId]])])], 64)) : E.value === "application" ? (q(), J(G, { key: 1 }, [
					Y("label", null, [n[36] ||= Z("Nombre", -1), Mr(Y("input", {
						"onUpdate:modelValue": n[17] ||= (e) => O.value.name = e,
						required: ""
					}, null, 512), [[
						tc,
						O.value.name,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[37] ||= Z("Descripción", -1), Mr(Y("textarea", { "onUpdate:modelValue": n[18] ||= (e) => O.value.description = e }, null, 512), [[
						tc,
						O.value.description,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[38] ||= Z("URL base", -1), Mr(Y("input", {
						"onUpdate:modelValue": n[19] ||= (e) => O.value.baseUrl = e,
						type: "url"
					}, null, 512), [[
						tc,
						O.value.baseUrl,
						void 0,
						{ trim: !0 }
					]])])
				], 64)) : E.value === "resource" ? (q(), J(G, { key: 2 }, [Y("label", null, [n[39] ||= Z("Ruta", -1), Mr(Y("input", {
					"onUpdate:modelValue": n[20] ||= (e) => O.value.path = e,
					placeholder: "/api/v1/notas",
					required: ""
				}, null, 512), [[
					tc,
					O.value.path,
					void 0,
					{ trim: !0 }
				]])]), Y("label", null, [n[41] ||= Z("Método", -1), Mr(Y("select", { "onUpdate:modelValue": n[21] ||= (e) => O.value.method = e }, [...n[40] ||= [
					Y("option", null, "GET", -1),
					Y("option", null, "POST", -1),
					Y("option", null, "PUT", -1),
					Y("option", null, "PATCH", -1),
					Y("option", null, "DELETE", -1)
				]], 512), [[nc, O.value.method]])])], 64)) : E.value === "role" || E.value === "profile" ? (q(), J("label", Ul, [n[42] ||= Z("Nombre", -1), Mr(Y("input", {
					"onUpdate:modelValue": n[22] ||= (e) => O.value.name = e,
					required: ""
				}, null, 512), [[
					tc,
					O.value.name,
					void 0,
					{ trim: !0 }
				]])])) : E.value === "access" ? (q(), J(G, { key: 4 }, [
					Y("label", null, [n[43] ||= Z("Buscar usuario", -1), Mr(Y("input", {
						"onUpdate:modelValue": n[23] ||= (e) => O.value.userQuery = e,
						placeholder: "Nombre o correo",
						onInput: n[24] ||= (e) => z(p)(O.value.userQuery)
					}, null, 544), [[
						tc,
						O.value.userQuery,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[45] ||= Z("Usuario", -1), Mr(Y("select", {
						"onUpdate:modelValue": n[25] ||= (e) => O.value.userId = e,
						required: ""
					}, [n[44] ||= Y("option", {
						disabled: "",
						value: ""
					}, "Seleccione una coincidencia", -1), (q(!0), J(G, null, bi(z(f).content, (e) => (q(), J("option", {
						key: e.id,
						value: e.id
					}, M(e.name || e.email) + " · " + M(e.email), 9, Wl))), 128))], 512), [[nc, O.value.userId]])]),
					Y("label", null, [n[47] ||= Z("Tipo", -1), Mr(Y("select", { "onUpdate:modelValue": n[26] ||= (e) => O.value.accessKind = e }, [...n[46] ||= [Y("option", { value: "role" }, "Rol", -1), Y("option", { value: "profile" }, "Perfil", -1)]], 512), [[nc, O.value.accessKind]])]),
					Y("label", null, [n[49] ||= Z("Acceso", -1), Mr(Y("select", {
						"onUpdate:modelValue": n[27] ||= (e) => O.value.targetId = e,
						required: ""
					}, [n[48] ||= Y("option", {
						disabled: "",
						value: ""
					}, "Seleccione un acceso", -1), (q(!0), J(G, null, bi(O.value.accessKind === "role" ? z(s).content : z(c).content, (e) => (q(), J("option", {
						key: e.id,
						value: e.id
					}, M(e.name), 9, Gl))), 128))], 512), [[nc, O.value.targetId]])])
				], 64)) : (q(), J(G, { key: 5 }, [Y("label", null, [Z(M(E.value === "role-resource" ? "Agregar recurso" : "Agregar rol"), 1), Mr(Y("select", {
					"onUpdate:modelValue": n[28] ||= (e) => O.value.targetId = e,
					required: ""
				}, [n[50] ||= Y("option", {
					disabled: "",
					value: ""
				}, "Seleccione una opción", -1), (q(!0), J(G, null, bi(E.value === "role-resource" ? z(o).content : z(s).content, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, M("path" in e ? `${e.method} · ${e.path}` : e.name), 9, Kl))), 128))], 512), [[nc, O.value.targetId]])]), Y("div", {
					class: "relation-list",
					"aria-busy": E.value === "role-resource" ? z(b).loading : z(x).loading
				}, [
					n[51] ||= Y("p", { class: "sub" }, "Relaciones vigentes", -1),
					(q(!0), J(G, null, bi(E.value === "role-resource" ? z(b).content : z(x).content, (e) => (q(), J("div", {
						key: e.id,
						class: "row"
					}, [Y("div", Jl, [Y("strong", null, M("path" in e ? `${e.method} · ${e.path}` : e.name), 1)]), Y("button", {
						class: "quiet danger",
						type: "button",
						disabled: z(m),
						onClick: (t) => E.value === "role-resource" ? _e(e.id) : ve(e.id)
					}, " Retirar ", 8, Yl)]))), 128)),
					(E.value === "role-resource" ? z(b).content : z(x).content).length ? Q("", !0) : (q(), J("p", Xl, " No hay relaciones en esta página. ")),
					X(Hc, {
						page: E.value === "role-resource" ? z(b).page : z(x).page,
						limit: E.value === "role-resource" ? z(b).limit : z(x).limit,
						total: E.value === "role-resource" ? z(b).total : z(x).total,
						loading: E.value === "role-resource" ? z(b).loading : z(x).loading,
						label: "Paginación de relaciones",
						onPrevious: n[29] ||= (e) => ye(-1),
						onNext: n[30] ||= (e) => ye(1)
					}, null, 8, [
						"page",
						"limit",
						"total",
						"loading"
					])
				], 8, ql)], 64)),
				Y("datalist", Zl, [(q(!0), J(G, null, bi(z(f).content, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, M(e.name || e.email), 9, Ql))), 128))]),
				Y("div", $l, [Y("button", {
					class: "quiet",
					type: "button",
					disabled: z(m),
					onClick: oe
				}, " Cancelar", 8, eu), Y("button", {
					class: "primary",
					disabled: z(m)
				}, M(z(m) ? "Guardando…" : "Guardar"), 9, tu)])
			], 32))])) : Q("", !0)
		], 4));
	}
}), ru = ":host{all:initial;display:block}*{box-sizing:border-box}.shell{font-family:var(--font);color:#17263c;--line:#dce5df;border:1px solid var(--line);border-radius:var(--radius);background:#fffdfa;overflow:hidden;box-shadow:0 18px 42px #18321b14}header{border-bottom:1px solid var(--line);justify-content:space-between;gap:18px;padding:27px 30px 20px;display:flex}.eyebrow{color:#9a6c32;letter-spacing:.1em;text-transform:uppercase;margin:0 0 7px;font:700 12px ui-monospace,monospace}h2{letter-spacing:-.03em;margin:0;font:700 28px Georgia,serif}h3{margin:0;font-size:19px}header p:last-child,.sub,small{color:#66776c;font-size:13px}.chip,.pill{color:#287045;background:#edf4ef;border-radius:999px;padding:5px 9px;font-size:11px;font-weight:700}.chip{height:max-content;color:var(--accent);background:#f2f6fb}.grid{grid-template-columns:190px 1fr;min-height:470px;display:grid}nav{border-right:1px solid var(--line);background:#fafbf8;padding:12px}nav button{text-align:left;color:#486053;cursor:pointer;background:0 0;border:0;border-radius:8px;width:100%;padding:10px;font:600 13px inherit}nav button[aria-current=true]{color:#183c2a;background:#e8f0eb}main{padding:25px 30px}.title,.actions,.row{align-items:center;gap:10px;display:flex}.title{justify-content:space-between;margin-bottom:18px}.actions{flex-wrap:wrap;justify-content:end}button{cursor:pointer}button:disabled{cursor:wait;opacity:.62}.primary,.quiet{border:0;border-radius:8px;padding:9px 12px;font:700 12px inherit}.primary{background:var(--accent);color:#fff}.quiet{color:#29523c;background:#edf3ed}.danger{color:#96332c;background:#fff2f0}.stats{grid-template-columns:repeat(4,1fr);gap:10px;display:grid}.stat,.panel{border:1px solid var(--line);background:#fff;border-radius:10px}.stat{padding:15px}.stat b{color:var(--accent);font:700 25px Georgia,serif;display:block}.panel{margin-top:20px;overflow:hidden}.row{border-bottom:1px solid #edf1ee;padding:13px 15px}.row:last-child{border:0}.grow{flex:1;min-width:0}.grow strong{font-size:13px;display:block}.method{color:#265482;min-width:54px;font:700 11px ui-monospace,monospace}.empty{color:#66776c;text-align:center;padding:25px;font-size:13px}.error{color:#96332c;background:#fff2f0;border-left:3px solid #b7473d;padding:11px;font-size:13px}.backdrop{z-index:1;background:#17263c66;place-items:center;padding:16px;display:grid;position:fixed;inset:0}.dialog{background:#fff;border-radius:14px;width:min(460px,100%);padding:23px;box-shadow:0 25px 70px #0005}label{gap:6px;margin-top:12px;font-size:12px;font-weight:700;display:grid}input,select,textarea{border:1px solid #cad8d0;border-radius:8px;width:100%;padding:10px;font:13px inherit}textarea{resize:vertical;min-height:72px}.bottom{margin-top:20px}@media (width<=700px){header{padding:20px;display:block}.chip{margin-top:14px;display:inline-block}.grid{grid-template-columns:1fr}nav{border-right:0;border-bottom:1px solid var(--line);display:flex;overflow:auto}nav button{min-width:max-content}main{padding:20px}.stats{grid-template-columns:repeat(2,1fr)}}", iu = "uco-security-administration", au = class extends HTMLElement {
	root = this.attachShadow({ mode: "open" });
	options = /* @__PURE__ */ on();
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
		e.textContent = ru;
		let t = document.createElement("div");
		this.root.replaceChildren(e, t), this.app = fc({ setup: () => () => is(nu, {
			options: this.options.value,
			ref: (e) => {
				this.component = e;
			}
		}) }), this.app.mount(t);
	}
};
function ou(e, t) {
	if (!(e instanceof HTMLElement)) throw TypeError("El contenedor debe ser un HTMLElement.");
	let n = new au();
	return n.configure(t), e.replaceChildren(n), {
		element: n,
		refresh: () => n.refresh(),
		unmount: () => {
			n.parentElement === e && e.replaceChildren(), n.destroy();
		}
	};
}
customElements.get(iu) || customElements.define(iu, au);
//#endregion
export { au as SecurityAdministrationElement, ou as mount };
