var Lr = Object.defineProperty;
var Mr = (n, t, e) =>
  t in n
    ? Lr(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (n[t] = e);
var U = (n, t, e) => (Mr(n, typeof t != "symbol" ? t + "" : t, e), e);
function Fr(n, t) {
  const e = new Array(t.length).fill(0);
  return new Array(t.length).fill(0).map((r, s) => (i, a) => {
    (e[s] = (i / a) * t[s] * 1e3),
      n(
        e.reduce((o, l) => o + l, 0),
        1e3,
      );
  });
}
const Sn = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};
function Ur(n) {
  return n.replace(/[&<>"']/gu, (t) => Sn[t]);
}
function vr(n) {
  return n.replace(/[&<]/gu, (t) => Sn[t]);
}
function An(n) {
  return Array.isArray(n) && typeof n[0] == "string";
}
function Hr(n) {
  return Array.isArray(n) && Array.isArray(n[0]);
}
let Ge = 0;
const te = new Map(),
  Wr = 3e8;
function Br(n, t) {
  if (te.has(n)) {
    const r = te.get(n);
    return te.delete(n), te.set(n, r), r;
  }
  const e = t();
  for (; te.size && Ge + e.length > Wr; ) {
    const [r, s] = te.entries().next().value;
    (Ge -= s.length), te.delete(r);
  }
  return te.set(n, e), (Ge += e.length), e;
}
class jr {
  constructor(t, e, r) {
    U(this, "_snapshots");
    U(this, "_index");
    U(this, "snapshotName");
    U(this, "_resources");
    U(this, "_snapshot");
    U(this, "_callId");
    (this._resources = t),
      (this._snapshots = e),
      (this._index = r),
      (this._snapshot = e[r]),
      (this._callId = e[r].callId),
      (this.snapshotName = e[r].snapshotName);
  }
  snapshot() {
    return this._snapshots[this._index];
  }
  viewport() {
    return this._snapshots[this._index].viewport;
  }
  render() {
    const t = [],
      e = (i, a, o, l) => {
        if (typeof i == "string") {
          o === "STYLE" || o === "style" ? t.push(Zr(i)) : t.push(vr(i));
          return;
        }
        if (Hr(i)) {
          const _ = a - i[0][0];
          if (_ >= 0 && _ <= a) {
            const d = Gr(this._snapshots[_]),
              p = i[0][1];
            if (p >= 0 && p < d.length) return e(d[p], _, o, l);
          }
        } else if (An(i)) {
          const [_, d, ...p] = i,
            h = _ === "NOSCRIPT" ? "X-NOSCRIPT" : _,
            g = Object.entries(d || {});
          t.push("<", h);
          const x = "__playwright_current_src__",
            f = h === "IFRAME" || h === "FRAME",
            c = h === "A",
            u = h === "IMG",
            m = u && g.some((y) => y[0] === x),
            b =
              h === "SOURCE" &&
              o === "PICTURE" &&
              (l == null ? void 0 : l.some((y) => y[0] === x));
          for (const [y, C] of g) {
            let w = y;
            f && y.toLowerCase() === "src" && (w = "__playwright_src__"),
              u && y === x && (w = "src"),
              ["src", "srcset"].includes(y.toLowerCase()) &&
                (m || b) &&
                (w = "_" + w);
            let T = C;
            c && y.toLowerCase() === "href"
              ? (T = "link://" + C)
              : (y.toLowerCase() === "href" ||
                  y.toLowerCase() === "src" ||
                  y === x) &&
                (T = et(C)),
              t.push(" ", w, '="', Ur(T), '"');
          }
          t.push(">");
          for (const y of p) e(y, a, h, g);
          qr.has(h) || t.push("</", h, ">");
          return;
        } else return;
      },
      r = this._snapshot;
    return {
      html: Br(this, () => {
        e(r.html, this._index, void 0, void 0);
        const i = t.join("");
        return (
          (r.doctype ? `<!DOCTYPE ${r.doctype}>` : "") +
          [
            "<style>*,*::before,*::after { visibility: hidden }</style>",
            `<script>${Yr(this._callId, this.snapshotName)}<\/script>`,
          ].join("") +
          i
        );
      }),
      pageId: r.pageId,
      frameId: r.frameId,
      index: this._index,
    };
  }
  resourceByUrl(t, e) {
    const r = this._snapshot;
    let s, i;
    for (const o of this._resources) {
      if (
        typeof o._monotonicTime == "number" &&
        o._monotonicTime >= r.timestamp
      )
        break;
      o.response.status !== 304 &&
        o.request.url === t &&
        o.request.method === e &&
        (o._frameref === r.frameId ? (s = o) : (i = o));
    }
    let a = s ?? i;
    if (a && e.toUpperCase() === "GET") {
      for (const o of r.resourceOverrides)
        if (t === o.url && o.sha1) {
          a = {
            ...a,
            response: {
              ...a.response,
              content: { ...a.response.content, _sha1: o.sha1 },
            },
          };
          break;
        }
    }
    return a;
  }
}
const qr = new Set([
  "AREA",
  "BASE",
  "BR",
  "COL",
  "COMMAND",
  "EMBED",
  "HR",
  "IMG",
  "INPUT",
  "KEYGEN",
  "LINK",
  "MENUITEM",
  "META",
  "PARAM",
  "SOURCE",
  "TRACK",
  "WBR",
]);
function Gr(n) {
  if (!n._nodes) {
    const t = [],
      e = (r) => {
        if (typeof r == "string") t.push(r);
        else if (An(r)) {
          const [, , ...s] = r;
          for (const i of s) e(i);
          t.push(r);
        }
      };
    e(n.html), (n._nodes = t);
  }
  return n._nodes;
}
function Yr(...n) {
  function t(e, ...r) {
    const s =
        "Recorded click position in absolute coordinates did not match the center of the clicked element. This is likely due to a difference between the test runner and the trace viewer operating systems.",
      i = [],
      a = [],
      o = [],
      l = (p) => {
        for (const h of p.querySelectorAll("[__playwright_scroll_top_]"))
          i.push(h);
        for (const h of p.querySelectorAll("[__playwright_scroll_left_]"))
          a.push(h);
        for (const h of p.querySelectorAll("[__playwright_value_]")) {
          const g = h;
          g.type !== "file" &&
            (g.value = g.getAttribute("__playwright_value_")),
            h.removeAttribute("__playwright_value_");
        }
        for (const h of p.querySelectorAll("[__playwright_checked_]"))
          (h.checked = h.getAttribute("__playwright_checked_") === "true"),
            h.removeAttribute("__playwright_checked_");
        for (const h of p.querySelectorAll("[__playwright_selected_]"))
          (h.selected = h.getAttribute("__playwright_selected_") === "true"),
            h.removeAttribute("__playwright_selected_");
        for (const h of r)
          for (const g of p.querySelectorAll(
            `[__playwright_target__="${h}"]`,
          )) {
            const x = g.style;
            (x.outline = "2px solid #006ab1"),
              (x.backgroundColor = "#6fa8dc7f"),
              o.push(g);
          }
        for (const h of p.querySelectorAll("iframe, frame")) {
          const g = h.getAttribute("__playwright_src__");
          if (!g)
            h.setAttribute(
              "src",
              'data:text/html,<body style="background: #ddd"></body>',
            );
          else {
            const x = new URL(e(window.location.href)),
              f = x.pathname.lastIndexOf("/snapshot/");
            f !== -1 && (x.pathname = x.pathname.substring(0, f + 1)),
              (x.pathname += g.substring(1)),
              h.setAttribute("src", x.toString());
          }
        }
        {
          const h = p.querySelector("body[__playwright_custom_elements__]");
          if (h && window.customElements) {
            const g = (
              h.getAttribute("__playwright_custom_elements__") || ""
            ).split(",");
            for (const x of g)
              window.customElements.define(x, class extends HTMLElement {});
          }
        }
        for (const h of p.querySelectorAll(
          "template[__playwright_shadow_root_]",
        )) {
          const g = h,
            x = g.parentElement.attachShadow({ mode: "open" });
          x.appendChild(g.content), g.remove(), l(x);
        }
        if ("adoptedStyleSheets" in p) {
          const h = [...p.adoptedStyleSheets];
          for (const g of p.querySelectorAll(
            "template[__playwright_style_sheet_]",
          )) {
            const x = g,
              f = new CSSStyleSheet();
            f.replaceSync(x.getAttribute("__playwright_style_sheet_")),
              h.push(f);
          }
          p.adoptedStyleSheets = h;
        }
      },
      _ = () => {
        window.removeEventListener("load", _);
        for (const h of i)
          (h.scrollTop = +h.getAttribute("__playwright_scroll_top_")),
            h.removeAttribute("__playwright_scroll_top_");
        for (const h of a)
          (h.scrollLeft = +h.getAttribute("__playwright_scroll_left_")),
            h.removeAttribute("__playwright_scroll_left_");
        document.styleSheets[0].disabled = !0;
        const p = new URL(window.location.href).searchParams;
        if (p.get("pointX") && p.get("pointY")) {
          const h = +p.get("pointX"),
            g = +p.get("pointY"),
            x = o.length > 0,
            f = document.documentElement ? [document.documentElement] : [];
          for (const c of x ? o : f) {
            const u = document.createElement("x-pw-pointer");
            if (
              ((u.style.position = "fixed"),
              (u.style.backgroundColor = "#f44336"),
              (u.style.width = "20px"),
              (u.style.height = "20px"),
              (u.style.borderRadius = "10px"),
              (u.style.margin = "-10px 0 0 -10px"),
              (u.style.zIndex = "2147483646"),
              (u.style.display = "flex"),
              (u.style.alignItems = "center"),
              (u.style.justifyContent = "center"),
              x)
            ) {
              const m = c.getBoundingClientRect(),
                b = m.left + m.width / 2,
                y = m.top + m.height / 2;
              if (
                ((u.style.left = b + "px"),
                (u.style.top = y + "px"),
                Math.abs(b - h) >= 10 || Math.abs(y - g) >= 10)
              ) {
                const C = document.createElement("x-pw-pointer-warning");
                (C.textContent = "⚠"),
                  (C.style.fontSize = "19px"),
                  (C.style.color = "white"),
                  (C.style.marginTop = "-3.5px"),
                  (C.style.userSelect = "none"),
                  u.appendChild(C),
                  u.setAttribute("title", s);
              }
            } else (u.style.left = h + "px"), (u.style.top = g + "px");
            document.documentElement.appendChild(u);
          }
        }
      },
      d = () => l(document);
    window.addEventListener("load", _),
      window.addEventListener("DOMContentLoaded", d);
  }
  return `
(${t.toString()})(${tt.toString()}${n.map((e) => `, "${e}"`).join("")})`;
}
const Rn = [
    "about:",
    "blob:",
    "data:",
    "file:",
    "ftp:",
    "http:",
    "https:",
    "mailto:",
    "sftp:",
    "ws:",
    "wss:",
  ],
  Dt = "http://playwright.bloburl/#";
function et(n) {
  n.startsWith(Dt) && (n = n.substring(Dt.length));
  try {
    const t = new URL(n);
    if (t.protocol === "javascript:" || t.protocol === "vbscript:")
      return "javascript:void(0)";
    const e = t.protocol === "blob:",
      r = t.protocol === "file:";
    if (!e && !r && Rn.includes(t.protocol)) return n;
    const s = "pw-" + t.protocol.slice(0, t.protocol.length - 1);
    return (
      r || (t.protocol = "https:"),
      (t.hostname = t.hostname ? `${s}--${t.hostname}` : s),
      r && (t.protocol = "https:"),
      t.toString()
    );
  } catch {
    return n;
  }
}
const Vr = /url\(['"]?([\w-]+:)\/\//gi;
function Zr(n) {
  return n.replace(Vr, (t, e) =>
    !(e === "blob:") && !(e === "file:") && Rn.includes(e)
      ? t
      : t.replace(e + "//", `https://pw-${e.slice(0, -1)}--`),
  );
}
function tt(n) {
  const t = new URL(n);
  return t.pathname.endsWith("/snapshot.html") ? t.searchParams.get("r") : n;
}
class Kr {
  constructor(t, e) {
    U(this, "_snapshotStorage");
    U(this, "_resourceLoader");
    U(this, "_snapshotIds", new Map());
    (this._snapshotStorage = t), (this._resourceLoader = e);
  }
  serveSnapshot(t, e, r) {
    const s = this._snapshot(t.substring(9), e);
    if (!s) return new Response(null, { status: 404 });
    const i = s.render();
    return (
      this._snapshotIds.set(r, s),
      new Response(i.html, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      })
    );
  }
  serveSnapshotInfo(t, e) {
    const r = this._snapshot(t.substring(13), e);
    return this._respondWithJson(
      r
        ? { viewport: r.viewport(), url: r.snapshot().frameUrl }
        : { error: "No snapshot found" },
    );
  }
  _snapshot(t, e) {
    const r = e.get("name");
    return this._snapshotStorage.snapshotByName(t.slice(1), r);
  }
  _respondWithJson(t) {
    return new Response(JSON.stringify(t), {
      status: 200,
      headers: {
        "Cache-Control": "public, max-age=31536000",
        "Content-Type": "application/json",
      },
    });
  }
  async serveResource(t, e, r) {
    let s;
    const i = this._snapshotIds.get(r);
    for (const g of t)
      if (((s = i == null ? void 0 : i.resourceByUrl(Xr(g), e)), s)) break;
    if (!s) return new Response(null, { status: 404 });
    const a = s.response.content._sha1,
      o = a ? (await this._resourceLoader(a)) || new Blob([]) : new Blob([]);
    let l = s.response.content.mimeType;
    /^text\/|^application\/(javascript|json)/.test(l) &&
      !l.includes("charset") &&
      (l = `${l}; charset=utf-8`);
    const d = new Headers();
    l !== "x-unknown" && d.set("Content-Type", l);
    for (const { name: g, value: x } of s.response.headers) d.set(g, x);
    d.delete("Content-Encoding"),
      d.delete("Access-Control-Allow-Origin"),
      d.set("Access-Control-Allow-Origin", "*"),
      d.delete("Content-Length"),
      d.set("Content-Length", String(o.size)),
      d.set("Cache-Control", "public, max-age=31536000");
    const { status: p } = s.response,
      h = p === 101 || p === 204 || p === 205 || p === 304;
    return new Response(h ? null : o, {
      headers: d,
      status: s.response.status,
      statusText: s.response.statusText,
    });
  }
}
function Xr(n) {
  try {
    const t = new URL(n);
    return (t.hash = ""), t.toString();
  } catch {
    return n;
  }
}
function $r(n) {
  const t = new Map(),
    { files: e, stacks: r } = n;
  for (const s of r) {
    const [i, a] = s;
    t.set(
      `call@${i}`,
      a.map((o) => ({
        file: e[o[0]],
        line: o[1],
        column: o[2],
        function: o[3],
      })),
    );
  }
  return t;
}
function Jr() {
  return {
    origin: "testRunner",
    traceUrl: "",
    startTime: Number.MAX_SAFE_INTEGER,
    wallTime: Number.MAX_SAFE_INTEGER,
    endTime: 0,
    browserName: "",
    options: {
      deviceScaleFactor: 1,
      isMobile: !1,
      viewport: { width: 1280, height: 800 },
    },
    pages: [],
    resources: [],
    actions: [],
    events: [],
    errors: [],
    stdio: [],
    hasSource: !1,
  };
}
class Qr {
  constructor() {
    U(this, "_resources", []);
    U(this, "_frameSnapshots", new Map());
  }
  addResource(t) {
    (t.request.url = et(t.request.url)), this._resources.push(t);
  }
  addFrameSnapshot(t) {
    for (const s of t.resourceOverrides) s.url = et(s.url);
    let e = this._frameSnapshots.get(t.frameId);
    e ||
      ((e = { raw: [], renderers: [] }),
      this._frameSnapshots.set(t.frameId, e),
      t.isMainFrame && this._frameSnapshots.set(t.pageId, e)),
      e.raw.push(t);
    const r = new jr(this._resources, e.raw, e.raw.length - 1);
    return e.renderers.push(r), r;
  }
  snapshotByName(t, e) {
    const r = this._frameSnapshots.get(t);
    return r == null ? void 0 : r.renderers.find((s) => s.snapshotName === e);
  }
  snapshotsForTest() {
    return [...this._frameSnapshots.keys()];
  }
  finalize() {
    this._resources.sort(
      (t, e) => (t._monotonicTime || 0) - (e._monotonicTime || 0),
    );
  }
}
class Cn extends Error {
  constructor(t) {
    super(t), (this.name = "TraceVersionError");
  }
}
const It = 7;
class zr {
  constructor(t, e) {
    U(this, "_contextEntry");
    U(this, "_snapshotStorage");
    U(this, "_actionMap", new Map());
    U(this, "_version");
    U(this, "_pageEntries", new Map());
    U(this, "_jsHandles", new Map());
    U(this, "_consoleObjects", new Map());
    (this._contextEntry = t), (this._snapshotStorage = e);
  }
  appendTrace(t) {
    for (const e of t.split(`
`))
      this._appendEvent(e);
  }
  actions() {
    return [...this._actionMap.values()];
  }
  _pageEntry(t) {
    let e = this._pageEntries.get(t);
    return (
      e ||
        ((e = { screencastFrames: [] }),
        this._pageEntries.set(t, e),
        this._contextEntry.pages.push(e)),
      e
    );
  }
  _appendEvent(t) {
    if (!t) return;
    const e = this._modernize(JSON.parse(t));
    for (const r of e) this._innerAppendEvent(r);
  }
  _innerAppendEvent(t) {
    const e = this._contextEntry;
    switch (t.type) {
      case "context-options": {
        if (t.version > It)
          throw new Cn(
            "The trace was created by a newer version of Playwright and is not supported by this version of the viewer. Please use latest Playwright to open the trace.",
          );
        (this._version = t.version),
          (e.origin = t.origin),
          (e.browserName = t.browserName),
          (e.channel = t.channel),
          (e.title = t.title),
          (e.platform = t.platform),
          (e.wallTime = t.wallTime),
          (e.startTime = t.monotonicTime),
          (e.sdkLanguage = t.sdkLanguage),
          (e.options = t.options),
          (e.testIdAttributeName = t.testIdAttributeName);
        break;
      }
      case "screencast-frame": {
        this._pageEntry(t.pageId).screencastFrames.push(t);
        break;
      }
      case "before": {
        this._actionMap.set(t.callId, {
          ...t,
          type: "action",
          endTime: 0,
          log: [],
        });
        break;
      }
      case "input": {
        const r = this._actionMap.get(t.callId);
        (r.inputSnapshot = t.inputSnapshot), (r.point = t.point);
        break;
      }
      case "log": {
        const r = this._actionMap.get(t.callId);
        if (!r) return;
        r.log.push({ time: t.time, message: t.message });
        break;
      }
      case "after": {
        const r = this._actionMap.get(t.callId);
        (r.afterSnapshot = t.afterSnapshot),
          (r.endTime = t.endTime),
          (r.result = t.result),
          (r.error = t.error),
          (r.attachments = t.attachments),
          t.point && (r.point = t.point);
        break;
      }
      case "action": {
        this._actionMap.set(t.callId, { ...t, log: [] });
        break;
      }
      case "event": {
        e.events.push(t);
        break;
      }
      case "stdout": {
        e.stdio.push(t);
        break;
      }
      case "stderr": {
        e.stdio.push(t);
        break;
      }
      case "error": {
        e.errors.push(t);
        break;
      }
      case "console": {
        e.events.push(t);
        break;
      }
      case "resource-snapshot":
        this._snapshotStorage.addResource(t.snapshot),
          e.resources.push(t.snapshot);
        break;
      case "frame-snapshot":
        this._snapshotStorage.addFrameSnapshot(t.snapshot);
        break;
    }
    "pageId" in t && t.pageId && this._pageEntry(t.pageId),
      (t.type === "action" || t.type === "before") &&
        (e.startTime = Math.min(e.startTime, t.startTime)),
      (t.type === "action" || t.type === "after") &&
        (e.endTime = Math.max(e.endTime, t.endTime)),
      t.type === "event" &&
        ((e.startTime = Math.min(e.startTime, t.time)),
        (e.endTime = Math.max(e.endTime, t.time))),
      t.type === "screencast-frame" &&
        ((e.startTime = Math.min(e.startTime, t.timestamp)),
        (e.endTime = Math.max(e.endTime, t.timestamp)));
  }
  _processedContextCreatedEvent() {
    return this._version !== void 0;
  }
  _modernize(t) {
    let e = this._version || t.version;
    if (e === void 0) return [t];
    let r = [t];
    for (; e < It; ++e) r = this[`_modernize_${e}_to_${e + 1}`].call(this, r);
    return r;
  }
  _modernize_0_to_1(t) {
    for (const e of t)
      e.type === "action" &&
        typeof e.metadata.error == "string" &&
        (e.metadata.error = {
          error: { name: "Error", message: e.metadata.error },
        });
    return t;
  }
  _modernize_1_to_2(t) {
    var e;
    for (const r of t)
      r.type !== "frame-snapshot" ||
        !r.snapshot.isMainFrame ||
        (r.snapshot.viewport = ((e = this._contextEntry.options) == null
          ? void 0
          : e.viewport) || { width: 1280, height: 720 });
    return t;
  }
  _modernize_2_to_3(t) {
    for (const e of t) {
      if (e.type !== "resource-snapshot" || e.snapshot.request) continue;
      const r = e.snapshot;
      e.snapshot = {
        _frameref: r.frameId,
        request: {
          url: r.url,
          method: r.method,
          headers: r.requestHeaders,
          postData: r.requestSha1 ? { _sha1: r.requestSha1 } : void 0,
        },
        response: {
          status: r.status,
          headers: r.responseHeaders,
          content: { mimeType: r.contentType, _sha1: r.responseSha1 },
        },
        _monotonicTime: r.timestamp,
      };
    }
    return t;
  }
  _modernize_3_to_4(t) {
    const e = [];
    for (const r of t) {
      const s = this._modernize_event_3_to_4(r);
      s && e.push(s);
    }
    return e;
  }
  _modernize_event_3_to_4(t) {
    var r, s, i, a;
    if (t.type !== "action" && t.type !== "event") return t;
    const e = t.metadata;
    return e.internal || e.method.startsWith("tracing")
      ? null
      : t.type === "event"
        ? e.method === "__create__" && e.type === "ConsoleMessage"
          ? {
              type: "object",
              class: e.type,
              guid: e.params.guid,
              initializer: e.params.initializer,
            }
          : {
              type: "event",
              time: e.startTime,
              class: e.type,
              method: e.method,
              params: e.params,
              pageId: e.pageId,
            }
        : {
            type: "action",
            callId: e.id,
            startTime: e.startTime,
            endTime: e.endTime,
            apiName: e.apiName || e.type + "." + e.method,
            class: e.type,
            method: e.method,
            params: e.params,
            wallTime: e.wallTime || Date.now(),
            log: e.log,
            beforeSnapshot:
              (r = e.snapshots.find((o) => o.title === "before")) == null
                ? void 0
                : r.snapshotName,
            inputSnapshot:
              (s = e.snapshots.find((o) => o.title === "input")) == null
                ? void 0
                : s.snapshotName,
            afterSnapshot:
              (i = e.snapshots.find((o) => o.title === "after")) == null
                ? void 0
                : i.snapshotName,
            error: (a = e.error) == null ? void 0 : a.error,
            result: e.result,
            point: e.point,
            pageId: e.pageId,
          };
  }
  _modernize_4_to_5(t) {
    const e = [];
    for (const r of t) {
      const s = this._modernize_event_4_to_5(r);
      s && e.push(s);
    }
    return e;
  }
  _modernize_event_4_to_5(t) {
    var e, r;
    if (
      (t.type === "event" &&
        t.method === "__create__" &&
        t.class === "JSHandle" &&
        this._jsHandles.set(t.params.guid, t.params.initializer),
      t.type === "object")
    ) {
      if (t.class !== "ConsoleMessage") return null;
      const s =
        (e = t.initializer.args) == null
          ? void 0
          : e.map((i) => {
              if (i.guid) {
                const a = this._jsHandles.get(i.guid);
                return {
                  preview: (a == null ? void 0 : a.preview) || "",
                  value: "",
                };
              }
              return { preview: i.preview || "", value: i.value || "" };
            });
      return (
        this._consoleObjects.set(t.guid, {
          type: t.initializer.type,
          text: t.initializer.text,
          location: t.initializer.location,
          args: s,
        }),
        null
      );
    }
    if (t.type === "event" && t.method === "console") {
      const s = this._consoleObjects.get(
        ((r = t.params.message) == null ? void 0 : r.guid) || "",
      );
      return s
        ? {
            type: "console",
            time: t.time,
            pageId: t.pageId,
            messageType: s.type,
            text: s.text,
            args: s.args,
            location: s.location,
          }
        : null;
    }
    return t;
  }
  _modernize_5_to_6(t) {
    const e = [];
    for (const r of t)
      if ((e.push(r), !(r.type !== "after" || !r.log.length)))
        for (const s of r.log)
          e.push({ type: "log", callId: r.callId, message: s, time: -1 });
    return e;
  }
  _modernize_6_to_7(t) {
    const e = [];
    if (
      !this._processedContextCreatedEvent() &&
      t[0].type !== "context-options"
    ) {
      const r = {
        type: "context-options",
        origin: "testRunner",
        version: 7,
        browserName: "",
        options: {},
        platform: process.platform,
        wallTime: 0,
        monotonicTime: 0,
        sdkLanguage: "javascript",
      };
      e.push(r);
    }
    for (const r of t) {
      if (r.type === "context-options") {
        e.push({ ...r, monotonicTime: 0, origin: "library" });
        continue;
      }
      !this._contextEntry.wallTime &&
        r.type === "before" &&
        (this._contextEntry.wallTime = r.wallTime),
        !this._contextEntry.startTime &&
          r.type === "before" &&
          (this._contextEntry.startTime = r.startTime),
        e.push(r);
    }
    return e;
  }
}
class es {
  constructor() {
    U(this, "contextEntries", []);
    U(this, "_snapshotStorage");
    U(this, "_backend");
    U(this, "_resourceToContentType", new Map());
  }
  async load(t, e) {
    var o, l;
    this._backend = t;
    const r = [];
    let s = !1;
    for (const _ of await this._backend.entryNames()) {
      const d = _.match(/(.+)\.trace/);
      d && r.push(d[1] || ""), _.includes("src@") && (s = !0);
    }
    if (!r.length) throw new Error("Cannot find .trace file");
    this._snapshotStorage = new Qr();
    const i = r.length * 3;
    let a = 0;
    for (const _ of r) {
      const d = Jr();
      (d.traceUrl = t.traceURL()), (d.hasSource = s);
      const p = new zr(d, this._snapshotStorage),
        h = (await this._backend.readText(_ + ".trace")) || "";
      p.appendTrace(h), e(++a, i);
      const g = (await this._backend.readText(_ + ".network")) || "";
      if (
        (p.appendTrace(g),
        e(++a, i),
        (d.actions = p.actions().sort((f, c) => f.startTime - c.startTime)),
        !t.isLive())
      ) {
        for (const f of d.actions.slice().reverse())
          if (!f.endTime && !f.error)
            for (const c of d.actions)
              c.parentId === f.callId &&
                f.endTime < c.endTime &&
                (f.endTime = c.endTime);
      }
      const x = await this._backend.readText(_ + ".stacks");
      if (x) {
        const f = $r(JSON.parse(x));
        for (const c of d.actions) c.stack = c.stack || f.get(c.callId);
      }
      e(++a, i);
      for (const f of d.resources)
        (o = f.request.postData) != null &&
          o._sha1 &&
          this._resourceToContentType.set(
            f.request.postData._sha1,
            Nt(f.request.postData.mimeType),
          ),
          (l = f.response.content) != null &&
            l._sha1 &&
            this._resourceToContentType.set(
              f.response.content._sha1,
              Nt(f.response.content.mimeType),
            );
      this.contextEntries.push(d);
    }
    this._snapshotStorage.finalize();
  }
  async hasEntry(t) {
    return this._backend.hasEntry(t);
  }
  async resourceForSha1(t) {
    const e = await this._backend.readBlob("resources/" + t),
      r = this._resourceToContentType.get(t);
    return !e || r === void 0 || r === "x-unknown"
      ? e
      : new Blob([e], { type: r });
  }
  storage() {
    return this._snapshotStorage;
  }
}
function Nt(n) {
  const t = n.match(/^(.*);\s*charset=.*$/);
  return t ? t[1] : n;
}
const ts = 15,
  L = 0,
  z = 1,
  ns = 2,
  V = -2,
  W = -3,
  Pt = -4,
  ee = -5,
  Z = [
    0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
    65535,
  ],
  On = 1440,
  rs = 0,
  ss = 4,
  is = 9,
  as = 5,
  os = [
    96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48,
    0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0, 8, 128, 0,
    8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8,
    120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 176, 0, 8,
    8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227,
    83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36,
    0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0,
    8, 28, 0, 9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0,
    8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80,
    7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9,
    196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66,
    0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0,
    8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8,
    138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7,
    51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9,
    172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30,
    0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8, 110,
    0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256,
    0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194,
    80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0,
    9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8,
    57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8,
    137, 0, 8, 73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7,
    43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
    170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29,
    0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109,
    0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0,
    8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81,
    7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9,
    230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8,
    59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8,
    139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7,
    51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9,
    174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31,
    0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111,
    0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256,
    0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193,
    80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0, 8, 64, 0,
    9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8,
    56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8,
    136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7,
    43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9,
    169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28,
    0, 9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108,
    0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0,
    8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81,
    7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9,
    229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8,
    58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8,
    138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7,
    51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9,
    173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30,
    0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8, 110,
    0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256,
    0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 195,
    80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0,
    9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8,
    57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8,
    137, 0, 8, 73, 0, 9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7,
    43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
    171, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29,
    0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109,
    0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0,
    8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81,
    7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9,
    231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123, 0, 8,
    59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8,
    139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7,
    51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9,
    175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31,
    0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111,
    0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
  ],
  cs = [
    80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5,
    65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193, 82, 5, 9,
    90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91,
    5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5, 24577, 80, 5, 4, 88, 5,
    769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5,
    24577,
  ],
  ls = [
    3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67,
    83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
  ],
  fs = [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 112, 112,
  ],
  us = [
    1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513,
    769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
  ],
  ds = [
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13,
  ],
  ne = 15;
function nt() {
  const n = this;
  let t, e, r, s, i, a;
  function o(_, d, p, h, g, x, f, c, u, m, b) {
    let y, C, w, T, A, R, E, S, D, O, P, N, k, v, M;
    (O = 0), (A = p);
    do r[_[d + O]]++, O++, A--;
    while (A !== 0);
    if (r[0] == p) return (f[0] = -1), (c[0] = 0), L;
    for (S = c[0], R = 1; R <= ne && r[R] === 0; R++);
    for (E = R, S < R && (S = R), A = ne; A !== 0 && r[A] === 0; A--);
    for (w = A, S > A && (S = A), c[0] = S, v = 1 << R; R < A; R++, v <<= 1)
      if ((v -= r[R]) < 0) return W;
    if ((v -= r[A]) < 0) return W;
    for (r[A] += v, a[1] = R = 0, O = 1, k = 2; --A !== 0; )
      (a[k] = R += r[O]), k++, O++;
    (A = 0), (O = 0);
    do (R = _[d + O]) !== 0 && (b[a[R]++] = A), O++;
    while (++A < p);
    for (
      p = a[w], a[0] = A = 0, O = 0, T = -1, N = -S, i[0] = 0, P = 0, M = 0;
      E <= w;
      E++
    )
      for (y = r[E]; y-- !== 0; ) {
        for (; E > N + S; ) {
          if (
            (T++,
            (N += S),
            (M = w - N),
            (M = M > S ? S : M),
            (C = 1 << (R = E - N)) > y + 1 && ((C -= y + 1), (k = E), R < M))
          )
            for (; ++R < M && !((C <<= 1) <= r[++k]); ) C -= r[k];
          if (((M = 1 << R), m[0] + M > On)) return W;
          (i[T] = P = m[0]),
            (m[0] += M),
            T !== 0
              ? ((a[T] = A),
                (s[0] = R),
                (s[1] = S),
                (R = A >>> (N - S)),
                (s[2] = P - i[T - 1] - R),
                u.set(s, (i[T - 1] + R) * 3))
              : (f[0] = P);
        }
        for (
          s[1] = E - N,
            O >= p
              ? (s[0] = 192)
              : b[O] < h
                ? ((s[0] = b[O] < 256 ? 0 : 96), (s[2] = b[O++]))
                : ((s[0] = x[b[O] - h] + 16 + 64), (s[2] = g[b[O++] - h])),
            C = 1 << (E - N),
            R = A >>> N;
          R < M;
          R += C
        )
          u.set(s, (P + R) * 3);
        for (R = 1 << (E - 1); A & R; R >>>= 1) A ^= R;
        for (A ^= R, D = (1 << N) - 1; (A & D) != a[T]; )
          T--, (N -= S), (D = (1 << N) - 1);
      }
    return v !== 0 && w != 1 ? ee : L;
  }
  function l(_) {
    let d;
    for (
      t ||
        ((t = []),
        (e = []),
        (r = new Int32Array(ne + 1)),
        (s = []),
        (i = new Int32Array(ne)),
        (a = new Int32Array(ne + 1))),
        e.length < _ && (e = []),
        d = 0;
      d < _;
      d++
    )
      e[d] = 0;
    for (d = 0; d < ne + 1; d++) r[d] = 0;
    for (d = 0; d < 3; d++) s[d] = 0;
    i.set(r.subarray(0, ne), 0), a.set(r.subarray(0, ne + 1), 0);
  }
  (n.inflate_trees_bits = function (_, d, p, h, g) {
    let x;
    return (
      l(19),
      (t[0] = 0),
      (x = o(_, 0, 19, 19, null, null, p, d, h, t, e)),
      x == W
        ? (g.msg = "oversubscribed dynamic bit lengths tree")
        : (x == ee || d[0] === 0) &&
          ((g.msg = "incomplete dynamic bit lengths tree"), (x = W)),
      x
    );
  }),
    (n.inflate_trees_dynamic = function (_, d, p, h, g, x, f, c, u) {
      let m;
      return (
        l(288),
        (t[0] = 0),
        (m = o(p, 0, _, 257, ls, fs, x, h, c, t, e)),
        m != L || h[0] === 0
          ? (m == W
              ? (u.msg = "oversubscribed literal/length tree")
              : m != Pt &&
                ((u.msg = "incomplete literal/length tree"), (m = W)),
            m)
          : (l(288),
            (m = o(p, _, d, 0, us, ds, f, g, c, t, e)),
            m != L || (g[0] === 0 && _ > 257)
              ? (m == W
                  ? (u.msg = "oversubscribed distance tree")
                  : m == ee
                    ? ((u.msg = "incomplete distance tree"), (m = W))
                    : m != Pt &&
                      ((u.msg = "empty distance tree with lengths"), (m = W)),
                m)
              : L)
      );
    });
}
nt.inflate_trees_fixed = function (n, t, e, r) {
  return (n[0] = is), (t[0] = as), (e[0] = os), (r[0] = cs), L;
};
const De = 0,
  Lt = 1,
  Mt = 2,
  Ft = 3,
  Ut = 4,
  vt = 5,
  Ht = 6,
  Ye = 7,
  Wt = 8,
  Ie = 9;
function _s() {
  const n = this;
  let t,
    e = 0,
    r,
    s = 0,
    i = 0,
    a = 0,
    o = 0,
    l = 0,
    _ = 0,
    d = 0,
    p,
    h = 0,
    g,
    x = 0;
  function f(c, u, m, b, y, C, w, T) {
    let A, R, E, S, D, O, P, N, k, v, M, ye, I, fe, F, H;
    (P = T.next_in_index),
      (N = T.avail_in),
      (D = w.bitb),
      (O = w.bitk),
      (k = w.write),
      (v = k < w.read ? w.read - k - 1 : w.end - k),
      (M = Z[c]),
      (ye = Z[u]);
    do {
      for (; O < 20; ) N--, (D |= (T.read_byte(P++) & 255) << O), (O += 8);
      if (
        ((A = D & M), (R = m), (E = b), (H = (E + A) * 3), (S = R[H]) === 0)
      ) {
        (D >>= R[H + 1]), (O -= R[H + 1]), (w.win[k++] = R[H + 2]), v--;
        continue;
      }
      do {
        if (((D >>= R[H + 1]), (O -= R[H + 1]), S & 16)) {
          for (S &= 15, I = R[H + 2] + (D & Z[S]), D >>= S, O -= S; O < 15; )
            N--, (D |= (T.read_byte(P++) & 255) << O), (O += 8);
          (A = D & ye), (R = y), (E = C), (H = (E + A) * 3), (S = R[H]);
          do
            if (((D >>= R[H + 1]), (O -= R[H + 1]), S & 16)) {
              for (S &= 15; O < S; )
                N--, (D |= (T.read_byte(P++) & 255) << O), (O += 8);
              if (
                ((fe = R[H + 2] + (D & Z[S])),
                (D >>= S),
                (O -= S),
                (v -= I),
                k >= fe)
              )
                (F = k - fe),
                  k - F > 0 && 2 > k - F
                    ? ((w.win[k++] = w.win[F++]),
                      (w.win[k++] = w.win[F++]),
                      (I -= 2))
                    : (w.win.set(w.win.subarray(F, F + 2), k),
                      (k += 2),
                      (F += 2),
                      (I -= 2));
              else {
                F = k - fe;
                do F += w.end;
                while (F < 0);
                if (((S = w.end - F), I > S)) {
                  if (((I -= S), k - F > 0 && S > k - F))
                    do w.win[k++] = w.win[F++];
                    while (--S !== 0);
                  else
                    w.win.set(w.win.subarray(F, F + S), k),
                      (k += S),
                      (F += S),
                      (S = 0);
                  F = 0;
                }
              }
              if (k - F > 0 && I > k - F)
                do w.win[k++] = w.win[F++];
                while (--I !== 0);
              else
                w.win.set(w.win.subarray(F, F + I), k),
                  (k += I),
                  (F += I),
                  (I = 0);
              break;
            } else if (!(S & 64))
              (A += R[H + 2]), (A += D & Z[S]), (H = (E + A) * 3), (S = R[H]);
            else
              return (
                (T.msg = "invalid distance code"),
                (I = T.avail_in - N),
                (I = O >> 3 < I ? O >> 3 : I),
                (N += I),
                (P -= I),
                (O -= I << 3),
                (w.bitb = D),
                (w.bitk = O),
                (T.avail_in = N),
                (T.total_in += P - T.next_in_index),
                (T.next_in_index = P),
                (w.write = k),
                W
              );
          while (!0);
          break;
        }
        if (S & 64)
          return S & 32
            ? ((I = T.avail_in - N),
              (I = O >> 3 < I ? O >> 3 : I),
              (N += I),
              (P -= I),
              (O -= I << 3),
              (w.bitb = D),
              (w.bitk = O),
              (T.avail_in = N),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (w.write = k),
              z)
            : ((T.msg = "invalid literal/length code"),
              (I = T.avail_in - N),
              (I = O >> 3 < I ? O >> 3 : I),
              (N += I),
              (P -= I),
              (O -= I << 3),
              (w.bitb = D),
              (w.bitk = O),
              (T.avail_in = N),
              (T.total_in += P - T.next_in_index),
              (T.next_in_index = P),
              (w.write = k),
              W);
        if (
          ((A += R[H + 2]),
          (A += D & Z[S]),
          (H = (E + A) * 3),
          (S = R[H]) === 0)
        ) {
          (D >>= R[H + 1]), (O -= R[H + 1]), (w.win[k++] = R[H + 2]), v--;
          break;
        }
      } while (!0);
    } while (v >= 258 && N >= 10);
    return (
      (I = T.avail_in - N),
      (I = O >> 3 < I ? O >> 3 : I),
      (N += I),
      (P -= I),
      (O -= I << 3),
      (w.bitb = D),
      (w.bitk = O),
      (T.avail_in = N),
      (T.total_in += P - T.next_in_index),
      (T.next_in_index = P),
      (w.write = k),
      L
    );
  }
  (n.init = function (c, u, m, b, y, C) {
    (t = De), (_ = c), (d = u), (p = m), (h = b), (g = y), (x = C), (r = null);
  }),
    (n.proc = function (c, u, m) {
      let b,
        y,
        C,
        w = 0,
        T = 0,
        A = 0,
        R,
        E,
        S,
        D;
      for (
        A = u.next_in_index,
          R = u.avail_in,
          w = c.bitb,
          T = c.bitk,
          E = c.write,
          S = E < c.read ? c.read - E - 1 : c.end - E;
        ;

      )
        switch (t) {
          case De:
            if (
              S >= 258 &&
              R >= 10 &&
              ((c.bitb = w),
              (c.bitk = T),
              (u.avail_in = R),
              (u.total_in += A - u.next_in_index),
              (u.next_in_index = A),
              (c.write = E),
              (m = f(_, d, p, h, g, x, c, u)),
              (A = u.next_in_index),
              (R = u.avail_in),
              (w = c.bitb),
              (T = c.bitk),
              (E = c.write),
              (S = E < c.read ? c.read - E - 1 : c.end - E),
              m != L)
            ) {
              t = m == z ? Ye : Ie;
              break;
            }
            (i = _), (r = p), (s = h), (t = Lt);
          case Lt:
            for (b = i; T < b; ) {
              if (R !== 0) m = L;
              else
                return (
                  (c.bitb = w),
                  (c.bitk = T),
                  (u.avail_in = R),
                  (u.total_in += A - u.next_in_index),
                  (u.next_in_index = A),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              R--, (w |= (u.read_byte(A++) & 255) << T), (T += 8);
            }
            if (
              ((y = (s + (w & Z[b])) * 3),
              (w >>>= r[y + 1]),
              (T -= r[y + 1]),
              (C = r[y]),
              C === 0)
            ) {
              (a = r[y + 2]), (t = Ht);
              break;
            }
            if (C & 16) {
              (o = C & 15), (e = r[y + 2]), (t = Mt);
              break;
            }
            if (!(C & 64)) {
              (i = C), (s = y / 3 + r[y + 2]);
              break;
            }
            if (C & 32) {
              t = Ye;
              break;
            }
            return (
              (t = Ie),
              (u.msg = "invalid literal/length code"),
              (m = W),
              (c.bitb = w),
              (c.bitk = T),
              (u.avail_in = R),
              (u.total_in += A - u.next_in_index),
              (u.next_in_index = A),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          case Mt:
            for (b = o; T < b; ) {
              if (R !== 0) m = L;
              else
                return (
                  (c.bitb = w),
                  (c.bitk = T),
                  (u.avail_in = R),
                  (u.total_in += A - u.next_in_index),
                  (u.next_in_index = A),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              R--, (w |= (u.read_byte(A++) & 255) << T), (T += 8);
            }
            (e += w & Z[b]),
              (w >>= b),
              (T -= b),
              (i = d),
              (r = g),
              (s = x),
              (t = Ft);
          case Ft:
            for (b = i; T < b; ) {
              if (R !== 0) m = L;
              else
                return (
                  (c.bitb = w),
                  (c.bitk = T),
                  (u.avail_in = R),
                  (u.total_in += A - u.next_in_index),
                  (u.next_in_index = A),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              R--, (w |= (u.read_byte(A++) & 255) << T), (T += 8);
            }
            if (
              ((y = (s + (w & Z[b])) * 3),
              (w >>= r[y + 1]),
              (T -= r[y + 1]),
              (C = r[y]),
              C & 16)
            ) {
              (o = C & 15), (l = r[y + 2]), (t = Ut);
              break;
            }
            if (!(C & 64)) {
              (i = C), (s = y / 3 + r[y + 2]);
              break;
            }
            return (
              (t = Ie),
              (u.msg = "invalid distance code"),
              (m = W),
              (c.bitb = w),
              (c.bitk = T),
              (u.avail_in = R),
              (u.total_in += A - u.next_in_index),
              (u.next_in_index = A),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          case Ut:
            for (b = o; T < b; ) {
              if (R !== 0) m = L;
              else
                return (
                  (c.bitb = w),
                  (c.bitk = T),
                  (u.avail_in = R),
                  (u.total_in += A - u.next_in_index),
                  (u.next_in_index = A),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              R--, (w |= (u.read_byte(A++) & 255) << T), (T += 8);
            }
            (l += w & Z[b]), (w >>= b), (T -= b), (t = vt);
          case vt:
            for (D = E - l; D < 0; ) D += c.end;
            for (; e !== 0; ) {
              if (
                S === 0 &&
                (E == c.end &&
                  c.read !== 0 &&
                  ((E = 0), (S = E < c.read ? c.read - E - 1 : c.end - E)),
                S === 0 &&
                  ((c.write = E),
                  (m = c.inflate_flush(u, m)),
                  (E = c.write),
                  (S = E < c.read ? c.read - E - 1 : c.end - E),
                  E == c.end &&
                    c.read !== 0 &&
                    ((E = 0), (S = E < c.read ? c.read - E - 1 : c.end - E)),
                  S === 0))
              )
                return (
                  (c.bitb = w),
                  (c.bitk = T),
                  (u.avail_in = R),
                  (u.total_in += A - u.next_in_index),
                  (u.next_in_index = A),
                  (c.write = E),
                  c.inflate_flush(u, m)
                );
              (c.win[E++] = c.win[D++]), S--, D == c.end && (D = 0), e--;
            }
            t = De;
            break;
          case Ht:
            if (
              S === 0 &&
              (E == c.end &&
                c.read !== 0 &&
                ((E = 0), (S = E < c.read ? c.read - E - 1 : c.end - E)),
              S === 0 &&
                ((c.write = E),
                (m = c.inflate_flush(u, m)),
                (E = c.write),
                (S = E < c.read ? c.read - E - 1 : c.end - E),
                E == c.end &&
                  c.read !== 0 &&
                  ((E = 0), (S = E < c.read ? c.read - E - 1 : c.end - E)),
                S === 0))
            )
              return (
                (c.bitb = w),
                (c.bitk = T),
                (u.avail_in = R),
                (u.total_in += A - u.next_in_index),
                (u.next_in_index = A),
                (c.write = E),
                c.inflate_flush(u, m)
              );
            (m = L), (c.win[E++] = a), S--, (t = De);
            break;
          case Ye:
            if (
              (T > 7 && ((T -= 8), R++, A--),
              (c.write = E),
              (m = c.inflate_flush(u, m)),
              (E = c.write),
              (S = E < c.read ? c.read - E - 1 : c.end - E),
              c.read != c.write)
            )
              return (
                (c.bitb = w),
                (c.bitk = T),
                (u.avail_in = R),
                (u.total_in += A - u.next_in_index),
                (u.next_in_index = A),
                (c.write = E),
                c.inflate_flush(u, m)
              );
            t = Wt;
          case Wt:
            return (
              (m = z),
              (c.bitb = w),
              (c.bitk = T),
              (u.avail_in = R),
              (u.total_in += A - u.next_in_index),
              (u.next_in_index = A),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          case Ie:
            return (
              (m = W),
              (c.bitb = w),
              (c.bitk = T),
              (u.avail_in = R),
              (u.total_in += A - u.next_in_index),
              (u.next_in_index = A),
              (c.write = E),
              c.inflate_flush(u, m)
            );
          default:
            return (
              (m = V),
              (c.bitb = w),
              (c.bitk = T),
              (u.avail_in = R),
              (u.total_in += A - u.next_in_index),
              (u.next_in_index = A),
              (c.write = E),
              c.inflate_flush(u, m)
            );
        }
    }),
    (n.free = function () {});
}
const Bt = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  pe = 0,
  Ve = 1,
  jt = 2,
  qt = 3,
  Gt = 4,
  Yt = 5,
  Ne = 6,
  Pe = 7,
  Vt = 8,
  ue = 9;
function hs(n, t) {
  const e = this;
  let r = pe,
    s = 0,
    i = 0,
    a = 0,
    o;
  const l = [0],
    _ = [0],
    d = new _s();
  let p = 0,
    h = new Int32Array(On * 3);
  const g = 0,
    x = new nt();
  (e.bitk = 0),
    (e.bitb = 0),
    (e.win = new Uint8Array(t)),
    (e.end = t),
    (e.read = 0),
    (e.write = 0),
    (e.reset = function (f, c) {
      c && (c[0] = g),
        r == Ne && d.free(f),
        (r = pe),
        (e.bitk = 0),
        (e.bitb = 0),
        (e.read = e.write = 0);
    }),
    e.reset(n, null),
    (e.inflate_flush = function (f, c) {
      let u, m, b;
      return (
        (m = f.next_out_index),
        (b = e.read),
        (u = (b <= e.write ? e.write : e.end) - b),
        u > f.avail_out && (u = f.avail_out),
        u !== 0 && c == ee && (c = L),
        (f.avail_out -= u),
        (f.total_out += u),
        f.next_out.set(e.win.subarray(b, b + u), m),
        (m += u),
        (b += u),
        b == e.end &&
          ((b = 0),
          e.write == e.end && (e.write = 0),
          (u = e.write - b),
          u > f.avail_out && (u = f.avail_out),
          u !== 0 && c == ee && (c = L),
          (f.avail_out -= u),
          (f.total_out += u),
          f.next_out.set(e.win.subarray(b, b + u), m),
          (m += u),
          (b += u)),
        (f.next_out_index = m),
        (e.read = b),
        c
      );
    }),
    (e.proc = function (f, c) {
      let u, m, b, y, C, w, T, A;
      for (
        y = f.next_in_index,
          C = f.avail_in,
          m = e.bitb,
          b = e.bitk,
          w = e.write,
          T = w < e.read ? e.read - w - 1 : e.end - w;
        ;

      ) {
        let R, E, S, D, O, P, N, k;
        switch (r) {
          case pe:
            for (; b < 3; ) {
              if (C !== 0) c = L;
              else
                return (
                  (e.bitb = m),
                  (e.bitk = b),
                  (f.avail_in = C),
                  (f.total_in += y - f.next_in_index),
                  (f.next_in_index = y),
                  (e.write = w),
                  e.inflate_flush(f, c)
                );
              C--, (m |= (f.read_byte(y++) & 255) << b), (b += 8);
            }
            switch (((u = m & 7), (p = u & 1), u >>> 1)) {
              case 0:
                (m >>>= 3),
                  (b -= 3),
                  (u = b & 7),
                  (m >>>= u),
                  (b -= u),
                  (r = Ve);
                break;
              case 1:
                (R = []),
                  (E = []),
                  (S = [[]]),
                  (D = [[]]),
                  nt.inflate_trees_fixed(R, E, S, D),
                  d.init(R[0], E[0], S[0], 0, D[0], 0),
                  (m >>>= 3),
                  (b -= 3),
                  (r = Ne);
                break;
              case 2:
                (m >>>= 3), (b -= 3), (r = qt);
                break;
              case 3:
                return (
                  (m >>>= 3),
                  (b -= 3),
                  (r = ue),
                  (f.msg = "invalid block type"),
                  (c = W),
                  (e.bitb = m),
                  (e.bitk = b),
                  (f.avail_in = C),
                  (f.total_in += y - f.next_in_index),
                  (f.next_in_index = y),
                  (e.write = w),
                  e.inflate_flush(f, c)
                );
            }
            break;
          case Ve:
            for (; b < 32; ) {
              if (C !== 0) c = L;
              else
                return (
                  (e.bitb = m),
                  (e.bitk = b),
                  (f.avail_in = C),
                  (f.total_in += y - f.next_in_index),
                  (f.next_in_index = y),
                  (e.write = w),
                  e.inflate_flush(f, c)
                );
              C--, (m |= (f.read_byte(y++) & 255) << b), (b += 8);
            }
            if (((~m >>> 16) & 65535) != (m & 65535))
              return (
                (r = ue),
                (f.msg = "invalid stored block lengths"),
                (c = W),
                (e.bitb = m),
                (e.bitk = b),
                (f.avail_in = C),
                (f.total_in += y - f.next_in_index),
                (f.next_in_index = y),
                (e.write = w),
                e.inflate_flush(f, c)
              );
            (s = m & 65535),
              (m = b = 0),
              (r = s !== 0 ? jt : p !== 0 ? Pe : pe);
            break;
          case jt:
            if (
              C === 0 ||
              (T === 0 &&
                (w == e.end &&
                  e.read !== 0 &&
                  ((w = 0), (T = w < e.read ? e.read - w - 1 : e.end - w)),
                T === 0 &&
                  ((e.write = w),
                  (c = e.inflate_flush(f, c)),
                  (w = e.write),
                  (T = w < e.read ? e.read - w - 1 : e.end - w),
                  w == e.end &&
                    e.read !== 0 &&
                    ((w = 0), (T = w < e.read ? e.read - w - 1 : e.end - w)),
                  T === 0)))
            )
              return (
                (e.bitb = m),
                (e.bitk = b),
                (f.avail_in = C),
                (f.total_in += y - f.next_in_index),
                (f.next_in_index = y),
                (e.write = w),
                e.inflate_flush(f, c)
              );
            if (
              ((c = L),
              (u = s),
              u > C && (u = C),
              u > T && (u = T),
              e.win.set(f.read_buf(y, u), w),
              (y += u),
              (C -= u),
              (w += u),
              (T -= u),
              (s -= u) !== 0)
            )
              break;
            r = p !== 0 ? Pe : pe;
            break;
          case qt:
            for (; b < 14; ) {
              if (C !== 0) c = L;
              else
                return (
                  (e.bitb = m),
                  (e.bitk = b),
                  (f.avail_in = C),
                  (f.total_in += y - f.next_in_index),
                  (f.next_in_index = y),
                  (e.write = w),
                  e.inflate_flush(f, c)
                );
              C--, (m |= (f.read_byte(y++) & 255) << b), (b += 8);
            }
            if (((i = u = m & 16383), (u & 31) > 29 || ((u >> 5) & 31) > 29))
              return (
                (r = ue),
                (f.msg = "too many length or distance symbols"),
                (c = W),
                (e.bitb = m),
                (e.bitk = b),
                (f.avail_in = C),
                (f.total_in += y - f.next_in_index),
                (f.next_in_index = y),
                (e.write = w),
                e.inflate_flush(f, c)
              );
            if (((u = 258 + (u & 31) + ((u >> 5) & 31)), !o || o.length < u))
              o = [];
            else for (A = 0; A < u; A++) o[A] = 0;
            (m >>>= 14), (b -= 14), (a = 0), (r = Gt);
          case Gt:
            for (; a < 4 + (i >>> 10); ) {
              for (; b < 3; ) {
                if (C !== 0) c = L;
                else
                  return (
                    (e.bitb = m),
                    (e.bitk = b),
                    (f.avail_in = C),
                    (f.total_in += y - f.next_in_index),
                    (f.next_in_index = y),
                    (e.write = w),
                    e.inflate_flush(f, c)
                  );
                C--, (m |= (f.read_byte(y++) & 255) << b), (b += 8);
              }
              (o[Bt[a++]] = m & 7), (m >>>= 3), (b -= 3);
            }
            for (; a < 19; ) o[Bt[a++]] = 0;
            if (((l[0] = 7), (u = x.inflate_trees_bits(o, l, _, h, f)), u != L))
              return (
                (c = u),
                c == W && ((o = null), (r = ue)),
                (e.bitb = m),
                (e.bitk = b),
                (f.avail_in = C),
                (f.total_in += y - f.next_in_index),
                (f.next_in_index = y),
                (e.write = w),
                e.inflate_flush(f, c)
              );
            (a = 0), (r = Yt);
          case Yt:
            for (; (u = i), !(a >= 258 + (u & 31) + ((u >> 5) & 31)); ) {
              let v, M;
              for (u = l[0]; b < u; ) {
                if (C !== 0) c = L;
                else
                  return (
                    (e.bitb = m),
                    (e.bitk = b),
                    (f.avail_in = C),
                    (f.total_in += y - f.next_in_index),
                    (f.next_in_index = y),
                    (e.write = w),
                    e.inflate_flush(f, c)
                  );
                C--, (m |= (f.read_byte(y++) & 255) << b), (b += 8);
              }
              if (
                ((u = h[(_[0] + (m & Z[u])) * 3 + 1]),
                (M = h[(_[0] + (m & Z[u])) * 3 + 2]),
                M < 16)
              )
                (m >>>= u), (b -= u), (o[a++] = M);
              else {
                for (
                  A = M == 18 ? 7 : M - 14, v = M == 18 ? 11 : 3;
                  b < u + A;

                ) {
                  if (C !== 0) c = L;
                  else
                    return (
                      (e.bitb = m),
                      (e.bitk = b),
                      (f.avail_in = C),
                      (f.total_in += y - f.next_in_index),
                      (f.next_in_index = y),
                      (e.write = w),
                      e.inflate_flush(f, c)
                    );
                  C--, (m |= (f.read_byte(y++) & 255) << b), (b += 8);
                }
                if (
                  ((m >>>= u),
                  (b -= u),
                  (v += m & Z[A]),
                  (m >>>= A),
                  (b -= A),
                  (A = a),
                  (u = i),
                  A + v > 258 + (u & 31) + ((u >> 5) & 31) ||
                    (M == 16 && A < 1))
                )
                  return (
                    (o = null),
                    (r = ue),
                    (f.msg = "invalid bit length repeat"),
                    (c = W),
                    (e.bitb = m),
                    (e.bitk = b),
                    (f.avail_in = C),
                    (f.total_in += y - f.next_in_index),
                    (f.next_in_index = y),
                    (e.write = w),
                    e.inflate_flush(f, c)
                  );
                M = M == 16 ? o[A - 1] : 0;
                do o[A++] = M;
                while (--v !== 0);
                a = A;
              }
            }
            if (
              ((_[0] = -1),
              (O = []),
              (P = []),
              (N = []),
              (k = []),
              (O[0] = 9),
              (P[0] = 6),
              (u = i),
              (u = x.inflate_trees_dynamic(
                257 + (u & 31),
                1 + ((u >> 5) & 31),
                o,
                O,
                P,
                N,
                k,
                h,
                f,
              )),
              u != L)
            )
              return (
                u == W && ((o = null), (r = ue)),
                (c = u),
                (e.bitb = m),
                (e.bitk = b),
                (f.avail_in = C),
                (f.total_in += y - f.next_in_index),
                (f.next_in_index = y),
                (e.write = w),
                e.inflate_flush(f, c)
              );
            d.init(O[0], P[0], h, N[0], h, k[0]), (r = Ne);
          case Ne:
            if (
              ((e.bitb = m),
              (e.bitk = b),
              (f.avail_in = C),
              (f.total_in += y - f.next_in_index),
              (f.next_in_index = y),
              (e.write = w),
              (c = d.proc(e, f, c)) != z)
            )
              return e.inflate_flush(f, c);
            if (
              ((c = L),
              d.free(f),
              (y = f.next_in_index),
              (C = f.avail_in),
              (m = e.bitb),
              (b = e.bitk),
              (w = e.write),
              (T = w < e.read ? e.read - w - 1 : e.end - w),
              p === 0)
            ) {
              r = pe;
              break;
            }
            r = Pe;
          case Pe:
            if (
              ((e.write = w),
              (c = e.inflate_flush(f, c)),
              (w = e.write),
              (T = w < e.read ? e.read - w - 1 : e.end - w),
              e.read != e.write)
            )
              return (
                (e.bitb = m),
                (e.bitk = b),
                (f.avail_in = C),
                (f.total_in += y - f.next_in_index),
                (f.next_in_index = y),
                (e.write = w),
                e.inflate_flush(f, c)
              );
            r = Vt;
          case Vt:
            return (
              (c = z),
              (e.bitb = m),
              (e.bitk = b),
              (f.avail_in = C),
              (f.total_in += y - f.next_in_index),
              (f.next_in_index = y),
              (e.write = w),
              e.inflate_flush(f, c)
            );
          case ue:
            return (
              (c = W),
              (e.bitb = m),
              (e.bitk = b),
              (f.avail_in = C),
              (f.total_in += y - f.next_in_index),
              (f.next_in_index = y),
              (e.write = w),
              e.inflate_flush(f, c)
            );
          default:
            return (
              (c = V),
              (e.bitb = m),
              (e.bitk = b),
              (f.avail_in = C),
              (f.total_in += y - f.next_in_index),
              (f.next_in_index = y),
              (e.write = w),
              e.inflate_flush(f, c)
            );
        }
      }
    }),
    (e.free = function (f) {
      e.reset(f, null), (e.win = null), (h = null);
    }),
    (e.set_dictionary = function (f, c, u) {
      e.win.set(f.subarray(c, c + u), 0), (e.read = e.write = u);
    }),
    (e.sync_point = function () {
      return r == Ve ? 1 : 0;
    });
}
const ps = 32,
  ms = 8,
  ws = 0,
  Zt = 1,
  Kt = 2,
  Xt = 3,
  $t = 4,
  Jt = 5,
  Ze = 6,
  xe = 7,
  Qt = 12,
  re = 13,
  bs = [0, 0, 255, 255];
function gs() {
  const n = this;
  (n.mode = 0),
    (n.method = 0),
    (n.was = [0]),
    (n.need = 0),
    (n.marker = 0),
    (n.wbits = 0);
  function t(e) {
    return !e || !e.istate
      ? V
      : ((e.total_in = e.total_out = 0),
        (e.msg = null),
        (e.istate.mode = xe),
        e.istate.blocks.reset(e, null),
        L);
  }
  (n.inflateEnd = function (e) {
    return n.blocks && n.blocks.free(e), (n.blocks = null), L;
  }),
    (n.inflateInit = function (e, r) {
      return (
        (e.msg = null),
        (n.blocks = null),
        r < 8 || r > 15
          ? (n.inflateEnd(e), V)
          : ((n.wbits = r), (e.istate.blocks = new hs(e, 1 << r)), t(e), L)
      );
    }),
    (n.inflate = function (e, r) {
      let s, i;
      if (!e || !e.istate || !e.next_in) return V;
      const a = e.istate;
      for (r = r == ss ? ee : L, s = ee; ; )
        switch (a.mode) {
          case ws:
            if (e.avail_in === 0) return s;
            if (
              ((s = r),
              e.avail_in--,
              e.total_in++,
              ((a.method = e.read_byte(e.next_in_index++)) & 15) != ms)
            ) {
              (a.mode = re),
                (e.msg = "unknown compression method"),
                (a.marker = 5);
              break;
            }
            if ((a.method >> 4) + 8 > a.wbits) {
              (a.mode = re), (e.msg = "invalid win size"), (a.marker = 5);
              break;
            }
            a.mode = Zt;
          case Zt:
            if (e.avail_in === 0) return s;
            if (
              ((s = r),
              e.avail_in--,
              e.total_in++,
              (i = e.read_byte(e.next_in_index++) & 255),
              ((a.method << 8) + i) % 31 !== 0)
            ) {
              (a.mode = re), (e.msg = "incorrect header check"), (a.marker = 5);
              break;
            }
            if (!(i & ps)) {
              a.mode = xe;
              break;
            }
            a.mode = Kt;
          case Kt:
            if (e.avail_in === 0) return s;
            (s = r),
              e.avail_in--,
              e.total_in++,
              (a.need =
                ((e.read_byte(e.next_in_index++) & 255) << 24) & 4278190080),
              (a.mode = Xt);
          case Xt:
            if (e.avail_in === 0) return s;
            (s = r),
              e.avail_in--,
              e.total_in++,
              (a.need +=
                ((e.read_byte(e.next_in_index++) & 255) << 16) & 16711680),
              (a.mode = $t);
          case $t:
            if (e.avail_in === 0) return s;
            (s = r),
              e.avail_in--,
              e.total_in++,
              (a.need += ((e.read_byte(e.next_in_index++) & 255) << 8) & 65280),
              (a.mode = Jt);
          case Jt:
            return e.avail_in === 0
              ? s
              : ((s = r),
                e.avail_in--,
                e.total_in++,
                (a.need += e.read_byte(e.next_in_index++) & 255),
                (a.mode = Ze),
                ns);
          case Ze:
            return (
              (a.mode = re), (e.msg = "need dictionary"), (a.marker = 0), V
            );
          case xe:
            if (((s = a.blocks.proc(e, s)), s == W)) {
              (a.mode = re), (a.marker = 0);
              break;
            }
            if ((s == L && (s = r), s != z)) return s;
            (s = r), a.blocks.reset(e, a.was), (a.mode = Qt);
          case Qt:
            return (e.avail_in = 0), z;
          case re:
            return W;
          default:
            return V;
        }
    }),
    (n.inflateSetDictionary = function (e, r, s) {
      let i = 0,
        a = s;
      if (!e || !e.istate || e.istate.mode != Ze) return V;
      const o = e.istate;
      return (
        a >= 1 << o.wbits && ((a = (1 << o.wbits) - 1), (i = s - a)),
        o.blocks.set_dictionary(r, i, a),
        (o.mode = xe),
        L
      );
    }),
    (n.inflateSync = function (e) {
      let r, s, i, a, o;
      if (!e || !e.istate) return V;
      const l = e.istate;
      if (
        (l.mode != re && ((l.mode = re), (l.marker = 0)),
        (r = e.avail_in) === 0)
      )
        return ee;
      for (s = e.next_in_index, i = l.marker; r !== 0 && i < 4; )
        e.read_byte(s) == bs[i]
          ? i++
          : e.read_byte(s) !== 0
            ? (i = 0)
            : (i = 4 - i),
          s++,
          r--;
      return (
        (e.total_in += s - e.next_in_index),
        (e.next_in_index = s),
        (e.avail_in = r),
        (l.marker = i),
        i != 4
          ? W
          : ((a = e.total_in),
            (o = e.total_out),
            t(e),
            (e.total_in = a),
            (e.total_out = o),
            (l.mode = xe),
            L)
      );
    }),
    (n.inflateSyncPoint = function (e) {
      return !e || !e.istate || !e.istate.blocks
        ? V
        : e.istate.blocks.sync_point();
    });
}
function kn() {}
kn.prototype = {
  inflateInit(n) {
    const t = this;
    return (t.istate = new gs()), n || (n = ts), t.istate.inflateInit(t, n);
  },
  inflate(n) {
    const t = this;
    return t.istate ? t.istate.inflate(t, n) : V;
  },
  inflateEnd() {
    const n = this;
    if (!n.istate) return V;
    const t = n.istate.inflateEnd(n);
    return (n.istate = null), t;
  },
  inflateSync() {
    const n = this;
    return n.istate ? n.istate.inflateSync(n) : V;
  },
  inflateSetDictionary(n, t) {
    const e = this;
    return e.istate ? e.istate.inflateSetDictionary(e, n, t) : V;
  },
  read_byte(n) {
    return this.next_in[n];
  },
  read_buf(n, t) {
    return this.next_in.subarray(n, n + t);
  },
};
function ys(n) {
  const t = this,
    e = new kn(),
    r = n && n.chunkSize ? Math.floor(n.chunkSize * 2) : 128 * 1024,
    s = rs,
    i = new Uint8Array(r);
  let a = !1;
  e.inflateInit(),
    (e.next_out = i),
    (t.append = function (o, l) {
      const _ = [];
      let d,
        p,
        h = 0,
        g = 0,
        x = 0;
      if (o.length !== 0) {
        (e.next_in_index = 0), (e.next_in = o), (e.avail_in = o.length);
        do {
          if (
            ((e.next_out_index = 0),
            (e.avail_out = r),
            e.avail_in === 0 && !a && ((e.next_in_index = 0), (a = !0)),
            (d = e.inflate(s)),
            a && d === ee)
          ) {
            if (e.avail_in !== 0) throw new Error("inflating: bad input");
          } else if (d !== L && d !== z) throw new Error("inflating: " + e.msg);
          if ((a || d === z) && e.avail_in === o.length)
            throw new Error("inflating: bad input");
          e.next_out_index &&
            (e.next_out_index === r
              ? _.push(new Uint8Array(i))
              : _.push(i.subarray(0, e.next_out_index))),
            (x += e.next_out_index),
            l &&
              e.next_in_index > 0 &&
              e.next_in_index != h &&
              (l(e.next_in_index), (h = e.next_in_index));
        } while (e.avail_in > 0 || e.avail_out === 0);
        return (
          _.length > 1
            ? ((p = new Uint8Array(x)),
              _.forEach(function (f) {
                p.set(f, g), (g += f.length);
              }))
            : (p = _[0] ? new Uint8Array(_[0]) : new Uint8Array()),
          p
        );
      }
    }),
    (t.flush = function () {
      e.inflateEnd();
    });
}
const _e = 4294967295,
  oe = 65535,
  xs = 8,
  Es = 0,
  Ts = 99,
  Ss = 67324752,
  As = 134695760,
  zt = 33639248,
  Rs = 101010256,
  en = 101075792,
  Cs = 117853008,
  me = 22,
  Ke = 20,
  Xe = 56,
  Os = 1,
  ks = 39169,
  Ds = 10,
  Is = 1,
  Ns = 21589,
  Ps = 28789,
  Ls = 25461,
  Ms = 6534,
  tn = 1,
  Fs = 6,
  nn = 8,
  rn = 2048,
  sn = 16,
  Us = "/",
  $ = void 0,
  Fe = "undefined",
  Dn = "function";
class an {
  constructor(t) {
    return class extends TransformStream {
      constructor(e, r) {
        const s = new t(r);
        super({
          transform(i, a) {
            a.enqueue(s.append(i));
          },
          flush(i) {
            const a = s.flush();
            a && i.enqueue(a);
          },
        });
      }
    };
  }
}
const vs = 64;
let In = 2;
try {
  typeof navigator != Fe &&
    navigator.hardwareConcurrency &&
    (In = navigator.hardwareConcurrency);
} catch {}
const Hs = {
    chunkSize: 512 * 1024,
    maxWorkers: In,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: !0,
    useCompressionStream: !0,
    workerScripts: $,
    CompressionStreamNative:
      typeof CompressionStream != Fe && CompressionStream,
    DecompressionStreamNative:
      typeof DecompressionStream != Fe && DecompressionStream,
  },
  ce = Object.assign({}, Hs);
function Nn() {
  return ce;
}
function Ws(n) {
  return Math.max(n.chunkSize, vs);
}
function Pn(n) {
  const {
    baseURL: t,
    chunkSize: e,
    maxWorkers: r,
    terminateWorkerTimeout: s,
    useCompressionStream: i,
    useWebWorkers: a,
    Deflate: o,
    Inflate: l,
    CompressionStream: _,
    DecompressionStream: d,
    workerScripts: p,
  } = n;
  if (
    (se("baseURL", t),
    se("chunkSize", e),
    se("maxWorkers", r),
    se("terminateWorkerTimeout", s),
    se("useCompressionStream", i),
    se("useWebWorkers", a),
    o && (ce.CompressionStream = new an(o)),
    l && (ce.DecompressionStream = new an(l)),
    se("CompressionStream", _),
    se("DecompressionStream", d),
    p !== $)
  ) {
    const { deflate: h, inflate: g } = p;
    if (((h || g) && (ce.workerScripts || (ce.workerScripts = {})), h)) {
      if (!Array.isArray(h))
        throw new Error("workerScripts.deflate must be an array");
      ce.workerScripts.deflate = h;
    }
    if (g) {
      if (!Array.isArray(g))
        throw new Error("workerScripts.inflate must be an array");
      ce.workerScripts.inflate = g;
    }
  }
}
function se(n, t) {
  t !== $ && (ce[n] = t);
}
function Bs() {
  return "application/octet-stream";
}
const Ln = [];
for (let n = 0; n < 256; n++) {
  let t = n;
  for (let e = 0; e < 8; e++)
    t & 1 ? (t = (t >>> 1) ^ 3988292384) : (t = t >>> 1);
  Ln[n] = t;
}
class Ue {
  constructor(t) {
    this.crc = t || -1;
  }
  append(t) {
    let e = this.crc | 0;
    for (let r = 0, s = t.length | 0; r < s; r++)
      e = (e >>> 8) ^ Ln[(e ^ t[r]) & 255];
    this.crc = e;
  }
  get() {
    return ~this.crc;
  }
}
class Mn extends TransformStream {
  constructor() {
    let t;
    const e = new Ue();
    super({
      transform(r, s) {
        e.append(r), s.enqueue(r);
      },
      flush() {
        const r = new Uint8Array(4);
        new DataView(r.buffer).setUint32(0, e.get()), (t.value = r);
      },
    }),
      (t = this);
  }
}
function js(n) {
  if (typeof TextEncoder > "u") {
    n = unescape(encodeURIComponent(n));
    const t = new Uint8Array(n.length);
    for (let e = 0; e < t.length; e++) t[e] = n.charCodeAt(e);
    return t;
  } else return new TextEncoder().encode(n);
}
const Y = {
    concat(n, t) {
      if (n.length === 0 || t.length === 0) return n.concat(t);
      const e = n[n.length - 1],
        r = Y.getPartial(e);
      return r === 32
        ? n.concat(t)
        : Y._shiftRight(t, r, e | 0, n.slice(0, n.length - 1));
    },
    bitLength(n) {
      const t = n.length;
      if (t === 0) return 0;
      const e = n[t - 1];
      return (t - 1) * 32 + Y.getPartial(e);
    },
    clamp(n, t) {
      if (n.length * 32 < t) return n;
      n = n.slice(0, Math.ceil(t / 32));
      const e = n.length;
      return (
        (t = t & 31),
        e > 0 &&
          t &&
          (n[e - 1] = Y.partial(t, n[e - 1] & (2147483648 >> (t - 1)), 1)),
        n
      );
    },
    partial(n, t, e) {
      return n === 32 ? t : (e ? t | 0 : t << (32 - n)) + n * 1099511627776;
    },
    getPartial(n) {
      return Math.round(n / 1099511627776) || 32;
    },
    _shiftRight(n, t, e, r) {
      for (r === void 0 && (r = []); t >= 32; t -= 32) r.push(e), (e = 0);
      if (t === 0) return r.concat(n);
      for (let a = 0; a < n.length; a++)
        r.push(e | (n[a] >>> t)), (e = n[a] << (32 - t));
      const s = n.length ? n[n.length - 1] : 0,
        i = Y.getPartial(s);
      return r.push(Y.partial((t + i) & 31, t + i > 32 ? e : r.pop(), 1)), r;
    },
  },
  ve = {
    bytes: {
      fromBits(n) {
        const e = Y.bitLength(n) / 8,
          r = new Uint8Array(e);
        let s;
        for (let i = 0; i < e; i++)
          i & 3 || (s = n[i / 4]), (r[i] = s >>> 24), (s <<= 8);
        return r;
      },
      toBits(n) {
        const t = [];
        let e,
          r = 0;
        for (e = 0; e < n.length; e++)
          (r = (r << 8) | n[e]), (e & 3) === 3 && (t.push(r), (r = 0));
        return e & 3 && t.push(Y.partial(8 * (e & 3), r)), t;
      },
    },
  },
  Fn = {};
Fn.sha1 = class {
  constructor(n) {
    const t = this;
    (t.blockSize = 512),
      (t._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
      (t._key = [1518500249, 1859775393, 2400959708, 3395469782]),
      n
        ? ((t._h = n._h.slice(0)),
          (t._buffer = n._buffer.slice(0)),
          (t._length = n._length))
        : t.reset();
  }
  reset() {
    const n = this;
    return (n._h = n._init.slice(0)), (n._buffer = []), (n._length = 0), n;
  }
  update(n) {
    const t = this;
    typeof n == "string" && (n = ve.utf8String.toBits(n));
    const e = (t._buffer = Y.concat(t._buffer, n)),
      r = t._length,
      s = (t._length = r + Y.bitLength(n));
    if (s > 9007199254740991)
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    const i = new Uint32Array(e);
    let a = 0;
    for (
      let o = t.blockSize + r - ((t.blockSize + r) & (t.blockSize - 1));
      o <= s;
      o += t.blockSize
    )
      t._block(i.subarray(16 * a, 16 * (a + 1))), (a += 1);
    return e.splice(0, 16 * a), t;
  }
  finalize() {
    const n = this;
    let t = n._buffer;
    const e = n._h;
    t = Y.concat(t, [Y.partial(1, 1)]);
    for (let r = t.length + 2; r & 15; r++) t.push(0);
    for (
      t.push(Math.floor(n._length / 4294967296)), t.push(n._length | 0);
      t.length;

    )
      n._block(t.splice(0, 16));
    return n.reset(), e;
  }
  _f(n, t, e, r) {
    if (n <= 19) return (t & e) | (~t & r);
    if (n <= 39) return t ^ e ^ r;
    if (n <= 59) return (t & e) | (t & r) | (e & r);
    if (n <= 79) return t ^ e ^ r;
  }
  _S(n, t) {
    return (t << n) | (t >>> (32 - n));
  }
  _block(n) {
    const t = this,
      e = t._h,
      r = Array(80);
    for (let _ = 0; _ < 16; _++) r[_] = n[_];
    let s = e[0],
      i = e[1],
      a = e[2],
      o = e[3],
      l = e[4];
    for (let _ = 0; _ <= 79; _++) {
      _ >= 16 && (r[_] = t._S(1, r[_ - 3] ^ r[_ - 8] ^ r[_ - 14] ^ r[_ - 16]));
      const d =
        (t._S(5, s) +
          t._f(_, i, a, o) +
          l +
          r[_] +
          t._key[Math.floor(_ / 20)]) |
        0;
      (l = o), (o = a), (a = t._S(30, i)), (i = s), (s = d);
    }
    (e[0] = (e[0] + s) | 0),
      (e[1] = (e[1] + i) | 0),
      (e[2] = (e[2] + a) | 0),
      (e[3] = (e[3] + o) | 0),
      (e[4] = (e[4] + l) | 0);
  }
};
const Un = {};
Un.aes = class {
  constructor(n) {
    const t = this;
    (t._tables = [
      [[], [], [], [], []],
      [[], [], [], [], []],
    ]),
      t._tables[0][0][0] || t._precompute();
    const e = t._tables[0][4],
      r = t._tables[1],
      s = n.length;
    let i,
      a,
      o,
      l = 1;
    if (s !== 4 && s !== 6 && s !== 8) throw new Error("invalid aes key size");
    for (t._key = [(a = n.slice(0)), (o = [])], i = s; i < 4 * s + 28; i++) {
      let _ = a[i - 1];
      (i % s === 0 || (s === 8 && i % s === 4)) &&
        ((_ =
          (e[_ >>> 24] << 24) ^
          (e[(_ >> 16) & 255] << 16) ^
          (e[(_ >> 8) & 255] << 8) ^
          e[_ & 255]),
        i % s === 0 &&
          ((_ = (_ << 8) ^ (_ >>> 24) ^ (l << 24)),
          (l = (l << 1) ^ ((l >> 7) * 283)))),
        (a[i] = a[i - s] ^ _);
    }
    for (let _ = 0; i; _++, i--) {
      const d = a[_ & 3 ? i : i - 4];
      i <= 4 || _ < 4
        ? (o[_] = d)
        : (o[_] =
            r[0][e[d >>> 24]] ^
            r[1][e[(d >> 16) & 255]] ^
            r[2][e[(d >> 8) & 255]] ^
            r[3][e[d & 255]]);
    }
  }
  encrypt(n) {
    return this._crypt(n, 0);
  }
  decrypt(n) {
    return this._crypt(n, 1);
  }
  _precompute() {
    const n = this._tables[0],
      t = this._tables[1],
      e = n[4],
      r = t[4],
      s = [],
      i = [];
    let a, o, l, _;
    for (let d = 0; d < 256; d++)
      i[(s[d] = (d << 1) ^ ((d >> 7) * 283)) ^ d] = d;
    for (let d = (a = 0); !e[d]; d ^= o || 1, a = i[a] || 1) {
      let p = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4);
      (p = (p >> 8) ^ (p & 255) ^ 99),
        (e[d] = p),
        (r[p] = d),
        (_ = s[(l = s[(o = s[d])])]);
      let h = (_ * 16843009) ^ (l * 65537) ^ (o * 257) ^ (d * 16843008),
        g = (s[p] * 257) ^ (p * 16843008);
      for (let x = 0; x < 4; x++)
        (n[x][d] = g = (g << 24) ^ (g >>> 8)),
          (t[x][p] = h = (h << 24) ^ (h >>> 8));
    }
    for (let d = 0; d < 5; d++) (n[d] = n[d].slice(0)), (t[d] = t[d].slice(0));
  }
  _crypt(n, t) {
    if (n.length !== 4) throw new Error("invalid aes block size");
    const e = this._key[t],
      r = e.length / 4 - 2,
      s = [0, 0, 0, 0],
      i = this._tables[t],
      a = i[0],
      o = i[1],
      l = i[2],
      _ = i[3],
      d = i[4];
    let p = n[0] ^ e[0],
      h = n[t ? 3 : 1] ^ e[1],
      g = n[2] ^ e[2],
      x = n[t ? 1 : 3] ^ e[3],
      f = 4,
      c,
      u,
      m;
    for (let b = 0; b < r; b++)
      (c =
        a[p >>> 24] ^
        o[(h >> 16) & 255] ^
        l[(g >> 8) & 255] ^
        _[x & 255] ^
        e[f]),
        (u =
          a[h >>> 24] ^
          o[(g >> 16) & 255] ^
          l[(x >> 8) & 255] ^
          _[p & 255] ^
          e[f + 1]),
        (m =
          a[g >>> 24] ^
          o[(x >> 16) & 255] ^
          l[(p >> 8) & 255] ^
          _[h & 255] ^
          e[f + 2]),
        (x =
          a[x >>> 24] ^
          o[(p >> 16) & 255] ^
          l[(h >> 8) & 255] ^
          _[g & 255] ^
          e[f + 3]),
        (f += 4),
        (p = c),
        (h = u),
        (g = m);
    for (let b = 0; b < 4; b++)
      (s[t ? 3 & -b : b] =
        (d[p >>> 24] << 24) ^
        (d[(h >> 16) & 255] << 16) ^
        (d[(g >> 8) & 255] << 8) ^
        d[x & 255] ^
        e[f++]),
        (c = p),
        (p = h),
        (h = g),
        (g = x),
        (x = c);
    return s;
  }
};
const qs = {
    getRandomValues(n) {
      const t = new Uint32Array(n.buffer),
        e = (r) => {
          let s = 987654321;
          const i = 4294967295;
          return function () {
            return (
              (s = (36969 * (s & 65535) + (s >> 16)) & i),
              (r = (18e3 * (r & 65535) + (r >> 16)) & i),
              ((((s << 16) + r) & i) / 4294967296 + 0.5) *
                (Math.random() > 0.5 ? 1 : -1)
            );
          };
        };
      for (let r = 0, s; r < n.length; r += 4) {
        const i = e((s || Math.random()) * 4294967296);
        (s = i() * 987654071), (t[r / 4] = (i() * 4294967296) | 0);
      }
      return n;
    },
  },
  vn = {};
vn.ctrGladman = class {
  constructor(n, t) {
    (this._prf = n), (this._initIv = t), (this._iv = t);
  }
  reset() {
    this._iv = this._initIv;
  }
  update(n) {
    return this.calculate(this._prf, n, this._iv);
  }
  incWord(n) {
    if (((n >> 24) & 255) === 255) {
      let t = (n >> 16) & 255,
        e = (n >> 8) & 255,
        r = n & 255;
      t === 255
        ? ((t = 0), e === 255 ? ((e = 0), r === 255 ? (r = 0) : ++r) : ++e)
        : ++t,
        (n = 0),
        (n += t << 16),
        (n += e << 8),
        (n += r);
    } else n += 1 << 24;
    return n;
  }
  incCounter(n) {
    (n[0] = this.incWord(n[0])) === 0 && (n[1] = this.incWord(n[1]));
  }
  calculate(n, t, e) {
    let r;
    if (!(r = t.length)) return [];
    const s = Y.bitLength(t);
    for (let i = 0; i < r; i += 4) {
      this.incCounter(e);
      const a = n.encrypt(e);
      (t[i] ^= a[0]),
        (t[i + 1] ^= a[1]),
        (t[i + 2] ^= a[2]),
        (t[i + 3] ^= a[3]);
    }
    return Y.clamp(t, s);
  }
};
const he = {
  importKey(n) {
    return new he.hmacSha1(ve.bytes.toBits(n));
  },
  pbkdf2(n, t, e, r) {
    if (((e = e || 1e4), r < 0 || e < 0))
      throw new Error("invalid params to pbkdf2");
    const s = ((r >> 5) + 1) << 2;
    let i, a, o, l, _;
    const d = new ArrayBuffer(s),
      p = new DataView(d);
    let h = 0;
    const g = Y;
    for (t = ve.bytes.toBits(t), _ = 1; h < (s || 1); _++) {
      for (i = a = n.encrypt(g.concat(t, [_])), o = 1; o < e; o++)
        for (a = n.encrypt(a), l = 0; l < a.length; l++) i[l] ^= a[l];
      for (o = 0; h < (s || 1) && o < i.length; o++)
        p.setInt32(h, i[o]), (h += 4);
    }
    return d.slice(0, r / 8);
  },
};
he.hmacSha1 = class {
  constructor(n) {
    const t = this,
      e = (t._hash = Fn.sha1),
      r = [[], []];
    t._baseHash = [new e(), new e()];
    const s = t._baseHash[0].blockSize / 32;
    n.length > s && (n = new e().update(n).finalize());
    for (let i = 0; i < s; i++)
      (r[0][i] = n[i] ^ 909522486), (r[1][i] = n[i] ^ 1549556828);
    t._baseHash[0].update(r[0]),
      t._baseHash[1].update(r[1]),
      (t._resultHash = new e(t._baseHash[0]));
  }
  reset() {
    const n = this;
    (n._resultHash = new n._hash(n._baseHash[0])), (n._updated = !1);
  }
  update(n) {
    const t = this;
    (t._updated = !0), t._resultHash.update(n);
  }
  digest() {
    const n = this,
      t = n._resultHash.finalize(),
      e = new n._hash(n._baseHash[1]).update(t).finalize();
    return n.reset(), e;
  }
  encrypt(n) {
    if (this._updated)
      throw new Error("encrypt on already updated hmac called!");
    return this.update(n), this.digest(n);
  }
};
const Gs = typeof crypto < "u" && typeof crypto.getRandomValues == "function",
  ht = "Invalid password",
  pt = "Invalid signature",
  mt = "zipjs-abort-check-password";
function Hn(n) {
  return Gs ? crypto.getRandomValues(n) : qs.getRandomValues(n);
}
const we = 16,
  Ys = "raw",
  Wn = { name: "PBKDF2" },
  Vs = { name: "HMAC" },
  Zs = "SHA-1",
  Ks = Object.assign({ hash: Vs }, Wn),
  rt = Object.assign({ iterations: 1e3, hash: { name: Zs } }, Wn),
  Xs = ["deriveBits"],
  Se = [8, 12, 16],
  Ee = [16, 24, 32],
  ie = 10,
  $s = [0, 0, 0, 0],
  Bn = "undefined",
  jn = "function",
  Be = typeof crypto != Bn,
  Oe = Be && crypto.subtle,
  qn = Be && typeof Oe != Bn,
  J = ve.bytes,
  Js = Un.aes,
  Qs = vn.ctrGladman,
  zs = he.hmacSha1;
let on = Be && qn && typeof Oe.importKey == jn,
  cn = Be && qn && typeof Oe.deriveBits == jn;
class ei extends TransformStream {
  constructor({
    password: t,
    signed: e,
    encryptionStrength: r,
    checkPasswordOnly: s,
  }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((i) => (this.resolveReady = i)),
          password: t,
          signed: e,
          strength: r - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(i, a) {
        const o = this,
          { password: l, strength: _, resolveReady: d, ready: p } = o;
        l
          ? (await ni(o, _, l, X(i, 0, Se[_] + 2)),
            (i = X(i, Se[_] + 2)),
            s ? a.error(new Error(mt)) : d())
          : await p;
        const h = new Uint8Array(i.length - ie - ((i.length - ie) % we));
        a.enqueue(Gn(o, i, h, 0, ie, !0));
      },
      async flush(i) {
        const { signed: a, ctr: o, hmac: l, pending: _, ready: d } = this;
        if (l && o) {
          await d;
          const p = X(_, 0, _.length - ie),
            h = X(_, _.length - ie);
          let g = new Uint8Array();
          if (p.length) {
            const x = Re(J, p);
            l.update(x);
            const f = o.update(x);
            g = Ae(J, f);
          }
          if (a) {
            const x = X(Ae(J, l.digest()), 0, ie);
            for (let f = 0; f < ie; f++) if (x[f] != h[f]) throw new Error(pt);
          }
          i.enqueue(g);
        }
      },
    });
  }
}
class ti extends TransformStream {
  constructor({ password: t, encryptionStrength: e }) {
    let r;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((s) => (this.resolveReady = s)),
          password: t,
          strength: e - 1,
          pending: new Uint8Array(),
        });
      },
      async transform(s, i) {
        const a = this,
          { password: o, strength: l, resolveReady: _, ready: d } = a;
        let p = new Uint8Array();
        o ? ((p = await ri(a, l, o)), _()) : await d;
        const h = new Uint8Array(p.length + s.length - (s.length % we));
        h.set(p, 0), i.enqueue(Gn(a, s, h, p.length, 0));
      },
      async flush(s) {
        const { ctr: i, hmac: a, pending: o, ready: l } = this;
        if (a && i) {
          await l;
          let _ = new Uint8Array();
          if (o.length) {
            const d = i.update(Re(J, o));
            a.update(d), (_ = Ae(J, d));
          }
          (r.signature = Ae(J, a.digest()).slice(0, ie)),
            s.enqueue(wt(_, r.signature));
        }
      },
    }),
      (r = this);
  }
}
function Gn(n, t, e, r, s, i) {
  const { ctr: a, hmac: o, pending: l } = n,
    _ = t.length - s;
  l.length && ((t = wt(l, t)), (e = ai(e, _ - (_ % we))));
  let d;
  for (d = 0; d <= _ - we; d += we) {
    const p = Re(J, X(t, d, d + we));
    i && o.update(p);
    const h = a.update(p);
    i || o.update(h), e.set(Ae(J, h), d + r);
  }
  return (n.pending = X(t, d)), e;
}
async function ni(n, t, e, r) {
  const s = await Yn(n, t, e, X(r, 0, Se[t])),
    i = X(r, Se[t]);
  if (s[0] != i[0] || s[1] != i[1]) throw new Error(ht);
}
async function ri(n, t, e) {
  const r = Hn(new Uint8Array(Se[t])),
    s = await Yn(n, t, e, r);
  return wt(r, s);
}
async function Yn(n, t, e, r) {
  n.password = null;
  const s = js(e),
    i = await si(Ys, s, Ks, !1, Xs),
    a = await ii(Object.assign({ salt: r }, rt), i, 8 * (Ee[t] * 2 + 2)),
    o = new Uint8Array(a),
    l = Re(J, X(o, 0, Ee[t])),
    _ = Re(J, X(o, Ee[t], Ee[t] * 2)),
    d = X(o, Ee[t] * 2);
  return (
    Object.assign(n, {
      keys: { key: l, authentication: _, passwordVerification: d },
      ctr: new Qs(new Js(l), Array.from($s)),
      hmac: new zs(_),
    }),
    d
  );
}
async function si(n, t, e, r, s) {
  if (on)
    try {
      return await Oe.importKey(n, t, e, r, s);
    } catch {
      return (on = !1), he.importKey(t);
    }
  else return he.importKey(t);
}
async function ii(n, t, e) {
  if (cn)
    try {
      return await Oe.deriveBits(n, t, e);
    } catch {
      return (cn = !1), he.pbkdf2(t, n.salt, rt.iterations, e);
    }
  else return he.pbkdf2(t, n.salt, rt.iterations, e);
}
function wt(n, t) {
  let e = n;
  return (
    n.length + t.length &&
      ((e = new Uint8Array(n.length + t.length)),
      e.set(n, 0),
      e.set(t, n.length)),
    e
  );
}
function ai(n, t) {
  if (t && t > n.length) {
    const e = n;
    (n = new Uint8Array(t)), n.set(e, 0);
  }
  return n;
}
function X(n, t, e) {
  return n.subarray(t, e);
}
function Ae(n, t) {
  return n.fromBits(t);
}
function Re(n, t) {
  return n.toBits(t);
}
const be = 12;
class oi extends TransformStream {
  constructor({ password: t, passwordVerification: e, checkPasswordOnly: r }) {
    super({
      start() {
        Object.assign(this, { password: t, passwordVerification: e }),
          Vn(this, t);
      },
      transform(s, i) {
        const a = this;
        if (a.password) {
          const o = ln(a, s.subarray(0, be));
          if (((a.password = null), o[be - 1] != a.passwordVerification))
            throw new Error(ht);
          s = s.subarray(be);
        }
        r ? i.error(new Error(mt)) : i.enqueue(ln(a, s));
      },
    });
  }
}
class ci extends TransformStream {
  constructor({ password: t, passwordVerification: e }) {
    super({
      start() {
        Object.assign(this, { password: t, passwordVerification: e }),
          Vn(this, t);
      },
      transform(r, s) {
        const i = this;
        let a, o;
        if (i.password) {
          i.password = null;
          const l = Hn(new Uint8Array(be));
          (l[be - 1] = i.passwordVerification),
            (a = new Uint8Array(r.length + l.length)),
            a.set(fn(i, l), 0),
            (o = be);
        } else (a = new Uint8Array(r.length)), (o = 0);
        a.set(fn(i, r), o), s.enqueue(a);
      },
    });
  }
}
function ln(n, t) {
  const e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) (e[r] = Zn(n) ^ t[r]), bt(n, e[r]);
  return e;
}
function fn(n, t) {
  const e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) (e[r] = Zn(n) ^ t[r]), bt(n, t[r]);
  return e;
}
function Vn(n, t) {
  const e = [305419896, 591751049, 878082192];
  Object.assign(n, { keys: e, crcKey0: new Ue(e[0]), crcKey2: new Ue(e[2]) });
  for (let r = 0; r < t.length; r++) bt(n, t.charCodeAt(r));
}
function bt(n, t) {
  let [e, r, s] = n.keys;
  n.crcKey0.append([t]),
    (e = ~n.crcKey0.get()),
    (r = un(Math.imul(un(r + Kn(e)), 134775813) + 1)),
    n.crcKey2.append([r >>> 24]),
    (s = ~n.crcKey2.get()),
    (n.keys = [e, r, s]);
}
function Zn(n) {
  const t = n.keys[2] | 2;
  return Kn(Math.imul(t, t ^ 1) >>> 8);
}
function Kn(n) {
  return n & 255;
}
function un(n) {
  return n & 4294967295;
}
const dn = "deflate-raw";
class li extends TransformStream {
  constructor(
    t,
    { chunkSize: e, CompressionStream: r, CompressionStreamNative: s },
  ) {
    super({});
    const {
        compressed: i,
        encrypted: a,
        useCompressionStream: o,
        zipCrypto: l,
        signed: _,
        level: d,
      } = t,
      p = this;
    let h,
      g,
      x = Xn(super.readable);
    (!a || l) && _ && ((h = new Mn()), (x = Q(x, h))),
      i && (x = Jn(x, o, { level: d, chunkSize: e }, s, r)),
      a && (l ? (x = Q(x, new ci(t))) : ((g = new ti(t)), (x = Q(x, g)))),
      $n(p, x, () => {
        let f;
        a && !l && (f = g.signature),
          (!a || l) && _ && (f = new DataView(h.value.buffer).getUint32(0)),
          (p.signature = f);
      });
  }
}
class fi extends TransformStream {
  constructor(
    t,
    { chunkSize: e, DecompressionStream: r, DecompressionStreamNative: s },
  ) {
    super({});
    const {
      zipCrypto: i,
      encrypted: a,
      signed: o,
      signature: l,
      compressed: _,
      useCompressionStream: d,
    } = t;
    let p,
      h,
      g = Xn(super.readable);
    a && (i ? (g = Q(g, new oi(t))) : ((h = new ei(t)), (g = Q(g, h)))),
      _ && (g = Jn(g, d, { chunkSize: e }, s, r)),
      (!a || i) && o && ((p = new Mn()), (g = Q(g, p))),
      $n(this, g, () => {
        if ((!a || i) && o) {
          const x = new DataView(p.value.buffer);
          if (l != x.getUint32(0, !1)) throw new Error(pt);
        }
      });
  }
}
function Xn(n) {
  return Q(
    n,
    new TransformStream({
      transform(t, e) {
        t && t.length && e.enqueue(t);
      },
    }),
  );
}
function $n(n, t, e) {
  (t = Q(t, new TransformStream({ flush: e }))),
    Object.defineProperty(n, "readable", {
      get() {
        return t;
      },
    });
}
function Jn(n, t, e, r, s) {
  try {
    const i = t && r ? r : s;
    n = Q(n, new i(dn, e));
  } catch (i) {
    if (t) n = Q(n, new s(dn, e));
    else throw i;
  }
  return n;
}
function Q(n, t) {
  return n.pipeThrough(t);
}
const ui = "message",
  di = "start",
  _i = "pull",
  _n = "data",
  hi = "ack",
  pi = "close",
  mi = "deflate",
  Qn = "inflate";
class wi extends TransformStream {
  constructor(t, e) {
    super({});
    const r = this,
      { codecType: s } = t;
    let i;
    s.startsWith(mi) ? (i = li) : s.startsWith(Qn) && (i = fi);
    let a = 0;
    const o = new i(t, e),
      l = super.readable,
      _ = new TransformStream({
        transform(d, p) {
          d && d.length && ((a += d.length), p.enqueue(d));
        },
        flush() {
          const { signature: d } = o;
          Object.assign(r, { signature: d, size: a });
        },
      });
    Object.defineProperty(r, "readable", {
      get() {
        return l.pipeThrough(o).pipeThrough(_);
      },
    });
  }
}
const bi = typeof Worker != Fe;
class $e {
  constructor(
    t,
    { readable: e, writable: r },
    {
      options: s,
      config: i,
      streamOptions: a,
      useWebWorkers: o,
      transferStreams: l,
      scripts: _,
    },
    d,
  ) {
    const { signal: p } = a;
    return (
      Object.assign(t, {
        busy: !0,
        readable: e.pipeThrough(new gi(e, a, i), { signal: p }),
        writable: r,
        options: Object.assign({}, s),
        scripts: _,
        transferStreams: l,
        terminate() {
          const { worker: h, busy: g } = t;
          h && !g && (h.terminate(), (t.interface = null));
        },
        onTaskFinished() {
          (t.busy = !1), d(t);
        },
      }),
      (o && bi ? xi : yi)(t, i)
    );
  }
}
class gi extends TransformStream {
  constructor(
    t,
    { onstart: e, onprogress: r, size: s, onend: i },
    { chunkSize: a },
  ) {
    let o = 0;
    super(
      {
        start() {
          e && Je(e, s);
        },
        async transform(l, _) {
          (o += l.length), r && (await Je(r, o, s)), _.enqueue(l);
        },
        flush() {
          (t.size = o), i && Je(i, o);
        },
      },
      { highWaterMark: 1, size: () => a },
    );
  }
}
async function Je(n, ...t) {
  try {
    await n(...t);
  } catch {}
}
function yi(n, t) {
  return { run: () => Ei(n, t) };
}
function xi(n, { baseURL: t, chunkSize: e }) {
  return (
    n.interface ||
      Object.assign(n, {
        worker: Ai(n.scripts[0], t, n),
        interface: { run: () => Ti(n, { chunkSize: e }) },
      }),
    n.interface
  );
}
async function Ei(
  { options: n, readable: t, writable: e, onTaskFinished: r },
  s,
) {
  const i = new wi(n, s);
  try {
    await t.pipeThrough(i).pipeTo(e, { preventClose: !0, preventAbort: !0 });
    const { signature: a, size: o } = i;
    return { signature: a, size: o };
  } finally {
    r();
  }
}
async function Ti(n, t) {
  let e, r;
  const s = new Promise((h, g) => {
    (e = h), (r = g);
  });
  Object.assign(n, {
    reader: null,
    writer: null,
    resolveResult: e,
    rejectResult: r,
    result: s,
  });
  const { readable: i, options: a, scripts: o } = n,
    { writable: l, closed: _ } = Si(n.writable);
  st(
    {
      type: di,
      scripts: o.slice(1),
      options: a,
      config: t,
      readable: i,
      writable: l,
    },
    n,
  ) || Object.assign(n, { reader: i.getReader(), writer: l.getWriter() });
  const p = await s;
  try {
    await l.getWriter().close();
  } catch {}
  return await _, p;
}
function Si(n) {
  const t = n.getWriter();
  let e;
  const r = new Promise((i) => (e = i));
  return {
    writable: new WritableStream({
      async write(i) {
        await t.ready, await t.write(i);
      },
      close() {
        t.releaseLock(), e();
      },
      abort(i) {
        return t.abort(i);
      },
    }),
    closed: r,
  };
}
let hn = !0,
  pn = !0;
function Ai(n, t, e) {
  const r = { type: "module" };
  let s, i;
  typeof n == Dn && (n = n());
  try {
    s = new URL(n, t);
  } catch {
    s = n;
  }
  if (hn)
    try {
      i = new Worker(s);
    } catch {
      (hn = !1), (i = new Worker(s, r));
    }
  else i = new Worker(s, r);
  return i.addEventListener(ui, (a) => Ri(a, e)), i;
}
function st(
  n,
  { worker: t, writer: e, onTaskFinished: r, transferStreams: s },
) {
  try {
    let { value: i, readable: a, writable: o } = n;
    const l = [];
    if (
      (i &&
        (i.byteLength < i.buffer.byteLength
          ? (n.value = i.buffer.slice(0, i.byteLength))
          : (n.value = i.buffer),
        l.push(n.value)),
      s && pn
        ? (a && l.push(a), o && l.push(o))
        : (n.readable = n.writable = null),
      l.length)
    )
      try {
        return t.postMessage(n, l), !0;
      } catch {
        (pn = !1), (n.readable = n.writable = null), t.postMessage(n);
      }
    else t.postMessage(n);
  } catch (i) {
    throw (e && e.releaseLock(), r(), i);
  }
}
async function Ri({ data: n }, t) {
  const { type: e, value: r, messageId: s, result: i, error: a } = n,
    {
      reader: o,
      writer: l,
      resolveResult: _,
      rejectResult: d,
      onTaskFinished: p,
    } = t;
  try {
    if (a) {
      const { message: g, stack: x, code: f, name: c } = a,
        u = new Error(g);
      Object.assign(u, { stack: x, code: f, name: c }), h(u);
    } else {
      if (e == _i) {
        const { value: g, done: x } = await o.read();
        st({ type: _n, value: g, done: x, messageId: s }, t);
      }
      e == _n &&
        (await l.ready,
        await l.write(new Uint8Array(r)),
        st({ type: hi, messageId: s }, t)),
        e == pi && h(null, i);
    }
  } catch (g) {
    h(g);
  }
  function h(g, x) {
    g ? d(g) : _(x), l && l.releaseLock(), p();
  }
}
let ae = [];
const Qe = [];
let mn = 0;
async function Ci(n, t) {
  const { options: e, config: r } = t,
    {
      transferStreams: s,
      useWebWorkers: i,
      useCompressionStream: a,
      codecType: o,
      compressed: l,
      signed: _,
      encrypted: d,
    } = e,
    { workerScripts: p, maxWorkers: h, terminateWorkerTimeout: g } = r;
  t.transferStreams = s || s === $;
  const x = !l && !_ && !d && !t.transferStreams;
  (t.useWebWorkers = !x && (i || (i === $ && r.useWebWorkers))),
    (t.scripts = t.useWebWorkers && p ? p[o] : []),
    (e.useCompressionStream = a || (a === $ && r.useCompressionStream));
  let f;
  const c = ae.find((m) => !m.busy);
  if (c) it(c), (f = new $e(c, n, t, u));
  else if (ae.length < h) {
    const m = { indexWorker: mn };
    mn++, ae.push(m), (f = new $e(m, n, t, u));
  } else
    f = await new Promise((m) =>
      Qe.push({ resolve: m, stream: n, workerOptions: t }),
    );
  return f.run();
  function u(m) {
    if (Qe.length) {
      const [{ resolve: b, stream: y, workerOptions: C }] = Qe.splice(0, 1);
      b(new $e(m, y, C, u));
    } else
      m.worker
        ? (it(m),
          Number.isFinite(g) &&
            g >= 0 &&
            (m.terminateTimeout = setTimeout(() => {
              (ae = ae.filter((b) => b != m)), m.terminate();
            }, g)))
        : (ae = ae.filter((b) => b != m));
  }
}
function it(n) {
  const { terminateTimeout: t } = n;
  t && (clearTimeout(t), (n.terminateTimeout = null));
}
function Oi() {
  ae.forEach((n) => {
    it(n), n.terminate();
  });
}
const zn = "HTTP error ",
  ke = "HTTP Range not supported",
  er = "Writer iterator completed too soon",
  ki = "text/plain",
  Di = "Content-Length",
  Ii = "Content-Range",
  Ni = "Accept-Ranges",
  Pi = "Range",
  Li = "Content-Type",
  Mi = "HEAD",
  gt = "GET",
  tr = "bytes",
  Fi = 64 * 1024,
  yt = "writable";
class je {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class le extends je {
  get readable() {
    const t = this,
      { chunkSize: e = Fi } = t,
      r = new ReadableStream({
        start() {
          this.chunkOffset = 0;
        },
        async pull(s) {
          const { offset: i = 0, size: a, diskNumberStart: o } = r,
            { chunkOffset: l } = this;
          s.enqueue(await G(t, i + l, Math.min(e, a - l), o)),
            l + e > a ? s.close() : (this.chunkOffset += e);
        },
      });
    return r;
  }
}
class xt extends je {
  constructor() {
    super();
    const t = this,
      e = new WritableStream({
        write(r) {
          return t.writeUint8Array(r);
        },
      });
    Object.defineProperty(t, yt, {
      get() {
        return e;
      },
    });
  }
  writeUint8Array() {}
}
class Ui extends le {
  constructor(t) {
    super();
    let e = t.length;
    for (; t.charAt(e - 1) == "="; ) e--;
    const r = t.indexOf(",") + 1;
    Object.assign(this, {
      dataURI: t,
      dataStart: r,
      size: Math.floor((e - r) * 0.75),
    });
  }
  readUint8Array(t, e) {
    const { dataStart: r, dataURI: s } = this,
      i = new Uint8Array(e),
      a = Math.floor(t / 3) * 4,
      o = atob(s.substring(a + r, Math.ceil((t + e) / 3) * 4 + r)),
      l = t - Math.floor(a / 4) * 3;
    for (let _ = l; _ < l + e; _++) i[_ - l] = o.charCodeAt(_);
    return i;
  }
}
class vi extends xt {
  constructor(t) {
    super(),
      Object.assign(this, {
        data: "data:" + (t || "") + ";base64,",
        pending: [],
      });
  }
  writeUint8Array(t) {
    const e = this;
    let r = 0,
      s = e.pending;
    const i = e.pending.length;
    for (e.pending = "", r = 0; r < Math.floor((i + t.length) / 3) * 3 - i; r++)
      s += String.fromCharCode(t[r]);
    for (; r < t.length; r++) e.pending += String.fromCharCode(t[r]);
    s.length > 2 ? (e.data += btoa(s)) : (e.pending = s);
  }
  getData() {
    return this.data + btoa(this.pending);
  }
}
class Et extends le {
  constructor(t) {
    super(), Object.assign(this, { blob: t, size: t.size });
  }
  async readUint8Array(t, e) {
    const r = this,
      s = t + e;
    let a = await (t || s < r.size ? r.blob.slice(t, s) : r.blob).arrayBuffer();
    return a.byteLength > e && (a = a.slice(t, s)), new Uint8Array(a);
  }
}
class nr extends je {
  constructor(t) {
    super();
    const e = this,
      r = new TransformStream(),
      s = [];
    t && s.push([Li, t]),
      Object.defineProperty(e, yt, {
        get() {
          return r.writable;
        },
      }),
      (e.blob = new Response(r.readable, { headers: s }).blob());
  }
  getData() {
    return this.blob;
  }
}
class Hi extends Et {
  constructor(t) {
    super(new Blob([t], { type: ki }));
  }
}
class Wi extends nr {
  constructor(t) {
    super(t),
      Object.assign(this, {
        encoding: t,
        utf8: !t || t.toLowerCase() == "utf-8",
      });
  }
  async getData() {
    const { encoding: t, utf8: e } = this,
      r = await super.getData();
    if (r.text && e) return r.text();
    {
      const s = new FileReader();
      return new Promise((i, a) => {
        Object.assign(s, {
          onload: ({ target: o }) => i(o.result),
          onerror: () => a(s.error),
        }),
          s.readAsText(r, t);
      });
    }
  }
}
class Bi extends le {
  constructor(t, e) {
    super(), rr(this, t, e);
  }
  async init() {
    await sr(this, at, wn), super.init();
  }
  readUint8Array(t, e) {
    return ir(this, t, e, at, wn);
  }
}
class ji extends le {
  constructor(t, e) {
    super(), rr(this, t, e);
  }
  async init() {
    await sr(this, ot, bn), super.init();
  }
  readUint8Array(t, e) {
    return ir(this, t, e, ot, bn);
  }
}
function rr(n, t, e) {
  const { preventHeadRequest: r, useRangeHeader: s, forceRangeRequests: i } = e;
  (e = Object.assign({}, e)),
    delete e.preventHeadRequest,
    delete e.useRangeHeader,
    delete e.forceRangeRequests,
    delete e.useXHR,
    Object.assign(n, {
      url: t,
      options: e,
      preventHeadRequest: r,
      useRangeHeader: s,
      forceRangeRequests: i,
    });
}
async function sr(n, t, e) {
  const { url: r, useRangeHeader: s, forceRangeRequests: i } = n;
  if (Vi(r) && (s || i)) {
    const { headers: a } = await t(gt, n, ar(n));
    if (!i && a.get(Ni) != tr) throw new Error(ke);
    {
      let o;
      const l = a.get(Ii);
      if (l) {
        const _ = l.trim().split(/\s*\/\s*/);
        if (_.length) {
          const d = _[1];
          d && d != "*" && (o = Number(d));
        }
      }
      o === $ ? await gn(n, t, e) : (n.size = o);
    }
  } else await gn(n, t, e);
}
async function ir(n, t, e, r, s) {
  const { useRangeHeader: i, forceRangeRequests: a, options: o } = n;
  if (i || a) {
    const l = await r(gt, n, ar(n, t, e));
    if (l.status != 206) throw new Error(ke);
    return new Uint8Array(await l.arrayBuffer());
  } else {
    const { data: l } = n;
    return l || (await s(n, o)), new Uint8Array(n.data.subarray(t, t + e));
  }
}
function ar(n, t = 0, e = 1) {
  return Object.assign({}, Tt(n), { [Pi]: tr + "=" + t + "-" + (t + e - 1) });
}
function Tt({ options: n }) {
  const { headers: t } = n;
  if (t) return Symbol.iterator in t ? Object.fromEntries(t) : t;
}
async function wn(n) {
  await or(n, at);
}
async function bn(n) {
  await or(n, ot);
}
async function or(n, t) {
  const e = await t(gt, n, Tt(n));
  (n.data = new Uint8Array(await e.arrayBuffer())),
    n.size || (n.size = n.data.length);
}
async function gn(n, t, e) {
  if (n.preventHeadRequest) await e(n, n.options);
  else {
    const s = (await t(Mi, n, Tt(n))).headers.get(Di);
    s ? (n.size = Number(s)) : await e(n, n.options);
  }
}
async function at(n, { options: t, url: e }, r) {
  const s = await fetch(e, Object.assign({}, t, { method: n, headers: r }));
  if (s.status < 400) return s;
  throw s.status == 416
    ? new Error(ke)
    : new Error(zn + (s.statusText || s.status));
}
function ot(n, { url: t }, e) {
  return new Promise((r, s) => {
    const i = new XMLHttpRequest();
    if (
      (i.addEventListener(
        "load",
        () => {
          if (i.status < 400) {
            const a = [];
            i
              .getAllResponseHeaders()
              .trim()
              .split(/[\r\n]+/)
              .forEach((o) => {
                const l = o.trim().split(/\s*:\s*/);
                (l[0] = l[0]
                  .trim()
                  .replace(/^[a-z]|-[a-z]/g, (_) => _.toUpperCase())),
                  a.push(l);
              }),
              r({
                status: i.status,
                arrayBuffer: () => i.response,
                headers: new Map(a),
              });
          } else
            s(
              i.status == 416
                ? new Error(ke)
                : new Error(zn + (i.statusText || i.status)),
            );
        },
        !1,
      ),
      i.addEventListener(
        "error",
        (a) => s(a.detail ? a.detail.error : new Error("Network error")),
        !1,
      ),
      i.open(n, t),
      e)
    )
      for (const a of Object.entries(e)) i.setRequestHeader(a[0], a[1]);
    (i.responseType = "arraybuffer"), i.send();
  });
}
class cr extends le {
  constructor(t, e = {}) {
    super(),
      Object.assign(this, {
        url: t,
        reader: e.useXHR ? new ji(t, e) : new Bi(t, e),
      });
  }
  set size(t) {}
  get size() {
    return this.reader.size;
  }
  async init() {
    await this.reader.init(), super.init();
  }
  readUint8Array(t, e) {
    return this.reader.readUint8Array(t, e);
  }
}
class qi extends cr {
  constructor(t, e = {}) {
    (e.useRangeHeader = !0), super(t, e);
  }
}
class Gi extends le {
  constructor(t) {
    super(), Object.assign(this, { array: t, size: t.length });
  }
  readUint8Array(t, e) {
    return this.array.slice(t, t + e);
  }
}
class Yi extends xt {
  init(t = 0) {
    Object.assign(this, { offset: 0, array: new Uint8Array(t) }), super.init();
  }
  writeUint8Array(t) {
    const e = this;
    if (e.offset + t.length > e.array.length) {
      const r = e.array;
      (e.array = new Uint8Array(r.length + t.length)), e.array.set(r);
    }
    e.array.set(t, e.offset), (e.offset += t.length);
  }
  getData() {
    return this.array;
  }
}
class St extends le {
  constructor(t) {
    super(), (this.readers = t);
  }
  async init() {
    const t = this,
      { readers: e } = t;
    (t.lastDiskNumber = 0),
      (t.lastDiskOffset = 0),
      await Promise.all(
        e.map(async (r, s) => {
          await r.init(),
            s != e.length - 1 && (t.lastDiskOffset += r.size),
            (t.size += r.size);
        }),
      ),
      super.init();
  }
  async readUint8Array(t, e, r = 0) {
    const s = this,
      { readers: i } = this;
    let a,
      o = r;
    o == -1 && (o = i.length - 1);
    let l = t;
    for (; l >= i[o].size; ) (l -= i[o].size), o++;
    const _ = i[o],
      d = _.size;
    if (l + e <= d) a = await G(_, l, e);
    else {
      const p = d - l;
      (a = new Uint8Array(e)),
        a.set(await G(_, l, p)),
        a.set(await s.readUint8Array(t + p, e - p, r), p);
    }
    return (s.lastDiskNumber = Math.max(o, s.lastDiskNumber)), a;
  }
}
class He extends je {
  constructor(t, e = 4294967295) {
    super();
    const r = this;
    Object.assign(r, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize: e,
      availableSize: e,
    });
    let s, i, a;
    const o = new WritableStream({
      async write(d) {
        const { availableSize: p } = r;
        if (a)
          d.length >= p
            ? (await l(d.slice(0, p)),
              await _(),
              (r.diskOffset += s.size),
              r.diskNumber++,
              (a = null),
              await this.write(d.slice(p)))
            : await l(d);
        else {
          const { value: h, done: g } = await t.next();
          if (g && !h) throw new Error(er);
          (s = h),
            (s.size = 0),
            s.maxSize && (r.maxSize = s.maxSize),
            (r.availableSize = r.maxSize),
            await Ce(s),
            (i = h.writable),
            (a = i.getWriter()),
            await this.write(d);
        }
      },
      async close() {
        await a.ready, await _();
      },
    });
    Object.defineProperty(r, yt, {
      get() {
        return o;
      },
    });
    async function l(d) {
      const p = d.length;
      p &&
        (await a.ready,
        await a.write(d),
        (s.size += p),
        (r.size += p),
        (r.availableSize -= p));
    }
    async function _() {
      (i.size = s.size), await a.close();
    }
  }
}
function Vi(n) {
  const { baseURL: t } = Nn(),
    { protocol: e } = new URL(n, t);
  return e == "http:" || e == "https:";
}
async function Ce(n, t) {
  n.init && !n.initialized && (await n.init(t));
}
function lr(n) {
  return (
    Array.isArray(n) && (n = new St(n)),
    n instanceof ReadableStream && (n = { readable: n }),
    n
  );
}
function fr(n) {
  n.writable === $ && typeof n.next == Dn && (n = new He(n)),
    n instanceof WritableStream && (n = { writable: n });
  const { writable: t } = n;
  return (
    t.size === $ && (t.size = 0),
    n instanceof He ||
      Object.assign(n, {
        diskNumber: 0,
        diskOffset: 0,
        availableSize: 1 / 0,
        maxSize: 1 / 0,
      }),
    n
  );
}
function G(n, t, e, r) {
  return n.readUint8Array(t, e, r);
}
const Zi = St,
  Ki = He,
  ur =
    "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(
      "",
    ),
  Xi = ur.length == 256;
