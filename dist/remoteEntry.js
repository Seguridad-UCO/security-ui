import { t as e } from "./dist-Dcnk1x95.js";
//#region virtual:mf-exposes:__mfe_internal__security_ui__remoteEntry_js
var t = {}, n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
function i(e, t) {
	let n = r.get(e);
	return n || (n = Promise.resolve().then(t).catch((t) => {
		throw r.delete(e), t;
	}), r.set(e, n)), n;
}
async function a(e) {
	if (typeof document > "u") return;
	let r = t[e] || [];
	await Promise.all(r.map((e) => {
		let t = new URL(e, import.meta.url).href;
		return n.has(t) || (n.add(t), document.querySelector(`link[rel="stylesheet"][href="${t}"]`)) ? Promise.resolve() : new Promise((e, n) => {
			let r = document.createElement("link");
			r.rel = "stylesheet", r.href = t, r.onload = () => e(), r.onerror = () => n(/* @__PURE__ */ Error(`[Module Federation] Failed to load CSS asset: ${t}`)), document.head.appendChild(r);
		});
	}));
}
var o = { "./security-administration": async () => {
	await a("./security-administration"), await Promise.all([]);
	let e = await i("./security-administration", () => import("./security-administration.js")), t = e && e.__mf_remote_dependency_pending;
	t && typeof t.then == "function" && await t;
	let n = {};
	return Object.assign(n, e), Object.defineProperty(n, "__esModule", {
		value: !0,
		enumerable: !1
	}), n;
} };
//#endregion
//#region virtual:mf-REMOTE_ENTRY_ID:__mfe_internal__security_ui__remoteEntry_js
typeof __VUE_HMR_RUNTIME__ > "u" && (globalThis.__VUE_HMR_RUNTIME__ = {
	createRecord() {},
	rerender() {},
	reload() {}
});
var s = "__mf_init__virtual:mf:__mfe_internal__security_ui__mf_owner__217765935240290__mf_v__runtimeInit__mf_v__.js__", c = globalThis[s];
if (!c) {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	c = globalThis[s] = {
		initPromise: n,
		initResolve: e,
		initReject: t
	};
}
var l = c.initResolve, u = "__mf_module_cache__";
globalThis[u] ||= {
	share: {},
	remote: {}
}, globalThis[u].share ||= {}, globalThis[u].remote ||= {};
var d = globalThis[u];
for (let e of Object.keys(d.share)) if (e.startsWith("default:")) {
	let t = e.slice(8);
	d.share[t] === void 0 && (d.share[t] = d.share[e]);
} else if (!e.includes(":")) {
	let t = "default:" + e;
	d.share[t] === void 0 && (d.share[t] = d.share[e]);
}
var f = {}, p = Array.isArray("default") ? "default" : ["default"], m = "default", h = "security_ui", g = [], _, v;
async function y(e) {
	for (let t = 0;; t++) try {
		return await e();
	} catch (e) {
		throw e;
	}
}
async function b() {
	return _ ||= y(() => import("./_virtual_mf-localSharedImportMap___mfe_internal__security_ui__mf_owner__1-7vPWLiGJ.js")).catch((e) => {
		throw _ = void 0, e;
	}), _;
}
async function x() {
	return o;
}
async function S(t = {}, n = [], r = {}) {
	let i = (e, t, n, r) => {
		let i = (Array.isArray(r) ? r[0] : r) || "default", a = t || !n ? e : e + "@" + n, o = { canonical: i + ":" + a };
		return i === "default" && (o.aliases = [a]), o;
	}, a = (e, t) => {
		let n = e[t.canonical];
		if (n !== void 0) return n;
		let r = t.aliases || [];
		for (let n of r) {
			if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
			let r = e[n];
			if (r !== void 0) return e[t.canonical] = r, r;
		}
	}, o = Symbol.for("module-federation.shared-cache-listeners"), s = Symbol.for("module-federation.shared-cache-owners"), c = (e) => {
		let t = e[s];
		return t === void 0 && (t = Object.create(null), Object.defineProperty(e, s, {
			value: t,
			enumerable: !1,
			configurable: !1,
			writable: !1
		})), t;
	}, u = (e, t) => e[s]?.[t.canonical], _ = (e, t, n, r) => {
		e[t.canonical] = n;
		let i = t.aliases || [];
		for (let t of i) Object.defineProperty(e, t, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		});
		let a = e[s];
		r === void 0 ? a && delete a[t.canonical] : c(e)[t.canonical] = r;
		let l = e[o]?.[t.canonical];
		if (l) for (let e of l) e(n);
		return n;
	}, x = Symbol.for("module-federation.tree-shaking-shared-cache"), S = (e) => {
		let t = e[x];
		return t === void 0 && (t = Object.create(null), Object.defineProperty(e, x, {
			value: t,
			enumerable: !1,
			configurable: !1,
			writable: !1
		})), t;
	}, C = (e, t, n, r) => {
		if (!Array.isArray(n)) return r;
		let i = [...new Set(n)].sort(), a = S(e), o = a[t.canonical] ||= [], s = o.find((e) => e.providedExports.length === i.length && e.providedExports.every((e, t) => e === i[t]));
		return s ? s.value = r : o.push({
			providedExports: i,
			value: r
		}), r;
	}, w = Symbol.for("module-federation.tree-shaking-shared-selection-cache"), T = (e) => {
		let t = e[w];
		return t === void 0 && (t = Object.create(null), Object.defineProperty(e, w, {
			value: t,
			enumerable: !1,
			configurable: !1,
			writable: !1
		})), t;
	}, E = (e, t, n) => {
		let r = a(e, t);
		return r === void 0 ? e[w]?.[t.canonical]?.[n] : r;
	}, D = (e, t, n, r) => {
		let i = T(e), a = i[t.canonical] ||= Object.create(null);
		return a[n] = r, r;
	}, O = globalThis.__FEDERATION__?.__INSTANCES__ || [], k = n.find((e) => e?.from)?.from, A = O.find((e) => e?.options?.name === k && e?.shareScopeMap?.default === t) || O.find((e) => e?.options?.name !== h && e?.shareScopeMap?.default === t), j = Object.create(null), M = (e) => {
		let t = Object.create(null);
		for (let [n, r] of Object.entries(e || {})) t[n] = Object.assign(Object.create(null), r);
		return t;
	}, N = (e, t) => {
		for (let [n, r] of Object.entries(W.shareScopeMap?.[e] || {})) for (let [e, i] of Object.entries(r || {})) {
			if (!i || i.get === I[n]?.get) continue;
			let r = t[n] ||= {};
			r[e] === void 0 && (r[e] = i);
		}
	}, P = (e, t) => {
		N(e, t);
		let n = !A && Object.values(t || {}).some((e) => Object.values(e || {}).some(L)), r = n ? M(t) : t;
		return j[e] = {
			host: t,
			runtime: r,
			isWebpackScope: n
		}, r;
	}, ee = () => {
		let e = Object.values(j).filter(({ isWebpackScope: e }) => e);
		if (e.length !== 0) for (let { host: t, runtime: n } of e) for (let [e, r] of Object.entries(t || {})) {
			let t = n[e] ||= Object.create(null);
			for (let [e, n] of Object.entries(r || {})) t[e] = n;
		}
	}, F = Object.create(null);
	for (let [e, n] of Object.entries(t)) {
		let t = F[e] = Object.create(null);
		for (let [e, r] of Object.entries(n)) t[e] = Object.assign({}, r);
	}
	let { usedShared: I, usedRemotes: te } = await b();
	function L(e) {
		if (typeof e?.get != "function") return !1;
		let t = Function.prototype.toString.call(e.get);
		return t.includes("__webpack_require__") || /\.\s*e\s*\([^)]*\)\s*\.then\s*\(/.test(t);
	}
	let ne = Object.values(F).some((e) => Object.values(e || {}).some(L)), re = (e) => {
		let t = e.split("/");
		return e.startsWith("@") ? t.slice(0, 2).join("/") : t[0];
	}, R = (e, n, r, i) => {
		if (typeof __mfSelectExternalSharedProvider != "function") return;
		let a = re(e), o = !i || a === e ? [[e, n]] : [[e, n], [a, I[a]]];
		for (let [n, i] of o) {
			if (!i) continue;
			let a = r ? n === e ? r : F[n] : F[n] ?? t[n], o = __mfSelectExternalSharedProvider(a, n, i, "version-first");
			if (o) return o;
		}
	}, ie = (e, t, n) => {
		let r = R(e, t, n, !0);
		return r && L(r) && !r.lib && !r.loaded ? r : void 0;
	};
	var z = f[m];
	if (z ||= f[m] = { from: h }, n.indexOf(z) >= 0) return;
	n.push(z);
	let B = (e) => {
		let t = e;
		for (let e = 0; e < 5; e++) {
			let e = t?.default;
			if (!e || typeof e != "object" || Object.keys(e).length === 0) break;
			let n = Object.keys(t).filter((e) => e !== "default").map((e) => t[e]);
			if (n.length > 0 && n.some((e) => e !== void 0)) break;
			t = e;
		}
		return t;
	}, ae = [], oe = globalThis.window === void 0 ? await Promise.all([]) : [], V = "__mf_vite_runtime_share_load_id__", se = 0, H = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), W = e({
		name: h,
		remotes: te,
		shared: I,
		plugins: [
			ce(),
			le(),
			...ae,
			...oe
		],
		shareStrategy: "version-first"
	});
	W.initShareScopeMap("default", P("default", t));
	function ce() {
		return {
			name: "vite-share-pin-lifecycle-plugin",
			resolveShare(e) {
				let t = e.shareInfo?.[V], n = t === void 0 ? void 0 : U.get(t);
				if (!n) return e;
				let r = e.resolver;
				return e.resolver = (...e) => (n.pinned.reapply(), r(...e)), n.pinned.reveal(), e;
			}
		};
	}
	function le() {
		return {
			name: "vite-real-name-snapshot-plugin",
			afterLoadSnapshot(e) {
				let t = e && e.remoteSnapshot, n = t && t.globalName, r = t && t.version;
				if (!n || !r || !t.remoteEntry) return e;
				let i = globalThis.__FEDERATION__ && globalThis.__FEDERATION__.moduleInfo, a = n + ":" + r;
				return i && !i[a] && (i[a] = t), e;
			}
		};
	}
	let ue = W.sharedHandler.hooks.lifecycle.resolveShare, G = /* @__PURE__ */ new WeakMap();
	ue.on((e) => {
		let t = e.shareInfo?.[V], n = e.resolver;
		return typeof n == "function" && (e.resolver = (...e) => {
			let r = n(...e), i = r?.shared;
			return i && (typeof i == "object" || typeof i == "function") && !G.has(i) && G.set(i, { from: i.from }), t !== void 0 && i && H.set(t, i), r;
		}), e;
	});
	let de = (e, t, n, r) => {
		if (!e || e[t] !== n) return;
		let i = Object.assign({}, r, {
			version: r.version ?? t,
			scope: r.scope ?? n?.scope ?? ["default"],
			strategy: "loaded-first"
		}), a = r.from;
		e[t] = i;
		let o = () => n === void 0 ? e[t] === void 0 : e[t] === n;
		return {
			provider: i,
			reveal() {
				return e[t] === i && (n === void 0 ? delete e[t] : e[t] = n, !0);
			},
			reapply() {
				return o() ? (e[t] = i, !0) : !1;
			},
			release(s, c = !0) {
				return r.from = a, e[t] === i ? c ? s ? (i.from = a, s && i.lib && (i.loaded = !0), r.strategy === void 0 ? delete i.strategy : i.strategy = r.strategy, !0) : (n === void 0 ? delete e[t] : e[t] = n, !1) : (n === void 0 ? delete e[t] : e[t] = n, !0) : !c && o();
			}
		};
	}, fe = (e) => Object.entries(e || {}).map(([e, t]) => ({
		provider: t,
		version: e,
		from: t.from,
		registered: !0
	})), pe = (e, t) => {
		if (t === void 0) return;
		let n;
		for (let r of e) {
			let e = r.provider, i = e.treeShaking || e;
			if (r.loadedFactory === t || e.lib === t || i.lib === t) {
				if (n) return;
				n = r;
			}
		}
		return n;
	}, me = async (e, t, n) => {
		let r = ++se;
		U.set(r, { pinned: n });
		try {
			let n = await W.loadShare(e, { customShareInfo: {
				shareConfig: t,
				[V]: r
			} });
			return {
				factory: n === !1 ? void 0 : n,
				selectedProvider: H.get(r)
			};
		} finally {
			H.delete(r), U.delete(r);
		}
	}, K = async (e, t, n, r, i, a, o = !0) => {
		let s = a.from, c = de(n, r, i, a);
		if (!c) return;
		let l;
		try {
			l = await me(e, t, c);
		} catch (e) {
			throw c.release(!1), e;
		}
		let u = l?.factory;
		if (u === void 0) {
			c.release(!1);
			return;
		}
		let d = fe(n), f = c.provider.treeShaking || c.provider, p = c.provider.lib === u || f.lib === u;
		if (!o && p) {
			let e = d.findIndex((e) => e.provider === c.provider);
			e !== -1 && d.splice(e, 1);
		}
		!o && !d.some((e) => e.provider === a) && d.push({
			provider: a,
			version: r,
			from: s,
			registered: !1,
			loadedFactory: p ? u : void 0
		});
		let m = !o && l.selectedProvider === c.provider && p ? a : l.selectedProvider;
		if (m && !d.some((e) => e.provider === m)) {
			let e = G.get(m), t = typeof m.version == "string" && m.version ? m.version : r;
			d.push({
				provider: m,
				version: t,
				from: e ? e.from : m.from,
				registered: n?.[t] === m,
				loadedFactory: u
			});
		}
		let h = d.find((e) => e.provider === m) ?? pe(d, u);
		if (!c.release(!0, h?.provider === c.provider) || !h) return;
		let g = G.get(h.provider);
		h.from = h.provider === a ? s : g ? g.from : h.provider.from, g && (h.provider.from = g.from);
		let _ = typeof u == "function" ? u() : u, v = await Promise.resolve(_);
		if (!(h.registered && n?.[h.version] !== h.provider)) return {
			provider: h.provider,
			selection: h,
			resolved: v
		};
	}, q = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map(), he = async (e, n, r) => {
		let o = !!n.shareConfig?.singleton;
		if (!o && n.canLiveRebind !== !1) try {
			let s = __mfSelectExternalSharedProvider(r, e, n, "version-first"), c = __mfFindSharedProviderEntry(r, s);
			if (!c || n.shareConfig?.import === !1 && __mfMatchesSharedProvider(s, n) || s?.shareConfig?.import === !1) return;
			let { version: l } = c;
			if (!o && l !== n.version || !s.lib && !s.loading && !(s.loaded && typeof s.get == "function")) return;
			let u = i(e, o, n.version, n.scope);
			if (a(d.share, u) !== void 0) return;
			let f = t[e], p = f?.[l];
			if (c.registered && !__mfMatchesSharedProvider(p, s)) return;
			let m, h = s.lib;
			if (!h && L(s) || (!h && s.loading && (h = await s.loading), !h && s.loaded && typeof s.get == "function" && (h = await s.get()), !h)) return;
			let g = typeof h == "function" ? h() : h, v = await Promise.resolve(g), y = c.registered ? p : s;
			m = {
				provider: y,
				selection: {
					provider: y,
					version: l,
					from: s.from,
					registered: c.registered
				},
				resolved: v
			};
			let b = m?.provider, x = m?.selection;
			if (!x) return;
			let S = m?.resolved;
			if (S === void 0 || a(d.share, u) !== void 0 || x.registered && f?.[x.version] !== b) return;
			_(d.share, u, B(S), x.from), q.add(b);
		} catch (t) {
			console.error("[Module Federation] Failed to bridge materialized shared module \"" + e + "\"", t);
		}
	}, Y = async (e, n, r, o, s) => {
		try {
			let c = i(e, n.shareConfig?.singleton, n.version, n.scope), l = a(d.share, c), f = u(d.share, c), p = __mfSelectExternalSharedProvider(r, e, n, "version-first"), m = p || __mfSelectSharedProvider(r, e, n, "version-first") || n, g = __mfFindSharedProviderEntry(r, m);
			if (!g) return;
			let v = __mfMatchesSharedProvider(m, n), { version: y } = g;
			if (!n.shareConfig?.singleton && y !== n.version) return;
			let b = o?.[y], x = __mfResolveExternalSharedProvider(O, A, t, "default", e, g, p, b, "version-first");
			if (!x && !v) return;
			let { provider: S, scopeRootProvider: C } = x || {
				provider: m,
				scopeRootProvider: void 0
			};
			if (n.canLiveRebind === !1 || n.shareConfig?.import === !1 && __mfMatchesSharedProvider(S, n) || S?.shareConfig?.import === !1 || l !== void 0 && f !== h) return;
			let w = t[e], T = w?.[y];
			if (g.registered && !C && !__mfMatchesSharedProvider(T, S)) return;
			let E = await K(e, n.shareConfig, w, y, T, S, g.registered && !v), D = E?.provider, k = E?.selection;
			if (!k || __mfMatchesSharedProvider(D, n) || s && (s.version !== k.version || !__mfMatchesSharedProvider({ from: k.from }, s.provider)) || q.has(D)) return;
			let j = E?.resolved;
			if (j === void 0) return;
			let M = a(d.share, c), N = u(d.share, c);
			if (M !== void 0 && N !== h || k.registered && w?.[k.version] !== D) return;
			s || J.set(e, {
				version: k.version,
				provider: { from: k.from }
			}), q.add(D);
			let P = B(j);
			_(d.share, c, P, k.from);
		} catch (t) {
			console.error("[Module Federation] Failed to bridge external shared module \"" + e + "\"", t);
		}
	};
	for (let e of g) await Promise.all(e.map(async (e) => {
		let t = I[e];
		t && t.materialize !== !1 && !t.treeShaking && await he(e, t, F[e]);
	}));
	for (let [e, t] of Object.entries(I)) {
		if (t.treeShaking) continue;
		let n = i(e, t.shareConfig?.singleton, t.version, t.scope);
		if (a(d.share, n) !== void 0) continue;
		let r = i(e, !0, t.version, t.scope), o = a(d.share, r);
		o !== void 0 && _(d.share, n, o, u(d.share, r));
	}
	let X = [], ge = [], Z = new Map(X.map((e, t) => [e, t])), _e = {}, Q = X.filter((e) => I[e] && (I[e].materialize !== !1 || I[e].shareConfig?.import === !1));
	d.providerInit ||= /* @__PURE__ */ new Map();
	let ve = (e, t) => {
		let n = d.providerInit.get(e);
		if (n) return n;
		let r = Promise.resolve().then(t);
		return d.providerInit.set(e, r), r.catch(() => d.providerInit.delete(e)), r;
	};
	var ye = async (e) => {
		let t = new Set(e);
		for (let e of ge) await Promise.all(e.filter((e) => t.has(e)).map(async (e) => {
			let t = I[e], n = i(e, t.shareConfig?.singleton, t.version, t.scope);
			if (t.shareConfig?.import === !1 || t.treeShaking || a(d.share, n) !== void 0) return;
			let r = i(e, !0, t.version, t.scope), o = a(d.share, r);
			if (o !== void 0) {
				_(d.share, n, o, u(d.share, r));
				return;
			}
			let s = typeof R == "function" ? R(e, t) : void 0;
			if (s) {
				let e = s.lib;
				if (!e && s.loading && (e = await s.loading), !e && s.loaded && typeof s.get == "function" && (e = await s.get()), e) {
					let t = typeof e == "function" ? e() : e, r = await Promise.resolve(t);
					_(d.share, n, ((e) => {
						let t = e;
						for (let e = 0; e < 5; e++) {
							let e = t?.default;
							if (!e || typeof e != "object" || Object.keys(e).length === 0) break;
							let n = Object.keys(t).filter((e) => e !== "default").map((e) => t[e]);
							if (n.length > 0 && n.some((e) => e !== void 0)) break;
							t = e;
						}
						return t;
					})(r), s.from);
				}
				return;
			}
			let c = n.canonical, l = await ve(c, async () => {
				let e = await t.get(), n = typeof e == "function" ? e() : e;
				return Promise.resolve(n);
			}), f = ((e) => {
				let t = e;
				for (let e = 0; e < 5; e++) {
					let e = t?.default;
					if (!e || typeof e != "object" || Object.keys(e).length === 0) break;
					let n = Object.keys(t).filter((e) => e !== "default").map((e) => t[e]);
					if (n.length > 0 && n.some((e) => e !== void 0)) break;
					t = e;
				}
				return t;
			})(l), p = f === l ? { ...l } : f;
			p.__esModule !== !0 && Object.defineProperty(p, "__esModule", {
				value: !0,
				enumerable: !1
			}), _(d.share, n, p, h);
		}));
	};
	let be = (e) => {
		let t = I[e];
		if (!t.treeShaking && t.shareConfig?.import !== !1) return !1;
		let n = i(e, t.shareConfig?.singleton, t.version, t.scope);
		return t.treeShaking ? E(d.share, n, h) === void 0 && a(d.share, n) === void 0 : a(d.share, n) === void 0;
	}, xe = (e) => {
		let t = I[e], n = i(e, t.shareConfig?.singleton, t.version, t.scope);
		return (t.treeShaking ? E(d.share, n, h) ?? a(d.share, n) : a(d.share, n)) === void 0 ? t.treeShaking || t.shareConfig?.import === !1 ? !0 : typeof __mfSelectExternalSharedProvider == "function" && !!__mfSelectExternalSharedProvider(F[e], e, t, "version-first") : !1;
	}, Se = (e) => {
		let t = !0;
		for (; t;) {
			t = !1;
			for (let n of Q) {
				let r = Z.get(n);
				e.has(r) || (_e[r] || []).some((t) => e.has(t)) && (e.add(r), t = !0);
			}
		}
		return e;
	}, Ce = Se(new Set(Q.filter(xe).map((e) => Z.get(e)))), we = Q.filter((e) => !Ce.has(Z.get(e)));
	var Te = Q.filter((e) => Ce.has(Z.get(e)));
	await ye(we);
	try {
		await y(async () => {
			await Promise.all(await W.initializeSharing("default", {
				strategy: "version-first",
				from: "build",
				initScope: n
			}));
		});
	} catch (e) {
		console.error("[Module Federation]", e);
	}
	ee();
	let Ee = async () => {
		for (let e of g) await Promise.all(e.map(async (e) => {
			let n = I[e];
			n && n.materialize !== !1 && !n.treeShaking && await Y(e, n, t[e], F[e], void 0);
		}));
	};
	await Ee(), ne && (v = Ee);
	try {
		let e = globalThis.__FEDERATION__?.__SHARE__, t = Object.create(null);
		if (e) for (let [, n] of Object.entries(e)) for (let e of p) {
			let r = n?.[e];
			if (r) for (let [e, n] of Object.entries(r)) {
				let r = I?.[e], i = F[e], a = J.get(e);
				if (!r || !i || !a || r.treeShaking) continue;
				let o = t[e] || (t[e] = Object.create(null));
				for (let [e, t] of Object.entries(n)) {
					if (!t.lib || a.version !== e || !__mfMatchesSharedProvider(t, a.provider)) continue;
					let n = i[e];
					(t === n || n?.from && t.from === n.from) && (t === r || r.from && t.from === r.from || o[e] === void 0 && (o[e] = t));
				}
			}
		}
		for (let e of g) await Promise.all(e.map(async (e) => {
			let n = t[e];
			n && await Y(e, I[e], n, F[e], J.get(e));
		}));
	} catch (e) {
		console.error("[Module Federation] Failed to bridge external shared modules", e);
	}
	let De = async () => {}, Oe = async (e, n) => {
		let r = i(e, n.shareConfig?.singleton, n.version, n.scope), o = n.treeShaking ? E(d.share, r, h) : a(d.share, r);
		if (n.shareConfig?.import !== !1 || o !== void 0 || ie(e, n, F[e])) return;
		let s = (e) => {
			let t = e;
			for (let e = 0; e < 5; e++) {
				let e = t?.default;
				if (!e || typeof e != "object" || Object.keys(e).length === 0) break;
				let n = Object.keys(t).filter((e) => e !== "default").map((e) => t[e]);
				if (n.length > 0 && n.some((e) => e !== void 0)) break;
				t = e;
			}
			return t;
		}, c = t?.[e], l = __mfSelectSharedProvider(c, e, n, "version-first") || n, u = __mfFindSharedProviderEntry(c, l);
		if (!u) return;
		let f = (e) => e === n || e?.shareConfig?.import === !1;
		if (f(l)) return;
		let { version: p } = u, m = c?.[p], g = await K(e, n.shareConfig, c, p, m, l, u.registered), v = g?.selection, y = g?.provider, b = g?.resolved;
		if (!v || f(y) || b === void 0 || (n.treeShaking ? E(d.share, r, h) : a(d.share, r)) !== void 0 || v.registered && c?.[v.version] !== y) return;
		let x = s(b);
		if (n.treeShaking) {
			let e = n.treeShaking.providedExports ?? n.treeShaking.usedExports ?? [];
			C(d.share, r, e, x), D(d.share, r, h, x);
		} else _(d.share, r, x, v.from);
	}, ke = [], $ = /* @__PURE__ */ new Set();
	for (let e of Te) {
		let t = I[e], n = Z.get(e);
		if (be(e)) try {
			t.treeShaking ? await De(e, t) : t.shareConfig?.import === !1 && await Oe(e, t);
		} catch (t) {
			console.error(`[Module Federation] Failed to resolve runtime-only shared module "${e}"`, t);
		}
		be(e) && $.add(n);
	}
	return Se($), ke.push(...Te.filter((e) => !$.has(Z.get(e)))), await ye(ke), l(W), W;
}
async function C(e) {
	let t = await x();
	if (!(e in t)) throw Error(`[Module Federation] Module ${e} does not exist in container.`);
	return v && await v(), d.pendingShareLoads && await Promise.all(d.pendingShareLoads), t[e]().then((e) => () => e);
}
//#endregion
export { C as get, S as init };

if (typeof document !== 'undefined' && document.head) {
  try {
    for (const __mfWarmupPath of ["_virtual_mf-localSharedImportMap___mfe_internal__security_ui__mf_owner__1-7vPWLiGJ.js","dist-Dcnk1x95.js"]) {
      const __mfWarmupLink = document.createElement('link');
      __mfWarmupLink.rel = 'modulepreload';
      __mfWarmupLink.crossOrigin = '';
      __mfWarmupLink.href = new URL(__mfWarmupPath, import.meta.url).href;
      document.head.appendChild(__mfWarmupLink);
    }
  } catch (__mfWarmupError) {}
}
