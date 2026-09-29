//#region \0virtual:mf:__mfe_internal__security_ui__mf_owner__1__H_A_I__hostAutoInit__H_A_I__.js
var e = "__mf_module_cache__";
globalThis[e] ||= {
	share: {},
	remote: {}
}, globalThis[e].share ||= {}, globalThis[e].remote ||= {};
var t = globalThis[e];
for (let e of Object.keys(t.share)) if (e.startsWith("default:")) {
	let n = e.slice(8);
	t.share[n] === void 0 && (t.share[n] = t.share[e]);
} else if (!e.includes(":")) {
	let n = "default:" + e;
	t.share[n] === void 0 && (t.share[n] = t.share[e]);
}
var n;
async function r() {
	return n ||= (async () => {
		let e = (e, t, n, r) => {
			let i = (Array.isArray(r) ? r[0] : r) || "default", a = t || !n ? e : e + "@" + n, o = { canonical: i + ":" + a };
			return i === "default" && (o.aliases = [a]), o;
		}, n = (e, t) => {
			let n = e[t.canonical];
			if (n !== void 0) return n;
			let r = t.aliases || [];
			for (let n of r) {
				if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
				let r = e[n];
				if (r !== void 0) return e[t.canonical] = r, r;
			}
		}, r = Symbol.for("module-federation.shared-cache-listeners"), i = Symbol.for("module-federation.shared-cache-owners"), a = (e) => {
			let t = e[i];
			return t === void 0 && (t = Object.create(null), Object.defineProperty(e, i, {
				value: t,
				enumerable: !1,
				configurable: !1,
				writable: !1
			})), t;
		}, o = (e, t) => e[i]?.[t.canonical], s = (e, t, n, o) => {
			e[t.canonical] = n;
			let s = t.aliases || [];
			for (let t of s) Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			});
			let c = e[i];
			o === void 0 ? c && delete c[t.canonical] : a(e)[t.canonical] = o;
			let l = e[r]?.[t.canonical];
			if (l) for (let e of l) e(n);
			return n;
		}, c = await (await import("./remoteEntry.js")).init(), { usedShared: l } = await import("./_virtual_mf-localSharedImportMap___mfe_internal__security_ui__mf_owner__1-7vPWLiGJ.js"), u = (e) => {
			let t = e;
			for (let e = 0; e < 5; e++) {
				let e = t?.default;
				if (!e || typeof e != "object" || Object.keys(e).length === 0) break;
				let n = Object.keys(t).filter((e) => e !== "default").map((e) => t[e]);
				if (n.length > 0 && n.some((e) => e !== void 0)) break;
				t = e;
			}
			return t;
		}, d = (e, t) => __mfGetShareScopeNames(t).some((n) => Object.keys(c.shareScopeMap?.[n]?.[e] || {}).some((e) => e !== t.version));
		for (let r of []) await Promise.all(r.map(async (r) => {
			let i = l[r];
			if (!i || i.materialize === !1 || i.treeShaking) return;
			let a = e(r, i.shareConfig?.singleton, i.version, i.scope);
			if (!(n(t.share, a) !== void 0 && (!i.shareConfig?.singleton && o(t.share, a) === "security_ui" || i.shareConfig?.singleton && !d(r, i)))) {
				if (i.shareConfig?.import === !1) {
					let e = __mfGetShareScopeNames(i), t = (e) => !__mfHasUsableProvider(c.shareScopeMap?.[e]?.[r], r, i, e);
					if (e.some(t)) {
						c.__mfKeepAdoptedProviders || (c.__mfKeepAdoptedProviders = !0, c.sharedHandler?.hooks?.lifecycle?.afterRegisterShare?.on?.((e) => {
							let { shared: t, previousShared: n, registeredShared: r } = e || {};
							if (t?.shareConfig?.import !== !1 || r !== t || !n || n.shareConfig?.import === !1) return;
							let i = c.shareScopeMap?.[e.scope]?.[e.pkgName];
							i && i[t.version] === t && (i[t.version] = n);
						}));
						for (let n of globalThis.__FEDERATION__?.__INSTANCES__ || []) for (let a of e) {
							let e = n?.shareScopeMap?.[a]?.[r];
							if (!__mfHasUsableProvider(e, r, i, a) || !t(a)) continue;
							let o = (c.shareScopeMap[a] ||= {})[r] ||= {};
							for (let [t, n] of Object.entries(e)) n?.shareConfig?.import !== !1 && (o[t] && o[t].shareConfig?.import !== !1 || (o[t] = n));
						}
					}
					if (e.every(t)) return;
				}
				await c.loadShare(r, { customShareInfo: { shareConfig: i.shareConfig } }).then(async (e) => {
					if (e === !1) return;
					let n = typeof e == "function" ? e() : e, r = u(await Promise.resolve(n));
					s(t.share, a, r, "security_ui");
				});
			}
		}));
		return c;
	})(), n;
}
n = r();
//#endregion
export { n as hostInitPromise, r as initHost };