function $i(n) {
  if (Xi) {
    let t = "";
    for (let e = 0; e < n.length; e++) t += ur[n[e]];
    return t;
  } else return new TextDecoder().decode(n);
}
function ct(n, t) {
  return t && t.trim().toLowerCase() == "cp437"
    ? $i(n)
    : new TextDecoder(t).decode(n);
}
const dr = "filename",
  _r = "rawFilename",
  hr = "comment",
  pr = "rawComment",
  mr = "uncompressedSize",
  wr = "compressedSize",
  br = "offset",
  lt = "diskNumberStart",
  ft = "lastModDate",
  ut = "rawLastModDate",
  gr = "lastAccessDate",
  Ji = "rawLastAccessDate",
  yr = "creationDate",
  Qi = "rawCreationDate",
  zi = "internalFileAttribute",
  ea = "externalFileAttribute",
  ta = "msDosCompatible",
  na = "zip64",
  ra = [
    dr,
    _r,
    wr,
    mr,
    ft,
    ut,
    hr,
    pr,
    gr,
    yr,
    br,
    lt,
    lt,
    zi,
    ea,
    ta,
    na,
    "directory",
    "bitFlag",
    "encrypted",
    "signature",
    "filenameUTF8",
    "commentUTF8",
    "compressionMethod",
    "version",
    "versionMadeBy",
    "extraField",
    "rawExtraField",
    "extraFieldZip64",
    "extraFieldUnicodePath",
    "extraFieldUnicodeComment",
    "extraFieldAES",
    "extraFieldNTFS",
    "extraFieldExtendedTimestamp",
  ];
