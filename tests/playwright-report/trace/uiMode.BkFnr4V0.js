function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./assets/xtermModule-BeNbaIVa.js",
      "./xtermModule.DSXBckUd.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import {
  u as Ft,
  r as V,
  b as Ot,
  _ as At,
  d as Wt,
  e as Ut,
  j as n,
  R as c,
  E as zt,
  s as wt,
  f as it,
  m as Vt,
  g as K,
  T as F,
  h as Kt,
  i as $t,
  k as ht,
  W as Ht,
  M as qt,
  l as ft,
  n as Yt,
  S as Qt,
  o as Xt,
  a as Gt,
  c as Jt,
} from "./assets/workbench-D0cirtfA.js";
import { T as Zt, W as te } from "./assets/testServerConnection-DeE2kSzz.js";
var ee = {};
class et {
  constructor(t, e = {}) {
    (this.isListing = !1),
      (this._tests = new Map()),
      (this._rootSuite = new $("", "root")),
      (this._options = e),
      (this._reporter = t);
  }
  reset() {
    (this._rootSuite._entries = []), this._tests.clear();
  }
  dispatch(t) {
    const { method: e, params: s } = t;
    if (e === "onConfigure") {
      this._onConfigure(s.config);
      return;
    }
    if (e === "onProject") {
      this._onProject(s.project);
      return;
    }
    if (e === "onBegin") {
      this._onBegin();
      return;
    }
    if (e === "onTestBegin") {
      this._onTestBegin(s.testId, s.result);
      return;
    }
    if (e === "onTestEnd") {
      this._onTestEnd(s.test, s.result);
      return;
    }
    if (e === "onStepBegin") {
      this._onStepBegin(s.testId, s.resultId, s.step);
      return;
    }
    if (e === "onStepEnd") {
      this._onStepEnd(s.testId, s.resultId, s.step);
      return;
    }
    if (e === "onError") {
      this._onError(s.error);
      return;
    }
    if (e === "onStdIO") {
      this._onStdIO(s.type, s.testId, s.resultId, s.data, s.isBase64);
      return;
    }
    if (e === "onEnd") return this._onEnd(s.result);
    if (e === "onExit") return this._onExit();
  }
  _onConfigure(t) {
    var e, s;
    (this._rootDir = t.rootDir),
      (this._config = this._parseConfig(t)),
      (s = (e = this._reporter).onConfigure) == null || s.call(e, this._config);
  }
  _onProject(t) {
    let e = this._options.mergeProjects
      ? this._rootSuite.suites.find((s) => s.project().name === t.name)
      : void 0;
    e || ((e = new $(t.name, "project")), this._rootSuite._addSuite(e)),
      (e._project = this._parseProject(t));
    for (const s of t.suites) this._mergeSuiteInto(s, e);
  }
  _onBegin() {
    var t, e;
    (e = (t = this._reporter).onBegin) == null || e.call(t, this._rootSuite);
  }
  _onTestBegin(t, e) {
    var l, a;
    const s = this._tests.get(t);
    this._options.clearPreviousResultsWhenTestBegins && (s.results = []);
    const i = s._createTestResult(e.id);
    (i.retry = e.retry),
      (i.workerIndex = e.workerIndex),
      (i.parallelIndex = e.parallelIndex),
      i.setStartTimeNumber(e.startTime),
      (a = (l = this._reporter).onTestBegin) == null || a.call(l, s, i);
  }
  _onTestEnd(t, e) {
    var l, a, g;
    const s = this._tests.get(t.testId);
    (s.timeout = t.timeout),
      (s.expectedStatus = t.expectedStatus),
      (s.annotations = t.annotations);
    const i = s.results.find((r) => r._id === e.id);
    (i.duration = e.duration),
      (i.status = e.status),
      (i.errors = e.errors),
      (i.error = (l = i.errors) == null ? void 0 : l[0]),
      (i.attachments = this._parseAttachments(e.attachments)),
      (g = (a = this._reporter).onTestEnd) == null || g.call(a, s, i),
      (i._stepMap = new Map());
  }
  _onStepBegin(t, e, s) {
    var m, d;
    const i = this._tests.get(t),
      l = i.results.find((p) => p._id === e),
      a = s.parentStepId ? l._stepMap.get(s.parentStepId) : void 0,
      g = this._absoluteLocation(s.location),
      r = new ie(s, a, g);
    a ? a.steps.push(r) : l.steps.push(r),
      l._stepMap.set(s.id, r),
      (d = (m = this._reporter).onStepBegin) == null || d.call(m, i, l, r);
  }
  _onStepEnd(t, e, s) {
    var g, r;
    const i = this._tests.get(t),
      l = i.results.find((m) => m._id === e),
      a = l._stepMap.get(s.id);
    (a.duration = s.duration),
      (a.error = s.error),
      (r = (g = this._reporter).onStepEnd) == null || r.call(g, i, l, a);
  }
  _onError(t) {
    var e, s;
    (s = (e = this._reporter).onError) == null || s.call(e, t);
  }
  _onStdIO(t, e, s, i, l) {
    var m, d, p, j;
    const a = l ? (globalThis.Buffer ? Buffer.from(i, "base64") : atob(i)) : i,
      g = e ? this._tests.get(e) : void 0,
      r = g && s ? g.results.find((h) => h._id === s) : void 0;
    t === "stdout"
      ? (r == null || r.stdout.push(a),
        (d = (m = this._reporter).onStdOut) == null || d.call(m, a, g, r))
      : (r == null || r.stderr.push(a),
        (j = (p = this._reporter).onStdErr) == null || j.call(p, a, g, r));
  }
  async _onEnd(t) {
    var e, s;
    await ((s = (e = this._reporter).onEnd) == null
      ? void 0
      : s.call(e, {
          status: t.status,
          startTime: new Date(t.startTime),
          duration: t.duration,
        }));
  }
  _onExit() {
    var t, e;
    return (e = (t = this._reporter).onExit) == null ? void 0 : e.call(t);
  }
  _parseConfig(t) {
    const e = { ...re, ...t };
    return (
      this._options.configOverrides &&
        ((e.configFile = this._options.configOverrides.configFile),
        (e.reportSlowTests = this._options.configOverrides.reportSlowTests),
        (e.quiet = this._options.configOverrides.quiet),
        (e.reporter = [...this._options.configOverrides.reporter])),
      e
    );
  }
  _parseProject(t) {
    return {
      metadata: t.metadata,
      name: t.name,
      outputDir: this._absolutePath(t.outputDir),
      repeatEach: t.repeatEach,
      retries: t.retries,
      testDir: this._absolutePath(t.testDir),
      testIgnore: X(t.testIgnore),
      testMatch: X(t.testMatch),
      timeout: t.timeout,
      grep: X(t.grep),
      grepInvert: X(t.grepInvert),
      dependencies: t.dependencies,
      teardown: t.teardown,
      snapshotDir: this._absolutePath(t.snapshotDir),
      use: {},
    };
  }
  _parseAttachments(t) {
    return t.map((e) => ({
      ...e,
      body:
        e.base64 && globalThis.Buffer
          ? Buffer.from(e.base64, "base64")
          : void 0,
    }));
  }
  _mergeSuiteInto(t, e) {
    let s = e.suites.find((i) => i.title === t.title);
    s ||
      ((s = new $(t.title, e.type === "project" ? "file" : "describe")),
      e._addSuite(s)),
      (s.location = this._absoluteLocation(t.location)),
      t.entries.forEach((i) => {
        "testId" in i ? this._mergeTestInto(i, s) : this._mergeSuiteInto(i, s);
      });
  }
  _mergeTestInto(t, e) {
    let s = this._options.mergeTestCases
      ? e.tests.find(
          (i) => i.title === t.title && i.repeatEachIndex === t.repeatEachIndex,
        )
      : void 0;
    s ||
      ((s = new se(
        t.testId,
        t.title,
        this._absoluteLocation(t.location),
        t.repeatEachIndex,
      )),
      e._addTest(s),
      this._tests.set(s.id, s)),
      this._updateTest(t, s);
  }
  _updateTest(t, e) {
    return (
      (e.id = t.testId),
      (e.location = this._absoluteLocation(t.location)),
      (e.retries = t.retries),
      (e.tags = t.tags ?? []),
      (e.annotations = t.annotations ?? []),
      e
    );
  }
  _absoluteLocation(t) {
    return t && { ...t, file: this._absolutePath(t.file) };
  }
  _absolutePath(t) {
    if (t !== void 0)
      return this._options.resolvePath
        ? this._options.resolvePath(this._rootDir, t)
        : this._rootDir + "/" + t;
  }
}
class $ {
  constructor(t, e) {
    (this._entries = []),
      (this._requireFile = ""),
      (this._parallelMode = "none"),
      (this.title = t),
      (this._type = e);
  }
  get type() {
    return this._type;
  }
  get suites() {
    return this._entries.filter((t) => t.type !== "test");
  }
  get tests() {
    return this._entries.filter((t) => t.type === "test");
  }
  entries() {
    return this._entries;
  }
  allTests() {
    const t = [],
      e = (s) => {
        for (const i of s.entries()) i.type === "test" ? t.push(i) : e(i);
      };
    return e(this), t;
  }
  titlePath() {
    const t = this.parent ? this.parent.titlePath() : [];
    return (this.title || this._type !== "describe") && t.push(this.title), t;
  }
  project() {
    var t;
    return this._project ?? ((t = this.parent) == null ? void 0 : t.project());
  }
  _addTest(t) {
    (t.parent = this), this._entries.push(t);
  }
  _addSuite(t) {
    (t.parent = this), this._entries.push(t);
  }
}
class se {
  constructor(t, e, s, i) {
    (this.fn = () => {}),
      (this.results = []),
      (this.type = "test"),
      (this.expectedStatus = "passed"),
      (this.timeout = 0),
      (this.annotations = []),
      (this.retries = 0),
      (this.tags = []),
      (this.repeatEachIndex = 0),
      (this.id = t),
      (this.title = e),
      (this.location = s),
      (this.repeatEachIndex = i);
  }
  titlePath() {
    const t = this.parent ? this.parent.titlePath() : [];
    return t.push(this.title), t;
  }
  outcome() {
    return ne(this);
  }
  ok() {
    const t = this.outcome();
    return t === "expected" || t === "flaky" || t === "skipped";
  }
  _createTestResult(t) {
    const e = new oe(this.results.length, t);
    return this.results.push(e), e;
  }
}
class ie {
  constructor(t, e, s) {
    (this.duration = -1),
      (this.steps = []),
      (this._startTime = 0),
      (this.title = t.title),
      (this.category = t.category),
      (this.location = s),
      (this.parent = e),
      (this._startTime = t.startTime);
  }
  titlePath() {
    var e;
    return [
      ...(((e = this.parent) == null ? void 0 : e.titlePath()) || []),
      this.title,
    ];
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(t) {
    this._startTime = +t;
  }
}
class oe {
  constructor(t, e) {
    (this.parallelIndex = -1),
      (this.workerIndex = -1),
      (this.duration = -1),
      (this.stdout = []),
      (this.stderr = []),
      (this.attachments = []),
      (this.status = "skipped"),
      (this.steps = []),
      (this.errors = []),
      (this._stepMap = new Map()),
      (this._startTime = 0),
      (this.retry = t),
      (this._id = e);
  }
  setStartTimeNumber(t) {
    this._startTime = t;
  }
  get startTime() {
    return new Date(this._startTime);
  }
  set startTime(t) {
    this._startTime = +t;
  }
}
const re = {
  forbidOnly: !1,
  fullyParallel: !1,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: "always",
  projects: [],
  reporter: [[ee.CI ? "dot" : "list"]],
  reportSlowTests: { max: 5, threshold: 15e3 },
  configFile: "",
  rootDir: "",
  quiet: !1,
  shard: null,
  updateSnapshots: "missing",
  version: "",
  workers: 0,
  webServer: null,
};
function X(o) {
  return o.map((t) =>
    t.s !== void 0 ? t.s : new RegExp(t.r.source, t.r.flags),
  );
}
function ne(o) {
  let t = 0,
    e = 0,
    s = 0;
  for (const i of o.results)
    i.status === "interrupted" ||
      (i.status === "skipped" && o.expectedStatus === "skipped"
        ? ++t
        : i.status === "skipped" ||
          (i.status === o.expectedStatus ? ++e : ++s));
  return e === 0 && s === 0
    ? "skipped"
    : s === 0
      ? "expected"
      : e === 0 && t === 0
        ? "unexpected"
        : "flaky";
}
class st {
  constructor(t, e, s, i, l) {
    (this._treeItemById = new Map()), (this._treeItemByTestId = new Map());
    const a = i && [...i.values()].some(Boolean);
    (this.pathSeparator = l),
      (this.rootItem = {
        kind: "group",
        subKind: "folder",
        id: t,
        title: "",
        location: { file: "", line: 0, column: 0 },
        duration: 0,
        parent: void 0,
        children: [],
        status: "none",
        hasLoadErrors: !1,
      }),
      this._treeItemById.set(t, this.rootItem);
    const g = (r, m, d) => {
      for (const p of m.suites) {
        const j = p.title || "<anonymous>";
        let h = d.children.find((f) => f.kind === "group" && f.title === j);
        h ||
          ((h = {
            kind: "group",
            subKind: "describe",
            id: "suite:" + m.titlePath().join("") + "" + j,
            title: j,
            location: p.location,
            duration: 0,
            parent: d,
            children: [],
            status: "none",
            hasLoadErrors: !1,
          }),
          this._addChild(d, h)),
          g(r, p, h);
      }
      for (const p of m.tests) {
        const j = p.title;
        let h = d.children.find((E) => E.kind !== "group" && E.title === j);
        h ||
          ((h = {
            kind: "case",
            id: "test:" + p.titlePath().join(""),
            title: j,
            parent: d,
            children: [],
            tests: [],
            location: p.location,
            duration: 0,
            status: "none",
            project: void 0,
            test: void 0,
            tags: p.tags,
          }),
          this._addChild(d, h));
        const f = p.results[0];
        let S = "none";
        (f == null ? void 0 : f[H]) === "scheduled"
          ? (S = "scheduled")
          : (f == null ? void 0 : f[H]) === "running"
            ? (S = "running")
            : (f == null ? void 0 : f.status) === "skipped"
              ? (S = "skipped")
              : (f == null ? void 0 : f.status) === "interrupted"
                ? (S = "none")
                : f && p.outcome() !== "expected"
                  ? (S = "failed")
                  : f && p.outcome() === "expected" && (S = "passed"),
          h.tests.push(p);
        const T = {
          kind: "test",
          id: p.id,
          title: r.name,
          location: p.location,
          test: p,
          parent: h,
          children: [],
          status: S,
          duration: p.results.length ? Math.max(0, p.results[0].duration) : 0,
          project: r,
        };
        this._addChild(h, T),
          this._treeItemByTestId.set(p.id, T),
          (h.duration = h.children.reduce((E, R) => E + R.duration, 0));
      }
    };
    for (const r of (e == null ? void 0 : e.suites) || [])
      if (!(a && !i.get(r.title)))
        for (const m of r.suites) {
          const d = this._fileItem(m.location.file.split(l), !0);
          g(r.project(), m, d);
        }
    for (const r of s) {
      if (!r.location) continue;
      const m = this._fileItem(r.location.file.split(l), !0);
      m.hasLoadErrors = !0;
    }
  }
  _addChild(t, e) {
    t.children.push(e), (e.parent = t), this._treeItemById.set(e.id, e);
  }
  filterTree(t, e, s) {
    const i = t.trim().toLowerCase().split(" "),
      l = [...e.values()].some(Boolean),
      a = (r) => {
        const m = [...r.tests[0].titlePath(), ...r.tests[0].tags]
          .join(" ")
          .toLowerCase();
        return !i.every((d) => m.includes(d)) &&
          !r.tests.some((d) => (s == null ? void 0 : s.has(d.id)))
          ? !1
          : ((r.children = r.children.filter(
              (d) =>
                !l ||
                (s == null ? void 0 : s.has(d.test.id)) ||
                e.get(d.status),
            )),
            (r.tests = r.children.map((d) => d.test)),
            !!r.children.length);
      },
      g = (r) => {
        const m = [];
        for (const d of r.children)
          d.kind === "case"
            ? a(d) && m.push(d)
            : (g(d), (d.children.length || d.hasLoadErrors) && m.push(d));
        r.children = m;
      };
    g(this.rootItem);
  }
  _fileItem(t, e) {
    if (t.length === 0) return this.rootItem;
    const s = t.join(this.pathSeparator),
      i = this._treeItemById.get(s);
    if (i) return i;
    const l = this._fileItem(t.slice(0, t.length - 1), !1),
      a = {
        kind: "group",
        subKind: e ? "file" : "folder",
        id: s,
        title: t[t.length - 1],
        location: { file: s, line: 0, column: 0 },
        duration: 0,
        parent: l,
        children: [],
        status: "none",
        hasLoadErrors: !1,
      };
    return this._addChild(l, a), a;
  }
  sortAndPropagateStatus() {
    _t(this.rootItem);
  }
  flattenForSingleProject() {
    const t = (e) => {
      e.kind === "case" && e.children.length === 1
        ? ((e.project = e.children[0].project),
          (e.test = e.children[0].test),
          (e.children = []),
          this._treeItemByTestId.set(e.test.id, e))
        : e.children.forEach(t);
    };
    t(this.rootItem);
  }
  shortenRoot() {
    let t = this.rootItem;
    for (
      ;
      t.children.length === 1 &&
      t.children[0].kind === "group" &&
      t.children[0].subKind === "folder";

    )
      t = t.children[0];
    (t.location = this.rootItem.location), (this.rootItem = t);
  }
  testIds() {
    const t = new Set(),
      e = (s) => {
        s.kind === "case" && s.tests.forEach((i) => t.add(i.id)),
          s.children.forEach(e);
      };
    return e(this.rootItem), t;
  }
  fileNames() {
    const t = new Set(),
      e = (s) => {
        s.kind === "group" && s.subKind === "file"
          ? t.add(s.id)
          : s.children.forEach(e);
      };
    return e(this.rootItem), [...t];
  }
  flatTreeItems() {
    const t = [],
      e = (s) => {
        t.push(s), s.children.forEach(e);
      };
    return e(this.rootItem), t;
  }
  treeItemById(t) {
    return this._treeItemById.get(t);
  }
  collectTestIds(t) {
    return t ? ae(t) : new Set();
  }
}
function _t(o) {
  for (const a of o.children) _t(a);
  o.kind === "group" &&
    o.children.sort(
      (a, g) =>
        a.location.file.localeCompare(g.location.file) ||
        a.location.line - g.location.line,
    );
  let t = o.children.length > 0,
    e = o.children.length > 0,
    s = !1,
    i = !1,
    l = !1;
  for (const a of o.children)
    (e = e && a.status === "skipped"),
      (t = t && (a.status === "passed" || a.status === "skipped")),
      (s = s || a.status === "failed"),
      (i = i || a.status === "running"),
      (l = l || a.status === "scheduled");
  i
    ? (o.status = "running")
    : l
      ? (o.status = "scheduled")
      : s
        ? (o.status = "failed")
        : e
          ? (o.status = "skipped")
          : t && (o.status = "passed");
}
function ae(o) {
  const t = new Set(),
    e = (s) => {
      var i;
      s.kind === "case"
        ? s.tests.map((l) => l.id).forEach((l) => t.add(l))
        : s.kind === "test"
          ? t.add(s.id)
          : (i = s.children) == null || i.forEach(e);
    };
  return e(o), t;
}
const H = Symbol("statusEx");
class le {
  constructor(t) {
    (this.loadErrors = []),
      (this.progress = { total: 0, passed: 0, failed: 0, skipped: 0 }),
      (this._lastRunTestCount = 0),
      (this._receiver = new et(this._createReporter(), {
        mergeProjects: !0,
        mergeTestCases: !0,
        resolvePath: (e, s) => e + t.pathSeparator + s,
        clearPreviousResultsWhenTestBegins: !0,
      })),
      (this._options = t);
  }
  _createReporter() {
    return {
      version: () => "v2",
      onConfigure: (t) => {
        (this.config = t),
          (this._lastRunReceiver = new et(
            {
              onBegin: (e) => {
                (this._lastRunTestCount = e.allTests().length),
                  (this._lastRunReceiver = void 0);
              },
            },
            {
              mergeProjects: !0,
              mergeTestCases: !1,
              resolvePath: (e, s) => e + this._options.pathSeparator + s,
            },
          ));
      },
      onBegin: (t) => {
        var e;
        if (
          (this.rootSuite || (this.rootSuite = t), this._testResultsSnapshot)
        ) {
          for (const s of this.rootSuite.allTests())
            s.results =
              ((e = this._testResultsSnapshot) == null
                ? void 0
                : e.get(s.id)) || s.results;
          this._testResultsSnapshot = void 0;
        }
        (this.progress.total = this._lastRunTestCount),
          (this.progress.passed = 0),
          (this.progress.failed = 0),
          (this.progress.skipped = 0),
          this._options.onUpdate(!0);
      },
      onEnd: () => {
        this._options.onUpdate(!0);
      },
      onTestBegin: (t, e) => {
        (e[H] = "running"), this._options.onUpdate();
      },
      onTestEnd: (t, e) => {
        t.outcome() === "skipped"
          ? ++this.progress.skipped
          : t.outcome() === "unexpected"
            ? ++this.progress.failed
            : ++this.progress.passed,
          (e[H] = e.status),
          this._options.onUpdate();
      },
      onError: (t) => this._handleOnError(t),
      printsToStdio: () => !1,
      onStdOut: () => {},
      onStdErr: () => {},
      onExit: () => {},
      onStepBegin: () => {},
      onStepEnd: () => {},
    };
  }
  processGlobalReport(t) {
    const e = new et({
      onConfigure: (s) => {
        this.config = s;
      },
      onError: (s) => this._handleOnError(s),
    });
    for (const s of t) e.dispatch(s);
  }
  processListReport(t) {
    var s;
    const e = ((s = this.rootSuite) == null ? void 0 : s.allTests()) || [];
    (this._testResultsSnapshot = new Map(e.map((i) => [i.id, i.results]))),
      this._receiver.reset();
    for (const i of t) this._receiver.dispatch(i);
  }
  processTestReportEvent(t) {
    var e, s, i;
    (s = (e = this._lastRunReceiver) == null ? void 0 : e.dispatch(t)) ==
      null || s.catch(() => {}),
      (i = this._receiver.dispatch(t)) == null || i.catch(() => {});
  }
  _handleOnError(t) {
    var e, s;
    this.loadErrors.push(t),
      (s = (e = this._options).onError) == null || s.call(e, t),
      this._options.onUpdate();
  }
  asModel() {
    return {
      rootSuite: this.rootSuite || new $("", "root"),
      config: this.config,
      loadErrors: this.loadErrors,
      progress: this.progress,
    };
  }
}
const ce = ({ source: o }) => {
    const [t, e] = Ft(),
      [s, i] = V.useState(Ot()),
      [l] = V.useState(
        At(
          () => import("./assets/xtermModule-BeNbaIVa.js"),
          __vite__mapDeps([0, 1]),
          import.meta.url,
        ).then((g) => g.default),
      ),
      a = V.useRef(null);
    return (
      V.useEffect(() => (Wt(i), () => Ut(i)), []),
      V.useEffect(() => {
        const g = o.write,
          r = o.clear;
        return (
          (async () => {
            const { Terminal: m, FitAddon: d } = await l,
              p = e.current;
            if (!p) return;
            const j = s === "dark-mode" ? de : ue;
            if (a.current && a.current.terminal.options.theme === j) return;
            a.current && (p.textContent = "");
            const h = new m({
                convertEol: !0,
                fontSize: 13,
                scrollback: 1e4,
                fontFamily: "var(--vscode-editor-font-family)",
                theme: j,
              }),
              f = new d();
            h.loadAddon(f);
            for (const S of o.pending) h.write(S);
            (o.write = (S) => {
              o.pending.push(S), h.write(S);
            }),
              (o.clear = () => {
                (o.pending = []), h.clear();
              }),
              h.open(p),
              f.fit(),
              (a.current = { terminal: h, fitAddon: f });
          })(),
          () => {
            (o.clear = r), (o.write = g);
          }
        );
      }, [l, a, e, o, s]),
      V.useEffect(() => {
        setTimeout(() => {
          a.current &&
            (a.current.fitAddon.fit(),
            o.resize(a.current.terminal.cols, a.current.terminal.rows));
        }, 250);
      }, [t, o]),
      n.jsx("div", {
        "data-testid": "output",
        className: "xterm-wrapper",
        style: { flex: "auto" },
        ref: e,
      })
    );
  },
  ue = {
    foreground: "#383a42",
    background: "#fafafa",
    cursor: "#383a42",
    black: "#000000",
    red: "#e45649",
    green: "#50a14f",
    yellow: "#c18401",
    blue: "#4078f2",
    magenta: "#a626a4",
    cyan: "#0184bc",
    white: "#a0a0a0",
    brightBlack: "#000000",
    brightRed: "#e06c75",
    brightGreen: "#98c379",
    brightYellow: "#d19a66",
    brightBlue: "#4078f2",
    brightMagenta: "#a626a4",
    brightCyan: "#0184bc",
    brightWhite: "#383a42",
    selectionBackground: "#d7d7d7",
    selectionForeground: "#383a42",
  },
  de = {
    foreground: "#f8f8f2",
    background: "#1e1e1e",
    cursor: "#f8f8f0",
    black: "#000000",
    red: "#ff5555",
    green: "#50fa7b",
    yellow: "#f1fa8c",
    blue: "#bd93f9",
    magenta: "#ff79c6",
    cyan: "#8be9fd",
    white: "#bfbfbf",
    brightBlack: "#4d4d4d",
    brightRed: "#ff6e6e",
    brightGreen: "#69ff94",
    brightYellow: "#ffffa5",
    brightBlue: "#d6acff",
    brightMagenta: "#ff92df",
    brightCyan: "#a4ffff",
    brightWhite: "#e6e6e6",
    selectionBackground: "#44475a",
    selectionForeground: "#f8f8f2",
  },
  he = ({
    filterText: o,
    setFilterText: t,
    statusFilters: e,
    setStatusFilters: s,
    projectFilters: i,
    setProjectFilters: l,
    testModel: a,
    runTests: g,
  }) => {
    const [r, m] = c.useState(!1),
      d = c.useRef(null);
    c.useEffect(() => {
      var h;
      (h = d.current) == null || h.focus();
    }, []);
    const p =
        [...e.entries()]
          .filter(([h, f]) => f)
          .map(([h]) => h)
          .join(" ") || "all",
      j =
        [...i.entries()]
          .filter(([h, f]) => f)
          .map(([h]) => h)
          .join(" ") || "all";
    return n.jsxs("div", {
      className: "filters",
      children: [
        n.jsx(zt, {
          expanded: r,
          setExpanded: m,
          title: n.jsx("input", {
            ref: d,
            type: "search",
            placeholder: "Filter (e.g. text, @tag)",
            spellCheck: !1,
            value: o,
            onChange: (h) => {
              t(h.target.value);
            },
            onKeyDown: (h) => {
              h.key === "Enter" && g();
            },
          }),
        }),
        n.jsxs("div", {
          className: "filter-summary",
          title:
            "Status: " +
            p +
            `
Projects: ` +
            j,
          onClick: () => m(!r),
          children: [
            n.jsx("span", { className: "filter-label", children: "Status:" }),
            " ",
            p,
            n.jsx("span", { className: "filter-label", children: "Projects:" }),
            " ",
            j,
          ],
        }),
        r &&
          n.jsxs("div", {
            className: "hbox",
            style: { marginLeft: 14, maxHeight: 200, overflowY: "auto" },
            children: [
              n.jsx("div", {
                className: "filter-list",
                children: [...e.entries()].map(([h, f]) =>
                  n.jsx(
                    "div",
                    {
                      className: "filter-entry",
                      children: n.jsxs("label", {
                        children: [
                          n.jsx("input", {
                            type: "checkbox",
                            checked: f,
                            onClick: () => {
                              const S = new Map(e);
                              S.set(h, !S.get(h)), s(S);
                            },
                          }),
                          n.jsx("div", { children: h }),
                        ],
                      }),
                    },
                    h,
                  ),
                ),
              }),
              n.jsx("div", {
                className: "filter-list",
                children: [...i.entries()].map(([h, f]) =>
                  n.jsx(
                    "div",
                    {
                      className: "filter-entry",
                      children: n.jsxs("label", {
                        children: [
                          n.jsx("input", {
                            type: "checkbox",
                            checked: f,
                            onClick: () => {
                              var E;
                              const S = new Map(i);
                              S.set(h, !S.get(h)), l(S);
                              const T =
                                (E = a == null ? void 0 : a.config) == null
                                  ? void 0
                                  : E.configFile;
                              T &&
                                wt.setObject(
                                  T + ":projects",
                                  [...S.entries()]
                                    .filter(([R, A]) => A)
                                    .map(([R]) => R),
                                );
                            },
                          }),
                          n.jsx("div", { children: h || "untitled" }),
                        ],
                      }),
                    },
                    h,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  },
  fe = ({ tag: o, style: t, onClick: e }) =>
    n.jsx("span", {
      className: it("tag", `tag-color-${pe(o)}`),
      onClick: e,
      style: { margin: "6px 0 0 6px", ...t },
      title: `Click to filter by tag: ${o}`,
      children: o,
    });
function pe(o) {
  let t = 0;
  for (let e = 0; e < o.length; e++) t = o.charCodeAt(e) + ((t << 8) - t);
  return Math.abs(t % 6);
}
const ge = $t,
  me = ({
    filterText: o,
    testModel: t,
    testServerConnection: e,
    testTree: s,
    runTests: i,
    runningState: l,
    watchAll: a,
    watchedTreeIds: g,
    setWatchedTreeIds: r,
    isLoading: m,
    onItemSelected: d,
    requestedCollapseAllCount: p,
    setFilterText: j,
    onRevealSource: h,
  }) => {
    const [f, S] = c.useState({ expandedItems: new Map() }),
      [T, E] = c.useState(),
      [R, A] = c.useState(p);
    c.useEffect(() => {
      if (R !== p) {
        f.expandedItems.clear();
        for (const x of s.flatTreeItems()) f.expandedItems.set(x.id, !1);
        A(p), E(void 0), S({ ...f });
        return;
      }
      if (!l || l.itemSelectedByUser) return;
      let u;
      const B = (x) => {
        var L;
        x.children.forEach(B),
          !u &&
            x.status === "failed" &&
            ((x.kind === "test" && l.testIds.has(x.test.id)) ||
              (x.kind === "case" &&
                l.testIds.has((L = x.tests[0]) == null ? void 0 : L.id))) &&
            (u = x);
      };
      B(s.rootItem), u && E(u.id);
    }, [l, E, s, R, A, p, f, S]);
    const { selectedTreeItem: C } = c.useMemo(() => {
      if (!t) return { selectedTreeItem: void 0 };
      const u = T ? s.treeItemById(T) : void 0,
        B = we(u, t);
      let x;
      return (
        (u == null ? void 0 : u.kind) === "test"
          ? (x = u.test)
          : (u == null ? void 0 : u.kind) === "case" &&
            u.tests.length === 1 &&
            (x = u.tests[0]),
        d({ treeItem: u, testCase: x, testFile: B }),
        { selectedTreeItem: u }
      );
    }, [d, T, t, s]);
    c.useEffect(() => {
      if (!m)
        if (a) e == null || e.watchNoReply({ fileNames: s.fileNames() });
        else {
          const u = new Set();
          for (const B of g.value) {
            const x = s.treeItemById(B),
              L = x == null ? void 0 : x.location.file;
            L && u.add(L);
          }
          e == null || e.watchNoReply({ fileNames: [...u] });
        }
    }, [m, s, a, g, e]);
    const D = (u) => {
        E(u.id), i("bounce-if-busy", s.collectTestIds(u));
      },
      J = (u, B) => {
        if ((u.preventDefault(), u.stopPropagation(), u.metaKey || u.ctrlKey)) {
          const x = o.split(" ");
          x.includes(B)
            ? j(
                x
                  .filter((L) => L !== B)
                  .join(" ")
                  .trim(),
              )
            : j((o + " " + B).trim());
        } else
          j(
            (
              o
                .split(" ")
                .filter((x) => !x.startsWith("@"))
                .join(" ") +
              " " +
              B
            ).trim(),
          );
      };
    return n.jsx(ge, {
      name: "tests",
      treeState: f,
      setTreeState: S,
      rootItem: s.rootItem,
      dataTestId: "test-tree",
      render: (u) =>
        n.jsxs("div", {
          className: "hbox ui-mode-list-item",
          children: [
            n.jsxs("div", {
              className: "ui-mode-list-item-title",
              children: [
                n.jsx("span", { title: u.title, children: u.title }),
                u.kind === "case"
                  ? u.tags.map((B) =>
                      n.jsx(
                        fe,
                        { tag: B.slice(1), onClick: (x) => J(x, B) },
                        B,
                      ),
                    )
                  : null,
              ],
            }),
            !!u.duration &&
              u.status !== "skipped" &&
              n.jsx("div", {
                className: "ui-mode-list-item-time",
                children: Vt(u.duration),
              }),
            n.jsxs(K, {
              noMinHeight: !0,
              noShadow: !0,
              children: [
                n.jsx(F, {
                  icon: "play",
                  title: "Run",
                  onClick: () => D(u),
                  disabled: !!l && !l.completed,
                }),
                n.jsx(F, {
                  icon: "go-to-file",
                  title: "Show source",
                  onClick: h,
                  style:
                    u.kind === "group" && u.subKind === "folder"
                      ? { visibility: "hidden" }
                      : {},
                }),
                !a &&
                  n.jsx(F, {
                    icon: "eye",
                    title: "Watch",
                    onClick: () => {
                      g.value.has(u.id)
                        ? g.value.delete(u.id)
                        : g.value.add(u.id),
                        r({ ...g });
                    },
                    toggled: g.value.has(u.id),
                  }),
              ],
            }),
          ],
        }),
      icon: (u) => Kt(u.status),
      selectedItem: C,
      onAccepted: D,
      onSelected: (u) => {
        l && (l.itemSelectedByUser = !0), E(u.id);
      },
      isError: (u) => (u.kind === "group" ? u.hasLoadErrors : !1),
      autoExpandDepth: o ? 5 : 1,
      noItemsMessage: m ? "Loading…" : "No tests",
    });
  };
function we(o, t) {
  if (!(!o || !t))
    return {
      file: o.location.file,
      line: o.location.line,
      column: o.location.column,
      source: {
        errors: t.loadErrors
          .filter((e) => {
            var s;
            return (
              ((s = e.location) == null ? void 0 : s.file) === o.location.file
            );
          })
          .map((e) => ({ line: e.location.line, message: e.message })),
        content: void 0,
      },
    };
}
function _e(o) {
  return `.playwright-artifacts-${o}`;
}
const ve = ({ item: o, rootDir: t, onOpenExternally: e, revealSource: s }) => {
    var f, S;
    const [i, l] = c.useState(),
      [a, g] = c.useState(0),
      r = c.useRef(null),
      { outputDir: m } = c.useMemo(
        () => ({ outputDir: o.testCase ? Se(o.testCase) : void 0 }),
        [o],
      ),
      [d, p] = c.useState(),
      j = c.useCallback((T) => p(ht(T)), [p]),
      h = d
        ? i == null
          ? void 0
          : i.model.actions.find((T) => ht(T) === d)
        : void 0;
    return (
      c.useEffect(() => {
        var A, C;
        r.current && clearTimeout(r.current);
        const T = (A = o.testCase) == null ? void 0 : A.results[0];
        if (!T) {
          l(void 0);
          return;
        }
        const E =
          T && T.duration >= 0 && T.attachments.find((D) => D.name === "trace");
        if (E && E.path) {
          pt(E.path).then((D) => l({ model: D, isLive: !1 }));
          return;
        }
        if (!m) {
          l(void 0);
          return;
        }
        const R = `${m}/${_e(T.workerIndex)}/traces/${(C = o.testCase) == null ? void 0 : C.id}.json`;
        return (
          (r.current = setTimeout(async () => {
            try {
              const D = await pt(R);
              l({ model: D, isLive: !0 });
            } catch {
              l(void 0);
            } finally {
              g(a + 1);
            }
          }, 500)),
          () => {
            r.current && clearTimeout(r.current);
          }
        );
      }, [m, o, l, a, g]),
      n.jsx(
        Ht,
        {
          model: i == null ? void 0 : i.model,
          showSourcesFirst: !0,
          rootDir: t,
          initialSelection: h,
          onSelectionChanged: j,
          fallbackLocation: o.testFile,
          isLive: i == null ? void 0 : i.isLive,
          status: (f = o.treeItem) == null ? void 0 : f.status,
          annotations:
            ((S = o.testCase) == null ? void 0 : S.annotations) || [],
          onOpenExternally: e,
          revealSource: s,
        },
        "workbench",
      )
    );
  },
  Se = (o) => {
    var t;
    for (let e = o.parent; e; e = e.parent)
      if (e.project()) return (t = e.project()) == null ? void 0 : t.outputDir;
  };
async function pt(o) {
  const t = new URLSearchParams();
  t.set("trace", o);
  const s = await (await fetch(`contexts?${t.toString()}`)).json();
  return new qt(s);
}
const G = navigator.userAgent.toLowerCase().includes("windows") ? "\\" : "/";
let gt = { cols: 80, rows: 24 };
const U = {
    pending: [],
    clear: () => {},
    write: (o) => U.pending.push(o),
    resize: () => {},
  },
  M = new URLSearchParams(window.location.search),
  xe = M.get("ws"),
  vt = new URL(`../${xe}`, window.location.toString());
vt.protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
const b = {
  args: M.getAll("arg"),
  grep: M.get("grep") || void 0,
  grepInvert: M.get("grepInvert") || void 0,
  projects: M.getAll("project"),
  workers: M.get("workers") || void 0,
  timeout: M.has("timeout") ? +M.get("timeout") : void 0,
  headed: M.has("headed"),
  outputDir: M.get("outputDir") || void 0,
  updateSnapshots: M.get("updateSnapshots") || void 0,
  reporters: M.has("reporter") ? M.getAll("reporter") : void 0,
};
b.updateSnapshots &&
  !["all", "none", "missing"].includes(b.updateSnapshots) &&
  (b.updateSnapshots = void 0);
const mt = navigator.platform === "MacIntel",
  be = ({}) => {
    var dt;
    const [o, t] = c.useState(""),
      [e, s] = c.useState(!1),
      [i, l] = c.useState(
        new Map([
          ["passed", !1],
          ["failed", !1],
          ["skipped", !1],
        ]),
      ),
      [a, g] = c.useState(new Map()),
      [r, m] = c.useState(),
      [d, p] = c.useState(),
      [j, h] = c.useState({}),
      [f, S] = c.useState(new Set()),
      [T, E] = c.useState(!1),
      [R, A] = c.useState(),
      C = R && !R.completed,
      [D, J] = ft("watch-all", !1),
      [u, B] = c.useState({ value: new Set() }),
      x = c.useRef(Promise.resolve()),
      L = c.useRef(new Set()),
      [ot, St] = c.useState(0),
      [xt, bt] = c.useState(!1),
      [rt, nt] = c.useState(!0),
      [v, Tt] = c.useState(),
      [q, kt] = c.useState(),
      [Y, jt] = c.useState(!1);
    c.useState(!1);
    const [Et, at] = c.useState(!1),
      yt = c.useCallback(() => at(!0), [at]),
      It = !1,
      [lt, Te] = c.useState(b.workers === "1"),
      [ct, ke] = c.useState(b.headed),
      [ut, je] = c.useState(b.updateSnapshots === "all"),
      [Rt, Bt] = ft("show-route-actions", !0),
      [Ct, Nt] = Yt(),
      Dt = c.useRef(null),
      Q = c.useCallback(() => {
        Tt(new Zt(new te(vt)));
      }, []);
    c.useEffect(() => {
      var _;
      (_ = Dt.current) == null || _.focus(), E(!0), Q();
    }, [Q]),
      c.useEffect(() => {
        if (!v) return;
        const _ = [
          v.onStdio((w) => {
            if (w.buffer) {
              const k = atob(w.buffer);
              U.write(k);
            } else U.write(w.text);
          }),
          v.onClose(() => bt(!0)),
        ];
        return (
          (U.resize = (w, k) => {
            (gt = { cols: w, rows: k }),
              v.resizeTerminalNoReply({ cols: w, rows: k });
          }),
          () => {
            for (const w of _) w.dispose();
          }
        );
      }, [v]),
      c.useEffect(() => {
        if (!v) return;
        let _;
        const w = new le({
          onUpdate: (k) => {
            clearTimeout(_),
              (_ = void 0),
              k
                ? m(w.asModel())
                : _ ||
                  (_ = setTimeout(() => {
                    m(w.asModel());
                  }, 250));
          },
          onError: (k) => {
            U.write(
              (k.stack || k.value || "") +
                `
`,
            );
          },
          pathSeparator: G,
        });
        return (
          kt(w),
          m(void 0),
          E(!0),
          B({ value: new Set() }),
          (async () => {
            try {
              await v.initialize({ interceptStdio: !0, watchTestDirs: !0 });
              const { status: k, report: I } = await v.runGlobalSetup({
                outputDir: b.outputDir,
              });
              if ((w.processGlobalReport(I), k !== "passed")) return;
              const N = await v.listTests({
                projects: b.projects,
                locations: b.args,
                grep: b.grep,
                grepInvert: b.grepInvert,
                outputDir: b.outputDir,
              });
              w.processListReport(N.report),
                v.onReport((P) => {
                  w.processTestReportEvent(P);
                });
              const { hasBrowsers: O } = await v.checkBrowsers({});
              nt(O);
            } finally {
              E(!1);
            }
          })(),
          () => {
            clearTimeout(_);
          }
        );
      }, [v]),
      c.useEffect(() => {
        if (!r) return;
        const { config: _, rootSuite: w } = r,
          k = _.configFile
            ? wt.getObject(_.configFile + ":projects", void 0)
            : void 0,
          I = new Map(a);
        for (const N of I.keys())
          w.suites.find((O) => O.title === N) || I.delete(N);
        for (const N of w.suites)
          I.has(N.title) ||
            I.set(N.title, !!(k != null && k.includes(N.title)));
        !k &&
          I.size &&
          ![...I.values()].includes(!0) &&
          I.set(I.entries().next().value[0], !0),
          (a.size !== I.size || [...a].some(([N, O]) => I.get(N) !== O)) &&
            g(I);
      }, [a, r]),
      c.useEffect(() => {
        C && r != null && r.progress ? p(r.progress) : r || p(void 0);
      }, [r, C]);
    const { testTree: Pt } = c.useMemo(() => {
        if (!r) return { testTree: new st("", new $("", "root"), [], a, G) };
        const _ = new st("", r.rootSuite, r.loadErrors, a, G);
        return (
          _.filterTree(o, i, C ? (R == null ? void 0 : R.testIds) : void 0),
          _.sortAndPropagateStatus(),
          _.shortenRoot(),
          _.flattenForSingleProject(),
          S(_.testIds()),
          { testTree: _ }
        );
      }, [o, r, i, a, S, R, C]),
      z = c.useCallback(
        (_, w) => {
          !v ||
            !r ||
            (_ === "bounce-if-busy" && C) ||
            ((L.current = new Set([...L.current, ...w])),
            (x.current = x.current.then(async () => {
              var N, O, P;
              const k = L.current;
              if (((L.current = new Set()), !k.size)) return;
              {
                for (const y of ((N = r.rootSuite) == null
                  ? void 0
                  : N.allTests()) || [])
                  if (k.has(y.id)) {
                    y.results = [];
                    const W = y._createTestResult("pending");
                    W[H] = "scheduled";
                  }
                m({ ...r });
              }
              const I = "  [" + new Date().toLocaleTimeString() + "]";
              U.write(
                "\x1B[2m—".repeat(Math.max(0, gt.cols - I.length)) +
                  I +
                  "\x1B[22m",
              ),
                p({ total: 0, passed: 0, failed: 0, skipped: 0 }),
                A({ testIds: k }),
                await v.runTests({
                  locations: b.args,
                  grep: b.grep,
                  grepInvert: b.grepInvert,
                  testIds: [...k],
                  projects: [...a].filter(([y, W]) => W).map(([y]) => y),
                  workers: lt ? "1" : b.workers === "1" ? void 0 : b.workers,
                  timeout: b.timeout,
                  headed: ct,
                  outputDir: b.outputDir,
                  updateSnapshots: ut ? "all" : b.updateSnapshots,
                  reporters: b.reporters,
                  trace: "on",
                });
              for (const y of ((O = r.rootSuite) == null
                ? void 0
                : O.allTests()) || [])
                ((P = y.results[0]) == null ? void 0 : P.duration) === -1 &&
                  (y.results = []);
              m({ ...r }), A((y) => (y ? { ...y, completed: !0 } : void 0));
            })));
        },
        [a, C, r, v, lt, ct, ut],
      );
    c.useEffect(() => {
      if (!v || !q) return;
      const _ = v.onTestFilesChanged(async (w) => {
        if (
          ((x.current = x.current.then(async () => {
            E(!0);
            try {
              const P = await v.listTests({
                projects: b.projects,
                locations: b.args,
                grep: b.grep,
                grepInvert: b.grepInvert,
                outputDir: b.outputDir,
              });
              q.processListReport(P.report);
            } catch (P) {
              console.log(P);
            } finally {
              E(!1);
            }
          })),
          await x.current,
          w.testFiles.length === 0)
        )
          return;
        const k = q.asModel(),
          I = new st("", k.rootSuite, k.loadErrors, a, G),
          N = [],
          O = new Set(w.testFiles);
        if (D) {
          const P = (y) => {
            const W = y.location.file;
            W && O.has(W) && N.push(...I.collectTestIds(y)),
              y.kind === "group" &&
                y.subKind === "folder" &&
                y.children.forEach(P);
          };
          P(I.rootItem);
        } else
          for (const P of u.value) {
            const y = I.treeItemById(P),
              W = y == null ? void 0 : y.location.file;
            W && O.has(W) && N.push(...I.collectTestIds(y));
          }
        z("queue-if-busy", new Set(N));
      });
      return () => _.dispose();
    }, [z, v, D, u, q, a]),
      c.useEffect(() => {
        if (!v) return;
        const _ = (w) => {
          w.code === "Backquote" && w.ctrlKey
            ? (w.preventDefault(), s(!e))
            : w.code === "F5" && w.shiftKey
              ? (w.preventDefault(), v == null || v.stopTestsNoReply({}))
              : w.code === "F5" && (w.preventDefault(), z("bounce-if-busy", f));
        };
        return (
          addEventListener("keydown", _),
          () => {
            removeEventListener("keydown", _);
          }
        );
      }, [z, Q, v, f, e]);
    const Z = c.useRef(null),
      Mt = c.useCallback((_) => {
        var w;
        _.preventDefault(),
          _.stopPropagation(),
          (w = Z.current) == null || w.showModal();
      }, []),
      tt = c.useCallback((_) => {
        var w;
        _.preventDefault(),
          _.stopPropagation(),
          (w = Z.current) == null || w.close();
      }, []),
      Lt = c.useCallback(
        (_) => {
          tt(_),
            s(!0),
            v == null ||
              v.installBrowsers({}).then(async () => {
                s(!1);
                const { hasBrowsers: w } = await (v == null
                  ? void 0
                  : v.checkBrowsers({}));
                nt(w);
              });
        },
        [tt, v],
      );
    return n.jsxs("div", {
      className: "vbox ui-mode",
      children: [
        !rt &&
          n.jsxs("dialog", {
            ref: Z,
            children: [
              n.jsxs("div", {
                className: "title",
                children: [
                  n.jsx("span", { className: "codicon codicon-lightbulb" }),
                  "Install browsers",
                ],
              }),
              n.jsxs("div", {
                className: "body",
                children: [
                  "Playwright did not find installed browsers.",
                  n.jsx("br", {}),
                  "Would you like to run `playwright install`?",
                  n.jsx("br", {}),
                  n.jsx("button", {
                    className: "button",
                    onClick: Lt,
                    children: "Install",
                  }),
                  n.jsx("button", {
                    className: "button secondary",
                    onClick: tt,
                    children: "Dismiss",
                  }),
                ],
              }),
            ],
          }),
        xt &&
          n.jsxs("div", {
            className: "disconnected",
            children: [
              n.jsx("div", {
                className: "title",
                children: "UI Mode disconnected",
              }),
              n.jsxs("div", {
                children: [
                  n.jsx("a", {
                    href: "#",
                    onClick: () => (window.location.href = "/"),
                    children: "Reload the page",
                  }),
                  " to reconnect",
                ],
              }),
            ],
          }),
        n.jsx(Qt, {
          sidebarSize: 250,
          minSidebarSize: 150,
          orientation: "horizontal",
          sidebarIsFirst: !0,
          settingName: "testListSidebar",
          main: n.jsxs("div", {
            className: "vbox",
            children: [
              n.jsxs("div", {
                className: it("vbox", !e && "hidden"),
                children: [
                  n.jsxs(K, {
                    children: [
                      n.jsx("div", {
                        className: "section-title",
                        style: { flex: "none" },
                        children: "Output",
                      }),
                      n.jsx(F, {
                        icon: "circle-slash",
                        title: "Clear output",
                        onClick: () => U.clear(),
                      }),
                      n.jsx("div", { className: "spacer" }),
                      n.jsx(F, {
                        icon: "close",
                        title: "Close",
                        onClick: () => s(!1),
                      }),
                    ],
                  }),
                  n.jsx(ce, { source: U }),
                ],
              }),
              n.jsx("div", {
                className: it("vbox", e && "hidden"),
                children: n.jsx(ve, {
                  item: j,
                  rootDir:
                    (dt = r == null ? void 0 : r.config) == null
                      ? void 0
                      : dt.rootDir,
                  revealSource: Et,
                  onOpenExternally: (_) =>
                    v == null
                      ? void 0
                      : v.openNoReply({
                          location: {
                            file: _.file,
                            line: _.line,
                            column: _.column,
                          },
                        }),
                }),
              }),
            ],
          }),
          sidebar: n.jsxs("div", {
            className: "vbox ui-mode-sidebar",
            children: [
              n.jsxs(K, {
                noShadow: !0,
                noMinHeight: !0,
                children: [
                  n.jsx("img", {
                    src: "playwright-logo.svg",
                    alt: "Playwright logo",
                  }),
                  n.jsx("div", {
                    className: "section-title",
                    children: "Playwright",
                  }),
                  n.jsx(F, {
                    icon: "refresh",
                    title: "Reload",
                    onClick: () => Q(),
                    disabled: C || T,
                  }),
                  n.jsx(F, {
                    icon: "terminal",
                    title: "Toggle output — " + (mt ? "⌃`" : "Ctrl + `"),
                    toggled: e,
                    onClick: () => {
                      s(!e);
                    },
                  }),
                  !rt &&
                    n.jsx(F, {
                      icon: "lightbulb-autofix",
                      style: { color: "var(--vscode-list-warningForeground)" },
                      title: "Playwright browsers are missing",
                      onClick: Mt,
                    }),
                ],
              }),
              n.jsx(he, {
                filterText: o,
                setFilterText: t,
                statusFilters: i,
                setStatusFilters: l,
                projectFilters: a,
                setProjectFilters: g,
                testModel: r,
                runTests: () => z("bounce-if-busy", f),
              }),
              n.jsxs(K, {
                noMinHeight: !0,
                children: [
                  !C &&
                    !d &&
                    n.jsx("div", {
                      className: "section-title",
                      children: "Tests",
                    }),
                  !C &&
                    d &&
                    n.jsx("div", {
                      "data-testid": "status-line",
                      className: "status-line",
                      children: n.jsxs("div", {
                        children: [
                          d.passed,
                          "/",
                          d.total,
                          " passed (",
                          ((d.passed / d.total) * 100) | 0,
                          "%)",
                        ],
                      }),
                    }),
                  C &&
                    d &&
                    n.jsx("div", {
                      "data-testid": "status-line",
                      className: "status-line",
                      children: n.jsxs("div", {
                        children: [
                          "Running ",
                          d.passed,
                          "/",
                          R.testIds.size,
                          " passed (",
                          ((d.passed / R.testIds.size) * 100) | 0,
                          "%)",
                        ],
                      }),
                    }),
                  n.jsx(F, {
                    icon: "play",
                    title: "Run all — F5",
                    onClick: () => z("bounce-if-busy", f),
                    disabled: C || T,
                  }),
                  n.jsx(F, {
                    icon: "debug-stop",
                    title: "Stop — " + (mt ? "⇧F5" : "Shift + F5"),
                    onClick: () => (v == null ? void 0 : v.stopTests({})),
                    disabled: !C || T,
                  }),
                  n.jsx(F, {
                    icon: "eye",
                    title: "Watch all",
                    toggled: D,
                    onClick: () => {
                      B({ value: new Set() }), J(!D);
                    },
                  }),
                  n.jsx(F, {
                    icon: "collapse-all",
                    title: "Collapse all",
                    onClick: () => {
                      St(ot + 1);
                    },
                  }),
                ],
              }),
              n.jsx(me, {
                filterText: o,
                testModel: r,
                testTree: Pt,
                testServerConnection: v,
                runningState: R,
                runTests: z,
                onItemSelected: h,
                watchAll: D,
                watchedTreeIds: u,
                setWatchedTreeIds: B,
                isLoading: T,
                requestedCollapseAllCount: ot,
                setFilterText: t,
                onRevealSource: yt,
              }),
              It,
              n.jsxs(K, {
                noShadow: !0,
                noMinHeight: !0,
                className: "settings-toolbar",
                onClick: () => jt(!Y),
                children: [
                  n.jsx("span", {
                    className: `codicon codicon-${Y ? "chevron-down" : "chevron-right"}`,
                    style: { marginLeft: 5 },
                    title: Y ? "Hide Settings" : "Show Settings",
                  }),
                  n.jsx("div", {
                    className: "section-title",
                    children: "Settings",
                  }),
                ],
              }),
              Y &&
                n.jsx(Xt, {
                  settings: [
                    { value: Ct, set: Nt, title: "Dark mode" },
                    { value: Rt, set: Bt, title: "Show route actions" },
                  ],
                }),
            ],
          }),
        }),
      ],
    });
  };
(async () => {
  if ((Gt(), window.location.protocol !== "file:")) {
    if (
      (window.location.href.includes("isUnderTest=true") &&
        (await new Promise((o) => setTimeout(o, 1e3))),
      !navigator.serviceWorker)
    )
      throw new Error(`Service workers are not supported.
Make sure to serve the website (${window.location}) via HTTPS or localhost.`);
    navigator.serviceWorker.register("sw.bundle.js"),
      navigator.serviceWorker.controller ||
        (await new Promise((o) => {
          navigator.serviceWorker.oncontrollerchange = () => o();
        })),
      setInterval(function () {
        fetch("ping");
      }, 1e4);
  }
  Jt(document.querySelector("#root")).render(n.jsx(be, {}));
})();
