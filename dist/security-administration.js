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
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, T = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), E = /* @__PURE__ */ e("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), ee = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, te = /-\w/g, D = ee((e) => e.replace(te, (e) => e.slice(1).toUpperCase())), O = /\B([A-Z])/g, k = ee((e) => e.replace(O, "-$1").toLowerCase()), A = ee((e) => e.charAt(0).toUpperCase() + e.slice(1)), ne = ee((e) => e ? `on${A(e)}` : ""), j = (e, t) => !Object.is(e, t), re = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ie = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, M = (e) => {
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
var N = /;(?![^(]*\))/g, ce = /:([^]+)/, le = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function ue(e) {
	let t = {};
	return e.replace(le, (e) => e.startsWith("/*") ? "" : e).split(N).forEach((e) => {
		if (e) {
			let n = e.split(ce);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function de(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = de(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var fe = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", pe = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", me = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", he = /* @__PURE__ */ e(fe), ge = /* @__PURE__ */ e(pe), _e = /* @__PURE__ */ e(me), ve = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ye = /* @__PURE__ */ e(ve);
ve + "";
function be(e) {
	return !!e || e === "";
}
function xe(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Te(e[i], t[i], n);
	return r;
}
function Se(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Te(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function Ce(e, t, n) {
	let r = f(e), i = f(t);
	if (r || i || (r = p(e), i = p(t), r || i)) return r && i ? Se(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Te(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function we(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Te(e, t, n) {
	if (e === t) return !0;
	let r = m(e), i = m(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = _(e), i = _(t), r || i ? e === t : (r = d(e), i = d(t), r || i ? r && i ? we(e, t, n, xe) : !1 : (r = v(e), i = v(t), r || i ? !r || !i ? !1 : we(e, t, n, Ce) : String(e) === String(t))));
}
function Ee(e, t) {
	return e.findIndex((e) => Te(e, t));
}
var De = (e) => !!(e && e.__v_isRef === !0), P = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? De(e) ? P(e.value) : JSON.stringify(e, Oe, 2) : String(e), Oe = (e, t) => De(t) ? Oe(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[ke(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => ke(e)) } : _(t) ? ke(t) : v(t) && !d(t) && !C(t) ? String(t) : t, ke = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e;
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
function Ae(e, ...t) {
	console.warn(`[Vue warn] ${e}`, ...t);
}
var F, je = class {
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
		} else process.env.NODE_ENV !== "production" && this._warnOnRun && Ae("cannot run an inactive effect scope.");
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
function Me() {
	return F;
}
function Ne(e, t = !1) {
	F ? F.cleanups.push(e) : process.env.NODE_ENV !== "production" && !t && Ae("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
var I, Pe = /* @__PURE__ */ new WeakSet(), Fe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, F && (F.active ? F.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Pe.has(this) && (Pe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ze(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Qe(this), He(this);
		let e = I, t = Je;
		I = this, Je = !0;
		try {
			return this.fn();
		} finally {
			process.env.NODE_ENV !== "production" && I !== this && Ae("Active effect was not restored correctly - this is likely a Vue internal bug."), Ue(this), I = e, Je = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ke(e);
			this.deps = this.depsTail = void 0, Qe(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Pe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		We(this) && this.run();
	}
	get dirty() {
		return We(this);
	}
}, Ie = 0, Le, Re;
function ze(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Re, Re = e;
		return;
	}
	e.next = Le, Le = e;
}
function Be() {
	Ie++;
}
function Ve() {
	if (--Ie > 0) return;
	if (Re) {
		let e = Re;
		for (Re = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Le;) {
		let t = Le;
		for (Le = void 0; t;) {
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
function He(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ue(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ke(r), qe(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function We(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Ge(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Ge(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === $e) || (e.globalVersion = $e, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !We(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = I, r = Je;
	I = e, Je = !0;
	try {
		He(e);
		let n = e.fn(e._value);
		(t.version === 0 || j(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		I = n, Je = r, Ue(e), e.flags &= -3;
	}
}
function Ke(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ke(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function qe(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var Je = !0, Ye = [];
function Xe() {
	Ye.push(Je), Je = !1;
}
function Ze() {
	let e = Ye.pop();
	Je = e === void 0 || e;
}
function Qe(e) {
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
var $e = 0, et = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, tt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
	}
	track(e) {
		if (!I || !Je || I === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== I) t = this.activeLink = new et(I, this), I.deps ? (t.prevDep = I.depsTail, I.depsTail.nextDep = t, I.depsTail = t) : I.deps = I.depsTail = t, nt(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = I.depsTail, t.nextDep = void 0, I.depsTail.nextDep = t, I.depsTail = t, I.deps === t && (I.deps = e);
		}
		return process.env.NODE_ENV !== "production" && I.onTrack && I.onTrack(s({ effect: I }, e)), t;
	}
	trigger(e) {
		this.version++, $e++, this.notify(e);
	}
	notify(e) {
		Be();
		try {
			if (process.env.NODE_ENV !== "production") for (let t = this.subsHead; t; t = t.nextSub) t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(s({ effect: t.sub }, e));
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Ve();
		}
	}
};
function nt(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) nt(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
	}
}
var rt = /* @__PURE__ */ new WeakMap(), it = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Object iterate"), at = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Map keys iterate"), ot = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Array iterate");
function L(e, t, n) {
	if (Je && I) {
		let r = rt.get(e);
		r || rt.set(e, r = /* @__PURE__ */ new Map());
		let i = r.get(n);
		i || (r.set(n, i = new tt()), i.map = r, i.key = n), process.env.NODE_ENV === "production" ? i.track() : i.track({
			target: e,
			type: t,
			key: n
		});
	}
}
function st(e, t, n, r, i, a) {
	let o = rt.get(e);
	if (!o) {
		$e++;
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
	if (Be(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === ot || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(ot)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(it)), f(e) && s(o.get(at)));
				break;
			case "delete":
				i || (s(o.get(it)), f(e) && s(o.get(at)));
				break;
			case "set": f(e) && s(o.get(it));
		}
	}
	Ve();
}
function ct(e, t) {
	let n = rt.get(e);
	return n && n.get(t);
}
function lt(e) {
	let t = /* @__PURE__ */ B(e);
	return t === e || (L(t, "iterate", ot), /* @__PURE__ */ z(e)) ? t : /* @__PURE__ */ Xt(e) ? /* @__PURE__ */ Yt(e) ? t.map((e) => en($t(e))) : t.map(en) : t.map($t);
}
function ut(e) {
	return L(e = /* @__PURE__ */ B(e), "iterate", ot), e;
}
function dt(e, t) {
	return /* @__PURE__ */ Xt(e) ? en(/* @__PURE__ */ Yt(e) ? $t(t) : t) : $t(t);
}
var ft = {
	__proto__: null,
	[Symbol.iterator]() {
		return pt(this, Symbol.iterator, (e) => dt(this, e));
	},
	concat(...e) {
		return lt(this).concat(...e.map((e) => d(e) ? lt(e) : e));
	},
	entries() {
		return pt(this, "entries", (e) => (e[1] = dt(this, e[1]), e));
	},
	every(e, t) {
		return ht(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return ht(this, "filter", e, t, (e) => e.map((e) => dt(this, e)), arguments);
	},
	find(e, t) {
		return ht(this, "find", e, t, (e) => dt(this, e), arguments);
	},
	findIndex(e, t) {
		return ht(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return ht(this, "findLast", e, t, (e) => dt(this, e), arguments);
	},
	findLastIndex(e, t) {
		return ht(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return ht(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return _t(this, "includes", e);
	},
	indexOf(...e) {
		return _t(this, "indexOf", e);
	},
	join(e) {
		return lt(this).join(e);
	},
	lastIndexOf(...e) {
		return _t(this, "lastIndexOf", e);
	},
	map(e, t) {
		return ht(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return vt(this, "pop");
	},
	push(...e) {
		return vt(this, "push", e);
	},
	reduce(e, ...t) {
		return gt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return gt(this, "reduceRight", e, t);
	},
	shift() {
		return vt(this, "shift");
	},
	some(e, t) {
		return ht(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return vt(this, "splice", e);
	},
	toReversed() {
		return lt(this).toReversed();
	},
	toSorted(e) {
		return lt(this).toSorted(e);
	},
	toSpliced(...e) {
		return lt(this).toSpliced(...e);
	},
	unshift(...e) {
		return vt(this, "unshift", e);
	},
	values() {
		return pt(this, "values", (e) => dt(this, e));
	}
};
function pt(e, t, n) {
	let r = ut(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ z(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var mt = Array.prototype;
function ht(e, t, n, r, i, a) {
	let o = ut(e), s = o !== e && !/* @__PURE__ */ z(e), c = o[t];
	if (c !== mt[t]) {
		let t = c.apply(e, a);
		return s ? $t(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, dt(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function gt(e, t, n, r) {
	let i = ut(e), a = i !== e && !/* @__PURE__ */ z(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = dt(e, t)), n.call(this, t, dt(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? dt(e, c) : c;
}
function _t(e, t, n) {
	let r = /* @__PURE__ */ B(e);
	L(r, "iterate", ot);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Zt(n[0]) ? (n[0] = /* @__PURE__ */ B(n[0]), r[t](...n)) : i;
}
function vt(e, t, n = []) {
	Xe(), Be();
	let r = (/* @__PURE__ */ B(e))[t].apply(e, n);
	return Ve(), Ze(), r;
}
var yt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), bt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function xt(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ B(this);
	return L(t, "has", e), t.hasOwnProperty(e);
}
var St = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Ut : Ht : i ? Vt : Bt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ft[t])) return e;
			if (t === "hasOwnProperty") return xt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ V(e) ? e : n);
		if ((_(t) ? bt.has(t) : yt(t)) || (r || L(e, "get", t), i)) return o;
		if (/* @__PURE__ */ V(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Kt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Kt(o) : /* @__PURE__ */ R(o) : o;
	}
}, Ct = class extends St {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let r = /* @__PURE__ */ Xt(i);
			if (!/* @__PURE__ */ z(n) && !/* @__PURE__ */ Xt(n) && (i = /* @__PURE__ */ B(i), n = /* @__PURE__ */ B(n)), !a && /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n)) return r ? (process.env.NODE_ENV !== "production" && Ae(`Set operation on key "${String(t)}" failed: target is readonly.`, e[t]), !0) : (i.value = n, !0);
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ V(e) ? e : r);
		return e === /* @__PURE__ */ B(r) && s && (o ? j(n, i) && st(e, "set", t, n, i) : st(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && st(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !bt.has(t)) && L(e, "has", t), n;
	}
	ownKeys(e) {
		return L(e, "iterate", d(e) ? "length" : it), Reflect.ownKeys(e);
	}
}, wt = class extends St {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return process.env.NODE_ENV !== "production" && Ae(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
	deleteProperty(e, t) {
		return process.env.NODE_ENV !== "production" && Ae(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
}, Tt = /* @__PURE__ */ new Ct(), Et = /* @__PURE__ */ new wt(), Dt = /* @__PURE__ */ new Ct(!0), Ot = /* @__PURE__ */ new wt(!0), kt = (e) => e, At = (e) => Reflect.getPrototypeOf(e);
function jt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ B(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? kt : t ? en : $t;
		return !t && L(a, "iterate", l ? at : it), s(Object.create(u), { next() {
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
function Mt(e) {
	return function(...t) {
		if (process.env.NODE_ENV !== "production") {
			let n = t[0] ? `on key "${t[0]}" ` : "";
			Ae(`${A(e)} operation ${n}failed: target is readonly.`, /* @__PURE__ */ B(this));
		}
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Nt(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ B(r), a = /* @__PURE__ */ B(n);
			e || (j(n, a) && L(i, "get", n), L(i, "get", a));
			let { has: o } = At(i), s = t ? kt : e ? en : $t;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && L(/* @__PURE__ */ B(t), "iterate", it), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ B(n), i = /* @__PURE__ */ B(t);
			return e || (j(t, i) && L(r, "has", t), L(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ B(a), s = t ? kt : e ? en : $t;
			return !e && L(o, "iterate", it), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Mt("add"),
		set: Mt("set"),
		delete: Mt("delete"),
		clear: Mt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ B(this), r = At(n), i = /* @__PURE__ */ B(e), a = !t && !/* @__PURE__ */ z(e) && !/* @__PURE__ */ Xt(e) ? i : e;
			return r.has.call(n, a) || j(e, a) && r.has.call(n, e) || j(i, a) && r.has.call(n, i) || (n.add(a), st(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ z(n) && !/* @__PURE__ */ Xt(n) && (n = /* @__PURE__ */ B(n));
			let r = /* @__PURE__ */ B(this), { has: i, get: a } = At(r), o = i.call(r, e);
			o ? process.env.NODE_ENV !== "production" && zt(r, i, e) : (e = /* @__PURE__ */ B(e), o = i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? j(n, s) && st(r, "set", e, n, s) : st(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ B(this), { has: n, get: r } = At(t), i = n.call(t, e);
			i ? process.env.NODE_ENV !== "production" && zt(t, n, e) : (e = /* @__PURE__ */ B(e), i = n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && st(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ B(this), t = e.size !== 0, n = process.env.NODE_ENV === "production" ? void 0 : f(e) ? new Map(e) : new Set(e), r = e.clear();
			return t && st(e, "clear", void 0, void 0, n), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = jt(r, e, t);
	}), n;
}
function Pt(e, t) {
	let n = Nt(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Ft = { get: /* @__PURE__ */ Pt(!1, !1) }, It = { get: /* @__PURE__ */ Pt(!1, !0) }, Lt = { get: /* @__PURE__ */ Pt(!0, !1) }, Rt = { get: /* @__PURE__ */ Pt(!0, !0) };
function zt(e, t, n) {
	let r = /* @__PURE__ */ B(n);
	if (r !== n && t.call(e, r)) {
		let t = S(e);
		Ae(`Reactive ${t} contains both the raw and reactive versions of the same object${t === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
	}
}
var Bt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), Ut = /* @__PURE__ */ new WeakMap();
function Wt(e) {
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
	return /* @__PURE__ */ Xt(e) ? e : Jt(e, !1, Tt, Ft, Bt);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
	return Jt(e, !1, Dt, It, Vt);
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return Jt(e, !0, Et, Lt, Ht);
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
	return Jt(e, !0, Ot, Rt, Ut);
}
function Jt(e, t, n, r, i) {
	if (!v(e)) return process.env.NODE_ENV !== "production" && Ae(`value cannot be made ${t ? "readonly" : "reactive"}: ${String(e)}`), e;
	if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Wt(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
	return /* @__PURE__ */ Xt(e) ? /* @__PURE__ */ Yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function z(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function B(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ B(t) : e;
}
function Qt(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && ie(e, "__v_skip", !0), e;
}
var $t = (e) => v(e) ? /* @__PURE__ */ R(e) : e, en = (e) => v(e) ? /* @__PURE__ */ Kt(e) : e;
// @__NO_SIDE_EFFECTS__
function V(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function H(e) {
	return nn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function tn(e) {
	return nn(e, !0);
}
function nn(e, t) {
	return /* @__PURE__ */ V(e) ? e : new rn(e, t);
}
var rn = class {
	constructor(e, t) {
		this.dep = new tt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ B(e), this._value = t ? e : $t(e), this.__v_isShallow = t;
	}
	get value() {
		return process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		}), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ z(e) || /* @__PURE__ */ Xt(e);
		e = n ? e : /* @__PURE__ */ B(e), j(e, t) && (this._rawValue = e, this._value = n ? e : $t(e), process.env.NODE_ENV === "production" ? this.dep.trigger() : this.dep.trigger({
			target: this,
			type: "set",
			key: "value",
			newValue: e,
			oldValue: t
		}));
	}
};
function U(e) {
	return /* @__PURE__ */ V(e) ? e.value : e;
}
var an = {
	get: (e, t, n) => t === "__v_raw" ? e : U(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ V(i) && !/* @__PURE__ */ V(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function on(e) {
	return /* @__PURE__ */ Yt(e) ? e : new Proxy(e, an);
}
var sn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ B(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ Zt(i) || /* @__PURE__ */ z(i);
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
		return ct(this._raw, this._key);
	}
}, cn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function ln(e, t, n) {
	return /* @__PURE__ */ V(e) ? e : h(e) ? new cn(e) : v(e) && arguments.length > 1 ? un(e, t, n) : /* @__PURE__ */ H(e);
}
function un(e, t, n) {
	return new sn(e, t, n);
}
var dn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new tt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = $e - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && I !== this) return ze(this, !0), !0;
		process.env.NODE_ENV;
	}
	get value() {
		let e = process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		});
		return Ge(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Ae("Write operation failed: computed value is readonly");
	}
};
// @__NO_SIDE_EFFECTS__
function fn(e, t, n = !1) {
	let r, i;
	h(e) ? r = e : (r = e.get, i = e.set);
	let a = new dn(r, i, n);
	return process.env.NODE_ENV !== "production" && t && !n && (a.onTrack = t.onTrack, a.onTrigger = t.onTrigger), a;
}
var pn = {}, mn = /* @__PURE__ */ new WeakMap(), hn = void 0;
function gn(e, t = !1, n = hn) {
	if (n) {
		let t = mn.get(n);
		t || mn.set(n, t = []), t.push(e);
	} else process.env.NODE_ENV !== "production" && !t && Ae("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function _n(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => {
		(i.onWarn || Ae)("Invalid watch source: ", e, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
	}, m = (e) => o ? e : /* @__PURE__ */ z(e) || o === !1 || o === 0 ? vn(e, 1) : vn(e), g, _, v, y, b = !1, x = !1;
	if (/* @__PURE__ */ V(e) ? (_ = () => e.value, b = /* @__PURE__ */ z(e)) : /* @__PURE__ */ Yt(e) ? (_ = () => m(e), b = !0) : d(e) ? (x = !0, b = e.some((e) => /* @__PURE__ */ Yt(e) || /* @__PURE__ */ z(e)), _ = () => e.map((e) => {
		if (/* @__PURE__ */ V(e)) return e.value;
		if (/* @__PURE__ */ Yt(e)) return m(e);
		if (h(e)) return f ? f(e, 2) : e();
		process.env.NODE_ENV !== "production" && p(e);
	})) : h(e) ? _ = n ? f ? () => f(e, 2) : e : () => {
		if (v) {
			Xe();
			try {
				v();
			} finally {
				Ze();
			}
		}
		let t = hn;
		hn = g;
		try {
			return f ? f(e, 3, [y]) : e(y);
		} finally {
			hn = t;
		}
	} : (_ = r, process.env.NODE_ENV !== "production" && p(e)), n && o) {
		let e = _, t = o === !0 ? Infinity : o;
		_ = () => vn(e(), t);
	}
	let S = Me(), C = () => {
		g.stop(), S && S.active && c(S.effects, g);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return C(), n;
		};
	}
	let w = x ? Array(e.length).fill(pn) : pn, T = (e) => {
		if (g.flags & 1 && (g.dirty || e)) {
			if (n) {
				let t = g.run();
				if (e || o || b || (x ? t.some((e, t) => j(e, w[t])) : j(t, w))) {
					v && v();
					let e = hn;
					hn = g;
					try {
						let e = [
							t,
							w === pn ? void 0 : x && w[0] === pn ? [] : w,
							y
						];
						w = t, f ? f(n, 3, e) : n(...e);
					} finally {
						hn = e;
					}
				}
			} else g.run();
		}
	};
	return u && u(T), g = new Fe(_), g.scheduler = l ? () => l(T, !1) : T, y = (e) => gn(e, !1, g), v = g.onStop = () => {
		let e = mn.get(g);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			mn.delete(g);
		}
	}, process.env.NODE_ENV !== "production" && (g.onTrack = i.onTrack, g.onTrigger = i.onTrigger), n ? a ? T(!0) : w = g.run() : l ? l(T.bind(null, !0), !0) : g.run(), C.pause = g.pause.bind(g), C.resume = g.resume.bind(g), C.stop = C, C;
}
function vn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ V(e)) vn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) vn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		vn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) vn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && vn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var yn = [];
function bn(e) {
	yn.push(e);
}
function xn() {
	yn.pop();
}
var Sn = !1;
function W(e, ...t) {
	if (Sn) return;
	Sn = !0, Xe();
	let n = yn.length ? yn[yn.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = Cn();
	if (r) kn(r, n, 11, [
		e + t.map((e) => e.toString?.call(e) ?? JSON.stringify(e)).join(""),
		n && n.proxy,
		i.map(({ vnode: e }) => `at <${ns(n, e.type)}>`).join("\n"),
		i
	]);
	else {
		let n = [`[Vue warn]: ${e}`, ...t];
		i.length && n.push("\n", ...wn(i)), console.warn(...n);
	}
	Ze(), Sn = !1;
}
function Cn() {
	let e = yn[yn.length - 1];
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
function wn(e) {
	let t = [];
	return e.forEach((e, n) => {
		t.push(...n === 0 ? [] : ["\n"], ...Tn(e));
	}), t;
}
function Tn({ vnode: e, recurseCount: t }) {
	let n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${ns(e.component, e.type, r)}`, a = ">" + n;
	return e.props ? [
		i,
		...En(e.props),
		a
	] : [i + a];
}
function En(e) {
	let t = [], n = Object.keys(e);
	return n.slice(0, 3).forEach((n) => {
		t.push(...Dn(n, e[n]));
	}), n.length > 3 && t.push(" ..."), t;
}
function Dn(e, t, n) {
	return g(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ V(t) ? (t = Dn(e, /* @__PURE__ */ B(t.value), !0), n ? t : [
		`${e}=Ref<`,
		t,
		">"
	]) : h(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ B(t), n ? t : [`${e}=`, t]);
}
var On = {
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
function kn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		jn(e, t, n);
	}
}
function An(e, t, n, r) {
	if (h(e)) {
		let i = kn(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			jn(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(An(e[a], t, n, r));
		return i;
	}
	process.env.NODE_ENV !== "production" && W(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function jn(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = process.env.NODE_ENV === "production" ? `https://vuejs.org/error-reference/#runtime-${r}` : On[r];
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			Xe(), kn(o, null, 10, [
				e,
				i,
				a
			]), Ze();
			return;
		}
	}
	Mn(e, r, a, i, s);
}
function Mn(e, t, n, r = !0, i = !1) {
	if (process.env.NODE_ENV !== "production") {
		let i = On[t];
		if (n && bn(n), W(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && xn(), r) throw e;
		console.error(e);
	} else if (i) throw e;
	else console.error(e);
}
var Nn = [], Pn = -1, Fn = [], In = null, Ln = 0, Rn = /* @__PURE__ */ Promise.resolve(), zn = null, Bn = 100;
function Vn(e) {
	let t = zn || Rn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hn(e) {
	let t = Pn + 1, n = Nn.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = Nn[r], a = Jn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Un(e) {
	if (!(e.flags & 1)) {
		let t = Jn(e), n = Nn[Nn.length - 1];
		!n || !(e.flags & 2) && t >= Jn(n) ? Nn.push(e) : Nn.splice(Hn(t), 0, e), e.flags |= 1, Wn();
	}
}
function Wn() {
	zn ||= Rn.then(Yn);
}
function Gn(e) {
	if (!d(e)) In && e.id === -1 ? In.splice(Ln + 1, 0, e) : e.flags & 1 || (Fn.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) Fn.push(e[t]);
	Wn();
}
function Kn(e, t, n = Pn + 1) {
	for (process.env.NODE_ENV !== "production" && (t ||= /* @__PURE__ */ new Map()); n < Nn.length; n++) {
		let r = Nn[n];
		if (r && r.flags & 2) {
			if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && Xn(t, r)) continue;
			Nn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
		}
	}
}
function qn(e) {
	if (Fn.length) {
		let t = [...new Set(Fn)].sort((e, t) => Jn(e) - Jn(t));
		if (Fn.length = 0, In) {
			for (let e = 0; e < t.length; e++) In.push(t[e]);
			return;
		}
		for (In = t, process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map()), Ln = 0; Ln < In.length; Ln++) {
			let t = In[Ln];
			process.env.NODE_ENV !== "production" && Xn(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
		}
		In = null, Ln = 0;
	}
}
var Jn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Yn(e) {
	process.env.NODE_ENV !== "production" && (e ||= /* @__PURE__ */ new Map());
	let t = process.env.NODE_ENV === "production" ? r : (t) => Xn(e, t);
	try {
		for (Pn = 0; Pn < Nn.length; Pn++) {
			let e = Nn[Pn];
			if (e && !(e.flags & 8)) {
				if (process.env.NODE_ENV !== "production" && t(e)) continue;
				e.flags & 4 && (e.flags &= -2), kn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2);
			}
		}
	} finally {
		for (; Pn < Nn.length; Pn++) {
			let e = Nn[Pn];
			e && (e.flags &= -2);
		}
		Pn = -1, Nn.length = 0, qn(e), zn = null, (Nn.length || Fn.length) && Yn(e);
	}
}
function Xn(e, t) {
	let n = e.get(t) || 0;
	if (n > Bn) {
		let e = t.i, n = e && ts(e.type);
		return jn(`Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
	}
	return e.set(t, n + 1), !1;
}
var Zn = !1, Qn = (e) => {
	try {
		return Zn;
	} finally {
		Zn = e;
	}
}, $n = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (oe().__VUE_HMR_RUNTIME__ = {
	createRecord: cr(rr),
	rerender: cr(ar),
	reload: cr(or)
});
var er = /* @__PURE__ */ new Map();
function tr(e) {
	let t = e.type.__hmrId, n = er.get(t);
	n ||= (rr(t, e.type), er.get(t)), n.instances.add(e);
}
function nr(e) {
	er.get(e.type.__hmrId).instances.delete(e);
}
function rr(e, t) {
	return !er.has(e) && (er.set(e, {
		initialDef: ir(t),
		instances: /* @__PURE__ */ new Set()
	}), !0);
}
function ir(e) {
	return rs(e) ? e.__vccOpts : e;
}
function ar(e, t) {
	let n = er.get(e);
	n && (n.initialDef.render = t, [...n.instances].forEach((e) => {
		t && (e.render = t, ir(e.type).render = t), e.renderCache = [], Zn = !0, e.job.flags & 8 || e.update(), Zn = !1;
	}));
}
function or(e, t) {
	let n = er.get(e);
	if (!n) return;
	t = ir(t), sr(n.initialDef, t);
	let r = [...n.instances];
	for (let e = 0; e < r.length; e++) {
		let i = r[e], a = ir(i.type), o = $n.get(a);
		o || (a !== n.initialDef && sr(a, t), $n.set(a, o = /* @__PURE__ */ new Set())), o.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (o.add(i), i.ceReload(t.styles), o.delete(i)) : i.parent ? Un(() => {
			i.job.flags & 8 || (Zn = !0, i.parent.update(), Zn = !1, o.delete(i));
		}) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(a);
	}
	Gn(() => {
		$n.clear();
	});
}
function sr(e, t) {
	s(e, t);
	for (let n in e) n !== "__file" && !(n in t) && delete e[n];
}
function cr(e) {
	return (t, n) => {
		try {
			return e(t, n);
		} catch (e) {
			console.error(e), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
		}
	};
}
var lr, ur = [], dr = !1;
function fr(e, ...t) {
	lr ? lr.emit(e, ...t) : dr || ur.push({
		event: e,
		args: t
	});
}
function pr(e, t) {
	lr = e, lr ? (lr.enabled = !0, ur.forEach(({ event: e, args: t }) => lr.emit(e, ...t)), ur = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		pr(e, t);
	}), setTimeout(() => {
		lr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, dr = !0, ur = []);
	}, 3e3)) : (dr = !0, ur = []);
}
function mr(e, t) {
	fr("app:init", e, t, {
		Fragment: K,
		Text: ao,
		Comment: oo,
		Static: so
	});
}
function hr(e) {
	fr("app:unmount", e);
}
var gr = /* @__PURE__ */ br("component:added"), _r = /* @__PURE__ */ br("component:updated"), vr = /* @__PURE__ */ br("component:removed"), yr = (e) => {
	lr && typeof lr.cleanupBuffer == "function" && !lr.cleanupBuffer(e) && vr(e);
};
// @__NO_SIDE_EFFECTS__
function br(e) {
	return (t) => {
		fr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
	};
}
var xr = /* @__PURE__ */ Cr("perf:start"), Sr = /* @__PURE__ */ Cr("perf:end");
function Cr(e) {
	return (t, n, r) => {
		fr(e, t.appContext.app, t.uid, t, n, r);
	};
}
function wr(e, t, n) {
	fr("component:emit", e.appContext.app, e, t, n);
}
var Tr = null, Er = null;
function Dr(e) {
	let t = Tr;
	return Tr = e, Er = e && e.type.__scopeId || null, t;
}
function Or(e, t = Tr, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && po(-1);
		let i = Dr(t), a = co.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = co.length; e > a; e--) uo();
			Dr(i), r._d && po(1);
		}
		return process.env.NODE_ENV !== "production" && _r(t), o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function kr(e) {
	E(e) && W("Do not use built-in directive ids as custom directive id: " + e);
}
function Ar(e, n) {
	if (Tr === null) return process.env.NODE_ENV !== "production" && W("withDirectives can only be used inside render functions."), e;
	let r = Qo(Tr), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && vn(o), i.push({
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
function jr(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (Xe(), An(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ze());
	}
}
function Mr(e, t) {
	if (process.env.NODE_ENV !== "production" && (!Q || Q.isMounted) && W("provide() can only be used inside setup()."), Q) {
		let n = Q.provides, r = Q.parent && Q.parent.provides;
		r === n && (n = Q.provides = Object.create(r)), n[e] = t;
	}
}
function Nr(e, t, n = !1) {
	let r = Fo();
	if (r || Ji) {
		let i = Ji ? Ji._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
		process.env.NODE_ENV !== "production" && W(`injection "${String(e)}" not found.`);
	} else process.env.NODE_ENV !== "production" && W("inject() can only be used inside setup() or functional components.");
}
var Pr = /* @__PURE__ */ Symbol.for("v-scx"), Fr = () => {
	{
		let e = Nr(Pr);
		return e || process.env.NODE_ENV !== "production" && W("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
	}
};
function Ir(e, t, n) {
	return process.env.NODE_ENV !== "production" && !h(t) && W("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Lr(e, t, n);
}
function Lr(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i;
	process.env.NODE_ENV !== "production" && !n && (a !== void 0 && W("watch() \"immediate\" option is only respected when using the watch(source, callback, options?) signature."), o !== void 0 && W("watch() \"deep\" option is only respected when using the watch(source, callback, options?) signature."), l !== void 0 && W("watch() \"once\" option is only respected when using the watch(source, callback, options?) signature."));
	let u = s({}, i);
	process.env.NODE_ENV !== "production" && (u.onWarn = W);
	let d = n && a || !n && c !== "post", f;
	if (Uo) {
		if (c === "sync") {
			let e = Fr();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = Q;
	u.call = (e, t, n) => An(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		Ka(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Un(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = _n(e, n, u);
	return Uo && (f ? f.push(h) : d && h()), h;
}
function Rr(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? zr(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = Ro(this), s = Lr(i, a.bind(r), n);
	return o(), s;
}
function zr(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Br = /* @__PURE__ */ Symbol("_vte"), Vr = (e) => e.__isTeleport, Hr = /* @__PURE__ */ Symbol("_leaveCb");
function Ur(e) {
	let t = e[0];
	if (e.length > 1) {
		let n = !1;
		for (let r of e) if (r.type !== oo) {
			if (process.env.NODE_ENV !== "production" && n) {
				W("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
				break;
			}
			if (t = r, n = !0, process.env.NODE_ENV === "production") break;
		}
	}
	return t;
}
function Wr(e) {
	if (!ei(e)) return Vr(e.type) && e.children ? Ur(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && h(n.default)) return n.default();
	}
}
function Gr(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Gr(Vr(n.type) && Wr(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function qr(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var Jr = /* @__PURE__ */ new WeakSet();
function Yr(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Xr = /* @__PURE__ */ new WeakMap();
function Zr(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Zr(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if ($r(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Zr(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Qo(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e;
	if (process.env.NODE_ENV !== "production" && !f) {
		W("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
		return;
	}
	let m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ B(v), b = v === t ? i : (e) => process.env.NODE_ENV !== "production" && (u(y, e) && !/* @__PURE__ */ V(y[e]) && W(`Template ref "${e}" used on a non-ref value. It will not work in the production build.`), Jr.has(y[e])) || Yr(_, e) ? !1 : u(y, e), x = (e, t) => !(process.env.NODE_ENV !== "production" && Jr.has(e) || t && Yr(_, t));
	if (m != null && m !== p) {
		if (Qr(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ V(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) kn(p, f, 12, [l, _]);
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
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n ? (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l)) : process.env.NODE_ENV !== "production" && W("Invalid template ref type:", p, `(${typeof p})`);
			};
			if (l) {
				let t = () => {
					i(), Xr.delete(e);
				};
				t.id = -1, Xr.set(e, t), Ka(t, r);
			} else Qr(e), i();
		} else process.env.NODE_ENV !== "production" && W("Invalid template ref type:", p, `(${typeof p})`);
	}
}
function Qr(e) {
	let t = Xr.get(e);
	t && (t.flags |= 8, Xr.delete(e));
}
oe().requestIdleCallback, oe().cancelIdleCallback;
var $r = (e) => !!e.type.__asyncLoader, ei = (e) => e.type.__isKeepAlive;
function ti(e, t) {
	ri(e, "a", t);
}
function ni(e, t) {
	ri(e, "da", t);
}
function ri(e, t, n = Q) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (ai(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) ei(e.parent.vnode) && ii(r, t, n, e), e = e.parent;
	}
}
function ii(e, t, n, r) {
	let i = ai(t, e, r, !0);
	fi(() => {
		c(r[t], i);
	}, n);
}
function ai(e, t, n = Q, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			Xe();
			let i = Ro(n), a = An(t, n, e, r);
			return i(), Ze(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
	process.env.NODE_ENV !== "production" && W(`${ne(On[e].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var oi = (e) => (t, n = Q) => {
	(!Uo || e === "sp") && ai(e, (...e) => t(...e), n);
}, si = oi("bm"), ci = oi("m"), li = oi("bu"), ui = oi("u"), di = oi("bum"), fi = oi("um"), pi = oi("sp"), mi = oi("rtg"), hi = oi("rtc");
function gi(e, t = Q) {
	ai("ec", e, t);
}
var _i = /* @__PURE__ */ Symbol.for("v-ndc");
function G(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Yt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ z(e), s = /* @__PURE__ */ Xt(e), e = ut(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? en($t(e[n])) : $t(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0)) W(`The v-for range expects a positive integer value but got ${e}.`), i = [];
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
var vi = (e) => e ? Ho(e) ? Qo(e) : vi(e.parent) : null, yi = (e) => {
	let t = !1;
	for (;;) {
		if (e.patchFlag > 0 && e.patchFlag & 2048) {
			let n = ia(e.children);
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
}, bi = (e) => {
	let t = e.subTree && yi(e.subTree);
	return t === void 0 ? e.vnode.el : t;
}, xi = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => process.env.NODE_ENV === "production" ? e.vnode.el : bi(e),
	$data: (e) => e.data,
	$props: (e) => process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ qt(e.props),
	$attrs: (e) => process.env.NODE_ENV === "production" ? e.attrs : /* @__PURE__ */ qt(e.attrs),
	$slots: (e) => process.env.NODE_ENV === "production" ? e.slots : /* @__PURE__ */ qt(e.slots),
	$refs: (e) => process.env.NODE_ENV === "production" ? e.refs : /* @__PURE__ */ qt(e.refs),
	$parent: (e) => vi(e.parent),
	$root: (e) => vi(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Fi(e),
	$forceUpdate: (e) => e.f ||= () => {
		Un(e.update);
	},
	$nextTick: (e) => e.n ||= Vn.bind(e.proxy),
	$watch: (e) => Rr.bind(e)
}), Si = (e) => e === "_" || e === "$", Ci = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), wi = {
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
			else if (Ci(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Ai && (s[n] = 0);
		}
		let d = xi[n], f, p;
		if (d) return n === "$attrs" ? (L(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && ta()) : process.env.NODE_ENV !== "production" && n === "$slots" && L(e, "get", n), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
		process.env.NODE_ENV !== "production" && Tr && (!g(n) || n.indexOf("__v") !== 0) && (a !== t && Si(n[0]) && u(a, n) ? W(`Property ${JSON.stringify(n)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === Tr && W(`Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`));
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Ci(a, n) ? (a[n] = r, !0) : process.env.NODE_ENV !== "production" && a.__isScriptSetup && u(a, n) ? (W(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) ? (process.env.NODE_ENV !== "production" && W(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && W(`Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && n in e.appContext.config.globalProperties ? Object.defineProperty(o, n, {
			enumerable: !0,
			configurable: !0,
			value: r
		}) : o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Ci(n, c) || u(o, c) || u(i, c) || u(xi, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
process.env.NODE_ENV !== "production" && (wi.ownKeys = (e) => (W("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
function Ti(e) {
	let t = {};
	return Object.defineProperty(t, "_", {
		configurable: !0,
		enumerable: !1,
		get: () => e
	}), Object.keys(xi).forEach((n) => {
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !1,
			get: () => xi[n](e),
			set: r
		});
	}), t;
}
function Ei(e) {
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
function Di(e) {
	let { ctx: t, setupState: n } = e;
	Object.keys(/* @__PURE__ */ B(n)).forEach((e) => {
		if (!n.__isScriptSetup) {
			if (Si(e[0])) {
				W(`setup() return property ${JSON.stringify(e)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
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
function Oi(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function ki() {
	let e = /* @__PURE__ */ Object.create(null);
	return (t, n) => {
		e[n] ? W(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
	};
}
var Ai = !0;
function ji(e) {
	let t = Fi(e), n = e.proxy, i = e.ctx;
	Ai = !1, t.beforeCreate && Ni(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: b, deactivated: x, beforeDestroy: S, beforeUnmount: C, destroyed: w, unmounted: T, render: E, renderTracked: ee, renderTriggered: te, errorCaptured: D, serverPrefetch: O, expose: k, inheritAttrs: A, components: ne, directives: j, filters: re } = t, ie = process.env.NODE_ENV === "production" ? null : ki();
	if (process.env.NODE_ENV !== "production") {
		let [t] = e.propsOptions;
		if (t) for (let e in t) ie("Props", e);
	}
	if (u && Mi(u, i, ie), s) for (let e in s) {
		let t = s[e];
		h(t) ? (process.env.NODE_ENV === "production" ? i[e] = t.bind(n) : Object.defineProperty(i, e, {
			value: t.bind(n),
			configurable: !0,
			enumerable: !0,
			writable: !0
		}), process.env.NODE_ENV !== "production" && ie("Methods", e)) : process.env.NODE_ENV !== "production" && W(`Method "${e}" has type "${typeof t}" in the component definition. Did you reference the function correctly?`);
	}
	if (a) {
		process.env.NODE_ENV !== "production" && !h(a) && W("The data option must be a function. Plain object usage is no longer supported.");
		let t = a.call(n, n);
		if (process.env.NODE_ENV !== "production" && y(t) && W("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !v(t)) process.env.NODE_ENV !== "production" && W("data() should return an object.");
		else if (e.data = /* @__PURE__ */ R(t), process.env.NODE_ENV !== "production") for (let e in t) ie("Data", e), Si(e[0]) || Object.defineProperty(i, e, {
			configurable: !0,
			enumerable: !0,
			get: () => t[e],
			set: r
		});
	}
	if (Ai = !0, o) for (let e in o) {
		let t = o[e], a = h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r;
		process.env.NODE_ENV !== "production" && a === r && W(`Computed property "${e}" has no getter.`);
		let s = is({
			get: a,
			set: !h(t) && h(t.set) ? t.set.bind(n) : process.env.NODE_ENV === "production" ? r : () => {
				W(`Write operation failed: computed property "${e}" is readonly.`);
			}
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => s.value,
			set: (e) => s.value = e
		}), process.env.NODE_ENV !== "production" && ie("Computed", e);
	}
	if (c) for (let e in c) Pi(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			Mr(t, e[t]);
		});
	}
	f && Ni(f, e, "c");
	function M(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (M(si, p), M(ci, m), M(li, g), M(ui, _), M(ti, b), M(ni, x), M(gi, D), M(hi, ee), M(mi, te), M(di, C), M(fi, T), M(pi, O), d(k)) {
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
	E && e.render === r && (e.render = E), A != null && (e.inheritAttrs = A), ne && (e.components = ne), j && (e.directives = j), O && qr(e);
}
function Mi(e, t, n = r) {
	d(e) && (e = Bi(e));
	for (let r in e) {
		let i = e[r], a;
		a = v(i) ? "default" in i ? Nr(i.from || r, i.default, !0) : Nr(i.from || r) : Nr(i), /* @__PURE__ */ V(a) ? Object.defineProperty(t, r, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		}) : t[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
	}
}
function Ni(e, t, n) {
	An(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Pi(e, t, n, r) {
	let i = r.includes(".") ? zr(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) ? Ir(i, n) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${e}"`, n);
	} else if (h(e)) Ir(i, e.bind(n));
	else if (v(e)) {
		if (d(e)) e.forEach((e) => Pi(e, t, n, r));
		else {
			let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
			h(r) ? Ir(i, r, e) : process.env.NODE_ENV !== "production" && W(`Invalid watch handler specified by key "${e.handler}"`, r);
		}
	} else process.env.NODE_ENV !== "production" && W(`Invalid watch option: "${r}"`, e);
}
function Fi(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Ii(c, e, o, !0)), Ii(c, t, o)), v(t) && a.set(t, c), c;
}
function Ii(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Ii(e, a, n, !0), i && i.forEach((t) => Ii(e, t, n, !0));
	for (let i in t) if (r && i === "expose") process.env.NODE_ENV !== "production" && W("\"expose\" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.");
	else {
		let r = Li[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Li = {
	data: Ri,
	props: Ui,
	emits: Ui,
	methods: Hi,
	computed: Hi,
	beforeCreate: Vi,
	created: Vi,
	beforeMount: Vi,
	mounted: Vi,
	beforeUpdate: Vi,
	updated: Vi,
	beforeDestroy: Vi,
	beforeUnmount: Vi,
	destroyed: Vi,
	unmounted: Vi,
	activated: Vi,
	deactivated: Vi,
	errorCaptured: Vi,
	serverPrefetch: Vi,
	components: Hi,
	directives: Hi,
	watch: Wi,
	provide: Ri,
	inject: zi
};
function Ri(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function zi(e, t) {
	return Hi(Bi(e), Bi(t));
}
function Bi(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function Vi(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Hi(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ui(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Oi(e), Oi(t ?? {})) : t;
}
function Wi(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = Vi(e[r], t[r]);
	return n;
}
function Gi() {
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
var Ki = 0;
function qi(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (process.env.NODE_ENV !== "production" && W("root props passed to app.mount() must be an object."), r = null);
		let i = Gi(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Ki++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ss,
			get config() {
				return i.config;
			},
			set config(e) {
				process.env.NODE_ENV !== "production" && W("app.config cannot be replaced. Modify individual options instead.");
			},
			use(e, ...t) {
				return a.has(e) ? process.env.NODE_ENV !== "production" && W("Plugin has already been applied to target app.") : e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) ? (a.add(e), e(l, ...t)) : process.env.NODE_ENV !== "production" && W("A plugin must either be a function or an object with an \"install\" function."), l;
			},
			mixin(e) {
				return i.mixins.includes(e) ? process.env.NODE_ENV !== "production" && W("Mixin has already been applied to target app" + (e.name ? `: ${e.name}` : "")) : i.mixins.push(e), l;
			},
			component(e, t) {
				return process.env.NODE_ENV !== "production" && Vo(e, i.config), t ? (process.env.NODE_ENV !== "production" && i.components[e] && W(`Component "${e}" has already been registered in target app.`), i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return process.env.NODE_ENV !== "production" && kr(e), t ? (process.env.NODE_ENV !== "production" && i.directives[e] && W(`Directive "${e}" has already been registered in target app.`), i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (c) process.env.NODE_ENV !== "production" && W("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
				else {
					process.env.NODE_ENV !== "production" && a.__vue_app__ && W("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
					let u = l._ceVNode || X(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
						let t = wo(u);
						t.el = null, e(t, a, s);
					}), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = u.component, mr(l, ss)), Qo(u.component);
				}
			},
			onUnmount(e) {
				process.env.NODE_ENV !== "production" && typeof e != "function" && W(`Expected function as first argument to app.onUnmount(), but got ${typeof e}`), o.push(e);
			},
			unmount() {
				c ? (An(o, l._instance, 16), e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, hr(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && W("Cannot unmount an app that is not mounted.");
			},
			provide(e, t) {
				return process.env.NODE_ENV !== "production" && e in i.provides && (u(i.provides, e) ? W(`App already provides property with key "${String(e)}". It will be overwritten with the new value.`) : W(`App already provides property with key "${String(e)}" inherited from its parent element. It will be overwritten with the new value.`)), i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Ji;
				Ji = l;
				try {
					return e();
				} finally {
					Ji = t;
				}
			}
		};
		return l;
	};
}
var Ji = null, Yi = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${D(t)}Modifiers`] || e[`${k(t)}Modifiers`];
function Xi(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t;
	if (process.env.NODE_ENV !== "production") {
		let { emitsOptions: t, propsOptions: [i] } = e;
		if (t) {
			if (!(n in t)) (!i || !(ne(D(n)) in i)) && W(`Component emitted event "${n}" but it is neither declared in the emits option nor as an "${ne(D(n))}" prop.`);
			else {
				let e = t[n];
				h(e) && (e(...r) || W(`Invalid event arguments: event validation failed for event "${n}".`));
			}
		}
	}
	let a = r, o = n.startsWith("update:"), s = o && Yi(i, n.slice(7));
	if (s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = a.map(M))), process.env.NODE_ENV !== "production" && wr(e, n, a), process.env.NODE_ENV !== "production") {
		let t = n.toLowerCase();
		t !== n && i[ne(t)] && W(`Event "${t}" is emitted in component ${ns(e, e.type)} but the handler is registered for "${n}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${k(n)}" instead of "${n}".`);
	}
	let c, l = i[c = ne(n)] || i[c = ne(D(n))];
	!l && o && (l = i[c = ne(k(n))]), l && An(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, An(u, e, 6, a);
	}
}
var Zi = /* @__PURE__ */ new WeakMap();
function Qi(e, t, n = !1) {
	let r = n ? Zi : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Qi(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function $i(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, k(t)) || u(e, t));
}
var ea = !1;
function ta() {
	ea = !0;
}
function na(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [s], slots: c, attrs: l, emit: u, render: d, renderCache: f, props: p, data: m, setupState: h, ctx: g, inheritAttrs: _ } = e, v = Dr(e), y, b;
	process.env.NODE_ENV !== "production" && (ea = !1);
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(e, { get(e, t, n) {
				return W(`Property '${String(t)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(e, t, n);
			} }) : e;
			y = Do(d.call(t, e, f, process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ qt(p), h, m, g)), b = l;
		} else {
			let e = t;
			process.env.NODE_ENV !== "production" && l === p && ta(), y = Do(e.length > 1 ? e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ qt(p), process.env.NODE_ENV === "production" ? {
				attrs: l,
				slots: c,
				emit: u
			} : {
				get attrs() {
					return ta(), /* @__PURE__ */ qt(l);
				},
				slots: c,
				emit: u
			}) : e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ qt(p), null)), b = t.props ? l : aa(l);
		}
	} catch (t) {
		co.length = 0, jn(t, e, 1), y = X(oo);
	}
	let x = y, S;
	if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([x, S] = ra(y)), b && _ !== !1) {
		let e = Object.keys(b), { shapeFlag: t } = x;
		if (e.length) {
			if (t & 7) s && e.some(o) && (b = oa(b, s)), x = wo(x, b, !1, !0);
			else if (process.env.NODE_ENV !== "production" && !ea && x.type !== oo) {
				let e = Object.keys(l), t = [], n = [];
				for (let r = 0, i = e.length; r < i; r++) {
					let i = e[r];
					a(i) ? o(i) || t.push(i[2].toLowerCase() + i.slice(3)) : n.push(i);
				}
				n.length && W(`Extraneous non-props attributes (${n.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), t.length && W(`Extraneous non-emits event listeners (${t.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
			}
		}
	}
	if (n.dirs && (process.env.NODE_ENV !== "production" && !sa(x) && W("Runtime directive used on component with non-element root node. The directives will not function as intended."), x = wo(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition) {
		let e = Vr(x.type) && Wr(x) || x;
		process.env.NODE_ENV !== "production" && !sa(e) && W("Component inside <Transition> renders non-element root node that cannot be animated."), Gr(e, n.transition);
	}
	return process.env.NODE_ENV !== "production" && S ? S(x) : y = x, Dr(v), y;
}
var ra = (e) => {
	let t = e.children, n = e.dynamicChildren, r = ia(t, !1);
	if (!r) return [e, void 0];
	if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048) return ra(r);
	let i = t.indexOf(r), a = n ? n.indexOf(r) : -1;
	return [Do(r), (r) => {
		t[i] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
	}];
};
function ia(e, t = !0) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (go(i)) {
			if (i.type !== oo || i.children === "v-if") {
				if (n) return;
				if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048) return ia(n.children);
			}
		} else return;
	}
	return n;
}
var aa = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, oa = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
}, sa = (e) => e.shapeFlag & 7 || e.type === oo;
function ca(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (process.env.NODE_ENV !== "production" && (i || s) && Zn || t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? la(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ua(o, r, n) && !$i(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || la(r, o, l) : !!o;
	return !1;
}
function la(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ua(t, e, a) && !$i(n, a)) return !0;
	}
	return !1;
}
function ua(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !Te(r, i) : r !== i;
}
function da({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var fa = {}, pa = () => Object.create(fa), ma = (e) => Object.getPrototypeOf(e) === fa;
function ha(e, t, n, r = !1) {
	let i = {}, a = pa();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), va(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	process.env.NODE_ENV !== "production" && wa(t || {}, i, e), e.props = n ? r ? i : /* @__PURE__ */ Gt(i) : e.type.props ? i : a, e.attrs = a;
}
function ga(e) {
	for (; e;) {
		if (e.type.__hmrId) return !0;
		e = e.parent;
	}
}
function _a(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ B(i), [c] = e.propsOptions, l = !1;
	if (!(process.env.NODE_ENV !== "production" && ga(e)) && (r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if ($i(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) {
					if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
					else {
						let t = D(o);
						i[t] = ya(c, s, t, d, e, !1);
					}
				} else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		va(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = k(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = ya(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && st(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && wa(t || {}, i, e);
}
function va(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (T(t)) continue;
		let l = n[t], d;
		a && u(a, d = D(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : $i(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ B(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = ya(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function ya(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Ro(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === k(n)) && (r = !0));
	}
	return r;
}
var ba = /* @__PURE__ */ new WeakMap();
function xa(e, r, i = !1) {
	let a = i ? ba : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = xa(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		process.env.NODE_ENV !== "production" && !g(c[e]) && W("props must be strings when using array syntax.", c[e]);
		let n = D(c[e]);
		Sa(n) && (l[n] = t);
	}
	else if (c) {
		process.env.NODE_ENV !== "production" && !v(c) && W("invalid props options", c);
		for (let e in c) {
			let t = D(e);
			if (Sa(t)) {
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
function Sa(e) {
	return e[0] !== "$" && !T(e) || (process.env.NODE_ENV !== "production" && W(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ca(e) {
	return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function wa(e, t, n) {
	let r = /* @__PURE__ */ B(t), i = n.propsOptions[0], a = Object.keys(e).map((e) => D(e));
	for (let e in i) {
		let t = i[e];
		t != null && Ta(e, r[e], t, process.env.NODE_ENV === "production" ? r : /* @__PURE__ */ qt(r), !a.includes(e));
	}
}
function Ta(e, t, n, r, i) {
	let { type: a, required: o, validator: s, skipCheck: c } = n;
	if (o && i) {
		W("Missing required prop: \"" + e + "\"");
		return;
	}
	if (t != null || o) {
		if (a != null && a !== !0 && !c) {
			let n = !1, r = d(a) ? a : [a], i = [];
			for (let e = 0; e < r.length && !n; e++) {
				let { valid: a, expectedType: o } = Da(t, r[e]);
				i.push(o || ""), n = a;
			}
			if (!n) {
				W(Oa(e, t, i));
				return;
			}
		}
		s && !s(t, r) && W("Invalid prop: custom validator check failed for prop \"" + e + "\".");
	}
}
var Ea = /* @__PURE__ */ e("String,Number,Boolean,Function,Symbol,BigInt");
function Da(e, t) {
	let n, r = Ca(t);
	if (r === "null") n = e === null;
	else if (Ea(r)) {
		let i = typeof e;
		n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
	} else n = r === "Object" ? v(e) : r === "Array" ? d(e) : e instanceof t;
	return {
		valid: n,
		expectedType: r
	};
}
function Oa(e, t, n) {
	if (n.length === 0) return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
	let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(A).join(" | ")}`, i = n[0], a = S(t), o = ka(t, i), s = ka(t, a);
	return n.length === 1 && Aa(i) && ja(i, a) && (r += ` with value ${o}`), r += `, got ${a} `, Aa(a) && (r += `with value ${s}.`), r;
}
function ka(e, t) {
	return _(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Aa(e) {
	return [
		"string",
		"number",
		"boolean"
	].some((t) => e.toLowerCase() === t);
}
function ja(...e) {
	return e.every((e) => {
		let t = e.toLowerCase();
		return t !== "boolean" && t !== "symbol";
	});
}
var Ma = (e) => e === "_" || e === "_ctx" || e === "$stable", Na = (e) => d(e) ? e.map(Do) : [Do(e)], Pa = (e, t, n) => {
	if (t._n) return t;
	let r = Or((...r) => (process.env.NODE_ENV !== "production" && Q && !(n === null && Tr) && !(n && n.root !== Q.root) && W(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Na(t(...r))), n);
	return r._c = !1, r;
}, Fa = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (Ma(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = Pa(n, i, r);
		else if (i != null) {
			process.env.NODE_ENV !== "production" && W(`Non-function value encountered for slot "${n}". Prefer function slots for better performance.`);
			let e = Na(i);
			t[n] = () => e;
		}
	}
}, Ia = (e, t) => {
	process.env.NODE_ENV !== "production" && !ei(e.vnode) && W("Non-function value encountered for default slot. Prefer function slots for better performance.");
	let n = Na(t);
	e.slots.default = () => n;
}, La = (e, t, n) => {
	for (let r in t) (n || !Ma(r)) && (e[r] = t[r]);
}, Ra = (e, t, n) => {
	let r = e.slots = pa();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (La(r, t, n), n && ie(r, "_", e, !0)) : Fa(t, r);
	} else t && Ia(e, t);
}, za = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let t = n._;
		t ? process.env.NODE_ENV !== "production" && Zn ? (La(a, n, r), st(e, "set", "$slots")) : r && t === 1 ? o = !1 : La(a, n, r) : (o = !n.$stable, Fa(n, a)), s = n;
	} else n && (Ia(e, n), s = { default: 1 });
	if (o) for (let e in a) !Ma(e) && s[e] == null && delete a[e];
}, Ba, Va;
function Ha(e, t) {
	e.appContext.config.performance && Wa() && Va.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && xr(e, t, Wa() ? Va.now() : Date.now());
}
function Ua(e, t) {
	if (e.appContext.config.performance && Wa()) {
		let n = `vue-${t}-${e.uid}`, r = n + ":end", i = `<${ns(e, e.type)}> ${t}`;
		Va.mark(r), Va.measure(i, n, r), Va.clearMeasures(i), Va.clearMarks(n), Va.clearMarks(r);
	}
	process.env.NODE_ENV !== "production" && Sr(e, t, Wa() ? Va.now() : Date.now());
}
function Wa() {
	return Ba === void 0 && (typeof window < "u" && window.performance ? (Ba = !0, Va = window.performance) : Ba = !1), Ba;
}
function Ga() {
	let e = [];
	if (process.env.NODE_ENV !== "production" && e.length) {
		let t = e.length > 1;
		console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
	}
}
var Ka = io;
function qa(e) {
	return Ja(e);
}
function Ja(e, i) {
	Ga();
	let a = oe();
	a.__VUE__ = !0, process.env.NODE_ENV !== "production" && pr(a.__VUE_DEVTOOLS_GLOBAL_HOOK__, a);
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, r, i = null, a = null, o = null, s = void 0, c = null, l = process.env.NODE_ENV !== "production" && Zn ? !1 : !!t.dynamicChildren) => {
		if (e === t) return;
		e && !_o(e, t) && (i = _e(e), fe(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === n && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case ao:
				y(e, t, r, i);
				break;
			case oo:
				b(e, t, r, i);
				break;
			case so:
				e == null ? x(t, r, i, s) : process.env.NODE_ENV !== "production" && S(e, t, r, s);
				break;
			case K:
				ne(e, t, r, i, a, o, s, c, l);
				break;
			default: f & 1 ? E(e, t, r, i, a, o, s, c, l) : f & 6 ? j(e, t, r, i, a, o, s, c, l) : f & 64 || f & 128 ? u.process(e, t, r, i, a, o, s, c, l, be) : process.env.NODE_ENV !== "production" && W("Invalid VNode type:", u, `(${typeof u})`);
		}
		d != null && a ? Zr(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Zr(e.ref, null, o, e, !0);
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
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), O(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && D(e.children, d, null, r, i, Ya(e, a), s, u), _ && jr(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !T(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && jo(f, r, e);
		}
		process.env.NODE_ENV !== "production" && (ie(d, "__vnode", e, !0), ie(d, "__vueParentComponent", r, !0)), _ && jr(e, null, r, "beforeMount");
		let v = Za(i, g);
		if (v && g.beforeEnter(d), o(d, t, n), (f = m && m.onVnodeMounted) || v || _) {
			let t = process.env.NODE_ENV !== "production" && Zn;
			Ka(() => {
				let n;
				process.env.NODE_ENV !== "production" && (n = Qn(t));
				try {
					f && jo(f, r, e), v && g.enter(d), _ && jr(e, null, r, "mounted");
				} finally {
					process.env.NODE_ENV !== "production" && Qn(n);
				}
			}, i);
		}
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048 && (n = ia(n.children) || n), t === n || ro(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, D = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Oo(e[l]) : Do(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, O = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el;
		process.env.NODE_ENV !== "production" && (l.__vnode = n);
		let { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Xa(r, !1), (g = h.onVnodeBeforeUpdate) && jo(g, r, n, e), f && jr(n, e, r, "beforeUpdate"), r && Xa(r, !0), (process.env.NODE_ENV !== "production" && Zn || d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length)) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? (k(e.dynamicChildren, d, l, r, i, Ya(n, a), o), process.env.NODE_ENV !== "production" && Qa(e, n)) : s || ce(e, n, l, null, r, i, Ya(n, a), o, !1), u > 0) {
			if (u & 16) A(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && A(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && Ka(() => {
			g && jo(g, r, n, e), f && jr(n, e, r, "updated");
		}, i);
	}, k = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === K || !_o(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, A = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !T(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (T(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ne = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		process.env.NODE_ENV !== "production" && (Zn || p & 2048) && (p = 0, l = !1, m = null), h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), D(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (k(e.dynamicChildren, m, n, i, a, s, c), process.env.NODE_ENV === "production" ? (t.key != null || i && t === i.subTree) && Qa(e, t, !0) : Qa(e, t)) : ce(e, t, n, f, i, a, s, c, l);
	}, j = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : M(t, n, r, i, a, o, c) : ae(e, t, c);
	}, M = (e, t, n, r, i, a, o) => {
		let s = e.component = Po(e, r, i);
		if (process.env.NODE_ENV !== "production" && s.type.__hmrId && tr(s), process.env.NODE_ENV !== "production" && (bn(e), Ha(s, "mount")), ei(e) && (s.ctx.renderer = be), process.env.NODE_ENV !== "production" && Ha(s, "init"), Wo(s, !1, o), process.env.NODE_ENV !== "production" && Ua(s, "init"), process.env.NODE_ENV !== "production" && Zn && (e.el = null), s.asyncDep) {
			if (i && i.registerDep(s, se, o), !e.el) {
				let r = s.subTree = X(oo);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else se(s, e, t, n, i, a, o);
		process.env.NODE_ENV !== "production" && (xn(), Ua(s, "mount"));
	}, ae = (e, t, n) => {
		let r = t.component = e.component;
		if (ca(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				process.env.NODE_ENV !== "production" && bn(t), t.el = e.el, N(r, t, n), process.env.NODE_ENV !== "production" && xn();
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, se = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = eo(e);
					if (n) {
						t && (t.el = c.el, N(e, t, o)), n.asyncDep.then(() => {
							Ka(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				process.env.NODE_ENV !== "production" && bn(t || e.vnode), Xa(e, !1), t ? (t.el = c.el, N(e, t, o)) : t = c, n && re(n), (d = t.props && t.props.onVnodeBeforeUpdate) && jo(d, s, t, c), Xa(e, !0), process.env.NODE_ENV !== "production" && Ha(e, "render");
				let f = na(e);
				process.env.NODE_ENV !== "production" && Ua(e, "render");
				let p = e.subTree;
				e.subTree = f, process.env.NODE_ENV !== "production" && Ha(e, "patch"), v(p, f, m(p.el), _e(p), e, i, a), process.env.NODE_ENV !== "production" && Ua(e, "patch"), t.el = f.el, u === null && da(e, f.el), r && Ka(r, i), (d = t.props && t.props.onVnodeUpdated) && Ka(() => jo(d, s, t, c), i), process.env.NODE_ENV !== "production" && _r(e), process.env.NODE_ENV !== "production" && xn();
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = $r(t);
				if (Xa(e, !1), l && re(l), !m && (o = c && c.onVnodeBeforeMount) && jo(o, d, t), Xa(e, !0), s && Se) {
					let t = () => {
						process.env.NODE_ENV !== "production" && Ha(e, "render"), e.subTree = na(e), process.env.NODE_ENV !== "production" && Ua(e, "render"), process.env.NODE_ENV !== "production" && Ha(e, "hydrate"), Se(s, e.subTree, e, i, null), process.env.NODE_ENV !== "production" && Ua(e, "hydrate");
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0), process.env.NODE_ENV !== "production" && Ha(e, "render");
					let o = e.subTree = na(e);
					process.env.NODE_ENV !== "production" && Ua(e, "render"), process.env.NODE_ENV !== "production" && Ha(e, "patch"), v(null, o, n, r, e, i, a), process.env.NODE_ENV !== "production" && Ua(e, "patch"), t.el = o.el;
				}
				if (u && Ka(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					Ka(() => jo(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && $r(d.vnode) && d.vnode.shapeFlag & 256) && e.a && Ka(e.a, i), e.isMounted = !0, process.env.NODE_ENV !== "production" && gr(e), t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Fe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Un(u), Xa(e, !0), process.env.NODE_ENV !== "production" && (c.onTrack = e.rtc ? (t) => re(e.rtc, t) : void 0, c.onTrigger = e.rtg ? (t) => re(e.rtg, t) : void 0), l();
	}, N = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, _a(e, t.props, r, n), za(e, t.children, n), Xe(), Kn(e), Ze();
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
		m & 8 ? (u & 16 && ge(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? ue(l, d, n, r, i, a, o, s, c) : ge(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && D(d, n, r, i, a, o, s, c));
	}, le = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let n = t[p] = l ? Oo(t[p]) : Do(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ge(e, a, o, !0, !1, f) : D(t, r, i, a, o, s, c, l, f);
	}, ue = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? Oo(t[u]) : Do(t[u]);
			if (_o(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? Oo(t[p]) : Do(t[p]);
			if (_o(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? Oo(t[u]) : Do(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) fe(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Oo(t[u]) : Do(t[u]);
				e.key != null && (process.env.NODE_ENV !== "production" && g.has(e.key) && W("Duplicate keys found during update:", JSON.stringify(e.key), "Make sure keys are unique."), g.set(e.key, u));
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					fe(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && _o(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? fe(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? $a(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || no(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? de(n, r, p, 2) : _--);
			}
		}
	}, de = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			de(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, be);
			return;
		}
		if (c === K) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) de(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === so) {
			C(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Hr] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), Ka(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Hr];
					a._isLeaving && a[Hr](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, fe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (Xe(), Zr(s, null, n, e, !0), Ze()), p != null && (!e.ctx || e.ctx === t) && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !$r(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && jo(_, t, e), u & 6) he(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && jr(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, be, r) : l && !l.hasOnce && (a !== K || d > 0 && d & 64) ? ge(l, t, n, !1, !0) : (a === K && d & 384 || !i && u & 16) && ge(c, t, n), r && pe(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && Ka(() => {
			_ && jo(_, t, e), h && jr(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, pe = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === K) {
			process.env.NODE_ENV !== "production" && e.patchFlag > 0 && e.patchFlag & 2048 && i && !i.persisted ? e.children.forEach((e) => {
				e.type === oo ? s(e.el) : pe(e);
			}) : me(n, r);
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
	}, me = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, he = (e, t, n) => {
		process.env.NODE_ENV !== "production" && e.type.__hmrId && nr(e);
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		to(c), to(l), r && re(r), i.stop(), a ? (a.flags |= 8, fe(o, e, t, n)) : e.vnode.el && o && (o.transition = e.vnode.transition, fe(o, e, t, n)), s && Ka(s, t), Ka(() => {
			e.isUnmounted = !0;
		}, t), process.env.NODE_ENV !== "production" && yr(e);
	}, ge = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) fe(e[o], t, n, r, i);
	}, _e = (e) => {
		if (e.shapeFlag & 6) return _e(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Br];
		return n ? h(n) : t;
	}, ve = !1, ye = (e, t, n) => {
		let r;
		e == null ? t._vnode && (fe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ve ||= (ve = !0, Kn(r), qn(), !1);
	}, be = {
		p: v,
		um: fe,
		m: de,
		r: pe,
		mt: M,
		mc: D,
		pc: ce,
		pbc: k,
		n: _e,
		o: e
	}, xe, Se;
	return i && ([xe, Se] = i(be)), {
		render: ye,
		hydrate: xe,
		createApp: qi(ye, xe)
	};
}
function Ya({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xa({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Za(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qa(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Oo(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Qa(t, a)), a.type === ao && (a.patchFlag === -1 && (a = i[e] = Oo(a)), a.el = t.el), a.type === oo && !a.el && (a.el = t.el), process.env.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
	}
}
function $a(e) {
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
function eo(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : eo(t);
}
function to(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function no(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? no(t.subTree) : null;
}
var ro = (e) => e.__isSuspense;
function io(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Gn(e);
}
var K = /* @__PURE__ */ Symbol.for("v-fgt"), ao = /* @__PURE__ */ Symbol.for("v-txt"), oo = /* @__PURE__ */ Symbol.for("v-cmt"), so = /* @__PURE__ */ Symbol.for("v-stc"), co = [], lo = null;
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
		let n = $n.get(t.type);
		if (n && n.has(e.component)) return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
	}
	return e.type === t.type && e.key === t.key;
}
var vo = (...e) => So(...e), yo = ({ key: e }) => e ?? null, bo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ V(e) || h(e) ? {
	i: Tr,
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
		key: t && yo(t),
		ref: t && bo(t),
		scopeId: Er,
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
		ctx: Tr
	};
	if (s ? (ko(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && W("VNode created with invalid key (NaN). VNode type:", c.type), process.env.NODE_ENV !== "production" && t && c.shapeFlag & 1) {
		let e = t.innerHTML == null ? t.textContent == null ? null : "textContent" : "innerHTML";
		e && xo(c.children) && W(`The \`${e}\` prop on <${c.type}> will override its children. Remove either the \`${e}\` prop or the children.`);
	}
	return fo > 0 && !o && lo && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && lo.push(c), c;
}
function xo(e) {
	return g(e) ? e !== "" : d(e) ? e.length > 0 : !1;
}
var X = process.env.NODE_ENV === "production" ? So : vo;
function So(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === _i) && (process.env.NODE_ENV !== "production" && !e && W(`Invalid vnode type when creating vnode: ${e}.`), e = oo), go(e)) {
		let r = wo(e, t, !0);
		return n && ko(r, n), fo > 0 && !a && lo && (r.shapeFlag & 6 ? lo[lo.indexOf(e)] = r : lo.push(r)), r.patchFlag = -2, r;
	}
	if (rs(e) && (e = e.__vccOpts), t) {
		t = Co(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = de(e)), v(n) && (/* @__PURE__ */ Zt(n) && !d(n) && (n = s({}, n)), t.style = se(n));
	}
	let o = g(e) ? 1 : ro(e) ? 128 : Vr(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return process.env.NODE_ENV !== "production" && o & 4 && /* @__PURE__ */ Zt(e) && (e = /* @__PURE__ */ B(e), W("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", "\nComponent that was made reactive: ", e)), Y(e, t, n, r, i, o, a, !0);
}
function Co(e) {
	return e ? /* @__PURE__ */ Zt(e) || ma(e) ? s({}, e) : e : null;
}
function wo(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Ao(i || {}, t) : i, u = {
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
		patchFlag: t && e.type !== K ? o === -1 ? 16 : o | 16 : o,
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
	return c && r && Gr(u, c.clone(u)), u;
}
function To(e) {
	let t = wo(e);
	return d(e.children) && (t.children = e.children.map(To)), t;
}
function Eo(e = " ", t = 0) {
	return X(ao, null, e, t);
}
function Z(e = "", t = !1) {
	return t ? (q(), ho(oo, null, e)) : X(oo, null, e);
}
function Do(e) {
	return e == null || typeof e == "boolean" ? X(oo) : d(e) ? X(K, null, e.slice()) : go(e) ? Oo(e) : X(ao, null, String(e));
}
function Oo(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : wo(e);
}
function ko(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), ko(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !ma(t) ? t._ctx = Tr : r === 3 && Tr && (Tr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (h(t)) {
		if (r & 65) {
			ko(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: Tr
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Eo(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Ao(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = de([t.class, r.class]));
		else if (e === "style") t.style = se([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function jo(e, t, n, r = null) {
	An(e, t, 7, [n, r]);
}
var Mo = Gi(), No = 0;
function Po(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || Mo, o = {
		uid: No++,
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
		scope: new je(!0),
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
		propsOptions: xa(i, a),
		emitsOptions: Qi(i, a),
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
	return o.ctx = process.env.NODE_ENV === "production" ? { _: o } : Ti(o), o.root = n ? n.root : o, o.emit = Xi.bind(null, o), e.ce && e.ce(o), o;
}
var Q = null, Fo = () => Q || Tr, Io, Lo;
{
	let e = oe(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Io = t("__VUE_INSTANCE_SETTERS__", (e) => Q = e), Lo = t("__VUE_SSR_SETTERS__", (e) => Uo = e);
}
var Ro = (e) => {
	let t = Q;
	return Io(e), e.scope.on(), () => {
		e.scope.off(), Io(t);
	};
}, zo = () => {
	Q && Q.scope.off(), Io(null);
}, Bo = /* @__PURE__ */ e("slot,component");
function Vo(e, { isNativeTag: t }) {
	(Bo(e) || t(e)) && W("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Ho(e) {
	return e.vnode.shapeFlag & 4;
}
var Uo = !1;
function Wo(e, t = !1, n = !1) {
	t && Lo(t);
	let { props: r, children: i } = e.vnode, a = Ho(e);
	ha(e, r, a, t), Ra(e, i, n || t);
	let o = a ? Go(e, t) : void 0;
	return t && Lo(!1), o;
}
function Go(e, t) {
	let n = e.type;
	if (process.env.NODE_ENV !== "production") {
		if (n.name && Vo(n.name, e.appContext.config), n.components) {
			let t = Object.keys(n.components);
			for (let n = 0; n < t.length; n++) Vo(t[n], e.appContext.config);
		}
		if (n.directives) {
			let e = Object.keys(n.directives);
			for (let t = 0; t < e.length; t++) kr(e[t]);
		}
		n.compilerOptions && qo() && W("\"compilerOptions\" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.");
	}
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, wi), process.env.NODE_ENV !== "production" && Ei(e);
	let { setup: r } = n;
	if (r) {
		Xe();
		let i = e.setupContext = r.length > 1 ? Zo(e) : null, a = Ro(e), o = kn(r, e, 0, [process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ qt(e.props), i]), s = y(o);
		if (Ze(), a(), (s || e.sp) && !$r(e) && qr(e), s) {
			if (o.then(zo, zo), t) return o.then((n) => {
				Lo(!0);
				try {
					Ko(e, n, t);
				} finally {
					Lo(!1);
				}
			}).catch((t) => {
				jn(t, e, 0);
			});
			e.asyncDep = o, process.env.NODE_ENV !== "production" && !e.suspense && W(`Component <${ns(e, n)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
		} else Ko(e, o, t);
	} else Jo(e, t);
}
function Ko(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) ? (process.env.NODE_ENV !== "production" && go(t) && W("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = on(t), process.env.NODE_ENV !== "production" && Di(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && W(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Jo(e, n);
}
var qo = () => !0;
function Jo(e, t, n) {
	let i = e.type;
	e.render ||= i.render || r;
	{
		let t = Ro(e);
		Xe();
		try {
			ji(e);
		} finally {
			Ze(), t();
		}
	}
	process.env.NODE_ENV !== "production" && !i.render && e.render === r && !t && (i.template ? W("Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\".") : W("Component is missing template or render function: ", i));
}
var Yo = process.env.NODE_ENV === "production" ? { get(e, t) {
	return L(e, "get", ""), e[t];
} } : {
	get(e, t) {
		return ta(), L(e, "get", ""), e[t];
	},
	set() {
		return W("setupContext.attrs is readonly."), !1;
	},
	deleteProperty() {
		return W("setupContext.attrs is readonly."), !1;
	}
};
function Xo(e) {
	return new Proxy(e.slots, { get(t, n) {
		return L(e, "get", "$slots"), t[n];
	} });
}
function Zo(e) {
	let t = (t) => {
		if (process.env.NODE_ENV !== "production" && (e.exposed && W("expose() should be called only once per setup()."), t != null)) {
			let e = typeof t;
			e === "object" && (d(t) ? e = "array" : /* @__PURE__ */ V(t) && (e = "ref")), e !== "object" && W(`expose() should be passed a plain object, received ${e}.`);
		}
		e.exposed = t || {};
	};
	if (process.env.NODE_ENV !== "production") {
		let n, r;
		return Object.freeze({
			get attrs() {
				return n ||= new Proxy(e.attrs, Yo);
			},
			get slots() {
				return r ||= Xo(e);
			},
			get emit() {
				return (t, ...n) => e.emit(t, ...n);
			},
			expose: t
		});
	}
	return {
		attrs: new Proxy(e.attrs, Yo),
		slots: e.slots,
		emit: e.emit,
		expose: t
	};
}
function Qo(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(on(Qt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in xi) return xi[n](e);
		},
		has(e, t) {
			return t in e || t in xi;
		}
	}) : e.proxy;
}
var $o = /(?:^|[-_])\w/g, es = (e) => e.replace($o, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function ts(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ns(e, t, n = !1) {
	let r = ts(t);
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
	return r ? es(r) : n ? "App" : "Anonymous";
}
function rs(e) {
	return h(e) && "__vccOpts" in e;
}
var is = (e, t) => {
	let n = /* @__PURE__ */ fn(e, t, Uo);
	if (process.env.NODE_ENV !== "production") {
		let e = Fo();
		e && e.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
	}
	return n;
};
function as(e, t, n) {
	try {
		po(-1);
		let r = arguments.length;
		return r === 2 ? v(t) && !d(t) ? go(t) ? X(e, null, [t]) : X(e, t) : X(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && go(n) && (n = [n]), X(e, t, n));
	} finally {
		po(1);
	}
}
function os() {
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
			if (/* @__PURE__ */ V(t)) {
				Xe();
				let n = t.value;
				return Ze(), [
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
			return /* @__PURE__ */ Yt(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ z(t) ? "ShallowReactive" : "Reactive"
				],
				"<",
				l(t),
				`>${/* @__PURE__ */ Xt(t) ? " (readonly)" : ""}`
			] : /* @__PURE__ */ Xt(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ z(t) ? "ShallowReadonly" : "Readonly"
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
		e.type.props && e.props && n.push(c("props", /* @__PURE__ */ B(e.props))), e.setupState !== t && n.push(c("setup", e.setupState)), e.data !== t && n.push(c("data", /* @__PURE__ */ B(e.data)));
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
		] : v(e) ? ["object", { object: t ? /* @__PURE__ */ B(e) : e }] : [
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
		return /* @__PURE__ */ z(e) ? "ShallowRef" : e.effect ? "ComputedRef" : "Ref";
	}
	window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
var ss = "3.5.43", cs = process.env.NODE_ENV === "production" ? r : W;
process.env.NODE_ENV, process.env.NODE_ENV;
//#endregion
//#region node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var ls = void 0, us = typeof window < "u" && window.trustedTypes;
if (us) try {
	ls = /* @__PURE__ */ us.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {
	process.env.NODE_ENV !== "production" && cs(`Error creating trusted types policy: ${e}`);
}
var ds = ls ? (e) => ls.createHTML(e) : (e) => e, fs = "http://www.w3.org/2000/svg", ps = "http://www.w3.org/1998/Math/MathML", ms = typeof document < "u" ? document : null, hs = ms && /* @__PURE__ */ ms.createElement("template"), gs = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ms.createElementNS(fs, e) : t === "mathml" ? ms.createElementNS(ps, e) : n ? ms.createElement(e, { is: n }) : ms.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ms.createTextNode(e),
	createComment: (e) => ms.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ms.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			hs.innerHTML = ds(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = hs.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, _s = /* @__PURE__ */ Symbol("_vtc");
function vs(e, t, n) {
	let r = e[_s];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var ys = /* @__PURE__ */ Symbol("_vod"), bs = /* @__PURE__ */ Symbol("_vsh"), xs = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "CSS_VAR_TEXT"), Ss = /(?:^|;)\s*display\s*:/;
function Cs(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) {
			if (g(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Es(r, t, "");
			}
			else for (let e in t) n[e] ?? Es(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Es(r, i, "") : As(e, i, !g(t) && t ? t[i] : void 0, o) || Es(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[xs];
			e && (n += ";" + e), r.cssText = n, a = Ss.test(n);
		}
	} else t && e.removeAttribute("style");
	ys in e && (e[ys] = a ? r.display : "", e[bs] && (r.display = "none"));
}
var ws = /[^\\];\s*$/, Ts = /\s*!important$/;
function Es(e, t, n) {
	if (d(n)) n.forEach((n) => Es(e, t, n));
	else if (n ??= "", process.env.NODE_ENV !== "production" && ws.test(n) && cs(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--")) Ts.test(n) ? e.setProperty(t, n.replace(Ts, ""), "important") : e.setProperty(t, n);
	else {
		let r = ks(e, t);
		Ts.test(n) ? e.setProperty(k(r), n.replace(Ts, ""), "important") : e[r] = n;
	}
}
var Ds = [
	"Webkit",
	"Moz",
	"ms"
], Os = {};
function ks(e, t) {
	let n = Os[t];
	if (n) return n;
	let r = D(t);
	if (r !== "filter" && r in e) return Os[t] = r;
	r = A(r);
	for (let n = 0; n < Ds.length; n++) {
		let i = Ds[n] + r;
		if (i in e) return Os[t] = i;
	}
	return t;
}
function As(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var js = "http://www.w3.org/1999/xlink";
function Ms(e, t, n, r, i, a = ye(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(js, t.slice(6, t.length)) : e.setAttributeNS(js, t, n) : n == null || a && !be(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Ns(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ds(n) : n);
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
		r === "boolean" ? n = be(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch (e) {
		process.env.NODE_ENV !== "production" && !o && cs(`Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`, e);
	}
	o && e.removeAttribute(i || t);
}
function Ps(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Fs(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Is = /* @__PURE__ */ Symbol("_vei");
function Ls(e, t, n, r, i = null) {
	let a = e[Is] || (e[Is] = {}), o = a[t];
	if (r && o) o.value = process.env.NODE_ENV === "production" ? r : Gs(r, t);
	else {
		let [n, s] = Bs(t);
		r ? Ps(e, n, a[t] = Ws(process.env.NODE_ENV === "production" ? r : Gs(r, t), i), s) : o && (Fs(e, n, o, s), a[t] = void 0);
	}
}
var Rs = /(Once|Passive|Capture)$/, zs = /^on:?(?:Once|Passive|Capture)$/;
function Bs(e) {
	let t, n;
	for (; (n = e.match(Rs)) && !zs.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : k(e.slice(2)), t];
}
var Vs = 0, Hs = /* @__PURE__ */ Promise.resolve(), Us = () => Vs ||= (Hs.then(() => Vs = 0), Date.now());
function Ws(e, t) {
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
				e && An(e, t, 5, a);
			}
		} else An(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Us(), n;
}
function Gs(e, t) {
	return h(e) || d(e) ? e : (cs(`Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`), r);
}
var Ks = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, qs = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? vs(e, r, c) : t === "style" ? Cs(e, n, r) : a(t) ? o(t) || Ls(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Js(e, t, r, c)) ? (Ns(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ms(e, t, r, c, s, t !== "value")) : e._isVueCE && (Ys(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Ns(e, D(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ms(e, t, r, c));
};
function Js(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Ks(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Ks(t) && g(n) ? !1 : t in e;
}
function Ys(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = D(t);
	return Array.isArray(n) ? n.some((e) => D(e) === r) : Object.keys(n).some((e) => D(e) === r);
}
var Xs = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => re(t, e) : t;
};
function Zs(e) {
	e.target.composing = !0;
}
function Qs(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var $s = /* @__PURE__ */ Symbol("_assign"), ec = /* @__PURE__ */ Symbol("_initialValue");
function tc(e, t, n) {
	return t && (e = e.trim()), n && (e = M(e)), e;
}
var nc = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[ec] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[ec] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[$s] = Xs(i);
		let a = r || i.props && i.props.type === "number";
		Ps(e, t ? "change" : "input", (t) => {
			t.target.composing || e[$s](tc(e.value, n, a));
		}), (n || a) && Ps(e, "change", () => {
			e.value = tc(e.value, n, a);
		}), t || (Ps(e, "compositionstart", Zs), Ps(e, "compositionend", Qs), Ps(e, "change", Qs));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[ec];
		delete e[ec], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[$s](tc(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[$s] = Xs(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? M(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, rc = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Ps(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? M(oc(e)) : oc(e)), r = e.multiple, i = r ? p(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? d(i) ? t.slice() : t : i];
			try {
				e[$s](i);
			} finally {
				Vn(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[$s] = Xs(r);
	},
	mounted(e, { value: t }) {
		ac(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[$s] = Xs(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, (!n || n[0] !== e.multiple || !ic(t, n[1], n[0])) && ac(e, t);
	}
};
function ic(e, t, n) {
	if (!n || d(e)) return Te(e, t);
	if (p(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function ac(e, t) {
	let n = e.multiple, r = d(t);
	if (n && !r && !p(t)) {
		process.env.NODE_ENV !== "production" && cs(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
		return;
	}
	for (let i = 0, a = e.options.length; i < a; i++) {
		let a = e.options[i], o = oc(a);
		if (n) {
			if (r) {
				let e = typeof o;
				a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : Ee(t, o) > -1;
			} else a.selected = t.has(o);
		} else if (Te(oc(a), t)) {
			e.selectedIndex !== i && (e.selectedIndex = i);
			return;
		}
	}
	!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function oc(e) {
	return "_value" in e ? e._value : e.value;
}
var sc = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], cc = {
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
	exact: (e, t) => sc.some((n) => e[`${n}Key`] && !t.includes(n))
}, lc = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = cc[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, uc = /* @__PURE__ */ s({ patchProp: qs }, gs), dc;
function fc() {
	return dc ||= qa(uc);
}
var pc = ((...e) => {
	let t = fc().createApp(...e);
	process.env.NODE_ENV !== "production" && (hc(t), gc(t));
	let { mount: n } = t;
	return t.mount = (e) => {
		let r = _c(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, mc(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function mc(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function hc(e) {
	Object.defineProperty(e.config, "isNativeTag", {
		value: (e) => he(e) || ge(e) || _e(e),
		writable: !1
	});
}
function gc(e) {
	if (qo()) {
		let t = e.config.isCustomElement;
		Object.defineProperty(e.config, "isCustomElement", {
			get() {
				return t;
			},
			set() {
				cs("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
			}
		});
		let n = e.config.compilerOptions, r = "The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka \"full build\"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc";
		Object.defineProperty(e.config, "compilerOptions", {
			get() {
				return cs(r), n;
			},
			set() {
				cs(r);
			}
		});
	}
}
function _c(e) {
	if (g(e)) {
		let t = document.querySelector(e);
		return process.env.NODE_ENV !== "production" && !t && cs(`Failed to mount app: mount target selector "${e}" returned null.`), t;
	}
	return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && cs("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs"), e;
}
//#endregion
//#region node_modules/vue/dist/vue.runtime.esm-bundler.js
function vc() {
	os();
}
process.env.NODE_ENV !== "production" && vc();
//#endregion
//#region src/security-api.ts
var yc = class extends Error {
	status;
	code;
	fields;
	constructor(e, t, n = "No fue posible completar la solicitud.", r = []) {
		super(n), this.status = e, this.code = t, this.fields = r, this.name = "ApiError";
	}
}, bc = class {
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
			throw e instanceof DOMException && e.name === "AbortError" ? e : new yc(0, "NETWORK_ERROR", "No fue posible conectar con el PDP.");
		}
		if (!i.ok) {
			let e = await i.json().catch(() => null), t = i.status === 403 ? "No tiene permisos para administrar la seguridad de esta aplicación." : i.status === 404 ? "El elemento ya no existe o no pertenece a esta aplicación." : i.status === 409 ? "La operación entra en conflicto con el estado actual." : i.status === 400 ? "Revise los datos ingresados." : `El servicio respondió ${i.status}.`;
			throw new yc(i.status, e?.code, i.status === 403 ? t : e?.detail ?? e?.message ?? t, e?.fieldErrors ?? e?.errors ?? []);
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
function xc(e) {
	let t = /* @__PURE__ */ H(""), n = /* @__PURE__ */ H(), r = /* @__PURE__ */ H(!1), i = /* @__PURE__ */ H(""), a = /* @__PURE__ */ H(!1), o = /* @__PURE__ */ R(/* @__PURE__ */ new Set()), s = /* @__PURE__ */ R($()), c = /* @__PURE__ */ R($()), l = /* @__PURE__ */ R($()), u = /* @__PURE__ */ R($()), d = /* @__PURE__ */ R($()), f = /* @__PURE__ */ R($()), p = /* @__PURE__ */ R($()), m = /* @__PURE__ */ R($()), h = /* @__PURE__ */ R($()), g = /* @__PURE__ */ R($()), _ = /* @__PURE__ */ R($()), v = /* @__PURE__ */ R($()), y = /* @__PURE__ */ R($()), b = /* @__PURE__ */ R($()), x = /* @__PURE__ */ new Map(), S, C = is(() => new bc(e.value)), w = is(() => !!n.value && !r.value), T = {
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
	}, ee = (e, n, r) => `${t.value}:${e}:${n}:${r}`;
	function te() {
		x.clear(), n.value = void 0;
		for (let e of Object.values(E)) Object.assign(e, $(), { limit: e.limit });
		Object.assign(p, $()), Object.assign(m, $()), Object.assign(h, $()), Object.assign(g, $()), Object.assign(_, $()), Object.assign(v, $()), Object.assign(y, $()), Object.assign(b, $());
	}
	async function D() {
		S?.abort(), S = new AbortController(), r.value = !0, i.value = "";
		try {
			let e = await C.value.resolveApplicationId(S.signal);
			t.value = e, n.value = await C.value.getSummary(e, S.signal);
		} catch (e) {
			jc(e) || (i.value = Mc(e));
		} finally {
			r.value = !1;
		}
	}
	async function O(e, n = E[e].page, r = !1) {
		if (!t.value) return;
		let i = E[e], a = ee(e, n, i.limit);
		i.abortController?.abort(), i.error = null;
		let o = !r && x.get(a);
		if (o) {
			Ac(i, o);
			return;
		}
		let s = new AbortController();
		i.abortController = s, i.loading = !0;
		try {
			let r = await T[e](C.value, t.value, n, i.limit, s.signal);
			if (i.abortController !== s) return;
			x.set(a, r), Ac(i, r);
		} catch (e) {
			!jc(e) && i.abortController === s && (i.error = Mc(e));
		} finally {
			i.abortController === s && (i.loading = !1);
		}
	}
	async function k(e, n = 0) {
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
			Ac(p, i);
		} catch (e) {
			jc(e) || (p.error = Mc(e));
		} finally {
			p.abortController === r && (p.loading = !1);
		}
	}
	async function A(e, n = m.page, r = !1) {
		return M("role-resources", e, m, (r) => C.value.getRoleResources(t.value, e, {
			page: n,
			size: m.limit
		}, r), n, r);
	}
	async function ne(e, n = h.page, r = !1) {
		return M("profile-roles", e, h, (r) => C.value.getProfileRoles(t.value, e, {
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
			Ac(_, a.roleAssignments), Ac(v, a.profileAssignments);
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
			x.set(i, r), Ac(_, r.roleAssignments), Ac(v, r.profileAssignments);
		} catch (e) {
			if (!jc(e)) {
				let t = Mc(e);
				_.error = v.error = t;
			}
		} finally {
			_.abortController === o && (_.loading = v.loading = !1);
		}
	}
	async function re(e, n = y.page, r = !1) {
		return M("role-assignments", e, y, (r) => C.value.getAssignmentsForRole(t.value, e, {
			page: n,
			size: y.limit
		}, r), n, r);
	}
	async function ie(e, n = b.page, r = !1) {
		return M("profile-assignments", e, b, (r) => C.value.getAssignmentsForProfile(t.value, e, {
			page: n,
			size: b.limit
		}, r), n, r);
	}
	async function M(e, n, r, i, a, o) {
		if (!t.value) return;
		let s = `${t.value}:${n}:${e}:${a}:${r.limit}`;
		r.abortController?.abort(), r.error = null;
		let c = o ? void 0 : x.get(s);
		if (c) {
			Ac(r, c);
			return;
		}
		let l = new AbortController();
		r.abortController = l, r.loading = !0;
		try {
			let e = await i(l.signal);
			if (r.abortController !== l) return;
			x.set(s, e), Ac(r, e);
		} catch (e) {
			!jc(e) && r.abortController === l && (r.error = Mc(e));
		} finally {
			r.abortController === l && (r.loading = !1);
		}
	}
	function ae(...e) {
		for (let r of e) {
			if (r === "summary") {
				n.value = void 0;
				continue;
			}
			for (let e of x.keys()) e.startsWith(`${t.value}:${r}:`) && x.delete(e);
			E[r].loaded = !1;
		}
	}
	function oe(e, n) {
		for (let r of x.keys()) r.startsWith(`${t.value}:${n}:${e}:`) && x.delete(r);
	}
	async function se() {
		te(), await D();
	}
	function N(e) {
		return e ? o.has(e) : o.size > 0;
	}
	async function ce(e, n, r = "global", s = !1) {
		if (!t.value || o.has(r)) return !1;
		o.add(r), a.value = !0, i.value = "";
		try {
			await e(C.value, t.value), ae(...n);
			let r = n.filter((e) => e !== "summary");
			return await Promise.all(r.map((e) => O(e, E[e].page, !0))), s && await Promise.all(r.filter((e) => E[e].page > 0 && E[e].content.length === 0).map((e) => O(e, E[e].page - 1, !0))), n.includes("summary") && await D(), !0;
		} catch (e) {
			return i.value = Mc(e), !1;
		} finally {
			o.delete(r), a.value = o.size > 0;
		}
	}
	return Ir(e, () => {
		te(), D();
	}, {
		immediate: !0,
		deep: !0
	}), Ne(() => {
		S?.abort();
		for (let e of Object.values(E)) e.abortController?.abort();
		p.abortController?.abort(), m.abortController?.abort(), h.abortController?.abort(), g.abortController?.abort(), _.abortController?.abort(), v.abortController?.abort(), y.abortController?.abort(), b.abortController?.abort();
	}), {
		applicationId: t,
		summary: n,
		summaryLoading: r,
		loading: r,
		saving: a,
		mutations: o,
		isMutating: N,
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
		load: O,
		loadSummary: D,
		loadRoleResources: A,
		loadProfileRoles: ne,
		loadUserAssignments: j,
		loadAssignmentsForRole: re,
		loadAssignmentsForProfile: ie,
		searchUsers: k,
		refresh: se,
		mutate: ce,
		invalidate: ae,
		invalidateRelation: oe
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
}, Pc = { class: "sub" }, Fc = { class: "actions bottom" }, Ic = ["disabled"], Lc = ["disabled"], Rc = /* @__PURE__ */ Kr({
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
			onClick: n[2] ||= lc((e) => t.$emit("cancel"), ["self"])
		}, [Y("div", Nc, [
			n[3] ||= Y("h3", { id: "confirm-title" }, "Confirmar acción destructiva", -1),
			Y("p", Pc, P(e.message), 1),
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
		])])) : Z("", !0);
	}
}), zc = ["aria-label"], Bc = ["disabled"], Vc = ["disabled"], Hc = /* @__PURE__ */ Kr({
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
			Y("span", null, "Página " + P(e.page + 1) + " de " + P(Math.ceil(e.total / e.limit)), 1),
			Y("button", {
				class: "quiet",
				disabled: (e.page + 1) * e.limit >= e.total || e.loading,
				onClick: n[1] ||= (e) => t.$emit("next")
			}, " Siguiente ", 8, Vc)
		], 8, zc)) : Z("", !0);
	}
}), Uc = {
	key: 0,
	class: "empty"
}, Wc = {
	key: 1,
	class: "stats"
}, Gc = /* @__PURE__ */ Kr({
	__name: "SecuritySummaryPanel",
	props: {
		summary: {},
		loading: { type: Boolean },
		assignmentCount: {}
	},
	setup(e) {
		return (t, n) => e.loading ? (q(), J("p", Uc, "Consultando políticas de seguridad…")) : e.summary ? (q(), J("div", Wc, [(q(!0), J(K, null, G([
			[e.summary.counts.administrators, "administradores"],
			[e.assignmentCount, "asignaciones"],
			[e.summary.counts.roles, "roles"],
			[e.summary.counts.resources, "recursos"]
		], (e) => (q(), J("div", {
			key: e[1],
			class: "stat"
		}, [Y("b", null, P(e[0]), 1), Y("small", null, P(e[1]), 1)]))), 128))])) : Z("", !0);
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
}, el = /* @__PURE__ */ Kr({
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
			e.state.loading ? (q(), J("div", qc, "Actualizando página…")) : Z("", !0),
			e.state.error ? (q(), J("p", Jc, P(e.state.error), 1)) : Z("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("span", Yc, P(t.method), 1),
				Y("div", Xc, [Y("strong", null, P(t.path), 1), r[2] ||= Y("small", null, "Recurso protegido", -1)]),
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
			e.state.loaded && !e.state.content.length ? (q(), J("p", $c, "No hay datos en esta página.")) : Z("", !0)
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
}, ll = /* @__PURE__ */ Kr({
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
		return (t, r) => (q(), J(K, null, [Y("div", {
			class: "panel",
			"aria-busy": e.state.loading
		}, [
			e.state.loading ? (q(), J("div", nl, "Actualizando página…")) : Z("", !0),
			e.state.error ? (q(), J("p", rl, P(e.state.error), 1)) : Z("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", il, [Y("strong", null, P(t.name), 1), Y("small", null, P(t.resourceCount ?? 0) + " recursos autorizados", 1)]),
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
			e.state.loaded && !e.state.content.length ? (q(), J("p", cl, "No hay datos en esta página.")) : Z("", !0)
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
}, vl = /* @__PURE__ */ Kr({
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
			e.state.loading ? (q(), J("div", dl, "Actualizando página…")) : Z("", !0),
			e.state.error ? (q(), J("p", fl, P(e.state.error), 1)) : Z("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.id,
				class: "row"
			}, [
				Y("div", pl, [Y("strong", null, P(t.name), 1), Y("small", null, P(t.roleCount ?? 0) + " roles agrupados", 1)]),
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
			e.state.loaded && !e.state.content.length ? (q(), J("p", _l, "No hay datos en esta página.")) : Z("", !0)
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
}, Tl = /* @__PURE__ */ Kr({
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
			e.state.loading ? (q(), J("div", bl, "Actualizando página…")) : Z("", !0),
			e.state.error ? (q(), J("p", xl, P(e.state.error), 1)) : Z("", !0),
			(q(!0), J(K, null, G(e.state.content, (t) => (q(), J("div", {
				key: t.user.id,
				class: "row"
			}, [Y("div", Sl, [
				Y("strong", null, P(t.user.name), 1),
				Y("small", null, P(t.user.email), 1),
				Y("small", null, "Administrador · desde " + P(r(t.validFrom)), 1)
			]), Y("button", {
				class: "quiet danger",
				disabled: e.busy,
				onClick: (e) => n("remove", t.user.id)
			}, "Retirar", 8, Cl)]))), 128)),
			e.state.loaded && !e.state.content.length ? (q(), J("p", wl, "No hay datos en esta página.")) : Z("", !0)
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
}), El = {
	class: "access-workbench",
	"aria-label": "Administración de personas y accesos"
}, Dl = {
	class: "perspective-tabs",
	role: "tablist",
	"aria-label": "Perspectiva de consulta"
}, Ol = ["aria-selected", "onClick"], kl = { class: "access-layout" }, Al = { class: "access-query" }, jl = { class: "search-field" }, Ml = {
	key: 0,
	class: "choices",
	"aria-label": "Resultados de personas"
}, Nl = ["onClick"], Pl = { class: "avatar" }, Fl = {
	key: 0,
	class: "empty compact"
}, Il = { class: "option-grid" }, Ll = ["onClick"], Rl = {
	key: 0,
	class: "empty compact"
}, zl = { class: "option-grid" }, Bl = ["onClick"], Vl = {
	key: 0,
	class: "empty compact"
}, Hl = { class: "access-results" }, Ul = {
	key: 0,
	class: "empty-state"
}, Wl = { class: "identity-strip" }, Gl = { class: "avatar large" }, Kl = {
	key: 0,
	class: "admin-mark"
}, ql = {
	key: 0,
	class: "error"
}, Jl = { class: "access-group" }, Yl = { class: "group-title" }, Xl = ["disabled", "onClick"], Zl = {
	key: 0,
	class: "empty compact"
}, Ql = { class: "access-group" }, $l = { class: "group-title" }, eu = ["disabled", "onClick"], tu = {
	key: 0,
	class: "empty compact"
}, nu = { class: "result-title" }, ru = { class: "count-badge" }, iu = {
	key: 0,
	class: "error"
}, au = { class: "avatar" }, ou = { class: "access-meta" }, su = ["disabled", "onClick"], cu = {
	key: 1,
	class: "empty compact"
}, lu = {
	key: 3,
	class: "empty-state"
}, uu = /* @__PURE__ */ Kr({
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
		let n = e, r = t, i = /* @__PURE__ */ H("person"), a = /* @__PURE__ */ H(""), o = /* @__PURE__ */ H(), s = /* @__PURE__ */ H(), c = /* @__PURE__ */ H();
		Ir(a, (e) => r("searchUsers", e));
		let l = is(() => i.value === "role" ? n.roleAssignments : n.profileAssignments);
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
		return (t, n) => (q(), J("section", El, [
			n[18] ||= Y("header", { class: "access-heading" }, [Y("div", null, [
				Y("p", { class: "kicker" }, "Consultar y ajustar"),
				Y("h4", null, "Personas y accesos"),
				Y("p", null, "Encuentre una relación vigente y actúe desde el mismo lugar.")
			]), Y("span", { class: "scope-mark" }, "Aplicación actual")], -1),
			Y("div", Dl, [(q(), J(K, null, G([
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
				class: de({ active: i.value === e.id }),
				onClick: (t) => i.value = e.id
			}, [Y("strong", null, P(e.label), 1), Y("small", null, P(e.hint), 1)], 10, Ol)), 64))]),
			Y("div", kl, [Y("aside", Al, [i.value === "person" ? (q(), J(K, { key: 0 }, [
				n[6] ||= Y("label", { for: "person-search" }, "Buscar una persona", -1),
				Y("div", jl, [n[5] ||= Y("span", { "aria-hidden": "true" }, "⌕", -1), Ar(Y("input", {
					id: "person-search",
					"onUpdate:modelValue": n[0] ||= (e) => a.value = e,
					autocomplete: "off",
					placeholder: "Nombre o correo"
				}, null, 512), [[
					nc,
					a.value,
					void 0,
					{ trim: !0 }
				]])]),
				n[7] ||= Y("p", { class: "query-help" }, "Los resultados pertenecen al tenant actual.", -1),
				a.value ? (q(), J("div", Ml, [(q(!0), J(K, null, G(e.users.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: de(["choice", { selected: o.value?.id === e.id }]),
					onClick: (t) => u(e)
				}, [Y("span", Pl, P(e.name.slice(0, 1)), 1), Y("span", null, [Y("strong", null, P(e.name), 1), Y("small", null, P(e.email), 1)])], 10, Nl))), 128)), e.users.loaded && !e.users.content.length ? (q(), J("p", Fl, "No se encontraron personas.")) : Z("", !0)])) : Z("", !0)
			], 64)) : i.value === "role" ? (q(), J(K, { key: 1 }, [
				n[8] ||= Y("p", { class: "query-label" }, "Elija un rol", -1),
				n[9] ||= Y("p", { class: "query-help" }, "Muestra únicamente roles de esta aplicación.", -1),
				Y("div", Il, [(q(!0), J(K, null, G(e.roles.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: de({ selected: s.value?.id === e.id }),
					onClick: (t) => d(e)
				}, P(e.name), 11, Ll))), 128)), e.roles.loaded && !e.roles.content.length ? (q(), J("p", Rl, "No hay roles disponibles.")) : Z("", !0)])
			], 64)) : (q(), J(K, { key: 2 }, [
				n[10] ||= Y("p", { class: "query-label" }, "Elija un perfil", -1),
				n[11] ||= Y("p", { class: "query-help" }, "Muestra únicamente perfiles de esta aplicación.", -1),
				Y("div", zl, [(q(!0), J(K, null, G(e.profiles.content, (e) => (q(), J("button", {
					key: e.id,
					type: "button",
					class: de({ selected: c.value?.id === e.id }),
					onClick: (t) => f(e)
				}, P(e.name), 11, Bl))), 128)), e.profiles.loaded && !e.profiles.content.length ? (q(), J("p", Vl, "No hay perfiles disponibles.")) : Z("", !0)])
			], 64))]), Y("div", Hl, [i.value === "person" && !o.value ? (q(), J("div", Ul, [...n[12] ||= [
				Y("span", { "aria-hidden": "true" }, "⌁", -1),
				Y("strong", null, "Seleccione una persona", -1),
				Y("p", null, "Busque por nombre o correo para consultar sus accesos vigentes.", -1)
			]])) : i.value === "person" && o.value ? (q(), J(K, { key: 1 }, [
				Y("div", Wl, [
					Y("span", Gl, P(o.value.name.slice(0, 1)), 1),
					Y("div", null, [Y("strong", null, P(o.value.name), 1), Y("small", null, P(o.value.email), 1)]),
					e.personRoleAssignments.content.some((e) => e.role.name === "ADMIN") ? (q(), J("span", Kl, "Administra esta aplicación")) : Z("", !0)
				]),
				e.personRoleAssignments.error || e.personProfileAssignments.error ? (q(), J("p", ql, P(e.personRoleAssignments.error || e.personProfileAssignments.error), 1)) : Z("", !0),
				Y("section", Jl, [
					Y("div", Yl, [n[13] ||= Y("span", null, "Roles vigentes", -1), Y("b", null, P(e.personRoleAssignments.total), 1)]),
					(q(!0), J(K, null, G(e.personRoleAssignments.content, (t) => (q(), J("div", {
						key: t.id,
						class: "access-row"
					}, [Y("div", null, [Y("strong", null, P(t.role.name), 1), Y("small", null, "Vigente desde " + P(m(t.validFrom)), 1)]), Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, Xl)]))), 128)),
					e.personRoleAssignments.loaded && !e.personRoleAssignments.content.length ? (q(), J("p", Zl, "Esta persona no tiene roles asignados.")) : Z("", !0)
				]),
				Y("section", Ql, [
					Y("div", $l, [n[14] ||= Y("span", null, "Perfiles vigentes", -1), Y("b", null, P(e.personProfileAssignments.total), 1)]),
					(q(!0), J(K, null, G(e.personProfileAssignments.content, (t) => (q(), J("div", {
						key: t.id,
						class: "access-row"
					}, [Y("div", null, [Y("strong", null, P(t.profile.name), 1), Y("small", null, "Vigente desde " + P(m(t.validFrom)), 1)]), Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, eu)]))), 128)),
					e.personProfileAssignments.loaded && !e.personProfileAssignments.content.length ? (q(), J("p", tu, "Esta persona no tiene perfiles asignados.")) : Z("", !0)
				]),
				X(Hc, {
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
				Y("div", nu, [Y("div", null, [n[15] ||= Y("p", { class: "kicker" }, "Personas con acceso", -1), Y("h5", null, P(s.value?.name ?? c.value?.name), 1)]), Y("span", ru, P(l.value.total), 1)]),
				l.value.error ? (q(), J("p", iu, P(l.value.error), 1)) : Z("", !0),
				(q(!0), J(K, null, G(l.value.content, (t) => (q(), J("div", {
					key: t.id,
					class: "access-row person-row"
				}, [
					Y("span", au, P(t.user.name.slice(0, 1)), 1),
					Y("div", null, [
						Y("strong", null, P(t.user.name), 1),
						Y("small", null, P(t.user.email), 1),
						Y("small", ou, [Eo(P(p(t)) + " · desde " + P(m(t.validFrom)), 1), t.validUntil ? (q(), J(K, { key: 0 }, [Eo(" hasta " + P(m(t.validUntil)), 1)], 64)) : Z("", !0)])
					]),
					Y("button", {
						class: "quiet danger",
						disabled: e.busy,
						onClick: (e) => r("revoke", t)
					}, "Revocar", 8, su)
				]))), 128)),
				l.value.loaded && !l.value.content.length ? (q(), J("p", cu, P(i.value === "role" ? "No hay personas con este rol." : "No hay personas con este perfil."), 1)) : Z("", !0),
				X(Hc, {
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
			], 64)) : (q(), J("div", lu, [
				n[16] ||= Y("span", { "aria-hidden": "true" }, "⌁", -1),
				Y("strong", null, "Seleccione un " + P(i.value === "role" ? "rol" : "perfil"), 1),
				n[17] ||= Y("p", null, "Las personas con ese acceso aparecerán aquí.", -1)
			]))])])
		]));
	}
}), du = { class: "chip" }, fu = { class: "grid" }, pu = { "aria-label": "Secciones de seguridad" }, mu = ["aria-current", "onClick"], hu = { class: "title" }, gu = { class: "actions" }, _u = ["disabled"], vu = ["disabled"], yu = {
	key: 0,
	class: "error"
}, bu = ["aria-expanded"], xu = ["aria-busy"], Su = {
	key: 0,
	class: "user-result-status"
}, Cu = ["aria-selected", "onClick"], wu = {
	key: 1,
	class: "selected-user",
	role: "status"
}, Tu = ["value"], Eu = { key: 3 }, Du = ["value"], Ou = ["aria-busy"], ku = { class: "grow" }, Au = ["disabled", "onClick"], ju = {
	key: 0,
	class: "empty"
}, Mu = { class: "actions bottom" }, Nu = ["disabled"], Pu = ["disabled"], Fu = 3, Iu = /* @__PURE__ */ Kr({
	__name: "SecurityAdministration",
	props: { options: {} },
	setup(e, { expose: t }) {
		let n = e, r = xc(/* @__PURE__ */ ln(n, "options")), { summary: i, loading: a } = Sc(r), o = Cc(r), s = wc(r), c = Tc(r), l = Ec(r);
		Dc(r), Oc(r);
		let { state: u, search: d } = kc(r), { saving: f, error: p, ready: m, load: h, refresh: g, mutate: _, roleResources: v, profileRoles: y, loadRoleResources: b, loadProfileRoles: x, userRoleAssignments: S, userProfileAssignments: C, assignmentsForRole: w, assignmentsForProfile: T, loadUserAssignments: E, loadAssignmentsForRole: ee, loadAssignmentsForProfile: te, invalidateRelation: D } = r;
		t({ refresh: g });
		let O = /* @__PURE__ */ H("summary"), k = /* @__PURE__ */ H(null), A = /* @__PURE__ */ H(), ne = /* @__PURE__ */ H(), j = /* @__PURE__ */ H(""), re = /* @__PURE__ */ H(""), ie = /* @__PURE__ */ H(""), M = /* @__PURE__ */ H(), ae = /* @__PURE__ */ H(!1), oe, N = /* @__PURE__ */ H({
			userId: "",
			userQuery: "",
			description: "",
			baseUrl: "",
			path: "",
			method: "GET",
			name: "",
			targetId: "",
			accessKind: "role"
		}), ce = [
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
		], le = {
			summary: "Resumen de seguridad",
			people: "Personas y asignaciones",
			roles: "Roles de aplicación",
			profiles: "Perfiles de acceso",
			resources: "Recursos protegidos",
			admins: "Administradores"
		}, ue = {
			summary: "Configurar accesos",
			people: "Asignar acceso",
			roles: "Definir rol",
			profiles: "Definir perfil",
			resources: "Registrar recurso",
			admins: "Agregar administrador"
		}, fe = is(() => ({
			people: (i.value?.counts.roleAssignments ?? 0) + (i.value?.counts.profileAssignments ?? 0),
			roles: i.value?.counts.roles ?? 0,
			profiles: i.value?.counts.profiles ?? 0,
			resources: i.value?.counts.resources ?? 0,
			admins: i.value?.counts.administrators ?? 0
		})), pe = is(() => O.value === "summary" && n.options.allowApplicationLifecycleManagement ? "Editar aplicación" : ue[O.value]), me = is(() => ({
			roles: s,
			profiles: c,
			resources: o,
			admins: l
		})[O.value]), he = is(() => ({
			"--accent": n.options.theme?.accent ?? "#295181",
			"--font": n.options.theme?.fontFamily ?? "Inter, system-ui, sans-serif",
			"--radius": n.options.theme?.radius ?? "14px"
		}));
		Ir(O, (e) => {
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
		}, { immediate: !0 }), Ir(() => N.value.accessKind, (e) => {
			k.value === "access" && h(e === "role" ? "roles" : "profiles");
		});
		function ge(e, t) {
			k.value = e ?? (O.value === "summary" ? n.options.allowApplicationLifecycleManagement ? "application" : "access" : O.value === "people" ? "access" : O.value === "roles" ? "role" : O.value === "profiles" ? "profile" : O.value === "resources" ? "resource" : "admin"), A.value = t, N.value = {
				userId: "",
				userQuery: "",
				description: "",
				baseUrl: "",
				path: "",
				method: "GET",
				name: "",
				targetId: "",
				accessKind: "role"
			}, t && "path" in t && (N.value.path = t.path, N.value.method = t.method), t && "name" in t && (N.value.name = t.name), k.value === "application" && i.value && (N.value.name = i.value.application.name, N.value.description = i.value.application.description ?? "", N.value.baseUrl = i.value.application.baseUrl ?? ""), (k.value === "admin" || k.value === "access") && d(""), (k.value === "access" || k.value === "profile-role") && h("roles"), k.value === "role-resource" && h("resources"), t && k.value === "role-resource" && b(t.id), t && k.value === "profile-role" && x(t.id);
		}
		function _e() {
			oe && clearTimeout(oe), k.value = null, A.value = void 0, M.value = void 0, ae.value = !1;
		}
		function ve() {
			let e = N.value.userQuery.trim();
			if (N.value.userId = "", M.value = void 0, ae.value = !0, oe && clearTimeout(oe), e.length < Fu) {
				d("");
				return;
			}
			oe = setTimeout(() => void d(e), 250);
		}
		function ye(e) {
			N.value.userId = e.id, N.value.userQuery = `${e.name} · ${e.email}`, M.value = e, ae.value = !1;
		}
		let be = is(() => N.value.userQuery.trim().length < Fu ? `Escriba al menos ${Fu} caracteres para buscar.` : u.loading ? "Buscando coincidencias…" : u.error ? "No fue posible buscar personas. Inténtelo de nuevo." : ae.value && !u.content.length ? "No hay coincidencias para esta búsqueda." : "Seleccione una persona de los resultados.");
		di(() => {
			oe && clearTimeout(oe);
		});
		async function xe() {
			let e = N.value, t = k.value;
			if (!t || t === "confirm") return;
			let n = !!A.value, r = t === "application" ? ["summary"] : t === "admin" ? ["administrators", "summary"] : t === "resource" ? ["resources", "summary"] : t === "role" ? ["roles", "summary"] : t === "profile" ? ["profiles", "summary"] : t === "access" ? [e.accessKind === "role" ? "roleAssignments" : "profileAssignments", "summary"] : t === "role-resource" ? ["roles"] : ["profiles"], i = await _((r, i) => t === "application" ? r.updateApplication(i, {
				name: e.name,
				description: e.description,
				baseUrl: e.baseUrl
			}) : t === "admin" ? r.addAdministrator(i, e.userId) : t === "resource" ? n ? r.updateResource(i, A.value.id, {
				path: e.path,
				method: e.method
			}) : r.createResource(i, {
				path: e.path,
				method: e.method
			}) : t === "role" ? n ? r.updateRole(A.value.id, { name: e.name }) : r.createRole(i, e.name) : t === "profile" ? n ? r.updateProfile(A.value.id, { name: e.name }) : r.createProfile(i, e.name) : t === "access" ? r.assignAccess(i, e.accessKind, e.targetId, e.userId) : t === "role-resource" ? r.linkRoleResource(A.value.id, e.targetId) : r.linkProfileRole(A.value.id, e.targetId), [...r], `${t}:${A.value?.id ?? e.userId}`);
			i && t === "access" && (j.value === e.userId && await E(e.userId, S.page, !0), e.accessKind === "role" && re.value === e.targetId && await ee(e.targetId, w.page, !0), e.accessKind === "profile" && ie.value === e.targetId && await te(e.targetId, T.page, !0)), i && _e();
		}
		function Se(e, t) {
			Ce.value = e, ne.value = t, k.value = "confirm";
		}
		let Ce = /* @__PURE__ */ H("");
		async function we() {
			let e = ne.value;
			(!e || await e()) && _e();
		}
		function Te(e) {
			Se("Retirar este administrador puede dejar la aplicación sin administración. El PDP impedirá retirar el último administrador.", async () => _((t, n) => t.removeAdministrator(n, e), ["administrators", "summary"], `admin:${e}`, !0));
		}
		function Ee(e) {
			Se("Eliminar este recurso revoca su protección y puede estar bloqueado si tiene dependencias.", async () => _((t, n) => t.deleteResource(n, e), ["resources", "summary"], `resource:${e}`, !0));
		}
		function De(e) {
			Se("Eliminar este rol requiere que no tenga perfiles ni asignaciones dependientes.", async () => _((t) => t.deleteRole(e), ["roles", "summary"], `role:${e}`, !0));
		}
		function Oe(e) {
			Se("Eliminar este perfil requiere que no tenga asignaciones dependientes.", async () => _((t) => t.deleteProfile(e), ["profiles", "summary"], `profile:${e}`, !0));
		}
		function ke(e) {
			let t = "role" in e;
			Se(`Revocar ${t ? `el rol ${e.role.name}` : `el perfil ${e.profile.name}`} de ${e.user.name} (${e.user.email}) retira su acceso vigente.`, async () => {
				let n = await _((n) => t ? n.revokeRoleAssignment(e.role.id, e.id) : n.revokeProfileAssignment(e.profile.id, e.id), [t ? "roleAssignments" : "profileAssignments", "summary"], `assignment:${e.id}`, !0);
				return n && j.value && await E(j.value, S.page, !0), n && t && re.value && await ee(re.value, w.page, !0), n && !t && ie.value && await te(ie.value, T.page, !0), n;
			});
		}
		function Ae(e) {
			let t = A.value.id;
			Se("Retirar este recurso elimina el permiso que este rol concede sobre él.", async () => {
				let n = await _((n) => n.unlinkRoleResource(t, e), ["roles"], `role-resource:${t}:${e}`);
				return n && (D("role-resources", t), await b(t, v.page, !0), v.page > 0 && !v.content.length && await b(t, v.page - 1, !0)), n;
			});
		}
		function F(e) {
			let t = A.value.id;
			Se("Retirar este rol cambia los permisos heredados por este perfil.", async () => {
				let n = await _((n) => n.unlinkProfileRole(t, e), ["profiles"], `profile-role:${t}:${e}`);
				return n && (D("profile-roles", t), await x(t, y.page, !0), y.page > 0 && !y.content.length && await x(t, y.page - 1, !0)), n;
			});
		}
		function je(e) {
			if (!A.value) return;
			let t = k.value === "role-resource" ? v : y, n = t.page + e;
			n < 0 || n * t.limit >= t.total || (k.value === "role-resource" ? b(A.value.id, n) : k.value === "profile-role" && x(A.value.id, n));
		}
		function Me() {
			let e = me.value;
			e && (e.page + 1) * e.limit < e.total && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[O.value], e.page + 1);
		}
		function Ne() {
			let e = me.value;
			e && e.page > 0 && h({
				roles: "roles",
				profiles: "profiles",
				resources: "resources",
				admins: "administrators"
			}[O.value], e.page - 1);
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
			], -1), Y("span", du, P(U(i)?.application.name ?? e.options.applicationName ?? "Cargando"), 1)]),
			Y("div", fu, [Y("nav", pu, [(q(), J(K, null, G(ce, (e) => Y("button", {
				key: e.id,
				"aria-current": O.value === e.id,
				onClick: (t) => O.value = e.id
			}, [Eo(P(e.label), 1), e.id === "summary" ? Z("", !0) : (q(), J(K, { key: 0 }, [Eo(" · " + P(fe.value[e.id]), 1)], 64))], 8, mu)), 64))]), Y("main", null, [
				Y("div", hu, [Y("div", null, [Y("h3", null, P(le[O.value]), 1), n[30] ||= Y("p", { class: "sub" }, "Alcance exclusivo de la aplicación abierta.", -1)]), Y("div", gu, [Y("button", {
					class: "quiet",
					disabled: U(a) || U(f),
					onClick: n[0] ||= (...e) => U(g) && U(g)(...e)
				}, " Actualizar", 8, _u), Y("button", {
					class: "primary",
					disabled: !U(m) || U(f),
					onClick: n[1] ||= (e) => ge()
				}, P(pe.value), 9, vu)])]),
				U(p) ? (q(), J("p", yu, P(U(p)), 1)) : Z("", !0),
				O.value === "summary" ? (q(), ho(Gc, {
					key: 1,
					summary: U(i),
					loading: U(a),
					"assignment-count": fe.value.people
				}, null, 8, [
					"summary",
					"loading",
					"assignment-count"
				])) : O.value === "people" ? (q(), ho(uu, {
					key: 2,
					users: U(u),
					roles: U(s),
					profiles: U(c),
					"person-role-assignments": U(S),
					"person-profile-assignments": U(C),
					"role-assignments": U(w),
					"profile-assignments": U(T),
					busy: U(f),
					onSearchUsers: U(d),
					onSelectPerson: n[2] ||= (e) => {
						j.value = e.id, U(E)(e.id, 0);
					},
					onSelectRole: n[3] ||= (e) => {
						re.value = e.id, U(ee)(e.id, 0);
					},
					onSelectProfile: n[4] ||= (e) => {
						ie.value = e.id, U(te)(e.id, 0);
					},
					onRevoke: ke,
					onPersonPage: n[5] ||= (e) => {
						j.value && U(S).page + e >= 0 && U(E)(j.value, U(S).page + e);
					},
					onRolePage: n[6] ||= (e) => {
						re.value && U(w).page + e >= 0 && U(ee)(re.value, U(w).page + e);
					},
					onProfilePage: n[7] ||= (e) => {
						ie.value && U(T).page + e >= 0 && U(te)(ie.value, U(T).page + e);
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
				])) : (q(), J(K, { key: 3 }, [O.value === "resources" ? (q(), ho(el, {
					key: 0,
					state: U(o),
					busy: U(f),
					onEdit: n[8] ||= (e) => ge("resource", e),
					onRemove: n[9] ||= (e) => Ee(e.id),
					onPrevious: Ne,
					onNext: Me
				}, null, 8, ["state", "busy"])) : O.value === "roles" ? (q(), ho(ll, {
					key: 1,
					state: U(s),
					busy: U(f),
					onManage: n[10] ||= (e) => ge("role-resource", e),
					onEdit: n[11] ||= (e) => ge("role", e),
					onRemove: n[12] ||= (e) => De(e.id),
					onPrevious: Ne,
					onNext: Me
				}, null, 8, ["state", "busy"])) : O.value === "profiles" ? (q(), ho(vl, {
					key: 2,
					state: U(c),
					busy: U(f),
					onManage: n[13] ||= (e) => ge("profile-role", e),
					onEdit: n[14] ||= (e) => ge("profile", e),
					onRemove: n[15] ||= (e) => Oe(e.id),
					onPrevious: Ne,
					onNext: Me
				}, null, 8, ["state", "busy"])) : (q(), ho(Tl, {
					key: 3,
					state: U(l),
					busy: U(f),
					onRemove: Te,
					onPrevious: Ne,
					onNext: Me
				}, null, 8, ["state", "busy"]))], 64))
			])]),
			k.value ? (q(), J("div", {
				key: 0,
				class: "backdrop",
				onClick: lc(_e, ["self"])
			}, [k.value === "confirm" ? (q(), ho(Rc, {
				key: 1,
				open: !0,
				message: Ce.value,
				busy: U(f),
				onCancel: _e,
				onConfirm: we
			}, null, 8, ["message", "busy"])) : (q(), J("form", {
				key: 0,
				class: "dialog",
				onSubmit: lc(xe, ["prevent"])
			}, [
				Y("h3", null, P(k.value === "role-resource" ? "Administrar recursos del rol" : k.value === "profile-role" ? "Administrar roles del perfil" : ue[O.value]), 1),
				n[46] ||= Y("p", { class: "sub" }, "La acción se aplica solo a esta aplicación.", -1),
				k.value === "admin" || k.value === "access" ? (q(), J(K, { key: 0 }, [
					Y("label", null, [n[31] ||= Eo("Buscar usuario", -1), Ar(Y("input", {
						"onUpdate:modelValue": n[16] ||= (e) => N.value.userQuery = e,
						placeholder: "Nombre o correo",
						autocomplete: "off",
						"aria-describedby": "user-search-hint",
						"aria-expanded": ae.value && N.value.userQuery.trim().length >= Fu,
						"aria-controls": "user-search-results",
						onFocus: n[17] ||= (e) => ae.value = !0,
						onInput: ve
					}, null, 40, bu), [[
						nc,
						N.value.userQuery,
						void 0,
						{ trim: !0 }
					]])]),
					Y("p", {
						id: "user-search-hint",
						class: de(["field-hint", { "is-error": U(u).error }])
					}, P(be.value), 3),
					ae.value && N.value.userQuery.trim().length >= Fu && (U(u).loading || U(u).content.length || U(u).error) ? (q(), J("div", {
						key: 0,
						id: "user-search-results",
						class: "user-result-list",
						role: "listbox",
						"aria-label": "Coincidencias de usuario",
						"aria-busy": U(u).loading
					}, [U(u).loading ? (q(), J("p", Su, "Buscando en el directorio…")) : Z("", !0), (q(!0), J(K, null, G(U(u).content, (e) => (q(), J("button", {
						key: e.id,
						type: "button",
						class: "user-result",
						role: "option",
						"aria-selected": N.value.userId === e.id,
						onClick: (t) => ye(e)
					}, [Y("span", null, P(e.name || e.email), 1), Y("small", null, P(e.email), 1)], 8, Cu))), 128))], 8, xu)) : Z("", !0),
					M.value ? (q(), J("div", wu, [
						n[32] ||= Y("span", null, "Persona seleccionada", -1),
						Y("strong", null, P(M.value.name || M.value.email), 1),
						Y("small", null, P(M.value.email), 1)
					])) : Z("", !0),
					k.value === "access" ? (q(), J(K, { key: 2 }, [Y("label", null, [n[34] ||= Eo("Tipo", -1), Ar(Y("select", { "onUpdate:modelValue": n[18] ||= (e) => N.value.accessKind = e }, [...n[33] ||= [Y("option", { value: "role" }, "Rol", -1), Y("option", { value: "profile" }, "Perfil", -1)]], 512), [[rc, N.value.accessKind]])]), Y("label", null, [n[36] ||= Eo("Acceso", -1), Ar(Y("select", {
						"onUpdate:modelValue": n[19] ||= (e) => N.value.targetId = e,
						required: ""
					}, [n[35] ||= Y("option", {
						disabled: "",
						value: ""
					}, "Seleccione un acceso", -1), (q(!0), J(K, null, G(N.value.accessKind === "role" ? U(s).content : U(c).content, (e) => (q(), J("option", {
						key: e.id,
						value: e.id
					}, P(e.name), 9, Tu))), 128))], 512), [[rc, N.value.targetId]])])], 64)) : Z("", !0)
				], 64)) : k.value === "application" ? (q(), J(K, { key: 1 }, [
					Y("label", null, [n[37] ||= Eo("Nombre", -1), Ar(Y("input", {
						"onUpdate:modelValue": n[20] ||= (e) => N.value.name = e,
						required: ""
					}, null, 512), [[
						nc,
						N.value.name,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[38] ||= Eo("Descripción", -1), Ar(Y("textarea", { "onUpdate:modelValue": n[21] ||= (e) => N.value.description = e }, null, 512), [[
						nc,
						N.value.description,
						void 0,
						{ trim: !0 }
					]])]),
					Y("label", null, [n[39] ||= Eo("URL base", -1), Ar(Y("input", {
						"onUpdate:modelValue": n[22] ||= (e) => N.value.baseUrl = e,
						type: "url"
					}, null, 512), [[
						nc,
						N.value.baseUrl,
						void 0,
						{ trim: !0 }
					]])])
				], 64)) : k.value === "resource" ? (q(), J(K, { key: 2 }, [Y("label", null, [n[40] ||= Eo("Ruta", -1), Ar(Y("input", {
					"onUpdate:modelValue": n[23] ||= (e) => N.value.path = e,
					placeholder: "/api/v1/notas",
					required: ""
				}, null, 512), [[
					nc,
					N.value.path,
					void 0,
					{ trim: !0 }
				]])]), Y("label", null, [n[42] ||= Eo("Método", -1), Ar(Y("select", { "onUpdate:modelValue": n[24] ||= (e) => N.value.method = e }, [...n[41] ||= [
					Y("option", null, "GET", -1),
					Y("option", null, "POST", -1),
					Y("option", null, "PUT", -1),
					Y("option", null, "PATCH", -1),
					Y("option", null, "DELETE", -1)
				]], 512), [[rc, N.value.method]])])], 64)) : k.value === "role" || k.value === "profile" ? (q(), J("label", Eu, [n[43] ||= Eo("Nombre", -1), Ar(Y("input", {
					"onUpdate:modelValue": n[25] ||= (e) => N.value.name = e,
					required: ""
				}, null, 512), [[
					nc,
					N.value.name,
					void 0,
					{ trim: !0 }
				]])])) : (q(), J(K, { key: 4 }, [Y("label", null, [Eo(P(k.value === "role-resource" ? "Agregar recurso" : "Agregar rol"), 1), Ar(Y("select", {
					"onUpdate:modelValue": n[26] ||= (e) => N.value.targetId = e,
					required: ""
				}, [n[44] ||= Y("option", {
					disabled: "",
					value: ""
				}, "Seleccione una opción", -1), (q(!0), J(K, null, G(k.value === "role-resource" ? U(o).content : U(s).content, (e) => (q(), J("option", {
					key: e.id,
					value: e.id
				}, P("path" in e ? `${e.method} · ${e.path}` : e.name), 9, Du))), 128))], 512), [[rc, N.value.targetId]])]), Y("div", {
					class: "relation-list",
					"aria-busy": k.value === "role-resource" ? U(v).loading : U(y).loading
				}, [
					n[45] ||= Y("p", { class: "sub" }, "Relaciones vigentes", -1),
					(q(!0), J(K, null, G(k.value === "role-resource" ? U(v).content : U(y).content, (e) => (q(), J("div", {
						key: e.id,
						class: "row"
					}, [Y("div", ku, [Y("strong", null, P("path" in e ? `${e.method} · ${e.path}` : e.name), 1)]), Y("button", {
						class: "quiet danger",
						type: "button",
						disabled: U(f),
						onClick: (t) => k.value === "role-resource" ? Ae(e.id) : F(e.id)
					}, " Retirar ", 8, Au)]))), 128)),
					(k.value === "role-resource" ? U(v).content : U(y).content).length ? Z("", !0) : (q(), J("p", ju, " No hay relaciones en esta página. ")),
					X(Hc, {
						page: k.value === "role-resource" ? U(v).page : U(y).page,
						limit: k.value === "role-resource" ? U(v).limit : U(y).limit,
						total: k.value === "role-resource" ? U(v).total : U(y).total,
						loading: k.value === "role-resource" ? U(v).loading : U(y).loading,
						label: "Paginación de relaciones",
						onPrevious: n[27] ||= (e) => je(-1),
						onNext: n[28] ||= (e) => je(1)
					}, null, 8, [
						"page",
						"limit",
						"total",
						"loading"
					])
				], 8, Ou)], 64)),
				Y("div", Mu, [Y("button", {
					class: "quiet",
					type: "button",
					disabled: U(f),
					onClick: _e
				}, " Cancelar", 8, Nu), Y("button", {
					class: "primary",
					disabled: U(f)
				}, P(U(f) ? "Guardando…" : "Guardar"), 9, Pu)])
			], 32))])) : Z("", !0)
		], 4));
	}
}), Lu = ":host{all:initial;display:block}*{box-sizing:border-box}.shell{font-family:var(--font);color:#17263c;--line:#dce5df;border:1px solid var(--line);border-radius:var(--radius);background:#fffdfa;overflow:hidden;box-shadow:0 18px 42px #18321b14}header{border-bottom:1px solid var(--line);justify-content:space-between;gap:18px;padding:27px 30px 20px;display:flex}.eyebrow{color:#9a6c32;letter-spacing:.1em;text-transform:uppercase;margin:0 0 7px;font:700 12px ui-monospace,monospace}h2{letter-spacing:-.03em;margin:0;font:700 28px Georgia,serif}h3{margin:0;font-size:19px}header p:last-child,.sub,small{color:#66776c;font-size:13px}.chip,.pill{color:#287045;background:#edf4ef;border-radius:999px;padding:5px 9px;font-size:11px;font-weight:700}.chip{height:max-content;color:var(--accent);background:#f2f6fb}.grid{grid-template-columns:190px 1fr;min-height:470px;display:grid}nav{border-right:1px solid var(--line);background:#fafbf8;padding:12px}nav button{text-align:left;color:#486053;cursor:pointer;background:0 0;border:0;border-radius:8px;width:100%;padding:10px;font:600 13px inherit}nav button[aria-current=true]{color:#183c2a;background:#e8f0eb}main{padding:25px 30px}.title,.actions,.row{align-items:center;gap:10px;display:flex}.title{justify-content:space-between;margin-bottom:18px}.actions{flex-wrap:wrap;justify-content:end}button{cursor:pointer}button:disabled{cursor:wait;opacity:.62}.primary,.quiet{border:0;border-radius:8px;padding:9px 12px;font:700 12px inherit}.primary{background:var(--accent);color:#fff}.quiet{color:#29523c;background:#edf3ed}.danger{color:#96332c;background:#fff2f0}.stats{grid-template-columns:repeat(4,1fr);gap:10px;display:grid}.stat,.panel{border:1px solid var(--line);background:#fff;border-radius:10px}.stat{padding:15px}.stat b{color:var(--accent);font:700 25px Georgia,serif;display:block}.panel{margin-top:20px;overflow:hidden}.row{border-bottom:1px solid #edf1ee;padding:13px 15px}.row:last-child{border:0}.grow{flex:1;min-width:0}.grow strong{font-size:13px;display:block}.method{color:#265482;min-width:54px;font:700 11px ui-monospace,monospace}.empty{color:#66776c;text-align:center;padding:25px;font-size:13px}.error{color:#96332c;background:#fff2f0;border-left:3px solid #b7473d;padding:11px;font-size:13px}.backdrop{z-index:1;background:#17263c66;place-items:center;padding:16px;display:grid;position:fixed;inset:0}.dialog{background:#fff;border-radius:14px;width:min(460px,100%);padding:23px;box-shadow:0 25px 70px #0005}label{gap:6px;margin-top:12px;font-size:12px;font-weight:700;display:grid}input,select,textarea{border:1px solid #cad8d0;border-radius:8px;width:100%;padding:10px;font:13px inherit}textarea{resize:vertical;min-height:72px}.bottom{margin-top:20px}.field-hint{color:#66776c;margin:6px 0 0;font-size:12px;line-height:1.35}.field-hint.is-error{color:#96332c}.user-result-list{background:#f8faf7;border:1px solid #cad8d0;border-radius:10px;max-height:216px;margin-top:8px;overflow-y:auto;box-shadow:0 10px 24px #17263c12}.user-result-status{color:#66776c;margin:0;padding:11px 13px;font-size:12px}.user-result{color:#17263c;text-align:left;background:0 0;border:0;border-bottom:1px solid #dce4de;border-radius:0;gap:2px;width:100%;padding:11px 13px;display:grid}.user-result:last-child{border-bottom:0}.user-result:hover,.user-result:focus-visible,.user-result[aria-selected=true]{color:#173d30;background:#e8f0e9;outline:none}.user-result span{font-weight:700}.user-result small,.selected-user small{color:#66776c;font-size:12px}.selected-user{background:#edf4ed;border-left:3px solid #4c8065;border-radius:7px;gap:2px;margin-top:10px;padding:10px 12px;display:grid}.selected-user>span{color:#49705a;letter-spacing:.08em;text-transform:uppercase;font-size:10px;font-weight:800}.selected-user strong{color:#173d30;font-size:13px}.access-workbench{--paper:#fffdfa;--ledger:#f5f1e8;--ink:#17263c;--muted-ink:#68776f;--sage:#dfe9df;--sage-deep:#2d5947;--ochre:#9a6c32;--rule:#dce4de;--inset:#f8faf7;border:1px solid var(--rule);background:var(--paper);border-radius:14px;margin-top:18px;overflow:hidden}.access-heading{border-bottom:1px solid var(--rule);background:#fffefa;justify-content:space-between;align-items:flex-start;gap:16px;padding:22px 24px 18px;display:flex}.access-heading h4,.result-title h5{color:var(--ink);letter-spacing:-.025em;margin:2px 0 4px;font:700 22px Georgia,serif}.access-heading p:last-child{color:var(--muted-ink);margin:0;font-size:13px}.kicker{color:var(--ochre);letter-spacing:.12em;text-transform:uppercase;margin:0;font:700 10px ui-monospace,monospace}.scope-mark,.count-badge,.admin-mark{background:var(--ledger);color:var(--sage-deep);white-space:nowrap;border-radius:999px;padding:6px 10px;font-size:11px;font-weight:700}.perspective-tabs{border-bottom:1px solid var(--rule);background:#fbfcf9;grid-template-columns:repeat(3,1fr);gap:0;padding:8px;display:grid}.perspective-tabs button{color:#64736a;text-align:left;background:0 0;border:0;border-radius:9px;min-height:56px;padding:9px 12px;transition:background .16s,color .16s}.perspective-tabs button:hover{color:var(--sage-deep);background:#eff4ee}.perspective-tabs button.active{color:var(--ink);background:var(--paper);box-shadow:0 1px 3px #20352414,inset 0 0 0 1px #d4dfd6}.perspective-tabs strong,.perspective-tabs small{display:block}.perspective-tabs strong{font-size:13px}.perspective-tabs small{color:inherit;opacity:.72;margin-top:3px;font-size:11px;font-weight:500}.access-layout{grid-template-columns:minmax(220px,.8fr) minmax(0,1.7fr);min-height:390px;display:grid}.access-query{border-right:1px solid var(--rule);background:#fafbf8;padding:20px}.access-query label,.query-label{color:var(--ink);margin:0 0 8px;font-size:13px;font-weight:700;display:block}.query-help{color:var(--muted-ink);margin:8px 0 14px;font-size:12px;line-height:1.45}.search-field{background:#f1f5f0;border:1px solid #c9d8ce;border-radius:9px;align-items:center;gap:8px;padding:0 10px;transition:border-color .16s,box-shadow .16s;display:flex}.search-field:focus-within{border-color:var(--accent);box-shadow:0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)}.search-field span{color:var(--sage-deep);font-size:20px;line-height:1}.search-field input{background:0 0;border:0;border-radius:0;outline:0;padding:11px 0}.choices,.option-grid{gap:6px;display:grid}.choice,.option-grid button{color:var(--ink);text-align:left;background:0 0;border:1px solid #0000;border-radius:9px;padding:9px}.choice{align-items:center;gap:9px;display:flex}.choice:hover,.option-grid button:hover{background:#edf3ed}.choice.selected,.option-grid button.selected{background:var(--sage);color:#183c2a;border-color:#b8d0be}.choice strong,.choice small{display:block}.choice small{text-overflow:ellipsis;white-space:nowrap;margin-top:2px;overflow:hidden}.option-grid button{font-size:12px;font-weight:700}.access-results{background:var(--paper);min-width:0;padding:20px 24px}.empty-state{text-align:center;min-height:300px;color:var(--muted-ink);place-content:center;display:grid}.empty-state span{width:38px;height:38px;color:var(--ochre);background:var(--ledger);border-radius:50%;place-items:center;margin:0 auto 10px;font-size:23px;display:grid}.empty-state strong{color:var(--ink);font-size:14px}.empty-state p{max-width:260px;margin:6px 0 0;font-size:12px;line-height:1.5}.identity-strip,.result-title{border-bottom:1px solid var(--rule);align-items:center;gap:10px;padding-bottom:16px;display:flex}.identity-strip>div{flex:1;min-width:0}.identity-strip strong,.identity-strip small{display:block}.identity-strip small{margin-top:2px}.admin-mark{background:#eff5ef}.avatar{color:#315745;text-transform:uppercase;background:#e0ebe1;border-radius:50%;flex:0 0 28px;place-items:center;width:28px;height:28px;font-size:11px;font-weight:800;display:grid}.avatar.large{background:#dce8df;flex-basis:38px;width:38px;height:38px;font-size:15px}.access-group{border:1px solid #e5ebe5;border-radius:10px;margin-top:18px;overflow:hidden}.group-title{color:#506258;background:#f7f9f6;justify-content:space-between;align-items:center;padding:9px 12px;font-size:12px;font-weight:700;display:flex}.group-title b{min-width:20px;color:var(--sage-deep);background:var(--sage);text-align:center;border-radius:99px;padding:1px 6px;font-size:11px}.access-row{border-top:1px solid #edf1ed;align-items:center;gap:10px;min-height:58px;padding:11px 12px;display:flex}.access-row>div{flex:1;min-width:0}.access-row strong,.access-row small{display:block}.access-row strong{color:var(--ink);font-size:13px}.access-row small{margin-top:3px}.person-row{padding-left:0;padding-right:0}.person-row>div{flex:1}.access-meta{color:#718078!important}.result-title{justify-content:space-between}.result-title h5{font-size:20px}.count-badge{text-align:center;background:#eef3ee;min-width:28px}.compact{text-align:left;padding:14px 12px}@media (width<=700px){header{padding:20px;display:block}.chip{margin-top:14px;display:inline-block}.grid{grid-template-columns:1fr}nav{border-right:0;border-bottom:1px solid var(--line);display:flex;overflow:auto}nav button{min-width:max-content}main{padding:20px}.stats{grid-template-columns:repeat(2,1fr)}.access-heading{padding:18px}.access-heading h4{font-size:20px}.access-layout{grid-template-columns:1fr}.access-query{border-right:0;border-bottom:1px solid var(--rule)}.access-results{padding:18px}.perspective-tabs{grid-template-columns:repeat(3,minmax(122px,1fr));overflow-x:auto}.scope-mark,.admin-mark{display:none}}", Ru = "uco-security-administration", zu = class extends HTMLElement {
	root = this.attachShadow({ mode: "open" });
	options = /* @__PURE__ */ tn();
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
		e.textContent = Lu;
		let t = document.createElement("div");
		this.root.replaceChildren(e, t), this.app = pc({ setup: () => () => as(Iu, {
			options: this.options.value,
			ref: (e) => {
				this.component = e;
			}
		}) }), this.app.mount(t);
	}
};
function Bu(e, t) {
	if (!(e instanceof HTMLElement)) throw TypeError("El contenedor debe ser un HTMLElement.");
	let n = new zu();
	return n.configure(t), e.replaceChildren(n), {
		element: n,
		refresh: () => n.refresh(),
		unmount: () => {
			n.parentElement === e && e.replaceChildren(), n.destroy();
		}
	};
}
customElements.get(Ru) || customElements.define(Ru, zu);
//#endregion
export { zu as SecurityAdministrationElement, Bu as mount };