class yn {
  constructor(t) {
    ra.forEach((e) => (this[e] = t[e]));
  }
}
const Le = "File format is not recognized",
  xr = "End of central directory not found",
  Er = "End of Zip64 central directory not found",
  Tr = "End of Zip64 central directory locator not found",
  Sr = "Central directory header not found",
  Ar = "Local file header not found",
  Rr = "Zip64 extra field not found",
  Cr = "File contains encrypted entry",
  Or = "Encryption method not supported",
  dt = "Compression method not supported",
  _t = "Split zip file",
  xn = "utf-8",
  En = "cp437",
  sa = [
    [mr, _e],
    [wr, _e],
    [br, _e],
    [lt, oe],
  ],
  ia = { [oe]: { getValue: B, bytes: 4 }, [_e]: { getValue: Me, bytes: 8 } };
class aa {
  constructor(t, e = {}) {
    Object.assign(this, { reader: lr(t), options: e, config: Nn() });
  }
  async *getEntriesGenerator(t = {}) {
    const e = this;
    let { reader: r } = e;
    const { config: s } = e;
    if (
      (await Ce(r),
      (r.size === $ || !r.readUint8Array) &&
        ((r = new Et(await new Response(r.readable).blob())), await Ce(r)),
      r.size < me)
    )
      throw new Error(Le);
    r.chunkSize = Ws(s);
    const i = await da(r, Rs, r.size, me, oe * 16);
    if (!i) {
      const E = await G(r, 0, 4),
        S = q(E);
      throw B(S) == As ? new Error(_t) : new Error(xr);
    }
    const a = q(i);
    let o = B(a, 12),
      l = B(a, 16);
    const _ = i.offset,
      d = j(a, 20),
      p = _ + me + d;
    let h = j(a, 4);
    const g = r.lastDiskNumber || 0;
    let x = j(a, 6),
      f = j(a, 8),
      c = 0,
      u = 0;
    if (l == _e || o == _e || f == oe || x == oe) {
      const E = await G(r, i.offset - Ke, Ke),
        S = q(E);
      if (B(S, 0) != Cs) throw new Error(Er);
      l = Me(S, 8);
      let D = await G(r, l, Xe, -1),
        O = q(D);
      const P = i.offset - Ke - Xe;
      if (B(O, 0) != en && l != P) {
        const N = l;
        (l = P), (c = l - N), (D = await G(r, l, Xe, -1)), (O = q(D));
      }
      if (B(O, 0) != en) throw new Error(Tr);
      h == oe && (h = B(O, 16)),
        x == oe && (x = B(O, 20)),
        f == oe && (f = Me(O, 32)),
        o == _e && (o = Me(O, 40)),
        (l -= o);
    }
    if (
      (l >= r.size && ((c = r.size - l - o - me), (l = r.size - o - me)),
      g != h)
    )
      throw new Error(_t);
    if (l < 0) throw new Error(Le);
    let m = 0,
      b = await G(r, l, o, x),
      y = q(b);
    if (o) {
      const E = i.offset - o;
      if (B(y, m) != zt && l != E) {
        const S = l;
        (l = E), (c += l - S), (b = await G(r, l, o, x)), (y = q(b));
      }
    }
    const C = i.offset - l - (r.lastDiskOffset || 0);
    if (
      (o != C && C >= 0 && ((o = C), (b = await G(r, l, o, x)), (y = q(b))),
      l < 0 || l >= r.size)
    )
      throw new Error(Le);
    const w = K(e, t, "filenameEncoding"),
      T = K(e, t, "commentEncoding");
    for (let E = 0; E < f; E++) {
      const S = new oa(r, s, e.options);
      if (B(y, m) != zt) throw new Error(Sr);
      kr(S, y, m + 6);
      const D = !!S.bitFlag.languageEncodingFlag,
        O = m + 46,
        P = O + S.filenameLength,
        N = P + S.extraFieldLength,
        k = j(y, m + 4),
        v = (k & 0) == 0,
        M = b.subarray(O, P),
        ye = j(y, m + 32),
        I = N + ye,
        fe = b.subarray(N, I),
        F = D,
        H = D,
        At = v && (ge(y, m + 38) & sn) == sn,
        Rt = B(y, m + 42) + c;
      Object.assign(S, {
        versionMadeBy: k,
        msDosCompatible: v,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: ye,
        directory: At,
        offset: Rt,
        diskNumberStart: j(y, m + 34),
        internalFileAttribute: j(y, m + 36),
        externalFileAttribute: B(y, m + 38),
        rawFilename: M,
        filenameUTF8: F,
        commentUTF8: H,
        rawExtraField: b.subarray(P, N),
      });
      const [Ct, Nr] = await Promise.all([
        ct(M, F ? xn : w || En),
        ct(fe, H ? xn : T || En),
      ]);
      Object.assign(S, {
        rawComment: fe,
        filename: Ct,
        comment: Nr,
        directory: At || Ct.endsWith(Us),
      }),
        (u = Math.max(Rt, u)),
        await Dr(S, S, y, m + 6);
      const qe = new yn(S);
      (qe.getData = (kt, Pr) => S.getData(kt, qe, Pr)), (m = I);
      const { onprogress: Ot } = t;
      if (Ot)
        try {
          await Ot(E + 1, f, new yn(S));
        } catch {}
      yield qe;
    }
    const A = K(e, t, "extractPrependedData"),
      R = K(e, t, "extractAppendedData");
    return (
      A && (e.prependedData = u > 0 ? await G(r, 0, u) : new Uint8Array()),
      (e.comment = d ? await G(r, _ + me, d) : new Uint8Array()),
      R &&
        (e.appendedData =
          p < r.size ? await G(r, p, r.size - p) : new Uint8Array()),
      !0
    );
  }
  async getEntries(t = {}) {
    const e = [];
    for await (const r of this.getEntriesGenerator(t)) e.push(r);
    return e;
  }
  async close() {}
}
class oa {
  constructor(t, e, r) {
    Object.assign(this, { reader: t, config: e, options: r });
  }
  async getData(t, e, r = {}) {
    const s = this,
      {
        reader: i,
        offset: a,
        diskNumberStart: o,
        extraFieldAES: l,
        compressionMethod: _,
        config: d,
        bitFlag: p,
        signature: h,
        rawLastModDate: g,
        uncompressedSize: x,
        compressedSize: f,
      } = s,
      c = (e.localDirectory = {}),
      u = await G(i, a, 30, o),
      m = q(u);
    let b = K(s, r, "password");
    if (((b = b && b.length && b), l && l.originalCompressionMethod != Ts))
      throw new Error(dt);
    if (_ != Es && _ != xs) throw new Error(dt);
    if (B(m, 0) != Ss) throw new Error(Ar);
    kr(c, m, 4),
      (c.rawExtraField = c.extraFieldLength
        ? await G(i, a + 30 + c.filenameLength, c.extraFieldLength, o)
        : new Uint8Array()),
      await Dr(s, c, m, 4, !0),
      Object.assign(e, {
        lastAccessDate: c.lastAccessDate,
        creationDate: c.creationDate,
      });
    const y = s.encrypted && c.encrypted,
      C = y && !l;
    if (y) {
      if (!C && l.strength === $) throw new Error(Or);
      if (!b) throw new Error(Cr);
    }
    const w = a + 30 + c.filenameLength + c.extraFieldLength,
      T = f,
      A = i.readable;
    Object.assign(A, { diskNumberStart: o, offset: w, size: T });
    const R = K(s, r, "signal"),
      E = K(s, r, "checkPasswordOnly");
    E && (t = new WritableStream()), (t = fr(t)), await Ce(t, x);
    const { writable: S } = t,
      { onstart: D, onprogress: O, onend: P } = r,
      N = {
        options: {
          codecType: Qn,
          password: b,
          zipCrypto: C,
          encryptionStrength: l && l.strength,
          signed: K(s, r, "checkSignature"),
          passwordVerification:
            C && (p.dataDescriptor ? (g >>> 8) & 255 : (h >>> 24) & 255),
          signature: h,
          compressed: _ != 0,
          encrypted: y,
          useWebWorkers: K(s, r, "useWebWorkers"),
          useCompressionStream: K(s, r, "useCompressionStream"),
          transferStreams: K(s, r, "transferStreams"),
          checkPasswordOnly: E,
        },
        config: d,
        streamOptions: {
          signal: R,
          size: T,
          onstart: D,
          onprogress: O,
          onend: P,
        },
      };
    let k = 0;
    try {
      ({ outputSize: k } = await Ci({ readable: A, writable: S }, N));
    } catch (v) {
      if (!E || v.message != mt) throw v;
    } finally {
      const v = K(s, r, "preventClose");
      (S.size += k), !v && !S.locked && (await S.getWriter().close());
    }
    return E ? void 0 : t.getData ? t.getData() : S;
  }
}
function kr(n, t, e) {
  const r = (n.rawBitFlag = j(t, e + 2)),
    s = (r & tn) == tn,
    i = B(t, e + 6);
  Object.assign(n, {
    encrypted: s,
    version: j(t, e),
    bitFlag: {
      level: (r & Fs) >> 1,
      dataDescriptor: (r & nn) == nn,
      languageEncodingFlag: (r & rn) == rn,
    },
    rawLastModDate: i,
    lastModDate: _a(i),
    filenameLength: j(t, e + 22),
    extraFieldLength: j(t, e + 24),
  });
}
async function Dr(n, t, e, r, s) {
  const { rawExtraField: i } = t,
    a = (t.extraField = new Map()),
    o = q(new Uint8Array(i));
  let l = 0;
  try {
    for (; l < i.length; ) {
      const u = j(o, l),
        m = j(o, l + 2);
      a.set(u, { type: u, data: i.slice(l + 4, l + 4 + m) }), (l += 4 + m);
    }
  } catch {}
  const _ = j(e, r + 4);
  Object.assign(t, {
    signature: B(e, r + 10),
    uncompressedSize: B(e, r + 18),
    compressedSize: B(e, r + 14),
  });
  const d = a.get(Os);
  d && (ca(d, t), (t.extraFieldZip64 = d));
  const p = a.get(Ps);
  p && (await Tn(p, dr, _r, t, n), (t.extraFieldUnicodePath = p));
  const h = a.get(Ls);
  h && (await Tn(h, hr, pr, t, n), (t.extraFieldUnicodeComment = h));
  const g = a.get(ks);
  g ? (la(g, t, _), (t.extraFieldAES = g)) : (t.compressionMethod = _);
  const x = a.get(Ds);
  x && (fa(x, t), (t.extraFieldNTFS = x));
  const f = a.get(Ns);
  f && (ua(f, t, s), (t.extraFieldExtendedTimestamp = f));
  const c = a.get(Ms);
  c && (t.extraFieldUSDZ = c);
}
function ca(n, t) {
  t.zip64 = !0;
  const e = q(n.data),
    r = sa.filter(([s, i]) => t[s] == i);
  for (let s = 0, i = 0; s < r.length; s++) {
    const [a, o] = r[s];
    if (t[a] == o) {
      const l = ia[o];
      (t[a] = n[a] = l.getValue(e, i)), (i += l.bytes);
    } else if (n[a]) throw new Error(Rr);
  }
}
async function Tn(n, t, e, r, s) {
  const i = q(n.data),
    a = new Ue();
  a.append(s[e]);
  const o = q(new Uint8Array(4));
  o.setUint32(0, a.get(), !0);
  const l = B(i, 1);
  Object.assign(n, {
    version: ge(i, 0),
    [t]: ct(n.data.subarray(5)),
    valid: !s.bitFlag.languageEncodingFlag && l == B(o, 0),
  }),
    n.valid && ((r[t] = n[t]), (r[t + "UTF8"] = !0));
}
function la(n, t, e) {
  const r = q(n.data),
    s = ge(r, 4);
  Object.assign(n, {
    vendorVersion: ge(r, 0),
    vendorId: ge(r, 2),
    strength: s,
    originalCompressionMethod: e,
    compressionMethod: j(r, 5),
  }),
    (t.compressionMethod = n.compressionMethod);
}
function fa(n, t) {
  const e = q(n.data);
  let r = 4,
    s;
  try {
    for (; r < n.data.length && !s; ) {
      const i = j(e, r),
        a = j(e, r + 2);
      i == Is && (s = n.data.slice(r + 4, r + 4 + a)), (r += 4 + a);
    }
  } catch {}
  try {
    if (s && s.length == 24) {
      const i = q(s),
        a = i.getBigUint64(0, !0),
        o = i.getBigUint64(8, !0),
        l = i.getBigUint64(16, !0);
      Object.assign(n, {
        rawLastModDate: a,
        rawLastAccessDate: o,
        rawCreationDate: l,
      });
      const _ = ze(a),
        d = ze(o),
        p = ze(l),
        h = { lastModDate: _, lastAccessDate: d, creationDate: p };
      Object.assign(n, h), Object.assign(t, h);
    }
  } catch {}
}
function ua(n, t, e) {
  const r = q(n.data),
    s = ge(r, 0),
    i = [],
    a = [];
  e
    ? ((s & 1) == 1 && (i.push(ft), a.push(ut)),
      (s & 2) == 2 && (i.push(gr), a.push(Ji)),
      (s & 4) == 4 && (i.push(yr), a.push(Qi)))
    : n.data.length >= 5 && (i.push(ft), a.push(ut));
  let o = 1;
  i.forEach((l, _) => {
    if (n.data.length >= o + 4) {
      const d = B(r, o);
      t[l] = n[l] = new Date(d * 1e3);
      const p = a[_];
      n[p] = d;
    }
    o += 4;
  });
}
async function da(n, t, e, r, s) {
  const i = new Uint8Array(4),
    a = q(i);
  ha(a, 0, t);
  const o = r + s;
  return (await l(r)) || (await l(Math.min(o, e)));
  async function l(_) {
    const d = e - _,
      p = await G(n, d, _);
    for (let h = p.length - r; h >= 0; h--)
      if (
        p[h] == i[0] &&
        p[h + 1] == i[1] &&
        p[h + 2] == i[2] &&
        p[h + 3] == i[3]
      )
        return { offset: d + h, buffer: p.slice(h, h + r).buffer };
  }
}
function K(n, t, e) {
  return t[e] === $ ? n.options[e] : t[e];
}
function _a(n) {
  const t = (n & 4294901760) >> 16,
    e = n & 65535;
  try {
    return new Date(
      1980 + ((t & 65024) >> 9),
      ((t & 480) >> 5) - 1,
      t & 31,
      (e & 63488) >> 11,
      (e & 2016) >> 5,
      (e & 31) * 2,
      0,
    );
  } catch {}
}
function ze(n) {
  return new Date(Number(n / BigInt(1e4) - BigInt(116444736e5)));
}
function ge(n, t) {
  return n.getUint8(t);
}
function j(n, t) {
  return n.getUint16(t, !0);
}
function B(n, t) {
  return n.getUint32(t, !0);
}
function Me(n, t) {
  return Number(n.getBigUint64(t, !0));
}
function ha(n, t, e) {
  n.setUint32(t, e, !0);
}
function q(n) {
  return new DataView(n.buffer);
}
Pn({ Inflate: ys });
const pa = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        BlobReader: Et,
        BlobWriter: nr,
        Data64URIReader: Ui,
        Data64URIWriter: vi,
        ERR_BAD_FORMAT: Le,
        ERR_CENTRAL_DIRECTORY_NOT_FOUND: Sr,
        ERR_ENCRYPTED: Cr,
        ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND: Tr,
        ERR_EOCDR_NOT_FOUND: xr,
        ERR_EOCDR_ZIP64_NOT_FOUND: Er,
        ERR_EXTRAFIELD_ZIP64_NOT_FOUND: Rr,
        ERR_HTTP_RANGE: ke,
        ERR_INVALID_PASSWORD: ht,
        ERR_INVALID_SIGNATURE: pt,
        ERR_ITERATOR_COMPLETED_TOO_SOON: er,
        ERR_LOCAL_FILE_HEADER_NOT_FOUND: Ar,
        ERR_SPLIT_ZIP_FILE: _t,
        ERR_UNSUPPORTED_COMPRESSION: dt,
        ERR_UNSUPPORTED_ENCRYPTION: Or,
        HttpRangeReader: qi,
        HttpReader: cr,
        Reader: le,
        SplitDataReader: St,
        SplitDataWriter: He,
        SplitZipReader: Zi,
        SplitZipWriter: Ki,
        TextReader: Hi,
        TextWriter: Wi,
        Uint8ArrayReader: Gi,
        Uint8ArrayWriter: Yi,
        Writer: xt,
        ZipReader: aa,
        configure: Pn,
        getMimeType: Bs,
        initReader: lr,
        initStream: Ce,
        initWriter: fr,
        readUint8Array: G,
        terminateWorkers: Oi,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Te = pa;
