var c;
((a) => {
  function e(s) {
    for (const t of s.splice(0)) t.dispose();
  }
  a.disposeAll = e;
})(c || (c = {}));
class r {
  constructor() {
    (this._listeners = new Set()),
      (this.event = (e, s) => {
        this._listeners.add(e);
        let t = !1;
        const i = this,
          n = {
            dispose() {
              t || ((t = !0), i._listeners.delete(e));
            },
          };
        return s && s.push(n), n;
      });
  }
  fire(e) {
    const s = !this._deliveryQueue;
    this._deliveryQueue || (this._deliveryQueue = []);
    for (const t of this._listeners)
      this._deliveryQueue.push({ listener: t, event: e });
    if (s) {
      for (let t = 0; t < this._deliveryQueue.length; t++) {
        const { listener: i, event: n } = this._deliveryQueue[t];
        i.call(null, n);
      }
      this._deliveryQueue = void 0;
    }
  }
  dispose() {
    this._listeners.clear(), this._deliveryQueue && (this._deliveryQueue = []);
  }
}
class u {
  constructor(e) {
    this._ws = new WebSocket(e);
  }
  onmessage(e) {
    this._ws.addEventListener("message", (s) => e(s.data));
  }
  onopen(e) {
    this._ws.addEventListener("open", e);
  }
  onerror(e) {
    this._ws.addEventListener("error", e);
  }
  onclose(e) {
    this._ws.addEventListener("close", e);
  }
  send(e) {
    this._ws.send(e);
  }
  close() {
    this._ws.close();
  }
}
class p {
  constructor(e) {
    (this._onCloseEmitter = new r()),
      (this._onReportEmitter = new r()),
      (this._onStdioEmitter = new r()),
      (this._onTestFilesChangedEmitter = new r()),
      (this._onLoadTraceRequestedEmitter = new r()),
      (this._lastId = 0),
      (this._callbacks = new Map()),
      (this._isClosed = !1),
      (this.onClose = this._onCloseEmitter.event),
      (this.onReport = this._onReportEmitter.event),
      (this.onStdio = this._onStdioEmitter.event),
      (this.onTestFilesChanged = this._onTestFilesChangedEmitter.event),
      (this.onLoadTraceRequested = this._onLoadTraceRequestedEmitter.event),
      (this._transport = e),
      this._transport.onmessage((t) => {
        const i = JSON.parse(t),
          { id: n, result: l, error: o, method: d, params: _ } = i;
        if (n) {
          const h = this._callbacks.get(n);
          if (!h) return;
          this._callbacks.delete(n), o ? h.reject(new Error(o)) : h.resolve(l);
        } else this._dispatchEvent(d, _);
      });
    const s = setInterval(() => this._sendMessage("ping").catch(() => {}), 3e4);
    (this._connectedPromise = new Promise((t, i) => {
      this._transport.onopen(t), this._transport.onerror(i);
    })),
      this._transport.onclose(() => {
        (this._isClosed = !0), this._onCloseEmitter.fire(), clearInterval(s);
      });
  }
  isClosed() {
    return this._isClosed;
  }
  async _sendMessage(e, s) {
    const t = globalThis.__logForTest;
    t == null || t({ method: e, params: s }), await this._connectedPromise;
    const i = ++this._lastId,
      n = { id: i, method: e, params: s };
    return (
      this._transport.send(JSON.stringify(n)),
      new Promise((l, o) => {
        this._callbacks.set(i, { resolve: l, reject: o });
      })
    );
  }
  _sendMessageNoReply(e, s) {
    this._sendMessage(e, s).catch(() => {});
  }
  _dispatchEvent(e, s) {
    e === "report"
      ? this._onReportEmitter.fire(s)
      : e === "stdio"
        ? this._onStdioEmitter.fire(s)
        : e === "testFilesChanged"
          ? this._onTestFilesChangedEmitter.fire(s)
          : e === "loadTraceRequested" &&
            this._onLoadTraceRequestedEmitter.fire(s);
  }
  async initialize(e) {
    await this._sendMessage("initialize", e);
  }
  async ping(e) {
    await this._sendMessage("ping", e);
  }
  async pingNoReply(e) {
    this._sendMessageNoReply("ping", e);
  }
  async watch(e) {
    await this._sendMessage("watch", e);
  }
  watchNoReply(e) {
    this._sendMessageNoReply("watch", e);
  }
  async open(e) {
    await this._sendMessage("open", e);
  }
  openNoReply(e) {
    this._sendMessageNoReply("open", e);
  }
  async resizeTerminal(e) {
    await this._sendMessage("resizeTerminal", e);
  }
  resizeTerminalNoReply(e) {
    this._sendMessageNoReply("resizeTerminal", e);
  }
  async checkBrowsers(e) {
    return await this._sendMessage("checkBrowsers", e);
  }
  async installBrowsers(e) {
    await this._sendMessage("installBrowsers", e);
  }
  async runGlobalSetup(e) {
    return await this._sendMessage("runGlobalSetup", e);
  }
  async runGlobalTeardown(e) {
    return await this._sendMessage("runGlobalTeardown", e);
  }
  async startDevServer(e) {
    return await this._sendMessage("startDevServer", e);
  }
  async stopDevServer(e) {
    return await this._sendMessage("stopDevServer", e);
  }
  async clearCache(e) {
    return await this._sendMessage("clearCache", e);
  }
  async listFiles(e) {
    return await this._sendMessage("listFiles", e);
  }
  async listTests(e) {
    return await this._sendMessage("listTests", e);
  }
  async runTests(e) {
    return await this._sendMessage("runTests", e);
  }
  async findRelatedTestFiles(e) {
    return await this._sendMessage("findRelatedTestFiles", e);
  }
  async stopTests(e) {
    await this._sendMessage("stopTests", e);
  }
  stopTestsNoReply(e) {
    this._sendMessageNoReply("stopTests", e);
  }
  async closeGracefully(e) {
    await this._sendMessage("closeGracefully", e);
  }
  close() {
    try {
      this._transport.close();
    } catch {}
  }
}
export { p as T, u as W };
