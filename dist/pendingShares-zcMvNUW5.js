//#region \0virtual:mf:__mfe_internal__security_ui__mf_owner__1__P_S__pendingShares__P_S__.js
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
var n = (e, t, n, r) => {
	let i = (Array.isArray(r) ? r[0] : r) || "default", a = t || !n ? e : e + "@" + n, o = { canonical: i + ":" + a };
	return i === "default" && (o.aliases = [a]), o;
}, r = (e, t) => {
	let n = e[t.canonical];
	if (n !== void 0) return n;
	let r = t.aliases || [];
	for (let n of r) {
		if (!Object.prototype.hasOwnProperty.call(e, n)) continue;
		let r = e[n];
		if (r !== void 0) return e[t.canonical] = r, r;
	}
}, i = [];
async function a() {
	if (i.length === 0) return;
	let { usedShared: e } = await import("./_virtual_mf-localSharedImportMap___mfe_internal__security_ui__mf_owner__1-7vPWLiGJ.js");
	await Promise.all(i.map(async ([i, a]) => {
		let o = e[i];
		if (!o || o.materialize === !1 || o.treeShaking || o.shareConfig?.import === !1) return;
		let s = n(i, o.shareConfig?.singleton, o.version, o.scope);
		r(t.share, s) === void 0 && await a().catch((e) => console.warn("[module-federation] shared preload failed:", i, e));
	}));
}
//#endregion
export { a as preloadPendingShares };