class ma {
  constructor(t, e) {
    U(this, "_zipReader");
    U(this, "_entriesPromise");
    U(this, "_traceURL");
    (this._traceURL = t),
      Te.configure({ baseURL: self.location.href }),
      (this._zipReader = new Te.ZipReader(
        new Te.HttpReader(ba(t), { mode: "cors", preventHeadRequest: !0 }),
        { useWebWorkers: !1 },
      )),
      (this._entriesPromise = this._zipReader
        .getEntries({ onprogress: e })
        .then((r) => {
          const s = new Map();
          for (const i of r) s.set(i.filename, i);
          return s;
        }));
  }
  isLive() {
    return !1;
  }
  traceURL() {
    return this._traceURL;
  }
  async entryNames() {
    return [...(await this._entriesPromise).keys()];
  }
  async hasEntry(t) {
    return (await this._entriesPromise).has(t);
  }
  async readText(t) {
    var i;
    const r = (await this._entriesPromise).get(t);
    if (!r) return;
    const s = new Te.TextWriter();
    return await ((i = r.getData) == null ? void 0 : i.call(r, s)), s.getData();
  }
  async readBlob(t) {
    const r = (await this._entriesPromise).get(t);
    if (!r) return;
    const s = new Te.BlobWriter();
    return await r.getData(s), s.getData();
  }
}
class wa {
  constructor(t) {
    U(this, "_entriesPromise");
    U(this, "_traceURL");
    (this._traceURL = t),
      (this._entriesPromise = fetch(
        "/trace/file?path=" + encodeURIComponent(t),
      ).then(async (e) => {
        const r = JSON.parse(await e.text()),
          s = new Map();
        for (const i of r.entries) s.set(i.name, i.path);
        return s;
      }));
  }
  isLive() {
    return !0;
  }
  traceURL() {
    return this._traceURL;
  }
  async entryNames() {
    return [...(await this._entriesPromise).keys()];
  }
  async hasEntry(t) {
    return (await this._entriesPromise).has(t);
  }
  async readText(t) {
    const e = await this._readEntry(t);
    return e == null ? void 0 : e.text();
  }
  async readBlob(t) {
    const e = await this._readEntry(t);
    return (e == null ? void 0 : e.status) === 200
      ? await (e == null ? void 0 : e.blob())
      : void 0;
  }
  async _readEntry(t) {
    const r = (await this._entriesPromise).get(t);
    if (r) return fetch("/trace/file?path=" + encodeURIComponent(r));
  }
}
function ba(n) {
  let t =
    n.startsWith("http") || n.startsWith("blob")
      ? n
      : `file?path=${encodeURIComponent(n)}`;
  return (
    t.startsWith("https://www.dropbox.com/") &&
      (t = "https://dl.dropboxusercontent.com/" + t.substring(24)),
    t
  );
}
self.addEventListener("install", function (n) {
  self.skipWaiting();
});
self.addEventListener("activate", function (n) {
  n.waitUntil(self.clients.claim());
});
const ga = new URL(self.registration.scope).pathname,
  de = new Map(),
  We = new Map();
async function ya(n, t, e, r) {
  var o;
  await Ir();
  let s = We.get(e);
  s || ((s = new Set()), We.set(e, s)), s.add(n);
  const i = new es();
  try {
    const [l, _] = Fr(r, [0.5, 0.4, 0.1]),
      d = n.endsWith("json") ? new wa(n) : new ma(n, l);
    await i.load(d, _);
  } catch (l) {
    throw (
      (console.error(l),
      (o = l == null ? void 0 : l.message) != null &&
      o.includes("Cannot find .trace file") &&
      (await i.hasEntry("index.html"))
        ? new Error(
            "Could not load trace. Did you upload a Playwright HTML report instead? Make sure to extract the archive first and then double-click the index.html file or put it on a web server.",
          )
        : l instanceof Cn
          ? new Error(`Could not load trace from ${t || n}. ${l.message}`)
          : t
            ? new Error(
                `Could not load trace from ${t}. Make sure to upload a valid Playwright trace.`,
              )
            : new Error(
                `Could not load trace from ${n}. Make sure a valid Playwright Trace is accessible over this url.`,
              ))
    );
  }
  const a = new Kr(i.storage(), (l) => i.resourceForSha1(l));
  return de.set(n, { traceModel: i, snapshotServer: a }), i;
}
async function xa(n) {
  if (n.request.url.startsWith("chrome-extension://")) return fetch(n.request);
  const t = n.request,
    e = await self.clients.get(n.clientId),
    r = self.registration.scope.startsWith("https://");
  if (t.url.startsWith(self.registration.scope)) {
    const l = new URL(tt(t.url)),
      _ = l.pathname.substring(ga.length - 1);
    if (_ === "/ping") return await Ir(), new Response(null, { status: 200 });
    const d = l.searchParams.get("trace");
    if (_ === "/contexts")
      try {
        const p = await ya(
          d,
          l.searchParams.get("traceFileName"),
          n.clientId,
          (h, g) => {
            e.postMessage({
              method: "progress",
              params: { done: h, total: g },
            });
          },
        );
        return new Response(JSON.stringify(p.contextEntries), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (p) {
        return new Response(
          JSON.stringify({ error: p == null ? void 0 : p.message }),
          { status: 500, headers: { "Content-Type": "application/json" } },
        );
      }
    if (_.startsWith("/snapshotInfo/")) {
      const { snapshotServer: p } = de.get(d) || {};
      return p
        ? p.serveSnapshotInfo(_, l.searchParams)
        : new Response(null, { status: 404 });
    }
    if (_.startsWith("/snapshot/")) {
      const { snapshotServer: p } = de.get(d) || {};
      if (!p) return new Response(null, { status: 404 });
      const h = p.serveSnapshot(_, l.searchParams, l.href);
      return (
        r &&
          h.headers.set("Content-Security-Policy", "upgrade-insecure-requests"),
        h
      );
    }
    if (_.startsWith("/sha1/")) {
      const p = _.slice(6);
      for (const h of de.values()) {
        const g = await h.traceModel.resourceForSha1(p);
        if (g)
          return new Response(g, { status: 200, headers: Ea(l.searchParams) });
      }
      return new Response(null, { status: 404 });
    }
    return fetch(n.request);
  }
  const s = tt(e.url),
    i = new URL(s).searchParams.get("trace"),
    { snapshotServer: a } = de.get(i) || {};
  if (!a) return new Response(null, { status: 404 });
  const o = [t.url];
  return (
    r &&
      t.url.startsWith("https://") &&
      o.push(t.url.replace(/^https/, "http")),
    a.serveResource(o, t.method, s)
  );
}
function Ea(n) {
  const t = n.get("dn"),
    e = n.get("dct");
  if (!t) return;
  const r = new Headers();
  return (
    r.set(
      "Content-Disposition",
      `attachment; filename="attachment"; filename*=UTF-8''${encodeURIComponent(t)}`,
    ),
    e && r.set("Content-Type", e),
    r
  );
}
async function Ir() {
  const n = await self.clients.matchAll(),
    t = new Set();
  for (const [e, r] of We)
    n.find((s) => s.id === e) ? r.forEach((s) => t.add(s)) : We.delete(e);
  for (const e of de.keys()) t.has(e) || de.delete(e);
}
self.addEventListener("fetch", function (n) {
  n.respondWith(xa(n));
});
